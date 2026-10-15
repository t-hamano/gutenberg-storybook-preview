import { n as __esmMin, o as __toESM } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_react } from "./react-Bujh4FgW.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C1RZKCc6.js";
import { p as init_reason_parts } from "./createBaseUIEventDetails-CC__nZlv.js";
import { a as init_resolveValueLabel, l as stringifyAsLabel } from "./ListboxSeparator-DWqnSTVH.js";
import { F as init_useFilter, I as useCoreFilter, N as AriaCombobox, P as init_AriaCombobox, i as init_ComboboxItem, r as ComboboxItem } from "./ComboboxEmpty-a6JwtoZy.js";
//#region ../node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/autocomplete/root/AutocompleteRoot.mjs
function AutocompleteRoot(props) {
	const { openOnInputClick = false, value, defaultValue, onValueChange, mode = "list", itemToStringValue, ...other } = props;
	const enableInline = (mode === "inline" || mode === "both") && !props.readOnly;
	const staticItems = mode === "inline" || mode === "none";
	const isControlled = value !== void 0;
	const [internalValue, setInternalValue] = import_react.useState(defaultValue ?? "");
	const [inlineInputValue, setInlineInputValue] = import_react.useState("");
	import_react.useEffect(() => {
		if (isControlled || !enableInline) setInlineInputValue("");
	}, [
		value,
		isControlled,
		enableInline
	]);
	let resolvedInputValue;
	if (enableInline && inlineInputValue !== "") resolvedInputValue = inlineInputValue;
	else if (isControlled) resolvedInputValue = value ?? "";
	else resolvedInputValue = internalValue;
	const collator = useCoreFilter({ locale: other.locale });
	const resolvedQuery = String((isControlled ? value : internalValue) ?? "").trim();
	const resolvedFilter = staticItems || other.filter === null ? null : other.filter ?? collator.contains;
	function handleValueChange(nextValue, eventDetails) {
		setInlineInputValue("");
		if (!isControlled) setInternalValue(nextValue);
		onValueChange?.(nextValue, eventDetails);
	}
	function handleItemHighlighted(highlightedValue, eventDetails) {
		props.onItemHighlighted?.(highlightedValue, eventDetails);
		if (eventDetails.reason === "pointer") return;
		setInlineInputValue(enableInline && highlightedValue != null ? stringifyAsLabel(highlightedValue, itemToStringValue) : "");
	}
	return /*#__PURE__*/ (0, import_jsx_runtime.jsx)(AriaCombobox, {
		...other,
		itemToStringLabel: itemToStringValue,
		openOnInputClick,
		selectionMode: "none",
		fillInputOnItemPress: true,
		filter: resolvedFilter,
		filterQuery: mode === "both" ? resolvedQuery : void 0,
		autoComplete: mode,
		inputValue: resolvedInputValue,
		defaultInputValue: defaultValue,
		onInputValueChange: handleValueChange,
		onItemHighlighted: handleItemHighlighted
	});
}
var import_react, import_jsx_runtime;
function init_AutocompleteRoot() {
	return (init_AutocompleteRoot = __esmMin((() => {
		import_react = /* @__PURE__ */ __toESM(require_react(), 1);
		init_AriaCombobox();
		init_useFilter();
		init_resolveValueLabel();
		init_reason_parts();
		import_jsx_runtime = require_jsx_runtime();
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/autocomplete/item/AutocompleteItem.mjs
var AutocompleteItem;
function init_AutocompleteItem() {
	return (init_AutocompleteItem = __esmMin((() => {
		init_ComboboxItem();
		AutocompleteItem = ComboboxItem;
	})))();
}
//#endregion
export { init_AutocompleteRoot as i, init_AutocompleteItem as n, AutocompleteRoot as r, AutocompleteItem as t };
