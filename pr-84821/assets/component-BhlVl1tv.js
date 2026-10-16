import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as useContextSystem, o as init_context_connect, r as contextConnect, t as init_use_context_system } from "./use-context-system-BCQpAcZ4.js";
import { i as init_font_size, n as useText, r as getHeadingFontSize, t as init_hook$1 } from "./hook-D6VdZmLK.js";
import { i as init_colors_values, n as init_config_values, r as COLORS, t as config_values_default } from "./config-values-hzX34N5c.js";
import { n as init_component$1, t as View } from "./component-CkY7eURU.js";
//#region ../packages/components/src/heading/hook.ts
function useHeading(props) {
	const { as: asProp, level = 2, color = COLORS.theme.foreground, isBlock = true, weight = config_values_default.fontWeightEmphasis, ...otherProps } = useContextSystem(props, "Heading");
	const as = asProp || `h${level}`;
	const a11yProps = {};
	if (typeof as === "string" && as[0] !== "h") {
		a11yProps.role = "heading";
		a11yProps["aria-level"] = typeof level === "string" ? parseInt(level) : level;
	}
	return {
		...useText({
			color,
			isBlock,
			weight,
			size: getHeadingFontSize(level),
			...otherProps
		}),
		...a11yProps,
		as
	};
}
function init_hook() {
	return (init_hook = __esmMin((() => {
		init_use_context_system();
		init_hook$1();
		init_font_size();
		init_config_values(), init_colors_values();
	})))();
}
//#endregion
//#region ../packages/components/src/heading/component.tsx
function UnconnectedHeading(props, forwardedRef) {
	const headerProps = useHeading(props);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(View, {
		...headerProps,
		ref: forwardedRef
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 14,
		columnNumber: 9
	}, this);
}
var import_jsx_dev_runtime, _jsxFileName, Heading;
function init_component() {
	return (init_component = __esmMin((() => {
		init_context_connect();
		init_component$1();
		init_hook();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/heading/component.tsx";
		Heading = contextConnect(UnconnectedHeading, "Heading");
		try {
			Heading.__docgenInfo = {
				"description": "`Heading` renders headings and titles using the library's typography system.\n\n```jsx\nimport { __experimentalHeading as Heading } from \"@wordpress/components\";\n\nfunction Example() {\n  return <Heading>Code is Poetry</Heading>;\n}\n```",
				"displayName": "Heading",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/heading/component.tsx",
				"methods": [],
				"props": {
					"ellipsis": {
						"defaultValue": { "value": "'…'" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/truncate/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The ellipsis string when truncating the text by the `limit` prop's value.",
						"name": "ellipsis",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"size": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/text/types.ts",
							"name": "Props"
						}],
						"description": "Adjusts text size based on the typography system. `Text` can render a wide range of font sizes, which are automatically calculated and adapted to the typography system. The `size` value can be a system preset, a `number`, or a custom unit value (`string`) such as `30em`.",
						"name": "size",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/text/types.ts",
							"name": "Props"
						},
						"required": false,
						"tags": {},
						"type": { "name": "string | number | (string & {})" }
					},
					"display": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/text/types.ts",
							"name": "Props"
						}],
						"description": "Adjusts the CSS display.",
						"name": "display",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/text/types.ts",
							"name": "Props"
						},
						"required": false,
						"tags": {},
						"type": { "name": "Display" }
					},
					"letterSpacing": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/text/types.ts",
							"name": "Props"
						}],
						"description": "Adjusts letter-spacing of the text.",
						"name": "letterSpacing",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/text/types.ts",
							"name": "Props"
						},
						"required": false,
						"tags": {},
						"type": { "name": "LetterSpacing<string | number>" }
					},
					"children": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/truncate/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The children elements.\n\nNote: text truncation will be attempted only if the `children` are either\nof type `string` or `number`. In any other scenarios, the component will\nnot attempt to truncate the text, and will pass through the `children`.",
						"name": "children",
						"required": true,
						"tags": {},
						"type": { "name": "ReactNode" }
					},
					"align": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/text/types.ts",
							"name": "Props"
						}],
						"description": "Adjusts the text alignment.",
						"name": "align",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/text/types.ts",
							"name": "Props"
						},
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "TextAlign",
							"value": [
								{ "value": "\"center\"" },
								{ "value": "\"end\"" },
								{ "value": "\"inherit\"" },
								{ "value": "\"initial\"" },
								{ "value": "\"start\"" },
								{ "value": "\"-moz-initial\"" },
								{ "value": "\"revert\"" },
								{ "value": "\"revert-layer\"" },
								{ "value": "\"unset\"" },
								{ "value": "\"left\"" },
								{ "value": "\"right\"" },
								{ "value": "\"-khtml-center\"" },
								{ "value": "\"-khtml-left\"" },
								{ "value": "\"-khtml-right\"" },
								{ "value": "\"-moz-center\"" },
								{ "value": "\"-moz-left\"" },
								{ "value": "\"-moz-right\"" },
								{ "value": "\"-webkit-center\"" },
								{ "value": "\"-webkit-left\"" },
								{ "value": "\"-webkit-match-parent\"" },
								{ "value": "\"-webkit-right\"" },
								{ "value": "\"justify\"" },
								{ "value": "\"match-parent\"" }
							]
						}
					},
					"variant": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/text/types.ts",
							"name": "Props"
						}],
						"description": "Adjusts style variation of the text.",
						"name": "variant",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/text/types.ts",
							"name": "Props"
						},
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "\"muted\"",
							"value": [{ "value": "\"muted\"" }]
						}
					},
					"limit": {
						"defaultValue": { "value": "0" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/truncate/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Determines the max number of characters to be displayed before the rest\nof the text gets truncated. Requires `ellipsizeMode` to assume values\ndifferent from `auto` and `none`.",
						"name": "limit",
						"required": false,
						"tags": {},
						"type": { "name": "number" }
					},
					"isDestructive": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/text/types.ts",
							"name": "Props"
						}],
						"description": "Renders a destructive color.",
						"name": "isDestructive",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/text/types.ts",
							"name": "Props"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"adjustLineHeightForInnerControls": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/text/types.ts",
							"name": "Props"
						}],
						"description": "Automatically calculate the appropriate line-height value for contents that render text and Control elements (e.g. `TextInput`).",
						"name": "adjustLineHeightForInnerControls",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/text/types.ts",
							"name": "Props"
						},
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "\"small\" | \"medium\" | \"large\" | \"xSmall\"",
							"value": [
								{ "value": "\"small\"" },
								{ "value": "\"medium\"" },
								{ "value": "\"large\"" },
								{ "value": "\"xSmall\"" }
							]
						}
					},
					"highlightEscape": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/text/types.ts",
							"name": "Props"
						}],
						"description": "Escape characters in `highlightWords` which are meaningful in regular expressions.",
						"name": "highlightEscape",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/text/types.ts",
							"name": "Props"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"highlightCaseSensitive": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/text/types.ts",
							"name": "Props"
						}],
						"description": "Determines if `highlightWords` should be case sensitive.",
						"name": "highlightCaseSensitive",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/text/types.ts",
							"name": "Props"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"highlightSanitize": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/text/types.ts",
							"name": "Props"
						}],
						"description": "Array of search words. String search terms are automatically cast to RegExps unless `highlightEscape` is true.",
						"name": "highlightSanitize",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/text/types.ts",
							"name": "Props"
						},
						"required": false,
						"tags": {},
						"type": { "name": "((text: string) => string)" }
					},
					"lineHeight": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/text/types.ts",
							"name": "Props"
						}],
						"description": "Adjusts all text line-height based on the typography system.",
						"name": "lineHeight",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/text/types.ts",
							"name": "Props"
						},
						"required": false,
						"tags": {},
						"type": { "name": "LineHeight<string | number>" }
					},
					"optimizeReadabilityFor": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/text/types.ts",
							"name": "Props"
						}],
						"description": "The `Text` color can be adapted to a background color for optimal readability. `optimizeReadabilityFor` can accept CSS variables, in addition to standard CSS color values (e.g. Hex, RGB, HSL, etc...).",
						"name": "optimizeReadabilityFor",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/text/types.ts",
							"name": "Props"
						},
						"required": false,
						"tags": {},
						"type": { "name": "Color" }
					},
					"truncate": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/text/types.ts",
							"name": "Props"
						}],
						"description": "Enables text truncation. When `truncate` is set, we are able to truncate the long text in a variety of ways. Note: text truncation won't work if the `isBlock` property is set to `true`",
						"name": "truncate",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/text/types.ts",
							"name": "Props"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"upperCase": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/text/types.ts",
							"name": "Props"
						}],
						"description": "Uppercases the text content.",
						"name": "upperCase",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/text/types.ts",
							"name": "Props"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"highlightWords": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/text/types.ts",
							"name": "Props"
						}],
						"description": "Letters or words within `Text` can be highlighted using `highlightWords`.",
						"name": "highlightWords",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/text/types.ts",
							"name": "Props"
						},
						"required": false,
						"tags": {},
						"type": { "name": "string[]" }
					},
					"ellipsizeMode": {
						"defaultValue": { "value": "'auto'" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/truncate/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Determines where to truncate.  For example, we can truncate text right in\nthe middle. To do this, we need to set `ellipsizeMode` to `middle` and a\ntext `limit`.\n\n* `auto`: Trims content at the end automatically without a `limit`.\n* `head`: Trims content at the beginning. Requires a `limit`.\n* `middle`: Trims content in the middle. Requires a `limit`.\n* `tail`: Trims content at the end. Requires a `limit`.",
						"name": "ellipsizeMode",
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "TruncateEllipsizeMode",
							"value": [
								{ "value": "\"head\"" },
								{ "value": "\"none\"" },
								{ "value": "\"auto\"" },
								{ "value": "\"middle\"" },
								{ "value": "\"tail\"" }
							]
						}
					},
					"numberOfLines": {
						"defaultValue": { "value": "0" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/truncate/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Clamps the text content to the specified `numberOfLines`, adding an\nellipsis at the end. Note: this feature ignores the value of the\n`ellipsis` prop and always displays the default `…` ellipsis.",
						"name": "numberOfLines",
						"required": false,
						"tags": {},
						"type": { "name": "number" }
					},
					"level": {
						"defaultValue": { "value": "2" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/heading/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Passing any of the heading levels to `level` will both render the correct\ntypographic text size as well as the semantic element corresponding to\nthe level (`h1` for `1` for example).",
						"name": "level",
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "HeadingSize",
							"value": [
								{ "value": "1" },
								{ "value": "2" },
								{ "value": "\"1\"" },
								{ "value": "3" },
								{ "value": "4" },
								{ "value": "5" },
								{ "value": "6" },
								{ "value": "\"2\"" },
								{ "value": "\"3\"" },
								{ "value": "\"4\"" },
								{ "value": "\"5\"" },
								{ "value": "\"6\"" }
							]
						}
					},
					"isBlock": {
						"defaultValue": { "value": "true" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/heading/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Sets `Heading` to have `display: block`. Note: text truncation only works\nwhen `isBlock` is `false`.",
						"name": "isBlock",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"color": {
						"defaultValue": { "value": "'#1e1e1e'" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/heading/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Adjusts the text color.",
						"name": "color",
						"required": false,
						"tags": {},
						"type": { "name": "Color" }
					},
					"weight": {
						"defaultValue": { "value": "'600'" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/heading/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Adjusts font-weight of the text.",
						"name": "weight",
						"required": false,
						"tags": {},
						"type": { "name": "FontWeight | TextWeight" }
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
export { init_component as n, Heading as t };
