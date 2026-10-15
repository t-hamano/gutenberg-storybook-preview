import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { r as init_build_module, s as shortcutAriaLabel } from "./build-module-LJKyBiy6.js";
import { n as init_tooltip, t as Tooltip } from "./tooltip-BEK7-yI-.js";
import { n as init_button, t as Button } from "./button-wsTfHPkm.js";
//#region ../packages/components/src/tooltip/stories/index.story.tsx
var import_jsx_dev_runtime, _jsxFileName, meta, Template, Default, KeyboardShortcut, Nested;
function init_index_story() {
	return (init_index_story = __esmMin((() => {
		init_build_module();
		init_tooltip();
		init_button();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/tooltip/stories/index.story.tsx";
		meta = {
			title: "Components/@wordpress-components/Overlays/Tooltip",
			id: "components-tooltip",
			component: Tooltip,
			argTypes: {
				children: { control: false },
				position: {
					control: { type: "select" },
					options: [
						"top left",
						"top center",
						"top right",
						"bottom left",
						"bottom center",
						"bottom right"
					]
				},
				shortcut: { control: { type: "object" } }
			},
			parameters: {
				controls: { expanded: true },
				docs: { canvas: { sourceState: "shown" } },
				componentStatus: {
					status: "not-recommended",
					whereUsed: "global",
					notes: "Use [`Tooltip`](?path=/docs/design-system-components-tooltip--docs) from `@wordpress/ui` instead."
				}
			}
		};
		Template = (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tooltip, { ...props }, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 38,
			columnNumber: 2
		}, void 0);
		Default = Template.bind({});
		Default.args = {
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
				__next40pxDefaultSize: true,
				variant: "primary",
				children: "Tooltip Anchor"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 44,
				columnNumber: 3
			}, void 0),
			text: "Tooltip Text"
		};
		KeyboardShortcut = Template.bind({});
		KeyboardShortcut.args = {
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
				__next40pxDefaultSize: true,
				variant: "secondary",
				children: "Keyboard Shortcut"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 54,
				columnNumber: 3
			}, void 0),
			shortcut: {
				display: "⇧⌘,",
				ariaLabel: shortcutAriaLabel.primaryShift(",")
			}
		};
		Nested = Template.bind({});
		Nested.args = {
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tooltip, {
				text: "Nested tooltip text (that will never show)",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
					__next40pxDefaultSize: true,
					variant: "primary",
					children: "Tooltip Anchor"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 75,
					columnNumber: 4
				}, void 0)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 74,
				columnNumber: 3
			}, void 0),
			text: "Outer tooltip text"
		};
		try {
			Nested.__docgenInfo = {
				"description": "In case one or more `Tooltip` components are rendered inside another\n`Tooltip` component, only the tooltip associated to the outermost `Tooltip`\ncomponent will be rendered in the browser and shown to the user\nappropriately. The rest of the nested `Tooltip` components will simply no-op\nand pass-through their anchor.",
				"displayName": "Nested",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/tooltip/stories/index.story.tsx",
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
					originalSource: "props => <Tooltip {...props} />",
					...Default.parameters?.docs?.source
				}
			}
		};
		KeyboardShortcut.parameters = {
			...KeyboardShortcut.parameters,
			docs: {
				...KeyboardShortcut.parameters?.docs,
				source: {
					originalSource: "props => <Tooltip {...props} />",
					...KeyboardShortcut.parameters?.docs?.source
				}
			}
		};
		Nested.parameters = {
			...Nested.parameters,
			docs: {
				...Nested.parameters?.docs,
				source: {
					originalSource: "props => <Tooltip {...props} />",
					...Nested.parameters?.docs?.source
				},
				description: {
					story: "In case one or more `Tooltip` components are rendered inside another\n`Tooltip` component, only the tooltip associated to the outermost `Tooltip`\ncomponent will be rendered in the browser and shown to the user\nappropriately. The rest of the nested `Tooltip` components will simply no-op\nand pass-through their anchor.",
					...Nested.parameters?.docs?.description
				}
			}
		};
	})))();
}
//#endregion
init_index_story();
export { Default, KeyboardShortcut, Nested, meta as default };
