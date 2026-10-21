<?php

class My_Plugin_Updater
{
  private $slug = 'boxwise';                    // plugin folder name
  private $plugin_file = 'boxwise/boxwise.php';      // folder/main-file.php
  private $json_url = 'https://example.com/updates/boxwise.json';
  private $version;

  public function __construct($version)
  {
    $this->version = $version;
    add_filter('pre_set_site_transient_update_plugins', [$this, 'check_update']);
    add_filter('plugins_api', [$this, '_plugin_info'], 20, 3);
  }

  public function _plugin_info()
  {
    return (object) [
      'name' => 'Boxwise',
      'slug' => 'boxwise',
      'version' => '0.1.0',
      'requires' => '',
      'tested' => '',
      'requires_php' => '',
      'last_updated' => '',
      'download_link' => '',
      'sections' => [],
    ];
  }

  private function get_remote()
  {
    $cached = get_transient('myplugin_update_data');
    if (false !== $cached) {
      return $cached;
    }
    $res = wp_remote_get($this->json_url, ['timeout' => 10]);
    if (is_wp_error($res) || 200 !== wp_remote_retrieve_response_code($res)) {
      return false;
    }
    $data = json_decode(wp_remote_retrieve_body($res));
    if ($data) {
      set_transient('myplugin_update_data', $data, 6 * HOUR_IN_SECONDS);
    }
    return $data;
  }

  public function check_update($transient)
  {
    // if (empty($transient->checked)) {
    //   return $transient;
    // }
    // $remote = $this->get_remote();
    // if ($remote && version_compare($this->version, $remote->version, '<')) {
    //   $transient->response[$this->plugin_file] = (object) [
    //     'slug' => $this->slug,
    //     'plugin' => $this->plugin_file,
    //     'new_version' => $remote->version,
    //     'package' => $remote->download_url,
    //     'tested' => $remote->tested ?? '',
    //     'requires_php' => $remote->requires_php ?? '',
    //     'url' => 'https://example.com/my-plugin',
    //   ];
    // }


    $transient->response[$this->plugin_file] = (object) [
      'slug' => $this->slug,
      'plugin' => $this->plugin_file,
      'new_version' => '0.1.1',
      'package' => 'https://example.com/updates/boxwise.json',
      'tested' => '',
      'requires_php' => '',
      'url' => 'https://example.com/my-plugin',
    ];
    return $transient;
  }

  public function plugin_info($result, $action, $args)
  {
    if ('plugin_information' !== $action || empty($args->slug) || $args->slug !== $this->slug) {
      return $result;
    }
    $remote = $this->get_remote();
    if (!$remote) {
      return $result;
    }
    return (object) [
      'name' => 'Boxwise',
      'slug' => $this->slug,
      'version' => $remote->version,
      'requires' => $remote->requires ?? '',
      'tested' => $remote->tested ?? '',
      'requires_php' => $remote->requires_php ?? '',
      'last_updated' => $remote->last_updated ?? '',
      'download_link' => 'https://github.com/tahir-asadli/ultimate-flexbox/archive/refs/tags/0.1.2.zip',
      'sections' => (array) ($remote->sections ?? []),
    ];
  }
}

