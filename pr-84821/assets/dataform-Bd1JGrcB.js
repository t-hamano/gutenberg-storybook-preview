import { n as __esmMin, o as __toESM } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C1RZKCc6.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { n as use_instance_id_default, t as init_use_instance_id } from "./use-instance-id-BznKyZc1.js";
import { i as useFocusOnMount, r as init_use_focus_on_mount } from "./use-focus-return-DHixTMlK.js";
import { n as useFocusOutside, t as init_use_focus_outside } from "./use-focus-outside-CUKAKz_B.js";
import { n as useMergeRefs, t as init_use_merge_refs } from "./use-merge-refs-BAtuPB1L.js";
import { i as use_dialog_default, r as init_use_dialog } from "./use-viewport-match-DnpS1SpK.js";
import { n as sprintf } from "./sprintf-_uhhbfMc.js";
import { i as _x, n as __, r as _n, t as init_build_module } from "./build-module-v04us4E2.js";
import { a as init_clsx, i as clsx } from "./iframe-Dbjzp1_m.js";
import { n as init_badge, t as Badge } from "./badge-BD5td2Rp.js";
import { r as speak, t as init_build_module$1 } from "./build-module-DsAeWnrG.js";
import { t as close_small_default } from "./close-small-BAxZctqD.js";
import { r as error_default } from "./published-BbWLlA1T.js";
import { n as pencil_default } from "./pencil-HT-eVzJe.js";
import { n as init_visually_hidden, t as VisuallyHidden } from "./visually-hidden-DgPx5QZ4.js";
import { a as Header$2, c as init_root, i as init_content, n as init_title, o as init_header, r as Content, s as Root, t as Title } from "./title-BaVWkKAd.js";
import { a as Header2, c as init_root$1, i as init_header_description, n as init_content$1, o as init_header$1, r as HeaderDescription, s as Root3, t as Content2 } from "./content-aQmjV35y.js";
import { n as init_stack, t as Stack } from "./stack-BHmRFw1F.js";
import { i as require_cjs, r as require_es6 } from "./emotion-css.development.esm-DHgdGHQy.js";
import { n as init_component, t as component_default } from "./component-CLa3e4Ol.js";
import { n as base_control_default, r as init_base_control } from "./base-control-4RJ3L0hf.js";
import { n as init_icon, t as icon_default } from "./icon-BIO3gLKi.js";
import { n as button_default, r as init_button } from "./button-BxEkUQAF.js";
import { n as init_dropdown$1, t as dropdown_default$1 } from "./dropdown-CT5qcp8z.js";
import { n as init_component$1, t as component_default$1 } from "./component-Bvw9DY3y.js";
import { n as modal_default$1, t as init_modal$1 } from "./modal-Bx9yIlBV.js";
import { n as normalizeFields, t as init_field_types } from "./field-types-BKXlRa_Z.js";
import { r as init_build_module$2 } from "./library.story-CFsmdbdz.js";
//#region ../packages/dataviews/build-module/components/dataform-context/index.mjs
function DataFormProvider({ fields, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime$13.jsx)(DataFormContext.Provider, {
		value: { fields },
		children
	});
}
var import_jsx_runtime$13, DataFormContext, dataform_context_default;
function init_dataform_context() {
	return (init_dataform_context = __esmMin((() => {
		init_react();
		import_jsx_runtime$13 = require_jsx_runtime();
		DataFormContext = (0, import_react.createContext)({ fields: [] });
		DataFormContext.displayName = "DataFormContext";
		dataform_context_default = DataFormContext;
	})))();
}
//#endregion
//#region ../packages/dataviews/build-module/components/dataform-layouts/can-render-field.mjs
function canRenderField(field) {
	return !!field && (field.readOnly === true || !!field.Edit);
}
//#endregion
//#region ../packages/dataviews/build-module/components/dataform-layouts/normalize-form.mjs
function normalizeLayout(layout) {
	let normalizedLayout = DEFAULT_LAYOUT;
	if (layout?.type === "regular") normalizedLayout = {
		type: "regular",
		labelPosition: layout?.labelPosition ?? "top"
	};
	else if (layout?.type === "panel") {
		const summary = layout.summary ?? [];
		const normalizedSummary = Array.isArray(summary) ? summary : [summary];
		const openAs = layout?.openAs;
		let normalizedOpenAs;
		if (typeof openAs === "object" && openAs.type === "modal") normalizedOpenAs = {
			type: "modal",
			applyLabel: openAs.applyLabel?.trim() || __("Apply"),
			cancelLabel: openAs.cancelLabel?.trim() || __("Cancel")
		};
		else if (openAs === "modal") normalizedOpenAs = {
			type: "modal",
			applyLabel: __("Apply"),
			cancelLabel: __("Cancel")
		};
		else normalizedOpenAs = { type: "dropdown" };
		normalizedLayout = {
			type: "panel",
			labelPosition: layout?.labelPosition ?? "side",
			openAs: normalizedOpenAs,
			summary: normalizedSummary,
			editVisibility: layout?.editVisibility ?? "on-hover",
			showPlaceholderIfEmpty: layout?.showPlaceholderIfEmpty ?? false
		};
	} else if (layout?.type === "card") {
		if (layout.withHeader === false) normalizedLayout = {
			type: "card",
			withHeader: false,
			isOpened: true,
			summary: [],
			isCollapsible: false
		};
		else {
			const summary = layout.summary ?? [];
			normalizedLayout = {
				type: "card",
				withHeader: true,
				isOpened: typeof layout.isOpened === "boolean" ? layout.isOpened : true,
				summary: normalizeCardSummaryField(summary),
				isCollapsible: layout.isCollapsible === void 0 ? true : layout.isCollapsible
			};
		}
	} else if (layout?.type === "row") normalizedLayout = {
		type: "row",
		alignment: layout?.alignment ?? "center",
		styles: layout?.styles ?? {}
	};
	else if (layout?.type === "details") normalizedLayout = {
		type: "details",
		summary: layout?.summary ?? ""
	};
	return normalizedLayout;
}
function normalizeForm(form) {
	const normalizedFormLayout = normalizeLayout(form?.layout);
	return {
		layout: normalizedFormLayout,
		fields: (form.fields ?? []).map((field) => {
			if (typeof field === "string") return {
				id: field,
				layout: normalizedFormLayout
			};
			const fieldLayout = field.layout ? normalizeLayout(field.layout) : normalizedFormLayout;
			return {
				id: field.id,
				layout: fieldLayout,
				...!!field.label && { label: field.label },
				...!!field.description && { description: field.description },
				..."children" in field && Array.isArray(field.children) && { children: normalizeForm({
					fields: field.children,
					layout: DEFAULT_LAYOUT
				}).fields }
			};
		})
	};
}
var DEFAULT_LAYOUT, normalizeCardSummaryField, normalize_form_default;
function init_normalize_form() {
	return (init_normalize_form = __esmMin((() => {
		init_build_module();
		DEFAULT_LAYOUT = {
			type: "regular",
			labelPosition: "top"
		};
		normalizeCardSummaryField = (sum) => {
			if (typeof sum === "string") return [{
				id: sum,
				visibility: "when-collapsed"
			}];
			return sum.map((item) => {
				if (typeof item === "string") return {
					id: item,
					visibility: "when-collapsed"
				};
				return {
					id: item.id,
					visibility: item.visibility
				};
			});
		};
		normalize_form_default = normalizeForm;
	})))();
}
//#endregion
//#region ../packages/dataviews/build-module/components/dataform-layouts/regular/index.mjs
function Header$1({ title }) {
	return /* @__PURE__ */ (0, import_jsx_runtime$12.jsx)(Stack, {
		direction: "column",
		className: "dataforms-layouts-regular__header",
		gap: "lg",
		children: /* @__PURE__ */ (0, import_jsx_runtime$12.jsx)(Stack, {
			direction: "row",
			align: "center",
			children: /* @__PURE__ */ (0, import_jsx_runtime$12.jsx)(component_default$1, {
				level: 2,
				size: 13,
				children: title
			})
		})
	});
}
function FormRegularField({ data, field, onChange, hideLabelFromVision, markWhenOptional, validity }) {
	const { fields } = (0, import_react.useContext)(dataform_context_default);
	const layout = field.layout;
	const form = (0, import_react.useMemo)(() => ({
		layout: DEFAULT_LAYOUT,
		fields: !!field.children ? field.children : []
	}), [field]);
	if (!!field.children) return /* @__PURE__ */ (0, import_jsx_runtime$12.jsxs)(import_jsx_runtime$12.Fragment, { children: [!hideLabelFromVision && field.label && /* @__PURE__ */ (0, import_jsx_runtime$12.jsx)(Header$1, { title: field.label }), /* @__PURE__ */ (0, import_jsx_runtime$12.jsx)(DataFormLayout, {
		data,
		form,
		onChange,
		validity: validity?.children
	})] });
	const labelPosition = layout.labelPosition;
	const fieldDefinition = fields.find((fieldDef) => fieldDef.id === field.id);
	if (!canRenderField(fieldDefinition)) return null;
	if (labelPosition === "side") return /* @__PURE__ */ (0, import_jsx_runtime$12.jsxs)(Stack, {
		direction: "row",
		className: "dataforms-layouts-regular__field",
		gap: "sm",
		children: [/* @__PURE__ */ (0, import_jsx_runtime$12.jsx)("div", {
			className: clsx("dataforms-layouts-regular__field-label", `dataforms-layouts-regular__field-label--label-position-${labelPosition}`),
			children: /* @__PURE__ */ (0, import_jsx_runtime$12.jsx)(base_control_default.VisualLabel, { children: fieldDefinition.label })
		}), /* @__PURE__ */ (0, import_jsx_runtime$12.jsx)("div", {
			className: "dataforms-layouts-regular__field-control",
			children: fieldDefinition.readOnly === true ? /* @__PURE__ */ (0, import_jsx_runtime$12.jsx)(fieldDefinition.render, {
				item: data,
				field: fieldDefinition
			}) : fieldDefinition.Edit && /* @__PURE__ */ (0, import_jsx_runtime$12.jsx)(fieldDefinition.Edit, {
				data,
				field: fieldDefinition,
				onChange,
				hideLabelFromVision: true,
				markWhenOptional,
				validity
			}, fieldDefinition.id)
		})]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime$12.jsx)("div", {
		className: "dataforms-layouts-regular__field",
		children: fieldDefinition.readOnly === true ? /* @__PURE__ */ (0, import_jsx_runtime$12.jsx)(import_jsx_runtime$12.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime$12.jsxs)(import_jsx_runtime$12.Fragment, { children: [!hideLabelFromVision && labelPosition !== "none" && /* @__PURE__ */ (0, import_jsx_runtime$12.jsx)(base_control_default.VisualLabel, { children: fieldDefinition.label }), /* @__PURE__ */ (0, import_jsx_runtime$12.jsx)(fieldDefinition.render, {
			item: data,
			field: fieldDefinition
		})] }) }) : fieldDefinition.Edit && /* @__PURE__ */ (0, import_jsx_runtime$12.jsx)(fieldDefinition.Edit, {
			data,
			field: fieldDefinition,
			onChange,
			hideLabelFromVision: labelPosition === "none" ? true : hideLabelFromVision,
			markWhenOptional,
			validity
		})
	});
}
var import_jsx_runtime$12;
function init_regular() {
	return (init_regular = __esmMin((() => {
		init_clsx();
		init_react();
		init_component$1(), init_base_control();
		init_stack();
		init_dataform_context();
		init_data_form_layout();
		init_normalize_form();
		import_jsx_runtime$12 = require_jsx_runtime();
	})))();
}
//#endregion
//#region ../packages/dataviews/build-module/components/dataform-layouts/panel/utils/get-label-classname.mjs
function getLabelClassName(labelPosition, showError) {
	return clsx("dataforms-layouts-panel__field-label", `dataforms-layouts-panel__field-label--label-position-${labelPosition}`, { "has-error": showError });
}
var get_label_classname_default;
function init_get_label_classname() {
	return (init_get_label_classname = __esmMin((() => {
		init_clsx();
		get_label_classname_default = getLabelClassName;
	})))();
}
//#endregion
//#region ../packages/dataviews/build-module/components/dataform-layouts/panel/field-label-content.mjs
function FieldLabelContent({ showError, errorMessage, fieldLabel, errorId }) {
	if (!showError) return /* @__PURE__ */ (0, import_jsx_runtime$11.jsx)(import_jsx_runtime$11.Fragment, { children: fieldLabel });
	return /* @__PURE__ */ (0, import_jsx_runtime$11.jsxs)("span", {
		className: "dataforms-layouts-panel__field-label-error-content",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime$11.jsx)(icon_default, {
				icon: error_default,
				size: 16
			}),
			/* @__PURE__ */ (0, import_jsx_runtime$11.jsx)(VisuallyHidden, {
				id: errorId,
				children: errorMessage
			}),
			fieldLabel
		]
	});
}
var import_jsx_runtime$11, field_label_content_default;
function init_field_label_content() {
	return (init_field_label_content = __esmMin((() => {
		init_icon();
		init_build_module$2();
		init_visually_hidden();
		import_jsx_runtime$11 = require_jsx_runtime();
		field_label_content_default = FieldLabelContent;
	})))();
}
//#endregion
//#region ../packages/dataviews/build-module/components/dataform-layouts/panel/utils/get-first-validation-error.mjs
function getFirstValidationError(validity) {
	if (!validity) return;
	const validityRules = Object.keys(validity).filter((key) => key !== "children");
	for (const key of validityRules) {
		const rule = validity[key];
		if (rule === void 0) continue;
		if (rule.type === "invalid") {
			if (rule.message) return rule.message;
			if (key === "required") return "A required field is empty";
			return "Unidentified validation error";
		}
	}
	if (validity.children) for (const childValidity of Object.values(validity.children)) {
		const childError = getFirstValidationError(childValidity);
		if (childError) return childError;
	}
}
var get_first_validation_error_default;
function init_get_first_validation_error() {
	return (init_get_first_validation_error = __esmMin((() => {
		get_first_validation_error_default = getFirstValidationError;
	})))();
}
//#endregion
//#region ../packages/dataviews/build-module/components/dataform-layouts/panel/summary-button.mjs
function SummaryValue({ item, field, showPlaceholderIfEmpty }) {
	if (showPlaceholderIfEmpty && field.placeholder && [
		void 0,
		null,
		""
	].includes(field.getValue({ item }))) return /* @__PURE__ */ (0, import_jsx_runtime$10.jsx)("span", {
		className: "dataforms-layouts-panel__field-placeholder",
		children: field.placeholder
	});
	return /* @__PURE__ */ (0, import_jsx_runtime$10.jsx)(field.render, {
		item,
		field
	});
}
function SummaryButton({ data, field, fieldLabel, summaryFields, validity, touched, disabled, isOpen, onClick }) {
	const { labelPosition, editVisibility, showPlaceholderIfEmpty } = field.layout;
	const errorMessage = get_first_validation_error_default(validity);
	const showError = touched && !!errorMessage;
	const labelClassName = get_label_classname_default(labelPosition, showError);
	const className = clsx("dataforms-layouts-panel__field-trigger", `dataforms-layouts-panel__field-trigger--label-${labelPosition}`, {
		"is-disabled": disabled,
		"dataforms-layouts-panel__field-trigger--edit-always": editVisibility === "always"
	});
	const controlId = use_instance_id_default(SummaryButton, "dataforms-layouts-panel__field-control");
	const errorId = `${controlId}-error`;
	const ariaLabel = showError ? sprintf(_x("Edit %s (has errors)", "field"), fieldLabel || "") : sprintf(_x("Edit %s", "field"), fieldLabel || "");
	return /* @__PURE__ */ (0, import_jsx_runtime$10.jsxs)("div", {
		className,
		children: [
			labelPosition !== "none" && /* @__PURE__ */ (0, import_jsx_runtime$10.jsx)("span", {
				className: labelClassName,
				children: /* @__PURE__ */ (0, import_jsx_runtime$10.jsx)(field_label_content_default, {
					showError,
					errorMessage,
					fieldLabel,
					errorId
				})
			}),
			labelPosition === "none" && showError && /* @__PURE__ */ (0, import_jsx_runtime$10.jsx)(field_label_content_default, {
				showError: true,
				errorMessage,
				errorId
			}),
			/* @__PURE__ */ (0, import_jsx_runtime$10.jsx)("span", {
				id: `${controlId}`,
				className: "dataforms-layouts-panel__field-control",
				children: summaryFields.length > 1 ? /* @__PURE__ */ (0, import_jsx_runtime$10.jsx)("span", {
					style: {
						display: "flex",
						flexDirection: "column",
						alignItems: "flex-start",
						width: "100%",
						gap: "2px"
					},
					children: summaryFields.map((summaryField) => /* @__PURE__ */ (0, import_jsx_runtime$10.jsx)("span", {
						style: { width: "100%" },
						children: /* @__PURE__ */ (0, import_jsx_runtime$10.jsx)(SummaryValue, {
							item: data,
							field: summaryField,
							showPlaceholderIfEmpty
						})
					}, summaryField.id))
				}) : summaryFields.map((summaryField) => /* @__PURE__ */ (0, import_jsx_runtime$10.jsx)(SummaryValue, {
					item: data,
					field: summaryField,
					showPlaceholderIfEmpty
				}, summaryField.id))
			}),
			!disabled && /* @__PURE__ */ (0, import_jsx_runtime$10.jsx)(button_default, {
				className: "dataforms-layouts-panel__field-trigger-icon",
				label: ariaLabel,
				icon: pencil_default,
				size: "small",
				"aria-expanded": isOpen,
				"aria-haspopup": "dialog",
				"aria-describedby": showError ? `${controlId} ${errorId}` : controlId,
				onClick
			})
		]
	});
}
var import_jsx_runtime$10;
function init_summary_button() {
	return (init_summary_button = __esmMin((() => {
		init_clsx();
		init_button();
		init_build_module();
		init_build_module$2();
		init_use_instance_id();
		init_get_label_classname();
		init_field_label_content();
		init_get_first_validation_error();
		import_jsx_runtime$10 = require_jsx_runtime();
	})))();
}
//#endregion
//#region ../packages/dataviews/build-module/hooks/use-form-validity.mjs
function isFormValid(formValidity) {
	if (!formValidity) return true;
	return Object.values(formValidity).every((fieldValidation) => {
		return Object.entries(fieldValidation).every(([key, validation]) => {
			if (key === "children" && validation && typeof validation === "object") return isFormValid(validation);
			return validation.type !== "invalid" && validation.type !== "validating";
		});
	});
}
function getFormFieldsToValidate(form, fields) {
	const normalizedForm = normalize_form_default(form);
	if (normalizedForm.fields.length === 0) return [];
	const fieldsMap = /* @__PURE__ */ new Map();
	fields.forEach((field) => {
		fieldsMap.set(field.id, field);
	});
	function processFormField(formField) {
		if ("children" in formField && Array.isArray(formField.children)) {
			const processedChildren = formField.children.map(processFormField).filter((child) => child !== null);
			if (processedChildren.length === 0) return null;
			return {
				id: formField.id,
				children: processedChildren
			};
		}
		const fieldDef = fieldsMap.get(formField.id);
		if (!fieldDef) return null;
		const [normalizedField] = normalizeFields([fieldDef]);
		return {
			id: formField.id,
			children: [],
			field: normalizedField
		};
	}
	return normalizedForm.fields.map(processFormField).filter((field) => field !== null);
}
function setValidityAtPath(formValidity, fieldValidity, path) {
	if (!formValidity) formValidity = {};
	if (path.length === 0) return formValidity;
	const result = { ...formValidity };
	let current = result;
	for (let i = 0; i < path.length - 1; i++) {
		const segment = path[i];
		if (!current[segment]) current[segment] = {};
		current[segment] = { ...current[segment] };
		current = current[segment];
	}
	const finalKey = path[path.length - 1];
	current[finalKey] = {
		...current[finalKey] || {},
		...fieldValidity
	};
	return result;
}
function removeValidationProperty(formValidity, path, property) {
	if (!formValidity || path.length === 0) return formValidity;
	const result = { ...formValidity };
	let current = result;
	for (let i = 0; i < path.length - 1; i++) {
		const segment = path[i];
		if (!current[segment]) return formValidity;
		current[segment] = { ...current[segment] };
		current = current[segment];
	}
	const finalKey = path[path.length - 1];
	if (!current[finalKey]) return formValidity;
	const fieldValidity = { ...current[finalKey] };
	delete fieldValidity[property];
	if (Object.keys(fieldValidity).length === 0) delete current[finalKey];
	else current[finalKey] = fieldValidity;
	if (Object.keys(result).length === 0) return;
	return result;
}
function handleElementsValidationAsync(promise, formField, promiseHandler) {
	const { elementsCounterRef, setFormValidity, path, item } = promiseHandler;
	const currentToken = (elementsCounterRef.current[formField.id] || 0) + 1;
	elementsCounterRef.current[formField.id] = currentToken;
	promise.then((result) => {
		if (currentToken !== elementsCounterRef.current[formField.id]) return;
		if (!Array.isArray(result)) {
			setFormValidity((prev) => {
				return setValidityAtPath(prev, { elements: {
					type: "invalid",
					message: __("Could not validate elements.")
				} }, [...path, formField.id]);
			});
			return;
		}
		if (formField.field?.isValid.elements && !formField.field.isValid.elements.validate(item, {
			...formField.field,
			elements: result
		})) setFormValidity((prev) => {
			return setValidityAtPath(prev, { elements: {
				type: "invalid",
				message: __("Value must be one of the elements.")
			} }, [...path, formField.id]);
		});
		else setFormValidity((prev) => {
			return removeValidationProperty(prev, [...path, formField.id], "elements");
		});
	}).catch((error) => {
		if (currentToken !== elementsCounterRef.current[formField.id]) return;
		let errorMessage;
		if (error instanceof Error) errorMessage = error.message;
		else errorMessage = String(error) || __("Unknown error when running elements validation asynchronously.");
		setFormValidity((prev) => {
			return setValidityAtPath(prev, { elements: {
				type: "invalid",
				message: errorMessage
			} }, [...path, formField.id]);
		});
	});
}
function handleCustomValidationAsync(promise, formField, promiseHandler) {
	const { customCounterRef, setFormValidity, path } = promiseHandler;
	const currentToken = (customCounterRef.current[formField.id] || 0) + 1;
	customCounterRef.current[formField.id] = currentToken;
	promise.then((result) => {
		if (currentToken !== customCounterRef.current[formField.id]) return;
		if (result === null) {
			setFormValidity((prev) => {
				return removeValidationProperty(prev, [...path, formField.id], "custom");
			});
			return;
		}
		if (typeof result === "string") {
			setFormValidity((prev) => {
				return setValidityAtPath(prev, { custom: {
					type: "invalid",
					message: result
				} }, [...path, formField.id]);
			});
			return;
		}
		setFormValidity((prev) => {
			return setValidityAtPath(prev, { custom: {
				type: "invalid",
				message: __("Validation could not be processed.")
			} }, [...path, formField.id]);
		});
	}).catch((error) => {
		if (currentToken !== customCounterRef.current[formField.id]) return;
		let errorMessage;
		if (error instanceof Error) errorMessage = error.message;
		else errorMessage = String(error) || __("Unknown error when running custom validation asynchronously.");
		setFormValidity((prev) => {
			return setValidityAtPath(prev, { custom: {
				type: "invalid",
				message: errorMessage
			} }, [...path, formField.id]);
		});
	});
}
function isFormFieldHidden(formField, item) {
	return formField.children.length === 0 && !!formField.field?.isVisible && !formField.field.isVisible(item);
}
function validateFormField(item, formField, promiseHandler) {
	if (isFormFieldHidden(formField, item)) {
		const { customCounterRef, elementsCounterRef } = promiseHandler;
		if (customCounterRef.current[formField.id]) customCounterRef.current[formField.id] += 1;
		if (elementsCounterRef.current[formField.id]) elementsCounterRef.current[formField.id] += 1;
		return;
	}
	if (formField.field?.isValid.required && !formField.field.isValid.required.validate(item, formField.field)) return { required: { type: "invalid" } };
	if (formField.field?.isValid.pattern && !formField.field.isValid.pattern.validate(item, formField.field)) return { pattern: {
		type: "invalid",
		message: __("Value does not match the required pattern.")
	} };
	if (formField.field?.isValid.min && !formField.field.isValid.min.validate(item, formField.field)) return { min: {
		type: "invalid",
		message: __("Value is below the minimum.")
	} };
	if (formField.field?.isValid.max && !formField.field.isValid.max.validate(item, formField.field)) return { max: {
		type: "invalid",
		message: __("Value is above the maximum.")
	} };
	if (formField.field?.isValid.minLength && !formField.field.isValid.minLength.validate(item, formField.field)) return { minLength: {
		type: "invalid",
		message: __("Value is too short.")
	} };
	if (formField.field?.isValid.maxLength && !formField.field.isValid.maxLength.validate(item, formField.field)) return { maxLength: {
		type: "invalid",
		message: __("Value is too long.")
	} };
	if (formField.field?.isValid.elements && formField.field.hasElements && !formField.field.getElements && Array.isArray(formField.field.elements) && !formField.field.isValid.elements.validate(item, formField.field)) return { elements: {
		type: "invalid",
		message: __("Value must be one of the elements.")
	} };
	let customError;
	if (!!formField.field && formField.field.isValid.custom) try {
		const value = formField.field.getValue({ item });
		customError = formField.field.isValid.custom((0, import_cjs$1.default)(item, formField.field.setValue({
			item,
			value
		})), formField.field);
	} catch (error) {
		let errorMessage;
		if (error instanceof Error) errorMessage = error.message;
		else errorMessage = String(error) || __("Unknown error when running custom validation.");
		return { custom: {
			type: "invalid",
			message: errorMessage
		} };
	}
	if (typeof customError === "string") return { custom: {
		type: "invalid",
		message: customError
	} };
	const fieldValidity = {};
	if (!!formField.field && formField.field.isValid.elements && formField.field.hasElements && typeof formField.field.getElements === "function") {
		handleElementsValidationAsync(formField.field.getElements(), formField, promiseHandler);
		fieldValidity.elements = {
			type: "validating",
			message: __("Validating…")
		};
	}
	if (customError instanceof Promise) {
		handleCustomValidationAsync(customError, formField, promiseHandler);
		fieldValidity.custom = {
			type: "validating",
			message: __("Validating…")
		};
	}
	if (Object.keys(fieldValidity).length > 0) return fieldValidity;
	if (formField.children.length > 0) {
		const result = {};
		formField.children.forEach((child) => {
			result[child.id] = validateFormField(item, child, {
				...promiseHandler,
				path: [
					...promiseHandler.path,
					formField.id,
					"children"
				]
			});
		});
		const filteredResult = {};
		Object.entries(result).forEach(([key, value]) => {
			if (value !== void 0) filteredResult[key] = value;
		});
		if (Object.keys(filteredResult).length === 0) return;
		return { children: filteredResult };
	}
}
function getFormFieldValue(formField, item) {
	const fieldValue = formField?.field?.getValue({ item });
	const isHidden = isFormFieldHidden(formField, item);
	if (formField.children.length === 0) return {
		value: fieldValue,
		isHidden
	};
	return {
		value: fieldValue,
		isHidden,
		children: formField.children.map((child) => getFormFieldValue(child, item))
	};
}
function useFormValidity(item, fields, form) {
	const [formValidity, setFormValidity] = (0, import_react.useState)();
	const customCounterRef = (0, import_react.useRef)({});
	const elementsCounterRef = (0, import_react.useRef)({});
	const previousValuesRef = (0, import_react.useRef)({});
	const validate = (0, import_react.useCallback)(() => {
		const promiseHandler = {
			customCounterRef,
			elementsCounterRef,
			setFormValidity,
			path: [],
			item
		};
		const formFieldsToValidate = getFormFieldsToValidate(form, fields);
		if (formFieldsToValidate.length === 0) {
			setFormValidity(void 0);
			return;
		}
		const newFormValidity = {};
		const untouchedFields = [];
		formFieldsToValidate.forEach((formField) => {
			const value = getFormFieldValue(formField, item);
			if (previousValuesRef.current.hasOwnProperty(formField.id) && (0, import_es6.default)(previousValuesRef.current[formField.id], value)) {
				untouchedFields.push(formField.id);
				return;
			}
			previousValuesRef.current[formField.id] = value;
			const fieldValidity = validateFormField(item, formField, promiseHandler);
			if (fieldValidity !== void 0) newFormValidity[formField.id] = fieldValidity;
		});
		setFormValidity((existingFormValidity) => {
			let validity = {
				...existingFormValidity,
				...newFormValidity
			};
			const fieldsToKeep = [...untouchedFields, ...Object.keys(newFormValidity)];
			Object.keys(validity).forEach((key) => {
				if (validity && !fieldsToKeep.includes(key)) delete validity[key];
			});
			if (Object.keys(validity).length === 0) validity = void 0;
			if ((0, import_es6.default)(existingFormValidity, validity)) return existingFormValidity;
			return validity;
		});
	}, [
		item,
		fields,
		form
	]);
	(0, import_react.useEffect)(() => {
		validate();
	}, [validate]);
	return {
		validity: formValidity,
		isValid: isFormValid(formValidity)
	};
}
var import_cjs$1, import_es6, use_form_validity_default;
function init_use_form_validity() {
	return (init_use_form_validity = __esmMin((() => {
		import_cjs$1 = /* @__PURE__ */ __toESM(require_cjs(), 1);
		import_es6 = /* @__PURE__ */ __toESM(require_es6(), 1);
		init_react();
		init_build_module();
		init_field_types();
		init_normalize_form();
		use_form_validity_default = useFormValidity;
	})))();
}
//#endregion
//#region ../packages/dataviews/build-module/hooks/use-reveal-validity.mjs
function useRevealValidity(ref, shouldReveal) {
	const revealValidity = (0, import_react.useCallback)(() => {
		const inputs = ref.current?.querySelectorAll("input, textarea, select");
		let revealedCount = 0;
		inputs?.forEach((input) => {
			if (input.willValidate && !input.validity.valid) {
				revealedCount++;
				input.dispatchEvent(new Event("invalid", { cancelable: true }));
			}
		});
		return revealedCount;
	}, [ref]);
	(0, import_react.useEffect)(() => {
		if (shouldReveal) revealValidity();
	}, [shouldReveal, revealValidity]);
	return revealValidity;
}
function init_use_reveal_validity() {
	return (init_use_reveal_validity = __esmMin((() => {
		init_react();
	})))();
}
//#endregion
//#region ../packages/dataviews/build-module/components/dataform-layouts/get-summary-fields.mjs
function extractSummaryIds(summary) {
	if (Array.isArray(summary)) return summary.map((item) => typeof item === "string" ? item : item.id);
	return [];
}
var getSummaryFields;
function init_get_summary_fields() {
	return (init_get_summary_fields = __esmMin((() => {
		getSummaryFields = (summaryField, fields) => {
			if (Array.isArray(summaryField) && summaryField.length > 0) return extractSummaryIds(summaryField).map((summaryId) => fields.find((_field) => _field.id === summaryId)).filter((_field) => _field !== void 0);
			return [];
		};
	})))();
}
//#endregion
//#region ../packages/dataviews/build-module/components/dataform-layouts/panel/utils/use-field-from-form-field.mjs
function useFieldFromFormField(field) {
	const { fields } = (0, import_react.useContext)(dataform_context_default);
	const layout = field.layout;
	const summaryFields = getSummaryFields(layout.summary, fields);
	const fieldDefinition = getFieldDefinition(field, fields);
	const fieldLabel = !!field.children ? field.label : fieldDefinition?.label;
	if (summaryFields.length === 0) return {
		summaryFields: fieldDefinition ? [fieldDefinition] : [],
		fieldDefinition,
		fieldLabel
	};
	return {
		summaryFields,
		fieldDefinition,
		fieldLabel
	};
}
var getFieldDefinition, use_field_from_form_field_default;
function init_use_field_from_form_field() {
	return (init_use_field_from_form_field = __esmMin((() => {
		init_react();
		init_get_summary_fields();
		init_dataform_context();
		getFieldDefinition = (field, fields) => {
			if (!!field.children) {
				const simpleChildren = field.children.filter((child) => !child.children);
				if (simpleChildren.length === 0) return;
				return fields.find((_field) => _field.id === simpleChildren[0].id);
			}
			return fields.find((_field) => _field.id === field.id);
		};
		use_field_from_form_field_default = useFieldFromFormField;
	})))();
}
//#endregion
//#region ../packages/dataviews/build-module/components/dataform-layouts/panel/modal.mjs
function ModalContent({ data, field, onChange, fieldLabel, onClose, touched }) {
	const { openAs } = field.layout;
	const { applyLabel, cancelLabel } = openAs;
	const { fields } = (0, import_react.useContext)(dataform_context_default);
	const [changes, setChanges] = (0, import_react.useState)({});
	const modalData = (0, import_react.useMemo)(() => {
		return (0, import_cjs.default)(data, changes, { arrayMerge: (target, source) => source });
	}, [data, changes]);
	const form = (0, import_react.useMemo)(() => ({
		layout: DEFAULT_LAYOUT,
		fields: !!field.children ? field.children : [{
			id: field.id,
			layout: DEFAULT_LAYOUT
		}]
	}), [field]);
	const fieldsAsFieldType = fields.map((f) => ({
		...f,
		Edit: f.Edit === null ? void 0 : f.Edit,
		isValid: {
			required: f.isValid.required?.constraint,
			elements: f.isValid.elements?.constraint,
			min: f.isValid.min?.constraint,
			max: f.isValid.max?.constraint,
			pattern: f.isValid.pattern?.constraint,
			minLength: f.isValid.minLength?.constraint,
			maxLength: f.isValid.maxLength?.constraint
		}
	}));
	const { validity } = use_form_validity_default(modalData, fieldsAsFieldType, form);
	const onApply = () => {
		onChange(changes);
		onClose();
	};
	const handleOnChange = (newValue) => {
		setChanges((prev) => (0, import_cjs.default)(prev, newValue, { arrayMerge: (target, source) => source }));
	};
	const focusOnMountRef = useFocusOnMount("firstInputElement");
	const contentRef = (0, import_react.useRef)(null);
	const mergedRef = useMergeRefs([focusOnMountRef, contentRef]);
	useRevealValidity(contentRef, touched);
	return /* @__PURE__ */ (0, import_jsx_runtime$9.jsxs)(modal_default$1, {
		className: "dataforms-layouts-panel__modal",
		onRequestClose: onClose,
		isFullScreen: false,
		title: fieldLabel,
		size: "medium",
		children: [/* @__PURE__ */ (0, import_jsx_runtime$9.jsx)("div", {
			ref: mergedRef,
			children: /* @__PURE__ */ (0, import_jsx_runtime$9.jsx)(DataFormLayout, {
				data: modalData,
				form,
				onChange: handleOnChange,
				validity,
				children: (FieldLayout, childField, childFieldValidity, markWhenOptional) => /* @__PURE__ */ (0, import_jsx_runtime$9.jsx)(FieldLayout, {
					data: modalData,
					field: childField,
					onChange: handleOnChange,
					hideLabelFromVision: form.fields.length < 2,
					markWhenOptional,
					validity: childFieldValidity
				}, childField.id)
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime$9.jsxs)(Stack, {
			direction: "row",
			className: "dataforms-layouts-panel__modal-footer",
			gap: "md",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime$9.jsx)(component_default, { style: { flex: 1 } }),
				/* @__PURE__ */ (0, import_jsx_runtime$9.jsx)(button_default, {
					variant: "tertiary",
					onClick: onClose,
					__next40pxDefaultSize: true,
					children: cancelLabel
				}),
				/* @__PURE__ */ (0, import_jsx_runtime$9.jsx)(button_default, {
					variant: "primary",
					onClick: onApply,
					__next40pxDefaultSize: true,
					children: applyLabel
				})
			]
		})]
	});
}
function PanelModal({ data, field, onChange, validity }) {
	const [touched, setTouched] = (0, import_react.useState)(false);
	const [isOpen, setIsOpen] = (0, import_react.useState)(false);
	const { fieldDefinition, fieldLabel, summaryFields } = use_field_from_form_field_default(field);
	if (!fieldDefinition) return null;
	const isDisabled = fieldDefinition.readOnly === true || fieldDefinition.isDisabled({
		item: data,
		field: fieldDefinition
	});
	const handleClose = () => {
		setIsOpen(false);
		setTouched(true);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime$9.jsxs)(import_jsx_runtime$9.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime$9.jsx)(SummaryButton, {
		data,
		field,
		fieldLabel,
		summaryFields,
		validity,
		touched,
		disabled: isDisabled,
		onClick: () => setIsOpen(true),
		isOpen
	}), isOpen && /* @__PURE__ */ (0, import_jsx_runtime$9.jsx)(ModalContent, {
		data,
		field,
		onChange,
		fieldLabel: fieldLabel ?? "",
		onClose: handleClose,
		touched
	})] });
}
var import_cjs, import_jsx_runtime$9, modal_default;
function init_modal() {
	return (init_modal = __esmMin((() => {
		import_cjs = /* @__PURE__ */ __toESM(require_cjs(), 1);
		init_component(), init_button(), init_modal$1();
		init_react();
		init_use_focus_on_mount(), init_use_merge_refs();
		init_stack();
		init_data_form_layout();
		init_normalize_form();
		init_summary_button();
		init_use_form_validity();
		init_use_reveal_validity();
		init_dataform_context();
		init_use_field_from_form_field();
		import_jsx_runtime$9 = require_jsx_runtime();
		modal_default = PanelModal;
	})))();
}
//#endregion
//#region ../packages/dataviews/build-module/components/dataform-layouts/panel/dropdown.mjs
function DropdownHeader({ title, onClose }) {
	return /* @__PURE__ */ (0, import_jsx_runtime$8.jsx)(Stack, {
		direction: "column",
		className: "dataforms-layouts-panel__dropdown-header",
		gap: "lg",
		children: /* @__PURE__ */ (0, import_jsx_runtime$8.jsxs)(Stack, {
			direction: "row",
			gap: "sm",
			align: "center",
			children: [
				title && /* @__PURE__ */ (0, import_jsx_runtime$8.jsx)(component_default$1, {
					level: 2,
					size: 13,
					children: title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime$8.jsx)(component_default, { style: { flex: 1 } }),
				onClose && /* @__PURE__ */ (0, import_jsx_runtime$8.jsx)(button_default, {
					label: __("Close"),
					icon: close_small_default,
					onClick: onClose,
					size: "small"
				})
			]
		})
	});
}
function DropdownContentWithValidation({ touched, children }) {
	const ref = (0, import_react.useRef)(null);
	useRevealValidity(ref, touched);
	return /* @__PURE__ */ (0, import_jsx_runtime$8.jsx)("div", {
		ref,
		children
	});
}
function PanelDropdown({ data, field, onChange, validity }) {
	const [touched, setTouched] = (0, import_react.useState)(false);
	const [popoverAnchor, setPopoverAnchor] = (0, import_react.useState)(null);
	const popoverProps = (0, import_react.useMemo)(() => ({
		anchor: popoverAnchor,
		placement: "left-start",
		offset: 36,
		shift: true
	}), [popoverAnchor]);
	const [dialogRef, dialogProps] = use_dialog_default({ focusOnMount: "firstInputElement" });
	const form = (0, import_react.useMemo)(() => ({
		layout: DEFAULT_LAYOUT,
		fields: !!field.children ? field.children : [{
			id: field.id,
			layout: DEFAULT_LAYOUT
		}]
	}), [field]);
	const formValidity = (0, import_react.useMemo)(() => {
		if (validity === void 0) return;
		if (!!field.children) return validity?.children;
		return { [field.id]: validity };
	}, [validity, field]);
	const { fieldDefinition, fieldLabel, summaryFields } = use_field_from_form_field_default(field);
	if (!fieldDefinition) return null;
	const isDisabled = fieldDefinition.readOnly === true || fieldDefinition.isDisabled({
		item: data,
		field: fieldDefinition
	});
	return /* @__PURE__ */ (0, import_jsx_runtime$8.jsx)("div", {
		ref: setPopoverAnchor,
		className: "dataforms-layouts-panel__field-dropdown-anchor",
		children: /* @__PURE__ */ (0, import_jsx_runtime$8.jsx)(dropdown_default$1, {
			contentClassName: "dataforms-layouts-panel__field-dropdown",
			popoverProps,
			focusOnMount: false,
			onToggle: (willOpen) => {
				if (!willOpen) setTouched(true);
			},
			renderToggle: ({ isOpen, onToggle }) => /* @__PURE__ */ (0, import_jsx_runtime$8.jsx)(SummaryButton, {
				data,
				field,
				fieldLabel,
				summaryFields,
				validity,
				touched,
				disabled: isDisabled,
				isOpen,
				onClick: onToggle
			}),
			renderContent: ({ onClose }) => /* @__PURE__ */ (0, import_jsx_runtime$8.jsx)(DropdownContentWithValidation, {
				touched,
				children: /* @__PURE__ */ (0, import_jsx_runtime$8.jsxs)("div", {
					ref: dialogRef,
					...dialogProps,
					children: [/* @__PURE__ */ (0, import_jsx_runtime$8.jsx)(DropdownHeader, {
						title: fieldLabel,
						onClose
					}), /* @__PURE__ */ (0, import_jsx_runtime$8.jsx)(DataFormLayout, {
						data,
						form,
						onChange,
						validity: formValidity,
						children: (FieldLayout, childField, childFieldValidity, markWhenOptional) => /* @__PURE__ */ (0, import_jsx_runtime$8.jsx)(FieldLayout, {
							data,
							field: childField,
							onChange,
							hideLabelFromVision: (form?.fields ?? []).length < 2,
							markWhenOptional,
							validity: childFieldValidity
						}, childField.id)
					})]
				})
			})
		})
	});
}
var import_jsx_runtime$8, dropdown_default;
function init_dropdown() {
	return (init_dropdown = __esmMin((() => {
		init_component$1(), init_component(), init_dropdown$1(), init_button();
		init_build_module();
		init_react();
		init_build_module$2();
		init_use_dialog();
		init_stack();
		init_data_form_layout();
		init_normalize_form();
		init_summary_button();
		init_use_reveal_validity();
		init_use_field_from_form_field();
		import_jsx_runtime$8 = require_jsx_runtime();
		dropdown_default = PanelDropdown;
	})))();
}
//#endregion
//#region ../packages/dataviews/build-module/components/dataform-layouts/panel/index.mjs
function FormPanelField({ data, field, onChange, validity }) {
	if (field.layout.openAs.type === "modal") return /* @__PURE__ */ (0, import_jsx_runtime$7.jsx)(modal_default, {
		data,
		field,
		onChange,
		validity
	});
	return /* @__PURE__ */ (0, import_jsx_runtime$7.jsx)(dropdown_default, {
		data,
		field,
		onChange,
		validity
	});
}
var import_jsx_runtime$7;
function init_panel() {
	return (init_panel = __esmMin((() => {
		init_modal();
		init_dropdown();
		import_jsx_runtime$7 = require_jsx_runtime();
	})))();
}
//#endregion
//#region ../packages/dataviews/build-module/components/dataform-layouts/get-validation-message.mjs
function countInvalidFields(validity) {
	if (!validity) return 0;
	let count = 0;
	const validityRules = Object.keys(validity).filter((key) => key !== "children");
	for (const key of validityRules) if (validity[key]?.type === "invalid") count++;
	if (validity.children) for (const childValidity of Object.values(validity.children)) count += countInvalidFields(childValidity);
	return count;
}
function getValidationMessage(validity) {
	const invalidCount = countInvalidFields(validity);
	if (invalidCount === 0) return;
	return sprintf(_n("%d field needs attention", "%d fields need attention", invalidCount), invalidCount);
}
function init_get_validation_message() {
	return (init_get_validation_message = __esmMin((() => {
		init_build_module();
	})))();
}
//#endregion
//#region ../packages/dataviews/build-module/components/dataform-layouts/validation-badge.mjs
function ValidationBadge({ validity }) {
	const message = getValidationMessage(validity);
	if (!message) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime$6.jsx)(Badge, {
		intent: "high",
		children: message
	});
}
var import_jsx_runtime$6;
function init_validation_badge() {
	return (init_validation_badge = __esmMin((() => {
		init_badge();
		init_get_validation_message();
		import_jsx_runtime$6 = require_jsx_runtime();
	})))();
}
//#endregion
//#region ../packages/dataviews/build-module/components/dataform-layouts/card/index.mjs
function isSummaryFieldVisible(summaryField, summaryConfig, isOpen) {
	if (!summaryConfig || Array.isArray(summaryConfig) && summaryConfig.length === 0) return false;
	const fieldConfig = (Array.isArray(summaryConfig) ? summaryConfig : [summaryConfig]).find((config) => {
		if (typeof config === "string") return config === summaryField.id;
		if (typeof config === "object" && "id" in config) return config.id === summaryField.id;
		return false;
	});
	if (!fieldConfig) return false;
	if (typeof fieldConfig === "string") return true;
	if (typeof fieldConfig === "object" && "visibility" in fieldConfig) return fieldConfig.visibility === "always" || fieldConfig.visibility === "when-collapsed" && !isOpen;
	return true;
}
function HeaderContent({ data, fields, label, layout, isOpen, touched, validity }) {
	const visibleSummaryFields = getSummaryFields(layout.summary, fields).filter((summaryField) => isSummaryFieldVisible(summaryField, layout.summary, isOpen));
	const hasBadge = touched && layout.isCollapsible;
	const hasSummary = visibleSummaryFields.length > 0 && layout.withHeader;
	return /* @__PURE__ */ (0, import_jsx_runtime$5.jsxs)(Stack, {
		align: "center",
		justify: "space-between",
		className: "dataforms-layouts-card__field-header-content",
		children: [/* @__PURE__ */ (0, import_jsx_runtime$5.jsx)(Title, { children: label }), (hasBadge || hasSummary) && /* @__PURE__ */ (0, import_jsx_runtime$5.jsxs)(HeaderDescription, {
			className: "dataforms-layouts-card__field-header-content-description",
			children: [hasBadge && /* @__PURE__ */ (0, import_jsx_runtime$5.jsx)(ValidationBadge, { validity }), hasSummary && /* @__PURE__ */ (0, import_jsx_runtime$5.jsx)("div", {
				className: "dataforms-layouts-card__field-summary",
				children: visibleSummaryFields.map((summaryField) => /* @__PURE__ */ (0, import_jsx_runtime$5.jsx)(summaryField.render, {
					item: data,
					field: summaryField
				}, summaryField.id))
			})]
		})]
	});
}
function BodyContent({ data, field, form, onChange, hideLabelFromVision, markWhenOptional, validity, withHeader }) {
	if (field.children) return /* @__PURE__ */ (0, import_jsx_runtime$5.jsxs)(import_jsx_runtime$5.Fragment, { children: [field.description && /* @__PURE__ */ (0, import_jsx_runtime$5.jsx)("div", {
		className: "dataforms-layouts-card__field-description",
		children: field.description
	}), /* @__PURE__ */ (0, import_jsx_runtime$5.jsx)(DataFormLayout, {
		data,
		form,
		onChange,
		validity: validity?.children
	})] });
	const SingleFieldLayout = getFormFieldLayout("regular")?.component;
	if (!SingleFieldLayout) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime$5.jsx)(SingleFieldLayout, {
		data,
		field,
		onChange,
		hideLabelFromVision: hideLabelFromVision || withHeader,
		markWhenOptional,
		validity
	});
}
function FormCardField({ data, field, onChange, hideLabelFromVision, markWhenOptional, validity }) {
	const { fields } = (0, import_react.useContext)(dataform_context_default);
	const layout = field.layout;
	const contentRef = (0, import_react.useRef)(null);
	const hasFocusedContentRef = (0, import_react.useRef)(false);
	const form = (0, import_react.useMemo)(() => ({
		layout: DEFAULT_LAYOUT,
		fields: field.children ?? []
	}), [field]);
	const { isOpened, isCollapsible } = layout;
	const [isOpen, setIsOpen] = (0, import_react.useState)(isOpened);
	const [touched, setTouched] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		setIsOpen(isOpened);
	}, [isOpened]);
	const handleOpenChange = (0, import_react.useCallback)((open) => {
		if (!open) setTouched(true);
		setIsOpen(open);
	}, []);
	const revealValidity = useRevealValidity(contentRef, (isCollapsible ? isOpen : true) && touched);
	const handleContentFocus = (0, import_react.useCallback)(() => {
		hasFocusedContentRef.current = true;
	}, []);
	const handleFocusOutside = (0, import_react.useCallback)(() => {
		if (!hasFocusedContentRef.current) return;
		setTouched(true);
		if (isCollapsible && !isOpen) return;
		const revealedCount = revealValidity();
		const message = getValidationMessage(validity);
		if (revealedCount > 0 && message) speak(message, "polite");
	}, [
		isCollapsible,
		isOpen,
		revealValidity,
		validity
	]);
	const focusOutsideProps = useFocusOutside(handleFocusOutside);
	let label = field.label;
	let withHeader;
	if (field.children) withHeader = !!label && layout.withHeader;
	else {
		const fieldDefinition = fields.find((fieldDef) => fieldDef.id === field.id);
		if (!canRenderField(fieldDefinition)) return null;
		label = fieldDefinition.label;
		withHeader = !!label && layout.withHeader;
	}
	const bodyContent = /* @__PURE__ */ (0, import_jsx_runtime$5.jsx)(BodyContent, {
		data,
		field,
		form,
		onChange,
		hideLabelFromVision,
		markWhenOptional,
		validity,
		withHeader
	});
	const headerContent = /* @__PURE__ */ (0, import_jsx_runtime$5.jsx)(HeaderContent, {
		data,
		fields,
		label,
		layout,
		isOpen: isCollapsible ? !!isOpen : true,
		touched,
		validity
	});
	if (withHeader && isCollapsible) return /* @__PURE__ */ (0, import_jsx_runtime$5.jsxs)(Root3, {
		className: "dataforms-layouts-card__field",
		open: isOpen,
		onOpenChange: handleOpenChange,
		...focusOutsideProps,
		children: [/* @__PURE__ */ (0, import_jsx_runtime$5.jsx)(Header2, { children: headerContent }), /* @__PURE__ */ (0, import_jsx_runtime$5.jsx)(Content2, {
			ref: contentRef,
			onFocus: handleContentFocus,
			children: bodyContent
		})]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime$5.jsxs)(Root, {
		className: "dataforms-layouts-card__field",
		...focusOutsideProps,
		children: [withHeader && /* @__PURE__ */ (0, import_jsx_runtime$5.jsx)(Header$2, { children: headerContent }), /* @__PURE__ */ (0, import_jsx_runtime$5.jsx)(Content, {
			ref: contentRef,
			onFocus: handleContentFocus,
			children: bodyContent
		})]
	});
}
var import_jsx_runtime$5;
function init_card() {
	return (init_card = __esmMin((() => {
		init_react();
		init_build_module$1();
		init_use_focus_outside();
		init_title(), init_root(), init_header(), init_content(), init_header_description(), init_root$1(), init_header$1(), init_content$1(), init_stack();
		init_dataform_layouts();
		init_dataform_context();
		init_data_form_layout();
		init_normalize_form();
		init_get_validation_message();
		init_get_summary_fields();
		init_use_reveal_validity();
		init_validation_badge();
		import_jsx_runtime$5 = require_jsx_runtime();
	})))();
}
//#endregion
//#region ../packages/dataviews/build-module/components/dataform-layouts/row/index.mjs
function Header({ title }) {
	return /* @__PURE__ */ (0, import_jsx_runtime$4.jsx)(Stack, {
		direction: "column",
		className: "dataforms-layouts-row__header",
		gap: "lg",
		children: /* @__PURE__ */ (0, import_jsx_runtime$4.jsx)(Stack, {
			direction: "row",
			align: "center",
			children: /* @__PURE__ */ (0, import_jsx_runtime$4.jsx)(component_default$1, {
				level: 2,
				size: 13,
				children: title
			})
		})
	});
}
function FormRowField({ data, field, onChange, hideLabelFromVision, markWhenOptional, validity }) {
	const layout = field.layout;
	if (!!field.children) {
		const form = {
			layout: DEFAULT_LAYOUT,
			fields: field.children
		};
		return /* @__PURE__ */ (0, import_jsx_runtime$4.jsxs)("div", {
			className: "dataforms-layouts-row__field",
			children: [!hideLabelFromVision && field.label && /* @__PURE__ */ (0, import_jsx_runtime$4.jsx)(Header, { title: field.label }), /* @__PURE__ */ (0, import_jsx_runtime$4.jsx)(Stack, {
				direction: "row",
				align: layout.alignment,
				gap: "lg",
				children: /* @__PURE__ */ (0, import_jsx_runtime$4.jsx)(DataFormLayout, {
					data,
					form,
					onChange,
					validity: validity?.children,
					as: EMPTY_WRAPPER,
					children: (FieldLayout, childField, childFieldValidity) => /* @__PURE__ */ (0, import_jsx_runtime$4.jsx)("div", {
						className: "dataforms-layouts-row__field-control",
						style: layout.styles[childField.id],
						children: /* @__PURE__ */ (0, import_jsx_runtime$4.jsx)(FieldLayout, {
							data,
							field: childField,
							onChange,
							hideLabelFromVision,
							markWhenOptional,
							validity: childFieldValidity
						})
					}, childField.id)
				})
			})]
		});
	}
	const RegularLayout = getFormFieldLayout("regular")?.component;
	if (!RegularLayout) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime$4.jsx)(import_jsx_runtime$4.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime$4.jsx)("div", {
		className: "dataforms-layouts-row__field-control",
		children: /* @__PURE__ */ (0, import_jsx_runtime$4.jsx)(RegularLayout, {
			data,
			field,
			onChange,
			markWhenOptional,
			validity
		})
	}) });
}
var import_jsx_runtime$4, EMPTY_WRAPPER;
function init_row() {
	return (init_row = __esmMin((() => {
		init_component$1();
		init_stack();
		init_data_form_layout();
		init_normalize_form();
		init_dataform_layouts();
		import_jsx_runtime$4 = require_jsx_runtime();
		EMPTY_WRAPPER = ({ children }) => /* @__PURE__ */ (0, import_jsx_runtime$4.jsx)(import_jsx_runtime$4.Fragment, { children });
	})))();
}
//#endregion
//#region ../packages/dataviews/build-module/components/dataform-layouts/details/index.mjs
function FormDetailsField({ data, field, onChange, validity }) {
	const { fields } = (0, import_react.useContext)(dataform_context_default);
	const detailsRef = (0, import_react.useRef)(null);
	const contentRef = (0, import_react.useRef)(null);
	const hasFocusedContentRef = (0, import_react.useRef)(false);
	const [touched, setTouched] = (0, import_react.useState)(false);
	const [isOpen, setIsOpen] = (0, import_react.useState)(false);
	const form = (0, import_react.useMemo)(() => ({
		layout: DEFAULT_LAYOUT,
		fields: field.children ?? []
	}), [field]);
	(0, import_react.useEffect)(() => {
		const details = detailsRef.current;
		if (!details) return;
		const handleToggle = () => {
			const nowOpen = details.open;
			if (!nowOpen) setTouched(true);
			setIsOpen(nowOpen);
		};
		details.addEventListener("toggle", handleToggle);
		return () => {
			details.removeEventListener("toggle", handleToggle);
		};
	}, []);
	const revealValidity = useRevealValidity(contentRef, isOpen && touched);
	const handleContentFocus = (0, import_react.useCallback)(() => {
		hasFocusedContentRef.current = true;
	}, []);
	const handleFocusOutside = (0, import_react.useCallback)(() => {
		if (!hasFocusedContentRef.current) return;
		setTouched(true);
		if (!detailsRef.current?.open) return;
		const revealedCount = revealValidity();
		const message = getValidationMessage(validity);
		if (revealedCount > 0 && message) speak(message, "polite");
	}, [revealValidity, validity]);
	const focusOutsideProps = useFocusOutside(handleFocusOutside);
	if (!field.children) return null;
	const summaryFieldId = field.layout.summary ?? "";
	const summaryField = summaryFieldId ? fields.find((fieldDef) => fieldDef.id === summaryFieldId) : void 0;
	let summaryContent;
	if (summaryField && summaryField.render) summaryContent = /* @__PURE__ */ (0, import_jsx_runtime$3.jsx)(summaryField.render, {
		item: data,
		field: summaryField
	});
	else summaryContent = field.label || __("More details");
	return /* @__PURE__ */ (0, import_jsx_runtime$3.jsxs)("details", {
		ref: detailsRef,
		className: "dataforms-layouts-details__details",
		...focusOutsideProps,
		children: [/* @__PURE__ */ (0, import_jsx_runtime$3.jsx)("summary", {
			className: "dataforms-layouts-details__summary",
			children: /* @__PURE__ */ (0, import_jsx_runtime$3.jsxs)(Stack, {
				direction: "row",
				align: "center",
				gap: "md",
				className: "dataforms-layouts-details__summary-content",
				children: [summaryContent, touched && /* @__PURE__ */ (0, import_jsx_runtime$3.jsx)(ValidationBadge, { validity })]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime$3.jsx)("div", {
			ref: contentRef,
			className: "dataforms-layouts-details__content",
			onFocus: handleContentFocus,
			children: /* @__PURE__ */ (0, import_jsx_runtime$3.jsx)(DataFormLayout, {
				data,
				form,
				onChange,
				validity: validity?.children
			})
		})]
	});
}
var import_jsx_runtime$3;
function init_details() {
	return (init_details = __esmMin((() => {
		init_react();
		init_build_module();
		init_build_module$1();
		init_use_focus_outside();
		init_stack();
		init_dataform_context();
		init_data_form_layout();
		init_normalize_form();
		init_get_validation_message();
		init_use_reveal_validity();
		init_validation_badge();
		import_jsx_runtime$3 = require_jsx_runtime();
	})))();
}
//#endregion
//#region ../packages/dataviews/build-module/components/dataform-layouts/index.mjs
function getFormFieldLayout(type) {
	return FORM_FIELD_LAYOUTS.find((layout) => layout.type === type);
}
var import_jsx_runtime$2, FORM_FIELD_LAYOUTS;
function init_dataform_layouts() {
	return (init_dataform_layouts = __esmMin((() => {
		init_stack();
		init_regular();
		init_panel();
		init_card();
		init_row();
		init_details();
		import_jsx_runtime$2 = require_jsx_runtime();
		FORM_FIELD_LAYOUTS = [
			{
				type: "regular",
				component: FormRegularField,
				wrapper: ({ children }) => /* @__PURE__ */ (0, import_jsx_runtime$2.jsx)(Stack, {
					direction: "column",
					className: "dataforms-layouts__wrapper",
					gap: "lg",
					children
				})
			},
			{
				type: "panel",
				component: FormPanelField,
				wrapper: ({ children }) => /* @__PURE__ */ (0, import_jsx_runtime$2.jsx)(Stack, {
					direction: "column",
					className: "dataforms-layouts__wrapper",
					gap: "md",
					children
				})
			},
			{
				type: "card",
				component: FormCardField,
				wrapper: ({ children }) => /* @__PURE__ */ (0, import_jsx_runtime$2.jsx)(Stack, {
					direction: "column",
					className: "dataforms-layouts__wrapper",
					gap: "xl",
					children
				})
			},
			{
				type: "row",
				component: FormRowField,
				wrapper: ({ children, layout }) => /* @__PURE__ */ (0, import_jsx_runtime$2.jsx)(Stack, {
					direction: "column",
					className: "dataforms-layouts__wrapper",
					gap: "lg",
					children: /* @__PURE__ */ (0, import_jsx_runtime$2.jsx)("div", {
						className: "dataforms-layouts-row__field",
						children: /* @__PURE__ */ (0, import_jsx_runtime$2.jsx)(Stack, {
							direction: "row",
							gap: "lg",
							align: layout.alignment,
							children
						})
					})
				})
			},
			{
				type: "details",
				component: FormDetailsField
			}
		];
	})))();
}
//#endregion
//#region ../packages/dataviews/build-module/components/dataform-layouts/data-form-layout.mjs
function DataFormLayout({ data, form, onChange, validity, children, as }) {
	const { fields: fieldDefinitions } = (0, import_react.useContext)(dataform_context_default);
	const markWhenOptional = (0, import_react.useMemo)(() => {
		const requiredCount = fieldDefinitions.filter((f) => !!f.isValid?.required).length;
		return requiredCount > fieldDefinitions.length - requiredCount;
	}, [fieldDefinitions]);
	function getFieldDefinition(field) {
		return fieldDefinitions.find((fieldDefinition) => fieldDefinition.id === field.id);
	}
	const Wrapper = as ?? getFormFieldLayout(form.layout.type)?.wrapper ?? DEFAULT_WRAPPER;
	return /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)(Wrapper, {
		layout: form.layout,
		children: form.fields.map((formField) => {
			const FieldLayout = getFormFieldLayout(formField.layout.type)?.component;
			if (!FieldLayout) return null;
			const fieldDefinition = !formField.children ? getFieldDefinition(formField) : void 0;
			if (fieldDefinition && fieldDefinition.isVisible && !fieldDefinition.isVisible(data)) return null;
			if (children) return children(FieldLayout, formField, validity?.[formField.id], markWhenOptional);
			return /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)(FieldLayout, {
				data,
				field: formField,
				onChange,
				markWhenOptional,
				validity: validity?.[formField.id]
			}, formField.id);
		})
	});
}
var import_jsx_runtime$1, DEFAULT_WRAPPER;
function init_data_form_layout() {
	return (init_data_form_layout = __esmMin((() => {
		init_react();
		init_stack();
		init_dataform_layouts();
		init_dataform_context();
		import_jsx_runtime$1 = require_jsx_runtime();
		DEFAULT_WRAPPER = ({ children }) => /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)(Stack, {
			direction: "column",
			className: "dataforms-layouts__wrapper",
			gap: "lg",
			children
		});
	})))();
}
//#endregion
//#region ../packages/dataviews/build-module/dataform/index.mjs
function DataForm({ data, form, fields, onChange, validity }) {
	const normalizedForm = (0, import_react.useMemo)(() => normalize_form_default(form), [form]);
	const normalizedFields = (0, import_react.useMemo)(() => normalizeFields(fields), [fields]);
	if (!form.fields) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataFormProvider, {
		fields: normalizedFields,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataFormLayout, {
			data,
			form: normalizedForm,
			onChange,
			validity
		})
	});
}
var import_jsx_runtime;
function init_dataform() {
	return (init_dataform = __esmMin((() => {
		init_react();
		init_field_types();
		init_dataform_context();
		init_data_form_layout();
		init_normalize_form();
		import_jsx_runtime = require_jsx_runtime();
	})))();
}
//#endregion
export { use_form_validity_default as i, init_dataform as n, init_use_form_validity as r, DataForm as t };
