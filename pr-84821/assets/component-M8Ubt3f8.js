import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { a as init_clsx, i as clsx } from "./iframe-Dbjzp1_m.js";
import { n as useContextSystem, o as init_context_connect, r as contextConnect, t as init_use_context_system } from "./use-context-system-BCQpAcZ4.js";
import { n as init_component$1, t as View } from "./component-CkY7eURU.js";
//#region ../packages/components/src/scrollable/style.module.scss
var scrollable, style_module_default;
function init_style_module() {
	return (init_style_module = __esmMin((() => {
		scrollable = "_scrollable_756px_1";
		style_module_default = {
			scrollable,
			"smooth-scroll": "_smooth-scroll_756px_24",
			"scroll-x": "_scroll-x_756px_28",
			"scroll-y": "_scroll-y_756px_33",
			"scroll-auto": "_scroll-auto_756px_38"
		};
	})))();
}
//#endregion
//#region ../packages/components/src/scrollable/hook.ts
function useScrollable(props) {
	const { className, scrollDirection = "y", smoothScroll = false, ...otherProps } = useContextSystem(props, "Scrollable");
	const classes = clsx(style_module_default.scrollable, {
		[style_module_default["smooth-scroll"]]: smoothScroll,
		[style_module_default["scroll-x"]]: scrollDirection === "x",
		[style_module_default["scroll-y"]]: scrollDirection === "y",
		[style_module_default["scroll-auto"]]: scrollDirection === "auto"
	}, className);
	return {
		...otherProps,
		className: classes
	};
}
function init_hook() {
	return (init_hook = __esmMin((() => {
		init_clsx();
		init_use_context_system();
		init_style_module();
	})))();
}
//#endregion
//#region ../packages/components/src/scrollable/component.tsx
function UnconnectedScrollable(props, forwardedRef) {
	const scrollableProps = useScrollable(props);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(View, {
		...scrollableProps,
		ref: forwardedRef
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 14,
		columnNumber: 9
	}, this);
}
var import_jsx_dev_runtime, _jsxFileName, Scrollable;
function init_component() {
	return (init_component = __esmMin((() => {
		init_context_connect();
		init_component$1();
		init_hook();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/scrollable/component.tsx";
		Scrollable = contextConnect(UnconnectedScrollable, "Scrollable");
		try {
			UnconnectedScrollable.__docgenInfo = {
				"description": "",
				"displayName": "UnconnectedScrollable",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/scrollable/component.tsx",
				"methods": [],
				"props": {
					"children": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/scrollable/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The children elements.",
						"name": "children",
						"required": true,
						"tags": {},
						"type": { "name": "ReactNode" }
					},
					"scrollDirection": {
						"defaultValue": { "value": "'y'" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/scrollable/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Renders a scrollbar for a specific axis when content overflows.",
						"name": "scrollDirection",
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "ScrollableDirection",
							"value": [
								{ "value": "\"x\"" },
								{ "value": "\"y\"" },
								{ "value": "\"auto\"" }
							]
						}
					},
					"smoothScroll": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/scrollable/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Enables (CSS) smooth scrolling.",
						"name": "smoothScroll",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"as": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/context/wordpress-component.ts",
							"name": "TypeLiteral"
						}],
						"description": "The HTML element or React component to render the component as.",
						"name": "as",
						"required": false,
						"tags": {},
						"type": { "name": "JSXElementConstructor<any> | keyof IntrinsicElements" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			Scrollable.__docgenInfo = {
				"description": "`Scrollable` is a layout component that content in a scrollable container.\n\n```jsx\nimport { __experimentalScrollable as Scrollable } from `@wordpress/components`;\n\nfunction Example() {\n	return (\n		<Scrollable style={ { maxHeight: 200 } }>\n			<div style={ { height: 500 } }>...</div>\n		</Scrollable>\n	);\n}\n```",
				"displayName": "Scrollable",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/scrollable/component.tsx",
				"methods": [],
				"props": {
					"children": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/scrollable/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The children elements.",
						"name": "children",
						"required": true,
						"tags": {},
						"type": { "name": "ReactNode" }
					},
					"scrollDirection": {
						"defaultValue": { "value": "'y'" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/scrollable/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Renders a scrollbar for a specific axis when content overflows.",
						"name": "scrollDirection",
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "ScrollableDirection",
							"value": [
								{ "value": "\"x\"" },
								{ "value": "\"y\"" },
								{ "value": "\"auto\"" }
							]
						}
					},
					"smoothScroll": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/scrollable/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Enables (CSS) smooth scrolling.",
						"name": "smoothScroll",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"as": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/context/wordpress-component.ts",
							"name": "TypeLiteral"
						}],
						"description": "The HTML element to render the component as.",
						"name": "as",
						"required": true,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "keyof IntrinsicElements",
							"value": [
								{ "value": "\"symbol\"" },
								{ "value": "\"object\"" },
								{ "value": "\"button\"" },
								{ "value": "\"filter\"" },
								{ "value": "\"html\"" },
								{ "value": "\"marker\"" },
								{ "value": "\"menu\"" },
								{ "value": "\"search\"" },
								{ "value": "\"text\"" },
								{ "value": "\"a\"" },
								{ "value": "\"abbr\"" },
								{ "value": "\"address\"" },
								{ "value": "\"area\"" },
								{ "value": "\"article\"" },
								{ "value": "\"aside\"" },
								{ "value": "\"audio\"" },
								{ "value": "\"b\"" },
								{ "value": "\"base\"" },
								{ "value": "\"bdi\"" },
								{ "value": "\"bdo\"" },
								{ "value": "\"big\"" },
								{ "value": "\"blockquote\"" },
								{ "value": "\"body\"" },
								{ "value": "\"br\"" },
								{ "value": "\"canvas\"" },
								{ "value": "\"caption\"" },
								{ "value": "\"center\"" },
								{ "value": "\"cite\"" },
								{ "value": "\"code\"" },
								{ "value": "\"col\"" },
								{ "value": "\"colgroup\"" },
								{ "value": "\"data\"" },
								{ "value": "\"datalist\"" },
								{ "value": "\"dd\"" },
								{ "value": "\"del\"" },
								{ "value": "\"details\"" },
								{ "value": "\"dfn\"" },
								{ "value": "\"dialog\"" },
								{ "value": "\"div\"" },
								{ "value": "\"dl\"" },
								{ "value": "\"dt\"" },
								{ "value": "\"em\"" },
								{ "value": "\"embed\"" },
								{ "value": "\"fieldset\"" },
								{ "value": "\"figcaption\"" },
								{ "value": "\"figure\"" },
								{ "value": "\"footer\"" },
								{ "value": "\"form\"" },
								{ "value": "\"h1\"" },
								{ "value": "\"h2\"" },
								{ "value": "\"h3\"" },
								{ "value": "\"h4\"" },
								{ "value": "\"h5\"" },
								{ "value": "\"h6\"" },
								{ "value": "\"head\"" },
								{ "value": "\"header\"" },
								{ "value": "\"hgroup\"" },
								{ "value": "\"hr\"" },
								{ "value": "\"i\"" },
								{ "value": "\"iframe\"" },
								{ "value": "\"img\"" },
								{ "value": "\"input\"" },
								{ "value": "\"ins\"" },
								{ "value": "\"kbd\"" },
								{ "value": "\"keygen\"" },
								{ "value": "\"label\"" },
								{ "value": "\"legend\"" },
								{ "value": "\"li\"" },
								{ "value": "\"link\"" },
								{ "value": "\"main\"" },
								{ "value": "\"map\"" },
								{ "value": "\"mark\"" },
								{ "value": "\"menuitem\"" },
								{ "value": "\"meta\"" },
								{ "value": "\"meter\"" },
								{ "value": "\"nav\"" },
								{ "value": "\"noscript\"" },
								{ "value": "\"ol\"" },
								{ "value": "\"optgroup\"" },
								{ "value": "\"option\"" },
								{ "value": "\"output\"" },
								{ "value": "\"p\"" },
								{ "value": "\"param\"" },
								{ "value": "\"picture\"" },
								{ "value": "\"pre\"" },
								{ "value": "\"progress\"" },
								{ "value": "\"q\"" },
								{ "value": "\"rp\"" },
								{ "value": "\"rt\"" },
								{ "value": "\"ruby\"" },
								{ "value": "\"s\"" },
								{ "value": "\"samp\"" },
								{ "value": "\"slot\"" },
								{ "value": "\"script\"" },
								{ "value": "\"section\"" },
								{ "value": "\"select\"" },
								{ "value": "\"small\"" },
								{ "value": "\"source\"" },
								{ "value": "\"span\"" },
								{ "value": "\"strong\"" },
								{ "value": "\"style\"" },
								{ "value": "\"sub\"" },
								{ "value": "\"summary\"" },
								{ "value": "\"sup\"" },
								{ "value": "\"table\"" },
								{ "value": "\"template\"" },
								{ "value": "\"tbody\"" },
								{ "value": "\"td\"" },
								{ "value": "\"textarea\"" },
								{ "value": "\"tfoot\"" },
								{ "value": "\"th\"" },
								{ "value": "\"thead\"" },
								{ "value": "\"time\"" },
								{ "value": "\"title\"" },
								{ "value": "\"tr\"" },
								{ "value": "\"track\"" },
								{ "value": "\"u\"" },
								{ "value": "\"ul\"" },
								{ "value": "\"var\"" },
								{ "value": "\"video\"" },
								{ "value": "\"wbr\"" },
								{ "value": "\"webview\"" },
								{ "value": "\"clipPath\"" },
								{ "value": "\"mask\"" },
								{ "value": "\"path\"" },
								{ "value": "\"switch\"" },
								{ "value": "\"animate\"" },
								{ "value": "\"circle\"" },
								{ "value": "\"defs\"" },
								{ "value": "\"desc\"" },
								{ "value": "\"ellipse\"" },
								{ "value": "\"feBlend\"" },
								{ "value": "\"feColorMatrix\"" },
								{ "value": "\"feComponentTransfer\"" },
								{ "value": "\"feComposite\"" },
								{ "value": "\"feConvolveMatrix\"" },
								{ "value": "\"feDiffuseLighting\"" },
								{ "value": "\"feDisplacementMap\"" },
								{ "value": "\"feDistantLight\"" },
								{ "value": "\"feDropShadow\"" },
								{ "value": "\"feFlood\"" },
								{ "value": "\"feFuncA\"" },
								{ "value": "\"feFuncB\"" },
								{ "value": "\"feFuncG\"" },
								{ "value": "\"feFuncR\"" },
								{ "value": "\"feGaussianBlur\"" },
								{ "value": "\"feImage\"" },
								{ "value": "\"feMerge\"" },
								{ "value": "\"feMergeNode\"" },
								{ "value": "\"feMorphology\"" },
								{ "value": "\"feOffset\"" },
								{ "value": "\"fePointLight\"" },
								{ "value": "\"feSpecularLighting\"" },
								{ "value": "\"feSpotLight\"" },
								{ "value": "\"feTile\"" },
								{ "value": "\"feTurbulence\"" },
								{ "value": "\"foreignObject\"" },
								{ "value": "\"g\"" },
								{ "value": "\"image\"" },
								{ "value": "\"line\"" },
								{ "value": "\"linearGradient\"" },
								{ "value": "\"metadata\"" },
								{ "value": "\"pattern\"" },
								{ "value": "\"polygon\"" },
								{ "value": "\"polyline\"" },
								{ "value": "\"radialGradient\"" },
								{ "value": "\"rect\"" },
								{ "value": "\"stop\"" },
								{ "value": "\"svg\"" },
								{ "value": "\"textPath\"" },
								{ "value": "\"tspan\"" },
								{ "value": "\"use\"" },
								{ "value": "\"view\"" },
								{ "value": "\"noindex\"" },
								{ "value": "\"animateMotion\"" },
								{ "value": "\"animateTransform\"" },
								{ "value": "\"mpath\"" },
								{ "value": "\"set\"" }
							]
						}
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
export { UnconnectedScrollable as n, init_component as r, Scrollable as t };
