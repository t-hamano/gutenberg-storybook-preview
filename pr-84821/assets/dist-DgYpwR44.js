import { n as __esmMin, o as __toESM } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_react } from "./react-Bujh4FgW.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C1RZKCc6.js";
//#region ../node_modules/.store/@ariakit/utils@0.2.1-YOB-0_MVoA4gcTIEeAgqYA/node_modules/@ariakit/utils/dist/index.js
/**
* Array helpers used by Ariakit packages.
* @module Array utilities
*/
/**
* Transforms `arg` into an array if it's not already.
* @example
* toArray("a"); // ["a"]
* toArray(["a"]); // ["a"]
*/
function toArray(arg) {
	if (Array.isArray(arg)) return arg;
	return typeof arg !== "undefined" ? [arg] : [];
}
/**
* Flattens a 2D array into a one-dimensional array.
* @example
* flatten2DArray([["a"], ["b"], ["c"]]); // ["a", "b", "c"]
*
* @returns {Array} A one-dimensional array.
*/
function flatten2DArray(array) {
	const flattened = [];
	for (const row of array) flattened.push(...row);
	return flattened;
}
/**
* Immutably reverses an array.
* @example
* reverseArray(["a", "b", "c"]); // ["c", "b", "a"]
* @returns {Array} Reversed array.
*/
function reverseArray(array) {
	return array.slice().reverse();
}
/**
* Empty function.
*/
function noop(..._) {}
/**
* Compares two objects.
* @example
* shallowEqual({ a: "a" }, {}); // false
* shallowEqual({ a: "a" }, { b: "b" }); // false
* shallowEqual({ a: "a" }, { a: "a" }); // true
* shallowEqual({ a: "a" }, { a: "a", b: "b" }); // false
*/
function shallowEqual(a, b) {
	if (a === b) return true;
	if (!a) return false;
	if (!b) return false;
	if (typeof a !== "object") return false;
	if (typeof b !== "object") return false;
	const aKeys = Object.keys(a);
	const bKeys = Object.keys(b);
	const { length } = aKeys;
	if (bKeys.length !== length) return false;
	for (const key of aKeys) if (a[key] !== b[key]) return false;
	return true;
}
/**
* Receives a `setState` argument and calls it with `currentValue` if it's a
* function. Otherwise return the argument as the new value.
* @example
* applyState((value) => value + 1, 1); // 2
* applyState(2, 1); // 2
*/
function applyState(argument, currentValue) {
	if (isUpdater(argument)) return argument(isLazyValue(currentValue) ? currentValue() : currentValue);
	return argument;
}
function isUpdater(argument) {
	return typeof argument === "function";
}
function isLazyValue(value) {
	return typeof value === "function";
}
/**
* Checks whether `prop` is an own property of `obj` or not.
*/
function hasOwnProperty(object, prop) {
	if (typeof Object.hasOwn === "function") return Object.hasOwn(object, prop);
	return Object.prototype.hasOwnProperty.call(object, prop);
}
/**
* Receives functions as arguments and returns a new function that calls all.
*/
function chain(...fns) {
	return (...args) => {
		for (const fn of fns) if (typeof fn === "function") fn(...args);
	};
}
/**
* Removes diacritics from a string.
*/
function normalizeString(str) {
	return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}
