import { n as __esmMin, o as __toESM } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_react } from "./react-Bujh4FgW.js";
import { t as require_shim } from "./shim-Bltiqgka.js";
import { Ct as noop, D as applyState, Dt as queueBeforeEvent, Et as pick$1, N as disabledFromProps, O as chain, Ot as removeUndefinedValues, Q as hasFocus, R as getActiveElement, T as addGlobalEventListener, Tt as omit$1, U as getKeys, Z as getWindow, _ as useMetadataProps, _t as isSafari, a as init_dist$3, at as isButton, dt as isFocusable, et as hasOwnProperty, g as useMergeRefs, h as useLiveRef, i as forwardRef, n as createHook, nt as init_dist$2, rt as invariant, st as isElement, t as createElement, tt as identity, u as useEvent, ut as isFocusEventOutside, vt as isSelfTarget, y as useSafeLayoutEffect } from "./dist-DgYpwR44.js";
//#region ../node_modules/.store/@ariakit/react-components@0.7.0-b-7fAlfpqRg2Jp6O33r7Tg/node_modules/@ariakit/react-components/dist/__chunks/C4_D9PgF.js
function accessibleWhenDisabledFromProps(props) {
	return props.accessibleWhenDisabled ?? props.onLoadedMetadataCapture?.[accessibleWhenDisabledSymbol];
}
/**
* Checks whether Focusable resolved this element as disabled and not keyboard
* accessible, based on the exact boolean value it stamps on the element.
*/
function trulyDisabledFromElement(element) {
	return element.getAttribute(trulyDisabledAttribute) === "true";
}
/**
* Returns the exact disabled result stamped by an active Focusable, or
* undefined when no active Focusable resolved the element.
*/
function resolvedTrulyDisabledFromElement(element) {
	const value = element.getAttribute(trulyDisabledAttribute);
	if (value === "true") return true;
	if (value === "false") return false;
}
function isCompositeMoveKey(key) {
	return key === "ArrowUp" || key === "ArrowRight" || key === "ArrowDown" || key === "ArrowLeft" || key === "Home" || key === "End" || key === "PageUp" || key === "PageDown";
}
function isShadowRoot(node) {
	return node.nodeType === node.DOCUMENT_FRAGMENT_NODE && "host" in node;
}
/**
* Returns the focused element as seen from the tree that contains `node`.
* Inside a shadow tree, the document reports the shadow host as its active
* element, so only the shadow root knows which element in it has focus. Focus
* outside that tree, such as in a portal, is still read from the document.
*/
function getTreeActiveElement(node) {
	const root = node?.getRootNode();
	if (root && isShadowRoot(root) && root.activeElement) return root.activeElement;
	return getActiveElement(node);
}
/**
* Like `hasFocus`, but also sees focus on `element` when it is inside a shadow
* tree.
*/
function hasTreeFocus(element) {
	return hasFocus(element) || getTreeActiveElement(element) === element;
}
var accessibleWhenDisabledSymbol, trulyDisabledAttribute;
function init_C4_D9PgF() {
	return (init_C4_D9PgF = __esmMin((() => {
		init_dist$2();
		accessibleWhenDisabledSymbol = Symbol("accessibleWhenDisabled");
		trulyDisabledAttribute = "data-truly-disabled";
	})))();
}
//#endregion
//#region ../node_modules/.store/@ariakit/react-components@0.7.0-b-7fAlfpqRg2Jp6O33r7Tg/node_modules/@ariakit/react-components/dist/focusable/focusable-context.js
var import_react$2, FocusableContext;
function init_focusable_context() {
	return (init_focusable_context = __esmMin((() => {
		import_react$2 = require_react();
		FocusableContext = (0, import_react$2.createContext)(true);
	})))();
}
//#endregion
//#region ../node_modules/.store/@ariakit/react-components@0.7.0-b-7fAlfpqRg2Jp6O33r7Tg/node_modules/@ariakit/react-components/dist/focusable/focusable.js
function isAlwaysFocusVisible(element) {
	const { tagName, readOnly, type } = element;
	if (tagName === "TEXTAREA" && !readOnly) return true;
	if (tagName === "SELECT" && !readOnly) return true;
	if (tagName === "INPUT" && !readOnly) return alwaysFocusVisibleInputTypes.includes(type);
	if (element.isContentEditable) return true;
	if (element.getAttribute("role") === "combobox" && element.dataset.name) return true;
	return false;
}
function isNativeTabbable(tagName) {
	if (!tagName) return true;
	return tagName === "button" || tagName === "summary" || tagName === "input" || tagName === "select" || tagName === "textarea" || tagName === "a";
}
function supportsDisabledAttribute(tagName) {
	if (!tagName) return true;
	return tagName === "button" || tagName === "input" || tagName === "select" || tagName === "textarea";
}
function getElementCapabilities(tagName) {
	let capabilities = 0;
	if (isNativeTabbable(tagName)) capabilities |= nativeTabbableMask;
	if (supportsDisabledAttribute(tagName)) capabilities |= supportsDisabledMask;
	return capabilities;
}
function isNativeSubmitControl(element) {
	if (element.tagName === "BUTTON") {
		const { type } = element;
		return type === "submit";
	}
	if (element.tagName === "INPUT") {
		const { type } = element;
		return type === "submit" || type === "image";
	}
	return false;
}
function getTabIndex({ focusable, trulyDisabled, nativeTabbable, supportsDisabled, safariTabIndex, tabIndexProp }) {
	if (!focusable) return tabIndexProp;
	if (trulyDisabled) {
		if (nativeTabbable && !supportsDisabled) return -1;
		return;
	}
	if (nativeTabbable) {
		if (safariTabIndex && tabIndexProp == null) return 0;
		return tabIndexProp;
	}
	return tabIndexProp ?? 0;
}
function useDisableEvent(onEvent, disabled) {
	return useEvent((event) => {
		onEvent?.(event);
		if (event.defaultPrevented) return;
		if (disabled) {
			event.stopPropagation();
			event.preventDefault();
		}
	});
}
function onGlobalMouseDown(event) {
	const target = event.target;
	if (isElement(target) && !target.hasAttribute("data-focus-visible")) isKeyboardModality = false;
}
function onGlobalKeyDown(event) {
	if (isCompositeMoveKey(event.key)) {
		isKeyboardModality = true;
		return;
	}
	if (event.metaKey) return;
	if (event.ctrlKey) return;
	if (event.altKey) {
		if (!isSafariBrowser) return;
		if (event.key !== "Tab") return;
	}
	isKeyboardModality = true;
}
var import_react$1, TagName, isSafariBrowser, nativeTabbableMask, supportsDisabledMask, defaultElementCapabilities, alwaysFocusVisibleInputTypes, hasInstalledGlobalEventListeners, isKeyboardModality, useFocusable;
function init_focusable() {
	return (init_focusable = __esmMin((() => {
		init_C4_D9PgF();
		init_focusable_context();
		init_dist$3();
		init_dist$2();
		import_react$1 = require_react();
		TagName = "div";
		isSafariBrowser = isSafari();
		nativeTabbableMask = 1;
		supportsDisabledMask = 2;
		defaultElementCapabilities = 3;
		alwaysFocusVisibleInputTypes = [
			"text",
			"search",
			"url",
			"tel",
			"email",
			"password",
			"number",
			"date",
			"month",
			"week",
			"time",
			"datetime",
			"datetime-local"
		];
		hasInstalledGlobalEventListeners = false;
		isKeyboardModality = true;
		useFocusable = createHook(function useFocusable({ focusable = true, accessibleWhenDisabled, autoFocus, onFocusVisible, ...props }) {
			const ref = (0, import_react$1.useRef)(null);
			const [parentAccessibleWhenDisabled, metadataProps] = useMetadataProps(props, accessibleWhenDisabledSymbol, accessibleWhenDisabled);
			accessibleWhenDisabled ??= parentAccessibleWhenDisabled;
			(0, import_react$1.useEffect)(() => {
				if (!focusable) return;
				if (hasInstalledGlobalEventListeners) return;
				addGlobalEventListener("mousedown", onGlobalMouseDown, true);
				addGlobalEventListener("keydown", onGlobalKeyDown, true);
				hasInstalledGlobalEventListeners = true;
			}, [focusable]);
			const disabled = focusable && disabledFromProps(props);
			const trulyDisabled = disabled && !accessibleWhenDisabled;
			const [focusVisible, setFocusVisible] = (0, import_react$1.useState)(false);
			const focusVisibleRef = (0, import_react$1.useRef)(false);
			const nativeSubmitObserverCleanupRef = (0, import_react$1.useRef)(null);
			const cleanupFocusVisible = useEvent((element) => {
				nativeSubmitObserverCleanupRef.current?.();
				nativeSubmitObserverCleanupRef.current = null;
				focusVisibleRef.current = false;
				element?.removeAttribute("data-focus-visible");
			});
			(0, import_react$1.useEffect)(() => {
				if (focusable && !trulyDisabled) return;
				cleanupFocusVisible(ref.current);
				if (focusVisible) setFocusVisible(false);
			}, [
				focusable,
				trulyDisabled,
				focusVisible,
				cleanupFocusVisible
			]);
			(0, import_react$1.useEffect)(() => {
				if (!focusable) return;
				if (!focusVisible) return;
				const element = ref.current;
				if (!element) return;
				if (typeof IntersectionObserver === "undefined") return;
				const observer = new IntersectionObserver(() => {
					if (!isFocusable(element)) {
						focusVisibleRef.current = false;
						setFocusVisible(false);
					}
				});
				observer.observe(element);
				return () => observer.disconnect();
			}, [focusable, focusVisible]);
			(0, import_react$1.useEffect)(() => {
				return () => nativeSubmitObserverCleanupRef.current?.();
			}, []);
			const onKeyPressCapture = useDisableEvent(props.onKeyPressCapture, disabled);
			const onMouseDownCapture = useDisableEvent(props.onMouseDownCapture, disabled);
			const onClickCapture = useDisableEvent(props.onClickCapture, disabled);
			const onAuxClickCapture = useDisableEvent(props.onAuxClickCapture, disabled);
			const handleFocusVisible = (event, currentTarget) => {
				if (currentTarget) event.currentTarget = currentTarget;
				if (!focusable) return;
				const element = event.currentTarget;
				if (!element) return;
				if (!hasTreeFocus(element)) return;
				onFocusVisible?.(event);
				if (event.defaultPrevented) return;
				element.dataset.focusVisible = "true";
				focusVisibleRef.current = true;
				if (isNativeSubmitControl(element)) {
					nativeSubmitObserverCleanupRef.current?.();
					nativeSubmitObserverCleanupRef.current = null;
					if (typeof IntersectionObserver !== "undefined") {
						const observer = new IntersectionObserver(() => {
							if (isFocusable(element)) return;
							cleanupFocusVisible(element);
						});
						observer.observe(element);
						nativeSubmitObserverCleanupRef.current = () => observer.disconnect();
					}
					return;
				}
				setFocusVisible(true);
			};
			const onKeyDownCaptureProp = props.onKeyDownCapture;
			const onKeyDownCapture = useEvent((event) => {
				onKeyDownCaptureProp?.(event);
				if (event.defaultPrevented) return;
				if (!focusable) return;
				if (focusVisible) return;
				if (focusVisibleRef.current) return;
				if ((event.metaKey || event.altKey || event.ctrlKey) && !isCompositeMoveKey(event.key)) return;
				if (!isSelfTarget(event)) return;
				const element = event.currentTarget;
				const applyFocusVisible = () => handleFocusVisible(event, element);
				queueBeforeEvent(element, "focusout", applyFocusVisible);
			});
			const onFocusCaptureProp = props.onFocusCapture;
			const onFocusCapture = useEvent((event) => {
				onFocusCaptureProp?.(event);
				if (event.defaultPrevented) return;
				if (!focusable) return;
				if (!isSelfTarget(event)) {
					setFocusVisible(false);
					return;
				}
				const element = event.currentTarget;
				const applyFocusVisible = () => handleFocusVisible(event, element);
				if (isKeyboardModality || isAlwaysFocusVisible(event.target)) queueBeforeEvent(event.target, "focusout", applyFocusVisible);
				else setFocusVisible(false);
			});
			const onBlurProp = props.onBlur;
			const onBlur = useEvent((event) => {
				onBlurProp?.(event);
				if (!focusable) return;
				if (!isFocusEventOutside(event)) return;
				cleanupFocusVisible(event.currentTarget);
				setFocusVisible(false);
			});
			const autoFocusOnShow = (0, import_react$1.useContext)(FocusableContext);
			const autoFocusRef = useEvent((element) => {
				if (!focusable) return;
				if (!autoFocus) return;
				if (!element) return;
				if (!autoFocusOnShow) return;
				queueMicrotask(() => {
					if (hasFocus(element)) return;
					if (!isFocusable(element)) return;
					element.focus();
				});
			});
			const [elementCapabilities, setElementCapabilities] = (0, import_react$1.useState)(defaultElementCapabilities);
			useSafeLayoutEffect(() => {
				const element = ref.current;
				if (!element) return;
				const nextCapabilities = getElementCapabilities(element.tagName.toLowerCase());
				if (nextCapabilities === defaultElementCapabilities) return;
				setElementCapabilities(nextCapabilities);
			}, []);
			const nativeTabbable = focusable && !!(elementCapabilities & nativeTabbableMask);
			const supportsDisabled = focusable && !!(elementCapabilities & supportsDisabledMask);
			const [safariTabIndex, setSafariTabIndex] = (0, import_react$1.useState)(false);
			if (isSafariBrowser) (0, import_react$1.useEffect)(() => {
				if (!focusable) return;
				const element = ref.current;
				if (!element) return;
				const { type } = element;
				const isNativeCheckboxOrRadio = element.tagName === "INPUT" && (type === "checkbox" || type === "radio");
				setSafariTabIndex(isButton(element) || isNativeCheckboxOrRadio);
			}, [focusable]);
			const styleProp = props.style;
			const style = (0, import_react$1.useMemo)(() => {
				if (trulyDisabled) return {
					pointerEvents: "none",
					...styleProp
				};
				return styleProp;
			}, [trulyDisabled, styleProp]);
			props = {
				"data-focus-visible": focusable && focusVisible || void 0,
				"data-autofocus": autoFocus || void 0,
				"aria-disabled": disabled || void 0,
				...props,
				...metadataProps,
				ref: useMergeRefs(ref, autoFocusRef, props.ref),
				style,
				tabIndex: getTabIndex({
					focusable,
					trulyDisabled,
					nativeTabbable,
					supportsDisabled,
					safariTabIndex,
					tabIndexProp: props.tabIndex
				}),
				disabled: supportsDisabled && trulyDisabled ? true : void 0,
				[trulyDisabledAttribute]: disabled ? trulyDisabled : void 0,
				contentEditable: disabled ? void 0 : props.contentEditable,
				onKeyPressCapture,
				onClickCapture,
				onAuxClickCapture,
				onMouseDownCapture,
				onKeyDownCapture,
				onFocusCapture,
				onBlur
			};
			return removeUndefinedValues(props);
		});
		forwardRef(function Focusable(props) {
			const htmlProps = useFocusable(props);
			return createElement(TagName, htmlProps);
		});
	})))();
}
//#endregion
//#region ../node_modules/.store/@ariakit/store@0.1.10-tkEeU1qj6cwY7nBH6-ymFg/node_modules/@ariakit/store/dist/index.js
function getInternal(store, key) {
	const internals = store.__unstableInternals;
	invariant(internals, "Invalid store");
	return internals[key];
}
function hasUpdatedKey(keys, updatedKey) {
	if (!keys) return true;
	for (const currentKey of keys) if (updatedKey instanceof Set) {
		if (updatedKey.has(currentKey)) return true;
	} else if (isSameValue$1(currentKey, updatedKey)) return true;
	return false;
}
function isSameValue$1(value, other) {
	return value === other || value !== value && other !== other;
}
function getCleanupPrevState(prevState, state, stateBeforeCleanup, updatedKey) {
	let cleanupPrevState;
	for (const key of getKeys(state)) {
		if (isSameValue$1(state[key], stateBeforeCleanup[key])) continue;
		if (updatedKey !== void 0 && hasUpdatedKey([key], updatedKey)) continue;
		cleanupPrevState ??= { ...prevState };
		cleanupPrevState[key] = state[key];
	}
	return cleanupPrevState;
}
function addKeyedListener(map, keys, listener) {
	if (!keys) return;
	for (const key of keys) {
		let listeners = map.get(key);
		if (!listeners) {
			listeners = /* @__PURE__ */ new Set();
			map.set(key, listeners);
		}
		listeners.add(listener);
	}
}
function deleteKeyedListener(map, keys, listener) {
	if (!map) return;
	if (!keys) return;
	for (const key of keys) {
		const listeners = map.get(key);
		if (!listeners) continue;
		listeners.delete(listener);
		if (!listeners.size) map.delete(key);
	}
}
function getFastPathNotifiedListeners(frame) {
	const notifiedListeners = /* @__PURE__ */ new Set();
	const currentListener = frame.currentListener;
	if (!currentListener) return notifiedListeners;
	for (const listener of frame.keyedListeners) {
		notifiedListeners.add(listener);
		if (listener === currentListener) return notifiedListeners;
	}
	notifiedListeners.clear();
	notifiedListeners.add(currentListener);
	return notifiedListeners;
}
function preserveFastPathNotifiedListeners(frame) {
	frame.notifiedListeners ??= getFastPathNotifiedListeners(frame);
}
function hasFastPathPassedListener(frame, listener) {
	if (!frame.currentListener) return false;
	let foundCurrentKeyedListener = false;
	for (const currentListener of frame.keyedListeners) {
		if (currentListener === frame.currentListener) {
			foundCurrentKeyedListener = true;
			continue;
		}
		if (!foundCurrentKeyedListener) continue;
		if (currentListener === listener) return false;
	}
	let foundListener = false;
	for (const currentListener of frame.group.listeners) {
		if (currentListener === frame.currentListener) return foundListener;
		if (currentListener === listener) foundListener = true;
	}
	return false;
}
function preserveFastPathFrames(fastPathFrames, group, listener) {
	for (const frame of fastPathFrames) {
		if (frame.group !== group) continue;
		if (frame.recovering) continue;
		if (listener && !frame.keyedListeners.has(listener)) continue;
		preserveFastPathNotifiedListeners(frame);
		for (const currentListener of frame.group.listeners) {
			if (currentListener === frame.currentListener) break;
			if (!hasFastPathPassedListener(frame, currentListener)) continue;
			frame.notifiedListeners?.add(currentListener);
		}
	}
}
function preserveFastPathPassedListeners(fastPathFrames, group, listener) {
	for (const frame of fastPathFrames) {
		if (frame.group !== group) continue;
		if (frame.recovering) continue;
		if (!hasFastPathPassedListener(frame, listener)) continue;
		preserveFastPathNotifiedListeners(frame);
		frame.notifiedListeners?.add(listener);
	}
}
function preserveFastPathPassedKeyedListeners({ fastPathFrames, group, keys, listener }) {
	const wasRegistered = group.listeners.has(listener);
	for (const frame of fastPathFrames) {
		if (frame.group !== group) continue;
		if (frame.recovering) continue;
		if (!keys.includes(frame.updatedKey)) continue;
		if (hasFastPathPassedListener(frame, listener)) {
			preserveFastPathNotifiedListeners(frame);
			frame.notifiedListeners?.add(listener);
		} else if (wasRegistered) {
			preserveFastPathNotifiedListeners(frame);
			frame.recoverToLive = true;
		}
	}
}
function clearFastPathNotifiedListener(fastPathFrames, group, listener) {
	for (const frame of fastPathFrames) {
		if (frame.group !== group) continue;
		frame.notifiedListeners?.delete(listener);
	}
}
function addFastPathKeyedListener({ fastPathFrames, group, keys, listener }) {
	for (const frame of fastPathFrames) {
		if (frame.group !== group) continue;
		if (frame.recovering) continue;
		if (!keys.includes(frame.updatedKey)) continue;
		frame.keyedListeners.add(listener);
	}
}
function runPendingCleanup(group, listener) {
	if (!group.disposables.size) return;
	const cleanup = group.disposables.get(listener);
	if (!cleanup) return;
	group.disposables.delete(listener);
	cleanup();
}
function setListenerCleanup(group, listener, cleanup) {
	const currentCleanup = group.disposables.get(listener);
	if (!currentCleanup) {
		group.disposables.set(listener, cleanup);
		return;
	}
	group.disposables.set(listener, () => {
		currentCleanup();
		cleanup();
	});
}
function notifyStoreListener(group, listener, state, prevState, getState, updatedKey) {
	if (group.suspendCounts?.has(listener)) return;
	const { disposables } = group;
	const cleanup = disposables.size ? disposables.get(listener) : void 0;
	if (cleanup) {
		disposables.delete(listener);
		const stateBeforeCleanup = state;
		cleanup();
		state = getState?.() ?? state;
		if (state !== stateBeforeCleanup) prevState = getCleanupPrevState(prevState, state, stateBeforeCleanup, updatedKey) ?? prevState;
	}
	const result = listener(state, prevState);
	if (result) setListenerCleanup(group, listener, result);
}
function runLiveListeners({ group, getState, prevState, updatedKey, notifiedListeners }) {
	const allKeysListeners = group.allKeysListeners;
	for (const listener of group.listeners) {
		if (notifiedListeners?.has(listener)) continue;
		if (!allKeysListeners?.has(listener)) {
			if (!hasUpdatedKey(group.listenerKeys.get(listener), updatedKey)) continue;
		}
		notifiedListeners?.add(listener);
		notifyStoreListener(group, listener, getState(), prevState, getState, updatedKey);
	}
}
/**
* Creates a store.
* @param initialState Initial state.
* @param stores Stores to extend.
*/
function createStore(initialState, ...stores) {
	let state = initialState;
	let prevStateBatch = state;
	let destroy = noop;
	let batchPending = false;
	let inDispatch = false;
	let updatedKeys = /* @__PURE__ */ new Set();
	const instances = /* @__PURE__ */ new Set();
	const setups = /* @__PURE__ */ new Set();
	const syncListenerGroup = {
		listeners: /* @__PURE__ */ new Set(),
		disposables: /* @__PURE__ */ new Map(),
		listenerKeys: /* @__PURE__ */ new WeakMap()
	};
	const batchListenerGroup = {
		listeners: /* @__PURE__ */ new Set(),
		disposables: /* @__PURE__ */ new Map(),
		listenerKeys: /* @__PURE__ */ new WeakMap()
	};
	const storeSetup = (callback) => {
		setups.add(callback);
		return () => setups.delete(callback);
	};
	const storeInit = () => {
		const initializedInstances = instances.size;
		const instance = Symbol();
		instances.add(instance);
		const maybeDestroy = () => {
			if (!instances.delete(instance)) return;
			if (instances.size) return;
			destroy();
		};
		if (initializedInstances) return maybeDestroy;
		const stateKeys = getKeys(state);
		const desyncs = [];
		for (const store of stores) {
			const storeState = store?.getState?.();
			if (!storeState) continue;
			const keys = stateKeys.filter((key) => hasOwnProperty(storeState, key));
			if (!keys.length) continue;
			if (stores.length === 1 || keys.length === stateKeys.length) {
				for (const key of keys) desyncs.push(sync(store, [key], (state) => {
					setState(key, state[key], true);
				}));
				continue;
			}
			desyncs.push(subscribe(store, keys, (state, prevState) => {
				for (const key of keys) {
					if (state[key] === prevState[key]) continue;
					setState(key, state[key], true);
				}
			}));
			for (const key of keys) {
				const liveState = store?.getState?.();
				if (!liveState) continue;
				setState(key, liveState[key], true);
			}
		}
		const teardowns = [];
		for (const setup of setups) teardowns.push(setup());
		const cleanups = stores.map(init);
		destroy = chain(...desyncs, ...teardowns, ...cleanups);
		return maybeDestroy;
	};
	const deleteListenerIndexes = (group, listener, keys) => {
		if (keys === void 0) return;
		if (keys) deleteKeyedListener(group.listenersByKey, keys, listener);
		else group.allKeysListeners?.delete(listener);
	};
	const fastPathFrames = [];
	const registerListener = (keys, listener, group = syncListenerGroup) => {
		const listenerKeysValue = keys ? [...keys] : null;
		const wasRegistered = group.listeners.has(listener);
		if (!wasRegistered) clearFastPathNotifiedListener(fastPathFrames, group, listener);
		if (!listenerKeysValue) {
			if (wasRegistered) preserveFastPathFrames(fastPathFrames, group);
			preserveFastPathPassedListeners(fastPathFrames, group, listener);
		} else preserveFastPathPassedKeyedListeners({
			fastPathFrames,
			group,
			keys: listenerKeysValue,
			listener
		});
		if (wasRegistered) {
			preserveFastPathFrames(fastPathFrames, group, listener);
			deleteListenerIndexes(group, listener, group.listenerKeys.get(listener));
		}
		group.listeners.add(listener);
		if (listenerKeysValue) {
			group.listenersByKey ??= /* @__PURE__ */ new Map();
			addKeyedListener(group.listenersByKey, listenerKeysValue, listener);
			addFastPathKeyedListener({
				fastPathFrames,
				group,
				keys: listenerKeysValue,
				listener
			});
		} else {
			group.allKeysListeners ??= /* @__PURE__ */ new Set();
			group.allKeysListeners.add(listener);
		}
		group.listenerKeys.set(listener, listenerKeysValue);
		return () => {
			const cleanup = group.disposables.get(listener);
			group.disposables.delete(listener);
			preserveFastPathFrames(fastPathFrames, group, listener);
			const currentKeys = group.listenerKeys.get(listener);
			deleteListenerIndexes(group, listener, listenerKeysValue);
			if (currentKeys !== listenerKeysValue) deleteListenerIndexes(group, listener, currentKeys);
			group.listenerKeys.delete(listener);
			group.listeners.delete(listener);
			cleanup?.();
		};
	};
	const storeSubscribe = (keys, listener) => registerListener(keys, listener);
	const runInitialListener = (group, listener, prevState) => {
		const shouldSuspend = group.listeners.has(listener);
		if (shouldSuspend) {
			group.suspendCounts ??= /* @__PURE__ */ new Map();
			const count = group.suspendCounts.get(listener) ?? 0;
			group.suspendCounts.set(listener, count + 1);
		}
		let cleanupPrevState;
		try {
			const stateBeforeCleanups = state;
			runPendingCleanup(group, listener);
			if (state !== stateBeforeCleanups) cleanupPrevState = getCleanupPrevState(prevState, state, stateBeforeCleanups);
			const cleanup = listener(state, cleanupPrevState ?? prevState);
			if (cleanup) setListenerCleanup(group, listener, cleanup);
		} finally {
			if (shouldSuspend) {
				const suspendCounts = group.suspendCounts;
				const count = suspendCounts?.get(listener);
				if (count && count > 1) suspendCounts?.set(listener, count - 1);
				else suspendCounts?.delete(listener);
				if (!suspendCounts?.size) delete group.suspendCounts;
			}
		}
	};
	const storeSync = (keys, listener) => {
		runInitialListener(syncListenerGroup, listener, state);
		return registerListener(keys, listener);
	};
	const storeBatch = (keys, listener) => {
		if (!batchListenerGroup.listeners.size && !inDispatch) prevStateBatch = state;
		runInitialListener(batchListenerGroup, listener, prevStateBatch);
		return registerListener(keys, listener, batchListenerGroup);
	};
	const storePick = (keys) => createStore(pick$1(state, keys), finalStore);
	const storeOmit = (keys) => createStore(omit$1(state, keys), finalStore);
	const getState = () => state;
	const runListeners = (group, prevState, updatedKey) => {
		if (!(updatedKey instanceof Set) && !group.allKeysListeners?.size) {
			const keyedListeners = group.listenersByKey?.get(updatedKey);
			if (!keyedListeners) return;
			const frame = {
				group,
				keyedListeners,
				updatedKey,
				currentListener: null
			};
			fastPathFrames.push(frame);
			try {
				for (const listener of keyedListeners) {
					if (frame.notifiedListeners?.has(listener)) continue;
					frame.currentListener = listener;
					frame.notifiedListeners?.add(listener);
					notifyStoreListener(group, listener, state, prevState, getState, updatedKey);
					if (!group.allKeysListeners?.size && !frame.recoverToLive) continue;
					const notifiedListeners = frame.notifiedListeners ?? getFastPathNotifiedListeners(frame);
					frame.notifiedListeners = notifiedListeners;
					frame.recovering = true;
					runLiveListeners({
						group,
						getState,
						prevState,
						updatedKey,
						notifiedListeners
					});
					return;
				}
			} finally {
				fastPathFrames.pop();
			}
			return;
		}
		runLiveListeners({
			group,
			getState,
			prevState,
			updatedKey
		});
	};
	const setState = (key, value, fromStores = false) => {
		if (!hasOwnProperty(state, key)) return;
		const currentValue = state[key];
		const nextValue = applyState(value, () => currentValue);
		if (isSameValue$1(nextValue, currentValue)) return;
		const wasInDispatch = inDispatch;
		inDispatch = true;
		const prevState = state;
		const nextState = {
			...state,
			[key]: nextValue
		};
		state = nextState;
		let superseded = false;
		try {
			if (!fromStores && stores.length) {
				for (const store of stores) {
					store?.setState?.(key, nextValue);
					if (isSameValue$1(state[key], nextValue)) continue;
					superseded = true;
					break;
				}
				if (superseded) {
					let pass = 0;
					for (; pass < MAX_REPAIR_PASSES; pass += 1) {
						let changed = false;
						for (const store of stores) {
							const previousValue = state[key];
							store?.setState?.(key, previousValue);
							if (!isSameValue$1(state[key], previousValue)) changed = true;
						}
						if (!changed) break;
					}
					if (pass === MAX_REPAIR_PASSES) console.warn("Parent stores did not converge after a superseded fan-out; a parent listener may be rewriting this key in a cycle.");
				}
			}
			if (!superseded) {
				const listenerPrevState = state === nextState ? prevState : {
					...state,
					[key]: prevState[key]
				};
				runListeners(syncListenerGroup, listenerPrevState, key);
			}
		} finally {
			inDispatch = wasInDispatch;
		}
		if (!batchListenerGroup.listeners.size) {
			if (!inDispatch) prevStateBatch = state;
			return;
		}
		updatedKeys.add(key);
		if (batchPending) return;
		batchPending = true;
		queueMicrotask(() => {
			batchPending = false;
			const snapshot = state;
			const updatedKeysSnapshot = updatedKeys;
			updatedKeys = /* @__PURE__ */ new Set();
			const prevStateBatchBefore = prevStateBatch;
			runListeners(batchListenerGroup, prevStateBatchBefore, updatedKeysSnapshot);
			if (prevStateBatch === prevStateBatchBefore) prevStateBatch = snapshot;
		});
	};
	const finalStore = {
		getState,
		setState,
		__unstableInternals: {
			setup: storeSetup,
			init: storeInit,
			subscribe: storeSubscribe,
			sync: storeSync,
			batch: storeBatch,
			pick: storePick,
			omit: storeOmit
		}
	};
	return finalStore;
}
/**
* Register a callback function that's called when the store is initialized.
*/
function setup(store, ...args) {
	if (!store) return;
	return getInternal(store, "setup")(...args);
}
/**
* Function that should be called when the store is initialized.
*/
function init(store, ...args) {
	if (!store) return;
	return getInternal(store, "init")(...args);
}
/**
* Registers a listener function that's called after state changes in the store.
*/
function subscribe(store, ...args) {
	if (!store) return;
	return getInternal(store, "subscribe")(...args);
}
/**
* Registers a listener function that's called immediately and synchronously
* whenever the store state changes.
*/
function sync(store, ...args) {
	if (!store) return;
	return getInternal(store, "sync")(...args);
}
/**
* Registers a listener function that's called immediately and after a batch of
* state changes in the store.
*/
function batch(store, ...args) {
	if (!store) return;
	return getInternal(store, "batch")(...args);
}
/**
* Creates a new store with a subset of the current store state and keeps them
* in sync.
*/
function omit(store, ...args) {
	if (!store) return;
	return getInternal(store, "omit")(...args);
}
/**
* Creates a new store with a subset of the current store state and keeps them
* in sync.
*/
function pick(store, ...args) {
	if (!store) return;
	return getInternal(store, "pick")(...args);
}
/**
* Merges multiple stores into a single store.
*/
function mergeStore(...stores) {
	const initialState = {};
	for (const store of stores) {
		const nextState = store?.getState?.();
		if (nextState) Object.assign(initialState, nextState);
	}
	const store = createStore(initialState, ...stores);
	return Object.assign({}, ...stores, store);
}
/**
* Throws when a store prop is passed in conjunction with a default state.
*/
function throwOnConflictingProps(props, store) {
	if (!store) return;
	const defaultKeys = Object.entries(props).filter(([key, value]) => key.startsWith("default") && value !== void 0).map(([key]) => {
		const stateKey = key.replace("default", "");
		return `${stateKey[0]?.toLowerCase() || ""}${stateKey.slice(1)}`;
	});
	if (!defaultKeys.length) return;
	const storeState = store.getState();
	if (!defaultKeys.filter((key) => hasOwnProperty(storeState, key)).length) return;
	throw new Error(`Passing a store prop in conjunction with a default state is not supported.

const store = useSelectStore();
<SelectProvider store={store} defaultValue="Apple" />
                ^             ^

Instead, pass the default state to the topmost store:

const store = useSelectStore({ defaultValue: "Apple" });
<SelectProvider store={store} />

See https://github.com/ariakit/ariakit/pull/2745 for more details.

If there's a particular need for this, please submit a feature request at https://github.com/ariakit/ariakit
`);
}
var MAX_REPAIR_PASSES;
function init_dist() {
	return (init_dist = __esmMin((() => {
		init_dist$2();
		MAX_REPAIR_PASSES = 100;
	})))();
}
//#endregion
//#region ../node_modules/.store/@ariakit/react-store@0.1.12-0QjTp8acZVRryn4UBgu5Mw/node_modules/@ariakit/react-store/dist/index.js
function isStoreKeyArray(value) {
	return Array.isArray(value);
}
function isSameValue(value, other) {
	return value === other || value !== value && other !== other;
}
function hasSameStoreKeys(keys, otherKeys) {
	if (keys?.length !== otherKeys.length) return false;
	for (let index = 0; index < keys.length; index += 1) {
		const key = keys[index];
		if (isSameValue(key, otherKeys[index])) continue;
		return false;
	}
	return true;
}
function useStableStoreKeys(keys) {
	const [stableKeys, setStableKeys] = import_react.useState(() => keys === null ? null : [...keys]);
	if (keys === null) {
		if (stableKeys !== null) setStableKeys(null);
		return null;
	}
	if (hasSameStoreKeys(stableKeys, keys)) return stableKeys;
	const nextKeys = [...keys];
	setStableKeys(nextKeys);
	return nextKeys;
}
function useStoreState(store, keyOrKeysOrSelector = identity, selector) {
	const subscriptionKeys = useStableStoreKeys(isStoreKeyArray(keyOrKeysOrSelector) ? keyOrKeysOrSelector : typeof keyOrKeysOrSelector === "function" ? null : [keyOrKeysOrSelector]);
	const storeSubscribe = import_react.useCallback((callback) => {
		if (!store) return noopSubscribe();
		if (subscriptionKeys?.length === 0) return noopSubscribe();
		return subscribe(store, subscriptionKeys, callback);
	}, [store, subscriptionKeys]);
	const getSnapshot = () => {
		const state = store?.getState();
		if (isStoreKeyArray(keyOrKeysOrSelector)) return selector?.(state);
		if (typeof keyOrKeysOrSelector === "function") return keyOrKeysOrSelector(state);
		if (!state) return;
		if (!hasOwnProperty(state, keyOrKeysOrSelector)) return;
		return state[keyOrKeysOrSelector];
	};
	return (0, import_shim.useSyncExternalStore)(storeSubscribe, getSnapshot, getSnapshot);
}
function getStoreStateObjectKeys(object, selectorKeys) {
	const keys = [];
	let hasSelector = false;
	for (const prop in object) {
		const keyOrSelector = object[prop];
		if (keyOrSelector === void 0) continue;
		if (typeof keyOrSelector === "function") {
			hasSelector = true;
			continue;
		}
		if (keys.includes(keyOrSelector)) continue;
		keys.push(keyOrSelector);
	}
	if (!hasSelector) return keys;
	if (!selectorKeys) return null;
	for (const key of selectorKeys) {
		if (keys.includes(key)) continue;
		keys.push(key);
	}
	return keys;
}
function useStoreStateObject(store, objectOrKeys, object) {
	const stateObject = isStoreKeyArray(objectOrKeys) ? object ?? {} : objectOrKeys;
	const selectorKeys = isStoreKeyArray(objectOrKeys) ? objectOrKeys : void 0;
	const objRef = import_react.useRef({});
	const subscriptionKeys = useStableStoreKeys(getStoreStateObjectKeys(stateObject, selectorKeys));
	const storeSubscribe = import_react.useCallback((callback) => {
		if (!store) return noopSubscribe();
		if (subscriptionKeys?.length === 0) return noopSubscribe();
		return subscribe(store, subscriptionKeys, callback);
	}, [store, subscriptionKeys]);
	const getSnapshot = () => {
		const state = store?.getState();
		let updated = false;
		const obj = objRef.current;
		for (const prop in stateObject) {
			const keyOrSelector = stateObject[prop];
			if (keyOrSelector === void 0) continue;
			if (typeof keyOrSelector === "function") {
				const value = keyOrSelector(state);
				if (!Object.is(value, obj[prop])) {
					obj[prop] = value;
					updated = true;
				}
			}
			if (typeof keyOrSelector === "function") continue;
			const value = state && hasOwnProperty(state, keyOrSelector) ? state[keyOrSelector] : void 0;
			if (!Object.is(value, obj[prop])) {
				obj[prop] = value;
				updated = true;
			}
		}
		if (updated) objRef.current = { ...obj };
		return objRef.current;
	};
	return (0, import_shim.useSyncExternalStore)(storeSubscribe, getSnapshot, getSnapshot);
}
/**
* Synchronizes the store with the props, including parent store props.
* @param store The store to synchronize.
* @param props The props to synchronize with.
* @param key The key of the value prop.
* @param setKey The key of the setValue prop.
*/
function useStoreProps(store, props, key, setKey) {
	const value = hasOwnProperty(props, key) ? props[key] : void 0;
	const setValue = setKey ? props[setKey] : void 0;
	const hasSetValue = !!setValue;
	const propsRef = useLiveRef({
		value,
		setValue
	});
	useSafeLayoutEffect(() => {
		if (!hasSetValue) return;
		return subscribe(store, [key], (state, prev) => {
			const { value, setValue } = propsRef.current;
			if (!setValue) return;
			if (isSameValue(state[key], prev[key])) return;
			if (isSameValue(state[key], value)) return;
			setValue(state[key]);
		});
	}, [
		store,
		key,
		hasSetValue,
		propsRef
	]);
	useSafeLayoutEffect(() => {
		if (value === void 0) return;
		store.setState(key, value);
		return batch(store, [key], () => {
			if (value === void 0) return;
			store.setState(key, value);
		});
	});
}
/**
* Creates a React store from a core store object and returns a tuple with the
* store and a function to update the store.
* @param createStore A function that receives the props and returns a core
*   store object.
* @param props The props to pass to the createStore function.
*/
function useStore(createStore, props) {
	const [store, setStore] = import_react.useState(() => createStore(props));
	useSafeLayoutEffect(() => init(store), [store]);
	const useState = import_react.useCallback((keyOrSelector) => useStoreState(store, keyOrSelector), [store]);
	return [import_react.useMemo(() => ({
		...store,
		useState
	}), [store, useState]), useEvent(() => {
		setStore((store) => createStore({
			...props,
			...store.getState()
		}));
	})];
}
var import_react, import_shim, noopSubscribe;
function init_dist$1() {
	return (init_dist$1 = __esmMin((() => {
		init_dist$3();
		init_dist();
		init_dist$2();
		import_react = /* @__PURE__ */ __toESM(require_react(), 1);
		import_shim = require_shim();
		noopSubscribe = () => () => {};
	})))();
}
//#endregion
//#region ../node_modules/.store/@ariakit/react-components@0.7.0-b-7fAlfpqRg2Jp6O33r7Tg/node_modules/@ariakit/react-components/dist/__chunks/CDh2UhnG.js
/**
* Dispatches a copy of a keyboard event on an element and records the event it
* copies as its source. Returns whether the copy's default action was not
* prevented.
*/
function fireProxiedKeyboardEvent(element, source, eventInit) {
	const { KeyboardEvent } = getWindow(element);
	const event = new KeyboardEvent(source.type, eventInit);
	sourceEvents.set(event, getKeyboardEventSource(source));
	return element.dispatchEvent(event);
}
/**
* Returns the event that the user triggered for a keyboard event that Composite
* dispatched again, or the event itself.
*/
function getKeyboardEventSource(event) {
	return sourceEvents.get(event) ?? event;
}
var sourceEvents;
function init_CDh2UhnG() {
	return (init_CDh2UhnG = __esmMin((() => {
		init_dist$2();
		sourceEvents = /* @__PURE__ */ new WeakMap();
	})))();
}
//#endregion
export { init_focusable_context as C, init_C4_D9PgF as D, hasTreeFocus as E, resolvedTrulyDisabledFromElement as O, FocusableContext as S, getTreeActiveElement as T, subscribe as _, useStore as a, init_focusable as b, useStoreStateObject as c, init as d, init_dist as f, setup as g, pick as h, init_dist$1 as i, trulyDisabledFromElement as k, batch as l, omit as m, getKeyboardEventSource as n, useStoreProps as o, mergeStore as p, init_CDh2UhnG as r, useStoreState as s, fireProxiedKeyboardEvent as t, createStore as u, sync as v, accessibleWhenDisabledFromProps as w, useFocusable as x, throwOnConflictingProps as y };
