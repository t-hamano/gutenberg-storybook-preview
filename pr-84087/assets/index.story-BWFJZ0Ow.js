import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { n as serialize_default, t as init_serialize } from "./serialize-FHFXmm0_.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as useMergeRefs, t as init_use_merge_refs } from "./use-merge-refs-BAtuPB1L.js";
import { n as useFocusableIframe, t as init_use_focusable_iframe } from "./use-focusable-iframe-d6iu9ssx.js";
import { o as clsx, s as init_clsx } from "./iframe-D4D-SsYo.js";
//#region ../packages/components/src/sandbox/index.tsx
/**
* Builds the full HTML document string for the sandbox iframe content. Shared
* by both the isolated (`srcdoc`) and same-origin (`contentDocument.write`)
* sandboxes so the two paths always emit the same markup — notably keeping the
* resize script in `<head>`, ahead of the user content, on both. A single
* builder means the write path cannot drift back to putting the script in
* `<body>` while the `srcdoc` path keeps it in `<head>`.
*
* `lang` is passed in rather than read here because the two callers source it
* from different documents: the isolated sandbox uses the module's `document`,
* while the same-origin sandbox uses the iframe's `ownerDocument`. They are
* normally the same document, but keeping the argument preserves each path's
* exact prior behavior.
*
* Exported for tests.
*
* @param props
* @param props.html    User-supplied HTML for the iframe body.
* @param props.title   Document title.
* @param props.type    Optional class name for the `<html>`/`<body>` elements.
* @param props.styles  CSS rule strings, injected as `<style>` tags in the head.
* @param props.scripts External script URLs, injected as `<script src>` in the
*                      body (embeds expect their scripts there).
* @param props.lang    Language for the `<html lang>` attribute.
* @return The full `<!DOCTYPE html>…` document string.
*/
function buildSandBoxDocument({ html, title, type, styles, scripts, lang }) {
	const htmlDoc = /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)("html", {
		lang,
		className: type,
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)("head", { children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)("title", { children: title }, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 209,
				columnNumber: 5
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)("style", { dangerouslySetInnerHTML: { __html: style } }, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 210,
				columnNumber: 5
			}, this),
			styles.map((rules, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)("style", { dangerouslySetInnerHTML: { __html: rules } }, i, false, {
				fileName: _jsxFileName$1,
				lineNumber: 212,
				columnNumber: 6
			}, this)),
			/* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)("script", {
				type: "text/javascript",
				dangerouslySetInnerHTML: { __html: `(${observeAndResizeJS.toString()})();` }
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 217,
				columnNumber: 5
			}, this)
		] }, void 0, true, {
			fileName: _jsxFileName$1,
			lineNumber: 208,
			columnNumber: 4
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)("body", {
			"data-resizable-iframe-connected": "data-resizable-iframe-connected",
			className: type,
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)("div", { dangerouslySetInnerHTML: { __html: html } }, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 228,
				columnNumber: 5
			}, this), scripts.map((src) => /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)("script", { src }, src, false, {
				fileName: _jsxFileName$1,
				lineNumber: 230,
				columnNumber: 6
			}, this))]
		}, void 0, true, {
			fileName: _jsxFileName$1,
			lineNumber: 224,
			columnNumber: 4
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName$1,
		lineNumber: 207,
		columnNumber: 3
	}, this);
	return "<!DOCTYPE html>" + serialize_default(htmlDoc);
}
/**
* Isolated sandbox that uses the `srcdoc` attribute to render content
* without `allow-same-origin`. This is the default for user-controlled
* content (e.g., the HTML block) where same-origin access would be a
* security risk.
*
* Because `srcdoc` is a declarative attribute, the browser automatically
* re-renders the content when the iframe is moved in the DOM (e.g.,
* block reordering), so no `load` event listener is needed.
* The `message` listener is re-synced on every `load` so
* it follows the iframe if it's reparented into a different document.
*/
function IsolatedSandBox({ html = "", title = "", type, styles = [], scripts = [], onFocus, tabIndex, allowPopups = false, allowForms = false }) {
	const ref = (0, import_react.useRef)(null);
	const [width, setWidth] = (0, import_react.useState)(0);
	const [height, setHeight] = (0, import_react.useState)(0);
	const sandbox = clsx("allow-scripts", "allow-presentation", {
		"allow-popups": allowPopups,
		"allow-forms": allowForms
	});
	const srcDoc = (0, import_react.useMemo)(() => buildSandBoxDocument({
		html,
		title,
		type,
		styles,
		scripts,
		lang: document.documentElement.lang
	}), [
		html,
		title,
		type,
		styles,
		scripts
	]);
	(0, import_react.useEffect)(() => {
		const iframe = ref.current;
		if (!iframe) return;
		function checkMessageForResize(event) {
			if (!iframe || iframe.contentWindow !== event.source) return;
			let data = event.data || {};
			if ("string" === typeof data) try {
				data = JSON.parse(data);
			} catch {}
			if ("resize" !== data.action) return;
			setWidth(data.width);
			setHeight(data.height);
		}
		let currentView = null;
		function syncListener() {
			const view = iframe?.ownerDocument?.defaultView ?? null;
			if (view === currentView) return;
			currentView?.removeEventListener("message", checkMessageForResize);
			currentView = view;
			currentView?.addEventListener("message", checkMessageForResize);
		}
		syncListener();
		iframe.addEventListener("load", syncListener);
		return () => {
			iframe.removeEventListener("load", syncListener);
			currentView?.removeEventListener("message", checkMessageForResize);
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)("iframe", {
		ref: useMergeRefs([ref, useFocusableIframe()]),
		title,
		tabIndex,
		className: "components-sandbox",
		sandbox,
		srcDoc,
		onFocus,
		width: Math.ceil(width),
		height: Math.ceil(height)
	}, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 350,
		columnNumber: 3
	}, this);
}
/**
* Same-origin sandbox that writes to `contentDocument` directly. This
* preserves the parent page's URL as the iframe's document URL, which
* provides a valid Referer header for nested iframes (required by
* providers like YouTube).
*
* Only used when `allowSameOrigin` is true — i.e., for server-fetched
* oEmbed previews that are not directly user-controlled.
*
* This implementation is intentionally kept close to the original
* pre-refactor code to preserve past bugfixes:
* - load listener for iframe re-initialization after DOM moves (#21916)
* - forceRerender guard to avoid unnecessary full rewrites (#20176)
*/
function SameOriginSandBox({ html = "", title = "", type, styles = [], scripts = [], onFocus, tabIndex, allowPopups = false, allowForms = false }) {
	const ref = (0, import_react.useRef)(null);
	const [width, setWidth] = (0, import_react.useState)(0);
	const [height, setHeight] = (0, import_react.useState)(0);
	const sandbox = clsx("allow-scripts", "allow-same-origin", "allow-presentation", {
		"allow-popups": allowPopups,
		"allow-forms": allowForms
	});
	function isFrameAccessible() {
		try {
			return !!ref.current?.contentDocument?.body;
		} catch {
			return false;
		}
	}
	function trySandBox(forceRerender = false) {
		if (!isFrameAccessible()) return;
		const { contentDocument, ownerDocument } = ref.current;
		if (!forceRerender && null !== contentDocument?.body.getAttribute("data-resizable-iframe-connected")) return;
		contentDocument.open();
		try {
			contentDocument.defaultView?.history.replaceState(null, "", window.location.href);
		} catch {}
		contentDocument.write(buildSandBoxDocument({
			html,
			title,
			type,
			styles,
			scripts,
			lang: ownerDocument.documentElement.lang
		}));
		contentDocument.close();
	}
	(0, import_react.useEffect)(() => {
		trySandBox();
		function tryNoForceSandBox() {
			trySandBox(false);
		}
		function checkMessageForResize(event) {
			const iframe = ref.current;
			if (!iframe || iframe.contentWindow !== event.source) return;
			let data = event.data || {};
			if ("string" === typeof data) try {
				data = JSON.parse(data);
			} catch {}
			if ("resize" !== data.action) return;
			setWidth(data.width);
			setHeight(data.height);
		}
		const iframe = ref.current;
		const defaultView = iframe?.ownerDocument?.defaultView;
		iframe?.addEventListener("load", tryNoForceSandBox, false);
		defaultView?.addEventListener("message", checkMessageForResize);
		return () => {
			iframe?.removeEventListener("load", tryNoForceSandBox, false);
			defaultView?.removeEventListener("message", checkMessageForResize);
		};
	}, []);
	(0, import_react.useEffect)(() => {
		trySandBox();
	}, [
		title,
		styles,
		scripts
	]);
	(0, import_react.useEffect)(() => {
		trySandBox(true);
	}, [html, type]);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)("iframe", {
		ref: useMergeRefs([ref, useFocusableIframe()]),
		title,
		tabIndex,
		className: "components-sandbox",
		sandbox,
		onFocus,
		width: Math.ceil(width),
		height: Math.ceil(height)
	}, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 532,
		columnNumber: 3
	}, this);
}
/**
* This component provides an isolated environment for arbitrary HTML via iframes.
*
* ```jsx
* import { SandBox } from '@wordpress/components';
*
* const MySandBox = () => (
* 	<SandBox html="<p>Content</p>" title="SandBox" type="embed" />
* );
* ```
*/
function SandBox({ allowSameOrigin = false, ...contentProps }) {
	if (allowSameOrigin) return /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(SameOriginSandBox, { ...contentProps }, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 558,
		columnNumber: 10
	}, this);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(IsolatedSandBox, { ...contentProps }, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 560,
		columnNumber: 9
	}, this);
}
var import_jsx_dev_runtime$1, _jsxFileName$1, VIEWPORT_UNIT_VALUE_REGEX, observeAndResizeJS, style;
function init_sandbox() {
	return (init_sandbox = __esmMin((() => {
		init_clsx();
		init_serialize(), init_react();
		init_use_focusable_iframe(), init_use_merge_refs();
		import_jsx_dev_runtime$1 = require_jsx_dev_runtime();
		_jsxFileName$1 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/sandbox/index.tsx";
		VIEWPORT_UNIT_VALUE_REGEX = /^\d*\.?\d+(?:vw|vh|svw|lvw|dvw|svh|lvh|dvh|vi|svi|lvi|dvi|vb|svb|lvb|dvb|vmin|svmin|lvmin|dvmin|vmax|svmax|lvmax|dvmax)$/;
		observeAndResizeJS = function() {
			const { MutationObserver } = window;
			if (!MutationObserver || !window.parent) return;
			function sendResize() {
				if (!document.body) return;
				const clientBoundingRect = document.body.getBoundingClientRect();
				window.parent.postMessage({
					action: "resize",
					width: clientBoundingRect.width,
					height: clientBoundingRect.height
				}, "*");
			}
			function connect() {
				const { body } = document;
				if (!body) return;
				new MutationObserver(sendResize).observe(body, {
					attributes: true,
					attributeOldValue: false,
					characterData: true,
					characterDataOldValue: false,
					childList: true,
					subtree: true
				});
				function removeViewportStyles(ruleOrNode) {
					if (ruleOrNode.style) [
						"width",
						"height",
						"minHeight",
						"maxHeight"
					].forEach(function(style) {
						if (/^\d*\.?\d+(?:vw|vh|svw|lvw|dvw|svh|lvh|dvh|vi|svi|lvi|dvi|vb|svb|lvb|dvb|vmin|svmin|lvmin|dvmin|vmax|svmax|lvmax|dvmax)$/.test(ruleOrNode.style[style])) ruleOrNode.style[style] = "";
					});
				}
				Array.prototype.forEach.call(document.querySelectorAll("[style]"), removeViewportStyles);
				Array.prototype.forEach.call(document.styleSheets, function(stylesheet) {
					let rules;
					try {
						rules = stylesheet.cssRules || stylesheet.rules;
					} catch {
						return;
					}
					Array.prototype.forEach.call(rules, removeViewportStyles);
				});
				body.style.position = "absolute";
				body.style.width = "100%";
				body.setAttribute("data-resizable-iframe-connected", "");
				sendResize();
			}
			window.addEventListener("load", sendResize, true);
			window.addEventListener("resize", sendResize, true);
			if (document.body) connect();
			else document.addEventListener("DOMContentLoaded", connect);
		};
		style = `
	body {
		margin: 0;
	}
	html,
	body,
	body > div {
		width: 100%;
	}
	html.wp-has-aspect-ratio,
	body.wp-has-aspect-ratio,
	body.wp-has-aspect-ratio > div,
	body.wp-has-aspect-ratio > div iframe {
		width: 100%;
		height: 100%;
		overflow: hidden; /* If it has an aspect ratio, it shouldn't scroll. */
	}
	body > div > * {
		margin-top: 0 !important; /* Has to have !important to override inline styles. */
		margin-bottom: 0 !important;
	}
`;
		try {
			buildSandBoxDocument.__docgenInfo = {
				"description": "Builds the full HTML document string for the sandbox iframe content. Shared\nby both the isolated (`srcdoc`) and same-origin (`contentDocument.write`)\nsandboxes so the two paths always emit the same markup — notably keeping the\nresize script in `<head>`, ahead of the user content, on both. A single\nbuilder means the write path cannot drift back to putting the script in\n`<body>` while the `srcdoc` path keeps it in `<head>`.\n\n`lang` is passed in rather than read here because the two callers source it\nfrom different documents: the isolated sandbox uses the module's `document`,\nwhile the same-origin sandbox uses the iframe's `ownerDocument`. They are\nnormally the same document, but keeping the argument preserves each path's\nexact prior behavior.\n\nExported for tests.",
				"displayName": "buildSandBoxDocument",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/sandbox/index.tsx",
				"methods": [],
				"props": {
					"html": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/sandbox/index.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "html",
						"required": true,
						"tags": {},
						"type": { "name": "string" }
					},
					"title": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/sandbox/index.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "title",
						"required": true,
						"tags": {},
						"type": { "name": "string" }
					},
					"type": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/sandbox/index.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "type",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"styles": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/sandbox/index.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "styles",
						"required": true,
						"tags": {},
						"type": { "name": "string[]" }
					},
					"scripts": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/sandbox/index.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "scripts",
						"required": true,
						"tags": {},
						"type": { "name": "string[]" }
					},
					"lang": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/sandbox/index.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "lang",
						"required": true,
						"tags": {},
						"type": { "name": "string" }
					}
				},
				"tags": {
					"param": "props\nprops.html User-supplied HTML for the iframe body.\nprops.title Document title.\nprops.type Optional class name for the `<html>`/`<body>` elements.\nprops.styles CSS rule strings, injected as `<style>` tags in the head.\nprops.scripts External script URLs, injected as `<script src>` in the\nbody (embeds expect their scripts there).\nprops.lang Language for the `<html lang>` attribute.",
					"return": "The full `<!DOCTYPE html>…` document string."
				}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			VIEWPORT_UNIT_VALUE_REGEX.__docgenInfo = {
				"description": "Matches CSS viewport-relative length values such as `100vh`, `50.5vw`,\nand `.5dvh`. Used to strip viewport units from user-supplied HTML inside\nthe sandbox iframe, because those units are relative to the iframe's\nown size and would create a measurement feedback loop with the\nresize observer.\n\nExported for tests. NOTE: an identical regex literal is duplicated\ninside `observeAndResizeJS` below because that function is serialized\nvia `.toString()` and embedded into the iframe's `srcdoc` — it has no\naccess to this module's scope at runtime. If you change one, change\nthe other; the \"is embedded in the sandbox iframe srcdoc\" test\nguards against drift.",
				"displayName": "VIEWPORT_UNIT_VALUE_REGEX",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/sandbox/index.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			SandBox.__docgenInfo = {
				"description": "This component provides an isolated environment for arbitrary HTML via iframes.\n\n```jsx\nimport { SandBox } from '@wordpress/components';\n\nconst MySandBox = () => (\n	<SandBox html=\"<p>Content</p>\" title=\"SandBox\" type=\"embed\" />\n);\n```",
				"displayName": "SandBox",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/sandbox/index.tsx",
				"methods": [],
				"props": {
					"allowSameOrigin": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/sandbox/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Whether to include `allow-same-origin` in the iframe's sandbox\nattribute. When true, nested iframes (such as third-party embeds)\ncan access their own origin's cookies and storage.\n\nOnly enable this for content that is NOT directly user-controlled,\nsuch as server-fetched oEmbed previews.",
						"name": "allowSameOrigin",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"allowPopups": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/sandbox/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Whether to include `allow-popups` in the iframe's sandbox attribute.\nWhen true, content inside the iframe is allowed to open new browsing\ncontexts (e.g. links that open in a new tab, or `window.open`).\n\nEnable this for previews whose content includes links that should be\nfollowable, such as embeds.",
						"name": "allowPopups",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"allowForms": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/sandbox/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Whether to include `allow-forms` in the iframe's sandbox attribute.\nWhen true, content inside the iframe is allowed to submit forms.\n\nEnable this for previews whose content includes forms that should be\nsubmittable.",
						"name": "allowForms",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"html": {
						"defaultValue": { "value": "''" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/sandbox/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The HTML to render in the body of the iframe document.",
						"name": "html",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"title": {
						"defaultValue": { "value": "''" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/sandbox/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The `<title>` of the iframe document.",
						"name": "title",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"type": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/sandbox/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The CSS class name to apply to the `<html>` and `<body>` elements of the iframe.",
						"name": "type",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"styles": {
						"defaultValue": { "value": "[]" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/sandbox/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "An array of CSS strings to inject into the `<head>` of the iframe document.",
						"name": "styles",
						"required": false,
						"tags": {},
						"type": { "name": "string[]" }
					},
					"scripts": {
						"defaultValue": { "value": "[]" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/sandbox/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "An array of script URLs to inject as `<script>` tags into the bottom of the `<body>` of the iframe document.",
						"name": "scripts",
						"required": false,
						"tags": {},
						"type": { "name": "string[]" }
					},
					"onFocus": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/sandbox/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The `onFocus` callback for the iframe.",
						"name": "onFocus",
						"required": false,
						"tags": {},
						"type": { "name": "FocusEventHandler<HTMLIFrameElement>" }
					},
					"tabIndex": {
						"defaultValue": { "value": "0" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/sandbox/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The `tabindex` the iframe should receive.",
						"name": "tabIndex",
						"required": false,
						"tags": {},
						"type": { "name": "number" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/components/src/sandbox/stories/index.story.tsx
var import_jsx_dev_runtime, fn, _jsxFileName, meta, Template, Default, WithForm;
function init_index_story() {
	return (init_index_story = __esmMin((() => {
		init_sandbox();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		({fn} = __STORYBOOK_MODULE_TEST__);
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/sandbox/stories/index.story.tsx";
		meta = {
			tags: ["manifest"],
			component: SandBox,
			title: "Components/@wordpress-components/Utilities/SandBox",
			id: "components-sandbox",
			argTypes: { onFocus: { control: false } },
			args: { onFocus: fn() },
			parameters: {
				controls: { expanded: true },
				docs: { canvas: { sourceState: "shown" } },
				componentStatus: {
					status: "recommended",
					whereUsed: "global"
				}
			}
		};
		Template = (args) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SandBox, { ...args }, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 27,
			columnNumber: 57
		}, void 0);
		Default = Template.bind({});
		Default.args = {
			title: "Sandbox preview",
			html: "<p>Arbitrary HTML content</p>",
			allowForms: false
		};
		WithForm = Template.bind({});
		WithForm.args = {
			title: "Sandbox preview with form",
			html: "<form action=\"#\"><label for=\"name\">Name</label><input id=\"name\" type=\"text\" /><button type=\"submit\">Submit</button></form>",
			allowForms: true
		};
		Default.parameters = {
			...Default.parameters,
			docs: {
				...Default.parameters?.docs,
				source: {
					originalSource: "args => <SandBox {...args} />",
					...Default.parameters?.docs?.source
				}
			}
		};
		WithForm.parameters = {
			...WithForm.parameters,
			docs: {
				...WithForm.parameters?.docs,
				source: {
					originalSource: "args => <SandBox {...args} />",
					...WithForm.parameters?.docs?.source
				}
			}
		};
	})))();
}
//#endregion
init_index_story();
export { Default, WithForm, meta as default };
