import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { c as init_create_selector, d as init_controls, i as init_registry, l as init_keyed_reducer, m as combineReducers$1, n as init_default_registry, o as init_redux_store, t as default_registry_default } from "./default-registry-CuLW5PfA.js";
import { dr as init_with_dispatch } from "./utils-DWipWnH0.js";
import { n as init_dispatch, o as init_context, r as init_use_select } from "./dispatch-abVPMST3.js";
import { i as init_context$1, t as init_use_registry } from "./use-registry-CfP_kF8b.js";
import { c as init_use_dispatch } from "./build-module-C8SQ3xnO.js";
//#region ../packages/data/build-module/select.mjs
function select(storeNameOrDescriptor) {
	return default_registry_default.select(storeNameOrDescriptor);
}
function init_select() {
	return (init_select = __esmMin((() => {
		init_default_registry();
	})))();
}
//#endregion
//#region ../packages/data/build-module/index.mjs
function resolveSelect(storeNameOrDescriptor) {
	return default_registry_default.resolveSelect(storeNameOrDescriptor);
}
var combineReducers, subscribe, registerStore, register;
function init_build_module() {
	return (init_build_module = __esmMin((() => {
		init_default_registry();
		init_redux_store();
		init_with_dispatch();
		init_context$1(), init_use_registry();
		init_use_select();
		init_use_dispatch();
		init_context();
		init_registry();
		init_create_selector();
		init_controls();
		init_keyed_reducer();
		init_dispatch();
		init_select();
		combineReducers = combineReducers$1;
		subscribe = (listener, storeNameOrDescriptor) => default_registry_default.subscribe(listener, storeNameOrDescriptor);
		default_registry_default.registerGenericStore;
		registerStore = default_registry_default.registerStore;
		default_registry_default.use;
		register = (store) => default_registry_default.register(store);
	})))();
}
//#endregion
export { resolveSelect as a, select as c, registerStore as i, init_build_module as n, subscribe as o, register as r, init_select as s, combineReducers as t };
