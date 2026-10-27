import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { c as init_create_selector, d as init_controls, i as init_registry, l as init_keyed_reducer, m as combineReducers$1, n as init_default_registry, o as init_redux_store, t as default_registry_default } from "./default-registry-DXzr-urv.js";
import { pr as init_with_dispatch } from "./utils-Dno6zrH7.js";
import { n as init_dispatch, o as init_context, r as init_use_select } from "./dispatch-BVn49BrG.js";
import { i as init_context$1, t as init_use_registry } from "./use-registry-R-LrXGhT.js";
import { c as init_use_dispatch } from "./build-module-58hdIwQ9.js";
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
//#region ../node_modules/.store/uuid@14.0.2-ALlTd6-Rf9bZs703d7TIjQ/node_modules/uuid/dist/stringify.js
function unsafeStringify(arr, offset = 0) {
	return (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + "-" + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + "-" + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + "-" + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + "-" + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();
}
var byteToHex;
function init_stringify() {
	return (init_stringify = __esmMin((() => {
		byteToHex = [];
		for (let i = 0; i < 256; ++i) byteToHex.push((i + 256).toString(16).slice(1));
	})))();
}
//#endregion
//#region ../node_modules/.store/uuid@14.0.2-ALlTd6-Rf9bZs703d7TIjQ/node_modules/uuid/dist/rng.js
function rng() {
	return crypto.getRandomValues(rnds8);
}
var rnds8;
function init_rng() {
	return (init_rng = __esmMin((() => {
		rnds8 = /* @__PURE__ */ new Uint8Array(16);
	})))();
}
//#endregion
//#region ../node_modules/.store/uuid@14.0.2-ALlTd6-Rf9bZs703d7TIjQ/node_modules/uuid/dist/v4.js
function v4(options, buf, offset) {
	if (!buf && !options && crypto.randomUUID) return crypto.randomUUID();
	return _v4(options, buf, offset);
}
function _v4(options, buf, offset) {
	options = options || {};
	const rnds = options.random ?? options.rng?.() ?? rng();
	if (rnds.length < 16) throw new Error("Random bytes length must be >= 16");
	rnds[6] = rnds[6] & 15 | 64;
	rnds[8] = rnds[8] & 63 | 128;
	if (buf) {
		offset = offset || 0;
		if (offset < 0 || offset + 16 > buf.length) throw new RangeError(`UUID byte range ${offset}:${offset + 15} is out of buffer bounds`);
		for (let i = 0; i < 16; ++i) buf[offset + i] = rnds[i];
		return buf;
	}
	return unsafeStringify(rnds);
}
function init_v4() {
	return (init_v4 = __esmMin((() => {
		init_rng();
		init_stringify();
	})))();
}
//#endregion
export { register as a, subscribe as c, init_build_module as i, init_select as l, v4 as n, registerStore as o, combineReducers as r, resolveSelect as s, init_v4 as t, select as u };
