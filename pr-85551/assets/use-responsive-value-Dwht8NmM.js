import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
//#region ../packages/components/src/utils/use-responsive-value.ts
function useResponsiveValue(values, options = {}) {
	const isResponsive = Array.isArray(values) && values.length > 1;
	const index = useBreakpointIndex({
		...options,
		enabled: isResponsive
	});
	if (!Array.isArray(values) && typeof values !== "function") return values;
	const array = values || [];
	return array[index >= array.length ? array.length - 1 : index];
}
var breakpoints, useBreakpointIndex;
function init_use_responsive_value() {
	return (init_use_responsive_value = __esmMin((() => {
		init_react();
		breakpoints = [
			"40em",
			"52em",
			"64em"
		];
		useBreakpointIndex = (options = {}) => {
			const { defaultIndex = 0, enabled = true } = options;
			if (typeof defaultIndex !== "number") throw new TypeError(`Default breakpoint index should be a number. Got: ${defaultIndex}, ${typeof defaultIndex}`);
			else if (defaultIndex < 0 || defaultIndex > breakpoints.length - 1) throw new RangeError(`Default breakpoint index out of range. Theme has ${breakpoints.length} breakpoints, got index ${defaultIndex}`);
			const [value, setValue] = (0, import_react.useState)(defaultIndex);
			(0, import_react.useEffect)(() => {
				if (!enabled) return;
				const getIndex = () => breakpoints.filter((bp) => {
					return typeof window !== "undefined" ? window.matchMedia(`screen and (min-width: ${bp})`).matches : false;
				}).length;
				const onResize = () => {
					const newValue = getIndex();
					if (value !== newValue) setValue(newValue);
				};
				onResize();
				if (typeof window !== "undefined") window.addEventListener("resize", onResize);
				return () => {
					if (typeof window !== "undefined") window.removeEventListener("resize", onResize);
				};
			}, [value, enabled]);
			return value;
		};
	})))();
}
//#endregion
export { useResponsiveValue as n, init_use_responsive_value as t };
