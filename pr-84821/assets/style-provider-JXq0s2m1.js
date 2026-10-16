import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { t as CacheProvider, v as createCache, y as init_emotion_cache_browser_development_esm } from "./emotion-element-489459f2.browser.development.esm-B7UxODuR.js";
import { n as init_emotion_react_browser_development_esm } from "./emotion-react.browser.development.esm-C_pXP8PL.js";
import { n as v4, t as init_v4 } from "./v4-DCjp-En7.js";
//#region ../packages/style-runtime/build-module/index.mjs
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
var STYLE_HASH_ATTRIBUTE;
function init_build_module() {
	return (init_build_module = __esmMin((() => {
		STYLE_HASH_ATTRIBUTE = "data-wp-hash";
	})))();
}
//#endregion
//#region ../packages/components/src/style-provider/index.tsx
function StyleProvider(props) {
	const { children, document } = props;
	(0, import_react.useLayoutEffect)(() => {
		if (!document) return;
		return registerDocument(document);
	}, [document]);
	if (!document) return null;
	const cache = memoizedCreateCacheWithContainer(document.head);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CacheProvider, {
		value: cache,
		children
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 48,
		columnNumber: 9
	}, this);
}
var import_jsx_dev_runtime, _jsxFileName, uuidCache, containerCacheMap, memoizedCreateCacheWithContainer;
function init_style_provider() {
	return (init_style_provider = __esmMin((() => {
		init_emotion_react_browser_development_esm();
		init_emotion_cache_browser_development_esm();
		init_v4();
		init_react();
		init_build_module();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/style-provider/index.tsx";
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
		try {
			StyleProvider.__docgenInfo = {
				"description": "",
				"displayName": "StyleProvider",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/style-provider/index.tsx",
				"methods": [],
				"props": {
					"children": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/style-provider/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The children elements.",
						"name": "children",
						"required": true,
						"tags": {},
						"type": { "name": "ReactNode" }
					},
					"document": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/style-provider/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Current document.",
						"name": "document",
						"required": true,
						"tags": {},
						"type": { "name": "Document" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
export { init_style_provider as n, StyleProvider as t };
