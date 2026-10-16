import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { i as D, n as init_names, o as init_colord, r as A, t as e } from "./names-C15GzMmJ.js";
//#region ../packages/components/src/duotone-picker/utils.ts
/**
* Object representation for a color.
*
* @typedef {Object} RGBColor
* @property {number} r Red component of the color in the range [0,1].
* @property {number} g Green component of the color in the range [0,1].
* @property {number} b Blue component of the color in the range [0,1].
*/
/**
* Calculate the brightest and darkest values from a color palette.
*
* @param palette Color palette for the theme.
*
* @return Tuple of the darkest color and brightest color.
*/
function getDefaultColors(palette) {
	if (!palette || palette.length < 2) return ["#000", "#fff"];
	return palette.map(({ color }) => ({
		color,
		brightness: A(color).brightness()
	})).reduce(([min, max], current) => {
		return [current.brightness <= min.brightness ? current : min, current.brightness >= max.brightness ? current : max];
	}, [{
		brightness: 1,
		color: ""
	}, {
		brightness: 0,
		color: ""
	}]).map(({ color }) => color);
}
/**
* Generate a duotone gradient from a list of colors.
*
* @param colors CSS color strings.
* @param angle  CSS gradient angle.
*
* @return  CSS gradient string for the duotone swatch.
*/
function getGradientFromCSSColors(colors = [], angle = "90deg") {
	const l = 100 / colors.length;
	return `linear-gradient( ${angle}, ${colors.map((c, i) => `${c} ${i * l}%, ${c} ${(i + 1) * l}%`).join(", ")} )`;
}
/**
* Convert a color array to an array of color stops.
*
* @param colors CSS colors array
*
* @return Color stop information.
*/
function getColorStopsFromColors(colors) {
	return colors.map((color, i) => ({
		position: i * 100 / (colors.length - 1),
		color
	}));
}
/**
* Convert a color stop array to an array colors.
*
* @param colorStops Color stop information.
*
* @return CSS colors array.
*/
function getColorsFromColorStops(colorStops = []) {
	return colorStops.map(({ color }) => color);
}
function init_utils() {
	return (init_utils = __esmMin((() => {
		init_colord();
		init_names();
		D([e]);
	})))();
}
//#endregion
export { init_utils as a, getGradientFromCSSColors as i, getColorsFromColorStops as n, getDefaultColors as r, getColorStopsFromColors as t };
