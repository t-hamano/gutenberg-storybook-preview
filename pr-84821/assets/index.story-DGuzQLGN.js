import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as init_form_toggle, t as FormToggle } from "./form-toggle-D-JJkCxz.js";
//#region ../packages/components/src/form-toggle/stories/index.story.tsx
var import_jsx_dev_runtime, _jsxFileName, meta, Template, Default;
function init_index_story() {
	return (init_index_story = __esmMin((() => {
		init_react();
		init_form_toggle();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/form-toggle/stories/index.story.tsx";
		meta = {
			component: FormToggle,
			id: "components-formtoggle",
			title: "Components/@wordpress-components/FormToggle",
			argTypes: { onChange: { action: "onChange" } },
			parameters: {
				controls: { expanded: true },
				docs: { canvas: { sourceState: "shown" } },
				componentStatus: {
					status: "not-recommended",
					whereUsed: "global",
					notes: "Use [`Switch`](?path=/docs/design-system-components-form-primitives-switch--docs) from `@wordpress/ui` instead. See the [migration guide](?path=/docs/components-togglecontrol--migration-guide)."
				},
				a11y: { test: "todo" }
			}
		};
		Template = ({ onChange, ...args }) => {
			const [isChecked, setChecked] = (0, import_react.useState)(true);
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormToggle, {
				...args,
				checked: isChecked,
				onChange: (e) => {
					setChecked((state) => !state);
					onChange(e);
				}
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 35,
				columnNumber: 3
			}, void 0);
		};
		Default = Template.bind({});
		Default.args = {};
		Default.parameters = {
			...Default.parameters,
			docs: {
				...Default.parameters?.docs,
				source: {
					originalSource: "({\n  onChange,\n  ...args\n}) => {\n  const [isChecked, setChecked] = useState(true);\n  return <FormToggle {...args} checked={isChecked} onChange={e => {\n    setChecked(state => !state);\n    onChange(e);\n  }} />;\n}",
					...Default.parameters?.docs?.source
				}
			}
		};
	})))();
}
//#endregion
init_index_story();
export { Default, meta as default };
