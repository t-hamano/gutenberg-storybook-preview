import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { h as init_blocks, u as Meta } from "./blocks-CuFIAI47.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C1RZKCc6.js";
import { i as useMDXComponents, r as init_lib } from "./react-FgZpKSX8.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as init_design_tokens, r as tokens, t as groups } from "./design-tokens-DAiqG25r.js";
import { a as itemStyle$1, c as textStyle, i as init_token_preview_styles, l as tokenNameStyle, n as descriptionStyle, o as listStyle, s as previewStyle } from "./design-tokens-D72zsalP.js";
import { n as init_group_title, t as GroupTitle } from "./group-title-4BVpuXGT.js";
//#region ../packages/theme/src/stories/typography-preview.tsx
function getTokenValue(tokenName) {
	return `var(${tokenName})`;
}
function TypographyTokenSection({ groupKey, tokenNames, sampleLines, getSampleStyle }) {
	const sectionTokens = tokenNames;
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(GroupTitle, { name: groupKey }, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 97,
		columnNumber: 4
	}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dl", {
		style: listStyle,
		children: sectionTokens.map((tokenName) => {
			const tokenStyle = getSampleStyle(getTokenValue(tokenName), tokenName);
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				style: itemStyle,
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dt", {
					style: textStyle,
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("code", {
						style: tokenNameStyle,
						children: tokenName
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 106,
						columnNumber: 9
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
						style: descriptionStyle,
						children: tokens[tokenName].$description
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 109,
						columnNumber: 9
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 105,
					columnNumber: 8
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dd", {
					style: { margin: 0 },
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						style: sampleStyle,
						children: sampleLines.map((line) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							style: {
								...sampleLineStyle,
								...tokenStyle
							},
							children: line
						}, line, false, {
							fileName: _jsxFileName,
							lineNumber: 116,
							columnNumber: 11
						}, this))
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 114,
						columnNumber: 9
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 113,
					columnNumber: 8
				}, this)]
			}, tokenName, true, {
				fileName: _jsxFileName,
				lineNumber: 104,
				columnNumber: 7
			}, this);
		})
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 98,
		columnNumber: 4
	}, this)] }, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 96,
		columnNumber: 3
	}, this);
}
/**
* Displays every public typography token using its generated CSS custom
* property.
*/
function TypographyTokenPreview() {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		style: previewStyle,
		children: Object.keys(groups.typography.groups).map((key) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TypographyTokenSection, {
			groupKey: key,
			tokenNames: groups.typography.groups[key].tokens,
			...typographyConfig[key]
		}, key, false, {
			fileName: _jsxFileName,
			lineNumber: 146,
			columnNumber: 5
		}, this))
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 142,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime, _jsxFileName, typographyConfig, itemStyle, sampleStyle, sampleLineStyle;
function init_typography_preview() {
	return (init_typography_preview = __esmMin((() => {
		init_group_title();
		init_token_preview_styles();
		init_design_tokens();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/theme/src/stories/typography-preview.tsx";
		typographyConfig = {
			"font-family": {
				sampleLines: ["Code is Poetry."],
				getSampleStyle: (tokenValue) => ({
					fontFamily: tokenValue,
					fontSize: "var(--wpds-typography-font-size-xl, 20px)",
					lineHeight: "var(--wpds-typography-line-height-xl, 32px)"
				})
			},
			"font-size": {
				sampleLines: ["Code is Poetry."],
				getSampleStyle: (tokenValue, tokenName) => ({
					fontFamily: "var(--wpds-typography-font-family-heading, -apple-system, system-ui, \"Segoe UI\", \"Roboto\", \"Oxygen-Sans\", \"Ubuntu\", \"Cantarell\", \"Helvetica Neue\", sans-serif)",
					fontSize: tokenValue,
					fontWeight: "var(--wpds-typography-font-weight-default, 400)",
					lineHeight: getTokenValue(tokenName.replace("-font-size-", "-line-height-"))
				})
			},
			"line-height": {
				sampleLines: ["WordPress grows when people like you tell their friends about it.", "Code is Poetry."],
				getSampleStyle: (tokenValue) => ({
					fontFamily: "var(--wpds-typography-font-family-body, -apple-system, system-ui, \"Segoe UI\", \"Roboto\", \"Oxygen-Sans\", \"Ubuntu\", \"Cantarell\", \"Helvetica Neue\", sans-serif)",
					fontSize: "var(--wpds-typography-font-size-md, 13px)",
					lineHeight: tokenValue
				})
			},
			"font-weight": {
				sampleLines: ["Code is Poetry."],
				getSampleStyle: (tokenValue) => ({
					fontFamily: "var(--wpds-typography-font-family-body, -apple-system, system-ui, \"Segoe UI\", \"Roboto\", \"Oxygen-Sans\", \"Ubuntu\", \"Cantarell\", \"Helvetica Neue\", sans-serif)",
					fontSize: "var(--wpds-typography-font-size-lg, 15px)",
					fontWeight: tokenValue,
					lineHeight: "var(--wpds-typography-line-height-lg, 28px)"
				})
			}
		};
		itemStyle = {
			...itemStyle$1,
			display: "flex",
			flexDirection: "column",
			alignItems: "stretch",
			gap: "var(--wpds-dimension-gap-md, 12px)"
		};
		sampleStyle = { margin: 0 };
		sampleLineStyle = {
			display: "block",
			overflowWrap: "anywhere"
		};
		try {
			TypographyTokenPreview.__docgenInfo = {
				"description": "Displays every public typography token using its generated CSS custom\nproperty.",
				"displayName": "TypographyTokenPreview",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/theme/src/stories/typography-preview.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/theme/src/stories/typography.mdx
function _createMdxContent(props) {
	const _components = {
		a: "a",
		code: "code",
		h1: "h1",
		p: "p",
		...useMDXComponents(),
		...props.components
	};
	return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		(0, import_jsx_runtime.jsx)(Meta, { title: "Design System/Tokens/Typography" }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h1, {
			id: "typography-tokens",
			children: "Typography tokens"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [(0, import_jsx_runtime.jsx)(_components.code, { children: "@wordpress/theme" }), " publishes typography tokens for font families, sizes, line heights, and weights as CSS custom properties."] }),
		"\n",
		(0, import_jsx_runtime.jsx)(TypographyTokenPreview, {}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"See the ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "?path=/docs/design-system-tokens-introduction--docs",
				children: "Design Tokens Reference"
			}),
			" for token descriptions and guidance on choosing tokens."
		] })
	] });
}
function MDXContent(props = {}) {
	const { wrapper: MDXLayout } = {
		...useMDXComponents(),
		...props.components
	};
	return MDXLayout ? (0, import_jsx_runtime.jsx)(MDXLayout, {
		...props,
		children: (0, import_jsx_runtime.jsx)(_createMdxContent, { ...props })
	}) : _createMdxContent(props);
}
var import_jsx_runtime;
function init_typography() {
	return (init_typography = __esmMin((() => {
		import_jsx_runtime = require_jsx_runtime();
		init_lib();
		init_blocks();
		init_typography_preview();
	})))();
}
//#endregion
init_typography();
export { MDXContent as default };
