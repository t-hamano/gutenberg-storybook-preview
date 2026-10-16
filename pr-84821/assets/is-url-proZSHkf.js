import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
//#region ../packages/url/build-module/is-url.mjs
function isURL(url) {
	try {
		new URL(url);
		return true;
	} catch {
		return false;
	}
}
function init_is_url() {
	return (init_is_url = __esmMin((() => {})))();
}
//#endregion
export { isURL as n, init_is_url as t };
