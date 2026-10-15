import { n as __esmMin, o as __toESM } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_react } from "./react-Bujh4FgW.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C1RZKCc6.js";
import { t as require_shim } from "./shim-Bltiqgka.js";
import { c as EMPTY_ARRAY, d as init_empty, n as useRenderElement, t as init_useRenderElement, u as NOOP } from "./useRenderElement-QwAlaybP.js";
import { n as useIsoLayoutEffect, t as init_useIsoLayoutEffect } from "./useIsoLayoutEffect-CkrGpWFx.js";
import { n as useStableCallback, t as init_useStableCallback } from "./useStableCallback-HKs9zu76.js";
import { a as init_useOpenChangeComplete, i as transitionStatusMapping, n as useTransitionStatus, o as useOpenChangeComplete, r as init_stateAttributesMapping$1, t as init_useTransitionStatus } from "./useTransitionStatus-C7eUOB6r.js";
import { n as useControlled, t as init_useControlled } from "./useControlled-B67zM6EB.js";
import { i as init_CompositeList, n as useCompositeListItem, r as CompositeList, t as init_useCompositeListItem } from "./useCompositeListItem-YflddsV3.js";
import { n as useBaseUiId, t as init_useBaseUiId } from "./useBaseUiId-DDVp3i2t.js";
import { S as none, l as disabled, m as initial, p as init_reason_parts, r as init_createBaseUIEventDetails, t as createChangeEventDetails, x as missing } from "./createBaseUIEventDetails-CC__nZlv.js";
import { c as getParentNode, l as getWindow, m as isLastTraversableNode, p as isHTMLElement, t as getComputedStyle, u as init_floating_ui_utils_dom } from "./floating-ui.utils.dom-s51Otfgf.js";
import { n as useButton, o as init_CompositeRootContext, s as useCompositeRootContext, t as init_useButton } from "./useButton-C38YKBDn.js";
import { n as ownerDocument } from "./owner-Bl-6Ntf5.js";
import { i as init_shadowDom, n as contains, t as activeElement } from "./shadowDom-CFrNFfBF.js";
import { b as round, g as init_floating_ui_utils } from "./floating-ui.utils-ChRPHDv6.js";
import { n as init_inertValue, t as inertValue } from "./inertValue-BhNu7eJI.js";
import { n as useCompositeItem, t as init_useCompositeItem } from "./useCompositeItem-BQc9TE0F.js";
import { n as useCSPContext, t as init_CSPContext } from "./CSPContext-DmzZfHFb.js";
import { n as init_getElementTransform, t as getElementTransform } from "./getElementTransform-wwyU_GHh.js";
import { i as init_constants, n as init_CompositeRoot, r as ACTIVE_COMPOSITE_ITEM, t as CompositeRoot } from "./CompositeRoot-B8eYGn7j.js";
//#region ../node_modules/.store/@base-ui/utils@0.4.0-Z81C5N42agUorsFwt3T4Yw/node_modules/@base-ui/utils/useForcedRerendering.mjs
/**
* Returns a function that forces a rerender.
*/
function useForcedRerendering() {
	const [, setState] = import_react$8.useState({});
	return import_react$8.useCallback(() => {
		setState({});
	}, []);
}
var import_react$8;
function init_useForcedRerendering() {
	return (init_useForcedRerendering = __esmMin((() => {
		import_react$8 = /* @__PURE__ */ __toESM(require_react(), 1);
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/utils/getCssDimensions.mjs
function getCssDimensions(element) {
	const css = getComputedStyle(element);
	let width = parseFloat(css.width) || 0;
	let height = parseFloat(css.height) || 0;
	const hasOffset = isHTMLElement(element);
	const offsetWidth = hasOffset ? element.offsetWidth : width;
	const offsetHeight = hasOffset ? element.offsetHeight : height;
	if (round(width) !== offsetWidth || round(height) !== offsetHeight) {
		width = offsetWidth;
		height = offsetHeight;
	}
	return {
		width,
		height
	};
}
function init_getCssDimensions() {
	return (init_getCssDimensions = __esmMin((() => {
		init_floating_ui_utils();
		init_floating_ui_utils_dom();
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/utils/useIsHydrating.mjs
function subscribe() {
	return NOOP;
}
function getSnapshot() {
	return false;
}
function getServerSnapshot() {
	return true;
}
/**
* Returns `true` while React is hydrating server-rendered markup and `false`
* for fresh client-only mounts.
*/
function useIsHydrating() {
	return (0, import_shim.useSyncExternalStore)(subscribe, getSnapshot, getServerSnapshot);
}
var import_shim;
function init_useIsHydrating() {
	return (init_useIsHydrating = __esmMin((() => {
		import_shim = require_shim();
		init_empty();
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/internals/PrehydrationScript.mjs
function PrehydrationScript(props) {
	const { script } = props;
	const { nonce } = useCSPContext();
	if (!useIsHydrating()) return null;
	return /*#__PURE__*/ (0, import_jsx_runtime$3.jsx)("script", {
		nonce,
		dangerouslySetInnerHTML: { __html: script },
		suppressHydrationWarning: true
	});
}
var import_jsx_runtime$3;
function init_PrehydrationScript() {
	return (init_PrehydrationScript = __esmMin((() => {
		require_react();
		init_useIsHydrating();
		init_CSPContext();
		import_jsx_runtime$3 = require_jsx_runtime();
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/tabs/root/TabsRootContext.mjs
function useTabsRootContext() {
	const context = import_react$6.useContext(TabsRootContext);
	if (context === void 0) throw new Error("Base UI: TabsRootContext is missing. Tabs parts must be placed within <Tabs.Root>.");
	return context;
}
var import_react$6, TabsRootContext;
function init_TabsRootContext() {
	return (init_TabsRootContext = __esmMin((() => {
		import_react$6 = /* @__PURE__ */ __toESM(require_react(), 1);
		TabsRootContext = /*#__PURE__*/ import_react$6.createContext(void 0);
		TabsRootContext.displayName = "TabsRootContext";
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/tabs/root/TabsRootDataAttributes.mjs
var activationDirection;
function init_TabsRootDataAttributes() {
	return (init_TabsRootDataAttributes = __esmMin((() => {
		activationDirection = "data-activation-direction";
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/tabs/root/stateAttributesMapping.mjs
var tabsStateAttributesMapping;
function init_stateAttributesMapping() {
	return (init_stateAttributesMapping = __esmMin((() => {
		init_TabsRootDataAttributes();
		tabsStateAttributesMapping = { tabActivationDirection: (dir) => ({ [activationDirection]: dir }) };
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/tabs/root/TabsRoot.mjs
function findTabElement(tabMap, value) {
	for (const [tabElement, tabMetadata] of tabMap.entries()) if (value === tabMetadata.value) return tabElement;
	return null;
}
function computeActivationDirection(oldValue, newValue, orientation, tabMap) {
	if (oldValue == null || newValue == null) return "none";
	const [positionProp, backward, forward] = orientation === "horizontal" ? [
		"left",
		"left",
		"right"
	] : [
		"top",
		"up",
		"down"
	];
	const oldTab = findTabElement(tabMap, oldValue);
	const newTab = findTabElement(tabMap, newValue);
	if (oldTab == null || newTab == null) {
		if (oldTab !== newTab && (typeof oldValue === "number" || typeof oldValue === "string") && typeof oldValue === typeof newValue) return newValue > oldValue ? forward : backward;
		return "none";
	}
	const oldPosition = oldTab.getBoundingClientRect()[positionProp];
	const newPosition = newTab.getBoundingClientRect()[positionProp];
	if (newPosition < oldPosition) return backward;
	if (newPosition > oldPosition) return forward;
	return "none";
}
var import_react$5, import_jsx_runtime$2, TabsRoot;
function init_TabsRoot() {
	return (init_TabsRoot = __esmMin((() => {
		import_react$5 = /* @__PURE__ */ __toESM(require_react(), 1);
		init_useControlled();
		init_useIsoLayoutEffect();
		init_useStableCallback();
		init_useRenderElement();
		init_CompositeList();
		init_TabsRootContext();
		init_stateAttributesMapping();
		init_createBaseUIEventDetails();
		init_reason_parts();
		import_jsx_runtime$2 = require_jsx_runtime();
		TabsRoot = /*#__PURE__*/ import_react$5.forwardRef(function TabsRoot(componentProps, forwardedRef) {
			const { className, defaultValue: defaultValueProp = 0, onValueChange: onValueChangeProp, orientation = "horizontal", render, value: valueProp, style, ...elementProps } = componentProps;
			const hasExplicitDefaultValueProp = componentProps.defaultValue !== void 0;
			const tabPanelRefs = import_react$5.useRef([]);
			const [mountedTabPanels, setMountedTabPanels] = import_react$5.useState(() => /* @__PURE__ */ new Map());
			const [value, setValue] = useControlled({
				controlled: valueProp,
				default: defaultValueProp,
				name: "Tabs",
				state: "value"
			});
			const isControlled = valueProp !== void 0;
			const [tabMap, setTabMap] = import_react$5.useState(() => /* @__PURE__ */ new Map());
			const lastKnownTabElementRef = import_react$5.useRef(void 0);
			const getTabElementBySelectedValue = import_react$5.useCallback((selectedValue) => findTabElement(tabMap, selectedValue), [tabMap]);
			const [activationDirectionState, setActivationDirectionState] = import_react$5.useState(() => ({
				previousValue: value,
				tabActivationDirection: "none"
			}));
			const { previousValue, tabActivationDirection: committedTabActivationDirection } = activationDirectionState;
			let tabActivationDirection = committedTabActivationDirection;
			let directionComputationIncomplete = false;
			if (previousValue !== value) {
				tabActivationDirection = computeActivationDirection(previousValue, value, orientation, tabMap);
				directionComputationIncomplete = previousValue != null && value != null && getTabElementBySelectedValue(value) == null;
			}
			const nextPreviousValue = directionComputationIncomplete ? previousValue : value;
			const shouldSyncActivationDirectionState = previousValue !== nextPreviousValue || committedTabActivationDirection !== tabActivationDirection;
			useIsoLayoutEffect(() => {
				if (!shouldSyncActivationDirectionState) return;
				setActivationDirectionState({
					previousValue: nextPreviousValue,
					tabActivationDirection
				});
			}, [
				nextPreviousValue,
				shouldSyncActivationDirectionState,
				tabActivationDirection
			]);
			const onValueChange = useStableCallback((newValue, eventDetails) => {
				eventDetails.activationDirection = computeActivationDirection(value, newValue, orientation, tabMap);
				onValueChangeProp?.(newValue, eventDetails);
				if (eventDetails.isCanceled) return;
				setValue(newValue);
			});
			const notifyAutomaticValueChange = useStableCallback((nextValue, reason) => {
				onValueChangeProp?.(nextValue, createChangeEventDetails(reason, void 0, void 0, { activationDirection: "none" }));
			});
			const registerMountedTabPanel = useStableCallback((panelValue, panelId) => {
				setMountedTabPanels((prev) => {
					const next = new Map(prev);
					next.set(panelValue, panelId);
					return next;
				});
				return () => {
					setMountedTabPanels((prev) => {
						if (prev.get(panelValue) !== panelId) return prev;
						const next = new Map(prev);
						next.delete(panelValue);
						return next;
					});
				};
			});
			const getTabPanelIdByValue = import_react$5.useCallback((tabValue) => {
				return mountedTabPanels.get(tabValue);
			}, [mountedTabPanels]);
			const getTabIdByPanelValue = import_react$5.useCallback((tabPanelValue) => {
				for (const tabMetadata of tabMap.values()) if (tabPanelValue === tabMetadata.value) return tabMetadata.id;
			}, [tabMap]);
			const tabsContextValue = import_react$5.useMemo(() => ({
				getTabElementBySelectedValue,
				getTabIdByPanelValue,
				getTabPanelIdByValue,
				onValueChange,
				orientation,
				registerMountedTabPanel,
				setTabMap,
				tabActivationDirection,
				value
			}), [
				getTabElementBySelectedValue,
				getTabIdByPanelValue,
				getTabPanelIdByValue,
				onValueChange,
				orientation,
				registerMountedTabPanel,
				setTabMap,
				tabActivationDirection,
				value
			]);
			const selectedTabMetadata = import_react$5.useMemo(() => {
				for (const tabMetadata of tabMap.values()) if (tabMetadata.value === value) return tabMetadata;
			}, [tabMap, value]);
			const firstEnabledTabValue = import_react$5.useMemo(() => {
				for (const tabMetadata of tabMap.values()) if (!tabMetadata.disabled) return tabMetadata.value;
			}, [tabMap]);
			const shouldNotifyInitialValueChangeRef = import_react$5.useRef(!hasExplicitDefaultValueProp);
			const initialDefaultValueRef = import_react$5.useRef(defaultValueProp);
			const shouldHonorDisabledDefaultValueRef = import_react$5.useRef(hasExplicitDefaultValueProp);
			const didRegisterTabsRef = import_react$5.useRef(false);
			useIsoLayoutEffect(() => {
				if (isControlled) return;
				function commitAutomaticValueChange(fallbackValue, fallbackReason) {
					setValue(fallbackValue);
					setActivationDirectionState({
						previousValue: fallbackValue,
						tabActivationDirection: "none"
					});
					notifyAutomaticValueChange(fallbackValue, fallbackReason);
					shouldNotifyInitialValueChangeRef.current = false;
				}
				if (tabMap.size === 0) {
					if (didRegisterTabsRef.current && value !== null && !lastKnownTabElementRef.current?.isConnected) commitAutomaticValueChange(null, missing);
					return;
				}
				didRegisterTabsRef.current = true;
				lastKnownTabElementRef.current = tabMap.keys().next().value;
				const selectionIsDisabled = selectedTabMetadata?.disabled;
				const selectionIsMissing = selectedTabMetadata == null && value !== null;
				if (!selectionIsDisabled && value === initialDefaultValueRef.current) shouldHonorDisabledDefaultValueRef.current = false;
				if (shouldHonorDisabledDefaultValueRef.current && selectionIsDisabled && value === initialDefaultValueRef.current) return;
				const shouldNotifyInitialValueChange = shouldNotifyInitialValueChangeRef.current;
				if (selectionIsDisabled || selectionIsMissing) {
					const fallbackValue = firstEnabledTabValue ?? null;
					if (value === fallbackValue) {
						shouldNotifyInitialValueChangeRef.current = false;
						return;
					}
					let fallbackReason = missing;
					if (shouldNotifyInitialValueChange) fallbackReason = initial;
					else if (selectionIsDisabled) fallbackReason = disabled;
					commitAutomaticValueChange(fallbackValue, fallbackReason);
					return;
				}
				if (shouldNotifyInitialValueChange && selectedTabMetadata != null) {
					notifyAutomaticValueChange(value, initial);
					shouldNotifyInitialValueChangeRef.current = false;
				}
			}, [
				firstEnabledTabValue,
				isControlled,
				notifyAutomaticValueChange,
				selectedTabMetadata,
				setValue,
				tabMap,
				value
			]);
			const element = useRenderElement("div", componentProps, {
				state: {
					orientation,
					tabActivationDirection
				},
				ref: forwardedRef,
				props: elementProps,
				stateAttributesMapping: tabsStateAttributesMapping
			});
			return /*#__PURE__*/ (0, import_jsx_runtime$2.jsx)(TabsRootContext.Provider, {
				value: tabsContextValue,
				children: /*#__PURE__*/ (0, import_jsx_runtime$2.jsx)(CompositeList, {
					elementsRef: tabPanelRefs,
					children: element
				})
			});
		});
		TabsRoot.displayName = "TabsRoot";
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/tabs/list/TabsListContext.mjs
function useTabsListContext() {
	const context = import_react$4.useContext(TabsListContext);
	if (context === void 0) throw new Error("Base UI: TabsListContext is missing. TabsList parts must be placed within <Tabs.List>.");
	return context;
}
var import_react$4, TabsListContext;
function init_TabsListContext() {
	return (init_TabsListContext = __esmMin((() => {
		import_react$4 = /* @__PURE__ */ __toESM(require_react(), 1);
		TabsListContext = /*#__PURE__*/ import_react$4.createContext(void 0);
		TabsListContext.displayName = "TabsListContext";
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/tabs/tab/TabsTab.mjs
var import_react$3, TabsTab;
function init_TabsTab() {
	return (init_TabsTab = __esmMin((() => {
		import_react$3 = /* @__PURE__ */ __toESM(require_react(), 1);
		init_useIsoLayoutEffect();
		init_useStableCallback();
		init_useBaseUiId();
		init_useRenderElement();
		init_useButton();
		init_constants();
		init_useCompositeItem();
		init_CompositeRootContext();
		init_TabsRootContext();
		init_stateAttributesMapping();
		init_TabsListContext();
		init_createBaseUIEventDetails();
		init_reason_parts();
		init_shadowDom();
		TabsTab = /*#__PURE__*/ import_react$3.forwardRef(function TabsTab(componentProps, forwardedRef) {
			const { className, disabled = false, render, value, id: idProp, nativeButton = true, style, ...elementProps } = componentProps;
			const { value: activeTabValue, getTabPanelIdByValue, onValueChange, orientation, tabActivationDirection } = useTabsRootContext();
			const { activateOnFocus, registerTabResizeObserverElement, tabsListElement } = useTabsListContext();
			const { highlightedIndex, onHighlightedIndexChange } = useCompositeRootContext();
			const id = useBaseUiId(idProp);
			const tabMetadata = import_react$3.useMemo(() => ({
				disabled,
				id,
				value
			}), [
				disabled,
				id,
				value
			]);
			const { compositeProps, compositeRef, index } = useCompositeItem({ metadata: tabMetadata });
			const active = value === activeTabValue;
			const isNavigatingRef = import_react$3.useRef(false);
			const unobserveTabElementRef = import_react$3.useRef(null);
			const observeTabElement = useStableCallback((element) => {
				unobserveTabElementRef.current?.();
				unobserveTabElementRef.current = element ? registerTabResizeObserverElement(element) : null;
			});
			useIsoLayoutEffect(() => {
				if (isNavigatingRef.current) {
					isNavigatingRef.current = false;
					return;
				}
				if (!(active && index > -1 && highlightedIndex !== index)) return;
				const listElement = tabsListElement;
				if (listElement != null) {
					const activeEl = activeElement(ownerDocument(listElement));
					if (activeEl && contains(listElement, activeEl)) return;
				}
				if (!disabled) onHighlightedIndexChange(index);
			}, [
				active,
				index,
				highlightedIndex,
				onHighlightedIndexChange,
				disabled,
				tabsListElement
			]);
			const { getButtonProps, buttonRef } = useButton({
				disabled,
				native: nativeButton,
				focusableWhenDisabled: true
			});
			const tabPanelId = getTabPanelIdByValue(value);
			const isPressingRef = import_react$3.useRef(false);
			const isMainButtonRef = import_react$3.useRef(false);
			function activate(event) {
				onValueChange(value, createChangeEventDetails(none, event.nativeEvent, void 0, { activationDirection: "none" }));
			}
			function onClick(event) {
				if (active || disabled) return;
				activate(event);
			}
			function onFocus(event) {
				if (active || disabled) return;
				if (activateOnFocus && (!isPressingRef.current || isMainButtonRef.current)) activate(event);
			}
			function onPointerDown(event) {
				if (active || disabled) return;
				isPressingRef.current = true;
				isMainButtonRef.current = event.button === 0;
				const doc = ownerDocument(event.currentTarget);
				function handlePointerEnd() {
					isPressingRef.current = false;
					isMainButtonRef.current = false;
					doc.removeEventListener("pointerup", handlePointerEnd);
					doc.removeEventListener("pointercancel", handlePointerEnd);
				}
				doc.addEventListener("pointerup", handlePointerEnd);
				doc.addEventListener("pointercancel", handlePointerEnd);
			}
			return useRenderElement("button", componentProps, {
				state: {
					disabled,
					active,
					orientation,
					tabActivationDirection
				},
				ref: [
					forwardedRef,
					buttonRef,
					compositeRef,
					observeTabElement
				],
				props: [
					compositeProps,
					{
						role: "tab",
						"aria-controls": tabPanelId,
						"aria-selected": active,
						id,
						onClick,
						onFocus,
						onPointerDown,
						[ACTIVE_COMPOSITE_ITEM]: active ? "" : void 0,
						onKeyDownCapture() {
							isNavigatingRef.current = true;
						}
					},
					elementProps,
					getButtonProps
				],
				stateAttributesMapping: tabsStateAttributesMapping
			});
		});
		TabsTab.displayName = "TabsTab";
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/tabs/indicator/TabsIndicatorCssVars.mjs
var activeTabLeft, activeTabRight, activeTabTop, activeTabBottom, activeTabWidth, activeTabHeight;
function init_TabsIndicatorCssVars() {
	return (init_TabsIndicatorCssVars = __esmMin((() => {
		activeTabLeft = "--active-tab-left";
		activeTabRight = "--active-tab-right";
		activeTabTop = "--active-tab-top";
		activeTabBottom = "--active-tab-bottom";
		activeTabWidth = "--active-tab-width";
		activeTabHeight = "--active-tab-height";
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/tabs/indicator/TabsIndicator.mjs
function getLayoutOffset(element, ancestor) {
	const elementOffset = getCumulativeOffset(element);
	const ancestorOffset = getCumulativeOffset(ancestor);
	let left = elementOffset.left - ancestorOffset.left - ancestor.clientLeft;
	let top = elementOffset.top - ancestorOffset.top - ancestor.clientTop;
	let node = getParentNode(element);
	while (isHTMLElement(node) && node !== ancestor && !isLastTraversableNode(node)) {
		left -= node.scrollLeft;
		top -= node.scrollTop;
		node = getParentNode(node);
	}
	return {
		left,
		top
	};
}
function getCumulativeOffset(element) {
	let left = 0;
	let top = 0;
	let currentElement = element;
	while (currentElement != null) {
		left += currentElement.offsetLeft;
		top += currentElement.offsetTop;
		const offsetParent = currentElement.offsetParent;
		if (offsetParent != null) {
			left += offsetParent.clientLeft;
			top += offsetParent.clientTop;
		}
		currentElement = offsetParent;
	}
	return {
		left,
		top
	};
}
function getActiveTabTranslation(element) {
	const computedStyle = getWindow(element).getComputedStyle(element);
	const { x, y } = getElementTransform(element, computedStyle);
	let translateX = x;
	let translateY = y;
	const { translate } = computedStyle;
	if (translate && translate !== "none") {
		const parts = translate.split(" ");
		translateX += resolveTranslateLength(parts[0], element.offsetWidth);
		translateY += resolveTranslateLength(parts[1], element.offsetHeight);
	}
	return {
		x: translateX,
		y: translateY
	};
}
function resolveTranslateLength(value, referenceSize) {
	if (!value) return 0;
	const numeric = parseFloat(value);
	if (!Number.isFinite(numeric)) return 0;
	return value.endsWith("%") ? numeric / 100 * referenceSize : numeric;
}
var import_react$2, import_jsx_runtime$1, _PrehydrationScript, stateAttributesMapping$1, MAX_LAYOUT_ROUNDING_ERROR, TabsIndicator;
function init_TabsIndicator() {
	return (init_TabsIndicator = __esmMin((() => {
		import_react$2 = /* @__PURE__ */ __toESM(require_react(), 1);
		init_floating_ui_utils_dom();
		init_useForcedRerendering();
		init_PrehydrationScript();
		init_useRenderElement();
		init_getCssDimensions();
		init_getElementTransform();
		init_TabsRootContext();
		init_stateAttributesMapping();
		init_TabsListContext();
		init_TabsIndicatorCssVars();
		import_jsx_runtime$1 = require_jsx_runtime();
		stateAttributesMapping$1 = {
			...tabsStateAttributesMapping,
			activeTabPosition: () => null,
			activeTabSize: () => null
		};
		MAX_LAYOUT_ROUNDING_ERROR = 2;
		TabsIndicator = /*#__PURE__*/ import_react$2.forwardRef(function TabsIndicator(componentProps, forwardedRef) {
			const { className, render, renderBeforeHydration = false, style: styleProp, ...elementProps } = componentProps;
			const { getTabElementBySelectedValue, orientation, tabActivationDirection, value } = useTabsRootContext();
			const { tabsListElement, registerIndicatorUpdateListener } = useTabsListContext();
			const rerender = useForcedRerendering();
			import_react$2.useEffect(() => {
				return registerIndicatorUpdateListener(rerender);
			}, [registerIndicatorUpdateListener, rerender]);
			let left = 0;
			let right = 0;
			let top = 0;
			let bottom = 0;
			let width = 0;
			let height = 0;
			let isTabSelected = false;
			if (value != null && tabsListElement != null) {
				const activeTab = getTabElementBySelectedValue(value);
				if (activeTab != null) {
					isTabSelected = true;
					const { width: computedWidth, height: computedHeight } = getCssDimensions(activeTab);
					const { width: tabListWidth, height: tabListHeight } = getCssDimensions(tabsListElement);
					const tabRect = activeTab.getBoundingClientRect();
					const tabsListRect = tabsListElement.getBoundingClientRect();
					const scaleX = tabListWidth > 0 ? tabsListRect.width / tabListWidth : 1;
					const scaleY = tabListHeight > 0 ? tabsListRect.height / tabListHeight : 1;
					const layoutOffset = getLayoutOffset(activeTab, tabsListElement);
					left = layoutOffset.left;
					top = layoutOffset.top;
					const rectLeft = (tabRect.left - tabsListRect.left) / scaleX + tabsListElement.scrollLeft - tabsListElement.clientLeft;
					const rectTop = (tabRect.top - tabsListRect.top) / scaleY + tabsListElement.scrollTop - tabsListElement.clientTop;
					const tabTranslation = getActiveTabTranslation(activeTab);
					if (Math.abs(rectLeft - tabTranslation.x - left) <= MAX_LAYOUT_ROUNDING_ERROR && Math.abs(rectTop - tabTranslation.y - top) <= MAX_LAYOUT_ROUNDING_ERROR) {
						left = rectLeft;
						top = rectTop;
					}
					width = computedWidth;
					height = computedHeight;
					right = tabsListElement.scrollWidth - left - width;
					bottom = tabsListElement.scrollHeight - top - height;
				}
			}
			const activeTabPosition = isTabSelected ? {
				left,
				right,
				top,
				bottom
			} : null;
			const activeTabSize = isTabSelected ? {
				width,
				height
			} : null;
			const style = isTabSelected ? {
				[activeTabLeft]: `${left}px`,
				[activeTabRight]: `${right}px`,
				[activeTabTop]: `${top}px`,
				[activeTabBottom]: `${bottom}px`,
				[activeTabWidth]: `${width}px`,
				[activeTabHeight]: `${height}px`
			} : void 0;
			const element = useRenderElement("span", componentProps, {
				state: {
					orientation,
					activeTabPosition,
					activeTabSize,
					tabActivationDirection
				},
				ref: forwardedRef,
				props: [
					{
						role: "presentation",
						style,
						hidden: !(isTabSelected && width > 0 && height > 0)
					},
					elementProps,
					{ suppressHydrationWarning: true }
				],
				stateAttributesMapping: stateAttributesMapping$1
			});
			if (value == null) return null;
			return /*#__PURE__*/ (0, import_jsx_runtime$1.jsxs)(import_react$2.Fragment, { children: [element, renderBeforeHydration && (_PrehydrationScript || (_PrehydrationScript = /*#__PURE__*/ (0, import_jsx_runtime$1.jsx)(PrehydrationScript, { script: "" })))] });
		});
		TabsIndicator.displayName = "TabsIndicator";
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/tabs/panel/TabsPanelDataAttributes.mjs
var index;
function init_TabsPanelDataAttributes() {
	return (init_TabsPanelDataAttributes = __esmMin((() => {
		init_stateAttributesMapping$1();
		index = "data-index";
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/tabs/panel/TabsPanel.mjs
var import_react$1, stateAttributesMapping, TabsPanel;
function init_TabsPanel() {
	return (init_TabsPanel = __esmMin((() => {
		import_react$1 = /* @__PURE__ */ __toESM(require_react(), 1);
		init_inertValue();
		init_useIsoLayoutEffect();
		init_useBaseUiId();
		init_stateAttributesMapping$1();
		init_useOpenChangeComplete();
		init_useTransitionStatus();
		init_useRenderElement();
		init_useCompositeListItem();
		init_stateAttributesMapping();
		init_TabsRootContext();
		init_TabsPanelDataAttributes();
		stateAttributesMapping = {
			...tabsStateAttributesMapping,
			...transitionStatusMapping
		};
		TabsPanel = /*#__PURE__*/ import_react$1.forwardRef(function TabsPanel(componentProps, forwardedRef) {
			const { className, value, render, keepMounted = false, style, ...elementProps } = componentProps;
			const { value: selectedValue, getTabIdByPanelValue, orientation, tabActivationDirection, registerMountedTabPanel } = useTabsRootContext();
			const id = useBaseUiId();
			const { ref: listItemRef, index: index$1 } = useCompositeListItem();
			const open = value === selectedValue;
			const { mounted, transitionStatus, setMounted } = useTransitionStatus(open);
			const hidden = !mounted;
			const correspondingTabId = getTabIdByPanelValue(value);
			const state = {
				hidden,
				orientation,
				tabActivationDirection,
				transitionStatus
			};
			const panelRef = import_react$1.useRef(null);
			const element = useRenderElement("div", componentProps, {
				state,
				ref: [
					forwardedRef,
					listItemRef,
					panelRef
				],
				props: [{
					"aria-labelledby": correspondingTabId,
					hidden,
					id,
					role: "tabpanel",
					tabIndex: open ? 0 : -1,
					inert: inertValue(!open),
					[index]: index$1
				}, elementProps],
				stateAttributesMapping
			});
			useOpenChangeComplete({
				open,
				ref: panelRef,
				onComplete() {
					if (!open) setMounted(false);
				}
			});
			useIsoLayoutEffect(() => {
				if (id == null || hidden && !keepMounted) return;
				return registerMountedTabPanel(value, id);
			}, [
				hidden,
				keepMounted,
				value,
				id,
				registerMountedTabPanel
			]);
			if (!(keepMounted || mounted)) return null;
			return element;
		});
		TabsPanel.displayName = "TabsPanel";
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/tabs/list/TabsList.mjs
var import_react, import_jsx_runtime, TabsList;
function init_TabsList() {
	return (init_TabsList = __esmMin((() => {
		import_react = /* @__PURE__ */ __toESM(require_react(), 1);
		init_useStableCallback();
		init_useIsoLayoutEffect();
		init_empty();
		init_CompositeRoot();
		init_stateAttributesMapping();
		init_TabsRootContext();
		init_TabsListContext();
		import_jsx_runtime = require_jsx_runtime();
		TabsList = /*#__PURE__*/ import_react.forwardRef(function TabsList(componentProps, forwardedRef) {
			const { activateOnFocus = false, className, loopFocus = true, render, style, ...elementProps } = componentProps;
			const { orientation, setTabMap, tabActivationDirection } = useTabsRootContext();
			const [highlightedTabIndex, setHighlightedTabIndex] = import_react.useState(0);
			const [tabsListElement, setTabsListElement] = import_react.useState(null);
			const indicatorUpdateListenersRef = import_react.useRef(/* @__PURE__ */ new Set());
			const tabResizeObserverElementsRef = import_react.useRef(/* @__PURE__ */ new Set());
			const resizeObserverRef = import_react.useRef(null);
			useIsoLayoutEffect(() => {
				if (typeof ResizeObserver === "undefined") return;
				const resizeObserver = new ResizeObserver(() => {
					indicatorUpdateListenersRef.current.forEach((listener) => {
						listener();
					});
				});
				resizeObserverRef.current = resizeObserver;
				if (tabsListElement) resizeObserver.observe(tabsListElement);
				tabResizeObserverElementsRef.current.forEach((element) => {
					resizeObserver.observe(element);
				});
				return () => {
					resizeObserver.disconnect();
					resizeObserverRef.current = null;
				};
			}, [tabsListElement]);
			const registerIndicatorUpdateListener = useStableCallback((listener) => {
				indicatorUpdateListenersRef.current.add(listener);
				return () => {
					indicatorUpdateListenersRef.current.delete(listener);
				};
			});
			const registerTabResizeObserverElement = useStableCallback((element) => {
				tabResizeObserverElementsRef.current.add(element);
				resizeObserverRef.current?.observe(element);
				return () => {
					tabResizeObserverElementsRef.current.delete(element);
					resizeObserverRef.current?.unobserve(element);
				};
			});
			const state = {
				orientation,
				tabActivationDirection
			};
			const defaultProps = {
				"aria-orientation": orientation === "vertical" ? "vertical" : void 0,
				role: "tablist"
			};
			const tabsListContextValue = import_react.useMemo(() => ({
				activateOnFocus,
				registerIndicatorUpdateListener,
				registerTabResizeObserverElement,
				tabsListElement
			}), [
				activateOnFocus,
				registerIndicatorUpdateListener,
				registerTabResizeObserverElement,
				tabsListElement
			]);
			return /*#__PURE__*/ (0, import_jsx_runtime.jsx)(TabsListContext.Provider, {
				value: tabsListContextValue,
				children: /*#__PURE__*/ (0, import_jsx_runtime.jsx)(CompositeRoot, {
					render,
					className,
					style,
					state,
					refs: [forwardedRef, setTabsListElement],
					props: [defaultProps, elementProps],
					stateAttributesMapping: tabsStateAttributesMapping,
					highlightedIndex: highlightedTabIndex,
					enableHomeAndEndKeys: true,
					loopFocus,
					orientation,
					onHighlightedIndexChange: setHighlightedTabIndex,
					onMapChange: setTabMap,
					disabledIndices: EMPTY_ARRAY
				})
			});
		});
		TabsList.displayName = "TabsList";
	})))();
}
//#endregion
export { TabsIndicator as a, init_TabsTab as c, init_TabsPanel as i, TabsRoot as l, init_TabsList as n, init_TabsIndicator as o, TabsPanel as r, TabsTab as s, TabsList as t, init_TabsRoot as u };
