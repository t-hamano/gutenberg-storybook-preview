import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { i as _x, n as __, t as init_build_module } from "./build-module-v04us4E2.js";
import { o as clsx, s as init_clsx } from "./iframe-D4D-SsYo.js";
import { n as reset_default } from "./reset-BNKWWBQ_.js";
import { n as init_select_control, t as SelectControl } from "./select-control-DQuK87zk.js";
import { n as init_icon, t as icon_default } from "./icon-oSwa7eHF.js";
import { n as button_default, r as init_button } from "./button-Bj8SgySP.js";
import { n as init_component, t as component_default } from "./component-XaG3q69r.js";
import { n as useSettings, t as init_use_settings } from "./use-settings-CJ-eNQf8.js";
import { r as init_build_module$1 } from "./library.story-DawnfKTW.js";
//#region ../packages/block-editor/src/components/global-styles/inheritance/index.jsx
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
* @param {boolean}             isInherited      Control is inheriting at rest.
* @param {boolean}             hasLocalOverride Local override is set AND
*                                               there is an inherited value
*                                               being overridden.
* @param {string|Array|Object} [baseClassName]  Optional className(s) to fold
*                                               into the returned `className`.
*
* @return {{ className?: string, isInherited: boolean, hasLocalOverride: boolean }} Props for the wrapping
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
* @param {Object}   props
* @param {Function} props.onResetToInherited Reset handler.
* @param {string}   [props.className]        Optional className for the button.
*
* @return {Element} The reset button.
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
			lineNumber: 122,
			columnNumber: 4
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(icon_default, {
			className: "has-local-override-from-global-styles__reset-icon",
			icon: reset_default
		}, void 0, false, {
			fileName: _jsxFileName$1,
			lineNumber: 126,
			columnNumber: 4
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName$1,
		lineNumber: 103,
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
* @param {Object}                    props
* @param {?string}                   props.className                         Item className.
* @param {boolean}                   props.isInherited                       Value is inherited at rest. Accepted so the `getInheritanceProps` spread does not leak onto the underlying `ToolsPanelItem`; the inherited treatment is applied via `className`.
* @param {boolean}                   props.hasLocalOverride                  Local override is set.
* @param {import('react').ReactNode} props.label                             Control label.
* @param {?Function}                 props.onDeselect                        Reset handler.
* @param {boolean}                   [props.showLocalOverrideActionsInLabel] Render the reset dot here (default true).
* @param {boolean}                   [props.hasInlineEndToggle]              The control renders a 24x24 toggle (linked/unlink, units switch) at its inline-end; offset the reset dot to sit just to its inline-start (default false).
* @param {import('react').ReactNode} props.children                          The control.
*
* @return {Element} The panel item.
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
				lineNumber: 195,
				columnNumber: 6
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName$1,
			lineNumber: 189,
			columnNumber: 5
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName$1,
		lineNumber: 181,
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
		_jsxFileName$1 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/block-editor/src/components/global-styles/inheritance/index.jsx";
		isGlobalStylesInheritanceIndicatorUIEnabled = () => !!window.__experimentalGlobalStylesInheritanceUI;
		InheritanceResetButton.__docgenInfo = {
			"description": "Renders the small always-visible reset button shown next to a control\nthat holds a local override of an inherited Global Styles value. Used by\n`<InheritanceToolsPanelItem>` and the color/gradient controls.\n\nAt rest the button shows a blue dot signalling the local override. On\nhover/focus the dot morphs into the `reset` (dash) icon and the button\nexposes a \"Reset to inherited value\" tooltip. Activating it clears the\noverride so the control falls back to its inherited value — the same\naction the `ToolsPanel` menu performs via `onDeselect`.\n\n@param {Object}   props\n@param {Function} props.onResetToInherited Reset handler.\n@param {string}   [props.className]        Optional className for the button.\n\n@return {Element} The reset button.",
			"methods": [],
			"displayName": "InheritanceResetButton"
		};
		InheritanceToolsPanelItem.__docgenInfo = {
			"description": "A `ToolsPanelItem` that reflects whether its control's value is inherited\nfrom Global Styles or locally overridden. The two states are mutually\nexclusive.\n\n- Inherited: the control label receives the inherited-from-Global-Styles\n  treatment (dotted underline) via the `is-inherited-from-global-styles`\n  class applied through `getInheritanceProps`. No dot is shown.\n- Local override: a reset dot is rendered as a plain sibling of the control\n  at the item's inline-end — never nested in the label — exposing the same\n  one-click reset the `ToolsPanel` options menu performs via `onDeselect`.\n\nControls that render their own reset control next to a custom toggle (color,\nbackground image) pass `showLocalOverrideActionsInLabel={ false }` so the\nitem does not render a second reset dot.\n\n@param {Object}                    props\n@param {?string}                   props.className                         Item className.\n@param {boolean}                   props.isInherited                       Value is inherited at rest. Accepted so the `getInheritanceProps` spread does not leak onto the underlying `ToolsPanelItem`; the inherited treatment is applied via `className`.\n@param {boolean}                   props.hasLocalOverride                  Local override is set.\n@param {import('react').ReactNode} props.label                             Control label.\n@param {?Function}                 props.onDeselect                        Reset handler.\n@param {boolean}                   [props.showLocalOverrideActionsInLabel] Render the reset dot here (default true).\n@param {boolean}                   [props.hasInlineEndToggle]              The control renders a 24x24 toggle (linked/unlink, units switch) at its inline-end; offset the reset dot to sit just to its inline-start (default false).\n@param {import('react').ReactNode} props.children                          The control.\n\n@return {Element} The panel item.",
			"methods": [],
			"displayName": "InheritanceToolsPanelItem",
			"props": {
				"showLocalOverrideActionsInLabel": {
					"defaultValue": {
						"value": "true",
						"computed": false
					},
					"required": false
				},
				"hasInlineEndToggle": {
					"defaultValue": {
						"value": "false",
						"computed": false
					},
					"required": false
				}
			}
		};
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
			items: resolvedOptions,
			onValueChange: (item) => onChange(item?.value ?? ""),
			children: resolvedOptions.filter((item) => !item.hidden).map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectControl.Item, {
				value: item,
				label: item.label,
				disabled: item.disabled,
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectControl.ItemLabel, { children: item.label }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 124,
					columnNumber: 8
				}, this)
			}, item.value, false, {
				fileName: _jsxFileName,
				lineNumber: 118,
				columnNumber: 7
			}, this))
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
