import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { i as init_raw_html, n as serialize_default, r as RawHTML, t as init_serialize } from "./serialize-FHFXmm0_.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as __, t as init_build_module } from "./build-module-v04us4E2.js";
import { a as init_clsx, i as clsx } from "./iframe-Dbjzp1_m.js";
import { r as speak, t as init_build_module$1 } from "./build-module-DsAeWnrG.js";
import { t as close_small_default } from "./close-small-BAxZctqD.js";
import { n as init_component, t as VisuallyHidden } from "./component-DtWxfX7z.js";
import { n as init_button, t as Button } from "./button-BqvmAVeL.js";
import { r as init_build_module$2 } from "./library.story-CFsmdbdz.js";
//#region ../packages/components/src/notice/index.tsx
/**
* Custom hook which announces the message with the given politeness, if a
* valid message is provided.
*/
function useSpokenMessage(message, politeness) {
	const spokenMessage = typeof message === "string" ? message : serialize_default(message);
	(0, import_react.useEffect)(() => {
		if (spokenMessage) speak(spokenMessage, politeness);
	}, [spokenMessage, politeness]);
}
function getDefaultPoliteness(status) {
	switch (status) {
		case "success":
		case "warning":
		case "info": return "polite";
		default: return "assertive";
	}
}
function getStatusLabel(status) {
	switch (status) {
		case "warning": return __("Warning notice");
		case "info": return __("Information notice");
		case "error": return __("Error notice");
		default: return __("Notice");
	}
}
/**
* `Notice` is a component used to communicate feedback to the user.
*
*```jsx
* import { Notice } from `@wordpress/components`;
*
* const MyNotice = () => (
*   <Notice status="error">An unknown error occurred.</Notice>
* );
* ```
*/
function Notice({ className, status = "info", children, spokenMessage = children, onRemove = noop, isDismissible = true, actions = [], politeness = getDefaultPoliteness(status), __unstableHTML, onDismiss = noop }) {
	useSpokenMessage(spokenMessage, politeness);
	const classes = clsx(className, "components-notice", "is-" + status);
	if (__unstableHTML && typeof children === "string") children = /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RawHTML, { children }, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 90,
		columnNumber: 14
	}, this);
	const onDismissNotice = () => {
		onDismiss();
		onRemove();
	};
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: classes,
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(VisuallyHidden, { children: getStatusLabel(status) }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 100,
				columnNumber: 4
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "components-notice__content",
				children
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 101,
				columnNumber: 4
			}, this),
			actions.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "components-notice__actions",
				children: actions.map(({ className: buttonCustomClasses, label, isPrimary, variant, noDefaultClasses = false, onClick, url, disabled }, index) => {
					let computedVariant = variant;
					if (variant !== "primary" && !noDefaultClasses) computedVariant = !url ? "secondary" : "link";
					if (typeof computedVariant === "undefined" && isPrimary) computedVariant = "primary";
					return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
						size: "compact",
						href: url,
						variant: computedVariant,
						onClick,
						disabled,
						accessibleWhenDisabled: true,
						className: clsx("components-notice__action", buttonCustomClasses),
						children: label
					}, index, false, {
						fileName: _jsxFileName,
						lineNumber: 134,
						columnNumber: 9
					}, this);
				})
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 103,
				columnNumber: 5
			}, this),
			isDismissible && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
				size: "small",
				className: "components-notice__dismiss",
				icon: close_small_default,
				label: __("Close"),
				onClick: onDismissNotice
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 155,
				columnNumber: 5
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 99,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime, _jsxFileName, noop;
function init_notice() {
	return (init_notice = __esmMin((() => {
		init_clsx();
		init_build_module();
		init_raw_html(), init_react(), init_serialize();
		init_build_module$1();
		init_build_module$2();
		init_button();
		init_component();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/notice/index.tsx";
		noop = () => {};
		try {
			Notice.__docgenInfo = {
				"description": "`Notice` is a component used to communicate feedback to the user.\n\n```jsx\nimport { Notice } from `@wordpress/components`;\n\nconst MyNotice = () => (\n  <Notice status=\"error\">An unknown error occurred.</Notice>\n);\n```",
				"displayName": "Notice",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/notice/index.tsx",
				"methods": [],
				"props": {
					"className": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/notice/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "A CSS `class` to give to the wrapper element.",
						"name": "className",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"children": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/notice/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The displayed message of a notice. Also used as the spoken message for\nassistive technology, unless `spokenMessage` is provided as an alternative message.",
						"name": "children",
						"required": true,
						"tags": {},
						"type": { "name": "ReactNode" }
					},
					"spokenMessage": {
						"defaultValue": { "value": "`children`" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/notice/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Used to provide a custom spoken message in place of the `children` default.",
						"name": "spokenMessage",
						"required": false,
						"tags": {},
						"type": { "name": "ReactNode" }
					},
					"status": {
						"defaultValue": { "value": "info" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/notice/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Determines the color of the notice: `warning` (yellow),\n`success` (green), `error` (red), or `'info'`.\nBy default `'info'` will be blue.",
						"name": "status",
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "\"info\" | \"warning\" | \"success\" | \"error\"",
							"value": [
								{ "value": "\"info\"" },
								{ "value": "\"warning\"" },
								{ "value": "\"success\"" },
								{ "value": "\"error\"" }
							]
						}
					},
					"onRemove": {
						"defaultValue": { "value": "() => {}" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/notice/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Function called when dismissing the notice",
						"name": "onRemove",
						"required": false,
						"tags": {},
						"type": { "name": "(() => void)" }
					},
					"politeness": {
						"defaultValue": { "value": "getDefaultPoliteness( status )" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/notice/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "A politeness level for the notice's spoken message. Should be provided as\none of the valid options for an `aria-live` attribute value.\n\nA value of `'assertive'` is to be used for important, and usually\ntime-sensitive, information. It will interrupt anything else the screen\nreader is announcing in that moment.\nA value of `'polite'` is to be used for advisory information. It should\nnot interrupt what the screen reader is announcing in that moment\n(the \"speech queue\") or interrupt the current task.\n\nNote that this value should be considered a suggestion; assistive\ntechnologies may override it based on internal heuristics.\n@see https://www.w3.org/TR/wai-aria-1.1/#aria-live",
						"name": "politeness",
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "\"assertive\" | \"polite\"",
							"value": [{ "value": "\"assertive\"" }, { "value": "\"polite\"" }]
						}
					},
					"isDismissible": {
						"defaultValue": { "value": "true" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/notice/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Whether the notice should be dismissible or not",
						"name": "isDismissible",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"onDismiss": {
						"defaultValue": { "value": "() => {}" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/notice/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "A deprecated alternative to `onRemove`. This prop is kept for\ncompatibility reasons but should be avoided.",
						"name": "onDismiss",
						"required": false,
						"tags": {},
						"type": { "name": "(() => void)" }
					},
					"actions": {
						"defaultValue": { "value": "[]" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/notice/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "An array of action objects. Each member object should contain:\n\n- `label`: `string` containing the text of the button/link\n- `url`: `string` OR `onClick`: `( event: SyntheticEvent ) => void` to specify\n   what the action does.\n- `className`: `string` (optional) to add custom classes to the button styles.\n- `noDefaultClasses`: `boolean` (optional) A value of `true` will remove all\n   default styling.\n- `variant`: `'primary' | 'secondary' | 'link'` (optional) You can denote a\n   primary button action for a notice by passing a value of `primary`.\n\nThe default appearance of an action button is inferred based on whether\n`url` or `onClick` are provided, rendering the button as a link if\nappropriate. If both props are provided, `url` takes precedence, and the\naction button will render as an anchor tag.",
						"name": "actions",
						"required": false,
						"tags": {},
						"type": { "name": "NoticeAction[]" }
					},
					"__unstableHTML": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/notice/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Determines whether or not the message should be parsed as custom HTML\ninstead of a string.",
						"name": "__unstableHTML",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
export { init_notice as n, Notice as t };
