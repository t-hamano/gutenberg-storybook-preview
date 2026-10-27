import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as star_empty_default } from "./star-empty-BfPmwZrH.js";
import { n as star_filled_default } from "./star-filled-knC7Rv3K.js";
import { n as styles_default } from "./styles-DntDuvIv.js";
import { n as wordpress_default } from "./wordpress-BwlgBeE7.js";
import { n as init_range_control, t as RangeControl } from "./range-control-6NI6H2R2.js";
import { r as init_build_module } from "./library.story-CbQx3MQ6.js";
//#region ../packages/components/src/range-control/stories/index.story.tsx
var import_jsx_dev_runtime, fn, _jsxFileName, ICONS, meta, Template, Default, WithAnyStep, MarkTemplate, marksBase, marksWithNegatives, WithIntegerStepAndMarks, WithDecimalStepAndMarks, WithNegativeMinimumAndMarks, WithNegativeRangeAndMarks, WithAnyStepAndMarks;
function init_index_story() {
	return (init_index_story = __esmMin((() => {
		init_react();
		init_build_module();
		init_range_control();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		({fn} = __STORYBOOK_MODULE_TEST__);
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/range-control/stories/index.story.tsx";
		ICONS = {
			starEmpty: star_empty_default,
			starFilled: star_filled_default,
			styles: styles_default,
			wordpress: wordpress_default
		};
		meta = {
			tags: ["manifest"],
			component: RangeControl,
			title: "Components/@wordpress-components/Selection & Input/Common/RangeControl",
			id: "components-rangecontrol",
			argTypes: {
				afterIcon: {
					control: { type: "select" },
					options: Object.keys(ICONS),
					mapping: ICONS
				},
				beforeIcon: {
					control: { type: "select" },
					options: Object.keys(ICONS),
					mapping: ICONS
				},
				color: { control: { type: "color" } },
				help: { control: { type: "text" } },
				marks: { control: { type: "object" } },
				onBlur: { control: false },
				onChange: { control: false },
				onFocus: { control: false },
				onMouseLeave: { control: false },
				onMouseMove: { control: false },
				railColor: { control: { type: "color" } },
				step: { control: { type: "number" } },
				trackColor: { control: { type: "color" } },
				type: {
					control: { type: "check" },
					options: ["stepper"]
				},
				value: { control: false }
			},
			args: {
				onBlur: fn(),
				onChange: fn(),
				onFocus: fn(),
				onMouseLeave: fn(),
				onMouseMove: fn()
			},
			parameters: {
				controls: { expanded: true },
				docs: { canvas: { sourceState: "shown" } },
				componentStatus: {
					status: "recommended",
					whereUsed: "global",
					notes: "Will be superseded by `SliderControl` in `@wordpress/ui`, but continue using for now."
				}
			}
		};
		Template = ({ onChange, ...args }) => {
			const [value, setValue] = (0, import_react.useState)();
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RangeControl, {
				...args,
				value,
				onChange: (v) => {
					setValue(v);
					onChange?.(v);
				}
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 62,
				columnNumber: 3
			}, void 0);
		};
		Default = Template.bind({});
		Default.args = {
			help: "Please select how transparent you would like this.",
			initialPosition: 50,
			label: "Opacity",
			max: 100,
			min: 0
		};
		WithAnyStep = ({ onChange, ...args }) => {
			const [value, setValue] = (0, import_react.useState)();
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RangeControl, {
					...args,
					value,
					onChange: (v) => {
						setValue(v);
						onChange?.(v);
					}
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 95,
					columnNumber: 4
				}, void 0),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("hr", { style: { marginTop: "5em" } }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 103,
					columnNumber: 4
				}, void 0),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: ["Current value: ", value] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 104,
					columnNumber: 4
				}, void 0)
			] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 94,
				columnNumber: 3
			}, void 0);
		};
		WithAnyStep.args = {
			label: "Brightness",
			step: "any"
		};
		MarkTemplate = ({ label, onChange, ...args }) => {
			const [automaticValue, setAutomaticValue] = (0, import_react.useState)();
			const [customValue, setCustomValue] = (0, import_react.useState)();
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { children: label }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 123,
					columnNumber: 4
				}, void 0),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RangeControl, {
					...args,
					label: "Automatic marks",
					marks: true,
					onChange: (v) => {
						setAutomaticValue(v);
						onChange?.(v);
					},
					value: automaticValue
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 124,
					columnNumber: 4
				}, void 0),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RangeControl, {
					...args,
					label: "Custom marks",
					onChange: (v) => {
						setCustomValue(v);
						onChange?.(v);
					},
					value: customValue
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 134,
					columnNumber: 4
				}, void 0)
			] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 122,
				columnNumber: 3
			}, void 0);
		};
		marksBase = [
			{
				value: 0,
				label: "0"
			},
			{
				value: 1,
				label: "1"
			},
			{
				value: 2,
				label: "2"
			},
			{
				value: 8,
				label: "8"
			},
			{
				value: 10,
				label: "10"
			}
		];
		marksWithNegatives = [
			...marksBase,
			{
				value: -1,
				label: "-1"
			},
			{
				value: -2,
				label: "-2"
			},
			{
				value: -4,
				label: "-4"
			},
			{
				value: -8,
				label: "-8"
			}
		];
		WithIntegerStepAndMarks = MarkTemplate.bind({});
		WithIntegerStepAndMarks.parameters = { a11y: { test: "todo" } };
		WithIntegerStepAndMarks.args = {
			label: "Integer Step",
			marks: marksBase,
			max: 10,
			min: 0,
			step: 1
		};
		WithDecimalStepAndMarks = MarkTemplate.bind({});
		WithDecimalStepAndMarks.parameters = { a11y: { test: "todo" } };
		WithDecimalStepAndMarks.args = {
			marks: [
				...marksBase,
				{
					value: 3.5,
					label: "3.5"
				},
				{
					value: 5.8,
					label: "5.8"
				}
			],
			max: 10,
			min: 0,
			step: .1
		};
		WithNegativeMinimumAndMarks = MarkTemplate.bind({});
		WithNegativeMinimumAndMarks.parameters = { a11y: { test: "todo" } };
		WithNegativeMinimumAndMarks.args = {
			marks: marksWithNegatives,
			max: 10,
			min: -10,
			step: 1
		};
		WithNegativeRangeAndMarks = MarkTemplate.bind({});
		WithNegativeRangeAndMarks.parameters = { a11y: { test: "todo" } };
		WithNegativeRangeAndMarks.args = {
			marks: marksWithNegatives,
			max: -1,
			min: -10,
			step: 1
		};
		WithAnyStepAndMarks = MarkTemplate.bind({});
		WithAnyStepAndMarks.parameters = { a11y: { test: "todo" } };
		WithAnyStepAndMarks.args = {
			marks: marksBase,
			max: 10,
			min: 0,
			step: "any"
		};
		try {
			WithAnyStep.__docgenInfo = {
				"description": "Setting the `step` prop to `\"any\"` will allow users to select non-integer\nvalues. This also overrides both `withInputField` and `showTooltip` props to\n`false`.",
				"displayName": "WithAnyStep",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/range-control/stories/index.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			WithIntegerStepAndMarks.__docgenInfo = {
				"description": "Use `marks` to render a visual representation of `step` ticks. Marks may be\nautomatically generated or custom mark indicators can be provided by an\n`Array`.",
				"displayName": "WithIntegerStepAndMarks",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/range-control/stories/index.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			WithDecimalStepAndMarks.__docgenInfo = {
				"description": "Decimal values may be used for `marks` rendered as a visual representation of\n`step` ticks. Marks may be automatically generated or custom mark indicators\ncan be provided by an `Array`.",
				"displayName": "WithDecimalStepAndMarks",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/range-control/stories/index.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			WithNegativeMinimumAndMarks.__docgenInfo = {
				"description": "A negative `min` value can be used to constrain `RangeControl` values. Mark\nindicators can represent negative values as well. Marks may be automatically\ngenerated or custom mark indicators can be provided by an `Array`.",
				"displayName": "WithNegativeMinimumAndMarks",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/range-control/stories/index.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			WithNegativeRangeAndMarks.__docgenInfo = {
				"description": "The entire range of valid values for a `RangeControl` may be negative. Mark\nindicators can represent negative values as well. Marks may be automatically\ngenerated or custom mark indicators can be provided by an `Array`.",
				"displayName": "WithNegativeRangeAndMarks",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/range-control/stories/index.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			WithAnyStepAndMarks.__docgenInfo = {
				"description": "When a `RangeControl` has a `step` value of `any` a user may select\nnon-integer values. This may still be used in conjunction with `marks`\nrendering a visual representation of `step` ticks.",
				"displayName": "WithAnyStepAndMarks",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/range-control/stories/index.story.tsx",
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
					originalSource: "({\n  onChange,\n  ...args\n}) => {\n  const [value, setValue] = useState<number>();\n  return <RangeControl {...args} value={value} onChange={v => {\n    setValue(v);\n    onChange?.(v);\n  }} />;\n}",
					...Default.parameters?.docs?.source
				}
			}
		};
		WithAnyStep.parameters = {
			...WithAnyStep.parameters,
			docs: {
				...WithAnyStep.parameters?.docs,
				source: {
					originalSource: "({\n  onChange,\n  ...args\n}) => {\n  const [value, setValue] = useState<number>();\n  return <>\n            <RangeControl {...args} value={value} onChange={v => {\n      setValue(v);\n      onChange?.(v);\n    }} />\n            <hr style={{\n      marginTop: '5em'\n    }} />\n            <p>Current value: {value}</p>\n        </>;\n}",
					...WithAnyStep.parameters?.docs?.source
				},
				description: {
					story: "Setting the `step` prop to `\"any\"` will allow users to select non-integer\nvalues. This also overrides both `withInputField` and `showTooltip` props to\n`false`.",
					...WithAnyStep.parameters?.docs?.description
				}
			}
		};
		WithIntegerStepAndMarks.parameters = {
			...WithIntegerStepAndMarks.parameters,
			docs: {
				...WithIntegerStepAndMarks.parameters?.docs,
				source: {
					originalSource: "({\n  label,\n  onChange,\n  ...args\n}) => {\n  const [automaticValue, setAutomaticValue] = useState<number>();\n  const [customValue, setCustomValue] = useState<number>();\n  return <>\n            <h2>{label}</h2>\n            <RangeControl {...args} label=\"Automatic marks\" marks onChange={v => {\n      setAutomaticValue(v);\n      onChange?.(v);\n    }} value={automaticValue} />\n            <RangeControl {...args} label=\"Custom marks\" onChange={v => {\n      setCustomValue(v);\n      onChange?.(v);\n    }} value={customValue} />\n        </>;\n}",
					...WithIntegerStepAndMarks.parameters?.docs?.source
				},
				description: {
					story: "Use `marks` to render a visual representation of `step` ticks. Marks may be\nautomatically generated or custom mark indicators can be provided by an\n`Array`.",
					...WithIntegerStepAndMarks.parameters?.docs?.description
				}
			}
		};
		WithDecimalStepAndMarks.parameters = {
			...WithDecimalStepAndMarks.parameters,
			docs: {
				...WithDecimalStepAndMarks.parameters?.docs,
				source: {
					originalSource: "({\n  label,\n  onChange,\n  ...args\n}) => {\n  const [automaticValue, setAutomaticValue] = useState<number>();\n  const [customValue, setCustomValue] = useState<number>();\n  return <>\n            <h2>{label}</h2>\n            <RangeControl {...args} label=\"Automatic marks\" marks onChange={v => {\n      setAutomaticValue(v);\n      onChange?.(v);\n    }} value={automaticValue} />\n            <RangeControl {...args} label=\"Custom marks\" onChange={v => {\n      setCustomValue(v);\n      onChange?.(v);\n    }} value={customValue} />\n        </>;\n}",
					...WithDecimalStepAndMarks.parameters?.docs?.source
				},
				description: {
					story: "Decimal values may be used for `marks` rendered as a visual representation of\n`step` ticks. Marks may be automatically generated or custom mark indicators\ncan be provided by an `Array`.",
					...WithDecimalStepAndMarks.parameters?.docs?.description
				}
			}
		};
		WithNegativeMinimumAndMarks.parameters = {
			...WithNegativeMinimumAndMarks.parameters,
			docs: {
				...WithNegativeMinimumAndMarks.parameters?.docs,
				source: {
					originalSource: "({\n  label,\n  onChange,\n  ...args\n}) => {\n  const [automaticValue, setAutomaticValue] = useState<number>();\n  const [customValue, setCustomValue] = useState<number>();\n  return <>\n            <h2>{label}</h2>\n            <RangeControl {...args} label=\"Automatic marks\" marks onChange={v => {\n      setAutomaticValue(v);\n      onChange?.(v);\n    }} value={automaticValue} />\n            <RangeControl {...args} label=\"Custom marks\" onChange={v => {\n      setCustomValue(v);\n      onChange?.(v);\n    }} value={customValue} />\n        </>;\n}",
					...WithNegativeMinimumAndMarks.parameters?.docs?.source
				},
				description: {
					story: "A negative `min` value can be used to constrain `RangeControl` values. Mark\nindicators can represent negative values as well. Marks may be automatically\ngenerated or custom mark indicators can be provided by an `Array`.",
					...WithNegativeMinimumAndMarks.parameters?.docs?.description
				}
			}
		};
		WithNegativeRangeAndMarks.parameters = {
			...WithNegativeRangeAndMarks.parameters,
			docs: {
				...WithNegativeRangeAndMarks.parameters?.docs,
				source: {
					originalSource: "({\n  label,\n  onChange,\n  ...args\n}) => {\n  const [automaticValue, setAutomaticValue] = useState<number>();\n  const [customValue, setCustomValue] = useState<number>();\n  return <>\n            <h2>{label}</h2>\n            <RangeControl {...args} label=\"Automatic marks\" marks onChange={v => {\n      setAutomaticValue(v);\n      onChange?.(v);\n    }} value={automaticValue} />\n            <RangeControl {...args} label=\"Custom marks\" onChange={v => {\n      setCustomValue(v);\n      onChange?.(v);\n    }} value={customValue} />\n        </>;\n}",
					...WithNegativeRangeAndMarks.parameters?.docs?.source
				},
				description: {
					story: "The entire range of valid values for a `RangeControl` may be negative. Mark\nindicators can represent negative values as well. Marks may be automatically\ngenerated or custom mark indicators can be provided by an `Array`.",
					...WithNegativeRangeAndMarks.parameters?.docs?.description
				}
			}
		};
		WithAnyStepAndMarks.parameters = {
			...WithAnyStepAndMarks.parameters,
			docs: {
				...WithAnyStepAndMarks.parameters?.docs,
				source: {
					originalSource: "({\n  label,\n  onChange,\n  ...args\n}) => {\n  const [automaticValue, setAutomaticValue] = useState<number>();\n  const [customValue, setCustomValue] = useState<number>();\n  return <>\n            <h2>{label}</h2>\n            <RangeControl {...args} label=\"Automatic marks\" marks onChange={v => {\n      setAutomaticValue(v);\n      onChange?.(v);\n    }} value={automaticValue} />\n            <RangeControl {...args} label=\"Custom marks\" onChange={v => {\n      setCustomValue(v);\n      onChange?.(v);\n    }} value={customValue} />\n        </>;\n}",
					...WithAnyStepAndMarks.parameters?.docs?.source
				},
				description: {
					story: "When a `RangeControl` has a `step` value of `any` a user may select\nnon-integer values. This may still be used in conjunction with `marks`\nrendering a visual representation of `step` ticks.",
					...WithAnyStepAndMarks.parameters?.docs?.description
				}
			}
		};
	})))();
}
//#endregion
init_index_story();
export { Default, WithAnyStep, WithAnyStepAndMarks, WithDecimalStepAndMarks, WithIntegerStepAndMarks, WithNegativeMinimumAndMarks, WithNegativeRangeAndMarks, meta as default };
