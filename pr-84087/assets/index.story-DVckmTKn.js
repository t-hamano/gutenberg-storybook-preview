import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as use_instance_id_default, t as init_use_instance_id } from "./use-instance-id-BznKyZc1.js";
import { n as __, o as isRTL, t as init_build_module } from "./build-module-v04us4E2.js";
import { o as clsx, s as init_clsx } from "./iframe-D4D-SsYo.js";
import { a as SVG, i as Rect, o as init_svg } from "./svg-CO2tRbm-.js";
import { t as icon_default } from "./icon-DEDMwo2v.js";
import { n as init_composite, t as Composite } from "./composite-CLFO7Vk_.js";
import { n as init_tooltip, t as Tooltip } from "./tooltip-BEK7-yI-.js";
import { n as init_component, t as VisuallyHidden } from "./component-CZde0e16.js";
import { n as init_component$1, t as HStack } from "./component-D91dSxn4.js";
import { r as init_build_module$1 } from "./library.story-DawnfKTW.js";
//#region ../packages/components/src/alignment-matrix-control/utils.tsx
/**
* Normalizes and transforms an incoming value to better match the alignment values
*
* @param value An alignment value to parse.
*
* @return The parsed value.
*/
function normalize(value) {
	const transformed = (value === "center" ? "center center" : value)?.replace("-", " ");
	return ALIGNMENTS.includes(transformed) ? transformed : void 0;
}
/**
* Creates an item ID based on a prefix ID and an alignment value.
*
* @param prefixId An ID to prefix.
* @param value    An alignment value.
*
* @return The item id.
*/
function getItemId(prefixId, value) {
	const normalized = normalize(value);
	if (!normalized) return;
	return `${prefixId}-${normalized.replace(" ", "-")}`;
}
/**
* Extracts an item value from its ID
*
* @param prefixId An ID prefix to remove
* @param id       An item ID
* @return         The item value
*/
function getItemValue(prefixId, id) {
	const value = id?.replace(prefixId + "-", "");
	return normalize(value);
}
/**
* Retrieves the alignment index from a value.
*
* @param alignment Value to check.
*
* @return The index of a matching alignment.
*/
function getAlignmentIndex(alignment = "center") {
	const normalized = normalize(alignment);
	if (!normalized) return;
	const index = ALIGNMENTS.indexOf(normalized);
	return index > -1 ? index : void 0;
}
var GRID, ALIGNMENT_LABEL, ALIGNMENTS;
function init_utils() {
	return (init_utils = __esmMin((() => {
		init_build_module();
		GRID = [
			[
				"top left",
				"top center",
				"top right"
			],
			[
				"center left",
				"center center",
				"center right"
			],
			[
				"bottom left",
				"bottom center",
				"bottom right"
			]
		];
		ALIGNMENT_LABEL = {
			"top left": __("Top Left"),
			"top center": __("Top Center"),
			"top right": __("Top Right"),
			"center left": __("Center Left"),
			"center center": __("Center"),
			center: __("Center"),
			"center right": __("Center Right"),
			"bottom left": __("Bottom Left"),
			"bottom center": __("Bottom Center"),
			"bottom right": __("Bottom Right")
		};
		ALIGNMENTS = GRID.flat();
		try {
			getItemId.__docgenInfo = {
				"description": "Creates an item ID based on a prefix ID and an alignment value.",
				"displayName": "getItemId",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/alignment-matrix-control/utils.tsx",
				"methods": [],
				"props": {},
				"tags": {
					"param": "prefixId An ID to prefix.\nvalue An alignment value.",
					"return": "The item id."
				}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			getItemValue.__docgenInfo = {
				"description": "Extracts an item value from its ID",
				"displayName": "getItemValue",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/alignment-matrix-control/utils.tsx",
				"methods": [],
				"props": {},
				"tags": {
					"param": "prefixId An ID prefix to remove\nid An item ID",
					"return": "The item value"
				}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			getAlignmentIndex.__docgenInfo = {
				"description": "Retrieves the alignment index from a value.",
				"displayName": "getAlignmentIndex",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/alignment-matrix-control/utils.tsx",
				"methods": [],
				"props": {},
				"tags": {
					"param": "alignment Value to check.",
					"return": "The index of a matching alignment."
				}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/components/src/alignment-matrix-control/style.module.scss
var cell, point, style_module_default;
function init_style_module() {
	return (init_style_module = __esmMin((() => {
		cell = "_cell_9ajb9_66";
		point = "_point_9ajb9_79";
		style_module_default = {
			"grid-container": "_grid-container_9ajb9_46",
			"grid-row": "_grid-row_9ajb9_59",
			cell,
			point
		};
	})))();
}
//#endregion
//#region ../packages/components/src/alignment-matrix-control/cell.tsx
function Cell({ id, value, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$3.jsxDEV)(Tooltip, {
		text: ALIGNMENT_LABEL[value],
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime$3.jsxDEV)(Composite.Item, {
			id,
			render: /* @__PURE__ */ (0, import_jsx_dev_runtime$3.jsxDEV)("span", {
				...props,
				className: clsx(style_module_default.cell, props.className),
				role: "gridcell"
			}, void 0, false, {
				fileName: _jsxFileName$3,
				lineNumber: 20,
				columnNumber: 6
			}, this),
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime$3.jsxDEV)(VisuallyHidden, { children: value }, void 0, false, {
				fileName: _jsxFileName$3,
				lineNumber: 30,
				columnNumber: 5
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime$3.jsxDEV)("span", {
				className: style_module_default.point,
				role: "presentation"
			}, void 0, false, {
				fileName: _jsxFileName$3,
				lineNumber: 31,
				columnNumber: 5
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName$3,
			lineNumber: 17,
			columnNumber: 4
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$3,
		lineNumber: 16,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime$3, _jsxFileName$3;
function init_cell() {
	return (init_cell = __esmMin((() => {
		init_clsx();
		init_composite();
		init_tooltip();
		init_component();
		init_utils();
		init_style_module();
		import_jsx_dev_runtime$3 = require_jsx_dev_runtime();
		_jsxFileName$3 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/alignment-matrix-control/cell.tsx";
		try {
			Cell.__docgenInfo = {
				"description": "",
				"displayName": "cell",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/alignment-matrix-control/cell.tsx",
				"methods": [],
				"props": { "value": {
					"defaultValue": null,
					"declarations": [{
						"fileName": "gutenberg-storybook-preview/packages/components/src/alignment-matrix-control/types.ts",
						"name": "TypeLiteral"
					}],
					"description": "",
					"name": "value",
					"required": true,
					"tags": {},
					"type": {
						"name": "enum",
						"raw": "NonNullable<AlignmentMatrixControlValue | undefined>",
						"value": [
							{ "value": "\"center\"" },
							{ "value": "\"top left\"" },
							{ "value": "\"top right\"" },
							{ "value": "\"bottom left\"" },
							{ "value": "\"bottom right\"" },
							{ "value": "\"top center\"" },
							{ "value": "\"center left\"" },
							{ "value": "\"center center\"" },
							{ "value": "\"center right\"" },
							{ "value": "\"bottom center\"" }
						]
					}
				} },
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/components/src/alignment-matrix-control/icon.tsx
function AlignmentMatrixControlIcon({ className, disablePointerEvents = true, size, width, height, style = {}, value = "center", ...props }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)(SVG, {
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: `0 0 ${BASE_SIZE} ${BASE_SIZE}`,
		width: size ?? width ?? BASE_SIZE,
		height: size ?? height ?? BASE_SIZE,
		role: "presentation",
		className: clsx("component-alignment-matrix-control-icon", className),
		style: {
			pointerEvents: disablePointerEvents ? "none" : void 0,
			...style
		},
		...props,
		children: ALIGNMENTS.map((align, index) => {
			const dotSize = getAlignmentIndex(value) === index ? DOT_SIZE_SELECTED : DOT_SIZE;
			return /* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)(Rect, {
				x: GRID_PADDING + index % 3 * GRID_CELL_SIZE + (GRID_CELL_SIZE - dotSize) / 2,
				y: GRID_PADDING + Math.floor(index / 3) * GRID_CELL_SIZE + (GRID_CELL_SIZE - dotSize) / 2,
				width: dotSize,
				height: dotSize,
				fill: "currentColor"
			}, align, false, {
				fileName: _jsxFileName$2,
				lineNumber: 47,
				columnNumber: 6
			}, this);
		})
	}, void 0, false, {
		fileName: _jsxFileName$2,
		lineNumber: 24,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime$2, _jsxFileName$2, BASE_SIZE, GRID_CELL_SIZE, GRID_PADDING, DOT_SIZE, DOT_SIZE_SELECTED;
function init_icon() {
	return (init_icon = __esmMin((() => {
		init_clsx();
		init_svg();
		init_utils();
		import_jsx_dev_runtime$2 = require_jsx_dev_runtime();
		_jsxFileName$2 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/alignment-matrix-control/icon.tsx";
		BASE_SIZE = 24;
		GRID_CELL_SIZE = 7;
		GRID_PADDING = 3 / 2;
		DOT_SIZE = 2;
		DOT_SIZE_SELECTED = 4;
		try {
			AlignmentMatrixControlIcon.__docgenInfo = {
				"description": "",
				"displayName": "AlignmentMatrixControlIcon",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/alignment-matrix-control/icon.tsx",
				"methods": [],
				"props": {
					"value": {
						"defaultValue": { "value": "center" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/alignment-matrix-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The current alignment value.",
						"name": "value",
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "AlignmentMatrixControlValue",
							"value": [
								{ "value": "\"center\"" },
								{ "value": "\"top left\"" },
								{ "value": "\"top right\"" },
								{ "value": "\"bottom left\"" },
								{ "value": "\"bottom right\"" },
								{ "value": "\"top center\"" },
								{ "value": "\"center left\"" },
								{ "value": "\"center center\"" },
								{ "value": "\"center right\"" },
								{ "value": "\"bottom center\"" }
							]
						}
					},
					"disablePointerEvents": {
						"defaultValue": { "value": "true" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/alignment-matrix-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "If `true`, disables pointer events on the icon.",
						"name": "disablePointerEvents",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"size": {
						"defaultValue": { "value": "24" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/alignment-matrix-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "_Note: this prop is deprecated. Use the `size` prop on the parent `Icon`\ncomponent instead_\n\nThe size of the icon.\n@deprecated\n@ignore",
						"name": "size",
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
//#region ../packages/components/src/alignment-matrix-control/index.tsx
function UnforwardedAlignmentMatrixControl({ className, id, label = __("Alignment Matrix Control"), defaultValue = "center center", value, onChange, width = 92, ...props }) {
	const baseId = use_instance_id_default(UnforwardedAlignmentMatrixControl, "alignment-matrix-control", id);
	const setActiveId = (0, import_react.useCallback)((nextActiveId) => {
		const nextValue = getItemValue(baseId, nextActiveId);
		if (nextValue) onChange?.(nextValue);
	}, [baseId, onChange]);
	const classes = clsx("component-alignment-matrix-control", style_module_default["grid-container"], className);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(Composite, {
		defaultActiveId: getItemId(baseId, defaultValue),
		activeId: getItemId(baseId, value),
		setActiveId,
		rtl: isRTL(),
		render: /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)("div", {
			...props,
			className: classes,
			"aria-label": label,
			id: baseId,
			role: "grid",
			style: { width: `${width}px` }
		}, void 0, false, {
			fileName: _jsxFileName$1,
			lineNumber: 54,
			columnNumber: 5
		}, this),
		children: GRID.map((cells, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(Composite.Row, {
			render: /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)("div", {
				className: style_module_default["grid-row"],
				role: "row"
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 67,
				columnNumber: 7
			}, this),
			children: cells.map((cell) => /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(Cell, {
				id: getItemId(baseId, cell),
				value: cell
			}, cell, false, {
				fileName: _jsxFileName$1,
				lineNumber: 72,
				columnNumber: 7
			}, this))
		}, index, false, {
			fileName: _jsxFileName$1,
			lineNumber: 65,
			columnNumber: 5
		}, this))
	}, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 48,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime$1, _jsxFileName$1, AlignmentMatrixControl;
function init_alignment_matrix_control() {
	return (init_alignment_matrix_control = __esmMin((() => {
		init_clsx();
		init_build_module();
		init_use_instance_id();
		init_react();
		init_cell();
		init_composite();
		init_icon();
		init_utils();
		init_style_module();
		import_jsx_dev_runtime$1 = require_jsx_dev_runtime();
		_jsxFileName$1 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/alignment-matrix-control/index.tsx";
		AlignmentMatrixControl = Object.assign(UnforwardedAlignmentMatrixControl, { 
		/**
		* Render an alignment matrix as an icon.
		*
		* ```jsx
		* import { AlignmentMatrixControl } from '@wordpress/components';
		*
		* <Icon icon={<AlignmentMatrixControl.Icon value="top left" />} />
		* ```
		*/
Icon: Object.assign(AlignmentMatrixControlIcon, { displayName: "AlignmentMatrixControl.Icon" }) });
		try {
			AlignmentMatrixControl.__docgenInfo = {
				"description": "AlignmentMatrixControl components enable adjustments to horizontal and vertical alignments for UI.\n\n```jsx\nimport { AlignmentMatrixControl } from '@wordpress/components';\nimport { useState } from '@wordpress/element';\n\nconst Example = () => {\n	const [ alignment, setAlignment ] = useState( 'center center' );\n\n	return (\n		<AlignmentMatrixControl\n			value={ alignment }\n			onChange={ setAlignment }\n		/>\n	);\n};\n```",
				"displayName": "AlignmentMatrixControl",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/alignment-matrix-control/index.tsx",
				"methods": [],
				"props": {
					"label": {
						"defaultValue": { "value": "'Alignment Matrix Control'" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/alignment-matrix-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Accessible label. If provided, sets the `aria-label` attribute of the\nunderlying `grid` widget.",
						"name": "label",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"defaultValue": {
						"defaultValue": { "value": "'center center'" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/alignment-matrix-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "If provided, sets the default alignment value.",
						"name": "defaultValue",
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "AlignmentMatrixControlValue",
							"value": [
								{ "value": "\"center\"" },
								{ "value": "\"top left\"" },
								{ "value": "\"top right\"" },
								{ "value": "\"bottom left\"" },
								{ "value": "\"bottom right\"" },
								{ "value": "\"top center\"" },
								{ "value": "\"center left\"" },
								{ "value": "\"center center\"" },
								{ "value": "\"center right\"" },
								{ "value": "\"bottom center\"" }
							]
						}
					},
					"value": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/alignment-matrix-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The current alignment value.",
						"name": "value",
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "AlignmentMatrixControlValue",
							"value": [
								{ "value": "\"center\"" },
								{ "value": "\"top left\"" },
								{ "value": "\"top right\"" },
								{ "value": "\"bottom left\"" },
								{ "value": "\"bottom right\"" },
								{ "value": "\"top center\"" },
								{ "value": "\"center left\"" },
								{ "value": "\"center center\"" },
								{ "value": "\"center right\"" },
								{ "value": "\"bottom center\"" }
							]
						}
					},
					"onChange": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/alignment-matrix-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "A function that receives the updated alignment value.",
						"name": "onChange",
						"required": false,
						"tags": {},
						"type": { "name": "((newValue: AlignmentMatrixControlValue) => void)" }
					},
					"width": {
						"defaultValue": { "value": "92" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/alignment-matrix-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "If provided, sets the width of the control.",
						"name": "width",
						"required": false,
						"tags": {},
						"type": { "name": "number" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			AlignmentMatrixControl.__docgenInfo = {
				"description": "AlignmentMatrixControl components enable adjustments to horizontal and vertical alignments for UI.\n\n```jsx\nimport { AlignmentMatrixControl } from '@wordpress/components';\nimport { useState } from '@wordpress/element';\n\nconst Example = () => {\n	const [ alignment, setAlignment ] = useState( 'center center' );\n\n	return (\n		<AlignmentMatrixControl\n			value={ alignment }\n			onChange={ setAlignment }\n		/>\n	);\n};\n```",
				"displayName": "alignmentmatrixcontrol",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/alignment-matrix-control/index.tsx",
				"methods": [],
				"props": {
					"label": {
						"defaultValue": { "value": "'Alignment Matrix Control'" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/alignment-matrix-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Accessible label. If provided, sets the `aria-label` attribute of the\nunderlying `grid` widget.",
						"name": "label",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"defaultValue": {
						"defaultValue": { "value": "'center center'" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/alignment-matrix-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "If provided, sets the default alignment value.",
						"name": "defaultValue",
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "AlignmentMatrixControlValue",
							"value": [
								{ "value": "\"center\"" },
								{ "value": "\"top left\"" },
								{ "value": "\"top right\"" },
								{ "value": "\"bottom left\"" },
								{ "value": "\"bottom right\"" },
								{ "value": "\"top center\"" },
								{ "value": "\"center left\"" },
								{ "value": "\"center center\"" },
								{ "value": "\"center right\"" },
								{ "value": "\"bottom center\"" }
							]
						}
					},
					"value": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/alignment-matrix-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The current alignment value.",
						"name": "value",
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "AlignmentMatrixControlValue",
							"value": [
								{ "value": "\"center\"" },
								{ "value": "\"top left\"" },
								{ "value": "\"top right\"" },
								{ "value": "\"bottom left\"" },
								{ "value": "\"bottom right\"" },
								{ "value": "\"top center\"" },
								{ "value": "\"center left\"" },
								{ "value": "\"center center\"" },
								{ "value": "\"center right\"" },
								{ "value": "\"bottom center\"" }
							]
						}
					},
					"onChange": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/alignment-matrix-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "A function that receives the updated alignment value.",
						"name": "onChange",
						"required": false,
						"tags": {},
						"type": { "name": "((newValue: AlignmentMatrixControlValue) => void)" }
					},
					"width": {
						"defaultValue": { "value": "92" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/alignment-matrix-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "If provided, sets the width of the control.",
						"name": "width",
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
//#region ../packages/components/src/alignment-matrix-control/stories/index.story.tsx
var import_jsx_dev_runtime, fn, _jsxFileName, meta, Template, Default, IconSubcomponent;
function init_index_story() {
	return (init_index_story = __esmMin((() => {
		init_react();
		init_build_module$1();
		init_alignment_matrix_control();
		init_component$1();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		({fn} = __STORYBOOK_MODULE_TEST__);
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/alignment-matrix-control/stories/index.story.tsx";
		meta = {
			id: "components-alignmentmatrixcontrol",
			title: "Components/@wordpress-components/AlignmentMatrixControl",
			component: AlignmentMatrixControl,
			subcomponents: { "AlignmentMatrixControl.Icon": AlignmentMatrixControl.Icon },
			argTypes: {
				onChange: { control: false },
				value: { control: false }
			},
			args: { onChange: fn() },
			parameters: {
				controls: { expanded: true },
				docs: { canvas: { sourceState: "shown" } },
				componentStatus: {
					status: "recommended",
					whereUsed: "editor"
				}
			}
		};
		Template = ({ defaultValue, onChange, ...props }) => {
			const [value, setValue] = (0, import_react.useState)();
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AlignmentMatrixControl, {
				...props,
				onChange: (...changeArgs) => {
					setValue(...changeArgs);
					onChange?.(...changeArgs);
				},
				value
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 43,
				columnNumber: 3
			}, void 0);
		};
		Default = Template.bind({});
		IconSubcomponent = () => {
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HStack, {
				justify: "flex-start",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(icon_default, { icon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AlignmentMatrixControl.Icon, { value: "top left" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 58,
					columnNumber: 17
				}, void 0) }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 58,
					columnNumber: 4
				}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(icon_default, { icon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AlignmentMatrixControl.Icon, { value: "center center" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 60,
					columnNumber: 12
				}, void 0) }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 59,
					columnNumber: 4
				}, void 0)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 57,
				columnNumber: 3
			}, void 0);
		};
		Default.parameters = {
			...Default.parameters,
			docs: {
				...Default.parameters?.docs,
				source: {
					originalSource: "({\n  defaultValue,\n  onChange,\n  ...props\n}) => {\n  const [value, setValue] = useState<AlignmentMatrixControlProps['value']>();\n  return <AlignmentMatrixControl {...props} onChange={(...changeArgs) => {\n    setValue(...changeArgs);\n    onChange?.(...changeArgs);\n  }} value={value} />;\n}",
					...Default.parameters?.docs?.source
				}
			}
		};
		IconSubcomponent.parameters = {
			...IconSubcomponent.parameters,
			docs: {
				...IconSubcomponent.parameters?.docs,
				source: {
					originalSource: "() => {\n  return <HStack justify=\"flex-start\">\n            <Icon icon={<AlignmentMatrixControl.Icon value=\"top left\" />} />\n            <Icon icon={<AlignmentMatrixControl.Icon value=\"center center\" />} />\n        </HStack>;\n}",
					...IconSubcomponent.parameters?.docs?.source
				}
			}
		};
	})))();
}
//#endregion
init_index_story();
export { Default, IconSubcomponent, meta as default };
