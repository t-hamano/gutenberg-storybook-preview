import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as __, t as init_build_module } from "./build-module-v04us4E2.js";
import { n as button_default, r as init_button } from "./button-BxEkUQAF.js";
import { n as init_warning, t as Warning } from "./warning-CtEnQOW4.js";
//#region ../packages/block-editor/src/components/warning/stories/index.story.jsx
var import_jsx_dev_runtime, _jsxFileName, meta, Default, WithActions, WithSecondaryActions;
function init_index_story() {
	return (init_index_story = __esmMin((() => {
		init_build_module();
		init_button();
		init_warning();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/block-editor/src/components/warning/stories/index.story.jsx";
		meta = {
			id: "blockeditor-warning",
			title: "Editor/Block Editor/Warning",
			component: Warning,
			parameters: { docs: {
				canvas: { sourceState: "shown" },
				description: { component: "Displays a warning message with optional action buttons and secondary actions dropdown." }
			} },
			argTypes: {
				children: {
					control: "text",
					description: "Intended to represent the block to which the warning pertains.",
					table: { type: { summary: "string|element" } }
				},
				className: {
					control: "text",
					description: "Classes to pass to element.",
					table: { type: { summary: "string" } }
				},
				actions: {
					control: "object",
					description: "An array of elements to be rendered as action buttons in the warning element.",
					table: { type: { summary: "Element[]" } }
				},
				secondaryActions: {
					control: "object",
					description: "An array of { title, onClick } to be rendered as options in a dropdown of secondary actions.",
					table: { type: { summary: "{ title: string, onClick: Function }[]" } }
				}
			}
		};
		Default = { args: { children: __("This block ran into an issue.") } };
		WithActions = { args: {
			...Default.args,
			actions: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(button_default, {
				__next40pxDefaultSize: true,
				variant: "primary",
				children: __("Fix issue")
			}, "fix-issue", false, {
				fileName: _jsxFileName,
				lineNumber: 65,
				columnNumber: 4
			}, void 0)]
		} };
		WithSecondaryActions = { args: {
			...Default.args,
			secondaryActions: [{ title: __("Get help") }, { title: __("Remove block") }]
		} };
		Default.parameters = {
			...Default.parameters,
			docs: {
				...Default.parameters?.docs,
				source: {
					originalSource: "{\n  args: {\n    children: __('This block ran into an issue.')\n  }\n}",
					...Default.parameters?.docs?.source
				}
			}
		};
		WithActions.parameters = {
			...WithActions.parameters,
			docs: {
				...WithActions.parameters?.docs,
				source: {
					originalSource: "{\n  args: {\n    ...Default.args,\n    actions: [<Button key=\"fix-issue\" __next40pxDefaultSize variant=\"primary\">\n                {__('Fix issue')}\n            </Button>]\n  }\n}",
					...WithActions.parameters?.docs?.source
				}
			}
		};
		WithSecondaryActions.parameters = {
			...WithSecondaryActions.parameters,
			docs: {
				...WithSecondaryActions.parameters?.docs,
				source: {
					originalSource: "{\n  args: {\n    ...Default.args,\n    secondaryActions: [{\n      title: __('Get help')\n    }, {\n      title: __('Remove block')\n    }]\n  }\n}",
					...WithSecondaryActions.parameters?.docs?.source
				}
			}
		};
	})))();
}
//#endregion
init_index_story();
export { Default, WithActions, WithSecondaryActions, meta as default };
