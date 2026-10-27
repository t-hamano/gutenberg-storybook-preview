import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C1RZKCc6.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { n as useMergeRefs, t as init_use_merge_refs } from "./use-merge-refs-BAtuPB1L.js";
import { a as init_clsx, i as clsx } from "./iframe-UtSZlYID.js";
import { a as TabsIndicator, c as init_TabsTab, i as init_TabsPanel, l as TabsRoot, n as init_TabsList, o as init_TabsIndicator, r as TabsPanel, s as TabsTab, t as TabsList, u as init_TabsRoot } from "./TabsList-Bxrfq2bP.js";
import { n as init_direction_provider, t as DirectionProvider } from "./direction-provider-BxH2DiMW.js";
import { n as useScheduleValidation, t as init_use_schedule_validation } from "./use-schedule-validation-BSQQyKy3.js";
//#region ../packages/ui/build-module/tabs/list.mjs
function getRuntime$2() {
	const globalScope = globalThis;
	if (globalScope.__wpStyleRuntime) return globalScope.__wpStyleRuntime;
	globalScope.__wpStyleRuntime = {
		documents: /* @__PURE__ */ new Map(),
		styles: /* @__PURE__ */ new Map(),
		injectedStyles: /* @__PURE__ */ new WeakMap()
	};
	if (typeof document !== "undefined") registerDocument$2(document);
	return globalScope.__wpStyleRuntime;
}
function documentContainsStyleHash$2(targetDocument, hash) {
	if (!targetDocument.head) return false;
	for (const style of targetDocument.head.querySelectorAll(`style[${STYLE_HASH_ATTRIBUTE$2}]`)) if (style.getAttribute(STYLE_HASH_ATTRIBUTE$2) === hash) return true;
	return false;
}
function injectStyle$2(targetDocument, hash, css) {
	if (!targetDocument.head) return;
	const runtime = getRuntime$2();
	let injectedStyles = runtime.injectedStyles.get(targetDocument);
	if (!injectedStyles) {
		injectedStyles = /* @__PURE__ */ new Set();
		runtime.injectedStyles.set(targetDocument, injectedStyles);
	}
	if (injectedStyles.has(hash)) return;
	if (documentContainsStyleHash$2(targetDocument, hash)) {
		injectedStyles.add(hash);
		return;
	}
	const style = targetDocument.createElement("style");
	style.setAttribute(STYLE_HASH_ATTRIBUTE$2, hash);
	style.appendChild(targetDocument.createTextNode(css));
	targetDocument.head.appendChild(style);
	injectedStyles.add(hash);
}
function registerDocument$2(targetDocument) {
	const runtime = getRuntime$2();
	runtime.documents.set(targetDocument, (runtime.documents.get(targetDocument) ?? 0) + 1);
	for (const [hash, css] of runtime.styles) injectStyle$2(targetDocument, hash, css);
	return () => {
		const count = runtime.documents.get(targetDocument);
		if (count === void 0) return;
		if (count <= 1) {
			runtime.documents.delete(targetDocument);
			return;
		}
		runtime.documents.set(targetDocument, count - 1);
	};
}
function registerStyle$2(hash, css) {
	const runtime = getRuntime$2();
	runtime.styles.set(hash, css);
	for (const targetDocument of runtime.documents.keys()) injectStyle$2(targetDocument, hash, css);
}
var import_jsx_runtime$4, STYLE_HASH_ATTRIBUTE$2, style_default$1, SCROLL_EPSILON, List;
function init_list() {
	return (init_list = __esmMin((() => {
		init_react();
		init_clsx();
		init_TabsList(), init_TabsIndicator();
		init_use_merge_refs();
		import_jsx_runtime$4 = require_jsx_runtime();
		STYLE_HASH_ATTRIBUTE$2 = "data-wp-hash";
		if (typeof process === "undefined" || false) registerStyle$2("f3c08da521", "@layer wp-ui{@layer utilities, components, compositions, overrides;@layer components{._7313adbc8a112e90__tablist{--direction-start:left;--direction-end:right;align-items:stretch;display:flex;overflow-inline:auto;overscroll-behavior-inline:none;position:relative;&:dir(rtl){--direction-start:right;--direction-end:left}&[data-orientation=horizontal]{--fade-width:4rem;--fade-gradient-base:transparent 0%,#000 var(--fade-width);--fade-gradient-composed:var(--fade-gradient-base),#000 60%,transparent 50%;width:fit-content;&:not(.eb7aaeb14de04857__is-scrolling){overflow:visible}&._9f2ac729c68a735a__is-overflowing-first{mask-image:linear-gradient(to var(--direction-end),var(--fade-gradient-base))}&._81c799c1f3cdd261__is-overflowing-last{mask-image:linear-gradient(to var(--direction-start),var(--fade-gradient-base))}&._9f2ac729c68a735a__is-overflowing-first._81c799c1f3cdd261__is-overflowing-last{mask-image:linear-gradient(to right,var(--fade-gradient-composed)),linear-gradient(to left,var(--fade-gradient-composed))}&._59228b5227f38a99__is-minimal-variant{gap:1rem}}&[data-orientation=vertical]{flex-direction:column}}._1c37dcfaa1ad8cda__indicator{@media not (prefers-reduced-motion){transition-duration:.2s;transition-property:translate,width,height;transition-timing-function:ease-out}background-color:var(--wpds-color-foreground-interactive-neutral,#1e1e1e);outline:2px solid transparent;outline-offset:-1px;pointer-events:none;position:absolute;z-index:1;._7313adbc8a112e90__tablist:has(>.a5fd8814f195aa5e__tab[aria-selected=true]:not([data-disabled]):focus-visible)\n				&{background-color:var(--wpds-color-foreground-interactive-neutral-active,#1e1e1e)}&[data-orientation=horizontal]{bottom:0;height:var(--wpds-border-width-focus,var(--wp-admin-border-width-focus,2px));left:0;translate:var(--active-tab-left) 0;width:var(--active-tab-width)}&[data-orientation=vertical]{height:max(0px,calc(var(--active-tab-height) - var(--wpds-dimension-padding-md, 12px)*2));inset-inline-start:0;top:var(--wpds-dimension-padding-md,12px);translate:0 var(--active-tab-top);width:var(--wpds-border-width-focus,var(--wp-admin-border-width-focus,2px))}}.a5fd8814f195aa5e__tab{align-items:center;background:transparent;border:none;border-radius:0;box-shadow:none;color:var(--wpds-color-foreground-interactive-neutral,#1e1e1e);cursor:var(--wpds-cursor-control,pointer);display:flex;flex:1 0 auto;font-family:var(--wpds-typography-font-family-body,-apple-system,system-ui,\"Segoe UI\",\"Roboto\",\"Oxygen-Sans\",\"Ubuntu\",\"Cantarell\",\"Helvetica Neue\",sans-serif);font-size:var(--wpds-typography-font-size-md,13px);font-weight:400;line-height:1.2;outline:none;padding:0;position:relative;white-space:nowrap;z-index:1;&:is([aria-selected=true],[data-disabled]){cursor:default}&[data-disabled]{color:var(--wpds-color-foreground-interactive-neutral-disabled,#8d8d8d);@media (forced-colors:active){color:GrayText}}&:not([data-disabled]):is(:not([aria-selected=true]):hover,:not([aria-selected=true]):active,:focus-visible){color:var(--wpds-color-foreground-interactive-neutral-active,#1e1e1e);&:after{background-color:var(--wpds-color-background-interactive-neutral-weak-active,#ededed);opacity:1}}&:after,&:before{border-radius:var(--wpds-border-radius-sm,2px);opacity:0;outline:var(--wpds-border-width-focus,var(--wp-admin-border-width-focus,2px)) solid transparent;pointer-events:none;position:absolute;z-index:-1;@media not (prefers-reduced-motion){transition:opacity .1s linear}}&:focus-visible:after{opacity:1;outline-color:var(--wpds-color-stroke-focus,var(--wp-admin-theme-color,#3858e9))}[data-orientation=horizontal] &{height:48px;padding-inline:var(--wpds-dimension-padding-lg,16px);scroll-margin:24px;&:after{content:\"\";inset-block:calc(var(--wpds-dimension-padding-md, 12px) + var(--wpds-dimension-padding-xs, 4px));inset-inline:var(--wpds-dimension-padding-lg,16px);outline-offset:var(--wpds-dimension-padding-xs,4px)}&:not([data-disabled]):is(:not([aria-selected=true]):hover,:not([aria-selected=true]):active,:focus-visible):after{box-shadow:0 0 0 var(--wpds-dimension-padding-xs,4px) var(--wpds-color-background-interactive-neutral-weak-active,#ededed)}}._59228b5227f38a99__is-minimal-variant[data-orientation=horizontal] &{padding-inline:0;&:after{inset-inline:0}}._59228b5227f38a99__is-minimal-variant.eb7aaeb14de04857__is-scrolling[data-orientation=horizontal] &{&:before{content:\"\";inset-block:var(--wpds-dimension-padding-md,12px);inset-inline:round(up,var(--wpds-border-width-focus,var(--wp-admin-border-width-focus,2px)),1px);z-index:0}&:focus-visible{&:before{opacity:1;outline-color:var(--wpds-color-stroke-focus,var(--wp-admin-theme-color,#3858e9))}&:after{outline:none}}}[data-orientation=vertical] &{min-height:var(--wpds-dimension-size-lg,40px);padding:var(--wpds-dimension-padding-md,12px);&:after{content:\"\";inset:0;outline-offset:calc(var(--wpds-border-width-focus, var(--wp-admin-border-width-focus, 2px))*-1)}}}._5dfc77e6edd345d4__tab-children{align-items:center;display:flex;flex-grow:1;[data-orientation=horizontal] &{justify-content:center}[data-orientation=vertical] &{justify-content:start}}}}");
		style_default$1 = {
			"tablist": "_7313adbc8a112e90__tablist",
			"is-scrolling": "eb7aaeb14de04857__is-scrolling",
			"is-overflowing-first": "_9f2ac729c68a735a__is-overflowing-first",
			"is-overflowing-last": "_81c799c1f3cdd261__is-overflowing-last",
			"is-minimal-variant": "_59228b5227f38a99__is-minimal-variant",
			"indicator": "_1c37dcfaa1ad8cda__indicator",
			"tab": "a5fd8814f195aa5e__tab",
			"tab-children": "_5dfc77e6edd345d4__tab-children"
		};
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
			return /* @__PURE__ */ (0, import_jsx_runtime$4.jsxs)(TabsList, {
				ref: mergedListRef,
				activateOnFocus,
				"data-select-on-move": activateOnFocus ? "true" : "false",
				className: clsx(style_default$1.tablist, overflow.isScrolling && style_default$1["is-scrolling"], overflow.first && style_default$1["is-overflowing-first"], overflow.last && style_default$1["is-overflowing-last"], style_default$1[`is-${variant}-variant`], className),
				...otherProps,
				tabIndex: otherProps.tabIndex ?? (overflow.isScrolling ? -1 : void 0),
				children: [children, /* @__PURE__ */ (0, import_jsx_runtime$4.jsx)(TabsIndicator, { className: style_default$1.indicator })]
			});
		});
	})))();
}
//#endregion
//#region ../packages/ui/build-module/tabs/context.mjs
function useRegisterTabDev() {
	const context = (0, import_react.useContext)(TabsValidationContext);
	(0, import_react.useEffect)(() => {
		if (context) return context.registerTab();
	}, [context]);
}
function useRegisterTabProd() {}
function useRegisterPanelDev() {
	const context = (0, import_react.useContext)(TabsValidationContext);
	(0, import_react.useEffect)(() => {
		if (context) return context.registerPanel();
	}, [context]);
}
function useRegisterPanelProd() {}
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
	return /* @__PURE__ */ (0, import_jsx_runtime$3.jsx)(TabsValidationContext.Provider, {
		value: contextValue,
		children
	});
}
function TabsValidationProviderProd({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime$3.jsx)(import_jsx_runtime$3.Fragment, { children });
}
var import_jsx_runtime$3, VALIDATION_ENABLED, TabsValidationContext, useRegisterTab, useRegisterPanel, TabsValidationProvider;
function init_context() {
	return (init_context = __esmMin((() => {
		init_react();
		init_use_schedule_validation();
		import_jsx_runtime$3 = require_jsx_runtime();
		VALIDATION_ENABLED = true;
		TabsValidationContext = VALIDATION_ENABLED ? (0, import_react.createContext)(null) : null;
		useRegisterTab = VALIDATION_ENABLED ? useRegisterTabDev : useRegisterTabProd;
		useRegisterPanel = VALIDATION_ENABLED ? useRegisterPanelDev : useRegisterPanelProd;
		TabsValidationProvider = VALIDATION_ENABLED ? TabsValidationProviderDev : TabsValidationProviderProd;
	})))();
}
//#endregion
//#region ../packages/ui/build-module/tabs/panel.mjs
function getRuntime$1() {
	const globalScope = globalThis;
	if (globalScope.__wpStyleRuntime) return globalScope.__wpStyleRuntime;
	globalScope.__wpStyleRuntime = {
		documents: /* @__PURE__ */ new Map(),
		styles: /* @__PURE__ */ new Map(),
		injectedStyles: /* @__PURE__ */ new WeakMap()
	};
	if (typeof document !== "undefined") registerDocument$1(document);
	return globalScope.__wpStyleRuntime;
}
function documentContainsStyleHash$1(targetDocument, hash) {
	if (!targetDocument.head) return false;
	for (const style of targetDocument.head.querySelectorAll(`style[${STYLE_HASH_ATTRIBUTE$1}]`)) if (style.getAttribute(STYLE_HASH_ATTRIBUTE$1) === hash) return true;
	return false;
}
function injectStyle$1(targetDocument, hash, css) {
	if (!targetDocument.head) return;
	const runtime = getRuntime$1();
	let injectedStyles = runtime.injectedStyles.get(targetDocument);
	if (!injectedStyles) {
		injectedStyles = /* @__PURE__ */ new Set();
		runtime.injectedStyles.set(targetDocument, injectedStyles);
	}
	if (injectedStyles.has(hash)) return;
	if (documentContainsStyleHash$1(targetDocument, hash)) {
		injectedStyles.add(hash);
		return;
	}
	const style = targetDocument.createElement("style");
	style.setAttribute(STYLE_HASH_ATTRIBUTE$1, hash);
	style.appendChild(targetDocument.createTextNode(css));
	targetDocument.head.appendChild(style);
	injectedStyles.add(hash);
}
function registerDocument$1(targetDocument) {
	const runtime = getRuntime$1();
	runtime.documents.set(targetDocument, (runtime.documents.get(targetDocument) ?? 0) + 1);
	for (const [hash, css] of runtime.styles) injectStyle$1(targetDocument, hash, css);
	return () => {
		const count = runtime.documents.get(targetDocument);
		if (count === void 0) return;
		if (count <= 1) {
			runtime.documents.delete(targetDocument);
			return;
		}
		runtime.documents.set(targetDocument, count - 1);
	};
}
function registerStyle$1(hash, css) {
	const runtime = getRuntime$1();
	runtime.styles.set(hash, css);
	for (const targetDocument of runtime.documents.keys()) injectStyle$1(targetDocument, hash, css);
}
var import_jsx_runtime$2, STYLE_HASH_ATTRIBUTE$1, global_css_defense_default, focus_module_default, Panel;
function init_panel() {
	return (init_panel = __esmMin((() => {
		init_react();
		init_clsx();
		init_TabsPanel();
		init_context();
		import_jsx_runtime$2 = require_jsx_runtime();
		STYLE_HASH_ATTRIBUTE$1 = "data-wp-hash";
		if (typeof process === "undefined" || false) registerStyle$1("abb19c3171", "._6defc79820e382c6__button{box-sizing:var(--_gcd-button-box-sizing,border-box);font-family:var(--_gcd-button-font-family,inherit);font-size:var(--_gcd-button-font-size,inherit);font-weight:var(--_gcd-button-font-weight,inherit)}.d2cff2e5dea83bd1__input{box-sizing:var(--_gcd-input-box-sizing,border-box);font-family:var(--_gcd-input-font-family,inherit);font-size:var(--_gcd-input-font-size,inherit);font-weight:var(--_gcd-input-font-weight,inherit);margin:var(--_gcd-input-margin,0);&::placeholder{color:var(--_gcd-input-placeholder-color,var(--wpds-color-foreground-interactive-neutral-weak,#707070))}&:is(textarea,[type=text],[type=password],[type=color],[type=date],[type=datetime],[type=datetime-local],[type=email],[type=month],[type=number],[type=search],[type=tel],[type=time],[type=url],[type=week]){background-color:var(--_gcd-input-background-color,transparent);border:var(--_gcd-input-border,none);border-radius:var(--_gcd-input-border-radius,0);box-shadow:var(--_gcd-input-box-shadow,0 0 0 transparent);color:var(--_gcd-input-color,var(--wpds-color-foreground-interactive-neutral,#1e1e1e));&:focus{border-color:var(--_gcd-input-border-color-focus,var(--wp-admin-theme-color));box-shadow:var(--_gcd-input-box-shadow-focus,none);outline:var(--_gcd-input-outline-focus,none)}&:disabled{background:var(--_gcd-input-background-disabled,transparent);border-color:var(--_gcd-input-border-color-disabled,transparent);box-shadow:var(--_gcd-input-box-shadow-disabled,none);color:var(--_gcd-input-color-disabled,var(--wpds-color-foreground-interactive-neutral-disabled,#8d8d8d))}}&:is(textarea,[type=text],[type=password],[type=date],[type=datetime],[type=datetime-local],[type=email],[type=month],[type=number],[type=search],[type=tel],[type=time],[type=url],[type=week]){line-height:var(--_gcd-input-line-height,inherit);min-height:var(--_gcd-input-min-height,auto);padding:var(--_gcd-input-padding,0)}}._547d86373d02e108__textarea{box-sizing:var(--_gcd-textarea-box-sizing,border-box);overflow:var(--_gcd-textarea-overflow,auto);resize:var(--_gcd-textarea-resize,block)}._8c15fd0ed9f28ba4__div{outline:var(--_gcd-div-outline,0 solid transparent)}p._43cec3e1eec1066d__p{font-size:var(--_gcd-p-font-size,13px);line-height:var(--_gcd-p-line-height,1.5);margin:var(--_gcd-p-margin,0)}:is(h1,h2,h3,h4,h5,h6).e97669c6d9a38497__heading{color:var(--_gcd-heading-color,var(--wpds-color-foreground-content-neutral,#1e1e1e));font-size:var(--_gcd-heading-font-size,inherit);font-weight:var(--_gcd-heading-font-weight,var(--wpds-typography-font-weight-emphasis,600));margin:var(--_gcd-heading-margin,0)}._2c0831b0499dbd6e__a,._2c0831b0499dbd6e__a:is(:hover,:focus,:active){border-radius:var(--_gcd-a-border-radius,0);box-shadow:var(--_gcd-a-box-shadow,none);color:var(--_gcd-a-color,inherit);outline:var(--_gcd-a-outline,0 solid transparent);transition:var(--_gcd-a-transition,none)}.c59a0ebebd71fa4a__ol{list-style:var(--_gcd-ol-list-style,none);margin:var(--_gcd-ol-margin,0);padding-block:var(--_gcd-ol-padding-block,0);padding-inline:var(--_gcd-ol-padding-inline,0)}._46b5cb0c8e24e8c9__li{margin:var(--_gcd-li-margin,0)}[role=treeitem] span._400bf7ee0c6061a9__span[aria-hidden]{display:var(--_gcd-span-display,inline);font-family:var(--_gcd-span-font-family,inherit);font-size:var(--_gcd-span-font-size,inherit);line-height:var(--_gcd-span-line-height,1);pointer-events:var(--_gcd-span-pointer-events,auto);position:var(--_gcd-span-position,static)}");
		global_css_defense_default = {
			"button": "_6defc79820e382c6__button",
			"input": "d2cff2e5dea83bd1__input",
			"textarea": "_547d86373d02e108__textarea",
			"div": "_8c15fd0ed9f28ba4__div",
			"p": "_43cec3e1eec1066d__p",
			"heading": "e97669c6d9a38497__heading",
			"a": "_2c0831b0499dbd6e__a",
			"ol": "c59a0ebebd71fa4a__ol",
			"li": "_46b5cb0c8e24e8c9__li",
			"span": "_400bf7ee0c6061a9__span"
		};
		if (typeof process === "undefined" || false) registerStyle$1("7c3267f794", "@layer wp-ui{@layer utilities, components, compositions, overrides;@layer utilities{.af79fb116edb0dd7__outset-ring--focus:focus,.dfcfdc28396e5d98__outset-ring--focus-visible:focus-visible,.e5cd9ee879f6403a__outset-ring--focus-within:focus-within{--_gcd-a-outline:var(--wpds-border-width-focus,var(--wp-admin-border-width-focus,2px)) solid var(--focus-color,var(--wpds-color-stroke-focus,var(--wp-admin-theme-color,#3858e9)));--_gcd-div-outline:var(--wpds-border-width-focus,var(--wp-admin-border-width-focus,2px)) solid var(--focus-color,var(--wpds-color-stroke-focus,var(--wp-admin-theme-color,#3858e9)));outline:var(--wpds-border-width-focus,var(--wp-admin-border-width-focus,2px)) solid var(--focus-color,var(--wpds-color-stroke-focus,var(--wp-admin-theme-color,#3858e9)));outline-offset:var(--wpds-border-width-focus,var(--wp-admin-border-width-focus,2px))}._3c9f5ee9fc9c136d__outset-ring--focus-within-except-active:focus-within,.abc777e9713fa711__outset-ring--focus-except-active:focus{outline:none}._3c9f5ee9fc9c136d__outset-ring--focus-within-except-active:focus-within:not(:has(:active)),.abc777e9713fa711__outset-ring--focus-except-active:focus:not(:active){--_gcd-a-outline:var(--wpds-border-width-focus,var(--wp-admin-border-width-focus,2px)) solid var(--focus-color,var(--wpds-color-stroke-focus,var(--wp-admin-theme-color,#3858e9)));--_gcd-div-outline:var(--wpds-border-width-focus,var(--wp-admin-border-width-focus,2px)) solid var(--focus-color,var(--wpds-color-stroke-focus,var(--wp-admin-theme-color,#3858e9)));outline:var(--wpds-border-width-focus,var(--wp-admin-border-width-focus,2px)) solid var(--focus-color,var(--wpds-color-stroke-focus,var(--wp-admin-theme-color,#3858e9)));outline-offset:var(--wpds-border-width-focus,var(--wp-admin-border-width-focus,2px))}}}");
		focus_module_default = {
			"outset-ring--focus": "af79fb116edb0dd7__outset-ring--focus",
			"outset-ring--focus-visible": "dfcfdc28396e5d98__outset-ring--focus-visible",
			"outset-ring--focus-within": "e5cd9ee879f6403a__outset-ring--focus-within",
			"outset-ring--focus-except-active": "abc777e9713fa711__outset-ring--focus-except-active",
			"outset-ring--focus-within-except-active": "_3c9f5ee9fc9c136d__outset-ring--focus-within-except-active"
		};
		Panel = (0, import_react.forwardRef)(function TabPanel({ className, ...otherProps }, forwardedRef) {
			useRegisterPanel();
			return /* @__PURE__ */ (0, import_jsx_runtime$2.jsx)(TabsPanel, {
				ref: forwardedRef,
				className: clsx(global_css_defense_default.div, focus_module_default["outset-ring--focus-visible"], className),
				...otherProps
			});
		});
	})))();
}
//#endregion
//#region ../packages/ui/build-module/tabs/root.mjs
var import_jsx_runtime$1, Root;
function init_root() {
	return (init_root = __esmMin((() => {
		init_react();
		init_TabsRoot();
		init_context();
		init_direction_provider();
		import_jsx_runtime$1 = require_jsx_runtime();
		Root = (0, import_react.forwardRef)(function TabsRoot$1({ ...otherProps }, forwardedRef) {
			return /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)(DirectionProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)(TabsValidationProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)(TabsRoot, {
				ref: forwardedRef,
				...otherProps
			}) }) });
		});
	})))();
}
//#endregion
//#region ../packages/ui/build-module/tabs/tab.mjs
function getRuntime() {
	const globalScope = globalThis;
	if (globalScope.__wpStyleRuntime) return globalScope.__wpStyleRuntime;
	globalScope.__wpStyleRuntime = {
		documents: /* @__PURE__ */ new Map(),
		styles: /* @__PURE__ */ new Map(),
		injectedStyles: /* @__PURE__ */ new WeakMap()
	};
	if (typeof document !== "undefined") registerDocument(document);
	return globalScope.__wpStyleRuntime;
}
function documentContainsStyleHash(targetDocument, hash) {
	if (!targetDocument.head) return false;
	for (const style of targetDocument.head.querySelectorAll(`style[${STYLE_HASH_ATTRIBUTE}]`)) if (style.getAttribute(STYLE_HASH_ATTRIBUTE) === hash) return true;
	return false;
}
function injectStyle(targetDocument, hash, css) {
	if (!targetDocument.head) return;
	const runtime = getRuntime();
	let injectedStyles = runtime.injectedStyles.get(targetDocument);
	if (!injectedStyles) {
		injectedStyles = /* @__PURE__ */ new Set();
		runtime.injectedStyles.set(targetDocument, injectedStyles);
	}
	if (injectedStyles.has(hash)) return;
	if (documentContainsStyleHash(targetDocument, hash)) {
		injectedStyles.add(hash);
		return;
	}
	const style = targetDocument.createElement("style");
	style.setAttribute(STYLE_HASH_ATTRIBUTE, hash);
	style.appendChild(targetDocument.createTextNode(css));
	targetDocument.head.appendChild(style);
	injectedStyles.add(hash);
}
function registerDocument(targetDocument) {
	const runtime = getRuntime();
	runtime.documents.set(targetDocument, (runtime.documents.get(targetDocument) ?? 0) + 1);
	for (const [hash, css] of runtime.styles) injectStyle(targetDocument, hash, css);
	return () => {
		const count = runtime.documents.get(targetDocument);
		if (count === void 0) return;
		if (count <= 1) {
			runtime.documents.delete(targetDocument);
			return;
		}
		runtime.documents.set(targetDocument, count - 1);
	};
}
function registerStyle(hash, css) {
	const runtime = getRuntime();
	runtime.styles.set(hash, css);
	for (const targetDocument of runtime.documents.keys()) injectStyle(targetDocument, hash, css);
}
var import_jsx_runtime, STYLE_HASH_ATTRIBUTE, style_default, Tab;
function init_tab() {
	return (init_tab = __esmMin((() => {
		init_react();
		init_clsx();
		init_TabsTab();
		init_context();
		import_jsx_runtime = require_jsx_runtime();
		STYLE_HASH_ATTRIBUTE = "data-wp-hash";
		if (typeof process === "undefined" || false) registerStyle("f3c08da521", "@layer wp-ui{@layer utilities, components, compositions, overrides;@layer components{._7313adbc8a112e90__tablist{--direction-start:left;--direction-end:right;align-items:stretch;display:flex;overflow-inline:auto;overscroll-behavior-inline:none;position:relative;&:dir(rtl){--direction-start:right;--direction-end:left}&[data-orientation=horizontal]{--fade-width:4rem;--fade-gradient-base:transparent 0%,#000 var(--fade-width);--fade-gradient-composed:var(--fade-gradient-base),#000 60%,transparent 50%;width:fit-content;&:not(.eb7aaeb14de04857__is-scrolling){overflow:visible}&._9f2ac729c68a735a__is-overflowing-first{mask-image:linear-gradient(to var(--direction-end),var(--fade-gradient-base))}&._81c799c1f3cdd261__is-overflowing-last{mask-image:linear-gradient(to var(--direction-start),var(--fade-gradient-base))}&._9f2ac729c68a735a__is-overflowing-first._81c799c1f3cdd261__is-overflowing-last{mask-image:linear-gradient(to right,var(--fade-gradient-composed)),linear-gradient(to left,var(--fade-gradient-composed))}&._59228b5227f38a99__is-minimal-variant{gap:1rem}}&[data-orientation=vertical]{flex-direction:column}}._1c37dcfaa1ad8cda__indicator{@media not (prefers-reduced-motion){transition-duration:.2s;transition-property:translate,width,height;transition-timing-function:ease-out}background-color:var(--wpds-color-foreground-interactive-neutral,#1e1e1e);outline:2px solid transparent;outline-offset:-1px;pointer-events:none;position:absolute;z-index:1;._7313adbc8a112e90__tablist:has(>.a5fd8814f195aa5e__tab[aria-selected=true]:not([data-disabled]):focus-visible)\n				&{background-color:var(--wpds-color-foreground-interactive-neutral-active,#1e1e1e)}&[data-orientation=horizontal]{bottom:0;height:var(--wpds-border-width-focus,var(--wp-admin-border-width-focus,2px));left:0;translate:var(--active-tab-left) 0;width:var(--active-tab-width)}&[data-orientation=vertical]{height:max(0px,calc(var(--active-tab-height) - var(--wpds-dimension-padding-md, 12px)*2));inset-inline-start:0;top:var(--wpds-dimension-padding-md,12px);translate:0 var(--active-tab-top);width:var(--wpds-border-width-focus,var(--wp-admin-border-width-focus,2px))}}.a5fd8814f195aa5e__tab{align-items:center;background:transparent;border:none;border-radius:0;box-shadow:none;color:var(--wpds-color-foreground-interactive-neutral,#1e1e1e);cursor:var(--wpds-cursor-control,pointer);display:flex;flex:1 0 auto;font-family:var(--wpds-typography-font-family-body,-apple-system,system-ui,\"Segoe UI\",\"Roboto\",\"Oxygen-Sans\",\"Ubuntu\",\"Cantarell\",\"Helvetica Neue\",sans-serif);font-size:var(--wpds-typography-font-size-md,13px);font-weight:400;line-height:1.2;outline:none;padding:0;position:relative;white-space:nowrap;z-index:1;&:is([aria-selected=true],[data-disabled]){cursor:default}&[data-disabled]{color:var(--wpds-color-foreground-interactive-neutral-disabled,#8d8d8d);@media (forced-colors:active){color:GrayText}}&:not([data-disabled]):is(:not([aria-selected=true]):hover,:not([aria-selected=true]):active,:focus-visible){color:var(--wpds-color-foreground-interactive-neutral-active,#1e1e1e);&:after{background-color:var(--wpds-color-background-interactive-neutral-weak-active,#ededed);opacity:1}}&:after,&:before{border-radius:var(--wpds-border-radius-sm,2px);opacity:0;outline:var(--wpds-border-width-focus,var(--wp-admin-border-width-focus,2px)) solid transparent;pointer-events:none;position:absolute;z-index:-1;@media not (prefers-reduced-motion){transition:opacity .1s linear}}&:focus-visible:after{opacity:1;outline-color:var(--wpds-color-stroke-focus,var(--wp-admin-theme-color,#3858e9))}[data-orientation=horizontal] &{height:48px;padding-inline:var(--wpds-dimension-padding-lg,16px);scroll-margin:24px;&:after{content:\"\";inset-block:calc(var(--wpds-dimension-padding-md, 12px) + var(--wpds-dimension-padding-xs, 4px));inset-inline:var(--wpds-dimension-padding-lg,16px);outline-offset:var(--wpds-dimension-padding-xs,4px)}&:not([data-disabled]):is(:not([aria-selected=true]):hover,:not([aria-selected=true]):active,:focus-visible):after{box-shadow:0 0 0 var(--wpds-dimension-padding-xs,4px) var(--wpds-color-background-interactive-neutral-weak-active,#ededed)}}._59228b5227f38a99__is-minimal-variant[data-orientation=horizontal] &{padding-inline:0;&:after{inset-inline:0}}._59228b5227f38a99__is-minimal-variant.eb7aaeb14de04857__is-scrolling[data-orientation=horizontal] &{&:before{content:\"\";inset-block:var(--wpds-dimension-padding-md,12px);inset-inline:round(up,var(--wpds-border-width-focus,var(--wp-admin-border-width-focus,2px)),1px);z-index:0}&:focus-visible{&:before{opacity:1;outline-color:var(--wpds-color-stroke-focus,var(--wp-admin-theme-color,#3858e9))}&:after{outline:none}}}[data-orientation=vertical] &{min-height:var(--wpds-dimension-size-lg,40px);padding:var(--wpds-dimension-padding-md,12px);&:after{content:\"\";inset:0;outline-offset:calc(var(--wpds-border-width-focus, var(--wp-admin-border-width-focus, 2px))*-1)}}}._5dfc77e6edd345d4__tab-children{align-items:center;display:flex;flex-grow:1;[data-orientation=horizontal] &{justify-content:center}[data-orientation=vertical] &{justify-content:start}}}}");
		style_default = {
			"tablist": "_7313adbc8a112e90__tablist",
			"is-scrolling": "eb7aaeb14de04857__is-scrolling",
			"is-overflowing-first": "_9f2ac729c68a735a__is-overflowing-first",
			"is-overflowing-last": "_81c799c1f3cdd261__is-overflowing-last",
			"is-minimal-variant": "_59228b5227f38a99__is-minimal-variant",
			"indicator": "_1c37dcfaa1ad8cda__indicator",
			"tab": "a5fd8814f195aa5e__tab",
			"tab-children": "_5dfc77e6edd345d4__tab-children"
		};
		Tab = (0, import_react.forwardRef)(function UnforwardedTab({ className, children, ...otherProps }, forwardedRef) {
			useRegisterTab();
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTab, {
				ref: forwardedRef,
				className: clsx(style_default.tab, className),
				...otherProps,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: style_default["tab-children"],
					children
				})
			});
		});
	})))();
}
//#endregion
export { Panel as a, init_list as c, init_root as i, init_tab as n, init_panel as o, Root as r, List as s, Tab as t };
