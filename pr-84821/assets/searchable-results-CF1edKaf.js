import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { C as init_list, D as init_item_label, E as ForwardedItemLabel, I as Empty, L as init_empty, O as ForwardedItemDescription, R as Collection, S as List, T as init_item, a as useFilteredItems, b as ListBody, i as init_use_filtered_items, k as init_item_description, o as Status, s as init_status, v as ListFooter, w as Item, x as init_list_body, y as init_list_footer, z as init_collection } from "./fixtures-C8cercBz.js";
//#region ../packages/ui/src/form/primitives/searchable-results.tsx
function isItemGroup(entry) {
	return "items" in entry && Array.isArray(entry.items);
}
function isCreatableItem(item) {
	return item.creatable === true;
}
function findCreatableItem(items) {
	if (!items) return;
	for (const entry of items) {
		if (isItemGroup(entry)) {
			const creatable = entry.items.find(isCreatableItem);
			if (creatable) return creatable;
			continue;
		}
		if (isCreatableItem(entry)) return entry;
	}
}
function shouldSkipCollectionEntry(entry) {
	if (isItemGroup(entry)) return entry.items.length > 0 && entry.items.every(isCreatableItem);
	return isCreatableItem(entry);
}
/**
* Empty state and filtered list for `SearchableSelect` and
* `SearchableChipSelect`. A `creatable: true` item still present in the
* filtered collection is omitted from the list body and remounted in
* `ListFooter`. Must render inside `Combobox.Root`.
*/
function SearchableResults({ emptyContent, statusContent, children }) {
	const creatableItem = findCreatableItem(useFilteredItems());
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Status, { children: statusContent }, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 83,
			columnNumber: 4
		}, this),
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Empty, { children: emptyContent }, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 84,
			columnNumber: 4
		}, this),
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(List, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ListBody, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Collection, { children: (entry, ...args) => {
			if (shouldSkipCollectionEntry(entry)) return null;
			if (children) return children(entry, ...args);
			if (isItemGroup(entry)) return null;
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Item, {
				value: entry,
				disabled: entry.disabled,
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ForwardedItemLabel, { children: entry.label }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 107,
					columnNumber: 10
				}, this), entry.description ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ForwardedItemDescription, { children: entry.description }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 111,
					columnNumber: 11
				}, this) : null]
			}, entry.value, true, {
				fileName: _jsxFileName,
				lineNumber: 102,
				columnNumber: 9
			}, this);
		} }, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 87,
			columnNumber: 6
		}, this) }, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 86,
			columnNumber: 5
		}, this), creatableItem && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ListFooter, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Item, {
			variant: "creatable",
			value: creatableItem,
			disabled: creatableItem.disabled,
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ForwardedItemLabel, { children: creatableItem.label }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 127,
				columnNumber: 8
			}, this), creatableItem.description ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ForwardedItemDescription, { children: creatableItem.description }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 131,
				columnNumber: 9
			}, this) : null]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 122,
			columnNumber: 7
		}, this) }, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 121,
			columnNumber: 6
		}, this)] }, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 85,
			columnNumber: 4
		}, this)
	] }, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 82,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime, _jsxFileName;
function init_searchable_results() {
	return (init_searchable_results = __esmMin((() => {
		init_use_filtered_items(), init_status(), init_empty(), init_list(), init_list_body(), init_collection(), init_item(), init_item_label(), init_item_description(), init_list_footer();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/primitives/searchable-results.tsx";
		try {
			SearchableResults.__docgenInfo = {
				"description": "Empty state and filtered list for `SearchableSelect` and\n`SearchableChipSelect`. A `creatable: true` item still present in the\nfiltered collection is omitted from the list body and remounted in\n`ListFooter`. Must render inside `Combobox.Root`.",
				"displayName": "SearchableResults",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/primitives/searchable-results.tsx",
				"methods": [],
				"props": {
					"emptyContent": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/form/primitives/searchable-results.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "emptyContent",
						"required": true,
						"tags": {},
						"type": { "name": "ReactNode" }
					},
					"statusContent": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/form/primitives/searchable-results.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "statusContent",
						"required": false,
						"tags": {},
						"type": { "name": "ReactNode" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
export { init_searchable_results as n, SearchableResults as t };
