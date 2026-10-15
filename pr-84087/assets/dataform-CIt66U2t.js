import { n as __esmMin, o as __toESM } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as use_instance_id_default, t as init_use_instance_id } from "./use-instance-id-BznKyZc1.js";
import { i as useFocusOnMount, r as init_use_focus_on_mount } from "./use-focus-return-CaCgQsao.js";
import { n as useFocusOutside, t as init_use_focus_outside } from "./use-focus-outside-CUKAKz_B.js";
import { n as useMergeRefs, t as init_use_merge_refs } from "./use-merge-refs-BAtuPB1L.js";
import { i as use_dialog_default, r as init_use_dialog } from "./use-viewport-match-CGm_RUkw.js";
import { n as sprintf } from "./sprintf-_uhhbfMc.js";
import { i as _x, n as __, r as _n, t as init_build_module } from "./build-module-v04us4E2.js";
import { o as clsx, s as init_clsx } from "./iframe-D4D-SsYo.js";
import { n as init_badge, t as Badge } from "./badge-BpOo71_Q.js";
import { r as speak, t as init_build_module$1 } from "./build-module-DsAeWnrG.js";
import { t as close_small_default } from "./close-small-By1OyhLF.js";
import { r as error_default } from "./published-BuOJO-QD.js";
import { n as pencil_default } from "./pencil-n-8dZCZu.js";
import { n as init_visually_hidden, t as VisuallyHidden } from "./visually-hidden-BkfR1Mwg.js";
import { a as Header$2, c as init_root, i as init_content, n as init_title, o as init_header, r as Content, s as Root, t as Title } from "./title-B9zngHCN.js";
import { a as Header2, c as init_root$1, i as init_header_description, n as init_content$1, o as init_header$1, r as HeaderDescription, s as Root3, t as Content2 } from "./content-v7i5gjxV.js";
import { n as init_stack, t as Stack } from "./stack-DCjz3kq7.js";
import { n as require_cjs, t as require_es6 } from "./es6-CXUsglUz.js";
import { n as init_component, t as component_default } from "./component-Bd5njCwN.js";
import { n as base_control_default, r as init_base_control } from "./base-control-BlNgg-sa.js";
import { n as init_icon, t as icon_default } from "./icon-oSwa7eHF.js";
import { n as button_default, r as init_button } from "./button-Bj8SgySP.js";
import { n as init_dropdown$1, t as dropdown_default } from "./dropdown-DPc7mKYu.js";
import { n as init_component$1, t as component_default$1 } from "./component-CSJtKiHs.js";
import { n as modal_default, t as init_modal$1 } from "./modal-D2f2ti_d.js";
import { n as normalizeFields, t as init_field_types } from "./field-types-Cc2LMB9C.js";
import { r as init_build_module$2 } from "./library.story-DawnfKTW.js";
//#region ../packages/dataviews/src/components/dataform-context/index.tsx
function DataFormProvider({ fields, children }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$13.jsxDEV)(DataFormContext.Provider, {
		value: { fields },
		children
	}, void 0, false, {
		fileName: _jsxFileName$13,
		lineNumber: 20,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime$13, _jsxFileName$13, DataFormContext;
function init_dataform_context() {
	return (init_dataform_context = __esmMin((() => {
		init_react();
		import_jsx_dev_runtime$13 = require_jsx_dev_runtime();
		_jsxFileName$13 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/dataviews/src/components/dataform-context/index.tsx";
		DataFormContext = (0, import_react.createContext)({ fields: [] });
		DataFormContext.displayName = "DataFormContext";
		try {
			DataFormProvider.__docgenInfo = {
				"description": "",
				"displayName": "DataFormContext",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/dataviews/src/components/dataform-context/index.tsx",
				"methods": [],
				"props": { "fields": {
					"defaultValue": null,
					"declarations": [{
						"fileName": "gutenberg-storybook-preview/packages/dataviews/src/components/dataform-context/index.tsx",
						"name": "TypeLiteral"
					}],
					"description": "",
					"name": "fields",
					"required": true,
					"tags": {},
					"type": { "name": "NormalizedField<Item>[]" }
				} },
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/dataviews/src/components/dataform-layouts/can-render-field.ts
/**
* Whether a field can render its read-only value or an edit control.
*
* @param field The normalized field definition.
* @return Whether the field can render.
*/
function canRenderField(field) {
	return !!field && (field.readOnly === true || !!field.Edit);
}
//#endregion
//#region ../packages/dataviews/src/components/dataform-layouts/normalize-form.ts
/**
* Normalizes a layout configuration based on its type.
*
* @param layout The layout object to normalize.
* @return The normalized layout object.
*/
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
var DEFAULT_LAYOUT, normalizeCardSummaryField;
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
	})))();
}
//#endregion
//#region ../packages/dataviews/src/components/dataform-layouts/regular/index.tsx
function Header$1({ title }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$12.jsxDEV)(Stack, {
		direction: "column",
		className: "dataforms-layouts-regular__header",
		gap: "lg",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime$12.jsxDEV)(Stack, {
			direction: "row",
			align: "center",
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime$12.jsxDEV)(component_default$1, {
				level: 2,
				size: 13,
				children: title
			}, void 0, false, {
				fileName: _jsxFileName$12,
				lineNumber: 26,
				columnNumber: 5
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName$12,
			lineNumber: 25,
			columnNumber: 4
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$12,
		lineNumber: 20,
		columnNumber: 3
	}, this);
}
function FormRegularField({ data, field, onChange, hideLabelFromVision, markWhenOptional, validity }) {
	const { fields } = (0, import_react.useContext)(DataFormContext);
	const layout = field.layout;
	const form = (0, import_react.useMemo)(() => ({
		layout: DEFAULT_LAYOUT,
		fields: !!field.children ? field.children : []
	}), [field]);
	if (!!field.children) return /* @__PURE__ */ (0, import_jsx_dev_runtime$12.jsxDEV)(import_jsx_dev_runtime$12.Fragment, { children: [!hideLabelFromVision && field.label && /* @__PURE__ */ (0, import_jsx_dev_runtime$12.jsxDEV)(Header$1, { title: field.label }, void 0, false, {
		fileName: _jsxFileName$12,
		lineNumber: 57,
		columnNumber: 6
	}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime$12.jsxDEV)(DataFormLayout, {
		data,
		form,
		onChange,
		validity: validity?.children
	}, void 0, false, {
		fileName: _jsxFileName$12,
		lineNumber: 59,
		columnNumber: 5
	}, this)] }, void 0, true, {
		fileName: _jsxFileName$12,
		lineNumber: 55,
		columnNumber: 4
	}, this);
	const labelPosition = layout.labelPosition;
	const fieldDefinition = fields.find((fieldDef) => fieldDef.id === field.id);
	if (!canRenderField(fieldDefinition)) return null;
	if (labelPosition === "side") return /* @__PURE__ */ (0, import_jsx_dev_runtime$12.jsxDEV)(Stack, {
		direction: "row",
		className: "dataforms-layouts-regular__field",
		gap: "sm",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime$12.jsxDEV)("div", {
			className: clsx("dataforms-layouts-regular__field-label", `dataforms-layouts-regular__field-label--label-position-${labelPosition}`),
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime$12.jsxDEV)(base_control_default.VisualLabel, { children: fieldDefinition.label }, void 0, false, {
				fileName: _jsxFileName$12,
				lineNumber: 91,
				columnNumber: 6
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName$12,
			lineNumber: 85,
			columnNumber: 5
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime$12.jsxDEV)("div", {
			className: "dataforms-layouts-regular__field-control",
			children: fieldDefinition.readOnly === true ? /* @__PURE__ */ (0, import_jsx_dev_runtime$12.jsxDEV)(fieldDefinition.render, {
				item: data,
				field: fieldDefinition
			}, void 0, false, {
				fileName: _jsxFileName$12,
				lineNumber: 97,
				columnNumber: 7
			}, this) : fieldDefinition.Edit && /* @__PURE__ */ (0, import_jsx_dev_runtime$12.jsxDEV)(fieldDefinition.Edit, {
				data,
				field: fieldDefinition,
				onChange,
				hideLabelFromVision: true,
				markWhenOptional,
				validity
			}, fieldDefinition.id, false, {
				fileName: _jsxFileName$12,
				lineNumber: 103,
				columnNumber: 8
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName$12,
			lineNumber: 95,
			columnNumber: 5
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName$12,
		lineNumber: 80,
		columnNumber: 4
	}, this);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$12.jsxDEV)("div", {
		className: "dataforms-layouts-regular__field",
		children: fieldDefinition.readOnly === true ? /* @__PURE__ */ (0, import_jsx_dev_runtime$12.jsxDEV)(import_jsx_dev_runtime$12.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime$12.jsxDEV)(import_jsx_dev_runtime$12.Fragment, { children: [!hideLabelFromVision && labelPosition !== "none" && /* @__PURE__ */ (0, import_jsx_dev_runtime$12.jsxDEV)(base_control_default.VisualLabel, { children: fieldDefinition.label }, void 0, false, {
			fileName: _jsxFileName$12,
			lineNumber: 125,
			columnNumber: 8
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime$12.jsxDEV)(fieldDefinition.render, {
			item: data,
			field: fieldDefinition
		}, void 0, false, {
			fileName: _jsxFileName$12,
			lineNumber: 129,
			columnNumber: 7
		}, this)] }, void 0, true, {
			fileName: _jsxFileName$12,
			lineNumber: 123,
			columnNumber: 6
		}, this) }, void 0, false, {
			fileName: _jsxFileName$12,
			lineNumber: 122,
			columnNumber: 5
		}, this) : fieldDefinition.Edit && /* @__PURE__ */ (0, import_jsx_dev_runtime$12.jsxDEV)(fieldDefinition.Edit, {
			data,
			field: fieldDefinition,
			onChange,
			hideLabelFromVision: labelPosition === "none" ? true : hideLabelFromVision,
			markWhenOptional,
			validity
		}, void 0, false, {
			fileName: _jsxFileName$12,
			lineNumber: 137,
			columnNumber: 6
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$12,
		lineNumber: 120,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime$12, _jsxFileName$12;
function init_regular() {
	return (init_regular = __esmMin((() => {
		init_clsx();
		init_react();
		init_component$1(), init_base_control();
		init_stack();
		init_dataform_context();
		init_data_form_layout();
		init_normalize_form();
		import_jsx_dev_runtime$12 = require_jsx_dev_runtime();
		_jsxFileName$12 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/dataviews/src/components/dataform-layouts/regular/index.tsx";
		try {
			FormRegularField.__docgenInfo = {
				"description": "",
				"displayName": "regular",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/dataviews/src/components/dataform-layouts/regular/index.tsx",
				"methods": [],
				"props": {
					"data": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/dataform.ts",
							"name": "FieldLayoutProps"
						}],
						"description": "The item being edited.",
						"name": "data",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/dataform.ts",
							"name": "FieldLayoutProps"
						},
						"required": true,
						"tags": {},
						"type": { "name": "Item" }
					},
					"field": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/dataform.ts",
							"name": "FieldLayoutProps"
						}],
						"description": "The normalized form field to render.",
						"name": "field",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/dataform.ts",
							"name": "FieldLayoutProps"
						},
						"required": true,
						"tags": {},
						"type": { "name": "NormalizedFormField" }
					},
					"onChange": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/dataform.ts",
							"name": "FieldLayoutProps"
						}],
						"description": "Callback invoked when the user edits the field, receiving the partial\nitem returned by the field's `setValue`. By default that is an object\nkeyed by field id, nested for dotted ids; a custom `setValue` may\nreturn any other partial shape of the item.",
						"name": "onChange",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/dataform.ts",
							"name": "FieldLayoutProps"
						},
						"required": true,
						"tags": {},
						"type": { "name": "(value: any) => void" }
					},
					"hideLabelFromVision": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/dataform.ts",
							"name": "FieldLayoutProps"
						}],
						"description": "Whether the field's label is visually hidden\n(but still available to assistive technology).",
						"name": "hideLabelFromVision",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/dataform.ts",
							"name": "FieldLayoutProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"markWhenOptional": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/dataform.ts",
							"name": "FieldLayoutProps"
						}],
						"description": "Whether to append \"(optional)\" to the label of optional fields,\ninstead of marking required fields.",
						"name": "markWhenOptional",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/dataform.ts",
							"name": "FieldLayoutProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"validity": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/dataform.ts",
							"name": "FieldLayoutProps"
						}],
						"description": "The validity state of the field.",
						"name": "validity",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/dataform.ts",
							"name": "FieldLayoutProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "FieldValidity" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/dataviews/src/components/dataform-layouts/panel/utils/get-label-classname.ts
function getLabelClassName(labelPosition, showError) {
	return clsx("dataforms-layouts-panel__field-label", `dataforms-layouts-panel__field-label--label-position-${labelPosition}`, { "has-error": showError });
}
function init_get_label_classname() {
	return (init_get_label_classname = __esmMin((() => {
		init_clsx();
	})))();
}
//#endregion
//#region ../packages/dataviews/src/components/dataform-layouts/panel/field-label-content.tsx
function FieldLabelContent({ showError, errorMessage, fieldLabel, errorId }) {
	if (!showError) return /* @__PURE__ */ (0, import_jsx_dev_runtime$11.jsxDEV)(import_jsx_dev_runtime$11.Fragment, { children: fieldLabel }, void 0, false, {
		fileName: _jsxFileName$11,
		lineNumber: 17,
		columnNumber: 10
	}, this);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$11.jsxDEV)("span", {
		className: "dataforms-layouts-panel__field-label-error-content",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime$11.jsxDEV)(icon_default, {
				icon: error_default,
				size: 16
			}, void 0, false, {
				fileName: _jsxFileName$11,
				lineNumber: 22,
				columnNumber: 4
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime$11.jsxDEV)(VisuallyHidden, {
				id: errorId,
				children: errorMessage
			}, void 0, false, {
				fileName: _jsxFileName$11,
				lineNumber: 23,
				columnNumber: 4
			}, this),
			fieldLabel
		]
	}, void 0, true, {
		fileName: _jsxFileName$11,
		lineNumber: 21,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime$11, _jsxFileName$11;
function init_field_label_content() {
	return (init_field_label_content = __esmMin((() => {
		init_icon();
		init_build_module$2();
		init_visually_hidden();
		import_jsx_dev_runtime$11 = require_jsx_dev_runtime();
		_jsxFileName$11 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/dataviews/src/components/dataform-layouts/panel/field-label-content.tsx";
		try {
			FieldLabelContent.__docgenInfo = {
				"description": "",
				"displayName": "FieldLabelContent",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/dataviews/src/components/dataform-layouts/panel/field-label-content.tsx",
				"methods": [],
				"props": {
					"showError": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/components/dataform-layouts/panel/field-label-content.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "showError",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"errorMessage": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/components/dataform-layouts/panel/field-label-content.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "errorMessage",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"fieldLabel": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/components/dataform-layouts/panel/field-label-content.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "fieldLabel",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"errorId": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/components/dataform-layouts/panel/field-label-content.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "errorId",
						"required": true,
						"tags": {},
						"type": { "name": "string" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/dataviews/src/components/dataform-layouts/panel/utils/get-first-validation-error.ts
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
function init_get_first_validation_error() {
	return (init_get_first_validation_error = __esmMin((() => {})))();
}
//#endregion
//#region ../packages/dataviews/src/components/dataform-layouts/panel/summary-button.tsx
function SummaryValue({ item, field, showPlaceholderIfEmpty }) {
	if (showPlaceholderIfEmpty && field.placeholder && [
		void 0,
		null,
		""
	].includes(field.getValue({ item }))) return /* @__PURE__ */ (0, import_jsx_dev_runtime$10.jsxDEV)("span", {
		className: "dataforms-layouts-panel__field-placeholder",
		children: field.placeholder
	}, void 0, false, {
		fileName: _jsxFileName$10,
		lineNumber: 33,
		columnNumber: 4
	}, this);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$10.jsxDEV)(field.render, {
		item,
		field
	}, void 0, false, {
		fileName: _jsxFileName$10,
		lineNumber: 39,
		columnNumber: 9
	}, this);
}
function SummaryButton({ data, field, fieldLabel, summaryFields, validity, touched, disabled, isOpen, onClick }) {
	const { labelPosition, editVisibility, showPlaceholderIfEmpty } = field.layout;
	const errorMessage = getFirstValidationError(validity);
	const showError = touched && !!errorMessage;
	const labelClassName = getLabelClassName(labelPosition, showError);
	const className = clsx("dataforms-layouts-panel__field-trigger", `dataforms-layouts-panel__field-trigger--label-${labelPosition}`, {
		"is-disabled": disabled,
		"dataforms-layouts-panel__field-trigger--edit-always": editVisibility === "always"
	});
	const controlId = use_instance_id_default(SummaryButton, "dataforms-layouts-panel__field-control");
	const errorId = `${controlId}-error`;
	const ariaLabel = showError ? sprintf(_x("Edit %s (has errors)", "field"), fieldLabel || "") : sprintf(_x("Edit %s", "field"), fieldLabel || "");
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$10.jsxDEV)("div", {
		className,
		children: [
			labelPosition !== "none" && /* @__PURE__ */ (0, import_jsx_dev_runtime$10.jsxDEV)("span", {
				className: labelClassName,
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime$10.jsxDEV)(FieldLabelContent, {
					showError,
					errorMessage,
					fieldLabel,
					errorId
				}, void 0, false, {
					fileName: _jsxFileName$10,
					lineNumber: 101,
					columnNumber: 6
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName$10,
				lineNumber: 100,
				columnNumber: 5
			}, this),
			labelPosition === "none" && showError && /* @__PURE__ */ (0, import_jsx_dev_runtime$10.jsxDEV)(FieldLabelContent, {
				showError: true,
				errorMessage,
				errorId
			}, void 0, false, {
				fileName: _jsxFileName$10,
				lineNumber: 110,
				columnNumber: 5
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime$10.jsxDEV)("span", {
				id: `${controlId}`,
				className: "dataforms-layouts-panel__field-control",
				children: summaryFields.length > 1 ? /* @__PURE__ */ (0, import_jsx_dev_runtime$10.jsxDEV)("span", {
					style: {
						display: "flex",
						flexDirection: "column",
						alignItems: "flex-start",
						width: "100%",
						gap: "2px"
					},
					children: summaryFields.map((summaryField) => /* @__PURE__ */ (0, import_jsx_dev_runtime$10.jsxDEV)("span", {
						style: { width: "100%" },
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime$10.jsxDEV)(SummaryValue, {
							item: data,
							field: summaryField,
							showPlaceholderIfEmpty
						}, void 0, false, {
							fileName: _jsxFileName$10,
							lineNumber: 135,
							columnNumber: 9
						}, this)
					}, summaryField.id, false, {
						fileName: _jsxFileName$10,
						lineNumber: 131,
						columnNumber: 8
					}, this))
				}, void 0, false, {
					fileName: _jsxFileName$10,
					lineNumber: 121,
					columnNumber: 6
				}, this) : summaryFields.map((summaryField) => /* @__PURE__ */ (0, import_jsx_dev_runtime$10.jsxDEV)(SummaryValue, {
					item: data,
					field: summaryField,
					showPlaceholderIfEmpty
				}, summaryField.id, false, {
					fileName: _jsxFileName$10,
					lineNumber: 147,
					columnNumber: 7
				}, this))
			}, void 0, false, {
				fileName: _jsxFileName$10,
				lineNumber: 116,
				columnNumber: 4
			}, this),
			!disabled && /* @__PURE__ */ (0, import_jsx_dev_runtime$10.jsxDEV)(button_default, {
				className: "dataforms-layouts-panel__field-trigger-icon",
				label: ariaLabel,
				icon: pencil_default,
				size: "small",
				"aria-expanded": isOpen,
				"aria-haspopup": "dialog",
				"aria-describedby": showError ? `${controlId} ${errorId}` : controlId,
				onClick
			}, void 0, false, {
				fileName: _jsxFileName$10,
				lineNumber: 157,
				columnNumber: 5
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName$10,
		lineNumber: 98,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime$10, _jsxFileName$10;
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
		import_jsx_dev_runtime$10 = require_jsx_dev_runtime();
		_jsxFileName$10 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/dataviews/src/components/dataform-layouts/panel/summary-button.tsx";
		try {
			SummaryButton.__docgenInfo = {
				"description": "",
				"displayName": "summarybutton",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/dataviews/src/components/dataform-layouts/panel/summary-button.tsx",
				"methods": [],
				"props": {
					"data": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/components/dataform-layouts/panel/summary-button.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "data",
						"required": true,
						"tags": {},
						"type": { "name": "Item" }
					},
					"field": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/components/dataform-layouts/panel/summary-button.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "field",
						"required": true,
						"tags": {},
						"type": { "name": "NormalizedFormField" }
					},
					"fieldLabel": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/components/dataform-layouts/panel/summary-button.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "fieldLabel",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"summaryFields": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/components/dataform-layouts/panel/summary-button.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "summaryFields",
						"required": true,
						"tags": {},
						"type": { "name": "NormalizedField<Item>[]" }
					},
					"validity": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/components/dataform-layouts/panel/summary-button.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "validity",
						"required": false,
						"tags": {},
						"type": { "name": "FieldValidity" }
					},
					"touched": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/components/dataform-layouts/panel/summary-button.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "touched",
						"required": true,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"disabled": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/components/dataform-layouts/panel/summary-button.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "disabled",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"isOpen": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/components/dataform-layouts/panel/summary-button.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "isOpen",
						"required": true,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"onClick": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/components/dataform-layouts/panel/summary-button.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "onClick",
						"required": true,
						"tags": {},
						"type": { "name": "() => void" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/dataviews/src/hooks/use-form-validity.ts
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
	const normalizedForm = normalizeForm(form);
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
/**
* Hook that validates a form item and returns an object with error messages for each field.
*
* @param item   The item to validate.
* @param fields Fields config.
* @param form   Form config.
*
* @return Record of field IDs to error messages (undefined means no error).
*/
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
var import_cjs$1, import_es6;
function init_use_form_validity() {
	return (init_use_form_validity = __esmMin((() => {
		import_cjs$1 = /* @__PURE__ */ __toESM(require_cjs());
		import_es6 = /* @__PURE__ */ __toESM(require_es6());
		init_react();
		init_build_module();
		init_field_types();
		init_normalize_form();
	})))();
}
//#endregion
//#region ../packages/dataviews/src/hooks/use-reveal-validity.ts
/**
* Shows validation errors for all invalid form inputs within a container
* element, without moving focus. It fires a synthetic `invalid` event on each
* invalid input, which validated controls listen to in order to display their
* error states. Unlike `reportValidity()`, it never focuses the invalid
* input, so the natural tab sequence is preserved.
*
* Used by panel, card, and details layouts to show validation errors
* immediately when their content becomes visible after prior interaction.
*
* @param ref          A ref to the container element.
* @param shouldReveal Whether to trigger the invalid events when it becomes
*                     `true`. Typically derived from `touched` state and
*                     open/visible state.
*
* @return A callback that reveals the errors on demand, for layouts that also
*         need to reveal on a recurring event such as losing focus. It returns
*         how many inputs it revealed an error for.
*/
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
//#region ../packages/dataviews/src/components/dataform-layouts/get-summary-fields.ts
/**
* Extracts field IDs from various summary field formats.
*
* @param summary The summary field configuration.
* @return Array of field IDs.
*/
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
//#region ../packages/dataviews/src/components/dataform-layouts/panel/utils/use-field-from-form-field.ts
/**
* Determines the field definition and summary fields for a panel layout.
*
* Summary fields are determined with the following priority:
* 1. Use layout.summary fields if they exist
* 2. For a leaf form field, fall back to its field definition
* 3. For a combined form field, fall back to its first leaf child
* 4. If no field definition is found, return empty summary fields
*
* @param field The form field to get definition for
* @return Object containing fieldDefinition, fieldLabel, and summaryFields
*/
function useFieldFromFormField(field) {
	const { fields } = (0, import_react.useContext)(DataFormContext);
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
var getFieldDefinition;
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
	})))();
}
//#endregion
//#region ../packages/dataviews/src/components/dataform-layouts/panel/modal.tsx
function ModalContent({ data, field, onChange, fieldLabel, onClose, touched }) {
	const { openAs } = field.layout;
	const { applyLabel, cancelLabel } = openAs;
	const { fields } = (0, import_react.useContext)(DataFormContext);
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
	const { validity } = useFormValidity(modalData, fields.map((f) => ({
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
	})), form);
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
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$9.jsxDEV)(modal_default, {
		className: "dataforms-layouts-panel__modal",
		onRequestClose: onClose,
		isFullScreen: false,
		title: fieldLabel,
		size: "medium",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime$9.jsxDEV)("div", {
			ref: mergedRef,
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime$9.jsxDEV)(DataFormLayout, {
				data: modalData,
				form,
				onChange: handleOnChange,
				validity,
				children: (FieldLayout, childField, childFieldValidity, markWhenOptional) => /* @__PURE__ */ (0, import_jsx_dev_runtime$9.jsxDEV)(FieldLayout, {
					data: modalData,
					field: childField,
					onChange: handleOnChange,
					hideLabelFromVision: form.fields.length < 2,
					markWhenOptional,
					validity: childFieldValidity
				}, childField.id, false, {
					fileName: _jsxFileName$9,
					lineNumber: 119,
					columnNumber: 7
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName$9,
				lineNumber: 107,
				columnNumber: 5
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName$9,
			lineNumber: 106,
			columnNumber: 4
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime$9.jsxDEV)(Stack, {
			direction: "row",
			className: "dataforms-layouts-panel__modal-footer",
			gap: "md",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime$9.jsxDEV)(component_default, { style: { flex: 1 } }, void 0, false, {
					fileName: _jsxFileName$9,
					lineNumber: 136,
					columnNumber: 5
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime$9.jsxDEV)(button_default, {
					variant: "tertiary",
					onClick: onClose,
					__next40pxDefaultSize: true,
					children: cancelLabel
				}, void 0, false, {
					fileName: _jsxFileName$9,
					lineNumber: 137,
					columnNumber: 5
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime$9.jsxDEV)(button_default, {
					variant: "primary",
					onClick: onApply,
					__next40pxDefaultSize: true,
					children: applyLabel
				}, void 0, false, {
					fileName: _jsxFileName$9,
					lineNumber: 144,
					columnNumber: 5
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName$9,
			lineNumber: 131,
			columnNumber: 4
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName$9,
		lineNumber: 99,
		columnNumber: 3
	}, this);
}
function PanelModal({ data, field, onChange, validity }) {
	const [touched, setTouched] = (0, import_react.useState)(false);
	const [isOpen, setIsOpen] = (0, import_react.useState)(false);
	const { fieldDefinition, fieldLabel, summaryFields } = useFieldFromFormField(field);
	if (!fieldDefinition) return null;
	const isDisabled = fieldDefinition.readOnly === true || fieldDefinition.isDisabled({
		item: data,
		field: fieldDefinition
	});
	const handleClose = () => {
		setIsOpen(false);
		setTouched(true);
	};
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$9.jsxDEV)(import_jsx_dev_runtime$9.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime$9.jsxDEV)(SummaryButton, {
		data,
		field,
		fieldLabel,
		summaryFields,
		validity,
		touched,
		disabled: isDisabled,
		onClick: () => setIsOpen(true),
		isOpen
	}, void 0, false, {
		fileName: _jsxFileName$9,
		lineNumber: 182,
		columnNumber: 4
	}, this), isOpen && /* @__PURE__ */ (0, import_jsx_dev_runtime$9.jsxDEV)(ModalContent, {
		data,
		field,
		onChange,
		fieldLabel: fieldLabel ?? "",
		onClose: handleClose,
		touched
	}, void 0, false, {
		fileName: _jsxFileName$9,
		lineNumber: 194,
		columnNumber: 5
	}, this)] }, void 0, true, {
		fileName: _jsxFileName$9,
		lineNumber: 181,
		columnNumber: 3
	}, this);
}
var import_cjs, import_jsx_dev_runtime$9, _jsxFileName$9;
function init_modal() {
	return (init_modal = __esmMin((() => {
		import_cjs = /* @__PURE__ */ __toESM(require_cjs());
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
		import_jsx_dev_runtime$9 = require_jsx_dev_runtime();
		_jsxFileName$9 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/dataviews/src/components/dataform-layouts/panel/modal.tsx";
		try {
			PanelModal.__docgenInfo = {
				"description": "",
				"displayName": "PanelModal",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/dataviews/src/components/dataform-layouts/panel/modal.tsx",
				"methods": [],
				"props": {
					"data": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/dataform.ts",
							"name": "FieldLayoutProps"
						}],
						"description": "The item being edited.",
						"name": "data",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/dataform.ts",
							"name": "FieldLayoutProps"
						},
						"required": true,
						"tags": {},
						"type": { "name": "Item" }
					},
					"field": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/dataform.ts",
							"name": "FieldLayoutProps"
						}],
						"description": "The normalized form field to render.",
						"name": "field",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/dataform.ts",
							"name": "FieldLayoutProps"
						},
						"required": true,
						"tags": {},
						"type": { "name": "NormalizedFormField" }
					},
					"onChange": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/dataform.ts",
							"name": "FieldLayoutProps"
						}],
						"description": "Callback invoked when the user edits the field, receiving the partial\nitem returned by the field's `setValue`. By default that is an object\nkeyed by field id, nested for dotted ids; a custom `setValue` may\nreturn any other partial shape of the item.",
						"name": "onChange",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/dataform.ts",
							"name": "FieldLayoutProps"
						},
						"required": true,
						"tags": {},
						"type": { "name": "(value: any) => void" }
					},
					"hideLabelFromVision": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/dataform.ts",
							"name": "FieldLayoutProps"
						}],
						"description": "Whether the field's label is visually hidden\n(but still available to assistive technology).",
						"name": "hideLabelFromVision",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/dataform.ts",
							"name": "FieldLayoutProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"markWhenOptional": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/dataform.ts",
							"name": "FieldLayoutProps"
						}],
						"description": "Whether to append \"(optional)\" to the label of optional fields,\ninstead of marking required fields.",
						"name": "markWhenOptional",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/dataform.ts",
							"name": "FieldLayoutProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"validity": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/dataform.ts",
							"name": "FieldLayoutProps"
						}],
						"description": "The validity state of the field.",
						"name": "validity",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/dataform.ts",
							"name": "FieldLayoutProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "FieldValidity" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/dataviews/src/components/dataform-layouts/panel/dropdown.tsx
function DropdownHeader({ title, onClose }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$8.jsxDEV)(Stack, {
		direction: "column",
		className: "dataforms-layouts-panel__dropdown-header",
		gap: "lg",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime$8.jsxDEV)(Stack, {
			direction: "row",
			gap: "sm",
			align: "center",
			children: [
				title && /* @__PURE__ */ (0, import_jsx_dev_runtime$8.jsxDEV)(component_default$1, {
					level: 2,
					size: 13,
					children: title
				}, void 0, false, {
					fileName: _jsxFileName$8,
					lineNumber: 38,
					columnNumber: 6
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime$8.jsxDEV)(component_default, { style: { flex: 1 } }, void 0, false, {
					fileName: _jsxFileName$8,
					lineNumber: 42,
					columnNumber: 5
				}, this),
				onClose && /* @__PURE__ */ (0, import_jsx_dev_runtime$8.jsxDEV)(button_default, {
					label: __("Close"),
					icon: close_small_default,
					onClick: onClose,
					size: "small"
				}, void 0, false, {
					fileName: _jsxFileName$8,
					lineNumber: 44,
					columnNumber: 6
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName$8,
			lineNumber: 36,
			columnNumber: 4
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$8,
		lineNumber: 31,
		columnNumber: 3
	}, this);
}
function DropdownContentWithValidation({ touched, children }) {
	const ref = (0, import_react.useRef)(null);
	useRevealValidity(ref, touched);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$8.jsxDEV)("div", {
		ref,
		children
	}, void 0, false, {
		fileName: _jsxFileName$8,
		lineNumber: 65,
		columnNumber: 9
	}, this);
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
	const { fieldDefinition, fieldLabel, summaryFields } = useFieldFromFormField(field);
	if (!fieldDefinition) return null;
	const isDisabled = fieldDefinition.readOnly === true || fieldDefinition.isDisabled({
		item: data,
		field: fieldDefinition
	});
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$8.jsxDEV)("div", {
		ref: setPopoverAnchor,
		className: "dataforms-layouts-panel__field-dropdown-anchor",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime$8.jsxDEV)(dropdown_default, {
			contentClassName: "dataforms-layouts-panel__field-dropdown",
			popoverProps,
			focusOnMount: false,
			onToggle: (willOpen) => {
				if (!willOpen) setTouched(true);
			},
			renderToggle: ({ isOpen, onToggle }) => /* @__PURE__ */ (0, import_jsx_dev_runtime$8.jsxDEV)(SummaryButton, {
				data,
				field,
				fieldLabel,
				summaryFields,
				validity,
				touched,
				disabled: isDisabled,
				isOpen,
				onClick: onToggle
			}, void 0, false, {
				fileName: _jsxFileName$8,
				lineNumber: 144,
				columnNumber: 6
			}, this),
			renderContent: ({ onClose }) => /* @__PURE__ */ (0, import_jsx_dev_runtime$8.jsxDEV)(DropdownContentWithValidation, {
				touched,
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime$8.jsxDEV)("div", {
					ref: dialogRef,
					...dialogProps,
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime$8.jsxDEV)(DropdownHeader, {
						title: fieldLabel,
						onClose
					}, void 0, false, {
						fileName: _jsxFileName$8,
						lineNumber: 159,
						columnNumber: 8
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime$8.jsxDEV)(DataFormLayout, {
						data,
						form,
						onChange,
						validity: formValidity,
						children: (FieldLayout, childField, childFieldValidity, markWhenOptional) => /* @__PURE__ */ (0, import_jsx_dev_runtime$8.jsxDEV)(FieldLayout, {
							data,
							field: childField,
							onChange,
							hideLabelFromVision: (form?.fields ?? []).length < 2,
							markWhenOptional,
							validity: childFieldValidity
						}, childField.id, false, {
							fileName: _jsxFileName$8,
							lineNumber: 175,
							columnNumber: 10
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName$8,
						lineNumber: 163,
						columnNumber: 8
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$8,
					lineNumber: 158,
					columnNumber: 7
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName$8,
				lineNumber: 157,
				columnNumber: 6
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName$8,
			lineNumber: 134,
			columnNumber: 4
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$8,
		lineNumber: 130,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime$8, _jsxFileName$8;
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
		import_jsx_dev_runtime$8 = require_jsx_dev_runtime();
		_jsxFileName$8 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/dataviews/src/components/dataform-layouts/panel/dropdown.tsx";
		try {
			PanelDropdown.__docgenInfo = {
				"description": "",
				"displayName": "PanelDropdown",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/dataviews/src/components/dataform-layouts/panel/dropdown.tsx",
				"methods": [],
				"props": {
					"data": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/dataform.ts",
							"name": "FieldLayoutProps"
						}],
						"description": "The item being edited.",
						"name": "data",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/dataform.ts",
							"name": "FieldLayoutProps"
						},
						"required": true,
						"tags": {},
						"type": { "name": "Item" }
					},
					"field": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/dataform.ts",
							"name": "FieldLayoutProps"
						}],
						"description": "The normalized form field to render.",
						"name": "field",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/dataform.ts",
							"name": "FieldLayoutProps"
						},
						"required": true,
						"tags": {},
						"type": { "name": "NormalizedFormField" }
					},
					"onChange": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/dataform.ts",
							"name": "FieldLayoutProps"
						}],
						"description": "Callback invoked when the user edits the field, receiving the partial\nitem returned by the field's `setValue`. By default that is an object\nkeyed by field id, nested for dotted ids; a custom `setValue` may\nreturn any other partial shape of the item.",
						"name": "onChange",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/dataform.ts",
							"name": "FieldLayoutProps"
						},
						"required": true,
						"tags": {},
						"type": { "name": "(value: any) => void" }
					},
					"hideLabelFromVision": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/dataform.ts",
							"name": "FieldLayoutProps"
						}],
						"description": "Whether the field's label is visually hidden\n(but still available to assistive technology).",
						"name": "hideLabelFromVision",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/dataform.ts",
							"name": "FieldLayoutProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"markWhenOptional": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/dataform.ts",
							"name": "FieldLayoutProps"
						}],
						"description": "Whether to append \"(optional)\" to the label of optional fields,\ninstead of marking required fields.",
						"name": "markWhenOptional",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/dataform.ts",
							"name": "FieldLayoutProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"validity": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/dataform.ts",
							"name": "FieldLayoutProps"
						}],
						"description": "The validity state of the field.",
						"name": "validity",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/dataform.ts",
							"name": "FieldLayoutProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "FieldValidity" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/dataviews/src/components/dataform-layouts/panel/index.tsx
function FormPanelField({ data, field, onChange, validity }) {
	if (field.layout.openAs.type === "modal") return /* @__PURE__ */ (0, import_jsx_dev_runtime$7.jsxDEV)(PanelModal, {
		data,
		field,
		onChange,
		validity
	}, void 0, false, {
		fileName: _jsxFileName$7,
		lineNumber: 15,
		columnNumber: 4
	}, this);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$7.jsxDEV)(PanelDropdown, {
		data,
		field,
		onChange,
		validity
	}, void 0, false, {
		fileName: _jsxFileName$7,
		lineNumber: 25,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime$7, _jsxFileName$7;
function init_panel() {
	return (init_panel = __esmMin((() => {
		init_modal();
		init_dropdown();
		import_jsx_dev_runtime$7 = require_jsx_dev_runtime();
		_jsxFileName$7 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/dataviews/src/components/dataform-layouts/panel/index.tsx";
		try {
			FormPanelField.__docgenInfo = {
				"description": "",
				"displayName": "panel",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/dataviews/src/components/dataform-layouts/panel/index.tsx",
				"methods": [],
				"props": {
					"data": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/dataform.ts",
							"name": "FieldLayoutProps"
						}],
						"description": "The item being edited.",
						"name": "data",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/dataform.ts",
							"name": "FieldLayoutProps"
						},
						"required": true,
						"tags": {},
						"type": { "name": "Item" }
					},
					"field": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/dataform.ts",
							"name": "FieldLayoutProps"
						}],
						"description": "The normalized form field to render.",
						"name": "field",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/dataform.ts",
							"name": "FieldLayoutProps"
						},
						"required": true,
						"tags": {},
						"type": { "name": "NormalizedFormField" }
					},
					"onChange": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/dataform.ts",
							"name": "FieldLayoutProps"
						}],
						"description": "Callback invoked when the user edits the field, receiving the partial\nitem returned by the field's `setValue`. By default that is an object\nkeyed by field id, nested for dotted ids; a custom `setValue` may\nreturn any other partial shape of the item.",
						"name": "onChange",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/dataform.ts",
							"name": "FieldLayoutProps"
						},
						"required": true,
						"tags": {},
						"type": { "name": "(value: any) => void" }
					},
					"hideLabelFromVision": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/dataform.ts",
							"name": "FieldLayoutProps"
						}],
						"description": "Whether the field's label is visually hidden\n(but still available to assistive technology).",
						"name": "hideLabelFromVision",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/dataform.ts",
							"name": "FieldLayoutProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"markWhenOptional": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/dataform.ts",
							"name": "FieldLayoutProps"
						}],
						"description": "Whether to append \"(optional)\" to the label of optional fields,\ninstead of marking required fields.",
						"name": "markWhenOptional",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/dataform.ts",
							"name": "FieldLayoutProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"validity": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/dataform.ts",
							"name": "FieldLayoutProps"
						}],
						"description": "The validity state of the field.",
						"name": "validity",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/dataform.ts",
							"name": "FieldLayoutProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "FieldValidity" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/dataviews/src/components/dataform-layouts/get-validation-message.ts
