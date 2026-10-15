import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as __, t as init_build_module } from "./build-module-v04us4E2.js";
import { o as clsx, s as init_clsx } from "./iframe-D4D-SsYo.js";
import { c as useFieldsetContext, l as init_style_module, s as init_context, u as style_module_default } from "./description-DA5EuBUN.js";
import { n as init_visually_hidden, t as VisuallyHidden } from "./visually-hidden-Iq8CthQl.js";
import { n as init_field_module, t as field_module_default } from "./field.module-CMS62o56.js";
//#region ../packages/ui/src/form/primitives/fieldset/details.tsx
var import_jsx_dev_runtime, _jsxFileName, FieldsetDetails;
function init_details() {
	return (init_details = __esmMin((() => {
		init_clsx();
		init_react();
		init_build_module();
		init_field_module();
		init_visually_hidden();
		init_context();
		init_style_module();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/primitives/fieldset/details.tsx";
		FieldsetDetails = (0, import_react.forwardRef)(function UnforwardedFieldsetDetails({ className, children, ...restProps }, ref) {
			const id = (0, import_react.useId)();
			const { registerDescriptionId, unregisterDescriptionId } = useFieldsetContext("Fieldset.Details");
			(0, import_react.useEffect)(() => {
				registerDescriptionId(id);
				return unregisterDescriptionId;
			}, [
				registerDescriptionId,
				unregisterDescriptionId,
				id
			]);
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				ref,
				className: clsx(style_module_default.description, field_module_default.description, className),
				...restProps,
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(VisuallyHidden, {
					id,
					children: __("More details follow.")
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 48,
					columnNumber: 4
				}, this), children]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 39,
				columnNumber: 3
			}, this);
		});
		try {
			FieldsetDetails.__docgenInfo = {
				"description": "A component for showing additional information about the fieldset,\nstyled similarly to a normal `Fieldset.Description`.\nUnlike a normal description, it can include links and other semantic elements.\n\nAlthough this content is not associated with the fieldset using direct semantics,\nit is made discoverable to screen reader users via a visually hidden description,\nalerting them to the presence of additional information below.\n\nIf the content only includes plain text, use `Fieldset.Description` instead,\nso the readout is not unnecessarily verbose for screen reader users.",
				"displayName": "FieldsetDetails",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/primitives/fieldset/details.tsx",
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
						"description": "Additional information about the fieldset, which unlike a normal description,\ncan include links and other semantic elements.\n\nAlthough this content is not associated with the fieldset using direct semantics,\nit is made discoverable to screen reader users via a visually hidden description,\nalerting them to the presence of additional information below.\n\nDo not use this component when the details content is only plain text,\nas it makes the readout unnecessarily verbose for screen reader users.",
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
export { init_details as n, FieldsetDetails as t };
