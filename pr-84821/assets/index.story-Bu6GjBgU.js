import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { t as check_default } from "./check-Cpe2xAFk.js";
import { n as link_default } from "./link-B6xih8Jw.js";
import { n as more_default } from "./more-U4HqW_9x.js";
import { n as init_shortcut, t as Shortcut } from "./shortcut-D6ctWgOA.js";
import { n as init_menu, t as NavigableMenu } from "./menu-DympXu0Z.js";
import { i as init_menu_item, n as init_menu_group, r as MenuItem, t as MenuGroup } from "./menu-group-Dt-jzg_l.js";
import { r as init_build_module } from "./library.story-CFsmdbdz.js";
//#region ../packages/components/src/menu-item/stories/index.story.tsx
var import_jsx_dev_runtime, _jsxFileName, meta, Template, Default, IsSelected, WithIcon, WithInfo, WithSuffix;
function init_index_story() {
	return (init_index_story = __esmMin((() => {
		init_build_module();
		init_menu_group();
		init_menu_item();
		init_shortcut();
		init_menu();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/menu-item/stories/index.story.tsx";
		meta = {
			tags: ["manifest"],
			component: MenuItem,
			title: "Components/@wordpress-components/Actions/MenuItem",
			id: "components-menuitem",
			argTypes: {
				children: { control: false },
				icon: {
					control: { type: "select" },
					options: [
						"check",
						"link",
						"more"
					],
					mapping: {
						check: check_default,
						link: link_default,
						more: more_default
					}
				}
			},
			parameters: {
				controls: { expanded: true },
				docs: { canvas: { sourceState: "shown" } },
				componentStatus: {
					status: "recommended",
					whereUsed: "global",
					notes: "Subcomponent of `DropdownMenu`."
				}
			}
		};
		Template = (props) => {
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavigableMenu, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MenuGroup, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MenuItem, {
				...props,
				children: "Menu Item 1"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 43,
				columnNumber: 5
			}, void 0) }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 42,
				columnNumber: 4
			}, void 0) }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 41,
				columnNumber: 3
			}, void 0);
		};
		Default = Template.bind({});
		IsSelected = Template.bind({});
		IsSelected.args = {
			...Default.args,
			isSelected: true,
			role: "menuitemcheckbox"
		};
		WithIcon = Template.bind({});
		WithIcon.args = {
			...Default.args,
			icon: link_default,
			iconPosition: "left"
		};
		WithInfo = Template.bind({});
		WithInfo.args = {
			...Default.args,
			info: "Menu Item description"
		};
		WithSuffix = Template.bind({});
		WithSuffix.args = {
			...Default.args,
			suffix: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Shortcut, { shortcut: "Ctrl+M" }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 78,
				columnNumber: 10
			}, void 0)
		};
		try {
			IsSelected.__docgenInfo = {
				"description": "When the `role` prop is either `\"menuitemcheckbox\"` or `\"menuitemradio\"`, the\n`isSelected` prop should be used so screen readers can tell which item is currently selected.",
				"displayName": "IsSelected",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/menu-item/stories/index.story.tsx",
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
					originalSource: "props => {\n  return <NavigableMenu>\n            <MenuGroup>\n                <MenuItem {...props}>Menu Item 1</MenuItem>\n            </MenuGroup>\n        </NavigableMenu>;\n}",
					...Default.parameters?.docs?.source
				}
			}
		};
		IsSelected.parameters = {
			...IsSelected.parameters,
			docs: {
				...IsSelected.parameters?.docs,
				source: {
					originalSource: "props => {\n  return <NavigableMenu>\n            <MenuGroup>\n                <MenuItem {...props}>Menu Item 1</MenuItem>\n            </MenuGroup>\n        </NavigableMenu>;\n}",
					...IsSelected.parameters?.docs?.source
				},
				description: {
					story: "When the `role` prop is either `\"menuitemcheckbox\"` or `\"menuitemradio\"`, the\n`isSelected` prop should be used so screen readers can tell which item is currently selected.",
					...IsSelected.parameters?.docs?.description
				}
			}
		};
		WithIcon.parameters = {
			...WithIcon.parameters,
			docs: {
				...WithIcon.parameters?.docs,
				source: {
					originalSource: "props => {\n  return <NavigableMenu>\n            <MenuGroup>\n                <MenuItem {...props}>Menu Item 1</MenuItem>\n            </MenuGroup>\n        </NavigableMenu>;\n}",
					...WithIcon.parameters?.docs?.source
				}
			}
		};
		WithInfo.parameters = {
			...WithInfo.parameters,
			docs: {
				...WithInfo.parameters?.docs,
				source: {
					originalSource: "props => {\n  return <NavigableMenu>\n            <MenuGroup>\n                <MenuItem {...props}>Menu Item 1</MenuItem>\n            </MenuGroup>\n        </NavigableMenu>;\n}",
					...WithInfo.parameters?.docs?.source
				}
			}
		};
		WithSuffix.parameters = {
			...WithSuffix.parameters,
			docs: {
				...WithSuffix.parameters?.docs,
				source: {
					originalSource: "props => {\n  return <NavigableMenu>\n            <MenuGroup>\n                <MenuItem {...props}>Menu Item 1</MenuItem>\n            </MenuGroup>\n        </NavigableMenu>;\n}",
					...WithSuffix.parameters?.docs?.source
				}
			}
		};
	})))();
}
//#endregion
init_index_story();
export { Default, IsSelected, WithIcon, WithInfo, WithSuffix, meta as default };
