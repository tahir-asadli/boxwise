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

// Justify Content
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

// Align Items
$ultimate_flexbox_align_items            = ! empty( $attributes['alignItems'] ) ? $attributes['alignItems'] : '';
$ultimate_flexbox_tablet_align_items     = ! empty( $attributes['tabletAlignItems'] ) ? $attributes['tabletAlignItems'] : '';
$ultimate_flexbox_mobile_align_items     = ! empty( $attributes['mobileAlignItems'] ) ? $attributes['mobileAlignItems'] : '';

if ( $ultimate_flexbox_align_items ) {
	$ultimate_flexbox_classes[] = 'taufb--align-' . $ultimate_flexbox_align_items;
}
if ( $ultimate_flexbox_tablet_align_items ) {
	$ultimate_flexbox_classes[] = 'taufb--align-tablet-' . $ultimate_flexbox_tablet_align_items;
}
if ( $ultimate_flexbox_mobile_align_items ) {
	$ultimate_flexbox_classes[] = 'taufb--align-mobile-' . $ultimate_flexbox_mobile_align_items;
}

// Direction
$ultimate_flexbox_direction            = ! empty( $attributes['direction'] ) ? $attributes['direction'] : '';
$ultimate_flexbox_tablet_direction     = ! empty( $attributes['tabletDirection'] ) ? $attributes['tabletDirection'] : '';
$ultimate_flexbox_mobile_direction     = ! empty( $attributes['mobileDirection'] ) ? $attributes['mobileDirection'] : '';

if ( $ultimate_flexbox_direction ) {
	$ultimate_flexbox_classes[] = 'taufb--direction-' . $ultimate_flexbox_direction;
}
if ( $ultimate_flexbox_tablet_direction ) {
	$ultimate_flexbox_classes[] = 'taufb--direction-tablet-' . $ultimate_flexbox_tablet_direction;
}
if ( $ultimate_flexbox_mobile_direction ) {
	$ultimate_flexbox_classes[] = 'taufb--direction-mobile-' . $ultimate_flexbox_mobile_direction;
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
