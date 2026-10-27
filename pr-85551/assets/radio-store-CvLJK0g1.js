import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_react } from "./react-Bujh4FgW.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C1RZKCc6.js";
import { m as init_composite_store, p as createCompositeStore } from "./composite-item-JNO_FG0t.js";
import { A as defaultValue, N as disabledFromProps, a as init_dist, i as forwardRef, n as createHook, nt as init_dist$1, rt as invariant, t as createElement, u as useEvent, ut as isFocusEventOutside, w as useWrapElement } from "./dist-BNTCqa48.js";
import { a as useStore, f as init_dist$2, i as init_dist$3, o as useStoreProps, u as createStore } from "./CDh2UhnG-BRjcGYWx.js";
import { i as useCompositeStoreProps, o as init_composite, r as useCompositeStoreOptions, s as useComposite, t as init_composite_store$1 } from "./composite-store-1UKEKg_X.js";
import { a as RadioScopedContextProvider, i as RadioGroupDisabledContext, o as init_radio_context, s as useRadioProviderContext } from "./radio-CczecD6p.js";
//#region ../node_modules/.store/@ariakit/react-components@0.7.1-aGG7Eicir0X5jH9sMy0tHA/node_modules/@ariakit/react-components/dist/radio/radio-group.js
function isCheckedRadio(element) {
	if (!element) return false;
	if (element.tagName === "INPUT") {
		const { type, checked } = element;
		if (type === "radio") return checked;
	}
	if (element.getAttribute("role") !== "radio") return false;
	return element.getAttribute("aria-checked") === "true";
}
function getCheckedRadioId(store) {
	const { renderedItems } = store.getState();
	return renderedItems.find((item) => isCheckedRadio(item.element))?.id;
}
var import_react, import_jsx_runtime, TagName, useRadioGroup, RadioGroup;
function init_radio_group() {
	return (init_radio_group = __esmMin((() => {
		init_composite();
		init_radio_context();
		init_dist();
		init_dist$1();
		import_react = require_react();
		import_jsx_runtime = require_jsx_runtime();
		TagName = "div";
		useRadioGroup = createHook(function useRadioGroup({ store, ...props }) {
			const context = useRadioProviderContext();
			store = store || context;
			const disabled = (0, import_react.useContext)(RadioGroupDisabledContext) || disabledFromProps(props);
			invariant(store, "RadioGroup must receive a `store` prop or be wrapped in a RadioProvider component.");
			props = useWrapElement(props, (element) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RadioScopedContextProvider, {
				value: store,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RadioGroupDisabledContext.Provider, {
					value: disabled,
					children: element
				})
			}), [store, disabled]);
			const onBlurCaptureProp = props.onBlurCapture;
			const onBlurCapture = useEvent((event) => {
				onBlurCaptureProp?.(event);
				if (event.defaultPrevented) return;
				if (!isFocusEventOutside(event)) return;
				const checkedId = getCheckedRadioId(store);
				if (!checkedId) return;
				store.setActiveId(checkedId);
			});
			props = {
				role: "radiogroup",
				...props,
				"aria-disabled": disabled || void 0,
				onBlurCapture
			};
			props = useComposite({
				store,
				...props
			});
			return props;
		});
		RadioGroup = forwardRef(function RadioGroup(props) {
			const htmlProps = useRadioGroup(props);
			return createElement(TagName, htmlProps);
		});
	})))();
}
//#endregion
//#region ../node_modules/.store/@ariakit/components@0.1.15-b4ubwzeFfstoGvOR7daROQ/node_modules/@ariakit/components/dist/radio/radio-store.js
/**
* Creates a radio store.
*/
function createRadioStore(props = {}) {
	const syncState = props.store?.getState();
	const composite = createCompositeStore({
		...props,
		focusLoop: defaultValue(props.focusLoop, syncState?.focusLoop, true)
	});
	const initialState = {
		...composite.getState(),
		value: defaultValue(props.value, syncState?.value, props.defaultValue, null)
	};
	const radio = createStore(initialState, composite, props.store);
	return {
		...composite,
		...radio,
		setValue: (value) => radio.setState("value", value)
	};
}
function init_radio_store() {
	return (init_radio_store = __esmMin((() => {
		init_composite_store();
		init_dist$2();
		init_dist$1();
	})))();
}
//#endregion
//#region ../node_modules/.store/@ariakit/react-components@0.7.1-aGG7Eicir0X5jH9sMy0tHA/node_modules/@ariakit/react-components/dist/radio/radio-store.js
function useRadioStoreProps(store, update, props) {
	store = useCompositeStoreProps(store, update, props);
	useStoreProps(store, props, "value", "setValue");
	return store;
}
/**
* Creates a radio store to control the state of
* [Radio](https://ariakit.com/components/radio) components.
* @see https://ariakit.com/components/radio
* @example
* ```jsx
* const radio = useRadioStore();
*
* <RadioGroup store={radio}>
*   <Radio value="Apple" />
*   <Radio value="Orange" />
* </RadioGroup>
* ```
*/
function useRadioStore(props = {}) {
	props = useCompositeStoreOptions(props);
	const [store, update] = useStore(createRadioStore, props);
	return useRadioStoreProps(store, update, props);
}
function init_radio_store$1() {
	return (init_radio_store$1 = __esmMin((() => {
		init_composite_store$1();
		init_dist$3();
		init_radio_store();
	})))();
}
//#endregion
export { init_radio_group as i, useRadioStore as n, RadioGroup as r, init_radio_store$1 as t };
