import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { r as arrow_down_default, t as arrow_up_default } from "./arrow-up-DmV8po7a.js";
import { t as chevron_down_default } from "./chevron-down-tfDAaIiw.js";
import { n as menu_default } from "./menu-lO1-TVx9.js";
import { n as more_default } from "./more-U4HqW_9x.js";
import { n as trash_default } from "./trash-gQXYBeE5.js";
import { n as init_dropdown_menu, t as DropdownMenu } from "./dropdown-menu-JHzNRA6b.js";
import { i as init_menu_item, n as init_menu_group, r as MenuItem, t as MenuGroup } from "./menu-group-Dt-jzg_l.js";
import { r as init_build_module } from "./library.story-CFsmdbdz.js";
//#region ../packages/components/src/dropdown-menu/stories/index.story.tsx
var import_jsx_dev_runtime, fn, _jsxFileName, meta, Default, WithChildren;
function init_index_story() {
	return (init_index_story = __esmMin((() => {
		init_build_module();
		init_dropdown_menu();
		init_menu_item();
		init_menu_group();
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
						lineNumber: 97,
						columnNumber: 5
					}, void 0),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MenuGroup, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MenuItem, {
						icon: arrow_up_default,
						onClick: onClose,
						children: "Move Up"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 101,
						columnNumber: 6
					}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MenuItem, {
						icon: arrow_down_default,
						onClick: onClose,
						children: "Move Down"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 104,
						columnNumber: 6
					}, void 0)] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 100,
						columnNumber: 5
					}, void 0),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MenuGroup, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MenuItem, {
						icon: trash_default,
						onClick: onClose,
						children: "Remove"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 109,
						columnNumber: 6
					}, void 0) }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 108,
						columnNumber: 5
					}, void 0)
				] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 96,
					columnNumber: 4
				}, void 0)
			}
		};
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
	})))();
}
//#endregion
init_index_story();
export { Default, WithChildren, meta as default };