function countInvalidFields(validity) {
	if (!validity) return 0;
	let count = 0;
	const validityRules = Object.keys(validity).filter((key) => key !== "children");
	for (const key of validityRules) if (validity[key]?.type === "invalid") count++;
	if (validity.children) for (const childValidity of Object.values(validity.children)) count += countInvalidFields(childValidity);
	return count;
}
/**
* Summarizes how many fields need attention, or `undefined` when they are
* all valid. Used both as the visible badge text and as the message announced
* to assistive technology when a layout reveals its errors.
*
* @param validity The validity of the layout's field and its children.
*/
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
//#region ../packages/dataviews/src/components/dataform-layouts/validation-badge.tsx
function ValidationBadge({ validity }) {
	const message = getValidationMessage(validity);
	if (!message) return null;
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$6.jsxDEV)(Badge, {
		intent: "high",
		children: message
	}, void 0, false, {
		fileName: _jsxFileName$6,
		lineNumber: 16,
		columnNumber: 9
	}, this);
}
var import_jsx_dev_runtime$6, _jsxFileName$6;
function init_validation_badge() {
	return (init_validation_badge = __esmMin((() => {
		init_badge();
		init_get_validation_message();
		import_jsx_dev_runtime$6 = require_jsx_dev_runtime();
		_jsxFileName$6 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/dataviews/src/components/dataform-layouts/validation-badge.tsx";
		try {
			ValidationBadge.__docgenInfo = {
				"description": "",
				"displayName": "validationbadge",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/dataviews/src/components/dataform-layouts/validation-badge.tsx",
				"methods": [],
				"props": { "validity": {
					"defaultValue": null,
					"declarations": [{
						"fileName": "gutenberg-storybook-preview/packages/dataviews/src/components/dataform-layouts/validation-badge.tsx",
						"name": "TypeLiteral"
					}],
					"description": "",
					"name": "validity",
					"required": true,
					"tags": {},
					"type": { "name": "FieldValidity | undefined" }
				} },
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/dataviews/src/components/dataform-layouts/card/index.tsx
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
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$5.jsxDEV)(Stack, {
		align: "center",
		justify: "space-between",
		className: "dataforms-layouts-card__field-header-content",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime$5.jsxDEV)(Title, { children: label }, void 0, false, {
			fileName: _jsxFileName$5,
			lineNumber: 112,
			columnNumber: 4
		}, this), (hasBadge || hasSummary) && /* @__PURE__ */ (0, import_jsx_dev_runtime$5.jsxDEV)(HeaderDescription, {
			className: "dataforms-layouts-card__field-header-content-description",
			children: [hasBadge && /* @__PURE__ */ (0, import_jsx_dev_runtime$5.jsxDEV)(ValidationBadge, { validity }, void 0, false, {
				fileName: _jsxFileName$5,
				lineNumber: 115,
				columnNumber: 20
			}, this), hasSummary && /* @__PURE__ */ (0, import_jsx_dev_runtime$5.jsxDEV)("div", {
				className: "dataforms-layouts-card__field-summary",
				children: visibleSummaryFields.map((summaryField) => /* @__PURE__ */ (0, import_jsx_dev_runtime$5.jsxDEV)(summaryField.render, {
					item: data,
					field: summaryField
				}, summaryField.id, false, {
					fileName: _jsxFileName$5,
					lineNumber: 119,
					columnNumber: 9
				}, this))
			}, void 0, false, {
				fileName: _jsxFileName$5,
				lineNumber: 117,
				columnNumber: 7
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName$5,
			lineNumber: 114,
			columnNumber: 5
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName$5,
		lineNumber: 107,
		columnNumber: 3
	}, this);
}
function BodyContent({ data, field, form, onChange, hideLabelFromVision, markWhenOptional, validity, withHeader }) {
	if (field.children) return /* @__PURE__ */ (0, import_jsx_dev_runtime$5.jsxDEV)(import_jsx_dev_runtime$5.Fragment, { children: [field.description && /* @__PURE__ */ (0, import_jsx_dev_runtime$5.jsxDEV)("div", {
		className: "dataforms-layouts-card__field-description",
		children: field.description
	}, void 0, false, {
		fileName: _jsxFileName$5,
		lineNumber: 156,
		columnNumber: 6
	}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime$5.jsxDEV)(DataFormLayout, {
		data,
		form,
		onChange,
		validity: validity?.children
	}, void 0, false, {
		fileName: _jsxFileName$5,
		lineNumber: 160,
		columnNumber: 5
	}, this)] }, void 0, true, {
		fileName: _jsxFileName$5,
		lineNumber: 154,
		columnNumber: 4
	}, this);
	const SingleFieldLayout = getFormFieldLayout("regular")?.component;
	if (!SingleFieldLayout) return null;
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$5.jsxDEV)(SingleFieldLayout, {
		data,
		field,
		onChange,
		hideLabelFromVision: hideLabelFromVision || withHeader,
		markWhenOptional,
		validity
	}, void 0, false, {
		fileName: _jsxFileName$5,
		lineNumber: 176,
		columnNumber: 3
	}, this);
}
function FormCardField({ data, field, onChange, hideLabelFromVision, markWhenOptional, validity }) {
	const { fields } = (0, import_react.useContext)(DataFormContext);
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
	const bodyContent = /* @__PURE__ */ (0, import_jsx_dev_runtime$5.jsxDEV)(BodyContent, {
		data,
		field,
		form,
		onChange,
		hideLabelFromVision,
		markWhenOptional,
		validity,
		withHeader
	}, void 0, false, {
		fileName: _jsxFileName$5,
		lineNumber: 285,
		columnNumber: 3
	}, this);
	const headerContent = /* @__PURE__ */ (0, import_jsx_dev_runtime$5.jsxDEV)(HeaderContent, {
		data,
		fields,
		label,
		layout,
		isOpen: isCollapsible ? !!isOpen : true,
		touched,
		validity
	}, void 0, false, {
		fileName: _jsxFileName$5,
		lineNumber: 298,
		columnNumber: 3
	}, this);
	if (withHeader && isCollapsible) return /* @__PURE__ */ (0, import_jsx_dev_runtime$5.jsxDEV)(Root3, {
		className: "dataforms-layouts-card__field",
		open: isOpen,
		onOpenChange: handleOpenChange,
		...focusOutsideProps,
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime$5.jsxDEV)(Header2, { children: headerContent }, void 0, false, {
			fileName: _jsxFileName$5,
			lineNumber: 317,
			columnNumber: 5
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime$5.jsxDEV)(Content2, {
			ref: contentRef,
			onFocus: handleContentFocus,
			children: bodyContent
		}, void 0, false, {
			fileName: _jsxFileName$5,
			lineNumber: 320,
			columnNumber: 5
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName$5,
		lineNumber: 311,
		columnNumber: 4
	}, this);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$5.jsxDEV)(Root, {
		className: "dataforms-layouts-card__field",
		...focusOutsideProps,
		children: [withHeader && /* @__PURE__ */ (0, import_jsx_dev_runtime$5.jsxDEV)(Header$2, { children: headerContent }, void 0, false, {
			fileName: _jsxFileName$5,
			lineNumber: 335,
			columnNumber: 20
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime$5.jsxDEV)(Content, {
			ref: contentRef,
			onFocus: handleContentFocus,
			children: bodyContent
		}, void 0, false, {
			fileName: _jsxFileName$5,
			lineNumber: 336,
			columnNumber: 4
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName$5,
		lineNumber: 331,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime$5, _jsxFileName$5;
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
		import_jsx_dev_runtime$5 = require_jsx_dev_runtime();
		_jsxFileName$5 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/dataviews/src/components/dataform-layouts/card/index.tsx";
		try {
			FormCardField.__docgenInfo = {
				"description": "",
				"displayName": "card",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/dataviews/src/components/dataform-layouts/card/index.tsx",
				"methods": [],
				"props": {
					"data": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/dataform.ts",
							"name": "FieldLayoutProps"
						}],
						"description": "The item being edited.",
						"name": "data",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/dataform.ts",
							"name": "FieldLayoutProps"
						},
						"required": true,
						"tags": {},
						"type": { "name": "Item" }
					},
					"field": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/dataform.ts",
							"name": "FieldLayoutProps"
						}],
						"description": "The normalized form field to render.",
						"name": "field",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/dataform.ts",
							"name": "FieldLayoutProps"
						},
						"required": true,
						"tags": {},
						"type": { "name": "NormalizedFormField" }
					},
					"onChange": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/dataform.ts",
							"name": "FieldLayoutProps"
						}],
						"description": "Callback invoked when the user edits the field, receiving the partial\nitem returned by the field's `setValue`. By default that is an object\nkeyed by field id, nested for dotted ids; a custom `setValue` may\nreturn any other partial shape of the item.",
						"name": "onChange",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/dataform.ts",
							"name": "FieldLayoutProps"
						},
						"required": true,
						"tags": {},
						"type": { "name": "(value: any) => void" }
					},
					"hideLabelFromVision": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/dataform.ts",
							"name": "FieldLayoutProps"
						}],
						"description": "Whether the field's label is visually hidden\n(but still available to assistive technology).",
						"name": "hideLabelFromVision",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/dataform.ts",
							"name": "FieldLayoutProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"markWhenOptional": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/dataform.ts",
							"name": "FieldLayoutProps"
						}],
						"description": "Whether to append \"(optional)\" to the label of optional fields,\ninstead of marking required fields.",
						"name": "markWhenOptional",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/dataform.ts",
							"name": "FieldLayoutProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"validity": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/dataform.ts",
							"name": "FieldLayoutProps"
						}],
						"description": "The validity state of the field.",
						"name": "validity",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/dataform.ts",
							"name": "FieldLayoutProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "FieldValidity" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/dataviews/src/components/dataform-layouts/row/index.tsx
function Header({ title }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$4.jsxDEV)(Stack, {
		direction: "column",
		className: "dataforms-layouts-row__header",
		gap: "lg",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime$4.jsxDEV)(Stack, {
			direction: "row",
			align: "center",
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime$4.jsxDEV)(component_default$1, {
				level: 2,
				size: 13,
				children: title
			}, void 0, false, {
				fileName: _jsxFileName$4,
				lineNumber: 21,
				columnNumber: 5
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName$4,
			lineNumber: 20,
			columnNumber: 4
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$4,
		lineNumber: 15,
		columnNumber: 3
	}, this);
}
function FormRowField({ data, field, onChange, hideLabelFromVision, markWhenOptional, validity }) {
	const layout = field.layout;
	if (!!field.children) {
		const form = {
			layout: DEFAULT_LAYOUT,
			fields: field.children
		};
		return /* @__PURE__ */ (0, import_jsx_dev_runtime$4.jsxDEV)("div", {
			className: "dataforms-layouts-row__field",
			children: [!hideLabelFromVision && field.label && /* @__PURE__ */ (0, import_jsx_dev_runtime$4.jsxDEV)(Header, { title: field.label }, void 0, false, {
				fileName: _jsxFileName$4,
				lineNumber: 52,
				columnNumber: 6
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime$4.jsxDEV)(Stack, {
				direction: "row",
				align: layout.alignment,
				gap: "lg",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime$4.jsxDEV)(DataFormLayout, {
					data,
					form,
					onChange,
					validity: validity?.children,
					as: EMPTY_WRAPPER,
					children: (FieldLayout, childField, childFieldValidity) => /* @__PURE__ */ (0, import_jsx_dev_runtime$4.jsxDEV)("div", {
						className: "dataforms-layouts-row__field-control",
						style: layout.styles[childField.id],
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime$4.jsxDEV)(FieldLayout, {
							data,
							field: childField,
							onChange,
							hideLabelFromVision,
							markWhenOptional,
							validity: childFieldValidity
						}, void 0, false, {
							fileName: _jsxFileName$4,
							lineNumber: 68,
							columnNumber: 9
						}, this)
					}, childField.id, false, {
						fileName: _jsxFileName$4,
						lineNumber: 63,
						columnNumber: 8
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName$4,
					lineNumber: 55,
					columnNumber: 6
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName$4,
				lineNumber: 54,
				columnNumber: 5
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName$4,
			lineNumber: 50,
			columnNumber: 4
		}, this);
	}
	const RegularLayout = getFormFieldLayout("regular")?.component;
	if (!RegularLayout) return null;
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$4.jsxDEV)(import_jsx_dev_runtime$4.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime$4.jsxDEV)("div", {
		className: "dataforms-layouts-row__field-control",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime$4.jsxDEV)(RegularLayout, {
			data,
			field,
			onChange,
			markWhenOptional,
			validity
		}, void 0, false, {
			fileName: _jsxFileName$4,
			lineNumber: 92,
			columnNumber: 5
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$4,
		lineNumber: 91,
		columnNumber: 4
	}, this) }, void 0, false, {
		fileName: _jsxFileName$4,
		lineNumber: 90,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime$4, _jsxFileName$4, EMPTY_WRAPPER;
function init_row() {
	return (init_row = __esmMin((() => {
		init_component$1();
		init_stack();
		init_data_form_layout();
		init_normalize_form();
		init_dataform_layouts();
		import_jsx_dev_runtime$4 = require_jsx_dev_runtime();
		_jsxFileName$4 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/dataviews/src/components/dataform-layouts/row/index.tsx";
		EMPTY_WRAPPER = ({ children }) => /* @__PURE__ */ (0, import_jsx_dev_runtime$4.jsxDEV)(import_jsx_dev_runtime$4.Fragment, { children }, void 0, false, {
			fileName: _jsxFileName$4,
			lineNumber: 30,
			columnNumber: 2
		}, void 0);
		try {
			FormRowField.__docgenInfo = {
				"description": "",
				"displayName": "row",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/dataviews/src/components/dataform-layouts/row/index.tsx",
				"methods": [],
				"props": {
					"data": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/dataform.ts",
							"name": "FieldLayoutProps"
						}],
						"description": "The item being edited.",
						"name": "data",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/dataform.ts",
							"name": "FieldLayoutProps"
						},
						"required": true,
						"tags": {},
						"type": { "name": "Item" }
					},
					"field": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/dataform.ts",
							"name": "FieldLayoutProps"
						}],
						"description": "The normalized form field to render.",
						"name": "field",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/dataform.ts",
							"name": "FieldLayoutProps"
						},
						"required": true,
						"tags": {},
						"type": { "name": "NormalizedFormField" }
					},
					"onChange": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/dataform.ts",
							"name": "FieldLayoutProps"
						}],
						"description": "Callback invoked when the user edits the field, receiving the partial\nitem returned by the field's `setValue`. By default that is an object\nkeyed by field id, nested for dotted ids; a custom `setValue` may\nreturn any other partial shape of the item.",
						"name": "onChange",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/dataform.ts",
							"name": "FieldLayoutProps"
						},
						"required": true,
						"tags": {},
						"type": { "name": "(value: any) => void" }
					},
					"hideLabelFromVision": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/dataform.ts",
							"name": "FieldLayoutProps"
						}],
						"description": "Whether the field's label is visually hidden\n(but still available to assistive technology).",
						"name": "hideLabelFromVision",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/dataform.ts",
							"name": "FieldLayoutProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"markWhenOptional": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/dataform.ts",
							"name": "FieldLayoutProps"
						}],
						"description": "Whether to append \"(optional)\" to the label of optional fields,\ninstead of marking required fields.",
						"name": "markWhenOptional",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/dataform.ts",
							"name": "FieldLayoutProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"validity": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/dataform.ts",
							"name": "FieldLayoutProps"
						}],
						"description": "The validity state of the field.",
						"name": "validity",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/dataform.ts",
							"name": "FieldLayoutProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "FieldValidity" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/dataviews/src/components/dataform-layouts/details/index.tsx
