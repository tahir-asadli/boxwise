/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/flexbox/edit.js"
/*!*****************************!*\
  !*** ./src/flexbox/edit.js ***!
  \*****************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editor.scss */ "./src/flexbox/editor.scss");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib */ "./src/lib.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);
// https://wordpress.github.io/gutenberg/
// https://wordpress.github.io/gutenberg/?path=/story/icons-icon--library
// https://github.com/tahir-asadli/block-booster/blob/main/src/flexbox/edit.js
// https://wordpress.github.io/gutenberg/?path=/story/icons-icon--library

/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */



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



const getWidth = (deviceType, attributes) => {
  if (deviceType == "Desktop") {
    return attributes.width ? attributes.width : undefined;
  } else if (deviceType == "Tablet") {
    return attributes.tabletWidth ? attributes.tabletWidth : undefined;
  } else {
    return attributes.mobileWidth ? attributes.mobileWidth : undefined;
  }
};
function Edit(props) {
  const {
    setAttributes
  } = props;
  const deviceType = (0,_lib__WEBPACK_IMPORTED_MODULE_4__.useDeviceType)();
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)({
    className: (0,_lib__WEBPACK_IMPORTED_MODULE_4__.classNames)(props.attributes).join(" "),
    style: {
      width: getWidth(deviceType, props.attributes)
    }
  });
  const innerBlocksProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useInnerBlocksProps)(blockProps);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Flexbox settings', 'flex-block'),
        children: deviceType == "Desktop" ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(DesktopSettings, {
          setAttributes: setAttributes,
          attributes: props.attributes
        }) : deviceType == "Tablet" ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(TabletSettings, {
          setAttributes: setAttributes,
          attributes: props.attributes
        }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(MobileSettings, {
          setAttributes: setAttributes,
          attributes: props.attributes
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, {
      group: "viewport",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Flexbox settings', 'flex-block'),
        children: deviceType == "Desktop" ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(DesktopSettings, {
          setAttributes: setAttributes,
          attributes: props.attributes
        }) : deviceType == "Tablet" ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(TabletSettings, {
          setAttributes: setAttributes,
          attributes: props.attributes
        }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(MobileSettings, {
          setAttributes: setAttributes,
          attributes: props.attributes
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
      ...innerBlocksProps
    })]
  });
}
const DesktopSettings = ({
  setAttributes,
  attributes
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(SettingJustifyContent, {
      setAttributes: setAttributes,
      attributes: attributes,
      device: "Desktop"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(SettingAlignItems, {
      setAttributes: setAttributes,
      attributes: attributes,
      device: "Desktop"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(SettingDirection, {
      setAttributes: setAttributes,
      attributes: attributes,
      device: "Desktop"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(SettingWrap, {
      setAttributes: setAttributes,
      attributes: attributes,
      device: "Desktop"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(SettingWidth, {
      setAttributes: setAttributes,
      attributes: attributes,
      device: "Desktop"
    })]
  });
};
const TabletSettings = ({
  setAttributes,
  attributes
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(SettingJustifyContent, {
      setAttributes: setAttributes,
      attributes: attributes,
      device: "Tablet"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(SettingAlignItems, {
      setAttributes: setAttributes,
      attributes: attributes,
      device: "Tablet"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(SettingDirection, {
      setAttributes: setAttributes,
      attributes: attributes,
      device: "Tablet"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(SettingWrap, {
      setAttributes: setAttributes,
      attributes: attributes,
      device: "Tablet"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(SettingWidth, {
      setAttributes: setAttributes,
      attributes: attributes,
      device: "Tablet"
    })]
  });
};
const MobileSettings = ({
  setAttributes,
  attributes
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(SettingJustifyContent, {
      setAttributes: setAttributes,
      attributes: attributes,
      device: "Mobile"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(SettingAlignItems, {
      setAttributes: setAttributes,
      attributes: attributes,
      device: "Mobile"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(SettingDirection, {
      setAttributes: setAttributes,
      attributes: attributes,
      device: "Mobile"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(SettingWrap, {
      setAttributes: setAttributes,
      attributes: attributes,
      device: "Mobile"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(SettingWidth, {
      setAttributes: setAttributes,
      attributes: attributes,
      device: "Mobile"
    })]
  });
};
const SettingJustifyContent = ({
  setAttributes,
  attributes,
  device
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalToggleGroupControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Justify content", "flex-block"),
    value: device == "Desktop" ? attributes.justifyContent : device == "Tablet" ? attributes.tabletJustifyContent : attributes.mobileJustifyContent,
    onChange: value => {
      if (device == "Desktop") {
        setAttributes({
          justifyContent: value
        });
      } else if (device == "Tablet") {
        setAttributes({
          tabletJustifyContent: value
        });
      } else {
        setAttributes({
          mobileJustifyContent: value
        });
      }
    },
    isBlock: true,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalToggleGroupControlOptionIcon, {
      value: "",
      icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_lib__WEBPACK_IMPORTED_MODULE_4__.ICONS.Ban, {}),
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Not set", "flex-block")
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalToggleGroupControlOptionIcon, {
      value: "flex-start",
      icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_lib__WEBPACK_IMPORTED_MODULE_4__.ICONS.HStart, {}),
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Flex start", "flex-block")
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalToggleGroupControlOptionIcon, {
      value: "flex-end",
      icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_lib__WEBPACK_IMPORTED_MODULE_4__.ICONS.HEnd, {}),
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Flex end", "flex-block")
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalToggleGroupControlOptionIcon, {
      value: "center",
      icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_lib__WEBPACK_IMPORTED_MODULE_4__.ICONS.HJustifyCenter, {}),
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Justify center", "flex-block")
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalToggleGroupControlOptionIcon, {
      value: "space-between",
      icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_lib__WEBPACK_IMPORTED_MODULE_4__.ICONS.HSpaceBetween, {}),
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Space between", "flex-block")
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalToggleGroupControlOptionIcon, {
      value: "space-around",
      icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_lib__WEBPACK_IMPORTED_MODULE_4__.ICONS.HSpaceAround, {}),
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Space around", "flex-block")
    })]
  });
};
const SettingAlignItems = ({
  setAttributes,
  attributes,
  device
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalToggleGroupControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Align Items", "flex-block"),
    value: device == "Desktop" ? attributes.alignItems : device == "Tablet" ? attributes.tabletAlignItems : attributes.mobileAlignItems,
    onChange: value => {
      if (device == "Desktop") {
        setAttributes({
          alignItems: value
        });
      } else if (device == "Tablet") {
        setAttributes({
          tabletAlignItems: value
        });
      } else {
        setAttributes({
          mobileAlignItems: value
        });
      }
    },
    isBlock: true,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalToggleGroupControlOptionIcon, {
      value: "",
      icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_lib__WEBPACK_IMPORTED_MODULE_4__.ICONS.Ban, {}),
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Not set", "flex-block")
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalToggleGroupControlOptionIcon, {
      value: "flex-start",
      icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_lib__WEBPACK_IMPORTED_MODULE_4__.ICONS.VJustifyStart, {}),
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Flex start", "flex-block")
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalToggleGroupControlOptionIcon, {
      value: "flex-end",
      icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_lib__WEBPACK_IMPORTED_MODULE_4__.ICONS.VJustifyEnd, {}),
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Flex end", "flex-block")
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalToggleGroupControlOptionIcon, {
      value: "center",
      icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_lib__WEBPACK_IMPORTED_MODULE_4__.ICONS.VJustifyCenter, {}),
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Center", "flex-block")
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalToggleGroupControlOptionIcon, {
      value: "baseline",
      icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_lib__WEBPACK_IMPORTED_MODULE_4__.ICONS.VDistributeCenter, {}),
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Baseline", "flex-block")
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalToggleGroupControlOptionIcon, {
      value: "stretch",
      icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_lib__WEBPACK_IMPORTED_MODULE_4__.ICONS.HStrech, {}),
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Stretch", "flex-block")
    })]
  });
};
const SettingDirection = ({
  setAttributes,
  attributes,
  device
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalToggleGroupControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Direction", "flex-block"),
    value: device == "Desktop" ? attributes.direction : device == "Tablet" ? attributes.tabletDirection : attributes.mobileDirection,
    onChange: value => {
      if (device == "Desktop") {
        setAttributes({
          direction: value
        });
      } else if (device == "Tablet") {
        setAttributes({
          tabletDirection: value
        });
      } else {
        setAttributes({
          mobileDirection: value
        });
      }
    },
    isBlock: true,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalToggleGroupControlOptionIcon, {
      value: "",
      icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_lib__WEBPACK_IMPORTED_MODULE_4__.ICONS.Ban, {}),
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Not set", "flex-block")
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalToggleGroupControlOptionIcon, {
      value: "column",
      icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_lib__WEBPACK_IMPORTED_MODULE_4__.ICONS.ArrowDown, {}),
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Column", "flex-block")
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalToggleGroupControlOptionIcon, {
      value: "row",
      icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_lib__WEBPACK_IMPORTED_MODULE_4__.ICONS.ArrowRight, {}),
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Row", "flex-block")
    })]
  });
};
const SettingWrap = ({
  setAttributes,
  attributes,
  device
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalToggleGroupControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Wrap", "flex-block"),
    value: device == "Desktop" ? attributes.wrap : device == "Tablet" ? attributes.tabletWrap : attributes.mobileWrap,
    onChange: value => {
      if (device == "Desktop") {
        setAttributes({
          wrap: value
        });
      } else if (device == "Tablet") {
        setAttributes({
          tabletWrap: value
        });
      } else {
        setAttributes({
          mobileWrap: value
        });
      }
    },
    isBlock: true,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalToggleGroupControlOption, {
      value: "",
      icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_lib__WEBPACK_IMPORTED_MODULE_4__.ICONS.Ban, {}),
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Not set", "flex-block")
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalToggleGroupControlOption, {
      value: "wrap",
      icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_lib__WEBPACK_IMPORTED_MODULE_4__.ICONS.ArrowDown, {}),
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Wrap", "flex-block")
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalToggleGroupControlOption, {
      value: "nowrap",
      icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_lib__WEBPACK_IMPORTED_MODULE_4__.ICONS.ArrowRight, {}),
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("No wrap", "flex-block")
    })]
  });
};
const SettingWidth = ({
  setAttributes,
  attributes,
  device
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalUnitControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Width', "flex-block"),
      value: device == "Desktop" ? attributes.width : device == "Tablet" ? attributes.tabletWidth : attributes.mobileWidth,
      onChange: value => {
        if (device == "Desktop") {
          setAttributes({
            width: value
          });
        } else if (device == "Tablet") {
          setAttributes({
            tabletWidth: value
          });
        } else {
          setAttributes({
            mobileWidth: value
          });
        }
      },
      units: [{
        value: 'px',
        label: 'px',
        default: 0
      }, {
        value: 'em',
        label: 'em',
        default: 0
      }, {
        value: 'rem',
        label: 'rem',
        default: 0
      }, {
        value: '%',
        label: '%',
        default: 0
      }, {
        value: 'vh',
        label: 'vh',
        default: 0
      }]
    })
  });
};

