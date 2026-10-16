import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C1RZKCc6.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { n as init_create_interpolate_element, t as create_interpolate_element_default } from "./create-interpolate-element-CUfbmqGd.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { i as _x, n as __, t as init_build_module } from "./build-module-v04us4E2.js";
import { a as init_clsx, i as clsx } from "./iframe-Dbjzp1_m.js";
import { i as init_FieldsetRoot, n as init_FieldsetLegend, r as FieldsetRoot$1, t as FieldsetLegend$1 } from "./FieldsetLegend-Bdr2PHW3.js";
import { i as init_SwitchRoot, n as init_SwitchThumb, r as SwitchRoot, t as SwitchThumb } from "./SwitchThumb-C9KUg0aE.js";
import { n as init_visually_hidden, t as VisuallyHidden } from "./visually-hidden-DgPx5QZ4.js";
import { n as init_link, t as Link } from "./link-DsTY80oL.js";
import { n as init_stack, t as Stack } from "./stack-BHmRFw1F.js";
import { a as Label, c as init_root$1, i as init_description, n as init_details, o as init_label, r as Description, s as Root, t as Details } from "./details-CgXcRwPW.js";
import { n as init_select_control, t as SelectControl } from "./select-control-BaQ9cGOe.js";
import { n as init_input_control, t as InputControl } from "./input-control-BbYRiDE3.js";
import { n as dateI18n, o as humanTimeDiff, s as init_build_module$1 } from "./build-module-DFGiXAdt.js";
//#region ../packages/ui/build-module/form/primitives/fieldset/context.mjs
var FieldsetContext;
function init_context() {
	return (init_context = __esmMin((() => {
		init_react();
		FieldsetContext = (0, import_react.createContext)(null);
	})))();
}
//#endregion
//#region ../packages/ui/build-module/form/primitives/fieldset/root.mjs
function getRuntime$3() {
	const globalScope = globalThis;
	if (globalScope.__wpStyleRuntime) return globalScope.__wpStyleRuntime;
	globalScope.__wpStyleRuntime = {
		documents: /* @__PURE__ */ new Map(),
		styles: /* @__PURE__ */ new Map(),
		injectedStyles: /* @__PURE__ */ new WeakMap()
	};
	if (typeof document !== "undefined") registerDocument$3(document);
	return globalScope.__wpStyleRuntime;
}
function documentContainsStyleHash$3(targetDocument, hash) {
	if (!targetDocument.head) return false;
	for (const style of targetDocument.head.querySelectorAll(`style[${STYLE_HASH_ATTRIBUTE$3}]`)) if (style.getAttribute(STYLE_HASH_ATTRIBUTE$3) === hash) return true;
	return false;
}
function injectStyle$3(targetDocument, hash, css) {
	if (!targetDocument.head) return;
	const runtime = getRuntime$3();
	let injectedStyles = runtime.injectedStyles.get(targetDocument);
	if (!injectedStyles) {
		injectedStyles = /* @__PURE__ */ new Set();
		runtime.injectedStyles.set(targetDocument, injectedStyles);
	}
	if (injectedStyles.has(hash)) return;
	if (documentContainsStyleHash$3(targetDocument, hash)) {
		injectedStyles.add(hash);
		return;
	}
	const style = targetDocument.createElement("style");
	style.setAttribute(STYLE_HASH_ATTRIBUTE$3, hash);
	style.appendChild(targetDocument.createTextNode(css));
	targetDocument.head.appendChild(style);
	injectedStyles.add(hash);
}
function registerDocument$3(targetDocument) {
	const runtime = getRuntime$3();
	runtime.documents.set(targetDocument, (runtime.documents.get(targetDocument) ?? 0) + 1);
	for (const [hash, css] of runtime.styles) injectStyle$3(targetDocument, hash, css);
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
function registerStyle$3(hash, css) {
	const runtime = getRuntime$3();
	runtime.styles.set(hash, css);
	for (const targetDocument of runtime.documents.keys()) injectStyle$3(targetDocument, hash, css);
}
var import_jsx_runtime$3, STYLE_HASH_ATTRIBUTE$3, style_default$2, FieldsetRoot;
function init_root() {
	return (init_root = __esmMin((() => {
		init_clsx();
		init_FieldsetRoot();
		init_react();
		init_context();
		import_jsx_runtime$3 = require_jsx_runtime();
		STYLE_HASH_ATTRIBUTE$3 = "data-wp-hash";
		if (typeof process === "undefined" || false) registerStyle$3("f1660ac76c", "@layer wp-ui{@layer utilities, components, compositions, overrides;@layer components{.a946d12d3d763c87__root{border:0;display:flex;flex-direction:column;gap:var(--wpds-dimension-gap-sm,8px);margin:0;padding:0}.b5b73738fd2188e1__legend:not(.d19f20a503911275__is-hidden)+._77c7cdbcd4b687bc__description{inset-block-start:calc(var(--wpds-dimension-gap-xs, 4px) - var(--wpds-dimension-gap-sm, 8px));position:relative}}}");
		style_default$2 = {
			"root": "a946d12d3d763c87__root",
			"legend": "b5b73738fd2188e1__legend",
			"is-hidden": "d19f20a503911275__is-hidden",
			"description": "_77c7cdbcd4b687bc__description"
		};
		FieldsetRoot = (0, import_react.forwardRef)(function UnforwardedFieldsetRoot({ className, children, ...restProps }, ref) {
			const [descriptionId, setDescriptionId] = (0, import_react.useState)();
			const contextValue = (0, import_react.useMemo)(() => ({
				registerDescriptionId: (id) => setDescriptionId(id),
				unregisterDescriptionId: () => setDescriptionId(void 0)
			}), []);
			return /* @__PURE__ */ (0, import_jsx_runtime$3.jsx)(FieldsetContext.Provider, {
				value: contextValue,
				children: /* @__PURE__ */ (0, import_jsx_runtime$3.jsx)(FieldsetRoot$1, {
					ref,
					className: clsx(style_default$2.root, className),
					"aria-describedby": descriptionId,
					...restProps,
					children
				})
			});
		});
	})))();
}
//#endregion
//#region ../packages/ui/build-module/form/primitives/fieldset/legend.mjs
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
var import_jsx_runtime$2, STYLE_HASH_ATTRIBUTE$2, field_default, style_default$1, FieldsetLegend;
function init_legend() {
	return (init_legend = __esmMin((() => {
		init_clsx();
		init_FieldsetLegend();
		init_react();
		init_visually_hidden();
		import_jsx_runtime$2 = require_jsx_runtime();
		STYLE_HASH_ATTRIBUTE$2 = "data-wp-hash";
		if (typeof process === "undefined" || false) registerStyle$2("df33c48b2d", "@layer wp-ui{@layer utilities, components, compositions, overrides;@layer utilities{._2d5ad850b2f90964__label{--wp-ui-field-label-line-height:var(--wpds-typography-line-height-xs,16px);color:var(--wpds-color-foreground-content-neutral,#1e1e1e);font-family:var(--wpds-typography-font-family-body,-apple-system,system-ui,\"Segoe UI\",\"Roboto\",\"Oxygen-Sans\",\"Ubuntu\",\"Cantarell\",\"Helvetica Neue\",sans-serif);font-size:var(--wpds-typography-font-size-xs,11px);font-weight:var(--wpds-typography-font-weight-emphasis,600);line-height:var(--wp-ui-field-label-line-height);text-transform:uppercase;&._17c4214649230bea__is-plain{font-size:var(--wpds-typography-font-size-md,13px);font-weight:var(--wpds-typography-font-weight-default,400);text-transform:none}}._08a3750500e0233f__description{--_gcd-p-font-size:var(--wpds-typography-font-size-sm,12px);--_gcd-p-line-height:var(--wpds-typography-line-height-xs,16px);--_gcd-p-margin:0;text-wrap:pretty;color:var(--wpds-color-foreground-content-neutral-weak,#707070);font-family:var(--wpds-typography-font-family-body,-apple-system,system-ui,\"Segoe UI\",\"Roboto\",\"Oxygen-Sans\",\"Ubuntu\",\"Cantarell\",\"Helvetica Neue\",sans-serif);font-size:var(--wpds-typography-font-size-sm,12px);line-height:var(--wpds-typography-line-height-xs,16px)}}}");
		field_default = {
			"label": "_2d5ad850b2f90964__label",
			"is-plain": "_17c4214649230bea__is-plain",
			"description": "_08a3750500e0233f__description"
		};
		if (typeof process === "undefined" || false) registerStyle$2("f1660ac76c", "@layer wp-ui{@layer utilities, components, compositions, overrides;@layer components{.a946d12d3d763c87__root{border:0;display:flex;flex-direction:column;gap:var(--wpds-dimension-gap-sm,8px);margin:0;padding:0}.b5b73738fd2188e1__legend:not(.d19f20a503911275__is-hidden)+._77c7cdbcd4b687bc__description{inset-block-start:calc(var(--wpds-dimension-gap-xs, 4px) - var(--wpds-dimension-gap-sm, 8px));position:relative}}}");
		style_default$1 = {
			"root": "a946d12d3d763c87__root",
			"legend": "b5b73738fd2188e1__legend",
			"is-hidden": "d19f20a503911275__is-hidden",
			"description": "_77c7cdbcd4b687bc__description"
		};
		FieldsetLegend = (0, import_react.forwardRef)(function UnforwardedFieldsetLegend({ className, hideFromVision, ...restProps }, ref) {
			const legend = /* @__PURE__ */ (0, import_jsx_runtime$2.jsx)(FieldsetLegend$1, {
				ref,
				className: clsx(style_default$1.legend, hideFromVision && style_default$1["is-hidden"], field_default.label, className),
				...restProps
			});
			if (hideFromVision) return /* @__PURE__ */ (0, import_jsx_runtime$2.jsx)(VisuallyHidden, { render: legend });
			return legend;
		});
	})))();
}
//#endregion
//#region ../packages/ui/build-module/form/primitives/switch/switch.mjs
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
var import_jsx_runtime$1, STYLE_HASH_ATTRIBUTE$1, resets_default, style_module_default, Switch;
function init_switch() {
	return (init_switch = __esmMin((() => {
		init_SwitchRoot(), init_SwitchThumb();
		init_clsx();
		init_react();
		import_jsx_runtime$1 = require_jsx_runtime();
		STYLE_HASH_ATTRIBUTE$1 = "data-wp-hash";
		if (typeof process === "undefined" || false) registerStyle$1("10f3806643", "@layer wp-ui{@layer utilities, components, compositions, overrides;@layer utilities{._336cd3e4e743482f__box-sizing{box-sizing:border-box;*,:after,:before{box-sizing:inherit}}}}");
		resets_default = { "box-sizing": "_336cd3e4e743482f__box-sizing" };
		if (typeof process === "undefined" || false) registerStyle$1("7930c697ef", "@layer wp-ui{@layer utilities, components, compositions, overrides;@layer components{.a0f73ff5534335d7__root{--_wp-ui-switch-height:var(--wpds-dimension-size-2xs,16px);--_wp-ui-switch-track-inset:var(--wpds-border-width-xs,1px);appearance:none;background-color:var(--wpds-color-background-interactive-neutral-weak,#0000);border:var(--_wp-ui-switch-track-inset) solid var(--wpds-color-stroke-interactive-neutral,#8d8d8d);border-radius:999px;display:inline-block;flex-shrink:0;height:var(--_wp-ui-switch-height);padding:var(--_wp-ui-switch-track-inset);width:calc(var(--_wp-ui-switch-height)*2)}.a0f73ff5534335d7__root:not([data-disabled]){cursor:var(--wpds-cursor-control,pointer)}.a0f73ff5534335d7__root:focus{--_gcd-a-outline:var(--wpds-border-width-focus,var(--wp-admin-border-width-focus,2px)) solid var(--focus-color,var(--wpds-color-stroke-focus,var(--wp-admin-theme-color,#3858e9)));--_gcd-div-outline:var(--wpds-border-width-focus,var(--wp-admin-border-width-focus,2px)) solid var(--focus-color,var(--wpds-color-stroke-focus,var(--wp-admin-theme-color,#3858e9)));outline:var(--wpds-border-width-focus,var(--wp-admin-border-width-focus,2px)) solid var(--focus-color,var(--wpds-color-stroke-focus,var(--wp-admin-theme-color,#3858e9)));outline-offset:var(--wpds-border-width-focus,var(--wp-admin-border-width-focus,2px))}@media not (prefers-reduced-motion){.a0f73ff5534335d7__root:not(:hover):not(:active){transition:background-color var(--wpds-motion-duration-md,.2s) var(--wpds-motion-easing-subtle,cubic-bezier(.15,0,.15,1)),border-color var(--wpds-motion-duration-md,.2s) var(--wpds-motion-easing-subtle,cubic-bezier(.15,0,.15,1))}}.a0f73ff5534335d7__root:hover:not([data-disabled],[data-checked]),[data-highlighted] .a0f73ff5534335d7__root:not([data-checked]){border-color:var(--wpds-color-stroke-interactive-neutral-active,#6e6e6e)}.a0f73ff5534335d7__root[data-checked]{background-color:var(--wpds-color-background-interactive-brand-strong,var(--wp-admin-theme-color,#3858e9));border-color:transparent}@media (forced-colors:active){.a0f73ff5534335d7__root[data-checked]{background-color:Highlight}}.a0f73ff5534335d7__root[data-checked][data-disabled]{background-color:var(--wpds-color-background-interactive-brand-strong-disabled,#e6e6e6)}@media (forced-colors:active){.a0f73ff5534335d7__root[data-checked][data-disabled]{background-color:GrayText}}.a0f73ff5534335d7__root[data-disabled]:not([data-checked]){background-color:var(--wpds-color-background-interactive-neutral-weak-disabled,#0000);border-color:var(--wpds-color-stroke-interactive-neutral-disabled,#dbdbdb)}@media (forced-colors:active){.a0f73ff5534335d7__root[data-disabled]:not([data-checked]){border-color:GrayText}}.f1c2c25fb89a20f4__thumb{--_wp-ui-elevation-xs:0 1px 1px rgba(0,0,0,.03),0 1px 2px rgba(0,0,0,.02),0 3px 3px rgba(0,0,0,.02),0 4px 4px rgba(0,0,0,.01);aspect-ratio:1;background-color:var(--wpds-color-foreground-interactive-neutral,#1e1e1e);border-radius:50%;box-shadow:var(--_wp-ui-elevation-xs);display:block;height:calc(var(--_wp-ui-switch-height) - var(--_wp-ui-switch-track-inset)*4)}@media not (prefers-reduced-motion){.f1c2c25fb89a20f4__thumb{transition:background-color var(--wpds-motion-duration-md,.2s) var(--wpds-motion-easing-subtle,cubic-bezier(.15,0,.15,1)),transform var(--wpds-motion-duration-md,.2s) var(--wpds-motion-easing-balanced,cubic-bezier(.4,0,.2,1))}}@media (forced-colors:active){.f1c2c25fb89a20f4__thumb{background-color:ButtonText;transition:none}}.f1c2c25fb89a20f4__thumb[data-checked]{background-color:var(--wpds-color-foreground-interactive-brand-strong,#fff);transform:translateX(var(--_wp-ui-switch-height))}@media (forced-colors:active){.f1c2c25fb89a20f4__thumb[data-checked]{background-color:HighlightText}}.f1c2c25fb89a20f4__thumb[data-checked]:dir(rtl){transform:translateX(calc(var(--_wp-ui-switch-height)*-1))}.f1c2c25fb89a20f4__thumb[data-checked][data-disabled]{background-color:var(--wpds-color-foreground-interactive-brand-strong-disabled,#8d8d8d)}@media (forced-colors:active){.f1c2c25fb89a20f4__thumb[data-checked][data-disabled]{background-color:Canvas}}.f1c2c25fb89a20f4__thumb[data-disabled]:not([data-checked]){background-color:var(--wpds-color-foreground-interactive-neutral-disabled,#8d8d8d)}@media (forced-colors:active){.f1c2c25fb89a20f4__thumb[data-disabled]:not([data-checked]){background-color:GrayText}}}}");
		style_module_default = {
			"root": "a0f73ff5534335d7__root",
			"thumb": "f1c2c25fb89a20f4__thumb"
		};
		Switch = (0, import_react.forwardRef)(function UnforwardedSwitch({ className, ...props }, ref) {
			return /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)(SwitchRoot, {
				ref,
				className: clsx(resets_default["box-sizing"], style_module_default.root, className),
				...props,
				children: /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)(SwitchThumb, { className: style_module_default.thumb })
			});
		});
	})))();
}
//#endregion
//#region ../packages/ui/build-module/form/switch-control/switch-control.mjs
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
var import_jsx_runtime, STYLE_HASH_ATTRIBUTE, style_default, ROOT_RENDER, TextContainer, SwitchControl;
function init_switch_control() {
	return (init_switch_control = __esmMin((() => {
		init_clsx();
		init_react();
		init_root$1(), init_label(), init_description(), init_details(), init_switch();
		init_stack();
		import_jsx_runtime = require_jsx_runtime();
		STYLE_HASH_ATTRIBUTE = "data-wp-hash";
		if (typeof process === "undefined" || false) registerStyle("29ff400733", "@layer wp-ui{@layer utilities, components, compositions, overrides;@layer components{._6252c8035f0baf97__root{--_wp-ui-switch-control-switch-height:var(--wpds-dimension-size-2xs,16px);--_wp-ui-switch-control-label-line-height:max(var(--_wp-ui-switch-control-switch-height),var(--wpds-typography-line-height-xs,16px))}._0255edbfc80f93a6__switch-wrapper{align-items:center;display:flex;height:1lh;line-height:var(--_wp-ui-switch-control-label-line-height);overflow:visible}.cc91112613f4cbb3__label{--wp-ui-field-label-line-height:var(--_wp-ui-switch-control-label-line-height)}._6252c8035f0baf97__root:not(:has(._270687969e0a04ca__switch[data-disabled])) .cc91112613f4cbb3__label{cursor:var(--wpds-cursor-control,pointer)}}}");
		style_default = {
			"root": "_6252c8035f0baf97__root",
			"switch-wrapper": "_0255edbfc80f93a6__switch-wrapper",
			"label": "cc91112613f4cbb3__label",
			"switch": "_270687969e0a04ca__switch"
		};
		ROOT_RENDER = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stack, {
			gap: "sm",
			align: "start"
		});
		TextContainer = ({ isStack, ...restProps }) => isStack ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stack, {
			direction: "column",
			gap: "xs",
			...restProps
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Fragment, { ...restProps });
		SwitchControl = (0, import_react.forwardRef)(function UnforwardedSwitchControl({ label, description, details, hideLabelFromVision, className, name, ...switchProps }, ref) {
			const hasSupportingText = !!description || !!details;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Root, {
				name,
				className: clsx(style_default.root, className),
				render: ROOT_RENDER,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: style_default["switch-wrapper"],
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
						ref,
						className: style_default.switch,
						...switchProps
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TextContainer, {
					isStack: hasSupportingText,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							variant: "plain",
							hideFromVision: hideLabelFromVision,
							className: style_default.label,
							children: label
						}),
						description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Description, { children: description }),
						details && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Details, { children: details })
					]
				})]
			});
		});
	})))();
}
//#endregion
//#region ../packages/block-editor/src/components/date-format-picker/index.jsx
/**
* The `DateFormatPicker` component renders controls that let the user choose a
* _date format_. That is, how they want their dates to be formatted.
*
* @see https://github.com/WordPress/gutenberg/blob/HEAD/packages/block-editor/src/components/date-format-picker/README.md
*
* @param {Object}                        props
* @param {string|null}                   props.format        The selected date format. If `null`, _Default_ is selected.
* @param {string}                        props.defaultFormat The date format that will be used if the user selects 'Default'.
* @param {(format: string|null) => void} props.onChange      Called when a selection is made. If `null`, _Default_ is selected.
*/
function DateFormatPicker({ format, defaultFormat, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack, {
		render: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FieldsetRoot, {}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 41,
			columnNumber: 13
		}, this),
		direction: "column",
		gap: "lg",
		className: "block-editor-date-format-picker",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FieldsetLegend, {
				hideFromVision: true,
				children: __("Date format")
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 46,
				columnNumber: 4
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SwitchControl, {
				label: __("Default format"),
				description: `${__("Example:")}  ${dateI18n(defaultFormat, exampleDate)}`,
				checked: !format,
				onCheckedChange: (checked) => onChange(checked ? null : defaultFormat)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 49,
				columnNumber: 4
			}, this),
			format && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NonDefaultControls, {
				format,
				onChange
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 61,
				columnNumber: 5
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 40,
		columnNumber: 3
	}, this);
}
function NonDefaultControls({ format, onChange }) {
	const suggestedOptions = [...[.../* @__PURE__ */ new Set([
		"Y-m-d",
		_x("n/j/Y", "short date format"),
		_x("n/j/Y g:i A", "short date format with time"),
		_x("M j, Y", "medium date format"),
		_x("M j, Y g:i A", "medium date format with time"),
		_x("F j, Y", "long date format"),
		_x("M j", "short date format without the year")
	])].map((suggestedFormat) => ({
		value: suggestedFormat,
		label: dateI18n(suggestedFormat, exampleDate)
	})), {
		value: "human-diff",
		label: humanTimeDiff(exampleDate)
	}];
	const customOption = {
		value: "custom",
		label: __("Custom"),
		description: __("Enter your own date format")
	};
	const [isCustom, setIsCustom] = (0, import_react.useState)(() => !!format && !suggestedOptions.some((option) => option.value === format));
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack, {
		direction: "column",
		gap: "sm",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectControl, {
			label: __("Choose a format"),
			items: [...suggestedOptions, customOption],
			value: isCustom ? customOption : suggestedOptions.find((option) => option.value === format) ?? customOption,
			onValueChange: (selectedItem) => {
				if (!selectedItem) return;
				if (selectedItem === customOption) setIsCustom(true);
				else {
					setIsCustom(false);
					onChange(selectedItem.value);
				}
			},
			children: [
				suggestedOptions.map((option) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectControl.Item, {
					value: option,
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectControl.ItemLabel, { children: option.label }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 143,
						columnNumber: 7
					}, this)
				}, option.value, false, {
					fileName: _jsxFileName,
					lineNumber: 142,
					columnNumber: 6
				}, this)),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectControl.Separator, {}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 148,
					columnNumber: 5
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectControl.Item, {
					value: customOption,
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectControl.ItemLabel, { children: customOption.label }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 150,
						columnNumber: 6
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectControl.ItemDescription, { children: customOption.description }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 153,
						columnNumber: 6
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 149,
					columnNumber: 5
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 119,
			columnNumber: 4
		}, this), isCustom && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InputControl, {
			label: __("Custom format"),
			hideLabelFromVision: true,
			details: create_interpolate_element_default(__("Enter a date or time <Link>format string</Link>."), { Link: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
				openInNewTab: true,
				href: __("https://wordpress.org/documentation/article/customize-date-and-time-format/")
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 168,
				columnNumber: 9
			}, this) }),
			value: format,
			onValueChange: (value) => onChange(value)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 159,
			columnNumber: 5
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 118,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime, _jsxFileName, exampleDate;
function init_date_format_picker() {
	return (init_date_format_picker = __esmMin((() => {
		init_build_module();
		init_build_module$1();
		init_react(), init_create_interpolate_element();
		init_root(), init_legend(), init_input_control(), init_link(), init_select_control(), init_stack(), init_switch_control();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/block-editor/src/components/date-format-picker/index.jsx";
		exampleDate = /* @__PURE__ */ new Date();
		exampleDate.setDate(20);
		exampleDate.setMonth(exampleDate.getMonth() - 3);
		if (exampleDate.getMonth() === 4) exampleDate.setMonth(3);
		DateFormatPicker.__docgenInfo = {
			"description": "The `DateFormatPicker` component renders controls that let the user choose a\n_date format_. That is, how they want their dates to be formatted.\n\n@see https://github.com/WordPress/gutenberg/blob/HEAD/packages/block-editor/src/components/date-format-picker/README.md\n\n@param {Object}                        props\n@param {string|null}                   props.format        The selected date format. If `null`, _Default_ is selected.\n@param {string}                        props.defaultFormat The date format that will be used if the user selects 'Default'.\n@param {(format: string|null) => void} props.onChange      Called when a selection is made. If `null`, _Default_ is selected.",
			"methods": [],
			"displayName": "DateFormatPicker"
		};
	})))();
}
//#endregion
export { init_date_format_picker as n, DateFormatPicker as t };
