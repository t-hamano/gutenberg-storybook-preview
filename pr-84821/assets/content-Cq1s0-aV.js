import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { Pt as children_default, St as init_build_module } from "./store-BZXP8rvF.js";
import { i as init_raw_html, r as RawHTML } from "./serialize-FHFXmm0_.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as init_build_module$1, t as deprecated } from "./build-module-BWCORUbm.js";
import { a as isEmpty, i as init_utils, r as getMultilineTag } from "./utils-vihKJ7OY.js";
//#region ../packages/block-editor/src/components/rich-text/content.jsx
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
	value = /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RawHTML, { children: valueToHTMLString(value, multiline) }, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 40,
		columnNumber: 10
	}, this);
	return Tag ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tag, {
		...props,
		children: value
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 41,
		columnNumber: 15
	}, this) : value;
}
var import_jsx_dev_runtime, _jsxFileName;
function init_content() {
	return (init_content = __esmMin((() => {
		init_raw_html();
		init_build_module();
		init_build_module$1();
		init_utils();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/block-editor/src/components/rich-text/content.jsx";
		Content.__docgenInfo = {
			"description": "",
			"methods": [],
			"displayName": "Content"
		};
	})))();
}
//#endregion
export { init_content as n, valueToHTMLString as r, Content as t };
