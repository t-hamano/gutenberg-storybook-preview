import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as init_text, t as Text } from "./text-wjaOyqYP.js";
import { n as init_stack, t as Stack } from "./stack-B_tyTWv7.js";
//#region ../packages/ui/src/text/stories/index.story.tsx
var import_jsx_dev_runtime, _jsxFileName, meta, Default, AllVariants, WithRenderProp;
function init_index_story() {
	return (init_index_story = __esmMin((() => {
		init_text();
		init_stack();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/text/stories/index.story.tsx";
		meta = {
			tags: ["manifest"],
			title: "Components/@wordpress-ui/Text",
			id: "design-system-components-text",
			component: Text,
			parameters: { componentStatus: {
				status: "recommended",
				whereUsed: "global"
			} }
		};
		Default = { args: {
			variant: "body-md",
			children: "The quick brown fox jumps over the lazy dog."
		} };
		AllVariants = { render: () => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack, {
			direction: "column",
			gap: "lg",
			style: { color: "var(--wpds-color-foreground-content-neutral, #1e1e1e)" },
			children: [
				"heading-2xl",
				"heading-xl",
				"heading-lg",
				"heading-md",
				"heading-sm",
				"body-xl",
				"body-lg",
				"body-md",
				"body-sm"
			].map((variant) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack, {
				direction: "column",
				gap: "xs",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, {
					variant: "heading-sm",
					children: variant
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 53,
					columnNumber: 6
				}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, {
					variant,
					children: "The quick brown fox jumps over the lazy dog."
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 54,
					columnNumber: 6
				}, void 0)]
			}, variant, true, {
				fileName: _jsxFileName,
				lineNumber: 52,
				columnNumber: 5
			}, void 0))
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 34,
			columnNumber: 3
		}, void 0) };
		WithRenderProp = { render: () => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack, {
			direction: "column",
			gap: "md",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, {
					variant: "heading-2xl",
					render: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 66,
						columnNumber: 41
					}, void 0),
					children: "Page Title"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 66,
					columnNumber: 4
				}, void 0),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, {
					variant: "heading-xl",
					render: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 69,
						columnNumber: 40
					}, void 0),
					children: "Section Heading"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 69,
					columnNumber: 4
				}, void 0),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, {
					variant: "body-md",
					render: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 72,
						columnNumber: 37
					}, void 0),
					children: "A paragraph of body text rendered as a semantic paragraph element."
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 72,
					columnNumber: 4
				}, void 0)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 65,
			columnNumber: 3
		}, void 0) };
		try {
			AllVariants.__docgenInfo = {
				"description": "Important: Setting the `variant` prop to a `heading` variant will not automatically render a heading element.\nUse the `render` prop to render a heading element with the appropriate level.",
				"displayName": "AllVariants",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/text/stories/index.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		Default.parameters = {
			...Default.parameters,
			docs: {
				...Default.parameters?.docs,
				source: {
					originalSource: "{\n  args: {\n    variant: 'body-md',\n    children: 'The quick brown fox jumps over the lazy dog.'\n  }\n}",
					...Default.parameters?.docs?.source
				}
			}
		};
		AllVariants.parameters = {
			...AllVariants.parameters,
			docs: {
				...AllVariants.parameters?.docs,
				source: {
					originalSource: "{\n  render: () => <Stack direction=\"column\" gap=\"lg\" style={{\n    color: 'var(--wpds-color-foreground-content-neutral)'\n  }}>\n            {(['heading-2xl', 'heading-xl', 'heading-lg', 'heading-md', 'heading-sm', 'body-xl', 'body-lg', 'body-md', 'body-sm'] as const).map(variant => <Stack key={variant} direction=\"column\" gap=\"xs\">\n                    <Text variant=\"heading-sm\">{variant}</Text>\n                    <Text variant={variant}>\n                        The quick brown fox jumps over the lazy dog.\n                    </Text>\n                </Stack>)}\n        </Stack>\n}",
					...AllVariants.parameters?.docs?.source
				},
				description: {
					story: "Important: Setting the `variant` prop to a `heading` variant will not automatically render a heading element.\nUse the `render` prop to render a heading element with the appropriate level.",
					...AllVariants.parameters?.docs?.description
				}
			}
		};
		WithRenderProp.parameters = {
			...WithRenderProp.parameters,
			docs: {
				...WithRenderProp.parameters?.docs,
				source: {
					originalSource: "{\n  render: () => <Stack direction=\"column\" gap=\"md\">\n            <Text variant=\"heading-2xl\" render={<h1 />}>\n                Page Title\n            </Text>\n            <Text variant=\"heading-xl\" render={<h2 />}>\n                Section Heading\n            </Text>\n            <Text variant=\"body-md\" render={<p />}>\n                A paragraph of body text rendered as a semantic paragraph\n                element.\n            </Text>\n        </Stack>\n}",
					...WithRenderProp.parameters?.docs?.source
				}
			}
		};
	})))();
}
//#endregion
init_index_story();
export { AllVariants, Default, WithRenderProp, meta as default };
