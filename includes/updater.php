<?php

class GitHubUpdater
{
  private $slug = '';                    // plugin folder name
  private $plugin_file = '';      // folder/main-file.php
  private $repo = '';
  private $version;
  // private $json_url = 'https://example.com/updates/boxwise.json';

  public function __construct($version, $slug, $plugin_file, $repo)
  {
    $this->version = $version;
    $this->slug = $slug;
    $this->plugin_file = $plugin_file;
    $this->repo = $repo;
    add_filter('pre_set_site_transient_update_plugins', [$this, 'check_update']);
    add_filter('plugins_api', [$this, 'get_plugin_info'], 20, 3);
  }

  public function get_plugin_info()
  {
    $readme_file_url = 'https://raw.githubusercontent.com/' . $this->repo . '/refs/heads/main/readme.txt?time=' . time();
    try {
      $data = get_file_data($readme_file_url, array(
        'stable_tag' => 'Stable tag',
        'tested_up_to' => 'Tested up to',
        'requires_php' => 'Requires PHP',
        'requires_wp' => 'Requires at least',
      ));
      if (!empty($data)) {
        return (object) [
          'name' => 'Boxwise',
          'slug' => 'boxwise',
          'version' => $data['stable_tag'],
          'requires' => $data['requires_wp'],
          'tested' => $data['tested_up_to'],
          'requires_php' => $data['requires_php'],
          'last_updated' => '',
          // 'download_link' => 'https://github.com/' . $this->repo . '/archive/refs/tags/' . $this->slug . '.zip',
          'download_link' => 'https://github.com/' . $this->repo . '/releases/download/' . $data['stable_tag'] . '/' . $this->slug . '.zip',
          'sections' => [],
        ];
      }
      return [];
    } catch (\Throwable $th) {
      throw $th;
    }
    return [];
  }

  // public function _plugin_info()
  // {
  //   return (object) [
  //     'name' => 'Boxwise',
  //     'slug' => 'boxwise',
  //     'version' => '0.1.2',
  //     'requires' => '',
  //     'tested' => '',
  //     'requires_php' => '',
  //     'last_updated' => '',
  //     'download_link' => 'https://github.com/tahir-asadli/ultimate-flexbox/archive/refs/tags/0.1.2.zip',
  //     'sections' => [],
  //   ];
  // }

  // private function get_remote()
  // {
  //   $cached = get_transient('myplugin_update_data');
  //   if (false !== $cached) {
  //     return $cached;
  //   }
  //   $res = wp_remote_get($this->json_url, ['timeout' => 10]);
  //   if (is_wp_error($res) || 200 !== wp_remote_retrieve_response_code($res)) {
  //     return false;
  //   }
  //   $data = json_decode(wp_remote_retrieve_body($res));
  //   if ($data) {
  //     set_transient('myplugin_update_data', $data, 6 * HOUR_IN_SECONDS);
  //   }
  //   return $data;
  // }

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

    $data = $this->get_plugin_info();
    $transient->response[$this->plugin_file] = (object) [
      'slug' => $this->slug,
      'plugin' => $this->plugin_file,
      'new_version' => $data->version ?? '',
      'package' => $data->download_link ?? '',
      'tested' => $data->tested ?? '',
      'requires_php' => $data->requires_php ?? '',
      'url' => 'https://github.com/' . $this->repo,
    ];
    return $transient;
  }

  // public function plugin_info($result, $action, $args)
  // {
  //   if ('plugin_information' !== $action || empty($args->slug) || $args->slug !== $this->slug) {
  //     return $result;
  //   }
  //   $remote = $this->get_remote();
  //   if (!$remote) {
  //     return $result;
  //   }
  //   return (object) [
  //     'name' => 'Boxwise',
  //     'slug' => $this->slug,
  //     'version' => $remote->version,
  //     'requires' => $remote->requires ?? '',
  //     'tested' => $remote->tested ?? '',
  //     'requires_php' => $remote->requires_php ?? '',
  //     'last_updated' => $remote->last_updated ?? '',
  //     'download_link' => 'https://github.com/tahir-asadli/ultimate-flexbox/archive/refs/tags/0.1.2.zip',
  //     'sections' => (array) ($remote->sections ?? []),
  //   ];
  // }
}

