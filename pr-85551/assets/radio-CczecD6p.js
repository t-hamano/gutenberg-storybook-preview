import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_react } from "./react-Bujh4FgW.js";
import { _ as CompositeContextProvider, b as init_composite_context, n as init_composite_item, r as useCompositeItem, y as CompositeScopedContextProvider } from "./composite-item-JNO_FG0t.js";
import { N as disabledFromProps, Ot as removeUndefinedValues, a as init_dist, b as useTagName, d as useForceUpdate, f as useId, g as useMergeRefs, i as forwardRef, n as createHook, nt as init_dist$1, o as memo, r as createStoreContext, t as createElement, u as useEvent } from "./dist-BNTCqa48.js";
import { i as init_dist$2, s as useStoreState } from "./CDh2UhnG-BRjcGYWx.js";
//#region ../node_modules/.store/@ariakit/react-components@0.7.1-aGG7Eicir0X5jH9sMy0tHA/node_modules/@ariakit/react-components/dist/radio/radio-context.js
var import_react$1, ctx, useRadioContext, useRadioProviderContext, RadioScopedContextProvider, RadioGroupDisabledContext;
function init_radio_context() {
	return (init_radio_context = __esmMin((() => {
		init_composite_context();
		init_dist();
		import_react$1 = require_react();
		ctx = createStoreContext([CompositeContextProvider], [CompositeScopedContextProvider]);
		useRadioContext = ctx.useContext;
		ctx.useScopedContext;
		useRadioProviderContext = ctx.useProviderContext;
		ctx.ContextProvider;
		RadioScopedContextProvider = ctx.ScopedContextProvider;
		RadioGroupDisabledContext = (0, import_react$1.createContext)(false);
	})))();
}
//#endregion
//#region ../node_modules/.store/@ariakit/react-components@0.7.1-aGG7Eicir0X5jH9sMy0tHA/node_modules/@ariakit/react-components/dist/radio/radio.js
function getIsChecked(value, storeValue) {
	if (storeValue === void 0) return;
	if (value != null && storeValue != null) return storeValue === value;
	return !!storeValue;
}
function isNativeRadio(tagName, type) {
	return tagName === "input" && (!type || type === "radio");
}
var import_react, TagName, useRadio, Radio;
function init_radio() {
	return (init_radio = __esmMin((() => {
		init_composite_item();
		init_radio_context();
		init_dist();
		init_dist$1();
		import_react = require_react();
		init_dist$2();
		TagName = "input";
		useRadio = createHook(function useRadio({ store, name: nameProp, value, checked, ...props }) {
			const context = useRadioContext();
			store = store || context;
			const groupDisabled = (0, import_react.useContext)(RadioGroupDisabledContext);
			const id = useId(props.id);
			const ref = (0, import_react.useRef)(null);
			const isChecked = useStoreState(store, ["value"], (state) => checked ?? getIsChecked(value, state?.value));
			const storeId = useStoreState(store, "id");
			const name = nameProp ?? storeId;
			(0, import_react.useEffect)(() => {
				if (!id) return;
				if (!isChecked) return;
				if (store?.getState().activeId === id) return;
				store?.setActiveId(id);
			}, [
				store,
				isChecked,
				id
			]);
			const onChangeProp = props.onChange;
			const nativeRadio = isNativeRadio(useTagName(ref, TagName), props.type);
			const disabled = groupDisabled || disabledFromProps(props);
			const [propertyUpdated, schedulePropertyUpdate] = useForceUpdate();
			(0, import_react.useEffect)(() => {
				const element = ref.current;
				if (!element) return;
				if (nativeRadio) return;
				if (isChecked !== void 0) element.checked = isChecked;
				if (name !== void 0) element.name = name;
				if (value !== void 0) element.value = `${value}`;
			}, [
				propertyUpdated,
				nativeRadio,
				isChecked,
				name,
				value
			]);
			const onChange = useEvent((event) => {
				if (disabled) {
					event.preventDefault();
					event.stopPropagation();
					return;
				}
				if (store?.getState().value === value) return;
				if (!nativeRadio) {
					event.currentTarget.checked = true;
					schedulePropertyUpdate();
				}
				onChangeProp?.(event);
				if (event.defaultPrevented) return;
				store?.setValue(value);
			});
			const onClickProp = props.onClick;
			const onClick = useEvent((event) => {
				onClickProp?.(event);
				if (event.defaultPrevented) return;
				if (nativeRadio) return;
				onChange(event);
			});
			const onFocusProp = props.onFocus;
			const onFocus = useEvent((event) => {
				onFocusProp?.(event);
				if (event.defaultPrevented) return;
				if (!nativeRadio) return;
				if (disabled) return;
				if (!store) return;
				const { moves, activeId } = store.getState();
				if (!moves) return;
				if (id && activeId !== id) return;
				if (event.currentTarget.checked) return;
				event.currentTarget.click();
			});
			props = {
				role: !nativeRadio ? "radio" : void 0,
				type: nativeRadio ? "radio" : void 0,
				"aria-checked": isChecked,
				...props,
				disabled: disabled || void 0,
				id,
				ref: useMergeRefs(ref, props.ref),
				onChange,
				onClick,
				onFocus
			};
			props = useCompositeItem({
				store,
				clickOnEnter: !nativeRadio,
				...props
			});
			return removeUndefinedValues({
				name: nativeRadio ? name : void 0,
				value: nativeRadio ? value : void 0,
				checked: isChecked,
				...props
			});
		});
		Radio = memo(forwardRef(function Radio(props) {
			const htmlProps = useRadio(props);
			return createElement(TagName, htmlProps);
		}));
	})))();
}
//#endregion
export { RadioScopedContextProvider as a, RadioGroupDisabledContext as i, init_radio as n, init_radio_context as o, useRadio as r, useRadioProviderContext as s, Radio as t };
