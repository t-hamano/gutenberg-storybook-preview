import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as __, t as init_build_module } from "./build-module-v04us4E2.js";
import { a as init_clsx, i as clsx } from "./iframe-Dbjzp1_m.js";
import { n as init_MenuLinkItem, t as MenuLinkItem } from "./MenuLinkItem-DMvA7la5.js";
import { n as resets_module_default, t as init_resets_module } from "./resets.module-CJil9Bz6.js";
import { n as init_global_css_defense_module, t as global_css_defense_module_default } from "./global-css-defense.module-BTDDc07p.js";
import { E as style_module_default, S as init_context, T as init_style_module, f as ItemContent, m as useItemContent, p as init_item, x as MenuItemContentContext } from "./trigger-Lo-6kjH5.js";
//#region ../packages/ui/src/menu/link-item.tsx
var import_jsx_dev_runtime, _jsxFileName, LinkItem;
function init_link_item() {
	return (init_link_item = __esmMin((() => {
		init_MenuLinkItem();
		init_clsx();
		init_react();
		init_build_module();
		init_global_css_defense_module();
		init_resets_module();
		init_style_module();
		init_context();
		init_item();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/menu/link-item.tsx";
		LinkItem = (0, import_react.forwardRef)(function MenuLinkItem$1({ children, className, openInNewTab = false, target, prefix, shortcut, suffix, "aria-describedby": ariaDescribedBy, "aria-keyshortcuts": ariaKeyShortcuts, "aria-label": ariaLabel, "aria-labelledby": ariaLabelledBy, rel, ...props }, ref) {
			const externalLinkIndicator = openInNewTab || /^_blank$/i.test(target ?? "") ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
				className: style_module_default["external-link-indicator"],
				role: "img",
				"aria-label": __("(opens in a new tab)")
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 36,
				columnNumber: 3
			}, this) : null;
			const { contentChildren, contentContextValue, itemAriaProps, shortcutDescriptionId } = useItemContent(children, {
				"aria-describedby": ariaDescribedBy,
				"aria-keyshortcuts": ariaKeyShortcuts,
				"aria-label": ariaLabel,
				"aria-labelledby": ariaLabelledBy,
				labelTrailing: externalLinkIndicator,
				shortcut
			});
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MenuLinkItem, {
				ref,
				...props,
				...itemAriaProps,
				rel,
				target: target ?? (openInNewTab ? "_blank" : void 0),
				className: clsx(global_css_defense_module_default.a, resets_module_default["box-sizing"], style_module_default.item, className),
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MenuItemContentContext.Provider, {
					value: contentContextValue,
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ItemContent, {
						prefix,
						shortcut,
						shortcutDescriptionId,
						suffix,
						children: contentChildren
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 74,
						columnNumber: 5
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 73,
					columnNumber: 4
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 60,
				columnNumber: 3
			}, this);
		});
		try {
			LinkItem.__docgenInfo = {
				"description": "Renders a menu item that navigates to a link target.",
				"displayName": "LinkItem",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/menu/link-item.tsx",
				"methods": [],
				"props": {
					"id": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/menu/link-item/MenuLinkItem.d.mts",
							"name": "MenuLinkItemProps"
						}],
						"description": "@ignore",
						"name": "id",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/menu/link-item/MenuLinkItem.d.mts",
							"name": "MenuLinkItemProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"label": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/menu/link-item/MenuLinkItem.d.mts",
							"name": "MenuLinkItemProps"
						}],
						"description": "Overrides the text used for keyboard text navigation and filtering.\nFalls back to the rendered text when not provided.",
						"name": "label",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/menu/link-item/MenuLinkItem.d.mts",
							"name": "MenuLinkItemProps"
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
					"closeOnClick": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/menu/link-item/MenuLinkItem.d.mts",
							"name": "MenuLinkItemProps"
						}],
						"description": "Whether to close the menu when the item is clicked.",
						"name": "closeOnClick",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/menu/link-item/MenuLinkItem.d.mts",
							"name": "MenuLinkItemProps"
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
					"target": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/menu/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Where to open the linked document. `\"_blank\"` also adds the visual\nindicator and accessible new-tab notice.\n\nWhen both `target` and `openInNewTab` are set, `target` determines the\nbrowsing context.",
						"name": "target",
						"required": false,
						"tags": {},
						"type": { "name": "HTMLAttributeAnchorTarget" }
					},
					"openInNewTab": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/menu/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Adds a visual indicator and accessible notice for opening in a new tab.\nDefaults `target` to `\"_blank\"` when no explicit target is set.",
						"name": "openInNewTab",
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
export { init_link_item as n, LinkItem as t };