/***/ },

/***/ "./src/flexbox/index.js"
/*!******************************!*\
  !*** ./src/flexbox/index.js ***!
  \******************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/flexbox/style.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/flexbox/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./src/flexbox/save.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block.json */ "./src/flexbox/block.json");
/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */





/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_4__.name, {
  /**
   * @see ./edit.js
   */
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_3__["default"]
});

/***/ },

/***/ "./src/flexbox/save.js"
/*!*****************************!*\
  !*** ./src/flexbox/save.js ***!
  \*****************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Save)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */


/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {Element} Element to render.
 */

function Save() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
    ..._wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useBlockProps.save(),
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.InnerBlocks.Content, {})
  });
}

/***/ },

/***/ "./src/lib.js"
/*!********************!*\
  !*** ./src/lib.js ***!
  \********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ICONS: () => (/* binding */ ICONS),
/* harmony export */   classNames: () => (/* binding */ classNames),
/* harmony export */   useDeviceType: () => (/* binding */ useDeviceType)
/* harmony export */ });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/align-end-vertical.mjs");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/align-horizontal-justify-center.mjs");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/align-horizontal-space-between.mjs");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/align-horizontal-space-around.mjs");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/align-start-vertical.mjs");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/align-vertical-distribute-center.mjs");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/align-vertical-justify-center.mjs");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/align-vertical-justify-end.mjs");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/align-vertical-justify-start.mjs");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/align-vertical-space-between.mjs");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/arrow-down.mjs");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/arrow-right.mjs");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/ban.mjs");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/stretch-horizontal.mjs");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/stretch-vertical.mjs");

