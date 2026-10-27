import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as pascalCase, t as init_dist_es2015 } from "./dist.es2015-DLD9pCpN.js";
//#region ../packages/compose/build-module/utils/create-higher-order-component/index.mjs
function createHigherOrderComponent(mapComponent, modifierName) {
	return (Inner) => {
		const Outer = mapComponent(Inner);
		Outer.displayName = hocName(modifierName, Inner);
		return Outer;
	};
}
var hocName;
function init_create_higher_order_component() {
	return (init_create_higher_order_component = __esmMin((() => {
		init_dist_es2015();
		hocName = (name, Inner) => {
			const inner = Inner.displayName || Inner.name || "Component";
			return `${pascalCase(name ?? "")}(${inner})`;
		};
	})))();
}
//#endregion
export { init_create_higher_order_component as n, createHigherOrderComponent as t };
