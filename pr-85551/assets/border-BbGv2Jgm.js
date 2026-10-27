import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { h as init_blocks, u as Meta } from "./blocks-CuFIAI47.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C1RZKCc6.js";
import { i as useMDXComponents, r as init_lib } from "./react-FgZpKSX8.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as init_design_tokens, r as tokens, t as groups } from "./design-tokens-DAiqG25r.js";
import { a as itemStyle, c as textStyle, i as init_token_preview_styles, l as tokenNameStyle, n as descriptionStyle, o as listStyle, s as previewStyle } from "./design-tokens-D72zsalP.js";
import { n as init_group_title, t as GroupTitle } from "./group-title-4BVpuXGT.js";
//#region ../packages/theme/src/stories/border-preview.tsx
/**
* Displays the border width tokens as lines and the border radius tokens as
* the corners of a box.
*/
function BorderTokenPreview() {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		style: previewStyle,
		children: Object.keys(groups.border.groups).map((kind) => {
			const group = groups.border.groups[kind];
			const { example } = borderGroupConfig[kind];
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(GroupTitle, { name: kind }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 56,
					columnNumber: 8
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: group.$description }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 57,
					columnNumber: 8
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dl", {
					style: listStyle,
					children: group.tokens.map((name) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						style: {
							...itemStyle,
							gridTemplateColumns: "80px 1fr"
						},
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dd", {
							style: { margin: 0 },
							"aria-hidden": "true",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: example(name) }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 71,
								columnNumber: 12
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 67,
							columnNumber: 11
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dt", {
							style: textStyle,
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("code", {
								style: tokenNameStyle,
								children: name
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 74,
								columnNumber: 12
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								style: descriptionStyle,
								children: tokens[name].$description
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 77,
								columnNumber: 12
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 73,
							columnNumber: 11
						}, this)]
					}, name, true, {
						fileName: _jsxFileName,
						lineNumber: 60,
						columnNumber: 10
					}, this))
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 58,
					columnNumber: 8
				}, this)
			] }, kind, true, {
				fileName: _jsxFileName,
				lineNumber: 55,
				columnNumber: 7
			}, this);
		})
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 49,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime, _jsxFileName, widthExampleStyle, radiusExampleStyle, borderGroupConfig;
function init_border_preview() {
	return (init_border_preview = __esmMin((() => {
		init_design_tokens();
		init_group_title();
		init_token_preview_styles();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/theme/src/stories/border-preview.tsx";
		widthExampleStyle = (name) => ({
			display: "block",
			width: "100%",
			height: 0,
			borderBlockStart: `var(${name}) solid ${name === "--wpds-border-width-focus" ? "var(--wpds-color-stroke-focus, var(--wp-admin-theme-color, #3858e9))" : "var(--wpds-color-foreground-content-neutral, #1e1e1e)"}`
		});
		radiusExampleStyle = (name) => ({
			display: "block",
			width: "var(--wpds-dimension-size-lg, 40px)",
			height: "var(--wpds-dimension-size-lg, 40px)",
			backgroundColor: "var(--wpds-color-background-surface-brand, color-mix(in oklch, var(--wp-admin-theme-color, #3858e9) 9%, white))",
			border: "var(--wpds-border-width-xs, 1px) solid var(--wpds-color-stroke-interactive-brand, var(--wp-admin-theme-color, #3858e9))",
			borderRadius: `var(${name})`
		});
		borderGroupConfig = {
			width: { example: widthExampleStyle },
			radius: { example: radiusExampleStyle }
		};
		try {
			BorderTokenPreview.__docgenInfo = {
				"description": "Displays the border width tokens as lines and the border radius tokens as\nthe corners of a box.",
				"displayName": "BorderTokenPreview",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/theme/src/stories/border-preview.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/theme/src/stories/border.mdx
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
		(0, import_jsx_runtime.jsx)(Meta, { title: "Design System/Tokens/Border" }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h1, {
			id: "border-tokens",
			children: "Border tokens"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [(0, import_jsx_runtime.jsx)(_components.code, { children: "@wordpress/theme" }), " publishes border width and border radius tokens as CSS custom properties."] }),
		"\n",
		(0, import_jsx_runtime.jsx)(BorderTokenPreview, {}),
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
function init_border() {
	return (init_border = __esmMin((() => {
		import_jsx_runtime = require_jsx_runtime();
		init_lib();
		init_blocks();
		init_border_preview();
	})))();
}
//#endregion
init_border();
export { MDXContent as default };
