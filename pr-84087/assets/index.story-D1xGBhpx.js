import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as useMergeRefs, t as init_use_merge_refs } from "./use-merge-refs-BAtuPB1L.js";
import { n as useEvent, t as init_use_event } from "./use-event-BTRhHipl.js";
import { n as useResizeObserver, t as init_use_resize_observer } from "./use-resize-observer-C4Y8OHRi.js";
import { o as clsx, s as init_clsx } from "./iframe-D4D-SsYo.js";
import { n as init_icon, t as Icon } from "./icon-TYj7I5OY.js";
import { t as close_default } from "./close-CkxG9D71.js";
import { n as justify_stretch_default } from "./justify-stretch-Bs2_MfzA.js";
import { n as stretch_full_width_default } from "./stretch-full-width-DeLBd5Id.js";
import { n as init_build_module, t as inertValue } from "./build-module-DRvOo7DC.js";
import { n as init_icon_button, t as IconButton } from "./icon-button-9RV6QZGC.js";
import { n as init_stack, t as Stack } from "./stack-DCjz3kq7.js";
import { a as useSortable, c as KeyboardSensor, f as init_core_esm, h as useSensors, i as sortableKeyboardCoordinates, l as PointerSensor, m as useSensor, o as DndContext, r as init_sortable_esm, s as DragOverlay, t as SortableContext } from "./sortable.esm-BptoXGkA.js";
import { D as init_grid_item_key, E as GRID_ITEM_DATA_KEY, O as actionable_area_slot_module_default, S as gridSpanToPixelSize, T as init_resize_handle, _ as init_grid_overlay, a as getLayoutFingerprint, b as clampResizeDelta, c as useLayoutShiftAnimation, d as init_layout_shift_animation_module, f as layout_shift_animation_module_default, g as GridOverlay, h as useSpanBounds, i as useItemExitAnimation, k as init_actionable_area_slot_module, l as ItemExitOverlay, m as useResizePixelLimits, n as init_drag_overlay_drop_animation, p as init_use_span_bounds, r as init_use_item_exit_animation, s as init_use_layout_shift_animation, t as createDashboardDragDropAnimation, u as init_item_exit_overlay, v as arrayMoveWithPinned, w as ResizeHandleWrapper, x as clampSpan, y as init_array_move_with_pinned } from "./drag-overlay-drop-animation-1bz6LyS0.js";
import { r as init_build_module$1 } from "./library.story-DawnfKTW.js";
//#region ../packages/grid/src/dashboard-grid/grid-item.module.css
var item, grid_item_module_default;
function init_grid_item_module() {
	return (init_grid_item_module = __esmMin((() => {
		item = "_item_1trpz_1";
		grid_item_module_default = {
			item,
			"item-content": "_item-content_1trpz_5",
			"is-resizing": "_is-resizing_1trpz_10",
			"is-dragging": "_is-dragging_1trpz_31",
			"wp-grid-item-placeholder-in": "_wp-grid-item-placeholder-in_1trpz_1",
			"preview-overlay": "_preview-overlay_1trpz_75"
		};
	})))();
}
//#endregion
//#region ../packages/grid/src/dashboard-grid/grid-item.tsx
function getItemCursor(disabled, interacting) {
	if (disabled) return "default";
	if (interacting) return;
	return "grab";
}
function GridItem({ item, maxColumns, disabled = false, draggable = true, resizable = true, verticalResizable = true, interacting = false, dragging = false, children, actionableArea = null, onResize, onResizeEnd, resizeSnapPreview = null, minResizeWidthPx, minResizeHeightPx, maxResizeWidthPx, maxResizeHeightPx, renderResizeHandle }) {
	const [resizeDelta, setResizeDelta] = (0, import_react.useState)(null);
	const [initialContentSize, setInitialContentSize] = (0, import_react.useState)(null);
	const itemRef = (0, import_react.useRef)(null);
	const contentRef = (0, import_react.useRef)(null);
	const dragDisabled = disabled || !draggable;
	const resizeDisabled = disabled || !resizable;
	const { attributes, listeners, setNodeRef, setActivatorNodeRef, isDragging } = useSortable({
		id: item.key,
		disabled: dragDisabled
	});
	const mergedRef = useMergeRefs([itemRef, setNodeRef]);
	const contentMergedRef = useMergeRefs([contentRef]);
	const style = {
		gridColumnEnd: `span ${item.width === "full" ? maxColumns : Math.min(typeof item.width === "number" ? item.width : 1, maxColumns)}`,
		gridRowEnd: `span ${item.height || 1}`
	};
	const isResizing = resizeDelta !== null;
	const itemClassName = clsx(grid_item_module_default.item, isDragging && grid_item_module_default["is-dragging"], isResizing && grid_item_module_default["is-resizing"]);
	const handleResize = (delta) => {
		const contentNode = contentRef.current;
		let baselineSize = initialContentSize;
		if (contentNode && !baselineSize) {
			const { width, height } = contentNode.getBoundingClientRect();
			baselineSize = {
				width,
				height
			};
			setInitialContentSize(baselineSize);
		}
		let clamped = {
			width: delta.width,
			height: verticalResizable ? delta.height : 0
		};
		if (baselineSize) clamped = clampResizeDelta(clamped, baselineSize, {
			width: minResizeWidthPx,
			height: verticalResizable ? minResizeHeightPx : void 0
		}, {
			width: maxResizeWidthPx,
			height: verticalResizable ? maxResizeHeightPx : void 0
		});
		setResizeDelta(clamped);
		onResize(item.key, clamped);
	};
	const handleResizeEnd = () => {
		setResizeDelta(null);
		setInitialContentSize(null);
		onResizeEnd();
	};
	const continuousContentStyle = resizeDelta && initialContentSize ? {
		width: initialContentSize.width + resizeDelta.width,
		height: verticalResizable ? initialContentSize.height + resizeDelta.height : void 0
	} : void 0;
	const previewOverlay = resizeSnapPreview ? /* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)(SnapPreviewOverlay, { snap: resizeSnapPreview }, void 0, false, {
		fileName: _jsxFileName$2,
		lineNumber: 144,
		columnNumber: 3
	}, this) : null;
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)("div", {
		ref: mergedRef,
		className: itemClassName,
		style,
		[GRID_ITEM_DATA_KEY]: item.key,
		"data-wp-grid-item-resizing": isResizing || void 0,
		children: [actionableArea ? /* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)("div", {
			className: actionable_area_slot_module_default["actionable-area-slot"],
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)("div", {
				style: { display: "contents" },
				inert: inertValue(dragging),
				children: actionableArea
			}, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 159,
				columnNumber: 6
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName$2,
			lineNumber: 156,
			columnNumber: 5
		}, this) : null, /* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)("div", {
			ref: setActivatorNodeRef,
			...attributes,
			...listeners,
			style: {
				height: "100%",
				cursor: getItemCursor(dragDisabled, interacting)
			},
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)("div", {
				ref: contentMergedRef,
				className: grid_item_module_default["item-content"],
				style: continuousContentStyle,
				children: [children, !resizeDisabled && /* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)(ResizeHandleWrapper, {
					itemId: item.key,
					verticalResizable,
					onResize: handleResize,
					onResizeEnd: handleResizeEnd,
					renderResizeHandle
				}, void 0, false, {
					fileName: _jsxFileName$2,
					lineNumber: 184,
					columnNumber: 7
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$2,
				lineNumber: 177,
				columnNumber: 5
			}, this), previewOverlay]
		}, void 0, true, {
			fileName: _jsxFileName$2,
			lineNumber: 168,
			columnNumber: 4
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName$2,
		lineNumber: 148,
		columnNumber: 3
	}, this);
}
function SnapPreviewOverlay({ snap }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)("div", {
		className: grid_item_module_default["preview-overlay"],
		style: {
			width: snap.widthPx,
			height: snap.heightPx ?? "100%"
		}
	}, void 0, false, {
		fileName: _jsxFileName$2,
		lineNumber: 201,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime$2, _jsxFileName$2;
function init_grid_item() {
	return (init_grid_item = __esmMin((() => {
		init_sortable_esm();
		init_clsx();
		init_react();
		init_use_merge_refs();
		init_build_module();
		init_actionable_area_slot_module();
		init_grid_item_key();
		init_resize_handle();
		init_grid_item_module();
		import_jsx_dev_runtime$2 = require_jsx_dev_runtime();
		_jsxFileName$2 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/grid/src/dashboard-grid/grid-item.tsx";
		try {
			GridItem.__docgenInfo = {
				"description": "",
				"displayName": "GridItem",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/grid/src/dashboard-grid/grid-item.tsx",
				"methods": [],
				"props": {
					"item": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/grid/src/dashboard-grid/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The layout item containing grid positioning information.",
						"name": "item",
						"required": true,
						"tags": {},
						"type": { "name": "DashboardGridLayoutItem" }
					},
					"maxColumns": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/grid/src/dashboard-grid/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The maximum number of columns in the grid.",
						"name": "maxColumns",
						"required": true,
						"tags": {},
						"type": { "name": "number" }
					},
					"disabled": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/grid/src/dashboard-grid/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Whether drag and resize interactions are disabled.",
						"name": "disabled",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"draggable": {
						"defaultValue": { "value": "true" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/grid/src/dashboard-grid/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Whether the item can be dragged. Combined with `disabled`.",
						"name": "draggable",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"resizable": {
						"defaultValue": { "value": "true" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/grid/src/dashboard-grid/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Whether the item can be resized. Combined with `disabled`.",
						"name": "resizable",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"verticalResizable": {
						"defaultValue": { "value": "true" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/grid/src/dashboard-grid/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Whether the item can be resized vertically. Disabled when the\ngrid uses `rowHeight: 'auto'`, where row height is driven by\ncontent rather than by the user.",
						"name": "verticalResizable",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"interacting": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/grid/src/dashboard-grid/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Whether any tile in the grid is currently being dragged or\nresized. Drives the drag activator cursor.",
						"name": "interacting",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"dragging": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/grid/src/dashboard-grid/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Whether a tile drag is in progress. Mutes each tile's\n`actionableArea` with `inert` so hovers on other tiles' controls\ndo not steal the gesture.",
						"name": "dragging",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"children": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/grid/src/dashboard-grid/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The content to be displayed within the grid item.",
						"name": "children",
						"required": true,
						"tags": {},
						"type": { "name": "ReactNode" }
					},
					"actionableArea": {
						"defaultValue": { "value": "null" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/grid/src/dashboard-grid/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Content rendered above the draggable area that stays interactive\nin edit mode, typically action buttons, menus, or links. While\na tile drag is in progress, this content is set `inert` so hovers\non other tiles can't steal the gesture. During resize, visibility\nis controlled by grid-level CSS hooks.",
						"name": "actionableArea",
						"required": false,
						"tags": {},
						"type": { "name": "ReactNode" }
					},
					"onResize": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/grid/src/dashboard-grid/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Callback fired while the item is being resized. Receives the\nitem's `key` plus the cursor offset from the gesture start in\npixels. The grid derives snapped spans from the delta and passes\nthem back through `resizeSnapPreview`.",
						"name": "onResize",
						"required": true,
						"tags": {},
						"type": { "name": "(id: string, delta: ResizeDelta) => void" }
					},
					"resizeSnapPreview": {
						"defaultValue": { "value": "null" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/grid/src/dashboard-grid/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Snapped grid size in pixels for the resize-preview outline. The\ntile content resizes continuously with the cursor; this outline\nshows the span the layout will commit to on release.",
						"name": "resizeSnapPreview",
						"required": false,
						"tags": {},
						"type": { "name": "ResizeSnapSize | null" }
					},
					"minResizeWidthPx": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/grid/src/dashboard-grid/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Minimum tile width while resizing, in pixels (one column track).",
						"name": "minResizeWidthPx",
						"required": true,
						"tags": {},
						"type": { "name": "number" }
					},
					"minResizeHeightPx": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/grid/src/dashboard-grid/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Minimum tile height while resizing, in pixels (one row track).\nOmitted when vertical resize is disabled.",
						"name": "minResizeHeightPx",
						"required": false,
						"tags": {},
						"type": { "name": "number" }
					},
					"maxResizeWidthPx": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/grid/src/dashboard-grid/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Maximum tile width while resizing, in pixels. Omitted when the\nitem declares no width limit.",
						"name": "maxResizeWidthPx",
						"required": false,
						"tags": {},
						"type": { "name": "number" }
					},
					"maxResizeHeightPx": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/grid/src/dashboard-grid/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Maximum tile height while resizing, in pixels. Omitted when\nvertical resize is disabled or the item declares no height limit.",
						"name": "maxResizeHeightPx",
						"required": false,
						"tags": {},
						"type": { "name": "number" }
					},
					"onResizeEnd": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/grid/src/dashboard-grid/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Callback fired when the resize gesture ends.",
						"name": "onResizeEnd",
						"required": true,
						"tags": {},
						"type": { "name": "() => void" }
					},
					"renderResizeHandle": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/grid/src/dashboard-grid/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Component forwarded to `<ResizeHandle />` to override the default\ncorner triangle. See `DashboardGridProps.renderResizeHandle`.",
						"name": "renderResizeHandle",
						"required": false,
						"tags": {},
						"type": { "name": "ComponentType<ResizeHandleRenderProps>" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/grid/src/dashboard-grid/resolve-fill-widths.ts
/**
* Resolves items with `width: 'fill'` by computing how many columns they
* should span. Simulates CSS Grid's row-sparse auto-flow placement so the
* resolved span matches the free run that CSS Grid will actually use.
*
* Two paths:
* - Fast path (no `height > 1` items): single-row column tracker, O(n).
*   Each fixed item between two fills is visited at most once by a fill's
*   look-ahead.
* - Multi-row path (any item with `height > 1`): per-column skyline that
*   tracks shadow occupation of tall tiles. Placement scans rows in
*   row-major order, so worst-case cost depends on both columns and rows
*   scanned (rows bounded by the sum of item heights), not only on
*   `maxColumns`.
*
* Fill items honor per-item span bounds: the row plan reserves at least
* the fill's minimum span (wrapping it to the next free run when the
* current one is too narrow), and the resolved span never exceeds its
* maximum. A `'full'` item capped below the column count places like a
* fixed item of its capped width. Fixed-width items arrive already
* bounded by the caller.
*
* @param sortedKeys - Item keys in display order.
* @param layoutMap  - Map of key to DashboardGridLayoutItem.
* @param maxColumns - Total columns in the grid.
* @param itemBounds - Optional per-key span bounds for fill and full items.
* @return Map of fill item keys to their resolved column spans.
*/
function resolveFillWidths(sortedKeys, layoutMap, maxColumns, itemBounds) {
	const resolved = /* @__PURE__ */ new Map();
	const n = sortedKeys.length;
	const items = new Array(n);
	const kinds = new Array(n);
	const widths = new Array(n);
	const heights = new Array(n);
	let hasFill = false;
	let hasMultiRow = false;
	let totalRows = 0;
	for (let i = 0; i < n; i++) {
		const item = layoutMap.get(sortedKeys[i]);
		items[i] = item;
		if (!item) continue;
		if (item.width === "fill") {
			kinds[i] = "fill";
			widths[i] = 1;
			hasFill = true;
		} else if (item.width === "full") {
			const cap = Math.min(itemBounds?.get(item.key)?.maxWidth ?? maxColumns, maxColumns);
			kinds[i] = cap < maxColumns ? "fixed" : "full";
			widths[i] = cap;
		} else {
			kinds[i] = "fixed";
			widths[i] = typeof item.width === "number" ? Math.min(item.width, maxColumns) : 1;
		}
		const h = Math.max(1, Math.floor(item.height ?? 1));
		heights[i] = h;
		if (h > 1) hasMultiRow = true;
		totalRows += h;
	}
	if (!hasFill) return resolved;
	if (!hasMultiRow) {
		let currentCol = 0;
		for (let i = 0; i < n; i++) {
			const item = items[i];
			if (!item) continue;
			if (kinds[i] === "full") {
				currentCol = 0;
				continue;
			}
			if (kinds[i] === "fill") {
				const bounds = itemBounds?.get(item.key);
				const minW = Math.min(bounds?.minWidth ?? 1, maxColumns);
				const maxW = bounds?.maxWidth ?? maxColumns;
				if (currentCol + minW > maxColumns) currentCol = 0;
				let reserved = 0;
				for (let j = i + 1; j < n; j++) {
					if (kinds[j] !== "fixed") break;
					const nextW = widths[j];
					if (currentCol + minW + reserved + nextW <= maxColumns) reserved += nextW;
					else break;
				}
				const fillCols = Math.min(Math.max(minW, maxColumns - currentCol - reserved), maxW);
				resolved.set(item.key, fillCols);
				currentCol += fillCols;
			} else {
				const w = widths[i];
				if (currentCol + w > maxColumns) currentCol = 0;
				currentCol += w;
			}
			if (currentCol >= maxColumns) currentCol = 0;
		}
		return resolved;
	}
	const rowOccupancy = new Array(maxColumns).fill(0);
	let cursorRow = 0;
	let cursorCol = 0;
	const findFreeRun = (w) => {
		let r = cursorRow;
		let c = cursorCol;
		place: for (; r <= totalRows; r++) {
			c = r === cursorRow ? cursorCol : 0;
			while (c + w <= maxColumns) {
				let blocked = -1;
				for (let k = 0; k < w; k++) if (rowOccupancy[c + k] > r) {
					blocked = c + k;
					break;
				}
				if (blocked === -1) break place;
				c = blocked + 1;
			}
		}
		return [r, c];
	};
	for (let i = 0; i < n; i++) {
		const item = items[i];
		if (!item) continue;
		const h = heights[i];
		if (kinds[i] === "full") {
			let r = cursorRow;
			for (let c = 0; c < maxColumns; c++) if (rowOccupancy[c] > r) r = rowOccupancy[c];
			for (let c = 0; c < maxColumns; c++) rowOccupancy[c] = r + h;
			cursorRow = r + h;
			cursorCol = 0;
			continue;
		}
		if (kinds[i] === "fill") {
			const bounds = itemBounds?.get(item.key);
			const minW = Math.min(bounds?.minWidth ?? 1, maxColumns);
			const maxW = bounds?.maxWidth ?? maxColumns;
			const [fillStartRow, fillStartCol] = findFreeRun(minW);
			let runLength = minW;
			while (fillStartCol + runLength < maxColumns && rowOccupancy[fillStartCol + runLength] <= fillStartRow) runLength++;
			let reserved = 0;
			for (let j = i + 1; j < n; j++) {
				if (kinds[j] !== "fixed") break;
				const nextW = widths[j];
				if (minW + reserved + nextW <= runLength) reserved += nextW;
				else break;
			}
			const fillCols = Math.min(Math.max(minW, runLength - reserved), maxW);
			resolved.set(item.key, fillCols);
			for (let k = 0; k < fillCols; k++) rowOccupancy[fillStartCol + k] = fillStartRow + h;
			cursorRow = fillStartRow;
			cursorCol = fillStartCol + fillCols;
			continue;
		}
		const w = widths[i];
		const [r, c] = findFreeRun(w);
		for (let k = 0; k < w; k++) rowOccupancy[c + k] = r + h;
		cursorRow = r;
		cursorCol = c + w;
	}
	return resolved;
}
//#endregion
//#region ../packages/grid/src/dashboard-grid/grid.module.css
var grid, grid_module_default;
function init_grid_module() {
	return (init_grid_module = __esmMin((() => {
		grid = "_grid_19hje_1";
		grid_module_default = {
			grid,
			"drag-preview-frame": "_drag-preview-frame_19hje_16",
			"drag-preview-frame__lift": "_drag-preview-frame__lift_19hje_35",
			"wp-grid-drag-preview-shadow-enter": "_wp-grid-drag-preview-shadow-enter_19hje_1",
			"wp-grid-drag-preview-scale-enter": "_wp-grid-drag-preview-scale-enter_19hje_1",
			"is-exiting": "_is-exiting_19hje_85",
			"wp-grid-drag-preview-shadow-exit": "_wp-grid-drag-preview-shadow-exit_19hje_1",
			"wp-grid-drag-preview-scale-exit": "_wp-grid-drag-preview-scale-exit_19hje_1"
		};
	})))();
}
//#endregion
//#region ../packages/grid/src/dashboard-grid/index.tsx
var import_jsx_dev_runtime$1, _jsxFileName$1, dashboardDragDropAnimation, FALLBACK_GAP_PX, DEFAULT_COLUMNS, NO_SORT_STRATEGY, DashboardGrid;
function init_dashboard_grid() {
	return (init_dashboard_grid = __esmMin((() => {
		init_core_esm();
		init_sortable_esm();
		init_clsx();
		init_use_resize_observer(), init_use_event(), init_use_merge_refs();
		init_react();
		init_grid_item();
		init_array_move_with_pinned();
		init_grid_overlay();
		init_use_span_bounds();
		init_layout_shift_animation_module();
		init_item_exit_overlay();
		init_use_layout_shift_animation();
		init_use_item_exit_animation();
		init_drag_overlay_drop_animation();
		init_grid_module();
		import_jsx_dev_runtime$1 = require_jsx_dev_runtime();
		_jsxFileName$1 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/grid/src/dashboard-grid/index.tsx";
		dashboardDragDropAnimation = createDashboardDragDropAnimation(grid_module_default["drag-preview-frame"], grid_module_default["is-exiting"]);
		FALLBACK_GAP_PX = 24;
		DEFAULT_COLUMNS = 6;
		NO_SORT_STRATEGY = () => null;
		DashboardGrid = (0, import_react.forwardRef)(function UnforwardedDashboardGrid(props, ref) {
			const { layout, columns, children, className, style, rowHeight = "auto", minColumnWidth, itemLimits, editMode = false, onChangeLayout, onPreviewLayout, renderResizeHandle, renderDragPreview, renderGridOverlay, ...divProps } = props;
			const [temporaryLayout, setTemporaryLayout] = (0, import_react.useState)();
			const [activeId, setActiveId] = (0, import_react.useState)(null);
			const [isResizing, setIsResizing] = (0, import_react.useState)(false);
			const [resizeSnapPreview, setResizeSnapPreview] = (0, import_react.useState)(null);
			const latestLayoutRef = (0, import_react.useRef)(void 0);
			const lastReorderCursorRef = (0, import_react.useRef)(null);
			const resizeBaselineRef = (0, import_react.useRef)(null);
			const captureLayoutSnapshotRef = (0, import_react.useRef)(() => {});
			const childrenCacheRef = (0, import_react.useRef)(/* @__PURE__ */ new Map());
			const [gridRoot, setGridRoot] = (0, import_react.useState)(null);
			const [containerWidth, setContainerWidth] = (0, import_react.useState)(0);
			const [containerHeight, setContainerHeight] = (0, import_react.useState)(0);
			const [gapPx, setGapPx] = (0, import_react.useState)(FALLBACK_GAP_PX);
			const resizeObserverRef = useResizeObserver(([{ contentRect }]) => {
				setContainerWidth(contentRect.width);
				setContainerHeight(contentRect.height);
			});
			const mergedGridRef = useMergeRefs([
				setGridRoot,
				resizeObserverRef,
				ref
			]);
			(0, import_react.useLayoutEffect)(() => {
				if (!gridRoot) return;
				const { width, height } = gridRoot.getBoundingClientRect();
				if (width > 0) setContainerWidth(width);
				if (height > 0) setContainerHeight(height);
				const parsed = Number.parseFloat(window.getComputedStyle(gridRoot).columnGap);
				if (Number.isFinite(parsed) && parsed > 0) setGapPx(parsed);
			}, [gridRoot]);
			const effectiveColumns = (0, import_react.useMemo)(() => {
				if (!minColumnWidth) return columns ?? DEFAULT_COLUMNS;
				const totalWidthPerColumn = minColumnWidth + gapPx;
				const maxFit = Math.max(1, Math.floor((containerWidth + gapPx) / totalWidthPerColumn));
				return columns !== void 0 ? Math.min(columns, maxFit) : maxFit;
			}, [
				minColumnWidth,
				gapPx,
				containerWidth,
				columns
			]);
			const columnWidth = (containerWidth - (effectiveColumns - 1) * gapPx) / effectiveColumns;
			const minResizeWidthPx = gridSpanToPixelSize(1, 1, columnWidth, gapPx, null).widthPx;
			const rowHeightPx = typeof rowHeight === "number" ? rowHeight : null;
			const minResizeHeightPx = rowHeightPx === null ? void 0 : gridSpanToPixelSize(1, 1, columnWidth, gapPx, rowHeightPx).heightPx ?? void 0;
			const spanBoundsByKey = useSpanBounds(itemLimits, columnWidth, gapPx, rowHeightPx, effectiveColumns);
			const resizeLimitsByKey = useResizePixelLimits(spanBoundsByKey, columnWidth, gapPx, rowHeightPx);
			const sourceLayout = temporaryLayout ?? layout;
			const activeLayout = (0, import_react.useMemo)(() => {
				if (spanBoundsByKey.size === 0) return sourceLayout;
				let changed = false;
				const bounded = sourceLayout.map((item) => {
					const bounds = spanBoundsByKey.get(item.key);
					if (!bounds) return item;
					const width = typeof item.width === "number" ? clampSpan(item.width, bounds.minWidth, bounds.maxWidth) : item.width;
					const height = clampSpan(item.height ?? 1, bounds.minHeight, bounds.maxHeight);
					if (width === item.width && height === (item.height ?? 1)) return item;
					changed = true;
					return {
						...item,
						width,
						height
					};
				});
				return changed ? bounded : sourceLayout;
			}, [sourceLayout, spanBoundsByKey]);
			const layoutMap = (0, import_react.useMemo)(() => {
				const map = /* @__PURE__ */ new Map();
				activeLayout.forEach((item) => map.set(item.key, item));
				return map;
			}, [activeLayout]);
			const layoutKeys = (0, import_react.useMemo)(() => new Set(layout.map((item) => item.key)), [layout]);
			const items = (0, import_react.useMemo)(() => activeLayout.map((item, index) => ({
				item,
				index
			})).sort((a, b) => (a.item.order ?? a.index) - (b.item.order ?? b.index)).map(({ item }) => item.key), [activeLayout]);
			const resolvedItemMap = (0, import_react.useMemo)(() => {
				const fillWidths = resolveFillWidths(items, layoutMap, effectiveColumns, spanBoundsByKey);
				if (fillWidths.size === 0) return layoutMap;
				const map = /* @__PURE__ */ new Map();
				for (const [key, item] of layoutMap) {
					const fillW = fillWidths.get(key);
					map.set(key, fillW !== void 0 ? {
						...item,
						width: fillW
					} : item);
				}
				return map;
			}, [
				items,
				layoutMap,
				effectiveColumns,
				spanBoundsByKey
			]);
			const [childrenMap, actionableAreaMap, remaining, renderedByKey] = (0, import_react.useMemo)(() => {
				const childMap = /* @__PURE__ */ new Map();
				const actionableMap = /* @__PURE__ */ new Map();
				const rest = [];
				const byKey = /* @__PURE__ */ new Map();
				import_react.Children.forEach(children, (child) => {
					if (!(0, import_react.isValidElement)(child)) {
						rest.push(child);
						return;
					}
					const key = child.key?.toString();
					if (!key) {
						rest.push(child);
						return;
					}
					const typedChild = child;
					const { actionableArea } = typedChild.props;
					const stripped = actionableArea !== void 0 ? (0, import_react.cloneElement)(typedChild, { actionableArea: void 0 }) : child;
					byKey.set(key, stripped);
					if (layoutKeys.has(key)) {
						if (actionableArea !== void 0) actionableMap.set(key, actionableArea);
						childMap.set(key, stripped);
					} else rest.push(child);
				});
				return [
					childMap,
					actionableMap,
					rest,
					byKey
				];
			}, [children, layoutKeys]);
			(0, import_react.useLayoutEffect)(() => {
				for (const [key, child] of renderedByKey) childrenCacheRef.current.set(key, child);
			}, [renderedByKey]);
			const sensors = useSensors(useSensor(PointerSensor), useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates }));
			const handleDragStart = useEvent((event) => {
				setActiveId(String(event.active.id));
				lastReorderCursorRef.current = null;
			});
			const handleDragCancel = useEvent(() => {
				setActiveId(null);
				latestLayoutRef.current = void 0;
				lastReorderCursorRef.current = null;
				resizeBaselineRef.current = null;
				setIsResizing(false);
				setResizeSnapPreview(null);
				setTemporaryLayout(void 0);
			});
			const handleDragMove = useEvent((event) => {
				const { active, over } = event;
				if (!over || active.id === over.id) return;
				const activeRect = active.rect.current.translated;
				if (!activeRect) return;
				const activeCenterX = activeRect.left + activeRect.width / 2;
				const activeCenterY = activeRect.top + activeRect.height / 2;
				const lastCursor = lastReorderCursorRef.current;
				if (lastCursor) {
					const dx = activeCenterX - lastCursor.x;
					const dy = activeCenterY - lastCursor.y;
					if (dx * dx + dy * dy < 100) return;
				}
				const insertAfter = activeCenterX > over.rect.left + over.rect.width / 2;
				const currentIndex = items.indexOf(String(active.id));
				const overIndex = items.indexOf(String(over.id));
				let newIndex;
				if (insertAfter) newIndex = currentIndex > overIndex ? overIndex + 1 : overIndex;
				else newIndex = currentIndex > overIndex ? overIndex : overIndex - 1;
				newIndex = Math.max(0, Math.min(newIndex, items.length - 1));
				if (newIndex === currentIndex) return;
				const updatedItems = arrayMoveWithPinned(items, currentIndex, newIndex, (key) => layoutMap.get(key)?.draggable === false);
				if (updatedItems.every((key, index) => key === items[index])) return;
				const updatedLayout = (latestLayoutRef.current ?? layout).map((item) => ({
					...item,
					order: updatedItems.indexOf(item.key)
				}));
				lastReorderCursorRef.current = {
					x: activeCenterX,
					y: activeCenterY
				};
				latestLayoutRef.current = updatedLayout;
				captureLayoutSnapshotRef.current();
				setTemporaryLayout(updatedLayout);
				onPreviewLayout?.(updatedLayout);
			});
			const persistTemporaryLayout = useEvent(() => {
				const latest = latestLayoutRef.current;
				latestLayoutRef.current = void 0;
				resizeBaselineRef.current = null;
				setIsResizing(false);
				setResizeSnapPreview(null);
				if (!onChangeLayout || !latest) {
					setTemporaryLayout(void 0);
					return;
				}
				onChangeLayout(latest);
				setTemporaryLayout(void 0);
			});
			const handleResize = useEvent((id, delta) => {
				if (!editMode) return;
				if (!isResizing) setIsResizing(true);
				const relativeDelta = {
					width: Math.round(delta.width / (columnWidth + gapPx)),
					height: rowHeight === "auto" ? 0 : Math.round(delta.height / (rowHeight + gapPx))
				};
				const bounds = spanBoundsByKey.get(id);
				if (!resizeBaselineRef.current) {
					const baseItem = layoutMap.get(id);
					const resolvedItem = resolvedItemMap.get(id);
					let baseWidth;
					if (baseItem?.width === "full") baseWidth = bounds?.maxWidth ?? effectiveColumns;
					else if (baseItem?.width === "fill") baseWidth = typeof resolvedItem?.width === "number" ? resolvedItem.width : 1;
					else baseWidth = baseItem?.width ?? 1;
					resizeBaselineRef.current = {
						width: baseWidth,
						height: baseItem?.height ?? 1
					};
				}
				const baseline = resizeBaselineRef.current;
				const newWidth = clampSpan(baseline.width + relativeDelta.width, bounds?.minWidth ?? 1, bounds?.maxWidth ?? effectiveColumns);
				const newHeight = clampSpan(baseline.height + relativeDelta.height, bounds?.minHeight ?? 1, bounds?.maxHeight ?? Infinity);
				setResizeSnapPreview({
					id,
					snap: gridSpanToPixelSize(newWidth, newHeight, columnWidth, gapPx, rowHeightPx)
				});
				const currentItem = latestLayoutRef.current?.find((item) => item.key === id) ?? layoutMap.get(id);
				if (currentItem && currentItem.width === newWidth && (currentItem.height ?? 1) === newHeight) return;
				const updatedLayout = (latestLayoutRef.current ?? layout).map((item) => item.key === id ? {
					...item,
					width: newWidth,
					height: newHeight
				} : item);
				latestLayoutRef.current = updatedLayout;
				captureLayoutSnapshotRef.current();
				setTemporaryLayout(updatedLayout);
				onPreviewLayout?.(updatedLayout);
			});
			const activeClone = activeId ? childrenMap.get(activeId) : null;
			const DragPreview = renderDragPreview;
			const dragOverlayContent = activeId && activeClone ? /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)("div", {
				className: grid_module_default["drag-preview-frame"],
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)("div", {
					className: grid_module_default["drag-preview-frame__lift"],
					children: DragPreview ? /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(DragPreview, {
						itemId: activeId,
						children: activeClone
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 625,
						columnNumber: 8
					}, this) : activeClone
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 623,
					columnNumber: 6
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 622,
				columnNumber: 5
			}, this) : null;
			const Overlay = renderGridOverlay ?? GridOverlay;
			const overlayRowHeight = typeof rowHeight === "number" ? rowHeight : void 0;
			const overlayRows = (0, import_react.useMemo)(() => {
				if (overlayRowHeight === void 0 || containerHeight <= 0) return;
				const rowTile = overlayRowHeight + gapPx;
				return Math.max(1, Math.floor((containerHeight + gapPx) / rowTile));
			}, [
				overlayRowHeight,
				containerHeight,
				gapPx
			]);
			const gridOverlay = (0, import_react.useMemo)(() => /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(Overlay, {
				columns: effectiveColumns,
				rowHeight: overlayRowHeight,
				rows: overlayRows,
				isActive: editMode
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 655,
				columnNumber: 5
			}, this), [
				Overlay,
				editMode,
				effectiveColumns,
				overlayRowHeight,
				overlayRows
			]);
			const layoutFingerprint = (0, import_react.useMemo)(() => getLayoutFingerprint([...resolvedItemMap.values()]), [resolvedItemMap]);
			const excludeLayoutAnimationKey = activeId ?? (isResizing ? resizeSnapPreview?.id : null);
			const { captureLayoutSnapshot, getPositionsBeforeLastChange } = useLayoutShiftAnimation({
				container: gridRoot,
				enabled: editMode,
				layoutFingerprint,
				excludeItemKey: excludeLayoutAnimationKey
			});
			const { exitingItems, clearExitingItem } = useItemExitAnimation({
				container: gridRoot,
				enabled: editMode,
				layoutKeys,
				getPositionsBeforeLastChange,
				childrenCacheRef
			});
			const layoutAnimating = editMode;
			(0, import_react.useLayoutEffect)(() => {
				captureLayoutSnapshotRef.current = captureLayoutSnapshot;
			}, [captureLayoutSnapshot]);
			return /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(DndContext, {
				sensors,
				onDragStart: handleDragStart,
				onDragCancel: handleDragCancel,
				onDragMove: handleDragMove,
				onDragEnd: () => {
					persistTemporaryLayout();
					lastReorderCursorRef.current = null;
					setActiveId(null);
				},
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(SortableContext, {
					items,
					strategy: NO_SORT_STRATEGY,
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)("div", {
						...divProps,
						ref: mergedGridRef,
						className: clsx(grid_module_default.grid, layoutAnimating && layout_shift_animation_module_default["layout-animating"], className),
						"data-wp-grid-dragging": activeId || void 0,
						"data-wp-grid-resizing": isResizing || void 0,
						style: {
							...style,
							gridTemplateColumns: `repeat(${effectiveColumns}, minmax(0, 1fr))`,
							gridAutoRows: rowHeight
						},
						children: [
							gridOverlay,
							items.map((id) => {
								const limitsPx = resizeLimitsByKey.get(id);
								return /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(GridItem, {
									item: resolvedItemMap.get(id),
									maxColumns: spanBoundsByKey.get(id)?.maxWidth ?? effectiveColumns,
									disabled: !editMode,
									draggable: layoutMap.get(id)?.draggable !== false,
									resizable: layoutMap.get(id)?.resizable !== false,
									verticalResizable: rowHeight !== "auto",
									interacting: activeId !== null || isResizing,
									dragging: activeId !== null,
									onResize: handleResize,
									onResizeEnd: persistTemporaryLayout,
									resizeSnapPreview: resizeSnapPreview?.id === id ? resizeSnapPreview.snap : null,
									minResizeWidthPx: limitsPx?.minWidthPx ?? minResizeWidthPx,
									minResizeHeightPx: limitsPx?.minHeightPx ?? minResizeHeightPx,
									maxResizeWidthPx: limitsPx?.maxWidthPx,
									maxResizeHeightPx: limitsPx?.maxHeightPx ?? void 0,
									actionableArea: actionableAreaMap.get(id),
									renderResizeHandle,
									children: childrenMap.get(id)
								}, id, false, {
									fileName: _jsxFileName$1,
									lineNumber: 733,
									columnNumber: 9
								}, this);
							}),
							remaining,
							exitingItems.map(({ key, rect, child }) => /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(ItemExitOverlay, {
								itemKey: key,
								rect,
								onAnimationEnd: () => clearExitingItem(key),
								children: child
							}, `exiting-${key}`, false, {
								fileName: _jsxFileName$1,
								lineNumber: 785,
								columnNumber: 8
							}, this))
						]
					}, void 0, true, {
						fileName: _jsxFileName$1,
						lineNumber: 712,
						columnNumber: 6
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 711,
					columnNumber: 5
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(DragOverlay, {
					dropAnimation: dashboardDragDropAnimation,
					children: dragOverlayContent
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 796,
					columnNumber: 5
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$1,
				lineNumber: 698,
				columnNumber: 4
			}, this);
		});
		try {
			DashboardGrid.__docgenInfo = {
				"description": "2D packed dashboard grid with drag-to-reorder and resize handles.\nSupports fixed-column and responsive modes, `number | 'fill' | 'full'`\nwidths, and multi-row tiles.\n\nEach child's `key` must match an entry in the `layout` array;\nchildren without a match render at the end of the grid without\nexplicit placement and fall through CSS Grid's auto-flow.",
				"displayName": "DashboardGrid",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/grid/src/dashboard-grid/index.tsx",
				"methods": [],
				"props": {
					"layout": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/grid/src/dashboard-grid/types.ts",
							"name": "DashboardGridProps"
						}],
						"description": "Array of layout items.",
						"name": "layout",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/grid/src/dashboard-grid/types.ts",
							"name": "DashboardGridProps"
						},
						"required": true,
						"tags": {},
						"type": { "name": "DashboardGridLayoutItem[]" }
					},
					"children": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/grid/src/dashboard-grid/types.ts",
							"name": "DashboardGridProps"
						}],
						"description": "Grid children. Each child must carry a `key` that matches an\nentry in `layout`; children without a match render at the end\nof the grid without explicit placement and fall through CSS\nGrid's auto-flow.",
						"name": "children",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/grid/src/dashboard-grid/types.ts",
							"name": "DashboardGridProps"
						},
						"required": true,
						"tags": {},
						"type": { "name": "ReactNode" }
					},
					"className": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/grid/src/dashboard-grid/types.ts",
							"name": "DashboardGridProps"
						}],
						"description": "Additional CSS class on the grid root.",
						"name": "className",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/grid/src/dashboard-grid/types.ts",
							"name": "DashboardGridProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"style": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/grid/src/dashboard-grid/types.ts",
							"name": "DashboardGridProps"
						}],
						"description": "Inline styles applied to the grid root. Merged underneath the\ngrid's own layout styles, so the layout (`gridTemplateColumns`,\n`gridAutoRows`) always wins. The gap between tiles is owned by\nthe design-system gap token and is not configurable per\ninstance; override it via a theme or density change.",
						"name": "style",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/grid/src/dashboard-grid/types.ts",
							"name": "DashboardGridProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "CSSProperties" }
					},
					"rowHeight": {
						"defaultValue": { "value": "'auto'" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/grid/src/dashboard-grid/types.ts",
							"name": "DashboardGridProps"
						}],
						"description": "Height of each row in pixels, or `'auto'` to let the tallest\ntile in the row size it.",
						"name": "rowHeight",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/grid/src/dashboard-grid/types.ts",
							"name": "DashboardGridProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "number | \"auto\"" }
					},
					"editMode": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/grid/src/dashboard-grid/types.ts",
							"name": "DashboardGridProps"
						}],
						"description": "Whether the grid is in edit mode (allows dragging and\nrepositioning items).",
						"name": "editMode",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/grid/src/dashboard-grid/types.ts",
							"name": "DashboardGridProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"onChangeLayout": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/grid/src/dashboard-grid/types.ts",
							"name": "DashboardGridProps"
						}],
						"description": "Callback fired when the user commits a drag or resize. Receives\nthe resulting layout.",
						"name": "onChangeLayout",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/grid/src/dashboard-grid/types.ts",
							"name": "DashboardGridProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "((newLayout: DashboardGridLayoutItem[]) => void)" }
					},
					"onPreviewLayout": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/grid/src/dashboard-grid/types.ts",
							"name": "DashboardGridProps"
						}],
						"description": "Callback fired continuously during a drag or resize interaction\nwith the in-progress layout. Useful for live feedback in the\nsurface (e.g., displaying the current width/position). The final\ncommitted layout is still emitted via `onChangeLayout`.",
						"name": "onPreviewLayout",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/grid/src/dashboard-grid/types.ts",
							"name": "DashboardGridProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "((previewLayout: DashboardGridLayoutItem[]) => void)" }
					},
					"renderResizeHandle": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/grid/src/dashboard-grid/types.ts",
							"name": "DashboardGridProps"
						}],
						"description": "Override the default corner-triangle resize handle with a custom\ncomponent. The grid still owns the gesture (dnd-kit `<DndContext>`,\nthrottled delta loop) and passes the wiring to the consumer:\nspread `listeners` and `attributes` and assign `ref` on the\nelement that should receive the gesture. Use `disabled` and\n`verticalResizable` to adapt the visual to context.",
						"name": "renderResizeHandle",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/grid/src/dashboard-grid/types.ts",
							"name": "DashboardGridProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "ComponentType<ResizeHandleRenderProps>" }
					},
					"renderDragPreview": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/grid/src/dashboard-grid/types.ts",
							"name": "DashboardGridProps"
						}],
						"description": "Custom wrapper for the dragged-clone visual mounted inside\n`<DragOverlay>`. The surface always wraps the clone with a thin\nfunctional frame (lift scale, grabbing cursor, pointer pass-\nthrough) and mounts this component inside it; the consumer\nowns the visual chrome (shadow, radius, padding).\n\nWhen omitted, the cloned children render directly inside the\nfunctional frame so any chrome the consumer applied to the\npersistent tile carries through unchanged.\n\nToken-only adjustments (lift scale, placeholder opacity,\noutline color, placeholder radius) flow through CSS custom\nproperties documented in the README.",
						"name": "renderDragPreview",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/grid/src/dashboard-grid/types.ts",
							"name": "DashboardGridProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "ComponentType<DragPreviewRenderProps>" }
					},
					"renderGridOverlay": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/grid/src/dashboard-grid/types.ts",
							"name": "DashboardGridProps"
						}],
						"description": "Override the default edit-mode overlay (row-marker tiles per\ncolumn) with a custom component. The grid supplies the resolved\ncolumn count, row height, and row count; the consumer is\nresponsible for the visual.\n\nThe overlay only renders when `editMode` is true. When omitted,\nthe package's default visual is used.",
						"name": "renderGridOverlay",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/grid/src/dashboard-grid/types.ts",
							"name": "DashboardGridProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "ComponentType<GridOverlayRenderProps>" }
					},
					"columns": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/grid/src/dashboard-grid/types.ts",
							"name": "DashboardGridProps"
						}],
						"description": "Target column count, used as a cap. Defaults to six when neither\n`columns` nor `minColumnWidth` is set; with `minColumnWidth` set\nit can resolve lower on narrow containers.",
						"name": "columns",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/grid/src/dashboard-grid/types.ts",
							"name": "DashboardGridProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "number" }
					},
					"minColumnWidth": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/grid/src/dashboard-grid/types.ts",
							"name": "DashboardGridProps"
						}],
						"description": "Per-tile minimum width in pixels. Enables responsive mode: the\ncolumn count derives from container width, floored by this value,\ndown to 1.",
						"name": "minColumnWidth",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/grid/src/dashboard-grid/types.ts",
							"name": "DashboardGridProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "number" }
					},
					"itemLimits": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/grid/src/dashboard-grid/types.ts",
							"name": "DashboardGridProps"
						}],
						"description": "Per-item size limits in pixels, keyed by layout item key. Width\nbounds saturate at the column count; `'full'` and `'fill'` widths\nrespect a maximum.",
						"name": "itemLimits",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/grid/src/dashboard-grid/types.ts",
							"name": "DashboardGridProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "Record<string, GridItemLimits>" }
					}
				},
				"tags": {
					"example": "```jsx\nconst layout = [\n  { key: 'a', width: 2 },\n  { key: 'b', width: 'fill' },\n  { key: 'c', width: 'full' },\n];\n\n<DashboardGrid\n  layout={ layout }\n  columns={ 6 }\n  editMode\n  onChangeLayout={ setLayout }\n>\n  <div key=\"a\">A</div>\n  <div key=\"b\">B</div>\n  <div key=\"c\">C</div>\n</DashboardGrid>\n```",
					"param": "props Component props.\nref Forwarded to the grid's root `<div>`."
				}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/grid/src/dashboard-grid/stories/index.story.tsx
