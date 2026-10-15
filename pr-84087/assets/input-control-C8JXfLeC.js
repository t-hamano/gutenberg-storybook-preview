import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C1RZKCc6.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { o as clsx, s as init_clsx } from "./iframe-D4D-SsYo.js";
import { a as Label, c as init_root, i as init_description, n as init_details, o as init_label, r as Description, s as Root, t as Details } from "./details-BzSbJHpt.js";
import { n as init_input, t as Input } from "./input-C_665Drh.js";
//#region ../packages/ui/build-module/form/input-control/input-control.mjs
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
var import_jsx_runtime, STYLE_HASH_ATTRIBUTE, style_default, InputControl;
function init_input_control() {
	return (init_input_control = __esmMin((() => {
		init_clsx();
		init_react();
		init_input(), init_root(), init_label(), init_description(), init_details();
		import_jsx_runtime = require_jsx_runtime();
		STYLE_HASH_ATTRIBUTE = "data-wp-hash";
		if (typeof process === "undefined" || false) registerStyle("0c752c3d08", "@layer wp-ui{@layer utilities, components, compositions, overrides;@layer compositions{@supports (-webkit-hyphens:none) and (not (-moz-appearance:none)){.a9211a7e6af24bed__root input[type=date]:not([data-filled]):not(:focus),.a9211a7e6af24bed__root input[type=datetime-local]:not([data-filled]):not(:focus),.a9211a7e6af24bed__root input[type=time]:not([data-filled]):not(:focus){--_gcd-input-color:transparent;--_gcd-input-color-disabled:transparent;color:transparent;&:disabled::-webkit-datetime-edit-text{color:transparent}}}}}");
		style_default = { "root": "a9211a7e6af24bed__root" };
		InputControl = (0, import_react.forwardRef)(function UnforwardedInputControl({ className, label, description, details, hideLabelFromVision, ...restProps }, ref) {
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Root, {
				className: clsx(style_default.root, className),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						hideFromVision: hideLabelFromVision,
						children: label
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						ref,
						...restProps
					}),
					description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Description, { children: description }),
					details && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Details, { children: details })
				]
			});
		});
	})))();
}
//#endregion
export { init_input_control as n, InputControl as t };
