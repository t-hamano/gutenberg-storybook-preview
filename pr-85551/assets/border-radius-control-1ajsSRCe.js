import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as __, t as init_build_module } from "./build-module-v04us4E2.js";
import { a as corner_bottom_right_default, l as corner_all_default, r as corner_top_left_default, s as corner_bottom_left_default, t as corner_top_right_default } from "./corner-top-right-BgOwUBD2.js";
import { n as link_off_default } from "./link-off-CdeM4cH8.js";
import { n as link_default } from "./link-gRa713_Y.js";
import { n as base_control_default, r as init_base_control } from "./base-control-COIsJz79.js";
import { n as button_default, r as init_button } from "./button-BxmZjN4X.js";
import { n as init_component, t as component_default } from "./component-CbGAmvwd.js";
import { n as init_component$1, t as component_default$1 } from "./component-BmV9WqTc.js";
import { a as parseQuantityAndUnitFromRawValue, i as init_utils$1, o as useCustomUnits } from "./unit-control-DIqm3fyV.js";
import { n as useSettings, t as init_use_settings } from "./use-settings-DWr84Jo8.js";
import { n as init_preset_input_control, t as PresetInputControl } from "./preset-input-control-CvU6xueE.js";
import { r as init_build_module$1 } from "./library.story-CbQx3MQ6.js";
//#region ../packages/block-editor/src/components/border-radius-control/linked-button.tsx
function LinkedButton({ isLinked, ...props }) {
	const label = isLinked ? __("Unlink radii") : __("Link radii");
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(button_default, {
		...props,
		className: "components-border-radius-control__linked-button",
		size: "small",
		icon: isLinked ? link_default : link_off_default,
		iconSize: 24,
		label
	}, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 13,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime$1, _jsxFileName$1;
function init_linked_button() {
	return (init_linked_button = __esmMin((() => {
		init_button();
		init_build_module$1();
		init_build_module();
		import_jsx_dev_runtime$1 = require_jsx_dev_runtime();
		_jsxFileName$1 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/block-editor/src/components/border-radius-control/linked-button.tsx";
		try {
			LinkedButton.__docgenInfo = {
				"description": "",
				"displayName": "linkedbutton",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/block-editor/src/components/border-radius-control/linked-button.tsx",
				"methods": [],
				"props": {
					"children": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/button/types.d.ts",
							"name": "TypeLiteral"
						}, {
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/button/types.d.ts",
							"name": "TypeLiteral"
						}],
						"description": "The button's children.",
						"name": "children",
						"required": false,
						"tags": {},
						"type": { "name": "ReactNode" }
					},
					"text": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/button/types.d.ts",
							"name": "TypeLiteral"
						}, {
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/button/types.d.ts",
							"name": "TypeLiteral"
						}],
						"description": "If provided, displays the given text inside the button. If the button contains children elements, the text is displayed before them.",
						"name": "text",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"description": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/button/types.d.ts",
							"name": "TypeLiteral"
						}, {
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/button/types.d.ts",
							"name": "TypeLiteral"
						}],
						"description": "A visually hidden accessible description for the button.",
						"name": "description",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"disabled": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/button/types.d.ts",
							"name": "TypeLiteral"
						}, {
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/button/types.d.ts",
							"name": "TypeLiteral"
						}],
						"description": "Whether the button is disabled. If `true`, this will force a `button` element\nto be rendered, even when an `href` is given.\n\nIn most cases, it is recommended to also set the `accessibleWhenDisabled` prop to `true`.",
						"name": "disabled",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"variant": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/button/types.d.ts",
							"name": "TypeLiteral"
						}, {
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/button/types.d.ts",
							"name": "TypeLiteral"
						}],
						"description": "Specifies the button's style.\n\nThe accepted values are:\n\n1. `'primary'` (the primary button styles)\n2. `'secondary'` (the default button styles)\n3. `'tertiary'` (the text-based button styles)\n4. `'link'` (the link button styles)",
						"name": "variant",
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "\"link\" | \"primary\" | \"secondary\" | \"tertiary\"",
							"value": [
								{ "value": "\"link\"" },
								{ "value": "\"primary\"" },
								{ "value": "\"secondary\"" },
								{ "value": "\"tertiary\"" }
							]
						}
					},
					"__next40pxDefaultSize": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/button/types.d.ts",
							"name": "TypeLiteral"
						}, {
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/button/types.d.ts",
							"name": "TypeLiteral"
						}],
						"description": "Start opting into the larger default height that will become the\ndefault size in a future version.",
						"name": "__next40pxDefaultSize",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"accessibleWhenDisabled": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/button/types.d.ts",
							"name": "TypeLiteral"
						}, {
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/button/types.d.ts",
							"name": "TypeLiteral"
						}],
						"description": "Whether to keep the button focusable when disabled.\n\nIn most cases, it is recommended to set this to `true`. Disabling a control without maintaining focusability\ncan cause accessibility issues, by hiding their presence from screen reader users,\nor by preventing focus from returning to a trigger element.\n\nLearn more about the [focusability of disabled controls](https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/#focusabilityofdisabledcontrols)\nin the WAI-ARIA Authoring Practices Guide.",
						"name": "accessibleWhenDisabled",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"iconPosition": {
						"defaultValue": { "value": "'left'" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/button/types.d.ts",
							"name": "TypeLiteral"
						}, {
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/button/types.d.ts",
							"name": "TypeLiteral"
						}],
						"description": "If provided with `icon`, sets the position of icon relative to the `text`.",
						"name": "iconPosition",
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "\"left\" | \"right\"",
							"value": [{ "value": "\"left\"" }, { "value": "\"right\"" }]
						}
					},
					"isBusy": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/button/types.d.ts",
							"name": "TypeLiteral"
						}, {
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/button/types.d.ts",
							"name": "TypeLiteral"
						}],
						"description": "Indicates activity while a action is being performed.",
						"name": "isBusy",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"isDestructive": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/button/types.d.ts",
							"name": "TypeLiteral"
						}, {
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/button/types.d.ts",
							"name": "TypeLiteral"
						}],
						"description": "Renders a red text-based button style to indicate destructive behavior.",
						"name": "isDestructive",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"isPressed": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/button/types.d.ts",
							"name": "TypeLiteral"
						}, {
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/button/types.d.ts",
							"name": "TypeLiteral"
						}],
						"description": "Renders a pressed button style.",
						"name": "isPressed",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"shortcut": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/button/types.d.ts",
							"name": "TypeLiteral"
						}, {
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/button/types.d.ts",
							"name": "TypeLiteral"
						}],
						"description": "If provided with `showTooltip`, appends the Shortcut label to the tooltip content.\nIf an object is provided, it should contain `display` and `ariaLabel` keys.",
						"name": "shortcut",
						"required": false,
						"tags": {},
						"type": { "name": "string | { display: string; ariaLabel: string; }" }
					},
					"showTooltip": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/button/types.d.ts",
							"name": "TypeLiteral"
						}, {
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/button/types.d.ts",
							"name": "TypeLiteral"
						}],
						"description": "If provided, renders a Tooltip component for the button.",
						"name": "showTooltip",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"tooltipPosition": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/button/types.d.ts",
							"name": "TypeLiteral"
						}, {
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/button/types.d.ts",
							"name": "TypeLiteral"
						}],
						"description": "If provided with `showTooltip`, sets the position of the tooltip.\nPlease refer to the Tooltip component for more details regarding the defaults.",
						"name": "tooltipPosition",
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "PositionYAxis | \"middle center\" | \"middle left\" | \"middle right\" | \"top center\" | \"top left\" | \"top right\" | \"bottom center\" | \"bottom left\" | \"bottom right\" | ... 36 more ...",
							"value": [
								{ "value": "\"middle\"" },
								{ "value": "\"top\"" },
								{ "value": "\"bottom\"" },
								{ "value": "\"middle center\"" },
								{ "value": "\"middle left\"" },
								{ "value": "\"middle right\"" },
								{ "value": "\"top center\"" },
								{ "value": "\"top left\"" },
								{ "value": "\"top right\"" },
								{ "value": "\"bottom center\"" },
								{ "value": "\"bottom left\"" },
								{ "value": "\"bottom right\"" },
								{ "value": "\"middle center left\"" },
								{ "value": "\"middle center right\"" },
								{ "value": "\"middle center top\"" },
								{ "value": "\"middle center bottom\"" },
								{ "value": "\"middle left left\"" },
								{ "value": "\"middle left right\"" },
								{ "value": "\"middle left top\"" },
								{ "value": "\"middle left bottom\"" },
								{ "value": "\"middle right left\"" },
								{ "value": "\"middle right right\"" },
								{ "value": "\"middle right top\"" },
								{ "value": "\"middle right bottom\"" },
								{ "value": "\"top center left\"" },
								{ "value": "\"top center right\"" },
								{ "value": "\"top center top\"" },
								{ "value": "\"top center bottom\"" },
								{ "value": "\"top left left\"" },
								{ "value": "\"top left right\"" },
								{ "value": "\"top left top\"" },
								{ "value": "\"top left bottom\"" },
								{ "value": "\"top right left\"" },
								{ "value": "\"top right right\"" },
								{ "value": "\"top right top\"" },
								{ "value": "\"top right bottom\"" },
								{ "value": "\"bottom center left\"" },
								{ "value": "\"bottom center right\"" },
								{ "value": "\"bottom center top\"" },
								{ "value": "\"bottom center bottom\"" },
								{ "value": "\"bottom left left\"" },
								{ "value": "\"bottom left right\"" },
								{ "value": "\"bottom left top\"" },
								{ "value": "\"bottom left bottom\"" },
								{ "value": "\"bottom right left\"" },
								{ "value": "\"bottom right right\"" },
								{ "value": "\"bottom right top\"" },
								{ "value": "\"bottom right bottom\"" }
							]
						}
					},
					"__experimentalIsFocusable": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/button/types.d.ts",
							"name": "TypeLiteral"
						}, {
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/button/types.d.ts",
							"name": "TypeLiteral"
						}],
						"description": "Whether to keep the button focusable when disabled.\n@deprecated Use the `accessibleWhenDisabled` prop instead.\n@ignore",
						"name": "__experimentalIsFocusable",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"isDefault": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/button/types.d.ts",
							"name": "TypeLiteral"
						}, {
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/button/types.d.ts",
							"name": "TypeLiteral"
						}],
						"description": "Gives the button a default style.\n@deprecated Use the `'secondary'` value on the `variant` prop instead.\n@ignore",
						"name": "isDefault",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"isLink": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/button/types.d.ts",
							"name": "TypeLiteral"
						}, {
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/button/types.d.ts",
							"name": "TypeLiteral"
						}],
						"description": "Gives the button a link style.\n@deprecated Use the `'link'` value on the `variant` prop instead.\n@ignore",
						"name": "isLink",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"isPrimary": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/button/types.d.ts",
							"name": "TypeLiteral"
						}, {
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/button/types.d.ts",
							"name": "TypeLiteral"
						}],
						"description": "Gives the button a primary style.\n@deprecated Use the `'primary'` value on the `variant` prop instead.\n@ignore",
						"name": "isPrimary",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"isSecondary": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/button/types.d.ts",
							"name": "TypeLiteral"
						}, {
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/button/types.d.ts",
							"name": "TypeLiteral"
						}],
						"description": "Gives the button a default style.\n@deprecated Use the `'secondary'` value on the `variant` prop instead.\n@ignore",
						"name": "isSecondary",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"isTertiary": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/button/types.d.ts",
							"name": "TypeLiteral"
						}, {
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/button/types.d.ts",
							"name": "TypeLiteral"
						}],
						"description": "Gives the button a text-based style.\n@deprecated Use the `'tertiary'` value on the `variant` prop instead.\n@ignore",
						"name": "isTertiary",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"isSmall": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/button/types.d.ts",
							"name": "TypeLiteral"
						}, {
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/button/types.d.ts",
							"name": "TypeLiteral"
						}],
						"description": "Decreases the size of the button.\n@deprecated Use the `'small'` value on the `size` prop instead.\n@ignore",
						"name": "isSmall",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"describedBy": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/button/types.d.ts",
							"name": "TypeLiteral"
						}, {
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/button/types.d.ts",
							"name": "TypeLiteral"
						}],
						"description": "A visually hidden accessible description for the button.\n@deprecated Use the `description` prop instead.\n@ignore",
						"name": "describedBy",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"isLinked": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/border-radius-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "isLinked",
						"required": true,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"href": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/button/types.d.ts",
							"name": "TypeLiteral"
						}],
						"description": "If provided, renders `a` instead of `button`.",
						"name": "href",
						"required": true,
						"tags": {},
						"type": { "name": "string" }
					},
					"target": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/button/types.d.ts",
							"name": "TypeLiteral"
						}],
						"description": "If provided with `href`, sets the `target` attribute to the `a`.",
						"name": "target",
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
//#region ../packages/block-editor/src/components/border-radius-control/utils.ts
/**
* Gets the (non-undefined) item with the highest occurrence within an array
* Based in part on: https://stackoverflow.com/a/20762713
*
* Undefined values are always sorted to the end by `sort`, so this function
* returns the first element, to always prioritize real values over undefined
* values.
*
* See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#description
*
* @param inputArray Array of items to check.
* @return The item with the most occurrences.
*/
function mode(inputArray) {
	return [...inputArray].sort((a, b) => inputArray.filter((v) => v === b).length - inputArray.filter((v) => v === a).length).shift();
}
/**
* Gets the 'all' input value and unit from values data.
*
* @param values Radius values.
* @return A value + unit for the 'all' input.
*/
function getAllValue(values = {}) {
	/**
	* Border radius support was originally a single pixel value.
	*
	* To maintain backwards compatibility treat this case as the all value.
	*/
	if (typeof values === "string") return values;
	const parsedQuantitiesAndUnits = Object.values(values).map((value) => {
		const newValue = parseQuantityAndUnitFromRawValue(value);
		if (typeof value === "string" && newValue[0] === void 0) return [value, ""];
		return newValue;
	});
	const allValues = parsedQuantitiesAndUnits.map((value) => value[0] ?? "");
	const allUnits = parsedQuantitiesAndUnits.map((value) => value[1]);
	const value = allValues.every((v) => v === allValues[0]) ? allValues[0] : "";
	const unit = mode(allUnits);
	return value === 0 || value ? `${value}${unit || ""}` : void 0;
}
/**
* Checks to determine if values are mixed.
*
* @param values Radius values.
* @return Whether values are mixed.
*/
function hasMixedValues(values = {}) {
	if (typeof values === "string") return false;
	if (!values || typeof values !== "object") return false;
	const cornerValues = Object.values(values);
	if (cornerValues.length === 0) return false;
	const firstValue = cornerValues[0];
	return !cornerValues.every((value) => value === firstValue);
}
/**
* Checks to determine if values are defined.
*
* @param values Radius values.
* @return Whether values are mixed.
*/
function hasDefinedValues(values) {
	if (!values) return false;
	if (typeof values === "string") return true;
	return !!Object.values(values).filter((value) => {
		return !!value || value === 0;
	}).length;
}
function init_utils() {
	return (init_utils = __esmMin((() => {
		init_utils$1();
	})))();
}
//#endregion
//#region ../packages/block-editor/src/components/border-radius-control/constants.ts
var EMPTY_ARRAY, CORNERS, ICONS;
function init_constants() {
	return (init_constants = __esmMin((() => {
		init_build_module();
		init_build_module$1();
		EMPTY_ARRAY = [];
		CORNERS = {
			all: __("Border radius"),
			topLeft: __("Top left"),
			topRight: __("Top right"),
			bottomLeft: __("Bottom left"),
			bottomRight: __("Bottom right")
		};
		ICONS = {
			all: corner_all_default,
			topLeft: corner_top_left_default,
			topRight: corner_top_right_default,
			bottomLeft: corner_bottom_left_default,
			bottomRight: corner_bottom_right_default
		};
	})))();
}
//#endregion
//#region ../packages/block-editor/src/components/border-radius-control/index.tsx
function useBorderRadiusSizes(presets) {
	const defaultSizes = presets?.default ?? EMPTY_ARRAY;
	const customSizes = presets?.custom ?? EMPTY_ARRAY;
	const themeSizes = presets?.theme ?? EMPTY_ARRAY;
	return (0, import_react.useMemo)(() => {
		const sizes = [
			{
				name: __("None"),
				slug: "0",
				size: 0
			},
			...customSizes,
			...themeSizes,
			...defaultSizes
		];
		return sizes.length > 8 ? [{
			name: __("Default"),
			slug: "default",
			size: void 0
		}, ...sizes] : sizes;
	}, [
		customSizes,
		themeSizes,
		defaultSizes
	]);
}
/**
* Gets the value for a specific corner from the values object.
*
* @param values Border radius values.
* @param corner Corner name ('all', 'topLeft', etc.).
*
* @return The corner value.
*/
function getCornerValue(values, corner) {
	if (corner === "all") return getAllValue(values);
	if (typeof values === "string") return values;
	return values?.[corner];
}
/**
* Gets the selected unit for a specific corner.
*
* @param selectedUnits Units object.
* @param corner        Corner name.
*
* @return The selected unit.
*/
function getCornerUnit(selectedUnits, corner) {
	if (corner === "all") return selectedUnits.flat;
	return selectedUnits[corner];
}
/**
* Creates an onChange handler for a specific corner.
*
* @param corner   Corner name.
* @param values   Current values.
* @param onChange Original onChange callback.
*
* @return Corner-specific onChange handler.
*/
function createCornerChangeHandler(corner, values, onChange) {
	return (newValue) => {
		if (corner === "all") onChange({
			topLeft: newValue,
			topRight: newValue,
			bottomLeft: newValue,
			bottomRight: newValue
		});
		else onChange({
			...typeof values !== "string" ? values || {} : {
				topLeft: values,
				topRight: values,
				bottomLeft: values,
				bottomRight: values
			},
			[corner]: newValue
		});
	};
}
/**
* Creates a unit change handler for a specific corner.
*
* @param corner           Corner name.
* @param selectedUnits    Current selected units.
* @param setSelectedUnits Unit setter function.
*
* @return Corner-specific unit change handler.
*/
function createCornerUnitChangeHandler(corner, selectedUnits, setSelectedUnits) {
	return (newUnit) => {
		const newUnits = { ...selectedUnits };
		if (corner === "all") {
			newUnits.flat = newUnit;
			newUnits.topLeft = newUnit;
			newUnits.topRight = newUnit;
			newUnits.bottomLeft = newUnit;
			newUnits.bottomRight = newUnit;
		} else newUnits[corner] = newUnit;
		setSelectedUnits(newUnits);
	};
}
/**
* Control to display border radius options.
*
* @param props          Component props.
* @param props.onChange Callback to handle onChange.
* @param props.values   Border radius values.
* @param props.presets  Border radius presets.
*
* @return Custom border radius control.
*/
function BorderRadiusControl({ onChange, values, presets }) {
	const [isLinked, setIsLinked] = (0, import_react.useState)(!hasDefinedValues(values) || !hasMixedValues(values));
	const options = useBorderRadiusSizes(presets);
	const cornerValues = values;
	const [selectedUnits, setSelectedUnits] = (0, import_react.useState)({
		flat: typeof values === "string" ? parseQuantityAndUnitFromRawValue(values)[1] : void 0,
		topLeft: parseQuantityAndUnitFromRawValue(cornerValues?.topLeft)[1],
		topRight: parseQuantityAndUnitFromRawValue(cornerValues?.topRight)[1],
		bottomLeft: parseQuantityAndUnitFromRawValue(cornerValues?.bottomLeft)[1],
		bottomRight: parseQuantityAndUnitFromRawValue(cornerValues?.bottomRight)[1]
	});
	const [availableUnits] = useSettings("spacing.units");
	const units = useCustomUnits({ availableUnits: availableUnits || [
		"px",
		"em",
		"rem"
	] });
	const toggleLinked = () => setIsLinked(!isLinked);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("fieldset", {
		className: "components-border-radius-control",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(component_default, {
			className: "components-border-radius-control__header",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(base_control_default.VisualLabel, {
				as: "legend",
				children: __("Radius")
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 228,
				columnNumber: 5
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LinkedButton, {
				onClick: toggleLinked,
				isLinked
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 231,
				columnNumber: 5
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 227,
			columnNumber: 4
		}, this), isLinked ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PresetInputControl, {
			ariaLabel: CORNERS.all,
			className: "components-border-radius-control",
			icon: ICONS.all,
			minimumCustomValue: 0,
			onChange: createCornerChangeHandler("all", values, onChange),
			onUnitChange: createCornerUnitChangeHandler("all", selectedUnits, setSelectedUnits),
			presets: options,
			presetType: "border-radius",
			selectedUnit: getCornerUnit(selectedUnits, "all"),
			showTooltip: true,
			units,
			value: getCornerValue(values, "all")
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 234,
			columnNumber: 5
		}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(component_default$1, { children: [
			"topLeft",
			"topRight",
			"bottomLeft",
			"bottomRight"
		].map((corner) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PresetInputControl, {
			ariaLabel: CORNERS[corner],
			className: "components-border-radius-control",
			icon: ICONS[corner],
			minimumCustomValue: 0,
			onChange: createCornerChangeHandler(corner, values, onChange),
			onUnitChange: createCornerUnitChangeHandler(corner, selectedUnits, setSelectedUnits),
			presets: options,
			presetType: "border-radius",
			selectedUnit: getCornerUnit(selectedUnits, corner),
			showTooltip: true,
			units,
			value: getCornerValue(values, corner)
		}, corner, false, {
			fileName: _jsxFileName,
			lineNumber: 266,
			columnNumber: 7
		}, this)) }, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 257,
			columnNumber: 5
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 226,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime, _jsxFileName;
function init_border_radius_control() {
	return (init_border_radius_control = __esmMin((() => {
		init_base_control(), init_utils$1(), init_component$1(), init_component();
		init_react();
		init_build_module();
		init_linked_button();
		init_use_settings();
		init_utils();
		init_preset_input_control();
		init_constants();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/block-editor/src/components/border-radius-control/index.tsx";
		try {
			BorderRadiusControl.__docgenInfo = {
				"description": "Control to display border radius options.",
				"displayName": "borderradiuscontrol",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/block-editor/src/components/border-radius-control/index.tsx",
				"methods": [],
				"props": {
					"onChange": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/border-radius-control/types.ts",
							"name": "BorderRadiusControlProps"
						}],
						"description": "Callback to handle onChange. Corners the change leaves alone keep their\nstored values, which may be the number `0`.",
						"name": "onChange",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/border-radius-control/types.ts",
							"name": "BorderRadiusControlProps"
						},
						"required": true,
						"tags": {},
						"type": { "name": "(values: Partial<Record<BorderRadiusCorner, string | number>>) => void" }
					},
					"values": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/border-radius-control/types.ts",
							"name": "BorderRadiusControlProps"
						}],
						"description": "Border radius values.",
						"name": "values",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/border-radius-control/types.ts",
							"name": "BorderRadiusControlProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "BorderRadiusValues" }
					},
					"presets": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/border-radius-control/types.ts",
							"name": "BorderRadiusControlProps"
						}],
						"description": "Border radius presets.",
						"name": "presets",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/border-radius-control/types.ts",
							"name": "BorderRadiusControlProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "BorderRadiusPresets" }
					}
				},
				"tags": {
					"param": "props Component props.\nprops.onChange Callback to handle onChange.\nprops.values Border radius values.\nprops.presets Border radius presets.",
					"return": "Custom border radius control."
				}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
export { init_border_radius_control as n, BorderRadiusControl as t };
