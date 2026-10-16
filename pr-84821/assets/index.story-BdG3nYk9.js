import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { i as init_radio, n as init_radio_group, r as Radio, t as RadioGroup } from "./radio-group-D9TzkGIn.js";
//#region ../packages/ui/src/form/primitives/radio/stories/index.story.tsx
var import_jsx_dev_runtime, _jsxFileName, meta, Default, Checked, Disabled, DisabledChecked;
function init_index_story() {
	return (init_index_story = __esmMin((() => {
		init_radio();
		init_radio_group();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/primitives/radio/stories/index.story.tsx";
		meta = {
			tags: ["manifest"],
			title: "Components/@wordpress-ui/Form/Primitives/Radio",
			id: "design-system-components-form-primitives-radio",
			component: Radio,
			parameters: { componentStatus: {
				status: "recommended",
				whereUsed: "global"
			} }
		};
		Default = {
			args: {
				value: "option",
				"aria-label": "Option"
			},
			render: (args) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RadioGroup, {
				"aria-label": "Options",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Radio, { ...args }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 29,
					columnNumber: 4
				}, void 0)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 28,
				columnNumber: 3
			}, void 0)
		};
		Checked = {
			args: { ...Default.args },
			render: (args) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RadioGroup, {
				"aria-label": "Options",
				defaultValue: "option",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Radio, { ...args }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 40,
					columnNumber: 4
				}, void 0)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 39,
				columnNumber: 3
			}, void 0)
		};
		Disabled = {
			args: {
				...Default.args,
				disabled: true
			},
			render: (args) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RadioGroup, {
				"aria-label": "Options",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Radio, { ...args }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 52,
					columnNumber: 4
				}, void 0)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 51,
				columnNumber: 3
			}, void 0)
		};
		DisabledChecked = {
			args: {
				...Default.args,
				disabled: true
			},
			render: (args) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RadioGroup, {
				"aria-label": "Options",
				defaultValue: "option",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Radio, { ...args }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 64,
					columnNumber: 4
				}, void 0)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 63,
				columnNumber: 3
			}, void 0)
		};
		Default.parameters = {
			...Default.parameters,
			docs: {
				...Default.parameters?.docs,
				source: {
					originalSource: "{\n  args: {\n    value: 'option',\n    'aria-label': 'Option'\n  },\n  render: args => <RadioGroup aria-label=\"Options\">\n            <Radio {...args} />\n        </RadioGroup>\n}",
					...Default.parameters?.docs?.source
				}
			}
		};
		Checked.parameters = {
			...Checked.parameters,
			docs: {
				...Checked.parameters?.docs,
				source: {
					originalSource: "{\n  args: {\n    ...Default.args\n  },\n  render: args => <RadioGroup aria-label=\"Options\" defaultValue=\"option\">\n            <Radio {...args} />\n        </RadioGroup>\n}",
					...Checked.parameters?.docs?.source
				}
			}
		};
		Disabled.parameters = {
			...Disabled.parameters,
			docs: {
				...Disabled.parameters?.docs,
				source: {
					originalSource: "{\n  args: {\n    ...Default.args,\n    disabled: true\n  },\n  render: args => <RadioGroup aria-label=\"Options\">\n            <Radio {...args} />\n        </RadioGroup>\n}",
					...Disabled.parameters?.docs?.source
				}
			}
		};
		DisabledChecked.parameters = {
			...DisabledChecked.parameters,
			docs: {
				...DisabledChecked.parameters?.docs,
				source: {
					originalSource: "{\n  args: {\n    ...Default.args,\n    disabled: true\n  },\n  render: args => <RadioGroup aria-label=\"Options\" defaultValue=\"option\">\n            <Radio {...args} />\n        </RadioGroup>\n}",
					...DisabledChecked.parameters?.docs?.source
				}
			}
		};
	})))();
}
//#endregion
init_index_story();
export { Checked, Default, Disabled, DisabledChecked, meta as default };
