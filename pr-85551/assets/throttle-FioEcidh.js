import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_debounce, t as debounce } from "./debounce-ga5YZOAF.js";
//#region ../packages/compose/build-module/utils/throttle/index.mjs
var throttle;
function init_throttle() {
	return (init_throttle = __esmMin((() => {
		init_debounce();
		throttle = (func, wait, options) => {
			let leading = true;
			let trailing = true;
			if (options) {
				leading = "leading" in options ? !!options.leading : leading;
				trailing = "trailing" in options ? !!options.trailing : trailing;
			}
			return debounce(func, wait, {
				leading,
				trailing,
				maxWait: wait
			});
		};
	})))();
}
//#endregion
export { throttle as n, init_throttle as t };
