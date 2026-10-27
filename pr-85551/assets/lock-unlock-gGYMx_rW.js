import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_implementation, t as __dangerousOptInToUnstableAPIsOnlyForCoreModules } from "./implementation-CMzZuaZ2.js";
//#region ../packages/block-editor/src/lock-unlock.ts
var lock, unlock;
function init_lock_unlock() {
	return (init_lock_unlock = __esmMin((() => {
		init_implementation();
		({lock, unlock} = __dangerousOptInToUnstableAPIsOnlyForCoreModules("I acknowledge private features are not for use in themes or plugins and doing so will break in the next version of WordPress.", "@wordpress/block-editor"));
	})))();
}
//#endregion
export { lock as n, unlock as r, init_lock_unlock as t };
