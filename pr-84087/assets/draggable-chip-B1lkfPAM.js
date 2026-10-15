import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as sprintf } from "./sprintf-_uhhbfMc.js";
import { n as __, r as _n, t as init_build_module } from "./build-module-v04us4E2.js";
import { t as drag_handle_default } from "./drag-handle-CBwNwImf.js";
import { n as init_component, t as component_default } from "./component-CU_5aj14.js";
import { n as init_component$1, t as component_default$1 } from "./component-B-1w1ZFt.js";
import { n as init_block_icon, t as block_icon_default } from "./block-icon-UgbYBEE6.js";
import { r as init_build_module$1 } from "./library.story-DawnfKTW.js";
//#region ../packages/block-editor/src/components/block-draggable/draggable-chip.jsx
function BlockDraggableChip({ count, icon, isPattern, fadeWhenDisabled }) {
	const patternLabel = isPattern && __("Pattern");
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "block-editor-block-draggable-chip-wrapper",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "block-editor-block-draggable-chip",
			"data-testid": "block-draggable-chip",
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(component_default$1, {
				justify: "center",
				className: "block-editor-block-draggable-chip__content",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(component_default, { children: icon ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(block_icon_default, { icon }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 25,
						columnNumber: 8
					}, this) : patternLabel || sprintf(_n("%d block", "%d blocks", count), count) }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 23,
						columnNumber: 6
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(component_default, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(block_icon_default, { icon: drag_handle_default }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 36,
						columnNumber: 7
					}, this) }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 35,
						columnNumber: 6
					}, this),
					fadeWhenDisabled && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(component_default, {
						className: "block-editor-block-draggable-chip__disabled",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "block-editor-block-draggable-chip__disabled-icon" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 40,
							columnNumber: 8
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 39,
						columnNumber: 7
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 19,
				columnNumber: 5
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 15,
			columnNumber: 4
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 14,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime, _jsxFileName;
function init_draggable_chip() {
	return (init_draggable_chip = __esmMin((() => {
		init_build_module();
		init_component$1(), init_component();
		init_build_module$1();
		init_block_icon();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/block-editor/src/components/block-draggable/draggable-chip.jsx";
		BlockDraggableChip.__docgenInfo = {
			"description": "",
			"methods": [],
			"displayName": "BlockDraggableChip"
		};
	})))();
}
//#endregion
export { init_draggable_chip as n, BlockDraggableChip as t };
