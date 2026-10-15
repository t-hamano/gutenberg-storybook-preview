import { n as __esmMin, o as __toESM } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_react } from "./react-Bujh4FgW.js";
import { n as useRenderElement, t as init_useRenderElement } from "./useRenderElement-QwAlaybP.js";
import { n as useIsoLayoutEffect, t as init_useIsoLayoutEffect } from "./useIsoLayoutEffect-CkrGpWFx.js";
import { n as useStableCallback, t as init_useStableCallback } from "./useStableCallback-HKs9zu76.js";
import { n as init_useTimeout, r as useTimeout } from "./useTimeout-B8xVAQjx.js";
import { n as useControlled, t as init_useControlled } from "./useControlled-B67zM6EB.js";
import { S as none, p as init_reason_parts, r as init_createBaseUIEventDetails, t as createChangeEventDetails } from "./createBaseUIEventDetails-CC__nZlv.js";
import { n as ownerDocument } from "./owner-Bl-6Ntf5.js";
import { i as init_shadowDom, t as activeElement } from "./shadowDom-CFrNFfBF.js";
import { n as useValueChanged, t as init_useValueChanged } from "./useValueChanged-DpF80sHi.js";
import { _ as init_constants, a as useLabelableContext, c as init_useRegisterFieldControl, f as init_FieldRootContext, g as fieldValidityMapping, i as init_LabelableContext, l as useRegisterFieldControl, n as useLabelableId, o as init_FormContext, p as useFieldRootContext, s as useFormContext, t as init_useLabelableId } from "./useLabelableId-DZRYsuBw.js";
//#region ../node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/field/control/FieldControl.mjs
var import_react, FieldControl;
function init_FieldControl() {
	return (init_FieldControl = __esmMin((() => {
		import_react = /* @__PURE__ */ __toESM(require_react(), 1);
		init_useControlled();
		init_useIsoLayoutEffect();
		init_useStableCallback();
		init_useTimeout();
		init_FieldRootContext();
		init_useRegisterFieldControl();
		init_FormContext();
		init_LabelableContext();
		init_useLabelableId();
		init_constants();
		init_useRenderElement();
		init_useValueChanged();
		init_createBaseUIEventDetails();
		init_reason_parts();
		init_shadowDom();
		FieldControl = /*#__PURE__*/ import_react.forwardRef(function FieldControl(componentProps, forwardedRef) {
			const { render, className, id: idProp, name: nameProp, value: valueProp, disabled: disabledProp = false, onValueChange, defaultValue, autoFocus = false, style, ...elementProps } = componentProps;
			const { state: fieldState, name: fieldName, disabled: fieldDisabled, setTouched, setDirty, validityData, setFocused, setFilled, validationMode, validation } = useFieldRootContext();
			const { clearErrors, elementRef: formElementRef, submitCountRef } = useFormContext();
			const disabled = fieldDisabled || disabledProp;
			const name = fieldName ?? nameProp;
			const state = {
				...fieldState,
				disabled
			};
			const { labelId } = useLabelableContext();
			const id = useLabelableId({ id: idProp });
			const [valueUnwrapped] = useControlled({
				controlled: valueProp,
				default: defaultValue,
				name: "FieldControl",
				state: "value"
			});
			const isControlled = valueProp !== void 0;
			const value = isControlled ? valueUnwrapped : void 0;
			const serializedValue = value == null ? void 0 : String(value);
			const getValueFromInput = useStableCallback(() => validation.inputRef.current?.value);
			useRegisterFieldControl(validation.inputRef, id, serializedValue, getValueFromInput, !disabled, nameProp);
			useIsoLayoutEffect(() => {
				const currentValue = serializedValue ?? validation.inputRef.current?.value;
				if (currentValue !== void 0) setFilled(currentValue !== "");
			}, [
				serializedValue,
				validation.inputRef,
				setFilled
			]);
			useValueChanged(serializedValue, () => {
				if (serializedValue === void 0) return;
				clearErrors(name);
				setDirty(serializedValue !== (validityData.initialValue ?? ""));
				validation.change(serializedValue);
			});
			const inputRef = import_react.useRef(null);
			const enterValidationTimeout = useTimeout();
			useIsoLayoutEffect(() => {
				if (autoFocus && inputRef.current === activeElement(ownerDocument(inputRef.current))) setFocused(true);
			}, [autoFocus, setFocused]);
			return useRenderElement("input", componentProps, {
				ref: [forwardedRef, inputRef],
				state,
				props: [
					{
						id,
						disabled,
						name,
						ref: validation.inputRef,
						"aria-labelledby": labelId,
						autoFocus,
						...isControlled ? { value } : { defaultValue },
						onChange(event) {
							const inputValue = event.currentTarget.value;
							const details = createChangeEventDetails(none, event.nativeEvent);
							onValueChange?.(inputValue, details);
							if (isControlled) return;
							setDirty(inputValue !== (validityData.initialValue ?? ""));
							setFilled(inputValue !== "");
							if (!event.nativeEvent.defaultPrevented && !details.isCanceled) {
								clearErrors(name);
								validation.change(inputValue);
							}
						},
						onFocus() {
							setFocused(true);
						},
						onBlur(event) {
							setTouched(true);
							setFocused(false);
							if (validationMode === "onBlur") {
								const inputValue = event.currentTarget.value;
								validation.commit(inputValue);
								if (isControlled) queueMicrotask(() => {
									const nextValue = validation.inputRef.current?.value;
									if (nextValue !== void 0 && nextValue !== inputValue && nextValue !== (validityData.initialValue ?? "")) validation.commit(nextValue);
								});
							}
						},
						onKeyDown(event) {
							if (event.currentTarget.tagName === "INPUT" && event.key === "Enter") {
								setTouched(true);
								const value = event.currentTarget.value;
								const form = event.currentTarget.form;
								if (form && form === formElementRef.current && !event.defaultPrevented) {
									const input = event.currentTarget;
									const submitCount = submitCountRef.current;
									enterValidationTimeout.start(0, () => {
										if (submitCountRef.current === submitCount) validation.commit(input.value);
									});
								} else validation.commit(value);
							}
						}
					},
					elementProps,
					(props) => validation.getValidationProps(disabled, props)
				],
				stateAttributesMapping: fieldValidityMapping
			});
		});
		FieldControl.displayName = "FieldControl";
	})))();
}
//#endregion
export { init_FieldControl as n, FieldControl as t };
