import { n as __esmMin, o as __toESM } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_react } from "./react-Bujh4FgW.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C1RZKCc6.js";
import { r as useRenderElement, t as init_useRenderElement } from "./useRenderElement-Dkv6YH0v.js";
import { n as useRegisteredLabelId, t as init_useRegisteredLabelId } from "./useRegisteredLabelId-rzX4GRP8.js";
import { n as init_FieldsetRootContext, r as useFieldsetRootContext, t as FieldsetRootContext } from "./FieldsetRootContext-Du-Ays8e.js";
//#region ../node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/fieldset/root/FieldsetRoot.mjs
var import_react$1, import_jsx_runtime, FieldsetRoot;
function init_FieldsetRoot() {
	return (init_FieldsetRoot = __esmMin((() => {
		import_react$1 = /* @__PURE__ */ __toESM(require_react(), 1);
		init_FieldsetRootContext();
		init_useRenderElement();
		import_jsx_runtime = require_jsx_runtime();
		FieldsetRoot = /*#__PURE__*/ import_react$1.forwardRef(function FieldsetRoot(componentProps, forwardedRef) {
			const { render, className, style, disabled: disabledProp = false, ...elementProps } = componentProps;
			const [legendId, setLegendId] = import_react$1.useState(void 0);
			const disabled = useFieldsetRootContext(true)?.disabled || disabledProp;
			const element = useRenderElement("fieldset", componentProps, {
				ref: forwardedRef,
				state: { disabled },
				props: [{
					"aria-labelledby": legendId,
					disabled
				}, elementProps]
			});
			const contextValue = import_react$1.useMemo(() => ({
				legendId,
				setLegendId,
				disabled
			}), [
				legendId,
				setLegendId,
				disabled
			]);
			return /*#__PURE__*/ (0, import_jsx_runtime.jsx)(FieldsetRootContext.Provider, {
				value: contextValue,
				children: element
			});
		});
		FieldsetRoot.displayName = "FieldsetRoot";
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/fieldset/legend/FieldsetLegend.mjs
var import_react, FieldsetLegend;
function init_FieldsetLegend() {
	return (init_FieldsetLegend = __esmMin((() => {
		import_react = /* @__PURE__ */ __toESM(require_react(), 1);
		init_useRenderElement();
		init_FieldsetRootContext();
		init_useRegisteredLabelId();
		FieldsetLegend = /*#__PURE__*/ import_react.forwardRef(function FieldsetLegend(componentProps, forwardedRef) {
			const { render, className, style, id: idProp, ...elementProps } = componentProps;
			const { disabled, setLegendId } = useFieldsetRootContext();
			const id = useRegisteredLabelId(idProp, setLegendId);
			return useRenderElement("div", componentProps, {
				state: { disabled },
				ref: forwardedRef,
				props: [{ id }, elementProps]
			});
		});
		FieldsetLegend.displayName = "FieldsetLegend";
	})))();
}
//#endregion
export { init_FieldsetRoot as i, init_FieldsetLegend as n, FieldsetRoot as r, FieldsetLegend as t };
