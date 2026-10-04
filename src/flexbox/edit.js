// https://wordpress.github.io/gutenberg/
// https://wordpress.github.io/gutenberg/?path=/story/icons-icon--library
// https://github.com/tahir-asadli/block-booster/blob/main/src/flexbox/edit.js
// https://wordpress.github.io/gutenberg/?path=/story/icons-icon--library

/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';
/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { InspectorControls, useBlockProps, useInnerBlocksProps, } from '@wordpress/block-editor';
/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';
import {
	PanelBody, Button, __experimentalToggleGroupControl as ToggleGroupControl,
	__experimentalToggleGroupControlOption as ToggleGroupControlOption,
	__experimentalToggleGroupControlOptionIcon as ToggleGroupControlOptionIcon,
} from '@wordpress/components';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */

// import {
// 	AlignVerticalJustifyEnd,
// 	AlignVerticalJustifyStart,
// 	AlignVerticalJustifyCenter,
// 	AlignVerticalDistributeCenter,
// 	AlignVerticalSpaceBetween,
// 	AlignStartVertical,
// 	AlignEndVertical,
// 	AlignHorizontalJustifyCenter,
// 	AlignHorizontalSpaceBetween,
// 	AlignHorizontalSpaceAround,
// 	Ban,
// } from "lucide-react";
import { formatLowercase, formatUppercase, alignCenter } from '@wordpress/icons';
import { classNames, ICONS, useDeviceType } from '../lib';

export default function Edit(props) {

	const { setAttributes } = props;
	const deviceType = useDeviceType();
	console.log('deviceType', deviceType);

	const blockProps = useBlockProps({
		className: classNames(props.attributes).join(" "),
	});
	const innerBlocksProps = useInnerBlocksProps(blockProps);
	return <>
		<InspectorControls>
			<PanelBody title={__('Flexbox settings', 'flex-block')}>
				{deviceType == "Desktop" ? <div>is desktop</div> : deviceType == "Tablet" ? <div>is tablet</div> : <div>is mobile</div>}
				{deviceType == "Desktop" ? <DesktopSettings setAttributes={setAttributes} attributes={props.attributes} /> : deviceType == "Tablet" ? <TabletSettings setAttributes={setAttributes} attributes={props.attributes} /> : <MobileSettings setAttributes={setAttributes} attributes={props.attributes} />}
			</PanelBody>
		</InspectorControls>
		<InspectorControls group="viewport">
			<PanelBody title={__('Flexbox settings', 'flex-block')}>
				{deviceType == "Desktop" ? <div>is desktop</div> : deviceType == "Tablet" ? <div>is tablet</div> : <div>is mobile</div>}
				{deviceType == "Desktop" ? <DesktopSettings setAttributes={setAttributes} attributes={props.attributes} /> : deviceType == "Tablet" ? <TabletSettings setAttributes={setAttributes} attributes={props.attributes} /> : <MobileSettings setAttributes={setAttributes} attributes={props.attributes} />}
			</PanelBody>
		</InspectorControls>
		<div {...innerBlocksProps}></div>
	</>
}


const DesktopSettings = ({ setAttributes, attributes }) => {
	return <>
		<SettingJustifyContent setAttributes={setAttributes} attributes={attributes} device={"Desktop"} />
		<SettingAlignItems setAttributes={setAttributes} attributes={attributes} device={"Desktop"} />
		<SettingDirection setAttributes={setAttributes} attributes={attributes} device={"Desktop"} />
	</>
}
const TabletSettings = ({ setAttributes, attributes }) => {
	return <>
		<SettingJustifyContent setAttributes={setAttributes} attributes={attributes} device={"Tablet"} />
		<SettingAlignItems setAttributes={setAttributes} attributes={attributes} device={"Tablet"} />
		<SettingDirection setAttributes={setAttributes} attributes={attributes} device={"Tablet"} />
	</>
}
const MobileSettings = ({ setAttributes, attributes }) => {
	return <>
		<SettingJustifyContent setAttributes={setAttributes} attributes={attributes} device={"Mobile"} />
		<SettingAlignItems setAttributes={setAttributes} attributes={attributes} device={"Mobile"} />
		<SettingDirection setAttributes={setAttributes} attributes={attributes} device={"Mobile"} />
	</>
}

