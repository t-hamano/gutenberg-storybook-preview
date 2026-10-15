import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { i as init_radio, n as init_radio_group, r as Radio, t as RadioGroup } from "./radio-group-2aT_9rBx.js";
//#region ../packages/ui/src/form/primitives/radio-group/stories/index.story.tsx
var import_jsx_dev_runtime, _jsxFileName, meta, Default, Checked, Disabled;
function init_index_story() {
	return (init_index_story = __esmMin((() => {
		init_radio();
		init_radio_group();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/primitives/radio-group/stories/index.story.tsx";
		meta = {
			tags: ["manifest"],
			title: "Components/@wordpress-ui/Form/Primitives/RadioGroup",
			id: "design-system-components-form-primitives-radiogroup",
			component: RadioGroup,
			argTypes: { onValueChange: { action: "onValueChange" } },
			parameters: { componentStatus: {
				status: "recommended",
				whereUsed: "global"
			} },
			render: (args) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RadioGroup, {
				...args,
				children: [
					"Apple",
					"Banana",
					"Orange"
				].map((label) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Radio, {
					value: label,
					"aria-label": label
				}, label, false, {
					fileName: _jsxFileName,
					lineNumber: 22,
					columnNumber: 5
				}, void 0))
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 20,
				columnNumber: 3
			}, void 0)
		};
		Default = { args: { "aria-label": "Fruit" } };
		Checked = { args: {
			...Default.args,
			defaultValue: "Apple"
		} };
		Disabled = { args: {
			...Default.args,
			defaultValue: "Apple",
			disabled: true
		} };
		Default.parameters = {
			...Default.parameters,
			docs: {
				...Default.parameters?.docs,
				source: {
					originalSource: "{\n  args: {\n    'aria-label': 'Fruit'\n  }\n}",
					...Default.parameters?.docs?.source
				}
			}
		};
		Checked.parameters = {
			...Checked.parameters,
			docs: {
				...Checked.parameters?.docs,
				source: {
					originalSource: "{\n  args: {\n    ...Default.args,\n    defaultValue: 'Apple'\n  }\n}",
					...Checked.parameters?.docs?.source
				}
			}
		};
		Disabled.parameters = {
			...Disabled.parameters,
			docs: {
				...Disabled.parameters?.docs,
				source: {
					originalSource: "{\n  args: {\n    ...Default.args,\n    defaultValue: 'Apple',\n    disabled: true\n  }\n}",
					...Disabled.parameters?.docs?.source
				}
			}
		};
	})))();
}
//#endregion
init_index_story();
export { Checked, Default, Disabled, meta as default };