function useDeviceType() {
  return (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.useSelect)(select => {
    // WP 6.5+: post editor AND site editor
    const editor = select('core/editor');
    if (editor?.getDeviceType) {
      return editor.getDeviceType();
    }

    // Older site editor
    const editSite = select('core/edit-site');
    if (editSite?.__experimentalGetPreviewDeviceType) {
      return editSite.__experimentalGetPreviewDeviceType();
    }

    // Older post editor
    const editPost = select('core/edit-post');
    if (editPost?.__experimentalGetPreviewDeviceType) {
      return editPost.__experimentalGetPreviewDeviceType();
    }
    return 'Desktop';
  }, []);
}
;
const ICONS = {
  VJustifyEnd: lucide_react__WEBPACK_IMPORTED_MODULE_8__["default"],
  VJustifyStart: lucide_react__WEBPACK_IMPORTED_MODULE_9__["default"],
  VJustifyCenter: lucide_react__WEBPACK_IMPORTED_MODULE_7__["default"],
  VDistributeCenter: lucide_react__WEBPACK_IMPORTED_MODULE_6__["default"],
  VSpaceBetween: lucide_react__WEBPACK_IMPORTED_MODULE_10__["default"],
  VStrech: lucide_react__WEBPACK_IMPORTED_MODULE_15__["default"],
  HStart: lucide_react__WEBPACK_IMPORTED_MODULE_5__["default"],
  HEnd: lucide_react__WEBPACK_IMPORTED_MODULE_1__["default"],
  HJustifyCenter: lucide_react__WEBPACK_IMPORTED_MODULE_2__["default"],
  HSpaceBetween: lucide_react__WEBPACK_IMPORTED_MODULE_3__["default"],
  HSpaceAround: lucide_react__WEBPACK_IMPORTED_MODULE_4__["default"],
  HStrech: lucide_react__WEBPACK_IMPORTED_MODULE_14__["default"],
  Ban: lucide_react__WEBPACK_IMPORTED_MODULE_13__["default"],
  ArrowRight: lucide_react__WEBPACK_IMPORTED_MODULE_12__["default"],
  ArrowDown: lucide_react__WEBPACK_IMPORTED_MODULE_11__["default"]
};
const classNames = attributes => {
  const {
    justifyContent,
    tabletJustifyContent,
    mobileJustifyContent,
    alignItems,
    tabletAlignItems,
    mobileAlignItems,
    direction,
    tabletDirection,
    mobileDirection,
    wrap,
    tabletWrap,
    mobileWrap,
    columnGap,
    tabletColumnGap,
    mobileColumnGap,
    columnGapUnit,
    tabletColumnGapUnit,
    mobileColumnGapUnit,
    rowGap,
    tabletRowGap,
    mobileRowGap,
    rowGapUnit,
    tabletRowGapUnit,
    mobileRowGapUnit,
    reverse,
    tabletReverse,
    mobileReverse,
    grow,
    tabletGrow,
    mobileGrow,
    shrink,
    tabletShrink,
    mobileShrink,
    display,
    tabletDisplay,
    mobileDisplay
  } = attributes;
  const classNames = [];
  classNames.push("taufb");
  if (justifyContent) {
    classNames.push(`taufb--justify-${justifyContent}`);
  }
  if (tabletJustifyContent) {
    classNames.push(`taufb--justify-tablet-${tabletJustifyContent}`);
  }
  if (mobileJustifyContent) {
    classNames.push(`taufb--justify-mobile-${mobileJustifyContent}`);
  }
  if (alignItems) {
    classNames.push(`taufb--align-${alignItems}`);
  }
  if (tabletAlignItems) {
    classNames.push(`taufb--justify-tablet-${tabletAlignItems}`);
  }
  if (mobileAlignItems) {
    classNames.push(`taufb--align-mobile-${mobileAlignItems}`);
  }
  if (direction) {
    classNames.push(`taufb--direction-${direction}`);
  }
  if (tabletDirection) {
    classNames.push(`taufb--direction-tablet-${tabletDirection}`);
  }
  if (mobileDirection) {
    classNames.push(`taufb--direction-mobile-${mobileDirection}`);
  }
  if (wrap) {
    classNames.push(`taufb--wrap-${wrap}`);
  }
  if (tabletWrap) {
    classNames.push(`taufb--wrap-tablet-${tabletWrap}`);
  }
  if (mobileWrap) {
    classNames.push(`taufb--wrap-mobile-${mobileWrap}`);
  }
  return classNames;
};

/***/ },

/***/ "./src/flexbox/editor.scss"
/*!*********************************!*\
  !*** ./src/flexbox/editor.scss ***!
  \*********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ },

/***/ "./src/flexbox/style.scss"
/*!********************************!*\
  !*** ./src/flexbox/style.scss ***!
  \********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ },

/***/ "react"
/*!************************!*\
  !*** external "React" ***!
  \************************/
(module) {

module.exports = window["React"];

/***/ },

/***/ "react/jsx-runtime"
/*!**********************************!*\
  !*** external "ReactJSXRuntime" ***!
  \**********************************/
(module) {

module.exports = window["ReactJSXRuntime"];

/***/ },

/***/ "@wordpress/block-editor"
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
(module) {

module.exports = window["wp"]["blockEditor"];

/***/ },

/***/ "@wordpress/blocks"
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
(module) {

module.exports = window["wp"]["blocks"];

/***/ },

/***/ "@wordpress/components"
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
(module) {

module.exports = window["wp"]["components"];

/***/ },

/***/ "@wordpress/data"
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
(module) {

module.exports = window["wp"]["data"];

/***/ },

/***/ "@wordpress/i18n"
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
(module) {

module.exports = window["wp"]["i18n"];

/***/ },

/***/ "./node_modules/lucide-react/dist/esm/Icon.mjs"
/*!*****************************************************!*\
  !*** ./node_modules/lucide-react/dist/esm/Icon.mjs ***!
  \*****************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Icon)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _shared_src_utils_mergeClasses_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/src/utils/mergeClasses.mjs */ "./node_modules/lucide-react/dist/esm/shared/src/utils/mergeClasses.mjs");
/* harmony import */ var _shared_src_build_buildLucideIconForReact_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/src/build/buildLucideIconForReact.mjs */ "./node_modules/lucide-react/dist/esm/shared/src/build/buildLucideIconForReact.mjs");
/* harmony import */ var _shared_src_utils_hasA11yProp_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/src/utils/hasA11yProp.mjs */ "./node_modules/lucide-react/dist/esm/shared/src/utils/hasA11yProp.mjs");
/* harmony import */ var _context_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./context.mjs */ "./node_modules/lucide-react/dist/esm/context.mjs");

"use client";
/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */







