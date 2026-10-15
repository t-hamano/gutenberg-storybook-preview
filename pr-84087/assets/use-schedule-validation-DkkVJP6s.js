import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { n as useEvent, t as init_use_event } from "./use-event-BTRhHipl.js";
//#region ../packages/ui/src/utils/use-schedule-validation.ts
/**
* Dev-only hook that returns a stable `scheduleValidation` function.
*
* Each call debounces to `setTimeout(…, 0)` so that rapid
* register / unregister cycles (e.g. React strict-mode double-mount)
* settle before the check runs. The timer is cleaned up on unmount,
* and calls after unmount are silently ignored.
*
* @param validate Callback that performs the actual validation.
*                 Wrapped in `useEvent`, so it can be an unstable closure.
*/
function useScheduleValidation(validate) {
	const validateEvent = useEvent(validate);
	const timerRef = (0, import_react.useRef)(null);
	const unmountedRef = (0, import_react.useRef)(false);
	const scheduleValidation = (0, import_react.useCallback)(() => {
		if (unmountedRef.current) return;
		if (timerRef.current) clearTimeout(timerRef.current);
		timerRef.current = setTimeout(() => {
			validateEvent();
			timerRef.current = null;
		}, 0);
	}, [validateEvent]);
	(0, import_react.useEffect)(() => {
		unmountedRef.current = false;
		return () => {
			unmountedRef.current = true;
			if (timerRef.current) clearTimeout(timerRef.current);
		};
	}, []);
	return scheduleValidation;
}
function init_use_schedule_validation() {
	return (init_use_schedule_validation = __esmMin((() => {
		init_use_event();
		init_react();
	})))();
}
//#endregion
export { useScheduleValidation as n, init_use_schedule_validation as t };
