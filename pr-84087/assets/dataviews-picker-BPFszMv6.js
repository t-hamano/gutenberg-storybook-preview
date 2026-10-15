import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C1RZKCc6.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { o as clsx, s as init_clsx } from "./iframe-D4D-SsYo.js";
import { n as init_stack, t as Stack } from "./stack-DCjz3kq7.js";
import { n as useEnableWpCompatOverlaySlot } from "./use-enable-wp-compat-overlay-slot-BLINu99Y.js";
import { a as init_field_types, o as normalizeFields } from "./dataform-BZ-EGs0W.js";
import { A as init_dataviews_picker_footer, C as init_use_filters, D as DataViewsPickerBulkActionToolbar, E as init_dataviews_layouts, H as dataviews_context_default, I as init_dataviews_pagination, M as DataViewsPageSelect, N as DataViewsPagination, O as DataViewsPickerFooter, S as init_filters, T as VIEW_LAYOUTS, U as init_dataviews_context, _ as filters_toggled_default, a as init_use_data, b as toggle_default, c as useContainerWidth, d as dataviews_view_config_default, f as init_dataviews_view_config, g as init_dataviews_layout, h as DataViewsLayout, i as useInfiniteScroll, j as DataViewsPageNavigation, k as PickerActions, l as DataviewsViewConfigDropdown, m as init_dataviews_search, n as usePageClamp, o as useData, p as dataviews_search_default, r as init_use_infinite_scroll, s as init_use_container_width, t as init_use_page_clamp, u as ViewTypeMenu, v as init_filters_toggled, w as use_filters_default, x as filters_default, y as init_toggle } from "./use-page-clamp-CIEpz2qV.js";
//#region ../packages/dataviews/build-module/dataviews-picker/index.mjs
function DefaultUI({ search = true, searchLabel = void 0 }) {
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
				gap: "sm",
				justify: "start",
				className: "dataviews__search",
				children: [search && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(dataviews_search_default, { label: searchLabel }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(toggle_default, {})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stack, {
				direction: "row",
				gap: "xs",
				style: { flexShrink: 0 },
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(dataviews_view_config_default, {})
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(filters_toggled_default, { className: "dataviews-filters__container" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataViewsLayout, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataViewsPickerFooter, {})
	] });
}
function DataViewsPicker({ view, onChangeView, fields, search = true, searchLabel = void 0, actions = EMPTY_ARRAY, data, getItemId = defaultGetItemId, isLoading = false, paginationInfo, defaultLayouts: defaultLayoutsProperty = DEFAULT_PICKER_LAYOUTS, selection, onChangeSelection, children, config = { perPageSizes: [
	10,
	20,
	50,
	100
] }, itemListLabel, empty, onReset }) {
	useEnableWpCompatOverlaySlot();
	const { data: displayData, setVisibleEntries } = useData({
		view,
		data,
		getItemId,
		selection,
		paginationInfo
	});
	const containerRef = (0, import_react.useRef)(null);
	const [containerWidth, resizeObserverRef] = useContainerWidth();
	const [openedFilter, setOpenedFilter] = (0, import_react.useState)(null);
	function setSelectionWithChange(value) {
		const newValue = typeof value === "function" ? value(selection) : value;
		if (onChangeSelection) onChangeSelection(newValue);
	}
	const _fields = (0, import_react.useMemo)(() => normalizeFields(fields), [fields]);
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
		return dataViewsPickerLayouts.some((viewLayout) => viewLayout.type === layoutType);
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
			paginationInfo,
			isItemClickable,
			selection,
			onChangeSelection: setSelectionWithChange,
			openedFilter,
			setOpenedFilter,
			getItemId,
			containerWidth,
			containerRef,
			resizeObserverRef,
			defaultLayouts,
			filters,
			isShowingFilter,
			setIsShowingFilter,
			config,
			itemListLabel,
			empty,
			onReset,
			hasInitiallyLoaded: true,
			intersectionObserver
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "dataviews-picker-wrapper",
			children: children ?? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DefaultUI, {
				search,
				searchLabel
			})
		})
	});
}
var import_jsx_runtime, isItemClickable, dataViewsPickerLayouts, defaultGetItemId, EMPTY_ARRAY, DEFAULT_PICKER_LAYOUTS, DataViewsPickerSubComponents, dataviews_picker_default;
function init_dataviews_picker() {
	return (init_dataviews_picker = __esmMin((() => {
		init_clsx();
		init_react();
		init_stack();
		init_dataviews_context();
		init_dataviews_layouts();
		init_filters(), init_filters_toggled(), init_use_filters(), init_toggle();
		init_dataviews_layout();
		init_dataviews_picker_footer();
		init_dataviews_search();
		init_dataviews_pagination();
		init_dataviews_view_config();
		init_field_types();
		init_use_container_width();
		init_use_data();
		init_use_infinite_scroll();
		init_use_page_clamp();
		import_jsx_runtime = require_jsx_runtime();
		isItemClickable = () => false;
		dataViewsPickerLayouts = VIEW_LAYOUTS.filter((viewLayout) => viewLayout.isPicker);
		defaultGetItemId = (item) => item.id;
		EMPTY_ARRAY = [];
		DEFAULT_PICKER_LAYOUTS = {
			pickerGrid: true,
			pickerTable: true
		};
		DataViewsPickerSubComponents = DataViewsPicker;
		DataViewsPickerSubComponents.Actions = PickerActions;
		DataViewsPickerSubComponents.BulkActionToolbar = DataViewsPickerBulkActionToolbar;
		DataViewsPickerSubComponents.Footer = DataViewsPickerFooter;
		DataViewsPickerSubComponents.Filters = filters_default;
		DataViewsPickerSubComponents.FiltersToggled = filters_toggled_default;
		DataViewsPickerSubComponents.FiltersToggle = toggle_default;
		DataViewsPickerSubComponents.Layout = DataViewsLayout;
		DataViewsPickerSubComponents.LayoutSwitcher = ViewTypeMenu;
		DataViewsPickerSubComponents.PageNavigation = DataViewsPageNavigation;
		DataViewsPickerSubComponents.PageSelect = DataViewsPageSelect;
		DataViewsPickerSubComponents.Pagination = DataViewsPagination;
		DataViewsPickerSubComponents.Search = dataviews_search_default;
		DataViewsPickerSubComponents.ViewConfig = DataviewsViewConfigDropdown;
		dataviews_picker_default = DataViewsPickerSubComponents;
	})))();
}
//#endregion
export { init_dataviews_picker as n, dataviews_picker_default as t };
