import { n as __esmMin, o as __toESM } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_react_dom } from "./react-dom-Cvcx0Gdb.js";
import { t as require_client } from "./client-Bi03D2Uf.js";
//#region ../packages/element/build-module/react-platform.mjs
var import_react_dom, createPortal, flushSync, findDOMNode, render, hydrate, unmountComponentAtNode;
function init_react_platform() {
	return (init_react_platform = __esmMin((() => {
		import_react_dom = /* @__PURE__ */ __toESM(require_react_dom(), 1);
		require_client();
		({createPortal, flushSync, findDOMNode, render, hydrate, unmountComponentAtNode} = import_react_dom);
	})))();
}
//#endregion
export { flushSync as n, init_react_platform as r, createPortal as t };
