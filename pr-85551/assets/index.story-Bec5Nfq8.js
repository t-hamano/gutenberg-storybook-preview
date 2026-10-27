import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as init_build_module, t as deprecated } from "./build-module-BWCORUbm.js";
import { a as init_clsx, i as clsx } from "./iframe-UtSZlYID.js";
import { c as init_context_system_provider, n as useContextSystem, o as init_context_connect, r as contextConnect, s as ContextSystemProvider, t as init_use_context_system } from "./use-context-system-6z_jGcZR.js";
import { n as init_component$6, t as View } from "./component-CkY7eURU.js";
import { n as init_component$7, t as Flex } from "./component-DsRVYDtI.js";
import { n as init_component$8, t as Text } from "./component-CWmndQns.js";
import { n as init_button, t as Button } from "./button-BO8bp-IJ.js";
import { n as init_component$9, t as Heading } from "./component-B-Ol-wDZ.js";
import { r as init_component$10, t as Elevation } from "./component-BSDJOoVE.js";
import { n as useSurface, t as init_hook$6 } from "./hook-D2gANUe4.js";
import { r as init_component$11, t as Scrollable } from "./component-BvUAjdrT.js";
import { r as init_component$12, t as Divider } from "./component-B4JXUmbj.js";
//#region ../packages/components/src/card/style.module.scss
var card, content, header, footer, body, media, divider, style_module_default;
function init_style_module() {
	return (init_style_module = __esmMin((() => {
		card = "_card_i8r50_46";
		content = "_content_i8r50_59";
		header = "_header_i8r50_63";
		footer = "_footer_i8r50_72";
		body = "_body_i8r50_81";
		media = "_media_i8r50_91";
		divider = "_divider_i8r50_117";
		style_module_default = {
			card,
			"card-borderless": "_card-borderless_i8r50_51",
			"is-rounded": "_is-rounded_i8r50_55",
			content,
			header,
			footer,
			body,
			"is-scrollable": "_is-scrollable_i8r50_87",
			media,
			divider,
			"section-borderless": "_section-borderless_i8r50_124",
			"is-shady": "_is-shady_i8r50_128",
			"padding-none": "_padding-none_i8r50_132",
			"padding-x-small": "_padding-x-small_i8r50_136",
			"padding-small": "_padding-small_i8r50_140",
			"padding-medium": "_padding-medium_i8r50_144",
			"padding-large": "_padding-large_i8r50_148",
			"padding-block-start-none": "_padding-block-start-none_i8r50_152",
			"padding-block-start-x-small": "_padding-block-start-x-small_i8r50_156",
			"padding-block-start-small": "_padding-block-start-small_i8r50_160",
			"padding-block-start-medium": "_padding-block-start-medium_i8r50_164",
			"padding-block-start-large": "_padding-block-start-large_i8r50_168",
			"padding-block-end-none": "_padding-block-end-none_i8r50_172",
			"padding-block-end-x-small": "_padding-block-end-x-small_i8r50_176",
			"padding-block-end-small": "_padding-block-end-small_i8r50_180",
			"padding-block-end-medium": "_padding-block-end-medium_i8r50_184",
			"padding-block-end-large": "_padding-block-end-large_i8r50_188",
			"padding-inline-start-none": "_padding-inline-start-none_i8r50_192",
			"padding-inline-start-x-small": "_padding-inline-start-x-small_i8r50_196",
			"padding-inline-start-small": "_padding-inline-start-small_i8r50_200",
			"padding-inline-start-medium": "_padding-inline-start-medium_i8r50_204",
			"padding-inline-start-large": "_padding-inline-start-large_i8r50_208",
			"padding-inline-end-none": "_padding-inline-end-none_i8r50_212",
			"padding-inline-end-x-small": "_padding-inline-end-x-small_i8r50_216",
			"padding-inline-end-small": "_padding-inline-end-small_i8r50_220",
			"padding-inline-end-medium": "_padding-inline-end-medium_i8r50_224",
			"padding-inline-end-large": "_padding-inline-end-large_i8r50_228"
		};
	})))();
}
//#endregion
//#region ../packages/components/src/card/card/hook.ts
function useDeprecatedProps({ elevation, isElevated, ...otherProps }) {
	const propsToReturn = { ...otherProps };
	let computedElevation = elevation;
	if (isElevated) {
		deprecated("Card isElevated prop", {
			since: "5.9",
			alternative: "elevation"
		});
		computedElevation ??= 2;
	}
	if (typeof computedElevation !== "undefined") propsToReturn.elevation = computedElevation;
	return propsToReturn;
}
function useCard(props) {
	const { className, elevation = 0, isBorderless = false, isRounded = true, size = "medium", ...otherProps } = useContextSystem(useDeprecatedProps(props), "Card");
	const classes = clsx(style_module_default.card, {
		[style_module_default["card-borderless"]]: isBorderless,
		[style_module_default["is-rounded"]]: isRounded
	}, className);
	return {
		...useSurface({
			...otherProps,
			className: classes
		}),
		elevation,
		isBorderless,
		isRounded,
		size
	};
}
function init_hook() {
	return (init_hook = __esmMin((() => {
		init_clsx();
		init_build_module();
		init_use_context_system();
		init_hook$6();
		init_style_module();
	})))();
}
//#endregion
//#region ../packages/components/src/card/card/component.tsx
function UnconnectedCard(props, forwardedRef) {
	const { children, elevation, isBorderless, isRounded, size, ...otherProps } = useCard(props);
	const contextProviderValue = (0, import_react.useMemo)(() => {
		const contextProps = {
			size,
			isBorderless
		};
		return {
			CardBody: contextProps,
			CardHeader: contextProps,
			CardFooter: contextProps
		};
	}, [isBorderless, size]);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$6.jsxDEV)(ContextSystemProvider, {
		value: contextProviderValue,
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime$6.jsxDEV)(View, {
			...otherProps,
			ref: forwardedRef,
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime$6.jsxDEV)(View, {
					className: style_module_default.content,
					children
				}, void 0, false, {
					fileName: _jsxFileName$6,
					lineNumber: 39,
					columnNumber: 5
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime$6.jsxDEV)(Elevation, {
					isInteractive: false,
					value: elevation ? 1 : 0
				}, void 0, false, {
					fileName: _jsxFileName$6,
					lineNumber: 40,
					columnNumber: 5
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime$6.jsxDEV)(Elevation, {
					isInteractive: false,
					value: elevation
				}, void 0, false, {
					fileName: _jsxFileName$6,
					lineNumber: 44,
					columnNumber: 5
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName$6,
			lineNumber: 38,
			columnNumber: 4
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$6,
		lineNumber: 37,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime$6, _jsxFileName$6, Card;
function init_component() {
	return (init_component = __esmMin((() => {
		init_react();
		init_context_connect(), init_context_system_provider();
		init_component$10();
		init_component$6();
		init_style_module();
		init_hook();
		import_jsx_dev_runtime$6 = require_jsx_dev_runtime();
		_jsxFileName$6 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/card/card/component.tsx";
		Card = contextConnect(UnconnectedCard, "Card");
		try {
			Card.__docgenInfo = {
				"description": "`Card` provides a flexible and extensible content container.\n`Card` also provides a convenient set of sub-components such as `CardBody`,\n`CardHeader`, `CardFooter`, and more.\n\n```jsx\nimport {\n  Card,\n  CardHeader,\n  CardBody,\n  CardFooter,\n  __experimentalText as Text,\n  __experimentalHeading as Heading,\n} from `@wordpress/components`;\n\nfunction Example() {\n  return (\n    <Card>\n      <CardHeader>\n        <Heading level={ 4 }>Card Title</Heading>\n      </CardHeader>\n      <CardBody>\n        <Text>Card Content</Text>\n      </CardBody>\n      <CardFooter>\n        <Text>Card Footer</Text>\n      </CardFooter>\n    </Card>\n  );\n}\n```",
				"displayName": "Card",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/card/card/component.tsx",
				"methods": [],
				"props": {
					"backgroundSize": {
						"defaultValue": { "value": "12" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/surface/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Determines the grid size for \"dotted\" and \"grid\" variants.",
						"name": "backgroundSize",
						"required": false,
						"tags": {},
						"type": { "name": "number" }
					},
					"borderBottom": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/surface/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Renders a bottom border.",
						"name": "borderBottom",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"borderLeft": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/surface/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Renders a left border.",
						"name": "borderLeft",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"borderRight": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/surface/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Renders a right border.",
						"name": "borderRight",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"borderTop": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/surface/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Renders a top border.",
						"name": "borderTop",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"variant": {
						"defaultValue": { "value": "'primary'" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/surface/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Modifies the background color of `Surface`.\n\n* `primary`: Used for almost all cases.\n* `secondary`: Used as a secondary background for inner `Surface` components.\n* `tertiary`: Used as the app/site wide background. Visible in **dark mode** only. Use case is rare.\n* `grid`: Used to show a grid.\n* `dotted`: Used to show a dots grid.",
						"name": "variant",
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "SurfaceVariant",
							"value": [
								{ "value": "\"grid\"" },
								{ "value": "\"primary\"" },
								{ "value": "\"dotted\"" },
								{ "value": "\"secondary\"" },
								{ "value": "\"tertiary\"" }
							]
						}
					},
					"children": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/surface/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The children elements.",
						"name": "children",
						"required": true,
						"tags": {},
						"type": { "name": "ReactNode" }
					},
					"size": {
						"defaultValue": { "value": "'medium'" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/card/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Determines the amount of padding within the component.",
						"name": "size",
						"required": false,
						"tags": {},
						"type": { "name": "SizeOptions | \"extraSmall\"" }
					},
					"elevation": {
						"defaultValue": { "value": "0" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/card/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Size of the elevation shadow, based on the Style system's elevation system.\nElevating a `Card` can be done by adjusting the `elevation` prop. This may\nbe helpful in highlighting certain content. For more information, check out\n`Elevation`.",
						"name": "elevation",
						"required": false,
						"tags": {},
						"type": { "name": "number" }
					},
					"isBorderless": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/card/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Renders without a border.",
						"name": "isBorderless",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"isRounded": {
						"defaultValue": { "value": "true" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/card/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Renders with rounded corners.",
						"name": "isRounded",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"isElevated": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/card/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Renders with elevation styles (box shadow).\n@deprecated",
						"name": "isElevated",
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
								{ "value": "\"style\"" },
								{ "value": "\"span\"" },
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
								{ "value": "\"button\"" },
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
								{ "value": "\"html\"" },
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
								{ "value": "\"menu\"" },
								{ "value": "\"menuitem\"" },
								{ "value": "\"meta\"" },
								{ "value": "\"meter\"" },
								{ "value": "\"nav\"" },
								{ "value": "\"noindex\"" },
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
								{ "value": "\"search\"" },
								{ "value": "\"slot\"" },
								{ "value": "\"script\"" },
								{ "value": "\"section\"" },
								{ "value": "\"select\"" },
								{ "value": "\"small\"" },
								{ "value": "\"source\"" },
								{ "value": "\"strong\"" },
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
								{ "value": "\"svg\"" },
								{ "value": "\"animate\"" },
								{ "value": "\"animateMotion\"" },
								{ "value": "\"animateTransform\"" },
								{ "value": "\"circle\"" },
								{ "value": "\"clipPath\"" },
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
								{ "value": "\"filter\"" },
								{ "value": "\"foreignObject\"" },
								{ "value": "\"g\"" },
								{ "value": "\"image\"" },
								{ "value": "\"line\"" },
								{ "value": "\"linearGradient\"" },
								{ "value": "\"marker\"" },
								{ "value": "\"mask\"" },
								{ "value": "\"metadata\"" },
								{ "value": "\"mpath\"" },
								{ "value": "\"path\"" },
								{ "value": "\"pattern\"" },
								{ "value": "\"polygon\"" },
								{ "value": "\"polyline\"" },
								{ "value": "\"radialGradient\"" },
								{ "value": "\"rect\"" },
								{ "value": "\"set\"" },
								{ "value": "\"stop\"" },
								{ "value": "\"switch\"" },
								{ "value": "\"text\"" },
								{ "value": "\"textPath\"" },
								{ "value": "\"tspan\"" },
								{ "value": "\"use\"" },
								{ "value": "\"view\"" }
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
//#region ../packages/components/src/card/get-padding-by-size.ts
var paddingSizes, getSinglePaddingClass, getPaddingBySize;
function init_get_padding_by_size() {
	return (init_get_padding_by_size = __esmMin((() => {
		init_style_module();
		paddingSizes = {
			none: "none",
			xSmall: "x-small",
			small: "small",
			medium: "medium",
			large: "large"
		};
		getSinglePaddingClass = (side, size) => style_module_default[`padding-${side}-${paddingSizes[size] ?? "medium"}`];
		getPaddingBySize = (size) => {
			if (typeof size === "string") {
				const paddingSize = size === "extraSmall" ? "x-small" : paddingSizes[size];
				return style_module_default[`padding-${paddingSize}`];
			}
			if (size) return [
				getSinglePaddingClass("block-start", size.blockStart),
				getSinglePaddingClass("block-end", size.blockEnd),
				getSinglePaddingClass("inline-start", size.inlineStart),
				getSinglePaddingClass("inline-end", size.inlineEnd)
			];
			return style_module_default["padding-medium"];
		};
	})))();
}
//#endregion
//#region ../packages/components/src/card/card-body/hook.ts
function useCardBody(props) {
	const { className, isScrollable = false, isShady = false, size = "medium", ...otherProps } = useContextSystem(props, "CardBody");
	const classes = clsx(style_module_default.body, getPaddingBySize(size), {
		[style_module_default["is-scrollable"]]: isScrollable,
		[style_module_default["is-shady"]]: isShady
	}, "components-card__body", className);
	return {
		...otherProps,
		className: classes,
		isScrollable
	};
}
function init_hook$1() {
	return (init_hook$1 = __esmMin((() => {
		init_clsx();
		init_use_context_system();
		init_style_module();
		init_get_padding_by_size();
	})))();
}
//#endregion
//#region ../packages/components/src/card/card-body/component.tsx
function UnconnectedCardBody(props, forwardedRef) {
	const { isScrollable, ...otherProps } = useCardBody(props);
	if (isScrollable) return /* @__PURE__ */ (0, import_jsx_dev_runtime$5.jsxDEV)(Scrollable, {
		...otherProps,
		ref: forwardedRef
	}, void 0, false, {
		fileName: _jsxFileName$5,
		lineNumber: 16,
		columnNumber: 10
	}, this);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$5.jsxDEV)(View, {
		...otherProps,
		ref: forwardedRef
	}, void 0, false, {
		fileName: _jsxFileName$5,
		lineNumber: 19,
		columnNumber: 9
	}, this);
}
var import_jsx_dev_runtime$5, _jsxFileName$5, CardBody;
function init_component$1() {
	return (init_component$1 = __esmMin((() => {
		init_context_connect();
		init_component$11();
		init_component$6();
		init_hook$1();
		import_jsx_dev_runtime$5 = require_jsx_dev_runtime();
		_jsxFileName$5 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/card/card-body/component.tsx";
		CardBody = contextConnect(UnconnectedCardBody, "CardBody");
		try {
			CardBody.__docgenInfo = {
				"description": "`CardBody` renders an optional content area for a `Card`.\nMultiple `CardBody` components can be used within `Card` if needed.\n\n```jsx\nimport { Card, CardBody } from `@wordpress/components`;\n\n<Card>\n	<CardBody>\n		...\n	</CardBody>\n</Card>\n```",
				"displayName": "CardBody",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/card/card-body/component.tsx",
				"methods": [],
				"props": {
					"size": {
						"defaultValue": { "value": "'medium'" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/card/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Determines the amount of padding within the component.",
						"name": "size",
						"required": false,
						"tags": {},
						"type": { "name": "SizeOptions | \"extraSmall\"" }
					},
					"children": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/card/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The children elements.",
						"name": "children",
						"required": true,
						"tags": {},
						"type": { "name": "ReactNode" }
					},
					"isShady": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/card/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Renders with a light gray background color.",
						"name": "isShady",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"isScrollable": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/card/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Determines if the component is scrollable.",
						"name": "isScrollable",
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
								{ "value": "\"style\"" },
								{ "value": "\"span\"" },
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
								{ "value": "\"button\"" },
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
								{ "value": "\"html\"" },
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
								{ "value": "\"menu\"" },
								{ "value": "\"menuitem\"" },
								{ "value": "\"meta\"" },
								{ "value": "\"meter\"" },
								{ "value": "\"nav\"" },
								{ "value": "\"noindex\"" },
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
								{ "value": "\"search\"" },
								{ "value": "\"slot\"" },
								{ "value": "\"script\"" },
								{ "value": "\"section\"" },
								{ "value": "\"select\"" },
								{ "value": "\"small\"" },
								{ "value": "\"source\"" },
								{ "value": "\"strong\"" },
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
								{ "value": "\"svg\"" },
								{ "value": "\"animate\"" },
								{ "value": "\"animateMotion\"" },
								{ "value": "\"animateTransform\"" },
								{ "value": "\"circle\"" },
								{ "value": "\"clipPath\"" },
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
								{ "value": "\"filter\"" },
								{ "value": "\"foreignObject\"" },
								{ "value": "\"g\"" },
								{ "value": "\"image\"" },
								{ "value": "\"line\"" },
								{ "value": "\"linearGradient\"" },
								{ "value": "\"marker\"" },
								{ "value": "\"mask\"" },
								{ "value": "\"metadata\"" },
								{ "value": "\"mpath\"" },
								{ "value": "\"path\"" },
								{ "value": "\"pattern\"" },
								{ "value": "\"polygon\"" },
								{ "value": "\"polyline\"" },
								{ "value": "\"radialGradient\"" },
								{ "value": "\"rect\"" },
								{ "value": "\"set\"" },
								{ "value": "\"stop\"" },
								{ "value": "\"switch\"" },
								{ "value": "\"text\"" },
								{ "value": "\"textPath\"" },
								{ "value": "\"tspan\"" },
								{ "value": "\"use\"" },
								{ "value": "\"view\"" }
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
//#region ../packages/components/src/card/card-divider/hook.ts
function useCardDivider(props) {
	const { className, ...otherProps } = useContextSystem(props, "CardDivider");
	const classes = clsx(style_module_default.divider, "components-card__divider", className);
	return {
		...otherProps,
		className: classes
	};
}
function init_hook$2() {
	return (init_hook$2 = __esmMin((() => {
		init_clsx();
		init_use_context_system();
		init_style_module();
	})))();
}
//#endregion
//#region ../packages/components/src/card/card-divider/component.tsx
function UnconnectedCardDivider(props, forwardedRef) {
	const dividerProps = useCardDivider(props);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$4.jsxDEV)(Divider, {
		...dividerProps,
		ref: forwardedRef
	}, void 0, false, {
		fileName: _jsxFileName$4,
		lineNumber: 14,
		columnNumber: 9
	}, this);
}
var import_jsx_dev_runtime$4, _jsxFileName$4, CardDivider;
function init_component$2() {
	return (init_component$2 = __esmMin((() => {
		init_context_connect();
		init_component$12();
		init_hook$2();
		import_jsx_dev_runtime$4 = require_jsx_dev_runtime();
		_jsxFileName$4 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/card/card-divider/component.tsx";
		CardDivider = contextConnect(UnconnectedCardDivider, "CardDivider");
		try {
			CardDivider.__docgenInfo = {
				"description": "`CardDivider` renders an optional divider within a `Card`.\nIt is typically used to divide multiple `CardBody` components from each other.\n\n```jsx\nimport { Card, CardBody, CardDivider } from `@wordpress/components`;\n\n<Card>\n <CardBody>...</CardBody>\n <CardDivider />\n <CardBody>...</CardBody>\n</Card>\n```",
				"displayName": "CardDivider",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/card/card-divider/component.tsx",
				"methods": [],
				"props": {
					"wrapElement": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@ariakit/react-utils@0.2.8-duN40eWASGERw9i-DIMDVw/node_modules/@ariakit/react-utils/dist/index.d.ts",
							"name": "Options"
						}],
						"description": "",
						"name": "wrapElement",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@ariakit/react-utils@0.2.8-duN40eWASGERw9i-DIMDVw/node_modules/@ariakit/react-utils/dist/index.d.ts",
							"name": "Options"
						},
						"required": false,
						"tags": {},
						"type": { "name": "WrapElement" }
					},
					"margin": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/divider/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Adjusts all margins on the inline dimension.\n\nCan either be a number (which will act as a multiplier to the library's grid system base of 4px),\nor a literal CSS value string.",
						"name": "margin",
						"required": false,
						"tags": {},
						"type": { "name": "SpaceInput" }
					},
					"marginEnd": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/divider/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Adjusts the inline-end margin.\n\nCan either be a number (which will act as a multiplier to the library's grid system base of 4px),\nor a literal CSS value string.",
						"name": "marginEnd",
						"required": false,
						"tags": {},
						"type": { "name": "SpaceInput" }
					},
					"marginStart": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/divider/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Adjusts the inline-start margin.\n\nCan either be a number (which will act as a multiplier to the library's grid system base of 4px),\nor a literal CSS value string.",
						"name": "marginStart",
						"required": false,
						"tags": {},
						"type": { "name": "SpaceInput" }
					},
					"orientation": {
						"defaultValue": { "value": "'horizontal'" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/divider/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Divider's orientation. When using inside a flex container, you may need\nto make sure the divider is `stretch` aligned in order for it to be\nvisible.",
						"name": "orientation",
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "\"horizontal\" | \"vertical\"",
							"value": [{ "value": "\"horizontal\"" }, { "value": "\"vertical\"" }]
						}
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/components/src/card/card-footer/hook.ts
function useCardFooter(props) {
	const { className, justify, isBorderless = false, isShady = false, size = "medium", ...otherProps } = useContextSystem(props, "CardFooter");
	const classes = clsx(style_module_default.footer, getPaddingBySize(size), {
		[style_module_default["section-borderless"]]: isBorderless,
		[style_module_default["is-shady"]]: isShady
	}, "components-card__footer", className);
	return {
		...otherProps,
		className: classes,
		justify
	};
}
function init_hook$3() {
	return (init_hook$3 = __esmMin((() => {
		init_clsx();
		init_use_context_system();
		init_style_module();
		init_get_padding_by_size();
	})))();
}
//#endregion
//#region ../packages/components/src/card/card-footer/component.tsx
function UnconnectedCardFooter(props, forwardedRef) {
	const footerProps = useCardFooter(props);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$3.jsxDEV)(Flex, {
		...footerProps,
		ref: forwardedRef
	}, void 0, false, {
		fileName: _jsxFileName$3,
		lineNumber: 14,
		columnNumber: 9
	}, this);
}
var import_jsx_dev_runtime$3, _jsxFileName$3, CardFooter;
function init_component$3() {
	return (init_component$3 = __esmMin((() => {
		init_context_connect();
		init_component$7();
		init_hook$3();
		import_jsx_dev_runtime$3 = require_jsx_dev_runtime();
		_jsxFileName$3 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/card/card-footer/component.tsx";
		CardFooter = contextConnect(UnconnectedCardFooter, "CardFooter");
		try {
			CardFooter.__docgenInfo = {
				"description": "`CardFooter` renders an optional footer within a `Card`.\n\n```jsx\nimport { Card, CardBody, CardFooter } from `@wordpress/components`;\n\n<Card>\n	<CardBody>...</CardBody>\n	<CardFooter>...</CardFooter>\n</Card>\n```",
				"displayName": "CardFooter",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/card/card-footer/component.tsx",
				"methods": [],
				"props": {
					"size": {
						"defaultValue": { "value": "'medium'" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/card/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Determines the amount of padding within the component.",
						"name": "size",
						"required": false,
						"tags": {},
						"type": { "name": "SizeOptions | \"extraSmall\"" }
					},
					"children": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/card/types.ts",
							"name": "TypeLiteral"
						}, {
							"fileName": "gutenberg-storybook-preview/packages/components/src/flex/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The children elements.",
						"name": "children",
						"required": true,
						"tags": {},
						"type": { "name": "ReactNode" }
					},
					"isShady": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/card/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Renders with a light gray background color.",
						"name": "isShady",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"isBorderless": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/card/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Renders without a border.",
						"name": "isBorderless",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"align": {
						"defaultValue": { "value": "'center'" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/flex/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Aligns children using CSS Flexbox `align-items`. Vertically aligns\ncontent if the `direction` is `row`, or horizontally aligns content if\nthe `direction` is `column`.",
						"name": "align",
						"required": false,
						"tags": {},
						"type": { "name": "AlignItems" }
					},
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
					"gap": {
						"defaultValue": { "value": "2" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/flex/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Spacing in between each child can be adjusted by using `gap`.\n\nCan either be a number (which will act as a multiplier to the library's\ngrid system base of 4px), or a literal CSS value string.",
						"name": "gap",
						"required": false,
						"tags": {},
						"type": { "name": "SpaceInput" }
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
								{ "value": "\"style\"" },
								{ "value": "\"span\"" },
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
								{ "value": "\"button\"" },
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
								{ "value": "\"html\"" },
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
								{ "value": "\"menu\"" },
								{ "value": "\"menuitem\"" },
								{ "value": "\"meta\"" },
								{ "value": "\"meter\"" },
								{ "value": "\"nav\"" },
								{ "value": "\"noindex\"" },
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
								{ "value": "\"search\"" },
								{ "value": "\"slot\"" },
								{ "value": "\"script\"" },
								{ "value": "\"section\"" },
								{ "value": "\"select\"" },
								{ "value": "\"small\"" },
								{ "value": "\"source\"" },
								{ "value": "\"strong\"" },
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
								{ "value": "\"svg\"" },
								{ "value": "\"animate\"" },
								{ "value": "\"animateMotion\"" },
								{ "value": "\"animateTransform\"" },
								{ "value": "\"circle\"" },
								{ "value": "\"clipPath\"" },
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
								{ "value": "\"filter\"" },
								{ "value": "\"foreignObject\"" },
								{ "value": "\"g\"" },
								{ "value": "\"image\"" },
								{ "value": "\"line\"" },
								{ "value": "\"linearGradient\"" },
								{ "value": "\"marker\"" },
								{ "value": "\"mask\"" },
								{ "value": "\"metadata\"" },
								{ "value": "\"mpath\"" },
								{ "value": "\"path\"" },
								{ "value": "\"pattern\"" },
								{ "value": "\"polygon\"" },
								{ "value": "\"polyline\"" },
								{ "value": "\"radialGradient\"" },
								{ "value": "\"rect\"" },
								{ "value": "\"set\"" },
								{ "value": "\"stop\"" },
								{ "value": "\"switch\"" },
								{ "value": "\"text\"" },
								{ "value": "\"textPath\"" },
								{ "value": "\"tspan\"" },
								{ "value": "\"use\"" },
								{ "value": "\"view\"" }
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
//#region ../packages/components/src/card/card-header/hook.ts
function useCardHeader(props) {
	const { className, isBorderless = false, isShady = false, size = "medium", ...otherProps } = useContextSystem(props, "CardHeader");
	const classes = clsx(style_module_default.header, getPaddingBySize(size), {
		[style_module_default["section-borderless"]]: isBorderless,
		[style_module_default["is-shady"]]: isShady
	}, "components-card__header", className);
	return {
		...otherProps,
		className: classes
	};
}
function init_hook$4() {
	return (init_hook$4 = __esmMin((() => {
		init_clsx();
		init_use_context_system();
		init_style_module();
		init_get_padding_by_size();
	})))();
}
//#endregion
//#region ../packages/components/src/card/card-header/component.tsx
function UnconnectedCardHeader(props, forwardedRef) {
	const headerProps = useCardHeader(props);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)(Flex, {
		...headerProps,
		ref: forwardedRef
	}, void 0, false, {
		fileName: _jsxFileName$2,
		lineNumber: 14,
		columnNumber: 9
	}, this);
}
var import_jsx_dev_runtime$2, _jsxFileName$2, CardHeader;
function init_component$4() {
	return (init_component$4 = __esmMin((() => {
		init_context_connect();
		init_component$7();
		init_hook$4();
		import_jsx_dev_runtime$2 = require_jsx_dev_runtime();
		_jsxFileName$2 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/card/card-header/component.tsx";
		CardHeader = contextConnect(UnconnectedCardHeader, "CardHeader");
		try {
			CardHeader.__docgenInfo = {
				"description": "`CardHeader` renders an optional header within a `Card`.\n\n```jsx\nimport { Card, CardBody, CardHeader } from `@wordpress/components`;\n\n<Card>\n	<CardHeader>...</CardHeader>\n	<CardBody>...</CardBody>\n</Card>\n```",
				"displayName": "CardHeader",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/card/card-header/component.tsx",
				"methods": [],
				"props": {
					"size": {
						"defaultValue": { "value": "'medium'" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/card/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Determines the amount of padding within the component.",
						"name": "size",
						"required": false,
						"tags": {},
						"type": { "name": "SizeOptions | \"extraSmall\"" }
					},
					"children": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/card/types.ts",
							"name": "TypeLiteral"
						}, {
							"fileName": "gutenberg-storybook-preview/packages/components/src/flex/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The children elements.",
						"name": "children",
						"required": true,
						"tags": {},
						"type": { "name": "ReactNode" }
					},
					"isShady": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/card/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Renders with a light gray background color.",
						"name": "isShady",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"isBorderless": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/card/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Renders without a border.",
						"name": "isBorderless",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"align": {
						"defaultValue": { "value": "'center'" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/flex/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Aligns children using CSS Flexbox `align-items`. Vertically aligns\ncontent if the `direction` is `row`, or horizontally aligns content if\nthe `direction` is `column`.",
						"name": "align",
						"required": false,
						"tags": {},
						"type": { "name": "AlignItems" }
					},
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
					"gap": {
						"defaultValue": { "value": "2" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/flex/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Spacing in between each child can be adjusted by using `gap`.\n\nCan either be a number (which will act as a multiplier to the library's\ngrid system base of 4px), or a literal CSS value string.",
						"name": "gap",
						"required": false,
						"tags": {},
						"type": { "name": "SpaceInput" }
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
								{ "value": "\"style\"" },
								{ "value": "\"span\"" },
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
								{ "value": "\"button\"" },
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
								{ "value": "\"html\"" },
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
								{ "value": "\"menu\"" },
								{ "value": "\"menuitem\"" },
								{ "value": "\"meta\"" },
								{ "value": "\"meter\"" },
								{ "value": "\"nav\"" },
								{ "value": "\"noindex\"" },
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
								{ "value": "\"search\"" },
								{ "value": "\"slot\"" },
								{ "value": "\"script\"" },
								{ "value": "\"section\"" },
								{ "value": "\"select\"" },
								{ "value": "\"small\"" },
								{ "value": "\"source\"" },
								{ "value": "\"strong\"" },
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
								{ "value": "\"svg\"" },
								{ "value": "\"animate\"" },
								{ "value": "\"animateMotion\"" },
								{ "value": "\"animateTransform\"" },
								{ "value": "\"circle\"" },
								{ "value": "\"clipPath\"" },
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
								{ "value": "\"filter\"" },
								{ "value": "\"foreignObject\"" },
								{ "value": "\"g\"" },
								{ "value": "\"image\"" },
								{ "value": "\"line\"" },
								{ "value": "\"linearGradient\"" },
								{ "value": "\"marker\"" },
								{ "value": "\"mask\"" },
								{ "value": "\"metadata\"" },
								{ "value": "\"mpath\"" },
								{ "value": "\"path\"" },
								{ "value": "\"pattern\"" },
								{ "value": "\"polygon\"" },
								{ "value": "\"polyline\"" },
								{ "value": "\"radialGradient\"" },
								{ "value": "\"rect\"" },
								{ "value": "\"set\"" },
								{ "value": "\"stop\"" },
								{ "value": "\"switch\"" },
								{ "value": "\"text\"" },
								{ "value": "\"textPath\"" },
								{ "value": "\"tspan\"" },
								{ "value": "\"use\"" },
								{ "value": "\"view\"" }
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
//#region ../packages/components/src/card/card-media/hook.ts
function useCardMedia(props) {
	const { className, ...otherProps } = useContextSystem(props, "CardMedia");
	const classes = clsx(style_module_default.media, "components-card__media", className);
	return {
		...otherProps,
		className: classes
	};
}
function init_hook$5() {
	return (init_hook$5 = __esmMin((() => {
		init_clsx();
		init_use_context_system();
		init_style_module();
	})))();
}
//#endregion
//#region ../packages/components/src/card/card-media/component.tsx
function UnconnectedCardMedia(props, forwardedRef) {
	const cardMediaProps = useCardMedia(props);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(View, {
		...cardMediaProps,
		ref: forwardedRef
	}, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 14,
		columnNumber: 9
	}, this);
}
var import_jsx_dev_runtime$1, _jsxFileName$1, CardMedia;
function init_component$5() {
	return (init_component$5 = __esmMin((() => {
		init_context_connect();
		init_component$6();
		init_hook$5();
		import_jsx_dev_runtime$1 = require_jsx_dev_runtime();
		_jsxFileName$1 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/card/card-media/component.tsx";
		CardMedia = contextConnect(UnconnectedCardMedia, "CardMedia");
		try {
			CardMedia.__docgenInfo = {
				"description": "`CardMedia` provides a container for full-bleed content within a `Card`,\nsuch as images, video, or even just a background color.",
				"displayName": "CardMedia",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/card/card-media/component.tsx",
				"methods": [],
				"props": {
					"children": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/card/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The children elements.",
						"name": "children",
						"required": true,
						"tags": {},
						"type": { "name": "ReactNode" }
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
								{ "value": "\"style\"" },
								{ "value": "\"span\"" },
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
								{ "value": "\"button\"" },
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
								{ "value": "\"html\"" },
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
								{ "value": "\"menu\"" },
								{ "value": "\"menuitem\"" },
								{ "value": "\"meta\"" },
								{ "value": "\"meter\"" },
								{ "value": "\"nav\"" },
								{ "value": "\"noindex\"" },
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
								{ "value": "\"search\"" },
								{ "value": "\"slot\"" },
								{ "value": "\"script\"" },
								{ "value": "\"section\"" },
								{ "value": "\"select\"" },
								{ "value": "\"small\"" },
								{ "value": "\"source\"" },
								{ "value": "\"strong\"" },
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
								{ "value": "\"svg\"" },
								{ "value": "\"animate\"" },
								{ "value": "\"animateMotion\"" },
								{ "value": "\"animateTransform\"" },
								{ "value": "\"circle\"" },
								{ "value": "\"clipPath\"" },
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
								{ "value": "\"filter\"" },
								{ "value": "\"foreignObject\"" },
								{ "value": "\"g\"" },
								{ "value": "\"image\"" },
								{ "value": "\"line\"" },
								{ "value": "\"linearGradient\"" },
								{ "value": "\"marker\"" },
								{ "value": "\"mask\"" },
								{ "value": "\"metadata\"" },
								{ "value": "\"mpath\"" },
								{ "value": "\"path\"" },
								{ "value": "\"pattern\"" },
								{ "value": "\"polygon\"" },
								{ "value": "\"polyline\"" },
								{ "value": "\"radialGradient\"" },
								{ "value": "\"rect\"" },
								{ "value": "\"set\"" },
								{ "value": "\"stop\"" },
								{ "value": "\"switch\"" },
								{ "value": "\"text\"" },
								{ "value": "\"textPath\"" },
								{ "value": "\"tspan\"" },
								{ "value": "\"use\"" },
								{ "value": "\"view\"" }
							]
						}
					}
				},
				"tags": { "example": "```jsx\nimport { Card, CardBody, CardMedia } from '@wordpress/components';\n\nconst Example = () => (\n <Card>\n  <CardMedia>\n	  <img src=\"...\" />\n   </CardMedia>\n   <CardBody>...</CardBody>\n </Card>\n);\n```" }
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/components/src/card/stories/index.story.tsx
var import_jsx_dev_runtime, _jsxFileName, meta, Default, FullBleedContent, PaddingVariations;
function init_index_story() {
	return (init_index_story = __esmMin((() => {
		init_component(), init_component$4(), init_component$1(), init_component$2(), init_component$5(), init_component$3();
		init_component$8();
		init_component$9();
		init_button();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/card/stories/index.story.tsx";
		meta = {
			component: Card,
			subcomponents: {
				CardHeader,
				CardBody,
				CardDivider,
				CardMedia,
				CardFooter
			},
			title: "Components/@wordpress-components/Containers/Card",
			id: "components-card",
			argTypes: {
				as: { control: false },
				children: { control: false }
			},
			parameters: {
				controls: { expanded: true },
				docs: { canvas: { sourceState: "shown" } },
				componentStatus: {
					status: "not-recommended",
					whereUsed: "global",
					notes: "Use [`Card`](?path=/docs/design-system-components-card--docs) or [`CollapsibleCard`](?path=/docs/design-system-components-collapsiblecard--docs) from `@wordpress/ui` instead."
				}
			}
		};
		Default = { args: { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Heading, { children: "CardHeader" }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 47,
				columnNumber: 6
			}, void 0) }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 46,
				columnNumber: 5
			}, void 0),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardBody, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { children: "CardBody" }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 50,
				columnNumber: 6
			}, void 0) }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 49,
				columnNumber: 5
			}, void 0),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardBody, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { children: "CardBody (before CardDivider)" }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 53,
				columnNumber: 6
			}, void 0) }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 52,
				columnNumber: 5
			}, void 0),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardDivider, {}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 55,
				columnNumber: 5
			}, void 0),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardBody, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { children: "CardBody (after CardDivider)" }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 57,
				columnNumber: 6
			}, void 0) }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 56,
				columnNumber: 5
			}, void 0),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardMedia, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
				alt: "Card Media",
				src: "https://images.unsplash.com/photo-1566125882500-87e10f726cdc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1867&q=80"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 60,
				columnNumber: 6
			}, void 0) }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 59,
				columnNumber: 5
			}, void 0),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardFooter, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { children: "CardFooter" }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 66,
				columnNumber: 6
			}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
				__next40pxDefaultSize: true,
				variant: "secondary",
				children: "Action Button"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 67,
				columnNumber: 6
			}, void 0)] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 65,
				columnNumber: 5
			}, void 0)
		] }, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 45,
			columnNumber: 4
		}, void 0) } };
		FullBleedContent = {
			...Default,
			args: {
				...Default.args,
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardMedia, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					style: {
						padding: 16,
						background: "beige"
					},
					children: "Some full bleed content"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 86,
					columnNumber: 5
				}, void 0) }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 85,
					columnNumber: 4
				}, void 0)
			}
		};
		PaddingVariations = { render: () => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			style: {
				display: "flex",
				flexDirection: "column",
				gap: "32px"
			},
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { children: "Header with default padding" }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 111,
				columnNumber: 7
			}, void 0) }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 110,
				columnNumber: 6
			}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardBody, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { children: "Body with default padding (medium)" }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 114,
				columnNumber: 7
			}, void 0) }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 113,
				columnNumber: 6
			}, void 0)] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 109,
				columnNumber: 5
			}, void 0) }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 108,
				columnNumber: 4
			}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardHeader, {
				size: {
					blockStart: "large",
					blockEnd: "small",
					inlineStart: "xSmall",
					inlineEnd: "large"
				},
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { children: "Header with logical padding (large blockStart, small blockEnd, xSmall inlineStart, large inlineEnd)" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 129,
					columnNumber: 7
				}, void 0)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 121,
				columnNumber: 6
			}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardBody, {
				size: {
					blockStart: "medium",
					blockEnd: "xSmall",
					inlineStart: "large",
					inlineEnd: "xSmall"
				},
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { children: "Body with logical padding (medium blockStart, xSmall blockEnd, large inlineStart, xSmall inlineEnd)" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 142,
					columnNumber: 7
				}, void 0)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 134,
				columnNumber: 6
			}, void 0)] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 120,
				columnNumber: 5
			}, void 0) }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 119,
				columnNumber: 4
			}, void 0)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 104,
			columnNumber: 3
		}, void 0) };
		try {
			FullBleedContent.__docgenInfo = {
				"description": "`CardMedia` provides a container for full-bleed content within a `Card`,\nsuch as images, video, or even just a background color. The corners will be rounded if necessary.",
				"displayName": "FullBleedContent",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/card/stories/index.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			PaddingVariations.__docgenInfo = {
				"description": "The Card component supports three approaches to padding:\n1. Default padding (medium) - no size prop needed\n2. Token-based padding - using size tokens: xSmall, small, medium, large\n3. Logical padding - customize each direction using logical properties\n\nEach component (Card, CardHeader, CardBody) can have its own padding configuration.",
				"displayName": "PaddingVariations",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/card/stories/index.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		Default.parameters = {
			...Default.parameters,
			docs: {
				...Default.parameters?.docs,
				source: {
					originalSource: "{\n  args: {\n    children: <>\n                <CardHeader>\n                    <Heading>CardHeader</Heading>\n                </CardHeader>\n                <CardBody>\n                    <Text>CardBody</Text>\n                </CardBody>\n                <CardBody>\n                    <Text>CardBody (before CardDivider)</Text>\n                </CardBody>\n                <CardDivider />\n                <CardBody>\n                    <Text>CardBody (after CardDivider)</Text>\n                </CardBody>\n                <CardMedia>\n                    <img alt=\"Card Media\" src=\"https://images.unsplash.com/photo-1566125882500-87e10f726cdc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1867&q=80\" />\n                </CardMedia>\n                <CardFooter>\n                    <Text>CardFooter</Text>\n                    <Button __next40pxDefaultSize variant=\"secondary\">\n                        Action Button\n                    </Button>\n                </CardFooter>\n            </>\n  }\n}",
					...Default.parameters?.docs?.source
				}
			}
		};
		FullBleedContent.parameters = {
			...FullBleedContent.parameters,
			docs: {
				...FullBleedContent.parameters?.docs,
				source: {
					originalSource: "{\n  ...Default,\n  args: {\n    ...Default.args,\n    children: <CardMedia>\n                <div style={{\n        padding: 16,\n        background: 'beige'\n      }}>\n                    Some full bleed content\n                </div>\n            </CardMedia>\n  }\n}",
					...FullBleedContent.parameters?.docs?.source
				},
				description: {
					story: "`CardMedia` provides a container for full-bleed content within a `Card`,\nsuch as images, video, or even just a background color. The corners will be rounded if necessary.",
					...FullBleedContent.parameters?.docs?.description
				}
			}
		};
		PaddingVariations.parameters = {
			...PaddingVariations.parameters,
			docs: {
				...PaddingVariations.parameters?.docs,
				source: {
					originalSource: "{\n  render: () => <div style={{\n    display: 'flex',\n    flexDirection: 'column',\n    gap: '32px'\n  }}>\n            {/* 1. Default Padding */}\n            <div>\n                <Card>\n                    <CardHeader>\n                        <Text>Header with default padding</Text>\n                    </CardHeader>\n                    <CardBody>\n                        <Text>Body with default padding (medium)</Text>\n                    </CardBody>\n                </Card>\n            </div>\n\n            <div>\n                <Card>\n                    <CardHeader size={{\n          blockStart: 'large',\n          blockEnd: 'small',\n          inlineStart: 'xSmall',\n          inlineEnd: 'large'\n        }}>\n                        <Text>\n                            Header with logical padding (large blockStart, small\n                            blockEnd, xSmall inlineStart, large inlineEnd)\n                        </Text>\n                    </CardHeader>\n                    <CardBody size={{\n          blockStart: 'medium',\n          blockEnd: 'xSmall',\n          inlineStart: 'large',\n          inlineEnd: 'xSmall'\n        }}>\n                        <Text>\n                            Body with logical padding (medium blockStart, xSmall\n                            blockEnd, large inlineStart, xSmall inlineEnd)\n                        </Text>\n                    </CardBody>\n                </Card>\n            </div>\n        </div>\n}",
					...PaddingVariations.parameters?.docs?.source
				},
				description: {
					story: "The Card component supports three approaches to padding:\n1. Default padding (medium) - no size prop needed\n2. Token-based padding - using size tokens: xSmall, small, medium, large\n3. Logical padding - customize each direction using logical properties\n\nEach component (Card, CardHeader, CardBody) can have its own padding configuration.",
					...PaddingVariations.parameters?.docs?.description
				}
			}
		};
	})))();
}
//#endregion
init_index_story();
export { Default, FullBleedContent, PaddingVariations, meta as default };
