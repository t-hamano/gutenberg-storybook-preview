import { n as __esmMin, o as __toESM } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_react } from "./react-Bujh4FgW.js";
import { t as require_react_dom } from "./react-dom-Cvcx0Gdb.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C1RZKCc6.js";
import { t as require_shim } from "./shim-BRPpxEK8.js";
import { t as require_with_selector } from "./with-selector-CV7NA94Y.js";
import { S as useRefWithInit, _ as init_reactVersion, d as NOOP, f as init_empty, r as useRenderElement, t as init_useRenderElement, u as EMPTY_OBJECT, v as isReactVersionAtLeast, x as init_useRefWithInit } from "./useRenderElement-Dkv6YH0v.js";
import { n as useIsoLayoutEffect, t as init_useIsoLayoutEffect } from "./useIsoLayoutEffect-DDc8Lhn-.js";
import { n as useStableCallback, t as init_useStableCallback } from "./useStableCallback-Cql5w11m.js";
import { a as init_useOpenChangeComplete, d as startingStyle$1, i as transitionStatusMapping, l as endingStyle$1, n as useTransitionStatus, o as useOpenChangeComplete, r as init_stateAttributesMapping, t as init_useTransitionStatus, u as init_TransitionStatusDataAttributes } from "./useTransitionStatus-DtGN_KnE.js";
import { n as init_useTimeout, r as useTimeout, t as Timeout } from "./useTimeout-Cl_2zLqB.js";
import { a as init_useForcedRerendering, i as useId, o as useForcedRerendering, r as init_useId } from "./useBaseUiId-CESTxyJs.js";
import { A as init_createBaseUIEventDetails, E as triggerPress, O as createChangeEventDetails, T as triggerHover, b as outsidePress, s as escapeKey, u as init_reason_parts, y as none } from "./reason-parts-0ghxNVBE.js";
import { _ as isShadowRoot, a as getNodeName, c as getParentNode, f as isElement, h as isNode, l as getWindow, m as isLastTraversableNode, p as isHTMLElement, t as getComputedStyle, u as init_floating_ui_utils_dom } from "./floating-ui.utils.dom-s51Otfgf.js";
import { n as ownerDocument } from "./owner-CcC_2sZ3.js";
import { n as useValueAsRef, r as addEventListener, t as init_useValueAsRef } from "./useValueAsRef-fShAMhQR.js";
import { A as apple, C as isReactEvent, D as init_env, F as lowerUserAgent, O as jsdom, P as init_shared, _ as FOCUSABLE_ATTRIBUTE, b as init_event, j as init_os, l as init_composite, n as init_DirectionContext, r as useDirection, t as DirectionContext, u as isElementVisible, v as TYPEABLE_SELECTOR, w as isVirtualClick, x as isClickLikeEvent, y as init_constants$1 } from "./DirectionContext-BIiMId1B.js";
import { a as init_shadowDom, i as getTarget, n as closest, r as contains, t as activeElement } from "./shadowDom-C1kYxCnm.js";
import { n as visuallyHidden, t as init_visuallyHidden } from "./visuallyHidden-BnauQW1F.js";
import { a as getAlignment, c as getAxisLength, g as init_floating_ui_utils, h as getSideAxis, m as getSide, o as getAlignmentAxis, p as getPaddingObject, r as evaluate, t as clamp } from "./floating-ui.utils-ChRPHDv6.js";
import { a as init_floating_ui_dom, n as autoUpdate } from "./floating-ui.dom-CuUnCMhL.js";
import { a as offset, c as useFloating, i as limitShift, n as flip, o as shift, r as init_floating_ui_react_dom, s as size } from "./floating-ui.react-dom-UmV1QRVv.js";
//#region ../node_modules/.store/@base-ui/utils@0.5.0--7My7Lubseca8je9LSEweA/node_modules/@base-ui/utils/platform/engine.mjs
var webkit, gecko;
function init_engine() {
	return (init_engine = __esmMin((() => {
		init_shared();
		webkit = typeof CSS !== "undefined" && !!CSS.supports?.("-webkit-backdrop-filter:none");
		gecko = !webkit && lowerUserAgent.includes("firefox");
		!webkit && lowerUserAgent.includes("chrom");
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/utils@0.5.0--7My7Lubseca8je9LSEweA/node_modules/@base-ui/utils/platform/screen-reader.mjs
var voiceOver;
function init_screen_reader() {
	return (init_screen_reader = __esmMin((() => {
		init_os();
		voiceOver = apple;
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/utils/CommonPopupDataAttributes.mjs
var open, closed, startingStyle, endingStyle, anchorHidden;
function init_CommonPopupDataAttributes() {
	return (init_CommonPopupDataAttributes = __esmMin((() => {
		init_TransitionStatusDataAttributes();
		open = "data-open";
		closed = "data-closed";
		startingStyle = startingStyle$1;
		endingStyle = endingStyle$1;
		anchorHidden = "data-anchor-hidden";
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/utils/CommonTriggerDataAttributes.mjs
var popupOpen$1, pressed;
function init_CommonTriggerDataAttributes() {
	return (init_CommonTriggerDataAttributes = __esmMin((() => {
		popupOpen$1 = "data-popup-open";
		pressed = "data-pressed";
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/utils/popupStateMapping.mjs
var TRIGGER_HOOK, PRESSABLE_TRIGGER_HOOK, POPUP_OPEN_HOOK, POPUP_CLOSED_HOOK, ANCHOR_HIDDEN_HOOK, triggerOpenStateMapping, pressableTriggerOpenStateMapping, popupStateMapping, popupTransitionStateMapping;
function init_popupStateMapping() {
	return (init_popupStateMapping = __esmMin((() => {
		init_stateAttributesMapping();
		init_CommonPopupDataAttributes();
		init_CommonTriggerDataAttributes();
		TRIGGER_HOOK = { [popupOpen$1]: "" };
		PRESSABLE_TRIGGER_HOOK = {
			[popupOpen$1]: "",
			[pressed]: ""
		};
		POPUP_OPEN_HOOK = { [open]: "" };
		POPUP_CLOSED_HOOK = { [closed]: "" };
		ANCHOR_HIDDEN_HOOK = { [anchorHidden]: "" };
		triggerOpenStateMapping = { open(value) {
			if (value) return TRIGGER_HOOK;
			return null;
		} };
		pressableTriggerOpenStateMapping = { open(value) {
			if (value) return PRESSABLE_TRIGGER_HOOK;
			return null;
		} };
		popupStateMapping = {
			open(value) {
				if (value) return POPUP_OPEN_HOOK;
				return POPUP_CLOSED_HOOK;
			},
			anchorHidden(value) {
				if (value) return ANCHOR_HIDDEN_HOOK;
				return null;
			}
		};
		popupTransitionStateMapping = {
			...popupStateMapping,
			...transitionStatusMapping
		};
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/tooltip/trigger/TooltipTriggerDataAttributes.mjs
var triggerDisabled;
function init_TooltipTriggerDataAttributes() {
	return (init_TooltipTriggerDataAttributes = __esmMin((() => {
		init_popupStateMapping();
		triggerDisabled = "data-trigger-disabled";
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/floating-ui-react/utils/element.mjs
function isTargetInsideEnabledTrigger(target, triggerElements) {
	if (!isElement(target)) return false;
	const targetElement = target;
	if (triggerElements.hasElement(targetElement)) return !targetElement.hasAttribute(triggerDisabled);
	for (const [, trigger] of triggerElements.entries()) if (contains(trigger, targetElement)) return !trigger.hasAttribute(triggerDisabled);
	return false;
}
function isEventTargetWithin(event, node) {
	if (node == null) return false;
	if ("composedPath" in event) return event.composedPath().includes(node);
	const eventAgain = event;
	return eventAgain.target != null && node.contains(eventAgain.target);
}
function isRootElement(element) {
	return element.matches("html,body");
}
function isTypeableElement(element) {
	return isHTMLElement(element) && element.matches("input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])");
}
function isInteractiveElement(element) {
	return closest(element, `button,a[href],[role="button"],select,[tabindex]:not([tabindex="-1"]),${TYPEABLE_SELECTOR}`) != null;
}
function isTypeableCombobox(element) {
	if (!element) return false;
	return element.getAttribute("role") === "combobox" && isTypeableElement(element);
}
function matchesFocusVisible(element) {
	if (!element || jsdom) return true;
	try {
		return element.matches(":focus-visible");
	} catch (_e) {
		return true;
	}
}
function getFloatingFocusElement(floatingElement) {
	if (!floatingElement) return null;
	return floatingElement.hasAttribute("data-base-ui-focusable") ? floatingElement : floatingElement.querySelector(`[data-base-ui-focusable]`) || floatingElement;
}
function init_element() {
	return (init_element = __esmMin((() => {
		init_floating_ui_utils_dom();
		init_env();
		init_shadowDom();
		init_constants$1();
		init_TooltipTriggerDataAttributes();
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/utils@0.5.0--7My7Lubseca8je9LSEweA/node_modules/@base-ui/utils/mergeCleanups.mjs
/**
* Combines multiple cleanup functions into a single cleanup function.
*/
function mergeCleanups(...cleanups) {
	return () => {
		for (let i = 0; i < cleanups.length; i += 1) {
			const cleanup = cleanups[i];
			if (cleanup) cleanup();
		}
	};
}
function init_mergeCleanups() {
	return (init_mergeCleanups = __esmMin((() => {})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/utils/FocusGuard.mjs
var import_react$11, import_jsx_runtime$3, FocusGuard;
function init_FocusGuard() {
	return (init_FocusGuard = __esmMin((() => {
		import_react$11 = /* @__PURE__ */ __toESM(require_react(), 1);
		init_useIsoLayoutEffect();
		init_screen_reader(), init_engine();
		init_visuallyHidden();
		import_jsx_runtime$3 = require_jsx_runtime();
		FocusGuard = /*#__PURE__*/ import_react$11.forwardRef(function FocusGuard(props, ref) {
			const [role, setRole] = import_react$11.useState();
			useIsoLayoutEffect(() => {
				if (voiceOver && webkit) setRole("button");
			}, []);
			const restProps = {
				tabIndex: 0,
				role
			};
			return /*#__PURE__*/ (0, import_jsx_runtime$3.jsx)("span", {
				...props,
				ref,
				style: visuallyHidden,
				"aria-hidden": role ? void 0 : true,
				...restProps,
				"data-base-ui-focus-guard": ""
			});
		});
		FocusGuard.displayName = "FocusGuard";
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/floating-ui-react/utils/tabbable.mjs
function getParentElement(element) {
	const assignedSlot = element.assignedSlot;
	if (assignedSlot) return assignedSlot;
	if (element.parentElement) return element.parentElement;
	const rootNode = element.getRootNode();
	return isShadowRoot(rootNode) ? rootNode.host : null;
}
function getDetailsSummary(details) {
	for (const child of Array.from(details.children)) if (getNodeName(child) === "summary") return child;
	return null;
}
function isWithinOpenDetailsSummary(element, details) {
	const summary = getDetailsSummary(details);
	return !!summary && (element === summary || contains(summary, element));
}
function isFocusableCandidate(element) {
	const nodeName = element ? getNodeName(element) : "";
	return element != null && element.matches(CANDIDATE_SELECTOR) && (nodeName !== "summary" || element.parentElement != null && getNodeName(element.parentElement) === "details" && getDetailsSummary(element.parentElement) === element) && (nodeName !== "details" || getDetailsSummary(element) == null) && (nodeName !== "input" || element.type !== "hidden");
}
function isFocusableElement(element) {
	if (!isFocusableCandidate(element) || !element.isConnected || element.matches(":disabled")) return false;
	for (let current = element; current; current = getParentElement(current)) {
		const isAncestor = current !== element;
		const isSlot = getNodeName(current) === "slot";
		if (current.hasAttribute("inert")) return false;
		if (isAncestor && getNodeName(current) === "details" && !current.open && !isWithinOpenDetailsSummary(element, current) || current.hasAttribute("hidden") || !isSlot && !isVisibleInTabbableTree(current, isAncestor)) return false;
	}
	return true;
}
function isVisibleInTabbableTree(element, isAncestor) {
	const styles = getComputedStyle(element);
	if (!isAncestor) return isElementVisible(element, styles);
	return styles.display !== "none";
}
function getTabIndex(element) {
	const tabIndex = element.tabIndex;
	if (tabIndex < 0) {
		const nodeName = getNodeName(element);
		if (nodeName === "details" || nodeName === "audio" || nodeName === "video" || isHTMLElement(element) && element.isContentEditable) return 0;
	}
	return tabIndex;
}
function getNamedRadioInput(element) {
	if (getNodeName(element) !== "input") return null;
	const input = element;
	return input.type === "radio" && input.name !== "" ? input : null;
}
function isTabbableRadio(element, candidates) {
	const input = getNamedRadioInput(element);
	if (!input) return true;
	const checkedRadio = candidates.find((candidate) => {
		const radio = getNamedRadioInput(candidate);
		return radio?.name === input.name && radio.form === input.form && radio.checked;
	});
	if (checkedRadio) return checkedRadio === input;
	return candidates.find((candidate) => {
		const radio = getNamedRadioInput(candidate);
		return radio?.name === input.name && radio.form === input.form;
	}) === input;
}
function getComposedChildren(container) {
	if (isHTMLElement(container) && getNodeName(container) === "slot") {
		const assignedElements = container.assignedElements({ flatten: true });
		if (assignedElements.length > 0) return assignedElements;
	}
	if (isHTMLElement(container) && container.shadowRoot) return Array.from(container.shadowRoot.children);
	return Array.from(container.children);
}
function appendCandidates(container, list) {
	getComposedChildren(container).forEach((child) => {
		if (isFocusableCandidate(child)) list.push(child);
		appendCandidates(child, list);
	});
}
function appendMatchingElements(container, selector, list) {
	getComposedChildren(container).forEach((child) => {
		if (isHTMLElement(child) && child.matches(selector)) list.push(child);
		appendMatchingElements(child, selector, list);
	});
}
function isTabbable(element) {
	return isFocusableElement(element) && getTabIndex(element) >= 0;
}
function focusable(container) {
	const candidates = [];
	appendCandidates(container, candidates);
	return candidates.filter(isFocusableElement);
}
function tabbable(container) {
	const candidates = focusable(container);
	return candidates.filter((element) => getTabIndex(element) >= 0 && isTabbableRadio(element, candidates));
}
function getTabbableIn(container, dir) {
	const list = tabbable(container);
	const len = list.length;
	if (len === 0) return;
	const active = activeElement(ownerDocument(container));
	const index = list.indexOf(active);
	return list[index === -1 ? dir === 1 ? 0 : len - 1 : index + dir];
}
function getNextTabbable(referenceElement) {
	return getTabbableIn(ownerDocument(referenceElement).body, 1) || referenceElement;
}
function getPreviousTabbable(referenceElement) {
	return getTabbableIn(ownerDocument(referenceElement).body, -1) || referenceElement;
}
function getTabbableNearElement(referenceElement, direction, exclude) {
	if (!referenceElement) return null;
	const list = [];
	appendCandidates(ownerDocument(referenceElement).body, list);
	const index = list.indexOf(referenceElement);
	if (index === -1) return null;
	const candidates = list.filter(isFocusableElement);
	for (let offset = 1; offset < list.length; offset += 1) {
		const element = list[(index + direction * offset + list.length) % list.length];
		if (!contains(exclude, element) && isTabbable(element) && isTabbableRadio(element, candidates)) return element;
	}
	return list[index];
}
function isOutsideEvent(event, container) {
	const containerElement = container || event.currentTarget;
	const relatedTarget = event.relatedTarget;
	return !relatedTarget || !contains(containerElement, relatedTarget);
}
function disableFocusInside(container) {
	tabbable(container).forEach((element) => {
		element.dataset.tabindex = element.getAttribute("tabindex") || "";
		element.setAttribute("tabindex", "-1");
	});
}
function enableFocusInside(container) {
	const elements = [];
	appendMatchingElements(container, "[data-tabindex]", elements);
	elements.forEach((element) => {
		const tabindex = element.dataset.tabindex;
		delete element.dataset.tabindex;
		if (tabindex) element.setAttribute("tabindex", tabindex);
		else element.removeAttribute("tabindex");
	});
}
var CANDIDATE_SELECTOR;
function init_tabbable() {
	return (init_tabbable = __esmMin((() => {
		init_floating_ui_utils_dom();
		init_element();
		init_composite();
		CANDIDATE_SELECTOR = "a[href],button,input,select,textarea,summary,details,iframe,object,embed,[tabindex],[contenteditable]:not([contenteditable=\"false\"]),audio[controls],video[controls]";
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/floating-ui-react/utils/nodes.mjs
function getNodeChildren(nodes, id, onlyOpenChildren = true) {
	return nodes.filter((node) => node.parentId === id).flatMap((child) => [...!onlyOpenChildren || child.context?.open ? [child] : [], ...getNodeChildren(nodes, child.id, onlyOpenChildren)]);
}
function getNodeAncestors(nodes, id) {
	let allAncestors = [];
	let currentParentId = nodes.find((node) => node.id === id)?.parentId;
	while (currentParentId) {
		const currentNode = nodes.find((node) => node.id === currentParentId);
		currentParentId = currentNode?.parentId;
		if (currentNode) allAncestors = allAncestors.concat(currentNode);
	}
	return allAncestors;
}
function init_nodes() {
	return (init_nodes = __esmMin((() => {})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/floating-ui-react/utils/createAttribute.mjs
function createAttribute(name) {
	return `data-base-ui-${name}`;
}
function init_createAttribute() {
	return (init_createAttribute = __esmMin((() => {})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/internals/constants.mjs
var DISABLED_TRANSITIONS_STYLE, CLICK_TRIGGER_IDENTIFIER, BASE_UI_SWIPE_IGNORE_ATTRIBUTE, LEGACY_SWIPE_IGNORE_ATTRIBUTE, BASE_UI_SWIPE_IGNORE_SELECTOR, DROPDOWN_COLLISION_AVOIDANCE, POPUP_COLLISION_AVOIDANCE, ownerVisuallyHidden;
function init_constants() {
	return (init_constants = __esmMin((() => {
		DISABLED_TRANSITIONS_STYLE = { style: { transition: "none" } };
		CLICK_TRIGGER_IDENTIFIER = "data-base-ui-click-trigger";
		BASE_UI_SWIPE_IGNORE_ATTRIBUTE = "data-base-ui-swipe-ignore";
		LEGACY_SWIPE_IGNORE_ATTRIBUTE = "data-swipe-ignore";
		BASE_UI_SWIPE_IGNORE_SELECTOR = `[${BASE_UI_SWIPE_IGNORE_ATTRIBUTE}]`;
		`${LEGACY_SWIPE_IGNORE_ATTRIBUTE}`;
		DROPDOWN_COLLISION_AVOIDANCE = { fallbackAxisSide: "none" };
		POPUP_COLLISION_AVOIDANCE = { fallbackAxisSide: "end" };
		ownerVisuallyHidden = {
			clipPath: "inset(50%)",
			position: "fixed",
			top: 0,
			left: 0
		};
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/floating-ui-react/components/FloatingPortal.mjs
function useFloatingPortalNode(props = {}) {
	const { ref, container: containerProp, componentProps = EMPTY_OBJECT, elementProps } = props;
	const uniqueId = useId();
	const parentPortalNode = usePortalContext()?.portalNode;
	const [containerElement, setContainerElement] = import_react$10.useState(null);
	const [portalNode, setPortalNode] = import_react$10.useState(null);
	const setPortalNodeRef = useStableCallback((node) => {
		if (node !== null) setPortalNode(node);
	});
	const containerRef = import_react$10.useRef(null);
	useIsoLayoutEffect(() => {
		if (containerProp === null) {
			if (containerRef.current) {
				containerRef.current = null;
				setPortalNode(null);
				setContainerElement(null);
			}
			return;
		}
		const resolvedContainer = (containerProp && (isNode(containerProp) ? containerProp : containerProp.current)) ?? parentPortalNode ?? document.body;
		if (resolvedContainer == null) {
			if (containerRef.current) {
				containerRef.current = null;
				setPortalNode(null);
				setContainerElement(null);
			}
			return;
		}
		if (containerRef.current !== resolvedContainer) {
			containerRef.current = resolvedContainer;
			setPortalNode(null);
			setContainerElement(resolvedContainer);
		}
	}, [containerProp, parentPortalNode]);
	const portalElement = useRenderElement("div", componentProps, {
		ref: [ref, setPortalNodeRef],
		props: [{
			id: uniqueId,
			[attr]: ""
		}, elementProps]
	});
	const portalSubtree = containerElement && portalElement ? /*#__PURE__*/ import_react_dom$1.createPortal(portalElement, containerElement) : null;
	return {
		node: portalNode,
		nodeId: /*#__PURE__*/ import_react$10.isValidElement(portalElement) ? portalElement.props.id : void 0,
		subtree: portalSubtree
	};
}
var import_react$10, import_react_dom$1, import_jsx_runtime$2, PortalContext, usePortalContext, attr, FloatingPortal;
function init_FloatingPortal() {
	return (init_FloatingPortal = __esmMin((() => {
		import_react$10 = /* @__PURE__ */ __toESM(require_react(), 1);
		import_react_dom$1 = /* @__PURE__ */ __toESM(require_react_dom(), 1);
		init_floating_ui_utils_dom();
		init_useId();
		init_useIsoLayoutEffect();
		init_useStableCallback();
		init_empty();
		init_FocusGuard();
		init_tabbable();
		init_createBaseUIEventDetails();
		init_reason_parts();
		init_useRenderElement();
		init_constants();
		import_jsx_runtime$2 = require_jsx_runtime();
		PortalContext = /*#__PURE__*/ import_react$10.createContext(null);
		PortalContext.displayName = "PortalContext";
		usePortalContext = () => import_react$10.useContext(PortalContext);
		attr = createAttribute("portal");
		FloatingPortal = /*#__PURE__*/ import_react$10.forwardRef(function FloatingPortal(componentProps, forwardedRef) {
			const { render, className, style, children, container, portalOwnerRole, ...elementProps } = componentProps;
			const { node: portalNode, nodeId: portalNodeId, subtree: portalSubtree } = useFloatingPortalNode({
				container,
				ref: forwardedRef,
				componentProps,
				elementProps
			});
			const beforeOutsideRef = import_react$10.useRef(null);
			const afterOutsideRef = import_react$10.useRef(null);
			const beforeInsideRef = import_react$10.useRef(null);
			const afterInsideRef = import_react$10.useRef(null);
			const [focusManagerState, setFocusManagerState] = import_react$10.useState(null);
			const focusInsideDisabledRef = import_react$10.useRef(false);
			const modal = focusManagerState?.modal;
			const open = focusManagerState?.open;
			const shouldRenderGuards = !!focusManagerState && !focusManagerState.modal && focusManagerState.open && !!portalNode;
			import_react$10.useEffect(() => {
				if (!portalNode || modal) return;
				function onFocus(event) {
					if (portalNode && event.relatedTarget && isOutsideEvent(event)) {
						if (event.type === "focusin") {
							if (focusInsideDisabledRef.current) {
								enableFocusInside(portalNode);
								focusInsideDisabledRef.current = false;
							}
						} else {
							disableFocusInside(portalNode);
							focusInsideDisabledRef.current = true;
						}
					}
				}
				return mergeCleanups(addEventListener(portalNode, "focusin", onFocus, true), addEventListener(portalNode, "focusout", onFocus, true));
			}, [portalNode, modal]);
			useIsoLayoutEffect(() => {
				if (!portalNode || open !== true || !focusInsideDisabledRef.current) return;
				enableFocusInside(portalNode);
				focusInsideDisabledRef.current = false;
			}, [open, portalNode]);
			const portalContextValue = import_react$10.useMemo(() => ({
				beforeOutsideRef,
				afterOutsideRef,
				beforeInsideRef,
				afterInsideRef,
				portalNode,
				setFocusManagerState
			}), [portalNode]);
			return /*#__PURE__*/ (0, import_jsx_runtime$2.jsxs)(import_react$10.Fragment, { children: [portalSubtree, /*#__PURE__*/ (0, import_jsx_runtime$2.jsxs)(PortalContext.Provider, {
				value: portalContextValue,
				children: [
					shouldRenderGuards && portalNode && /*#__PURE__*/ (0, import_jsx_runtime$2.jsx)(FocusGuard, {
						"data-type": "outside",
						ref: beforeOutsideRef,
						onFocus: (event) => {
							if (isOutsideEvent(event, portalNode)) beforeInsideRef.current?.focus();
							else getPreviousTabbable(focusManagerState ? focusManagerState.domReference : null)?.focus();
						}
					}),
					shouldRenderGuards && portalNode && /*#__PURE__*/ (0, import_jsx_runtime$2.jsx)("span", {
						role: portalOwnerRole,
						"aria-owns": portalNodeId,
						style: ownerVisuallyHidden
					}),
					portalNode && /*#__PURE__*/ import_react_dom$1.createPortal(children, portalNode),
					shouldRenderGuards && portalNode && /*#__PURE__*/ (0, import_jsx_runtime$2.jsx)(FocusGuard, {
						"data-type": "outside",
						ref: afterOutsideRef,
						onFocus: (event) => {
							if (isOutsideEvent(event, portalNode)) afterInsideRef.current?.focus();
							else {
								getNextTabbable(focusManagerState ? focusManagerState.domReference : null)?.focus();
								if (focusManagerState?.closeOnFocusOut) focusManagerState?.onOpenChange(false, createChangeEventDetails("focus-out", event.nativeEvent));
							}
						}
					})
				]
			})] });
		});
		FloatingPortal.displayName = "FloatingPortal";
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/floating-ui-react/utils/createEventEmitter.mjs
function createEventEmitter() {
	const map = /* @__PURE__ */ new Map();
	return {
		emit(event, data) {
			map.get(event)?.forEach((listener) => listener(data));
		},
		on(event, listener) {
			if (!map.has(event)) map.set(event, /* @__PURE__ */ new Set());
			map.get(event).add(listener);
		},
		off(event, listener) {
			map.get(event)?.delete(listener);
		}
	};
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/floating-ui-react/components/FloatingTreeStore.mjs
var FloatingTreeStore;
function init_FloatingTreeStore() {
	return (init_FloatingTreeStore = __esmMin((() => {
		FloatingTreeStore = class {
			nodesRef = { current: [] };
			events = createEventEmitter();
			addNode(node) {
				this.nodesRef.current.push(node);
			}
			removeNode(node) {
				const index = this.nodesRef.current.findIndex((n) => n === node);
				if (index !== -1) this.nodesRef.current.splice(index, 1);
			}
		};
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/floating-ui-react/components/FloatingTree.mjs
/**
* Registers a node into the `FloatingTree`, returning its id.
* @see https://floating-ui.com/docs/FloatingTree
*/
function useFloatingNodeId(externalTree) {
	const id = useId();
	const tree = useFloatingTree(externalTree);
	const parentId = useFloatingParentNodeId();
	useIsoLayoutEffect(() => {
		if (!id) return;
		const node = {
			id,
			parentId
		};
		tree?.addNode(node);
		return () => {
			tree?.removeNode(node);
		};
	}, [
		tree,
		id,
		parentId
	]);
	return id;
}
/**
* Provides parent node context for nested floating elements.
* @see https://floating-ui.com/docs/FloatingTree
* @internal
*/
function FloatingNode(props) {
	const { children, id } = props;
	const parentId = useFloatingParentNodeId();
	return /*#__PURE__*/ (0, import_jsx_runtime$1.jsx)(FloatingNodeContext.Provider, {
		value: import_react$9.useMemo(() => ({
			id,
			parentId
		}), [id, parentId]),
		children
	});
}
/**
* Provides context for nested floating elements when they are not children of
* each other on the DOM.
* This is not necessary in all cases, except when there must be explicit communication between parent and child floating elements. It is necessary for:
* - The `bubbles` option in the `useDismiss()` Hook
* - Nested virtual list navigation
* - Nested floating elements that each open on hover
* - Custom communication between parent and child floating elements
* @see https://floating-ui.com/docs/FloatingTree
* @internal
*/
function FloatingTree(props) {
	const { children, externalTree } = props;
	const tree = useRefWithInit(() => externalTree ?? new FloatingTreeStore()).current;
	return /*#__PURE__*/ (0, import_jsx_runtime$1.jsx)(FloatingTreeContext.Provider, {
		value: tree,
		children
	});
}
var import_react$9, import_jsx_runtime$1, FloatingNodeContext, FloatingTreeContext, useFloatingParentNodeId, useFloatingTree;
function init_FloatingTree() {
	return (init_FloatingTree = __esmMin((() => {
		import_react$9 = /* @__PURE__ */ __toESM(require_react(), 1);
		init_useId();
		init_useIsoLayoutEffect();
		init_useRefWithInit();
		init_FloatingTreeStore();
		import_jsx_runtime$1 = require_jsx_runtime();
		FloatingNodeContext = /*#__PURE__*/ import_react$9.createContext(null);
		FloatingNodeContext.displayName = "FloatingNodeContext";
		FloatingTreeContext = /*#__PURE__*/ import_react$9.createContext(null);
		FloatingTreeContext.displayName = "FloatingTreeContext";
		useFloatingParentNodeId = () => import_react$9.useContext(FloatingNodeContext)?.id || null;
		useFloatingTree = (externalTree) => {
			const contextTree = import_react$9.useContext(FloatingTreeContext);
			return externalTree ?? contextTree;
		};
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/floating-ui-react/hooks/useDismiss.mjs
function alwaysFalse() {
	return false;
}
function normalizeProp(normalizable) {
	return {
		escapeKey: typeof normalizable === "boolean" ? normalizable : normalizable?.escapeKey ?? false,
		outsidePress: typeof normalizable === "boolean" ? normalizable : normalizable?.outsidePress ?? true
	};
}
/**
* Closes the floating element when a dismissal is requested — by default, when
* the user presses the `escape` key or outside of the floating element.
* @see https://floating-ui.com/docs/useDismiss
*/
function useDismiss(store, props = {}) {
	const { enabled = true, escapeKey: escapeKey$1 = true, outsidePress: outsidePressProp = true, outsidePressEvent = "sloppy", referencePress = alwaysFalse, bubbles, externalTree } = props;
	const open = store.useState("open");
	const floatingElement = store.useState("floatingElement");
	const { dataRef, events } = store.context;
	const tree = useFloatingTree(externalTree);
	const outsidePressFn = useStableCallback(typeof outsidePressProp === "function" ? outsidePressProp : () => false);
	const outsidePress$1 = typeof outsidePressProp === "function" ? outsidePressFn : outsidePressProp;
	const outsidePressEnabled = outsidePress$1 !== false;
	const getOutsidePressEventProp = useStableCallback(() => outsidePressEvent);
	const { escapeKey: escapeKeyBubbles, outsidePress: outsidePressBubbles } = normalizeProp(bubbles);
	const pressStartedInsideRef = import_react$8.useRef(false);
	const pressStartPreventedRef = import_react$8.useRef(false);
	const suppressNextOutsideClickRef = import_react$8.useRef(false);
	const sawPressWhileOpenRef = import_react$8.useRef(false);
	const isComposingRef = import_react$8.useRef(false);
	const currentPointerTypeRef = import_react$8.useRef("");
	const touchStateRef = import_react$8.useRef(null);
	const cancelDismissOnEndTimeout = useTimeout();
	const clearInsideReactTreeTimeout = useTimeout();
	const compositionTimeout = useTimeout();
	const clearInsideReactTree = useStableCallback(() => {
		clearInsideReactTreeTimeout.clear();
		dataRef.current.insideReactTree = false;
	});
	const hasBlockingChild = useStableCallback((bubbleKey) => {
		const nodeId = dataRef.current.floatingContext?.nodeId;
		return (tree ? getNodeChildren(tree.nodesRef.current, nodeId) : []).some((child) => child.context?.open && !child.context.dataRef.current[bubbleKey]);
	});
	const isEventWithinOwnElements = useStableCallback((event) => {
		return isEventTargetWithin(event, store.select("floatingElement")) || isEventTargetWithin(event, store.select("domReferenceElement"));
	});
	const closeOnReferencePress = useStableCallback((event) => {
		if (!referencePress()) return;
		store.setOpen(false, createChangeEventDetails(triggerPress, event.nativeEvent));
	});
	const closeOnEscapeKeyDown = useStableCallback((event) => {
		if (!open || !enabled || !escapeKey$1 || event.key !== "Escape") return;
		const native = isReactEvent(event) ? event.nativeEvent : event;
		if (isComposingRef.current || native.isComposing) return;
		if (!escapeKeyBubbles && hasBlockingChild("__escapeKeyBubbles")) return;
		const eventDetails = createChangeEventDetails(escapeKey, native);
		store.setOpen(false, eventDetails);
		if (!eventDetails.isCanceled) event.preventDefault();
		if (!escapeKeyBubbles && !eventDetails.isPropagationAllowed) event.stopPropagation();
	});
	const markInsideReactTree = useStableCallback(() => {
		dataRef.current.insideReactTree = true;
		clearInsideReactTreeTimeout.start(0, clearInsideReactTree);
	});
	const markPressStartedInsideReactTree = useStableCallback((event) => {
		if (!open || !enabled || event.button !== 0) return;
		const target = getTarget(event.nativeEvent);
		if (!contains(store.select("floatingElement"), target)) return;
		if (!pressStartedInsideRef.current) {
			pressStartedInsideRef.current = true;
			pressStartPreventedRef.current = false;
		}
	});
	const markInsidePressStartPrevented = useStableCallback((event) => {
		if (!open || !enabled) return;
		if (!(event.defaultPrevented || event.nativeEvent.defaultPrevented)) return;
		if (pressStartedInsideRef.current) pressStartPreventedRef.current = true;
	});
	import_react$8.useEffect(() => {
		function handleOpenChange(details) {
			if (!details.open) sawPressWhileOpenRef.current = false;
		}
		events.on("openchange", handleOpenChange);
		return () => {
			events.off("openchange", handleOpenChange);
		};
	}, [events]);
	import_react$8.useEffect(() => clearInsideReactTree, [clearInsideReactTree]);
	import_react$8.useEffect(() => {
		if (!open || !enabled) {
			if (!open) {
				sawPressWhileOpenRef.current = false;
				isComposingRef.current = false;
				currentPointerTypeRef.current = "";
				touchStateRef.current = null;
			}
			return clearInsideReactTree;
		}
		dataRef.current.__escapeKeyBubbles = escapeKeyBubbles;
		dataRef.current.__outsidePressBubbles = outsidePressBubbles;
		const preventedPressSuppressionTimeout = new Timeout();
		const doc = ownerDocument(floatingElement);
		function handleCompositionStart() {
			compositionTimeout.clear();
			isComposingRef.current = true;
		}
		function handleCompositionEnd() {
			isComposingRef.current = true;
			compositionTimeout.start(webkit ? 5 : 0, () => {
				isComposingRef.current = false;
			});
		}
		function suppressImmediateOutsideClickAfterPreventedStart() {
			suppressNextOutsideClickRef.current = true;
			preventedPressSuppressionTimeout.start(0, () => {
				suppressNextOutsideClickRef.current = false;
			});
		}
		function resetPressStartState() {
			pressStartedInsideRef.current = false;
			pressStartPreventedRef.current = false;
		}
		function getOutsidePressEvent() {
			const type = currentPointerTypeRef.current;
			const computedType = type === "pen" || !type ? "mouse" : type;
			const outsidePressEventValue = getOutsidePressEventProp();
			const resolved = typeof outsidePressEventValue === "function" ? outsidePressEventValue() : outsidePressEventValue;
			if (typeof resolved === "string") return resolved;
			return resolved[computedType];
		}
		function shouldIgnoreEvent(event) {
			const computedOutsidePressEvent = getOutsidePressEvent();
			return computedOutsidePressEvent === "intentional" && event.type !== "click" || computedOutsidePressEvent === "sloppy" && event.type === "click";
		}
		function isEventWithinFloatingTree(event) {
			const nodeId = dataRef.current.floatingContext?.nodeId;
			const targetIsInsideChildren = tree && getNodeChildren(tree.nodesRef.current, nodeId).some((node) => isEventTargetWithin(event, node.context?.elements.floating));
			return isEventWithinOwnElements(event) || targetIsInsideChildren;
		}
		function closeOnPressOutside(event) {
			if (shouldIgnoreEvent(event)) {
				if (event.type !== "click" && !isEventWithinOwnElements(event)) {
					preventedPressSuppressionTimeout.clear();
					suppressNextOutsideClickRef.current = false;
				}
				clearInsideReactTree();
				return;
			}
			if (dataRef.current.insideReactTree) {
				clearInsideReactTree();
				return;
			}
			const target = getTarget(event);
			const inertSelector = `[${createAttribute("inert")}]`;
			const targetRoot = isElement(target) ? target.getRootNode() : null;
			const markers = Array.from((isShadowRoot(targetRoot) ? targetRoot : ownerDocument(store.select("floatingElement"))).querySelectorAll(inertSelector));
			const triggers = store.context.triggerElements;
			if (target && (triggers.hasElement(target) || triggers.hasMatchingElement((trigger) => contains(trigger, target)))) return;
			let targetRootAncestor = isElement(target) ? target : null;
			while (targetRootAncestor && !isLastTraversableNode(targetRootAncestor)) {
				const nextParent = getParentNode(targetRootAncestor);
				if (isLastTraversableNode(nextParent) || !isElement(nextParent)) break;
				targetRootAncestor = nextParent;
			}
			if (markers.length && isElement(target) && !isRootElement(target) && !contains(target, store.select("floatingElement")) && markers.every((marker) => !contains(targetRootAncestor, marker))) return;
			if (isHTMLElement(target) && !("touches" in event)) {
				const lastTraversableNode = isLastTraversableNode(target);
				const style = getComputedStyle(target);
				const scrollRe = /auto|scroll/;
				const isScrollableX = lastTraversableNode || scrollRe.test(style.overflowX);
				const isScrollableY = lastTraversableNode || scrollRe.test(style.overflowY);
				const canScrollX = isScrollableX && target.clientWidth > 0 && target.scrollWidth > target.clientWidth;
				const canScrollY = isScrollableY && target.clientHeight > 0 && target.scrollHeight > target.clientHeight;
				const isRTL = style.direction === "rtl";
				const pressedVerticalScrollbar = canScrollY && (isRTL ? event.offsetX <= target.offsetWidth - target.clientWidth : event.offsetX > target.clientWidth);
				const pressedHorizontalScrollbar = canScrollX && event.offsetY > target.clientHeight;
				if (pressedVerticalScrollbar || pressedHorizontalScrollbar) return;
			}
			if (isEventWithinFloatingTree(event)) return;
			if (getOutsidePressEvent() === "intentional") {
				if (event.detail !== 0 && !isVirtualClick(event) && !sawPressWhileOpenRef.current) return;
				if (suppressNextOutsideClickRef.current) {
					preventedPressSuppressionTimeout.clear();
					suppressNextOutsideClickRef.current = false;
					return;
				}
			}
			if (typeof outsidePress$1 === "function" && !outsidePress$1(event)) return;
			if (hasBlockingChild("__outsidePressBubbles")) return;
			store.setOpen(false, createChangeEventDetails(outsidePress, event));
			clearInsideReactTree();
		}
		function handlePointerDown(event) {
			if (getOutsidePressEvent() !== "sloppy" || event.pointerType === "touch" || !store.select("open") || !enabled || isEventWithinOwnElements(event)) return;
			closeOnPressOutside(event);
		}
		function handleTouchStart(event) {
			if (getOutsidePressEvent() !== "sloppy" || !store.select("open") || !enabled || isEventWithinOwnElements(event)) return;
			const touch = event.touches[0];
			if (touch) {
				touchStateRef.current = {
					startTime: Date.now(),
					startX: touch.clientX,
					startY: touch.clientY,
					dismissOnTouchEnd: false,
					dismissOnMouseDown: true
				};
				cancelDismissOnEndTimeout.start(1e3, () => {
					if (touchStateRef.current) {
						touchStateRef.current.dismissOnTouchEnd = false;
						touchStateRef.current.dismissOnMouseDown = false;
					}
				});
			}
		}
		function addTargetEventListenerOnce(event, listener) {
			const target = getTarget(event);
			if (!target) return;
			const unsubscribe = addEventListener(target, event.type, () => {
				listener(event);
				unsubscribe();
			});
		}
		function handleTouchStartCapture(event) {
			currentPointerTypeRef.current = "touch";
			addTargetEventListenerOnce(event, handleTouchStart);
		}
		function closeOnPressOutsideCapture(event) {
			cancelDismissOnEndTimeout.clear();
			if (event.type === "pointerdown") {
				if (event.button === 0) sawPressWhileOpenRef.current = true;
				currentPointerTypeRef.current = event.pointerType;
			}
			if (event.type === "mousedown" && touchStateRef.current && !touchStateRef.current.dismissOnMouseDown) return;
			addTargetEventListenerOnce(event, (targetEvent) => {
				if (targetEvent.type === "pointerdown") handlePointerDown(targetEvent);
				else closeOnPressOutside(targetEvent);
			});
		}
		function handlePressEndCapture(event) {
			if (event.type === "pointercancel") sawPressWhileOpenRef.current = false;
			if (!pressStartedInsideRef.current) return;
			const pressStartedInsideDefaultPrevented = pressStartPreventedRef.current;
			resetPressStartState();
			if (getOutsidePressEvent() !== "intentional") return;
			if (event.type === "pointercancel") {
				if (pressStartedInsideDefaultPrevented) suppressImmediateOutsideClickAfterPreventedStart();
				return;
			}
			if (isEventWithinFloatingTree(event)) return;
			if (pressStartedInsideDefaultPrevented) {
				suppressImmediateOutsideClickAfterPreventedStart();
				return;
			}
			if (typeof outsidePress$1 === "function" && !outsidePress$1(event)) return;
			preventedPressSuppressionTimeout.clear();
			suppressNextOutsideClickRef.current = true;
			clearInsideReactTree();
		}
		function handleTouchMove(event) {
			if (getOutsidePressEvent() !== "sloppy" || !touchStateRef.current || isEventWithinOwnElements(event)) return;
			const touch = event.touches[0];
			if (!touch) return;
			const deltaX = Math.abs(touch.clientX - touchStateRef.current.startX);
			const deltaY = Math.abs(touch.clientY - touchStateRef.current.startY);
			const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
			if (distance > 5) touchStateRef.current.dismissOnTouchEnd = true;
			if (distance > 10) {
				closeOnPressOutside(event);
				cancelDismissOnEndTimeout.clear();
				touchStateRef.current = null;
			}
		}
		function handleTouchMoveCapture(event) {
			addTargetEventListenerOnce(event, handleTouchMove);
		}
		function handleTouchEnd(event) {
			if (getOutsidePressEvent() !== "sloppy" || !touchStateRef.current || isEventWithinOwnElements(event)) return;
			if (touchStateRef.current.dismissOnTouchEnd) closeOnPressOutside(event);
			cancelDismissOnEndTimeout.clear();
			touchStateRef.current = null;
		}
		function handleTouchEndCapture(event) {
			addTargetEventListenerOnce(event, handleTouchEnd);
		}
		const unsubscribe = mergeCleanups(escapeKey$1 && mergeCleanups(addEventListener(doc, "keydown", closeOnEscapeKeyDown), addEventListener(doc, "compositionstart", handleCompositionStart), addEventListener(doc, "compositionend", handleCompositionEnd)), outsidePressEnabled && mergeCleanups(addEventListener(doc, "click", closeOnPressOutsideCapture, true), addEventListener(doc, "pointerdown", closeOnPressOutsideCapture, true), addEventListener(doc, "pointerup", handlePressEndCapture, true), addEventListener(doc, "pointercancel", handlePressEndCapture, true), addEventListener(doc, "mousedown", closeOnPressOutsideCapture, true), addEventListener(doc, "mouseup", handlePressEndCapture, true), addEventListener(doc, "touchstart", handleTouchStartCapture, {
			capture: true,
			passive: true
		}), addEventListener(doc, "touchmove", handleTouchMoveCapture, {
			capture: true,
			passive: true
		}), addEventListener(doc, "touchend", handleTouchEndCapture, {
			capture: true,
			passive: true
		})));
		return () => {
			unsubscribe();
			preventedPressSuppressionTimeout.clear();
			resetPressStartState();
			suppressNextOutsideClickRef.current = false;
		};
	}, [
		dataRef,
		floatingElement,
		escapeKey$1,
		outsidePressEnabled,
		outsidePress$1,
		open,
		enabled,
		escapeKeyBubbles,
		outsidePressBubbles,
		closeOnEscapeKeyDown,
		clearInsideReactTree,
		getOutsidePressEventProp,
		hasBlockingChild,
		isEventWithinOwnElements,
		tree,
		store,
		cancelDismissOnEndTimeout,
		compositionTimeout
	]);
	const reference = import_react$8.useMemo(() => ({
		onKeyDown: closeOnEscapeKeyDown,
		onPointerDown: closeOnReferencePress,
		onClick: closeOnReferencePress
	}), [closeOnEscapeKeyDown, closeOnReferencePress]);
	const floating = import_react$8.useMemo(() => ({
		onKeyDown: closeOnEscapeKeyDown,
		onPointerDown: markInsidePressStartPrevented,
		onMouseDown: markInsidePressStartPrevented,
		onClickCapture: markInsideReactTree,
		onMouseDownCapture(event) {
			markInsideReactTree();
			markPressStartedInsideReactTree(event);
		},
		onPointerDownCapture(event) {
			markInsideReactTree();
			markPressStartedInsideReactTree(event);
		},
		onMouseUpCapture: markInsideReactTree,
		onTouchEndCapture: markInsideReactTree,
		onTouchMoveCapture: markInsideReactTree
	}), [
		closeOnEscapeKeyDown,
		markInsideReactTree,
		markPressStartedInsideReactTree,
		markInsidePressStartPrevented
	]);
	return import_react$8.useMemo(() => enabled ? {
		reference,
		floating,
		trigger: reference
	} : {}, [
		enabled,
		reference,
		floating
	]);
}
var import_react$8;
function init_useDismiss() {
	return (init_useDismiss = __esmMin((() => {
		import_react$8 = /* @__PURE__ */ __toESM(require_react(), 1);
		init_useStableCallback();
		init_useTimeout();
		init_floating_ui_utils_dom();
		init_engine();
		init_FloatingTree();
		init_createBaseUIEventDetails();
		init_reason_parts();
		init_element();
		init_event();
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/floating-ui-react/hooks/useSyncedFloatingRootContext.mjs
/**
* Narrowed to the store members this hook uses so consumers do not need to provide
* unrelated store capabilities.
*/
/**
* Keeps the provided FloatingRootStore in sync with the provided PopupStore.
*/
function useSyncedFloatingRootContext(options) {
	const { popupStore, treatPopupAsFloatingElement = false, floatingRootContext: store, floatingId, nested, onOpenChange } = options;
	const open = popupStore.useState("open");
	const referenceElement = popupStore.useState("activeTriggerElement");
	const floatingElement = popupStore.useState(treatPopupAsFloatingElement ? "popupElement" : "positionerElement");
	const handleOpenChange = onOpenChange;
	popupStore.useSyncedValue("floatingId", floatingId);
	useIsoLayoutEffect(() => {
		const valuesToSync = {
			open,
			floatingId,
			referenceElement,
			floatingElement
		};
		if (isElement(referenceElement)) valuesToSync.domReferenceElement = referenceElement;
		if (store.state.positionReference === store.state.referenceElement) valuesToSync.positionReference = referenceElement;
		store.update(valuesToSync);
	}, [
		open,
		floatingId,
		referenceElement,
		floatingElement,
		store
	]);
	store.context.onOpenChange = handleOpenChange;
	store.context.nested = nested;
	return store;
}
function init_useSyncedFloatingRootContext() {
	return (init_useSyncedFloatingRootContext = __esmMin((() => {
		init_useIsoLayoutEffect();
		init_floating_ui_utils_dom();
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/internals/useUnmountAfterClose.mjs
/**
* Keeps a popup mounted through its closing animation and unmounts it once the animation
* finishes, unless the close cycle opted out through `preventUnmountOnClose`.
* Store-agnostic: hosts sync `mounted` and `transitionStatus` wherever they need them.
*
* @returns `forceUnmount` unmounts the popup immediately. It is a no-op once the popup is already
*   unmounted, so calling it after the automatic unmount doesn't repeat the completion callback,
*   and a call while the popup is open only takes effect if a close commits in the same batch.
*/
function useUnmountAfterClose(parameters) {
	const { open, ref, preventUnmountOnClose, setPreventUnmountOnClose: setPreventUnmountOnCloseParam, onUnmount, animateInitialOpen } = parameters;
	const setPreventUnmountOnClose = useStableCallback(setPreventUnmountOnCloseParam);
	const { mounted, setMounted, transitionStatus } = useTransitionStatus(open, false, false, animateInitialOpen);
	const preventUnmountingOnClose = open ? false : preventUnmountOnClose;
	useIsoLayoutEffect(() => {
		if (open) setPreventUnmountOnClose(false);
	}, [open, setPreventUnmountOnClose]);
	const mountedRef = import_react$7.useRef(mounted);
	const pendingUnmountRef = import_react$7.useRef(false);
	const rerender = useForcedRerendering();
	const unmount = () => {
		mountedRef.current = false;
		setMounted(false);
		onUnmount();
	};
	useIsoLayoutEffect(() => {
		mountedRef.current = mounted;
		if (pendingUnmountRef.current) {
			pendingUnmountRef.current = false;
			if (!open && mounted) unmount();
		}
	});
	const forceUnmount = useStableCallback(() => {
		if (!mountedRef.current) return;
		if (open) {
			pendingUnmountRef.current = true;
			rerender();
			return;
		}
		unmount();
	});
	useOpenChangeComplete({
		enabled: mounted && !open && !preventUnmountingOnClose,
		open,
		ref,
		onComplete() {
			if (!open) forceUnmount();
		}
	});
	return {
		mounted,
		transitionStatus,
		preventUnmountingOnClose,
		forceUnmount
	};
}
var import_react$7;
function init_useUnmountAfterClose() {
	return (init_useUnmountAfterClose = __esmMin((() => {
		import_react$7 = /* @__PURE__ */ __toESM(require_react(), 1);
		init_useStableCallback();
		init_useIsoLayoutEffect();
		init_useForcedRerendering();
		init_useTransitionStatus();
		init_useOpenChangeComplete();
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/utils/popups/popupStoreUtils.mjs
/**
* Returns the default `initialFocus` resolver for a popup. When opened by touch it focuses the
* popup element itself to prevent the virtual keyboard from opening (required for Android
* specifically; iOS handles this automatically). Otherwise it falls back to the default behavior.
*/
function createDefaultInitialFocus(popupRef) {
	return (interactionType) => interactionType === "touch" ? popupRef.current : true;
}
/**
* The subset of a popup handle that a Root needs to bind its store to. Both the real handle classes
* and any test double satisfy it.
*/
/**
* Creates and owns a popup store on behalf of a Root part. The store is created exactly once, with
* controlled props and root state synced separately after creation. Sets up the synced floating
* root context and returns the store.
*
* @param createStore Factory that builds the store. Called exactly once, receiving the floating id
* and whether the popup is nested inside another floating element, both resolved on the first render.
* @param treatPopupAsFloatingElement Whether the popup element is passed to Floating UI as the
* floating element instead of the default positioner.
*/
function usePopupRootStore(createStore, treatPopupAsFloatingElement = false) {
	const floatingId = useId();
	const nested = useFloatingParentNodeId() != null;
	const store = useRefWithInit(() => createStore(floatingId, nested)).current;
	useSyncedFloatingRootContext({
		popupStore: store,
		treatPopupAsFloatingElement,
		floatingRootContext: store.state.floatingRootContext,
		floatingId,
		nested,
		onOpenChange: store.setOpen
	});
	return store;
}
/**
* Attaches a Root's store to a handle for this component's committed lifetime. Popup Roots render
* it before their interactions and user children so its layout effect runs before descendant layout
* effects. This lets descendants call the handle during the Root's initial commit without attaching
* during render, which would leak suspended or abandoned stores. Store subscribers are notified by
* `attachStore` in this ordinary layout phase, where React permits synchronous updates.
*
* Popup Roots must render this component only when a handle is present so handle-less Roots avoid
* mounting an extra fiber and layout effect.
*/
function PopupHandleAttachment({ handle, store }) {
	useIsoLayoutEffect(() => {
		return handle.attachStore(store);
	}, [handle, store]);
	return null;
}
function syncTriggerCount(store) {
	const triggerCount = store.context.triggerElements.size;
	if (store.select("open") && store.state.triggerCount !== triggerCount) store.set("triggerCount", triggerCount);
}
/**
* Returns a stable callback ref that registers/unregisters the trigger element in the store.
*
* Stable so a downstream ref merger that retains the callback it was first given still reaches the
* trigger's current store. The registration is tracked as a `(store, id, element)` triple, so
* unregistering targets the store the element was actually registered in.
*
* Since the callback never changes, the caller must re-run it from a layout effect keyed on
* `[store, id]` to migrate an already-registered element. That effect is also what registers the
* element in the first place when `id` only resolves after the first commit (React 17's `useId`
* fallback), because the register call made while the id is still `undefined` does nothing.
*
* @param id Id of the trigger.
* @param store The Store instance where the trigger should be registered.
*/
function useTriggerRegistration(id, store) {
	const registrationRef = import_react$6.useRef(null);
	return useStableCallback((element) => {
		const registration = registrationRef.current;
		if (registration !== null) {
			if (registration.element === element && registration.store === store && registration.id === id) return;
			registrationRef.current = null;
			const registeredStore = registration.store;
			if (registeredStore.context.triggerElements.getById(registration.id) === registration.element) {
				registeredStore.context.triggerElements.delete(registration.id);
				syncTriggerCount(registeredStore);
			}
		}
		if (element !== null && id !== void 0) {
			registrationRef.current = {
				store,
				id,
				element
			};
			store.context.triggerElements.add(id, element);
			syncTriggerCount(store);
		}
	});
}
function createPopupOpenState(state, open, trigger, preventUnmountOnClose = false) {
	let preventUnmountingOnClose = state.preventUnmountingOnClose;
	if (open) preventUnmountingOnClose = false;
	else if (preventUnmountOnClose) preventUnmountingOnClose = true;
	const triggerId = trigger?.id ?? null;
	let activeTriggerId = state.activeTriggerId;
	let activeTriggerElement = state.activeTriggerElement;
	if (triggerId || open) {
		activeTriggerId = triggerId;
		activeTriggerElement = trigger ?? null;
	}
	return {
		open,
		preventUnmountingOnClose,
		activeTriggerId,
		activeTriggerElement,
		openedWithoutTrigger: open ? trigger == null : state.openedWithoutTrigger
	};
}
function attachPreventUnmountOnClose(eventDetails) {
	let preventUnmountOnClose = false;
	eventDetails.preventUnmountOnClose = () => {
		preventUnmountOnClose = true;
	};
	return () => preventUnmountOnClose;
}
/**
* Runs the shared open-change sequence for a popup store: notifies `onOpenChange`,
* honors cancellation, dispatches the floating root change, maps the reason to an
* `instantType`, and commits the state update (synchronously for hover so
* `getAnimations()` observes it). Stores supply their own differences via
* `extraState` (e.g. the last change reason) and `onBeforeDispatch` (e.g. updating
* inline-rect coordinates).
*/
function applyPopupOpenChange(store, nextOpen, eventDetails, options = {}) {
	const reason = eventDetails.reason;
	const isHover = reason === triggerHover;
	const isFocusOpen = nextOpen && reason === "trigger-focus";
	const isDismissClose = !nextOpen && (reason === "trigger-press" || reason === "escape-key");
	const shouldPreventUnmountOnClose = attachPreventUnmountOnClose(eventDetails);
	store.context.onOpenChange?.(nextOpen, eventDetails);
	if (eventDetails.isCanceled) return;
	options.onBeforeDispatch?.();
	store.state.floatingRootContext.dispatchOpenChange(nextOpen, eventDetails);
	const changeState = () => {
		const popupOpenState = createPopupOpenState(store.state, nextOpen, eventDetails.trigger, shouldPreventUnmountOnClose());
		const updatedState = {
			...options.extraState,
			...popupOpenState
		};
		if (isFocusOpen) updatedState.instantType = "focus";
		else if (isDismissClose) updatedState.instantType = "dismiss";
		else if (isHover) updatedState.instantType = void 0;
		store.update(updatedState);
	};
	if (isHover) import_react_dom.flushSync(changeState);
	else changeState();
}
/**
* Sets up trigger data forwarding to the store.
*
* @param triggerId Id of the trigger.
* @param triggerElementRef Ref for the trigger DOM element.
* @param store The Store instance managing the popup state.
* @param stateUpdates An object with state updates to apply when the trigger is active.
*/
function useTriggerDataForwarding(triggerId, triggerElementRef, store, stateUpdates) {
	const isMountedByThisTrigger = store.useState("isMountedByTrigger", triggerId);
	const baseRegisterTrigger = useTriggerRegistration(triggerId, store);
	const applyTriggerData = useStableCallback((element) => {
		const open = store.select("open");
		const activeTriggerId = store.select("activeTriggerId");
		if (activeTriggerId === triggerId) {
			const changes = {
				activeTriggerElement: element,
				...open ? stateUpdates : null
			};
			store.update(changes);
			return;
		}
		if (activeTriggerId == null && open && !store.state.openedWithoutTrigger) {
			const changes = {
				activeTriggerId: triggerId ?? null,
				activeTriggerElement: element,
				...stateUpdates
			};
			store.update(changes);
		}
	});
	const registerTrigger = useStableCallback((element) => {
		baseRegisterTrigger(element);
		if (element) applyTriggerData(element);
	});
	useIsoLayoutEffect(() => {
		registerTrigger(triggerElementRef.current);
		return () => registerTrigger(null);
	}, [
		registerTrigger,
		triggerElementRef,
		store,
		triggerId
	]);
	useIsoLayoutEffect(() => {
		if (isMountedByThisTrigger) {
			const changes = {
				activeTriggerElement: triggerElementRef.current,
				...stateUpdates
			};
			store.update(changes);
		}
	}, [
		isMountedByThisTrigger,
		store,
		triggerElementRef,
		...Object.values(stateUpdates)
	]);
	return {
		registerTrigger,
		isMountedByThisTrigger
	};
}
/**
* Keeps trigger registration state synchronized while the popup is open.
*
* When a popup opens without an explicit trigger id and exactly one trigger is registered, that
* trigger is claimed as the active trigger, unless the open request deliberately carried no trigger
* (`openedWithoutTrigger`). When the active trigger id is still registered but its
* element changed, the active element is refreshed. When the active trigger id is missing from the
* registry but the same element is still registered under a different id (e.g. the rendered trigger
* carries its own DOM `id` that differs from Base UI's internal trigger id), the active id is
* reassociated to the registered id instead of being treated as lost. When the active trigger
* unregisters, the default path preserves existing ownership so non-closing popup families do not
* silently claim a different trigger while staying open.
*
* If `closeOnActiveTriggerUnmount` is enabled, unregistering a previously resolved active trigger
* requests a close after a microtask so a same-tick replacement trigger with the same id can
* register first. An active trigger id that has not matched a registered trigger yet is treated as
* pending and does not request a close.
*
* This should be called on the Root part.
*
* @param store The Store instance managing the popup state.
* @param options Options for active trigger unmount behavior.
*/
function useImplicitActiveTrigger(store, options = {}) {
	const { closeOnActiveTriggerUnmount = false } = options;
	const resolvedActiveTriggerIdRef = import_react$6.useRef(null);
	const open = store.useState("open");
	const reactiveTriggerCount = store.useState("triggerCount");
	const activeTriggerId = store.useState("activeTriggerId");
	const reactiveActiveTriggerElement = store.useState("activeTriggerElement");
	useIsoLayoutEffect(() => {
		if (!open) {
			resolvedActiveTriggerIdRef.current = null;
			if (store.state.triggerCount !== 0) store.set("triggerCount", 0);
			if (store.state.openedWithoutTrigger) store.set("openedWithoutTrigger", false);
			return;
		}
		const triggerCount = store.context.triggerElements.size;
		const stateUpdates = {};
		if (store.state.triggerCount !== triggerCount) stateUpdates.triggerCount = triggerCount;
		const currentActiveTriggerId = store.select("activeTriggerId");
		let lostActiveTriggerId = null;
		if (currentActiveTriggerId) {
			const activeTriggerElement = store.context.triggerElements.getById(currentActiveTriggerId);
			if (!activeTriggerElement) {
				for (const [triggerId, triggerElement] of store.context.triggerElements.entries()) if (triggerElement === store.state.activeTriggerElement) {
					stateUpdates.activeTriggerId = triggerId;
					stateUpdates.activeTriggerElement = triggerElement;
					resolvedActiveTriggerIdRef.current = triggerId;
					break;
				}
				if (stateUpdates.activeTriggerId === void 0) {
					if (resolvedActiveTriggerIdRef.current === currentActiveTriggerId) lostActiveTriggerId = currentActiveTriggerId;
					else resolvedActiveTriggerIdRef.current = null;
				}
			} else {
				resolvedActiveTriggerIdRef.current = currentActiveTriggerId;
				if (activeTriggerElement !== store.state.activeTriggerElement) stateUpdates.activeTriggerElement = activeTriggerElement;
			}
		} else resolvedActiveTriggerIdRef.current = null;
		if (!lostActiveTriggerId && !currentActiveTriggerId && !store.state.openedWithoutTrigger && triggerCount === 1) {
			const iteratorResult = store.context.triggerElements.entries().next();
			if (!iteratorResult.done) {
				const [implicitTriggerId, implicitTriggerElement] = iteratorResult.value;
				stateUpdates.activeTriggerId = implicitTriggerId;
				stateUpdates.activeTriggerElement = implicitTriggerElement;
				resolvedActiveTriggerIdRef.current = implicitTriggerId;
			}
		}
		if (stateUpdates.triggerCount !== void 0 || stateUpdates.activeTriggerId !== void 0 || stateUpdates.activeTriggerElement !== void 0) store.update(stateUpdates);
		if (lostActiveTriggerId) {
			if (closeOnActiveTriggerUnmount) queueMicrotask(() => {
				if (store.select("open") && store.select("activeTriggerId") === lostActiveTriggerId && !store.context.triggerElements.getById(lostActiveTriggerId)) {
					const eventDetails = createChangeEventDetails(none);
					store.setOpen(false, eventDetails);
					if (!eventDetails.isCanceled) store.update({
						activeTriggerId: null,
						activeTriggerElement: null
					});
				}
			});
		}
	}, [
		open,
		store,
		reactiveTriggerCount,
		activeTriggerId,
		reactiveActiveTriggerElement,
		closeOnActiveTriggerUnmount
	]);
}
/**
* Manages the mounted state of the popup.
* Sets up the transition status listeners and handles unmounting when needed.
* Updates the `mounted`, `transitionStatus`, and `preventUnmountingOnClose` states in the store.
*
* @param open Whether the popup is open.
* @param store The Store instance managing the popup state.
* @param onUnmount Optional callback to be called when the popup is unmounted.
* @param animateInitialOpen Whether a popup that mounts already open should still play its enter
*   transition. Defaults to `false`, so content that was open on the first render (a `defaultOpen`
*   popup on page load, SSR'd markup) appears without animating. Opt in for popups whose subtree
*   only mounts in response to something the user did, such as a submenu inside a menu popup.
*
* @returns A function to forcibly unmount the popup. It is a no-op once the popup is already
*   unmounted, so calling it after the automatic unmount doesn't repeat the completion callback.
*/
function useOpenStateTransitions(open, store, onUnmount, animateInitialOpen) {
	const { mounted, transitionStatus, forceUnmount } = useUnmountAfterClose({
		open,
		ref: store.context.popupRef,
		preventUnmountOnClose: store.useState("preventUnmountingOnClose"),
		setPreventUnmountOnClose: (preventUnmountOnClose) => store.set("preventUnmountingOnClose", preventUnmountOnClose),
		animateInitialOpen,
		onUnmount() {
			store.update({
				activeTriggerId: null,
				activeTriggerElement: null,
				mounted: false,
				preventUnmountingOnClose: false
			});
			onUnmount?.();
			store.context.onOpenChangeComplete?.(false);
		}
	});
	useRefWithInit(() => {
		store.set("mounted", mounted);
		return null;
	});
	store.useSyncedValues({
		mounted,
		transitionStatus
	});
	return {
		forceUnmount,
		transitionStatus
	};
}
function usePopupInteractionProps(store, statePart) {
	store.useSyncedValues(statePart);
	useIsoLayoutEffect(() => () => {
		store.update({
			activeTriggerProps: EMPTY_OBJECT,
			inactiveTriggerProps: EMPTY_OBJECT,
			popupProps: EMPTY_OBJECT
		});
	}, [store]);
}
function usePopupRootSync(store, open) {
	useIsoLayoutEffect(() => {
		if (!open && store.state.openMethod !== null) store.set("openMethod", null);
	}, [open, store]);
	useIsoLayoutEffect(() => () => {
		if (store.state.openMethod !== null) store.set("openMethod", null);
	}, [store]);
}
var import_react$6, import_react_dom, FOCUSABLE_POPUP_PROPS;
function init_popupStoreUtils() {
	return (init_popupStoreUtils = __esmMin((() => {
		import_react$6 = /* @__PURE__ */ __toESM(require_react(), 1);
		import_react_dom = /* @__PURE__ */ __toESM(require_react_dom(), 1);
		init_empty();
		init_useId();
		init_useStableCallback();
		init_useIsoLayoutEffect();
		init_useRefWithInit();
		init_constants$1();
		init_FloatingTree();
		init_useSyncedFloatingRootContext();
		init_useUnmountAfterClose();
		init_createBaseUIEventDetails();
		init_reason_parts();
		FOCUSABLE_POPUP_PROPS = {
			tabIndex: -1,
			[FOCUSABLE_ATTRIBUTE]: ""
		};
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/utils/popups/popupTriggerMap.mjs
function getDevElementIds(map) {
	devElementIdsByMap ??= /* @__PURE__ */ new WeakMap();
	let elementIds = devElementIdsByMap.get(map);
	if (!elementIds) {
		elementIds = /* @__PURE__ */ new WeakMap();
		devElementIdsByMap.set(map, elementIds);
	}
	return elementIds;
}
var devElementIdsByMap, PopupTriggerMap;
function init_popupTriggerMap() {
	return (init_popupTriggerMap = __esmMin((() => {
		PopupTriggerMap = class {
			idMap = /* @__PURE__ */ new Map();
			/**
			* Adds a trigger element with the given ID.
			*
			* Note: The provided element is assumed to not be registered under multiple IDs.
			*/
			add(id, element) {
				{
					const elementIds = getDevElementIds(this);
					const existingId = elementIds.get(element);
					if (existingId !== void 0 && existingId !== id) throw new Error("Base UI: A trigger element cannot be registered under multiple IDs in PopupTriggerMap.");
					const previousElement = this.idMap.get(id);
					if (previousElement !== void 0 && previousElement !== element) elementIds.delete(previousElement);
					elementIds.set(element, id);
				}
				this.idMap.set(id, element);
			}
			/**
			* Removes the trigger element with the given ID.
			*/
			delete(id) {
				{
					const element = this.idMap.get(id);
					if (element !== void 0) devElementIdsByMap?.get(this)?.delete(element);
				}
				this.idMap.delete(id);
			}
			/**
			* Whether the given element is registered as a trigger.
			*/
			hasElement(element) {
				for (const registered of this.idMap.values()) if (registered === element) return true;
				return false;
			}
			/**
			* Whether there is a registered trigger element matching the given predicate.
			*/
			hasMatchingElement(predicate) {
				for (const element of this.idMap.values()) if (predicate(element)) return true;
				return false;
			}
			/**
			* Returns the trigger element associated with the given ID, or undefined if no such element exists.
			*/
			getById(id) {
				return this.idMap.get(id);
			}
			/**
			* Returns an iterable of all registered trigger entries, where each entry is a tuple of [id, element].
			*/
			entries() {
				return this.idMap.entries();
			}
			/**
			* Returns an iterable of all registered trigger elements.
			*/
			elements() {
				return this.idMap.values();
			}
			/**
			* Returns the number of registered trigger elements.
			*/
			get size() {
				return this.idMap.size;
			}
		};
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/utils@0.5.0--7My7Lubseca8je9LSEweA/node_modules/@base-ui/utils/fastHooks.mjs
function getInstance() {
	return currentInstance;
}
function register(hook) {
	hooks.push(hook);
}
/**
* Wraps a component function to enable performance optimizations for internal hooks.
*
* **Performance Optimization:**
* Components wrapped with `fastComponent` have access to a shared "instance" context that enables
* specialized hook implementations to batch operations and reduce overhead. The wrapper creates a
* stable instance object that persists across renders, sets it as the current context, calls
* registered hooks before and after rendering, then clears the context. The primary benefit is
* with `useStore`, where multiple store subscriptions within the same component are collapsed into
* a single `useSyncExternalStore` subscription per store, significantly reducing re-render overhead.
* This optimization is only active on React 19+; on earlier versions `useStore` falls back to a
* separate subscription per call.
*
* **Requirements:**
* - The component function should follow standard React component patterns
* - `useStore` calls must keep a stable order and count across renders, as batched hooks are
*   matched by call index
* - Do not rely on the instance context outside of specialized hooks
*
* @param fn - The component function to wrap
* @returns A wrapped component with the same signature as the input function
*
* @example
* ```tsx
* // Wrapping a component to enable optimized useStore batching
* export const TooltipRoot = fastComponent(function TooltipRoot(props) {
*   // These useStore calls share a single subscription
*   const open = useStore(store, (state) => state.open);
*   const disabled = useStore(store, (state) => state.disabled);
*   const value = useStore(store, (state) => state.value);
*   // ...
* });
* ```
*/
function fastComponent(fn) {
	const FastComponent = (props, forwardedRef) => {
		const instance = useRefWithInit(createInstance).current;
		let result;
		try {
			currentInstance = instance;
			for (const hook of hooks) hook.before(instance);
			result = fn(props, forwardedRef);
			for (const hook of hooks) hook.after(instance);
			instance.didInitialize = true;
		} finally {
			currentInstance = void 0;
		}
		return result;
	};
	FastComponent.displayName = fn.displayName || fn.name;
	return FastComponent;
}
/**
* Wraps a component function with ref forwarding to enable performance optimizations for internal hooks.
*
* This is a convenience wrapper that combines `fastComponent` with `React.forwardRef`, enabling
* both performance optimizations and proper ref forwarding. See `fastComponent` for details on
* the performance benefits.
*
* @param fn - The component function that accepts props and a forwarded ref
* @returns A wrapped component with ref forwarding enabled
*
* @example
* ```tsx
* // Wrapping a component with ref forwarding and optimized hooks
* export const TooltipTrigger = fastComponentRef(function TooltipTrigger(
*   props,
*   forwardedRef
* ) {
*   const store = useContext(TooltipContext);
*   const open = useStore(store, (state) => state.open);
*   // ... component logic with ref
*   return <button ref={forwardedRef} {...props} />;
* });
* ```
*/
function fastComponentRef(fn) {
	return /*#__PURE__*/ import_react$5.forwardRef(fastComponent(fn));
}
function createInstance() {
	return { didInitialize: false };
}
var import_react$5, hooks, currentInstance;
function init_fastHooks() {
	return (init_fastHooks = __esmMin((() => {
		import_react$5 = /* @__PURE__ */ __toESM(require_react(), 1);
		init_useRefWithInit();
		hooks = [];
		currentInstance = void 0;
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/utils@0.5.0--7My7Lubseca8je9LSEweA/node_modules/@base-ui/utils/store/useStore.mjs
function useStore(store, selector, a1, a2, a3) {
	return useStoreImplementation(store, selector, a1, a2, a3);
}
function useStoreR19(store, selector, a1, a2, a3) {
	const getSelection = import_react$4.useCallback(() => selector(store.getSnapshot(), a1, a2, a3), [
		store,
		selector,
		a1,
		a2,
		a3
	]);
	return (0, import_shim.useSyncExternalStore)(store.subscribe, getSelection, getSelection);
}
function useStoreFast(store, selector, a1, a2, a3) {
	const instance = getInstance();
	if (!instance) return useStoreR19(store, selector, a1, a2, a3);
	const index = instance.syncIndex;
	instance.syncIndex += 1;
	let hook;
	if (!instance.didInitialize) {
		hook = {
			store,
			selector,
			a1,
			a2,
			a3,
			value: selector(store.getSnapshot(), a1, a2, a3)
		};
		instance.syncHooks.push(hook);
	} else {
		hook = instance.syncHooks[index];
		if (hook.store !== store || hook.selector !== selector || !Object.is(hook.a1, a1) || !Object.is(hook.a2, a2) || !Object.is(hook.a3, a3)) {
			if (hook.store !== store) instance.didChangeStore = true;
			hook.store = store;
			hook.selector = selector;
			hook.a1 = a1;
			hook.a2 = a2;
			hook.a3 = a3;
			hook.value = selector(store.getSnapshot(), a1, a2, a3);
		}
	}
	return hook.value;
}
function useStoreLegacy(store, selector, a1, a2, a3) {
	return (0, import_with_selector.useSyncExternalStoreWithSelector)(store.subscribe, store.getSnapshot, store.getSnapshot, (state) => selector(state, a1, a2, a3));
}
var import_react$4, import_shim, import_with_selector, useStoreImplementation;
function init_useStore() {
	return (init_useStore = __esmMin((() => {
		import_react$4 = /* @__PURE__ */ __toESM(require_react(), 1);
		import_shim = require_shim();
		import_with_selector = require_with_selector();
		init_reactVersion();
		init_fastHooks();
		useStoreImplementation = isReactVersionAtLeast(19) ? useStoreFast : useStoreLegacy;
		register({
			before(instance) {
				instance.syncIndex = 0;
				if (!instance.didInitialize) {
					instance.syncTick = 1;
					instance.syncHooks = [];
					instance.didChangeStore = true;
					instance.getSnapshot = () => {
						let didChange = false;
						for (let i = 0; i < instance.syncHooks.length; i += 1) {
							const hook = instance.syncHooks[i];
							const value = hook.selector(hook.store.state, hook.a1, hook.a2, hook.a3);
							if (!Object.is(hook.value, value)) {
								didChange = true;
								hook.value = value;
							}
						}
						if (didChange) instance.syncTick += 1;
						return instance.syncTick;
					};
				}
			},
			after(instance) {
				if (instance.syncHooks.length > 0) {
					if (instance.didChangeStore) {
						instance.didChangeStore = false;
						instance.subscribe = (onStoreChange) => {
							const stores = /* @__PURE__ */ new Set();
							for (const hook of instance.syncHooks) stores.add(hook.store);
							const unsubscribes = [];
							for (const store of stores) unsubscribes.push(store.subscribe(onStoreChange));
							return () => {
								for (const unsubscribe of unsubscribes) unsubscribe();
							};
						};
					}
					(0, import_shim.useSyncExternalStore)(instance.subscribe, instance.getSnapshot, instance.getSnapshot);
				}
			}
		});
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/utils@0.5.0--7My7Lubseca8je9LSEweA/node_modules/@base-ui/utils/store/Store.mjs
var Store;
function init_Store() {
	return (init_Store = __esmMin((() => {
		init_useStore();
		Store = class {
			/**
			* Creates a store with the given initial state, constructing the class it is called on.
			* Calling it on a generic base class (e.g. `ReactStore.create(...)`) constructs that
			* class but degrades the inferred instance type to `Store`; use `new` there instead.
			*/
			static create(state) {
				return new this(state);
			}
			/**
			* The current state of the store.
			* This property is updated immediately when the state changes as a result of calling {@link setState}, {@link update}, or {@link set}.
			* To subscribe to state changes, use the {@link useState} method. The value returned by {@link useState} is updated after the component renders (similarly to React's useState).
			* The values can be used directly (to avoid subscribing to the store) in effects or event handlers.
			*
			* Do not modify properties in state directly. Instead, use the provided methods to ensure proper state management and listener notification.
			*/
			constructor(state) {
				this.state = state;
				this.listeners = /* @__PURE__ */ new Set();
				this.updateTick = 0;
			}
			/**
			* Registers a listener that will be called whenever the store's state changes.
			*
			* @param fn The listener function to be called on state changes.
			* @returns A function to unsubscribe the listener.
			*/
			subscribe = (fn) => {
				this.listeners.add(fn);
				return () => {
					this.listeners.delete(fn);
				};
			};
			/**
			* Returns the current state of the store.
			*/
			getSnapshot = () => {
				return this.state;
			};
			/**
			* Updates the entire store's state and notifies all registered listeners.
			*
			* @param newState The new state to set for the store.
			*/
			setState(newState) {
				if (this.state === newState) return;
				this.state = newState;
				this.updateTick += 1;
				const currentTick = this.updateTick;
				for (const listener of this.listeners) {
					if (currentTick !== this.updateTick) return;
					listener(newState);
				}
			}
			/**
			* Merges the provided changes into the current state and notifies listeners if there are changes.
			* Each value must match its state key. Pass an exact known subset rather than a broad
			* `Partial<State>`, which may contain `undefined` for required state fields.
			*
			* @param changes An object containing the changes to apply to the current state.
			*/
			update(changes) {
				for (const key in changes) if (!Object.is(this.state[key], changes[key])) {
					this.setState({
						...this.state,
						...changes
					});
					return;
				}
			}
			/**
			* Sets a specific key in the store's state to a new value and notifies listeners if the value has changed.
			*
			* @param key The key in the store's state to update.
			* @param value The new value to set for the specified key.
			*/
			set(key, value) {
				if (!Object.is(this.state[key], value)) this.setState({
					...this.state,
					[key]: value
				});
			}
			/**
			* Gives the state a new reference and updates all registered listeners.
			*/
			notifyAll() {
				const newState = { ...this.state };
				this.setState(newState);
			}
			use(selector, a1, a2, a3) {
				return useStore(this, selector, a1, a2, a3);
			}
		};
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/utils@0.5.0--7My7Lubseca8je9LSEweA/node_modules/@base-ui/utils/store/ReactStore.mjs
var import_react$3, ReactStore;
function init_ReactStore() {
	return (init_ReactStore = __esmMin((() => {
		import_react$3 = /* @__PURE__ */ __toESM(require_react(), 1);
		init_Store();
		init_useStore();
		init_useStableCallback();
		init_useIsoLayoutEffect();
		init_empty();
		ReactStore = class extends Store {
			/**
			* Creates a new ReactStore instance.
			*
			* @param state Initial state of the store.
			* @param context Non-reactive context values.
			* @param selectors Optional selectors for use with `useState`.
			*/
			constructor(state, context = {}, selectors) {
				super(state);
				this.context = context;
				this.selectors = selectors;
			}
			/**
			* Non-reactive values such as refs, callbacks, etc.
			*/
			/**
			* Synchronizes a single external value into the store.
			*
			* Note that the while the value in `state` is updated immediately, the value returned
			* by `useState` is updated before the next render (similarly to React's `useState`).
			*/
			useSyncedValue(key, value) {
				import_react$3.useDebugValue(key);
				const store = this;
				useIsoLayoutEffect(() => {
					if (store.state[key] !== value) store.set(key, value);
				}, [
					store,
					key,
					value
				]);
			}
			/**
			* Synchronizes a single external value into the store and
			* cleans it up (sets to `undefined`) on unmount.
			*
			* Note that the while the value in `state` is updated immediately, the value returned
			* by `useState` is updated before the next render (similarly to React's `useState`).
			*/
			useSyncedValueWithCleanup(key, value) {
				const store = this;
				useIsoLayoutEffect(() => {
					if (store.state[key] !== value) store.set(key, value);
					return () => {
						store.set(key, void 0);
					};
				}, [
					store,
					key,
					value
				]);
			}
			/**
			* Synchronizes multiple external values into the store.
			* Each value must match its state key. Pass an exact known subset rather than a broad
			* `Partial<State>`, which may contain `undefined` for required state fields.
			*
			* Note that the while the values in `state` are updated immediately, the values returned
			* by `useState` are updated before the next render (similarly to React's `useState`).
			*
			* @param statePart An exact subset of state fields to synchronize. Unknown keys are not accepted.
			*/
			useSyncedValues(statePart) {
				const store = this;
				{
					import_react$3.useDebugValue(statePart, (p) => Object.keys(p));
					const keys = import_react$3.useRef(Object.keys(statePart)).current;
					const nextKeys = Object.keys(statePart);
					if (keys.length !== nextKeys.length || keys.some((key, index) => key !== nextKeys[index])) console.error("ReactStore.useSyncedValues expects the same prop keys on every render. Keys should be stable.");
				}
				const dependencies = Object.values(statePart);
				useIsoLayoutEffect(() => {
					store.update(statePart);
				}, [store, ...dependencies]);
			}
			/**
			* Registers a controllable prop pair (`controlled`, `defaultValue`) for a specific key. If `controlled`
			* is non-undefined, the store's state at `key` is updated to match `controlled`.
			*/
			useControlledProp(key, controlled) {
				import_react$3.useDebugValue(key);
				const store = this;
				const isControlled = controlled !== void 0;
				useIsoLayoutEffect(() => {
					if (isControlled && !Object.is(store.state[key], controlled)) store.setState({
						...store.state,
						[key]: controlled
					});
				}, [
					store,
					key,
					controlled,
					isControlled
				]);
				{
					const cache = this.controlledValues ??= /* @__PURE__ */ new Map();
					if (!cache.has(key)) cache.set(key, isControlled);
					const previouslyControlled = cache.get(key);
					if (previouslyControlled !== void 0 && previouslyControlled !== isControlled) console.error(`A component is changing the ${previouslyControlled ? "" : "un"}controlled state of ${key.toString()} to be ${previouslyControlled ? "un" : ""}controlled. Elements should not switch from uncontrolled to controlled (or vice versa).`);
				}
			}
			/** Gets the current value from the store using a selector with the provided key.
			*
			* @param key Key of the selector to use.
			*/
			select(key, a1, a2, a3) {
				const selector = this.selectors[key];
				return selector(this.state, a1, a2, a3);
			}
			/**
			* Returns a value from the store's state using a selector function.
			* Used to subscribe to specific parts of the state.
			* This methods causes a rerender whenever the selected state changes.
			*
			* @param key Key of the selector to use.
			*/
			useState(key, a1, a2, a3) {
				import_react$3.useDebugValue(key);
				return useStore(this, this.selectors[key], a1, a2, a3);
			}
			/**
			* Wraps a function with `useStableCallback` to ensure it has a stable reference
			* and assigns it to the context.
			*
			* @param key Key of the event callback. Must be a function in the context.
			* @param fn Function to assign.
			*/
			useContextCallback(key, fn) {
				import_react$3.useDebugValue(key);
				const stableFunction = useStableCallback(fn ?? NOOP);
				this.context[key] = stableFunction;
			}
			/**
			* Returns a stable setter function for a specific key in the store's state.
			* It's commonly used to pass as a ref callback to React elements.
			*
			* @param key Key of the state to set.
			*/
			useStateSetter(key) {
				const ref = import_react$3.useRef(void 0);
				if (ref.current === void 0) ref.current = (value) => {
					this.set(key, value);
				};
				return ref.current;
			}
			/**
			* Observes changes derived from the store's selectors and calls the listener when the selected value changes.
			*
			* @param key Key of the selector to observe.
			* @param listener Listener function called when the selector result changes.
			*/
			observe(selector, listener) {
				let selectFn;
				if (typeof selector === "function") selectFn = selector;
				else selectFn = this.selectors[selector];
				let prevValue = selectFn(this.state);
				listener(prevValue, prevValue, this);
				return this.subscribe((nextState) => {
					const nextValue = selectFn(nextState);
					if (!Object.is(prevValue, nextValue)) {
						const oldValue = prevValue;
						prevValue = nextValue;
						listener(nextValue, oldValue, this);
					}
				});
			}
		};
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/floating-ui-react/components/FloatingRootStore.mjs
var selectors, FloatingRootStore;
function init_FloatingRootStore() {
	return (init_FloatingRootStore = __esmMin((() => {
		init_ReactStore();
		init_event();
		selectors = {
			open: (state) => state.open,
			transitionStatus: (state) => state.transitionStatus,
			domReferenceElement: (state) => state.domReferenceElement,
			referenceElement: (state) => state.positionReference ?? state.referenceElement,
			floatingElement: (state) => state.floatingElement,
			floatingId: (state) => state.floatingId
		};
		FloatingRootStore = class extends ReactStore {
			constructor(options) {
				const { syncOnly, nested, onOpenChange, triggerElements, ...initialState } = options;
				super({
					...initialState,
					positionReference: initialState.referenceElement,
					domReferenceElement: initialState.referenceElement
				}, {
					onOpenChange,
					dataRef: { current: {} },
					events: createEventEmitter(),
					nested,
					triggerElements
				}, selectors);
				this.syncOnly = syncOnly;
			}
			/**
			* Syncs the event used by hover logic to distinguish hover-open from click-like interaction.
			*/
			syncOpenEvent = (newOpen, event) => {
				if (!newOpen || !this.state.open || event != null && isClickLikeEvent(event)) this.context.dataRef.current.openEvent = newOpen ? event : void 0;
			};
			/**
			* Runs the root-owned side effects for an open state change.
			*/
			dispatchOpenChange = (newOpen, eventDetails) => {
				this.syncOpenEvent(newOpen, eventDetails.event);
				const details = {
					open: newOpen,
					reason: eventDetails.reason,
					nativeEvent: eventDetails.event,
					nested: this.context.nested,
					triggerElement: eventDetails.trigger
				};
				this.context.events.emit("openchange", details);
			};
			/**
			* Emits the `openchange` event through the internal event emitter and calls the `onOpenChange` handler with the provided arguments.
			*
			* @param newOpen The new open state.
			* @param eventDetails Details about the event that triggered the open state change.
			*/
			setOpen = (newOpen, eventDetails) => {
				if (this.syncOnly) {
					this.context.onOpenChange?.(newOpen, eventDetails);
					return;
				}
				this.dispatchOpenChange(newOpen, eventDetails);
				this.context.onOpenChange?.(newOpen, eventDetails);
			};
		};
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/floating-ui-react/hooks/useFloating.mjs
/**
* Provides data to position a floating element and context to add interactions.
* The caller supplies the root store, which owns the reference and floating elements.
* @see https://floating-ui.com/docs/useFloating
*/
function useBaseUIFloating(options) {
	const { nodeId, externalTree, rootContext: store } = options;
	const referenceElement = store.useState("referenceElement");
	const floatingElement = store.useState("floatingElement");
	const domReferenceElement = store.useState("domReferenceElement");
	const open = store.useState("open");
	const floatingId = store.useState("floatingId");
	const [positionReference, setPositionReferenceRaw] = import_react$2.useState(null);
	const domReferenceRef = import_react$2.useRef(null);
	const tree = useFloatingTree(externalTree);
	const storeElements = import_react$2.useMemo(() => ({
		reference: referenceElement,
		floating: floatingElement,
		domReference: domReferenceElement
	}), [
		referenceElement,
		floatingElement,
		domReferenceElement
	]);
	const position = useFloating({
		...options,
		elements: {
			...storeElements,
			...positionReference && { reference: positionReference }
		}
	});
	const setPositionReference = import_react$2.useCallback((node) => {
		const computedPositionReference = isElement(node) ? {
			getBoundingClientRect: () => node.getBoundingClientRect(),
			getClientRects: () => node.getClientRects(),
			contextElement: node
		} : node;
		setPositionReferenceRaw(computedPositionReference);
		position.refs.setReference(computedPositionReference);
	}, [position.refs]);
	const refs = import_react$2.useMemo(() => ({
		...position.refs,
		setPositionReference,
		domReference: domReferenceRef
	}), [position.refs, setPositionReference]);
	const elements = import_react$2.useMemo(() => ({
		...position.elements,
		domReference: domReferenceElement
	}), [position.elements, domReferenceElement]);
	const context = import_react$2.useMemo(() => ({
		...position,
		dataRef: store.context.dataRef,
		open,
		onOpenChange: store.setOpen,
		events: store.context.events,
		floatingId,
		refs,
		elements,
		nodeId,
		rootStore: store
	}), [
		position,
		refs,
		elements,
		nodeId,
		store,
		open,
		floatingId
	]);
	useIsoLayoutEffect(() => {
		if (domReferenceElement) domReferenceRef.current = domReferenceElement;
	}, [domReferenceElement]);
	useIsoLayoutEffect(() => {
		store.context.dataRef.current.floatingContext = context;
		const node = tree?.nodesRef.current.find((n) => n.id === nodeId);
		if (node) node.context = context;
	});
	return import_react$2.useMemo(() => ({
		...position,
		context,
		refs,
		elements,
		rootStore: store
	}), [
		position,
		refs,
		elements,
		context,
		store
	]);
}
var import_react$2;
function init_useFloating() {
	return (init_useFloating = __esmMin((() => {
		import_react$2 = /* @__PURE__ */ __toESM(require_react(), 1);
		init_useIsoLayoutEffect();
		init_floating_ui_react_dom();
		init_floating_ui_utils_dom();
		init_FloatingTree();
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/floating-ui-react/middleware/arrow.mjs
var baseArrow, arrow;
function init_arrow() {
	return (init_arrow = __esmMin((() => {
		init_floating_ui_utils();
		baseArrow = (options) => ({
			name: "arrow",
			options,
			async fn(state) {
				const { x, y, placement, rects, platform, elements, middlewareData } = state;
				const { element, padding = 0 } = evaluate(options, state) || {};
				if (element == null) return {};
				const paddingObject = getPaddingObject(padding);
				const coords = {
					x,
					y
				};
				const axis = getAlignmentAxis(placement);
				const length = getAxisLength(axis);
				const arrowDimensions = await platform.getDimensions(element);
				const isYAxis = axis === "y";
				const minProp = isYAxis ? "top" : "left";
				const maxProp = isYAxis ? "bottom" : "right";
				const clientProp = isYAxis ? "clientHeight" : "clientWidth";
				const endDiff = rects.reference[length] + rects.reference[axis] - coords[axis] - rects.floating[length];
				const startDiff = coords[axis] - rects.reference[axis];
				const clientSize = elements.floating[clientProp] || rects.floating[length];
				const centerToReference = endDiff / 2 - startDiff / 2;
				const largestPossiblePadding = clientSize / 2 - arrowDimensions[length] / 2 - 1;
				const minPadding = Math.min(paddingObject[minProp], largestPossiblePadding);
				const maxPadding = Math.min(paddingObject[maxProp], largestPossiblePadding);
				const min = minPadding;
				const max = clientSize - arrowDimensions[length] - maxPadding;
				const center = clientSize / 2 - arrowDimensions[length] / 2 + centerToReference;
				const offset = clamp(min, center, max);
				const shouldAddOffset = !middlewareData.arrow && getAlignment(placement) != null && center !== offset && rects.reference[length] / 2 - (center < min ? minPadding : maxPadding) - arrowDimensions[length] / 2 < 0;
				const alignmentOffset = shouldAddOffset ? center < min ? center - min : center - max : 0;
				return {
					[axis]: coords[axis] + alignmentOffset,
					data: {
						[axis]: offset,
						centerOffset: center - offset - alignmentOffset,
						...shouldAddOffset && { alignmentOffset }
					},
					reset: shouldAddOffset
				};
			}
		});
		arrow = (options, deps) => {
			const { name, fn } = baseArrow(options);
			return {
				name,
				fn,
				options: [options, deps]
			};
		};
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/utils/hideMiddleware.mjs
var hide;
function init_hideMiddleware() {
	return (init_hideMiddleware = __esmMin((() => {
		hide = {
			name: "hide",
			async fn(state) {
				const { width, height, x, y } = state.rects.reference;
				const anchorHidden = width === 0 && height === 0 && x === 0 && y === 0;
				const overflow = await state.platform.detectOverflow(state, { elementContext: "reference" });
				return { data: { referenceHidden: overflow.top - height >= 0 || overflow.right - width >= 0 || overflow.bottom - height >= 0 || overflow.left - width >= 0 || anchorHidden } };
			}
		};
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/utils/adaptiveOriginConstants.mjs
var DEFAULT_SIDES;
function init_adaptiveOriginConstants() {
	return (init_adaptiveOriginConstants = __esmMin((() => {
		DEFAULT_SIDES = {
			sideX: "left",
			sideY: "top"
		};
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/utils/CommonPositionerCssVars.mjs
var availableWidth, availableHeight, anchorWidth, anchorHeight, transformOrigin;
function init_CommonPositionerCssVars() {
	return (init_CommonPositionerCssVars = __esmMin((() => {
		availableWidth = "--available-width";
		availableHeight = "--available-height";
		anchorWidth = "--anchor-width";
		anchorHeight = "--anchor-height";
		transformOrigin = "--transform-origin";
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/internals/useAnchorPositioning.mjs
function getLogicalSide(sideParam, renderedSide, isRtl) {
	const isLogicalSideParam = sideParam === "inline-start" || sideParam === "inline-end";
	return {
		top: "top",
		right: isLogicalSideParam ? isRtl ? "inline-start" : "inline-end" : "right",
		bottom: "bottom",
		left: isLogicalSideParam ? isRtl ? "inline-end" : "inline-start" : "left"
	}[renderedSide];
}
function getOffsetData(state, sideParam, isRtl) {
	const { rects, placement } = state;
	return {
		side: getLogicalSide(sideParam, getSide(placement), isRtl),
		align: getAlignment(placement) || "center",
		anchor: {
			width: rects.reference.width,
			height: rects.reference.height
		},
		positioner: {
			width: rects.floating.width,
			height: rects.floating.height
		}
	};
}
/**
* Provides standardized anchor positioning behavior for floating elements. Wraps Floating UI's
* `useFloating` hook.
*/
function useAnchorPositioning(params) {
	return useAnchorPositioningWithHook(params, useBaseUIFloating);
}
function useAnchorPositioningWithHook(params, useFloatingHook) {
	const { anchor, positionMethod = "absolute", side: sideParam = "bottom", sideOffset = 0, align = "center", alignOffset = 0, collisionBoundary, collisionPadding: collisionPaddingParam = 5, sticky = false, arrowPadding = 5, disableAnchorTracking = false, inline: inlineMiddleware, keepMounted = false, floatingRootContext, mounted, collisionAvoidance, shift: shift$1, nodeId, adaptiveOrigin, lazyFlip = false, externalTree } = params;
	const collisionAvoidanceSide = collisionAvoidance.side || "flip";
	const collisionAvoidanceAlign = collisionAvoidance.align || "flip";
	const collisionAvoidanceFallbackAxisSide = collisionAvoidance.fallbackAxisSide || "end";
	const shiftCrossAxis = shift$1?.crossAxis ?? false;
	const shiftRootBoundary = shift$1?.rootBoundary;
	const anchorFn = typeof anchor === "function" ? anchor : void 0;
	const anchorFnCallback = useStableCallback(anchorFn);
	const anchorDep = anchorFn ? anchorFnCallback : anchor;
	const anchorValueRef = useValueAsRef(anchor);
	const mountedRef = useValueAsRef(mounted);
	const isRtl = useDirection() === "rtl";
	const [mountPlacement, setMountPlacement] = import_react$1.useState(null);
	if (!mounted && mountPlacement !== null) setMountPlacement(null);
	const lockAlign = lazyFlip === "placement";
	const mountSide = mountPlacement ? getSide(mountPlacement) : null;
	const mountAlign = mountPlacement && lockAlign ? getAlignment(mountPlacement) || "center" : null;
	const side = mountSide || {
		top: "top",
		right: "right",
		bottom: "bottom",
		left: "left",
		"inline-end": isRtl ? "left" : "right",
		"inline-start": isRtl ? "right" : "left"
	}[sideParam];
	const placementAlign = mountAlign || align;
	const placement = placementAlign === "center" ? side : `${side}-${placementAlign}`;
	let collisionPadding = collisionPaddingParam;
	if (typeof collisionPadding === "number") collisionPadding = {
		top: collisionPadding,
		right: collisionPadding,
		bottom: collisionPadding,
		left: collisionPadding
	};
	else if (collisionPadding) collisionPadding = {
		top: collisionPadding.top || 0,
		right: collisionPadding.right || 0,
		bottom: collisionPadding.bottom || 0,
		left: collisionPadding.left || 0
	};
	const bias = 1;
	const biasTop = sideParam === "bottom" ? bias : 0;
	const biasBottom = sideParam === "top" ? bias : 0;
	const biasLeft = sideParam === "right" ? bias : 0;
	const biasRight = sideParam === "left" ? bias : 0;
	const commonCollisionProps = {
		boundary: collisionBoundary === "clipping-ancestors" ? "clippingAncestors" : collisionBoundary,
		padding: collisionPadding
	};
	const arrowRef = import_react$1.useRef(null);
	const sideOffsetRef = useValueAsRef(sideOffset);
	const alignOffsetRef = useValueAsRef(alignOffset);
	const sideOffsetDep = typeof sideOffset !== "function" ? sideOffset : 0;
	const alignOffsetDep = typeof alignOffset !== "function" ? alignOffset : 0;
	const middleware = [];
	if (inlineMiddleware) middleware.push(inlineMiddleware);
	middleware.push(offset((state) => {
		const data = getOffsetData(state, sideParam, isRtl);
		const sideAxis = typeof sideOffsetRef.current === "function" ? sideOffsetRef.current(data) : sideOffsetRef.current;
		const alignAxis = typeof alignOffsetRef.current === "function" ? alignOffsetRef.current(data) : alignOffsetRef.current;
		return {
			mainAxis: sideAxis,
			crossAxis: alignAxis,
			alignmentAxis: alignAxis
		};
	}, [
		sideOffsetDep,
		alignOffsetDep,
		isRtl,
		sideParam
	]));
	const shiftDisabled = collisionAvoidanceAlign === "none" && collisionAvoidanceSide !== "shift";
	const crossAxisShiftEnabled = !shiftDisabled && (sticky || shiftCrossAxis || collisionAvoidanceSide === "shift");
	const flipMiddleware = collisionAvoidanceSide === "none" ? null : flip({
		...commonCollisionProps,
		padding: {
			top: collisionPadding.top + bias + biasTop,
			right: collisionPadding.right + bias + biasRight,
			bottom: collisionPadding.bottom + bias + biasBottom,
			left: collisionPadding.left + bias + biasLeft
		},
		mainAxis: !shiftCrossAxis && collisionAvoidanceSide === "flip",
		crossAxis: collisionAvoidanceAlign === "flip" ? "alignment" : false,
		fallbackAxisSideDirection: collisionAvoidanceFallbackAxisSide
	});
	const shiftMiddleware = shiftDisabled ? null : shift({
		...commonCollisionProps,
		rootBoundary: shiftRootBoundary,
		mainAxis: collisionAvoidanceAlign !== "none",
		crossAxis: crossAxisShiftEnabled,
		limiter: sticky || shiftCrossAxis ? void 0 : limitShift((limitData) => {
			if (!arrowRef.current) return {};
			const { width, height } = arrowRef.current.getBoundingClientRect();
			const sideAxis = getSideAxis(getSide(limitData.placement));
			const arrowSize = sideAxis === "y" ? width : height;
			const offsetAmount = sideAxis === "y" ? collisionPadding.left + collisionPadding.right : collisionPadding.top + collisionPadding.bottom;
			return { offset: arrowSize / 2 + offsetAmount / 2 };
		})
	}, [
		commonCollisionProps,
		sticky,
		shiftCrossAxis,
		shiftRootBoundary,
		collisionPadding,
		collisionAvoidanceAlign
	]);
	if (collisionAvoidanceSide === "shift" || collisionAvoidanceAlign === "shift" || placementAlign === "center") middleware.push(shiftMiddleware, flipMiddleware);
	else middleware.push(flipMiddleware, shiftMiddleware);
	middleware.push(size({
		...commonCollisionProps,
		apply({ elements: { floating }, availableWidth, availableHeight, rects }) {
			if (!mountedRef.current) return;
			const floatingStyle = floating.style;
			floatingStyle.setProperty(AVAILABLE_WIDTH_VAR, `${availableWidth}px`);
			floatingStyle.setProperty(AVAILABLE_HEIGHT_VAR, `${availableHeight}px`);
			const dpr = getWindow(floating).devicePixelRatio || 1;
			const { x, y, width, height } = rects.reference;
			const anchorWidth$1 = (Math.round((x + width) * dpr) - Math.round(x * dpr)) / dpr;
			const anchorHeight$1 = (Math.round((y + height) * dpr) - Math.round(y * dpr)) / dpr;
			floatingStyle.setProperty(anchorWidth, `${anchorWidth$1}px`);
			floatingStyle.setProperty(anchorHeight, `${anchorHeight$1}px`);
		}
	}), arrow((state) => ({
		element: arrowRef.current || ownerDocument(state.elements.floating).createElement("div"),
		padding: arrowRef.current ? arrowPadding : 0
	}), [arrowPadding]), {
		name: "transformOrigin",
		fn(state) {
			const { elements: { floating }, middlewareData, placement: renderedPlacement, platform, rects, y } = state;
			const renderedSide = getSide(renderedPlacement);
			const renderedAlign = getAlignment(renderedPlacement);
			const isVertical = getSideAxis(renderedSide) === "y";
			const arrowEl = arrowRef.current;
			const sideOffsetValue = typeof sideOffset === "function" ? sideOffset(getOffsetData(state, sideParam, isRtl)) : sideOffset;
			let crossOrigin;
			if (!arrowEl && renderedAlign && Math.abs(isVertical ? middlewareData.shift?.x || 0 : middlewareData.shift?.y || 0) <= 1) crossOrigin = renderedAlign === "start" === (isVertical && platform.isRTL?.(floating) === true) ? "100%" : "0%";
			else crossOrigin = `${(isVertical ? middlewareData.arrow?.x || 0 : middlewareData.arrow?.y || 0) + (isVertical ? arrowEl?.clientWidth || 0 : arrowEl?.clientHeight || 0) / 2}px`;
			let sideOrigin = renderedSide === "top" || renderedSide === "left" ? `calc(100% + ${sideOffsetValue}px)` : `${-sideOffsetValue}px`;
			if (crossAxisShiftEnabled && isVertical && Math.abs(middlewareData.shift?.y || 0) > sideOffsetValue) sideOrigin = `${rects.reference.y + rects.reference.height / 2 - y}px`;
			floating.style.setProperty(transformOrigin, isVertical ? `${crossOrigin} ${sideOrigin}` : `${sideOrigin} ${crossOrigin}`);
			return {};
		}
	}, hide, adaptiveOrigin);
	useIsoLayoutEffect(() => {
		if (!mounted && floatingRootContext) floatingRootContext.update({
			referenceElement: null,
			floatingElement: null,
			domReferenceElement: null,
			positionReference: null
		});
	}, [mounted, floatingRootContext]);
	const autoUpdateOptions = import_react$1.useMemo(() => ({
		ancestorScroll: !disableAnchorTracking,
		elementResize: !disableAnchorTracking && typeof ResizeObserver !== "undefined",
		layoutShift: !disableAnchorTracking && typeof IntersectionObserver !== "undefined"
	}), [disableAnchorTracking]);
	const { refs, elements, x, y, middlewareData, update, placement: renderedPlacement, context, isPositioned, floatingStyles: originalFloatingStyles } = useFloatingHook({
		rootContext: floatingRootContext,
		open: keepMounted ? mounted : void 0,
		placement,
		middleware,
		strategy: positionMethod,
		whileElementsMounted: keepMounted ? void 0 : (...args) => autoUpdate(...args, autoUpdateOptions),
		nodeId,
		externalTree
	});
	const { sideX, sideY } = middlewareData.adaptiveOrigin || DEFAULT_SIDES;
	const resolvedPosition = isPositioned ? positionMethod : "fixed";
	const floatingStyles = import_react$1.useMemo(() => {
		let base;
		if (!isPositioned) base = {
			position: resolvedPosition,
			top: 0,
			left: 0
		};
		else if (adaptiveOrigin) base = {
			position: resolvedPosition,
			[sideX]: x,
			[sideY]: y
		};
		else base = {
			...originalFloatingStyles,
			position: resolvedPosition
		};
		base[AVAILABLE_WIDTH_VAR] = "100vw";
		base[AVAILABLE_HEIGHT_VAR] = "100vh";
		if (!isPositioned) base.opacity = 0;
		return base;
	}, [
		adaptiveOrigin,
		resolvedPosition,
		sideX,
		x,
		sideY,
		y,
		originalFloatingStyles,
		isPositioned
	]);
	const registeredPositionReferenceRef = import_react$1.useRef(null);
	useIsoLayoutEffect(() => {
		if (!mounted) return;
		const anchorValue = anchorValueRef.current;
		const resolvedAnchor = typeof anchorValue === "function" ? anchorValue() : anchorValue;
		const finalAnchor = (isRef(resolvedAnchor) ? resolvedAnchor.current : resolvedAnchor) || null;
		if (finalAnchor !== registeredPositionReferenceRef.current) {
			refs.setPositionReference(finalAnchor);
			registeredPositionReferenceRef.current = finalAnchor;
		}
	}, [
		mounted,
		refs,
		anchorDep,
		anchorValueRef
	]);
	import_react$1.useEffect(() => {
		if (!mounted) return;
		const anchorValue = anchorValueRef.current;
		if (typeof anchorValue === "function") return;
		if (isRef(anchorValue) && anchorValue.current !== registeredPositionReferenceRef.current) {
			refs.setPositionReference(anchorValue.current);
			registeredPositionReferenceRef.current = anchorValue.current;
		}
	}, [
		mounted,
		refs,
		anchorDep,
		anchorValueRef
	]);
	import_react$1.useEffect(() => {
		if (keepMounted && mounted && elements.reference && elements.floating) return autoUpdate(elements.reference, elements.floating, update, autoUpdateOptions);
	}, [
		keepMounted,
		mounted,
		elements,
		update,
		autoUpdateOptions
	]);
	const renderedSide = getSide(renderedPlacement);
	const logicalRenderedSide = getLogicalSide(sideParam, renderedSide, isRtl);
	const renderedAlign = getAlignment(renderedPlacement) || "center";
	const anchorHidden = Boolean(middlewareData.hide?.referenceHidden);
	useIsoLayoutEffect(() => {
		if (lazyFlip && mounted && isPositioned && (renderedSide !== side || lockAlign && renderedAlign !== placementAlign)) setMountPlacement(renderedPlacement);
	}, [
		lazyFlip,
		lockAlign,
		mounted,
		isPositioned,
		renderedPlacement,
		renderedSide,
		renderedAlign,
		side,
		placementAlign
	]);
	const arrowStyles = import_react$1.useMemo(() => ({
		position: "absolute",
		top: middlewareData.arrow?.y,
		left: middlewareData.arrow?.x
	}), [middlewareData.arrow]);
	const arrowUncentered = middlewareData.arrow?.centerOffset !== 0;
	return import_react$1.useMemo(() => ({
		positionerStyles: floatingStyles,
		arrowStyles,
		arrowRef,
		arrowUncentered,
		side: logicalRenderedSide,
		align: renderedAlign,
		physicalSide: renderedSide,
		anchorHidden,
		refs,
		context,
		isPositioned,
		update
	}), [
		floatingStyles,
		arrowStyles,
		arrowRef,
		arrowUncentered,
		logicalRenderedSide,
		renderedAlign,
		renderedSide,
		anchorHidden,
		refs,
		context,
		isPositioned,
		update
	]);
}
function isRef(param) {
	return param != null && "current" in param;
}
var import_react$1, AVAILABLE_WIDTH_VAR, AVAILABLE_HEIGHT_VAR;
function init_useAnchorPositioning() {
	return (init_useAnchorPositioning = __esmMin((() => {
		import_react$1 = /* @__PURE__ */ __toESM(require_react(), 1);
		init_floating_ui_utils();
		init_floating_ui_utils_dom();
		init_useIsoLayoutEffect();
		init_useValueAsRef();
		init_useStableCallback();
		init_floating_ui_dom(), init_floating_ui_react_dom();
		init_useFloating();
		init_DirectionContext();
		init_arrow();
		init_hideMiddleware();
		init_adaptiveOriginConstants();
		init_CommonPositionerCssVars();
		AVAILABLE_WIDTH_VAR = availableWidth;
		AVAILABLE_HEIGHT_VAR = availableHeight;
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/internals/getDisabledMountTransitionStyles.mjs
function getDisabledMountTransitionStyles(transitionStatus) {
	return transitionStatus === "starting" ? DISABLED_TRANSITIONS_STYLE : EMPTY_OBJECT;
}
function init_getDisabledMountTransitionStyles() {
	return (init_getDisabledMountTransitionStyles = __esmMin((() => {
		init_empty();
		init_constants();
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/utils/usePositioner.mjs
/**
* Renders the shared outer Positioner element used by popup components.
* Applies the common role, hidden state, transition styles, state attributes, and optional inert styling.
*/
function usePositioner(componentProps, state, { styles, transitionStatus, props, refs, hidden, inert = false }) {
	const style = { ...styles };
	if (inert) style.pointerEvents = "none";
	return useRenderElement("div", componentProps, {
		state,
		ref: refs,
		props: [
			{
				role: "presentation",
				hidden,
				style
			},
			getDisabledMountTransitionStyles(transitionStatus),
			props
		],
		stateAttributesMapping: popupStateMapping
	});
}
function init_usePositioner() {
	return (init_usePositioner = __esmMin((() => {
		init_popupStateMapping();
		init_useRenderElement();
		init_getDisabledMountTransitionStyles();
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/direction-provider/DirectionProvider.mjs
var import_react, import_jsx_runtime, DirectionProvider;
function init_DirectionProvider() {
	return (init_DirectionProvider = __esmMin((() => {
		import_react = /* @__PURE__ */ __toESM(require_react(), 1);
		init_DirectionContext();
		import_jsx_runtime = require_jsx_runtime();
		DirectionProvider = function DirectionProvider(props) {
			const { direction = "ltr" } = props;
			const contextValue = import_react.useMemo(() => ({ direction }), [direction]);
			return /*#__PURE__*/ (0, import_jsx_runtime.jsx)(DirectionContext.Provider, {
				value: contextValue,
				children: props.children
			});
		};
		DirectionProvider.displayName = "DirectionProvider";
	})))();
}
//#endregion
export { DROPDOWN_COLLISION_AVOIDANCE as $, useTriggerDataForwarding as A, popupTransitionStateMapping as At, init_FloatingTree as B, startingStyle as Bt, createPopupOpenState as C, isTypeableCombobox as Ct, usePopupInteractionProps as D, triggerDisabled as Dt, useOpenStateTransitions as E, init_TooltipTriggerDataAttributes as Et, useSyncedFloatingRootContext as F, pressed as Ft, init_FloatingTreeStore as G, webkit as Gt, useFloatingParentNodeId as H, voiceOver as Ht, init_useDismiss as I, closed as It, useFloatingPortalNode as J, FloatingPortal as K, useDismiss as L, endingStyle as Lt, init_useUnmountAfterClose as M, triggerOpenStateMapping as Mt, useUnmountAfterClose as N, init_CommonTriggerDataAttributes as Nt, usePopupRootStore as O, init_popupStateMapping as Ot, init_useSyncedFloatingRootContext as P, popupOpen$1 as Pt, CLICK_TRIGGER_IDENTIFIER as Q, FloatingNode as R, init_CommonPopupDataAttributes as Rt, createDefaultInitialFocus as S, isTargetInsideEnabledTrigger as St, useImplicitActiveTrigger as T, matchesFocusVisible as Tt, useFloatingTree as U, gecko as Ut, useFloatingNodeId as V, init_screen_reader as Vt, FloatingTreeStore as W, init_engine as Wt, BASE_UI_SWIPE_IGNORE_ATTRIBUTE as X, usePortalContext as Y, BASE_UI_SWIPE_IGNORE_SELECTOR as Z, init_popupTriggerMap as _, init_mergeCleanups as _t, getDisabledMountTransitionStyles as a, getNodeChildren as at, applyPopupOpenChange as b, init_element as bt, useAnchorPositioning as c, getNextTabbable as ct, ReactStore as d, init_tabbable as dt, POPUP_COLLISION_AVOIDANCE as et, init_ReactStore as f, isOutsideEvent as ft, PopupTriggerMap as g, init_FocusGuard as gt, init_fastHooks as h, FocusGuard as ht, usePositioner as i, getNodeAncestors as it, useTriggerRegistration as j, pressableTriggerOpenStateMapping as jt, usePopupRootSync as k, popupStateMapping as kt, FloatingRootStore as l, getPreviousTabbable as lt, fastComponentRef as m, tabbable as mt, init_DirectionProvider as n, createAttribute as nt, init_getDisabledMountTransitionStyles as o, init_nodes as ot, fastComponent as p, isTabbable as pt, init_FloatingPortal as q, init_usePositioner as r, init_createAttribute as rt, init_useAnchorPositioning as s, focusable as st, DirectionProvider as t, init_constants as tt, init_FloatingRootStore as u, getTabbableNearElement as ut, FOCUSABLE_POPUP_PROPS as v, mergeCleanups as vt, init_popupStoreUtils as w, isTypeableElement as wt, attachPreventUnmountOnClose as x, isInteractiveElement as xt, PopupHandleAttachment as y, getFloatingFocusElement as yt, FloatingTree as z, open as zt };
