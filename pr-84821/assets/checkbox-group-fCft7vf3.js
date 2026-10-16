import { n as __esmMin, o as __toESM } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_react } from "./react-Bujh4FgW.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C1RZKCc6.js";
import { n as init_react, t as import_react$2 } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { a as init_clsx, i as clsx } from "./iframe-Dbjzp1_m.js";
import { f as init_empty, l as EMPTY_ARRAY, r as useRenderElement, t as init_useRenderElement } from "./useRenderElement-Dkv6YH0v.js";
import { n as useIsoLayoutEffect, t as init_useIsoLayoutEffect } from "./useIsoLayoutEffect-DDc8Lhn-.js";
import { n as useStableCallback, t as init_useStableCallback } from "./useStableCallback-Cql5w11m.js";
import { n as useControlled, t as init_useControlled } from "./useControlled-CKMeYwmS.js";
import { n as useBaseUiId, t as init_useBaseUiId } from "./useBaseUiId-CESTxyJs.js";
import { n as useValueChanged, t as init_useValueChanged } from "./useValueChanged-B6hOMaok.js";
import { t as areArraysEqual } from "./areArraysEqual-jO3AeSxn.js";
import { c as init_FormContext, d as useRegisterFieldControl, h as useFieldRootContext, i as useLabelableId, l as useFormContext, m as init_FieldRootContext, o as init_LabelableContext, r as init_useLabelableId, s as useLabelableContext, u as init_useRegisterFieldControl, v as fieldValidityMapping, y as init_constants } from "./useSetFieldFocused-BBT5GDr4.js";
import { i as init_CheckboxGroupContext, r as CheckboxGroupContext } from "./checkbox-CcQpHYIP.js";
import { n as isEligibleInput, t as init_useFieldValidation } from "./useFieldValidation-DabqVEE6.js";
import { n as init_stack, t as Stack } from "./stack-s_FjhA7z.js";
//#region ../node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/checkbox-group/useCheckboxGroupParent.mjs
function useCheckboxGroupParent(params) {
	const { allValues = EMPTY_ARRAY, value, onValueChange: onValueChangeProp } = params;
	const uncontrolledStateRef = import_react$1.useRef(value);
	const disabledStatesRef = import_react$1.useRef(/* @__PURE__ */ new Map());
	const [status, setStatus] = import_react$1.useState("mixed");
	const [childIdsState, setChildIdsState] = import_react$1.useState(() => ({ registry: /* @__PURE__ */ new Map() }));
	const checked = value.length === allValues.length;
	const indeterminate = value.length !== allValues.length && value.length > 0;
	const onValueChange = useStableCallback(onValueChangeProp);
	const registerChildId = useStableCallback((childValue, childId) => {
		const childIds = childIdsState.registry;
		childIds.set(childValue, (childIds.get(childValue) ?? EMPTY_ARRAY).concat(childId));
		setChildIdsState({ registry: childIds });
		return () => {
			const nextIds = (childIds.get(childValue) ?? EMPTY_ARRAY).filter((id) => id !== childId);
			if (nextIds.length === 0) childIds.delete(childValue);
			else childIds.set(childValue, nextIds);
			setChildIdsState({ registry: childIds });
		};
	});
	const getParentProps = import_react$1.useCallback(() => ({
		indeterminate,
		checked,
		"aria-controls": allValues.flatMap((v) => childIdsState.registry.get(v) ?? EMPTY_ARRAY).join(" ") || void 0,
		onCheckedChange(_, eventDetails) {
			const uncontrolledState = uncontrolledStateRef.current;
			const none = allValues.filter((v) => disabledStatesRef.current.get(v) && uncontrolledState.includes(v));
			const all = allValues.filter((v) => !disabledStatesRef.current.get(v) || uncontrolledState.includes(v));
			if (uncontrolledState.length === all.length || uncontrolledState.length === 0) {
				if (value.length === all.length) onValueChange(none, eventDetails);
				else onValueChange(all, eventDetails);
				return;
			}
			let nextStatus = "mixed";
			let nextValue = uncontrolledState;
			if (status === "mixed") {
				nextStatus = "on";
				nextValue = all;
			} else if (status === "on") {
				nextStatus = "off";
				nextValue = none;
			}
			onValueChange(nextValue, eventDetails);
			if (!eventDetails.isCanceled) setStatus(nextStatus);
		}
	}), [
		allValues,
		checked,
		childIdsState,
		indeterminate,
		onValueChange,
		status,
		value.length
	]);
	const getChildProps = import_react$1.useCallback((childValue) => ({
		checked: value.includes(childValue),
		onCheckedChange(nextChecked, eventDetails) {
			const newValue = value.slice();
			if (nextChecked) newValue.push(childValue);
			else newValue.splice(newValue.indexOf(childValue), 1);
			onValueChange(newValue, eventDetails);
			if (!eventDetails.isCanceled) {
				uncontrolledStateRef.current = newValue;
				setStatus("mixed");
			}
		}
	}), [onValueChange, value]);
	return import_react$1.useMemo(() => ({
		getParentProps,
		getChildProps,
		registerChildId,
		disabledStatesRef
	}), [
		getParentProps,
		getChildProps,
		registerChildId
	]);
}
var import_react$1;
function init_useCheckboxGroupParent() {
	return (init_useCheckboxGroupParent = __esmMin((() => {
		import_react$1 = /* @__PURE__ */ __toESM(require_react(), 1);
		init_useStableCallback();
		init_empty();
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/checkbox-group/CheckboxGroup.mjs
var import_react, import_jsx_runtime, CheckboxGroup$2;
function init_CheckboxGroup() {
	return (init_CheckboxGroup = __esmMin((() => {
		import_react = /* @__PURE__ */ __toESM(require_react(), 1);
		init_useControlled();
		init_useIsoLayoutEffect();
		init_useStableCallback();
		init_empty();
		init_useBaseUiId();
		init_useRenderElement();
		init_CheckboxGroupContext();
		init_useFieldValidation();
		init_FieldRootContext();
		init_useRegisterFieldControl();
		init_LabelableContext();
		init_useLabelableId();
		init_constants();
		init_useCheckboxGroupParent();
		init_FormContext();
		init_useValueChanged();
		import_jsx_runtime = require_jsx_runtime();
		CheckboxGroup$2 = /*#__PURE__*/ import_react.forwardRef(function CheckboxGroup(componentProps, forwardedRef) {
			const { allValues, className, defaultValue: defaultValueProp, disabled: disabledProp = false, id: idProp, onValueChange, render, value: externalValue, style, ...elementProps } = componentProps;
			const { disabled: fieldDisabled, name: fieldName, state: fieldState, validation, setFilled, setDirty, validityData } = useFieldRootContext();
			const { labelId, registerControlId, getDescriptionProps } = useLabelableContext();
			const { clearErrors, elementRef } = useFormContext();
			const disabled = fieldDisabled || disabledProp;
			const [value, setValueUnwrapped] = useControlled({
				controlled: externalValue,
				default: defaultValueProp ?? EMPTY_ARRAY,
				name: "CheckboxGroup",
				state: "value"
			});
			const setValue = useStableCallback((v, eventDetails) => {
				onValueChange?.(v, eventDetails);
				if (eventDetails.isCanceled) return;
				setValueUnwrapped(v);
			});
			const parent = useCheckboxGroupParent({
				allValues,
				value,
				onValueChange: setValue
			});
			useLabelableId({ id: null });
			const id = useBaseUiId(idProp);
			const getInputControl = validation.getInputControl;
			const controlRef = import_react.useMemo(() => ({ get current() {
				return getInputControl();
			} }), [getInputControl]);
			const getFormValue = useStableCallback(() => {
				const formElement = elementRef.current;
				if (!formElement) return value;
				const successfulValues = /* @__PURE__ */ new Set();
				for (const [input, registration] of validation.registeredInputs) if (registration.value !== void 0 && input.checked && isEligibleInput(input, formElement)) successfulValues.add(registration.value);
				return value.filter((inputValue) => successfulValues.has(inputValue));
			});
			useRegisterFieldControl(controlRef, id, value, getFormValue, !!fieldName && !disabled, fieldName);
			useIsoLayoutEffect(() => {
				setFilled(value.length > 0);
			}, [value, setFilled]);
			useValueChanged(value, () => {
				if (fieldName) clearErrors(fieldName);
				const initialValue = Array.isArray(validityData.initialValue) ? validityData.initialValue : EMPTY_ARRAY;
				setDirty(!areArraysEqual(value, initialValue));
				validation.change(value);
			});
			const state = {
				...fieldState,
				disabled
			};
			const contextValue = import_react.useMemo(() => ({
				allValues,
				value,
				setValue,
				parent,
				disabled,
				validation,
				registerControlId
			}), [
				allValues,
				value,
				setValue,
				parent,
				disabled,
				validation,
				registerControlId
			]);
			const element = useRenderElement("div", componentProps, {
				state,
				ref: forwardedRef,
				props: [
					{
						id: idProp,
						role: "group",
						"aria-labelledby": labelId
					},
					elementProps,
					getDescriptionProps
				],
				stateAttributesMapping: fieldValidityMapping
			});
			return /*#__PURE__*/ (0, import_jsx_runtime.jsx)(CheckboxGroupContext.Provider, {
				value: contextValue,
				children: element
			});
		});
		CheckboxGroup$2.displayName = "CheckboxGroup";
	})))();
}
//#endregion
//#region ../packages/ui/src/form/primitives/checkbox-group/checkbox-group.tsx
var import_jsx_dev_runtime$1, _jsxFileName$1, DEFAULT_RENDER, CheckboxGroup$1;
function init_checkbox_group() {
	return (init_checkbox_group = __esmMin((() => {
		init_CheckboxGroup();
		init_react();
		init_stack();
		import_jsx_dev_runtime$1 = require_jsx_dev_runtime();
		_jsxFileName$1 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/primitives/checkbox-group/checkbox-group.tsx";
		DEFAULT_RENDER = (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(Stack, {
			...props,
			direction: "column",
			gap: "sm"
		}, void 0, false, {
			fileName: _jsxFileName$1,
			lineNumber: 7,
			columnNumber: 2
		}, void 0);
		CheckboxGroup$1 = (0, import_react$2.forwardRef)(function UnforwardedCheckboxGroup({ render = DEFAULT_RENDER, ...restProps }, ref) {
			return /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(CheckboxGroup$2, {
				ref,
				render,
				...restProps
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 25,
				columnNumber: 4
			}, this);
		});
		try {
			CheckboxGroup$1.__docgenInfo = {
				"description": "A low-level primitive that groups checkboxes so they share one selected-values\nstate.\n\nPrefer composing `CheckboxControl` inside the group for labeled items. For\none labeled group, pass `CheckboxGroup` to `Fieldset.Root`'s `render` prop.\nWhen a `Fieldset` contains multiple groups, give each `CheckboxGroup` its own\naccessible name.",
				"displayName": "CheckboxGroup",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/primitives/checkbox-group/checkbox-group.tsx",
				"methods": [],
				"props": {
					"disabled": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/checkbox-group/CheckboxGroup.d.mts",
							"name": "CheckboxGroupProps"
						}],
						"description": "Whether the component should ignore user interaction.",
						"name": "disabled",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/checkbox-group/CheckboxGroup.d.mts",
							"name": "CheckboxGroupProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"defaultValue": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/checkbox-group/CheckboxGroup.d.mts",
							"name": "CheckboxGroupProps"
						}],
						"description": "Names of the checkboxes in the group that should be initially ticked.\n\nTo render a controlled checkbox group, use the `value` prop instead.",
						"name": "defaultValue",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/checkbox-group/CheckboxGroup.d.mts",
							"name": "CheckboxGroupProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "string[]" }
					},
					"value": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/checkbox-group/CheckboxGroup.d.mts",
							"name": "CheckboxGroupProps"
						}],
						"description": "Names of the checkboxes in the group that should be ticked.\n\nTo render an uncontrolled checkbox group, use the `defaultValue` prop instead.",
						"name": "value",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/checkbox-group/CheckboxGroup.d.mts",
							"name": "CheckboxGroupProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "string[]" }
					},
					"onValueChange": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/checkbox-group/CheckboxGroup.d.mts",
							"name": "CheckboxGroupProps"
						}],
						"description": "Event handler called when a checkbox in the group is ticked or unticked.\nProvides the new value as an argument.",
						"name": "onValueChange",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/checkbox-group/CheckboxGroup.d.mts",
							"name": "CheckboxGroupProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "((value: string[], eventDetails: { reason: \"none\"; event: Event; cancel: () => void; allowPropagation: () => void; isCanceled: boolean; isPropagationAllowed: boolean; trigger: Element; }) => void)" }
					},
					"allValues": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/checkbox-group/CheckboxGroup.d.mts",
							"name": "CheckboxGroupProps"
						}],
						"description": "Names of all checkboxes in the group. Use this when creating a parent checkbox.",
						"name": "allValues",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/checkbox-group/CheckboxGroup.d.mts",
							"name": "CheckboxGroupProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "string[]" }
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
						"defaultValue": { "value": "( props: React.ComponentProps< typeof Stack > ) => (\n	<Stack { ...props } direction=\"column\" gap=\"sm\" />\n)" },
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
							"fileName": "gutenberg-storybook-preview/packages/ui/src/form/primitives/checkbox-group/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The checkboxes and optional nested items in the group.",
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
//#region ../packages/ui/src/form/primitives/checkbox-group/style.module.css
var style_module_default;
function init_style_module() {
	return (init_style_module = __esmMin((() => {
		style_module_default = { "nested-items": "_nested-items_1jtqb_5" };
	})))();
}
//#endregion
//#region ../packages/ui/src/form/primitives/checkbox-group/nested-items.tsx
var import_jsx_dev_runtime, _jsxFileName, CheckboxGroupNestedItems;
function init_nested_items() {
	return (init_nested_items = __esmMin((() => {
		init_clsx();
		init_react();
		init_stack();
		init_style_module();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/primitives/checkbox-group/nested-items.tsx";
		CheckboxGroupNestedItems = (0, import_react$2.forwardRef)(function UnforwardedCheckboxGroupNestedItems({ className, ...restProps }, ref) {
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack, {
				ref,
				className: clsx(style_module_default["nested-items"], className),
				direction: "column",
				gap: "sm",
				...restProps
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 18,
				columnNumber: 3
			}, this);
		});
		CheckboxGroupNestedItems.displayName = "CheckboxGroup.NestedItems";
		try {
			CheckboxGroupNestedItems.__docgenInfo = {
				"description": "A layout wrapper that indents nested checkbox items.",
				"displayName": "CheckboxGroup.NestedItems",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/primitives/checkbox-group/nested-items.tsx",
				"methods": [],
				"props": {
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
					"direction": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/stack/types.ts",
							"name": "StackProps"
						}],
						"description": "The direction of the stack.",
						"name": "direction",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/ui/src/stack/types.ts",
							"name": "StackProps"
						},
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "\"row\" | Globals | \"column\"",
							"value": [
								{ "value": "\"row\"" },
								{ "value": "\"inherit\"" },
								{ "value": "\"initial\"" },
								{ "value": "\"-moz-initial\"" },
								{ "value": "\"revert\"" },
								{ "value": "\"revert-layer\"" },
								{ "value": "\"unset\"" },
								{ "value": "\"column\"" }
							]
						}
					},
					"children": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/stack/types.ts",
							"name": "StackProps"
						}],
						"description": "The content to be rendered inside the component.",
						"name": "children",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/ui/src/stack/types.ts",
							"name": "StackProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "ReactNode" }
					},
					"wrap": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/stack/types.ts",
							"name": "StackProps"
						}],
						"description": "Whether the stack items should wrap to the next line.",
						"name": "wrap",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/ui/src/stack/types.ts",
							"name": "StackProps"
						},
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "Globals | \"nowrap\" | \"wrap\"",
							"value": [
								{ "value": "\"inherit\"" },
								{ "value": "\"initial\"" },
								{ "value": "\"-moz-initial\"" },
								{ "value": "\"revert\"" },
								{ "value": "\"revert-layer\"" },
								{ "value": "\"unset\"" },
								{ "value": "\"nowrap\"" },
								{ "value": "\"wrap\"" }
							]
						}
					},
					"justify": {
						"defaultValue": { "value": "'initial'" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/stack/types.ts",
							"name": "StackProps"
						}],
						"description": "The alignment of the stack items along the main axis.",
						"name": "justify",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/ui/src/stack/types.ts",
							"name": "StackProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "JustifyContent" }
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
					"align": {
						"defaultValue": { "value": "'initial'" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/stack/types.ts",
							"name": "StackProps"
						}],
						"description": "The alignment of the stack items along the cross axis.",
						"name": "align",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/ui/src/stack/types.ts",
							"name": "StackProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "AlignItems" }
					},
					"gap": {
						"defaultValue": { "value": "undefined" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/stack/types.ts",
							"name": "StackProps"
						}],
						"description": "The amount of space between each child element using design system tokens.",
						"name": "gap",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/ui/src/stack/types.ts",
							"name": "StackProps"
						},
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "GapSize",
							"value": [
								{ "value": "\"xs\"" },
								{ "value": "\"sm\"" },
								{ "value": "\"md\"" },
								{ "value": "\"lg\"" },
								{ "value": "\"xl\"" },
								{ "value": "\"2xl\"" },
								{ "value": "\"3xl\"" }
							]
						}
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/ui/src/form/primitives/checkbox-group/index.ts
var CheckboxGroup;
function init_checkbox_group$1() {
	return (init_checkbox_group$1 = __esmMin((() => {
		init_checkbox_group();
		init_nested_items();
		CheckboxGroupNestedItems.displayName = "CheckboxGroup.NestedItems";
		CheckboxGroup = Object.assign(CheckboxGroup$1, { 
		/**
		* A layout wrapper that indents nested checkbox items.
		*/
NestedItems: CheckboxGroupNestedItems });
	})))();
}
//#endregion
export { init_checkbox_group$1 as n, CheckboxGroup as t };
