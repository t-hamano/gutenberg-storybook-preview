import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { h as init_blocks, u as Meta } from "./blocks-CuFIAI47.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C1RZKCc6.js";
import { i as useMDXComponents, r as init_lib } from "./react-FgZpKSX8.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as init_design_tokens, r as tokens, t as groups } from "./design-tokens-DAiqG25r.js";
import { a as itemStyle, c as textStyle, i as init_token_preview_styles, l as tokenNameStyle, n as descriptionStyle, o as listStyle, s as previewStyle } from "./design-tokens-D72zsalP.js";
import { n as init_group_title, t as GroupTitle } from "./group-title-4BVpuXGT.js";
//#region ../packages/theme/src/stories/color-preview.tsx
function ColorTokenList({ names }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dl", {
		style: listStyle,
		children: names.map((name) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			style: itemStyle,
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dd", {
				style: { margin: 0 },
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: {
					...swatchStyle,
					backgroundColor: `var(${name})`
				} }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 42,
					columnNumber: 7
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 41,
				columnNumber: 6
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dt", {
				style: textStyle,
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("code", {
					style: tokenNameStyle,
					children: name
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 50,
					columnNumber: 7
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
					style: descriptionStyle,
					children: tokens[name].$description
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 51,
					columnNumber: 7
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 49,
				columnNumber: 6
			}, this)]
		}, name, true, {
			fileName: _jsxFileName,
			lineNumber: 40,
			columnNumber: 5
		}, this))
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 38,
		columnNumber: 3
	}, this);
}
/**
* Displays every public semantic color token with its description and a
* swatch of the resolved color, grouped by property (background, foreground,
* stroke) and target.
*/
function ColorTokenPreview() {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		style: previewStyle,
		children: Object.entries(groups.color.groups).map(([property, group]) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
			style: sectionStyle,
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
					style: sectionTitleStyle,
					children: property
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 72,
					columnNumber: 7
				}, this),
				Object.entries(group.groups).map(([target, targetGroup]) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(GroupTitle, {
					name: target,
					level: 3
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 76,
					columnNumber: 10
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ColorTokenList, { names: targetGroup.tokens }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 77,
					columnNumber: 10
				}, this)] }, target, true, {
					fileName: _jsxFileName,
					lineNumber: 75,
					columnNumber: 9
				}, this)),
				group.tokens.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ColorTokenList, { names: group.tokens }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 84,
					columnNumber: 8
				}, this)
			]
		}, property, true, {
			fileName: _jsxFileName,
			lineNumber: 71,
			columnNumber: 6
		}, this))
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 68,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime, _jsxFileName, swatchStyle, sectionStyle, sectionTitleStyle;
function init_color_preview() {
	return (init_color_preview = __esmMin((() => {
		init_group_title();
		init_design_tokens();
		init_token_preview_styles();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/theme/src/stories/color-preview.tsx";
		swatchStyle = {
			display: "block",
			width: "100%",
			aspectRatio: "2 / 1",
			border: "var(--wpds-border-width-xs, 1px) solid var(--wpds-color-stroke-surface-neutral, #dbdbdb)",
			borderRadius: "var(--wpds-border-radius-sm, 2px)"
		};
		sectionStyle = {
			display: "flex",
			flexDirection: "column",
			gap: "var(--wpds-dimension-gap-3xl, 40px)"
		};
		sectionTitleStyle = {
			margin: 0,
			textTransform: "capitalize"
		};
		try {
			ColorTokenPreview.__docgenInfo = {
				"description": "Displays every public semantic color token with its description and a\nswatch of the resolved color, grouped by property (background, foreground,\nstroke) and target.",
				"displayName": "ColorTokenPreview",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/theme/src/stories/color-preview.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/theme/src/stories/color.mdx
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
		(0, import_jsx_runtime.jsx)(Meta, { title: "Design System/Tokens/Color" }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h1, {
			id: "color-tokens",
			children: "Color tokens"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [(0, import_jsx_runtime.jsx)(_components.code, { children: "@wordpress/theme" }), " publishes semantic color tokens for backgrounds, foregrounds, and strokes as CSS custom properties."] }),
		"\n",
		(0, import_jsx_runtime.jsx)(ColorTokenPreview, {}),
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
function init_color() {
	return (init_color = __esmMin((() => {
		import_jsx_runtime = require_jsx_runtime();
		init_lib();
		init_blocks();
		init_color_preview();
	})))();
}
//#endregion
init_color();
export { MDXContent as default };
