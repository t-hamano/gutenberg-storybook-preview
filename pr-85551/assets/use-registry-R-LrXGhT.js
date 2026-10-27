import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { n as init_default_registry, t as default_registry_default } from "./default-registry-DXzr-urv.js";
//#region ../packages/data/build-module/components/registry-provider/context.mjs
var Context, Consumer, Provider, context_default;
function init_context() {
	return (init_context = __esmMin((() => {
		init_react();
		init_default_registry();
		Context = (0, import_react.createContext)(default_registry_default);
		Context.displayName = "RegistryProviderContext";
		({Consumer, Provider} = Context);
		context_default = Provider;
	})))();
}
//#endregion
//#region ../packages/data/build-module/components/registry-provider/use-registry.mjs
function useRegistry() {
	return (0, import_react.useContext)(Context);
}
function init_use_registry() {
	return (init_use_registry = __esmMin((() => {
		init_react();
		init_context();
	})))();
}
//#endregion
export { init_context as i, useRegistry as n, context_default as r, init_use_registry as t };
