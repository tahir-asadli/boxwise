<?php
// This file is generated. Do not modify it manually.
return array(
	'flexbox' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'ultimate-flexbox/ultimate-flexbox',
		'version' => '0.1.0',
		'title' => 'Ultimate Flexbox',
		'category' => 'widgets',
		'icon' => 'smiley',
		'description' => 'Ultimate Flexbox is Gutenberg block designed to enhance the WordPress block editor.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false,
			'color' => array(
				'background' => true,
				'text' => true
			),
			'typography' => array(
				'fontSize' => true,
				'lineHeight' => true,
				'textAlign' => true
			),
			'background' => array(
				'backgroundImage' => true,
				'backgroundSize' => true
			),
			'shadow' => true,
			'align' => true,
			'alignWide' => true,
			'spacing' => array(
				'margin' => true,
				'padding' => true
			)
		),
		'attributes' => array(
			'justifyContent' => array(
				'type' => 'string',
				'default' => ''
			),
			'tabletJustifyContent' => array(
				'type' => 'string',
				'default' => ''
			),
			'mobileJustifyContent' => array(
				'type' => 'string',
				'default' => ''
			),
			'alignItems' => array(
				'type' => 'string',
				'default' => ''
			),
			'tabletAlignItems' => array(
				'type' => 'string',
				'default' => ''
			),
			'mobileAlignItems' => array(
				'type' => 'string',
				'default' => ''
			),
			'direction' => array(
				'type' => 'string',
				'default' => ''
			),
			'tabletDirection' => array(
				'type' => 'string',
				'default' => ''
			),
			'mobileDirection' => array(
				'type' => 'string',
				'default' => ''
			),
			'wrap' => array(
				'type' => 'string',
				'default' => ''
			),
			'tabletWrap' => array(
				'type' => 'string',
				'default' => ''
			),
			'mobileWrap' => array(
				'type' => 'string',
				'default' => ''
			),
			'width' => array(
				'type' => 'string',
				'default' => ''
			),
			'tabletWidth' => array(
				'type' => 'string',
				'default' => ''
			),
			'mobileWidth' => array(
				'type' => 'string',
				'default' => ''
			),
			'display' => array(
				'type' => 'string',
				'default' => ''
			),
			'tabletDisplay' => array(
				'type' => 'string',
				'default' => ''
			),
			'mobileDisplay' => array(
				'type' => 'string',
				'default' => ''
			),
			'grow' => array(
				'type' => 'string',
				'default' => ''
			),
			'tabletGrow' => array(
				'type' => 'string',
				'default' => ''
			),
			'mobileGrow' => array(
				'type' => 'string',
				'default' => ''
			),
			'shrink' => array(
				'type' => 'string',
				'default' => ''
			),
			'tabletShrink' => array(
				'type' => 'string',
				'default' => ''
			),
			'mobileShrink' => array(
				'type' => 'string',
				'default' => ''
			),
			'columnGap' => array(
				'type' => 'string',
				'default' => ''
			),
			'tabletColumnGap' => array(
				'type' => 'string',
				'default' => ''
			),
			'mobileColumnGap' => array(
				'type' => 'string',
				'default' => ''
			),
			'rowGap' => array(
				'type' => 'string',
				'default' => ''
			),
			'tabletRowGap' => array(
				'type' => 'string',
				'default' => ''
			),
			'mobileRowGap' => array(
				'type' => 'string',
				'default' => ''
			)
		),
		'textdomain' => 'ultimate-flexbox',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php'
	)
);