const Icon = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(
  ({
    color,
    size,
    width,
    height,
    strokeWidth,
    absoluteStrokeWidth,
    nonScalingStroke,
    className = "",
    children,
    iconNode = [],
    icon = {
      node: iconNode,
      aliases: [],
      size: 24
    },
    ...rest
  }, ref) => {
    const {
      size: contextSize = 24,
      strokeWidth: contextStrokeWidth = 2,
      absoluteStrokeWidth: contextAbsoluteStrokeWidth = false,
      nonScalingStroke: contextNonScalingStroke = false,
      color: contextColor = "currentColor",
      className: contextClass = ""
    } = (0,_context_mjs__WEBPACK_IMPORTED_MODULE_4__.useLucideContext)() ?? {};
    const hasAccessibleProp = Boolean(children) || (0,_shared_src_utils_hasA11yProp_mjs__WEBPACK_IMPORTED_MODULE_3__.hasA11yProp)(rest);
    const [name, svgAttributes, builtIconNode = []] = (0,_shared_src_build_buildLucideIconForReact_mjs__WEBPACK_IMPORTED_MODULE_2__["default"])(icon, {
      color: color ?? contextColor,
      width: width ?? size ?? contextSize,
      height: height ?? size ?? contextSize,
      strokeWidth: strokeWidth ?? contextStrokeWidth,
      absoluteStrokeWidth: absoluteStrokeWidth ?? contextAbsoluteStrokeWidth,
      nonScalingStroke: nonScalingStroke ?? contextNonScalingStroke,
      className: (0,_shared_src_utils_mergeClasses_mjs__WEBPACK_IMPORTED_MODULE_1__.mergeClasses)(contextClass, className),
      hasA11yProp: hasAccessibleProp,
      attributes: rest
    });
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
      name,
      {
        ref,
        ...svgAttributes
      },
      [
        ...builtIconNode.map(([tag, attrs]) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(tag, attrs)),
        ...Array.isArray(children) ? children : [children]
      ]
    );
  }
);


//# sourceMappingURL=Icon.mjs.map


/***/ },

/***/ "./node_modules/lucide-react/dist/esm/context.mjs"
/*!********************************************************!*\
  !*** ./node_modules/lucide-react/dist/esm/context.mjs ***!
  \********************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LucideProvider: () => (/* binding */ LucideProvider),
/* harmony export */   useLucideContext: () => (/* binding */ useLucideContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");

"use client";
/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const LucideContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});
function LucideProvider({
  children,
  size,
  color,
  strokeWidth,
  absoluteStrokeWidth,
  nonScalingStroke,
  className
}) {
  const value = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(
    () => ({
      size,
      color,
      strokeWidth,
      absoluteStrokeWidth,
      nonScalingStroke,
      className
    }),
    [size, color, strokeWidth, absoluteStrokeWidth, nonScalingStroke, className]
  );
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(LucideContext.Provider, { value }, children);
}
const useLucideContext = () => (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(LucideContext);


//# sourceMappingURL=context.mjs.map


/***/ },

/***/ "./node_modules/lucide-react/dist/esm/createLucideIcon.mjs"
/*!*****************************************************************!*\
  !*** ./node_modules/lucide-react/dist/esm/createLucideIcon.mjs ***!
  \*****************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createLucideIcon)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _shared_src_utils_toLucideIconData_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/src/utils/toLucideIconData.mjs */ "./node_modules/lucide-react/dist/esm/shared/src/utils/toLucideIconData.mjs");
/* harmony import */ var _shared_src_utils_toPascalCase_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/src/utils/toPascalCase.mjs */ "./node_modules/lucide-react/dist/esm/shared/src/utils/toPascalCase.mjs");
/* harmony import */ var _Icon_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Icon.mjs */ "./node_modules/lucide-react/dist/esm/Icon.mjs");
/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */






function createLucideIcon(iconDataOrName, iconNode = [], aliases = []) {
  const iconData = typeof iconDataOrName === "string" ? (0,_shared_src_utils_toLucideIconData_mjs__WEBPACK_IMPORTED_MODULE_1__.toLucideIconData)(iconDataOrName, iconNode, aliases) : iconDataOrName;
  const Component = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(
    ({ className, ...props }, ref) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Icon_mjs__WEBPACK_IMPORTED_MODULE_3__["default"], {
      ref,
      icon: iconData,
      className,
      ...props
    })
  );
  if (iconData.name) {
    Component.displayName = (0,_shared_src_utils_toPascalCase_mjs__WEBPACK_IMPORTED_MODULE_2__.toPascalCase)(iconData.name);
  }
  return Component;
}


//# sourceMappingURL=createLucideIcon.mjs.map


/***/ },

/***/ "./node_modules/lucide-react/dist/esm/icons/align-end-vertical.mjs"
/*!*************************************************************************!*\
  !*** ./node_modules/lucide-react/dist/esm/icons/align-end-vertical.mjs ***!
  \*************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __iconData: () => (/* binding */ __iconData),
/* harmony export */   "default": () => (/* binding */ AlignEndVertical)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createLucideIcon.mjs */ "./node_modules/lucide-react/dist/esm/createLucideIcon.mjs");
/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const __iconData = {
  name: "align-end-vertical",
  size: 24,
  node: [
    ["rect", { width: "16", height: "6", x: "2", y: "4", rx: "2", key: "10wcwx" }],
    ["rect", { width: "9", height: "6", x: "9", y: "14", rx: "2", key: "4p5bwg" }],
    ["path", { d: "M22 22V2", key: "12ipfv" }]
  ]
};
__iconData.node;
const AlignEndVertical = (0,_createLucideIcon_mjs__WEBPACK_IMPORTED_MODULE_0__["default"])(__iconData);


//# sourceMappingURL=align-end-vertical.mjs.map


/***/ },

/***/ "./node_modules/lucide-react/dist/esm/icons/align-horizontal-justify-center.mjs"
/*!**************************************************************************************!*\
  !*** ./node_modules/lucide-react/dist/esm/icons/align-horizontal-justify-center.mjs ***!
  \**************************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __iconData: () => (/* binding */ __iconData),
/* harmony export */   "default": () => (/* binding */ AlignHorizontalJustifyCenter)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createLucideIcon.mjs */ "./node_modules/lucide-react/dist/esm/createLucideIcon.mjs");
/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const __iconData = {
  name: "align-horizontal-justify-center",
  size: 24,
  node: [
    ["rect", { width: "6", height: "14", x: "2", y: "5", rx: "2", key: "dy24zr" }],
    ["rect", { width: "6", height: "10", x: "16", y: "7", rx: "2", key: "13zkjt" }],
    ["path", { d: "M12 2v20", key: "t6zp3m" }]
  ]
};
__iconData.node;
const AlignHorizontalJustifyCenter = (0,_createLucideIcon_mjs__WEBPACK_IMPORTED_MODULE_0__["default"])(__iconData);


//# sourceMappingURL=align-horizontal-justify-center.mjs.map


/***/ },

/***/ "./node_modules/lucide-react/dist/esm/icons/align-horizontal-space-around.mjs"
/*!************************************************************************************!*\
  !*** ./node_modules/lucide-react/dist/esm/icons/align-horizontal-space-around.mjs ***!
  \************************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __iconData: () => (/* binding */ __iconData),
