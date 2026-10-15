import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as init_input_prefix_wrapper, t as InputControlPrefixWrapper } from "./input-prefix-wrapper-5HZCj3Pf.js";
import { n as init_select_control, t as SelectControl } from "./select-control-CRXHwQpH.js";
//#region ../packages/components/src/select-control/stories/index.story.tsx
var import_jsx_dev_runtime, fn, _jsxFileName, meta, SelectControlWithState, Default, WithLabelAndHelpText, WithCustomChildren, WithPrefix, Minimal;
function init_index_story() {
	return (init_index_story = __esmMin((() => {
		init_react();
		init_select_control();
		init_input_prefix_wrapper();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		({fn} = __STORYBOOK_MODULE_TEST__);
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/select-control/stories/index.story.tsx";
		meta = {
			title: "Components/@wordpress-components/Selection & Input/Common/SelectControl",
			id: "components-selectcontrol",
			component: SelectControl,
			argTypes: {
				help: { control: { type: "text" } },
				label: { control: { type: "text" } },
				prefix: { control: { type: "text" } },
				suffix: { control: { type: "text" } },
				value: { control: false }
			},
			args: { onChange: fn() },
			parameters: {
				controls: { expanded: true },
				docs: { canvas: { sourceState: "shown" } },
				componentStatus: {
					status: "not-recommended",
					whereUsed: "global",
					notes: "Use [`SelectControl`](?path=/docs/design-system-components-form-selectcontrol--docs) from `@wordpress/ui` instead. For the `minimal` variant, use the [`Select`](?path=/docs/design-system-components-form-primitives-select--docs) primitive rather than `SelectControl`."
				}
			}
		};
		SelectControlWithState = (props) => {
			const [selection, setSelection] = (0, import_react.useState)();
			if (props.multiple) return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectControl, {
				...props,
				multiple: true,
				value: selection,
				onChange: (value) => {
					setSelection(value);
					props.onChange?.(value);
				}
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 38,
				columnNumber: 4
			}, void 0);
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectControl, {
				...props,
				multiple: false,
				value: selection?.[0],
				onChange: (value) => {
					setSelection([value]);
					props.onChange?.(value);
				}
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 51,
				columnNumber: 3
			}, void 0);
		};
		Default = SelectControlWithState.bind({});
		Default.args = {
			label: "Label",
			options: [
				{
					value: "",
					label: "Select an Option",
					disabled: true
				},
				{
					value: "a",
					label: "Option A"
				},
				{
					value: "b",
					label: "Option B"
				},
				{
					value: "c",
					label: "Option C"
				}
			]
		};
		WithLabelAndHelpText = SelectControlWithState.bind({});
		WithLabelAndHelpText.args = {
			...Default.args,
			help: "Help text to explain the select control."
		};
		WithCustomChildren = SelectControlWithState.bind({});
		WithCustomChildren.args = {
			label: "Label",
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", {
					value: "option-1",
					children: "Option 1"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 89,
					columnNumber: 4
				}, void 0),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", {
					value: "option-2",
					disabled: true,
					children: "Option 2 - Disabled"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 90,
					columnNumber: 4
				}, void 0),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("optgroup", {
					label: "Option Group 1",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", {
						value: "option-group-1-option-1",
						children: "Option Group 1 - Option 1"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 94,
						columnNumber: 5
					}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", {
						value: "option-group-1-option-2",
						disabled: true,
						children: "Option Group 1 - Option 2 - Disabled"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 97,
						columnNumber: 5
					}, void 0)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 93,
					columnNumber: 4
				}, void 0)
			] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 88,
				columnNumber: 3
			}, void 0)
		};
		WithPrefix = SelectControlWithState.bind({});
		WithPrefix.args = {
			...Default.args,
			prefix: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InputControlPrefixWrapper, { children: "Prefix:" }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 112,
				columnNumber: 10
			}, void 0)
		};
		Minimal = SelectControlWithState.bind({});
		Minimal.args = {
			...Default.args,
			variant: "minimal",
			hideLabelFromVision: true
		};
		try {
			WithCustomChildren.__docgenInfo = {
				"description": "As an alternative to the `options` prop, `optgroup`s and `options` can be\npassed in as `children` for more customizeability.",
				"displayName": "WithCustomChildren",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/select-control/stories/index.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			WithPrefix.__docgenInfo = {
				"description": "By default, the prefix is aligned with the edge of the input border, with no padding.\nIf you want to apply standard padding in accordance with the size variant, wrap the element in the `<InputControlPrefixWrapper>` component.",
				"displayName": "WithPrefix",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/select-control/stories/index.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		Default.parameters = {
			...Default.parameters,
			docs: {
				...Default.parameters?.docs,
				source: {
					originalSource: "props => {\n  const [selection, setSelection] = useState<string[]>();\n  if (props.multiple) {\n    return <SelectControl {...props} multiple value={selection} onChange={value => {\n      setSelection(value);\n      props.onChange?.(value);\n    }} />;\n  }\n  return <SelectControl {...props} multiple={false} value={selection?.[0]} onChange={value => {\n    setSelection([value]);\n    props.onChange?.(value);\n  }} />;\n}",
					...Default.parameters?.docs?.source
				}
			}
		};
		WithLabelAndHelpText.parameters = {
			...WithLabelAndHelpText.parameters,
			docs: {
				...WithLabelAndHelpText.parameters?.docs,
				source: {
					originalSource: "props => {\n  const [selection, setSelection] = useState<string[]>();\n  if (props.multiple) {\n    return <SelectControl {...props} multiple value={selection} onChange={value => {\n      setSelection(value);\n      props.onChange?.(value);\n    }} />;\n  }\n  return <SelectControl {...props} multiple={false} value={selection?.[0]} onChange={value => {\n    setSelection([value]);\n    props.onChange?.(value);\n  }} />;\n}",
					...WithLabelAndHelpText.parameters?.docs?.source
				}
			}
		};
		WithCustomChildren.parameters = {
			...WithCustomChildren.parameters,
			docs: {
				...WithCustomChildren.parameters?.docs,
				source: {
					originalSource: "props => {\n  const [selection, setSelection] = useState<string[]>();\n  if (props.multiple) {\n    return <SelectControl {...props} multiple value={selection} onChange={value => {\n      setSelection(value);\n      props.onChange?.(value);\n    }} />;\n  }\n  return <SelectControl {...props} multiple={false} value={selection?.[0]} onChange={value => {\n    setSelection([value]);\n    props.onChange?.(value);\n  }} />;\n}",
					...WithCustomChildren.parameters?.docs?.source
				},
				description: {
					story: "As an alternative to the `options` prop, `optgroup`s and `options` can be\npassed in as `children` for more customizeability.",
					...WithCustomChildren.parameters?.docs?.description
				}
			}
		};
		WithPrefix.parameters = {
			...WithPrefix.parameters,
			docs: {
				...WithPrefix.parameters?.docs,
				source: {
					originalSource: "props => {\n  const [selection, setSelection] = useState<string[]>();\n  if (props.multiple) {\n    return <SelectControl {...props} multiple value={selection} onChange={value => {\n      setSelection(value);\n      props.onChange?.(value);\n    }} />;\n  }\n  return <SelectControl {...props} multiple={false} value={selection?.[0]} onChange={value => {\n    setSelection([value]);\n    props.onChange?.(value);\n  }} />;\n}",
					...WithPrefix.parameters?.docs?.source
				},
				description: {
					story: "By default, the prefix is aligned with the edge of the input border, with no padding.\nIf you want to apply standard padding in accordance with the size variant, wrap the element in the `<InputControlPrefixWrapper>` component.",
					...WithPrefix.parameters?.docs?.description
				}
			}
		};
		Minimal.parameters = {
			...Minimal.parameters,
			docs: {
				...Minimal.parameters?.docs,
				source: {
					originalSource: "props => {\n  const [selection, setSelection] = useState<string[]>();\n  if (props.multiple) {\n    return <SelectControl {...props} multiple value={selection} onChange={value => {\n      setSelection(value);\n      props.onChange?.(value);\n    }} />;\n  }\n  return <SelectControl {...props} multiple={false} value={selection?.[0]} onChange={value => {\n    setSelection([value]);\n    props.onChange?.(value);\n  }} />;\n}",
					...Minimal.parameters?.docs?.source
				}
			}
		};
	})))();
}
//#endregion
init_index_story();
export { Default, Minimal, WithCustomChildren, WithLabelAndHelpText, WithPrefix, meta as default };
