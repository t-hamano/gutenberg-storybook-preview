import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { S as init_group, _ as ItemDescription, a as Root, b as init_group_label, c as init_popup, d as Portal, f as init_portal, g as init_item_label, h as ItemLabel, i as init_separator, l as Positioner, m as init_item, n as init_trigger, o as init_root, p as Item, r as Separator, s as Popup, t as Trigger, u as init_positioner, v as init_item_description, x as Group, y as GroupLabel } from "./trigger-DOTWEK4D.js";
import { a as longLabelPopupItems, i as init_shared, o as narrowContainerDecorator } from "./shared-D3MbP_jP.js";
//#region ../packages/ui/src/form/primitives/select/stories/index.story.tsx
var import_jsx_dev_runtime, _jsxFileName, meta, defaultItems, separatorItems, Default, Compact, Minimal, groupedItems, Grouped, WithSeparator, WithCustomPlaceholder, nullValueOptionItems, WithNullValueOption, Labeling, overflowItems, WithOverflow, longListItems, WithLongList, Disabled, disabledItemItems, WithDisabledItem, customOptions, WithCustomTriggerAndItem, stockItems, WithItemDescription, WithCustomZIndex, PopupWidth;
function init_index_story() {
	return (init_index_story = __esmMin((() => {
		init_root(), init_trigger(), init_portal(), init_positioner(), init_popup(), init_group(), init_group_label(), init_item(), init_item_label(), init_item_description(), init_separator();
		init_shared();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/primitives/select/stories/index.story.tsx";
		meta = {
			tags: ["manifest"],
			title: "Components/@wordpress-ui/Form/Primitives/Select",
			id: "design-system-components-form-primitives-select",
			component: Root,
			subcomponents: {
				"Select.Trigger": Trigger,
				"Select.Portal": Portal,
				"Select.Positioner": Positioner,
				"Select.Popup": Popup,
				"Select.Group": Group,
				"Select.GroupLabel": GroupLabel,
				"Select.Item": Item,
				"Select.ItemLabel": ItemLabel,
				"Select.ItemDescription": ItemDescription,
				"Select.Separator": Separator
			},
			argTypes: { onValueChange: { action: "onValueChange" } },
			parameters: { componentStatus: {
				status: "recommended",
				whereUsed: "global"
			} }
		};
		defaultItems = Array.from({ length: 6 }, (_, index) => ({
			value: `item-${index + 1}`,
			label: `Item ${index + 1}`
		}));
		separatorItems = [
			{
				value: "apple",
				label: "Apple"
			},
			{
				value: "banana",
				label: "Banana"
			},
			{
				value: "other",
				label: "Other"
			}
		];
		Default = { args: {
			items: defaultItems,
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trigger, { "aria-label": "Item" }, "trigger", false, {
				fileName: _jsxFileName,
				lineNumber: 54,
				columnNumber: 4
			}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Popup, { children: defaultItems.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Item, {
				value: item,
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ItemLabel, { children: item.label }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 58,
					columnNumber: 7
				}, void 0)
			}, item.value, false, {
				fileName: _jsxFileName,
				lineNumber: 57,
				columnNumber: 6
			}, void 0)) }, "popup", false, {
				fileName: _jsxFileName,
				lineNumber: 55,
				columnNumber: 4
			}, void 0)]
		} };
		Compact = { args: {
			...Default.args,
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trigger, {
				size: "compact",
				"aria-label": "Item"
			}, "trigger", false, {
				fileName: _jsxFileName,
				lineNumber: 70,
				columnNumber: 4
			}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Popup, { children: defaultItems.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Item, {
				value: item,
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ItemLabel, { children: item.label }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 74,
					columnNumber: 7
				}, void 0)
			}, item.value, false, {
				fileName: _jsxFileName,
				lineNumber: 73,
				columnNumber: 6
			}, void 0)) }, "popup", false, {
				fileName: _jsxFileName,
				lineNumber: 71,
				columnNumber: 4
			}, void 0)]
		} };
		Minimal = { args: {
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trigger, {
				size: "small",
				variant: "minimal",
				"aria-label": "Item"
			}, "trigger", false, {
				fileName: _jsxFileName,
				lineNumber: 93,
				columnNumber: 4
			}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Popup, {
				width: "content",
				children: Array.from({ length: 6 }, (_, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Item, {
					value: `${index + 1}`,
					size: "small",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ItemLabel, { children: `${index + 1}` }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 106,
						columnNumber: 7
					}, void 0)
				}, index, false, {
					fileName: _jsxFileName,
					lineNumber: 101,
					columnNumber: 6
				}, void 0))
			}, "popup", false, {
				fileName: _jsxFileName,
				lineNumber: 99,
				columnNumber: 4
			}, void 0)],
			defaultValue: "1"
		} };
		groupedItems = [
			{
				label: "Common",
				items: [
					{
						value: "apple",
						label: "Apple"
					},
					{
						value: "banana",
						label: "Banana"
					},
					{
						value: "orange",
						label: "Orange"
					}
				]
			},
			{
				label: "Berries",
				items: [
					{
						value: "strawberry",
						label: "Strawberry"
					},
					{
						value: "blueberry",
						label: "Blueberry"
					},
					{
						value: "raspberry",
						label: "Raspberry"
					}
				]
			},
			{
				label: "Tropical",
				items: [
					{
						value: "mango",
						label: "Mango"
					},
					{
						value: "pineapple",
						label: "Pineapple"
					},
					{
						value: "papaya",
						label: "Papaya"
					}
				]
			}
		];
		Grouped = { args: {
			items: groupedItems.flatMap((group) => group.items),
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trigger, { "aria-label": "Item" }, "trigger", false, {
				fileName: _jsxFileName,
				lineNumber: 153,
				columnNumber: 4
			}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Popup, { children: groupedItems.map((group) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Group, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(GroupLabel, { children: group.label }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 157,
				columnNumber: 7
			}, void 0), group.items.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Item, {
				value: item,
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ItemLabel, { children: item.label }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 160,
					columnNumber: 9
				}, void 0)
			}, item.value, false, {
				fileName: _jsxFileName,
				lineNumber: 159,
				columnNumber: 8
			}, void 0))] }, group.label, true, {
				fileName: _jsxFileName,
				lineNumber: 156,
				columnNumber: 6
			}, void 0)) }, "popup", false, {
				fileName: _jsxFileName,
				lineNumber: 154,
				columnNumber: 4
			}, void 0)]
		} };
		WithSeparator = { args: {
			items: separatorItems,
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trigger, { "aria-label": "Fruit" }, "trigger", false, {
				fileName: _jsxFileName,
				lineNumber: 179,
				columnNumber: 4
			}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Popup, { children: [
				separatorItems.slice(0, 2).map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Item, {
					value: item,
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ItemLabel, { children: item.label }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 183,
						columnNumber: 7
					}, void 0)
				}, item.value, false, {
					fileName: _jsxFileName,
					lineNumber: 182,
					columnNumber: 6
				}, void 0)),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Separator, {}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 186,
					columnNumber: 5
				}, void 0),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Item, {
					value: separatorItems[2],
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ItemLabel, { children: "Other" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 188,
						columnNumber: 6
					}, void 0)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 187,
					columnNumber: 5
				}, void 0)
			] }, "popup", true, {
				fileName: _jsxFileName,
				lineNumber: 180,
				columnNumber: 4
			}, void 0)]
		} };
		WithCustomPlaceholder = { args: {
			items: defaultItems,
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trigger, {
				placeholder: "Choose an item",
				"aria-label": "Item"
			}, "trigger", false, {
				fileName: _jsxFileName,
				lineNumber: 203,
				columnNumber: 4
			}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Popup, { children: defaultItems.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Item, {
				value: item,
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ItemLabel, { children: item.label }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 211,
					columnNumber: 7
				}, void 0)
			}, item.value, false, {
				fileName: _jsxFileName,
				lineNumber: 210,
				columnNumber: 6
			}, void 0)) }, "popup", false, {
				fileName: _jsxFileName,
				lineNumber: 208,
				columnNumber: 4
			}, void 0)]
		} };
		nullValueOptionItems = [
			{
				value: null,
				label: "Select theme"
			},
			{
				value: "system",
				label: "System default"
			},
			{
				value: "light",
				label: "Light"
			},
			{
				value: "dark",
				label: "Dark"
			}
		];
		WithNullValueOption = { args: {
			items: nullValueOptionItems,
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trigger, { "aria-label": "Item" }, "trigger", false, {
				fileName: _jsxFileName,
				lineNumber: 235,
				columnNumber: 4
			}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Popup, { children: nullValueOptionItems.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Item, {
				value: item.value,
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ItemLabel, { children: item.label }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 242,
					columnNumber: 7
				}, void 0)
			}, item.value ?? "null", false, {
				fileName: _jsxFileName,
				lineNumber: 238,
				columnNumber: 6
			}, void 0)) }, "popup", false, {
				fileName: _jsxFileName,
				lineNumber: 236,
				columnNumber: 4
			}, void 0)]
		} };
		Labeling = { args: {
			...Default.args,
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trigger, { "aria-label": "User role" }, "trigger", false, {
				fileName: _jsxFileName,
				lineNumber: 260,
				columnNumber: 4
			}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Popup, { children: defaultItems.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Item, {
				value: item,
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ItemLabel, { children: item.label }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 264,
					columnNumber: 7
				}, void 0)
			}, item.value, false, {
				fileName: _jsxFileName,
				lineNumber: 263,
				columnNumber: 6
			}, void 0)) }, "popup", false, {
				fileName: _jsxFileName,
				lineNumber: 261,
				columnNumber: 4
			}, void 0)]
		} };
		overflowItems = [{
			value: "long-item",
			label: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
		}, {
			value: "item-2",
			label: "Item 2"
		}];
		WithOverflow = { args: {
			items: overflowItems,
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trigger, { "aria-label": "Item" }, "trigger", false, {
				fileName: _jsxFileName,
				lineNumber: 290,
				columnNumber: 4
			}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Popup, { children: overflowItems.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Item, {
				value: item,
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ItemLabel, { children: item.label }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 294,
					columnNumber: 7
				}, void 0)
			}, item.value, false, {
				fileName: _jsxFileName,
				lineNumber: 293,
				columnNumber: 6
			}, void 0)) }, "popup", false, {
				fileName: _jsxFileName,
				lineNumber: 291,
				columnNumber: 4
			}, void 0)],
			defaultValue: overflowItems[0]
		} };
		longListItems = Array.from({ length: 30 }, (_, index) => ({
			value: `item-${index + 1}`,
			label: `Item ${index + 1}`
		}));
		WithLongList = { args: {
			items: longListItems,
			defaultValue: longListItems[17],
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trigger, { "aria-label": "Item" }, "trigger", false, {
				fileName: _jsxFileName,
				lineNumber: 314,
				columnNumber: 4
			}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Popup, { children: longListItems.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Item, {
				value: item,
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ItemLabel, { children: item.label }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 318,
					columnNumber: 7
				}, void 0)
			}, item.value, false, {
				fileName: _jsxFileName,
				lineNumber: 317,
				columnNumber: 6
			}, void 0)) }, "popup", false, {
				fileName: _jsxFileName,
				lineNumber: 315,
				columnNumber: 4
			}, void 0)]
		} };
		Disabled = { args: {
			...Default.args,
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trigger, { "aria-label": "Item" }, "trigger", false, {
				fileName: _jsxFileName,
				lineNumber: 330,
				columnNumber: 4
			}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Popup, { children: defaultItems.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Item, {
				value: item,
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ItemLabel, { children: item.label }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 334,
					columnNumber: 7
				}, void 0)
			}, item.value, false, {
				fileName: _jsxFileName,
				lineNumber: 333,
				columnNumber: 6
			}, void 0)) }, "popup", false, {
				fileName: _jsxFileName,
				lineNumber: 331,
				columnNumber: 4
			}, void 0)],
			defaultValue: defaultItems[0],
			disabled: true
		} };
		disabledItemItems = [{
			value: "item-1",
			label: "Item 1"
		}, {
			value: "item-2",
			label: "Item 2",
			disabled: true
		}];
		WithDisabledItem = { args: {
			items: disabledItemItems,
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trigger, { "aria-label": "Item" }, "trigger", false, {
				fileName: _jsxFileName,
				lineNumber: 361,
				columnNumber: 4
			}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Popup, { children: disabledItemItems.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Item, {
				value: item,
				disabled: item.disabled,
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ItemLabel, { children: item.label }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 369,
					columnNumber: 7
				}, void 0)
			}, item.value, false, {
				fileName: _jsxFileName,
				lineNumber: 364,
				columnNumber: 6
			}, void 0)) }, "popup", false, {
				fileName: _jsxFileName,
				lineNumber: 362,
				columnNumber: 4
			}, void 0)],
			defaultValue: disabledItemItems[0]
		} };
		customOptions = [{
			value: "user-1",
			label: "User 1 (Admin)"
		}, {
			value: "user-2",
			label: "User 2 (Editor)"
		}];
		WithCustomTriggerAndItem = { args: {
			items: customOptions,
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trigger, {
				"aria-label": "Item",
				children: (item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
					style: {
						display: "flex",
						alignItems: "center",
						gap: 8
					},
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
						src: `https://gravatar.com/avatar/?d=initials&name=${item.value}`,
						alt: "",
						width: "20",
						style: { borderRadius: "50%" }
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 407,
						columnNumber: 7
					}, void 0), item.label]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 400,
					columnNumber: 6
				}, void 0)
			}, "trigger", false, {
				fileName: _jsxFileName,
				lineNumber: 398,
				columnNumber: 4
			}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Popup, { children: customOptions.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Item, {
				value: item,
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ItemLabel, { children: item.label }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 423,
					columnNumber: 7
				}, void 0)
			}, item.value, false, {
				fileName: _jsxFileName,
				lineNumber: 422,
				columnNumber: 6
			}, void 0)) }, "popup", false, {
				fileName: _jsxFileName,
				lineNumber: 420,
				columnNumber: 4
			}, void 0)],
			defaultValue: customOptions[0]
		} };
		stockItems = [{
			value: "apple",
			label: "Apple",
			description: "99 in stock. Ships in two to three business days."
		}, {
			value: "banana",
			label: "Banana",
			description: "12 in stock. Restock expected next week."
		}];
		WithItemDescription = { args: {
			items: stockItems,
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trigger, { "aria-label": "Item" }, "trigger", false, {
				fileName: _jsxFileName,
				lineNumber: 454,
				columnNumber: 4
			}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Popup, { children: stockItems.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Item, {
				value: item,
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ItemLabel, { children: item.label }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 458,
					columnNumber: 7
				}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ItemDescription, { children: item.description }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 459,
					columnNumber: 7
				}, void 0)]
			}, item.value, true, {
				fileName: _jsxFileName,
				lineNumber: 457,
				columnNumber: 6
			}, void 0)) }, "popup", false, {
				fileName: _jsxFileName,
				lineNumber: 455,
				columnNumber: 4
			}, void 0)]
		} };
		WithCustomZIndex = {
			name: "With Custom z-index",
			args: {
				...Default.args,
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trigger, { "aria-label": "Item" }, "trigger", false, {
					fileName: _jsxFileName,
					lineNumber: 490,
					columnNumber: 4
				}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Popup, {
					portal: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Portal, { style: { "--wp-ui-select-z-index": "9999" } }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 493,
						columnNumber: 6
					}, void 0),
					children: defaultItems.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Item, {
						value: item,
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ItemLabel, { children: item.label }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 501,
							columnNumber: 7
						}, void 0)
					}, item.value, false, {
						fileName: _jsxFileName,
						lineNumber: 500,
						columnNumber: 6
					}, void 0))
				}, "popup", false, {
					fileName: _jsxFileName,
					lineNumber: 491,
					columnNumber: 4
				}, void 0)]
			}
		};
		PopupWidth = {
			decorators: [narrowContainerDecorator],
			args: { items: longLabelPopupItems },
			render: (args) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Root, {
				...args,
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trigger, { "aria-label": "Label" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 519,
					columnNumber: 4
				}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Popup, {
					width: "sm",
					children: longLabelPopupItems.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Item, {
						value: item,
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ItemLabel, { children: item.label }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 523,
							columnNumber: 7
						}, void 0)
					}, item.value, false, {
						fileName: _jsxFileName,
						lineNumber: 522,
						columnNumber: 6
					}, void 0))
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 520,
					columnNumber: 4
				}, void 0)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 518,
				columnNumber: 3
			}, void 0)
		};
		try {
			Minimal.__docgenInfo = {
				"description": "The `minimal` variant must be used judiciously, because in many\ncontexts it can be unclear to users that it is a select trigger.\n\nCombined with the `small` size, `minimal` can be used to create a\nvery low-profile `Select`, intended for rare use cases like\na pagination control.",
				"displayName": "Minimal",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/primitives/select/stories/index.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			Grouped.__docgenInfo = {
				"description": "Options can be organized into labeled groups with `Select.Group`\nand `Select.GroupLabel`.",
				"displayName": "Grouped",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/primitives/select/stories/index.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			WithSeparator.__docgenInfo = {
				"description": "Use `Select.Separator` to set choices apart from each other.",
				"displayName": "WithSeparator",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/primitives/select/stories/index.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			WithCustomPlaceholder.__docgenInfo = {
				"description": "Use the `placeholder` prop on `Select.Trigger` to show text when no\nvalue is selected. The default placeholder is `\"Select\"`.",
				"displayName": "WithCustomPlaceholder",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/primitives/select/stories/index.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			WithNullValueOption.__docgenInfo = {
				"description": "Use a `null` item when users should be able to clear the selected value from\nthe popup. When `items` includes a `null` item, its label is used as the\nplaceholder text.",
				"displayName": "WithNullValueOption",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/primitives/select/stories/index.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			Labeling.__docgenInfo = {
				"description": "When accessibly labeling a `Select`, note that the label must be associated with the `Select.Trigger`,\nnot the `Select.Root`.\n\nWhether labeling with `aria-label`, `htmlFor`, or `aria-labelledby`, the association must be made to the `Select.Trigger`.",
				"displayName": "Labeling",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/primitives/select/stories/index.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			WithCustomTriggerAndItem.__docgenInfo = {
				"description": "For custom needs, a `Select.Trigger` can take a custom render function as its\nchildren. Put custom item content inside `Select.ItemLabel`.",
				"displayName": "WithCustomTriggerAndItem",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/primitives/select/stories/index.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			WithItemDescription.__docgenInfo = {
				"description": "Use `Select.ItemDescription` for supplementary text that should be\nannounced as a description rather than part of the item name.",
				"displayName": "WithItemDescription",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/primitives/select/stories/index.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			WithCustomZIndex.__docgenInfo = {
				"description": "Popovers in Gutenberg are managed with explicit z-index values, which can\ncreate situations where a select popup renders below another popover when\nyou want it above.\n\nThe `--wp-ui-select-z-index` CSS variable controls the z-index of the\n`Select` positioner. Override it either:\n\n- **Globally**, by setting the variable on `:root` or `body` (raises every\n  `Select` popover in the page), or\n- **Per instance**, by passing a `Select.Portal` with a `style` (or\n  `className`) to `Select.Popup`'s `portal` prop. The variable cascades\n  from the portal wrapper to everything rendered inside it.\n\nThis story demonstrates the per-instance approach.",
				"displayName": "WithCustomZIndex",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/primitives/select/stories/index.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			PopupWidth.__docgenInfo = {
				"description": "Use `width` on `Select.Popup` to constrain the popup relative to a narrow anchor.",
				"displayName": "PopupWidth",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/primitives/select/stories/index.story.tsx",
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
					originalSource: "{\n  args: {\n    items: defaultItems,\n    children: [<Select.Trigger aria-label=\"Item\" key=\"trigger\" />, <Select.Popup key=\"popup\">\n                {defaultItems.map(item => <Select.Item key={item.value} value={item}>\n                        <Select.ItemLabel>{item.label}</Select.ItemLabel>\n                    </Select.Item>)}\n            </Select.Popup>]\n  }\n}",
					...Default.parameters?.docs?.source
				}
			}
		};
		Compact.parameters = {
			...Compact.parameters,
			docs: {
				...Compact.parameters?.docs,
				source: {
					originalSource: "{\n  args: {\n    ...Default.args,\n    children: [<Select.Trigger size=\"compact\" aria-label=\"Item\" key=\"trigger\" />, <Select.Popup key=\"popup\">\n                {defaultItems.map(item => <Select.Item key={item.value} value={item}>\n                        <Select.ItemLabel>{item.label}</Select.ItemLabel>\n                    </Select.Item>)}\n            </Select.Popup>]\n  }\n}",
					...Compact.parameters?.docs?.source
				}
			}
		};
		Minimal.parameters = {
			...Minimal.parameters,
			docs: {
				...Minimal.parameters?.docs,
				source: {
					originalSource: "{\n  args: {\n    children: [<Select.Trigger size=\"small\" variant=\"minimal\" aria-label=\"Item\" key=\"trigger\" />, <Select.Popup width=\"content\" key=\"popup\">\n                {Array.from({\n        length: 6\n      }, (_, index) => <Select.Item key={index} value={`${index + 1}`} size=\"small\">\n                        <Select.ItemLabel>{`${index + 1}`}</Select.ItemLabel>\n                    </Select.Item>)}\n            </Select.Popup>],\n    defaultValue: '1'\n  }\n}",
					...Minimal.parameters?.docs?.source
				},
				description: {
					story: "The `minimal` variant must be used judiciously, because in many\ncontexts it can be unclear to users that it is a select trigger.\n\nCombined with the `small` size, `minimal` can be used to create a\nvery low-profile `Select`, intended for rare use cases like\na pagination control.",
					...Minimal.parameters?.docs?.description
				}
			}
		};
		Grouped.parameters = {
			...Grouped.parameters,
			docs: {
				...Grouped.parameters?.docs,
				source: {
					originalSource: "{\n  args: {\n    items: groupedItems.flatMap(group => group.items),\n    children: [<Select.Trigger aria-label=\"Item\" key=\"trigger\" />, <Select.Popup key=\"popup\">\n                {groupedItems.map(group => <Select.Group key={group.label}>\n                        <Select.GroupLabel>{group.label}</Select.GroupLabel>\n                        {group.items.map(item => <Select.Item key={item.value} value={item}>\n                                <Select.ItemLabel>\n                                    {item.label}\n                                </Select.ItemLabel>\n                            </Select.Item>)}\n                    </Select.Group>)}\n            </Select.Popup>]\n  }\n}",
					...Grouped.parameters?.docs?.source
				},
				description: {
					story: "Options can be organized into labeled groups with `Select.Group`\nand `Select.GroupLabel`.",
					...Grouped.parameters?.docs?.description
				}
			}
		};
		WithSeparator.parameters = {
			...WithSeparator.parameters,
			docs: {
				...WithSeparator.parameters?.docs,
				source: {
					originalSource: "{\n  args: {\n    items: separatorItems,\n    children: [<Select.Trigger aria-label=\"Fruit\" key=\"trigger\" />, <Select.Popup key=\"popup\">\n                {separatorItems.slice(0, 2).map(item => <Select.Item key={item.value} value={item}>\n                        <Select.ItemLabel>{item.label}</Select.ItemLabel>\n                    </Select.Item>)}\n                <Select.Separator />\n                <Select.Item value={separatorItems[2]}>\n                    <Select.ItemLabel>Other</Select.ItemLabel>\n                </Select.Item>\n            </Select.Popup>]\n  }\n}",
					...WithSeparator.parameters?.docs?.source
				},
				description: {
					story: "Use `Select.Separator` to set choices apart from each other.",
					...WithSeparator.parameters?.docs?.description
				}
			}
		};
		WithCustomPlaceholder.parameters = {
			...WithCustomPlaceholder.parameters,
			docs: {
				...WithCustomPlaceholder.parameters?.docs,
				source: {
					originalSource: "{\n  args: {\n    items: defaultItems,\n    children: [<Select.Trigger placeholder=\"Choose an item\" aria-label=\"Item\" key=\"trigger\" />, <Select.Popup key=\"popup\">\n                {defaultItems.map(item => <Select.Item key={item.value} value={item}>\n                        <Select.ItemLabel>{item.label}</Select.ItemLabel>\n                    </Select.Item>)}\n            </Select.Popup>]\n  }\n}",
					...WithCustomPlaceholder.parameters?.docs?.source
				},
				description: {
					story: "Use the `placeholder` prop on `Select.Trigger` to show text when no\nvalue is selected. The default placeholder is `\"Select\"`.",
					...WithCustomPlaceholder.parameters?.docs?.description
				}
			}
		};
		WithNullValueOption.parameters = {
			...WithNullValueOption.parameters,
			docs: {
				...WithNullValueOption.parameters?.docs,
				source: {
					originalSource: "{\n  args: {\n    items: nullValueOptionItems,\n    children: [<Select.Trigger aria-label=\"Item\" key=\"trigger\" />, <Select.Popup key=\"popup\">\n                {nullValueOptionItems.map(item => <Select.Item key={item.value ?? 'null'} value={item.value}>\n                        <Select.ItemLabel>{item.label}</Select.ItemLabel>\n                    </Select.Item>)}\n            </Select.Popup>]\n  }\n}",
					...WithNullValueOption.parameters?.docs?.source
				},
				description: {
					story: "Use a `null` item when users should be able to clear the selected value from\nthe popup. When `items` includes a `null` item, its label is used as the\nplaceholder text.",
					...WithNullValueOption.parameters?.docs?.description
				}
			}
		};
		Labeling.parameters = {
			...Labeling.parameters,
			docs: {
				...Labeling.parameters?.docs,
				source: {
					originalSource: "{\n  args: {\n    ...Default.args,\n    children: [<Select.Trigger aria-label=\"User role\" key=\"trigger\" />, <Select.Popup key=\"popup\">\n                {defaultItems.map(item => <Select.Item key={item.value} value={item}>\n                        <Select.ItemLabel>{item.label}</Select.ItemLabel>\n                    </Select.Item>)}\n            </Select.Popup>]\n  }\n}",
					...Labeling.parameters?.docs?.source
				},
				description: {
					story: "When accessibly labeling a `Select`, note that the label must be associated with the `Select.Trigger`,\nnot the `Select.Root`.\n\nWhether labeling with `aria-label`, `htmlFor`, or `aria-labelledby`, the association must be made to the `Select.Trigger`.",
					...Labeling.parameters?.docs?.description
				}
			}
		};
		WithOverflow.parameters = {
			...WithOverflow.parameters,
			docs: {
				...WithOverflow.parameters?.docs,
				source: {
					originalSource: "{\n  args: {\n    items: overflowItems,\n    children: [<Select.Trigger aria-label=\"Item\" key=\"trigger\" />, <Select.Popup key=\"popup\">\n                {overflowItems.map(item => <Select.Item key={item.value} value={item}>\n                        <Select.ItemLabel>{item.label}</Select.ItemLabel>\n                    </Select.Item>)}\n            </Select.Popup>],\n    defaultValue: overflowItems[0]\n  }\n}",
					...WithOverflow.parameters?.docs?.source
				}
			}
		};
		WithLongList.parameters = {
			...WithLongList.parameters,
			docs: {
				...WithLongList.parameters?.docs,
				source: {
					originalSource: "{\n  args: {\n    items: longListItems,\n    defaultValue: longListItems[17],\n    children: [<Select.Trigger aria-label=\"Item\" key=\"trigger\" />, <Select.Popup key=\"popup\">\n                {longListItems.map(item => <Select.Item key={item.value} value={item}>\n                        <Select.ItemLabel>{item.label}</Select.ItemLabel>\n                    </Select.Item>)}\n            </Select.Popup>]\n  }\n}",
					...WithLongList.parameters?.docs?.source
				}
			}
		};
		Disabled.parameters = {
			...Disabled.parameters,
			docs: {
				...Disabled.parameters?.docs,
				source: {
					originalSource: "{\n  args: {\n    ...Default.args,\n    children: [<Select.Trigger aria-label=\"Item\" key=\"trigger\" />, <Select.Popup key=\"popup\">\n                {defaultItems.map(item => <Select.Item key={item.value} value={item}>\n                        <Select.ItemLabel>{item.label}</Select.ItemLabel>\n                    </Select.Item>)}\n            </Select.Popup>],\n    defaultValue: defaultItems[0],\n    disabled: true\n  }\n}",
					...Disabled.parameters?.docs?.source
				}
			}
		};
		WithDisabledItem.parameters = {
			...WithDisabledItem.parameters,
			docs: {
				...WithDisabledItem.parameters?.docs,
				source: {
					originalSource: "{\n  args: {\n    items: disabledItemItems,\n    children: [<Select.Trigger aria-label=\"Item\" key=\"trigger\" />, <Select.Popup key=\"popup\">\n                {disabledItemItems.map(item => <Select.Item key={item.value} value={item} disabled={item.disabled}>\n                        <Select.ItemLabel>{item.label}</Select.ItemLabel>\n                    </Select.Item>)}\n            </Select.Popup>],\n    defaultValue: disabledItemItems[0]\n  }\n}",
					...WithDisabledItem.parameters?.docs?.source
				}
			}
		};
		WithCustomTriggerAndItem.parameters = {
			...WithCustomTriggerAndItem.parameters,
			docs: {
				...WithCustomTriggerAndItem.parameters?.docs,
				source: {
					originalSource: "{\n  args: {\n    items: customOptions,\n    children: [<Select.Trigger aria-label=\"Item\" key=\"trigger\">\n                {item => <span style={{\n        display: 'flex',\n        alignItems: 'center',\n        gap: 8\n      }}>\n                        <img src={`https://gravatar.com/avatar/?d=initials&name=${item.value}`} alt=\"\" width=\"20\" style={{\n          borderRadius: '50%'\n        }} />\n\n                        {item.label}\n                    </span>}\n            </Select.Trigger>, <Select.Popup key=\"popup\">\n                {customOptions.map(item => <Select.Item key={item.value} value={item}>\n                        <Select.ItemLabel>{item.label}</Select.ItemLabel>\n                    </Select.Item>)}\n            </Select.Popup>],\n    defaultValue: customOptions[0]\n  }\n}",
					...WithCustomTriggerAndItem.parameters?.docs?.source
				},
				description: {
					story: "For custom needs, a `Select.Trigger` can take a custom render function as its\nchildren. Put custom item content inside `Select.ItemLabel`.",
					...WithCustomTriggerAndItem.parameters?.docs?.description
				}
			}
		};
		WithItemDescription.parameters = {
			...WithItemDescription.parameters,
			docs: {
				...WithItemDescription.parameters?.docs,
				source: {
					originalSource: "{\n  args: {\n    items: stockItems,\n    children: [<Select.Trigger aria-label=\"Item\" key=\"trigger\" />, <Select.Popup key=\"popup\">\n                {stockItems.map(item => <Select.Item key={item.value} value={item}>\n                        <Select.ItemLabel>{item.label}</Select.ItemLabel>\n                        <Select.ItemDescription>\n                            {item.description}\n                        </Select.ItemDescription>\n                    </Select.Item>)}\n            </Select.Popup>]\n  }\n}",
					...WithItemDescription.parameters?.docs?.source
				},
				description: {
					story: "Use `Select.ItemDescription` for supplementary text that should be\nannounced as a description rather than part of the item name.",
					...WithItemDescription.parameters?.docs?.description
				}
			}
		};
		WithCustomZIndex.parameters = {
			...WithCustomZIndex.parameters,
			docs: {
				...WithCustomZIndex.parameters?.docs,
				source: {
					originalSource: "{\n  name: 'With Custom z-index',\n  args: {\n    ...Default.args,\n    children: [<Select.Trigger aria-label=\"Item\" key=\"trigger\" />, <Select.Popup portal={<Select.Portal style={{\n      '--wp-ui-select-z-index': '9999'\n    }} />} key=\"popup\">\n                {defaultItems.map(item => <Select.Item key={item.value} value={item}>\n                        <Select.ItemLabel>{item.label}</Select.ItemLabel>\n                    </Select.Item>)}\n            </Select.Popup>]\n  }\n}",
					...WithCustomZIndex.parameters?.docs?.source
				},
				description: {
					story: "Popovers in Gutenberg are managed with explicit z-index values, which can\ncreate situations where a select popup renders below another popover when\nyou want it above.\n\nThe `--wp-ui-select-z-index` CSS variable controls the z-index of the\n`Select` positioner. Override it either:\n\n- **Globally**, by setting the variable on `:root` or `body` (raises every\n  `Select` popover in the page), or\n- **Per instance**, by passing a `Select.Portal` with a `style` (or\n  `className`) to `Select.Popup`'s `portal` prop. The variable cascades\n  from the portal wrapper to everything rendered inside it.\n\nThis story demonstrates the per-instance approach.",
					...WithCustomZIndex.parameters?.docs?.description
				}
			}
		};
		PopupWidth.parameters = {
			...PopupWidth.parameters,
			docs: {
				...PopupWidth.parameters?.docs,
				source: {
					originalSource: "{\n  decorators: [narrowContainerDecorator],\n  args: {\n    items: longLabelPopupItems\n  },\n  render: args => <Select.Root {...args}>\n            <Select.Trigger aria-label=\"Label\" />\n            <Select.Popup width=\"sm\">\n                {longLabelPopupItems.map(item => <Select.Item key={item.value} value={item}>\n                        <Select.ItemLabel>{item.label}</Select.ItemLabel>\n                    </Select.Item>)}\n            </Select.Popup>\n        </Select.Root>\n}",
					...PopupWidth.parameters?.docs?.source
				},
				description: {
					story: "Use `width` on `Select.Popup` to constrain the popup relative to a narrow anchor.",
					...PopupWidth.parameters?.docs?.description
				}
			}
		};
	})))();
}
//#endregion
init_index_story();
export { Compact, Default, Disabled, Grouped, Labeling, Minimal, PopupWidth, WithCustomPlaceholder, WithCustomTriggerAndItem, WithCustomZIndex, WithDisabledItem, WithItemDescription, WithLongList, WithNullValueOption, WithOverflow, WithSeparator, meta as default };
