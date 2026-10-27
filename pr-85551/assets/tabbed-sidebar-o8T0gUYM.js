import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { t as close_small_default } from "./close-small-BRQ3N94m.js";
import { n as privateApis, t as init_private_apis } from "./private-apis-CKPONgxe.js";
import { n as button_default, r as init_button } from "./button-BxmZjN4X.js";
import { r as unlock, t as init_lock_unlock } from "./lock-unlock-gGYMx_rW.js";
import { r as init_build_module } from "./library.story-CbQx3MQ6.js";
//#region ../packages/block-editor/src/components/tabbed-sidebar/index.tsx
/**
* A component that creates a tabbed sidebar with a close button.
*
* @see https://github.com/WordPress/gutenberg/blob/HEAD/packages/block-editor/src/components/tabbed-sidebar/README.md
*
* @example
* ```jsx
* function MyTabbedSidebar() {
*   return (
*     <TabbedSidebar
*       tabs={ [
*         {
*           name: 'tab1',
*           title: 'Settings',
*           panel: <PanelContents />,
*         }
*       ] }
*       onClose={ () => {} }
*       onSelect={ () => {} }
*       defaultTabId="tab1"
*       selectedTab="tab1"
*       closeButtonLabel="Close sidebar"
*     />
*   );
* }
* ```
*
* @param props                  Component props.
* @param props.defaultTabId     The ID of the tab to be selected by default when the component renders.
* @param props.onClose          Function called when the close button is clicked.
* @param props.onSelect         Function called when a tab is selected. Receives the selected tab's ID as an argument.
* @param props.selectedTab      The ID of the currently selected tab.
* @param props.tabs             Array of tab objects. Each tab should have: name (string), title (string),
*                               panel (React.Node), and optionally panelRef (React.Ref).
* @param props.closeButtonLabel Accessibility label for the close button.
* @param ref                    Forward ref to the tabs list element.
* @return The tabbed sidebar component.
*/
function TabbedSidebar({ defaultTabId, onClose, onSelect, selectedTab, tabs, closeButtonLabel }, ref) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "block-editor-tabbed-sidebar",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tabs, {
			selectOnMove: false,
			defaultTabId,
			onSelect,
			selectedTabId: selectedTab,
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "block-editor-tabbed-sidebar__tablist-and-close-button",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(button_default, {
					className: "block-editor-tabbed-sidebar__close-button",
					icon: close_small_default,
					label: closeButtonLabel,
					onClick: () => onClose(),
					size: "compact"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 71,
					columnNumber: 6
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tabs.TabList, {
					className: "block-editor-tabbed-sidebar__tablist",
					ref,
					children: tabs.map((tab) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tabs.Tab, {
						tabId: tab.name,
						className: "block-editor-tabbed-sidebar__tab",
						children: tab.title
					}, tab.name, false, {
						fileName: _jsxFileName,
						lineNumber: 84,
						columnNumber: 8
					}, this))
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 79,
					columnNumber: 6
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 70,
				columnNumber: 5
			}, this), tabs.map((tab) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tabs.TabPanel, {
				tabId: tab.name,
				focusable: false,
				className: "block-editor-tabbed-sidebar__tabpanel",
				ref: tab.panelRef,
				children: tab.panel
			}, tab.name, false, {
				fileName: _jsxFileName,
				lineNumber: 95,
				columnNumber: 6
			}, this))]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 64,
			columnNumber: 4
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 63,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime, _jsxFileName, Tabs, tabbed_sidebar_default;
function init_tabbed_sidebar() {
	return (init_tabbed_sidebar = __esmMin((() => {
		init_button(), init_private_apis();
		init_react();
		init_build_module();
		init_lock_unlock();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/block-editor/src/components/tabbed-sidebar/index.tsx";
		({Tabs} = unlock(privateApis));
		tabbed_sidebar_default = (0, import_react.forwardRef)(TabbedSidebar);
		try {
			TabbedSidebar.__docgenInfo = {
				"description": "A component that creates a tabbed sidebar with a close button.",
				"displayName": "TabbedSidebar",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/block-editor/src/components/tabbed-sidebar/index.tsx",
				"methods": [],
				"props": {},
				"tags": {
					"see": "https://github.com/WordPress/gutenberg/blob/HEAD/packages/block-editor/src/components/tabbed-sidebar/README.md",
					"example": "```jsx\nfunction MyTabbedSidebar() {\n  return (\n    <TabbedSidebar\n      tabs={ [\n        {\n          name: 'tab1',\n          title: 'Settings',\n          panel: <PanelContents />,\n        }\n      ] }\n      onClose={ () => {} }\n      onSelect={ () => {} }\n      defaultTabId=\"tab1\"\n      selectedTab=\"tab1\"\n      closeButtonLabel=\"Close sidebar\"\n    />\n  );\n}\n```",
					"param": "props Component props.\nprops.defaultTabId The ID of the tab to be selected by default when the component renders.\nprops.onClose Function called when the close button is clicked.\nprops.onSelect Function called when a tab is selected. Receives the selected tab's ID as an argument.\nprops.selectedTab The ID of the currently selected tab.\nprops.tabs Array of tab objects. Each tab should have: name (string), title (string),\npanel (React.Node), and optionally panelRef (React.Ref).\nprops.closeButtonLabel Accessibility label for the close button.\nref Forward ref to the tabs list element.",
					"return": "The tabbed sidebar component."
				}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
export { tabbed_sidebar_default as n, init_tabbed_sidebar as t };
