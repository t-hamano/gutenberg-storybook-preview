import { n as __esmMin, o as __toESM } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_react } from "./react-Bujh4FgW.js";
import { f as init_empty, l as EMPTY_ARRAY } from "./useRenderElement-Dkv6YH0v.js";
//#region ../node_modules/.store/@base-ui/utils@0.5.0--7My7Lubseca8je9LSEweA/node_modules/@base-ui/utils/useOnMount.mjs
/**
* A React.useEffect equivalent that runs once, when the component is mounted.
*/
function useOnMount(fn) {
	import_react.useEffect(fn, EMPTY_ARRAY);
}
var import_react;
function init_useOnMount() {
	return (init_useOnMount = __esmMin((() => {
		import_react = /* @__PURE__ */ __toESM(require_react(), 1);
		init_empty();
	})))();
}
//#endregion
export { useOnMount as n, init_useOnMount as t };