/**
* Omits specific keys from an object.
* @example
* omit({ a: "a", b: "b" }, ["a"]); // { b: "b" }
*/
function omit(object, keys) {
	const result = { ...object };
	for (const key of keys) if (hasOwnProperty(result, key)) delete result[key];
	return result;
}
/**
* Picks specific keys from an object.
* @example
* pick({ a: "a", b: "b" }, ["a"]); // { a: "a" }
*/
function pick(object, paths) {
	const result = {};
	for (const key of paths) if (hasOwnProperty(object, key)) result[key] = object[key];
	return result;
}
/**
* Returns the same argument.
*/
function identity(value) {
	return value;
}
/**
* Runs after the next paint.
*/
function afterPaint(cb = noop) {
	let raf = requestAnimationFrame(() => {
		raf = requestAnimationFrame(cb);
	});
	return () => cancelAnimationFrame(raf);
}
/**
* Logs a warning only once for each message and key.
* @example
* if (process.env.NODE_ENV !== "production") {
*   warnOnce("Warning");
* }
*/
function warnOnce(message, key) {
	const warningKey = key || defaultWarnOnceKey;
	let messages = warningMessages.get(warningKey);
	if (!messages) {
		messages = /* @__PURE__ */ new Set();
		warningMessages.set(warningKey, messages);
	}
	if (messages.has(message)) return;
	messages.add(message);
	console.warn(message);
}
/**
* Asserts that a condition is true, otherwise throws an error.
* @example
* invariant(
*   condition,
*   process.env.NODE_ENV !== "production" && "Invariant failed"
* );
*/
function invariant(condition, message) {
	if (condition) return;
	if (typeof message !== "string") throw new Error("Invariant failed");
	throw new Error(message);
}
/**
* Similar to `Object.keys` but returns a type-safe array of keys.
*/
function getKeys(obj) {
	return Object.keys(obj);
}
/**
* Checks whether a boolean event prop (e.g., hideOnInteractOutside) was
* intentionally set to false, either with a boolean value or a callback that
* returns false.
*/
function isFalsyBooleanCallback(booleanOrCallback, ...args) {
	const result = typeof booleanOrCallback === "function" ? booleanOrCallback(...args) : booleanOrCallback;
	if (result == null) return false;
	return !result;
}
/**
* Checks whether something is disabled or not based on its props.
*/
function disabledFromProps(props) {
	return props.disabled || props["aria-disabled"] === true || props["aria-disabled"] === "true";
}
/**
* Checks whether something is disabled or not based on its DOM attributes.
*/
function disabledFromElement(element) {
	if (element.getAttribute("aria-disabled") === "true") return true;
	if ("disabled" in element && element.disabled === true) return true;
	return false;
}
/**
* Removes undefined values from an object. Only own properties are copied, so
* an inherited enumerable property never becomes an own property of the result.
* A `__proto__` key is dropped because assigning it would replace the prototype
* of the result instead of adding a property to it.
*/
function removeUndefinedValues(obj) {
	const result = {};
	for (const key in obj) {
		if (!hasOwnProperty(obj, key)) continue;
		if (key === "__proto__") continue;
		if (obj[key] !== void 0) result[key] = obj[key];
	}
	return result;
}
function defaultValue(...values) {
	for (const value of values) if (value !== void 0) return value;
}
function checkIsBrowser() {
	return typeof window !== "undefined" && !!window.document?.createElement;
}
function lookupGetter(prototype, name) {
	let target = prototype;
	while (target) {
		const descriptor = Object.getOwnPropertyDescriptor(target, name);
		if (descriptor?.get) return descriptor.get;
		target = Object.getPrototypeOf(target);
	}
}
function isWindow(value) {
	if (!value) return false;
	return value.window === value;
}
function isDocument(value) {
	if (!value) return false;
	if (!nodeTypeGetter) return value.nodeType === 9;
	try {
		return nodeTypeGetter.call(value) === 9;
	} catch {
		return false;
	}
}
function ownsDocument(view, ownerDocument) {
	try {
		return view.document === ownerDocument;
	} catch {
		return false;
	}
}
/**
* Returns the document `node` belongs to, or the current one when it has none.
*/
function getDocument(node) {
	if (!node) return document;
	if (isDocument(node)) return node;
	if (isWindow(node)) return node.document;
	const nodeDocument = node.ownerDocument;
	if (isDocument(nodeDocument)) return nodeDocument;
	return document;
}
/**
* Returns the window `node` belongs to, or the current one when it has none.
*/
function getWindow(node) {
	if (!node) return self;
	if (isWindow(node)) return node;
	const nodeDocument = getDocument(node);
	const { defaultView } = nodeDocument;
	if (isWindow(defaultView) && ownsDocument(defaultView, nodeDocument)) return defaultView;
	return window;
}
/**
* Returns the focused element for `node`'s document, resolving into a focused
* frame's own document unless `frame` is `false`.
* @example
* // Focus inside a frame, as the frame element rather than the inner element.
* getActiveElement(document.getElementById("dialog"), { frame: false });
*/
function getActiveElement(node, { frame = true, activeDescendant = false } = {}) {
	const ownerDocument = getDocument(node);
	const activeElement = activeElementGetter ? activeElementGetter.call(ownerDocument) : ownerDocument.activeElement;
	if (!activeElement?.nodeName) return null;
	if (frame && isFrame(activeElement) && activeElement.contentDocument?.body) return getActiveElement(activeElement.contentDocument.body, {
		frame,
		activeDescendant
	});
	if (activeDescendant) {
		const id = activeElement.getAttribute("aria-activedescendant");
		if (id) {
			const element = getDocument(activeElement).getElementById(id);
			if (element) return element;
		}
	}
	return activeElement;
}
/**
* Similar to `Element.prototype.contains`, but a little bit faster when
* `element` is the same as `child`.
* @example
* contains(
*   document.getElementById("parent"),
*   document.getElementById("child")
* );
*/
function contains(parent, child) {
	return parent === child || parent.contains(child);
}
/**
* Checks whether the given event target is an element.
*
* `event.target` and `event.relatedTarget` are `EventTarget`s, which aren't
* necessarily elements — for example `window` or an `XMLHttpRequest` when an
* event is dispatched programmatically. Calling `Element`-only methods such as
* `hasAttribute` on those throws, so guard with this before treating them as
* elements. When you only need a `Node` — for example to call `contains` — use
* `isNode` instead.
*
* It tests `nodeType` rather than `instanceof Element` so that elements coming
* from same-origin child frames (which `addGlobalEventListener` also listens
* on) aren't wrongly rejected for belonging to a different realm.
* @example
* if (isElement(event.target)) {
*   event.target.hasAttribute("data-active");
* }
*/
function isElement(target) {
	return target?.nodeType === 1;
}
/**
* Checks whether the given event target is a node.
*
* Like `isElement`, but only requires the target to be a `Node` rather than an
* element — useful before calling `contains`, which accepts any node. It still
* rejects non-node `EventTarget`s (such as `window` or an `XMLHttpRequest`)
* that would make `contains` throw.
* @example
* if (isNode(event.target)) {
*   contains(element, event.target);
* }
*/
function isNode(target) {
	return typeof target?.nodeType === "number";
}
/**
* Checks whether `element` is a frame element.
*/
function isFrame(element) {
	return element.tagName === "IFRAME";
}
/**
* Checks whether `element` is a native HTML button element.
* @example
* isButton(document.querySelector("button")); // true
* isButton(document.querySelector("input[type='button']")); // true
* isButton(document.querySelector("div")); // false
* isButton(document.querySelector("input[type='text']")); // false
* isButton(document.querySelector("div[role='button']")); // false
*/
function isButton(element) {
	const tagName = element.tagName.toLowerCase();
	if (tagName === "button") return true;
	if (tagName === "input" && element.type) return buttonInputTypes.indexOf(element.type) !== -1;
	return false;
}
/**
* Checks if the element is visible or not.
*/
function isVisible(element) {
	if (typeof element.checkVisibility === "function") return element.checkVisibility();
	const htmlElement = element;
	return htmlElement.offsetWidth > 0 || htmlElement.offsetHeight > 0 || element.getClientRects().length > 0;
}
/**
* Check whether the given element is a text field, where text field is defined
* by the ability to select within the input.
* @example
* isTextField(document.querySelector("div")); // false
* isTextField(document.querySelector("input")); // true
* isTextField(document.querySelector("input[type='button']")); // false
* isTextField(document.querySelector("textarea")); // true
*/
function isTextField(element) {
	try {
		if (element.tagName === "TEXTAREA") return true;
		if (element.tagName !== "INPUT") return false;
		return element.selectionStart !== null;
	} catch (_error) {
		return false;
	}
}
/**
* Check whether the given element is a text field or a content editable
* element.
*/
function isTextbox(element) {
	return element.isContentEditable || isTextField(element);
}
/**
* Returns the value of the text field or content editable element as a string.
*/
function getTextboxValue(element) {
	if (isTextField(element)) return element.value;
	if (element.isContentEditable) {
		const range = getDocument(element).createRange();
		range.selectNodeContents(element);
		return range.toString();
	}
	return "";
}
/**
* Returns the start and end offsets of the selection in the element.
*/
function getTextboxSelection(element) {
	let start = 0;
	let end = 0;
	if (isTextField(element)) {
		start = element.selectionStart || 0;
		end = element.selectionEnd || 0;
	} else if (element.isContentEditable) {
		const selection = getDocument(element).getSelection();
		if (selection?.rangeCount && selection.anchorNode && contains(element, selection.anchorNode) && selection.focusNode && contains(element, selection.focusNode)) {
			const range = selection.getRangeAt(0);
			const nextRange = range.cloneRange();
			nextRange.selectNodeContents(element);
			nextRange.setEnd(range.startContainer, range.startOffset);
			start = nextRange.toString().length;
			nextRange.setEnd(range.endContainer, range.endOffset);
			end = nextRange.toString().length;
		}
	}
	return {
		start,
		end
	};
}
/**
* Returns the popup role from the element's role attribute, if it has one.
*/
function getPopupRole(element, fallback) {
	const role = element?.getAttribute("role");
	if (role && allowedPopupRoles.indexOf(role) !== -1) return role;
	return fallback;
}
/**
* Returns the item role based on the popup role.
*/
function getItemRoleByPopupRole(popupRole) {
	if (popupRole == null) return;
	if (!hasOwnProperty(itemRoleByPopupRole, popupRole)) return;
	return itemRoleByPopupRole[popupRole];
}
/**
* Returns the item role attribute based on the popup's role.
*/
function getPopupItemRole(element, fallback) {
	const popupRole = getPopupRole(element);
	if (typeof popupRole !== "string") return fallback;
	return getItemRoleByPopupRole(popupRole) ?? fallback;
}
/**
* Returns the scrolling container element of a given element.
*/
function getScrollingElement(element) {
	if (!element) return null;
	const isScrollableOverflow = (overflow) => {
		if (overflow === "auto") return true;
		if (overflow === "scroll") return true;
		return false;
	};
	if (element.clientHeight && element.scrollHeight > element.clientHeight) {
		const { overflowY } = getComputedStyle(element);
		if (isScrollableOverflow(overflowY)) return element;
	} else if (element.clientWidth && element.scrollWidth > element.clientWidth) {
		const { overflowX } = getComputedStyle(element);
		if (isScrollableOverflow(overflowX)) return element;
	}
	const doc = getDocument(element);
	return getScrollingElement(element.parentElement) || doc.scrollingElement || doc.body;
}
/**
* SelectionRange only works on a few types of input. Calling
* `setSelectionRange` on an unsupported input type may throw an error on
* certain browsers. To avoid it, we check if its type supports SelectionRange
* first. It will be a noop to non-supported types until we find a workaround.
*
* @see
* https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/setSelectionRange
*/
function setSelectionRange(element, ...args) {
	if (/text|search|password|tel|url/i.test(element.type)) element.setSelectionRange(...args);
}
/**
* Sort the items based on their DOM position.
*/
function sortBasedOnDOMPosition(items, getElement) {
	const pairs = items.map((item, index) => [index, item]);
	let isOrderDifferent = false;
	pairs.sort(([indexA, a], [indexB, b]) => {
		const elementA = getElement(a);
		const elementB = getElement(b);
		if (elementA === elementB) return 0;
		if (!elementA || !elementB) return 0;
		if (isElementPreceding(elementA, elementB)) {
			if (indexA > indexB) isOrderDifferent = true;
			return -1;
		}
		if (indexA < indexB) isOrderDifferent = true;
		return 1;
	});
	if (isOrderDifferent) return pairs.map(([_, item]) => item);
	return items;
}
function isElementPreceding(a, b) {
	return Boolean(b.compareDocumentPosition(a) & Node.DOCUMENT_POSITION_PRECEDING);
}
/**
* Browser and platform detection helpers.
* @module Platform utilities
*/
/**
* Detects if the device has touch capabilities.
*/
function isTouchDevice() {
	return canUseDOM && !!navigator.maxTouchPoints;
}
/**
* Detects Apple device.
*/
function isApple() {
	if (!canUseDOM) return false;
	return /mac|iphone|ipad|ipod/i.test(navigator.platform);
}
/**
* Detects Safari browser.
*/
function isSafari() {
	return canUseDOM && isApple() && /apple/i.test(navigator.vendor);
}
/**
* Detects Firefox browser.
*/
function isFirefox() {
	return canUseDOM && /firefox\//i.test(navigator.userAgent);
}
/**
* Detects Mac computer.
*/
function isMac() {
	return canUseDOM && navigator.platform.startsWith("Mac") && !isTouchDevice();
}
/**
* Event helpers for dispatching and interpreting browser events.
* @module Event utilities
*/
/**
* Returns `true` if `event` has been fired within a React Portal element.
*/
function isPortalEvent(event) {
	const { currentTarget, target } = event;
	if (!currentTarget) return false;
	if (!isNode(target)) return true;
	return !contains(currentTarget, target);
}
/**
* Returns `true` if `event.target` and `event.currentTarget` are the same.
*/
function isSelfTarget(event) {
	return event.target === event.currentTarget;
}
function isActivatableNavigationTarget(element) {
	if (!isElement(element)) return false;
	const target = element;
	const tagName = target.tagName.toLowerCase();
	if (tagName === "a") return true;
	if (tagName === "button" && target.type === "submit") return true;
	if (tagName === "input" && target.type === "submit") return true;
	return false;
}
/**
* Checks whether the user event is triggering a page navigation in a new tab.
*/
function isOpeningInNewTab(event) {
	const isAppleDevice = isApple();
	if (isAppleDevice && !event.metaKey) return false;
	if (!isAppleDevice && !event.ctrlKey) return false;
	return isActivatableNavigationTarget(event.currentTarget);
}
/**
* Checks whether the user event is triggering a download.
*/
function isDownloading(event) {
	if (!event.altKey) return false;
	return isActivatableNavigationTarget(event.currentTarget);
}
/**
* Creates and dispatches an event.
* @example
* fireEvent(document.getElementById("id"), "blur", {
*   bubbles: true,
*   cancelable: true,
* });
*/
function fireEvent(element, type, eventInit) {
	const { Event } = getWindow(element);
	const event = new Event(type, eventInit);
	return element.dispatchEvent(event);
}
/**
* Creates and dispatches a blur event.
* @example
* fireBlurEvent(document.getElementById("id"));
*/
function fireBlurEvent(element, eventInit) {
	const { FocusEvent } = getWindow(element);
	const event = new FocusEvent("blur", eventInit);
	const defaultAllowed = element.dispatchEvent(event);
	const bubbleInit = {
		...eventInit,
		bubbles: true
	};
	element.dispatchEvent(new FocusEvent("focusout", bubbleInit));
	return defaultAllowed;
}
function getClickEventInit(view, eventInit) {
	const init = eventInit ?? {};
	const WindowConstructor = view.Window;
	const eventView = typeof WindowConstructor === "function" && view instanceof WindowConstructor ? view : null;
	return new Proxy({}, { get(_target, key) {
		if (key === "view") return eventView;
		if (key === "composed") return true;
		if (key === "pointerId") return init.pointerId ?? -1;
		if (key === "pointerType") return init.pointerType ?? "";
		if (hasOwnProperty(resetAttributes, key)) return void 0;
		return Reflect.get(init, key);
	} });
}
/**
* Creates and dispatches a click event.
*
* The event is a `PointerEvent` built by the window that owns the element, the
* way browsers dispatch it, falling back to a `MouseEvent` where that window
* has no `PointerEvent`. Its `view` is that window when it is a genuine
* `Window`, or `null` otherwise, and it is composed. It reports no pointer
* behind the click unless the caller passes one, and reports every other
* pointer attribute at its default value, the way a click always does.
* @example
* fireClickEvent(document.getElementById("id"));
*/
function fireClickEvent(element, eventInit) {
	const view = getWindow(element);
	const event = new (view.PointerEvent ?? view.MouseEvent)("click", getClickEventInit(view, eventInit));
	return element.dispatchEvent(event);
}
/**
* Checks whether the focus/blur event is happening from/to outside of the
* container element.
* @example
* const element = document.getElementById("id");
* element.addEventListener("blur", (event) => {
*   if (isFocusEventOutside(event)) {
*     // ...
*   }
* });
*/
function isFocusEventOutside(event, container) {
	const containerElement = container || event.currentTarget;
	const relatedTarget = event.relatedTarget;
	return !isNode(relatedTarget) || !contains(containerElement, relatedTarget);
}
/**
* Checks whether the event is an input event.
*/
function isInputEvent(event) {
	return event.type === "input";
}
/**
* Runs a callback on the next animation frame, but before a certain event.
*/
function queueBeforeEvent(element, type, callback, timeout) {
	const createTimer = (callback) => {
		if (timeout) {
			const timerId = setTimeout(callback, timeout);
			return () => clearTimeout(timerId);
		}
		const timerId = requestAnimationFrame(callback);
		return () => cancelAnimationFrame(timerId);
	};
	const cancelTimer = createTimer(() => {
		element.removeEventListener(type, callSync, true);
		callback();
	});
	const callSync = () => {
		cancelTimer();
		callback();
	};
	element.addEventListener(type, callSync, {
		once: true,
		capture: true
	});
	return () => {
		cancelTimer();
		element.removeEventListener(type, callSync, true);
	};
}
/**
* Adds a global event listener, including on child frames.
*/
function addGlobalEventListener(type, listener, options, scope = window) {
	const children = [];
	try {
		scope.document.addEventListener(type, listener, options);
		for (const frame of Array.from(scope.frames)) children.push(addGlobalEventListener(type, listener, options, frame));
	} catch {}
	const removeEventListener = () => {
		try {
			scope.document.removeEventListener(type, listener, options);
		} catch {}
		for (const remove of children) remove();
	};
	return removeEventListener;
}
function hasNegativeTabIndex(element) {
	return Number.parseInt(element.getAttribute("tabindex") || "0", 10) < 0;
}
/**
* Checks whether `element` is focusable or not.
* @example
* isFocusable(document.querySelector("input")); // true
* isFocusable(document.querySelector("input[tabindex='-1']")); // true
* isFocusable(document.querySelector("input[hidden]")); // false
* isFocusable(document.querySelector("input:disabled")); // false
*/
function isFocusable(element) {
	if (!element.matches(selector)) return false;
	if (!isVisible(element)) return false;
	if (element.closest("[inert]")) return false;
	return true;
}
/**
* Checks whether `element` is tabbable or not.
* @example
* isTabbable(document.querySelector("input")); // true
* isTabbable(document.querySelector("input[tabindex='-1']")); // false
* isTabbable(document.querySelector("input[hidden]")); // false
* isTabbable(document.querySelector("input:disabled")); // false
*/
function isTabbable(element) {
	if (!isFocusable(element)) return false;
	if (hasNegativeTabIndex(element)) return false;
	if (!("form" in element)) return true;
	if (!element.form) return true;
	if (element.checked) return true;
	if (element.type !== "radio") return true;
	const radioGroup = element.form.elements.namedItem(element.name);
	if (!radioGroup) return true;
	if (!("length" in radioGroup)) return true;
	const activeElement = getActiveElement(element);
	if (!activeElement) return true;
	if (activeElement === element) return true;
	if (!("form" in activeElement)) return true;
	if (activeElement.form !== element.form) return true;
	if (!("name" in activeElement)) return true;
	if (activeElement.name !== element.name) return true;
	return false;
}
/**
* Returns all the focusable elements in `container`.
*/
function getAllFocusableIn(container, includeContainer) {
	const elements = Array.from(container.querySelectorAll(selector));
	if (includeContainer) elements.unshift(container);
	const focusableElements = elements.filter(isFocusable);
	focusableElements.forEach((element, i) => {
		if (!isFrame(element)) return;
		const frameBody = element.contentDocument?.body;
		if (!frameBody) return;
		focusableElements.splice(i, 1, ...getAllFocusableIn(frameBody));
	});
	return focusableElements;
}
/**
* Returns the first focusable element in `container`.
*/
function getFirstFocusableIn(container, includeContainer) {
	const [first] = getAllFocusableIn(container, includeContainer);
	return first || null;
}
/**
* Returns all the tabbable elements in `container`, including the container
* itself.
*/
function getAllTabbableIn(container, includeContainer, fallbackToFocusable) {
	const tabbableElements = Array.from(container.querySelectorAll(selector)).filter(isTabbable);
	if (includeContainer && isTabbable(container)) tabbableElements.unshift(container);
	tabbableElements.forEach((element, i) => {
		if (!isFrame(element)) return;
		const frameBody = element.contentDocument?.body;
		if (!frameBody) return;
		const allFrameTabbable = getAllTabbableIn(frameBody, false, fallbackToFocusable);
		tabbableElements.splice(i, 1, ...allFrameTabbable);
	});
	if (!tabbableElements.length && fallbackToFocusable) return getAllFocusableIn(container);
	return tabbableElements;
}
/**
* Returns the first tabbable element in `container`, including the container
* itself if it's tabbable.
*/
function getFirstTabbableIn(container, includeContainer, fallbackToFocusable) {
	if (includeContainer && isTabbable(container)) {
		if (!isFrame(container)) return container;
		const containerFrameBody = container.contentDocument?.body;
		if (!containerFrameBody) return container;
		const frameTabbable = getFirstTabbableIn(containerFrameBody, false, fallbackToFocusable);
		if (frameTabbable) return frameTabbable;
	}
	const elements = container.querySelectorAll(selector);
	for (const element of elements) {
		if (!isTabbable(element)) continue;
		if (isFrame(element)) {
			const frameBody = element.contentDocument?.body;
			if (!frameBody) return element;
			const frameTabbable = getFirstTabbableIn(frameBody, false, fallbackToFocusable);
			if (frameTabbable) return frameTabbable;
			continue;
		}
		return element;
	}
	if (fallbackToFocusable) return getFirstFocusableIn(container);
	return null;
}
function getTabbableInDirection({ container, includeContainer, reverse, fallbackToEdge, fallbackToFocusable }) {
	const activeElement = getActiveElement(container);
	const allFocusable = getAllFocusableIn(container, includeContainer);
	if (reverse) allFocusable.reverse();
	const activeIndex = allFocusable.indexOf(activeElement);
	const candidates = allFocusable.slice(activeIndex + 1);
	return candidates.find(isTabbable) || (fallbackToEdge ? allFocusable.find(isTabbable) : null) || (fallbackToFocusable ? candidates[0] : null) || null;
}
/**
* Returns the next tabbable element in `container`.
*/
function getNextTabbableIn(container, includeContainer, fallbackToFirst, fallbackToFocusable) {
	return getTabbableInDirection({
		container,
		includeContainer,
		fallbackToEdge: fallbackToFirst,
		fallbackToFocusable
	});
}
/**
* Returns the next tabbable element in the document.
*/
function getNextTabbable(fallbackToFirst, fallbackToFocusable) {
	return getNextTabbableIn(document.body, false, fallbackToFirst, fallbackToFocusable);
}
/**
* Returns the previous tabbable element in `container`.
*
*/
function getPreviousTabbableIn(container, includeContainer, fallbackToLast, fallbackToFocusable) {
	return getTabbableInDirection({
		container,
		includeContainer,
		reverse: true,
		fallbackToEdge: fallbackToLast,
		fallbackToFocusable
	});
}
/**
* Returns the previous tabbable element in the document.
*/
function getPreviousTabbable(fallbackToLast, fallbackToFocusable) {
	return getPreviousTabbableIn(document.body, false, fallbackToLast, fallbackToFocusable);
}
/**
* Checks if `element` has focus. Elements that are referenced by
* `aria-activedescendant` are also considered.
* @example
* hasFocus(document.getElementById("id"));
*/
function hasFocus(element) {
	const activeElement = getActiveElement(element);
	if (!activeElement) return false;
	if (activeElement === element) return true;
	const activeDescendant = activeElement.getAttribute("aria-activedescendant");
	if (!activeDescendant) return false;
	return activeDescendant === element.id;
}
/**
* Checks if `element` has focus within. Elements that are referenced by
* `aria-activedescendant` are also considered.
* @example
* hasFocusWithin(document.getElementById("id"));
*/
function hasFocusWithin(element) {
	const activeElement = getActiveElement(element);
	if (!activeElement) return false;
	if (contains(element, activeElement)) return true;
	const activeDescendant = activeElement.getAttribute("aria-activedescendant");
	if (!activeDescendant) return false;
	if (!("id" in element)) return false;
	if (activeDescendant === element.id) return true;
	return !!element.querySelector(`#${CSS.escape(activeDescendant)}`);
}
/**
* Disable focus on `element`.
*/
function disableFocus(element) {
	const currentTabindex = element.getAttribute("tabindex") ?? "";
	element.setAttribute("data-tabindex", currentTabindex);
	element.setAttribute("tabindex", "-1");
}
/**
* Makes elements inside container not tabbable.
*/
function disableFocusIn(container, includeContainer) {
	const tabbableElements = getAllTabbableIn(container, includeContainer);
	for (const element of tabbableElements) disableFocus(element);
}
/**
* Restores tabbable elements inside container that were affected by
* disableFocusIn.
*/
function restoreFocusIn(container) {
	const elements = container.querySelectorAll("[data-tabindex]");
	const restoreTabIndex = (element) => {
		const tabindex = element.getAttribute("data-tabindex");
		element.removeAttribute("data-tabindex");
		if (tabindex) element.setAttribute("tabindex", tabindex);
		else element.removeAttribute("tabindex");
	};
	if (container.hasAttribute("data-tabindex")) restoreTabIndex(container);
	for (const element of elements) restoreTabIndex(element);
}
function createUndoCallback(callback) {
	return async () => {
		const redo = await callback?.();
		return createUndoCallback(async () => {
			await redo?.();
			return callback;
		});
	};
}
/**
* Creates an undo manager with undo and redo stacks.
*/
function createUndoManager({ limit = 100 } = {}) {
	const undoStack = [];
	let redoStack = [];
	let currentGroup = null;
	const canUndo = () => undoStack.length > 0;
	const canRedo = () => redoStack.length > 0;
	const undo = async () => {
		if (!canUndo()) return;
		currentGroup = null;
		redoStack.push(await undoStack.pop()?.());
	};
	const redo = async () => {
		if (!canRedo()) return;
		currentGroup = null;
		undoStack.push(await redoStack.pop()?.());
	};
	const execute = async (callback, group) => {
		if (!callback) return;
		const sameGroup = group === currentGroup;
		currentGroup = group ?? null;
		const nextIndex = sameGroup ? Math.max(0, undoStack.length - 1) : undoStack.length;
		const undoCallback = await callback();
		if (!undoCallback) return;
		redoStack = [];
		const currentUndo = undoStack[nextIndex];
		undoStack[nextIndex] = createUndoCallback(async () => {
			await undoCallback?.();
			const currentRedo = await currentUndo?.();
			return async () => {
				await currentRedo?.();
				await callback?.();
			};
		});
		while (undoStack.length > limit) undoStack.shift();
	};
	return {
		canUndo,
		canRedo,
		undo,
		redo,
		execute
	};
}
var defaultWarnOnceKey, warningMessages, canUseDOM, nodeTypeGetter, activeElementGetter, buttonInputTypes, allowedPopupRoles, itemRoleByPopupRole, resetAttributes, selector;
function init_dist() {
	return (init_dist = __esmMin((() => {
		defaultWarnOnceKey = {};
		warningMessages = /* @__PURE__ */ new WeakMap();
		canUseDOM = checkIsBrowser();
		nodeTypeGetter = canUseDOM ? lookupGetter(Object.getPrototypeOf(window.document), "nodeType") : void 0;
		activeElementGetter = canUseDOM ? lookupGetter(Object.getPrototypeOf(window.document), "activeElement") : void 0;
		buttonInputTypes = [
			"button",
			"color",
			"file",
			"image",
			"reset",
			"submit"
		];
		allowedPopupRoles = [
			"dialog",
			"menu",
			"listbox",
			"tree",
			"grid"
		];
		itemRoleByPopupRole = {
			menu: "menuitem",
			listbox: "option",
			tree: "treeitem"
		};
		resetAttributes = {
			width: true,
			height: true,
			pressure: true,
			tangentialPressure: true,
			tiltX: true,
			tiltY: true,
			twist: true,
			altitudeAngle: true,
			azimuthAngle: true,
			isPrimary: true,
			coalescedEvents: true,
			predictedEvents: true,
			persistentDeviceId: true
		};
		selector = "input:not([type='hidden']):not([disabled]), select:not([disabled]), textarea:not([disabled]), a[href], button:not([disabled]), [tabindex], summary, iframe, object, embed, area[href], audio[controls], video[controls], [contenteditable]:not([contenteditable='false'])";
		createUndoManager();
	})))();
}
//#endregion
//#region ../node_modules/.store/@ariakit/react-utils@0.2.7-w6BBn4LVqMPN0vaiP2Jw4Q/node_modules/@ariakit/react-utils/dist/index.js
/**
* Helpers for working with refs, elements, and props.
* @module General utilities
*/
/**
* Sets both a function and object React ref.
*
* Returns a callback ref cleanup function when one is provided.
*/
function setRef(ref, value) {
	if (typeof ref === "function") {
		const cleanup = ref(value);
		if (typeof cleanup === "function") return cleanup;
	} else if (ref) ref.current = value;
}
/**
* Checks if an element is a valid React element with a ref.
*/
function isValidElementWithRef(element) {
	if (!element) return false;
	if (!(0, import_react$1.isValidElement)(element)) return false;
	if ("ref" in element.props) return true;
	if ("ref" in element) return true;
	return false;
}
/**
* Gets the ref property from a React element.
*/
function getRefProperty(element) {
	if (!isValidElementWithRef(element)) return null;
	return { ...element.props }.ref || element.ref;
}
/**
* Merges two sets of props.
*/
function mergeProps(base, overrides) {
	const props = { ...base };
	for (const key in overrides) {
		if (!hasOwnProperty(overrides, key)) continue;
		if (key === "__proto__") continue;
		if (key === "className") {
			const prop = "className";
			const baseClass = base[prop];
			const overrideClass = overrides[prop];
			if (baseClass && overrideClass) props[prop] = `${baseClass} ${overrideClass}`;
			else props[prop] = overrideClass || baseClass;
			continue;
		}
		if (key === "style") {
			const prop = "style";
			props[prop] = base[prop] ? {
				...base[prop],
				...overrides[prop]
			} : overrides[prop];
			continue;
		}
		const overrideValue = overrides[key];
		if (overrideValue === void 0) continue;
		if (key.startsWith("on")) {
			if (typeof overrideValue !== "function") continue;
			const baseValue = base[key];
			if (typeof baseValue === "function") {
				props[key] = (...args) => {
					overrideValue(...args);
					baseValue(...args);
				};
				continue;
			}
		}
		props[key] = overrideValue;
	}
	return props;
}
/**
* Returns a value that never changes even if the argument is updated.
* @example
* function Component({ prop }) {
*   const initialProp = useInitialValue(prop);
* }
*/
function useInitialValue(value) {
	const [initialValue] = (0, import_react$1.useState)(value);
	return initialValue;
}
/**
* Creates a `React.RefObject` that is constantly updated with the incoming
* value.
* @example
* function Component({ prop }) {
*   const propRef = useLiveRef(prop);
* }
*/
function useLiveRef(value) {
	const ref = (0, import_react$1.useRef)(value);
	useSafeLayoutEffect(() => {
		ref.current = value;
	});
	return ref;
}
/**
* Creates a stable callback function that has access to the latest state and
* can be used within event handlers and effect callbacks. Throws when used in
* the render phase.
* @example
* function Component(props) {
*   const onClick = useEvent(props.onClick);
*   React.useEffect(() => {}, [onClick]);
* }
*/
function useEvent(callback) {
	const ref = (0, import_react$1.useRef)(() => {
		throw new Error("Cannot call an event handler while rendering.");
	});
	useEventUpdate(() => {
		ref.current = callback;
	});
	return (0, import_react$1.useCallback)((...args) => ref.current?.(...args), []);
}
/**
* Creates a React state that calls a callback function whenever the state
* changes and rolls back to the previous state on cleanup.
*/
function useTransactionState(callback) {
	const [state, setState] = (0, import_react$1.useState)(null);
	useSafeLayoutEffect(() => {
		if (state == null) return;
		if (!callback) return;
		let prevState = null;
		callback((prev) => {
			prevState = prev;
			return state;
		});
		return () => {
			callback(prevState);
		};
	}, [state, callback]);
	return [state, setState];
}
/**
* Merges React Refs into a single memoized function ref so you can pass it to
* an element.
* @example
* const Component = React.forwardRef((props, ref) => {
*   const internalRef = React.useRef();
*   return <div {...props} ref={useMergeRefs(internalRef, ref)} />;
* });
*/
function useMergeRefs(...refs) {
	return (0, import_react$1.useMemo)(() => {
		if (!refs.some(Boolean)) return;
		return (value) => {
			const refEffects = [];
			for (const ref of refs) {
				if (!ref) continue;
				const cleanup = setRef(ref, value);
				refEffects.push({
					ref,
					cleanup: typeof cleanup === "function" ? cleanup : void 0
				});
			}
			if (!refEffects.some((effect) => effect.cleanup)) return;
			return () => {
				for (const { ref, cleanup } of refEffects) if (cleanup) cleanup();
				else setRef(ref, null);
			};
		};
	}, refs);
}
function useIdPolyfill(defaultId) {
	const [id, setId] = (0, import_react$1.useState)(defaultId);
	useSafeLayoutEffect(() => {
		if (defaultId || id) return;
		const random = Math.random().toString(36).slice(2, 8);
		setId(`id-${random}`);
	}, [defaultId, id]);
	return defaultId || id;
}
function useReactIdWithDefault(defaultId) {
	const id = useReactId();
	return defaultId || id;
}
/**
* Generates a unique ID. Uses React's useId if available.
*/
function useId(defaultId) {
	return useCompatibleId(defaultId);
}
/**
* Returns the tag name by parsing an element ref.
* @example
* function Component(props) {
*   const ref = React.useRef();
*   const tagName = useTagName(ref, "button"); // div
*   return <div ref={ref} {...props} />;
* }
*/
function useTagName(refOrElement, type) {
	const stringOrUndefined = (type) => {
		if (typeof type !== "string") return;
		return type;
	};
	const [tagName, setTagName] = (0, import_react$1.useState)(() => stringOrUndefined(type));
	useSafeLayoutEffect(() => {
		const element = refOrElement && "current" in refOrElement ? refOrElement.current : refOrElement;
		setTagName(element?.tagName.toLowerCase() || stringOrUndefined(type));
	}, [refOrElement, type]);
	return tagName;
}
/**
* Returns the attribute value of an element.
* @example
* function Component(props) {
*   const ref = React.useRef();
*   const role = useAttribute(ref, "role", props.role);
*   return <div ref={ref} {...props} />;
* }
*/
function useAttribute(refOrElement, attributeName, defaultValue) {
	const initialValue = useInitialValue(defaultValue);
	const [attribute, setAttribute] = (0, import_react$1.useState)(initialValue);
	(0, import_react$1.useEffect)(() => {
		const element = refOrElement && "current" in refOrElement ? refOrElement.current : refOrElement;
		if (!element) return;
		const callback = () => {
			const value = element.getAttribute(attributeName);
			setAttribute(value == null ? initialValue : value);
		};
		const observer = new MutationObserver(callback);
		observer.observe(element, { attributeFilter: [attributeName] });
		callback();
		return () => observer.disconnect();
	}, [
		refOrElement,
		attributeName,
		initialValue
	]);
	return attribute;
}
/**
* A `React.useEffect` that will not run on the first render.
*/
function useUpdateEffect(effect, deps) {
	const mounted = (0, import_react$1.useRef)(false);
	(0, import_react$1.useEffect)(() => {
		if (mounted.current) return effect();
		mounted.current = true;
	}, deps);
	(0, import_react$1.useEffect)(() => () => {
		mounted.current = false;
	}, []);
}
/**
* A `React.useLayoutEffect` that will not run on the first render.
*/
function useUpdateLayoutEffect(effect, deps) {
	const mounted = (0, import_react$1.useRef)(false);
	useSafeLayoutEffect(() => {
		if (mounted.current) return effect();
		mounted.current = true;
	}, deps);
	useSafeLayoutEffect(() => () => {
		mounted.current = false;
	}, []);
}
/**
* A React hook similar to `useState` and `useReducer`, but with the only
* purpose of re-rendering the component.
*/
function useForceUpdate() {
	return (0, import_react$1.useReducer)(() => [], []);
}
/**
* Returns an event callback similar to `useEvent`, but this also accepts a
* boolean value, which will be turned into a function.
*/
function useBooleanEvent(booleanOrCallback) {
	return useEvent(typeof booleanOrCallback === "function" ? booleanOrCallback : () => booleanOrCallback);
}
/**
* Returns props with an additional `wrapElement` prop.
*/
function useWrapElement(props, callback, deps = []) {
	const wrapElement = (0, import_react$1.useCallback)((element) => {
		if (props.wrapElement) element = props.wrapElement(element);
		return callback(element);
	}, [...deps, props.wrapElement]);
	return {
		...props,
		wrapElement
	};
}
/**
* Merges the portalRef prop and returns a `domReady` to be used in the
* components that use Portal underneath.
*/
function usePortalRef(portalProp = false, portalRefProp) {
	const [portalNode, setPortalNode] = (0, import_react$1.useState)(null);
	return {
		portalRef: useMergeRefs(setPortalNode, portalRefProp),
		portalNode,
		domReady: !portalProp || portalNode
	};
}
/**
* A hook that passes metadata props around without leaking them to the DOM.
*/
function useMetadataProps(props, key, value) {
	const parent = props.onLoadedMetadataCapture;
	const onLoadedMetadataCapture = (0, import_react$1.useMemo)(() => {
		return Object.assign(noop.bind(null), parent, ...value !== void 0 ? [{ [key]: value }] : []);
	}, [
		parent,
		key,
		value
	]);
	return [parent?.[key], { onLoadedMetadataCapture }];
}
/**
* Returns a function that checks whether the mouse is moving.
*/
function useIsMouseMoving() {
	(0, import_react$1.useEffect)(() => {
		if (hasInstalledGlobalEventListeners) return;
		addGlobalEventListener("mousemove", setMouseMoving, true);
		addGlobalEventListener("mousedown", resetMouseMoving, true);
		addGlobalEventListener("mouseup", resetMouseMoving, true);
		addGlobalEventListener("keydown", resetMouseMoving, true);
		addGlobalEventListener("scroll", resetMouseMoving, true);
		hasInstalledGlobalEventListeners = true;
	}, []);
	return useEvent(() => mouseMoving);
}
function hasMouseMovement(event) {
	const movementX = event.movementX || event.screenX - previousScreenX;
	const movementY = event.movementY || event.screenY - previousScreenY;
	previousScreenX = event.screenX;
	previousScreenY = event.screenY;
	return movementX || movementY || true;
}
function setMouseMoving(event) {
	if (!hasMouseMovement(event)) return;
	mouseMoving = true;
}
function resetMouseMoving() {
	mouseMoving = false;
}
/**
* The same as `React.forwardRef` but passes the `ref` as a prop and returns a
* component with the same generic type.
*
* Props holding `undefined` are dropped, so passing one behaves the same as
* omitting it and the component keeps the value it computes for itself.
*/
function forwardRef(render) {
	const Role = import_react.forwardRef((props, ref) => render(removeUndefinedValues({
		...props,
		ref
	})));
	Role.displayName = render.displayName || render.name;
	return Role;
}
/**
* The same as `React.memo` but returns a component with the same generic type.
*/
function memo(Component, propsAreEqual) {
	return import_react.memo(Component, propsAreEqual);
}
/**
* Creates a React element that supports the `render` and `wrapElement` props.
*/
function createElement(Type, props) {
	const { wrapElement, render, ...rest } = props;
	const mergedRef = useMergeRefs(props.ref, getRefProperty(render));
	let element;
	if (import_react.isValidElement(render)) {
		const renderProps = {
			...render.props,
			ref: mergedRef
		};
		element = import_react.cloneElement(render, mergeProps(rest, renderProps));
	} else if (render) element = render(rest);
	else element = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Type, { ...rest });
	if (wrapElement) return wrapElement(element);
	return element;
}
/**
* Creates a component hook that accepts props and returns props so they can be
* passed to a React element.
*/
function createHook(useProps) {
	const useRole = (props = {}) => {
		return useProps(props);
	};
	useRole.displayName = useProps.name;
	return useRole;
}
/**
* Creates an Ariakit store context with hooks and provider components.
*/
function createStoreContext(providers = [], scopedProviders = []) {
	const context = import_react.createContext(void 0);
	const scopedContext = import_react.createContext(void 0);
	const useContext = () => import_react.useContext(context);
	const useScopedContext = (onlyScoped = false) => {
		const scoped = import_react.useContext(scopedContext);
		const store = useContext();
		if (onlyScoped) return scoped;
		return scoped || store;
	};
	const useProviderContext = () => {
		const scoped = import_react.useContext(scopedContext);
		const store = useContext();
		if (scoped && scoped === store) return;
		return store;
	};
	const ContextProvider = (props) => {
		return providers.reduceRight((children, Provider) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Provider, {
			...props,
			children
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(context.Provider, { ...props }));
	};
	const ScopedContextProvider = (props) => {
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContextProvider, {
			...props,
			children: scopedProviders.reduceRight((children, Provider) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Provider, {
				...props,
				children
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(scopedContext.Provider, { ...props }))
		});
	};
	return {
		context,
		scopedContext,
		useContext,
		useScopedContext,
		useProviderContext,
		ContextProvider,
		ScopedContextProvider
	};
}
var import_react, import_react$1, import_jsx_runtime, _React, useReactId, useEventUpdate, useSafeLayoutEffect, useCompatibleId, hasInstalledGlobalEventListeners, mouseMoving, previousScreenX, previousScreenY;
function init_dist$1() {
	return (init_dist$1 = __esmMin((() => {
		init_dist();
		import_react = /* @__PURE__ */ __toESM(require_react(), 1);
		import_react$1 = require_react();
		import_jsx_runtime = require_jsx_runtime();
		_React = { ...import_react };
		useReactId = _React.useId;
		_React.useDeferredValue;
		useEventUpdate = _React.useInsertionEffect ?? ((callback) => callback());
		useSafeLayoutEffect = canUseDOM ? import_react$1.useLayoutEffect : import_react$1.useEffect;
		useCompatibleId = useReactId ? useReactIdWithDefault : useIdPolyfill;
		hasInstalledGlobalEventListeners = false;
		mouseMoving = false;
		previousScreenX = 0;
		previousScreenY = 0;
	})))();
}
//#endregion
export { hasFocusWithin as $, defaultValue as A, reverseArray as At, getDocument as B, useUpdateLayoutEffect as C, noop as Ct, applyState as D, queueBeforeEvent as Dt, afterPaint as E, pick as Et, fireClickEvent as F, warnOnce as Ft, getPopupItemRole as G, getItemRoleByPopupRole as H, fireEvent as I, getScrollingElement as J, getPopupRole as K, flatten2DArray as L, disabledFromElement as M, shallowEqual as Mt, disabledFromProps as N, sortBasedOnDOMPosition as Nt, chain as O, removeUndefinedValues as Ot, fireBlurEvent as P, toArray as Pt, hasFocus as Q, getActiveElement as R, useUpdateEffect as S, isVisible as St, addGlobalEventListener as T, omit as Tt, getKeys as U, getFirstTabbableIn as V, getNextTabbable as W, getTextboxValue as X, getTextboxSelection as Y, getWindow as Z, useMetadataProps as _, isSafari as _t, init_dist$1 as a, isButton as at, useTagName as b, isTextbox as bt, useAttribute as c, isFalsyBooleanCallback as ct, useForceUpdate as d, isFocusable as dt, hasOwnProperty as et, useId as f, isInputEvent as ft, useMergeRefs as g, isPortalEvent as gt, useLiveRef as h, isOpeningInNewTab as ht, forwardRef as i, isApple as it, disableFocusIn as j, setSelectionRange as jt, contains as k, restoreFocusIn as kt, useBooleanEvent as l, isFirefox as lt, useIsMouseMoving as m, isNode as mt, createHook as n, init_dist as nt, memo as o, isDownloading as ot, useInitialValue as p, isMac as pt, getPreviousTabbable as q, createStoreContext as r, invariant as rt, setRef as s, isElement as st, createElement as t, identity as tt, useEvent as u, isFocusEventOutside as ut, usePortalRef as v, isSelfTarget as vt, useWrapElement as w, normalizeString as wt, useTransactionState as x, isTouchDevice as xt, useSafeLayoutEffect as y, isTextField as yt, getAllTabbableIn as z };
