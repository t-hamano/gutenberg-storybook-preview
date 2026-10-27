import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
//#region ../packages/block-editor/src/components/preset-input-control/utils.ts
/**
* Returns the slug section of the given preset string.
*
* @param value      Value to extract slug from.
* @param presetType Preset type slug.
*
* @return The value slug from given preset.
*/
function getPresetSlug(value, presetType) {
	if (!value) return;
	if (value === "0" || value === "default") return value;
	const slug = value.match(new RegExp(`var:preset\\|${presetType}\\|(.+)`));
	return slug ? slug[1] : void 0;
}
/**
* Converts preset value into a Range component value .
*
* @param presetValue Value to convert to Range value.
* @param presets     Array of current preset value objects.
* @param presetType  Preset type slug.
*
* @return The int value for use in Range control.
*/
function getSliderValueFromPreset(presetValue, presets, presetType) {
	if (presetValue === void 0) return 0;
	const slug = parseFloat(presetValue) === 0 ? "0" : getPresetSlug(presetValue, presetType);
	const sliderValue = presets.findIndex((size) => {
		return String(size.slug) === slug;
	});
	return sliderValue !== -1 ? sliderValue : NaN;
}
/**
* Converts a preset into a custom value.
*
* @param value      Value to convert
* @param presets    Array of the current radius preset objects
* @param presetType Preset type slug e.g. border-radius
*
* @return Mapping of the preset to its equivalent custom value.
*/
function getCustomValueFromPreset(value, presets, presetType) {
	if (!isValuePreset(value, presetType)) return value;
	const slug = parseFloat(value) === 0 ? "0" : getPresetSlug(value, presetType);
	return presets.find((size) => String(size.slug) === slug)?.size;
}
/**
* Converts a custom value to preset value if one can be found.
*
* Returns value as-is if no match is found.
*
* @param value        Value to convert
* @param spacingSizes Array of the current spacing preset objects
* @param presetType   Preset type slug e.g. border-radius
*
* @return The preset value if it can be found.
*/
function getPresetValueFromCustomValue(value, spacingSizes, presetType) {
	if (!value || isValuePreset(value, presetType) || value === "0") return value;
	const spacingMatch = spacingSizes.find((size) => String(size.size) === String(value));
	if (spacingMatch?.slug) return `var:preset|${presetType}|${spacingMatch.slug}`;
	return value;
}
var isValuePreset;
function init_utils() {
	return (init_utils = __esmMin((() => {
		isValuePreset = (value, slug) => {
			if (!value?.includes) return false;
			return value === "0" || value.includes(`var:preset|${slug}|`);
		};
	})))();
}
//#endregion
export { init_utils as a, getSliderValueFromPreset as i, getPresetSlug as n, isValuePreset as o, getPresetValueFromCustomValue as r, getCustomValueFromPreset as t };
