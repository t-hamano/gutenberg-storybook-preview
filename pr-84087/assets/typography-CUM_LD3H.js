import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { h as init_blocks, u as Meta } from "./blocks-BdcQOi1H.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C1RZKCc6.js";
import { i as useMDXComponents, r as init_lib } from "./react-FgZpKSX8.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as tokens, t as init_design_tokens$1 } from "./design-tokens-BCTZaAJK.js";
//#region ../packages/theme/src/stories/typography-preview.tsx
function getTokenValue(tokenName) {
	return `var(${tokenName})`;
}
function TypographyTokenSection({ title, tokenPrefix, sampleLines, getSampleStyle }) {
	const tokens = typographyTokens.filter((tokenName) => tokenName.startsWith(tokenPrefix));
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
		style: headingStyle,
		children: title
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 132,
		columnNumber: 4
	}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dl", {
		style: listStyle,
		children: tokens.map((tokenName) => {
			const tokenStyle = getSampleStyle(getTokenValue(tokenName), tokenName);
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				style: itemStyle,
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dt", {
					style: tokenNameContainerStyle,
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("code", {
						style: tokenNameStyle,
						children: tokenName
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 141,
						columnNumber: 9
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 140,
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
							lineNumber: 148,
							columnNumber: 11
						}, this))
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 146,
						columnNumber: 9
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 145,
					columnNumber: 8
				}, this)]
			}, tokenName, true, {
				fileName: _jsxFileName,
				lineNumber: 139,
				columnNumber: 7
			}, this);
		})
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 133,
		columnNumber: 4
	}, this)] }, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 131,
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
		children: tokenGroups.map((tokenGroup) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TypographyTokenSection, { ...tokenGroup }, tokenGroup.tokenPrefix, false, {
			fileName: _jsxFileName,
			lineNumber: 176,
			columnNumber: 5
		}, this))
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 174,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime, _jsxFileName, typographyTokens, tokenGroups, previewStyle, headingStyle, listStyle, itemStyle, tokenNameStyle, tokenNameContainerStyle, sampleStyle, sampleLineStyle;
function init_typography_preview() {
	return (init_typography_preview = __esmMin((() => {
		init_design_tokens$1();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/theme/src/stories/typography-preview.tsx";
		typographyTokens = Object.keys(tokens).filter((tokenName) => tokenName.startsWith("--wpds-typography-"));
		tokenGroups = [
			{
				title: "Font families",
				tokenPrefix: "--wpds-typography-font-family-",
				sampleLines: ["Code is Poetry."],
				getSampleStyle: (tokenValue) => ({
					fontFamily: tokenValue,
					fontSize: "var(--wpds-typography-font-size-xl, 20px)",
					lineHeight: "var(--wpds-typography-line-height-xl, 32px)"
				})
			},
			{
				title: "Font sizes",
				tokenPrefix: "--wpds-typography-font-size-",
				sampleLines: ["Code is Poetry."],
				getSampleStyle: (tokenValue, tokenName) => ({
					fontFamily: "var(--wpds-typography-font-family-heading, -apple-system, system-ui, \"Segoe UI\", \"Roboto\", \"Oxygen-Sans\", \"Ubuntu\", \"Cantarell\", \"Helvetica Neue\", sans-serif)",
					fontSize: tokenValue,
					fontWeight: "var(--wpds-typography-font-weight-default, 400)",
					lineHeight: getTokenValue(tokenName.replace("-font-size-", "-line-height-"))
				})
			},
			{
				title: "Line heights",
				tokenPrefix: "--wpds-typography-line-height-",
				sampleLines: ["WordPress grows when people like you tell their friends about it.", "Code is Poetry."],
				getSampleStyle: (tokenValue) => ({
					fontFamily: "var(--wpds-typography-font-family-body, -apple-system, system-ui, \"Segoe UI\", \"Roboto\", \"Oxygen-Sans\", \"Ubuntu\", \"Cantarell\", \"Helvetica Neue\", sans-serif)",
					fontSize: "var(--wpds-typography-font-size-md, 13px)",
					lineHeight: tokenValue
				})
			},
			{
				title: "Font weights",
				tokenPrefix: "--wpds-typography-font-weight-",
				sampleLines: ["Code is Poetry."],
				getSampleStyle: (tokenValue) => ({
					fontFamily: "var(--wpds-typography-font-family-body, -apple-system, system-ui, \"Segoe UI\", \"Roboto\", \"Oxygen-Sans\", \"Ubuntu\", \"Cantarell\", \"Helvetica Neue\", sans-serif)",
					fontSize: "var(--wpds-typography-font-size-lg, 15px)",
					fontWeight: tokenValue,
					lineHeight: "var(--wpds-typography-line-height-lg, 28px)"
				})
			}
		];
		previewStyle = {
			display: "flex",
			flexDirection: "column",
			gap: "var(--wpds-dimension-gap-3xl, 40px)",
			color: "var(--wpds-color-foreground-content-neutral, #1e1e1e)"
		};
		headingStyle = { marginBlockEnd: "var(--wpds-dimension-gap-xs, 4px)" };
		listStyle = {
			display: "flex",
			flexDirection: "column",
			gap: "var(--wpds-dimension-gap-md, 12px)",
			margin: 0,
			padding: 0
		};
		itemStyle = {
			display: "flex",
			flexDirection: "column",
			gap: "var(--wpds-dimension-gap-md, 12px)",
			padding: "var(--wpds-dimension-padding-lg, 16px)",
			backgroundColor: "var(--wpds-color-background-surface-neutral-weak, #f4f4f4)",
			border: "var(--wpds-border-width-xs, 1px) solid var(--wpds-color-stroke-surface-neutral-weak, #f0f0f0)",
			borderRadius: "var(--wpds-border-radius-sm, 2px)"
		};
		tokenNameStyle = {
			fontFamily: "var(--wpds-typography-font-family-mono, \"Menlo\", \"Consolas\", monaco, monospace)",
			fontSize: "var(--wpds-typography-font-size-sm, 12px)",
			fontStyle: "normal",
			fontWeight: "var(--wpds-typography-font-weight-default, 400)",
			lineHeight: "var(--wpds-typography-line-height-sm, 20px)",
			overflowWrap: "anywhere"
		};
		tokenNameContainerStyle = { margin: 0 };
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
