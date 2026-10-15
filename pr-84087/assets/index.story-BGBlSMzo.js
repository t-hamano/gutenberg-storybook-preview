import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as init_plain_text, t as PlainText } from "./plain-text-DZm2DnhK.js";
//#region ../packages/block-editor/src/components/plain-text/stories/index.story.jsx
var import_jsx_dev_runtime, _jsxFileName, meta, Default;
function init_index_story() {
	return (init_index_story = __esmMin((() => {
		init_react();
		init_plain_text();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/block-editor/src/components/plain-text/stories/index.story.jsx";
		meta = {
			id: "blockeditor-plaintext",
			title: "Editor/Block Editor/PlainText",
			component: PlainText,
			parameters: {
				a11y: { test: "todo" },
				docs: {
					canvas: { sourceState: "shown" },
					description: { component: "PlainText renders an auto-growing textarea that allows users to enter any textual content." }
				}
			},
			argTypes: {
				value: {
					control: { type: null },
					table: { type: { summary: "string" } },
					description: "String value of the textarea."
				},
				onChange: {
					action: "onChange",
					control: { type: null },
					table: { type: { summary: "function" } },
					description: "Function called when the text value changes."
				},
				className: {
					control: "text",
					table: { type: { summary: "string" } },
					description: "Additional class name for the PlainText."
				}
			}
		};
		Default = { render: function Template({ onChange, ...args }) {
			const [value, setValue] = (0, import_react.useState)();
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PlainText, {
				...args,
				onChange: (...changeArgs) => {
					onChange(...changeArgs);
					setValue(...changeArgs);
				},
				value
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 62,
				columnNumber: 4
			}, this);
		} };
		Default.parameters = {
			...Default.parameters,
			docs: {
				...Default.parameters?.docs,
				source: {
					originalSource: "{\n  render: function Template({\n    onChange,\n    ...args\n  }) {\n    const [value, setValue] = useState();\n    return <PlainText {...args} onChange={(...changeArgs) => {\n      onChange(...changeArgs);\n      setValue(...changeArgs);\n    }} value={value} />;\n  }\n}",
					...Default.parameters?.docs?.source
				}
			}
		};
	})))();
}
//#endregion
init_index_story();
export { Default, meta as default };
