import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C1RZKCc6.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { n as use_isomorphic_layout_effect_default, t as init_use_isomorphic_layout_effect } from "./use-isomorphic-layout-effect-XEh9CxbX.js";
import { a as init_clsx, i as clsx } from "./iframe-Dbjzp1_m.js";
import { i as init_mergeProps, o as mergeProps } from "./useRenderElement-Dkv6YH0v.js";
import { n as init_icon, t as Icon } from "./icon-5WS0jz-X.js";
import { a as CollapsibleRoot, i as init_CollapsibleTrigger, n as init_CollapsiblePanel, o as init_CollapsibleRoot, r as CollapsibleTrigger, t as CollapsiblePanel } from "./CollapsiblePanel-CEMehzfT.js";
import { n as useRender, t as init_useRender } from "./useRender-JXgJ-9ZS.js";
import { n as init_text, t as Text } from "./text-BWRv8yVx.js";
import { t as chevron_down_default } from "./chevron-down-tfDAaIiw.js";
import { a as Header, c as init_root$2, i as init_content$1, o as init_header$1, r as Content, s as Root$1 } from "./title-BaVWkKAd.js";
import { r as init_build_module } from "./library.story-CFsmdbdz.js";
//#region ../packages/ui/build-module/collapsible/panel.mjs
var import_jsx_runtime$6, Panel;
function init_panel() {
	return (init_panel = __esmMin((() => {
		init_CollapsiblePanel();
		init_react();
		import_jsx_runtime$6 = require_jsx_runtime();
		Panel = (0, import_react.forwardRef)(function CollapsiblePanel$1(props, forwardedRef) {
			return /* @__PURE__ */ (0, import_jsx_runtime$6.jsx)(CollapsiblePanel, {
				ref: forwardedRef,
				...props
			});
		});
	})))();
}
//#endregion
//#region ../packages/ui/build-module/collapsible/root.mjs
var import_jsx_runtime$5, Root;
function init_root() {
	return (init_root = __esmMin((() => {
		init_CollapsibleRoot();
		init_react();
		import_jsx_runtime$5 = require_jsx_runtime();
		Root = (0, import_react.forwardRef)(function CollapsibleRoot$1(props, forwardedRef) {
			return /* @__PURE__ */ (0, import_jsx_runtime$5.jsx)(CollapsibleRoot, {
				ref: forwardedRef,
				...props
			});
		});
	})))();
}
//#endregion
//#region ../packages/ui/build-module/collapsible/trigger.mjs
var import_jsx_runtime$4, Trigger;
function init_trigger() {
	return (init_trigger = __esmMin((() => {
		init_CollapsibleTrigger();
		init_react();
		import_jsx_runtime$4 = require_jsx_runtime();
		Trigger = (0, import_react.forwardRef)(function CollapsibleTrigger$1(props, forwardedRef) {
			return /* @__PURE__ */ (0, import_jsx_runtime$4.jsx)(CollapsibleTrigger, {
				ref: forwardedRef,
				...props
			});
		});
	})))();
}
//#endregion
//#region ../packages/ui/build-module/collapsible-card/root.mjs
var import_jsx_runtime$3, Root3;
function init_root$1() {
	return (init_root$1 = __esmMin((() => {
		init_react();
		init_root$2();
		init_root();
		import_jsx_runtime$3 = require_jsx_runtime();
		Root3 = (0, import_react.forwardRef)(function CollapsibleCardRoot({ render, ...restProps }, ref) {
			return /* @__PURE__ */ (0, import_jsx_runtime$3.jsx)(Root, {
				ref,
				render: /* @__PURE__ */ (0, import_jsx_runtime$3.jsx)(Root$1, { render }),
				...restProps
			});
		});
	})))();
}
//#endregion
//#region ../packages/ui/build-module/collapsible-card/context.mjs
var HeaderDescriptionIdContext;
function init_context() {
	return (init_context = __esmMin((() => {
		init_react();
		HeaderDescriptionIdContext = (0, import_react.createContext)(null);
	})))();
}
//#endregion
//#region ../packages/ui/build-module/collapsible-card/header.mjs
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
var import_jsx_runtime$2, STYLE_HASH_ATTRIBUTE$2, style_module_default$2, global_css_defense_default, Header2;
function init_header() {
	return (init_header = __esmMin((() => {
		init_mergeProps(), init_useRender();
		init_clsx();
		init_use_isomorphic_layout_effect();
		init_react();
		init_build_module();
		init_header$1();
		init_trigger();
		init_icon();
		init_context();
		import_jsx_runtime$2 = require_jsx_runtime();
		STYLE_HASH_ATTRIBUTE$2 = "data-wp-hash";
		if (typeof process === "undefined" || false) registerStyle$2("66b8e83c76", "@layer wp-ui{@layer utilities, components, compositions, overrides;@layer components{._572e7c546522c522__heading-wrapper{--_gcd-heading-color:inherit;--_gcd-heading-font-size:inherit;--_gcd-heading-font-weight:inherit;--_gcd-heading-margin:0;font-family:inherit;line-height:inherit}._7ea7cf191a8d26b8__header-content{flex:1;min-width:0}._8f14576749c57845__header-description{color:var(--wpds-color-foreground-content-neutral-weak,#707070)}._48cdf1e0d42fc13e__header-trigger-positioner{align-self:flex-start;flex-shrink:0;margin-block-start:calc(var(--wpds-typography-line-height-sm, 20px)/2);max-height:0;overflow:visible}._77d30921d8288eaf__header-trigger-wrapper{border-radius:var(--wpds-border-radius-sm,2px);display:flex;translate:0 -50%}.c11e44555738d97f__header:focus-visible ._77d30921d8288eaf__header-trigger-wrapper{--_gcd-a-outline:var(--wpds-border-width-focus,var(--wp-admin-border-width-focus,2px)) solid var(--focus-color,var(--wpds-color-stroke-focus,var(--wp-admin-theme-color,#3858e9)));--_gcd-div-outline:var(--wpds-border-width-focus,var(--wp-admin-border-width-focus,2px)) solid var(--focus-color,var(--wpds-color-stroke-focus,var(--wp-admin-theme-color,#3858e9)));outline:var(--wpds-border-width-focus,var(--wp-admin-border-width-focus,2px)) solid var(--focus-color,var(--wpds-color-stroke-focus,var(--wp-admin-theme-color,#3858e9)));outline-offset:var(--wpds-border-width-focus,var(--wp-admin-border-width-focus,2px))}@media not (prefers-reduced-motion){._22a30cbbb7b656f4__header-trigger{transition:rotate .15s ease-out}}.c11e44555738d97f__header[data-panel-open] ._22a30cbbb7b656f4__header-trigger{rotate:180deg}.c11e44555738d97f__header[data-disabled] ._22a30cbbb7b656f4__header-trigger{color:var(--wpds-color-foreground-interactive-neutral-disabled,#8d8d8d)}._90333ddfaa28d232__content{height:var(--collapsible-panel-height);margin-block-start:var(--wp-ui-card-header-content-margin);overflow:hidden}._90333ddfaa28d232__content._20c2575829a8af9b__overflow-visible{overflow:visible}._90333ddfaa28d232__content[hidden]:not([hidden=until-found]){display:none}._90333ddfaa28d232__content[data-ending-style],._90333ddfaa28d232__content[data-starting-style]{height:0}@media not (prefers-reduced-motion){._90333ddfaa28d232__content{transition:all .15s ease-out}}}@layer compositions{.c269ffa2b76fe947__content-inner{padding-block-start:0}.c11e44555738d97f__header{align-items:stretch;display:flex;flex-direction:row;gap:var(--wpds-dimension-gap-sm,8px);outline:none}.c11e44555738d97f__header:not([data-disabled]){cursor:var(--wpds-cursor-control,pointer)}}}");
		style_module_default$2 = {
			"heading-wrapper": "_572e7c546522c522__heading-wrapper",
			"header-content": "_7ea7cf191a8d26b8__header-content",
			"header-description": "_8f14576749c57845__header-description",
			"header-trigger-positioner": "_48cdf1e0d42fc13e__header-trigger-positioner",
			"header-trigger-wrapper": "_77d30921d8288eaf__header-trigger-wrapper",
			"header": "c11e44555738d97f__header",
			"header-trigger": "_22a30cbbb7b656f4__header-trigger",
			"content": "_90333ddfaa28d232__content",
			"overflow-visible": "_20c2575829a8af9b__overflow-visible",
			"content-inner": "c269ffa2b76fe947__content-inner"
		};
		if (typeof process === "undefined" || false) registerStyle$2("abb19c3171", "._6defc79820e382c6__button{box-sizing:var(--_gcd-button-box-sizing,border-box);font-family:var(--_gcd-button-font-family,inherit);font-size:var(--_gcd-button-font-size,inherit);font-weight:var(--_gcd-button-font-weight,inherit)}.d2cff2e5dea83bd1__input{box-sizing:var(--_gcd-input-box-sizing,border-box);font-family:var(--_gcd-input-font-family,inherit);font-size:var(--_gcd-input-font-size,inherit);font-weight:var(--_gcd-input-font-weight,inherit);margin:var(--_gcd-input-margin,0);&::placeholder{color:var(--_gcd-input-placeholder-color,var(--wpds-color-foreground-interactive-neutral-weak,#707070))}&:is(textarea,[type=text],[type=password],[type=color],[type=date],[type=datetime],[type=datetime-local],[type=email],[type=month],[type=number],[type=search],[type=tel],[type=time],[type=url],[type=week]){background-color:var(--_gcd-input-background-color,transparent);border:var(--_gcd-input-border,none);border-radius:var(--_gcd-input-border-radius,0);box-shadow:var(--_gcd-input-box-shadow,0 0 0 transparent);color:var(--_gcd-input-color,var(--wpds-color-foreground-interactive-neutral,#1e1e1e));&:focus{border-color:var(--_gcd-input-border-color-focus,var(--wp-admin-theme-color));box-shadow:var(--_gcd-input-box-shadow-focus,none);outline:var(--_gcd-input-outline-focus,none)}&:disabled{background:var(--_gcd-input-background-disabled,transparent);border-color:var(--_gcd-input-border-color-disabled,transparent);box-shadow:var(--_gcd-input-box-shadow-disabled,none);color:var(--_gcd-input-color-disabled,var(--wpds-color-foreground-interactive-neutral-disabled,#8d8d8d))}}&:is(textarea,[type=text],[type=password],[type=date],[type=datetime],[type=datetime-local],[type=email],[type=month],[type=number],[type=search],[type=tel],[type=time],[type=url],[type=week]){line-height:var(--_gcd-input-line-height,inherit);min-height:var(--_gcd-input-min-height,auto);padding:var(--_gcd-input-padding,0)}}._547d86373d02e108__textarea{box-sizing:var(--_gcd-textarea-box-sizing,border-box);overflow:var(--_gcd-textarea-overflow,auto);resize:var(--_gcd-textarea-resize,block)}._8c15fd0ed9f28ba4__div{outline:var(--_gcd-div-outline,0 solid transparent)}p._43cec3e1eec1066d__p{font-size:var(--_gcd-p-font-size,13px);line-height:var(--_gcd-p-line-height,1.5);margin:var(--_gcd-p-margin,0)}:is(h1,h2,h3,h4,h5,h6).e97669c6d9a38497__heading{color:var(--_gcd-heading-color,var(--wpds-color-foreground-content-neutral,#1e1e1e));font-size:var(--_gcd-heading-font-size,inherit);font-weight:var(--_gcd-heading-font-weight,var(--wpds-typography-font-weight-emphasis,600));margin:var(--_gcd-heading-margin,0)}._2c0831b0499dbd6e__a,._2c0831b0499dbd6e__a:is(:hover,:focus,:active){border-radius:var(--_gcd-a-border-radius,0);box-shadow:var(--_gcd-a-box-shadow,none);color:var(--_gcd-a-color,inherit);outline:var(--_gcd-a-outline,0 solid transparent);transition:var(--_gcd-a-transition,none)}.c59a0ebebd71fa4a__ol{list-style:var(--_gcd-ol-list-style,none);margin:var(--_gcd-ol-margin,0);padding-block:var(--_gcd-ol-padding-block,0);padding-inline:var(--_gcd-ol-padding-inline,0)}._46b5cb0c8e24e8c9__li{margin:var(--_gcd-li-margin,0)}[role=treeitem] span._400bf7ee0c6061a9__span[aria-hidden]{display:var(--_gcd-span-display,inline);font-family:var(--_gcd-span-font-family,inherit);font-size:var(--_gcd-span-font-size,inherit);line-height:var(--_gcd-span-line-height,1);pointer-events:var(--_gcd-span-pointer-events,auto);position:var(--_gcd-span-position,static)}");
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
		Header2 = (0, import_react.forwardRef)(function CollapsibleCardHeader({ children, className, render, "aria-describedby": ariaDescribedByProp, ...restProps }, ref) {
			const [descriptionIds, setDescriptionIds] = (0, import_react.useState)([]);
			const [orderedDescriptionIds, setOrderedDescriptionIds] = (0, import_react.useState)([]);
			const headerContentRef = (0, import_react.useRef)(null);
			const registerDescriptionId = (0, import_react.useCallback)((id) => {
				setDescriptionIds((currentDescriptionIds) => {
					if (currentDescriptionIds.includes(id)) return currentDescriptionIds;
					return [...currentDescriptionIds, id];
				});
				return () => {
					setDescriptionIds((currentDescriptionIds) => currentDescriptionIds.filter((descriptionId) => descriptionId !== id));
				};
			}, []);
			const contextValue = (0, import_react.useMemo)(() => ({ registerDescriptionId }), [registerDescriptionId]);
			use_isomorphic_layout_effect_default(() => {
				const registeredDescriptionIds = new Set(descriptionIds);
				const nextDescriptionIds = Array.from(headerContentRef.current?.querySelectorAll("[id]") ?? []).map((element) => element.id).filter((id) => registeredDescriptionIds.has(id));
				setOrderedDescriptionIds((currentDescriptionIds) => {
					if (currentDescriptionIds.length === nextDescriptionIds.length && currentDescriptionIds.every((id, index) => id === nextDescriptionIds[index])) return currentDescriptionIds;
					return nextDescriptionIds;
				});
			});
			const ariaDescribedBy = Array.from(/* @__PURE__ */ new Set([...ariaDescribedByProp?.split(/\s+/).filter(Boolean) ?? [], ...orderedDescriptionIds])).join(" ") || void 0;
			return useRender({
				defaultTagName: "div",
				render,
				ref,
				props: mergeProps(restProps, {
					className: clsx(global_css_defense_default.heading, style_module_default$2["heading-wrapper"], className),
					children: /* @__PURE__ */ (0, import_jsx_runtime$2.jsx)(HeaderDescriptionIdContext.Provider, {
						value: contextValue,
						children: /* @__PURE__ */ (0, import_jsx_runtime$2.jsxs)(Trigger, {
							className: style_module_default$2.header,
							render: /* @__PURE__ */ (0, import_jsx_runtime$2.jsx)(Header, {}),
							nativeButton: false,
							"aria-describedby": ariaDescribedBy,
							children: [/* @__PURE__ */ (0, import_jsx_runtime$2.jsx)("div", {
								ref: headerContentRef,
								className: style_module_default$2["header-content"],
								children
							}), /* @__PURE__ */ (0, import_jsx_runtime$2.jsx)("div", {
								className: clsx(style_module_default$2["header-trigger-positioner"]),
								children: /* @__PURE__ */ (0, import_jsx_runtime$2.jsx)("div", {
									className: clsx(style_module_default$2["header-trigger-wrapper"], global_css_defense_default.div),
									children: /* @__PURE__ */ (0, import_jsx_runtime$2.jsx)(Icon, {
										icon: chevron_down_default,
										className: style_module_default$2["header-trigger"]
									})
								})
							})]
						})
					})
				})
			});
		});
	})))();
}
//#endregion
//#region ../packages/ui/build-module/collapsible-card/header-description.mjs
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
var import_jsx_runtime$1, STYLE_HASH_ATTRIBUTE$1, style_module_default$1, DEFAULT_TAG, HeaderDescription;
function init_header_description() {
	return (init_header_description = __esmMin((() => {
		init_clsx();
		init_react();
		init_context();
		init_text();
		import_jsx_runtime$1 = require_jsx_runtime();
		STYLE_HASH_ATTRIBUTE$1 = "data-wp-hash";
		if (typeof process === "undefined" || false) registerStyle$1("66b8e83c76", "@layer wp-ui{@layer utilities, components, compositions, overrides;@layer components{._572e7c546522c522__heading-wrapper{--_gcd-heading-color:inherit;--_gcd-heading-font-size:inherit;--_gcd-heading-font-weight:inherit;--_gcd-heading-margin:0;font-family:inherit;line-height:inherit}._7ea7cf191a8d26b8__header-content{flex:1;min-width:0}._8f14576749c57845__header-description{color:var(--wpds-color-foreground-content-neutral-weak,#707070)}._48cdf1e0d42fc13e__header-trigger-positioner{align-self:flex-start;flex-shrink:0;margin-block-start:calc(var(--wpds-typography-line-height-sm, 20px)/2);max-height:0;overflow:visible}._77d30921d8288eaf__header-trigger-wrapper{border-radius:var(--wpds-border-radius-sm,2px);display:flex;translate:0 -50%}.c11e44555738d97f__header:focus-visible ._77d30921d8288eaf__header-trigger-wrapper{--_gcd-a-outline:var(--wpds-border-width-focus,var(--wp-admin-border-width-focus,2px)) solid var(--focus-color,var(--wpds-color-stroke-focus,var(--wp-admin-theme-color,#3858e9)));--_gcd-div-outline:var(--wpds-border-width-focus,var(--wp-admin-border-width-focus,2px)) solid var(--focus-color,var(--wpds-color-stroke-focus,var(--wp-admin-theme-color,#3858e9)));outline:var(--wpds-border-width-focus,var(--wp-admin-border-width-focus,2px)) solid var(--focus-color,var(--wpds-color-stroke-focus,var(--wp-admin-theme-color,#3858e9)));outline-offset:var(--wpds-border-width-focus,var(--wp-admin-border-width-focus,2px))}@media not (prefers-reduced-motion){._22a30cbbb7b656f4__header-trigger{transition:rotate .15s ease-out}}.c11e44555738d97f__header[data-panel-open] ._22a30cbbb7b656f4__header-trigger{rotate:180deg}.c11e44555738d97f__header[data-disabled] ._22a30cbbb7b656f4__header-trigger{color:var(--wpds-color-foreground-interactive-neutral-disabled,#8d8d8d)}._90333ddfaa28d232__content{height:var(--collapsible-panel-height);margin-block-start:var(--wp-ui-card-header-content-margin);overflow:hidden}._90333ddfaa28d232__content._20c2575829a8af9b__overflow-visible{overflow:visible}._90333ddfaa28d232__content[hidden]:not([hidden=until-found]){display:none}._90333ddfaa28d232__content[data-ending-style],._90333ddfaa28d232__content[data-starting-style]{height:0}@media not (prefers-reduced-motion){._90333ddfaa28d232__content{transition:all .15s ease-out}}}@layer compositions{.c269ffa2b76fe947__content-inner{padding-block-start:0}.c11e44555738d97f__header{align-items:stretch;display:flex;flex-direction:row;gap:var(--wpds-dimension-gap-sm,8px);outline:none}.c11e44555738d97f__header:not([data-disabled]){cursor:var(--wpds-cursor-control,pointer)}}}");
		style_module_default$1 = {
			"heading-wrapper": "_572e7c546522c522__heading-wrapper",
			"header-content": "_7ea7cf191a8d26b8__header-content",
			"header-description": "_8f14576749c57845__header-description",
			"header-trigger-positioner": "_48cdf1e0d42fc13e__header-trigger-positioner",
			"header-trigger-wrapper": "_77d30921d8288eaf__header-trigger-wrapper",
			"header": "c11e44555738d97f__header",
			"header-trigger": "_22a30cbbb7b656f4__header-trigger",
			"content": "_90333ddfaa28d232__content",
			"overflow-visible": "_20c2575829a8af9b__overflow-visible",
			"content-inner": "c269ffa2b76fe947__content-inner"
		};
		DEFAULT_TAG = /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)("div", {});
		HeaderDescription = (0, import_react.forwardRef)(function CollapsibleCardHeaderDescription({ children, className, id: idProp, render = DEFAULT_TAG, ...restProps }, ref) {
			const generatedId = (0, import_react.useId)();
			const descriptionId = idProp ?? generatedId;
			const context = (0, import_react.useContext)(HeaderDescriptionIdContext);
			if (!context) throw new Error("CollapsibleCard.HeaderDescription: Missing parent <CollapsibleCard.Header>. Render <CollapsibleCard.HeaderDescription> inside <CollapsibleCard.Header>.");
			(0, import_react.useEffect)(() => {
				return context?.registerDescriptionId(descriptionId);
			}, [context, descriptionId]);
			return /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)(Text, {
				ref,
				variant: "body-md",
				render,
				id: descriptionId,
				"aria-hidden": "true",
				className: clsx(style_module_default$1["header-description"], className),
				...restProps,
				children
			});
		});
	})))();
}
//#endregion
//#region ../packages/ui/build-module/collapsible-card/content.mjs
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
var import_jsx_runtime, STYLE_HASH_ATTRIBUTE, style_module_default, Content2;
function init_content() {
	return (init_content = __esmMin((() => {
		init_react();
		init_clsx();
		init_content$1();
		init_panel();
		import_jsx_runtime = require_jsx_runtime();
		STYLE_HASH_ATTRIBUTE = "data-wp-hash";
		if (typeof process === "undefined" || false) registerStyle("66b8e83c76", "@layer wp-ui{@layer utilities, components, compositions, overrides;@layer components{._572e7c546522c522__heading-wrapper{--_gcd-heading-color:inherit;--_gcd-heading-font-size:inherit;--_gcd-heading-font-weight:inherit;--_gcd-heading-margin:0;font-family:inherit;line-height:inherit}._7ea7cf191a8d26b8__header-content{flex:1;min-width:0}._8f14576749c57845__header-description{color:var(--wpds-color-foreground-content-neutral-weak,#707070)}._48cdf1e0d42fc13e__header-trigger-positioner{align-self:flex-start;flex-shrink:0;margin-block-start:calc(var(--wpds-typography-line-height-sm, 20px)/2);max-height:0;overflow:visible}._77d30921d8288eaf__header-trigger-wrapper{border-radius:var(--wpds-border-radius-sm,2px);display:flex;translate:0 -50%}.c11e44555738d97f__header:focus-visible ._77d30921d8288eaf__header-trigger-wrapper{--_gcd-a-outline:var(--wpds-border-width-focus,var(--wp-admin-border-width-focus,2px)) solid var(--focus-color,var(--wpds-color-stroke-focus,var(--wp-admin-theme-color,#3858e9)));--_gcd-div-outline:var(--wpds-border-width-focus,var(--wp-admin-border-width-focus,2px)) solid var(--focus-color,var(--wpds-color-stroke-focus,var(--wp-admin-theme-color,#3858e9)));outline:var(--wpds-border-width-focus,var(--wp-admin-border-width-focus,2px)) solid var(--focus-color,var(--wpds-color-stroke-focus,var(--wp-admin-theme-color,#3858e9)));outline-offset:var(--wpds-border-width-focus,var(--wp-admin-border-width-focus,2px))}@media not (prefers-reduced-motion){._22a30cbbb7b656f4__header-trigger{transition:rotate .15s ease-out}}.c11e44555738d97f__header[data-panel-open] ._22a30cbbb7b656f4__header-trigger{rotate:180deg}.c11e44555738d97f__header[data-disabled] ._22a30cbbb7b656f4__header-trigger{color:var(--wpds-color-foreground-interactive-neutral-disabled,#8d8d8d)}._90333ddfaa28d232__content{height:var(--collapsible-panel-height);margin-block-start:var(--wp-ui-card-header-content-margin);overflow:hidden}._90333ddfaa28d232__content._20c2575829a8af9b__overflow-visible{overflow:visible}._90333ddfaa28d232__content[hidden]:not([hidden=until-found]){display:none}._90333ddfaa28d232__content[data-ending-style],._90333ddfaa28d232__content[data-starting-style]{height:0}@media not (prefers-reduced-motion){._90333ddfaa28d232__content{transition:all .15s ease-out}}}@layer compositions{.c269ffa2b76fe947__content-inner{padding-block-start:0}.c11e44555738d97f__header{align-items:stretch;display:flex;flex-direction:row;gap:var(--wpds-dimension-gap-sm,8px);outline:none}.c11e44555738d97f__header:not([data-disabled]){cursor:var(--wpds-cursor-control,pointer)}}}");
		style_module_default = {
			"heading-wrapper": "_572e7c546522c522__heading-wrapper",
			"header-content": "_7ea7cf191a8d26b8__header-content",
			"header-description": "_8f14576749c57845__header-description",
			"header-trigger-positioner": "_48cdf1e0d42fc13e__header-trigger-positioner",
			"header-trigger-wrapper": "_77d30921d8288eaf__header-trigger-wrapper",
			"header": "c11e44555738d97f__header",
			"header-trigger": "_22a30cbbb7b656f4__header-trigger",
			"content": "_90333ddfaa28d232__content",
			"overflow-visible": "_20c2575829a8af9b__overflow-visible",
			"content-inner": "c269ffa2b76fe947__content-inner"
		};
		Content2 = (0, import_react.forwardRef)(function CollapsibleCardContent({ className, render, children, hiddenUntilFound = true, ...restProps }, ref) {
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {
				ref,
				className: (state) => clsx(style_module_default.content, state.open && state.transitionStatus === "idle" && style_module_default["overflow-visible"], className),
				hiddenUntilFound,
				...restProps,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content, {
					className: style_module_default["content-inner"],
					render,
					children
				})
			});
		});
	})))();
}
//#endregion
export { Header2 as a, init_root$1 as c, init_header_description as i, init_content as n, init_header as o, HeaderDescription as r, Root3 as s, Content2 as t };
