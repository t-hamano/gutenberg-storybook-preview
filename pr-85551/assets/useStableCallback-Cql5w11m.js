import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { S as useRefWithInit, x as init_useRefWithInit } from "./useRenderElement-Dkv6YH0v.js";
import { i as init_safeReact, r as SafeReact } from "./useIsoLayoutEffect-DDc8Lhn-.js";
//#region ../node_modules/.store/@base-ui/utils@0.5.0--7My7Lubseca8je9LSEweA/node_modules/@base-ui/utils/useStableCallback.mjs
/**
* Stabilizes the function passed so it's always the same between renders.
*
* The function becomes non-reactive to any values it captures.
* It can safely be passed as a dependency of `React.useMemo` and `React.useEffect` without re-triggering them if its captured values change.
*
* The function must only be called inside effects and event handlers, never during render (which throws an error).
*
* This hook is a more permissive version of React 19.2's `React.useEffectEvent` in that it can be passed through contexts and called in event handler props, not just effects.
*/
function useStableCallback(callback) {
	const stable = useRefWithInit(createStableCallback).current;
	stable.next = callback;
	useSafeInsertionEffect(stable.effect);
	return stable.trampoline;
}
function createStableCallback() {
	const stable = {
		next: void 0,
		callback: assertNotCalled,
		trampoline: (...args) => stable.callback?.(...args),
		effect: () => {
			stable.callback = stable.next;
		}
	};
	return stable;
}
function assertNotCalled() {
	throw new Error("Base UI: Cannot call an event handler while rendering.");
}
var useInsertionEffect, useSafeInsertionEffect;
function init_useStableCallback() {
	return (init_useStableCallback = __esmMin((() => {
		init_safeReact();
		init_useRefWithInit();
		useInsertionEffect = SafeReact.useInsertionEffect;
		useSafeInsertionEffect = useInsertionEffect && useInsertionEffect !== SafeReact.useLayoutEffect ? useInsertionEffect : (fn) => fn();
	})))();
}
//#endregion
export { useStableCallback as n, init_useStableCallback as t };
