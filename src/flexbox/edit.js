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
	__experimentalUnitControl as UnitControl
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
import { classNames, getColumnGap, getRowGap, getWidth, ICONS, useDeviceType } from '../lib';


export default function Edit(props) {

	const { setAttributes } = props;
	const deviceType = useDeviceType();


	const blockProps = useBlockProps({
		className: classNames(props.attributes).join(" "),
		style: {
			width: getWidth(deviceType, props.attributes),
			columnGap: getColumnGap(deviceType, props.attributes),
			rowGap: getRowGap(deviceType, props.attributes)
		}
	});
	const innerBlocksProps = useInnerBlocksProps(blockProps);
	return <>
		<InspectorControls>
			<PanelBody title={__('Flexbox settings', 'flex-block')}>
				{deviceType == "Desktop" ? <DesktopSettings setAttributes={setAttributes} attributes={props.attributes} /> : deviceType == "Tablet" ? <TabletSettings setAttributes={setAttributes} attributes={props.attributes} /> : <MobileSettings setAttributes={setAttributes} attributes={props.attributes} />}
			</PanelBody>
		</InspectorControls>
		<InspectorControls group="viewport">
			<PanelBody title={__('Flexbox settings', 'flex-block')}>
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
		<SettingWrap setAttributes={setAttributes} attributes={attributes} device={"Desktop"} />
		<SettingWidth setAttributes={setAttributes} attributes={attributes} device={"Desktop"} />
		<SettingDisplay setAttributes={setAttributes} attributes={attributes} device={"Desktop"} />
		<SettingGrow setAttributes={setAttributes} attributes={attributes} device={"Desktop"} />
		<SettingShrink setAttributes={setAttributes} attributes={attributes} device={"Desktop"} />
		<SettingColumnGap setAttributes={setAttributes} attributes={attributes} device={"Desktop"} />
		<SettingRowGap setAttributes={setAttributes} attributes={attributes} device={"Desktop"} />
	</>
}
const TabletSettings = ({ setAttributes, attributes }) => {
	return <>
		<SettingJustifyContent setAttributes={setAttributes} attributes={attributes} device={"Tablet"} />
		<SettingAlignItems setAttributes={setAttributes} attributes={attributes} device={"Tablet"} />
		<SettingDirection setAttributes={setAttributes} attributes={attributes} device={"Tablet"} />
		<SettingWrap setAttributes={setAttributes} attributes={attributes} device={"Tablet"} />
		<SettingWidth setAttributes={setAttributes} attributes={attributes} device={"Tablet"} />
		<SettingDisplay setAttributes={setAttributes} attributes={attributes} device={"Tablet"} />
		<SettingGrow setAttributes={setAttributes} attributes={attributes} device={"Tablet"} />
		<SettingShrink setAttributes={setAttributes} attributes={attributes} device={"Tablet"} />
		<SettingColumnGap setAttributes={setAttributes} attributes={attributes} device={"Tablet"} />
		<SettingRowGap setAttributes={setAttributes} attributes={attributes} device={"Tablet"} />
	</>
}
const MobileSettings = ({ setAttributes, attributes }) => {
	return <>
		<SettingJustifyContent setAttributes={setAttributes} attributes={attributes} device={"Mobile"} />
		<SettingAlignItems setAttributes={setAttributes} attributes={attributes} device={"Mobile"} />
		<SettingDirection setAttributes={setAttributes} attributes={attributes} device={"Mobile"} />
		<SettingWrap setAttributes={setAttributes} attributes={attributes} device={"Mobile"} />
		<SettingWidth setAttributes={setAttributes} attributes={attributes} device={"Mobile"} />
		<SettingDisplay setAttributes={setAttributes} attributes={attributes} device={"Mobile"} />
		<SettingGrow setAttributes={setAttributes} attributes={attributes} device={"Mobile"} />
		<SettingShrink setAttributes={setAttributes} attributes={attributes} device={"Mobile"} />
		<SettingColumnGap setAttributes={setAttributes} attributes={attributes} device={"Mobile"} />
		<SettingRowGap setAttributes={setAttributes} attributes={attributes} device={"Mobile"} />
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
		<ToggleGroupControlOptionIcon
			value="column-reverse"
			icon={<ICONS.ArrowUp />}
			label={__("Column reverse", "flex-block")}
		/>
		<ToggleGroupControlOptionIcon
			value="row-reverse"
			icon={<ICONS.ArrowLeft />}
			label={__("Row reverse", "flex-block")}
		/>
	</ToggleGroupControl>
}

const SettingWrap = ({ setAttributes, attributes, device }) => {
	return <ToggleGroupControl label={__("Wrap", "flex-block")}
		value={device == "Desktop" ? attributes.wrap : device == "Tablet" ? attributes.tabletWrap : attributes.mobileWrap}
		onChange={(value) => {
			if (device == "Desktop") {
				setAttributes({ wrap: value })
			} else if (device == "Tablet") {
				setAttributes({ tabletWrap: value })
			} else {
				setAttributes({ mobileWrap: value })
			}
		}}
		isBlock>
		<ToggleGroupControlOption
			value=""
			label={__("Not set", "flex-block")}
		/>
		<ToggleGroupControlOption
			value="wrap"
			label={__("Wrap", "flex-block")}
		/>
		<ToggleGroupControlOption
			value="nowrap"
			label={__("No wrap", "flex-block")}
		/>
	</ToggleGroupControl>
}

