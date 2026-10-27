import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as useMergeRefs, t as init_use_merge_refs } from "./use-merge-refs-BAtuPB1L.js";
import { n as use_isomorphic_layout_effect_default, t as init_use_isomorphic_layout_effect } from "./use-isomorphic-layout-effect-XEh9CxbX.js";
import { n as sprintf } from "./sprintf-_uhhbfMc.js";
import { n as __, r as _n, t as init_build_module } from "./build-module-v04us4E2.js";
import { a as init_clsx, i as clsx } from "./iframe-UtSZlYID.js";
import { i as init_mergeProps, o as mergeProps } from "./useRenderElement-Dkv6YH0v.js";
import { n as useRender, t as init_useRender } from "./useRender-JXgJ-9ZS.js";
import { n as init_build_module$1, t as inertValue } from "./build-module-DRvOo7DC.js";
import { n as resets_module_default, t as init_resets_module } from "./resets.module-CJil9Bz6.js";
import { n as init_focus_module, t as focus_module_default } from "./focus.module-CJgaYHb1.js";
import { n as init_global_css_defense_module, t as global_css_defense_module_default } from "./global-css-defense.module-BTDDc07p.js";
import { n as init_button, t as Button } from "./button--ei7vTao.js";
import { a as Popup, i as init_trigger, n as init_root$1, o as init_popup, r as Trigger, t as Root$1 } from "./root-CKrUEL-b.js";
import { a as Popup$1, d as Item$1, g as init_item_label, h as ItemLabel, i as init_root$2, n as init_trigger$1, o as init_popup$1, p as init_item$1, r as Root$2, t as Trigger$1 } from "./trigger-jkwMiEd_.js";
import { n as init_link_item$1, t as LinkItem$1 } from "./link-item-DSq6Z-QF.js";
import { n as init_link, t as Link } from "./link-DqJvnB9G.js";
//#region ../packages/ui/src/breadcrumb/context.tsx
function useBreadcrumbItemRenderContext() {
	const context = (0, import_react.useContext)(BreadcrumbItemRenderContext);
	if (!context) throw new Error("Breadcrumb: <Breadcrumb.LinkItem>, <Breadcrumb.ButtonItem>, and <Breadcrumb.CurrentItem> must be direct children of <Breadcrumb.Root>.");
	return context ?? {
		itemKey: "",
		variant: "navigation",
		measurementVersion: 0,
		mode: "visible",
		onLinkBlur: () => {},
		onLinkFocus: () => {},
		showSeparator: false,
		shouldTruncateCurrent: false
	};
}
var BreadcrumbItemRenderContext;
function init_context() {
	return (init_context = __esmMin((() => {
		init_react();
		BreadcrumbItemRenderContext = (0, import_react.createContext)(null);
	})))();
}
//#endregion
//#region ../packages/ui/src/breadcrumb/enforce-render-props.ts
function enforceRenderProps(render, props) {
	if (!render) return;
	const enforce = (element) => (0, import_react.cloneElement)(element, props);
	if (typeof render === "function") {
		const renderFunction = render;
		return ((...args) => enforce(renderFunction(...args)));
	}
	return enforce(render);
}
function init_enforce_render_props() {
	return (init_enforce_render_props = __esmMin((() => {
		init_react();
	})))();
}
//#endregion
//#region ../packages/ui/src/breadcrumb/style.module.css
var root, list, item, label, link, current, separator, measurement, style_module_default;
function init_style_module() {
	return (init_style_module = __esmMin((() => {
		root = "_root_2iz57_5";
		list = "_list_2iz57_12";
		item = "_item_2iz57_29";
		label = "_label_2iz57_36";
		link = "_link_2iz57_44";
		current = "_current_2iz57_52";
		separator = "_separator_2iz57_75";
		measurement = "_measurement_2iz57_86";
		style_module_default = {
			root,
			list,
			item,
			label,
			link,
			"current-item": "_current-item_2iz57_52",
			"current-item--truncating": "_current-item--truncating_2iz57_56",
			current,
			"button-item": "_button-item_2iz57_70",
			separator,
			measurement,
			"measurement-row": "_measurement-row_2iz57_97",
			"measurement-item": "_measurement-item_2iz57_98",
			"measurement-content": "_measurement-content_2iz57_99",
			"measurement-label": "_measurement-label_2iz57_105",
			"measurement-overflow-trigger": "_measurement-overflow-trigger_2iz57_112",
			"overflow-trigger": "_overflow-trigger_2iz57_126"
		};
	})))();
}
//#endregion
//#region ../packages/ui/src/breadcrumb/item.tsx
function Item({ children, className, measurement = false }) {
	const mergedClassName = clsx(global_css_defense_module_default.li, style_module_default.item, measurement && style_module_default["measurement-item"], className);
	if (measurement) return /* @__PURE__ */ (0, import_jsx_dev_runtime$6.jsxDEV)("span", {
		className: mergedClassName,
		children
	}, void 0, false, {
		fileName: _jsxFileName$6,
		lineNumber: 21,
		columnNumber: 10
	}, this);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$6.jsxDEV)("li", {
		className: mergedClassName,
		children
	}, void 0, false, {
		fileName: _jsxFileName$6,
		lineNumber: 24,
		columnNumber: 9
	}, this);
}
var import_jsx_dev_runtime$6, _jsxFileName$6;
function init_item() {
	return (init_item = __esmMin((() => {
		init_clsx();
		init_global_css_defense_module();
		init_style_module();
		import_jsx_dev_runtime$6 = require_jsx_dev_runtime();
		_jsxFileName$6 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/breadcrumb/item.tsx";
		try {
			Item.__docgenInfo = {
				"description": "",
				"displayName": "Item",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/breadcrumb/item.tsx",
				"methods": [],
				"props": {
					"className": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/breadcrumb/item.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "className",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"measurement": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/breadcrumb/item.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "measurement",
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
//#region ../packages/ui/src/breadcrumb/measurement-render.ts
function isBehaviorProp(propName) {
	return propName === "id" || propName === "tabIndex" || EVENT_HANDLER_PATTERN.test(propName);
}
function getMeasurementProps(props) {
	return Object.fromEntries(Object.entries(props).filter(([propName]) => !isBehaviorProp(propName) && propName !== "ref"));
}
function sanitizeElement(element) {
	const behaviorOverrides = { ref: null };
	for (const propName of Object.keys(element.props)) if (isBehaviorProp(propName)) behaviorOverrides[propName] = void 0;
	return (0, import_react.cloneElement)(element, behaviorOverrides);
}
function getMeasurementRender(render) {
	if (typeof render === "function") {
		const renderFunction = render;
		return ((props, ...args) => sanitizeElement(renderFunction(getMeasurementProps(props), ...args)));
	}
	return sanitizeElement(render);
}
var EVENT_HANDLER_PATTERN;
function init_measurement_render() {
	return (init_measurement_render = __esmMin((() => {
		init_react();
		EVENT_HANDLER_PATTERN = /^on[A-Z]/;
	})))();
}
//#endregion
//#region ../packages/ui/src/breadcrumb/separator.tsx
var import_jsx_dev_runtime$5, _jsxFileName$5, Separator;
function init_separator() {
	return (init_separator = __esmMin((() => {
		init_react();
		init_style_module();
		import_jsx_dev_runtime$5 = require_jsx_dev_runtime();
		_jsxFileName$5 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/breadcrumb/separator.tsx";
		Separator = (0, import_react.forwardRef)(function UnforwardedSeparator(_props, ref) {
			return /* @__PURE__ */ (0, import_jsx_dev_runtime$5.jsxDEV)("span", {
				ref,
				"aria-hidden": "true",
				className: style_module_default.separator,
				children: "/"
			}, void 0, false, {
				fileName: _jsxFileName$5,
				lineNumber: 7,
				columnNumber: 4
			}, this);
		});
		try {
			Separator.__docgenInfo = {
				"description": "",
				"displayName": "Separator",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/breadcrumb/separator.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/ui/src/breadcrumb/layout.ts
function getCollapsedLayout(metrics, pinnedIndex) {
	const { availableWidth, currentItemWidth, linkItemWidths, overflowTriggerWidth, separatorWidth } = metrics;
	const linkCount = linkItemWidths.length;
	if (availableWidth <= 0) return {
		collapsedIndices: [],
		shouldMoveFocusToOverflow: false,
		shouldTruncateCurrent: false
	};
	if (linkCount === 0) return {
		collapsedIndices: [],
		shouldMoveFocusToOverflow: false,
		shouldTruncateCurrent: currentItemWidth > availableWidth + 1
	};
	if (linkItemWidths.reduce((total, width) => total + width, 0) + currentItemWidth + separatorWidth * linkCount <= availableWidth + 1) return {
		collapsedIndices: [],
		shouldMoveFocusToOverflow: false,
		shouldTruncateCurrent: false
	};
	const hasPinnedItem = pinnedIndex !== void 0 && pinnedIndex >= 0 && pinnedIndex < linkCount;
	const visibleIndices = /* @__PURE__ */ new Set();
	let visibleWidth = currentItemWidth + overflowTriggerWidth + separatorWidth;
	const candidateFits = (index) => visibleWidth + linkItemWidths[index] + separatorWidth <= availableWidth + 1;
	const addVisibleIndex = (index) => {
		visibleIndices.add(index);
		visibleWidth += linkItemWidths[index] + separatorWidth;
	};
	if (hasPinnedItem) {
		if (!candidateFits(pinnedIndex)) return {
			...getCollapsedLayout(metrics),
			shouldMoveFocusToOverflow: true
		};
		addVisibleIndex(pinnedIndex);
	}
	if (!visibleIndices.has(0) && candidateFits(0)) addVisibleIndex(0);
	for (let index = linkCount - 1; index >= 1; index--) {
		if (visibleIndices.has(index)) continue;
		if (!candidateFits(index)) break;
		addVisibleIndex(index);
	}
	return {
		collapsedIndices: linkItemWidths.map((_, index) => index).filter((index) => !visibleIndices.has(index)),
		shouldMoveFocusToOverflow: false,
		shouldTruncateCurrent: overflowTriggerWidth + currentItemWidth + separatorWidth > availableWidth + 1
	};
}
function init_layout() {
	return (init_layout = __esmMin((() => {})))();
}
//#endregion
//#region ../packages/ui/src/breadcrumb/use-is-truncated.ts
function useIsTruncated(element, measurementVersion) {
	const [isTruncated, setIsTruncated] = (0, import_react.useState)(false);
	use_isomorphic_layout_effect_default(() => {
		if (!element) {
			setIsTruncated(false);
			return;
		}
		let isActive = true;
		const measure = () => {
			if (!isActive) return;
			const next = element.scrollWidth - element.clientWidth > 1;
			setIsTruncated((current) => current === next ? current : next);
		};
		measure();
		const resizeObserver = typeof ResizeObserver === "function" ? new ResizeObserver(measure) : void 0;
		resizeObserver?.observe(element);
		if (typeof document !== "undefined" && document.fonts) document.fonts.ready.then(measure);
		return () => {
			isActive = false;
			resizeObserver?.disconnect();
		};
	}, [element, measurementVersion]);
	return isTruncated;
}
function init_use_is_truncated() {
	return (init_use_is_truncated = __esmMin((() => {
		init_use_isomorphic_layout_effect();
		init_react();
		init_layout();
	})))();
}
//#endregion
//#region ../packages/ui/src/breadcrumb/button-item.tsx
function TrailButtonItem({ children, className, forwardedRef, render, ...props }) {
	const { itemKey, mode, measurementRef, measurementVersion, onLinkBlur, onLinkFocus, separatorRef, showSeparator } = useBreadcrumbItemRenderContext();
	const isMeasurement = mode === "measurement";
	const [element, setElement] = (0, import_react.useState)(null);
	const mergedRef = useMergeRefs([forwardedRef, setElement]);
	const isTruncated = useIsTruncated(element, measurementVersion);
	const button = /* @__PURE__ */ (0, import_jsx_dev_runtime$4.jsxDEV)(Button, {
		...isMeasurement ? getMeasurementProps(props) : mergeProps(props, {
			onBlur: () => onLinkBlur(itemKey),
			onFocus: () => onLinkFocus(itemKey)
		}),
		"aria-current": void 0,
		ref: isMeasurement ? void 0 : mergedRef,
		className: clsx(style_module_default.label, style_module_default.link, style_module_default["button-item"], isMeasurement && style_module_default["measurement-label"], className),
		render: enforceRenderProps(isMeasurement ? getMeasurementRender(render ?? MEASUREMENT_RENDER$2) : render, {
			"aria-current": void 0,
			type: isMeasurement ? void 0 : "button"
		}),
		nativeButton: !isMeasurement || !!render,
		size: "small",
		tone: "neutral",
		type: isMeasurement ? void 0 : "button",
		variant: "minimal",
		tabIndex: isMeasurement ? -1 : props.tabIndex,
		children
	}, void 0, false, {
		fileName: _jsxFileName$4,
		lineNumber: 50,
		columnNumber: 3
	}, this);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$4.jsxDEV)(Item, {
		measurement: isMeasurement,
		children: [showSeparator && /* @__PURE__ */ (0, import_jsx_dev_runtime$4.jsxDEV)(Separator, { ref: isMeasurement ? separatorRef : void 0 }, void 0, false, {
			fileName: _jsxFileName$4,
			lineNumber: 89,
			columnNumber: 5
		}, this), isMeasurement ? /* @__PURE__ */ (0, import_jsx_dev_runtime$4.jsxDEV)("span", {
			ref: measurementRef,
			className: style_module_default["measurement-content"],
			children: button
		}, void 0, false, {
			fileName: _jsxFileName$4,
			lineNumber: 92,
			columnNumber: 5
		}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime$4.jsxDEV)(Root$1, {
			disabled: !isTruncated,
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime$4.jsxDEV)(Trigger, { render: button }, void 0, false, {
				fileName: _jsxFileName$4,
				lineNumber: 100,
				columnNumber: 6
			}, this), isTruncated && /* @__PURE__ */ (0, import_jsx_dev_runtime$4.jsxDEV)(Popup, { children }, void 0, false, {
				fileName: _jsxFileName$4,
				lineNumber: 102,
				columnNumber: 7
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName$4,
			lineNumber: 99,
			columnNumber: 5
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName$4,
		lineNumber: 87,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime$4, _jsxFileName$4, MEASUREMENT_RENDER$2, ButtonItem;
function init_button_item() {
	return (init_button_item = __esmMin((() => {
		init_mergeProps();
		init_clsx();
		init_use_merge_refs();
		init_react();
		init_button();
		init_item$1(), init_item_label();
		init_root$1(), init_trigger(), init_popup();
		init_context();
		init_enforce_render_props();
		init_item();
		init_measurement_render();
		init_separator();
		init_style_module();
		init_use_is_truncated();
		import_jsx_dev_runtime$4 = require_jsx_dev_runtime();
		_jsxFileName$4 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/breadcrumb/button-item.tsx";
		MEASUREMENT_RENDER$2 = /* @__PURE__ */ (0, import_jsx_dev_runtime$4.jsxDEV)("span", {}, void 0, false, {
			fileName: _jsxFileName$4,
			lineNumber: 21,
			columnNumber: 28
		}, void 0);
		ButtonItem = (0, import_react.forwardRef)(function BreadcrumbButtonItem({ children, onClick, render, ...props }, ref) {
			const { mode, onButtonActivate } = useBreadcrumbItemRenderContext();
			if (mode === "overflow") return /* @__PURE__ */ (0, import_jsx_dev_runtime$4.jsxDEV)(Item$1, {
				...props,
				"aria-current": void 0,
				render: enforceRenderProps(render, { "aria-current": void 0 }),
				onClick: (event) => {
					const ownerDocument = event.currentTarget.ownerDocument;
					onClick?.(event);
					const active = ownerDocument.activeElement;
					let focusTarget = active !== ownerDocument.body && !event.currentTarget.closest("[role=\"menu\"]")?.contains(active) ? active : null;
					while (focusTarget?.tagName === "IFRAME") {
						const iframeActive = focusTarget.contentDocument?.activeElement;
						if (!iframeActive) break;
						focusTarget = iframeActive;
					}
					onButtonActivate?.(focusTarget);
				},
				ref,
				closeOnClick: true,
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime$4.jsxDEV)(ItemLabel, { children }, void 0, false, {
					fileName: _jsxFileName$4,
					lineNumber: 155,
					columnNumber: 6
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName$4,
				lineNumber: 123,
				columnNumber: 5
			}, this);
			return /* @__PURE__ */ (0, import_jsx_dev_runtime$4.jsxDEV)(TrailButtonItem, {
				...props,
				onClick,
				render,
				forwardedRef: ref,
				children
			}, void 0, false, {
				fileName: _jsxFileName$4,
				lineNumber: 160,
				columnNumber: 4
			}, this);
		});
		ButtonItem.displayName = "Breadcrumb.ButtonItem";
		try {
			Breadcrumb.ButtonItem.__docgenInfo = {
				"description": "Selects or activates an ancestor in the same hierarchy. The visible item is a\nnative button; a collapsed item is a menu action. Refs and event currentTarget\nrefer to an HTMLButtonElement in the trail and an HTMLDivElement in the menu.",
				"displayName": "Breadcrumb.ButtonItem",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/breadcrumb/button-item.tsx",
				"methods": [],
				"props": {
					"children": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/breadcrumb/types.ts",
							"name": "ButtonItemProps"
						}],
						"description": "The plain-text label for an ancestor in the same hierarchy.",
						"name": "children",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/ui/src/breadcrumb/types.ts",
							"name": "ButtonItemProps"
						},
						"required": true,
						"tags": {},
						"type": { "name": "string" }
					},
					"disabled": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/breadcrumb/types.ts",
							"name": "ButtonItemProps"
						}],
						"description": "Whether ancestor activation is unavailable.",
						"name": "disabled",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/ui/src/breadcrumb/types.ts",
							"name": "ButtonItemProps"
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
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/ui/src/breadcrumb/current-item.tsx
function VisibleCurrentItem({ "aria-current": ariaCurrent, children, className, forwardedRef, onBlur, onFocus, render, ...props }) {
	const { currentRef, variant, measurementVersion, showSeparator, shouldTruncateCurrent } = useBreadcrumbItemRenderContext();
	const [element, setElement] = (0, import_react.useState)(null);
	const [isFocusPinned, setIsFocusPinned] = (0, import_react.useState)(false);
	const mergedRef = useMergeRefs([
		forwardedRef,
		setElement,
		currentRef ?? null
	]);
	const isTruncated = useIsTruncated(element, measurementVersion);
	const tabIndex = isTruncated || isFocusPinned ? 0 : void 0;
	const resolvedAriaCurrent = ariaCurrent ?? (variant === "selection" ? "true" : "page");
	const enforcedRender = enforceRenderProps(render, {
		"aria-current": resolvedAriaCurrent,
		href: void 0,
		tabIndex
	});
	const currentItem = useRender({
		render: enforcedRender,
		defaultTagName: "span",
		ref: mergedRef,
		props: mergeProps({
			...props,
			onBlur,
			onFocus
		}, {
			"aria-current": resolvedAriaCurrent,
			children,
			className: clsx(global_css_defense_module_default.div, resets_module_default["box-sizing"], style_module_default.label, style_module_default.current, (isTruncated || isFocusPinned) && focus_module_default["outset-ring--focus-visible"], className),
			onBlur: () => setIsFocusPinned(false),
			onFocus: () => {
				setIsFocusPinned(true);
			},
			tabIndex
		})
	});
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$3.jsxDEV)(Item, {
		className: clsx(style_module_default["current-item"], shouldTruncateCurrent && style_module_default["current-item--truncating"]),
		children: [showSeparator && /* @__PURE__ */ (0, import_jsx_dev_runtime$3.jsxDEV)(Separator, {}, void 0, false, {
			fileName: _jsxFileName$3,
			lineNumber: 95,
			columnNumber: 23
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime$3.jsxDEV)(Root$1, {
			disabled: !isTruncated,
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime$3.jsxDEV)(Trigger, { render: currentItem }, void 0, false, {
				fileName: _jsxFileName$3,
				lineNumber: 97,
				columnNumber: 5
			}, this), isTruncated && /* @__PURE__ */ (0, import_jsx_dev_runtime$3.jsxDEV)(Popup, { children }, void 0, false, {
				fileName: _jsxFileName$3,
				lineNumber: 102,
				columnNumber: 22
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName$3,
			lineNumber: 96,
			columnNumber: 4
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName$3,
		lineNumber: 89,
		columnNumber: 3
	}, this);
}
function MeasurementCurrentItem({ "aria-current": _ariaCurrent, children, className, render, style, ...props }) {
	const { measurementRef, separatorRef, showSeparator } = useBreadcrumbItemRenderContext();
	const enforcedRender = enforceRenderProps(getMeasurementRender(render ?? MEASUREMENT_RENDER$1), {
		"aria-current": void 0,
		href: void 0,
		tabIndex: void 0
	});
	const currentItem = useRender({
		render: enforcedRender,
		defaultTagName: "span",
		props: {
			...getMeasurementProps(props),
			children,
			className: clsx(global_css_defense_module_default.div, resets_module_default["box-sizing"], style_module_default.label, style_module_default.current, style_module_default["measurement-label"], className),
			style
		}
	});
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$3.jsxDEV)(Item, {
		measurement: true,
		className: style_module_default["current-item"],
		children: [showSeparator && /* @__PURE__ */ (0, import_jsx_dev_runtime$3.jsxDEV)(Separator, { ref: separatorRef }, void 0, false, {
			fileName: _jsxFileName$3,
			lineNumber: 146,
			columnNumber: 23
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime$3.jsxDEV)("span", {
			ref: measurementRef,
			className: style_module_default["measurement-content"],
			children: currentItem
		}, void 0, false, {
			fileName: _jsxFileName$3,
			lineNumber: 147,
			columnNumber: 4
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName$3,
		lineNumber: 145,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime$3, _jsxFileName$3, MEASUREMENT_RENDER$1, CurrentItem;
function init_current_item() {
	return (init_current_item = __esmMin((() => {
		init_mergeProps(), init_useRender();
		init_clsx();
		init_use_merge_refs();
		init_react();
		init_root$1(), init_trigger(), init_popup();
		init_global_css_defense_module();
		init_focus_module();
		init_resets_module();
		init_context();
		init_enforce_render_props();
		init_item();
		init_measurement_render();
		init_separator();
		init_style_module();
		init_use_is_truncated();
		import_jsx_dev_runtime$3 = require_jsx_dev_runtime();
		_jsxFileName$3 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/breadcrumb/current-item.tsx";
		MEASUREMENT_RENDER$1 = /* @__PURE__ */ (0, import_jsx_dev_runtime$3.jsxDEV)("span", {}, void 0, false, {
			fileName: _jsxFileName$3,
			lineNumber: 26,
			columnNumber: 28
		}, void 0);
		CurrentItem = (0, import_react.forwardRef)(function BreadcrumbCurrentItem(props, ref) {
			const { mode } = useBreadcrumbItemRenderContext();
			return mode === "measurement" ? /* @__PURE__ */ (0, import_jsx_dev_runtime$3.jsxDEV)(MeasurementCurrentItem, { ...props }, void 0, false, {
				fileName: _jsxFileName$3,
				lineNumber: 165,
				columnNumber: 4
			}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime$3.jsxDEV)(VisibleCurrentItem, {
				...props,
				forwardedRef: ref
			}, void 0, false, {
				fileName: _jsxFileName$3,
				lineNumber: 167,
				columnNumber: 4
			}, this);
		});
		CurrentItem.displayName = "Breadcrumb.CurrentItem";
		try {
			Breadcrumb.CurrentItem.__docgenInfo = {
				"description": "Renders the current, non-activatable item in a breadcrumb trail.",
				"displayName": "Breadcrumb.CurrentItem",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/breadcrumb/current-item.tsx",
				"methods": [],
				"props": {
					"aria-current": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/breadcrumb/types.ts",
							"name": "CurrentItemProps"
						}],
						"description": "How this item represents the current location. Defaults to `true` for\nbutton ancestors and `page` for links or a current-only trail.\nWith no ancestors, an explicit `true` or `\"true\"` also makes Root a\nselection list. Ancestor links or buttons take precedence when present.",
						"name": "aria-current",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/ui/src/breadcrumb/types.ts",
							"name": "CurrentItemProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "true | \"time\" | \"true\" | \"page\" | \"step\" | \"location\" | \"date\"" }
					},
					"children": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/breadcrumb/types.ts",
							"name": "CurrentItemProps"
						}],
						"description": "The plain-text label for the current item.",
						"name": "children",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/ui/src/breadcrumb/types.ts",
							"name": "CurrentItemProps"
						},
						"required": true,
						"tags": {},
						"type": { "name": "string" }
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
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/ui/src/breadcrumb/link-item.tsx
function VisibleLinkItem({ children, className, forwardedRef, href, openInNewTab, render, onBlur, onFocus, ...props }) {
	const { itemKey, measurementVersion, onLinkBlur, onLinkFocus, showSeparator } = useBreadcrumbItemRenderContext();
	const [element, setElement] = (0, import_react.useState)(null);
	const mergedRef = useMergeRefs([forwardedRef, setElement]);
	const isTruncated = useIsTruncated(element, measurementVersion);
	const enforcedRender = enforceRenderProps(render, {
		"aria-current": void 0,
		href
	});
	const linkProps = mergeProps({
		...props,
		onBlur,
		onFocus
	}, {
		"aria-current": void 0,
		children,
		className: clsx(style_module_default.label, style_module_default.link, className),
		href,
		onBlur: () => onLinkBlur(itemKey),
		onFocus: () => onLinkFocus(itemKey)
	});
	const link = /* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)(Link, {
		...linkProps,
		ref: mergedRef,
		openInNewTab,
		render: enforcedRender,
		tone: "neutral"
	}, void 0, false, {
		fileName: _jsxFileName$2,
		lineNumber: 66,
		columnNumber: 3
	}, this);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)(Item, { children: [showSeparator && /* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)(Separator, {}, void 0, false, {
		fileName: _jsxFileName$2,
		lineNumber: 77,
		columnNumber: 23
	}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)(Root$1, {
		disabled: !isTruncated,
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)(Trigger, { render: link }, void 0, false, {
			fileName: _jsxFileName$2,
			lineNumber: 79,
			columnNumber: 5
		}, this), isTruncated && /* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)(Popup, { children }, void 0, false, {
			fileName: _jsxFileName$2,
			lineNumber: 80,
			columnNumber: 22
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName$2,
		lineNumber: 78,
		columnNumber: 4
	}, this)] }, void 0, true, {
		fileName: _jsxFileName$2,
		lineNumber: 76,
		columnNumber: 3
	}, this);
}
function MeasurementLinkItem({ children, className, href, openInNewTab, render, style, ...props }) {
	const { measurementRef, separatorRef, showSeparator } = useBreadcrumbItemRenderContext();
	const enforcedRender = enforceRenderProps(getMeasurementRender(render ?? MEASUREMENT_RENDER), {
		"aria-current": void 0,
		href: render ? href : void 0
	});
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)(Item, {
		measurement: true,
		children: [showSeparator && /* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)(Separator, { ref: separatorRef }, void 0, false, {
			fileName: _jsxFileName$2,
			lineNumber: 107,
			columnNumber: 23
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)("span", {
			ref: measurementRef,
			className: style_module_default["measurement-content"],
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)(Link, {
				...getMeasurementProps(props),
				className: clsx(style_module_default.label, style_module_default.link, style_module_default["measurement-label"], className),
				href: render ? href : void 0,
				openInNewTab,
				render: enforcedRender,
				style,
				tabIndex: -1,
				tone: "neutral",
				children
			}, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 112,
				columnNumber: 5
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName$2,
			lineNumber: 108,
			columnNumber: 4
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName$2,
		lineNumber: 106,
		columnNumber: 3
	}, this);
}
function OverflowLinkItem({ children, forwardedRef, href, openInNewTab, render, ...props }) {
	const enforcedRender = enforceRenderProps(render ?? /* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)("a", {}, void 0, false, {
		fileName: _jsxFileName$2,
		lineNumber: 145,
		columnNumber: 4
	}, this), {
		"aria-current": void 0,
		href
	});
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)(LinkItem$1, {
		...props,
		ref: forwardedRef,
		closeOnClick: true,
		href,
		openInNewTab,
		render: enforcedRender,
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)(ItemLabel, { children }, void 0, false, {
			fileName: _jsxFileName$2,
			lineNumber: 162,
			columnNumber: 4
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$2,
		lineNumber: 154,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime$2, _jsxFileName$2, MEASUREMENT_RENDER, LinkItem;
function init_link_item() {
	return (init_link_item = __esmMin((() => {
		init_mergeProps();
		init_clsx();
		init_use_merge_refs();
		init_react();
		init_link();
		init_link_item$1(), init_item_label();
		init_root$1(), init_trigger(), init_popup();
		init_context();
		init_enforce_render_props();
		init_item();
		init_measurement_render();
		init_separator();
		init_style_module();
		init_use_is_truncated();
		import_jsx_dev_runtime$2 = require_jsx_dev_runtime();
		_jsxFileName$2 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/breadcrumb/link-item.tsx";
		MEASUREMENT_RENDER = /* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)("span", {}, void 0, false, {
			fileName: _jsxFileName$2,
			lineNumber: 25,
			columnNumber: 28
		}, void 0);
		LinkItem = (0, import_react.forwardRef)(function BreadcrumbLinkItem(props, ref) {
			const { mode } = useBreadcrumbItemRenderContext();
			if (mode === "measurement") return /* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)(MeasurementLinkItem, { ...props }, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 178,
				columnNumber: 11
			}, this);
			if (mode === "overflow") return /* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)(OverflowLinkItem, {
				...props,
				forwardedRef: ref
			}, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 182,
				columnNumber: 11
			}, this);
			return /* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)(VisibleLinkItem, {
				...props,
				forwardedRef: ref
			}, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 185,
				columnNumber: 10
			}, this);
		});
		LinkItem.displayName = "Breadcrumb.LinkItem";
		try {
			Breadcrumb.LinkItem.__docgenInfo = {
				"description": "Renders a navigable ancestor in a breadcrumb trail.\n\nPass a complete `href`. A router-aware link can be composed through the\nstandard `render` prop.",
				"displayName": "Breadcrumb.LinkItem",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/breadcrumb/link-item.tsx",
				"methods": [],
				"props": {
					"href": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/breadcrumb/types.ts",
							"name": "LinkItemProps"
						}],
						"description": "The complete browser-compatible destination for the ancestor page.",
						"name": "href",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/ui/src/breadcrumb/types.ts",
							"name": "LinkItemProps"
						},
						"required": true,
						"tags": {},
						"type": { "name": "string" }
					},
					"openInNewTab": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/breadcrumb/types.ts",
							"name": "LinkItemProps"
						}],
						"description": "Whether to open the link in a new browser tab.\nWhen true, sets `target=\"_blank\"` and appends a visual arrow indicator.",
						"name": "openInNewTab",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/ui/src/breadcrumb/types.ts",
							"name": "LinkItemProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"children": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/breadcrumb/types.ts",
							"name": "LinkItemProps"
						}],
						"description": "The plain-text breadcrumb label.",
						"name": "children",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/ui/src/breadcrumb/types.ts",
							"name": "LinkItemProps"
						},
						"required": true,
						"tags": {},
						"type": { "name": "string" }
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
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/ui/src/breadcrumb/overflow-trigger-button.tsx
var import_jsx_dev_runtime$1, _jsxFileName$1, OverflowTriggerButton;
function init_overflow_trigger_button() {
	return (init_overflow_trigger_button = __esmMin((() => {
		init_clsx();
		init_react();
		init_button();
		init_style_module();
		import_jsx_dev_runtime$1 = require_jsx_dev_runtime();
		_jsxFileName$1 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/breadcrumb/overflow-trigger-button.tsx";
		OverflowTriggerButton = (0, import_react.forwardRef)(function UnforwardedOverflowTriggerButton({ children, className, ...props }, ref) {
			return /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(Button, {
				...props,
				ref,
				className: clsx(style_module_default["overflow-trigger"], className),
				size: "small",
				tone: "neutral",
				variant: "minimal",
				children: children ?? /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)("span", {
					"aria-hidden": "true",
					children: "…"
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 21,
					columnNumber: 19
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 13,
				columnNumber: 4
			}, this);
		});
		try {
			OverflowTriggerButton.__docgenInfo = {
				"description": "",
				"displayName": "OverflowTriggerButton",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/breadcrumb/overflow-trigger-button.tsx",
				"methods": [],
				"props": {
					"variant": {
						"defaultValue": { "value": "\"solid\"" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/button/types.ts",
							"name": "ButtonProps"
						}],
						"description": "The variant of the button. Variants describe the visual style treatment\nof the button.",
						"name": "variant",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/ui/src/button/types.ts",
							"name": "ButtonProps"
						},
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "\"solid\" | \"outline\" | \"minimal\" | \"unstyled\"",
							"value": [
								{ "value": "\"solid\"" },
								{ "value": "\"outline\"" },
								{ "value": "\"minimal\"" },
								{ "value": "\"unstyled\"" }
							]
						}
					},
					"tone": {
						"defaultValue": { "value": "\"brand\"" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/button/types.ts",
							"name": "ButtonProps"
						}],
						"description": "The tone of the button, describing a semantic color intent:\n\n- `'brand': for the most prominent actions, using the brand colors.\n- `'neutral'` for less prominent actions.",
						"name": "tone",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/ui/src/button/types.ts",
							"name": "ButtonProps"
						},
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "\"neutral\" | \"brand\"",
							"value": [{ "value": "\"neutral\"" }, { "value": "\"brand\"" }]
						}
					},
					"size": {
						"defaultValue": { "value": "\"default\"" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/button/types.ts",
							"name": "ButtonProps"
						}],
						"description": "The size of the button.\n\n- `'default'`: For normal text-label buttons, unless it is a toggle button.\n- `'compact'`: For toggle buttons, icon buttons, and buttons when used in context of either.\n- `'small'`: For icon buttons associated with more advanced or auxiliary features.",
						"name": "size",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/ui/src/button/types.ts",
							"name": "ButtonProps"
						},
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "\"small\" | \"default\" | \"compact\"",
							"value": [
								{ "value": "\"small\"" },
								{ "value": "\"default\"" },
								{ "value": "\"compact\"" }
							]
						}
					},
					"disabled": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/button/types.ts",
							"name": "ButtonProps"
						}],
						"description": "Whether the button is disabled.",
						"name": "disabled",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/ui/src/button/types.ts",
							"name": "ButtonProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"focusableWhenDisabled": {
						"defaultValue": { "value": "true" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/button/types.ts",
							"name": "ButtonProps"
						}],
						"description": "Whether the element should be focusable even when it is disabled.",
						"name": "focusableWhenDisabled",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/ui/src/button/types.ts",
							"name": "ButtonProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"aria-pressed": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/button/types.ts",
							"name": "ButtonProps"
						}],
						"description": "Indicates the current \"pressed\" state of toggle buttons. This should only\nbe used with neutral minimal buttons.",
						"name": "aria-pressed",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/ui/src/button/types.ts",
							"name": "ButtonProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean | \"false\" | \"true\" | \"mixed\"" }
					},
					"children": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/button/types.ts",
							"name": "ButtonProps"
						}],
						"description": "The content of the button.",
						"name": "children",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/ui/src/button/types.ts",
							"name": "ButtonProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "ReactNode" }
					},
					"loading": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/button/types.ts",
							"name": "ButtonProps"
						}],
						"description": "Whether the button is in a loading state, such as when an action is being\nperformed.",
						"name": "loading",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/ui/src/button/types.ts",
							"name": "ButtonProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"loadingAnnouncement": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/button/types.ts",
							"name": "ButtonProps"
						}],
						"description": "The text used for assistive technology to indicate the loading state.",
						"name": "loadingAnnouncement",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/ui/src/button/types.ts",
							"name": "ButtonProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "string" }
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
					"nativeButton": {
						"defaultValue": { "value": "true" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/internals/types.d.mts",
							"name": "NativeButtonProps"
						}],
						"description": "Whether the component renders a native `<button>` element when replacing it\nvia the `render` prop.\nSet to `false` if the rendered element is not a button (for example, `<div>`).",
						"name": "nativeButton",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/internals/types.d.mts",
							"name": "NativeButtonProps"
						},
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
//#region ../packages/ui/src/breadcrumb/root.tsx
function validateNestedArrayKeys(children) {
	if (!Array.isArray(children)) return;
	for (const child of children) {
		if (!Array.isArray(child)) continue;
		for (const arrayChild of child) if ((0, import_react.isValidElement)(arrayChild) && arrayChild.key === null) throw new Error("Breadcrumb: Items rendered from an array need stable React keys.");
		validateNestedArrayKeys(child);
	}
}
function getBreadcrumbItems(children) {
	validateNestedArrayKeys(children);
	const childArray = import_react.Children.toArray(children);
	const items = [];
	childArray.forEach((child, index) => {
		if (!(0, import_react.isValidElement)(child)) throw new Error("Breadcrumb: <Breadcrumb.Root> only accepts <Breadcrumb.LinkItem>, <Breadcrumb.ButtonItem>, and <Breadcrumb.CurrentItem> as direct children.");
		let kind;
		if (child.type === LinkItem) kind = "link";
		else if (child.type === ButtonItem) kind = "button";
		else if (child.type === CurrentItem) kind = "current";
		if (!kind) throw new Error("Breadcrumb: <Breadcrumb.Root> only accepts <Breadcrumb.LinkItem>, <Breadcrumb.ButtonItem>, and <Breadcrumb.CurrentItem> as direct children.");
		const label = child.props.children;
		if (typeof label !== "string" || !label.trim()) throw new Error(`Breadcrumb: <Breadcrumb.${{
			link: "LinkItem",
			button: "ButtonItem",
			current: "CurrentItem"
		}[kind]}> requires a non-empty text label.`);
		if (kind === "link" && (typeof child.props.href !== "string" || !child.props.href.trim())) throw new Error("Breadcrumb: <Breadcrumb.LinkItem> requires a usable `href`.");
		items.push({
			element: child,
			itemKey: String(child.key ?? `item-${index}`),
			kind
		});
	});
	{
		const linkItems = items.filter((item) => item.kind === "link");
		const currentItems = items.filter((item) => item.kind === "current");
		if (linkItems.length > 0 && items.some((item) => item.kind === "button")) throw new Error("Breadcrumb: Ancestors must all be LinkItem or all be ButtonItem. Mixed trails are not supported.");
		if (currentItems.length === 0) throw new Error("Breadcrumb: <Breadcrumb.Root> requires one final <Breadcrumb.CurrentItem>.");
		if (currentItems.length > 1) throw new Error("Breadcrumb: <Breadcrumb.Root> accepts exactly one <Breadcrumb.CurrentItem>.");
		if (items.at(-1)?.kind !== "current") throw new Error("Breadcrumb: <Breadcrumb.CurrentItem> must be the final child of <Breadcrumb.Root>.");
	}
	return items;
}
function responsiveStatesAreEqual(current, next) {
	return current.shouldTruncateCurrent === next.shouldTruncateCurrent && current.collapsedKeys.length === next.collapsedKeys.length && current.collapsedKeys.every((itemKey, index) => itemKey === next.collapsedKeys[index]);
}
function itemKeysAreEqual(current, next) {
	return current.length === next.length && current.every((item, index) => item.itemKey === next[index].itemKey && item.kind === next[index].kind);
}
function getContentBoxInlineSize(element) {
	const computedStyles = getComputedStyle(element);
	const shorthandValues = computedStyles.paddingInline.split(/\s+/).map((value) => Number.parseFloat(value)).filter(Number.isFinite);
	const shorthandStart = shorthandValues[0] ?? 0;
	const shorthandEnd = shorthandValues[1] ?? shorthandStart;
	const paddingInlineStart = Number.parseFloat(computedStyles.paddingInlineStart) || Number.parseFloat(computedStyles.paddingLeft) || shorthandStart;
	const paddingInlineEnd = Number.parseFloat(computedStyles.paddingInlineEnd) || Number.parseFloat(computedStyles.paddingRight) || shorthandEnd;
	const paddingBoxWidth = element.clientWidth || element.getBoundingClientRect().width;
	return Math.max(0, paddingBoxWidth - paddingInlineStart - paddingInlineEnd);
}
var import_jsx_dev_runtime, _jsxFileName, FULL_TRAIL_STATE, Root;
function init_root() {
	return (init_root = __esmMin((() => {
		init_mergeProps(), init_useRender();
		init_clsx();
		init_use_isomorphic_layout_effect(), init_use_merge_refs();
		init_react();
		init_build_module();
		init_build_module$1();
		init_root$2(), init_trigger$1(), init_popup$1();
		init_root$1(), init_trigger(), init_popup();
		init_global_css_defense_module();
		init_resets_module();
		init_context();
		init_button_item();
		init_current_item();
		init_enforce_render_props();
		init_item();
		init_layout();
		init_link_item();
		init_overflow_trigger_button();
		init_separator();
		init_style_module();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/breadcrumb/root.tsx";
		FULL_TRAIL_STATE = {
			collapsedKeys: [],
			shouldTruncateCurrent: false
		};
		Root = (0, import_react.forwardRef)(function BreadcrumbRoot({ "aria-label": ariaLabel, "aria-labelledby": ariaLabelledBy, children, className, render, role: _role, ...props }, forwardedRef) {
			const items = (0, import_react.useMemo)(() => getBreadcrumbItems(children), [children]);
			const ancestorItems = (0, import_react.useMemo)(() => items.filter((item) => item.kind !== "current"), [items]);
			const currentItem = (0, import_react.useMemo)(() => items.find((item) => item.kind === "current"), [items]);
			const currentAriaCurrent = currentItem && "aria-current" in currentItem.element.props ? currentItem.element.props["aria-current"] : void 0;
			const variant = ancestorItems[0]?.kind === "button" || ancestorItems.length === 0 && (currentAriaCurrent === true || currentAriaCurrent === "true") ? "selection" : "navigation";
			const hasAriaLabel = typeof ariaLabel === "string" && ariaLabel.trim().length > 0;
			const hasAriaLabelledBy = typeof ariaLabelledBy === "string" && ariaLabelledBy.trim().length > 0;
			const resolvedAriaLabel = hasAriaLabel || hasAriaLabelledBy ? ariaLabel : __("Breadcrumbs");
			const [rootElement, setRootElement] = (0, import_react.useState)(null);
			const [responsiveState, setResponsiveState] = (0, import_react.useState)(FULL_TRAIL_STATE);
			const [measurementVersion, setMeasurementVersion] = (0, import_react.useState)(0);
			const [menuOpen, setMenuOpen] = (0, import_react.useState)(false);
			const [pinnedItemKey, setPinnedItemKey] = (0, import_react.useState)(null);
			const [isOverflowTriggerFocused, setIsOverflowTriggerFocused] = (0, import_react.useState)(false);
			const mergedRootRef = useMergeRefs([forwardedRef, setRootElement]);
			const visibleListRef = (0, import_react.useRef)(null);
			const intrinsicRowRef = (0, import_react.useRef)(null);
			const intrinsicItemRefs = (0, import_react.useRef)(/* @__PURE__ */ new Map());
			const intrinsicSeparatorRef = (0, import_react.useRef)(null);
			const intrinsicOverflowTriggerRef = (0, import_react.useRef)(null);
			const activationFocusRef = (0, import_react.useRef)(null);
			const menuPopupRef = (0, import_react.useRef)(null);
			const currentItemRef = (0, import_react.useRef)(null);
			const focusedElementRef = (0, import_react.useRef)(null);
			const overflowTriggerRef = (0, import_react.useRef)(null);
			const frozenItemsRef = (0, import_react.useRef)(items);
			const pendingStateRef = (0, import_react.useRef)(null);
			const focusOverflowAfterLayoutRef = (0, import_react.useRef)(false);
			const menuOpenRef = (0, import_react.useRef)(false);
			const selectionChanged = (variant === "selection" || frozenItemsRef.current.some((item) => item.kind === "button")) && !itemKeysAreEqual(frozenItemsRef.current, items);
			const focusCurrentItem = (0, import_react.useCallback)(() => {
				const current = currentItemRef.current;
				if (current) {
					current.tabIndex = -1;
					current.focus();
				}
			}, []);
			use_isomorphic_layout_effect_default(() => {
				if (selectionChanged) {
					setMenuOpen(false);
					menuOpenRef.current = false;
					setIsOverflowTriggerFocused(false);
					frozenItemsRef.current = items;
				}
				const focused = focusedElementRef.current;
				if (focused && !focused.isConnected && focused.ownerDocument.activeElement === focused.ownerDocument.body) focusCurrentItem();
			});
			if (!menuOpen && !isOverflowTriggerFocused) frozenItemsRef.current = items;
			const applyResponsiveState = (0, import_react.useCallback)((next) => {
				if (menuOpen && !selectionChanged) {
					pendingStateRef.current = next;
					return;
				}
				if (isOverflowTriggerFocused && !selectionChanged && (next.collapsedKeys.length === 0 || !itemKeysAreEqual(frozenItemsRef.current, items))) {
					pendingStateRef.current = next;
					return;
				}
				pendingStateRef.current = null;
				setResponsiveState((current) => responsiveStatesAreEqual(current, next) ? current : next);
			}, [
				isOverflowTriggerFocused,
				items,
				menuOpen,
				selectionChanged
			]);
			use_isomorphic_layout_effect_default(() => {
				if (!rootElement || !intrinsicRowRef.current) return;
				if (typeof ResizeObserver !== "function") {
					applyResponsiveState(FULL_TRAIL_STATE);
					return;
				}
				let isActive = true;
				let animationFrame;
				const measureElement = (element) => {
					if (!element) return 0;
					return Math.max(element.getBoundingClientRect().width, element.scrollWidth);
				};
				const measure = () => {
					if (!isActive) return;
					const availableWidth = visibleListRef.current ? getContentBoxInlineSize(visibleListRef.current) : rootElement.clientWidth || rootElement.getBoundingClientRect().width;
					const currentItemWidth = currentItem ? measureElement(intrinsicItemRefs.current.get(currentItem.itemKey) ?? null) : 0;
					const linkItemWidths = ancestorItems.map((item) => measureElement(intrinsicItemRefs.current.get(item.itemKey) ?? null));
					const pinnedIndex = pinnedItemKey ? ancestorItems.findIndex((item) => item.itemKey === pinnedItemKey) : void 0;
					const nextLayout = getCollapsedLayout({
						availableWidth,
						currentItemWidth,
						linkItemWidths,
						overflowTriggerWidth: measureElement(intrinsicOverflowTriggerRef.current),
						separatorWidth: measureElement(intrinsicSeparatorRef.current)
					}, pinnedIndex === -1 ? void 0 : pinnedIndex);
					const nextState = {
						collapsedKeys: nextLayout.collapsedIndices.map((index) => ancestorItems[index].itemKey),
						shouldTruncateCurrent: nextLayout.shouldTruncateCurrent
					};
					if (nextLayout.shouldMoveFocusToOverflow) {
						focusOverflowAfterLayoutRef.current = true;
						setPinnedItemKey(null);
					}
					setMeasurementVersion((current) => current + 1);
					applyResponsiveState(nextState);
				};
				const scheduleMeasurement = () => {
					if (animationFrame !== void 0) return;
					animationFrame = requestAnimationFrame(() => {
						animationFrame = void 0;
						measure();
					});
				};
				const resizeObserver = new ResizeObserver(scheduleMeasurement);
				resizeObserver.observe(rootElement);
				if (visibleListRef.current) resizeObserver.observe(visibleListRef.current);
				resizeObserver.observe(intrinsicRowRef.current);
				for (const itemElement of intrinsicItemRefs.current.values()) resizeObserver.observe(itemElement);
				if (intrinsicSeparatorRef.current) resizeObserver.observe(intrinsicSeparatorRef.current);
				if (intrinsicOverflowTriggerRef.current) resizeObserver.observe(intrinsicOverflowTriggerRef.current);
				measure();
				if (document.fonts) document.fonts.ready.then(scheduleMeasurement);
				return () => {
					isActive = false;
					resizeObserver.disconnect();
					if (animationFrame !== void 0) cancelAnimationFrame(animationFrame);
				};
			}, [
				applyResponsiveState,
				children,
				currentItem,
				ancestorItems,
				pinnedItemKey,
				props.dir,
				rootElement
			]);
			use_isomorphic_layout_effect_default(() => {
				if (focusOverflowAfterLayoutRef.current && responsiveState.collapsedKeys.length > 0 && overflowTriggerRef.current) {
					focusOverflowAfterLayoutRef.current = false;
					overflowTriggerRef.current.focus();
				}
			}, [responsiveState.collapsedKeys]);
			const applyPendingResponsiveState = (0, import_react.useCallback)(() => {
				if (!pendingStateRef.current) return;
				const pendingState = pendingStateRef.current;
				pendingStateRef.current = null;
				setResponsiveState(pendingState);
			}, []);
			const handleMenuOpenChange = (0, import_react.useCallback)((open, eventDetails) => {
				menuOpenRef.current = open;
				if (!open && eventDetails.reason === "item-press") {
					activationFocusRef.current?.focus();
					activationFocusRef.current = null;
				}
				if (!open && variant === "selection" && rootElement) {
					const ownerDocument = rootElement.ownerDocument;
					queueMicrotask(() => {
						const active = ownerDocument.activeElement;
						if (active === ownerDocument.body || active && menuPopupRef.current?.contains(active)) {
							if (overflowTriggerRef.current) overflowTriggerRef.current.focus();
							else focusCurrentItem();
						}
					});
				}
				if (open) {
					frozenItemsRef.current = items;
					activationFocusRef.current = null;
				} else if (eventDetails.reason !== "escape-key" && eventDetails.reason !== "trigger-press") {
					setIsOverflowTriggerFocused(false);
					applyPendingResponsiveState();
				}
				setMenuOpen(open);
			}, [
				applyPendingResponsiveState,
				focusCurrentItem,
				items,
				rootElement,
				variant
			]);
			const handleOverflowTriggerBlur = (0, import_react.useCallback)(() => {
				if (menuOpenRef.current) return;
				setIsOverflowTriggerFocused(false);
				applyPendingResponsiveState();
			}, [applyPendingResponsiveState]);
			const displayedItems = variant !== "selection" && !selectionChanged && (menuOpen || isOverflowTriggerFocused) ? frozenItemsRef.current : items;
			const displayedAncestors = displayedItems.filter((item) => item.kind !== "current");
			const displayedCurrentItem = displayedItems.find((item) => item.kind === "current");
			const collapsedKeySet = new Set(responsiveState.collapsedKeys);
			const collapsedItems = displayedAncestors.filter((item) => collapsedKeySet.has(item.itemKey));
			const visibleAncestors = displayedAncestors.filter((item) => !collapsedKeySet.has(item.itemKey));
			const overflowLabel = collapsedItems.length ? sprintf(_n("Show %d hidden breadcrumb item", "Show %d hidden breadcrumb items", collapsedItems.length), collapsedItems.length) : "";
			let visiblePosition = 0;
			const renderVisibleItem = (item) => {
				const showSeparator = visiblePosition > 0;
				visiblePosition++;
				return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BreadcrumbItemRenderContext.Provider, {
					value: {
						itemKey: item.itemKey,
						variant,
						measurementVersion,
						mode: "visible",
						currentRef: item.kind === "current" ? currentItemRef : void 0,
						onLinkBlur: (itemKey) => setPinnedItemKey((current) => current === itemKey ? null : current),
						onLinkFocus: setPinnedItemKey,
						showSeparator,
						shouldTruncateCurrent: responsiveState.shouldTruncateCurrent
					},
					children: item.element
				}, `visible-${item.itemKey}`, false, {
					fileName: _jsxFileName,
					lineNumber: 613,
					columnNumber: 4
				}, this);
			};
			const rootAncestor = visibleAncestors.find((item) => item.itemKey === displayedAncestors[0]?.itemKey);
			const remainingVisibleAncestors = rootAncestor ? visibleAncestors.filter((item) => item !== rootAncestor) : visibleAncestors;
			const visibleListContent = /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
				rootAncestor && renderVisibleItem(rootAncestor),
				collapsedItems.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Item, { children: [visiblePosition++ > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Separator, {}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 647,
					columnNumber: 33
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Root$2, {
					open: menuOpen,
					onOpenChange: handleMenuOpenChange,
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Root$1, {
						disabled: menuOpen,
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trigger$1, {
							ref: overflowTriggerRef,
							"aria-label": overflowLabel,
							onBlur: handleOverflowTriggerBlur,
							onFocus: () => setIsOverflowTriggerFocused(true),
							render: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trigger, { render: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(OverflowTriggerButton, {}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 662,
								columnNumber: 20
							}, this) }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 661,
								columnNumber: 10
							}, this),
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								"aria-hidden": "true",
								children: "…"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 666,
								columnNumber: 9
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 653,
							columnNumber: 8
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Popup, { children: overflowLabel }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 668,
							columnNumber: 8
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 652,
						columnNumber: 7
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Popup$1, {
						onFocusCapture: (event) => {
							focusedElementRef.current = event.target;
						},
						ref: menuPopupRef,
						finalFocus: variant === "selection" ? false : void 0,
						children: collapsedItems.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BreadcrumbItemRenderContext.Provider, {
							value: {
								itemKey: item.itemKey,
								variant,
								measurementVersion,
								mode: "overflow",
								onButtonActivate: (target) => {
									activationFocusRef.current = target;
								},
								onLinkBlur: () => {},
								onLinkFocus: () => {},
								showSeparator: false,
								shouldTruncateCurrent: false
							},
							children: item.element
						}, `overflow-${item.itemKey}`, false, {
							fileName: _jsxFileName,
							lineNumber: 681,
							columnNumber: 9
						}, this))
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 670,
						columnNumber: 7
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 648,
					columnNumber: 6
				}, this)] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 646,
					columnNumber: 5
				}, this),
				remainingVisibleAncestors.map(renderVisibleItem),
				displayedCurrentItem && renderVisibleItem(displayedCurrentItem)
			] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 643,
				columnNumber: 3
			}, this);
			const componentContent = /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ol", {
				ref: visibleListRef,
				className: clsx(global_css_defense_module_default.ol, style_module_default.list),
				role: "list",
				"aria-label": variant === "selection" ? resolvedAriaLabel : void 0,
				"aria-labelledby": variant === "selection" && hasAriaLabelledBy ? ariaLabelledBy : void 0,
				children: visibleListContent
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 712,
				columnNumber: 4
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				inert: inertValue(true),
				"aria-hidden": "true",
				className: style_module_default.measurement,
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					ref: intrinsicRowRef,
					className: style_module_default["measurement-row"],
					children: items.map((item, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BreadcrumbItemRenderContext.Provider, {
						value: {
							itemKey: item.itemKey,
							variant,
							measurementRef: (element) => {
								if (element) intrinsicItemRefs.current.set(item.itemKey, element);
								else intrinsicItemRefs.current.delete(item.itemKey);
							},
							measurementVersion,
							mode: "measurement",
							onLinkBlur: () => {},
							onLinkFocus: () => {},
							separatorRef: index === 1 ? intrinsicSeparatorRef : void 0,
							showSeparator: index > 0,
							shouldTruncateCurrent: false
						},
						children: item.element
					}, `measurement-${item.itemKey}`, false, {
						fileName: _jsxFileName,
						lineNumber: 737,
						columnNumber: 7
					}, this))
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 732,
					columnNumber: 5
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(OverflowTriggerButton, {
					className: style_module_default["measurement-overflow-trigger"],
					nativeButton: false,
					render: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { ref: intrinsicOverflowTriggerRef }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 773,
						columnNumber: 15
					}, this),
					tabIndex: -1
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 770,
					columnNumber: 5
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 727,
				columnNumber: 4
			}, this)] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 710,
				columnNumber: 3
			}, this);
			const enforcedRender = (0, import_react.useMemo)(() => enforceRenderProps(render, {
				"aria-label": variant === "navigation" ? resolvedAriaLabel : void 0,
				"aria-labelledby": variant === "navigation" && hasAriaLabelledBy ? ariaLabelledBy : void 0,
				role: variant === "navigation" ? "navigation" : void 0
			}), [
				ariaLabelledBy,
				hasAriaLabelledBy,
				render,
				resolvedAriaLabel,
				variant
			]);
			return useRender({
				render: enforcedRender,
				defaultTagName: variant === "selection" ? "div" : "nav",
				ref: mergedRootRef,
				props: mergeProps(props, {
					"aria-label": variant === "navigation" ? resolvedAriaLabel : void 0,
					"aria-labelledby": variant === "navigation" && hasAriaLabelledBy ? ariaLabelledBy : void 0,
					children: componentContent,
					onFocusCapture: (event) => {
						focusedElementRef.current = event.target;
					},
					className: clsx(resets_module_default["box-sizing"], style_module_default.root, className),
					role: variant === "navigation" ? "navigation" : void 0
				})
			});
		});
		Root.displayName = "Breadcrumb.Root";
		try {
			Breadcrumb.Root.__docgenInfo = {
				"description": "Renders a labelled page-navigation landmark or hierarchy-selection list.\nAutomatically moves ancestors that do not fit into an accessible overflow menu.\n\n```jsx\n<Breadcrumb.Root aria-label=\"Breadcrumbs\">\n  <Breadcrumb.LinkItem href=\"/\">Dashboard</Breadcrumb.LinkItem>\n  <Breadcrumb.CurrentItem>Settings</Breadcrumb.CurrentItem>\n</Breadcrumb.Root>\n```",
				"displayName": "Breadcrumb.Root",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/breadcrumb/root.tsx",
				"methods": [],
				"props": {
					"children": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/breadcrumb/types.ts",
							"name": "RootProps"
						}],
						"description": "Ancestors of one kind, either `Breadcrumb.LinkItem` or\n`Breadcrumb.ButtonItem`, followed by exactly one `Breadcrumb.CurrentItem`.",
						"name": "children",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/ui/src/breadcrumb/types.ts",
							"name": "RootProps"
						},
						"required": true,
						"tags": {},
						"type": { "name": "ReactNode" }
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
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
export { CurrentItem as a, init_button_item as c, init_link_item as i, init_root as n, init_current_item as o, LinkItem as r, ButtonItem as s, Root as t };
