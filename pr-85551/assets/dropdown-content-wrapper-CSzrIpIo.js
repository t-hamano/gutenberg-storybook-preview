import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { a as init_clsx, i as clsx } from "./iframe-UtSZlYID.js";
import { n as useContextSystem, o as init_context_connect, r as contextConnect, t as init_use_context_system } from "./use-context-system-6z_jGcZR.js";
//#region ../packages/components/src/dropdown/style.module.scss
var style_module_default;
function init_style_module() {
	return (init_style_module = __esmMin((() => {
		style_module_default = {
			"content-wrapper": "_content-wrapper_s8m4k_46",
			"padding-small": "_padding-small_s8m4k_61",
			"padding-medium": "_padding-medium_s8m4k_65"
		};
	})))();
}
//#endregion
//#region ../packages/components/src/dropdown/dropdown-content-wrapper.tsx
function UnconnectedDropdownContentWrapper(props, forwardedRef) {
	const { paddingSize = "small", className, ...derivedProps } = useContextSystem(props, "DropdownContentWrapper");
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		...derivedProps,
		className: clsx(style_module_default["content-wrapper"], {
			[style_module_default["padding-small"]]: paddingSize !== "none" && paddingSize !== "medium",
			[style_module_default["padding-medium"]]: paddingSize === "medium"
		}, className),
		ref: forwardedRef
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 19,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime, _jsxFileName, DropdownContentWrapper;
function init_dropdown_content_wrapper() {
	return (init_dropdown_content_wrapper = __esmMin((() => {
		init_clsx();
		init_context_connect(), init_use_context_system();
		init_style_module();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/dropdown/dropdown-content-wrapper.tsx";
		DropdownContentWrapper = contextConnect(UnconnectedDropdownContentWrapper, "DropdownContentWrapper");
		try {
			DropdownContentWrapper.__docgenInfo = {
				"description": "A convenience wrapper for the `renderContent` when you want to apply\ndifferent padding. (Default is `paddingSize=\"small\"`).\n\n```jsx\nimport {\n  Dropdown,\n  __experimentalDropdownContentWrapper as DropdownContentWrapper,\n} from '@wordpress/components';\n\n<Dropdown\n  renderContent={ () => (\n    <DropdownContentWrapper paddingSize=\"medium\">\n      My dropdown content\n    </DropdownContentWrapper>\n) }\n/>\n```",
				"displayName": "DropdownContentWrapper",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/dropdown/dropdown-content-wrapper.tsx",
				"methods": [],
				"props": {
					"children": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/dropdown/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The content to render inside the wrapper.",
						"name": "children",
						"required": false,
						"tags": {},
						"type": { "name": "ReactNode" }
					},
					"paddingSize": {
						"defaultValue": { "value": "'small'" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/dropdown/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Amount of padding to apply on the dropdown content.",
						"name": "paddingSize",
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "\"small\" | \"medium\" | \"none\"",
							"value": [
								{ "value": "\"small\"" },
								{ "value": "\"medium\"" },
								{ "value": "\"none\"" }
							]
						}
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
export { init_dropdown_content_wrapper as n, DropdownContentWrapper as t };
