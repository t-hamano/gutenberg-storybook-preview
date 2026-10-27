import { n as __esmMin, o as __toESM } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_react } from "./react-Bujh4FgW.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C1RZKCc6.js";
import { r as useRenderElement, t as init_useRenderElement } from "./useRenderElement-Dkv6YH0v.js";
import { h as useFieldRootContext, m as init_FieldRootContext, v as fieldValidityMapping, y as init_constants } from "./useSetFieldFocused-BBT5GDr4.js";
import { n as init_FieldItemContext, t as FieldItemContext } from "./FieldItemContext-BpndY37q.js";
import { c as init_LabelableProvider, s as LabelableProvider } from "./FieldDescription-DSh96xOJ.js";
//#region ../node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/field/item/FieldItem.mjs
var import_react, import_jsx_runtime, FieldItem;
function init_FieldItem() {
	return (init_FieldItem = __esmMin((() => {
		import_react = /* @__PURE__ */ __toESM(require_react(), 1);
		init_FieldRootContext();
		init_constants();
		init_useRenderElement();
		init_FieldItemContext();
		init_LabelableProvider();
		import_jsx_runtime = require_jsx_runtime();
		FieldItem = /*#__PURE__*/ import_react.forwardRef(function FieldItem(componentProps, forwardedRef) {
			const { render, className, style, disabled: disabledProp = false, ...elementProps } = componentProps;
			const { state: fieldState, disabled: rootDisabled } = useFieldRootContext(false);
			const disabled = rootDisabled || disabledProp;
			const state = {
				...fieldState,
				disabled
			};
			const fieldItemContext = import_react.useMemo(() => ({ disabled }), [disabled]);
			const element = useRenderElement("div", componentProps, {
				ref: forwardedRef,
				state,
				props: elementProps,
				stateAttributesMapping: fieldValidityMapping
			});
			return /*#__PURE__*/ (0, import_jsx_runtime.jsx)(LabelableProvider, { children: /*#__PURE__*/ (0, import_jsx_runtime.jsx)(FieldItemContext.Provider, {
				value: fieldItemContext,
				children: element
			}) });
		});
		FieldItem.displayName = "FieldItem";
	})))();
}
//#endregion
export { init_FieldItem as n, FieldItem as t };
