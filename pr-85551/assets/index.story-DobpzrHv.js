import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as init_border_radius_control, t as BorderRadiusControl } from "./border-radius-control-1ajsSRCe.js";
//#region ../packages/block-editor/src/components/border-radius-control/stories/index.story.tsx
var import_jsx_dev_runtime, _jsxFileName, meta, Default;
function init_index_story() {
	return (init_index_story = __esmMin((() => {
		init_react();
		init_border_radius_control();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/block-editor/src/components/border-radius-control/stories/index.story.tsx";
		meta = {
			id: "blockeditor-borderradiuscontrol",
			title: "Editor/Block Editor/BorderRadiusControl",
			component: BorderRadiusControl,
			parameters: { docs: {
				canvas: { sourceState: "shown" },
				description: { component: "Control to display border radius options." }
			} },
			argTypes: {
				values: {
					control: "object",
					description: "Border radius values.",
					table: { type: { summary: "object" } }
				},
				onChange: {
					action: "onChange",
					control: { type: null },
					table: { type: { summary: "function" } },
					description: "Callback to handle onChange."
				}
			}
		};
		Default = { render: function Template({ onChange, ...args }) {
			const [values, setValues] = (0, import_react.useState)(args.values);
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BorderRadiusControl, {
				...args,
				values,
				onChange: (...changeArgs) => {
					setValues(...changeArgs);
					onChange(...changeArgs);
				}
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 46,
				columnNumber: 4
			}, this);
		} };
		Default.parameters = {
			...Default.parameters,
			docs: {
				...Default.parameters?.docs,
				source: {
					originalSource: "{\n  render: function Template({\n    onChange,\n    ...args\n  }) {\n    const [values, setValues] = useState(args.values);\n    return <BorderRadiusControl {...args} values={values} onChange={(...changeArgs) => {\n      setValues(...changeArgs);\n      onChange(...changeArgs);\n    }} />;\n  }\n}",
					...Default.parameters?.docs?.source
				}
			}
		};
	})))();
}
//#endregion
init_index_story();
export { Default, meta as default };
