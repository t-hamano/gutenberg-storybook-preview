import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as use_instance_id_default, t as init_use_instance_id } from "./use-instance-id-BznKyZc1.js";
import { n as init_base_control, t as BaseControl } from "./base-control-pNrjopap.js";
//#region ../packages/components/src/text-control/index.tsx
function UnforwardedTextControl(props, ref) {
	const { __nextHasNoMarginBottom: _, __next40pxDefaultSize: __, label, hideLabelFromVision, value, help, id: idProp, className, onChange, type = "text", ...additionalProps } = props;
	const id = use_instance_id_default(TextControl, "inspector-text-control", idProp);
	const onChangeValue = (event) => onChange(event.target.value);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BaseControl, {
		label,
		hideLabelFromVision,
		id,
		help,
		className,
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
			className: "components-text-control__input",
			type,
			id,
			value,
			onChange: onChangeValue,
			"aria-describedby": !!help ? id + "__help" : void 0,
			ref,
			...additionalProps
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 38,
			columnNumber: 4
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 31,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime, _jsxFileName, TextControl;
function init_text_control() {
	return (init_text_control = __esmMin((() => {
		init_use_instance_id();
		init_react();
		init_base_control();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/text-control/index.tsx";
		TextControl = (0, import_react.forwardRef)(UnforwardedTextControl);
		TextControl.displayName = "TextControl";
		try {
			TextControl.__docgenInfo = {
				"description": "TextControl components let users enter and edit text.\n\n```jsx\nimport { TextControl } from '@wordpress/components';\nimport { useState } from '@wordpress/element';\n\nconst MyTextControl = () => {\n  const [ className, setClassName ] = useState( '' );\n\n  return (\n    <TextControl\n      label=\"Additional CSS Class\"\n      value={ className }\n      onChange={ ( value ) => setClassName( value ) }\n    />\n  );\n};\n```",
				"displayName": "TextControl",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/text-control/index.tsx",
				"methods": [],
				"props": {
					"className": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/base-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "className",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
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
							"fileName": "gutenberg-storybook-preview/packages/components/src/text-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "A function that receives the value of the input.",
						"name": "onChange",
						"required": true,
						"tags": {},
						"type": { "name": "(value: string) => void" }
					},
					"value": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/text-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The current value of the input.",
						"name": "value",
						"required": true,
						"tags": {},
						"type": { "name": "string | number" }
					},
					"type": {
						"defaultValue": { "value": "'text'" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/text-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Type of the input element to render. Defaults to \"text\".",
						"name": "type",
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "\"number\" | \"search\" | \"time\" | \"text\" | \"date\" | \"tel\" | \"url\" | \"email\" | \"password\" | \"datetime-local\"",
							"value": [
								{ "value": "\"number\"" },
								{ "value": "\"search\"" },
								{ "value": "\"time\"" },
								{ "value": "\"text\"" },
								{ "value": "\"date\"" },
								{ "value": "\"tel\"" },
								{ "value": "\"url\"" },
								{ "value": "\"email\"" },
								{ "value": "\"password\"" },
								{ "value": "\"datetime-local\"" }
							]
						}
					},
					"__next40pxDefaultSize": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/text-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Start opting into the larger default height that will become the default size in a future version.\n@deprecated Default behavior since WordPress 7.1. Prop can be safely removed.\n@ignore",
						"name": "__next40pxDefaultSize",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
export { init_text_control as n, TextControl as t };
