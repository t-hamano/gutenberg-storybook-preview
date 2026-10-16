import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { c as getDefinedValue, l as init_values, u as isValueDefined } from "./hook-Qs2bSUH_.js";
//#region ../packages/components/build-module/utils/hooks/use-controlled-state.mjs
function useControlledState(currentState, options = defaultOptions) {
	const { initial, fallback } = {
		...defaultOptions,
		...options
	};
	const [internalState, setInternalState] = (0, import_react.useState)(currentState);
	const hasCurrentState = isValueDefined(currentState);
	(0, import_react.useEffect)(() => {
		if (hasCurrentState && internalState) setInternalState(void 0);
	}, [hasCurrentState, internalState]);
	return [getDefinedValue([
		currentState,
		internalState,
		initial
	], fallback), (0, import_react.useCallback)((nextState) => {
		if (!hasCurrentState) setInternalState(nextState);
	}, [hasCurrentState])];
}
var defaultOptions, use_controlled_state_default;
function init_use_controlled_state() {
	return (init_use_controlled_state = __esmMin((() => {
		init_react();
		init_values();
		defaultOptions = {
			initial: void 0,
			/**
			* Defaults to empty string, as that is preferred for usage with
			* <input />, <textarea />, and <select /> form elements.
			*/
			fallback: ""
		};
		use_controlled_state_default = useControlledState;
	})))();
}
//#endregion
export { use_controlled_state_default as n, init_use_controlled_state as t };