/* harmony export */   "default": () => (/* binding */ AlignHorizontalSpaceAround)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createLucideIcon.mjs */ "./node_modules/lucide-react/dist/esm/createLucideIcon.mjs");
/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const __iconData = {
  name: "align-horizontal-space-around",
  size: 24,
  node: [
    ["rect", { width: "6", height: "10", x: "9", y: "7", rx: "2", key: "yn7j0q" }],
    ["path", { d: "M4 22V2", key: "tsjzd3" }],
    ["path", { d: "M20 22V2", key: "1bnhr8" }]
  ]
};
__iconData.node;
const AlignHorizontalSpaceAround = (0,_createLucideIcon_mjs__WEBPACK_IMPORTED_MODULE_0__["default"])(__iconData);


//# sourceMappingURL=align-horizontal-space-around.mjs.map


/***/ },

/***/ "./node_modules/lucide-react/dist/esm/icons/align-horizontal-space-between.mjs"
/*!*************************************************************************************!*\
  !*** ./node_modules/lucide-react/dist/esm/icons/align-horizontal-space-between.mjs ***!
  \*************************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __iconData: () => (/* binding */ __iconData),
/* harmony export */   "default": () => (/* binding */ AlignHorizontalSpaceBetween)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createLucideIcon.mjs */ "./node_modules/lucide-react/dist/esm/createLucideIcon.mjs");
/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const __iconData = {
  name: "align-horizontal-space-between",
  size: 24,
  node: [
    ["rect", { width: "6", height: "14", x: "3", y: "5", rx: "2", key: "j77dae" }],
    ["rect", { width: "6", height: "10", x: "15", y: "7", rx: "2", key: "bq30hj" }],
    ["path", { d: "M3 2v20", key: "1d2pfg" }],
    ["path", { d: "M21 2v20", key: "p059bm" }]
  ]
};
__iconData.node;
const AlignHorizontalSpaceBetween = (0,_createLucideIcon_mjs__WEBPACK_IMPORTED_MODULE_0__["default"])(__iconData);


//# sourceMappingURL=align-horizontal-space-between.mjs.map


/***/ },

/***/ "./node_modules/lucide-react/dist/esm/icons/align-start-vertical.mjs"
/*!***************************************************************************!*\
  !*** ./node_modules/lucide-react/dist/esm/icons/align-start-vertical.mjs ***!
  \***************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __iconData: () => (/* binding */ __iconData),
/* harmony export */   "default": () => (/* binding */ AlignStartVertical)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createLucideIcon.mjs */ "./node_modules/lucide-react/dist/esm/createLucideIcon.mjs");
/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const __iconData = {
  name: "align-start-vertical",
  size: 24,
  node: [
    ["rect", { width: "9", height: "6", x: "6", y: "14", rx: "2", key: "lpm2y7" }],
    ["rect", { width: "16", height: "6", x: "6", y: "4", rx: "2", key: "rdj6ps" }],
    ["path", { d: "M2 2v20", key: "1ivd8o" }]
  ]
};
__iconData.node;
const AlignStartVertical = (0,_createLucideIcon_mjs__WEBPACK_IMPORTED_MODULE_0__["default"])(__iconData);


//# sourceMappingURL=align-start-vertical.mjs.map


/***/ },

/***/ "./node_modules/lucide-react/dist/esm/icons/align-vertical-distribute-center.mjs"
/*!***************************************************************************************!*\
  !*** ./node_modules/lucide-react/dist/esm/icons/align-vertical-distribute-center.mjs ***!
  \***************************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __iconData: () => (/* binding */ __iconData),
/* harmony export */   "default": () => (/* binding */ AlignVerticalDistributeCenter)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createLucideIcon.mjs */ "./node_modules/lucide-react/dist/esm/createLucideIcon.mjs");
/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const __iconData = {
  name: "align-vertical-distribute-center",
  size: 24,
  node: [
    ["path", { d: "M22 17h-3", key: "1lwga1" }],
    ["path", { d: "M22 7h-5", key: "o2endc" }],
    ["path", { d: "M5 17H2", key: "1gx9xc" }],
    ["path", { d: "M7 7H2", key: "6bq26l" }],
    ["rect", { x: "5", y: "14", width: "14", height: "6", rx: "2", key: "1qrzuf" }],
    ["rect", { x: "7", y: "4", width: "10", height: "6", rx: "2", key: "we8e9z" }]
  ]
};
__iconData.node;
const AlignVerticalDistributeCenter = (0,_createLucideIcon_mjs__WEBPACK_IMPORTED_MODULE_0__["default"])(__iconData);


//# sourceMappingURL=align-vertical-distribute-center.mjs.map


/***/ },

/***/ "./node_modules/lucide-react/dist/esm/icons/align-vertical-justify-center.mjs"
/*!************************************************************************************!*\
  !*** ./node_modules/lucide-react/dist/esm/icons/align-vertical-justify-center.mjs ***!
  \************************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __iconData: () => (/* binding */ __iconData),
/* harmony export */   "default": () => (/* binding */ AlignVerticalJustifyCenter)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createLucideIcon.mjs */ "./node_modules/lucide-react/dist/esm/createLucideIcon.mjs");
/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const __iconData = {
  name: "align-vertical-justify-center",
  size: 24,
  node: [
    ["rect", { width: "14", height: "6", x: "5", y: "16", rx: "2", key: "1i8z2d" }],
    ["rect", { width: "10", height: "6", x: "7", y: "2", rx: "2", key: "ypihtt" }],
    ["path", { d: "M2 12h20", key: "9i4pu4" }]
  ]
};
__iconData.node;
const AlignVerticalJustifyCenter = (0,_createLucideIcon_mjs__WEBPACK_IMPORTED_MODULE_0__["default"])(__iconData);


//# sourceMappingURL=align-vertical-justify-center.mjs.map


/***/ },

/***/ "./node_modules/lucide-react/dist/esm/icons/align-vertical-justify-end.mjs"
/*!*********************************************************************************!*\
  !*** ./node_modules/lucide-react/dist/esm/icons/align-vertical-justify-end.mjs ***!
  \*********************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __iconData: () => (/* binding */ __iconData),
/* harmony export */   "default": () => (/* binding */ AlignVerticalJustifyEnd)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createLucideIcon.mjs */ "./node_modules/lucide-react/dist/esm/createLucideIcon.mjs");
/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const __iconData = {
  name: "align-vertical-justify-end",
  size: 24,
  node: [
    ["rect", { width: "14", height: "6", x: "5", y: "12", rx: "2", key: "4l4tp2" }],
    ["rect", { width: "10", height: "6", x: "7", y: "2", rx: "2", key: "ypihtt" }],
    ["path", { d: "M2 22h20", key: "272qi7" }]
  ]
};
__iconData.node;
const AlignVerticalJustifyEnd = (0,_createLucideIcon_mjs__WEBPACK_IMPORTED_MODULE_0__["default"])(__iconData);


