import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { a as init_clsx, i as clsx } from "./iframe-Dbjzp1_m.js";
//#region ../packages/components/src/spinner/style.module.scss
var spinner, track, indicator, spin, style_module_default;
function init_style_module() {
	return (init_style_module = __esmMin((() => {
		spinner = "_spinner_1vv5t_1";
		track = "_track_1vv5t_13";
		indicator = "_indicator_1vv5t_14";
		spin = "_spin_1vv5t_1";
		style_module_default = {
			spinner,
			track,
			indicator,
			spin
		};
	})))();
}
//#endregion
//#region ../packages/components/src/spinner/index.tsx
function UnforwardedSpinner({ className, ...props }, forwardedRef) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", {
		className: clsx("components-spinner", style_module_default.spinner, className),
		viewBox: "0 0 100 100",
		width: "16",
		height: "16",
		xmlns: "http://www.w3.org/2000/svg",
		role: "presentation",
		focusable: "false",
		...props,
		ref: forwardedRef,
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("circle", {
			className: style_module_default.track,
			cx: "50",
			cy: "50",
			r: "50",
			vectorEffect: "non-scaling-stroke"
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 28,
			columnNumber: 4
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
			className: style_module_default.indicator,
			d: "m 50 0 a 50 50 0 0 1 50 50",
			vectorEffect: "non-scaling-stroke"
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 37,
			columnNumber: 4
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 12,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime, _jsxFileName, Spinner;
function init_spinner() {
	return (init_spinner = __esmMin((() => {
		init_clsx();
		init_react();
		init_style_module();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/spinner/index.tsx";
		Spinner = (0, import_react.forwardRef)(UnforwardedSpinner);
		Spinner.displayName = "Spinner";
		try {
			Spinner.__docgenInfo = {
				"description": "`Spinner` is a component used to notify users that their action is being processed.\n\n```jsx\nimport { Spinner } from '@wordpress/components';\n\nfunction Example() {\n	return <Spinner />;\n}\n```",
				"displayName": "Spinner",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/spinner/index.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
export { init_spinner as n, Spinner as t };
