import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C1RZKCc6.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { n as init_build_module, t as deprecated } from "./build-module-BWCORUbm.js";
import { a as init_clsx, i as clsx } from "./iframe-Dbjzp1_m.js";
import { l as init_values, u as isValueDefined } from "./hook-Qs2bSUH_.js";
import { c as ContextSystemProvider, l as init_context_system_provider, n as useContextSystem, o as init_context_connect, r as contextConnect, t as init_use_context_system } from "./use-context-system-DpkzZnKH.js";
import { n as init_component$4, t as component_default$4 } from "./component-CFOx0tK5.js";
//#region ../packages/components/build-module/elevation/hook.mjs
function getRuntime$6() {
	const globalScope = globalThis;
	if (globalScope.__wpStyleRuntime) return globalScope.__wpStyleRuntime;
	globalScope.__wpStyleRuntime = {
		documents: /* @__PURE__ */ new Map(),
		styles: /* @__PURE__ */ new Map(),
		injectedStyles: /* @__PURE__ */ new WeakMap()
	};
	if (typeof document !== "undefined") registerDocument$6(document);
	return globalScope.__wpStyleRuntime;
}
function documentContainsStyleHash$6(targetDocument, hash) {
	if (!targetDocument.head) return false;
	for (const style of targetDocument.head.querySelectorAll(`style[${STYLE_HASH_ATTRIBUTE$6}]`)) if (style.getAttribute(STYLE_HASH_ATTRIBUTE$6) === hash) return true;
	return false;
}
function injectStyle$6(targetDocument, hash, css) {
	if (!targetDocument.head) return;
	const runtime = getRuntime$6();
	let injectedStyles = runtime.injectedStyles.get(targetDocument);
	if (!injectedStyles) {
		injectedStyles = /* @__PURE__ */ new Set();
		runtime.injectedStyles.set(targetDocument, injectedStyles);
	}
	if (injectedStyles.has(hash)) return;
	if (documentContainsStyleHash$6(targetDocument, hash)) {
		injectedStyles.add(hash);
		return;
	}
	const style = targetDocument.createElement("style");
	style.setAttribute(STYLE_HASH_ATTRIBUTE$6, hash);
	style.appendChild(targetDocument.createTextNode(css));
	targetDocument.head.appendChild(style);
	injectedStyles.add(hash);
}
function registerDocument$6(targetDocument) {
	const runtime = getRuntime$6();
	runtime.documents.set(targetDocument, (runtime.documents.get(targetDocument) ?? 0) + 1);
	for (const [hash, css] of runtime.styles) injectStyle$6(targetDocument, hash, css);
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
function registerStyle$6(hash, css) {
	const runtime = getRuntime$6();
	runtime.styles.set(hash, css);
	for (const targetDocument of runtime.documents.keys()) injectStyle$6(targetDocument, hash, css);
}
function getBoxShadow(value) {
	const boxShadowColor = `rgba(0, 0, 0, ${value / 20})`;
	return `0 ${value}px ${value * 2}px 0
	${boxShadowColor}`;
}
function hasValidShadow(value) {
	return isValueDefined(value) && Number.isFinite(value) && value >= 0;
}
function useElevation(props) {
	const { active, borderRadius = "inherit", className, focus, hover, isInteractive = false, offset = 0, style, value = 0, ...otherProps } = useContextSystem(props, "Elevation");
	const hoverValue = hover ?? (isInteractive ? value * 2 : void 0);
	const activeValue = active ?? (isInteractive ? value / 2 : void 0);
	const radiusValue = typeof borderRadius === "number" ? `${borderRadius}px` : borderRadius;
	const radiusKeyword = typeof borderRadius === "string" && BORDER_RADIUS_KEYWORDS.has(borderRadius.trim().toLowerCase()) ? borderRadius.trim().toLowerCase() : void 0;
	const elevationStyle = {
		"--wp-components-elevation-border-radius": radiusKeyword ? void 0 : radiusValue,
		"--wp-components-elevation-offset": `${offset}px`,
		"--wp-components-elevation-shadow": hasValidShadow(value) ? getBoxShadow(value) : void 0,
		"--wp-components-elevation-hover-shadow": hasValidShadow(hoverValue) ? getBoxShadow(hoverValue) : void 0,
		"--wp-components-elevation-focus-shadow": hasValidShadow(focus) ? getBoxShadow(focus) : void 0,
		"--wp-components-elevation-active-shadow": hasValidShadow(activeValue) ? getBoxShadow(activeValue) : void 0,
		...style
	};
	return {
		...otherProps,
		className: clsx(style_module_default$6.elevation, {
			[style_module_default$6["has-shadow"]]: hasValidShadow(value),
			[style_module_default$6["has-hover"]]: hasValidShadow(hoverValue),
			[style_module_default$6["has-focus"]]: hasValidShadow(focus),
			[style_module_default$6["has-active"]]: hasValidShadow(activeValue)
		}, radiusKeyword && style_module_default$6[`border-radius-${radiusKeyword}`], className),
		style: elevationStyle,
		"aria-hidden": true
	};
}
var STYLE_HASH_ATTRIBUTE$6, style_module_default$6, BORDER_RADIUS_KEYWORDS;
function init_hook() {
	return (init_hook = __esmMin((() => {
		init_clsx();
		init_use_context_system();
		init_values();
		STYLE_HASH_ATTRIBUTE$6 = "data-wp-hash";
		if (typeof process === "undefined" || false) registerStyle$6("14f3fdb673", ".b9b8496e1cc381ae__elevation{--wp-components-elevation-border-radius:initial;background:transparent;border-radius:var(--wp-components-elevation-border-radius);display:block;inset:var(--wp-components-elevation-offset);margin:0!important;opacity:1;pointer-events:none;position:absolute;will-change:box-shadow}@media not (prefers-reduced-motion){.b9b8496e1cc381ae__elevation{transition:box-shadow .2s cubic-bezier(.08,.52,.52,1)}}._866e70312757c6a4__has-shadow{box-shadow:var(--wp-components-elevation-shadow)}.f52248b961a3f08d__border-radius-inherit{border-radius:inherit}._0eeaf64d5d7d940c__border-radius-initial{border-radius:initial}.bdb0f4b23c5a3070__border-radius-unset{border-radius:unset}._00f4e8c5b11279d9__border-radius-revert{border-radius:revert}.a9934763e709422a__border-radius-revert-layer{border-radius:revert-layer}:hover>.b45293cc9a89397d__has-hover{box-shadow:var(--wp-components-elevation-hover-shadow)}:focus>._4b23488fcec539f9__has-focus{box-shadow:var(--wp-components-elevation-focus-shadow)}:active>.feda92b96016571c__has-active{box-shadow:var(--wp-components-elevation-active-shadow)}");
		style_module_default$6 = {
			"elevation": "b9b8496e1cc381ae__elevation",
			"has-shadow": "_866e70312757c6a4__has-shadow",
			"border-radius-inherit": "f52248b961a3f08d__border-radius-inherit",
			"border-radius-initial": "_0eeaf64d5d7d940c__border-radius-initial",
			"border-radius-unset": "bdb0f4b23c5a3070__border-radius-unset",
			"border-radius-revert": "_00f4e8c5b11279d9__border-radius-revert",
			"border-radius-revert-layer": "a9934763e709422a__border-radius-revert-layer",
			"has-hover": "b45293cc9a89397d__has-hover",
			"has-focus": "_4b23488fcec539f9__has-focus",
			"has-active": "feda92b96016571c__has-active"
		};
		BORDER_RADIUS_KEYWORDS = /* @__PURE__ */ new Set([
			"inherit",
			"initial",
			"unset",
			"revert",
			"revert-layer"
		]);
	})))();
}
//#endregion
//#region ../packages/components/build-module/elevation/component.mjs
function UnconnectedElevation(props, forwardedRef) {
	const elevationProps = useElevation(props);
	return /* @__PURE__ */ (0, import_jsx_runtime$3.jsx)(component_default$4, {
		...elevationProps,
		ref: forwardedRef
	});
}
var import_jsx_runtime$3, Elevation, component_default$3;
function init_component() {
	return (init_component = __esmMin((() => {
		init_context_connect();
		init_component$4();
		init_hook();
		import_jsx_runtime$3 = require_jsx_runtime();
		Elevation = contextConnect(UnconnectedElevation, "Elevation");
		component_default$3 = Elevation;
	})))();
}
//#endregion
//#region ../packages/components/build-module/surface/hook.mjs
function getRuntime$5() {
	const globalScope = globalThis;
	if (globalScope.__wpStyleRuntime) return globalScope.__wpStyleRuntime;
	globalScope.__wpStyleRuntime = {
		documents: /* @__PURE__ */ new Map(),
		styles: /* @__PURE__ */ new Map(),
		injectedStyles: /* @__PURE__ */ new WeakMap()
	};
	if (typeof document !== "undefined") registerDocument$5(document);
	return globalScope.__wpStyleRuntime;
}
function documentContainsStyleHash$5(targetDocument, hash) {
	if (!targetDocument.head) return false;
	for (const style of targetDocument.head.querySelectorAll(`style[${STYLE_HASH_ATTRIBUTE$5}]`)) if (style.getAttribute(STYLE_HASH_ATTRIBUTE$5) === hash) return true;
	return false;
}
function injectStyle$5(targetDocument, hash, css) {
	if (!targetDocument.head) return;
	const runtime = getRuntime$5();
	let injectedStyles = runtime.injectedStyles.get(targetDocument);
	if (!injectedStyles) {
		injectedStyles = /* @__PURE__ */ new Set();
		runtime.injectedStyles.set(targetDocument, injectedStyles);
	}
	if (injectedStyles.has(hash)) return;
	if (documentContainsStyleHash$5(targetDocument, hash)) {
		injectedStyles.add(hash);
		return;
	}
	const style = targetDocument.createElement("style");
	style.setAttribute(STYLE_HASH_ATTRIBUTE$5, hash);
	style.appendChild(targetDocument.createTextNode(css));
	targetDocument.head.appendChild(style);
	injectedStyles.add(hash);
}
function registerDocument$5(targetDocument) {
	const runtime = getRuntime$5();
	runtime.documents.set(targetDocument, (runtime.documents.get(targetDocument) ?? 0) + 1);
	for (const [hash, css] of runtime.styles) injectStyle$5(targetDocument, hash, css);
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
function registerStyle$5(hash, css) {
	const runtime = getRuntime$5();
	runtime.styles.set(hash, css);
	for (const targetDocument of runtime.documents.keys()) injectStyle$5(targetDocument, hash, css);
}
function useSurface(props) {
	const { backgroundSize = 12, borderBottom = false, borderLeft = false, borderRight = false, borderTop = false, className, style, variant = "primary", ...otherProps } = useContextSystem(props, "Surface");
	const surfaceStyle = variant === "dotted" || variant === "grid" ? {
		...style,
		"--wp-components-surface-background-size": `${backgroundSize}px`,
		"--wp-components-surface-background-size-dotted": `${backgroundSize - 1}px`
	} : style;
	return {
		...otherProps,
		className: clsx(style_module_default$5.surface, {
			[style_module_default$5["border-bottom"]]: borderBottom,
			[style_module_default$5["border-left"]]: borderLeft,
			[style_module_default$5["border-right"]]: borderRight,
			[style_module_default$5["border-top"]]: borderTop,
			[style_module_default$5.secondary]: variant === "secondary",
			[style_module_default$5.dotted]: variant === "dotted",
			[style_module_default$5.grid]: variant === "grid"
		}, className),
		style: surfaceStyle
	};
}
var STYLE_HASH_ATTRIBUTE$5, style_module_default$5;
function init_hook$1() {
	return (init_hook$1 = __esmMin((() => {
		init_clsx();
		init_use_context_system();
		STYLE_HASH_ATTRIBUTE$5 = "data-wp-hash";
		if (typeof process === "undefined" || false) registerStyle$5("afa72ffb80", "._074d7c69bf27b61f__surface{background-color:var(--wpds-color-background-surface-neutral-strong,#fff);color:var(--wpds-color-foreground-content-neutral,#1e1e1e);position:relative}.c8e7f206d344f0be__border-bottom{border-bottom:var(--wpds-border-width-xs,1px) solid var(--wpds-color-stroke-surface-neutral,#dbdbdb)}._64aa30939d5e500b__border-left{border-left:var(--wpds-border-width-xs,1px) solid var(--wpds-color-stroke-surface-neutral,#dbdbdb)}._543f465ff38d9d77__border-right{border-right:var(--wpds-border-width-xs,1px) solid var(--wpds-color-stroke-surface-neutral,#dbdbdb)}._8aca9849530b97b1__border-top{border-top:var(--wpds-border-width-xs,1px) solid var(--wpds-color-stroke-surface-neutral,#dbdbdb)}._67628eb2296cfec7__secondary{background:var(--wpds-color-background-surface-neutral-weak,#f4f4f4)}._0efc0a4250262223__dotted{background:linear-gradient(90deg,var(--wpds-color-background-surface-neutral-strong,#fff) var(--wp-components-surface-background-size-dotted),transparent 1%) 50%,linear-gradient(var(--wpds-color-background-surface-neutral-strong,#fff) var(--wp-components-surface-background-size-dotted),transparent 1%) 50%,var(--wpds-color-stroke-surface-neutral,#dbdbdb);background-size:var(--wp-components-surface-background-size) var(--wp-components-surface-background-size)}._5e99093161bb409c__grid{background:var(--wpds-color-background-surface-neutral-strong,#fff);background-image:linear-gradient(var(--wpds-color-stroke-surface-neutral-weak,#f0f0f0) var(--wpds-border-width-xs,1px),transparent var(--wpds-border-width-xs,1px)),linear-gradient(90deg,var(--wpds-color-stroke-surface-neutral-weak,#f0f0f0) var(--wpds-border-width-xs,1px),transparent var(--wpds-border-width-xs,1px));background-size:var(--wp-components-surface-background-size) var(--wp-components-surface-background-size)}");
		style_module_default$5 = {
			"surface": "_074d7c69bf27b61f__surface",
			"border-bottom": "c8e7f206d344f0be__border-bottom",
			"border-left": "_64aa30939d5e500b__border-left",
			"border-right": "_543f465ff38d9d77__border-right",
			"border-top": "_8aca9849530b97b1__border-top",
			"secondary": "_67628eb2296cfec7__secondary",
			"dotted": "_0efc0a4250262223__dotted",
			"grid": "_5e99093161bb409c__grid"
		};
	})))();
}
//#endregion
//#region ../packages/components/build-module/card/card/hook.mjs
function getRuntime$4() {
	const globalScope = globalThis;
	if (globalScope.__wpStyleRuntime) return globalScope.__wpStyleRuntime;
	globalScope.__wpStyleRuntime = {
		documents: /* @__PURE__ */ new Map(),
		styles: /* @__PURE__ */ new Map(),
		injectedStyles: /* @__PURE__ */ new WeakMap()
	};
	if (typeof document !== "undefined") registerDocument$4(document);
	return globalScope.__wpStyleRuntime;
}
function documentContainsStyleHash$4(targetDocument, hash) {
	if (!targetDocument.head) return false;
	for (const style of targetDocument.head.querySelectorAll(`style[${STYLE_HASH_ATTRIBUTE$4}]`)) if (style.getAttribute(STYLE_HASH_ATTRIBUTE$4) === hash) return true;
	return false;
}
function injectStyle$4(targetDocument, hash, css) {
	if (!targetDocument.head) return;
	const runtime = getRuntime$4();
	let injectedStyles = runtime.injectedStyles.get(targetDocument);
	if (!injectedStyles) {
		injectedStyles = /* @__PURE__ */ new Set();
		runtime.injectedStyles.set(targetDocument, injectedStyles);
	}
	if (injectedStyles.has(hash)) return;
	if (documentContainsStyleHash$4(targetDocument, hash)) {
		injectedStyles.add(hash);
		return;
	}
	const style = targetDocument.createElement("style");
	style.setAttribute(STYLE_HASH_ATTRIBUTE$4, hash);
	style.appendChild(targetDocument.createTextNode(css));
	targetDocument.head.appendChild(style);
	injectedStyles.add(hash);
}
function registerDocument$4(targetDocument) {
	const runtime = getRuntime$4();
	runtime.documents.set(targetDocument, (runtime.documents.get(targetDocument) ?? 0) + 1);
	for (const [hash, css] of runtime.styles) injectStyle$4(targetDocument, hash, css);
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
function registerStyle$4(hash, css) {
	const runtime = getRuntime$4();
	runtime.styles.set(hash, css);
	for (const targetDocument of runtime.documents.keys()) injectStyle$4(targetDocument, hash, css);
}
function useDeprecatedProps({ elevation, isElevated, ...otherProps }) {
	const propsToReturn = { ...otherProps };
	let computedElevation = elevation;
	if (isElevated) {
		deprecated("Card isElevated prop", {
			since: "5.9",
			alternative: "elevation"
		});
		computedElevation ??= 2;
	}
	if (typeof computedElevation !== "undefined") propsToReturn.elevation = computedElevation;
	return propsToReturn;
}
function useCard(props) {
	const { className, elevation = 0, isBorderless = false, isRounded = true, size = "medium", ...otherProps } = useContextSystem(useDeprecatedProps(props), "Card");
	const classes = clsx(style_module_default$4.card, {
		[style_module_default$4["card-borderless"]]: isBorderless,
		[style_module_default$4["is-rounded"]]: isRounded
	}, className);
	return {
		...useSurface({
			...otherProps,
			className: classes
		}),
		elevation,
		isBorderless,
		isRounded,
		size
	};
}
var STYLE_HASH_ATTRIBUTE$4, style_module_default$4;
function init_hook$2() {
	return (init_hook$2 = __esmMin((() => {
		init_clsx();
		init_build_module();
		init_use_context_system();
		init_hook$1();
		STYLE_HASH_ATTRIBUTE$4 = "data-wp-hash";
		if (typeof process === "undefined" || false) registerStyle$4("6887c7204a", "._1f8f297a785aa85b__card{box-shadow:0 0 0 1px rgba(0,0,0,.1);outline:none}._71ea7b63437942f4__card-borderless{box-shadow:none}.f9cb209f41f97de5__is-rounded{border-radius:7px}._2c3ea1cc39aa466b__content{height:100%}.a163cc13448ec37b__header{border-bottom:1px solid;border-color:rgba(0,0,0,.1);box-sizing:border-box}.a163cc13448ec37b__header:last-child{border-bottom:none}._6d8a4e86235af025__footer{border-color:rgba(0,0,0,.1);border-top:1px solid rgba(0,0,0,.1);box-sizing:border-box}._6d8a4e86235af025__footer:first-of-type{border-top:none}._2c496ecb725fa830__body{box-sizing:border-box;height:auto;max-height:100%}._1842860e9ac3900d__is-scrollable{height:100%}._7f74eb97e030abe0__media{box-sizing:border-box;overflow:hidden}._7f74eb97e030abe0__media>iframe,._7f74eb97e030abe0__media>img{display:block;height:auto;max-width:100%;width:100%}._2c496ecb725fa830__body:first-of-type,._6d8a4e86235af025__footer:first-of-type,._7f74eb97e030abe0__media:first-of-type,.a163cc13448ec37b__header:first-of-type{border-start-end-radius:7px;border-start-start-radius:7px}._2c496ecb725fa830__body:last-of-type,._6d8a4e86235af025__footer:last-of-type,._7f74eb97e030abe0__media:last-of-type,.a163cc13448ec37b__header:last-of-type{border-end-end-radius:7px;border-end-start-radius:7px}._5ad567f5f149b643__divider._5ad567f5f149b643__divider{border-color:rgba(0,0,0,.1);box-sizing:border-box;display:block;width:100%}._0d801e4b12c3cb1b__section-borderless{border:none}.c370e86e990f2dc2__is-shady{background-color:var(--wp-components-color-gray-100,var(--wpds-color-background-surface-neutral,#fcfcfc))}._95f2d955ae3aaac4__padding-none{padding:0}._2bc04be6468c1c6d__padding-x-small{padding:8px}.fdc0a0a467bbca85__padding-small{padding:16px}._12570b225c4cd6ec__padding-medium{padding:16px 24px}._075659124a9abb5f__padding-large{padding:24px 32px}.d8812272c7a304a3__padding-block-start-none{padding-block-start:0}.efd63867a65e05a7__padding-block-start-x-small{padding-block-start:8px}.ef2508c8be53c97e__padding-block-start-small{padding-block-start:16px}.f29b1299cd472cc9__padding-block-start-medium{padding-block-start:24px}._6a3ebf7d3732526f__padding-block-start-large{padding-block-start:32px}._7a4b87bc1d142ae5__padding-block-end-none{padding-block-end:0}._285cc8fab823a2c7__padding-block-end-x-small{padding-block-end:8px}.c3a11e6149d1a95c__padding-block-end-small{padding-block-end:16px}._68eba70cd7ed414d__padding-block-end-medium{padding-block-end:24px}.d72d7c8dc8693681__padding-block-end-large{padding-block-end:32px}._68b5a70e62405288__padding-inline-start-none{padding-inline-start:0}._025f392546cc73c7__padding-inline-start-x-small{padding-inline-start:8px}.ccf1152dff869995__padding-inline-start-small{padding-inline-start:16px}._39ccbfbfdb5e22e3__padding-inline-start-medium{padding-inline-start:24px}._90cb7918813a4978__padding-inline-start-large{padding-inline-start:32px}.edcf7cc049ceb9b6__padding-inline-end-none{padding-inline-end:0}.f90997164f9d8a7f__padding-inline-end-x-small{padding-inline-end:8px}._16ed8ad9ac107b57__padding-inline-end-small{padding-inline-end:16px}._7cec3cd0bb5d49e0__padding-inline-end-medium{padding-inline-end:24px}._680b1c384e1da206__padding-inline-end-large{padding-inline-end:32px}");
		style_module_default$4 = {
			"card": "_1f8f297a785aa85b__card",
			"card-borderless": "_71ea7b63437942f4__card-borderless",
			"is-rounded": "f9cb209f41f97de5__is-rounded",
			"content": "_2c3ea1cc39aa466b__content",
			"header": "a163cc13448ec37b__header",
			"footer": "_6d8a4e86235af025__footer",
			"body": "_2c496ecb725fa830__body",
			"is-scrollable": "_1842860e9ac3900d__is-scrollable",
			"media": "_7f74eb97e030abe0__media",
			"divider": "_5ad567f5f149b643__divider",
			"section-borderless": "_0d801e4b12c3cb1b__section-borderless",
			"is-shady": "c370e86e990f2dc2__is-shady",
			"padding-none": "_95f2d955ae3aaac4__padding-none",
			"padding-x-small": "_2bc04be6468c1c6d__padding-x-small",
			"padding-small": "fdc0a0a467bbca85__padding-small",
			"padding-medium": "_12570b225c4cd6ec__padding-medium",
			"padding-large": "_075659124a9abb5f__padding-large",
			"padding-block-start-none": "d8812272c7a304a3__padding-block-start-none",
			"padding-block-start-x-small": "efd63867a65e05a7__padding-block-start-x-small",
			"padding-block-start-small": "ef2508c8be53c97e__padding-block-start-small",
			"padding-block-start-medium": "f29b1299cd472cc9__padding-block-start-medium",
			"padding-block-start-large": "_6a3ebf7d3732526f__padding-block-start-large",
			"padding-block-end-none": "_7a4b87bc1d142ae5__padding-block-end-none",
			"padding-block-end-x-small": "_285cc8fab823a2c7__padding-block-end-x-small",
			"padding-block-end-small": "c3a11e6149d1a95c__padding-block-end-small",
			"padding-block-end-medium": "_68eba70cd7ed414d__padding-block-end-medium",
			"padding-block-end-large": "d72d7c8dc8693681__padding-block-end-large",
			"padding-inline-start-none": "_68b5a70e62405288__padding-inline-start-none",
			"padding-inline-start-x-small": "_025f392546cc73c7__padding-inline-start-x-small",
			"padding-inline-start-small": "ccf1152dff869995__padding-inline-start-small",
			"padding-inline-start-medium": "_39ccbfbfdb5e22e3__padding-inline-start-medium",
			"padding-inline-start-large": "_90cb7918813a4978__padding-inline-start-large",
			"padding-inline-end-none": "edcf7cc049ceb9b6__padding-inline-end-none",
			"padding-inline-end-x-small": "f90997164f9d8a7f__padding-inline-end-x-small",
			"padding-inline-end-small": "_16ed8ad9ac107b57__padding-inline-end-small",
			"padding-inline-end-medium": "_7cec3cd0bb5d49e0__padding-inline-end-medium",
			"padding-inline-end-large": "_680b1c384e1da206__padding-inline-end-large"
		};
	})))();
}
//#endregion
//#region ../packages/components/build-module/card/card/component.mjs
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
function UnconnectedCard(props, forwardedRef) {
	const { children, elevation, isBorderless, isRounded, size, ...otherProps } = useCard(props);
	const contextProviderValue = (0, import_react.useMemo)(() => {
		const contextProps = {
			size,
			isBorderless
		};
		return {
			CardBody: contextProps,
			CardHeader: contextProps,
			CardFooter: contextProps
		};
	}, [isBorderless, size]);
	return /* @__PURE__ */ (0, import_jsx_runtime$2.jsx)(ContextSystemProvider, {
		value: contextProviderValue,
		children: /* @__PURE__ */ (0, import_jsx_runtime$2.jsxs)(component_default$4, {
			...otherProps,
			ref: forwardedRef,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime$2.jsx)(component_default$4, {
					className: style_module_default$3.content,
					children
				}),
				/* @__PURE__ */ (0, import_jsx_runtime$2.jsx)(component_default$3, {
					isInteractive: false,
					value: elevation ? 1 : 0
				}),
				/* @__PURE__ */ (0, import_jsx_runtime$2.jsx)(component_default$3, {
					isInteractive: false,
					value: elevation
				})
			]
		})
	});
}
var import_jsx_runtime$2, STYLE_HASH_ATTRIBUTE$3, style_module_default$3, Card, component_default$2;
function init_component$1() {
	return (init_component$1 = __esmMin((() => {
		init_react();
		init_context_connect(), init_context_system_provider();
		init_component();
		init_component$4();
		init_hook$2();
		import_jsx_runtime$2 = require_jsx_runtime();
		STYLE_HASH_ATTRIBUTE$3 = "data-wp-hash";
		if (typeof process === "undefined" || false) registerStyle$3("6887c7204a", "._1f8f297a785aa85b__card{box-shadow:0 0 0 1px rgba(0,0,0,.1);outline:none}._71ea7b63437942f4__card-borderless{box-shadow:none}.f9cb209f41f97de5__is-rounded{border-radius:7px}._2c3ea1cc39aa466b__content{height:100%}.a163cc13448ec37b__header{border-bottom:1px solid;border-color:rgba(0,0,0,.1);box-sizing:border-box}.a163cc13448ec37b__header:last-child{border-bottom:none}._6d8a4e86235af025__footer{border-color:rgba(0,0,0,.1);border-top:1px solid rgba(0,0,0,.1);box-sizing:border-box}._6d8a4e86235af025__footer:first-of-type{border-top:none}._2c496ecb725fa830__body{box-sizing:border-box;height:auto;max-height:100%}._1842860e9ac3900d__is-scrollable{height:100%}._7f74eb97e030abe0__media{box-sizing:border-box;overflow:hidden}._7f74eb97e030abe0__media>iframe,._7f74eb97e030abe0__media>img{display:block;height:auto;max-width:100%;width:100%}._2c496ecb725fa830__body:first-of-type,._6d8a4e86235af025__footer:first-of-type,._7f74eb97e030abe0__media:first-of-type,.a163cc13448ec37b__header:first-of-type{border-start-end-radius:7px;border-start-start-radius:7px}._2c496ecb725fa830__body:last-of-type,._6d8a4e86235af025__footer:last-of-type,._7f74eb97e030abe0__media:last-of-type,.a163cc13448ec37b__header:last-of-type{border-end-end-radius:7px;border-end-start-radius:7px}._5ad567f5f149b643__divider._5ad567f5f149b643__divider{border-color:rgba(0,0,0,.1);box-sizing:border-box;display:block;width:100%}._0d801e4b12c3cb1b__section-borderless{border:none}.c370e86e990f2dc2__is-shady{background-color:var(--wp-components-color-gray-100,var(--wpds-color-background-surface-neutral,#fcfcfc))}._95f2d955ae3aaac4__padding-none{padding:0}._2bc04be6468c1c6d__padding-x-small{padding:8px}.fdc0a0a467bbca85__padding-small{padding:16px}._12570b225c4cd6ec__padding-medium{padding:16px 24px}._075659124a9abb5f__padding-large{padding:24px 32px}.d8812272c7a304a3__padding-block-start-none{padding-block-start:0}.efd63867a65e05a7__padding-block-start-x-small{padding-block-start:8px}.ef2508c8be53c97e__padding-block-start-small{padding-block-start:16px}.f29b1299cd472cc9__padding-block-start-medium{padding-block-start:24px}._6a3ebf7d3732526f__padding-block-start-large{padding-block-start:32px}._7a4b87bc1d142ae5__padding-block-end-none{padding-block-end:0}._285cc8fab823a2c7__padding-block-end-x-small{padding-block-end:8px}.c3a11e6149d1a95c__padding-block-end-small{padding-block-end:16px}._68eba70cd7ed414d__padding-block-end-medium{padding-block-end:24px}.d72d7c8dc8693681__padding-block-end-large{padding-block-end:32px}._68b5a70e62405288__padding-inline-start-none{padding-inline-start:0}._025f392546cc73c7__padding-inline-start-x-small{padding-inline-start:8px}.ccf1152dff869995__padding-inline-start-small{padding-inline-start:16px}._39ccbfbfdb5e22e3__padding-inline-start-medium{padding-inline-start:24px}._90cb7918813a4978__padding-inline-start-large{padding-inline-start:32px}.edcf7cc049ceb9b6__padding-inline-end-none{padding-inline-end:0}.f90997164f9d8a7f__padding-inline-end-x-small{padding-inline-end:8px}._16ed8ad9ac107b57__padding-inline-end-small{padding-inline-end:16px}._7cec3cd0bb5d49e0__padding-inline-end-medium{padding-inline-end:24px}._680b1c384e1da206__padding-inline-end-large{padding-inline-end:32px}");
		style_module_default$3 = {
			"card": "_1f8f297a785aa85b__card",
			"card-borderless": "_71ea7b63437942f4__card-borderless",
			"is-rounded": "f9cb209f41f97de5__is-rounded",
			"content": "_2c3ea1cc39aa466b__content",
			"header": "a163cc13448ec37b__header",
			"footer": "_6d8a4e86235af025__footer",
			"body": "_2c496ecb725fa830__body",
			"is-scrollable": "_1842860e9ac3900d__is-scrollable",
			"media": "_7f74eb97e030abe0__media",
			"divider": "_5ad567f5f149b643__divider",
			"section-borderless": "_0d801e4b12c3cb1b__section-borderless",
			"is-shady": "c370e86e990f2dc2__is-shady",
			"padding-none": "_95f2d955ae3aaac4__padding-none",
			"padding-x-small": "_2bc04be6468c1c6d__padding-x-small",
			"padding-small": "fdc0a0a467bbca85__padding-small",
			"padding-medium": "_12570b225c4cd6ec__padding-medium",
			"padding-large": "_075659124a9abb5f__padding-large",
			"padding-block-start-none": "d8812272c7a304a3__padding-block-start-none",
			"padding-block-start-x-small": "efd63867a65e05a7__padding-block-start-x-small",
			"padding-block-start-small": "ef2508c8be53c97e__padding-block-start-small",
			"padding-block-start-medium": "f29b1299cd472cc9__padding-block-start-medium",
			"padding-block-start-large": "_6a3ebf7d3732526f__padding-block-start-large",
			"padding-block-end-none": "_7a4b87bc1d142ae5__padding-block-end-none",
			"padding-block-end-x-small": "_285cc8fab823a2c7__padding-block-end-x-small",
			"padding-block-end-small": "c3a11e6149d1a95c__padding-block-end-small",
			"padding-block-end-medium": "_68eba70cd7ed414d__padding-block-end-medium",
			"padding-block-end-large": "d72d7c8dc8693681__padding-block-end-large",
			"padding-inline-start-none": "_68b5a70e62405288__padding-inline-start-none",
			"padding-inline-start-x-small": "_025f392546cc73c7__padding-inline-start-x-small",
			"padding-inline-start-small": "ccf1152dff869995__padding-inline-start-small",
			"padding-inline-start-medium": "_39ccbfbfdb5e22e3__padding-inline-start-medium",
			"padding-inline-start-large": "_90cb7918813a4978__padding-inline-start-large",
			"padding-inline-end-none": "edcf7cc049ceb9b6__padding-inline-end-none",
			"padding-inline-end-x-small": "f90997164f9d8a7f__padding-inline-end-x-small",
			"padding-inline-end-small": "_16ed8ad9ac107b57__padding-inline-end-small",
			"padding-inline-end-medium": "_7cec3cd0bb5d49e0__padding-inline-end-medium",
			"padding-inline-end-large": "_680b1c384e1da206__padding-inline-end-large"
		};
		Card = contextConnect(UnconnectedCard, "Card");
		component_default$2 = Card;
	})))();
}
//#endregion
//#region ../packages/components/build-module/scrollable/hook.mjs
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
function useScrollable(props) {
	const { className, scrollDirection = "y", smoothScroll = false, ...otherProps } = useContextSystem(props, "Scrollable");
	const classes = clsx(style_module_default$2.scrollable, {
		[style_module_default$2["smooth-scroll"]]: smoothScroll,
		[style_module_default$2["scroll-x"]]: scrollDirection === "x",
		[style_module_default$2["scroll-y"]]: scrollDirection === "y",
		[style_module_default$2["scroll-auto"]]: scrollDirection === "auto"
	}, className);
	return {
		...otherProps,
		className: classes
	};
}
var STYLE_HASH_ATTRIBUTE$2, style_module_default$2;
function init_hook$3() {
	return (init_hook$3 = __esmMin((() => {
		init_clsx();
		init_use_context_system();
		STYLE_HASH_ATTRIBUTE$2 = "data-wp-hash";
		if (typeof process === "undefined" || false) registerStyle$2("667cbbe993", ".c8c574e84747ff1d__scrollable{height:100%}@media only screen and (min-device-width:40em){.c8c574e84747ff1d__scrollable::-webkit-scrollbar{height:12px;width:12px}.c8c574e84747ff1d__scrollable::-webkit-scrollbar-track{background:rgba(0,0,0,.04);border-radius:8px}.c8c574e84747ff1d__scrollable::-webkit-scrollbar-thumb{background-clip:padding-box;background-color:rgba(0,0,0,.2);border:2px solid transparent;border-radius:7px}.c8c574e84747ff1d__scrollable:hover::-webkit-scrollbar-thumb{background-color:rgba(0,0,0,.5)}}._266d253504ce997a__smooth-scroll{scroll-behavior:smooth}.e000fb9481918254__scroll-x{overflow-x:auto;overflow-y:hidden}._71594f0091995597__scroll-y{overflow-x:hidden;overflow-y:auto}.f5191978d7129fe7__scroll-auto{overflow-y:auto}");
		style_module_default$2 = {
			"scrollable": "c8c574e84747ff1d__scrollable",
			"smooth-scroll": "_266d253504ce997a__smooth-scroll",
			"scroll-x": "e000fb9481918254__scroll-x",
			"scroll-y": "_71594f0091995597__scroll-y",
			"scroll-auto": "f5191978d7129fe7__scroll-auto"
		};
	})))();
}
//#endregion
//#region ../packages/components/build-module/scrollable/component.mjs
function UnconnectedScrollable(props, forwardedRef) {
	const scrollableProps = useScrollable(props);
	return /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)(component_default$4, {
		...scrollableProps,
		ref: forwardedRef
	});
}
var import_jsx_runtime$1, Scrollable, component_default$1;
function init_component$2() {
	return (init_component$2 = __esmMin((() => {
		init_context_connect();
		init_component$4();
		init_hook$3();
		import_jsx_runtime$1 = require_jsx_runtime();
		Scrollable = contextConnect(UnconnectedScrollable, "Scrollable");
		component_default$1 = Scrollable;
	})))();
}
//#endregion
//#region ../packages/components/build-module/card/get-padding-by-size.mjs
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
var STYLE_HASH_ATTRIBUTE$1, style_module_default$1, paddingSizes, getSinglePaddingClass, getPaddingBySize;
function init_get_padding_by_size() {
	return (init_get_padding_by_size = __esmMin((() => {
		STYLE_HASH_ATTRIBUTE$1 = "data-wp-hash";
		if (typeof process === "undefined" || false) registerStyle$1("6887c7204a", "._1f8f297a785aa85b__card{box-shadow:0 0 0 1px rgba(0,0,0,.1);outline:none}._71ea7b63437942f4__card-borderless{box-shadow:none}.f9cb209f41f97de5__is-rounded{border-radius:7px}._2c3ea1cc39aa466b__content{height:100%}.a163cc13448ec37b__header{border-bottom:1px solid;border-color:rgba(0,0,0,.1);box-sizing:border-box}.a163cc13448ec37b__header:last-child{border-bottom:none}._6d8a4e86235af025__footer{border-color:rgba(0,0,0,.1);border-top:1px solid rgba(0,0,0,.1);box-sizing:border-box}._6d8a4e86235af025__footer:first-of-type{border-top:none}._2c496ecb725fa830__body{box-sizing:border-box;height:auto;max-height:100%}._1842860e9ac3900d__is-scrollable{height:100%}._7f74eb97e030abe0__media{box-sizing:border-box;overflow:hidden}._7f74eb97e030abe0__media>iframe,._7f74eb97e030abe0__media>img{display:block;height:auto;max-width:100%;width:100%}._2c496ecb725fa830__body:first-of-type,._6d8a4e86235af025__footer:first-of-type,._7f74eb97e030abe0__media:first-of-type,.a163cc13448ec37b__header:first-of-type{border-start-end-radius:7px;border-start-start-radius:7px}._2c496ecb725fa830__body:last-of-type,._6d8a4e86235af025__footer:last-of-type,._7f74eb97e030abe0__media:last-of-type,.a163cc13448ec37b__header:last-of-type{border-end-end-radius:7px;border-end-start-radius:7px}._5ad567f5f149b643__divider._5ad567f5f149b643__divider{border-color:rgba(0,0,0,.1);box-sizing:border-box;display:block;width:100%}._0d801e4b12c3cb1b__section-borderless{border:none}.c370e86e990f2dc2__is-shady{background-color:var(--wp-components-color-gray-100,var(--wpds-color-background-surface-neutral,#fcfcfc))}._95f2d955ae3aaac4__padding-none{padding:0}._2bc04be6468c1c6d__padding-x-small{padding:8px}.fdc0a0a467bbca85__padding-small{padding:16px}._12570b225c4cd6ec__padding-medium{padding:16px 24px}._075659124a9abb5f__padding-large{padding:24px 32px}.d8812272c7a304a3__padding-block-start-none{padding-block-start:0}.efd63867a65e05a7__padding-block-start-x-small{padding-block-start:8px}.ef2508c8be53c97e__padding-block-start-small{padding-block-start:16px}.f29b1299cd472cc9__padding-block-start-medium{padding-block-start:24px}._6a3ebf7d3732526f__padding-block-start-large{padding-block-start:32px}._7a4b87bc1d142ae5__padding-block-end-none{padding-block-end:0}._285cc8fab823a2c7__padding-block-end-x-small{padding-block-end:8px}.c3a11e6149d1a95c__padding-block-end-small{padding-block-end:16px}._68eba70cd7ed414d__padding-block-end-medium{padding-block-end:24px}.d72d7c8dc8693681__padding-block-end-large{padding-block-end:32px}._68b5a70e62405288__padding-inline-start-none{padding-inline-start:0}._025f392546cc73c7__padding-inline-start-x-small{padding-inline-start:8px}.ccf1152dff869995__padding-inline-start-small{padding-inline-start:16px}._39ccbfbfdb5e22e3__padding-inline-start-medium{padding-inline-start:24px}._90cb7918813a4978__padding-inline-start-large{padding-inline-start:32px}.edcf7cc049ceb9b6__padding-inline-end-none{padding-inline-end:0}.f90997164f9d8a7f__padding-inline-end-x-small{padding-inline-end:8px}._16ed8ad9ac107b57__padding-inline-end-small{padding-inline-end:16px}._7cec3cd0bb5d49e0__padding-inline-end-medium{padding-inline-end:24px}._680b1c384e1da206__padding-inline-end-large{padding-inline-end:32px}");
		style_module_default$1 = {
			"card": "_1f8f297a785aa85b__card",
			"card-borderless": "_71ea7b63437942f4__card-borderless",
			"is-rounded": "f9cb209f41f97de5__is-rounded",
			"content": "_2c3ea1cc39aa466b__content",
			"header": "a163cc13448ec37b__header",
			"footer": "_6d8a4e86235af025__footer",
			"body": "_2c496ecb725fa830__body",
			"is-scrollable": "_1842860e9ac3900d__is-scrollable",
			"media": "_7f74eb97e030abe0__media",
			"divider": "_5ad567f5f149b643__divider",
			"section-borderless": "_0d801e4b12c3cb1b__section-borderless",
			"is-shady": "c370e86e990f2dc2__is-shady",
			"padding-none": "_95f2d955ae3aaac4__padding-none",
			"padding-x-small": "_2bc04be6468c1c6d__padding-x-small",
			"padding-small": "fdc0a0a467bbca85__padding-small",
			"padding-medium": "_12570b225c4cd6ec__padding-medium",
			"padding-large": "_075659124a9abb5f__padding-large",
			"padding-block-start-none": "d8812272c7a304a3__padding-block-start-none",
			"padding-block-start-x-small": "efd63867a65e05a7__padding-block-start-x-small",
			"padding-block-start-small": "ef2508c8be53c97e__padding-block-start-small",
			"padding-block-start-medium": "f29b1299cd472cc9__padding-block-start-medium",
			"padding-block-start-large": "_6a3ebf7d3732526f__padding-block-start-large",
			"padding-block-end-none": "_7a4b87bc1d142ae5__padding-block-end-none",
			"padding-block-end-x-small": "_285cc8fab823a2c7__padding-block-end-x-small",
			"padding-block-end-small": "c3a11e6149d1a95c__padding-block-end-small",
			"padding-block-end-medium": "_68eba70cd7ed414d__padding-block-end-medium",
			"padding-block-end-large": "d72d7c8dc8693681__padding-block-end-large",
			"padding-inline-start-none": "_68b5a70e62405288__padding-inline-start-none",
			"padding-inline-start-x-small": "_025f392546cc73c7__padding-inline-start-x-small",
			"padding-inline-start-small": "ccf1152dff869995__padding-inline-start-small",
			"padding-inline-start-medium": "_39ccbfbfdb5e22e3__padding-inline-start-medium",
			"padding-inline-start-large": "_90cb7918813a4978__padding-inline-start-large",
			"padding-inline-end-none": "edcf7cc049ceb9b6__padding-inline-end-none",
			"padding-inline-end-x-small": "f90997164f9d8a7f__padding-inline-end-x-small",
			"padding-inline-end-small": "_16ed8ad9ac107b57__padding-inline-end-small",
			"padding-inline-end-medium": "_7cec3cd0bb5d49e0__padding-inline-end-medium",
			"padding-inline-end-large": "_680b1c384e1da206__padding-inline-end-large"
		};
		paddingSizes = {
			none: "none",
			xSmall: "x-small",
			small: "small",
			medium: "medium",
			large: "large"
		};
		getSinglePaddingClass = (side, size) => style_module_default$1[`padding-${side}-${paddingSizes[size] ?? "medium"}`];
		getPaddingBySize = (size) => {
			if (typeof size === "string") return style_module_default$1[`padding-${size === "extraSmall" ? "x-small" : paddingSizes[size]}`];
			if (size) return [
				getSinglePaddingClass("block-start", size.blockStart),
				getSinglePaddingClass("block-end", size.blockEnd),
				getSinglePaddingClass("inline-start", size.inlineStart),
				getSinglePaddingClass("inline-end", size.inlineEnd)
			];
			return style_module_default$1["padding-medium"];
		};
	})))();
}
//#endregion
//#region ../packages/components/build-module/card/card-body/hook.mjs
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
function useCardBody(props) {
	const { className, isScrollable = false, isShady = false, size = "medium", ...otherProps } = useContextSystem(props, "CardBody");
	const classes = clsx(style_module_default.body, getPaddingBySize(size), {
		[style_module_default["is-scrollable"]]: isScrollable,
		[style_module_default["is-shady"]]: isShady
	}, "components-card__body", className);
	return {
		...otherProps,
		className: classes,
		isScrollable
	};
}
var STYLE_HASH_ATTRIBUTE, style_module_default;
function init_hook$4() {
	return (init_hook$4 = __esmMin((() => {
		init_clsx();
		init_use_context_system();
		init_get_padding_by_size();
		STYLE_HASH_ATTRIBUTE = "data-wp-hash";
		if (typeof process === "undefined" || false) registerStyle("6887c7204a", "._1f8f297a785aa85b__card{box-shadow:0 0 0 1px rgba(0,0,0,.1);outline:none}._71ea7b63437942f4__card-borderless{box-shadow:none}.f9cb209f41f97de5__is-rounded{border-radius:7px}._2c3ea1cc39aa466b__content{height:100%}.a163cc13448ec37b__header{border-bottom:1px solid;border-color:rgba(0,0,0,.1);box-sizing:border-box}.a163cc13448ec37b__header:last-child{border-bottom:none}._6d8a4e86235af025__footer{border-color:rgba(0,0,0,.1);border-top:1px solid rgba(0,0,0,.1);box-sizing:border-box}._6d8a4e86235af025__footer:first-of-type{border-top:none}._2c496ecb725fa830__body{box-sizing:border-box;height:auto;max-height:100%}._1842860e9ac3900d__is-scrollable{height:100%}._7f74eb97e030abe0__media{box-sizing:border-box;overflow:hidden}._7f74eb97e030abe0__media>iframe,._7f74eb97e030abe0__media>img{display:block;height:auto;max-width:100%;width:100%}._2c496ecb725fa830__body:first-of-type,._6d8a4e86235af025__footer:first-of-type,._7f74eb97e030abe0__media:first-of-type,.a163cc13448ec37b__header:first-of-type{border-start-end-radius:7px;border-start-start-radius:7px}._2c496ecb725fa830__body:last-of-type,._6d8a4e86235af025__footer:last-of-type,._7f74eb97e030abe0__media:last-of-type,.a163cc13448ec37b__header:last-of-type{border-end-end-radius:7px;border-end-start-radius:7px}._5ad567f5f149b643__divider._5ad567f5f149b643__divider{border-color:rgba(0,0,0,.1);box-sizing:border-box;display:block;width:100%}._0d801e4b12c3cb1b__section-borderless{border:none}.c370e86e990f2dc2__is-shady{background-color:var(--wp-components-color-gray-100,var(--wpds-color-background-surface-neutral,#fcfcfc))}._95f2d955ae3aaac4__padding-none{padding:0}._2bc04be6468c1c6d__padding-x-small{padding:8px}.fdc0a0a467bbca85__padding-small{padding:16px}._12570b225c4cd6ec__padding-medium{padding:16px 24px}._075659124a9abb5f__padding-large{padding:24px 32px}.d8812272c7a304a3__padding-block-start-none{padding-block-start:0}.efd63867a65e05a7__padding-block-start-x-small{padding-block-start:8px}.ef2508c8be53c97e__padding-block-start-small{padding-block-start:16px}.f29b1299cd472cc9__padding-block-start-medium{padding-block-start:24px}._6a3ebf7d3732526f__padding-block-start-large{padding-block-start:32px}._7a4b87bc1d142ae5__padding-block-end-none{padding-block-end:0}._285cc8fab823a2c7__padding-block-end-x-small{padding-block-end:8px}.c3a11e6149d1a95c__padding-block-end-small{padding-block-end:16px}._68eba70cd7ed414d__padding-block-end-medium{padding-block-end:24px}.d72d7c8dc8693681__padding-block-end-large{padding-block-end:32px}._68b5a70e62405288__padding-inline-start-none{padding-inline-start:0}._025f392546cc73c7__padding-inline-start-x-small{padding-inline-start:8px}.ccf1152dff869995__padding-inline-start-small{padding-inline-start:16px}._39ccbfbfdb5e22e3__padding-inline-start-medium{padding-inline-start:24px}._90cb7918813a4978__padding-inline-start-large{padding-inline-start:32px}.edcf7cc049ceb9b6__padding-inline-end-none{padding-inline-end:0}.f90997164f9d8a7f__padding-inline-end-x-small{padding-inline-end:8px}._16ed8ad9ac107b57__padding-inline-end-small{padding-inline-end:16px}._7cec3cd0bb5d49e0__padding-inline-end-medium{padding-inline-end:24px}._680b1c384e1da206__padding-inline-end-large{padding-inline-end:32px}");
		style_module_default = {
			"card": "_1f8f297a785aa85b__card",
			"card-borderless": "_71ea7b63437942f4__card-borderless",
			"is-rounded": "f9cb209f41f97de5__is-rounded",
			"content": "_2c3ea1cc39aa466b__content",
			"header": "a163cc13448ec37b__header",
			"footer": "_6d8a4e86235af025__footer",
			"body": "_2c496ecb725fa830__body",
			"is-scrollable": "_1842860e9ac3900d__is-scrollable",
			"media": "_7f74eb97e030abe0__media",
			"divider": "_5ad567f5f149b643__divider",
			"section-borderless": "_0d801e4b12c3cb1b__section-borderless",
			"is-shady": "c370e86e990f2dc2__is-shady",
			"padding-none": "_95f2d955ae3aaac4__padding-none",
			"padding-x-small": "_2bc04be6468c1c6d__padding-x-small",
			"padding-small": "fdc0a0a467bbca85__padding-small",
			"padding-medium": "_12570b225c4cd6ec__padding-medium",
			"padding-large": "_075659124a9abb5f__padding-large",
			"padding-block-start-none": "d8812272c7a304a3__padding-block-start-none",
			"padding-block-start-x-small": "efd63867a65e05a7__padding-block-start-x-small",
			"padding-block-start-small": "ef2508c8be53c97e__padding-block-start-small",
			"padding-block-start-medium": "f29b1299cd472cc9__padding-block-start-medium",
			"padding-block-start-large": "_6a3ebf7d3732526f__padding-block-start-large",
			"padding-block-end-none": "_7a4b87bc1d142ae5__padding-block-end-none",
			"padding-block-end-x-small": "_285cc8fab823a2c7__padding-block-end-x-small",
			"padding-block-end-small": "c3a11e6149d1a95c__padding-block-end-small",
			"padding-block-end-medium": "_68eba70cd7ed414d__padding-block-end-medium",
			"padding-block-end-large": "d72d7c8dc8693681__padding-block-end-large",
			"padding-inline-start-none": "_68b5a70e62405288__padding-inline-start-none",
			"padding-inline-start-x-small": "_025f392546cc73c7__padding-inline-start-x-small",
			"padding-inline-start-small": "ccf1152dff869995__padding-inline-start-small",
			"padding-inline-start-medium": "_39ccbfbfdb5e22e3__padding-inline-start-medium",
			"padding-inline-start-large": "_90cb7918813a4978__padding-inline-start-large",
			"padding-inline-end-none": "edcf7cc049ceb9b6__padding-inline-end-none",
			"padding-inline-end-x-small": "f90997164f9d8a7f__padding-inline-end-x-small",
			"padding-inline-end-small": "_16ed8ad9ac107b57__padding-inline-end-small",
			"padding-inline-end-medium": "_7cec3cd0bb5d49e0__padding-inline-end-medium",
			"padding-inline-end-large": "_680b1c384e1da206__padding-inline-end-large"
		};
	})))();
}
//#endregion
//#region ../packages/components/build-module/card/card-body/component.mjs
function UnconnectedCardBody(props, forwardedRef) {
	const { isScrollable, ...otherProps } = useCardBody(props);
	if (isScrollable) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(component_default$1, {
		...otherProps,
		ref: forwardedRef
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(component_default$4, {
		...otherProps,
		ref: forwardedRef
	});
}
var import_jsx_runtime, CardBody, component_default;
function init_component$3() {
	return (init_component$3 = __esmMin((() => {
		init_context_connect();
		init_component$2();
		init_component$4();
		init_hook$4();
		import_jsx_runtime = require_jsx_runtime();
		CardBody = contextConnect(UnconnectedCardBody, "CardBody");
		component_default = CardBody;
	})))();
}
//#endregion
export { init_component$1 as i, init_component$3 as n, component_default$2 as r, component_default as t };
