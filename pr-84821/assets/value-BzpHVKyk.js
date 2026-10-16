import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as __, t as init_build_module } from "./build-module-v04us4E2.js";
import { a as init_clsx, i as clsx } from "./iframe-Dbjzp1_m.js";
import { i as init_ComboboxInputGroup, n as init_ComboboxClear, r as ComboboxInputGroup, t as ComboboxClear } from "./ComboboxClear-aWVtjvgR.js";
import { n as init_ComboboxValue, t as ComboboxValue } from "./ComboboxValue-CFbZnTd0.js";
import { a as ComboboxChips, i as init_ComboboxChip, n as init_ComboboxChipRemove, o as init_ComboboxChips, r as ComboboxChip, t as ComboboxChipRemove } from "./ComboboxChipRemove-DDhmTURC.js";
import { t as close_small_default } from "./close-small-BAxZctqD.js";
import { n as init_visually_hidden, t as VisuallyHidden } from "./visually-hidden-FYENO0pz.js";
import { n as init_icon_button, t as IconButton } from "./icon-button-1MUTgcAK.js";
import { B as init_style_module, V as style_module_default } from "./fixtures-C8cercBz.js";
import { r as init_build_module$1 } from "./library.story-CFsmdbdz.js";
//#region ../packages/ui/src/form/primitives/combobox/chips.tsx
var import_jsx_dev_runtime$4, _jsxFileName$4, Chips;
function init_chips() {
	return (init_chips = __esmMin((() => {
		init_ComboboxChips();
		init_react();
		import_jsx_dev_runtime$4 = require_jsx_dev_runtime();
		_jsxFileName$4 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/primitives/combobox/chips.tsx";
		Chips = (0, import_react.forwardRef)(function UnforwardedChips(props, ref) {
			return /* @__PURE__ */ (0, import_jsx_dev_runtime$4.jsxDEV)(ComboboxChips, {
				ref,
				...props
			}, void 0, false, {
				fileName: _jsxFileName$4,
				lineNumber: 7,
				columnNumber: 10
			}, this);
		});
		try {
			Chips.__docgenInfo = {
				"description": "",
				"displayName": "Chips",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/primitives/combobox/chips.tsx",
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
//#region ../packages/ui/src/form/primitives/combobox/chip-with-remove.tsx
var import_jsx_dev_runtime$3, _jsxFileName$3, ChipWithRemove;
function init_chip_with_remove() {
	return (init_chip_with_remove = __esmMin((() => {
		init_ComboboxChip(), init_ComboboxChipRemove();
		init_react();
		init_clsx();
		init_build_module();
		init_build_module$1();
		init_icon_button();
		init_visually_hidden();
		init_style_module();
		import_jsx_dev_runtime$3 = require_jsx_dev_runtime();
		_jsxFileName$3 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/primitives/combobox/chip-with-remove.tsx";
		ChipWithRemove = (0, import_react.forwardRef)(function UnforwardedChipWithRemove({ className, children, prefix, removeLabel = __("Remove"), "aria-label": ariaLabel, "aria-labelledby": ariaLabelledby, "aria-describedby": ariaDescribedby, ...restProps }, ref) {
			const labelId = (0, import_react.useId)();
			const hintId = (0, import_react.useId)();
			const chipNameFrom = ariaLabelledby || labelId;
			const nameFromAriaLabel = Boolean(ariaLabel && !ariaLabelledby);
			return /* @__PURE__ */ (0, import_jsx_dev_runtime$3.jsxDEV)(ComboboxChip, {
				ref,
				className: clsx(style_module_default.chip, className),
				...restProps,
				"aria-labelledby": chipNameFrom,
				"aria-describedby": clsx(ariaDescribedby, hintId) || void 0,
				children: [
					prefix && /* @__PURE__ */ (0, import_jsx_dev_runtime$3.jsxDEV)("span", {
						className: style_module_default["chip-prefix"],
						"aria-hidden": nameFromAriaLabel ? true : void 0,
						children: prefix
					}, void 0, false, {
						fileName: _jsxFileName$3,
						lineNumber: 45,
						columnNumber: 5
					}, this),
					nameFromAriaLabel && /* @__PURE__ */ (0, import_jsx_dev_runtime$3.jsxDEV)(VisuallyHidden, {
						id: labelId,
						"aria-hidden": "true",
						children: ariaLabel
					}, void 0, false, {
						fileName: _jsxFileName$3,
						lineNumber: 53,
						columnNumber: 5
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime$3.jsxDEV)("span", {
						id: nameFromAriaLabel ? void 0 : labelId,
						className: style_module_default["chip-content"],
						"aria-hidden": nameFromAriaLabel ? true : void 0,
						children
					}, void 0, false, {
						fileName: _jsxFileName$3,
						lineNumber: 57,
						columnNumber: 4
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime$3.jsxDEV)(VisuallyHidden, {
						id: hintId,
						"aria-hidden": "true",
						children: __("Press Backspace or Delete to remove.")
					}, void 0, false, {
						fileName: _jsxFileName$3,
						lineNumber: 64,
						columnNumber: 4
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime$3.jsxDEV)(ComboboxChipRemove, {
						className: style_module_default["chip-remove"],
						render: (props, { disabled }) => /* @__PURE__ */ (0, import_jsx_dev_runtime$3.jsxDEV)(IconButton, {
							icon: close_small_default,
							label: removeLabel,
							size: "small",
							variant: "minimal",
							tone: "neutral",
							focusableWhenDisabled: false,
							disabled,
							...props,
							"aria-describedby": clsx(props["aria-describedby"], chipNameFrom) || void 0
						}, void 0, false, {
							fileName: _jsxFileName$3,
							lineNumber: 70,
							columnNumber: 6
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName$3,
						lineNumber: 67,
						columnNumber: 4
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName$3,
				lineNumber: 37,
				columnNumber: 3
			}, this);
		});
		try {
			ChipWithRemove.__docgenInfo = {
				"description": "A utility component that combines a chip and a remove button,\nwith standard styling.",
				"displayName": "ChipWithRemove",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/primitives/combobox/chip-with-remove.tsx",
				"methods": [],
				"props": {
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
					"prefix": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/form/primitives/combobox/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Circular element to render before the chip content.",
						"name": "prefix",
						"required": false,
						"tags": {},
						"type": { "name": "ReactNode" }
					},
					"removeLabel": {
						"defaultValue": { "value": "__( 'Remove' )" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/form/primitives/combobox/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Accessible label for the remove button.\nKeep this to the action (for example `Remove`). The chip label describes\nthe button.",
						"name": "removeLabel",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/ui/src/form/primitives/combobox/clear.tsx
var import_jsx_dev_runtime$2, _jsxFileName$2, DEFAULT_RENDER, Clear;
function init_clear() {
	return (init_clear = __esmMin((() => {
		init_ComboboxClear();
		init_react();
		init_build_module$1();
		init_build_module();
		init_icon_button();
		import_jsx_dev_runtime$2 = require_jsx_dev_runtime();
		_jsxFileName$2 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/primitives/combobox/clear.tsx";
		DEFAULT_RENDER = ({ "aria-label": ariaLabel = __("Clear"), ...props }, { disabled }) => /* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)(IconButton, {
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
			fileName: _jsxFileName$2,
			lineNumber: 12,
			columnNumber: 2
		}, void 0);
		Clear = (0, import_react.forwardRef)(function UnforwardedClear({ render = DEFAULT_RENDER, ...restProps }, ref) {
			return /* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)(ComboboxClear, {
				ref,
				render,
				...restProps
			}, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 34,
				columnNumber: 4
			}, this);
		});
		try {
			Clear.__docgenInfo = {
				"description": "A button that clears the selected value(s).",
				"displayName": "Clear",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/primitives/combobox/clear.tsx",
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
						"defaultValue": { "value": "(\n	{ 'aria-label': ariaLabel = __( 'Clear' ), ...props }: ComboboxClearProps,\n	{ disabled }: _Combobox.Clear.State\n) => (\n	<IconButton\n		icon={ closeSmall }\n		focusableWhenDisabled={ false }\n		disabled={ disabled }\n		aria-hidden={ disabled || undefined }\n		size=\"small\"\n		variant=\"minimal\"\n		tone=\"neutral\"\n		label={ ariaLabel }\n		{ ...props }\n	/>\n)" },
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
//#region ../packages/ui/src/form/primitives/combobox/input-group.tsx
var import_jsx_dev_runtime$1, _jsxFileName$1, InputGroup;
function init_input_group() {
	return (init_input_group = __esmMin((() => {
		init_ComboboxInputGroup();
		init_react();
		import_jsx_dev_runtime$1 = require_jsx_dev_runtime();
		_jsxFileName$1 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/primitives/combobox/input-group.tsx";
		InputGroup = (0, import_react.forwardRef)(function UnforwardedInputGroup(props, ref) {
			return /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(ComboboxInputGroup, {
				ref,
				...props
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 13,
				columnNumber: 10
			}, this);
		});
		try {
			InputGroup.__docgenInfo = {
				"description": "Wrapper around `Combobox.Input` that defines the visual control\nboundary when the input is composed with prefix/suffix slots or other\nelements. Without this wrapper, the popup anchors to the bare `<input>`\ninstead of the full control. Also adds `role=\"group\"`.",
				"displayName": "InputGroup",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/primitives/combobox/input-group.tsx",
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
//#region ../packages/ui/src/form/primitives/combobox/value.tsx
function Value(props) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ComboboxValue, { ...props }, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 5,
		columnNumber: 9
	}, this);
}
var import_jsx_dev_runtime, _jsxFileName;
function init_value() {
	return (init_value = __esmMin((() => {
		init_ComboboxValue();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/primitives/combobox/value.tsx";
		try {
			Value.__docgenInfo = {
				"description": "",
				"displayName": "Value",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/primitives/combobox/value.tsx",
				"methods": [],
				"props": {
					"children": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/combobox/value/ComboboxValue.d.mts",
							"name": "ComboboxValueProps"
						}],
						"description": "Accepts a function that returns a `ReactNode` to format the selected value.\nTreat the value as read-only: in `multiple` mode it may be a shared frozen array\nwhen nothing is selected.",
						"name": "children",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/combobox/value/ComboboxValue.d.mts",
							"name": "ComboboxValueProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "ReactNode | ((selectedValue: any) => ReactNode)" }
					},
					"placeholder": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/combobox/value/ComboboxValue.d.mts",
							"name": "ComboboxValueProps"
						}],
						"description": "The placeholder value to display when no value is selected.\nThis is overridden by `children` if specified, or by a null item's label in `items`.",
						"name": "placeholder",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/combobox/value/ComboboxValue.d.mts",
							"name": "ComboboxValueProps"
						},
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
export { Clear as a, init_chip_with_remove as c, init_input_group as i, Chips as l, init_value as n, init_clear as o, InputGroup as r, ChipWithRemove as s, Value as t, init_chips as u };
