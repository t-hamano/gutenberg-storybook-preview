import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as useMergeRefs, t as init_use_merge_refs } from "./use-merge-refs-BAtuPB1L.js";
import { n as displayShortcut, r as init_build_module, s as shortcutAriaLabel, t as ariaKeyShortcut } from "./build-module-LJKyBiy6.js";
import { a as init_clsx, i as clsx } from "./iframe-Dbjzp1_m.js";
import { i as init_MenuSubmenuRoot, n as init_MenuSubmenuTrigger, r as MenuSubmenuRoot, t as MenuSubmenuTrigger } from "./MenuSubmenuTrigger-Db9smYMd.js";
import { a as align_center_default, r as align_left_default, t as align_right_default } from "./align-right-DEu9EgGN.js";
import { t as archive_default } from "./archive-C_Kkv0H0.js";
import { t as chevron_right_small_default } from "./chevron-right-small-CN88zQQm.js";
import { t as copy_default } from "./copy-WdV9Qmy9.js";
import { t as grid_default } from "./grid-Ctmneeo1.js";
import { i as list_default, n as share_default } from "./share-CjStsgrW.js";
import { n as move_to_default } from "./move-to-DhbWSQdQ.js";
import { n as resets_module_default, t as init_resets_module } from "./resets.module-CJil9Bz6.js";
import { n as init_global_css_defense_module, t as global_css_defense_module_default } from "./global-css-defense.module-BTDDc07p.js";
import { n as init_icon, t as Icon } from "./icon-C8ogYiCq.js";
import { C as useMenuContext, E as style_module_default, S as init_context, T as init_style_module, _ as ItemDescription, a as Popup, b as MenuGroupContext, c as init_positioner, d as Item, f as ItemContent, g as init_item_label, h as ItemLabel, i as init_root, l as Portal, m as useItemContent, n as init_trigger, o as init_popup, p as init_item, r as Root, s as Positioner, t as Trigger, u as init_portal, v as init_item_description, x as MenuItemContentContext, y as MenuContext } from "./trigger-Lo-6kjH5.js";
import { a as RadioGroup, c as init_prefix_icon, d as Group, f as init_group, i as init_radio_item, l as GroupLabel, m as init_checkbox_item, n as init_separator, o as init_radio_group, p as CheckboxItem, r as RadioItem, s as PrefixIcon, t as Separator, u as init_group_label } from "./separator-BDDBsYf-.js";
import { n as init_link_item, t as LinkItem$1 } from "./link-item-C1EOsnJc.js";
import { r as init_build_module$1 } from "./library.story-CFsmdbdz.js";
//#region ../packages/ui/src/menu/submenu-root.tsx
/**
* Groups all parts of a nested submenu.
*/
function SubmenuRoot(props) {
	const submenuTriggerRef = (0, import_react.useRef)(null);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)(MenuContext.Provider, {
		value: {
			isSubmenu: true,
			submenuTriggerRef
		},
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)(MenuGroupContext.Provider, {
			value: null,
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)(MenuSubmenuRoot, { ...props }, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 15,
				columnNumber: 5
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName$2,
			lineNumber: 14,
			columnNumber: 4
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$2,
		lineNumber: 13,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime$2, _jsxFileName$2;
function init_submenu_root() {
	return (init_submenu_root = __esmMin((() => {
		init_MenuSubmenuRoot();
		init_react();
		init_context();
		import_jsx_dev_runtime$2 = require_jsx_dev_runtime();
		_jsxFileName$2 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/menu/submenu-root.tsx";
		try {
			SubmenuRoot.__docgenInfo = {
				"description": "Groups all parts of a nested submenu.",
				"displayName": "SubmenuRoot",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/menu/submenu-root.tsx",
				"methods": [],
				"props": {
					"children": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/menu/types.ts",
							"name": "SubmenuRootProps"
						}],
						"description": "The submenu subcomponents (`Menu.SubmenuTrigger`, `Menu.Popup`, etc.).",
						"name": "children",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/ui/src/menu/types.ts",
							"name": "SubmenuRootProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "ReactNode" }
					},
					"open": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/menu/root/MenuRoot.d.mts",
							"name": "MenuRootProps"
						}],
						"description": "Whether the menu is currently open.",
						"name": "open",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/menu/root/MenuRoot.d.mts",
							"name": "MenuRootProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"onOpenChange": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/menu/submenu-root/MenuSubmenuRoot.d.mts",
							"name": "MenuSubmenuRootProps"
						}],
						"description": "Event handler called when the menu is opened or closed.",
						"name": "onOpenChange",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/menu/submenu-root/MenuSubmenuRoot.d.mts",
							"name": "MenuSubmenuRootProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "((open: boolean, eventDetails: MenuRootChangeEventDetails) => void)" }
					},
					"onOpenChangeComplete": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/menu/root/MenuRoot.d.mts",
							"name": "MenuRootProps"
						}],
						"description": "Event handler called after any animations complete when the menu is opened or closed.",
						"name": "onOpenChangeComplete",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/menu/root/MenuRoot.d.mts",
							"name": "MenuRootProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "((open: boolean) => void)" }
					},
					"defaultOpen": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/menu/root/MenuRoot.d.mts",
							"name": "MenuRootProps"
						}],
						"description": "Whether the menu is initially open.\n\nTo render a controlled menu, use the `open` prop instead.",
						"name": "defaultOpen",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/menu/root/MenuRoot.d.mts",
							"name": "MenuRootProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"highlightItemOnHover": {
						"defaultValue": { "value": "true" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/menu/root/MenuRoot.d.mts",
							"name": "MenuRootProps"
						}],
						"description": "Whether moving the pointer over items should highlight them.\nDisabling this prop allows CSS `:hover` to be differentiated from the `:focus` (`data-highlighted`) state.",
						"name": "highlightItemOnHover",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/menu/root/MenuRoot.d.mts",
							"name": "MenuRootProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"actionsRef": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/menu/root/MenuRoot.d.mts",
							"name": "MenuRootProps"
						}],
						"description": "A ref to imperative actions.\n- `unmount`: Ends the closing phase of the menu after an externally controlled closing animation finishes.\n  Call `preventUnmountOnClose()` in `onOpenChange` first, otherwise the menu completes closing on its own.\n  Whether it leaves the DOM is decided by `keepMounted` on the portal.\n- `close`: Closes the menu imperatively when called.",
						"name": "actionsRef",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/menu/root/MenuRoot.d.mts",
							"name": "MenuRootProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "RefObject<MenuRootActions | null>" }
					},
					"loopFocus": {
						"defaultValue": { "value": "true" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/menu/root/MenuRoot.d.mts",
							"name": "MenuRootProps"
						}],
						"description": "Whether to loop keyboard focus back to the first item\nwhen the end of the list is reached while using the arrow keys.",
						"name": "loopFocus",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/menu/root/MenuRoot.d.mts",
							"name": "MenuRootProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"closeParentOnEsc": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/menu/submenu-root/MenuSubmenuRoot.d.mts",
							"name": "MenuSubmenuRootProps"
						}],
						"description": "When in a submenu, determines whether pressing the Escape key\ncloses the entire menu, or only the current child menu.",
						"name": "closeParentOnEsc",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/menu/submenu-root/MenuSubmenuRoot.d.mts",
							"name": "MenuSubmenuRootProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/ui/src/menu/submenu-trigger.tsx
