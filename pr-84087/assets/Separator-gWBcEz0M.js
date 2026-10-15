import { n as __esmMin, o as __toESM } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_react } from "./react-Bujh4FgW.js";
import { n as useRenderElement, t as init_useRenderElement } from "./useRenderElement-QwAlaybP.js";
//#region ../node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/separator/Separator.mjs
var import_react, Separator;
function init_Separator() {
	return (init_Separator = __esmMin((() => {
		import_react = /* @__PURE__ */ __toESM(require_react(), 1);
		init_useRenderElement();
		Separator = /*#__PURE__*/ import_react.forwardRef(function SeparatorComponent(componentProps, forwardedRef) {
			const { className, render, orientation = "horizontal", style, ...elementProps } = componentProps;
			return useRenderElement("div", componentProps, {
				state: { orientation },
				ref: forwardedRef,
				props: [{
					role: "separator",
					"aria-orientation": orientation
				}, elementProps]
			});
		});
		Separator.displayName = "Separator";
	})))();
}
//#endregion
export { init_Separator as n, Separator as t };
