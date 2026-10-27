import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as init_menu, t as NavigableMenu } from "./menu-DHxrFlfL.js";
import { i as init_menu_item, n as init_menu_group, r as MenuItem, t as MenuGroup } from "./menu-group-Bld7aM7S.js";
import { n as init_menu_items_choice, t as MenuItemsChoice } from "./menu-items-choice-Dq9K0MuM.js";
//#region ../packages/components/src/menu-group/stories/index.story.tsx
var import_jsx_dev_runtime, _jsxFileName, meta, Template, Default, MultiGroupsTemplate, WithSeparator;
function init_index_story() {
	return (init_index_story = __esmMin((() => {
		init_react();
		init_menu_group();
		init_menu_item();
		init_menu_items_choice();
		init_menu();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/menu-group/stories/index.story.tsx";
		meta = {
			tags: ["manifest"],
			title: "Components/@wordpress-components/Actions/MenuGroup",
			component: MenuGroup,
			id: "components-menugroup",
			argTypes: { children: { control: false } },
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
		Template = (args) => {
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavigableMenu, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MenuGroup, {
				...args,
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MenuItem, { children: "Menu Item 1" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 32,
					columnNumber: 5
				}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MenuItem, { children: "Menu Item 2" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 33,
					columnNumber: 5
				}, void 0)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 31,
				columnNumber: 4
			}, void 0) }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 30,
				columnNumber: 3
			}, void 0);
		};
		Default = Template.bind({});
		MultiGroupsTemplate = (args) => {
			const [mode, setMode] = (0, import_react.useState)("visual");
			const choices = [{
				value: "visual",
				label: "Visual editor"
			}, {
				value: "text",
				label: "Code editor"
			}];
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavigableMenu, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MenuGroup, {
				label: "View",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MenuItem, { children: "Top Toolbar" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 57,
						columnNumber: 5
					}, void 0),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MenuItem, { children: "Spotlight Mode" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 58,
						columnNumber: 5
					}, void 0),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MenuItem, { children: "Distraction Free" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 59,
						columnNumber: 5
					}, void 0)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 56,
				columnNumber: 4
			}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MenuGroup, {
				...args,
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MenuItemsChoice, {
					choices,
					value: mode,
					onSelect: (newMode) => setMode(newMode),
					onHover: () => {}
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 62,
					columnNumber: 5
				}, void 0)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 61,
				columnNumber: 4
			}, void 0)] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 55,
				columnNumber: 3
			}, void 0);
		};
		WithSeparator = MultiGroupsTemplate.bind({});
		WithSeparator.args = {
			...Default.args,
			hideSeparator: false,
			label: "Editor"
		};
		try {
			WithSeparator.__docgenInfo = {
				"description": "When other menu items exist above or below a MenuGroup, the group\nshould have a divider line between it and the adjacent item.",
				"displayName": "WithSeparator",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/menu-group/stories/index.story.tsx",
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
					originalSource: "args => {\n  return <NavigableMenu>\n            <MenuGroup {...args}>\n                <MenuItem>Menu Item 1</MenuItem>\n                <MenuItem>Menu Item 2</MenuItem>\n            </MenuGroup>\n        </NavigableMenu>;\n}",
					...Default.parameters?.docs?.source
				}
			}
		};
		WithSeparator.parameters = {
			...WithSeparator.parameters,
			docs: {
				...WithSeparator.parameters?.docs,
				source: {
					originalSource: "args => {\n  const [mode, setMode] = useState('visual');\n  const choices = [{\n    value: 'visual',\n    label: 'Visual editor'\n  }, {\n    value: 'text',\n    label: 'Code editor'\n  }];\n  return <NavigableMenu>\n            <MenuGroup label=\"View\">\n                <MenuItem>Top Toolbar</MenuItem>\n                <MenuItem>Spotlight Mode</MenuItem>\n                <MenuItem>Distraction Free</MenuItem>\n            </MenuGroup>\n            <MenuGroup {...args}>\n                <MenuItemsChoice choices={choices} value={mode} onSelect={(newMode: string) => setMode(newMode)} onHover={() => {}} />\n            </MenuGroup>\n        </NavigableMenu>;\n}",
					...WithSeparator.parameters?.docs?.source
				},
				description: {
					story: "When other menu items exist above or below a MenuGroup, the group\nshould have a divider line between it and the adjacent item.",
					...WithSeparator.parameters?.docs?.description
				}
			}
		};
	})))();
}
//#endregion
init_index_story();
export { Default, WithSeparator, meta as default };
