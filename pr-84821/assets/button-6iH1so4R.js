import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C1RZKCc6.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { n as __, t as init_build_module } from "./build-module-v04us4E2.js";
import { a as init_clsx, i as clsx } from "./iframe-Dbjzp1_m.js";
import { n as init_icon$1, t as Icon } from "./icon-5WS0jz-X.js";
import { n as init_Button, t as Button$2 } from "./Button-Dt-xiFI-.js";
import { r as speak, t as init_build_module$1 } from "./build-module-DsAeWnrG.js";
import { n as init_spinner, t as Spinner } from "./spinner-Dy9tXPNi.js";
//#region ../packages/ui/build-module/button/button.mjs
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
var import_jsx_runtime$1, STYLE_HASH_ATTRIBUTE$1, style_default$1, resets_default, focus_module_default, global_css_defense_default, Button$1;
function init_button() {
	return (init_button = __esmMin((() => {
		init_Button();
		init_clsx();
		init_build_module$1();
		init_react();
		init_build_module();
		init_spinner();
		import_jsx_runtime$1 = require_jsx_runtime();
		STYLE_HASH_ATTRIBUTE$1 = "data-wp-hash";
		if (typeof process === "undefined" || false) registerStyle$1("7d9151d891", "@layer wp-ui{@layer utilities, components, compositions, overrides;@layer components{._97b0fc33c028be1a__button,.abbb272e2ce49bd6__is-unstyled{appearance:none;padding:0}._97b0fc33c028be1a__button{--wp-ui-button-font-weight:var(--wpds-typography-font-weight-emphasis,600);--wp-ui-button-background-color:var(--wpds-color-background-interactive-brand-strong,var(--wp-admin-theme-color,#3858e9));--wp-ui-button-background-color-active:var(--wpds-color-background-interactive-brand-strong-active,color-mix(in oklch,var(--wp-admin-theme-color,#3858e9) 93%,#000));--wp-ui-button-background-color-disabled:var(--wpds-color-background-interactive-brand-strong-disabled,#e6e6e6);--wp-ui-button-foreground-color:var(--wpds-color-foreground-interactive-brand-strong,#fff);--wp-ui-button-foreground-color-active:var(--wpds-color-foreground-interactive-brand-strong-active,#fff);--wp-ui-button-foreground-color-disabled:var(--wpds-color-foreground-interactive-brand-strong-disabled,#8d8d8d);--wp-ui-button-padding-block:var(--wpds-dimension-padding-xs,4px);--wp-ui-button-padding-inline:var(--wpds-dimension-padding-md,12px);--wp-ui-button-height:var(--wpds-dimension-size-lg,40px);--wp-ui-button-aspect-ratio:auto;--wp-ui-button-font-size:var(--wpds-typography-font-size-md,13px);--wp-ui-button-min-width:calc(4ch + var(--wp-ui-button-padding-inline)*2);--wp-ui-button-icon-margin:calc((var(--wpds-dimension-size-2xs, 16px) - var(--wpds-dimension-size-sm, 24px))/2);--wp-ui-button-border-color:var(--wp-ui-button-background-color);--wp-ui-button-border-color-active:var(--wp-ui-button-background-color-active);--wp-ui-button-border-color-disabled:var(--wp-ui-button-background-color-disabled);--_gcd-button-font-family:var(--wpds-typography-font-family-body,-apple-system,system-ui,\"Segoe UI\",\"Roboto\",\"Oxygen-Sans\",\"Ubuntu\",\"Cantarell\",\"Helvetica Neue\",sans-serif);--_gcd-button-font-size:var(--wp-ui-button-font-size);--_gcd-button-font-weight:var(--wp-ui-button-font-weight);align-items:center;aspect-ratio:var(--wp-ui-button-aspect-ratio);background-clip:border-box;background-color:var(--wp-ui-button-background-color);border-color:var(--wp-ui-button-border-color);border-radius:var(--wpds-border-radius-sm,2px);border-style:solid;border-width:1px;color:var(--wp-ui-button-foreground-color);display:inline-flex;font-family:var(--wpds-typography-font-family-body,-apple-system,system-ui,\"Segoe UI\",\"Roboto\",\"Oxygen-Sans\",\"Ubuntu\",\"Cantarell\",\"Helvetica Neue\",sans-serif);font-size:var(--wp-ui-button-font-size);font-weight:var(--wp-ui-button-font-weight);gap:var(--wpds-dimension-gap-sm,8px);justify-content:center;line-height:var(--wpds-typography-line-height-sm,20px);max-width:100%;min-height:var(--wp-ui-button-height);min-width:var(--wp-ui-button-min-width);overflow-wrap:anywhere;padding-block:var(--wp-ui-button-padding-block);padding-inline:var(--wp-ui-button-padding-inline);position:relative;text-align:center;text-decoration:none;&:not([data-disabled]){cursor:var(--wpds-cursor-control,pointer)}@media not (prefers-reduced-motion){transition:color .1s ease-out;*{transition:opacity .1s ease-out}}&[href]{cursor:pointer}[href]{color:inherit;text-decoration:inherit}&:not([data-disabled]):is(:hover,:active,:focus){background-color:var(--wp-ui-button-background-color-active);border-color:var(--wp-ui-button-border-color-active);color:var(--wp-ui-button-foreground-color-active)}&[data-disabled]:not(._914b42f315c0e580__is-loading){background-color:var(--wp-ui-button-background-color-disabled);border-color:var(--wp-ui-button-border-color-disabled);color:var(--wp-ui-button-foreground-color-disabled);@media (forced-colors:active){border-bottom-color:GrayText;border-left-color:GrayText;border-right-color:GrayText;border-top-color:GrayText;color:GrayText}}}._908205475f9f2a92__is-small{--wp-ui-button-padding-block:0px;--wp-ui-button-padding-inline:var(--wpds-dimension-padding-sm,8px);--wp-ui-button-height:var(--wpds-dimension-size-sm,24px)}._9f6fc6553aeb36fe__icon{margin:var(--wp-ui-button-icon-margin)}.dd460c965226cc77__is-brand{&._62d5a778b7b258ee__is-outline,&.ad0619a3217c6a5b__is-minimal{--wp-ui-button-foreground-color:var(--wpds-color-foreground-interactive-brand,var(--wp-admin-theme-color,#3858e9));--wp-ui-button-foreground-color-active:var(--wpds-color-foreground-interactive-brand-active,color-mix(in oklch,var(--wp-admin-theme-color,#3858e9) 52%,#000));--wp-ui-button-foreground-color-disabled:var(--wpds-color-foreground-interactive-brand-disabled,#8d8d8d)}&._62d5a778b7b258ee__is-outline{--wp-ui-button-background-color:var(--wpds-color-background-interactive-brand-weak,#0000);--wp-ui-button-background-color-active:var(--wpds-color-background-interactive-brand-weak-active,color-mix(in oklch,var(--wp-admin-theme-color,#3858e9) 12%,#fff));--wp-ui-button-background-color-disabled:var(--wpds-color-background-interactive-brand-weak-disabled,#0000);--wp-ui-button-border-color:var(--wpds-color-stroke-interactive-brand,var(--wp-admin-theme-color,#3858e9));--wp-ui-button-border-color-active:var(--wpds-color-stroke-interactive-brand-active,color-mix(in oklch,var(--wp-admin-theme-color,#3858e9) 85%,#000));--wp-ui-button-border-color-disabled:var(--wpds-color-stroke-interactive-brand-disabled,#dbdbdb)}&.ad0619a3217c6a5b__is-minimal{--wp-ui-button-background-color:var(--wpds-color-background-interactive-brand-weak,#0000);--wp-ui-button-background-color-active:var(--wpds-color-background-interactive-brand-weak-active,color-mix(in oklch,var(--wp-admin-theme-color,#3858e9) 12%,#fff));--wp-ui-button-background-color-disabled:var(--wpds-color-background-interactive-brand-weak-disabled,#0000)}}.e722a8f96726aa99__is-neutral{&.ad0619a3217c6a5b__is-minimal[aria-pressed=true],&.b50b3358c5fb4d0b__is-solid{--wp-ui-button-background-color:var(--wpds-color-background-interactive-neutral-strong,#2d2d2d);--wp-ui-button-background-color-active:var(--wpds-color-background-interactive-neutral-strong-active,#1e1e1e);--wp-ui-button-background-color-disabled:var(--wpds-color-background-interactive-neutral-strong-disabled,#e6e6e6);--wp-ui-button-foreground-color:var(--wpds-color-foreground-interactive-neutral-strong,#f0f0f0);--wp-ui-button-foreground-color-active:var(--wpds-color-foreground-interactive-neutral-strong-active,#f0f0f0);--wp-ui-button-foreground-color-disabled:var(--wpds-color-foreground-interactive-neutral-strong-disabled,#8d8d8d)}&._62d5a778b7b258ee__is-outline,&.ad0619a3217c6a5b__is-minimal:not([aria-pressed=true]){--wp-ui-button-foreground-color:var(--wpds-color-foreground-interactive-neutral,#1e1e1e);--wp-ui-button-foreground-color-active:var(--wpds-color-foreground-interactive-neutral-active,#1e1e1e);--wp-ui-button-foreground-color-disabled:var(--wpds-color-foreground-interactive-neutral-disabled,#8d8d8d)}&._62d5a778b7b258ee__is-outline{--wp-ui-button-background-color:var(--wpds-color-background-interactive-neutral-weak,#0000);--wp-ui-button-background-color-active:var(--wpds-color-background-interactive-neutral-weak-active,#ededed);--wp-ui-button-background-color-disabled:var(--wpds-color-background-interactive-neutral-weak-disabled,#0000);--wp-ui-button-border-color:var(--wpds-color-stroke-interactive-neutral,#8d8d8d);--wp-ui-button-border-color-active:var(--wpds-color-stroke-interactive-neutral-active,#6e6e6e);--wp-ui-button-border-color-disabled:var(--wpds-color-stroke-interactive-neutral-disabled,#dbdbdb)}&.ad0619a3217c6a5b__is-minimal:not([aria-pressed=true]){--wp-ui-button-background-color:var(--wpds-color-background-interactive-neutral-weak,#0000);--wp-ui-button-background-color-active:var(--wpds-color-background-interactive-neutral-weak-active,#ededed);--wp-ui-button-background-color-disabled:var(--wpds-color-background-interactive-neutral-weak-disabled,#0000)}}.abbb272e2ce49bd6__is-unstyled{background:none;border:none;min-width:unset}.cf59cf1b69629838__is-compact{--wp-ui-button-height:var(--wpds-dimension-size-md,32px)}._914b42f315c0e580__is-loading:not(.abbb272e2ce49bd6__is-unstyled){color:transparent;&:not([data-disabled]):is(:hover,:active,:focus){color:transparent}@media (forced-colors:active){color:ButtonFace}>:not(._1322fe375ff021a3__spinner){opacity:0}}}@layer compositions{._1322fe375ff021a3__spinner{color:var(--wp-ui-button-foreground-color);height:var(--wp-ui-button-font-size);inset:0;margin:auto;pointer-events:none;position:absolute;width:var(--wp-ui-button-font-size);@media (prefers-reduced-motion){>*{animation:none}}@media (forced-colors:active){>*{stroke:ButtonText}}}}}");
		style_default$1 = {
			"button": "_97b0fc33c028be1a__button",
			"is-unstyled": "abbb272e2ce49bd6__is-unstyled",
			"is-loading": "_914b42f315c0e580__is-loading",
			"is-small": "_908205475f9f2a92__is-small",
			"icon": "_9f6fc6553aeb36fe__icon",
			"is-brand": "dd460c965226cc77__is-brand",
			"is-outline": "_62d5a778b7b258ee__is-outline",
			"is-minimal": "ad0619a3217c6a5b__is-minimal",
			"is-neutral": "e722a8f96726aa99__is-neutral",
			"is-solid": "b50b3358c5fb4d0b__is-solid",
			"is-compact": "cf59cf1b69629838__is-compact",
			"spinner": "_1322fe375ff021a3__spinner"
		};
		if (typeof process === "undefined" || false) registerStyle$1("10f3806643", "@layer wp-ui{@layer utilities, components, compositions, overrides;@layer utilities{._336cd3e4e743482f__box-sizing{box-sizing:border-box;*,:after,:before{box-sizing:inherit}}}}");
		resets_default = { "box-sizing": "_336cd3e4e743482f__box-sizing" };
		if (typeof process === "undefined" || false) registerStyle$1("7c3267f794", "@layer wp-ui{@layer utilities, components, compositions, overrides;@layer utilities{.af79fb116edb0dd7__outset-ring--focus:focus,.dfcfdc28396e5d98__outset-ring--focus-visible:focus-visible,.e5cd9ee879f6403a__outset-ring--focus-within:focus-within{--_gcd-a-outline:var(--wpds-border-width-focus,var(--wp-admin-border-width-focus,2px)) solid var(--focus-color,var(--wpds-color-stroke-focus,var(--wp-admin-theme-color,#3858e9)));--_gcd-div-outline:var(--wpds-border-width-focus,var(--wp-admin-border-width-focus,2px)) solid var(--focus-color,var(--wpds-color-stroke-focus,var(--wp-admin-theme-color,#3858e9)));outline:var(--wpds-border-width-focus,var(--wp-admin-border-width-focus,2px)) solid var(--focus-color,var(--wpds-color-stroke-focus,var(--wp-admin-theme-color,#3858e9)));outline-offset:var(--wpds-border-width-focus,var(--wp-admin-border-width-focus,2px))}._3c9f5ee9fc9c136d__outset-ring--focus-within-except-active:focus-within,.abc777e9713fa711__outset-ring--focus-except-active:focus{outline:none}._3c9f5ee9fc9c136d__outset-ring--focus-within-except-active:focus-within:not(:has(:active)),.abc777e9713fa711__outset-ring--focus-except-active:focus:not(:active){--_gcd-a-outline:var(--wpds-border-width-focus,var(--wp-admin-border-width-focus,2px)) solid var(--focus-color,var(--wpds-color-stroke-focus,var(--wp-admin-theme-color,#3858e9)));--_gcd-div-outline:var(--wpds-border-width-focus,var(--wp-admin-border-width-focus,2px)) solid var(--focus-color,var(--wpds-color-stroke-focus,var(--wp-admin-theme-color,#3858e9)));outline:var(--wpds-border-width-focus,var(--wp-admin-border-width-focus,2px)) solid var(--focus-color,var(--wpds-color-stroke-focus,var(--wp-admin-theme-color,#3858e9)));outline-offset:var(--wpds-border-width-focus,var(--wp-admin-border-width-focus,2px))}}}");
		focus_module_default = {
			"outset-ring--focus": "af79fb116edb0dd7__outset-ring--focus",
			"outset-ring--focus-visible": "dfcfdc28396e5d98__outset-ring--focus-visible",
			"outset-ring--focus-within": "e5cd9ee879f6403a__outset-ring--focus-within",
			"outset-ring--focus-except-active": "abc777e9713fa711__outset-ring--focus-except-active",
			"outset-ring--focus-within-except-active": "_3c9f5ee9fc9c136d__outset-ring--focus-within-except-active"
		};
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
		Button$1 = (0, import_react.forwardRef)(function UnforwardedButton({ tone = "brand", variant = "solid", size = "default", className, focusableWhenDisabled = true, disabled, loading, loadingAnnouncement = __("Loading"), children, ...props }, ref) {
			const mergedClassName = clsx(global_css_defense_default.button, resets_default["box-sizing"], focus_module_default["outset-ring--focus-except-active"], variant !== "unstyled" && style_default$1.button, style_default$1[`is-${tone}`], style_default$1[`is-${variant}`], style_default$1[`is-${size}`], loading && style_default$1["is-loading"], className);
			(0, import_react.useEffect)(() => {
				if (loading && loadingAnnouncement) speak(loadingAnnouncement);
			}, [loading, loadingAnnouncement]);
			return /* @__PURE__ */ (0, import_jsx_runtime$1.jsxs)(Button$2, {
				ref,
				className: mergedClassName,
				focusableWhenDisabled,
				disabled: disabled ?? loading,
				...props,
				children: [children, loading && variant !== "unstyled" && /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)(Spinner, { className: style_default$1.spinner })]
			});
		});
	})))();
}
//#endregion
//#region ../packages/ui/build-module/button/icon.mjs
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
var import_jsx_runtime, STYLE_HASH_ATTRIBUTE, style_default, ButtonIcon;
function init_icon() {
	return (init_icon = __esmMin((() => {
		init_clsx();
		init_react();
		init_icon$1();
		import_jsx_runtime = require_jsx_runtime();
		STYLE_HASH_ATTRIBUTE = "data-wp-hash";
		if (typeof process === "undefined" || false) registerStyle("7d9151d891", "@layer wp-ui{@layer utilities, components, compositions, overrides;@layer components{._97b0fc33c028be1a__button,.abbb272e2ce49bd6__is-unstyled{appearance:none;padding:0}._97b0fc33c028be1a__button{--wp-ui-button-font-weight:var(--wpds-typography-font-weight-emphasis,600);--wp-ui-button-background-color:var(--wpds-color-background-interactive-brand-strong,var(--wp-admin-theme-color,#3858e9));--wp-ui-button-background-color-active:var(--wpds-color-background-interactive-brand-strong-active,color-mix(in oklch,var(--wp-admin-theme-color,#3858e9) 93%,#000));--wp-ui-button-background-color-disabled:var(--wpds-color-background-interactive-brand-strong-disabled,#e6e6e6);--wp-ui-button-foreground-color:var(--wpds-color-foreground-interactive-brand-strong,#fff);--wp-ui-button-foreground-color-active:var(--wpds-color-foreground-interactive-brand-strong-active,#fff);--wp-ui-button-foreground-color-disabled:var(--wpds-color-foreground-interactive-brand-strong-disabled,#8d8d8d);--wp-ui-button-padding-block:var(--wpds-dimension-padding-xs,4px);--wp-ui-button-padding-inline:var(--wpds-dimension-padding-md,12px);--wp-ui-button-height:var(--wpds-dimension-size-lg,40px);--wp-ui-button-aspect-ratio:auto;--wp-ui-button-font-size:var(--wpds-typography-font-size-md,13px);--wp-ui-button-min-width:calc(4ch + var(--wp-ui-button-padding-inline)*2);--wp-ui-button-icon-margin:calc((var(--wpds-dimension-size-2xs, 16px) - var(--wpds-dimension-size-sm, 24px))/2);--wp-ui-button-border-color:var(--wp-ui-button-background-color);--wp-ui-button-border-color-active:var(--wp-ui-button-background-color-active);--wp-ui-button-border-color-disabled:var(--wp-ui-button-background-color-disabled);--_gcd-button-font-family:var(--wpds-typography-font-family-body,-apple-system,system-ui,\"Segoe UI\",\"Roboto\",\"Oxygen-Sans\",\"Ubuntu\",\"Cantarell\",\"Helvetica Neue\",sans-serif);--_gcd-button-font-size:var(--wp-ui-button-font-size);--_gcd-button-font-weight:var(--wp-ui-button-font-weight);align-items:center;aspect-ratio:var(--wp-ui-button-aspect-ratio);background-clip:border-box;background-color:var(--wp-ui-button-background-color);border-color:var(--wp-ui-button-border-color);border-radius:var(--wpds-border-radius-sm,2px);border-style:solid;border-width:1px;color:var(--wp-ui-button-foreground-color);display:inline-flex;font-family:var(--wpds-typography-font-family-body,-apple-system,system-ui,\"Segoe UI\",\"Roboto\",\"Oxygen-Sans\",\"Ubuntu\",\"Cantarell\",\"Helvetica Neue\",sans-serif);font-size:var(--wp-ui-button-font-size);font-weight:var(--wp-ui-button-font-weight);gap:var(--wpds-dimension-gap-sm,8px);justify-content:center;line-height:var(--wpds-typography-line-height-sm,20px);max-width:100%;min-height:var(--wp-ui-button-height);min-width:var(--wp-ui-button-min-width);overflow-wrap:anywhere;padding-block:var(--wp-ui-button-padding-block);padding-inline:var(--wp-ui-button-padding-inline);position:relative;text-align:center;text-decoration:none;&:not([data-disabled]){cursor:var(--wpds-cursor-control,pointer)}@media not (prefers-reduced-motion){transition:color .1s ease-out;*{transition:opacity .1s ease-out}}&[href]{cursor:pointer}[href]{color:inherit;text-decoration:inherit}&:not([data-disabled]):is(:hover,:active,:focus){background-color:var(--wp-ui-button-background-color-active);border-color:var(--wp-ui-button-border-color-active);color:var(--wp-ui-button-foreground-color-active)}&[data-disabled]:not(._914b42f315c0e580__is-loading){background-color:var(--wp-ui-button-background-color-disabled);border-color:var(--wp-ui-button-border-color-disabled);color:var(--wp-ui-button-foreground-color-disabled);@media (forced-colors:active){border-bottom-color:GrayText;border-left-color:GrayText;border-right-color:GrayText;border-top-color:GrayText;color:GrayText}}}._908205475f9f2a92__is-small{--wp-ui-button-padding-block:0px;--wp-ui-button-padding-inline:var(--wpds-dimension-padding-sm,8px);--wp-ui-button-height:var(--wpds-dimension-size-sm,24px)}._9f6fc6553aeb36fe__icon{margin:var(--wp-ui-button-icon-margin)}.dd460c965226cc77__is-brand{&._62d5a778b7b258ee__is-outline,&.ad0619a3217c6a5b__is-minimal{--wp-ui-button-foreground-color:var(--wpds-color-foreground-interactive-brand,var(--wp-admin-theme-color,#3858e9));--wp-ui-button-foreground-color-active:var(--wpds-color-foreground-interactive-brand-active,color-mix(in oklch,var(--wp-admin-theme-color,#3858e9) 52%,#000));--wp-ui-button-foreground-color-disabled:var(--wpds-color-foreground-interactive-brand-disabled,#8d8d8d)}&._62d5a778b7b258ee__is-outline{--wp-ui-button-background-color:var(--wpds-color-background-interactive-brand-weak,#0000);--wp-ui-button-background-color-active:var(--wpds-color-background-interactive-brand-weak-active,color-mix(in oklch,var(--wp-admin-theme-color,#3858e9) 12%,#fff));--wp-ui-button-background-color-disabled:var(--wpds-color-background-interactive-brand-weak-disabled,#0000);--wp-ui-button-border-color:var(--wpds-color-stroke-interactive-brand,var(--wp-admin-theme-color,#3858e9));--wp-ui-button-border-color-active:var(--wpds-color-stroke-interactive-brand-active,color-mix(in oklch,var(--wp-admin-theme-color,#3858e9) 85%,#000));--wp-ui-button-border-color-disabled:var(--wpds-color-stroke-interactive-brand-disabled,#dbdbdb)}&.ad0619a3217c6a5b__is-minimal{--wp-ui-button-background-color:var(--wpds-color-background-interactive-brand-weak,#0000);--wp-ui-button-background-color-active:var(--wpds-color-background-interactive-brand-weak-active,color-mix(in oklch,var(--wp-admin-theme-color,#3858e9) 12%,#fff));--wp-ui-button-background-color-disabled:var(--wpds-color-background-interactive-brand-weak-disabled,#0000)}}.e722a8f96726aa99__is-neutral{&.ad0619a3217c6a5b__is-minimal[aria-pressed=true],&.b50b3358c5fb4d0b__is-solid{--wp-ui-button-background-color:var(--wpds-color-background-interactive-neutral-strong,#2d2d2d);--wp-ui-button-background-color-active:var(--wpds-color-background-interactive-neutral-strong-active,#1e1e1e);--wp-ui-button-background-color-disabled:var(--wpds-color-background-interactive-neutral-strong-disabled,#e6e6e6);--wp-ui-button-foreground-color:var(--wpds-color-foreground-interactive-neutral-strong,#f0f0f0);--wp-ui-button-foreground-color-active:var(--wpds-color-foreground-interactive-neutral-strong-active,#f0f0f0);--wp-ui-button-foreground-color-disabled:var(--wpds-color-foreground-interactive-neutral-strong-disabled,#8d8d8d)}&._62d5a778b7b258ee__is-outline,&.ad0619a3217c6a5b__is-minimal:not([aria-pressed=true]){--wp-ui-button-foreground-color:var(--wpds-color-foreground-interactive-neutral,#1e1e1e);--wp-ui-button-foreground-color-active:var(--wpds-color-foreground-interactive-neutral-active,#1e1e1e);--wp-ui-button-foreground-color-disabled:var(--wpds-color-foreground-interactive-neutral-disabled,#8d8d8d)}&._62d5a778b7b258ee__is-outline{--wp-ui-button-background-color:var(--wpds-color-background-interactive-neutral-weak,#0000);--wp-ui-button-background-color-active:var(--wpds-color-background-interactive-neutral-weak-active,#ededed);--wp-ui-button-background-color-disabled:var(--wpds-color-background-interactive-neutral-weak-disabled,#0000);--wp-ui-button-border-color:var(--wpds-color-stroke-interactive-neutral,#8d8d8d);--wp-ui-button-border-color-active:var(--wpds-color-stroke-interactive-neutral-active,#6e6e6e);--wp-ui-button-border-color-disabled:var(--wpds-color-stroke-interactive-neutral-disabled,#dbdbdb)}&.ad0619a3217c6a5b__is-minimal:not([aria-pressed=true]){--wp-ui-button-background-color:var(--wpds-color-background-interactive-neutral-weak,#0000);--wp-ui-button-background-color-active:var(--wpds-color-background-interactive-neutral-weak-active,#ededed);--wp-ui-button-background-color-disabled:var(--wpds-color-background-interactive-neutral-weak-disabled,#0000)}}.abbb272e2ce49bd6__is-unstyled{background:none;border:none;min-width:unset}.cf59cf1b69629838__is-compact{--wp-ui-button-height:var(--wpds-dimension-size-md,32px)}._914b42f315c0e580__is-loading:not(.abbb272e2ce49bd6__is-unstyled){color:transparent;&:not([data-disabled]):is(:hover,:active,:focus){color:transparent}@media (forced-colors:active){color:ButtonFace}>:not(._1322fe375ff021a3__spinner){opacity:0}}}@layer compositions{._1322fe375ff021a3__spinner{color:var(--wp-ui-button-foreground-color);height:var(--wp-ui-button-font-size);inset:0;margin:auto;pointer-events:none;position:absolute;width:var(--wp-ui-button-font-size);@media (prefers-reduced-motion){>*{animation:none}}@media (forced-colors:active){>*{stroke:ButtonText}}}}}");
		style_default = {
			"button": "_97b0fc33c028be1a__button",
			"is-unstyled": "abbb272e2ce49bd6__is-unstyled",
			"is-loading": "_914b42f315c0e580__is-loading",
			"is-small": "_908205475f9f2a92__is-small",
			"icon": "_9f6fc6553aeb36fe__icon",
			"is-brand": "dd460c965226cc77__is-brand",
			"is-outline": "_62d5a778b7b258ee__is-outline",
			"is-minimal": "ad0619a3217c6a5b__is-minimal",
			"is-neutral": "e722a8f96726aa99__is-neutral",
			"is-solid": "b50b3358c5fb4d0b__is-solid",
			"is-compact": "cf59cf1b69629838__is-compact",
			"spinner": "_1322fe375ff021a3__spinner"
		};
		ButtonIcon = (0, import_react.forwardRef)(function UnforwardedButtonIcon({ className, icon, ...props }, ref) {
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
				ref,
				icon,
				className: clsx(style_default.icon, className),
				size: 24,
				...props
			});
		});
	})))();
}
//#endregion
//#region ../packages/ui/build-module/button/index.mjs
var Button;
function init_button$1() {
	return (init_button$1 = __esmMin((() => {
		init_button();
		init_icon();
		ButtonIcon.displayName = "Button.Icon";
		Button = Object.assign(Button$1, { 
		/**
		* An icon component specifically designed to work well when rendered inside
		* a `Button` component.
		*/
Icon: ButtonIcon });
	})))();
}
//#endregion
export { init_icon as i, init_button$1 as n, ButtonIcon as r, Button as t };
