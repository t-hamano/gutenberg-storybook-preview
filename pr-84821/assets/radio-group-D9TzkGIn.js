import { n as __esmMin, o as __toESM } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_react } from "./react-Bujh4FgW.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C1RZKCc6.js";
import { n as init_react, t as import_react$5 } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { a as init_clsx, i as clsx } from "./iframe-Dbjzp1_m.js";
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
import { n as resets_module_default, t as init_resets_module } from "./resets.module-CJil9Bz6.js";
import { n as init_focus_module, t as focus_module_default } from "./focus.module-CJgaYHb1.js";
import { n as init_stack, t as Stack } from "./stack-s_FjhA7z.js";
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
var import_react, import_jsx_runtime, MODIFIER_KEYS, RadioGroup$1;
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
		RadioGroup$1 = /*#__PURE__*/ import_react.forwardRef(function RadioGroup(componentProps, forwardedRef) {
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
		RadioGroup$1.displayName = "RadioGroup";
	})))();
}
//#endregion
//#region ../packages/ui/src/form/primitives/radio/style.module.css
var root, indicator, style_module_default;
function init_style_module() {
	return (init_style_module = __esmMin((() => {
		root = "_root_msnst_5";
		indicator = "_indicator_msnst_58";
		style_module_default = {
			root,
			indicator
		};
	})))();
}
//#endregion
//#region ../packages/ui/src/form/primitives/radio/radio.tsx
var import_jsx_dev_runtime$1, _jsxFileName$1, Radio;
function init_radio() {
	return (init_radio = __esmMin((() => {
		init_RadioRoot(), init_RadioIndicator();
		init_clsx();
		init_react();
		init_resets_module();
		init_focus_module();
		init_style_module();
		import_jsx_dev_runtime$1 = require_jsx_dev_runtime();
		_jsxFileName$1 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/primitives/radio/radio.tsx";
		Radio = (0, import_react$5.forwardRef)(function UnforwardedRadio({ className, ...props }, ref) {
			return /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(RadioRoot, {
				ref,
				className: clsx(resets_module_default["box-sizing"], focus_module_default["outset-ring--focus"], style_module_default.root, className),
				...props,
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(RadioIndicator, { className: style_module_default.indicator }, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 29,
					columnNumber: 5
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 19,
				columnNumber: 4
			}, this);
		});
		try {
			Radio.__docgenInfo = {
				"description": "A low-level radio button primitive.\n\nPrefer `RadioGroupControl` for standard labeled radio groups.\n\nMust be rendered inside a `RadioGroup`.",
				"displayName": "Radio",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/primitives/radio/radio.tsx",
				"methods": [],
				"props": {
					"disabled": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/radio/root/RadioRoot.d.mts",
							"name": "RadioRootProps"
						}],
						"description": "Whether the component should ignore user interaction.",
						"name": "disabled",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/radio/root/RadioRoot.d.mts",
							"name": "RadioRootProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"value": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/radio/root/RadioRoot.d.mts",
							"name": "RadioRootProps"
						}],
						"description": "The unique identifying value of the radio in a group.",
						"name": "value",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/radio/root/RadioRoot.d.mts",
							"name": "RadioRootProps"
						},
						"required": true,
						"tags": {},
						"type": { "name": "unknown" }
					},
					"readOnly": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/radio/root/RadioRoot.d.mts",
							"name": "RadioRootProps"
						}],
						"description": "Whether the user should be unable to select the radio button.",
						"name": "readOnly",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/radio/root/RadioRoot.d.mts",
							"name": "RadioRootProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"required": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/radio/root/RadioRoot.d.mts",
							"name": "RadioRootProps"
						}],
						"description": "Whether the user must choose a value before submitting a form.",
						"name": "required",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/radio/root/RadioRoot.d.mts",
							"name": "RadioRootProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"inputRef": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/radio/root/RadioRoot.d.mts",
							"name": "RadioRootProps"
						}],
						"description": "A ref to access the hidden input element.",
						"name": "inputRef",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/radio/root/RadioRoot.d.mts",
							"name": "RadioRootProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "Ref<HTMLInputElement>" }
					},
					"nativeButton": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/internals/types.d.mts",
							"name": "NonNativeButtonProps"
						}],
						"description": "Whether the component renders a native `<button>` element when replacing it\nvia the `render` prop.\nSet to `true` if the rendered element is a native button.",
						"name": "nativeButton",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/internals/types.d.mts",
							"name": "NonNativeButtonProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"className": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/utils/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "CSS class name to apply to the element.",
						"name": "className",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"style": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/utils/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "CSS style to apply to the element.",
						"name": "style",
						"required": false,
						"tags": {},
						"type": { "name": "CSSProperties" }
					},
					"render": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/utils/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Replaces the component's default HTML element using a given React\nelement, or a function that returns a React element.",
						"name": "render",
						"required": false,
						"tags": {},
						"type": { "name": "ComponentRenderFn<HTMLAttributesWithRef<any>> | ReactElement<Record<string, unknown>, string | JSXElementConstructor<any>>" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/ui/src/form/primitives/radio-group/radio-group.tsx
var import_jsx_dev_runtime, _jsxFileName, DEFAULT_RENDER, RadioGroup;
function init_radio_group() {
	return (init_radio_group = __esmMin((() => {
		init_RadioGroup();
		init_react();
		init_stack();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/primitives/radio-group/radio-group.tsx";
		DEFAULT_RENDER = (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack, {
			...props,
			direction: "column",
			gap: "sm"
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 7,
			columnNumber: 2
		}, void 0);
		RadioGroup = (0, import_react$5.forwardRef)(function UnforwardedRadioGroup({ render = DEFAULT_RENDER, ...restProps }, ref) {
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RadioGroup$1, {
				ref,
				render,
				...restProps
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 25,
				columnNumber: 3
			}, this);
		});
		try {
			RadioGroup.__docgenInfo = {
				"description": "A low-level primitive that groups radio buttons so they share one selected\nvalue.\n\nPrefer `RadioGroupControl` for standard labeled radio groups.\n\nMust wrap `Radio` items. For one labeled group, pass `RadioGroup` to\n`Fieldset.Root`'s `render` prop. When a `Fieldset` contains multiple groups,\ngive each `RadioGroup` its own accessible name.",
				"displayName": "RadioGroup",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/primitives/radio-group/radio-group.tsx",
				"methods": [],
				"props": {
					"form": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/radio-group/RadioGroup.d.mts",
							"name": "RadioGroupProps"
						}],
						"description": "Identifies the form that owns the radio inputs.\nUseful when the radio group is rendered outside the form.",
						"name": "form",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/radio-group/RadioGroup.d.mts",
							"name": "RadioGroupProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"name": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/radio-group/RadioGroup.d.mts",
							"name": "RadioGroupProps"
						}],
						"description": "Identifies the field when a form is submitted.",
						"name": "name",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/radio-group/RadioGroup.d.mts",
							"name": "RadioGroupProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"disabled": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/radio-group/RadioGroup.d.mts",
							"name": "RadioGroupProps"
						}],
						"description": "Whether the component should ignore user interaction.",
						"name": "disabled",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/radio-group/RadioGroup.d.mts",
							"name": "RadioGroupProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"defaultValue": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/radio-group/RadioGroup.d.mts",
							"name": "RadioGroupProps"
						}],
						"description": "The uncontrolled value of the radio button that should be initially selected.\n\nTo render a controlled radio group, use the `value` prop instead.",
						"name": "defaultValue",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/radio-group/RadioGroup.d.mts",
							"name": "RadioGroupProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "Value" }
					},
					"value": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/radio-group/RadioGroup.d.mts",
							"name": "RadioGroupProps"
						}],
						"description": "The controlled value of the radio item that should be currently selected.\n\nTo render an uncontrolled radio group, use the `defaultValue` prop instead.",
						"name": "value",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/radio-group/RadioGroup.d.mts",
							"name": "RadioGroupProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "Value" }
					},
					"readOnly": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/radio-group/RadioGroup.d.mts",
							"name": "RadioGroupProps"
						}],
						"description": "Whether the user should be unable to select a different radio button in the group.",
						"name": "readOnly",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/radio-group/RadioGroup.d.mts",
							"name": "RadioGroupProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"required": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/radio-group/RadioGroup.d.mts",
							"name": "RadioGroupProps"
						}],
						"description": "Whether the user must choose a value before submitting a form.",
						"name": "required",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/radio-group/RadioGroup.d.mts",
							"name": "RadioGroupProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"inputRef": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/radio-group/RadioGroup.d.mts",
							"name": "RadioGroupProps"
						}],
						"description": "A ref to access the hidden input element.",
						"name": "inputRef",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/radio-group/RadioGroup.d.mts",
							"name": "RadioGroupProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "Ref<HTMLInputElement>" }
					},
					"onValueChange": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/radio-group/RadioGroup.d.mts",
							"name": "RadioGroupProps"
						}],
						"description": "Callback fired when the value changes.",
						"name": "onValueChange",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/radio-group/RadioGroup.d.mts",
							"name": "RadioGroupProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "((value: Value, eventDetails: { reason: \"none\"; event: Event; cancel: () => void; allowPropagation: () => void; isCanceled: boolean; isPropagationAllowed: boolean; trigger: Element; }) => void)" }
					},
					"className": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/utils/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "CSS class name to apply to the element.",
						"name": "className",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"style": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/utils/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "CSS style to apply to the element.",
						"name": "style",
						"required": false,
						"tags": {},
						"type": { "name": "CSSProperties" }
					},
					"render": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/utils/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Replaces the component's default HTML element using a given React\nelement, or a function that returns a React element.",
						"name": "render",
						"required": false,
						"tags": {},
						"type": { "name": "ComponentRenderFn<HTMLAttributesWithRef<any>> | ReactElement<Record<string, unknown>, string | JSXElementConstructor<any>>" }
					},
					"children": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/form/primitives/radio-group/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The radio items and their associated content.",
						"name": "children",
						"required": false,
						"tags": {},
						"type": { "name": "ReactNode" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
export { init_radio as i, init_radio_group as n, Radio as r, RadioGroup as t };
