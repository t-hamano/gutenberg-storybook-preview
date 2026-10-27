import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as useMergeRefs, t as init_use_merge_refs } from "./use-merge-refs-BAtuPB1L.js";
import { n as useEvent, t as init_use_event } from "./use-event-BTRhHipl.js";
import { n as useResizeObserver, t as init_use_resize_observer } from "./use-resize-observer-C4Y8OHRi.js";
import { a as init_clsx, i as clsx } from "./iframe-UtSZlYID.js";
import { n as init_build_module, t as inertValue } from "./build-module-DRvOo7DC.js";
import { a as useSortable, c as KeyboardSensor, f as init_core_esm, h as useSensors, i as sortableKeyboardCoordinates, l as PointerSensor, m as useSensor, o as DndContext, r as init_sortable_esm, s as DragOverlay, t as SortableContext } from "./sortable.esm-BptoXGkA.js";
import { A as actionable_area_slot_module_default, C as clampSpan$2, D as init_resize_handle, E as ResizeHandleWrapper, O as GRID_ITEM_DATA_KEY, S as clampResizeDelta, _ as init_grid_overlay, a as getLayoutFingerprint, b as arrayMoveWithPinned, c as useLayoutShiftAnimation, d as init_layout_shift_animation_module, f as layout_shift_animation_module_default, g as GridOverlay, h as useSpanBounds, i as useItemExitAnimation, j as init_actionable_area_slot_module, k as init_grid_item_key, l as ItemExitOverlay, m as useResizePixelLimits, n as init_drag_overlay_drop_animation, o as getPlacementFingerprint, p as init_use_span_bounds, r as init_use_item_exit_animation, s as init_use_layout_shift_animation, t as createDashboardDragDropAnimation, u as init_item_exit_overlay, w as gridSpanToPixelSize, x as init_array_move_with_pinned, y as resolveColumnCount } from "./drag-overlay-drop-animation-B8uAV2o3.js";
//#region ../packages/grid/src/dashboard-lanes/lanes-item.module.css
var item, lanes_item_module_default;
function init_lanes_item_module() {
	return (init_lanes_item_module = __esmMin((() => {
		item = "_item_1tsoe_1";
		lanes_item_module_default = {
			item,
			"item-content": "_item-content_1tsoe_5",
			"is-resizing": "_is-resizing_1tsoe_10",
			"is-dragging": "_is-dragging_1tsoe_31",
			"wp-grid-item-placeholder-in": "_wp-grid-item-placeholder-in_1tsoe_1",
			"preview-overlay": "_preview-overlay_1tsoe_75"
		};
	})))();
}
//#endregion
//#region ../packages/grid/src/dashboard-lanes/lanes-item.tsx
function getItemCursor(disabled, interacting) {
	if (disabled) return "default";
	if (interacting) return;
	return "grab";
}
function LanesItem({ itemKey, placementStyle, disabled = false, draggable = true, resizable = true, interacting = false, children, actionableArea = null, onResize, onResizeEnd, resizeSnapPreview = null, minResizeWidthPx, maxResizeWidthPx, renderResizeHandle, dragging = false }) {
	const [resizeDelta, setResizeDelta] = (0, import_react.useState)(null);
	const [initialContentSize, setInitialContentSize] = (0, import_react.useState)(null);
	const itemRef = (0, import_react.useRef)(null);
	const contentRef = (0, import_react.useRef)(null);
	const dragDisabled = disabled || !draggable;
	const resizeDisabled = disabled || !resizable;
	const { attributes, listeners, setNodeRef, setActivatorNodeRef, isDragging } = useSortable({
		id: itemKey,
		disabled: dragDisabled
	});
	const mergedRef = useMergeRefs([itemRef, setNodeRef]);
	const contentMergedRef = useMergeRefs([contentRef]);
	const style = {
		...placementStyle,
		alignSelf: "start"
	};
	const isResizing = resizeDelta !== null;
	const itemClassName = clsx(lanes_item_module_default.item, isDragging && lanes_item_module_default["is-dragging"], isResizing && lanes_item_module_default["is-resizing"]);
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
			height: 0
		};
		if (baselineSize) clamped = clampResizeDelta(clamped, baselineSize, { width: minResizeWidthPx }, { width: maxResizeWidthPx });
		setResizeDelta(clamped);
		onResize(itemKey, clamped);
	};
	const handleResizeEnd = () => {
		setResizeDelta(null);
		setInitialContentSize(null);
		onResizeEnd();
	};
	const continuousContentStyle = resizeDelta && initialContentSize ? { width: initialContentSize.width + resizeDelta.width } : void 0;
	const previewOverlay = resizeSnapPreview ? /* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)("div", {
		className: lanes_item_module_default["preview-overlay"],
		style: {
			width: resizeSnapPreview.widthPx,
			height: resizeSnapPreview.heightPx ?? "100%"
		}
	}, void 0, false, {
		fileName: _jsxFileName$2,
		lineNumber: 195,
		columnNumber: 3
	}, this) : null;
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)("div", {
		ref: mergedRef,
		className: itemClassName,
		style,
		[GRID_ITEM_DATA_KEY]: itemKey,
		"data-wp-grid-item-resizing": isResizing || void 0,
		children: [actionableArea ? /* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)("div", {
			className: actionable_area_slot_module_default["actionable-area-slot"],
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)("div", {
				style: { display: "contents" },
				inert: inertValue(dragging),
				children: actionableArea
			}, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 216,
				columnNumber: 6
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName$2,
			lineNumber: 213,
			columnNumber: 5
		}, this) : null, /* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)("div", {
			ref: setActivatorNodeRef,
			...dragDisabled ? {} : attributes,
			...listeners,
			style: {
				height: "100%",
				cursor: getItemCursor(dragDisabled, interacting)
			},
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)("div", {
				ref: contentMergedRef,
				className: lanes_item_module_default["item-content"],
				style: continuousContentStyle,
				children: [children, !resizeDisabled && /* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)(ResizeHandleWrapper, {
					itemId: itemKey,
					verticalResizable: false,
					onResize: handleResize,
					onResizeEnd: handleResizeEnd,
					renderResizeHandle
				}, void 0, false, {
					fileName: _jsxFileName$2,
					lineNumber: 241,
					columnNumber: 7
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$2,
				lineNumber: 234,
				columnNumber: 5
			}, this), previewOverlay]
		}, void 0, true, {
			fileName: _jsxFileName$2,
			lineNumber: 225,
			columnNumber: 4
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName$2,
		lineNumber: 205,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime$2, _jsxFileName$2;
function init_lanes_item() {
	return (init_lanes_item = __esmMin((() => {
		init_sortable_esm();
		init_clsx();
		init_react();
		init_use_merge_refs();
		init_build_module();
		init_actionable_area_slot_module();
		init_resize_handle();
		init_grid_item_key();
		init_lanes_item_module();
		import_jsx_dev_runtime$2 = require_jsx_dev_runtime();
		_jsxFileName$2 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/grid/src/dashboard-lanes/lanes-item.tsx";
		try {
			LanesItem.__docgenInfo = {
				"description": "",
				"displayName": "LanesItem",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/grid/src/dashboard-lanes/lanes-item.tsx",
				"methods": [],
				"props": {
					"itemKey": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/grid/src/dashboard-lanes/lanes-item.tsx",
							"name": "TypeLiteral"
						}],
						"description": "Item key. Forwarded to dnd-kit and emitted as the\n`data-wp-grid-item-key` attribute the hook reads to map measured DOM\nnodes back to logical items.",
						"name": "itemKey",
						"required": true,
						"tags": {},
						"type": { "name": "string" }
					},
					"placementStyle": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/grid/src/dashboard-lanes/lanes-item.tsx",
							"name": "TypeLiteral"
						}],
						"description": "Inline placement style produced by `useLanePlacement`. On native\n(`display: grid-lanes`), only `gridColumn: span N`. While\npolyfilling, also `gridColumnStart` / `gridRowStart` /\n`gridRowEnd: span N`.",
						"name": "placementStyle",
						"required": true,
						"tags": {},
						"type": { "name": "CSSProperties" }
					},
					"disabled": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/grid/src/dashboard-lanes/lanes-item.tsx",
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
							"fileName": "gutenberg-storybook-preview/packages/grid/src/dashboard-lanes/lanes-item.tsx",
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
							"fileName": "gutenberg-storybook-preview/packages/grid/src/dashboard-lanes/lanes-item.tsx",
							"name": "TypeLiteral"
						}],
						"description": "Whether the item can be resized. Combined with `disabled`.",
						"name": "resizable",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"interacting": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/grid/src/dashboard-lanes/lanes-item.tsx",
							"name": "TypeLiteral"
						}],
						"description": "Whether any tile in the surface is currently being dragged or\nresized. Drives the drag activator cursor.",
						"name": "interacting",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"dragging": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/grid/src/dashboard-lanes/lanes-item.tsx",
							"name": "TypeLiteral"
						}],
						"description": "Whether a tile drag is in progress. Mutes each tile's\n`actionableArea` with `inert` so hovers on other tiles' controls\ndo not steal the gesture.",
						"name": "dragging",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"actionableArea": {
						"defaultValue": { "value": "null" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/grid/src/dashboard-lanes/lanes-item.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "actionableArea",
						"required": false,
						"tags": {},
						"type": { "name": "ReactNode" }
					},
					"onResize": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/grid/src/dashboard-lanes/lanes-item.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "onResize",
						"required": true,
						"tags": {},
						"type": { "name": "(id: string, delta: ResizeDelta) => void" }
					},
					"resizeSnapPreview": {
						"defaultValue": { "value": "null" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/grid/src/dashboard-lanes/lanes-item.tsx",
							"name": "TypeLiteral"
						}],
						"description": "Snapped column span in pixels for the resize-preview outline.",
						"name": "resizeSnapPreview",
						"required": false,
						"tags": {},
						"type": { "name": "ResizeSnapSize | null" }
					},
					"minResizeWidthPx": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/grid/src/dashboard-lanes/lanes-item.tsx",
							"name": "TypeLiteral"
						}],
						"description": "Minimum tile width while resizing, in pixels (one column track).",
						"name": "minResizeWidthPx",
						"required": true,
						"tags": {},
						"type": { "name": "number" }
					},
					"maxResizeWidthPx": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/grid/src/dashboard-lanes/lanes-item.tsx",
							"name": "TypeLiteral"
						}],
						"description": "Maximum tile width while resizing, in pixels. Omitted when the\nitem declares no width limit.",
						"name": "maxResizeWidthPx",
						"required": false,
						"tags": {},
						"type": { "name": "number" }
					},
					"onResizeEnd": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/grid/src/dashboard-lanes/lanes-item.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "onResizeEnd",
						"required": true,
						"tags": {},
						"type": { "name": "() => void" }
					},
					"renderResizeHandle": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/grid/src/dashboard-lanes/lanes-item.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
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
//#region ../packages/grid/src/dashboard-lanes/lane-placement.ts
function clampSpan$1(span, lanes) {
	if (!Number.isFinite(span)) return 1;
	return Math.max(1, Math.min(Math.floor(span), lanes));
}
function clampLane(lane, span, lanes) {
	if (!Number.isFinite(lane)) return 0;
	return Math.max(0, Math.min(Math.floor(lane), lanes - span));
}
function maxBaselineAcross(laneBottoms, startLane, span) {
	let maxBaseline = 0;
	for (let i = startLane; i < startLane + span; i++) if (laneBottoms[i] > maxBaseline) maxBaseline = laneBottoms[i];
	return maxBaseline;
}
/**
* Places all items into a fixed lane count using the grid-lanes
* algorithm: explicit items first, then auto items chosen by the
* shortest-lane skyline with a tolerance for source order.
*
* Pure: no DOM access, no mutation of inputs. Safe to call from a
* worker or during SSR.
*
* @param input Items, lane count, gap, and tolerance.
* @return Per-key placements plus the resulting total height.
*/
function computeLanePlacements(input) {
	const lanes = Math.max(1, Math.floor(input.lanes));
	const gap = Math.max(0, input.gap);
	const tolerance = Math.max(0, input.flowTolerance);
	const laneBottoms = new Array(lanes).fill(0);
	const placements = /* @__PURE__ */ new Map();
	const explicitItems = [];
	const autoItems = [];
	for (const item of input.items) if (item.lane !== void 0) explicitItems.push(item);
	else autoItems.push(item);
	for (const item of explicitItems) {
		const span = clampSpan$1(item.span, lanes);
		const lane = clampLane(item.lane, span, lanes);
		const baseline = maxBaselineAcross(laneBottoms, lane, span);
		const top = baseline === 0 ? 0 : baseline + gap;
		const height = Math.max(0, item.height);
		placements.set(item.key, {
			key: item.key,
			lane,
			top,
			span
		});
		const newBottom = top + height;
		for (let i = lane; i < lane + span; i++) laneBottoms[i] = newBottom;
	}
	for (const item of autoItems) {
		const span = clampSpan$1(item.span, lanes);
		let bestLane = 0;
		let bestBaseline = Infinity;
		for (let candidate = 0; candidate <= lanes - span; candidate++) {
			const baseline = maxBaselineAcross(laneBottoms, candidate, span);
			if (bestBaseline - baseline > tolerance) {
				bestBaseline = baseline;
				bestLane = candidate;
			}
		}
		const top = bestBaseline === 0 ? 0 : bestBaseline + gap;
		const height = Math.max(0, item.height);
		placements.set(item.key, {
			key: item.key,
			lane: bestLane,
			top,
			span
		});
		const newBottom = top + height;
		for (let i = bestLane; i < bestLane + span; i++) laneBottoms[i] = newBottom;
	}
	let totalHeight = 0;
	for (const bottom of laneBottoms) if (bottom > totalHeight) totalHeight = bottom;
	return {
		placements,
		totalHeight
	};
}
//#endregion
//#region ../packages/grid/src/dashboard-lanes/use-lane-placement.ts
function supportsGridLanes() {
	if (typeof CSS === "undefined" || !CSS.supports) return false;
	return CSS.supports("display", "grid-lanes");
}
function clampSpan(span) {
	if (typeof span !== "number" || !Number.isFinite(span)) return 1;
	return Math.max(1, Math.floor(span));
}
/**
* Hook that measures item heights and resolves their placement when
* `display: grid-lanes` is unavailable, falling through to a no-op
* pass when the host browser supports the feature natively.
*
* Usage from the renderer:
*
* ```tsx
* const [ container, setContainer ] = useState< HTMLDivElement | null >( null );
* const { itemStyles } = useLanePlacement( container, {
*     items: layout,
*     lanes: columns,
*     gap: gapPx,
*     flowTolerance: 16,
* } );
*
* return (
*     <div ref={ setContainer } style={ { display: 'grid-lanes', ... } }>
*         { items.map( ( item ) => (
*             <div
*                 key={ item.key }
*                 data-wp-grid-item-key={ item.key }
*                 style={ itemStyles.get( item.key ) }
*             >
*                 { ... }
*             </div>
*         ) ) }
*     </div>
* );
* ```
*
* @param container HTMLElement (or null pre-mount) hosting the items.
* @param input     Logical items, lane count, gap, and tuning.
* @return Per-item styles plus the `isPolyfilled` flag.
*/
function useLanePlacement(container, input) {
	const [isPolyfilled] = (0, import_react.useState)(() => !supportsGridLanes());
	const [itemStyles, setItemStyles] = (0, import_react.useState)(() => /* @__PURE__ */ new Map());
	const nativeStyles = (0, import_react.useMemo)(() => {
		const map = /* @__PURE__ */ new Map();
		for (const item of input.items) map.set(item.key, { gridColumn: `span ${clampSpan(item.span)}` });
		return map;
	}, [input.items]);
	const itemsSignature = (0, import_react.useMemo)(() => {
		return input.items.map((item) => `${item.key}/${item.span ?? 1}/${item.lane ?? ""}`).join("\0");
	}, [input.items]);
	const itemsForPlacement = (0, import_react.useMemo)(() => input.items, [itemsSignature]);
	const { lanes, gap, flowTolerance, rowUnit } = input;
	(0, import_react.useLayoutEffect)(() => {
		if (!isPolyfilled || !container) return;
		if (typeof ResizeObserver === "undefined") return;
		const heights = /* @__PURE__ */ new Map();
		const observed = /* @__PURE__ */ new Set();
		let cancelled = false;
		let rafId = null;
		const recompute = () => {
			if (rafId !== null || cancelled) return;
			rafId = requestAnimationFrame(() => {
				rafId = null;
				if (cancelled) return;
				const result = computeLanePlacements({
					items: itemsForPlacement.map((item) => ({
						key: item.key,
						span: clampSpan(item.span),
						lane: item.lane,
						height: heights.get(item.key) ?? 0
					})),
					lanes,
					gap,
					flowTolerance
				});
				const effectiveRowUnit = Math.max(1, rowUnit ?? DEFAULT_ROW_UNIT);
				const next = /* @__PURE__ */ new Map();
				for (const item of itemsForPlacement) {
					const placement = result.placements.get(item.key);
					if (!placement) continue;
					const height = heights.get(item.key) ?? 0;
					const rowStart = Math.floor(placement.top / effectiveRowUnit) + 1;
					const rowSpan = Math.max(1, Math.ceil(height / effectiveRowUnit));
					next.set(item.key, {
						gridColumnStart: placement.lane + 1,
						gridColumnEnd: `span ${placement.span}`,
						gridRowStart: rowStart,
						gridRowEnd: `span ${rowSpan}`
					});
				}
				setItemStyles(next);
			});
		};
		const resizeObserver = new ResizeObserver((entries) => {
			let changed = false;
			for (const entry of entries) {
				const key = entry.target.getAttribute(GRID_ITEM_DATA_KEY);
				if (!key) continue;
				const newHeight = entry.contentRect.height;
				if (heights.get(key) !== newHeight) {
					heights.set(key, newHeight);
					changed = true;
				}
			}
			if (changed) recompute();
		});
		const refreshObserved = () => {
			const current = container.querySelectorAll(`[${GRID_ITEM_DATA_KEY}]`);
			for (const element of current) if (!observed.has(element)) {
				observed.add(element);
				resizeObserver.observe(element);
				const key = element.getAttribute(GRID_ITEM_DATA_KEY);
				if (key) {
					const rect = element.getBoundingClientRect();
					heights.set(key, rect.height);
				}
			}
			for (const element of observed) if (!container.contains(element)) {
				resizeObserver.unobserve(element);
				observed.delete(element);
			}
		};
		const mutationObserver = typeof MutationObserver !== "undefined" ? new MutationObserver(() => {
			refreshObserved();
			recompute();
		}) : null;
		if (mutationObserver) mutationObserver.observe(container, {
			childList: true,
			subtree: true,
			attributes: true,
			attributeFilter: [GRID_ITEM_DATA_KEY]
		});
		refreshObserved();
		recompute();
		return () => {
			cancelled = true;
			if (rafId !== null) cancelAnimationFrame(rafId);
			resizeObserver.disconnect();
			mutationObserver?.disconnect();
		};
	}, [
		container,
		isPolyfilled,
		lanes,
		gap,
		flowTolerance,
		rowUnit,
		itemsForPlacement
	]);
	if (!isPolyfilled) return {
		itemStyles: nativeStyles,
		isPolyfilled: false
	};
	if (itemStyles.size === 0) return {
		itemStyles: nativeStyles,
		isPolyfilled: true
	};
	return {
		itemStyles,
		isPolyfilled: true
	};
}
var DEFAULT_ROW_UNIT;
function init_use_lane_placement() {
	return (init_use_lane_placement = __esmMin((() => {
		init_react();
		init_grid_item_key();
		DEFAULT_ROW_UNIT = 4;
	})))();
}
//#endregion
//#region ../packages/grid/src/dashboard-lanes/lanes.module.css
var lanes, lanes_module_default;
function init_lanes_module() {
	return (init_lanes_module = __esmMin((() => {
		lanes = "_lanes_1iffx_1";
		lanes_module_default = {
			lanes,
			"drag-preview-frame": "_drag-preview-frame_1iffx_34",
			"drag-preview-frame__lift": "_drag-preview-frame__lift_1iffx_53",
			"wp-grid-drag-preview-shadow-enter": "_wp-grid-drag-preview-shadow-enter_1iffx_1",
			"wp-grid-drag-preview-scale-enter": "_wp-grid-drag-preview-scale-enter_1iffx_1",
			"is-exiting": "_is-exiting_1iffx_103",
			"wp-grid-drag-preview-shadow-exit": "_wp-grid-drag-preview-shadow-exit_1iffx_1",
			"wp-grid-drag-preview-scale-exit": "_wp-grid-drag-preview-scale-exit_1iffx_1"
		};
	})))();
}
//#endregion
//#region ../packages/grid/src/dashboard-lanes/index.tsx
var import_jsx_dev_runtime$1, _jsxFileName$1, dashboardDragDropAnimation, FALLBACK_GAP_PX, DEFAULT_COLUMNS, NO_SORT_STRATEGY, DashboardLanes;
function init_dashboard_lanes() {
	return (init_dashboard_lanes = __esmMin((() => {
		init_core_esm();
		init_sortable_esm();
		init_clsx();
		init_use_resize_observer(), init_use_event(), init_use_merge_refs();
		init_react();
		init_lanes_item();
		init_use_lane_placement();
		init_array_move_with_pinned();
		init_grid_overlay();
		init_use_span_bounds();
		init_layout_shift_animation_module();
		init_item_exit_overlay();
		init_use_layout_shift_animation();
		init_use_item_exit_animation();
		init_drag_overlay_drop_animation();
		init_lanes_module();
		import_jsx_dev_runtime$1 = require_jsx_dev_runtime();
		_jsxFileName$1 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/grid/src/dashboard-lanes/index.tsx";
		dashboardDragDropAnimation = createDashboardDragDropAnimation(lanes_module_default["drag-preview-frame"], lanes_module_default["is-exiting"]);
		FALLBACK_GAP_PX = 24;
		DEFAULT_COLUMNS = 6;
		NO_SORT_STRATEGY = () => null;
		DashboardLanes = (0, import_react.forwardRef)(function UnforwardedDashboardLanes(props, ref) {
			const { layout, columns, children, className, style, flowTolerance = 16, rowUnit = 4, minColumnWidth, itemLimits, editMode = false, onChangeLayout, onPreviewLayout, renderResizeHandle, renderDragPreview, renderGridOverlay, ...divProps } = props;
			const [temporaryLayout, setTemporaryLayout] = (0, import_react.useState)();
			const [activeId, setActiveId] = (0, import_react.useState)(null);
			const [isResizing, setIsResizing] = (0, import_react.useState)(false);
			const [resizeSnapPreview, setResizeSnapPreview] = (0, import_react.useState)(null);
			const latestLayoutRef = (0, import_react.useRef)(void 0);
			const lastReorderCursorRef = (0, import_react.useRef)(null);
			const resizeBaselineRef = (0, import_react.useRef)(null);
			const captureLayoutSnapshotRef = (0, import_react.useRef)(() => {});
			const childrenCacheRef = (0, import_react.useRef)(/* @__PURE__ */ new Map());
			const activeLayout = temporaryLayout ?? layout;
			const [container, setContainer] = (0, import_react.useState)(null);
			const [containerWidth, setContainerWidth] = (0, import_react.useState)(0);
			const [gapPx, setGapPx] = (0, import_react.useState)(FALLBACK_GAP_PX);
			const resizeObserverRef = useResizeObserver(([{ contentRect }]) => {
				setContainerWidth(contentRect.width);
			});
			const mergedRootRef = useMergeRefs([
				setContainer,
				resizeObserverRef,
				ref
			]);
			(0, import_react.useLayoutEffect)(() => {
				if (!container) return;
				const { width } = container.getBoundingClientRect();
				if (width > 0) setContainerWidth(width);
				const parsed = Number.parseFloat(window.getComputedStyle(container).columnGap);
				if (Number.isFinite(parsed) && parsed > 0) setGapPx(parsed);
			}, [container]);
			const effectiveColumns = (0, import_react.useMemo)(() => resolveColumnCount({
				columns,
				minColumnWidth
			}, containerWidth, gapPx, DEFAULT_COLUMNS), [
				minColumnWidth,
				gapPx,
				containerWidth,
				columns
			]);
			const columnWidth = (containerWidth - (effectiveColumns - 1) * gapPx) / effectiveColumns;
			const minResizeWidthPx = gridSpanToPixelSize(1, 1, columnWidth, gapPx, null).widthPx;
			const widthBoundsByKey = useSpanBounds(itemLimits, columnWidth, gapPx, null, effectiveColumns);
			const resizeLimitsByKey = useResizePixelLimits(widthBoundsByKey, columnWidth, gapPx, null);
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
			const renderedSpanByKey = (0, import_react.useMemo)(() => {
				const map = /* @__PURE__ */ new Map();
				for (const [key, item] of layoutMap) {
					const span = typeof item.width === "number" ? Math.max(1, Math.min(item.width, effectiveColumns)) : 1;
					const bounds = widthBoundsByKey.get(key);
					map.set(key, bounds ? clampSpan$2(span, bounds.minWidth, bounds.maxWidth) : span);
				}
				return map;
			}, [
				layoutMap,
				effectiveColumns,
				widthBoundsByKey
			]);
			const { itemStyles } = useLanePlacement(container, {
				items: (0, import_react.useMemo)(() => {
					return items.map((key) => ({
						key,
						span: renderedSpanByKey.get(key) ?? 1,
						lane: layoutMap.get(key)?.lane
					}));
				}, [
					items,
					layoutMap,
					renderedSpanByKey
				]),
				lanes: effectiveColumns,
				gap: gapPx,
				flowTolerance,
				rowUnit
			});
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
					const { actionableArea } = child.props;
					const stripped = actionableArea !== void 0 ? (0, import_react.cloneElement)(child, { actionableArea: void 0 }) : child;
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
				const orderByKey = /* @__PURE__ */ new Map();
				updatedItems.forEach((key, index) => {
					orderByKey.set(key, index);
				});
				const updatedLayout = activeLayout.map((item) => ({
					...item,
					order: orderByKey.get(item.key) ?? 0
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
				const relativeDelta = Math.round(delta.width / (columnWidth + gapPx));
				if (resizeBaselineRef.current === null) resizeBaselineRef.current = renderedSpanByKey.get(id) ?? 1;
				const baseline = resizeBaselineRef.current;
				const bounds = widthBoundsByKey.get(id);
				const newWidth = clampSpan$2(baseline + relativeDelta, bounds?.minWidth ?? 1, bounds?.maxWidth ?? effectiveColumns);
				setResizeSnapPreview({
					id,
					snap: gridSpanToPixelSize(newWidth, 1, columnWidth, gapPx, null)
				});
				if (((latestLayoutRef.current?.find((item) => item.key === id))?.width ?? renderedSpanByKey.get(id)) === newWidth) return;
				const updatedLayout = activeLayout.map((item) => item.key === id ? {
					...item,
					width: newWidth
				} : item);
				latestLayoutRef.current = updatedLayout;
				captureLayoutSnapshotRef.current();
				setTemporaryLayout(updatedLayout);
				onPreviewLayout?.(updatedLayout);
			});
			const interacting = activeId !== null || isResizing;
			const activeClone = activeId ? childrenMap.get(activeId) : null;
			const DragPreview = renderDragPreview;
			const dragOverlayContent = activeId && activeClone ? /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)("div", {
				className: lanes_module_default["drag-preview-frame"],
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)("div", {
					className: lanes_module_default["drag-preview-frame__lift"],
					children: DragPreview ? /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(DragPreview, {
						itemId: activeId,
						children: activeClone
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 526,
						columnNumber: 8
					}, this) : activeClone
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 524,
					columnNumber: 6
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 523,
				columnNumber: 5
			}, this) : null;
			const Overlay = renderGridOverlay ?? GridOverlay;
			const gridOverlay = (0, import_react.useMemo)(() => /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(Overlay, {
				columns: effectiveColumns,
				isActive: editMode
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 543,
				columnNumber: 5
			}, this), [
				Overlay,
				editMode,
				effectiveColumns
			]);
			const layoutFingerprint = (0, import_react.useMemo)(() => {
				return `${getLayoutFingerprint(activeLayout)}\0${getPlacementFingerprint(itemStyles)}`;
			}, [activeLayout, itemStyles]);
			const excludeLayoutAnimationKey = activeId ?? (isResizing ? resizeSnapPreview?.id : null);
			const { captureLayoutSnapshot, getPositionsBeforeLastChange } = useLayoutShiftAnimation({
				container,
				enabled: editMode,
				layoutFingerprint,
				excludeItemKey: excludeLayoutAnimationKey
			});
			const { exitingItems, clearExitingItem } = useItemExitAnimation({
				container,
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
						ref: mergedRootRef,
						className: clsx(lanes_module_default.lanes, layoutAnimating && layout_shift_animation_module_default["layout-animating"], className),
						"data-wp-grid-dragging": activeId || void 0,
						"data-wp-grid-resizing": isResizing || void 0,
						style: {
							...style,
							gridTemplateColumns: `repeat(${effectiveColumns}, minmax(0, 1fr))`,
							"--wp-grid-lane-row-unit": `${Math.max(1, rowUnit)}px`
						},
						children: [
							gridOverlay,
							items.map((id) => {
								const child = childrenMap.get(id);
								if (!child) return null;
								const limitsPx = resizeLimitsByKey.get(id);
								return /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(LanesItem, {
									itemKey: id,
									placementStyle: itemStyles.get(id) ?? {},
									disabled: !editMode,
									draggable: layoutMap.get(id)?.draggable !== false,
									resizable: layoutMap.get(id)?.resizable !== false,
									interacting,
									dragging: activeId !== null,
									onResize: handleResize,
									onResizeEnd: persistTemporaryLayout,
									resizeSnapPreview: resizeSnapPreview?.id === id ? resizeSnapPreview.snap : null,
									minResizeWidthPx: limitsPx?.minWidthPx ?? minResizeWidthPx,
									maxResizeWidthPx: limitsPx?.maxWidthPx,
									actionableArea: actionableAreaMap.get(id),
									renderResizeHandle,
									children: child
								}, id, false, {
									fileName: _jsxFileName$1,
									lineNumber: 626,
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
								lineNumber: 663,
								columnNumber: 8
							}, this))
						]
					}, void 0, true, {
						fileName: _jsxFileName$1,
						lineNumber: 587,
						columnNumber: 6
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 586,
					columnNumber: 5
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(DragOverlay, {
					dropAnimation: dashboardDragDropAnimation,
					children: dragOverlayContent
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 674,
					columnNumber: 5
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$1,
				lineNumber: 575,
				columnNumber: 4
			}, this);
		});
		try {
			DashboardLanes.__docgenInfo = {
				"description": "Masonry-style surface aligned with `display: grid-lanes`. Items\ndeclare a column span; heights are driven by content; placement\nfollows the source-ordered, shortest-lane algorithm with\n`flow-tolerance` tiebreaking.\n\nOn browsers that support `display: grid-lanes` natively, the\ncomponent emits the spec's CSS and lets the engine handle layout.\nOtherwise, `useLanePlacement` measures item heights and assigns\nexplicit `grid-column-start` / `grid-row-start` values that\napproximate the same result inside CSS Grid.\n\nEach child's `key` must match an entry in the `layout` array;\nchildren without a match render at the end of the surface without\nexplicit placement and fall through the lanes auto-flow.",
				"displayName": "DashboardLanes",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/grid/src/dashboard-lanes/index.tsx",
				"methods": [],
				"props": {
					"layout": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/grid/src/dashboard-lanes/types.ts",
							"name": "DashboardLanesProps"
						}],
						"description": "Array of layout items.",
						"name": "layout",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/grid/src/dashboard-lanes/types.ts",
							"name": "DashboardLanesProps"
						},
						"required": true,
						"tags": {},
						"type": { "name": "DashboardLanesLayoutItem[]" }
					},
					"children": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/grid/src/dashboard-lanes/types.ts",
							"name": "DashboardLanesProps"
						}],
						"description": "Surface children. Each child must carry a `key` matching an\nentry in `layout`; children without a match render at the end\nof the surface without explicit placement and fall through the\nlanes auto-flow.",
						"name": "children",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/grid/src/dashboard-lanes/types.ts",
							"name": "DashboardLanesProps"
						},
						"required": true,
						"tags": {},
						"type": { "name": "ReactNode" }
					},
					"className": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/grid/src/dashboard-lanes/types.ts",
							"name": "DashboardLanesProps"
						}],
						"description": "Additional CSS class on the surface root.",
						"name": "className",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/grid/src/dashboard-lanes/types.ts",
							"name": "DashboardLanesProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"style": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/grid/src/dashboard-lanes/types.ts",
							"name": "DashboardLanesProps"
						}],
						"description": "Inline styles on the surface root. Merged underneath the\nsurface's own layout styles, so `display` and\n`gridTemplateColumns` always win. The gap between tiles is\nowned by the design-system gap token and is not configurable\nper instance; override it via a theme or density change.",
						"name": "style",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/grid/src/dashboard-lanes/types.ts",
							"name": "DashboardLanesProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "CSSProperties" }
					},
					"flowTolerance": {
						"defaultValue": { "value": "16" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/grid/src/dashboard-lanes/types.ts",
							"name": "DashboardLanesProps"
						}],
						"description": "`flow-tolerance` value in pixels. When two candidate lanes\ndiffer in baseline by no more than this, the earlier lane wins\nto preserve source order. Larger values keep tiles closer to\nreading order at the cost of bigger empty regions.",
						"name": "flowTolerance",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/grid/src/dashboard-lanes/types.ts",
							"name": "DashboardLanesProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "number" }
					},
					"rowUnit": {
						"defaultValue": { "value": "4" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/grid/src/dashboard-lanes/types.ts",
							"name": "DashboardLanesProps"
						}],
						"description": "Snap unit for the polyfill's `grid-row-start` / `grid-row-end:\nspan N` math. Smaller values produce sharper placement at the\ncost of a larger implicit row count. Ignored on browsers with\nnative `display: grid-lanes` support.",
						"name": "rowUnit",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/grid/src/dashboard-lanes/types.ts",
							"name": "DashboardLanesProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "number" }
					},
					"editMode": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/grid/src/dashboard-lanes/types.ts",
							"name": "DashboardLanesProps"
						}],
						"description": "Whether the surface is in edit mode (drag-to-reorder, resize).",
						"name": "editMode",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/grid/src/dashboard-lanes/types.ts",
							"name": "DashboardLanesProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"onChangeLayout": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/grid/src/dashboard-lanes/types.ts",
							"name": "DashboardLanesProps"
						}],
						"description": "Fired when the user commits a drag or resize.",
						"name": "onChangeLayout",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/grid/src/dashboard-lanes/types.ts",
							"name": "DashboardLanesProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "((newLayout: DashboardLanesLayoutItem[]) => void)" }
					},
					"onPreviewLayout": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/grid/src/dashboard-lanes/types.ts",
							"name": "DashboardLanesProps"
						}],
						"description": "Fired continuously during a gesture with the in-progress\nlayout. The committed result still emits via `onChangeLayout`.",
						"name": "onPreviewLayout",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/grid/src/dashboard-lanes/types.ts",
							"name": "DashboardLanesProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "((previewLayout: DashboardLanesLayoutItem[]) => void)" }
					},
					"renderResizeHandle": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/grid/src/dashboard-lanes/types.ts",
							"name": "DashboardLanesProps"
						}],
						"description": "Override the default corner resize handle. See `DashboardGrid`\nfor the full contract; on lanes the handle is horizontal-only\nbecause heights are content-driven.",
						"name": "renderResizeHandle",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/grid/src/dashboard-lanes/types.ts",
							"name": "DashboardLanesProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "ComponentType<ResizeHandleRenderProps>" }
					},
					"renderDragPreview": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/grid/src/dashboard-lanes/types.ts",
							"name": "DashboardLanesProps"
						}],
						"description": "Custom wrapper for the dragged-clone visual mounted inside\n`<DragOverlay>`. The surface always wraps the clone with a thin\nfunctional frame (lift scale, grabbing cursor, pointer pass-\nthrough) and mounts this component inside it; the consumer\nowns the visual chrome (shadow, radius, padding).\n\nWhen omitted, the cloned children render directly inside the\nfunctional frame so any chrome the consumer applied to the\npersistent tile carries through unchanged.\n\nToken-only adjustments (lift scale, placeholder opacity,\noutline color, placeholder radius) flow through CSS custom\nproperties documented in the README.",
						"name": "renderDragPreview",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/grid/src/dashboard-lanes/types.ts",
							"name": "DashboardLanesProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "ComponentType<DragPreviewRenderProps>" }
					},
					"renderGridOverlay": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/grid/src/dashboard-lanes/types.ts",
							"name": "DashboardLanesProps"
						}],
						"description": "Override the default edit-mode overlay (empty column tracks) with\na custom component. Lanes are content-driven vertically, so no\n`rowHeight` or `rows` is supplied and the default visual paints\ncolumns only.\n\nThe overlay only renders when `editMode` is true. When omitted,\nthe package's default visual is used.",
						"name": "renderGridOverlay",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/grid/src/dashboard-lanes/types.ts",
							"name": "DashboardLanesProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "ComponentType<GridOverlayRenderProps>" }
					},
					"columns": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/grid/src/dashboard-lanes/types.ts",
							"name": "DashboardLanesProps"
						}],
						"description": "Lane count, used as a cap. A number applies at every width; a\n`ColumnSteps` map applies a count from each container width up, and\nan `'auto'` step lifts the cap from its width up.\nDefaults to six when neither `columns` nor `minColumnWidth` is set;\nwith `minColumnWidth` set it can resolve lower on narrow containers.",
						"name": "columns",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/grid/src/dashboard-lanes/types.ts",
							"name": "DashboardLanesProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "number | ColumnSteps" }
					},
					"minColumnWidth": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/grid/src/dashboard-lanes/types.ts",
							"name": "DashboardLanesProps"
						}],
						"description": "Per-tile minimum width in pixels. Enables responsive mode: the\nlane count derives from container width, floored by this value,\ndown to 1.",
						"name": "minColumnWidth",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/grid/src/dashboard-lanes/types.ts",
							"name": "DashboardLanesProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "number" }
					},
					"itemLimits": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/grid/src/dashboard-lanes/types.ts",
							"name": "DashboardLanesProps"
						}],
						"description": "Per-item width limits in pixels, keyed by layout item key. Lane\nheights are content-driven, so there is no height axis.",
						"name": "itemLimits",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/grid/src/dashboard-lanes/types.ts",
							"name": "DashboardLanesProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "Record<string, GridItemWidthLimits>" }
					}
				},
				"tags": {
					"example": "```jsx\n<DashboardLanes\n    layout={ [\n        { key: 'a' },\n        { key: 'b', width: 2 },\n        { key: 'c' },\n    ] }\n    columns={ 3 }\n    editMode\n    onChangeLayout={ setLayout }\n>\n    <Tile key=\"a\">A</Tile>\n    <Tile key=\"b\">B</Tile>\n    <Tile key=\"c\">C</Tile>\n</DashboardLanes>\n```",
					"param": "props Component props.\nref Forwarded to the surface's root `<div>`."
				}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/grid/src/dashboard-lanes/stories/index.story.tsx
