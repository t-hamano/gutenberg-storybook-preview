import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as __, t as init_build_module } from "./build-module-v04us4E2.js";
import { a as init_clsx, i as clsx } from "./iframe-UtSZlYID.js";
import { a as align_center_default, r as align_left_default, t as align_right_default } from "./align-right-DHumc3vj.js";
import { t as align_justify_default } from "./align-justify-h2YmaPYH.js";
import { i as init_component, r as component_default } from "./component-CzTPIfcd.js";
import { n as init_component$1, t as component_default$1 } from "./component-BNbFVzSD.js";
import { r as init_build_module$1 } from "./library.story-CbQx3MQ6.js";
//#region ../packages/block-editor/src/components/text-alignment-control/index.tsx
/**
* Control to facilitate text alignment selections.
*
* @param props           Component props.
* @param props.className Class name to add to the control.
* @param props.value     Currently selected text alignment.
* @param props.onChange  Handles change in text alignment selection.
* @param props.options   Array of text alignment options to display.
*
* @return Text alignment control.
*/
function TextAlignmentControl({ className, value, onChange, options = DEFAULT_OPTIONS }) {
	const validOptions = (0, import_react.useMemo)(() => TEXT_ALIGNMENT_OPTIONS.filter((option) => options.includes(option.value)), [options]);
	if (!validOptions.length) return null;
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(component_default, {
		isDeselectable: true,
		label: __("Text alignment"),
		className: clsx("block-editor-text-alignment-control", className),
		value,
		onChange: (newValue) => {
			onChange(newValue === value ? void 0 : newValue);
		},
		children: validOptions.map((option) => {
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(component_default$1, {
				value: option.value,
				icon: option.icon,
				label: option.label
			}, option.value, false, {
				fileName: _jsxFileName,
				lineNumber: 90,
				columnNumber: 6
			}, this);
		})
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 71,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime, _jsxFileName, TEXT_ALIGNMENT_OPTIONS, DEFAULT_OPTIONS;
function init_text_alignment_control() {
	return (init_text_alignment_control = __esmMin((() => {
		init_clsx();
		init_build_module();
		init_build_module$1();
		init_react();
		init_component(), init_component$1();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/block-editor/src/components/text-alignment-control/index.tsx";
		TEXT_ALIGNMENT_OPTIONS = [
			{
				label: __("Align text left"),
				value: "left",
				icon: align_left_default
			},
			{
				label: __("Align text center"),
				value: "center",
				icon: align_center_default
			},
			{
				label: __("Align text right"),
				value: "right",
				icon: align_right_default
			},
			{
				label: __("Justify text"),
				value: "justify",
				icon: align_justify_default
			}
		];
		DEFAULT_OPTIONS = [
			"left",
			"center",
			"right"
		];
		try {
			TextAlignmentControl.__docgenInfo = {
				"description": "Control to facilitate text alignment selections.",
				"displayName": "textalignmentcontrol",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/block-editor/src/components/text-alignment-control/index.tsx",
				"methods": [],
				"props": {
					"className": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/text-alignment-control/types.ts",
							"name": "TextAlignmentControlProps"
						}],
						"description": "Class name to add to the control.",
						"name": "className",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/text-alignment-control/types.ts",
							"name": "TextAlignmentControlProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"value": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/text-alignment-control/types.ts",
							"name": "TextAlignmentControlProps"
						}],
						"description": "Currently selected text alignment.",
						"name": "value",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/text-alignment-control/types.ts",
							"name": "TextAlignmentControlProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"onChange": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/text-alignment-control/types.ts",
							"name": "TextAlignmentControlProps"
						}],
						"description": "Handles change in text alignment selection, with `undefined` when the\nselected one is deselected.",
						"name": "onChange",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/text-alignment-control/types.ts",
							"name": "TextAlignmentControlProps"
						},
						"required": true,
						"tags": {},
						"type": { "name": "(value: string | undefined) => void" }
					},
					"options": {
						"defaultValue": { "value": "[ 'left', 'center', 'right' ]" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/text-alignment-control/types.ts",
							"name": "TextAlignmentControlProps"
						}],
						"description": "Array of text alignment options to display.",
						"name": "options",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/text-alignment-control/types.ts",
							"name": "TextAlignmentControlProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "string[]" }
					}
				},
				"tags": {
					"param": "props Component props.\nprops.className Class name to add to the control.\nprops.value Currently selected text alignment.\nprops.onChange Handles change in text alignment selection.\nprops.options Array of text alignment options to display.",
					"return": "Text alignment control."
				}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
export { init_text_alignment_control as n, TextAlignmentControl as t };
