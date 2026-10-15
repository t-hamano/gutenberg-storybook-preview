import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as __, t as init_build_module } from "./build-module-v04us4E2.js";
import { o as clsx, s as init_clsx } from "./iframe-D4D-SsYo.js";
import { a as mergeProps, r as init_mergeProps } from "./useRenderElement-QwAlaybP.js";
import { C as SelectRoot, S as init_SelectTrigger, _ as SelectPortal, a as SelectGroup, b as init_SelectValue, c as init_SelectItemText, d as SelectList, f as init_SelectList, g as init_SelectPositioner, h as SelectPositioner, i as init_SelectGroupLabel, l as SelectItem, m as init_SelectPopup, n as init_SelectSeparator, o as init_SelectGroup, p as SelectPopup, r as SelectGroupLabel, s as SelectItemText, t as SelectSeparator, u as init_SelectItem, v as init_SelectPortal, w as init_SelectRoot, x as SelectTrigger, y as SelectValue } from "./SelectSeparator-COWvomso.js";
import { t as check_default } from "./check-BrSqqlF_.js";
import { t as chevron_down_default } from "./chevron-down-BHqt2Nym.js";
import { a as init_render_slot_with_children, i as init_wp_compat_overlay_slot, n as init_direction_provider, o as renderSlotWithChildren, r as getWpCompatOverlaySlot, t as DirectionProvider } from "./direction-provider-BY5d0O1J.js";
import { n as resets_module_default, t as init_resets_module } from "./resets.module-CJil9Bz6.js";
import { n as init_focus_module, t as focus_module_default } from "./focus.module-CJgaYHb1.js";
import { n as init_global_css_defense_module, t as global_css_defense_module_default } from "./global-css-defense.module-CSCRyOGP.js";
import { n as init_icon, t as Icon } from "./icon-DD-nOZ1R.js";
import { n as init_text, t as Text } from "./text-7MhcSnkB.js";
import { i as useItemContent, n as init_constants, r as init_item_content, t as ITEM_POPUP_POSITIONER_PROPS } from "./constants-tht6eaee.js";
import { n as usePopupPointerHighlight, t as init_use_popup_pointer_highlight } from "./use-popup-pointer-highlight-CVOQn-QT.js";
import { i as item_popup_module_default, n as init_item_popup, r as init_item_popup_module, t as getItemPopupWidthClassName } from "./item-popup-BvXMbNhU.js";
import { n as init_input_layout, t as InputLayout } from "./input-layout-D9fKXny2.js";
import { n as select_trigger_module_default, t as init_select_trigger_module } from "./select-trigger.module-CuMYWVHn.js";
import { r as init_build_module$1 } from "./library.story-DawnfKTW.js";
//#region ../packages/ui/src/form/primitives/select/group.tsx
var import_jsx_dev_runtime$10, _jsxFileName$10, Group;
function init_group() {
	return (init_group = __esmMin((() => {
		init_SelectGroup();
		init_clsx();
		init_react();
		init_item_popup_module();
		import_jsx_dev_runtime$10 = require_jsx_dev_runtime();
		_jsxFileName$10 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/primitives/select/group.tsx";
		Group = (0, import_react.forwardRef)(function UnforwardedGroup({ className, children, ...restProps }, ref) {
			return /* @__PURE__ */ (0, import_jsx_dev_runtime$10.jsxDEV)(SelectGroup, {
				className: clsx(item_popup_module_default.group, className),
				ref,
				...restProps,
				children
			}, void 0, false, {
				fileName: _jsxFileName$10,
				lineNumber: 14,
				columnNumber: 4
			}, this);
		});
		try {
			Group.__docgenInfo = {
				"description": "Groups related items together with an associated label rendered by\n`Select.GroupLabel`.",
				"displayName": "Group",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/primitives/select/group.tsx",
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
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/ui/src/form/primitives/select/group-label.tsx
var import_jsx_dev_runtime$9, _jsxFileName$9, GroupLabel;
function init_group_label() {
	return (init_group_label = __esmMin((() => {
		init_SelectGroupLabel();
		init_clsx();
		init_react();
		init_text();
		init_item_popup_module();
		import_jsx_dev_runtime$9 = require_jsx_dev_runtime();
		_jsxFileName$9 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/primitives/select/group-label.tsx";
		GroupLabel = (0, import_react.forwardRef)(function UnforwardedGroupLabel({ className, children, ...restProps }, ref) {
			return /* @__PURE__ */ (0, import_jsx_dev_runtime$9.jsxDEV)(Text, {
				variant: "heading-sm",
				className: clsx(item_popup_module_default["group-label"], className),
				render: /* @__PURE__ */ (0, import_jsx_dev_runtime$9.jsxDEV)(SelectGroupLabel, {
					ref,
					...restProps
				}, void 0, false, {
					fileName: _jsxFileName$9,
					lineNumber: 24,
					columnNumber: 14
				}, this),
				children
			}, void 0, false, {
				fileName: _jsxFileName$9,
				lineNumber: 18,
				columnNumber: 4
			}, this);
		});
		try {
			GroupLabel.__docgenInfo = {
				"description": "Renders a label for a `Select.Group`, describing the group of items\nit is associated with.",
				"displayName": "GroupLabel",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/primitives/select/group-label.tsx",
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
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/ui/src/form/primitives/select/item-description.tsx
var import_jsx_dev_runtime$8, _jsxFileName$8, ITEM_DESCRIPTION_DIRECT_CHILD, ItemDescription;
function init_item_description() {
	return (init_item_description = __esmMin((() => {
		init_clsx();
		init_react();
		init_text();
		init_item_popup_module();
		import_jsx_dev_runtime$8 = require_jsx_dev_runtime();
		_jsxFileName$8 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/primitives/select/item-description.tsx";
		ITEM_DESCRIPTION_DIRECT_CHILD = Symbol();
		ItemDescription = (0, import_react.forwardRef)(function UnforwardedItemDescription(props, ref) {
			const { className, validationToken, ...restProps } = props;
			if (validationToken !== ITEM_DESCRIPTION_DIRECT_CHILD) throw new Error("Select.ItemDescription: Missing direct select item parent. Render <Select.ItemDescription> as a direct child of <Select.Item>.");
			return /* @__PURE__ */ (0, import_jsx_dev_runtime$8.jsxDEV)(Text, {
				ref,
				variant: "body-sm",
				className: clsx(item_popup_module_default["item-description"], className),
				...restProps
			}, void 0, false, {
				fileName: _jsxFileName$8,
				lineNumber: 34,
				columnNumber: 3
			}, this);
		});
		try {
			ItemDescription.__docgenInfo = {
				"description": "Supplementary content for a select item. Its text contributes to the item's\naccessible description. Use it as a direct child after `Select.ItemLabel`.\nContent should be text or non-interactive inline markup.",
				"displayName": "ItemDescription",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/primitives/select/item-description.tsx",
				"methods": [],
				"props": {
					"children": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/form/primitives/select/types.ts",
							"name": "SelectItemDescriptionProps"
						}],
						"description": "Content that contributes to the select item's accessible description.\nUse as a direct child after `Select.ItemLabel`. Content should be text\nor non-interactive inline markup.",
						"name": "children",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/ui/src/form/primitives/select/types.ts",
							"name": "SelectItemDescriptionProps"
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
//#region ../packages/ui/src/form/primitives/select/item-label.tsx
var import_jsx_dev_runtime$7, _jsxFileName$7, ItemLabel;
function init_item_label() {
	return (init_item_label = __esmMin((() => {
		init_SelectItemText();
		init_clsx();
		init_react();
		init_text();
		init_item_popup_module();
		import_jsx_dev_runtime$7 = require_jsx_dev_runtime();
		_jsxFileName$7 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/primitives/select/item-label.tsx";
		ItemLabel = (0, import_react.forwardRef)(function UnforwardedItemLabel({ children, className, render, ...restProps }, ref) {
			return /* @__PURE__ */ (0, import_jsx_dev_runtime$7.jsxDEV)(Text, {
				ref,
				variant: "body-md",
				render: /* @__PURE__ */ (0, import_jsx_dev_runtime$7.jsxDEV)(SelectItemText, { render }, void 0, false, {
					fileName: _jsxFileName$7,
					lineNumber: 23,
					columnNumber: 14
				}, this),
				className: clsx(item_popup_module_default["item-label"], className),
				...restProps,
				children
			}, void 0, false, {
				fileName: _jsxFileName$7,
				lineNumber: 20,
				columnNumber: 4
			}, this);
		});
		try {
			ItemLabel.__docgenInfo = {
				"description": "The primary label of a select item. Use it as the first direct child of\nevery item. Its content is the item's accessible name. The trigger label\nstill comes from the selected item's `label` (via `items` or an object\nvalue) or from `Select.Trigger` children.",
				"displayName": "ItemLabel",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/primitives/select/item-label.tsx",
				"methods": [],
				"props": {
					"children": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/form/primitives/select/types.ts",
							"name": "SelectItemLabelProps"
						}],
						"description": "The primary label for a select item. Use as the first direct child of\nevery select item. The trigger label still comes from the selected\nitem's `label` or from `Select.Trigger` children.",
						"name": "children",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/ui/src/form/primitives/select/types.ts",
							"name": "SelectItemLabelProps"
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
//#region ../packages/ui/src/form/primitives/select/item.tsx
var import_jsx_dev_runtime$6, _jsxFileName$6, ITEM_CONTENT_COMPONENTS, Item;
function init_item() {
	return (init_item = __esmMin((() => {
		init_SelectItem();
		init_clsx();
		init_react();
		init_build_module$1();
		init_item_content();
		init_global_css_defense_module();
		init_item_popup_module();
		init_resets_module();
		init_icon();
		init_item_description();
		init_item_label();
		import_jsx_dev_runtime$6 = require_jsx_dev_runtime();
		_jsxFileName$6 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/primitives/select/item.tsx";
		ITEM_CONTENT_COMPONENTS = {
			Label: ItemLabel,
			Description: ItemDescription,
			descriptionValidationToken: ITEM_DESCRIPTION_DIRECT_CHILD,
			validationMessage: "Select.ItemLabel must be the first direct child of every select item, followed only by Select.ItemDescription components."
		};
		Item = (0, import_react.forwardRef)(function UnforwardedItem({ className, value, size = "default", children, "aria-describedby": ariaDescribedBy, "aria-label": ariaLabel, "aria-labelledby": ariaLabelledBy, ...restProps }, ref) {
			const { contentChildren, itemAriaProps } = useItemContent(children, ITEM_CONTENT_COMPONENTS, {
				"aria-describedby": ariaDescribedBy,
				"aria-label": ariaLabel,
				"aria-labelledby": ariaLabelledBy
			});
			return /* @__PURE__ */ (0, import_jsx_dev_runtime$6.jsxDEV)(SelectItem, {
				className: clsx(global_css_defense_module_default.div, resets_module_default["box-sizing"], item_popup_module_default.item, size === "small" && item_popup_module_default["is-size-small"], className),
				value,
				ref,
				...itemAriaProps,
				...restProps,
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime$6.jsxDEV)("span", {
					className: item_popup_module_default["item-icon"],
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime$6.jsxDEV)(Icon, {
						icon: check_default,
						className: item_popup_module_default["item-indicator-icon"],
						size: 16
					}, void 0, false, {
						fileName: _jsxFileName$6,
						lineNumber: 64,
						columnNumber: 6
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName$6,
					lineNumber: 63,
					columnNumber: 5
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime$6.jsxDEV)("div", {
					className: item_popup_module_default["item-text"],
					children: contentChildren
				}, void 0, false, {
					fileName: _jsxFileName$6,
					lineNumber: 70,
					columnNumber: 5
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$6,
				lineNumber: 50,
				columnNumber: 4
			}, this);
		});
		try {
			Item.__docgenInfo = {
				"description": "",
				"displayName": "Item",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/primitives/select/item.tsx",
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
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/select/item/SelectItem.d.mts",
							"name": "SelectItemProps"
						}],
						"description": "Specifies the text label to use when the item is matched during keyboard text navigation.\n\nDefaults to the item text content if not provided.",
						"name": "label",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/select/item/SelectItem.d.mts",
							"name": "SelectItemProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"disabled": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/select/item/SelectItem.d.mts",
							"name": "SelectItemProps"
						}],
						"description": "Whether the component should ignore user interaction.",
						"name": "disabled",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/select/item/SelectItem.d.mts",
							"name": "SelectItemProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
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
					"value": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/form/primitives/select/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "A unique value that identifies this select item.",
						"name": "value",
						"required": false,
						"tags": {},
						"type": { "name": "unknown" }
					},
					"size": {
						"defaultValue": { "value": "default" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/form/primitives/select/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The size of the item.",
						"name": "size",
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "\"small\" | \"default\"",
							"value": [{ "value": "\"small\"" }, { "value": "\"default\"" }]
						}
					},
					"children": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/form/primitives/select/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "One direct `Select.ItemLabel`, followed by zero or more direct\n`Select.ItemDescription` components.",
						"name": "children",
						"required": true,
						"tags": {},
						"type": { "name": "SelectItemChildren" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/ui/src/form/primitives/select/portal.tsx
var import_jsx_dev_runtime$5, _jsxFileName$5, Portal;
function init_portal() {
	return (init_portal = __esmMin((() => {
		init_SelectPortal();
		init_react();
		init_wp_compat_overlay_slot();
		import_jsx_dev_runtime$5 = require_jsx_dev_runtime();
		_jsxFileName$5 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/primitives/select/portal.tsx";
		Portal = (0, import_react.forwardRef)(function SelectPortal$1({ container, ...restProps }, ref) {
			return /* @__PURE__ */ (0, import_jsx_dev_runtime$5.jsxDEV)(SelectPortal, {
				container: container === void 0 ? getWpCompatOverlaySlot() : container,
				...restProps,
				ref
			}, void 0, false, {
				fileName: _jsxFileName$5,
				lineNumber: 15,
				columnNumber: 3
			}, this);
		});
		try {
			Portal.__docgenInfo = {
				"description": "Used to apply custom portal behavior to `Select`'s listbox content.\n`container` defaults to the `@wordpress/ui` compat overlay slot.",
				"displayName": "Portal",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/primitives/select/portal.tsx",
				"methods": [],
				"props": {
					"container": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/select/portal/SelectPortal.d.mts",
							"name": "SelectPortalProps"
						}],
						"description": "A parent element to render the portal element into.",
						"name": "container",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/select/portal/SelectPortal.d.mts",
							"name": "SelectPortalProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "HTMLElement | ShadowRoot | RefObject<HTMLElement | ShadowRoot | null> | null" }
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
//#region ../packages/ui/src/form/primitives/select/style.module.css
var positioner, list, style_module_default;
function init_style_module() {
	return (init_style_module = __esmMin((() => {
		positioner = "_positioner_sofex_5";
		list = "_list_sofex_9";
		style_module_default = {
			positioner,
			list
		};
	})))();
}
//#endregion
//#region ../packages/ui/src/form/primitives/select/positioner.tsx
var import_jsx_dev_runtime$4, _jsxFileName$4, Positioner;
function init_positioner() {
	return (init_positioner = __esmMin((() => {
		init_clsx();
		init_SelectPositioner();
		init_react();
		init_resets_module();
		init_item_popup_module();
		init_style_module();
		init_constants();
		import_jsx_dev_runtime$4 = require_jsx_dev_runtime();
		_jsxFileName$4 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/primitives/select/positioner.tsx";
		Positioner = (0, import_react.forwardRef)(function SelectPositioner$1({ className, alignItemWithTrigger = true, ...props }, ref) {
			return /* @__PURE__ */ (0, import_jsx_dev_runtime$4.jsxDEV)(SelectPositioner, {
				...ITEM_POPUP_POSITIONER_PROPS,
				...props,
				alignItemWithTrigger,
				ref,
				className: clsx(resets_module_default["box-sizing"], style_module_default.positioner, alignItemWithTrigger && item_popup_module_default["is-align-item-with-trigger"], className)
			}, void 0, false, {
				fileName: _jsxFileName$4,
				lineNumber: 19,
				columnNumber: 4
			}, this);
		});
		try {
			Positioner.__docgenInfo = {
				"description": "Used to apply custom positioning to `Select`'s listbox content.",
				"displayName": "Positioner",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/primitives/select/positioner.tsx",
				"methods": [],
				"props": {
					"anchor": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/internals/useAnchorPositioning.d.mts",
							"name": "UseAnchorPositioningSharedParameters"
						}],
						"description": "An element to position the popup against.\nBy default, the popup will be positioned against the trigger.",
						"name": "anchor",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/internals/useAnchorPositioning.d.mts",
							"name": "UseAnchorPositioningSharedParameters"
						},
						"required": false,
						"tags": {},
						"type": { "name": "Element | RefObject<Element | null> | VirtualElement | (() => Element | VirtualElement | null) | null" }
					},
					"align": {
						"defaultValue": { "value": "'center'" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/internals/useAnchorPositioning.d.mts",
							"name": "UseAnchorPositioningSharedParameters"
						}],
						"description": "How to align the popup relative to the specified side.",
						"name": "align",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/internals/useAnchorPositioning.d.mts",
							"name": "UseAnchorPositioningSharedParameters"
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
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/internals/useAnchorPositioning.d.mts",
							"name": "UseAnchorPositioningSharedParameters"
						}],
						"description": "Which side of the anchor element to align the popup against.\nMay automatically change to avoid collisions.",
						"name": "side",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/internals/useAnchorPositioning.d.mts",
							"name": "UseAnchorPositioningSharedParameters"
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
					"positionMethod": {
						"defaultValue": { "value": "'absolute'" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/internals/useAnchorPositioning.d.mts",
							"name": "UseAnchorPositioningSharedParameters"
						}],
						"description": "Determines which CSS `position` property to use.",
						"name": "positionMethod",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/internals/useAnchorPositioning.d.mts",
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
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/internals/useAnchorPositioning.d.mts",
							"name": "UseAnchorPositioningSharedParameters"
						}],
						"description": "Distance between the anchor and the popup in pixels.\nAlso accepts a function that returns the distance to read the dimensions of the anchor\nand positioner elements, along with its side and alignment.\n\nThe function takes a `data` object parameter with the following properties:\n- `data.anchor`: the dimensions of the anchor element with properties `width` and `height`.\n- `data.positioner`: the dimensions of the positioner element with properties `width` and `height`.\n- `data.side`: which side of the anchor element the positioner is aligned against.\n- `data.align`: how the positioner is aligned relative to the specified side.\n@example ```jsx\n<Positioner\n  sideOffset={({ side, align, anchor, positioner }) => {\n    return side === 'top' || side === 'bottom'\n      ? anchor.height\n      : anchor.width;\n  }}\n/>\n```",
						"name": "sideOffset",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/internals/useAnchorPositioning.d.mts",
							"name": "UseAnchorPositioningSharedParameters"
						},
						"required": false,
						"tags": {},
						"type": { "name": "number | OffsetFunction" }
					},
					"alignOffset": {
						"defaultValue": { "value": "0" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/internals/useAnchorPositioning.d.mts",
							"name": "UseAnchorPositioningSharedParameters"
						}],
						"description": "Additional offset along the alignment axis in pixels.\nAlso accepts a function that returns the offset to read the dimensions of the anchor\nand positioner elements, along with its side and alignment.\n\nThe function takes a `data` object parameter with the following properties:\n- `data.anchor`: the dimensions of the anchor element with properties `width` and `height`.\n- `data.positioner`: the dimensions of the positioner element with properties `width` and `height`.\n- `data.side`: which side of the anchor element the positioner is aligned against.\n- `data.align`: how the positioner is aligned relative to the specified side.\n@example ```jsx\n<Positioner\n  alignOffset={({ side, align, anchor, positioner }) => {\n    return side === 'top' || side === 'bottom'\n      ? anchor.width\n      : anchor.height;\n  }}\n/>\n```",
						"name": "alignOffset",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/internals/useAnchorPositioning.d.mts",
							"name": "UseAnchorPositioningSharedParameters"
						},
						"required": false,
						"tags": {},
						"type": { "name": "number | OffsetFunction" }
					},
					"collisionBoundary": {
						"defaultValue": { "value": "'clipping-ancestors'" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/internals/useAnchorPositioning.d.mts",
							"name": "UseAnchorPositioningSharedParameters"
						}],
						"description": "An element or a rectangle that delimits the area that the popup is confined to.",
						"name": "collisionBoundary",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/internals/useAnchorPositioning.d.mts",
							"name": "UseAnchorPositioningSharedParameters"
						},
						"required": false,
						"tags": {},
						"type": { "name": "Boundary" }
					},
					"collisionPadding": {
						"defaultValue": { "value": "5" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/internals/useAnchorPositioning.d.mts",
							"name": "UseAnchorPositioningSharedParameters"
						}],
						"description": "Additional space to maintain from the edge of the collision boundary.",
						"name": "collisionPadding",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/internals/useAnchorPositioning.d.mts",
							"name": "UseAnchorPositioningSharedParameters"
						},
						"required": false,
						"tags": {},
						"type": { "name": "Padding" }
					},
					"sticky": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/internals/useAnchorPositioning.d.mts",
							"name": "UseAnchorPositioningSharedParameters"
						}],
						"description": "Whether to maintain the popup in the viewport after\nthe anchor element was scrolled out of view.",
						"name": "sticky",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/internals/useAnchorPositioning.d.mts",
							"name": "UseAnchorPositioningSharedParameters"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"arrowPadding": {
						"defaultValue": { "value": "5" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/internals/useAnchorPositioning.d.mts",
							"name": "UseAnchorPositioningSharedParameters"
						}],
						"description": "Minimum distance to maintain between the arrow and the edges of the popup.\n\nUse it to prevent the arrow element from hanging out of the rounded corners of a popup.",
						"name": "arrowPadding",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/internals/useAnchorPositioning.d.mts",
							"name": "UseAnchorPositioningSharedParameters"
						},
						"required": false,
						"tags": {},
						"type": { "name": "number" }
					},
					"disableAnchorTracking": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/internals/useAnchorPositioning.d.mts",
							"name": "UseAnchorPositioningSharedParameters"
						}],
						"description": "Whether to disable the popup from tracking any layout shift of its positioning anchor.",
						"name": "disableAnchorTracking",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/internals/useAnchorPositioning.d.mts",
							"name": "UseAnchorPositioningSharedParameters"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"collisionAvoidance": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/internals/useAnchorPositioning.d.mts",
							"name": "UseAnchorPositioningSharedParameters"
						}],
						"description": "Determines how to handle collisions when positioning the popup.\n\n`side` controls overflow on the preferred placement axis (`top`/`bottom` or `left`/`right`):\n- `'flip'`: keep the requested side when it fits; otherwise try the opposite side\n  (`top` and `bottom`, or `left` and `right`).\n- `'shift'`: never change side; keep the requested side and move the popup within\n  the clipping boundary so it stays visible.\n- `'none'`: do not correct side-axis overflow.\n\n`align` controls overflow on the alignment axis (`start`/`center`/`end`):\n- `'flip'`: keep side, but swap `start` and `end` when the requested alignment overflows.\n- `'shift'`: keep side and requested alignment, then nudge the popup along the\n  alignment axis to fit.\n- `'none'`: do not correct alignment-axis overflow.\n\n`fallbackAxisSide` controls fallback behavior on the perpendicular axis when the\npreferred axis cannot fit:\n- `'start'`: allow perpendicular fallback and try the logical start side first\n  (`top` before `bottom`, or `left` before `right` in LTR).\n- `'end'`: allow perpendicular fallback and try the logical end side first\n  (`bottom` before `top`, or `right` before `left` in LTR).\n- `'none'`: do not fallback to the perpendicular axis.\n\nWhen `side` is `'shift'`, explicitly setting `align` only supports `'shift'` or `'none'`.\nIf `align` is omitted, it defaults to `'flip'`.\n@example ```jsx\n<Positioner\n  collisionAvoidance={{\n    side: 'shift',\n    align: 'shift',\n    fallbackAxisSide: 'none',\n  }}\n/>\n```",
						"name": "collisionAvoidance",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/internals/useAnchorPositioning.d.mts",
							"name": "UseAnchorPositioningSharedParameters"
						},
						"required": false,
						"tags": {},
						"type": { "name": "CollisionAvoidance" }
					},
					"alignItemWithTrigger": {
						"defaultValue": { "value": "true" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/select/positioner/SelectPositioner.d.mts",
							"name": "SelectPositionerProps"
						}],
						"description": "Whether the positioner overlaps the trigger so the selected item's text is aligned with the trigger's value text. This only applies to mouse input and is automatically disabled if there is not enough space.",
						"name": "alignItemWithTrigger",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/select/positioner/SelectPositioner.d.mts",
							"name": "SelectPositionerProps"
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
//#region ../packages/ui/src/form/primitives/select/popup.tsx
var import_jsx_dev_runtime$3, _jsxFileName$3, Popup;
function init_popup() {
	return (init_popup = __esmMin((() => {
		init_SelectPopup(), init_SelectList();
		init_mergeProps();
		init_clsx();
		init_react();
		init_portal();
		init_positioner();
		init_render_slot_with_children();
		init_item_popup_module();
		init_item_popup();
		init_style_module();
		init_use_popup_pointer_highlight();
		import_jsx_dev_runtime$3 = require_jsx_dev_runtime();
		_jsxFileName$3 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/primitives/select/popup.tsx";
		Popup = (0, import_react.forwardRef)(function UnforwardedPopup({ className, portal, positioner, width, children, ...restProps }, ref) {
			const pointerHighlightProps = usePopupPointerHighlight();
			const popupContent = /* @__PURE__ */ (0, import_jsx_dev_runtime$3.jsxDEV)(SelectPopup, {
				ref,
				className: clsx(item_popup_module_default.popup, getItemPopupWidthClassName(width), className),
				...mergeProps(pointerHighlightProps, restProps),
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime$3.jsxDEV)(SelectList, {
					className: clsx(item_popup_module_default["list-chrome"], style_module_default.list),
					children
				}, void 0, false, {
					fileName: _jsxFileName$3,
					lineNumber: 30,
					columnNumber: 5
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName$3,
				lineNumber: 21,
				columnNumber: 4
			}, this);
			const positionedPopup = renderSlotWithChildren(positioner, /* @__PURE__ */ (0, import_jsx_dev_runtime$3.jsxDEV)(Positioner, {}, void 0, false, {
				fileName: _jsxFileName$3,
				lineNumber: 43,
				columnNumber: 4
			}, this), popupContent);
			return renderSlotWithChildren(portal, /* @__PURE__ */ (0, import_jsx_dev_runtime$3.jsxDEV)(Portal, {}, void 0, false, {
				fileName: _jsxFileName$3,
				lineNumber: 47,
				columnNumber: 42
			}, this), positionedPopup);
		});
		try {
			Popup.__docgenInfo = {
				"description": "",
				"displayName": "Popup",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/primitives/select/popup.tsx",
				"methods": [],
				"props": {
					"finalFocus": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/select/popup/SelectPopup.d.mts",
							"name": "SelectPopupProps"
						}],
						"description": "Determines the element to focus when the select popup is closed.\n\n- `false`: Do not move focus.\n- `true`: Move focus based on the default behavior (trigger or previously focused element).\n- `RefObject`: Move focus to the ref element.\n- `function`: Called with the interaction type (`mouse`, `touch`, `pen`, or `keyboard`).\n  Return an element to focus, `true` to use the default behavior, or `false`/`undefined` to do nothing.",
						"name": "finalFocus",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/select/popup/SelectPopup.d.mts",
							"name": "SelectPopupProps"
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
					},
					"width": {
						"defaultValue": { "value": "'anchor'" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/utils/css/item-popup.ts",
							"name": "TypeLiteral"
						}],
						"description": "Controls how the popup width is constrained relative to its anchor.\n\nFor all presets, the popup is never narrower than its anchor.\n\n- `'anchor'`: Fixed width matching the anchor width.\n- `'content'`: Width grows with item labels between the anchor and available\n  viewport bounds.\n- `'sm'`: Fixed width at the small surface width token (`--wpds-dimension-surface-width-sm`).\n- `'md'`: Fixed width at the medium surface width token (`--wpds-dimension-surface-width-md`).\n- `'lg'`: Fixed width at the large surface width token (`--wpds-dimension-surface-width-lg`).\n- `'available'`: Fixed width at the available viewport width (`--available-width`).",
						"name": "width",
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
							"fileName": "gutenberg-storybook-preview/packages/ui/src/form/primitives/select/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The content to be rendered inside the popup.",
						"name": "children",
						"required": false,
						"tags": {},
						"type": { "name": "ReactNode" }
					},
					"portal": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/form/primitives/select/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Optional portal element, typically `<Select.Portal />` with custom\n`container`. When omitted, `Select.Popup` uses `Select.Portal` with\ndefault props. Do not pass `children` on the portal element; they would\nbe ignored.",
						"name": "portal",
						"required": false,
						"tags": {},
						"type": { "name": "ReactElement<Omit<PortalProps, \"children\">, string | JSXElementConstructor<any>>" }
					},
					"positioner": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/form/primitives/select/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Optional positioner element, typically `<Select.Positioner />` with\ncustom positioning props (`side`, `align`, `sideOffset`, collision\nsettings, etc.). When omitted, `Select.Popup` uses `Select.Positioner`\nwith default props. Do not pass `children` on the positioner element;\nthey would be ignored.",
						"name": "positioner",
						"required": false,
						"tags": {},
						"type": { "name": "ReactElement<Omit<PositionerProps, \"children\">, string | JSXElementConstructor<any>>" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/ui/src/form/primitives/select/root.tsx
/**
* A component that lets users choose one option from a list.
*
* Prefer `SelectControl` when using with a standard label and description.
*
* When using object values, pass an `items` array so `Select.Trigger` can
* auto-resolve the selected item's label. By default, items should use a
* `{ value, label }` shape, or provide `itemToStringLabel` for a custom shape.
*
* Object values are compared with `Object.is` by default, so use the same
* object references for `value` / `defaultValue` and `Select.Item` values, or
* provide `isItemEqualToValue`.
*/
function Root(props) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)(DirectionProvider, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)(SelectRoot, { ...props }, void 0, false, {
		fileName: _jsxFileName$2,
		lineNumber: 21,
		columnNumber: 4
	}, this) }, void 0, false, {
		fileName: _jsxFileName$2,
		lineNumber: 20,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime$2, _jsxFileName$2;
function init_root() {
	return (init_root = __esmMin((() => {
		init_SelectRoot();
		init_direction_provider();
		import_jsx_dev_runtime$2 = require_jsx_dev_runtime();
		_jsxFileName$2 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/primitives/select/root.tsx";
		try {
			Root.__docgenInfo = {
				"description": "A component that lets users choose one option from a list.\n\nPrefer `SelectControl` when using with a standard label and description.\n\nWhen using object values, pass an `items` array so `Select.Trigger` can\nauto-resolve the selected item's label. By default, items should use a\n`{ value, label }` shape, or provide `itemToStringLabel` for a custom shape.\n\nObject values are compared with `Object.is` by default, so use the same\nobject references for `value` / `defaultValue` and `Select.Item` values, or\nprovide `isItemEqualToValue`.",
				"displayName": "Root",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/primitives/select/root.tsx",
				"methods": [],
				"props": {
					"form": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/select/root/SelectRoot.d.mts",
							"name": "SelectRootProps"
						}],
						"description": "Identifies the form that owns the hidden input.\nUseful when the select is rendered outside the form.",
						"name": "form",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/select/root/SelectRoot.d.mts",
							"name": "SelectRootProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"defaultValue": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/select/root/SelectRoot.d.mts",
							"name": "SelectRootProps"
						}],
						"description": "The uncontrolled value of the select when it's initially rendered.\n\nTo render a controlled select, use the `value` prop instead.",
						"name": "defaultValue",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/select/root/SelectRoot.d.mts",
							"name": "SelectRootProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "Value | null" }
					},
					"id": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/select/root/SelectRoot.d.mts",
							"name": "SelectRootProps"
						}],
						"description": "The id of the Select.",
						"name": "id",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/select/root/SelectRoot.d.mts",
							"name": "SelectRootProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"required": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/select/root/SelectRoot.d.mts",
							"name": "SelectRootProps"
						}],
						"description": "Whether the user must choose a value before submitting a form.",
						"name": "required",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/select/root/SelectRoot.d.mts",
							"name": "SelectRootProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"disabled": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/select/root/SelectRoot.d.mts",
							"name": "SelectRootProps"
						}],
						"description": "Whether the component should ignore user interaction.",
						"name": "disabled",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/select/root/SelectRoot.d.mts",
							"name": "SelectRootProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"value": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/select/root/SelectRoot.d.mts",
							"name": "SelectRootProps"
						}],
						"description": "The value of the select. Use when controlled.",
						"name": "value",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/select/root/SelectRoot.d.mts",
							"name": "SelectRootProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "Value | null" }
					},
					"onValueChange": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/select/root/SelectRoot.d.mts",
							"name": "SelectRootProps"
						}],
						"description": "Event handler called when the value of the select changes.",
						"name": "onValueChange",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/select/root/SelectRoot.d.mts",
							"name": "SelectRootProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "((value: Value | null, eventDetails: SelectRootChangeEventDetails) => void)" }
					},
					"name": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/select/root/SelectRoot.d.mts",
							"name": "SelectRootProps"
						}],
						"description": "Identifies the field when a form is submitted.",
						"name": "name",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/select/root/SelectRoot.d.mts",
							"name": "SelectRootProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"inputRef": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/select/root/SelectRoot.d.mts",
							"name": "SelectRootProps"
						}],
						"description": "A ref to access the hidden input element.",
						"name": "inputRef",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/select/root/SelectRoot.d.mts",
							"name": "SelectRootProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "Ref<HTMLInputElement>" }
					},
					"readOnly": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/select/root/SelectRoot.d.mts",
							"name": "SelectRootProps"
						}],
						"description": "Whether the user should be unable to choose a different option from the select popup.",
						"name": "readOnly",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/select/root/SelectRoot.d.mts",
							"name": "SelectRootProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"open": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/select/root/SelectRoot.d.mts",
							"name": "SelectRootProps"
						}],
						"description": "Whether the select popup is currently open.",
						"name": "open",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/select/root/SelectRoot.d.mts",
							"name": "SelectRootProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"defaultOpen": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/select/root/SelectRoot.d.mts",
							"name": "SelectRootProps"
						}],
						"description": "Whether the select popup is initially open.\n\nTo render a controlled select popup, use the `open` prop instead.",
						"name": "defaultOpen",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/select/root/SelectRoot.d.mts",
							"name": "SelectRootProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"onOpenChange": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/select/root/SelectRoot.d.mts",
							"name": "SelectRootProps"
						}],
						"description": "Event handler called when the select popup is opened or closed.",
						"name": "onOpenChange",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/select/root/SelectRoot.d.mts",
							"name": "SelectRootProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "((open: boolean, eventDetails: SelectRootChangeEventDetails) => void)" }
					},
					"autoComplete": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/select/root/SelectRoot.d.mts",
							"name": "SelectRootProps"
						}],
						"description": "Provides a hint to the browser for autofill.\n@see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes/autocomplete",
						"name": "autoComplete",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/select/root/SelectRoot.d.mts",
							"name": "SelectRootProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"highlightItemOnHover": {
						"defaultValue": { "value": "true" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/select/root/SelectRoot.d.mts",
							"name": "SelectRootProps"
						}],
						"description": "Whether moving the pointer over items should highlight them.\nDisabling this prop allows CSS `:hover` to be differentiated from the `:focus` (`data-highlighted`) state.",
						"name": "highlightItemOnHover",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/select/root/SelectRoot.d.mts",
							"name": "SelectRootProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"onOpenChangeComplete": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/select/root/SelectRoot.d.mts",
							"name": "SelectRootProps"
						}],
						"description": "Event handler called after any animations complete when the select popup is opened or closed.",
						"name": "onOpenChangeComplete",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/select/root/SelectRoot.d.mts",
							"name": "SelectRootProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "((open: boolean) => void)" }
					},
					"modal": {
						"defaultValue": { "value": "true" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/select/root/SelectRoot.d.mts",
							"name": "SelectRootProps"
						}],
						"description": "Determines if the select enters a modal state when open.\n- `true`: user interaction is limited to the select: document page scroll is locked and pointer interactions on outside elements are disabled.\n- `false`: user interaction with the rest of the document is allowed.\n\nOn touch devices, a `true` modal blocks outside taps but leaves the page scrollable unless the popup spans nearly the full viewport width, matching native iOS behavior.",
						"name": "modal",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/select/root/SelectRoot.d.mts",
							"name": "SelectRootProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"actionsRef": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/select/root/SelectRoot.d.mts",
							"name": "SelectRootProps"
						}],
						"description": "A ref to imperative actions.\n- `unmount`: Manually unmounts the select.\nCall this after any externally controlled closing animation finishes.",
						"name": "actionsRef",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/select/root/SelectRoot.d.mts",
							"name": "SelectRootProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "RefObject<SelectRootActions | null>" }
					},
					"items": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/select/root/SelectRoot.d.mts",
							"name": "SelectRootProps"
						}],
						"description": "Data structure of the items rendered in the select popup.\nWhen specified, `<Select.Value>` renders the label of the selected item instead of the raw value.\n@example ```tsx\nconst items = {\n  sans: 'Sans-serif',\n  serif: 'Serif',\n  mono: 'Monospace',\n  cursive: 'Cursive',\n};\n<Select.Root items={items} />\n```",
						"name": "items",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/select/root/SelectRoot.d.mts",
							"name": "SelectRootProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "readonly Group<any>[] | Record<string, ReactNode> | readonly { label: ReactNode; value: any; }[]" }
					},
					"itemToStringLabel": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/select/root/SelectRoot.d.mts",
							"name": "SelectRootProps"
						}],
						"description": "When the item values are objects (`<Select.Item value={object}>`), this function converts the object value to a string representation for display in the trigger.\nIf the shape of the object is `{ value, label }`, the label will be used automatically without needing to specify this prop.",
						"name": "itemToStringLabel",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/select/root/SelectRoot.d.mts",
							"name": "SelectRootProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "((itemValue: Value) => string)" }
					},
					"itemToStringValue": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/select/root/SelectRoot.d.mts",
							"name": "SelectRootProps"
						}],
						"description": "When the item values are objects (`<Select.Item value={object}>`), this function converts the object value to a string representation for form submission.\nIf the shape of the object is `{ value, label }`, the value will be used automatically without needing to specify this prop.",
						"name": "itemToStringValue",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/select/root/SelectRoot.d.mts",
							"name": "SelectRootProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "((itemValue: Value) => string)" }
					},
					"isItemEqualToValue": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/select/root/SelectRoot.d.mts",
							"name": "SelectRootProps"
						}],
						"description": "Custom comparison logic used to determine if a select item value matches the current selected value. Useful when item values are objects without matching referentially.\nDefaults to `Object.is` comparison.",
						"name": "isItemEqualToValue",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/select/root/SelectRoot.d.mts",
							"name": "SelectRootProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "((itemValue: Value, value: Value) => boolean)" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/ui/src/form/primitives/select/separator.tsx
