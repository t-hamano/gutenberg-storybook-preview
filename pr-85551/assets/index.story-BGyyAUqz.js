import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { r as arrow_down_default, t as arrow_up_default } from "./arrow-up-BOIbzQVZ.js";
import { t as check_default } from "./check-BK5allCs.js";
import { t as chevron_down_default } from "./chevron-down-Xtey2DGs.js";
import { n as menu_default } from "./menu-NYLWxjb9.js";
import { n as more_default } from "./more-f2e2F5ni.js";
import { n as trash_default } from "./trash-CPVsrG3O.js";
import { n as init_dropdown_menu, t as DropdownMenu } from "./dropdown-menu-DnJlab3U.js";
import { i as init_menu_item, n as init_menu_group, r as MenuItem, t as MenuGroup } from "./menu-group-Bld7aM7S.js";
import { n as init_menu_items_choice, t as MenuItemsChoice } from "./menu-items-choice-Dq9K0MuM.js";
import { r as init_build_module } from "./library.story-CbQx3MQ6.js";
//#region ../packages/components/src/dropdown-menu/stories/index.story.tsx
var import_jsx_dev_runtime, fn, _jsxFileName, meta, Default, WithChildren, SingleSelection, MultiSelection;
function init_index_story() {
	return (init_index_story = __esmMin((() => {
		init_react();
		init_build_module();
		init_dropdown_menu();
		init_menu_item();
		init_menu_group();
		init_menu_items_choice();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		({fn} = __STORYBOOK_MODULE_TEST__);
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/dropdown-menu/stories/index.story.tsx";
		meta = {
			title: "Components/@wordpress-components/Actions/DropdownMenu",
			component: DropdownMenu,
			id: "components-dropdownmenu",
			parameters: {
				controls: { expanded: true },
				docs: { canvas: { sourceState: "shown" } },
				componentStatus: {
					status: "use-with-caution",
					whereUsed: "global",
					notes: "When building for the Gutenberg repo, use [`Menu`](?path=/docs/design-system-components-menu--docs) from `@wordpress/ui` instead. Otherwise, continue using `DropdownMenu` for now."
				}
			},
			args: { onToggle: fn() },
			argTypes: {
				icon: {
					options: [
						"menu",
						"chevronDown",
						"more"
					],
					mapping: {
						menu: menu_default,
						chevronDown: chevron_down_default,
						more: more_default
					},
					control: { type: "select" }
				},
				open: { control: false },
				defaultOpen: { control: false },
				onToggle: { control: false }
			}
		};
		Default = { args: {
			label: "Select a direction.",
			icon: menu_default,
			controls: [{
				title: "First Menu Item Label",
				icon: arrow_up_default,
				onClick: () => console.log("up!")
			}, {
				title: "Second Menu Item Label",
				icon: arrow_down_default,
				onClick: () => console.log("down!")
			}]
		} };
		WithChildren = {
			...Default,
			parameters: { docs: { source: {
				code: `<DropdownMenu label="Select a direction." icon={ more }>
  <MenuGroup>
    <MenuItem icon={ arrowUp } onClick={ onClose }>
      Move Up
    </MenuItem>
    <MenuItem icon={ arrowDown } onClick={ onClose }>
      Move Down
    </MenuItem>
  </MenuGroup>
  <MenuGroup>
    <MenuItem icon={ trash } onClick={ onClose }>
      Remove
    </MenuItem>
  </MenuGroup>
</DropdownMenu>`,
				language: "jsx",
				type: "auto"
			} } },
			args: {
				label: "Select a direction.",
				icon: more_default,
				children: ({ onClose }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MenuItem, {
						icon: arrow_up_default,
						onClick: onClose,
						children: "Standalone Item"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 100,
						columnNumber: 5
					}, void 0),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MenuGroup, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MenuItem, {
						icon: arrow_up_default,
						onClick: onClose,
						children: "Move Up"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 104,
						columnNumber: 6
					}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MenuItem, {
						icon: arrow_down_default,
						onClick: onClose,
						children: "Move Down"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 107,
						columnNumber: 6
					}, void 0)] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 103,
						columnNumber: 5
					}, void 0),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MenuGroup, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MenuItem, {
						icon: trash_default,
						onClick: onClose,
						children: "Remove"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 112,
						columnNumber: 6
					}, void 0) }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 111,
						columnNumber: 5
					}, void 0)
				] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 99,
					columnNumber: 4
				}, void 0)
			}
		};
		SingleSelection = {
			args: {
				label: "Editor options",
				icon: more_default
			},
			render: function Render(args) {
				const [mode, setMode] = (0, import_react.useState)("visual");
				return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenu, {
					...args,
					children: () => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MenuGroup, {
						label: "Editor",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MenuItemsChoice, {
							choices: [{
								value: "visual",
								label: "Visual editor"
							}, {
								value: "code",
								label: "Code editor"
							}],
							value: mode,
							onSelect: setMode
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 138,
							columnNumber: 7
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 137,
						columnNumber: 6
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 135,
					columnNumber: 4
				}, this);
			}
		};
		MultiSelection = {
			args: {
				label: "Typography options",
				icon: more_default
			},
			render: function Render(args) {
				const [selectedOptions, setSelectedOptions] = (0, import_react.useState)(["Font"]);
				const toggleOption = (option) => {
					setSelectedOptions((options) => options.includes(option) ? options.filter((item) => item !== option) : [...options, option]);
				};
				return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenu, {
					...args,
					children: () => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MenuGroup, {
						label: "Typography",
						children: [
							"Font",
							"Font size",
							"Line height"
						].map((option) => {
							const isSelected = selectedOptions.includes(option);
							return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MenuItem, {
								role: "menuitemcheckbox",
								isSelected,
								icon: isSelected ? check_default : null,
								onClick: () => toggleOption(option),
								children: option
							}, option, false, {
								fileName: _jsxFileName,
								lineNumber: 183,
								columnNumber: 10
							}, this);
						})
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 176,
						columnNumber: 6
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 174,
					columnNumber: 4
				}, this);
			}
		};
		try {
			SingleSelection.__docgenInfo = {
				"description": "Use `MenuItemsChoice` for mutually exclusive selections. It renders radio menu\nitems and a check icon for the selected choice. This example keeps the popup\nopen when the selection changes.",
				"displayName": "SingleSelection",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/dropdown-menu/stories/index.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			MultiSelection.__docgenInfo = {
				"description": "Use `MenuItem` with `role=\"menuitemcheckbox\"` for independent selections.\nSet `isSelected` and a check icon for each selected item. Keep the popup open\nby updating the selection without calling `onClose`.",
				"displayName": "MultiSelection",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/dropdown-menu/stories/index.story.tsx",
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
					originalSource: "{\n  args: {\n    label: 'Select a direction.',\n    icon: menu,\n    controls: [{\n      title: 'First Menu Item Label',\n      icon: arrowUp,\n      // eslint-disable-next-line no-console\n      onClick: () => console.log('up!')\n    }, {\n      title: 'Second Menu Item Label',\n      icon: arrowDown,\n      // eslint-disable-next-line no-console\n      onClick: () => console.log('down!')\n    }]\n  }\n}",
					...Default.parameters?.docs?.source
				}
			}
		};
		WithChildren.parameters = {
			...WithChildren.parameters,
			docs: {
				...WithChildren.parameters?.docs,
				source: {
					originalSource: "{\n  ...Default,\n  // Adding custom source because Storybook is not able to show the contents of\n  // the `children` prop correctly in the code snippet.\n  parameters: {\n    docs: {\n      source: {\n        code: `<DropdownMenu label=\"Select a direction.\" icon={ more }>\n  <MenuGroup>\n    <MenuItem icon={ arrowUp } onClick={ onClose }>\n      Move Up\n    </MenuItem>\n    <MenuItem icon={ arrowDown } onClick={ onClose }>\n      Move Down\n    </MenuItem>\n  </MenuGroup>\n  <MenuGroup>\n    <MenuItem icon={ trash } onClick={ onClose }>\n      Remove\n    </MenuItem>\n  </MenuGroup>\n</DropdownMenu>`,\n        language: 'jsx',\n        type: 'auto'\n      }\n    }\n  },\n  args: {\n    label: 'Select a direction.',\n    icon: more,\n    children: ({\n      onClose\n    }) => <>\n                <MenuItem icon={arrowUp} onClick={onClose}>\n                    Standalone Item\n                </MenuItem>\n                <MenuGroup>\n                    <MenuItem icon={arrowUp} onClick={onClose}>\n                        Move Up\n                    </MenuItem>\n                    <MenuItem icon={arrowDown} onClick={onClose}>\n                        Move Down\n                    </MenuItem>\n                </MenuGroup>\n                <MenuGroup>\n                    <MenuItem icon={trash} onClick={onClose}>\n                        Remove\n                    </MenuItem>\n                </MenuGroup>\n            </>\n  }\n}",
					...WithChildren.parameters?.docs?.source
				}
			}
		};
		SingleSelection.parameters = {
			...SingleSelection.parameters,
			docs: {
				...SingleSelection.parameters?.docs,
				source: {
					originalSource: "{\n  args: {\n    label: 'Editor options',\n    icon: more\n  },\n  render: function Render(args) {\n    const [mode, setMode] = useState('visual');\n    return <DropdownMenu {...args}>\n                {() => <MenuGroup label=\"Editor\">\n                        <MenuItemsChoice choices={[{\n          value: 'visual',\n          label: 'Visual editor'\n        }, {\n          value: 'code',\n          label: 'Code editor'\n        }]} value={mode} onSelect={setMode} />\n                    </MenuGroup>}\n            </DropdownMenu>;\n  }\n}",
					...SingleSelection.parameters?.docs?.source
				},
				description: {
					story: "Use `MenuItemsChoice` for mutually exclusive selections. It renders radio menu\nitems and a check icon for the selected choice. This example keeps the popup\nopen when the selection changes.",
					...SingleSelection.parameters?.docs?.description
				}
			}
		};
		MultiSelection.parameters = {
			...MultiSelection.parameters,
			docs: {
				...MultiSelection.parameters?.docs,
				source: {
					originalSource: "{\n  args: {\n    label: 'Typography options',\n    icon: more\n  },\n  render: function Render(args) {\n    const [selectedOptions, setSelectedOptions] = useState(['Font']);\n    const toggleOption = (option: string) => {\n      setSelectedOptions(options => options.includes(option) ? options.filter(item => item !== option) : [...options, option]);\n    };\n    return <DropdownMenu {...args}>\n                {() => <MenuGroup label=\"Typography\">\n                        {['Font', 'Font size', 'Line height'].map(option => {\n          const isSelected = selectedOptions.includes(option);\n          return <MenuItem key={option} role=\"menuitemcheckbox\" isSelected={isSelected} icon={isSelected ? check : null} onClick={() => toggleOption(option)}>\n                                        {option}\n                                    </MenuItem>;\n        })}\n                    </MenuGroup>}\n            </DropdownMenu>;\n  }\n}",
					...MultiSelection.parameters?.docs?.source
				},
				description: {
					story: "Use `MenuItem` with `role=\"menuitemcheckbox\"` for independent selections.\nSet `isSelected` and a check icon for each selected item. Keep the popup open\nby updating the selection without calling `onClose`.",
					...MultiSelection.parameters?.docs?.description
				}
			}
		};
	})))();
}
//#endregion
init_index_story();
export { Default, MultiSelection, SingleSelection, WithChildren, meta as default };
