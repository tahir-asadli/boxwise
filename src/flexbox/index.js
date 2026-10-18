import { addFilter } from '@wordpress/hooks'
import { createHigherOrderComponent } from '@wordpress/compose'
import {
	PanelBody, PanelRow, SelectControl, __experimentalToggleGroupControl as ToggleGroupControl,
	__experimentalToggleGroupControlOption as ToggleGroupControlOption,
	__experimentalToggleGroupControlOptionIcon as ToggleGroupControlOptionIcon,
	__experimentalUnitControl as UnitControl
} from '@wordpress/components';
/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
import { registerBlockType } from '@wordpress/blocks';
/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */

// Icon
import { ReactComponent as blockIcon } from "./icon.svg";

import './style.scss';
import Edit from './edit';
import Save from './save';
import metadata from './block.json';
import { InspectorControls } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
registerBlockType(metadata.name, {
	/**
	 * @see ./edit.js
	 */
	icon: blockIcon,
	edit: Edit,
	save: Save
});


addFilter('blocks.registerBlockType', 'boxwise/flexbox', (settings, name) => {
	if ('core/group' === name) {
		return {
			...settings,
			attributes: {
				...settings.attributes,
				css_position: {
					type: 'string',
					default: ''
				}
			}
		};
	}
	return settings;
})




const PositionEdit = (props) => {
	const setPosition = (value) => {
		props.setAttributes({
			css_position: value
		})
	}

	return <InspectorControls group='styles'>
		<PanelBody title={__('CSS Position')}>
			<PanelRow>
				<SelectControl label={__('Position')}
					value={props.attributes.css_position}
					options={[
						{
							label: 'None',
							value: ''
						},
						{
							label: 'Static',
							value: 'static'
						},
						{
							label: 'Absolute',
							value: 'absolute'
						},
						{
							label: 'Fixed',
							value: 'fixed'
						},
						{
							label: 'Sticky',
							value: 'sticky'
						}
					]}
					onChange={setPosition}
				/>

			</PanelRow>
		</PanelBody>
	</InspectorControls>
}


addFilter('editor.BlockEdit', 'boxwise/flexbox', createHigherOrderComponent((BlockEdit) => {
	console.log('called');

	return (props) => {
		if ('core/group' !== props.name) {
			return <BlockEdit {...props} />
		}

		return <>
			<BlockEdit {...props} />
			<PositionEdit {...props} />
		</>
	}
}))