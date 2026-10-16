import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_create_interpolate_element, t as create_interpolate_element_default } from "./create-interpolate-element-CUfbmqGd.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as init_strings, t as escapeRegExp } from "./strings-Cv6Mm5bk.js";
//#region ../packages/components/src/text-highlight/index.tsx
var import_jsx_dev_runtime$1, _jsxFileName$1, TextHighlight;
function init_text_highlight() {
	return (init_text_highlight = __esmMin((() => {
		init_create_interpolate_element();
		init_strings();
		import_jsx_dev_runtime$1 = require_jsx_dev_runtime();
		_jsxFileName$1 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/text-highlight/index.tsx";
		TextHighlight = (props) => {
			const { text = "", highlight = "" } = props;
			const trimmedHighlightText = highlight.trim();
			if (!trimmedHighlightText) return /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(import_jsx_dev_runtime$1.Fragment, { children: text }, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 25,
				columnNumber: 10
			}, void 0);
			const regex = new RegExp(`(${escapeRegExp(trimmedHighlightText)})`, "gi");
			return create_interpolate_element_default(text.replace(regex, "<mark>$&</mark>"), { mark: /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)("mark", {}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 34,
				columnNumber: 9
			}, void 0) });
		};
		TextHighlight.displayName = "TextHighlight";
		try {
			TextHighlight.__docgenInfo = {
				"description": "Highlights occurrences of a given string within another string of text. Wraps\neach match with a `<mark>` tag which provides browser default styling.\n\n```jsx\nimport { TextHighlight } from '@wordpress/components';\n\nconst MyTextHighlight = () => (\n  <TextHighlight\n    text=\"Why do we like Gutenberg? Because Gutenberg is the best!\"\n    highlight=\"Gutenberg\"\n  />\n);\n```",
				"displayName": "TextHighlight",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/text-highlight/index.tsx",
				"methods": [],
				"props": {
					"highlight": {
						"defaultValue": { "value": "''" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/text-highlight/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The string to search for and highlight within the `text`. Case\ninsensitive. Multiple matches.",
						"name": "highlight",
						"required": true,
						"tags": {},
						"type": { "name": "string" }
					},
					"text": {
						"defaultValue": { "value": "''" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/text-highlight/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The string of text to be tested for occurrences of then given\n`highlight`.",
						"name": "text",
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
//#region ../packages/components/src/text-highlight/stories/index.story.tsx
var import_jsx_dev_runtime, _jsxFileName, meta, Template, Default;
function init_index_story() {
	return (init_index_story = __esmMin((() => {
		init_text_highlight();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/text-highlight/stories/index.story.tsx";
		meta = {
			tags: ["manifest"],
			component: TextHighlight,
			title: "Components/@wordpress-components/Typography/TextHighlight",
			id: "components-texthighlight",
			parameters: {
				controls: { expanded: true },
				docs: { canvas: { sourceState: "shown" } },
				componentStatus: {
					status: "recommended",
					whereUsed: "global"
				}
			}
		};
		Template = (args) => {
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextHighlight, { ...args }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 23,
				columnNumber: 9
			}, void 0);
		};
		Default = Template.bind({});
		Default.args = {
			text: "We call the new editor Gutenberg. The entire editing experience has been rebuilt for media rich pages and posts.",
			highlight: "Gutenberg"
		};
		Default.parameters = {
			...Default.parameters,
			docs: {
				...Default.parameters?.docs,
				source: {
					originalSource: "args => {\n  return <TextHighlight {...args} />;\n}",
					...Default.parameters?.docs?.source
				}
			}
		};
	})))();
}
//#endregion
init_index_story();
export { Default, meta as default };
