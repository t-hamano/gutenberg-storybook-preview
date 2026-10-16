import { n as __esmMin, r as __exportAll } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { t as archive_default } from "./archive-C_Kkv0H0.js";
import { t as copy_default } from "./copy-WdV9Qmy9.js";
import { a as Popup, d as Item, g as init_item_label, h as ItemLabel, i as init_root, n as init_trigger, o as init_popup, p as init_item, r as Root, t as Trigger } from "./trigger-Lo-6kjH5.js";
import { a as RadioGroup, c as init_prefix_icon, d as Group, f as init_group, i as init_radio_item, l as GroupLabel, m as init_checkbox_item, n as init_separator, o as init_radio_group, p as CheckboxItem, r as RadioItem, s as PrefixIcon, t as Separator, u as init_group_label } from "./separator-BDDBsYf-.js";
import { n as init_link_item, t as LinkItem } from "./link-item-C1EOsnJc.js";
import { C as Empty, E as init_collection, S as init_input, T as Collection, _ as ForwardedItemLabel, a as Popup$1, d as ListBody, f as init_list_body, g as init_item$1, h as Item$1, m as init_list, n as init_root$1, o as init_popup$1, p as List, t as Root$1, v as init_item_label$1, w as init_empty, x as Input } from "./root-DYHtBtQr.js";
import { n as init_select_control, t as SelectControl } from "./select-control-GvkvTw41.js";
import { r as init_build_module } from "./library.story-CFsmdbdz.js";
//#region ../packages/ui/src/menu/stories/usage-guidelines.story.tsx
var usage_guidelines_story_exports = /* @__PURE__ */ __exportAll({
	AutocompleteForSearchableCommands: () => AutocompleteForSearchableCommands,
	CheckedOptionsWithinACommandMenu: () => CheckedOptionsWithinACommandMenu,
	ConsistentPrefixIconsWithinGroups: () => ConsistentPrefixIconsWithinGroups,
	MenuForCommands: () => MenuForCommands,
	MixedPrefixIcons: () => MixedPrefixIcons,
	SelectForValues: () => SelectForValues,
	default: () => meta
});
var import_jsx_dev_runtime, _jsxFileName, meta, ConsistentPrefixIconsWithinGroups, MixedPrefixIcons, viewItems, commandItems, SelectForValues, MenuForCommands, AutocompleteForSearchableCommands, CheckedOptionsWithinACommandMenu;
function init_usage_guidelines_story() {
	return (init_usage_guidelines_story = __esmMin((() => {
		init_react();
		init_build_module();
		init_root$1(), init_input(), init_popup$1(), init_empty(), init_list(), init_list_body(), init_collection(), init_item$1(), init_item_label$1();
		init_select_control();
		init_root(), init_trigger(), init_popup(), init_group(), init_group_label(), init_item(), init_prefix_icon(), init_item_label(), init_separator(), init_link_item(), init_checkbox_item(), init_radio_group(), init_radio_item();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/menu/stories/usage-guidelines.story.tsx";
		meta = {
			title: "Components/@wordpress-ui/Menu/Usage Guidelines",
			id: "design-system-components-menu-usage-guidelines",
			parameters: { controls: { disable: true } },
			tags: ["!dev"]
		};
		ConsistentPrefixIconsWithinGroups = { render: () => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Root, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trigger, { children: "Item options" }, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 23,
			columnNumber: 4
		}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Popup, { children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Group, { children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(GroupLabel, { children: "Actions" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 26,
					columnNumber: 6
				}, void 0),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Item, {
					prefix: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PrefixIcon, { icon: copy_default }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 27,
						columnNumber: 26
					}, void 0),
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ItemLabel, { children: "Duplicate" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 28,
						columnNumber: 7
					}, void 0)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 27,
					columnNumber: 6
				}, void 0),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Item, {
					prefix: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PrefixIcon, { icon: archive_default }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 30,
						columnNumber: 26
					}, void 0),
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ItemLabel, { children: "Archive" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 31,
						columnNumber: 7
					}, void 0)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 30,
					columnNumber: 6
				}, void 0)
			] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 25,
				columnNumber: 5
			}, void 0),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Separator, {}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 34,
				columnNumber: 5
			}, void 0),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Group, { children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(GroupLabel, { children: "Navigation" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 36,
					columnNumber: 6
				}, void 0),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LinkItem, {
					href: "#menu-usage-guidelines-destination",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ItemLabel, { children: "View details" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 38,
						columnNumber: 7
					}, void 0)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 37,
					columnNumber: 6
				}, void 0),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LinkItem, {
					href: "https://wordpress.org",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ItemLabel, { children: "WordPress.org" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 41,
						columnNumber: 7
					}, void 0)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 40,
					columnNumber: 6
				}, void 0)
			] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 35,
				columnNumber: 5
			}, void 0)
		] }, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 24,
			columnNumber: 4
		}, void 0)] }, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 22,
			columnNumber: 3
		}, void 0) };
		MixedPrefixIcons = { render: () => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Root, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trigger, { children: "Mixed item options" }, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 52,
			columnNumber: 4
		}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Popup, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Group, { children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(GroupLabel, { children: "Actions" }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 55,
				columnNumber: 6
			}, void 0),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Item, {
				prefix: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PrefixIcon, { icon: copy_default }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 56,
					columnNumber: 26
				}, void 0),
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ItemLabel, { children: "Duplicate" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 57,
					columnNumber: 7
				}, void 0)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 56,
				columnNumber: 6
			}, void 0),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Item, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ItemLabel, { children: "Rename…" }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 60,
				columnNumber: 7
			}, void 0) }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 59,
				columnNumber: 6
			}, void 0),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Item, {
				prefix: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PrefixIcon, { icon: archive_default }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 62,
					columnNumber: 26
				}, void 0),
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ItemLabel, { children: "Archive" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 63,
					columnNumber: 7
				}, void 0)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 62,
				columnNumber: 6
			}, void 0)
		] }, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 54,
			columnNumber: 5
		}, void 0) }, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 53,
			columnNumber: 4
		}, void 0)] }, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 51,
			columnNumber: 3
		}, void 0) };
		viewItems = [{
			value: "list",
			label: "List"
		}, {
			value: "grid",
			label: "Grid"
		}];
		commandItems = [
			{
				id: "duplicate",
				value: "Duplicate"
			},
			{
				id: "download",
				value: "Download"
			},
			{
				id: "view-details",
				value: "View details"
			}
		];
		SelectForValues = { render: () => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectControl, {
			label: "View",
			items: viewItems,
			defaultValue: viewItems[0]
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 84,
			columnNumber: 3
		}, void 0) };
		MenuForCommands = { render: () => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Root, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trigger, { children: "Actions" }, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 95,
			columnNumber: 4
		}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Popup, { children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Item, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ItemLabel, { children: "Duplicate" }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 98,
				columnNumber: 6
			}, void 0) }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 97,
				columnNumber: 5
			}, void 0),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Item, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ItemLabel, { children: "Download" }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 101,
				columnNumber: 6
			}, void 0) }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 100,
				columnNumber: 5
			}, void 0),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LinkItem, {
				href: "#menu-usage-guidelines-destination",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ItemLabel, { children: "View details" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 104,
					columnNumber: 6
				}, void 0)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 103,
				columnNumber: 5
			}, void 0)
		] }, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 96,
			columnNumber: 4
		}, void 0)] }, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 94,
			columnNumber: 3
		}, void 0) };
		AutocompleteForSearchableCommands = { render: () => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Root$1, {
			items: commandItems,
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
				"aria-label": "Search commands",
				placeholder: "Search commands"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 114,
				columnNumber: 4
			}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Popup$1, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Empty, { children: "No commands found." }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 119,
				columnNumber: 5
			}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(List, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ListBody, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Collection, { children: (command) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Item$1, {
				value: command,
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ForwardedItemLabel, { children: command.value }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 130,
					columnNumber: 10
				}, void 0)
			}, command.id, false, {
				fileName: _jsxFileName,
				lineNumber: 126,
				columnNumber: 9
			}, void 0) }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 122,
				columnNumber: 7
			}, void 0) }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 121,
				columnNumber: 6
			}, void 0) }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 120,
				columnNumber: 5
			}, void 0)] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 118,
				columnNumber: 4
			}, void 0)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 113,
			columnNumber: 3
		}, void 0) };
		CheckedOptionsWithinACommandMenu = { render: function Render() {
			const [showAuthor, setShowAuthor] = (0, import_react.useState)(true);
			const [showDate, setShowDate] = (0, import_react.useState)(false);
			const [density, setDensity] = (0, import_react.useState)("comfortable");
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Root, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trigger, { children: "View options" }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 151,
				columnNumber: 5
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Popup, { children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Item, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ItemLabel, { children: "Reset view" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 154,
					columnNumber: 7
				}, this) }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 153,
					columnNumber: 6
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Separator, {}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 156,
					columnNumber: 6
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Group, { children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(GroupLabel, { children: "Visible columns" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 158,
						columnNumber: 7
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CheckboxItem, {
						checked: showAuthor,
						onCheckedChange: setShowAuthor,
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ItemLabel, { children: "Author" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 163,
							columnNumber: 8
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 159,
						columnNumber: 7
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CheckboxItem, {
						checked: showDate,
						onCheckedChange: setShowDate,
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ItemLabel, { children: "Date" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 169,
							columnNumber: 8
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 165,
						columnNumber: 7
					}, this)
				] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 157,
					columnNumber: 6
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Separator, {}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 172,
					columnNumber: 6
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RadioGroup, {
					value: density,
					onValueChange: setDensity,
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(GroupLabel, { children: "Density" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 177,
							columnNumber: 7
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RadioItem, {
							value: "compact",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ItemLabel, { children: "Compact" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 179,
								columnNumber: 8
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 178,
							columnNumber: 7
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RadioItem, {
							value: "comfortable",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ItemLabel, { children: "Comfortable" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 182,
								columnNumber: 8
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 181,
							columnNumber: 7
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 173,
					columnNumber: 6
				}, this)
			] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 152,
				columnNumber: 5
			}, this)] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 150,
				columnNumber: 4
			}, this);
		} };
		ConsistentPrefixIconsWithinGroups.parameters = {
			...ConsistentPrefixIconsWithinGroups.parameters,
			docs: {
				...ConsistentPrefixIconsWithinGroups.parameters?.docs,
				source: {
					originalSource: "{\n  render: () => <Menu.Root>\n            <Menu.Trigger>Item options</Menu.Trigger>\n            <Menu.Popup>\n                <Menu.Group>\n                    <Menu.GroupLabel>Actions</Menu.GroupLabel>\n                    <Menu.Item prefix={<Menu.PrefixIcon icon={copy} />}>\n                        <Menu.ItemLabel>Duplicate</Menu.ItemLabel>\n                    </Menu.Item>\n                    <Menu.Item prefix={<Menu.PrefixIcon icon={archive} />}>\n                        <Menu.ItemLabel>Archive</Menu.ItemLabel>\n                    </Menu.Item>\n                </Menu.Group>\n                <Menu.Separator />\n                <Menu.Group>\n                    <Menu.GroupLabel>Navigation</Menu.GroupLabel>\n                    <Menu.LinkItem href=\"#menu-usage-guidelines-destination\">\n                        <Menu.ItemLabel>View details</Menu.ItemLabel>\n                    </Menu.LinkItem>\n                    <Menu.LinkItem href=\"https://wordpress.org\">\n                        <Menu.ItemLabel>WordPress.org</Menu.ItemLabel>\n                    </Menu.LinkItem>\n                </Menu.Group>\n            </Menu.Popup>\n        </Menu.Root>\n}",
					...ConsistentPrefixIconsWithinGroups.parameters?.docs?.source
				}
			}
		};
		MixedPrefixIcons.parameters = {
			...MixedPrefixIcons.parameters,
			docs: {
				...MixedPrefixIcons.parameters?.docs,
				source: {
					originalSource: "{\n  render: () => <Menu.Root>\n            <Menu.Trigger>Mixed item options</Menu.Trigger>\n            <Menu.Popup>\n                <Menu.Group>\n                    <Menu.GroupLabel>Actions</Menu.GroupLabel>\n                    <Menu.Item prefix={<Menu.PrefixIcon icon={copy} />}>\n                        <Menu.ItemLabel>Duplicate</Menu.ItemLabel>\n                    </Menu.Item>\n                    <Menu.Item>\n                        <Menu.ItemLabel>Rename…</Menu.ItemLabel>\n                    </Menu.Item>\n                    <Menu.Item prefix={<Menu.PrefixIcon icon={archive} />}>\n                        <Menu.ItemLabel>Archive</Menu.ItemLabel>\n                    </Menu.Item>\n                </Menu.Group>\n            </Menu.Popup>\n        </Menu.Root>\n}",
					...MixedPrefixIcons.parameters?.docs?.source
				}
			}
		};
		SelectForValues.parameters = {
			...SelectForValues.parameters,
			docs: {
				...SelectForValues.parameters?.docs,
				source: {
					originalSource: "{\n  render: () => <SelectControl label=\"View\" items={viewItems} defaultValue={viewItems[0]} />\n}",
					...SelectForValues.parameters?.docs?.source
				}
			}
		};
		MenuForCommands.parameters = {
			...MenuForCommands.parameters,
			docs: {
				...MenuForCommands.parameters?.docs,
				source: {
					originalSource: "{\n  render: () => <Menu.Root>\n            <Menu.Trigger>Actions</Menu.Trigger>\n            <Menu.Popup>\n                <Menu.Item>\n                    <Menu.ItemLabel>Duplicate</Menu.ItemLabel>\n                </Menu.Item>\n                <Menu.Item>\n                    <Menu.ItemLabel>Download</Menu.ItemLabel>\n                </Menu.Item>\n                <Menu.LinkItem href=\"#menu-usage-guidelines-destination\">\n                    <Menu.ItemLabel>View details</Menu.ItemLabel>\n                </Menu.LinkItem>\n            </Menu.Popup>\n        </Menu.Root>\n}",
					...MenuForCommands.parameters?.docs?.source
				}
			}
		};
		AutocompleteForSearchableCommands.parameters = {
			...AutocompleteForSearchableCommands.parameters,
			docs: {
				...AutocompleteForSearchableCommands.parameters?.docs,
				source: {
					originalSource: "{\n  render: () => <Autocomplete.Root items={commandItems}>\n            <Autocomplete.Input aria-label=\"Search commands\" placeholder=\"Search commands\" />\n            <Autocomplete.Popup>\n                <Autocomplete.Empty>No commands found.</Autocomplete.Empty>\n                <Autocomplete.List>\n                    <Autocomplete.ListBody>\n                        <Autocomplete.Collection>\n                            {(command: (typeof commandItems)[number]) => <Autocomplete.Item key={command.id} value={command}>\n                                    <Autocomplete.ItemLabel>\n                                        {command.value}\n                                    </Autocomplete.ItemLabel>\n                                </Autocomplete.Item>}\n                        </Autocomplete.Collection>\n                    </Autocomplete.ListBody>\n                </Autocomplete.List>\n            </Autocomplete.Popup>\n        </Autocomplete.Root>\n}",
					...AutocompleteForSearchableCommands.parameters?.docs?.source
				}
			}
		};
		CheckedOptionsWithinACommandMenu.parameters = {
			...CheckedOptionsWithinACommandMenu.parameters,
			docs: {
				...CheckedOptionsWithinACommandMenu.parameters?.docs,
				source: {
					originalSource: "{\n  render: function Render() {\n    const [showAuthor, setShowAuthor] = useState(true);\n    const [showDate, setShowDate] = useState(false);\n    const [density, setDensity] = useState('comfortable');\n    return <Menu.Root>\n                <Menu.Trigger>View options</Menu.Trigger>\n                <Menu.Popup>\n                    <Menu.Item>\n                        <Menu.ItemLabel>Reset view</Menu.ItemLabel>\n                    </Menu.Item>\n                    <Menu.Separator />\n                    <Menu.Group>\n                        <Menu.GroupLabel>Visible columns</Menu.GroupLabel>\n                        <Menu.CheckboxItem checked={showAuthor} onCheckedChange={setShowAuthor}>\n                            <Menu.ItemLabel>Author</Menu.ItemLabel>\n                        </Menu.CheckboxItem>\n                        <Menu.CheckboxItem checked={showDate} onCheckedChange={setShowDate}>\n                            <Menu.ItemLabel>Date</Menu.ItemLabel>\n                        </Menu.CheckboxItem>\n                    </Menu.Group>\n                    <Menu.Separator />\n                    <Menu.RadioGroup value={density} onValueChange={setDensity}>\n                        <Menu.GroupLabel>Density</Menu.GroupLabel>\n                        <Menu.RadioItem value=\"compact\">\n                            <Menu.ItemLabel>Compact</Menu.ItemLabel>\n                        </Menu.RadioItem>\n                        <Menu.RadioItem value=\"comfortable\">\n                            <Menu.ItemLabel>Comfortable</Menu.ItemLabel>\n                        </Menu.RadioItem>\n                    </Menu.RadioGroup>\n                </Menu.Popup>\n            </Menu.Root>;\n  }\n}",
					...CheckedOptionsWithinACommandMenu.parameters?.docs?.source
				}
			}
		};
	})))();
}
//#endregion
export { MixedPrefixIcons as a, usage_guidelines_story_exports as c, MenuForCommands as i, CheckedOptionsWithinACommandMenu as n, SelectForValues as o, ConsistentPrefixIconsWithinGroups as r, init_usage_guidelines_story as s, AutocompleteForSearchableCommands as t };
