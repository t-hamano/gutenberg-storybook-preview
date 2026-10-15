import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as init_build_module, t as deprecated } from "./build-module-BWCORUbm.js";
import { o as isRTL, t as init_build_module$1 } from "./build-module-v04us4E2.js";
import { i as init_dist, s as useStoreState } from "./CDh2UhnG-rjC-Q4Bk.js";
import { n as init_radio$1, t as Radio$1 } from "./radio-yKmowuxf.js";
import { i as init_radio_group$1, n as useRadioStore, r as RadioGroup$1, t as init_radio_store } from "./radio-store-SnY54u1U.js";
import { n as init_button, t as Button } from "./button-wsTfHPkm.js";
import { n as init_button_group, t as ButtonGroup } from "./button-group-avZ7-Haz.js";
//#region ../packages/components/src/radio-group/context.tsx
var RadioGroupContext;
function init_context() {
	return (init_context = __esmMin((() => {
		init_react();
		RadioGroupContext = (0, import_react.createContext)({
			store: void 0,
			disabled: void 0
		});
		RadioGroupContext.displayName = "RadioGroupContext";
		try {
			RadioGroupContext.__docgenInfo = {
				"description": "",
				"displayName": "RadioGroupContext",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/radio-group/context.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/components/src/radio-group/index.tsx
function UnforwardedRadioGroup({ label, checked, defaultChecked, disabled, onChange, children, ...props }, ref) {
	const radioStore = useRadioStore({
		value: checked,
		defaultValue: defaultChecked,
		setValue: (newValue) => {
			onChange?.(newValue ?? void 0);
		},
		rtl: isRTL()
	});
	const contextValue = (0, import_react.useMemo)(() => ({
		store: radioStore,
		disabled
	}), [radioStore, disabled]);
	deprecated("wp.components.__experimentalRadioGroup", {
		alternative: "wp.components.RadioControl or wp.components.__experimentalToggleGroupControl",
		since: "6.8"
	});
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)(RadioGroupContext.Provider, {
		value: contextValue,
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)(RadioGroup$1, {
			store: radioStore,
			render: /* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)(ButtonGroup, {
				__shouldNotWarnDeprecated: true,
				children
			}, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 50,
				columnNumber: 6
			}, this),
			"aria-label": label,
			ref,
			...props
		}, void 0, false, {
			fileName: _jsxFileName$2,
			lineNumber: 47,
			columnNumber: 4
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$2,
		lineNumber: 46,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime$2, _jsxFileName$2, RadioGroup;
function init_radio_group() {
	return (init_radio_group = __esmMin((() => {
		init_radio_store(), init_radio_group$1();
		init_build_module();
		init_react();
		init_build_module$1();
		init_button_group();
		init_context();
		import_jsx_dev_runtime$2 = require_jsx_dev_runtime();
		_jsxFileName$2 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/radio-group/index.tsx";
		RadioGroup = (0, import_react.forwardRef)(UnforwardedRadioGroup);
		RadioGroup.displayName = "RadioGroup";
		try {
			RadioGroup.__docgenInfo = {
				"description": "",
				"displayName": "RadioGroup",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/radio-group/index.tsx",
				"methods": [],
				"props": {
					"label": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/radio-group/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Accessible label for the radio group",
						"name": "label",
						"required": true,
						"tags": {},
						"type": { "name": "string" }
					},
					"checked": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/radio-group/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The `value` of the `Radio` element which should be selected.\nIndicates controlled usage of the component.",
						"name": "checked",
						"required": false,
						"tags": {},
						"type": { "name": "string | number" }
					},
					"defaultChecked": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/radio-group/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The value of the radio element which is initially selected.",
						"name": "defaultChecked",
						"required": false,
						"tags": {},
						"type": { "name": "string | number" }
					},
					"disabled": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/radio-group/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Whether the `RadioGroup` should be disabled.",
						"name": "disabled",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"onChange": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/radio-group/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Called when a `Radio` element has been selected.\nReceives the `value` of the selected element as an argument.",
						"name": "onChange",
						"required": false,
						"tags": {},
						"type": { "name": "((value: string | number) => void)" }
					},
					"children": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/radio-group/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The children elements, which should be a series of `Radio` components.",
						"name": "children",
						"required": true,
						"tags": {},
						"type": { "name": "ReactNode" }
					}
				},
				"tags": { "deprecated": "Use `RadioControl` or `ToggleGroupControl` instead." }
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/components/src/radio-group/radio.tsx
function UnforwardedRadio({ value, children, __next40pxDefaultSize: _next40pxDefaultSize, ...props }, ref) {
	const { store, disabled } = (0, import_react.useContext)(RadioGroupContext);
	const selectedValue = useStoreState(store, "value");
	const isChecked = selectedValue !== void 0 && selectedValue === value;
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(Radio$1, {
		disabled,
		store,
		ref,
		value,
		render: /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(Button, {
			variant: isChecked ? "primary" : "secondary",
			__next40pxDefaultSize: true,
			...props
		}, void 0, false, {
			fileName: _jsxFileName$1,
			lineNumber: 29,
			columnNumber: 5
		}, this),
		children: children || value
	}, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 23,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime$1, _jsxFileName$1, Radio;
function init_radio() {
	return (init_radio = __esmMin((() => {
		init_react();
		init_dist(), init_radio$1();
		init_button();
		init_context();
		import_jsx_dev_runtime$1 = require_jsx_dev_runtime();
		_jsxFileName$1 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/radio-group/radio.tsx";
		Radio = (0, import_react.forwardRef)(UnforwardedRadio);
		Radio.displayName = "Radio";
		try {
			Radio.__docgenInfo = {
				"description": "",
				"displayName": "Radio",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/radio-group/radio.tsx",
				"methods": [],
				"props": {
					"__next40pxDefaultSize": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/radio-group/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Start opting into the larger default height that will become the default size in a future version.\n@deprecated Default behavior since WordPress 7.1. Prop can be safely removed.\n@ignore",
						"name": "__next40pxDefaultSize",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"value": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/radio-group/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The actual value of the radio element.",
						"name": "value",
						"required": true,
						"tags": {},
						"type": { "name": "string | number" }
					},
					"children": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/radio-group/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Content displayed on the Radio element. If there aren't any children, `value` is displayed.",
						"name": "children",
						"required": false,
						"tags": {},
						"type": { "name": "ReactNode" }
					}
				},
				"tags": { "deprecated": "Use `RadioControl` or `ToggleGroupControl` instead." }
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/components/src/radio-group/stories/index.story.tsx
var import_jsx_dev_runtime, fn, _jsxFileName, meta, Template, Default, Disabled, ControlledTemplate, Controlled;
function init_index_story() {
	return (init_index_story = __esmMin((() => {
		init_react();
		init_radio_group();
		init_radio();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		({fn} = __STORYBOOK_MODULE_TEST__);
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/radio-group/stories/index.story.tsx";
		meta = {
			title: "Components/@wordpress-components/Deprecated/RadioGroup",
			id: "components-radiogroup",
			component: RadioGroup,
			subcomponents: { Radio },
			argTypes: {
				onChange: { control: false },
				children: { control: false },
				checked: { control: { type: "text" } }
			},
			args: { onChange: fn() },
			parameters: {
				controls: { expanded: true },
				docs: {
					canvas: { sourceState: "shown" },
					description: { component: "This component is deprecated. Use `RadioControl` or `ToggleGroupControl` instead." }
				}
			}
		};
		Template = (props) => {
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RadioGroup, { ...props }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 34,
				columnNumber: 9
			}, void 0);
		};
		Default = Template.bind({});
		Default.args = {
			id: "default-radiogroup",
			label: "options",
			defaultChecked: "option2",
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Radio, {
					value: "option1",
					children: "Option 1"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 44,
					columnNumber: 4
				}, void 0),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Radio, {
					value: "option2",
					children: "Option 2"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 45,
					columnNumber: 4
				}, void 0),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Radio, {
					value: "option3",
					children: "Option 3"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 46,
					columnNumber: 4
				}, void 0)
			] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 43,
				columnNumber: 3
			}, void 0)
		};
		Disabled = Template.bind({});
		Disabled.args = {
			...Default.args,
			id: "disabled-radiogroup",
			disabled: true
		};
		ControlledTemplate = ({ checked: checkedProp, onChange: onChangeProp, ...props }) => {
			const [checked, setChecked] = (0, import_react.useState)(checkedProp);
			const onChange = (value) => {
				setChecked(value);
				onChangeProp?.(value);
			};
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RadioGroup, {
				...props,
				onChange,
				checked
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 74,
				columnNumber: 3
			}, void 0);
		};
		Controlled = ControlledTemplate.bind({});
		Controlled.args = {
			...Default.args,
			checked: "option2",
			id: "controlled-radiogroup"
		};
		Controlled.argTypes = { checked: { control: false } };
		Default.parameters = {
			...Default.parameters,
			docs: {
				...Default.parameters?.docs,
				source: {
					originalSource: "props => {\n  return <RadioGroup {...props} />;\n}",
					...Default.parameters?.docs?.source
				}
			}
		};
		Disabled.parameters = {
			...Disabled.parameters,
			docs: {
				...Disabled.parameters?.docs,
				source: {
					originalSource: "props => {\n  return <RadioGroup {...props} />;\n}",
					...Disabled.parameters?.docs?.source
				}
			}
		};
		Controlled.parameters = {
			...Controlled.parameters,
			docs: {
				...Controlled.parameters?.docs,
				source: {
					originalSource: "({\n  checked: checkedProp,\n  onChange: onChangeProp,\n  ...props\n}) => {\n  const [checked, setChecked] = useState<React.ComponentProps<typeof RadioGroup>['checked']>(checkedProp);\n  const onChange: typeof onChangeProp = value => {\n    setChecked(value);\n    onChangeProp?.(value);\n  };\n  return <RadioGroup {...props} onChange={onChange} checked={checked} />;\n}",
					...Controlled.parameters?.docs?.source
				}
			}
		};
	})))();
}
//#endregion
init_index_story();
export { Controlled, Default, Disabled, meta as default };
