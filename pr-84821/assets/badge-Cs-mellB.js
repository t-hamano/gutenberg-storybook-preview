import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { a as init_clsx, i as clsx } from "./iframe-Dbjzp1_m.js";
import { n as init_text, t as Text } from "./text-B-YUcwFZ.js";
//#region ../packages/ui/src/badge/style.module.css
var badge, style_module_default;
function init_style_module() {
	return (init_style_module = __esmMin((() => {
		badge = "_badge_hq0dq_5";
		style_module_default = {
			badge,
			"is-high-intent": "_is-high-intent_hq0dq_11",
			"is-medium-intent": "_is-medium-intent_hq0dq_16",
			"is-low-intent": "_is-low-intent_hq0dq_21",
			"is-stable-intent": "_is-stable-intent_hq0dq_26",
			"is-informational-intent": "_is-informational-intent_hq0dq_31",
			"is-draft-intent": "_is-draft-intent_hq0dq_36",
			"is-none-intent": "_is-none-intent_hq0dq_41"
		};
	})))();
}
//#endregion
//#region ../packages/ui/src/badge/badge.tsx
var import_jsx_dev_runtime, _jsxFileName, Badge;
function init_badge() {
	return (init_badge = __esmMin((() => {
		init_clsx();
		init_react();
		init_style_module();
		init_text();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/badge/badge.tsx";
		Badge = (0, import_react.forwardRef)(function UnforwardedBadge({ intent = "none", className, ...props }, ref) {
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, {
				ref,
				className: clsx(style_module_default.badge, style_module_default[`is-${intent}-intent`], className),
				...props,
				variant: "body-sm"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 13,
				columnNumber: 4
			}, this);
		});
		try {
			Badge.__docgenInfo = {
				"description": "A badge component for displaying labels with semantic intent.",
				"displayName": "Badge",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/badge/badge.tsx",
				"methods": [],
				"props": {
					"children": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/badge/types.ts",
							"name": "BadgeProps"
						}],
						"description": "The text to display in the badge.",
						"name": "children",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/ui/src/badge/types.ts",
							"name": "BadgeProps"
						},
						"required": true,
						"tags": {},
						"type": { "name": "string" }
					},
					"intent": {
						"defaultValue": { "value": "none" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/badge/types.ts",
							"name": "BadgeProps"
						}],
						"description": "The semantic intent of the badge, communicating its meaning through color.",
						"name": "intent",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/ui/src/badge/types.ts",
							"name": "BadgeProps"
						},
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "\"none\" | \"medium\" | \"stable\" | \"high\" | \"low\" | \"informational\" | \"draft\"",
							"value": [
								{ "value": "\"none\"" },
								{ "value": "\"medium\"" },
								{ "value": "\"stable\"" },
								{ "value": "\"high\"" },
								{ "value": "\"low\"" },
								{ "value": "\"informational\"" },
								{ "value": "\"draft\"" }
							]
						}
					},
					"className": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/utils/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "CSS class name to apply to the element.",
						"name": "className",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"style": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/utils/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "CSS style to apply to the element.",
						"name": "style",
						"required": false,
						"tags": {},
						"type": { "name": "CSSProperties" }
					},
					"render": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/utils/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Replaces the component's default HTML element using a given React\nelement, or a function that returns a React element.",
						"name": "render",
						"required": false,
						"tags": {},
						"type": { "name": "ComponentRenderFn<HTMLAttributesWithRef<any>> | ReactElement<Record<string, unknown>, string | JSXElementConstructor<any>>" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
export { init_badge as n, Badge as t };
