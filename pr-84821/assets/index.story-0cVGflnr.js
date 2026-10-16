import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as init_number_control, t as NumberControl } from "./number-control-BsMYN7_s.js";
//#region ../packages/components/src/number-control/stories/index.story.tsx
var import_jsx_dev_runtime, _jsxFileName, meta, Template, Default;
function init_index_story() {
	return (init_index_story = __esmMin((() => {
		init_react();
		init_number_control();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/number-control/stories/index.story.tsx";
		meta = {
			title: "Components/@wordpress-components/Selection & Input/Common/NumberControl",
			id: "components-numbercontrol",
			component: NumberControl,
			argTypes: {
				onChange: { action: "onChange" },
				prefix: { control: { type: "text" } },
				step: { control: { type: "text" } },
				suffix: { control: { type: "text" } },
				type: { control: { type: "text" } },
				value: { control: false }
			},
			tags: ["status-experimental"],
			parameters: {
				controls: { expanded: true },
				docs: { canvas: { sourceState: "shown" } },
				componentStatus: {
					status: "not-recommended",
					whereUsed: "global",
					notes: "For new use cases, use [`InputControl`](?path=/docs/design-system-components-form-inputcontrol--docs) with `type=\"number\"` from `@wordpress/ui` instead. Existing usages should migrate with caution, due to significant differences in behavior. See the [migration guide](?path=/docs/components-inputcontrol--migration-guide)."
				}
			}
		};
		Template = ({ onChange, ...props }) => {
			const [value, setValue] = (0, import_react.useState)("0");
			const [isValidValue, setIsValidValue] = (0, import_react.useState)(true);
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NumberControl, {
				...props,
				value,
				onChange: (v, extra) => {
					setValue(v);
					setIsValidValue(extra.event.target.validity.valid);
					onChange?.(v, extra);
				}
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 40,
				columnNumber: 4
			}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: ["Is valid? ", isValidValue ? "Yes" : "No"] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 52,
				columnNumber: 4
			}, void 0)] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 39,
				columnNumber: 3
			}, void 0);
		};
		Default = Template.bind({});
		Default.args = { label: "Value" };
		Default.parameters = {
			...Default.parameters,
			docs: {
				...Default.parameters?.docs,
				source: {
					originalSource: "({\n  onChange,\n  ...props\n}) => {\n  const [value, setValue] = useState<string | undefined>('0');\n  const [isValidValue, setIsValidValue] = useState(true);\n  return <>\n            <NumberControl {...props} value={value} onChange={(v, extra) => {\n      setValue(v);\n      setIsValidValue((extra.event.target as HTMLInputElement).validity.valid);\n      onChange?.(v, extra);\n    }} />\n            <p>Is valid? {isValidValue ? 'Yes' : 'No'}</p>\n        </>;\n}",
					...Default.parameters?.docs?.source
				}
			}
		};
	})))();
}
//#endregion
init_index_story();
export { Default, meta as default };
