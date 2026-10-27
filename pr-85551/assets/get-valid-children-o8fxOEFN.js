import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
//#region ../packages/components/src/utils/get-valid-children.ts
/**
* Gets a collection of available children elements from a React component's children prop.
*
* @param children
*
* @return An array of available children.
*/
function getValidChildren(children) {
	if (typeof children === "string") return [children];
	return import_react.Children.toArray(children).filter((child) => (0, import_react.isValidElement)(child));
}
function init_get_valid_children() {
	return (init_get_valid_children = __esmMin((() => {
		init_react();
	})))();
}
//#endregion
export { init_get_valid_children as n, getValidChildren as t };
