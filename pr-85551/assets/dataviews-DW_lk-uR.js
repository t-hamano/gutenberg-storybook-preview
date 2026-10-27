import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as init_build_module, t as deprecated } from "./build-module-BWCORUbm.js";
import { a as init_clsx, i as clsx } from "./iframe-UtSZlYID.js";
import { n as init_build_module$1, t as inertValue } from "./build-module-DRvOo7DC.js";
import { n as init_stack, t as Stack } from "./stack-BHmRFw1F.js";
import { n as useEnableWpCompatOverlaySlot } from "./use-enable-wp-compat-overlay-slot-BLINu99Y.js";
import { n as normalizeFields, t as init_field_types, y as init_constants } from "./field-types-Xuoe8WDm.js";
import { B as useDelayedLoading, C as filters_default, D as VIEW_LAYOUTS, E as useFilters, F as DataViewsPagination, G as DataViewsContext, H as useSomeItemHasAPossibleBulkAction, I as dataviews_pagination_default, K as init_dataviews_context, L as hasPaginationControls, O as init_dataviews_layouts, R as init_dataviews_pagination, S as init_toggle, T as init_use_filters, U as getFooterMessage, V as init_dataviews_bulk_actions, W as init_get_footer_message, _ as DataViewsLayout, a as init_use_infinite_scroll, b as init_filters_toggled, c as useData, d as DataViewsViewConfig, f as DataviewsViewConfigDropdown, g as init_dataviews_search, h as DataViewsSearch, i as usePageClamp, l as init_use_container_width, m as init_dataviews_view_config, o as useInfiniteScroll, p as ViewTypeMenu, r as init_use_page_clamp, s as init_use_data, u as useContainerWidth, v as init_dataviews_layout, w as init_filters, x as FiltersToggle, y as FiltersToggled, z as init_use_delayed_loading } from "./filter-sort-and-paginate-CUWNN5W3.js";
//#region ../packages/dataviews/src/components/dataviews-footer/item-count.tsx
function DataViewsItemCount() {
	const { data, paginationInfo, view } = (0, import_react.useContext)(DataViewsContext);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)("span", {
		className: "dataviews-footer__item-count",
		children: getFooterMessage(0, data.length, paginationInfo.totalItems, !!view.infiniteScrollEnabled)
	}, void 0, false, {
		fileName: _jsxFileName$2,
		lineNumber: 8,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime$2, _jsxFileName$2;
function init_item_count() {
	return (init_item_count = __esmMin((() => {
		init_react();
		init_dataviews_context();
		init_get_footer_message();
		import_jsx_dev_runtime$2 = require_jsx_dev_runtime();
		_jsxFileName$2 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/dataviews/src/components/dataviews-footer/item-count.tsx";
	})))();
}
//#endregion
//#region ../packages/dataviews/src/components/dataviews-footer/index.tsx
function DataViewsFooter() {
	const { view, paginationInfo: { totalItems = 0, totalPages }, data, actions = EMPTY_ARRAY$1, isLoading, hasInitiallyLoaded } = (0, import_react.useContext)(DataViewsContext);
	const isRefreshing = !!isLoading && hasInitiallyLoaded && !!data?.length;
	const isDelayedRefreshing = useDelayedLoading(!!isRefreshing);
	const hasBulkActions = useSomeItemHasAPossibleBulkAction(actions, data) && ["table", "grid"].includes(view.type);
	const hasPagination = hasPaginationControls(view, {
		totalItems,
		totalPages
	});
	if (!totalItems || !hasBulkActions && !hasPagination) return null;
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)("div", {
		className: "dataviews-footer",
		inert: inertValue(isRefreshing),
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(Stack, {
			direction: "row",
			justify: "end",
			align: "center",
			className: clsx("dataviews-footer__content", { "is-refreshing": isDelayedRefreshing }),
			gap: "sm",
			children: [hasBulkActions && /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(DataViewsItemCount, {}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 54,
				columnNumber: 25
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(dataviews_pagination_default, {}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 55,
				columnNumber: 5
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName$1,
			lineNumber: 45,
			columnNumber: 4
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 44,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime$1, _jsxFileName$1, EMPTY_ARRAY$1;
function init_dataviews_footer() {
	return (init_dataviews_footer = __esmMin((() => {
		init_clsx();
		init_react();
		init_build_module$1();
		init_stack();
		init_dataviews_context();
		init_dataviews_pagination();
		init_dataviews_bulk_actions();
		init_constants();
		init_use_delayed_loading();
		init_item_count();
		import_jsx_dev_runtime$1 = require_jsx_dev_runtime();
		_jsxFileName$1 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/dataviews/src/components/dataviews-footer/index.tsx";
		EMPTY_ARRAY$1 = [];
	})))();
}
//#endregion
//#region ../packages/dataviews/src/dataviews/index.tsx
function DefaultUI({ header, search = true, searchLabel = void 0 }) {
	const { view } = (0, import_react.useContext)(DataViewsContext);
	const isInfiniteScroll = view.infiniteScrollEnabled;
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack, {
			direction: "row",
			align: "top",
			justify: "space-between",
			className: clsx("dataviews__view-actions", { "dataviews__view-actions--infinite-scroll": isInfiniteScroll }),
			gap: "xs",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack, {
				direction: "row",
				justify: "start",
				gap: "sm",
				className: "dataviews__search",
				children: [search && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DataViewsSearch, { label: searchLabel }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 74,
					columnNumber: 18
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FiltersToggle, {}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 75,
					columnNumber: 6
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 68,
				columnNumber: 5
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack, {
				direction: "row",
				gap: "xs",
				style: { flexShrink: 0 },
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DataViewsViewConfig, {}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 78,
					columnNumber: 6
				}, this), header]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 77,
				columnNumber: 5
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 58,
			columnNumber: 4
		}, this),
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FiltersToggled, { className: "dataviews-filters__container" }, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 82,
			columnNumber: 4
		}, this),
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DataViewsLayout, {}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 83,
			columnNumber: 4
		}, this),
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DataViewsFooter, {}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 84,
			columnNumber: 4
		}, this)
	] }, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 57,
		columnNumber: 3
	}, this);
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
	const filters = useFilters(_fields, view);
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
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DataViewsContext.Provider, {
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
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "dataviews-wrapper",
			children: children ?? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DefaultUI, {
				header,
				search,
				searchLabel
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 255,
				columnNumber: 6
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 253,
			columnNumber: 4
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 221,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime, _jsxFileName, defaultGetItemId, defaultIsItemClickable, EMPTY_ARRAY, DEFAULT_LAYOUTS, dataViewsLayouts, DataViewsSubComponents;
function init_dataviews() {
	return (init_dataviews = __esmMin((() => {
		init_clsx();
		init_react();
		init_stack();
		init_build_module();
		init_dataviews_context();
		init_dataviews_layouts();
		init_filters(), init_filters_toggled(), init_use_filters(), init_toggle();
		init_dataviews_layout();
		init_dataviews_footer();
		init_dataviews_search();
		init_dataviews_pagination();
		init_dataviews_view_config();
		init_field_types();
		init_use_container_width();
		init_use_data();
		init_use_infinite_scroll();
		init_use_page_clamp();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/dataviews/src/dataviews/index.tsx";
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
		DataViewsSubComponents.BulkActionToolbar = function DeprecatedBulkActionToolbar() {
			deprecated("DataViews.BulkActionToolbar", { hint: "Remove this component from your composition. Built-in table and grid layouts render bulk actions automatically." });
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 290,
				columnNumber: 10
			}, this);
		};
		DataViewsSubComponents.Filters = filters_default;
		DataViewsSubComponents.FiltersToggled = FiltersToggled;
		DataViewsSubComponents.FiltersToggle = FiltersToggle;
		DataViewsSubComponents.Layout = DataViewsLayout;
		DataViewsSubComponents.LayoutSwitcher = ViewTypeMenu;
		DataViewsSubComponents.Pagination = DataViewsPagination;
		DataViewsSubComponents.Search = DataViewsSearch;
		DataViewsSubComponents.ViewConfig = DataviewsViewConfigDropdown;
		DataViewsSubComponents.Footer = DataViewsFooter;
		try {
			DataViewsSubComponents.__docgenInfo = {
				"description": "`DataViews` renders a dataset using configurable layouts (table, grid, list)\nwith built-in search, filtering, sorting, pagination, and actions. Use it to\ndisplay and manage a collection of records.",
				"displayName": "dataviews",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/dataviews/src/dataviews/index.tsx",
				"methods": [],
				"props": {
					"view": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/dataviews.ts",
							"name": "TypeLiteral"
						}],
						"description": "The current view configuration: layout type, filters, sorting,\npagination, search term, and visible fields.",
						"name": "view",
						"required": true,
						"tags": {},
						"type": { "name": "View" }
					},
					"onChangeView": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/dataviews.ts",
							"name": "TypeLiteral"
						}],
						"description": "Callback invoked with the new view whenever the user changes it\n(filtering, sorting, switching layout, changing page, etc.).\nConsumers own the view state and must store the new value.",
						"name": "onChangeView",
						"required": true,
						"tags": {},
						"type": { "name": "(view: View) => void" }
					},
					"fields": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/dataviews.ts",
							"name": "TypeLiteral"
						}],
						"description": "The fields describing each item's data: how to get and render a value,\nplus its sorting and filtering capabilities.",
						"name": "fields",
						"required": true,
						"tags": {},
						"type": { "name": "Field<Item>[]" }
					},
					"search": {
						"defaultValue": { "value": "true" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/dataviews.ts",
							"name": "TypeLiteral"
						}],
						"description": "Whether the global search input is displayed.",
						"name": "search",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"searchLabel": {
						"defaultValue": { "value": "'Search'" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/dataviews.ts",
							"name": "TypeLiteral"
						}],
						"description": "The accessible label and placeholder for the search input.",
						"name": "searchLabel",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"actions": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/dataviews.ts",
							"name": "TypeLiteral"
						}],
						"description": "The actions that can be performed on items, shown per item and, for\nactions supporting bulk, on multi-selections.",
						"name": "actions",
						"required": false,
						"tags": {},
						"type": { "name": "Action<Item>[]" }
					},
					"data": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/dataviews.ts",
							"name": "TypeLiteral"
						}],
						"description": "The dataset to render, already filtered, sorted, and paginated\naccording to the current view.",
						"name": "data",
						"required": true,
						"tags": {},
						"type": { "name": "Item[]" }
					},
					"isLoading": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/dataviews.ts",
							"name": "TypeLiteral"
						}],
						"description": "Whether the data is loading, in which case a loading state is shown.",
						"name": "isLoading",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"paginationInfo": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/dataviews.ts",
							"name": "TypeLiteral"
						}],
						"description": "Pagination totals for the full dataset (not just the current page).",
						"name": "paginationInfo",
						"required": true,
						"tags": {},
						"type": { "name": "{ totalItems: number; totalPages: number; }" }
					},
					"defaultLayouts": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/dataviews.ts",
							"name": "TypeLiteral"
						}],
						"description": "The layouts the user can switch between, mapping each supported layout\ntype to view settings applied when switching to it (or `true` for\ndefaults).",
						"name": "defaultLayouts",
						"required": false,
						"tags": {},
						"type": { "name": "SupportedLayouts" }
					},
					"selection": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/dataviews.ts",
							"name": "TypeLiteral"
						}],
						"description": "The currently selected items, as a list of item ids. When provided\n(together with `onChangeSelection`), selection is controlled.",
						"name": "selection",
						"required": false,
						"tags": {},
						"type": { "name": "string[]" }
					},
					"onChangeSelection": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/dataviews.ts",
							"name": "TypeLiteral"
						}],
						"description": "Callback invoked with the new list of selected item ids whenever the\nselection changes.",
						"name": "onChangeSelection",
						"required": false,
						"tags": {},
						"type": { "name": "((items: string[]) => void)" }
					},
					"onClickItem": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/dataviews.ts",
							"name": "TypeLiteral"
						}],
						"description": "Callback invoked when the user clicks an item's title or media.\nIgnored when `renderItemLink` is provided.",
						"name": "onClickItem",
						"required": false,
						"tags": {},
						"type": { "name": "((item: Item) => void)" }
					},
					"renderItemLink": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/dataviews.ts",
							"name": "TypeLiteral"
						}],
						"description": "Renders the item's title and media as a link. Receives the item along\nwith anchor props to spread onto the link element. Takes precedence\nover `onClickItem`.",
						"name": "renderItemLink",
						"required": false,
						"tags": {},
						"type": { "name": "((props: { item: Item; } & ClassAttributes<HTMLAnchorElement> & AnchorHTMLAttributes<HTMLAnchorElement>) => ReactElement<...>)" }
					},
					"isItemClickable": {
						"defaultValue": { "value": "() => true" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/dataviews.ts",
							"name": "TypeLiteral"
						}],
						"description": "Whether an item is clickable, i.e. whether `onClickItem` or\n`renderItemLink` applies to it.",
						"name": "isItemClickable",
						"required": false,
						"tags": {},
						"type": { "name": "((item: Item) => boolean)" }
					},
					"header": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/dataviews.ts",
							"name": "TypeLiteral"
						}],
						"description": "Extra content rendered in the toolbar area, next to the view\nconfiguration controls.",
						"name": "header",
						"required": false,
						"tags": {},
						"type": { "name": "ReactNode" }
					},
					"getItemLevel": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/dataviews.ts",
							"name": "TypeLiteral"
						}],
						"description": "Returns the hierarchical depth of an item, used to indent items when\nthe view's `showLevels` option is enabled.",
						"name": "getItemLevel",
						"required": false,
						"tags": {},
						"type": { "name": "((item: Item) => number)" }
					},
					"children": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/dataviews.ts",
							"name": "TypeLiteral"
						}],
						"description": "Custom component tree rendered instead of the default layout\ncomposition, using the internal `DataViews.*` sub-components.",
						"name": "children",
						"required": false,
						"tags": {},
						"type": { "name": "ReactNode" }
					},
					"config": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/dataviews.ts",
							"name": "TypeLiteral"
						}],
						"description": "Static configuration of the component's UI.",
						"name": "config",
						"required": false,
						"tags": {},
						"type": { "name": "{ perPageSizes: number[]; mediaFitControl?: boolean; }" }
					},
					"empty": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/dataviews.ts",
							"name": "TypeLiteral"
						}],
						"description": "Content rendered when the dataset is empty (no items match the\ncurrent view).",
						"name": "empty",
						"required": false,
						"tags": {},
						"type": { "name": "ReactNode" }
					},
					"onReset": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/dataviews.ts",
							"name": "TypeLiteral"
						}],
						"description": "Callback to reset the view to its initial state, wired to the\n\"Reset view\" button in the view options popover. When provided, the\nview options toggle also shows a \"modified\" indicator. Pass `false` to\nrender the button disabled (the view is not modified); omit the prop\nto hide the button altogether (no reset support).",
						"name": "onReset",
						"required": false,
						"tags": {},
						"type": { "name": "false | (() => void)" }
					},
					"getItemId": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/dataviews.ts",
							"name": "TypeLiteral"
						}, {
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/dataviews.ts",
							"name": "TypeLiteral"
						}],
						"description": "Returns a unique id for an item. Optional when items already\nhave a string `id` property, which is used by default.\nReturns a unique id for an item. Required when items have no\nstring `id` property.",
						"name": "getItemId",
						"required": false,
						"tags": {},
						"type": { "name": "((item: Item) => string) | ((item: Item) => string)" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
export { init_dataviews as n, DataViewsSubComponents as t };
