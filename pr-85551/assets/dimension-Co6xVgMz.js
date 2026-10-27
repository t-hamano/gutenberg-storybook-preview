import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { h as init_blocks, u as Meta } from "./blocks-CuFIAI47.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C1RZKCc6.js";
import { i as useMDXComponents, r as init_lib } from "./react-FgZpKSX8.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as init_design_tokens, r as tokens, t as groups } from "./design-tokens-DAiqG25r.js";
import { a as itemStyle, c as textStyle, i as init_token_preview_styles, l as tokenNameStyle, n as descriptionStyle, o as listStyle, s as previewStyle } from "./design-tokens-D72zsalP.js";
import { n as init_group_title, t as GroupTitle } from "./group-title-4BVpuXGT.js";
//#region ../packages/theme/src/stories/dimension-preview.tsx
/**
* Displays the dimension tokens grouped by purpose, each with an example of
* how the value applies.
*/
function DimensionTokenPreview() {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		style: previewStyle,
		children: Object.keys(groups.dimension.groups).map((key) => {
			const group = groups.dimension.groups[key];
			const { example } = dimensionConfig[key];
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(GroupTitle, { name: key }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 114,
					columnNumber: 7
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: group.$description }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 115,
					columnNumber: 7
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dl", {
					style: {
						...listStyle,
						marginBlockStart: 8
					},
					children: group.tokens.map((name) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						style: {
							...itemStyle,
							gridTemplateColumns: key === "surface-width" ? "1fr" : "minmax(96px, 1fr) 2fr"
						},
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dt", {
							style: textStyle,
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("code", {
								style: tokenNameStyle,
								children: name
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 129,
								columnNumber: 11
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								style: descriptionStyle,
								children: tokens[name].$description
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 132,
								columnNumber: 11
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 128,
							columnNumber: 10
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dd", {
							style: {
								margin: 0,
								minWidth: 0,
								overflowX: "auto"
							},
							"aria-hidden": "true",
							children: example(name)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 136,
							columnNumber: 10
						}, this)]
					}, name, true, {
						fileName: _jsxFileName,
						lineNumber: 118,
						columnNumber: 9
					}, this))
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 116,
					columnNumber: 7
				}, this)
			] }, key, true, {
				fileName: _jsxFileName,
				lineNumber: 113,
				columnNumber: 6
			}, this);
		})
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 106,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime, _jsxFileName, boxStyle, contentStyle, dimensionConfig;
function init_dimension_preview() {
	return (init_dimension_preview = __esmMin((() => {
		init_design_tokens();
		init_group_title();
		init_token_preview_styles();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/theme/src/stories/dimension-preview.tsx";
		boxStyle = {
			backgroundColor: "var(--wpds-color-background-surface-brand, color-mix(in oklch, var(--wp-admin-theme-color, #3858e9) 9%, white))",
			border: "var(--wpds-border-width-xs, 1px) solid var(--wpds-color-stroke-interactive-brand, var(--wp-admin-theme-color, #3858e9))",
			borderRadius: "var(--wpds-border-radius-xs, 1px)"
		};
		contentStyle = { backgroundColor: "var(--wpds-color-background-interactive-brand-strong, var(--wp-admin-theme-color, #3858e9))" };
		dimensionConfig = {
			padding: { example: (name) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
				style: {
					...boxStyle,
					display: "inline-block",
					padding: `var(${name})`
				},
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: {
					...contentStyle,
					display: "block",
					width: "var(--wpds-dimension-size-sm, 24px)",
					height: "var(--wpds-dimension-size-xs, 20px)"
				} }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 39,
					columnNumber: 5
				}, void 0)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 32,
				columnNumber: 4
			}, void 0) },
			gap: { example: (name) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
				style: {
					display: "flex",
					gap: `var(${name})`
				},
				children: [
					0,
					1,
					2
				].map((i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: {
					...contentStyle,
					display: "block",
					width: "var(--wpds-dimension-size-sm, 24px)",
					height: "var(--wpds-dimension-size-sm, 24px)",
					borderRadius: "var(--wpds-border-radius-xs, 1px)"
				} }, i, false, {
					fileName: _jsxFileName,
					lineNumber: 59,
					columnNumber: 6
				}, void 0))
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 52,
				columnNumber: 4
			}, void 0) },
			size: { example: (name) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: {
				...contentStyle,
				display: "block",
				width: `var(${name})`,
				height: `var(${name})`,
				borderRadius: "var(--wpds-border-radius-xs, 1px)"
			} }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 75,
				columnNumber: 4
			}, void 0) },
			"surface-width": { example: (name) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: {
				...boxStyle,
				display: "block",
				width: `var(${name})`,
				height: "var(--wpds-dimension-size-md, 32px)"
			} }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 88,
				columnNumber: 4
			}, void 0) }
		};
		try {
			DimensionTokenPreview.__docgenInfo = {
				"description": "Displays the dimension tokens grouped by purpose, each with an example of\nhow the value applies.",
				"displayName": "DimensionTokenPreview",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/theme/src/stories/dimension-preview.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/theme/src/stories/dimension.mdx
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
		(0, import_jsx_runtime.jsx)(Meta, { title: "Design System/Tokens/Dimension" }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h1, {
			id: "dimension-tokens",
			children: "Dimension tokens"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [(0, import_jsx_runtime.jsx)(_components.code, { children: "@wordpress/theme" }), " publishes dimension tokens for padding, gap, size, and surface width as CSS custom properties."] }),
		"\n",
		(0, import_jsx_runtime.jsx)(DimensionTokenPreview, {}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"See the ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "?path=/docs/design-system-tokens-introduction--docs",
				children: "Design Tokens Reference"
			}),
			" for guidance on choosing tokens."
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
function init_dimension() {
	return (init_dimension = __esmMin((() => {
		import_jsx_runtime = require_jsx_runtime();
		init_lib();
		init_blocks();
		init_dimension_preview();
	})))();
}
//#endregion
init_dimension();
export { MDXContent as default };
