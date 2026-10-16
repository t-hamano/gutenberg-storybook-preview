import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { a as init_clsx, i as clsx } from "./iframe-Dbjzp1_m.js";
import { i as init_mergeProps, o as mergeProps } from "./useRenderElement-Dkv6YH0v.js";
import { i as init_FieldsetRoot, n as init_FieldsetLegend, r as FieldsetRoot$1, t as FieldsetLegend$1 } from "./FieldsetLegend-Bdr2PHW3.js";
import { n as useRender, t as init_useRender } from "./useRender-JXgJ-9ZS.js";
import { n as init_global_css_defense_module, t as global_css_defense_module_default } from "./global-css-defense.module-BTDDc07p.js";
import { n as init_visually_hidden, t as VisuallyHidden } from "./visually-hidden-FYENO0pz.js";
import { n as init_field_module, t as field_module_default } from "./field.module-CMS62o56.js";
//#region ../packages/ui/src/form/primitives/fieldset/style.module.css
var root, legend, description, style_module_default;
function init_style_module() {
	return (init_style_module = __esmMin((() => {
		root = "_root_19yb1_5";
		legend = "_legend_19yb1_15";
		description = "_description_19yb1_15";
		style_module_default = {
			root,
			legend,
			"is-hidden": "_is-hidden_19yb1_15",
			description
		};
	})))();
}
//#endregion
//#region ../packages/ui/src/form/primitives/fieldset/context.tsx
var fallbackContext, FieldsetContext, useFieldsetContext;
function init_context() {
	return (init_context = __esmMin((() => {
		init_react();
		fallbackContext = {
			registerDescriptionId: () => {},
			unregisterDescriptionId: () => {}
		};
		FieldsetContext = (0, import_react.createContext)(null);
		useFieldsetContext = (componentName) => {
			const context = (0, import_react.useContext)(FieldsetContext);
			if (!context) throw new Error(`${componentName}: Missing parent <Fieldset.Root>. Render <${componentName}> inside <Fieldset.Root>.`);
			return context ?? fallbackContext;
		};
		try {
			FieldsetContext.__docgenInfo = {
				"description": "",
				"displayName": "FieldsetContext",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/primitives/fieldset/context.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			useFieldsetContext.__docgenInfo = {
				"description": "",
				"displayName": "useFieldsetContext",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/primitives/fieldset/context.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/ui/src/form/primitives/fieldset/root.tsx
var import_jsx_dev_runtime$1, _jsxFileName$1, FieldsetRoot;
function init_root() {
	return (init_root = __esmMin((() => {
		init_clsx();
		init_FieldsetRoot();
		init_react();
		init_style_module();
		init_context();
		import_jsx_dev_runtime$1 = require_jsx_dev_runtime();
		_jsxFileName$1 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/primitives/fieldset/root.tsx";
		FieldsetRoot = (0, import_react.forwardRef)(function UnforwardedFieldsetRoot({ className, children, ...restProps }, ref) {
			const [descriptionId, setDescriptionId] = (0, import_react.useState)();
			const contextValue = (0, import_react.useMemo)(() => ({
				registerDescriptionId: (id) => setDescriptionId(id),
				unregisterDescriptionId: () => setDescriptionId(void 0)
			}), []);
			return /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(FieldsetContext.Provider, {
				value: contextValue,
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(FieldsetRoot$1, {
					ref,
					className: clsx(style_module_default.root, className),
					"aria-describedby": descriptionId,
					...restProps,
					children
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 33,
					columnNumber: 4
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 32,
				columnNumber: 3
			}, this);
		});
		try {
			FieldsetRoot.__docgenInfo = {
				"description": "A low-level component that associates an accessible legend and description with\na group of multiple form control elements.\n\nTo label a single form control element, use the `Field` component instead.",
				"displayName": "FieldsetRoot",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/primitives/fieldset/root.tsx",
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
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/ui/src/form/primitives/fieldset/legend.tsx
var import_jsx_dev_runtime, _jsxFileName, FieldsetLegend;
function init_legend() {
	return (init_legend = __esmMin((() => {
		init_clsx();
		init_FieldsetLegend();
		init_react();
		init_field_module();
		init_visually_hidden();
		init_style_module();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/primitives/fieldset/legend.tsx";
		FieldsetLegend = (0, import_react.forwardRef)(function UnforwardedFieldsetLegend({ className, hideFromVision, ...restProps }, ref) {
			const legend = /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FieldsetLegend$1, {
				ref,
				className: clsx(style_module_default.legend, hideFromVision && style_module_default["is-hidden"], field_module_default.label, className),
				...restProps
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 15,
				columnNumber: 4
			}, this);
			if (hideFromVision) return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(VisuallyHidden, { render: legend }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 30,
				columnNumber: 11
			}, this);
			return legend;
		});
		try {
			FieldsetLegend.__docgenInfo = {
				"description": "",
				"displayName": "FieldsetLegend",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/primitives/fieldset/legend.tsx",
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
					"hideFromVision": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/form/primitives/fieldset/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Whether to visually hide the legend while keeping it accessible\nto screen readers.",
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
//#region ../packages/ui/src/form/primitives/fieldset/description.tsx
var FieldsetDescription;
function init_description() {
	return (init_description = __esmMin((() => {
		init_clsx();
		init_mergeProps(), init_useRender();
		init_react();
		init_global_css_defense_module();
		init_field_module();
		init_context();
		init_style_module();
		FieldsetDescription = (0, import_react.forwardRef)(function UnforwardedFieldsetDescription({ className, id: idProp, render, ...restProps }, ref) {
			const generatedId = (0, import_react.useId)();
			const id = idProp ?? generatedId;
			const { registerDescriptionId, unregisterDescriptionId } = useFieldsetContext("Fieldset.Description");
			(0, import_react.useEffect)(() => {
				registerDescriptionId(id);
				return unregisterDescriptionId;
			}, [
				registerDescriptionId,
				unregisterDescriptionId,
				id
			]);
			return useRender({
				defaultTagName: "p",
				render,
				ref,
				props: mergeProps({
					className: clsx(global_css_defense_module_default.p, style_module_default.description, field_module_default.description, className),
					id
				}, restProps)
			});
		});
		try {
			FieldsetDescription.__docgenInfo = {
				"description": "",
				"displayName": "FieldsetDescription",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/primitives/fieldset/description.tsx",
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
							"fileName": "gutenberg-storybook-preview/packages/ui/src/form/primitives/fieldset/types.ts",
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
export { FieldsetRoot as a, useFieldsetContext as c, init_legend as i, init_style_module as l, init_description as n, init_root as o, FieldsetLegend as r, init_context as s, FieldsetDescription as t, style_module_default as u };
