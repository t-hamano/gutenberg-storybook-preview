import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { a as init_clsx, i as clsx } from "./iframe-Dbjzp1_m.js";
//#region ../packages/ui/src/spinner/style.module.css
var spinner, indicator, style_module_default;
function init_style_module() {
	return (init_style_module = __esmMin((() => {
		spinner = "_spinner_1vpfl_5";
		indicator = "_indicator_1vpfl_16";
		style_module_default = {
			spinner,
			indicator,
			"spinner-spin": "_spinner-spin_1vpfl_1"
		};
	})))();
}
//#endregion
//#region ../packages/ui/src/spinner/spinner.tsx
var import_jsx_dev_runtime, _jsxFileName, Spinner;
function init_spinner() {
	return (init_spinner = __esmMin((() => {
		init_clsx();
		init_react();
		init_style_module();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/spinner/spinner.tsx";
		Spinner = (0, import_react.forwardRef)(function UnforwardedSpinner({ className, color, style, ...props }, ref) {
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", {
				className: clsx(style_module_default.spinner, className),
				style: color === void 0 ? style : {
					...style,
					color
				},
				viewBox: "0 0 100 100",
				xmlns: "http://www.w3.org/2000/svg",
				role: "presentation",
				focusable: "false",
				...props,
				ref,
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
					className: style_module_default.indicator,
					d: "m 50 0 a 50 50 0 0 1 0 100",
					vectorEffect: "non-scaling-stroke"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 22,
					columnNumber: 5
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 12,
				columnNumber: 4
			}, this);
		});
		try {
			Spinner.__docgenInfo = {
				"description": "A component used to notify users that their action is being processed.",
				"displayName": "Spinner",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/spinner/spinner.tsx",
				"methods": [],
				"props": { "color": {
					"defaultValue": { "value": "'var(--wpds-color-foreground-content-neutral-weak)'" },
					"declarations": [{
						"fileName": "gutenberg-storybook-preview/packages/ui/src/spinner/types.ts",
						"name": "TypeLiteral"
					}],
					"description": "The spinner color. Accepts any CSS color value, including `currentColor`\nto inherit the surrounding text color.",
					"name": "color",
					"required": false,
					"tags": {},
					"type": { "name": "string" }
				} },
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
export { init_spinner as n, Spinner as t };