const SettingJustifyContent = ({ setAttributes, attributes, device }) => {
	return <ToggleGroupControl label={__("Justify content", "flex-block")}
		value={device == "Desktop" ? attributes.justifyContent : device == "Tablet" ? attributes.tabletJustifyContent : attributes.mobileJustifyContent}
		onChange={(value) => {
			if (device == "Desktop") {
				setAttributes({ justifyContent: value })
			} else if (device == "Tablet") {
				setAttributes({ tabletJustifyContent: value })
			} else {
				setAttributes({ mobileJustifyContent: value })
			}
		}}
		isBlock>
		<ToggleGroupControlOptionIcon
			value=""
			icon={<ICONS.Ban />}
			label={__("Not set", "flex-block")}
		/>
		<ToggleGroupControlOptionIcon
			value="flex-start"
			icon={<ICONS.HStart />}
			label={__("Flex start", "flex-block")}
		/>
		<ToggleGroupControlOptionIcon
			value="flex-end"
			icon={<ICONS.HEnd />}
			label={__("Flex end", "flex-block")}
		/>
		<ToggleGroupControlOptionIcon
			value="center"
			icon={<ICONS.HJustifyCenter />}
			label={__("Justify center", "flex-block")}
		/>
		<ToggleGroupControlOptionIcon
			value="space-between"
			icon={<ICONS.HSpaceBetween />}
			label={__("Space between", "flex-block")}
		/>
		<ToggleGroupControlOptionIcon
			value="space-around"
			icon={<ICONS.HSpaceAround />}
			label={__("Space around", "flex-block")}
		/>
	</ToggleGroupControl>
}

const SettingAlignItems = ({ setAttributes, attributes, device }) => {
	return <ToggleGroupControl label={__("Align Items", "flex-block")}
		value={device == "Desktop" ? attributes.alignItems : device == "Tablet" ? attributes.tabletAlignItems : attributes.mobileAlignItems}
		onChange={(value) => {
			if (device == "Desktop") {
				setAttributes({ alignItems: value })
			} else if (device == "Tablet") {
				setAttributes({ tabletAlignItems: value })
			} else {
				setAttributes({ mobileAlignItems: value })
			}
		}}
		isBlock>
		<ToggleGroupControlOptionIcon
			value=""
			icon={<ICONS.Ban />}
			label={__("Not set", "flex-block")}
		/>
		<ToggleGroupControlOptionIcon
			value="flex-start"
			icon={<ICONS.VJustifyStart />}
			label={__("Flex start", "flex-block")}
		/>
		<ToggleGroupControlOptionIcon
			value="flex-end"
			icon={<ICONS.VJustifyEnd />}
			label={__("Flex end", "flex-block")}
		/>
		<ToggleGroupControlOptionIcon
			value="center"
			icon={<ICONS.VJustifyCenter />}
			label={__("Center", "flex-block")}
		/>
		<ToggleGroupControlOptionIcon
			value="baseline"
			icon={<ICONS.VDistributeCenter />}
			label={__("Baseline", "flex-block")}
		/>
		<ToggleGroupControlOptionIcon
			value="stretch"
			icon={<ICONS.HStrech />}
			label={__("Stretch", "flex-block")}
		/>
	</ToggleGroupControl>
}

const SettingDirection = ({ setAttributes, attributes, device }) => {
	return <ToggleGroupControl label={__("Direction", "flex-block")}
		value={device == "Desktop" ? attributes.direction : device == "Tablet" ? attributes.tabletDirection : attributes.mobileDirection}
		onChange={(value) => {
			if (device == "Desktop") {
				setAttributes({ direction: value })
			} else if (device == "Tablet") {
				setAttributes({ tabletDirection: value })
			} else {
				setAttributes({ mobileDirection: value })
			}
		}}
		isBlock>
		<ToggleGroupControlOptionIcon
			value=""
			icon={<ICONS.Ban />}
			label={__("Not set", "flex-block")}
		/>
		<ToggleGroupControlOptionIcon
			value="column"
			icon={<ICONS.ArrowDown />}
			label={__("Column", "flex-block")}
		/>
		<ToggleGroupControlOptionIcon
			value="row"
			icon={<ICONS.ArrowRight />}
			label={__("Row", "flex-block")}
		/>
	</ToggleGroupControl>
}

// ArrowRight
// ArrowDown
// direction
// tabletDirection
// mobileDirection