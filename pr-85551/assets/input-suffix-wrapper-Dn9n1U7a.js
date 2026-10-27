import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C1RZKCc6.js";
import { a as init_clsx, i as clsx } from "./iframe-UtSZlYID.js";
import { n as useContextSystem, o as init_context_connect, r as contextConnect, t as init_use_context_system } from "./use-context-system-4MMWHyS1.js";
import { i as init_polymorphic_element, r as PolymorphicElement } from "./component-CFOx0tK5.js";
//#region ../packages/components/build-module/input-control/input-prefix-wrapper.mjs
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
function UnconnectedInputControlPrefixWrapper(props, forwardedRef) {
	const derivedProps = useContextSystem(props, "InputControlPrefixWrapper");
	const { className, size, variant = "default" } = derivedProps;
	const classes = clsx(style_module_default$1["prefix-wrapper"], className, {
		[style_module_default$1["is-small"]]: size === "small",
		[style_module_default$1["is-compact"]]: size === "compact",
		[style_module_default$1["has-reduced-padding"]]: variant !== "default"
	});
	return /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)(PolymorphicElement, {
		as: "div",
		...derivedProps,
		isPrefix: true,
		className: classes,
		ref: forwardedRef
	});
}
var import_jsx_runtime$1, STYLE_HASH_ATTRIBUTE$1, style_module_default$1, InputControlPrefixWrapper, input_prefix_wrapper_default;
function init_input_prefix_wrapper() {
	return (init_input_prefix_wrapper = __esmMin((() => {
		init_clsx();
		init_polymorphic_element();
		init_context_connect(), init_use_context_system();
		import_jsx_runtime$1 = require_jsx_runtime();
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
		InputControlPrefixWrapper = contextConnect(UnconnectedInputControlPrefixWrapper, "InputControlPrefixWrapper");
		input_prefix_wrapper_default = InputControlPrefixWrapper;
	})))();
}
//#endregion
//#region ../packages/components/build-module/input-control/input-suffix-wrapper.mjs
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
function UnconnectedInputControlSuffixWrapper(props, forwardedRef) {
	const derivedProps = useContextSystem(props, "InputControlSuffixWrapper");
	const { className, size, variant = "default" } = derivedProps;
	const classes = clsx(style_module_default["suffix-wrapper"], className, {
		[style_module_default["is-small"]]: size === "small",
		[style_module_default["is-compact"]]: size === "compact",
		[style_module_default["has-reduced-padding"]]: variant !== "default"
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PolymorphicElement, {
		as: "div",
		...derivedProps,
		className: classes,
		ref: forwardedRef
	});
}
var import_jsx_runtime, STYLE_HASH_ATTRIBUTE, style_module_default, InputControlSuffixWrapper, input_suffix_wrapper_default;
function init_input_suffix_wrapper() {
	return (init_input_suffix_wrapper = __esmMin((() => {
		init_clsx();
		init_polymorphic_element();
		init_context_connect(), init_use_context_system();
		import_jsx_runtime = require_jsx_runtime();
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
		InputControlSuffixWrapper = contextConnect(UnconnectedInputControlSuffixWrapper, "InputControlSuffixWrapper");
		input_suffix_wrapper_default = InputControlSuffixWrapper;
	})))();
}
//#endregion
export { init_input_prefix_wrapper as a, InputControlPrefixWrapper as i, init_input_suffix_wrapper as n, input_prefix_wrapper_default as o, input_suffix_wrapper_default as r, InputControlSuffixWrapper as t };
