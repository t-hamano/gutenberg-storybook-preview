import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C1RZKCc6.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { o as clsx, s as init_clsx } from "./iframe-D4D-SsYo.js";
import { n as init_build_module, t as inertValue } from "./build-module-DRvOo7DC.js";
import { n as init_stack, t as Stack } from "./stack-DCjz3kq7.js";
import { n as useEnableWpCompatOverlaySlot } from "./use-enable-wp-compat-overlay-slot-BLINu99Y.js";
import { C as init_constants, a as init_field_types, o as normalizeFields } from "./dataform-BZ-EGs0W.js";
import { B as init_dataviews_bulk_actions, C as init_use_filters, E as init_dataviews_layouts, F as hasPaginationControls, H as dataviews_context_default, I as init_dataviews_pagination, L as init_use_delayed_loading, N as DataViewsPagination, P as dataviews_pagination_default, R as useDelayedLoading, S as init_filters, T as VIEW_LAYOUTS, U as init_dataviews_context, V as useSomeItemHasAPossibleBulkAction, _ as filters_toggled_default, a as init_use_data, b as toggle_default, c as useContainerWidth, d as dataviews_view_config_default, f as init_dataviews_view_config, g as init_dataviews_layout, h as DataViewsLayout, i as useInfiniteScroll, l as DataviewsViewConfigDropdown, m as init_dataviews_search, n as usePageClamp, o as useData, p as dataviews_search_default, r as init_use_infinite_scroll, s as init_use_container_width, t as init_use_page_clamp, u as ViewTypeMenu, v as init_filters_toggled, w as use_filters_default, x as filters_default, y as init_toggle, z as BulkActionsFooter } from "./use-page-clamp-CIEpz2qV.js";
//#region ../packages/dataviews/build-module/components/dataviews-footer/index.mjs
function DataViewsFooter() {
	const { view, paginationInfo: { totalItems = 0, totalPages }, data, actions = EMPTY_ARRAY$1, isLoading, hasInitiallyLoaded } = (0, import_react.useContext)(dataviews_context_default);
	const isRefreshing = !!isLoading && hasInitiallyLoaded && !!data?.length;
	const isDelayedRefreshing = useDelayedLoading(!!isRefreshing);
	const hasBulkActions = useSomeItemHasAPossibleBulkAction(actions, data) && ["table", "grid"].includes(view.type);
	const hasPagination = hasPaginationControls(view, {
		totalItems,
		totalPages
	});
	if (!totalItems || !hasBulkActions && !hasPagination) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)("div", {
		className: "dataviews-footer",
		inert: inertValue(isRefreshing),
		children: /* @__PURE__ */ (0, import_jsx_runtime$1.jsxs)(Stack, {
			direction: "row",
			justify: "end",
			align: "center",
			className: clsx("dataviews-footer__content", { "is-refreshing": isDelayedRefreshing }),
			gap: "sm",
			children: [hasBulkActions && /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)(BulkActionsFooter, {}), /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)(dataviews_pagination_default, {})]
		})
	});
}
var import_jsx_runtime$1, EMPTY_ARRAY$1;
function init_dataviews_footer() {
	return (init_dataviews_footer = __esmMin((() => {
		init_clsx();
		init_react();
		init_build_module();
		init_stack();
		init_dataviews_context();
		init_dataviews_pagination();
		init_dataviews_bulk_actions();
		init_constants();
		init_use_delayed_loading();
		import_jsx_runtime$1 = require_jsx_runtime();
		EMPTY_ARRAY$1 = [];
	})))();
}
//#endregion
//#region ../packages/dataviews/build-module/dataviews/index.mjs
function DefaultUI({ header, search = true, searchLabel = void 0 }) {
	const { view } = (0, import_react.useContext)(dataviews_context_default);
	const isInfiniteScroll = view.infiniteScrollEnabled;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Stack, {
			direction: "row",
			align: "top",
			justify: "space-between",
			className: clsx("dataviews__view-actions", { "dataviews__view-actions--infinite-scroll": isInfiniteScroll }),
			gap: "xs",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Stack, {
				direction: "row",
				justify: "start",
				gap: "sm",
				className: "dataviews__search",
				children: [search && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(dataviews_search_default, { label: searchLabel }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(toggle_default, {})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Stack, {
				direction: "row",
				gap: "xs",
				style: { flexShrink: 0 },
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(dataviews_view_config_default, {}), header]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(filters_toggled_default, { className: "dataviews-filters__container" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataViewsLayout, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataViewsFooter, {})
	] });
}
function DataViews({ view, onChangeView, fields, search = true, searchLabel = void 0, actions = EMPTY_ARRAY, data, getItemId = defaultGetItemId, getItemLevel, isLoading = false, paginationInfo, defaultLayouts: defaultLayoutsProperty = DEFAULT_LAYOUTS, selection: selectionProperty, onChangeSelection, onClickItem, renderItemLink, isItemClickable = defaultIsItemClickable, header, children, config = { perPageSizes: [
	10,
	20,
	50,
	100
] }, empty, onReset }) {
	useEnableWpCompatOverlaySlot();
	const [selectionState, setSelectionState] = (0, import_react.useState)([]);
	const isUncontrolled = selectionProperty === void 0 || onChangeSelection === void 0;
	const selection = isUncontrolled ? selectionState : selectionProperty;
	const { data: displayData, paginationInfo: displayPaginationInfo, hasInitiallyLoaded, setVisibleEntries } = useData({
		view,
		data,
		getItemId,
		isLoading,
		selection,
		paginationInfo
	});
	const containerRef = (0, import_react.useRef)(null);
	const [containerWidth, resizeObserverRef] = useContainerWidth();
	const [openedFilter, setOpenedFilter] = (0, import_react.useState)(null);
	function setSelectionWithChange(value) {
		const newValue = typeof value === "function" ? value(selection) : value;
		if (isUncontrolled) setSelectionState(newValue);
		if (onChangeSelection) onChangeSelection(newValue);
	}
	const _fields = (0, import_react.useMemo)(() => normalizeFields(fields), [fields]);
	const _selection = (0, import_react.useMemo)(() => {
		if (view.infiniteScrollEnabled) return selection;
		return selection.filter((id) => data.some((item) => getItemId(item) === id));
	}, [
		selection,
		data,
		getItemId,
		view.infiniteScrollEnabled
	]);
	const filters = use_filters_default(_fields, view);
	const hasPrimaryOrLockedFilters = (0, import_react.useMemo)(() => (filters || []).some((filter) => filter.isPrimary || filter.isLocked), [filters]);
	const [isShowingFilter, setIsShowingFilter] = (0, import_react.useState)(hasPrimaryOrLockedFilters);
	const { intersectionObserver } = useInfiniteScroll({
		view,
		onChangeView,
		isLoading,
		paginationInfo,
		containerRef,
		setVisibleEntries
	});
	usePageClamp({
		view,
		onChangeView,
		isLoading,
		totalPages: paginationInfo.totalPages
	});
	(0, import_react.useEffect)(() => {
		if (hasPrimaryOrLockedFilters && !isShowingFilter) setIsShowingFilter(true);
	}, [hasPrimaryOrLockedFilters, isShowingFilter]);
	const defaultLayouts = (0, import_react.useMemo)(() => Object.fromEntries(Object.entries(defaultLayoutsProperty).filter(([layoutType]) => {
		return dataViewsLayouts.some((viewLayout) => viewLayout.type === layoutType);
	}).map(([key, value]) => [key, value === true ? {} : value])), [defaultLayoutsProperty]);
	if (!defaultLayouts[view.type]) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(dataviews_context_default.Provider, {
		value: {
			view,
			onChangeView,
			fields: _fields,
			actions,
			data: displayData,
			isLoading,
			paginationInfo: displayPaginationInfo,
			selection: _selection,
			onChangeSelection: setSelectionWithChange,
			openedFilter,
			setOpenedFilter,
			getItemId,
			getItemLevel,
			isItemClickable,
			onClickItem,
			renderItemLink,
			containerWidth,
			containerRef,
			resizeObserverRef,
			defaultLayouts,
			filters,
			isShowingFilter,
			setIsShowingFilter,
			config,
			empty,
			hasInitiallyLoaded,
			onReset,
			intersectionObserver
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "dataviews-wrapper",
			children: children ?? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DefaultUI, {
				header,
				search,
				searchLabel
			})
		})
	});
}
var import_jsx_runtime, defaultGetItemId, defaultIsItemClickable, EMPTY_ARRAY, DEFAULT_LAYOUTS, dataViewsLayouts, DataViewsSubComponents, dataviews_default;
function init_dataviews() {
	return (init_dataviews = __esmMin((() => {
		init_clsx();
		init_react();
		init_stack();
		init_dataviews_context();
		init_dataviews_layouts();
		init_filters(), init_filters_toggled(), init_use_filters(), init_toggle();
		init_dataviews_layout();
		init_dataviews_footer();
		init_dataviews_search();
		init_dataviews_bulk_actions();
		init_dataviews_pagination();
		init_dataviews_view_config();
		init_field_types();
		init_use_container_width();
		init_use_data();
		init_use_infinite_scroll();
		init_use_page_clamp();
		import_jsx_runtime = require_jsx_runtime();
		defaultGetItemId = (item) => item.id;
		defaultIsItemClickable = () => true;
		EMPTY_ARRAY = [];
		DEFAULT_LAYOUTS = {
			table: {},
			grid: {},
			list: {}
		};
		dataViewsLayouts = VIEW_LAYOUTS.filter((viewLayout) => !viewLayout.isPicker);
		DataViewsSubComponents = DataViews;
		DataViewsSubComponents.BulkActionToolbar = BulkActionsFooter;
		DataViewsSubComponents.Filters = filters_default;
		DataViewsSubComponents.FiltersToggled = filters_toggled_default;
		DataViewsSubComponents.FiltersToggle = toggle_default;
		DataViewsSubComponents.Layout = DataViewsLayout;
		DataViewsSubComponents.LayoutSwitcher = ViewTypeMenu;
		DataViewsSubComponents.Pagination = DataViewsPagination;
		DataViewsSubComponents.Search = dataviews_search_default;
		DataViewsSubComponents.ViewConfig = DataviewsViewConfigDropdown;
		DataViewsSubComponents.Footer = DataViewsFooter;
		dataviews_default = DataViewsSubComponents;
	})))();
}
//#endregion
export { init_dataviews as n, dataviews_default as t };
