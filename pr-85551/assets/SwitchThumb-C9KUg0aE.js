import { n as __esmMin, o as __toESM } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_react } from "./react-Bujh4FgW.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C1RZKCc6.js";
import { b as useMergedRefs, f as init_empty, r as useRenderElement, t as init_useRenderElement, u as EMPTY_OBJECT, y as init_useMergedRefs } from "./useRenderElement-Dkv6YH0v.js";
import { n as useIsoLayoutEffect, t as init_useIsoLayoutEffect } from "./useIsoLayoutEffect-DDc8Lhn-.js";
import { n as useControlled, t as init_useControlled } from "./useControlled-CKMeYwmS.js";
import { n as useBaseUiId, t as init_useBaseUiId } from "./useBaseUiId-CESTxyJs.js";
import { A as init_createBaseUIEventDetails, O as createChangeEventDetails, u as init_reason_parts, y as none } from "./reason-parts-0ghxNVBE.js";
import { i as init_dispatchClickWithModifiers, n as useButton, r as dispatchClickWithModifiers, t as init_useButton } from "./useButton-jJ_7clep.js";
import { n as visuallyHidden, r as visuallyHiddenInput, t as init_visuallyHidden } from "./visuallyHidden-BnauQW1F.js";
import { n as useValueChanged, t as init_useValueChanged } from "./useValueChanged-B6hOMaok.js";
import { c as init_FormContext, d as useRegisterFieldControl, h as useFieldRootContext, i as useLabelableId, l as useFormContext, m as init_FieldRootContext, n as useSetFieldFocused, o as init_LabelableContext, r as init_useLabelableId, s as useLabelableContext, t as init_useSetFieldFocused, u as init_useRegisterFieldControl, v as fieldValidityMapping, y as init_constants } from "./useSetFieldFocused-BBT5GDr4.js";
import { n as useAriaLabelledBy, t as init_useAriaLabelledBy } from "./useAriaLabelledBy-BE-7oJh7.js";
//#region ../node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/switch/root/SwitchRootContext.mjs
function useSwitchRootContext() {
	const context = import_react$2.useContext(SwitchRootContext);
	if (context === void 0) throw new Error("Base UI: SwitchRootContext is missing. Switch parts must be placed within <Switch.Root>.");
	return context;
}
var import_react$2, SwitchRootContext;
function init_SwitchRootContext() {
	return (init_SwitchRootContext = __esmMin((() => {
		import_react$2 = /* @__PURE__ */ __toESM(require_react(), 1);
		SwitchRootContext = /*#__PURE__*/ import_react$2.createContext(void 0);
		SwitchRootContext.displayName = "SwitchRootContext";
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/switch/root/SwitchRootDataAttributes.mjs
var checked, unchecked;
function init_SwitchRootDataAttributes() {
	return (init_SwitchRootDataAttributes = __esmMin((() => {
		checked = "data-checked";
		unchecked = "data-unchecked";
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/switch/stateAttributesMapping.mjs
var stateAttributesMapping;
function init_stateAttributesMapping() {
	return (init_stateAttributesMapping = __esmMin((() => {
		init_constants();
		init_SwitchRootDataAttributes();
		stateAttributesMapping = {
			...fieldValidityMapping,
			checked(value) {
				if (value) return { [checked]: "" };
				return { [unchecked]: "" };
			}
		};
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/switch/root/SwitchRoot.mjs
var import_react$1, import_jsx_runtime, SwitchRoot;
function init_SwitchRoot() {
	return (init_SwitchRoot = __esmMin((() => {
		import_react$1 = /* @__PURE__ */ __toESM(require_react(), 1);
		init_useControlled();
		init_useMergedRefs();
		init_useIsoLayoutEffect();
		init_visuallyHidden();
		init_empty();
		init_useRenderElement();
		init_useBaseUiId();
		init_useButton();
		init_SwitchRootContext();
		init_stateAttributesMapping();
		init_dispatchClickWithModifiers();
		init_FieldRootContext();
		init_useSetFieldFocused();
		init_useRegisterFieldControl();
		init_FormContext();
		init_LabelableContext();
		init_useAriaLabelledBy();
		init_useLabelableId();
		init_createBaseUIEventDetails();
		init_reason_parts();
		init_useValueChanged();
		import_jsx_runtime = require_jsx_runtime();
		SwitchRoot = /*#__PURE__*/ import_react$1.forwardRef(function SwitchRoot(componentProps, forwardedRef) {
			const { checked: checkedProp, className, defaultChecked, "aria-labelledby": ariaLabelledByProp, form, id: idProp, inputRef: externalInputRef, name: nameProp, nativeButton = false, onCheckedChange, readOnly = false, required = false, disabled: disabledProp = false, render, uncheckedValue, value, style, ...elementProps } = componentProps;
			const { clearErrors } = useFormContext();
			const { state: fieldState, setTouched, setDirty, validityData, setFilled, validationMode, disabled: fieldDisabled, name: fieldName, validation } = useFieldRootContext();
			const { labelId } = useLabelableContext();
			const disabled = fieldDisabled || disabledProp;
			const name = fieldName ?? nameProp;
			const inputRef = import_react$1.useRef(null);
			const handleInputRef = useMergedRefs(inputRef, externalInputRef, validation.inputRef);
			const switchRef = import_react$1.useRef(null);
			const setFocused = useSetFieldFocused(disabled, switchRef);
			const id = useBaseUiId();
			const controlId = useLabelableId({ id: idProp });
			const hiddenInputId = nativeButton ? void 0 : controlId;
			const [checked, setCheckedState] = useControlled({
				controlled: checkedProp,
				default: Boolean(defaultChecked),
				name: "Switch",
				state: "checked"
			});
			useRegisterFieldControl(switchRef, id, checked, void 0, !disabled, nameProp);
			useIsoLayoutEffect(() => {
				setFilled(checked);
			}, [checked, setFilled]);
			useValueChanged(checked, () => {
				clearErrors(name);
				setDirty(checked !== validityData.initialValue);
				validation.change(checked);
			});
			const { getButtonProps, buttonRef } = useButton({
				disabled,
				native: nativeButton
			});
			const ariaLabelledBy = useAriaLabelledBy(ariaLabelledByProp, labelId, inputRef, !nativeButton, hiddenInputId, elementProps["aria-label"]);
			const rootProps = {
				id: nativeButton ? controlId : id,
				role: "switch",
				"aria-checked": checked,
				"aria-readonly": readOnly || void 0,
				"aria-required": required || void 0,
				"aria-labelledby": ariaLabelledBy,
				onFocus() {
					setFocused(true);
				},
				onBlur() {
					const element = inputRef.current;
					if (!element || disabled) return;
					setTouched(true);
					setFocused(false);
					if (validationMode === "onBlur") validation.commit(element.checked);
				},
				onClick(event) {
					if (readOnly || disabled) return;
					event.preventDefault();
					const input = inputRef.current;
					if (!input) return;
					dispatchClickWithModifiers(input, event);
				}
			};
			const inputProps = {
				...validation.getValidationProps(disabled),
				checked,
				disabled,
				form,
				id: hiddenInputId,
				name,
				required,
				style: name ? visuallyHiddenInput : visuallyHidden,
				tabIndex: -1,
				type: "checkbox",
				"aria-hidden": true,
				ref: handleInputRef,
				onChange(event) {
					if (event.nativeEvent.defaultPrevented) return;
					if (readOnly) {
						event.preventDefault();
						return;
					}
					const nextChecked = event.currentTarget.checked;
					const eventDetails = createChangeEventDetails(none, event.nativeEvent);
					onCheckedChange?.(nextChecked, eventDetails);
					if (eventDetails.isCanceled) return;
					setCheckedState(nextChecked);
				},
				onClick(event) {
					event.stopPropagation();
				},
				onFocus() {
					switchRef.current?.focus();
				},
				...value !== void 0 ? { value } : EMPTY_OBJECT
			};
			const state = import_react$1.useMemo(() => ({
				...fieldState,
				checked,
				disabled,
				readOnly,
				required
			}), [
				fieldState,
				checked,
				disabled,
				readOnly,
				required
			]);
			const element = useRenderElement("span", componentProps, {
				state,
				ref: [
					forwardedRef,
					switchRef,
					buttonRef
				],
				props: [
					rootProps,
					elementProps,
					getButtonProps,
					(props) => validation.getValidationProps(disabled, props)
				],
				stateAttributesMapping
			});
			return /*#__PURE__*/ (0, import_jsx_runtime.jsxs)(SwitchRootContext.Provider, {
				value: state,
				children: [
					element,
					!checked && name && uncheckedValue !== void 0 && /*#__PURE__*/ (0, import_jsx_runtime.jsx)("input", {
						type: "hidden",
						form,
						name,
						value: uncheckedValue,
						disabled
					}),
					/*#__PURE__*/ (0, import_jsx_runtime.jsx)("input", {
						...inputProps,
						suppressHydrationWarning: true
					})
				]
			});
		});
		SwitchRoot.displayName = "SwitchRoot";
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/switch/thumb/SwitchThumb.mjs
var import_react, SwitchThumb;
function init_SwitchThumb() {
	return (init_SwitchThumb = __esmMin((() => {
		import_react = /* @__PURE__ */ __toESM(require_react(), 1);
		init_SwitchRootContext();
		init_useRenderElement();
		init_stateAttributesMapping();
		SwitchThumb = /*#__PURE__*/ import_react.forwardRef(function SwitchThumb(componentProps, forwardedRef) {
			const { render, className, style, ...elementProps } = componentProps;
			const state = useSwitchRootContext();
			return useRenderElement("span", componentProps, {
				state,
				ref: forwardedRef,
				stateAttributesMapping,
				props: elementProps
			});
		});
		SwitchThumb.displayName = "SwitchThumb";
	})))();
}
//#endregion
export { init_SwitchRoot as i, init_SwitchThumb as n, SwitchRoot as r, SwitchThumb as t };
