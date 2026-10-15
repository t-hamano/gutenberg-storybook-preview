import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as useMergeRefs, t as init_use_merge_refs } from "./use-merge-refs-BAtuPB1L.js";
import { o as clsx, s as init_clsx } from "./iframe-D4D-SsYo.js";
import { a as TabsIndicator, c as init_TabsTab, i as init_TabsPanel, l as TabsRoot, n as init_TabsList, o as init_TabsIndicator, r as TabsPanel, s as TabsTab, t as TabsList, u as init_TabsRoot } from "./TabsList-CnDLj6Mq.js";
import { t as chevron_right_default } from "./chevron-right-BwuKPSnZ.js";
import { n as link_default } from "./link-Dzvan7Nf.js";
import { n as more_default } from "./more-6oYR2p9z.js";
import { n as wordpress_default } from "./wordpress-Brhxv8eP.js";
import { n as init_direction_provider, t as DirectionProvider } from "./direction-provider-BY5d0O1J.js";
import { n as init_focus_module, t as focus_module_default } from "./focus.module-CJgaYHb1.js";
import { n as init_global_css_defense_module, t as global_css_defense_module_default } from "./global-css-defense.module-CSCRyOGP.js";
import { n as init_icon, t as Icon } from "./icon-DD-nOZ1R.js";
import { a as Popup, c as init_positioner, i as init_trigger, n as init_root$1, o as init_popup, r as Trigger, s as Positioner, t as Root$1 } from "./root-CVIwsz6N.js";
import { n as useScheduleValidation, t as init_use_schedule_validation } from "./use-schedule-validation-DkkVJP6s.js";
import { r as init_build_module } from "./library.story-DawnfKTW.js";
//#region ../packages/ui/src/tabs/style.module.css
var tablist, indicator, tab, style_module_default;
function init_style_module() {
	return (init_style_module = __esmMin((() => {
		tablist = "_tablist_1qvld_5";
		indicator = "_indicator_1qvld_52";
		tab = "_tab_1qvld_5";
		style_module_default = {
			tablist,
			"is-overflowing-first": "_is-overflowing-first_1qvld_28",
			"is-overflowing-last": "_is-overflowing-last_1qvld_32",
			"is-minimal-variant": "_is-minimal-variant_1qvld_42",
			indicator,
			tab,
			"tab-children": "_tab-children_1qvld_206",
			"tab-chevron": "_tab-chevron_1qvld_221"
		};
	})))();
}
//#endregion
//#region ../packages/ui/src/tabs/list.tsx
var import_jsx_dev_runtime$5, _jsxFileName$5, SCROLL_EPSILON, List;
function init_list() {
	return (init_list = __esmMin((() => {
		init_react();
		init_clsx();
		init_TabsList(), init_TabsIndicator();
		init_use_merge_refs();
		init_style_module();
		import_jsx_dev_runtime$5 = require_jsx_dev_runtime();
		_jsxFileName$5 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/tabs/list.tsx";
		SCROLL_EPSILON = 1;
		List = (0, import_react.forwardRef)(function TabList({ children, variant = "default", className, activateOnFocus, ...otherProps }, forwardedRef) {
			const [listEl, setListEl] = (0, import_react.useState)(null);
			const [overflow, setOverflow] = (0, import_react.useState)({
				first: false,
				last: false,
				isScrolling: false
			});
			(0, import_react.useEffect)(() => {
				if (!listEl) return;
				const measureOverflow = () => {
					const { scrollWidth, clientWidth, scrollLeft } = listEl;
					const maxScroll = Math.max(scrollWidth - clientWidth, 0);
					const scrollFromStart = (listEl.dir || (typeof window !== "undefined" ? window.getComputedStyle(listEl).direction : "ltr")) === "rtl" && scrollLeft < 0 ? -scrollLeft : scrollLeft;
					const next = {
						first: scrollFromStart > SCROLL_EPSILON,
						last: scrollFromStart < maxScroll - SCROLL_EPSILON,
						isScrolling: scrollWidth > clientWidth
					};
					setOverflow((prev) => prev.first === next.first && prev.last === next.last && prev.isScrolling === next.isScrolling ? prev : next);
				};
				const resizeObserver = new ResizeObserver(measureOverflow);
				const observeTabs = () => {
					resizeObserver.disconnect();
					resizeObserver.observe(listEl);
					listEl.querySelectorAll("[role=\"tab\"]").forEach((tab) => resizeObserver.observe(tab));
				};
				const mutationObserver = new MutationObserver(observeTabs);
				mutationObserver.observe(listEl, {
					childList: true,
					subtree: true
				});
				let scrollTick = false;
				const throttleMeasureOverflowOnScroll = () => {
					if (!scrollTick) {
						requestAnimationFrame(() => {
							measureOverflow();
							scrollTick = false;
						});
						scrollTick = true;
					}
				};
				listEl.addEventListener("scroll", throttleMeasureOverflowOnScroll, { passive: true });
				observeTabs();
				measureOverflow();
				return () => {
					listEl.removeEventListener("scroll", throttleMeasureOverflowOnScroll);
					resizeObserver.disconnect();
					mutationObserver.disconnect();
				};
			}, [listEl]);
			const mergedListRef = useMergeRefs([forwardedRef, (el) => setListEl(el)]);
			return /* @__PURE__ */ (0, import_jsx_dev_runtime$5.jsxDEV)(TabsList, {
				ref: mergedListRef,
				activateOnFocus,
				"data-select-on-move": activateOnFocus ? "true" : "false",
				className: clsx(style_module_default.tablist, overflow.first && style_module_default["is-overflowing-first"], overflow.last && style_module_default["is-overflowing-last"], style_module_default[`is-${variant}-variant`], className),
				...otherProps,
				tabIndex: otherProps.tabIndex ?? (overflow.isScrolling ? -1 : void 0),
				children: [children, /* @__PURE__ */ (0, import_jsx_dev_runtime$5.jsxDEV)(TabsIndicator, { className: style_module_default.indicator }, void 0, false, {
					fileName: _jsxFileName$5,
					lineNumber: 145,
					columnNumber: 5
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$5,
				lineNumber: 127,
				columnNumber: 4
			}, this);
		});
		try {
			List.__docgenInfo = {
				"description": "Groups the individual tab buttons.\n\n`Tabs` is a collection of React components that combine to render\nan [ARIA-compliant tabs pattern](https://www.w3.org/WAI/ARIA/apg/patterns/tabs/).",
				"displayName": "List",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/tabs/list.tsx",
				"methods": [],
				"props": {
					"loopFocus": {
						"defaultValue": { "value": "true" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/tabs/list/TabsList.d.mts",
							"name": "TabsListProps"
						}],
						"description": "Whether to loop keyboard focus back to the first item\nwhen the end of the list is reached while using the arrow keys.",
						"name": "loopFocus",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/tabs/list/TabsList.d.mts",
							"name": "TabsListProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"activateOnFocus": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/tabs/list/TabsList.d.mts",
							"name": "TabsListProps"
						}],
						"description": "Whether to automatically change the active tab on arrow key focus.\nOtherwise, tabs will be activated using <kbd>Enter</kbd> or <kbd>Space</kbd> key press.",
						"name": "activateOnFocus",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/tabs/list/TabsList.d.mts",
							"name": "TabsListProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"className": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/utils/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "CSS class name to apply to the element.",
						"name": "className",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"style": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/utils/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "CSS style to apply to the element.",
						"name": "style",
						"required": false,
						"tags": {},
						"type": { "name": "CSSProperties" }
					},
					"render": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/utils/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Replaces the component's default HTML element using a given React\nelement, or a function that returns a React element.",
						"name": "render",
						"required": false,
						"tags": {},
						"type": { "name": "ComponentRenderFn<HTMLAttributesWithRef<any>> | ReactElement<Record<string, unknown>, string | JSXElementConstructor<any>>" }
					},
					"children": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/tabs/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The content to be rendered inside the component.",
						"name": "children",
						"required": false,
						"tags": {},
						"type": { "name": "ReactNode" }
					},
					"variant": {
						"defaultValue": { "value": "default" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/tabs/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The visual variant of the tab list.",
						"name": "variant",
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "\"default\" | \"minimal\"",
							"value": [{ "value": "\"default\"" }, { "value": "\"minimal\"" }]
						}
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/ui/src/tabs/context.tsx
function useRegisterTabDev() {
	const context = (0, import_react.useContext)(TabsValidationContext);
	(0, import_react.useEffect)(() => {
		if (context) return context.registerTab();
	}, [context]);
}
function useRegisterPanelDev() {
	const context = (0, import_react.useContext)(TabsValidationContext);
	(0, import_react.useEffect)(() => {
		if (context) return context.registerPanel();
	}, [context]);
}
/**
* Development-only provider that tracks the number of registered tabs and
* panels, and warns when the counts don't match.
*/
function TabsValidationProviderDev({ children }) {
	const tabCountRef = (0, import_react.useRef)(0);
	const panelCountRef = (0, import_react.useRef)(0);
	const scheduleValidation = useScheduleValidation(() => {
		const tabCount = tabCountRef.current;
		const panelCount = panelCountRef.current;
		if (tabCount !== panelCount) throw new Error(`Tabs: Tab/Panel count mismatch (${tabCount} Tabs, ${panelCount} Panels). Each Tab must be associated with exactly one Panel. Mismatched or missing associations can break screen reader navigation and violate WAI-ARIA Tabs pattern requirements.`);
	});
	const registerTab = (0, import_react.useCallback)(() => {
		tabCountRef.current += 1;
		scheduleValidation();
		return () => {
			tabCountRef.current -= 1;
			scheduleValidation();
		};
	}, [scheduleValidation]);
	const registerPanel = (0, import_react.useCallback)(() => {
		panelCountRef.current += 1;
		scheduleValidation();
		return () => {
			panelCountRef.current -= 1;
			scheduleValidation();
		};
	}, [scheduleValidation]);
	const contextValue = (0, import_react.useMemo)(() => ({
		registerTab,
		registerPanel
	}), [registerTab, registerPanel]);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$4.jsxDEV)(TabsValidationContext.Provider, {
		value: contextValue,
		children
	}, void 0, false, {
		fileName: _jsxFileName$4,
		lineNumber: 125,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime$4, _jsxFileName$4, TabsValidationContext, useRegisterTab, useRegisterPanel, TabsValidationProvider;
function init_context() {
	return (init_context = __esmMin((() => {
		init_react();
		init_use_schedule_validation();
		import_jsx_dev_runtime$4 = require_jsx_dev_runtime();
		_jsxFileName$4 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/tabs/context.tsx";
		TabsValidationContext = (0, import_react.createContext)(null);
		useRegisterTab = useRegisterTabDev;
		useRegisterPanel = useRegisterPanelDev;
		TabsValidationProvider = TabsValidationProviderDev;
		try {
			useRegisterTab.__docgenInfo = {
				"description": "Hook that registers a Tab for count validation in development mode.",
				"displayName": "useRegisterTab",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/tabs/context.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			useRegisterPanel.__docgenInfo = {
				"description": "Hook that registers a Panel for count validation in development mode.",
				"displayName": "useRegisterPanel",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/tabs/context.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			TabsValidationProvider.__docgenInfo = {
				"description": "Provider component that validates the number of tabs matches the number\nof panels in development mode.\n\nIn production, this component is a no-op and just renders children.",
				"displayName": "TabsValidationProvider",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/tabs/context.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/ui/src/tabs/panel.tsx
var import_jsx_dev_runtime$3, _jsxFileName$3, Panel;
function init_panel() {
	return (init_panel = __esmMin((() => {
		init_react();
		init_clsx();
		init_TabsPanel();
		init_context();
		init_global_css_defense_module();
		init_focus_module();
		import_jsx_dev_runtime$3 = require_jsx_dev_runtime();
		_jsxFileName$3 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/tabs/panel.tsx";
		Panel = (0, import_react.forwardRef)(function TabPanel({ className, ...otherProps }, forwardedRef) {
			useRegisterPanel();
			return /* @__PURE__ */ (0, import_jsx_dev_runtime$3.jsxDEV)(TabsPanel, {
				ref: forwardedRef,
				className: clsx(global_css_defense_module_default.div, focus_module_default["outset-ring--focus-visible"], className),
				...otherProps
			}, void 0, false, {
				fileName: _jsxFileName$3,
				lineNumber: 20,
				columnNumber: 4
			}, this);
		});
		try {
			Panel.__docgenInfo = {
				"description": "A panel displayed when the corresponding tab is active.\n\n`Tabs` is a collection of React components that combine to render\nan [ARIA-compliant tabs pattern](https://www.w3.org/WAI/ARIA/apg/patterns/tabs/).",
				"displayName": "Panel",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/tabs/panel.tsx",
				"methods": [],
				"props": {
					"value": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/tabs/panel/TabsPanel.d.mts",
							"name": "TabsPanelProps"
						}],
						"description": "The value of the TabPanel. It will be shown when the Tab with the corresponding value is active.",
						"name": "value",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/tabs/panel/TabsPanel.d.mts",
							"name": "TabsPanelProps"
						},
						"required": true,
						"tags": {},
						"type": { "name": "any" }
					},
					"keepMounted": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/tabs/panel/TabsPanel.d.mts",
							"name": "TabsPanelProps"
						}],
						"description": "Whether to keep the HTML element in the DOM while the panel is hidden.",
						"name": "keepMounted",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/tabs/panel/TabsPanel.d.mts",
							"name": "TabsPanelProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"className": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/utils/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "CSS class name to apply to the element.",
						"name": "className",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"style": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/utils/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "CSS style to apply to the element.",
						"name": "style",
						"required": false,
						"tags": {},
						"type": { "name": "CSSProperties" }
					},
					"render": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/utils/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Replaces the component's default HTML element using a given React\nelement, or a function that returns a React element.",
						"name": "render",
						"required": false,
						"tags": {},
						"type": { "name": "ComponentRenderFn<HTMLAttributesWithRef<any>> | ReactElement<Record<string, unknown>, string | JSXElementConstructor<any>>" }
					},
					"children": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/tabs/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The content to be rendered inside the component.",
						"name": "children",
						"required": false,
						"tags": {},
						"type": { "name": "ReactNode" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/ui/src/tabs/root.tsx
var import_jsx_dev_runtime$2, _jsxFileName$2, Root;
function init_root() {
	return (init_root = __esmMin((() => {
		init_react();
		init_TabsRoot();
		init_context();
		init_direction_provider();
		import_jsx_dev_runtime$2 = require_jsx_dev_runtime();
		_jsxFileName$2 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/tabs/root.tsx";
		Root = (0, import_react.forwardRef)(function TabsRoot$1({ ...otherProps }, forwardedRef) {
			return /* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)(DirectionProvider, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)(TabsValidationProvider, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)(TabsRoot, {
				ref: forwardedRef,
				...otherProps
			}, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 18,
				columnNumber: 6
			}, this) }, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 17,
				columnNumber: 5
			}, this) }, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 16,
				columnNumber: 4
			}, this);
		});
		try {
			Root.__docgenInfo = {
				"description": "Groups the tabs and the corresponding panels.\n\n`Tabs` is a collection of React components that combine to render\nan [ARIA-compliant tabs pattern](https://www.w3.org/WAI/ARIA/apg/patterns/tabs/).",
				"displayName": "Root",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/tabs/root.tsx",
				"methods": [],
				"props": {
					"defaultValue": {
						"defaultValue": { "value": "0" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/tabs/root/TabsRoot.d.mts",
							"name": "TabsRootProps"
						}],
						"description": "The default value. Use when the component is not controlled.\nWhen the value is `null`, no Tab will be active.",
						"name": "defaultValue",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/tabs/root/TabsRoot.d.mts",
							"name": "TabsRootProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "any" }
					},
					"value": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/tabs/root/TabsRoot.d.mts",
							"name": "TabsRootProps"
						}],
						"description": "The value of the currently active `Tab`. Use when the component is controlled.\nWhen the value is `null`, no Tab will be active.",
						"name": "value",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/tabs/root/TabsRoot.d.mts",
							"name": "TabsRootProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "any" }
					},
					"onValueChange": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/tabs/root/TabsRoot.d.mts",
							"name": "TabsRootProps"
						}],
						"description": "Callback invoked when new value is being set.\n\nThe event `reason` is `'none'` for user-initiated changes, such as a click\nor keyboard navigation; `'initial'` for the first automatic selection or\nfallback in uncontrolled roots when `defaultValue` is omitted or\n`undefined`, including when the implicit initial value is disabled or\nmissing; `'disabled'` for automatic fallback when the selected tab becomes\ndisabled in uncontrolled roots; or `'missing'` for automatic fallback when\nthe selected tab is removed, or when an explicit `defaultValue` never\nmatches a mounted tab in uncontrolled roots.\n\nFor automatic changes, the selected value can be `null` when no enabled Tab\nis available as a fallback.\n\nAutomatic changes cannot be canceled; calling `eventDetails.cancel()` for\n`'initial'`, `'disabled'`, or `'missing'` has no effect.",
						"name": "onValueChange",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/tabs/root/TabsRoot.d.mts",
							"name": "TabsRootProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "((value: any, eventDetails: TabsRootChangeEventDetails) => void)" }
					},
					"orientation": {
						"defaultValue": { "value": "'horizontal'" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/tabs/root/TabsRoot.d.mts",
							"name": "TabsRootProps"
						}],
						"description": "The component orientation (layout flow direction).",
						"name": "orientation",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/tabs/root/TabsRoot.d.mts",
							"name": "TabsRootProps"
						},
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "Orientation",
							"value": [{ "value": "\"horizontal\"" }, { "value": "\"vertical\"" }]
						}
					},
					"className": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/utils/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "CSS class name to apply to the element.",
						"name": "className",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"style": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/utils/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "CSS style to apply to the element.",
						"name": "style",
						"required": false,
						"tags": {},
						"type": { "name": "CSSProperties" }
					},
					"render": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/utils/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Replaces the component's default HTML element using a given React\nelement, or a function that returns a React element.",
						"name": "render",
						"required": false,
						"tags": {},
						"type": { "name": "ComponentRenderFn<HTMLAttributesWithRef<any>> | ReactElement<Record<string, unknown>, string | JSXElementConstructor<any>>" }
					},
					"children": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/tabs/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The content to be rendered inside the component.",
						"name": "children",
						"required": false,
						"tags": {},
						"type": { "name": "ReactNode" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/ui/src/tabs/tab.tsx
var import_jsx_dev_runtime$1, _jsxFileName$1, Tab;
function init_tab() {
	return (init_tab = __esmMin((() => {
		init_react();
		init_clsx();
		init_TabsTab();
		init_build_module();
		init_icon();
		init_context();
		init_style_module();
		import_jsx_dev_runtime$1 = require_jsx_dev_runtime();
		_jsxFileName$1 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/tabs/tab.tsx";
		Tab = (0, import_react.forwardRef)(function UnforwardedTab({ className, children, ...otherProps }, forwardedRef) {
			useRegisterTab();
			return /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(TabsTab, {
				ref: forwardedRef,
				className: clsx(style_module_default.tab, className),
				...otherProps,
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)("span", {
					className: style_module_default["tab-children"],
					children
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 29,
					columnNumber: 5
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(Icon, {
					icon: chevron_right_default,
					className: style_module_default["tab-chevron"]
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 30,
					columnNumber: 5
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$1,
				lineNumber: 24,
				columnNumber: 4
			}, this);
		});
		try {
			Tab.__docgenInfo = {
				"description": "An individual interactive tab button that toggles the corresponding panel.\n\n`Tabs` is a collection of React components that combine to render\nan [ARIA-compliant tabs pattern](https://www.w3.org/WAI/ARIA/apg/patterns/tabs/).",
				"displayName": "Tab",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/tabs/tab.tsx",
				"methods": [],
				"props": {
					"disabled": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/tabs/tab/TabsTab.d.mts",
							"name": "TabsTabProps"
						}],
						"description": "Whether the Tab is disabled.\n\nIf a first Tab on a `<Tabs.List>` is disabled, it won't initially be selected.\nInstead, the next enabled Tab will be selected.\nHowever, it does not work like this during server-side rendering, as it is not known\nduring pre-rendering which Tabs are disabled.\nTo work around it, ensure that `defaultValue` or `value` on `<Tabs.Root>` is set to an enabled Tab's value.",
						"name": "disabled",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/tabs/tab/TabsTab.d.mts",
							"name": "TabsTabProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"value": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/tabs/tab/TabsTab.d.mts",
							"name": "TabsTabProps"
						}],
						"description": "The value of the Tab.",
						"name": "value",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/tabs/tab/TabsTab.d.mts",
							"name": "TabsTabProps"
						},
						"required": true,
						"tags": {},
						"type": { "name": "any" }
					},
					"nativeButton": {
						"defaultValue": { "value": "true" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/internals/types.d.mts",
							"name": "NativeButtonProps"
						}],
						"description": "Whether the component renders a native `<button>` element when replacing it\nvia the `render` prop.\nSet to `false` if the rendered element is not a button (for example, `<div>`).",
						"name": "nativeButton",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/internals/types.d.mts",
							"name": "NativeButtonProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"className": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/utils/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "CSS class name to apply to the element.",
						"name": "className",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"style": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/utils/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "CSS style to apply to the element.",
						"name": "style",
						"required": false,
						"tags": {},
						"type": { "name": "CSSProperties" }
					},
					"render": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/utils/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Replaces the component's default HTML element using a given React\nelement, or a function that returns a React element.",
						"name": "render",
						"required": false,
						"tags": {},
						"type": { "name": "ComponentRenderFn<HTMLAttributesWithRef<any>> | ReactElement<Record<string, unknown>, string | JSXElementConstructor<any>>" }
					},
					"children": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/tabs/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The content to be rendered inside the component.",
						"name": "children",
						"required": false,
						"tags": {},
						"type": { "name": "ReactNode" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/ui/src/tabs/stories/index.story.tsx
var import_jsx_dev_runtime, _jsxFileName, meta, ThemedParagraph, Default, Minimal, SizeAndOverflowPlayground, Vertical, WithDisabledTab, LinkIcon, MoreIcon, WordpressIcon, tabWithIconsData, WithTabIconsAndTooltips, WithPanelsAlwaysMounted, WithNonFocusablePanels;
function init_index_story() {
	return (init_index_story = __esmMin((() => {
		init_react();
		init_build_module();
		init_root(), init_list(), init_tab(), init_panel();
		init_root$1(), init_trigger(), init_popup(), init_positioner();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/tabs/stories/index.story.tsx";
		meta = {
			title: "Components/@wordpress-ui/Tabs",
			id: "design-system-components-tabs",
			component: Root,
			tags: ["manifest"],
			subcomponents: {
				"Tabs.List": List,
				"Tabs.Tab": Tab,
				"Tabs.Panel": Panel
			},
			parameters: { componentStatus: {
				status: "recommended",
				whereUsed: "global"
			} }
		};
		ThemedParagraph = ({ children }) => {
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
				style: { color: "var(--wpds-color-foreground-content-neutral, #1e1e1e)" },
				children
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 28,
				columnNumber: 3
			}, void 0);
		};
		Default = { args: {
			defaultValue: "tab1",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(List, { children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tab, {
						value: "tab1",
						children: "Tab 1"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 43,
						columnNumber: 5
					}, void 0),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tab, {
						value: "tab2",
						children: "Tab 2"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 44,
						columnNumber: 5
					}, void 0),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tab, {
						value: "tab3",
						children: "Tab 3"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 45,
						columnNumber: 5
					}, void 0)
				] }, "list", true, {
					fileName: _jsxFileName,
					lineNumber: 42,
					columnNumber: 4
				}, void 0),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Panel, {
					value: "tab1",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ThemedParagraph, { children: "Selected tab: Tab 1" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 48,
						columnNumber: 5
					}, void 0)
				}, "panel-tab1", false, {
					fileName: _jsxFileName,
					lineNumber: 47,
					columnNumber: 4
				}, void 0),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Panel, {
					value: "tab2",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ThemedParagraph, { children: "Selected tab: Tab 2" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 51,
						columnNumber: 5
					}, void 0)
				}, "panel-tab2", false, {
					fileName: _jsxFileName,
					lineNumber: 50,
					columnNumber: 4
				}, void 0),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Panel, {
					value: "tab3",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ThemedParagraph, { children: "Selected tab: Tab 3" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 54,
						columnNumber: 5
					}, void 0)
				}, "panel-tab3", false, {
					fileName: _jsxFileName,
					lineNumber: 53,
					columnNumber: 4
				}, void 0)
			]
		} };
		Minimal = { args: {
			...Default.args,
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(List, {
					variant: "minimal",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tab, {
							value: "tab1",
							children: "Tab 1"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 65,
							columnNumber: 5
						}, void 0),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tab, {
							value: "tab2",
							children: "Tab 2"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 66,
							columnNumber: 5
						}, void 0),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tab, {
							value: "tab3",
							children: "Tab 3"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 67,
							columnNumber: 5
						}, void 0)
					]
				}, "list", true, {
					fileName: _jsxFileName,
					lineNumber: 64,
					columnNumber: 4
				}, void 0),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Panel, {
					value: "tab1",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ThemedParagraph, { children: "Selected tab: Tab 1" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 70,
						columnNumber: 5
					}, void 0)
				}, "panel-tab1", false, {
					fileName: _jsxFileName,
					lineNumber: 69,
					columnNumber: 4
				}, void 0),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Panel, {
					value: "tab2",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ThemedParagraph, { children: "Selected tab: Tab 2" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 73,
						columnNumber: 5
					}, void 0)
				}, "panel-tab2", false, {
					fileName: _jsxFileName,
					lineNumber: 72,
					columnNumber: 4
				}, void 0),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Panel, {
					value: "tab3",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ThemedParagraph, { children: "Selected tab: Tab 3" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 76,
						columnNumber: 5
					}, void 0)
				}, "panel-tab3", false, {
					fileName: _jsxFileName,
					lineNumber: 75,
					columnNumber: 4
				}, void 0)
			]
		} };
		SizeAndOverflowPlayground = {
			render: function SizeAndOverflowPlaygroundRender(props) {
				const [fullWidth, setFullWidth] = (0, import_react.useState)(false);
				return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						style: {
							maxWidth: "40rem",
							marginBottom: "1rem",
							color: "var(--wpds-color-foreground-content-neutral, #1e1e1e)"
						},
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "This story helps understand how the TabList component behaves under different conditions. The container below (with the dotted red border) can be horizontally resized, and it has a bit of padding to be out of the way of the TabList." }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 94,
								columnNumber: 6
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
								"The button will toggle between full width (adding",
								" ",
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("code", { children: "width: 100%" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 103,
									columnNumber: 7
								}, this),
								") and the default width."
							] }, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 101,
								columnNumber: 6
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Try the following:" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 105,
								columnNumber: 6
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: "Small container" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 108,
								columnNumber: 8
							}, this), " that causes tabs to overflow with scroll."] }, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 107,
								columnNumber: 7
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: "Large container" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 112,
									columnNumber: 8
								}, this),
								" that exceeds the normal width of the tabs.",
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: ["With ", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("code", { children: "width: 100%" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 117,
										columnNumber: 16
									}, this)] }, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 116,
										columnNumber: 10
									}, this),
									" ",
									"set on the TabList (tabs fill up the space)."
								] }, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 115,
									columnNumber: 9
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: ["Without ", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("code", { children: "width: 100%" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 123,
										columnNumber: 19
									}, this)] }, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 122,
										columnNumber: 10
									}, this),
									" ",
									"(defaults to ",
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("code", { children: "auto" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 125,
										columnNumber: 23
									}, this),
									") set on the TabList (tabs take up space proportional to their content)."
								] }, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 121,
									columnNumber: 9
								}, this)] }, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 114,
									columnNumber: 8
								}, this)
							] }, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 111,
								columnNumber: 7
							}, this)] }, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 106,
								columnNumber: 6
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 87,
						columnNumber: 5
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
						style: { marginBottom: "1rem" },
						onClick: () => setFullWidth(!fullWidth),
						children: fullWidth ? "Remove width: 100% from TabList" : "Set width: 100% in TabList"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 133,
						columnNumber: 5
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Root, {
						...props,
						style: {
							...props.style,
							width: "20rem",
							border: "2px dotted red",
							padding: "1rem",
							resize: "horizontal",
							overflow: "auto"
						},
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(List, {
								style: {
									maxWidth: "100%",
									width: fullWidth ? "100%" : void 0
								},
								children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tab, {
										value: "tab1",
										children: "Label with multiple words"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 158,
										columnNumber: 7
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tab, {
										value: "tab2",
										children: "Short"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 161,
										columnNumber: 7
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tab, {
										value: "tab3",
										children: "Hippopotomonstrosesquippedaliophobia"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 162,
										columnNumber: 7
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tab, {
										value: "tab4",
										children: "Tab 4"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 165,
										columnNumber: 7
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tab, {
										value: "tab5",
										children: "Tab 5"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 166,
										columnNumber: 7
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 152,
								columnNumber: 6
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Panel, {
								value: "tab1",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ThemedParagraph, { children: "Selected tab: Tab 1" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 170,
									columnNumber: 7
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ThemedParagraph, { children: "(Label with multiple words)" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 171,
									columnNumber: 7
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 169,
								columnNumber: 6
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Panel, {
								value: "tab2",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ThemedParagraph, { children: "Selected tab: Tab 2" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 176,
									columnNumber: 7
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ThemedParagraph, { children: "(Short)" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 177,
									columnNumber: 7
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 175,
								columnNumber: 6
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Panel, {
								value: "tab3",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ThemedParagraph, { children: "Selected tab: Tab 3" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 180,
									columnNumber: 7
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ThemedParagraph, { children: "(Hippopotomonstrosesquippedaliophobia)" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 181,
									columnNumber: 7
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 179,
								columnNumber: 6
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Panel, {
								value: "tab4",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ThemedParagraph, { children: "Selected tab: Tab 4" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 186,
									columnNumber: 7
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 185,
								columnNumber: 6
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Panel, {
								value: "tab5",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ThemedParagraph, { children: "Selected tab: Tab 5" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 189,
									columnNumber: 7
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 188,
								columnNumber: 6
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 141,
						columnNumber: 5
					}, this)
				] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 86,
					columnNumber: 4
				}, this);
			},
			args: {
				...Default.args,
				defaultValue: "tab4"
			}
		};
		Vertical = { args: {
			...Default.args,
			orientation: "vertical",
			style: {
				minWidth: "320px",
				display: "grid",
				gridTemplateColumns: "120px 1fr",
				gap: "24px"
			}
		} };
		WithDisabledTab = { args: {
			...Default.args,
			defaultValue: "tab3",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(List, { children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tab, {
						value: "tab1",
						disabled: true,
						children: "Tab 1"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 220,
						columnNumber: 5
					}, void 0),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tab, {
						value: "tab2",
						children: "Tab 2"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 223,
						columnNumber: 5
					}, void 0),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tab, {
						value: "tab3",
						children: "Tab 3"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 224,
						columnNumber: 5
					}, void 0)
				] }, "list", true, {
					fileName: _jsxFileName,
					lineNumber: 219,
					columnNumber: 4
				}, void 0),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Panel, {
					value: "tab1",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ThemedParagraph, { children: "Selected tab: Tab 1" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 227,
						columnNumber: 5
					}, void 0)
				}, "panel-tab1", false, {
					fileName: _jsxFileName,
					lineNumber: 226,
					columnNumber: 4
				}, void 0),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Panel, {
					value: "tab2",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ThemedParagraph, { children: "Selected tab: Tab 2" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 230,
						columnNumber: 5
					}, void 0)
				}, "panel-tab2", false, {
					fileName: _jsxFileName,
					lineNumber: 229,
					columnNumber: 4
				}, void 0),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Panel, {
					value: "tab3",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ThemedParagraph, { children: "Selected tab: Tab 3" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 233,
						columnNumber: 5
					}, void 0)
				}, "panel-tab3", false, {
					fileName: _jsxFileName,
					lineNumber: 232,
					columnNumber: 4
				}, void 0)
			]
		} };
		LinkIcon = (props) => {
			return (0, import_react.cloneElement)(link_default, props);
		};
		MoreIcon = (props) => {
			return (0, import_react.cloneElement)(more_default, props);
		};
		WordpressIcon = (props) => {
			return (0, import_react.cloneElement)(wordpress_default, props);
		};
		tabWithIconsData = [
			{
				value: "tab1",
				label: "Tab one",
				icon: WordpressIcon
			},
			{
				value: "tab2",
				label: "Tab two",
				icon: LinkIcon
			},
			{
				value: "tab3",
				label: "Tab three",
				icon: MoreIcon
			}
		];
		WithTabIconsAndTooltips = { args: {
			...Default.args,
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(List, { children: tabWithIconsData.map(({ value, label, icon: Icon }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Root$1, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trigger, {
				"aria-label": label,
				render: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tab, { value }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 278,
					columnNumber: 17
				}, void 0),
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { style: {
					width: "20px",
					height: "20px"
				} }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 281,
					columnNumber: 8
				}, void 0)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 276,
				columnNumber: 7
			}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Popup, {
				positioner: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Positioner, {
					align: "center",
					side: "top"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 290,
					columnNumber: 9
				}, void 0),
				children: label
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 288,
				columnNumber: 7
			}, void 0)] }, value, true, {
				fileName: _jsxFileName,
				lineNumber: 275,
				columnNumber: 6
			}, void 0)) }, "list", false, {
				fileName: _jsxFileName,
				lineNumber: 273,
				columnNumber: 4
			}, void 0), tabWithIconsData.map(({ value, label }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Panel, {
				value,
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ThemedParagraph, { children: ["Selected tab: ", label] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 300,
					columnNumber: 6
				}, void 0)
			}, value, false, {
				fileName: _jsxFileName,
				lineNumber: 299,
				columnNumber: 5
			}, void 0))]
		} };
		WithPanelsAlwaysMounted = { args: {
			...Default.args,
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(List, { children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tab, {
						value: "tab1",
						children: "Tab 1"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 312,
						columnNumber: 5
					}, void 0),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tab, {
						value: "tab2",
						children: "Tab 2"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 313,
						columnNumber: 5
					}, void 0),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tab, {
						value: "tab3",
						children: "Tab 3"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 314,
						columnNumber: 5
					}, void 0)
				] }, "list", true, {
					fileName: _jsxFileName,
					lineNumber: 311,
					columnNumber: 4
				}, void 0),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Panel, {
					value: "tab1",
					keepMounted: true,
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ThemedParagraph, { children: "Selected tab: Tab 1" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 317,
						columnNumber: 5
					}, void 0)
				}, "panel-tab1", false, {
					fileName: _jsxFileName,
					lineNumber: 316,
					columnNumber: 4
				}, void 0),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Panel, {
					value: "tab2",
					keepMounted: true,
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ThemedParagraph, { children: "Selected tab: Tab 2" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 320,
						columnNumber: 5
					}, void 0)
				}, "panel-tab2", false, {
					fileName: _jsxFileName,
					lineNumber: 319,
					columnNumber: 4
				}, void 0),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Panel, {
					value: "tab3",
					keepMounted: true,
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ThemedParagraph, { children: "Selected tab: Tab 3" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 323,
						columnNumber: 5
					}, void 0)
				}, "panel-tab3", false, {
					fileName: _jsxFileName,
					lineNumber: 322,
					columnNumber: 4
				}, void 0)
			]
		} };
		WithNonFocusablePanels = { args: {
			...Default.args,
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(List, { children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tab, {
						value: "tab1",
						children: "Tab 1"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 334,
						columnNumber: 5
					}, void 0),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tab, {
						value: "tab2",
						children: "Tab 2"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 335,
						columnNumber: 5
					}, void 0),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tab, {
						value: "tab3",
						children: "Tab 3"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 336,
						columnNumber: 5
					}, void 0)
				] }, "list", true, {
					fileName: _jsxFileName,
					lineNumber: 333,
					columnNumber: 4
				}, void 0),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Panel, {
					value: "tab1",
					tabIndex: -1,
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ThemedParagraph, { children: "Selected tab: Tab 1" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 339,
							columnNumber: 5
						}, void 0),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ThemedParagraph, { children: "This tabpanel is not focusable, therefore tabbing into it will focus its first tabbable child." }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 340,
							columnNumber: 5
						}, void 0),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { children: "Focus me" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 344,
							columnNumber: 5
						}, void 0)
					]
				}, "panel-tab1", true, {
					fileName: _jsxFileName,
					lineNumber: 338,
					columnNumber: 4
				}, void 0),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Panel, {
					value: "tab2",
					tabIndex: -1,
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ThemedParagraph, { children: "Selected tab: Tab 2" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 347,
							columnNumber: 5
						}, void 0),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ThemedParagraph, { children: "This tabpanel is not focusable, therefore tabbing into it will focus its first tabbable child." }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 348,
							columnNumber: 5
						}, void 0),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { children: "Focus me" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 352,
							columnNumber: 5
						}, void 0)
					]
				}, "panel-tab2", true, {
					fileName: _jsxFileName,
					lineNumber: 346,
					columnNumber: 4
				}, void 0),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Panel, {
					value: "tab3",
					tabIndex: -1,
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ThemedParagraph, { children: "Selected tab: Tab 3" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 355,
							columnNumber: 5
						}, void 0),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ThemedParagraph, { children: "This tabpanel is not focusable, therefore tabbing into it will focus its first tabbable child." }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 356,
							columnNumber: 5
						}, void 0),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { children: "Focus me" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 360,
							columnNumber: 5
						}, void 0)
					]
				}, "panel-tab3", true, {
					fileName: _jsxFileName,
					lineNumber: 354,
					columnNumber: 4
				}, void 0)
			]
		} };
		Default.parameters = {
			...Default.parameters,
			docs: {
				...Default.parameters?.docs,
				source: {
					originalSource: "{\n  args: {\n    defaultValue: 'tab1',\n    children: [<Tabs.List key=\"list\">\n                <Tabs.Tab value=\"tab1\">Tab 1</Tabs.Tab>\n                <Tabs.Tab value=\"tab2\">Tab 2</Tabs.Tab>\n                <Tabs.Tab value=\"tab3\">Tab 3</Tabs.Tab>\n            </Tabs.List>, <Tabs.Panel value=\"tab1\" key=\"panel-tab1\">\n                <ThemedParagraph>Selected tab: Tab 1</ThemedParagraph>\n            </Tabs.Panel>, <Tabs.Panel value=\"tab2\" key=\"panel-tab2\">\n                <ThemedParagraph>Selected tab: Tab 2</ThemedParagraph>\n            </Tabs.Panel>, <Tabs.Panel value=\"tab3\" key=\"panel-tab3\">\n                <ThemedParagraph>Selected tab: Tab 3</ThemedParagraph>\n            </Tabs.Panel>]\n  }\n}",
					...Default.parameters?.docs?.source
				}
			}
		};
		Minimal.parameters = {
			...Minimal.parameters,
			docs: {
				...Minimal.parameters?.docs,
				source: {
					originalSource: "{\n  args: {\n    ...Default.args,\n    children: [<Tabs.List variant=\"minimal\" key=\"list\">\n                <Tabs.Tab value=\"tab1\">Tab 1</Tabs.Tab>\n                <Tabs.Tab value=\"tab2\">Tab 2</Tabs.Tab>\n                <Tabs.Tab value=\"tab3\">Tab 3</Tabs.Tab>\n            </Tabs.List>, <Tabs.Panel value=\"tab1\" key=\"panel-tab1\">\n                <ThemedParagraph>Selected tab: Tab 1</ThemedParagraph>\n            </Tabs.Panel>, <Tabs.Panel value=\"tab2\" key=\"panel-tab2\">\n                <ThemedParagraph>Selected tab: Tab 2</ThemedParagraph>\n            </Tabs.Panel>, <Tabs.Panel value=\"tab3\" key=\"panel-tab3\">\n                <ThemedParagraph>Selected tab: Tab 3</ThemedParagraph>\n            </Tabs.Panel>]\n  }\n}",
					...Minimal.parameters?.docs?.source
				}
			}
		};
		SizeAndOverflowPlayground.parameters = {
			...SizeAndOverflowPlayground.parameters,
			docs: {
				...SizeAndOverflowPlayground.parameters?.docs,
				source: {
					originalSource: "{\n  render: function SizeAndOverflowPlaygroundRender(props) {\n    const [fullWidth, setFullWidth] = useState(false);\n    return <div>\n                <div style={{\n        maxWidth: '40rem',\n        marginBottom: '1rem',\n        color: 'var( --wpds-color-foreground-content-neutral )'\n      }}>\n                    <p>\n                        This story helps understand how the TabList component\n                        behaves under different conditions. The container below\n                        (with the dotted red border) can be horizontally\n                        resized, and it has a bit of padding to be out of the\n                        way of the TabList.\n                    </p>\n                    <p>\n                        The button will toggle between full width (adding{' '}\n                        <code>width: 100%</code>) and the default width.\n                    </p>\n                    <p>Try the following:</p>\n                    <ul>\n                        <li>\n                            <strong>Small container</strong> that causes tabs to\n                            overflow with scroll.\n                        </li>\n                        <li>\n                            <strong>Large container</strong> that exceeds the\n                            normal width of the tabs.\n                            <ul>\n                                <li>\n                                    <strong>\n                                        With <code>width: 100%</code>\n                                    </strong>{' '}\n                                    set on the TabList (tabs fill up the space).\n                                </li>\n                                <li>\n                                    <strong>\n                                        Without <code>width: 100%</code>\n                                    </strong>{' '}\n                                    (defaults to <code>auto</code>) set on the\n                                    TabList (tabs take up space proportional to\n                                    their content).\n                                </li>\n                            </ul>\n                        </li>\n                    </ul>\n                </div>\n                <button style={{\n        marginBottom: '1rem'\n      }} onClick={() => setFullWidth(!fullWidth)}>\n                    {fullWidth ? 'Remove width: 100% from TabList' : 'Set width: 100% in TabList'}\n                </button>\n                <Tabs.Root {...props} style={{\n        ...props.style,\n        width: '20rem',\n        border: '2px dotted red',\n        padding: '1rem',\n        resize: 'horizontal',\n        overflow: 'auto'\n      }}>\n                    <Tabs.List style={{\n          maxWidth: '100%',\n          width: fullWidth ? '100%' : undefined\n        }}>\n                        <Tabs.Tab value=\"tab1\">\n                            Label with multiple words\n                        </Tabs.Tab>\n                        <Tabs.Tab value=\"tab2\">Short</Tabs.Tab>\n                        <Tabs.Tab value=\"tab3\">\n                            Hippopotomonstrosesquippedaliophobia\n                        </Tabs.Tab>\n                        <Tabs.Tab value=\"tab4\">Tab 4</Tabs.Tab>\n                        <Tabs.Tab value=\"tab5\">Tab 5</Tabs.Tab>\n                    </Tabs.List>\n\n                    <Tabs.Panel value=\"tab1\">\n                        <ThemedParagraph>Selected tab: Tab 1</ThemedParagraph>\n                        <ThemedParagraph>\n                            (Label with multiple words)\n                        </ThemedParagraph>\n                    </Tabs.Panel>\n                    <Tabs.Panel value=\"tab2\">\n                        <ThemedParagraph>Selected tab: Tab 2</ThemedParagraph>\n                        <ThemedParagraph>(Short)</ThemedParagraph>\n                    </Tabs.Panel>\n                    <Tabs.Panel value=\"tab3\">\n                        <ThemedParagraph>Selected tab: Tab 3</ThemedParagraph>\n                        <ThemedParagraph>\n                            (Hippopotomonstrosesquippedaliophobia)\n                        </ThemedParagraph>\n                    </Tabs.Panel>\n                    <Tabs.Panel value=\"tab4\">\n                        <ThemedParagraph>Selected tab: Tab 4</ThemedParagraph>\n                    </Tabs.Panel>\n                    <Tabs.Panel value=\"tab5\">\n                        <ThemedParagraph>Selected tab: Tab 5</ThemedParagraph>\n                    </Tabs.Panel>\n                </Tabs.Root>\n            </div>;\n  },\n  args: {\n    ...Default.args,\n    defaultValue: 'tab4'\n  }\n}",
					...SizeAndOverflowPlayground.parameters?.docs?.source
				}
			}
		};
		Vertical.parameters = {
			...Vertical.parameters,
			docs: {
				...Vertical.parameters?.docs,
				source: {
					originalSource: "{\n  args: {\n    ...Default.args,\n    orientation: 'vertical',\n    style: {\n      minWidth: '320px',\n      display: 'grid',\n      gridTemplateColumns: '120px 1fr',\n      gap: '24px'\n    }\n  }\n}",
					...Vertical.parameters?.docs?.source
				}
			}
		};
		WithDisabledTab.parameters = {
			...WithDisabledTab.parameters,
			docs: {
				...WithDisabledTab.parameters?.docs,
				source: {
					originalSource: "{\n  args: {\n    ...Default.args,\n    defaultValue: 'tab3',\n    children: [<Tabs.List key=\"list\">\n                <Tabs.Tab value=\"tab1\" disabled>\n                    Tab 1\n                </Tabs.Tab>\n                <Tabs.Tab value=\"tab2\">Tab 2</Tabs.Tab>\n                <Tabs.Tab value=\"tab3\">Tab 3</Tabs.Tab>\n            </Tabs.List>, <Tabs.Panel value=\"tab1\" key=\"panel-tab1\">\n                <ThemedParagraph>Selected tab: Tab 1</ThemedParagraph>\n            </Tabs.Panel>, <Tabs.Panel value=\"tab2\" key=\"panel-tab2\">\n                <ThemedParagraph>Selected tab: Tab 2</ThemedParagraph>\n            </Tabs.Panel>, <Tabs.Panel value=\"tab3\" key=\"panel-tab3\">\n                <ThemedParagraph>Selected tab: Tab 3</ThemedParagraph>\n            </Tabs.Panel>]\n  }\n}",
					...WithDisabledTab.parameters?.docs?.source
				}
			}
		};
		WithTabIconsAndTooltips.parameters = {
			...WithTabIconsAndTooltips.parameters,
			docs: {
				...WithTabIconsAndTooltips.parameters?.docs,
				source: {
					originalSource: "{\n  args: {\n    ...Default.args,\n    children: [<Tabs.List key=\"list\">\n                {tabWithIconsData.map(({\n        value,\n        label,\n        icon: Icon\n      }) => <Tooltip.Root key={value}>\n                        <Tooltip.Trigger aria-label={label} render={<Tabs.Tab value={value} />}>\n                            {/* TODO: potentially refactor with new Icon component */}\n                            <Icon style={{\n            width: '20px',\n            height: '20px'\n          }} />\n                        </Tooltip.Trigger>\n                        <Tooltip.Popup positioner={<Tooltip.Positioner align=\"center\" side=\"top\" />}>\n                            {label}\n                        </Tooltip.Popup>\n                    </Tooltip.Root>)}\n            </Tabs.List>, tabWithIconsData.map(({\n      value,\n      label\n    }) => <Tabs.Panel value={value} key={value}>\n                    <ThemedParagraph>Selected tab: {label}</ThemedParagraph>\n                </Tabs.Panel>)]\n  }\n}",
					...WithTabIconsAndTooltips.parameters?.docs?.source
				}
			}
		};
		WithPanelsAlwaysMounted.parameters = {
			...WithPanelsAlwaysMounted.parameters,
			docs: {
				...WithPanelsAlwaysMounted.parameters?.docs,
				source: {
					originalSource: "{\n  args: {\n    ...Default.args,\n    children: [<Tabs.List key=\"list\">\n                <Tabs.Tab value=\"tab1\">Tab 1</Tabs.Tab>\n                <Tabs.Tab value=\"tab2\">Tab 2</Tabs.Tab>\n                <Tabs.Tab value=\"tab3\">Tab 3</Tabs.Tab>\n            </Tabs.List>, <Tabs.Panel value=\"tab1\" keepMounted key=\"panel-tab1\">\n                <ThemedParagraph>Selected tab: Tab 1</ThemedParagraph>\n            </Tabs.Panel>, <Tabs.Panel value=\"tab2\" keepMounted key=\"panel-tab2\">\n                <ThemedParagraph>Selected tab: Tab 2</ThemedParagraph>\n            </Tabs.Panel>, <Tabs.Panel value=\"tab3\" keepMounted key=\"panel-tab3\">\n                <ThemedParagraph>Selected tab: Tab 3</ThemedParagraph>\n            </Tabs.Panel>]\n  }\n}",
					...WithPanelsAlwaysMounted.parameters?.docs?.source
				}
			}
		};
		WithNonFocusablePanels.parameters = {
			...WithNonFocusablePanels.parameters,
			docs: {
				...WithNonFocusablePanels.parameters?.docs,
				source: {
					originalSource: "{\n  args: {\n    ...Default.args,\n    children: [<Tabs.List key=\"list\">\n                <Tabs.Tab value=\"tab1\">Tab 1</Tabs.Tab>\n                <Tabs.Tab value=\"tab2\">Tab 2</Tabs.Tab>\n                <Tabs.Tab value=\"tab3\">Tab 3</Tabs.Tab>\n            </Tabs.List>, <Tabs.Panel value=\"tab1\" tabIndex={-1} key=\"panel-tab1\">\n                <ThemedParagraph>Selected tab: Tab 1</ThemedParagraph>\n                <ThemedParagraph>\n                    This tabpanel is not focusable, therefore tabbing into it\n                    will focus its first tabbable child.\n                </ThemedParagraph>\n                <button>Focus me</button>\n            </Tabs.Panel>, <Tabs.Panel value=\"tab2\" tabIndex={-1} key=\"panel-tab2\">\n                <ThemedParagraph>Selected tab: Tab 2</ThemedParagraph>\n                <ThemedParagraph>\n                    This tabpanel is not focusable, therefore tabbing into it\n                    will focus its first tabbable child.\n                </ThemedParagraph>\n                <button>Focus me</button>\n            </Tabs.Panel>, <Tabs.Panel value=\"tab3\" tabIndex={-1} key=\"panel-tab3\">\n                <ThemedParagraph>Selected tab: Tab 3</ThemedParagraph>\n                <ThemedParagraph>\n                    This tabpanel is not focusable, therefore tabbing into it\n                    will focus its first tabbable child.\n                </ThemedParagraph>\n                <button>Focus me</button>\n            </Tabs.Panel>]\n  }\n}",
					...WithNonFocusablePanels.parameters?.docs?.source
				}
			}
		};
	})))();
}
//#endregion
init_index_story();
export { Default, Minimal, SizeAndOverflowPlayground, Vertical, WithDisabledTab, WithNonFocusablePanels, WithPanelsAlwaysMounted, WithTabIconsAndTooltips, meta as default };
