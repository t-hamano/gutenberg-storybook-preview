import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as init_build_module, t as deprecated } from "./build-module-BWCORUbm.js";
import { a as init_clsx, i as clsx } from "./iframe-UtSZlYID.js";
//#region ../packages/components/src/button-group/index.tsx
function UnforwardedButtonGroup(props, ref) {
	const { className, __shouldNotWarnDeprecated, ...restProps } = props;
	const classes = clsx("components-button-group", className);
	if (!__shouldNotWarnDeprecated) deprecated("wp.components.ButtonGroup", {
		since: "6.8",
		alternative: "wp.components.__experimentalToggleGroupControl"
	});
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		ref,
		role: "group",
		className: classes,
		...restProps
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 23,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime, _jsxFileName, ButtonGroup;
function init_button_group() {
	return (init_button_group = __esmMin((() => {
		init_clsx();
		init_react();
		init_build_module();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/button-group/index.tsx";
		ButtonGroup = (0, import_react.forwardRef)(UnforwardedButtonGroup);
		ButtonGroup.displayName = "ButtonGroup";
		try {
			ButtonGroup.__docgenInfo = {
				"description": "ButtonGroup can be used to group any related buttons together. To emphasize\nrelated buttons, a group should share a common container.",
				"displayName": "ButtonGroup",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/button-group/index.tsx",
				"methods": [],
				"props": {
					"children": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/button-group/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The children elements.",
						"name": "children",
						"required": true,
						"tags": {},
						"type": { "name": "ReactNode" }
					},
					"__shouldNotWarnDeprecated": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/button-group/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Do not throw a warning for component deprecation.\nFor internal components of other components that already throw the warning.\n@ignore",
						"name": "__shouldNotWarnDeprecated",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					}
				},
				"tags": { "deprecated": "Use `ToggleGroupControl` instead.\n\n```jsx\nimport { Button, ButtonGroup } from '@wordpress/components';\n\nconst MyButtonGroup = () => (\n<ButtonGroup>\n<Button variant=\"primary\">Button 1</Button>\n<Button variant=\"primary\">Button 2</Button>\n</ButtonGroup>\n);\n```" }
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
export { init_button_group as n, ButtonGroup as t };
