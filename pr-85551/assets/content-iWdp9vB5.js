import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { It as children_default, wt as init_build_module } from "./store-BQzmWUzp.js";
import { i as init_raw_html, r as RawHTML } from "./serialize-FHFXmm0_.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as init_build_module$1, t as deprecated } from "./build-module-BWCORUbm.js";
import { a as isEmpty, i as init_utils, r as getMultilineTag } from "./utils-gj_9pSIZ.js";
//#region ../packages/block-editor/src/components/rich-text/content.tsx
function valueToHTMLString(value, multiline) {
	if (isEmpty(value)) {
		const multilineTag = getMultilineTag(multiline);
		return multilineTag ? `<${multilineTag}></${multilineTag}>` : "";
	}
	if (Array.isArray(value)) {
		deprecated("wp.blockEditor.RichText value prop as children type", {
			since: "6.1",
			version: "6.3",
			alternative: "value prop as string",
			link: "https://developer.wordpress.org/block-editor/how-to-guides/block-tutorial/introducing-attributes-and-editable-fields/"
		});
		return children_default.toHTML(value);
	}
	if (typeof value === "string") return value;
	return value.toHTMLString();
}
function Content({ value, tagName: Tag, multiline, format, ...props }) {
	const content = /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RawHTML, { children: valueToHTMLString(value, multiline) }, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 47,
		columnNumber: 3
	}, this);
	return Tag ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tag, {
		...props,
		children: content
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 49,
		columnNumber: 15
	}, this) : content;
}
var import_jsx_dev_runtime, _jsxFileName;
function init_content() {
	return (init_content = __esmMin((() => {
		init_raw_html();
		init_build_module();
		init_build_module$1();
		init_utils();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/block-editor/src/components/rich-text/content.tsx";
		try {
			Content.__docgenInfo = {
				"description": "",
				"displayName": "Content",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/block-editor/src/components/rich-text/content.tsx",
				"methods": [],
				"props": {
					"value": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/rich-text/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "value",
						"required": false,
						"tags": {},
						"type": { "name": "RichTextFieldValue | null" }
					},
					"tagName": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/rich-text/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "tagName",
						"required": false,
						"tags": {},
						"type": { "name": "ElementType" }
					},
					"multiline": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/rich-text/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "multiline",
						"required": false,
						"tags": {},
						"type": { "name": "string | boolean" }
					},
					"format": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/rich-text/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "format",
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
export { init_content as n, valueToHTMLString as r, Content as t };
