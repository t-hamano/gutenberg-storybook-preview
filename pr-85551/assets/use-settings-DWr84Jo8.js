import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as store, t as init_store } from "./store-BQzmWUzp.js";
import { Nn as init_block_edit } from "./utils-Dno6zrH7.js";
import { i as useSelect } from "./dispatch-BVn49BrG.js";
import { i as init_build_module } from "./v4-41127LZM.js";
import { f as useBlockEditContext } from "./context-D9nyNqxi.js";
import { r as unlock, t as init_lock_unlock } from "./lock-unlock-gGYMx_rW.js";
//#region ../packages/block-editor/src/components/use-settings/index.ts
/**
* Hook that retrieves the given settings for the block instance in use.
*
* It looks up the settings first in the block instance hierarchy.
* If none are found, it'll look them up in the block editor settings.
*
* @param {string[]} paths The paths to the settings.
* @return {any[]} Returns the values defined for the settings.
* @example
* ```js
* const [ fixed, sticky ] = useSettings( 'position.fixed', 'position.sticky' );
* ```
*/
function useSettings(...paths) {
	const { clientId = null } = useBlockEditContext();
	return useSelect((select) => unlock(select(store)).getBlockSettings(clientId, ...paths), [clientId, ...paths]);
}
function init_use_settings() {
	return (init_use_settings = __esmMin((() => {
		init_build_module();
		init_block_edit();
		init_store();
		init_lock_unlock();
	})))();
}
//#endregion
export { useSettings as n, init_use_settings as t };