var import_jsx_dev_runtime$1, _jsxFileName$1, Separator;
function init_separator() {
	return (init_separator = __esmMin((() => {
		init_SelectSeparator();
		init_clsx();
		init_react();
		init_item_popup_module();
		import_jsx_dev_runtime$1 = require_jsx_dev_runtime();
		_jsxFileName$1 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/primitives/select/separator.tsx";
		Separator = (0, import_react.forwardRef)(function SelectSeparator$1({ className, orientation: _orientation, ...props }, ref) {
			return /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(SelectSeparator, {
				ref,
				className: clsx(item_popup_module_default.separator, className),
				...props
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 20,
				columnNumber: 4
			}, this);
		});
		try {
			Separator.__docgenInfo = {
				"description": "Renders a visual separator between select items or groups.",
				"displayName": "Separator",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/primitives/select/separator.tsx",
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
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/ui/src/form/primitives/select/trigger.tsx
var import_jsx_dev_runtime, _jsxFileName, Trigger;
function init_trigger() {
	return (init_trigger = __esmMin((() => {
		init_SelectTrigger(), init_SelectValue();
		init_clsx();
		init_react();
		init_build_module$1();
		init_build_module();
		init_focus_module();
		init_select_trigger_module();
		init_input_layout();
		init_icon();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/primitives/select/trigger.tsx";
		Trigger = (0, import_react.forwardRef)(function UnforwardedTrigger({ className, size, variant, children, placeholder = __("Select"), ...restProps }, ref) {
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InputLayout, {
				className: clsx(focus_module_default["outset-ring--focus-within-except-active"], select_trigger_module_default["trigger-wrapper"], variant === "minimal" && select_trigger_module_default["is-minimal"], className),
				size,
				isBorderless: variant === "minimal",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectTrigger, {
					...restProps,
					className: clsx(select_trigger_module_default.trigger, variant === "minimal" && select_trigger_module_default["is-minimal"]),
					"data-can-disable-input-layout": true,
					ref,
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectValue, {
						placeholder,
						className: select_trigger_module_default["trigger-value"],
						children
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 46,
						columnNumber: 6
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, {
						className: select_trigger_module_default["trigger-caret"],
						icon: chevron_down_default,
						size: 18
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 52,
						columnNumber: 6
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 36,
					columnNumber: 5
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 25,
				columnNumber: 4
			}, this);
		});
		try {
			Trigger.__docgenInfo = {
				"description": "",
				"displayName": "Trigger",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/primitives/select/trigger.tsx",
				"methods": [],
				"props": {
					"disabled": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/select/trigger/SelectTrigger.d.mts",
							"name": "SelectTriggerProps"
						}],
						"description": "Whether the component should ignore user interaction.",
						"name": "disabled",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/select/trigger/SelectTrigger.d.mts",
							"name": "SelectTriggerProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"nativeButton": {
						"defaultValue": { "value": "true" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/internals/types.d.mts",
							"name": "NativeButtonProps"
						}],
						"description": "Whether the component renders a native `<button>` element when replacing it\nvia the `render` prop.\nSet to `false` if the rendered element is not a button (for example, `<div>`).",
						"name": "nativeButton",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/internals/types.d.mts",
							"name": "NativeButtonProps"
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
					},
					"size": {
						"defaultValue": { "value": "'default'" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/form/primitives/select/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The size of the trigger.",
						"name": "size",
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "\"small\" | \"default\" | \"compact\"",
							"value": [
								{ "value": "\"small\"" },
								{ "value": "\"default\"" },
								{ "value": "\"compact\"" }
							]
						}
					},
					"variant": {
						"defaultValue": { "value": "'default'" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/form/primitives/select/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The style variant of the trigger.",
						"name": "variant",
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "\"default\" | \"minimal\"",
							"value": [{ "value": "\"default\"" }, { "value": "\"minimal\"" }]
						}
					},
					"placeholder": {
						"defaultValue": { "value": "__( 'Select' )" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/form/primitives/select/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Text to show when no value is selected.\nThis is overridden by `children` if specified, or by a null item's label in `items`.",
						"name": "placeholder",
						"required": false,
						"tags": {},
						"type": { "name": "ReactNode" }
					},
					"children": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/form/primitives/select/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "A function that gets called with the current value as an argument.\nUse this to customize the trigger content.\n\nWhen no value is selected, the rendered content inherits the\nplaceholder text color.",
						"name": "children",
						"required": false,
						"tags": {},
						"type": { "name": "ReactNode | ((value: any) => ReactNode)" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
export { init_group as S, ItemDescription as _, Root as a, init_group_label as b, init_popup as c, Portal as d, init_portal as f, init_item_label as g, ItemLabel as h, init_separator as i, Positioner as l, init_item as m, init_trigger as n, init_root as o, Item as p, Separator as r, Popup as s, Trigger as t, init_positioner as u, init_item_description as v, Group as x, GroupLabel as y };
