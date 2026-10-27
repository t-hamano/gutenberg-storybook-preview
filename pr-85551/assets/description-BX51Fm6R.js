import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { a as init_clsx, i as clsx } from "./iframe-UtSZlYID.js";
import { a as FieldRoot, i as init_FieldLabel, n as init_FieldDescription, o as init_FieldRoot, r as FieldLabel, t as FieldDescription } from "./FieldDescription-DSh96xOJ.js";
import { n as resets_module_default, t as init_resets_module } from "./resets.module-CJil9Bz6.js";
import { n as init_global_css_defense_module, t as global_css_defense_module_default } from "./global-css-defense.module-BTDDc07p.js";
import { n as init_visually_hidden, t as VisuallyHidden } from "./visually-hidden-FYENO0pz.js";
import { n as init_stack, t as Stack } from "./stack-B_tyTWv7.js";
import { n as init_field_module, t as field_module_default } from "./field.module-CMS62o56.js";
//#region ../packages/ui/src/form/primitives/field/root.tsx
var import_jsx_dev_runtime$2, _jsxFileName$2, DEFAULT_RENDER, Root;
function init_root() {
	return (init_root = __esmMin((() => {
		init_clsx();
		init_FieldRoot();
		init_react();
		init_resets_module();
		init_stack();
		import_jsx_dev_runtime$2 = require_jsx_dev_runtime();
		_jsxFileName$2 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/primitives/field/root.tsx";
		DEFAULT_RENDER = (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)(Stack, {
			...props,
			direction: "column",
			gap: "sm"
		}, void 0, false, {
			fileName: _jsxFileName$2,
			lineNumber: 9,
			columnNumber: 2
		}, void 0);
		Root = (0, import_react.forwardRef)(function UnforwardedRoot({ className, render = DEFAULT_RENDER, ...restProps }, ref) {
			return /* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)(FieldRoot, {
				ref,
				className: clsx(resets_module_default["box-sizing"], className),
				render,
				...restProps
			}, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 27,
				columnNumber: 4
			}, this);
		});
		try {
			Root.__docgenInfo = {
				"description": "A low-level component that associates an accessible label and description\nwith a single form control element.\n\nTo label a group of multiple form control elements, use the `Fieldset` component instead.\n\nSimply wrapping a control with this component does not guarantee\naccessible labeling. See examples for how to associate the label in different cases.",
				"displayName": "Root",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/primitives/field/root.tsx",
				"methods": [],
				"props": {
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
					"name": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/field/root/FieldRoot.d.mts",
							"name": "FieldRootProps"
						}],
						"description": "Identifies the field when a form is submitted.\nTakes precedence over the `name` prop on the `<Field.Control>` component.",
						"name": "name",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/field/root/FieldRoot.d.mts",
							"name": "FieldRootProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"actionsRef": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/field/root/FieldRoot.d.mts",
							"name": "FieldRootProps"
						}],
						"description": "A ref to imperative actions.\n- `validate`: Validates the field when called.",
						"name": "actionsRef",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/field/root/FieldRoot.d.mts",
							"name": "FieldRootProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "RefObject<FieldRootActions | null>" }
					},
					"disabled": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/form/primitives/field/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Whether the field is disabled.",
						"name": "disabled",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/ui/src/form/primitives/field/label.tsx
var import_jsx_dev_runtime$1, _jsxFileName$1, Label;
function init_label() {
	return (init_label = __esmMin((() => {
		init_clsx();
		init_FieldLabel();
		init_react();
		init_field_module();
		init_visually_hidden();
		import_jsx_dev_runtime$1 = require_jsx_dev_runtime();
		_jsxFileName$1 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/primitives/field/label.tsx";
		Label = (0, import_react.forwardRef)(function UnforwardedLabel({ className, hideFromVision, variant, ...restProps }, ref) {
			const label = /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(FieldLabel, {
				ref,
				className: clsx(field_module_default.label, variant && field_module_default[`is-${variant}`], className),
				...restProps
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 14,
				columnNumber: 4
			}, this);
			if (hideFromVision) return /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(VisuallyHidden, { render: label }, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 28,
				columnNumber: 11
			}, this);
			return label;
		});
		try {
			Label.__docgenInfo = {
				"description": "",
				"displayName": "Label",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/primitives/field/label.tsx",
				"methods": [],
				"props": {
					"nativeLabel": {
						"defaultValue": { "value": "true" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/field/label/FieldLabel.d.mts",
							"name": "FieldLabelProps"
						}],
						"description": "Whether the component renders a native `<label>` element when replacing it via the `render` prop.\nSet to `false` if the rendered element is not a label (for example, `<div>`).\n\nThis is useful to avoid inheriting label behaviors on `<button>` controls (such as `<Select.Trigger>` and `<Combobox.Trigger>`), including avoiding `:hover` on the button when hovering the label, and preventing clicks on the label from firing on the button.",
						"name": "nativeLabel",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/field/label/FieldLabel.d.mts",
							"name": "FieldLabelProps"
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
					},
					"variant": {
						"defaultValue": { "value": "'default'" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/form/primitives/field/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The visual variant of the label.\n\nUse 'plain' for controls like checkboxes and radio buttons.",
						"name": "variant",
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "\"default\" | \"plain\"",
							"value": [{ "value": "\"default\"" }, { "value": "\"plain\"" }]
						}
					},
					"children": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/form/primitives/field/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The label string, or the string and the element to associate it with.\n\nTo keep things accessible, do not include other interactive\nelements such as links or buttons.",
						"name": "children",
						"required": false,
						"tags": {},
						"type": { "name": "ReactNode" }
					},
					"hideFromVision": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/form/primitives/field/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Whether to visually hide the label while keeping it accessible\nto screen readers.",
						"name": "hideFromVision",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/ui/src/form/primitives/field/description.tsx
var import_jsx_dev_runtime, _jsxFileName, Description;
function init_description() {
	return (init_description = __esmMin((() => {
		init_clsx();
		init_FieldDescription();
		init_react();
		init_global_css_defense_module();
		init_field_module();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/primitives/field/description.tsx";
		Description = (0, import_react.forwardRef)(function UnforwardedDescription({ className, ...restProps }, ref) {
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FieldDescription, {
				ref,
				className: clsx(global_css_defense_module_default.p, field_module_default.description, className),
				...restProps
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 13,
				columnNumber: 3
			}, this);
		});
		try {
			Description.__docgenInfo = {
				"description": "",
				"displayName": "Description",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/primitives/field/description.tsx",
				"methods": [],
				"props": {
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
							"fileName": "gutenberg-storybook-preview/packages/ui/src/form/primitives/field/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The accessible description, associated using `aria-describedby`.\n\nFor screen reader accessibility, this should only contain plain text,\nand no semantics such as links.",
						"name": "children",
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
export { Root as a, init_label as i, init_description as n, init_root as o, Label as r, Description as t };
