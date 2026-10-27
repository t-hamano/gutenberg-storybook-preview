import { n as __esmMin, o as __toESM } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_react } from "./react-Bujh4FgW.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C1RZKCc6.js";
import { n as init_react, t as import_react$2 } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as __, t as init_build_module } from "./build-module-v04us4E2.js";
import { a as init_clsx, i as clsx } from "./iframe-UtSZlYID.js";
import { r as useRenderElement, t as init_useRenderElement } from "./useRenderElement-Dkv6YH0v.js";
import { H as useComboboxInputValueContext, a as ComboboxRowContext, o as init_ComboboxRowContext, z as init_ComboboxRootContext } from "./ComboboxEmpty-B5deBkxx.js";
import { i as init_ComboboxInputGroup, n as init_ComboboxClear, r as ComboboxInputGroup, t as ComboboxClear } from "./ComboboxClear-aWVtjvgR.js";
import { a as ComboboxGroup, c as init_ComboboxStatus, i as init_ComboboxGroupLabel, n as useFilteredItems$1, o as init_ComboboxGroup, r as ComboboxGroupLabel, s as ComboboxStatus, t as init_useFilteredItems } from "./useFilteredItems-C7vnTl2Q.js";
import { n as init_ListboxSeparator, t as ListboxSeparator } from "./ListboxSeparator-CJEHCmmS.js";
import { t as close_small_default } from "./close-small-BRQ3N94m.js";
import { n as search_default } from "./search-D_OZk2AM.js";
import { n as init_spinner, t as Spinner } from "./spinner-DrO-0UQB.js";
import { n as init_icon, t as Icon } from "./icon-LzGYYnN1.js";
import { n as init_visually_hidden, t as VisuallyHidden } from "./visually-hidden-FYENO0pz.js";
import { n as init_icon_button, t as IconButton } from "./icon-button-XKyBAR-S.js";
import { C as Empty, E as init_collection, S as init_input, T as Collection, _ as ForwardedItemLabel, a as Popup, b as init_item_description, c as init_positioner, d as ListBody, f as init_list_body, g as init_item, h as Item, i as useAutocompleteGridContext, l as Portal, m as init_list, n as init_root, o as init_popup, p as List, r as init_context, s as Positioner, t as Root, u as init_portal, v as init_item_label, w as init_empty, x as Input, y as ForwardedItemDescription } from "./root-BPIW8yrI.js";
import { c as item_popup_module_default, s as init_item_popup_module } from "./constants-B7qFOh6e.js";
import { n as init_text, t as Text } from "./text-wjaOyqYP.js";
import { n as init_input$1, t as Input$1 } from "./input-BvCdVodk.js";
import { n as init_input_layout, t as InputLayout } from "./input-layout-IgZlkkJY.js";
import { n as init_stack, t as Stack } from "./stack-B_tyTWv7.js";
import { a as longLabelPopupItems, i as init_shared, o as narrowContainerDecorator } from "./shared-BRqYhAs4.js";
import { r as init_build_module$1 } from "./library.story-CbQx3MQ6.js";
//#region ../node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/autocomplete/value/AutocompleteValue.mjs
function AutocompleteValue(props) {
	const { children } = props;
	const inputValue = useComboboxInputValueContext();
	let returnValue = null;
	if (typeof children === "function") returnValue = children(String(inputValue));
	else if (children != null) returnValue = children;
	else returnValue = inputValue;
	return /*#__PURE__*/ (0, import_jsx_runtime$1.jsx)(import_react$1.Fragment, { children: returnValue });
}
var import_react$1, import_jsx_runtime$1;
function init_AutocompleteValue() {
	return (init_AutocompleteValue = __esmMin((() => {
		import_react$1 = /* @__PURE__ */ __toESM(require_react(), 1);
		init_ComboboxRootContext();
		import_jsx_runtime$1 = require_jsx_runtime();
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/autocomplete/input-group/AutocompleteInputGroup.mjs
var AutocompleteInputGroup;
function init_AutocompleteInputGroup() {
	return (init_AutocompleteInputGroup = __esmMin((() => {
		init_ComboboxInputGroup();
		AutocompleteInputGroup = ComboboxInputGroup;
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/combobox/row/ComboboxRow.mjs
var import_react, import_jsx_runtime, ComboboxRow;
function init_ComboboxRow() {
	return (init_ComboboxRow = __esmMin((() => {
		import_react = /* @__PURE__ */ __toESM(require_react(), 1);
		init_useRenderElement();
		init_ComboboxRowContext();
		import_jsx_runtime = require_jsx_runtime();
		ComboboxRow = /*#__PURE__*/ import_react.forwardRef(function ComboboxRow(componentProps, forwardedRef) {
			const { render, className, style, ...elementProps } = componentProps;
			const element = useRenderElement("div", componentProps, {
				ref: forwardedRef,
				props: [{ role: "row" }, elementProps]
			});
			return /*#__PURE__*/ (0, import_jsx_runtime.jsx)(ComboboxRowContext.Provider, {
				value: true,
				children: element
			});
		});
		ComboboxRow.displayName = "ComboboxRow";
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/autocomplete/separator/AutocompleteSeparator.mjs
var AutocompleteSeparator;
function init_AutocompleteSeparator() {
	return (init_AutocompleteSeparator = __esmMin((() => {
		init_ListboxSeparator();
		AutocompleteSeparator = ListboxSeparator;
	})))();
}
//#endregion
//#region ../packages/ui/src/form/primitives/autocomplete/clear.tsx
var import_jsx_dev_runtime$8, _jsxFileName$8, DEFAULT_RENDER, Clear;
function init_clear() {
	return (init_clear = __esmMin((() => {
		init_ComboboxClear();
		init_react();
		init_build_module$1();
		init_build_module();
		init_icon_button();
		import_jsx_dev_runtime$8 = require_jsx_dev_runtime();
		_jsxFileName$8 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/primitives/autocomplete/clear.tsx";
		DEFAULT_RENDER = ({ "aria-label": ariaLabel = __("Clear"), ...props }, { disabled }) => /* @__PURE__ */ (0, import_jsx_dev_runtime$8.jsxDEV)(IconButton, {
			icon: close_small_default,
			focusableWhenDisabled: false,
			disabled,
			"aria-hidden": disabled || void 0,
			size: "small",
			variant: "minimal",
			tone: "neutral",
			label: ariaLabel,
			...props
		}, void 0, false, {
			fileName: _jsxFileName$8,
			lineNumber: 15,
			columnNumber: 2
		}, void 0);
		Clear = (0, import_react$2.forwardRef)(function UnforwardedClear({ render = DEFAULT_RENDER, ...restProps }, ref) {
			return /* @__PURE__ */ (0, import_jsx_dev_runtime$8.jsxDEV)(ComboboxClear, {
				ref,
				render,
				...restProps
			}, void 0, false, {
				fileName: _jsxFileName$8,
				lineNumber: 37,
				columnNumber: 4
			}, this);
		});
		try {
			Clear.__docgenInfo = {
				"description": "A button that clears the input value.",
				"displayName": "Clear",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/primitives/autocomplete/clear.tsx",
				"methods": [],
				"props": {
					"disabled": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/combobox/clear/ComboboxClear.d.mts",
							"name": "ComboboxClearProps"
						}],
						"description": "Whether the component should ignore user interaction.",
						"name": "disabled",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/combobox/clear/ComboboxClear.d.mts",
							"name": "ComboboxClearProps"
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
					"keepMounted": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/combobox/clear/ComboboxClear.d.mts",
							"name": "ComboboxClearProps"
						}],
						"description": "Whether the component should remain mounted in the DOM when not visible.",
						"name": "keepMounted",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/combobox/clear/ComboboxClear.d.mts",
							"name": "ComboboxClearProps"
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
						"defaultValue": { "value": "(\n	{\n		'aria-label': ariaLabel = __( 'Clear' ),\n		...props\n	}: AutocompleteClearProps,\n	{ disabled }: _Autocomplete.Clear.State\n) => (\n	<IconButton\n		icon={ closeSmall }\n		focusableWhenDisabled={ false }\n		disabled={ disabled }\n		aria-hidden={ disabled || undefined }\n		size=\"small\"\n		variant=\"minimal\"\n		tone=\"neutral\"\n		label={ ariaLabel }\n		{ ...props }\n	/>\n)" },
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
//#region ../packages/ui/src/form/primitives/autocomplete/group.tsx
var import_jsx_dev_runtime$7, _jsxFileName$7, Group;
function init_group() {
	return (init_group = __esmMin((() => {
		init_ComboboxGroup();
		init_clsx();
		init_react();
		init_item_popup_module();
		import_jsx_dev_runtime$7 = require_jsx_dev_runtime();
		_jsxFileName$7 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/primitives/autocomplete/group.tsx";
		Group = (0, import_react$2.forwardRef)(function UnforwardedGroup({ className, children, ...restProps }, ref) {
			return /* @__PURE__ */ (0, import_jsx_dev_runtime$7.jsxDEV)(ComboboxGroup, {
				className: clsx(item_popup_module_default.group, className),
				ref,
				...restProps,
				children
			}, void 0, false, {
				fileName: _jsxFileName$7,
				lineNumber: 15,
				columnNumber: 4
			}, this);
		});
		try {
			Group.__docgenInfo = {
				"description": "Groups related items together with an associated label rendered by\n`Autocomplete.GroupLabel`. When `items` is provided, child\n`Autocomplete.Collection` components iterate over them.",
				"displayName": "Group",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/primitives/autocomplete/group.tsx",
				"methods": [],
				"props": {
					"items": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/combobox/group/ComboboxGroup.d.mts",
							"name": "ComboboxGroupProps"
						}],
						"description": "Items to be rendered within this group.\nWhen provided, child `Collection` components will use these items.",
						"name": "items",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/combobox/group/ComboboxGroup.d.mts",
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
//#region ../packages/ui/src/form/primitives/autocomplete/group-label.tsx
var import_jsx_dev_runtime$6, _jsxFileName$6, GroupLabel;
function init_group_label() {
	return (init_group_label = __esmMin((() => {
		init_ComboboxGroupLabel();
		init_clsx();
		init_react();
		init_text();
		init_item_popup_module();
		import_jsx_dev_runtime$6 = require_jsx_dev_runtime();
		_jsxFileName$6 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/primitives/autocomplete/group-label.tsx";
		GroupLabel = (0, import_react$2.forwardRef)(function UnforwardedGroupLabel({ className, children, ...restProps }, ref) {
			return /* @__PURE__ */ (0, import_jsx_dev_runtime$6.jsxDEV)(Text, {
				variant: "heading-sm",
				className: clsx(item_popup_module_default["group-label"], className),
				render: /* @__PURE__ */ (0, import_jsx_dev_runtime$6.jsxDEV)(ComboboxGroupLabel, {
					ref,
					...restProps
				}, void 0, false, {
					fileName: _jsxFileName$6,
					lineNumber: 23,
					columnNumber: 13
				}, this),
				children
			}, void 0, false, {
				fileName: _jsxFileName$6,
				lineNumber: 20,
				columnNumber: 3
			}, this);
		});
		try {
			GroupLabel.__docgenInfo = {
				"description": "Renders a label for an `Autocomplete.Group`, describing the group of items\nit is associated with.",
				"displayName": "GroupLabel",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/primitives/autocomplete/group-label.tsx",
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
//#region ../packages/ui/src/form/primitives/autocomplete/input-group.tsx
var import_jsx_dev_runtime$5, _jsxFileName$5, InputGroup;
function init_input_group() {
	return (init_input_group = __esmMin((() => {
		init_AutocompleteInputGroup();
		init_react();
		import_jsx_dev_runtime$5 = require_jsx_dev_runtime();
		_jsxFileName$5 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/primitives/autocomplete/input-group.tsx";
		InputGroup = (0, import_react$2.forwardRef)(function UnforwardedInputGroup(props, ref) {
			return /* @__PURE__ */ (0, import_jsx_dev_runtime$5.jsxDEV)(AutocompleteInputGroup, {
				ref,
				...props
			}, void 0, false, {
				fileName: _jsxFileName$5,
				lineNumber: 15,
				columnNumber: 9
			}, this);
		});
		try {
			InputGroup.__docgenInfo = {
				"description": "Wrapper around `Autocomplete.Input` that defines the visual control\nboundary when the input is composed with prefix/suffix slots or other\nelements. Without this wrapper, the popup anchors to the bare `<input>`\ninstead of the full control. Also adds `role=\"group\"`.",
				"displayName": "InputGroup",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/primitives/autocomplete/input-group.tsx",
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
//#region ../packages/ui/src/form/primitives/autocomplete/row.tsx
var import_jsx_dev_runtime$4, _jsxFileName$4, Row;
function init_row() {
	return (init_row = __esmMin((() => {
		init_ComboboxRow();
		init_react();
		init_context();
		import_jsx_dev_runtime$4 = require_jsx_dev_runtime();
		_jsxFileName$4 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/primitives/autocomplete/row.tsx";
		Row = (0, import_react$2.forwardRef)(function UnforwardedRow({ children, ...restProps }, ref) {
			if (!useAutocompleteGridContext()) throw new Error("Autocomplete.Row: Missing parent <Autocomplete.Root grid>. Render <Autocomplete.Row> inside <Autocomplete.Root grid>.");
			return /* @__PURE__ */ (0, import_jsx_dev_runtime$4.jsxDEV)(ComboboxRow, {
				ref,
				...restProps,
				children
			}, void 0, false, {
				fileName: _jsxFileName$4,
				lineNumber: 21,
				columnNumber: 4
			}, this);
		});
		try {
			Row.__docgenInfo = {
				"description": "Groups multiple `Autocomplete.Item` cells into a single row in a grid\nlayout. Enable `grid` on `Autocomplete.Root` to turn the listbox into a\ngrid and use two-dimensional keyboard navigation.",
				"displayName": "Row",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/primitives/autocomplete/row.tsx",
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
//#region ../packages/ui/src/form/primitives/autocomplete/separator.tsx
var import_jsx_dev_runtime$3, _jsxFileName$3, Separator;
function init_separator() {
	return (init_separator = __esmMin((() => {
		init_AutocompleteSeparator();
		init_clsx();
		init_react();
		init_item_popup_module();
		import_jsx_dev_runtime$3 = require_jsx_dev_runtime();
		_jsxFileName$3 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/primitives/autocomplete/separator.tsx";
		Separator = (0, import_react$2.forwardRef)(function AutocompleteSeparator$1({ className, orientation: _orientation, ...props }, ref) {
			return /* @__PURE__ */ (0, import_jsx_dev_runtime$3.jsxDEV)(AutocompleteSeparator, {
				ref,
				className: clsx(item_popup_module_default.separator, className),
				...props
			}, void 0, false, {
				fileName: _jsxFileName$3,
				lineNumber: 22,
				columnNumber: 3
			}, this);
		});
		try {
			Separator.__docgenInfo = {
				"description": "Renders a visual separator between autocomplete items or groups.",
				"displayName": "Separator",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/primitives/autocomplete/separator.tsx",
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
//#region ../packages/ui/src/form/primitives/autocomplete/status.tsx
var import_jsx_dev_runtime$2, _jsxFileName$2, Status;
function init_status() {
	return (init_status = __esmMin((() => {
		init_ComboboxStatus();
		init_clsx();
		init_react();
		init_item_popup_module();
		import_jsx_dev_runtime$2 = require_jsx_dev_runtime();
		_jsxFileName$2 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/primitives/autocomplete/status.tsx";
		Status = (0, import_react$2.forwardRef)(function UnforwardedStatus({ className, ...restProps }, ref) {
			return /* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)(ComboboxStatus, {
				className: clsx(item_popup_module_default.status, className),
				ref,
				...restProps
			}, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 18,
				columnNumber: 4
			}, this);
		});
		try {
			Status.__docgenInfo = {
				"description": "Announces a status message politely to screen readers. Use it for the\nstatus of an asynchronously loaded list.\n\nKeep this element mounted. Do not hide it with `display: none`, `hidden`,\n`aria-hidden`, or by omitting the component. Change or omit the children\ninstead.",
				"displayName": "Status",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/primitives/autocomplete/status.tsx",
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
//#region ../packages/ui/src/form/primitives/autocomplete/use-filtered-items.ts
/**
* Returns the items currently visible after the autocomplete's client-side
* filter.
*
* Call this from a descendant of `Autocomplete.Root`.
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
//#region ../packages/ui/src/form/primitives/autocomplete/value.tsx
function Value(props) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(AutocompleteValue, { ...props }, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 5,
		columnNumber: 9
	}, this);
}
var import_jsx_dev_runtime$1, _jsxFileName$1;
function init_value() {
	return (init_value = __esmMin((() => {
		init_AutocompleteValue();
		import_jsx_dev_runtime$1 = require_jsx_dev_runtime();
		_jsxFileName$1 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/primitives/autocomplete/value.tsx";
		try {
			Value.__docgenInfo = {
				"description": "",
				"displayName": "Value",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/primitives/autocomplete/value.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/ui/src/form/primitives/autocomplete/stories/fixtures.ts
var COMMANDS, GROUPED_COMMANDS, USERS, URLS, EMOJIS, EMOJI_GROUPS;
function init_fixtures() {
	return (init_fixtures = __esmMin((() => {
		COMMANDS = [
			{
				id: "c1",
				value: "Add new page"
			},
			{
				id: "c2",
				value: "Add new post"
			},
			{
				id: "c3",
				value: "Edit site"
			},
			{
				id: "c4",
				value: "View site"
			},
			{
				id: "c5",
				value: "Manage plugins"
			},
			{
				id: "c6",
				value: "Manage users"
			},
			{
				id: "c7",
				value: "Open settings"
			},
			{
				id: "c8",
				value: "Toggle dark mode"
			}
		];
		GROUPED_COMMANDS = [
			{
				label: "Content",
				items: [
					{
						id: "g1",
						value: "Add new page"
					},
					{
						id: "g2",
						value: "Add new post"
					},
					{
						id: "g3",
						value: "Edit site"
					}
				]
			},
			{
				label: "Management",
				items: [
					{
						id: "g4",
						value: "Manage plugins"
					},
					{
						id: "g5",
						value: "Manage users"
					},
					{
						id: "g6",
						value: "Open settings"
					}
				]
			},
			{
				label: "Appearance",
				items: [{
					id: "g7",
					value: "Toggle dark mode"
				}, {
					id: "g8",
					value: "View site"
				}]
			}
		];
		USERS = [
			{
				id: "m1",
				value: "alice"
			},
			{
				id: "m2",
				value: "bob"
			},
			{
				id: "m3",
				value: "carol"
			},
			{
				id: "m4",
				value: "dave"
			},
			{
				id: "m5",
				value: "eve"
			},
			{
				id: "m6",
				value: "frank"
			},
			{
				id: "m7",
				value: "grace"
			}
		];
		URLS = [
			{
				id: "u1",
				value: "wordpress.org"
			},
			{
				id: "u2",
				value: "developer.wordpress.org/plugins/"
			},
			{
				id: "u3",
				value: "developer.wordpress.org/themes/"
			},
			{
				id: "u4",
				value: "developer.wordpress.org/block-editor/"
			},
			{
				id: "u5",
				value: "github.com/WordPress/gutenberg"
			},
			{
				id: "u6",
				value: "make.wordpress.org/core/"
			},
			{
				id: "u7",
				value: "make.wordpress.org/design/"
			}
		];
		EMOJIS = [
			{
				value: "grinning",
				emoji: "😀",
				label: "grinning face"
			},
			{
				value: "laugh",
				emoji: "😂",
				label: "face with tears of joy"
			},
			{
				value: "wink",
				emoji: "😉",
				label: "winking face"
			},
			{
				value: "heart-eyes",
				emoji: "😍",
				label: "smiling face with heart eyes"
			},
			{
				value: "thumbs-up",
				emoji: "👍",
				label: "thumbs up"
			},
			{
				value: "clap",
				emoji: "👏",
				label: "clapping hands"
			},
			{
				value: "wave",
				emoji: "👋",
				label: "waving hand"
			},
			{
				value: "heart",
				emoji: "❤️",
				label: "red heart"
			},
			{
				value: "sparkles",
				emoji: "✨",
				label: "sparkles"
			},
			{
				value: "fire",
				emoji: "🔥",
				label: "fire"
			},
			{
				value: "star",
				emoji: "⭐",
				label: "star"
			},
			{
				value: "coffee",
				emoji: "☕",
				label: "hot beverage"
			},
			{
				value: "pizza",
				emoji: "🍕",
				label: "pizza"
			},
			{
				value: "dog",
				emoji: "🐶",
				label: "dog face"
			},
			{
				value: "sun",
				emoji: "☀️",
				label: "sun"
			},
			{
				value: "rocket",
				emoji: "🚀",
				label: "rocket"
			}
		];
		EMOJI_GROUPS = [{
			value: "emojis",
			label: "Recently used",
			items: EMOJIS
		}];
	})))();
}
//#endregion
//#region ../packages/ui/src/form/primitives/autocomplete/stories/index.story.tsx
function HiddenResultCount() {
	const count = useFilteredItems().length;
	if (count === 0) return null;
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(VisuallyHidden, { children: count === 1 ? "1 result found." : `${count} results found.` }, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 197,
		columnNumber: 3
	}, this);
}
function chunkItems(items, size) {
	const rows = [];
	for (let index = 0; index < items.length; index += size) rows.push(items.slice(index, index + size));
	return rows;
}
var import_jsx_dev_runtime, _jsxFileName, meta, Default, WithItemDescriptions, OpenOnlyOnMatch, AsyncItems, Inline, WithSearchIconAndClearButton, InlineMentionAutocomplete, WithCustomZIndex, Grouped, WithSeparator, EMOJI_COLUMNS, EMOJI_TILE_SIZE, emojiPickerRowStyle, emojiPickerCellStyle, emojiPickerLabelStyle, Grid, PopupWidth;
function init_index_story() {
	return (init_index_story = __esmMin((() => {
		init_react();
		init_build_module$1();
		init_root(), init_portal(), init_positioner(), init_popup(), init_input(), init_input_group(), init_list(), init_list_body(), init_collection(), init_group(), init_group_label(), init_item(), init_item_label(), init_item_description(), init_row(), init_separator(), init_value(), init_empty(), init_status(), init_clear(), init_use_filtered_items();
		init_icon();
		init_spinner();
		init_stack();
		init_visually_hidden();
		init_input$1();
		init_input_layout();
		init_fixtures();
		init_shared();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/primitives/autocomplete/stories/index.story.tsx";
		meta = {
			tags: ["manifest"],
			title: "Components/@wordpress-ui/Form/Primitives/Autocomplete",
			id: "design-system-components-form-primitives-autocomplete",
			component: Root,
			subcomponents: {
				"Autocomplete.Portal": Portal,
				"Autocomplete.Positioner": Positioner,
				"Autocomplete.Popup": Popup,
				"Autocomplete.Input": Input,
				"Autocomplete.InputGroup": InputGroup,
				"Autocomplete.List": List,
				"Autocomplete.ListBody": ListBody,
				"Autocomplete.Collection": Collection,
				"Autocomplete.Group": Group,
				"Autocomplete.GroupLabel": GroupLabel,
				"Autocomplete.Item": Item,
				"Autocomplete.ItemLabel": ForwardedItemLabel,
				"Autocomplete.ItemDescription": ForwardedItemDescription,
				"Autocomplete.Row": Row,
				"Autocomplete.Separator": Separator,
				"Autocomplete.Value": Value,
				"Autocomplete.Empty": Empty,
				"Autocomplete.Status": Status,
				"Autocomplete.Clear": Clear
			},
			argTypes: { onValueChange: { action: "onValueChange" } },
			parameters: { componentStatus: {
				status: "recommended",
				whereUsed: "global"
			} }
		};
		Default = { args: {
			items: URLS,
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
				"aria-label": "URL",
				placeholder: "Enter a URL"
			}, "input", false, {
				fileName: _jsxFileName,
				lineNumber: 73,
				columnNumber: 4
			}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Popup, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Empty, { children: "No matching items." }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 79,
				columnNumber: 5
			}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(List, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ListBody, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Collection, { children: (item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Item, {
				value: item,
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ForwardedItemLabel, { children: item.value }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 88,
					columnNumber: 10
				}, void 0)
			}, item.id, false, {
				fileName: _jsxFileName,
				lineNumber: 84,
				columnNumber: 9
			}, void 0) }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 82,
				columnNumber: 7
			}, void 0) }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 81,
				columnNumber: 6
			}, void 0) }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 80,
				columnNumber: 5
			}, void 0)] }, "popup", true, {
				fileName: _jsxFileName,
				lineNumber: 78,
				columnNumber: 4
			}, void 0)]
		} };
		WithItemDescriptions = { args: {
			items: URLS.slice(0, 3),
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, { "aria-label": "URL" }, "input", false, {
				fileName: _jsxFileName,
				lineNumber: 108,
				columnNumber: 4
			}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Popup, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(List, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ListBody, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Collection, { children: (item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Item, {
				value: item,
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ForwardedItemLabel, { children: item.value }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 118,
					columnNumber: 10
				}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ForwardedItemDescription, { children: "Suggested URL" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 121,
					columnNumber: 10
				}, void 0)]
			}, item.id, true, {
				fileName: _jsxFileName,
				lineNumber: 114,
				columnNumber: 9
			}, void 0) }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 112,
				columnNumber: 7
			}, void 0) }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 111,
				columnNumber: 6
			}, void 0) }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 110,
				columnNumber: 5
			}, void 0) }, "popup", false, {
				fileName: _jsxFileName,
				lineNumber: 109,
				columnNumber: 4
			}, void 0)]
		} };
		OpenOnlyOnMatch = { render: function Template(args) {
			const [open, setOpen] = (0, import_react$2.useState)(false);
			const [filteredItems, setFilteredItems] = (0, import_react$2.useState)(URLS);
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Root, {
				...args,
				items: URLS,
				open,
				onOpenChange: (nextOpen) => {
					setOpen(nextOpen && filteredItems.length > 0);
				},
				onValueChange: (value, ...changeArgs) => {
					const matches = URLS.filter((bookmark) => bookmark.value.toLowerCase().includes(value.toLowerCase()));
					setFilteredItems(matches);
					setOpen(value.length > 0 && matches.length > 0);
					args.onValueChange?.(value, ...changeArgs);
				},
				filteredItems,
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
					"aria-label": "URL",
					placeholder: "Enter a URL"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 162,
					columnNumber: 5
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Popup, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(List, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ListBody, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Collection, { children: (item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Item, {
					value: item,
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ForwardedItemLabel, { children: item.value }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 175,
						columnNumber: 11
					}, this)
				}, item.id, false, {
					fileName: _jsxFileName,
					lineNumber: 171,
					columnNumber: 10
				}, this) }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 169,
					columnNumber: 8
				}, this) }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 168,
					columnNumber: 7
				}, this) }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 167,
					columnNumber: 6
				}, this) }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 166,
					columnNumber: 5
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 143,
				columnNumber: 4
			}, this);
		} };
		AsyncItems = { render: function Template(args) {
			const [query, setQuery] = (0, import_react$2.useState)("");
			const [loading, setLoading] = (0, import_react$2.useState)(false);
			const [results, setResults] = (0, import_react$2.useState)([]);
			const timeoutRef = (0, import_react$2.useRef)(null);
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Root, {
				...args,
				items: results,
				value: query,
				onValueChange: (newValue, ...changeArgs) => {
					setQuery(newValue);
					setLoading(true);
					setResults([]);
					if (timeoutRef.current) clearTimeout(timeoutRef.current);
					timeoutRef.current = setTimeout(() => {
						setResults(URLS.filter((item) => item.value.toLowerCase().includes(newValue.toLowerCase())));
						setLoading(false);
					}, 500);
					args.onValueChange?.(newValue, ...changeArgs);
				},
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
					"aria-label": "URL",
					placeholder: "Enter a URL"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 239,
					columnNumber: 5
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Popup, { children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Status, { children: loading ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack, {
						direction: "row",
						gap: "sm",
						align: "center",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Spinner, {}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 247,
							columnNumber: 9
						}, this), "Loading…"]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 246,
						columnNumber: 8
					}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HiddenResultCount, {}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 251,
						columnNumber: 8
					}, this) }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 244,
						columnNumber: 6
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Empty, { children: loading ? null : "No matching items." }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 254,
						columnNumber: 6
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(List, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ListBody, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Collection, { children: (item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Item, {
						value: item,
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ForwardedItemLabel, { children: item.value }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 265,
							columnNumber: 11
						}, this)
					}, item.id, false, {
						fileName: _jsxFileName,
						lineNumber: 261,
						columnNumber: 10
					}, this) }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 259,
						columnNumber: 8
					}, this) }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 258,
						columnNumber: 7
					}, this) }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 257,
						columnNumber: 6
					}, this)
				] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 243,
					columnNumber: 5
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 215,
				columnNumber: 4
			}, this);
		} };
		Inline = {
			parameters: { a11y: { config: { rules: [{
				id: "scrollable-region-focusable",
				enabled: false
			}] } } },
			args: {
				items: COMMANDS,
				inline: true,
				open: true
			},
			render: function Template(args) {
				const [value, setValue] = (0, import_react$2.useState)("");
				return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Root, {
					...args,
					value,
					onValueChange: (newValue, ...changeArgs) => {
						setValue(newValue);
						args.onValueChange?.(newValue, ...changeArgs);
					},
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
						"aria-label": "Command",
						placeholder: "Type a command"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 311,
						columnNumber: 5
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						style: {
							minHeight: "200px",
							maxHeight: "200px",
							marginTop: 8,
							overflow: "auto"
						},
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Empty, { children: "No commands found." }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 323,
							columnNumber: 6
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(List, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Collection, { children: (command) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Item, {
							value: command,
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ForwardedItemLabel, { children: command.value }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 331,
								columnNumber: 10
							}, this)
						}, command.id, false, {
							fileName: _jsxFileName,
							lineNumber: 327,
							columnNumber: 9
						}, this) }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 325,
							columnNumber: 7
						}, this) }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 324,
							columnNumber: 6
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 315,
						columnNumber: 5
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 303,
					columnNumber: 4
				}, this);
			}
		};
		WithSearchIconAndClearButton = { args: {
			items: URLS,
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InputGroup, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
				"aria-label": "Search URLs",
				placeholder: "Search URLs",
				render: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input$1, {
					prefix: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InputLayout.Slot, {
						padding: "minimal",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { icon: search_default }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 356,
							columnNumber: 10
						}, void 0)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 355,
						columnNumber: 9
					}, void 0),
					suffix: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InputLayout.Slot, {
						padding: "minimal",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Clear, {}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 361,
							columnNumber: 10
						}, void 0)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 360,
						columnNumber: 9
					}, void 0)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 353,
					columnNumber: 7
				}, void 0)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 349,
				columnNumber: 5
			}, void 0) }, "inputGroup", false, {
				fileName: _jsxFileName,
				lineNumber: 348,
				columnNumber: 4
			}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Popup, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Empty, { children: "No matching items." }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 369,
				columnNumber: 5
			}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(List, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ListBody, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Collection, { children: (item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Item, {
				value: item,
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ForwardedItemLabel, { children: item.value }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 378,
					columnNumber: 10
				}, void 0)
			}, item.id, false, {
				fileName: _jsxFileName,
				lineNumber: 374,
				columnNumber: 9
			}, void 0) }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 372,
				columnNumber: 7
			}, void 0) }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 371,
				columnNumber: 6
			}, void 0) }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 370,
				columnNumber: 5
			}, void 0)] }, "popup", true, {
				fileName: _jsxFileName,
				lineNumber: 368,
				columnNumber: 4
			}, void 0)]
		} };
		InlineMentionAutocomplete = { render: function Template(args) {
			const inputRef = (0, import_react$2.useRef)(null);
			const [value, setValue] = (0, import_react$2.useState)("");
			const [open, setOpen] = (0, import_react$2.useState)(false);
			const [filteredItems, setFilteredItems] = (0, import_react$2.useState)([]);
			const triggerInfo = (0, import_react$2.useRef)(null);
			function findTrigger(text, caretPos) {
				const textBeforeCaret = text.slice(0, caretPos);
				const triggerIndex = textBeforeCaret.lastIndexOf("@");
				if (triggerIndex < 0) return null;
				const query = textBeforeCaret.slice(triggerIndex + 1);
				if (/\s/.test(query)) return null;
				if (triggerIndex > 0 && !/\s/.test(text[triggerIndex - 1])) return null;
				return {
					offset: triggerIndex,
					query
				};
			}
			function handleValueChange(newValue, details) {
				const trigger = triggerInfo.current;
				if (details.reason === "item-press" && trigger) {
					const before = value.slice(0, trigger.offset);
					const afterEndPos = trigger.offset + 1 + trigger.query.length;
					const after = value.slice(afterEndPos);
					const inserted = `@${newValue}${after.length > 0 && after[0] !== " " ? " " : ""}`;
					const fullValue = before + inserted + after;
					setValue(fullValue);
					triggerInfo.current = null;
					setOpen(false);
					const caretPos = before.length + inserted.length;
					requestAnimationFrame(() => {
						inputRef.current?.setSelectionRange(caretPos, caretPos);
						inputRef.current?.focus();
					});
					return;
				}
				setValue(newValue);
				const input = inputRef.current;
				if (!input) return;
				const detected = findTrigger(newValue, input.selectionStart ?? 0);
				if (detected) {
					triggerInfo.current = detected;
					const matches = USERS.filter((user) => user.value.toLowerCase().startsWith(detected.query.toLowerCase()));
					setFilteredItems(matches);
					setOpen(matches.length > 0);
				} else {
					triggerInfo.current = null;
					setOpen(false);
				}
			}
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Root, {
				items: USERS,
				value,
				onValueChange: (newValue, ...changeArgs) => {
					handleValueChange(newValue, ...changeArgs);
					args.onValueChange?.(newValue, ...changeArgs);
				},
				filteredItems,
				open,
				onOpenChange: (nextOpen) => {
					if (!nextOpen) {
						setOpen(false);
						triggerInfo.current = null;
					}
				},
				mode: "none",
				openOnInputClick: false,
				autoHighlight: true,
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
					ref: inputRef,
					"aria-label": "Comment",
					placeholder: "Type @ to mention someone"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 496,
					columnNumber: 5
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Popup, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(List, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ListBody, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Collection, { children: (item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Item, {
					value: item,
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ForwardedItemLabel, { children: item.value }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 511,
						columnNumber: 11
					}, this)
				}, item.id, false, {
					fileName: _jsxFileName,
					lineNumber: 507,
					columnNumber: 10
				}, this) }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 505,
					columnNumber: 8
				}, this) }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 504,
					columnNumber: 7
				}, this) }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 503,
					columnNumber: 6
				}, this) }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 502,
					columnNumber: 5
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 477,
				columnNumber: 4
			}, this);
		} };
		WithCustomZIndex = {
			name: "With Custom z-index",
			args: {
				items: URLS,
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
					"aria-label": "URL",
					placeholder: "Enter a URL"
				}, "input", false, {
					fileName: _jsxFileName,
					lineNumber: 546,
					columnNumber: 4
				}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Popup, {
					portal: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Portal, { style: { "--wp-ui-autocomplete-z-index": "9999" } }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 553,
						columnNumber: 6
					}, void 0),
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(List, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ListBody, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Collection, { children: (item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Item, {
						value: item,
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ForwardedItemLabel, { children: item.value }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 567,
							columnNumber: 10
						}, void 0)
					}, item.id, false, {
						fileName: _jsxFileName,
						lineNumber: 563,
						columnNumber: 9
					}, void 0) }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 561,
						columnNumber: 7
					}, void 0) }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 560,
						columnNumber: 6
					}, void 0) }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 559,
						columnNumber: 5
					}, void 0)
				}, "popup", false, {
					fileName: _jsxFileName,
					lineNumber: 551,
					columnNumber: 4
				}, void 0)]
			}
		};
		Grouped = { args: {
			items: GROUPED_COMMANDS,
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
				"aria-label": "Command",
				placeholder: "Type a command"
			}, "input", false, {
				fileName: _jsxFileName,
				lineNumber: 588,
				columnNumber: 4
			}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Popup, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Empty, { children: "No matching items." }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 594,
				columnNumber: 5
			}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(List, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ListBody, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Collection, { children: (group) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Group, {
				items: group.items,
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(GroupLabel, { children: group.label }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 603,
					columnNumber: 10
				}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Collection, { children: (item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Item, {
					value: item,
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ForwardedItemLabel, { children: item.value }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 612,
						columnNumber: 13
					}, void 0)
				}, item.id, false, {
					fileName: _jsxFileName,
					lineNumber: 608,
					columnNumber: 12
				}, void 0) }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 606,
					columnNumber: 10
				}, void 0)]
			}, group.label, true, {
				fileName: _jsxFileName,
				lineNumber: 599,
				columnNumber: 9
			}, void 0) }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 597,
				columnNumber: 7
			}, void 0) }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 596,
				columnNumber: 6
			}, void 0) }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 595,
				columnNumber: 5
			}, void 0)] }, "popup", true, {
				fileName: _jsxFileName,
				lineNumber: 593,
				columnNumber: 4
			}, void 0)]
		} };
		WithSeparator = { args: {
			items: [...COMMANDS.slice(0, 3), {
				id: "help",
				value: "Get help"
			}],
			openOnInputClick: true,
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
				"aria-label": "Command",
				placeholder: "Type a command"
			}, "input", false, {
				fileName: _jsxFileName,
				lineNumber: 636,
				columnNumber: 4
			}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Popup, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(List, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ListBody, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Collection, { children: (item, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react$2.Fragment, { children: [item.id === "help" && index > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Separator, {}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 648,
				columnNumber: 11
			}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Item, {
				value: item,
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ForwardedItemLabel, { children: item.value }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 651,
					columnNumber: 11
				}, void 0)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 650,
				columnNumber: 10
			}, void 0)] }, item.id, true, {
				fileName: _jsxFileName,
				lineNumber: 646,
				columnNumber: 9
			}, void 0) }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 644,
				columnNumber: 7
			}, void 0) }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 643,
				columnNumber: 6
			}, void 0) }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 642,
				columnNumber: 5
			}, void 0) }, "popup", false, {
				fileName: _jsxFileName,
				lineNumber: 641,
				columnNumber: 4
			}, void 0)]
		} };
		EMOJI_COLUMNS = 8;
		EMOJI_TILE_SIZE = "var(--wpds-dimension-size-lg, 40px)";
		emojiPickerRowStyle = {
			display: "grid",
			gridTemplateColumns: `repeat(${EMOJI_COLUMNS}, ${EMOJI_TILE_SIZE})`,
			gap: "var(--wpds-dimension-gap-xs, 4px)",
			width: "fit-content"
		};
		emojiPickerCellStyle = {
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
			width: EMOJI_TILE_SIZE,
			aspectRatio: "1 / 1",
			marginInline: 0,
			padding: "var(--wpds-dimension-padding-xs, 4px)"
		};
		emojiPickerLabelStyle = { fontSize: "var(--wpds-typography-font-size-xl, 20px)" };
		Grid = {
			args: {
				items: EMOJI_GROUPS,
				inline: true,
				open: true,
				grid: true
			},
			render: function Template(args) {
				return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Root, {
					...args,
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
						"aria-label": "Search emojis",
						placeholder: "Search emojis"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 713,
						columnNumber: 5
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						style: { marginTop: "var(--wpds-dimension-gap-sm, 8px)" },
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Empty, { children: "No matching emojis." }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 722,
							columnNumber: 6
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(List, { children: (group) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Group, {
							items: group.items,
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(GroupLabel, { children: group.label }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 729,
								columnNumber: 9
							}, this), chunkItems(group.items, EMOJI_COLUMNS).map((row, rowIndex) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Row, {
								style: emojiPickerRowStyle,
								children: row.map((emoji) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Item, {
									value: emoji,
									"aria-label": emoji.label,
									style: emojiPickerCellStyle,
									children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ForwardedItemLabel, {
										style: emojiPickerLabelStyle,
										children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
											"aria-hidden": "true",
											children: emoji.emoji
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 752,
											columnNumber: 15
										}, this)
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 747,
										columnNumber: 14
									}, this)
								}, emoji.value, false, {
									fileName: _jsxFileName,
									lineNumber: 739,
									columnNumber: 13
								}, this))
							}, rowIndex, false, {
								fileName: _jsxFileName,
								lineNumber: 734,
								columnNumber: 11
							}, this))]
						}, group.value, true, {
							fileName: _jsxFileName,
							lineNumber: 725,
							columnNumber: 8
						}, this) }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 723,
							columnNumber: 6
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 717,
						columnNumber: 5
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 712,
					columnNumber: 4
				}, this);
			}
		};
		PopupWidth = {
			decorators: [narrowContainerDecorator],
			args: { items: longLabelPopupItems.map((item) => item.label) },
			render: (args) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Root, {
				...args,
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, { "aria-label": "Label" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 780,
					columnNumber: 4
				}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Popup, {
					width: "sm",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(List, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ListBody, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Collection, { children: (item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Item, {
						value: item,
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ForwardedItemLabel, { children: item }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 787,
							columnNumber: 10
						}, void 0)
					}, item, false, {
						fileName: _jsxFileName,
						lineNumber: 786,
						columnNumber: 9
					}, void 0) }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 784,
						columnNumber: 7
					}, void 0) }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 783,
						columnNumber: 6
					}, void 0) }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 782,
						columnNumber: 5
					}, void 0)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 781,
					columnNumber: 4
				}, void 0)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 779,
				columnNumber: 3
			}, void 0)
		};
		try {
			Default.__docgenInfo = {
				"description": "The input accepts free-form text while suggesting matching items.",
				"displayName": "Default",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/primitives/autocomplete/stories/index.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			WithItemDescriptions.__docgenInfo = {
				"description": "Item descriptions contribute to each suggestion's accessible description.",
				"displayName": "WithItemDescriptions",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/primitives/autocomplete/stories/index.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			OpenOnlyOnMatch.__docgenInfo = {
				"description": "Controls the popup so it only opens when there is at least one match.",
				"displayName": "OpenOnlyOnMatch",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/primitives/autocomplete/stories/index.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			AsyncItems.__docgenInfo = {
				"description": "Fetches matching items asynchronously. `Status` shows loading, then a\nvisually hidden result count. Use `Empty` for no results.",
				"displayName": "AsyncItems",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/primitives/autocomplete/stories/index.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			Inline.__docgenInfo = {
				"description": "The suggestion list can be rendered inline by enabling `inline` and `open`.",
				"displayName": "Inline",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/primitives/autocomplete/stories/index.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			InlineMentionAutocomplete.__docgenInfo = {
				"description": "Experimental: Inline autocomplete triggered by `@`.",
				"displayName": "InlineMentionAutocomplete",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/primitives/autocomplete/stories/index.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			WithCustomZIndex.__docgenInfo = {
				"description": "Popovers in Gutenberg are managed with explicit z-index values, which can\ncreate situations where an autocomplete popup renders below another popover\nwhen you want it above.\n\nThe `--wp-ui-autocomplete-z-index` CSS variable controls the z-index of the\n`Autocomplete` positioner. Override it either:\n\n- **Globally**, by setting the variable on `:root` or `body` (raises every\n  `Autocomplete` popup in the page), or\n- **Per instance**, by passing an `Autocomplete.Portal` with a `style` (or\n  `className`) to `Autocomplete.Popup`'s `portal` prop. The variable cascades\n  from the portal wrapper to everything rendered inside it.\n\nThis story demonstrates the per-instance approach.",
				"displayName": "WithCustomZIndex",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/primitives/autocomplete/stories/index.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			Grouped.__docgenInfo = {
				"description": "Suggestions can be organized into labeled groups with `Autocomplete.Group`\nand `Autocomplete.GroupLabel`.",
				"displayName": "Grouped",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/primitives/autocomplete/stories/index.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			WithSeparator.__docgenInfo = {
				"description": "Use `Autocomplete.Separator` to set choices apart from each other.",
				"displayName": "WithSeparator",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/primitives/autocomplete/stories/index.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			Grid.__docgenInfo = {
				"description": "`Autocomplete.Row` groups multiple `Autocomplete.Item` cells into grid rows.\nEnable `grid` on `Autocomplete.Root` so the listbox uses grid navigation.",
				"displayName": "Grid",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/primitives/autocomplete/stories/index.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			PopupWidth.__docgenInfo = {
				"description": "Use `width` on `Autocomplete.Popup` to constrain the popup relative to a narrow anchor.",
				"displayName": "PopupWidth",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/primitives/autocomplete/stories/index.story.tsx",
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
					originalSource: "{\n  args: {\n    items: URLS,\n    children: [<Autocomplete.Input aria-label=\"URL\" placeholder=\"Enter a URL\" key=\"input\" />, <Autocomplete.Popup key=\"popup\">\n                <Autocomplete.Empty>No matching items.</Autocomplete.Empty>\n                <Autocomplete.List>\n                    <Autocomplete.ListBody>\n                        <Autocomplete.Collection>\n                            {(item: FixtureItem) => <Autocomplete.Item key={item.id} value={item}>\n                                    <Autocomplete.ItemLabel>\n                                        {item.value}\n                                    </Autocomplete.ItemLabel>\n                                </Autocomplete.Item>}\n                        </Autocomplete.Collection>\n                    </Autocomplete.ListBody>\n                </Autocomplete.List>\n            </Autocomplete.Popup>]\n  }\n}",
					...Default.parameters?.docs?.source
				},
				description: {
					story: "The input accepts free-form text while suggesting matching items.",
					...Default.parameters?.docs?.description
				}
			}
		};
		WithItemDescriptions.parameters = {
			...WithItemDescriptions.parameters,
			docs: {
				...WithItemDescriptions.parameters?.docs,
				source: {
					originalSource: "{\n  args: {\n    items: URLS.slice(0, 3),\n    children: [<Autocomplete.Input aria-label=\"URL\" key=\"input\" />, <Autocomplete.Popup key=\"popup\">\n                <Autocomplete.List>\n                    <Autocomplete.ListBody>\n                        <Autocomplete.Collection>\n                            {(item: FixtureItem) => <Autocomplete.Item key={item.id} value={item}>\n                                    <Autocomplete.ItemLabel>\n                                        {item.value}\n                                    </Autocomplete.ItemLabel>\n                                    <Autocomplete.ItemDescription>\n                                        Suggested URL\n                                    </Autocomplete.ItemDescription>\n                                </Autocomplete.Item>}\n                        </Autocomplete.Collection>\n                    </Autocomplete.ListBody>\n                </Autocomplete.List>\n            </Autocomplete.Popup>]\n  }\n}",
					...WithItemDescriptions.parameters?.docs?.source
				},
				description: {
					story: "Item descriptions contribute to each suggestion's accessible description.",
					...WithItemDescriptions.parameters?.docs?.description
				}
			}
		};
		OpenOnlyOnMatch.parameters = {
			...OpenOnlyOnMatch.parameters,
			docs: {
				...OpenOnlyOnMatch.parameters?.docs,
				source: {
					originalSource: "{\n  render: function Template(args) {\n    const [open, setOpen] = useState(false);\n    const [filteredItems, setFilteredItems] = useState(URLS);\n    return <Autocomplete.Root {...args} items={URLS} open={open} onOpenChange={nextOpen => {\n      setOpen(nextOpen && filteredItems.length > 0);\n    }} onValueChange={(value, ...changeArgs) => {\n      const matches = URLS.filter(bookmark => bookmark.value.toLowerCase().includes(value.toLowerCase()));\n      setFilteredItems(matches);\n      setOpen(value.length > 0 && matches.length > 0);\n      args.onValueChange?.(value, ...changeArgs);\n    }} filteredItems={filteredItems}>\n                <Autocomplete.Input aria-label=\"URL\" placeholder=\"Enter a URL\" />\n                <Autocomplete.Popup>\n                    <Autocomplete.List>\n                        <Autocomplete.ListBody>\n                            <Autocomplete.Collection>\n                                {(item: FixtureItem) => <Autocomplete.Item key={item.id} value={item}>\n                                        <Autocomplete.ItemLabel>\n                                            {item.value}\n                                        </Autocomplete.ItemLabel>\n                                    </Autocomplete.Item>}\n                            </Autocomplete.Collection>\n                        </Autocomplete.ListBody>\n                    </Autocomplete.List>\n                </Autocomplete.Popup>\n            </Autocomplete.Root>;\n  }\n}",
					...OpenOnlyOnMatch.parameters?.docs?.source
				},
				description: {
					story: "Controls the popup so it only opens when there is at least one match.",
					...OpenOnlyOnMatch.parameters?.docs?.description
				}
			}
		};
		AsyncItems.parameters = {
			...AsyncItems.parameters,
			docs: {
				...AsyncItems.parameters?.docs,
				source: {
					originalSource: "{\n  render: function Template(args) {\n    const [query, setQuery] = useState('');\n    const [loading, setLoading] = useState(false);\n    const [results, setResults] = useState<typeof URLS>([]);\n    const timeoutRef = useRef<ReturnType<typeof setTimeout>>(null);\n    return <Autocomplete.Root {...args} items={results} value={query} onValueChange={(newValue, ...changeArgs) => {\n      setQuery(newValue);\n      setLoading(true);\n      setResults([]);\n      if (timeoutRef.current) {\n        clearTimeout(timeoutRef.current);\n      }\n      timeoutRef.current = setTimeout(() => {\n        setResults(URLS.filter(item => item.value.toLowerCase().includes(newValue.toLowerCase())));\n        setLoading(false);\n      }, 500);\n      args.onValueChange?.(newValue, ...changeArgs);\n    }}>\n                <Autocomplete.Input aria-label=\"URL\" placeholder=\"Enter a URL\" />\n                <Autocomplete.Popup>\n                    <Autocomplete.Status>\n                        {loading ? <Stack direction=\"row\" gap=\"sm\" align=\"center\">\n                                <Spinner />\n                                Loading…\n                            </Stack> : <HiddenResultCount />}\n                    </Autocomplete.Status>\n                    <Autocomplete.Empty>\n                        {loading ? null : 'No matching items.'}\n                    </Autocomplete.Empty>\n                    <Autocomplete.List>\n                        <Autocomplete.ListBody>\n                            <Autocomplete.Collection>\n                                {(item: FixtureItem) => <Autocomplete.Item key={item.id} value={item}>\n                                        <Autocomplete.ItemLabel>\n                                            {item.value}\n                                        </Autocomplete.ItemLabel>\n                                    </Autocomplete.Item>}\n                            </Autocomplete.Collection>\n                        </Autocomplete.ListBody>\n                    </Autocomplete.List>\n                </Autocomplete.Popup>\n            </Autocomplete.Root>;\n  }\n}",
					...AsyncItems.parameters?.docs?.source
				},
				description: {
					story: "Fetches matching items asynchronously. `Status` shows loading, then a\nvisually hidden result count. Use `Empty` for no results.",
					...AsyncItems.parameters?.docs?.description
				}
			}
		};
		Inline.parameters = {
			...Inline.parameters,
			docs: {
				...Inline.parameters?.docs,
				source: {
					originalSource: "{\n  parameters: {\n    // The input keeps focus and arrow keys move through the options, so\n    // the scrollable list is reachable by keyboard.\n    a11y: {\n      config: {\n        rules: [{\n          id: 'scrollable-region-focusable',\n          enabled: false\n        }]\n      }\n    }\n  },\n  args: {\n    items: COMMANDS,\n    inline: true,\n    open: true\n  },\n  render: function Template(args) {\n    const [value, setValue] = useState('');\n    return <Autocomplete.Root {...args} value={value} onValueChange={(newValue, ...changeArgs) => {\n      setValue(newValue);\n      args.onValueChange?.(newValue, ...changeArgs);\n    }}>\n                <Autocomplete.Input aria-label=\"Command\" placeholder=\"Type a command\" />\n                <div style={{\n        minHeight: '200px',\n        maxHeight: '200px',\n        marginTop: 8,\n        overflow: 'auto'\n      }}>\n                    <Autocomplete.Empty>No commands found.</Autocomplete.Empty>\n                    <Autocomplete.List>\n                        <Autocomplete.Collection>\n                            {(command: FixtureItem) => <Autocomplete.Item key={command.id} value={command}>\n                                    <Autocomplete.ItemLabel>\n                                        {command.value}\n                                    </Autocomplete.ItemLabel>\n                                </Autocomplete.Item>}\n                        </Autocomplete.Collection>\n                    </Autocomplete.List>\n                </div>\n            </Autocomplete.Root>;\n  }\n}",
					...Inline.parameters?.docs?.source
				},
				description: {
					story: "The suggestion list can be rendered inline by enabling `inline` and `open`.",
					...Inline.parameters?.docs?.description
				}
			}
		};
		WithSearchIconAndClearButton.parameters = {
			...WithSearchIconAndClearButton.parameters,
			docs: {
				...WithSearchIconAndClearButton.parameters?.docs,
				source: {
					originalSource: "{\n  args: {\n    items: URLS,\n    children: [<Autocomplete.InputGroup key=\"inputGroup\">\n                <Autocomplete.Input aria-label=\"Search URLs\" placeholder=\"Search URLs\" render={<Input prefix={<InputLayout.Slot padding=\"minimal\">\n                                    <Icon icon={search} />\n                                </InputLayout.Slot>} suffix={<InputLayout.Slot padding=\"minimal\">\n                                    <Autocomplete.Clear />\n                                </InputLayout.Slot>} />} />\n            </Autocomplete.InputGroup>, <Autocomplete.Popup key=\"popup\">\n                <Autocomplete.Empty>No matching items.</Autocomplete.Empty>\n                <Autocomplete.List>\n                    <Autocomplete.ListBody>\n                        <Autocomplete.Collection>\n                            {(item: FixtureItem) => <Autocomplete.Item key={item.id} value={item}>\n                                    <Autocomplete.ItemLabel>\n                                        {item.value}\n                                    </Autocomplete.ItemLabel>\n                                </Autocomplete.Item>}\n                        </Autocomplete.Collection>\n                    </Autocomplete.ListBody>\n                </Autocomplete.List>\n            </Autocomplete.Popup>]\n  }\n}",
					...WithSearchIconAndClearButton.parameters?.docs?.source
				}
			}
		};
		InlineMentionAutocomplete.parameters = {
			...InlineMentionAutocomplete.parameters,
			docs: {
				...InlineMentionAutocomplete.parameters?.docs,
				source: {
					originalSource: "{\n  render: function Template(args) {\n    const inputRef = useRef<HTMLInputElement>(null);\n    const [value, setValue] = useState('');\n    const [open, setOpen] = useState(false);\n    const [filteredItems, setFilteredItems] = useState<FixtureItem[]>([]);\n    const triggerInfo = useRef<{\n      offset: number;\n      query: string;\n    } | null>(null);\n    function findTrigger(text: string, caretPos: number) {\n      const textBeforeCaret = text.slice(0, caretPos);\n      const triggerIndex = textBeforeCaret.lastIndexOf('@');\n      if (triggerIndex < 0) {\n        return null;\n      }\n      const query = textBeforeCaret.slice(triggerIndex + 1);\n      if (/\\s/.test(query)) {\n        return null;\n      }\n      if (triggerIndex > 0 && !/\\s/.test(text[triggerIndex - 1])) {\n        return null;\n      }\n      return {\n        offset: triggerIndex,\n        query\n      };\n    }\n    function handleValueChange(newValue: string, details: {\n      reason: string;\n    }) {\n      const trigger = triggerInfo.current;\n      if (details.reason === 'item-press' && trigger) {\n        const before = value.slice(0, trigger.offset);\n        const afterEndPos = trigger.offset + 1 + trigger.query.length;\n        const after = value.slice(afterEndPos);\n        const needsSpace = after.length > 0 && after[0] !== ' ';\n        const inserted = `@${newValue}${needsSpace ? ' ' : ''}`;\n        const fullValue = before + inserted + after;\n        setValue(fullValue);\n        triggerInfo.current = null;\n        setOpen(false);\n        const caretPos = before.length + inserted.length;\n        requestAnimationFrame(() => {\n          inputRef.current?.setSelectionRange(caretPos, caretPos);\n          inputRef.current?.focus();\n        });\n        return;\n      }\n      setValue(newValue);\n      const input = inputRef.current;\n      if (!input) {\n        return;\n      }\n      const caretPos = input.selectionStart ?? 0;\n      const detected = findTrigger(newValue, caretPos);\n      if (detected) {\n        triggerInfo.current = detected;\n        const matches = USERS.filter(user => user.value.toLowerCase().startsWith(detected.query.toLowerCase()));\n        setFilteredItems(matches);\n        setOpen(matches.length > 0);\n      } else {\n        triggerInfo.current = null;\n        setOpen(false);\n      }\n    }\n    return <Autocomplete.Root items={USERS} value={value} onValueChange={(newValue, ...changeArgs) => {\n      handleValueChange(newValue, ...changeArgs);\n      args.onValueChange?.(newValue, ...changeArgs);\n    }} filteredItems={filteredItems} open={open} onOpenChange={nextOpen => {\n      if (!nextOpen) {\n        setOpen(false);\n        triggerInfo.current = null;\n      }\n    }} mode=\"none\" openOnInputClick={false} autoHighlight>\n                <Autocomplete.Input ref={inputRef} aria-label=\"Comment\" placeholder=\"Type @ to mention someone\" />\n\n                <Autocomplete.Popup>\n                    <Autocomplete.List>\n                        <Autocomplete.ListBody>\n                            <Autocomplete.Collection>\n                                {(item: FixtureItem) => <Autocomplete.Item key={item.id} value={item}>\n                                        <Autocomplete.ItemLabel>\n                                            {item.value}\n                                        </Autocomplete.ItemLabel>\n                                    </Autocomplete.Item>}\n                            </Autocomplete.Collection>\n                        </Autocomplete.ListBody>\n                    </Autocomplete.List>\n                </Autocomplete.Popup>\n            </Autocomplete.Root>;\n  }\n}",
					...InlineMentionAutocomplete.parameters?.docs?.source
				},
				description: {
					story: "Experimental: Inline autocomplete triggered by `@`.",
					...InlineMentionAutocomplete.parameters?.docs?.description
				}
			}
		};
		WithCustomZIndex.parameters = {
			...WithCustomZIndex.parameters,
			docs: {
				...WithCustomZIndex.parameters?.docs,
				source: {
					originalSource: "{\n  name: 'With Custom z-index',\n  args: {\n    items: URLS,\n    children: [<Autocomplete.Input aria-label=\"URL\" placeholder=\"Enter a URL\" key=\"input\" />, <Autocomplete.Popup portal={<Autocomplete.Portal style={{\n      '--wp-ui-autocomplete-z-index': '9999'\n    }} />} key=\"popup\">\n                <Autocomplete.List>\n                    <Autocomplete.ListBody>\n                        <Autocomplete.Collection>\n                            {(item: FixtureItem) => <Autocomplete.Item key={item.id} value={item}>\n                                    <Autocomplete.ItemLabel>\n                                        {item.value}\n                                    </Autocomplete.ItemLabel>\n                                </Autocomplete.Item>}\n                        </Autocomplete.Collection>\n                    </Autocomplete.ListBody>\n                </Autocomplete.List>\n            </Autocomplete.Popup>]\n  }\n}",
					...WithCustomZIndex.parameters?.docs?.source
				},
				description: {
					story: "Popovers in Gutenberg are managed with explicit z-index values, which can\ncreate situations where an autocomplete popup renders below another popover\nwhen you want it above.\n\nThe `--wp-ui-autocomplete-z-index` CSS variable controls the z-index of the\n`Autocomplete` positioner. Override it either:\n\n- **Globally**, by setting the variable on `:root` or `body` (raises every\n  `Autocomplete` popup in the page), or\n- **Per instance**, by passing an `Autocomplete.Portal` with a `style` (or\n  `className`) to `Autocomplete.Popup`'s `portal` prop. The variable cascades\n  from the portal wrapper to everything rendered inside it.\n\nThis story demonstrates the per-instance approach.",
					...WithCustomZIndex.parameters?.docs?.description
				}
			}
		};
		Grouped.parameters = {
			...Grouped.parameters,
			docs: {
				...Grouped.parameters?.docs,
				source: {
					originalSource: "{\n  args: {\n    items: GROUPED_COMMANDS,\n    children: [<Autocomplete.Input aria-label=\"Command\" placeholder=\"Type a command\" key=\"input\" />, <Autocomplete.Popup key=\"popup\">\n                <Autocomplete.Empty>No matching items.</Autocomplete.Empty>\n                <Autocomplete.List>\n                    <Autocomplete.ListBody>\n                        <Autocomplete.Collection>\n                            {(group: FixtureGroup) => <Autocomplete.Group key={group.label} items={group.items}>\n                                    <Autocomplete.GroupLabel>\n                                        {group.label}\n                                    </Autocomplete.GroupLabel>\n                                    <Autocomplete.Collection>\n                                        {(item: FixtureItem) => <Autocomplete.Item key={item.id} value={item}>\n                                                <Autocomplete.ItemLabel>\n                                                    {item.value}\n                                                </Autocomplete.ItemLabel>\n                                            </Autocomplete.Item>}\n                                    </Autocomplete.Collection>\n                                </Autocomplete.Group>}\n                        </Autocomplete.Collection>\n                    </Autocomplete.ListBody>\n                </Autocomplete.List>\n            </Autocomplete.Popup>]\n  }\n}",
					...Grouped.parameters?.docs?.source
				},
				description: {
					story: "Suggestions can be organized into labeled groups with `Autocomplete.Group`\nand `Autocomplete.GroupLabel`.",
					...Grouped.parameters?.docs?.description
				}
			}
		};
		WithSeparator.parameters = {
			...WithSeparator.parameters,
			docs: {
				...WithSeparator.parameters?.docs,
				source: {
					originalSource: "{\n  args: {\n    items: [...COMMANDS.slice(0, 3), {\n      id: 'help',\n      value: 'Get help'\n    }],\n    openOnInputClick: true,\n    children: [<Autocomplete.Input aria-label=\"Command\" placeholder=\"Type a command\" key=\"input\" />, <Autocomplete.Popup key=\"popup\">\n                <Autocomplete.List>\n                    <Autocomplete.ListBody>\n                        <Autocomplete.Collection>\n                            {(item: FixtureItem, index: number) => <Fragment key={item.id}>\n                                    {item.id === 'help' && index > 0 && <Autocomplete.Separator />}\n                                    <Autocomplete.Item value={item}>\n                                        <Autocomplete.ItemLabel>\n                                            {item.value}\n                                        </Autocomplete.ItemLabel>\n                                    </Autocomplete.Item>\n                                </Fragment>}\n                        </Autocomplete.Collection>\n                    </Autocomplete.ListBody>\n                </Autocomplete.List>\n            </Autocomplete.Popup>]\n  }\n}",
					...WithSeparator.parameters?.docs?.source
				},
				description: {
					story: "Use `Autocomplete.Separator` to set choices apart from each other.",
					...WithSeparator.parameters?.docs?.description
				}
			}
		};
		Grid.parameters = {
			...Grid.parameters,
			docs: {
				...Grid.parameters?.docs,
				source: {
					originalSource: "{\n  args: {\n    items: EMOJI_GROUPS,\n    inline: true,\n    open: true,\n    grid: true\n  },\n  render: function Template(args) {\n    return <Autocomplete.Root {...args}>\n                <Autocomplete.Input aria-label=\"Search emojis\" placeholder=\"Search emojis\" />\n                <div style={{\n        marginTop: 'var(--wpds-dimension-gap-sm)'\n      }}>\n                    <Autocomplete.Empty>No matching emojis.</Autocomplete.Empty>\n                    <Autocomplete.List>\n                        {(group: (typeof EMOJI_GROUPS)[number]) => <Autocomplete.Group key={group.value} items={group.items}>\n                                <Autocomplete.GroupLabel>\n                                    {group.label}\n                                </Autocomplete.GroupLabel>\n                                {chunkItems(group.items, EMOJI_COLUMNS).map((row, rowIndex) => <Autocomplete.Row key={rowIndex} style={emojiPickerRowStyle}>\n                                            {row.map(emoji => <Autocomplete.Item key={emoji.value} value={emoji} aria-label={emoji.label} style={emojiPickerCellStyle}>\n                                                    <Autocomplete.ItemLabel style={emojiPickerLabelStyle}>\n                                                        <span aria-hidden=\"true\">\n                                                            {emoji.emoji}\n                                                        </span>\n                                                    </Autocomplete.ItemLabel>\n                                                </Autocomplete.Item>)}\n                                        </Autocomplete.Row>)}\n                            </Autocomplete.Group>}\n                    </Autocomplete.List>\n                </div>\n            </Autocomplete.Root>;\n  }\n}",
					...Grid.parameters?.docs?.source
				},
				description: {
					story: "`Autocomplete.Row` groups multiple `Autocomplete.Item` cells into grid rows.\nEnable `grid` on `Autocomplete.Root` so the listbox uses grid navigation.",
					...Grid.parameters?.docs?.description
				}
			}
		};
		PopupWidth.parameters = {
			...PopupWidth.parameters,
			docs: {
				...PopupWidth.parameters?.docs,
				source: {
					originalSource: "{\n  decorators: [narrowContainerDecorator],\n  args: {\n    items: longLabelPopupItems.map(item => item.label)\n  },\n  render: args => <Autocomplete.Root {...args}>\n            <Autocomplete.Input aria-label=\"Label\" />\n            <Autocomplete.Popup width=\"sm\">\n                <Autocomplete.List>\n                    <Autocomplete.ListBody>\n                        <Autocomplete.Collection>\n                            {(item: string) => <Autocomplete.Item key={item} value={item}>\n                                    <Autocomplete.ItemLabel>\n                                        {item}\n                                    </Autocomplete.ItemLabel>\n                                </Autocomplete.Item>}\n                        </Autocomplete.Collection>\n                    </Autocomplete.ListBody>\n                </Autocomplete.List>\n            </Autocomplete.Popup>\n        </Autocomplete.Root>\n}",
					...PopupWidth.parameters?.docs?.source
				},
				description: {
					story: "Use `width` on `Autocomplete.Popup` to constrain the popup relative to a narrow anchor.",
					...PopupWidth.parameters?.docs?.description
				}
			}
		};
	})))();
}
//#endregion
init_index_story();
export { AsyncItems, Default, Grid, Grouped, Inline, InlineMentionAutocomplete, OpenOnlyOnMatch, PopupWidth, WithCustomZIndex, WithItemDescriptions, WithSearchIconAndClearButton, WithSeparator, meta as default };
