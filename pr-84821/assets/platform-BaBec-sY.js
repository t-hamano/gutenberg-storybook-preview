import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
//#region ../packages/keycodes/build-module/platform.mjs
function isAppleOS(_window) {
	if (!_window) {
		if (typeof window === "undefined") return false;
		_window = window;
	}
	const { platform } = _window.navigator;
	return platform.indexOf("Mac") !== -1 || ["iPad", "iPhone"].includes(platform);
}
function init_platform() {
	return (init_platform = __esmMin((() => {})))();
}
//#endregion
export { isAppleOS as n, init_platform as t };
