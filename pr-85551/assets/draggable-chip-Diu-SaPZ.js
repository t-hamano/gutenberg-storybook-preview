import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as sprintf } from "./sprintf-_uhhbfMc.js";
import { n as __, r as _n, t as init_build_module } from "./build-module-v04us4E2.js";
import { t as drag_handle_default } from "./drag-handle-a383zSyV.js";
import { n as init_component, t as component_default } from "./component-D1o10iDw.js";
import { n as init_component$1, t as component_default$1 } from "./component-CGJctjuC.js";
import { n as init_block_icon, t as block_icon_default } from "./block-icon-B6DphXOZ.js";
import { r as init_build_module$1 } from "./library.story-CbQx3MQ6.js";
//#region ../packages/block-editor/src/components/block-draggable/draggable-chip.tsx
/**
* The chip that follows the cursor while blocks are dragged.
*
* @param props
* @param props.count            How many blocks are being dragged.
* @param props.icon             Shown in place of the count.
* @param props.isPattern        Labels the chip as a pattern when there's no icon.
* @param props.fadeWhenDisabled Adds the indicator shown when the drop target won't accept the blocks.
* @return The chip.
*/
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
						lineNumber: 36,
						columnNumber: 8
					}, this) : patternLabel || sprintf(_n("%d block", "%d blocks", count), count) }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 34,
						columnNumber: 6
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(component_default, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(block_icon_default, { icon: drag_handle_default }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 47,
						columnNumber: 7
					}, this) }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 46,
						columnNumber: 6
					}, this),
					fadeWhenDisabled && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(component_default, {
						className: "block-editor-block-draggable-chip__disabled",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "block-editor-block-draggable-chip__disabled-icon" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 51,
							columnNumber: 8
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 50,
						columnNumber: 7
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 30,
				columnNumber: 5
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 26,
			columnNumber: 4
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 25,
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
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/block-editor/src/components/block-draggable/draggable-chip.tsx";
		try {
			BlockDraggableChip.__docgenInfo = {
				"description": "The chip that follows the cursor while blocks are dragged.",
				"displayName": "draggablechip",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/block-editor/src/components/block-draggable/draggable-chip.tsx",
				"methods": [],
				"props": {
					"count": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/block-draggable/types.ts",
							"name": "BlockDraggableChipProps"
						}],
						"description": "How many blocks are being dragged.",
						"name": "count",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/block-draggable/types.ts",
							"name": "BlockDraggableChipProps"
						},
						"required": true,
						"tags": {},
						"type": { "name": "number" }
					},
					"icon": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/block-draggable/types.ts",
							"name": "BlockDraggableChipProps"
						}],
						"description": "Shown in place of the count.",
						"name": "icon",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/block-draggable/types.ts",
							"name": "BlockDraggableChipProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "BlockTypeIcon" }
					},
					"isPattern": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/block-draggable/types.ts",
							"name": "BlockDraggableChipProps"
						}],
						"description": "Labels the chip as a pattern when there's no icon.",
						"name": "isPattern",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/block-draggable/types.ts",
							"name": "BlockDraggableChipProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"fadeWhenDisabled": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/block-draggable/types.ts",
							"name": "BlockDraggableChipProps"
						}],
						"description": "Adds the indicator shown when the drop target won't accept the blocks.",
						"name": "fadeWhenDisabled",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/block-draggable/types.ts",
							"name": "BlockDraggableChipProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					}
				},
				"tags": {
					"param": "props\nprops.count How many blocks are being dragged.\nprops.icon Shown in place of the count.\nprops.isPattern Labels the chip as a pattern when there's no icon.\nprops.fadeWhenDisabled Adds the indicator shown when the drop target won't accept the blocks.",
					"return": "The chip."
				}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
export { init_draggable_chip as n, BlockDraggableChip as t };
