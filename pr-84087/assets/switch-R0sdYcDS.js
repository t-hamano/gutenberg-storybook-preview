import { n as __esmMin, o as __toESM } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_react } from "./react-Bujh4FgW.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C1RZKCc6.js";
import { n as init_react, t as import_react$3 } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { o as clsx, s as init_clsx } from "./iframe-D4D-SsYo.js";
import { d as init_empty, l as EMPTY_OBJECT, n as useRenderElement, t as init_useRenderElement, v as init_useMergedRefs, y as useMergedRefs } from "./useRenderElement-QwAlaybP.js";
import { n as useIsoLayoutEffect, t as init_useIsoLayoutEffect } from "./useIsoLayoutEffect-CkrGpWFx.js";
import { n as useControlled, t as init_useControlled } from "./useControlled-B67zM6EB.js";
import { n as useBaseUiId, t as init_useBaseUiId } from "./useBaseUiId-DDVp3i2t.js";
import { S as none, p as init_reason_parts, r as init_createBaseUIEventDetails, t as createChangeEventDetails } from "./createBaseUIEventDetails-CC__nZlv.js";
import { i as init_dispatchClickWithModifiers, n as useButton, r as dispatchClickWithModifiers, t as init_useButton } from "./useButton-C38YKBDn.js";
import { n as visuallyHidden, r as visuallyHiddenInput, t as init_visuallyHidden } from "./visuallyHidden-qJhXS9Ug.js";
import { n as useValueChanged, t as init_useValueChanged } from "./useValueChanged-DpF80sHi.js";
import { _ as init_constants, a as useLabelableContext, c as init_useRegisterFieldControl, f as init_FieldRootContext, g as fieldValidityMapping, i as init_LabelableContext, l as useRegisterFieldControl, n as useLabelableId, o as init_FormContext, p as useFieldRootContext, s as useFormContext, t as init_useLabelableId } from "./useLabelableId-DZRYsuBw.js";
import { n as useAriaLabelledBy, t as init_useAriaLabelledBy } from "./useAriaLabelledBy-DVetofOd.js";
import { n as resets_module_default, t as init_resets_module } from "./resets.module-CJil9Bz6.js";
//#region ../node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/switch/root/SwitchRootContext.mjs
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
//#region ../node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/switch/root/SwitchRootDataAttributes.mjs
var checked, unchecked;
function init_SwitchRootDataAttributes() {
	return (init_SwitchRootDataAttributes = __esmMin((() => {
		checked = "data-checked";
		unchecked = "data-unchecked";
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/switch/stateAttributesMapping.mjs
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
//#region ../node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/switch/root/SwitchRoot.mjs
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
			const { state: fieldState, setTouched, setDirty, validityData, setFilled, setFocused, validationMode, disabled: fieldDisabled, name: fieldName, validation } = useFieldRootContext();
			const { labelId } = useLabelableContext();
			const disabled = fieldDisabled || disabledProp;
			const name = fieldName ?? nameProp;
			const inputRef = import_react$1.useRef(null);
			const handleInputRef = useMergedRefs(inputRef, externalInputRef, validation.inputRef);
			const switchRef = import_react$1.useRef(null);
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
			const ariaLabelledBy = useAriaLabelledBy(ariaLabelledByProp, labelId, inputRef, !nativeButton, hiddenInputId);
			const rootProps = {
				id: nativeButton ? controlId : id,
				role: "switch",
				"aria-checked": checked,
				"aria-readonly": readOnly || void 0,
				"aria-required": required || void 0,
				"aria-labelledby": ariaLabelledBy,
				onFocus() {
					if (!disabled) setFocused(true);
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
//#region ../node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/switch/thumb/SwitchThumb.mjs
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
//#region ../packages/ui/src/form/primitives/switch/style.module.scss
var root, thumb, style_module_default;
function init_style_module() {
	return (init_style_module = __esmMin((() => {
		root = "_root_zk32s_99";
		thumb = "_thumb_zk32s_155";
		style_module_default = {
			root,
			thumb
		};
	})))();
}
//#endregion
//#region ../packages/ui/src/form/primitives/switch/switch.tsx
var import_jsx_dev_runtime, _jsxFileName, Switch;
function init_switch() {
	return (init_switch = __esmMin((() => {
		init_SwitchRoot(), init_SwitchThumb();
		init_clsx();
		init_react();
		init_resets_module();
		init_style_module();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/primitives/switch/switch.tsx";
		Switch = (0, import_react$3.forwardRef)(function UnforwardedSwitch({ className, ...props }, ref) {
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SwitchRoot, {
				ref,
				className: clsx(resets_module_default["box-sizing"], style_module_default.root, className),
				...props,
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SwitchThumb, { className: style_module_default.thumb }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 27,
					columnNumber: 5
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 18,
				columnNumber: 4
			}, this);
		});
		try {
			Switch.__docgenInfo = {
				"description": "A low-level switch primitive.\n\nUse `Field` to associate an accessible label.\n\nPrefer `SwitchControl` for labeled items.",
				"displayName": "Switch",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/primitives/switch/switch.tsx",
				"methods": [],
				"props": {
					"form": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/switch/root/SwitchRoot.d.mts",
							"name": "SwitchRootProps"
						}],
						"description": "Identifies the form that owns the hidden input.\nUseful when the switch is rendered outside the form.",
						"name": "form",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/switch/root/SwitchRoot.d.mts",
							"name": "SwitchRootProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"defaultChecked": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/switch/root/SwitchRoot.d.mts",
							"name": "SwitchRootProps"
						}],
						"description": "Whether the switch is initially active.\n\nTo render a controlled switch, use the `checked` prop instead.",
						"name": "defaultChecked",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/switch/root/SwitchRoot.d.mts",
							"name": "SwitchRootProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"id": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/switch/root/SwitchRoot.d.mts",
							"name": "SwitchRootProps"
						}],
						"description": "The id of the hidden input element.\n\nWhen `nativeButton` is `true`, the id is applied to the root element.",
						"name": "id",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/switch/root/SwitchRoot.d.mts",
							"name": "SwitchRootProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"required": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/switch/root/SwitchRoot.d.mts",
							"name": "SwitchRootProps"
						}],
						"description": "Whether the user must activate the switch before submitting a form.",
						"name": "required",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/switch/root/SwitchRoot.d.mts",
							"name": "SwitchRootProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"disabled": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/switch/root/SwitchRoot.d.mts",
							"name": "SwitchRootProps"
						}],
						"description": "Whether the component should ignore user interaction.",
						"name": "disabled",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/switch/root/SwitchRoot.d.mts",
							"name": "SwitchRootProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"value": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/switch/root/SwitchRoot.d.mts",
							"name": "SwitchRootProps"
						}],
						"description": "The value submitted with the form when the switch is on.\nBy default, switch submits the \"on\" value, matching native checkbox behavior.",
						"name": "value",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/switch/root/SwitchRoot.d.mts",
							"name": "SwitchRootProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"name": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/switch/root/SwitchRoot.d.mts",
							"name": "SwitchRootProps"
						}],
						"description": "Identifies the field when a form is submitted.",
						"name": "name",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/switch/root/SwitchRoot.d.mts",
							"name": "SwitchRootProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"checked": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/switch/root/SwitchRoot.d.mts",
							"name": "SwitchRootProps"
						}],
						"description": "Whether the switch is currently active.\n\nTo render an uncontrolled switch, use the `defaultChecked` prop instead.",
						"name": "checked",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/switch/root/SwitchRoot.d.mts",
							"name": "SwitchRootProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"inputRef": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/switch/root/SwitchRoot.d.mts",
							"name": "SwitchRootProps"
						}],
						"description": "A ref to access the hidden `<input>` element.",
						"name": "inputRef",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/switch/root/SwitchRoot.d.mts",
							"name": "SwitchRootProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "Ref<HTMLInputElement>" }
					},
					"onCheckedChange": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/switch/root/SwitchRoot.d.mts",
							"name": "SwitchRootProps"
						}],
						"description": "Event handler called when the switch is activated or deactivated.",
						"name": "onCheckedChange",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/switch/root/SwitchRoot.d.mts",
							"name": "SwitchRootProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "((checked: boolean, eventDetails: { reason: \"none\"; event: Event; cancel: () => void; allowPropagation: () => void; isCanceled: boolean; isPropagationAllowed: boolean; trigger: Element; }) => void)" }
					},
					"readOnly": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/switch/root/SwitchRoot.d.mts",
							"name": "SwitchRootProps"
						}],
						"description": "Whether the user should be unable to activate or deactivate the switch.",
						"name": "readOnly",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/switch/root/SwitchRoot.d.mts",
							"name": "SwitchRootProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"uncheckedValue": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/switch/root/SwitchRoot.d.mts",
							"name": "SwitchRootProps"
						}],
						"description": "The value submitted with the form when the switch is off.\nBy default, unchecked switches do not submit any value, matching native checkbox behavior.",
						"name": "uncheckedValue",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/switch/root/SwitchRoot.d.mts",
							"name": "SwitchRootProps"
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
export { init_switch as n, Switch as t };
