import { n as __esmMin, o as __toESM } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_react } from "./react-Bujh4FgW.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C1RZKCc6.js";
import { n as useRenderElement, t as init_useRenderElement } from "./useRenderElement-QwAlaybP.js";
import { i as transitionStatusMapping, r as init_stateAttributesMapping$1 } from "./useTransitionStatus-C7eUOB6r.js";
//#region ../node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/menu/checkbox-item/MenuCheckboxItemDataAttributes.mjs
var checked, unchecked;
function init_MenuCheckboxItemDataAttributes() {
	return (init_MenuCheckboxItemDataAttributes = __esmMin((() => {
		checked = "data-checked";
		unchecked = "data-unchecked";
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/menu/utils/stateAttributesMapping.mjs
var itemMapping;
function init_stateAttributesMapping() {
	return (init_stateAttributesMapping = __esmMin((() => {
		init_stateAttributesMapping$1();
		init_MenuCheckboxItemDataAttributes();
		itemMapping = {
			checked(value) {
				if (value) return { [checked]: "" };
				return { [unchecked]: "" };
			},
			...transitionStatusMapping
		};
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/menu/group/MenuGroupContext.mjs
function useMenuGroupRootContext() {
	const context = import_react$1.useContext(MenuGroupContext);
	if (context === void 0) throw new Error("Base UI: MenuGroupContext is missing. Menu group parts must be used within <Menu.Group> or <Menu.RadioGroup>.");
	return context;
}
var import_react$1, MenuGroupContext;
function init_MenuGroupContext() {
	return (init_MenuGroupContext = __esmMin((() => {
		import_react$1 = /* @__PURE__ */ __toESM(require_react(), 1);
		MenuGroupContext = /*#__PURE__*/ import_react$1.createContext(void 0);
		MenuGroupContext.displayName = "MenuGroupContext";
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/menu/group/MenuGroup.mjs
var import_react, import_jsx_runtime, MenuGroup;
function init_MenuGroup() {
	return (init_MenuGroup = __esmMin((() => {
		import_react = /* @__PURE__ */ __toESM(require_react(), 1);
		init_useRenderElement();
		init_MenuGroupContext();
		import_jsx_runtime = require_jsx_runtime();
		MenuGroup = /*#__PURE__*/ import_react.forwardRef(function MenuGroup(componentProps, forwardedRef) {
			const { render, className, style, ...elementProps } = componentProps;
			const [labelId, setLabelId] = import_react.useState(void 0);
			const element = useRenderElement("div", componentProps, {
				ref: forwardedRef,
				props: {
					role: "group",
					"aria-labelledby": labelId,
					...elementProps
				}
			});
			return /*#__PURE__*/ (0, import_jsx_runtime.jsx)(MenuGroupContext.Provider, {
				value: setLabelId,
				children: element
			});
		});
		MenuGroup.displayName = "MenuGroup";
	})))();
}
//#endregion
export { useMenuGroupRootContext as a, init_MenuGroupContext as i, init_MenuGroup as n, init_stateAttributesMapping as o, MenuGroupContext as r, itemMapping as s, MenuGroup as t };
