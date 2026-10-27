import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as init_button, t as Button } from "./button-BO8bp-IJ.js";
import { n as init_dropdown, t as Dropdown } from "./dropdown-BtPElsmm.js";
import { n as init_dropdown_content_wrapper, t as DropdownContentWrapper } from "./dropdown-content-wrapper-CSzrIpIo.js";
import { i as init_menu_item, n as init_menu_group, r as MenuItem, t as MenuGroup } from "./menu-group-Bld7aM7S.js";
//#region ../packages/components/src/dropdown/stories/index.story.tsx
var import_jsx_dev_runtime, fn, _jsxFileName, meta, Default, WithMorePadding, WithNoPadding, WithMenuItems;
function init_index_story() {
	return (init_index_story = __esmMin((() => {
		init_dropdown();
		init_button();
		init_menu_group();
		init_menu_item();
		init_dropdown_content_wrapper();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		({fn} = __STORYBOOK_MODULE_TEST__);
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/dropdown/stories/index.story.tsx";
		meta = {
			tags: ["manifest"],
			title: "Components/@wordpress-components/Overlays/Dropdown",
			id: "components-dropdown",
			component: Dropdown,
			subcomponents: { DropdownContentWrapper },
			args: {
				onClose: fn(),
				onToggle: fn()
			},
			argTypes: {
				focusOnMount: {
					options: [
						"firstElement",
						true,
						false
					],
					control: { type: "radio" }
				},
				position: { control: false },
				renderContent: { control: false },
				renderToggle: { control: false },
				open: { control: false },
				defaultOpen: { control: false },
				onToggle: { control: false },
				onClose: { control: false }
			},
			parameters: {
				controls: { expanded: true },
				componentStatus: {
					status: "recommended",
					whereUsed: "global"
				}
			}
		};
		Default = { args: {
			renderToggle: ({ isOpen, onToggle }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
				__next40pxDefaultSize: true,
				onClick: onToggle,
				"aria-expanded": isOpen,
				variant: "primary",
				children: "Open dropdown"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 49,
				columnNumber: 4
			}, void 0),
			renderContent: () => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: "This is the dropdown content." }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 58,
				columnNumber: 24
			}, void 0)
		} };
		WithMorePadding = {
			...Default,
			args: {
				...Default.args,
				renderContent: () => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownContentWrapper, {
					paddingSize: "medium",
					children: [
						"Content wrapped with ",
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("code", { children: "paddingSize=\"medium\"" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 73,
							columnNumber: 26
						}, void 0),
						"."
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 71,
					columnNumber: 4
				}, void 0)
			}
		};
		WithNoPadding = {
			...Default,
			args: {
				...Default.args,
				renderContent: () => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownContentWrapper, {
					paddingSize: "none",
					children: [
						"Content wrapped with ",
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("code", { children: "paddingSize=\"none\"" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 92,
							columnNumber: 26
						}, void 0),
						"."
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 90,
					columnNumber: 4
				}, void 0)
			}
		};
		WithMenuItems = {
			...Default,
			args: {
				...Default.args,
				renderContent: () => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MenuItem, { children: "Standalone Item" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 105,
						columnNumber: 5
					}, void 0),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MenuGroup, {
						label: "Group 1",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MenuItem, { children: "Item 1" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 107,
							columnNumber: 6
						}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MenuItem, { children: "Item 2" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 108,
							columnNumber: 6
						}, void 0)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 106,
						columnNumber: 5
					}, void 0),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MenuGroup, {
						label: "Group 2",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MenuItem, { children: "Item 1" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 111,
							columnNumber: 6
						}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MenuItem, { children: "Item 2" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 112,
							columnNumber: 6
						}, void 0)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 110,
						columnNumber: 5
					}, void 0)
				] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 104,
					columnNumber: 4
				}, void 0)
			}
		};
		try {
			WithMorePadding.__docgenInfo = {
				"description": "To apply more padding to the dropdown content, use the provided `<DropdownContentWrapper>`\nconvenience wrapper. A `paddingSize` of `\"medium\"` is suitable for relatively larger dropdowns (default is `\"small\"`).",
				"displayName": "WithMorePadding",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/dropdown/stories/index.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			WithNoPadding.__docgenInfo = {
				"description": "The `<DropdownContentWrapper>` convenience wrapper can also be used to remove padding entirely,\nwith a `paddingSize` of `\"none\"`. This can also serve as a clean foundation to add arbitrary\npaddings, for example when child components already have padding on their own.",
				"displayName": "WithNoPadding",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/dropdown/stories/index.story.tsx",
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
					originalSource: "{\n  args: {\n    renderToggle: ({\n      isOpen,\n      onToggle\n    }) => <Button __next40pxDefaultSize onClick={onToggle} aria-expanded={isOpen} variant=\"primary\">\n                Open dropdown\n            </Button>,\n    renderContent: () => <div>This is the dropdown content.</div>\n  }\n}",
					...Default.parameters?.docs?.source
				}
			}
		};
		WithMorePadding.parameters = {
			...WithMorePadding.parameters,
			docs: {
				...WithMorePadding.parameters?.docs,
				source: {
					originalSource: "{\n  ...Default,\n  args: {\n    ...Default.args,\n    renderContent: () => <DropdownContentWrapper paddingSize=\"medium\">\n                {/* eslint-disable react/no-unescaped-entities */}\n                Content wrapped with <code>paddingSize=\"medium\"</code>.\n                {/* eslint-enable react/no-unescaped-entities */}\n            </DropdownContentWrapper>\n  }\n}",
					...WithMorePadding.parameters?.docs?.source
				},
				description: {
					story: "To apply more padding to the dropdown content, use the provided `<DropdownContentWrapper>`\nconvenience wrapper. A `paddingSize` of `\"medium\"` is suitable for relatively larger dropdowns (default is `\"small\"`).",
					...WithMorePadding.parameters?.docs?.description
				}
			}
		};
		WithNoPadding.parameters = {
			...WithNoPadding.parameters,
			docs: {
				...WithNoPadding.parameters?.docs,
				source: {
					originalSource: "{\n  ...Default,\n  args: {\n    ...Default.args,\n    renderContent: () => <DropdownContentWrapper paddingSize=\"none\">\n                {/* eslint-disable react/no-unescaped-entities */}\n                Content wrapped with <code>paddingSize=\"none\"</code>.\n                {/* eslint-enable react/no-unescaped-entities */}\n            </DropdownContentWrapper>\n  }\n}",
					...WithNoPadding.parameters?.docs?.source
				},
				description: {
					story: "The `<DropdownContentWrapper>` convenience wrapper can also be used to remove padding entirely,\nwith a `paddingSize` of `\"none\"`. This can also serve as a clean foundation to add arbitrary\npaddings, for example when child components already have padding on their own.",
					...WithNoPadding.parameters?.docs?.description
				}
			}
		};
		WithMenuItems.parameters = {
			...WithMenuItems.parameters,
			docs: {
				...WithMenuItems.parameters?.docs,
				source: {
					originalSource: "{\n  ...Default,\n  args: {\n    ...Default.args,\n    renderContent: () => <>\n                <MenuItem>Standalone Item</MenuItem>\n                <MenuGroup label=\"Group 1\">\n                    <MenuItem>Item 1</MenuItem>\n                    <MenuItem>Item 2</MenuItem>\n                </MenuGroup>\n                <MenuGroup label=\"Group 2\">\n                    <MenuItem>Item 1</MenuItem>\n                    <MenuItem>Item 2</MenuItem>\n                </MenuGroup>\n            </>\n  }\n}",
					...WithMenuItems.parameters?.docs?.source
				}
			}
		};
	})))();
}
//#endregion
init_index_story();
export { Default, WithMenuItems, WithMorePadding, WithNoPadding, meta as default };
