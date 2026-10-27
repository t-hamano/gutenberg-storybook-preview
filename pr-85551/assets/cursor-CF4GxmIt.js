import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { h as init_blocks, u as Meta } from "./blocks-CuFIAI47.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C1RZKCc6.js";
import { i as useMDXComponents, r as init_lib } from "./react-FgZpKSX8.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as init_design_tokens, r as tokens, t as groups } from "./design-tokens-DAiqG25r.js";
import { a as itemStyle, c as textStyle, i as init_token_preview_styles, l as tokenNameStyle, n as descriptionStyle, o as listStyle, s as previewStyle } from "./design-tokens-D72zsalP.js";
//#region ../packages/theme/src/stories/cursor-preview.tsx
/**
* Lists the cursor tokens with a live example: hover the button to see the
* cursor that `--wpds-cursor-control` resolves to.
*/
function CursorTokenPreview() {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		style: previewStyle,
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dl", {
			style: listStyle,
			children: cursorTokens.map((name) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				style: {
					...itemStyle,
					gridTemplateColumns: "minmax(96px, 160px) 1fr"
				},
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dd", {
					style: { margin: 0 },
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
						type: "button",
						style: controlStyle,
						children: "Hover me"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 43,
						columnNumber: 8
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 42,
					columnNumber: 7
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dt", {
					style: textStyle,
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("code", {
						style: tokenNameStyle,
						children: name
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 48,
						columnNumber: 8
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
						style: descriptionStyle,
						children: tokens[name].$description
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 49,
						columnNumber: 8
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 47,
					columnNumber: 7
				}, this)]
			}, name, true, {
				fileName: _jsxFileName,
				lineNumber: 35,
				columnNumber: 6
			}, this))
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 33,
			columnNumber: 4
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 32,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime, _jsxFileName, cursorTokens, controlStyle;
function init_cursor_preview() {
	return (init_cursor_preview = __esmMin((() => {
		init_design_tokens();
		init_token_preview_styles();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/theme/src/stories/cursor-preview.tsx";
		cursorTokens = groups.cursor.tokens;
		controlStyle = {
			cursor: "var(--wpds-cursor-control, pointer)",
			padding: "var(--wpds-dimension-padding-sm, 8px) var(--wpds-dimension-padding-lg, 16px)",
			fontFamily: "var(--wpds-typography-font-family-body, -apple-system, system-ui, \"Segoe UI\", \"Roboto\", \"Oxygen-Sans\", \"Ubuntu\", \"Cantarell\", \"Helvetica Neue\", sans-serif)",
			fontSize: "var(--wpds-typography-font-size-md, 13px)",
			color: "var(--wpds-color-foreground-interactive-brand-strong, #fff)",
			backgroundColor: "var(--wpds-color-background-interactive-brand-strong, var(--wp-admin-theme-color, #3858e9))",
			border: "none",
			borderRadius: "var(--wpds-border-radius-sm, 2px)"
		};
		try {
			CursorTokenPreview.__docgenInfo = {
				"description": "Lists the cursor tokens with a live example: hover the button to see the\ncursor that `--wpds-cursor-control` resolves to.",
				"displayName": "CursorTokenPreview",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/theme/src/stories/cursor-preview.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/theme/src/stories/cursor.mdx
function _createMdxContent(props) {
	const _components = {
		a: "a",
		code: "code",
		h1: "h1",
		h2: "h2",
		p: "p",
		pre: "pre",
		...useMDXComponents(),
		...props.components
	};
	return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		(0, import_jsx_runtime.jsx)(Meta, { title: "Design System/Tokens/Cursor" }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h1, {
			id: "cursor-tokens",
			children: "Cursor tokens"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [(0, import_jsx_runtime.jsx)(_components.code, { children: "@wordpress/theme" }), " publishes cursor tokens as CSS custom properties."] }),
		"\n",
		(0, import_jsx_runtime.jsx)(CursorTokenPreview, {}),
		"\n",
		(0, import_jsx_runtime.jsx)("div", { style: { height: "var(--wpds-dimension-gap-3xl)" } }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.h2, {
			id: "using---wpds-cursor-control-in-custom-components",
			children: [
				"Using ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "--wpds-cursor-control" }),
				" in custom components"
			]
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Set ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "cursor: var( --wpds-cursor-control )" }),
			" on any custom interactive control that is not a link, such as a button, a checkbox, or a toggle. The control then follows the design system's cursor style and any future change to it, instead of hardcoding ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "pointer" }),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.pre, { children: (0, import_jsx_runtime.jsx)(_components.code, {
			className: "language-css",
			children: ".my-toggle {\n	cursor: var( --wpds-cursor-control );\n}\n"
		}) }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Use it on the element that receives the click. For a custom checkbox, that is the label or the visible track, not a wrapper that also contains non-interactive text." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Links keep the browser's default link cursor, so do not apply this token to ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "<a>" }),
			" elements."
		] }),
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
function init_cursor() {
	return (init_cursor = __esmMin((() => {
		import_jsx_runtime = require_jsx_runtime();
		init_lib();
		init_blocks();
		init_cursor_preview();
	})))();
}
//#endregion
init_cursor();
export { MDXContent as default };