function Tile({ tone, height, index, children, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		...props,
		style: {
			backgroundColor: bgTokens[tone],
			color: fgTokens[tone],
			padding: "12px 16px",
			display: "flex",
			alignItems: "flex-end",
			justifyContent: "center",
			position: "relative",
			overflow: "hidden",
			height,
			boxSizing: "border-box",
			fontFamily: "var(--wpds-typography-font-family-body, -apple-system, system-ui, \"Segoe UI\", \"Roboto\", \"Oxygen-Sans\", \"Ubuntu\", \"Cantarell\", \"Helvetica Neue\", sans-serif)",
			fontSize: "var(--wpds-typography-font-size-sm, 12px)",
			borderRadius: 6,
			...props?.style
		},
		children: [index !== void 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
			"aria-hidden": true,
			style: {
				position: "absolute",
				inset: 0,
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				fontSize: "3rem",
				fontWeight: 700,
				opacity: .3,
				pointerEvents: "none",
				userSelect: "none"
			},
			children: index
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 113,
			columnNumber: 5
		}, this), children && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
			style: { position: "relative" },
			children
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 132,
			columnNumber: 5
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 93,
		columnNumber: 3
	}, this);
}
function TileControls({ title }) {
	const metricId = (0, import_react.useId)();
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
		style: {
			display: "flex",
			flexDirection: "column",
			alignItems: "flex-start",
			gap: 8
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: title }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 196,
				columnNumber: 4
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
				href: "#details",
				children: "Details"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 197,
				columnNumber: 4
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
				type: "button",
				children: "Refresh"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 198,
				columnNumber: 4
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
				htmlFor: metricId,
				children: [
					"Metric",
					" ",
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", {
						id: metricId,
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { children: "Views" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 202,
							columnNumber: 6
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { children: "Clicks" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 203,
							columnNumber: 6
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 201,
						columnNumber: 5
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 199,
				columnNumber: 4
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 188,
		columnNumber: 3
	}, this);
}
/**
* Example custom overlay supplied to `<DashboardLanes />` through the
* `renderGridOverlay` prop. Receives `{ columns, isActive }` from the
* surface (no `rowHeight` because lane heights are content-driven).
* The custom must honor `isActive` for the same cross-fade behavior
* as the default; the surface always mounts the overlay.
*
* @param props          Render props supplied by the surface.
* @param props.columns  Number of lane tracks to mirror.
* @param props.isActive Whether the overlay should be visible.
*/
function NumberedLanesOverlay({ columns, isActive }) {
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
				lineNumber: 639,
				columnNumber: 6
			}, this)
		}, i, false, {
			fileName: _jsxFileName,
			lineNumber: 629,
			columnNumber: 5
		}, this))
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 611,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime, _jsxFileName, meta, bgTokens, fgTokens, Default, InteractiveContent, Columns, ColumnSteps, ColumnStepsWithFloor, Spanning, EditMode, SizeLimits, CustomGridOverlayStory;
function init_index_story() {
	return (init_index_story = __esmMin((() => {
		init_react();
		init_dashboard_lanes();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/grid/src/dashboard-lanes/stories/index.story.tsx";
		meta = {
			id: "grid-dashboardlanes",
			title: "Widgets/Grid/DashboardLanes",
			component: DashboardLanes,
			tags: ["status-experimental"],
			args: {
				columns: 4,
				flowTolerance: 16,
				rowUnit: 4,
				editMode: false
			},
			argTypes: {
				children: { control: false },
				columns: {
					control: {
						type: "number",
						min: 1,
						max: 12,
						step: 1
					},
					description: "Lane count, or the cap when `minColumnWidth` is set."
				},
				minColumnWidth: {
					control: {
						type: "number",
						min: 80,
						max: 600,
						step: 8
					},
					description: "Per-lane floor in pixels. Lowers the count on narrow containers, down to one."
				},
				flowTolerance: {
					control: {
						type: "number",
						min: 0,
						max: 64,
						step: 1
					},
					description: "Pixel tolerance for source-order tiebreaking when two lanes have similar baselines."
				},
				rowUnit: {
					control: {
						type: "number",
						min: 1,
						max: 16,
						step: 1
					},
					description: "Polyfill snap unit (px). Ignored on browsers with native `display: grid-lanes` support."
				},
				editMode: {
					control: { type: "boolean" },
					description: "Enables drag-to-reorder and horizontal resize."
				},
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
		Default = { args: {
			columns: 4,
			layout: [
				{ key: "a" },
				{ key: "b" },
				{ key: "c" },
				{ key: "d" },
				{ key: "e" },
				{ key: "f" },
				{ key: "g" },
				{ key: "h" }
			],
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tile, {
					tone: "brand",
					height: 120,
					index: 1,
					children: "120px"
				}, "a", false, {
					fileName: _jsxFileName,
					lineNumber: 157,
					columnNumber: 4
				}, void 0),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tile, {
					tone: "info",
					height: 200,
					index: 2,
					children: "200px"
				}, "b", false, {
					fileName: _jsxFileName,
					lineNumber: 160,
					columnNumber: 4
				}, void 0),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tile, {
					tone: "success",
					height: 80,
					index: 3,
					children: "80px"
				}, "c", false, {
					fileName: _jsxFileName,
					lineNumber: 163,
					columnNumber: 4
				}, void 0),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tile, {
					tone: "warning",
					height: 160,
					index: 4,
					children: "160px"
				}, "d", false, {
					fileName: _jsxFileName,
					lineNumber: 166,
					columnNumber: 4
				}, void 0),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tile, {
					tone: "error",
					height: 100,
					index: 5,
					children: "100px"
				}, "e", false, {
					fileName: _jsxFileName,
					lineNumber: 169,
					columnNumber: 4
				}, void 0),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tile, {
					tone: "neutral",
					height: 240,
					index: 6,
					children: "240px"
				}, "f", false, {
					fileName: _jsxFileName,
					lineNumber: 172,
					columnNumber: 4
				}, void 0),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tile, {
					tone: "brand",
					height: 140,
					index: 7,
					children: "140px"
				}, "g", false, {
					fileName: _jsxFileName,
					lineNumber: 175,
					columnNumber: 4
				}, void 0),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tile, {
					tone: "info",
					height: 90,
					index: 8,
					children: "90px"
				}, "h", false, {
					fileName: _jsxFileName,
					lineNumber: 178,
					columnNumber: 4
				}, void 0)
			]
		} };
		InteractiveContent = { args: {
			columns: 3,
			layout: [
				{
					key: "pinned",
					draggable: false
				},
				{ key: "a" },
				{ key: "b" }
			],
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tile, {
					tone: "neutral",
					height: 180,
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TileControls, { title: "Pinned" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 223,
						columnNumber: 5
					}, void 0)
				}, "pinned", false, {
					fileName: _jsxFileName,
					lineNumber: 222,
					columnNumber: 4
				}, void 0),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tile, {
					tone: "info",
					height: 180,
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TileControls, { title: "Tile" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 226,
						columnNumber: 5
					}, void 0)
				}, "a", false, {
					fileName: _jsxFileName,
					lineNumber: 225,
					columnNumber: 4
				}, void 0),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tile, {
					tone: "success",
					height: 180,
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TileControls, { title: "Tile" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 229,
						columnNumber: 5
					}, void 0)
				}, "b", false, {
					fileName: _jsxFileName,
					lineNumber: 228,
					columnNumber: 4
				}, void 0)
			]
		} };
		Columns = {
			parameters: { a11y: { test: "todo" } },
			args: {
				columns: 4,
				minColumnWidth: 200,
				layout: [
					{ key: "a" },
					{ key: "b" },
					{ key: "c" },
					{ key: "d" },
					{ key: "e" },
					{ key: "f" }
				],
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tile, {
						tone: "brand",
						height: 120,
						index: 1
					}, "a", false, {
						fileName: _jsxFileName,
						lineNumber: 260,
						columnNumber: 4
					}, void 0),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tile, {
						tone: "info",
						height: 200,
						index: 2
					}, "b", false, {
						fileName: _jsxFileName,
						lineNumber: 261,
						columnNumber: 4
					}, void 0),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tile, {
						tone: "success",
						height: 80,
						index: 3
					}, "c", false, {
						fileName: _jsxFileName,
						lineNumber: 262,
						columnNumber: 4
					}, void 0),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tile, {
						tone: "warning",
						height: 160,
						index: 4
					}, "d", false, {
						fileName: _jsxFileName,
						lineNumber: 263,
						columnNumber: 4
					}, void 0),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tile, {
						tone: "error",
						height: 100,
						index: 5
					}, "e", false, {
						fileName: _jsxFileName,
						lineNumber: 264,
						columnNumber: 4
					}, void 0),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tile, {
						tone: "neutral",
						height: 240,
						index: 6
					}, "f", false, {
						fileName: _jsxFileName,
						lineNumber: 265,
						columnNumber: 4
					}, void 0)
				]
			}
		};
		ColumnSteps = {
			parameters: { a11y: { test: "todo" } },
			argTypes: { columns: { control: "object" } },
			args: {
				columns: {
					0: 1,
					600: 2,
					960: 4
				},
				layout: [
					{
						key: "fixed-1",
						width: 1
					},
					{
						key: "fixed-2",
						width: 2
					},
					{
						key: "fill-1",
						width: 2
					},
					{
						key: "fixed-3",
						width: 1
					},
					{
						key: "fixed-4",
						width: 1
					},
					{
						key: "fixed-5",
						width: 2
					},
					{
						key: "fill-2",
						width: 3
					},
					{
						key: "full-1",
						width: 1
					}
				],
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tile, {
						tone: "brand",
						height: 120,
						index: 1,
						children: ["width: ", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: "1" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 298,
							columnNumber: 12
						}, void 0)]
					}, "fixed-1", true, {
						fileName: _jsxFileName,
						lineNumber: 297,
						columnNumber: 4
					}, void 0),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tile, {
						tone: "info",
						height: 200,
						index: 2,
						children: ["width: ", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: "2" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 301,
							columnNumber: 12
						}, void 0)]
					}, "fixed-2", true, {
						fileName: _jsxFileName,
						lineNumber: 300,
						columnNumber: 4
					}, void 0),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tile, {
						tone: "success",
						height: 80,
						index: 3,
						children: ["width: ", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: "2" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 304,
							columnNumber: 12
						}, void 0)]
					}, "fill-1", true, {
						fileName: _jsxFileName,
						lineNumber: 303,
						columnNumber: 4
					}, void 0),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tile, {
						tone: "warning",
						height: 160,
						index: 4,
						children: ["width: ", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: "1" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 307,
							columnNumber: 12
						}, void 0)]
					}, "fixed-3", true, {
						fileName: _jsxFileName,
						lineNumber: 306,
						columnNumber: 4
					}, void 0),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tile, {
						tone: "error",
						height: 100,
						index: 5,
						children: ["width: ", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: "1" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 310,
							columnNumber: 12
						}, void 0)]
					}, "fixed-4", true, {
						fileName: _jsxFileName,
						lineNumber: 309,
						columnNumber: 4
					}, void 0),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tile, {
						tone: "neutral",
						height: 240,
						index: 6,
						children: ["width: ", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: "2" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 313,
							columnNumber: 12
						}, void 0)]
					}, "fixed-5", true, {
						fileName: _jsxFileName,
						lineNumber: 312,
						columnNumber: 4
					}, void 0),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tile, {
						tone: "neutral",
						height: 240,
						index: 7,
						children: ["width: ", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: "3" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 316,
							columnNumber: 12
						}, void 0)]
					}, "fill-2", true, {
						fileName: _jsxFileName,
						lineNumber: 315,
						columnNumber: 4
					}, void 0),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tile, {
						tone: "neutral",
						height: 240,
						index: 8,
						children: ["width: ", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: "1" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 319,
							columnNumber: 12
						}, void 0)]
					}, "full-1", true, {
						fileName: _jsxFileName,
						lineNumber: 318,
						columnNumber: 4
					}, void 0)
				]
			}
		};
		ColumnStepsWithFloor = {
			parameters: ColumnSteps.parameters,
			argTypes: { columns: { control: "object" } },
			args: {
				...ColumnSteps.args,
				columns: {
					0: 1,
					600: 2,
					960: "auto"
				},
				minColumnWidth: 200
			}
		};
		Spanning = {
			parameters: { a11y: { test: "todo" } },
			args: {
				columns: 4,
				layout: [
					{ key: "a" },
					{
						key: "wide",
						width: 2
					},
					{ key: "b" },
					{ key: "c" },
					{ key: "d" },
					{
						key: "taller-wide",
						width: 2
					},
					{ key: "e" }
				],
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tile, {
						tone: "brand",
						height: 120,
						index: 1
					}, "a", false, {
						fileName: _jsxFileName,
						lineNumber: 365,
						columnNumber: 4
					}, void 0),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tile, {
						tone: "info",
						height: 100,
						index: 2,
						children: "span 2"
					}, "wide", false, {
						fileName: _jsxFileName,
						lineNumber: 366,
						columnNumber: 4
					}, void 0),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tile, {
						tone: "success",
						height: 80,
						index: 3
					}, "b", false, {
						fileName: _jsxFileName,
						lineNumber: 369,
						columnNumber: 4
					}, void 0),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tile, {
						tone: "warning",
						height: 200,
						index: 4
					}, "c", false, {
						fileName: _jsxFileName,
						lineNumber: 370,
						columnNumber: 4
					}, void 0),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tile, {
						tone: "error",
						height: 90,
						index: 5
					}, "d", false, {
						fileName: _jsxFileName,
						lineNumber: 371,
						columnNumber: 4
					}, void 0),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tile, {
						tone: "neutral",
						height: 160,
						index: 6,
						children: "span 2"
					}, "taller-wide", false, {
						fileName: _jsxFileName,
						lineNumber: 372,
						columnNumber: 4
					}, void 0),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tile, {
						tone: "brand",
						height: 110,
						index: 7
					}, "e", false, {
						fileName: _jsxFileName,
						lineNumber: 375,
						columnNumber: 4
					}, void 0)
				]
			}
		};
		EditMode = {
			parameters: { a11y: { test: "todo" } },
			args: {
				columns: 4,
				editMode: true
			},
			render: function EditModeStory(args) {
				const [tiles, setTiles] = (0, import_react.useState)([
					{
						key: "a",
						draggable: false,
						tone: "brand",
						height: 120,
						label: "pinned"
					},
					{
						key: "b",
						tone: "info",
						height: 200,
						label: "200px"
					},
					{
						key: "wide",
						width: 2,
						tone: "success",
						height: 100,
						label: "span 2"
					},
					{
						key: "c",
						tone: "warning",
						height: 160,
						label: "160px"
					},
					{
						key: "d",
						tone: "error",
						height: 90,
						label: "90px"
					},
					{
						key: "e",
						tone: "neutral",
						height: 240,
						label: "240px"
					},
					{
						key: "f",
						tone: "brand",
						height: 140,
						label: "140px"
					}
				]);
				const layout = tiles.map(({ tone: _tone, height: _height, label: _label, ...item }) => item);
				const onChangeLayout = (next) => {
					setTiles(next.map((item) => {
						const existing = tiles.find((t) => t.key === item.key);
						return {
							...item,
							tone: existing?.tone ?? "neutral",
							height: existing?.height ?? 100,
							label: existing?.label ?? item.key
						};
					}));
				};
				const tileElements = (0, import_react.useMemo)(() => tiles.map((tile, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tile, {
					tone: tile.tone,
					height: tile.height,
					index: i + 1,
					children: tile.label
				}, tile.key, false, {
					fileName: _jsxFileName,
					lineNumber: 455,
					columnNumber: 6
				}, this)), [tiles]);
				return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DashboardLanes, {
					...args,
					layout,
					onChangeLayout,
					children: tileElements
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 468,
					columnNumber: 4
				}, this);
			}
		};
		SizeLimits = {
			name: "Per-Item Size Limits",
			parameters: { a11y: { test: "todo" } },
			args: {
				columns: 12,
				editMode: true,
				itemLimits: {
					min: { minWidth: 360 },
					max: { maxWidth: 500 },
					ranged: {
						minWidth: 300,
						maxWidth: 500
					}
				}
			},
			render: function SizeLimitsStory(args) {
				const [tiles, setTiles] = (0, import_react.useState)([
					{
						key: "min",
						width: 2,
						tone: "info",
						height: 140,
						label: "min 360px wide"
					},
					{
						key: "max",
						width: 3,
						tone: "warning",
						height: 120,
						label: "max 500px wide"
					},
					{
						key: "ranged",
						width: 2,
						tone: "brand",
						height: 150,
						label: "min 300, max 500px wide"
					},
					{
						key: "free-a",
						width: 3,
						tone: "neutral",
						height: 180,
						label: "no limits"
					},
					{
						key: "free-b",
						width: 2,
						tone: "neutral",
						height: 100,
						label: "no limits"
					},
					{
						key: "free-c",
						width: 3,
						tone: "neutral",
						height: 160,
						label: "no limits"
					}
				]);
				const layout = tiles.map(({ tone: _tone, height: _height, label: _label, ...item }) => item);
				const onChangeLayout = (next) => {
					setTiles(next.map((item) => {
						const existing = tiles.find((t) => t.key === item.key);
						return {
							...item,
							tone: existing?.tone ?? "neutral",
							height: existing?.height ?? 100,
							label: existing?.label ?? item.key
						};
					}));
				};
				const tileElements = (0, import_react.useMemo)(() => tiles.map((tile) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tile, {
					tone: tile.tone,
					height: tile.height,
					children: tile.label
				}, tile.key, false, {
					fileName: _jsxFileName,
					lineNumber: 575,
					columnNumber: 6
				}, this)), [tiles]);
				return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DashboardLanes, {
					...args,
					layout,
					onChangeLayout,
					children: tileElements
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 587,
					columnNumber: 4
				}, this);
			}
		};
		CustomGridOverlayStory = {
			parameters: { a11y: { test: "todo" } },
			name: "Custom Grid Overlay",
			args: {
				columns: 4,
				editMode: true
			},
			render: function CustomGridOverlayRender(args) {
				const [tiles, setTiles] = (0, import_react.useState)([
					{
						key: "a",
						tone: "brand",
						height: 140,
						label: "140px"
					},
					{
						key: "b",
						tone: "info",
						height: 200,
						label: "200px"
					},
					{
						key: "wide",
						width: 2,
						tone: "success",
						height: 120,
						label: "span 2"
					},
					{
						key: "c",
						tone: "warning",
						height: 180,
						label: "180px"
					},
					{
						key: "d",
						tone: "error",
						height: 100,
						label: "100px"
					},
					{
						key: "e",
						tone: "neutral",
						height: 220,
						label: "220px"
					}
				]);
				const layout = tiles.map(({ tone: _tone, height: _height, label: _label, ...item }) => item);
				const onChangeLayout = (next) => {
					setTiles(next.map((item) => {
						const existing = tiles.find((t) => t.key === item.key);
						return {
							...item,
							tone: existing?.tone ?? "neutral",
							height: existing?.height ?? 100,
							label: existing?.label ?? item.key
						};
					}));
				};
				const tileElements = (0, import_react.useMemo)(() => tiles.map((tile, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tile, {
					tone: tile.tone,
					height: tile.height,
					index: i + 1,
					children: tile.label
				}, tile.key, false, {
					fileName: _jsxFileName,
					lineNumber: 725,
					columnNumber: 6
				}, this)), [tiles]);
				return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DashboardLanes, {
					...args,
					layout,
					onChangeLayout,
					renderGridOverlay: NumberedLanesOverlay,
					children: tileElements
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 738,
					columnNumber: 4
				}, this);
			}
		};
		try {
			Default.__docgenInfo = {
				"description": "Mixed-height tiles in a fixed lane count. Items pack from\nleft-to-right by source order, falling into whichever lane has\nthe lowest baseline at the moment of placement.",
				"displayName": "Default",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/grid/src/dashboard-lanes/stories/index.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			InteractiveContent.__docgenInfo = {
				"description": "Tiles with their own links, buttons and form controls. The a11y addon checks that the lanes do not wrap them in drag semantics. In edit mode, the first tile is pinned (`draggable: false`) and its controls keep their semantics.",
				"displayName": "InteractiveContent",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/grid/src/dashboard-lanes/stories/index.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			Columns.__docgenInfo = {
				"description": "`columns` and `minColumnWidth` compose. `columns` alone fixes the lane\ncount. `minColumnWidth` alone fits as many lanes of at least that width\nas the container allows. Together, `columns` caps what the floor fits:\nup to four lanes here, none narrower than 200px, down to one. Open the\nstory full screen and resize the browser to walk the counts.",
				"displayName": "Columns",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/grid/src/dashboard-lanes/stories/index.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			ColumnSteps.__docgenInfo = {
				"description": "`columns` as a map: one lane from 0px, two from 600px, four from\n960px. The count steps at those container widths regardless of how\nwide each lane ends up; add `minColumnWidth` to lower it further.",
				"displayName": "ColumnSteps",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/grid/src/dashboard-lanes/stories/index.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			ColumnStepsWithFloor.__docgenInfo = {
				"description": "A step can be `'auto'`: from that width up there is no cap and the\nfloor alone decides the count. Here the steps fix one and two lanes\nbelow 960px, and 200px lanes fill the container above it.",
				"displayName": "ColumnStepsWithFloor",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/grid/src/dashboard-lanes/stories/index.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			Spanning.__docgenInfo = {
				"description": "Items with `width: 2` span two lanes. The skyline picks a span\nposition that minimizes the resulting baseline across spanned\nlanes.",
				"displayName": "Spanning",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/grid/src/dashboard-lanes/stories/index.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			EditMode.__docgenInfo = {
				"description": "Edit mode: drag to reorder, resize from the bottom-right corner\n(horizontal only — heights are content-driven). Drop commits the\nnew layout via `onChangeLayout`.\n\nWhile `editMode` is on, `<DashboardLanes />` paints its default\noverlay behind the tiles to mark the lane tracks. Lanes paint\ncolumns only — there are no row markers because heights are\ncontent-driven.\n\nTheme the default look in place via `--wp-grid-overlay-tile-bg`,\nor replace the visual wholesale\nby passing `renderGridOverlay`. See the `Custom Grid Overlay`\nstory below for a full override example.",
				"displayName": "EditMode",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/grid/src/dashboard-lanes/stories/index.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			SizeLimits.__docgenInfo = {
				"description": "Per-item width limits via `itemLimits`, in pixels. The wide tile\nstops shrinking at its minimum, the capped tile stops growing at its\nmaximum, the ranged tile stays between both, and the free tiles keep\nthe full range. Lanes take no height limits; lane heights are\ncontent-driven.",
				"displayName": "SizeLimits",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/grid/src/dashboard-lanes/stories/index.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			CustomGridOverlayStory.__docgenInfo = {
				"description": "Replaces the surface's default edit-mode overlay with a custom\nvisual through the `renderGridOverlay` prop. The same contract as\n`<DashboardGrid />`'s override path, with `rowHeight` omitted from\nthe render props because lanes are content-driven vertically.\n\nPass `renderGridOverlay={ () => null }` to suppress the overlay\nentirely while keeping `editMode` interactions on.",
				"displayName": "CustomGridOverlayStory",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/grid/src/dashboard-lanes/stories/index.story.tsx",
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
					originalSource: "{\n  args: {\n    columns: 4,\n    layout: [{\n      key: 'a'\n    }, {\n      key: 'b'\n    }, {\n      key: 'c'\n    }, {\n      key: 'd'\n    }, {\n      key: 'e'\n    }, {\n      key: 'f'\n    }, {\n      key: 'g'\n    }, {\n      key: 'h'\n    }],\n    children: [<Tile key=\"a\" tone=\"brand\" height={120} index={1}>\n                120px\n            </Tile>, <Tile key=\"b\" tone=\"info\" height={200} index={2}>\n                200px\n            </Tile>, <Tile key=\"c\" tone=\"success\" height={80} index={3}>\n                80px\n            </Tile>, <Tile key=\"d\" tone=\"warning\" height={160} index={4}>\n                160px\n            </Tile>, <Tile key=\"e\" tone=\"error\" height={100} index={5}>\n                100px\n            </Tile>, <Tile key=\"f\" tone=\"neutral\" height={240} index={6}>\n                240px\n            </Tile>, <Tile key=\"g\" tone=\"brand\" height={140} index={7}>\n                140px\n            </Tile>, <Tile key=\"h\" tone=\"info\" height={90} index={8}>\n                90px\n            </Tile>]\n  }\n}",
					...Default.parameters?.docs?.source
				},
				description: {
					story: "Mixed-height tiles in a fixed lane count. Items pack from\nleft-to-right by source order, falling into whichever lane has\nthe lowest baseline at the moment of placement.",
					...Default.parameters?.docs?.description
				}
			}
		};
		InteractiveContent.parameters = {
			...InteractiveContent.parameters,
			docs: {
				...InteractiveContent.parameters?.docs,
				source: {
					originalSource: "{\n  args: {\n    columns: 3,\n    layout: [{\n      key: 'pinned',\n      draggable: false\n    }, {\n      key: 'a'\n    }, {\n      key: 'b'\n    }],\n    children: [<Tile key=\"pinned\" tone=\"neutral\" height={180}>\n                <TileControls title=\"Pinned\" />\n            </Tile>, <Tile key=\"a\" tone=\"info\" height={180}>\n                <TileControls title=\"Tile\" />\n            </Tile>, <Tile key=\"b\" tone=\"success\" height={180}>\n                <TileControls title=\"Tile\" />\n            </Tile>]\n  }\n}",
					...InteractiveContent.parameters?.docs?.source
				},
				description: {
					story: "Tiles with their own links, buttons and form controls. The a11y addon checks that the lanes do not wrap them in drag semantics. In edit mode, the first tile is pinned (`draggable: false`) and its controls keep their semantics.",
					...InteractiveContent.parameters?.docs?.description
				}
			}
		};
		Columns.parameters = {
			...Columns.parameters,
			docs: {
				...Columns.parameters?.docs,
				source: {
					originalSource: "{\n  parameters: {\n    // FIXME: Resize handles are nameless aria commands; edit mode nests interactive controls (aria-command-name, nested-interactive).\n    // See: https://github.com/WordPress/gutenberg/issues/81596\n    a11y: {\n      test: 'todo'\n    }\n  },\n  args: {\n    columns: 4,\n    minColumnWidth: 200,\n    layout: [{\n      key: 'a'\n    }, {\n      key: 'b'\n    }, {\n      key: 'c'\n    }, {\n      key: 'd'\n    }, {\n      key: 'e'\n    }, {\n      key: 'f'\n    }],\n    children: [<Tile key=\"a\" tone=\"brand\" height={120} index={1} />, <Tile key=\"b\" tone=\"info\" height={200} index={2} />, <Tile key=\"c\" tone=\"success\" height={80} index={3} />, <Tile key=\"d\" tone=\"warning\" height={160} index={4} />, <Tile key=\"e\" tone=\"error\" height={100} index={5} />, <Tile key=\"f\" tone=\"neutral\" height={240} index={6} />]\n  }\n}",
					...Columns.parameters?.docs?.source
				},
				description: {
					story: "`columns` and `minColumnWidth` compose. `columns` alone fixes the lane\ncount. `minColumnWidth` alone fits as many lanes of at least that width\nas the container allows. Together, `columns` caps what the floor fits:\nup to four lanes here, none narrower than 200px, down to one. Open the\nstory full screen and resize the browser to walk the counts.",
					...Columns.parameters?.docs?.description
				}
			}
		};
		ColumnSteps.parameters = {
			...ColumnSteps.parameters,
			docs: {
				...ColumnSteps.parameters?.docs,
				source: {
					originalSource: "{\n  parameters: {\n    // FIXME: Resize handles are nameless aria commands; edit mode nests interactive controls (aria-command-name, nested-interactive).\n    // See: https://github.com/WordPress/gutenberg/issues/81596\n    a11y: {\n      test: 'todo'\n    }\n  },\n  argTypes: {\n    columns: {\n      control: 'object'\n    }\n  },\n  args: {\n    columns: {\n      0: 1,\n      600: 2,\n      960: 4\n    },\n    layout: [{\n      key: 'fixed-1',\n      width: 1\n    }, {\n      key: 'fixed-2',\n      width: 2\n    }, {\n      key: 'fill-1',\n      width: 2\n    }, {\n      key: 'fixed-3',\n      width: 1\n    }, {\n      key: 'fixed-4',\n      width: 1\n    }, {\n      key: 'fixed-5',\n      width: 2\n    }, {\n      key: 'fill-2',\n      width: 3\n    }, {\n      key: 'full-1',\n      width: 1\n    }],\n    children: [<Tile key=\"fixed-1\" tone=\"brand\" height={120} index={1}>\n                width: <strong>1</strong>\n            </Tile>, <Tile key=\"fixed-2\" tone=\"info\" height={200} index={2}>\n                width: <strong>2</strong>\n            </Tile>, <Tile key=\"fill-1\" tone=\"success\" height={80} index={3}>\n                width: <strong>2</strong>\n            </Tile>, <Tile key=\"fixed-3\" tone=\"warning\" height={160} index={4}>\n                width: <strong>1</strong>\n            </Tile>, <Tile key=\"fixed-4\" tone=\"error\" height={100} index={5}>\n                width: <strong>1</strong>\n            </Tile>, <Tile key=\"fixed-5\" tone=\"neutral\" height={240} index={6}>\n                width: <strong>2</strong>\n            </Tile>, <Tile key=\"fill-2\" tone=\"neutral\" height={240} index={7}>\n                width: <strong>3</strong>\n            </Tile>, <Tile key=\"full-1\" tone=\"neutral\" height={240} index={8}>\n                width: <strong>1</strong>\n            </Tile>]\n  }\n}",
					...ColumnSteps.parameters?.docs?.source
				},
				description: {
					story: "`columns` as a map: one lane from 0px, two from 600px, four from\n960px. The count steps at those container widths regardless of how\nwide each lane ends up; add `minColumnWidth` to lower it further.",
					...ColumnSteps.parameters?.docs?.description
				}
			}
		};
		ColumnStepsWithFloor.parameters = {
			...ColumnStepsWithFloor.parameters,
			docs: {
				...ColumnStepsWithFloor.parameters?.docs,
				source: {
					originalSource: "{\n  parameters: ColumnSteps.parameters,\n  argTypes: {\n    columns: {\n      control: 'object'\n    }\n  },\n  args: {\n    ...ColumnSteps.args,\n    columns: {\n      0: 1,\n      600: 2,\n      960: 'auto'\n    },\n    minColumnWidth: 200\n  }\n}",
					...ColumnStepsWithFloor.parameters?.docs?.source
				},
				description: {
					story: "A step can be `'auto'`: from that width up there is no cap and the\nfloor alone decides the count. Here the steps fix one and two lanes\nbelow 960px, and 200px lanes fill the container above it.",
					...ColumnStepsWithFloor.parameters?.docs?.description
				}
			}
		};
		Spanning.parameters = {
			...Spanning.parameters,
			docs: {
				...Spanning.parameters?.docs,
				source: {
					originalSource: "{\n  parameters: {\n    // FIXME: Resize handles are nameless aria commands; edit mode nests interactive controls (aria-command-name, nested-interactive).\n    // See: https://github.com/WordPress/gutenberg/issues/81596\n    a11y: {\n      test: 'todo'\n    }\n  },\n  args: {\n    columns: 4,\n    layout: [{\n      key: 'a'\n    }, {\n      key: 'wide',\n      width: 2\n    }, {\n      key: 'b'\n    }, {\n      key: 'c'\n    }, {\n      key: 'd'\n    }, {\n      key: 'taller-wide',\n      width: 2\n    }, {\n      key: 'e'\n    }],\n    children: [<Tile key=\"a\" tone=\"brand\" height={120} index={1} />, <Tile key=\"wide\" tone=\"info\" height={100} index={2}>\n                span 2\n            </Tile>, <Tile key=\"b\" tone=\"success\" height={80} index={3} />, <Tile key=\"c\" tone=\"warning\" height={200} index={4} />, <Tile key=\"d\" tone=\"error\" height={90} index={5} />, <Tile key=\"taller-wide\" tone=\"neutral\" height={160} index={6}>\n                span 2\n            </Tile>, <Tile key=\"e\" tone=\"brand\" height={110} index={7} />]\n  }\n}",
					...Spanning.parameters?.docs?.source
				},
				description: {
					story: "Items with `width: 2` span two lanes. The skyline picks a span\nposition that minimizes the resulting baseline across spanned\nlanes.",
					...Spanning.parameters?.docs?.description
				}
			}
		};
		EditMode.parameters = {
			...EditMode.parameters,
			docs: {
				...EditMode.parameters?.docs,
				source: {
					originalSource: "{\n  parameters: {\n    // FIXME: Resize handles are nameless aria commands; edit mode nests interactive controls (aria-command-name, nested-interactive).\n    // See: https://github.com/WordPress/gutenberg/issues/81596\n    a11y: {\n      test: 'todo'\n    }\n  },\n  args: {\n    columns: 4,\n    editMode: true\n  },\n  render: function EditModeStory(args) {\n    const initial: (DashboardLanesLayoutItem & {\n      tone: Tone;\n      height: number;\n      label: string;\n    })[] = [{\n      key: 'a',\n      draggable: false,\n      tone: 'brand',\n      height: 120,\n      label: 'pinned'\n    }, {\n      key: 'b',\n      tone: 'info',\n      height: 200,\n      label: '200px'\n    }, {\n      key: 'wide',\n      width: 2,\n      tone: 'success',\n      height: 100,\n      label: 'span 2'\n    }, {\n      key: 'c',\n      tone: 'warning',\n      height: 160,\n      label: '160px'\n    }, {\n      key: 'd',\n      tone: 'error',\n      height: 90,\n      label: '90px'\n    }, {\n      key: 'e',\n      tone: 'neutral',\n      height: 240,\n      label: '240px'\n    }, {\n      key: 'f',\n      tone: 'brand',\n      height: 140,\n      label: '140px'\n    }];\n    const [tiles, setTiles] = useState(initial);\n    const layout: DashboardLanesLayoutItem[] = tiles.map(({\n      tone: _tone,\n      height: _height,\n      label: _label,\n      ...item\n    }) => item);\n    const onChangeLayout = (next: DashboardLanesLayoutItem[]) => {\n      setTiles(next.map(item => {\n        const existing = tiles.find(t => t.key === item.key);\n        return {\n          ...item,\n          tone: existing?.tone ?? 'neutral',\n          height: existing?.height ?? 100,\n          label: existing?.label ?? item.key\n        };\n      }));\n    };\n    const tileElements = useMemo(() => tiles.map((tile, i) => <Tile key={tile.key} tone={tile.tone} height={tile.height} index={i + 1}>\n                        {tile.label}\n                    </Tile>), [tiles]);\n    return <DashboardLanes {...args} layout={layout} onChangeLayout={onChangeLayout}>\n                {tileElements}\n            </DashboardLanes>;\n  }\n}",
					...EditMode.parameters?.docs?.source
				},
				description: {
					story: "Edit mode: drag to reorder, resize from the bottom-right corner\n(horizontal only — heights are content-driven). Drop commits the\nnew layout via `onChangeLayout`.\n\nWhile `editMode` is on, `<DashboardLanes />` paints its default\noverlay behind the tiles to mark the lane tracks. Lanes paint\ncolumns only — there are no row markers because heights are\ncontent-driven.\n\nTheme the default look in place via `--wp-grid-overlay-tile-bg`,\nor replace the visual wholesale\nby passing `renderGridOverlay`. See the `Custom Grid Overlay`\nstory below for a full override example.",
					...EditMode.parameters?.docs?.description
				}
			}
		};
		SizeLimits.parameters = {
			...SizeLimits.parameters,
			docs: {
				...SizeLimits.parameters?.docs,
				source: {
					originalSource: "{\n  name: 'Per-Item Size Limits',\n  parameters: {\n    // FIXME: Resize handles are nameless aria commands; edit mode nests interactive controls (aria-command-name, nested-interactive).\n    // See: https://github.com/WordPress/gutenberg/issues/81596\n    a11y: {\n      test: 'todo'\n    }\n  },\n  args: {\n    columns: 12,\n    editMode: true,\n    itemLimits: {\n      min: {\n        minWidth: 360\n      },\n      max: {\n        maxWidth: 500\n      },\n      ranged: {\n        minWidth: 300,\n        maxWidth: 500\n      }\n    }\n  },\n  render: function SizeLimitsStory(args) {\n    const initial: (DashboardLanesLayoutItem & {\n      tone: Tone;\n      height: number;\n      label: string;\n    })[] = [{\n      key: 'min',\n      width: 2,\n      tone: 'info',\n      height: 140,\n      label: 'min 360px wide'\n    }, {\n      key: 'max',\n      width: 3,\n      tone: 'warning',\n      height: 120,\n      label: 'max 500px wide'\n    }, {\n      key: 'ranged',\n      width: 2,\n      tone: 'brand',\n      height: 150,\n      label: 'min 300, max 500px wide'\n    }, {\n      key: 'free-a',\n      width: 3,\n      tone: 'neutral',\n      height: 180,\n      label: 'no limits'\n    }, {\n      key: 'free-b',\n      width: 2,\n      tone: 'neutral',\n      height: 100,\n      label: 'no limits'\n    }, {\n      key: 'free-c',\n      width: 3,\n      tone: 'neutral',\n      height: 160,\n      label: 'no limits'\n    }];\n    const [tiles, setTiles] = useState(initial);\n    const layout: DashboardLanesLayoutItem[] = tiles.map(({\n      tone: _tone,\n      height: _height,\n      label: _label,\n      ...item\n    }) => item);\n    const onChangeLayout = (next: DashboardLanesLayoutItem[]) => {\n      setTiles(next.map(item => {\n        const existing = tiles.find(t => t.key === item.key);\n        return {\n          ...item,\n          tone: existing?.tone ?? 'neutral',\n          height: existing?.height ?? 100,\n          label: existing?.label ?? item.key\n        };\n      }));\n    };\n    const tileElements = useMemo(() => tiles.map(tile => <Tile key={tile.key} tone={tile.tone} height={tile.height}>\n                        {tile.label}\n                    </Tile>), [tiles]);\n    return <DashboardLanes {...args} layout={layout} onChangeLayout={onChangeLayout}>\n                {tileElements}\n            </DashboardLanes>;\n  }\n}",
					...SizeLimits.parameters?.docs?.source
				},
				description: {
					story: "Per-item width limits via `itemLimits`, in pixels. The wide tile\nstops shrinking at its minimum, the capped tile stops growing at its\nmaximum, the ranged tile stays between both, and the free tiles keep\nthe full range. Lanes take no height limits; lane heights are\ncontent-driven.",
					...SizeLimits.parameters?.docs?.description
				}
			}
		};
		CustomGridOverlayStory.parameters = {
			...CustomGridOverlayStory.parameters,
			docs: {
				...CustomGridOverlayStory.parameters?.docs,
				source: {
					originalSource: "{\n  parameters: {\n    // FIXME: Resize handles are nameless aria commands; edit mode nests interactive controls (aria-command-name, nested-interactive).\n    // See: https://github.com/WordPress/gutenberg/issues/81596\n    a11y: {\n      test: 'todo'\n    }\n  },\n  name: 'Custom Grid Overlay',\n  args: {\n    columns: 4,\n    editMode: true\n  },\n  render: function CustomGridOverlayRender(args) {\n    const initial: (DashboardLanesLayoutItem & {\n      tone: Tone;\n      height: number;\n      label: string;\n    })[] = [{\n      key: 'a',\n      tone: 'brand',\n      height: 140,\n      label: '140px'\n    }, {\n      key: 'b',\n      tone: 'info',\n      height: 200,\n      label: '200px'\n    }, {\n      key: 'wide',\n      width: 2,\n      tone: 'success',\n      height: 120,\n      label: 'span 2'\n    }, {\n      key: 'c',\n      tone: 'warning',\n      height: 180,\n      label: '180px'\n    }, {\n      key: 'd',\n      tone: 'error',\n      height: 100,\n      label: '100px'\n    }, {\n      key: 'e',\n      tone: 'neutral',\n      height: 220,\n      label: '220px'\n    }];\n    const [tiles, setTiles] = useState(initial);\n    const layout: DashboardLanesLayoutItem[] = tiles.map(({\n      tone: _tone,\n      height: _height,\n      label: _label,\n      ...item\n    }) => item);\n    const onChangeLayout = (next: DashboardLanesLayoutItem[]) => {\n      setTiles(next.map(item => {\n        const existing = tiles.find(t => t.key === item.key);\n        return {\n          ...item,\n          tone: existing?.tone ?? 'neutral',\n          height: existing?.height ?? 100,\n          label: existing?.label ?? item.key\n        };\n      }));\n    };\n    const tileElements = useMemo(() => tiles.map((tile, i) => <Tile key={tile.key} tone={tile.tone} height={tile.height} index={i + 1}>\n                        {tile.label}\n                    </Tile>), [tiles]);\n    return <DashboardLanes {...args} layout={layout} onChangeLayout={onChangeLayout} renderGridOverlay={NumberedLanesOverlay}>\n                {tileElements}\n            </DashboardLanes>;\n  }\n}",
					...CustomGridOverlayStory.parameters?.docs?.source
				},
				description: {
					story: "Replaces the surface's default edit-mode overlay with a custom\nvisual through the `renderGridOverlay` prop. The same contract as\n`<DashboardGrid />`'s override path, with `rowHeight` omitted from\nthe render props because lanes are content-driven vertically.\n\nPass `renderGridOverlay={ () => null }` to suppress the overlay\nentirely while keeping `editMode` interactions on.",
					...CustomGridOverlayStory.parameters?.docs?.description
				}
			}
		};
	})))();
}
//#endregion
init_index_story();
export { ColumnSteps, ColumnStepsWithFloor, Columns, CustomGridOverlayStory, Default, EditMode, InteractiveContent, SizeLimits, Spanning, meta as default };
