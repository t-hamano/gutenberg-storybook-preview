import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { a as init_clsx, i as clsx } from "./iframe-UtSZlYID.js";
import { i as init_polymorphic_element, r as PolymorphicElement } from "./component-CkY7eURU.js";
//#region ../packages/components/src/base-control/styles/style.module.scss
var wrapper, field, label, help, style_module_default;
function init_style_module() {
	return (init_style_module = __esmMin((() => {
		wrapper = "_wrapper_ijve1_46";
		field = "_field_ijve1_57";
		label = "_label_ijve1_61";
		help = "_help_ijve1_72";
		style_module_default = {
			wrapper,
			field,
			label,
			help
		};
	})))();
}
//#endregion
//#region ../packages/components/src/base-control/styles/base-control-styles.tsx
function UnforwardedWrapper({ className, ...props }, ref) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PolymorphicElement, {
		ref,
		...props,
		className: clsx(style_module_default.wrapper, className)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 24,
		columnNumber: 3
	}, this);
}
function UnforwardedStyledField({ className, ...props }, ref) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PolymorphicElement, {
		ref,
		...props,
		className: clsx(style_module_default.field, className)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 37,
		columnNumber: 3
	}, this);
}
function UnforwardedStyledLabel({ as, className, ...props }, ref) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PolymorphicElement, {
		as: as ?? "label",
		ref,
		...props,
		className: clsx(style_module_default.label, className)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 50,
		columnNumber: 3
	}, this);
}
function UnforwardedStyledHelp({ as, className, ...props }, ref) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PolymorphicElement, {
		as: as ?? "p",
		ref,
		...props,
		className: clsx(style_module_default.help, className)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 64,
		columnNumber: 3
	}, this);
}
function UnforwardedStyledVisualLabel({ as, className, ...props }, ref) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PolymorphicElement, {
		as: as ?? "span",
		ref,
		...props,
		className: clsx(style_module_default.label, className)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 78,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime, _jsxFileName, Wrapper, StyledField, StyledLabel, StyledHelp, StyledVisualLabel;
function init_base_control_styles() {
	return (init_base_control_styles = __esmMin((() => {
		init_clsx();
		init_react();
		init_polymorphic_element();
		init_style_module();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/base-control/styles/base-control-styles.tsx";
		Wrapper = (0, import_react.forwardRef)(UnforwardedWrapper);
		StyledField = (0, import_react.forwardRef)(UnforwardedStyledField);
		StyledLabel = (0, import_react.forwardRef)(UnforwardedStyledLabel);
		StyledHelp = (0, import_react.forwardRef)(UnforwardedStyledHelp);
		StyledVisualLabel = (0, import_react.forwardRef)(UnforwardedStyledVisualLabel);
		try {
			Wrapper.__docgenInfo = {
				"description": "",
				"displayName": "Wrapper",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/base-control/styles/base-control-styles.tsx",
				"methods": [],
				"props": {
					"as": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/context/wordpress-component.ts",
							"name": "TypeLiteral"
						}],
						"description": "The HTML element or React component to render the component as.",
						"name": "as",
						"required": false,
						"tags": {},
						"type": { "name": "((props: any) => ReactNode | Promise<ReactNode>) | (new (props: any, context: any) => Component<any, any, any>) | ElementType" }
					},
					"ref": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/base-control/styles/base-control-styles.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "ref",
						"required": false,
						"tags": {},
						"type": { "name": "ForwardedRef<any>" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			StyledField.__docgenInfo = {
				"description": "",
				"displayName": "StyledField",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/base-control/styles/base-control-styles.tsx",
				"methods": [],
				"props": {
					"as": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/context/wordpress-component.ts",
							"name": "TypeLiteral"
						}],
						"description": "The HTML element or React component to render the component as.",
						"name": "as",
						"required": false,
						"tags": {},
						"type": { "name": "((props: any) => ReactNode | Promise<ReactNode>) | (new (props: any, context: any) => Component<any, any, any>) | ElementType" }
					},
					"ref": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/base-control/styles/base-control-styles.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "ref",
						"required": false,
						"tags": {},
						"type": { "name": "ForwardedRef<any>" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			StyledLabel.__docgenInfo = {
				"description": "",
				"displayName": "StyledLabel",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/base-control/styles/base-control-styles.tsx",
				"methods": [],
				"props": {
					"as": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/context/wordpress-component.ts",
							"name": "TypeLiteral"
						}],
						"description": "The HTML element or React component to render the component as.",
						"name": "as",
						"required": false,
						"tags": {},
						"type": { "name": "((props: any) => ReactNode | Promise<ReactNode>) | (new (props: any, context: any) => Component<any, any, any>) | ElementType" }
					},
					"ref": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/base-control/styles/base-control-styles.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "ref",
						"required": false,
						"tags": {},
						"type": { "name": "ForwardedRef<any>" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			StyledHelp.__docgenInfo = {
				"description": "",
				"displayName": "StyledHelp",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/base-control/styles/base-control-styles.tsx",
				"methods": [],
				"props": {
					"as": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/context/wordpress-component.ts",
							"name": "TypeLiteral"
						}],
						"description": "The HTML element or React component to render the component as.",
						"name": "as",
						"required": false,
						"tags": {},
						"type": { "name": "((props: any) => ReactNode | Promise<ReactNode>) | (new (props: any, context: any) => Component<any, any, any>) | ElementType" }
					},
					"ref": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/base-control/styles/base-control-styles.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "ref",
						"required": false,
						"tags": {},
						"type": { "name": "ForwardedRef<any>" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			StyledVisualLabel.__docgenInfo = {
				"description": "",
				"displayName": "StyledVisualLabel",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/base-control/styles/base-control-styles.tsx",
				"methods": [],
				"props": {
					"as": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/context/wordpress-component.ts",
							"name": "TypeLiteral"
						}],
						"description": "The HTML element or React component to render the component as.",
						"name": "as",
						"required": false,
						"tags": {},
						"type": { "name": "((props: any) => ReactNode | Promise<ReactNode>) | (new (props: any, context: any) => Component<any, any, any>) | ElementType" }
					},
					"ref": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/base-control/styles/base-control-styles.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "ref",
						"required": false,
						"tags": {},
						"type": { "name": "ForwardedRef<any>" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
export { Wrapper as a, StyledVisualLabel as i, StyledHelp as n, init_base_control_styles as o, StyledLabel as r, StyledField as t };
