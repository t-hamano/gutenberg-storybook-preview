import { n as __esmMin, r as __exportAll } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as use_instance_id_default, t as init_use_instance_id } from "./use-instance-id-BznKyZc1.js";
import { a as init_clsx, i as clsx } from "./iframe-Dbjzp1_m.js";
import { n as init_component, t as VisuallyHidden } from "./component-DtWxfX7z.js";
import { n as StyledHelp, o as init_base_control_styles } from "./base-control-styles-BpBSJQcA.js";
import { n as init_base_control, t as BaseControl } from "./base-control-CSASrsP8.js";
import { n as init_component$1, t as VStack } from "./component-C9_4TU-Q.js";
//#region ../packages/components/src/radio-control/index.tsx
function generateOptionDescriptionId(radioGroupId, index) {
	return `${radioGroupId}-${index}-option-description`;
}
function generateOptionId(radioGroupId, index) {
	return `${radioGroupId}-${index}`;
}
function generateHelpId(radioGroupId) {
	return `${radioGroupId}__help`;
}
/**
* Render a user interface to select the user type using radio inputs.
*
* ```jsx
* import { RadioControl } from '@wordpress/components';
* import { useState } from '@wordpress/element';
*
* const MyRadioControl = () => {
*   const [ option, setOption ] = useState( 'a' );
*
*   return (
*     <RadioControl
*       label="User type"
*       help="The type of the current user"
*       selected={ option }
*       options={ [
*         { label: 'Author', value: 'a' },
*         { label: 'Editor', value: 'e' },
*       ] }
*       onChange={ ( value ) => setOption( value ) }
*     />
*   );
* };
* ```
*/
function RadioControl(props) {
	const { label, className, selected, help, onChange, onClick, hideLabelFromVision, disabled, options = [], id: preferredId, ...additionalProps } = props;
	const id = use_instance_id_default(RadioControl, "inspector-radio-control", preferredId);
	const onChangeValue = (event) => onChange(event.target.value);
	if (!options?.length) return null;
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)("fieldset", {
		id,
		role: "radiogroup",
		className: clsx(className, "components-radio-control"),
		disabled,
		"aria-describedby": !!help ? generateHelpId(id) : void 0,
		children: [
			hideLabelFromVision ? /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(VisuallyHidden, {
				as: "legend",
				children: label
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 86,
				columnNumber: 5
			}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(BaseControl.VisualLabel, {
				as: "legend",
				children: label
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 88,
				columnNumber: 5
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(VStack, {
				spacing: 3,
				className: clsx("components-radio-control__group-wrapper", { "has-help": !!help }),
				children: options.map((option, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)("div", {
					className: "components-radio-control__option",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)("input", {
							id: generateOptionId(id, index),
							className: "components-radio-control__input",
							type: "radio",
							name: id,
							value: option.value,
							disabled: option.disabled,
							onChange: onChangeValue,
							checked: option.value === selected,
							"aria-describedby": !!option.description ? generateOptionDescriptionId(id, index) : void 0,
							onClick: (event) => {
								event.currentTarget.focus();
								onClick?.(event);
							},
							...additionalProps
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 104,
							columnNumber: 7
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)("label", {
							className: "components-radio-control__label",
							htmlFor: generateOptionId(id, index),
							children: option.label
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 126,
							columnNumber: 7
						}, this),
						!!option.description ? /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(StyledHelp, {
							id: generateOptionDescriptionId(id, index),
							className: "components-radio-control__option-description",
							children: option.description
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 133,
							columnNumber: 8
						}, this) : null
					]
				}, generateOptionId(id, index), true, {
					fileName: _jsxFileName$1,
					lineNumber: 100,
					columnNumber: 6
				}, this))
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 93,
				columnNumber: 4
			}, this),
			!!help && /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(StyledHelp, {
				id: generateHelpId(id),
				className: "components-base-control__help",
				children: help
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 144,
				columnNumber: 5
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName$1,
		lineNumber: 78,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime$1, _jsxFileName$1;
function init_radio_control() {
	return (init_radio_control = __esmMin((() => {
		init_clsx();
		init_use_instance_id();
		init_base_control();
		init_component$1();
		init_base_control_styles();
		init_component();
		import_jsx_dev_runtime$1 = require_jsx_dev_runtime();
		_jsxFileName$1 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/radio-control/index.tsx";
		try {
			RadioControl.__docgenInfo = {
				"description": "Render a user interface to select the user type using radio inputs.\n\n```jsx\nimport { RadioControl } from '@wordpress/components';\nimport { useState } from '@wordpress/element';\n\nconst MyRadioControl = () => {\n  const [ option, setOption ] = useState( 'a' );\n\n  return (\n    <RadioControl\n      label=\"User type\"\n      help=\"The type of the current user\"\n      selected={ option }\n      options={ [\n        { label: 'Author', value: 'a' },\n        { label: 'Editor', value: 'e' },\n      ] }\n      onChange={ ( value ) => setOption( value ) }\n    />\n  );\n};\n```",
				"displayName": "RadioControl",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/radio-control/index.tsx",
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
					"disabled": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/radio-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Whether the radio group should be disabled.",
						"name": "disabled",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"onChange": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/radio-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "A function that receives the value of the new option that is being\nselected as input.",
						"name": "onChange",
						"required": true,
						"tags": {},
						"type": { "name": "(value: string) => void" }
					},
					"options": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/radio-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "An array of objects containing the value and label of the options.",
						"name": "options",
						"required": false,
						"tags": {},
						"type": { "name": "{ label: string; value: string; description?: string; disabled?: boolean; }[] | undefined" }
					},
					"selected": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/radio-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The value property of the currently selected option.",
						"name": "selected",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/components/src/radio-control/stories/index.story.tsx
var index_story_exports = /* @__PURE__ */ __exportAll({
	Default: () => Default,
	WithDisabledOption: () => WithDisabledOption,
	WithOptionDescriptions: () => WithOptionDescriptions,
	default: () => meta
});
var import_jsx_dev_runtime, _jsxFileName, meta, Template, Default, WithOptionDescriptions, WithDisabledOption;
function init_index_story() {
	return (init_index_story = __esmMin((() => {
		init_react();
		init_radio_control();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/radio-control/stories/index.story.tsx";
		meta = {
			component: RadioControl,
			title: "Components/@wordpress-components/Selection & Input/Common/RadioControl",
			id: "components-radiocontrol",
			argTypes: {
				onChange: { action: "onChange" },
				selected: { control: false },
				label: { control: { type: "text" } },
				help: { control: { type: "text" } }
			},
			parameters: {
				controls: { expanded: true },
				docs: { canvas: { sourceState: "shown" } },
				componentStatus: {
					status: "not-recommended",
					whereUsed: "global",
					notes: "Use [`RadioGroupControl`](?path=/docs/design-system-components-form-radiogroupcontrol--docs) from `@wordpress/ui` instead. See the [migration guide](?path=/docs/components-radiocontrol--migration-guide)."
				}
			}
		};
		Template = ({ onChange, options, ...args }) => {
			const [value, setValue] = (0, import_react.useState)(options?.[0]?.value);
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RadioControl, {
				...args,
				selected: value,
				options,
				onChange: (v) => {
					setValue(v);
					onChange(v);
				}
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 45,
				columnNumber: 3
			}, void 0);
		};
		Default = Template.bind({});
		Default.args = {
			label: "Post visibility",
			options: [
				{
					label: "Public",
					value: "public"
				},
				{
					label: "Private",
					value: "private"
				},
				{
					label: "Password Protected",
					value: "password"
				}
			]
		};
		WithOptionDescriptions = Template.bind({});
		WithOptionDescriptions.args = {
			...Default.args,
			options: [
				{
					label: "Public",
					value: "public",
					description: "Visible to everyone"
				},
				{
					label: "Private",
					value: "private",
					description: "Only visible to you"
				},
				{
					label: "Password Protected",
					value: "password",
					description: "Protected by a password"
				}
			]
		};
		WithDisabledOption = Template.bind({});
		WithDisabledOption.args = {
			...Default.args,
			options: [
				{
					label: "Public",
					value: "public"
				},
				{
					label: "Private",
					value: "private",
					disabled: true
				},
				{
					label: "Password Protected",
					value: "password"
				}
			]
		};
		Default.parameters = {
			...Default.parameters,
			docs: {
				...Default.parameters?.docs,
				source: {
					originalSource: "({\n  onChange,\n  options,\n  ...args\n}) => {\n  const [value, setValue] = useState(options?.[0]?.value);\n  return <RadioControl {...args} selected={value} options={options} onChange={v => {\n    setValue(v);\n    onChange(v);\n  }} />;\n}",
					...Default.parameters?.docs?.source
				}
			}
		};
		WithOptionDescriptions.parameters = {
			...WithOptionDescriptions.parameters,
			docs: {
				...WithOptionDescriptions.parameters?.docs,
				source: {
					originalSource: "({\n  onChange,\n  options,\n  ...args\n}) => {\n  const [value, setValue] = useState(options?.[0]?.value);\n  return <RadioControl {...args} selected={value} options={options} onChange={v => {\n    setValue(v);\n    onChange(v);\n  }} />;\n}",
					...WithOptionDescriptions.parameters?.docs?.source
				}
			}
		};
		WithDisabledOption.parameters = {
			...WithDisabledOption.parameters,
			docs: {
				...WithDisabledOption.parameters?.docs,
				source: {
					originalSource: "({\n  onChange,\n  options,\n  ...args\n}) => {\n  const [value, setValue] = useState(options?.[0]?.value);\n  return <RadioControl {...args} selected={value} options={options} onChange={v => {\n    setValue(v);\n    onChange(v);\n  }} />;\n}",
					...WithDisabledOption.parameters?.docs?.source
				}
			}
		};
	})))();
}
//#endregion
export { init_index_story as n, index_story_exports as t };
