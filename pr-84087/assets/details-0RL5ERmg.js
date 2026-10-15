import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as __, t as init_build_module } from "./build-module-v04us4E2.js";
import { o as clsx, s as init_clsx } from "./iframe-D4D-SsYo.js";
import { n as init_FieldDescription, t as FieldDescription } from "./FieldDescription-DxOxl-GC.js";
import { n as init_visually_hidden, t as VisuallyHidden } from "./visually-hidden-Iq8CthQl.js";
import { n as init_field_module, t as field_module_default } from "./field.module-CMS62o56.js";
//#region ../packages/ui/src/form/primitives/field/details.tsx
var import_jsx_dev_runtime, _jsxFileName, Details;
function init_details() {
	return (init_details = __esmMin((() => {
		init_clsx();
		init_FieldDescription();
		init_react();
		init_build_module();
		init_field_module();
		init_visually_hidden();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/primitives/field/details.tsx";
		Details = (0, import_react.forwardRef)(function UnforwardedDetails({ className, ...restProps }, ref) {
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(VisuallyHidden, {
				render: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FieldDescription, {}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 27,
					columnNumber: 30
				}, this),
				children: __("More details follow the field.")
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 27,
				columnNumber: 5
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				ref,
				className: clsx(field_module_default.description, className),
				...restProps
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 30,
				columnNumber: 5
			}, this)] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 24,
				columnNumber: 4
			}, this);
		});
		try {
			Details.__docgenInfo = {
				"description": "A component for showing additional information about the field,\nstyled similarly to a normal `Field.Description`.\nUnlike a normal description, it can include links and other semantic elements.\n\nAlthough this content is not associated with the field using direct semantics,\nit is made discoverable to screen reader users via a visually hidden description,\nalerting them to the presence of additional information below.\n\nIf the content only includes plain text, use `Field.Description` instead,\nso the readout is not unnecessarily verbose for screen reader users.",
				"displayName": "Details",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/primitives/field/details.tsx",
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
						"description": "Additional information about the field, which unlike a normal description,\ncan include links and other semantic elements.\n\nAlthough this content is not associated with the field using direct semantics,\nit is made discoverable to screen reader users via a visually hidden description,\nalerting them to the presence of additional information below.\n\nDo not use this component when the details content is only plain text,\nas it makes the readout unnecessarily verbose for screen reader users.",
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
export { init_details as n, Details as t };
