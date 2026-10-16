import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { a as init_clsx, i as clsx } from "./iframe-Dbjzp1_m.js";
import { i as isValueDefined, r as init_values } from "./values-Dw4yFgqQ.js";
import { n as useContextSystem, o as init_context_connect, r as contextConnect, t as init_use_context_system } from "./use-context-system-BCQpAcZ4.js";
import { n as init_component$1, t as View } from "./component-CkY7eURU.js";
//#region ../packages/components/src/elevation/style.module.scss
var elevation, style_module_default;
function init_style_module() {
	return (init_style_module = __esmMin((() => {
		elevation = "_elevation_h7i4d_1";
		style_module_default = {
			elevation,
			"has-shadow": "_has-shadow_h7i4d_19",
			"border-radius-inherit": "_border-radius-inherit_h7i4d_23",
			"border-radius-initial": "_border-radius-initial_h7i4d_27",
			"border-radius-unset": "_border-radius-unset_h7i4d_31",
			"border-radius-revert": "_border-radius-revert_h7i4d_35",
			"border-radius-revert-layer": "_border-radius-revert-layer_h7i4d_39",
			"has-hover": "_has-hover_h7i4d_43",
			"has-focus": "_has-focus_h7i4d_47",
			"has-active": "_has-active_h7i4d_51"
		};
	})))();
}
//#endregion
//#region ../packages/components/src/elevation/hook.ts
function getBoxShadow(value) {
	const boxShadowColor = `rgba(0, 0, 0, ${value / 20})`;
	return `0 ${value}px ${value * 2}px 0
	${boxShadowColor}`;
}
function hasValidShadow(value) {
	return isValueDefined(value) && Number.isFinite(value) && value >= 0;
}
function useElevation(props) {
	const { active, borderRadius = "inherit", className, focus, hover, isInteractive = false, offset = 0, style, value = 0, ...otherProps } = useContextSystem(props, "Elevation");
	const hoverValue = hover ?? (isInteractive ? value * 2 : void 0);
	const activeValue = active ?? (isInteractive ? value / 2 : void 0);
	const radiusValue = typeof borderRadius === "number" ? `${borderRadius}px` : borderRadius;
	const radiusKeyword = typeof borderRadius === "string" && BORDER_RADIUS_KEYWORDS.has(borderRadius.trim().toLowerCase()) ? borderRadius.trim().toLowerCase() : void 0;
	const elevationStyle = {
		"--wp-components-elevation-border-radius": radiusKeyword ? void 0 : radiusValue,
		"--wp-components-elevation-offset": `${offset}px`,
		"--wp-components-elevation-shadow": hasValidShadow(value) ? getBoxShadow(value) : void 0,
		"--wp-components-elevation-hover-shadow": hasValidShadow(hoverValue) ? getBoxShadow(hoverValue) : void 0,
		"--wp-components-elevation-focus-shadow": hasValidShadow(focus) ? getBoxShadow(focus) : void 0,
		"--wp-components-elevation-active-shadow": hasValidShadow(activeValue) ? getBoxShadow(activeValue) : void 0,
		...style
	};
	return {
		...otherProps,
		className: clsx(style_module_default.elevation, {
			[style_module_default["has-shadow"]]: hasValidShadow(value),
			[style_module_default["has-hover"]]: hasValidShadow(hoverValue),
			[style_module_default["has-focus"]]: hasValidShadow(focus),
			[style_module_default["has-active"]]: hasValidShadow(activeValue)
		}, radiusKeyword && style_module_default[`border-radius-${radiusKeyword}`], className),
		style: elevationStyle,
		"aria-hidden": true
	};
}
var BORDER_RADIUS_KEYWORDS;
function init_hook() {
	return (init_hook = __esmMin((() => {
		init_clsx();
		init_use_context_system();
		init_values();
		init_style_module();
		BORDER_RADIUS_KEYWORDS = /* @__PURE__ */ new Set([
			"inherit",
			"initial",
			"unset",
			"revert",
			"revert-layer"
		]);
	})))();
}
//#endregion
//#region ../packages/components/src/elevation/component.tsx
function UnconnectedElevation(props, forwardedRef) {
	const elevationProps = useElevation(props);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(View, {
		...elevationProps,
		ref: forwardedRef
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 14,
		columnNumber: 9
	}, this);
}
var import_jsx_dev_runtime, _jsxFileName, Elevation;
function init_component() {
	return (init_component = __esmMin((() => {
		init_context_connect();
		init_component$1();
		init_hook();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/elevation/component.tsx";
		Elevation = contextConnect(UnconnectedElevation, "Elevation");
		try {
			UnconnectedElevation.__docgenInfo = {
				"description": "",
				"displayName": "UnconnectedElevation",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/elevation/component.tsx",
				"methods": [],
				"props": {
					"active": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/elevation/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Size of the shadow value when active (see the `value` and `isInteractive`\nprops).",
						"name": "active",
						"required": false,
						"tags": {},
						"type": { "name": "number" }
					},
					"borderRadius": {
						"defaultValue": { "value": "'inherit'" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/elevation/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Renders the border-radius of the shadow.",
						"name": "borderRadius",
						"required": false,
						"tags": {},
						"type": { "name": "BorderRadius<string | number>" }
					},
					"focus": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/elevation/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Size of the shadow value when focused (see the `value` and\n`isInteractive` props).",
						"name": "focus",
						"required": false,
						"tags": {},
						"type": { "name": "number" }
					},
					"hover": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/elevation/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Size of the shadow value when hovered (see the `value` and\n`isInteractive` props).",
						"name": "hover",
						"required": false,
						"tags": {},
						"type": { "name": "number" }
					},
					"isInteractive": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/elevation/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Determines if `hover`, `active`, and `focus` shadow values should be\nautomatically calculated and rendered.",
						"name": "isInteractive",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"offset": {
						"defaultValue": { "value": "0" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/elevation/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Dimensional offsets (margin) for the shadow.",
						"name": "offset",
						"required": false,
						"tags": {},
						"type": { "name": "number" }
					},
					"value": {
						"defaultValue": { "value": "0" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/elevation/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Size of the shadow, based on the Style system's elevation system. The\n`value` determines the strength of the shadow, which creates the sense of\ndepth.",
						"name": "value",
						"required": false,
						"tags": {},
						"type": { "name": "number" }
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
			Elevation.__docgenInfo = {
				"description": "`Elevation` is a core component that renders shadow, using the component\nsystem's shadow system.\n\nThe shadow effect is generated using the `value` prop.\n\n```jsx\nimport {\n__experimentalElevation as Elevation,\n__experimentalText as Text,\n} from '@wordpress/components';\n\nfunction Example() {\n  return (\n    <div>\n      <Text>Code is Poetry</Text>\n      <Elevation value={ 5 } />\n    </div>\n  );\n}\n```",
				"displayName": "Elevation",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/elevation/component.tsx",
				"methods": [],
				"props": {
					"active": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/elevation/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Size of the shadow value when active (see the `value` and `isInteractive`\nprops).",
						"name": "active",
						"required": false,
						"tags": {},
						"type": { "name": "number" }
					},
					"borderRadius": {
						"defaultValue": { "value": "'inherit'" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/elevation/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Renders the border-radius of the shadow.",
						"name": "borderRadius",
						"required": false,
						"tags": {},
						"type": { "name": "BorderRadius<string | number>" }
					},
					"focus": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/elevation/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Size of the shadow value when focused (see the `value` and\n`isInteractive` props).",
						"name": "focus",
						"required": false,
						"tags": {},
						"type": { "name": "number" }
					},
					"hover": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/elevation/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Size of the shadow value when hovered (see the `value` and\n`isInteractive` props).",
						"name": "hover",
						"required": false,
						"tags": {},
						"type": { "name": "number" }
					},
					"isInteractive": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/elevation/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Determines if `hover`, `active`, and `focus` shadow values should be\nautomatically calculated and rendered.",
						"name": "isInteractive",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"offset": {
						"defaultValue": { "value": "0" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/elevation/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Dimensional offsets (margin) for the shadow.",
						"name": "offset",
						"required": false,
						"tags": {},
						"type": { "name": "number" }
					},
					"value": {
						"defaultValue": { "value": "0" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/elevation/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Size of the shadow, based on the Style system's elevation system. The\n`value` determines the strength of the shadow, which creates the sense of\ndepth.",
						"name": "value",
						"required": false,
						"tags": {},
						"type": { "name": "number" }
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
export { UnconnectedElevation as n, init_component as r, Elevation as t };
