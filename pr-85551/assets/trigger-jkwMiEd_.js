import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as useMergeRefs, t as init_use_merge_refs } from "./use-merge-refs-BAtuPB1L.js";
import { n as use_isomorphic_layout_effect_default, t as init_use_isomorphic_layout_effect } from "./use-isomorphic-layout-effect-XEh9CxbX.js";
import { a as init_clsx, i as clsx } from "./iframe-UtSZlYID.js";
import { _ as MenuItem, a as init_MenuRoot, c as MenuPositioner, d as init_MenuPortal, f as MenuPopup, l as init_MenuPositioner, n as init_MenuTrigger, p as init_MenuPopup, r as MenuRoot, t as MenuTrigger, u as MenuPortal, v as init_MenuItem } from "./MenuTrigger-ClsOtY5u.js";
import { n as resets_module_default, t as init_resets_module } from "./resets.module-CJil9Bz6.js";
import { n as init_global_css_defense_module, t as global_css_defense_module_default } from "./global-css-defense.module-BTDDc07p.js";
import { a as getWpCompatOverlaySlot, i as renderSlotWithChildren, n as init_direction_provider, o as init_wp_compat_overlay_slot, r as init_render_slot_with_children, t as DirectionProvider } from "./direction-provider-TSr5Tw-F.js";
import { i as useKeyboardShortcutProps, n as KeyboardShortcutDisplay, r as init_keyboard_shortcut, t as KeyboardShortcutDescription } from "./keyboard-shortcut-D95has-V.js";
import { a as init_item_content, i as init_item_popup, n as init_constants, o as useItemContent$1, r as getItemPopupWidthClassName, t as ITEM_POPUP_POSITIONER_PROPS } from "./constants-B7qFOh6e.js";
import { n as init_text, t as Text } from "./text-wjaOyqYP.js";
import { n as useIframeDismissalBridge, t as init_use_iframe_dismissal_bridge } from "./use-iframe-dismissal-bridge-DhsD9KpS.js";
//#region ../packages/ui/src/menu/style.module.css
var positioner, popup, list, group, item, separator, style_module_default;
function init_style_module() {
	return (init_style_module = __esmMin((() => {
		positioner = "_positioner_16iwi_5";
		popup = "_popup_16iwi_9";
		list = "_list_16iwi_54";
		group = "_group_16iwi_70";
		item = "_item_16iwi_40";
		separator = "_separator_16iwi_122";
		style_module_default = {
			positioner,
			popup,
			"item-selection-indicator": "_item-selection-indicator_16iwi_40",
			"is-root": "_is-root_16iwi_46 _dropdown-motion_1u8vo_11",
			"is-submenu": "_is-submenu_16iwi_50 _dropdown-motion--fade-only_1u8vo_12",
			list,
			group,
			"radio-group": "_radio-group_16iwi_71",
			item,
			"item-prefix": "_item-prefix_16iwi_92",
			"group-label": "_group-label_16iwi_106",
			separator,
			"item-content": "_item-content_16iwi_224",
			"checkbox-selection-icon": "_checkbox-selection-icon_16iwi_246",
			"radio-selection-icon": "_radio-selection-icon_16iwi_251",
			"prefix-icon": "_prefix-icon_16iwi_266",
			"has-prefix": "_has-prefix_16iwi_295",
			"item-descriptions": "_item-descriptions_16iwi_304",
			"item-label": "_item-label_16iwi_315",
			"item-description": "_item-description_16iwi_304",
			"item-suffix": "_item-suffix_16iwi_334",
			"item-shortcut": "_item-shortcut_16iwi_343",
			"item-trailing": "_item-trailing_16iwi_349",
			"submenu-chevron": "_submenu-chevron_16iwi_365",
			"external-link-indicator": "_external-link-indicator_16iwi_373"
		};
	})))();
}
//#endregion
//#region ../packages/ui/src/menu/context.tsx
var MenuContext, useMenuContext, MenuGroupContext, useMenuGroupContext, MenuItemContentContext, useMenuItemContentContext;
function init_context() {
	return (init_context = __esmMin((() => {
		init_react();
		MenuContext = (0, import_react.createContext)({ isSubmenu: false });
		useMenuContext = () => (0, import_react.useContext)(MenuContext);
		MenuGroupContext = (0, import_react.createContext)(null);
		useMenuGroupContext = () => (0, import_react.useContext)(MenuGroupContext);
		MenuItemContentContext = (0, import_react.createContext)(null);
		useMenuItemContentContext = () => (0, import_react.useContext)(MenuItemContentContext);
	})))();
}
//#endregion
//#region ../packages/ui/src/menu/item-description.tsx
var import_jsx_dev_runtime$7, _jsxFileName$7, ITEM_DESCRIPTION_DIRECT_CHILD, ItemDescription;
function init_item_description() {
	return (init_item_description = __esmMin((() => {
		init_clsx();
		init_react();
		init_style_module();
		init_text();
		import_jsx_dev_runtime$7 = require_jsx_dev_runtime();
		_jsxFileName$7 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/menu/item-description.tsx";
		ITEM_DESCRIPTION_DIRECT_CHILD = Symbol();
		ItemDescription = (0, import_react.forwardRef)(function MenuItemDescription(props, ref) {
			const { className, id, validationToken, ...restProps } = props;
			if (validationToken !== ITEM_DESCRIPTION_DIRECT_CHILD) throw new Error("Menu.ItemDescription: Missing direct menu item parent. Render <Menu.ItemDescription> as a direct child of a menu item.");
			return /* @__PURE__ */ (0, import_jsx_dev_runtime$7.jsxDEV)(Text, {
				ref,
				variant: "body-sm",
				...restProps,
				id,
				className: clsx(style_module_default["item-description"], className)
			}, void 0, false, {
				fileName: _jsxFileName$7,
				lineNumber: 35,
				columnNumber: 4
			}, this);
		});
		try {
			ItemDescription.__docgenInfo = {
				"description": "Adds supporting text below a menu item label. Use it as a direct child\nafter `Menu.ItemLabel`.\n\nKeep labels clear on their own. Add a brief description only for essential\ncontext the label cannot convey. Avoid combining a description and a prefix\nicon in the same item.",
				"displayName": "ItemDescription",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/menu/item-description.tsx",
				"methods": [],
				"props": {
					"children": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/menu/types.ts",
							"name": "ItemDescriptionProps"
						}],
						"description": "Supporting text below a menu item label. Use as a direct child after\n`Menu.ItemLabel`. Content should be text or non-interactive inline markup.\nKeep descriptions brief and use them only for essential context the label\ncannot convey. Avoid combining a description and a prefix icon in the\nsame item.",
						"name": "children",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/ui/src/menu/types.ts",
							"name": "ItemDescriptionProps"
						},
						"required": true,
						"tags": {},
						"type": { "name": "ReactNode" }
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
//#region ../packages/ui/src/menu/item-label.tsx
var import_jsx_dev_runtime$6, _jsxFileName$6, ItemLabel;
function init_item_label() {
	return (init_item_label = __esmMin((() => {
		init_clsx();
		init_react();
		init_context();
		init_style_module();
		init_text();
		import_jsx_dev_runtime$6 = require_jsx_dev_runtime();
		_jsxFileName$6 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/menu/item-label.tsx";
		ItemLabel = (0, import_react.forwardRef)(function MenuItemLabel({ children, className, id, ...props }, ref) {
			const itemContentContext = useMenuItemContentContext();
			return /* @__PURE__ */ (0, import_jsx_dev_runtime$6.jsxDEV)(Text, {
				ref,
				variant: "body-md",
				...props,
				id: id ?? itemContentContext?.labelId,
				className: clsx(style_module_default["item-label"], className),
				children: [children, itemContentContext?.labelTrailing]
			}, void 0, true, {
				fileName: _jsxFileName$6,
				lineNumber: 17,
				columnNumber: 4
			}, this);
		});
		try {
			ItemLabel.__docgenInfo = {
				"description": "Renders the primary label within a menu item. Use it as the first direct\nchild of every item.",
				"displayName": "ItemLabel",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/menu/item-label.tsx",
				"methods": [],
				"props": {
					"children": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/menu/types.ts",
							"name": "ItemLabelProps"
						}],
						"description": "The primary label for a menu item. Use as the first direct child of every\nmenu item. Keep labels short, clear, and understandable on their own.",
						"name": "children",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/ui/src/menu/types.ts",
							"name": "ItemLabelProps"
						},
						"required": true,
						"tags": {},
						"type": { "name": "ReactNode" }
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
//#region ../packages/ui/src/menu/item.tsx
function useItemContent(children, { "aria-describedby": ariaDescribedBy, "aria-keyshortcuts": ariaKeyShortcuts, "aria-label": ariaLabel, "aria-labelledby": ariaLabelledBy, labelTrailing, shortcut }) {
	const { contentChildren, resolvedLabelId, itemAriaProps } = useItemContent$1(children, ITEM_CONTENT_COMPONENTS, {
		"aria-describedby": ariaDescribedBy,
		"aria-label": ariaLabel,
		"aria-labelledby": ariaLabelledBy
	});
	const { descriptionId: shortcutDescriptionId, targetProps: shortcutAriaProps } = useKeyboardShortcutProps({
		"aria-describedby": itemAriaProps["aria-describedby"],
		"aria-keyshortcuts": ariaKeyShortcuts,
		shortcut
	});
	return {
		contentChildren,
		contentContextValue: {
			labelId: resolvedLabelId,
			labelTrailing
		},
		itemAriaProps: {
			...shortcutAriaProps,
			"aria-label": itemAriaProps["aria-label"],
			"aria-labelledby": itemAriaProps["aria-labelledby"]
		},
		shortcutDescriptionId
	};
}
function ItemContent({ children, prefix, shortcut, shortcutDescriptionId, suffix, trailing }) {
	const hasPrefix = import_react.Children.toArray(prefix).some((child) => child !== "");
	const hasSuffix = import_react.Children.toArray(suffix).some((child) => child !== "");
	const hasTrailing = import_react.Children.toArray(trailing).some((child) => child !== "");
	const [label, ...descriptions] = import_react.Children.toArray(children);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$5.jsxDEV)(import_jsx_dev_runtime$5.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_dev_runtime$5.jsxDEV)("span", {
			className: clsx(style_module_default["item-content"], hasPrefix && style_module_default["has-prefix"]),
			children: [
				label,
				hasSuffix && /* @__PURE__ */ (0, import_jsx_dev_runtime$5.jsxDEV)(Text, {
					variant: "body-sm",
					className: style_module_default["item-suffix"],
					children: suffix
				}, void 0, false, {
					fileName: _jsxFileName$5,
					lineNumber: 119,
					columnNumber: 6
				}, this),
				shortcut && /* @__PURE__ */ (0, import_jsx_dev_runtime$5.jsxDEV)(Text, {
					variant: "body-sm",
					className: style_module_default["item-shortcut"],
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime$5.jsxDEV)(KeyboardShortcutDisplay, { shortcut }, void 0, false, {
						fileName: _jsxFileName$5,
						lineNumber: 131,
						columnNumber: 7
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName$5,
					lineNumber: 127,
					columnNumber: 6
				}, this),
				hasTrailing && /* @__PURE__ */ (0, import_jsx_dev_runtime$5.jsxDEV)("span", {
					className: style_module_default["item-trailing"],
					children: trailing
				}, void 0, false, {
					fileName: _jsxFileName$5,
					lineNumber: 135,
					columnNumber: 6
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName$5,
			lineNumber: 111,
			columnNumber: 4
		}, this),
		descriptions.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime$5.jsxDEV)("span", {
			className: style_module_default["item-descriptions"],
			children: descriptions
		}, void 0, false, {
			fileName: _jsxFileName$5,
			lineNumber: 141,
			columnNumber: 5
		}, this),
		hasPrefix && /* @__PURE__ */ (0, import_jsx_dev_runtime$5.jsxDEV)("span", {
			"aria-hidden": "true",
			className: style_module_default["item-prefix"],
			children: prefix
		}, void 0, false, {
			fileName: _jsxFileName$5,
			lineNumber: 146,
			columnNumber: 5
		}, this),
		shortcut && shortcutDescriptionId && /* @__PURE__ */ (0, import_jsx_dev_runtime$5.jsxDEV)(KeyboardShortcutDescription, {
			descriptionId: shortcutDescriptionId,
			shortcut
		}, void 0, false, {
			fileName: _jsxFileName$5,
			lineNumber: 151,
			columnNumber: 5
		}, this)
	] }, void 0, true, {
		fileName: _jsxFileName$5,
		lineNumber: 110,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime$5, _jsxFileName$5, ITEM_CONTENT_COMPONENTS, Item;
function init_item() {
	return (init_item = __esmMin((() => {
		init_MenuItem();
		init_clsx();
		init_react();
		init_global_css_defense_module();
		init_resets_module();
		init_keyboard_shortcut();
		init_item_content();
		init_style_module();
		init_context();
		init_item_description();
		init_item_label();
		init_text();
		import_jsx_dev_runtime$5 = require_jsx_dev_runtime();
		_jsxFileName$5 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/menu/item.tsx";
		ITEM_CONTENT_COMPONENTS = {
			Label: ItemLabel,
			Description: ItemDescription,
			validationMessage: "Menu.ItemLabel must be the first direct child of every menu item, followed only by Menu.ItemDescription components.",
			descriptionValidationToken: ITEM_DESCRIPTION_DIRECT_CHILD
		};
		Item = (0, import_react.forwardRef)(function MenuItem$1({ children, className, prefix, shortcut, suffix, "aria-describedby": ariaDescribedBy, "aria-keyshortcuts": ariaKeyShortcuts, "aria-label": ariaLabel, "aria-labelledby": ariaLabelledBy, ...props }, ref) {
			const { contentChildren, contentContextValue, itemAriaProps, shortcutDescriptionId } = useItemContent(children, {
				"aria-describedby": ariaDescribedBy,
				"aria-keyshortcuts": ariaKeyShortcuts,
				"aria-label": ariaLabel,
				"aria-labelledby": ariaLabelledBy,
				shortcut
			});
			return /* @__PURE__ */ (0, import_jsx_dev_runtime$5.jsxDEV)(MenuItem, {
				ref,
				...itemAriaProps,
				className: clsx(global_css_defense_module_default.div, resets_module_default["box-sizing"], style_module_default.item, className),
				...props,
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime$5.jsxDEV)(MenuItemContentContext.Provider, {
					value: contentContextValue,
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime$5.jsxDEV)(ItemContent, {
						prefix,
						shortcut,
						shortcutDescriptionId,
						suffix,
						children: contentChildren
					}, void 0, false, {
						fileName: _jsxFileName$5,
						lineNumber: 204,
						columnNumber: 5
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName$5,
					lineNumber: 203,
					columnNumber: 4
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName$5,
				lineNumber: 192,
				columnNumber: 3
			}, this);
		});
		try {
			Item.__docgenInfo = {
				"description": "Renders an individual menu item.",
				"displayName": "Item",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/menu/item.tsx",
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
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/menu/item/MenuItem.d.mts",
							"name": "MenuItemProps"
						}],
						"description": "Overrides the text used for keyboard text navigation and filtering.\nFalls back to the rendered text when not provided.",
						"name": "label",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/menu/item/MenuItem.d.mts",
							"name": "MenuItemProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"id": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/menu/item/MenuItem.d.mts",
							"name": "MenuItemProps"
						}],
						"description": "@ignore",
						"name": "id",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/menu/item/MenuItem.d.mts",
							"name": "MenuItemProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"onClick": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/menu/item/MenuItem.d.mts",
							"name": "MenuItemProps"
						}],
						"description": "The click handler for the menu item.",
						"name": "onClick",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/menu/item/MenuItem.d.mts",
							"name": "MenuItemProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "((event: BaseUIEvent<MouseEvent<HTMLDivElement, MouseEvent>>) => void)" }
					},
					"disabled": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/menu/item/MenuItem.d.mts",
							"name": "MenuItemProps"
						}],
						"description": "Whether the component should ignore user interaction.",
						"name": "disabled",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/menu/item/MenuItem.d.mts",
							"name": "MenuItemProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
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
					"closeOnClick": {
						"defaultValue": { "value": "true" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/menu/item/MenuItem.d.mts",
							"name": "MenuItemProps"
						}],
						"description": "Whether to close the menu when the item is clicked.",
						"name": "closeOnClick",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/menu/item/MenuItem.d.mts",
							"name": "MenuItemProps"
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
		try {
			ItemContent.__docgenInfo = {
				"description": "",
				"displayName": "ItemContent",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/menu/item.tsx",
				"methods": [],
				"props": {
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
					"shortcutDescriptionId": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/menu/item.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "shortcutDescriptionId",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"trailing": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/menu/item.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "trailing",
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
//#region ../packages/ui/src/menu/portal.tsx
var import_jsx_dev_runtime$4, _jsxFileName$4, Portal;
function init_portal() {
	return (init_portal = __esmMin((() => {
		init_MenuPortal();
		init_react();
		init_wp_compat_overlay_slot();
		import_jsx_dev_runtime$4 = require_jsx_dev_runtime();
		_jsxFileName$4 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/menu/portal.tsx";
		Portal = (0, import_react.forwardRef)(function MenuPortal$1({ container, ...props }, ref) {
			return /* @__PURE__ */ (0, import_jsx_dev_runtime$4.jsxDEV)(MenuPortal, {
				ref,
				container: container === void 0 ? getWpCompatOverlaySlot() : container,
				...props
			}, void 0, false, {
				fileName: _jsxFileName$4,
				lineNumber: 14,
				columnNumber: 3
			}, this);
		});
		try {
			Portal.__docgenInfo = {
				"description": "Portals the menu popup to the document body by default.",
				"displayName": "Portal",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/menu/portal.tsx",
				"methods": [],
				"props": {
					"container": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/menu/portal/MenuPortal.d.mts",
							"name": "MenuPortalProps"
						}],
						"description": "A parent element to render the portal element into.",
						"name": "container",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/menu/portal/MenuPortal.d.mts",
							"name": "MenuPortalProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "HTMLElement | ShadowRoot | RefObject<HTMLElement | ShadowRoot | null> | null" }
					},
					"keepMounted": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/menu/portal/MenuPortal.d.mts",
							"name": "MenuPortalProps"
						}],
						"description": "Whether to keep the portal mounted in the DOM while the popup is hidden.",
						"name": "keepMounted",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/menu/portal/MenuPortal.d.mts",
							"name": "MenuPortalProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
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
//#region ../packages/ui/src/menu/positioner.tsx
function getSubmenuLabelOffset(positioner, trigger) {
	const popup = positioner?.querySelector(`.${style_module_default.popup}`);
	if (!positioner || !popup) return 0;
	const parentLabel = trigger?.querySelector(`.${style_module_default["item-label"]}`);
	const firstLabel = popup?.querySelector(`.${style_module_default["item-label"]}`);
	if (!trigger || !parentLabel || !firstLabel) {
		const popupStyles = popup.ownerDocument.defaultView?.getComputedStyle(popup);
		if (!popupStyles) return 0;
		return -(parseFloat(popupStyles.paddingTop) + parseFloat(popupStyles.borderTopWidth));
	}
	return parentLabel.getBoundingClientRect().top - trigger.getBoundingClientRect().top - (firstLabel.getBoundingClientRect().top - positioner.getBoundingClientRect().top);
}
var import_jsx_dev_runtime$3, _jsxFileName$3, MENU_SUBMENU_POPUP_POSITIONER_PROPS, Positioner;
function init_positioner() {
	return (init_positioner = __esmMin((() => {
		init_clsx();
		init_MenuPositioner();
		init_react();
		init_use_isomorphic_layout_effect(), init_use_merge_refs();
		init_constants();
		init_resets_module();
		init_style_module();
		init_context();
		import_jsx_dev_runtime$3 = require_jsx_dev_runtime();
		_jsxFileName$3 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/menu/positioner.tsx";
		MENU_SUBMENU_POPUP_POSITIONER_PROPS = {
			side: "inline-end",
			align: "start",
			sideOffset: -4,
			collisionPadding: 12
		};
		Positioner = (0, import_react.forwardRef)(function MenuPositioner$1({ className, ...props }, ref) {
			const { isSubmenu, submenuTriggerRef } = useMenuContext();
			const positionerRef = (0, import_react.useRef)(null);
			const mergedRef = useMergeRefs([ref, positionerRef]);
			const [measuredAnchor, setMeasuredAnchor] = (0, import_react.useState)();
			const lastOffsetRef = (0, import_react.useRef)(0);
			const defaultProps = isSubmenu ? MENU_SUBMENU_POPUP_POSITIONER_PROPS : ITEM_POPUP_POSITIONER_PROPS;
			const alignOffset = (0, import_react.useCallback)((dimensions) => {
				const { side, align } = dimensions;
				if (side === "top" || side === "bottom" || align !== "start") return 0;
				const positioner = positionerRef.current;
				if (!positioner) return 0;
				if (positioner.hidden || positioner.hasAttribute("data-closed")) return lastOffsetRef.current;
				const offset = getSubmenuLabelOffset(positioner, props.anchor ? void 0 : submenuTriggerRef?.current);
				lastOffsetRef.current = offset;
				return offset;
			}, [props.anchor, submenuTriggerRef]);
			use_isomorphic_layout_effect_default(() => {
				if (!isSubmenu || props.anchor || props.alignOffset !== void 0 || props.disableAnchorTracking) return;
				const positioner = positionerRef.current;
				const trigger = submenuTriggerRef?.current;
				const popup = positioner?.querySelector(`.${style_module_default.popup}`);
				const firstLabel = popup?.querySelector(`.${style_module_default["item-label"]}`);
				const ResizeObserverConstructor = positioner?.ownerDocument.defaultView?.ResizeObserver;
				if (!trigger || !firstLabel || !ResizeObserverConstructor) return;
				const observer = new ResizeObserverConstructor(() => {
					if (!positioner || positioner.hidden || positioner.hasAttribute("data-closed") || positioner.dataset.side === "top" || positioner.dataset.side === "bottom" || positioner.dataset.align !== "start") return;
					const nextOffset = getSubmenuLabelOffset(positioner, trigger);
					const previousOffset = lastOffsetRef.current;
					lastOffsetRef.current = nextOffset;
					if (previousOffset !== void 0 && Math.abs(nextOffset - previousOffset) < .01) return;
					setMeasuredAnchor({
						contextElement: trigger,
						getBoundingClientRect: () => trigger.getBoundingClientRect()
					});
				});
				[
					firstLabel,
					firstLabel.closest(`.${style_module_default.item}`),
					popup?.querySelector(`.${style_module_default.list}`),
					trigger.querySelector(`.${style_module_default["item-label"]}`)
				].forEach((element) => {
					if (element) observer.observe(element);
				});
				return () => observer.disconnect();
			}, [
				isSubmenu,
				props.anchor,
				props.alignOffset,
				props.disableAnchorTracking,
				submenuTriggerRef
			]);
			return /* @__PURE__ */ (0, import_jsx_dev_runtime$3.jsxDEV)(MenuPositioner, {
				...defaultProps,
				anchor: isSubmenu ? measuredAnchor : void 0,
				alignOffset: isSubmenu ? alignOffset : void 0,
				...props,
				ref: mergedRef,
				className: clsx(resets_module_default["box-sizing"], style_module_default.positioner, className)
			}, void 0, false, {
				fileName: _jsxFileName$3,
				lineNumber: 182,
				columnNumber: 4
			}, this);
		});
		try {
			Positioner.__docgenInfo = {
				"description": "Used to apply custom positioning to `Menu`'s floating content.",
				"displayName": "Positioner",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/menu/positioner.tsx",
				"methods": [],
				"props": {
					"anchor": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/internals/useAnchorPositioning.d.mts",
							"name": "UseAnchorPositioningSharedParameters"
						}],
						"description": "An element to position the popup against.\nBy default, the popup will be positioned against the trigger.",
						"name": "anchor",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/internals/useAnchorPositioning.d.mts",
							"name": "UseAnchorPositioningSharedParameters"
						},
						"required": false,
						"tags": {},
						"type": { "name": "Element | RefObject<Element | null> | VirtualElement | (() => Element | VirtualElement | null) | null" }
					},
					"align": {
						"defaultValue": { "value": "'center'" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/menu/positioner/MenuPositioner.d.mts",
							"name": "MenuPositionerProps"
						}],
						"description": "How to align the popup relative to the specified side.\n\nSubmenus and menubars default to `'start'`.",
						"name": "align",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/menu/positioner/MenuPositioner.d.mts",
							"name": "MenuPositionerProps"
						},
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "Align",
							"value": [
								{ "value": "\"center\"" },
								{ "value": "\"end\"" },
								{ "value": "\"start\"" }
							]
						}
					},
					"side": {
						"defaultValue": { "value": "'bottom'" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/menu/positioner/MenuPositioner.d.mts",
							"name": "MenuPositionerProps"
						}],
						"description": "Which side of the anchor element to align the popup against.\nMay automatically change to avoid collisions.\n\nSubmenus and vertical menubars default to `'inline-end'`.",
						"name": "side",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/menu/positioner/MenuPositioner.d.mts",
							"name": "MenuPositionerProps"
						},
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "Side",
							"value": [
								{ "value": "\"left\"" },
								{ "value": "\"right\"" },
								{ "value": "\"top\"" },
								{ "value": "\"bottom\"" },
								{ "value": "\"inline-end\"" },
								{ "value": "\"inline-start\"" }
							]
						}
					},
					"sticky": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/internals/useAnchorPositioning.d.mts",
							"name": "UseAnchorPositioningSharedParameters"
						}],
						"description": "Whether to maintain the popup in the viewport after\nthe anchor element was scrolled out of view.",
						"name": "sticky",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/internals/useAnchorPositioning.d.mts",
							"name": "UseAnchorPositioningSharedParameters"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"arrowPadding": {
						"defaultValue": { "value": "5" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/internals/useAnchorPositioning.d.mts",
							"name": "UseAnchorPositioningSharedParameters"
						}],
						"description": "Minimum distance to maintain between the arrow and the edges of the popup.\n\nUse it to prevent the arrow element from hanging out of the rounded corners of a popup.",
						"name": "arrowPadding",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/internals/useAnchorPositioning.d.mts",
							"name": "UseAnchorPositioningSharedParameters"
						},
						"required": false,
						"tags": {},
						"type": { "name": "number" }
					},
					"positionMethod": {
						"defaultValue": { "value": "'absolute'" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/internals/useAnchorPositioning.d.mts",
							"name": "UseAnchorPositioningSharedParameters"
						}],
						"description": "Determines which CSS `position` property to use.",
						"name": "positionMethod",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/internals/useAnchorPositioning.d.mts",
							"name": "UseAnchorPositioningSharedParameters"
						},
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "\"fixed\" | \"absolute\"",
							"value": [{ "value": "\"fixed\"" }, { "value": "\"absolute\"" }]
						}
					},
					"sideOffset": {
						"defaultValue": { "value": "0" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/internals/useAnchorPositioning.d.mts",
							"name": "UseAnchorPositioningSharedParameters"
						}],
						"description": "Distance between the anchor and the popup in pixels.\nAlso accepts a function that returns the distance to read the dimensions of the anchor\nand positioner elements, along with its side and alignment.\n\nThe function takes a `data` object parameter with the following properties:\n- `data.anchor`: the dimensions of the anchor element with properties `width` and `height`.\n- `data.positioner`: the dimensions of the positioner element with properties `width` and `height`.\n- `data.side`: which side of the anchor element the positioner is aligned against.\n- `data.align`: how the positioner is aligned relative to the specified side.\n@example ```jsx\n<Positioner\n  sideOffset={({ side, align, anchor, positioner }) => {\n    return side === 'top' || side === 'bottom'\n      ? anchor.height\n      : anchor.width;\n  }}\n/>\n```",
						"name": "sideOffset",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/internals/useAnchorPositioning.d.mts",
							"name": "UseAnchorPositioningSharedParameters"
						},
						"required": false,
						"tags": {},
						"type": { "name": "number | OffsetFunction" }
					},
					"alignOffset": {
						"defaultValue": { "value": "0" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/internals/useAnchorPositioning.d.mts",
							"name": "UseAnchorPositioningSharedParameters"
						}],
						"description": "Additional offset along the alignment axis in pixels.\nAlso accepts a function that returns the offset to read the dimensions of the anchor\nand positioner elements, along with its side and alignment.\n\nThe function takes a `data` object parameter with the following properties:\n- `data.anchor`: the dimensions of the anchor element with properties `width` and `height`.\n- `data.positioner`: the dimensions of the positioner element with properties `width` and `height`.\n- `data.side`: which side of the anchor element the positioner is aligned against.\n- `data.align`: how the positioner is aligned relative to the specified side.\n@example ```jsx\n<Positioner\n  alignOffset={({ side, align, anchor, positioner }) => {\n    return side === 'top' || side === 'bottom'\n      ? anchor.width\n      : anchor.height;\n  }}\n/>\n```",
						"name": "alignOffset",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/internals/useAnchorPositioning.d.mts",
							"name": "UseAnchorPositioningSharedParameters"
						},
						"required": false,
						"tags": {},
						"type": { "name": "number | OffsetFunction" }
					},
					"collisionBoundary": {
						"defaultValue": { "value": "'clipping-ancestors'" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/internals/useAnchorPositioning.d.mts",
							"name": "UseAnchorPositioningSharedParameters"
						}],
						"description": "An element or a rectangle that delimits the area that the popup is confined to.",
						"name": "collisionBoundary",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/internals/useAnchorPositioning.d.mts",
							"name": "UseAnchorPositioningSharedParameters"
						},
						"required": false,
						"tags": {},
						"type": { "name": "Boundary" }
					},
					"collisionPadding": {
						"defaultValue": { "value": "5" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/internals/useAnchorPositioning.d.mts",
							"name": "UseAnchorPositioningSharedParameters"
						}],
						"description": "Additional space to maintain from the edge of the collision boundary.",
						"name": "collisionPadding",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/internals/useAnchorPositioning.d.mts",
							"name": "UseAnchorPositioningSharedParameters"
						},
						"required": false,
						"tags": {},
						"type": { "name": "Padding" }
					},
					"disableAnchorTracking": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/internals/useAnchorPositioning.d.mts",
							"name": "UseAnchorPositioningSharedParameters"
						}],
						"description": "Whether to disable the popup from tracking any layout shift of its positioning anchor.",
						"name": "disableAnchorTracking",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/internals/useAnchorPositioning.d.mts",
							"name": "UseAnchorPositioningSharedParameters"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"collisionAvoidance": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/internals/useAnchorPositioning.d.mts",
							"name": "UseAnchorPositioningSharedParameters"
						}],
						"description": "Determines how to handle collisions when positioning the popup.\n\n`side` controls overflow on the preferred placement axis (`top`/`bottom` or `left`/`right`):\n- `'flip'`: keep the requested side when it fits; otherwise try the opposite side\n  (`top` and `bottom`, or `left` and `right`).\n- `'shift'`: never change side; keep the requested side and move the popup within\n  the clipping boundary so it stays visible.\n- `'none'`: do not correct side-axis overflow.\n\n`align` controls overflow on the alignment axis (`start`/`center`/`end`):\n- `'flip'`: keep side, but swap `start` and `end` when the requested alignment overflows.\n- `'shift'`: keep side and requested alignment, then nudge the popup along the\n  alignment axis to fit.\n- `'none'`: do not correct alignment-axis overflow.\n\n`fallbackAxisSide` controls fallback behavior on the perpendicular axis when the\npreferred axis cannot fit:\n- `'start'`: allow perpendicular fallback and try the logical start side first\n  (`top` before `bottom`, or `left` before `right` in LTR).\n- `'end'`: allow perpendicular fallback and try the logical end side first\n  (`bottom` before `top`, or `right` before `left` in LTR).\n- `'none'`: do not fallback to the perpendicular axis.\n\nWhen `side` is `'shift'`, explicitly setting `align` only supports `'shift'` or `'none'`.\nIf `align` is omitted, it defaults to `'flip'`.\n@example ```jsx\n<Positioner\n  collisionAvoidance={{\n    side: 'shift',\n    align: 'shift',\n    fallbackAxisSide: 'none',\n  }}\n/>\n```",
						"name": "collisionAvoidance",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/internals/useAnchorPositioning.d.mts",
							"name": "UseAnchorPositioningSharedParameters"
						},
						"required": false,
						"tags": {},
						"type": { "name": "CollisionAvoidance" }
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
//#region ../packages/ui/src/menu/popup.tsx
var import_jsx_dev_runtime$2, _jsxFileName$2, Popup;
function init_popup() {
	return (init_popup = __esmMin((() => {
		init_MenuPopup();
		init_clsx();
		init_react();
		init_render_slot_with_children();
		init_item_popup();
		init_style_module();
		init_portal();
		init_positioner();
		init_context();
		import_jsx_dev_runtime$2 = require_jsx_dev_runtime();
		_jsxFileName$2 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/menu/popup.tsx";
		Popup = (0, import_react.forwardRef)(function MenuPopup$1({ children, className, portal, positioner, width = "sm", ...props }, ref) {
			const { isSubmenu } = useMenuContext();
			const popupContent = /* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)(MenuPopup, {
				ref,
				className: clsx(style_module_default.popup, getItemPopupWidthClassName(width), isSubmenu ? style_module_default["is-submenu"] : style_module_default["is-root"], className),
				...props,
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)("div", {
					className: style_module_default.list,
					children
				}, void 0, false, {
					fileName: _jsxFileName$2,
					lineNumber: 32,
					columnNumber: 4
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 22,
				columnNumber: 3
			}, this);
			const positionedPopup = renderSlotWithChildren(positioner, /* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)(Positioner, {}, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 46,
				columnNumber: 3
			}, this), popupContent);
			return renderSlotWithChildren(portal, /* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)(Portal, {}, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 50,
				columnNumber: 41
			}, this), positionedPopup);
		});
		try {
			Popup.__docgenInfo = {
				"description": "Renders the floating menu popup.",
				"displayName": "Popup",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/menu/popup.tsx",
				"methods": [],
				"props": {
					"width": {
						"defaultValue": { "value": "sm" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/menu/types.ts",
							"name": "PopupProps"
						}],
						"description": "Controls the popup width. All presets respect the menu's minimum width\n(160px by default), maximum width override, and available viewport width.\n\n- `'anchor'`: Width matches the trigger, subject to the menu's bounds.\n- `'content'`: Width grows with content up to the available viewport width.\n- `'sm'`, `'md'`, `'lg'`: Width grows with content up to the corresponding\n  surface width token (`--wpds-dimension-surface-width-*`).\n- `'available'`: Width fills the available viewport width.",
						"name": "width",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/ui/src/menu/types.ts",
							"name": "PopupProps"
						},
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "ItemPopupWidth",
							"value": [
								{ "value": "\"content\"" },
								{ "value": "\"anchor\"" },
								{ "value": "\"sm\"" },
								{ "value": "\"md\"" },
								{ "value": "\"lg\"" },
								{ "value": "\"available\"" }
							]
						}
					},
					"children": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/menu/types.ts",
							"name": "PopupProps"
						}],
						"description": "The content to be rendered inside the menu popup.",
						"name": "children",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/ui/src/menu/types.ts",
							"name": "PopupProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "ReactNode" }
					},
					"portal": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/menu/types.ts",
							"name": "PopupProps"
						}],
						"description": "Optional portal element, typically `<Menu.Portal />` with custom\n`container`. When omitted, `Menu.Popup` uses `Menu.Portal` with default\nprops. Do not pass `children` on the portal element; they would be\nignored.",
						"name": "portal",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/ui/src/menu/types.ts",
							"name": "PopupProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "ReactElement<Omit<PortalProps, \"children\">, string | JSXElementConstructor<any>>" }
					},
					"positioner": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/menu/types.ts",
							"name": "PopupProps"
						}],
						"description": "Optional positioner element, typically `<Menu.Positioner />` with custom\npositioning props (`side`, `align`, `sideOffset`, collision settings,\netc.). When omitted, `Menu.Popup` uses `Menu.Positioner` with default\nprops. Do not pass `children` on the positioner element; they would be\nignored.",
						"name": "positioner",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/ui/src/menu/types.ts",
							"name": "PopupProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "ReactElement<Omit<PositionerProps, \"children\">, string | JSXElementConstructor<any>>" }
					},
					"id": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/menu/popup/MenuPopup.d.mts",
							"name": "MenuPopupProps"
						}],
						"description": "@ignore",
						"name": "id",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/menu/popup/MenuPopup.d.mts",
							"name": "MenuPopupProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"finalFocus": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/menu/popup/MenuPopup.d.mts",
							"name": "MenuPopupProps"
						}],
						"description": "Determines the element to focus when the menu is closed.\n\n- `false`: Do not move focus.\n- `true`: Move focus based on the default behavior (trigger or previously focused element).\n- `RefObject`: Move focus to the ref element.\n- `function`: Called with the interaction type (`mouse`, `touch`, `pen`, or `keyboard`).\n  Return an element to focus, `true` to use the default behavior, or `false`/`undefined` to do nothing.",
						"name": "finalFocus",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/menu/popup/MenuPopup.d.mts",
							"name": "MenuPopupProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean | RefObject<HTMLElement | null> | ((closeType: InteractionType) => boolean | void | HTMLElement | null)" }
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
//#region ../packages/ui/src/menu/root.tsx
/**
* Groups all parts of a menu.
*
* `Menu.Root` manages the open state and provides context for menu triggers,
* popups, and items. Compose it with `Menu.Trigger` and `Menu.Popup` to build
* a menu button, and with `Menu.SubmenuRoot` / `Menu.SubmenuTrigger` to build
* nested menus.
*
* ```jsx
* <Menu.Root>
*   <Menu.Trigger>Open menu</Menu.Trigger>
*   <Menu.Popup>
*     <Menu.Item>
*       <Menu.ItemLabel>Action</Menu.ItemLabel>
*     </Menu.Item>
*   </Menu.Popup>
* </Menu.Root>
* ```
*/
function Root(props) {
	const { onOpenChange } = props;
	const handleOpenChange = (nextOpen, eventDetails) => {
		const trigger = eventDetails.trigger;
		const TriggerElement = trigger?.ownerDocument.defaultView?.HTMLElement;
		const EventTargetElement = trigger?.ownerDocument.defaultView?.Element;
		const activeElementBeforeOpenChange = trigger?.ownerDocument.activeElement;
		const eventTarget = eventDetails.event.target;
		const menuElement = EventTargetElement && eventTarget instanceof EventTargetElement ? eventTarget.closest("[role=\"menu\"]") : null;
		onOpenChange?.(nextOpen, eventDetails);
		if (!nextOpen && eventDetails.reason === "item-press" && !eventDetails.isCanceled && TriggerElement && trigger instanceof TriggerElement && menuElement?.contains(activeElementBeforeOpenChange ?? null) && trigger.ownerDocument.activeElement === activeElementBeforeOpenChange) trigger.focus();
	};
	const iframeDismissalProps = useIframeDismissalBridge({
		actionsRef: props.actionsRef,
		defaultOpen: props.defaultOpen,
		modal: props.modal,
		onOpenChange: handleOpenChange,
		open: props.open
	});
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(DirectionProvider, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(MenuContext.Provider, {
		value: { isSubmenu: false },
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(MenuGroupContext.Provider, {
			value: null,
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(MenuRoot, {
				...props,
				...iframeDismissalProps
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 80,
				columnNumber: 6
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName$1,
			lineNumber: 79,
			columnNumber: 5
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 78,
		columnNumber: 4
	}, this) }, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 77,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime$1, _jsxFileName$1;
function init_root() {
	return (init_root = __esmMin((() => {
		init_MenuRoot();
		init_direction_provider();
		init_context();
		init_use_iframe_dismissal_bridge();
		import_jsx_dev_runtime$1 = require_jsx_dev_runtime();
		_jsxFileName$1 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/menu/root.tsx";
		try {
			Root.__docgenInfo = {
				"description": "Groups all parts of a menu.\n\n`Menu.Root` manages the open state and provides context for menu triggers,\npopups, and items. Compose it with `Menu.Trigger` and `Menu.Popup` to build\na menu button, and with `Menu.SubmenuRoot` / `Menu.SubmenuTrigger` to build\nnested menus.\n\n```jsx\n<Menu.Root>\n  <Menu.Trigger>Open menu</Menu.Trigger>\n  <Menu.Popup>\n    <Menu.Item>\n      <Menu.ItemLabel>Action</Menu.ItemLabel>\n    </Menu.Item>\n  </Menu.Popup>\n</Menu.Root>\n```",
				"displayName": "Root",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/menu/root.tsx",
				"methods": [],
				"props": {
					"children": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/menu/types.ts",
							"name": "RootProps"
						}],
						"description": "The menu subcomponents (`Menu.Trigger`, `Menu.Popup`, etc.).",
						"name": "children",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/ui/src/menu/types.ts",
							"name": "RootProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "ReactNode" }
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
					"onOpenChange": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/menu/root/MenuRoot.d.mts",
							"name": "MenuRootProps"
						}],
						"description": "Event handler called when the menu is opened or closed.",
						"name": "onOpenChange",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/menu/root/MenuRoot.d.mts",
							"name": "MenuRootProps"
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
					"modal": {
						"defaultValue": { "value": "true" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/menu/root/MenuRoot.d.mts",
							"name": "MenuRootProps"
						}],
						"description": "Determines if the menu enters a modal state when open.\n- `true`: user interaction is limited to the menu: document page scroll is locked and pointer interactions on outside elements are disabled.\n- `false`: user interaction with the rest of the document is allowed.\n\nOn touch devices, a `true` modal blocks outside taps but leaves the page scrollable unless the popup spans nearly the full viewport width, matching native iOS behavior.\n\nNested menus ignore this prop, and menus opened by hover are never modal.",
						"name": "modal",
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
					"triggerId": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/menu/root/MenuRoot.d.mts",
							"name": "MenuRootProps"
						}],
						"description": "ID of the trigger that the menu is associated with.\nThis is useful in conjunction with the `open` prop to create a controlled menu.\nThere's no need to specify this prop when the menu is uncontrolled (that is, when the `open` prop is not set).",
						"name": "triggerId",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/menu/root/MenuRoot.d.mts",
							"name": "MenuRootProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "string | null" }
					},
					"defaultTriggerId": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/menu/root/MenuRoot.d.mts",
							"name": "MenuRootProps"
						}],
						"description": "ID of the trigger that the menu is associated with.\nThis is useful in conjunction with the `defaultOpen` prop to create an initially open menu.",
						"name": "defaultTriggerId",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/menu/root/MenuRoot.d.mts",
							"name": "MenuRootProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "string | null" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/ui/src/menu/trigger.tsx
var import_jsx_dev_runtime, _jsxFileName, Trigger;
function init_trigger() {
	return (init_trigger = __esmMin((() => {
		init_MenuTrigger();
		init_react();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/menu/trigger.tsx";
		Trigger = (0, import_react.forwardRef)(function MenuTrigger$1(props, ref) {
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MenuTrigger, {
				ref,
				...props
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 10,
				columnNumber: 10
			}, this);
		});
		try {
			Trigger.__docgenInfo = {
				"description": "Renders the button that opens the menu.",
				"displayName": "Trigger",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/menu/trigger.tsx",
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
					"disabled": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/menu/trigger/MenuTrigger.d.mts",
							"name": "MenuTriggerProps"
						}],
						"description": "Whether the component should ignore user interaction.",
						"name": "disabled",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/menu/trigger/MenuTrigger.d.mts",
							"name": "MenuTriggerProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"nativeButton": {
						"defaultValue": { "value": "true" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/internals/types.d.mts",
							"name": "NativeButtonProps"
						}],
						"description": "Whether the component renders a native `<button>` element when replacing it\nvia the `render` prop.\nSet to `false` if the rendered element is not a button (for example, `<div>`).",
						"name": "nativeButton",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/internals/types.d.mts",
							"name": "NativeButtonProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"delay": {
						"defaultValue": { "value": "100" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/menu/trigger/MenuTrigger.d.mts",
							"name": "MenuTriggerProps"
						}],
						"description": "How long to wait before the menu may be opened on hover. Specified in milliseconds.\n\nRequires the `openOnHover` prop.",
						"name": "delay",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/menu/trigger/MenuTrigger.d.mts",
							"name": "MenuTriggerProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "number" }
					},
					"closeDelay": {
						"defaultValue": { "value": "0" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/menu/trigger/MenuTrigger.d.mts",
							"name": "MenuTriggerProps"
						}],
						"description": "How long to wait before closing the menu that was opened on hover.\nSpecified in milliseconds.\n\nRequires the `openOnHover` prop.",
						"name": "closeDelay",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/menu/trigger/MenuTrigger.d.mts",
							"name": "MenuTriggerProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "number" }
					},
					"openOnHover": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/menu/trigger/MenuTrigger.d.mts",
							"name": "MenuTriggerProps"
						}],
						"description": "Whether the menu should also open when the trigger is hovered.",
						"name": "openOnHover",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/menu/trigger/MenuTrigger.d.mts",
							"name": "MenuTriggerProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"children": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/menu/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The content to be rendered inside the trigger.",
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
export { useMenuContext as C, style_module_default as E, init_context as S, init_style_module as T, ItemDescription as _, Popup as a, MenuGroupContext as b, init_positioner as c, Item as d, ItemContent as f, init_item_label as g, ItemLabel as h, init_root as i, Portal as l, useItemContent as m, init_trigger as n, init_popup as o, init_item as p, Root as r, Positioner as s, Trigger as t, init_portal as u, init_item_description as v, useMenuGroupContext as w, MenuItemContentContext as x, MenuContext as y };
