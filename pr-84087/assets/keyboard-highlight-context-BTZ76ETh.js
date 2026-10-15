import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
//#region ../packages/ui/src/utils/item-popup/keyboard-highlight-context.ts
function useKeyboardHighlightState(props) {
	const [keyboardHighlight, setKeyboardHighlight] = (0, import_react.useState)(false);
	const [inputFocused, setInputFocused] = (0, import_react.useState)(false);
	const keyboardHighlightContext = (0, import_react.useMemo)(() => ({
		keyboardHighlight: keyboardHighlight && inputFocused,
		onPointerHighlight: () => setKeyboardHighlight(false),
		onInputFocusChange: setInputFocused
	}), [keyboardHighlight, inputFocused]);
	const handleOpenChange = (open, eventDetails) => {
		props.onOpenChange?.(open, eventDetails);
		if (open && !eventDetails.isCanceled) setKeyboardHighlight(isKeyboardOpenEvent(eventDetails.event) || eventDetails.reason === "input-change");
	};
	const handleInputValueChange = (value, eventDetails) => {
		props.onInputValueChange?.(value, eventDetails);
		if (!eventDetails.isCanceled && eventDetails.reason === "input-change") setKeyboardHighlight(true);
	};
	const handleItemHighlighted = (value, eventDetails) => {
		setKeyboardHighlight((wasKeyboardHighlight) => eventDetails.reason === "none" ? wasKeyboardHighlight : eventDetails.reason === "keyboard");
		props.onItemHighlighted?.(value, eventDetails);
	};
	return {
		contextValue: keyboardHighlightContext,
		onOpenChange: handleOpenChange,
		onInputValueChange: handleInputValueChange,
		onItemHighlighted: handleItemHighlighted
	};
}
function isKeyboardOpenEvent(event) {
	return event.type === "keydown" || event.type === "click" && "detail" in event && event.detail === 0;
}
var KeyboardHighlightContext, useKeyboardHighlight;
function init_keyboard_highlight_context() {
	return (init_keyboard_highlight_context = __esmMin((() => {
		init_react();
		KeyboardHighlightContext = (0, import_react.createContext)({
			keyboardHighlight: false,
			onPointerHighlight: () => {},
			onInputFocusChange: () => {}
		});
		useKeyboardHighlight = () => (0, import_react.useContext)(KeyboardHighlightContext);
	})))();
}
//#endregion
export { useKeyboardHighlightState as i, init_keyboard_highlight_context as n, useKeyboardHighlight as r, KeyboardHighlightContext as t };
