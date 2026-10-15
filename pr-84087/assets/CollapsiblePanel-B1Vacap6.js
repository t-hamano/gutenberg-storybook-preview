import { n as __esmMin, o as __toESM } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_react } from "./react-Bujh4FgW.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C1RZKCc6.js";
import { f as init_warn, n as useRenderElement, p as warn, s as resolveStyle, t as init_useRenderElement, v as init_useMergedRefs, y as useMergedRefs } from "./useRenderElement-QwAlaybP.js";
import { n as useIsoLayoutEffect, t as init_useIsoLayoutEffect } from "./useIsoLayoutEffect-CkrGpWFx.js";
import { n as useStableCallback, t as init_useStableCallback } from "./useStableCallback-HKs9zu76.js";
import { a as init_useOpenChangeComplete, c as useAnimationsFinished, d as startingStyle$1, h as init_useAnimationFrame, i as transitionStatusMapping, m as AnimationFrame, n as useTransitionStatus, o as useOpenChangeComplete, r as init_stateAttributesMapping$1, s as init_useAnimationsFinished, t as init_useTransitionStatus } from "./useTransitionStatus-C7eUOB6r.js";
import { n as useControlled, t as init_useControlled } from "./useControlled-B67zM6EB.js";
import { n as useBaseUiId, t as init_useBaseUiId } from "./useBaseUiId-DDVp3i2t.js";
import { S as none, k as triggerPress, p as init_reason_parts, r as init_createBaseUIEventDetails, t as createChangeEventDetails } from "./createBaseUIEventDetails-CC__nZlv.js";
import { l as getWindow, u as init_floating_ui_utils_dom } from "./floating-ui.utils.dom-s51Otfgf.js";
import { n as useButton, t as init_useButton } from "./useButton-C38YKBDn.js";
import { n as useValueAsRef, r as addEventListener, t as init_useValueAsRef } from "./useValueAsRef-SBYgOR8O.js";
//#region ../node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/collapsible/root/useCollapsibleRoot.mjs
function useCollapsibleRoot(parameters) {
	const { open: openParam, defaultOpen = false, onOpenChange, disabled } = parameters;
	const [open, setOpen] = useControlled({
		controlled: openParam,
		default: defaultOpen,
		name: "Collapsible",
		state: "open"
	});
	const { mounted, setMounted, transitionStatus } = useTransitionStatus(open, true, true);
	const defaultPanelId = useBaseUiId();
	const [registeredPanelId, setPanelIdState] = import_react$5.useState();
	const panelId = registeredPanelId === null ? void 0 : registeredPanelId ?? defaultPanelId;
	const handleTrigger = useStableCallback((event) => {
		const nextOpen = !open;
		const eventDetails = createChangeEventDetails(triggerPress, event.nativeEvent);
		onOpenChange(nextOpen, eventDetails);
		if (eventDetails.isCanceled) return;
		setOpen(nextOpen);
	});
	return import_react$5.useMemo(() => ({
		defaultPanelId,
		disabled,
		handleTrigger,
		mounted,
		open,
		panelId,
		setMounted,
		setOpen,
		setPanelIdState,
		transitionStatus
	}), [
		defaultPanelId,
		disabled,
		handleTrigger,
		mounted,
		open,
		panelId,
		setMounted,
		setOpen,
		setPanelIdState,
		transitionStatus
	]);
}
var import_react$5;
function init_useCollapsibleRoot() {
	return (init_useCollapsibleRoot = __esmMin((() => {
		import_react$5 = /* @__PURE__ */ __toESM(require_react(), 1);
		init_useControlled();
		init_useStableCallback();
		init_useBaseUiId();
		init_createBaseUIEventDetails();
		init_reason_parts();
		init_useTransitionStatus();
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/collapsible/root/CollapsibleRootContext.mjs
function useCollapsibleRootContext() {
	const context = import_react$4.useContext(CollapsibleRootContext);
	if (context === void 0) throw new Error("Base UI: CollapsibleRootContext is missing. Collapsible parts must be placed within <Collapsible.Root>.");
	return context;
}
var import_react$4, CollapsibleRootContext;
function init_CollapsibleRootContext() {
	return (init_CollapsibleRootContext = __esmMin((() => {
		import_react$4 = /* @__PURE__ */ __toESM(require_react(), 1);
		CollapsibleRootContext = /*#__PURE__*/ import_react$4.createContext(void 0);
		CollapsibleRootContext.displayName = "CollapsibleRootContext";
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/collapsible/panel/CollapsiblePanelDataAttributes.mjs
var open, closed, startingStyle;
function init_CollapsiblePanelDataAttributes() {
	return (init_CollapsiblePanelDataAttributes = __esmMin((() => {
		init_stateAttributesMapping$1();
		open = "data-open";
		closed = "data-closed";
		startingStyle = startingStyle$1;
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/collapsible/trigger/CollapsibleTriggerDataAttributes.mjs
var panelOpen;
function init_CollapsibleTriggerDataAttributes() {
	return (init_CollapsibleTriggerDataAttributes = __esmMin((() => {
		panelOpen = "data-panel-open";
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/utils/collapsibleOpenStateMapping.mjs
var PANEL_OPEN_HOOK, PANEL_CLOSED_HOOK, triggerOpenStateMapping, collapsibleOpenStateMapping;
function init_collapsibleOpenStateMapping() {
	return (init_collapsibleOpenStateMapping = __esmMin((() => {
		init_CollapsiblePanelDataAttributes();
		init_CollapsibleTriggerDataAttributes();
		PANEL_OPEN_HOOK = { [open]: "" };
		PANEL_CLOSED_HOOK = { [closed]: "" };
		triggerOpenStateMapping = { open(value) {
			if (value) return { [panelOpen]: "" };
			return null;
		} };
		collapsibleOpenStateMapping = { open(value) {
			if (value) return PANEL_OPEN_HOOK;
			return PANEL_CLOSED_HOOK;
		} };
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/collapsible/panel/useCollapsiblePanel.mjs
function useCollapsiblePanel(parameters) {
	const { externalRef, hiddenUntilFound, id: idParam, keepMounted, mounted, onOpenChange, open, setMounted, setOpen, transitionStatus } = parameters;
	const panelRef = import_react$3.useRef(null);
	const animationTypeRef = import_react$3.useRef(null);
	const [dimensions, setDimensionsUnwrapped] = import_react$3.useState(EMPTY_DIMENSIONS);
	const lastMeasuredDimensionsRef = import_react$3.useRef(EMPTY_DIMENSIONS);
	const shouldSkipNextOpenRef = import_react$3.useRef(false);
	const shouldPreventMountAnimationRef = import_react$3.useRef(open);
	const shouldPreventActivityResumeAnimationRef = import_react$3.useRef(false);
	const [forcePanelIdle, setForcePanelIdle] = import_react$3.useState(false);
	const pendingTemporaryStyleRestoreRef = import_react$3.useRef(null);
	const mergedPanelRef = useMergedRefs(externalRef, panelRef);
	const latestOpenRef = useValueAsRef(open);
	const runOnceCloseAnimationsFinish = useAnimationsFinished(panelRef);
	const hidden = !open && !mounted;
	const panelTransitionStatus = forcePanelIdle ? "idle" : transitionStatus;
	const shouldPreventOpenAnimation = open && (shouldPreventMountAnimationRef.current || shouldPreventActivityResumeAnimationRef.current);
	const renderedDimensions = !open && mounted && animationTypeRef.current === "css-animation" && dimensions.height === void 0 && dimensions.width === void 0 ? lastMeasuredDimensionsRef.current : dimensions;
	const shouldPersistHiddenTransitionStyles = hiddenUntilFound && hidden && animationTypeRef.current !== "css-animation";
	const setDimensions = useStableCallback((nextDimensions, shouldCacheMeasurement = true) => {
		if (shouldCacheMeasurement) lastMeasuredDimensionsRef.current = nextDimensions;
		setDimensionsUnwrapped(nextDimensions);
	});
	const restorePendingTemporaryStyle = useStableCallback(() => {
		pendingTemporaryStyleRestoreRef.current?.();
		pendingTemporaryStyleRestoreRef.current = null;
	});
	const setPendingTemporaryStyleRestore = useStableCallback((restore) => {
		restorePendingTemporaryStyle();
		pendingTemporaryStyleRestoreRef.current = () => {
			pendingTemporaryStyleRestoreRef.current = null;
			restore();
		};
	});
	const markActivityResumeAnimationSuppressed = useStableCallback(() => {
		if (open && mounted && animationTypeRef.current === "css-animation") shouldPreventActivityResumeAnimationRef.current = true;
	});
	useIsoLayoutEffect(() => {
		if (!forcePanelIdle || transitionStatus === "starting") return;
		setForcePanelIdle(false);
	}, [forcePanelIdle, transitionStatus]);
	import_react$3.useEffect(() => {
		return () => {
			markActivityResumeAnimationSuppressed();
			restorePendingTemporaryStyle();
		};
	}, [markActivityResumeAnimationSuppressed, restorePendingTemporaryStyle]);
	useIsoLayoutEffect(() => {
		const panel = panelRef.current;
		if (!panel) return;
		if (!open && pendingTemporaryStyleRestoreRef.current) restorePendingTemporaryStyle();
		const animationType = getAnimationType(panel, shouldPreventOpenAnimation);
		animationTypeRef.current = animationType;
		if (open && transitionStatus === "idle" && shouldPreventMountAnimationRef.current && animationType === "css-animation") {
			lastMeasuredDimensionsRef.current = getDimensions(panel);
			return;
		}
		if (open && transitionStatus === "starting") {
			const skipNextOpen = shouldSkipNextOpenRef.current;
			shouldSkipNextOpenRef.current = false;
			if (animationType === "none") {
				setDimensions(getDimensions(panel));
				setForcePanelIdle(true);
				return;
			}
			if (animationType === "css-transition") {
				const restoreLayoutStyles = resetLayoutStyles(panel);
				setDimensions(getDimensions(panel));
				if (!skipNextOpen) return restoreLayoutStyles;
				const restoreTransitionDuration = setTemporaryStyle(panel, "transition-duration", "0s");
				setPendingTemporaryStyleRestore(restoreTransitionDuration);
				setForcePanelIdle(true);
				return restoreLayoutStyles;
			}
			setDimensions(getDimensions(panel));
			const restoreAnimationName = setTemporaryStyle(panel, "animation-name", "none");
			if (!skipNextOpen) {
				restoreAnimationName();
				return;
			}
			const restoreAnimationDuration = setTemporaryStyle(panel, "animation-duration", "0s");
			restoreAnimationName();
			setPendingTemporaryStyleRestore(restoreAnimationDuration);
			setForcePanelIdle(true);
			return;
		}
		if (!open && mounted && (transitionStatus === "idle" || transitionStatus === "starting")) {
			shouldPreventMountAnimationRef.current = false;
			shouldPreventActivityResumeAnimationRef.current = false;
			if (animationType === "none") {
				setDimensions(EMPTY_DIMENSIONS, false);
				setMounted(false);
				return;
			}
			setDimensions(getDimensions(panel));
			return;
		}
		if (transitionStatus !== "ending") return;
		if (animationType === "none") {
			setMounted(false);
			return;
		}
		const nextDimensions = getDimensions(panel);
		if (!(nextDimensions.height > 0 || nextDimensions.width > 0)) {
			setMounted(false);
			return;
		}
		setDimensions(nextDimensions);
		if (animationType === "css-animation") setTemporaryStyle(panel, "animation-name", "none")();
	}, [
		mounted,
		open,
		restorePendingTemporaryStyle,
		setDimensions,
		setMounted,
		setPendingTemporaryStyleRestore,
		shouldPreventOpenAnimation,
		transitionStatus
	]);
	useOpenChangeComplete({
		enabled: open && mounted && panelTransitionStatus === "idle",
		open: true,
		ref: panelRef,
		onComplete() {
			if (!open) return;
			setDimensions(EMPTY_DIMENSIONS, false);
		}
	});
	import_react$3.useEffect(() => {
		if (open || !mounted || panelTransitionStatus !== "ending") return;
		if (!panelRef.current) return;
		const abortController = new AbortController();
		let endingStyleFrame = -1;
		function handleComplete() {
			if (latestOpenRef.current) return;
			setMounted(false);
			setDimensions(EMPTY_DIMENSIONS, false);
		}
		endingStyleFrame = AnimationFrame.request(() => {
			runOnceCloseAnimationsFinish(handleComplete, abortController.signal);
		});
		return () => {
			AnimationFrame.cancel(endingStyleFrame);
			abortController.abort();
		};
	}, [
		latestOpenRef,
		mounted,
		open,
		panelTransitionStatus,
		runOnceCloseAnimationsFinish,
		setDimensions,
		setMounted
	]);
	useIsoLayoutEffect(() => {
		const panel = panelRef.current;
		if (!panel || !hiddenUntilFound || !hidden) return;
		panel.setAttribute("hidden", "until-found");
	}, [hidden, hiddenUntilFound]);
	import_react$3.useEffect(function registerBeforeMatchListener() {
		const panel = panelRef.current;
		if (!panel) return;
		function handleBeforeMatch(event) {
			const eventDetails = createChangeEventDetails(none, event);
			onOpenChange(true, eventDetails);
			if (eventDetails.isCanceled) return;
			shouldSkipNextOpenRef.current = true;
			setOpen(true);
		}
		return addEventListener(panel, "beforematch", handleBeforeMatch);
	}, [onOpenChange, setOpen]);
	const shouldRender = keepMounted || hiddenUntilFound || mounted || open;
	return {
		height: renderedDimensions.height,
		props: {
			...shouldPersistHiddenTransitionStyles ? { [startingStyle]: "" } : void 0,
			hidden,
			id: idParam
		},
		ref: mergedPanelRef,
		shouldPreventOpenAnimation,
		shouldRender,
		transitionStatus: panelTransitionStatus,
		width: renderedDimensions.width
	};
}
function getDimensions(element) {
	return {
		height: element.scrollHeight,
		width: element.scrollWidth
	};
}
function getAnimationType(element, hasSuppressedMountAnimation) {
	const panelStyles = getWindow(element).getComputedStyle(element);
	const hasAnimation = (panelStyles.animationName.split(",").map((name) => name.trim()).some((name) => name !== "" && name !== "none") || hasSuppressedMountAnimation) && hasNonZeroDuration(panelStyles.animationDuration);
	const hasTransition = hasNonZeroDuration(panelStyles.transitionDuration);
	if (hasAnimation && hasTransition) {
		warn("CSS transitions and CSS animations both detected on Collapsible or Accordion panel.", "Only one of either animation type should be used.");
		return "css-transition";
	}
	if (hasTransition) return "css-transition";
	if (hasAnimation) return "css-animation";
	return "none";
}
function hasNonZeroDuration(value) {
	return value.split(",").map((part) => part.trim()).some((part) => part !== "" && Number.parseFloat(part) > 0);
}
/**
* Temporarily overrides an inline style property and returns a cleanup that
* restores the previous inline value and priority.
* @param element - The element whose inline style should be updated.
* @param property - The CSS property name to override.
* @param value - The temporary value to assign.
* @returns A cleanup function that restores the original inline style state.
*/
function setTemporaryStyle(element, property, value) {
	const previousValue = element.style.getPropertyValue(property);
	const previousPriority = element.style.getPropertyPriority(property);
	element.style.setProperty(property, value);
	return () => {
		if (previousValue === "") {
			element.style.removeProperty(property);
			return;
		}
		element.style.setProperty(property, previousValue, previousPriority);
	};
}
/**
* Temporarily resets inline alignment styles that can distort scroll-based
* size measurements, then restores them on the next animation frame.
* @param element - The panel element being measured.
* @returns A cleanup function that cancels the scheduled restore and reapplies
* the original inline layout styles immediately.
*/
function resetLayoutStyles(element) {
	const originalLayoutStyles = {
		"justify-content": element.style.justifyContent,
		"align-items": element.style.alignItems,
		"align-content": element.style.alignContent,
		"justify-items": element.style.justifyItems
	};
	Object.keys(originalLayoutStyles).forEach((key) => {
		element.style.setProperty(key, "initial", "important");
	});
	function restoreLayoutStyles() {
		Object.entries(originalLayoutStyles).forEach(([key, value]) => {
			if (value === "") {
				element.style.removeProperty(key);
				return;
			}
			element.style.setProperty(key, value);
		});
	}
	const frame = AnimationFrame.request(restoreLayoutStyles);
	return () => {
		AnimationFrame.cancel(frame);
		restoreLayoutStyles();
	};
}
var import_react$3, EMPTY_DIMENSIONS;
function init_useCollapsiblePanel() {
	return (init_useCollapsiblePanel = __esmMin((() => {
		import_react$3 = /* @__PURE__ */ __toESM(require_react(), 1);
		init_useIsoLayoutEffect();
		init_useMergedRefs();
		init_useAnimationFrame();
		init_useStableCallback();
		init_useValueAsRef();
		init_warn();
		init_floating_ui_utils_dom();
		init_createBaseUIEventDetails();
		init_reason_parts();
		init_useOpenChangeComplete();
		init_useAnimationsFinished();
		init_CollapsiblePanelDataAttributes();
		EMPTY_DIMENSIONS = {
			height: void 0,
			width: void 0
		};
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/collapsible/root/stateAttributesMapping.mjs
var collapsibleStateAttributesMapping;
function init_stateAttributesMapping() {
	return (init_stateAttributesMapping = __esmMin((() => {
		init_collapsibleOpenStateMapping();
		init_stateAttributesMapping$1();
		collapsibleStateAttributesMapping = {
			...collapsibleOpenStateMapping,
			...transitionStatusMapping
		};
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/collapsible/root/CollapsibleRoot.mjs
var import_react$2, import_jsx_runtime, CollapsibleRoot;
function init_CollapsibleRoot() {
	return (init_CollapsibleRoot = __esmMin((() => {
		import_react$2 = /* @__PURE__ */ __toESM(require_react(), 1);
		init_useStableCallback();
		init_useRenderElement();
		init_useCollapsibleRoot();
		init_CollapsibleRootContext();
		init_stateAttributesMapping();
		import_jsx_runtime = require_jsx_runtime();
		CollapsibleRoot = /*#__PURE__*/ import_react$2.forwardRef(function CollapsibleRoot(componentProps, forwardedRef) {
			const { render, className, defaultOpen = false, disabled = false, onOpenChange: onOpenChangeProp, open, style, ...elementProps } = componentProps;
			const onOpenChange = useStableCallback(onOpenChangeProp);
			const collapsible = useCollapsibleRoot({
				open,
				defaultOpen,
				onOpenChange,
				disabled
			});
			const state = import_react$2.useMemo(() => ({
				open: collapsible.open,
				disabled: collapsible.disabled,
				transitionStatus: collapsible.transitionStatus
			}), [
				collapsible.open,
				collapsible.disabled,
				collapsible.transitionStatus
			]);
			const contextValue = import_react$2.useMemo(() => ({
				...collapsible,
				onOpenChange,
				state
			}), [
				collapsible,
				onOpenChange,
				state
			]);
			const element = useRenderElement("div", componentProps, {
				state,
				ref: forwardedRef,
				props: elementProps,
				stateAttributesMapping: collapsibleStateAttributesMapping
			});
			return /*#__PURE__*/ (0, import_jsx_runtime.jsx)(CollapsibleRootContext.Provider, {
				value: contextValue,
				children: element
			});
		});
		CollapsibleRoot.displayName = "CollapsibleRoot";
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/collapsible/trigger/CollapsibleTrigger.mjs
var import_react$1, stateAttributesMapping, CollapsibleTrigger;
function init_CollapsibleTrigger() {
	return (init_CollapsibleTrigger = __esmMin((() => {
		import_react$1 = /* @__PURE__ */ __toESM(require_react(), 1);
		init_collapsibleOpenStateMapping();
		init_stateAttributesMapping$1();
		init_useRenderElement();
		init_useButton();
		init_CollapsibleRootContext();
		stateAttributesMapping = {
			...triggerOpenStateMapping,
			...transitionStatusMapping
		};
		CollapsibleTrigger = /*#__PURE__*/ import_react$1.forwardRef(function CollapsibleTrigger(componentProps, forwardedRef) {
			const { panelId, open, handleTrigger, state, disabled: contextDisabled } = useCollapsibleRootContext();
			const { className, disabled = contextDisabled, render, nativeButton = true, style, ...elementProps } = componentProps;
			const { getButtonProps, buttonRef } = useButton({
				disabled,
				focusableWhenDisabled: true,
				native: nativeButton
			});
			return useRenderElement("button", componentProps, {
				state,
				ref: [forwardedRef, buttonRef],
				props: [
					{
						"aria-controls": open ? panelId : void 0,
						"aria-expanded": open,
						onClick: handleTrigger
					},
					elementProps,
					getButtonProps
				],
				stateAttributesMapping
			});
		});
		CollapsibleTrigger.displayName = "CollapsibleTrigger";
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/collapsible/panel/CollapsiblePanelCssVars.mjs
var collapsiblePanelHeight, collapsiblePanelWidth;
function init_CollapsiblePanelCssVars() {
	return (init_CollapsiblePanelCssVars = __esmMin((() => {
		collapsiblePanelHeight = "--collapsible-panel-height";
		collapsiblePanelWidth = "--collapsible-panel-width";
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/collapsible/panel/CollapsiblePanel.mjs
var import_react, CollapsiblePanel;
function init_CollapsiblePanel() {
	return (init_CollapsiblePanel = __esmMin((() => {
		import_react = /* @__PURE__ */ __toESM(require_react(), 1);
		init_useIsoLayoutEffect();
		init_warn();
		init_useRenderElement();
		init_CollapsibleRootContext();
		init_stateAttributesMapping();
		init_useCollapsiblePanel();
		init_CollapsiblePanelCssVars();
		CollapsiblePanel = /*#__PURE__*/ import_react.forwardRef(function CollapsiblePanel(componentProps, forwardedRef) {
			const { className, hiddenUntilFound: hiddenUntilFoundProp, keepMounted: keepMountedProp, render, id: idProp, style, ...elementProps } = componentProps;
			import_react.useEffect(() => {
				if (hiddenUntilFoundProp && keepMountedProp === false) warn("The `keepMounted={false}` prop on `Collapsible.Panel` is ignored when `hiddenUntilFound` is enabled, since the panel must remain mounted while closed.");
			}, [hiddenUntilFoundProp, keepMountedProp]);
			const { defaultPanelId, mounted, onOpenChange, open, setMounted, setPanelIdState, setOpen, state, transitionStatus } = useCollapsibleRootContext();
			const hiddenUntilFound = hiddenUntilFoundProp ?? false;
			const keepMounted = keepMountedProp ?? false;
			const registeredId = idProp || void 0;
			const id = registeredId ?? defaultPanelId;
			useIsoLayoutEffect(() => {
				setPanelIdState((currentId) => registeredId ?? (currentId === null ? void 0 : currentId));
				return () => {
					setPanelIdState((currentId) => currentId === registeredId ? null : currentId);
				};
			}, [registeredId, setPanelIdState]);
			const { height, props, ref, shouldPreventOpenAnimation, shouldRender, transitionStatus: panelTransitionStatus, width } = useCollapsiblePanel({
				externalRef: forwardedRef,
				hiddenUntilFound,
				id,
				keepMounted,
				mounted,
				onOpenChange,
				open,
				setMounted,
				setOpen,
				transitionStatus
			});
			const panelState = {
				...state,
				transitionStatus: panelTransitionStatus
			};
			const resolvedStyle = resolveStyle(style, panelState);
			const element = useRenderElement("div", {
				...componentProps,
				style: void 0
			}, {
				state: panelState,
				ref,
				props: [
					props,
					{ style: {
						[collapsiblePanelHeight]: height === void 0 ? "auto" : `${height}px`,
						[collapsiblePanelWidth]: width === void 0 ? "auto" : `${width}px`
					} },
					elementProps,
					resolvedStyle ? { style: resolvedStyle } : void 0,
					shouldPreventOpenAnimation ? { style: { animationName: "none" } } : void 0
				],
				stateAttributesMapping: collapsibleStateAttributesMapping
			});
			if (!shouldRender) return null;
			return element;
		});
		CollapsiblePanel.displayName = "CollapsiblePanel";
	})))();
}
//#endregion
export { CollapsibleRoot as a, init_CollapsibleTrigger as i, init_CollapsiblePanel as n, init_CollapsibleRoot as o, CollapsibleTrigger as r, CollapsiblePanel as t };
