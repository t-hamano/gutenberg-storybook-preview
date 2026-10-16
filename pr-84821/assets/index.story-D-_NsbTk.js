import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as init_shortcut, t as Shortcut } from "./shortcut-D6ctWgOA.js";
//#region ../packages/components/src/shortcut/stories/index.story.tsx
var import_jsx_dev_runtime, _jsxFileName, meta, Template, Default, WithAriaLabel;
function init_index_story() {
	return (init_index_story = __esmMin((() => {
		init_shortcut();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/shortcut/stories/index.story.tsx";
		meta = {
			tags: ["manifest"],
			component: Shortcut,
			title: "Components/@wordpress-components/Utilities/Shortcut",
			id: "components-shortcut",
			parameters: {
				controls: { expanded: true },
				docs: { canvas: { sourceState: "shown" } },
				componentStatus: {
					status: "recommended",
					whereUsed: "global"
				}
			}
		};
		Template = (props) => {
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Shortcut, {
				shortcut: "Ctrl + S",
				...props
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 23,
				columnNumber: 9
			}, void 0);
		};
		Default = Template.bind({});
		WithAriaLabel = Template.bind({});
		WithAriaLabel.args = {
			...Default.args,
			shortcut: {
				display: "Ctrl + L",
				ariaLabel: "Load"
			}
		};
		Default.parameters = {
			...Default.parameters,
			docs: {
				...Default.parameters?.docs,
				source: {
					originalSource: "props => {\n  return <Shortcut shortcut=\"Ctrl + S\" {...props} />;\n}",
					...Default.parameters?.docs?.source
				}
			}
		};
		WithAriaLabel.parameters = {
			...WithAriaLabel.parameters,
			docs: {
				...WithAriaLabel.parameters?.docs,
				source: {
					originalSource: "props => {\n  return <Shortcut shortcut=\"Ctrl + S\" {...props} />;\n}",
					...WithAriaLabel.parameters?.docs?.source
				}
			}
		};
	})))();
}
//#endregion
init_index_story();
export { Default, WithAriaLabel, meta as default };
