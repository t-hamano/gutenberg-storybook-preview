import { n as __esmMin, o as __toESM } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_react } from "./react-Bujh4FgW.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C1RZKCc6.js";
import { S as useRefWithInit, r as useRenderElement, t as init_useRenderElement, x as init_useRefWithInit } from "./useRenderElement-Dkv6YH0v.js";
import { i as init_safeReact, n as useIsoLayoutEffect, r as SafeReact, t as init_useIsoLayoutEffect } from "./useIsoLayoutEffect-DDc8Lhn-.js";
import { n as useStableCallback, t as init_useStableCallback } from "./useStableCallback-Cql5w11m.js";
import { n as init_error, t as error } from "./error-0lokwdt8.js";
import { n as useBaseUiId, t as init_useBaseUiId } from "./useBaseUiId-CESTxyJs.js";
import { _ as isShadowRoot, p as isHTMLElement, u as init_floating_ui_utils_dom } from "./floating-ui.utils.dom-s51Otfgf.js";
import { n as ownerDocument } from "./owner-CcC_2sZ3.js";
import { a as init_shadowDom, i as getTarget, n as closest } from "./shadowDom-C1kYxCnm.js";
import { _ as DEFAULT_VALIDITY_STATE, a as LabelableContext, c as init_FormContext, h as useFieldRootContext, l as useFormContext, m as init_FieldRootContext, o as init_LabelableContext, p as FieldRootContext, s as useLabelableContext, v as fieldValidityMapping, y as init_constants } from "./useSetFieldFocused-BBT5GDr4.js";
import { n as init_FieldItemContext, r as useFieldItemContext } from "./FieldItemContext-BpndY37q.js";
import { i as getCombinedFieldValidityData, r as useFieldValidation, t as init_useFieldValidation } from "./useFieldValidation-DabqVEE6.js";
import { n as useRegisteredLabelId, t as init_useRegisteredLabelId } from "./useRegisteredLabelId-rzX4GRP8.js";
import { n as init_FieldsetRootContext, r as useFieldsetRootContext } from "./FieldsetRootContext-Du-Ays8e.js";
//#region ../node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/internals/labelable-provider/useLabel.mjs
function useLabel(params = {}) {
	const { id: idProp, fallbackControlId, native = false, setLabelId: setLabelIdProp, focusControl: focusControlProp } = params;
	const { controlId: contextControlId, setLabelId: setContextLabelId } = useLabelableContext();
	const syncLabelId = useStableCallback((nextLabelId) => {
		setContextLabelId(nextLabelId);
		setLabelIdProp?.(nextLabelId);
	});
	const id = useRegisteredLabelId(idProp, syncLabelId);
	const resolvedControlId = contextControlId ?? fallbackControlId;
	function focusControl(event) {
		if (focusControlProp) {
			focusControlProp(event, resolvedControlId);
			return;
		}
		if (!resolvedControlId) return;
		const controlElement = getControlById(event.currentTarget, resolvedControlId);
		if (isHTMLElement(controlElement)) focusElementWithVisible(controlElement);
	}
	function handleInteraction(event) {
		const target = getTarget(event.nativeEvent);
		if (closest(target, "button,input,select,textarea")) return;
		if (!event.defaultPrevented && event.detail > 1) event.preventDefault();
		if (native) return;
		focusControl(event);
	}
	return native ? {
		id,
		htmlFor: resolvedControlId,
		onMouseDown: handleInteraction
	} : {
		id,
		onClick: handleInteraction,
		onPointerDown(event) {
			event.preventDefault();
		}
	};
}
function getControlById(label, id) {
	let root = label.getRootNode();
	while (isShadowRoot(root)) {
		const element = root.getElementById(id);
		if (element) return element;
		root = root.host.getRootNode();
	}
	return ownerDocument(label).getElementById(id);
}
function focusElementWithVisible(element) {
	element.focus({ focusVisible: true });
}
function init_useLabel() {
	return (init_useLabel = __esmMin((() => {
		init_floating_ui_utils_dom();
		init_useStableCallback();
		init_shadowDom();
		init_useRegisteredLabelId();
		init_LabelableContext();
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/internals/labelable-provider/LabelableProvider.mjs
var import_react$4, import_jsx_runtime$1, LabelableProvider;
function init_LabelableProvider() {
	return (init_LabelableProvider = __esmMin((() => {
		import_react$4 = /* @__PURE__ */ __toESM(require_react(), 1);
		init_useStableCallback();
		init_useRefWithInit();
		init_useBaseUiId();
		init_LabelableContext();
		import_jsx_runtime$1 = require_jsx_runtime();
		LabelableProvider = function LabelableProvider(props) {
			const defaultId = useBaseUiId();
			const [controlIdState, setControlIdState] = import_react$4.useState(defaultId);
			const [labelId, setLabelId] = import_react$4.useState();
			const [messageIds, setMessageIds] = import_react$4.useState([]);
			const controlId = controlIdState === void 0 ? defaultId : controlIdState;
			const registrationsRef = useRefWithInit(() => /* @__PURE__ */ new Map());
			const { messageIds: parentMessageIds } = useLabelableContext();
			const registerControlId = useStableCallback((source, nextId) => {
				const registrations = registrationsRef.current;
				if (nextId === void 0) registrations.delete(source);
				else registrations.set(source, nextId);
				setControlIdState((prev) => {
					if (registrations.size === 0) return prev;
					let nextControlId;
					for (const id of registrations.values()) {
						if (id === prev) return prev;
						if (nextControlId === void 0) nextControlId = id;
					}
					return nextControlId;
				});
			});
			const resetControlId = useStableCallback(() => {
				if (registrationsRef.current.size === 0) setControlIdState(defaultId);
			});
			const getDescriptionProps = import_react$4.useCallback((externalProps) => {
				const ids = externalProps["aria-describedby"] ? externalProps["aria-describedby"].split(" ") : [];
				ids.push(...parentMessageIds, ...messageIds);
				return {
					...externalProps,
					"aria-describedby": Array.from(new Set(ids)).join(" ") || void 0
				};
			}, [parentMessageIds, messageIds]);
			const contextValue = import_react$4.useMemo(() => ({
				controlId,
				registerControlId,
				resetControlId,
				labelId,
				setLabelId,
				messageIds,
				setMessageIds,
				getDescriptionProps
			}), [
				controlId,
				registerControlId,
				resetControlId,
				labelId,
				setLabelId,
				messageIds,
				setMessageIds,
				getDescriptionProps
			]);
			return /*#__PURE__*/ (0, import_jsx_runtime$1.jsx)(LabelableContext.Provider, {
				value: contextValue,
				children: props.children
			});
		};
		LabelableProvider.displayName = "LabelableProvider";
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/internals/field-register-control/useFieldControlRegistration.mjs
function useFieldControlRegistration(params) {
	const { change, commit, invalid, markedDirtyRef, name, setRegisteredFieldName, registeredFieldIdRef, setValidityData, validityData } = params;
	const { formRef } = useFormContext();
	const activeFieldControlSourceRef = import_react$3.useRef(null);
	const registrationRef = import_react$3.useRef(null);
	const initialValueCapturedRef = import_react$3.useRef(false);
	const getValueForForm = useStableCallback(() => {
		const registration = registrationRef.current;
		if (!registration) return;
		if (registration.getValue) return registration.getValue();
		return registration.value;
	});
	function getRegistrationValue(registration) {
		return registration.value === void 0 ? getValueForForm() : registration.value;
	}
	const validate = useStableCallback(() => {
		const registration = registrationRef.current;
		markedDirtyRef.current = true;
		if (!registration) {
			commit(validityData.value);
			return;
		}
		commit(getRegistrationValue(registration));
	});
	function refreshRegistration() {
		const registration = registrationRef.current;
		if (!registration || !registration.id) return;
		formRef.current.fields.set(registration.id, {
			getValue: getValueForForm,
			name: name ?? registration.name,
			controlRef: registration.controlRef,
			validityData: getCombinedFieldValidityData(validityData, invalid),
			validate
		});
	}
	function deleteRegistration(id = registrationRef.current?.id) {
		if (id) formRef.current.fields.delete(id);
	}
	function captureInitialValue(registration) {
		if (initialValueCapturedRef.current) return;
		initialValueCapturedRef.current = true;
		const initialValue = getRegistrationValue(registration);
		setValidityData((prev) => prev.initialValue === initialValue ? prev : {
			...prev,
			initialValue
		});
	}
	useIsoLayoutEffect(() => {
		const registration = registrationRef.current;
		if (!registration || !registration.id) return;
		setRegisteredFieldName(name ? void 0 : registration.name);
		formRef.current.fields.set(registration.id, {
			getValue: getValueForForm,
			name: name ?? registration.name,
			controlRef: registration.controlRef,
			validityData: getCombinedFieldValidityData(validityData, invalid),
			validate
		});
	}, [
		formRef,
		getValueForForm,
		invalid,
		name,
		setRegisteredFieldName,
		validate,
		validityData
	]);
	useIsoLayoutEffect(() => {
		const fields = formRef.current.fields;
		return () => {
			const id = registrationRef.current?.id;
			if (id) fields.delete(id);
		};
	}, [formRef]);
	return [validate, useStableCallback((source, registration) => {
		if (!registration) {
			if (activeFieldControlSourceRef.current === source) {
				activeFieldControlSourceRef.current = null;
				change(void 0, true);
				deleteRegistration();
				registrationRef.current = null;
				setRegisteredFieldName(void 0);
				registeredFieldIdRef.current = void 0;
			}
			return;
		}
		const previousId = registrationRef.current?.id;
		const previousSource = activeFieldControlSourceRef.current;
		if (previousSource && previousSource !== source) change(void 0, true);
		activeFieldControlSourceRef.current = source;
		registrationRef.current = registration;
		if (!name) setRegisteredFieldName(registration.name);
		registeredFieldIdRef.current = registration.id;
		if (previousId && previousId !== registration.id) deleteRegistration(previousId);
		captureInitialValue(registration);
		refreshRegistration();
	})];
}
var import_react$3;
function init_useFieldControlRegistration() {
	return (init_useFieldControlRegistration = __esmMin((() => {
		import_react$3 = /* @__PURE__ */ __toESM(require_react(), 1);
		init_useIsoLayoutEffect();
		init_useStableCallback();
		init_FormContext();
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/field/root/FieldRoot.mjs
var import_react$2, import_jsx_runtime, FieldRootInner, FieldRoot;
function init_FieldRoot() {
	return (init_FieldRoot = __esmMin((() => {
		import_react$2 = /* @__PURE__ */ __toESM(require_react(), 1);
		init_useIsoLayoutEffect();
		init_useStableCallback();
		init_FieldRootContext();
		init_constants();
		init_FieldsetRootContext();
		init_FormContext();
		init_LabelableProvider();
		init_useRenderElement();
		init_useFieldValidation();
		init_useFieldControlRegistration();
		import_jsx_runtime = require_jsx_runtime();
		FieldRootInner = /*#__PURE__*/ import_react$2.forwardRef(function FieldRootInner(componentProps, forwardedRef) {
			const { errors, validationMode: formValidationMode, submitCountRef } = useFormContext();
			const { render, className, validate: validateProp, validationDebounceTime = 0, validationMode = formValidationMode, name, disabled: disabledProp = false, invalid: invalidProp, dirty: dirtyProp, touched: touchedProp, actionsRef, style, ...elementProps } = componentProps;
			const disabledFieldset = useFieldsetRootContext(true)?.disabled;
			const validate = useStableCallback(validateProp || (() => null));
			const disabled = disabledFieldset || disabledProp;
			const [touchedState, setTouchedUnwrapped] = import_react$2.useState(false);
			const [dirtyState, setDirtyUnwrapped] = import_react$2.useState(false);
			const [filled, setFilled] = import_react$2.useState(false);
			const [focused, setFocused] = import_react$2.useState(false);
			const focusOwnerRef = import_react$2.useRef(void 0);
			const dirty = dirtyProp ?? dirtyState;
			const touched = touchedProp ?? touchedState;
			const markedDirtyRef = import_react$2.useRef(dirty);
			const registeredFieldIdRef = import_react$2.useRef(void 0);
			const [registeredFieldName, setRegisteredFieldName] = import_react$2.useState();
			const effectiveName = name ?? registeredFieldName;
			useIsoLayoutEffect(() => {
				if (dirtyProp !== void 0) markedDirtyRef.current = dirtyProp;
			}, [dirtyProp]);
			const setDirty = useStableCallback((value) => {
				if (dirtyProp !== void 0) return;
				if (value) markedDirtyRef.current = true;
				setDirtyUnwrapped(value);
			});
			const setTouched = useStableCallback((value) => {
				if (touchedProp !== void 0) return;
				setTouchedUnwrapped(value);
			});
			const shouldValidateOnChange = useStableCallback(() => validationMode === "onChange" || validationMode === "onSubmit" && submitCountRef.current > 0);
			const formError = effectiveName && Object.hasOwn(errors, effectiveName) ? errors[effectiveName] : null;
			const hasFormError = !!(Array.isArray(formError) ? formError.length : formError);
			const invalid = invalidProp === true || hasFormError;
			const [validityData, setValidityData] = import_react$2.useState({
				state: DEFAULT_VALIDITY_STATE,
				error: "",
				errors: [],
				value: null,
				initialValue: null
			});
			const valid = !invalid && (disabled ? null : validityData.state.valid);
			const state = import_react$2.useMemo(() => ({
				disabled,
				touched,
				dirty,
				valid,
				filled,
				focused
			}), [
				disabled,
				touched,
				dirty,
				valid,
				filled,
				focused
			]);
			const validation = useFieldValidation({
				setValidityData,
				validate,
				validityData,
				validationDebounceTime,
				invalid,
				markedDirtyRef,
				state,
				shouldValidateOnChange,
				validationMode,
				registeredFieldIdRef
			});
			const [validateFieldControl, registerFieldControl] = useFieldControlRegistration({
				change: validation.change,
				commit: validation.commit,
				invalid,
				markedDirtyRef,
				name,
				setRegisteredFieldName,
				registeredFieldIdRef,
				setValidityData,
				validityData
			});
			import_react$2.useImperativeHandle(actionsRef, () => ({ validate: validateFieldControl }), [validateFieldControl]);
			const contextValue = import_react$2.useMemo(() => ({
				invalid,
				name: effectiveName,
				validityData,
				setValidityData,
				disabled,
				setTouched,
				setDirty,
				setFilled,
				setFocused,
				focusOwnerRef,
				validationMode,
				shouldValidateOnChange,
				state,
				registerFieldControl,
				validation
			}), [
				invalid,
				effectiveName,
				validityData,
				disabled,
				setTouched,
				setDirty,
				setFilled,
				setFocused,
				validationMode,
				shouldValidateOnChange,
				state,
				registerFieldControl,
				validation
			]);
			const element = useRenderElement("div", componentProps, {
				ref: forwardedRef,
				state,
				props: elementProps,
				stateAttributesMapping: fieldValidityMapping
			});
			return /*#__PURE__*/ (0, import_jsx_runtime.jsx)(FieldRootContext.Provider, {
				value: contextValue,
				children: element
			});
		});
		FieldRootInner.displayName = "FieldRootInner";
		FieldRoot = /*#__PURE__*/ import_react$2.forwardRef(function FieldRoot(componentProps, forwardedRef) {
			return /*#__PURE__*/ (0, import_jsx_runtime.jsx)(LabelableProvider, { children: /*#__PURE__*/ (0, import_jsx_runtime.jsx)(FieldRootInner, {
				...componentProps,
				ref: forwardedRef
			}) });
		});
		FieldRoot.displayName = "FieldRoot";
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/field/label/FieldLabel.mjs
var import_react$1, FieldLabel;
function init_FieldLabel() {
	return (init_FieldLabel = __esmMin((() => {
		import_react$1 = /* @__PURE__ */ __toESM(require_react(), 1);
		init_error();
		init_safeReact();
		init_FieldRootContext();
		init_constants();
		init_useRenderElement();
		init_LabelableContext();
		init_useLabel();
		init_FieldItemContext();
		FieldLabel = /*#__PURE__*/ import_react$1.forwardRef(function FieldLabel(componentProps, forwardedRef) {
			const { render, className, style, id: idProp, nativeLabel = true, ...elementProps } = componentProps;
			const fieldRootContext = useFieldRootContext(false);
			const fieldItemContext = useFieldItemContext();
			const { labelId } = useLabelableContext();
			const state = {
				...fieldRootContext.state,
				disabled: fieldRootContext.disabled || fieldItemContext.disabled
			};
			const labelRef = import_react$1.useRef(null);
			const labelProps = useLabel({
				id: labelId ?? idProp,
				native: nativeLabel
			});
			import_react$1.useEffect(() => {
				if (!labelRef.current) return;
				const isLabelTag = labelRef.current.tagName === "LABEL";
				if (nativeLabel) {
					if (!isLabelTag) {
						const ownerStackMessage = SafeReact.captureOwnerStack?.() || "";
						error(`<Field.Label> expected a <label> element because the \`nativeLabel\` prop is true. Rendering a non-<label> disables native label association, so \`htmlFor\` will not work. Use a real <label> in the \`render\` prop, or set \`nativeLabel\` to \`false\`.${ownerStackMessage}`);
					}
				} else if (isLabelTag) {
					const ownerStackMessage = SafeReact.captureOwnerStack?.() || "";
					error(`<Field.Label> expected a non-<label> element because the \`nativeLabel\` prop is false. Rendering a <label> assumes native label behavior while Base UI treats it as non-native, which can cause unexpected pointer behavior. Use a non-<label> in the \`render\` prop, or set \`nativeLabel\` to \`true\`.${ownerStackMessage}`);
				}
			}, [nativeLabel]);
			return useRenderElement("label", componentProps, {
				ref: [forwardedRef, labelRef],
				state,
				props: [labelProps, elementProps],
				stateAttributesMapping: fieldValidityMapping
			});
		});
		FieldLabel.displayName = "FieldLabel";
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/field/description/FieldDescription.mjs
var import_react, FieldDescription;
function init_FieldDescription() {
	return (init_FieldDescription = __esmMin((() => {
		import_react = /* @__PURE__ */ __toESM(require_react(), 1);
		init_useIsoLayoutEffect();
		init_FieldRootContext();
		init_LabelableContext();
		init_constants();
		init_useBaseUiId();
		init_useRenderElement();
		init_FieldItemContext();
		FieldDescription = /*#__PURE__*/ import_react.forwardRef(function FieldDescription(componentProps, forwardedRef) {
			const { render, id: idProp, className, style, ...elementProps } = componentProps;
			const id = useBaseUiId(idProp);
			const fieldRootContext = useFieldRootContext(false);
			const fieldItemContext = useFieldItemContext();
			const { setMessageIds } = useLabelableContext();
			const state = {
				...fieldRootContext.state,
				disabled: fieldRootContext.disabled || fieldItemContext.disabled
			};
			useIsoLayoutEffect(() => {
				if (!id) return;
				setMessageIds((v) => v.concat(id));
				return () => {
					setMessageIds((v) => v.filter((item) => item !== id));
				};
			}, [id, setMessageIds]);
			return useRenderElement("p", componentProps, {
				ref: forwardedRef,
				state,
				props: [{ id }, elementProps],
				stateAttributesMapping: fieldValidityMapping
			});
		});
		FieldDescription.displayName = "FieldDescription";
	})))();
}
//#endregion
export { FieldRoot as a, init_LabelableProvider as c, init_FieldLabel as i, init_FieldDescription as n, init_FieldRoot as o, FieldLabel as r, LabelableProvider as s, FieldDescription as t };