var import_jsx_dev_runtime$1, _jsxFileName$1, SubmenuTrigger;
function init_submenu_trigger() {
	return (init_submenu_trigger = __esmMin((() => {
		init_MenuSubmenuTrigger();
		init_clsx();
		init_react();
		init_use_merge_refs();
		init_build_module$1();
		init_icon();
		init_global_css_defense_module();
		init_resets_module();
		init_style_module();
		init_context();
		init_item();
		import_jsx_dev_runtime$1 = require_jsx_dev_runtime();
		_jsxFileName$1 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/menu/submenu-trigger.tsx";
		SubmenuTrigger = (0, import_react.forwardRef)(function MenuSubmenuTrigger$1({ children, className, prefix, shortcut, suffix, "aria-describedby": ariaDescribedBy, "aria-keyshortcuts": ariaKeyShortcuts, "aria-label": ariaLabel, "aria-labelledby": ariaLabelledBy, ...props }, ref) {
			const { submenuTriggerRef } = useMenuContext();
			const mergedRef = useMergeRefs([ref, submenuTriggerRef ?? null]);
			const { contentChildren, contentContextValue, itemAriaProps, shortcutDescriptionId } = useItemContent(children, {
				"aria-describedby": ariaDescribedBy,
				"aria-keyshortcuts": ariaKeyShortcuts,
				"aria-label": ariaLabel,
				"aria-labelledby": ariaLabelledBy,
				shortcut
			});
			return /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(MenuSubmenuTrigger, {
				ref: mergedRef,
				...itemAriaProps,
				className: clsx(global_css_defense_module_default.div, resets_module_default["box-sizing"], style_module_default.item, className),
				...props,
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(MenuItemContentContext.Provider, {
					value: contentContextValue,
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(ItemContent, {
						prefix,
						shortcut,
						shortcutDescriptionId,
						suffix,
						trailing: /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(Icon, {
							className: style_module_default["submenu-chevron"],
							icon: chevron_right_small_default,
							size: 24,
							"aria-hidden": "true"
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 67,
							columnNumber: 8
						}, this),
						children: contentChildren
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 61,
						columnNumber: 6
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 60,
					columnNumber: 5
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 49,
				columnNumber: 4
			}, this);
		});
		try {
			SubmenuTrigger.__docgenInfo = {
				"description": "Renders a menu item that opens a submenu.",
				"displayName": "SubmenuTrigger",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/menu/submenu-trigger.tsx",
				"methods": [],
				"props": {
					"id": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/menu/submenu-trigger/MenuSubmenuTrigger.d.mts",
							"name": "MenuSubmenuTriggerProps"
						}],
						"description": "@ignore",
						"name": "id",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/menu/submenu-trigger/MenuSubmenuTrigger.d.mts",
							"name": "MenuSubmenuTriggerProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"label": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/menu/submenu-trigger/MenuSubmenuTrigger.d.mts",
							"name": "MenuSubmenuTriggerProps"
						}],
						"description": "Overrides the text used for keyboard text navigation and filtering.\nFalls back to the rendered text when not provided.",
						"name": "label",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/menu/submenu-trigger/MenuSubmenuTrigger.d.mts",
							"name": "MenuSubmenuTriggerProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"style": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/utils/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "CSS style to apply to the element.",
						"name": "style",
						"required": false,
						"tags": {},
						"type": { "name": "CSSProperties" }
					},
					"className": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/utils/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "CSS class name to apply to the element.",
						"name": "className",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"onClick": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/menu/submenu-trigger/MenuSubmenuTrigger.d.mts",
							"name": "MenuSubmenuTriggerProps"
						}],
						"description": "",
						"name": "onClick",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/menu/submenu-trigger/MenuSubmenuTrigger.d.mts",
							"name": "MenuSubmenuTriggerProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "((event: BaseUIEvent<MouseEvent<HTMLDivElement, MouseEvent>>) => void)" }
					},
					"disabled": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/menu/submenu-trigger/MenuSubmenuTrigger.d.mts",
							"name": "MenuSubmenuTriggerProps"
						}],
						"description": "Whether the component should ignore user interaction.",
						"name": "disabled",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/menu/submenu-trigger/MenuSubmenuTrigger.d.mts",
							"name": "MenuSubmenuTriggerProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"render": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/utils/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Replaces the component's default HTML element using a given React\nelement, or a function that returns a React element.",
						"name": "render",
						"required": false,
						"tags": {},
						"type": { "name": "ComponentRenderFn<HTMLAttributesWithRef<any>> | ReactElement<Record<string, unknown>, string | JSXElementConstructor<any>>" }
					},
					"nativeButton": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/internals/types.d.mts",
							"name": "NonNativeButtonProps"
						}],
						"description": "Whether the component renders a native `<button>` element when replacing it\nvia the `render` prop.\nSet to `true` if the rendered element is a native button.",
						"name": "nativeButton",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/internals/types.d.mts",
							"name": "NonNativeButtonProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"delay": {
						"defaultValue": { "value": "100" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/menu/submenu-trigger/MenuSubmenuTrigger.d.mts",
							"name": "MenuSubmenuTriggerProps"
						}],
						"description": "How long to wait before the menu may be opened on hover. Specified in milliseconds.\n\nRequires the `openOnHover` prop.",
						"name": "delay",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/menu/submenu-trigger/MenuSubmenuTrigger.d.mts",
							"name": "MenuSubmenuTriggerProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "number" }
					},
					"closeDelay": {
						"defaultValue": { "value": "0" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/menu/submenu-trigger/MenuSubmenuTrigger.d.mts",
							"name": "MenuSubmenuTriggerProps"
						}],
						"description": "How long to wait before closing the menu that was opened on hover.\nSpecified in milliseconds.\n\nRequires the `openOnHover` prop.",
						"name": "closeDelay",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/menu/submenu-trigger/MenuSubmenuTrigger.d.mts",
							"name": "MenuSubmenuTriggerProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "number" }
					},
					"openOnHover": {
						"defaultValue": { "value": "true" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/menu/submenu-trigger/MenuSubmenuTrigger.d.mts",
							"name": "MenuSubmenuTriggerProps"
						}],
						"description": "Whether the menu should also open when the trigger is hovered.",
						"name": "openOnHover",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/menu/submenu-trigger/MenuSubmenuTrigger.d.mts",
							"name": "MenuSubmenuTriggerProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"prefix": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/menu/types.ts",
							"name": "MenuItemLayoutProps"
						}],
						"description": "Presentational content before the item label. Use `Menu.PrefixIcon` for\nicons that help users recognize actions or give a key action useful\nprominence.\n\nPrefer icons on every item in a group, or none. If only one item needs an\nicon, reconsider its grouping. Prefer omitting it over adding unnecessary\nicons to the other items. Mixed icon usage is supported. Avoid combining\na prefix icon and a description in the same item.",
						"name": "prefix",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/ui/src/menu/types.ts",
							"name": "MenuItemLayoutProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "ReactNode" }
					},
					"suffix": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/menu/types.ts",
							"name": "MenuItemLayoutProps"
						}],
						"description": "Presentational content displayed after the item label.",
						"name": "suffix",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/ui/src/menu/types.ts",
							"name": "MenuItemLayoutProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "ReactNode" }
					},
					"shortcut": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/menu/types.ts",
							"name": "MenuItemLayoutProps"
						}],
						"description": "The keyboard shortcut associated with this item. When provided, the\nshortcut is displayed in the item and announced to assistive technology.\n\n**Note**: This prop is for display and accessibility purposes only; the\nconsumer is responsible for implementing the actual keyboard event handler.",
						"name": "shortcut",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/ui/src/menu/types.ts",
							"name": "MenuItemLayoutProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "KeyboardShortcut" }
					},
					"children": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/menu/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "One direct `Menu.ItemLabel`, followed by zero or more direct\n`Menu.ItemDescription` components.",
						"name": "children",
						"required": true,
						"tags": {},
						"type": { "name": "MenuItemChildren" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/ui/src/menu/stories/index.story.tsx
var import_jsx_dev_runtime, _jsxFileName, meta, SHORTCUTS, Default, LinkItem, RichItems, WrappedItems, GroupedItems, Submenu, CheckboxItems, RadioItems, Positioning, WithCustomZIndex;
function init_index_story() {
	return (init_index_story = __esmMin((() => {
		init_react();
		init_build_module$1();
		init_build_module();
		init_root(), init_trigger(), init_portal(), init_positioner(), init_popup(), init_item(), init_item_label(), init_item_description(), init_prefix_icon(), init_link_item(), init_checkbox_item(), init_radio_group(), init_radio_item(), init_group(), init_group_label(), init_separator(), init_submenu_root(), init_submenu_trigger();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/menu/stories/index.story.tsx";
		meta = {
			title: "Components/@wordpress-ui/Menu",
			id: "design-system-components-menu",
			component: Root,
			subcomponents: {
				"Menu.Trigger": Trigger,
				"Menu.Portal": Portal,
				"Menu.Positioner": Positioner,
				"Menu.Popup": Popup,
				"Menu.Item": Item,
				"Menu.ItemLabel": ItemLabel,
				"Menu.ItemDescription": ItemDescription,
				"Menu.PrefixIcon": PrefixIcon,
				"Menu.LinkItem": LinkItem$1,
				"Menu.CheckboxItem": CheckboxItem,
				"Menu.RadioGroup": RadioGroup,
				"Menu.RadioItem": RadioItem,
				"Menu.Group": Group,
				"Menu.GroupLabel": GroupLabel,
				"Menu.Separator": Separator,
				"Menu.SubmenuRoot": SubmenuRoot,
				"Menu.SubmenuTrigger": SubmenuTrigger
			},
			argTypes: { children: { control: false } },
			parameters: { componentStatus: {
				status: "use-with-caution",
				whereUsed: "global",
				notes: "Not yet recommended while the APIs are still in flux, early Gutenberg migrations are being evaluated, and compatibility with overlays from `@wordpress/components` remains under review. See [WordPress/gutenberg#76135](https://github.com/WordPress/gutenberg/issues/76135)."
			} }
		};
		SHORTCUTS = {
			comfortableDensity: {
				displayShortcut: displayShortcut.primary("2"),
				ariaKeyShortcut: ariaKeyShortcut.primary("2"),
				label: shortcutAriaLabel.primary("2")
			},
			developerResources: {
				displayShortcut: displayShortcut.primary("d"),
				ariaKeyShortcut: ariaKeyShortcut.primary("d"),
				label: shortcutAriaLabel.primary("d")
			},
			downloads: {
				displayShortcut: displayShortcut.primary("d"),
				ariaKeyShortcut: ariaKeyShortcut.primary("d"),
				label: shortcutAriaLabel.primary("d")
			},
			move: {
				displayShortcut: displayShortcut.primary("m"),
				ariaKeyShortcut: ariaKeyShortcut.primary("m"),
				label: shortcutAriaLabel.primary("m")
			},
			save: {
				displayShortcut: displayShortcut.primary("s"),
				ariaKeyShortcut: ariaKeyShortcut.primary("s"),
				label: shortcutAriaLabel.primary("s")
			},
			shared: {
				displayShortcut: displayShortcut.primaryShift("s"),
				ariaKeyShortcut: ariaKeyShortcut.primaryShift("s"),
				label: shortcutAriaLabel.primaryShift("s")
			}
		};
		Default = { render: function Render() {
			const [bookmarks, setBookmarks] = (0, import_react.useState)(true);
			const [downloads, setDownloads] = (0, import_react.useState)(false);
			const [view, setView] = (0, import_react.useState)("list");
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Root, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trigger, { children: "Open menu" }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 101,
				columnNumber: 5
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Popup, { children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Item, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ItemLabel, { children: "Rename…" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 104,
					columnNumber: 7
				}, this) }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 103,
					columnNumber: 6
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Item, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ItemLabel, { children: "Archive" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 107,
					columnNumber: 7
				}, this) }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 106,
					columnNumber: 6
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Item, {
					shortcut: SHORTCUTS.save,
					suffix: "Draft",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ItemLabel, { children: "Save" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 110,
						columnNumber: 7
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 109,
					columnNumber: 6
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Separator, {}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 112,
					columnNumber: 6
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Group, { children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(GroupLabel, { children: "Links" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 114,
						columnNumber: 7
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LinkItem$1, {
						href: "#menu-default-example",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ItemLabel, { children: "View details" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 116,
							columnNumber: 8
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 115,
						columnNumber: 7
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LinkItem$1, {
						href: "https://wordpress.org",
						openInNewTab: true,
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ItemLabel, { children: "WordPress.org" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 122,
							columnNumber: 8
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 118,
						columnNumber: 7
					}, this)
				] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 113,
					columnNumber: 6
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Separator, {}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 125,
					columnNumber: 6
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Group, { children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(GroupLabel, { children: "Visible columns" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 127,
						columnNumber: 7
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CheckboxItem, {
						checked: bookmarks,
						onCheckedChange: setBookmarks,
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ItemLabel, { children: "Bookmarks" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 132,
							columnNumber: 8
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 128,
						columnNumber: 7
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CheckboxItem, {
						checked: downloads,
						onCheckedChange: setDownloads,
						shortcut: SHORTCUTS.downloads,
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ItemLabel, { children: "Downloads" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 139,
							columnNumber: 8
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 134,
						columnNumber: 7
					}, this)
				] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 126,
					columnNumber: 6
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Separator, {}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 142,
					columnNumber: 6
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RadioGroup, {
					value: view,
					onValueChange: setView,
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(GroupLabel, { children: "View" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 144,
							columnNumber: 7
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RadioItem, {
							value: "list",
							prefix: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PrefixIcon, { icon: list_default }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 147,
								columnNumber: 17
							}, this),
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ItemLabel, { children: "List" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 149,
								columnNumber: 8
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 145,
							columnNumber: 7
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RadioItem, {
							value: "grid",
							prefix: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PrefixIcon, { icon: grid_default }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 153,
								columnNumber: 17
							}, this),
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ItemLabel, { children: "Grid" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 155,
								columnNumber: 8
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 151,
							columnNumber: 7
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 143,
					columnNumber: 6
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Separator, {}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 158,
					columnNumber: 6
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Group, {
					"aria-label": "More actions",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SubmenuRoot, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SubmenuTrigger, {
						shortcut: SHORTCUTS.move,
						suffix: "3",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ItemLabel, { children: "Move to" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 165,
							columnNumber: 9
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 161,
						columnNumber: 8
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Popup, { children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Item, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ItemLabel, { children: "Favorites" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 169,
							columnNumber: 10
						}, this) }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 168,
							columnNumber: 9
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Item, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ItemLabel, { children: "Archive" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 172,
							columnNumber: 10
						}, this) }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 171,
							columnNumber: 9
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SubmenuRoot, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SubmenuTrigger, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ItemLabel, { children: "More destinations" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 176,
							columnNumber: 11
						}, this) }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 175,
							columnNumber: 10
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Popup, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Item, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ItemLabel, { children: "Reviewed" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 182,
							columnNumber: 12
						}, this) }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 181,
							columnNumber: 11
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Item, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ItemLabel, { children: "Shared" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 187,
							columnNumber: 12
						}, this) }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 186,
							columnNumber: 11
						}, this)] }, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 180,
							columnNumber: 10
						}, this)] }, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 174,
							columnNumber: 9
						}, this)
					] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 167,
						columnNumber: 8
					}, this)] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 160,
						columnNumber: 7
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Item, {
						disabled: true,
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ItemLabel, { children: "Unavailable action" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 196,
							columnNumber: 8
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 195,
						columnNumber: 7
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 159,
					columnNumber: 6
				}, this)
			] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 102,
				columnNumber: 5
			}, this)] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 100,
				columnNumber: 4
			}, this);
		} };
		LinkItem = { args: { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trigger, { children: "Open menu" }, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 209,
			columnNumber: 5
		}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Popup, { children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LinkItem$1, {
				href: "https://wordpress.org",
				openInNewTab: true,
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ItemLabel, { children: "WordPress.org" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 212,
					columnNumber: 7
				}, void 0)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 211,
				columnNumber: 6
			}, void 0),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LinkItem$1, {
				href: "https://developer.wordpress.org",
				openInNewTab: true,
				target: "wordpress-developer-resources",
				shortcut: SHORTCUTS.developerResources,
				suffix: "Docs",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ItemLabel, { children: "WordPress developer resources" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 221,
					columnNumber: 7
				}, void 0)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 214,
				columnNumber: 6
			}, void 0),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LinkItem$1, {
				href: "#menu-link-item-example",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ItemLabel, { children: "In-page destination" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 226,
					columnNumber: 7
				}, void 0)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 225,
				columnNumber: 6
			}, void 0)
		] }, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 210,
			columnNumber: 5
		}, void 0)] }, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 208,
			columnNumber: 4
		}, void 0) } };
		RichItems = { args: { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trigger, { children: "Open menu" }, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 238,
			columnNumber: 5
		}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Popup, { children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Group, { children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(GroupLabel, { children: "File" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 241,
					columnNumber: 7
				}, void 0),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Item, {
					shortcut: SHORTCUTS.save,
					suffix: "Modified",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ItemLabel, { children: "Save" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 246,
						columnNumber: 8
					}, void 0)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 242,
					columnNumber: 7
				}, void 0),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Item, {
					disabled: true,
					shortcut: SHORTCUTS.downloads,
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ItemLabel, { children: "Download" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 249,
						columnNumber: 8
					}, void 0)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 248,
					columnNumber: 7
				}, void 0),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Item, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ItemLabel, { children: "Delete…" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 252,
					columnNumber: 8
				}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ItemDescription, { children: "Also deletes all versions of this item." }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 253,
					columnNumber: 8
				}, void 0)] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 251,
					columnNumber: 7
				}, void 0)
			] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 240,
				columnNumber: 6
			}, void 0),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Separator, {}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 258,
				columnNumber: 6
			}, void 0),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Group, { children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(GroupLabel, { children: "Organize" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 260,
					columnNumber: 7
				}, void 0),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Item, {
					prefix: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PrefixIcon, { icon: copy_default }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 261,
						columnNumber: 27
					}, void 0),
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ItemLabel, { children: "Duplicate" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 262,
						columnNumber: 8
					}, void 0)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 261,
					columnNumber: 7
				}, void 0),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Item, {
					prefix: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PrefixIcon, { icon: archive_default }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 265,
						columnNumber: 17
					}, void 0),
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ItemLabel, { children: "Archive" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 267,
						columnNumber: 8
					}, void 0)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 264,
					columnNumber: 7
				}, void 0)
			] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 259,
				columnNumber: 6
			}, void 0)
		] }, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 239,
			columnNumber: 5
		}, void 0)] }, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 237,
			columnNumber: 4
		}, void 0) } };
		WrappedItems = {
			parameters: { docs: { description: { story: "Uses long text to demonstrate wrapping and disabled items. Keep product menu labels short and descriptions rare." } } },
			args: { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trigger, { children: "Open menu" }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 287,
				columnNumber: 5
			}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Popup, {
				style: { width: 240 },
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Item, {
					shortcut: SHORTCUTS.save,
					suffix: "Modified",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ItemLabel, { children: "A long menu item label that wraps onto multiple lines" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 290,
						columnNumber: 7
					}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ItemDescription, { children: "This deliberately long description should wrap below the label without overlapping the suffix or shortcut." }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 294,
						columnNumber: 7
					}, void 0)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 289,
					columnNumber: 6
				}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Item, {
					disabled: true,
					shortcut: SHORTCUTS.downloads,
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ItemLabel, { children: "A disabled item with a long label that wraps onto multiple lines" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 301,
						columnNumber: 7
					}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ItemDescription, { children: "The disabled foreground treatment should apply to the label, description, and shortcut." }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 305,
						columnNumber: 7
					}, void 0)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 300,
					columnNumber: 6
				}, void 0)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 288,
				columnNumber: 5
			}, void 0)] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 286,
				columnNumber: 4
			}, void 0) }
		};
		GroupedItems = { args: { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trigger, { children: "Open menu" }, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 320,
			columnNumber: 5
		}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Popup, { children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Group, { children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(GroupLabel, { children: "File" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 323,
					columnNumber: 7
				}, void 0),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Item, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ItemLabel, { children: "New draft" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 325,
					columnNumber: 8
				}, void 0) }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 324,
					columnNumber: 7
				}, void 0),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Item, {
					shortcut: SHORTCUTS.save,
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ItemLabel, { children: "Save" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 328,
						columnNumber: 8
					}, void 0)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 327,
					columnNumber: 7
				}, void 0),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Item, {
					suffix: "Edited",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ItemLabel, { children: "Save as copy…" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 331,
						columnNumber: 8
					}, void 0)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 330,
					columnNumber: 7
				}, void 0)
			] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 322,
				columnNumber: 6
			}, void 0),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Separator, {}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 334,
				columnNumber: 6
			}, void 0),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Group, { children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(GroupLabel, { children: "Organize" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 336,
					columnNumber: 7
				}, void 0),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Item, {
					prefix: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PrefixIcon, { icon: move_to_default }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 338,
						columnNumber: 17
					}, void 0),
					shortcut: SHORTCUTS.move,
					suffix: "3",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ItemLabel, { children: "Move to collection…" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 342,
						columnNumber: 8
					}, void 0)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 337,
					columnNumber: 7
				}, void 0),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Item, {
					prefix: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PrefixIcon, { icon: archive_default }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 345,
						columnNumber: 17
					}, void 0),
					suffix: "12",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ItemLabel, { children: "Archive" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 348,
						columnNumber: 8
					}, void 0)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 344,
					columnNumber: 7
				}, void 0)
			] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 335,
				columnNumber: 6
			}, void 0)
		] }, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 321,
			columnNumber: 5
		}, void 0)] }, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 319,
			columnNumber: 4
		}, void 0) } };
		Submenu = { args: { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trigger, { children: "Open menu" }, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 361,
			columnNumber: 5
		}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Popup, { children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Item, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ItemLabel, { children: "Rename…" }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 364,
				columnNumber: 7
			}, void 0) }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 363,
				columnNumber: 6
			}, void 0),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SubmenuRoot, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SubmenuTrigger, {
				shortcut: SHORTCUTS.move,
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ItemLabel, { children: "Move to another collection" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 368,
					columnNumber: 8
				}, void 0)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 367,
				columnNumber: 7
			}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Popup, { children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Item, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ItemLabel, { children: "Archive" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 374,
					columnNumber: 9
				}, void 0) }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 373,
					columnNumber: 8
				}, void 0),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Item, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ItemLabel, { children: "Favorites" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 377,
					columnNumber: 9
				}, void 0) }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 376,
					columnNumber: 8
				}, void 0),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SubmenuRoot, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SubmenuTrigger, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ItemLabel, { children: "More destinations" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 381,
					columnNumber: 10
				}, void 0) }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 380,
					columnNumber: 9
				}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Popup, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Item, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ItemLabel, { children: "Reviewed" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 387,
					columnNumber: 11
				}, void 0) }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 386,
					columnNumber: 10
				}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Item, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ItemLabel, { children: "Shared" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 392,
					columnNumber: 11
				}, void 0) }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 391,
					columnNumber: 10
				}, void 0)] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 385,
					columnNumber: 9
				}, void 0)] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 379,
					columnNumber: 8
				}, void 0)
			] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 372,
				columnNumber: 7
			}, void 0)] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 366,
				columnNumber: 6
			}, void 0),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Item, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ItemLabel, { children: "Delete…" }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 399,
				columnNumber: 7
			}, void 0) }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 398,
				columnNumber: 6
			}, void 0)
		] }, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 362,
			columnNumber: 5
		}, void 0)] }, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 360,
			columnNumber: 4
		}, void 0) } };
		CheckboxItems = { render: function Render() {
			const [bookmarks, setBookmarks] = (0, import_react.useState)(true);
			const [downloads, setDownloads] = (0, import_react.useState)(false);
			const [archived, setArchived] = (0, import_react.useState)(true);
			const [shared, setShared] = (0, import_react.useState)(false);
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Root, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trigger, { children: "Columns" }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 416,
				columnNumber: 5
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Popup, { children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Group, { children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(GroupLabel, { children: "Visible columns" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 419,
						columnNumber: 7
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CheckboxItem, {
						checked: bookmarks,
						onCheckedChange: setBookmarks,
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ItemLabel, { children: "Bookmarks" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 424,
							columnNumber: 8
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 420,
						columnNumber: 7
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CheckboxItem, {
						checked: downloads,
						onCheckedChange: setDownloads,
						shortcut: SHORTCUTS.downloads,
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ItemLabel, { children: "Downloads" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 431,
							columnNumber: 8
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 426,
						columnNumber: 7
					}, this)
				] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 418,
					columnNumber: 6
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Separator, {}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 434,
					columnNumber: 6
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Group, { children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(GroupLabel, { children: "Saved areas" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 436,
						columnNumber: 7
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CheckboxItem, {
						checked: archived,
						onCheckedChange: setArchived,
						prefix: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PrefixIcon, { icon: archive_default }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 440,
							columnNumber: 17
						}, this),
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ItemLabel, { children: "Archived" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 442,
							columnNumber: 8
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 437,
						columnNumber: 7
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CheckboxItem, {
						checked: shared,
						onCheckedChange: setShared,
						prefix: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PrefixIcon, { icon: share_default }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 447,
							columnNumber: 17
						}, this),
						shortcut: SHORTCUTS.shared,
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ItemLabel, { children: "Shared" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 450,
							columnNumber: 8
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 444,
						columnNumber: 7
					}, this)
				] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 435,
					columnNumber: 6
				}, this)
			] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 417,
				columnNumber: 5
			}, this)] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 415,
				columnNumber: 4
			}, this);
		} };
		RadioItems = { render: function Render() {
			const [alignment, setAlignment] = (0, import_react.useState)("left");
			const [density, setDensity] = (0, import_react.useState)("comfortable");
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Root, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trigger, { children: "View options" }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 466,
				columnNumber: 5
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Popup, { children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RadioGroup, {
					value: alignment,
					onValueChange: setAlignment,
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(GroupLabel, { children: "Alignment" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 472,
							columnNumber: 7
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RadioItem, {
							value: "left",
							prefix: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PrefixIcon, { icon: align_left_default }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 475,
								columnNumber: 17
							}, this),
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ItemLabel, { children: "Left" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 477,
								columnNumber: 8
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 473,
							columnNumber: 7
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RadioItem, {
							value: "center",
							prefix: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PrefixIcon, { icon: align_center_default }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 481,
								columnNumber: 17
							}, this),
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ItemLabel, { children: "Center" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 483,
								columnNumber: 8
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 479,
							columnNumber: 7
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RadioItem, {
							value: "right",
							prefix: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PrefixIcon, { icon: align_right_default }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 487,
								columnNumber: 17
							}, this),
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ItemLabel, { children: "Right" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 489,
								columnNumber: 8
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 485,
							columnNumber: 7
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 468,
					columnNumber: 6
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Item, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ItemLabel, { children: "Reset alignment" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 493,
					columnNumber: 7
				}, this) }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 492,
					columnNumber: 6
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Separator, {}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 495,
					columnNumber: 6
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RadioGroup, {
					value: density,
					onValueChange: setDensity,
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(GroupLabel, { children: "Density" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 500,
							columnNumber: 7
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RadioItem, {
							value: "compact",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ItemLabel, { children: "Compact" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 502,
								columnNumber: 8
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 501,
							columnNumber: 7
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RadioItem, {
							value: "comfortable",
							shortcut: SHORTCUTS.comfortableDensity,
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ItemLabel, { children: "Comfortable" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 508,
								columnNumber: 8
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 504,
							columnNumber: 7
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RadioItem, {
							value: "spacious",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ItemLabel, { children: "Spacious" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 511,
								columnNumber: 8
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 510,
							columnNumber: 7
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 496,
					columnNumber: 6
				}, this)
			] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 467,
				columnNumber: 5
			}, this)] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 465,
				columnNumber: 4
			}, this);
		} };
		Positioning = { args: { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trigger, { children: "Open menu" }, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 524,
			columnNumber: 5
		}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Popup, {
			positioner: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Positioner, {
				side: "right",
				align: "start"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 527,
				columnNumber: 7
			}, void 0),
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Item, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ItemLabel, { children: "Duplicate" }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 531,
				columnNumber: 7
			}, void 0) }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 530,
				columnNumber: 6
			}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Item, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ItemLabel, { children: "Move" }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 534,
				columnNumber: 7
			}, void 0) }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 533,
				columnNumber: 6
			}, void 0)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 525,
			columnNumber: 5
		}, void 0)] }, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 523,
			columnNumber: 4
		}, void 0) } };
		WithCustomZIndex = {
			name: "With Custom z-index",
			args: { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trigger, { children: "Open menu" }, "trigger", false, {
				fileName: _jsxFileName,
				lineNumber: 562,
				columnNumber: 4
			}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Popup, {
				portal: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Portal, { style: { "--wp-ui-menu-z-index": "9999" } }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 565,
					columnNumber: 6
				}, void 0),
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Item, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ItemLabel, { children: "Duplicate" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 570,
					columnNumber: 6
				}, void 0) }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 569,
					columnNumber: 5
				}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Item, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ItemLabel, { children: "Move…" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 573,
					columnNumber: 6
				}, void 0) }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 572,
					columnNumber: 5
				}, void 0)]
			}, "popup", true, {
				fileName: _jsxFileName,
				lineNumber: 563,
				columnNumber: 4
			}, void 0)] }
		};
		try {
			WithCustomZIndex.__docgenInfo = {
				"description": "Popovers in Gutenberg are managed with explicit z-index values, which can\ncreate situations where a menu renders below another popover when you want\nit above.\n\nThe `--wp-ui-menu-z-index` CSS variable controls the z-index of the Menu\npositioner. Override it either:\n\n- **Globally**, by setting the variable on `:root` or `body` (raises every\n  Menu popup in the page), or\n- **Per instance**, by passing a `Menu.Portal` with a `style` (or\n  `className`) to `Menu.Popup`'s `portal` prop. The variable cascades from\n  the portal wrapper to everything rendered inside it.\n\nThis story demonstrates the per-instance approach.",
				"displayName": "WithCustomZIndex",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/menu/stories/index.story.tsx",
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
					originalSource: "{\n  render: function Render() {\n    const [bookmarks, setBookmarks] = useState(true);\n    const [downloads, setDownloads] = useState(false);\n    const [view, setView] = useState('list');\n    return <Menu.Root>\n                <Menu.Trigger>Open menu</Menu.Trigger>\n                <Menu.Popup>\n                    <Menu.Item>\n                        <Menu.ItemLabel>Rename…</Menu.ItemLabel>\n                    </Menu.Item>\n                    <Menu.Item>\n                        <Menu.ItemLabel>Archive</Menu.ItemLabel>\n                    </Menu.Item>\n                    <Menu.Item shortcut={SHORTCUTS.save} suffix=\"Draft\">\n                        <Menu.ItemLabel>Save</Menu.ItemLabel>\n                    </Menu.Item>\n                    <Menu.Separator />\n                    <Menu.Group>\n                        <Menu.GroupLabel>Links</Menu.GroupLabel>\n                        <Menu.LinkItem href=\"#menu-default-example\">\n                            <Menu.ItemLabel>View details</Menu.ItemLabel>\n                        </Menu.LinkItem>\n                        <Menu.LinkItem href=\"https://wordpress.org\" openInNewTab>\n                            <Menu.ItemLabel>WordPress.org</Menu.ItemLabel>\n                        </Menu.LinkItem>\n                    </Menu.Group>\n                    <Menu.Separator />\n                    <Menu.Group>\n                        <Menu.GroupLabel>Visible columns</Menu.GroupLabel>\n                        <Menu.CheckboxItem checked={bookmarks} onCheckedChange={setBookmarks}>\n                            <Menu.ItemLabel>Bookmarks</Menu.ItemLabel>\n                        </Menu.CheckboxItem>\n                        <Menu.CheckboxItem checked={downloads} onCheckedChange={setDownloads} shortcut={SHORTCUTS.downloads}>\n                            <Menu.ItemLabel>Downloads</Menu.ItemLabel>\n                        </Menu.CheckboxItem>\n                    </Menu.Group>\n                    <Menu.Separator />\n                    <Menu.RadioGroup value={view} onValueChange={setView}>\n                        <Menu.GroupLabel>View</Menu.GroupLabel>\n                        <Menu.RadioItem value=\"list\" prefix={<Menu.PrefixIcon icon={list} />}>\n                            <Menu.ItemLabel>List</Menu.ItemLabel>\n                        </Menu.RadioItem>\n                        <Menu.RadioItem value=\"grid\" prefix={<Menu.PrefixIcon icon={grid} />}>\n                            <Menu.ItemLabel>Grid</Menu.ItemLabel>\n                        </Menu.RadioItem>\n                    </Menu.RadioGroup>\n                    <Menu.Separator />\n                    <Menu.Group aria-label=\"More actions\">\n                        <Menu.SubmenuRoot>\n                            <Menu.SubmenuTrigger shortcut={SHORTCUTS.move} suffix=\"3\">\n                                <Menu.ItemLabel>Move to</Menu.ItemLabel>\n                            </Menu.SubmenuTrigger>\n                            <Menu.Popup>\n                                <Menu.Item>\n                                    <Menu.ItemLabel>Favorites</Menu.ItemLabel>\n                                </Menu.Item>\n                                <Menu.Item>\n                                    <Menu.ItemLabel>Archive</Menu.ItemLabel>\n                                </Menu.Item>\n                                <Menu.SubmenuRoot>\n                                    <Menu.SubmenuTrigger>\n                                        <Menu.ItemLabel>\n                                            More destinations\n                                        </Menu.ItemLabel>\n                                    </Menu.SubmenuTrigger>\n                                    <Menu.Popup>\n                                        <Menu.Item>\n                                            <Menu.ItemLabel>\n                                                Reviewed\n                                            </Menu.ItemLabel>\n                                        </Menu.Item>\n                                        <Menu.Item>\n                                            <Menu.ItemLabel>\n                                                Shared\n                                            </Menu.ItemLabel>\n                                        </Menu.Item>\n                                    </Menu.Popup>\n                                </Menu.SubmenuRoot>\n                            </Menu.Popup>\n                        </Menu.SubmenuRoot>\n                        <Menu.Item disabled>\n                            <Menu.ItemLabel>Unavailable action</Menu.ItemLabel>\n                        </Menu.Item>\n                    </Menu.Group>\n                </Menu.Popup>\n            </Menu.Root>;\n  }\n}",
					...Default.parameters?.docs?.source
				}
			}
		};
		LinkItem.parameters = {
			...LinkItem.parameters,
			docs: {
				...LinkItem.parameters?.docs,
				source: {
					originalSource: "{\n  args: {\n    children: <>\n                <Menu.Trigger>Open menu</Menu.Trigger>\n                <Menu.Popup>\n                    <Menu.LinkItem href=\"https://wordpress.org\" openInNewTab>\n                        <Menu.ItemLabel>WordPress.org</Menu.ItemLabel>\n                    </Menu.LinkItem>\n                    <Menu.LinkItem href=\"https://developer.wordpress.org\" openInNewTab target=\"wordpress-developer-resources\" shortcut={SHORTCUTS.developerResources} suffix=\"Docs\">\n                        <Menu.ItemLabel>\n                            WordPress developer resources\n                        </Menu.ItemLabel>\n                    </Menu.LinkItem>\n                    <Menu.LinkItem href=\"#menu-link-item-example\">\n                        <Menu.ItemLabel>In-page destination</Menu.ItemLabel>\n                    </Menu.LinkItem>\n                </Menu.Popup>\n            </>\n  }\n}",
					...LinkItem.parameters?.docs?.source
				}
			}
		};
		RichItems.parameters = {
			...RichItems.parameters,
			docs: {
				...RichItems.parameters?.docs,
				source: {
					originalSource: "{\n  args: {\n    children: <>\n                <Menu.Trigger>Open menu</Menu.Trigger>\n                <Menu.Popup>\n                    <Menu.Group>\n                        <Menu.GroupLabel>File</Menu.GroupLabel>\n                        <Menu.Item shortcut={SHORTCUTS.save} suffix=\"Modified\">\n                            <Menu.ItemLabel>Save</Menu.ItemLabel>\n                        </Menu.Item>\n                        <Menu.Item disabled shortcut={SHORTCUTS.downloads}>\n                            <Menu.ItemLabel>Download</Menu.ItemLabel>\n                        </Menu.Item>\n                        <Menu.Item>\n                            <Menu.ItemLabel>Delete…</Menu.ItemLabel>\n                            <Menu.ItemDescription>\n                                Also deletes all versions of this item.\n                            </Menu.ItemDescription>\n                        </Menu.Item>\n                    </Menu.Group>\n                    <Menu.Separator />\n                    <Menu.Group>\n                        <Menu.GroupLabel>Organize</Menu.GroupLabel>\n                        <Menu.Item prefix={<Menu.PrefixIcon icon={copy} />}>\n                            <Menu.ItemLabel>Duplicate</Menu.ItemLabel>\n                        </Menu.Item>\n                        <Menu.Item prefix={<Menu.PrefixIcon icon={archive} />}>\n                            <Menu.ItemLabel>Archive</Menu.ItemLabel>\n                        </Menu.Item>\n                    </Menu.Group>\n                </Menu.Popup>\n            </>\n  }\n}",
					...RichItems.parameters?.docs?.source
				}
			}
		};
		WrappedItems.parameters = {
			...WrappedItems.parameters,
			docs: {
				...WrappedItems.parameters?.docs,
				source: {
					originalSource: "{\n  parameters: {\n    docs: {\n      description: {\n        story: 'Uses long text to demonstrate wrapping and disabled items. Keep product menu labels short and descriptions rare.'\n      }\n    }\n  },\n  args: {\n    children: <>\n                <Menu.Trigger>Open menu</Menu.Trigger>\n                <Menu.Popup style={{\n        width: 240\n      }}>\n                    <Menu.Item shortcut={SHORTCUTS.save} suffix=\"Modified\">\n                        <Menu.ItemLabel>\n                            A long menu item label that wraps onto multiple\n                            lines\n                        </Menu.ItemLabel>\n                        <Menu.ItemDescription>\n                            This deliberately long description should wrap below\n                            the label without overlapping the suffix or\n                            shortcut.\n                        </Menu.ItemDescription>\n                    </Menu.Item>\n                    <Menu.Item disabled shortcut={SHORTCUTS.downloads}>\n                        <Menu.ItemLabel>\n                            A disabled item with a long label that wraps onto\n                            multiple lines\n                        </Menu.ItemLabel>\n                        <Menu.ItemDescription>\n                            The disabled foreground treatment should apply to\n                            the label, description, and shortcut.\n                        </Menu.ItemDescription>\n                    </Menu.Item>\n                </Menu.Popup>\n            </>\n  }\n}",
					...WrappedItems.parameters?.docs?.source
				}
			}
		};
		GroupedItems.parameters = {
			...GroupedItems.parameters,
			docs: {
				...GroupedItems.parameters?.docs,
				source: {
					originalSource: "{\n  args: {\n    children: <>\n                <Menu.Trigger>Open menu</Menu.Trigger>\n                <Menu.Popup>\n                    <Menu.Group>\n                        <Menu.GroupLabel>File</Menu.GroupLabel>\n                        <Menu.Item>\n                            <Menu.ItemLabel>New draft</Menu.ItemLabel>\n                        </Menu.Item>\n                        <Menu.Item shortcut={SHORTCUTS.save}>\n                            <Menu.ItemLabel>Save</Menu.ItemLabel>\n                        </Menu.Item>\n                        <Menu.Item suffix=\"Edited\">\n                            <Menu.ItemLabel>Save as copy…</Menu.ItemLabel>\n                        </Menu.Item>\n                    </Menu.Group>\n                    <Menu.Separator />\n                    <Menu.Group>\n                        <Menu.GroupLabel>Organize</Menu.GroupLabel>\n                        <Menu.Item prefix={<Menu.PrefixIcon icon={moveTo} />} shortcut={SHORTCUTS.move} suffix=\"3\">\n                            <Menu.ItemLabel>Move to collection…</Menu.ItemLabel>\n                        </Menu.Item>\n                        <Menu.Item prefix={<Menu.PrefixIcon icon={archive} />} suffix=\"12\">\n                            <Menu.ItemLabel>Archive</Menu.ItemLabel>\n                        </Menu.Item>\n                    </Menu.Group>\n                </Menu.Popup>\n            </>\n  }\n}",
					...GroupedItems.parameters?.docs?.source
				}
			}
		};
		Submenu.parameters = {
			...Submenu.parameters,
			docs: {
				...Submenu.parameters?.docs,
				source: {
					originalSource: "{\n  args: {\n    children: <>\n                <Menu.Trigger>Open menu</Menu.Trigger>\n                <Menu.Popup>\n                    <Menu.Item>\n                        <Menu.ItemLabel>Rename…</Menu.ItemLabel>\n                    </Menu.Item>\n                    <Menu.SubmenuRoot>\n                        <Menu.SubmenuTrigger shortcut={SHORTCUTS.move}>\n                            <Menu.ItemLabel>\n                                Move to another collection\n                            </Menu.ItemLabel>\n                        </Menu.SubmenuTrigger>\n                        <Menu.Popup>\n                            <Menu.Item>\n                                <Menu.ItemLabel>Archive</Menu.ItemLabel>\n                            </Menu.Item>\n                            <Menu.Item>\n                                <Menu.ItemLabel>Favorites</Menu.ItemLabel>\n                            </Menu.Item>\n                            <Menu.SubmenuRoot>\n                                <Menu.SubmenuTrigger>\n                                    <Menu.ItemLabel>\n                                        More destinations\n                                    </Menu.ItemLabel>\n                                </Menu.SubmenuTrigger>\n                                <Menu.Popup>\n                                    <Menu.Item>\n                                        <Menu.ItemLabel>\n                                            Reviewed\n                                        </Menu.ItemLabel>\n                                    </Menu.Item>\n                                    <Menu.Item>\n                                        <Menu.ItemLabel>Shared</Menu.ItemLabel>\n                                    </Menu.Item>\n                                </Menu.Popup>\n                            </Menu.SubmenuRoot>\n                        </Menu.Popup>\n                    </Menu.SubmenuRoot>\n                    <Menu.Item>\n                        <Menu.ItemLabel>Delete…</Menu.ItemLabel>\n                    </Menu.Item>\n                </Menu.Popup>\n            </>\n  }\n}",
					...Submenu.parameters?.docs?.source
				}
			}
		};
		CheckboxItems.parameters = {
			...CheckboxItems.parameters,
			docs: {
				...CheckboxItems.parameters?.docs,
				source: {
					originalSource: "{\n  render: function Render() {\n    const [bookmarks, setBookmarks] = useState(true);\n    const [downloads, setDownloads] = useState(false);\n    const [archived, setArchived] = useState(true);\n    const [shared, setShared] = useState(false);\n    return <Menu.Root>\n                <Menu.Trigger>Columns</Menu.Trigger>\n                <Menu.Popup>\n                    <Menu.Group>\n                        <Menu.GroupLabel>Visible columns</Menu.GroupLabel>\n                        <Menu.CheckboxItem checked={bookmarks} onCheckedChange={setBookmarks}>\n                            <Menu.ItemLabel>Bookmarks</Menu.ItemLabel>\n                        </Menu.CheckboxItem>\n                        <Menu.CheckboxItem checked={downloads} onCheckedChange={setDownloads} shortcut={SHORTCUTS.downloads}>\n                            <Menu.ItemLabel>Downloads</Menu.ItemLabel>\n                        </Menu.CheckboxItem>\n                    </Menu.Group>\n                    <Menu.Separator />\n                    <Menu.Group>\n                        <Menu.GroupLabel>Saved areas</Menu.GroupLabel>\n                        <Menu.CheckboxItem checked={archived} onCheckedChange={setArchived} prefix={<Menu.PrefixIcon icon={archive} />}>\n                            <Menu.ItemLabel>Archived</Menu.ItemLabel>\n                        </Menu.CheckboxItem>\n                        <Menu.CheckboxItem checked={shared} onCheckedChange={setShared} prefix={<Menu.PrefixIcon icon={share} />} shortcut={SHORTCUTS.shared}>\n                            <Menu.ItemLabel>Shared</Menu.ItemLabel>\n                        </Menu.CheckboxItem>\n                    </Menu.Group>\n                </Menu.Popup>\n            </Menu.Root>;\n  }\n}",
					...CheckboxItems.parameters?.docs?.source
				}
			}
		};
		RadioItems.parameters = {
			...RadioItems.parameters,
			docs: {
				...RadioItems.parameters?.docs,
				source: {
					originalSource: "{\n  render: function Render() {\n    const [alignment, setAlignment] = useState('left');\n    const [density, setDensity] = useState('comfortable');\n    return <Menu.Root>\n                <Menu.Trigger>View options</Menu.Trigger>\n                <Menu.Popup>\n                    <Menu.RadioGroup value={alignment} onValueChange={setAlignment}>\n                        <Menu.GroupLabel>Alignment</Menu.GroupLabel>\n                        <Menu.RadioItem value=\"left\" prefix={<Menu.PrefixIcon icon={alignLeft} />}>\n                            <Menu.ItemLabel>Left</Menu.ItemLabel>\n                        </Menu.RadioItem>\n                        <Menu.RadioItem value=\"center\" prefix={<Menu.PrefixIcon icon={alignCenter} />}>\n                            <Menu.ItemLabel>Center</Menu.ItemLabel>\n                        </Menu.RadioItem>\n                        <Menu.RadioItem value=\"right\" prefix={<Menu.PrefixIcon icon={alignRight} />}>\n                            <Menu.ItemLabel>Right</Menu.ItemLabel>\n                        </Menu.RadioItem>\n                    </Menu.RadioGroup>\n                    <Menu.Item>\n                        <Menu.ItemLabel>Reset alignment</Menu.ItemLabel>\n                    </Menu.Item>\n                    <Menu.Separator />\n                    <Menu.RadioGroup value={density} onValueChange={setDensity}>\n                        <Menu.GroupLabel>Density</Menu.GroupLabel>\n                        <Menu.RadioItem value=\"compact\">\n                            <Menu.ItemLabel>Compact</Menu.ItemLabel>\n                        </Menu.RadioItem>\n                        <Menu.RadioItem value=\"comfortable\" shortcut={SHORTCUTS.comfortableDensity}>\n                            <Menu.ItemLabel>Comfortable</Menu.ItemLabel>\n                        </Menu.RadioItem>\n                        <Menu.RadioItem value=\"spacious\">\n                            <Menu.ItemLabel>Spacious</Menu.ItemLabel>\n                        </Menu.RadioItem>\n                    </Menu.RadioGroup>\n                </Menu.Popup>\n            </Menu.Root>;\n  }\n}",
					...RadioItems.parameters?.docs?.source
				}
			}
		};
		Positioning.parameters = {
			...Positioning.parameters,
			docs: {
				...Positioning.parameters?.docs,
				source: {
					originalSource: "{\n  args: {\n    children: <>\n                <Menu.Trigger>Open menu</Menu.Trigger>\n                <Menu.Popup positioner={<Menu.Positioner side=\"right\" align=\"start\" />}>\n                    <Menu.Item>\n                        <Menu.ItemLabel>Duplicate</Menu.ItemLabel>\n                    </Menu.Item>\n                    <Menu.Item>\n                        <Menu.ItemLabel>Move</Menu.ItemLabel>\n                    </Menu.Item>\n                </Menu.Popup>\n            </>\n  }\n}",
					...Positioning.parameters?.docs?.source
				}
			}
		};
		WithCustomZIndex.parameters = {
			...WithCustomZIndex.parameters,
			docs: {
				...WithCustomZIndex.parameters?.docs,
				source: {
					originalSource: "{\n  name: 'With Custom z-index',\n  args: {\n    children: [<Menu.Trigger key=\"trigger\">Open menu</Menu.Trigger>, <Menu.Popup portal={<Menu.Portal style={{\n      '--wp-ui-menu-z-index': '9999'\n    }} />} key=\"popup\">\n                <Menu.Item>\n                    <Menu.ItemLabel>Duplicate</Menu.ItemLabel>\n                </Menu.Item>\n                <Menu.Item>\n                    <Menu.ItemLabel>Move…</Menu.ItemLabel>\n                </Menu.Item>\n            </Menu.Popup>]\n  }\n}",
					...WithCustomZIndex.parameters?.docs?.source
				},
				description: {
					story: "Popovers in Gutenberg are managed with explicit z-index values, which can\ncreate situations where a menu renders below another popover when you want\nit above.\n\nThe `--wp-ui-menu-z-index` CSS variable controls the z-index of the Menu\npositioner. Override it either:\n\n- **Globally**, by setting the variable on `:root` or `body` (raises every\n  Menu popup in the page), or\n- **Per instance**, by passing a `Menu.Portal` with a `style` (or\n  `className`) to `Menu.Popup`'s `portal` prop. The variable cascades from\n  the portal wrapper to everything rendered inside it.\n\nThis story demonstrates the per-instance approach.",
					...WithCustomZIndex.parameters?.docs?.description
				}
			}
		};
	})))();
}
//#endregion
init_index_story();
export { CheckboxItems, Default, GroupedItems, LinkItem, Positioning, RadioItems, RichItems, Submenu, WithCustomZIndex, WrappedItems, meta as default };
