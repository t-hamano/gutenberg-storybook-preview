import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C1RZKCc6.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as CacheProvider, v as createCache, y as init_emotion_cache_browser_development_esm } from "./emotion-element-489459f2.browser.development.esm-B7UxODuR.js";
import { n as init_emotion_react_browser_development_esm } from "./emotion-react.browser.development.esm-C_pXP8PL.js";
import { n as v4, t as init_v4 } from "./v4-DCjp-En7.js";
//#region ../packages/components/build-module/style-provider/index.mjs
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
function StyleProvider(props) {
	const { children, document: document2 } = props;
	(0, import_react.useLayoutEffect)(() => {
		if (!document2) return;
		return registerDocument(document2);
	}, [document2]);
	if (!document2) return null;
	const cache = memoizedCreateCacheWithContainer(document2.head);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CacheProvider, {
		value: cache,
		children
	});
}
var import_jsx_runtime, STYLE_HASH_ATTRIBUTE, uuidCache, containerCacheMap, memoizedCreateCacheWithContainer, style_provider_default;
function init_style_provider() {
	return (init_style_provider = __esmMin((() => {
		init_emotion_react_browser_development_esm();
		init_emotion_cache_browser_development_esm();
		init_v4();
		init_react();
		import_jsx_runtime = require_jsx_runtime();
		STYLE_HASH_ATTRIBUTE = "data-wp-hash";
		uuidCache = /* @__PURE__ */ new Set();
		containerCacheMap = /* @__PURE__ */ new WeakMap();
		memoizedCreateCacheWithContainer = (container) => {
			if (containerCacheMap.has(container)) return containerCacheMap.get(container);
			let key = v4().replace(/[0-9]/g, "");
			while (uuidCache.has(key)) key = v4().replace(/[0-9]/g, "");
			uuidCache.add(key);
			const cache = createCache({
				container,
				key
			});
			containerCacheMap.set(container, cache);
			return cache;
		};
		style_provider_default = StyleProvider;
	})))();
}
//#endregion
export { init_style_provider as n, style_provider_default as r, StyleProvider as t };
