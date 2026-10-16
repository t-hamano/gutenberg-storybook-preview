import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { a as init_clsx, i as clsx } from "./iframe-Dbjzp1_m.js";
import { n as useContextSystem, o as init_context_connect, r as contextConnect, t as init_use_context_system } from "./use-context-system-BCQpAcZ4.js";
import { n as init_component$1, t as View } from "./component-CkY7eURU.js";
import { n as space, t as init_space } from "./space-BUoQC8K7.js";
//#region ../packages/components/src/spacer/style.module.scss
var spacer, style_module_default;
function init_style_module() {
	return (init_style_module = __esmMin((() => {
		spacer = "_spacer_pmiml_1";
		style_module_default = { spacer };
	})))();
}
//#endregion
//#region ../packages/components/src/spacer/hook.ts
function isDefined(o) {
	return typeof o !== "undefined" && o !== null;
}
function useSpacer(props) {
	const { className, margin, marginBottom = 2, marginLeft, marginRight, marginTop, marginX, marginY, padding, paddingBottom, paddingLeft, paddingRight, paddingTop, paddingX, paddingY, style, ...otherProps } = useContextSystem(props, "Spacer");
	const spacingStyle = {};
	if (isDefined(margin)) spacingStyle["--wp-components-spacer-margin"] = space(margin);
	if (isDefined(marginY)) {
		spacingStyle["--wp-components-spacer-margin-block-start"] = space(marginY);
		spacingStyle["--wp-components-spacer-margin-block-end"] = space(marginY);
	}
	if (isDefined(marginX)) {
		spacingStyle["--wp-components-spacer-margin-inline-start"] = space(marginX);
		spacingStyle["--wp-components-spacer-margin-inline-end"] = space(marginX);
	}
	if (isDefined(marginTop)) spacingStyle["--wp-components-spacer-margin-block-start"] = space(marginTop);
	if (isDefined(marginBottom)) spacingStyle["--wp-components-spacer-margin-block-end"] = space(marginBottom);
	if (isDefined(marginLeft)) spacingStyle["--wp-components-spacer-margin-inline-start"] = space(marginLeft);
	if (isDefined(marginRight)) spacingStyle["--wp-components-spacer-margin-inline-end"] = space(marginRight);
	if (isDefined(padding)) spacingStyle["--wp-components-spacer-padding"] = space(padding);
	if (isDefined(paddingY)) {
		spacingStyle["--wp-components-spacer-padding-block-start"] = space(paddingY);
		spacingStyle["--wp-components-spacer-padding-block-end"] = space(paddingY);
	}
	if (isDefined(paddingX)) {
		spacingStyle["--wp-components-spacer-padding-inline-start"] = space(paddingX);
		spacingStyle["--wp-components-spacer-padding-inline-end"] = space(paddingX);
	}
	if (isDefined(paddingTop)) spacingStyle["--wp-components-spacer-padding-block-start"] = space(paddingTop);
	if (isDefined(paddingBottom)) spacingStyle["--wp-components-spacer-padding-block-end"] = space(paddingBottom);
	if (isDefined(paddingLeft)) spacingStyle["--wp-components-spacer-padding-inline-start"] = space(paddingLeft);
	if (isDefined(paddingRight)) spacingStyle["--wp-components-spacer-padding-inline-end"] = space(paddingRight);
	const spacerStyle = {
		...spacingStyle,
		...style
	};
	return {
		...otherProps,
		className: clsx(style_module_default.spacer, className),
		style: spacerStyle
	};
}
function init_hook() {
	return (init_hook = __esmMin((() => {
		init_clsx();
		init_use_context_system();
		init_space();
		init_style_module();
	})))();
}
//#endregion
//#region ../packages/components/src/spacer/component.tsx
function UnconnectedSpacer(props, forwardedRef) {
	const spacerProps = useSpacer(props);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(View, {
		...spacerProps,
		ref: forwardedRef
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 14,
		columnNumber: 9
	}, this);
}
var import_jsx_dev_runtime, _jsxFileName, Spacer;
function init_component() {
	return (init_component = __esmMin((() => {
		init_context_connect();
		init_component$1();
		init_hook();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/spacer/component.tsx";
		Spacer = contextConnect(UnconnectedSpacer, "Spacer");
		try {
			Spacer.__docgenInfo = {
				"description": "`Spacer` is a primitive layout component that providers inner (`padding`) or outer (`margin`) space in-between components. It can also be used to adaptively provide space within an `HStack` or `VStack`.\n\n`Spacer` comes with a bunch of shorthand props to adjust `margin` and `padding`. The values of these props\ncan either be a number (which will act as a multiplier to the library's grid system base of 4px),\nor a literal CSS value string.\n\n```jsx\nimport { Spacer } from `@wordpress/components`\n\nfunction Example() {\n  return (\n    <View>\n      <Spacer>\n        <Heading>WordPress.org</Heading>\n      </Spacer>\n      <Text>\n        Code is Poetry\n      </Text>\n    </View>\n  );\n}\n```",
				"displayName": "Spacer",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/spacer/component.tsx",
				"methods": [],
				"props": {
					"children": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/spacer/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The children elements.",
						"name": "children",
						"required": false,
						"tags": {},
						"type": { "name": "ReactNode" }
					},
					"margin": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/spacer/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Adjusts all margins.",
						"name": "margin",
						"required": false,
						"tags": {},
						"type": { "name": "SpaceInput" }
					},
					"marginBottom": {
						"defaultValue": { "value": "2" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/spacer/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Adjusts bottom margin, potentially overriding the value from the more\ngeneric `margin` and `marginY` props.",
						"name": "marginBottom",
						"required": false,
						"tags": {},
						"type": { "name": "SpaceInput" }
					},
					"marginLeft": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/spacer/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Adjusts left margin, potentially overriding the value from the more\ngeneric `margin` and `marginX` props.",
						"name": "marginLeft",
						"required": false,
						"tags": {},
						"type": { "name": "SpaceInput" }
					},
					"marginRight": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/spacer/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Adjusts right margin, potentially overriding the value from the more\ngeneric `margin` and `marginX` props.",
						"name": "marginRight",
						"required": false,
						"tags": {},
						"type": { "name": "SpaceInput" }
					},
					"marginTop": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/spacer/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Adjusts top margin, potentially overriding the value from the more\ngeneric `margin` and `marginY` props.",
						"name": "marginTop",
						"required": false,
						"tags": {},
						"type": { "name": "SpaceInput" }
					},
					"marginX": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/spacer/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Adjusts left and right margins, potentially overriding the value from the\nmore generic `margin` prop.",
						"name": "marginX",
						"required": false,
						"tags": {},
						"type": { "name": "SpaceInput" }
					},
					"marginY": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/spacer/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Adjusts top and bottom margins, potentially overriding the value from the\nmore generic `margin` prop.",
						"name": "marginY",
						"required": false,
						"tags": {},
						"type": { "name": "SpaceInput" }
					},
					"padding": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/spacer/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Adjusts all padding.",
						"name": "padding",
						"required": false,
						"tags": {},
						"type": { "name": "SpaceInput" }
					},
					"paddingBottom": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/spacer/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Adjusts bottom padding, potentially overriding the value from the more\ngeneric `padding` and `paddingY` props.",
						"name": "paddingBottom",
						"required": false,
						"tags": {},
						"type": { "name": "SpaceInput" }
					},
					"paddingLeft": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/spacer/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Adjusts left padding, potentially overriding the value from the more\ngeneric `padding` and `paddingX` props.",
						"name": "paddingLeft",
						"required": false,
						"tags": {},
						"type": { "name": "SpaceInput" }
					},
					"paddingRight": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/spacer/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Adjusts right padding, potentially overriding the value from the more\ngeneric `padding` and `paddingX` props.",
						"name": "paddingRight",
						"required": false,
						"tags": {},
						"type": { "name": "SpaceInput" }
					},
					"paddingTop": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/spacer/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Adjusts top padding, potentially overriding the value from the more\ngeneric `padding` and `paddingY` props.",
						"name": "paddingTop",
						"required": false,
						"tags": {},
						"type": { "name": "SpaceInput" }
					},
					"paddingX": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/spacer/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Adjusts left and right padding, potentially overriding the value from the\nmore generic `padding` prop.",
						"name": "paddingX",
						"required": false,
						"tags": {},
						"type": { "name": "SpaceInput" }
					},
					"paddingY": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/spacer/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Adjusts top and bottom padding, potentially overriding the value from the\nmore generic `padding` prop.",
						"name": "paddingY",
						"required": false,
						"tags": {},
						"type": { "name": "SpaceInput" }
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
export { init_component as n, Spacer as t };