//# sourceMappingURL=align-vertical-justify-end.mjs.map


/***/ },

/***/ "./node_modules/lucide-react/dist/esm/icons/align-vertical-justify-start.mjs"
/*!***********************************************************************************!*\
  !*** ./node_modules/lucide-react/dist/esm/icons/align-vertical-justify-start.mjs ***!
  \***********************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __iconData: () => (/* binding */ __iconData),
/* harmony export */   "default": () => (/* binding */ AlignVerticalJustifyStart)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createLucideIcon.mjs */ "./node_modules/lucide-react/dist/esm/createLucideIcon.mjs");
/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const __iconData = {
  name: "align-vertical-justify-start",
  size: 24,
  node: [
    ["rect", { width: "14", height: "6", x: "5", y: "16", rx: "2", key: "1i8z2d" }],
    ["rect", { width: "10", height: "6", x: "7", y: "6", rx: "2", key: "13squh" }],
    ["path", { d: "M2 2h20", key: "1ennik" }]
  ]
};
__iconData.node;
const AlignVerticalJustifyStart = (0,_createLucideIcon_mjs__WEBPACK_IMPORTED_MODULE_0__["default"])(__iconData);


//# sourceMappingURL=align-vertical-justify-start.mjs.map


/***/ },

/***/ "./node_modules/lucide-react/dist/esm/icons/align-vertical-space-between.mjs"
/*!***********************************************************************************!*\
  !*** ./node_modules/lucide-react/dist/esm/icons/align-vertical-space-between.mjs ***!
  \***********************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __iconData: () => (/* binding */ __iconData),
/* harmony export */   "default": () => (/* binding */ AlignVerticalSpaceBetween)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createLucideIcon.mjs */ "./node_modules/lucide-react/dist/esm/createLucideIcon.mjs");
/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const __iconData = {
  name: "align-vertical-space-between",
  size: 24,
  node: [
    ["rect", { width: "14", height: "6", x: "5", y: "15", rx: "2", key: "1w91an" }],
    ["rect", { width: "10", height: "6", x: "7", y: "3", rx: "2", key: "17wqzy" }],
    ["path", { d: "M2 21h20", key: "1nyx9w" }],
    ["path", { d: "M2 3h20", key: "91anmk" }]
  ]
};
__iconData.node;
const AlignVerticalSpaceBetween = (0,_createLucideIcon_mjs__WEBPACK_IMPORTED_MODULE_0__["default"])(__iconData);


//# sourceMappingURL=align-vertical-space-between.mjs.map


/***/ },

/***/ "./node_modules/lucide-react/dist/esm/icons/arrow-down.mjs"
/*!*****************************************************************!*\
  !*** ./node_modules/lucide-react/dist/esm/icons/arrow-down.mjs ***!
  \*****************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __iconData: () => (/* binding */ __iconData),
/* harmony export */   "default": () => (/* binding */ ArrowDown)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createLucideIcon.mjs */ "./node_modules/lucide-react/dist/esm/createLucideIcon.mjs");
/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const __iconData = {
  name: "arrow-down",
  size: 24,
  node: [
    ["path", { d: "M12 5v14", key: "s699le" }],
    ["path", { d: "m19 12-7 7-7-7", key: "1idqje" }]
  ]
};
__iconData.node;
const ArrowDown = (0,_createLucideIcon_mjs__WEBPACK_IMPORTED_MODULE_0__["default"])(__iconData);


//# sourceMappingURL=arrow-down.mjs.map


/***/ },

/***/ "./node_modules/lucide-react/dist/esm/icons/arrow-right.mjs"
/*!******************************************************************!*\
  !*** ./node_modules/lucide-react/dist/esm/icons/arrow-right.mjs ***!
  \******************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __iconData: () => (/* binding */ __iconData),
/* harmony export */   "default": () => (/* binding */ ArrowRight)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createLucideIcon.mjs */ "./node_modules/lucide-react/dist/esm/createLucideIcon.mjs");
/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const __iconData = {
  name: "arrow-right",
  size: 24,
  node: [
    ["path", { d: "M5 12h14", key: "1ays0h" }],
    ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
  ]
};
__iconData.node;
const ArrowRight = (0,_createLucideIcon_mjs__WEBPACK_IMPORTED_MODULE_0__["default"])(__iconData);


//# sourceMappingURL=arrow-right.mjs.map


/***/ },

/***/ "./node_modules/lucide-react/dist/esm/icons/ban.mjs"
/*!**********************************************************!*\
  !*** ./node_modules/lucide-react/dist/esm/icons/ban.mjs ***!
  \**********************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __iconData: () => (/* binding */ __iconData),
/* harmony export */   "default": () => (/* binding */ Ban)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createLucideIcon.mjs */ "./node_modules/lucide-react/dist/esm/createLucideIcon.mjs");
/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const __iconData = {
  name: "ban",
  size: 24,
  node: [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["path", { d: "M4.929 4.929 19.07 19.071", key: "196cmz" }]
  ]
};
__iconData.node;
const Ban = (0,_createLucideIcon_mjs__WEBPACK_IMPORTED_MODULE_0__["default"])(__iconData);


//# sourceMappingURL=ban.mjs.map


/***/ },

/***/ "./node_modules/lucide-react/dist/esm/icons/stretch-horizontal.mjs"
/*!*************************************************************************!*\
  !*** ./node_modules/lucide-react/dist/esm/icons/stretch-horizontal.mjs ***!
  \*************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __iconData: () => (/* binding */ __iconData),
/* harmony export */   "default": () => (/* binding */ StretchHorizontal)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createLucideIcon.mjs */ "./node_modules/lucide-react/dist/esm/createLucideIcon.mjs");
/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const __iconData = {
  name: "stretch-horizontal",
  size: 24,
  node: [
    ["rect", { width: "20", height: "6", x: "2", y: "4", rx: "2", key: "qdearl" }],
    ["rect", { width: "20", height: "6", x: "2", y: "14", rx: "2", key: "1xrn6j" }]
  ]
};
__iconData.node;
const StretchHorizontal = (0,_createLucideIcon_mjs__WEBPACK_IMPORTED_MODULE_0__["default"])(__iconData);


//# sourceMappingURL=stretch-horizontal.mjs.map


/***/ },

/***/ "./node_modules/lucide-react/dist/esm/icons/stretch-vertical.mjs"
/*!***********************************************************************!*\
  !*** ./node_modules/lucide-react/dist/esm/icons/stretch-vertical.mjs ***!
  \***********************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __iconData: () => (/* binding */ __iconData),
