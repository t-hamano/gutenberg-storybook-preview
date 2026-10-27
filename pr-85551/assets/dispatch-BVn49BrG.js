import { n as __esmMin, t as __commonJSMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { n as init_default_registry, t as default_registry_default } from "./default-registry-DXzr-urv.js";
import { n as isShallowEqual, t as init_build_module$1 } from "./build-module-COHfMY9T.js";
import { n as useRegistry, t as init_use_registry } from "./use-registry-R-LrXGhT.js";
//#region ../node_modules/.store/requestidlecallback@0.3.0-yuquNN0kRGQuzC4XrCd13g/node_modules/requestidlecallback/index.js
var require_requestidlecallback = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	(function(factory) {
		if (typeof define === "function" && define.amd) define([], factory);
		else if (typeof module === "object" && module.exports) module.exports = factory();
		else window.idleCallbackShim = factory();
	})(function() {
		"use strict";
		var scheduleStart, throttleDelay, lazytimer, lazyraf;
		var root = typeof window != "undefined" ? window : global;
		var requestAnimationFrame = root.cancelRequestAnimationFrame && root.requestAnimationFrame || setTimeout;
		var cancelRequestAnimationFrame = root.cancelRequestAnimationFrame || clearTimeout;
		var tasks = [];
		var runAttempts = 0;
		var isRunning = false;
		var remainingTime = 7;
		var minThrottle = 35;
		var throttle = 125;
		var index = 0;
		var taskStart = 0;
		var tasklength = 0;
		var IdleDeadline = {
			get didTimeout() {
				return false;
			},
			timeRemaining: function() {
				var timeRemaining = remainingTime - (Date.now() - taskStart);
				return timeRemaining < 0 ? 0 : timeRemaining;
			}
		};
		var setInactive = debounce(function() {
			remainingTime = 22;
			throttle = 66;
			minThrottle = 0;
		});
		function debounce(fn) {
			var id, timestamp;
			var wait = 99;
			var check = function() {
				var last = Date.now() - timestamp;
				if (last < wait) id = setTimeout(check, wait - last);
				else {
					id = null;
					fn();
				}
			};
			return function() {
				timestamp = Date.now();
				if (!id) id = setTimeout(check, wait);
			};
		}
		function abortRunning() {
			if (isRunning) {
				if (lazyraf) cancelRequestAnimationFrame(lazyraf);
				if (lazytimer) clearTimeout(lazytimer);
				isRunning = false;
			}
		}
		function onInputorMutation() {
			if (throttle != 125) {
				remainingTime = 7;
				throttle = 125;
				minThrottle = 35;
				if (isRunning) {
					abortRunning();
					scheduleLazy();
				}
			}
			setInactive();
		}
		function scheduleAfterRaf() {
			lazyraf = null;
			lazytimer = setTimeout(runTasks, 0);
		}
		function scheduleRaf() {
			lazytimer = null;
			requestAnimationFrame(scheduleAfterRaf);
		}
		function scheduleLazy() {
			if (isRunning) return;
			throttleDelay = throttle - (Date.now() - taskStart);
			scheduleStart = Date.now();
			isRunning = true;
			if (minThrottle && throttleDelay < minThrottle) throttleDelay = minThrottle;
			if (throttleDelay > 9) lazytimer = setTimeout(scheduleRaf, throttleDelay);
			else {
				throttleDelay = 0;
				scheduleRaf();
			}
		}
		function runTasks() {
			var task, i, len;
			var timeThreshold = remainingTime > 9 ? 9 : 1;
			taskStart = Date.now();
			isRunning = false;
			lazytimer = null;
			if (runAttempts > 2 || taskStart - throttleDelay - 50 < scheduleStart) for (i = 0, len = tasks.length; i < len && IdleDeadline.timeRemaining() > timeThreshold; i++) {
				task = tasks.shift();
				tasklength++;
				if (task) task(IdleDeadline);
			}
			if (tasks.length) scheduleLazy();
			else runAttempts = 0;
		}
		function requestIdleCallbackShim(task) {
			index++;
			tasks.push(task);
			scheduleLazy();
			return index;
		}
		function cancelIdleCallbackShim(id) {
			var index = id - 1 - tasklength;
			if (tasks[index]) tasks[index] = null;
		}
		if (!root.requestIdleCallback || !root.cancelIdleCallback) {
			root.requestIdleCallback = requestIdleCallbackShim;
			root.cancelIdleCallback = cancelIdleCallbackShim;
			if (root.document && document.addEventListener) {
				root.addEventListener("scroll", onInputorMutation, true);
				root.addEventListener("resize", onInputorMutation);
				document.addEventListener("focus", onInputorMutation, true);
				document.addEventListener("mouseover", onInputorMutation, true);
				[
					"click",
					"keypress",
					"touchstart",
					"mousedown"
				].forEach(function(name) {
					document.addEventListener(name, onInputorMutation, {
						capture: true,
						passive: true
					});
				});
				if (root.MutationObserver) new MutationObserver(onInputorMutation).observe(document.documentElement, {
					childList: true,
					subtree: true,
					attributes: true
				});
			}
		} else try {
			root.requestIdleCallback(function() {}, { timeout: 0 });
		} catch (e) {
			(function(rIC) {
				var timeRemainingProto, timeRemaining;
				root.requestIdleCallback = function(fn, timeout) {
					if (timeout && typeof timeout.timeout == "number") return rIC(fn, timeout.timeout);
					return rIC(fn);
				};
				if (root.IdleCallbackDeadline && (timeRemainingProto = IdleCallbackDeadline.prototype)) {
					timeRemaining = Object.getOwnPropertyDescriptor(timeRemainingProto, "timeRemaining");
					if (!timeRemaining || !timeRemaining.configurable || !timeRemaining.get) return;
					Object.defineProperty(timeRemainingProto, "timeRemaining", {
						value: function() {
							return timeRemaining.get.call(this);
						},
						enumerable: true,
						configurable: true
					});
				}
			})(root.requestIdleCallback);
		}
		return {
			request: requestIdleCallbackShim,
			cancel: cancelIdleCallbackShim
		};
	});
}));
//#endregion
//#region ../packages/priority-queue/build-module/request-idle-callback.mjs
function createRequestIdleCallback() {
	if (typeof window === "undefined") return (callback) => {
		setTimeout(() => callback(Date.now()), 0);
	};
	return window.requestIdleCallback;
}
var request_idle_callback_default;
function init_request_idle_callback() {
	return (init_request_idle_callback = __esmMin((() => {
		require_requestidlecallback();
		request_idle_callback_default = createRequestIdleCallback();
	})))();
}
//#endregion
//#region ../packages/priority-queue/build-module/index.mjs
var createQueue;
function init_build_module() {
	return (init_build_module = __esmMin((() => {
		init_request_idle_callback();
		createQueue = () => {
			const waitingList = /* @__PURE__ */ new Map();
			let isRunning = false;
			const runWaitingList = (deadline) => {
				for (const [nextElement, callback] of waitingList) {
					waitingList.delete(nextElement);
					callback();
					if ("number" === typeof deadline || deadline.timeRemaining() <= 0) break;
				}
				if (waitingList.size === 0) {
					isRunning = false;
					return;
				}
				request_idle_callback_default(runWaitingList);
			};
			const add = (element, item) => {
				waitingList.set(element, item);
				if (!isRunning) {
					isRunning = true;
					request_idle_callback_default(runWaitingList);
				}
			};
			const flush = (element) => {
				const callback = waitingList.get(element);
				if (void 0 === callback) return false;
				waitingList.delete(element);
				callback();
				return true;
			};
			const cancel = (element) => {
				return waitingList.delete(element);
			};
			const reset = () => {
				waitingList.clear();
				isRunning = false;
			};
			return {
				add,
				flush,
				cancel,
				reset
			};
		};
	})))();
}
//#endregion
//#region ../packages/data/build-module/components/async-mode-provider/context.mjs
var Context, context_default;
function init_context() {
	return (init_context = __esmMin((() => {
		init_react();
		Context = (0, import_react.createContext)(false);
		Context.displayName = "AsyncModeContext";
		context_default = Context.Provider;
	})))();
}
//#endregion
//#region ../packages/data/build-module/components/async-mode-provider/use-async-mode.mjs
function useAsyncMode() {
	return (0, import_react.useContext)(Context);
}
function init_use_async_mode() {
	return (init_use_async_mode = __esmMin((() => {
		init_react();
		init_context();
	})))();
}
//#endregion
//#region ../packages/data/build-module/components/use-select/index.mjs
function subscribeDeferred(registry, storeName, listener) {
	let buckets = deferredBuckets.get(registry);
	if (!buckets) {
		buckets = /* @__PURE__ */ new Map();
		deferredBuckets.set(registry, buckets);
	}
	let addToBucket = buckets.get(storeName);
	if (!addToBucket) {
		const listeners = /* @__PURE__ */ new Set();
		const flush = () => {
			for (const { context, callback } of listeners) renderQueue.add(context, callback);
		};
		const unsubscribe = registry.subscribe(() => renderQueue.add(listeners, flush), storeName);
		addToBucket = (newListener) => {
			listeners.add(newListener);
			return () => {
				if (listeners.delete(newListener) && listeners.size === 0) {
					buckets.delete(storeName);
					renderQueue.cancel(listeners);
					unsubscribe();
				}
			};
		};
		buckets.set(storeName, addToBucket);
	}
	return addToBucket(listener);
}
function Store(registry, suspense) {
	const select = suspense ? registry.suspendSelect : registry.select;
	const queueContext = {};
	let lastMapSelect;
	let lastMapResult;
	let lastMapResultValid = false;
	let lastIsAsync;
	let subscriber;
	const storeStatesOnMount = /* @__PURE__ */ new Map();
	function getStoreState(name) {
		return registry.stores[name]?.store?.getState?.() ?? {};
	}
	const createSubscriber = (stores) => {
		const activeStores = [...stores];
		const activeSubscriptions = /* @__PURE__ */ new Set();
		function subscribe(listener) {
			if (lastMapResultValid) {
				for (const name of activeStores) if (storeStatesOnMount.get(name) !== getStoreState(name)) lastMapResultValid = false;
			}
			storeStatesOnMount.clear();
			const onStoreChange = () => {
				lastMapResultValid = false;
				listener();
			};
			function listenToStore(storeName) {
				if (lastIsAsync) return subscribeDeferred(registry, storeName, {
					context: queueContext,
					callback: onStoreChange
				});
				return registry.subscribe(onStoreChange, storeName);
			}
			const unsubs = /* @__PURE__ */ new Map();
			function subscribeStore(storeName) {
				unsubs.set(storeName, listenToStore(storeName));
			}
			function resubscribeStores() {
				for (const [storeName, unsub] of unsubs) {
					unsub?.();
					unsubs.set(storeName, listenToStore(storeName));
				}
			}
			for (const storeName of activeStores) subscribeStore(storeName);
			const subscription = {
				subscribeStore,
				resubscribeStores
			};
			activeSubscriptions.add(subscription);
			return () => {
				activeSubscriptions.delete(subscription);
				for (const unsub of unsubs.values()) unsub?.();
				renderQueue.cancel(queueContext);
			};
		}
		function updateStores(newStores) {
			for (const newStore of newStores) {
				if (activeStores.includes(newStore)) continue;
				activeStores.push(newStore);
				for (const subscription of activeSubscriptions) subscription.subscribeStore(newStore);
			}
		}
		function switchMode() {
			for (const subscription of activeSubscriptions) subscription.resubscribeStores();
		}
		return {
			subscribe,
			updateStores,
			switchMode
		};
	};
	return (mapSelect, isAsync) => {
		function updateValue() {
			if (lastMapResultValid && mapSelect === lastMapSelect) return;
			const listeningStores = { current: null };
			const mapResult = registry.__unstableMarkListeningStores(() => mapSelect(select, registry), listeningStores);
			if (!subscriber) {
				for (const name of listeningStores.current) storeStatesOnMount.set(name, getStoreState(name));
				subscriber = createSubscriber(listeningStores.current);
			} else subscriber.updateStores(listeningStores.current);
			if (!isShallowEqual(lastMapResult, mapResult)) lastMapResult = mapResult;
			lastMapSelect = mapSelect;
			lastMapResultValid = true;
		}
		function getValue() {
			updateValue();
			return lastMapResult;
		}
		const wasAsync = lastIsAsync;
		lastIsAsync = isAsync;
		if (wasAsync && !isAsync) {
			lastMapResultValid = false;
			renderQueue.cancel(queueContext);
		}
		updateValue();
		if (wasAsync !== isAsync) subscriber.switchMode();
		return {
			subscribe: subscriber.subscribe,
			getValue
		};
	};
}
function _useStaticSelect(storeName) {
	return useRegistry().select(storeName);
}
function _useMappingSelect(suspense, mapSelect, deps) {
	const registry = useRegistry();
	const isAsync = useAsyncMode();
	const { subscribe, getValue } = (0, import_react.useMemo)(() => Store(registry, suspense), [registry, suspense])((0, import_react.useCallback)(mapSelect, deps), isAsync);
	const result = (0, import_react.useSyncExternalStore)(subscribe, getValue, getValue);
	(0, import_react.useDebugValue)(result);
	return result;
}
function useSelect(mapSelect, deps) {
	const staticSelectMode = typeof mapSelect !== "function";
	const staticSelectModeRef = (0, import_react.useRef)(staticSelectMode);
	if (staticSelectMode !== staticSelectModeRef.current) {
		const prevMode = staticSelectModeRef.current ? "static" : "mapping";
		throw new Error(`Switching useSelect from ${prevMode} to ${staticSelectMode ? "static" : "mapping"} is not allowed`);
	}
	return staticSelectMode ? _useStaticSelect(mapSelect) : _useMappingSelect(false, mapSelect, deps);
}
var renderQueue, deferredBuckets;
function init_use_select() {
	return (init_use_select = __esmMin((() => {
		init_build_module();
		init_react();
		init_build_module$1();
		init_use_registry();
		init_use_async_mode();
		renderQueue = createQueue();
		deferredBuckets = /* @__PURE__ */ new WeakMap();
	})))();
}
//#endregion
//#region ../packages/data/build-module/dispatch.mjs
function dispatch(storeNameOrDescriptor) {
	return default_registry_default.dispatch(storeNameOrDescriptor);
}
function init_dispatch() {
	return (init_dispatch = __esmMin((() => {
		init_default_registry();
	})))();
}
//#endregion
export { context_default as a, init_build_module as c, useSelect as i, init_dispatch as n, init_context as o, init_use_select as r, createQueue as s, dispatch as t };
