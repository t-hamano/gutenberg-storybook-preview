import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as use_instance_id_default, t as init_use_instance_id } from "./use-instance-id-BznKyZc1.js";
import { o as isRTL, t as init_build_module } from "./build-module-v04us4E2.js";
import { n as usePrevious, t as init_use_previous } from "./use-previous-BYjjquxs.js";
import { a as init_clsx, i as clsx } from "./iframe-Dbjzp1_m.js";
import { n as link_default } from "./link-B6xih8Jw.js";
import { n as more_default } from "./more-U4HqW_9x.js";
import { n as wordpress_default } from "./wordpress-Dmkk4E44.js";
import { i as init_dist, s as useStoreState } from "./CDh2UhnG-eN0icMPG.js";
import { a as TabList, c as init_tab, i as init_tab_panel$1, n as useTabStore, o as init_tab_list, r as TabPanel$1, s as Tab, t as init_tab_store } from "./tab-store-DRQq_ka7.js";
import { n as init_button, t as Button } from "./button-BqvmAVeL.js";
import { r as init_build_module$1 } from "./library.story-CFsmdbdz.js";
//#region ../packages/components/src/tab-panel/index.tsx
var import_jsx_dev_runtime$1, _jsxFileName$1, extractTabName, UnforwardedTabPanel, TabPanel;
function init_tab_panel() {
	return (init_tab_panel = __esmMin((() => {
		init_tab_store(), init_dist(), init_tab_list(), init_tab(), init_tab_panel$1();
		init_clsx();
		init_react();
		init_use_instance_id(), init_use_previous();
		init_build_module();
		init_button();
		import_jsx_dev_runtime$1 = require_jsx_dev_runtime();
		_jsxFileName$1 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/tab-panel/index.tsx";
		extractTabName = (id) => {
			if (typeof id === "undefined" || id === null) return;
			return id.match(/^tab-panel-[0-9]*-(.*)/)?.[1];
		};
		UnforwardedTabPanel = ({ className, children, tabs, selectOnMove = true, initialTabName, orientation = "horizontal", activeClass = "is-active", onSelect }, ref) => {
			const instanceId = use_instance_id_default(TabPanel, "tab-panel");
			const prependInstanceId = (0, import_react.useCallback)((tabName) => {
				if (typeof tabName === "undefined") return;
				return `${instanceId}-${tabName}`;
			}, [instanceId]);
			const tabStore = useTabStore({
				setSelectedId: (newTabValue) => {
					if (typeof newTabValue === "undefined" || newTabValue === null) return;
					const newTab = tabs.find((t) => prependInstanceId(t.name) === newTabValue);
					if (newTab?.disabled || newTab === selectedTab) return;
					const simplifiedTabName = extractTabName(newTabValue);
					if (typeof simplifiedTabName === "undefined") return;
					onSelect?.(simplifiedTabName);
				},
				orientation,
				selectOnMove,
				defaultSelectedId: prependInstanceId(initialTabName),
				rtl: isRTL()
			});
			const selectedTabName = extractTabName(useStoreState(tabStore, "selectedId"));
			const setTabStoreSelectedId = (0, import_react.useCallback)((tabName) => {
				tabStore.setState("selectedId", prependInstanceId(tabName));
			}, [prependInstanceId, tabStore]);
			const selectedTab = tabs.find(({ name }) => name === selectedTabName);
			const previousSelectedTabName = usePrevious(selectedTabName);
			(0, import_react.useEffect)(() => {
				if (previousSelectedTabName !== selectedTabName && selectedTabName === initialTabName && !!selectedTabName) onSelect?.(selectedTabName);
			}, [
				selectedTabName,
				initialTabName,
				onSelect,
				previousSelectedTabName
			]);
			(0, import_react.useLayoutEffect)(() => {
				if (selectedTab) return;
				const initialTab = tabs.find((tab) => tab.name === initialTabName);
				if (initialTabName && !initialTab) return;
				if (initialTab && !initialTab.disabled) setTabStoreSelectedId(initialTab.name);
				else {
					const firstEnabledTab = tabs.find((tab) => !tab.disabled);
					if (firstEnabledTab) setTabStoreSelectedId(firstEnabledTab.name);
				}
			}, [
				tabs,
				selectedTab,
				initialTabName,
				instanceId,
				setTabStoreSelectedId
			]);
			(0, import_react.useEffect)(() => {
				if (!selectedTab?.disabled) return;
				const firstEnabledTab = tabs.find((tab) => !tab.disabled);
				if (firstEnabledTab) setTabStoreSelectedId(firstEnabledTab.name);
			}, [
				tabs,
				selectedTab?.disabled,
				setTabStoreSelectedId,
				instanceId
			]);
			return /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)("div", {
				className,
				ref,
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(TabList, {
					store: tabStore,
					className: "components-tab-panel__tabs",
					children: tabs.map((tab) => {
						return /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(Tab, {
							id: prependInstanceId(tab.name),
							className: clsx("components-tab-panel__tabs-item", tab.className, { [activeClass]: tab.name === selectedTabName }),
							disabled: tab.disabled,
							"aria-controls": `${prependInstanceId(tab.name)}-view`,
							render: /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(Button, {
								__next40pxDefaultSize: true,
								icon: tab.icon,
								label: tab.icon && tab.title,
								showTooltip: !!tab.icon
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 209,
								columnNumber: 9
							}, void 0),
							children: !tab.icon && /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)("span", {
								className: "components-tab-panel__tabs-item-label",
								children: tab.title
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 218,
								columnNumber: 9
							}, void 0)
						}, tab.name, false, {
							fileName: _jsxFileName$1,
							lineNumber: 193,
							columnNumber: 7
						}, void 0);
					})
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 187,
					columnNumber: 4
				}, void 0), selectedTab && /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(TabPanel$1, {
					id: `${prependInstanceId(selectedTab.name)}-view`,
					store: tabStore,
					tabId: prependInstanceId(selectedTab.name),
					className: "components-tab-panel__tab-content",
					children: children(selectedTab)
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 227,
					columnNumber: 5
				}, void 0)]
			}, void 0, true, {
				fileName: _jsxFileName$1,
				lineNumber: 186,
				columnNumber: 3
			}, void 0);
		};
		TabPanel = (0, import_react.forwardRef)(UnforwardedTabPanel);
		TabPanel.displayName = "TabPanel";
		try {
			TabPanel.__docgenInfo = {
				"description": "",
				"displayName": "TabPanel",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/tab-panel/index.tsx",
				"methods": [],
				"props": {
					"activeClass": {
						"defaultValue": { "value": "is-active" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/tab-panel/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The class name to add to the active tab.",
						"name": "activeClass",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"children": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/tab-panel/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "A function which renders the tabviews given the selected tab.\nThe function is passed the active tab object as an argument as defined by the tabs prop.",
						"name": "children",
						"required": true,
						"tags": {},
						"type": { "name": "(tab: Tab) => ReactNode" }
					},
					"className": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/tab-panel/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The class name to give to the outer container for the TabPanel.",
						"name": "className",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"initialTabName": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/tab-panel/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The name of the tab to be selected upon mounting of component.\nIf this prop is not set, the first tab will be selected by default.",
						"name": "initialTabName",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"onSelect": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/tab-panel/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The function called when a tab has been selected.\nIt is passed the `tabName` as an argument.",
						"name": "onSelect",
						"required": false,
						"tags": {},
						"type": { "name": "((tabName: string) => void)" }
					},
					"orientation": {
						"defaultValue": { "value": "horizontal" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/tab-panel/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The orientation of the tablist.",
						"name": "orientation",
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "\"horizontal\" | \"vertical\"",
							"value": [{ "value": "\"horizontal\"" }, { "value": "\"vertical\"" }]
						}
					},
					"tabs": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/tab-panel/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Array of tab objects. Each tab object should contain at least a `name` and a `title`.",
						"name": "tabs",
						"required": true,
						"tags": {},
						"type": { "name": "Tab[]" }
					},
					"selectOnMove": {
						"defaultValue": { "value": "true" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/tab-panel/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "When `true`, the tab will be selected when receiving focus (automatic tab\nactivation). When `false`, the tab will be selected only when clicked\n(manual tab activation). See the official W3C docs for more info.\n.\n@see https://www.w3.org/WAI/ARIA/apg/patterns/tabpanel/",
						"name": "selectOnMove",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/components/src/tab-panel/stories/index.story.tsx
var import_jsx_dev_runtime, fn, _jsxFileName, meta, Template, Default, DisabledTab, SlotFillTemplate, WithTabIconsAndTooltips, ManualActivation;
function init_index_story() {
	return (init_index_story = __esmMin((() => {
		init_build_module$1();
		init_tab_panel();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		({fn} = __STORYBOOK_MODULE_TEST__);
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/tab-panel/stories/index.story.tsx";
		meta = {
			title: "Components/@wordpress-components/Containers/TabPanel",
			id: "components-tabpanel",
			component: TabPanel,
			parameters: {
				controls: { expanded: true },
				docs: { canvas: { sourceState: "shown" } },
				componentStatus: {
					status: "not-recommended",
					whereUsed: "global",
					notes: "Use [`Tabs`](?path=/docs/design-system-components-tabs--docs) from `@wordpress/ui` instead."
				}
			},
			args: { onSelect: fn() }
		};
		Template = (props) => {
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TabPanel, { ...props }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 26,
				columnNumber: 9
			}, void 0);
		};
		Default = Template.bind({});
		Default.args = {
			children: (tab) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: ["Selected tab: ", tab.title] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 31,
				columnNumber: 23
			}, void 0),
			tabs: [{
				name: "tab1",
				title: "Tab 1"
			}, {
				name: "tab2",
				title: "Tab 2"
			}]
		};
		DisabledTab = Template.bind({});
		DisabledTab.args = {
			children: (tab) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: ["Selected tab: ", tab.title] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 46,
				columnNumber: 23
			}, void 0),
			tabs: [
				{
					name: "tab1",
					title: "Tab 1",
					disabled: true
				},
				{
					name: "tab2",
					title: "Tab 2"
				},
				{
					name: "tab3",
					title: "Tab 3"
				}
			]
		};
		SlotFillTemplate = (props) => {
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TabPanel, { ...props }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 65,
				columnNumber: 9
			}, void 0);
		};
		WithTabIconsAndTooltips = SlotFillTemplate.bind({});
		WithTabIconsAndTooltips.args = {
			children: (tab) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: ["Selected tab: ", tab.title] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 70,
				columnNumber: 23
			}, void 0),
			tabs: [
				{
					name: "tab1",
					title: "Tab 1",
					icon: wordpress_default
				},
				{
					name: "tab2",
					title: "Tab 2",
					icon: link_default
				},
				{
					name: "tab3",
					title: "Tab 3",
					icon: more_default
				}
			]
		};
		ManualActivation = Template.bind({});
		ManualActivation.args = {
			...Default.args,
			selectOnMove: false
		};
		Default.parameters = {
			...Default.parameters,
			docs: {
				...Default.parameters?.docs,
				source: {
					originalSource: "props => {\n  return <TabPanel {...props} />;\n}",
					...Default.parameters?.docs?.source
				}
			}
		};
		DisabledTab.parameters = {
			...DisabledTab.parameters,
			docs: {
				...DisabledTab.parameters?.docs,
				source: {
					originalSource: "props => {\n  return <TabPanel {...props} />;\n}",
					...DisabledTab.parameters?.docs?.source
				}
			}
		};
		WithTabIconsAndTooltips.parameters = {
			...WithTabIconsAndTooltips.parameters,
			docs: {
				...WithTabIconsAndTooltips.parameters?.docs,
				source: {
					originalSource: "props => {\n  return <TabPanel {...props} />;\n}",
					...WithTabIconsAndTooltips.parameters?.docs?.source
				}
			}
		};
		ManualActivation.parameters = {
			...ManualActivation.parameters,
			docs: {
				...ManualActivation.parameters?.docs,
				source: {
					originalSource: "props => {\n  return <TabPanel {...props} />;\n}",
					...ManualActivation.parameters?.docs?.source
				}
			}
		};
	})))();
}
//#endregion
init_index_story();
export { Default, DisabledTab, ManualActivation, WithTabIconsAndTooltips, meta as default };
