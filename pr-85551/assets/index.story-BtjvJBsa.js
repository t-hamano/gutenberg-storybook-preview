import { n as __esmMin, r as __exportAll } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as init_spinner, t as Spinner } from "./spinner-DrO-0UQB.js";
import { n as init_visually_hidden, t as VisuallyHidden } from "./visually-hidden-FYENO0pz.js";
import { n as init_stack, t as Stack } from "./stack-B_tyTWv7.js";
import { a as Clear, c as init_chip_with_remove, i as init_input_group, l as Chips, n as init_value, o as init_clear, r as InputGroup, s as ChipWithRemove, t as Value, u as init_chips } from "./value-C6LxFGdG.js";
import { A as Input, C as init_list, D as init_item_label, E as ForwardedItemLabel, F as init_group, I as Empty, L as init_empty, M as GroupLabel, N as init_group_label, O as ForwardedItemDescription, P as Group, R as Collection, S as List, T as init_item, _ as init_portal, a as useFilteredItems, b as ListBody, c as Separator, d as init_root, f as Popup, g as Portal, h as init_positioner, i as init_use_filtered_items, j as init_input, k as init_item_description, l as init_separator, m as Positioner, n as ITEMS, o as Status, p as init_popup, r as init_fixtures, s as init_status, t as GROUPED_ITEMS, u as Root, v as ListFooter, w as Item, x as init_list_body, y as init_list_footer, z as init_collection } from "./fixtures-CPzKj0L9.js";
import { n as init_trigger, t as Trigger } from "./trigger-D-cWuCTb.js";
import { a as longLabelPopupItems, i as init_shared, o as narrowContainerDecorator } from "./shared-BRqYhAs4.js";
//#region ../packages/ui/src/form/primitives/combobox/stories/index.story.tsx
var index_story_exports = /* @__PURE__ */ __exportAll({
	AsyncItems: () => AsyncItems,
	Compact: () => Compact,
	Creatable: () => Creatable,
	Default: () => Default,
	DetachedInline: () => DetachedInline,
	Grouped: () => Grouped,
	PopupWidth: () => PopupWidth,
	WithCustomTriggerAndItem: () => WithCustomTriggerAndItem,
	WithCustomZIndex: () => WithCustomZIndex,
	WithSeparator: () => WithSeparator,
	default: () => meta
});
function HiddenResultCount() {
	const count = useFilteredItems().length;
	if (count === 0) return null;
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(VisuallyHidden, { children: count === 1 ? "1 result found." : `${count} results found.` }, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 278,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime, _jsxFileName, meta, inputWrapperStyle, Default, Compact, DetachedInline, Creatable, AsyncItems, WithCustomTriggerAndItem, Grouped, WithSeparator, WithCustomZIndex, PopupWidth;
function init_index_story() {
	return (init_index_story = __esmMin((() => {
		init_react();
		init_root(), init_trigger(), init_portal(), init_positioner(), init_popup(), init_input_group(), init_input(), init_list(), init_list_body(), init_list_footer(), init_collection(), init_group(), init_group_label(), init_item(), init_item_label(), init_item_description(), init_separator(), init_value(), init_chips(), init_chip_with_remove(), init_empty(), init_status(), init_clear(), init_use_filtered_items();
		init_spinner();
		init_stack();
		init_visually_hidden();
		init_fixtures();
		init_shared();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/primitives/combobox/stories/index.story.tsx";
		meta = {
			title: "Components/@wordpress-ui/Form/Primitives/Combobox",
			id: "design-system-components-form-primitives-combobox",
			component: Root,
			subcomponents: {
				"Combobox.Trigger": Trigger,
				"Combobox.Portal": Portal,
				"Combobox.Positioner": Positioner,
				"Combobox.Popup": Popup,
				"Combobox.InputGroup": InputGroup,
				"Combobox.Input": Input,
				"Combobox.List": List,
				"Combobox.ListBody": ListBody,
				"Combobox.ListFooter": ListFooter,
				"Combobox.Collection": Collection,
				"Combobox.Group": Group,
				"Combobox.GroupLabel": GroupLabel,
				"Combobox.Item": Item,
				"Combobox.ItemLabel": ForwardedItemLabel,
				"Combobox.ItemDescription": ForwardedItemDescription,
				"Combobox.Separator": Separator,
				"Combobox.Value": Value,
				"Combobox.Chips": Chips,
				"Combobox.ChipWithRemove": ChipWithRemove,
				"Combobox.Empty": Empty,
				"Combobox.Status": Status,
				"Combobox.Clear": Clear
			},
			argTypes: { onValueChange: { action: "onValueChange" } },
			parameters: { componentStatus: {
				status: "use-with-caution",
				whereUsed: "global",
				notes: "Not yet recommended for use alongside components from `@wordpress/components`, pending review of style consistency with `@wordpress/components`, overlays compatibility, and component set completeness. See [WordPress/gutenberg#76135](https://github.com/WordPress/gutenberg/issues/76135)."
			} }
		};
		inputWrapperStyle = { padding: "var(--wpds-dimension-padding-sm, 8px) var(--wpds-dimension-padding-sm, 8px) var(--wpds-dimension-padding-xs, 4px)" };
		Default = { args: {
			items: ITEMS,
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trigger, { "aria-label": "Fruit" }, "trigger", false, {
				fileName: _jsxFileName,
				lineNumber: 70,
				columnNumber: 4
			}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Popup, {
				"aria-label": "Fruit",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						style: inputWrapperStyle,
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
							"aria-label": "Search",
							placeholder: "Search"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 73,
							columnNumber: 6
						}, void 0)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 72,
						columnNumber: 5
					}, void 0),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Empty, { children: "No results found." }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 75,
						columnNumber: 5
					}, void 0),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(List, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ListBody, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Collection, { children: (item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Item, {
						value: item,
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ForwardedItemLabel, { children: item.label }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 84,
							columnNumber: 10
						}, void 0)
					}, item.value, false, {
						fileName: _jsxFileName,
						lineNumber: 80,
						columnNumber: 9
					}, void 0) }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 78,
						columnNumber: 7
					}, void 0) }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 77,
						columnNumber: 6
					}, void 0) }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 76,
						columnNumber: 5
					}, void 0)
				]
			}, "popup", true, {
				fileName: _jsxFileName,
				lineNumber: 71,
				columnNumber: 4
			}, void 0)]
		} };
		Compact = { args: {
			defaultValue: ITEMS[0],
			items: ITEMS,
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trigger, {
				size: "compact",
				"aria-label": "Fruit"
			}, "trigger", false, {
				fileName: _jsxFileName,
				lineNumber: 102,
				columnNumber: 4
			}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Popup, {
				"aria-label": "Fruit",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						style: inputWrapperStyle,
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
							"aria-label": "Search",
							placeholder: "Search"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 109,
							columnNumber: 6
						}, void 0)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 108,
						columnNumber: 5
					}, void 0),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Empty, { children: "No results found." }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 111,
						columnNumber: 5
					}, void 0),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(List, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ListBody, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Collection, { children: (item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Item, {
						value: item,
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ForwardedItemLabel, { children: item.label }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 120,
							columnNumber: 10
						}, void 0)
					}, item.value, false, {
						fileName: _jsxFileName,
						lineNumber: 116,
						columnNumber: 9
					}, void 0) }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 114,
						columnNumber: 7
					}, void 0) }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 113,
						columnNumber: 6
					}, void 0) }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 112,
						columnNumber: 5
					}, void 0)
				]
			}, "popup", true, {
				fileName: _jsxFileName,
				lineNumber: 107,
				columnNumber: 4
			}, void 0)]
		} };
		DetachedInline = {
			parameters: { a11y: { config: { rules: [{
				id: "scrollable-region-focusable",
				enabled: false
			}] } } },
			args: {
				items: ITEMS,
				multiple: true,
				inline: true,
				open: true,
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
					"aria-label": "Search items",
					placeholder: "Search items"
				}, "input", false, {
					fileName: _jsxFileName,
					lineNumber: 160,
					columnNumber: 4
				}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					style: {
						minHeight: "200px",
						maxHeight: "200px",
						marginTop: 8,
						overflow: "auto"
					},
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Empty, { children: "No results found." }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 174,
						columnNumber: 5
					}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(List, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Collection, { children: (item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Item, {
						value: item,
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ForwardedItemLabel, { children: item.label }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 179,
							columnNumber: 9
						}, void 0)
					}, item.value, false, {
						fileName: _jsxFileName,
						lineNumber: 178,
						columnNumber: 8
					}, void 0) }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 176,
						columnNumber: 6
					}, void 0) }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 175,
						columnNumber: 5
					}, void 0)]
				}, "div", true, {
					fileName: _jsxFileName,
					lineNumber: 165,
					columnNumber: 4
				}, void 0)]
			}
		};
		Creatable = { render: function Template(args) {
			const [inputValue, setInputValue] = (0, import_react.useState)("");
			const [value, setValue] = (0, import_react.useState)(ITEMS[0]);
			const hasNoExactMatch = inputValue.length > 0 && !ITEMS.some((item) => item.label === inputValue.trim());
			const creatableItem = {
				value: "create",
				label: "Create new item" + (inputValue ? `: ${inputValue}` : "")
			};
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Root, {
				...args,
				inputValue,
				onInputValueChange: setInputValue,
				value,
				onValueChange: (newValue, event) => {
					const typedValue = newValue;
					if (typedValue.value === "create") alert("Show dialog to create new item!");
					else setValue(typedValue);
					args.onValueChange?.(newValue, event);
				},
				items: !inputValue || hasNoExactMatch ? [...ITEMS, creatableItem] : ITEMS,
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trigger, { "aria-label": "Fruit" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 226,
					columnNumber: 5
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Popup, {
					"aria-label": "Fruit",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							style: inputWrapperStyle,
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
								"aria-label": "Search",
								placeholder: "Search"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 229,
								columnNumber: 7
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 228,
							columnNumber: 6
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Empty, { children: "No results found." }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 234,
							columnNumber: 6
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(List, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ListBody, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Collection, { children: (item) => item.value !== creatableItem.value && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Item, {
							value: item,
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ForwardedItemLabel, { children: item.label }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 244,
								columnNumber: 12
							}, this)
						}, item.value, false, {
							fileName: _jsxFileName,
							lineNumber: 240,
							columnNumber: 11
						}, this) }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 237,
							columnNumber: 8
						}, this) }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 236,
							columnNumber: 7
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ListFooter, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Item, {
							variant: "creatable",
							value: creatableItem,
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ForwardedItemLabel, { children: creatableItem.label }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 258,
								columnNumber: 9
							}, this)
						}, creatableItem.value, false, {
							fileName: _jsxFileName,
							lineNumber: 253,
							columnNumber: 8
						}, this) }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 252,
							columnNumber: 7
						}, this)] }, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 235,
							columnNumber: 6
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 227,
					columnNumber: 5
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 205,
				columnNumber: 4
			}, this);
		} };
		AsyncItems = { render: function Template(args) {
			const [loading, setLoading] = (0, import_react.useState)(false);
			const [items, setItems] = (0, import_react.useState)([]);
			const [value, setValue] = (0, import_react.useState)();
			const [open, setOpen] = (0, import_react.useState)(false);
			const timeoutRef = (0, import_react.useRef)(null);
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Root, {
				...args,
				items,
				value,
				open,
				onValueChange: (newValue, ...changeArgs) => {
					setValue(newValue ?? void 0);
					args.onValueChange?.(newValue, ...changeArgs);
				},
				onOpenChange: (nextOpen) => {
					if (timeoutRef.current) clearTimeout(timeoutRef.current);
					setOpen(nextOpen);
					if (!nextOpen) return;
					setLoading(true);
					setItems([]);
					timeoutRef.current = setTimeout(() => {
						setItems(ITEMS);
						setValue((current) => current ?? ITEMS[0]);
						setLoading(false);
					}, 500);
				},
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trigger, { "aria-label": "Fruit" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 325,
					columnNumber: 5
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Popup, {
					"aria-label": "Fruit",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							style: inputWrapperStyle,
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
								"aria-label": "Search",
								placeholder: "Search"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 328,
								columnNumber: 7
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 327,
							columnNumber: 6
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Status, { children: loading ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack, {
							direction: "row",
							gap: "sm",
							align: "center",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Spinner, {}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 336,
								columnNumber: 9
							}, this), "Loading…"]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 335,
							columnNumber: 8
						}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HiddenResultCount, {}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 340,
							columnNumber: 8
						}, this) }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 333,
							columnNumber: 6
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Empty, { children: loading ? null : "No results found." }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 343,
							columnNumber: 6
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(List, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ListBody, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Collection, { children: (item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Item, {
							value: item,
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ForwardedItemLabel, { children: item.label }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 354,
								columnNumber: 11
							}, this)
						}, item.value, false, {
							fileName: _jsxFileName,
							lineNumber: 350,
							columnNumber: 10
						}, this) }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 348,
							columnNumber: 8
						}, this) }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 347,
							columnNumber: 7
						}, this) }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 346,
							columnNumber: 6
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 326,
					columnNumber: 5
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 297,
				columnNumber: 4
			}, this);
		} };
		WithCustomTriggerAndItem = { args: {
			items: ITEMS,
			defaultValue: ITEMS[0],
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trigger, {
				"aria-label": "Fruit",
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
						lineNumber: 389,
						columnNumber: 7
					}, void 0), item.label]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 382,
					columnNumber: 6
				}, void 0)
			}, "trigger", false, {
				fileName: _jsxFileName,
				lineNumber: 380,
				columnNumber: 4
			}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Popup, {
				"aria-label": "Fruit",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					style: inputWrapperStyle,
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
						"aria-label": "Search",
						placeholder: "Search"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 404,
						columnNumber: 6
					}, void 0)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 403,
					columnNumber: 5
				}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(List, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ListBody, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Collection, { children: (item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Item, {
					value: item,
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ForwardedItemLabel, { children: item.label }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 414,
						columnNumber: 10
					}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ForwardedItemDescription, { children: "99 in stock" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 417,
						columnNumber: 10
					}, void 0)]
				}, item.value, true, {
					fileName: _jsxFileName,
					lineNumber: 410,
					columnNumber: 9
				}, void 0) }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 408,
					columnNumber: 7
				}, void 0) }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 407,
					columnNumber: 6
				}, void 0) }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 406,
					columnNumber: 5
				}, void 0)]
			}, "popup", true, {
				fileName: _jsxFileName,
				lineNumber: 402,
				columnNumber: 4
			}, void 0)]
		} };
		Grouped = { args: {
			items: GROUPED_ITEMS,
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trigger, { "aria-label": "Fruit" }, "trigger", false, {
				fileName: _jsxFileName,
				lineNumber: 438,
				columnNumber: 4
			}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Popup, {
				"aria-label": "Fruit",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						style: inputWrapperStyle,
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
							"aria-label": "Search",
							placeholder: "Search"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 441,
							columnNumber: 6
						}, void 0)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 440,
						columnNumber: 5
					}, void 0),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Empty, { children: "No results found." }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 443,
						columnNumber: 5
					}, void 0),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(List, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ListBody, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Collection, { children: (group) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Group, {
						items: group.items,
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(GroupLabel, { children: group.label }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 452,
							columnNumber: 10
						}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Collection, { children: (item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Item, {
							value: item,
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ForwardedItemLabel, { children: item.label }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 461,
								columnNumber: 13
							}, void 0)
						}, item.value, false, {
							fileName: _jsxFileName,
							lineNumber: 457,
							columnNumber: 12
						}, void 0) }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 455,
							columnNumber: 10
						}, void 0)]
					}, group.label, true, {
						fileName: _jsxFileName,
						lineNumber: 448,
						columnNumber: 9
					}, void 0) }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 446,
						columnNumber: 7
					}, void 0) }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 445,
						columnNumber: 6
					}, void 0) }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 444,
						columnNumber: 5
					}, void 0)
				]
			}, "popup", true, {
				fileName: _jsxFileName,
				lineNumber: 439,
				columnNumber: 4
			}, void 0)]
		} };
		WithSeparator = { args: {
			items: [...ITEMS.slice(0, 3), {
				value: "other",
				label: "Other"
			}],
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trigger, { "aria-label": "Fruit" }, "trigger", false, {
				fileName: _jsxFileName,
				lineNumber: 484,
				columnNumber: 4
			}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Popup, {
				"aria-label": "Fruit",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					style: inputWrapperStyle,
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
						"aria-label": "Search",
						placeholder: "Search"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 487,
						columnNumber: 6
					}, void 0)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 486,
					columnNumber: 5
				}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(List, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ListBody, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Collection, { children: (item, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.Fragment, { children: [item.value === "other" && index > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Separator, {}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 495,
					columnNumber: 11
				}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Item, {
					value: item,
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ForwardedItemLabel, { children: item.label }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 498,
						columnNumber: 11
					}, void 0)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 497,
					columnNumber: 10
				}, void 0)] }, item.value, true, {
					fileName: _jsxFileName,
					lineNumber: 493,
					columnNumber: 9
				}, void 0) }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 491,
					columnNumber: 7
				}, void 0) }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 490,
					columnNumber: 6
				}, void 0) }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 489,
					columnNumber: 5
				}, void 0)]
			}, "popup", true, {
				fileName: _jsxFileName,
				lineNumber: 485,
				columnNumber: 4
			}, void 0)]
		} };
		WithCustomZIndex = {
			name: "With Custom z-index",
			args: {
				defaultValue: ITEMS[0],
				items: ITEMS,
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trigger, { "aria-label": "Fruit" }, "trigger", false, {
					fileName: _jsxFileName,
					lineNumber: 532,
					columnNumber: 4
				}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Popup, {
					"aria-label": "Fruit",
					positioner: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Positioner, { style: { "--wp-ui-combobox-z-index": "9999" } }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 536,
						columnNumber: 6
					}, void 0),
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						style: inputWrapperStyle,
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
							"aria-label": "Search",
							placeholder: "Search"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 545,
							columnNumber: 6
						}, void 0)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 544,
						columnNumber: 5
					}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(List, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ListBody, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Collection, { children: (item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Item, {
						value: item,
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ForwardedItemLabel, { children: item.label }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 555,
							columnNumber: 10
						}, void 0)
					}, item.value, false, {
						fileName: _jsxFileName,
						lineNumber: 551,
						columnNumber: 9
					}, void 0) }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 549,
						columnNumber: 7
					}, void 0) }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 548,
						columnNumber: 6
					}, void 0) }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 547,
						columnNumber: 5
					}, void 0)]
				}, "popup", true, {
					fileName: _jsxFileName,
					lineNumber: 533,
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
					lineNumber: 578,
					columnNumber: 4
				}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Popup, {
					"aria-label": "Label",
					width: "sm",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						style: inputWrapperStyle,
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
							"aria-label": "Search",
							placeholder: "Search"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 581,
							columnNumber: 6
						}, void 0)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 580,
						columnNumber: 5
					}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(List, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ListBody, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Collection, { children: (item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Item, {
						value: item,
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ForwardedItemLabel, { children: item.label }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 593,
							columnNumber: 10
						}, void 0)
					}, item.value, false, {
						fileName: _jsxFileName,
						lineNumber: 589,
						columnNumber: 9
					}, void 0) }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 585,
						columnNumber: 7
					}, void 0) }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 584,
						columnNumber: 6
					}, void 0) }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 583,
						columnNumber: 5
					}, void 0)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 579,
					columnNumber: 4
				}, void 0)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 577,
				columnNumber: 3
			}, void 0)
		};
		try {
			DetachedInline.__docgenInfo = {
				"description": "For certain multiple select use cases, it may be better to design a custom\nselection state UI, rather than using a chip-based selection state UI like `SearchableChipSelect`.\nIn such cases, the selector UI can be detached and inlined into a modal dialog, for example.\n\nTo do this, omit the `Popup` and enable the `inline` prop on the `Root`.",
				"displayName": "DetachedInline",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/primitives/combobox/stories/index.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			AsyncItems.__docgenInfo = {
				"description": "Loads the item list asynchronously. `Status` shows loading, then a\nvisually hidden result count. Use `Empty` for no results.",
				"displayName": "AsyncItems",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/primitives/combobox/stories/index.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			WithCustomTriggerAndItem.__docgenInfo = {
				"description": "For custom needs, a `Combobox.Trigger` can take a custom render function as its children,\nwhile `Combobox.Item` can take arbitrary content as children.\nWrap that content in `Combobox.ItemLabel`, followed by optional `Combobox.ItemDescription` components.\n\nIn this example, some extra information is added to each list item as an ARIA description.",
				"displayName": "WithCustomTriggerAndItem",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/primitives/combobox/stories/index.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			Grouped.__docgenInfo = {
				"description": "Options can be organized into labeled groups with `Combobox.Group`\nand `Combobox.GroupLabel`.",
				"displayName": "Grouped",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/primitives/combobox/stories/index.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			WithSeparator.__docgenInfo = {
				"description": "Use `Combobox.Separator` to set choices apart from each other.",
				"displayName": "WithSeparator",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/primitives/combobox/stories/index.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			WithCustomZIndex.__docgenInfo = {
				"description": "Popovers in Gutenberg are managed with explicit z-index values, which can create\nsituations where a popover renders below another popover, when you want it to be rendered above.\n\nThe `--wp-ui-combobox-z-index` CSS variable controls the z-index of the\n`Combobox` positioner. Override it either:\n\n- **Globally**, by setting the variable on `:root` or `body` (raises every\n  `Combobox` popup in the page), or\n- **Per instance**, by passing a `Combobox.Positioner` with a `style` (or\n  `className`) to `Combobox.Popup`'s `positioner` prop.\n\nThis story demonstrates the per-instance approach.",
				"displayName": "WithCustomZIndex",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/primitives/combobox/stories/index.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			PopupWidth.__docgenInfo = {
				"description": "Use `width` on `Combobox.Popup` to constrain the popup relative to a narrow anchor.",
				"displayName": "PopupWidth",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/primitives/combobox/stories/index.story.tsx",
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
					originalSource: "{\n  args: {\n    items: ITEMS,\n    children: [<Combobox.Trigger aria-label=\"Fruit\" key=\"trigger\" />, <Combobox.Popup aria-label=\"Fruit\" key=\"popup\">\n                <div style={inputWrapperStyle}>\n                    <Combobox.Input aria-label=\"Search\" placeholder=\"Search\" />\n                </div>\n                <Combobox.Empty>No results found.</Combobox.Empty>\n                <Combobox.List>\n                    <Combobox.ListBody>\n                        <Combobox.Collection>\n                            {(item: FixtureItem) => <Combobox.Item key={item.value} value={item}>\n                                    <Combobox.ItemLabel>\n                                        {item.label}\n                                    </Combobox.ItemLabel>\n                                </Combobox.Item>}\n                        </Combobox.Collection>\n                    </Combobox.ListBody>\n                </Combobox.List>\n            </Combobox.Popup>]\n  }\n}",
					...Default.parameters?.docs?.source
				}
			}
		};
		Compact.parameters = {
			...Compact.parameters,
			docs: {
				...Compact.parameters?.docs,
				source: {
					originalSource: "{\n  args: {\n    defaultValue: ITEMS[0],\n    items: ITEMS,\n    children: [<Combobox.Trigger size=\"compact\" aria-label=\"Fruit\" key=\"trigger\" />, <Combobox.Popup aria-label=\"Fruit\" key=\"popup\">\n                <div style={inputWrapperStyle}>\n                    <Combobox.Input aria-label=\"Search\" placeholder=\"Search\" />\n                </div>\n                <Combobox.Empty>No results found.</Combobox.Empty>\n                <Combobox.List>\n                    <Combobox.ListBody>\n                        <Combobox.Collection>\n                            {(item: FixtureItem) => <Combobox.Item key={item.value} value={item}>\n                                    <Combobox.ItemLabel>\n                                        {item.label}\n                                    </Combobox.ItemLabel>\n                                </Combobox.Item>}\n                        </Combobox.Collection>\n                    </Combobox.ListBody>\n                </Combobox.List>\n            </Combobox.Popup>]\n  }\n}",
					...Compact.parameters?.docs?.source
				}
			}
		};
		DetachedInline.parameters = {
			...DetachedInline.parameters,
			docs: {
				...DetachedInline.parameters?.docs,
				source: {
					originalSource: "{\n  parameters: {\n    // The input keeps focus and arrow keys move through the options, so\n    // the scrollable list is reachable by keyboard.\n    a11y: {\n      config: {\n        rules: [{\n          id: 'scrollable-region-focusable',\n          enabled: false\n        }]\n      }\n    }\n  },\n  args: {\n    items: ITEMS,\n    multiple: true,\n    inline: true,\n    // `inline` requires `open` so the input references the visible list\n    // with `aria-controls`.\n    open: true,\n    children: [<Combobox.Input aria-label=\"Search items\" placeholder=\"Search items\" key=\"input\" />, <div style={{\n      minHeight: '200px',\n      maxHeight: '200px',\n      marginTop: 8,\n      overflow: 'auto'\n    }} key=\"div\">\n                <Combobox.Empty>No results found.</Combobox.Empty>\n                <Combobox.List>\n                    <Combobox.Collection>\n                        {(item: FixtureItem) => <Combobox.Item key={item.value} value={item}>\n                                <Combobox.ItemLabel>\n                                    {item.label}\n                                </Combobox.ItemLabel>\n                            </Combobox.Item>}\n                    </Combobox.Collection>\n                </Combobox.List>\n            </div>]\n  }\n}",
					...DetachedInline.parameters?.docs?.source
				},
				description: {
					story: "For certain multiple select use cases, it may be better to design a custom\nselection state UI, rather than using a chip-based selection state UI like `SearchableChipSelect`.\nIn such cases, the selector UI can be detached and inlined into a modal dialog, for example.\n\nTo do this, omit the `Popup` and enable the `inline` prop on the `Root`.",
					...DetachedInline.parameters?.docs?.description
				}
			}
		};
		Creatable.parameters = {
			...Creatable.parameters,
			docs: {
				...Creatable.parameters?.docs,
				source: {
					originalSource: "{\n  render: function Template(args) {\n    const [inputValue, setInputValue] = useState('');\n    const [value, setValue] = useState(ITEMS[0]);\n    const hasNoExactMatch = inputValue.length > 0 && !ITEMS.some(item => item.label === inputValue.trim());\n    const creatableItem = {\n      value: 'create',\n      label: 'Create new item' + (inputValue ? `: ${inputValue}` : '')\n    };\n    return <Combobox.Root {...args} inputValue={inputValue} onInputValueChange={setInputValue} value={value} onValueChange={(newValue, event) => {\n      const typedValue = newValue as FixtureItem;\n      if (typedValue.value === 'create') {\n        // eslint-disable-next-line no-alert\n        alert('Show dialog to create new item!');\n      } else {\n        setValue(typedValue);\n      }\n      args.onValueChange?.(newValue, event);\n    }} items={!inputValue || hasNoExactMatch ? [...ITEMS, creatableItem] : ITEMS}>\n                <Combobox.Trigger aria-label=\"Fruit\" />\n                <Combobox.Popup aria-label=\"Fruit\">\n                    <div style={inputWrapperStyle}>\n                        <Combobox.Input aria-label=\"Search\" placeholder=\"Search\" />\n                    </div>\n                    <Combobox.Empty>No results found.</Combobox.Empty>\n                    <Combobox.List>\n                        <Combobox.ListBody>\n                            <Combobox.Collection>\n                                {(item: FixtureItem) => item.value !== creatableItem.value && <Combobox.Item key={item.value} value={item}>\n                                            <Combobox.ItemLabel>\n                                                {item.label}\n                                            </Combobox.ItemLabel>\n                                        </Combobox.Item>}\n                            </Combobox.Collection>\n                        </Combobox.ListBody>\n                        <Combobox.ListFooter>\n                            <Combobox.Item variant=\"creatable\" value={creatableItem} key={creatableItem.value}>\n                                <Combobox.ItemLabel>\n                                    {creatableItem.label}\n                                </Combobox.ItemLabel>\n                            </Combobox.Item>\n                        </Combobox.ListFooter>\n                    </Combobox.List>\n                </Combobox.Popup>\n            </Combobox.Root>;\n  }\n}",
					...Creatable.parameters?.docs?.source
				}
			}
		};
		AsyncItems.parameters = {
			...AsyncItems.parameters,
			docs: {
				...AsyncItems.parameters?.docs,
				source: {
					originalSource: "{\n  render: function Template(args) {\n    const [loading, setLoading] = useState(false);\n    const [items, setItems] = useState<FixtureItem[]>([]);\n    const [value, setValue] = useState<FixtureItem | undefined>();\n    const [open, setOpen] = useState(false);\n    const timeoutRef = useRef<ReturnType<typeof setTimeout>>(null);\n    return <Combobox.Root {...args} items={items} value={value} open={open} onValueChange={(newValue, ...changeArgs) => {\n      setValue((newValue ?? undefined) as FixtureItem | undefined);\n      args.onValueChange?.(newValue, ...changeArgs);\n    }} onOpenChange={nextOpen => {\n      if (timeoutRef.current) {\n        clearTimeout(timeoutRef.current);\n      }\n      setOpen(nextOpen);\n      if (!nextOpen) {\n        return;\n      }\n      setLoading(true);\n      setItems([]);\n      timeoutRef.current = setTimeout(() => {\n        setItems(ITEMS);\n        setValue(current => current ?? ITEMS[0]);\n        setLoading(false);\n      }, 500);\n    }}>\n                <Combobox.Trigger aria-label=\"Fruit\" />\n                <Combobox.Popup aria-label=\"Fruit\">\n                    <div style={inputWrapperStyle}>\n                        <Combobox.Input aria-label=\"Search\" placeholder=\"Search\" />\n                    </div>\n                    <Combobox.Status>\n                        {loading ? <Stack direction=\"row\" gap=\"sm\" align=\"center\">\n                                <Spinner />\n                                Loading…\n                            </Stack> : <HiddenResultCount />}\n                    </Combobox.Status>\n                    <Combobox.Empty>\n                        {loading ? null : 'No results found.'}\n                    </Combobox.Empty>\n                    <Combobox.List>\n                        <Combobox.ListBody>\n                            <Combobox.Collection>\n                                {(item: FixtureItem) => <Combobox.Item key={item.value} value={item}>\n                                        <Combobox.ItemLabel>\n                                            {item.label}\n                                        </Combobox.ItemLabel>\n                                    </Combobox.Item>}\n                            </Combobox.Collection>\n                        </Combobox.ListBody>\n                    </Combobox.List>\n                </Combobox.Popup>\n            </Combobox.Root>;\n  }\n}",
					...AsyncItems.parameters?.docs?.source
				},
				description: {
					story: "Loads the item list asynchronously. `Status` shows loading, then a\nvisually hidden result count. Use `Empty` for no results.",
					...AsyncItems.parameters?.docs?.description
				}
			}
		};
		WithCustomTriggerAndItem.parameters = {
			...WithCustomTriggerAndItem.parameters,
			docs: {
				...WithCustomTriggerAndItem.parameters?.docs,
				source: {
					originalSource: "{\n  args: {\n    items: ITEMS,\n    defaultValue: ITEMS[0],\n    children: [<Combobox.Trigger aria-label=\"Fruit\" key=\"trigger\">\n                {(item: FixtureItem) => <span style={{\n        display: 'flex',\n        alignItems: 'center',\n        gap: 8\n      }}>\n                        <img src={`https://gravatar.com/avatar/?d=initials&name=${item.value}`} alt=\"\" width=\"20\" style={{\n          borderRadius: '50%'\n        }} />\n\n                        {item.label}\n                    </span>}\n            </Combobox.Trigger>, <Combobox.Popup aria-label=\"Fruit\" key=\"popup\">\n                <div style={inputWrapperStyle}>\n                    <Combobox.Input aria-label=\"Search\" placeholder=\"Search\" />\n                </div>\n                <Combobox.List>\n                    <Combobox.ListBody>\n                        <Combobox.Collection>\n                            {(item: FixtureItem) => <Combobox.Item key={item.value} value={item}>\n                                    <Combobox.ItemLabel>\n                                        {item.label}\n                                    </Combobox.ItemLabel>\n                                    <Combobox.ItemDescription>\n                                        99 in stock\n                                    </Combobox.ItemDescription>\n                                </Combobox.Item>}\n                        </Combobox.Collection>\n                    </Combobox.ListBody>\n                </Combobox.List>\n            </Combobox.Popup>]\n  }\n}",
					...WithCustomTriggerAndItem.parameters?.docs?.source
				},
				description: {
					story: "For custom needs, a `Combobox.Trigger` can take a custom render function as its children,\nwhile `Combobox.Item` can take arbitrary content as children.\nWrap that content in `Combobox.ItemLabel`, followed by optional `Combobox.ItemDescription` components.\n\nIn this example, some extra information is added to each list item as an ARIA description.",
					...WithCustomTriggerAndItem.parameters?.docs?.description
				}
			}
		};
		Grouped.parameters = {
			...Grouped.parameters,
			docs: {
				...Grouped.parameters?.docs,
				source: {
					originalSource: "{\n  args: {\n    items: GROUPED_ITEMS,\n    children: [<Combobox.Trigger aria-label=\"Fruit\" key=\"trigger\" />, <Combobox.Popup aria-label=\"Fruit\" key=\"popup\">\n                <div style={inputWrapperStyle}>\n                    <Combobox.Input aria-label=\"Search\" placeholder=\"Search\" />\n                </div>\n                <Combobox.Empty>No results found.</Combobox.Empty>\n                <Combobox.List>\n                    <Combobox.ListBody>\n                        <Combobox.Collection>\n                            {(group: FixtureGroup) => <Combobox.Group key={group.label} items={group.items}>\n                                    <Combobox.GroupLabel>\n                                        {group.label}\n                                    </Combobox.GroupLabel>\n                                    <Combobox.Collection>\n                                        {(item: FixtureItem) => <Combobox.Item key={item.value} value={item}>\n                                                <Combobox.ItemLabel>\n                                                    {item.label}\n                                                </Combobox.ItemLabel>\n                                            </Combobox.Item>}\n                                    </Combobox.Collection>\n                                </Combobox.Group>}\n                        </Combobox.Collection>\n                    </Combobox.ListBody>\n                </Combobox.List>\n            </Combobox.Popup>]\n  }\n}",
					...Grouped.parameters?.docs?.source
				},
				description: {
					story: "Options can be organized into labeled groups with `Combobox.Group`\nand `Combobox.GroupLabel`.",
					...Grouped.parameters?.docs?.description
				}
			}
		};
		WithSeparator.parameters = {
			...WithSeparator.parameters,
			docs: {
				...WithSeparator.parameters?.docs,
				source: {
					originalSource: "{\n  args: {\n    items: [...ITEMS.slice(0, 3), {\n      value: 'other',\n      label: 'Other'\n    }],\n    children: [<Combobox.Trigger aria-label=\"Fruit\" key=\"trigger\" />, <Combobox.Popup aria-label=\"Fruit\" key=\"popup\">\n                <div style={inputWrapperStyle}>\n                    <Combobox.Input aria-label=\"Search\" placeholder=\"Search\" />\n                </div>\n                <Combobox.List>\n                    <Combobox.ListBody>\n                        <Combobox.Collection>\n                            {(item: FixtureItem, index: number) => <Fragment key={item.value}>\n                                    {item.value === 'other' && index > 0 && <Combobox.Separator />}\n                                    <Combobox.Item value={item}>\n                                        <Combobox.ItemLabel>\n                                            {item.label}\n                                        </Combobox.ItemLabel>\n                                    </Combobox.Item>\n                                </Fragment>}\n                        </Combobox.Collection>\n                    </Combobox.ListBody>\n                </Combobox.List>\n            </Combobox.Popup>]\n  }\n}",
					...WithSeparator.parameters?.docs?.source
				},
				description: {
					story: "Use `Combobox.Separator` to set choices apart from each other.",
					...WithSeparator.parameters?.docs?.description
				}
			}
		};
		WithCustomZIndex.parameters = {
			...WithCustomZIndex.parameters,
			docs: {
				...WithCustomZIndex.parameters?.docs,
				source: {
					originalSource: "{\n  name: 'With Custom z-index',\n  args: {\n    defaultValue: ITEMS[0],\n    items: ITEMS,\n    children: [<Combobox.Trigger aria-label=\"Fruit\" key=\"trigger\" />, <Combobox.Popup aria-label=\"Fruit\" positioner={<Combobox.Positioner style={{\n      '--wp-ui-combobox-z-index': '9999'\n    }} />} key=\"popup\">\n                <div style={inputWrapperStyle}>\n                    <Combobox.Input aria-label=\"Search\" placeholder=\"Search\" />\n                </div>\n                <Combobox.List>\n                    <Combobox.ListBody>\n                        <Combobox.Collection>\n                            {(item: FixtureItem) => <Combobox.Item key={item.value} value={item}>\n                                    <Combobox.ItemLabel>\n                                        {item.label}\n                                    </Combobox.ItemLabel>\n                                </Combobox.Item>}\n                        </Combobox.Collection>\n                    </Combobox.ListBody>\n                </Combobox.List>\n            </Combobox.Popup>]\n  }\n}",
					...WithCustomZIndex.parameters?.docs?.source
				},
				description: {
					story: "Popovers in Gutenberg are managed with explicit z-index values, which can create\nsituations where a popover renders below another popover, when you want it to be rendered above.\n\nThe `--wp-ui-combobox-z-index` CSS variable controls the z-index of the\n`Combobox` positioner. Override it either:\n\n- **Globally**, by setting the variable on `:root` or `body` (raises every\n  `Combobox` popup in the page), or\n- **Per instance**, by passing a `Combobox.Positioner` with a `style` (or\n  `className`) to `Combobox.Popup`'s `positioner` prop.\n\nThis story demonstrates the per-instance approach.",
					...WithCustomZIndex.parameters?.docs?.description
				}
			}
		};
		PopupWidth.parameters = {
			...PopupWidth.parameters,
			docs: {
				...PopupWidth.parameters?.docs,
				source: {
					originalSource: "{\n  decorators: [narrowContainerDecorator],\n  args: {\n    items: longLabelPopupItems\n  },\n  render: args => <Combobox.Root {...args}>\n            <Combobox.Trigger aria-label=\"Label\" />\n            <Combobox.Popup aria-label=\"Label\" width=\"sm\">\n                <div style={inputWrapperStyle}>\n                    <Combobox.Input aria-label=\"Search\" placeholder=\"Search\" />\n                </div>\n                <Combobox.List>\n                    <Combobox.ListBody>\n                        <Combobox.Collection>\n                            {(item: (typeof longLabelPopupItems)[number]) => <Combobox.Item key={item.value} value={item}>\n                                    <Combobox.ItemLabel>\n                                        {item.label}\n                                    </Combobox.ItemLabel>\n                                </Combobox.Item>}\n                        </Combobox.Collection>\n                    </Combobox.ListBody>\n                </Combobox.List>\n            </Combobox.Popup>\n        </Combobox.Root>\n}",
					...PopupWidth.parameters?.docs?.source
				},
				description: {
					story: "Use `width` on `Combobox.Popup` to constrain the popup relative to a narrow anchor.",
					...PopupWidth.parameters?.docs?.description
				}
			}
		};
	})))();
}
//#endregion
export { index_story_exports as n, init_index_story as r, Default as t };
