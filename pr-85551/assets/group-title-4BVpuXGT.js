import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { i as init_token_preview_styles, r as headingStyle } from "./design-tokens-D72zsalP.js";
//#region ../packages/theme/src/stories/group-title.tsx
/**
* Heading for a token group, using the group's own name from the
* `design-tokens.js` hierarchy (e.g. `font-family` renders as "Font Family").
*
* @param props
* @param props.name  Group key.
* @param props.level Heading level.
*/
function GroupTitle({ name, level = 2 }) {
	const Heading = `h${level}`;
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Heading, {
		style: {
			...headingStyle,
			textTransform: "capitalize"
		},
		children: name.replace(/-/g, " ")
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 20,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime, _jsxFileName;
function init_group_title() {
	return (init_group_title = __esmMin((() => {
		init_token_preview_styles();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/theme/src/stories/group-title.tsx";
		try {
			GroupTitle.__docgenInfo = {
				"description": "Heading for a token group, using the group's own name from the\n`design-tokens.js` hierarchy (e.g. `font-family` renders as \"Font Family\").",
				"displayName": "GroupTitle",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/theme/src/stories/group-title.tsx",
				"methods": [],
				"props": {
					"name": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/theme/src/stories/group-title.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "name",
						"required": true,
						"tags": {},
						"type": { "name": "string" }
					},
					"level": {
						"defaultValue": { "value": "2" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/theme/src/stories/group-title.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "level",
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "2 | 3",
							"value": [{ "value": "2" }, { "value": "3" }]
						}
					}
				},
				"tags": { "param": "props\nprops.name Group key.\nprops.level Heading level." }
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
export { init_group_title as n, GroupTitle as t };
