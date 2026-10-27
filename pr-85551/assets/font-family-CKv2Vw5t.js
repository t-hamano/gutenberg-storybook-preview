import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as __, t as init_build_module } from "./build-module-v04us4E2.js";
import { a as init_clsx, i as clsx } from "./iframe-UtSZlYID.js";
import { n as init_visually_hidden, t as VisuallyHidden } from "./visually-hidden-DgPx5QZ4.js";
import { a as Popup, c as init_item, d as ItemDescription, f as init_item_description, i as init_root, l as ItemLabel, n as init_trigger, o as init_popup, r as Root, s as Item, t as Trigger, u as init_item_label } from "./trigger-BIPvD-kF.js";
import { a as Root$1, i as init_label, n as init_description, o as init_root$1, r as Label, t as Description } from "./description-CUmrhcFD.js";
import { n as useSettings, t as init_use_settings } from "./use-settings-DWr84Jo8.js";
//#region ../packages/block-editor/src/components/font-family/index.tsx
function FontFamilyControl({ __next40pxDefaultSize: _next40pxDefaultSize, value = "", onChange, fontFamilies, className, label = __("Font"), hideLabelFromVision, describedBy, size, disabled, options: customOptions, __experimentalShowSelectedHint = false, showSelectedHint = __experimentalShowSelectedHint, __nextUnconstrainedWidth: _nextUnconstrainedWidth, __nextHasNoMarginBottom: _nextHasNoMarginBottom, ...props }) {
	const [blockLevelFontFamilies] = useSettings("typography.fontFamilies");
	if (!fontFamilies) fontFamilies = blockLevelFontFamilies;
	if (!fontFamilies || fontFamilies.length === 0) return null;
	const options = customOptions ? customOptions.map((option) => ({
		value: option.key || null,
		label: option.name,
		style: option.style,
		className: option.className,
		description: option.hint ?? option.__experimentalHint
	})) : [{
		value: null,
		label: __("Default")
	}, ...fontFamilies.map(({ fontFamily, name }) => ({
		value: fontFamily,
		label: name || fontFamily,
		style: { fontFamily }
	}))];
	const selectedValue = options.find((option) => option.value === (value || null)) ?? options[0] ?? null;
	const selectedHint = showSelectedHint && selectedValue?.description;
	const description = [selectedHint, describedBy].filter(Boolean).join(" ");
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Root$1, {
		className: clsx("block-editor-font-family-control", className),
		disabled,
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, {
				className: "block-editor-font-family-control__label",
				hideFromVision: hideLabelFromVision,
				children: label
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 84,
				columnNumber: 4
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Root, {
				value: selectedValue,
				onValueChange: (item) => onChange(item?.value ?? ""),
				items: options,
				disabled,
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trigger, {
					size,
					...props,
					children: selectedHint ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [selectedValue.label, /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
						className: "block-editor-font-family-control__hint",
						"aria-hidden": "true",
						children: [" ", selectedHint]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 100,
						columnNumber: 8
					}, this)] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 98,
						columnNumber: 7
					}, this) : void 0
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 96,
					columnNumber: 5
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Popup, {
					width: "content",
					children: options.map((option) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Item, {
						value: option,
						className: option.className,
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ItemLabel, {
							style: option.style,
							children: option.label
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 117,
							columnNumber: 8
						}, this), !!option.description && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ItemDescription, { children: option.description }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 121,
							columnNumber: 9
						}, this)]
					}, option.value, true, {
						fileName: _jsxFileName,
						lineNumber: 112,
						columnNumber: 7
					}, this))
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 110,
					columnNumber: 5
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 90,
				columnNumber: 4
			}, this),
			description && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(VisuallyHidden, {
				render: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Description, {}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 130,
					columnNumber: 30
				}, this),
				children: description
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 130,
				columnNumber: 5
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 80,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime, _jsxFileName;
function init_font_family() {
	return (init_font_family = __esmMin((() => {
		init_clsx();
		init_root$1(), init_label(), init_description(), init_root(), init_trigger(), init_popup(), init_item(), init_item_label(), init_item_description(), init_visually_hidden();
		init_build_module();
		init_use_settings();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/block-editor/src/components/font-family/index.tsx";
		try {
			FontFamilyControl.__docgenInfo = {
				"description": "",
				"displayName": "fontfamily",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/block-editor/src/components/font-family/index.tsx",
				"methods": [],
				"props": {
					"__next40pxDefaultSize": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/font-family/types.ts",
							"name": "FontFamilyControlProps"
						}],
						"description": "Start opting into the larger default height that will become the\ndefault size in a future version.\n@deprecated Default behavior since WordPress 7.1. Prop can be safely removed.",
						"name": "__next40pxDefaultSize",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/font-family/types.ts",
							"name": "FontFamilyControlProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"value": {
						"defaultValue": { "value": "" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/font-family/types.ts",
							"name": "FontFamilyControlProps"
						}],
						"description": "The selected font family.",
						"name": "value",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/font-family/types.ts",
							"name": "FontFamilyControlProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"onChange": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/font-family/types.ts",
							"name": "FontFamilyControlProps"
						}],
						"description": "Called with the selected font family, or `''` for the default.",
						"name": "onChange",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/font-family/types.ts",
							"name": "FontFamilyControlProps"
						},
						"required": true,
						"tags": {},
						"type": { "name": "(value: string) => void" }
					},
					"fontFamilies": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/font-family/types.ts",
							"name": "FontFamilyControlProps"
						}],
						"description": "The font families to choose from, in place of the block's settings.",
						"name": "fontFamilies",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/font-family/types.ts",
							"name": "FontFamilyControlProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "FontFamilyOption[]" }
					},
					"className": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/font-family/types.ts",
							"name": "FontFamilyControlProps"
						}],
						"description": "",
						"name": "className",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/font-family/types.ts",
							"name": "FontFamilyControlProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"label": {
						"defaultValue": { "value": "__( 'Font' )" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/font-family/types.ts",
							"name": "FontFamilyControlProps"
						}],
						"description": "",
						"name": "label",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/font-family/types.ts",
							"name": "FontFamilyControlProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"hideLabelFromVision": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/font-family/types.ts",
							"name": "FontFamilyControlProps"
						}],
						"description": "",
						"name": "hideLabelFromVision",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/font-family/types.ts",
							"name": "FontFamilyControlProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"describedBy": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/font-family/types.ts",
							"name": "FontFamilyControlProps"
						}],
						"description": "",
						"name": "describedBy",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/font-family/types.ts",
							"name": "FontFamilyControlProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"size": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/font-family/types.ts",
							"name": "FontFamilyControlProps"
						}],
						"description": "",
						"name": "size",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/font-family/types.ts",
							"name": "FontFamilyControlProps"
						},
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "\"small\" | \"default\"",
							"value": [{ "value": "\"small\"" }, { "value": "\"default\"" }]
						}
					},
					"disabled": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/font-family/types.ts",
							"name": "FontFamilyControlProps"
						}],
						"description": "",
						"name": "disabled",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/font-family/types.ts",
							"name": "FontFamilyControlProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"onBlur": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/font-family/types.ts",
							"name": "FontFamilyControlProps"
						}],
						"description": "",
						"name": "onBlur",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/font-family/types.ts",
							"name": "FontFamilyControlProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "FocusEventHandler<HTMLButtonElement>" }
					},
					"onFocus": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/font-family/types.ts",
							"name": "FontFamilyControlProps"
						}],
						"description": "",
						"name": "onFocus",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/font-family/types.ts",
							"name": "FontFamilyControlProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "FocusEventHandler<HTMLButtonElement>" }
					},
					"onMouseOut": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/font-family/types.ts",
							"name": "FontFamilyControlProps"
						}],
						"description": "",
						"name": "onMouseOut",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/font-family/types.ts",
							"name": "FontFamilyControlProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "MouseEventHandler<HTMLButtonElement>" }
					},
					"onMouseOver": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/font-family/types.ts",
							"name": "FontFamilyControlProps"
						}],
						"description": "",
						"name": "onMouseOver",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/font-family/types.ts",
							"name": "FontFamilyControlProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "MouseEventHandler<HTMLButtonElement>" }
					},
					"options": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/font-family/types.ts",
							"name": "FontFamilyControlProps"
						}],
						"description": "Custom options, in place of the font family presets.",
						"name": "options",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/font-family/types.ts",
							"name": "FontFamilyControlProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "readonly FontFamilyCustomOption[]" }
					},
					"showSelectedHint": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/font-family/types.ts",
							"name": "FontFamilyControlProps"
						}],
						"description": "Show the selected option's hint in the trigger.",
						"name": "showSelectedHint",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/font-family/types.ts",
							"name": "FontFamilyControlProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"__experimentalShowSelectedHint": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/font-family/types.ts",
							"name": "FontFamilyControlProps"
						}],
						"description": "@deprecated Use `showSelectedHint` instead.",
						"name": "__experimentalShowSelectedHint",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/font-family/types.ts",
							"name": "FontFamilyControlProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"__nextUnconstrainedWidth": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/font-family/types.ts",
							"name": "FontFamilyControlProps"
						}],
						"description": "@deprecated The unconstrained width is the default. The prop can be safely removed.",
						"name": "__nextUnconstrainedWidth",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/font-family/types.ts",
							"name": "FontFamilyControlProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"__nextHasNoMarginBottom": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/font-family/types.ts",
							"name": "FontFamilyControlProps"
						}],
						"description": "@deprecated The prop is no longer needed and is ignored.",
						"name": "__nextHasNoMarginBottom",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/font-family/types.ts",
							"name": "FontFamilyControlProps"
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
export { init_font_family as n, FontFamilyControl as t };
