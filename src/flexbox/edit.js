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
	PanelBody, __experimentalToggleGroupControl as ToggleGroupControl,
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
	console.log('deviceType', deviceType);

	return <>
		<InspectorControls group={deviceType == "Desktop" ? "settings" : "viewport"}>
			<PanelBody title={__('Flexbox settings', 'boxwise')}>
				{deviceType == "Desktop" ? <DesktopSettings setAttributes={setAttributes} attributes={props.attributes} /> : deviceType == "Tablet" ? <TabletSettings setAttributes={setAttributes} attributes={props.attributes} /> : <MobileSettings setAttributes={setAttributes} attributes={props.attributes} />}
			</PanelBody>
		</InspectorControls >
		<div {...innerBlocksProps}></div>
	</>
}


const DesktopSettings = ({ setAttributes, attributes }) => {
	return <>
		<SettingDisplay setAttributes={setAttributes} attributes={attributes} device={"Desktop"} />
		<SettingWidth setAttributes={setAttributes} attributes={attributes} device={"Desktop"} />
		<SettingJustifyContent setAttributes={setAttributes} attributes={attributes} device={"Desktop"} />
		<SettingAlignItems setAttributes={setAttributes} attributes={attributes} device={"Desktop"} />
		<SettingDirection setAttributes={setAttributes} attributes={attributes} device={"Desktop"} />
		<SettingWrap setAttributes={setAttributes} attributes={attributes} device={"Desktop"} />
		<SettingColumnGap setAttributes={setAttributes} attributes={attributes} device={"Desktop"} />
		<SettingRowGap setAttributes={setAttributes} attributes={attributes} device={"Desktop"} />
		<SettingGrow setAttributes={setAttributes} attributes={attributes} device={"Desktop"} />
		<SettingShrink setAttributes={setAttributes} attributes={attributes} device={"Desktop"} />
	</>
}
const TabletSettings = ({ setAttributes, attributes }) => {
	return <>
		<SettingDisplay setAttributes={setAttributes} attributes={attributes} device={"Tablet"} />
		<SettingWidth setAttributes={setAttributes} attributes={attributes} device={"Tablet"} />
		<SettingJustifyContent setAttributes={setAttributes} attributes={attributes} device={"Tablet"} />
		<SettingAlignItems setAttributes={setAttributes} attributes={attributes} device={"Tablet"} />
		<SettingDirection setAttributes={setAttributes} attributes={attributes} device={"Tablet"} />
		<SettingWrap setAttributes={setAttributes} attributes={attributes} device={"Tablet"} />
		<SettingColumnGap setAttributes={setAttributes} attributes={attributes} device={"Tablet"} />
		<SettingRowGap setAttributes={setAttributes} attributes={attributes} device={"Tablet"} />
		<SettingGrow setAttributes={setAttributes} attributes={attributes} device={"Tablet"} />
		<SettingShrink setAttributes={setAttributes} attributes={attributes} device={"Tablet"} />
	</>
}
const MobileSettings = ({ setAttributes, attributes }) => {
	return <>
		<SettingDisplay setAttributes={setAttributes} attributes={attributes} device={"Mobile"} />
		<SettingWidth setAttributes={setAttributes} attributes={attributes} device={"Mobile"} />
		<SettingJustifyContent setAttributes={setAttributes} attributes={attributes} device={"Mobile"} />
		<SettingAlignItems setAttributes={setAttributes} attributes={attributes} device={"Mobile"} />
		<SettingDirection setAttributes={setAttributes} attributes={attributes} device={"Mobile"} />
		<SettingWrap setAttributes={setAttributes} attributes={attributes} device={"Mobile"} />
		<SettingColumnGap setAttributes={setAttributes} attributes={attributes} device={"Mobile"} />
		<SettingRowGap setAttributes={setAttributes} attributes={attributes} device={"Mobile"} />
		<SettingGrow setAttributes={setAttributes} attributes={attributes} device={"Mobile"} />
		<SettingShrink setAttributes={setAttributes} attributes={attributes} device={"Mobile"} />
	</>
}

const SettingJustifyContent = ({ setAttributes, attributes, device }) => {
	return <ToggleGroupControl label={__("Justify content", "boxwise")}
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
			label={__("Not set", "boxwise")}
		/>
		<ToggleGroupControlOptionIcon
			value="flex-start"
			icon={<ICONS.HStart />}
			label={__("Flex start", "boxwise")}
		/>
		<ToggleGroupControlOptionIcon
			value="flex-end"
			icon={<ICONS.HEnd />}
			label={__("Flex end", "boxwise")}
		/>
		<ToggleGroupControlOptionIcon
			value="center"
			icon={<ICONS.HJustifyCenter />}
			label={__("Justify center", "boxwise")}
		/>
		<ToggleGroupControlOptionIcon
			value="space-between"
			icon={<ICONS.HSpaceBetween />}
			label={__("Space between", "boxwise")}
		/>
		<ToggleGroupControlOptionIcon
			value="space-around"
			icon={<ICONS.HSpaceAround />}
			label={__("Space around", "boxwise")}
		/>
	</ToggleGroupControl>
}

