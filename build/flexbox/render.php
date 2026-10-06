<?php
/**
 * Ultimate Flexbox
 *
 * @package ultimate-flexbox
 */



if (!defined('ABSPATH')) {
	exit;
}

$ultimate_flexbox = new \UltimateFlexbox\Flexbox_Block($attributes);

?>
<?php // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>
<div <?php echo get_block_wrapper_attributes($ultimate_flexbox->wrapper_attributes()); ?>>
	<?php

	if (!empty($block->inner_blocks)) {
		foreach ($block->inner_blocks as $ultimate_flexbox_inner_block) {
			echo wp_kses_post($ultimate_flexbox_inner_block->render());
		}
	}

	?>
</div>
<?php echo $ultimate_flexbox->get_styles(); ?>