import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
//#region ../packages/components/src/utils/hooks/use-controlled-value.ts
/**
* Simplified and improved implementation of useControlledState.
*
* @param props
* @param props.defaultValue
* @param props.value
* @param props.onChange
* @return The controlled value and the value setter.
*/
function useControlledValue({ defaultValue, onChange, value: valueProp }) {
	const hasValue = typeof valueProp !== "undefined";
	const [state, setState] = (0, import_react.useState)(hasValue ? valueProp : defaultValue);
	const value = hasValue ? valueProp : state;
	const uncontrolledSetValue = (0, import_react.useCallback)((nextValue, ...args) => {
		setState(nextValue);
		onChange?.(nextValue, ...args);
	}, [onChange]);
	let setValue;
	if (hasValue && typeof onChange === "function") setValue = onChange;
	else if (!hasValue && typeof onChange === "function") setValue = uncontrolledSetValue;
	else setValue = setState;
	return [value, setValue];
}
function init_use_controlled_value() {
	return (init_use_controlled_value = __esmMin((() => {
		init_react();
	})))();
}
//#endregion
export { useControlledValue as n, init_use_controlled_value as t };
