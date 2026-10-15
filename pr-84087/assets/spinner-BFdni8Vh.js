import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C1RZKCc6.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { o as clsx, s as init_clsx } from "./iframe-D4D-SsYo.js";
//#region ../packages/ui/build-module/spinner/spinner.mjs
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
var import_jsx_runtime, STYLE_HASH_ATTRIBUTE, style_default, Spinner;
function init_spinner() {
	return (init_spinner = __esmMin((() => {
		init_clsx();
		init_react();
		import_jsx_runtime = require_jsx_runtime();
		STYLE_HASH_ATTRIBUTE = "data-wp-hash";
		if (typeof process === "undefined" || false) registerStyle("bc09fb824f", "@layer wp-ui{@layer utilities, components, compositions, overrides;@layer components{.ab4d64c07c0ba587__spinner{background-color:transparent;color:var(--wpds-color-foreground-content-neutral-weak,#707070);display:inline-block;height:var(--wpds-dimension-size-2xs,16px);opacity:1;overflow:visible;position:relative;width:var(--wpds-dimension-size-2xs,16px)}.a7654e10245bb7d2__indicator{fill:transparent;stroke:currentColor;stroke-width:var(--wpds-border-width-sm,2px);stroke-linecap:round;transform-origin:50% 50%;@media (forced-colors:active){stroke:CanvasText}animation:_02322d973909703c__spinner-spin 1.4s linear infinite both}@keyframes _02322d973909703c__spinner-spin{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}}}");
		style_default = {
			"spinner": "ab4d64c07c0ba587__spinner",
			"indicator": "a7654e10245bb7d2__indicator",
			"spinner-spin": "_02322d973909703c__spinner-spin"
		};
		Spinner = (0, import_react.forwardRef)(function UnforwardedSpinner({ className, color, style, ...props }, ref) {
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
				className: clsx(style_default.spinner, className),
				style: color === void 0 ? style : {
					...style,
					color
				},
				viewBox: "0 0 100 100",
				xmlns: "http://www.w3.org/2000/svg",
				role: "presentation",
				focusable: "false",
				...props,
				ref,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					className: style_default.indicator,
					d: "m 50 0 a 50 50 0 0 1 0 100",
					vectorEffect: "non-scaling-stroke"
				})
			});
		});
	})))();
}
//#endregion
export { init_spinner as n, Spinner as t };
