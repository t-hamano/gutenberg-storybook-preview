import { n as __esmMin, o as __toESM } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_react } from "./react-Bujh4FgW.js";
import { S as useRefWithInit, d as NOOP, f as init_empty, u as EMPTY_OBJECT, x as init_useRefWithInit } from "./useRenderElement-Dkv6YH0v.js";
import { n as useIsoLayoutEffect, t as init_useIsoLayoutEffect } from "./useIsoLayoutEffect-DDc8Lhn-.js";
import { n as useStableCallback, t as init_useStableCallback } from "./useStableCallback-Cql5w11m.js";
import { n as useBaseUiId, t as init_useBaseUiId } from "./useBaseUiId-CESTxyJs.js";
//#region ../node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/field/control/FieldControlDataAttributes.mjs
var valid, invalid;
function init_FieldControlDataAttributes() {
	return (init_FieldControlDataAttributes = __esmMin((() => {
		valid = "data-valid";
		invalid = "data-invalid";
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/internals/field-constants/constants.mjs
var DEFAULT_VALIDITY_STATE, DEFAULT_FIELD_STATE_ATTRIBUTES, DEFAULT_FIELD_ROOT_STATE, fieldValidityMapping;
function init_constants() {
	return (init_constants = __esmMin((() => {
		init_FieldControlDataAttributes();
		DEFAULT_VALIDITY_STATE = {
			badInput: false,
			customError: false,
			patternMismatch: false,
			rangeOverflow: false,
			rangeUnderflow: false,
			stepMismatch: false,
			tooLong: false,
			tooShort: false,
			typeMismatch: false,
			valid: null,
			valueMissing: false
		};
		DEFAULT_FIELD_STATE_ATTRIBUTES = {
			valid: null,
			touched: false,
			dirty: false,
			filled: false,
			focused: false
		};
		DEFAULT_FIELD_ROOT_STATE = {
			disabled: false,
			...DEFAULT_FIELD_STATE_ATTRIBUTES
		};
		fieldValidityMapping = { valid(value) {
			if (value === null) return null;
			if (value) return { [valid]: "" };
			return { [invalid]: "" };
		} };
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/internals/field-root-context/FieldRootContext.mjs
function useFieldRootContext(optional = true) {
	const context = import_react$3.useContext(FieldRootContext);
	if (context.setValidityData === NOOP && !optional) throw new Error("Base UI: FieldRootContext is missing. Field parts must be placed within <Field.Root>.");
	return context;
}
var import_react$3, DEFAULT_FIELD_ROOT_CONTEXT, FieldRootContext;
function init_FieldRootContext() {
	return (init_FieldRootContext = __esmMin((() => {
		import_react$3 = /* @__PURE__ */ __toESM(require_react(), 1);
		init_empty();
		init_constants();
		DEFAULT_FIELD_ROOT_CONTEXT = {
			invalid: void 0,
			name: void 0,
			validityData: {
				state: DEFAULT_VALIDITY_STATE,
				errors: [],
				error: "",
				value: "",
				initialValue: null
			},
			setValidityData: NOOP,
			disabled: void 0,
			setTouched: NOOP,
			setDirty: NOOP,
			setFilled: NOOP,
			setFocused: NOOP,
			focusOwnerRef: { current: void 0 },
			validationMode: "onSubmit",
			shouldValidateOnChange: () => false,
			state: DEFAULT_FIELD_ROOT_STATE,
			registerFieldControl: NOOP,
			validation: {
				getValidationProps: (_disabled, props = EMPTY_OBJECT) => props,
				inputRef: { current: null },
				registeredInputs: /* @__PURE__ */ new Map(),
				registerInput: NOOP,
				getInputControl: () => null,
				commit: async () => {},
				change: NOOP
			}
		};
		FieldRootContext = /*#__PURE__*/ import_react$3.createContext(DEFAULT_FIELD_ROOT_CONTEXT);
		FieldRootContext.displayName = "FieldRootContext";
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/internals/field-register-control/useRegisterFieldControl.mjs
function useRegisterFieldControl(controlRef, id, value, getFormValueOverride, enabled = true, name) {
	const { registerFieldControl } = useFieldRootContext();
	const sourceRef = useRefWithInit(() => Symbol());
	useIsoLayoutEffect(() => {
		const source = sourceRef.current;
		if (!enabled) {
			registerFieldControl(source, void 0);
			return;
		}
		registerFieldControl(source, {
			controlRef,
			getValue: getFormValueOverride,
			id,
			name,
			value
		});
	}, [
		controlRef,
		enabled,
		getFormValueOverride,
		id,
		name,
		registerFieldControl,
		sourceRef,
		value
	]);
	useIsoLayoutEffect(() => {
		const source = sourceRef.current;
		return () => {
			registerFieldControl(source, void 0);
		};
	}, [registerFieldControl, sourceRef]);
}
function init_useRegisterFieldControl() {
	return (init_useRegisterFieldControl = __esmMin((() => {
		init_useIsoLayoutEffect();
		init_useRefWithInit();
		init_FieldRootContext();
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/internals/form-context/FormContext.mjs
function useFormContext() {
	return import_react$2.useContext(FormContext);
}
var import_react$2, FormContext;
function init_FormContext() {
	return (init_FormContext = __esmMin((() => {
		import_react$2 = /* @__PURE__ */ __toESM(require_react(), 1);
		init_empty();
		FormContext = /*#__PURE__*/ import_react$2.createContext({
			elementRef: { current: null },
			formRef: { current: { fields: /* @__PURE__ */ new Map() } },
			errors: {},
			clearErrors: NOOP,
			validationMode: "onSubmit",
			submitCountRef: { current: 0 }
		});
		FormContext.displayName = "FormContext";
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/internals/labelable-provider/LabelableContext.mjs
function useLabelableContext() {
	return import_react$1.useContext(LabelableContext);
}
var import_react$1, LabelableContext;
function init_LabelableContext() {
	return (init_LabelableContext = __esmMin((() => {
		import_react$1 = /* @__PURE__ */ __toESM(require_react(), 1);
		init_empty();
		LabelableContext = /*#__PURE__*/ import_react$1.createContext({
			controlId: void 0,
			registerControlId: NOOP,
			resetControlId: NOOP,
			labelId: void 0,
			setLabelId: NOOP,
			messageIds: [],
			setMessageIds: NOOP,
			getDescriptionProps: (externalProps) => externalProps
		});
		LabelableContext.displayName = "LabelableContext";
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/internals/labelable-provider/useLabelableId.mjs
function useLabelableId(params = {}) {
	const { id, enabled = true } = params;
	const { controlId, registerControlId, resetControlId } = useLabelableContext();
	const defaultId = useBaseUiId();
	const controlSourceRef = useRefWithInit(() => Symbol());
	const hasRegisteredRef = import_react.useRef(false);
	const hadExplicitIdRef = import_react.useRef(false);
	const unregisterControlId = useStableCallback(() => {
		if (!hasRegisteredRef.current || registerControlId === NOOP) return;
		hasRegisteredRef.current = false;
		registerControlId(controlSourceRef.current, void 0);
	});
	useIsoLayoutEffect(() => {
		if (!enabled || registerControlId === NOOP) {
			unregisterControlId();
			return;
		}
		let nextId;
		if (id !== void 0) {
			hadExplicitIdRef.current = true;
			nextId = id;
		} else if (hadExplicitIdRef.current) nextId = defaultId;
		else {
			resetControlId();
			return;
		}
		if (nextId === void 0) {
			unregisterControlId();
			return;
		}
		hasRegisteredRef.current = true;
		registerControlId(controlSourceRef.current, nextId);
	}, [
		id,
		enabled,
		registerControlId,
		resetControlId,
		defaultId,
		controlSourceRef,
		unregisterControlId
	]);
	useIsoLayoutEffect(() => {
		return unregisterControlId;
	}, [unregisterControlId]);
	return (enabled ? controlId : void 0) ?? id ?? defaultId;
}
var import_react;
function init_useLabelableId() {
	return (init_useLabelableId = __esmMin((() => {
		import_react = /* @__PURE__ */ __toESM(require_react(), 1);
		init_useIsoLayoutEffect();
		init_useStableCallback();
		init_useRefWithInit();
		init_empty();
		init_useBaseUiId();
		init_LabelableContext();
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/internals/field-root-context/useSetFieldFocused.mjs
/**
* Returns the field's `setFocused`, recording which control the focused state belongs to.
*
* Disabling or unmounting a focused control moves focus away without firing `blur`, so the focused
* state would otherwise stay latched. A field can have several focus targets, so a control only
* clears the shared state when focus last landed on itself. The stable callback doubles as that
* identity.
*/
function useSetFieldFocused(disabled, focusTargetRef, onFocusedChange) {
	const { setFocused, focusOwnerRef } = useFieldRootContext();
	const setFieldFocused = useStableCallback((focused) => {
		if (focused ? !disabled : focusOwnerRef.current === setFieldFocused) {
			focusOwnerRef.current = focused && setFieldFocused;
			onFocusedChange?.(focused);
			setFocused(focused);
		}
	});
	useIsoLayoutEffect(() => {
		const el = focusTargetRef.current;
		if ((el?.getRootNode())?.activeElement === el) setFieldFocused(true);
		return () => setFieldFocused(false);
	}, [
		disabled,
		focusTargetRef,
		setFieldFocused
	]);
	return setFieldFocused;
}
function init_useSetFieldFocused() {
	return (init_useSetFieldFocused = __esmMin((() => {
		init_useIsoLayoutEffect();
		init_useStableCallback();
		init_FieldRootContext();
	})))();
}
//#endregion
export { DEFAULT_VALIDITY_STATE as _, LabelableContext as a, init_FormContext as c, useRegisterFieldControl as d, DEFAULT_FIELD_ROOT_CONTEXT as f, DEFAULT_FIELD_STATE_ATTRIBUTES as g, useFieldRootContext as h, useLabelableId as i, useFormContext as l, init_FieldRootContext as m, useSetFieldFocused as n, init_LabelableContext as o, FieldRootContext as p, init_useLabelableId as r, useLabelableContext as s, init_useSetFieldFocused as t, init_useRegisterFieldControl as u, fieldValidityMapping as v, init_constants as y };