function FormDetailsField({ data, field, onChange, validity }) {
	const { fields } = (0, import_react.useContext)(DataFormContext);
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
	if (summaryField && summaryField.render) summaryContent = /* @__PURE__ */ (0, import_jsx_dev_runtime$3.jsxDEV)(summaryField.render, {
		item: data,
		field: summaryField
	}, void 0, false, {
		fileName: _jsxFileName$3,
		lineNumber: 122,
		columnNumber: 4
	}, this);
	else summaryContent = field.label || __("More details");
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$3.jsxDEV)("details", {
		ref: detailsRef,
		className: "dataforms-layouts-details__details",
		...focusOutsideProps,
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime$3.jsxDEV)("summary", {
			className: "dataforms-layouts-details__summary",
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime$3.jsxDEV)(Stack, {
				direction: "row",
				align: "center",
				gap: "md",
				className: "dataforms-layouts-details__summary-content",
				children: [summaryContent, touched && /* @__PURE__ */ (0, import_jsx_dev_runtime$3.jsxDEV)(ValidationBadge, { validity }, void 0, false, {
					fileName: _jsxFileName$3,
					lineNumber: 143,
					columnNumber: 19
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$3,
				lineNumber: 136,
				columnNumber: 5
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName$3,
			lineNumber: 135,
			columnNumber: 4
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime$3.jsxDEV)("div", {
			ref: contentRef,
			className: "dataforms-layouts-details__content",
			onFocus: handleContentFocus,
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime$3.jsxDEV)(DataFormLayout, {
				data,
				form,
				onChange,
				validity: validity?.children
			}, void 0, false, {
				fileName: _jsxFileName$3,
				lineNumber: 151,
				columnNumber: 5
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName$3,
			lineNumber: 146,
			columnNumber: 4
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName$3,
		lineNumber: 130,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime$3, _jsxFileName$3;
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
		import_jsx_dev_runtime$3 = require_jsx_dev_runtime();
		_jsxFileName$3 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/dataviews/src/components/dataform-layouts/details/index.tsx";
		try {
			FormDetailsField.__docgenInfo = {
				"description": "",
				"displayName": "details",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/dataviews/src/components/dataform-layouts/details/index.tsx",
				"methods": [],
				"props": {
					"data": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/dataform.ts",
							"name": "FieldLayoutProps"
						}],
						"description": "The item being edited.",
						"name": "data",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/dataform.ts",
							"name": "FieldLayoutProps"
						},
						"required": true,
						"tags": {},
						"type": { "name": "Item" }
					},
					"field": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/dataform.ts",
							"name": "FieldLayoutProps"
						}],
						"description": "The normalized form field to render.",
						"name": "field",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/dataform.ts",
							"name": "FieldLayoutProps"
						},
						"required": true,
						"tags": {},
						"type": { "name": "NormalizedFormField" }
					},
					"onChange": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/dataform.ts",
							"name": "FieldLayoutProps"
						}],
						"description": "Callback invoked when the user edits the field, receiving the partial\nitem returned by the field's `setValue`. By default that is an object\nkeyed by field id, nested for dotted ids; a custom `setValue` may\nreturn any other partial shape of the item.",
						"name": "onChange",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/dataform.ts",
							"name": "FieldLayoutProps"
						},
						"required": true,
						"tags": {},
						"type": { "name": "(value: any) => void" }
					},
					"hideLabelFromVision": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/dataform.ts",
							"name": "FieldLayoutProps"
						}],
						"description": "Whether the field's label is visually hidden\n(but still available to assistive technology).",
						"name": "hideLabelFromVision",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/dataform.ts",
							"name": "FieldLayoutProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"markWhenOptional": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/dataform.ts",
							"name": "FieldLayoutProps"
						}],
						"description": "Whether to append \"(optional)\" to the label of optional fields,\ninstead of marking required fields.",
						"name": "markWhenOptional",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/dataform.ts",
							"name": "FieldLayoutProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"validity": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/dataform.ts",
							"name": "FieldLayoutProps"
						}],
						"description": "The validity state of the field.",
						"name": "validity",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/dataform.ts",
							"name": "FieldLayoutProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "FieldValidity" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/dataviews/src/components/dataform-layouts/index.tsx
