import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { o as init_context_connect, r as contextConnect } from "./use-context-system-BCQpAcZ4.js";
import { n as init_component$1, t as View } from "./component-CkY7eURU.js";
import { n as useHStack, t as init_hook } from "./hook-DASpOo3z.js";
//#region ../packages/components/src/h-stack/component.tsx
function UnconnectedHStack(props, forwardedRef) {
	const hStackProps = useHStack(props);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(View, {
		...hStackProps,
		ref: forwardedRef
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 13,
		columnNumber: 9
	}, this);
}
var import_jsx_dev_runtime, _jsxFileName, HStack;
function init_component() {
	return (init_component = __esmMin((() => {
		init_context_connect();
		init_component$1();
		init_hook();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/h-stack/component.tsx";
		HStack = contextConnect(UnconnectedHStack, "HStack");
		try {
			HStack.__docgenInfo = {
				"description": "`HStack` (Horizontal Stack) arranges child elements in a horizontal line.\n\n`HStack` can render anything inside.\n\n```jsx\nimport {\n	__experimentalHStack as HStack,\n	__experimentalText as Text,\n} from `@wordpress/components`;\n\nfunction Example() {\n	return (\n		<HStack>\n			<Text>Code</Text>\n			<Text>is</Text>\n			<Text>Poetry</Text>\n		</HStack>\n	);\n}\n```",
				"displayName": "HStack",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/h-stack/component.tsx",
				"methods": [],
				"props": {
					"direction": {
						"defaultValue": { "value": "'row'" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/flex/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The direction flow of the children content can be adjusted with\n`direction`. `column` will align children vertically and `row` will align\nchildren horizontally.",
						"name": "direction",
						"required": false,
						"tags": {},
						"type": { "name": "FlexDirection" }
					},
					"children": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/flex/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The children elements.",
						"name": "children",
						"required": true,
						"tags": {},
						"type": { "name": "ReactNode" }
					},
					"wrap": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/flex/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Determines if children should wrap.",
						"name": "wrap",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"expanded": {
						"defaultValue": { "value": "true" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/flex/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Expands to the maximum available width (if horizontal) or height (if\nvertical).",
						"name": "expanded",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"justify": {
						"defaultValue": { "value": "'space-between'" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/flex/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Horizontally aligns content if the `direction` is `row`, or vertically\naligns content if the `direction` is `column`.",
						"name": "justify",
						"required": false,
						"tags": {},
						"type": { "name": "JustifyContent" }
					},
					"isReversed": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/flex/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "@deprecated",
						"name": "isReversed",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"alignment": {
						"defaultValue": { "value": "'edge'" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/h-stack/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Determines how the child elements are aligned.\n\n* `top`: Aligns content to the top.\n* `topLeft`: Aligns content to the top/left.\n* `topRight`: Aligns content to the top/right.\n* `left`: Aligns content to the left.\n* `center`: Aligns content to the center.\n* `right`: Aligns content to the right.\n* `bottom`: Aligns content to the bottom.\n* `bottomLeft`: Aligns content to the bottom/left.\n* `bottomRight`: Aligns content to the bottom/right.\n* `edge`: Justifies content to be evenly spread out up to the main axis edges of the container.\n* `stretch`: Stretches content to the cross axis edges of the container.",
						"name": "alignment",
						"required": false,
						"tags": {},
						"type": { "name": "\"center\" | \"end\" | (string & {}) | \"baseline\" | \"inherit\" | \"initial\" | \"start\" | \"-moz-initial\" | \"revert\" | \"revert-layer\" | \"unset\" | \"stretch\" | \"flex-end\" | \"flex-start\" | ... 13 more ..." }
					},
					"spacing": {
						"defaultValue": { "value": "2" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/h-stack/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The amount of space between each child element. Spacing in between each child can be adjusted by using `spacing`.\nThe value of `spacing` works as a multiplier to the library's grid system (base of `4px`).",
						"name": "spacing",
						"required": false,
						"tags": {},
						"type": { "name": "Width<string | number>" }
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
export { init_component as n, HStack as t };
