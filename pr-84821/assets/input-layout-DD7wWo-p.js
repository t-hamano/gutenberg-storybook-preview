import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C1RZKCc6.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { a as init_clsx, i as clsx } from "./iframe-Dbjzp1_m.js";
//#region ../packages/ui/build-module/form/primitives/input-layout/input-layout.mjs
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
var import_jsx_runtime$1, STYLE_HASH_ATTRIBUTE$1, global_css_defense_default, resets_default, style_default$1, InputLayout$1;
function init_input_layout() {
	return (init_input_layout = __esmMin((() => {
		init_clsx();
		init_react();
		import_jsx_runtime$1 = require_jsx_runtime();
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
		if (typeof process === "undefined" || false) registerStyle$1("10f3806643", "@layer wp-ui{@layer utilities, components, compositions, overrides;@layer utilities{._336cd3e4e743482f__box-sizing{box-sizing:border-box;*,:after,:before{box-sizing:inherit}}}}");
		resets_default = { "box-sizing": "_336cd3e4e743482f__box-sizing" };
		if (typeof process === "undefined" || false) registerStyle$1("fae9ae14d3", "@layer wp-ui{@layer utilities, components, compositions, overrides;@layer components{.cb2baafdc08746bb__input-layout{--wp-ui-input-layout-padding-inline:var(--wpds-dimension-padding-md,12px);background-color:var(--wpds-color-background-interactive-neutral,var(--wpds-color-background-surface-neutral-strong,#fff));border-color:var(--wpds-color-stroke-interactive-neutral,#8d8d8d);border-radius:var(--wpds-border-radius-sm,2px);border-style:solid;border-width:var(--wpds-border-width-xs,1px);color:var(--wpds-color-foreground-interactive-neutral,#1e1e1e);display:flex;font-family:var(--wpds-typography-font-family-body,-apple-system,system-ui,\"Segoe UI\",\"Roboto\",\"Oxygen-Sans\",\"Ubuntu\",\"Cantarell\",\"Helvetica Neue\",sans-serif);font-size:var(--wpds-typography-font-size-md,13px);height:var(--wpds-dimension-size-lg,40px);line-height:1;&._0c807a84cbb94e0c__is-size-compact{height:var(--wpds-dimension-size-md,32px)}&._0c807a84cbb94e0c__is-size-compact,&.ed67cda122dc1e7b__is-size-small{--wp-ui-input-layout-padding-inline:var(--wpds-dimension-padding-sm,8px)}&.ed67cda122dc1e7b__is-size-small{height:var(--wpds-dimension-size-sm,24px)}&._6fb7104732387680__is-disabled,&:has([data-can-disable-input-layout][data-disabled]){color:var(--wpds-color-foreground-interactive-neutral-disabled,#8d8d8d);@media (forced-colors:active){color:GrayText}&:not(._8097270636ca6100__is-borderless){background-color:var(--wpds-color-background-interactive-neutral-disabled,var(--wpds-color-background-surface-neutral-strong,#fff));border-color:var(--wpds-color-stroke-interactive-neutral-disabled,#dbdbdb);@media (forced-colors:active){border-bottom-color:GrayText;border-left-color:GrayText;border-right-color:GrayText;border-top-color:GrayText}}}&._8097270636ca6100__is-borderless{background-color:var(--wpds-color-background-interactive-neutral-weak,#0000);border-color:transparent}&:has(._0d7afad74a057888__input-layout-slot:focus-within){--_gcd-div-outline:none;outline:none}&:hover:not(._6fb7104732387680__is-disabled,:has([data-can-disable-input-layout][data-disabled]),._8097270636ca6100__is-borderless){background-color:var(--wpds-color-background-interactive-neutral-active,var(--wpds-color-background-surface-neutral-strong,#fff));border-color:var(--wpds-color-stroke-interactive-neutral-active,#6e6e6e)}&:has(:invalid[data-validity-visible]){--focus-color:var(--wpds-color-stroke-interactive-error,#cc1818);border-color:var(--wpds-color-stroke-interactive-error,#cc1818);&:hover{border-color:var(--wpds-color-stroke-interactive-error-active,#9d0000)}}}.c192b41a12b4387b__slot-wrapper{display:contents}._0d7afad74a057888__input-layout-slot{align-items:center;display:flex;&._0c952682762ca288__is-padding-minimal{--wp-ui-input-layout-prefix-padding-start:calc(var(--wp-ui-input-layout-padding-inline) - var(--wpds-dimension-padding-xs, 4px));--wp-ui-input-layout-suffix-padding-end:calc(var(--wp-ui-input-layout-padding-inline) - var(--wpds-dimension-padding-xs, 4px))}[data-slot-type=prefix] &{padding-inline-start:var(--wp-ui-input-layout-prefix-padding-start,var(--wp-ui-input-layout-padding-inline))}[data-slot-type=suffix] &{padding-inline-end:var(--wp-ui-input-layout-suffix-padding-end,var(--wp-ui-input-layout-padding-inline))}}}}");
		style_default$1 = {
			"input-layout": "cb2baafdc08746bb__input-layout",
			"is-size-compact": "_0c807a84cbb94e0c__is-size-compact",
			"is-size-small": "ed67cda122dc1e7b__is-size-small",
			"is-disabled": "_6fb7104732387680__is-disabled",
			"is-borderless": "_8097270636ca6100__is-borderless",
			"input-layout-slot": "_0d7afad74a057888__input-layout-slot",
			"slot-wrapper": "c192b41a12b4387b__slot-wrapper",
			"is-padding-minimal": "_0c952682762ca288__is-padding-minimal"
		};
		InputLayout$1 = (0, import_react.forwardRef)(function UnforwardedInputLayout({ className, children, visuallyDisabled, size = "default", isBorderless, prefix, suffix, ...restProps }, ref) {
			return /* @__PURE__ */ (0, import_jsx_runtime$1.jsxs)("div", {
				ref,
				className: clsx(global_css_defense_default.div, resets_default["box-sizing"], style_default$1["input-layout"], style_default$1[`is-size-${size}`], visuallyDisabled && style_default$1["is-disabled"], isBorderless && style_default$1["is-borderless"], className),
				...restProps,
				children: [
					import_react.Children.count(prefix) > 0 && /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)("div", {
						className: style_default$1["slot-wrapper"],
						"data-slot-type": "prefix",
						children: prefix
					}),
					children,
					import_react.Children.count(suffix) > 0 && /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)("div", {
						className: style_default$1["slot-wrapper"],
						"data-slot-type": "suffix",
						children: suffix
					})
				]
			});
		});
	})))();
}
//#endregion
//#region ../packages/ui/build-module/form/primitives/input-layout/slot.mjs
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
var import_jsx_runtime, STYLE_HASH_ATTRIBUTE, style_default, InputLayoutSlot;
function init_slot() {
	return (init_slot = __esmMin((() => {
		init_clsx();
		init_react();
		import_jsx_runtime = require_jsx_runtime();
		STYLE_HASH_ATTRIBUTE = "data-wp-hash";
		if (typeof process === "undefined" || false) registerStyle("fae9ae14d3", "@layer wp-ui{@layer utilities, components, compositions, overrides;@layer components{.cb2baafdc08746bb__input-layout{--wp-ui-input-layout-padding-inline:var(--wpds-dimension-padding-md,12px);background-color:var(--wpds-color-background-interactive-neutral,var(--wpds-color-background-surface-neutral-strong,#fff));border-color:var(--wpds-color-stroke-interactive-neutral,#8d8d8d);border-radius:var(--wpds-border-radius-sm,2px);border-style:solid;border-width:var(--wpds-border-width-xs,1px);color:var(--wpds-color-foreground-interactive-neutral,#1e1e1e);display:flex;font-family:var(--wpds-typography-font-family-body,-apple-system,system-ui,\"Segoe UI\",\"Roboto\",\"Oxygen-Sans\",\"Ubuntu\",\"Cantarell\",\"Helvetica Neue\",sans-serif);font-size:var(--wpds-typography-font-size-md,13px);height:var(--wpds-dimension-size-lg,40px);line-height:1;&._0c807a84cbb94e0c__is-size-compact{height:var(--wpds-dimension-size-md,32px)}&._0c807a84cbb94e0c__is-size-compact,&.ed67cda122dc1e7b__is-size-small{--wp-ui-input-layout-padding-inline:var(--wpds-dimension-padding-sm,8px)}&.ed67cda122dc1e7b__is-size-small{height:var(--wpds-dimension-size-sm,24px)}&._6fb7104732387680__is-disabled,&:has([data-can-disable-input-layout][data-disabled]){color:var(--wpds-color-foreground-interactive-neutral-disabled,#8d8d8d);@media (forced-colors:active){color:GrayText}&:not(._8097270636ca6100__is-borderless){background-color:var(--wpds-color-background-interactive-neutral-disabled,var(--wpds-color-background-surface-neutral-strong,#fff));border-color:var(--wpds-color-stroke-interactive-neutral-disabled,#dbdbdb);@media (forced-colors:active){border-bottom-color:GrayText;border-left-color:GrayText;border-right-color:GrayText;border-top-color:GrayText}}}&._8097270636ca6100__is-borderless{background-color:var(--wpds-color-background-interactive-neutral-weak,#0000);border-color:transparent}&:has(._0d7afad74a057888__input-layout-slot:focus-within){--_gcd-div-outline:none;outline:none}&:hover:not(._6fb7104732387680__is-disabled,:has([data-can-disable-input-layout][data-disabled]),._8097270636ca6100__is-borderless){background-color:var(--wpds-color-background-interactive-neutral-active,var(--wpds-color-background-surface-neutral-strong,#fff));border-color:var(--wpds-color-stroke-interactive-neutral-active,#6e6e6e)}&:has(:invalid[data-validity-visible]){--focus-color:var(--wpds-color-stroke-interactive-error,#cc1818);border-color:var(--wpds-color-stroke-interactive-error,#cc1818);&:hover{border-color:var(--wpds-color-stroke-interactive-error-active,#9d0000)}}}.c192b41a12b4387b__slot-wrapper{display:contents}._0d7afad74a057888__input-layout-slot{align-items:center;display:flex;&._0c952682762ca288__is-padding-minimal{--wp-ui-input-layout-prefix-padding-start:calc(var(--wp-ui-input-layout-padding-inline) - var(--wpds-dimension-padding-xs, 4px));--wp-ui-input-layout-suffix-padding-end:calc(var(--wp-ui-input-layout-padding-inline) - var(--wpds-dimension-padding-xs, 4px))}[data-slot-type=prefix] &{padding-inline-start:var(--wp-ui-input-layout-prefix-padding-start,var(--wp-ui-input-layout-padding-inline))}[data-slot-type=suffix] &{padding-inline-end:var(--wp-ui-input-layout-suffix-padding-end,var(--wp-ui-input-layout-padding-inline))}}}}");
		style_default = {
			"input-layout": "cb2baafdc08746bb__input-layout",
			"is-size-compact": "_0c807a84cbb94e0c__is-size-compact",
			"is-size-small": "ed67cda122dc1e7b__is-size-small",
			"is-disabled": "_6fb7104732387680__is-disabled",
			"is-borderless": "_8097270636ca6100__is-borderless",
			"input-layout-slot": "_0d7afad74a057888__input-layout-slot",
			"slot-wrapper": "c192b41a12b4387b__slot-wrapper",
			"is-padding-minimal": "_0c952682762ca288__is-padding-minimal"
		};
		InputLayoutSlot = (0, import_react.forwardRef)(function UnforwardedInputLayoutSlot({ padding = "default", className, ...restProps }, ref) {
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				ref,
				className: clsx(style_default["input-layout-slot"], style_default[`is-padding-${padding}`], className),
				...restProps
			});
		});
		InputLayoutSlot.displayName = "InputLayout.Slot";
	})))();
}
//#endregion
//#region ../packages/ui/build-module/form/primitives/input-layout/index.mjs
var InputLayout;
function init_input_layout$1() {
	return (init_input_layout$1 = __esmMin((() => {
		init_input_layout();
		init_slot();
		InputLayout = Object.assign(InputLayout$1, { Slot: InputLayoutSlot });
	})))();
}
//#endregion
export { init_input_layout$1 as n, InputLayout as t };
