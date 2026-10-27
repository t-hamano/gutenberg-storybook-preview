import { n as __esmMin, o as __toESM } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_react } from "./react-Bujh4FgW.js";
import { r as useRenderElement, t as init_useRenderElement } from "./useRenderElement-Dkv6YH0v.js";
//#region ../node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/utils/listbox-separator/ListboxSeparator.mjs
var import_react, ListboxSeparator;
function init_ListboxSeparator() {
	return (init_ListboxSeparator = __esmMin((() => {
		import_react = /* @__PURE__ */ __toESM(require_react(), 1);
		init_useRenderElement();
		ListboxSeparator = /*#__PURE__*/ import_react.forwardRef(function ListboxSeparator(componentProps, forwardedRef) {
			const { className, render, orientation = "horizontal", style, ...elementProps } = componentProps;
			return useRenderElement("div", componentProps, {
				state: { orientation },
				ref: forwardedRef,
				props: [{ role: "presentation" }, elementProps]
			});
		});
		ListboxSeparator.displayName = "ListboxSeparator";
	})))();
}
//#endregion
export { init_ListboxSeparator as n, ListboxSeparator as t };
