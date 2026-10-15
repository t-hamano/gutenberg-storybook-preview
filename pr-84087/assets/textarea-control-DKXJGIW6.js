import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as use_instance_id_default, t as init_use_instance_id } from "./use-instance-id-BznKyZc1.js";
import { o as clsx, s as init_clsx } from "./iframe-D4D-SsYo.js";
import { n as init_base_control, t as BaseControl } from "./base-control-DsOU5iCO.js";
//#region ../packages/components/src/textarea-control/style.module.scss
var textarea, style_module_default;
function init_style_module() {
	return (init_style_module = __esmMin((() => {
		textarea = "_textarea_18v6o_96";
		style_module_default = { textarea };
	})))();
}
//#endregion
//#region ../packages/components/src/textarea-control/index.tsx
function UnforwardedTextareaControl(props, ref) {
	const { __nextHasNoMarginBottom: _, label, hideLabelFromVision, value, help, onChange, rows = 4, className, ...additionalProps } = props;
	const id = `inspector-textarea-control-${use_instance_id_default(TextareaControl)}`;
	const onChangeValue = (event) => onChange(event.target.value);
	const classes = clsx("components-textarea-control", className);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BaseControl, {
		label,
		hideLabelFromVision,
		id,
		help,
		className: classes,
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("textarea", {
			className: clsx("components-textarea-control__input", style_module_default.textarea),
			id,
			rows,
			onChange: onChangeValue,
			"aria-describedby": !!help ? id + "__help" : void 0,
			value,
			ref,
			...additionalProps
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 40,
			columnNumber: 4
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 33,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime, _jsxFileName, TextareaControl;
function init_textarea_control() {
	return (init_textarea_control = __esmMin((() => {
		init_clsx();
		init_use_instance_id();
		init_react();
		init_base_control();
		init_style_module();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/textarea-control/index.tsx";
		TextareaControl = (0, import_react.forwardRef)(UnforwardedTextareaControl);
		TextareaControl.displayName = "TextareaControl";
		try {
			TextareaControl.__docgenInfo = {
				"description": "TextareaControls are TextControls that allow for multiple lines of text, and\nwrap overflow text onto a new line. They are a fixed height and scroll\nvertically when the cursor reaches the bottom of the field.\n\n```jsx\nimport { TextareaControl } from '@wordpress/components';\nimport { useState } from '@wordpress/element';\n\nconst MyTextareaControl = () => {\n  const [ text, setText ] = useState( '' );\n\n  return (\n    <TextareaControl\n      label=\"Text\"\n      help=\"Enter some text\"\n      value={ text }\n      onChange={ ( value ) => setText( value ) }\n    />\n  );\n};\n```",
				"displayName": "TextareaControl",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/textarea-control/index.tsx",
				"methods": [],
				"props": {
					"label": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/base-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "If this property is added, a label will be generated using label property as the content.",
						"name": "label",
						"required": false,
						"tags": {},
						"type": { "name": "ReactNode" }
					},
					"hideLabelFromVision": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/base-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "If true, the label will only be visible to screen readers.",
						"name": "hideLabelFromVision",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"__nextHasNoMarginBottom": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/base-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Start opting into the new margin-free styles that will become the default in a future version.\n@deprecated Default behavior since WordPress 7.0. Prop can be safely removed.\n@ignore",
						"name": "__nextHasNoMarginBottom",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"help": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/base-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Additional description for the control.\n\nOnly use for meaningful description or instructions for the control. An element containing the description will be programmatically associated to the BaseControl by the means of an `aria-describedby` attribute.",
						"name": "help",
						"required": false,
						"tags": {},
						"type": { "name": "ReactNode" }
					},
					"onChange": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/textarea-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "A function that receives the new value of the textarea each time it\nchanges.",
						"name": "onChange",
						"required": true,
						"tags": {},
						"type": { "name": "(value: string) => void" }
					},
					"value": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/textarea-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The current value of the textarea.",
						"name": "value",
						"required": true,
						"tags": {},
						"type": { "name": "string" }
					},
					"rows": {
						"defaultValue": { "value": "4" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/textarea-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The number of rows the textarea should contain.",
						"name": "rows",
						"required": false,
						"tags": {},
						"type": { "name": "number" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
export { init_textarea_control as n, TextareaControl as t };
