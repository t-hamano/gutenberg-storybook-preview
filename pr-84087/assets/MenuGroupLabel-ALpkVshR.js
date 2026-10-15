import { n as __esmMin, o as __toESM } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_react } from "./react-Bujh4FgW.js";
import { n as useRenderElement, t as init_useRenderElement } from "./useRenderElement-QwAlaybP.js";
import { n as useIsoLayoutEffect, t as init_useIsoLayoutEffect } from "./useIsoLayoutEffect-CkrGpWFx.js";
import { n as useBaseUiId, t as init_useBaseUiId } from "./useBaseUiId-DDVp3i2t.js";
import { a as useMenuGroupRootContext, i as init_MenuGroupContext } from "./MenuGroup-EIDCmkJn.js";
//#region ../node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/menu/group-label/MenuGroupLabel.mjs
var import_react, MenuGroupLabel;
function init_MenuGroupLabel() {
	return (init_MenuGroupLabel = __esmMin((() => {
		import_react = /* @__PURE__ */ __toESM(require_react(), 1);
		init_useIsoLayoutEffect();
		init_useRenderElement();
		init_useBaseUiId();
		init_MenuGroupContext();
		MenuGroupLabel = /*#__PURE__*/ import_react.forwardRef(function MenuGroupLabel(componentProps, forwardedRef) {
			const { render, className, style, id: idProp, ...elementProps } = componentProps;
			const id = useBaseUiId(idProp);
			const setLabelId = useMenuGroupRootContext();
			useIsoLayoutEffect(() => {
				setLabelId(id);
				return () => {
					setLabelId((currentId) => currentId === id ? void 0 : currentId);
				};
			}, [setLabelId, id]);
			return useRenderElement("div", componentProps, {
				ref: forwardedRef,
				props: {
					id,
					"aria-hidden": true,
					...elementProps
				}
			});
		});
		MenuGroupLabel.displayName = "MenuGroupLabel";
	})))();
}
//#endregion
export { init_MenuGroupLabel as n, MenuGroupLabel as t };
