import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { i as _x, n as __, t as init_build_module } from "./build-module-v04us4E2.js";
import { n as init_range_control, t as RangeControl } from "./range-control-6NI6H2R2.js";
import { n as init_component, t as VStack } from "./component-9S7Padmp.js";
import { n as init_select_control, t as SelectControl } from "./select-control-B1sl2vXY.js";
import { n as init_form_token_field, t as FormTokenField } from "./form-token-field-BfRh-ng_.js";
import { n as init_tree_select, t as TreeSelect } from "./tree-select-Dm129UqE.js";
//#region ../packages/components/src/query-controls/terms.ts
/**
* Returns terms in a tree form.
*
* @param flatTerms Array of terms in flat format.
*
* @return Terms in tree format.
*/
function buildTermsTree(flatTerms) {
	const flatTermsWithParentAndChildren = flatTerms.map((term) => ({
		children: [],
		parent: null,
		...term,
		id: String(term.id)
	}));
	if (!ensureParentsAreDefined(flatTermsWithParentAndChildren)) return flatTermsWithParentAndChildren;
	const termsByParent = flatTermsWithParentAndChildren.reduce((acc, term) => {
		const { parent } = term;
		if (!acc[parent]) acc[parent] = [];
		acc[parent].push(term);
		return acc;
	}, {});
	const fillWithChildren = (terms) => {
		return terms.map((term) => {
			const children = termsByParent[term.id];
			return {
				...term,
				children: children && children.length ? fillWithChildren(children) : []
			};
		});
	};
	return fillWithChildren(termsByParent["0"] || []);
}
var ensureParentsAreDefined;
function init_terms() {
	return (init_terms = __esmMin((() => {
		ensureParentsAreDefined = (terms) => {
			return terms.every((term) => term.parent !== null);
		};
	})))();
}
//#endregion
//#region ../packages/components/src/query-controls/author-select.tsx
function AuthorSelect({ label, noOptionLabel, authorList, selectedAuthorId, onChange: onChangeProp }) {
	if (!authorList) return null;
	const termsTree = buildTermsTree(authorList);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$3.jsxDEV)(TreeSelect, {
		label,
		noOptionLabel,
		onChange: onChangeProp,
		tree: termsTree,
		selectedId: selectedAuthorId !== void 0 ? String(selectedAuthorId) : void 0
	}, void 0, false, {
		fileName: _jsxFileName$3,
		lineNumber: 17,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime$3, _jsxFileName$3;
function init_author_select() {
	return (init_author_select = __esmMin((() => {
		init_terms();
		init_tree_select();
		import_jsx_dev_runtime$3 = require_jsx_dev_runtime();
		_jsxFileName$3 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/query-controls/author-select.tsx";
		try {
			AuthorSelect.__docgenInfo = {
				"description": "",
				"displayName": "authorselect",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/query-controls/author-select.tsx",
				"methods": [],
				"props": {
					"label": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "InputBaseProps"
						}],
						"description": "If this property is added, a label will be generated using label property as the content.",
						"name": "label",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "InputBaseProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "ReactNode" }
					},
					"noOptionLabel": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/tree-select/types.ts",
							"name": "TreeSelectProps"
						}],
						"description": "If this property is added, an option will be added with this label to represent empty selection.",
						"name": "noOptionLabel",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/tree-select/types.ts",
							"name": "TreeSelectProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"authorList": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/query-controls/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "authorList",
						"required": false,
						"tags": {},
						"type": { "name": "Author[]" }
					},
					"onChange": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/query-controls/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "onChange",
						"required": true,
						"tags": {},
						"type": { "name": "(newAuthor: string) => void" }
					},
					"selectedAuthorId": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/query-controls/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "selectedAuthorId",
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
//#region ../packages/components/src/query-controls/category-select.tsx
function CategorySelect({ label, noOptionLabel, categoriesList, selectedCategoryId, onChange: onChangeProp, ...props }) {
	const termsTree = (0, import_react.useMemo)(() => {
		return buildTermsTree(categoriesList);
	}, [categoriesList]);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)(TreeSelect, {
		label,
		noOptionLabel,
		onChange: onChangeProp,
		tree: termsTree,
		selectedId: selectedCategoryId !== void 0 ? String(selectedCategoryId) : void 0,
		...props
	}, void 0, false, {
		fileName: _jsxFileName$2,
		lineNumber: 19,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime$2, _jsxFileName$2;
function init_category_select() {
	return (init_category_select = __esmMin((() => {
		init_react();
		init_terms();
		init_tree_select();
		import_jsx_dev_runtime$2 = require_jsx_dev_runtime();
		_jsxFileName$2 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/query-controls/category-select.tsx";
		try {
			CategorySelect.__docgenInfo = {
				"description": "",
				"displayName": "categoryselect",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/query-controls/category-select.tsx",
				"methods": [],
				"props": {
					"label": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "InputBaseProps"
						}],
						"description": "If this property is added, a label will be generated using label property as the content.",
						"name": "label",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "InputBaseProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "ReactNode" }
					},
					"noOptionLabel": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/tree-select/types.ts",
							"name": "TreeSelectProps"
						}],
						"description": "If this property is added, an option will be added with this label to represent empty selection.",
						"name": "noOptionLabel",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/tree-select/types.ts",
							"name": "TreeSelectProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"categoriesList": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/query-controls/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "categoriesList",
						"required": true,
						"tags": {},
						"type": { "name": "Category[]" }
					},
					"onChange": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/query-controls/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "onChange",
						"required": true,
						"tags": {},
						"type": { "name": "(newCategory: string) => void" }
					},
					"selectedCategoryId": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/query-controls/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "selectedCategoryId",
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
//#region ../packages/components/src/query-controls/index.tsx
function isSingleCategorySelection(props) {
	return "categoriesList" in props;
}
function isMultipleCategorySelection(props) {
	return "categorySuggestions" in props;
}
/**
* Controls to query for posts.
*
* ```jsx
* const MyQueryControls = () => (
*   <QueryControls
*     { ...{ maxItems, minItems, numberOfItems, order, orderBy, orderByOptions } }
*     onOrderByChange={ ( newOrderBy ) => {
*       updateQuery( { orderBy: newOrderBy } )
*     }
*     onOrderChange={ ( newOrder ) => {
*       updateQuery( { order: newOrder } )
*     }
*     categoriesList={ categories }
*     selectedCategoryId={ category }
*     onCategoryChange={ ( newCategory ) => {
*       updateQuery( { category: newCategory } )
*     }
*     onNumberOfItemsChange={ ( newNumberOfItems ) => {
*       updateQuery( { numberOfItems: newNumberOfItems } )
*     } }
*   />
* );
* ```
*/
function QueryControls({ authorList, selectedAuthorId, numberOfItems, order, orderBy, orderByOptions = defaultOrderByOptions, maxItems = DEFAULT_MAX_ITEMS, minItems = DEFAULT_MIN_ITEMS, onAuthorChange, onNumberOfItemsChange, onOrderChange, onOrderByChange, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(VStack, {
		spacing: "4",
		className: "components-query-controls",
		children: [
			onOrderChange && onOrderByChange && /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(SelectControl, {
				label: __("Order by"),
				value: orderBy === void 0 || order === void 0 ? void 0 : `${orderBy}/${order}`,
				options: orderByOptions,
				onChange: (value) => {
					if (typeof value !== "string") return;
					const [newOrderBy, newOrder] = value.split("/");
					if (newOrder !== order) onOrderChange(newOrder);
					if (newOrderBy !== orderBy) onOrderByChange(newOrderBy);
				}
			}, "query-controls-order-select", false, {
				fileName: _jsxFileName$1,
				lineNumber: 98,
				columnNumber: 6
			}, this),
			isSingleCategorySelection(props) && props.categoriesList && props.onCategoryChange && /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(CategorySelect, {
				categoriesList: props.categoriesList,
				label: __("Category"),
				noOptionLabel: _x("All", "categories"),
				selectedCategoryId: props.selectedCategoryId,
				onChange: props.onCategoryChange
			}, "query-controls-category-select", false, {
				fileName: _jsxFileName$1,
				lineNumber: 133,
				columnNumber: 7
			}, this),
			isMultipleCategorySelection(props) && props.categorySuggestions && props.onCategoryChange && /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(FormTokenField, {
				label: __("Categories"),
				value: props.selectedCategories && props.selectedCategories.map((item) => ({
					id: item.id,
					value: item.name || item.value
				})),
				suggestions: Object.keys(props.categorySuggestions),
				onChange: props.onCategoryChange,
				maxSuggestions: MAX_CATEGORIES_SUGGESTIONS
			}, "query-controls-categories-select", false, {
				fileName: _jsxFileName$1,
				lineNumber: 145,
				columnNumber: 7
			}, this),
			onAuthorChange && /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(AuthorSelect, {
				authorList,
				label: __("Author"),
				noOptionLabel: _x("All", "authors"),
				selectedAuthorId,
				onChange: onAuthorChange
			}, "query-controls-author-select", false, {
				fileName: _jsxFileName$1,
				lineNumber: 167,
				columnNumber: 6
			}, this),
			onNumberOfItemsChange && /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(RangeControl, {
				label: __("Number of items"),
				value: numberOfItems,
				onChange: onNumberOfItemsChange,
				min: minItems,
				max: maxItems,
				required: true
			}, "query-controls-range-control", false, {
				fileName: _jsxFileName$1,
				lineNumber: 177,
				columnNumber: 6
			}, this)
		]
	}, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 95,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime$1, _jsxFileName$1, DEFAULT_MIN_ITEMS, DEFAULT_MAX_ITEMS, MAX_CATEGORIES_SUGGESTIONS, defaultOrderByOptions;
function init_query_controls() {
	return (init_query_controls = __esmMin((() => {
		init_build_module();
		init_author_select();
		init_category_select();
		init_form_token_field();
		init_range_control();
		init_select_control();
		init_component();
		import_jsx_dev_runtime$1 = require_jsx_dev_runtime();
		_jsxFileName$1 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/query-controls/index.tsx";
		DEFAULT_MIN_ITEMS = 1;
		DEFAULT_MAX_ITEMS = 100;
		MAX_CATEGORIES_SUGGESTIONS = 20;
		defaultOrderByOptions = [
			{
				label: __("Newest to oldest"),
				value: "date/desc"
			},
			{
				label: __("Oldest to newest"),
				value: "date/asc"
			},
			{
				label: __("A → Z"),
				value: "title/asc"
			},
			{
				label: __("Z → A"),
				value: "title/desc"
			}
		];
		try {
			QueryControls.__docgenInfo = {
				"description": "Controls to query for posts.\n\n```jsx\nconst MyQueryControls = () => (\n  <QueryControls\n    { ...{ maxItems, minItems, numberOfItems, order, orderBy, orderByOptions } }\n    onOrderByChange={ ( newOrderBy ) => {\n      updateQuery( { orderBy: newOrderBy } )\n    }\n    onOrderChange={ ( newOrder ) => {\n      updateQuery( { order: newOrder } )\n    }\n    categoriesList={ categories }\n    selectedCategoryId={ category }\n    onCategoryChange={ ( newCategory ) => {\n      updateQuery( { category: newCategory } )\n    }\n    onNumberOfItemsChange={ ( newNumberOfItems ) => {\n      updateQuery( { numberOfItems: newNumberOfItems } )\n    } }\n  />\n);\n```",
				"displayName": "QueryControls",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/query-controls/index.tsx",
				"methods": [],
				"props": {
					"authorList": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/query-controls/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "An array of the authors to select from.",
						"name": "authorList",
						"required": false,
						"tags": {},
						"type": { "name": "Author[]" }
					},
					"maxItems": {
						"defaultValue": { "value": "100" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/query-controls/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The maximum number of items.",
						"name": "maxItems",
						"required": false,
						"tags": {},
						"type": { "name": "number" }
					},
					"minItems": {
						"defaultValue": { "value": "1" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/query-controls/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The minimum number of items.",
						"name": "minItems",
						"required": false,
						"tags": {},
						"type": { "name": "number" }
					},
					"numberOfItems": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/query-controls/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The selected number of items to retrieve via the query.",
						"name": "numberOfItems",
						"required": false,
						"tags": {},
						"type": { "name": "number" }
					},
					"onAuthorChange": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/query-controls/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "A function that receives the new author value.\nIf not specified, the author controls are not rendered.",
						"name": "onAuthorChange",
						"required": false,
						"tags": {},
						"type": { "name": "((newAuthor: string) => void)" }
					},
					"onNumberOfItemsChange": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/query-controls/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "A function that receives the new number of items.\nIf not specified, then the number of items\nrange control is not rendered.",
						"name": "onNumberOfItemsChange",
						"required": false,
						"tags": {},
						"type": { "name": "((newNumber?: number) => void)" }
					},
					"onOrderChange": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/query-controls/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "A function that receives the new order value.\nIf this prop or the `onOrderByChange` prop are not specified,\nthen the order controls are not rendered.",
						"name": "onOrderChange",
						"required": false,
						"tags": {},
						"type": { "name": "((newOrder: Order) => void)" }
					},
					"onOrderByChange": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/query-controls/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "A function that receives the new orderby value.\nIf this prop or the `onOrderChange` prop are not specified,\nthen the order controls are not rendered.",
						"name": "onOrderByChange",
						"required": false,
						"tags": {},
						"type": { "name": "((newOrderBy: OrderBy) => void)" }
					},
					"order": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/query-controls/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The order in which to retrieve posts.",
						"name": "order",
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "Order",
							"value": [{ "value": "\"desc\"" }, { "value": "\"asc\"" }]
						}
					},
					"orderBy": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/query-controls/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The meta key by which to order posts.",
						"name": "orderBy",
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "OrderBy",
							"value": [
								{ "value": "\"title\"" },
								{ "value": "\"date\"" },
								{ "value": "\"menu_order\"" }
							]
						}
					},
					"orderByOptions": {
						"defaultValue": { "value": "[\n	{\n		label: __( 'Newest to oldest' ),\n		value: 'date/desc',\n	},\n	{\n		label: __( 'Oldest to newest' ),\n		value: 'date/asc',\n	},\n	{\n		/* translators: Label for ordering posts by title in ascending order. */\n		label: __( 'A → Z' ),\n		value: 'title/asc',\n	},\n	{\n		/* translators: Label for ordering posts by title in descending order. */\n		label: __( 'Z → A' ),\n		value: 'title/desc',\n	},\n]" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/query-controls/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "List of available ordering options.",
						"name": "orderByOptions",
						"required": false,
						"tags": {},
						"type": { "name": "OrderByOption[]" }
					},
					"selectedAuthorId": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/query-controls/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The selected author ID.",
						"name": "selectedAuthorId",
						"required": false,
						"tags": {},
						"type": { "name": "number" }
					},
					"__next40pxDefaultSize": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/query-controls/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Start opting into the larger default height that will become the\ndefault size in a future version.\n@deprecated Default behavior since WP 6.7. Prop can be safely removed.\n@ignore",
						"name": "__next40pxDefaultSize",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"categoriesList": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/query-controls/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "An array of categories. When passed in conjunction with the\n`onCategoryChange` prop, it causes the component to render UI that allows\nselecting one category at a time.",
						"name": "categoriesList",
						"required": false,
						"tags": {},
						"type": { "name": "Category[]" }
					},
					"selectedCategoryId": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/query-controls/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The selected category for the `categoriesList` prop.",
						"name": "selectedCategoryId",
						"required": false,
						"tags": {},
						"type": { "name": "number" }
					},
					"onCategoryChange": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/query-controls/types.ts",
							"name": "TypeLiteral"
						}, {
							"fileName": "gutenberg-storybook-preview/packages/components/src/query-controls/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "A function that receives the new category value. If not specified, the\ncategory controls are not rendered.\nThe function's signature changes depending on whether multiple category\nselection is enabled or not.",
						"name": "onCategoryChange",
						"required": false,
						"tags": {},
						"type": { "name": "((newCategory: string) => void) | ((tokens: (string | TokenItem)[]) => void)" }
					},
					"categorySuggestions": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/query-controls/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "An object of categories with the category name as the key. When passed in\nconjunction with the `onCategoryChange` prop, it causes the component to\nrender UI that enables multiple selection.",
						"name": "categorySuggestions",
						"required": false,
						"tags": {},
						"type": { "name": "Record<string, Category>" }
					},
					"selectedCategories": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/query-controls/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The selected categories for the `categorySuggestions` prop.",
						"name": "selectedCategories",
						"required": false,
						"tags": {},
						"type": { "name": "Category[]" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/components/src/query-controls/stories/index.story.tsx
var import_jsx_dev_runtime, fn, _jsxFileName, meta, Default, SingleCategoryTemplate, SelectSingleCategory;
function init_index_story() {
	return (init_index_story = __esmMin((() => {
		init_react();
		init_query_controls();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		({fn} = __STORYBOOK_MODULE_TEST__);
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/query-controls/stories/index.story.tsx";
		meta = {
			id: "components-querycontrols",
			title: "Components/@wordpress-components/QueryControls",
			component: QueryControls,
			argTypes: {
				numberOfItems: { control: false },
				order: { control: false },
				orderBy: { control: false },
				selectedAuthorId: { control: false },
				selectedCategories: { control: false },
				selectedCategoryId: { control: false }
			},
			args: {
				onAuthorChange: fn(),
				onNumberOfItemsChange: fn(),
				onOrderByChange: fn(),
				onOrderChange: fn(),
				onCategoryChange: fn()
			},
			parameters: {
				controls: { expanded: true },
				docs: { canvas: { sourceState: "shown" } },
				componentStatus: {
					status: "recommended",
					whereUsed: "editor"
				}
			}
		};
		Default = (args) => {
			const { onAuthorChange, onCategoryChange, onNumberOfItemsChange, onOrderByChange, onOrderChange, ...props } = args;
			const [ownNumberOfItems, setOwnNumberOfItems] = (0, import_react.useState)(props.numberOfItems);
			const [ownOrder, setOwnOrder] = (0, import_react.useState)(props.order);
			const [ownOrderBy, setOwnOrderBy] = (0, import_react.useState)(props.orderBy);
			const [ownSelectedAuthorId, setOwnSelectedAuthorId] = (0, import_react.useState)(props.selectedAuthorId);
			const [ownSelectedCategories, setOwnSelectedCategories] = (0, import_react.useState)(props.selectedCategories);
			const handleCategoryChange = (tokens) => {
				onCategoryChange?.(tokens);
				if (tokens.some((token) => typeof token === "string" && !props.categorySuggestions?.[token])) return;
				const allCategories = tokens.map((token) => {
					return typeof token === "string" ? props.categorySuggestions?.[token] : token;
				}).filter(Boolean);
				setOwnSelectedCategories(allCategories);
			};
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(QueryControls, {
				...props,
				numberOfItems: ownNumberOfItems,
				onCategoryChange: handleCategoryChange,
				onOrderByChange: (newOrderBy) => {
					onOrderByChange?.(newOrderBy);
					setOwnOrderBy(newOrderBy);
				},
				onOrderChange: (newOrder) => {
					onOrderChange?.(newOrder);
					setOwnOrder(newOrder);
				},
				order: ownOrder,
				orderBy: ownOrderBy,
				onNumberOfItemsChange: (newNumber) => {
					onNumberOfItemsChange?.(newNumber);
					setOwnNumberOfItems(newNumber);
				},
				onAuthorChange: (newAuthor) => {
					onAuthorChange?.(newAuthor);
					setOwnSelectedAuthorId(Number(newAuthor));
				},
				selectedAuthorId: ownSelectedAuthorId,
				selectedCategories: ownSelectedCategories
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 86,
				columnNumber: 3
			}, void 0);
		};
		Default.args = {
			authorList: [{
				id: 1,
				name: "admin"
			}, {
				id: 2,
				name: "editor"
			}],
			categorySuggestions: {
				TypeScript: {
					id: 11,
					name: "TypeScript",
					parent: 0
				},
				JavaScript: {
					id: 12,
					name: "JavaScript",
					parent: 0
				}
			},
			selectedCategories: [{
				id: 11,
				name: "JavaScript",
				parent: 0
			}],
			numberOfItems: 5,
			order: "desc",
			orderBy: "date",
			selectedAuthorId: 1
		};
		SingleCategoryTemplate = (args) => {
			const { onAuthorChange, onCategoryChange, onNumberOfItemsChange, onOrderByChange, onOrderChange, ...props } = args;
			const [ownOrder, setOwnOrder] = (0, import_react.useState)(props.order);
			const [ownOrderBy, setOwnOrderBy] = (0, import_react.useState)(props.orderBy);
			const [ownSelectedCategoryId, setSelectedCategoryId] = (0, import_react.useState)(props.selectedCategoryId);
			const handleCategoryChange = (newCategory) => {
				onCategoryChange?.(newCategory);
				setSelectedCategoryId(Number(newCategory));
			};
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(QueryControls, {
				...props,
				onCategoryChange: handleCategoryChange,
				onOrderByChange: (newOrderBy) => {
					setOwnOrderBy(newOrderBy);
				},
				onOrderChange: (newOrder) => {
					onOrderChange?.(newOrder);
					setOwnOrder(newOrder);
				},
				order: ownOrder,
				orderBy: ownOrderBy,
				selectedCategoryId: ownSelectedCategoryId
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 172,
				columnNumber: 3
			}, void 0);
		};
		SelectSingleCategory = SingleCategoryTemplate.bind({});
		SelectSingleCategory.args = {
			categoriesList: [{
				id: 11,
				name: "TypeScript",
				parent: 0
			}, {
				id: 12,
				name: "JavaScript",
				parent: 0
			}],
			selectedCategoryId: 11
		};
		Default.parameters = {
			...Default.parameters,
			docs: {
				...Default.parameters?.docs,
				source: {
					originalSource: "args => {\n  const {\n    onAuthorChange,\n    onCategoryChange,\n    onNumberOfItemsChange,\n    onOrderByChange,\n    onOrderChange,\n    ...props\n  } = args as QueryControlsWithMultipleCategorySelectionProps;\n  const [ownNumberOfItems, setOwnNumberOfItems] = useState(props.numberOfItems);\n  const [ownOrder, setOwnOrder] = useState(props.order);\n  const [ownOrderBy, setOwnOrderBy] = useState(props.orderBy);\n  const [ownSelectedAuthorId, setOwnSelectedAuthorId] = useState(props.selectedAuthorId);\n  const [ownSelectedCategories, setOwnSelectedCategories] = useState(props.selectedCategories);\n  const handleCategoryChange: QueryControlsWithMultipleCategorySelectionProps['onCategoryChange'] = tokens => {\n    onCategoryChange?.(tokens);\n    const hasNoSuggestion = tokens.some(token => typeof token === 'string' && !props.categorySuggestions?.[token]);\n    if (hasNoSuggestion) {\n      return;\n    }\n    const allCategories = tokens.map(token => {\n      return typeof token === 'string' ? props.categorySuggestions?.[token] : token;\n    }).filter(Boolean) as Array<Required<Category>>;\n    setOwnSelectedCategories(allCategories);\n  };\n  return <QueryControls {...props} numberOfItems={ownNumberOfItems} onCategoryChange={handleCategoryChange} onOrderByChange={newOrderBy => {\n    onOrderByChange?.(newOrderBy);\n    setOwnOrderBy(newOrderBy);\n  }} onOrderChange={newOrder => {\n    onOrderChange?.(newOrder);\n    setOwnOrder(newOrder);\n  }} order={ownOrder} orderBy={ownOrderBy} onNumberOfItemsChange={newNumber => {\n    onNumberOfItemsChange?.(newNumber);\n    setOwnNumberOfItems(newNumber);\n  }} onAuthorChange={newAuthor => {\n    onAuthorChange?.(newAuthor);\n    setOwnSelectedAuthorId(Number(newAuthor));\n  }} selectedAuthorId={ownSelectedAuthorId} selectedCategories={ownSelectedCategories} />;\n}",
					...Default.parameters?.docs?.source
				}
			}
		};
		SelectSingleCategory.parameters = {
			...SelectSingleCategory.parameters,
			docs: {
				...SelectSingleCategory.parameters?.docs,
				source: {
					originalSource: "args => {\n  const {\n    onAuthorChange,\n    onCategoryChange,\n    onNumberOfItemsChange,\n    onOrderByChange,\n    onOrderChange,\n    ...props\n  } = args as QueryControlsWithSingleCategorySelectionProps;\n  const [ownOrder, setOwnOrder] = useState(props.order);\n  const [ownOrderBy, setOwnOrderBy] = useState(props.orderBy);\n  const [ownSelectedCategoryId, setSelectedCategoryId] = useState(props.selectedCategoryId);\n  const handleCategoryChange: QueryControlsWithSingleCategorySelectionProps['onCategoryChange'] = newCategory => {\n    onCategoryChange?.(newCategory);\n    setSelectedCategoryId(Number(newCategory));\n  };\n  return <QueryControls {...props} onCategoryChange={handleCategoryChange} onOrderByChange={newOrderBy => {\n    setOwnOrderBy(newOrderBy);\n  }} onOrderChange={newOrder => {\n    onOrderChange?.(newOrder);\n    setOwnOrder(newOrder);\n  }} order={ownOrder} orderBy={ownOrderBy} selectedCategoryId={ownSelectedCategoryId} />;\n}",
					...SelectSingleCategory.parameters?.docs?.source
				}
			}
		};
	})))();
}
//#endregion
init_index_story();
export { Default, SelectSingleCategory, meta as default };