const SettingWidth = ({ setAttributes, attributes, device }) => {
	return <>
		<UnitControl
			label={__('Width', "flex-block")}
			value={device == "Desktop" ? attributes.width : device == "Tablet" ? attributes.tabletWidth : attributes.mobileWidth}
			onChange={(value) => {
				if (device == "Desktop") {
					setAttributes({ width: value })
				} else if (device == "Tablet") {
					setAttributes({ tabletWidth: value })
				} else {
					setAttributes({ mobileWidth: value })
				}
			}}
			units={[
				{ value: 'px', label: 'px', default: 0 },
				{ value: 'em', label: 'em', default: 0 },
				{ value: 'rem', label: 'rem', default: 0 },
				{ value: '%', label: '%', default: 0 },
				{ value: 'vh', label: 'vh', default: 0 },
			]}
		/></>
}

const SettingDisplay = ({ setAttributes, attributes, device }) => {
	return <ToggleGroupControl label={__("Display", "flex-block")}
		value={device == "Desktop" ? attributes.display : device == "Tablet" ? attributes.tabletDisplay : attributes.mobileDisplay}
		onChange={(value) => {
			if (device == "Desktop") {
				setAttributes({ display: value })
			} else if (device == "Tablet") {
				setAttributes({ tabletDisplay: value })
			} else {
				setAttributes({ mobileDisplay: value })
			}
		}}
		isBlock>
		<ToggleGroupControlOption
			value="none"
			label={__("None", "flex-block")}
		/>
		<ToggleGroupControlOption
			value="flex"
			label={__("Flex", "flex-block")}
		/>
		<ToggleGroupControlOption
			value="inline-flex"
			label={__("Inline Flex", "flex-block")}
		/>
	</ToggleGroupControl>
}

const SettingGrow = ({ setAttributes, attributes, device }) => {
	return <ToggleGroupControl label={__("Grow", "flex-block")}
		value={device == "Desktop" ? attributes.grow : device == "Tablet" ? attributes.tabletGrow : attributes.mobileGrow}
		onChange={(value) => {
			if (device == "Desktop") {
				setAttributes({ grow: value })
			} else if (device == "Tablet") {
				setAttributes({ tabletGrow: value })
			} else {
				setAttributes({ mobileGrow: value })
			}
		}}
		isBlock>
		<ToggleGroupControlOption
			value=""
			label={__("Not set", "flex-block")}
		/>
		<ToggleGroupControlOption
			value="on"
			label={__("On", "flex-block")}
		/>
		<ToggleGroupControlOption
			value="off"
			label={__("Off", "flex-block")}
		/>
	</ToggleGroupControl>
}

const SettingShrink = ({ setAttributes, attributes, device }) => {
	return <ToggleGroupControl label={__("Shrink", "flex-block")}
		value={device == "Desktop" ? attributes.shrink : device == "Tablet" ? attributes.tabletShrink : attributes.mobileShrink}
		onChange={(value) => {
			if (device == "Desktop") {
				setAttributes({ shrink: value })
			} else if (device == "Tablet") {
				setAttributes({ tabletShrink: value })
			} else {
				setAttributes({ mobileShrink: value })
			}
		}}
		isBlock>
		<ToggleGroupControlOption
			value=""
			label={__("Not set", "flex-block")}
		/>
		<ToggleGroupControlOption
			value="on"
			label={__("On", "flex-block")}
		/>
		<ToggleGroupControlOption
			value="off"
			label={__("Off", "flex-block")}
		/>
	</ToggleGroupControl>
}

const SettingColumnGap = ({ setAttributes, attributes, device }) => {
	return <>
		<UnitControl
			label={__('Column Gap', "flex-block")}
			value={device == "Desktop" ? attributes.columnGap : device == "Tablet" ? attributes.tabletColumnGap : attributes.mobileColumnGap}
			onChange={(value) => {
				if (device == "Desktop") {
					setAttributes({ columnGap: value })
				} else if (device == "Tablet") {
					setAttributes({ tabletColumnGap: value })
				} else {
					setAttributes({ mobileColumnGap: value })
				}
			}}
			units={[
				{ value: 'px', label: 'px', default: 0 },
				{ value: 'em', label: 'em', default: 0 },
				{ value: 'rem', label: 'rem', default: 0 },
				{ value: '%', label: '%', default: 0 },
				{ value: 'vh', label: 'vh', default: 0 },
			]}
		/></>
}

const SettingRowGap = ({ setAttributes, attributes, device }) => {
	return <>
		<UnitControl
			label={__('Row Gap', "flex-block")}
			value={device == "Desktop" ? attributes.rowGap : device == "Tablet" ? attributes.tabletRowGap : attributes.mobileRowGap}
			onChange={(value) => {
				if (device == "Desktop") {
					setAttributes({ rowGap: value })
				} else if (device == "Tablet") {
					setAttributes({ tabletRowGap: value })
				} else {
					setAttributes({ mobileRowGap: value })
				}
			}}
			units={[
				{ value: 'px', label: 'px', default: 0 },
				{ value: 'em', label: 'em', default: 0 },
				{ value: 'rem', label: 'rem', default: 0 },
				{ value: '%', label: '%', default: 0 },
				{ value: 'vh', label: 'vh', default: 0 },
			]}
		/></>
}