import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as useMergeRefs, t as init_use_merge_refs } from "./use-merge-refs-BAtuPB1L.js";
import { n as init_component, t as VisuallyHidden } from "./component-CZde0e16.js";
import { n as useBaseControlProps, t as init_hooks } from "./hooks-0j5v704f.js";
import { n as init_base_control, t as BaseControl } from "./base-control-DsOU5iCO.js";
//#region ../packages/components/src/content-editable-control/style.module.scss
var editable, style_module_default;
function init_style_module() {
	return (init_style_module = __esmMin((() => {
		editable = "_editable_2kl5r_96";
		style_module_default = { editable };
	})))();
}
//#endregion
//#region ../packages/components/src/content-editable-control/index.tsx
function UnforwardedContentEditableControl({ label, id, className, help, hideLabelFromVision, disabled, required, placeholder, ...additionalProps }, forwardedRef) {
	const { baseControlProps, controlProps } = useBaseControlProps({
		id,
		className,
		help
	});
	const labelId = `${controlProps.id}__label`;
	const editableRef = (0, import_react.useRef)(null);
	const mergedRefs = useMergeRefs([editableRef, forwardedRef]);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BaseControl, {
		...baseControlProps,
		children: [hideLabelFromVision ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(VisuallyHidden, {
			id: labelId,
			children: label
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 42,
			columnNumber: 5
		}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BaseControl.VisualLabel, {
			id: labelId,
			onClick: () => editableRef.current?.focus(),
			children: label
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 44,
			columnNumber: 5
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: style_module_default.editable,
			role: "textbox",
			"aria-multiline": true,
			"aria-labelledby": labelId,
			"aria-placeholder": placeholder || void 0,
			"aria-disabled": disabled || void 0,
			"aria-required": required || void 0,
			ref: mergedRefs,
			contentEditable: !disabled,
			tabIndex: disabled ? -1 : void 0,
			suppressContentEditableWarning: true,
			...additionalProps,
			...controlProps
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 52,
			columnNumber: 4
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 40,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime, _jsxFileName, ContentEditableControl;
function init_content_editable_control() {
	return (init_content_editable_control = __esmMin((() => {
		init_use_merge_refs();
		init_react();
		init_base_control();
		init_hooks();
		init_component();
		init_style_module();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/content-editable-control/index.tsx";
		ContentEditableControl = (0, import_react.forwardRef)(UnforwardedContentEditableControl);
		try {
			ContentEditableControl.__docgenInfo = {
				"description": "A presentational `contentEditable` form control: a labeled editable element\nrendered with the chrome (`BaseControl` + label) shared by the other form\ncontrols in the package.\n\nUnlike the in-canvas `RichText` from `@wordpress/block-editor`, this control\nis intended for standalone form fields (DataForms, sidebar inputs, etc.).\nIt is deliberately **presentational only** and has no `@wordpress/rich-text`\ndependency: the editable behavior (value, formatting, keyboard shortcuts)\nand any focus/selection tracking are owned by the consumer, which wires them\nthrough the forwarded ref and native event props (see the richtext DataForm\ncontrol in `@wordpress/dataviews` for the canonical assembly).\n\n```jsx\n// The rich-text \"assembly\" lives in the consumer.\n<ContentEditableControl\n    label=\"Caption\"\n    ref={ mergedRef }\n    onFocus={ onEditableFocus }\n    onBlur={ onEditableBlur }\n/>\n```",
				"displayName": "ContentEditableControl",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/content-editable-control/index.tsx",
				"methods": [],
				"props": {
					"className": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/base-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "className",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"hideLabelFromVision": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/base-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "If true, the label will only be visible to screen readers.",
						"name": "hideLabelFromVision",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"help": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/base-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Additional description for the control.\n\nOnly use for meaningful description or instructions for the control. An element containing the description will be programmatically associated to the BaseControl by the means of an `aria-describedby` attribute.",
						"name": "help",
						"required": false,
						"tags": {},
						"type": { "name": "ReactNode" }
					},
					"label": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/content-editable-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Label text for the control.",
						"name": "label",
						"required": true,
						"tags": {},
						"type": { "name": "string" }
					},
					"disabled": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/content-editable-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Whether the field is non-editable. A disabled field exposes\n`aria-disabled`, leaves the tab order, and keeps focus if it had it.",
						"name": "disabled",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"required": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/content-editable-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Whether the field is required. Exposed to assistive technology via\n`aria-required`.",
						"name": "required",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"placeholder": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/content-editable-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Placeholder text shown while the element has no content. Exposed to\nassistive technology via `aria-placeholder` and drawn by the stylesheet\nwhen the element is empty.",
						"name": "placeholder",
						"required": false,
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
export { init_content_editable_control as n, ContentEditableControl as t };
