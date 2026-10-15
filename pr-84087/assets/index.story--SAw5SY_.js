import { n as __esmMin, r as __exportAll } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as use_instance_id_default, t as init_use_instance_id } from "./use-instance-id-BznKyZc1.js";
import { n as useMergeRefs, t as init_use_merge_refs } from "./use-merge-refs-BAtuPB1L.js";
import { n as useEvent, t as init_use_event } from "./use-event-BTRhHipl.js";
import { o as isRTL, t as init_build_module } from "./build-module-v04us4E2.js";
import { o as clsx, s as init_clsx } from "./iframe-D4D-SsYo.js";
import { t as chevron_right_default } from "./chevron-right-BwuKPSnZ.js";
import { n as link_default } from "./link-Dzvan7Nf.js";
import { n as more_default } from "./more-6oYR2p9z.js";
import { n as wordpress_default } from "./wordpress-Brhxv8eP.js";
import { n as warning, t as init_build_module$1 } from "./build-module-B5spW8IS.js";
import { i as init_dist, s as useStoreState } from "./CDh2UhnG-rjC-Q4Bk.js";
import { a as TabList$1, c as init_tab$1, i as init_tab_panel, n as useTabStore, o as init_tab_list, r as TabPanel$1, s as Tab$1, t as init_tab_store } from "./tab-store-BdvA2VpX.js";
import { n as init_tooltip, t as Tooltip } from "./tooltip-BEK7-yI-.js";
import { n as init_icon, t as Icon } from "./icon-BPBhgF1b.js";
import { n as init_button, t as Button } from "./button-wsTfHPkm.js";
import { i as useTrackElementOffsetRect, n as useAnimatedOffsetRect, r as init_element_rect, t as init_use_animated_offset_rect } from "./use-animated-offset-rect-DvoMmdK4.js";
import { a as Fill, i as init_slot_fill, n as Slot, t as Provider } from "./slot-fill-CKXX0yAb.js";
import { r as init_build_module$2 } from "./library.story-DawnfKTW.js";
//#region ../packages/components/src/tabs/context.ts
var TabsContext, useTabsContext;
function init_context() {
	return (init_context = __esmMin((() => {
		init_react();
		TabsContext = (0, import_react.createContext)(void 0);
		TabsContext.displayName = "TabsContext";
		useTabsContext = () => (0, import_react.useContext)(TabsContext);
	})))();
}
//#endregion
//#region ../packages/components/src/tabs/style.module.scss
var tab, style_module_default;
function init_style_module() {
	return (init_style_module = __esmMin((() => {
		tab = "_tab_1728e_46";
		style_module_default = {
			"tab-list": "_tab-list_1728e_46",
			tab,
			"tab-children": "_tab-children_1728e_198",
			"tab-chevron": "_tab-chevron_1728e_210",
			"tab-panel": "_tab-panel_1728e_232"
		};
	})))();
}
//#endregion
//#region ../packages/components/src/tabs/tab.tsx
var import_jsx_dev_runtime$4, _jsxFileName$4, Tab;
function init_tab() {
	return (init_tab = __esmMin((() => {
		init_clsx();
		init_tab$1();
		init_react();
		init_build_module$1();
		init_build_module$2();
		init_context();
		init_icon();
		init_style_module();
		import_jsx_dev_runtime$4 = require_jsx_dev_runtime();
		_jsxFileName$4 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/tabs/tab.tsx";
		Tab = (0, import_react.forwardRef)(function UnforwardedTab({ children, tabId, disabled, render, className, ...otherProps }, ref) {
			const { store, instanceId } = useTabsContext() ?? {};
			if (!store) {
				warning("`Tabs.Tab` must be wrapped in a `Tabs` component.");
				return null;
			}
			const instancedTabId = `${instanceId}-${tabId}`;
			return /* @__PURE__ */ (0, import_jsx_dev_runtime$4.jsxDEV)(Tab$1, {
				ref,
				store,
				id: instancedTabId,
				disabled,
				render,
				...otherProps,
				className: clsx(style_module_default.tab, className),
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime$4.jsxDEV)("span", {
					className: style_module_default["tab-children"],
					children
				}, void 0, false, {
					fileName: _jsxFileName$4,
					lineNumber: 38,
					columnNumber: 4
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime$4.jsxDEV)(Icon, {
					className: style_module_default["tab-chevron"],
					icon: chevron_right_default
				}, void 0, false, {
					fileName: _jsxFileName$4,
					lineNumber: 39,
					columnNumber: 4
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$4,
				lineNumber: 29,
				columnNumber: 3
			}, this);
		});
		try {
			Tab.__docgenInfo = {
				"description": "",
				"displayName": "Tab",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/tabs/tab.tsx",
				"methods": [],
				"props": {
					"children": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/tabs/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The contents of the tab.",
						"name": "children",
						"required": false,
						"tags": {},
						"type": { "name": "ReactNode" }
					},
					"render": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/tabs/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Allows the component to be rendered as a different HTML element or React\ncomponent. The value can be a React element or a function that takes in the\noriginal component props and gives back a React element with the props\nmerged.\n\nBy default, the tab will be rendered as a `button` element.",
						"name": "render",
						"required": false,
						"tags": {},
						"type": { "name": "ReactElement<unknown, string | JSXElementConstructor<any>> | RenderProp<HTMLAttributes<any> & { ref?: Ref<any>; }>" }
					},
					"disabled": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/tabs/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Determines if the tab should be disabled. Note that disabled tabs can\nstill be accessed via the keyboard when navigating through the tablist.",
						"name": "disabled",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"tabId": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/tabs/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The unique ID of the tab. It will be used to register the tab and match\nit to a corresponding `Tabs.TabPanel` component.",
						"name": "tabId",
						"required": true,
						"tags": {},
						"type": { "name": "string" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/components/src/tabs/use-track-overflow.ts
/**
* Tracks if an element contains overflow and on which end by tracking the
* first and last child elements with an `IntersectionObserver` in relation
* to the parent element.
*
* Note that the returned value will only indicate whether the first or last
* element is currently "going out of bounds" but not whether it happens on
* the X or Y axis.
*/
function useTrackOverflow(parent, children) {
	const [first, setFirst] = (0, import_react.useState)(false);
	const [last, setLast] = (0, import_react.useState)(false);
	const [observer, setObserver] = (0, import_react.useState)();
	const callback = useEvent((entries) => {
		for (const entry of entries) {
			if (entry.target === children.first) setFirst(!entry.isIntersecting);
			if (entry.target === children.last) setLast(!entry.isIntersecting);
		}
	});
	(0, import_react.useEffect)(() => {
		if (!parent || !window.IntersectionObserver) return;
		const newObserver = new IntersectionObserver(callback, {
			root: parent,
			threshold: .9
		});
		setObserver(newObserver);
		return () => newObserver.disconnect();
	}, [callback, parent]);
	(0, import_react.useEffect)(() => {
		if (!observer) return;
		if (children.first) observer.observe(children.first);
		if (children.last) observer.observe(children.last);
		return () => {
			if (children.first) observer.unobserve(children.first);
			if (children.last) observer.unobserve(children.last);
		};
	}, [
		children.first,
		children.last,
		observer
	]);
	return {
		first,
		last
	};
}
function init_use_track_overflow() {
	return (init_use_track_overflow = __esmMin((() => {
		init_react();
		init_use_event();
	})))();
}
//#endregion
//#region ../packages/components/src/tabs/tablist.tsx
/**
* Scrolls a given parent element so that a given rect is visible.
*
* The scroll is updated initially and whenever the rect changes.
*/
function useScrollRectIntoView(parent, rect, { margin = DEFAULT_SCROLL_MARGIN } = {}) {
	(0, import_react.useLayoutEffect)(() => {
		if (!parent || !rect) return;
		const { scrollLeft: parentScroll } = parent;
		const parentWidth = parent.getBoundingClientRect().width;
		const { left: childLeft, width: childWidth } = rect;
		const parentRightEdge = parentScroll + parentWidth;
		const rightOverflow = childLeft + childWidth + margin - parentRightEdge;
		const leftOverflow = parentScroll - (childLeft - margin);
		let scrollLeft = null;
		if (leftOverflow > 0) scrollLeft = parentScroll - leftOverflow;
		else if (rightOverflow > 0) scrollLeft = parentScroll + rightOverflow;
		if (scrollLeft !== null)
 /**
		* The optional chaining is used here to avoid unit test failures.
		* It can be removed when JSDOM supports `Element` scroll methods.
		* See: https://github.com/WordPress/gutenberg/pull/66498#issuecomment-2441146096
		*/
		parent.scroll?.({ left: scrollLeft });
	}, [
		margin,
		parent,
		rect
	]);
}
var import_jsx_dev_runtime$3, _jsxFileName$3, DEFAULT_SCROLL_MARGIN, TabList;
function init_tablist() {
	return (init_tablist = __esmMin((() => {
		init_dist(), init_tab_list();
		init_clsx();
		init_build_module$1();
		init_react();
		init_use_merge_refs();
		init_context();
		init_style_module();
		init_element_rect();
		init_use_track_overflow();
		init_use_animated_offset_rect();
		import_jsx_dev_runtime$3 = require_jsx_dev_runtime();
		_jsxFileName$3 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/tabs/tablist.tsx";
		DEFAULT_SCROLL_MARGIN = 24;
		TabList = (0, import_react.forwardRef)(function UnforwardedTabList({ children, ...otherProps }, ref) {
			const { store } = useTabsContext() ?? {};
			const selectedId = useStoreState(store, "selectedId");
			const selectOnMove = useStoreState(store, "selectOnMove");
			const items = useStoreState(store, "items");
			const [parent, setParent] = (0, import_react.useState)();
			const refs = useMergeRefs([ref, setParent]);
			const selectedItem = store?.item(selectedId);
			const renderedItems = useStoreState(store, "renderedItems");
			const selectedItemIndex = renderedItems && selectedItem ? renderedItems.indexOf(selectedItem) : -1;
			const selectedRect = useTrackElementOffsetRect(selectedItem?.element, [selectedItemIndex]);
			const overflow = useTrackOverflow(parent, {
				first: items?.at(0)?.element,
				last: items?.at(-1)?.element
			});
			useAnimatedOffsetRect(parent, selectedRect, {
				prefix: "selected",
				dataAttribute: "indicator-animated",
				transitionEndFilter: (event) => event.pseudoElement === "::before",
				roundRect: true
			});
			useScrollRectIntoView(parent, selectedRect);
			if (!store) {
				warning("`Tabs.TabList` must be wrapped in a `Tabs` component.");
				return null;
			}
			return /* @__PURE__ */ (0, import_jsx_dev_runtime$3.jsxDEV)(TabList$1, {
				ref: refs,
				store,
				render: (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime$3.jsxDEV)("div", {
					...props,
					tabIndex: props.tabIndex ?? -1
				}, void 0, false, {
					fileName: _jsxFileName$3,
					lineNumber: 111,
					columnNumber: 5
				}, this),
				"data-select-on-move": selectOnMove ? "true" : "false",
				...otherProps,
				className: clsx(style_module_default["tab-list"], overflow.first && "is-overflowing-first", overflow.last && "is-overflowing-last", otherProps.className),
				children
			}, void 0, false, {
				fileName: _jsxFileName$3,
				lineNumber: 107,
				columnNumber: 3
			}, this);
		});
		try {
			TabList.__docgenInfo = {
				"description": "",
				"displayName": "TabList",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/tabs/tablist.tsx",
				"methods": [],
				"props": { "children": {
					"defaultValue": null,
					"declarations": [{
						"fileName": "gutenberg-storybook-preview/packages/components/src/tabs/types.ts",
						"name": "TypeLiteral"
					}],
					"description": "The children elements, which should include one or more instances of the\n`Tabs.Tab` component.",
					"name": "children",
					"required": true,
					"tags": {},
					"type": { "name": "ReactNode" }
				} },
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/components/src/tabs/tabpanel.tsx
var import_jsx_dev_runtime$2, _jsxFileName$2, TabPanel;
function init_tabpanel() {
	return (init_tabpanel = __esmMin((() => {
		init_dist(), init_tab_panel();
		init_clsx();
		init_react();
		init_build_module$1();
		init_style_module();
		init_context();
		import_jsx_dev_runtime$2 = require_jsx_dev_runtime();
		_jsxFileName$2 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/tabs/tabpanel.tsx";
		TabPanel = (0, import_react.forwardRef)(function UnforwardedTabPanel({ children, tabId, focusable = true, className, ...otherProps }, ref) {
			const context = useTabsContext();
			const selectedId = useStoreState(context?.store, "selectedId");
			if (!context) {
				warning("`Tabs.TabPanel` must be wrapped in a `Tabs` component.");
				return null;
			}
			const { store, instanceId } = context;
			const instancedTabId = `${instanceId}-${tabId}`;
			return /* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)(TabPanel$1, {
				ref,
				store,
				id: `${instancedTabId}-view`,
				tabId: instancedTabId,
				focusable,
				...otherProps,
				className: clsx(style_module_default["tab-panel"], className),
				children: selectedId === instancedTabId && children
			}, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 27,
				columnNumber: 3
			}, this);
		});
		try {
			TabPanel.__docgenInfo = {
				"description": "",
				"displayName": "TabPanel",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/tabs/tabpanel.tsx",
				"methods": [],
				"props": {
					"children": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/tabs/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The contents of the tab panel.",
						"name": "children",
						"required": false,
						"tags": {},
						"type": { "name": "ReactNode" }
					},
					"focusable": {
						"defaultValue": { "value": "true" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/tabs/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Determines whether or not the tabpanel element should be focusable.\nIf `false`, pressing the tab key will skip over the tabpanel, and instead\nfocus on the first focusable element in the panel (if there is one).",
						"name": "focusable",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"tabId": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/tabs/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The unique `id` of the `Tabs.Tab` component controlling this panel. This\nconnection is used to assign the `aria-labelledby` attribute to the tab\npanel and to determine if the tab panel should be visible.\n\nIf not provided, this link is automatically established by matching the\norder of `Tabs.Tab` and `Tabs.TabPanel` elements in the DOM.",
						"name": "tabId",
						"required": true,
						"tags": {},
						"type": { "name": "string" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/components/src/tabs/index.tsx
function externalToInternalTabId(externalId, instanceId) {
	return externalId && `${instanceId}-${externalId}`;
}
function internalToExternalTabId(internalId, instanceId) {
	return typeof internalId === "string" ? internalId.replace(`${instanceId}-`, "") : internalId;
}
var import_jsx_dev_runtime$1, _jsxFileName$1, Tabs;
function init_tabs() {
	return (init_tabs = __esmMin((() => {
		init_tab_store();
		init_use_instance_id();
		init_react();
		init_build_module();
		init_context();
		init_tab();
		init_tablist();
		init_tabpanel();
		import_jsx_dev_runtime$1 = require_jsx_dev_runtime();
		_jsxFileName$1 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/tabs/index.tsx";
		Tabs = Object.assign(function TabsRoot({ selectOnMove = true, defaultTabId, orientation = "horizontal", onSelect, children, selectedTabId, activeTabId, defaultActiveTabId, onActiveTabIdChange }) {
			const instanceId = use_instance_id_default(TabsRoot, "tabs");
			const store = useTabStore({
				selectOnMove,
				orientation,
				defaultSelectedId: externalToInternalTabId(defaultTabId, instanceId),
				setSelectedId: (newSelectedId) => {
					onSelect?.(internalToExternalTabId(newSelectedId, instanceId));
				},
				selectedId: externalToInternalTabId(selectedTabId, instanceId),
				defaultActiveId: externalToInternalTabId(defaultActiveTabId, instanceId),
				setActiveId: (newActiveId) => {
					onActiveTabIdChange?.(internalToExternalTabId(newActiveId, instanceId));
				},
				activeId: externalToInternalTabId(activeTabId, instanceId),
				rtl: isRTL()
			});
			const contextValue = (0, import_react.useMemo)(() => ({
				store,
				instanceId
			}), [store, instanceId]);
			return /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(TabsContext.Provider, {
				value: contextValue,
				children
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 85,
				columnNumber: 4
			}, this);
		}, {
			/**
			* Renders a single tab.
			*
			* The currently active tab receives default styling that can be
			* overridden with CSS targeting `[aria-selected="true"]`.
			*/
			Tab: Object.assign(Tab, { displayName: "Tabs.Tab" }),
			/**
			* A wrapper component for the `Tab` components.
			*
			* It is responsible for rendering the list of tabs.
			*/
			TabList: Object.assign(TabList, { displayName: "Tabs.TabList" }),
			/**
			* Renders the content to display for a single tab once that tab is selected.
			*/
			TabPanel: Object.assign(TabPanel, { displayName: "Tabs.TabPanel" }),
			Context: Object.assign(TabsContext, { displayName: "Tabs.Context" })
		});
		try {
			Tabs.__docgenInfo = {
				"description": "Tabs is a collection of React components that combine to render\nan [ARIA-compliant tabs pattern](https://www.w3.org/WAI/ARIA/apg/patterns/tabs/).\n\nTabs organizes content across different screens, data sets, and interactions.\nIt has two sections: a list of tabs, and the view to show when a tab is chosen.\n\n`Tabs` itself is a wrapper component and context provider.\nIt is responsible for managing the state of the tabs, and rendering one instance of the `Tabs.TabList` component and one or more instances of the `Tab.TabPanel` component.",
				"displayName": "Tabs",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/tabs/index.tsx",
				"methods": [],
				"props": {
					"children": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/tabs/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The children elements, which should include one instance of the\n`Tabs.Tablist` component and as many instances of the `Tabs.TabPanel`\ncomponents as there are `Tabs.Tab` components.",
						"name": "children",
						"required": true,
						"tags": {},
						"type": { "name": "ReactNode" }
					},
					"selectOnMove": {
						"defaultValue": { "value": "true" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/tabs/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Determines if the tab should be selected when it receives focus. If set to\n`false`, the tab will only be selected upon clicking, not when using arrow\nkeys to shift focus (manual tab activation). See the [official W3C docs](https://www.w3.org/WAI/ARIA/apg/patterns/tabpanel/)\nfor more info.",
						"name": "selectOnMove",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"selectedTabId": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/tabs/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The id of the tab whose panel is currently visible.\n\nIf left `undefined`, it will be automatically set to the first enabled\ntab, and the component assumes it is being used in \"uncontrolled\" mode.\n\nConsequently, any value different than `undefined` will set the component\nin \"controlled\" mode. When in \"controlled\" mode, the `null` value will\nresult in no tabs being selected, and the tablist becoming tabbable.",
						"name": "selectedTabId",
						"required": false,
						"tags": {},
						"type": { "name": "string | null" }
					},
					"defaultTabId": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/tabs/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The id of the tab whose panel is currently visible.\n\nIf left `undefined`, it will be automatically set to the first enabled\ntab. If set to `null`, no tab will be selected, and the tablist will be\ntabbable.\n\nNote: this prop will be overridden by the `selectedTabId` prop if it is\nprovided (meaning the component will be used in \"controlled\" mode).",
						"name": "defaultTabId",
						"required": false,
						"tags": {},
						"type": { "name": "string | null" }
					},
					"onSelect": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/tabs/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The function called when the `selectedTabId` changes.",
						"name": "onSelect",
						"required": false,
						"tags": {},
						"type": { "name": "((selectedId: string | null) => void)" }
					},
					"activeTabId": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/tabs/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The current active tab `id`. The active tab is the tab element within the\ntablist widget that has DOM focus.\n\n- `null` represents the tablist (ie. the base composite element). Users\n  will be able to navigate out of it using arrow keys.\n- If `activeTabId` is initially set to `null`, the base composite element\n  itself will have focus and users will be able to navigate to it using\n  arrow keys.",
						"name": "activeTabId",
						"required": false,
						"tags": {},
						"type": { "name": "string | null" }
					},
					"defaultActiveTabId": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/tabs/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The tab id that should be active by default when the composite widget is\nrendered. If `null`, the tablist element itself will have focus\nand users will be able to navigate to it using arrow keys. If `undefined`,\nthe first enabled item will be focused.\n\nNote: this prop will be overridden by the `activeTabId` prop if it is\nprovided.",
						"name": "defaultActiveTabId",
						"required": false,
						"tags": {},
						"type": { "name": "string | null" }
					},
					"onActiveTabIdChange": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/tabs/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "A callback that gets called when the `activeTabId` state changes.",
						"name": "onActiveTabIdChange",
						"required": false,
						"tags": {},
						"type": { "name": "((activeId: string | null) => void)" }
					},
					"orientation": {
						"defaultValue": { "value": "\"horizontal\"" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/tabs/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Defines the orientation of the tablist and determines which arrow keys\ncan be used to move focus:\n\n- `both`: all arrow keys work.\n- `horizontal`: only left and right arrow keys work.\n- `vertical`: only up and down arrow keys work.",
						"name": "orientation",
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "Orientation",
							"value": [
								{ "value": "\"horizontal\"" },
								{ "value": "\"vertical\"" },
								{ "value": "\"both\"" }
							]
						}
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/components/src/tabs/stories/index.story.tsx
var index_story_exports = /* @__PURE__ */ __exportAll({
	Default: () => Default,
	DisabledTab: () => DisabledTab,
	InsertCustomElements: () => InsertCustomElements,
	ManualActivation: () => ManualActivation,
	SizeAndOverflowPlayground: () => SizeAndOverflowPlayground,
	UsingSlotFill: () => UsingSlotFill,
	Vertical: () => Vertical,
	WithTabIconsAndTooltips: () => WithTabIconsAndTooltips,
	default: () => meta
});
var import_jsx_dev_runtime, fn, _jsxFileName, meta, Template, Default, SizeAndOverflowPlayground, VerticalTemplate, Vertical, DisabledTabTemplate, DisabledTab, WithTabIconsAndTooltipsTemplate, WithTabIconsAndTooltips, ManualActivation, UsingSlotFillTemplate, UsingSlotFill, CloseButtonTemplate, InsertCustomElements;
function init_index_story() {
	return (init_index_story = __esmMin((() => {
		init_build_module$2();
		init_react();
		init_tabs();
		init_slot_fill();
		init_button();
		init_tooltip();
		init_icon();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		({fn} = __STORYBOOK_MODULE_TEST__);
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/tabs/stories/index.story.tsx";
		meta = {
			title: "Components/@wordpress-components/Containers/Tabs",
			id: "components-tabs",
			component: Tabs,
			subcomponents: {
				"Tabs.TabList": Tabs.TabList,
				"Tabs.Tab": Tabs.Tab,
				"Tabs.TabPanel": Tabs.TabPanel,
				"Tabs.Context": Tabs.Context
			},
			tags: ["status-private"],
			parameters: {
				controls: { expanded: true },
				docs: { canvas: { sourceState: "shown" } },
				componentStatus: {
					status: "not-recommended",
					whereUsed: "global",
					notes: "Use [`Tabs`](?path=/docs/design-system-components-tabs--docs) from `@wordpress/ui` instead."
				}
			},
			args: {
				onActiveTabIdChange: fn(),
				onSelect: fn()
			}
		};
		Template = (props) => {
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tabs, {
				...props,
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tabs.TabList, { children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tabs.Tab, {
							tabId: "tab1",
							children: "Tab 1"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 42,
							columnNumber: 5
						}, void 0),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tabs.Tab, {
							tabId: "tab2",
							children: "Tab 2"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 43,
							columnNumber: 5
						}, void 0),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tabs.Tab, {
							tabId: "tab3",
							children: "Tab 3"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 44,
							columnNumber: 5
						}, void 0)
					] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 41,
						columnNumber: 4
					}, void 0),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tabs.TabPanel, {
						tabId: "tab1",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Selected tab: Tab 1" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 47,
							columnNumber: 5
						}, void 0)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 46,
						columnNumber: 4
					}, void 0),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tabs.TabPanel, {
						tabId: "tab2",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Selected tab: Tab 2" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 50,
							columnNumber: 5
						}, void 0)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 49,
						columnNumber: 4
					}, void 0),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tabs.TabPanel, {
						tabId: "tab3",
						focusable: false,
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Selected tab: Tab 3" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 53,
								columnNumber: 5
							}, void 0),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
								"This tabpanel has its ",
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("code", { children: "focusable" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 55,
									columnNumber: 28
								}, void 0),
								" prop set to",
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("code", { children: " false" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 56,
									columnNumber: 6
								}, void 0),
								", so it won't get a tab stop.",
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 57,
									columnNumber: 6
								}, void 0),
								"Instead, the [Tab] key will move focus to the first focusable element within the panel."
							] }, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 54,
								columnNumber: 5
							}, void 0),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
								__next40pxDefaultSize: true,
								variant: "primary",
								children: "I'm a button!"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 61,
								columnNumber: 5
							}, void 0)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 52,
						columnNumber: 4
					}, void 0)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 40,
				columnNumber: 3
			}, void 0);
		};
		Default = Template.bind({});
		SizeAndOverflowPlayground = (props) => {
			const [fullWidth, setFullWidth] = (0, import_react.useState)(false);
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					style: {
						maxWidth: "40rem",
						marginBottom: "1rem"
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "This story helps understand how the TabList component behaves under different conditions. The container below (with the dotted red border) can be horizontally resized, and it has a bit of padding to be out of the way of the TabList." }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 76,
							columnNumber: 5
						}, void 0),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
							"The button will toggle between full width (adding",
							" ",
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("code", { children: "width: 100%" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 85,
								columnNumber: 6
							}, void 0),
							") and the default width."
						] }, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 83,
							columnNumber: 5
						}, void 0),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Try the following:" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 87,
							columnNumber: 5
						}, void 0),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: "Small container" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 90,
							columnNumber: 7
						}, void 0), " that causes tabs to overflow with scroll."] }, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 89,
							columnNumber: 6
						}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: "Large container" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 94,
								columnNumber: 7
							}, void 0),
							" that exceeds the normal width of the tabs.",
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: ["With ", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("code", { children: "width: 100%" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 99,
									columnNumber: 15
								}, void 0)] }, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 98,
									columnNumber: 9
								}, void 0),
								" ",
								"set on the TabList (tabs fill up the space)."
							] }, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 97,
								columnNumber: 8
							}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: ["Without ", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("code", { children: "width: 100%" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 105,
									columnNumber: 18
								}, void 0)] }, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 104,
									columnNumber: 9
								}, void 0),
								" ",
								"(defaults to ",
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("code", { children: "auto" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 107,
									columnNumber: 22
								}, void 0),
								") set on the TabList (tabs take up space proportional to their content)."
							] }, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 103,
								columnNumber: 8
							}, void 0)] }, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 96,
								columnNumber: 7
							}, void 0)
						] }, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 93,
							columnNumber: 6
						}, void 0)] }, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 88,
							columnNumber: 5
						}, void 0)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 75,
					columnNumber: 4
				}, void 0),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
					__next40pxDefaultSize: true,
					style: { marginBottom: "1rem" },
					variant: "primary",
					onClick: () => setFullWidth(!fullWidth),
					children: fullWidth ? "Remove width: 100% from TabList" : "Set width: 100% in TabList"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 115,
					columnNumber: 4
				}, void 0),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tabs, {
					...props,
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							style: {
								width: "20rem",
								border: "2px dotted red",
								padding: "1rem",
								resize: "horizontal",
								overflow: "auto"
							},
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tabs.TabList, {
								style: {
									maxWidth: "100%",
									width: fullWidth ? "100%" : void 0
								},
								children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tabs.Tab, {
										tabId: "tab1",
										children: "Label with multiple words"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 141,
										columnNumber: 7
									}, void 0),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tabs.Tab, {
										tabId: "tab2",
										children: "Short"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 144,
										columnNumber: 7
									}, void 0),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tabs.Tab, {
										tabId: "tab3",
										children: "Hippopotomonstrosesquippedaliophobia"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 145,
										columnNumber: 7
									}, void 0),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tabs.Tab, {
										tabId: "tab4",
										children: "Tab 4"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 148,
										columnNumber: 7
									}, void 0),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tabs.Tab, {
										tabId: "tab5",
										children: "Tab 5"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 149,
										columnNumber: 7
									}, void 0)
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 135,
								columnNumber: 6
							}, void 0)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 126,
							columnNumber: 5
						}, void 0),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tabs.TabPanel, {
							tabId: "tab1",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Selected tab: Tab 1" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 153,
								columnNumber: 6
							}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "(Label with multiple words)" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 154,
								columnNumber: 6
							}, void 0)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 152,
							columnNumber: 5
						}, void 0),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tabs.TabPanel, {
							tabId: "tab2",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Selected tab: Tab 2" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 157,
								columnNumber: 6
							}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "(Short)" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 158,
								columnNumber: 6
							}, void 0)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 156,
							columnNumber: 5
						}, void 0),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tabs.TabPanel, {
							tabId: "tab3",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Selected tab: Tab 3" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 161,
								columnNumber: 6
							}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "(Hippopotomonstrosesquippedaliophobia)" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 162,
								columnNumber: 6
							}, void 0)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 160,
							columnNumber: 5
						}, void 0),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tabs.TabPanel, {
							tabId: "tab4",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Selected tab: Tab 4" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 165,
								columnNumber: 6
							}, void 0)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 164,
							columnNumber: 5
						}, void 0),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tabs.TabPanel, {
							tabId: "tab5",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Selected tab: Tab 5" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 168,
								columnNumber: 6
							}, void 0)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 167,
							columnNumber: 5
						}, void 0)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 125,
					columnNumber: 4
				}, void 0)
			] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 74,
				columnNumber: 3
			}, void 0);
		};
		SizeAndOverflowPlayground.args = { defaultTabId: "tab4" };
		VerticalTemplate = (props) => {
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tabs, {
				orientation: "vertical",
				...props,
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tabs.TabList, {
					style: { maxWidth: "10rem" },
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tabs.Tab, {
							tabId: "tab1",
							children: "Tab 1"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 182,
							columnNumber: 5
						}, void 0),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tabs.Tab, {
							tabId: "tab2",
							children: "Tab 2"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 183,
							columnNumber: 5
						}, void 0),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tabs.Tab, {
							tabId: "tab3",
							children: "Tab 3"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 184,
							columnNumber: 5
						}, void 0)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 181,
					columnNumber: 4
				}, void 0)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 180,
				columnNumber: 3
			}, void 0);
		};
		Vertical = VerticalTemplate.bind({});
		DisabledTabTemplate = (props) => {
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tabs, {
				...props,
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tabs.TabList, { children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tabs.Tab, {
							tabId: "tab1",
							disabled: true,
							children: "Tab 1"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 196,
							columnNumber: 5
						}, void 0),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tabs.Tab, {
							tabId: "tab2",
							children: "Tab 2"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 199,
							columnNumber: 5
						}, void 0),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tabs.Tab, {
							tabId: "tab3",
							children: "Tab 3"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 200,
							columnNumber: 5
						}, void 0)
					] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 195,
						columnNumber: 4
					}, void 0),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tabs.TabPanel, {
						tabId: "tab1",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Selected tab: Tab 1" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 203,
							columnNumber: 5
						}, void 0)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 202,
						columnNumber: 4
					}, void 0),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tabs.TabPanel, {
						tabId: "tab2",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Selected tab: Tab 2" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 206,
							columnNumber: 5
						}, void 0)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 205,
						columnNumber: 4
					}, void 0),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tabs.TabPanel, {
						tabId: "tab3",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Selected tab: Tab 3" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 209,
							columnNumber: 5
						}, void 0)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 208,
						columnNumber: 4
					}, void 0)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 194,
				columnNumber: 3
			}, void 0);
		};
		DisabledTab = DisabledTabTemplate.bind({});
		WithTabIconsAndTooltipsTemplate = (props) => {
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tabs, {
				...props,
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tabs.TabList, { children: [
						{
							id: "tab1",
							label: "Tab one",
							icon: wordpress_default
						},
						{
							id: "tab2",
							label: "Tab two",
							icon: link_default
						},
						{
							id: "tab3",
							label: "Tab three",
							icon: more_default
						}
					].map(({ id, label, icon }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tooltip, {
						text: label,
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tabs.Tab, {
							tabId: id,
							"aria-label": label,
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { icon }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 239,
								columnNumber: 8
							}, void 0)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 238,
							columnNumber: 7
						}, void 0)
					}, id, false, {
						fileName: _jsxFileName,
						lineNumber: 237,
						columnNumber: 6
					}, void 0)) }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 219,
						columnNumber: 4
					}, void 0),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tabs.TabPanel, {
						tabId: "tab1",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Selected tab: Tab 1" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 245,
							columnNumber: 5
						}, void 0)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 244,
						columnNumber: 4
					}, void 0),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tabs.TabPanel, {
						tabId: "tab2",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Selected tab: Tab 2" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 248,
							columnNumber: 5
						}, void 0)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 247,
						columnNumber: 4
					}, void 0),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tabs.TabPanel, {
						tabId: "tab3",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Selected tab: Tab 3" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 251,
							columnNumber: 5
						}, void 0)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 250,
						columnNumber: 4
					}, void 0)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 218,
				columnNumber: 3
			}, void 0);
		};
		WithTabIconsAndTooltips = WithTabIconsAndTooltipsTemplate.bind({});
		ManualActivation = Template.bind({});
		ManualActivation.args = { selectOnMove: false };
		UsingSlotFillTemplate = (props) => {
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Provider, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tabs, {
				...props,
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tabs.TabList, { children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tabs.Tab, {
						tabId: "tab1",
						children: "Tab 1"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 270,
						columnNumber: 6
					}, void 0),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tabs.Tab, {
						tabId: "tab2",
						children: "Tab 2"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 271,
						columnNumber: 6
					}, void 0),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tabs.Tab, {
						tabId: "tab3",
						children: "Tab 3"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 272,
						columnNumber: 6
					}, void 0)
				] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 269,
					columnNumber: 5
				}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Fill, {
					name: "tabs-are-fun",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tabs.TabPanel, {
							tabId: "tab1",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Selected tab: Tab 1" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 276,
								columnNumber: 7
							}, void 0)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 275,
							columnNumber: 6
						}, void 0),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tabs.TabPanel, {
							tabId: "tab2",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Selected tab: Tab 2" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 279,
								columnNumber: 7
							}, void 0)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 278,
							columnNumber: 6
						}, void 0),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tabs.TabPanel, {
							tabId: "tab3",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Selected tab: Tab 3" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 282,
								columnNumber: 7
							}, void 0)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 281,
							columnNumber: 6
						}, void 0)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 274,
					columnNumber: 5
				}, void 0)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 268,
				columnNumber: 4
			}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				style: {
					border: "2px solid #999",
					width: "300px",
					margin: "20px auto"
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "other stuff" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 293,
						columnNumber: 5
					}, void 0),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "other stuff" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 294,
						columnNumber: 5
					}, void 0),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "this is fun!" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 295,
						columnNumber: 5
					}, void 0),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "other stuff" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 296,
						columnNumber: 5
					}, void 0),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Slot, {
						bubblesVirtually: true,
						as: "div",
						name: "tabs-are-fun"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 297,
						columnNumber: 5
					}, void 0)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 286,
				columnNumber: 4
			}, void 0)] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 267,
				columnNumber: 3
			}, void 0);
		};
		UsingSlotFill = UsingSlotFillTemplate.bind({});
		UsingSlotFill.storyName = "Using SlotFill";
		CloseButtonTemplate = (props) => {
			const [isOpen, setIsOpen] = (0, import_react.useState)(true);
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: isOpen ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				style: {
					width: "400px",
					height: "100vh",
					borderRight: "1px solid #333"
				},
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tabs, {
					...props,
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							style: {
								display: "flex",
								borderBottom: "1px solid #333"
							},
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tabs.TabList, { children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tabs.Tab, {
									tabId: "tab1",
									children: "Tab 1"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 326,
									columnNumber: 9
								}, void 0),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tabs.Tab, {
									tabId: "tab2",
									children: "Tab 2"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 327,
									columnNumber: 9
								}, void 0),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tabs.Tab, {
									tabId: "tab3",
									children: "Tab 3"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 328,
									columnNumber: 9
								}, void 0)
							] }, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 325,
								columnNumber: 8
							}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
								__next40pxDefaultSize: true,
								variant: "tertiary",
								style: {
									marginLeft: "auto",
									alignSelf: "center"
								},
								onClick: () => setIsOpen(false),
								children: "Close Tabs"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 330,
								columnNumber: 8
							}, void 0)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 319,
							columnNumber: 7
						}, void 0),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tabs.TabPanel, {
							tabId: "tab1",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Selected tab: Tab 1" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 343,
								columnNumber: 8
							}, void 0)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 342,
							columnNumber: 7
						}, void 0),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tabs.TabPanel, {
							tabId: "tab2",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Selected tab: Tab 2" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 346,
								columnNumber: 8
							}, void 0)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 345,
							columnNumber: 7
						}, void 0),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tabs.TabPanel, {
							tabId: "tab3",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Selected tab: Tab 3" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 349,
								columnNumber: 8
							}, void 0)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 348,
							columnNumber: 7
						}, void 0)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 318,
					columnNumber: 6
				}, void 0)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 311,
				columnNumber: 5
			}, void 0) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
				__next40pxDefaultSize: true,
				variant: "tertiary",
				onClick: () => setIsOpen(true),
				children: "Open Tabs"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 354,
				columnNumber: 5
			}, void 0) }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 309,
				columnNumber: 3
			}, void 0);
		};
		InsertCustomElements = CloseButtonTemplate.bind({});
		Default.parameters = {
			...Default.parameters,
			docs: {
				...Default.parameters?.docs,
				source: {
					originalSource: "props => {\n  return <Tabs {...props}>\n            <Tabs.TabList>\n                <Tabs.Tab tabId=\"tab1\">Tab 1</Tabs.Tab>\n                <Tabs.Tab tabId=\"tab2\">Tab 2</Tabs.Tab>\n                <Tabs.Tab tabId=\"tab3\">Tab 3</Tabs.Tab>\n            </Tabs.TabList>\n            <Tabs.TabPanel tabId=\"tab1\">\n                <p>Selected tab: Tab 1</p>\n            </Tabs.TabPanel>\n            <Tabs.TabPanel tabId=\"tab2\">\n                <p>Selected tab: Tab 2</p>\n            </Tabs.TabPanel>\n            <Tabs.TabPanel tabId=\"tab3\" focusable={false}>\n                <p>Selected tab: Tab 3</p>\n                <p>\n                    This tabpanel has its <code>focusable</code> prop set to\n                    <code> false</code>, so it won&apos;t get a tab stop.\n                    <br />\n                    Instead, the [Tab] key will move focus to the first\n                    focusable element within the panel.\n                </p>\n                <Button __next40pxDefaultSize variant=\"primary\">\n                    I&apos;m a button!\n                </Button>\n            </Tabs.TabPanel>\n        </Tabs>;\n}",
					...Default.parameters?.docs?.source
				}
			}
		};
		SizeAndOverflowPlayground.parameters = {
			...SizeAndOverflowPlayground.parameters,
			docs: {
				...SizeAndOverflowPlayground.parameters?.docs,
				source: {
					originalSource: "props => {\n  const [fullWidth, setFullWidth] = useState(false);\n  return <div>\n            <div style={{\n      maxWidth: '40rem',\n      marginBottom: '1rem'\n    }}>\n                <p>\n                    This story helps understand how the TabList component\n                    behaves under different conditions. The container below\n                    (with the dotted red border) can be horizontally resized,\n                    and it has a bit of padding to be out of the way of the\n                    TabList.\n                </p>\n                <p>\n                    The button will toggle between full width (adding{' '}\n                    <code>width: 100%</code>) and the default width.\n                </p>\n                <p>Try the following:</p>\n                <ul>\n                    <li>\n                        <strong>Small container</strong> that causes tabs to\n                        overflow with scroll.\n                    </li>\n                    <li>\n                        <strong>Large container</strong> that exceeds the normal\n                        width of the tabs.\n                        <ul>\n                            <li>\n                                <strong>\n                                    With <code>width: 100%</code>\n                                </strong>{' '}\n                                set on the TabList (tabs fill up the space).\n                            </li>\n                            <li>\n                                <strong>\n                                    Without <code>width: 100%</code>\n                                </strong>{' '}\n                                (defaults to <code>auto</code>) set on the\n                                TabList (tabs take up space proportional to\n                                their content).\n                            </li>\n                        </ul>\n                    </li>\n                </ul>\n            </div>\n            <Button __next40pxDefaultSize style={{\n      marginBottom: '1rem'\n    }} variant=\"primary\" onClick={() => setFullWidth(!fullWidth)}>\n                {fullWidth ? 'Remove width: 100% from TabList' : 'Set width: 100% in TabList'}\n            </Button>\n            <Tabs {...props}>\n                <div style={{\n        width: '20rem',\n        border: '2px dotted red',\n        padding: '1rem',\n        resize: 'horizontal',\n        overflow: 'auto'\n      }}>\n                    <Tabs.TabList style={{\n          maxWidth: '100%',\n          width: fullWidth ? '100%' : undefined\n        }}>\n                        <Tabs.Tab tabId=\"tab1\">\n                            Label with multiple words\n                        </Tabs.Tab>\n                        <Tabs.Tab tabId=\"tab2\">Short</Tabs.Tab>\n                        <Tabs.Tab tabId=\"tab3\">\n                            Hippopotomonstrosesquippedaliophobia\n                        </Tabs.Tab>\n                        <Tabs.Tab tabId=\"tab4\">Tab 4</Tabs.Tab>\n                        <Tabs.Tab tabId=\"tab5\">Tab 5</Tabs.Tab>\n                    </Tabs.TabList>\n                </div>\n                <Tabs.TabPanel tabId=\"tab1\">\n                    <p>Selected tab: Tab 1</p>\n                    <p>(Label with multiple words)</p>\n                </Tabs.TabPanel>\n                <Tabs.TabPanel tabId=\"tab2\">\n                    <p>Selected tab: Tab 2</p>\n                    <p>(Short)</p>\n                </Tabs.TabPanel>\n                <Tabs.TabPanel tabId=\"tab3\">\n                    <p>Selected tab: Tab 3</p>\n                    <p>(Hippopotomonstrosesquippedaliophobia)</p>\n                </Tabs.TabPanel>\n                <Tabs.TabPanel tabId=\"tab4\">\n                    <p>Selected tab: Tab 4</p>\n                </Tabs.TabPanel>\n                <Tabs.TabPanel tabId=\"tab5\">\n                    <p>Selected tab: Tab 5</p>\n                </Tabs.TabPanel>\n            </Tabs>\n        </div>;\n}",
					...SizeAndOverflowPlayground.parameters?.docs?.source
				}
			}
		};
		Vertical.parameters = {
			...Vertical.parameters,
			docs: {
				...Vertical.parameters?.docs,
				source: {
					originalSource: "props => {\n  return <Tabs orientation=\"vertical\" {...props}>\n            <Tabs.TabList style={{\n      maxWidth: '10rem'\n    }}>\n                <Tabs.Tab tabId=\"tab1\">Tab 1</Tabs.Tab>\n                <Tabs.Tab tabId=\"tab2\">Tab 2</Tabs.Tab>\n                <Tabs.Tab tabId=\"tab3\">Tab 3</Tabs.Tab>\n            </Tabs.TabList>\n        </Tabs>;\n}",
					...Vertical.parameters?.docs?.source
				}
			}
		};
		DisabledTab.parameters = {
			...DisabledTab.parameters,
			docs: {
				...DisabledTab.parameters?.docs,
				source: {
					originalSource: "props => {\n  return <Tabs {...props}>\n            <Tabs.TabList>\n                <Tabs.Tab tabId=\"tab1\" disabled>\n                    Tab 1\n                </Tabs.Tab>\n                <Tabs.Tab tabId=\"tab2\">Tab 2</Tabs.Tab>\n                <Tabs.Tab tabId=\"tab3\">Tab 3</Tabs.Tab>\n            </Tabs.TabList>\n            <Tabs.TabPanel tabId=\"tab1\">\n                <p>Selected tab: Tab 1</p>\n            </Tabs.TabPanel>\n            <Tabs.TabPanel tabId=\"tab2\">\n                <p>Selected tab: Tab 2</p>\n            </Tabs.TabPanel>\n            <Tabs.TabPanel tabId=\"tab3\">\n                <p>Selected tab: Tab 3</p>\n            </Tabs.TabPanel>\n        </Tabs>;\n}",
					...DisabledTab.parameters?.docs?.source
				}
			}
		};
		WithTabIconsAndTooltips.parameters = {
			...WithTabIconsAndTooltips.parameters,
			docs: {
				...WithTabIconsAndTooltips.parameters?.docs,
				source: {
					originalSource: "props => {\n  return <Tabs {...props}>\n            <Tabs.TabList>\n                {[{\n        id: 'tab1',\n        label: 'Tab one',\n        icon: wordpress\n      }, {\n        id: 'tab2',\n        label: 'Tab two',\n        icon: link\n      }, {\n        id: 'tab3',\n        label: 'Tab three',\n        icon: more\n      }].map(({\n        id,\n        label,\n        icon\n      }) => <Tooltip text={label} key={id}>\n                        <Tabs.Tab tabId={id} aria-label={label}>\n                            <Icon icon={icon} />\n                        </Tabs.Tab>\n                    </Tooltip>)}\n            </Tabs.TabList>\n            <Tabs.TabPanel tabId=\"tab1\">\n                <p>Selected tab: Tab 1</p>\n            </Tabs.TabPanel>\n            <Tabs.TabPanel tabId=\"tab2\">\n                <p>Selected tab: Tab 2</p>\n            </Tabs.TabPanel>\n            <Tabs.TabPanel tabId=\"tab3\">\n                <p>Selected tab: Tab 3</p>\n            </Tabs.TabPanel>\n        </Tabs>;\n}",
					...WithTabIconsAndTooltips.parameters?.docs?.source
				}
			}
		};
		ManualActivation.parameters = {
			...ManualActivation.parameters,
			docs: {
				...ManualActivation.parameters?.docs,
				source: {
					originalSource: "props => {\n  return <Tabs {...props}>\n            <Tabs.TabList>\n                <Tabs.Tab tabId=\"tab1\">Tab 1</Tabs.Tab>\n                <Tabs.Tab tabId=\"tab2\">Tab 2</Tabs.Tab>\n                <Tabs.Tab tabId=\"tab3\">Tab 3</Tabs.Tab>\n            </Tabs.TabList>\n            <Tabs.TabPanel tabId=\"tab1\">\n                <p>Selected tab: Tab 1</p>\n            </Tabs.TabPanel>\n            <Tabs.TabPanel tabId=\"tab2\">\n                <p>Selected tab: Tab 2</p>\n            </Tabs.TabPanel>\n            <Tabs.TabPanel tabId=\"tab3\" focusable={false}>\n                <p>Selected tab: Tab 3</p>\n                <p>\n                    This tabpanel has its <code>focusable</code> prop set to\n                    <code> false</code>, so it won&apos;t get a tab stop.\n                    <br />\n                    Instead, the [Tab] key will move focus to the first\n                    focusable element within the panel.\n                </p>\n                <Button __next40pxDefaultSize variant=\"primary\">\n                    I&apos;m a button!\n                </Button>\n            </Tabs.TabPanel>\n        </Tabs>;\n}",
					...ManualActivation.parameters?.docs?.source
				}
			}
		};
		UsingSlotFill.parameters = {
			...UsingSlotFill.parameters,
			docs: {
				...UsingSlotFill.parameters?.docs,
				source: {
					originalSource: "props => {\n  return <SlotFillProvider>\n            <Tabs {...props}>\n                <Tabs.TabList>\n                    <Tabs.Tab tabId=\"tab1\">Tab 1</Tabs.Tab>\n                    <Tabs.Tab tabId=\"tab2\">Tab 2</Tabs.Tab>\n                    <Tabs.Tab tabId=\"tab3\">Tab 3</Tabs.Tab>\n                </Tabs.TabList>\n                <Fill name=\"tabs-are-fun\">\n                    <Tabs.TabPanel tabId=\"tab1\">\n                        <p>Selected tab: Tab 1</p>\n                    </Tabs.TabPanel>\n                    <Tabs.TabPanel tabId=\"tab2\">\n                        <p>Selected tab: Tab 2</p>\n                    </Tabs.TabPanel>\n                    <Tabs.TabPanel tabId=\"tab3\">\n                        <p>Selected tab: Tab 3</p>\n                    </Tabs.TabPanel>\n                </Fill>\n            </Tabs>\n            <div style={{\n      border: '2px solid #999',\n      width: '300px',\n      margin: '20px auto'\n    }}>\n                <p>other stuff</p>\n                <p>other stuff</p>\n                <p>this is fun!</p>\n                <p>other stuff</p>\n                <Slot bubblesVirtually as=\"div\" name=\"tabs-are-fun\" />\n            </div>\n        </SlotFillProvider>;\n}",
					...UsingSlotFill.parameters?.docs?.source
				}
			}
		};
		InsertCustomElements.parameters = {
			...InsertCustomElements.parameters,
			docs: {
				...InsertCustomElements.parameters?.docs,
				source: {
					originalSource: "props => {\n  const [isOpen, setIsOpen] = useState(true);\n  return <>\n            {isOpen ? <div style={{\n      width: '400px',\n      height: '100vh',\n      borderRight: '1px solid #333'\n    }}>\n                    <Tabs {...props}>\n                        <div style={{\n          display: 'flex',\n          borderBottom: '1px solid #333'\n        }}>\n                            <Tabs.TabList>\n                                <Tabs.Tab tabId=\"tab1\">Tab 1</Tabs.Tab>\n                                <Tabs.Tab tabId=\"tab2\">Tab 2</Tabs.Tab>\n                                <Tabs.Tab tabId=\"tab3\">Tab 3</Tabs.Tab>\n                            </Tabs.TabList>\n                            <Button __next40pxDefaultSize variant=\"tertiary\" style={{\n            marginLeft: 'auto',\n            alignSelf: 'center'\n          }} onClick={() => setIsOpen(false)}>\n                                Close Tabs\n                            </Button>\n                        </div>\n                        <Tabs.TabPanel tabId=\"tab1\">\n                            <p>Selected tab: Tab 1</p>\n                        </Tabs.TabPanel>\n                        <Tabs.TabPanel tabId=\"tab2\">\n                            <p>Selected tab: Tab 2</p>\n                        </Tabs.TabPanel>\n                        <Tabs.TabPanel tabId=\"tab3\">\n                            <p>Selected tab: Tab 3</p>\n                        </Tabs.TabPanel>\n                    </Tabs>\n                </div> : <Button __next40pxDefaultSize variant=\"tertiary\" onClick={() => setIsOpen(true)}>\n                    Open Tabs\n                </Button>}\n        </>;\n}",
					...InsertCustomElements.parameters?.docs?.source
				}
			}
		};
	})))();
}
//#endregion
export { init_index_story as n, index_story_exports as t };
