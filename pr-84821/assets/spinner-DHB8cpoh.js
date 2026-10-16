import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C1RZKCc6.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { a as init_clsx, i as clsx } from "./iframe-Dbjzp1_m.js";
//#region ../packages/components/build-module/spinner/index.mjs
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
function UnforwardedSpinner({ className, ...props }, forwardedRef) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		className: clsx("components-spinner", style_module_default.spinner, className),
		viewBox: "0 0 100 100",
		width: "16",
		height: "16",
		xmlns: "http://www.w3.org/2000/svg",
		role: "presentation",
		focusable: "false",
		...props,
		ref: forwardedRef,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
			className: style_module_default.track,
			cx: "50",
			cy: "50",
			r: "50",
			vectorEffect: "non-scaling-stroke"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			className: style_module_default.indicator,
			d: "m 50 0 a 50 50 0 0 1 50 50",
			vectorEffect: "non-scaling-stroke"
		})]
	});
}
var import_jsx_runtime, STYLE_HASH_ATTRIBUTE, style_module_default, Spinner, spinner_default;
function init_spinner() {
	return (init_spinner = __esmMin((() => {
		init_clsx();
		init_react();
		import_jsx_runtime = require_jsx_runtime();
		STYLE_HASH_ATTRIBUTE = "data-wp-hash";
		if (typeof process === "undefined" || false) registerStyle("a4ac9b380a", "._5223dcef142ddf2a__spinner{background-color:transparent;color:var(--wp-components-color-accent,var(--wp-admin-theme-color,#3858e9));display:inline-block;height:16px;margin:5px 11px 0;opacity:1;overflow:visible;position:relative;width:16px}._00e30fe487ccb5cc__track,.b33a3d348ed141fd__indicator{fill:transparent;stroke-width:1.5px}._00e30fe487ccb5cc__track{stroke:var(--wp-components-color-gray-300,var(--wpds-color-stroke-surface-neutral,#dbdbdb))}.b33a3d348ed141fd__indicator{stroke:currentColor;stroke-linecap:round;animation:e5c099d0667bd442__spin 1.4s linear infinite both;transform-origin:50% 50%}@keyframes e5c099d0667bd442__spin{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}");
		style_module_default = {
			"spinner": "_5223dcef142ddf2a__spinner",
			"track": "_00e30fe487ccb5cc__track",
			"indicator": "b33a3d348ed141fd__indicator",
			"spin": "e5c099d0667bd442__spin"
		};
		Spinner = (0, import_react.forwardRef)(UnforwardedSpinner);
		Spinner.displayName = "Spinner";
		spinner_default = Spinner;
	})))();
}
//#endregion
export { spinner_default as n, init_spinner as t };
