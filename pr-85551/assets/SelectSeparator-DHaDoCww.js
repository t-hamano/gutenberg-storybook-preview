import { n as __esmMin, o as __toESM } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_react } from "./react-Bujh4FgW.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C1RZKCc6.js";
import { r as useRenderElement, t as init_useRenderElement } from "./useRenderElement-Dkv6YH0v.js";
import { n as useIsoLayoutEffect, t as init_useIsoLayoutEffect } from "./useIsoLayoutEffect-DDc8Lhn-.js";
import { n as useBaseUiId, t as init_useBaseUiId } from "./useBaseUiId-CESTxyJs.js";
import { n as init_ListboxSeparator, t as ListboxSeparator } from "./ListboxSeparator-CJEHCmmS.js";
//#region ../node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/select/group/SelectGroupContext.mjs
function useSelectGroupContext() {
	const context = import_react$2.useContext(SelectGroupContext);
	if (context === void 0) throw new Error("Base UI: SelectGroupContext is missing. SelectGroup parts must be placed within <Select.Group>.");
	return context;
}
var import_react$2, SelectGroupContext;
function init_SelectGroupContext() {
	return (init_SelectGroupContext = __esmMin((() => {
		import_react$2 = /* @__PURE__ */ __toESM(require_react(), 1);
		SelectGroupContext = /*#__PURE__*/ import_react$2.createContext(void 0);
		SelectGroupContext.displayName = "SelectGroupContext";
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/select/group/SelectGroup.mjs
var import_react$1, import_jsx_runtime, SelectGroup;
function init_SelectGroup() {
	return (init_SelectGroup = __esmMin((() => {
		import_react$1 = /* @__PURE__ */ __toESM(require_react(), 1);
		init_SelectGroupContext();
		init_useRenderElement();
		import_jsx_runtime = require_jsx_runtime();
		SelectGroup = /*#__PURE__*/ import_react$1.forwardRef(function SelectGroup(componentProps, forwardedRef) {
			const { render, className, style, ...elementProps } = componentProps;
			const [labelId, setLabelId] = import_react$1.useState();
			const contextValue = import_react$1.useMemo(() => ({
				labelId,
				setLabelId
			}), [labelId, setLabelId]);
			const element = useRenderElement("div", componentProps, {
				ref: forwardedRef,
				props: [{
					role: "group",
					"aria-labelledby": labelId
				}, elementProps]
			});
			return /*#__PURE__*/ (0, import_jsx_runtime.jsx)(SelectGroupContext.Provider, {
				value: contextValue,
				children: element
			});
		});
		SelectGroup.displayName = "SelectGroup";
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/select/group-label/SelectGroupLabel.mjs
var import_react, SelectGroupLabel;
function init_SelectGroupLabel() {
	return (init_SelectGroupLabel = __esmMin((() => {
		import_react = /* @__PURE__ */ __toESM(require_react(), 1);
		init_useIsoLayoutEffect();
		init_useBaseUiId();
		init_SelectGroupContext();
		init_useRenderElement();
		SelectGroupLabel = /*#__PURE__*/ import_react.forwardRef(function SelectGroupLabel(componentProps, forwardedRef) {
			const { render, className, style, id: idProp, ...elementProps } = componentProps;
			const { setLabelId } = useSelectGroupContext();
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
		SelectGroupLabel.displayName = "SelectGroupLabel";
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/select/separator/SelectSeparator.mjs
var SelectSeparator;
function init_SelectSeparator() {
	return (init_SelectSeparator = __esmMin((() => {
		init_ListboxSeparator();
		SelectSeparator = ListboxSeparator;
	})))();
}
//#endregion
export { SelectGroup as a, init_SelectGroupLabel as i, init_SelectSeparator as n, init_SelectGroup as o, SelectGroupLabel as r, SelectSeparator as t };
