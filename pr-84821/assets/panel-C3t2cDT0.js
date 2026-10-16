import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { a as init_clsx, i as clsx } from "./iframe-Dbjzp1_m.js";
//#region ../packages/components/src/panel/header.tsx
/**
* `PanelHeader` renders the header for the `Panel`.
* This is used by the `Panel` component under the hood,
* so it does not typically need to be used.
*/
function PanelHeader({ label, children }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)("div", {
		className: "components-panel__header",
		children: [label && /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)("h2", { children: label }, void 0, false, {
			fileName: _jsxFileName$1,
			lineNumber: 11,
			columnNumber: 15
		}, this), children]
	}, void 0, true, {
		fileName: _jsxFileName$1,
		lineNumber: 10,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime$1, _jsxFileName$1;
function init_header() {
	return (init_header = __esmMin((() => {
		import_jsx_dev_runtime$1 = require_jsx_dev_runtime();
		_jsxFileName$1 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/panel/header.tsx";
		try {
			PanelHeader.__docgenInfo = {
				"description": "`PanelHeader` renders the header for the `Panel`.\nThis is used by the `Panel` component under the hood,\nso it does not typically need to be used.",
				"displayName": "PanelHeader",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/panel/header.tsx",
				"methods": [],
				"props": {
					"label": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/panel/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The text that will be rendered as the title of the panel.\nWill be rendered in an `<h2>` tag.",
						"name": "label",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"children": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/panel/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The content to display within the panel header.",
						"name": "children",
						"required": false,
						"tags": {},
						"type": { "name": "ReactNode" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/components/src/panel/index.tsx
function UnforwardedPanel({ header, className, children }, ref) {
	const classNames = clsx(className, "components-panel");
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: classNames,
		ref,
		children: [header && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PanelHeader, { label: header }, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 13,
			columnNumber: 16
		}, this), children]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 12,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime, _jsxFileName, Panel;
function init_panel() {
	return (init_panel = __esmMin((() => {
		init_clsx();
		init_react();
		init_header();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/panel/index.tsx";
		Panel = (0, import_react.forwardRef)(UnforwardedPanel);
		Panel.displayName = "Panel";
		try {
			Panel.__docgenInfo = {
				"description": "`Panel` expands and collapses multiple sections of content.\n\n```jsx\nimport { Panel, PanelBody, PanelRow } from '@wordpress/components';\nimport { more } from '@wordpress/icons';\n\nconst MyPanel = () => (\n	<Panel header=\"My Panel\">\n		<PanelBody title=\"My Block Settings\" icon={ more } initialOpen={ true }>\n			<PanelRow>My Panel Inputs and Labels</PanelRow>\n		</PanelBody>\n	</Panel>\n);\n```",
				"displayName": "Panel",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/panel/index.tsx",
				"methods": [],
				"props": {
					"header": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/panel/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The text that will be rendered as the title of the panel.\nText will be rendered inside an `<h2>` tag.",
						"name": "header",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"className": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/panel/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The CSS class to apply to the wrapper element.",
						"name": "className",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"children": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/panel/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The content to display within the panel.",
						"name": "children",
						"required": true,
						"tags": {},
						"type": { "name": "ReactNode" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
export { init_panel as n, Panel as t };
