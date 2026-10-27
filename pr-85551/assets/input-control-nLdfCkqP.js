import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C1RZKCc6.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { n as use_instance_id_default, t as init_use_instance_id } from "./use-instance-id-BznKyZc1.js";
import { n as withIgnoreIMEEvents } from "./with-ignore-ime-events-BFiL1WqY.js";
import { r as init_build_module } from "./build-module-LJKyBiy6.js";
import { a as init_clsx, i as clsx } from "./iframe-UtSZlYID.js";
import { n as init_component$1, t as component_default$1 } from "./component-Cvxw1Y5Q.js";
import { n as useText, t as init_hook } from "./hook-8Ggu2zt9.js";
import { c as ContextSystemProvider, l as init_context_system_provider, n as useContextSystem, o as init_context_connect, r as contextConnect, t as init_use_context_system } from "./use-context-system-4MMWHyS1.js";
import { i as init_polymorphic_element, n as init_component$2, r as PolymorphicElement, t as component_default$2 } from "./component-CFOx0tK5.js";
import { n as init_component$3, t as component_default$3 } from "./component-D1o10iDw.js";
import { n as init_component$4, t as component_default$4 } from "./component-CGJctjuC.js";
import { n as useDrag, t as init_use_gesture_react_esm } from "./use-gesture-react.esm-BnGrlGd-.js";
import { n as base_control_default, r as init_base_control } from "./base-control-COIsJz79.js";
//#region ../packages/components/build-module/input-control/backdrop.mjs
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
function Backdrop({ disabled = false, isBorderless = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime$5.jsx)("div", {
		"aria-hidden": "true",
		className: clsx("components-input-control__backdrop", style_module_default$3.border, style_module_default$3.backdrop, disabled && style_module_default$3["is-disabled"], isBorderless && style_module_default$3["is-borderless"])
	});
}
var import_jsx_runtime$5, STYLE_HASH_ATTRIBUTE$3, style_module_default$3, backdrop_default;
function init_backdrop() {
	return (init_backdrop = __esmMin((() => {
		init_clsx();
		init_react();
		import_jsx_runtime$5 = require_jsx_runtime();
		STYLE_HASH_ATTRIBUTE$3 = "data-wp-hash";
		if (typeof process === "undefined" || false) registerStyle$3("3b90fbb85b", "._9250f430bfd2e37f__border{border-color:var(--wpds-color-stroke-interactive-neutral,#8d8d8d)}._441152b766cc7dd5__container:hover ._9250f430bfd2e37f__border:not(._085e2fd9d9c04328__is-disabled,._1207ba6da0cb0862__is-borderless){border-color:var(--wpds-color-stroke-interactive-neutral-active,#6e6e6e)}._9250f430bfd2e37f__border._085e2fd9d9c04328__is-disabled:not(._1207ba6da0cb0862__is-borderless){border-color:var(--wpds-color-stroke-interactive-neutral-disabled,#dbdbdb)}@media (forced-colors:active){._9250f430bfd2e37f__border._085e2fd9d9c04328__is-disabled:not(._1207ba6da0cb0862__is-borderless){border-color:GrayText}}._9250f430bfd2e37f__border._1207ba6da0cb0862__is-borderless{border-color:transparent}.f9a704f0bcd51276__root{border-radius:2px;box-sizing:border-box;padding-block-start:0;position:relative}._441152b766cc7dd5__container{align-items:center;background-color:var(--wp-components-color-background,var(--wpds-color-background-surface-neutral-strong,#fff));border-radius:inherit;box-sizing:border-box;display:flex;flex:1;position:relative}._441152b766cc7dd5__container:where(._085e2fd9d9c04328__is-disabled){color:var(--wpds-color-foreground-interactive-neutral-disabled,#8d8d8d)}@media (forced-colors:active){._441152b766cc7dd5__container:where(._085e2fd9d9c04328__is-disabled){color:GrayText}}._441152b766cc7dd5__container:where(.edb730a713554e20__full-width){width:100%}._441152b766cc7dd5__container:where(._807ed022073eae29__custom-width){width:var(--_wp-components-input-control-width)}._441152b766cc7dd5__container:where(._6d053223813de8a5__edge-width){flex:0 0 var(--_wp-components-input-control-width)}._441152b766cc7dd5__container:where(._5321a1d6945b3bf1__width-inherit){width:inherit}._441152b766cc7dd5__container:where(.ca8ca8513f014f36__width-initial){width:auto}._441152b766cc7dd5__container:where(.c71bb5482ecc4c81__width-revert){width:revert}._441152b766cc7dd5__container:where(.a247c0b9ba5a07d7__width-revert-layer){width:revert-layer}._441152b766cc7dd5__container:where(._014dd5d2fcd292ca__width-unset){width:unset}._7945ee0f2ab22678__prefix{box-sizing:border-box;display:block}._43694aa489e825dc__suffix{align-items:center;align-self:stretch;box-sizing:border-box;display:flex}.d0bffb15f6349a47__backdrop.d0bffb15f6349a47__backdrop.d0bffb15f6349a47__backdrop{border-radius:inherit;border-style:solid;border-width:1px;box-sizing:border-box;inset:0;margin:0;padding:0;pointer-events:none;position:absolute}._96275241f1eec99a__input._96275241f1eec99a__input._96275241f1eec99a__input{--_wp-components-input-control-padding:12px;background-color:transparent;border:none;box-shadow:none!important;box-sizing:border-box;color:var(--wp-components-color-foreground,var(--wpds-color-foreground-content-neutral,#1e1e1e));display:block;font-family:inherit;font-size:16px;height:40px;line-height:1;margin:0;min-height:40px;outline:none;width:100%}@media (min-width:600px){._96275241f1eec99a__input._96275241f1eec99a__input._96275241f1eec99a__input{font-size:13px}}._96275241f1eec99a__input._96275241f1eec99a__input._96275241f1eec99a__input:where(.d6f9ae40ee4afa68__is-small){--_wp-components-input-control-padding:8px;height:24px;min-height:24px}@media (min-width:600px){._96275241f1eec99a__input._96275241f1eec99a__input._96275241f1eec99a__input:where(.d6f9ae40ee4afa68__is-small){font-size:11px}}._96275241f1eec99a__input._96275241f1eec99a__input._96275241f1eec99a__input:where(.ba85b67ce34be75f__is-compact){--_wp-components-input-control-padding:8px;height:32px;min-height:32px}._96275241f1eec99a__input._96275241f1eec99a__input._96275241f1eec99a__input{padding-inline-end:var(--_wp-components-input-control-padding-end,var(--_wp-components-input-control-padding));padding-inline-start:var(--_wp-components-input-control-padding-start,var(--_wp-components-input-control-padding))}._96275241f1eec99a__input._96275241f1eec99a__input._96275241f1eec99a__input:where(._4a3137ed7f351501__is-dragging){cursor:var(--_wp-components-input-control-drag-cursor,auto);user-select:none}._96275241f1eec99a__input._96275241f1eec99a__input._96275241f1eec99a__input:where(._4a3137ed7f351501__is-dragging)::-webkit-inner-spin-button,._96275241f1eec99a__input._96275241f1eec99a__input._96275241f1eec99a__input:where(._4a3137ed7f351501__is-dragging)::-webkit-outer-spin-button{-webkit-appearance:none!important;margin:0!important}._96275241f1eec99a__input._96275241f1eec99a__input._96275241f1eec99a__input:where(._44e3ee3c579662aa__has-drag-cursor):active{cursor:var(--_wp-components-input-control-drag-cursor)}._96275241f1eec99a__input._96275241f1eec99a__input._96275241f1eec99a__input:where(:disabled){color:var(--wpds-color-foreground-interactive-neutral-disabled,#8d8d8d)}@media (forced-colors:active){._96275241f1eec99a__input._96275241f1eec99a__input._96275241f1eec99a__input:where(:disabled){color:GrayText}}._96275241f1eec99a__input._96275241f1eec99a__input._96275241f1eec99a__input:disabled::placeholder{color:var(--wpds-color-foreground-interactive-neutral-disabled,#8d8d8d)}._96275241f1eec99a__input._96275241f1eec99a__input._96275241f1eec99a__input::-webkit-input-placeholder{color:color-mix(in srgb,var(--wp-components-color-foreground,var(--wpds-color-foreground-content-neutral,#1e1e1e)),transparent 38%)}._96275241f1eec99a__input._96275241f1eec99a__input._96275241f1eec99a__input::-moz-placeholder{color:color-mix(in srgb,var(--wp-components-color-foreground,var(--wpds-color-foreground-content-neutral,#1e1e1e)),transparent 38%)}._96275241f1eec99a__input._96275241f1eec99a__input._96275241f1eec99a__input:-ms-input-placeholder{color:color-mix(in srgb,var(--wp-components-color-foreground,var(--wpds-color-foreground-content-neutral,#1e1e1e)),transparent 38%)}._96275241f1eec99a__input._96275241f1eec99a__input._96275241f1eec99a__input[type=date]::-webkit-datetime-edit,._96275241f1eec99a__input._96275241f1eec99a__input._96275241f1eec99a__input[type=datetime-local]::-webkit-datetime-edit,._96275241f1eec99a__input._96275241f1eec99a__input._96275241f1eec99a__input[type=month]::-webkit-datetime-edit,._96275241f1eec99a__input._96275241f1eec99a__input._96275241f1eec99a__input[type=time]::-webkit-datetime-edit,._96275241f1eec99a__input._96275241f1eec99a__input._96275241f1eec99a__input[type=week]::-webkit-datetime-edit{align-items:center;display:flex;height:100%}@supports (-webkit-hyphens:none) and (not (-moz-appearance:none)){._96275241f1eec99a__input._96275241f1eec99a__input._96275241f1eec99a__input[type=date][data-empty-value]:not(:focus),._96275241f1eec99a__input._96275241f1eec99a__input._96275241f1eec99a__input[type=datetime-local][data-empty-value]:not(:focus),._96275241f1eec99a__input._96275241f1eec99a__input._96275241f1eec99a__input[type=time][data-empty-value]:not(:focus){color:transparent}._96275241f1eec99a__input._96275241f1eec99a__input._96275241f1eec99a__input[type=date][data-empty-value]:not(:focus):disabled::-webkit-datetime-edit-text,._96275241f1eec99a__input._96275241f1eec99a__input._96275241f1eec99a__input[type=datetime-local][data-empty-value]:not(:focus):disabled::-webkit-datetime-edit-text,._96275241f1eec99a__input._96275241f1eec99a__input._96275241f1eec99a__input[type=time][data-empty-value]:not(:focus):disabled::-webkit-datetime-edit-text{color:transparent}}._96275241f1eec99a__input._96275241f1eec99a__input._96275241f1eec99a__input[type=email],._96275241f1eec99a__input._96275241f1eec99a__input._96275241f1eec99a__input[type=url]{direction:ltr}._6d89648d8590be0a__label._6d89648d8590be0a__label._6d89648d8590be0a__label{box-sizing:border-box;display:block;font-size:11px;font-weight:var(--wpds-typography-font-weight-emphasis,600);line-height:1.4;max-width:100%;padding-block:0;text-transform:uppercase;z-index:1}._09e56cffb4f3346c__label-wrapper._09e56cffb4f3346c__label-wrapper{max-width:calc(100% - 10px)}._932ac6d12b21a960__prefix-wrapper{padding-inline-start:12px}._932ac6d12b21a960__prefix-wrapper:where(.d6f9ae40ee4afa68__is-small,.ba85b67ce34be75f__is-compact){padding-inline-start:8px}._932ac6d12b21a960__prefix-wrapper:where(._7589cc701f890e88__has-reduced-padding){display:flex;padding-inline-start:8px}._932ac6d12b21a960__prefix-wrapper:where(._7589cc701f890e88__has-reduced-padding):where(.d6f9ae40ee4afa68__is-small,.ba85b67ce34be75f__is-compact){padding-inline-start:4px}._9042e8fd4d3ac562__suffix-wrapper{padding-inline-end:12px}._9042e8fd4d3ac562__suffix-wrapper:where(.d6f9ae40ee4afa68__is-small,.ba85b67ce34be75f__is-compact){padding-inline-end:8px}._9042e8fd4d3ac562__suffix-wrapper:where(._7589cc701f890e88__has-reduced-padding){display:flex;padding-inline-end:8px}._9042e8fd4d3ac562__suffix-wrapper:where(._7589cc701f890e88__has-reduced-padding):where(.d6f9ae40ee4afa68__is-small,.ba85b67ce34be75f__is-compact){padding-inline-end:4px}");
		style_module_default$3 = {
			"border": "_9250f430bfd2e37f__border",
			"container": "_441152b766cc7dd5__container",
			"is-disabled": "_085e2fd9d9c04328__is-disabled",
			"is-borderless": "_1207ba6da0cb0862__is-borderless",
			"root": "f9a704f0bcd51276__root",
			"full-width": "edb730a713554e20__full-width",
			"custom-width": "_807ed022073eae29__custom-width",
			"edge-width": "_6d053223813de8a5__edge-width",
			"width-inherit": "_5321a1d6945b3bf1__width-inherit",
			"width-initial": "ca8ca8513f014f36__width-initial",
			"width-revert": "c71bb5482ecc4c81__width-revert",
			"width-revert-layer": "a247c0b9ba5a07d7__width-revert-layer",
			"width-unset": "_014dd5d2fcd292ca__width-unset",
			"prefix": "_7945ee0f2ab22678__prefix",
			"suffix": "_43694aa489e825dc__suffix",
			"backdrop": "d0bffb15f6349a47__backdrop",
			"input": "_96275241f1eec99a__input",
			"is-small": "d6f9ae40ee4afa68__is-small",
			"is-compact": "ba85b67ce34be75f__is-compact",
			"is-dragging": "_4a3137ed7f351501__is-dragging",
			"has-drag-cursor": "_44e3ee3c579662aa__has-drag-cursor",
			"label": "_6d89648d8590be0a__label",
			"label-wrapper": "_09e56cffb4f3346c__label-wrapper",
			"prefix-wrapper": "_932ac6d12b21a960__prefix-wrapper",
			"has-reduced-padding": "_7589cc701f890e88__has-reduced-padding",
			"suffix-wrapper": "_9042e8fd4d3ac562__suffix-wrapper"
		};
		backdrop_default = (0, import_react.memo)(Backdrop);
	})))();
}
//#endregion
//#region ../packages/components/build-module/text/component.mjs
function UnconnectedText(props, forwardedRef) {
	const textProps = useText(props);
	return /* @__PURE__ */ (0, import_jsx_runtime$4.jsx)(component_default$2, {
		as: "span",
		...textProps,
		ref: forwardedRef
	});
}
var import_jsx_runtime$4, Text, component_default;
function init_component() {
	return (init_component = __esmMin((() => {
		init_context_connect();
		init_component$2();
		init_hook();
		import_jsx_runtime$4 = require_jsx_runtime();
		Text = contextConnect(UnconnectedText, "Text");
		component_default = Text;
	})))();
}
//#endregion
//#region ../packages/components/build-module/input-control/label.mjs
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
function Label({ children, hideLabelFromVision, htmlFor, className, labelPosition: _labelPosition, size: _size, ...props }) {
	if (!children) return null;
	if (hideLabelFromVision) return /* @__PURE__ */ (0, import_jsx_runtime$3.jsx)(component_default$1, {
		as: "label",
		htmlFor,
		children
	});
	return /* @__PURE__ */ (0, import_jsx_runtime$3.jsx)(component_default$3, {
		className: style_module_default$2["label-wrapper"],
		children: /* @__PURE__ */ (0, import_jsx_runtime$3.jsx)(component_default, {
			...props,
			as: "label",
			htmlFor,
			className: clsx(style_module_default$2.label, className),
			children
		})
	});
}
var import_jsx_runtime$3, STYLE_HASH_ATTRIBUTE$2, style_module_default$2;
function init_label() {
	return (init_label = __esmMin((() => {
		init_clsx();
		init_component$3();
		init_component();
		init_component$1();
		import_jsx_runtime$3 = require_jsx_runtime();
		STYLE_HASH_ATTRIBUTE$2 = "data-wp-hash";
		if (typeof process === "undefined" || false) registerStyle$2("3b90fbb85b", "._9250f430bfd2e37f__border{border-color:var(--wpds-color-stroke-interactive-neutral,#8d8d8d)}._441152b766cc7dd5__container:hover ._9250f430bfd2e37f__border:not(._085e2fd9d9c04328__is-disabled,._1207ba6da0cb0862__is-borderless){border-color:var(--wpds-color-stroke-interactive-neutral-active,#6e6e6e)}._9250f430bfd2e37f__border._085e2fd9d9c04328__is-disabled:not(._1207ba6da0cb0862__is-borderless){border-color:var(--wpds-color-stroke-interactive-neutral-disabled,#dbdbdb)}@media (forced-colors:active){._9250f430bfd2e37f__border._085e2fd9d9c04328__is-disabled:not(._1207ba6da0cb0862__is-borderless){border-color:GrayText}}._9250f430bfd2e37f__border._1207ba6da0cb0862__is-borderless{border-color:transparent}.f9a704f0bcd51276__root{border-radius:2px;box-sizing:border-box;padding-block-start:0;position:relative}._441152b766cc7dd5__container{align-items:center;background-color:var(--wp-components-color-background,var(--wpds-color-background-surface-neutral-strong,#fff));border-radius:inherit;box-sizing:border-box;display:flex;flex:1;position:relative}._441152b766cc7dd5__container:where(._085e2fd9d9c04328__is-disabled){color:var(--wpds-color-foreground-interactive-neutral-disabled,#8d8d8d)}@media (forced-colors:active){._441152b766cc7dd5__container:where(._085e2fd9d9c04328__is-disabled){color:GrayText}}._441152b766cc7dd5__container:where(.edb730a713554e20__full-width){width:100%}._441152b766cc7dd5__container:where(._807ed022073eae29__custom-width){width:var(--_wp-components-input-control-width)}._441152b766cc7dd5__container:where(._6d053223813de8a5__edge-width){flex:0 0 var(--_wp-components-input-control-width)}._441152b766cc7dd5__container:where(._5321a1d6945b3bf1__width-inherit){width:inherit}._441152b766cc7dd5__container:where(.ca8ca8513f014f36__width-initial){width:auto}._441152b766cc7dd5__container:where(.c71bb5482ecc4c81__width-revert){width:revert}._441152b766cc7dd5__container:where(.a247c0b9ba5a07d7__width-revert-layer){width:revert-layer}._441152b766cc7dd5__container:where(._014dd5d2fcd292ca__width-unset){width:unset}._7945ee0f2ab22678__prefix{box-sizing:border-box;display:block}._43694aa489e825dc__suffix{align-items:center;align-self:stretch;box-sizing:border-box;display:flex}.d0bffb15f6349a47__backdrop.d0bffb15f6349a47__backdrop.d0bffb15f6349a47__backdrop{border-radius:inherit;border-style:solid;border-width:1px;box-sizing:border-box;inset:0;margin:0;padding:0;pointer-events:none;position:absolute}._96275241f1eec99a__input._96275241f1eec99a__input._96275241f1eec99a__input{--_wp-components-input-control-padding:12px;background-color:transparent;border:none;box-shadow:none!important;box-sizing:border-box;color:var(--wp-components-color-foreground,var(--wpds-color-foreground-content-neutral,#1e1e1e));display:block;font-family:inherit;font-size:16px;height:40px;line-height:1;margin:0;min-height:40px;outline:none;width:100%}@media (min-width:600px){._96275241f1eec99a__input._96275241f1eec99a__input._96275241f1eec99a__input{font-size:13px}}._96275241f1eec99a__input._96275241f1eec99a__input._96275241f1eec99a__input:where(.d6f9ae40ee4afa68__is-small){--_wp-components-input-control-padding:8px;height:24px;min-height:24px}@media (min-width:600px){._96275241f1eec99a__input._96275241f1eec99a__input._96275241f1eec99a__input:where(.d6f9ae40ee4afa68__is-small){font-size:11px}}._96275241f1eec99a__input._96275241f1eec99a__input._96275241f1eec99a__input:where(.ba85b67ce34be75f__is-compact){--_wp-components-input-control-padding:8px;height:32px;min-height:32px}._96275241f1eec99a__input._96275241f1eec99a__input._96275241f1eec99a__input{padding-inline-end:var(--_wp-components-input-control-padding-end,var(--_wp-components-input-control-padding));padding-inline-start:var(--_wp-components-input-control-padding-start,var(--_wp-components-input-control-padding))}._96275241f1eec99a__input._96275241f1eec99a__input._96275241f1eec99a__input:where(._4a3137ed7f351501__is-dragging){cursor:var(--_wp-components-input-control-drag-cursor,auto);user-select:none}._96275241f1eec99a__input._96275241f1eec99a__input._96275241f1eec99a__input:where(._4a3137ed7f351501__is-dragging)::-webkit-inner-spin-button,._96275241f1eec99a__input._96275241f1eec99a__input._96275241f1eec99a__input:where(._4a3137ed7f351501__is-dragging)::-webkit-outer-spin-button{-webkit-appearance:none!important;margin:0!important}._96275241f1eec99a__input._96275241f1eec99a__input._96275241f1eec99a__input:where(._44e3ee3c579662aa__has-drag-cursor):active{cursor:var(--_wp-components-input-control-drag-cursor)}._96275241f1eec99a__input._96275241f1eec99a__input._96275241f1eec99a__input:where(:disabled){color:var(--wpds-color-foreground-interactive-neutral-disabled,#8d8d8d)}@media (forced-colors:active){._96275241f1eec99a__input._96275241f1eec99a__input._96275241f1eec99a__input:where(:disabled){color:GrayText}}._96275241f1eec99a__input._96275241f1eec99a__input._96275241f1eec99a__input:disabled::placeholder{color:var(--wpds-color-foreground-interactive-neutral-disabled,#8d8d8d)}._96275241f1eec99a__input._96275241f1eec99a__input._96275241f1eec99a__input::-webkit-input-placeholder{color:color-mix(in srgb,var(--wp-components-color-foreground,var(--wpds-color-foreground-content-neutral,#1e1e1e)),transparent 38%)}._96275241f1eec99a__input._96275241f1eec99a__input._96275241f1eec99a__input::-moz-placeholder{color:color-mix(in srgb,var(--wp-components-color-foreground,var(--wpds-color-foreground-content-neutral,#1e1e1e)),transparent 38%)}._96275241f1eec99a__input._96275241f1eec99a__input._96275241f1eec99a__input:-ms-input-placeholder{color:color-mix(in srgb,var(--wp-components-color-foreground,var(--wpds-color-foreground-content-neutral,#1e1e1e)),transparent 38%)}._96275241f1eec99a__input._96275241f1eec99a__input._96275241f1eec99a__input[type=date]::-webkit-datetime-edit,._96275241f1eec99a__input._96275241f1eec99a__input._96275241f1eec99a__input[type=datetime-local]::-webkit-datetime-edit,._96275241f1eec99a__input._96275241f1eec99a__input._96275241f1eec99a__input[type=month]::-webkit-datetime-edit,._96275241f1eec99a__input._96275241f1eec99a__input._96275241f1eec99a__input[type=time]::-webkit-datetime-edit,._96275241f1eec99a__input._96275241f1eec99a__input._96275241f1eec99a__input[type=week]::-webkit-datetime-edit{align-items:center;display:flex;height:100%}@supports (-webkit-hyphens:none) and (not (-moz-appearance:none)){._96275241f1eec99a__input._96275241f1eec99a__input._96275241f1eec99a__input[type=date][data-empty-value]:not(:focus),._96275241f1eec99a__input._96275241f1eec99a__input._96275241f1eec99a__input[type=datetime-local][data-empty-value]:not(:focus),._96275241f1eec99a__input._96275241f1eec99a__input._96275241f1eec99a__input[type=time][data-empty-value]:not(:focus){color:transparent}._96275241f1eec99a__input._96275241f1eec99a__input._96275241f1eec99a__input[type=date][data-empty-value]:not(:focus):disabled::-webkit-datetime-edit-text,._96275241f1eec99a__input._96275241f1eec99a__input._96275241f1eec99a__input[type=datetime-local][data-empty-value]:not(:focus):disabled::-webkit-datetime-edit-text,._96275241f1eec99a__input._96275241f1eec99a__input._96275241f1eec99a__input[type=time][data-empty-value]:not(:focus):disabled::-webkit-datetime-edit-text{color:transparent}}._96275241f1eec99a__input._96275241f1eec99a__input._96275241f1eec99a__input[type=email],._96275241f1eec99a__input._96275241f1eec99a__input._96275241f1eec99a__input[type=url]{direction:ltr}._6d89648d8590be0a__label._6d89648d8590be0a__label._6d89648d8590be0a__label{box-sizing:border-box;display:block;font-size:11px;font-weight:var(--wpds-typography-font-weight-emphasis,600);line-height:1.4;max-width:100%;padding-block:0;text-transform:uppercase;z-index:1}._09e56cffb4f3346c__label-wrapper._09e56cffb4f3346c__label-wrapper{max-width:calc(100% - 10px)}._932ac6d12b21a960__prefix-wrapper{padding-inline-start:12px}._932ac6d12b21a960__prefix-wrapper:where(.d6f9ae40ee4afa68__is-small,.ba85b67ce34be75f__is-compact){padding-inline-start:8px}._932ac6d12b21a960__prefix-wrapper:where(._7589cc701f890e88__has-reduced-padding){display:flex;padding-inline-start:8px}._932ac6d12b21a960__prefix-wrapper:where(._7589cc701f890e88__has-reduced-padding):where(.d6f9ae40ee4afa68__is-small,.ba85b67ce34be75f__is-compact){padding-inline-start:4px}._9042e8fd4d3ac562__suffix-wrapper{padding-inline-end:12px}._9042e8fd4d3ac562__suffix-wrapper:where(.d6f9ae40ee4afa68__is-small,.ba85b67ce34be75f__is-compact){padding-inline-end:8px}._9042e8fd4d3ac562__suffix-wrapper:where(._7589cc701f890e88__has-reduced-padding){display:flex;padding-inline-end:8px}._9042e8fd4d3ac562__suffix-wrapper:where(._7589cc701f890e88__has-reduced-padding):where(.d6f9ae40ee4afa68__is-small,.ba85b67ce34be75f__is-compact){padding-inline-end:4px}");
		style_module_default$2 = {
			"border": "_9250f430bfd2e37f__border",
			"container": "_441152b766cc7dd5__container",
			"is-disabled": "_085e2fd9d9c04328__is-disabled",
			"is-borderless": "_1207ba6da0cb0862__is-borderless",
			"root": "f9a704f0bcd51276__root",
			"full-width": "edb730a713554e20__full-width",
			"custom-width": "_807ed022073eae29__custom-width",
			"edge-width": "_6d053223813de8a5__edge-width",
			"width-inherit": "_5321a1d6945b3bf1__width-inherit",
			"width-initial": "ca8ca8513f014f36__width-initial",
			"width-revert": "c71bb5482ecc4c81__width-revert",
			"width-revert-layer": "a247c0b9ba5a07d7__width-revert-layer",
			"width-unset": "_014dd5d2fcd292ca__width-unset",
			"prefix": "_7945ee0f2ab22678__prefix",
			"suffix": "_43694aa489e825dc__suffix",
			"backdrop": "d0bffb15f6349a47__backdrop",
			"input": "_96275241f1eec99a__input",
			"is-small": "d6f9ae40ee4afa68__is-small",
			"is-compact": "ba85b67ce34be75f__is-compact",
			"is-dragging": "_4a3137ed7f351501__is-dragging",
			"has-drag-cursor": "_44e3ee3c579662aa__has-drag-cursor",
			"label": "_6d89648d8590be0a__label",
			"label-wrapper": "_09e56cffb4f3346c__label-wrapper",
			"prefix-wrapper": "_932ac6d12b21a960__prefix-wrapper",
			"has-reduced-padding": "_7589cc701f890e88__has-reduced-padding",
			"suffix-wrapper": "_9042e8fd4d3ac562__suffix-wrapper"
		};
	})))();
}
//#endregion
//#region ../packages/components/build-module/input-control/input-base.mjs
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
function useUniqueId$1(idProp) {
	const id = `input-base-control-${use_instance_id_default(InputBase)}`;
	return idProp || id;
}
function getUIFlexProps(labelPosition) {
	const props = {};
	switch (labelPosition) {
		case "top":
			props.direction = "column";
			props.expanded = false;
			props.gap = 0;
			break;
		case "bottom":
			props.direction = "column-reverse";
			props.expanded = false;
			props.gap = 0;
			break;
		case "edge": props.justify = "space-between";
	}
	return props;
}
function InputBase(props, ref) {
	const { __unstableInputWidth, children, className, disabled = false, hideLabelFromVision = false, labelPosition, id: idProp, isBorderless = false, label, prefix, size = "default", suffix, ...restProps } = useContextSystem(props, "InputBase");
	const id = useUniqueId$1(idProp);
	const prefixSuffixContextValue = (0, import_react.useMemo)(() => {
		return {
			InputControlPrefixWrapper: { size },
			InputControlSuffixWrapper: { size }
		};
	}, [size]);
	const normalizedWidth = typeof __unstableInputWidth === "string" ? __unstableInputWidth.trim().toLowerCase() : void 0;
	const widthKeyword = normalizedWidth && [
		"inherit",
		"initial",
		"revert",
		"revert-layer",
		"unset"
	].includes(normalizedWidth) ? normalizedWidth : void 0;
	const hasWidth = !!__unstableInputWidth;
	const hasCustomWidth = hasWidth && labelPosition !== "side" && labelPosition !== "edge";
	const hasEdgeWidth = labelPosition === "edge" && typeof __unstableInputWidth === "string" && hasWidth && !widthKeyword;
	const cssWidth = typeof __unstableInputWidth === "number" ? `${__unstableInputWidth}px` : __unstableInputWidth;
	const containerStyle = { "--_wp-components-input-control-width": hasCustomWidth && !widthKeyword || hasEdgeWidth ? cssWidth : void 0 };
	return /* @__PURE__ */ (0, import_jsx_runtime$2.jsxs)(component_default$4, {
		...restProps,
		...getUIFlexProps(labelPosition),
		className: clsx(style_module_default$1.root, className),
		gap: 2,
		ref,
		children: [/* @__PURE__ */ (0, import_jsx_runtime$2.jsx)(Label, {
			className: "components-input-control__label",
			hideLabelFromVision,
			labelPosition,
			htmlFor: id,
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime$2.jsxs)("div", {
			disabled,
			className: clsx("components-input-control__container", style_module_default$1.container, {
				[style_module_default$1["is-disabled"]]: disabled,
				[style_module_default$1["full-width"]]: !hasWidth,
				[style_module_default$1["custom-width"]]: hasCustomWidth && !widthKeyword,
				[style_module_default$1["edge-width"]]: hasEdgeWidth
			}, hasCustomWidth && widthKeyword && style_module_default$1[`width-${widthKeyword}`]),
			style: containerStyle,
			children: [/* @__PURE__ */ (0, import_jsx_runtime$2.jsxs)(ContextSystemProvider, {
				value: prefixSuffixContextValue,
				children: [
					prefix && /* @__PURE__ */ (0, import_jsx_runtime$2.jsx)("span", {
						className: clsx("components-input-control__prefix", style_module_default$1.prefix),
						children: prefix
					}),
					children,
					suffix && /* @__PURE__ */ (0, import_jsx_runtime$2.jsx)("span", {
						className: clsx("components-input-control__suffix", style_module_default$1.suffix),
						children: suffix
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime$2.jsx)(backdrop_default, {
				disabled,
				isBorderless
			})]
		})]
	});
}
var import_jsx_runtime$2, STYLE_HASH_ATTRIBUTE$1, style_module_default$1, input_base_default;
function init_input_base() {
	return (init_input_base = __esmMin((() => {
		init_clsx();
		init_use_instance_id();
		init_react();
		init_backdrop();
		init_label();
		init_component$4();
		init_context_system_provider(), init_context_connect(), init_use_context_system();
		import_jsx_runtime$2 = require_jsx_runtime();
		STYLE_HASH_ATTRIBUTE$1 = "data-wp-hash";
		if (typeof process === "undefined" || false) registerStyle$1("3b90fbb85b", "._9250f430bfd2e37f__border{border-color:var(--wpds-color-stroke-interactive-neutral,#8d8d8d)}._441152b766cc7dd5__container:hover ._9250f430bfd2e37f__border:not(._085e2fd9d9c04328__is-disabled,._1207ba6da0cb0862__is-borderless){border-color:var(--wpds-color-stroke-interactive-neutral-active,#6e6e6e)}._9250f430bfd2e37f__border._085e2fd9d9c04328__is-disabled:not(._1207ba6da0cb0862__is-borderless){border-color:var(--wpds-color-stroke-interactive-neutral-disabled,#dbdbdb)}@media (forced-colors:active){._9250f430bfd2e37f__border._085e2fd9d9c04328__is-disabled:not(._1207ba6da0cb0862__is-borderless){border-color:GrayText}}._9250f430bfd2e37f__border._1207ba6da0cb0862__is-borderless{border-color:transparent}.f9a704f0bcd51276__root{border-radius:2px;box-sizing:border-box;padding-block-start:0;position:relative}._441152b766cc7dd5__container{align-items:center;background-color:var(--wp-components-color-background,var(--wpds-color-background-surface-neutral-strong,#fff));border-radius:inherit;box-sizing:border-box;display:flex;flex:1;position:relative}._441152b766cc7dd5__container:where(._085e2fd9d9c04328__is-disabled){color:var(--wpds-color-foreground-interactive-neutral-disabled,#8d8d8d)}@media (forced-colors:active){._441152b766cc7dd5__container:where(._085e2fd9d9c04328__is-disabled){color:GrayText}}._441152b766cc7dd5__container:where(.edb730a713554e20__full-width){width:100%}._441152b766cc7dd5__container:where(._807ed022073eae29__custom-width){width:var(--_wp-components-input-control-width)}._441152b766cc7dd5__container:where(._6d053223813de8a5__edge-width){flex:0 0 var(--_wp-components-input-control-width)}._441152b766cc7dd5__container:where(._5321a1d6945b3bf1__width-inherit){width:inherit}._441152b766cc7dd5__container:where(.ca8ca8513f014f36__width-initial){width:auto}._441152b766cc7dd5__container:where(.c71bb5482ecc4c81__width-revert){width:revert}._441152b766cc7dd5__container:where(.a247c0b9ba5a07d7__width-revert-layer){width:revert-layer}._441152b766cc7dd5__container:where(._014dd5d2fcd292ca__width-unset){width:unset}._7945ee0f2ab22678__prefix{box-sizing:border-box;display:block}._43694aa489e825dc__suffix{align-items:center;align-self:stretch;box-sizing:border-box;display:flex}.d0bffb15f6349a47__backdrop.d0bffb15f6349a47__backdrop.d0bffb15f6349a47__backdrop{border-radius:inherit;border-style:solid;border-width:1px;box-sizing:border-box;inset:0;margin:0;padding:0;pointer-events:none;position:absolute}._96275241f1eec99a__input._96275241f1eec99a__input._96275241f1eec99a__input{--_wp-components-input-control-padding:12px;background-color:transparent;border:none;box-shadow:none!important;box-sizing:border-box;color:var(--wp-components-color-foreground,var(--wpds-color-foreground-content-neutral,#1e1e1e));display:block;font-family:inherit;font-size:16px;height:40px;line-height:1;margin:0;min-height:40px;outline:none;width:100%}@media (min-width:600px){._96275241f1eec99a__input._96275241f1eec99a__input._96275241f1eec99a__input{font-size:13px}}._96275241f1eec99a__input._96275241f1eec99a__input._96275241f1eec99a__input:where(.d6f9ae40ee4afa68__is-small){--_wp-components-input-control-padding:8px;height:24px;min-height:24px}@media (min-width:600px){._96275241f1eec99a__input._96275241f1eec99a__input._96275241f1eec99a__input:where(.d6f9ae40ee4afa68__is-small){font-size:11px}}._96275241f1eec99a__input._96275241f1eec99a__input._96275241f1eec99a__input:where(.ba85b67ce34be75f__is-compact){--_wp-components-input-control-padding:8px;height:32px;min-height:32px}._96275241f1eec99a__input._96275241f1eec99a__input._96275241f1eec99a__input{padding-inline-end:var(--_wp-components-input-control-padding-end,var(--_wp-components-input-control-padding));padding-inline-start:var(--_wp-components-input-control-padding-start,var(--_wp-components-input-control-padding))}._96275241f1eec99a__input._96275241f1eec99a__input._96275241f1eec99a__input:where(._4a3137ed7f351501__is-dragging){cursor:var(--_wp-components-input-control-drag-cursor,auto);user-select:none}._96275241f1eec99a__input._96275241f1eec99a__input._96275241f1eec99a__input:where(._4a3137ed7f351501__is-dragging)::-webkit-inner-spin-button,._96275241f1eec99a__input._96275241f1eec99a__input._96275241f1eec99a__input:where(._4a3137ed7f351501__is-dragging)::-webkit-outer-spin-button{-webkit-appearance:none!important;margin:0!important}._96275241f1eec99a__input._96275241f1eec99a__input._96275241f1eec99a__input:where(._44e3ee3c579662aa__has-drag-cursor):active{cursor:var(--_wp-components-input-control-drag-cursor)}._96275241f1eec99a__input._96275241f1eec99a__input._96275241f1eec99a__input:where(:disabled){color:var(--wpds-color-foreground-interactive-neutral-disabled,#8d8d8d)}@media (forced-colors:active){._96275241f1eec99a__input._96275241f1eec99a__input._96275241f1eec99a__input:where(:disabled){color:GrayText}}._96275241f1eec99a__input._96275241f1eec99a__input._96275241f1eec99a__input:disabled::placeholder{color:var(--wpds-color-foreground-interactive-neutral-disabled,#8d8d8d)}._96275241f1eec99a__input._96275241f1eec99a__input._96275241f1eec99a__input::-webkit-input-placeholder{color:color-mix(in srgb,var(--wp-components-color-foreground,var(--wpds-color-foreground-content-neutral,#1e1e1e)),transparent 38%)}._96275241f1eec99a__input._96275241f1eec99a__input._96275241f1eec99a__input::-moz-placeholder{color:color-mix(in srgb,var(--wp-components-color-foreground,var(--wpds-color-foreground-content-neutral,#1e1e1e)),transparent 38%)}._96275241f1eec99a__input._96275241f1eec99a__input._96275241f1eec99a__input:-ms-input-placeholder{color:color-mix(in srgb,var(--wp-components-color-foreground,var(--wpds-color-foreground-content-neutral,#1e1e1e)),transparent 38%)}._96275241f1eec99a__input._96275241f1eec99a__input._96275241f1eec99a__input[type=date]::-webkit-datetime-edit,._96275241f1eec99a__input._96275241f1eec99a__input._96275241f1eec99a__input[type=datetime-local]::-webkit-datetime-edit,._96275241f1eec99a__input._96275241f1eec99a__input._96275241f1eec99a__input[type=month]::-webkit-datetime-edit,._96275241f1eec99a__input._96275241f1eec99a__input._96275241f1eec99a__input[type=time]::-webkit-datetime-edit,._96275241f1eec99a__input._96275241f1eec99a__input._96275241f1eec99a__input[type=week]::-webkit-datetime-edit{align-items:center;display:flex;height:100%}@supports (-webkit-hyphens:none) and (not (-moz-appearance:none)){._96275241f1eec99a__input._96275241f1eec99a__input._96275241f1eec99a__input[type=date][data-empty-value]:not(:focus),._96275241f1eec99a__input._96275241f1eec99a__input._96275241f1eec99a__input[type=datetime-local][data-empty-value]:not(:focus),._96275241f1eec99a__input._96275241f1eec99a__input._96275241f1eec99a__input[type=time][data-empty-value]:not(:focus){color:transparent}._96275241f1eec99a__input._96275241f1eec99a__input._96275241f1eec99a__input[type=date][data-empty-value]:not(:focus):disabled::-webkit-datetime-edit-text,._96275241f1eec99a__input._96275241f1eec99a__input._96275241f1eec99a__input[type=datetime-local][data-empty-value]:not(:focus):disabled::-webkit-datetime-edit-text,._96275241f1eec99a__input._96275241f1eec99a__input._96275241f1eec99a__input[type=time][data-empty-value]:not(:focus):disabled::-webkit-datetime-edit-text{color:transparent}}._96275241f1eec99a__input._96275241f1eec99a__input._96275241f1eec99a__input[type=email],._96275241f1eec99a__input._96275241f1eec99a__input._96275241f1eec99a__input[type=url]{direction:ltr}._6d89648d8590be0a__label._6d89648d8590be0a__label._6d89648d8590be0a__label{box-sizing:border-box;display:block;font-size:11px;font-weight:var(--wpds-typography-font-weight-emphasis,600);line-height:1.4;max-width:100%;padding-block:0;text-transform:uppercase;z-index:1}._09e56cffb4f3346c__label-wrapper._09e56cffb4f3346c__label-wrapper{max-width:calc(100% - 10px)}._932ac6d12b21a960__prefix-wrapper{padding-inline-start:12px}._932ac6d12b21a960__prefix-wrapper:where(.d6f9ae40ee4afa68__is-small,.ba85b67ce34be75f__is-compact){padding-inline-start:8px}._932ac6d12b21a960__prefix-wrapper:where(._7589cc701f890e88__has-reduced-padding){display:flex;padding-inline-start:8px}._932ac6d12b21a960__prefix-wrapper:where(._7589cc701f890e88__has-reduced-padding):where(.d6f9ae40ee4afa68__is-small,.ba85b67ce34be75f__is-compact){padding-inline-start:4px}._9042e8fd4d3ac562__suffix-wrapper{padding-inline-end:12px}._9042e8fd4d3ac562__suffix-wrapper:where(.d6f9ae40ee4afa68__is-small,.ba85b67ce34be75f__is-compact){padding-inline-end:8px}._9042e8fd4d3ac562__suffix-wrapper:where(._7589cc701f890e88__has-reduced-padding){display:flex;padding-inline-end:8px}._9042e8fd4d3ac562__suffix-wrapper:where(._7589cc701f890e88__has-reduced-padding):where(.d6f9ae40ee4afa68__is-small,.ba85b67ce34be75f__is-compact){padding-inline-end:4px}");
		style_module_default$1 = {
			"border": "_9250f430bfd2e37f__border",
			"container": "_441152b766cc7dd5__container",
			"is-disabled": "_085e2fd9d9c04328__is-disabled",
			"is-borderless": "_1207ba6da0cb0862__is-borderless",
			"root": "f9a704f0bcd51276__root",
			"full-width": "edb730a713554e20__full-width",
			"custom-width": "_807ed022073eae29__custom-width",
			"edge-width": "_6d053223813de8a5__edge-width",
			"width-inherit": "_5321a1d6945b3bf1__width-inherit",
			"width-initial": "ca8ca8513f014f36__width-initial",
			"width-revert": "c71bb5482ecc4c81__width-revert",
			"width-revert-layer": "a247c0b9ba5a07d7__width-revert-layer",
			"width-unset": "_014dd5d2fcd292ca__width-unset",
			"prefix": "_7945ee0f2ab22678__prefix",
			"suffix": "_43694aa489e825dc__suffix",
			"backdrop": "d0bffb15f6349a47__backdrop",
			"input": "_96275241f1eec99a__input",
			"is-small": "d6f9ae40ee4afa68__is-small",
			"is-compact": "ba85b67ce34be75f__is-compact",
			"is-dragging": "_4a3137ed7f351501__is-dragging",
			"has-drag-cursor": "_44e3ee3c579662aa__has-drag-cursor",
			"label": "_6d89648d8590be0a__label",
			"label-wrapper": "_09e56cffb4f3346c__label-wrapper",
			"prefix-wrapper": "_932ac6d12b21a960__prefix-wrapper",
			"has-reduced-padding": "_7589cc701f890e88__has-reduced-padding",
			"suffix-wrapper": "_9042e8fd4d3ac562__suffix-wrapper"
		};
		input_base_default = contextConnect(InputBase, "InputBase");
	})))();
}
//#endregion
//#region ../packages/components/build-module/input-control/utils.mjs
function getDragCursor(dragDirection) {
	let dragCursor = "ns-resize";
	switch (dragDirection) {
		case "n":
		case "s":
			dragCursor = "ns-resize";
			break;
		case "e":
		case "w": dragCursor = "ew-resize";
	}
	return dragCursor;
}
function useDragCursor(isDragging, dragDirection) {
	const dragCursor = getDragCursor(dragDirection);
	(0, import_react.useEffect)(() => {
		if (isDragging) document.documentElement.style.cursor = dragCursor;
		else document.documentElement.style.removeProperty("cursor");
	}, [isDragging, dragCursor]);
	return dragCursor;
}
function useDraft(props) {
	const previousValueRef = (0, import_react.useRef)(props.value);
	const [draft, setDraft] = (0, import_react.useState)({});
	const value = draft.value !== void 0 ? draft.value : props.value;
	(0, import_react.useLayoutEffect)(() => {
		const { current: previousValue } = previousValueRef;
		previousValueRef.current = props.value;
		if (draft.value !== void 0 && !draft.isStale) setDraft({
			...draft,
			isStale: true
		});
		else if (draft.isStale && props.value !== previousValue) setDraft({});
	}, [props.value, draft]);
	const onChange = (nextValue, extra) => {
		setDraft((current) => Object.assign(current, {
			value: nextValue,
			isStale: false
		}));
		props.onChange(nextValue, extra);
	};
	const onBlur = (event) => {
		setDraft({});
		props.onBlur?.(event);
	};
	return {
		value,
		onBlur,
		onChange
	};
}
function init_utils() {
	return (init_utils = __esmMin((() => {
		init_react();
	})))();
}
//#endregion
//#region ../packages/components/build-module/input-control/reducer/state.mjs
var initialStateReducer, initialInputControlState;
function init_state() {
	return (init_state = __esmMin((() => {
		initialStateReducer = (state) => state;
		initialInputControlState = {
			error: null,
			initialValue: "",
			isDirty: false,
			isDragEnabled: false,
			isDragging: false,
			isPressEnterToChange: false,
			value: ""
		};
	})))();
}
//#endregion
//#region ../packages/components/build-module/input-control/reducer/actions.mjs
var CHANGE, COMMIT, CONTROL, DRAG_END, DRAG_START, DRAG, INVALIDATE, PRESS_DOWN, PRESS_ENTER, PRESS_UP, RESET;
function init_actions() {
	return (init_actions = __esmMin((() => {
		CHANGE = "CHANGE";
		COMMIT = "COMMIT";
		CONTROL = "CONTROL";
		DRAG_END = "DRAG_END";
		DRAG_START = "DRAG_START";
		DRAG = "DRAG";
		INVALIDATE = "INVALIDATE";
		PRESS_DOWN = "PRESS_DOWN";
		PRESS_ENTER = "PRESS_ENTER";
		PRESS_UP = "PRESS_UP";
		RESET = "RESET";
	})))();
}
//#endregion
//#region ../packages/components/build-module/input-control/reducer/reducer.mjs
function mergeInitialState(initialState = initialInputControlState) {
	const { value } = initialState;
	return {
		...initialInputControlState,
		...initialState,
		initialValue: value
	};
}
function inputControlStateReducer(composedStateReducers) {
	return (state, action) => {
		const nextState = { ...state };
		switch (action.type) {
			case CONTROL:
				nextState.value = action.payload.value;
				nextState.isDirty = false;
				nextState._event = void 0;
				return nextState;
			/**
			* Keyboard events
			*/
			case PRESS_UP:
				nextState.isDirty = false;
				break;
			case PRESS_DOWN:
				nextState.isDirty = false;
				break;
			/**
			* Drag events
			*/
			case DRAG_START:
				nextState.isDragging = true;
				break;
			case DRAG_END:
				nextState.isDragging = false;
				break;
			/**
			* Input events
			*/
			case CHANGE:
				nextState.error = null;
				nextState.value = action.payload.value;
				if (state.isPressEnterToChange) nextState.isDirty = true;
				break;
			case COMMIT:
				nextState.value = action.payload.value;
				nextState.isDirty = false;
				break;
			case RESET:
				nextState.error = null;
				nextState.isDirty = false;
				nextState.value = action.payload.value || state.initialValue;
				break;
			/**
			* Validation
			*/
			case INVALIDATE: nextState.error = action.payload.error;
		}
		nextState._event = action.payload.event;
		return composedStateReducers(nextState, action);
	};
}
function useInputControlStateReducer(stateReducer = initialStateReducer, initialState = initialInputControlState, onChangeHandler) {
	const [state, dispatch] = (0, import_react.useReducer)(inputControlStateReducer(stateReducer), mergeInitialState(initialState));
	const createChangeEvent = (type) => (nextValue, event) => {
		dispatch({
			type,
			payload: {
				value: nextValue,
				event
			}
		});
	};
	const createKeyEvent = (type) => (event) => {
		dispatch({
			type,
			payload: { event }
		});
	};
	const createDragEvent = (type) => (payload) => {
		dispatch({
			type,
			payload
		});
	};
	const change = createChangeEvent(CHANGE);
	const invalidate = (error, event) => dispatch({
		type: INVALIDATE,
		payload: {
			error,
			event
		}
	});
	const reset = createChangeEvent(RESET);
	const commit = createChangeEvent(COMMIT);
	const dragStart = createDragEvent(DRAG_START);
	const drag = createDragEvent(DRAG);
	const dragEnd = createDragEvent(DRAG_END);
	const pressUp = createKeyEvent(PRESS_UP);
	const pressDown = createKeyEvent(PRESS_DOWN);
	const pressEnter = createKeyEvent(PRESS_ENTER);
	const currentStateRef = (0, import_react.useRef)(state);
	const refPropsRef = (0, import_react.useRef)({
		value: initialState.value,
		onChangeHandler
	});
	(0, import_react.useLayoutEffect)(() => {
		currentStateRef.current = state;
		refPropsRef.current = {
			value: initialState.value,
			onChangeHandler
		};
	});
	(0, import_react.useLayoutEffect)(() => {
		if (currentStateRef.current._event !== void 0 && state.value !== refPropsRef.current.value && !state.isDirty) refPropsRef.current.onChangeHandler(state.value ?? "", { event: currentStateRef.current._event });
	}, [state.value, state.isDirty]);
	(0, import_react.useLayoutEffect)(() => {
		if (initialState.value !== currentStateRef.current.value && !currentStateRef.current.isDirty) dispatch({
			type: CONTROL,
			payload: { value: initialState.value ?? "" }
		});
	}, [initialState.value]);
	return {
		change,
		commit,
		dispatch,
		drag,
		dragEnd,
		dragStart,
		invalidate,
		pressDown,
		pressEnter,
		pressUp,
		reset,
		state
	};
}
function init_reducer() {
	return (init_reducer = __esmMin((() => {
		init_react();
		init_state();
		init_actions();
	})))();
}
//#endregion
//#region ../packages/components/build-module/input-control/input-field.mjs
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
function InputField({ disabled = false, dragDirection = "n", dragThreshold = 10, id, isDragEnabled = false, isPressEnterToChange = false, onBlur = noop$1, onChange = noop$1, onDrag = noop$1, onDragEnd = noop$1, onDragStart = noop$1, onKeyDown = noop$1, onValidate = noop$1, size = "default", stateReducer = (state) => state, value: valueProp, type, paddingInlineStart, paddingInlineEnd, style, ...props }, ref) {
	const { state, change, commit, drag, dragEnd, dragStart, invalidate, pressDown, pressEnter, pressUp, reset } = useInputControlStateReducer(stateReducer, {
		isDragEnabled,
		value: valueProp,
		isPressEnterToChange
	}, onChange);
	const { value, isDragging, isDirty } = state;
	const wasDirtyOnBlur = (0, import_react.useRef)(false);
	const dragCursor = useDragCursor(isDragging, dragDirection);
	const handleOnBlur = (event) => {
		onBlur(event);
		if (isDirty || !event.target.validity.valid) {
			wasDirtyOnBlur.current = true;
			handleOnCommit(event);
		}
	};
	const handleOnChange = (event) => {
		const nextValue = event.target.value;
		change(nextValue, event);
	};
	const handleOnCommit = (event) => {
		const nextValue = event.currentTarget.value;
		try {
			onValidate(nextValue);
			commit(nextValue, event);
		} catch (err) {
			invalidate(err, event);
		}
	};
	const handleOnKeyDown = (event) => {
		const { key } = event;
		onKeyDown(event);
		switch (key) {
			case "ArrowUp":
				pressUp(event);
				break;
			case "ArrowDown":
				pressDown(event);
				break;
			case "Enter":
				pressEnter(event);
				if (isPressEnterToChange) {
					event.preventDefault();
					handleOnCommit(event);
				}
				break;
			case "Escape": if (isPressEnterToChange && isDirty) {
				event.preventDefault();
				reset(valueProp, event);
			}
		}
	};
	const dragGestureProps = useDrag((dragProps2) => {
		const { distance, dragging, event, target } = dragProps2;
		if (event.pointerType === "touch" || event.type.startsWith("touch")) return;
		dragProps2.event = {
			...dragProps2.event,
			target
		};
		if (!distance) return;
		event.stopPropagation();
		if (!dragging) {
			onDragEnd(dragProps2);
			dragEnd(dragProps2);
			return;
		}
		onDrag(dragProps2);
		drag(dragProps2);
		if (!isDragging) {
			onDragStart(dragProps2);
			dragStart(dragProps2);
		}
	}, {
		axis: dragDirection === "e" || dragDirection === "w" ? "x" : "y",
		threshold: dragThreshold,
		enabled: isDragEnabled,
		pointer: { capture: false }
	});
	const dragProps = isDragEnabled ? dragGestureProps() : {};
	return /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)(PolymorphicElement, {
		as: "input",
		...props,
		...dragProps,
		className: clsx("components-input-control__input", style_module_default.input, {
			[style_module_default["is-small"]]: size === "small",
			[style_module_default["is-compact"]]: size === "compact",
			[style_module_default["is-dragging"]]: isDragging,
			[style_module_default["has-drag-cursor"]]: isDragging && !!dragCursor
		}),
		style: {
			"--_wp-components-input-control-padding-start": typeof paddingInlineStart === "number" ? `${paddingInlineStart}px` : paddingInlineStart,
			"--_wp-components-input-control-padding-end": typeof paddingInlineEnd === "number" ? `${paddingInlineEnd}px` : paddingInlineEnd,
			"--_wp-components-input-control-drag-cursor": isDragging ? dragCursor : void 0,
			...style
		},
		"data-empty-value": value ? void 0 : "",
		disabled,
		id,
		onBlur: handleOnBlur,
		onChange: handleOnChange,
		onKeyDown: withIgnoreIMEEvents(handleOnKeyDown),
		ref,
		value: value ?? "",
		type
	});
}
var import_jsx_runtime$1, STYLE_HASH_ATTRIBUTE, style_module_default, noop$1, input_field_default;
function init_input_field() {
	return (init_input_field = __esmMin((() => {
		init_clsx();
		init_use_gesture_react_esm();
		init_react();
		init_build_module();
		init_utils();
		init_polymorphic_element();
		init_reducer();
		import_jsx_runtime$1 = require_jsx_runtime();
		STYLE_HASH_ATTRIBUTE = "data-wp-hash";
		if (typeof process === "undefined" || false) registerStyle("3b90fbb85b", "._9250f430bfd2e37f__border{border-color:var(--wpds-color-stroke-interactive-neutral,#8d8d8d)}._441152b766cc7dd5__container:hover ._9250f430bfd2e37f__border:not(._085e2fd9d9c04328__is-disabled,._1207ba6da0cb0862__is-borderless){border-color:var(--wpds-color-stroke-interactive-neutral-active,#6e6e6e)}._9250f430bfd2e37f__border._085e2fd9d9c04328__is-disabled:not(._1207ba6da0cb0862__is-borderless){border-color:var(--wpds-color-stroke-interactive-neutral-disabled,#dbdbdb)}@media (forced-colors:active){._9250f430bfd2e37f__border._085e2fd9d9c04328__is-disabled:not(._1207ba6da0cb0862__is-borderless){border-color:GrayText}}._9250f430bfd2e37f__border._1207ba6da0cb0862__is-borderless{border-color:transparent}.f9a704f0bcd51276__root{border-radius:2px;box-sizing:border-box;padding-block-start:0;position:relative}._441152b766cc7dd5__container{align-items:center;background-color:var(--wp-components-color-background,var(--wpds-color-background-surface-neutral-strong,#fff));border-radius:inherit;box-sizing:border-box;display:flex;flex:1;position:relative}._441152b766cc7dd5__container:where(._085e2fd9d9c04328__is-disabled){color:var(--wpds-color-foreground-interactive-neutral-disabled,#8d8d8d)}@media (forced-colors:active){._441152b766cc7dd5__container:where(._085e2fd9d9c04328__is-disabled){color:GrayText}}._441152b766cc7dd5__container:where(.edb730a713554e20__full-width){width:100%}._441152b766cc7dd5__container:where(._807ed022073eae29__custom-width){width:var(--_wp-components-input-control-width)}._441152b766cc7dd5__container:where(._6d053223813de8a5__edge-width){flex:0 0 var(--_wp-components-input-control-width)}._441152b766cc7dd5__container:where(._5321a1d6945b3bf1__width-inherit){width:inherit}._441152b766cc7dd5__container:where(.ca8ca8513f014f36__width-initial){width:auto}._441152b766cc7dd5__container:where(.c71bb5482ecc4c81__width-revert){width:revert}._441152b766cc7dd5__container:where(.a247c0b9ba5a07d7__width-revert-layer){width:revert-layer}._441152b766cc7dd5__container:where(._014dd5d2fcd292ca__width-unset){width:unset}._7945ee0f2ab22678__prefix{box-sizing:border-box;display:block}._43694aa489e825dc__suffix{align-items:center;align-self:stretch;box-sizing:border-box;display:flex}.d0bffb15f6349a47__backdrop.d0bffb15f6349a47__backdrop.d0bffb15f6349a47__backdrop{border-radius:inherit;border-style:solid;border-width:1px;box-sizing:border-box;inset:0;margin:0;padding:0;pointer-events:none;position:absolute}._96275241f1eec99a__input._96275241f1eec99a__input._96275241f1eec99a__input{--_wp-components-input-control-padding:12px;background-color:transparent;border:none;box-shadow:none!important;box-sizing:border-box;color:var(--wp-components-color-foreground,var(--wpds-color-foreground-content-neutral,#1e1e1e));display:block;font-family:inherit;font-size:16px;height:40px;line-height:1;margin:0;min-height:40px;outline:none;width:100%}@media (min-width:600px){._96275241f1eec99a__input._96275241f1eec99a__input._96275241f1eec99a__input{font-size:13px}}._96275241f1eec99a__input._96275241f1eec99a__input._96275241f1eec99a__input:where(.d6f9ae40ee4afa68__is-small){--_wp-components-input-control-padding:8px;height:24px;min-height:24px}@media (min-width:600px){._96275241f1eec99a__input._96275241f1eec99a__input._96275241f1eec99a__input:where(.d6f9ae40ee4afa68__is-small){font-size:11px}}._96275241f1eec99a__input._96275241f1eec99a__input._96275241f1eec99a__input:where(.ba85b67ce34be75f__is-compact){--_wp-components-input-control-padding:8px;height:32px;min-height:32px}._96275241f1eec99a__input._96275241f1eec99a__input._96275241f1eec99a__input{padding-inline-end:var(--_wp-components-input-control-padding-end,var(--_wp-components-input-control-padding));padding-inline-start:var(--_wp-components-input-control-padding-start,var(--_wp-components-input-control-padding))}._96275241f1eec99a__input._96275241f1eec99a__input._96275241f1eec99a__input:where(._4a3137ed7f351501__is-dragging){cursor:var(--_wp-components-input-control-drag-cursor,auto);user-select:none}._96275241f1eec99a__input._96275241f1eec99a__input._96275241f1eec99a__input:where(._4a3137ed7f351501__is-dragging)::-webkit-inner-spin-button,._96275241f1eec99a__input._96275241f1eec99a__input._96275241f1eec99a__input:where(._4a3137ed7f351501__is-dragging)::-webkit-outer-spin-button{-webkit-appearance:none!important;margin:0!important}._96275241f1eec99a__input._96275241f1eec99a__input._96275241f1eec99a__input:where(._44e3ee3c579662aa__has-drag-cursor):active{cursor:var(--_wp-components-input-control-drag-cursor)}._96275241f1eec99a__input._96275241f1eec99a__input._96275241f1eec99a__input:where(:disabled){color:var(--wpds-color-foreground-interactive-neutral-disabled,#8d8d8d)}@media (forced-colors:active){._96275241f1eec99a__input._96275241f1eec99a__input._96275241f1eec99a__input:where(:disabled){color:GrayText}}._96275241f1eec99a__input._96275241f1eec99a__input._96275241f1eec99a__input:disabled::placeholder{color:var(--wpds-color-foreground-interactive-neutral-disabled,#8d8d8d)}._96275241f1eec99a__input._96275241f1eec99a__input._96275241f1eec99a__input::-webkit-input-placeholder{color:color-mix(in srgb,var(--wp-components-color-foreground,var(--wpds-color-foreground-content-neutral,#1e1e1e)),transparent 38%)}._96275241f1eec99a__input._96275241f1eec99a__input._96275241f1eec99a__input::-moz-placeholder{color:color-mix(in srgb,var(--wp-components-color-foreground,var(--wpds-color-foreground-content-neutral,#1e1e1e)),transparent 38%)}._96275241f1eec99a__input._96275241f1eec99a__input._96275241f1eec99a__input:-ms-input-placeholder{color:color-mix(in srgb,var(--wp-components-color-foreground,var(--wpds-color-foreground-content-neutral,#1e1e1e)),transparent 38%)}._96275241f1eec99a__input._96275241f1eec99a__input._96275241f1eec99a__input[type=date]::-webkit-datetime-edit,._96275241f1eec99a__input._96275241f1eec99a__input._96275241f1eec99a__input[type=datetime-local]::-webkit-datetime-edit,._96275241f1eec99a__input._96275241f1eec99a__input._96275241f1eec99a__input[type=month]::-webkit-datetime-edit,._96275241f1eec99a__input._96275241f1eec99a__input._96275241f1eec99a__input[type=time]::-webkit-datetime-edit,._96275241f1eec99a__input._96275241f1eec99a__input._96275241f1eec99a__input[type=week]::-webkit-datetime-edit{align-items:center;display:flex;height:100%}@supports (-webkit-hyphens:none) and (not (-moz-appearance:none)){._96275241f1eec99a__input._96275241f1eec99a__input._96275241f1eec99a__input[type=date][data-empty-value]:not(:focus),._96275241f1eec99a__input._96275241f1eec99a__input._96275241f1eec99a__input[type=datetime-local][data-empty-value]:not(:focus),._96275241f1eec99a__input._96275241f1eec99a__input._96275241f1eec99a__input[type=time][data-empty-value]:not(:focus){color:transparent}._96275241f1eec99a__input._96275241f1eec99a__input._96275241f1eec99a__input[type=date][data-empty-value]:not(:focus):disabled::-webkit-datetime-edit-text,._96275241f1eec99a__input._96275241f1eec99a__input._96275241f1eec99a__input[type=datetime-local][data-empty-value]:not(:focus):disabled::-webkit-datetime-edit-text,._96275241f1eec99a__input._96275241f1eec99a__input._96275241f1eec99a__input[type=time][data-empty-value]:not(:focus):disabled::-webkit-datetime-edit-text{color:transparent}}._96275241f1eec99a__input._96275241f1eec99a__input._96275241f1eec99a__input[type=email],._96275241f1eec99a__input._96275241f1eec99a__input._96275241f1eec99a__input[type=url]{direction:ltr}._6d89648d8590be0a__label._6d89648d8590be0a__label._6d89648d8590be0a__label{box-sizing:border-box;display:block;font-size:11px;font-weight:var(--wpds-typography-font-weight-emphasis,600);line-height:1.4;max-width:100%;padding-block:0;text-transform:uppercase;z-index:1}._09e56cffb4f3346c__label-wrapper._09e56cffb4f3346c__label-wrapper{max-width:calc(100% - 10px)}._932ac6d12b21a960__prefix-wrapper{padding-inline-start:12px}._932ac6d12b21a960__prefix-wrapper:where(.d6f9ae40ee4afa68__is-small,.ba85b67ce34be75f__is-compact){padding-inline-start:8px}._932ac6d12b21a960__prefix-wrapper:where(._7589cc701f890e88__has-reduced-padding){display:flex;padding-inline-start:8px}._932ac6d12b21a960__prefix-wrapper:where(._7589cc701f890e88__has-reduced-padding):where(.d6f9ae40ee4afa68__is-small,.ba85b67ce34be75f__is-compact){padding-inline-start:4px}._9042e8fd4d3ac562__suffix-wrapper{padding-inline-end:12px}._9042e8fd4d3ac562__suffix-wrapper:where(.d6f9ae40ee4afa68__is-small,.ba85b67ce34be75f__is-compact){padding-inline-end:8px}._9042e8fd4d3ac562__suffix-wrapper:where(._7589cc701f890e88__has-reduced-padding){display:flex;padding-inline-end:8px}._9042e8fd4d3ac562__suffix-wrapper:where(._7589cc701f890e88__has-reduced-padding):where(.d6f9ae40ee4afa68__is-small,.ba85b67ce34be75f__is-compact){padding-inline-end:4px}");
		style_module_default = {
			"border": "_9250f430bfd2e37f__border",
			"container": "_441152b766cc7dd5__container",
			"is-disabled": "_085e2fd9d9c04328__is-disabled",
			"is-borderless": "_1207ba6da0cb0862__is-borderless",
			"root": "f9a704f0bcd51276__root",
			"full-width": "edb730a713554e20__full-width",
			"custom-width": "_807ed022073eae29__custom-width",
			"edge-width": "_6d053223813de8a5__edge-width",
			"width-inherit": "_5321a1d6945b3bf1__width-inherit",
			"width-initial": "ca8ca8513f014f36__width-initial",
			"width-revert": "c71bb5482ecc4c81__width-revert",
			"width-revert-layer": "a247c0b9ba5a07d7__width-revert-layer",
			"width-unset": "_014dd5d2fcd292ca__width-unset",
			"prefix": "_7945ee0f2ab22678__prefix",
			"suffix": "_43694aa489e825dc__suffix",
			"backdrop": "d0bffb15f6349a47__backdrop",
			"input": "_96275241f1eec99a__input",
			"is-small": "d6f9ae40ee4afa68__is-small",
			"is-compact": "ba85b67ce34be75f__is-compact",
			"is-dragging": "_4a3137ed7f351501__is-dragging",
			"has-drag-cursor": "_44e3ee3c579662aa__has-drag-cursor",
			"label": "_6d89648d8590be0a__label",
			"label-wrapper": "_09e56cffb4f3346c__label-wrapper",
			"prefix-wrapper": "_932ac6d12b21a960__prefix-wrapper",
			"has-reduced-padding": "_7589cc701f890e88__has-reduced-padding",
			"suffix-wrapper": "_9042e8fd4d3ac562__suffix-wrapper"
		};
		noop$1 = () => {};
		input_field_default = (0, import_react.forwardRef)(InputField);
	})))();
}
//#endregion
//#region ../packages/components/build-module/input-control/index.mjs
function useUniqueId(idProp) {
	const id = `inspector-input-control-${use_instance_id_default(InputControl)}`;
	return idProp || id;
}
function UnforwardedInputControl(props, ref) {
	const { __next40pxDefaultSize: _next40pxDefaultSize, __next36pxDefaultSize: _next36pxDefaultSize, __unstableStateReducer: stateReducer = (state) => state, __unstableInputWidth, className, disabled = false, help, hideLabelFromVision = false, id: idProp, isPressEnterToChange = false, label, labelPosition = "top", onChange = noop, onValidate = noop, onKeyDown = noop, prefix, size = "default", style, suffix, value, ...restProps } = props;
	const id = useUniqueId(idProp);
	const classes = clsx("components-input-control", className);
	const draftHookProps = useDraft({
		value,
		onBlur: restProps.onBlur,
		onChange
	});
	const helpProp = !!help ? { "aria-describedby": `${id}__help` } : {};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(base_control_default, {
		className: classes,
		help,
		id,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(input_base_default, {
			__unstableInputWidth,
			disabled,
			gap: 3,
			hideLabelFromVision,
			id,
			justify: "left",
			label,
			labelPosition,
			prefix,
			size,
			style,
			suffix,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(input_field_default, {
				...restProps,
				...helpProp,
				className: "components-input-control__input",
				disabled,
				id,
				isPressEnterToChange,
				onKeyDown,
				onValidate,
				paddingInlineStart: prefix ? "var(--wpds-dimension-padding-xs, 4px)" : void 0,
				paddingInlineEnd: suffix ? "var(--wpds-dimension-padding-xs, 4px)" : void 0,
				ref,
				size,
				stateReducer,
				...draftHookProps
			})
		})
	});
}
var import_jsx_runtime, noop, InputControl, input_control_default;
function init_input_control() {
	return (init_input_control = __esmMin((() => {
		init_clsx();
		init_use_instance_id();
		init_react();
		init_input_base();
		init_input_field();
		init_utils();
		init_base_control();
		import_jsx_runtime = require_jsx_runtime();
		noop = () => {};
		InputControl = (0, import_react.forwardRef)(UnforwardedInputControl);
		input_control_default = InputControl;
	})))();
}
//#endregion
export { DRAG as a, PRESS_UP as c, input_base_default as d, component_default as f, COMMIT as i, init_actions as l, init_input_control as n, PRESS_DOWN as o, init_component as p, input_control_default as r, PRESS_ENTER as s, InputControl as t, init_input_base as u };
