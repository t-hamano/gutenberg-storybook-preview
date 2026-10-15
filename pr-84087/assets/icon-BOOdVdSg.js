import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { o as clsx, s as init_clsx } from "./iframe-D4D-SsYo.js";
import { n as init_icon$1, t as Icon } from "./icon-DD-nOZ1R.js";
//#region ../packages/ui/src/button/style.module.css
var button, icon, spinner, style_module_default;
function init_style_module() {
	return (init_style_module = __esmMin((() => {
		button = "_button_1imiu_5";
		icon = "_icon_1imiu_120";
		spinner = "_spinner_1imiu_213";
		style_module_default = {
			button,
			"is-unstyled": "_is-unstyled_1imiu_6",
			"is-loading": "_is-loading_1imiu_101",
			"is-small": "_is-small_1imiu_114",
			icon,
			"is-brand": "_is-brand_1imiu_127",
			"is-outline": "_is-outline_1imiu_131",
			"is-minimal": "_is-minimal_1imiu_132",
			"is-neutral": "_is-neutral_1imiu_154",
			"is-solid": "_is-solid_1imiu_128",
			"is-compact": "_is-compact_1imiu_196",
			spinner
		};
	})))();
}
//#endregion
//#region ../packages/ui/src/button/icon.tsx
var import_jsx_dev_runtime, _jsxFileName, ButtonIcon;
function init_icon() {
	return (init_icon = __esmMin((() => {
		init_clsx();
		init_react();
		init_icon$1();
		init_style_module();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/button/icon.tsx";
		ButtonIcon = (0, import_react.forwardRef)(function UnforwardedButtonIcon({ className, icon, ...props }, ref) {
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, {
				ref,
				icon,
				className: clsx(style_module_default.icon, className),
				size: 24,
				...props
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 10,
				columnNumber: 4
			}, this);
		});
		try {
			ButtonIcon.__docgenInfo = {
				"description": "",
				"displayName": "ButtonIcon",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/button/icon.tsx",
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
							"fileName": "gutenberg-storybook-preview/packages/ui/src/button/types.ts",
							"name": "ButtonIconProps"
						}],
						"description": "The icon to display, from the `@wordpress/icons` package.\n\nWhen using `@wordpress/icons`, only version 15.0.0 or later is supported.\nFor custom SVGs, use `currentColor` for any fill or stroke that should\nfollow the button text color.",
						"name": "icon",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/ui/src/button/types.ts",
							"name": "ButtonIconProps"
						},
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
export { style_module_default as i, init_icon as n, init_style_module as r, ButtonIcon as t };
