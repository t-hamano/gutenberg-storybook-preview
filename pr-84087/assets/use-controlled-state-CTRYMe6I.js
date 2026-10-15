import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { i as isValueDefined, n as getDefinedValue, r as init_values } from "./values-Dw4yFgqQ.js";
//#region ../packages/components/src/utils/hooks/use-controlled-state.ts
/**
* Custom hooks for "controlled" components to track and consolidate internal
* state and incoming values. This is useful for components that render
* `input`, `textarea`, or `select` HTML elements.
*
* https://reactjs.org/docs/forms.html#controlled-components
*
* At first, a component using useControlledState receives an initial prop
* value, which is used as initial internal state.
*
* This internal state can be maintained and updated without
* relying on new incoming prop values.
*
* Unlike the basic useState hook, useControlledState's state can
* be updated if a new incoming prop value is changed.
*
* @param currentState             The current value.
* @param [options=defaultOptions] Additional options for the hook.
*
* @return The controlled value and the value setter.
*/
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
var defaultOptions;
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
	})))();
}
//#endregion
export { useControlledState as n, init_use_controlled_state as t };
