import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as sprintf } from "./sprintf-_uhhbfMc.js";
import { n as __, t as init_build_module } from "./build-module-v04us4E2.js";
import { a as heading_level_4_default, d as heading_level_1_default, l as heading_level_2_default, r as heading_level_5_default, s as heading_level_3_default, t as heading_level_6_default } from "./heading-level-6-DUqSCLdE.js";
import { n as paragraph_default } from "./paragraph-CDUMjqOy.js";
import { n as init_icon, t as icon_default } from "./icon-oSwa7eHF.js";
import { n as toolbar_dropdown_menu_default, t as init_toolbar_dropdown_menu } from "./toolbar-dropdown-menu-CRUmHWsB.js";
import { r as init_build_module$1 } from "./library.story-DawnfKTW.js";
//#region ../packages/block-editor/src/components/block-heading-level-dropdown/heading-level-icon.jsx
/**
* Heading level icon.
*
* @param {WPHeadingLevelIconProps} props Component props.
*
* @return {?ComponentType} The icon.
*/
function HeadingLevelIcon({ level }) {
	if (LEVEL_TO_PATH[level]) return /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(icon_default, { icon: LEVEL_TO_PATH[level] }, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 41,
		columnNumber: 10
	}, this);
	return null;
}
var import_jsx_dev_runtime$1, _jsxFileName$1, LEVEL_TO_PATH;
function init_heading_level_icon() {
	return (init_heading_level_icon = __esmMin((() => {
		init_build_module$1();
		init_icon();
		import_jsx_dev_runtime$1 = require_jsx_dev_runtime();
		_jsxFileName$1 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/block-editor/src/components/block-heading-level-dropdown/heading-level-icon.jsx";
		LEVEL_TO_PATH = {
			0: paragraph_default,
			1: heading_level_1_default,
			2: heading_level_2_default,
			3: heading_level_3_default,
			4: heading_level_4_default,
			5: heading_level_5_default,
			6: heading_level_6_default
		};
		HeadingLevelIcon.__docgenInfo = {
			"description": "Heading level icon.\n\n@param {WPHeadingLevelIconProps} props Component props.\n\n@return {?ComponentType} The icon.",
			"methods": [],
			"displayName": "HeadingLevelIcon"
		};
	})))();
}
//#endregion
//#region ../packages/block-editor/src/components/block-heading-level-dropdown/index.jsx
/** @typedef {React.ComponentType} ComponentType */
/**
* HeadingLevelDropdown props.
*
* @typedef WPHeadingLevelDropdownProps
*
* @property {number}     value    The chosen heading level.
* @property {number[]}   options  An array of supported heading levels.
* @property {()=>number} onChange Function called with
*                                 the selected value changes.
*/
/**
* Dropdown for selecting a heading level (1 through 6) or paragraph (0).
*
* @param {WPHeadingLevelDropdownProps} props Component props.
*
* @return {ComponentType} The toolbar.
*/
function HeadingLevelDropdown({ options = HEADING_LEVELS, value, onChange }) {
	const validOptions = options.filter((option) => option === 0 || HEADING_LEVELS.includes(option)).sort((a, b) => a - b);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(toolbar_dropdown_menu_default, {
		popoverProps: POPOVER_PROPS,
		icon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HeadingLevelIcon, { level: value }, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 45,
			columnNumber: 11
		}, this),
		label: __("Change level"),
		controls: validOptions.map((targetLevel) => {
			const isActive = targetLevel === value;
			return {
				icon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HeadingLevelIcon, { level: targetLevel }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 50,
					columnNumber: 12
				}, this),
				title: targetLevel === 0 ? __("Paragraph") : sprintf(__("Heading %d"), targetLevel),
				isActive,
				onClick() {
					onChange(targetLevel);
				},
				role: "menuitemradio"
			};
		})
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 43,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime, _jsxFileName, HEADING_LEVELS, POPOVER_PROPS;
function init_block_heading_level_dropdown() {
	return (init_block_heading_level_dropdown = __esmMin((() => {
		init_toolbar_dropdown_menu();
		init_build_module();
		init_heading_level_icon();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/block-editor/src/components/block-heading-level-dropdown/index.jsx";
		HEADING_LEVELS = [
			1,
			2,
			3,
			4,
			5,
			6
		];
		POPOVER_PROPS = { className: "block-library-heading-level-dropdown" };
		HeadingLevelDropdown.__docgenInfo = {
			"description": "Dropdown for selecting a heading level (1 through 6) or paragraph (0).\n\n@param {WPHeadingLevelDropdownProps} props Component props.\n\n@return {ComponentType} The toolbar.",
			"methods": [],
			"displayName": "HeadingLevelDropdown",
			"props": { "options": {
				"defaultValue": {
					"value": "[ 1, 2, 3, 4, 5, 6 ]",
					"computed": false
				},
				"required": false
			} }
		};
	})))();
}
//#endregion
export { init_block_heading_level_dropdown as n, HeadingLevelDropdown as t };
