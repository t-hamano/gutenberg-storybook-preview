import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as init_build_module, t as deprecated } from "./build-module-BWCORUbm.js";
import { a as init_clsx, i as clsx } from "./iframe-UtSZlYID.js";
import { t as caution_default } from "./caution-CZRZ4D1O.js";
import { n as published_default, r as error_default } from "./published-DCPAJvHl.js";
import { t as info_default } from "./info-nGPANNt-.js";
import { n as init_icon, t as Icon } from "./icon-DxWIlbNr.js";
import { r as init_build_module$1 } from "./library.story-CbQx3MQ6.js";
//#region ../packages/components/src/badge/index.tsx
/**
* Returns an icon based on the badge context.
*
* @return The corresponding icon for the provided context.
*/
function contextBasedIcon(intent = "default") {
	switch (intent) {
		case "info": return info_default;
		case "success": return published_default;
		case "warning": return caution_default;
		case "error": return error_default;
		default: return null;
	}
}
/**
* @deprecated Use `Badge` from `@wordpress/ui` instead.
*/
function Badge({ className, intent = "default", children, ...props }) {
	deprecated("wp.components.privateApis.Badge", {
		since: "7.2",
		alternative: "Badge from @wordpress/ui",
		hint: "This private API will be completely removed within a few Gutenberg plugin releases."
	});
	const icon = contextBasedIcon(intent);
	const hasIcon = !!icon;
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
		className: clsx("components-badge", className, {
			[`is-${intent}`]: intent,
			"has-icon": hasIcon
		}),
		...props,
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
			className: "components-badge__flex-wrapper",
			children: [hasIcon && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, {
				icon,
				size: 16,
				fill: "currentColor",
				className: "components-badge__icon"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 56,
				columnNumber: 6
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
				className: "components-badge__content",
				children
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 63,
				columnNumber: 5
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 54,
			columnNumber: 4
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 47,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime, _jsxFileName;
function init_badge() {
	return (init_badge = __esmMin((() => {
		init_clsx();
		init_build_module$1();
		init_build_module();
		init_icon();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/badge/index.tsx";
		try {
			Badge.__docgenInfo = {
				"description": "",
				"displayName": "Badge",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/badge/index.tsx",
				"methods": [],
				"props": {
					"intent": {
						"defaultValue": { "value": "default" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/badge/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Badge variant.",
						"name": "intent",
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "\"default\" | \"warning\" | \"success\" | \"error\" | \"info\"",
							"value": [
								{ "value": "\"default\"" },
								{ "value": "\"warning\"" },
								{ "value": "\"success\"" },
								{ "value": "\"error\"" },
								{ "value": "\"info\"" }
							]
						}
					},
					"children": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/badge/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Text to display inside the badge.",
						"name": "children",
						"required": true,
						"tags": {},
						"type": { "name": "string" }
					}
				},
				"tags": { "deprecated": "Use `Badge` from `@wordpress/ui` instead." }
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/components/src/badge/stories/index.story.tsx
var meta, Default, Info, Success, Warning, Error;
function init_index_story() {
	return (init_index_story = __esmMin((() => {
		init_badge();
		meta = {
			component: Badge,
			title: "Components/@wordpress-components/Deprecated/Badge",
			id: "components-badge",
			tags: ["status-private"],
			parameters: {
				componentStatus: {
					status: "not-recommended",
					whereUsed: "global",
					notes: "Deprecated. Use [`Badge`](?path=/docs/design-system-components-badge--docs) from `@wordpress/ui` instead."
				},
				docs: { description: { component: "This component is deprecated. Please use `Badge` from the `@wordpress/ui`\npackage instead." } }
			}
		};
		Default = { args: { children: "Code is Poetry" } };
		Info = { args: {
			...Default.args,
			intent: "info"
		} };
		Success = { args: {
			...Default.args,
			intent: "success"
		} };
		Warning = { args: {
			...Default.args,
			intent: "warning"
		} };
		Error = { args: {
			...Default.args,
			intent: "error"
		} };
		Default.parameters = {
			...Default.parameters,
			docs: {
				...Default.parameters?.docs,
				source: {
					originalSource: "{\n  args: {\n    children: 'Code is Poetry'\n  }\n}",
					...Default.parameters?.docs?.source
				}
			}
		};
		Info.parameters = {
			...Info.parameters,
			docs: {
				...Info.parameters?.docs,
				source: {
					originalSource: "{\n  args: {\n    ...Default.args,\n    intent: 'info'\n  }\n}",
					...Info.parameters?.docs?.source
				}
			}
		};
		Success.parameters = {
			...Success.parameters,
			docs: {
				...Success.parameters?.docs,
				source: {
					originalSource: "{\n  args: {\n    ...Default.args,\n    intent: 'success'\n  }\n}",
					...Success.parameters?.docs?.source
				}
			}
		};
		Warning.parameters = {
			...Warning.parameters,
			docs: {
				...Warning.parameters?.docs,
				source: {
					originalSource: "{\n  args: {\n    ...Default.args,\n    intent: 'warning'\n  }\n}",
					...Warning.parameters?.docs?.source
				}
			}
		};
		Error.parameters = {
			...Error.parameters,
			docs: {
				...Error.parameters?.docs,
				source: {
					originalSource: "{\n  args: {\n    ...Default.args,\n    intent: 'error'\n  }\n}",
					...Error.parameters?.docs?.source
				}
			}
		};
	})))();
}
//#endregion
init_index_story();
export { Default, Error, Info, Success, Warning, meta as default };
