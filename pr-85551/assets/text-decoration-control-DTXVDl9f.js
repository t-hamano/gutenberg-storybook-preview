import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as __, t as init_build_module } from "./build-module-v04us4E2.js";
import { a as init_clsx, i as clsx } from "./iframe-UtSZlYID.js";
import { t as format_strikethrough_default } from "./format-strikethrough-cLIRoDXN.js";
import { t as format_underline_default } from "./format-underline-32qhw7sv.js";
import { n as reset_default } from "./reset-7DubdZqZ.js";
import { i as init_component, r as component_default } from "./component-CzTPIfcd.js";
import { n as init_component$1, t as component_default$1 } from "./component-BNbFVzSD.js";
import { r as init_build_module$1 } from "./library.story-CbQx3MQ6.js";
//#region ../packages/block-editor/src/components/text-decoration-control/index.tsx
/**
* Control to facilitate text decoration selections.
*
* @param props           Component props.
* @param props.value     Currently selected text decoration.
* @param props.onChange  Handles change in text decoration selection.
* @param props.className Additional class name to apply.
*
* @return Text decoration control.
*/
function TextDecorationControl({ value, onChange, className }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(component_default, {
		isDeselectable: true,
		label: __("Decoration"),
		className: clsx("block-editor-text-decoration-control", className),
		value,
		onChange: (newValue) => {
			onChange(newValue === value ? void 0 : newValue);
		},
		children: TEXT_DECORATIONS.map((option) => {
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(component_default$1, {
				value: option.value,
				icon: option.icon,
				label: option.label
			}, option.value, false, {
				fileName: _jsxFileName,
				lineNumber: 63,
				columnNumber: 6
			}, this);
		})
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 44,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime, _jsxFileName, TEXT_DECORATIONS;
function init_text_decoration_control() {
	return (init_text_decoration_control = __esmMin((() => {
		init_clsx();
		init_build_module$1();
		init_build_module();
		init_component(), init_component$1();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/block-editor/src/components/text-decoration-control/index.tsx";
		TEXT_DECORATIONS = [
			{
				label: __("None"),
				value: "none",
				icon: reset_default
			},
			{
				label: __("Underline"),
				value: "underline",
				icon: format_underline_default
			},
			{
				label: __("Strikethrough"),
				value: "line-through",
				icon: format_strikethrough_default
			}
		];
		try {
			TextDecorationControl.__docgenInfo = {
				"description": "Control to facilitate text decoration selections.",
				"displayName": "textdecorationcontrol",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/block-editor/src/components/text-decoration-control/index.tsx",
				"methods": [],
				"props": {
					"className": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/text-decoration-control/types.ts",
							"name": "TextDecorationControlProps"
						}],
						"description": "Additional class name to apply.",
						"name": "className",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/text-decoration-control/types.ts",
							"name": "TextDecorationControlProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"value": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/text-decoration-control/types.ts",
							"name": "TextDecorationControlProps"
						}],
						"description": "Currently selected text decoration.",
						"name": "value",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/text-decoration-control/types.ts",
							"name": "TextDecorationControlProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"onChange": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/text-decoration-control/types.ts",
							"name": "TextDecorationControlProps"
						}],
						"description": "Handles change in text decoration selection, with `undefined` when the\nselected one is deselected.",
						"name": "onChange",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/text-decoration-control/types.ts",
							"name": "TextDecorationControlProps"
						},
						"required": true,
						"tags": {},
						"type": { "name": "(value: string | undefined) => void" }
					}
				},
				"tags": {
					"param": "props Component props.\nprops.value Currently selected text decoration.\nprops.onChange Handles change in text decoration selection.\nprops.className Additional class name to apply.",
					"return": "Text decoration control."
				}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
export { init_text_decoration_control as n, TextDecorationControl as t };
