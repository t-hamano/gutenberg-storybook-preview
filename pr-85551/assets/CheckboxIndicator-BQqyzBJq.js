import { n as __esmMin, o as __toESM } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_react } from "./react-Bujh4FgW.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C1RZKCc6.js";
import { b as useMergedRefs, f as init_empty, i as init_mergeProps, o as mergeProps, r as useRenderElement, t as init_useRenderElement, u as EMPTY_OBJECT, y as init_useMergedRefs } from "./useRenderElement-Dkv6YH0v.js";
import { n as useIsoLayoutEffect, t as init_useIsoLayoutEffect } from "./useIsoLayoutEffect-DDc8Lhn-.js";
import { a as init_useOpenChangeComplete, i as transitionStatusMapping, n as useTransitionStatus, o as useOpenChangeComplete, r as init_stateAttributesMapping, t as init_useTransitionStatus } from "./useTransitionStatus-DtGN_KnE.js";
import { n as useControlled, t as init_useControlled } from "./useControlled-CKMeYwmS.js";
import { n as useBaseUiId, t as init_useBaseUiId } from "./useBaseUiId-CESTxyJs.js";
import { A as init_createBaseUIEventDetails, O as createChangeEventDetails, u as init_reason_parts, y as none } from "./reason-parts-0ghxNVBE.js";
import { l as getWindow, u as init_floating_ui_utils_dom } from "./floating-ui.utils.dom-s51Otfgf.js";
import { i as init_dispatchClickWithModifiers, n as useButton, r as dispatchClickWithModifiers, t as init_useButton } from "./useButton-jJ_7clep.js";
import { n as visuallyHidden, r as visuallyHiddenInput, t as init_visuallyHidden } from "./visuallyHidden-BnauQW1F.js";
import { n as useValueChanged, t as init_useValueChanged } from "./useValueChanged-B6hOMaok.js";
import { c as init_FormContext, d as useRegisterFieldControl, h as useFieldRootContext, i as useLabelableId, l as useFormContext, m as init_FieldRootContext, n as useSetFieldFocused, o as init_LabelableContext, r as init_useLabelableId, s as useLabelableContext, t as init_useSetFieldFocused, u as init_useRegisterFieldControl, v as fieldValidityMapping, y as init_constants } from "./useSetFieldFocused-BBT5GDr4.js";
import { n as init_FieldItemContext, r as useFieldItemContext } from "./FieldItemContext-BpndY37q.js";
import { n as useAriaLabelledBy, t as init_useAriaLabelledBy } from "./useAriaLabelledBy-BE-7oJh7.js";
//#region ../node_modules/.store/@base-ui/utils@0.5.0--7My7Lubseca8je9LSEweA/node_modules/@base-ui/utils/getDefaultFormSubmitter.mjs
/**
* Returns the default button a browser uses for implicit form submission.
*
* This is useful for custom form controls that need to mirror native Enter key behavior.
* Clicking the returned submitter preserves browser semantics such as the submitter's click
* event, `SubmitEvent.submitter`, and submitter-specific attributes.
*
* The function follows the controls exposed by `form.elements`, which includes controls associated
* through the `form` attribute. Disabled submitters can be returned because the default button is
* determined before disabled state is considered; clicking a disabled submitter is a no-op.
*/
function getDefaultFormSubmitter(form) {
	if (!form) return null;
	for (const candidate of form.elements) {
		const tagName = candidate.tagName;
		if (tagName === "BUTTON" || tagName === "INPUT") {
			const button = candidate;
			if (button.type === "submit") return button;
		}
	}
	return null;
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/checkbox/root/CheckboxRootDataAttributes.mjs
var checked, unchecked;
function init_CheckboxRootDataAttributes() {
	return (init_CheckboxRootDataAttributes = __esmMin((() => {
		checked = "data-checked";
		unchecked = "data-unchecked";
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/checkbox/utils/getCheckboxStateAttributesMapping.mjs
function getCheckboxStateAttributesMapping(state) {
	return {
		checked(value) {
			if (state.indeterminate) return {};
			if (value) return { [checked]: "" };
			return { [unchecked]: "" };
		},
		...fieldValidityMapping
	};
}
function init_getCheckboxStateAttributesMapping() {
	return (init_getCheckboxStateAttributesMapping = __esmMin((() => {
		init_constants();
		init_CheckboxRootDataAttributes();
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/checkbox-group/CheckboxGroupContext.mjs
function useCheckboxGroupContext() {
	return import_react$3.useContext(CheckboxGroupContext);
}
var import_react$3, CheckboxGroupContext;
function init_CheckboxGroupContext() {
	return (init_CheckboxGroupContext = __esmMin((() => {
		import_react$3 = /* @__PURE__ */ __toESM(require_react(), 1);
		CheckboxGroupContext = /*#__PURE__*/ import_react$3.createContext(void 0);
		CheckboxGroupContext.displayName = "CheckboxGroupContext";
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/checkbox/root/CheckboxRootContext.mjs
function useCheckboxRootContext() {
	const context = import_react$2.useContext(CheckboxRootContext);
	if (context === void 0) throw new Error("Base UI: CheckboxRootContext is missing. Checkbox parts must be placed within <Checkbox.Root>.");
	return context;
}
var import_react$2, CheckboxRootContext;
function init_CheckboxRootContext() {
	return (init_CheckboxRootContext = __esmMin((() => {
		import_react$2 = /* @__PURE__ */ __toESM(require_react(), 1);
		CheckboxRootContext = /*#__PURE__*/ import_react$2.createContext(void 0);
		CheckboxRootContext.displayName = "CheckboxRootContext";
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/checkbox/root/CheckboxRoot.mjs
var import_react$1, import_jsx_runtime, PARENT_CHECKBOX, CheckboxRoot;
function init_CheckboxRoot() {
	return (init_CheckboxRoot = __esmMin((() => {
		import_react$1 = /* @__PURE__ */ __toESM(require_react(), 1);
		init_empty();
		init_useControlled();
		init_useIsoLayoutEffect();
		init_useMergedRefs();
		init_visuallyHidden();
		init_floating_ui_utils_dom();
		init_getCheckboxStateAttributesMapping();
		init_dispatchClickWithModifiers();
		init_useRenderElement();
		init_useBaseUiId();
		init_mergeProps();
		init_useButton();
		init_FieldRootContext();
		init_useSetFieldFocused();
		init_useRegisterFieldControl();
		init_FieldItemContext();
		init_FormContext();
		init_LabelableContext();
		init_useAriaLabelledBy();
		init_useLabelableId();
		init_CheckboxGroupContext();
		init_CheckboxRootContext();
		init_createBaseUIEventDetails();
		init_reason_parts();
		init_useValueChanged();
		import_jsx_runtime = require_jsx_runtime();
		PARENT_CHECKBOX = "data-parent";
		CheckboxRoot = /*#__PURE__*/ import_react$1.forwardRef(function CheckboxRoot(componentProps, forwardedRef) {
			const { checked: checkedProp, className, defaultChecked = false, "aria-labelledby": ariaLabelledByProp, disabled: disabledProp = false, form, id: idProp, indeterminate = false, inputRef: inputRefProp, name: nameProp, onCheckedChange, parent = false, readOnly = false, render, required = false, uncheckedValue, value: valueProp, nativeButton = false, style, ...elementProps } = componentProps;
			const { clearErrors } = useFormContext();
			const { disabled: rootDisabled, name: fieldName, setDirty, setFilled, setTouched, state: fieldState, validationMode, validityData, validation: localValidation } = useFieldRootContext();
			const fieldItemContext = useFieldItemContext();
			const { labelId, registerControlId, getDescriptionProps } = useLabelableContext();
			const groupContext = useCheckboxGroupContext();
			const parentContext = groupContext?.allValues === void 0 ? void 0 : groupContext.parent;
			const isGroupedWithParent = parentContext !== void 0;
			const disabled = rootDisabled || fieldItemContext.disabled || groupContext?.disabled || disabledProp;
			const name = fieldName ?? nameProp;
			const value = valueProp ?? name;
			const id = useBaseUiId();
			const ownsControlId = groupContext?.registerControlId !== registerControlId;
			const controlId = useLabelableId({
				id: idProp || void 0,
				enabled: ownsControlId
			});
			const rootId = nativeButton ? controlId : id;
			let groupProps = {};
			if (isGroupedWithParent) {
				if (parent) groupProps = parentContext.getParentProps();
				else if (value !== void 0) groupProps = parentContext.getChildProps(value);
			}
			const { checked: groupChecked = checkedProp, indeterminate: groupIndeterminate = indeterminate, onCheckedChange: groupOnChange, ...otherGroupProps } = groupProps;
			const groupValue = groupContext?.value;
			const controlRef = import_react$1.useRef(null);
			const setFocused = useSetFieldFocused(disabled, controlRef);
			const { getButtonProps, buttonRef } = useButton({
				disabled,
				native: nativeButton
			});
			const validation = groupContext?.validation ?? localValidation;
			const [checked, setCheckedState] = useControlled({
				controlled: value !== void 0 && groupValue !== void 0 && !parent ? groupValue.includes(value) : groupChecked,
				default: defaultChecked,
				name: "Checkbox",
				state: "checked"
			});
			const computedChecked = isGroupedWithParent ? Boolean(groupChecked) : checked;
			const computedIndeterminate = isGroupedWithParent ? groupIndeterminate || indeterminate : indeterminate;
			useRegisterFieldControl(controlRef, id, checked, void 0, !groupContext && !disabled, nameProp);
			const registerChildId = parentContext?.registerChildId;
			const inputRef = import_react$1.useRef(null);
			const registerFieldInput = validation.registerInput;
			const registeredInputValue = groupContext ? value : void 0;
			const registerInput = import_react$1.useCallback((element) => registerFieldInput(element, {
				controlRef,
				value: registeredInputValue
			}), [registerFieldInput, registeredInputValue]);
			const mergedInputRef = useMergedRefs(inputRefProp, inputRef, parent ? void 0 : registerInput);
			const ariaLabelledBy = useAriaLabelledBy(ariaLabelledByProp, labelId, inputRef, !nativeButton, controlId, elementProps["aria-label"]);
			useIsoLayoutEffect(() => {
				if (inputRef.current) inputRef.current.indeterminate = computedIndeterminate;
				if (!groupContext) setFilled(checked);
			}, [
				checked,
				computedIndeterminate,
				groupContext,
				setFilled
			]);
			useValueChanged(checked, () => {
				if (groupContext) return;
				clearErrors(name);
				setDirty(checked !== validityData.initialValue);
				validation.change(checked);
			});
			const inputProps = mergeProps({
				checked,
				disabled,
				form,
				name: parent ? void 0 : name,
				id: nativeButton ? void 0 : controlId,
				required,
				ref: mergedInputRef,
				style: name ? visuallyHiddenInput : visuallyHidden,
				tabIndex: -1,
				type: "checkbox",
				"aria-hidden": true,
				onChange(event) {
					if (event.nativeEvent.defaultPrevented) return;
					if (readOnly) {
						event.preventDefault();
						return;
					}
					const nextChecked = event.currentTarget.checked;
					const details = createChangeEventDetails(none, event.nativeEvent);
					onCheckedChange?.(nextChecked, details);
					if (details.isCanceled) return;
					groupOnChange?.(nextChecked, details);
					if (details.isCanceled) return;
					setCheckedState(nextChecked);
					if (value !== void 0 && groupContext !== void 0 && !parent && !isGroupedWithParent) {
						const nextGroupValue = nextChecked ? [...groupContext.value, value] : groupContext.value.filter((item) => item !== value);
						groupContext.setValue(nextGroupValue, details);
					}
				},
				onClick(event) {
					event.stopPropagation();
				},
				onFocus() {
					controlRef.current?.focus();
				}
			}, valueProp !== void 0 ? { value: (groupContext ? checked && valueProp : valueProp) || "" } : EMPTY_OBJECT, getDescriptionProps, (props) => validation.getValidationProps(disabled, props));
			import_react$1.useEffect(() => {
				if (!parentContext || value === void 0) return;
				const disabledStates = parentContext.disabledStatesRef.current;
				disabledStates.set(value, disabled);
				return () => {
					disabledStates.delete(value);
				};
			}, [
				parentContext,
				disabled,
				value
			]);
			const state = import_react$1.useMemo(() => ({
				...fieldState,
				checked: computedChecked,
				disabled,
				readOnly,
				required,
				indeterminate: computedIndeterminate
			}), [
				fieldState,
				computedChecked,
				disabled,
				readOnly,
				required,
				computedIndeterminate
			]);
			const stateAttributesMapping = getCheckboxStateAttributesMapping(state);
			const element = useRenderElement("span", componentProps, {
				state,
				ref: [
					buttonRef,
					controlRef,
					forwardedRef
				],
				props: [
					{
						id: rootId,
						role: "checkbox",
						"aria-checked": computedIndeterminate ? "mixed" : computedChecked,
						"aria-readonly": readOnly || void 0,
						"aria-required": required || void 0,
						"aria-labelledby": ariaLabelledBy,
						[PARENT_CHECKBOX]: parent ? "" : void 0,
						onFocus() {
							setFocused(true);
						},
						onBlur() {
							const inputEl = inputRef.current;
							if (!inputEl) return;
							setTouched(true);
							setFocused(false);
							if (validationMode === "onBlur") validation.commit(groupContext ? groupValue : inputEl.checked);
						},
						onKeyDown(event) {
							if (event.key !== "Enter") return;
							event.preventBaseUIHandler();
							if (event.defaultPrevented) return;
							const formToSubmit = inputRef.current?.form ?? null;
							const currentTarget = event.currentTarget;
							const nativeEvent = event.nativeEvent;
							const originalPreventDefault = event.preventDefault;
							const originalNativePreventDefault = nativeEvent.preventDefault;
							let preventDefaultCalledAfterPropagation = false;
							event.preventDefault = () => {
								preventDefaultCalledAfterPropagation = true;
								originalPreventDefault.call(event);
							};
							nativeEvent.preventDefault = () => {
								preventDefaultCalledAfterPropagation = true;
								originalNativePreventDefault.call(nativeEvent);
							};
							originalNativePreventDefault.call(nativeEvent);
							getWindow(currentTarget).queueMicrotask(() => {
								event.preventDefault = originalPreventDefault;
								nativeEvent.preventDefault = originalNativePreventDefault;
								if (!preventDefaultCalledAfterPropagation) getDefaultFormSubmitter(formToSubmit)?.click();
							});
						},
						onClick(event) {
							if (readOnly || disabled) return;
							event.preventDefault();
							const input = inputRef.current;
							if (!input) return;
							dispatchClickWithModifiers(input, event);
						}
					},
					elementProps,
					otherGroupProps,
					getButtonProps,
					getDescriptionProps,
					(props) => validation.getValidationProps(disabled, props)
				],
				stateAttributesMapping
			});
			const renderedId = element.props.id;
			useIsoLayoutEffect(() => {
				if (!registerChildId || parent || value === void 0 || renderedId === void 0) return;
				return registerChildId(value, renderedId);
			}, [
				registerChildId,
				parent,
				value,
				renderedId
			]);
			return /*#__PURE__*/ (0, import_jsx_runtime.jsxs)(CheckboxRootContext.Provider, {
				value: state,
				children: [
					element,
					!checked && !groupContext && name && !parent && uncheckedValue !== void 0 && /*#__PURE__*/ (0, import_jsx_runtime.jsx)("input", {
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
		CheckboxRoot.displayName = "CheckboxRoot";
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/checkbox/indicator/CheckboxIndicator.mjs
var import_react, CheckboxIndicator;
function init_CheckboxIndicator() {
	return (init_CheckboxIndicator = __esmMin((() => {
		import_react = /* @__PURE__ */ __toESM(require_react(), 1);
		init_CheckboxRootContext();
		init_useRenderElement();
		init_getCheckboxStateAttributesMapping();
		init_useOpenChangeComplete();
		init_useTransitionStatus();
		init_stateAttributesMapping();
		CheckboxIndicator = /*#__PURE__*/ import_react.forwardRef(function CheckboxIndicator(componentProps, forwardedRef) {
			const { render, className, style, keepMounted = false, ...elementProps } = componentProps;
			const rootState = useCheckboxRootContext();
			const rendered = rootState.checked || rootState.indeterminate;
			const { mounted, transitionStatus, setMounted } = useTransitionStatus(rendered);
			const indicatorRef = import_react.useRef(null);
			const state = {
				...rootState,
				transitionStatus
			};
			useOpenChangeComplete({
				batch: true,
				enabled: !rendered,
				open: rendered,
				ref: indicatorRef,
				onComplete() {
					if (!rendered) setMounted(false);
				}
			});
			const stateAttributesMapping = {
				...getCheckboxStateAttributesMapping(rootState),
				...transitionStatusMapping
			};
			const shouldRender = keepMounted || mounted;
			const element = useRenderElement("span", componentProps, {
				ref: [forwardedRef, indicatorRef],
				state,
				stateAttributesMapping,
				props: elementProps
			});
			if (!shouldRender) return null;
			return element;
		});
		CheckboxIndicator.displayName = "CheckboxIndicator";
	})))();
}
//#endregion
export { CheckboxGroupContext as a, init_CheckboxRoot as i, init_CheckboxIndicator as n, init_CheckboxGroupContext as o, CheckboxRoot as r, CheckboxIndicator as t };
