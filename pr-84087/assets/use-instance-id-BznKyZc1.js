import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
//#region ../packages/compose/build-module/hooks/use-instance-id/index.mjs
function createId(object) {
	const instances = instanceMap.get(object) || 0;
	instanceMap.set(object, instances + 1);
	return instances;
}
function useInstanceId(object, prefix, preferredId) {
	return (0, import_react.useMemo)(() => {
		if (preferredId) return preferredId;
		const id = createId(object);
		return prefix ? `${prefix}-${id}` : id;
	}, [
		object,
		preferredId,
		prefix
	]);
}
var instanceMap, use_instance_id_default;
function init_use_instance_id() {
	return (init_use_instance_id = __esmMin((() => {
		init_react();
		instanceMap = /* @__PURE__ */ new WeakMap();
		use_instance_id_default = useInstanceId;
	})))();
}
//#endregion
export { use_instance_id_default as n, init_use_instance_id as t };
