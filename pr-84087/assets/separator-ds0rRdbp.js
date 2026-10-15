import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { o as clsx, s as init_clsx } from "./iframe-D4D-SsYo.js";
import { i as init_MenuCheckboxItem, n as init_MenuCheckboxItemIndicator, r as MenuCheckboxItem, t as MenuCheckboxItemIndicator } from "./MenuCheckboxItemIndicator-BXs3ViyB.js";
import { n as init_MenuGroup, t as MenuGroup } from "./MenuGroup-EIDCmkJn.js";
import { n as init_MenuGroupLabel, t as MenuGroupLabel } from "./MenuGroupLabel-ALpkVshR.js";
import { a as MenuRadioGroup, i as init_MenuRadioItem, n as init_MenuRadioItemIndicator, o as init_MenuRadioGroup, r as MenuRadioItem, t as MenuRadioItemIndicator } from "./MenuRadioItemIndicator-815CTG7H.js";
import { n as init_Separator, t as Separator$1 } from "./Separator-gWBcEz0M.js";
import { a as SVG, o as init_svg, t as Circle } from "./svg-CO2tRbm-.js";
import { t as check_default } from "./check-BrSqqlF_.js";
import { n as resets_module_default, t as init_resets_module } from "./resets.module-CJil9Bz6.js";
import { n as init_global_css_defense_module, t as global_css_defense_module_default } from "./global-css-defense.module-CSCRyOGP.js";
import { n as init_icon, t as Icon } from "./icon-DD-nOZ1R.js";
import { E as style_module_default, S as init_context, T as init_style_module, b as MenuGroupContext, f as ItemContent, m as useItemContent, p as init_item, w as useMenuGroupContext, x as MenuItemContentContext } from "./trigger-DSu4664c.js";
import { r as init_build_module } from "./library.story-DawnfKTW.js";
//#region ../packages/ui/src/menu/checkbox-item.tsx
var import_jsx_dev_runtime$6, _jsxFileName$6, CheckboxItem;
function init_checkbox_item() {
	return (init_checkbox_item = __esmMin((() => {
		init_MenuCheckboxItem(), init_MenuCheckboxItemIndicator();
		init_clsx();
		init_react();
		init_build_module();
		init_icon();
		init_global_css_defense_module();
		init_resets_module();
		init_style_module();
		init_context();
		init_item();
		import_jsx_dev_runtime$6 = require_jsx_dev_runtime();
		_jsxFileName$6 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/menu/checkbox-item.tsx";
		CheckboxItem = (0, import_react.forwardRef)(function MenuCheckboxItem$1({ children, className, prefix, shortcut, suffix, "aria-describedby": ariaDescribedBy, "aria-keyshortcuts": ariaKeyShortcuts, "aria-label": ariaLabel, "aria-labelledby": ariaLabelledBy, ...props }, ref) {
			const { contentChildren, contentContextValue, itemAriaProps, shortcutDescriptionId } = useItemContent(children, {
				"aria-describedby": ariaDescribedBy,
				"aria-keyshortcuts": ariaKeyShortcuts,
				"aria-label": ariaLabel,
				"aria-labelledby": ariaLabelledBy,
				shortcut
			});
			return /* @__PURE__ */ (0, import_jsx_dev_runtime$6.jsxDEV)(MenuCheckboxItem, {
				ref,
				...itemAriaProps,
				className: clsx(global_css_defense_module_default.div, resets_module_default["box-sizing"], style_module_default.item, className),
				...props,
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime$6.jsxDEV)(MenuCheckboxItemIndicator, {
					keepMounted: true,
					className: style_module_default["item-selection-indicator"],
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime$6.jsxDEV)(Icon, {
						icon: check_default,
						size: 16,
						className: style_module_default["checkbox-selection-icon"],
						"aria-hidden": "true"
					}, void 0, false, {
						fileName: _jsxFileName$6,
						lineNumber: 61,
						columnNumber: 6
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName$6,
					lineNumber: 57,
					columnNumber: 5
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime$6.jsxDEV)(MenuItemContentContext.Provider, {
					value: contentContextValue,
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime$6.jsxDEV)(ItemContent, {
						prefix,
						shortcut,
						shortcutDescriptionId,
						suffix,
						children: contentChildren
					}, void 0, false, {
						fileName: _jsxFileName$6,
						lineNumber: 69,
						columnNumber: 6
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName$6,
					lineNumber: 68,
					columnNumber: 5
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$6,
				lineNumber: 46,
				columnNumber: 4
			}, this);
		});
		try {
			CheckboxItem.__docgenInfo = {
				"description": "Renders a menu item that toggles a setting on or off.",
				"displayName": "CheckboxItem",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/menu/checkbox-item.tsx",
				"methods": [],
				"props": {
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
					"label": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/menu/checkbox-item/MenuCheckboxItem.d.mts",
							"name": "MenuCheckboxItemProps"
						}],
						"description": "Overrides the text label to use when the item is matched during keyboard text navigation.",
						"name": "label",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/menu/checkbox-item/MenuCheckboxItem.d.mts",
							"name": "MenuCheckboxItemProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"defaultChecked": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/menu/checkbox-item/MenuCheckboxItem.d.mts",
							"name": "MenuCheckboxItemProps"
						}],
						"description": "Whether the checkbox item is initially ticked.\n\nTo render a controlled checkbox item, use the `checked` prop instead.",
						"name": "defaultChecked",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/menu/checkbox-item/MenuCheckboxItem.d.mts",
							"name": "MenuCheckboxItemProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"id": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/menu/checkbox-item/MenuCheckboxItem.d.mts",
							"name": "MenuCheckboxItemProps"
						}],
						"description": "@ignore",
						"name": "id",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/menu/checkbox-item/MenuCheckboxItem.d.mts",
							"name": "MenuCheckboxItemProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"onClick": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/menu/checkbox-item/MenuCheckboxItem.d.mts",
							"name": "MenuCheckboxItemProps"
						}],
						"description": "The click handler for the menu item.",
						"name": "onClick",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/menu/checkbox-item/MenuCheckboxItem.d.mts",
							"name": "MenuCheckboxItemProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "((event: BaseUIEvent<MouseEvent<HTMLDivElement, MouseEvent>>) => void)" }
					},
					"disabled": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/menu/checkbox-item/MenuCheckboxItem.d.mts",
							"name": "MenuCheckboxItemProps"
						}],
						"description": "Whether the component should ignore user interaction.",
						"name": "disabled",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/menu/checkbox-item/MenuCheckboxItem.d.mts",
							"name": "MenuCheckboxItemProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"checked": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/menu/checkbox-item/MenuCheckboxItem.d.mts",
							"name": "MenuCheckboxItemProps"
						}],
						"description": "Whether the checkbox item is currently ticked.\n\nTo render an uncontrolled checkbox item, use the `defaultChecked` prop instead.",
						"name": "checked",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/menu/checkbox-item/MenuCheckboxItem.d.mts",
							"name": "MenuCheckboxItemProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"onCheckedChange": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/menu/checkbox-item/MenuCheckboxItem.d.mts",
							"name": "MenuCheckboxItemProps"
						}],
						"description": "Event handler called when the checkbox item is ticked or unticked.",
						"name": "onCheckedChange",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/menu/checkbox-item/MenuCheckboxItem.d.mts",
							"name": "MenuCheckboxItemProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "((checked: boolean, eventDetails: MenuRootChangeEventDetails) => void)" }
					},
					"nativeButton": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/internals/types.d.mts",
							"name": "NonNativeButtonProps"
						}],
						"description": "Whether the component renders a native `<button>` element when replacing it\nvia the `render` prop.\nSet to `true` if the rendered element is a native button.",
						"name": "nativeButton",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/internals/types.d.mts",
							"name": "NonNativeButtonProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"closeOnClick": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/menu/checkbox-item/MenuCheckboxItem.d.mts",
							"name": "MenuCheckboxItemProps"
						}],
						"description": "Whether to close the menu when the item is clicked.",
						"name": "closeOnClick",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/menu/checkbox-item/MenuCheckboxItem.d.mts",
							"name": "MenuCheckboxItemProps"
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
//#region ../packages/ui/src/menu/group.tsx
var import_jsx_dev_runtime$5, _jsxFileName$5, Group;
function init_group() {
	return (init_group = __esmMin((() => {
		init_MenuGroup();
		init_clsx();
		init_react();
		init_context();
		init_style_module();
		import_jsx_dev_runtime$5 = require_jsx_dev_runtime();
		_jsxFileName$5 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/menu/group.tsx";
		Group = (0, import_react.forwardRef)(function MenuGroup$1({ className, ...props }, ref) {
			if (useMenuGroupContext() === "radio-group") throw new Error("Menu.Group: Cannot be nested inside Menu.RadioGroup. Remove Menu.Group and put Menu.GroupLabel and Menu.RadioItem directly inside Menu.RadioGroup.");
			return /* @__PURE__ */ (0, import_jsx_dev_runtime$5.jsxDEV)(MenuGroupContext.Provider, {
				value: "group",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime$5.jsxDEV)(MenuGroup, {
					ref,
					className: clsx(style_module_default.group, className),
					...props
				}, void 0, false, {
					fileName: _jsxFileName$5,
					lineNumber: 30,
					columnNumber: 4
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName$5,
				lineNumber: 29,
				columnNumber: 3
			}, this);
		});
		try {
			Group.__docgenInfo = {
				"description": "Groups related menu items with a corresponding label.\n\nUse `Menu.RadioGroup` instead for radio items. Do not nest `Menu.Group` and\n`Menu.RadioGroup` within each other in the same menu. They can be siblings.",
				"displayName": "Group",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/menu/group.tsx",
				"methods": [],
				"props": {
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
					"children": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/menu/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The content to be rendered inside the group.",
						"name": "children",
						"required": false,
						"tags": {},
						"type": { "name": "ReactNode" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/ui/src/menu/group-label.tsx
var import_jsx_dev_runtime$4, _jsxFileName$4, GroupLabel;
function init_group_label() {
	return (init_group_label = __esmMin((() => {
		init_MenuGroupLabel();
		init_clsx();
		init_react();
		init_style_module();
		import_jsx_dev_runtime$4 = require_jsx_dev_runtime();
		_jsxFileName$4 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/menu/group-label.tsx";
		GroupLabel = (0, import_react.forwardRef)(function MenuGroupLabel$1({ className, ...props }, ref) {
			return /* @__PURE__ */ (0, import_jsx_dev_runtime$4.jsxDEV)(MenuGroupLabel, {
				ref,
				className: clsx(style_module_default["group-label"], className),
				...props
			}, void 0, false, {
				fileName: _jsxFileName$4,
				lineNumber: 16,
				columnNumber: 4
			}, this);
		});
		try {
			GroupLabel.__docgenInfo = {
				"description": "Renders an accessible label for a menu group.\n\nPlace it inside the `Menu.Group` or `Menu.RadioGroup` it labels. A label in\nan outer group does not label an inner group.",
				"displayName": "GroupLabel",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/menu/group-label.tsx",
				"methods": [],
				"props": {
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
					"children": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/menu/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The content to be rendered inside the group label.",
						"name": "children",
						"required": false,
						"tags": {},
						"type": { "name": "ReactNode" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/ui/src/menu/prefix-icon.tsx
var import_jsx_dev_runtime$3, _jsxFileName$3, PrefixIcon;
function init_prefix_icon() {
	return (init_prefix_icon = __esmMin((() => {
		init_clsx();
		init_react();
		init_icon();
		init_style_module();
		import_jsx_dev_runtime$3 = require_jsx_dev_runtime();
		_jsxFileName$3 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/menu/prefix-icon.tsx";
		PrefixIcon = (0, import_react.forwardRef)(function MenuPrefixIcon({ className, size = 16, style, ...props }, ref) {
			return /* @__PURE__ */ (0, import_jsx_dev_runtime$3.jsxDEV)(Icon, {
				...props,
				ref,
				size,
				className: clsx(style_module_default["prefix-icon"], className),
				style: {
					...style,
					"--_wp-ui-menu-prefix-icon-size": `${size}px`
				}
			}, void 0, false, {
				fileName: _jsxFileName$3,
				lineNumber: 23,
				columnNumber: 4
			}, this);
		});
		PrefixIcon.displayName = "Menu.PrefixIcon";
		try {
			PrefixIcon.__docgenInfo = {
				"description": "Renders an icon before a menu item label. Keep the default 16px size for\nconsistency. Use familiar icons to help users recognize actions or give\na key action useful prominence.\n\nPrefer icons on every item in a group, or none. If only one item needs an\nicon, reconsider its grouping. Prefer omitting it over adding unnecessary\nicons to the other items. Mixed icon usage is supported.\n\nMake the action clear in its label. Avoid combining a prefix icon and a\ndescription in the same item.",
				"displayName": "Menu.PrefixIcon",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/menu/prefix-icon.tsx",
				"methods": [],
				"props": {
					"size": {
						"defaultValue": { "value": "16" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/icon/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The size (width and height) of the icon.",
						"name": "size",
						"required": false,
						"tags": {},
						"type": { "name": "number" }
					},
					"icon": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/icon/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The icon to render, which must be an svg element or an `SVG` from `@wordpress/primitives`.\n\nIn most cases, you should use an icon from\n[the `@wordpress/icons` package](https://wordpress.github.io/gutenberg/?path=/story/icons-icon--library).\n\nWhen using `@wordpress/icons`, only version 15.0.0 or later is supported.\nFor custom SVGs, use `currentColor` for any fill or stroke that should\nfollow the surrounding text color.",
						"name": "icon",
						"required": true,
						"tags": {},
						"type": { "name": "ReactElement<SVGProps<SVGSVGElement>, string | JSXElementConstructor<any>>" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/ui/src/menu/radio-group.tsx
var import_jsx_dev_runtime$2, _jsxFileName$2, RadioGroup;
function init_radio_group() {
	return (init_radio_group = __esmMin((() => {
		init_MenuRadioGroup();
		init_clsx();
		init_react();
		init_context();
		init_style_module();
		import_jsx_dev_runtime$2 = require_jsx_dev_runtime();
		_jsxFileName$2 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/menu/radio-group.tsx";
		RadioGroup = (0, import_react.forwardRef)(function MenuRadioGroup$1({ className, ...props }, ref) {
			if (useMenuGroupContext() === "group") throw new Error("Menu.RadioGroup: Cannot be nested inside Menu.Group. Move Menu.RadioGroup outside Menu.Group and put its Menu.GroupLabel inside Menu.RadioGroup.");
			return /* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)(MenuGroupContext.Provider, {
				value: "radio-group",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)(MenuRadioGroup, {
					ref,
					className: clsx(style_module_default["radio-group"], className),
					...props
				}, void 0, false, {
					fileName: _jsxFileName$2,
					lineNumber: 28,
					columnNumber: 5
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 27,
				columnNumber: 4
			}, this);
		});
		try {
			RadioGroup.__docgenInfo = {
				"description": "Groups related radio menu items.\n\nPut `Menu.GroupLabel` inside this component to label the radio group.\nDo not wrap it in `Menu.Group` or put `Menu.Group` inside it.",
				"displayName": "RadioGroup",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/menu/radio-group.tsx",
				"methods": [],
				"props": {
					"defaultValue": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/menu/radio-group/MenuRadioGroup.d.mts",
							"name": "MenuRadioGroupProps"
						}],
						"description": "The uncontrolled value of the radio item that should be initially selected.\n\nTo render a controlled radio group, use the `value` prop instead.",
						"name": "defaultValue",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/menu/radio-group/MenuRadioGroup.d.mts",
							"name": "MenuRadioGroupProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "any" }
					},
					"disabled": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/menu/radio-group/MenuRadioGroup.d.mts",
							"name": "MenuRadioGroupProps"
						}],
						"description": "Whether the component should ignore user interaction.",
						"name": "disabled",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/menu/radio-group/MenuRadioGroup.d.mts",
							"name": "MenuRadioGroupProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"value": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/menu/radio-group/MenuRadioGroup.d.mts",
							"name": "MenuRadioGroupProps"
						}],
						"description": "The controlled value of the radio item that should be currently selected.\n\nTo render an uncontrolled radio group, use the `defaultValue` prop instead.",
						"name": "value",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/menu/radio-group/MenuRadioGroup.d.mts",
							"name": "MenuRadioGroupProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "any" }
					},
					"onValueChange": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/menu/radio-group/MenuRadioGroup.d.mts",
							"name": "MenuRadioGroupProps"
						}],
						"description": "Function called when the selected value changes.",
						"name": "onValueChange",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/menu/radio-group/MenuRadioGroup.d.mts",
							"name": "MenuRadioGroupProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "((value: any, eventDetails: MenuRootChangeEventDetails) => void)" }
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
					"children": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/menu/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The radio menu items in the group.",
						"name": "children",
						"required": false,
						"tags": {},
						"type": { "name": "ReactNode" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/ui/src/menu/radio-item.tsx
var import_jsx_dev_runtime$1, _jsxFileName$1, radioCheck, RadioItem;
function init_radio_item() {
	return (init_radio_item = __esmMin((() => {
		init_MenuRadioItem(), init_MenuRadioItemIndicator();
		init_clsx();
		init_react();
		init_svg();
		init_icon();
		init_global_css_defense_module();
		init_resets_module();
		init_style_module();
		init_context();
		init_item();
		import_jsx_dev_runtime$1 = require_jsx_dev_runtime();
		_jsxFileName$1 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/menu/radio-item.tsx";
		radioCheck = /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(SVG, {
			xmlns: "http://www.w3.org/2000/svg",
			viewBox: "0 0 24 24",
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(Circle, {
				cx: 12,
				cy: 12,
				r: 3
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 15,
				columnNumber: 3
			}, void 0)
		}, void 0, false, {
			fileName: _jsxFileName$1,
			lineNumber: 14,
			columnNumber: 2
		}, void 0);
		RadioItem = (0, import_react.forwardRef)(function MenuRadioItem$1({ children, className, prefix, shortcut, suffix, "aria-describedby": ariaDescribedBy, "aria-keyshortcuts": ariaKeyShortcuts, "aria-label": ariaLabel, "aria-labelledby": ariaLabelledBy, ...props }, ref) {
			const { contentChildren, contentContextValue, itemAriaProps, shortcutDescriptionId } = useItemContent(children, {
				"aria-describedby": ariaDescribedBy,
				"aria-keyshortcuts": ariaKeyShortcuts,
				"aria-label": ariaLabel,
				"aria-labelledby": ariaLabelledBy,
				shortcut
			});
			return /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(MenuRadioItem, {
				ref,
				...itemAriaProps,
				className: clsx(global_css_defense_module_default.div, resets_module_default["box-sizing"], style_module_default.item, className),
				...props,
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(MenuRadioItemIndicator, {
					keepMounted: true,
					className: style_module_default["item-selection-indicator"],
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(Icon, {
						icon: radioCheck,
						className: style_module_default["radio-selection-icon"],
						"aria-hidden": "true"
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 67,
						columnNumber: 6
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 63,
					columnNumber: 5
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(MenuItemContentContext.Provider, {
					value: contentContextValue,
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(ItemContent, {
						prefix,
						shortcut,
						shortcutDescriptionId,
						suffix,
						children: contentChildren
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 74,
						columnNumber: 6
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 73,
					columnNumber: 5
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$1,
				lineNumber: 52,
				columnNumber: 4
			}, this);
		});
		try {
			RadioItem.__docgenInfo = {
				"description": "Renders a menu item that works like a radio button in a group.",
				"displayName": "RadioItem",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/menu/radio-item.tsx",
				"methods": [],
				"props": {
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
					"label": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/menu/radio-item/MenuRadioItem.d.mts",
							"name": "MenuRadioItemProps"
						}],
						"description": "Overrides the text label to use when the item is matched during keyboard text navigation.",
						"name": "label",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/menu/radio-item/MenuRadioItem.d.mts",
							"name": "MenuRadioItemProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"id": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/menu/radio-item/MenuRadioItem.d.mts",
							"name": "MenuRadioItemProps"
						}],
						"description": "@ignore",
						"name": "id",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/menu/radio-item/MenuRadioItem.d.mts",
							"name": "MenuRadioItemProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"onClick": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/menu/radio-item/MenuRadioItem.d.mts",
							"name": "MenuRadioItemProps"
						}],
						"description": "The click handler for the menu item.",
						"name": "onClick",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/menu/radio-item/MenuRadioItem.d.mts",
							"name": "MenuRadioItemProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "((event: BaseUIEvent<MouseEvent<HTMLDivElement, MouseEvent>>) => void)" }
					},
					"disabled": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/menu/radio-item/MenuRadioItem.d.mts",
							"name": "MenuRadioItemProps"
						}],
						"description": "Whether the component should ignore user interaction.",
						"name": "disabled",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/menu/radio-item/MenuRadioItem.d.mts",
							"name": "MenuRadioItemProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"value": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/menu/radio-item/MenuRadioItem.d.mts",
							"name": "MenuRadioItemProps"
						}],
						"description": "Value of the radio item.\nThis is the value that will be set in the MenuRadioGroup when the item is selected.",
						"name": "value",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/menu/radio-item/MenuRadioItem.d.mts",
							"name": "MenuRadioItemProps"
						},
						"required": true,
						"tags": {},
						"type": { "name": "any" }
					},
					"nativeButton": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/internals/types.d.mts",
							"name": "NonNativeButtonProps"
						}],
						"description": "Whether the component renders a native `<button>` element when replacing it\nvia the `render` prop.\nSet to `true` if the rendered element is a native button.",
						"name": "nativeButton",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/internals/types.d.mts",
							"name": "NonNativeButtonProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"closeOnClick": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/menu/radio-item/MenuRadioItem.d.mts",
							"name": "MenuRadioItemProps"
						}],
						"description": "Whether to close the menu when the item is clicked.",
						"name": "closeOnClick",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/menu/radio-item/MenuRadioItem.d.mts",
							"name": "MenuRadioItemProps"
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
//#region ../packages/ui/src/menu/separator.tsx
var import_jsx_dev_runtime, _jsxFileName, Separator;
function init_separator() {
	return (init_separator = __esmMin((() => {
		init_Separator();
		init_clsx();
		init_react();
		init_style_module();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/menu/separator.tsx";
		Separator = (0, import_react.forwardRef)(function MenuSeparator({ className, ...props }, ref) {
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Separator$1, {
				ref,
				className: clsx(style_module_default.separator, className),
				...props
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 13,
				columnNumber: 4
			}, this);
		});
		try {
			Separator.__docgenInfo = {
				"description": "Renders a visual and semantic separator between menu items.",
				"displayName": "Separator",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/menu/separator.tsx",
				"methods": [],
				"props": {
					"orientation": {
						"defaultValue": { "value": "'horizontal'" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/separator/Separator.d.mts",
							"name": "SeparatorProps"
						}],
						"description": "The orientation of the separator.",
						"name": "orientation",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/separator/Separator.d.mts",
							"name": "SeparatorProps"
						},
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "Orientation",
							"value": [{ "value": "\"horizontal\"" }, { "value": "\"vertical\"" }]
						}
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
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
export { RadioGroup as a, init_prefix_icon as c, Group as d, init_group as f, init_radio_item as i, GroupLabel as l, init_checkbox_item as m, init_separator as n, init_radio_group as o, CheckboxItem as p, RadioItem as r, PrefixIcon as s, Separator as t, init_group_label as u };