const SettingAlignItems = ({ setAttributes, attributes, device }) => {
	return <ToggleGroupControl label={__("Align Items", "boxwise")}
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
			label={__("Not set", "boxwise")}
		/>
		<ToggleGroupControlOptionIcon
			value="flex-start"
			icon={<ICONS.VJustifyStart />}
			label={__("Flex start", "boxwise")}
		/>
		<ToggleGroupControlOptionIcon
			value="flex-end"
			icon={<ICONS.VJustifyEnd />}
			label={__("Flex end", "boxwise")}
		/>
		<ToggleGroupControlOptionIcon
			value="center"
			icon={<ICONS.VJustifyCenter />}
			label={__("Center", "boxwise")}
		/>
		<ToggleGroupControlOptionIcon
			value="baseline"
			icon={<ICONS.VDistributeCenter />}
			label={__("Baseline", "boxwise")}
		/>
		<ToggleGroupControlOptionIcon
			value="stretch"
			icon={<ICONS.HStrech />}
			label={__("Stretch", "boxwise")}
		/>
	</ToggleGroupControl>
}

const SettingDirection = ({ setAttributes, attributes, device }) => {
	return <ToggleGroupControl label={__("Direction", "boxwise")}
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
			label={__("Not set", "boxwise")}
		/>
		<ToggleGroupControlOptionIcon
			value="column"
			icon={<ICONS.ArrowDown />}
			label={__("Column", "boxwise")}
		/>
		<ToggleGroupControlOptionIcon
			value="row"
			icon={<ICONS.ArrowRight />}
			label={__("Row", "boxwise")}
		/>
		<ToggleGroupControlOptionIcon
			value="column-reverse"
			icon={<ICONS.ArrowUp />}
			label={__("Column reverse", "boxwise")}
		/>
		<ToggleGroupControlOptionIcon
			value="row-reverse"
			icon={<ICONS.ArrowLeft />}
			label={__("Row reverse", "boxwise")}
		/>
	</ToggleGroupControl>
}

const SettingWrap = ({ setAttributes, attributes, device }) => {
	return <ToggleGroupControl label={__("Wrap", "boxwise")}
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
			label={__("Not set", "boxwise")}
		/>
		<ToggleGroupControlOption
			value="wrap"
			label={__("Wrap", "boxwise")}
		/>
		<ToggleGroupControlOption
			value="nowrap"
			label={__("No wrap", "boxwise")}
		/>
	</ToggleGroupControl>
}

const SettingWidth = ({ setAttributes, attributes, device }) => {
	return <>
		<UnitControl
			label={__('Width', "boxwise")}
			placeholder={__('Initial', "boxwise")}
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
	return <ToggleGroupControl label={__("Display", "boxwise")}
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
			label={__("None", "boxwise")}
		/>
		<ToggleGroupControlOption
			value="flex"
			label={__("Flex", "boxwise")}
		/>
		<ToggleGroupControlOption
			value="inline-flex"
			label={__("Inline Flex", "boxwise")}
		/>
	</ToggleGroupControl>
}

const SettingGrow = ({ setAttributes, attributes, device }) => {
	return <ToggleGroupControl label={__("Grow", "boxwise")}
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
			label={__("Not set", "boxwise")}
		/>
		<ToggleGroupControlOption
			value="on"
			label={__("On", "boxwise")}
		/>
		<ToggleGroupControlOption
			value="off"
			label={__("Off", "boxwise")}
		/>
	</ToggleGroupControl>
}

const SettingShrink = ({ setAttributes, attributes, device }) => {
	return <ToggleGroupControl label={__("Shrink", "boxwise")}
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
			label={__("Not set", "boxwise")}
		/>
		<ToggleGroupControlOption
			value="on"
			label={__("On", "boxwise")}
		/>
		<ToggleGroupControlOption
			value="off"
			label={__("Off", "boxwise")}
		/>
	</ToggleGroupControl>
}

const SettingColumnGap = ({ setAttributes, attributes, device }) => {
	return <>
		<UnitControl
			label={__('Column Gap', "boxwise")}
			placeholder={__('Initial', "boxwise")}
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
			label={__('Row Gap', "boxwise")}
			placeholder={__('Initial', "boxwise")}
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