/* harmony export */   "default": () => (/* binding */ StretchVertical)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createLucideIcon.mjs */ "./node_modules/lucide-react/dist/esm/createLucideIcon.mjs");
/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const __iconData = {
  name: "stretch-vertical",
  size: 24,
  node: [
    ["rect", { width: "6", height: "20", x: "4", y: "2", rx: "2", key: "19qu7m" }],
    ["rect", { width: "6", height: "20", x: "14", y: "2", rx: "2", key: "24v0nk" }]
  ]
};
__iconData.node;
const StretchVertical = (0,_createLucideIcon_mjs__WEBPACK_IMPORTED_MODULE_0__["default"])(__iconData);


//# sourceMappingURL=stretch-vertical.mjs.map


/***/ },

/***/ "./node_modules/lucide-react/dist/esm/shared/src/build/buildLucideIconForReact.mjs"
/*!*****************************************************************************************!*\
  !*** ./node_modules/lucide-react/dist/esm/shared/src/build/buildLucideIconForReact.mjs ***!
  \*****************************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildLucideIconForReact)
/* harmony export */ });
/* harmony import */ var _buildLucideIconNode_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./buildLucideIconNode.mjs */ "./node_modules/lucide-react/dist/esm/shared/src/build/buildLucideIconNode.mjs");
/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



function buildLucideIconForReact(icon, params = {}) {
  return (0,_buildLucideIconNode_mjs__WEBPACK_IMPORTED_MODULE_0__["default"])(icon, {
    ...params,
    attributeNames: {
      ...params.attributeNames,
      class: "className",
      "stroke-width": "strokeWidth",
      "stroke-linecap": "strokeLinecap",
      "stroke-linejoin": "strokeLinejoin",
      "vector-effect": "vectorEffect"
    }
  });
}


//# sourceMappingURL=buildLucideIconForReact.mjs.map


/***/ },

/***/ "./node_modules/lucide-react/dist/esm/shared/src/build/buildLucideIconNode.mjs"
/*!*************************************************************************************!*\
  !*** ./node_modules/lucide-react/dist/esm/shared/src/build/buildLucideIconNode.mjs ***!
  \*************************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildLucideIconNode)
/* harmony export */ });
/* harmony import */ var _defaultAttributes_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./defaultAttributes.mjs */ "./node_modules/lucide-react/dist/esm/shared/src/build/defaultAttributes.mjs");
/* harmony import */ var _utils_mergeClasses_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/mergeClasses.mjs */ "./node_modules/lucide-react/dist/esm/shared/src/utils/mergeClasses.mjs");
/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */




function isDefined(value) {
  return value !== null && value !== void 0;
}
function buildLucideIconNode(icon, params = {}) {
  const attributeNames = params.attributeNames ?? {};
  const getAttributeName = (attributeName) => attributeNames[attributeName] ?? attributeName;
  const viewBoxWidth = icon.size ?? icon.width ?? _defaultAttributes_mjs__WEBPACK_IMPORTED_MODULE_0__["default"]["width"];
  const viewBoxHeight = icon.size ?? icon.height ?? _defaultAttributes_mjs__WEBPACK_IMPORTED_MODULE_0__["default"]["height"];
  const aliasClassNames = icon.aliases?.filter((alias) => typeof alias === "string" && alias.trim() !== "").map((alias) => `lucide-${alias}`) ?? [];
  const iconClassNames = [...icon.name ? [`lucide-${icon.name}`] : [], ...aliasClassNames];
  const classNamesFromClassName = params.className?.split(" ").filter(Boolean) ?? [];
  const className = params.includeDefaultClasses === false ? (0,_utils_mergeClasses_mjs__WEBPACK_IMPORTED_MODULE_1__.mergeClasses)(...classNamesFromClassName) : (0,_utils_mergeClasses_mjs__WEBPACK_IMPORTED_MODULE_1__.mergeClasses)("lucide", ...iconClassNames, ...classNamesFromClassName);
  const calculatedStrokeWidth = params.absoluteStrokeWidth ? Number(params.strokeWidth ?? _defaultAttributes_mjs__WEBPACK_IMPORTED_MODULE_0__["default"]["stroke-width"]) * Number(icon.size ?? icon.width ?? _defaultAttributes_mjs__WEBPACK_IMPORTED_MODULE_0__["default"]["width"]) / Number(params.size ?? params.width ?? _defaultAttributes_mjs__WEBPACK_IMPORTED_MODULE_0__["default"]["width"]) : params.strokeWidth ?? _defaultAttributes_mjs__WEBPACK_IMPORTED_MODULE_0__["default"]["stroke-width"];
  const attributes = {
    ...Object.entries(_defaultAttributes_mjs__WEBPACK_IMPORTED_MODULE_0__["default"]).reduce((attrs, [attrName, value]) => {
      attrs[getAttributeName(attrName)] = value;
      return attrs;
    }, {}),
    ..."color" in params && params.color && {
      [getAttributeName("stroke")]: params.color
    },
    ..."size" in params && isDefined(params.size) && {
      [getAttributeName("width")]: params.size,
      [getAttributeName("height")]: params.size
    },
    ..."width" in params && isDefined(params.width) && {
      [getAttributeName("width")]: params.width
    },
    ..."height" in params && isDefined(params.height) && {
      [getAttributeName("height")]: params.height
    },
    [getAttributeName("stroke-width")]: calculatedStrokeWidth,
    ...className && {
      [getAttributeName("class")]: className
    },
    [getAttributeName("viewBox")]: `0 0 ${viewBoxWidth} ${viewBoxHeight}`,
    ...params.hasA11yProp === false ? {
      [getAttributeName("aria-hidden")]: "true"
    } : {},
    ..."attributes" in params && params.attributes
  };
  return [
    "svg",
    attributes,
    icon.node.map((child) => {
      const [name, attrs, children] = child;
      const nextAttrs = params.nonScalingStroke ? { [getAttributeName("vector-effect")]: "non-scaling-stroke", ...attrs } : attrs;
      return children ? [name, nextAttrs, children] : [name, nextAttrs];
    })
  ];
}


//# sourceMappingURL=buildLucideIconNode.mjs.map


/***/ },

/***/ "./node_modules/lucide-react/dist/esm/shared/src/build/defaultAttributes.mjs"
/*!***********************************************************************************!*\
  !*** ./node_modules/lucide-react/dist/esm/shared/src/build/defaultAttributes.mjs ***!
  \***********************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ defaultAttributes)
/* harmony export */ });
/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": 2,
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
};


//# sourceMappingURL=defaultAttributes.mjs.map


/***/ },

/***/ "./node_modules/lucide-react/dist/esm/shared/src/utils/hasA11yProp.mjs"
/*!*****************************************************************************!*\
  !*** ./node_modules/lucide-react/dist/esm/shared/src/utils/hasA11yProp.mjs ***!
  \*****************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   hasA11yProp: () => (/* binding */ hasA11yProp)
