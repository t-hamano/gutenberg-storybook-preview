import { n as __esmMin, o as __toESM } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_react } from "./react-Bujh4FgW.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C1RZKCc6.js";
import { n as init_react, t as import_react$4 } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { o as clsx, s as init_clsx } from "./iframe-D4D-SsYo.js";
import { a as mergeProps, d as init_empty, l as EMPTY_OBJECT, n as useRenderElement, r as init_mergeProps, t as init_useRenderElement, v as init_useMergedRefs, y as useMergedRefs } from "./useRenderElement-QwAlaybP.js";
import { n as useIsoLayoutEffect, t as init_useIsoLayoutEffect } from "./useIsoLayoutEffect-CkrGpWFx.js";
import { a as init_useOpenChangeComplete, i as transitionStatusMapping, n as useTransitionStatus, o as useOpenChangeComplete, r as init_stateAttributesMapping, t as init_useTransitionStatus } from "./useTransitionStatus-C7eUOB6r.js";
import { n as useControlled, t as init_useControlled } from "./useControlled-B67zM6EB.js";
import { n as useBaseUiId, t as init_useBaseUiId } from "./useBaseUiId-DDVp3i2t.js";
import { S as none, p as init_reason_parts, r as init_createBaseUIEventDetails, t as createChangeEventDetails } from "./createBaseUIEventDetails-CC__nZlv.js";
import { l as getWindow, u as init_floating_ui_utils_dom } from "./floating-ui.utils.dom-s51Otfgf.js";
import { i as init_dispatchClickWithModifiers, n as useButton, r as dispatchClickWithModifiers, t as init_useButton } from "./useButton-C38YKBDn.js";
import { n as visuallyHidden, r as visuallyHiddenInput, t as init_visuallyHidden } from "./visuallyHidden-qJhXS9Ug.js";
import { n as useValueChanged, t as init_useValueChanged } from "./useValueChanged-DpF80sHi.js";
import { _ as init_constants, a as useLabelableContext, c as init_useRegisterFieldControl, f as init_FieldRootContext, g as fieldValidityMapping, i as init_LabelableContext, l as useRegisterFieldControl, n as useLabelableId, o as init_FormContext, p as useFieldRootContext, s as useFormContext, t as init_useLabelableId } from "./useLabelableId-DZRYsuBw.js";
import { n as init_FieldItemContext, r as useFieldItemContext } from "./FieldItemContext-dWi7yUT6.js";
import { n as useAriaLabelledBy, t as init_useAriaLabelledBy } from "./useAriaLabelledBy-DVetofOd.js";
import { t as check_default } from "./check-BrSqqlF_.js";
import { n as reset_default } from "./reset-BNKWWBQ_.js";
import { n as resets_module_default, t as init_resets_module } from "./resets.module-CJil9Bz6.js";
import { n as init_focus_module, t as focus_module_default } from "./focus.module-CJgaYHb1.js";
import { n as init_icon, t as Icon } from "./icon-DD-nOZ1R.js";
import { r as init_build_module } from "./library.story-DawnfKTW.js";
//#region ../node_modules/.store/@base-ui/utils@0.4.0-Z81C5N42agUorsFwt3T4Yw/node_modules/@base-ui/utils/getDefaultFormSubmitter.mjs
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
//#region ../node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/checkbox/root/CheckboxRootDataAttributes.mjs
var checked, unchecked;
function init_CheckboxRootDataAttributes() {
	return (init_CheckboxRootDataAttributes = __esmMin((() => {
		checked = "data-checked";
		unchecked = "data-unchecked";
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/checkbox/utils/getCheckboxStateAttributesMapping.mjs
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
//#region ../node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/checkbox-group/CheckboxGroupContext.mjs
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
//#region ../node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/checkbox/root/CheckboxRootContext.mjs
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
//#region ../node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/checkbox/root/CheckboxRoot.mjs
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
			const { disabled: rootDisabled, name: fieldName, setDirty, setFilled, setFocused, setTouched, state: fieldState, validationMode, validityData, validation: localValidation } = useFieldRootContext();
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
			const ariaLabelledBy = useAriaLabelledBy(ariaLabelledByProp, labelId, inputRef, !nativeButton, controlId);
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
							if (!disabled) setFocused(true);
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
//#region ../node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/checkbox/indicator/CheckboxIndicator.mjs
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
//#region ../packages/ui/src/form/primitives/checkbox/style.module.css
var root, style_module_default;
function init_style_module() {
	return (init_style_module = __esmMin((() => {
		root = "_root_1ex2r_5";
		style_module_default = {
			root,
			"indicator-icon": "_indicator-icon_1ex2r_63"
		};
	})))();
}
//#endregion
//#region ../packages/ui/src/form/primitives/checkbox/checkbox.tsx
var import_jsx_dev_runtime, _jsxFileName, Checkbox;
function init_checkbox() {
	return (init_checkbox = __esmMin((() => {
		init_CheckboxRoot(), init_CheckboxIndicator();
		init_clsx();
		init_react();
		init_build_module();
		init_icon();
		init_resets_module();
		init_focus_module();
		init_style_module();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/primitives/checkbox/checkbox.tsx";
		Checkbox = (0, import_react$4.forwardRef)(function UnforwardedCheckbox({ className, indeterminate, ...restProps }, ref) {
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CheckboxRoot, {
				ref,
				className: clsx(resets_module_default["box-sizing"], focus_module_default["outset-ring--focus"], style_module_default.root, className),
				indeterminate,
				...restProps,
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CheckboxIndicator, {
					className: style_module_default["indicator-icon"],
					render: (props, state) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, {
						...props,
						icon: state.indeterminate ? reset_default : check_default,
						viewBox: "4 4 16 16",
						size: 16
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 38,
						columnNumber: 7
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 35,
					columnNumber: 5
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 24,
				columnNumber: 4
			}, this);
		});
		try {
			Checkbox.__docgenInfo = {
				"description": "A low-level checkbox primitive.\n\nPrefer `CheckboxControl` for labeled items. For grouping and nested parent\ncheckboxes, see the [Checkbox Groups](https://wordpress.github.io/gutenberg/?path=/docs/design-system-components-form-checkbox-groups--docs)\ndocumentation.",
				"displayName": "Checkbox",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/primitives/checkbox/checkbox.tsx",
				"methods": [],
				"props": {
					"form": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/checkbox/root/CheckboxRoot.d.mts",
							"name": "CheckboxRootProps"
						}],
						"description": "Identifies the form that owns the hidden input.\nUseful when the checkbox is rendered outside the form.",
						"name": "form",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/checkbox/root/CheckboxRoot.d.mts",
							"name": "CheckboxRootProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"defaultChecked": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/checkbox/root/CheckboxRoot.d.mts",
							"name": "CheckboxRootProps"
						}],
						"description": "Whether the checkbox is initially ticked.\n\nTo render a controlled checkbox, use the `checked` prop instead.",
						"name": "defaultChecked",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/checkbox/root/CheckboxRoot.d.mts",
							"name": "CheckboxRootProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"id": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/checkbox/root/CheckboxRoot.d.mts",
							"name": "CheckboxRootProps"
						}],
						"description": "The id of the input element.",
						"name": "id",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/checkbox/root/CheckboxRoot.d.mts",
							"name": "CheckboxRootProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"required": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/checkbox/root/CheckboxRoot.d.mts",
							"name": "CheckboxRootProps"
						}],
						"description": "Whether the user must tick the checkbox before submitting a form.",
						"name": "required",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/checkbox/root/CheckboxRoot.d.mts",
							"name": "CheckboxRootProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"disabled": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/checkbox/root/CheckboxRoot.d.mts",
							"name": "CheckboxRootProps"
						}],
						"description": "Whether the component should ignore user interaction.",
						"name": "disabled",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/checkbox/root/CheckboxRoot.d.mts",
							"name": "CheckboxRootProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"value": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/checkbox/root/CheckboxRoot.d.mts",
							"name": "CheckboxRootProps"
						}],
						"description": "The checkbox's value. Identifies it within a [Checkbox Group](https://base-ui.com/react/components/checkbox-group), falling back to `name` when omitted.\nWhen submitting a form, a checked box submits `value`; with no `value`, it submits the native \"on\".",
						"name": "value",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/checkbox/root/CheckboxRoot.d.mts",
							"name": "CheckboxRootProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"name": {
						"defaultValue": { "value": "undefined" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/checkbox/root/CheckboxRoot.d.mts",
							"name": "CheckboxRootProps"
						}],
						"description": "Identifies the field when a form is submitted.",
						"name": "name",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/checkbox/root/CheckboxRoot.d.mts",
							"name": "CheckboxRootProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"checked": {
						"defaultValue": { "value": "undefined" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/checkbox/root/CheckboxRoot.d.mts",
							"name": "CheckboxRootProps"
						}],
						"description": "Whether the checkbox is currently ticked.\n\nTo render an uncontrolled checkbox, use the `defaultChecked` prop instead.",
						"name": "checked",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/checkbox/root/CheckboxRoot.d.mts",
							"name": "CheckboxRootProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"inputRef": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/checkbox/root/CheckboxRoot.d.mts",
							"name": "CheckboxRootProps"
						}],
						"description": "A ref to access the hidden `<input>` element.",
						"name": "inputRef",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/checkbox/root/CheckboxRoot.d.mts",
							"name": "CheckboxRootProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "Ref<HTMLInputElement>" }
					},
					"onCheckedChange": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/checkbox/root/CheckboxRoot.d.mts",
							"name": "CheckboxRootProps"
						}],
						"description": "Event handler called when the checkbox is ticked or unticked.",
						"name": "onCheckedChange",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/checkbox/root/CheckboxRoot.d.mts",
							"name": "CheckboxRootProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "((checked: boolean, eventDetails: { reason: \"none\"; event: Event; cancel: () => void; allowPropagation: () => void; isCanceled: boolean; isPropagationAllowed: boolean; trigger: Element; }) => void)" }
					},
					"readOnly": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/checkbox/root/CheckboxRoot.d.mts",
							"name": "CheckboxRootProps"
						}],
						"description": "Whether the user should be unable to tick or untick the checkbox.",
						"name": "readOnly",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/checkbox/root/CheckboxRoot.d.mts",
							"name": "CheckboxRootProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"uncheckedValue": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/checkbox/root/CheckboxRoot.d.mts",
							"name": "CheckboxRootProps"
						}],
						"description": "The value submitted with the form when the checkbox is unchecked.\nBy default, unchecked checkboxes do not submit any value, matching native checkbox behavior.",
						"name": "uncheckedValue",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/checkbox/root/CheckboxRoot.d.mts",
							"name": "CheckboxRootProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"nativeButton": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/internals/types.d.mts",
							"name": "NonNativeButtonProps"
						}],
						"description": "Whether the component renders a native `<button>` element when replacing it\nvia the `render` prop.\nSet to `true` if the rendered element is a native button.",
						"name": "nativeButton",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/internals/types.d.mts",
							"name": "NonNativeButtonProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"indeterminate": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/checkbox/root/CheckboxRoot.d.mts",
							"name": "CheckboxRootProps"
						}],
						"description": "Whether the checkbox is in a mixed state: neither ticked, nor unticked.",
						"name": "indeterminate",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/checkbox/root/CheckboxRoot.d.mts",
							"name": "CheckboxRootProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"parent": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/checkbox/root/CheckboxRoot.d.mts",
							"name": "CheckboxRootProps"
						}],
						"description": "Whether the checkbox controls a group of child checkboxes.\n\nMust be used in a [Checkbox Group](https://base-ui.com/react/components/checkbox-group).",
						"name": "parent",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/checkbox/root/CheckboxRoot.d.mts",
							"name": "CheckboxRootProps"
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
export { init_CheckboxGroupContext as i, init_checkbox as n, CheckboxGroupContext as r, Checkbox as t };
