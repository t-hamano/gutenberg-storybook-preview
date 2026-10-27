import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as __, t as init_build_module } from "./build-module-v04us4E2.js";
import { a as init_clsx, i as clsx } from "./iframe-UtSZlYID.js";
import { t as icon_default } from "./icon-DEDMwo2v.js";
import { h as category_default } from "./search-control-CIWcoJN_.js";
import { t as image_default } from "./image-B20s8V9q.js";
import { n as init_stack, t as Stack } from "./stack-BHmRFw1F.js";
import { n as useEnableWpCompatOverlaySlot } from "./use-enable-wp-compat-overlay-slot-BLINu99Y.js";
import { n as button_default, r as init_button } from "./button-BxmZjN4X.js";
import { n as modal_default, t as init_modal } from "./modal-OSLgyyS4.js";
import { f as LAYOUT_PICKER_ACTIVITY, n as normalizeFields, p as LAYOUT_PICKER_GRID, t as init_field_types, y as init_constants } from "./field-types-Xuoe8WDm.js";
import { A as DataViewsPickerFooter, C as filters_default, D as VIEW_LAYOUTS, E as useFilters, F as DataViewsPagination, G as DataViewsContext, K as init_dataviews_context, M as init_dataviews_picker_footer, N as DataViewsPageNavigation, O as init_dataviews_layouts, P as DataViewsPageSelect, R as init_dataviews_pagination, S as init_toggle, T as init_use_filters, _ as DataViewsLayout, a as init_use_infinite_scroll, b as init_filters_toggled, c as useData, d as DataViewsViewConfig, f as DataviewsViewConfigDropdown, g as init_dataviews_search, h as DataViewsSearch, i as usePageClamp, j as PickerActions, k as DataViewsPickerBulkActionToolbar, l as init_use_container_width, m as init_dataviews_view_config, n as init_filter_sort_and_paginate, o as useInfiniteScroll, p as ViewTypeMenu, r as init_use_page_clamp, s as init_use_data, t as filterSortAndPaginate, u as useContainerWidth, v as init_dataviews_layout, w as init_filters, x as FiltersToggle, y as FiltersToggled } from "./filter-sort-and-paginate-CUWNN5W3.js";
import { r as init_build_module$1 } from "./library.story-CbQx3MQ6.js";
//#region ../packages/dataviews/src/dataviews-picker/index.tsx
function DefaultUI({ search = true, searchLabel = void 0 }) {
	const { view } = (0, import_react.useContext)(DataViewsContext);
	const isInfiniteScroll = view.infiniteScrollEnabled;
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$3.jsxDEV)(import_jsx_dev_runtime$3.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_dev_runtime$3.jsxDEV)(Stack, {
			direction: "row",
			align: "top",
			justify: "space-between",
			className: clsx("dataviews__view-actions", { "dataviews__view-actions--infinite-scroll": isInfiniteScroll }),
			gap: "xs",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime$3.jsxDEV)(Stack, {
				direction: "row",
				gap: "sm",
				justify: "start",
				className: "dataviews__search",
				children: [search && /* @__PURE__ */ (0, import_jsx_dev_runtime$3.jsxDEV)(DataViewsSearch, { label: searchLabel }, void 0, false, {
					fileName: _jsxFileName$3,
					lineNumber: 218,
					columnNumber: 18
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime$3.jsxDEV)(FiltersToggle, {}, void 0, false, {
					fileName: _jsxFileName$3,
					lineNumber: 219,
					columnNumber: 6
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$3,
				lineNumber: 212,
				columnNumber: 5
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime$3.jsxDEV)(Stack, {
				direction: "row",
				gap: "xs",
				style: { flexShrink: 0 },
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime$3.jsxDEV)(DataViewsViewConfig, {}, void 0, false, {
					fileName: _jsxFileName$3,
					lineNumber: 222,
					columnNumber: 6
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName$3,
				lineNumber: 221,
				columnNumber: 5
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName$3,
			lineNumber: 202,
			columnNumber: 4
		}, this),
		/* @__PURE__ */ (0, import_jsx_dev_runtime$3.jsxDEV)(FiltersToggled, { className: "dataviews-filters__container" }, void 0, false, {
			fileName: _jsxFileName$3,
			lineNumber: 225,
			columnNumber: 4
		}, this),
		/* @__PURE__ */ (0, import_jsx_dev_runtime$3.jsxDEV)(DataViewsLayout, {}, void 0, false, {
			fileName: _jsxFileName$3,
			lineNumber: 226,
			columnNumber: 4
		}, this),
		/* @__PURE__ */ (0, import_jsx_dev_runtime$3.jsxDEV)(DataViewsPickerFooter, {}, void 0, false, {
			fileName: _jsxFileName$3,
			lineNumber: 227,
			columnNumber: 4
		}, this)
	] }, void 0, true, {
		fileName: _jsxFileName$3,
		lineNumber: 201,
		columnNumber: 3
	}, this);
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
		return dataViewsPickerLayouts.some((viewLayout) => viewLayout.type === layoutType);
	}).map(([key, value]) => [key, value === true ? {} : value])), [defaultLayoutsProperty]);
	if (!defaultLayouts[view.type]) return null;
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$3.jsxDEV)(DataViewsContext.Provider, {
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
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime$3.jsxDEV)("div", {
			className: "dataviews-picker-wrapper",
			children: children ?? /* @__PURE__ */ (0, import_jsx_dev_runtime$3.jsxDEV)(DefaultUI, {
				search,
				searchLabel
			}, void 0, false, {
				fileName: _jsxFileName$3,
				lineNumber: 365,
				columnNumber: 6
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName$3,
			lineNumber: 363,
			columnNumber: 4
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$3,
		lineNumber: 333,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime$3, _jsxFileName$3, isItemClickable, dataViewsPickerLayouts, defaultGetItemId, EMPTY_ARRAY, DEFAULT_PICKER_LAYOUTS, DataViewsPickerSubComponents;
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
		import_jsx_dev_runtime$3 = require_jsx_dev_runtime();
		_jsxFileName$3 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/dataviews/src/dataviews-picker/index.tsx";
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
		DataViewsPickerSubComponents.FiltersToggled = FiltersToggled;
		DataViewsPickerSubComponents.FiltersToggle = FiltersToggle;
		DataViewsPickerSubComponents.Layout = DataViewsLayout;
		DataViewsPickerSubComponents.LayoutSwitcher = ViewTypeMenu;
		DataViewsPickerSubComponents.PageNavigation = DataViewsPageNavigation;
		DataViewsPickerSubComponents.PageSelect = DataViewsPageSelect;
		DataViewsPickerSubComponents.Pagination = DataViewsPagination;
		DataViewsPickerSubComponents.Search = DataViewsSearch;
		DataViewsPickerSubComponents.ViewConfig = DataviewsViewConfigDropdown;
		try {
			DataViewsPickerSubComponents.__docgenInfo = {
				"description": "`DataViewsPicker` renders a dataset allowing users to select one or multiple\nitems. It shares the layouts, search, and filtering of `DataViews` but is\ngeared toward choosing items rather than managing them.",
				"displayName": "dataviewspicker",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/dataviews/src/dataviews-picker/index.tsx",
				"methods": [],
				"props": {
					"view": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/dataviews-picker/index.tsx",
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
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/dataviews-picker/index.tsx",
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
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/dataviews-picker/index.tsx",
							"name": "TypeLiteral"
						}],
						"description": "The fields describing each item's data: how to get and render a value,\nplus its sorting and filtering capabilities.",
						"name": "fields",
						"required": true,
						"tags": {},
						"type": { "name": "Field<Item>[]" }
					},
					"actions": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/dataviews-picker/index.tsx",
							"name": "TypeLiteral"
						}],
						"description": "The button actions that can be performed on items. Unlike `DataViews`,\npickers only support button actions (no modals).",
						"name": "actions",
						"required": false,
						"tags": {},
						"type": { "name": "ActionButton<Item>[]" }
					},
					"search": {
						"defaultValue": { "value": "true" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/dataviews-picker/index.tsx",
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
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/dataviews-picker/index.tsx",
							"name": "TypeLiteral"
						}],
						"description": "The accessible label and placeholder for the search input.",
						"name": "searchLabel",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"data": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/dataviews-picker/index.tsx",
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
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/dataviews-picker/index.tsx",
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
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/dataviews-picker/index.tsx",
							"name": "TypeLiteral"
						}],
						"description": "Pagination totals for the full dataset (not just the current page).",
						"name": "paginationInfo",
						"required": true,
						"tags": {},
						"type": { "name": "{ totalItems: number; totalPages: number; }" }
					},
					"defaultLayouts": {
						"defaultValue": { "value": "{ pickerGrid: true, pickerTable: true }" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/dataviews-picker/index.tsx",
							"name": "TypeLiteral"
						}],
						"description": "The layouts the user can switch between, mapping each supported layout\ntype to view settings applied when switching to it (or `true` for\ndefaults). Only picker layouts (`pickerGrid`, `pickerTable`,\n`pickerActivity`) are supported; other layout types are ignored.",
						"name": "defaultLayouts",
						"required": false,
						"tags": {},
						"type": { "name": "SupportedLayouts" }
					},
					"selection": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/dataviews-picker/index.tsx",
							"name": "TypeLiteral"
						}],
						"description": "The currently selected items, as a list of item ids. Selection is\nalways controlled in pickers, so this prop is required.",
						"name": "selection",
						"required": true,
						"tags": {},
						"type": { "name": "string[]" }
					},
					"onChangeSelection": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/dataviews-picker/index.tsx",
							"name": "TypeLiteral"
						}],
						"description": "Callback invoked with the new list of selected item ids whenever the\nselection changes.",
						"name": "onChangeSelection",
						"required": true,
						"tags": {},
						"type": { "name": "(items: string[]) => void" }
					},
					"children": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/dataviews-picker/index.tsx",
							"name": "TypeLiteral"
						}],
						"description": "Custom component tree rendered instead of the default layout\ncomposition, using the internal `DataViewsPicker.*` sub-components.",
						"name": "children",
						"required": false,
						"tags": {},
						"type": { "name": "ReactNode" }
					},
					"config": {
						"defaultValue": { "value": "{ perPageSizes: [ 10, 20, 50, 100 ] }" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/dataviews-picker/index.tsx",
							"name": "TypeLiteral"
						}],
						"description": "Static configuration of the component's UI.",
						"name": "config",
						"required": false,
						"tags": {},
						"type": { "name": "{ perPageSizes: number[]; mediaFitControl?: boolean; }" }
					},
					"itemListLabel": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/dataviews-picker/index.tsx",
							"name": "TypeLiteral"
						}],
						"description": "The accessible label for the list of items rendered by the layout.",
						"name": "itemListLabel",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"empty": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/dataviews-picker/index.tsx",
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
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/dataviews-picker/index.tsx",
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
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/dataviews-picker/index.tsx",
							"name": "TypeLiteral"
						}, {
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/dataviews-picker/index.tsx",
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
//#region ../packages/dataviews/src/dataviews-picker/stories/fixtures.tsx
var import_jsx_dev_runtime$2, _jsxFileName$2, data, fields;
function init_fixtures() {
	return (init_fixtures = __esmMin((() => {
		init_build_module$1();
		init_stack();
		import_jsx_dev_runtime$2 = require_jsx_dev_runtime();
		_jsxFileName$2 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/dataviews/src/dataviews-picker/stories/fixtures.tsx";
		data = [
			{
				id: 1,
				name: {
					title: "Moon",
					description: "The Moon is Earth's only natural satellite, orbiting at an average distance of 384,400 kilometers with a synchronous rotation that leads to fixed lunar phases as seen from Earth. Its cratered surface and subtle glow define night skies, inspiring exploration missions and influencing tides and biological rhythms worldwide."
				},
				image: "https://live.staticflickr.com/7398/9458193857_e1256123e3_z.jpg",
				type: "Satellite",
				isPlanet: false,
				categories: [
					"Solar system",
					"Satellite",
					"Earth",
					"Moon"
				],
				satellites: 0,
				date: "2021-01-01",
				datetime: "2021-01-01T14:30:00Z",
				email: "moon@example.com"
			},
			{
				id: 2,
				name: {
					title: "Io",
					description: "Moon of Jupiter"
				},
				image: "https://live.staticflickr.com/5482/9460973502_07e8ab81fe_z.jpg",
				type: "Satellite",
				isPlanet: false,
				categories: [
					"Solar system",
					"Satellite",
					"Jupiter",
					"Moon"
				],
				satellites: 0,
				date: "2019-01-02",
				datetime: "2019-01-02T09:15:00Z",
				email: "io@example.com"
			},
			{
				id: 3,
				name: {
					title: "Europa",
					description: "Moon of Jupiter"
				},
				image: "https://live.staticflickr.com/65535/31499273012_baf5f38cc1_z.jpg",
				type: "Satellite",
				isPlanet: false,
				categories: [
					"Solar system",
					"Satellite",
					"Jupiter",
					"Moon"
				],
				satellites: 0,
				date: "2025-01-03",
				datetime: "2025-01-03T16:45:30Z",
				email: "europa@example.com"
			},
			{
				id: 4,
				name: {
					title: "Ganymede",
					description: "Largest moon of Jupiter"
				},
				image: "https://live.staticflickr.com/7816/33436473218_a836235935_k.jpg",
				type: "Satellite",
				isPlanet: false,
				categories: [
					"Solar system",
					"Satellite",
					"Jupiter",
					"Moon"
				],
				satellites: 0,
				date: "2022-01-04",
				datetime: "2022-01-04T12:30:00Z",
				email: "ganymede@example.com"
			},
			{
				id: 5,
				name: {
					title: "Callisto",
					description: "Outermost Galilean moon of Jupiter"
				},
				image: "https://live.staticflickr.com/804/27604150528_4512448a9c_c.jpg",
				type: "Satellite",
				isPlanet: false,
				categories: [
					"Solar system",
					"Satellite",
					"Jupiter",
					"Moon"
				],
				satellites: 0,
				date: "2021-01-05",
				datetime: "2021-01-05T14:15:30Z",
				email: "callisto@example.com"
			},
			{
				id: 6,
				name: {
					title: "Amalthea",
					description: "Small irregular moon of Jupiter"
				},
				image: "https://upload.wikimedia.org/wikipedia/commons/6/62/Amalthea.gif",
				type: "Satellite",
				isPlanet: false,
				categories: [
					"Solar system",
					"Satellite",
					"Jupiter",
					"Moon"
				],
				satellites: 0,
				date: "2020-01-06",
				datetime: "2020-01-06T10:45:15Z",
				email: "amalthea@example.com"
			},
			{
				id: 7,
				name: {
					title: "Himalia",
					description: "Largest irregular moon of Jupiter"
				},
				image: "https://upload.wikimedia.org/wikipedia/commons/c/c2/Cassini-Huygens_Image_of_Himalia.png",
				type: "Satellite",
				isPlanet: false,
				categories: [
					"Solar system",
					"Satellite",
					"Jupiter",
					"Moon"
				],
				satellites: 0,
				date: "2019-01-07",
				datetime: "2019-01-07T16:20:45Z",
				email: "himalia@example.com"
			},
			{
				id: 8,
				name: {
					title: "Neptune",
					description: "Ice giant in the Solar system"
				},
				image: "https://live.staticflickr.com/65535/29523683990_000ff4720c_z.jpg",
				type: "Ice giant",
				isPlanet: true,
				categories: [
					"Ice giant",
					"Planet",
					"Solar system"
				],
				satellites: 16,
				date: "2020-01-01",
				datetime: "2020-01-01T11:22:15Z",
				email: "neptune@example.com"
			},
			{
				id: 9,
				name: {
					title: "Triton",
					description: "Largest moon of Neptune"
				},
				image: "https://live.staticflickr.com/65535/50728384241_02c5126c30_h.jpg",
				type: "Satellite",
				isPlanet: false,
				categories: [
					"Solar system",
					"Satellite",
					"Neptune",
					"Moon"
				],
				satellites: 0,
				date: "2021-02-01",
				datetime: "2021-02-01T11:30:00Z",
				email: "triton@example.com"
			},
			{
				id: 10,
				name: {
					title: "Nereid",
					description: "Irregular moon of Neptune"
				},
				image: "https://upload.wikimedia.org/wikipedia/commons/b/b0/Nereid-Voyager2.jpg",
				type: "Satellite",
				isPlanet: false,
				categories: [
					"Solar system",
					"Satellite",
					"Neptune",
					"Moon"
				],
				satellites: 0,
				date: "2020-02-02",
				datetime: "2020-02-02T15:45:30Z",
				email: "nereid@example.com"
			},
			{
				id: 11,
				name: {
					title: "Proteus",
					description: "Second-largest moon of Neptune"
				},
				image: "https://live.staticflickr.com/65535/50727825808_bf427e007b_c.jpg",
				type: "Satellite",
				isPlanet: false,
				categories: [
					"Solar system",
					"Satellite",
					"Neptune",
					"Moon"
				],
				satellites: 0,
				date: "2019-02-03",
				datetime: "2019-02-03T09:20:15Z",
				email: "proteus@example.com"
			},
			{
				id: 12,
				name: {
					title: "Mercury",
					description: "Terrestrial planet in the Solar system"
				},
				image: "https://live.staticflickr.com/813/40199101735_e5e92ffd11_z.jpg",
				type: "Terrestrial",
				isPlanet: true,
				categories: [
					"Terrestrial",
					"Planet",
					"Solar system"
				],
				satellites: 0,
				date: "2020-01-02",
				datetime: "2020-01-02T13:05:45Z",
				email: "mercury@example.com"
			},
			{
				id: 13,
				name: {
					title: "Venus",
					description: "La planète Vénus"
				},
				image: "https://live.staticflickr.com/8025/7544560662_900e717727_z.jpg",
				type: "Terrestrial",
				isPlanet: true,
				categories: [
					"Terrestrial",
					"Planet",
					"Solar system"
				],
				satellites: 0,
				date: "2020-01-02",
				datetime: "2020-01-02T08:30:12Z",
				email: "venus@example.com"
			},
			{
				id: 14,
				name: {
					title: "Earth",
					description: "Terrestrial planet in the Solar system"
				},
				image: "https://live.staticflickr.com/3762/9460163562_964fe6af07_z.jpg",
				type: "Terrestrial",
				isPlanet: true,
				categories: [
					"Terrestrial",
					"Planet",
					"Solar system",
					"Earth"
				],
				satellites: 1,
				date: "2023-01-03",
				datetime: "2023-01-03T18:15:30Z",
				email: "earth@example.com"
			},
			{
				id: 15,
				name: {
					title: "Mars",
					description: "Terrestrial planet in the Solar system"
				},
				image: "https://live.staticflickr.com/8151/7651156426_e047f4d219_z.jpg",
				type: "Terrestrial",
				isPlanet: true,
				categories: [
					"Terrestrial",
					"Planet",
					"Solar system"
				],
				satellites: 2,
				date: "2020-01-01",
				datetime: "2020-01-01T20:45:00Z",
				email: "mars@example.com"
			},
			{
				id: 16,
				name: {
					title: "Jupiter",
					description: "Gas giant in the Solar system"
				},
				image: "https://staging-jubilee.flickr.com/2853/9458010071_6e6fc41408_z.jpg",
				type: "Gas giant",
				isPlanet: true,
				categories: [
					"Solar system",
					"Planet",
					"Gas giant"
				],
				satellites: 97,
				date: "2017-01-01",
				datetime: "2017-01-01T00:01:00Z",
				email: "jupiter@example.com"
			},
			{
				id: 17,
				name: {
					title: "Saturn",
					description: "Gas giant in the Solar system"
				},
				image: "https://live.staticflickr.com/5524/9464658509_fc2d83dff5_z.jpg",
				type: "Gas giant",
				isPlanet: true,
				categories: [
					"Gas giant",
					"Solar system",
					"Planet"
				],
				satellites: 274,
				date: "2020-02-01",
				datetime: "2020-02-01T00:02:00Z",
				email: "saturn@example.com"
			},
			{
				id: 18,
				name: {
					title: "Uranus",
					description: "Ice giant in the Solar system"
				},
				image: "https://live.staticflickr.com/65535/5553350875_3072df91e2_c.jpg",
				type: "Ice giant",
				isPlanet: true,
				categories: [
					"Planet",
					"Ice giant",
					"Solar system"
				],
				satellites: 28,
				date: "2020-03-01",
				datetime: "2020-03-01T10:15:20Z",
				email: "uranus@example.com"
			},
			{
				id: 19,
				name: {
					title: "TheRoguePlanetWithAVeryLongNameToTestTitleOverflow",
					description: "A long unbroken title, used to check that layouts overflow instead of breaking."
				},
				image: "https://live.staticflickr.com/1357/935805705_119635028c_b.jpg",
				type: "Rogue planet",
				isPlanet: true,
				categories: ["Planet", "Rogue planet"],
				satellites: 0,
				date: "2020-03-01",
				datetime: "2020-03-01T10:15:20Z",
				email: "longunbrokentitle@example.com"
			},
			{
				id: 20,
				name: {
					title: "Titan",
					description: "Largest moon of Saturn"
				},
				image: "https://upload.wikimedia.org/wikipedia/commons/f/fe/Titan_in_true_color_by_Kevin_M._Gill.jpg",
				type: "Satellite",
				isPlanet: false,
				categories: [
					"Solar system",
					"Satellite",
					"Saturn",
					"Moon"
				],
				satellites: 0,
				date: "2022-02-15",
				datetime: "2022-02-15T08:30:00Z",
				email: "titan@example.com"
			},
			{
				id: 21,
				name: {
					title: "Enceladus",
					description: "Icy moon of Saturn with geysers"
				},
				image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/PIA17202_-_Approaching_Enceladus.jpg/960px-PIA17202_-_Approaching_Enceladus.jpg",
				type: "Satellite",
				isPlanet: false,
				categories: [
					"Solar system",
					"Satellite",
					"Saturn",
					"Moon"
				],
				satellites: 0,
				date: "2023-03-20",
				datetime: "2023-03-20T11:45:00Z",
				email: "enceladus@example.com"
			},
			{
				id: 22,
				name: {
					title: "Mimas",
					description: "Death Star moon of Saturn"
				},
				image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Mimas_Cassini.jpg/960px-Mimas_Cassini.jpg",
				type: "Satellite",
				isPlanet: false,
				categories: [
					"Solar system",
					"Satellite",
					"Saturn",
					"Moon"
				],
				satellites: 0,
				date: "2021-07-12",
				datetime: "2021-07-12T15:20:00Z",
				email: "mimas@example.com"
			},
			{
				id: 23,
				name: {
					title: "Charon",
					description: "Largest moon of Pluto"
				},
				image: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Charon_in_True_Color_-_High-Res.jpg",
				type: "Satellite",
				isPlanet: false,
				categories: [
					"Solar system",
					"Satellite",
					"Pluto",
					"Moon"
				],
				satellites: 0,
				date: "2020-09-25",
				datetime: "2020-09-25T13:15:00Z",
				email: "charon@example.com"
			},
			{
				id: 24,
				name: {
					title: "Phobos",
					description: "Larger moon of Mars"
				},
				image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Phobos_colour_2008.jpg/960px-Phobos_colour_2008.jpg",
				type: "Satellite",
				isPlanet: false,
				categories: [
					"Solar system",
					"Satellite",
					"Mars",
					"Moon"
				],
				satellites: 0,
				date: "2019-06-14",
				datetime: "2019-06-14T07:45:00Z",
				email: "phobos@example.com"
			},
			{
				id: 25,
				name: {
					title: "Deimos",
					description: "Smaller moon of Mars"
				},
				image: "https://upload.wikimedia.org/wikipedia/commons/8/86/NASA-Deimos-MarsMoon-20090221.jpg",
				type: "Satellite",
				isPlanet: false,
				categories: [
					"Solar system",
					"Satellite",
					"Mars",
					"Moon"
				],
				satellites: 0,
				date: "2018-11-30",
				datetime: "2018-11-30T16:00:00Z",
				email: "deimos@example.com"
			},
			{
				id: 26,
				name: {
					title: "Rhea",
					description: "Second largest moon of Saturn"
				},
				image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/PIA07763_Rhea_full_globe5.jpg/2560px-PIA07763_Rhea_full_globe5.jpg",
				type: "Satellite",
				isPlanet: false,
				categories: [
					"Solar system",
					"Satellite",
					"Saturn",
					"Moon"
				],
				satellites: 0,
				date: "2022-08-19",
				datetime: "2022-08-19T10:30:00Z",
				email: "rhea@example.com"
			},
			{
				id: 27,
				name: {
					title: "Iapetus",
					description: "Two-toned moon of Saturn"
				},
				image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Iapetus_trailing_natural_color.jpg/2560px-Iapetus_trailing_natural_color.jpg",
				type: "Satellite",
				isPlanet: false,
				categories: [
					"Solar system",
					"Satellite",
					"Saturn",
					"Moon"
				],
				satellites: 0,
				date: "2023-01-22",
				datetime: "2023-01-22T14:20:00Z",
				email: "iapetus@example.com"
			},
			{
				id: 28,
				name: {
					title: "Dione",
					description: "Icy moon of Saturn"
				},
				image: "https://upload.wikimedia.org/wikipedia/commons/d/d0/Dione_in_natural_light_%28cropped%29.jpg",
				type: "Satellite",
				isPlanet: false,
				categories: [
					"Solar system",
					"Satellite",
					"Saturn",
					"Moon"
				],
				satellites: 0,
				date: "2021-04-17",
				datetime: "2021-04-17T12:00:00Z",
				email: "dione@example.com"
			},
			{
				id: 29,
				name: {
					title: "Tethys",
					description: "Mid-sized moon of Saturn"
				},
				image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Tethys_-_Rev_15_%2837267740632%29.png/960px-Tethys_-_Rev_15_%2837267740632%29.png",
				type: "Satellite",
				isPlanet: false,
				categories: [
					"Solar system",
					"Satellite",
					"Saturn",
					"Moon"
				],
				satellites: 0,
				date: "2020-12-05",
				datetime: "2020-12-05T09:40:00Z",
				email: "tethys@example.com"
			},
			{
				id: 30,
				name: {
					title: "Miranda",
					description: "Unusual moon of Uranus"
				},
				image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Miranda_mosaic_in_color_-_Voyager_2.png/960px-Miranda_mosaic_in_color_-_Voyager_2.png",
				type: "Satellite",
				isPlanet: false,
				categories: [
					"Solar system",
					"Satellite",
					"Uranus",
					"Moon"
				],
				satellites: 0,
				date: "2024-02-28",
				datetime: "2024-02-28T11:15:00Z",
				email: "miranda@example.com"
			},
			{
				id: 31,
				name: {
					title: "Ariel",
					description: "Brightest moon of Uranus"
				},
				image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Ariel_in_monochrome.jpg/960px-Ariel_in_monochrome.jpg",
				type: "Satellite",
				isPlanet: false,
				categories: [
					"Solar system",
					"Satellite",
					"Uranus",
					"Moon"
				],
				satellites: 0,
				date: "2023-09-10",
				datetime: "2023-09-10T08:25:00Z",
				email: "ariel@example.com"
			},
			{
				id: 32,
				name: {
					title: "Umbriel",
					description: "Dark moon of Uranus"
				},
				image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/PIA00040_Umbrielx2.47.jpg/560px-PIA00040_Umbrielx2.47.jpg",
				type: "Satellite",
				isPlanet: false,
				categories: [
					"Solar system",
					"Satellite",
					"Uranus",
					"Moon"
				],
				satellites: 0,
				date: "2022-05-03",
				datetime: "2022-05-03T15:50:00Z",
				email: "umbriel@example.com"
			},
			{
				id: 33,
				name: {
					title: "Titania",
					description: "Largest moon of Uranus"
				},
				image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Titania_-_Jan_24_1986_%2822689891350%29.jpg/560px-Titania_-_Jan_24_1986_%2822689891350%29.jpg",
				type: "Satellite",
				isPlanet: false,
				categories: [
					"Solar system",
					"Satellite",
					"Uranus",
					"Moon"
				],
				satellites: 0,
				date: "2021-10-18",
				datetime: "2021-10-18T13:35:00Z",
				email: "titania@example.com"
			},
			{
				id: 34,
				name: {
					title: "Oberon",
					description: "Outermost major moon of Uranus"
				},
				image: "https://upload.wikimedia.org/wikipedia/commons/6/6d/Oberon_in_true_color_by_Kevin_M._Gill.jpg",
				type: "Satellite",
				isPlanet: false,
				categories: [
					"Solar system",
					"Satellite",
					"Uranus",
					"Moon"
				],
				satellites: 0,
				date: "2020-07-22",
				datetime: "2020-07-22T10:05:00Z",
				email: "oberon@example.com"
			},
			{
				id: 35,
				name: {
					title: "Ceres",
					description: "Largest object in the asteroid belt"
				},
				image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Ceres_-_RC3_-_Haulani_Crater_%2822381131691%29_%28cropped%29.jpg/560px-Ceres_-_RC3_-_Haulani_Crater_%2822381131691%29_%28cropped%29.jpg",
				type: "Dwarf planet",
				isPlanet: false,
				categories: [
					"Solar system",
					"Dwarf planet",
					"Asteroid belt"
				],
				satellites: 0,
				date: "2024-08-14",
				datetime: "2024-08-14T16:40:00Z",
				email: "ceres@example.com"
			},
			{
				id: 36,
				name: {
					title: "Makemake",
					description: "Reddish dwarf planet"
				},
				image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Makemake_and_its_moon.jpg/560px-Makemake_and_its_moon.jpg",
				type: "Dwarf planet",
				isPlanet: false,
				categories: [
					"Solar system",
					"Dwarf planet",
					"Trans-Neptunian"
				],
				satellites: 1,
				date: "2022-03-29",
				datetime: "2022-03-29T12:55:00Z",
				email: "makemake@example.com"
			},
			{
				id: 37,
				name: {
					title: "Haumea",
					description: "Elongated dwarf planet"
				},
				image: "https://upload.wikimedia.org/wikipedia/commons/2/2b/Haumea_Hubble.png",
				type: "Dwarf planet",
				isPlanet: false,
				categories: [
					"Solar system",
					"Dwarf planet",
					"Trans-Neptunian"
				],
				satellites: 2,
				date: "2021-11-11",
				datetime: "2021-11-11T09:10:00Z",
				email: "haumea@example.com"
			}
		];
		fields = [
			{
				label: "Image",
				id: "image",
				type: "media",
				header: /* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)(Stack, {
					direction: "row",
					gap: "xs",
					justify: "start",
					align: "center",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)(icon_default, { icon: image_default }, void 0, false, {
						fileName: _jsxFileName$2,
						lineNumber: 588,
						columnNumber: 5
					}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)("span", {
						style: { minWidth: 0 },
						children: "Image"
					}, void 0, false, {
						fileName: _jsxFileName$2,
						lineNumber: 589,
						columnNumber: 5
					}, void 0)]
				}, void 0, true, {
					fileName: _jsxFileName$2,
					lineNumber: 587,
					columnNumber: 4
				}, void 0),
				render: ({ item }) => {
					return /* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)("img", {
						src: item.image,
						alt: ""
					}, void 0, false, {
						fileName: _jsxFileName$2,
						lineNumber: 593,
						columnNumber: 11
					}, void 0);
				}
			},
			{
				label: "Title",
				id: "title",
				type: "text",
				enableHiding: true,
				enableGlobalSearch: true,
				filterBy: { operators: [
					"contains",
					"notContains",
					"startsWith"
				] },
				isValid: { required: true },
				getValue: ({ item }) => item.name.title,
				setValue: ({ value }) => ({ name: { title: value } })
			},
			{
				id: "date",
				label: "Date",
				type: "date"
			},
			{
				id: "datetime",
				label: "Datetime",
				type: "datetime"
			},
			{
				label: "Type",
				id: "type",
				enableHiding: false,
				elements: [
					{
						value: "Satellite",
						label: "Satellite"
					},
					{
						value: "Ice giant",
						label: "Ice giant"
					},
					{
						value: "Terrestrial",
						label: "Terrestrial"
					},
					{
						value: "Gas giant",
						label: "Gas giant"
					},
					{
						value: "Dwarf planet",
						label: "Dwarf planet"
					},
					{
						value: "Asteroid",
						label: "Asteroid"
					},
					{
						value: "Comet",
						label: "Comet"
					},
					{
						value: "Kuiper belt object",
						label: "Kuiper belt object"
					},
					{
						value: "Protoplanet",
						label: "Protoplanet"
					},
					{
						value: "Planetesimal",
						label: "Planetesimal"
					},
					{
						value: "Minor planet",
						label: "Minor planet"
					},
					{
						value: "Trans-Neptunian object",
						label: "Trans-Neptunian object"
					}
				],
				filterBy: { operators: ["is", "isNot"] }
			},
			{
				id: "isPlanet",
				label: "Is Planet",
				type: "boolean",
				setValue: ({ value }) => ({ isPlanet: value === "true" }),
				elements: [{
					value: true,
					label: "True"
				}, {
					value: false,
					label: "False"
				}]
			},
			{
				label: "Satellites",
				id: "satellites",
				type: "integer",
				enableSorting: true
			},
			{
				label: "Description",
				id: "description",
				type: "text",
				enableSorting: false,
				enableGlobalSearch: true,
				filterBy: { operators: [
					"contains",
					"notContains",
					"startsWith"
				] },
				getValue: ({ item }) => item.name.description,
				setValue: ({ value }) => ({ name: { description: value } })
			},
			{
				label: "Email",
				id: "email",
				type: "email"
			},
			{
				label: "Categories",
				id: "categories",
				header: /* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)(Stack, {
					direction: "row",
					gap: "xs",
					justify: "start",
					align: "center",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)(icon_default, { icon: category_default }, void 0, false, {
						fileName: _jsxFileName$2,
						lineNumber: 694,
						columnNumber: 5
					}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)("span", {
						style: { minWidth: 0 },
						children: "Categories"
					}, void 0, false, {
						fileName: _jsxFileName$2,
						lineNumber: 695,
						columnNumber: 5
					}, void 0)]
				}, void 0, true, {
					fileName: _jsxFileName$2,
					lineNumber: 693,
					columnNumber: 4
				}, void 0),
				elements: [
					{
						value: "Solar system",
						label: "Solar system"
					},
					{
						value: "Satellite",
						label: "Satellite"
					},
					{
						value: "Moon",
						label: "Moon"
					},
					{
						value: "Earth",
						label: "Earth"
					},
					{
						value: "Jupiter",
						label: "Jupiter"
					},
					{
						value: "Planet",
						label: "Planet"
					},
					{
						value: "Ice giant",
						label: "Ice giant"
					},
					{
						value: "Terrestrial",
						label: "Terrestrial"
					},
					{
						value: "Gas giant",
						label: "Gas giant"
					}
				],
				type: "array",
				enableGlobalSearch: true
			}
		];
	})))();
}
//#endregion
//#region ../packages/dataviews/src/dataviews-picker/stories/free-composition.tsx
var import_jsx_dev_runtime$1, _jsxFileName$1, FreeCompositionComponent;
function init_free_composition() {
	return (init_free_composition = __esmMin((() => {
		init_react();
		init_build_module();
		init_stack();
		init_dataviews_picker();
		init_filter_sort_and_paginate();
		init_constants();
		init_fixtures();
		import_jsx_dev_runtime$1 = require_jsx_dev_runtime();
		_jsxFileName$1 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/dataviews/src/dataviews-picker/stories/free-composition.tsx";
		FreeCompositionComponent = ({ pagination = "page-select" }) => {
			const [view, setView] = (0, import_react.useState)({
				type: LAYOUT_PICKER_ACTIVITY,
				fields: [],
				titleField: "title",
				mediaField: "image",
				descriptionField: "description",
				search: "",
				filters: [],
				page: 1,
				perPage: 6
			});
			const [selection, setSelection] = (0, import_react.useState)([]);
			const { data: shownData, paginationInfo } = (0, import_react.useMemo)(() => filterSortAndPaginate(data, view, fields), [view]);
			const actions = [{
				id: "apply",
				label: __("Apply"),
				isPrimary: true,
				supportsBulk: false,
				callback(items) {
					window.alert(items.map((item) => item.name.title).join(", "));
				}
			}];
			return /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(DataViewsPickerSubComponents, {
				view,
				onChangeView: setView,
				fields,
				data: shownData,
				paginationInfo,
				getItemId: (item) => item.id.toString(),
				selection,
				onChangeSelection: setSelection,
				actions,
				defaultLayouts: { pickerActivity: true },
				itemListLabel: __("Galactic Bodies"),
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(Stack, {
						direction: "row",
						gap: "sm",
						justify: "start",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(DataViewsPickerSubComponents.Search, { label: __("Search galactic bodies") }, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 95,
							columnNumber: 5
						}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(DataViewsPickerSubComponents.FiltersToggle, {}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 98,
							columnNumber: 5
						}, void 0)]
					}, void 0, true, {
						fileName: _jsxFileName$1,
						lineNumber: 94,
						columnNumber: 4
					}, void 0),
					/* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(DataViewsPickerSubComponents.FiltersToggled, {}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 100,
						columnNumber: 4
					}, void 0),
					/* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(DataViewsPickerSubComponents.Layout, {}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 101,
						columnNumber: 4
					}, void 0),
					/* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(DataViewsPickerSubComponents.Footer, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(DataViewsPickerSubComponents.Pagination, { children: pagination === "page-select" ? /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(DataViewsPickerSubComponents.PageSelect, {}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 105,
						columnNumber: 7
					}, void 0) : /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(DataViewsPickerSubComponents.PageNavigation, {}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 107,
						columnNumber: 7
					}, void 0) }, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 103,
						columnNumber: 5
					}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(DataViewsPickerSubComponents.Actions, {}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 110,
						columnNumber: 5
					}, void 0)] }, void 0, true, {
						fileName: _jsxFileName$1,
						lineNumber: 102,
						columnNumber: 4
					}, void 0)
				]
			}, void 0, true, {
				fileName: _jsxFileName$1,
				lineNumber: 81,
				columnNumber: 3
			}, void 0);
		};
		try {
			FreeCompositionComponent.__docgenInfo = {
				"description": "Demonstrates composing `DataViewsPicker` for a container too narrow for its\ndefault UI, the way a sidebar panel is. Narrow the canvas with Storybook's\nviewport control to see what the composition buys.\n\nThe footer is the part worth composing: its full row holds the selection\ncount, the pagination and the actions, which is more than a sidebar can\ncarry. `DataViewsPicker.Footer` and `DataViewsPicker.Pagination` render\nchildren in place of their default contents, so this one keeps one\npagination part and the action and drops the rest:\n\n```jsx\n<DataViewsPicker.Footer>\n	<DataViewsPicker.Pagination>\n		<DataViewsPicker.PageSelect />\n	</DataViewsPicker.Pagination>\n	<DataViewsPicker.Actions />\n</DataViewsPicker.Footer>\n```\n\nWhich part earns the room is the consumer's call, so the `pagination` control\nswaps the page select for `DataViewsPicker.PageNavigation`, the previous/next\nbuttons, which suit a list short enough to walk through a page at a time.\n\nThe row spreads its parts, so a footer left holding one of them — on a single\npage of results, where the pagination renders nothing — keeps it at the\nstart. Each part takes a `className`, so placing it anywhere else is done\nfrom the consumer's own stylesheet rather than by the picker.",
				"displayName": "FreeCompositionComponent",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/dataviews/src/dataviews-picker/stories/free-composition.tsx",
				"methods": [],
				"props": { "pagination": {
					"defaultValue": { "value": "page-select" },
					"declarations": [{
						"fileName": "gutenberg-storybook-preview/packages/dataviews/src/dataviews-picker/stories/free-composition.tsx",
						"name": "TypeLiteral"
					}],
					"description": "Which pagination part the composed footer keeps.",
					"name": "pagination",
					"required": false,
					"tags": {},
					"type": {
						"name": "enum",
						"raw": "\"page-select\" | \"page-navigation\"",
						"value": [{ "value": "\"page-select\"" }, { "value": "\"page-navigation\"" }]
					}
				} },
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/dataviews/src/dataviews-picker/stories/index.story.tsx
var import_jsx_dev_runtime, _jsxFileName, meta, storyArgs, storyArgTypes, DataViewsPickerContent, Default, FreeComposition, WithModal;
function init_index_story() {
	return (init_index_story = __esmMin((() => {
		init_react();
		init_modal(), init_button();
		init_stack();
		init_dataviews_picker();
		init_constants();
		init_filter_sort_and_paginate();
		init_free_composition();
		init_fixtures();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/dataviews/src/dataviews-picker/stories/index.story.tsx";
		meta = {
			tags: ["manifest"],
			id: "dataviews-dataviewspicker",
			title: "Design System/DataViews/DataViewsPicker",
			component: DataViewsPickerSubComponents
		};
		storyArgs = {
			perPageSizes: [
				10,
				25,
				50,
				100
			],
			isMultiselectable: false,
			isGrouped: false,
			infiniteScrollEnabled: false,
			mediaFit: "cover",
			mediaFitControl: true
		};
		storyArgTypes = {
			isMultiselectable: {
				control: "boolean",
				description: "Whether multiselection is supported"
			},
			perPageSizes: {
				control: "object",
				description: "Array of available page sizes"
			},
			isGrouped: {
				control: "boolean",
				description: "Whether the items are grouped or ungrouped"
			},
			infiniteScrollEnabled: {
				control: "boolean",
				description: "Whether the infinite scroll is enabled. Enabling this disables the \"Is grouped\" option"
			},
			mediaFit: {
				control: "select",
				options: ["cover", "contain"],
				description: "How the media field fills the preview box: cropped to fill it (\"cover\") or fitted inside it (\"contain\"), letterboxing the media so its own aspect ratio stays visible"
			},
			mediaFitControl: {
				control: "boolean",
				description: "Whether the view options offer the \"Original aspect ratio\" toggle, letting users switch the media fit themselves"
			}
		};
		DataViewsPickerContent = ({ perPageSizes = [
			10,
			25,
			50,
			100
		], isMultiselectable, isGrouped, infiniteScrollEnabled, mediaFit = "cover", mediaFitControl = true, actions: customActions, selection: customSelection }) => {
			const [view, setView] = (0, import_react.useState)(() => {
				const baseView = {
					fields: [],
					titleField: "title",
					mediaField: "image",
					search: "",
					filters: [],
					type: LAYOUT_PICKER_GRID,
					groupBy: isGrouped ? {
						field: "type",
						direction: "asc"
					} : void 0,
					infiniteScrollEnabled,
					layout: { mediaFit }
				};
				if (infiniteScrollEnabled) return {
					...baseView,
					startPosition: 1,
					perPage: 10
				};
				return {
					...baseView,
					page: 1,
					perPage: 10
				};
			});
			const { data: shownData, paginationInfo } = (0, import_react.useMemo)(() => {
				return filterSortAndPaginate(data, view, fields);
			}, [view]);
			(0, import_react.useEffect)(() => {
				setView((prevView) => {
					const baseUpdates = {
						groupBy: isGrouped && !infiniteScrollEnabled ? {
							field: "type",
							direction: "asc"
						} : void 0,
						infiniteScrollEnabled,
						layout: {
							...prevView.layout,
							mediaFit
						}
					};
					if (infiniteScrollEnabled) return {
						...prevView,
						...baseUpdates,
						startPosition: 1,
						perPage: 15,
						page: void 0
					};
					return {
						...prevView,
						...baseUpdates,
						page: prevView.page ?? 1,
						perPage: prevView.perPage ?? 10,
						startPosition: void 0
					};
				});
			}, [
				isGrouped,
				infiniteScrollEnabled,
				mediaFit
			]);
			const [selection, setSelection] = (0, import_react.useState)(customSelection || []);
			const actions = customActions || [{
				id: "cancel",
				label: "Cancel",
				supportsBulk: isMultiselectable,
				callback() {
					setSelection([]);
				}
			}, {
				id: "confirm",
				label: "Confirm",
				isPrimary: true,
				supportsBulk: isMultiselectable,
				callback() {
					const selectedItemNames = data.filter((item) => selection?.includes(String(item.id))).map((item) => item.name.title).join(", ");
					window.alert(selectedItemNames);
				}
			}];
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [infiniteScrollEnabled && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("style", { children: `
                    .dataviews-picker-wrapper {
                        height: 750px;
                        overflow: auto;
                    }
                ` }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 182,
				columnNumber: 5
			}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DataViewsPickerSubComponents, {
				actions,
				selection,
				onChangeSelection: (selectedIds) => {
					setSelection(selectedIds);
				},
				getItemId: (item) => item.id.toString(),
				paginationInfo,
				data: shownData,
				view,
				fields,
				onChangeView: setView,
				config: {
					perPageSizes,
					mediaFitControl
				},
				defaultLayouts: {
					pickerGrid: true,
					pickerTable: true,
					pickerActivity: true
				},
				itemListLabel: "Galactic Bodies"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 189,
				columnNumber: 4
			}, void 0)] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 180,
				columnNumber: 3
			}, void 0);
		};
		Default = ({ perPageSizes = [
			10,
			25,
			50,
			100
		], isMultiselectable, isGrouped, infiniteScrollEnabled, mediaFit, mediaFitControl }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DataViewsPickerContent, {
			perPageSizes,
			isMultiselectable,
			isGrouped,
			infiniteScrollEnabled,
			mediaFit,
			mediaFitControl
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 228,
			columnNumber: 2
		}, void 0);
		Default.args = storyArgs;
		Default.argTypes = storyArgTypes;
		Default.parameters = { a11y: { test: "todo" } };
		FreeComposition = {
			render: FreeCompositionComponent,
			args: { pagination: "page-select" },
			argTypes: { pagination: {
				control: "select",
				options: ["page-select", "page-navigation"],
				description: "Which pagination part the composed footer keeps: the \"Page N of M\" select, or the previous/next buttons"
			} },
			parameters: { a11y: { test: "todo" } }
		};
		WithModal = ({ perPageSizes = [
			10,
			25,
			50,
			100
		], isMultiselectable, isGrouped, infiniteScrollEnabled, mediaFit, mediaFitControl }) => {
			const [isModalOpen, setIsModalOpen] = (0, import_react.useState)(false);
			const [selectedItems, setSelectedItems] = (0, import_react.useState)([]);
			const modalActions = [{
				id: "cancel",
				label: "Cancel",
				supportsBulk: isMultiselectable,
				callback() {
					setIsModalOpen(false);
				}
			}, {
				id: "confirm",
				label: "Confirm",
				isPrimary: true,
				supportsBulk: isMultiselectable,
				callback(items) {
					setSelectedItems(items);
					setIsModalOpen(false);
				}
			}];
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack, {
					direction: "row",
					justify: "left",
					gap: "sm",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(button_default, {
						variant: "primary",
						__next40pxDefaultSize: true,
						onClick: () => setIsModalOpen(true),
						children: "Open Picker Modal"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 306,
						columnNumber: 5
					}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(button_default, {
						onClick: () => setSelectedItems([]),
						disabled: !selectedItems.length,
						accessibleWhenDisabled: true,
						__next40pxDefaultSize: true,
						children: "Clear Selection"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 313,
						columnNumber: 5
					}, void 0)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 305,
					columnNumber: 4
				}, void 0),
				selectedItems.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
					"Selected:",
					" ",
					selectedItems.map((item) => item.name.title).join(", ")
				] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 323,
					columnNumber: 5
				}, void 0),
				isModalOpen && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("style", { children: `
                        .components-modal__content {
                            padding: 0;
                        }
                        .components-modal__frame.is-full-screen .components-modal__content {
                            margin-bottom: 0;
                        }
                    ` }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 332,
					columnNumber: 6
				}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(modal_default, {
					title: "Select Items",
					onRequestClose: () => setIsModalOpen(false),
					isFullScreen: false,
					size: "fill",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DataViewsPickerContent, {
						perPageSizes,
						isMultiselectable,
						isGrouped,
						infiniteScrollEnabled,
						mediaFit,
						mediaFitControl,
						actions: modalActions,
						selection: selectedItems.map((item) => String(item.id))
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 346,
						columnNumber: 7
					}, void 0)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 340,
					columnNumber: 6
				}, void 0)] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 331,
					columnNumber: 5
				}, void 0)
			] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 304,
				columnNumber: 3
			}, void 0);
		};
		WithModal.args = storyArgs;
		WithModal.argTypes = storyArgTypes;
		try {
			Default.__docgenInfo = {
				"description": "",
				"displayName": "Default",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/dataviews/src/dataviews-picker/stories/index.story.tsx",
				"methods": [],
				"props": {
					"perPageSizes": {
						"defaultValue": { "value": "[ 10, 25, 50, 100 ]" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/dataviews-picker/stories/index.story.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "perPageSizes",
						"required": false,
						"tags": {},
						"type": { "name": "number[]" }
					},
					"isMultiselectable": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/dataviews-picker/stories/index.story.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "isMultiselectable",
						"required": true,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"isGrouped": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/dataviews-picker/stories/index.story.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "isGrouped",
						"required": true,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"infiniteScrollEnabled": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/dataviews-picker/stories/index.story.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "infiniteScrollEnabled",
						"required": true,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"mediaFit": {
						"defaultValue": { "value": "cover" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/dataviews-picker/stories/index.story.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "mediaFit",
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "MediaFit",
							"value": [{ "value": "\"cover\"" }, { "value": "\"contain\"" }]
						}
					},
					"mediaFitControl": {
						"defaultValue": { "value": "true" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/dataviews-picker/stories/index.story.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "mediaFitControl",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			meta.__docgenInfo = {
				"description": "Demonstrates composing `DataViewsPicker` for a container too narrow for its\ndefault UI, the way a sidebar panel is. Narrow the canvas with Storybook's\nviewport control to see what the composition buys.\n\nThe footer is the part worth composing: its full row holds the selection\ncount, the pagination and the actions, which is more than a sidebar can\ncarry. `DataViewsPicker.Footer` and `DataViewsPicker.Pagination` render\nchildren in place of their default contents, so this one keeps one\npagination part and the action and drops the rest:\n\n```jsx\n<DataViewsPicker.Footer>\n	<DataViewsPicker.Pagination>\n		<DataViewsPicker.PageSelect />\n	</DataViewsPicker.Pagination>\n	<DataViewsPicker.Actions />\n</DataViewsPicker.Footer>\n```\n\nWhich part earns the room is the consumer's call, so the `pagination` control\nswaps the page select for `DataViewsPicker.PageNavigation`, the previous/next\nbuttons, which suit a list short enough to walk through a page at a time.\n\nThe row spreads its parts, so a footer left holding one of them — on a single\npage of results, where the pagination renders nothing — keeps it at the\nstart. Each part takes a `className`, so placing it anywhere else is done\nfrom the consumer's own stylesheet rather than by the picker.",
				"displayName": "FreeCompositionComponent",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/dataviews/src/dataviews-picker/stories/index.story.tsx",
				"methods": [],
				"props": { "pagination": {
					"defaultValue": { "value": "page-select" },
					"declarations": [{
						"fileName": "gutenberg-storybook-preview/packages/dataviews/src/dataviews-picker/stories/free-composition.tsx",
						"name": "TypeLiteral"
					}],
					"description": "Which pagination part the composed footer keeps.",
					"name": "pagination",
					"required": false,
					"tags": {},
					"type": {
						"name": "enum",
						"raw": "\"page-select\" | \"page-navigation\"",
						"value": [{ "value": "\"page-select\"" }, { "value": "\"page-navigation\"" }]
					}
				} },
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			WithModal.__docgenInfo = {
				"description": "",
				"displayName": "WithModal",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/dataviews/src/dataviews-picker/stories/index.story.tsx",
				"methods": [],
				"props": {
					"perPageSizes": {
						"defaultValue": { "value": "[ 10, 25, 50, 100 ]" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/dataviews-picker/stories/index.story.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "perPageSizes",
						"required": false,
						"tags": {},
						"type": { "name": "number[]" }
					},
					"isMultiselectable": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/dataviews-picker/stories/index.story.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "isMultiselectable",
						"required": true,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"isGrouped": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/dataviews-picker/stories/index.story.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "isGrouped",
						"required": true,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"infiniteScrollEnabled": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/dataviews-picker/stories/index.story.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "infiniteScrollEnabled",
						"required": true,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"mediaFit": {
						"defaultValue": { "value": "cover" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/dataviews-picker/stories/index.story.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "mediaFit",
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "MediaFit",
							"value": [{ "value": "\"cover\"" }, { "value": "\"contain\"" }]
						}
					},
					"mediaFitControl": {
						"defaultValue": { "value": "true" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/dataviews-picker/stories/index.story.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "mediaFitControl",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		Default.parameters = {
			...Default.parameters,
			docs: {
				...Default.parameters?.docs,
				source: {
					originalSource: "({\n  perPageSizes = [10, 25, 50, 100],\n  isMultiselectable,\n  isGrouped,\n  infiniteScrollEnabled,\n  mediaFit,\n  mediaFitControl\n}: {\n  perPageSizes: number[];\n  isMultiselectable: boolean;\n  isGrouped: boolean;\n  infiniteScrollEnabled: boolean;\n  mediaFit?: MediaFit;\n  mediaFitControl?: boolean;\n}) => <DataViewsPickerContent perPageSizes={perPageSizes} isMultiselectable={isMultiselectable} isGrouped={isGrouped} infiniteScrollEnabled={infiniteScrollEnabled} mediaFit={mediaFit} mediaFitControl={mediaFitControl} />",
					...Default.parameters?.docs?.source
				}
			}
		};
		FreeComposition.parameters = {
			...FreeComposition.parameters,
			docs: {
				...FreeComposition.parameters?.docs,
				source: {
					originalSource: "{\n  render: FreeCompositionComponent,\n  args: {\n    pagination: 'page-select' as const\n  },\n  argTypes: {\n    pagination: {\n      control: 'select',\n      options: ['page-select', 'page-navigation'],\n      description: 'Which pagination part the composed footer keeps: the \"Page N of M\" select, or the previous/next buttons'\n    }\n  },\n  parameters: {\n    // FIXME: Picker UI nests interactive controls (nested-interactive).\n    // See: https://github.com/WordPress/gutenberg/issues/81596\n    a11y: {\n      test: 'todo'\n    }\n  }\n}",
					...FreeComposition.parameters?.docs?.source
				}
			}
		};
		WithModal.parameters = {
			...WithModal.parameters,
			docs: {
				...WithModal.parameters?.docs,
				source: {
					originalSource: "({\n  perPageSizes = [10, 25, 50, 100],\n  isMultiselectable,\n  isGrouped,\n  infiniteScrollEnabled,\n  mediaFit,\n  mediaFitControl\n}: {\n  perPageSizes: number[];\n  isMultiselectable: boolean;\n  isGrouped: boolean;\n  infiniteScrollEnabled: boolean;\n  mediaFit?: MediaFit;\n  mediaFitControl?: boolean;\n}) => {\n  const [isModalOpen, setIsModalOpen] = useState(false);\n  const [selectedItems, setSelectedItems] = useState<SpaceObject[]>([]);\n  const modalActions: ActionButton<SpaceObject>[] = [{\n    id: 'cancel',\n    label: 'Cancel',\n    supportsBulk: isMultiselectable,\n    callback() {\n      setIsModalOpen(false);\n    }\n  }, {\n    id: 'confirm',\n    label: 'Confirm',\n    isPrimary: true,\n    supportsBulk: isMultiselectable,\n    callback(items) {\n      setSelectedItems(items);\n      setIsModalOpen(false);\n    }\n  }];\n  return <>\n            <Stack direction=\"row\" justify=\"left\" gap=\"sm\">\n                <Button variant=\"primary\" __next40pxDefaultSize onClick={() => setIsModalOpen(true)}>\n                    Open Picker Modal\n                </Button>\n                <Button onClick={() => setSelectedItems([])} disabled={!selectedItems.length} accessibleWhenDisabled __next40pxDefaultSize>\n                    Clear Selection\n                </Button>\n            </Stack>\n            {selectedItems.length > 0 && <p>\n                    Selected:{' '}\n                    {selectedItems.map(item => item.name.title).join(', ')}\n                </p>}\n            {isModalOpen && <>\n                    <style>{`\n                        .components-modal__content {\n                            padding: 0;\n                        }\n                        .components-modal__frame.is-full-screen .components-modal__content {\n                            margin-bottom: 0;\n                        }\n                    `}</style>\n                    <Modal title=\"Select Items\" onRequestClose={() => setIsModalOpen(false)} isFullScreen={false} size=\"fill\">\n                        <DataViewsPickerContent perPageSizes={perPageSizes} isMultiselectable={isMultiselectable} isGrouped={isGrouped} infiniteScrollEnabled={infiniteScrollEnabled} mediaFit={mediaFit} mediaFitControl={mediaFitControl} actions={modalActions} selection={selectedItems.map(item => String(item.id))} />\n                    </Modal>\n                </>}\n        </>;\n}",
					...WithModal.parameters?.docs?.source
				}
			}
		};
	})))();
}
//#endregion
init_index_story();
export { Default, FreeComposition, WithModal, meta as default };
