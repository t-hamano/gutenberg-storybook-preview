import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { i as init_utils, n as init_unit_control, r as CSS_UNITS, t as UnitControl } from "./unit-control-C3htNBgF.js";
//#region ../packages/components/src/unit-control/stories/index.story.tsx
var import_jsx_dev_runtime, fn, _jsxFileName, meta, DefaultTemplate, Default, PressEnterToChange, TweakingTheNumberInput, WithSingleUnit, WithCustomUnits;
function init_index_story() {
	return (init_index_story = __esmMin((() => {
		init_react();
		init_unit_control();
		init_utils();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		({fn} = __STORYBOOK_MODULE_TEST__);
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/unit-control/stories/index.story.tsx";
		meta = {
			component: UnitControl,
			title: "Components/@wordpress-components/Selection & Input/Common/UnitControl",
			id: "components-unitcontrol",
			argTypes: {
				__unstableInputWidth: { control: { type: "text" } },
				__unstableStateReducer: { control: false },
				onChange: { control: false },
				onUnitChange: { control: false },
				prefix: { control: { type: "text" } },
				value: { control: false }
			},
			tags: ["status-experimental", "manifest"],
			args: {
				onChange: fn(),
				onUnitChange: fn(),
				onFocus: fn(),
				onBlur: fn()
			},
			parameters: {
				controls: { expanded: true },
				docs: { canvas: { sourceState: "shown" } },
				componentStatus: {
					status: "recommended",
					whereUsed: "global"
				}
			}
		};
		DefaultTemplate = ({ onChange, ...args }) => {
			const [value, setValue] = (0, import_react.useState)("10px");
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(UnitControl, {
				...args,
				value,
				onChange: (v, extra) => {
					setValue(v);
					onChange?.(v, extra);
				}
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 46,
				columnNumber: 3
			}, void 0);
		};
		Default = DefaultTemplate.bind({});
		Default.args = { label: "Label" };
		PressEnterToChange = DefaultTemplate.bind({});
		PressEnterToChange.args = {
			...Default.args,
			isPressEnterToChange: true
		};
		TweakingTheNumberInput = DefaultTemplate.bind({});
		TweakingTheNumberInput.args = {
			...Default.args,
			min: 0,
			max: 100,
			step: "any",
			label: "Custom label"
		};
		WithSingleUnit = DefaultTemplate.bind({});
		WithSingleUnit.args = {
			...Default.args,
			units: CSS_UNITS.slice(0, 1)
		};
		WithCustomUnits = ({ onChange, ...args }) => {
			const [value, setValue] = (0, import_react.useState)("80km");
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(UnitControl, {
				...args,
				value,
				onChange: (v, extra) => {
					setValue(v);
					onChange?.(v, extra);
				}
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 112,
				columnNumber: 3
			}, void 0);
		};
		WithCustomUnits.args = {
			...Default.args,
			isResetValueOnUnitChange: true,
			min: 0,
			units: [
				{
					value: "km",
					label: "km",
					default: 1
				},
				{
					value: "mi",
					label: "mi",
					default: 1
				},
				{
					value: "m",
					label: "m",
					default: 1e3
				},
				{
					value: "yd",
					label: "yd",
					default: 1760
				}
			]
		};
		try {
			PressEnterToChange.__docgenInfo = {
				"description": "If the `isPressEnterToChange` prop is set to `true`, the `onChange` callback\nwill not fire while a new value is typed in the input field (you can verify this\nbehavior by inspecting the console's output).",
				"displayName": "PressEnterToChange",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/unit-control/stories/index.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			TweakingTheNumberInput.__docgenInfo = {
				"description": "Most of `NumberControl`'s props can be passed to `UnitControl`, and they will\naffect its numeric input field.",
				"displayName": "TweakingTheNumberInput",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/unit-control/stories/index.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			WithSingleUnit.__docgenInfo = {
				"description": "When only one unit is available, the unit selection dropdown becomes static text.",
				"displayName": "WithSingleUnit",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/unit-control/stories/index.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			WithCustomUnits.__docgenInfo = {
				"description": "It is possible to pass a custom list of units. Every time the unit changes,\nif the `isResetValueOnUnitChange` is set to `true`, the input's quantity is\nreset to the new unit's default value.",
				"displayName": "WithCustomUnits",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/unit-control/stories/index.story.tsx",
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
					originalSource: "({\n  onChange,\n  ...args\n}) => {\n  const [value, setValue] = useState<string | undefined>('10px');\n  return <UnitControl {...args} value={value} onChange={(v, extra) => {\n    setValue(v);\n    onChange?.(v, extra);\n  }} />;\n}",
					...Default.parameters?.docs?.source
				}
			}
		};
		PressEnterToChange.parameters = {
			...PressEnterToChange.parameters,
			docs: {
				...PressEnterToChange.parameters?.docs,
				source: {
					originalSource: "({\n  onChange,\n  ...args\n}) => {\n  const [value, setValue] = useState<string | undefined>('10px');\n  return <UnitControl {...args} value={value} onChange={(v, extra) => {\n    setValue(v);\n    onChange?.(v, extra);\n  }} />;\n}",
					...PressEnterToChange.parameters?.docs?.source
				},
				description: {
					story: "If the `isPressEnterToChange` prop is set to `true`, the `onChange` callback\nwill not fire while a new value is typed in the input field (you can verify this\nbehavior by inspecting the console's output).",
					...PressEnterToChange.parameters?.docs?.description
				}
			}
		};
		TweakingTheNumberInput.parameters = {
			...TweakingTheNumberInput.parameters,
			docs: {
				...TweakingTheNumberInput.parameters?.docs,
				source: {
					originalSource: "({\n  onChange,\n  ...args\n}) => {\n  const [value, setValue] = useState<string | undefined>('10px');\n  return <UnitControl {...args} value={value} onChange={(v, extra) => {\n    setValue(v);\n    onChange?.(v, extra);\n  }} />;\n}",
					...TweakingTheNumberInput.parameters?.docs?.source
				},
				description: {
					story: "Most of `NumberControl`'s props can be passed to `UnitControl`, and they will\naffect its numeric input field.",
					...TweakingTheNumberInput.parameters?.docs?.description
				}
			}
		};
		WithSingleUnit.parameters = {
			...WithSingleUnit.parameters,
			docs: {
				...WithSingleUnit.parameters?.docs,
				source: {
					originalSource: "({\n  onChange,\n  ...args\n}) => {\n  const [value, setValue] = useState<string | undefined>('10px');\n  return <UnitControl {...args} value={value} onChange={(v, extra) => {\n    setValue(v);\n    onChange?.(v, extra);\n  }} />;\n}",
					...WithSingleUnit.parameters?.docs?.source
				},
				description: {
					story: "When only one unit is available, the unit selection dropdown becomes static text.",
					...WithSingleUnit.parameters?.docs?.description
				}
			}
		};
		WithCustomUnits.parameters = {
			...WithCustomUnits.parameters,
			docs: {
				...WithCustomUnits.parameters?.docs,
				source: {
					originalSource: "({\n  onChange,\n  ...args\n}) => {\n  const [value, setValue] = useState<string | undefined>('80km');\n  return <UnitControl {...args} value={value} onChange={(v, extra) => {\n    setValue(v);\n    onChange?.(v, extra);\n  }} />;\n}",
					...WithCustomUnits.parameters?.docs?.source
				},
				description: {
					story: "It is possible to pass a custom list of units. Every time the unit changes,\nif the `isResetValueOnUnitChange` is set to `true`, the input's quantity is\nreset to the new unit's default value.",
					...WithCustomUnits.parameters?.docs?.description
				}
			}
		};
	})))();
}
//#endregion
init_index_story();
export { Default, PressEnterToChange, TweakingTheNumberInput, WithCustomUnits, WithSingleUnit, meta as default };
