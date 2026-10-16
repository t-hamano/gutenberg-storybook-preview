import { n as __esmMin, o as __toESM } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_react } from "./react-Bujh4FgW.js";
import { S as useRefWithInit, f as init_empty, i as init_mergeProps, o as mergeProps, u as EMPTY_OBJECT, x as init_useRefWithInit } from "./useRenderElement-Dkv6YH0v.js";
import { n as useStableCallback, t as init_useStableCallback } from "./useStableCallback-Cql5w11m.js";
import { n as init_useTimeout, r as useTimeout } from "./useTimeout-Cl_2zLqB.js";
import { _ as DEFAULT_VALIDITY_STATE, c as init_FormContext, l as useFormContext, o as init_LabelableContext, s as useLabelableContext, y as init_constants } from "./useSetFieldFocused-BBT5GDr4.js";
//#region ../node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/field/utils/getCombinedFieldValidityData.mjs
/**
* Combines the field's client-side, stateful validity data with the external invalid state to
* determine the field's true validity.
*/
function getCombinedFieldValidityData(validityData, invalid) {
	return {
		...validityData,
		state: {
			...validityData.state,
			valid: !invalid && validityData.state.valid
		}
	};
}
function init_getCombinedFieldValidityData() {
	return (init_getCombinedFieldValidityData = __esmMin((() => {})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/field/root/useFieldValidation.mjs
/**
* Whether an input participates in the surrounding Base UI Form. Inputs that are effectively
* disabled, or whose `form` attribute explicitly associates them with another form, are excluded.
* DOM position only matters when it associates the input with a different form. Otherwise, field
* registration is context-driven, so portaled inputs (for example inside a dialog) still belong to
* the form for both validation and values projected into `onFormSubmit`.
*/
function isEligibleInput(input, formElement) {
	if (input.matches(":disabled")) return false;
	if (!formElement || input.form === formElement) return true;
	return input.form === null && !input.hasAttribute("form");
}
/**
* Picks the input whose native validity should represent a field that owns several inputs (such as a
* checkbox or radio group). Prefers the first eligible currently-invalid input, where "first" follows
* registration order (mount order), and otherwise returns the first eligible input.
*/
function findRepresentativeInput(inputs, formElement) {
	let fallback = null;
	for (const input of inputs.keys()) {
		if (!isEligibleInput(input, formElement)) continue;
		if (!input.validity.valid) return input;
		fallback ??= input;
	}
	return fallback;
}
function makeState(customError) {
	return {
		...DEFAULT_VALIDITY_STATE,
		valid: !customError,
		customError
	};
}
function getNativeErrors(element) {
	return element && element.validationMessage ? [element.validationMessage] : [];
}
function useFieldValidation(params) {
	const { elementRef, formRef } = useFormContext();
	const { setValidityData, validate, validityData, validationDebounceTime, invalid, markedDirtyRef, state, shouldValidateOnChange, validationMode, registeredFieldIdRef } = params;
	const { controlId, getDescriptionProps } = useLabelableContext();
	const timeout = useTimeout();
	const inputRef = import_react.useRef(null);
	const registeredInputs = useRefWithInit(() => /* @__PURE__ */ new Map()).current;
	const validationCommitIdRef = import_react.useRef(0);
	const customValidityRef = import_react.useRef(null);
	const registerInput = import_react.useCallback((element, registration) => {
		registeredInputs.set(element, registration);
		return () => {
			registeredInputs.delete(element);
		};
	}, [registeredInputs]);
	const getInputControl = useStableCallback(() => {
		const element = findRepresentativeInput(registeredInputs, elementRef.current);
		return element && registeredInputs.get(element)?.controlRef.current || null;
	});
	const commit = useStableCallback(async (value, revalidate = false) => {
		validationCommitIdRef.current += 1;
		const validationCommitId = validationCommitIdRef.current;
		function updateRegisteredFieldValidity(nextValidityData, externalInvalid = invalid) {
			const fieldId = registeredFieldIdRef.current ?? controlId;
			if (fieldId == null) return;
			const currentFieldData = formRef.current.fields.get(fieldId);
			if (!currentFieldData) return;
			const validityDataWithFormErrors = getCombinedFieldValidityData(nextValidityData, externalInvalid);
			formRef.current.fields.set(fieldId, {
				...currentFieldData,
				validityData: validityDataWithFormErrors
			});
		}
		function makeValidityData(validityState, errorMessages) {
			const errors = validityState.valid === false ? errorMessages : [];
			return {
				value,
				state: validityState,
				error: errors[0] ?? "",
				errors,
				initialValue: validityData.initialValue
			};
		}
		function setCustomValidity(element, message) {
			const displaced = element.validity.customError ? element.validationMessage : "";
			const ownedMessage = message.replace(/\r\n?/g, "\n");
			element.setCustomValidity(ownedMessage);
			customValidityRef.current = [
				element,
				ownedMessage,
				displaced
			];
		}
		function clearCustomValidity() {
			const record = customValidityRef.current;
			customValidityRef.current = null;
			if (record && (!record[0].willValidate || record[0].validationMessage === record[1])) record[0].setCustomValidity(record[2]);
		}
		function publish(validityState, errorMessages, externalInvalid) {
			const nextValidityData = makeValidityData(validityState, errorMessages);
			updateRegisteredFieldValidity(nextValidityData, externalInvalid);
			setValidityData(nextValidityData);
		}
		function getState(el) {
			const computedState = validityKeys.reduce((acc, key) => {
				acc[key] = el.validity[key];
				return acc;
			}, {});
			let hasOnlyValueMissingError = false;
			for (const key of validityKeys) {
				if (key === "valid") continue;
				if (key === "valueMissing" && computedState[key]) hasOnlyValueMissingError = true;
				else if (computedState[key]) return computedState;
			}
			if (hasOnlyValueMissingError && !markedDirtyRef.current) {
				computedState.valid = true;
				computedState.valueMissing = false;
			}
			return computedState;
		}
		function resolveRepresentativeInput() {
			return registeredInputs.size > 0 ? findRepresentativeInput(registeredInputs, elementRef.current) : inputRef.current;
		}
		let element = resolveRepresentativeInput();
		function refreshState() {
			element = resolveRepresentativeInput();
			return element?.willValidate ? getState(element) : makeState(false);
		}
		if (revalidate) {
			if (state.valid !== false || !element) return;
			if (!element.validity.valueMissing) {
				clearCustomValidity();
				const currentElement = resolveRepresentativeInput();
				const foreign = currentElement?.validity.customError ? getNativeErrors(currentElement) : [];
				publish(makeState(foreign.length > 0), foreign, false);
				return;
			}
			for (const key of validityKeys) if (key !== "valid" && key !== "valueMissing" && key !== "customError" && element.validity[key]) return;
		}
		timeout.clear();
		clearCustomValidity();
		let nextState = refreshState();
		let validationErrors = getNativeErrors(element);
		const isValidatingOnChange = shouldValidateOnChange();
		if (validationErrors.length === 0 || isValidatingOnChange) {
			const formValues = Array.from(formRef.current.fields.values()).reduce((acc, field) => {
				if (field.name) acc[field.name] = field.getValue();
				return acc;
			}, {});
			const resultOrPromise = validate(value, formValues);
			let result;
			if (typeof resultOrPromise === "object" && resultOrPromise !== null && "then" in resultOrPromise) {
				if (nextState.valid === false) publish(nextState, validationErrors);
				else if (validationMode === "onSubmit" || !validityData.state.customError) {
					nextState.valid = null;
					publish(nextState, validationErrors);
				}
				result = await resultOrPromise;
				if (validationCommitId !== validationCommitIdRef.current) return;
				nextState = refreshState();
			} else result = resultOrPromise;
			validationErrors = result ? [].concat(result).filter(Boolean) : [];
			if (validationErrors.length > 0) {
				nextState.valid = false;
				nextState.customError = true;
				if (element?.willValidate) setCustomValidity(element, validationErrors.join("\n"));
			} else validationErrors = getNativeErrors(element);
		}
		publish(nextState, validationErrors);
	});
	const change = useStableCallback((value, cancelPending = false) => {
		timeout.clear();
		validationCommitIdRef.current += 1;
		if (cancelPending) return;
		const validateOnChange = shouldValidateOnChange();
		if (validateOnChange && value !== "" && validationDebounceTime) timeout.start(validationDebounceTime, () => {
			commit(value);
		});
		else commit(value, !validateOnChange);
	});
	const getValidationProps = import_react.useCallback((disabled, externalProps = {}) => mergeProps(getDescriptionProps(externalProps), state.valid === false && !state.disabled && !disabled ? { "aria-invalid": true } : EMPTY_OBJECT), [
		getDescriptionProps,
		state.disabled,
		state.valid
	]);
	return import_react.useMemo(() => ({
		getValidationProps,
		inputRef,
		registeredInputs,
		registerInput,
		getInputControl,
		commit,
		change
	}), [
		getValidationProps,
		registeredInputs,
		registerInput,
		getInputControl,
		commit,
		change
	]);
}
var import_react, validityKeys;
function init_useFieldValidation() {
	return (init_useFieldValidation = __esmMin((() => {
		import_react = /* @__PURE__ */ __toESM(require_react(), 1);
		init_empty();
		init_useTimeout();
		init_useStableCallback();
		init_useRefWithInit();
		init_LabelableContext();
		init_mergeProps();
		init_constants();
		init_FormContext();
		validityKeys = Object.keys(DEFAULT_VALIDITY_STATE);
	})))();
}
//#endregion
export { init_getCombinedFieldValidityData as a, getCombinedFieldValidityData as i, isEligibleInput as n, useFieldValidation as r, init_useFieldValidation as t };
