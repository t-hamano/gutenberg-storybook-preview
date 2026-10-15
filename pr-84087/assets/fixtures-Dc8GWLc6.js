import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { o as clsx, s as init_clsx } from "./iframe-D4D-SsYo.js";
import { a as mergeProps, r as init_mergeProps } from "./useRenderElement-QwAlaybP.js";
import { S as init_ComboboxInput, _ as ComboboxCollection, c as init_ComboboxPopup, d as ComboboxPortal, f as init_ComboboxPortal, g as init_ComboboxList, h as ComboboxList, i as init_ComboboxItem, l as ComboboxPositioner, n as init_ComboboxEmpty, r as ComboboxItem, s as ComboboxPopup, t as ComboboxEmpty, u as init_ComboboxPositioner, v as init_ComboboxCollection, x as ComboboxInput } from "./ComboboxEmpty-a6JwtoZy.js";
import { a as ComboboxGroup, c as init_ComboboxStatus, i as init_ComboboxGroupLabel, n as useFilteredItems$1, o as init_ComboboxGroup, r as ComboboxGroupLabel, s as ComboboxStatus, t as init_useFilteredItems } from "./useFilteredItems-D0dS1rS0.js";
import { i as init_ComboboxRoot, r as ComboboxRoot } from "./ComboboxValue-5D00nSXL.js";
import { n as init_ComboboxSeparator, t as ComboboxSeparator } from "./ComboboxSeparator-C1LHrTSH.js";
import { n as useRender, t as init_useRender } from "./useRender-CcjNad8x.js";
import { t as check_default } from "./check-BrSqqlF_.js";
import { n as plus_default } from "./plus-9ndJHGzu.js";
import { n as search_default } from "./search-CMBDzVQT.js";
import { a as init_render_slot_with_children, i as init_wp_compat_overlay_slot, n as init_direction_provider, o as renderSlotWithChildren, r as getWpCompatOverlaySlot, t as DirectionProvider } from "./direction-provider-BY5d0O1J.js";
import { n as resets_module_default, t as init_resets_module } from "./resets.module-CJil9Bz6.js";
import { n as init_global_css_defense_module, t as global_css_defense_module_default } from "./global-css-defense.module-CSCRyOGP.js";
import { n as init_icon, t as Icon } from "./icon-DD-nOZ1R.js";
import { n as init_text, t as Text } from "./text-7MhcSnkB.js";
import { i as useItemContent, n as init_constants, r as init_item_content, t as ITEM_POPUP_POSITIONER_PROPS } from "./constants-tht6eaee.js";
import { i as item_popup_module_default, n as init_item_popup, r as init_item_popup_module, t as getItemPopupWidthClassName } from "./item-popup-BvXMbNhU.js";
import { n as init_input$1, t as Input$1 } from "./input-BpwxGqnb.js";
import { n as init_input_layout, t as InputLayout } from "./input-layout-D9fKXny2.js";
import { i as useKeyboardHighlightState, n as init_keyboard_highlight_context, r as useKeyboardHighlight, t as KeyboardHighlightContext } from "./keyboard-highlight-context-BTZ76ETh.js";
import { r as init_build_module } from "./library.story-DawnfKTW.js";
//#region ../packages/ui/src/form/primitives/combobox/style.module.css
var positioner, chip, style_module_default;
function init_style_module() {
	return (init_style_module = __esmMin((() => {
		positioner = "_positioner_1iz0n_5";
		chip = "_chip_1iz0n_9";
		style_module_default = {
			positioner,
			chip,
			"chip-prefix": "_chip-prefix_1iz0n_48",
			"chip-content": "_chip-content_1iz0n_65",
			"chip-remove": "_chip-remove_1iz0n_72"
		};
	})))();
}
//#endregion
//#region ../packages/ui/src/form/primitives/combobox/collection.tsx
function Collection({ children, ...restProps }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$14.jsxDEV)(ComboboxCollection, {
		...restProps,
		children
	}, void 0, false, {
		fileName: _jsxFileName$14,
		lineNumber: 9,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime$14, _jsxFileName$14;
function init_collection() {
	return (init_collection = __esmMin((() => {
		init_ComboboxCollection();
		import_jsx_dev_runtime$14 = require_jsx_dev_runtime();
		_jsxFileName$14 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/primitives/combobox/collection.tsx";
		try {
			Collection.__docgenInfo = {
				"description": "",
				"displayName": "Collection",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/primitives/combobox/collection.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/ui/src/form/primitives/combobox/empty.tsx
var import_jsx_dev_runtime$13, _jsxFileName$13, Empty;
function init_empty() {
	return (init_empty = __esmMin((() => {
		init_ComboboxEmpty();
		init_clsx();
		init_react();
		init_item_popup_module();
		import_jsx_dev_runtime$13 = require_jsx_dev_runtime();
		_jsxFileName$13 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/primitives/combobox/empty.tsx";
		Empty = (0, import_react.forwardRef)(function UnforwardedEmpty({ className, ...restProps }, ref) {
			return /* @__PURE__ */ (0, import_jsx_dev_runtime$13.jsxDEV)(ComboboxEmpty, {
				className: clsx(item_popup_module_default.empty, className),
				ref,
				...restProps
			}, void 0, false, {
				fileName: _jsxFileName$13,
				lineNumber: 10,
				columnNumber: 4
			}, this);
		});
		try {
			Empty.__docgenInfo = {
				"description": "",
				"displayName": "Empty",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/primitives/combobox/empty.tsx",
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
//#region ../packages/ui/src/form/primitives/combobox/group.tsx
var import_jsx_dev_runtime$12, _jsxFileName$12, Group;
function init_group() {
	return (init_group = __esmMin((() => {
		init_ComboboxGroup();
		init_clsx();
		init_react();
		init_item_popup_module();
		import_jsx_dev_runtime$12 = require_jsx_dev_runtime();
		_jsxFileName$12 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/primitives/combobox/group.tsx";
		Group = (0, import_react.forwardRef)(function UnforwardedGroup({ className, children, ...restProps }, ref) {
			return /* @__PURE__ */ (0, import_jsx_dev_runtime$12.jsxDEV)(ComboboxGroup, {
				className: clsx(item_popup_module_default.group, className),
				ref,
				...restProps,
				children
			}, void 0, false, {
				fileName: _jsxFileName$12,
				lineNumber: 15,
				columnNumber: 4
			}, this);
		});
		try {
			Group.__docgenInfo = {
				"description": "Groups related items together with an associated label rendered by\n`Combobox.GroupLabel`. When `items` is provided, child\n`Combobox.Collection` components iterate over them.",
				"displayName": "Group",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/primitives/combobox/group.tsx",
				"methods": [],
				"props": {
					"items": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/combobox/group/ComboboxGroup.d.mts",
							"name": "ComboboxGroupProps"
						}],
						"description": "Items to be rendered within this group.\nWhen provided, child `Collection` components will use these items.",
						"name": "items",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/combobox/group/ComboboxGroup.d.mts",
							"name": "ComboboxGroupProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "readonly any[]" }
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
//#region ../packages/ui/src/form/primitives/combobox/group-label.tsx
var import_jsx_dev_runtime$11, _jsxFileName$11, GroupLabel;
function init_group_label() {
	return (init_group_label = __esmMin((() => {
		init_ComboboxGroupLabel();
		init_clsx();
		init_react();
		init_text();
		init_item_popup_module();
		import_jsx_dev_runtime$11 = require_jsx_dev_runtime();
		_jsxFileName$11 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/primitives/combobox/group-label.tsx";
		GroupLabel = (0, import_react.forwardRef)(function UnforwardedGroupLabel({ className, children, ...restProps }, ref) {
			return /* @__PURE__ */ (0, import_jsx_dev_runtime$11.jsxDEV)(Text, {
				variant: "heading-sm",
				className: clsx(item_popup_module_default["group-label"], className),
				render: /* @__PURE__ */ (0, import_jsx_dev_runtime$11.jsxDEV)(ComboboxGroupLabel, {
					ref,
					...restProps
				}, void 0, false, {
					fileName: _jsxFileName$11,
					lineNumber: 24,
					columnNumber: 14
				}, this),
				children
			}, void 0, false, {
				fileName: _jsxFileName$11,
				lineNumber: 18,
				columnNumber: 4
			}, this);
		});
		try {
			GroupLabel.__docgenInfo = {
				"description": "Renders a label for a `Combobox.Group`, describing the group of items\nit is associated with.",
				"displayName": "GroupLabel",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/primitives/combobox/group-label.tsx",
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
//#region ../packages/ui/src/form/primitives/combobox/input.tsx
var import_jsx_dev_runtime$10, _jsxFileName$10, DEFAULT_RENDER, Input;
function init_input() {
	return (init_input = __esmMin((() => {
		init_ComboboxInput();
		init_mergeProps();
		init_react();
		init_build_module();
		init_icon();
		init_input$1();
		init_input_layout();
		init_keyboard_highlight_context();
		import_jsx_dev_runtime$10 = require_jsx_dev_runtime();
		_jsxFileName$10 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/primitives/combobox/input.tsx";
		DEFAULT_RENDER = (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime$10.jsxDEV)(Input$1, {
			prefix: /* @__PURE__ */ (0, import_jsx_dev_runtime$10.jsxDEV)(InputLayout.Slot, {
				padding: "minimal",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime$10.jsxDEV)(Icon, { icon: search_default }, void 0, false, {
					fileName: _jsxFileName$10,
					lineNumber: 15,
					columnNumber: 5
				}, void 0)
			}, void 0, false, {
				fileName: _jsxFileName$10,
				lineNumber: 14,
				columnNumber: 4
			}, void 0),
			...props
		}, void 0, false, {
			fileName: _jsxFileName$10,
			lineNumber: 12,
			columnNumber: 2
		}, void 0);
		Input = (0, import_react.forwardRef)(function UnforwardedInput({ render = DEFAULT_RENDER, ...restProps }, ref) {
			const { onInputFocusChange, onPointerHighlight } = useKeyboardHighlight();
			return /* @__PURE__ */ (0, import_jsx_dev_runtime$10.jsxDEV)(ComboboxInput, {
				ref,
				render,
				...mergeProps({
					onFocusCapture: () => onInputFocusChange(true),
					onBlurCapture: () => onInputFocusChange(false),
					onPointerDownCapture: onPointerHighlight
				}, restProps)
			}, void 0, false, {
				fileName: _jsxFileName$10,
				lineNumber: 30,
				columnNumber: 4
			}, this);
		});
		try {
			Input.__docgenInfo = {
				"description": "",
				"displayName": "Input",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/primitives/combobox/input.tsx",
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
						"defaultValue": { "value": "( props: ComboboxInputProps ) => (\n	<InputPrimitive\n		prefix={\n			<InputLayout.Slot padding=\"minimal\">\n				<Icon icon={ search } />\n			</InputLayout.Slot>\n		}\n		{ ...props }\n	/>\n)" },
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
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/combobox/input/ComboboxInput.d.mts",
							"name": "ComboboxInputProps"
						}],
						"description": "Whether the component should ignore user interaction.",
						"name": "disabled",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/combobox/input/ComboboxInput.d.mts",
							"name": "ComboboxInputProps"
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
//#region ../packages/ui/src/form/primitives/combobox/item-description.tsx
var import_jsx_dev_runtime$9, _jsxFileName$9, ITEM_DESCRIPTION_DIRECT_CHILD, ForwardedItemDescription;
function init_item_description() {
	return (init_item_description = __esmMin((() => {
		init_clsx();
		init_react();
		init_text();
		init_item_popup_module();
		import_jsx_dev_runtime$9 = require_jsx_dev_runtime();
		_jsxFileName$9 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/primitives/combobox/item-description.tsx";
		ITEM_DESCRIPTION_DIRECT_CHILD = Symbol();
		ForwardedItemDescription = (0, import_react.forwardRef)(function ItemDescription(props, ref) {
			const { className, validationToken, ...restProps } = props;
			if (validationToken !== ITEM_DESCRIPTION_DIRECT_CHILD) throw new Error("ItemDescription: Missing direct item parent. Render ItemDescription as a direct child of Item.");
			return /* @__PURE__ */ (0, import_jsx_dev_runtime$9.jsxDEV)(Text, {
				ref,
				variant: "body-sm",
				className: clsx(item_popup_module_default["item-description"], className),
				...restProps
			}, void 0, false, {
				fileName: _jsxFileName$9,
				lineNumber: 34,
				columnNumber: 3
			}, this);
		});
		try {
			ForwardedItemDescription.__docgenInfo = {
				"description": "Supplementary content for a combobox item. Its text contributes to the\nitem's accessible description. Use it as a direct child after\n`Combobox.ItemLabel`. Content should be text or non-interactive inline markup.",
				"displayName": "ForwardedItemDescription",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/primitives/combobox/item-description.tsx",
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
							"fileName": "gutenberg-storybook-preview/packages/ui/src/form/primitives/combobox/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Content that contributes to the combobox item's accessible description.",
						"name": "children",
						"required": true,
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
//#region ../packages/ui/src/form/primitives/combobox/item-label.tsx
var import_jsx_dev_runtime$8, _jsxFileName$8, ForwardedItemLabel;
function init_item_label() {
	return (init_item_label = __esmMin((() => {
		init_clsx();
		init_react();
		init_text();
		init_item_popup_module();
		import_jsx_dev_runtime$8 = require_jsx_dev_runtime();
		_jsxFileName$8 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/primitives/combobox/item-label.tsx";
		ForwardedItemLabel = (0, import_react.forwardRef)(function ItemLabel({ className, ...restProps }, ref) {
			return /* @__PURE__ */ (0, import_jsx_dev_runtime$8.jsxDEV)(Text, {
				ref,
				variant: "body-md",
				className: clsx(item_popup_module_default["item-label"], className),
				...restProps
			}, void 0, false, {
				fileName: _jsxFileName$8,
				lineNumber: 17,
				columnNumber: 3
			}, this);
		});
		try {
			ForwardedItemLabel.__docgenInfo = {
				"description": "The primary label of a combobox item. Use it as the first direct child of\nevery item. Its content is the item's accessible name. The selected value\nstill uses the item's `label` or the content of `Combobox.Value`.",
				"displayName": "ForwardedItemLabel",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/primitives/combobox/item-label.tsx",
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
							"fileName": "gutenberg-storybook-preview/packages/ui/src/form/primitives/combobox/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The primary label and accessible name of a combobox item.",
						"name": "children",
						"required": true,
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
//#region ../packages/ui/src/form/primitives/combobox/item.tsx
var import_jsx_dev_runtime$7, _jsxFileName$7, ITEM_CONTENT_COMPONENTS, Item;
function init_item() {
	return (init_item = __esmMin((() => {
		init_ComboboxItem();
		init_clsx();
		init_react();
		init_build_module();
		init_icon();
		init_item_content();
		init_global_css_defense_module();
		init_item_popup_module();
		init_resets_module();
		init_item_description();
		init_item_label();
		init_keyboard_highlight_context();
		import_jsx_dev_runtime$7 = require_jsx_dev_runtime();
		_jsxFileName$7 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/primitives/combobox/item.tsx";
		ITEM_CONTENT_COMPONENTS = {
			Label: ForwardedItemLabel,
			Description: ForwardedItemDescription,
			descriptionValidationToken: ITEM_DESCRIPTION_DIRECT_CHILD,
			validationMessage: "Combobox.ItemLabel must be the first direct child of every combobox item, followed only by Combobox.ItemDescription components."
		};
		Item = (0, import_react.forwardRef)(function UnforwardedItem({ className, children, variant = "default", "aria-describedby": ariaDescribedBy, "aria-label": ariaLabel, "aria-labelledby": ariaLabelledBy, ...restProps }, ref) {
			const { keyboardHighlight } = useKeyboardHighlight();
			const { contentChildren, itemAriaProps } = useItemContent(children, ITEM_CONTENT_COMPONENTS, {
				"aria-describedby": ariaDescribedBy,
				"aria-label": ariaLabel,
				"aria-labelledby": ariaLabelledBy
			});
			return /* @__PURE__ */ (0, import_jsx_dev_runtime$7.jsxDEV)(ComboboxItem, {
				"data-keyboard-highlight": keyboardHighlight ? "" : void 0,
				className: clsx(global_css_defense_module_default.div, resets_module_default["box-sizing"], item_popup_module_default.item, className),
				ref,
				...itemAriaProps,
				...restProps,
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime$7.jsxDEV)("span", {
					className: item_popup_module_default["item-icon"],
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime$7.jsxDEV)(Icon, {
						icon: variant === "creatable" ? plus_default : check_default,
						className: clsx(variant !== "creatable" && item_popup_module_default["item-indicator-icon"]),
						size: 16
					}, void 0, false, {
						fileName: _jsxFileName$7,
						lineNumber: 64,
						columnNumber: 6
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName$7,
					lineNumber: 63,
					columnNumber: 5
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime$7.jsxDEV)("div", {
					className: item_popup_module_default["item-text"],
					children: contentChildren
				}, void 0, false, {
					fileName: _jsxFileName$7,
					lineNumber: 73,
					columnNumber: 5
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$7,
				lineNumber: 51,
				columnNumber: 4
			}, this);
		});
		try {
			Item.__docgenInfo = {
				"description": "",
				"displayName": "Item",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/primitives/combobox/item.tsx",
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
					"onClick": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/combobox/item/ComboboxItem.d.mts",
							"name": "ComboboxItemProps"
						}],
						"description": "An optional click handler for the item when selected.\nIt fires when clicking the item with the pointer, as well as when pressing `Enter` with the keyboard if the item is highlighted when the `Input` or `List` element has focus.",
						"name": "onClick",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/combobox/item/ComboboxItem.d.mts",
							"name": "ComboboxItemProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "((event: BaseUIEvent<MouseEvent<HTMLDivElement, MouseEvent>>) => void)" }
					},
					"disabled": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/combobox/item/ComboboxItem.d.mts",
							"name": "ComboboxItemProps"
						}],
						"description": "Whether the component should ignore user interaction.",
						"name": "disabled",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/combobox/item/ComboboxItem.d.mts",
							"name": "ComboboxItemProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"value": {
						"defaultValue": { "value": "null" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/combobox/item/ComboboxItem.d.mts",
							"name": "ComboboxItemProps"
						}],
						"description": "A unique value that identifies this item.",
						"name": "value",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/combobox/item/ComboboxItem.d.mts",
							"name": "ComboboxItemProps"
						},
						"required": false,
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
					"index": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/combobox/item/ComboboxItem.d.mts",
							"name": "ComboboxItemProps"
						}],
						"description": "The index of the item in the list. Improves performance when specified by avoiding the need to calculate the index automatically from the DOM.",
						"name": "index",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/combobox/item/ComboboxItem.d.mts",
							"name": "ComboboxItemProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "number" }
					},
					"children": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/form/primitives/combobox/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "One direct ItemLabel, followed by zero or more ItemDescription components.",
						"name": "children",
						"required": true,
						"tags": {},
						"type": { "name": "ComboboxItemChildren" }
					},
					"variant": {
						"defaultValue": { "value": "default" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/form/primitives/combobox/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The variant of the item.\n\n- `'default'`: A standard item.\n- `'creatable'`: An item that triggers the creation of a new item.",
						"name": "variant",
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "\"default\" | \"creatable\"",
							"value": [{ "value": "\"default\"" }, { "value": "\"creatable\"" }]
						}
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/ui/src/form/primitives/combobox/list.tsx
var import_jsx_dev_runtime$6, _jsxFileName$6, List;
function init_list() {
	return (init_list = __esmMin((() => {
		init_ComboboxList();
		init_mergeProps();
		init_clsx();
		init_react();
		init_item_popup_module();
		init_keyboard_highlight_context();
		import_jsx_dev_runtime$6 = require_jsx_dev_runtime();
		_jsxFileName$6 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/primitives/combobox/list.tsx";
		List = (0, import_react.forwardRef)(function UnforwardedList({ className, ...restProps }, ref) {
			const { onPointerHighlight } = useKeyboardHighlight();
			return /* @__PURE__ */ (0, import_jsx_dev_runtime$6.jsxDEV)(ComboboxList, {
				className: clsx(item_popup_module_default.list, className),
				ref,
				...mergeProps({
					onPointerMoveCapture: onPointerHighlight,
					onPointerDownCapture: onPointerHighlight
				}, restProps)
			}, void 0, false, {
				fileName: _jsxFileName$6,
				lineNumber: 13,
				columnNumber: 4
			}, this);
		});
		try {
			List.__docgenInfo = {
				"description": "",
				"displayName": "List",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/primitives/combobox/list.tsx",
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
//#region ../packages/ui/src/form/primitives/combobox/list-body.tsx
var ListBody;
function init_list_body() {
	return (init_list_body = __esmMin((() => {
		init_react();
		init_mergeProps(), init_useRender();
		init_item_popup_module();
		ListBody = (0, import_react.forwardRef)(function UnforwardedListBody({ render, ...props }, ref) {
			return useRender({
				defaultTagName: "div",
				render,
				ref,
				props: mergeProps({ className: item_popup_module_default["list-scrollable-container"] }, props)
			});
		});
		try {
			ListBody.__docgenInfo = {
				"description": "A layout container for the main scrolling area in the `List`, for holding `Item`s.",
				"displayName": "ListBody",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/primitives/combobox/list-body.tsx",
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
//#region ../packages/ui/src/form/primitives/combobox/list-footer.tsx
var ListFooter;
function init_list_footer() {
	return (init_list_footer = __esmMin((() => {
		init_react();
		init_mergeProps(), init_useRender();
		init_item_popup_module();
		ListFooter = (0, import_react.forwardRef)(function UnforwardedListFooter({ render, ...props }, ref) {
			return useRender({
				defaultTagName: "div",
				render,
				ref,
				props: mergeProps({ className: item_popup_module_default["list-footer"] }, props)
			});
		});
		try {
			ListFooter.__docgenInfo = {
				"description": "A layout container for the footer row in the `List`,\nfor holding a single `Item` that triggers the creation of a new item.",
				"displayName": "ListFooter",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/primitives/combobox/list-footer.tsx",
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
//#region ../packages/ui/src/form/primitives/combobox/portal.tsx
var import_jsx_dev_runtime$5, _jsxFileName$5, Portal;
function init_portal() {
	return (init_portal = __esmMin((() => {
		init_ComboboxPortal();
		init_react();
		init_wp_compat_overlay_slot();
		import_jsx_dev_runtime$5 = require_jsx_dev_runtime();
		_jsxFileName$5 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/primitives/combobox/portal.tsx";
		Portal = (0, import_react.forwardRef)(function ComboboxPortal$1({ container, ...restProps }, ref) {
			return /* @__PURE__ */ (0, import_jsx_dev_runtime$5.jsxDEV)(ComboboxPortal, {
				container: container === void 0 ? getWpCompatOverlaySlot() : container,
				...restProps,
				ref
			}, void 0, false, {
				fileName: _jsxFileName$5,
				lineNumber: 15,
				columnNumber: 4
			}, this);
		});
		try {
			Portal.__docgenInfo = {
				"description": "Root element that portals `Combobox` popup content. Pass to\n`Combobox.Popup`'s `portal` prop. When `portal` is omitted,\n`Combobox.Popup` uses this component with default props.\n`container` defaults to the `@wordpress/ui` compat overlay slot.",
				"displayName": "Portal",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/primitives/combobox/portal.tsx",
				"methods": [],
				"props": {
					"container": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/combobox/portal/ComboboxPortal.d.mts",
							"name": "ComboboxPortalProps"
						}],
						"description": "A parent element to render the portal element into.",
						"name": "container",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/combobox/portal/ComboboxPortal.d.mts",
							"name": "ComboboxPortalProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "HTMLElement | ShadowRoot | RefObject<HTMLElement | ShadowRoot | null> | null" }
					},
					"keepMounted": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/combobox/portal/ComboboxPortal.d.mts",
							"name": "ComboboxPortalProps"
						}],
						"description": "Whether to keep the portal mounted in the DOM while the popup is hidden.",
						"name": "keepMounted",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/combobox/portal/ComboboxPortal.d.mts",
							"name": "ComboboxPortalProps"
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
//#region ../packages/ui/src/form/primitives/combobox/positioner.tsx
var import_jsx_dev_runtime$4, _jsxFileName$4, Positioner;
function init_positioner() {
	return (init_positioner = __esmMin((() => {
		init_clsx();
		init_ComboboxPositioner();
		init_react();
		init_resets_module();
		init_style_module();
		init_constants();
		import_jsx_dev_runtime$4 = require_jsx_dev_runtime();
		_jsxFileName$4 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/primitives/combobox/positioner.tsx";
		Positioner = (0, import_react.forwardRef)(function ComboboxPositioner$1({ className, ...props }, ref) {
			return /* @__PURE__ */ (0, import_jsx_dev_runtime$4.jsxDEV)(ComboboxPositioner, {
				...ITEM_POPUP_POSITIONER_PROPS,
				...props,
				ref,
				className: clsx(resets_module_default["box-sizing"], style_module_default.positioner, className)
			}, void 0, false, {
				fileName: _jsxFileName$4,
				lineNumber: 15,
				columnNumber: 4
			}, this);
		});
		try {
			Positioner.__docgenInfo = {
				"description": "Used to apply custom positioning to `Combobox`'s popup content.",
				"displayName": "Positioner",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/primitives/combobox/positioner.tsx",
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
//#region ../packages/ui/src/form/primitives/combobox/popup.tsx
var import_jsx_dev_runtime$3, _jsxFileName$3, Popup;
function init_popup() {
	return (init_popup = __esmMin((() => {
		init_ComboboxPopup();
		init_clsx();
		init_react();
		init_portal();
		init_positioner();
		init_render_slot_with_children();
		init_item_popup_module();
		init_item_popup();
		import_jsx_dev_runtime$3 = require_jsx_dev_runtime();
		_jsxFileName$3 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/primitives/combobox/popup.tsx";
		Popup = (0, import_react.forwardRef)(function UnforwardedPopup({ className, portal, positioner, width, ...restProps }, ref) {
			const popupContent = /* @__PURE__ */ (0, import_jsx_dev_runtime$3.jsxDEV)(ComboboxPopup, {
				ref,
				className: clsx(item_popup_module_default.popup, getItemPopupWidthClassName(width), className),
				...restProps
			}, void 0, false, {
				fileName: _jsxFileName$3,
				lineNumber: 17,
				columnNumber: 4
			}, this);
			const positionedPopup = renderSlotWithChildren(positioner, /* @__PURE__ */ (0, import_jsx_dev_runtime$3.jsxDEV)(Positioner, {}, void 0, false, {
				fileName: _jsxFileName$3,
				lineNumber: 30,
				columnNumber: 4
			}, this), popupContent);
			return renderSlotWithChildren(portal, /* @__PURE__ */ (0, import_jsx_dev_runtime$3.jsxDEV)(Portal, {}, void 0, false, {
				fileName: _jsxFileName$3,
				lineNumber: 34,
				columnNumber: 42
			}, this), positionedPopup);
		});
		try {
			Popup.__docgenInfo = {
				"description": "",
				"displayName": "Popup",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/primitives/combobox/popup.tsx",
				"methods": [],
				"props": {
					"initialFocus": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/combobox/popup/ComboboxPopup.d.mts",
							"name": "ComboboxPopupProps"
						}],
						"description": "Determines the element to focus when the popup is opened.\n\n- `false`: Do not move focus.\n- `true`: Move focus based on the default behavior (first tabbable element or popup).\n- `RefObject`: Move focus to the ref element.\n- `function`: Called with the interaction type (`mouse`, `touch`, `pen`, or `keyboard`).\n  Return an element to focus, `true` to use the default behavior, or `false`/`undefined` to do nothing.",
						"name": "initialFocus",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/combobox/popup/ComboboxPopup.d.mts",
							"name": "ComboboxPopupProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean | RefObject<HTMLElement | null> | ((openType: InteractionType) => boolean | void | HTMLElement | null)" }
					},
					"finalFocus": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/combobox/popup/ComboboxPopup.d.mts",
							"name": "ComboboxPopupProps"
						}],
						"description": "Determines the element to focus when the popup is closed.\n\n- `false`: Do not move focus.\n- `true`: Move focus based on the default behavior (trigger or previously focused element).\n- `RefObject`: Move focus to the ref element.\n- `function`: Called with the interaction type (`mouse`, `touch`, `pen`, or `keyboard`).\n  Return an element to focus, `true` to use the default behavior, or `false`/`undefined` to do nothing.",
						"name": "finalFocus",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/combobox/popup/ComboboxPopup.d.mts",
							"name": "ComboboxPopupProps"
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
					"portal": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/form/primitives/combobox/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Optional portal element, typically `<Combobox.Portal />` with custom\n`container`. When omitted, `Combobox.Popup` uses `Combobox.Portal` with\ndefault props. Do not pass `children` on the portal element; they would be\nignored.",
						"name": "portal",
						"required": false,
						"tags": {},
						"type": { "name": "ReactElement<Omit<PortalProps, \"children\">, string | JSXElementConstructor<any>>" }
					},
					"positioner": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/form/primitives/combobox/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Optional positioner element, typically `<Combobox.Positioner />` with\ncustom positioning props (`side`, `align`, `sideOffset`, collision\nsettings, etc.). When omitted, `Combobox.Popup` uses\n`Combobox.Positioner` with default props. Do not pass `children` on the\npositioner element; they would be ignored.",
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
//#region ../packages/ui/src/form/primitives/combobox/root.tsx
/**
* Low-level primitive for a combobox that has an associated selection state.
*
* See `SearchableSelectControl` and `SearchableChipSelectControl` for standard
* implementations of a single and multiple selection combobox.
*/
function Root(props) {
	const { contextValue, ...highlightProps } = useKeyboardHighlightState(props);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)(DirectionProvider, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)(KeyboardHighlightContext.Provider, {
		value: contextValue,
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)(ComboboxRoot, {
			...props,
			...highlightProps
		}, void 0, false, {
			fileName: _jsxFileName$2,
			lineNumber: 26,
			columnNumber: 5
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$2,
		lineNumber: 25,
		columnNumber: 4
	}, this) }, void 0, false, {
		fileName: _jsxFileName$2,
		lineNumber: 24,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime$2, _jsxFileName$2;
function init_root() {
	return (init_root = __esmMin((() => {
		init_ComboboxRoot();
		init_direction_provider();
		init_keyboard_highlight_context();
		import_jsx_dev_runtime$2 = require_jsx_dev_runtime();
		_jsxFileName$2 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/primitives/combobox/root.tsx";
		try {
			Root.__docgenInfo = {
				"description": "Low-level primitive for a combobox that has an associated selection state.\n\nSee `SearchableSelectControl` and `SearchableChipSelectControl` for standard\nimplementations of a single and multiple selection combobox.",
				"displayName": "Root",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/primitives/combobox/root.tsx",
				"methods": [],
				"props": {
					"form": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/combobox/root/AriaCombobox.d.mts",
							"name": "ComboboxRootProps"
						}],
						"description": "Identifies the form that owns the internal input.\nUseful when the combobox is rendered outside the form.",
						"name": "form",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/combobox/root/AriaCombobox.d.mts",
							"name": "ComboboxRootProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"filter": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/combobox/root/AriaCombobox.d.mts",
							"name": "ComboboxRootProps"
						}],
						"description": "Filter function used to match items vs input query.\nReceives the source item, which is the derived value's item when `items` is a `createItems()`\ncollection, and the item itself otherwise.",
						"name": "filter",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/combobox/root/AriaCombobox.d.mts",
							"name": "ComboboxRootProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "((item: Item, query: string, itemToString?: ((item: Item) => string)) => boolean) | null" }
					},
					"id": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/combobox/root/AriaCombobox.d.mts",
							"name": "ComboboxRootProps"
						}],
						"description": "The id of the component.",
						"name": "id",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/combobox/root/AriaCombobox.d.mts",
							"name": "ComboboxRootProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"required": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/combobox/root/AriaCombobox.d.mts",
							"name": "ComboboxRootProps"
						}],
						"description": "Whether the user must choose a value before submitting a form.",
						"name": "required",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/combobox/root/AriaCombobox.d.mts",
							"name": "ComboboxRootProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"disabled": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/combobox/root/AriaCombobox.d.mts",
							"name": "ComboboxRootProps"
						}],
						"description": "Whether the component should ignore user interaction.",
						"name": "disabled",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/combobox/root/AriaCombobox.d.mts",
							"name": "ComboboxRootProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"locale": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/combobox/root/AriaCombobox.d.mts",
							"name": "ComboboxRootProps"
						}],
						"description": "The locale to use for string comparison.\nDefaults to the user's runtime locale.",
						"name": "locale",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/combobox/root/AriaCombobox.d.mts",
							"name": "ComboboxRootProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "LocalesArgument" }
					},
					"grid": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/combobox/root/AriaCombobox.d.mts",
							"name": "ComboboxRootProps"
						}],
						"description": "Whether list items are presented in a grid layout.\nWhen enabled, arrow keys navigate across rows and columns inferred from DOM rows.",
						"name": "grid",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/combobox/root/AriaCombobox.d.mts",
							"name": "ComboboxRootProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"name": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/combobox/root/AriaCombobox.d.mts",
							"name": "ComboboxRootProps"
						}],
						"description": "Identifies the field when a form is submitted.",
						"name": "name",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/combobox/root/AriaCombobox.d.mts",
							"name": "ComboboxRootProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"inputRef": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/combobox/root/AriaCombobox.d.mts",
							"name": "ComboboxRootProps"
						}],
						"description": "A ref to the hidden input element.",
						"name": "inputRef",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/combobox/root/AriaCombobox.d.mts",
							"name": "ComboboxRootProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "Ref<HTMLInputElement>" }
					},
					"readOnly": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/combobox/root/AriaCombobox.d.mts",
							"name": "ComboboxRootProps"
						}],
						"description": "Whether the user should be unable to choose a different option from the popup.",
						"name": "readOnly",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/combobox/root/AriaCombobox.d.mts",
							"name": "ComboboxRootProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"open": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/combobox/root/AriaCombobox.d.mts",
							"name": "ComboboxRootProps"
						}],
						"description": "Whether the popup is currently open. Use when controlled.",
						"name": "open",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/combobox/root/AriaCombobox.d.mts",
							"name": "ComboboxRootProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"defaultOpen": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/combobox/root/AriaCombobox.d.mts",
							"name": "ComboboxRootProps"
						}],
						"description": "Whether the popup is initially open.\n\nTo render a controlled popup, use the `open` prop instead.",
						"name": "defaultOpen",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/combobox/root/AriaCombobox.d.mts",
							"name": "ComboboxRootProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"onOpenChangeComplete": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/combobox/root/AriaCombobox.d.mts",
							"name": "ComboboxRootProps"
						}],
						"description": "Event handler called after any animations complete when the popup is opened or closed.",
						"name": "onOpenChangeComplete",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/combobox/root/AriaCombobox.d.mts",
							"name": "ComboboxRootProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "((open: boolean) => void)" }
					},
					"modal": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/combobox/root/AriaCombobox.d.mts",
							"name": "ComboboxRootProps"
						}],
						"description": "Determines if the popup enters a modal state when open.\n- `true`: user interaction is limited to the popup: document page scroll is locked and pointer interactions on outside elements are disabled.\n- `false`: user interaction with the rest of the document is allowed.\n\nOn touch devices, a `true` modal blocks outside taps but leaves the page scrollable unless the popup spans nearly the full viewport width, matching native iOS behavior.",
						"name": "modal",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/combobox/root/AriaCombobox.d.mts",
							"name": "ComboboxRootProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"items": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/combobox/root/AriaCombobox.d.mts",
							"name": "ComboboxRootProps"
						}],
						"description": "The items to be displayed in the list.\nCan be a flat array of items, an array of groups with items, or a collection created by\nthe `createItems()` function, which derives each item's selection value and label.\nNullish entries are not supported: remove them from the data before passing it.",
						"name": "items",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/combobox/root/AriaCombobox.d.mts",
							"name": "ComboboxRootProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "readonly any[] | readonly Group<any>[] | ComboboxItemCollection<Item, Value>" }
					},
					"openOnInputClick": {
						"defaultValue": { "value": "true" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/combobox/root/AriaCombobox.d.mts",
							"name": "ComboboxRootProps"
						}],
						"description": "Whether the popup opens when clicking the input.",
						"name": "openOnInputClick",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/combobox/root/AriaCombobox.d.mts",
							"name": "ComboboxRootProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"loopFocus": {
						"defaultValue": { "value": "true" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/combobox/root/AriaCombobox.d.mts",
							"name": "ComboboxRootProps"
						}],
						"description": "Whether to loop keyboard focus back to the input when the end of the list is reached while using the arrow keys. The first item can then be reached by pressing <kbd>ArrowDown</kbd> again from the input, or the last item can be reached by pressing <kbd>ArrowUp</kbd> from the input.\nThe input is always included in the focus loop per [ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/patterns/combobox/).\nWhen disabled, focus does not move when on the last element and the user presses <kbd>ArrowDown</kbd>, or when on the first element and the user presses <kbd>ArrowUp</kbd>.",
						"name": "loopFocus",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/combobox/root/AriaCombobox.d.mts",
							"name": "ComboboxRootProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"inputValue": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/combobox/root/AriaCombobox.d.mts",
							"name": "ComboboxRootProps"
						}],
						"description": "The input value of the combobox. Use when controlled.",
						"name": "inputValue",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/combobox/root/AriaCombobox.d.mts",
							"name": "ComboboxRootProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "string | number | readonly string[]" }
					},
					"defaultInputValue": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/combobox/root/AriaCombobox.d.mts",
							"name": "ComboboxRootProps"
						}],
						"description": "The uncontrolled input value when initially rendered.\n\nTo render a controlled input, use the `inputValue` prop instead.",
						"name": "defaultInputValue",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/combobox/root/AriaCombobox.d.mts",
							"name": "ComboboxRootProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "string | number | readonly string[]" }
					},
					"filteredItems": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/combobox/root/AriaCombobox.d.mts",
							"name": "ComboboxRootProps"
						}],
						"description": "Filtered items to display in the list.\nWhen provided, the list uses these items instead of filtering the `items` prop internally.\nWhen `items` is also provided, this array must preserve its flat or grouped structure.\nWith a `createItems()` collection, pass source items rather than derived values.\nNullish entries are not supported, as in `items`.\nUse when you want to control filtering logic externally with the `useFilter()` hook.",
						"name": "filteredItems",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/combobox/root/AriaCombobox.d.mts",
							"name": "ComboboxRootProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "readonly Item[] | readonly Group<Item>[]" }
					},
					"virtualized": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/combobox/root/AriaCombobox.d.mts",
							"name": "ComboboxRootProps"
						}],
						"description": "Whether the items are being externally virtualized.",
						"name": "virtualized",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/combobox/root/AriaCombobox.d.mts",
							"name": "ComboboxRootProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"inline": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/combobox/root/AriaCombobox.d.mts",
							"name": "ComboboxRootProps"
						}],
						"description": "Whether the list is rendered inline without using the component's own popup.\n\nSpecify `open` unconditionally in conjunction with this prop so the list is considered\nvisible: `<Combobox.Root inline open>`\n\nIn a `Combobox.Root` > `Dialog.Root` composition, bind the Combobox's `open` and\n`onOpenChange` props to the `Dialog`'s `open` and `onOpenChange` state instead so the\ncomponent resets its transient state (filter query, highlighted item, and input value) when\nthe dialog closes.",
						"name": "inline",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/combobox/root/AriaCombobox.d.mts",
							"name": "ComboboxRootProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"limit": {
						"defaultValue": { "value": "-1" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/combobox/root/AriaCombobox.d.mts",
							"name": "ComboboxRootProps"
						}],
						"description": "The maximum number of items to display in the list.",
						"name": "limit",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/combobox/root/AriaCombobox.d.mts",
							"name": "ComboboxRootProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "number" }
					},
					"multiple": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/combobox/root/ComboboxRoot.d.mts",
							"name": "TypeLiteral"
						}],
						"description": "Whether multiple items can be selected.",
						"name": "multiple",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"autoComplete": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/combobox/root/ComboboxRoot.d.mts",
							"name": "TypeLiteral"
						}],
						"description": "Provides a hint to the browser for autofill.\n@see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes/autocomplete",
						"name": "autoComplete",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"autoHighlight": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/combobox/root/ComboboxRoot.d.mts",
							"name": "TypeLiteral"
						}],
						"description": "Whether the first matching item is highlighted automatically while filtering.",
						"name": "autoHighlight",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"highlightItemOnHover": {
						"defaultValue": { "value": "true" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/combobox/root/ComboboxRoot.d.mts",
							"name": "TypeLiteral"
						}],
						"description": "Whether moving the pointer over items should highlight them.\nDisabling this prop allows CSS `:hover` to be differentiated from the `:focus` (`data-highlighted`) state.",
						"name": "highlightItemOnHover",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"itemToStringLabel": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/combobox/root/ComboboxRoot.d.mts",
							"name": "TypeLiteral"
						}],
						"description": "When the item values are objects (`<Combobox.Item value={object}>`), this function converts the object value to a string representation for display in the input.\nIf the shape of the object is `{ value, label }`, the label will be used automatically without needing to specify this prop.\nWith a `createItems()` collection, this receives the derived value, and the collection's\n`getLabel` takes precedence for values it can resolve.",
						"name": "itemToStringLabel",
						"required": false,
						"tags": {},
						"type": { "name": "((itemValue: Value) => string)" }
					},
					"itemToStringValue": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/combobox/root/ComboboxRoot.d.mts",
							"name": "TypeLiteral"
						}],
						"description": "When the item values are objects (`<Combobox.Item value={object}>`), this function converts the object value to a string representation for form submission.\nIf the shape of the object is `{ value, label }`, the value will be used automatically without needing to specify this prop.\nWith a `createItems()` collection, this receives the derived value.",
						"name": "itemToStringValue",
						"required": false,
						"tags": {},
						"type": { "name": "((itemValue: Value) => string)" }
					},
					"isItemEqualToValue": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/combobox/root/ComboboxRoot.d.mts",
							"name": "TypeLiteral"
						}],
						"description": "Custom comparison logic used to determine if a combobox item value matches the current selected value. Useful when item values are objects without matching referentially.\nWith a `createItems()` collection, both arguments are derived values.\nDefaults to `Object.is` comparison.",
						"name": "isItemEqualToValue",
						"required": false,
						"tags": {},
						"type": { "name": "((itemValue: Value, value: Value) => boolean)" }
					},
					"defaultValue": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/combobox/root/ComboboxRoot.d.mts",
							"name": "TypeLiteral"
						}],
						"description": "The uncontrolled selected value of the combobox when it's initially rendered.\n\nTo render a controlled combobox, use the `value` prop instead.",
						"name": "defaultValue",
						"required": false,
						"tags": {},
						"type": { "name": "ComboboxValueType<Value, Multiple> | null" }
					},
					"actionsRef": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/combobox/root/ComboboxRoot.d.mts",
							"name": "TypeLiteral"
						}],
						"description": "A ref to imperative actions.\n- `unmount`: Manually unmounts the combobox.\nCall this after any externally controlled closing animation finishes.",
						"name": "actionsRef",
						"required": false,
						"tags": {},
						"type": { "name": "RefObject<Actions | null>" }
					},
					"onOpenChange": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/combobox/root/ComboboxRoot.d.mts",
							"name": "TypeLiteral"
						}],
						"description": "Event handler called when the popup is opened or closed.",
						"name": "onOpenChange",
						"required": false,
						"tags": {},
						"type": { "name": "((open: boolean, eventDetails: ChangeEventDetails) => void)" }
					},
					"onInputValueChange": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/combobox/root/ComboboxRoot.d.mts",
							"name": "TypeLiteral"
						}],
						"description": "Event handler called when the input value changes.",
						"name": "onInputValueChange",
						"required": false,
						"tags": {},
						"type": { "name": "((inputValue: string, eventDetails: ChangeEventDetails) => void)" }
					},
					"onItemHighlighted": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/combobox/root/ComboboxRoot.d.mts",
							"name": "TypeLiteral"
						}],
						"description": "Callback fired when an item is highlighted or unhighlighted.\nReceives the highlighted item value (or `undefined` if no item is highlighted) and event details with a `reason` property describing why the highlight changed.\nThe `reason` can be:\n- `'keyboard'`: the highlight changed due to keyboard navigation.\n- `'pointer'`: the highlight changed due to pointer hovering.\n- `'none'`: the highlight changed programmatically.",
						"name": "onItemHighlighted",
						"required": false,
						"tags": {},
						"type": { "name": "((highlightedValue: Value, eventDetails: HighlightEventDetails) => void)" }
					},
					"value": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/combobox/root/ComboboxRoot.d.mts",
							"name": "TypeLiteral"
						}],
						"description": "The selected value of the combobox. Use when controlled.",
						"name": "value",
						"required": false,
						"tags": {},
						"type": { "name": "ComboboxValueType<Value, Multiple> | null" }
					},
					"onValueChange": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/combobox/root/ComboboxRoot.d.mts",
							"name": "TypeLiteral"
						}],
						"description": "Event handler called when the selected value of the combobox changes.",
						"name": "onValueChange",
						"required": false,
						"tags": {},
						"type": { "name": "((value: ComboboxValueType<Value, Multiple> | (Multiple extends true ? never : null), eventDetails: ChangeEventDetails) => void)" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/ui/src/form/primitives/combobox/separator.tsx
var import_jsx_dev_runtime$1, _jsxFileName$1, Separator;
function init_separator() {
	return (init_separator = __esmMin((() => {
		init_ComboboxSeparator();
		init_clsx();
		init_react();
		init_item_popup_module();
		import_jsx_dev_runtime$1 = require_jsx_dev_runtime();
		_jsxFileName$1 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/primitives/combobox/separator.tsx";
		Separator = (0, import_react.forwardRef)(function ComboboxSeparator$1({ className, orientation: _orientation, ...props }, ref) {
			return /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(ComboboxSeparator, {
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
				"description": "Renders a visual separator between combobox items or groups.",
				"displayName": "Separator",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/primitives/combobox/separator.tsx",
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
//#region ../packages/ui/src/form/primitives/combobox/status.tsx
var import_jsx_dev_runtime, _jsxFileName, Status;
function init_status() {
	return (init_status = __esmMin((() => {
		init_ComboboxStatus();
		init_clsx();
		init_react();
		init_item_popup_module();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/primitives/combobox/status.tsx";
		Status = (0, import_react.forwardRef)(function UnforwardedStatus({ className, ...restProps }, ref) {
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ComboboxStatus, {
				className: clsx(item_popup_module_default.status, className),
				ref,
				...restProps
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 18,
				columnNumber: 4
			}, this);
		});
		try {
			Status.__docgenInfo = {
				"description": "Announces a status message politely to screen readers. Use it for the\nstatus of an asynchronously loaded list.\n\nKeep this element mounted. Do not hide it with `display: none`, `hidden`,\n`aria-hidden`, or by omitting the component. Change or omit the children\ninstead.",
				"displayName": "Status",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/primitives/combobox/status.tsx",
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
//#region ../packages/ui/src/form/primitives/combobox/use-filtered-items.ts
/**
* Returns the items currently visible after the combobox's client-side filter.
*
* Call this from a descendant of `Combobox.Root`.
*/
function useFilteredItems() {
	return useFilteredItems$1();
}
function init_use_filtered_items() {
	return (init_use_filtered_items = __esmMin((() => {
		init_useFilteredItems();
	})))();
}
//#endregion
//#region ../packages/ui/src/form/primitives/combobox/stories/fixtures.ts
var ITEMS, GROUPED_ITEMS;
function init_fixtures() {
	return (init_fixtures = __esmMin((() => {
		ITEMS = [
			{
				value: "apple",
				label: "Apple"
			},
			{
				value: "apricot",
				label: "Apricot"
			},
			{
				value: "banana",
				label: "Banana"
			},
			{
				value: "blackberry",
				label: "Blackberry"
			},
			{
				value: "blueberry",
				label: "Blueberry"
			},
			{
				value: "boysenberry",
				label: "Boysenberry"
			},
			{
				value: "breadfruit",
				label: "Breadfruit"
			},
			{
				value: "cantaloupe",
				label: "Cantaloupe"
			},
			{
				value: "cherry",
				label: "Cherry"
			},
			{
				value: "clementine",
				label: "Clementine"
			},
			{
				value: "coconut",
				label: "Coconut"
			},
			{
				value: "cranberry",
				label: "Cranberry"
			},
			{
				value: "dragonfruit",
				label: "Dragonfruit"
			},
			{
				value: "durian",
				label: "Durian"
			},
			{
				value: "elderberry",
				label: "Elderberry"
			},
			{
				value: "fig",
				label: "Fig"
			},
			{
				value: "gooseberry",
				label: "Gooseberry"
			},
			{
				value: "grape",
				label: "Grape"
			},
			{
				value: "grapefruit",
				label: "Grapefruit"
			},
			{
				value: "guava",
				label: "Guava"
			},
			{
				value: "honeydew",
				label: "Honeydew"
			},
			{
				value: "jackfruit",
				label: "Jackfruit"
			},
			{
				value: "kiwi",
				label: "Kiwi"
			},
			{
				value: "kumquat",
				label: "Kumquat"
			},
			{
				value: "lemon",
				label: "Lemon"
			},
			{
				value: "lime",
				label: "Lime"
			},
			{
				value: "longan",
				label: "Longan"
			},
			{
				value: "lychee",
				label: "Lychee"
			},
			{
				value: "mandarin",
				label: "Mandarin"
			},
			{
				value: "mango",
				label: "Mango"
			},
			{
				value: "mangosteen",
				label: "Mangosteen"
			},
			{
				value: "mulberry",
				label: "Mulberry"
			},
			{
				value: "nectarine",
				label: "Nectarine"
			},
			{
				value: "orange",
				label: "Orange"
			},
			{
				value: "papaya",
				label: "Papaya"
			},
			{
				value: "passionfruit",
				label: "Passionfruit"
			},
			{
				value: "peach",
				label: "Peach"
			},
			{
				value: "pear",
				label: "Pear"
			},
			{
				value: "persimmon",
				label: "Persimmon"
			},
			{
				value: "pineapple",
				label: "Pineapple"
			},
			{
				value: "plum",
				label: "Plum"
			},
			{
				value: "pomegranate",
				label: "Pomegranate"
			},
			{
				value: "quince",
				label: "Quince"
			},
			{
				value: "rambutan",
				label: "Rambutan"
			},
			{
				value: "raspberry",
				label: "Raspberry"
			},
			{
				value: "soursop",
				label: "Soursop"
			},
			{
				value: "starfruit",
				label: "Starfruit"
			},
			{
				value: "strawberry",
				label: "Strawberry"
			},
			{
				value: "tangerine",
				label: "Tangerine"
			},
			{
				value: "watermelon",
				label: "Watermelon"
			}
		];
		GROUPED_ITEMS = [
			{
				label: "Common",
				items: [
					{
						value: "apple",
						label: "Apple"
					},
					{
						value: "banana",
						label: "Banana"
					},
					{
						value: "orange",
						label: "Orange"
					}
				]
			},
			{
				label: "Berries",
				items: [
					{
						value: "strawberry",
						label: "Strawberry"
					},
					{
						value: "blueberry",
						label: "Blueberry"
					},
					{
						value: "raspberry",
						label: "Raspberry"
					}
				]
			},
			{
				label: "Tropical",
				items: [
					{
						value: "mango",
						label: "Mango"
					},
					{
						value: "pineapple",
						label: "Pineapple"
					},
					{
						value: "papaya",
						label: "Papaya"
					}
				]
			}
		];
	})))();
}
//#endregion
export { Input as A, init_style_module as B, init_list as C, init_item_label as D, ForwardedItemLabel as E, init_group as F, Empty as I, init_empty as L, GroupLabel as M, init_group_label as N, ForwardedItemDescription as O, Group as P, Collection as R, List as S, init_item as T, style_module_default as V, init_portal as _, useFilteredItems as a, ListBody as b, Separator as c, init_root as d, Popup as f, Portal as g, init_positioner as h, init_use_filtered_items as i, init_input as j, init_item_description as k, init_separator as l, Positioner as m, ITEMS as n, Status as o, init_popup as p, init_fixtures as r, init_status as s, GROUPED_ITEMS as t, Root as u, ListFooter as v, Item as w, init_list_body as x, init_list_footer as y, init_collection as z };
