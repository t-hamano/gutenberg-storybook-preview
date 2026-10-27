import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as tabbed_sidebar_default, t as init_tabbed_sidebar } from "./tabbed-sidebar-o8T0gUYM.js";
//#region ../packages/block-editor/src/components/tabbed-sidebar/stories/index.story.tsx
var import_jsx_dev_runtime, _jsxFileName, meta, DEMO_TABS, Default;
function init_index_story() {
	return (init_index_story = __esmMin((() => {
		init_react();
		init_tabbed_sidebar();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/block-editor/src/components/tabbed-sidebar/stories/index.story.tsx";
		meta = {
			id: "blockeditor-tabbedsidebar",
			title: "Editor/Block Editor/TabbedSidebar",
			component: tabbed_sidebar_default,
			tags: ["status-private"],
			parameters: { docs: {
				canvas: { sourceState: "shown" },
				description: { component: "A component that creates a tabbed sidebar with a close button." }
			} },
			argTypes: {
				defaultTabId: {
					control: { type: null },
					table: { type: { summary: "string" } },
					description: "The ID of the tab to be selected by default when the component renders."
				},
				onClose: {
					action: "onClose",
					control: { type: null },
					table: { type: { summary: "function" } },
					description: "Function called when the close button is clicked."
				},
				onSelect: {
					action: "onSelect",
					control: { type: null },
					table: { type: { summary: "function" } },
					description: "Function called when a tab is selected. Receives the selected tab's ID as an argument."
				},
				selectedTab: {
					control: { type: null },
					table: { type: { summary: "string" } },
					description: "The ID of the currently selected tab."
				},
				tabs: {
					control: { type: "array" },
					table: { type: { summary: "array" } },
					description: "Array of tab objects. Each tab should have: name (string), title (string), panel (React.Node), and optionally panelRef (React.Ref)."
				},
				closeButtonLabel: {
					control: { type: "text" },
					table: { type: { summary: "string" } },
					description: "Accessibility label for the close button."
				}
			}
		};
		DEMO_TABS = [
			{
				name: "tab1",
				title: "Settings"
			},
			{
				name: "tab2",
				title: "Styles"
			},
			{
				name: "tab3",
				title: "Advanced"
			}
		];
		Default = {
			render: function Template({ onSelect, onClose, ...args }) {
				const [selectedTab, setSelectedTab] = (0, import_react.useState)();
				return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(tabbed_sidebar_default, {
					...args,
					selectedTab,
					onSelect: (...changeArgs) => {
						onSelect(...changeArgs);
						setSelectedTab(...changeArgs);
					},
					onClose
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 90,
					columnNumber: 4
				}, this);
			},
			args: {
				tabs: DEMO_TABS,
				defaultTabId: "tab1",
				closeButtonLabel: "Close Sidebar"
			}
		};
		Default.parameters = {
			...Default.parameters,
			docs: {
				...Default.parameters?.docs,
				source: {
					originalSource: "{\n  render: function Template({\n    onSelect,\n    onClose,\n    ...args\n  }) {\n    const [selectedTab, setSelectedTab] = useState<string>();\n    return <TabbedSidebar {...args} selectedTab={selectedTab} onSelect={(...changeArgs) => {\n      onSelect(...changeArgs);\n      setSelectedTab(...changeArgs);\n    }} onClose={onClose} />;\n  },\n  args: {\n    tabs: DEMO_TABS,\n    defaultTabId: 'tab1',\n    closeButtonLabel: 'Close Sidebar'\n  }\n}",
					...Default.parameters?.docs?.source
				}
			}
		};
	})))();
}
//#endregion
init_index_story();
export { Default, meta as default };
