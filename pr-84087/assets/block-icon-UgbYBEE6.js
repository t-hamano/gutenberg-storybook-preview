import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { o as clsx, s as init_clsx } from "./iframe-D4D-SsYo.js";
import { t as block_default_default } from "./block-default-Bn5m7Hae.js";
import { n as init_icon, t as icon_default } from "./icon-oSwa7eHF.js";
import { r as init_build_module } from "./library.story-DawnfKTW.js";
//#region ../packages/block-editor/src/components/block-icon/index.jsx
function BlockIcon({ icon, showColors = false, className, context }) {
	if (icon?.src === "block-default") icon = { src: block_default_default };
	const renderedIcon = /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(icon_default, {
		icon: icon && icon.src ? icon.src : icon,
		context
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 14,
		columnNumber: 3
	}, this);
	const style = showColors ? {
		backgroundColor: icon && icon.background,
		color: icon && icon.foreground
	} : {};
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
		style,
		className: clsx("block-editor-block-icon", className, { "has-colors": showColors }),
		children: renderedIcon
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 27,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime, _jsxFileName, block_icon_default;
function init_block_icon() {
	return (init_block_icon = __esmMin((() => {
		init_clsx();
		init_icon();
		init_build_module();
		init_react();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/block-editor/src/components/block-icon/index.jsx";
		block_icon_default = (0, import_react.memo)(BlockIcon);
		BlockIcon.__docgenInfo = {
			"description": "",
			"methods": [],
			"displayName": "BlockIcon",
			"props": { "showColors": {
				"defaultValue": {
					"value": "false",
					"computed": false
				},
				"required": false
			} }
		};
	})))();
}
//#endregion
export { init_block_icon as n, block_icon_default as t };
