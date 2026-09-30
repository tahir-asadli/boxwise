<?php
/**
 * Flexbox
 *
 * @package taufb
 */



if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
$ultimate_flexbox_classes = ['taufb'];

$ultimate_flexbox_justify_content        = ! empty( $attributes['justifyContent'] ) ? $attributes['justifyContent'] : '';
$ultimate_flexbox_tablet_justify_content = ! empty( $attributes['tabletJustifyContent'] ) ? $attributes['tabletJustifyContent'] : '';
$ultimate_flexbox_mobile_justify_content = ! empty( $attributes['mobileJustifyContent'] ) ? $attributes['mobileJustifyContent'] : '';

if ( $ultimate_flexbox_justify_content ) {
	$ultimate_flexbox_classes[] = 'taufb--justify-' . $ultimate_flexbox_justify_content;
}
if ( $ultimate_flexbox_tablet_justify_content ) {
	$ultimate_flexbox_classes[] = 'taufb--justify-tablet-' . $ultimate_flexbox_tablet_justify_content;
}
if ( $ultimate_flexbox_mobile_justify_content ) {
	$ultimate_flexbox_classes[] = 'taufb--justify-mobile-' . $ultimate_flexbox_mobile_justify_content;
}


$ultimate_flexbox_additional_attributes = array(
	'class' => join( ' ', $ultimate_flexbox_classes ),
	'id'    => wp_unique_id( 'taufb-' ),
);
?>
<div <?php echo get_block_wrapper_attributes($ultimate_flexbox_additional_attributes); ?>>
	<?php

	if ( ! empty( $block->inner_blocks ) ) {
		foreach ( $block->inner_blocks as $ultimate_flexbox_inner_block ) {
			echo wp_kses_post( $ultimate_flexbox_inner_block->render() );
		}
	}

	?>
</div>
