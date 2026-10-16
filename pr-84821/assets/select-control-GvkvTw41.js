import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { a as Root, i as init_label, n as init_description, o as init_root, r as Label, t as Description } from "./description-D29ruIHn.js";
import { n as init_details, t as Details } from "./details-BGukt8Ac.js";
import { S as init_group, _ as ItemDescription, a as Root$1, b as init_group_label, c as init_popup, g as init_item_label, h as ItemLabel, i as init_separator, m as init_item$1, n as init_trigger, o as init_root$1, p as Item$1, r as Separator, s as Popup, t as Trigger, v as init_item_description, x as Group, y as GroupLabel } from "./trigger-1ashbH7T.js";
//#region ../packages/ui/src/form/select-control/item.tsx
var import_jsx_dev_runtime$1, _jsxFileName$1, Item;
function init_item() {
	return (init_item = __esmMin((() => {
		init_react();
		init_item$1();
		import_jsx_dev_runtime$1 = require_jsx_dev_runtime();
		_jsxFileName$1 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/select-control/item.tsx";
		Item = (0, import_react.forwardRef)(function UnforwardedItem(props, ref) {
			return /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(Item$1, {
				ref,
				...props
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 9,
				columnNumber: 10
			}, this);
		});
		try {
			Item.__docgenInfo = {
				"description": "",
				"displayName": "Item",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/select-control/item.tsx",
				"methods": [],
				"props": {
					"label": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/select/item/SelectItem.d.mts",
							"name": "SelectItemProps"
						}],
						"description": "Specifies the text label to use when the item is matched during keyboard text navigation.\n\nDefaults to the item text content if not provided.",
						"name": "label",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/select/item/SelectItem.d.mts",
							"name": "SelectItemProps"
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
					},
					"disabled": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/select/item/SelectItem.d.mts",
							"name": "SelectItemProps"
						}],
						"description": "Whether the component should ignore user interaction.",
						"name": "disabled",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/select/item/SelectItem.d.mts",
							"name": "SelectItemProps"
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
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/ui/src/form/select-control/select-control.tsx
var import_jsx_dev_runtime, _jsxFileName, SelectControl$1;
function init_select_control() {
	return (init_select_control = __esmMin((() => {
		init_react();
		init_root(), init_label(), init_description(), init_details(), init_root$1(), init_trigger(), init_popup(), init_item_label(), init_item_description();
		init_item();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/select-control/select-control.tsx";
		SelectControl$1 = (0, import_react.forwardRef)(function UnforwardedSelectControl({ className, children, items, label, description, details, hideLabelFromVision, placeholder, popupWidth = "content", size = "default", triggerContent, ...restProps }, ref) {
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Root, {
				className,
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, {
						hideFromVision: hideLabelFromVision,
						children: label
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 31,
						columnNumber: 4
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Root$1, {
						items,
						...restProps,
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trigger, {
							ref,
							placeholder,
							size,
							children: triggerContent
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 35,
							columnNumber: 5
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Popup, {
							width: popupWidth,
							children: children !== void 0 ? children : items?.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Item, {
								value: item,
								label: item.label,
								disabled: item.disabled,
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ItemLabel, { children: item.label }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 52,
									columnNumber: 10
								}, this), item.description ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ItemDescription, { children: item.description }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 56,
									columnNumber: 11
								}, this) : null]
							}, item.value ?? "null", true, {
								fileName: _jsxFileName,
								lineNumber: 46,
								columnNumber: 9
							}, this))
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 42,
							columnNumber: 5
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 34,
						columnNumber: 4
					}, this),
					description && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Description, { children: description }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 65,
						columnNumber: 5
					}, this),
					details && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Details, { children: details }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 67,
						columnNumber: 17
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 30,
				columnNumber: 3
			}, this);
		});
		try {
			SelectControl$1.__docgenInfo = {
				"description": "A complete select field with integrated label and description.",
				"displayName": "SelectControl",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/select-control/select-control.tsx",
				"methods": [],
				"props": {
					"id": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/select/root/SelectRoot.d.mts",
							"name": "SelectRootProps"
						}],
						"description": "The id of the Select.",
						"name": "id",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/select/root/SelectRoot.d.mts",
							"name": "SelectRootProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"form": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/select/root/SelectRoot.d.mts",
							"name": "SelectRootProps"
						}],
						"description": "Identifies the form that owns the hidden input.\nUseful when the select is rendered outside the form.",
						"name": "form",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/select/root/SelectRoot.d.mts",
							"name": "SelectRootProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"name": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/select/root/SelectRoot.d.mts",
							"name": "SelectRootProps"
						}],
						"description": "Identifies the field when a form is submitted.",
						"name": "name",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/select/root/SelectRoot.d.mts",
							"name": "SelectRootProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"open": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/select/root/SelectRoot.d.mts",
							"name": "SelectRootProps"
						}],
						"description": "Whether the select popup is currently open.",
						"name": "open",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/select/root/SelectRoot.d.mts",
							"name": "SelectRootProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"disabled": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/select/root/SelectRoot.d.mts",
							"name": "SelectRootProps"
						}],
						"description": "Whether the component should ignore user interaction.",
						"name": "disabled",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/select/root/SelectRoot.d.mts",
							"name": "SelectRootProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"defaultValue": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/select/root/SelectRoot.d.mts",
							"name": "SelectRootProps"
						}],
						"description": "The uncontrolled value of the select when it's initially rendered.\n\nTo render a controlled select, use the `value` prop instead.",
						"name": "defaultValue",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/select/root/SelectRoot.d.mts",
							"name": "SelectRootProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "SelectItem | null" }
					},
					"value": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/select/root/SelectRoot.d.mts",
							"name": "SelectRootProps"
						}],
						"description": "The value of the select. Use when controlled.",
						"name": "value",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/select/root/SelectRoot.d.mts",
							"name": "SelectRootProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "SelectItem | null" }
					},
					"autoComplete": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/select/root/SelectRoot.d.mts",
							"name": "SelectRootProps"
						}],
						"description": "Provides a hint to the browser for autofill.\n@see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes/autocomplete",
						"name": "autoComplete",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/select/root/SelectRoot.d.mts",
							"name": "SelectRootProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"readOnly": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/select/root/SelectRoot.d.mts",
							"name": "SelectRootProps"
						}],
						"description": "Whether the user should be unable to choose a different option from the select popup.",
						"name": "readOnly",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/select/root/SelectRoot.d.mts",
							"name": "SelectRootProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"required": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/select/root/SelectRoot.d.mts",
							"name": "SelectRootProps"
						}],
						"description": "Whether the user must choose a value before submitting a form.",
						"name": "required",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/select/root/SelectRoot.d.mts",
							"name": "SelectRootProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"onOpenChange": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/select/root/SelectRoot.d.mts",
							"name": "SelectRootProps"
						}],
						"description": "Event handler called when the select popup is opened or closed.",
						"name": "onOpenChange",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/select/root/SelectRoot.d.mts",
							"name": "SelectRootProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "((open: boolean, eventDetails: SelectRootOpenChangeEventDetails) => void)" }
					},
					"onOpenChangeComplete": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/select/root/SelectRoot.d.mts",
							"name": "SelectRootProps"
						}],
						"description": "Event handler called after any animations complete when the select popup is opened or closed.",
						"name": "onOpenChangeComplete",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/select/root/SelectRoot.d.mts",
							"name": "SelectRootProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "((open: boolean) => void)" }
					},
					"defaultOpen": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/select/root/SelectRoot.d.mts",
							"name": "SelectRootProps"
						}],
						"description": "Whether the select popup is initially open.\n\nTo render a controlled select popup, use the `open` prop instead.",
						"name": "defaultOpen",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/select/root/SelectRoot.d.mts",
							"name": "SelectRootProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"modal": {
						"defaultValue": { "value": "true" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/select/root/SelectRoot.d.mts",
							"name": "SelectRootProps"
						}],
						"description": "Determines if the select enters a modal state when open.\n- `true`: user interaction is limited to the select: document page scroll is locked and pointer interactions on outside elements are disabled.\n- `false`: user interaction with the rest of the document is allowed.\n\nOn touch devices, a `true` modal blocks outside taps but leaves the page scrollable unless the popup spans nearly the full viewport width, matching native iOS behavior.",
						"name": "modal",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/select/root/SelectRoot.d.mts",
							"name": "SelectRootProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"onValueChange": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/select/root/SelectRoot.d.mts",
							"name": "SelectRootProps"
						}],
						"description": "Event handler called when the value of the select changes.",
						"name": "onValueChange",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/select/root/SelectRoot.d.mts",
							"name": "SelectRootProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "((value: SelectItem | null, eventDetails: SelectRootChangeEventDetails) => void)" }
					},
					"highlightItemOnHover": {
						"defaultValue": { "value": "true" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/select/root/SelectRoot.d.mts",
							"name": "SelectRootProps"
						}],
						"description": "Whether moving the pointer over items should highlight them.\nDisabling this prop allows CSS `:hover` to be differentiated from the `:focus` (`data-highlighted`) state.",
						"name": "highlightItemOnHover",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/select/root/SelectRoot.d.mts",
							"name": "SelectRootProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"actionsRef": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/select/root/SelectRoot.d.mts",
							"name": "SelectRootProps"
						}],
						"description": "A ref to imperative actions.\n- `unmount`: Ends the closing phase of the select after an externally controlled closing animation finishes.\nCall `preventUnmountOnClose()` in `onOpenChange` first, otherwise the select completes closing on its own.\nWhether it leaves the DOM is decided by `keepMounted` on the portal.\n- `close`: Closes the select imperatively when called.",
						"name": "actionsRef",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/select/root/SelectRoot.d.mts",
							"name": "SelectRootProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "RefObject<SelectRootActions | null>" }
					},
					"itemToStringLabel": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/select/root/SelectRoot.d.mts",
							"name": "SelectRootProps"
						}],
						"description": "When the item values are objects (`<Select.Item value={object}>`), this function converts the object value to a string representation for display in the trigger.\nIf the shape of the object is `{ value, label }`, the label will be used automatically without needing to specify this prop.",
						"name": "itemToStringLabel",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/select/root/SelectRoot.d.mts",
							"name": "SelectRootProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "((itemValue: SelectItem) => string)" }
					},
					"itemToStringValue": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/select/root/SelectRoot.d.mts",
							"name": "SelectRootProps"
						}],
						"description": "When the item values are objects (`<Select.Item value={object}>`), this function converts the object value to a string representation for form submission.\nIf the shape of the object is `{ value, label }`, the value will be used automatically without needing to specify this prop.",
						"name": "itemToStringValue",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/select/root/SelectRoot.d.mts",
							"name": "SelectRootProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "((itemValue: SelectItem) => string)" }
					},
					"isItemEqualToValue": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/select/root/SelectRoot.d.mts",
							"name": "SelectRootProps"
						}],
						"description": "Custom comparison logic used to determine if a select item value matches the current selected value. Useful when item values are objects without matching referentially.\nDefaults to `Object.is` comparison.",
						"name": "isItemEqualToValue",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/select/root/SelectRoot.d.mts",
							"name": "SelectRootProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "((itemValue: SelectItem, value: SelectItem) => boolean)" }
					},
					"label": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/form/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The accessible label. All controls must be labeled.",
						"name": "label",
						"required": true,
						"tags": {},
						"type": { "name": "string" }
					},
					"description": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/form/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The accessible description, associated using `aria-describedby`.\n\nFor screen reader accessibility, this should only contain plain text,\nand no semantics such as links.",
						"name": "description",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"details": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/form/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Additional information about the field, which unlike a normal description,\ncan include links and other semantic elements.\n\nDo not use this prop when the content is only plain text;\nuse `description` instead.",
						"name": "details",
						"required": false,
						"tags": {},
						"type": { "name": "ReactNode" }
					},
					"hideLabelFromVision": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/form/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Whether to visually hide the label while keeping it accessible\nto screen readers.",
						"name": "hideLabelFromVision",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"className": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/form/select-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "CSS class to apply.",
						"name": "className",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"items": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/form/select-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The array of option items to render in the select.",
						"name": "items",
						"required": false,
						"tags": {},
						"type": { "name": "SelectItem[]" }
					},
					"popupWidth": {
						"defaultValue": { "value": "content" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/form/select-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Controls how the popup width is constrained relative to its anchor.\n\nFor all presets, the popup is never narrower than its anchor.\n\n- `'anchor'`: Fixed width matching the anchor width.\n- `'content'`: Width grows with item labels between the anchor and available\n  viewport bounds.\n- `'sm'`: Fixed width at the small surface width token (`--wpds-dimension-surface-width-sm`).\n- `'md'`: Fixed width at the medium surface width token (`--wpds-dimension-surface-width-md`).\n- `'lg'`: Fixed width at the large surface width token (`--wpds-dimension-surface-width-lg`).\n- `'available'`: Fixed width at the available viewport width (`--available-width`).",
						"name": "popupWidth",
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
					"placeholder": {
						"defaultValue": { "value": "__( 'Select' )" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/form/select-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Text to show when no value is selected. This is overridden by `triggerContent`\nif specified, or by a null item's label in `items`.",
						"name": "placeholder",
						"required": false,
						"tags": {},
						"type": { "name": "ReactNode" }
					},
					"triggerContent": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/form/select-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The custom trigger content to use instead of the default.\n\n```jsx\ntriggerContent={ ( item ) => item.label }\n```",
						"name": "triggerContent",
						"required": false,
						"tags": {},
						"type": { "name": "ReactNode | ((item: SelectItem) => ReactNode)" }
					},
					"size": {
						"defaultValue": { "value": "default" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/form/select-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The size of the control.",
						"name": "size",
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "\"default\" | \"compact\"",
							"value": [{ "value": "\"default\"" }, { "value": "\"compact\"" }]
						}
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/ui/src/form/select-control/index.ts
var SelectControl;
function init_select_control$1() {
	return (init_select_control$1 = __esmMin((() => {
		init_select_control();
		init_group();
		init_group_label();
		init_item_description();
		init_item_label();
		init_separator();
		init_item();
		Group.displayName = "SelectControl.Group";
		GroupLabel.displayName = "SelectControl.GroupLabel";
		Item.displayName = "SelectControl.Item";
		ItemLabel.displayName = "SelectControl.ItemLabel";
		ItemDescription.displayName = "SelectControl.ItemDescription";
		SelectControl = Object.assign(SelectControl$1, {
			/**
			* Groups related items together with an associated label rendered by
			* `SelectControl.GroupLabel`.
			*/
			Group,
			/**
			* Renders a label for a `SelectControl.Group`.
			*/
			GroupLabel,
			/**
			* An item rendered inside a `SelectControl` popup.
			*/
			Item,
			/**
			* The primary label of a select item.
			*/
			ItemLabel,
			/**
			* Supplementary content that describes a select item via
			* `aria-describedby`.
			*/
			ItemDescription,
			/**
			* Renders a visual separator between items or groups.
			*/
			Separator
		});
	})))();
}
//#endregion
export { init_select_control$1 as n, SelectControl as t };
