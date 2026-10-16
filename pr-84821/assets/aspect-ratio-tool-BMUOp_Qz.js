import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { i as _x, n as __, t as init_build_module } from "./build-module-v04us4E2.js";
import { a as init_clsx, i as clsx } from "./iframe-Dbjzp1_m.js";
import { n as reset_default } from "./reset-CF3TDagv.js";
import { n as init_select_control, t as SelectControl } from "./select-control-BaQ9cGOe.js";
import { n as init_icon, t as icon_default } from "./icon-BIO3gLKi.js";
import { n as button_default, r as init_button } from "./button-BxEkUQAF.js";
import { n as init_component, t as component_default } from "./component-BTLHTdkN.js";
import { n as useSettings, t as init_use_settings } from "./use-settings-DBuseju1.js";
import { r as init_build_module$1 } from "./library.story-CFsmdbdz.js";
//#region ../packages/block-editor/src/components/global-styles/inheritance/index.tsx
/**
* Returns props to spread onto a wrapping `<InheritanceToolsPanelItem>`
* so its descendant label picks up the inherited-from-Global-Styles
* visual treatment.
*
* When `isInherited` is true without a local override, the descendant
* label text receives the inherited-from-Global-Styles treatment
* (dotted underline). No dot is shown.
*
* When `hasLocalOverride` is true, a small reset dot is rendered as a
* sibling of the control exposing a "Reset to inherited value" action.
*
* The two states are mutually exclusive at the source. If both are passed,
* only the local-override class is returned.
*
* Returned object shape allows direct spread:
*
*     <InheritanceToolsPanelItem
*         { ...getInheritanceProps( isInherited, hasLocalOverride ) }
*         label={ __( 'Line height' ) }
*         …
*     >
*
* @param isInherited      Control is inheriting at rest.
* @param hasLocalOverride Local override is set AND
*                         there is an inherited value
*                         being overridden.
* @param [baseClassName]  Optional className(s) to fold
*                         into the returned `className`.
*
* @return Props for the wrapping
*                                  `InheritanceToolsPanelItem`.
*/
function getInheritanceProps(isInherited, hasLocalOverride, baseClassName) {
	const inheritedOnly = !!isInherited && !hasLocalOverride;
	const className = clsx(baseClassName, {
		"is-inherited-from-global-styles": inheritedOnly,
		"has-local-override-from-global-styles": !!hasLocalOverride
	});
	return {
		...className ? { className } : {},
		isInherited: inheritedOnly,
		hasLocalOverride: !!hasLocalOverride
	};
}
/**
* Renders the small always-visible reset button shown next to a control
* that holds a local override of an inherited Global Styles value. Used by
* `<InheritanceToolsPanelItem>` and the color/gradient controls.
*
* At rest the button shows a blue dot signalling the local override. On
* hover/focus the dot morphs into the `reset` (dash) icon and the button
* exposes a "Reset to inherited value" tooltip. Activating it clears the
* override so the control falls back to its inherited value — the same
* action the `ToolsPanel` menu performs via `onDeselect`.
*
* @return The reset button.
*/
function InheritanceResetButton({ onResetToInherited, className }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(button_default, {
		__next40pxDefaultSize: false,
		label: __("Reset to inherited value"),
		showTooltip: true,
		className: clsx("has-local-override-from-global-styles__reset", className),
		onClick: (event) => {
			event.preventDefault();
			event.stopPropagation();
			onResetToInherited?.();
		},
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)("span", {
			"aria-hidden": "true",
			className: "has-local-override-from-global-styles__dot"
		}, void 0, false, {
			fileName: _jsxFileName$1,
			lineNumber: 128,
			columnNumber: 4
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(icon_default, {
			className: "has-local-override-from-global-styles__reset-icon",
			icon: reset_default
		}, void 0, false, {
			fileName: _jsxFileName$1,
			lineNumber: 132,
			columnNumber: 4
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName$1,
		lineNumber: 109,
		columnNumber: 3
	}, this);
}
/**
* A `ToolsPanelItem` that reflects whether its control's value is inherited
* from Global Styles or locally overridden. The two states are mutually
* exclusive.
*
* - Inherited: the control label receives the inherited-from-Global-Styles
*   treatment (dotted underline) via the `is-inherited-from-global-styles`
*   class applied through `getInheritanceProps`. No dot is shown.
* - Local override: a reset dot is rendered as a plain sibling of the control
*   at the item's inline-end — never nested in the label — exposing the same
*   one-click reset the `ToolsPanel` options menu performs via `onDeselect`.
*
* Controls that render their own reset control next to a custom toggle (color,
* background image) pass `showLocalOverrideActionsInLabel={ false }` so the
* item does not render a second reset dot.
*
* @return The panel item.
*/
function InheritanceToolsPanelItem({ className, isInherited, hasLocalOverride, label, onDeselect, showLocalOverrideActionsInLabel = true, hasInlineEndToggle = false, children, ...rest }) {
	const showResetAffordance = hasLocalOverride && showLocalOverrideActionsInLabel;
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(component_default, {
		className,
		label,
		onDeselect,
		...rest,
		children: [children, showResetAffordance && /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)("div", {
			className: clsx("global-styles-inheritance-affordance", { "global-styles-inheritance-affordance--offset-toggle": hasInlineEndToggle }),
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(InheritanceResetButton, { onResetToInherited: onDeselect }, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 191,
				columnNumber: 6
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName$1,
			lineNumber: 185,
			columnNumber: 5
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName$1,
		lineNumber: 177,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime$1, _jsxFileName$1, isGlobalStylesInheritanceIndicatorUIEnabled;
function init_inheritance() {
	return (init_inheritance = __esmMin((() => {
		init_clsx();
		init_button(), init_icon(), init_component();
		init_build_module$1();
		init_build_module();
		import_jsx_dev_runtime$1 = require_jsx_dev_runtime();
		_jsxFileName$1 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/block-editor/src/components/global-styles/inheritance/index.tsx";
		isGlobalStylesInheritanceIndicatorUIEnabled = () => !!window.__experimentalGlobalStylesInheritanceUI;
		try {
			getInheritanceProps.__docgenInfo = {
				"description": "Returns props to spread onto a wrapping `<InheritanceToolsPanelItem>`\nso its descendant label picks up the inherited-from-Global-Styles\nvisual treatment.\n\nWhen `isInherited` is true without a local override, the descendant\nlabel text receives the inherited-from-Global-Styles treatment\n(dotted underline). No dot is shown.\n\nWhen `hasLocalOverride` is true, a small reset dot is rendered as a\nsibling of the control exposing a \"Reset to inherited value\" action.\n\nThe two states are mutually exclusive at the source. If both are passed,\nonly the local-override class is returned.\n\nReturned object shape allows direct spread:\n\n    <InheritanceToolsPanelItem\n        { ...getInheritanceProps( isInherited, hasLocalOverride ) }\n        label={ __( 'Line height' ) }\n        …\n    >",
				"displayName": "getInheritanceProps",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/block-editor/src/components/global-styles/inheritance/index.tsx",
				"methods": [],
				"props": {},
				"tags": {
					"param": "isInherited Control is inheriting at rest.\nhasLocalOverride Local override is set AND\nthere is an inherited value\nbeing overridden.\nbaseClassName Optional className(s) to fold\n  into the returned `className`.",
					"return": "Props for the wrapping\n                         `InheritanceToolsPanelItem`."
				}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			InheritanceResetButton.__docgenInfo = {
				"description": "Renders the small always-visible reset button shown next to a control\nthat holds a local override of an inherited Global Styles value. Used by\n`<InheritanceToolsPanelItem>` and the color/gradient controls.\n\nAt rest the button shows a blue dot signalling the local override. On\nhover/focus the dot morphs into the `reset` (dash) icon and the button\nexposes a \"Reset to inherited value\" tooltip. Activating it clears the\noverride so the control falls back to its inherited value — the same\naction the `ToolsPanel` menu performs via `onDeselect`.",
				"displayName": "InheritanceResetButton",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/block-editor/src/components/global-styles/inheritance/index.tsx",
				"methods": [],
				"props": {
					"onResetToInherited": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/global-styles/inheritance/types.ts",
							"name": "InheritanceResetButtonProps"
						}],
						"description": "Reset handler.",
						"name": "onResetToInherited",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/global-styles/inheritance/types.ts",
							"name": "InheritanceResetButtonProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "(() => void)" }
					},
					"className": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/global-styles/inheritance/types.ts",
							"name": "InheritanceResetButtonProps"
						}],
						"description": "Optional className for the button.",
						"name": "className",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/global-styles/inheritance/types.ts",
							"name": "InheritanceResetButtonProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					}
				},
				"tags": { "return": "The reset button." }
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			InheritanceToolsPanelItem.__docgenInfo = {
				"description": "A `ToolsPanelItem` that reflects whether its control's value is inherited\nfrom Global Styles or locally overridden. The two states are mutually\nexclusive.\n\n- Inherited: the control label receives the inherited-from-Global-Styles\n  treatment (dotted underline) via the `is-inherited-from-global-styles`\n  class applied through `getInheritanceProps`. No dot is shown.\n- Local override: a reset dot is rendered as a plain sibling of the control\n  at the item's inline-end — never nested in the label — exposing the same\n  one-click reset the `ToolsPanel` options menu performs via `onDeselect`.\n\nControls that render their own reset control next to a custom toggle (color,\nbackground image) pass `showLocalOverrideActionsInLabel={ false }` so the\nitem does not render a second reset dot.",
				"displayName": "InheritanceToolsPanelItem",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/block-editor/src/components/global-styles/inheritance/index.tsx",
				"methods": [],
				"props": {
					"label": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/tools-panel/types.d.ts",
							"name": "TypeLiteral"
						}],
						"description": "The supplied label is dual purpose. It is used as:\n1. the human-readable label for the panel's dropdown menu\n2. a key to locate the corresponding item in the panel's menu context to\ndetermine if the panel item should be displayed.\nA panel item's `label` should be unique among all items within a single\npanel.",
						"name": "label",
						"required": true,
						"tags": {},
						"type": { "name": "string" }
					},
					"onSelect": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/tools-panel/tools-panel-item/component.d.ts",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "onSelect",
						"required": false,
						"tags": {},
						"type": { "name": "(() => void)" }
					},
					"as": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/context/wordpress-component.d.ts",
							"name": "TypeLiteral"
						}],
						"description": "The HTML element or React component to render the component as.",
						"name": "as",
						"required": false,
						"tags": {},
						"type": { "name": "JSXElementConstructor<any> | keyof IntrinsicElements" }
					},
					"panelId": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/tools-panel/types.d.ts",
							"name": "TypeLiteral"
						}],
						"description": "Panel items will ensure they are only registering with their intended panel\nby comparing the `panelId` props set on both the item and the panel itself,\nor if the `panelId` is explicitly `null`. This allows items to be injected\nfrom a shared source.",
						"name": "panelId",
						"required": false,
						"tags": {},
						"type": { "name": "string | null" }
					},
					"defaultShown": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/tools-panel/types.d.ts",
							"name": "TypeLiteral"
						}],
						"description": "For optional items only, this determines whether the item is shown on\nfirst render even when `hasValue()` returns `false`.\n\nAn item is always shown while it has a value, so this only controls the\ninitial state of items without one.",
						"name": "defaultShown",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"hasValue": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/tools-panel/types.d.ts",
							"name": "TypeLiteral"
						}],
						"description": "This is called when building the `ToolsPanel` menu to determine the\nitem's initial checked state.",
						"name": "hasValue",
						"required": true,
						"tags": {},
						"type": { "name": "() => boolean" }
					},
					"isShownByDefault": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/tools-panel/types.d.ts",
							"name": "TypeLiteral"
						}],
						"description": "This prop identifies the current item as being displayed by default. This\nmeans it will show regardless of whether it has a value set or is toggled\non in the panel's menu.",
						"name": "isShownByDefault",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"onShownChange": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/tools-panel/types.d.ts",
							"name": "TypeLiteral"
						}],
						"description": "A callback executed when the user shows or hides the item via the\n`ToolsPanel` menu, passed `true` when it was shown and `false` when it\nwas hidden.\n\nUnlike `onDeselect`, this fires whether or not the item has a value, and\nonly in response to an explicit menu action. Visibility changes with\nanother cause do not trigger it, such as an item becoming visible\nbecause it received a value or because `defaultShown` was set, or\nhiding because `Reset all` ran.\n\nItems flagged with `isShownByDefault` are always visible and stay so when\ntoggled off, so this is never called for them.\n\nA single menu action may also call `onSelect` or `onDeselect`, which are\nunchanged. Showing an item without a value calls this with `true` and\n`onSelect`; hiding an item that has a value calls this with `false` and\n`onDeselect`. Use this callback to track visibility and `onDeselect` to\nreset a value, rather than treating them as interchangeable.",
						"name": "onShownChange",
						"required": false,
						"tags": {},
						"type": { "name": "((isShown: boolean) => void)" }
					},
					"resetAllFilter": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/tools-panel/tools-panel-item/component.d.ts",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "resetAllFilter",
						"required": false,
						"tags": {},
						"type": { "name": "ResetAllFilter" }
					},
					"className": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/global-styles/inheritance/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Item className.",
						"name": "className",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"isInherited": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/global-styles/inheritance/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Value is inherited at rest. Accepted so the `getInheritanceProps` spread does not leak onto the underlying `ToolsPanelItem`; the inherited treatment is applied via `className`.",
						"name": "isInherited",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"hasLocalOverride": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/global-styles/inheritance/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Local override is set.",
						"name": "hasLocalOverride",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"onDeselect": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/global-styles/inheritance/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Reset handler.",
						"name": "onDeselect",
						"required": false,
						"tags": {},
						"type": { "name": "(() => void)" }
					},
					"showLocalOverrideActionsInLabel": {
						"defaultValue": { "value": "true" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/global-styles/inheritance/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Render the reset dot here (default true).",
						"name": "showLocalOverrideActionsInLabel",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"hasInlineEndToggle": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/global-styles/inheritance/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The control renders a 24x24 toggle (linked/unlink, units switch) at its inline-end; offset the reset dot to sit just to its inline-start (default false).",
						"name": "hasInlineEndToggle",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"children": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/global-styles/inheritance/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The control.",
						"name": "children",
						"required": false,
						"tags": {},
						"type": { "name": "ReactNode" }
					}
				},
				"tags": { "return": "The panel item." }
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			isGlobalStylesInheritanceIndicatorUIEnabled.__docgenInfo = {
				"description": "Whether the inspector marks up which controls are showing an inherited\nGlobal Styles value.\n\nThis gates the indicators only: the dotted underline on an inherited label\nand the blue dot that resets a local override. The inherited values\nthemselves reach the controls either way. Behind the\n`gutenberg-global-styles-inheritance-ui` Gutenberg experiment, so the\nindicators are off unless someone opts in on the Experiments screen.\n\nEvaluated per call rather than once at module scope, so tests can toggle\nthe experiment and so a later move to a store-backed setting only has to\nchange this one place. Always returns a boolean: callers pass the result\ndown as a prop, and `undefined` would trigger a receiving component's own\ndefault parameter.",
				"displayName": "isGlobalStylesInheritanceIndicatorUIEnabled",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/block-editor/src/components/global-styles/inheritance/index.tsx",
				"methods": [],
				"props": {},
				"tags": { "return": "Whether the indicator treatment is enabled." }
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/block-editor/src/components/dimensions-tool/utils.js
/**
* Parses a CSS `aspect-ratio` value into a number so that values that are
* written differently but describe the same ratio, e.g. `1` and `1/1`, can be
* compared.
*
* @param {string} [value] CSS aspect-ratio value, e.g. '16/9' or '1.5'.
*
* @return {?number} The ratio as a number, or null when it cannot be parsed.
*/
function parseAspectRatio(value) {
	if (typeof value !== "string") return null;
	const parts = value.split("/");
	if (parts.length > 2) return null;
	const [width, height = "1"] = parts;
	const numericWidth = Number(width.trim());
	const numericHeight = Number(height.trim());
	if (!Number.isFinite(numericWidth) || !Number.isFinite(numericHeight) || numericWidth <= 0 || numericHeight <= 0) return null;
	return numericWidth / numericHeight;
}
/**
* Finds the option that represents the given CSS `aspect-ratio` value.
*
* Aspect ratio values are free-form CSS, while the options are a fixed list of
* presets, so an exact string match isn't enough: `1/1` and `1` describe the
* same ratio but only one of them is a preset value.
*
* @param {string}   value   CSS aspect-ratio value.
* @param {Object[]} options Aspect ratio options.
*
* @return {?Object} The matching option, or null when there is none.
*/
function findAspectRatioOption(value, options) {
	const exactMatch = options.find((option) => option.value === value);
	if (exactMatch) return exactMatch;
	const ratio = parseAspectRatio(value);
	if (ratio === null) return null;
	return options.find((option) => parseAspectRatio(option.value) === ratio) ?? null;
}
//#endregion
//#region ../packages/block-editor/src/components/dimensions-tool/aspect-ratio-tool.jsx
/**
* @typedef {import('@wordpress/components/build-types/select-control/types').SelectControlProps} SelectControlProps
*/
/**
* @callback AspectRatioToolPropsOnChange
* @param {string} [value] New aspect ratio value.
* @return {void} No return.
*/
/**
* @typedef {Object} AspectRatioToolProps
* @property {string}                       [panelId]          ID of the panel this tool is associated with.
* @property {string}                       [value]            Current aspect ratio value.
* @property {AspectRatioToolPropsOnChange} [onChange]         Callback to update the aspect ratio value.
* @property {SelectControlProps[]}         [options]          Aspect ratio options.
* @property {string}                       [defaultValue]     Default aspect ratio value.
* @property {boolean}                      [isShownByDefault] Whether the tool is shown by default.
* @property {string}                       [className]        Additional CSS class on the wrapping panel item.
* @property {boolean}                      [isInherited]      Whether the control is displaying an inherited Global Styles value.
* @property {boolean}                      [hasLocalOverride] Whether a local value is overriding an inherited Global Styles value.
*/
function AspectRatioTool({ panelId, value, onChange = () => {}, options, defaultValue = "auto", hasValue, isShownByDefault = true, className, isInherited, hasLocalOverride }) {
	const [defaultRatios, themeRatios, showDefaultRatios] = useSettings("dimensions.aspectRatios.default", "dimensions.aspectRatios.theme", "dimensions.defaultAspectRatios");
	const themeOptions = themeRatios?.map(({ name, ratio }) => ({
		label: name,
		value: ratio
	}));
	const defaultOptions = defaultRatios?.map(({ name, ratio }) => ({
		label: name,
		value: ratio
	}));
	const aspectRatioOptions = [
		{
			label: _x("Original", "Aspect ratio option for dimensions control"),
			value: "auto"
		},
		...showDefaultRatios ? defaultOptions : [],
		...themeOptions ? themeOptions : [],
		{
			label: _x("Custom", "Aspect ratio option for dimensions control"),
			value: "custom",
			disabled: true,
			hidden: true
		}
	];
	const resolvedOptions = options ?? aspectRatioOptions;
	const displayValue = value === void 0 || value === null || value === "auto" ? "auto" : findAspectRatioOption(value, resolvedOptions)?.value ?? "custom";
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InheritanceToolsPanelItem, {
		className,
		isInherited,
		hasLocalOverride,
		hasValue: hasValue ? hasValue : () => displayValue !== defaultValue,
		label: __("Aspect ratio"),
		onDeselect: () => onChange(void 0),
		isShownByDefault,
		panelId,
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectControl, {
			label: __("Aspect ratio"),
			value: resolvedOptions.find((item) => item.value === displayValue) ?? resolvedOptions.find((item) => !item.disabled) ?? null,
			items: resolvedOptions.filter((item) => !item.hidden),
			onValueChange: (item) => onChange(item?.value ?? "")
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 103,
			columnNumber: 4
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 91,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime, _jsxFileName;
function init_aspect_ratio_tool() {
	return (init_aspect_ratio_tool = __esmMin((() => {
		init_select_control();
		init_build_module();
		init_use_settings();
		init_inheritance();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/block-editor/src/components/dimensions-tool/aspect-ratio-tool.jsx";
		AspectRatioTool.__docgenInfo = {
			"description": "@typedef {Object} AspectRatioToolProps\n@property {string}                       [panelId]          ID of the panel this tool is associated with.\n@property {string}                       [value]            Current aspect ratio value.\n@property {AspectRatioToolPropsOnChange} [onChange]         Callback to update the aspect ratio value.\n@property {SelectControlProps[]}         [options]          Aspect ratio options.\n@property {string}                       [defaultValue]     Default aspect ratio value.\n@property {boolean}                      [isShownByDefault] Whether the tool is shown by default.\n@property {string}                       [className]        Additional CSS class on the wrapping panel item.\n@property {boolean}                      [isInherited]      Whether the control is displaying an inherited Global Styles value.\n@property {boolean}                      [hasLocalOverride] Whether a local value is overriding an inherited Global Styles value.",
			"methods": [],
			"displayName": "AspectRatioTool",
			"props": {
				"onChange": {
					"defaultValue": {
						"value": "() => {}",
						"computed": false
					},
					"required": false
				},
				"defaultValue": {
					"defaultValue": {
						"value": "'auto'",
						"computed": false
					},
					"required": false
				},
				"isShownByDefault": {
					"defaultValue": {
						"value": "true",
						"computed": false
					},
					"required": false
				}
			}
		};
	})))();
}
//#endregion
export { getInheritanceProps as a, InheritanceToolsPanelItem as i, init_aspect_ratio_tool as n, init_inheritance as o, InheritanceResetButton as r, isGlobalStylesInheritanceIndicatorUIEnabled as s, AspectRatioTool as t };
