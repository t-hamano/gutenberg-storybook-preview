import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C1RZKCc6.js";
import { a as init_clsx, i as clsx } from "./iframe-UtSZlYID.js";
import { n as useContextSystem, o as init_context_connect, r as contextConnect, t as init_use_context_system } from "./use-context-system-4MMWHyS1.js";
import { n as init_component$1, t as component_default$1 } from "./component-CFOx0tK5.js";
import { n as space, t as init_space } from "./space-CmH0DdCr.js";
//#region ../packages/components/build-module/spacer/hook.mjs
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
function isDefined(o) {
	return typeof o !== "undefined" && o !== null;
}
function useSpacer(props) {
	const { className, margin, marginBottom = 2, marginLeft, marginRight, marginTop, marginX, marginY, padding, paddingBottom, paddingLeft, paddingRight, paddingTop, paddingX, paddingY, style, ...otherProps } = useContextSystem(props, "Spacer");
	const spacingStyle = {};
	if (isDefined(margin)) spacingStyle["--wp-components-spacer-margin"] = space(margin);
	if (isDefined(marginY)) {
		spacingStyle["--wp-components-spacer-margin-block-start"] = space(marginY);
		spacingStyle["--wp-components-spacer-margin-block-end"] = space(marginY);
	}
	if (isDefined(marginX)) {
		spacingStyle["--wp-components-spacer-margin-inline-start"] = space(marginX);
		spacingStyle["--wp-components-spacer-margin-inline-end"] = space(marginX);
	}
	if (isDefined(marginTop)) spacingStyle["--wp-components-spacer-margin-block-start"] = space(marginTop);
	if (isDefined(marginBottom)) spacingStyle["--wp-components-spacer-margin-block-end"] = space(marginBottom);
	if (isDefined(marginLeft)) spacingStyle["--wp-components-spacer-margin-inline-start"] = space(marginLeft);
	if (isDefined(marginRight)) spacingStyle["--wp-components-spacer-margin-inline-end"] = space(marginRight);
	if (isDefined(padding)) spacingStyle["--wp-components-spacer-padding"] = space(padding);
	if (isDefined(paddingY)) {
		spacingStyle["--wp-components-spacer-padding-block-start"] = space(paddingY);
		spacingStyle["--wp-components-spacer-padding-block-end"] = space(paddingY);
	}
	if (isDefined(paddingX)) {
		spacingStyle["--wp-components-spacer-padding-inline-start"] = space(paddingX);
		spacingStyle["--wp-components-spacer-padding-inline-end"] = space(paddingX);
	}
	if (isDefined(paddingTop)) spacingStyle["--wp-components-spacer-padding-block-start"] = space(paddingTop);
	if (isDefined(paddingBottom)) spacingStyle["--wp-components-spacer-padding-block-end"] = space(paddingBottom);
	if (isDefined(paddingLeft)) spacingStyle["--wp-components-spacer-padding-inline-start"] = space(paddingLeft);
	if (isDefined(paddingRight)) spacingStyle["--wp-components-spacer-padding-inline-end"] = space(paddingRight);
	const spacerStyle = {
		...spacingStyle,
		...style
	};
	return {
		...otherProps,
		className: clsx(style_module_default.spacer, className),
		style: spacerStyle
	};
}
var STYLE_HASH_ATTRIBUTE, style_module_default;
function init_hook() {
	return (init_hook = __esmMin((() => {
		init_clsx();
		init_use_context_system();
		init_space();
		STYLE_HASH_ATTRIBUTE = "data-wp-hash";
		if (typeof process === "undefined" || false) registerStyle("f61ad86e00", "._91de5852bdb7a4b8__spacer{--wp-components-spacer-margin:initial;--wp-components-spacer-margin-block-start:initial;--wp-components-spacer-margin-block-end:initial;--wp-components-spacer-margin-inline-start:initial;--wp-components-spacer-margin-inline-end:initial;--wp-components-spacer-padding:initial;--wp-components-spacer-padding-block-start:initial;--wp-components-spacer-padding-block-end:initial;--wp-components-spacer-padding-inline-start:initial;--wp-components-spacer-padding-inline-end:initial;margin:var(--wp-components-spacer-margin);margin-block-end:var(--wp-components-spacer-margin-block-end,var(--wp-components-spacer-margin));margin-block-start:var(--wp-components-spacer-margin-block-start,var(--wp-components-spacer-margin));margin-inline-end:var(--wp-components-spacer-margin-inline-end,var(--wp-components-spacer-margin));margin-inline-start:var(--wp-components-spacer-margin-inline-start,var(--wp-components-spacer-margin));padding:var(--wp-components-spacer-padding);padding-block-end:var(--wp-components-spacer-padding-block-end,var(--wp-components-spacer-padding));padding-block-start:var(--wp-components-spacer-padding-block-start,var(--wp-components-spacer-padding));padding-inline-end:var(--wp-components-spacer-padding-inline-end,var(--wp-components-spacer-padding));padding-inline-start:var(--wp-components-spacer-padding-inline-start,var(--wp-components-spacer-padding))}");
		style_module_default = { "spacer": "_91de5852bdb7a4b8__spacer" };
	})))();
}
//#endregion
//#region ../packages/components/build-module/spacer/component.mjs
function UnconnectedSpacer(props, forwardedRef) {
	const spacerProps = useSpacer(props);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(component_default$1, {
		...spacerProps,
		ref: forwardedRef
	});
}
var import_jsx_runtime, Spacer, component_default;
function init_component() {
	return (init_component = __esmMin((() => {
		init_context_connect();
		init_component$1();
		init_hook();
		import_jsx_runtime = require_jsx_runtime();
		Spacer = contextConnect(UnconnectedSpacer, "Spacer");
		component_default = Spacer;
	})))();
}
//#endregion
export { init_component as n, component_default as t };
