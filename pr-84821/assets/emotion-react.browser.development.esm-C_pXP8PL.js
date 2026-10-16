import { n as __esmMin, o as __toESM, t as __commonJSMin } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_react } from "./react-Bujh4FgW.js";
import { _ as registerStyles, a as createEmotionProps, c as withEmotionCache, d as useInsertionEffectWithLayoutFallback, f as init_emotion_serialize_development_esm, g as insertStyles, h as init_emotion_utils_browser_esm, l as init_emotion_use_insertion_effect_with_fallbacks_browser_esm, m as getRegisteredStyles, n as Emotion$1, o as hasOwn, p as serializeStyles, r as ThemeContext, s as init_emotion_element_489459f2_browser_development_esm, u as useInsertionEffectAlwaysWithSyncFallback, y as init_emotion_cache_browser_development_esm } from "./emotion-element-489459f2.browser.development.esm-B7UxODuR.js";
//#region ../node_modules/.store/react-is@16.13.1-yW_QoHm9UqSzxulsdt_2RQ/node_modules/react-is/cjs/react-is.development.js
/** @license React v16.13.1
* react-is.development.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var require_react_is_development = /* @__PURE__ */ __commonJSMin(((exports) => {
	(function() {
		"use strict";
		var hasSymbol = typeof Symbol === "function" && Symbol.for;
		var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for("react.element") : 60103;
		var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for("react.portal") : 60106;
		var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for("react.fragment") : 60107;
		var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for("react.strict_mode") : 60108;
		var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for("react.profiler") : 60114;
		var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for("react.provider") : 60109;
		var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for("react.context") : 60110;
		var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for("react.async_mode") : 60111;
		var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for("react.concurrent_mode") : 60111;
		var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for("react.forward_ref") : 60112;
		var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for("react.suspense") : 60113;
		var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for("react.suspense_list") : 60120;
		var REACT_MEMO_TYPE = hasSymbol ? Symbol.for("react.memo") : 60115;
		var REACT_LAZY_TYPE = hasSymbol ? Symbol.for("react.lazy") : 60116;
		var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for("react.block") : 60121;
		var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for("react.fundamental") : 60117;
		var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for("react.responder") : 60118;
		var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for("react.scope") : 60119;
		function isValidElementType(type) {
			return typeof type === "string" || typeof type === "function" || type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === "object" && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
		}
		function typeOf(object) {
			if (typeof object === "object" && object !== null) {
				var $$typeof = object.$$typeof;
				switch ($$typeof) {
					case REACT_ELEMENT_TYPE:
						var type = object.type;
						switch (type) {
							case REACT_ASYNC_MODE_TYPE:
							case REACT_CONCURRENT_MODE_TYPE:
							case REACT_FRAGMENT_TYPE:
							case REACT_PROFILER_TYPE:
							case REACT_STRICT_MODE_TYPE:
							case REACT_SUSPENSE_TYPE: return type;
							default:
								var $$typeofType = type && type.$$typeof;
								switch ($$typeofType) {
									case REACT_CONTEXT_TYPE:
									case REACT_FORWARD_REF_TYPE:
									case REACT_LAZY_TYPE:
									case REACT_MEMO_TYPE:
									case REACT_PROVIDER_TYPE: return $$typeofType;
									default: return $$typeof;
								}
						}
					case REACT_PORTAL_TYPE: return $$typeof;
				}
			}
		}
		var AsyncMode = REACT_ASYNC_MODE_TYPE;
		var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
		var ContextConsumer = REACT_CONTEXT_TYPE;
		var ContextProvider = REACT_PROVIDER_TYPE;
		var Element = REACT_ELEMENT_TYPE;
		var ForwardRef = REACT_FORWARD_REF_TYPE;
		var Fragment = REACT_FRAGMENT_TYPE;
		var Lazy = REACT_LAZY_TYPE;
		var Memo = REACT_MEMO_TYPE;
		var Portal = REACT_PORTAL_TYPE;
		var Profiler = REACT_PROFILER_TYPE;
		var StrictMode = REACT_STRICT_MODE_TYPE;
		var Suspense = REACT_SUSPENSE_TYPE;
		var hasWarnedAboutDeprecatedIsAsyncMode = false;
		function isAsyncMode(object) {
			if (!hasWarnedAboutDeprecatedIsAsyncMode) {
				hasWarnedAboutDeprecatedIsAsyncMode = true;
				console["warn"]("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.");
			}
			return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
		}
		function isConcurrentMode(object) {
			return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
		}
		function isContextConsumer(object) {
			return typeOf(object) === REACT_CONTEXT_TYPE;
		}
		function isContextProvider(object) {
			return typeOf(object) === REACT_PROVIDER_TYPE;
		}
		function isElement(object) {
			return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
		}
		function isForwardRef(object) {
			return typeOf(object) === REACT_FORWARD_REF_TYPE;
		}
		function isFragment(object) {
			return typeOf(object) === REACT_FRAGMENT_TYPE;
		}
		function isLazy(object) {
			return typeOf(object) === REACT_LAZY_TYPE;
		}
		function isMemo(object) {
			return typeOf(object) === REACT_MEMO_TYPE;
		}
		function isPortal(object) {
			return typeOf(object) === REACT_PORTAL_TYPE;
		}
		function isProfiler(object) {
			return typeOf(object) === REACT_PROFILER_TYPE;
		}
		function isStrictMode(object) {
			return typeOf(object) === REACT_STRICT_MODE_TYPE;
		}
		function isSuspense(object) {
			return typeOf(object) === REACT_SUSPENSE_TYPE;
		}
		exports.AsyncMode = AsyncMode;
		exports.ConcurrentMode = ConcurrentMode;
		exports.ContextConsumer = ContextConsumer;
		exports.ContextProvider = ContextProvider;
		exports.Element = Element;
		exports.ForwardRef = ForwardRef;
		exports.Fragment = Fragment;
		exports.Lazy = Lazy;
		exports.Memo = Memo;
		exports.Portal = Portal;
		exports.Profiler = Profiler;
		exports.StrictMode = StrictMode;
		exports.Suspense = Suspense;
		exports.isAsyncMode = isAsyncMode;
		exports.isConcurrentMode = isConcurrentMode;
		exports.isContextConsumer = isContextConsumer;
		exports.isContextProvider = isContextProvider;
		exports.isElement = isElement;
		exports.isForwardRef = isForwardRef;
		exports.isFragment = isFragment;
		exports.isLazy = isLazy;
		exports.isMemo = isMemo;
		exports.isPortal = isPortal;
		exports.isProfiler = isProfiler;
		exports.isStrictMode = isStrictMode;
		exports.isSuspense = isSuspense;
		exports.isValidElementType = isValidElementType;
		exports.typeOf = typeOf;
	})();
}));
//#endregion
//#region ../node_modules/.store/react-is@16.13.1-yW_QoHm9UqSzxulsdt_2RQ/node_modules/react-is/index.js
var require_react_is = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = require_react_is_development();
}));
//#endregion
//#region ../node_modules/.store/hoist-non-react-statics@3.3.2-rbXmAISsNAhE1AG7arnz-A/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js
var require_hoist_non_react_statics_cjs = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var reactIs = require_react_is();
	/**
	* Copyright 2015, Yahoo! Inc.
	* Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
	*/
	var REACT_STATICS = {
		childContextTypes: true,
		contextType: true,
		contextTypes: true,
		defaultProps: true,
		displayName: true,
		getDefaultProps: true,
		getDerivedStateFromError: true,
		getDerivedStateFromProps: true,
		mixins: true,
		propTypes: true,
		type: true
	};
	var KNOWN_STATICS = {
		name: true,
		length: true,
		prototype: true,
		caller: true,
		callee: true,
		arguments: true,
		arity: true
	};
	var FORWARD_REF_STATICS = {
		"$$typeof": true,
		render: true,
		defaultProps: true,
		displayName: true,
		propTypes: true
	};
	var MEMO_STATICS = {
		"$$typeof": true,
		compare: true,
		defaultProps: true,
		displayName: true,
		propTypes: true,
		type: true
	};
	var TYPE_STATICS = {};
	TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
	TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;
	function getStatics(component) {
		if (reactIs.isMemo(component)) return MEMO_STATICS;
		return TYPE_STATICS[component["$$typeof"]] || REACT_STATICS;
	}
	var defineProperty = Object.defineProperty;
	var getOwnPropertyNames = Object.getOwnPropertyNames;
	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
	var getPrototypeOf = Object.getPrototypeOf;
	var objectPrototype = Object.prototype;
	function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
		if (typeof sourceComponent !== "string") {
			if (objectPrototype) {
				var inheritedComponent = getPrototypeOf(sourceComponent);
				if (inheritedComponent && inheritedComponent !== objectPrototype) hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
			}
			var keys = getOwnPropertyNames(sourceComponent);
			if (getOwnPropertySymbols) keys = keys.concat(getOwnPropertySymbols(sourceComponent));
			var targetStatics = getStatics(targetComponent);
			var sourceStatics = getStatics(sourceComponent);
			for (var i = 0; i < keys.length; ++i) {
				var key = keys[i];
				if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
					var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
					try {
						defineProperty(targetComponent, key, descriptor);
					} catch (e) {}
				}
			}
		}
		return targetComponent;
	}
	module.exports = hoistNonReactStatics;
}));
//#endregion
//#region ../node_modules/.store/@emotion/react@11.14.0-vvAzPiBVcLWMwzCLfnStmA/node_modules/@emotion/react/dist/emotion-react.browser.development.esm.js
function css() {
	for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
	return serializeStyles(args);
}
function merge(registered, css, className) {
	var registeredStyles = [];
	var rawClassName = getRegisteredStyles(registered, registeredStyles, className);
	if (registeredStyles.length < 2) return className;
	return rawClassName + css(registeredStyles);
}
var import_react, isDevelopment, pkg, jsx, warnedAboutCssPropForGlobal, Global, classnames, Insertion, ClassNames, isBrowser, globalContext, globalKey;
function init_emotion_react_browser_development_esm() {
	return (init_emotion_react_browser_development_esm = __esmMin((() => {
		init_emotion_element_489459f2_browser_development_esm();
		import_react = /* @__PURE__ */ __toESM(require_react());
		init_emotion_utils_browser_esm();
		init_emotion_use_insertion_effect_with_fallbacks_browser_esm();
		init_emotion_serialize_development_esm();
		init_emotion_cache_browser_development_esm();
		require_hoist_non_react_statics_cjs();
		isDevelopment = true;
		pkg = {
			name: "@emotion/react",
			version: "11.14.0",
			main: "dist/emotion-react.cjs.js",
			module: "dist/emotion-react.esm.js",
			types: "dist/emotion-react.cjs.d.ts",
			exports: {
				".": {
					types: {
						"import": "./dist/emotion-react.cjs.mjs",
						"default": "./dist/emotion-react.cjs.js"
					},
					development: {
						"edge-light": {
							module: "./dist/emotion-react.development.edge-light.esm.js",
							"import": "./dist/emotion-react.development.edge-light.cjs.mjs",
							"default": "./dist/emotion-react.development.edge-light.cjs.js"
						},
						worker: {
							module: "./dist/emotion-react.development.edge-light.esm.js",
							"import": "./dist/emotion-react.development.edge-light.cjs.mjs",
							"default": "./dist/emotion-react.development.edge-light.cjs.js"
						},
						workerd: {
							module: "./dist/emotion-react.development.edge-light.esm.js",
							"import": "./dist/emotion-react.development.edge-light.cjs.mjs",
							"default": "./dist/emotion-react.development.edge-light.cjs.js"
						},
						browser: {
							module: "./dist/emotion-react.browser.development.esm.js",
							"import": "./dist/emotion-react.browser.development.cjs.mjs",
							"default": "./dist/emotion-react.browser.development.cjs.js"
						},
						module: "./dist/emotion-react.development.esm.js",
						"import": "./dist/emotion-react.development.cjs.mjs",
						"default": "./dist/emotion-react.development.cjs.js"
					},
					"edge-light": {
						module: "./dist/emotion-react.edge-light.esm.js",
						"import": "./dist/emotion-react.edge-light.cjs.mjs",
						"default": "./dist/emotion-react.edge-light.cjs.js"
					},
					worker: {
						module: "./dist/emotion-react.edge-light.esm.js",
						"import": "./dist/emotion-react.edge-light.cjs.mjs",
						"default": "./dist/emotion-react.edge-light.cjs.js"
					},
					workerd: {
						module: "./dist/emotion-react.edge-light.esm.js",
						"import": "./dist/emotion-react.edge-light.cjs.mjs",
						"default": "./dist/emotion-react.edge-light.cjs.js"
					},
					browser: {
						module: "./dist/emotion-react.browser.esm.js",
						"import": "./dist/emotion-react.browser.cjs.mjs",
						"default": "./dist/emotion-react.browser.cjs.js"
					},
					module: "./dist/emotion-react.esm.js",
					"import": "./dist/emotion-react.cjs.mjs",
					"default": "./dist/emotion-react.cjs.js"
				},
				"./jsx-runtime": {
					types: {
						"import": "./jsx-runtime/dist/emotion-react-jsx-runtime.cjs.mjs",
						"default": "./jsx-runtime/dist/emotion-react-jsx-runtime.cjs.js"
					},
					development: {
						"edge-light": {
							module: "./jsx-runtime/dist/emotion-react-jsx-runtime.development.edge-light.esm.js",
							"import": "./jsx-runtime/dist/emotion-react-jsx-runtime.development.edge-light.cjs.mjs",
							"default": "./jsx-runtime/dist/emotion-react-jsx-runtime.development.edge-light.cjs.js"
						},
						worker: {
							module: "./jsx-runtime/dist/emotion-react-jsx-runtime.development.edge-light.esm.js",
							"import": "./jsx-runtime/dist/emotion-react-jsx-runtime.development.edge-light.cjs.mjs",
							"default": "./jsx-runtime/dist/emotion-react-jsx-runtime.development.edge-light.cjs.js"
						},
						workerd: {
							module: "./jsx-runtime/dist/emotion-react-jsx-runtime.development.edge-light.esm.js",
							"import": "./jsx-runtime/dist/emotion-react-jsx-runtime.development.edge-light.cjs.mjs",
							"default": "./jsx-runtime/dist/emotion-react-jsx-runtime.development.edge-light.cjs.js"
						},
						browser: {
							module: "./jsx-runtime/dist/emotion-react-jsx-runtime.browser.development.esm.js",
							"import": "./jsx-runtime/dist/emotion-react-jsx-runtime.browser.development.cjs.mjs",
							"default": "./jsx-runtime/dist/emotion-react-jsx-runtime.browser.development.cjs.js"
						},
						module: "./jsx-runtime/dist/emotion-react-jsx-runtime.development.esm.js",
						"import": "./jsx-runtime/dist/emotion-react-jsx-runtime.development.cjs.mjs",
						"default": "./jsx-runtime/dist/emotion-react-jsx-runtime.development.cjs.js"
					},
					"edge-light": {
						module: "./jsx-runtime/dist/emotion-react-jsx-runtime.edge-light.esm.js",
						"import": "./jsx-runtime/dist/emotion-react-jsx-runtime.edge-light.cjs.mjs",
						"default": "./jsx-runtime/dist/emotion-react-jsx-runtime.edge-light.cjs.js"
					},
					worker: {
						module: "./jsx-runtime/dist/emotion-react-jsx-runtime.edge-light.esm.js",
						"import": "./jsx-runtime/dist/emotion-react-jsx-runtime.edge-light.cjs.mjs",
						"default": "./jsx-runtime/dist/emotion-react-jsx-runtime.edge-light.cjs.js"
					},
					workerd: {
						module: "./jsx-runtime/dist/emotion-react-jsx-runtime.edge-light.esm.js",
						"import": "./jsx-runtime/dist/emotion-react-jsx-runtime.edge-light.cjs.mjs",
						"default": "./jsx-runtime/dist/emotion-react-jsx-runtime.edge-light.cjs.js"
					},
					browser: {
						module: "./jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js",
						"import": "./jsx-runtime/dist/emotion-react-jsx-runtime.browser.cjs.mjs",
						"default": "./jsx-runtime/dist/emotion-react-jsx-runtime.browser.cjs.js"
					},
					module: "./jsx-runtime/dist/emotion-react-jsx-runtime.esm.js",
					"import": "./jsx-runtime/dist/emotion-react-jsx-runtime.cjs.mjs",
					"default": "./jsx-runtime/dist/emotion-react-jsx-runtime.cjs.js"
				},
				"./_isolated-hnrs": {
					types: {
						"import": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.cjs.mjs",
						"default": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.cjs.js"
					},
					development: {
						"edge-light": {
							module: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.development.edge-light.esm.js",
							"import": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.development.edge-light.cjs.mjs",
							"default": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.development.edge-light.cjs.js"
						},
						worker: {
							module: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.development.edge-light.esm.js",
							"import": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.development.edge-light.cjs.mjs",
							"default": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.development.edge-light.cjs.js"
						},
						workerd: {
							module: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.development.edge-light.esm.js",
							"import": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.development.edge-light.cjs.mjs",
							"default": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.development.edge-light.cjs.js"
						},
						browser: {
							module: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.browser.development.esm.js",
							"import": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.browser.development.cjs.mjs",
							"default": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.browser.development.cjs.js"
						},
						module: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.development.esm.js",
						"import": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.development.cjs.mjs",
						"default": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.development.cjs.js"
					},
					"edge-light": {
						module: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.edge-light.esm.js",
						"import": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.edge-light.cjs.mjs",
						"default": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.edge-light.cjs.js"
					},
					worker: {
						module: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.edge-light.esm.js",
						"import": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.edge-light.cjs.mjs",
						"default": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.edge-light.cjs.js"
					},
					workerd: {
						module: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.edge-light.esm.js",
						"import": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.edge-light.cjs.mjs",
						"default": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.edge-light.cjs.js"
					},
					browser: {
						module: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.browser.esm.js",
						"import": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.browser.cjs.mjs",
						"default": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.browser.cjs.js"
					},
					module: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.esm.js",
					"import": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.cjs.mjs",
					"default": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.cjs.js"
				},
				"./jsx-dev-runtime": {
					types: {
						"import": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.cjs.mjs",
						"default": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.cjs.js"
					},
					development: {
						"edge-light": {
							module: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.development.edge-light.esm.js",
							"import": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.development.edge-light.cjs.mjs",
							"default": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.development.edge-light.cjs.js"
						},
						worker: {
							module: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.development.edge-light.esm.js",
							"import": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.development.edge-light.cjs.mjs",
							"default": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.development.edge-light.cjs.js"
						},
						workerd: {
							module: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.development.edge-light.esm.js",
							"import": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.development.edge-light.cjs.mjs",
							"default": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.development.edge-light.cjs.js"
						},
						browser: {
							module: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.development.esm.js",
							"import": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.development.cjs.mjs",
							"default": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.development.cjs.js"
						},
						module: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.development.esm.js",
						"import": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.development.cjs.mjs",
						"default": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.development.cjs.js"
					},
					"edge-light": {
						module: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.edge-light.esm.js",
						"import": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.edge-light.cjs.mjs",
						"default": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.edge-light.cjs.js"
					},
					worker: {
						module: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.edge-light.esm.js",
						"import": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.edge-light.cjs.mjs",
						"default": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.edge-light.cjs.js"
					},
					workerd: {
						module: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.edge-light.esm.js",
						"import": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.edge-light.cjs.mjs",
						"default": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.edge-light.cjs.js"
					},
					browser: {
						module: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.esm.js",
						"import": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.cjs.mjs",
						"default": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.cjs.js"
					},
					module: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.esm.js",
					"import": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.cjs.mjs",
					"default": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.cjs.js"
				},
				"./package.json": "./package.json",
				"./types/css-prop": "./types/css-prop.d.ts",
				"./macro": {
					types: {
						"import": "./macro.d.mts",
						"default": "./macro.d.ts"
					},
					"default": "./macro.js"
				}
			},
			imports: {
				"#is-development": {
					development: "./src/conditions/true.ts",
					"default": "./src/conditions/false.ts"
				},
				"#is-browser": {
					"edge-light": "./src/conditions/false.ts",
					workerd: "./src/conditions/false.ts",
					worker: "./src/conditions/false.ts",
					browser: "./src/conditions/true.ts",
					"default": "./src/conditions/is-browser.ts"
				}
			},
			files: [
				"src",
				"dist",
				"jsx-runtime",
				"jsx-dev-runtime",
				"_isolated-hnrs",
				"types/css-prop.d.ts",
				"macro.*"
			],
			sideEffects: false,
			author: "Emotion Contributors",
			license: "MIT",
			scripts: { "test:typescript": "dtslint types" },
			dependencies: {
				"@babel/runtime": "^7.18.3",
				"@emotion/babel-plugin": "^11.13.5",
				"@emotion/cache": "^11.14.0",
				"@emotion/serialize": "^1.3.3",
				"@emotion/use-insertion-effect-with-fallbacks": "^1.2.0",
				"@emotion/utils": "^1.4.2",
				"@emotion/weak-memoize": "^0.4.0",
				"hoist-non-react-statics": "^3.3.1"
			},
			peerDependencies: { react: ">=16.8.0" },
			peerDependenciesMeta: { "@types/react": { optional: true } },
			devDependencies: {
				"@definitelytyped/dtslint": "0.0.112",
				"@emotion/css": "11.13.5",
				"@emotion/css-prettifier": "1.2.0",
				"@emotion/server": "11.11.0",
				"@emotion/styled": "11.14.0",
				"@types/hoist-non-react-statics": "^3.3.5",
				"html-tag-names": "^1.1.2",
				react: "16.14.0",
				"svg-tag-names": "^1.1.1",
				typescript: "^5.4.5"
			},
			repository: "https://github.com/emotion-js/emotion/tree/main/packages/react",
			publishConfig: { access: "public" },
			"umd:main": "dist/emotion-react.umd.min.js",
			preconstruct: {
				entrypoints: [
					"./index.ts",
					"./jsx-runtime.ts",
					"./jsx-dev-runtime.ts",
					"./_isolated-hnrs.ts"
				],
				umdName: "emotionReact",
				exports: { extra: {
					"./types/css-prop": "./types/css-prop.d.ts",
					"./macro": {
						types: {
							"import": "./macro.d.mts",
							"default": "./macro.d.ts"
						},
						"default": "./macro.js"
					}
				} }
			}
		};
		jsx = function jsx(type, props) {
			var args = arguments;
			if (props == null || !hasOwn.call(props, "css")) return import_react.createElement.apply(void 0, args);
			var argsLength = args.length;
			var createElementArgArray = new Array(argsLength);
			createElementArgArray[0] = Emotion$1;
			createElementArgArray[1] = createEmotionProps(type, props);
			for (var i = 2; i < argsLength; i++) createElementArgArray[i] = args[i];
			return import_react.createElement.apply(null, createElementArgArray);
		};
		(function(_jsx) {
			var JSX;
			JSX || (JSX = _jsx.JSX || (_jsx.JSX = {}));
		})(jsx || (jsx = {}));
		warnedAboutCssPropForGlobal = false;
		Global = /* #__PURE__ */ withEmotionCache(function(props, cache) {
			if (!warnedAboutCssPropForGlobal && ("className" in props && props.className || "css" in props && props.css)) {
				console.error("It looks like you're using the css prop on Global, did you mean to use the styles prop instead?");
				warnedAboutCssPropForGlobal = true;
			}
			var styles = props.styles;
			var serialized = serializeStyles([styles], void 0, import_react.useContext(ThemeContext));
			var sheetRef = import_react.useRef();
			useInsertionEffectWithLayoutFallback(function() {
				var key = cache.key + "-global";
				var sheet = new cache.sheet.constructor({
					key,
					nonce: cache.sheet.nonce,
					container: cache.sheet.container,
					speedy: cache.sheet.isSpeedy
				});
				var rehydrating = false;
				var node = document.querySelector("style[data-emotion=\"" + key + " " + serialized.name + "\"]");
				if (cache.sheet.tags.length) sheet.before = cache.sheet.tags[0];
				if (node !== null) {
					rehydrating = true;
					node.setAttribute("data-emotion", key);
					sheet.hydrate([node]);
				}
				sheetRef.current = [sheet, rehydrating];
				return function() {
					sheet.flush();
				};
			}, [cache]);
			useInsertionEffectWithLayoutFallback(function() {
				var sheetRefCurrent = sheetRef.current;
				var sheet = sheetRefCurrent[0];
				if (sheetRefCurrent[1]) {
					sheetRefCurrent[1] = false;
					return;
				}
				if (serialized.next !== void 0) insertStyles(cache, serialized.next, true);
				if (sheet.tags.length) {
					sheet.before = sheet.tags[sheet.tags.length - 1].nextElementSibling;
					sheet.flush();
				}
				cache.insert("", serialized, sheet, false);
			}, [cache, serialized.name]);
			return null;
		});
		Global.displayName = "EmotionGlobal";
		classnames = function classnames(args) {
			var len = args.length;
			var i = 0;
			var cls = "";
			for (; i < len; i++) {
				var arg = args[i];
				if (arg == null) continue;
				var toAdd = void 0;
				switch (typeof arg) {
					case "boolean": break;
					case "object":
						if (Array.isArray(arg)) toAdd = classnames(arg);
						else {
							if (arg.styles !== void 0 && arg.name !== void 0) console.error("You have passed styles created with `css` from `@emotion/react` package to the `cx`.\n`cx` is meant to compose class names (strings) so you should convert those styles to a class name by passing them to the `css` received from <ClassNames/> component.");
							toAdd = "";
							for (var k in arg) if (arg[k] && k) {
								toAdd && (toAdd += " ");
								toAdd += k;
							}
						}
						break;
					default: toAdd = arg;
				}
				if (toAdd) {
					cls && (cls += " ");
					cls += toAdd;
				}
			}
			return cls;
		};
		Insertion = function Insertion(_ref) {
			var cache = _ref.cache, serializedArr = _ref.serializedArr;
			useInsertionEffectAlwaysWithSyncFallback(function() {
				for (var i = 0; i < serializedArr.length; i++) insertStyles(cache, serializedArr[i], false);
			});
			return null;
		};
		ClassNames = /* #__PURE__ */ withEmotionCache(function(props, cache) {
			var hasRendered = false;
			var serializedArr = [];
			var css = function css() {
				if (hasRendered && isDevelopment) throw new Error("css can only be used during render");
				for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
				var serialized = serializeStyles(args, cache.registered);
				serializedArr.push(serialized);
				registerStyles(cache, serialized, false);
				return cache.key + "-" + serialized.name;
			};
			var content = {
				css,
				cx: function cx() {
					if (hasRendered && isDevelopment) throw new Error("cx can only be used during render");
					for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) args[_key2] = arguments[_key2];
					return merge(cache.registered, css, classnames(args));
				},
				theme: import_react.useContext(ThemeContext)
			};
			var ele = props.children(content);
			hasRendered = true;
			return /*#__PURE__*/ import_react.createElement(import_react.Fragment, null, /*#__PURE__*/ import_react.createElement(Insertion, {
				cache,
				serializedArr
			}), ele);
		});
		ClassNames.displayName = "EmotionClassNames";
		isBrowser = typeof document !== "undefined";
		if (isBrowser && !(typeof jest !== "undefined" || typeof vi !== "undefined")) {
			globalContext = typeof globalThis !== "undefined" ? globalThis : isBrowser ? window : global;
			globalKey = "__EMOTION_REACT_" + pkg.version.split(".")[0] + "__";
			if (globalContext[globalKey]) console.warn("You are loading @emotion/react when it is already loaded. Running multiple instances may cause problems. This can happen if multiple versions are used, or if multiple builds of the same version are used.");
			globalContext[globalKey] = true;
		}
	})))();
}
//#endregion
export { init_emotion_react_browser_development_esm as n, css as t };
