import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as __, o as isRTL, t as init_build_module } from "./build-module-v04us4E2.js";
import { a as init_clsx, i as clsx } from "./iframe-Dbjzp1_m.js";
//#region ../packages/components/src/external-link/index.tsx
function UnforwardedExternalLink(props, ref) {
	const { href, children, className, ...additionalProps } = props;
	const classes = clsx("components-external-link", className);
	const isInternalAnchor = !!href?.startsWith("#");
	const onClickHandler = (event) => {
		if (isInternalAnchor) event.preventDefault();
		if (props.onClick) props.onClick(event);
	};
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
		...additionalProps,
		className: classes,
		href,
		onClick: onClickHandler,
		target: "_blank",
		ref,
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
			className: "components-external-link__contents",
			children
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 44,
			columnNumber: 4
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
			className: clsx("components-external-link__icon", "wp-exclude-emoji"),
			"aria-label": __("(opens in a new tab)"),
			children: isRTL() ? "↖" : "↗"
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 47,
			columnNumber: 4
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 36,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime, _jsxFileName, ExternalLink;
function init_external_link() {
	return (init_external_link = __esmMin((() => {
		init_clsx();
		init_build_module();
		init_react();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/external-link/index.tsx";
		ExternalLink = (0, import_react.forwardRef)(UnforwardedExternalLink);
		ExternalLink.displayName = "ExternalLink";
		try {
			ExternalLink.__docgenInfo = {
				"description": "Link to an external resource.\n\n```jsx\nimport { ExternalLink } from '@wordpress/components';\n\nconst MyExternalLink = () => (\n  <ExternalLink href=\"https://wordpress.org\">WordPress.org</ExternalLink>\n);\n```",
				"displayName": "ExternalLink",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/external-link/index.tsx",
				"methods": [],
				"props": {
					"children": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/external-link/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The content to be displayed within the link.",
						"name": "children",
						"required": true,
						"tags": {},
						"type": { "name": "ReactNode" }
					},
					"href": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/external-link/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The URL of the external resource.",
						"name": "href",
						"required": true,
						"tags": {},
						"type": { "name": "string" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
export { init_external_link as n, ExternalLink as t };
