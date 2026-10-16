import { n as __esmMin, o as __toESM } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_react } from "./react-Bujh4FgW.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C1RZKCc6.js";
import { r as useRenderElement, t as init_useRenderElement } from "./useRenderElement-Dkv6YH0v.js";
import { n as useIsoLayoutEffect, t as init_useIsoLayoutEffect } from "./useIsoLayoutEffect-DDc8Lhn-.js";
import { n as useBaseUiId, t as init_useBaseUiId } from "./useBaseUiId-CESTxyJs.js";
import { B as useComboboxDerivedItemsContext, U as useComboboxRootContext, b as init_GroupCollectionContext, m as useInitialLiveRegionTextMutation, p as init_useInitialLiveRegionTextMutation, y as GroupCollectionProvider, z as init_ComboboxRootContext } from "./ComboboxEmpty-B5deBkxx.js";
//#region ../node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/combobox/status/ComboboxStatus.mjs
var import_react$3, ComboboxStatus;
function init_ComboboxStatus() {
	return (init_ComboboxStatus = __esmMin((() => {
		import_react$3 = /* @__PURE__ */ __toESM(require_react(), 1);
		init_useRenderElement();
		init_useInitialLiveRegionTextMutation();
		ComboboxStatus = /*#__PURE__*/ import_react$3.forwardRef(function ComboboxStatus(componentProps, forwardedRef) {
			const { render, className, style, children: childrenProp, ...elementProps } = componentProps;
			const statusRef = useInitialLiveRegionTextMutation();
			return useRenderElement("div", componentProps, {
				ref: [forwardedRef, statusRef],
				props: [{
					children: childrenProp,
					role: "status",
					"aria-live": "polite",
					"aria-atomic": true
				}, elementProps]
			});
		});
		ComboboxStatus.displayName = "ComboboxStatus";
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/combobox/group/ComboboxGroupContext.mjs
function useComboboxGroupContext() {
	const context = import_react$2.useContext(ComboboxGroupContext);
	if (context === void 0) throw new Error("Base UI: ComboboxGroupContext is missing. ComboboxGroup parts must be placed within <Combobox.Group>.");
	return context;
}
var import_react$2, ComboboxGroupContext;
function init_ComboboxGroupContext() {
	return (init_ComboboxGroupContext = __esmMin((() => {
		import_react$2 = /* @__PURE__ */ __toESM(require_react(), 1);
		ComboboxGroupContext = /*#__PURE__*/ import_react$2.createContext(void 0);
		ComboboxGroupContext.displayName = "ComboboxGroupContext";
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/combobox/group/ComboboxGroup.mjs
var import_react$1, import_jsx_runtime, ComboboxGroup;
function init_ComboboxGroup() {
	return (init_ComboboxGroup = __esmMin((() => {
		import_react$1 = /* @__PURE__ */ __toESM(require_react(), 1);
		init_useRenderElement();
		init_ComboboxGroupContext();
		init_GroupCollectionContext();
		init_ComboboxRootContext();
		import_jsx_runtime = require_jsx_runtime();
		ComboboxGroup = /*#__PURE__*/ import_react$1.forwardRef(function ComboboxGroup(componentProps, forwardedRef) {
			const { render, className, style, items, ...elementProps } = componentProps;
			const grid = useComboboxRootContext().useState("grid");
			const [labelId, setLabelId] = import_react$1.useState();
			const contextValue = import_react$1.useMemo(() => ({
				labelId,
				setLabelId,
				items
			}), [
				labelId,
				setLabelId,
				items
			]);
			const element = useRenderElement("div", componentProps, {
				ref: forwardedRef,
				props: [{
					role: grid ? "rowgroup" : "group",
					"aria-labelledby": labelId
				}, elementProps]
			});
			const wrappedElement = /*#__PURE__*/ (0, import_jsx_runtime.jsx)(ComboboxGroupContext.Provider, {
				value: contextValue,
				children: element
			});
			if (items) return /*#__PURE__*/ (0, import_jsx_runtime.jsx)(GroupCollectionProvider, {
				items,
				children: wrappedElement
			});
			return wrappedElement;
		});
		ComboboxGroup.displayName = "ComboboxGroup";
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/combobox/group-label/ComboboxGroupLabel.mjs
var import_react, ComboboxGroupLabel;
function init_ComboboxGroupLabel() {
	return (init_ComboboxGroupLabel = __esmMin((() => {
		import_react = /* @__PURE__ */ __toESM(require_react(), 1);
		init_useIsoLayoutEffect();
		init_useBaseUiId();
		init_ComboboxGroupContext();
		init_useRenderElement();
		ComboboxGroupLabel = /*#__PURE__*/ import_react.forwardRef(function ComboboxGroupLabel(componentProps, forwardedRef) {
			const { render, className, style, id: idProp, ...elementProps } = componentProps;
			const { setLabelId } = useComboboxGroupContext();
			const id = useBaseUiId(idProp);
			useIsoLayoutEffect(() => {
				setLabelId(id);
				return () => {
					setLabelId((currentId) => currentId === id ? void 0 : currentId);
				};
			}, [id, setLabelId]);
			return useRenderElement("div", componentProps, {
				ref: forwardedRef,
				props: [{
					id,
					"aria-hidden": true
				}, elementProps]
			});
		});
		ComboboxGroupLabel.displayName = "ComboboxGroupLabel";
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/combobox/root/utils/useFilteredItems.mjs
/**
* Returns the internally filtered items.
* Treat the result as read-only: it is internal state and may be a shared frozen array.
*/
function useFilteredItems() {
	return useComboboxDerivedItemsContext().filteredItems;
}
function init_useFilteredItems() {
	return (init_useFilteredItems = __esmMin((() => {
		init_ComboboxRootContext();
	})))();
}
//#endregion
export { ComboboxGroup as a, init_ComboboxStatus as c, init_ComboboxGroupLabel as i, useFilteredItems as n, init_ComboboxGroup as o, ComboboxGroupLabel as r, ComboboxStatus as s, init_useFilteredItems as t };
