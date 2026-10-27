import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { a as init_clsx, i as clsx } from "./iframe-UtSZlYID.js";
//#region ../packages/components/src/color-indicator/index.tsx
function UnforwardedColorIndicator(props, forwardedRef) {
	const { className, colorValue, ...additionalProps } = props;
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
		className: clsx("component-color-indicator", className),
		style: { background: colorValue },
		ref: forwardedRef,
		...additionalProps
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 14,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime, _jsxFileName, ColorIndicator;
function init_color_indicator() {
	return (init_color_indicator = __esmMin((() => {
		init_clsx();
		init_react();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/color-indicator/index.tsx";
		ColorIndicator = (0, import_react.forwardRef)(UnforwardedColorIndicator);
		ColorIndicator.displayName = "ColorIndicator";
		try {
			ColorIndicator.__docgenInfo = {
				"description": "ColorIndicator is a React component that renders a specific color in a\ncircle. It's often used to summarize a collection of used colors in a child\ncomponent.\n\n```jsx\nimport { ColorIndicator } from '@wordpress/components';\n\nconst MyColorIndicator = () => <ColorIndicator colorValue=\"#0073aa\" />;\n```",
				"displayName": "ColorIndicator",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/color-indicator/index.tsx",
				"methods": [],
				"props": { "colorValue": {
					"defaultValue": null,
					"declarations": [{
						"fileName": "gutenberg-storybook-preview/packages/components/src/color-indicator/types.ts",
						"name": "TypeLiteral"
					}],
					"description": "The color of the indicator. Any value from the CSS `background` property\nis supported.",
					"name": "colorValue",
					"required": false,
					"tags": {},
					"type": { "name": "Background<string | number>" }
				} },
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
export { init_color_indicator as n, ColorIndicator as t };