function Tile({ tone, children, actionableArea, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		...props,
		style: {
			backgroundColor: bgTokens[tone],
			color: fgTokens[tone],
			padding: "20px",
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
			height: "100%",
			boxSizing: "border-box",
			fontFamily: "var(--wpds-typography-font-family-body, -apple-system, system-ui, \"Segoe UI\", \"Roboto\", \"Oxygen-Sans\", \"Ubuntu\", \"Cantarell\", \"Helvetica Neue\", sans-serif)",
			fontSize: "var(--wpds-typography-font-size-sm, 12px)",
			...props?.style
		},
		children
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 95,
		columnNumber: 3
	}, this);
}
function TileActions({ isFill, isFull, onToggleFill, onToggleFull, onRemove }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		style: {
			position: "absolute",
			display: "flex",
			gap: 4,
			top: 4,
			right: 4,
			zIndex: 2
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IconButton, {
				size: "small",
				variant: "solid",
				tone: isFill ? "brand" : "neutral",
				icon: justify_stretch_default,
				label: "Fill available width",
				"aria-pressed": isFill,
				onClick: onToggleFill
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 140,
				columnNumber: 4
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IconButton, {
				size: "small",
				variant: "solid",
				tone: isFull ? "brand" : "neutral",
				icon: stretch_full_width_default,
				label: "Full width",
				"aria-pressed": isFull,
				onClick: onToggleFull
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 150,
				columnNumber: 4
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IconButton, {
				size: "small",
				variant: "solid",
				tone: "neutral",
				icon: close_default,
				label: "Remove",
				onClick: onRemove
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 160,
				columnNumber: 4
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 130,
		columnNumber: 3
	}, this);
}
function formatTileLabel(item) {
	let width;
	if (item.width === "fill") width = "width: \"fill\"";
	else if (item.width === "full") width = "width: \"full\"";
	else width = `width: ${item.width ?? 1}`;
	const height = (item.height ?? 1) > 1 ? `, height: ${item.height}` : "";
	return width + height;
}
function LayoutStatePanel({ label, layout, tone }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack, {
		direction: "column",
		gap: "sm",
		style: {
			width: 280,
			padding: 16,
			background: panelBgTokens[tone],
			border: `1px solid ${panelStrokeTokens[tone]}`,
			borderRadius: 8,
			fontFamily: "var(--wpds-typography-font-family-mono, \"Menlo\", \"Consolas\", monaco, monospace)",
			fontSize: 12,
			color: panelFgTokens[tone]
		},
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", {
			style: {
				fontFamily: "var(--wpds-typography-font-family-body, -apple-system, system-ui, \"Segoe UI\", \"Roboto\", \"Oxygen-Sans\", \"Ubuntu\", \"Cantarell\", \"Helvetica Neue\", sans-serif)",
				fontSize: 11,
				textTransform: "uppercase",
				letterSpacing: "0.04em"
			},
			children: label
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 226,
			columnNumber: 4
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("pre", {
			style: {
				margin: 0,
				overflow: "auto",
				lineHeight: 1.5
			},
			children: JSON.stringify(layout, null, 2)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 236,
			columnNumber: 4
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 212,
		columnNumber: 3
	}, this);
}
/**
* Override the default corner-triangle resize handle with a custom
* element via `renderResizeHandle`. The grid keeps the gesture
* machinery (dnd-kit context, throttled delta loop) and passes the
* wiring (`ref`, `listeners`, `attributes`) to the consumer — so the
* custom visual still drives the same resize behavior.
*/
function CustomResizeHandle({ ref, listeners, attributes, isResizing }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		ref,
		...listeners,
		...attributes,
		style: {
			position: "absolute",
			bottom: 0,
			insetInlineEnd: 0,
			display: "flex",
			cursor: "nwse-resize",
			opacity: isResizing ? .5 : 1,
			transition: "opacity 120ms ease"
		},
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, {
			icon: resizeCornerSE,
			size: 16
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 855,
			columnNumber: 4
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 841,
		columnNumber: 3
	}, this);
}
/**
* Example `renderDragPreview` wrapper: keeps the clone height chain
* intact. Lift, shadow, and motion live on the grid
* `.drag-preview-frame`; set `--wp-grid-drag-preview-radius` on the
* surface when the lift shadow should match rounded tiles (see widget
* dashboard).
*/
function CustomDragPreview({ children }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		style: { height: "100%" },
		children
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 868,
		columnNumber: 9
	}, this);
}
/**
* Example custom overlay supplied to `<DashboardGrid />` through the
* `renderGridOverlay` prop. Receives the grid's resolved column
* count, gap, row height, and `isActive` flag; this implementation
* drops the row dividers, swaps to an info tone, labels each column
* track with its index, and fades in/out on `isActive` toggles. The
* grid always mounts the overlay; the consumer owns the visual and
* its transition.
*
* @param props          Render props supplied by the grid.
* @param props.columns  Number of column tracks to mirror.
* @param props.isActive Whether the overlay should be visible.
*/
function NumberedOverlay({ columns, isActive }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		"aria-hidden": true,
		style: {
			position: "absolute",
			inset: 0,
			display: "grid",
			gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
			gap: "var(--wpds-dimension-gap-xl, 24px)",
			pointerEvents: "none",
			opacity: isActive ? 1 : 0,
			visibility: isActive ? "visible" : "hidden",
			transition: isActive ? "opacity 200ms ease, visibility 0s linear 0s" : "opacity 200ms ease, visibility 0s linear 200ms",
			backgroundImage: `repeating-linear-gradient(135deg, color-mix(in srgb, var(--wpds-color-background-surface-info, #deebfa) 24%, transparent) 0 6px, transparent 6px 12px)`
		},
		children: Array.from({ length: columns }).map((_, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			style: {
				outline: "1px dashed var(--wpds-color-stroke-surface-info, #adc6e2)",
				backgroundColor: "color-mix(in srgb, var(--wpds-color-background-surface-info, #deebfa) 10%, transparent)",
				position: "relative"
			},
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
				style: {
					position: "absolute",
					top: 4,
					insetInlineStart: 4,
					fontSize: 10,
					padding: "1px 6px",
					borderRadius: 2,
					background: "var(--wpds-color-background-surface-info, #deebfa)",
					color: "var(--wpds-color-foreground-content-info, #001b4f)",
					fontFamily: "var(--wpds-typography-font-family-mono, \"Menlo\", \"Consolas\", monaco, monospace)"
				},
				children: i + 1
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 996,
				columnNumber: 6
			}, this)
		}, i, false, {
			fileName: _jsxFileName,
			lineNumber: 986,
			columnNumber: 5
		}, this))
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 968,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime, _jsxFileName, meta, bgTokens, fgTokens, panelBgTokens, panelFgTokens, panelStrokeTokens, Default, Responsive, Layered, FillWidth, FullWidth, RowHeight, EditMode, LIMIT_LABELS, SizeLimits, resizeCornerSE, Customization, CustomGridOverlayStory;
function init_index_story() {
	return (init_index_story = __esmMin((() => {
		init_react();
		init_build_module$1();
		init_icon(), init_icon_button(), init_stack();
		init_dashboard_grid();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/grid/src/dashboard-grid/stories/index.story.tsx";
		meta = {
			id: "grid-dashboardgrid",
			title: "Widgets/Grid/DashboardGrid",
			component: DashboardGrid,
			tags: ["status-experimental"],
			args: {
				columns: 6,
				rowHeight: 80,
				editMode: false
			},
			argTypes: {
				children: { control: false },
				columns: {
					control: {
						type: "number",
						min: 1,
						max: 24,
						step: 1
					},
					description: "Total columns in fixed mode."
				},
				minColumnWidth: {
					control: {
						type: "number",
						min: 80,
						max: 600,
						step: 8
					},
					description: "Enables responsive mode. Per-column lower bound in pixels."
				},
				rowHeight: {
					control: {
						type: "number",
						min: 24,
						max: 400,
						step: 4
					},
					description: "Row height in pixels, or `auto`."
				},
				editMode: {
					control: { type: "boolean" },
					description: "Enables drag-to-reorder and resize."
				},
				className: { control: { type: "text" } },
				onChangeLayout: { action: "onChangeLayout" },
				onPreviewLayout: { action: "onPreviewLayout" }
			},
			parameters: { componentStatus: {
				status: "use-with-caution",
				whereUsed: "global",
				notes: "This package is under heavy development and likely to change."
			} }
		};
		bgTokens = {
			brand: "var(--wpds-color-background-surface-brand, color-mix(in oklch, var(--wp-admin-theme-color, #3858e9) 9%, white))",
			info: "var(--wpds-color-background-surface-info, #deebfa)",
			success: "var(--wpds-color-background-surface-success, #c2f8ca)",
			warning: "var(--wpds-color-background-surface-warning, #fde6be)",
			error: "var(--wpds-color-background-surface-error, #fae5e1)",
			neutral: "var(--wpds-color-background-surface-neutral-weak, #f4f4f4)"
		};
		fgTokens = {
			brand: "var(--wpds-color-foreground-content-neutral, #1e1e1e)",
			info: "var(--wpds-color-foreground-content-info, #001b4f)",
			success: "var(--wpds-color-foreground-content-success, #002900)",
			warning: "var(--wpds-color-foreground-content-warning, #2e1900)",
			error: "var(--wpds-color-foreground-content-error, #470000)",
			neutral: "var(--wpds-color-foreground-content-neutral, #1e1e1e)"
		};
		panelBgTokens = {
			warning: "var(--wpds-color-background-surface-warning, #fde6be)",
			success: "var(--wpds-color-background-surface-success, #c2f8ca)"
		};
		panelFgTokens = {
			warning: "var(--wpds-color-foreground-content-warning, #2e1900)",
			success: "var(--wpds-color-foreground-content-success, #002900)"
		};
		panelStrokeTokens = {
			warning: "var(--wpds-color-stroke-surface-warning, #e1bd7c)",
			success: "var(--wpds-color-stroke-surface-success, #92d39d)"
		};
		Default = { args: {
			layout: [
				{
					key: "a",
					width: 1
				},
				{
					key: "b",
					width: 3
				},
				{
					key: "c",
					width: 2
				},
				{
					key: "d",
					width: 4
				},
				{
					key: "e",
					width: 2
				}
			],
			columns: 6,
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tile, {
					tone: "brand",
					children: "width: 1"
				}, "a", false, {
					fileName: _jsxFileName,
					lineNumber: 265,
					columnNumber: 4
				}, void 0),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tile, {
					tone: "info",
					children: "width: 3"
				}, "b", false, {
					fileName: _jsxFileName,
					lineNumber: 268,
					columnNumber: 4
				}, void 0),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tile, {
					tone: "success",
					children: "width: 2"
				}, "c", false, {
					fileName: _jsxFileName,
					lineNumber: 271,
					columnNumber: 4
				}, void 0),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tile, {
					tone: "warning",
					children: "width: 4"
				}, "d", false, {
					fileName: _jsxFileName,
					lineNumber: 274,
					columnNumber: 4
				}, void 0),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tile, {
					tone: "error",
					children: "width: 2"
				}, "e", false, {
					fileName: _jsxFileName,
					lineNumber: 277,
					columnNumber: 4
				}, void 0)
			]
		} };
		Responsive = { args: {
			layout: [
				{
					key: "a",
					width: 1,
					order: 1
				},
				{
					key: "b",
					width: 2,
					order: 2
				},
				{
					key: "c",
					width: 2,
					order: 3
				},
				{
					key: "d",
					width: 1,
					order: 4
				},
				{
					key: "e",
					width: 2,
					order: 5
				},
				{
					key: "f",
					width: 2,
					order: 6
				}
			],
			rowHeight: 96,
			minColumnWidth: 192,
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tile, {
					tone: "brand",
					children: "width: 1"
				}, "a", false, {
					fileName: _jsxFileName,
					lineNumber: 302,
					columnNumber: 4
				}, void 0),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tile, {
					tone: "info",
					children: "width: 2"
				}, "b", false, {
					fileName: _jsxFileName,
					lineNumber: 305,
					columnNumber: 4
				}, void 0),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tile, {
					tone: "success",
					children: "width: 2"
				}, "c", false, {
					fileName: _jsxFileName,
					lineNumber: 308,
					columnNumber: 4
				}, void 0),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tile, {
					tone: "warning",
					children: "width: 1"
				}, "d", false, {
					fileName: _jsxFileName,
					lineNumber: 311,
					columnNumber: 4
				}, void 0),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tile, {
					tone: "error",
					children: "width: 2"
				}, "e", false, {
					fileName: _jsxFileName,
					lineNumber: 314,
					columnNumber: 4
				}, void 0),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tile, {
					tone: "neutral",
					children: "width: 2"
				}, "f", false, {
					fileName: _jsxFileName,
					lineNumber: 317,
					columnNumber: 4
				}, void 0)
			]
		} };
		Layered = { args: {
			layout: [
				{
					key: "a",
					width: 1,
					order: 1
				},
				{
					key: "b",
					width: 2,
					order: 2
				},
				{
					key: "c",
					width: 2,
					order: 3
				},
				{
					key: "d",
					width: 1,
					order: 4
				},
				{
					key: "e",
					width: 2,
					order: 5
				},
				{
					key: "f",
					width: 2,
					order: 6
				}
			],
			rowHeight: 96,
			columns: 6,
			minColumnWidth: 240,
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tile, {
					tone: "brand",
					children: "width: 1"
				}, "a", false, {
					fileName: _jsxFileName,
					lineNumber: 346,
					columnNumber: 4
				}, void 0),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tile, {
					tone: "info",
					children: "width: 2"
				}, "b", false, {
					fileName: _jsxFileName,
					lineNumber: 349,
					columnNumber: 4
				}, void 0),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tile, {
					tone: "success",
					children: "width: 2"
				}, "c", false, {
					fileName: _jsxFileName,
					lineNumber: 352,
					columnNumber: 4
				}, void 0),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tile, {
					tone: "warning",
					children: "width: 1"
				}, "d", false, {
					fileName: _jsxFileName,
					lineNumber: 355,
					columnNumber: 4
				}, void 0),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tile, {
					tone: "error",
					children: "width: 2"
				}, "e", false, {
					fileName: _jsxFileName,
					lineNumber: 358,
					columnNumber: 4
				}, void 0),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tile, {
					tone: "neutral",
					children: "width: 2"
				}, "f", false, {
					fileName: _jsxFileName,
					lineNumber: 361,
					columnNumber: 4
				}, void 0)
			]
		} };
		FillWidth = { args: {
			layout: [
				{
					key: "left",
					width: 1
				},
				{
					key: "fill",
					width: "fill"
				},
				{
					key: "right",
					width: 2
				},
				{
					key: "solo",
					width: "fill"
				}
			],
			columns: 6,
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tile, {
					tone: "brand",
					children: "width: 1"
				}, "left", false, {
					fileName: _jsxFileName,
					lineNumber: 383,
					columnNumber: 4
				}, void 0),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tile, {
					tone: "info",
					children: "width: \"fill\""
				}, "fill", false, {
					fileName: _jsxFileName,
					lineNumber: 386,
					columnNumber: 4
				}, void 0),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tile, {
					tone: "success",
					children: "width: 2"
				}, "right", false, {
					fileName: _jsxFileName,
					lineNumber: 389,
					columnNumber: 4
				}, void 0),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tile, {
					tone: "warning",
					children: "width: \"fill\" (alone in row)"
				}, "solo", false, {
					fileName: _jsxFileName,
					lineNumber: 392,
					columnNumber: 4
				}, void 0)
			]
		} };
		FullWidth = { args: {
			layout: [
				{
					key: "a",
					width: 2
				},
				{
					key: "b",
					width: 4
				},
				{
					key: "hero",
					width: "full",
					height: 1
				},
				{
					key: "c",
					width: 3
				},
				{
					key: "d",
					width: 3
				}
			],
			columns: 6,
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tile, {
					tone: "brand",
					children: "width: 2"
				}, "a", false, {
					fileName: _jsxFileName,
					lineNumber: 415,
					columnNumber: 4
				}, void 0),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tile, {
					tone: "info",
					children: "width: 4"
				}, "b", false, {
					fileName: _jsxFileName,
					lineNumber: 418,
					columnNumber: 4
				}, void 0),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tile, {
					tone: "success",
					children: "width: \"full\""
				}, "hero", false, {
					fileName: _jsxFileName,
					lineNumber: 421,
					columnNumber: 4
				}, void 0),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tile, {
					tone: "warning",
					children: "width: 3"
				}, "c", false, {
					fileName: _jsxFileName,
					lineNumber: 424,
					columnNumber: 4
				}, void 0),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tile, {
					tone: "error",
					children: "width: 3"
				}, "d", false, {
					fileName: _jsxFileName,
					lineNumber: 427,
					columnNumber: 4
				}, void 0)
			]
		} };
		RowHeight = { args: {
			layout: [
				{
					key: "a",
					width: 2,
					height: 2,
					order: 1
				},
				{
					key: "b",
					width: 2,
					height: 1,
					order: 2
				},
				{
					key: "c",
					width: 2,
					height: 3,
					order: 3
				},
				{
					key: "d",
					width: 4,
					height: 1,
					order: 4
				},
				{
					key: "e",
					width: 2,
					height: 1,
					order: 5
				}
			],
			columns: 6,
			rowHeight: 80,
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tile, {
					tone: "brand",
					children: "2 cols × 2 rows"
				}, "a", false, {
					fileName: _jsxFileName,
					lineNumber: 451,
					columnNumber: 4
				}, void 0),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tile, {
					tone: "info",
					children: "2 cols × 1 row"
				}, "b", false, {
					fileName: _jsxFileName,
					lineNumber: 454,
					columnNumber: 4
				}, void 0),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tile, {
					tone: "success",
					children: "2 cols × 3 rows"
				}, "c", false, {
					fileName: _jsxFileName,
					lineNumber: 457,
					columnNumber: 4
				}, void 0),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tile, {
					tone: "warning",
					children: "4 cols × 1 row"
				}, "d", false, {
					fileName: _jsxFileName,
					lineNumber: 460,
					columnNumber: 4
				}, void 0),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tile, {
					tone: "error",
					children: "2 cols × 1 row"
				}, "e", false, {
					fileName: _jsxFileName,
					lineNumber: 463,
					columnNumber: 4
				}, void 0)
			]
		} };
		EditMode = {
			parameters: { a11y: { test: "todo" } },
			args: {
				columns: 12,
				rowHeight: 80,
				editMode: true
			},
			render: function EditModeStory(args) {
				const [tiles, setTiles] = (0, import_react.useState)([
					{
						key: "fixed-1",
						width: 1,
						height: 1,
						order: 1,
						tone: "success"
					},
					{
						key: "fixed-1-1",
						width: 5,
						height: 1,
						order: 2,
						tone: "info"
					},
					{
						key: "fixed-2",
						width: 5,
						height: 1,
						order: 3,
						tone: "brand"
					},
					{
						key: "full",
						width: "full",
						height: 1,
						order: 4,
						tone: "neutral"
					},
					{
						key: "fixed-3",
						width: 2,
						height: 1,
						order: 5,
						tone: "warning"
					},
					{
						key: "fixed-4",
						width: 2,
						height: 1,
						order: 6,
						tone: "error"
					}
				]);
				const [previewLayout, setPreviewLayout] = (0, import_react.useState)(null);
				const layout = tiles.map(({ tone: _tone, ...item }) => item);
				const onChangeLayout = (next) => {
					setTiles(next.map((item) => {
						const existing = tiles.find((t) => t.key === item.key);
						return {
							...item,
							tone: existing?.tone ?? "neutral"
						};
					}));
					setPreviewLayout(null);
				};
				const removeTile = (key) => {
					setTiles(tiles.filter((tile) => tile.key !== key));
				};
				const toggleFill = (key) => {
					setTiles(tiles.map((tile) => tile.key === key ? {
						...tile,
						width: tile.width === "fill" ? void 0 : "fill"
					} : tile));
				};
				const toggleFull = (key) => {
					setTiles(tiles.map((tile) => tile.key === key ? {
						...tile,
						width: tile.width === "full" ? void 0 : "full"
					} : tile));
				};
				const tileElements = (0, import_react.useMemo)(() => tiles.map((tile) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tile, {
					tone: tile.tone,
					actionableArea: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TileActions, {
						isFill: tile.width === "fill",
						isFull: tile.width === "full",
						onToggleFill: () => toggleFill(tile.key),
						onToggleFull: () => toggleFull(tile.key),
						onRemove: () => removeTile(tile.key)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 612,
						columnNumber: 8
					}, this),
					children: formatTileLabel(tile)
				}, tile.key, false, {
					fileName: _jsxFileName,
					lineNumber: 608,
					columnNumber: 6
				}, this)), [tiles]);
				return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack, {
					direction: "row",
					gap: "lg",
					align: "flex-start",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						style: { width: "800px" },
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DashboardGrid, {
							...args,
							layout,
							onChangeLayout,
							onPreviewLayout: setPreviewLayout,
							children: tileElements
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 631,
							columnNumber: 6
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 630,
						columnNumber: 5
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LayoutStatePanel, {
						label: previewLayout ? "Staging" : "Committed",
						layout: previewLayout ?? layout,
						tone: previewLayout ? "warning" : "success"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 641,
						columnNumber: 5
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 629,
					columnNumber: 4
				}, this);
			}
		};
		LIMIT_LABELS = {
			floor: "min 320 × 200 px",
			ceiling: "max 500 × 400 px",
			ranged: "min 200, max 600 wide",
			bounded: "min 300 × 160, max 600 × 320 px"
		};
		SizeLimits = {
			name: "Per-Item Size Limits",
			parameters: { a11y: { test: "todo" } },
			args: {
				columns: 12,
				rowHeight: 80,
				editMode: true,
				itemLimits: {
					floor: {
						minWidth: 320,
						minHeight: 200
					},
					ceiling: {
						maxWidth: 500,
						maxHeight: 400
					},
					ranged: {
						minWidth: 200,
						maxWidth: 600
					},
					bounded: {
						minWidth: 300,
						minHeight: 160,
						maxWidth: 600,
						maxHeight: 320
					}
				}
			},
			render: function SizeLimitsRender(args) {
				const [tiles, setTiles] = (0, import_react.useState)([
					{
						key: "floor",
						width: 4,
						height: 2,
						order: 1,
						tone: "info"
					},
					{
						key: "ceiling",
						width: 2,
						height: 2,
						order: 2,
						tone: "warning"
					},
					{
						key: "ranged",
						width: 3,
						height: 1,
						order: 3,
						tone: "brand"
					},
					{
						key: "bounded",
						width: 2,
						height: 1,
						order: 4,
						tone: "success"
					},
					{
						key: "free",
						width: 3,
						height: 1,
						order: 5,
						tone: "neutral"
					}
				]);
				const [previewLayout, setPreviewLayout] = (0, import_react.useState)(null);
				const layout = tiles.map(({ tone: _tone, ...item }) => item);
				const onChangeLayout = (next) => {
					setTiles(next.map((item) => {
						const existing = tiles.find((t) => t.key === item.key);
						return {
							...item,
							tone: existing?.tone ?? "neutral"
						};
					}));
					setPreviewLayout(null);
				};
				const removeTile = (key) => {
					setTiles(tiles.filter((tile) => tile.key !== key));
				};
				const toggleFill = (key) => {
					setTiles(tiles.map((tile) => tile.key === key ? {
						...tile,
						width: tile.width === "fill" ? void 0 : "fill"
					} : tile));
				};
				const toggleFull = (key) => {
					setTiles(tiles.map((tile) => tile.key === key ? {
						...tile,
						width: tile.width === "full" ? void 0 : "full"
					} : tile));
				};
				const tileElements = (0, import_react.useMemo)(() => tiles.map((tile) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tile, {
					tone: tile.tone,
					actionableArea: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TileActions, {
						isFill: tile.width === "fill",
						isFull: tile.width === "full",
						onToggleFill: () => toggleFill(tile.key),
						onToggleFull: () => toggleFull(tile.key),
						onRemove: () => removeTile(tile.key)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 762,
						columnNumber: 8
					}, this),
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
						style: { textAlign: "center" },
						children: [
							formatTileLabel(tile),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 773,
								columnNumber: 8
							}, this),
							LIMIT_LABELS[tile.key] ?? "no limits"
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 771,
						columnNumber: 7
					}, this)
				}, tile.key, false, {
					fileName: _jsxFileName,
					lineNumber: 758,
					columnNumber: 6
				}, this)), [tiles]);
				return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack, {
					direction: "row",
					gap: "lg",
					align: "flex-start",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						style: { width: "800px" },
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DashboardGrid, {
							...args,
							layout,
							onChangeLayout,
							onPreviewLayout: setPreviewLayout,
							children: tileElements
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 785,
							columnNumber: 6
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 784,
						columnNumber: 5
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LayoutStatePanel, {
						label: previewLayout ? "Staging" : "Committed",
						layout: previewLayout ?? layout,
						tone: previewLayout ? "warning" : "success"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 795,
						columnNumber: 5
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 783,
					columnNumber: 4
				}, this);
			}
		};
		resizeCornerSE = /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", {
			xmlns: "http://www.w3.org/2000/svg",
			viewBox: "0 0 24 24",
			"aria-hidden": "true",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
				d: "M0 24L24 0",
				stroke: "currentColor",
				strokeWidth: "3",
				strokeLinecap: "round",
				fill: "none"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 815,
				columnNumber: 3
			}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("polygon", {
				points: "24,24 10,24 24,10",
				fill: "currentColor"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 823,
				columnNumber: 3
			}, void 0)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 810,
			columnNumber: 2
		}, void 0);
		Customization = {
			parameters: { a11y: { test: "todo" } },
			args: {
				columns: 6,
				rowHeight: 80,
				editMode: true,
				layout: [
					{
						key: "a",
						width: 2,
						height: 1
					},
					{
						key: "b",
						width: 4,
						height: 1
					},
					{
						key: "c",
						width: 3,
						height: 2
					},
					{
						key: "d",
						width: 3,
						height: 1
					},
					{
						key: "e",
						width: 3,
						height: 1
					}
				]
			},
			render: function CustomizationRender(args) {
				const [layout, setLayout] = (0, import_react.useState)(args.layout);
				const tiles = (0, import_react.useMemo)(() => [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tile, {
						tone: "brand",
						children: "A"
					}, "a", false, {
						fileName: _jsxFileName,
						lineNumber: 910,
						columnNumber: 5
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tile, {
						tone: "info",
						children: "B"
					}, "b", false, {
						fileName: _jsxFileName,
						lineNumber: 913,
						columnNumber: 5
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tile, {
						tone: "success",
						children: "C"
					}, "c", false, {
						fileName: _jsxFileName,
						lineNumber: 916,
						columnNumber: 5
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tile, {
						tone: "warning",
						children: "D"
					}, "d", false, {
						fileName: _jsxFileName,
						lineNumber: 919,
						columnNumber: 5
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tile, {
						tone: "error",
						children: "E"
					}, "e", false, {
						fileName: _jsxFileName,
						lineNumber: 922,
						columnNumber: 5
					}, this)
				], []);
				return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					style: {
						"--wp-grid-drag-preview-scale": "1.08",
						"--wp-grid-placeholder-opacity": "0.2",
						"--wp-grid-placeholder-outline-color": "var(--wpds-color-foreground-content-warning, #2e1900)",
						"--wp-grid-placeholder-radius": "12px"
					},
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DashboardGrid, {
						...args,
						layout,
						onChangeLayout: setLayout,
						renderResizeHandle: CustomResizeHandle,
						renderDragPreview: CustomDragPreview,
						children: tiles
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 939,
						columnNumber: 5
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 938,
					columnNumber: 4
				}, this);
			}
		};
		CustomGridOverlayStory = {
			parameters: { a11y: { test: "todo" } },
			name: "Custom Grid Overlay",
			args: {
				columns: 12,
				rowHeight: 80,
				editMode: true,
				layout: [
					{
						key: "a",
						width: 3,
						height: 1
					},
					{
						key: "b",
						width: 5,
						height: 1
					},
					{
						key: "c",
						width: 4,
						height: 1
					},
					{
						key: "d",
						width: 2,
						height: 2
					},
					{
						key: "e",
						width: 6,
						height: 1
					}
				]
			},
			render: function CustomGridOverlayRender(args) {
				const [layout, setLayout] = (0, import_react.useState)(args.layout);
				const tiles = (0, import_react.useMemo)(() => [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tile, {
						tone: "brand",
						children: "A"
					}, "a", false, {
						fileName: _jsxFileName,
						lineNumber: 1059,
						columnNumber: 5
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tile, {
						tone: "info",
						children: "B"
					}, "b", false, {
						fileName: _jsxFileName,
						lineNumber: 1062,
						columnNumber: 5
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tile, {
						tone: "success",
						children: "C"
					}, "c", false, {
						fileName: _jsxFileName,
						lineNumber: 1065,
						columnNumber: 5
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tile, {
						tone: "warning",
						children: "D"
					}, "d", false, {
						fileName: _jsxFileName,
						lineNumber: 1068,
						columnNumber: 5
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tile, {
						tone: "error",
						children: "E"
					}, "e", false, {
						fileName: _jsxFileName,
						lineNumber: 1071,
						columnNumber: 5
					}, this)
				], []);
				return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DashboardGrid, {
					...args,
					layout,
					onChangeLayout: setLayout,
					renderGridOverlay: NumberedOverlay,
					children: tiles
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 1079,
					columnNumber: 4
				}, this);
			}
		};
		try {
			Default.__docgenInfo = {
				"description": "Static grid with a fixed number of columns. Each item declares its\ncolumn span via `width`. Items flow left-to-right and wrap to new\nrows as the total exceeds `columns`.",
				"displayName": "Default",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/grid/src/dashboard-grid/stories/index.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			Responsive.__docgenInfo = {
				"description": "Responsive grid: the column count is derived from the container\nwidth using `minColumnWidth` as the lower bound per column. A\n`ResizeObserver` recomputes the count on container resize.",
				"displayName": "Responsive",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/grid/src/dashboard-grid/stories/index.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			Layered.__docgenInfo = {
				"description": "Layered configuration: `columns` caps the count and\n`minColumnWidth` enforces a per-tile width floor. The grid renders\nup to `columns` columns on wide containers and reduces the count\non narrow ones whenever fitting all of them would push tiles\nbelow `minColumnWidth`. Resize the preview to see the cap apply\non wide widths and the floor reduce the count on narrow widths.",
				"displayName": "Layered",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/grid/src/dashboard-grid/stories/index.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			FillWidth.__docgenInfo = {
				"description": "A `width: 'fill'` item expands to cover the remaining columns in\nits row. Mix it with fixed-width items on either side to build\nsidebar-like layouts that adapt to the column count.",
				"displayName": "FillWidth",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/grid/src/dashboard-grid/stories/index.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			FullWidth.__docgenInfo = {
				"description": "A `width: 'full'` item spans every column (`grid-column: 1 / -1`),\nforcing a row break around it. Useful for dividers, hero banners,\nor embedded content that should always take the full width.",
				"displayName": "FullWidth",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/grid/src/dashboard-grid/stories/index.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			RowHeight.__docgenInfo = {
				"description": "Numeric `rowHeight` lets items span multiple rows via `height`.\nCombined with `width`, this produces tile-based dashboards where\neach cell can be tuned independently.",
				"displayName": "RowHeight",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/grid/src/dashboard-grid/stories/index.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			EditMode.__docgenInfo = {
				"description": "Edit mode with drag, resize, and all width modes. While `editMode`\nis on, `<DashboardGrid />` paints its default overlay behind the\ntiles to visualize the underlying template: rounded row-marker\ntiles in each column when `rowHeight` is numeric. The overlay\ndisappears when `editMode` flips back to `false`.\n\nTheme the default look in place via `--wp-grid-overlay-tile-bg`,\nor replace the visual wholesale by passing `renderGridOverlay`.\nSee the `Custom Grid Overlay` story for a full override example.\n\nA state panel shows the raw layout JSON. Drag items to reorder;\nresize from the bottom-right handle. Keyboard sensor is enabled:\nuse Tab to focus an item, Space to grab, arrow keys to move, Space\nto drop.",
				"displayName": "EditMode",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/grid/src/dashboard-grid/stories/index.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			SizeLimits.__docgenInfo = {
				"description": "Per-item size limits via `itemLimits`, in pixels: a floor, a ceiling,\na width range, and a tile bounded on both axes. Constrained tiles pin\nat their bounds while the pointer overshoots, and release commits\nspans inside the limits. `'full'` and `'fill'` stop at the tile's\nmaximum span; the per-tile toggles exercise both.",
				"displayName": "SizeLimits",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/grid/src/dashboard-grid/stories/index.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			Customization.__docgenInfo = {
				"description": "Exercises the three customization vectors on a single grid:\n\n1. `renderResizeHandle` swaps the default corner triangle for a\n   custom diagonal-arrow icon.\n2. `renderDragPreview` wraps the dragged clone (here only for the\n   height chain; lift and shadow stay on the grid frame).\n3. CSS custom properties on an ancestor retheme the lift scale,\n   placeholder opacity, placeholder outline color, and placeholder\n   border-radius without touching the package.\n\nToggle `editMode`, then drag and resize a tile to see all three\nrespond.",
				"displayName": "Customization",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/grid/src/dashboard-grid/stories/index.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			CustomGridOverlayStory.__docgenInfo = {
				"description": "Replaces the package's default edit-mode overlay with a custom\nvisual through the `renderGridOverlay` prop. The grid mounts the\nsupplied component as a sibling behind the tiles whenever\n`editMode` is on, passing the resolved `{ columns, rowHeight }`\nso the override can reproduce the column and row tracks\npixel-accurately without re-deriving them.\n\nHere the override (see `NumberedOverlay` above) swaps the warning\ntone for info, drops the row dividers, and labels each column\ntrack with its index. Pass `renderGridOverlay={ () => null }` to\nsuppress the overlay entirely while keeping `editMode` interactions\non.",
				"displayName": "CustomGridOverlayStory",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/grid/src/dashboard-grid/stories/index.story.tsx",
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
					originalSource: "{\n  args: {\n    layout: [{\n      key: 'a',\n      width: 1\n    }, {\n      key: 'b',\n      width: 3\n    }, {\n      key: 'c',\n      width: 2\n    }, {\n      key: 'd',\n      width: 4\n    }, {\n      key: 'e',\n      width: 2\n    }],\n    columns: 6,\n    children: [<Tile key=\"a\" tone=\"brand\">\n                width: 1\n            </Tile>, <Tile key=\"b\" tone=\"info\">\n                width: 3\n            </Tile>, <Tile key=\"c\" tone=\"success\">\n                width: 2\n            </Tile>, <Tile key=\"d\" tone=\"warning\">\n                width: 4\n            </Tile>, <Tile key=\"e\" tone=\"error\">\n                width: 2\n            </Tile>]\n  }\n}",
					...Default.parameters?.docs?.source
				},
				description: {
					story: "Static grid with a fixed number of columns. Each item declares its\ncolumn span via `width`. Items flow left-to-right and wrap to new\nrows as the total exceeds `columns`.",
					...Default.parameters?.docs?.description
				}
			}
		};
		Responsive.parameters = {
			...Responsive.parameters,
			docs: {
				...Responsive.parameters?.docs,
				source: {
					originalSource: "{\n  args: {\n    layout: [{\n      key: 'a',\n      width: 1,\n      order: 1\n    }, {\n      key: 'b',\n      width: 2,\n      order: 2\n    }, {\n      key: 'c',\n      width: 2,\n      order: 3\n    }, {\n      key: 'd',\n      width: 1,\n      order: 4\n    }, {\n      key: 'e',\n      width: 2,\n      order: 5\n    }, {\n      key: 'f',\n      width: 2,\n      order: 6\n    }],\n    rowHeight: 96,\n    minColumnWidth: 192,\n    children: [<Tile key=\"a\" tone=\"brand\">\n                width: 1\n            </Tile>, <Tile key=\"b\" tone=\"info\">\n                width: 2\n            </Tile>, <Tile key=\"c\" tone=\"success\">\n                width: 2\n            </Tile>, <Tile key=\"d\" tone=\"warning\">\n                width: 1\n            </Tile>, <Tile key=\"e\" tone=\"error\">\n                width: 2\n            </Tile>, <Tile key=\"f\" tone=\"neutral\">\n                width: 2\n            </Tile>]\n  }\n}",
					...Responsive.parameters?.docs?.source
				},
				description: {
					story: "Responsive grid: the column count is derived from the container\nwidth using `minColumnWidth` as the lower bound per column. A\n`ResizeObserver` recomputes the count on container resize.",
					...Responsive.parameters?.docs?.description
				}
			}
		};
		Layered.parameters = {
			...Layered.parameters,
			docs: {
				...Layered.parameters?.docs,
				source: {
					originalSource: "{\n  args: {\n    layout: [{\n      key: 'a',\n      width: 1,\n      order: 1\n    }, {\n      key: 'b',\n      width: 2,\n      order: 2\n    }, {\n      key: 'c',\n      width: 2,\n      order: 3\n    }, {\n      key: 'd',\n      width: 1,\n      order: 4\n    }, {\n      key: 'e',\n      width: 2,\n      order: 5\n    }, {\n      key: 'f',\n      width: 2,\n      order: 6\n    }],\n    rowHeight: 96,\n    columns: 6,\n    minColumnWidth: 240,\n    children: [<Tile key=\"a\" tone=\"brand\">\n                width: 1\n            </Tile>, <Tile key=\"b\" tone=\"info\">\n                width: 2\n            </Tile>, <Tile key=\"c\" tone=\"success\">\n                width: 2\n            </Tile>, <Tile key=\"d\" tone=\"warning\">\n                width: 1\n            </Tile>, <Tile key=\"e\" tone=\"error\">\n                width: 2\n            </Tile>, <Tile key=\"f\" tone=\"neutral\">\n                width: 2\n            </Tile>]\n  }\n}",
					...Layered.parameters?.docs?.source
				},
				description: {
					story: "Layered configuration: `columns` caps the count and\n`minColumnWidth` enforces a per-tile width floor. The grid renders\nup to `columns` columns on wide containers and reduces the count\non narrow ones whenever fitting all of them would push tiles\nbelow `minColumnWidth`. Resize the preview to see the cap apply\non wide widths and the floor reduce the count on narrow widths.",
					...Layered.parameters?.docs?.description
				}
			}
		};
		FillWidth.parameters = {
			...FillWidth.parameters,
			docs: {
				...FillWidth.parameters?.docs,
				source: {
					originalSource: "{\n  args: {\n    layout: [{\n      key: 'left',\n      width: 1\n    }, {\n      key: 'fill',\n      width: 'fill'\n    }, {\n      key: 'right',\n      width: 2\n    }, {\n      key: 'solo',\n      width: 'fill'\n    }],\n    columns: 6,\n    children: [<Tile key=\"left\" tone=\"brand\">\n                width: 1\n            </Tile>, <Tile key=\"fill\" tone=\"info\">\n                width: &quot;fill&quot;\n            </Tile>, <Tile key=\"right\" tone=\"success\">\n                width: 2\n            </Tile>, <Tile key=\"solo\" tone=\"warning\">\n                width: &quot;fill&quot; (alone in row)\n            </Tile>]\n  }\n}",
					...FillWidth.parameters?.docs?.source
				},
				description: {
					story: "A `width: 'fill'` item expands to cover the remaining columns in\nits row. Mix it with fixed-width items on either side to build\nsidebar-like layouts that adapt to the column count.",
					...FillWidth.parameters?.docs?.description
				}
			}
		};
		FullWidth.parameters = {
			...FullWidth.parameters,
			docs: {
				...FullWidth.parameters?.docs,
				source: {
					originalSource: "{\n  args: {\n    layout: [{\n      key: 'a',\n      width: 2\n    }, {\n      key: 'b',\n      width: 4\n    }, {\n      key: 'hero',\n      width: 'full',\n      height: 1\n    }, {\n      key: 'c',\n      width: 3\n    }, {\n      key: 'd',\n      width: 3\n    }],\n    columns: 6,\n    children: [<Tile key=\"a\" tone=\"brand\">\n                width: 2\n            </Tile>, <Tile key=\"b\" tone=\"info\">\n                width: 4\n            </Tile>, <Tile key=\"hero\" tone=\"success\">\n                width: &quot;full&quot;\n            </Tile>, <Tile key=\"c\" tone=\"warning\">\n                width: 3\n            </Tile>, <Tile key=\"d\" tone=\"error\">\n                width: 3\n            </Tile>]\n  }\n}",
					...FullWidth.parameters?.docs?.source
				},
				description: {
					story: "A `width: 'full'` item spans every column (`grid-column: 1 / -1`),\nforcing a row break around it. Useful for dividers, hero banners,\nor embedded content that should always take the full width.",
					...FullWidth.parameters?.docs?.description
				}
			}
		};
		RowHeight.parameters = {
			...RowHeight.parameters,
			docs: {
				...RowHeight.parameters?.docs,
				source: {
					originalSource: "{\n  args: {\n    layout: [{\n      key: 'a',\n      width: 2,\n      height: 2,\n      order: 1\n    }, {\n      key: 'b',\n      width: 2,\n      height: 1,\n      order: 2\n    }, {\n      key: 'c',\n      width: 2,\n      height: 3,\n      order: 3\n    }, {\n      key: 'd',\n      width: 4,\n      height: 1,\n      order: 4\n    }, {\n      key: 'e',\n      width: 2,\n      height: 1,\n      order: 5\n    }],\n    columns: 6,\n    rowHeight: 80,\n    children: [<Tile key=\"a\" tone=\"brand\">\n                2 cols × 2 rows\n            </Tile>, <Tile key=\"b\" tone=\"info\">\n                2 cols × 1 row\n            </Tile>, <Tile key=\"c\" tone=\"success\">\n                2 cols × 3 rows\n            </Tile>, <Tile key=\"d\" tone=\"warning\">\n                4 cols × 1 row\n            </Tile>, <Tile key=\"e\" tone=\"error\">\n                2 cols × 1 row\n            </Tile>]\n  }\n}",
					...RowHeight.parameters?.docs?.source
				},
				description: {
					story: "Numeric `rowHeight` lets items span multiple rows via `height`.\nCombined with `width`, this produces tile-based dashboards where\neach cell can be tuned independently.",
					...RowHeight.parameters?.docs?.description
				}
			}
		};
		EditMode.parameters = {
			...EditMode.parameters,
			docs: {
				...EditMode.parameters?.docs,
				source: {
					originalSource: "{\n  parameters: {\n    // FIXME: Resize handles are nameless aria commands; edit mode nests interactive controls (aria-command-name, nested-interactive).\n    // See: https://github.com/WordPress/gutenberg/issues/81596\n    a11y: {\n      test: 'todo'\n    }\n  },\n  args: {\n    columns: 12,\n    rowHeight: 80,\n    editMode: true\n  },\n  render: function EditModeStory(args) {\n    const initialLayout: (DashboardGridLayoutItem & {\n      tone: Tone;\n    })[] = [{\n      key: 'fixed-1',\n      width: 1,\n      height: 1,\n      order: 1,\n      tone: 'success'\n    }, {\n      key: 'fixed-1-1',\n      width: 5,\n      height: 1,\n      order: 2,\n      tone: 'info'\n    }, {\n      key: 'fixed-2',\n      width: 5,\n      height: 1,\n      order: 3,\n      tone: 'brand'\n    }, {\n      key: 'full',\n      width: 'full',\n      height: 1,\n      order: 4,\n      tone: 'neutral'\n    }, {\n      key: 'fixed-3',\n      width: 2,\n      height: 1,\n      order: 5,\n      tone: 'warning'\n    }, {\n      key: 'fixed-4',\n      width: 2,\n      height: 1,\n      order: 6,\n      tone: 'error'\n    }];\n    const [tiles, setTiles] = useState(initialLayout);\n    const [previewLayout, setPreviewLayout] = useState<DashboardGridLayoutItem[] | null>(null);\n    const layout: DashboardGridLayoutItem[] = tiles.map(({\n      tone: _tone,\n      ...item\n    }) => item);\n    const onChangeLayout = (next: DashboardGridLayoutItem[]) => {\n      setTiles(next.map(item => {\n        const existing = tiles.find(t => t.key === item.key);\n        return {\n          ...item,\n          tone: existing?.tone ?? 'neutral'\n        };\n      }));\n      setPreviewLayout(null);\n    };\n    const removeTile = (key: string) => {\n      setTiles(tiles.filter(tile => tile.key !== key));\n    };\n    const toggleFill = (key: string) => {\n      setTiles(tiles.map(tile => tile.key === key ? {\n        ...tile,\n        width: tile.width === 'fill' ? undefined : 'fill'\n      } : tile));\n    };\n    const toggleFull = (key: string) => {\n      setTiles(tiles.map(tile => tile.key === key ? {\n        ...tile,\n        width: tile.width === 'full' ? undefined : 'full'\n      } : tile));\n    };\n\n    // Memoize the Tile elements so the grid's `children` prop keeps\n    // a stable reference across parent re-renders driven by\n    // onPreviewLayout. Without this, every preview tick produces a\n    // fresh array of elements and the grid's children walk has to\n    // re-run on each frame of a resize gesture.\n    const tileElements = useMemo(() => tiles.map(tile => <Tile key={tile.key} tone={tile.tone} actionableArea={<TileActions isFill={tile.width === 'fill'} isFull={tile.width === 'full'} onToggleFill={() => toggleFill(tile.key)} onToggleFull={() => toggleFull(tile.key)} onRemove={() => removeTile(tile.key)} />}>\n                        {formatTileLabel(tile)}\n                    </Tile>),\n    // eslint-disable-next-line react-hooks/exhaustive-deps\n    [tiles]);\n    return <Stack direction=\"row\" gap=\"lg\" align=\"flex-start\">\n                <div style={{\n        width: '800px'\n      }}>\n                    <DashboardGrid {...args} layout={layout} onChangeLayout={onChangeLayout} onPreviewLayout={setPreviewLayout}>\n                        {tileElements}\n                    </DashboardGrid>\n                </div>\n\n                <LayoutStatePanel label={previewLayout ? 'Staging' : 'Committed'} layout={previewLayout ?? layout} tone={previewLayout ? 'warning' : 'success'} />\n            </Stack>;\n  }\n}",
					...EditMode.parameters?.docs?.source
				},
				description: {
					story: "Edit mode with drag, resize, and all width modes. While `editMode`\nis on, `<DashboardGrid />` paints its default overlay behind the\ntiles to visualize the underlying template: rounded row-marker\ntiles in each column when `rowHeight` is numeric. The overlay\ndisappears when `editMode` flips back to `false`.\n\nTheme the default look in place via `--wp-grid-overlay-tile-bg`,\nor replace the visual wholesale by passing `renderGridOverlay`.\nSee the `Custom Grid Overlay` story for a full override example.\n\nA state panel shows the raw layout JSON. Drag items to reorder;\nresize from the bottom-right handle. Keyboard sensor is enabled:\nuse Tab to focus an item, Space to grab, arrow keys to move, Space\nto drop.",
					...EditMode.parameters?.docs?.description
				}
			}
		};
		SizeLimits.parameters = {
			...SizeLimits.parameters,
			docs: {
				...SizeLimits.parameters?.docs,
				source: {
					originalSource: "{\n  name: 'Per-Item Size Limits',\n  parameters: {\n    // FIXME: Resize handles are nameless aria commands; edit mode nests interactive controls (aria-command-name, nested-interactive).\n    // See: https://github.com/WordPress/gutenberg/issues/81596\n    a11y: {\n      test: 'todo'\n    }\n  },\n  args: {\n    columns: 12,\n    rowHeight: 80,\n    editMode: true,\n    itemLimits: {\n      floor: {\n        minWidth: 320,\n        minHeight: 200\n      },\n      ceiling: {\n        maxWidth: 500,\n        maxHeight: 400\n      },\n      ranged: {\n        minWidth: 200,\n        maxWidth: 600\n      },\n      bounded: {\n        minWidth: 300,\n        minHeight: 160,\n        maxWidth: 600,\n        maxHeight: 320\n      }\n    }\n  },\n  render: function SizeLimitsRender(args) {\n    const initialLayout: (DashboardGridLayoutItem & {\n      tone: Tone;\n    })[] = [{\n      key: 'floor',\n      width: 4,\n      height: 2,\n      order: 1,\n      tone: 'info'\n    }, {\n      key: 'ceiling',\n      width: 2,\n      height: 2,\n      order: 2,\n      tone: 'warning'\n    }, {\n      key: 'ranged',\n      width: 3,\n      height: 1,\n      order: 3,\n      tone: 'brand'\n    }, {\n      key: 'bounded',\n      width: 2,\n      height: 1,\n      order: 4,\n      tone: 'success'\n    }, {\n      key: 'free',\n      width: 3,\n      height: 1,\n      order: 5,\n      tone: 'neutral'\n    }];\n    const [tiles, setTiles] = useState(initialLayout);\n    const [previewLayout, setPreviewLayout] = useState<DashboardGridLayoutItem[] | null>(null);\n    const layout: DashboardGridLayoutItem[] = tiles.map(({\n      tone: _tone,\n      ...item\n    }) => item);\n    const onChangeLayout = (next: DashboardGridLayoutItem[]) => {\n      setTiles(next.map(item => {\n        const existing = tiles.find(t => t.key === item.key);\n        return {\n          ...item,\n          tone: existing?.tone ?? 'neutral'\n        };\n      }));\n      setPreviewLayout(null);\n    };\n    const removeTile = (key: string) => {\n      setTiles(tiles.filter(tile => tile.key !== key));\n    };\n    const toggleFill = (key: string) => {\n      setTiles(tiles.map(tile => tile.key === key ? {\n        ...tile,\n        width: tile.width === 'fill' ? undefined : 'fill'\n      } : tile));\n    };\n    const toggleFull = (key: string) => {\n      setTiles(tiles.map(tile => tile.key === key ? {\n        ...tile,\n        width: tile.width === 'full' ? undefined : 'full'\n      } : tile));\n    };\n    const tileElements = useMemo(() => tiles.map(tile => <Tile key={tile.key} tone={tile.tone} actionableArea={<TileActions isFill={tile.width === 'fill'} isFull={tile.width === 'full'} onToggleFill={() => toggleFill(tile.key)} onToggleFull={() => toggleFull(tile.key)} onRemove={() => removeTile(tile.key)} />}>\n                        <span style={{\n        textAlign: 'center'\n      }}>\n                            {formatTileLabel(tile)}\n                            <br />\n                            {LIMIT_LABELS[tile.key] ?? 'no limits'}\n                        </span>\n                    </Tile>),\n    // eslint-disable-next-line react-hooks/exhaustive-deps\n    [tiles]);\n    return <Stack direction=\"row\" gap=\"lg\" align=\"flex-start\">\n                <div style={{\n        width: '800px'\n      }}>\n                    <DashboardGrid {...args} layout={layout} onChangeLayout={onChangeLayout} onPreviewLayout={setPreviewLayout}>\n                        {tileElements}\n                    </DashboardGrid>\n                </div>\n\n                <LayoutStatePanel label={previewLayout ? 'Staging' : 'Committed'} layout={previewLayout ?? layout} tone={previewLayout ? 'warning' : 'success'} />\n            </Stack>;\n  }\n}",
					...SizeLimits.parameters?.docs?.source
				},
				description: {
					story: "Per-item size limits via `itemLimits`, in pixels: a floor, a ceiling,\na width range, and a tile bounded on both axes. Constrained tiles pin\nat their bounds while the pointer overshoots, and release commits\nspans inside the limits. `'full'` and `'fill'` stop at the tile's\nmaximum span; the per-tile toggles exercise both.",
					...SizeLimits.parameters?.docs?.description
				}
			}
		};
		Customization.parameters = {
			...Customization.parameters,
			docs: {
				...Customization.parameters?.docs,
				source: {
					originalSource: "{\n  parameters: {\n    // FIXME: Resize handles are nameless aria commands; edit mode nests interactive controls (aria-command-name, nested-interactive).\n    // See: https://github.com/WordPress/gutenberg/issues/81596\n    a11y: {\n      test: 'todo'\n    }\n  },\n  args: {\n    columns: 6,\n    rowHeight: 80,\n    editMode: true,\n    layout: [{\n      key: 'a',\n      width: 2,\n      height: 1\n    }, {\n      key: 'b',\n      width: 4,\n      height: 1\n    }, {\n      key: 'c',\n      width: 3,\n      height: 2\n    }, {\n      key: 'd',\n      width: 3,\n      height: 1\n    }, {\n      key: 'e',\n      width: 3,\n      height: 1\n    }]\n  },\n  render: function CustomizationRender(args) {\n    const [layout, setLayout] = useState<DashboardGridLayoutItem[]>(args.layout);\n    const tiles = useMemo(() => [<Tile key=\"a\" tone=\"brand\">\n                    A\n                </Tile>, <Tile key=\"b\" tone=\"info\">\n                    B\n                </Tile>, <Tile key=\"c\" tone=\"success\">\n                    C\n                </Tile>, <Tile key=\"d\" tone=\"warning\">\n                    D\n                </Tile>, <Tile key=\"e\" tone=\"error\">\n                    E\n                </Tile>], []);\n    const customTokens = {\n      '--wp-grid-drag-preview-scale': '1.08',\n      '--wp-grid-placeholder-opacity': '0.2',\n      '--wp-grid-placeholder-outline-color': 'var(--wpds-color-foreground-content-warning)',\n      '--wp-grid-placeholder-radius': '12px'\n    } as React.CSSProperties;\n    return <div style={customTokens}>\n                <DashboardGrid {...args} layout={layout} onChangeLayout={setLayout} renderResizeHandle={CustomResizeHandle} renderDragPreview={CustomDragPreview}>\n                    {tiles}\n                </DashboardGrid>\n            </div>;\n  }\n}",
					...Customization.parameters?.docs?.source
				},
				description: {
					story: "Exercises the three customization vectors on a single grid:\n\n1. `renderResizeHandle` swaps the default corner triangle for a\n   custom diagonal-arrow icon.\n2. `renderDragPreview` wraps the dragged clone (here only for the\n   height chain; lift and shadow stay on the grid frame).\n3. CSS custom properties on an ancestor retheme the lift scale,\n   placeholder opacity, placeholder outline color, and placeholder\n   border-radius without touching the package.\n\nToggle `editMode`, then drag and resize a tile to see all three\nrespond.",
					...Customization.parameters?.docs?.description
				}
			}
		};
		CustomGridOverlayStory.parameters = {
			...CustomGridOverlayStory.parameters,
			docs: {
				...CustomGridOverlayStory.parameters?.docs,
				source: {
					originalSource: "{\n  parameters: {\n    // FIXME: Resize handles are nameless aria commands; edit mode nests interactive controls (aria-command-name, nested-interactive).\n    // See: https://github.com/WordPress/gutenberg/issues/81596\n    a11y: {\n      test: 'todo'\n    }\n  },\n  name: 'Custom Grid Overlay',\n  args: {\n    columns: 12,\n    rowHeight: 80,\n    editMode: true,\n    layout: [{\n      key: 'a',\n      width: 3,\n      height: 1\n    }, {\n      key: 'b',\n      width: 5,\n      height: 1\n    }, {\n      key: 'c',\n      width: 4,\n      height: 1\n    }, {\n      key: 'd',\n      width: 2,\n      height: 2\n    }, {\n      key: 'e',\n      width: 6,\n      height: 1\n    }]\n  },\n  render: function CustomGridOverlayRender(args) {\n    const [layout, setLayout] = useState<DashboardGridLayoutItem[]>(args.layout);\n    const tiles = useMemo(() => [<Tile key=\"a\" tone=\"brand\">\n                    A\n                </Tile>, <Tile key=\"b\" tone=\"info\">\n                    B\n                </Tile>, <Tile key=\"c\" tone=\"success\">\n                    C\n                </Tile>, <Tile key=\"d\" tone=\"warning\">\n                    D\n                </Tile>, <Tile key=\"e\" tone=\"error\">\n                    E\n                </Tile>], []);\n    return <DashboardGrid {...args} layout={layout} onChangeLayout={setLayout} renderGridOverlay={NumberedOverlay}>\n                {tiles}\n            </DashboardGrid>;\n  }\n}",
					...CustomGridOverlayStory.parameters?.docs?.source
				},
				description: {
					story: "Replaces the package's default edit-mode overlay with a custom\nvisual through the `renderGridOverlay` prop. The grid mounts the\nsupplied component as a sibling behind the tiles whenever\n`editMode` is on, passing the resolved `{ columns, rowHeight }`\nso the override can reproduce the column and row tracks\npixel-accurately without re-deriving them.\n\nHere the override (see `NumberedOverlay` above) swaps the warning\ntone for info, drops the row dividers, and labels each column\ntrack with its index. Pass `renderGridOverlay={ () => null }` to\nsuppress the overlay entirely while keeping `editMode` interactions\non.",
					...CustomGridOverlayStory.parameters?.docs?.description
				}
			}
		};
	})))();
}
//#endregion
init_index_story();
export { CustomGridOverlayStory, Customization, Default, EditMode, FillWidth, FullWidth, Layered, Responsive, RowHeight, SizeLimits, meta as default };
