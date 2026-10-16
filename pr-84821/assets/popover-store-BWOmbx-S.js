import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_react } from "./react-Bujh4FgW.js";
import { t as require_react_dom } from "./react-dom-Cvcx0Gdb.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C1RZKCc6.js";
import { a as init_floating_ui_dom, i as flip, l as shift, n as autoUpdate, o as limitShift, r as computePosition, s as offset, t as arrow, u as size } from "./floating-ui.dom-CuUnCMhL.js";
import { A as defaultValue, B as getDocument, Ct as noop, D as applyState, E as afterPaint, O as chain, Ot as removeUndefinedValues, R as getActiveElement, S as useUpdateEffect, T as addGlobalEventListener, V as getFirstTabbableIn, W as getNextTabbable, Z as getWindow, _t as isSafari, a as init_dist, d as useForceUpdate, dt as isFocusable, f as useId, g as useMergeRefs, h as useLiveRef, i as forwardRef, it as isApple, j as disableFocusIn, k as contains, kt as restoreFocusIn, l as useBooleanEvent, mt as isNode, n as createHook, nt as init_dist$1, pt as isMac, q as getPreviousTabbable, r as createStoreContext, rt as invariant, s as setRef, st as isElement, t as createElement, u as useEvent, ut as isFocusEventOutside, v as usePortalRef, w as useWrapElement, y as useSafeLayoutEffect, z as getAllTabbableIn } from "./dist-DgYpwR44.js";
import { C as init_focusable_context, S as FocusableContext, _ as subscribe, a as useStore, b as init_focusable, c as useStoreStateObject, f as init_dist$3, g as setup, i as init_dist$2, m as omit, n as getKeyboardEventSource, o as useStoreProps, p as mergeStore, r as init_CDh2UhnG, s as useStoreState, u as createStore, v as sync, x as useFocusable, y as throwOnConflictingProps } from "./CDh2UhnG-eN0icMPG.js";
//#region ../node_modules/.store/@ariakit/react-components@0.7.0-SPgsuugSDrFrx2DGVqJK3g/node_modules/@ariakit/react-components/dist/disclosure/disclosure-context.js
var ctx$2, useDisclosureProviderContext, DisclosureContextProvider, DisclosureScopedContextProvider;
function init_disclosure_context() {
	return (init_disclosure_context = __esmMin((() => {
		init_dist();
		ctx$2 = createStoreContext();
		ctx$2.useContext;
		ctx$2.useScopedContext;
		useDisclosureProviderContext = ctx$2.useProviderContext;
		DisclosureContextProvider = ctx$2.ContextProvider;
		DisclosureScopedContextProvider = ctx$2.ScopedContextProvider;
	})))();
}
//#endregion
//#region ../node_modules/.store/@ariakit/react-components@0.7.0-SPgsuugSDrFrx2DGVqJK3g/node_modules/@ariakit/react-components/dist/dialog/dialog-context.js
var import_react$13, ctx$1, useDialogProviderContext, DialogContextProvider, DialogScopedContextProvider, DialogHeadingContext, DialogDescriptionContext;
function init_dialog_context() {
	return (init_dialog_context = __esmMin((() => {
		init_disclosure_context();
		init_dist();
		import_react$13 = require_react();
		ctx$1 = createStoreContext([DisclosureContextProvider], [DisclosureScopedContextProvider]);
		ctx$1.useContext;
		ctx$1.useScopedContext;
		useDialogProviderContext = ctx$1.useProviderContext;
		DialogContextProvider = ctx$1.ContextProvider;
		DialogScopedContextProvider = ctx$1.ScopedContextProvider;
		DialogHeadingContext = (0, import_react$13.createContext)(void 0);
		DialogDescriptionContext = (0, import_react$13.createContext)(void 0);
	})))();
}
//#endregion
//#region ../node_modules/.store/@ariakit/react-components@0.7.0-SPgsuugSDrFrx2DGVqJK3g/node_modules/@ariakit/react-components/dist/disclosure/disclosure-content.js
function afterTimeout(timeoutMs, cb) {
	const timeoutId = setTimeout(cb, timeoutMs);
	return () => clearTimeout(timeoutId);
}
function parseCSSTime(time) {
	const value = time?.trim() || "0s";
	const multiplier = value.endsWith("ms") ? 1 : 1e3;
	const parsed = Number.parseFloat(value) * multiplier;
	return Number.isNaN(parsed) ? 0 : parsed;
}
function getEndTime(names, delays, durations) {
	const nameList = names.split(",");
	const delayList = delays.split(",");
	const durationList = durations.split(",");
	let endTime = 0;
	for (const [index, name] of nameList.entries()) {
		if (name.trim() === "none") continue;
		const delay = parseCSSTime(delayList[index % delayList.length]);
		const duration = parseCSSTime(durationList[index % durationList.length]);
		endTime = Math.max(endTime, delay + duration);
	}
	return endTime;
}
function getElementEndTime(element) {
	const { transitionProperty, transitionDuration, transitionDelay, animationName, animationDuration, animationDelay } = getComputedStyle(element);
	return Math.max(getEndTime(transitionProperty, transitionDelay, transitionDuration), getEndTime(animationName, animationDelay, animationDuration));
}
function isHidden(mounted, hidden, alwaysVisible) {
	return !alwaysVisible && hidden !== false && (!mounted || !!hidden);
}
var import_react$12, import_jsx_runtime$7, import_react_dom$2, TagName$7, useDisclosureContent, DisclosureContentImpl;
function init_disclosure_content() {
	return (init_disclosure_content = __esmMin((() => {
		init_disclosure_context();
		init_dialog_context();
		init_dist();
		init_dist$1();
		import_react$12 = require_react();
		import_jsx_runtime$7 = require_jsx_runtime();
		init_dist$2();
		import_react_dom$2 = require_react_dom();
		TagName$7 = "div";
		useDisclosureContent = createHook(function useDisclosureContent({ store, alwaysVisible, unstable_otherElementRef: otherElementRef, ...props }) {
			const context = useDisclosureProviderContext();
			store = store || context;
			invariant(store, "DisclosureContent must receive a `store` prop or be wrapped in a DisclosureProvider component.");
			const ref = (0, import_react$12.useRef)(null);
			const id = useId(props.id);
			const [transition, setTransition] = (0, import_react$12.useState)(null);
			const { open, mounted, animated, contentElement } = useStoreStateObject(store, {
				open: "open",
				mounted: "mounted",
				animated: "animated",
				contentElement: "contentElement"
			});
			const otherElement = useStoreState(store.disclosure, "contentElement");
			const hasClosedRef = (0, import_react$12.useRef)(false);
			useSafeLayoutEffect(() => {
				if (!ref.current) return;
				store?.setContentElement(ref.current);
			}, [store]);
			useSafeLayoutEffect(() => {
				let previousAnimated;
				store?.setState("animated", (animated) => {
					previousAnimated = animated;
					return true;
				});
				return () => {
					if (previousAnimated === void 0) return;
					store?.setState("animated", previousAnimated);
				};
			}, [store]);
			useSafeLayoutEffect(() => {
				if (!animated) {
					if (!open) {
						hasClosedRef.current = true;
						setTransition(null);
					} else if (hasClosedRef.current) {
						hasClosedRef.current = false;
						setTransition("enter");
					}
					return;
				}
				if (!contentElement?.isConnected) {
					setTransition(null);
					return;
				}
				return afterPaint(() => {
					setTransition(open ? "enter" : mounted ? "leave" : null);
				});
			}, [
				animated,
				contentElement,
				open,
				mounted
			]);
			useSafeLayoutEffect(() => {
				if (!store) return;
				if (!animated) return;
				if (!transition) return;
				if (!contentElement) return;
				const stopAnimation = () => store?.setState("animating", false);
				const stopAnimationSync = () => (0, import_react_dom$2.flushSync)(stopAnimation);
				if (transition === "leave" && open) return;
				if (transition === "enter" && !open) return;
				if (typeof animated === "number") return afterTimeout(animated, stopAnimationSync);
				const elements = [contentElement];
				if (otherElement) elements.push(otherElement);
				const relatedElement = otherElementRef?.current;
				if (relatedElement) elements.push(relatedElement);
				const timeout = Math.max(...elements.map(getElementEndTime));
				if (!timeout) {
					if (transition === "enter") store.setState("animated", false);
					stopAnimation();
					return;
				}
				return afterTimeout(Math.max(timeout - 1e3 / 60, 0), stopAnimationSync);
			}, [
				store,
				animated,
				contentElement,
				otherElement,
				otherElementRef,
				open,
				transition
			]);
			props = useWrapElement(props, (element) => /* @__PURE__ */ (0, import_jsx_runtime$7.jsx)(DialogScopedContextProvider, {
				value: store,
				children: element
			}), [store]);
			const hidden = isHidden(mounted, props.hidden, alwaysVisible);
			const styleProp = props.style;
			const style = (0, import_react$12.useMemo)(() => {
				if (hidden) return {
					...styleProp,
					display: "none"
				};
				return styleProp;
			}, [hidden, styleProp]);
			props = {
				"data-open": open || void 0,
				"data-enter": transition === "enter" || void 0,
				"data-leave": transition === "leave" || void 0,
				hidden,
				...props,
				id,
				ref: useMergeRefs(id ? store.setContentElement : null, ref, props.ref),
				style
			};
			return removeUndefinedValues(props);
		});
		DisclosureContentImpl = forwardRef(function DisclosureContentImpl(props) {
			const htmlProps = useDisclosureContent(props);
			return createElement(TagName$7, htmlProps);
		});
		forwardRef(function DisclosureContent({ unmountOnHide, ...props }) {
			const context = useDisclosureProviderContext();
			const store = props.store || context;
			if (useStoreState(store, ["mounted"], (state) => !unmountOnHide || state?.mounted) === false) return null;
			return /* @__PURE__ */ (0, import_jsx_runtime$7.jsx)(DisclosureContentImpl, { ...props });
		});
	})))();
}
//#endregion
//#region ../node_modules/.store/@ariakit/components@0.1.14-LY5snkwIfivHs3k-20UEzg/node_modules/@ariakit/components/dist/disclosure/disclosure-store.js
function getParentHideRequest(store) {
	const onHideRequest = store?.unstable_onHideRequest;
	const requestHide = store?.unstable_requestHide;
	if (!onHideRequest) return;
	if (!requestHide) return;
	return {
		onHideRequest,
		requestHide
	};
}
/**
* Creates a disclosure store.
*/
function createDisclosureStore(props = {}) {
	const store = props.store || props.disclosure ? mergeStore(props.store, omit(props.disclosure, ["contentElement", "disclosureElement"])) : void 0;
	throwOnConflictingProps(props, store);
	const syncState = store?.getState();
	const open = defaultValue(props.open, syncState?.open, props.defaultOpen, false);
	const animated = defaultValue(props.animated, syncState?.animated, false);
	const initialState = {
		open,
		animated,
		animating: !!animated && open,
		mounted: open,
		contentElement: defaultValue(syncState?.contentElement, null),
		disclosureElement: defaultValue(syncState?.disclosureElement, null)
	};
	const disclosure = store ? createStore(initialState, store) : createStore(initialState);
	setup(disclosure, () => sync(disclosure, ["animated", "animating"], (state) => {
		if (state.animated) return;
		disclosure.setState("animating", false);
	}));
	setup(disclosure, () => subscribe(disclosure, ["open"], () => {
		if (!disclosure.getState().animated) return;
		disclosure.setState("animating", true);
	}));
	setup(disclosure, () => sync(disclosure, ["open", "animating"], (state) => {
		disclosure.setState("mounted", state.open || state.animating);
	}));
	const parentHideRequest = getParentHideRequest(props.store);
	const hideHandlers = /* @__PURE__ */ new Map();
	const onHideRequest = parentHideRequest?.onHideRequest ?? ((handler) => {
		if (handler === requestHide) return () => {};
		hideHandlers.set(handler, (hideHandlers.get(handler) ?? 0) + 1);
		return () => {
			const count = hideHandlers.get(handler);
			if (count == null) return;
			if (count > 1) {
				hideHandlers.set(handler, count - 1);
				return;
			}
			hideHandlers.delete(handler);
		};
	});
	const requestHide = parentHideRequest?.requestHide ?? ((hide) => {
		const handlers = [...hideHandlers.keys()];
		const runHandler = (index) => {
			const handler = handlers[index];
			if (!handler) {
				hide();
				return;
			}
			handler(() => runHandler(index + 1));
		};
		runHandler(0);
	});
	setup(disclosure, () => {
		if (!props.disclosure) return;
		return onHideRequest(props.disclosure.unstable_requestHide);
	});
	const setOpen = (value) => {
		const { open } = disclosure.getState();
		const nextOpen = applyState(value, open);
		if (!open || nextOpen) {
			disclosure.setState("open", nextOpen);
			return;
		}
		requestHide(() => disclosure.setState("open", false));
	};
	return {
		...disclosure,
		disclosure: props.disclosure,
		setOpen,
		show: () => disclosure.setState("open", true),
		hide: () => setOpen(false),
		toggle: () => setOpen((open) => !open),
		unstable_onHideRequest: onHideRequest,
		unstable_requestHide: requestHide,
		stopAnimation: () => disclosure.setState("animating", false),
		setContentElement: (value) => disclosure.setState("contentElement", value),
		setDisclosureElement: (value) => disclosure.setState("disclosureElement", value)
	};
}
function init_disclosure_store() {
	return (init_disclosure_store = __esmMin((() => {
		init_dist$3();
		init_dist$1();
	})))();
}
//#endregion
//#region ../node_modules/.store/@ariakit/react-components@0.7.0-SPgsuugSDrFrx2DGVqJK3g/node_modules/@ariakit/react-components/dist/disclosure/disclosure-store.js
function useDisclosureStoreProps(store, update, props) {
	useUpdateEffect(update, [
		props.store,
		props.disclosure,
		update
	]);
	useStoreProps(store, props, "open", "setOpen");
	useStoreProps(store, props, "mounted", "setMounted");
	useStoreProps(store, props, "animated");
	return Object.assign(store, { disclosure: props.disclosure });
}
/**
* Creates a disclosure store to control the state of
* [Disclosure](https://ariakit.com/components/disclosure) components.
* @see https://ariakit.com/components/disclosure
* @example
* ```jsx
* const disclosure = useDisclosureStore();
*
* <Disclosure store={disclosure}>Disclosure</Disclosure>
* <DisclosureContent store={disclosure}>Content</DisclosureContent>
* ```
*/
function useDisclosureStore(props = {}) {
	const [store, update] = useStore(createDisclosureStore, props);
	return useDisclosureStoreProps(store, update, props);
}
function init_disclosure_store$1() {
	return (init_disclosure_store$1 = __esmMin((() => {
		init_dist();
		init_dist$2();
		init_disclosure_store();
	})))();
}
//#endregion
//#region ../node_modules/.store/@ariakit/react-components@0.7.0-SPgsuugSDrFrx2DGVqJK3g/node_modules/@ariakit/react-components/dist/popover/popover-context.js
var ctx, usePopoverContext, usePopoverProviderContext, PopoverContextProvider, PopoverScopedContextProvider;
function init_popover_context() {
	return (init_popover_context = __esmMin((() => {
		init_dialog_context();
		init_dist();
		ctx = createStoreContext([DialogContextProvider], [DialogScopedContextProvider]);
		usePopoverContext = ctx.useContext;
		ctx.useScopedContext;
		usePopoverProviderContext = ctx.useProviderContext;
		PopoverContextProvider = ctx.ContextProvider;
		PopoverScopedContextProvider = ctx.ScopedContextProvider;
	})))();
}
//#endregion
//#region ../node_modules/.store/@ariakit/react-components@0.7.0-SPgsuugSDrFrx2DGVqJK3g/node_modules/@ariakit/react-components/dist/focusable/focusable-container.js
var import_jsx_runtime$6, TagName$6, useFocusableContainer;
function init_focusable_container() {
	return (init_focusable_container = __esmMin((() => {
		init_focusable_context();
		init_dist();
		import_jsx_runtime$6 = require_jsx_runtime();
		TagName$6 = "div";
		useFocusableContainer = createHook(function useFocusableContainer({ autoFocusOnShow = true, ...props }) {
			props = useWrapElement(props, (element) => /* @__PURE__ */ (0, import_jsx_runtime$6.jsx)(FocusableContext.Provider, {
				value: autoFocusOnShow,
				children: element
			}), [autoFocusOnShow]);
			return props;
		});
		forwardRef(function FocusableContainer(props) {
			const htmlProps = useFocusableContainer(props);
			return createElement(TagName$6, htmlProps);
		});
	})))();
}
//#endregion
//#region ../node_modules/.store/@ariakit/react-components@0.7.0-SPgsuugSDrFrx2DGVqJK3g/node_modules/@ariakit/react-components/dist/heading/heading-context.js
var import_react$11, HeadingContext;
function init_heading_context() {
	return (init_heading_context = __esmMin((() => {
		import_react$11 = require_react();
		HeadingContext = (0, import_react$11.createContext)(0);
	})))();
}
//#endregion
//#region ../node_modules/.store/@ariakit/react-components@0.7.0-SPgsuugSDrFrx2DGVqJK3g/node_modules/@ariakit/react-components/dist/heading/heading-level.js
/**
* A component that sets the heading level for its children. It doesn't render
* any HTML element, just sets the
* [`level`](https://ariakit.com/reference/heading-level#level) prop on the
* context.
* @see https://ariakit.com/components/heading
* @example
* ```jsx
* <HeadingLevel>
*   <Heading>Heading 1</Heading>
*   <HeadingLevel>
*     <Heading>Heading 2</Heading>
*   </HeadingLevel>
* </HeadingLevel>
* ```
*/
function HeadingLevel({ level, children }) {
	const contextLevel = (0, import_react$10.useContext)(HeadingContext);
	const nextLevel = Math.max(Math.min(level || contextLevel + 1, 6), 1);
	return /* @__PURE__ */ (0, import_jsx_runtime$5.jsx)(HeadingContext.Provider, {
		value: nextLevel,
		children
	});
}
var import_react$10, import_jsx_runtime$5;
function init_heading_level() {
	return (init_heading_level = __esmMin((() => {
		init_heading_context();
		import_react$10 = require_react();
		import_jsx_runtime$5 = require_jsx_runtime();
	})))();
}
//#endregion
//#region ../node_modules/.store/@ariakit/react-components@0.7.0-SPgsuugSDrFrx2DGVqJK3g/node_modules/@ariakit/react-components/dist/visually-hidden/visually-hidden.js
/**
* Returns styles to visually hide an element while keeping it accessible to
* screen readers.
*/
function getVisuallyHiddenStyle(style) {
	return {
		borderWidth: 0,
		clipPath: "inset(50%)",
		height: "1px",
		margin: "-1px",
		overflow: "hidden",
		padding: 0,
		position: "absolute",
		whiteSpace: "nowrap",
		width: "1px",
		...style
	};
}
var TagName$5, useVisuallyHidden;
function init_visually_hidden() {
	return (init_visually_hidden = __esmMin((() => {
		init_dist();
		TagName$5 = "span";
		useVisuallyHidden = createHook(function useVisuallyHidden(props) {
			props = {
				...props,
				style: getVisuallyHiddenStyle(props.style)
			};
			return props;
		});
		forwardRef(function VisuallyHidden(props) {
			const htmlProps = useVisuallyHidden(props);
			return createElement(TagName$5, htmlProps);
		});
	})))();
}
//#endregion
//#region ../node_modules/.store/@ariakit/react-components@0.7.0-SPgsuugSDrFrx2DGVqJK3g/node_modules/@ariakit/react-components/dist/focus-trap/focus-trap.js
var TagName$4, useFocusTrap, FocusTrap;
function init_focus_trap() {
	return (init_focus_trap = __esmMin((() => {
		init_visually_hidden();
		init_dist();
		TagName$4 = "span";
		useFocusTrap = createHook(function useFocusTrap(props) {
			props = {
				"data-focus-trap": "",
				tabIndex: 0,
				"aria-hidden": true,
				...props,
				style: {
					position: "fixed",
					top: 0,
					left: 0,
					...props.style
				}
			};
			props = useVisuallyHidden(props);
			return props;
		});
		FocusTrap = forwardRef(function FocusTrap(props) {
			const htmlProps = useFocusTrap(props);
			return createElement(TagName$4, htmlProps);
		});
	})))();
}
//#endregion
//#region ../node_modules/.store/@ariakit/react-components@0.7.0-SPgsuugSDrFrx2DGVqJK3g/node_modules/@ariakit/react-components/dist/portal/portal-context.js
var import_react$9, PortalContext;
function init_portal_context() {
	return (init_portal_context = __esmMin((() => {
		import_react$9 = require_react();
		PortalContext = (0, import_react$9.createContext)(null);
	})))();
}
//#endregion
//#region ../node_modules/.store/@ariakit/react-components@0.7.0-SPgsuugSDrFrx2DGVqJK3g/node_modules/@ariakit/react-components/dist/portal/portal.js
function getRootElement(element) {
	const doc = getDocument(element);
	const { fullscreenElement } = doc;
	const HTMLElementClass = getWindow(element).HTMLElement;
	if (HTMLElementClass && fullscreenElement instanceof HTMLElementClass) return fullscreenElement;
	return doc.body;
}
function getPortalElement(element, portalElement) {
	if (!portalElement) return getDocument(element).createElement("div");
	if (typeof portalElement === "function") return portalElement(element);
	return portalElement;
}
function getRandomId(prefix = "id") {
	return `${prefix ? `${prefix}-` : ""}${Math.random().toString(36).slice(2, 8)}`;
}
function queueFocus(element) {
	queueMicrotask(() => {
		element?.focus();
	});
}
function attachPortalRef(ref, node) {
	return {
		ref,
		node,
		cleanup: setRef(ref, node)
	};
}
function detachPortalRef(attached) {
	if (typeof attached.cleanup === "function") attached.cleanup();
	else setRef(attached.ref, null);
}
var import_react$8, import_jsx_runtime$4, import_react_dom$1, TagName$3, usePortal;
function init_portal() {
	return (init_portal = __esmMin((() => {
		init_focus_trap();
		init_portal_context();
		init_dist();
		init_dist$1();
		import_react$8 = require_react();
		import_jsx_runtime$4 = require_jsx_runtime();
		import_react_dom$1 = require_react_dom();
		TagName$3 = "div";
		usePortal = createHook(function usePortal({ preserveTabOrder, preserveTabOrderAnchor, portalElement, portalRef, portal = true, ...props }) {
			const ref = (0, import_react$8.useRef)(null);
			const refProp = useMergeRefs(ref, props.ref);
			const context = (0, import_react$8.useContext)(PortalContext);
			const [portalNode, setPortalNode] = (0, import_react$8.useState)(null);
			const [anchorPortalNode, setAnchorPortalNode] = (0, import_react$8.useState)(null);
			const outerBeforeRef = (0, import_react$8.useRef)(null);
			const innerBeforeRef = (0, import_react$8.useRef)(null);
			const innerAfterRef = (0, import_react$8.useRef)(null);
			const outerAfterRef = (0, import_react$8.useRef)(null);
			const portalRefProp = useLiveRef(portalRef);
			const attachedPortalRefRef = (0, import_react$8.useRef)(null);
			useSafeLayoutEffect(() => {
				const element = ref.current;
				if (!element || !portal) {
					setPortalNode(null);
					return;
				}
				const portalEl = getPortalElement(element, portalElement);
				if (!portalEl) {
					setPortalNode(null);
					return;
				}
				const isPortalInDocument = portalEl.isConnected;
				if (!isPortalInDocument) (context || getRootElement(element)).appendChild(portalEl);
				if (!portalEl.id) portalEl.id = element.id ? `portal/${element.id}` : getRandomId();
				setPortalNode(portalEl);
				attachedPortalRefRef.current = attachPortalRef(portalRefProp.current, portalEl);
				return () => {
					const attached = attachedPortalRefRef.current;
					if (attached) {
						attachedPortalRefRef.current = null;
						detachPortalRef(attached);
					}
					if (!isPortalInDocument) portalEl.remove();
				};
			}, [
				portal,
				portalElement,
				context,
				portalRefProp
			]);
			useSafeLayoutEffect(() => {
				const attached = attachedPortalRefRef.current;
				if (!attached) return;
				if (attached.ref === portalRef) return;
				detachPortalRef(attached);
				attachedPortalRefRef.current = attachPortalRef(portalRef, attached.node);
			}, [portalRef]);
			(0, import_react$8.useEffect)(() => {
				if (!portalNode) return;
				if (context) return;
				if (portalElement) return;
				const doc = getDocument(portalNode);
				const onFullscreenChange = () => {
					const rootElement = getRootElement(portalNode);
					if (portalNode.parentElement !== rootElement) rootElement.appendChild(portalNode);
				};
				if (portalNode.isConnected) onFullscreenChange();
				doc.addEventListener("fullscreenchange", onFullscreenChange);
				return () => {
					doc.removeEventListener("fullscreenchange", onFullscreenChange);
				};
			}, [
				portalNode,
				context,
				portalElement
			]);
			useSafeLayoutEffect(() => {
				if (!portal) return;
				if (!preserveTabOrder) return;
				if (!preserveTabOrderAnchor) return;
				const element = getDocument(preserveTabOrderAnchor).createElement("span");
				element.style.position = "fixed";
				preserveTabOrderAnchor.insertAdjacentElement("afterend", element);
				setAnchorPortalNode(element);
				return () => {
					element.remove();
					setAnchorPortalNode(null);
				};
			}, [
				portal,
				preserveTabOrder,
				preserveTabOrderAnchor
			]);
			(0, import_react$8.useEffect)(() => {
				if (!portalNode) return;
				if (!preserveTabOrder) return;
				let raf = 0;
				const onFocus = (event) => {
					if (!isFocusEventOutside(event)) return;
					const focusing = event.type === "focusin";
					cancelAnimationFrame(raf);
					if (focusing) return restoreFocusIn(portalNode);
					raf = requestAnimationFrame(() => {
						disableFocusIn(portalNode, true);
					});
				};
				portalNode.addEventListener("focusin", onFocus, true);
				portalNode.addEventListener("focusout", onFocus, true);
				return () => {
					cancelAnimationFrame(raf);
					portalNode.removeEventListener("focusin", onFocus, true);
					portalNode.removeEventListener("focusout", onFocus, true);
				};
			}, [portalNode, preserveTabOrder]);
			props = useWrapElement(props, (element) => {
				element = /* @__PURE__ */ (0, import_jsx_runtime$4.jsx)(PortalContext.Provider, {
					value: portalNode || context,
					children: element
				});
				if (!portal) return element;
				if (!portalNode) return /* @__PURE__ */ (0, import_jsx_runtime$4.jsx)("span", {
					ref: refProp,
					id: props.id,
					style: { position: "fixed" },
					hidden: true
				});
				element = /* @__PURE__ */ (0, import_jsx_runtime$4.jsxs)(import_jsx_runtime$4.Fragment, { children: [
					preserveTabOrder && /* @__PURE__ */ (0, import_jsx_runtime$4.jsx)(FocusTrap, {
						ref: innerBeforeRef,
						"data-focus-trap": props.id,
						className: "__focus-trap-inner-before",
						onFocus: (event) => {
							if (isFocusEventOutside(event, portalNode)) queueFocus(getNextTabbable());
							else queueFocus(outerBeforeRef.current);
						}
					}),
					element,
					preserveTabOrder && /* @__PURE__ */ (0, import_jsx_runtime$4.jsx)(FocusTrap, {
						ref: innerAfterRef,
						"data-focus-trap": props.id,
						className: "__focus-trap-inner-after",
						onFocus: (event) => {
							if (isFocusEventOutside(event, portalNode)) queueFocus(getPreviousTabbable());
							else queueFocus(outerAfterRef.current);
						}
					})
				] });
				element = (0, import_react_dom$1.createPortal)(element, portalNode);
				let preserveTabOrderElement = /* @__PURE__ */ (0, import_jsx_runtime$4.jsxs)(import_jsx_runtime$4.Fragment, { children: [
					preserveTabOrder && /* @__PURE__ */ (0, import_jsx_runtime$4.jsx)(FocusTrap, {
						ref: outerBeforeRef,
						"data-focus-trap": props.id,
						className: "__focus-trap-outer-before",
						onFocus: (event) => {
							if (!(event.relatedTarget === outerAfterRef.current) && isFocusEventOutside(event, portalNode)) queueFocus(innerBeforeRef.current);
							else queueFocus(getPreviousTabbable());
						}
					}),
					preserveTabOrder && /* @__PURE__ */ (0, import_jsx_runtime$4.jsx)("span", {
						"aria-owns": portalNode.id,
						style: { position: "fixed" }
					}),
					preserveTabOrder && /* @__PURE__ */ (0, import_jsx_runtime$4.jsx)(FocusTrap, {
						ref: outerAfterRef,
						"data-focus-trap": props.id,
						className: "__focus-trap-outer-after",
						onFocus: (event) => {
							if (isFocusEventOutside(event, portalNode)) queueFocus(innerAfterRef.current);
							else {
								const nextTabbable = getNextTabbable();
								if (nextTabbable === innerBeforeRef.current) {
									requestAnimationFrame(() => getNextTabbable()?.focus());
									return;
								}
								queueFocus(nextTabbable);
							}
						}
					})
				] });
				if (anchorPortalNode && preserveTabOrder) preserveTabOrderElement = (0, import_react_dom$1.createPortal)(preserveTabOrderElement, anchorPortalNode);
				return /* @__PURE__ */ (0, import_jsx_runtime$4.jsxs)(import_jsx_runtime$4.Fragment, { children: [preserveTabOrderElement, element] });
			}, [
				portalNode,
				context,
				portal,
				props.id,
				preserveTabOrder,
				anchorPortalNode
			]);
			props = {
				...props,
				ref: refProp
			};
			return props;
		});
		forwardRef(function Portal(props) {
			const htmlProps = usePortal(props);
			return createElement(TagName$3, htmlProps);
		});
	})))();
}
//#endregion
//#region ../node_modules/.store/@ariakit/react-components@0.7.0-SPgsuugSDrFrx2DGVqJK3g/node_modules/@ariakit/react-components/dist/dialog/utils/is-backdrop.js
function isBackdrop(element, ...ids) {
	if (!element) return false;
	const backdrop = element.getAttribute("data-backdrop");
	if (backdrop == null) return false;
	if (backdrop === "") return true;
	if (backdrop === "true") return true;
	if (!ids.length) return true;
	return ids.some((id) => backdrop === id);
}
//#endregion
//#region ../node_modules/.store/@ariakit/react-components@0.7.0-SPgsuugSDrFrx2DGVqJK3g/node_modules/@ariakit/react-components/dist/dialog/utils/orchestrate.js
function flushCleanupStack(elementCleanups, key, stack) {
	while (stack.length) {
		const entry = stack[stack.length - 1];
		if (!entry) {
			elementCleanups.delete(key);
			return;
		}
		if (!entry.disposed) return;
		stack.pop();
		entry.cleanup();
	}
	elementCleanups.delete(key);
}
function orchestrate(element, key, setup) {
	let elementCleanups = cleanups.get(element);
	if (!elementCleanups) {
		elementCleanups = /* @__PURE__ */ new Map();
		cleanups.set(element, elementCleanups);
	}
	const stack = elementCleanups.get(key) ?? [];
	const entry = {
		cleanup: setup(),
		disposed: false
	};
	if (!stack.length) elementCleanups.set(key, stack);
	stack.push(entry);
	return () => {
		if (!stack.includes(entry)) return;
		entry.disposed = true;
		flushCleanupStack(elementCleanups, key, stack);
	};
}
function setAttribute(element, attr, value) {
	const setup = () => {
		const previousValue = element.getAttribute(attr);
		element.setAttribute(attr, value);
		return () => {
			if (previousValue == null) element.removeAttribute(attr);
			else element.setAttribute(attr, previousValue);
		};
	};
	return orchestrate(element, attr, setup);
}
function setProperty(element, property, value) {
	const setup = () => {
		const exists = property in element;
		const previousValue = element[property];
		element[property] = value;
		return () => {
			if (!exists) delete element[property];
			else element[property] = previousValue;
		};
	};
	return orchestrate(element, property, setup);
}
function assignStyle(element, style) {
	if (!element) return () => {};
	const setup = () => {
		const prevStyle = element.style.cssText;
		Object.assign(element.style, style);
		return () => {
			element.style.cssText = prevStyle;
		};
	};
	return orchestrate(element, "style", setup);
}
function setCSSProperty(element, property, value) {
	if (!element) return () => {};
	const setup = () => {
		const previousValue = element.style.getPropertyValue(property);
		const previousPriority = element.style.getPropertyPriority(property);
		element.style.setProperty(property, value);
		return () => {
			if (previousValue) element.style.setProperty(property, previousValue, previousPriority);
			else element.style.removeProperty(property);
		};
	};
	return orchestrate(element, property, setup);
}
var cleanups;
function init_orchestrate() {
	return (init_orchestrate = __esmMin((() => {
		cleanups = /* @__PURE__ */ new WeakMap();
	})))();
}
//#endregion
//#region ../node_modules/.store/@ariakit/react-components@0.7.0-SPgsuugSDrFrx2DGVqJK3g/node_modules/@ariakit/react-components/dist/dialog/utils/tree-cleanup.js
/**
* Finds marks in the owning dialog's current walk. IDs cannot identify their
* owner because dialogs in different roots can share an ID.
* https://github.com/ariakit/ariakit/issues/7726
*/
function isElementMarkedBy(element, cleanups) {
	if (!cleanups) return false;
	if (cleanups.get(element)?.has("ancestorMark")) return true;
	do {
		if (cleanups.get(element)?.has("mark")) return true;
		if (!element.parentElement) return false;
		element = element.parentElement;
	} while (true);
}
function getPropertyName(id = "", kind = "outside") {
	return `__ariakit-dialog-${kind}${id ? `-${id}` : ""}`;
}
function markElement(element, id = "") {
	return chain(setProperty(element, getPropertyName(), true), setProperty(element, getPropertyName(id), true));
}
function markAncestor(element, id = "") {
	return chain(setProperty(element, getPropertyName("", "ancestor"), true), setProperty(element, getPropertyName(id, "ancestor"), true));
}
/**
* Marks elements the dialog knows about at open time (the dialog itself,
* persistent elements, and nested dialogs), so outside event listeners can
* recognize them as inside before the dialog has been focused.
* @see https://github.com/ariakit/ariakit/issues/6344
*/
function markTreeInside(dialog, elements) {
	const marker = /* @__PURE__ */ new WeakSet();
	insideElements.set(dialog, marker);
	for (const element of elements) if (element) marker.add(element);
	return () => {
		if (insideElements.get(dialog) !== marker) return;
		insideElements.delete(dialog);
	};
}
function isElementInside(element, dialog) {
	const marker = insideElements.get(dialog);
	if (!marker) return false;
	do {
		if (marker.has(element)) return true;
		if (!element.parentElement) return false;
		element = element.parentElement;
	} while (true);
}
function isElementMarked(element, id) {
	const ancestorProperty = getPropertyName(id, "ancestor");
	if (element[ancestorProperty]) return true;
	const elementProperty = getPropertyName(id);
	do {
		if (element[elementProperty]) return true;
		if (!element.parentElement) return false;
		element = element.parentElement;
	} while (true);
}
function startCleanupWalk(previousCleanups) {
	return {
		cleanups: /* @__PURE__ */ new Map(),
		previousCleanups
	};
}
/**
* Adds the cleanup of an element to the walk. If the previous walk has a
* cleanup for the same element and kind, the function moves that cleanup and
* does not call `setup`.
*/
function addCleanup({ walk, element, kind, setup }) {
	const elementCleanups = walk.cleanups.get(element) ?? /* @__PURE__ */ new Map();
	if (elementCleanups.has(kind)) return;
	walk.cleanups.set(element, elementCleanups);
	const previousElementCleanups = walk.previousCleanups?.get(element);
	const previousCleanup = previousElementCleanups?.get(kind);
	previousElementCleanups?.delete(kind);
	elementCleanups.set(kind, previousCleanup ?? setup());
}
/**
* Restores the cleanups that the walk did not keep from the previous walk. They
* belong to elements that are no longer part of the walk.
*/
function finishCleanupWalk(walk) {
	if (walk.previousCleanups) restoreCleanups(walk.previousCleanups);
	return walk.cleanups;
}
function addElementMarkCleanup({ walk, element, id, ids }) {
	if (isBackdrop(element, ...ids)) return;
	addCleanup({
		walk,
		element,
		kind: "mark",
		setup: () => markElement(element, id)
	});
}
function addAncestorMarkCleanup({ walk, ancestor, element, id }) {
	if (element.hasAttribute("data-dialog") && element.id !== id) return;
	addCleanup({
		walk,
		element: ancestor,
		kind: "ancestorMark",
		setup: () => markAncestor(ancestor, id)
	});
}
function restoreCleanups(cleanups) {
	for (const elementCleanups of cleanups.values()) for (const cleanup of elementCleanups.values()) cleanup();
	cleanups.clear();
}
var insideElements;
function init_tree_cleanup() {
	return (init_tree_cleanup = __esmMin((() => {
		init_orchestrate();
		init_dist$1();
		insideElements = /* @__PURE__ */ new WeakMap();
	})))();
}
//#endregion
//#region ../node_modules/.store/@ariakit/react-components@0.7.0-SPgsuugSDrFrx2DGVqJK3g/node_modules/@ariakit/react-components/dist/__chunks/CexKSKpV.js
function getSnapshotPropertyName(id) {
	return `__ariakit-dialog-snapshot-${id}`;
}
/**
* Adds elements to the snapshot of the dialog. The snapshot takes every element
* outside the dialog, so the list can be long. React can also replace the
* element of another dialog that was already open when the snapshot was taken,
* and the new element isn't in the snapshot.
*/
function addToWalkTreeSnapshot(id, elements) {
	const propertyName = getSnapshotPropertyName(id);
	const cleanups = [];
	for (const element of elements) cleanups.push(setProperty(element, propertyName, true));
	return () => {
		for (const cleanup of cleanups) cleanup();
	};
}
function inSnapshot(id, element) {
	const doc = getDocument(element);
	const propertyName = getSnapshotPropertyName(id);
	if (!doc.body[propertyName]) return true;
	do {
		if (element === doc.body) return false;
		if (element[propertyName]) return true;
		if (!element.parentElement) return false;
		element = element.parentElement;
	} while (true);
}
function shouldWalkElement(id, element, ignoredElements) {
	if (ignoreTags.includes(element.tagName)) return false;
	if (!inSnapshot(id, element)) return false;
	return !ignoredElements.some((enabledElement) => enabledElement && contains(element, enabledElement));
}
function walkTreeOutside(id, elements, callback, ancestorCallback) {
	for (let element of elements) {
		if (!element?.isConnected) continue;
		const hasAncestorAlready = elements.some((maybeAncestor) => {
			if (!maybeAncestor) return false;
			if (maybeAncestor === element) return false;
			return maybeAncestor.contains(element);
		});
		const doc = getDocument(element);
		const originalElement = element;
		while (element.parentElement && element !== doc.body) {
			ancestorCallback?.(element.parentElement, originalElement);
			if (!hasAncestorAlready) {
				for (const child of element.parentElement.children) if (shouldWalkElement(id, child, elements)) callback(child, originalElement);
			}
			element = element.parentElement;
		}
	}
}
function createWalkTreeSnapshot(id, elements) {
	const { body } = getDocument(elements[0]);
	const snapshotElements = [];
	walkTreeOutside(id, elements, (element) => {
		snapshotElements.push(element);
	});
	return chain(setProperty(body, getSnapshotPropertyName(id), true), addToWalkTreeSnapshot(id, snapshotElements));
}
var ignoreTags;
function init_CexKSKpV() {
	return (init_CexKSKpV = __esmMin((() => {
		init_orchestrate();
		init_dist$1();
		ignoreTags = ["SCRIPT", "STYLE"];
	})))();
}
//#endregion
//#region ../node_modules/.store/@ariakit/react-components@0.7.0-SPgsuugSDrFrx2DGVqJK3g/node_modules/@ariakit/react-components/dist/dialog/utils/mark-tree-outside.js
function markTreeOutside(id, elements, previousCleanups) {
	const walk = startCleanupWalk(previousCleanups);
	const ids = elements.map((el) => el?.id);
	walkTreeOutside(id, elements, (element) => {
		addElementMarkCleanup({
			walk,
			element,
			id,
			ids
		});
	}, (ancestor, element) => {
		addAncestorMarkCleanup({
			walk,
			ancestor,
			element,
			id
		});
	});
	return finishCleanupWalk(walk);
}
function init_mark_tree_outside() {
	return (init_mark_tree_outside = __esmMin((() => {
		init_tree_cleanup();
		init_CexKSKpV();
	})))();
}
//#endregion
//#region ../node_modules/.store/@ariakit/components@0.1.14-LY5snkwIfivHs3k-20UEzg/node_modules/@ariakit/components/dist/role/role.js
var elements;
function init_role() {
	return (init_role = __esmMin((() => {
		elements = [
			"a",
			"abbr",
			"address",
			"area",
			"article",
			"aside",
			"audio",
			"b",
			"base",
			"bdi",
			"bdo",
			"blockquote",
			"body",
			"br",
			"button",
			"canvas",
			"caption",
			"cite",
			"code",
			"col",
			"colgroup",
			"data",
			"datalist",
			"dd",
			"del",
			"details",
			"dfn",
			"dialog",
			"div",
			"dl",
			"dt",
			"em",
			"embed",
			"fieldset",
			"figcaption",
			"figure",
			"footer",
			"form",
			"h1",
			"h2",
			"h3",
			"h4",
			"h5",
			"h6",
			"head",
			"header",
			"hgroup",
			"hr",
			"html",
			"i",
			"iframe",
			"img",
			"input",
			"ins",
			"kbd",
			"label",
			"legend",
			"li",
			"link",
			"main",
			"map",
			"mark",
			"menu",
			"meta",
			"meter",
			"nav",
			"noscript",
			"object",
			"ol",
			"optgroup",
			"option",
			"output",
			"p",
			"picture",
			"pre",
			"progress",
			"q",
			"rp",
			"rt",
			"ruby",
			"s",
			"samp",
			"script",
			"section",
			"select",
			"slot",
			"small",
			"source",
			"span",
			"strong",
			"style",
			"sub",
			"summary",
			"sup",
			"table",
			"tbody",
			"td",
			"template",
			"textarea",
			"tfoot",
			"th",
			"thead",
			"time",
			"title",
			"tr",
			"track",
			"u",
			"ul",
			"var",
			"video",
			"wbr",
			"svg"
		];
	})))();
}
//#endregion
//#region ../node_modules/.store/@ariakit/react-components@0.7.0-SPgsuugSDrFrx2DGVqJK3g/node_modules/@ariakit/react-components/dist/role/role.js
var TagName$2, Role;
function init_role$1() {
	return (init_role$1 = __esmMin((() => {
		init_dist();
		init_role();
		TagName$2 = "div";
		createHook(function useRole(props) {
			return props;
		});
		Role = forwardRef(function Role(props) {
			return createElement(TagName$2, props);
		});
		Object.assign(Role, elements.reduce((acc, element) => {
			acc[element] = forwardRef(function Role(props) {
				return createElement(element, props);
			});
			return acc;
		}, {}));
	})))();
}
//#endregion
//#region ../node_modules/.store/@ariakit/react-components@0.7.0-SPgsuugSDrFrx2DGVqJK3g/node_modules/@ariakit/react-components/dist/dialog/dialog-backdrop.js
function DialogBackdrop({ store, backdrop, backdropRef, alwaysVisible, hidden }) {
	const ref = (0, import_react$7.useRef)(null);
	const disclosure = useDisclosureStore({ disclosure: store });
	const contentElement = useStoreState(store, "contentElement");
	useSafeLayoutEffect(() => {
		const backdrop = ref.current;
		const dialog = contentElement;
		if (!backdrop) return;
		if (!dialog) return;
		backdrop.style.zIndex = getComputedStyle(dialog).zIndex;
	}, [contentElement]);
	useSafeLayoutEffect(() => {
		const id = contentElement?.id;
		if (!id) return;
		const backdrop = ref.current;
		if (!backdrop) return;
		return markAncestor(backdrop, id);
	}, [contentElement]);
	const props = useDisclosureContent({
		ref: useMergeRefs(ref, backdropRef),
		store: disclosure,
		role: "presentation",
		"data-backdrop": contentElement?.id || "",
		alwaysVisible,
		...hidden != null && { hidden },
		style: {
			position: "fixed",
			top: 0,
			right: 0,
			bottom: 0,
			left: 0
		}
	});
	if (!backdrop) return null;
	if ((0, import_react$7.isValidElement)(backdrop)) return /* @__PURE__ */ (0, import_jsx_runtime$3.jsx)(Role, {
		...props,
		render: backdrop
	});
	const Component = typeof backdrop !== "boolean" ? backdrop : "div";
	return /* @__PURE__ */ (0, import_jsx_runtime$3.jsx)(Role, {
		...props,
		render: /* @__PURE__ */ (0, import_jsx_runtime$3.jsx)(Component, {})
	});
}
var import_react$7, import_jsx_runtime$3;
function init_dialog_backdrop() {
	return (init_dialog_backdrop = __esmMin((() => {
		init_disclosure_content();
		init_disclosure_store$1();
		init_role$1();
		init_tree_cleanup();
		init_dist();
		import_react$7 = require_react();
		import_jsx_runtime$3 = require_jsx_runtime();
		init_dist$2();
	})))();
}
//#endregion
//#region ../node_modules/.store/@ariakit/components@0.1.14-LY5snkwIfivHs3k-20UEzg/node_modules/@ariakit/components/dist/dialog/dialog-store.js
/**
* Creates a dialog store.
*/
function createDialogStore(props = {}) {
	return createDisclosureStore(props);
}
function init_dialog_store() {
	return (init_dialog_store = __esmMin((() => {
		init_disclosure_store();
	})))();
}
//#endregion
//#region ../node_modules/.store/@ariakit/react-components@0.7.0-SPgsuugSDrFrx2DGVqJK3g/node_modules/@ariakit/react-components/dist/dialog/dialog-store.js
function useDialogStoreProps(store, update, props) {
	return useDisclosureStoreProps(store, update, props);
}
/**
* Creates a dialog store to control the state of
* [Dialog](https://ariakit.com/components/dialog) components.
* @see https://ariakit.com/components/dialog
* @example
* ```jsx
* const dialog = useDialogStore();
*
* <button onClick={dialog.toggle}>Open dialog</button>
* <Dialog store={dialog}>Content</Dialog>
* ```
*/
function useDialogStore(props = {}) {
	const [store, update] = useStore(createDialogStore, props);
	return useDialogStoreProps(store, update, props);
}
function init_dialog_store$1() {
	return (init_dialog_store$1 = __esmMin((() => {
		init_disclosure_store$1();
		init_dist$2();
		init_dialog_store();
	})))();
}
//#endregion
//#region ../node_modules/.store/@ariakit/react-components@0.7.0-SPgsuugSDrFrx2DGVqJK3g/node_modules/@ariakit/react-components/dist/__chunks/DztuoDGI.js
function isHiddenDismiss(element, ...ids) {
	if (!element) return false;
	const dismiss = element.getAttribute("data-dialog-hidden-dismiss");
	if (dismiss == null) return false;
	if (dismiss === "") return true;
	if (!ids.length) return true;
	return ids.some((id) => dismiss === id);
}
//#endregion
//#region ../node_modules/.store/@ariakit/react-components@0.7.0-SPgsuugSDrFrx2DGVqJK3g/node_modules/@ariakit/react-components/dist/dialog/utils/supports-inert.js
function supportsInert() {
	return "inert" in HTMLElement.prototype;
}
//#endregion
//#region ../node_modules/.store/@ariakit/react-components@0.7.0-SPgsuugSDrFrx2DGVqJK3g/node_modules/@ariakit/react-components/dist/dialog/utils/disable-accessibility-tree-outside.js
function hideElementFromAccessibilityTree(element) {
	return setAttribute(element, "aria-hidden", "true");
}
function init_disable_accessibility_tree_outside() {
	return (init_disable_accessibility_tree_outside = __esmMin((() => {
		init_orchestrate();
	})))();
}
//#endregion
//#region ../node_modules/.store/@ariakit/react-components@0.7.0-SPgsuugSDrFrx2DGVqJK3g/node_modules/@ariakit/react-components/dist/dialog/utils/is-focus-trap.js
function isFocusTrap(element, ...ids) {
	if (!element) return false;
	const attr = element.getAttribute("data-focus-trap");
	if (attr == null) return false;
	if (!ids.length) return true;
	if (attr === "") return false;
	return ids.some((id) => attr === id);
}
//#endregion
//#region ../node_modules/.store/@ariakit/react-components@0.7.0-SPgsuugSDrFrx2DGVqJK3g/node_modules/@ariakit/react-components/dist/dialog/utils/disable-tree.js
function disableTree(element, ignoredElements) {
	if (!("style" in element)) return noop;
	if (supportsInert()) return setProperty(element, "inert", true);
	const enableElements = getAllTabbableIn(element, true).map((element) => {
		if (ignoredElements?.some((el) => el && contains(el, element))) return noop;
		const restoreFocusMethod = orchestrate(element, "focus", () => {
			element.focus = noop;
			return () => {
				delete element.focus;
			};
		});
		return chain(setAttribute(element, "tabindex", "-1"), restoreFocusMethod);
	});
	return chain(...enableElements, hideElementFromAccessibilityTree(element), assignStyle(element, {
		pointerEvents: "none",
		userSelect: "none",
		cursor: "default"
	}));
}
function addDisabledElementCleanup({ walk, element, elements, ids }) {
	if (isBackdrop(element, ...ids)) return;
	if (isFocusTrap(element, ...ids)) return;
	if (isHiddenDismiss(element, ...ids)) return;
	addCleanup({
		walk,
		element,
		kind: "disable",
		setup: () => disableTree(element, elements)
	});
}
function addRoleNoneCleanup(walk, ancestor, elements) {
	if (!ancestor.hasAttribute("role")) return;
	if (elements.some((el) => el && contains(el, ancestor))) return;
	addCleanup({
		walk,
		element: ancestor,
		kind: "role",
		setup: () => setAttribute(ancestor, "role", "none")
	});
}
function markAndDisableTreeOutside(id, elements, previousCleanups) {
	if (previousCleanups && !supportsInert()) restoreCleanups(previousCleanups);
	const walk = startCleanupWalk(previousCleanups);
	const ids = elements.map((el) => el?.id);
	walkTreeOutside(id, elements, (element) => {
		addElementMarkCleanup({
			walk,
			element,
			id,
			ids
		});
		addDisabledElementCleanup({
			walk,
			element,
			elements,
			ids
		});
	}, (ancestor, element) => {
		addAncestorMarkCleanup({
			walk,
			ancestor,
			element,
			id
		});
		addRoleNoneCleanup(walk, ancestor, elements);
	});
	return finishCleanupWalk(walk);
}
function init_disable_tree() {
	return (init_disable_tree = __esmMin((() => {
		init_orchestrate();
		init_tree_cleanup();
		init_CexKSKpV();
		init_disable_accessibility_tree_outside();
		init_dist$1();
	})))();
}
//#endregion
//#region ../node_modules/.store/@ariakit/react-components@0.7.0-SPgsuugSDrFrx2DGVqJK3g/node_modules/@ariakit/react-components/dist/dialog/utils/use-previous-mouse-down-ref.js
/**
* Returns an element followed by its iframe hosts up to the highest readable
* document.
*/
function getFrameChain(element) {
	const chain = [element];
	while (true) {
		let frameElement;
		try {
			frameElement = getWindow(element).frameElement;
		} catch {
			return chain;
		}
		if (!isElement(frameElement)) return chain;
		chain.push(frameElement);
		element = frameElement;
	}
}
/**
* Returns the full composed path and readable iframe host chain for positive
* dialog membership, plus a target projected into the reference element's root
* for outside-tree marks.
*/
function getEventTargets(event, referenceElement) {
	const elements = event.composedPath().filter(isElement);
	if (!elements.length && isElement(event.target)) elements.push(event.target);
	const composedTarget = elements[0];
	if (composedTarget) {
		for (const frameElement of getFrameChain(composedTarget).slice(1)) if (!elements.includes(frameElement)) elements.push(frameElement);
	}
	const root = referenceElement?.getRootNode();
	return {
		elements,
		rootTarget: root ? elements.find((target) => target.getRootNode() === root) || event.target : elements[0] || event.target
	};
}
/**
* Stores both event-target views from the latest mousedown so opening clicks
* and drag releases are classified from their mousedown origin.
*/
function usePreviousMouseDownRef(enabled, scope, referenceElement) {
	const previousMouseDownRef = (0, import_react$6.useRef)(null);
	(0, import_react$6.useEffect)(() => {
		if (!enabled) {
			previousMouseDownRef.current = null;
			return;
		}
		const onMouseDown = (event) => {
			previousMouseDownRef.current = getEventTargets(event, referenceElement);
		};
		return addGlobalEventListener("mousedown", onMouseDown, true, scope);
	}, [
		enabled,
		scope,
		referenceElement
	]);
	return previousMouseDownRef;
}
var import_react$6;
function init_use_previous_mouse_down_ref() {
	return (init_use_previous_mouse_down_ref = __esmMin((() => {
		init_dist$1();
		import_react$6 = require_react();
	})))();
}
//#endregion
//#region ../node_modules/.store/@ariakit/react-components@0.7.0-SPgsuugSDrFrx2DGVqJK3g/node_modules/@ariakit/react-components/dist/dialog/utils/use-hide-on-interact-outside.js
function getHighestReadableWindow(element) {
	const highestElement = getFrameChain(element).at(-1);
	return getWindow(highestElement ?? element);
}
function isInDocument(target) {
	return target.isConnected;
}
function isDisclosure(disclosure, target) {
	if (!disclosure) return false;
	if (contains(disclosure, target)) return true;
	const activeId = target.getAttribute("aria-activedescendant");
	if (activeId) {
		const activeElement = getDocument(target).getElementById(activeId);
		if (activeElement) return contains(disclosure, activeElement);
	}
	return false;
}
function isMouseEventOnDialog(event, dialog) {
	if (!("clientY" in event)) return false;
	const rect = dialog.getBoundingClientRect();
	if (rect.width === 0 || rect.height === 0) return false;
	return rect.top <= event.clientY && event.clientY <= rect.top + rect.height && rect.left <= event.clientX && event.clientX <= rect.left + rect.width;
}
function isElementWithinDialog(target, contentElement, disclosureElement) {
	if (contains(contentElement, target)) return true;
	if (isDisclosure(disclosureElement, target)) return true;
	if (target.hasAttribute("data-focus-trap")) return true;
	if (isHiddenDismiss(target, contentElement.id)) return true;
	return isElementInside(target, contentElement);
}
function isEventInsideDialog(targets, contentElement, disclosureElement) {
	return targets.elements.some((target) => isElementWithinDialog(target, contentElement, disclosureElement));
}
function useEventOutside({ store, type, listener, capture, open, contentElement, focusedRef }) {
	const callListener = useEvent(listener);
	(0, import_react$5.useEffect)(() => {
		if (!open) return;
		const onEvent = (event) => {
			const { contentElement, disclosureElement } = store.getState();
			if (!contentElement) return;
			const targets = getEventTargets(event, contentElement);
			const composedTarget = targets.elements[0];
			const target = targets.rootTarget;
			if (!isElement(target)) return;
			if (composedTarget && !isInDocument(composedTarget)) return;
			if (!isInDocument(target)) return;
			if (isEventInsideDialog(targets, contentElement, disclosureElement)) return;
			const contentDocument = getDocument(contentElement);
			if (getDocument(target) !== contentDocument) {
				callListener(event);
				return;
			}
			if (getDocument(composedTarget ?? target) === contentDocument && isMouseEventOnDialog(event, contentElement)) return;
			if (focusedRef.current && !isElementMarked(target, contentElement.id)) return;
			callListener(event);
		};
		const win = contentElement ? getHighestReadableWindow(contentElement) : void 0;
		return addGlobalEventListener(type, onEvent, capture, win);
	}, [
		open,
		capture,
		store,
		type,
		callListener,
		contentElement,
		focusedRef
	]);
}
function shouldHideOnInteractOutside(hideOnInteractOutside, event) {
	if (typeof hideOnInteractOutside === "function") return hideOnInteractOutside(event);
	return !!hideOnInteractOutside;
}
function useHideOnInteractOutside({ store, hideOnInteractOutside, domReady, interactedOutsideRef, focusedStoreRef }) {
	const open = useStoreState(store, "open");
	const contentElement = useStoreState(store, "contentElement");
	const previousMouseDownRef = usePreviousMouseDownRef(open, contentElement ? getHighestReadableWindow(contentElement) : void 0, contentElement);
	const focusedRef = (0, import_react$5.useRef)(false);
	useSafeLayoutEffect(() => {
		if (!open) return;
		if (!domReady) return;
		if (!contentElement) return;
		focusedRef.current = false;
		const onFocus = () => {
			focusedRef.current = true;
			focusedStoreRef.current = store;
		};
		contentElement.addEventListener("focusin", onFocus, true);
		return () => contentElement.removeEventListener("focusin", onFocus, true);
	}, [
		open,
		domReady,
		contentElement,
		store,
		focusedStoreRef
	]);
	const props = {
		store,
		capture: true,
		open,
		contentElement,
		focusedRef
	};
	const hide = () => {
		store.hide();
		if (!store.getState().open) return;
		interactedOutsideRef.current = false;
	};
	useEventOutside({
		...props,
		type: "click",
		listener: (event) => {
			const { contentElement, disclosureElement } = store.getState();
			const previousMouseDown = previousMouseDownRef.current;
			if (!previousMouseDown) return;
			if (!contentElement) return;
			if (isEventInsideDialog(previousMouseDown, contentElement, disclosureElement)) return;
			const previousRootTarget = previousMouseDown.rootTarget;
			if (!isElement(previousRootTarget)) return;
			if (getDocument(previousRootTarget) === getDocument(contentElement) && !isElementMarked(previousRootTarget, contentElement.id)) return;
			if (!shouldHideOnInteractOutside(hideOnInteractOutside, event)) return;
			interactedOutsideRef.current = true;
			hide();
		}
	});
	useEventOutside({
		...props,
		type: "focusin",
		listener: (event) => {
			const { contentElement } = store.getState();
			if (!contentElement) return;
			if (event.target === getDocument(contentElement)) return;
			if (!shouldHideOnInteractOutside(hideOnInteractOutside, event)) return;
			const target = event.target;
			if (isElement(target) && getDocument(target) !== getDocument(contentElement)) interactedOutsideRef.current = true;
			hide();
		}
	});
	useEventOutside({
		...props,
		type: "contextmenu",
		listener: (event) => {
			if (!shouldHideOnInteractOutside(hideOnInteractOutside, event)) return;
			interactedOutsideRef.current = true;
			hide();
		}
	});
}
var import_react$5;
function init_use_hide_on_interact_outside() {
	return (init_use_hide_on_interact_outside = __esmMin((() => {
		init_tree_cleanup();
		init_use_previous_mouse_down_ref();
		init_dist();
		init_dist$1();
		import_react$5 = require_react();
		init_dist$2();
	})))();
}
//#endregion
//#region ../node_modules/.store/@ariakit/react-components@0.7.0-SPgsuugSDrFrx2DGVqJK3g/node_modules/@ariakit/react-components/dist/dialog/utils/use-nested-dialogs.js
function useNestedDialogs(store) {
	const context = (0, import_react$4.useContext)(NestedDialogsContext);
	const [dialogs, setDialogs] = (0, import_react$4.useState)([]);
	const add = (0, import_react$4.useCallback)((dialog) => {
		setDialogs((dialogs) => [...dialogs, dialog]);
		return chain(context.add?.(dialog), () => {
			setDialogs((dialogs) => dialogs.filter((d) => d !== dialog));
		});
	}, [context]);
	useSafeLayoutEffect(() => {
		return sync(store, ["open", "contentElement"], (state) => {
			if (!state.open) return;
			if (!state.contentElement) return;
			return context.add?.(store);
		});
	}, [store, context]);
	const providerValue = (0, import_react$4.useMemo)(() => ({
		store,
		add
	}), [store, add]);
	return {
		wrapElement: (0, import_react$4.useCallback)((element) => /* @__PURE__ */ (0, import_jsx_runtime$2.jsx)(NestedDialogsContext.Provider, {
			value: providerValue,
			children: element
		}), [providerValue]),
		nestedDialogs: dialogs
	};
}
var import_react$4, import_jsx_runtime$2, NestedDialogsContext;
function init_use_nested_dialogs() {
	return (init_use_nested_dialogs = __esmMin((() => {
		init_dist();
		init_dist$1();
		import_react$4 = require_react();
		import_jsx_runtime$2 = require_jsx_runtime();
		init_dist$3();
		NestedDialogsContext = (0, import_react$4.createContext)({});
	})))();
}
//#endregion
//#region ../node_modules/.store/@ariakit/react-components@0.7.0-SPgsuugSDrFrx2DGVqJK3g/node_modules/@ariakit/react-components/dist/dialog/utils/use-root-dialog.js
function useRootDialog({ attribute, contentId, contentElement, enabled }) {
	const [updated, retry] = useForceUpdate();
	const isRootDialog = (0, import_react$3.useCallback)(() => {
		if (!enabled) return false;
		if (!contentElement) return false;
		const { body } = getDocument(contentElement);
		const id = body.getAttribute(attribute);
		return !id || id === contentId;
	}, [
		updated,
		enabled,
		contentElement,
		attribute,
		contentId
	]);
	useSafeLayoutEffect(() => {
		if (!enabled) return;
		if (!contentId) return;
		if (!contentElement) return;
		const { body } = getDocument(contentElement);
		if (isRootDialog()) {
			body.setAttribute(attribute, contentId);
			return () => body.removeAttribute(attribute);
		}
		const observer = new MutationObserver(() => (0, import_react_dom.flushSync)(retry));
		observer.observe(body, { attributeFilter: [attribute] });
		return () => observer.disconnect();
	}, [
		updated,
		enabled,
		contentId,
		contentElement,
		isRootDialog,
		attribute,
		retry
	]);
	return isRootDialog;
}
var import_react$3, import_react_dom;
function init_use_root_dialog() {
	return (init_use_root_dialog = __esmMin((() => {
		init_dist();
		init_dist$1();
		import_react$3 = require_react();
		import_react_dom = require_react_dom();
	})))();
}
//#endregion
//#region ../node_modules/.store/@ariakit/react-components@0.7.0-SPgsuugSDrFrx2DGVqJK3g/node_modules/@ariakit/react-components/dist/dialog/utils/use-prevent-body-scroll.js
function supportsScrollbarGutter(win) {
	const { CSS } = win;
	return !!CSS?.supports("scrollbar-gutter", "stable");
}
function getPaddingProperty(documentElement) {
	const documentLeft = documentElement.getBoundingClientRect().left;
	return Math.round(documentLeft) + documentElement.scrollLeft ? "paddingLeft" : "paddingRight";
}
function usePreventBodyScroll(contentElement, contentId, enabled) {
	const isRootDialog = useRootDialog({
		attribute: "data-dialog-prevent-body-scroll",
		contentElement,
		contentId,
		enabled
	});
	useLockEffect(() => {
		if (!isRootDialog()) return;
		if (!contentElement) return;
		const doc = getDocument(contentElement);
		const win = getWindow(contentElement);
		const { documentElement, body } = doc;
		const cssScrollbarWidth = documentElement.style.getPropertyValue("--scrollbar-width");
		const scrollbarWidth = cssScrollbarWidth ? Number.parseInt(cssScrollbarWidth, 10) : win.innerWidth - documentElement.clientWidth;
		const setStyle = () => {
			const computedStyle = win.getComputedStyle(documentElement);
			const scrollbarGutter = computedStyle.getPropertyValue("scrollbar-gutter");
			const hasGutter = scrollbarGutter.includes("stable");
			const isOverflowVisible = (value) => !value || value === "visible";
			const htmlScrolls = !isOverflowVisible(computedStyle.getPropertyValue("overflow-x")) || !isOverflowVisible(computedStyle.getPropertyValue("overflow-y"));
			const hideHtmlOverflow = () => chain(setCSSProperty(documentElement, "overflow-x", "hidden"), setCSSProperty(documentElement, "overflow-y", "hidden"));
			const withHiddenHtmlOverflow = (restoreStyle) => {
				if (!htmlScrolls) return restoreStyle;
				return chain(restoreStyle, hideHtmlOverflow());
			};
			if (!hasGutter && !scrollbarWidth) return withHiddenHtmlOverflow(assignStyle(body, { overflow: "hidden" }));
			if (hasGutter || supportsScrollbarGutter(win)) return chain(setCSSProperty(documentElement, "scrollbar-gutter", hasGutter ? scrollbarGutter : "stable"), hideHtmlOverflow());
			return withHiddenHtmlOverflow(chain(setCSSProperty(documentElement, "--scrollbar-width", `${scrollbarWidth}px`), assignStyle(body, {
				overflow: "hidden",
				[getPaddingProperty(documentElement)]: `${scrollbarWidth}px`
			})));
		};
		const setIOSStyle = () => {
			const { scrollX, scrollY, visualViewport } = win;
			const offsetLeft = visualViewport?.offsetLeft ?? 0;
			const offsetTop = visualViewport?.offsetTop ?? 0;
			const restoreStyle = assignStyle(body, {
				position: "fixed",
				overflow: "hidden",
				top: `${-(scrollY - Math.floor(offsetTop))}px`,
				left: `${-(scrollX - Math.floor(offsetLeft))}px`,
				right: "0",
				[getPaddingProperty(documentElement)]: `${scrollbarWidth}px`
			});
			return () => {
				restoreStyle();
			};
		};
		if (isIOS) return setIOSStyle();
		const restore = setStyle();
		return () => {
			queueMicrotask(restore);
		};
	}, [isRootDialog, contentElement]);
}
var import_react$2, isIOS, useLockEffect;
function init_use_prevent_body_scroll() {
	return (init_use_prevent_body_scroll = __esmMin((() => {
		init_orchestrate();
		init_use_root_dialog();
		init_dist();
		init_dist$1();
		import_react$2 = require_react();
		isIOS = isApple() && !isMac();
		useLockEffect = isIOS ? import_react$2.useEffect : useSafeLayoutEffect;
	})))();
}
//#endregion
//#region ../node_modules/.store/@ariakit/react-components@0.7.0-SPgsuugSDrFrx2DGVqJK3g/node_modules/@ariakit/react-components/dist/__chunks/DpKu70iZ.js
function captureDisclosure(element) {
	capturedDisclosures.add(element);
}
/**
* Whether a dialog captured this element as a fallback opener rather than the
* application naming one. A captured element only happened to have focus, so it
* can't be assumed to close the dialog the way a disclosure does.
*/
function isCapturedDisclosure(element) {
	return capturedDisclosures.has(element);
}
/**
* Adds the dialog after the dialogs that are already open. The returned
* function removes it. With `onEarlierDialogElementChange`, the dialog learns
* when the element of a dialog that opened before it changes.
*/
function addOpenDialog(dialogRef, options = {}) {
	openDialogs.set(dialogRef, options);
	return () => {
		openDialogs.delete(dialogRef);
	};
}
/**
* Returns the elements of the dialogs that opened before the given dialog,
* except the ones that contain it.
*/
function getEarlierOpenDialogElements(dialogRef) {
	const elements = [];
	for (const openDialogRef of openDialogs.keys()) {
		if (openDialogRef === dialogRef) break;
		const { current: element } = openDialogRef;
		if (!element?.isConnected) continue;
		if (dialogRef.current && contains(element, dialogRef.current)) continue;
		elements.push(element);
	}
	return elements;
}
/**
* Tells the dialogs that opened after the given dialog that its element
* changed.
*/
function notifyOpenDialogElementChange(dialogRef) {
	let foundDialog = false;
	for (const [openDialogRef, options] of openDialogs) {
		if (openDialogRef === dialogRef) {
			foundDialog = true;
			continue;
		}
		if (!foundDialog) continue;
		options.onEarlierDialogElementChange?.();
	}
}
/**
* Returns whether something is above the given dialog, which is the case when
* the dialog is marked.
*
* The exception is two dialogs that mark each other, because a dialog also
* marks a dialog that's in the DOM while hidden and opens later. In that case,
* the dialog that opened last is above the other one.
* https://github.com/ariakit/ariakit/issues/7647
*/
function hasDialogAbove(dialogRef) {
	const dialog = dialogRef.current;
	if (!dialog) return false;
	if (!isElementMarked(dialog)) return false;
	const cleanups = openDialogs.get(dialogRef)?.getOutsideCleanups?.();
	let openedAfterDialog = false;
	let isAboveEarlierDialog = false;
	for (const [openDialogRef, options] of openDialogs) {
		if (openDialogRef === dialogRef) {
			openedAfterDialog = true;
			continue;
		}
		const openDialog = openDialogRef.current;
		if (!openDialog) continue;
		if (!isElementMarkedBy(dialog, options.getOutsideCleanups?.())) continue;
		if (openedAfterDialog) return true;
		if (!isElementMarkedBy(openDialog, cleanups)) return true;
		isAboveEarlierDialog = true;
	}
	return !(openedAfterDialog && isAboveEarlierDialog);
}
function isAlreadyFocusingAnotherElement(dialog) {
	const activeElement = getActiveElement(dialog);
	if (!activeElement) return false;
	if (dialog && contains(dialog, activeElement)) return false;
	if (isHiddenDismiss(activeElement, dialog?.id)) return false;
	if (isFocusable(activeElement)) return true;
	return false;
}
function getDeepestActiveElement(element) {
	let activeElement = element;
	while (activeElement.shadowRoot) {
		const nextElement = activeElement.shadowRoot.activeElement;
		if (!isElement(nextElement)) break;
		activeElement = nextElement;
	}
	return activeElement;
}
function isElementInDialog(element, dialog, disclosureElement) {
	if (contains(dialog, element)) return true;
	if (disclosureElement && contains(disclosureElement, element)) return true;
	return isElementInside(element, dialog);
}
function hasOwnDismiss(dialog) {
	const dismisses = dialog.querySelectorAll("[data-dialog-dismiss]");
	for (const dismiss of dismisses) if (dismiss.closest("[data-dialog]") === dialog) return true;
	return false;
}
function getElementFromProp(prop, focusable = false) {
	if (!prop) return null;
	const element = "current" in prop ? prop.current : prop;
	if (!element) return null;
	if (focusable) return isFocusable(element) ? element : null;
	return element;
}
/**
* Returns default modal portals that are later in the same root and still
* pending in the current layout pass. Portals in the established stack are
* excluded so this only coordinates the dialogs opening in the same cohort.
*/
function getLaterOpenModalPortals(dialog) {
	if (!dialog.isConnected) return [];
	const root = dialog.getRootNode();
	const dialogs = root.querySelectorAll("[data-dialog][data-dialog-portal][data-open]");
	const portals = [];
	let foundDialog = false;
	for (const currentDialog of dialogs) {
		if (currentDialog === dialog) {
			foundDialog = true;
			continue;
		}
		if (!foundDialog) continue;
		const portalId = currentDialog.getAttribute("data-dialog-portal");
		if (!portalId) continue;
		const portal = root.getElementById(portalId);
		if (!portal || !contains(portal, currentDialog)) continue;
		if (openModalPortals.has(portal)) continue;
		portals.push(portal);
	}
	return portals;
}
function createDialogComponent(Component, useProviderContext = useDialogProviderContext) {
	return forwardRef(function DialogComponent(props) {
		const context = useProviderContext();
		const store = props.store || context;
		if (!useStoreState(store, ["mounted"], (state) => !props.unmountOnHide || state?.mounted || !!props.open)) return null;
		return /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)(Component, { ...props });
	});
}
var import_react$1, import_jsx_runtime$1, capturedDisclosures, openDialogs, TagName$1, isSafariBrowser, openModalPortals, escapeKeyPressesThatHid, useDialog, DialogWithStore, DialogWithInternalStore;
function init_DpKu70iZ() {
	return (init_DpKu70iZ = __esmMin((() => {
		init_focusable();
		init_dialog_context();
		init_CDh2UhnG();
		init_disclosure_content();
		init_focusable_container();
		init_heading_level();
		init_visually_hidden();
		init_portal();
		init_tree_cleanup();
		init_CexKSKpV();
		init_mark_tree_outside();
		init_dialog_backdrop();
		init_dialog_store$1();
		init_disable_tree();
		init_use_hide_on_interact_outside();
		init_use_nested_dialogs();
		init_use_prevent_body_scroll();
		init_dist();
		init_dist$1();
		import_react$1 = require_react();
		import_jsx_runtime$1 = require_jsx_runtime();
		init_dist$2();
		init_dist$3();
		capturedDisclosures = /* @__PURE__ */ new WeakSet();
		openDialogs = /* @__PURE__ */ new Map();
		TagName$1 = "div";
		isSafariBrowser = isSafari();
		openModalPortals = /* @__PURE__ */ new WeakSet();
		escapeKeyPressesThatHid = /* @__PURE__ */ new WeakSet();
		useDialog = createHook(function useDialog({ store: storeProp, open: openProp, onClose, focusable = true, modal = true, portal = modal, backdrop = modal, hideOnEscape = true, hideOnInteractOutside = true, getPersistentElements, preventBodyScroll = modal, autoFocusOnShow = true, autoFocusOnHide = true, initialFocus, finalFocus, unmountOnHide, unstable_treeSnapshotKey, ...props }) {
			const context = useDialogProviderContext();
			const ref = (0, import_react$1.useRef)(null);
			const backdropRef = (0, import_react$1.useRef)(null);
			const hasDefaultModalPortal = modal && portal && !props.portalElement;
			const handlingHideRef = (0, import_react$1.useRef)(false);
			const dispatchClose = useEvent(() => {
				const dialog = ref.current;
				if (!dialog) return true;
				const event = new Event("close", {
					bubbles: false,
					cancelable: true
				});
				if (onClose) dialog.addEventListener("close", onClose, { once: true });
				dialog.dispatchEvent(event);
				return !event.defaultPrevented;
			});
			const store = useDialogStore({
				store: storeProp || context,
				open: openProp,
				setOpen(open) {
					if (open) return;
					if (handlingHideRef.current) return;
					if (dispatchClose()) return;
					store.setOpen(true);
				}
			});
			useSafeLayoutEffect(() => {
				return store.unstable_onHideRequest((hide) => {
					if (handlingHideRef.current) return;
					handlingHideRef.current = true;
					try {
						if (!dispatchClose()) return;
						hide();
					} finally {
						handlingHideRef.current = false;
					}
				});
			}, [store, dispatchClose]);
			const { portalRef, portalNode, domReady } = usePortalRef(portal, props.portalRef);
			const preserveTabOrderProp = props.preserveTabOrder;
			const preserveTabOrder = useStoreState(store, ["mounted"], (state) => preserveTabOrderProp && !modal && state.mounted);
			const id = useId(props.id);
			const open = useStoreState(store, "open");
			const mounted = useStoreState(store, "mounted");
			const contentElement = useStoreState(store, "contentElement");
			const hidden = isHidden(mounted, props.hidden, props.alwaysVisible);
			usePreventBodyScroll(contentElement, id, preventBodyScroll && !hidden);
			const interactedOutsideRef = (0, import_react$1.useRef)(false);
			const focusedStoreRef = (0, import_react$1.useRef)(null);
			useSafeLayoutEffect(() => {
				return sync(store, ["open"], (state) => {
					if (!state.open) {
						focusedStoreRef.current = null;
						return;
					}
					interactedOutsideRef.current = false;
					if (focusedStoreRef.current === store) return;
					focusedStoreRef.current = null;
				});
			}, [store]);
			useHideOnInteractOutside({
				store,
				hideOnInteractOutside,
				domReady,
				interactedOutsideRef,
				focusedStoreRef
			});
			const { wrapElement, nestedDialogs } = useNestedDialogs(store);
			props = useWrapElement(props, wrapElement, [wrapElement]);
			const lastMousedownRef = (0, import_react$1.useRef)(null);
			if (isSafariBrowser) (0, import_react$1.useEffect)(() => {
				if (!domReady) return;
				const dialog = ref.current;
				if (!dialog) return;
				const doc = getDocument(dialog);
				const onMousedown = (event) => {
					lastMousedownRef.current = event.target;
				};
				doc.addEventListener("mousedown", onMousedown, true);
				return () => {
					doc.removeEventListener("mousedown", onMousedown, true);
				};
			}, [domReady]);
			useSafeLayoutEffect(() => {
				if (!open) return;
				if (focusedStoreRef.current === store) return;
				const dialog = ref.current;
				const hasNamedDisclosure = () => {
					const { disclosureElement } = store.getState();
					if (!disclosureElement) return false;
					if (isCapturedDisclosure(disclosureElement)) return false;
					if (!disclosureElement.isConnected) return false;
					if (dialog && contains(dialog, disclosureElement)) return false;
					return true;
				};
				if (hasNamedDisclosure()) return;
				const setCapturedDisclosure = (element) => {
					captureDisclosure(element);
					store.setDisclosureElement(element);
				};
				const activeElement = getActiveElement(dialog, { activeDescendant: true });
				if (!activeElement) return;
				if (activeElement.tagName === "BODY") {
					const fallback = lastMousedownRef.current;
					lastMousedownRef.current = null;
					if (!fallback?.isConnected) return;
					if (!isFocusable(fallback)) return;
					if (dialog && contains(dialog, fallback)) return;
					setCapturedDisclosure(fallback);
					return;
				}
				if (dialog && contains(dialog, activeElement)) return;
				setCapturedDisclosure(activeElement);
			}, [store, open]);
			(0, import_react$1.useEffect)(() => {
				if (!mounted) return;
				if (!domReady) return;
				const dialog = ref.current;
				if (!dialog) return;
				const win = getWindow(dialog);
				const viewport = win.visualViewport || win;
				const setViewportHeight = () => {
					const height = win.visualViewport?.height ?? win.innerHeight;
					dialog.style.setProperty("--dialog-viewport-height", `${height}px`);
				};
				setViewportHeight();
				viewport.addEventListener("resize", setViewportHeight);
				return () => {
					viewport.removeEventListener("resize", setViewportHeight);
				};
			}, [mounted, domReady]);
			const [needsHiddenDismiss, setNeedsHiddenDismiss] = (0, import_react$1.useState)(false);
			useSafeLayoutEffect(() => {
				if (!(modal && open && domReady) || !contentElement) {
					setNeedsHiddenDismiss(false);
					return;
				}
				const update = () => {
					setNeedsHiddenDismiss(!hasOwnDismiss(contentElement));
				};
				update();
				const { MutationObserver } = getWindow(contentElement);
				const observer = new MutationObserver(update);
				observer.observe(contentElement, {
					childList: true,
					subtree: true
				});
				return () => observer.disconnect();
			}, [
				modal,
				open,
				domReady,
				contentElement
			]);
			useSafeLayoutEffect(() => {
				if (!supportsInert()) return;
				if (open) return;
				if (!mounted) return;
				if (!domReady) return;
				const dialog = ref.current;
				if (!dialog) return;
				return disableTree(dialog);
			}, [
				open,
				mounted,
				domReady
			]);
			const canTakeTreeSnapshot = open && domReady;
			const openingCohortRef = (0, import_react$1.useRef)(null);
			useSafeLayoutEffect(() => {
				if (!id || !hasDefaultModalPortal || !canTakeTreeSnapshot || !portalNode) {
					openingCohortRef.current = null;
					return;
				}
				const dialog = ref.current;
				if (!dialog || !contains(portalNode, dialog)) {
					openingCohortRef.current = null;
					return;
				}
				if (openingCohortRef.current?.portal !== portalNode) openingCohortRef.current = {
					portal: portalNode,
					peers: getLaterOpenModalPortals(dialog)
				};
				openModalPortals.add(portalNode);
				return () => {
					openModalPortals.delete(portalNode);
				};
			}, [
				id,
				canTakeTreeSnapshot,
				hasDefaultModalPortal,
				portalNode
			]);
			const isOpenAndReady = !!canTakeTreeSnapshot;
			const [earlierDialogElementChanges, setEarlierDialogElementChanges] = (0, import_react$1.useState)(0);
			useSafeLayoutEffect(() => {
				if (!isOpenAndReady) return;
				return addOpenDialog(ref, {
					getOutsideCleanups: () => treeRef.current?.outsideCleanups,
					onEarlierDialogElementChange: () => {
						setEarlierDialogElementChanges((count) => count + 1);
					}
				});
			}, [isOpenAndReady]);
			const previousContentElementRef = (0, import_react$1.useRef)(null);
			useSafeLayoutEffect(() => {
				if (!isOpenAndReady) {
					previousContentElementRef.current = null;
					return;
				}
				if (!contentElement) return;
				const previousContentElement = previousContentElementRef.current;
				previousContentElementRef.current = contentElement;
				if (!previousContentElement) return;
				if (previousContentElement === contentElement) return;
				notifyOpenDialogElementChange(ref);
			}, [isOpenAndReady, contentElement]);
			useSafeLayoutEffect(() => {
				if (!id) return;
				if (!canTakeTreeSnapshot) return;
				const dialog = ref.current;
				return createWalkTreeSnapshot(id, [dialog]);
			}, [
				id,
				canTakeTreeSnapshot,
				unstable_treeSnapshotKey
			]);
			useSafeLayoutEffect(() => {
				if (!id) return;
				if (!canTakeTreeSnapshot) return;
				const earlierDialogs = getEarlierOpenDialogElements(ref);
				return addToWalkTreeSnapshot(id, earlierDialogs);
			}, [
				id,
				canTakeTreeSnapshot,
				earlierDialogElementChanges
			]);
			const getPersistentElementsProp = useEvent(getPersistentElements);
			const treeRef = (0, import_react$1.useRef)(null);
			useSafeLayoutEffect(() => {
				return () => {
					const tree = treeRef.current;
					if (!tree) return;
					treeRef.current = null;
					tree.restoreInsideMarks();
					restoreCleanups(tree.outsideCleanups);
				};
			}, [
				id,
				store,
				canTakeTreeSnapshot,
				contentElement,
				modal,
				hasDefaultModalPortal,
				getPersistentElementsProp,
				unstable_treeSnapshotKey
			]);
			useSafeLayoutEffect(() => {
				if (!id) return;
				if (!canTakeTreeSnapshot) return;
				const { disclosureElement } = store.getState();
				const dialog = contentElement ?? ref.current;
				if (!dialog) return;
				const allElements = [
					dialog,
					...getPersistentElementsProp() || [],
					...openingCohortRef.current?.peers || [],
					...nestedDialogs.map((dialog) => dialog.getState().contentElement)
				];
				const previousTree = treeRef.current;
				previousTree?.restoreInsideMarks();
				const restoreInsideMarks = markTreeInside(dialog, allElements);
				const outsideCleanups = modal ? markAndDisableTreeOutside(id, allElements, previousTree?.outsideCleanups) : markTreeOutside(id, [disclosureElement, ...allElements], previousTree?.outsideCleanups);
				treeRef.current = {
					restoreInsideMarks,
					outsideCleanups
				};
			}, [
				id,
				store,
				canTakeTreeSnapshot,
				contentElement,
				modal,
				hasDefaultModalPortal,
				getPersistentElementsProp,
				nestedDialogs,
				unstable_treeSnapshotKey,
				earlierDialogElementChanges
			]);
			const mayAutoFocusOnShow = !!autoFocusOnShow;
			const autoFocusOnShowProp = useBooleanEvent(autoFocusOnShow);
			const [autoFocusEnabled, setAutoFocusEnabled] = (0, import_react$1.useState)(false);
			(0, import_react$1.useEffect)(() => {
				if (!open) return;
				if (!mayAutoFocusOnShow) return;
				if (!domReady) return;
				if (!contentElement?.isConnected) return;
				const element = getElementFromProp(initialFocus, true) || contentElement.querySelector("[data-autofocus=true],[autofocus]") || getFirstTabbableIn(contentElement, true, portal && preserveTabOrder) || contentElement;
				const isElementFocusable = isFocusable(element);
				if (!autoFocusOnShowProp(isElementFocusable ? element : null)) return;
				setAutoFocusEnabled(true);
				queueMicrotask(() => {
					const { open, disclosureElement } = store.getState();
					if (!open) return;
					const activeElement = getActiveElement(contentElement, { frame: false });
					const deepestActiveElement = activeElement && getDeepestActiveElement(activeElement);
					if (focusedStoreRef.current === store && activeElement && deepestActiveElement && isFocusable(deepestActiveElement) && !isElementInDialog(activeElement, contentElement, disclosureElement) && !isElementInDialog(deepestActiveElement, contentElement, disclosureElement)) return;
					if (isFocusable(element)) element.scrollIntoView({
						block: "nearest",
						inline: "nearest"
					});
					element.focus({ preventScroll: true });
				});
			}, [
				open,
				mayAutoFocusOnShow,
				domReady,
				contentElement,
				initialFocus,
				portal,
				preserveTabOrder,
				store,
				autoFocusOnShowProp,
				focusedStoreRef
			]);
			const mayAutoFocusOnHide = !!autoFocusOnHide;
			const autoFocusOnHideProp = useBooleanEvent(autoFocusOnHide);
			const [hasOpened, setHasOpened] = (0, import_react$1.useState)(false);
			useSafeLayoutEffect(() => {
				if (!open) return;
				setHasOpened(true);
				return () => setHasOpened(false);
			}, [open]);
			const focusOnHide = (0, import_react$1.useCallback)((dialog, retry = true) => {
				if (interactedOutsideRef.current) return;
				const { disclosureElement } = store.getState();
				if (isAlreadyFocusingAnotherElement(dialog)) return;
				let element = getElementFromProp(finalFocus) || disclosureElement;
				if (element?.id) {
					const doc = getDocument(element);
					const selector = `[aria-activedescendant="${element.id}"]`;
					const composite = doc.querySelector(selector);
					if (composite) element = composite;
				}
				if (element && !isFocusable(element)) {
					const maybeParentDialog = element.closest("[data-dialog]");
					if (maybeParentDialog?.id) {
						const doc = getDocument(maybeParentDialog);
						const selector = `[aria-controls~="${maybeParentDialog.id}"]`;
						const control = doc.querySelector(selector);
						if (control) element = control;
					}
				}
				const isElementFocusable = element && isFocusable(element);
				if (!isElementFocusable && retry) {
					requestAnimationFrame(() => focusOnHide(dialog, false));
					return;
				}
				if (!autoFocusOnHideProp(isElementFocusable ? element : null)) return;
				if (!isElementFocusable) return;
				element?.focus();
			}, [
				store,
				finalFocus,
				autoFocusOnHideProp
			]);
			const focusedOnHideRef = (0, import_react$1.useRef)(false);
			useSafeLayoutEffect(() => {
				if (open) return;
				if (!hasOpened) return;
				if (!mayAutoFocusOnHide) return;
				const dialog = ref.current;
				focusedOnHideRef.current = true;
				focusOnHide(dialog);
			}, [
				open,
				hasOpened,
				domReady,
				mayAutoFocusOnHide,
				focusOnHide
			]);
			(0, import_react$1.useEffect)(() => {
				if (!hasOpened) return;
				if (!mayAutoFocusOnHide) return;
				const dialog = ref.current;
				return () => {
					if (focusedOnHideRef.current) {
						focusedOnHideRef.current = false;
						return;
					}
					focusOnHide(dialog);
				};
			}, [
				hasOpened,
				mayAutoFocusOnHide,
				focusOnHide
			]);
			const hideOnEscapeProp = useBooleanEvent(hideOnEscape);
			const [escapeEvents] = (0, import_react$1.useState)(() => /* @__PURE__ */ new WeakMap());
			const [escapeKeyPresses] = (0, import_react$1.useState)(() => /* @__PURE__ */ new WeakMap());
			const onKeyDownProp = props.onKeyDown;
			const onKeyDownCaptureProp = props.onKeyDownCapture;
			const onFocusCaptureProp = props.onFocusCapture;
			const onFocusCapture = useEvent((event) => {
				onFocusCaptureProp?.(event);
				if (!store.getState().open) return;
				const target = event.target;
				if (!isNode(target)) return;
				if (!contains(event.currentTarget, target)) return;
				focusedStoreRef.current = store;
			});
			const acceptEscape = useEvent((event) => {
				if (event.key !== "Escape") return false;
				if (!event.bubbles) return false;
				const result = escapeEvents.get(event);
				if (result) {
					if (event.defaultPrevented && !result.defaultPrevented) return false;
					return result.accepted;
				}
				if (event.defaultPrevented) return false;
				const dialog = ref.current;
				if (!mounted) return false;
				if (!dialog) return false;
				const source = getKeyboardEventSource(event);
				let keyPress = escapeKeyPresses.get(source);
				if (!keyPress) {
					keyPress = {
						accepted: !hasDialogAbove(ref) && !escapeKeyPressesThatHid.has(source) && hideOnEscapeProp(event),
						hidden: false
					};
					escapeKeyPresses.set(source, keyPress);
				}
				escapeEvents.set(event, {
					accepted: keyPress.accepted,
					defaultPrevented: event.defaultPrevented
				});
				return keyPress.accepted;
			});
			const hideOnEscapeEvent = useEvent((event) => {
				const accepted = acceptEscape(event);
				escapeEvents.delete(event);
				if (!accepted) return false;
				const source = getKeyboardEventSource(event);
				const keyPress = escapeKeyPresses.get(source);
				if (keyPress?.hidden) return true;
				if (keyPress) keyPress.hidden = true;
				escapeKeyPressesThatHid.add(source);
				store.hide();
				return true;
			});
			const onKeyDown = useEvent((event) => {
				const nativeEvent = event.nativeEvent;
				const wasPropagationStopped = nativeEvent.cancelBubble;
				onKeyDownProp?.(event);
				if (wasPropagationStopped) {
					escapeEvents.delete(nativeEvent);
					return;
				}
				if (!hideOnEscapeEvent(nativeEvent)) return;
				event.stopPropagation();
			});
			const onKeyDownCapture = useEvent((event) => {
				const nativeEvent = event.nativeEvent;
				const wasPropagationStopped = nativeEvent.cancelBubble;
				onKeyDownCaptureProp?.(event);
				if (wasPropagationStopped) {
					escapeEvents.delete(nativeEvent);
					return;
				}
				if (!acceptEscape(nativeEvent)) return;
				if (!(event.isPropagationStopped() || nativeEvent.cancelBubble)) return;
				hideOnEscapeEvent(nativeEvent);
			});
			(0, import_react$1.useEffect)(() => {
				if (!domReady) return;
				if (!mounted) return;
				const onDocumentKeyDownCapture = (event) => {
					if (event.key !== "Escape") return;
					if (!event.bubbles) return;
					if (event.cancelBubble) {
						escapeEvents.delete(event);
						return;
					}
					if (escapeEvents.has(event)) return;
					const dialog = ref.current;
					if (!dialog) return;
					const targets = [event.target, event.composedPath()[0]].filter(isNode);
					const { disclosureElement } = store.getState();
					const isValidTarget = (target) => {
						if (isElement(target) && target.tagName === "BODY") return true;
						if (contains(dialog, target)) return true;
						if (!disclosureElement) return true;
						if (contains(disclosureElement, target)) return true;
						if (isElement(target) && isElementMarked(target, dialog.id)) return true;
						if (isElement(target) && isHiddenDismiss(target, dialog.id)) return true;
						return false;
					};
					if (!targets.some(isValidTarget)) return;
					if (!acceptEscape(event)) return;
					if (!event.cancelBubble) return;
					hideOnEscapeEvent(event);
				};
				const onDocumentKeyDown = (event) => {
					if (!escapeEvents.has(event)) return;
					if (event.cancelBubble) {
						escapeEvents.delete(event);
						return;
					}
					if (!hideOnEscapeEvent(event)) return;
					event.stopPropagation();
				};
				const win = contentElement ? getWindow(contentElement) : void 0;
				return chain(addGlobalEventListener("keydown", onDocumentKeyDownCapture, true, win), addGlobalEventListener("keydown", onDocumentKeyDown, false, win));
			}, [
				store,
				domReady,
				mounted,
				contentElement,
				hideOnEscapeEvent,
				acceptEscape,
				escapeEvents
			]);
			props = useWrapElement(props, (element) => /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)(HeadingLevel, {
				level: modal ? 1 : void 0,
				children: element
			}), [modal]);
			const hiddenProp = props.hidden;
			const alwaysVisible = props.alwaysVisible;
			props = useWrapElement(props, (element) => /* @__PURE__ */ (0, import_jsx_runtime$1.jsxs)(import_jsx_runtime$1.Fragment, { children: [needsHiddenDismiss && /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)("button", {
				type: "button",
				tabIndex: -1,
				"data-dialog-hidden-dismiss": id || "",
				style: getVisuallyHiddenStyle(),
				onClick: store.hide,
				children: "Dismiss popup"
			}), element] }), [
				needsHiddenDismiss,
				id,
				store
			]);
			props = useWrapElement(props, (element) => /* @__PURE__ */ (0, import_jsx_runtime$1.jsxs)(import_jsx_runtime$1.Fragment, { children: [!!backdrop && /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)(DialogBackdrop, {
				store,
				backdrop,
				backdropRef,
				hidden: hiddenProp,
				alwaysVisible
			}), element] }), [
				store,
				backdrop,
				hiddenProp,
				alwaysVisible
			]);
			const [headingId, setHeadingId] = (0, import_react$1.useState)();
			const [descriptionId, setDescriptionId] = (0, import_react$1.useState)();
			props = useWrapElement(props, (element) => /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)(DialogScopedContextProvider, {
				value: store,
				children: /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)(DialogHeadingContext.Provider, {
					value: setHeadingId,
					children: /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)(DialogDescriptionContext.Provider, {
						value: setDescriptionId,
						children: element
					})
				})
			}), [store]);
			props = {
				"data-dialog": "",
				role: "dialog",
				tabIndex: focusable ? -1 : void 0,
				"aria-labelledby": props["aria-label"] != null ? void 0 : headingId,
				"aria-describedby": descriptionId,
				...props,
				"data-dialog-portal": hasDefaultModalPortal ? portalNode?.id : void 0,
				id,
				ref: useMergeRefs(ref, props.ref),
				onFocusCapture,
				onKeyDown,
				onKeyDownCapture
			};
			props = useFocusableContainer({
				...props,
				autoFocusOnShow: autoFocusEnabled
			});
			props = useDisclosureContent({
				store,
				...props,
				unstable_otherElementRef: backdropRef
			});
			props = useFocusable({
				...props,
				focusable
			});
			props = usePortal({
				portal,
				...props,
				portalRef,
				preserveTabOrder
			});
			return props;
		});
		DialogWithStore = createDialogComponent(forwardRef(function DialogImpl(props) {
			const htmlProps = useDialog(props);
			return createElement(TagName$1, htmlProps);
		}), useDialogProviderContext);
		DialogWithInternalStore = forwardRef(function DialogWithInternalStore(props) {
			const store = useDialogStore({ open: props.open });
			return /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)(DialogWithStore, {
				...props,
				store
			});
		});
		forwardRef(function Dialog(props) {
			const context = useDialogProviderContext();
			if (props.store || context || !props.unmountOnHide) return /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)(DialogWithStore, { ...props });
			return /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)(DialogWithInternalStore, { ...props });
		});
	})))();
}
//#endregion
//#region ../node_modules/.store/@ariakit/react-components@0.7.0-SPgsuugSDrFrx2DGVqJK3g/node_modules/@ariakit/react-components/dist/__chunks/B3k5_R1L.js
function getBasePlacement(placement) {
	return placement.split("-")[0];
}
function init_B3k5_R1L() {
	return (init_B3k5_R1L = __esmMin((() => {})))();
}
//#endregion
//#region ../node_modules/.store/@ariakit/react-components@0.7.0-SPgsuugSDrFrx2DGVqJK3g/node_modules/@ariakit/react-components/dist/popover/popover.js
function createDOMRect(x = 0, y = 0, width = 0, height = 0) {
	if (typeof DOMRect === "function") return new DOMRect(x, y, width, height);
	const rect = {
		x,
		y,
		width,
		height,
		top: y,
		right: x + width,
		bottom: y + height,
		left: x
	};
	return {
		...rect,
		toJSON: () => rect
	};
}
function getDOMRect(anchorRect) {
	if (!anchorRect) return createDOMRect();
	const { x, y, width, height } = anchorRect;
	return createDOMRect(x, y, width, height);
}
function getAnchorElement(anchorElement, getAnchorRect) {
	return {
		contextElement: anchorElement || void 0,
		getBoundingClientRect: () => {
			const anchor = anchorElement;
			const anchorRect = getAnchorRect?.(anchor);
			if (anchorRect || !anchor) return getDOMRect(anchorRect);
			return anchor.getBoundingClientRect();
		}
	};
}
function isValidPlacement(flip) {
	return /^(?:top|bottom|left|right)(?:-(?:start|end))?$/.test(flip);
}
function roundByDPR(value) {
	const dpr = window.devicePixelRatio || 1;
	return Math.round(value * dpr) / dpr;
}
function getOverflowPaddingValue(padding) {
	if (typeof padding === "number") return padding;
	return Math.max(padding.left ?? 0, padding.right ?? 0);
}
function getOffsetMiddleware(arrowElement, props) {
	return offset(({ placement }) => {
		const arrowOffset = (arrowElement?.clientHeight || 0) / 2;
		const finalGutter = typeof props.gutter === "number" ? props.gutter + arrowOffset : props.gutter ?? arrowOffset;
		return {
			crossAxis: !!!placement.split("-")[1] ? props.shift : void 0,
			mainAxis: finalGutter,
			alignmentAxis: props.shift
		};
	});
}
function getFlipMiddleware(props) {
	if (props.flip === false) return;
	const fallbackPlacements = typeof props.flip === "string" ? props.flip.split(" ") : void 0;
	invariant(!fallbackPlacements || fallbackPlacements.every(isValidPlacement), "`flip` expects a spaced-delimited list of placements");
	return flip({
		padding: props.overflowPadding,
		fallbackPlacements
	});
}
function getShiftMiddleware(props) {
	if (!props.slide && !props.overlap) return;
	return shift({
		mainAxis: props.slide,
		crossAxis: props.overlap,
		padding: props.overflowPadding,
		limiter: limitShift()
	});
}
function getSizeMiddleware(props, shouldCancel) {
	return size({
		padding: props.overflowPadding,
		apply({ elements, availableWidth, availableHeight, rects }) {
			if (shouldCancel?.()) return;
			const wrapper = elements.floating;
			const referenceWidth = Math.round(rects.reference.width);
			availableWidth = Math.floor(availableWidth);
			availableHeight = Math.floor(availableHeight);
			wrapper.style.setProperty("--popover-anchor-width", `${referenceWidth}px`);
			wrapper.style.setProperty("--popover-available-width", `${availableWidth}px`);
			wrapper.style.setProperty("--popover-available-height", `${availableHeight}px`);
			if (props.sameWidth) wrapper.style.width = `${referenceWidth}px`;
			if (props.fitViewport) {
				wrapper.style.maxWidth = `${availableWidth}px`;
				wrapper.style.maxHeight = `${availableHeight}px`;
			}
		}
	});
}
function getArrowMiddleware(arrowElement, props) {
	if (!arrowElement) return;
	return arrow({
		element: arrowElement,
		padding: props.arrowPadding
	});
}
var import_react, import_jsx_runtime, TagName, placingWriters, usePopover;
function init_popover() {
	return (init_popover = __esmMin((() => {
		init_popover_context();
		init_disclosure_content();
		init_DpKu70iZ();
		init_dist();
		init_dist$1();
		import_react = require_react();
		import_jsx_runtime = require_jsx_runtime();
		init_dist$2();
		init_dist$3();
		init_floating_ui_dom();
		TagName = "div";
		placingWriters = /* @__PURE__ */ new WeakMap();
		usePopover = createHook(function usePopover({ store, modal = false, portal = modal, preserveTabOrder = true, autoFocusOnShow = true, wrapperProps, fixed = false, flip = true, shift = 0, slide = true, overlap = false, sameWidth = false, fitViewport = false, gutter, arrowPadding = 4, overflowPadding = 8, getAnchorRect, updatePosition, ...props }) {
			const context = usePopoverProviderContext();
			store = store || context;
			invariant(store, "Popover must receive a `store` prop or be wrapped in a PopoverProvider component.");
			const arrowElement = useStoreState(store, "arrowElement");
			const anchorElement = useStoreState(store, "anchorElement");
			const shouldPreserveTabOrder = preserveTabOrder && portal && !modal;
			const disclosureElement = useStoreState(store, shouldPreserveTabOrder ? ["disclosureElement"] : [], (state) => shouldPreserveTabOrder ? state.disclosureElement : null);
			const popoverElement = useStoreState(store, "popoverElement");
			const placing = useStoreState(store, "unstable_placing");
			const contentElement = useStoreState(store, "contentElement");
			const placement = useStoreState(store, "placement");
			const mounted = useStoreState(store, "mounted");
			const rendered = useStoreState(store, "rendered");
			const defaultArrowElementRef = (0, import_react.useRef)(null);
			const positioned = !placing;
			const { portalRef, domReady } = usePortalRef(portal, props.portalRef);
			const getAnchorRectProp = useEvent(getAnchorRect);
			const updatePositionProp = useEvent(updatePosition);
			const hasCustomUpdatePosition = !!updatePosition;
			const overflowPaddingTop = typeof overflowPadding === "number" ? overflowPadding : overflowPadding.top ?? 0;
			const overflowPaddingRight = typeof overflowPadding === "number" ? overflowPadding : overflowPadding.right ?? 0;
			const overflowPaddingBottom = typeof overflowPadding === "number" ? overflowPadding : overflowPadding.bottom ?? 0;
			const overflowPaddingLeft = typeof overflowPadding === "number" ? overflowPadding : overflowPadding.left ?? 0;
			const hiddenWhileUnmounted = !mounted && isHidden(mounted, props.hidden, props.alwaysVisible);
			useSafeLayoutEffect(() => {
				if (mounted) store?.setState("unstable_placing", true);
				if (!popoverElement?.isConnected) return;
				const positioningPadding = {
					top: overflowPaddingTop,
					right: overflowPaddingRight,
					bottom: overflowPaddingBottom,
					left: overflowPaddingLeft
				};
				popoverElement.style.setProperty("--popover-overflow-padding", `${getOverflowPaddingValue(positioningPadding)}px`);
				if (hiddenWhileUnmounted && !hasCustomUpdatePosition) return;
				const anchor = getAnchorElement(anchorElement, getAnchorRectProp);
				let canceled = false;
				let placed = false;
				const shouldCancelUpdate = () => {
					if (canceled) return true;
					if (!popoverElement.isConnected) return true;
					return false;
				};
				const updatePosition = async () => {
					if (shouldCancelUpdate()) return;
					if (!mounted) return;
					if (!arrowElement) defaultArrowElementRef.current = defaultArrowElementRef.current || document.createElement("div");
					const arrow = arrowElement || defaultArrowElementRef.current;
					const middleware = [
						getOffsetMiddleware(arrow, {
							gutter,
							shift
						}),
						getFlipMiddleware({
							flip,
							overflowPadding: positioningPadding
						}),
						getShiftMiddleware({
							slide,
							shift,
							overlap,
							overflowPadding: positioningPadding
						}),
						getArrowMiddleware(arrow, { arrowPadding }),
						getSizeMiddleware({
							sameWidth,
							fitViewport,
							overflowPadding: positioningPadding
						}, shouldCancelUpdate)
					];
					const pos = await computePosition(anchor, popoverElement, {
						placement,
						strategy: fixed ? "fixed" : "absolute",
						middleware
					});
					if (shouldCancelUpdate()) return;
					store?.setState("currentPlacement", pos.placement);
					const x = roundByDPR(pos.x);
					const y = roundByDPR(pos.y);
					Object.assign(popoverElement.style, {
						top: "0",
						left: "0",
						transform: `translate3d(${x}px,${y}px,0)`
					});
					placed = true;
					if (arrow && pos.middlewareData.arrow) {
						const { x: arrowX, y: arrowY } = pos.middlewareData.arrow;
						const side = getBasePlacement(pos.placement);
						const centerX = arrow.clientWidth / 2;
						const centerY = arrow.clientHeight / 2;
						const originX = arrowX != null ? arrowX + centerX : -centerX;
						const originY = arrowY != null ? arrowY + centerY : -centerY;
						popoverElement.style.setProperty("--popover-transform-origin", {
							top: `${originX}px calc(100% + ${centerY}px)`,
							bottom: `${originX}px ${-centerY}px`,
							left: `calc(100% + ${centerX}px) ${originY}px`,
							right: `${-centerX}px ${originY}px`
						}[side]);
						Object.assign(arrow.style, {
							left: arrowX != null ? `${arrowX}px` : "",
							top: arrowY != null ? `${arrowY}px` : "",
							right: "",
							bottom: "",
							[side]: "100%"
						});
					}
				};
				const update = async () => {
					if (shouldCancelUpdate()) return;
					try {
						if (hasCustomUpdatePosition) await updatePositionProp({ updatePosition });
						else await updatePosition();
					} catch (error) {
						if (placed && !shouldCancelUpdate()) store?.setState("unstable_placing", false);
						throw error;
					}
					if (shouldCancelUpdate()) return;
					store?.setState("unstable_placing", false);
				};
				const cancelAutoUpdate = autoUpdate(anchor, popoverElement, update, { elementResize: typeof ResizeObserver === "function" });
				return () => {
					canceled = true;
					cancelAutoUpdate();
				};
			}, [
				store,
				rendered,
				popoverElement,
				arrowElement,
				anchorElement,
				placement,
				mounted,
				hiddenWhileUnmounted,
				domReady,
				fixed,
				flip,
				shift,
				slide,
				overlap,
				sameWidth,
				fitViewport,
				gutter,
				arrowPadding,
				overflowPaddingTop,
				overflowPaddingRight,
				overflowPaddingBottom,
				overflowPaddingLeft,
				getAnchorRectProp,
				hasCustomUpdatePosition,
				updatePositionProp
			]);
			useSafeLayoutEffect(() => {
				if (!mounted) return;
				if (!domReady) return;
				if (!popoverElement?.isConnected) return;
				if (!contentElement?.isConnected) return;
				const applyZIndex = () => {
					popoverElement.style.zIndex = getComputedStyle(contentElement).zIndex;
				};
				applyZIndex();
				let raf = requestAnimationFrame(() => {
					raf = requestAnimationFrame(applyZIndex);
				});
				return () => cancelAnimationFrame(raf);
			}, [
				mounted,
				domReady,
				popoverElement,
				contentElement
			]);
			useSafeLayoutEffect(() => {
				if (!store) return;
				const currentStore = store;
				placingWriters.set(currentStore, (placingWriters.get(currentStore) ?? 0) + 1);
				const desync = sync(currentStore, ["mounted"], (state) => {
					currentStore.setState("unstable_placing", state.mounted);
				});
				return () => {
					desync();
					placingWriters.set(currentStore, (placingWriters.get(currentStore) ?? 1) - 1);
					queueMicrotask(() => {
						if (placingWriters.get(currentStore)) return;
						currentStore.setState("unstable_placing", false);
					});
				};
			}, [store]);
			const position = fixed ? "fixed" : "absolute";
			props = useWrapElement(props, (element) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				...wrapperProps,
				style: {
					position,
					top: 0,
					left: 0,
					width: "max-content",
					...wrapperProps?.style
				},
				ref: store?.setPopoverElement,
				children: element
			}), [
				store,
				position,
				wrapperProps
			]);
			props = useWrapElement(props, (element) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PopoverScopedContextProvider, {
				value: store,
				children: element
			}), [store]);
			props = {
				"data-placing": placing || void 0,
				...props,
				style: {
					position: "relative",
					...props.style
				}
			};
			props = useDialog({
				store,
				modal,
				portal,
				preserveTabOrder,
				preserveTabOrderAnchor: disclosureElement || anchorElement,
				autoFocusOnShow: positioned && autoFocusOnShow,
				...props,
				portalRef
			});
			return props;
		});
		createDialogComponent(forwardRef(function Popover(props) {
			const htmlProps = usePopover(props);
			return createElement(TagName, htmlProps);
		}), usePopoverProviderContext);
	})))();
}
//#endregion
//#region ../node_modules/.store/@ariakit/components@0.1.14-LY5snkwIfivHs3k-20UEzg/node_modules/@ariakit/components/dist/popover/popover-store.js
/**
* Creates a popover store.
*/
function createPopoverStore({ popover: otherPopover, ...props } = {}) {
	const store = mergeStore(props.store, omit(otherPopover, [
		"arrowElement",
		"anchorElement",
		"contentElement",
		"popoverElement",
		"disclosureElement",
		"unstable_placing"
	]));
	throwOnConflictingProps(props, store);
	const syncState = store?.getState();
	const dialog = createDialogStore({
		...props,
		store
	});
	const placement = defaultValue(props.placement, syncState?.placement, "bottom");
	const initialState = {
		...dialog.getState(),
		placement,
		currentPlacement: placement,
		anchorElement: defaultValue(syncState?.anchorElement, null),
		popoverElement: defaultValue(syncState?.popoverElement, null),
		arrowElement: defaultValue(syncState?.arrowElement, null),
		rendered: Symbol("rendered"),
		unstable_placing: false
	};
	const popover = createStore(initialState, dialog, store);
	let syncedAnchorElement = initialState.anchorElement === initialState.disclosureElement ? initialState.anchorElement : null;
	setup(popover, () => sync(popover, ["anchorElement", "disclosureElement"], (state) => {
		if (state.anchorElement && state.anchorElement !== syncedAnchorElement) {
			syncedAnchorElement = null;
			return;
		}
		syncedAnchorElement = state.disclosureElement;
		popover.setState("anchorElement", syncedAnchorElement);
	}));
	setup(popover, () => otherPopover?.unstable_onHideRequest(dialog.unstable_requestHide));
	return {
		...dialog,
		...popover,
		setAnchorElement: (element) => popover.setState("anchorElement", element),
		setPopoverElement: (element) => popover.setState("popoverElement", element),
		setArrowElement: (element) => popover.setState("arrowElement", element),
		render: () => popover.setState("rendered", Symbol("rendered"))
	};
}
function init_popover_store() {
	return (init_popover_store = __esmMin((() => {
		init_dialog_store();
		init_dist$3();
		init_dist$1();
	})))();
}
//#endregion
//#region ../node_modules/.store/@ariakit/react-components@0.7.0-SPgsuugSDrFrx2DGVqJK3g/node_modules/@ariakit/react-components/dist/popover/popover-store.js
function usePopoverStoreProps(store, update, props) {
	useUpdateEffect(update, [props.popover, update]);
	useStoreProps(store, props, "placement");
	return useDialogStoreProps(store, update, props);
}
function init_popover_store$1() {
	return (init_popover_store$1 = __esmMin((() => {
		init_dialog_store$1();
		init_dist();
		init_dist$2();
	})))();
}
//#endregion
export { useDisclosureProviderContext as A, init_disclosure_content as C, init_dialog_context as D, DialogHeadingContext as E, useDialogProviderContext as O, useDisclosureStore as S, useDisclosureContent as T, PopoverScopedContextProvider as _, init_popover as a, usePopoverProviderContext as b, init_B3k5_R1L as c, isCapturedDisclosure as d, Role as f, PopoverContextProvider as g, init_visually_hidden as h, init_popover_store as i, init_disclosure_context as k, createDialogComponent as l, getVisuallyHiddenStyle as m, usePopoverStoreProps as n, usePopover as o, init_role$1 as p, createPopoverStore as r, getBasePlacement as s, init_popover_store$1 as t, init_DpKu70iZ as u, init_popover_context as v, isHidden as w, init_disclosure_store$1 as x, usePopoverContext as y };
