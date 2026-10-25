<?php
/**
 * Plugin Name:       Boxwise
 * Description:       Boxwise is Gutenberg block designed to enhance the WordPress block editor.
 * Version:           0.1.17
 * Requires at least: 7.1
 * Requires PHP:      7.4
 * Author:            Tahir Asadli
 * Author URI:        https://tahir-asadli.github.io
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       boxwise
 *
 * @package boxwise
 */

if (!defined('ABSPATH')) {
	exit; // Exit if accessed directly.
}

define('BOXWISE_NAME', 'Boxwise');
define('BOXWISE_VERSION', '0.1.17');
define('BOXWISE_SLUG', 'boxwise');
define('BOXWISE_PLUGIN_FILE', 'boxwise/boxwise.php');



require_once __DIR__ . '/includes/class-flexbox-block.php';
require_once __DIR__ . '/includes/updater.php';

new GitHubUpdater(BOXWISE_VERSION, BOXWISE_SLUG, BOXWISE_PLUGIN_FILE, 'tahir-asadli/boxwise');

/**
 * Add a custom "View details" link to the plugin row meta.
 *
 * @param array    $plugin_meta An array of the plugin's metadata.
 * @param string   $plugin_file Path to the plugin file relative to plugins directory.
 * @param array    $plugin_data An array of plugin data.
 * @param string   $status      Status of the plugin.
 * @return array
 */
function my_custom_plugin_row_meta($plugin_meta, $plugin_file, $plugin_data, $status)
{
	// Replace 'my-plugin-folder/my-plugin.php' with your actual plugin file path
	if ('boxwise/boxwise.php' === $plugin_file) {

		// Option A: Link to an external URL (e.g., your website or documentation)
		$plugin_meta[] = sprintf(
			'<a href="%s" target="_blank" aria-label="%s">%s</a>',
			esc_url('https://github.com/tahir-asadli/boxwise'),
			esc_attr(__('View plugin documentation', 'boxwise')),
			__('Documentation', 'boxwise')
		);

		// Option B: If you want to open a thickbox modal (similar to WP.org repository style)

		$plugin_meta[] = sprintf(
			'<a href="%s" class="thickbox open-plugin-details-modal" aria-label="%s" data-title="%s">%s</a>',
			esc_url(network_admin_url('plugin-install.php?tab=plugin-information&plugin=' . BOXWISE_SLUG . '&TB_iframe=true&width=600&height=550')),
			esc_attr(sprintf(__('More information about %s', 'boxwise'), $plugin_data['Name'])),
			esc_attr($plugin_data['Name']),
			__('View details', 'boxwise')
		);

	}

	return $plugin_meta;
}
add_filter('plugin_row_meta', 'boxwise_plugin_row_meta', 10, 4);

/**
 * Intercept WordPress Plugins API request for your custom plugin slug
 * to populate the modal popup with custom information.
 */
add_filter('plugins_api', 'boxwise_plugin_details_popup', 10, 3);

function my_custom_plugin_details_popup($result, $action, $args)
{
	// 1. Check if the action is requesting plugin information for YOUR plugin slug
	// $my_plugin_slug = 'my-custom-plugin'; // Change this to your plugin's unique slug

	if ('plugin_information' !== $action || BOXWISE_SLUG !== $args->slug) {
		return $result; // Return early if it's a different plugin or action
	}

	// 2. Build the plugin information object
	$plugin_info = new stdClass();

	// Header & Meta Data
	$plugin_info->name = BOXWISE_NAME;
	$plugin_info->slug = BOXWISE_SLUG;
	$plugin_info->version = BOXWISE_VERSION;
	$plugin_info->author = '<a href="https://tahir-asadli.github.io">Tahir Asadli</a>';
	$plugin_info->homepage = 'https://github.com/tahir-asadli/boxwise';
	$plugin_info->requires = '5.8';
	$plugin_info->tested = '6.5';
	$plugin_info->requires_php = '7.4';
	$plugin_info->last_updated = '2026-03-15';
	// $plugin_info->download_link  = 'https://example.com/downloads/my-custom-plugin.zip';

	// Banner Images (Optional - standard dimensions: 772x250 or 1544x500 for high-res)
	$plugin_info->banners = array(
		'low' => 'https://example.com/assets/banner-772x250.png',
		'high' => 'https://example.com/assets/banner-1544x500.png',
	);

	// Sidebar Extra Details
	$plugin_info->active_installs = 1500;
	$plugin_info->rating = 98; // Percentage scale (0 to 100)
	$plugin_info->num_ratings = 42;

	// 3. Define the Content Tabs inside the Popup (HTML allowed)
	$plugin_info->sections = array(
		'description' => '<h2>Plugin Overview</h2><p>This is the detailed description of what your plugin does, its features, and advantages.</p>',
		'installation' => '<h2>Installation Steps</h2><ol><li>Upload the zip file to WP Admin.</li><li>Activate the plugin.</li><li>Navigate to Settings &gt; Custom Plugin.</li></ol>',
		'changelog' => '<h2>Changelog</h2><h4>Version 1.2.0</h4><ul><li>Added new dashboard widget.</li><li>Fixed minor styling issue.</li></ul>',
		'faq' => '<h2>Frequently Asked Questions</h2><p><strong>Q: Is this plugin free?</strong><br>A: Yes, it is free for internal use.</p>',
		'custom_tab' => '<h2>Custom Information Tab</h2><p>You can add arbitrary tabs with unique array keys!</p>',
	);

	return $plugin_info;
}
/**
 * Registers the block(s) metadata from the `blocks-manifest.php` and registers the block type(s)
 * based on the registered block metadata. Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://make.wordpress.org/core/2025/03/13/more-efficient-block-type-registration-in-6-8/
 * @see https://make.wordpress.org/core/2024/10/17/new-block-type-registration-apis-to-improve-performance-in-wordpress-6-7/
 */
function boxwise_block_init()
{
	wp_register_block_types_from_metadata_collection(__DIR__ . '/build', __DIR__ . '/build/blocks-manifest.php');
}
add_action('init', 'boxwise_block_init');