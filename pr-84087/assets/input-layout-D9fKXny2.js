import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { o as clsx, s as init_clsx } from "./iframe-D4D-SsYo.js";
import { n as resets_module_default, t as init_resets_module } from "./resets.module-CJil9Bz6.js";
import { n as init_global_css_defense_module, t as global_css_defense_module_default } from "./global-css-defense.module-CSCRyOGP.js";
//#region ../packages/ui/src/form/primitives/input-layout/style.module.css
var style_module_default;
function init_style_module() {
	return (init_style_module = __esmMin((() => {
		style_module_default = {
			"input-layout": "_input-layout_13p6e_5",
			"is-size-compact": "_is-size-compact_13p6e_21",
			"is-size-small": "_is-size-small_13p6e_26",
			"is-disabled": "_is-disabled_13p6e_31",
			"is-borderless": "_is-borderless_13p6e_39",
			"input-layout-slot": "_input-layout-slot_13p6e_56",
			"slot-wrapper": "_slot-wrapper_13p6e_84",
			"is-padding-minimal": "_is-padding-minimal_13p6e_92"
		};
	})))();
}
//#endregion
//#region ../packages/ui/src/form/primitives/input-layout/input-layout.tsx
var import_jsx_dev_runtime$1, _jsxFileName$1, InputLayout$1;
function init_input_layout() {
	return (init_input_layout = __esmMin((() => {
		init_clsx();
		init_react();
		init_global_css_defense_module();
		init_resets_module();
		init_style_module();
		import_jsx_dev_runtime$1 = require_jsx_dev_runtime();
		_jsxFileName$1 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/primitives/input-layout/input-layout.tsx";
		InputLayout$1 = (0, import_react.forwardRef)(function UnforwardedInputLayout({ className, children, visuallyDisabled, size = "default", isBorderless, prefix, suffix, ...restProps }, ref) {
			return /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)("div", {
				ref,
				className: clsx(global_css_defense_module_default.div, resets_module_default["box-sizing"], style_module_default["input-layout"], style_module_default[`is-size-${size}`], visuallyDisabled && style_module_default["is-disabled"], isBorderless && style_module_default["is-borderless"], className),
				...restProps,
				children: [
					import_react.Children.count(prefix) > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)("div", {
						className: style_module_default["slot-wrapper"],
						"data-slot-type": "prefix",
						children: prefix
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 41,
						columnNumber: 6
					}, this),
					children,
					import_react.Children.count(suffix) > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)("div", {
						className: style_module_default["slot-wrapper"],
						"data-slot-type": "suffix",
						children: suffix
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 50,
						columnNumber: 6
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName$1,
				lineNumber: 27,
				columnNumber: 4
			}, this);
		});
		try {
			InputLayout$1.__docgenInfo = {
				"description": "A low-level component that handles the visual layout of an input-like field,\nincluding disabled states and standard prefix/suffix slots.",
				"displayName": "InputLayout",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/primitives/input-layout/input-layout.tsx",
				"methods": [],
				"props": {
					"visuallyDisabled": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/form/primitives/input-layout/types.ts",
							"name": "InputLayoutProps"
						}],
						"description": "Whether the field should be visually styled as disabled.",
						"name": "visuallyDisabled",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/ui/src/form/primitives/input-layout/types.ts",
							"name": "InputLayoutProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"size": {
						"defaultValue": { "value": "default" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/form/primitives/input-layout/types.ts",
							"name": "InputLayoutProps"
						}],
						"description": "The size of the field.\n\nThe 'small' size is reserved for rare use cases. Most components should not support it.",
						"name": "size",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/ui/src/form/primitives/input-layout/types.ts",
							"name": "InputLayoutProps"
						},
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
					"isBorderless": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/form/primitives/input-layout/types.ts",
							"name": "InputLayoutProps"
						}],
						"description": "Whether the field should hide the border.",
						"name": "isBorderless",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/ui/src/form/primitives/input-layout/types.ts",
							"name": "InputLayoutProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"prefix": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/form/primitives/input-layout/types.ts",
							"name": "InputLayoutProps"
						}],
						"description": "Element to render before the input.",
						"name": "prefix",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/ui/src/form/primitives/input-layout/types.ts",
							"name": "InputLayoutProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "ReactNode" }
					},
					"suffix": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/form/primitives/input-layout/types.ts",
							"name": "InputLayoutProps"
						}],
						"description": "Element to render after the input.",
						"name": "suffix",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/ui/src/form/primitives/input-layout/types.ts",
							"name": "InputLayoutProps"
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
//#region ../packages/ui/src/form/primitives/input-layout/slot.tsx
var import_jsx_dev_runtime, _jsxFileName, InputLayoutSlot;
function init_slot() {
	return (init_slot = __esmMin((() => {
		init_clsx();
		init_react();
		init_style_module();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/primitives/input-layout/slot.tsx";
		InputLayoutSlot = (0, import_react.forwardRef)(function UnforwardedInputLayoutSlot({ padding = "default", className, ...restProps }, ref) {
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				ref,
				className: clsx(style_module_default["input-layout-slot"], style_module_default[`is-padding-${padding}`], className),
				...restProps
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 17,
				columnNumber: 3
			}, this);
		});
		InputLayoutSlot.displayName = "InputLayout.Slot";
		try {
			InputLayoutSlot.__docgenInfo = {
				"description": "A layout helper to add paddings in a prefix or suffix.",
				"displayName": "InputLayout.Slot",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/primitives/input-layout/slot.tsx",
				"methods": [],
				"props": { "padding": {
					"defaultValue": { "value": "default" },
					"declarations": [{
						"fileName": "gutenberg-storybook-preview/packages/ui/src/form/primitives/input-layout/types.ts",
						"name": "InputLayoutSlotProps"
					}],
					"description": "The padding of the slot.\n\n`minimal` will work best when the slot content is a button or icon.",
					"name": "padding",
					"parent": {
						"fileName": "gutenberg-storybook-preview/packages/ui/src/form/primitives/input-layout/types.ts",
						"name": "InputLayoutSlotProps"
					},
					"required": false,
					"tags": {},
					"type": {
						"name": "enum",
						"raw": "\"default\" | \"minimal\"",
						"value": [{ "value": "\"default\"" }, { "value": "\"minimal\"" }]
					}
				} },
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/ui/src/form/primitives/input-layout/index.ts
var InputLayout;
function init_input_layout$1() {
	return (init_input_layout$1 = __esmMin((() => {
		init_input_layout();
		init_slot();
		InputLayout = Object.assign(InputLayout$1, { Slot: InputLayoutSlot });
	})))();
}
//#endregion
export { init_input_layout$1 as n, InputLayout as t };
