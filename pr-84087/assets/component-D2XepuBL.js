import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { o as clsx, s as init_clsx } from "./iframe-D4D-SsYo.js";
import { n as useContextSystem, o as init_context_connect, r as contextConnect, t as init_use_context_system } from "./use-context-system-D7pcITcN.js";
import { n as init_component$1, t as View } from "./component-CkY7eURU.js";
import { n as useResponsiveValue, t as init_use_responsive_value } from "./use-responsive-value-Dwht8NmM.js";
//#region ../packages/components/src/grid/utils.ts
function getAlignmentProps(alignment) {
	return alignment ? ALIGNMENTS[alignment] ?? {} : {};
}
var ALIGNMENTS;
function init_utils() {
	return (init_utils = __esmMin((() => {
		ALIGNMENTS = {
			bottom: {
				alignItems: "flex-end",
				justifyContent: "center"
			},
			bottomLeft: {
				alignItems: "flex-start",
				justifyContent: "flex-end"
			},
			bottomRight: {
				alignItems: "flex-end",
				justifyContent: "flex-end"
			},
			center: {
				alignItems: "center",
				justifyContent: "center"
			},
			spaced: {
				alignItems: "center",
				justifyContent: "space-between"
			},
			left: {
				alignItems: "center",
				justifyContent: "flex-start"
			},
			right: {
				alignItems: "center",
				justifyContent: "flex-end"
			},
			stretch: { alignItems: "stretch" },
			top: {
				alignItems: "flex-start",
				justifyContent: "center"
			},
			topLeft: {
				alignItems: "flex-start",
				justifyContent: "flex-start"
			},
			topRight: {
				alignItems: "flex-start",
				justifyContent: "flex-end"
			}
		};
	})))();
}
//#endregion
//#region ../packages/components/src/grid/style.module.scss
var grid, style_module_default;
function init_style_module() {
	return (init_style_module = __esmMin((() => {
		grid = "_grid_n2zfc_46";
		style_module_default = {
			grid,
			"row-gap-inherit": "_row-gap-inherit_n2zfc_57",
			"row-gap-initial": "_row-gap-initial_n2zfc_58",
			"row-gap-unset": "_row-gap-unset_n2zfc_59",
			"row-gap-revert": "_row-gap-revert_n2zfc_60",
			"row-gap-revert-layer": "_row-gap-revert-layer_n2zfc_61",
			"column-gap-inherit": "_column-gap-inherit_n2zfc_65",
			"column-gap-initial": "_column-gap-initial_n2zfc_66",
			"column-gap-unset": "_column-gap-unset_n2zfc_67",
			"column-gap-revert": "_column-gap-revert_n2zfc_68",
			"column-gap-revert-layer": "_column-gap-revert-layer_n2zfc_69",
			"has-align": "_has-align_n2zfc_73",
			"align-inherit": "_align-inherit_n2zfc_73",
			"align-initial": "_align-initial_n2zfc_74",
			"align-unset": "_align-unset_n2zfc_75",
			"align-revert": "_align-revert_n2zfc_76",
			"align-revert-layer": "_align-revert-layer_n2zfc_77",
			"has-justify": "_has-justify_n2zfc_81",
			"justify-inherit": "_justify-inherit_n2zfc_81",
			"justify-initial": "_justify-initial_n2zfc_82",
			"justify-unset": "_justify-unset_n2zfc_83",
			"justify-revert": "_justify-revert_n2zfc_84",
			"justify-revert-layer": "_justify-revert-layer_n2zfc_85",
			"has-template-columns": "_has-template-columns_n2zfc_89",
			"template-columns-inherit": "_template-columns-inherit_n2zfc_89",
			"template-columns-initial": "_template-columns-initial_n2zfc_90",
			"template-columns-unset": "_template-columns-unset_n2zfc_91",
			"template-columns-revert": "_template-columns-revert_n2zfc_92",
			"template-columns-revert-layer": "_template-columns-revert-layer_n2zfc_93",
			"has-template-rows": "_has-template-rows_n2zfc_97",
			"template-rows-inherit": "_template-rows-inherit_n2zfc_97",
			"template-rows-initial": "_template-rows-initial_n2zfc_98",
			"template-rows-unset": "_template-rows-unset_n2zfc_99",
			"template-rows-revert": "_template-rows-revert_n2zfc_100",
			"template-rows-revert-layer": "_template-rows-revert-layer_n2zfc_101",
			"is-inline": "_is-inline_n2zfc_105"
		};
	})))();
}
//#endregion
//#region ../packages/components/src/grid/hook.ts
function toCSSValue(value) {
	return typeof value === "number" ? `${value}px` : value?.trim() || void 0;
}
function useGrid(props) {
	const { align, alignment, className, columnGap, columns = 2, gap = 3, isInline = false, justify, rowGap, rows, style, templateColumns, templateRows, ...otherProps } = useContextSystem(props, "Grid");
	const column = useResponsiveValue(Array.isArray(columns) ? columns : [columns]);
	const row = useResponsiveValue(Array.isArray(rows) ? rows : [rows]);
	const gridTemplateColumns = templateColumns || !!column && `repeat( ${column}, 1fr )`;
	const gridTemplateRows = templateRows || !!row && `repeat( ${row}, 1fr )`;
	const alignmentProps = getAlignmentProps(alignment);
	const values = {
		align: alignmentProps.alignItems ?? align,
		justify: alignmentProps.justifyContent ?? justify,
		"template-columns": gridTemplateColumns || void 0,
		"template-rows": gridTemplateRows || void 0,
		"row-gap": rowGap,
		"column-gap": columnGap
	};
	return {
		...otherProps,
		className: clsx(style_module_default.grid, {
			[style_module_default["is-inline"]]: isInline,
			[style_module_default["has-align"]]: !!values.align?.trim(),
			[style_module_default["has-justify"]]: !!values.justify?.trim(),
			[style_module_default["has-template-columns"]]: !!toCSSValue(values["template-columns"]),
			[style_module_default["has-template-rows"]]: !!toCSSValue(values["template-rows"])
		}, Object.entries(values).map(([property, value]) => {
			const keyword = typeof value === "string" ? value.trim().toLowerCase() : "";
			return CSS_WIDE_KEYWORDS.has(keyword) && style_module_default[`${property}-${keyword}`];
		}), className),
		style: {
			"--wp-components-grid-align": values.align,
			"--wp-components-grid-justify": values.justify,
			"--wp-components-grid-gap": gap,
			"--wp-components-grid-template-columns": toCSSValue(values["template-columns"]),
			"--wp-components-grid-template-rows": toCSSValue(values["template-rows"]),
			"--wp-components-grid-row-gap": toCSSValue(rowGap),
			"--wp-components-grid-column-gap": toCSSValue(columnGap),
			...style
		}
	};
}
var CSS_WIDE_KEYWORDS;
function init_hook() {
	return (init_hook = __esmMin((() => {
		init_clsx();
		init_use_context_system();
		init_utils();
		init_use_responsive_value();
		init_style_module();
		CSS_WIDE_KEYWORDS = /* @__PURE__ */ new Set([
			"inherit",
			"initial",
			"unset",
			"revert",
			"revert-layer"
		]);
	})))();
}
//#endregion
//#region ../packages/components/src/grid/component.tsx
function UnconnectedGrid(props, forwardedRef) {
	const gridProps = useGrid(props);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(View, {
		...gridProps,
		ref: forwardedRef
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 14,
		columnNumber: 9
	}, this);
}
var import_jsx_dev_runtime, _jsxFileName, Grid;
function init_component() {
	return (init_component = __esmMin((() => {
		init_context_connect();
		init_component$1();
		init_hook();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/grid/component.tsx";
		Grid = contextConnect(UnconnectedGrid, "Grid");
		try {
			Grid.__docgenInfo = {
				"description": "`Grid` is a primitive layout component that can arrange content in a grid configuration.\n\n```jsx\nimport {\n	__experimentalGrid as Grid,\n	__experimentalText as Text\n} from `@wordpress/components`;\n\nfunction Example() {\n	return (\n		<Grid columns={ 3 }>\n			<Text>Code</Text>\n			<Text>is</Text>\n			<Text>Poetry</Text>\n		</Grid>\n	);\n}\n```",
				"displayName": "Grid",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/grid/component.tsx",
				"methods": [],
				"props": {
					"align": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/grid/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Adjusts the block alignment of children.",
						"name": "align",
						"required": false,
						"tags": {},
						"type": { "name": "AlignItems" }
					},
					"alignment": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/grid/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Adjusts the horizontal and vertical alignment of children.",
						"name": "alignment",
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "GridAlignment",
							"value": [
								{ "value": "\"center\"" },
								{ "value": "\"stretch\"" },
								{ "value": "\"left\"" },
								{ "value": "\"right\"" },
								{ "value": "\"top\"" },
								{ "value": "\"bottom\"" },
								{ "value": "\"bottomLeft\"" },
								{ "value": "\"bottomRight\"" },
								{ "value": "\"topLeft\"" },
								{ "value": "\"topRight\"" },
								{ "value": "\"spaced\"" }
							]
						}
					},
					"children": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/grid/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The children elements.",
						"name": "children",
						"required": true,
						"tags": {},
						"type": { "name": "ReactNode" }
					},
					"columns": {
						"defaultValue": { "value": "2" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/grid/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Adjusts the number of columns of the `Grid`.",
						"name": "columns",
						"required": false,
						"tags": {},
						"type": { "name": "ResponsiveCSSValue<number>" }
					},
					"columnGap": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/grid/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Adjusts the `grid-column-gap`.",
						"name": "columnGap",
						"required": false,
						"tags": {},
						"type": { "name": "GridColumnGap<string | number>" }
					},
					"gap": {
						"defaultValue": { "value": "3" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/grid/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Gap between each child.",
						"name": "gap",
						"required": false,
						"tags": {},
						"type": { "name": "number" }
					},
					"isInline": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/grid/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Changes the CSS display from `grid` to `inline-grid`.",
						"name": "isInline",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"justify": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/grid/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Adjusts the inline alignment of children.",
						"name": "justify",
						"required": false,
						"tags": {},
						"type": { "name": "JustifyContent" }
					},
					"rowGap": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/grid/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Adjusts the `grid-row-gap`.",
						"name": "rowGap",
						"required": false,
						"tags": {},
						"type": { "name": "GridRowGap<string | number>" }
					},
					"rows": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/grid/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Adjusts the number of rows of the `Grid`.",
						"name": "rows",
						"required": false,
						"tags": {},
						"type": { "name": "ResponsiveCSSValue<number>" }
					},
					"templateColumns": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/grid/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Adjusts the CSS grid `template-columns`.",
						"name": "templateColumns",
						"required": false,
						"tags": {},
						"type": { "name": "GridTemplateColumns<string | number>" }
					},
					"templateRows": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/grid/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Adjusts the CSS grid `template-rows`.",
						"name": "templateRows",
						"required": false,
						"tags": {},
						"type": { "name": "GridTemplateRows<string | number>" }
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
								{ "value": "\"div\"" },
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
								{ "value": "\"span\"" },
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
export { init_component as n, Grid as t };
