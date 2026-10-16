import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as init_spinner, t as Spinner } from "./spinner-CjSVVh90.js";
import { n as init_stack, t as Stack } from "./stack-s_FjhA7z.js";
import { n as init_visually_hidden, t as VisuallyHidden } from "./visually-hidden-FYENO0pz.js";
import { D as init_item_label, E as ForwardedItemLabel, F as init_group, M as GroupLabel, N as init_group_label, O as ForwardedItemDescription, P as Group, R as Collection, a as useFilteredItems, c as Separator, i as init_use_filtered_items, k as init_item_description, l as init_separator, r as init_fixtures, t as GROUPED_ITEMS, z as init_collection } from "./fixtures-C8cercBz.js";
import { a as Root, i as init_label, n as init_description, o as init_root, r as Label, t as Description } from "./description-D29ruIHn.js";
import { n as init_details, t as Details } from "./details-BGukt8Ac.js";
import { a as longLabelPopupItems, i as init_shared, n as WITH_DETAILS_DESCRIPTION, o as narrowContainerDecorator, t as DETAILS_EXAMPLE } from "./shared-BIawwOG6.js";
import { a as WithCustomTriggerAndItems$1, d as init_fixtures$1, f as SearchableSelect, h as init_item, i as WithCustomPlaceholder$1, l as init_index_story$1, m as Item, n as Grouped$1, o as WithItemDescriptions$1, p as init_searchable_select, r as WithCustomEmptyContent$1, s as WithSeparator$1, t as Default$1, u as ITEMS } from "./index.story-CIhMcfyB.js";
//#region ../packages/ui/src/form/searchable-select-control/searchable-select-control.tsx
var import_jsx_dev_runtime$1, _jsxFileName$1, SearchableSelectControl$1;
function init_searchable_select_control() {
	return (init_searchable_select_control = __esmMin((() => {
		init_react();
		init_root(), init_label(), init_description(), init_details(), init_searchable_select();
		import_jsx_dev_runtime$1 = require_jsx_dev_runtime();
		_jsxFileName$1 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/searchable-select-control/searchable-select-control.tsx";
		SearchableSelectControl$1 = (0, import_react.forwardRef)(function UnforwardedSearchableSelectControl({ className, label, description, details, hideLabelFromVision, ...restProps }, ref) {
			return /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(Root, {
				className,
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(Label, {
						hideFromVision: hideLabelFromVision,
						children: label
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 24,
						columnNumber: 4
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(SearchableSelect, {
						ref,
						"aria-label": label,
						...restProps
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 27,
						columnNumber: 4
					}, this),
					description && /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(Description, { children: description }, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 33,
						columnNumber: 5
					}, this),
					details && /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(Details, { children: details }, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 35,
						columnNumber: 17
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName$1,
				lineNumber: 23,
				columnNumber: 3
			}, this);
		});
		try {
			SearchableSelectControl$1.__docgenInfo = {
				"description": "A complete searchable select field with integrated label and description.",
				"displayName": "SearchableSelectControl",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/searchable-select-control/searchable-select-control.tsx",
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
						"type": { "name": "Item | null" }
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
						"type": { "name": "Item | null" }
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
					"readOnly": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/combobox/root/AriaCombobox.d.mts",
							"name": "ComboboxRootProps"
						}],
						"description": "Whether the user should be unable to choose a different option from the popup.",
						"name": "readOnly",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/combobox/root/AriaCombobox.d.mts",
							"name": "ComboboxRootProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
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
						"type": { "name": "((value: Item | null, eventDetails: ChangeEventDetails) => void)" }
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
							"fileName": "gutenberg-storybook-preview/packages/ui/src/form/primitives/searchable-select/types.ts",
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
							"fileName": "gutenberg-storybook-preview/packages/ui/src/form/primitives/searchable-select/types.ts",
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
							"fileName": "gutenberg-storybook-preview/packages/ui/src/form/primitives/searchable-select/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "A render function for custom rendering the list of matching items.\nRequired when `items` contains groups.",
						"name": "children",
						"required": false,
						"tags": {},
						"type": { "name": "((item: any, index: number) => ReactNode)" }
					},
					"placeholder": {
						"defaultValue": { "value": "__( 'Select' )" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/form/primitives/searchable-select/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Text to show when no value is selected. This is overridden by `triggerContent`\nif specified, or by a null item's label in `items`.",
						"name": "placeholder",
						"required": false,
						"tags": {},
						"type": { "name": "ReactNode" }
					},
					"triggerContent": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/form/primitives/searchable-select/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The custom trigger content to use instead of the default.\n\nThe callback receives `null` when nothing is selected.\n\n```jsx\ntriggerContent={ ( value ) =>\n  value ? (\n    <span>\n      <Icon icon={ wordpress } />\n      { value.label }\n    </span>\n  ) : null\n}\n```",
						"name": "triggerContent",
						"required": false,
						"tags": {},
						"type": { "name": "ReactNode | ((value: Item | null) => ReactNode)" }
					},
					"emptyContent": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/form/primitives/searchable-select/types.ts",
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
							"fileName": "gutenberg-storybook-preview/packages/ui/src/form/primitives/searchable-select/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Content for the list status live region. The region stays mounted.",
						"name": "statusContent",
						"required": false,
						"tags": {},
						"type": { "name": "ReactNode" }
					},
					"searchPlaceholder": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/form/primitives/searchable-select/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The placeholder text to use for the search input.",
						"name": "searchPlaceholder",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"label": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/form/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The accessible label. All controls must be labeled.",
						"name": "label",
						"required": true,
						"tags": {},
						"type": { "name": "string" }
					},
					"description": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/form/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The accessible description, associated using `aria-describedby`.\n\nFor screen reader accessibility, this should only contain plain text,\nand no semantics such as links.",
						"name": "description",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"details": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/form/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Additional information about the field, which unlike a normal description,\ncan include links and other semantic elements.\n\nDo not use this prop when the content is only plain text;\nuse `description` instead.",
						"name": "details",
						"required": false,
						"tags": {},
						"type": { "name": "ReactNode" }
					},
					"hideLabelFromVision": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/form/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Whether to visually hide the label while keeping it accessible\nto screen readers.",
						"name": "hideLabelFromVision",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"className": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/form/searchable-select-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "CSS class to apply.",
						"name": "className",
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
//#region ../packages/ui/src/form/searchable-select-control/index.ts
var SearchableSelectControl;
function init_searchable_select_control$1() {
	return (init_searchable_select_control$1 = __esmMin((() => {
		init_searchable_select_control();
		init_group();
		init_group_label();
		init_separator();
		init_item();
		init_item_description();
		init_item_label();
		init_collection();
		init_use_filtered_items();
		SearchableSelectControl = Object.assign(SearchableSelectControl$1, {
			Group,
			GroupLabel,
			Separator,
			Item,
			ItemLabel: ForwardedItemLabel,
			ItemDescription: ForwardedItemDescription,
			Collection,
			useFilteredItems
		});
	})))();
}
//#endregion
//#region ../packages/ui/src/form/searchable-select-control/stories/index.story.tsx
function HiddenResultCount() {
	const count = SearchableSelectControl.useFilteredItems().length;
	if (count === 0) return null;
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(VisuallyHidden, { children: count === 1 ? "1 result found." : `${count} results found.` }, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 216,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime, fn, _jsxFileName, meta, Default, WithItemDescriptions, WithCustomPlaceholder, VisuallyHiddenLabel, WithDetails, WithCustomSearchPlaceholder, disabledOptionItems, WithDisabledOption, Creatable, WithCustomTriggerAndItems, WithCustomEmptyContent, AsyncItems, Grouped, WithSeparator, GroupedCreatable, PopupWidth;
function init_index_story() {
	return (init_index_story = __esmMin((() => {
		init_react();
		init_spinner();
		init_stack();
		init_visually_hidden();
		init_searchable_select_control$1();
		init_fixtures();
		init_fixtures$1();
		init_index_story$1();
		init_shared();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		({fn} = __STORYBOOK_MODULE_TEST__);
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/searchable-select-control/stories/index.story.tsx";
		meta = {
			tags: ["manifest"],
			title: "Components/@wordpress-ui/Form/SearchableSelectControl",
			id: "design-system-components-form-searchableselectcontrol",
			component: SearchableSelectControl,
			subcomponents: {
				"SearchableSelectControl.Group": SearchableSelectControl.Group,
				"SearchableSelectControl.GroupLabel": SearchableSelectControl.GroupLabel,
				"SearchableSelectControl.Separator": SearchableSelectControl.Separator,
				"SearchableSelectControl.Item": SearchableSelectControl.Item,
				"SearchableSelectControl.ItemLabel": SearchableSelectControl.ItemLabel,
				"SearchableSelectControl.ItemDescription": SearchableSelectControl.ItemDescription,
				"SearchableSelectControl.Collection": SearchableSelectControl.Collection
			},
			argTypes: {
				items: { control: false },
				value: { control: false },
				onValueChange: { action: fn() }
			},
			parameters: { componentStatus: {
				status: "use-with-caution",
				whereUsed: "global",
				notes: "Not yet recommended for use alongside components from `@wordpress/components`, pending review of style consistency with `@wordpress/components`, overlays compatibility, and component set completeness. See [WordPress/gutenberg#76135](https://github.com/WordPress/gutenberg/issues/76135)."
			} }
		};
		Default = {
			...Default$1,
			args: {
				...Default$1.args,
				label: "Label",
				description: "This is a description."
			}
		};
		WithItemDescriptions = {
			...WithItemDescriptions$1,
			args: {
				...WithItemDescriptions$1.args,
				label: "Fruit"
			}
		};
		WithCustomPlaceholder = {
			...WithCustomPlaceholder$1,
			args: {
				...WithCustomPlaceholder$1.args,
				label: "Label",
				description: "This is a description."
			}
		};
		VisuallyHiddenLabel = { args: {
			...Default.args,
			hideLabelFromVision: true
		} };
		WithDetails = {
			parameters: { docs: { description: { story: WITH_DETAILS_DESCRIPTION } } },
			args: {
				...Default.args,
				description: void 0,
				details: DETAILS_EXAMPLE
			}
		};
		WithCustomSearchPlaceholder = { args: {
			...Default.args,
			searchPlaceholder: "Search fruit"
		} };
		disabledOptionItems = [
			{
				value: "apple",
				label: "Apple"
			},
			{
				value: "banana",
				label: "Banana",
				disabled: true
			},
			{
				value: "cherry",
				label: "Cherry"
			}
		];
		WithDisabledOption = { args: {
			...Default.args,
			items: disabledOptionItems,
			defaultValue: disabledOptionItems[0]
		} };
		Creatable = {
			args: {
				...Default.args,
				items: ITEMS
			},
			render: function Template(args) {
				const { items = ITEMS, ...restArgs } = args;
				const [inputValue, setInputValue] = (0, import_react.useState)("");
				const [value, setValue] = (0, import_react.useState)(ITEMS[0]);
				const creatableItem = {
					value: "__create__",
					label: "Create new item" + (inputValue ? `: ${inputValue}` : ""),
					creatable: true
				};
				return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SearchableSelectControl, {
					...restArgs,
					items: [...items, creatableItem],
					inputValue,
					onInputValueChange: setInputValue,
					value,
					onValueChange: (newValue, event) => {
						if (!newValue) return;
						if (newValue.value === creatableItem.value) alert(`Create new item: '${inputValue}'`);
						else setValue(newValue);
						args.onValueChange?.(newValue, event);
					}
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 166,
					columnNumber: 4
				}, this);
			}
		};
		WithCustomTriggerAndItems = {
			...WithCustomTriggerAndItems$1,
			args: {
				...Default.args,
				...WithCustomTriggerAndItems$1.args
			}
		};
		WithCustomEmptyContent = {
			...WithCustomEmptyContent$1,
			args: {
				...Default.args,
				...WithCustomEmptyContent$1.args
			}
		};
		AsyncItems = {
			args: {
				label: "Label",
				description: "This is a description."
			},
			render: function Template(args) {
				const [loading, setLoading] = (0, import_react.useState)(false);
				const [items, setItems] = (0, import_react.useState)([]);
				const timeoutRef = (0, import_react.useRef)(null);
				return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SearchableSelectControl, {
					...args,
					items,
					statusContent: loading ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack, {
						direction: "row",
						gap: "sm",
						align: "center",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Spinner, {}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 244,
							columnNumber: 8
						}, this), "Loading…"]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 243,
						columnNumber: 7
					}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HiddenResultCount, {}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 248,
						columnNumber: 7
					}, this),
					emptyContent: loading ? null : void 0,
					onOpenChange: (open) => {
						if (timeoutRef.current) clearTimeout(timeoutRef.current);
						if (!open) return;
						setLoading(true);
						setItems([]);
						timeoutRef.current = setTimeout(() => {
							setItems(ITEMS);
							setLoading(false);
						}, 500);
					}
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 238,
					columnNumber: 4
				}, this);
			}
		};
		Grouped = {
			...Grouped$1,
			args: {
				...Grouped$1.args,
				defaultValue: GROUPED_ITEMS[0].items[0],
				label: "Fruit",
				description: "Choose your favorite fruit."
			}
		};
		WithSeparator = {
			...WithSeparator$1,
			args: {
				...WithSeparator$1.args,
				defaultValue: ITEMS[0],
				label: "Fruit",
				description: "Choose your favorite fruit."
			}
		};
		GroupedCreatable = {
			args: {
				...Default.args,
				label: "Fruit",
				description: "Choose your favorite fruit."
			},
			render: function Template(args) {
				const [inputValue, setInputValue] = (0, import_react.useState)("");
				const [value, setValue] = (0, import_react.useState)(GROUPED_ITEMS[0].items[0]);
				const creatableItem = {
					value: "__create__",
					label: "Create new item" + (inputValue ? `: ${inputValue}` : ""),
					creatable: true
				};
				const items = [...GROUPED_ITEMS, {
					label: "",
					items: [creatableItem]
				}];
				return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SearchableSelectControl, {
					...args,
					items,
					inputValue,
					onInputValueChange: setInputValue,
					value,
					onValueChange: (newValue, event) => {
						if (!newValue) return;
						if (newValue.value === creatableItem.value) alert(`Create new item: '${inputValue}'`);
						else setValue(newValue);
						args.onValueChange?.(newValue, event);
					},
					children: (group) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SearchableSelectControl.Group, {
						items: group.items,
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SearchableSelectControl.GroupLabel, { children: group.label }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 353,
							columnNumber: 7
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SearchableSelectControl.Collection, { children: (item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SearchableSelectControl.Item, {
							value: item,
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SearchableSelectControl.ItemLabel, { children: item.label }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 362,
								columnNumber: 10
							}, this)
						}, item.value, false, {
							fileName: _jsxFileName,
							lineNumber: 358,
							columnNumber: 9
						}, this) }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 356,
							columnNumber: 7
						}, this)]
					}, group.label, true, {
						fileName: _jsxFileName,
						lineNumber: 349,
						columnNumber: 6
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 329,
					columnNumber: 4
				}, this);
			}
		};
		PopupWidth = {
			...Creatable,
			decorators: [narrowContainerDecorator],
			args: {
				...Creatable.args,
				label: "Tags",
				popupWidth: "sm",
				items: longLabelPopupItems,
				value: longLabelPopupItems[0]
			}
		};
		try {
			WithCustomPlaceholder.__docgenInfo = {
				"description": "When no value is selected, the trigger shows the default placeholder text.\n\nUse the `placeholder` prop to customize text shown.\nPrefer a concise label without a trailing ellipsis.",
				"displayName": "WithCustomPlaceholder",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/searchable-select-control/stories/index.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			WithCustomSearchPlaceholder.__docgenInfo = {
				"description": "Use the `searchPlaceholder` prop to customize the search input placeholder\ntext. Prefer a concise label without a trailing ellipsis.",
				"displayName": "WithCustomSearchPlaceholder",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/searchable-select-control/stories/index.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			Creatable.__docgenInfo = {
				"description": "Mark a creatable action with `creatable: true` on an item in `items`.\nIt renders in the list footer, not the main list, when it is in the\nfiltered items. Handle the creation of the item in `onValueChange`.",
				"displayName": "Creatable",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/searchable-select-control/stories/index.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			AsyncItems.__docgenInfo = {
				"description": "Loads the item list asynchronously. `statusContent` shows loading, then\na visually hidden result count. Pass `emptyContent={ null }` while\nloading so Empty does not claim there are no results.",
				"displayName": "AsyncItems",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/searchable-select-control/stories/index.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			Grouped.__docgenInfo = {
				"description": "Options can be organized into labeled groups with\n`SearchableSelectControl.Group`, `SearchableSelectControl.GroupLabel`,\nand `SearchableSelectControl.Collection`. Pass an array of groups to\n`items` (each with `label` and `items` properties), and use `children` to\nrender each group.",
				"displayName": "Grouped",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/searchable-select-control/stories/index.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			WithSeparator.__docgenInfo = {
				"description": "Use `SearchableSelectControl.Separator` to set choices apart from each other.",
				"displayName": "WithSeparator",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/searchable-select-control/stories/index.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			GroupedCreatable.__docgenInfo = {
				"description": "Grouped items with a creatable footer item. Include the creatable item in\n`items` as a creatable-only group. Handle the creation of the item in\n`onValueChange`.",
				"displayName": "GroupedCreatable",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/searchable-select-control/stories/index.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			PopupWidth.__docgenInfo = {
				"description": "Use `popupWidth` to control how the popup width is constrained relative to\nits anchor.\n\nThis example uses `sm`, allowing the popup to extend beyond the narrow anchor width.",
				"displayName": "PopupWidth",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/searchable-select-control/stories/index.story.tsx",
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
					originalSource: "{\n  ...SearchableSelectStories.Default,\n  args: {\n    ...SearchableSelectStories.Default.args,\n    label: 'Label',\n    description: 'This is a description.'\n  }\n}",
					...Default.parameters?.docs?.source
				}
			}
		};
		WithItemDescriptions.parameters = {
			...WithItemDescriptions.parameters,
			docs: {
				...WithItemDescriptions.parameters?.docs,
				source: {
					originalSource: "{\n  ...SearchableSelectStories.WithItemDescriptions,\n  args: {\n    ...SearchableSelectStories.WithItemDescriptions.args,\n    label: 'Fruit'\n  }\n}",
					...WithItemDescriptions.parameters?.docs?.source
				}
			}
		};
		WithCustomPlaceholder.parameters = {
			...WithCustomPlaceholder.parameters,
			docs: {
				...WithCustomPlaceholder.parameters?.docs,
				source: {
					originalSource: "{\n  ...SearchableSelectStories.WithCustomPlaceholder,\n  args: {\n    ...SearchableSelectStories.WithCustomPlaceholder.args,\n    label: 'Label',\n    description: 'This is a description.'\n  }\n}",
					...WithCustomPlaceholder.parameters?.docs?.source
				},
				description: {
					story: "When no value is selected, the trigger shows the default placeholder text.\n\nUse the `placeholder` prop to customize text shown.\nPrefer a concise label without a trailing ellipsis.",
					...WithCustomPlaceholder.parameters?.docs?.description
				}
			}
		};
		VisuallyHiddenLabel.parameters = {
			...VisuallyHiddenLabel.parameters,
			docs: {
				...VisuallyHiddenLabel.parameters?.docs,
				source: {
					originalSource: "{\n  args: {\n    ...Default.args,\n    hideLabelFromVision: true\n  }\n}",
					...VisuallyHiddenLabel.parameters?.docs?.source
				}
			}
		};
		WithDetails.parameters = {
			...WithDetails.parameters,
			docs: {
				...WithDetails.parameters?.docs,
				source: {
					originalSource: "{\n  parameters: {\n    docs: {\n      description: {\n        story: WITH_DETAILS_DESCRIPTION\n      }\n    }\n  },\n  args: {\n    ...Default.args,\n    description: undefined,\n    details: DETAILS_EXAMPLE\n  }\n}",
					...WithDetails.parameters?.docs?.source
				}
			}
		};
		WithCustomSearchPlaceholder.parameters = {
			...WithCustomSearchPlaceholder.parameters,
			docs: {
				...WithCustomSearchPlaceholder.parameters?.docs,
				source: {
					originalSource: "{\n  args: {\n    ...Default.args,\n    searchPlaceholder: 'Search fruit'\n  }\n}",
					...WithCustomSearchPlaceholder.parameters?.docs?.source
				},
				description: {
					story: "Use the `searchPlaceholder` prop to customize the search input placeholder\ntext. Prefer a concise label without a trailing ellipsis.",
					...WithCustomSearchPlaceholder.parameters?.docs?.description
				}
			}
		};
		WithDisabledOption.parameters = {
			...WithDisabledOption.parameters,
			docs: {
				...WithDisabledOption.parameters?.docs,
				source: {
					originalSource: "{\n  args: {\n    ...Default.args,\n    items: disabledOptionItems,\n    defaultValue: disabledOptionItems[0]\n  }\n}",
					...WithDisabledOption.parameters?.docs?.source
				}
			}
		};
		Creatable.parameters = {
			...Creatable.parameters,
			docs: {
				...Creatable.parameters?.docs,
				source: {
					originalSource: "{\n  args: {\n    ...Default.args,\n    items: ITEMS\n  },\n  render: function Template(args) {\n    const {\n      items = ITEMS,\n      ...restArgs\n    } = args;\n    const [inputValue, setInputValue] = useState('');\n    const [value, setValue] = useState<React.ComponentProps<typeof SearchableSelectControl>['value']>(ITEMS[0]);\n    const creatableItem = {\n      value: '__create__',\n      label: 'Create new item' + (inputValue ? `: ${inputValue}` : ''),\n      creatable: true\n    };\n    return <SearchableSelectControl {...restArgs} items={[...(items as FixtureItem[]), creatableItem]} inputValue={inputValue} onInputValueChange={setInputValue} value={value} onValueChange={(newValue, event) => {\n      if (!newValue) {\n        return;\n      }\n      if (newValue.value === creatableItem.value) {\n        // eslint-disable-next-line no-alert\n        alert(`Create new item: '${inputValue}'`);\n      } else {\n        setValue(newValue);\n      }\n      args.onValueChange?.(newValue, event);\n    }} />;\n  }\n}",
					...Creatable.parameters?.docs?.source
				},
				description: {
					story: "Mark a creatable action with `creatable: true` on an item in `items`.\nIt renders in the list footer, not the main list, when it is in the\nfiltered items. Handle the creation of the item in `onValueChange`.",
					...Creatable.parameters?.docs?.description
				}
			}
		};
		WithCustomTriggerAndItems.parameters = {
			...WithCustomTriggerAndItems.parameters,
			docs: {
				...WithCustomTriggerAndItems.parameters?.docs,
				source: {
					originalSource: "{\n  ...SearchableSelectStories.WithCustomTriggerAndItems,\n  args: {\n    ...Default.args,\n    ...SearchableSelectStories.WithCustomTriggerAndItems.args\n  }\n}",
					...WithCustomTriggerAndItems.parameters?.docs?.source
				}
			}
		};
		WithCustomEmptyContent.parameters = {
			...WithCustomEmptyContent.parameters,
			docs: {
				...WithCustomEmptyContent.parameters?.docs,
				source: {
					originalSource: "{\n  ...SearchableSelectStories.WithCustomEmptyContent,\n  args: {\n    ...Default.args,\n    ...SearchableSelectStories.WithCustomEmptyContent.args\n  }\n}",
					...WithCustomEmptyContent.parameters?.docs?.source
				}
			}
		};
		AsyncItems.parameters = {
			...AsyncItems.parameters,
			docs: {
				...AsyncItems.parameters?.docs,
				source: {
					originalSource: "{\n  args: {\n    label: 'Label',\n    description: 'This is a description.'\n  },\n  render: function Template(args) {\n    const [loading, setLoading] = useState(false);\n    const [items, setItems] = useState<typeof ITEMS>([]);\n    const timeoutRef = useRef<ReturnType<typeof setTimeout>>(null);\n    return <SearchableSelectControl {...args} items={items} statusContent={loading ? <Stack direction=\"row\" gap=\"sm\" align=\"center\">\n                            <Spinner />\n                            Loading…\n                        </Stack> : <HiddenResultCount />} emptyContent={loading ? null : undefined} onOpenChange={open => {\n      if (timeoutRef.current) {\n        clearTimeout(timeoutRef.current);\n      }\n      if (!open) {\n        return;\n      }\n      setLoading(true);\n      setItems([]);\n      timeoutRef.current = setTimeout(() => {\n        setItems(ITEMS);\n        setLoading(false);\n      }, 500);\n    }} />;\n  }\n}",
					...AsyncItems.parameters?.docs?.source
				},
				description: {
					story: "Loads the item list asynchronously. `statusContent` shows loading, then\na visually hidden result count. Pass `emptyContent={ null }` while\nloading so Empty does not claim there are no results.",
					...AsyncItems.parameters?.docs?.description
				}
			}
		};
		Grouped.parameters = {
			...Grouped.parameters,
			docs: {
				...Grouped.parameters?.docs,
				source: {
					originalSource: "{\n  ...SearchableSelectStories.Grouped,\n  args: {\n    ...SearchableSelectStories.Grouped.args,\n    defaultValue: GROUPED_ITEMS[0].items[0],\n    label: 'Fruit',\n    description: 'Choose your favorite fruit.'\n  }\n}",
					...Grouped.parameters?.docs?.source
				},
				description: {
					story: "Options can be organized into labeled groups with\n`SearchableSelectControl.Group`, `SearchableSelectControl.GroupLabel`,\nand `SearchableSelectControl.Collection`. Pass an array of groups to\n`items` (each with `label` and `items` properties), and use `children` to\nrender each group.",
					...Grouped.parameters?.docs?.description
				}
			}
		};
		WithSeparator.parameters = {
			...WithSeparator.parameters,
			docs: {
				...WithSeparator.parameters?.docs,
				source: {
					originalSource: "{\n  ...SearchableSelectStories.WithSeparator,\n  args: {\n    ...SearchableSelectStories.WithSeparator.args,\n    defaultValue: ITEMS[0],\n    label: 'Fruit',\n    description: 'Choose your favorite fruit.'\n  }\n}",
					...WithSeparator.parameters?.docs?.source
				},
				description: {
					story: "Use `SearchableSelectControl.Separator` to set choices apart from each other.",
					...WithSeparator.parameters?.docs?.description
				}
			}
		};
		GroupedCreatable.parameters = {
			...GroupedCreatable.parameters,
			docs: {
				...GroupedCreatable.parameters?.docs,
				source: {
					originalSource: "{\n  args: {\n    ...Default.args,\n    label: 'Fruit',\n    description: 'Choose your favorite fruit.'\n  },\n  render: function Template(args) {\n    const [inputValue, setInputValue] = useState('');\n    const [value, setValue] = useState<FixtureItem>(GROUPED_ITEMS[0].items[0]);\n    const creatableItem = {\n      value: '__create__',\n      label: 'Create new item' + (inputValue ? `: ${inputValue}` : ''),\n      creatable: true\n    };\n    const items = [...GROUPED_ITEMS, {\n      label: '',\n      items: [creatableItem]\n    }];\n    return <SearchableSelectControl {...args} items={items} inputValue={inputValue} onInputValueChange={setInputValue} value={value} onValueChange={(newValue: FixtureItem | null, event) => {\n      if (!newValue) {\n        return;\n      }\n      if (newValue.value === creatableItem.value) {\n        // eslint-disable-next-line no-alert\n        alert(`Create new item: '${inputValue}'`);\n      } else {\n        setValue(newValue);\n      }\n      args.onValueChange?.(newValue, event);\n    }} children={(group: FixtureGroup) => <SearchableSelectControl.Group key={group.label} items={group.items}>\n                        <SearchableSelectControl.GroupLabel>\n                            {group.label}\n                        </SearchableSelectControl.GroupLabel>\n                        <SearchableSelectControl.Collection>\n                            {(item: FixtureItem) => <SearchableSelectControl.Item key={item.value} value={item}>\n                                    <SearchableSelectControl.ItemLabel>\n                                        {item.label}\n                                    </SearchableSelectControl.ItemLabel>\n                                </SearchableSelectControl.Item>}\n                        </SearchableSelectControl.Collection>\n                    </SearchableSelectControl.Group>} />;\n  }\n}",
					...GroupedCreatable.parameters?.docs?.source
				},
				description: {
					story: "Grouped items with a creatable footer item. Include the creatable item in\n`items` as a creatable-only group. Handle the creation of the item in\n`onValueChange`.",
					...GroupedCreatable.parameters?.docs?.description
				}
			}
		};
		PopupWidth.parameters = {
			...PopupWidth.parameters,
			docs: {
				...PopupWidth.parameters?.docs,
				source: {
					originalSource: "{\n  ...Creatable,\n  decorators: [narrowContainerDecorator],\n  args: {\n    ...Creatable.args,\n    label: 'Tags',\n    popupWidth: 'sm',\n    items: longLabelPopupItems,\n    value: longLabelPopupItems[0]\n  }\n}",
					...PopupWidth.parameters?.docs?.source
				},
				description: {
					story: "Use `popupWidth` to control how the popup width is constrained relative to\nits anchor.\n\nThis example uses `sm`, allowing the popup to extend beyond the narrow anchor width.",
					...PopupWidth.parameters?.docs?.description
				}
			}
		};
	})))();
}
//#endregion
init_index_story();
export { AsyncItems, Creatable, Default, Grouped, GroupedCreatable, PopupWidth, VisuallyHiddenLabel, WithCustomEmptyContent, WithCustomPlaceholder, WithCustomSearchPlaceholder, WithCustomTriggerAndItems, WithDetails, WithDisabledOption, WithItemDescriptions, WithSeparator, meta as default };
