<?php
/**
 * Boxwise
 *
 * @package boxwise
 */



if (!defined('ABSPATH')) {
	exit;
}
$boxwise = new \BoxWise\Flexbox_Block($attributes);

?>
<?php // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>
<div <?php echo get_block_wrapper_attributes($boxwise->wrapper_attributes()); ?>>
	<?php
	if (!empty($block->inner_blocks)) {
		foreach ($block->inner_blocks as $boxwise_inner_block) {
			echo $boxwise_inner_block->render();
		}
	}

	?>
</div>