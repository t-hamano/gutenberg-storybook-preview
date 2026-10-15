import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as use_instance_id_default, t as init_use_instance_id } from "./use-instance-id-BznKyZc1.js";
import { o as clsx, s as init_clsx } from "./iframe-D4D-SsYo.js";
import { n as init_base_control, t as BaseControl } from "./base-control-DsOU5iCO.js";
import { a as init_select_control_styles, i as StyledInputBase, n as init_chevron_down, r as Select, t as SelectControlChevronDown } from "./chevron-down-BeDzOQYv.js";
//#region ../packages/components/src/select-control/index.tsx
function useUniqueId(idProp) {
	const id = `inspector-select-control-${use_instance_id_default(SelectControl)}`;
	return idProp || id;
}
function SelectOptions({ options }) {
	return options.map(({ id, label, value, ...optionProps }, index) => {
		const key = id || `${label}-${value}-${index}`;
		return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", {
			value,
			...optionProps,
			children: label
		}, key, false, {
			fileName: _jsxFileName,
			lineNumber: 26,
			columnNumber: 4
		}, this);
	});
}
function UnforwardedSelectControl(props, ref) {
	const { __nextHasNoMarginBottom: _, __next40pxDefaultSize: _next40pxDefaultSize, __next36pxDefaultSize: _next36pxDefaultSize, className, disabled = false, help, hideLabelFromVision, id: idProp, label, multiple = false, onChange, options = [], size = "default", value: valueProp, labelPosition = "top", children, prefix, suffix, variant = "default", ...restProps } = props;
	const id = useUniqueId(idProp);
	const helpId = help ? `${id}__help` : void 0;
	if (!options?.length && !children) return null;
	const handleOnChange = (event) => {
		if (props.multiple) {
			const newValues = Array.from(event.target.options).filter(({ selected }) => selected).map(({ value }) => value);
			props.onChange?.(newValues, { event });
			return;
		}
		props.onChange?.(event.target.value, { event });
	};
	const classes = clsx("components-select-control", className);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BaseControl, {
		help,
		id,
		className: classes,
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StyledInputBase, {
			disabled,
			hideLabelFromVision,
			id,
			isBorderless: variant === "minimal",
			label,
			size,
			suffix: suffix || !multiple && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectControlChevronDown, {}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 96,
				columnNumber: 32
			}, this),
			prefix,
			labelPosition,
			__unstableInputWidth: variant === "minimal" ? "auto" : void 0,
			variant,
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Select, {
				...restProps,
				"aria-describedby": helpId,
				className: "components-select-control__input",
				disabled,
				id,
				multiple,
				onChange: handleOnChange,
				ref,
				selectSize: size,
				value: valueProp,
				variant,
				children: children || /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectOptions, { options }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 118,
					columnNumber: 20
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 105,
				columnNumber: 5
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 88,
			columnNumber: 4
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 87,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime, _jsxFileName, SelectControl;
function init_select_control() {
	return (init_select_control = __esmMin((() => {
		init_clsx();
		init_use_instance_id();
		init_react();
		init_base_control();
		init_select_control_styles();
		init_chevron_down();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/select-control/index.tsx";
		SelectControl = (0, import_react.forwardRef)(UnforwardedSelectControl);
		SelectControl.displayName = "SelectControl";
		try {
			SelectControl.__docgenInfo = {
				"description": "`SelectControl` allows users to select from a single or multiple option menu.\nIt functions as a wrapper around the browser's native `<select>` element.\n\n```jsx\nimport { SelectControl } from '@wordpress/components';\nimport { useState } from '@wordpress/element';\n\nconst MySelectControl = () => {\n  const [ size, setSize ] = useState( '50%' );\n\n  return (\n    <SelectControl\n      label=\"Size\"\n      value={ size }\n      options={ [\n        { label: 'Big', value: '100%' },\n        { label: 'Medium', value: '50%' },\n        { label: 'Small', value: '25%' },\n      ] }\n      onChange={ setSize }\n    />\n  );\n};\n```",
				"displayName": "SelectControl",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/select-control/index.tsx",
				"methods": [],
				"props": {
					"label": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "InputBaseProps"
						}],
						"description": "If this property is added, a label will be generated using label property as the content.",
						"name": "label",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "InputBaseProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "ReactNode" }
					},
					"prefix": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "InputBaseProps"
						}],
						"description": "Renders an element on the left side of the input.\n\nBy default, the prefix is aligned with the edge of the input border, with no padding.\nIf you want to apply standard padding in accordance with the size variant, wrap the element in\nthe provided `<InputControlPrefixWrapper>` component.\n\n```jsx\nimport {\n  __experimentalInputControl as InputControl,\n  __experimentalInputControlPrefixWrapper as InputControlPrefixWrapper,\n} from '@wordpress/components';\n\n<InputControl\n  prefix={<InputControlPrefixWrapper>@</InputControlPrefixWrapper>}\n/>\n```",
						"name": "prefix",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "InputBaseProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "ReactNode" }
					},
					"disabled": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "InputBaseProps"
						}],
						"description": "If true, the `input` will be disabled.",
						"name": "disabled",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "InputBaseProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"size": {
						"defaultValue": { "value": "'default'" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "BaseProps"
						}],
						"description": "Adjusts the size of the input.",
						"name": "size",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "BaseProps"
						},
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "Size",
							"value": [
								{ "value": "\"small\"" },
								{ "value": "\"default\"" },
								{ "value": "\"compact\"" }
							]
						}
					},
					"suffix": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "InputBaseProps"
						}],
						"description": "Renders an element on the right side of the input.\n\nBy default, the suffix is aligned with the edge of the input border, with no padding.\nIf you want to apply standard padding in accordance with the size variant, wrap the element in\nthe provided `<InputControlSuffixWrapper>` component.\n\n```jsx\nimport {\n  __experimentalInputControl as InputControl,\n  __experimentalInputControlSuffixWrapper as InputControlSuffixWrapper,\n} from '@wordpress/components';\n\n<InputControl\n  suffix={<InputControlSuffixWrapper>%</InputControlSuffixWrapper>}\n/>\n```",
						"name": "suffix",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "InputBaseProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "ReactNode" }
					},
					"hideLabelFromVision": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "BaseProps"
						}],
						"description": "If true, the label will only be visible to screen readers.",
						"name": "hideLabelFromVision",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "BaseProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"labelPosition": {
						"defaultValue": { "value": "'top'" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "BaseProps"
						}],
						"description": "The position of the label.",
						"name": "labelPosition",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "BaseProps"
						},
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "LabelPosition",
							"value": [
								{ "value": "\"top\"" },
								{ "value": "\"side\"" },
								{ "value": "\"bottom\"" },
								{ "value": "\"edge\"" }
							]
						}
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
					"__next36pxDefaultSize": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/select-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Deprecated. Use `__next40pxDefaultSize` instead.\n@deprecated\n@ignore",
						"name": "__next36pxDefaultSize",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"__next40pxDefaultSize": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/select-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Start opting into the larger default height that will become the default size in a future version.\n@deprecated Default behavior since WordPress 7.1. Prop can be safely removed.\n@ignore",
						"name": "__next40pxDefaultSize",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"options": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/select-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "An array of option property objects to be rendered,\neach with a `label` and `value` property, as well as any other\n`<option>` attributes.",
						"name": "options",
						"required": false,
						"tags": {},
						"type": { "name": "readonly ({ label: string; value: V; } & Omit<OptionHTMLAttributes<HTMLOptionElement>, \"label\" | \"value\">)[]" }
					},
					"children": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/select-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "As an alternative to the `options` prop, `optgroup`s and `options` can be\npassed in as `children` for more customizability.",
						"name": "children",
						"required": false,
						"tags": {},
						"type": { "name": "ReactNode" }
					},
					"variant": {
						"defaultValue": { "value": "'default'" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/select-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The style variant of the control.",
						"name": "variant",
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "\"default\" | \"minimal\"",
							"value": [{ "value": "\"default\"" }, { "value": "\"minimal\"" }]
						}
					},
					"multiple": {
						"defaultValue": { "value": "false\nfalse" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/select-control/types.ts",
							"name": "TypeLiteral"
						}, {
							"fileName": "gutenberg-storybook-preview/packages/components/src/select-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "If this property is added, multiple values can be selected. The `value` passed should be an array.\n\nIn most cases, it is preferable to use the `FormTokenField` or `CheckboxControl` components instead.",
						"name": "multiple",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"value": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/select-control/types.ts",
							"name": "TypeLiteral"
						}, {
							"fileName": "gutenberg-storybook-preview/packages/components/src/select-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The value of the selected option.\n\nIf `multiple` is true, the `value` should be an array with the values of the selected options.",
						"name": "value",
						"required": false,
						"tags": {},
						"type": { "name": "string | NoInfer<V>[]" }
					},
					"onChange": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/select-control/types.ts",
							"name": "TypeLiteral"
						}, {
							"fileName": "gutenberg-storybook-preview/packages/components/src/select-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "A function that receives the value of the new option that is being selected as input.\n\nIf `multiple` is `true`, the value received is an array of the selected value.\nOtherwise, the value received is a single value with the new selected value.",
						"name": "onChange",
						"required": false,
						"tags": {},
						"type": { "name": "((value: NoInfer<V>, extra?: { event?: ChangeEvent<HTMLSelectElement, Element>; }) => void) | ((value: NoInfer<V>[], extra?: { ...; } | undefined) => void) | undefined" }
					},
					"ref": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/select-control/index.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "ref",
						"required": false,
						"tags": {},
						"type": { "name": "Ref<HTMLSelectElement>" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
export { init_select_control as n, SelectControl as t };