function getFormFieldLayout(type) {
	return FORM_FIELD_LAYOUTS.find((layout) => layout.type === type);
}
var import_jsx_dev_runtime$2, _jsxFileName$2, FORM_FIELD_LAYOUTS;
function init_dataform_layouts() {
	return (init_dataform_layouts = __esmMin((() => {
		init_stack();
		init_regular();
		init_panel();
		init_card();
		init_row();
		init_details();
		import_jsx_dev_runtime$2 = require_jsx_dev_runtime();
		_jsxFileName$2 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/dataviews/src/components/dataform-layouts/index.tsx";
		FORM_FIELD_LAYOUTS = [
			{
				type: "regular",
				component: FormRegularField,
				wrapper: ({ children }) => /* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)(Stack, {
					direction: "column",
					className: "dataforms-layouts__wrapper",
					gap: "lg",
					children
				}, void 0, false, {
					fileName: _jsxFileName$2,
					lineNumber: 14,
					columnNumber: 4
				}, void 0)
			},
			{
				type: "panel",
				component: FormPanelField,
				wrapper: ({ children }) => /* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)(Stack, {
					direction: "column",
					className: "dataforms-layouts__wrapper",
					gap: "md",
					children
				}, void 0, false, {
					fileName: _jsxFileName$2,
					lineNumber: 27,
					columnNumber: 4
				}, void 0)
			},
			{
				type: "card",
				component: FormCardField,
				wrapper: ({ children }) => /* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)(Stack, {
					direction: "column",
					className: "dataforms-layouts__wrapper",
					gap: "xl",
					children
				}, void 0, false, {
					fileName: _jsxFileName$2,
					lineNumber: 40,
					columnNumber: 4
				}, void 0)
			},
			{
				type: "row",
				component: FormRowField,
				wrapper: ({ children, layout }) => /* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)(Stack, {
					direction: "column",
					className: "dataforms-layouts__wrapper",
					gap: "lg",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)("div", {
						className: "dataforms-layouts-row__field",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)(Stack, {
							direction: "row",
							gap: "lg",
							align: layout.alignment,
							children
						}, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 65,
							columnNumber: 6
						}, void 0)
					}, void 0, false, {
						fileName: _jsxFileName$2,
						lineNumber: 64,
						columnNumber: 5
					}, void 0)
				}, void 0, false, {
					fileName: _jsxFileName$2,
					lineNumber: 59,
					columnNumber: 4
				}, void 0)
			},
			{
				type: "details",
				component: FormDetailsField
			}
		];
		try {
			getFormFieldLayout.__docgenInfo = {
				"description": "",
				"displayName": "getFormFieldLayout",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/dataviews/src/components/dataform-layouts/index.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/dataviews/src/components/dataform-layouts/data-form-layout.tsx
function DataFormLayout({ data, form, onChange, validity, children, as }) {
	const { fields: fieldDefinitions } = (0, import_react.useContext)(DataFormContext);
	const markWhenOptional = (0, import_react.useMemo)(() => {
		const requiredCount = fieldDefinitions.filter((f) => !!f.isValid?.required).length;
		return requiredCount > fieldDefinitions.length - requiredCount;
	}, [fieldDefinitions]);
	function getFieldDefinition(field) {
		return fieldDefinitions.find((fieldDefinition) => fieldDefinition.id === field.id);
	}
	const Wrapper = as ?? getFormFieldLayout(form.layout.type)?.wrapper ?? DEFAULT_WRAPPER;
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(Wrapper, {
		layout: form.layout,
		children: form.fields.map((formField) => {
			const FieldLayout = getFormFieldLayout(formField.layout.type)?.component;
			if (!FieldLayout) return null;
			const fieldDefinition = !formField.children ? getFieldDefinition(formField) : void 0;
			if (fieldDefinition && fieldDefinition.isVisible && !fieldDefinition.isVisible(data)) return null;
			if (children) return children(FieldLayout, formField, validity?.[formField.id], markWhenOptional);
			return /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(FieldLayout, {
				data,
				field: formField,
				onChange,
				markWhenOptional,
				validity: validity?.[formField.id]
			}, formField.id, false, {
				fileName: _jsxFileName$1,
				lineNumber: 101,
				columnNumber: 6
			}, this);
		})
	}, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 69,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime$1, _jsxFileName$1, DEFAULT_WRAPPER;
function init_data_form_layout() {
	return (init_data_form_layout = __esmMin((() => {
		init_react();
		init_stack();
		init_dataform_layouts();
		init_dataform_context();
		import_jsx_dev_runtime$1 = require_jsx_dev_runtime();
		_jsxFileName$1 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/dataviews/src/components/dataform-layouts/data-form-layout.tsx";
		DEFAULT_WRAPPER = ({ children }) => /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(Stack, {
			direction: "column",
			className: "dataforms-layouts__wrapper",
			gap: "lg",
			children
		}, void 0, false, {
			fileName: _jsxFileName$1,
			lineNumber: 13,
			columnNumber: 2
		}, void 0);
		try {
			DataFormLayout.__docgenInfo = {
				"description": "",
				"displayName": "DataFormLayout",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/dataviews/src/components/dataform-layouts/data-form-layout.tsx",
				"methods": [],
				"props": {
					"data": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/components/dataform-layouts/data-form-layout.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "data",
						"required": true,
						"tags": {},
						"type": { "name": "Item" }
					},
					"form": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/components/dataform-layouts/data-form-layout.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "form",
						"required": true,
						"tags": {},
						"type": { "name": "NormalizedForm" }
					},
					"onChange": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/components/dataform-layouts/data-form-layout.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "onChange",
						"required": true,
						"tags": {},
						"type": { "name": "(value: any) => void" }
					},
					"validity": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/components/dataform-layouts/data-form-layout.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "validity",
						"required": false,
						"tags": {},
						"type": { "name": "FormValidity" }
					},
					"as": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/components/dataform-layouts/data-form-layout.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "as",
						"required": false,
						"tags": {},
						"type": { "name": "ComponentType<{ children: ReactNode; }>" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/dataviews/src/dataform/index.tsx
/**
* `DataForm` renders an auto-generated form for viewing and editing the fields
* of a data item, driven by a fields and form layout configuration. Use it to
* edit items of a dataset, often alongside `DataViews`.
*/
function DataForm({ data, form, fields, onChange, validity }) {
	const normalizedForm = (0, import_react.useMemo)(() => normalizeForm(form), [form]);
	const normalizedFields = (0, import_react.useMemo)(() => normalizeFields(fields), [fields]);
	if (!form.fields) return null;
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DataFormProvider, {
		fields: normalizedFields,
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DataFormLayout, {
			data,
			form: normalizedForm,
			onChange,
			validity
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 32,
			columnNumber: 4
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 31,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime, _jsxFileName;
function init_dataform() {
	return (init_dataform = __esmMin((() => {
		init_react();
		init_field_types();
		init_dataform_context();
		init_data_form_layout();
		init_normalize_form();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/dataviews/src/dataform/index.tsx";
		try {
			DataForm.__docgenInfo = {
				"description": "`DataForm` renders an auto-generated form for viewing and editing the fields\nof a data item, driven by a fields and form layout configuration. Use it to\nedit items of a dataset, often alongside `DataViews`.",
				"displayName": "dataform",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/dataviews/src/dataform/index.tsx",
				"methods": [],
				"props": {
					"data": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/dataform.ts",
							"name": "DataFormProps"
						}],
						"description": "The item being edited.",
						"name": "data",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/dataform.ts",
							"name": "DataFormProps"
						},
						"required": true,
						"tags": {},
						"type": { "name": "Item" }
					},
					"fields": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/dataform.ts",
							"name": "DataFormProps"
						}],
						"description": "The field definitions for the item.",
						"name": "fields",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/dataform.ts",
							"name": "DataFormProps"
						},
						"required": true,
						"tags": {},
						"type": { "name": "Field<Item>[]" }
					},
					"form": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/dataform.ts",
							"name": "DataFormProps"
						}],
						"description": "The form configuration: which fields to render and with which layout.",
						"name": "form",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/dataform.ts",
							"name": "DataFormProps"
						},
						"required": true,
						"tags": {},
						"type": { "name": "Form" }
					},
					"onChange": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/dataform.ts",
							"name": "DataFormProps"
						}],
						"description": "Callback invoked when the user edits a field, receiving the partial\nitem returned by the field's `setValue`. By default that is an object\nkeyed by field id, nested for dotted ids (e.g. `{ a: { b: value } }`\nfor the field `a.b`); a custom `setValue` may return any other partial\nshape of the item.",
						"name": "onChange",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/dataform.ts",
							"name": "DataFormProps"
						},
						"required": true,
						"tags": {},
						"type": { "name": "(value: Record<string, any>) => void" }
					},
					"validity": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/dataform.ts",
							"name": "DataFormProps"
						}],
						"description": "The validity state of the form's fields, keyed by field id.",
						"name": "validity",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/dataform.ts",
							"name": "DataFormProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "FormValidity" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
export { useFormValidity as i, init_dataform as n, init_use_form_validity as r, DataForm as t };
