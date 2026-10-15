import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as useMergeRefs, t as init_use_merge_refs } from "./use-merge-refs-BAtuPB1L.js";
import { n as useThrottle, t as init_use_throttle } from "./use-throttle-CqaG38Rj.js";
import { o as clsx, s as init_clsx } from "./iframe-D4D-SsYo.js";
import { d as defaultDropAnimationSideEffects, f as init_core_esm, n as arrayMove, o as DndContext, p as useDraggable, r as init_sortable_esm, u as defaultDropAnimationConfiguration } from "./sortable.esm-BptoXGkA.js";
//#region ../packages/grid/src/shared/actionable-area-slot.module.css
var actionable_area_slot_module_default;
function init_actionable_area_slot_module() {
	return (init_actionable_area_slot_module = __esmMin((() => {
		actionable_area_slot_module_default = { "actionable-area-slot": "_actionable-area-slot_14bsw_1" };
	})))();
}
//#endregion
//#region ../packages/grid/src/shared/grid-item-key.ts
var GRID_ITEM_DATA_KEY;
function init_grid_item_key() {
	return (init_grid_item_key = __esmMin((() => {
		GRID_ITEM_DATA_KEY = "data-wp-grid-item-key";
	})))();
}
//#endregion
//#region ../packages/grid/src/shared/resize-handle.module.css
var resize_handle_module_default;
function init_resize_handle_module() {
	return (init_resize_handle_module = __esmMin((() => {
		resize_handle_module_default = {
			"resize-handle-slot": "_resize-handle-slot_1o7hm_5",
			"resize-handle": "_resize-handle_1o7hm_5",
			"is-horizontal-only": "_is-horizontal-only_1o7hm_62"
		};
	})))();
}
//#endregion
//#region ../packages/grid/src/shared/resize-handle.tsx
/**
* Sets `document.documentElement.style.cursor` for the duration of a drag
* and restores it on cleanup. Lives outside the component so cursor writes
* are not analyzed as mutating values derived from refs in the component
* body (react-hooks/immutability).
*
* @param getDocument Returns the document whose root element should receive
*                    the cursor (handle owner, or global `document`).
* @param cursor      CSS cursor value while active.
* @return Cleanup that restores the previous cursor.
*/
function lockDocumentCursorWhileActive(getDocument, cursor) {
	const root = getDocument().documentElement;
	const previous = root.style.cursor;
	root.style.cursor = cursor;
	return () => {
		root.style.cursor = previous;
	};
}
function ResizeHandle({ itemId, verticalResizable = true, renderResizeHandle }) {
	const { attributes, listeners, setNodeRef, isDragging } = useDraggable({
		id: "draggable",
		data: { itemId }
	});
	const ownerDocumentRef = (0, import_react.useRef)(null);
	const setOwnerDocumentRef = (0, import_react.useCallback)((node) => {
		ownerDocumentRef.current = node?.ownerDocument ?? null;
	}, []);
	const mergedRef = useMergeRefs([setOwnerDocumentRef, setNodeRef]);
	(0, import_react.useEffect)(() => {
		if (!isDragging) return;
		return lockDocumentCursorWhileActive(() => ownerDocumentRef.current ?? document, verticalResizable ? "nwse-resize" : "ew-resize");
	}, [isDragging, verticalResizable]);
	if (renderResizeHandle) return /* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)(renderResizeHandle, {
		ref: mergedRef,
		listeners,
		attributes,
		verticalResizable,
		isResizing: isDragging,
		itemId
	}, void 0, false, {
		fileName: _jsxFileName$2,
		lineNumber: 68,
		columnNumber: 4
	}, this);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)("div", {
		ref: mergedRef,
		className: clsx(resize_handle_module_default["resize-handle"], !verticalResizable && resize_handle_module_default["is-horizontal-only"]),
		...listeners,
		...attributes
	}, void 0, false, {
		fileName: _jsxFileName$2,
		lineNumber: 80,
		columnNumber: 3
	}, this);
}
/**
* Renders a corner resize handle inside an isolated `<DndContext>`.
* Reports the cursor offset since the gesture started (in pixels)
* via `onResize`, throttled to one animation frame so the grid
* commit loop runs at most once per paint.
*
* Auto-scroll is enabled with a tight trigger zone and a low
* acceleration so a resize gesture near the viewport edge scrolls
* the page only when the user deliberately pushes against the very
* edge, and even then at a pace the user can interrupt by releasing.
* Default tuning would otherwise produce a runaway loop where the
* page scrolls fast, dnd-kit's document-coordinate `delta` inflates
* with the scroll, and the tile keeps growing without further user
* input.
*
* @param props Component props.
*/
function ResizeHandleWrapper(props) {
	const throttledResize = useThrottle((delta) => {
		if (props.onResize) props.onResize(delta);
	}, 16);
	const handleDragMove = (event) => {
		if (event.active.id !== "draggable") return;
		throttledResize({
			width: event.delta.x,
			height: event.delta.y
		});
	};
	const handleDragEnd = () => {
		if (props.onResizeEnd) props.onResizeEnd();
	};
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)(DndContext, {
		autoScroll: {
			threshold: {
				x: .005,
				y: .005
			},
			acceleration: 1
		},
		onDragMove: handleDragMove,
		onDragEnd: handleDragEnd,
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)("div", {
			className: resize_handle_module_default["resize-handle-slot"],
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)(ResizeHandle, { ...props }, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 148,
				columnNumber: 5
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName$2,
			lineNumber: 147,
			columnNumber: 4
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$2,
		lineNumber: 139,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime$2, _jsxFileName$2;
function init_resize_handle() {
	return (init_resize_handle = __esmMin((() => {
		init_core_esm();
		init_clsx();
		init_react();
		init_use_merge_refs(), init_use_throttle();
		init_resize_handle_module();
		import_jsx_dev_runtime$2 = require_jsx_dev_runtime();
		_jsxFileName$2 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/grid/src/shared/resize-handle.tsx";
		try {
			ResizeHandleWrapper.__docgenInfo = {
				"description": "Renders a corner resize handle inside an isolated `<DndContext>`.\nReports the cursor offset since the gesture started (in pixels)\nvia `onResize`, throttled to one animation frame so the grid\ncommit loop runs at most once per paint.\n\nAuto-scroll is enabled with a tight trigger zone and a low\nacceleration so a resize gesture near the viewport edge scrolls\nthe page only when the user deliberately pushes against the very\nedge, and even then at a pace the user can interrupt by releasing.\nDefault tuning would otherwise produce a runaway loop where the\npage scrolls fast, dnd-kit's document-coordinate `delta` inflates\nwith the scroll, and the tile keeps growing without further user\ninput.",
				"displayName": "resizehandle",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/grid/src/shared/resize-handle.tsx",
				"methods": [],
				"props": {
					"itemId": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/grid/src/shared/types.ts",
							"name": "ResizeHandleProps"
						}],
						"description": "Owning item's `key`. Forwarded as `data.itemId` on the draggable\nso the parent can correlate the gesture with a tile if needed.",
						"name": "itemId",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/grid/src/shared/types.ts",
							"name": "ResizeHandleProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"verticalResizable": {
						"defaultValue": { "value": "true" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/grid/src/shared/types.ts",
							"name": "ResizeHandleProps"
						}],
						"description": "Whether the handle should track vertical movement. When false,\nthe handle still appears but only emits horizontal deltas, and\nthe cursor is constrained to the column resize axis.",
						"name": "verticalResizable",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/grid/src/shared/types.ts",
							"name": "ResizeHandleProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"onResize": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/grid/src/shared/types.ts",
							"name": "ResizeHandleProps"
						}],
						"description": "Callback fired while the handle is being dragged. Receives the\ncursor offset from the gesture start in pixels.",
						"name": "onResize",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/grid/src/shared/types.ts",
							"name": "ResizeHandleProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "((delta: ResizeDelta) => void)" }
					},
					"onResizeEnd": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/grid/src/shared/types.ts",
							"name": "ResizeHandleProps"
						}],
						"description": "Callback fired when the gesture ends.",
						"name": "onResizeEnd",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/grid/src/shared/types.ts",
							"name": "ResizeHandleProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "(() => void)" }
					},
					"renderResizeHandle": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/grid/src/shared/types.ts",
							"name": "ResizeHandleProps"
						}],
						"description": "Component that overrides the default corner triangle with a\ncustom element. Receives gesture wiring (`ref`, `listeners`,\n`attributes`) plus context. The surface keeps ownership of the\n`<DndContext>` and the throttled delta loop; consumers are only\nresponsible for the visual.",
						"name": "renderResizeHandle",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/grid/src/shared/types.ts",
							"name": "ResizeHandleProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "ComponentType<ResizeHandleRenderProps>" }
					}
				},
				"tags": { "param": "props Component props." }
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/grid/src/shared/resize-snap.ts
/**
* Clamps a resize delta so the tile cannot shrink below the given
* minimum size, nor grow past the given maximum when one applies.
*
* @param delta              Cursor offset from the gesture start in pixels.
* @param initialSize        Size captured at gesture start.
* @param initialSize.width  Initial width in pixels.
* @param initialSize.height Initial height in pixels.
* @param minSize            Minimum tile size in pixels.
* @param minSize.width      Minimum width in pixels.
* @param minSize.height     Minimum height in pixels, when vertical resize applies.
* @param maxSize            Maximum tile size in pixels, when one applies.
* @param maxSize.width      Maximum width in pixels.
* @param maxSize.height     Maximum height in pixels, when vertical resize applies.
*/
function clampResizeDelta(delta, initialSize, minSize, maxSize) {
	const maxShrinkWidth = initialSize.width - minSize.width;
	let width = Math.max(delta.width, -maxShrinkWidth);
	if (maxSize?.width !== void 0) width = Math.min(width, maxSize.width - initialSize.width);
	if (minSize.height === void 0) return {
		...delta,
		width
	};
	const maxShrinkHeight = initialSize.height - minSize.height;
	let height = Math.max(delta.height, -maxShrinkHeight);
	if (maxSize?.height !== void 0) height = Math.min(height, maxSize.height - initialSize.height);
	return {
		width,
		height
	};
}
/**
* Converts grid spans to pixel width/height for the resize-preview
* outline, using the same track math the surface uses for placement.
*
* @param columnSpan  Number of columns the snap target spans.
* @param rowSpan     Number of rows the snap target spans.
* @param columnWidth Width of one column track in pixels.
* @param gapPx       Gap between tracks in pixels.
* @param rowHeightPx Row track height in pixels, or `null` when rows
*                    are content-sized.
*/
function gridSpanToPixelSize(columnSpan, rowSpan, columnWidth, gapPx, rowHeightPx) {
	return {
		widthPx: columnSpan * columnWidth + (columnSpan - 1) * gapPx,
		heightPx: rowHeightPx === null ? null : rowSpan * rowHeightPx + (rowSpan - 1) * gapPx
	};
}
/**
* Converts per-item pixel limits to span bounds with the track math of
* `gridSpanToPixelSize`. Minimums round up, maximums round down, every
* bound stays at one track or more, and a minimum wins over a smaller
* maximum. Width bounds saturate at the column count; height bounds
* resolve to `1`/`Infinity` when rows are content-sized.
*
* @param limits      Size limits in pixels.
* @param columnWidth Width of one column track in pixels.
* @param gapPx       Gap between tracks in pixels.
* @param rowHeightPx Row track height in pixels, or `null` when rows
*                    are content-sized.
* @param maxColumns  Number of column tracks in the surface.
*/
function pixelLimitsToSpanBounds(limits, columnWidth, gapPx, rowHeightPx, maxColumns) {
	let minWidth = 1;
	let maxWidth = maxColumns;
	if (columnWidth > 0) {
		const columnTrack = columnWidth + gapPx;
		if (limits.minWidth) minWidth = Math.min(Math.max(1, Math.ceil((limits.minWidth + gapPx) / columnTrack)), maxColumns);
		if (limits.maxWidth) maxWidth = Math.min(Math.max(1, Math.floor((limits.maxWidth + gapPx) / columnTrack)), maxColumns);
	}
	let minHeight = 1;
	let maxHeight = Infinity;
	if (rowHeightPx !== null && rowHeightPx > 0) {
		const rowTrack = rowHeightPx + gapPx;
		if (limits.minHeight) minHeight = Math.max(1, Math.ceil((limits.minHeight + gapPx) / rowTrack));
		if (limits.maxHeight) maxHeight = Math.max(1, Math.floor((limits.maxHeight + gapPx) / rowTrack));
	}
	return {
		minWidth,
		minHeight,
		maxWidth: Math.max(maxWidth, minWidth),
		maxHeight: Math.max(maxHeight, minHeight)
	};
}
/**
* Clamps a span to the inclusive `[ min, max ]` range.
*
* @param span Span in tracks.
* @param min  Lowest allowed span.
* @param max  Highest allowed span.
*/
function clampSpan(span, min, max) {
	return Math.min(Math.max(span, min), max);
}
/**
* Converts span bounds back to pixel limits for the resize gesture,
* using the same track math as `gridSpanToPixelSize`.
*
* @param bounds      Span bounds in whole tracks.
* @param columnWidth Width of one column track in pixels.
* @param gapPx       Gap between tracks in pixels.
* @param rowHeightPx Row track height in pixels, or `null` when rows
*                    are content-sized.
*/
function spanBoundsToPixelLimits(bounds, columnWidth, gapPx, rowHeightPx) {
	const min = gridSpanToPixelSize(bounds.minWidth, bounds.minHeight, columnWidth, gapPx, rowHeightPx);
	const hasMaxHeight = Number.isFinite(bounds.maxHeight);
	const max = gridSpanToPixelSize(bounds.maxWidth, hasMaxHeight ? bounds.maxHeight : 1, columnWidth, gapPx, hasMaxHeight ? rowHeightPx : null);
	return {
		minWidthPx: min.widthPx,
		minHeightPx: min.heightPx,
		maxWidthPx: max.widthPx,
		maxHeightPx: max.heightPx
	};
}
function init_resize_snap() {
	return (init_resize_snap = __esmMin((() => {})))();
}
//#endregion
//#region ../packages/grid/src/shared/array-move-with-pinned.ts
/**
* Moves the item at `from` to `to` while pinned items hold their index:
* the free items reorder among the remaining slots. Moving a pinned item
* is a no-op.
*
* @param items    Items in display order.
* @param from     Index of the moved item.
* @param to       Target index.
* @param isPinned Whether an item holds its index.
* @return The reordered items.
*/
function arrayMoveWithPinned(items, from, to, isPinned) {
	const pinned = new Set(items.filter(isPinned));
	if (pinned.size === 0) return arrayMove(items, from, to);
	const free = arrayMove(items, from, to).filter((item) => !pinned.has(item));
	let nextFree = 0;
	return items.map((item) => {
		if (pinned.has(item)) return item;
		const next = free[nextFree];
		nextFree += 1;
		return next;
	});
}
function init_array_move_with_pinned() {
	return (init_array_move_with_pinned = __esmMin((() => {
		init_sortable_esm();
	})))();
}
//#endregion
//#region ../packages/grid/src/shared/grid-overlay.module.css
var overlay, row, column, grid_overlay_module_default;
function init_grid_overlay_module() {
	return (init_grid_overlay_module = __esmMin((() => {
		overlay = "_overlay_1a19n_1";
		row = "_row_1a19n_21";
		column = "_column_1a19n_22";
		grid_overlay_module_default = {
			overlay,
			"is-active": "_is-active_1a19n_11",
			row,
			"has-rows": "_has-rows_1a19n_22",
			column,
			"grid-overlay-tile-in": "_grid-overlay-tile-in_1a19n_1"
		};
	})))();
}
//#endregion
//#region ../packages/grid/src/shared/grid-overlay.tsx
/**
* Default edit-mode overlay: one column per track, each holding `rows`
* row-marker tiles when `rowHeight` is uniform. Used by both surfaces
* and replaceable via `renderGridOverlay`. Reveals with a diagonal
* wave on activate and releases paint cost while inactive.
*
* @param props           Render props supplied by the surface.
* @param props.columns   Column tracks to mirror.
* @param props.rowHeight Uniform row height in pixels; omitted for
*                        content-sized rows, which skip row markers.
* @param props.rows      Row tracks per column; omitted when unknown.
* @param props.isActive  When `false`, the overlay fades out.
*/
function GridOverlay({ columns, rowHeight, rows, isActive }) {
	const showRows = typeof rowHeight === "number" && typeof rows === "number" && rows > 0;
	const [waveKey, setWaveKey] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		if (isActive) setWaveKey((key) => key + 1);
	}, [isActive]);
	const style = {
		gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
		...showRows ? { "--wp-grid-overlay-row-height": `${rowHeight}px` } : {}
	};
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)("div", {
		"aria-hidden": true,
		className: clsx(grid_overlay_module_default.overlay, isActive && grid_overlay_module_default["is-active"], showRows && grid_overlay_module_default["has-rows"]),
		style,
		children: Array.from({ length: columns }, (_column, columnIndex) => /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)("div", {
			className: grid_overlay_module_default.column,
			style: {
				"--wp-grid-overlay-column-index": columnIndex,
				"--wp-grid-overlay-row-index": 0
			},
			children: showRows && Array.from({ length: rows }, (_row, rowIndex) => /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)("div", {
				className: grid_overlay_module_default.row,
				style: { "--wp-grid-overlay-row-index": rowIndex }
			}, rowIndex, false, {
				fileName: _jsxFileName$1,
				lineNumber: 68,
				columnNumber: 8
			}, this))
		}, columnIndex, false, {
			fileName: _jsxFileName$1,
			lineNumber: 56,
			columnNumber: 5
		}, this))
	}, waveKey, false, {
		fileName: _jsxFileName$1,
		lineNumber: 45,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime$1, _jsxFileName$1;
function init_grid_overlay() {
	return (init_grid_overlay = __esmMin((() => {
		init_clsx();
		init_react();
		init_grid_overlay_module();
		import_jsx_dev_runtime$1 = require_jsx_dev_runtime();
		_jsxFileName$1 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/grid/src/shared/grid-overlay.tsx";
		try {
			GridOverlay.__docgenInfo = {
				"description": "Default edit-mode overlay: one column per track, each holding `rows`\nrow-marker tiles when `rowHeight` is uniform. Used by both surfaces\nand replaceable via `renderGridOverlay`. Reveals with a diagonal\nwave on activate and releases paint cost while inactive.",
				"displayName": "GridOverlay",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/grid/src/shared/grid-overlay.tsx",
				"methods": [],
				"props": {
					"columns": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/grid/src/shared/types.ts",
							"name": "GridOverlayRenderProps"
						}],
						"description": "Number of column tracks in the active surface. In responsive\nmode (`minColumnWidth`), this is the count derived from the\ncontainer width, not the prop value.",
						"name": "columns",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/grid/src/shared/types.ts",
							"name": "GridOverlayRenderProps"
						},
						"required": true,
						"tags": {},
						"type": { "name": "number" }
					},
					"rowHeight": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/grid/src/shared/types.ts",
							"name": "GridOverlayRenderProps"
						}],
						"description": "Row height in pixels for surfaces with uniform rows. Omitted on\nsurfaces with content-driven heights (lanes) or when row height\nis `'auto'`; in those cases row markers are omitted.",
						"name": "rowHeight",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/grid/src/shared/types.ts",
							"name": "GridOverlayRenderProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "number" }
					},
					"rows": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/grid/src/shared/types.ts",
							"name": "GridOverlayRenderProps"
						}],
						"description": "Number of row tracks to mirror in each column. Derived from the\ngrid container height when `rowHeight` is numeric; omitted when\nrow height is unknown.",
						"name": "rows",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/grid/src/shared/types.ts",
							"name": "GridOverlayRenderProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "number" }
					},
					"isActive": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/grid/src/shared/types.ts",
							"name": "GridOverlayRenderProps"
						}],
						"description": "Whether the overlay should be visible. Surfaces render the\noverlay even when `false` so the implementation can transition\nopacity in and out; while `false`, the overlay must hide itself\n(and ideally release paint cost via `visibility: hidden` or an\nequivalent).",
						"name": "isActive",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/grid/src/shared/types.ts",
							"name": "GridOverlayRenderProps"
						},
						"required": true,
						"tags": {},
						"type": { "name": "boolean" }
					}
				},
				"tags": { "param": "props Render props supplied by the surface.\nprops.columns Column tracks to mirror.\nprops.rowHeight Uniform row height in pixels; omitted for\ncontent-sized rows, which skip row markers.\nprops.rows Row tracks per column; omitted when unknown.\nprops.isActive When `false`, the overlay fades out." }
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/grid/src/shared/use-span-bounds.ts
/**
* Quantizes per-item pixel limits to span bounds for the current
* geometry. The map keeps its identity while every bound is unchanged,
* so container width ticks and fresh `itemLimits` objects do not
* invalidate the layout memos or the sortable context downstream.
*
* @param itemLimits  Per-item pixel limits, keyed by layout item key.
* @param columnWidth Width of one column track in pixels.
* @param gapPx       Gap between tracks in pixels.
* @param rowHeightPx Row track height in pixels, or `null` when rows
*                    are content-sized.
* @param maxColumns  Number of column tracks in the surface.
*/
function useSpanBounds(itemLimits, columnWidth, gapPx, rowHeightPx, maxColumns) {
	const computed = (0, import_react.useMemo)(() => {
		if (!itemLimits) return NO_BOUNDS;
		const map = /* @__PURE__ */ new Map();
		for (const [key, limits] of Object.entries(itemLimits)) map.set(key, pixelLimitsToSpanBounds(limits, columnWidth, gapPx, rowHeightPx, maxColumns));
		return map;
	}, [
		itemLimits,
		columnWidth,
		gapPx,
		rowHeightPx,
		maxColumns
	]);
	const signature = (0, import_react.useMemo)(() => {
		let value = "";
		for (const [key, bounds] of computed) value += `${key}:${bounds.minWidth}:${bounds.minHeight}:${bounds.maxWidth}:${bounds.maxHeight}|`;
		return value;
	}, [computed]);
	return (0, import_react.useMemo)(() => computed, [signature]);
}
/**
* Pixel limits for the resize gesture of every bounded item. Tracks
* the continuous geometry, but only recomputes when it changes, not on
* every gesture frame.
*
* @param spanBounds  Span bounds per item key.
* @param columnWidth Width of one column track in pixels.
* @param gapPx       Gap between tracks in pixels.
* @param rowHeightPx Row track height in pixels, or `null` when rows
*                    are content-sized.
*/
function useResizePixelLimits(spanBounds, columnWidth, gapPx, rowHeightPx) {
	return (0, import_react.useMemo)(() => {
		if (spanBounds.size === 0) return NO_LIMITS;
		const map = /* @__PURE__ */ new Map();
		for (const [key, bounds] of spanBounds) map.set(key, spanBoundsToPixelLimits(bounds, columnWidth, gapPx, rowHeightPx));
		return map;
	}, [
		spanBounds,
		columnWidth,
		gapPx,
		rowHeightPx
	]);
}
var NO_BOUNDS, NO_LIMITS;
function init_use_span_bounds() {
	return (init_use_span_bounds = __esmMin((() => {
		init_react();
		NO_BOUNDS = /* @__PURE__ */ new Map();
		NO_LIMITS = /* @__PURE__ */ new Map();
	})))();
}
//#endregion
//#region ../packages/grid/src/shared/layout-shift-animation.module.css
var layout_shift_animation_module_default;
function init_layout_shift_animation_module() {
	return (init_layout_shift_animation_module = __esmMin((() => {
		layout_shift_animation_module_default = { "layout-animating": "_layout-animating_1c2ke_6" };
	})))();
}
//#endregion
//#region ../packages/grid/src/shared/item-exit-animation.module.css
var item_exit_animation_module_default;
function init_item_exit_animation_module() {
	return (init_item_exit_animation_module = __esmMin((() => {
		item_exit_animation_module_default = {
			"exit-overlay": "_exit-overlay_1r6kd_5",
			"wp-grid-item-exit-opacity": "_wp-grid-item-exit-opacity_1r6kd_1",
			"wp-grid-item-exit-scale": "_wp-grid-item-exit-scale_1r6kd_1"
		};
	})))();
}
//#endregion
//#region ../packages/grid/src/shared/item-exit-overlay.tsx
/**
* Ghost tile shown at the removed item's last position while siblings
* reflow. Not a sortable grid cell — only visual exit feedback.
*
* @param root0                Component props.
* @param root0.itemKey        Layout key of the removed tile.
* @param root0.rect           Last bounds relative to the grid surface.
* @param root0.children       Cached tile content to render in the ghost.
* @param root0.onAnimationEnd Called when the exit animation finishes.
*/
function ItemExitOverlay({ itemKey, rect, children, onAnimationEnd }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: item_exit_animation_module_default["exit-overlay"],
		style: {
			left: rect.left,
			top: rect.top,
			width: rect.width,
			height: rect.height
		},
		[GRID_ITEM_DATA_KEY]: itemKey,
		"data-wp-grid-item-exiting": "",
		onAnimationEnd: (event) => {
			if (event.target !== event.currentTarget) return;
			onAnimationEnd();
		},
		children
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 34,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime, _jsxFileName;
function init_item_exit_overlay() {
	return (init_item_exit_overlay = __esmMin((() => {
		init_grid_item_key();
		init_item_exit_animation_module();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/grid/src/shared/item-exit-overlay.tsx";
		try {
			ItemExitOverlay.__docgenInfo = {
				"description": "Ghost tile shown at the removed item's last position while siblings\nreflow. Not a sortable grid cell — only visual exit feedback.",
				"displayName": "ItemExitOverlay",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/grid/src/shared/item-exit-overlay.tsx",
				"methods": [],
				"props": {
					"itemKey": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/grid/src/shared/item-exit-overlay.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "itemKey",
						"required": true,
						"tags": {},
						"type": { "name": "string" }
					},
					"rect": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/grid/src/shared/item-exit-overlay.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "rect",
						"required": true,
						"tags": {},
						"type": { "name": "ItemExitOverlayRect" }
					},
					"onAnimationEnd": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/grid/src/shared/item-exit-overlay.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "onAnimationEnd",
						"required": true,
						"tags": {},
						"type": { "name": "() => void" }
					}
				},
				"tags": { "param": "root0 Component props.\nroot0.itemKey Layout key of the removed tile.\nroot0.rect Last bounds relative to the grid surface.\nroot0.children Cached tile content to render in the ghost.\nroot0.onAnimationEnd Called when the exit animation finishes." }
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/grid/src/shared/use-layout-shift-animation.ts
function queryGridItems(container) {
	return Array.from(container.querySelectorAll(`[${GRID_ITEM_DATA_KEY}]:not([data-wp-grid-item-exiting])`));
}
function readItemKey(element) {
	return element.getAttribute(GRID_ITEM_DATA_KEY);
}
function snapshotPositions(container) {
	const base = container.getBoundingClientRect();
	const positions = /* @__PURE__ */ new Map();
	for (const element of queryGridItems(container)) {
		const key = readItemKey(element);
		if (!key) continue;
		const { left, top, width, height } = element.getBoundingClientRect();
		positions.set(key, {
			left: left - base.left,
			top: top - base.top,
			width,
			height
		});
	}
	return positions;
}
function clearLayoutShiftStyles(element) {
	element.style.removeProperty("transform");
	element.style.removeProperty("transition");
}
function playLayoutShift(element, deltaX, deltaY) {
	if (deltaX === 0 && deltaY === 0) return;
	element.style.transition = "none";
	element.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
	element.offsetHeight;
	requestAnimationFrame(() => {
		element.style.removeProperty("transition");
		element.style.transform = "";
		const onTransitionEnd = (event) => {
			if (event.propertyName !== "transform") return;
			element.removeEventListener("transitionend", onTransitionEnd);
			clearLayoutShiftStyles(element);
		};
		element.addEventListener("transitionend", onTransitionEnd);
	});
}
/**
* Animates sibling tiles when grid layout reflows during drag or resize
* using a FLIP transform (see `layout-shift-animation.module.css`).
*
* @param root0                   Hook options.
* @param root0.container         Surface root that contains grid tiles.
* @param root0.enabled           When false, snapshots are cleared and no transforms run.
* @param root0.layoutFingerprint Serialized layout/placement state.
* @param root0.excludeItemKey    Item key to skip (the tile being dragged or resized).
* @return Snapshot capture callback for use before layout updates.
*/
function useLayoutShiftAnimation({ container, enabled, layoutFingerprint, excludeItemKey = null }) {
	const snapshotBeforeChangeRef = (0, import_react.useRef)(null);
	const lastRenderedPositionsRef = (0, import_react.useRef)(null);
	const positionsBeforeLastChangeRef = (0, import_react.useRef)(null);
	const captureLayoutSnapshot = (0, import_react.useCallback)(() => {
		if (container) snapshotBeforeChangeRef.current = snapshotPositions(container);
	}, [container]);
	(0, import_react.useLayoutEffect)(() => {
		if (!container || !enabled) {
			snapshotBeforeChangeRef.current = null;
			lastRenderedPositionsRef.current = null;
			positionsBeforeLastChangeRef.current = null;
			if (container) for (const element of queryGridItems(container)) clearLayoutShiftStyles(element);
			return;
		}
		for (const element of queryGridItems(container)) clearLayoutShiftStyles(element);
		const previous = snapshotBeforeChangeRef.current ?? lastRenderedPositionsRef.current;
		snapshotBeforeChangeRef.current = null;
		positionsBeforeLastChangeRef.current = previous ? new Map(previous) : null;
		lastRenderedPositionsRef.current = snapshotPositions(container);
		if (previous) {
			const base = container.getBoundingClientRect();
			for (const element of queryGridItems(container)) {
				const key = readItemKey(element);
				if (!key || key === excludeItemKey) continue;
				const old = previous.get(key);
				if (!old) continue;
				const { left, top } = element.getBoundingClientRect();
				playLayoutShift(element, old.left - (left - base.left), old.top - (top - base.top));
			}
		}
	}, [
		container,
		enabled,
		layoutFingerprint,
		excludeItemKey
	]);
	return {
		captureLayoutSnapshot,
		getLastPositions: (0, import_react.useCallback)(() => {
			return lastRenderedPositionsRef.current;
		}, []),
		getPositionsBeforeLastChange: (0, import_react.useCallback)(() => {
			return positionsBeforeLastChangeRef.current;
		}, [])
	};
}
/**
* Stable fingerprint for {@link useLayoutShiftAnimation}. Width/height
* values may be numbers or layout keywords (`'fill'`, `'full'`).
*
* @param layout Layout items to serialize.
* @return Fingerprint string.
*/
function getLayoutFingerprint(layout) {
	return layout.map((item) => `${item.key}:${String(item.width ?? "")}:${item.height ?? 1}:${item.order ?? ""}:${item.lane ?? ""}`).join("|");
}
/**
* Placement fingerprint for lanes polyfill / explicit grid positions.
*
* @param itemStyles Per-item inline placement styles.
* @return Fingerprint string.
*/
function getPlacementFingerprint(itemStyles) {
	return [...itemStyles.entries()].sort(([a], [b]) => a.localeCompare(b)).map(([key, style]) => {
		const column = style.gridColumn ?? "";
		const columnStart = style.gridColumnStart ?? "";
		const rowStart = style.gridRowStart ?? "";
		const rowEnd = style.gridRowEnd ?? "";
		return `${key}:${String(column)}:${String(columnStart)}:${String(rowStart)}:${String(rowEnd)}`;
	}).join("|");
}
function init_use_layout_shift_animation() {
	return (init_use_layout_shift_animation = __esmMin((() => {
		init_react();
		init_grid_item_key();
	})))();
}
//#endregion
//#region ../packages/grid/src/shared/use-item-exit-animation.ts
function prefersReducedMotion() {
	return typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
/**
* When `layout` loses keys in edit mode, keeps a short-lived overlay at
* the removed tile's last position (scale + fade) while siblings FLIP.
*
* @param root0                              Hook options.
* @param root0.container                    Surface root that contains grid tiles.
* @param root0.enabled                      When false, exiting state is cleared.
* @param root0.layoutKeys                   Keys in the committed `layout` prop.
* @param root0.getPositionsBeforeLastChange Container-relative rects before the latest layout commit.
* @param root0.childrenCacheRef             Last rendered children keyed by tile id.
* @return Exiting overlays and a callback to dismiss one by key.
*/
function useItemExitAnimation({ container, enabled, layoutKeys, getPositionsBeforeLastChange, childrenCacheRef }) {
	const [exitingItems, setExitingItems] = (0, import_react.useState)([]);
	const prevLayoutKeysRef = (0, import_react.useRef)(/* @__PURE__ */ new Set());
	const exitTimeoutsRef = (0, import_react.useRef)(/* @__PURE__ */ new Map());
	const clearExitingItem = (0, import_react.useCallback)((key) => {
		const timeout = exitTimeoutsRef.current.get(key);
		if (timeout) {
			clearTimeout(timeout);
			exitTimeoutsRef.current.delete(key);
		}
		setExitingItems((current) => current.filter((item) => item.key !== key));
		childrenCacheRef.current.delete(key);
	}, [childrenCacheRef]);
	const scheduleExitComplete = (0, import_react.useCallback)((key) => {
		if (exitTimeoutsRef.current.has(key)) return;
		const timeout = setTimeout(() => {
			exitTimeoutsRef.current.delete(key);
			clearExitingItem(key);
		}, EXIT_SAFETY_TIMEOUT_MS);
		exitTimeoutsRef.current.set(key, timeout);
	}, [clearExitingItem]);
	(0, import_react.useLayoutEffect)(() => {
		if (!enabled || !container) {
			prevLayoutKeysRef.current = new Set(layoutKeys);
			for (const timeout of exitTimeoutsRef.current.values()) clearTimeout(timeout);
			exitTimeoutsRef.current.clear();
			setExitingItems([]);
			return;
		}
		const prevKeys = prevLayoutKeysRef.current;
		const removed = [];
		for (const key of prevKeys) if (!layoutKeys.has(key)) removed.push(key);
		prevLayoutKeysRef.current = new Set(layoutKeys);
		if (removed.length === 0) return;
		const lastPositions = getPositionsBeforeLastChange();
		if (!lastPositions) return;
		const nextExiting = [];
		for (const key of removed) {
			const position = lastPositions.get(key);
			const child = childrenCacheRef.current.get(key);
			if (!position || !child) continue;
			nextExiting.push({
				key,
				rect: position,
				child
			});
		}
		if (nextExiting.length === 0) return;
		if (prefersReducedMotion()) {
			for (const { key } of nextExiting) childrenCacheRef.current.delete(key);
			return;
		}
		setExitingItems((current) => [...current, ...nextExiting]);
		for (const { key } of nextExiting) scheduleExitComplete(key);
	}, [
		container,
		enabled,
		getPositionsBeforeLastChange,
		layoutKeys,
		childrenCacheRef,
		scheduleExitComplete
	]);
	(0, import_react.useLayoutEffect)(() => {
		const exitTimeouts = exitTimeoutsRef.current;
		return () => {
			for (const timeout of exitTimeouts.values()) clearTimeout(timeout);
			exitTimeouts.clear();
		};
	}, []);
	return {
		exitingItems,
		hasExitingItems: exitingItems.length > 0,
		clearExitingItem
	};
}
var EXIT_SAFETY_TIMEOUT_MS;
function init_use_item_exit_animation() {
	return (init_use_item_exit_animation = __esmMin((() => {
		init_react();
		EXIT_SAFETY_TIMEOUT_MS = 1e3;
	})))();
}
//#endregion
//#region ../packages/grid/src/shared/drag-overlay-drop-animation.ts
/**
* Composes `@dnd-kit/core`’s default overlay drop translation with preview
* exit keyframes (via side effects). When the pointer never moves, `@dnd-kit`
* skips the drop animation and these side effects do not run.
*
* @param dragPreviewFrameClassName Hashed class for `.drag-preview-frame`.
* @param exitingFrameClassName     Hashed class for the exit state.
*/
function createDashboardDragDropAnimation(dragPreviewFrameClassName, exitingFrameClassName) {
	return {
		...defaultDropAnimationConfiguration,
		duration: 200,
		easing: DROP_ANIMATION_EASING,
		sideEffects(args) {
			const cleanupDefault = defaultDropAnimationSideEffects({ styles: { active: { opacity: "0" } } })(args);
			const frame = args.dragOverlay.node.getElementsByClassName(dragPreviewFrameClassName)[0];
			if (frame) {
				frame.getAnimations().forEach((animation) => animation.cancel());
				const lift = frame.firstElementChild;
				if (lift instanceof HTMLElement) lift.getAnimations().forEach((animation) => animation.cancel());
				frame.classList.add(exitingFrameClassName);
			}
			return () => {
				cleanupDefault?.();
				if (frame) frame.classList.remove(exitingFrameClassName);
			};
		}
	};
}
var DROP_ANIMATION_EASING;
function init_drag_overlay_drop_animation() {
	return (init_drag_overlay_drop_animation = __esmMin((() => {
		init_core_esm();
		DROP_ANIMATION_EASING = "cubic-bezier(0.4, 0, 0.2, 1)";
	})))();
}
//#endregion
export { init_resize_snap as C, init_grid_item_key as D, GRID_ITEM_DATA_KEY as E, actionable_area_slot_module_default as O, gridSpanToPixelSize as S, init_resize_handle as T, init_grid_overlay as _, getLayoutFingerprint as a, clampResizeDelta as b, useLayoutShiftAnimation as c, init_layout_shift_animation_module as d, layout_shift_animation_module_default as f, GridOverlay as g, useSpanBounds as h, useItemExitAnimation as i, init_actionable_area_slot_module as k, ItemExitOverlay as l, useResizePixelLimits as m, init_drag_overlay_drop_animation as n, getPlacementFingerprint as o, init_use_span_bounds as p, init_use_item_exit_animation as r, init_use_layout_shift_animation as s, createDashboardDragDropAnimation as t, init_item_exit_overlay as u, arrayMoveWithPinned as v, ResizeHandleWrapper as w, clampSpan as x, init_array_move_with_pinned as y };