/* harmony export */ });
/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const hasA11yProp = (props) => {
  for (const prop in props) {
    if (prop.startsWith("aria-") || prop === "role" || prop === "title") {
      return true;
    }
  }
  return false;
};


//# sourceMappingURL=hasA11yProp.mjs.map


/***/ },

/***/ "./node_modules/lucide-react/dist/esm/shared/src/utils/mergeClasses.mjs"
/*!******************************************************************************!*\
  !*** ./node_modules/lucide-react/dist/esm/shared/src/utils/mergeClasses.mjs ***!
  \******************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   mergeClasses: () => (/* binding */ mergeClasses)
/* harmony export */ });
/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const mergeClasses = (...classes) => classes.filter((className, index, array) => {
  return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
}).join(" ").trim();


//# sourceMappingURL=mergeClasses.mjs.map


/***/ },

/***/ "./node_modules/lucide-react/dist/esm/shared/src/utils/toCamelCase.mjs"
/*!*****************************************************************************!*\
  !*** ./node_modules/lucide-react/dist/esm/shared/src/utils/toCamelCase.mjs ***!
  \*****************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   toCamelCase: () => (/* binding */ toCamelCase)
/* harmony export */ });
/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const toCamelCase = (string) => {
  let out = "";
  let upperNext = false;
  for (const ch of string) {
    if (ch === "-" || ch === "_" || ch <= " ") {
      upperNext = out.length > 0;
      continue;
    }
    if (out.length === 0) {
      out += ch.toLowerCase();
    } else {
      out += upperNext ? ch.toUpperCase() : ch;
    }
    upperNext = false;
  }
  return out;
};


//# sourceMappingURL=toCamelCase.mjs.map


/***/ },

/***/ "./node_modules/lucide-react/dist/esm/shared/src/utils/toKebabCase.mjs"
/*!*****************************************************************************!*\
  !*** ./node_modules/lucide-react/dist/esm/shared/src/utils/toKebabCase.mjs ***!
  \*****************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   toKebabCase: () => (/* binding */ toKebabCase)
/* harmony export */ });
/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const toKebabCase = (string) => string?.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();


//# sourceMappingURL=toKebabCase.mjs.map


/***/ },

/***/ "./node_modules/lucide-react/dist/esm/shared/src/utils/toLucideIconData.mjs"
/*!**********************************************************************************!*\
  !*** ./node_modules/lucide-react/dist/esm/shared/src/utils/toLucideIconData.mjs ***!
  \**********************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   toLucideIconData: () => (/* binding */ toLucideIconData)
/* harmony export */ });
/* harmony import */ var _toKebabCase_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toKebabCase.mjs */ "./node_modules/lucide-react/dist/esm/shared/src/utils/toKebabCase.mjs");
/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



function toLucideIconData(iconName, iconNode, aliases = []) {
  if (iconNode == null) {
    throw new Error("[lucide]: iconNode is required when icon name is used");
  }
  return {
    name: (0,_toKebabCase_mjs__WEBPACK_IMPORTED_MODULE_0__.toKebabCase)(iconName),
    size: 24,
    node: iconNode,
    ...aliases.length > 0 ? { aliases } : {}
  };
}


//# sourceMappingURL=toLucideIconData.mjs.map


/***/ },

/***/ "./node_modules/lucide-react/dist/esm/shared/src/utils/toPascalCase.mjs"
/*!******************************************************************************!*\
  !*** ./node_modules/lucide-react/dist/esm/shared/src/utils/toPascalCase.mjs ***!
  \******************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   toPascalCase: () => (/* binding */ toPascalCase)
/* harmony export */ });
/* harmony import */ var _toCamelCase_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toCamelCase.mjs */ "./node_modules/lucide-react/dist/esm/shared/src/utils/toCamelCase.mjs");
/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const toPascalCase = (string) => {
  const camelCase = (0,_toCamelCase_mjs__WEBPACK_IMPORTED_MODULE_0__.toCamelCase)(string);
  return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
};


//# sourceMappingURL=toPascalCase.mjs.map


/***/ },

/***/ "./src/flexbox/block.json"
/*!********************************!*\
  !*** ./src/flexbox/block.json ***!
  \********************************/
(module) {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"taufb/ultimate-flexbox","version":"0.1.0","title":"Ultimate Flexbox","category":"widgets","icon":"smiley","description":"Ultimate Flexbox is Gutenberg block designed to enhance the WordPress block editor.","example":{},"supports":{"html":false,"color":{"background":true,"text":true},"typography":{"fontSize":true,"lineHeight":true,"textAlign":true},"background":{"backgroundImage":true,"backgroundSize":true},"shadow":true,"align":true,"alignWide":true,"spacing":{"margin":true,"padding":true}},"attributes":{"justifyContent":{"type":"string","default":"flex-start"},"tabletJustifyContent":{"type":"string","default":"flex-start"},"mobileJustifyContent":{"type":"string","default":"flex-start"},"alignItems":{"type":"string","default":"stretch"},"tabletAlignItems":{"type":"string","default":"stretch"},"mobileAlignItems":{"type":"string","default":"stretch"},"direction":{"type":"string","default":""},"tabletDirection":{"type":"string","default":""},"mobileDirection":{"type":"string","default":""},"wrap":{"type":"string","default":""},"tabletWrap":{"type":"string","default":""},"mobileWrap":{"type":"string","default":""},"width":{"type":"string","default":""},"tabletWidth":{"type":"string","default":""},"mobileWidth":{"type":"string","default":""}},"textdomain":"fbtt","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css","render":"file:./render.php","viewScript":"file:./view.js"}');

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	const __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		const cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		const module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			const e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		const deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn) => {
/******/ 			if(chunkIds) {
/******/ 				deferred.push([chunkIds, fn]);
/******/ 				return;
/******/ 			}
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				let [chunkIds, fn] = deferred[i];
/******/ 				let fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if (__webpack_require__.O.j(chunkIds[j])) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					const r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = (module) => {
/******/ 		const getter = module && module.__esModule ?
/******/ 			() => (module['default']) :
/******/ 			() => (module);
/******/ 		__webpack_require__.d(getter, { a: getter });
/******/ 		return getter;
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	// define getter/value functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	__webpack_require__.o = (obj, prop) => (Object.hasOwn(obj, prop));
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		const installedChunks = {
/******/ 			"flexbox/index": 0,
/******/ 			"flexbox/style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		const webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			let [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		const chunkLoadingGlobal = globalThis["webpackChunkfbtt"] ||= [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	let __webpack_exports__ = __webpack_require__.O(undefined, ["flexbox/style-index"], () => (__webpack_require__("./src/flexbox/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map