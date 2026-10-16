import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C1RZKCc6.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as use_instance_id_default, t as init_use_instance_id } from "./use-instance-id-BznKyZc1.js";
import { n as __, o as isRTL, t as init_build_module } from "./build-module-v04us4E2.js";
import { r as init_build_module$1 } from "./build-module-LJKyBiy6.js";
import { a as init_clsx, i as clsx } from "./iframe-Dbjzp1_m.js";
import { a as SVG, i as Rect, o as init_svg } from "./svg-CAUvOTR7.js";
import { n as init_composite, t as Composite2 } from "./composite-DQ3JBw77.js";
import { n as tooltip_default, t as init_tooltip } from "./tooltip-B41rxI5o.js";
import { n as init_component, t as component_default } from "./component-6Aui1e4Q.js";
import { n as init_dropdown, t as dropdown_default } from "./dropdown-CT5qcp8z.js";
import { n as toolbar_button_default, t as init_toolbar_button } from "./toolbar-button-C61s4Wci.js";
//#region ../packages/components/build-module/alignment-matrix-control/utils.mjs
function normalize(value) {
	const transformed = (value === "center" ? "center center" : value)?.replace("-", " ");
	return ALIGNMENTS.includes(transformed) ? transformed : void 0;
}
function getItemId(prefixId, value) {
	const normalized = normalize(value);
	if (!normalized) return;
	return `${prefixId}-${normalized.replace(" ", "-")}`;
}
function getItemValue(prefixId, id) {
	const value = id?.replace(prefixId + "-", "");
	return normalize(value);
}
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
	})))();
}
//#endregion
//#region ../packages/components/build-module/alignment-matrix-control/cell.mjs
function getRuntime$1() {
	const globalScope = globalThis;
	if (globalScope.__wpStyleRuntime) return globalScope.__wpStyleRuntime;
	globalScope.__wpStyleRuntime = {
		documents: /* @__PURE__ */ new Map(),
		styles: /* @__PURE__ */ new Map(),
		injectedStyles: /* @__PURE__ */ new WeakMap()
	};
	if (typeof document !== "undefined") registerDocument$1(document);
	return globalScope.__wpStyleRuntime;
}
function documentContainsStyleHash$1(targetDocument, hash) {
	if (!targetDocument.head) return false;
	for (const style of targetDocument.head.querySelectorAll(`style[${STYLE_HASH_ATTRIBUTE$1}]`)) if (style.getAttribute(STYLE_HASH_ATTRIBUTE$1) === hash) return true;
	return false;
}
function injectStyle$1(targetDocument, hash, css) {
	if (!targetDocument.head) return;
	const runtime = getRuntime$1();
	let injectedStyles = runtime.injectedStyles.get(targetDocument);
	if (!injectedStyles) {
		injectedStyles = /* @__PURE__ */ new Set();
		runtime.injectedStyles.set(targetDocument, injectedStyles);
	}
	if (injectedStyles.has(hash)) return;
	if (documentContainsStyleHash$1(targetDocument, hash)) {
		injectedStyles.add(hash);
		return;
	}
	const style = targetDocument.createElement("style");
	style.setAttribute(STYLE_HASH_ATTRIBUTE$1, hash);
	style.appendChild(targetDocument.createTextNode(css));
	targetDocument.head.appendChild(style);
	injectedStyles.add(hash);
}
function registerDocument$1(targetDocument) {
	const runtime = getRuntime$1();
	runtime.documents.set(targetDocument, (runtime.documents.get(targetDocument) ?? 0) + 1);
	for (const [hash, css] of runtime.styles) injectStyle$1(targetDocument, hash, css);
	return () => {
		const count = runtime.documents.get(targetDocument);
		if (count === void 0) return;
		if (count <= 1) {
			runtime.documents.delete(targetDocument);
			return;
		}
		runtime.documents.set(targetDocument, count - 1);
	};
}
function registerStyle$1(hash, css) {
	const runtime = getRuntime$1();
	runtime.styles.set(hash, css);
	for (const targetDocument of runtime.documents.keys()) injectStyle$1(targetDocument, hash, css);
}
function Cell({ id, value, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime$2.jsx)(tooltip_default, {
		text: ALIGNMENT_LABEL[value],
		children: /* @__PURE__ */ (0, import_jsx_runtime$2.jsxs)(Composite2.Item, {
			id,
			render: /* @__PURE__ */ (0, import_jsx_runtime$2.jsx)("span", {
				...props,
				className: clsx(style_module_default$1.cell, props.className),
				role: "gridcell"
			}),
			children: [/* @__PURE__ */ (0, import_jsx_runtime$2.jsx)(component_default, { children: value }), /* @__PURE__ */ (0, import_jsx_runtime$2.jsx)("span", {
				className: style_module_default$1.point,
				role: "presentation"
			})]
		})
	});
}
var import_jsx_runtime$2, STYLE_HASH_ATTRIBUTE$1, style_module_default$1;
function init_cell() {
	return (init_cell = __esmMin((() => {
		init_clsx();
		init_composite();
		init_tooltip();
		init_component();
		init_utils();
		import_jsx_runtime$2 = require_jsx_runtime();
		STYLE_HASH_ATTRIBUTE$1 = "data-wp-hash";
		if (typeof process === "undefined" || false) registerStyle$1("0c5e50ec66", "._02e2af5803bf5bda__grid-container{aspect-ratio:1;border:1px solid transparent;border-radius:4px;box-sizing:border-box;cursor:var(--wpds-cursor-control,pointer);direction:ltr;display:grid;grid-template-columns:repeat(3,1fr);grid-template-rows:repeat(3,1fr);outline:none}.c421f8ed08c23077__grid-row{box-sizing:border-box;display:grid;grid-column:1/-1;grid-template-columns:repeat(3,1fr)}._3af769f755097fdb__cell{align-items:center;appearance:none;border:none;box-sizing:border-box;display:flex;justify-content:center;margin:0;outline:none;padding:0;position:relative}._37ef12d4fb6d6131__point{aspect-ratio:1;border:3px solid;box-sizing:border-box;color:var(--wp-components-color-gray-400,var(--wpds-color-stroke-interactive-neutral,#8d8d8d));contain:strict;display:block;margin:auto;width:6px}._3af769f755097fdb__cell[data-active-item] ._37ef12d4fb6d6131__point{color:var(--wp-components-color-foreground,var(--wpds-color-foreground-content-neutral,#1e1e1e));transform:scale(1.6666666667)}._3af769f755097fdb__cell:not([data-active-item]):hover ._37ef12d4fb6d6131__point{color:var(--wp-components-color-accent,var(--wp-admin-theme-color,#3858e9))}._3af769f755097fdb__cell[data-focus-visible] ._37ef12d4fb6d6131__point{outline:1px solid var(--wp-components-color-accent,var(--wp-admin-theme-color,#3858e9));outline-offset:1px}@media not (prefers-reduced-motion){._37ef12d4fb6d6131__point{transition-duration:.12s;transition-property:color,transform;transition-timing-function:linear}}");
		style_module_default$1 = {
			"grid-container": "_02e2af5803bf5bda__grid-container",
			"grid-row": "c421f8ed08c23077__grid-row",
			"cell": "_3af769f755097fdb__cell",
			"point": "_37ef12d4fb6d6131__point"
		};
	})))();
}
//#endregion
//#region ../packages/components/build-module/alignment-matrix-control/icon.mjs
function AlignmentMatrixControlIcon({ className, disablePointerEvents = true, size, width, height, style = {}, value = "center", ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)(SVG, {
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
			return /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)(Rect, {
				x: GRID_PADDING + index % 3 * GRID_CELL_SIZE + (GRID_CELL_SIZE - dotSize) / 2,
				y: GRID_PADDING + Math.floor(index / 3) * GRID_CELL_SIZE + (GRID_CELL_SIZE - dotSize) / 2,
				width: dotSize,
				height: dotSize,
				fill: "currentColor"
			}, align);
		})
	});
}
var import_jsx_runtime$1, BASE_SIZE, GRID_CELL_SIZE, GRID_PADDING, DOT_SIZE, DOT_SIZE_SELECTED, icon_default;
function init_icon() {
	return (init_icon = __esmMin((() => {
		init_clsx();
		init_svg();
		init_utils();
		import_jsx_runtime$1 = require_jsx_runtime();
		BASE_SIZE = 24;
		GRID_CELL_SIZE = 7;
		GRID_PADDING = (BASE_SIZE - 3 * GRID_CELL_SIZE) / 2;
		DOT_SIZE = 2;
		DOT_SIZE_SELECTED = 4;
		icon_default = AlignmentMatrixControlIcon;
	})))();
}
//#endregion
//#region ../packages/components/build-module/alignment-matrix-control/index.mjs
function getRuntime() {
	const globalScope = globalThis;
	if (globalScope.__wpStyleRuntime) return globalScope.__wpStyleRuntime;
	globalScope.__wpStyleRuntime = {
		documents: /* @__PURE__ */ new Map(),
		styles: /* @__PURE__ */ new Map(),
		injectedStyles: /* @__PURE__ */ new WeakMap()
	};
	if (typeof document !== "undefined") registerDocument(document);
	return globalScope.__wpStyleRuntime;
}
function documentContainsStyleHash(targetDocument, hash) {
	if (!targetDocument.head) return false;
	for (const style of targetDocument.head.querySelectorAll(`style[${STYLE_HASH_ATTRIBUTE}]`)) if (style.getAttribute(STYLE_HASH_ATTRIBUTE) === hash) return true;
	return false;
}
function injectStyle(targetDocument, hash, css) {
	if (!targetDocument.head) return;
	const runtime = getRuntime();
	let injectedStyles = runtime.injectedStyles.get(targetDocument);
	if (!injectedStyles) {
		injectedStyles = /* @__PURE__ */ new Set();
		runtime.injectedStyles.set(targetDocument, injectedStyles);
	}
	if (injectedStyles.has(hash)) return;
	if (documentContainsStyleHash(targetDocument, hash)) {
		injectedStyles.add(hash);
		return;
	}
	const style = targetDocument.createElement("style");
	style.setAttribute(STYLE_HASH_ATTRIBUTE, hash);
	style.appendChild(targetDocument.createTextNode(css));
	targetDocument.head.appendChild(style);
	injectedStyles.add(hash);
}
function registerDocument(targetDocument) {
	const runtime = getRuntime();
	runtime.documents.set(targetDocument, (runtime.documents.get(targetDocument) ?? 0) + 1);
	for (const [hash, css] of runtime.styles) injectStyle(targetDocument, hash, css);
	return () => {
		const count = runtime.documents.get(targetDocument);
		if (count === void 0) return;
		if (count <= 1) {
			runtime.documents.delete(targetDocument);
			return;
		}
		runtime.documents.set(targetDocument, count - 1);
	};
}
function registerStyle(hash, css) {
	const runtime = getRuntime();
	runtime.styles.set(hash, css);
	for (const targetDocument of runtime.documents.keys()) injectStyle(targetDocument, hash, css);
}
function UnforwardedAlignmentMatrixControl({ className, id, label = __("Alignment Matrix Control"), defaultValue = "center center", value, onChange, width = 92, ...props }) {
	const baseId = use_instance_id_default(UnforwardedAlignmentMatrixControl, "alignment-matrix-control", id);
	const setActiveId = (0, import_react.useCallback)((nextActiveId) => {
		const nextValue = getItemValue(baseId, nextActiveId);
		if (nextValue) onChange?.(nextValue);
	}, [baseId, onChange]);
	const classes = clsx("component-alignment-matrix-control", style_module_default["grid-container"], className);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Composite2, {
		defaultActiveId: getItemId(baseId, defaultValue),
		activeId: getItemId(baseId, value),
		setActiveId,
		rtl: isRTL(),
		render: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			...props,
			className: classes,
			"aria-label": label,
			id: baseId,
			role: "grid",
			style: { width: `${width}px` }
		}),
		children: GRID.map((cells, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Composite2.Row, {
			render: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: style_module_default["grid-row"],
				role: "row"
			}),
			children: cells.map((cell) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cell, {
				id: getItemId(baseId, cell),
				value: cell
			}, cell))
		}, index))
	});
}
var import_jsx_runtime, STYLE_HASH_ATTRIBUTE, style_module_default, AlignmentMatrixControl, alignment_matrix_control_default;
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
		import_jsx_runtime = require_jsx_runtime();
		STYLE_HASH_ATTRIBUTE = "data-wp-hash";
		if (typeof process === "undefined" || false) registerStyle("0c5e50ec66", "._02e2af5803bf5bda__grid-container{aspect-ratio:1;border:1px solid transparent;border-radius:4px;box-sizing:border-box;cursor:var(--wpds-cursor-control,pointer);direction:ltr;display:grid;grid-template-columns:repeat(3,1fr);grid-template-rows:repeat(3,1fr);outline:none}.c421f8ed08c23077__grid-row{box-sizing:border-box;display:grid;grid-column:1/-1;grid-template-columns:repeat(3,1fr)}._3af769f755097fdb__cell{align-items:center;appearance:none;border:none;box-sizing:border-box;display:flex;justify-content:center;margin:0;outline:none;padding:0;position:relative}._37ef12d4fb6d6131__point{aspect-ratio:1;border:3px solid;box-sizing:border-box;color:var(--wp-components-color-gray-400,var(--wpds-color-stroke-interactive-neutral,#8d8d8d));contain:strict;display:block;margin:auto;width:6px}._3af769f755097fdb__cell[data-active-item] ._37ef12d4fb6d6131__point{color:var(--wp-components-color-foreground,var(--wpds-color-foreground-content-neutral,#1e1e1e));transform:scale(1.6666666667)}._3af769f755097fdb__cell:not([data-active-item]):hover ._37ef12d4fb6d6131__point{color:var(--wp-components-color-accent,var(--wp-admin-theme-color,#3858e9))}._3af769f755097fdb__cell[data-focus-visible] ._37ef12d4fb6d6131__point{outline:1px solid var(--wp-components-color-accent,var(--wp-admin-theme-color,#3858e9));outline-offset:1px}@media not (prefers-reduced-motion){._37ef12d4fb6d6131__point{transition-duration:.12s;transition-property:color,transform;transition-timing-function:linear}}");
		style_module_default = {
			"grid-container": "_02e2af5803bf5bda__grid-container",
			"grid-row": "c421f8ed08c23077__grid-row",
			"cell": "_3af769f755097fdb__cell",
			"point": "_37ef12d4fb6d6131__point"
		};
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
Icon: Object.assign(icon_default, { displayName: "AlignmentMatrixControl.Icon" }) });
		alignment_matrix_control_default = AlignmentMatrixControl;
	})))();
}
//#endregion
//#region ../packages/block-editor/src/components/block-alignment-matrix-control/index.jsx
/**
* The alignment matrix control allows users to quickly adjust inner block alignment.
*
* @see https://github.com/WordPress/gutenberg/blob/HEAD/packages/block-editor/src/components/block-alignment-matrix-control/README.md
*
* @example
* ```jsx
* function Example() {
*   return (
*     <BlockControls>
*       <BlockAlignmentMatrixControl
*         label={ __( 'Change content position' ) }
*         value="center"
*         onChange={ ( nextPosition ) =>
*           setAttributes( { contentPosition: nextPosition } )
*         }
*       />
*     </BlockControls>
*   );
* }
* ```
*
* @param {Object}   props            Component props.
* @param {string}   props.label      Label for the control. Defaults to 'Change matrix alignment'.
* @param {Function} props.onChange   Function to execute upon change of matrix state.
* @param {string}   props.value      Content alignment location. One of: 'center', 'center center',
*                                    'center left', 'center right', 'top center', 'top left',
*                                    'top right', 'bottom center', 'bottom left', 'bottom right'.
* @param {boolean}  props.isDisabled Whether the control should be disabled.
* @return {Element} The BlockAlignmentMatrixControl component.
*/
function BlockAlignmentMatrixControl(props) {
	const { label = __("Change matrix alignment"), onChange = noop, value = "center", isDisabled } = props;
	const icon = /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(alignment_matrix_control_default.Icon, { value }, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 50,
		columnNumber: 15
	}, this);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(dropdown_default, {
		popoverProps: { placement: "bottom-start" },
		renderToggle: ({ onToggle, isOpen }) => {
			const openOnArrowDown = (event) => {
				if (!isOpen && event.keyCode === 40) {
					event.preventDefault();
					onToggle();
				}
			};
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(toolbar_button_default, {
				onClick: onToggle,
				"aria-haspopup": "true",
				"aria-expanded": isOpen,
				onKeyDown: openOnArrowDown,
				label,
				icon,
				showTooltip: true,
				disabled: isDisabled
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 64,
				columnNumber: 6
			}, this);
		},
		renderContent: () => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(alignment_matrix_control_default, {
			onChange,
			value
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 77,
			columnNumber: 5
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 53,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime, _jsxFileName, noop;
function init_block_alignment_matrix_control() {
	return (init_block_alignment_matrix_control = __esmMin((() => {
		init_build_module();
		init_build_module$1();
		init_toolbar_button(), init_dropdown(), init_alignment_matrix_control();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/block-editor/src/components/block-alignment-matrix-control/index.jsx";
		noop = () => {};
		BlockAlignmentMatrixControl.__docgenInfo = {
			"description": "The alignment matrix control allows users to quickly adjust inner block alignment.\n\n@see https://github.com/WordPress/gutenberg/blob/HEAD/packages/block-editor/src/components/block-alignment-matrix-control/README.md\n\n@example\n```jsx\nfunction Example() {\n  return (\n    <BlockControls>\n      <BlockAlignmentMatrixControl\n        label={ __( 'Change content position' ) }\n        value=\"center\"\n        onChange={ ( nextPosition ) =>\n          setAttributes( { contentPosition: nextPosition } )\n        }\n      />\n    </BlockControls>\n  );\n}\n```\n\n@param {Object}   props            Component props.\n@param {string}   props.label      Label for the control. Defaults to 'Change matrix alignment'.\n@param {Function} props.onChange   Function to execute upon change of matrix state.\n@param {string}   props.value      Content alignment location. One of: 'center', 'center center',\n                                   'center left', 'center right', 'top center', 'top left',\n                                   'top right', 'bottom center', 'bottom left', 'bottom right'.\n@param {boolean}  props.isDisabled Whether the control should be disabled.\n@return {Element} The BlockAlignmentMatrixControl component.",
			"methods": [],
			"displayName": "BlockAlignmentMatrixControl"
		};
	})))();
}
//#endregion
export { init_block_alignment_matrix_control as n, BlockAlignmentMatrixControl as t };
