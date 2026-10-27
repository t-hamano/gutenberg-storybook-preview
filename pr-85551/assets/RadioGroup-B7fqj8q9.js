import { n as __esmMin, o as __toESM } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_react } from "./react-Bujh4FgW.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C1RZKCc6.js";
import { b as useMergedRefs, d as NOOP, f as init_empty, r as useRenderElement, t as init_useRenderElement, u as EMPTY_OBJECT, y as init_useMergedRefs } from "./useRenderElement-Dkv6YH0v.js";
import { n as useIsoLayoutEffect, t as init_useIsoLayoutEffect } from "./useIsoLayoutEffect-DDc8Lhn-.js";
import { n as useStableCallback, t as init_useStableCallback } from "./useStableCallback-Cql5w11m.js";
import { a as init_useOpenChangeComplete, i as transitionStatusMapping, n as useTransitionStatus, o as useOpenChangeComplete, r as init_stateAttributesMapping$1, t as init_useTransitionStatus } from "./useTransitionStatus-DtGN_KnE.js";
import { n as useControlled, t as init_useControlled } from "./useControlled-CKMeYwmS.js";
import { n as useBaseUiId, t as init_useBaseUiId } from "./useBaseUiId-CESTxyJs.js";
import { A as init_createBaseUIEventDetails, O as createChangeEventDetails, u as init_reason_parts, y as none } from "./reason-parts-0ghxNVBE.js";
import { i as init_dispatchClickWithModifiers, n as useButton, r as dispatchClickWithModifiers, t as init_useButton } from "./useButton-jJ_7clep.js";
import { a as init_shadowDom, r as contains } from "./shadowDom-C1kYxCnm.js";
import { n as visuallyHidden, r as visuallyHiddenInput, t as init_visuallyHidden } from "./visuallyHidden-BnauQW1F.js";
import { c as SHIFT, l as init_composite } from "./composite-BPnCh7aE.js";
import { n as useValueChanged, t as init_useValueChanged } from "./useValueChanged-B6hOMaok.js";
import { n as serializeValue } from "./serializeValue-B4Mklkr8.js";
import { c as init_FormContext, d as useRegisterFieldControl, h as useFieldRootContext, i as useLabelableId, l as useFormContext, m as init_FieldRootContext, n as useSetFieldFocused, o as init_LabelableContext, r as init_useLabelableId, s as useLabelableContext, t as init_useSetFieldFocused, u as init_useRegisterFieldControl, v as fieldValidityMapping, y as init_constants } from "./useSetFieldFocused-BBT5GDr4.js";
import { n as init_FieldItemContext, r as useFieldItemContext } from "./FieldItemContext-BpndY37q.js";
import { n as useAriaLabelledBy, t as init_useAriaLabelledBy } from "./useAriaLabelledBy-BE-7oJh7.js";
import { n as isEligibleInput, t as init_useFieldValidation } from "./useFieldValidation-DabqVEE6.js";
import { n as init_CompositeItem, t as CompositeItem } from "./CompositeItem-MVJL3h4X.js";
import { n as init_FieldsetRootContext, r as useFieldsetRootContext } from "./FieldsetRootContext-Du-Ays8e.js";
import { i as init_constants$1, n as init_CompositeRoot, r as ACTIVE_COMPOSITE_ITEM, t as CompositeRoot } from "./CompositeRoot-C7NXFKw5.js";
//#region ../node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/radio/root/RadioRootDataAttributes.mjs
var checked, unchecked;
function init_RadioRootDataAttributes() {
	return (init_RadioRootDataAttributes = __esmMin((() => {
		checked = "data-checked";
		unchecked = "data-unchecked";
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/radio/utils/stateAttributesMapping.mjs
var stateAttributesMapping;
function init_stateAttributesMapping() {
	return (init_stateAttributesMapping = __esmMin((() => {
		init_stateAttributesMapping$1();
		init_constants();
		init_RadioRootDataAttributes();
		stateAttributesMapping = {
			checked(value) {
				if (value) return { [checked]: "" };
				return { [unchecked]: "" };
			},
			...transitionStatusMapping,
			...fieldValidityMapping
		};
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/radio-group/RadioGroupContext.mjs
function useRadioGroupContext() {
	return import_react$4.useContext(RadioGroupContext);
}
var import_react$4, RadioGroupContext;
function init_RadioGroupContext() {
	return (init_RadioGroupContext = __esmMin((() => {
		import_react$4 = /* @__PURE__ */ __toESM(require_react(), 1);
		RadioGroupContext = /*#__PURE__*/ import_react$4.createContext(void 0);
		RadioGroupContext.displayName = "RadioGroupContext";
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/radio/root/RadioRootContext.mjs
function useRadioRootContext() {
	const value = import_react$3.useContext(RadioRootContext);
	if (value === void 0) throw new Error("Base UI: RadioRootContext is missing. Radio parts must be placed within <Radio.Root>.");
	return value;
}
var import_react$3, RadioRootContext;
function init_RadioRootContext() {
	return (init_RadioRootContext = __esmMin((() => {
		import_react$3 = /* @__PURE__ */ __toESM(require_react(), 1);
		RadioRootContext = /*#__PURE__*/ import_react$3.createContext(void 0);
		RadioRootContext.displayName = "RadioRootContext";
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/radio/root/RadioRoot.mjs
var import_react$2, import_jsx_runtime$1, RadioRoot;
function init_RadioRoot() {
	return (init_RadioRoot = __esmMin((() => {
		import_react$2 = /* @__PURE__ */ __toESM(require_react(), 1);
		init_useMergedRefs();
		init_useIsoLayoutEffect();
		init_visuallyHidden();
		init_empty();
		init_createBaseUIEventDetails();
		init_reason_parts();
		init_stateAttributesMapping();
		init_dispatchClickWithModifiers();
		init_useBaseUiId();
		init_useRenderElement();
		init_useButton();
		init_constants$1();
		init_CompositeItem();
		init_FieldRootContext();
		init_useSetFieldFocused();
		init_FieldItemContext();
		init_LabelableContext();
		init_useAriaLabelledBy();
		init_useLabelableId();
		init_RadioGroupContext();
		init_RadioRootContext();
		import_jsx_runtime$1 = require_jsx_runtime();
		RadioRoot = /*#__PURE__*/ import_react$2.forwardRef(function RadioRoot(componentProps, forwardedRef) {
			const { render, className, disabled: disabledProp = false, readOnly: readOnlyProp = false, required: requiredProp = false, "aria-labelledby": ariaLabelledByProp, value, inputRef: inputRefProp, nativeButton = false, id: idProp, style, ...elementProps } = componentProps;
			const groupContext = useRadioGroupContext();
			const { disabled: disabledGroup, readOnly: readOnlyGroup, required: requiredGroup, form: formGroup, checkedValue, touched = false, validation, name, setCheckedValue = NOOP, setTouched = NOOP, registerInputRef = NOOP } = groupContext ?? {};
			const { setTouched: setFieldTouched, setFilled, state: fieldState, disabled: fieldDisabled } = useFieldRootContext();
			const fieldItemContext = useFieldItemContext();
			const { labelId, getDescriptionProps } = useLabelableContext();
			const disabled = fieldDisabled || fieldItemContext.disabled || disabledGroup || disabledProp;
			const readOnly = readOnlyGroup || readOnlyProp;
			const required = requiredGroup || requiredProp;
			const form = formGroup;
			const checked = groupContext ? checkedValue === value : value === "";
			const radioRef = import_react$2.useRef(null);
			const setFieldFocused = useSetFieldFocused(disabled, radioRef);
			const inputRef = import_react$2.useRef(null);
			const registerFieldInput = validation?.registerInput;
			const registerInput = import_react$2.useCallback((element) => registerFieldInput?.(element, {
				controlRef: radioRef,
				value: void 0
			}), [registerFieldInput]);
			const mergedInputRef = useMergedRefs(inputRefProp, inputRef, registerInputRef, registerInput);
			useIsoLayoutEffect(() => {
				if (inputRef.current?.checked) setFilled(true);
			}, [setFilled]);
			useIsoLayoutEffect(() => {
				if (!inputRef.current) return;
				if (disabled && checked) {
					registerInputRef(null);
					return;
				}
				registerInputRef(inputRef.current);
			}, [
				checked,
				disabled,
				registerInputRef
			]);
			const id = useBaseUiId();
			const inputId = useLabelableId({ id: idProp });
			const hiddenInputId = nativeButton ? void 0 : inputId;
			const rootProps = {
				role: "radio",
				"aria-checked": checked,
				"aria-labelledby": useAriaLabelledBy(ariaLabelledByProp, labelId, inputRef, !nativeButton, hiddenInputId, elementProps["aria-label"]),
				[ACTIVE_COMPOSITE_ITEM]: checked ? "" : void 0,
				id: nativeButton ? inputId : id,
				onKeyDown(event) {
					if (event.key === "Enter") event.preventDefault();
				},
				onClick(event) {
					if (event.defaultPrevented || disabled || readOnly) return;
					event.preventDefault();
					const input = inputRef.current;
					if (!input) return;
					dispatchClickWithModifiers(input, event);
				},
				onFocus(event) {
					setFieldFocused(true);
					if (event.defaultPrevented || disabled || readOnly || !touched) return;
					inputRef.current?.click();
					setTouched(false);
				},
				onBlur() {
					if (!groupContext) setFieldFocused(false);
				}
			};
			const { getButtonProps, buttonRef } = useButton({
				disabled,
				native: nativeButton,
				composite: false
			});
			const inputProps = {
				type: "radio",
				ref: mergedInputRef,
				form,
				id: hiddenInputId,
				name,
				tabIndex: -1,
				style: name ? visuallyHiddenInput : visuallyHidden,
				"aria-hidden": true,
				...value !== void 0 ? { value: serializeValue(value) } : EMPTY_OBJECT,
				disabled,
				checked,
				required,
				readOnly,
				onChange(event) {
					if (event.nativeEvent.defaultPrevented) return;
					if (disabled || readOnly || value === void 0) return;
					const details = createChangeEventDetails(none, event.nativeEvent);
					setCheckedValue(value, details);
					if (details.isCanceled) return;
					setFieldTouched(true);
				},
				onClick(event) {
					event.stopPropagation();
				},
				onFocus() {
					radioRef.current?.focus();
				}
			};
			const state = import_react$2.useMemo(() => ({
				...fieldState,
				required,
				disabled,
				readOnly,
				checked
			}), [
				fieldState,
				disabled,
				readOnly,
				checked,
				required
			]);
			const contextValue = state;
			const isRadioGroup = groupContext !== void 0;
			const refs = [
				forwardedRef,
				radioRef,
				buttonRef
			];
			const props = [
				rootProps,
				elementProps,
				getButtonProps,
				getDescriptionProps,
				validation ? (validationProps) => validation.getValidationProps(disabled, validationProps) : EMPTY_OBJECT
			];
			const element = useRenderElement("span", componentProps, {
				enabled: !isRadioGroup,
				state,
				ref: refs,
				props,
				stateAttributesMapping
			});
			return /*#__PURE__*/ (0, import_jsx_runtime$1.jsxs)(RadioRootContext.Provider, {
				value: contextValue,
				children: [isRadioGroup ? /*#__PURE__*/ (0, import_jsx_runtime$1.jsx)(CompositeItem, {
					tag: "span",
					render,
					className,
					style,
					state,
					refs,
					props,
					stateAttributesMapping
				}) : element, /*#__PURE__*/ (0, import_jsx_runtime$1.jsx)("input", {
					...inputProps,
					suppressHydrationWarning: true
				})]
			});
		});
		RadioRoot.displayName = "RadioRoot";
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/radio/indicator/RadioIndicator.mjs
var import_react$1, RadioIndicator;
function init_RadioIndicator() {
	return (init_RadioIndicator = __esmMin((() => {
		import_react$1 = /* @__PURE__ */ __toESM(require_react(), 1);
		init_useRenderElement();
		init_RadioRootContext();
		init_stateAttributesMapping();
		init_useOpenChangeComplete();
		init_useTransitionStatus();
		RadioIndicator = /*#__PURE__*/ import_react$1.forwardRef(function RadioIndicator(componentProps, forwardedRef) {
			const { render, className, style, keepMounted = false, ...elementProps } = componentProps;
			const rootState = useRadioRootContext();
			const rendered = rootState.checked;
			const { mounted, transitionStatus, setMounted } = useTransitionStatus(rendered);
			const state = {
				...rootState,
				transitionStatus
			};
			const indicatorRef = import_react$1.useRef(null);
			const shouldRender = keepMounted || mounted;
			const element = useRenderElement("span", componentProps, {
				ref: [forwardedRef, indicatorRef],
				state,
				props: elementProps,
				stateAttributesMapping
			});
			useOpenChangeComplete({
				batch: true,
				enabled: !rendered,
				open: rendered,
				ref: indicatorRef,
				onComplete() {
					if (!rendered) setMounted(false);
				}
			});
			if (!shouldRender) return null;
			return element;
		});
		RadioIndicator.displayName = "RadioIndicator";
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/radio-group/RadioGroup.mjs
var import_react, import_jsx_runtime, MODIFIER_KEYS, RadioGroup;
function init_RadioGroup() {
	return (init_RadioGroup = __esmMin((() => {
		import_react = /* @__PURE__ */ __toESM(require_react(), 1);
		init_useControlled();
		init_useIsoLayoutEffect();
		init_useMergedRefs();
		init_useStableCallback();
		init_useBaseUiId();
		init_shadowDom();
		init_composite();
		init_CompositeRoot();
		init_FieldRootContext();
		init_useRegisterFieldControl();
		init_constants();
		init_useFieldValidation();
		init_FieldsetRootContext();
		init_FormContext();
		init_LabelableContext();
		init_useValueChanged();
		init_RadioGroupContext();
		import_jsx_runtime = require_jsx_runtime();
		MODIFIER_KEYS = [SHIFT];
		RadioGroup = /*#__PURE__*/ import_react.forwardRef(function RadioGroup(componentProps, forwardedRef) {
			const { render, className, disabled: disabledProp, readOnly, required, onValueChange: onValueChangeProp, value: externalValue, defaultValue, form, name: nameProp, inputRef: inputRefProp, id: idProp, style, ...elementProps } = componentProps;
			const { setTouched: setFieldTouched, setFocused, validationMode, name: fieldName, disabled: fieldDisabled, state: fieldState, validation, setDirty, setFilled, validityData } = useFieldRootContext();
			const { labelId } = useLabelableContext();
			const { clearErrors, elementRef } = useFormContext();
			const fieldsetContext = useFieldsetRootContext(true);
			const disabled = fieldDisabled || disabledProp;
			const name = fieldName ?? nameProp;
			const id = useBaseUiId(idProp);
			const [checkedValue, setCheckedValueUnwrapped] = useControlled({
				controlled: externalValue,
				default: defaultValue,
				name: "RadioGroup",
				state: "value"
			});
			const [touched, setTouched] = import_react.useState(false);
			const setCheckedValue = useStableCallback((value, eventDetails) => {
				onValueChangeProp?.(value, eventDetails);
				if (eventDetails.isCanceled) return;
				setCheckedValueUnwrapped(value);
			});
			const getInputControl = validation.getInputControl;
			const controlRef = import_react.useMemo(() => ({ get current() {
				return getInputControl();
			} }), [getInputControl]);
			const groupInputRef = import_react.useRef(null);
			const firstEnabledInputRef = import_react.useRef(null);
			const mergedInputRef = useMergedRefs(groupInputRef, inputRefProp);
			const lastAppliedInputRef = import_react.useRef(mergedInputRef);
			const setInputRef = useStableCallback((hiddenInput) => {
				if (groupInputRef.current === hiddenInput && lastAppliedInputRef.current === mergedInputRef) return;
				lastAppliedInputRef.current = mergedInputRef;
				mergedInputRef?.(hiddenInput);
			});
			useIsoLayoutEffect(() => {
				setInputRef(groupInputRef.current);
			}, [mergedInputRef, setInputRef]);
			const registerInputRef = useStableCallback((input) => {
				if (!input) return;
				if (!input.disabled) {
					if (!firstEnabledInputRef.current) firstEnabledInputRef.current = input;
					const currentInput = groupInputRef.current;
					if (input.checked || currentInput == null || currentInput.disabled) setInputRef(input);
				}
				return () => {
					if (firstEnabledInputRef.current === input) firstEnabledInputRef.current = null;
					if (groupInputRef.current === input) setInputRef(null);
				};
			});
			const getFormValue = useStableCallback(() => {
				const formElement = elementRef.current;
				if (!formElement) return checkedValue ?? null;
				for (const input of validation.registeredInputs.keys()) if (input.checked && isEligibleInput(input, formElement)) return checkedValue ?? null;
				return null;
			});
			useRegisterFieldControl(controlRef, id, checkedValue ?? null, getFormValue, !disabled, nameProp);
			useValueChanged(checkedValue, () => {
				clearErrors(name);
				setDirty(checkedValue !== validityData.initialValue);
				setFilled(checkedValue != null);
				validation.change(checkedValue);
				const fallbackInput = firstEnabledInputRef.current;
				if (checkedValue == null && fallbackInput && !fallbackInput.disabled) setInputRef(fallbackInput);
			});
			const ariaLabelledby = labelId ?? fieldsetContext?.legendId;
			const state = {
				...fieldState,
				disabled: disabled ?? false,
				required: required ?? false,
				readOnly: readOnly ?? false
			};
			const contextValue = import_react.useMemo(() => ({
				checkedValue,
				disabled,
				form,
				validation,
				name,
				readOnly,
				registerInputRef,
				required,
				setCheckedValue,
				setTouched,
				touched
			}), [
				checkedValue,
				disabled,
				form,
				validation,
				name,
				readOnly,
				registerInputRef,
				required,
				setCheckedValue,
				setTouched,
				touched
			]);
			const defaultProps = {
				id: idProp,
				role: "radiogroup",
				"aria-required": required || void 0,
				"aria-disabled": disabled || void 0,
				"aria-readonly": readOnly || void 0,
				"aria-labelledby": ariaLabelledby,
				onBlur(event) {
					if (!contains(event.currentTarget, event.relatedTarget)) {
						setTouched(false);
						setFieldTouched(true);
						setFocused(false);
						if (validationMode === "onBlur") validation.commit(checkedValue);
					}
				},
				onKeyDownCapture(event) {
					if (event.key.startsWith("Arrow")) setTouched(true);
				}
			};
			return /*#__PURE__*/ (0, import_jsx_runtime.jsx)(RadioGroupContext.Provider, {
				value: contextValue,
				children: /*#__PURE__*/ (0, import_jsx_runtime.jsx)(CompositeRoot, {
					render,
					className,
					style,
					state,
					props: [
						defaultProps,
						elementProps,
						(props) => validation.getValidationProps(disabled ?? false, props)
					],
					refs: [forwardedRef],
					stateAttributesMapping: fieldValidityMapping,
					enableHomeAndEndKeys: false,
					modifierKeys: MODIFIER_KEYS
				})
			});
		});
		RadioGroup.displayName = "RadioGroup";
	})))();
}
//#endregion
export { RadioRoot as a, init_RadioIndicator as i, init_RadioGroup as n, init_RadioRoot as o, RadioIndicator as r, RadioGroup as t };
