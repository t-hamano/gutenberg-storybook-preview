import { n as __esmMin, o as __toESM } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_react } from "./react-Bujh4FgW.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C1RZKCc6.js";
import { a as resolveMultipleLabels, o as resolveSelectedLabel, r as init_resolveValueLabel } from "./resolveValueLabel-BniYaQWN.js";
import { N as AriaCombobox, P as init_AriaCombobox, U as useComboboxRootContext, z as init_ComboboxRootContext } from "./ComboboxEmpty-B5deBkxx.js";
//#region ../node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/combobox/root/ComboboxRoot.mjs
/**
* Groups all parts of the combobox.
* Doesn't render its own HTML element.
*
* Documentation: [Base UI Combobox](https://base-ui.com/react/components/combobox)
*/
function ComboboxRoot(props) {
	const { multiple = false, defaultValue, value, onValueChange, autoComplete, ...other } = props;
	return /*#__PURE__*/ (0, import_jsx_runtime$1.jsx)(AriaCombobox, {
		...other,
		selectionMode: multiple ? "multiple" : "single",
		selectedValue: value,
		defaultSelectedValue: defaultValue,
		onSelectedValueChange: onValueChange,
		formAutoComplete: autoComplete
	});
}
var import_jsx_runtime$1;
function init_ComboboxRoot() {
	return (init_ComboboxRoot = __esmMin((() => {
		require_react();
		init_AriaCombobox();
		import_jsx_runtime$1 = require_jsx_runtime();
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/combobox/value/ComboboxValue.mjs
function ComboboxValue(props) {
	const { children: childrenProp, placeholder } = props;
	const store = useComboboxRootContext();
	const itemToStringLabel = store.useState("itemToStringLabel");
	const selectedValue = store.useState("selectedValue");
	const items = store.useState("items");
	const multiple = store.useState("selectionMode") === "multiple";
	const hasSelectedValue = store.useState("hasSelectedValue");
	const shouldCheckNullItemLabel = !hasSelectedValue && placeholder != null && childrenProp == null;
	const hasNullLabel = store.useState("hasNullItemLabel", shouldCheckNullItemLabel);
	let children = null;
	if (typeof childrenProp === "function") children = childrenProp(selectedValue);
	else if (childrenProp != null) children = childrenProp;
	else if (!hasSelectedValue && placeholder != null && !hasNullLabel) children = placeholder;
	else if (multiple && Array.isArray(selectedValue)) children = resolveMultipleLabels(selectedValue, items, itemToStringLabel);
	else children = resolveSelectedLabel(selectedValue, items, itemToStringLabel);
	return /*#__PURE__*/ (0, import_jsx_runtime.jsx)(import_react.Fragment, { children });
}
var import_react, import_jsx_runtime;
function init_ComboboxValue() {
	return (init_ComboboxValue = __esmMin((() => {
		import_react = /* @__PURE__ */ __toESM(require_react(), 1);
		init_ComboboxRootContext();
		init_resolveValueLabel();
		import_jsx_runtime = require_jsx_runtime();
	})))();
}
//#endregion
export { init_ComboboxRoot as i, init_ComboboxValue as n, ComboboxRoot as r, ComboboxValue as t };
