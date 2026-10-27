import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as __, t as init_build_module } from "./build-module-v04us4E2.js";
import { a as init_clsx, i as clsx } from "./iframe-UtSZlYID.js";
import { t as format_capitalize_default } from "./format-capitalize-CtBIoVVF.js";
import { r as format_lowercase_default, t as format_uppercase_default } from "./format-uppercase-BaeJ1P62.js";
import { n as reset_default } from "./reset-7DubdZqZ.js";
import { i as init_component, r as component_default } from "./component-CzTPIfcd.js";
import { n as init_component$1, t as component_default$1 } from "./component-BNbFVzSD.js";
import { r as init_build_module$1 } from "./library.story-CbQx3MQ6.js";
//#region ../packages/block-editor/src/components/text-transform-control/index.tsx
/**
* Control to facilitate text transform selections.
*
* @param props           Component props.
* @param props.className Class name to add to the control.
* @param props.value     Currently selected text transform.
* @param props.onChange  Handles change in text transform selection.
*
* @return Text transform control.
*/
function TextTransformControl({ className, value, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(component_default, {
		isDeselectable: true,
		label: __("Letter case"),
		className: clsx("block-editor-text-transform-control", className),
		value,
		onChange: (newValue) => {
			onChange(newValue === value ? void 0 : newValue);
		},
		children: TEXT_TRANSFORMS.map((option) => {
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(component_default$1, {
				value: option.value,
				icon: option.icon,
				label: option.label
			}, option.value, false, {
				fileName: _jsxFileName,
				lineNumber: 73,
				columnNumber: 6
			}, this);
		})
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 54,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime, _jsxFileName, TEXT_TRANSFORMS;
function init_text_transform_control() {
	return (init_text_transform_control = __esmMin((() => {
		init_clsx();
		init_build_module();
		init_build_module$1();
		init_component(), init_component$1();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/block-editor/src/components/text-transform-control/index.tsx";
		TEXT_TRANSFORMS = [
			{
				label: __("None"),
				value: "none",
				icon: reset_default
			},
			{
				label: __("Uppercase"),
				value: "uppercase",
				icon: format_uppercase_default
			},
			{
				label: __("Lowercase"),
				value: "lowercase",
				icon: format_lowercase_default
			},
			{
				label: __("Capitalize"),
				value: "capitalize",
				icon: format_capitalize_default
			}
		];
		try {
			TextTransformControl.__docgenInfo = {
				"description": "Control to facilitate text transform selections.",
				"displayName": "texttransformcontrol",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/block-editor/src/components/text-transform-control/index.tsx",
				"methods": [],
				"props": {
					"className": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/text-transform-control/types.ts",
							"name": "TextTransformControlProps"
						}],
						"description": "Additional class name to apply.",
						"name": "className",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/text-transform-control/types.ts",
							"name": "TextTransformControlProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"value": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/text-transform-control/types.ts",
							"name": "TextTransformControlProps"
						}],
						"description": "Currently selected text transform.",
						"name": "value",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/text-transform-control/types.ts",
							"name": "TextTransformControlProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"onChange": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/text-transform-control/types.ts",
							"name": "TextTransformControlProps"
						}],
						"description": "Handles change in text transform selection, with `undefined` when the\nselected one is deselected.",
						"name": "onChange",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/text-transform-control/types.ts",
							"name": "TextTransformControlProps"
						},
						"required": true,
						"tags": {},
						"type": { "name": "(value: string | undefined) => void" }
					}
				},
				"tags": {
					"param": "props Component props.\nprops.className Class name to add to the control.\nprops.value Currently selected text transform.\nprops.onChange Handles change in text transform selection.",
					"return": "Text transform control."
				}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
export { init_text_transform_control as n, TextTransformControl as t };
