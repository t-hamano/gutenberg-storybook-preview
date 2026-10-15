import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { a as SVG, o as init_svg } from "./svg-CO2tRbm-.js";
//#region ../packages/ui/src/icon/icon.tsx
var import_jsx_dev_runtime, _jsxFileName, Icon;
function init_icon() {
	return (init_icon = __esmMin((() => {
		init_react();
		init_svg();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/icon/icon.tsx";
		Icon = (0, import_react.forwardRef)(function UnforwardedIcon({ icon, size = 24, style, ...restProps }, ref) {
			const mergedStyle = icon.props.style || style ? {
				...icon.props.style,
				...style
			} : void 0;
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SVG, {
				ref,
				...icon.props,
				...restProps,
				...mergedStyle ? { style: mergedStyle } : {},
				width: size,
				height: size
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 22,
				columnNumber: 4
			}, this);
		});
		try {
			Icon.__docgenInfo = {
				"description": "Renders an SVG icon with a 24px default size.\n\n```jsx\nimport { wordpress } from '@wordpress/icons';\n\n<Icon icon={ wordpress } />\n```",
				"displayName": "Icon",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/icon/icon.tsx",
				"methods": [],
				"props": {
					"size": {
						"defaultValue": { "value": "24" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/icon/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The size (width and height) of the icon.",
						"name": "size",
						"required": false,
						"tags": {},
						"type": { "name": "number" }
					},
					"icon": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/icon/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The icon to render, which must be an svg element or an `SVG` from `@wordpress/primitives`.\n\nIn most cases, you should use an icon from\n[the `@wordpress/icons` package](https://wordpress.github.io/gutenberg/?path=/story/icons-icon--library).\n\nWhen using `@wordpress/icons`, only version 15.0.0 or later is supported.\nFor custom SVGs, use `currentColor` for any fill or stroke that should\nfollow the surrounding text color.",
						"name": "icon",
						"required": true,
						"tags": {},
						"type": { "name": "ReactElement<SVGProps<SVGSVGElement>, string | JSXElementConstructor<any>>" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
export { init_icon as n, Icon as t };
