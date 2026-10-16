import { n as __esmMin, r as __exportAll } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as sprintf } from "./sprintf-_uhhbfMc.js";
import { n as __, o as isRTL, r as _n, t as init_build_module } from "./build-module-v04us4E2.js";
import { a as init_clsx, i as clsx } from "./iframe-Dbjzp1_m.js";
import { n as warning, t as init_build_module$1 } from "./build-module-B5spW8IS.js";
import { n as init_focus_module, t as focus_module_default } from "./focus.module-CJgaYHb1.js";
import { n as init_global_css_defense_module, t as global_css_defense_module_default } from "./global-css-defense.module-BTDDc07p.js";
import { n as init_stack, t as Stack } from "./stack-s_FjhA7z.js";
import { n as init_visually_hidden, t as VisuallyHidden } from "./visually-hidden-FYENO0pz.js";
import { n as init_input_layout, t as InputLayout } from "./input-layout-CGFIMmI0.js";
import { a as Clear, c as init_chip_with_remove, i as init_input_group, l as Chips, n as init_value, o as init_clear, r as InputGroup, s as ChipWithRemove, t as Value, u as init_chips } from "./value-BzpHVKyk.js";
import { A as Input, D as init_item_label, E as ForwardedItemLabel, F as init_group, M as GroupLabel, N as init_group_label, O as ForwardedItemDescription, P as Group, R as Collection, T as init_item, a as useFilteredItems, c as Separator, d as init_root, f as Popup, i as init_use_filtered_items, j as init_input, k as init_item_description, l as init_separator, p as init_popup, r as init_fixtures$1, t as GROUPED_ITEMS, u as Root, w as Item, z as init_collection } from "./fixtures-C8cercBz.js";
import { n as init_searchable_results, t as SearchableResults } from "./searchable-results-CF1edKaf.js";
import { a as longLabelPopupItems, i as init_shared, o as narrowContainerDecorator } from "./shared-BIawwOG6.js";
//#region ../packages/ui/src/form/primitives/searchable-chip-select/style.module.css
var input, style_module_default;
function init_style_module() {
	return (init_style_module = __esmMin((() => {
		input = "_input_yw381_17";
		style_module_default = {
			"chips-edit-area": "_chips-edit-area_yw381_5",
			"chips-list": "_chips-list_yw381_12",
			input,
			"input-layout": "_input-layout_yw381_47"
		};
	})))();
}
//#endregion
//#region ../packages/ui/src/form/primitives/searchable-chip-select/types.ts
function isItemGroup(item) {
	return "items" in item && Array.isArray(item.items);
}
function isCreatableItem(item) {
	return item.creatable === true;
}
function findCreatableItems(items) {
	if (!items) return [];
	const creatableItems = [];
	for (const entry of items) {
		if (isItemGroup(entry)) {
			creatableItems.push(...entry.items.filter(isCreatableItem));
			continue;
		}
		if (isCreatableItem(entry)) creatableItems.push(entry);
	}
	return creatableItems;
}
function hasGroupedItems(items) {
	return (items ?? []).some(isItemGroup);
}
//#endregion
//#region ../packages/ui/src/form/primitives/searchable-chip-select/dev-warnings.ts
function warnSearchableChipSelectProps(items, children) {
	if (!items?.length) return;
	if (findCreatableItems(items).length > 1) warning("SearchableChipSelect: expected at most one item with `creatable: true` in `items`.");
	if (hasGroupedItems(items) && !children) warning("SearchableChipSelect: grouped `items` require a `children` renderer. See the `Grouped` story for an example.");
	let hasMixedCreatableGroup = false;
	for (const entry of items) if (isItemGroup(entry) && entry.items.some(isCreatableItem) && entry.items.some((item) => !isCreatableItem(item))) {
		hasMixedCreatableGroup = true;
		break;
	}
	if (hasMixedCreatableGroup) warning("SearchableChipSelect: do not mix `creatable: true` items with regular items in the same group. Put the creatable item in its own group.");
}
function init_dev_warnings() {
	return (init_dev_warnings = __esmMin((() => {
		init_build_module$1();
	})))();
}
//#endregion
//#region ../packages/ui/src/form/primitives/searchable-chip-select/searchable-chip-select.tsx
function getChipsToolbarLabel(selectedCount) {
	if (selectedCount === 0) return;
	return _n("Selected item", "Selected items", selectedCount);
}
function getInputSelectionHint(selectedCount) {
	if (selectedCount === 0) return;
	return sprintf(_n("%1$d item selected. From the start of the input, press %2$s to move to the selected item.", "%1$d items selected. From the start of the input, press %2$s to move to the selected items.", selectedCount), selectedCount, isRTL() ? __("Right Arrow") : __("Left Arrow"));
}
var import_jsx_dev_runtime$1, _jsxFileName$1, SearchableChipSelect$1;
function init_searchable_chip_select() {
	return (init_searchable_chip_select = __esmMin((() => {
		init_clsx();
		init_react();
		init_build_module();
		init_stack();
		init_visually_hidden();
		init_global_css_defense_module();
		init_focus_module();
		init_root(), init_input_group(), init_value(), init_chips(), init_chip_with_remove(), init_clear(), init_input(), init_popup();
		init_input_layout();
		init_searchable_results();
		init_style_module();
		init_dev_warnings();
		import_jsx_dev_runtime$1 = require_jsx_dev_runtime();
		_jsxFileName$1 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/primitives/searchable-chip-select/searchable-chip-select.tsx";
		SearchableChipSelect$1 = (0, import_react.forwardRef)(function UnforwardedSearchableChipSelect({ children, disabled, emptyContent = __("No results found."), statusContent, items, onValueChange, chipsContent, searchPlaceholder = __("Search"), popupWidth, showClearButton = true, clearButtonLabel = __("Clear all"), "aria-label": ariaLabel, "aria-labelledby": ariaLabelledby, "aria-describedby": ariaDescribedby, ...restProps }, ref) {
			const inputHintId = (0, import_react.useId)();
			warnSearchableChipSelectProps(items, children);
			return /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(Root, {
				items,
				multiple: true,
				disabled,
				...restProps,
				onValueChange: (value, eventDetails) => {
					if (eventDetails.reason === "escape-key") {
						eventDetails.cancel();
						return;
					}
					onValueChange?.(value, eventDetails);
				},
				readOnly: void 0,
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(InputGroup, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(Value, { children: (value) => {
					const selectedCount = value.length;
					const selectionHint = getInputSelectionHint(selectedCount);
					return /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(import_jsx_dev_runtime$1.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(Chips, {
						render: /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(InputLayout, {
							className: clsx(focus_module_default["outset-ring--focus-within"], style_module_default["input-layout"]),
							visuallyDisabled: disabled
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 98,
							columnNumber: 11
						}, this),
						"aria-label": getChipsToolbarLabel(selectedCount),
						children: [selectedCount > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(Stack, {
							align: "start",
							className: style_module_default["chips-edit-area"],
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(Stack, {
								gap: "xs",
								wrap: "wrap",
								className: style_module_default["chips-list"],
								children: chipsContent ? chipsContent(value) : value.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(ChipWithRemove, { children: item.label }, item.value, false, {
									fileName: _jsxFileName$1,
									lineNumber: 129,
									columnNumber: 16
								}, this))
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 119,
								columnNumber: 12
							}, this), showClearButton && /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(Clear, { "aria-label": clearButtonLabel }, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 139,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 113,
							columnNumber: 11
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(Input, {
							ref,
							render: /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)("input", {
								type: "text",
								className: clsx(global_css_defense_module_default.input, style_module_default.input)
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 152,
								columnNumber: 12
							}, this),
							placeholder: searchPlaceholder,
							"aria-label": ariaLabel,
							"aria-labelledby": ariaLabelledby,
							"aria-describedby": clsx(ariaDescribedby, selectionHint && inputHintId) || void 0
						}, "searchable-chip-select-input", false, {
							fileName: _jsxFileName$1,
							lineNumber: 148,
							columnNumber: 10
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$1,
						lineNumber: 96,
						columnNumber: 9
					}, this), selectionHint && /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(VisuallyHidden, {
						id: inputHintId,
						"aria-hidden": "true",
						children: selectionHint
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 172,
						columnNumber: 10
					}, this)] }, void 0, true, {
						fileName: _jsxFileName$1,
						lineNumber: 95,
						columnNumber: 8
					}, this);
				} }, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 88,
					columnNumber: 5
				}, this) }, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 87,
					columnNumber: 4
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(Popup, {
					width: popupWidth,
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(SearchableResults, {
						emptyContent,
						statusContent,
						children
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 186,
						columnNumber: 5
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 185,
					columnNumber: 4
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$1,
				lineNumber: 73,
				columnNumber: 3
			}, this);
		});
		try {
			SearchableChipSelect$1.__docgenInfo = {
				"description": "A low-level primitive for a searchable multi-selection field with chips, with\nsupport for a creatable footer action.\n\nPrefer `SearchableChipSelectControl` when using with a standard label and description.",
				"displayName": "SearchableChipSelect",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/primitives/searchable-chip-select/searchable-chip-select.tsx",
				"methods": [],
				"props": {
					"filter": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/combobox/root/AriaCombobox.d.mts",
							"name": "ComboboxRootProps"
						}],
						"description": "Filter function used to match items vs input query.\nReceives the source item, which is the derived value's item when `items` is a `createItems()`\ncollection, and the item itself otherwise.",
						"name": "filter",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/combobox/root/AriaCombobox.d.mts",
							"name": "ComboboxRootProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "((item: Item, query: string, itemToString?: ((item: Item) => string)) => boolean) | null" }
					},
					"id": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/combobox/root/AriaCombobox.d.mts",
							"name": "ComboboxRootProps"
						}],
						"description": "The id of the component.",
						"name": "id",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/combobox/root/AriaCombobox.d.mts",
							"name": "ComboboxRootProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"form": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/combobox/root/AriaCombobox.d.mts",
							"name": "ComboboxRootProps"
						}],
						"description": "Identifies the form that owns the internal input.\nUseful when the combobox is rendered outside the form.",
						"name": "form",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/combobox/root/AriaCombobox.d.mts",
							"name": "ComboboxRootProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"name": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/combobox/root/AriaCombobox.d.mts",
							"name": "ComboboxRootProps"
						}],
						"description": "Identifies the field when a form is submitted.",
						"name": "name",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/combobox/root/AriaCombobox.d.mts",
							"name": "ComboboxRootProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"grid": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/combobox/root/AriaCombobox.d.mts",
							"name": "ComboboxRootProps"
						}],
						"description": "Whether list items are presented in a grid layout.\nWhen enabled, arrow keys navigate across rows and columns inferred from DOM rows.",
						"name": "grid",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/combobox/root/AriaCombobox.d.mts",
							"name": "ComboboxRootProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"inline": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/combobox/root/AriaCombobox.d.mts",
							"name": "ComboboxRootProps"
						}],
						"description": "Whether the list is rendered inline without using the component's own popup.\n\nSpecify `open` unconditionally in conjunction with this prop so the list is considered\nvisible: `<Combobox.Root inline open>`\n\nIn a `Combobox.Root` > `Dialog.Root` composition, bind the Combobox's `open` and\n`onOpenChange` props to the `Dialog`'s `open` and `onOpenChange` state instead so the\ncomponent resets its transient state (filter query, highlighted item, and input value) when\nthe dialog closes.",
						"name": "inline",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/combobox/root/AriaCombobox.d.mts",
							"name": "ComboboxRootProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"open": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/combobox/root/AriaCombobox.d.mts",
							"name": "ComboboxRootProps"
						}],
						"description": "Whether the popup is currently open. Use when controlled.",
						"name": "open",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/combobox/root/AriaCombobox.d.mts",
							"name": "ComboboxRootProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"disabled": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/combobox/root/AriaCombobox.d.mts",
							"name": "ComboboxRootProps"
						}],
						"description": "Whether the component should ignore user interaction.",
						"name": "disabled",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/combobox/root/AriaCombobox.d.mts",
							"name": "ComboboxRootProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"defaultValue": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/combobox/root/ComboboxRoot.d.mts",
							"name": "TypeLiteral"
						}],
						"description": "The uncontrolled selected value of the combobox when it's initially rendered.\n\nTo render a controlled combobox, use the `value` prop instead.",
						"name": "defaultValue",
						"required": false,
						"tags": {},
						"type": { "name": "readonly Item[] | null" }
					},
					"value": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/combobox/root/ComboboxRoot.d.mts",
							"name": "TypeLiteral"
						}],
						"description": "The selected value of the combobox. Use when controlled.",
						"name": "value",
						"required": false,
						"tags": {},
						"type": { "name": "readonly Item[] | null" }
					},
					"autoComplete": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/combobox/root/ComboboxRoot.d.mts",
							"name": "TypeLiteral"
						}],
						"description": "Provides a hint to the browser for autofill.\n@see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes/autocomplete",
						"name": "autoComplete",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"required": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/combobox/root/AriaCombobox.d.mts",
							"name": "ComboboxRootProps"
						}],
						"description": "Whether the user must choose a value before submitting a form.",
						"name": "required",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/combobox/root/AriaCombobox.d.mts",
							"name": "ComboboxRootProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"locale": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/combobox/root/AriaCombobox.d.mts",
							"name": "ComboboxRootProps"
						}],
						"description": "The locale to use for string comparison.\nDefaults to the user's runtime locale.",
						"name": "locale",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/combobox/root/AriaCombobox.d.mts",
							"name": "ComboboxRootProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "LocalesArgument" }
					},
					"onOpenChange": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/combobox/root/ComboboxRoot.d.mts",
							"name": "TypeLiteral"
						}],
						"description": "Event handler called when the popup is opened or closed.",
						"name": "onOpenChange",
						"required": false,
						"tags": {},
						"type": { "name": "((open: boolean, eventDetails: OpenChangeEventDetails) => void)" }
					},
					"onOpenChangeComplete": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/combobox/root/AriaCombobox.d.mts",
							"name": "ComboboxRootProps"
						}],
						"description": "Event handler called after any animations complete when the popup is opened or closed.",
						"name": "onOpenChangeComplete",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/combobox/root/AriaCombobox.d.mts",
							"name": "ComboboxRootProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "((open: boolean) => void)" }
					},
					"defaultOpen": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/combobox/root/AriaCombobox.d.mts",
							"name": "ComboboxRootProps"
						}],
						"description": "Whether the popup is initially open.\n\nTo render a controlled popup, use the `open` prop instead.",
						"name": "defaultOpen",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/combobox/root/AriaCombobox.d.mts",
							"name": "ComboboxRootProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"modal": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/combobox/root/AriaCombobox.d.mts",
							"name": "ComboboxRootProps"
						}],
						"description": "Determines if the popup enters a modal state when open.\n- `true`: user interaction is limited to the popup: document page scroll is locked and pointer interactions on outside elements are disabled.\n- `false`: user interaction with the rest of the document is allowed.\n\nOn touch devices, a `true` modal blocks outside taps but leaves the page scrollable unless the popup spans nearly the full viewport width, matching native iOS behavior.",
						"name": "modal",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/combobox/root/AriaCombobox.d.mts",
							"name": "ComboboxRootProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"inputRef": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/combobox/root/AriaCombobox.d.mts",
							"name": "ComboboxRootProps"
						}],
						"description": "A ref to the hidden input element.",
						"name": "inputRef",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/combobox/root/AriaCombobox.d.mts",
							"name": "ComboboxRootProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "Ref<HTMLInputElement>" }
					},
					"onValueChange": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/combobox/root/ComboboxRoot.d.mts",
							"name": "TypeLiteral"
						}],
						"description": "Event handler called when the selected value of the combobox changes.",
						"name": "onValueChange",
						"required": false,
						"tags": {},
						"type": { "name": "((value: Item[], eventDetails: ChangeEventDetails) => void)" }
					},
					"highlightItemOnHover": {
						"defaultValue": { "value": "true" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/combobox/root/ComboboxRoot.d.mts",
							"name": "TypeLiteral"
						}],
						"description": "Whether moving the pointer over items should highlight them.\nDisabling this prop allows CSS `:hover` to be differentiated from the `:focus` (`data-highlighted`) state.",
						"name": "highlightItemOnHover",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"actionsRef": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/combobox/root/ComboboxRoot.d.mts",
							"name": "TypeLiteral"
						}],
						"description": "A ref to imperative actions.\n- `unmount`: Ends the closing phase of the combobox after an externally controlled closing animation finishes.\nCall `preventUnmountOnClose()` in `onOpenChange` first, otherwise the combobox completes closing on its own.\nWhether it leaves the DOM is decided by `keepMounted` on the portal.\n- `close`: Closes the combobox imperatively when called.",
						"name": "actionsRef",
						"required": false,
						"tags": {},
						"type": { "name": "RefObject<Actions | null>" }
					},
					"itemToStringLabel": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/combobox/root/ComboboxRoot.d.mts",
							"name": "TypeLiteral"
						}],
						"description": "When the item values are objects (`<Combobox.Item value={object}>`), this function converts the object value to a string representation for display in the input.\nIf the shape of the object is `{ value, label }`, the label will be used automatically without needing to specify this prop.\nWith a `createItems()` collection, this receives the derived value, and the collection's\n`getLabel` takes precedence for values it can resolve.",
						"name": "itemToStringLabel",
						"required": false,
						"tags": {},
						"type": { "name": "((itemValue: Item) => string)" }
					},
					"itemToStringValue": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/combobox/root/ComboboxRoot.d.mts",
							"name": "TypeLiteral"
						}],
						"description": "When the item values are objects (`<Combobox.Item value={object}>`), this function converts the object value to a string representation for form submission.\nIf the shape of the object is `{ value, label }`, the value will be used automatically without needing to specify this prop.\nWith a `createItems()` collection, this receives the derived value.",
						"name": "itemToStringValue",
						"required": false,
						"tags": {},
						"type": { "name": "((itemValue: Item) => string)" }
					},
					"isItemEqualToValue": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/combobox/root/ComboboxRoot.d.mts",
							"name": "TypeLiteral"
						}],
						"description": "Custom comparison logic used to determine if a combobox item value matches the current selected value. Useful when item values are objects without matching referentially.\nWith a `createItems()` collection, both arguments are derived values.\nDefaults to `Object.is` comparison.",
						"name": "isItemEqualToValue",
						"required": false,
						"tags": {},
						"type": { "name": "((itemValue: Item, value: Item) => boolean)" }
					},
					"inputValue": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/combobox/root/AriaCombobox.d.mts",
							"name": "ComboboxRootProps"
						}],
						"description": "The input value of the combobox. Use when controlled.",
						"name": "inputValue",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/combobox/root/AriaCombobox.d.mts",
							"name": "ComboboxRootProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "string | number | readonly string[]" }
					},
					"defaultInputValue": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/combobox/root/AriaCombobox.d.mts",
							"name": "ComboboxRootProps"
						}],
						"description": "The uncontrolled input value when initially rendered.\n\nTo render a controlled input, use the `inputValue` prop instead.",
						"name": "defaultInputValue",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/combobox/root/AriaCombobox.d.mts",
							"name": "ComboboxRootProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "string | number | readonly string[]" }
					},
					"onInputValueChange": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/combobox/root/ComboboxRoot.d.mts",
							"name": "TypeLiteral"
						}],
						"description": "Event handler called when the input value changes.",
						"name": "onInputValueChange",
						"required": false,
						"tags": {},
						"type": { "name": "((inputValue: string, eventDetails: ChangeEventDetails) => void)" }
					},
					"autoHighlight": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/combobox/root/ComboboxRoot.d.mts",
							"name": "TypeLiteral"
						}],
						"description": "Whether the first matching item is highlighted automatically while filtering.",
						"name": "autoHighlight",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"openOnInputClick": {
						"defaultValue": { "value": "true" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/combobox/root/AriaCombobox.d.mts",
							"name": "ComboboxRootProps"
						}],
						"description": "Whether the popup opens when clicking the input.",
						"name": "openOnInputClick",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/combobox/root/AriaCombobox.d.mts",
							"name": "ComboboxRootProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"filteredItems": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/combobox/root/AriaCombobox.d.mts",
							"name": "ComboboxRootProps"
						}],
						"description": "Filtered items to display in the list.\nWhen provided, the list uses these items instead of filtering the `items` prop internally.\nWhen `items` is also provided, this array must preserve its flat or grouped structure.\nWith a `createItems()` collection, pass source items rather than derived values.\nNullish entries are not supported, as in `items`.\nUse when you want to control filtering logic externally with the `useFilter()` hook.",
						"name": "filteredItems",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/combobox/root/AriaCombobox.d.mts",
							"name": "ComboboxRootProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "readonly Item[] | readonly Group<Item>[]" }
					},
					"loopFocus": {
						"defaultValue": { "value": "true" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/combobox/root/AriaCombobox.d.mts",
							"name": "ComboboxRootProps"
						}],
						"description": "Whether to loop keyboard focus back to the input when the end of the list is reached while using the arrow keys. The first item can then be reached by pressing <kbd>ArrowDown</kbd> again from the input, or the last item can be reached by pressing <kbd>ArrowUp</kbd> from the input.\nThe input is always included in the focus loop per [ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/patterns/combobox/).\nWhen disabled, focus does not move when on the last element and the user presses <kbd>ArrowDown</kbd>, or when on the first element and the user presses <kbd>ArrowUp</kbd>.",
						"name": "loopFocus",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/combobox/root/AriaCombobox.d.mts",
							"name": "ComboboxRootProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"onItemHighlighted": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/combobox/root/ComboboxRoot.d.mts",
							"name": "TypeLiteral"
						}],
						"description": "Callback fired when an item is highlighted or unhighlighted.\nReceives the highlighted item value (or `undefined` if no item is highlighted) and event details with a `reason` property describing why the highlight changed.\nThe `reason` can be:\n- `'keyboard'`: the highlight changed due to keyboard navigation.\n- `'pointer'`: the highlight changed due to pointer hovering. The event may be a `MouseEvent`\n  rather than a `PointerEvent`.\n- `'none'`: the highlight changed for another reason, such as typing, `autoHighlight`, the\n  item list changing, or the popup opening or closing.",
						"name": "onItemHighlighted",
						"required": false,
						"tags": {},
						"type": { "name": "((highlightedValue: Item, eventDetails: HighlightEventDetails) => void)" }
					},
					"virtualized": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/combobox/root/AriaCombobox.d.mts",
							"name": "ComboboxRootProps"
						}],
						"description": "Whether the items are being externally virtualized.",
						"name": "virtualized",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/combobox/root/AriaCombobox.d.mts",
							"name": "ComboboxRootProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"limit": {
						"defaultValue": { "value": "-1" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/combobox/root/AriaCombobox.d.mts",
							"name": "ComboboxRootProps"
						}],
						"description": "The maximum number of items to display in the list.",
						"name": "limit",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/combobox/root/AriaCombobox.d.mts",
							"name": "ComboboxRootProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "number" }
					},
					"popupWidth": {
						"defaultValue": { "value": "'anchor'" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/form/primitives/searchable-chip-select/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Controls how the popup width is constrained relative to its anchor.\n\nFor all presets, the popup is never narrower than its anchor.\n\n- `'anchor'`: Fixed width matching the anchor width.\n- `'content'`: Width grows with item labels between the anchor and available\n  viewport bounds.\n- `'sm'`: Fixed width at the small surface width token (`--wpds-dimension-surface-width-sm`).\n- `'md'`: Fixed width at the medium surface width token (`--wpds-dimension-surface-width-md`).\n- `'lg'`: Fixed width at the large surface width token (`--wpds-dimension-surface-width-lg`).\n- `'available'`: Fixed width at the available viewport width (`--available-width`).",
						"name": "popupWidth",
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "ItemPopupWidth",
							"value": [
								{ "value": "\"content\"" },
								{ "value": "\"anchor\"" },
								{ "value": "\"sm\"" },
								{ "value": "\"md\"" },
								{ "value": "\"lg\"" },
								{ "value": "\"available\"" }
							]
						}
					},
					"items": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/form/primitives/searchable-chip-select/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The array of option items.\n\nWhen using grouped `children`, pass an array of groups instead of a\nflat list of items. Grouped items require a custom `children` renderer.\n\nMark a creatable action with `creatable: true`. It renders in the\nlist footer, not the main list, when it is in the filtered items.\nHandle the creation of the item in `onValueChange`.",
						"name": "items",
						"required": false,
						"tags": {},
						"type": { "name": "Item[] | ItemGroup[]" }
					},
					"children": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/form/primitives/searchable-chip-select/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "A render function for custom rendering the list of matching items.\nRequired when `items` contains groups.",
						"name": "children",
						"required": false,
						"tags": {},
						"type": { "name": "((item: any, index: number) => ReactNode)" }
					},
					"chipsContent": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/form/primitives/searchable-chip-select/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "A render function for custom rendering the selected chips.\n\nThe chip is named from its content. Pass `aria-label` when that\ncontent is not a usable name.\n\n```jsx\nchipsContent={ ( value ) =>\n  value.map( ( item ) => (\n    <SearchableChipSelect.ChipWithRemove key={ item.value }>\n      <Icon icon={ wordpress } />\n      { item.label }\n    </SearchableChipSelect.ChipWithRemove>\n  ) )\n}\n```",
						"name": "chipsContent",
						"required": false,
						"tags": {},
						"type": { "name": "((value: Item[]) => ReactNode)" }
					},
					"emptyContent": {
						"defaultValue": { "value": "__( 'No results found.' )" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/form/primitives/searchable-chip-select/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The custom content to use instead of the default empty state,\nwhich shows whenever there are no matching items.",
						"name": "emptyContent",
						"required": false,
						"tags": {},
						"type": { "name": "ReactNode" }
					},
					"statusContent": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/form/primitives/searchable-chip-select/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Content for the list status live region. The region stays mounted.",
						"name": "statusContent",
						"required": false,
						"tags": {},
						"type": { "name": "ReactNode" }
					},
					"searchPlaceholder": {
						"defaultValue": { "value": "__( 'Search' )" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/form/primitives/searchable-chip-select/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The placeholder text to use for the search input.",
						"name": "searchPlaceholder",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"showClearButton": {
						"defaultValue": { "value": "true" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/form/primitives/searchable-chip-select/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Whether to show the clear button to remove all selected items.",
						"name": "showClearButton",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"clearButtonLabel": {
						"defaultValue": { "value": "__( 'Clear all' )" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/form/primitives/searchable-chip-select/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The aria-label for the clear button.",
						"name": "clearButtonLabel",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/ui/src/form/primitives/searchable-chip-select/index.ts
var SearchableChipSelect;
function init_searchable_chip_select$1() {
	return (init_searchable_chip_select$1 = __esmMin((() => {
		init_item();
		init_item_description();
		init_item_label();
		init_chip_with_remove();
		init_group();
		init_group_label();
		init_separator();
		init_collection();
		init_use_filtered_items();
		init_searchable_chip_select();
		Item.displayName = "SearchableChipSelect.Item";
		ForwardedItemLabel.displayName = "SearchableChipSelect.ItemLabel";
		ForwardedItemDescription.displayName = "SearchableChipSelect.ItemDescription";
		ChipWithRemove.displayName = "SearchableChipSelect.ChipWithRemove";
		Group.displayName = "SearchableChipSelect.Group";
		GroupLabel.displayName = "SearchableChipSelect.GroupLabel";
		SearchableChipSelect = Object.assign(SearchableChipSelect$1, {
			Item,
			ItemLabel: ForwardedItemLabel,
			ItemDescription: ForwardedItemDescription,
			ChipWithRemove,
			Group,
			GroupLabel,
			Separator,
			Collection,
			useFilteredItems
		});
	})))();
}
//#endregion
//#region ../packages/ui/src/form/primitives/searchable-chip-select/stories/fixtures.ts
var ITEMS;
function init_fixtures() {
	return (init_fixtures = __esmMin((() => {
		ITEMS = [
			{
				value: "apple",
				label: "Apple"
			},
			{
				value: "apricot",
				label: "Apricot"
			},
			{
				value: "banana",
				label: "Banana"
			},
			{
				value: "blackberry",
				label: "Blackberry"
			},
			{
				value: "blueberry",
				label: "Blueberry"
			},
			{
				value: "boysenberry",
				label: "Boysenberry"
			},
			{
				value: "breadfruit",
				label: "Breadfruit"
			},
			{
				value: "cantaloupe",
				label: "Cantaloupe"
			},
			{
				value: "cherry",
				label: "Cherry"
			},
			{
				value: "clementine",
				label: "Clementine"
			},
			{
				value: "coconut",
				label: "Coconut"
			},
			{
				value: "cranberry",
				label: "Cranberry"
			},
			{
				value: "dragonfruit",
				label: "Dragonfruit"
			},
			{
				value: "durian",
				label: "Durian"
			},
			{
				value: "elderberry",
				label: "Elderberry"
			},
			{
				value: "fig",
				label: "Fig"
			},
			{
				value: "gooseberry",
				label: "Gooseberry"
			},
			{
				value: "grape",
				label: "Grape"
			},
			{
				value: "grapefruit",
				label: "Grapefruit"
			},
			{
				value: "guava",
				label: "Guava"
			},
			{
				value: "honeydew",
				label: "Honeydew"
			},
			{
				value: "jackfruit",
				label: "Jackfruit"
			},
			{
				value: "kiwi",
				label: "Kiwi"
			},
			{
				value: "kumquat",
				label: "Kumquat"
			},
			{
				value: "lemon",
				label: "Lemon"
			},
			{
				value: "lime",
				label: "Lime"
			},
			{
				value: "longan",
				label: "Longan"
			},
			{
				value: "lychee",
				label: "Lychee"
			},
			{
				value: "mandarin",
				label: "Mandarin"
			},
			{
				value: "mango",
				label: "Mango"
			},
			{
				value: "mangosteen",
				label: "Mangosteen"
			},
			{
				value: "mulberry",
				label: "Mulberry"
			},
			{
				value: "nectarine",
				label: "Nectarine"
			},
			{
				value: "orange",
				label: "Orange"
			},
			{
				value: "papaya",
				label: "Papaya"
			},
			{
				value: "passionfruit",
				label: "Passionfruit"
			},
			{
				value: "peach",
				label: "Peach"
			},
			{
				value: "pear",
				label: "Pear"
			},
			{
				value: "persimmon",
				label: "Persimmon"
			},
			{
				value: "pineapple",
				label: "Pineapple"
			},
			{
				value: "plum",
				label: "Plum"
			},
			{
				value: "pomegranate",
				label: "Pomegranate"
			},
			{
				value: "quince",
				label: "Quince"
			},
			{
				value: "rambutan",
				label: "Rambutan"
			},
			{
				value: "raspberry",
				label: "Raspberry"
			},
			{
				value: "soursop",
				label: "Soursop"
			},
			{
				value: "starfruit",
				label: "Starfruit"
			},
			{
				value: "strawberry",
				label: "Strawberry"
			},
			{
				value: "tangerine",
				label: "Tangerine"
			},
			{
				value: "watermelon",
				label: "Watermelon"
			}
		];
	})))();
}
//#endregion
//#region ../packages/ui/src/form/primitives/searchable-chip-select/stories/index.story.tsx
var index_story_exports = /* @__PURE__ */ __exportAll({
	Default: () => Default,
	Grouped: () => Grouped,
	PopupWidth: () => PopupWidth,
	WithCustomChipsAndItems: () => WithCustomChipsAndItems,
	WithCustomEmptyContent: () => WithCustomEmptyContent,
	WithItemDescriptions: () => WithItemDescriptions,
	WithSeparator: () => WithSeparator,
	WithoutClearButton: () => WithoutClearButton,
	default: () => meta
});
var import_jsx_dev_runtime, fn, _jsxFileName, meta, Default, WithItemDescriptions, WithCustomChipsAndItems, WithCustomEmptyContent, Grouped, WithSeparator, WithoutClearButton, PopupWidth;
function init_index_story() {
	return (init_index_story = __esmMin((() => {
		init_react();
		init_searchable_chip_select$1();
		init_fixtures$1();
		init_fixtures();
		init_shared();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		({fn} = __STORYBOOK_MODULE_TEST__);
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/primitives/searchable-chip-select/stories/index.story.tsx";
		meta = {
			tags: ["manifest"],
			title: "Components/@wordpress-ui/Form/Primitives/SearchableChipSelect",
			id: "design-system-components-form-primitives-searchablechipselect",
			component: SearchableChipSelect,
			subcomponents: {
				"SearchableChipSelect.Group": SearchableChipSelect.Group,
				"SearchableChipSelect.GroupLabel": SearchableChipSelect.GroupLabel,
				"SearchableChipSelect.Separator": SearchableChipSelect.Separator,
				"SearchableChipSelect.Item": SearchableChipSelect.Item,
				"SearchableChipSelect.ItemLabel": SearchableChipSelect.ItemLabel,
				"SearchableChipSelect.ItemDescription": SearchableChipSelect.ItemDescription,
				"SearchableChipSelect.ChipWithRemove": SearchableChipSelect.ChipWithRemove,
				"SearchableChipSelect.Collection": SearchableChipSelect.Collection
			},
			argTypes: {
				items: { control: false },
				onValueChange: { action: fn() }
			},
			parameters: { componentStatus: {
				status: "recommended",
				whereUsed: "global"
			} }
		};
		Default = { args: {
			defaultValue: [ITEMS[0], ITEMS[1]],
			items: ITEMS,
			"aria-label": "Fruit"
		} };
		WithItemDescriptions = { args: {
			...Default.args,
			defaultValue: [],
			items: [{
				value: "apple",
				label: "Apple",
				description: "A crisp fruit."
			}, {
				value: "banana",
				label: "Banana",
				description: "A soft fruit."
			}]
		} };
		WithCustomChipsAndItems = { args: {
			...Default.args,
			chipsContent: (value) => value.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SearchableChipSelect.ChipWithRemove, {
				prefix: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
					src: `https://gravatar.com/avatar/?d=initials&initials=${item.label}`,
					alt: "",
					style: { width: "100%" }
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 86,
					columnNumber: 7
				}, void 0),
				children: item.label
			}, item.value, false, {
				fileName: _jsxFileName,
				lineNumber: 83,
				columnNumber: 5
			}, void 0)),
			children: (item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SearchableChipSelect.Item, {
				value: item,
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SearchableChipSelect.ItemLabel, { children: ["😋 ", item.label] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 98,
					columnNumber: 5
				}, void 0)
			}, item.value, false, {
				fileName: _jsxFileName,
				lineNumber: 97,
				columnNumber: 4
			}, void 0)
		} };
		WithCustomEmptyContent = { args: {
			...Default.args,
			emptyContent: "No fruit found 🥺"
		} };
		Grouped = { args: {
			"aria-label": "Fruit",
			items: GROUPED_ITEMS,
			children: (group) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SearchableChipSelect.Group, {
				items: group.items,
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SearchableChipSelect.GroupLabel, { children: group.label }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 133,
					columnNumber: 5
				}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SearchableChipSelect.Collection, { children: (item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SearchableChipSelect.Item, {
					value: item,
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SearchableChipSelect.ItemLabel, { children: item.label }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 142,
						columnNumber: 8
					}, void 0)
				}, item.value, false, {
					fileName: _jsxFileName,
					lineNumber: 138,
					columnNumber: 7
				}, void 0) }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 136,
					columnNumber: 5
				}, void 0)]
			}, group.label, true, {
				fileName: _jsxFileName,
				lineNumber: 129,
				columnNumber: 4
			}, void 0)
		} };
		WithSeparator = { args: {
			...Default.args,
			items: [...ITEMS.slice(0, 3), {
				value: "other",
				label: "Other"
			}],
			children: (item, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.Fragment, { children: [item.value === "other" && index > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SearchableChipSelect.Separator, {}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 163,
				columnNumber: 6
			}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SearchableChipSelect.Item, {
				value: item,
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SearchableChipSelect.ItemLabel, { children: item.label }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 166,
					columnNumber: 6
				}, void 0)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 165,
				columnNumber: 5
			}, void 0)] }, item.value, true, {
				fileName: _jsxFileName,
				lineNumber: 161,
				columnNumber: 4
			}, void 0)
		} };
		WithoutClearButton = { args: {
			...Default.args,
			showClearButton: false
		} };
		PopupWidth = {
			decorators: [narrowContainerDecorator],
			args: {
				"aria-label": "Tags",
				items: longLabelPopupItems,
				popupWidth: "sm"
			}
		};
		try {
			WithItemDescriptions.__docgenInfo = {
				"description": "Item descriptions supplement each popup item and are not copied to chips.",
				"displayName": "WithItemDescriptions",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/primitives/searchable-chip-select/stories/index.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			WithCustomChipsAndItems.__docgenInfo = {
				"description": "To customize what is rendered inside the chips, pass a\nrender function to the `chipsContent` prop that returns an array of `ChipWithRemove` subcomponents.\nThe chip is named from its content. Pass `aria-label` when that content is not a usable name.\n\nThe item list can be customized by passing a render function as `children`,\nreturning an `Item` subcomponent for each item.",
				"displayName": "WithCustomChipsAndItems",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/primitives/searchable-chip-select/stories/index.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			WithCustomEmptyContent.__docgenInfo = {
				"description": "Use the `emptyContent` prop to customize the empty state,\nwhich shows whenever there are no matching items.",
				"displayName": "WithCustomEmptyContent",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/primitives/searchable-chip-select/stories/index.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			Grouped.__docgenInfo = {
				"description": "To render grouped items, pass an array of groups to `items` (each with\n`label` and `items` properties) and provide `children` that renders each\ngroup using `SearchableChipSelect.Group`, `SearchableChipSelect.GroupLabel`,\nand `SearchableChipSelect.Collection`. Grouped items have no default\nrenderer, so `children` is required.",
				"displayName": "Grouped",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/primitives/searchable-chip-select/stories/index.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			WithSeparator.__docgenInfo = {
				"description": "Use `SearchableChipSelect.Separator` to set choices apart from each other.",
				"displayName": "WithSeparator",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/primitives/searchable-chip-select/stories/index.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			WithoutClearButton.__docgenInfo = {
				"description": "Use the `showClearButton` prop to hide the clear button.",
				"displayName": "WithoutClearButton",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/primitives/searchable-chip-select/stories/index.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			PopupWidth.__docgenInfo = {
				"description": "Use `popupWidth` to constrain the popup relative to a narrow anchor.",
				"displayName": "PopupWidth",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/primitives/searchable-chip-select/stories/index.story.tsx",
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
					originalSource: "{\n  args: {\n    defaultValue: [ITEMS[0], ITEMS[1]],\n    items: ITEMS,\n    'aria-label': 'Fruit'\n  }\n}",
					...Default.parameters?.docs?.source
				}
			}
		};
		WithItemDescriptions.parameters = {
			...WithItemDescriptions.parameters,
			docs: {
				...WithItemDescriptions.parameters?.docs,
				source: {
					originalSource: "{\n  args: {\n    ...Default.args,\n    defaultValue: [],\n    items: [{\n      value: 'apple',\n      label: 'Apple',\n      description: 'A crisp fruit.'\n    }, {\n      value: 'banana',\n      label: 'Banana',\n      description: 'A soft fruit.'\n    }]\n  }\n}",
					...WithItemDescriptions.parameters?.docs?.source
				},
				description: {
					story: "Item descriptions supplement each popup item and are not copied to chips.",
					...WithItemDescriptions.parameters?.docs?.description
				}
			}
		};
		WithCustomChipsAndItems.parameters = {
			...WithCustomChipsAndItems.parameters,
			docs: {
				...WithCustomChipsAndItems.parameters?.docs,
				source: {
					originalSource: "{\n  args: {\n    ...Default.args,\n    chipsContent: (value: typeof ITEMS) => value.map(item => <SearchableChipSelect.ChipWithRemove key={item.value} prefix={<img src={`https://gravatar.com/avatar/?d=initials&initials=${item.label}`} alt=\"\" style={{\n      width: '100%'\n    }} />}>\n                    {item.label}\n                </SearchableChipSelect.ChipWithRemove>),\n    children: (item: (typeof ITEMS)[0]) => <SearchableChipSelect.Item key={item.value} value={item}>\n                <SearchableChipSelect.ItemLabel>\n                    😋 {item.label}\n                </SearchableChipSelect.ItemLabel>\n            </SearchableChipSelect.Item>\n  }\n}",
					...WithCustomChipsAndItems.parameters?.docs?.source
				},
				description: {
					story: "To customize what is rendered inside the chips, pass a\nrender function to the `chipsContent` prop that returns an array of `ChipWithRemove` subcomponents.\nThe chip is named from its content. Pass `aria-label` when that content is not a usable name.\n\nThe item list can be customized by passing a render function as `children`,\nreturning an `Item` subcomponent for each item.",
					...WithCustomChipsAndItems.parameters?.docs?.description
				}
			}
		};
		WithCustomEmptyContent.parameters = {
			...WithCustomEmptyContent.parameters,
			docs: {
				...WithCustomEmptyContent.parameters?.docs,
				source: {
					originalSource: "{\n  args: {\n    ...Default.args,\n    emptyContent: 'No fruit found 🥺'\n  }\n}",
					...WithCustomEmptyContent.parameters?.docs?.source
				},
				description: {
					story: "Use the `emptyContent` prop to customize the empty state,\nwhich shows whenever there are no matching items.",
					...WithCustomEmptyContent.parameters?.docs?.description
				}
			}
		};
		Grouped.parameters = {
			...Grouped.parameters,
			docs: {
				...Grouped.parameters?.docs,
				source: {
					originalSource: "{\n  args: {\n    'aria-label': 'Fruit',\n    items: GROUPED_ITEMS,\n    children: (group: FixtureGroup) => <SearchableChipSelect.Group key={group.label} items={group.items}>\n                <SearchableChipSelect.GroupLabel>\n                    {group.label}\n                </SearchableChipSelect.GroupLabel>\n                <SearchableChipSelect.Collection>\n                    {(item: FixtureItem) => <SearchableChipSelect.Item key={item.value} value={item}>\n                            <SearchableChipSelect.ItemLabel>\n                                {item.label}\n                            </SearchableChipSelect.ItemLabel>\n                        </SearchableChipSelect.Item>}\n                </SearchableChipSelect.Collection>\n            </SearchableChipSelect.Group>\n  }\n}",
					...Grouped.parameters?.docs?.source
				},
				description: {
					story: "To render grouped items, pass an array of groups to `items` (each with\n`label` and `items` properties) and provide `children` that renders each\ngroup using `SearchableChipSelect.Group`, `SearchableChipSelect.GroupLabel`,\nand `SearchableChipSelect.Collection`. Grouped items have no default\nrenderer, so `children` is required.",
					...Grouped.parameters?.docs?.description
				}
			}
		};
		WithSeparator.parameters = {
			...WithSeparator.parameters,
			docs: {
				...WithSeparator.parameters?.docs,
				source: {
					originalSource: "{\n  args: {\n    ...Default.args,\n    items: [...ITEMS.slice(0, 3), {\n      value: 'other',\n      label: 'Other'\n    }],\n    children: (item: FixtureItem, index: number) => <Fragment key={item.value}>\n                {item.value === 'other' && index > 0 && <SearchableChipSelect.Separator />}\n                <SearchableChipSelect.Item value={item}>\n                    <SearchableChipSelect.ItemLabel>\n                        {item.label}\n                    </SearchableChipSelect.ItemLabel>\n                </SearchableChipSelect.Item>\n            </Fragment>\n  }\n}",
					...WithSeparator.parameters?.docs?.source
				},
				description: {
					story: "Use `SearchableChipSelect.Separator` to set choices apart from each other.",
					...WithSeparator.parameters?.docs?.description
				}
			}
		};
		WithoutClearButton.parameters = {
			...WithoutClearButton.parameters,
			docs: {
				...WithoutClearButton.parameters?.docs,
				source: {
					originalSource: "{\n  args: {\n    ...Default.args,\n    showClearButton: false\n  }\n}",
					...WithoutClearButton.parameters?.docs?.source
				},
				description: {
					story: "Use the `showClearButton` prop to hide the clear button.",
					...WithoutClearButton.parameters?.docs?.description
				}
			}
		};
		PopupWidth.parameters = {
			...PopupWidth.parameters,
			docs: {
				...PopupWidth.parameters?.docs,
				source: {
					originalSource: "{\n  decorators: [narrowContainerDecorator],\n  args: {\n    'aria-label': 'Tags',\n    items: longLabelPopupItems,\n    popupWidth: 'sm'\n  }\n}",
					...PopupWidth.parameters?.docs?.source
				},
				description: {
					story: "Use `popupWidth` to constrain the popup relative to a narrow anchor.",
					...PopupWidth.parameters?.docs?.description
				}
			}
		};
	})))();
}
//#endregion
export { WithItemDescriptions as a, index_story_exports as c, init_fixtures as d, SearchableChipSelect as f, WithCustomEmptyContent as i, init_index_story as l, Grouped as n, WithSeparator as o, init_searchable_chip_select$1 as p, WithCustomChipsAndItems as r, WithoutClearButton as s, Default as t, ITEMS as u };
