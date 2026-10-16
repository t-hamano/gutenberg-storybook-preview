import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
//#region ../packages/components/src/shortcut/index.tsx
/**
* Shortcut component is used to display keyboard shortcuts, and it can be customized with a custom display and aria label if needed.
*
* ```jsx
* import { Shortcut } from '@wordpress/components';
*
* const MyShortcut = () => {
* 	return (
* 		<Shortcut shortcut={{ display: 'Ctrl + S', ariaLabel: 'Save' }} />
* 	);
* };
* ```
*/
function Shortcut(props) {
	const { shortcut, className } = props;
	if (!shortcut) return null;
	let displayText;
	let ariaLabel;
	if (typeof shortcut === "string") displayText = shortcut;
	if (shortcut !== null && typeof shortcut === "object") {
		displayText = shortcut.display;
		ariaLabel = shortcut.ariaLabel;
	}
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
		className,
		"aria-label": ariaLabel,
		children: displayText
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 36,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime, _jsxFileName;
function init_shortcut() {
	return (init_shortcut = __esmMin((() => {
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/shortcut/index.tsx";
		try {
			Shortcut.__docgenInfo = {
				"description": "Shortcut component is used to display keyboard shortcuts, and it can be customized with a custom display and aria label if needed.\n\n```jsx\nimport { Shortcut } from '@wordpress/components';\n\nconst MyShortcut = () => {\n	return (\n		<Shortcut shortcut={{ display: 'Ctrl + S', ariaLabel: 'Save' }} />\n	);\n};\n```",
				"displayName": "Shortcut",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/shortcut/index.tsx",
				"methods": [],
				"props": {
					"className": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/shortcut/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Classname to apply to the shortcut.",
						"name": "className",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"shortcut": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/shortcut/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Shortcut configuration",
						"name": "shortcut",
						"required": false,
						"tags": {},
						"type": { "name": "string | { display: string; ariaLabel: string; }" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
export { init_shortcut as n, Shortcut as t };
