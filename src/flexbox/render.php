<?php
/**
 * Ultimate Flexbox
 *
 * @package ultimate-flexbox
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

// Wrap
$ultimate_flexbox_wrap            = ! empty( $attributes['wrap'] ) ? $attributes['wrap'] : '';
$ultimate_flexbox_tablet_wrap     = ! empty( $attributes['tabletWrap'] ) ? $attributes['tabletWrap'] : '';
$ultimate_flexbox_mobile_wrap     = ! empty( $attributes['mobileWrap'] ) ? $attributes['mobileWrap'] : '';

if ( $ultimate_flexbox_wrap ) {
	$ultimate_flexbox_classes[] = 'taufb--wrap-' . $ultimate_flexbox_wrap;
}
if ( $ultimate_flexbox_tablet_wrap ) {
	$ultimate_flexbox_classes[] = 'taufb--wrap-tablet-' . $ultimate_flexbox_tablet_wrap;
}
if ( $ultimate_flexbox_mobile_wrap ) {
	$ultimate_flexbox_classes[] = 'taufb--wrap-mobile-' . $ultimate_flexbox_mobile_wrap;
}

// Display
$ultimate_flexbox_display            = ! empty( $attributes['display'] ) ? $attributes['display'] : '';
$ultimate_flexbox_tablet_display     = ! empty( $attributes['tabletDisplay'] ) ? $attributes['tabletDisplay'] : '';
$ultimate_flexbox_mobile_display     = ! empty( $attributes['mobileDisplay'] ) ? $attributes['mobileDisplay'] : '';

if ( $ultimate_flexbox_display ) {
	$ultimate_flexbox_classes[] = 'taufb--display-' . $ultimate_flexbox_display;
}
if ( $ultimate_flexbox_tablet_display ) {
	$ultimate_flexbox_classes[] = 'taufb--display-tablet-' . $ultimate_flexbox_tablet_display;
}
if ( $ultimate_flexbox_mobile_display ) {
	$ultimate_flexbox_classes[] = 'taufb--display-mobile-' . $ultimate_flexbox_mobile_display;
}

// Grow
$ultimate_flexbox_grow            = ! empty( $attributes['grow'] ) ? $attributes['grow'] : '';
$ultimate_flexbox_tablet_grow     = ! empty( $attributes['tabletGrow'] ) ? $attributes['tabletGrow'] : '';
$ultimate_flexbox_mobile_grow     = ! empty( $attributes['mobileGrow'] ) ? $attributes['mobileGrow'] : '';

if ( $ultimate_flexbox_grow ) {
	$ultimate_flexbox_classes[] = 'taufb--grow-' . $ultimate_flexbox_grow;
}
if ( $ultimate_flexbox_tablet_grow ) {
	$ultimate_flexbox_classes[] = 'taufb--grow-tablet-' . $ultimate_flexbox_tablet_grow;
}
if ( $ultimate_flexbox_mobile_grow ) {
	$ultimate_flexbox_classes[] = 'taufb--grow-mobile-' . $ultimate_flexbox_mobile_grow;
}

// Shrink
$ultimate_flexbox_shrink            = ! empty( $attributes['shrink'] ) ? $attributes['shrink'] : '';
$ultimate_flexbox_tablet_shrink     = ! empty( $attributes['tabletShrink'] ) ? $attributes['tabletShrink'] : '';
$ultimate_flexbox_mobile_shrink     = ! empty( $attributes['mobileShrink'] ) ? $attributes['mobileShrink'] : '';

if ( $ultimate_flexbox_shrink ) {
	$ultimate_flexbox_classes[] = 'taufb--shrink-' . $ultimate_flexbox_shrink;
}
if ( $ultimate_flexbox_tablet_shrink ) {
	$ultimate_flexbox_classes[] = 'taufb--shrink-tablet-' . $ultimate_flexbox_tablet_shrink;
}
if ( $ultimate_flexbox_mobile_shrink ) {
	$ultimate_flexbox_classes[] = 'taufb--shrink-mobile-' . $ultimate_flexbox_mobile_shrink;
}


$ultimate_flexbox_additional_attributes = array(
	'class' => join( ' ', $ultimate_flexbox_classes ),
	'id'    => wp_unique_id( 'taufb-' ),
);

$ultimate_flexbox_styles = [];
// Width
if(!empty($attributes['width'])) {
	$ultimate_flexbox_styles['width'] = $attributes['width'];
}
if(!empty($attributes['tabletWidth'])) {
	$ultimate_flexbox_styles['tabletWidth'] = $attributes['tabletWidth'];
}
if(!empty($attributes['mobileWidth'])) {
	$ultimate_flexbox_styles['mobileWidth'] = $attributes['mobileWidth'];
}

// Column Gap
if(!empty($attributes['columnGap'])) {
	$ultimate_flexbox_styles['columnGap'] = $attributes['columnGap'];
}
if(!empty($attributes['tabletColumnGap'])) {
	$ultimate_flexbox_styles['tabletColumnGap'] = $attributes['tabletColumnGap'];
}
if(!empty($attributes['mobileColumnGap'])) {
	$ultimate_flexbox_styles['mobileColumnGap'] = $attributes['mobileColumnGap'];
}

// Row Gap
if(!empty($attributes['rowGap'])) {
	$ultimate_flexbox_styles['rowGap'] = $attributes['rowGap'];
}
if(!empty($attributes['tabletRowGap'])) {
	$ultimate_flexbox_styles['tabletRowGap'] = $attributes['tabletRowGap'];
}
if(!empty($attributes['mobileRowGap'])) {
	$ultimate_flexbox_styles['mobileRowGap'] = $attributes['mobileRowGap'];
}

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

<?php if(count($ultimate_flexbox_styles)) { ?>
	<style>
		@media only screen {
			#<?php echo esc_attr( $ultimate_flexbox_additional_attributes['id'] ); ?> {
				<?php if(!empty($ultimate_flexbox_styles['width'])) {?>
					<?php echo sprintf("width: %s;", $ultimate_flexbox_styles['width']); ?>
				<?php } ?>
				<?php if(!empty($ultimate_flexbox_styles['columnGap'])) {?>
					<?php echo sprintf("column-gap: %s;", $ultimate_flexbox_styles['columnGap']); ?>
				<?php } ?>
				<?php if(!empty($ultimate_flexbox_styles['rowGap'])) {?>
					<?php echo sprintf("row-gap: %s;", $ultimate_flexbox_styles['rowGap']); ?>
				<?php } ?>
			}
		}
		@media (480px < width <= 782px) {
			#<?php echo esc_attr( $ultimate_flexbox_additional_attributes['id'] ); ?> {
				<?php if(!empty($ultimate_flexbox_styles['tabletWidth'])) {?>
					<?php echo sprintf("width: %s;", $ultimate_flexbox_styles['tabletWidth']); ?>
				<?php } ?>
				<?php if(!empty($ultimate_flexbox_styles['tabletColumnGap'])) {?>
					<?php echo sprintf("column-gap: %s;", $ultimate_flexbox_styles['tabletColumnGap']); ?>
				<?php } ?>
				<?php if(!empty($ultimate_flexbox_styles['tabletRowGap'])) {?>
					<?php echo sprintf("row-gap: %s;", $ultimate_flexbox_styles['tabletRowGap']); ?>
				<?php } ?>
			}
		}

		@media (width <= 480px) {
			#<?php echo esc_attr( $ultimate_flexbox_additional_attributes['id'] ); ?> {
				<?php if(!empty($ultimate_flexbox_styles['mobileWidth'])) {?>
					<?php echo sprintf("width: %s;", $ultimate_flexbox_styles['mobileWidth']); ?>
				<?php } ?>
				<?php if(!empty($ultimate_flexbox_styles['mobileColumnGap'])) {?>
					<?php echo sprintf("column-gap: %s;", $ultimate_flexbox_styles['mobileColumnGap']); ?>
				<?php } ?>
				<?php if(!empty($ultimate_flexbox_styles['mobileRowGap'])) {?>
					<?php echo sprintf("row-gap: %s;", $ultimate_flexbox_styles['mobileRowGap']); ?>
				<?php } ?>
			}
		}
	</style>

<?php }?>
