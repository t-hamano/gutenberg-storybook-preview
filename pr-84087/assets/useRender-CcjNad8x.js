import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as useRenderElement, t as init_useRenderElement } from "./useRenderElement-QwAlaybP.js";
//#region ../node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/use-render/useRender.mjs
/**
* Renders a Base UI element.
*
* @public
*/
function useRender(params) {
	return useRenderElement(params.defaultTagName ?? "div", params, params);
}
function init_useRender() {
	return (init_useRender = __esmMin((() => {
		init_useRenderElement();
	})))();
}
//#endregion
export { useRender as n, init_useRender as t };
