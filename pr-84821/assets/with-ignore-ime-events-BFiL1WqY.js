import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
//#region ../packages/keycodes/build-module/with-ignore-ime-events.mjs
function withIgnoreIMEEvents(handler) {
	return (event) => {
		const { isComposing } = "nativeEvent" in event ? event.nativeEvent : event;
		if (isComposing || event.keyCode === 229) return;
		handler(event);
	};
}
function init_with_ignore_ime_events() {
	return (init_with_ignore_ime_events = __esmMin((() => {})))();
}
//#endregion
export { withIgnoreIMEEvents as n, init_with_ignore_ime_events as t };
