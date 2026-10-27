import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as useEvent, t as init_use_event } from "./use-event-BTRhHipl.js";
import { n as use_isomorphic_layout_effect_default, t as init_use_isomorphic_layout_effect } from "./use-isomorphic-layout-effect-XEh9CxbX.js";
import { C as to, D as parse, E as init_parse, S as init_to, T as init_ColorSpace, _ as set, a as equals, b as get, c as srgb_default, d as init_toGamut, f as toGamut, g as init_set, i as init_luminance, l as init_serialize, m as clone, n as init_hsl, o as init_equals, p as toGamutCSS, r as getLuminance, s as init_srgb, t as hsl_default, u as serialize, v as init_oklch, w as ColorSpace, x as init_get, y as oklch_default } from "./hsl-Do7y76mZ.js";
import { n as memize } from "./dist-DL-769ey.js";
//#region ../packages/theme/src/prebuilt/ts/color-tokens.ts
var color_tokens_default;
function init_color_tokens() {
	return (init_color_tokens = __esmMin((() => {
		color_tokens_default = {
			transparent: [
				"background-interactive-brand-weak",
				"background-interactive-brand-weak-disabled",
				"background-interactive-error",
				"background-interactive-error-disabled",
				"background-interactive-error-weak",
				"background-interactive-error-weak-disabled",
				"background-interactive-neutral-weak",
				"background-interactive-neutral-weak-disabled"
			],
			"primary-bgFill1": ["background-interactive-brand-strong"],
			"primary-bgFill2": ["background-interactive-brand-strong-active"],
			"primary-fgFill": ["foreground-interactive-brand-strong", "foreground-interactive-brand-strong-active"],
			"primary-surface4": ["background-interactive-brand-weak-active"],
			"primary-fgSurface4": ["foreground-interactive-brand-active"],
			"primary-fgSurface3": ["foreground-interactive-brand"],
			"primary-stroke3": [
				"background-thumb-brand",
				"background-thumb-brand-active",
				"stroke-focus",
				"stroke-interactive-brand",
				"stroke-surface-brand-strong"
			],
			"primary-stroke4": ["stroke-interactive-brand-active"],
			"primary-stroke1": ["stroke-surface-brand"],
			"primary-surface1": ["background-surface-brand"],
			"info-surface2": ["background-surface-info-weak"],
			"info-surface4": ["background-surface-info"],
			"info-fgSurface4": ["foreground-content-info"],
			"info-fgSurface3": ["foreground-content-info-weak"],
			"info-stroke3": ["stroke-surface-info-strong"],
			"info-stroke1": ["stroke-surface-info"],
			"success-surface2": ["background-surface-success-weak"],
			"success-surface4": ["background-surface-success"],
			"success-fgSurface4": ["foreground-content-success"],
			"success-fgSurface3": ["foreground-content-success-weak"],
			"success-stroke3": ["stroke-surface-success-strong"],
			"success-stroke1": ["stroke-surface-success"],
			"warning-surface2": ["background-surface-warning-weak"],
			"warning-surface4": ["background-surface-warning"],
			"warning-fgSurface4": ["foreground-content-warning"],
			"warning-fgSurface3": ["foreground-content-warning-weak"],
			"warning-stroke3": ["stroke-surface-warning-strong"],
			"warning-stroke1": ["stroke-surface-warning"],
			"error-bgFill1": ["background-interactive-error-strong"],
			"error-bgFill2": ["background-interactive-error-strong-active"],
			"error-fgFill": ["foreground-interactive-error-strong", "foreground-interactive-error-strong-active"],
			"error-surface2": ["background-interactive-error-active", "background-surface-error-weak"],
			"error-surface4": ["background-interactive-error-weak-active", "background-surface-error"],
			"error-fgSurface4": ["foreground-content-error", "foreground-interactive-error-active"],
			"error-fgSurface3": ["foreground-content-error-weak", "foreground-interactive-error"],
			"error-stroke3": [
				"stroke-interactive-error",
				"stroke-interactive-error-strong",
				"stroke-surface-error-strong"
			],
			"error-stroke4": ["stroke-interactive-error-active"],
			"error-stroke1": ["stroke-surface-error"],
			"bg-surface2": ["background-surface-neutral"],
			"bg-surface5": [
				"background-interactive-brand-strong-disabled",
				"background-interactive-error-strong-disabled",
				"background-interactive-neutral-strong-disabled"
			],
			"bg-surface4": ["background-interactive-neutral-weak-active"],
			"bg-surface3": [
				"background-interactive-neutral",
				"background-interactive-neutral-active",
				"background-interactive-neutral-disabled",
				"background-surface-neutral-strong"
			],
			"bg-fgSurface4": [
				"background-thumb-neutral",
				"foreground-content-neutral",
				"foreground-interactive-neutral",
				"foreground-interactive-neutral-active",
				"foreground-interactive-neutral-weak-active"
			],
			"bg-fgSurface3": ["foreground-content-neutral-weak", "foreground-interactive-neutral-weak"],
			"bg-fgSurface2": [
				"foreground-interactive-brand-disabled",
				"foreground-interactive-brand-strong-disabled",
				"foreground-interactive-error-disabled",
				"foreground-interactive-error-strong-disabled",
				"foreground-interactive-neutral-disabled",
				"foreground-interactive-neutral-strong-disabled",
				"foreground-interactive-neutral-weak-disabled"
			],
			"bg-stroke3": [
				"background-thumb-neutral-weak",
				"stroke-interactive-neutral",
				"stroke-surface-neutral-strong"
			],
			"bg-stroke4": [
				"background-thumb-neutral-weak-active",
				"stroke-interactive-neutral-active",
				"stroke-interactive-neutral-strong"
			],
			"bg-stroke2": [
				"background-thumb-brand-disabled",
				"background-thumb-neutral-weak-disabled",
				"background-track-neutral",
				"stroke-interactive-brand-disabled",
				"stroke-interactive-error-disabled",
				"stroke-interactive-neutral-disabled",
				"stroke-surface-neutral"
			],
			"bg-stroke1": ["background-track-neutral-weak", "stroke-surface-neutral-weak"],
			"bg-bgFillInverted2": ["background-interactive-neutral-strong-active"],
			"bg-bgFillInverted1": ["background-interactive-neutral-strong"],
			"bg-fgFillInverted": ["foreground-interactive-neutral-strong", "foreground-interactive-neutral-strong-active"],
			"bg-surface1": ["background-surface-neutral-weak"],
			"caution-surface2": ["background-surface-caution-weak"],
			"caution-surface4": ["background-surface-caution"],
			"caution-fgSurface4": ["foreground-content-caution"],
			"caution-fgSurface3": ["foreground-content-caution-weak"],
			"caution-stroke3": ["stroke-surface-caution-strong"],
			"caution-stroke1": ["stroke-surface-caution"]
		};
	})))();
}
//#endregion
//#region ../packages/theme/src/context.ts
var ThemeContext;
function init_context() {
	return (init_context = __esmMin((() => {
		init_react();
		ThemeContext = (0, import_react.createContext)({ resolvedSettings: {
			color: {},
			cursor: void 0,
			cornerRadius: void 0
		} });
	})))();
}
//#endregion
//#region ../packages/theme/src/color-ramps/lib/color-utils.ts
/**
* Get string representation of a color.
* @param color A `PlainColorObject`, or an sRGB-parseable string (typically a
*              hex value, e.g. `#3858e9`).
* @return String representation
*/
function getColorString(color) {
	ColorSpace.register(srgb_default);
	const rgbRounded = serialize(to(color, srgb_default));
	return serialize(rgbRounded, { format: "hex" });
}
/**
* Get contrast value between two colors.
* @param colorA First color: a `PlainColorObject`, or an sRGB-parseable string.
* @param colorB Second color: a `PlainColorObject`, or an sRGB-parseable string.
* @return WCAG 2.1 contrast ratio
*/
function getContrast(colorA, colorB) {
	return getContrastFromLuminances(getRelativeLuminance(colorA), getRelativeLuminance(colorB));
}
/**
* Return a color's non-negative relative luminance. Color objects use a weak
* cache with snapshots to detect mutations.
*
* @param color Color to measure.
*/
function getRelativeLuminance(color) {
	if (typeof color === "string") {
		ColorSpace.register(srgb_default);
		return Math.max(getLuminance(color), 0);
	}
	const cachedLuminance = objectLuminanceCache.get(color);
	if (cachedLuminance && equals(cachedLuminance.color, color)) return cachedLuminance.luminance;
	const luminance = Math.max(getLuminance(color), 0);
	objectLuminanceCache.set(color, {
		color: clone(color),
		luminance
	});
	return luminance;
}
/**
* Calculate a WCAG 2.1 contrast ratio from precomputed relative luminances.
*
* @param first  First relative luminance.
* @param second Second relative luminance.
*/
function getContrastFromLuminances(first, second) {
	return first > second ? (first + .05) / (second + .05) : (second + .05) / (first + .05);
}
/**
* Parse a seed-color string and assert that it has finite sRGB coordinates and
* is fully opaque (hex, `rgb()`/`rgba()`, or a CSS named color), throwing
* otherwise.
* Missing RGB channels (`none`) resolve to zero.
*
* Rejection is deterministic regardless of which `ColorSpace`s are globally
* registered.
*
* @param  seed The seed-color string to validate.
* @return The parsed seed color.
* @throws {Error} If `seed` is not an sRGB-parseable, fully opaque string with finite channels.
*/
function parseSeedColor(seed) {
	ALLOWED_SEED_COLOR_SPACES.forEach((space) => ColorSpace.register(space));
	let parsedColor;
	try {
		parsedColor = parse(seed);
	} catch {
		throw new Error(`Unsupported seed color "${seed}": expected a fully opaque hex value, an \`rgb()\`/\`rgba()\` string, or a CSS named color.`);
	}
	const { alpha = 1, coords, spaceId } = parsedColor;
	if (!ALLOWED_SEED_COLOR_SPACES.some((space) => space.id === spaceId)) throw new Error(`Unsupported seed color "${seed}": expected a fully opaque hex value, an \`rgb()\`/\`rgba()\` string, or a CSS named color, but received a \`${spaceId}\` color.`);
	for (const [index, coordinate] of coords.entries()) if (coordinate === null) coords[index] = 0;
	else if (typeof coordinate !== "number" || !Number.isFinite(coordinate)) throw new Error(`Unsupported seed color "${seed}": expected every RGB channel to be a finite number.`);
	if (alpha !== 1) throw new Error(`Unsupported seed color "${seed}": expected a fully opaque color.`);
	return parsedColor;
}
/**
* Make sure that a color is valid in the sRGB gamut and convert it to OKLCH.
* @param c A color object.
*/
function clampToGamut(c) {
	return to(toGamut(c, {
		space: srgb_default,
		method: "css"
	}), oklch_default);
}
var ALLOWED_SEED_COLOR_SPACES, objectLuminanceCache;
function init_color_utils() {
	return (init_color_utils = __esmMin((() => {
		init_ColorSpace(), init_parse(), init_to(), init_toGamut(), init_serialize(), init_equals(), init_luminance(), init_srgb(), init_oklch();
		ALLOWED_SEED_COLOR_SPACES = [srgb_default];
		objectLuminanceCache = /* @__PURE__ */ new WeakMap();
	})))();
}
//#endregion
//#region ../packages/theme/src/color-ramps/lib/constants.ts
var WHITE, BLACK, UNIVERSAL_CONTRAST_TOPUP, ACCENT_SCALE_BASE_LIGHTNESS_THRESHOLDS, CONTRAST_EPSILON, DEFAULT_SEED_COLORS;
function init_constants() {
	return (init_constants = __esmMin((() => {
		init_oklch();
		WHITE = {
			space: oklch_default,
			coords: [
				1,
				0,
				0
			],
			alpha: 1
		};
		BLACK = {
			space: oklch_default,
			coords: [
				0,
				0,
				0
			],
			alpha: 1
		};
		UNIVERSAL_CONTRAST_TOPUP = .02;
		ACCENT_SCALE_BASE_LIGHTNESS_THRESHOLDS = {
			lighter: {
				min: .2,
				max: .4
			},
			darker: {
				min: .75,
				max: .98
			}
		};
		CONTRAST_EPSILON = .004;
		DEFAULT_SEED_COLORS = {
			background: "#fcfcfc",
			primary: "#3858e9",
			info: "#0090ff",
			success: "#4ab866",
			caution: "#f0d149",
			warning: "#f0b849",
			error: "#cc1818"
		};
	})))();
}
//#endregion
//#region ../packages/theme/src/color-ramps/lib/utils.ts
/**
* Build a dependency graph from the steps configuration
* @param config - The steps configuration object
*/
function buildDependencyGraph(config) {
	const dependencies = /* @__PURE__ */ new Map();
	const dependents = /* @__PURE__ */ new Map();
	Object.keys(config).forEach((step) => {
		dependencies.set(step, []);
	});
	dependents.set("seed", []);
	Object.keys(config).forEach((step) => {
		dependents.set(step, []);
	});
	Object.entries(config).forEach(([stepName, stepConfig]) => {
		const step = stepName;
		const references = [stepConfig.contrast.reference, ...stepConfig.contrast.additionalReferences ?? []];
		for (const reference of references) {
			dependencies.get(step).push(reference);
			dependents.get(reference).push(step);
		}
		if (stepConfig.sameAsIfPossible) {
			dependencies.get(step).push(stepConfig.sameAsIfPossible);
			dependents.get(stepConfig.sameAsIfPossible).push(step);
		}
	});
	return {
		dependencies,
		dependents
	};
}
/**
* Topologically sort steps based on their dependencies
* @param config - The steps configuration object
*/
function sortByDependency(config) {
	const { dependents } = buildDependencyGraph(config);
	const result = [];
	const visited = /* @__PURE__ */ new Set();
	const visiting = /* @__PURE__ */ new Set();
	function visit(node) {
		if (visiting.has(node)) throw new Error(`Circular dependency detected involving step: ${String(node)}`);
		if (visited.has(node)) return;
		visiting.add(node);
		(dependents.get(node) || []).forEach((dependent) => {
			visit(dependent);
		});
		visiting.delete(node);
		visited.add(node);
		if (node !== "seed") result.unshift(node);
	}
	visit("seed");
	return result;
}
/**
* Return minimal set of steps that are needed to calculate `stepName` from the seed.
* @param stepName Name of the step.
* @param config   Configuration of the ramp.
* @return Array of steps that `stepName` depends on.
*/
function stepsForStep(stepName, config) {
	const result = /* @__PURE__ */ new Set();
	function visit(step) {
		if (step === "seed" || result.has(step)) return;
		const stepConfig = config[step];
		if (!stepConfig) return;
		visit(stepConfig.contrast.reference);
		stepConfig.contrast.additionalReferences?.forEach(visit);
		if (stepConfig.sameAsIfPossible) visit(stepConfig.sameAsIfPossible);
		result.add(step);
	}
	visit(stepName);
	return Array.from(result);
}
/**
* Finds out whether a lighter or a darker foreground color achieves a better
* contrast against every reference color
* @param references
* @param preferLighter Whether the check should favor white foreground color
* @return An object with "better" and "worse" properties, each holding a
* ramp direction value.
*/
function computeBetterFgColorDirection(references, preferLighter) {
	const referenceColors = Array.isArray(references) ? references : [references];
	return Math.min(...referenceColors.map((reference) => getContrast(reference, BLACK))) > Math.min(...referenceColors.map((reference) => getContrast(reference, WHITE))) + (preferLighter ? 3.1 : 0) ? {
		better: "darker",
		worse: "lighter"
	} : {
		better: "lighter",
		worse: "darker"
	};
}
function adjustContrastTarget(target) {
	if (target === 1) return 1;
	return target + UNIVERSAL_CONTRAST_TOPUP;
}
/**
* Prevent the accent scale from referencing a lightness value that
* would prevent the algorithm from complying with the requirements
* and cause it to generate unexpected results.
* @param rawLightness
* @param direction
* @return The clamped lightness value
*/
function clampAccentScaleReferenceLightness(rawLightness, direction) {
	const thresholds = ACCENT_SCALE_BASE_LIGHTNESS_THRESHOLDS[direction];
	return Math.max(thresholds.min, Math.min(thresholds.max, rawLightness));
}
/**
* Find the value of `L` (luminance) that produces a `C` (color) that has a
* `value` (contrast delta) equal to zero.
* @param calculateC     Calculate `C` from a given `L`.
* @param calculateValue Calculate value (delta) for a given `C`.
* @param initLowerL     Initial lower value of `L`.
* @param initLowerValue Initial lower delta (negative).
* @param initUpperL     Initial upper value of `L`.
* @param initUpperValue Initial upper delta (positive).
* @return Resulting value of type `C`.
*/
function solveWithBisect(calculateC, calculateValue, initLowerL, initLowerValue, initUpperL, initUpperValue) {
	let lowerL = initLowerL;
	let lowerValue = initLowerValue;
	let lowerReplaced = false;
	let upperL = initUpperL;
	let upperValue = initUpperValue;
	let upperReplaced = false;
	let bestC;
	let bestValue;
	let iterations = 0;
	while (true) {
		iterations++;
		const newL = (lowerL * upperValue - upperL * lowerValue) / (upperValue - lowerValue);
		bestC = calculateC(newL);
		bestValue = calculateValue(bestC);
		if (Math.abs(bestValue) <= .004 || iterations >= 10) break;
		if (bestValue <= 0) {
			lowerL = newL;
			lowerValue = bestValue;
			if (lowerReplaced) upperValue /= 2;
			lowerReplaced = true;
			upperReplaced = false;
		} else {
			upperL = newL;
			upperValue = bestValue;
			if (upperReplaced) lowerValue /= 2;
			upperReplaced = true;
			lowerReplaced = false;
		}
	}
	return bestC;
}
function init_utils() {
	return (init_utils = __esmMin((() => {
		init_constants();
		init_color_utils();
	})))();
}
//#endregion
//#region ../packages/theme/src/color-ramps/lib/taper-chroma.ts
/**
* Prepare a chroma taper for repeated target-lightness calculations.
*
* @param seed    Seed color in OKLCH.
* @param options Chroma taper options.
*/
function createChromaTaper(seed, options = {}) {
	const gamut = options.gamut ?? srgb_default;
	const alpha = options.alpha ?? .65;
	const carry = options.carry ?? .5;
	const radiusLight = options.radiusLight ?? .2;
	const radiusDark = options.radiusDark ?? .2;
	const kLight = options.kLight ?? .85;
	const kDark = options.kDark ?? .85;
	const achromaEpsilon = options.achromaEpsilon ?? .005;
	const cSeed = Math.max(0, get(seed, [oklch_default, "c"]));
	let hSeed = get(seed, [oklch_default, "h"]);
	if (cSeed < achromaEpsilon || hSeed === null || !Number.isFinite(hSeed)) {
		if (typeof options.hueFallback === "number") hSeed = normalizeHue(options.hueFallback);
		else return (lTarget) => ({
			space: oklch_default,
			coords: [
				clamp01(lTarget),
				0,
				0
			],
			alpha: 1
		});
	}
	const lSeed = clamp01(get(seed, [oklch_default, "l"]));
	const cmaxSeed = getMaxChromaAtLH(lSeed, hSeed, gamut);
	const seedRelative = clamp01(cSeed / (cmaxSeed > 0 ? cmaxSeed : 1e-6));
	const seedCarry = Math.pow(seedRelative, clamp01(carry));
	return (lTarget) => {
		const cmaxTarget = getMaxChromaAtLH(clamp01(lTarget), hSeed, gamut);
		const cPlanned = alpha * cmaxTarget * seedCarry * continuousTaper(lSeed, lTarget, {
			radiusLight,
			radiusDark,
			kLight,
			kDark
		});
		return {
			l: clamp01(lTarget),
			c: cPlanned
		};
	};
}
function clamp01(x) {
	if (x < 0) return 0;
	if (x > 1) return 1;
	return x;
}
function normalizeHue(h) {
	let hue = h % 360;
	if (hue < 0) hue += 360;
	return hue;
}
function raisedCosine(u) {
	const x = clamp01(u);
	return .5 - .5 * Math.cos(Math.PI * x);
}
/**
* smooth, distance-from-seed chroma taper (raised-cosine per side)
* @param seedL
* @param targetL
* @param opts
* @param opts.radiusLight
* @param opts.radiusDark
* @param opts.kLight
* @param opts.kDark
*/
function continuousTaper(seedL, targetL, opts) {
	const d = targetL - seedL;
	if (d >= 0) {
		const u = opts.radiusLight > 0 ? Math.abs(d) / opts.radiusLight : 1;
		const w = raisedCosine(u > 1 ? 1 : u);
		return 1 - (1 - opts.kLight) * w;
	}
	const u = opts.radiusDark > 0 ? Math.abs(d) / opts.radiusDark : 1;
	const w = raisedCosine(u > 1 ? 1 : u);
	return 1 - (1 - opts.kDark) * w;
}
function getMaxChromaAtLH(l, h, gamutSpace) {
	const probe = {
		space: oklch_default,
		coords: [
			clamp01(l),
			MAX_CHROMA,
			normalizeHue(h)
		],
		alpha: 1
	};
	const clamped = toGamutCSS(probe, { space: gamutSpace });
	return get(clamped, [oklch_default, "c"]);
}
var MAX_CHROMA;
function init_taper_chroma() {
	return (init_taper_chroma = __esmMin((() => {
		init_get(), init_toGamut(), init_oklch(), init_srgb();
		MAX_CHROMA = .45;
	})))();
}
//#endregion
//#region ../packages/theme/src/color-ramps/lib/find-color-with-constraints.ts
/**
* Difference of contrast values that grows linearly with the Y luminance.
* We get more precise linear interpolations when we use this.
* @param c1 First contrast.
* @param c2 Second contrast.
* @return Difference of logarithms.
*/
function cdiff(c1, c2) {
	return Math.log(c1 / c2);
}
/**
* Solve for L such that:
*  - the L applied to the seed meets the contrast target against the reference
*  - the search is performed in one direction (ie lighter / darker)
*  - more constraints can be applied around lightness
* @param reference
* @param seed
* @param target
* @param direction
* @param options
* @param options.lightnessConstraint
* @param options.lightnessConstraint.type
* @param options.lightnessConstraint.value
* @param options.taperChromaOptions
*/
function findColorMeetingRequirements(reference, seed, target, direction, { lightnessConstraint, taperChromaOptions } = {}) {
	if (target <= 1) return {
		color: reference,
		reached: true,
		achieved: 1
	};
	const seedChroma = get(seed, [oklch_default, "c"]);
	const seedHue = get(seed, [oklch_default, "h"]);
	const taperChromaAtLightness = taperChromaOptions ? createChromaTaper(seed, taperChromaOptions) : void 0;
	function getColorForL(l) {
		let newL = l;
		let newC = seedChroma;
		if (taperChromaAtLightness) {
			const tapered = taperChromaAtLightness(newL);
			if ("l" in tapered && "c" in tapered) {
				newL = tapered.l;
				newC = tapered.c;
			} else return tapered;
		}
		return clampToGamut({
			space: oklch_default,
			coords: [
				newL,
				newC,
				seedHue
			],
			alpha: seed.alpha
		});
	}
	const mostContrastingL = direction === "lighter" ? 1 : 0;
	const mostContrastingColor = direction === "lighter" ? WHITE : BLACK;
	const highestContrast = getContrast(reference, mostContrastingColor);
	if (lightnessConstraint) {
		const colorWithExactL = getColorForL(lightnessConstraint.value);
		const exactLContrast = getContrast(reference, colorWithExactL);
		const exactLContrastMeetsTarget = cdiff(exactLContrast, target) >= -CONTRAST_EPSILON;
		if (exactLContrastMeetsTarget || lightnessConstraint.type === "force") return {
			color: colorWithExactL,
			reached: exactLContrastMeetsTarget,
			achieved: exactLContrast,
			deficit: exactLContrastMeetsTarget ? cdiff(exactLContrast, highestContrast) : cdiff(target, exactLContrast)
		};
	}
	if (cdiff(highestContrast, target) <= .004) return {
		color: mostContrastingColor,
		reached: cdiff(highestContrast, target) >= -CONTRAST_EPSILON,
		achieved: highestContrast,
		deficit: cdiff(target, highestContrast)
	};
	return {
		color: solveWithBisect(getColorForL, (c) => cdiff(getContrast(reference, c), target), get(reference, [oklch_default, "l"]), cdiff(1, target), mostContrastingL, cdiff(highestContrast, target)),
		reached: true,
		achieved: target,
		deficit: cdiff(target, highestContrast)
	};
}
function init_find_color_with_constraints() {
	return (init_find_color_with_constraints = __esmMin((() => {
		init_get(), init_oklch();
		init_utils();
		init_constants();
		init_color_utils();
		init_taper_chroma();
	})))();
}
//#endregion
//#region ../packages/theme/src/color-ramps/lib/index.ts
/**
* Calculate a complete color ramp based on the provided configuration.
*
* @param params                       - The calculation parameters
* @param params.seed                  - The base color to build the ramp from
* @param params.sortedSteps           - Steps sorted in dependency order
* @param params.config                - Ramp configuration defining contrast requirements
* @param params.mainDir               - Primary direction for the ramp (lighter/darker)
* @param params.oppDir                - Opposite direction from mainDir
* @param params.pinLightness          - Optional lightness override for a given step
* @param params.pinLightness.stepName
* @param params.pinLightness.value
* @return Object containing ramp results and satisfaction status
*/
function calculateRamp({ seed, sortedSteps, config, mainDir, oppDir, pinLightness }) {
	const rampResults = {};
	let warnings;
	let maxDeficit = -Infinity;
	let maxDeficitDirection = "lighter";
	let maxDeficitStep;
	const calculatedColors = /* @__PURE__ */ new Map();
	calculatedColors.set("seed", seed);
	for (const stepName of sortedSteps) {
		const { contrast, lightness: stepLightnessConstraint, taperChromaOptions, sameAsIfPossible } = config[stepName];
		const referenceColors = [contrast.reference, ...contrast.additionalReferences ?? []].map((referenceName) => {
			const referenceColor = calculatedColors.get(referenceName);
			if (!referenceColor) throw new Error(`Reference color for step ${stepName} not found: ${referenceName}`);
			return referenceColor;
		});
		if (sameAsIfPossible) {
			const candidateColor = calculatedColors.get(sameAsIfPossible);
			if (!candidateColor) throw new Error(`Same-as color for step ${stepName} not found: ${sameAsIfPossible}`);
			const adjustedTarget = adjustContrastTarget(contrast.target);
			if (referenceColors.every((referenceColor) => getContrast(referenceColor, candidateColor) >= adjustedTarget)) {
				calculatedColors.set(stepName, candidateColor);
				rampResults[stepName] = getColorString(candidateColor);
				continue;
			}
		}
		function computeDirection(colors, followDirection) {
			if (followDirection === "main") return mainDir;
			if (followDirection === "opposite") return oppDir;
			if (followDirection === "best") return computeBetterFgColorDirection(colors, contrast.preferLighter).better;
			return followDirection;
		}
		const computedDir = computeDirection(referenceColors, contrast.followDirection);
		const endpoint = computedDir === "lighter" ? WHITE : BLACK;
		const referenceColor = referenceColors.reduce((tightest, current) => getContrast(current, endpoint) < getContrast(tightest, endpoint) ? current : tightest);
		const adjustedTarget = adjustContrastTarget(contrast.target);
		let lightnessConstraint;
		if (pinLightness?.stepName === stepName) lightnessConstraint = {
			value: pinLightness.value,
			type: "force"
		};
		else if (stepLightnessConstraint) lightnessConstraint = {
			value: stepLightnessConstraint(computedDir),
			type: "onlyIfSucceeds"
		};
		const searchResults = findColorMeetingRequirements(referenceColor, seed, adjustedTarget, computedDir, {
			lightnessConstraint,
			taperChromaOptions
		});
		if (!contrast.ignoreWhenAdjustingSeed && searchResults.deficit && searchResults.deficit > maxDeficit) {
			maxDeficit = searchResults.deficit;
			maxDeficitDirection = computedDir;
			maxDeficitStep = stepName;
		}
		calculatedColors.set(stepName, searchResults.color);
		rampResults[stepName] = getColorString(searchResults.color);
		if (!searchResults.reached && !contrast.ignoreWhenAdjustingSeed) {
			warnings ??= [];
			warnings.push(stepName);
		}
	}
	return {
		rampResults,
		warnings,
		maxDeficit,
		maxDeficitDirection,
		maxDeficitStep
	};
}
function buildRamp(seedArg, config, { mainDirection, pinLightness, rescaleToFitContrastTargets = true } = {}) {
	const parsedSeed = parseSeedColor(seedArg);
	let seed;
	try {
		seed = clampToGamut(parsedSeed);
	} catch (error) {
		throw new Error(`Invalid seed color "${seedArg}": ${error instanceof Error ? error.message : "Unknown error"}`);
	}
	let mainDir = "lighter";
	let oppDir = "darker";
	if (mainDirection) {
		mainDir = mainDirection;
		oppDir = mainDirection === "darker" ? "lighter" : "darker";
	} else {
		const { better, worse } = computeBetterFgColorDirection(seed);
		mainDir = better;
		oppDir = worse;
	}
	const sortedSteps = sortByDependency(config);
	const { rampResults, warnings, maxDeficit, maxDeficitDirection, maxDeficitStep } = calculateRamp({
		seed,
		sortedSteps,
		config,
		mainDir,
		oppDir,
		pinLightness
	});
	let bestRamp = rampResults;
	let bestWarnings = warnings;
	if (maxDeficit > .004 && rescaleToFitContrastTargets) {
		const iterSteps = stepsForStep(maxDeficitStep, config);
		function getSeedForL(l) {
			return clampToGamut(set(clone(seed), [oklch_default, "l"], l));
		}
		function getDeficitForSeed(s) {
			const iterationResults = calculateRamp({
				seed: s,
				sortedSteps: iterSteps,
				config,
				mainDir,
				oppDir,
				pinLightness
			});
			return iterationResults.maxDeficitDirection === maxDeficitDirection ? iterationResults.maxDeficit : -maxDeficit;
		}
		const finalResult = calculateRamp({
			seed: solveWithBisect(getSeedForL, getDeficitForSeed, maxDeficitDirection === "lighter" ? 0 : 1, -maxDeficit, get(seed, [oklch_default, "l"]), maxDeficit),
			sortedSteps,
			config,
			mainDir,
			oppDir,
			pinLightness
		});
		bestRamp = finalResult.rampResults;
		bestWarnings = finalResult.warnings;
	}
	if (mainDir === "darker") {
		const tmpSurface1 = bestRamp.surface1;
		bestRamp.surface1 = bestRamp.surface3;
		bestRamp.surface3 = tmpSurface1;
	}
	return {
		ramp: bestRamp,
		warnings: bestWarnings,
		direction: mainDir
	};
}
function init_lib() {
	return (init_lib = __esmMin((() => {
		init_get(), init_oklch(), init_set();
		init_color_utils();
		init_find_color_with_constraints();
		init_utils();
		init_constants();
	})))();
}
//#endregion
//#region ../packages/theme/src/color-ramps/lib/ramp-configs.ts
var lightnessConstraintForegroundHighContrast, lightnessConstraintForegroundMediumContrast, lightnessConstraintBgFill, BG_SURFACE_TAPER_CHROMA, FG_TAPER_CHROMA, STROKE_TAPER_CHROMA, ACCENT_SURFACE_TAPER_CHROMA, fgSurface4Config, BG_RAMP_CONFIG, ACCENT_RAMP_CONFIG;
function init_ramp_configs() {
	return (init_ramp_configs = __esmMin((() => {
		lightnessConstraintForegroundHighContrast = (direction) => direction === "lighter" ? .9551 : .235;
		lightnessConstraintForegroundMediumContrast = (direction) => direction === "lighter" ? .77 : .56;
		lightnessConstraintBgFill = (direction) => direction === "lighter" ? .67 : .45;
		BG_SURFACE_TAPER_CHROMA = { alpha: .7 };
		FG_TAPER_CHROMA = {
			alpha: .6,
			kLight: .2,
			kDark: .2
		};
		STROKE_TAPER_CHROMA = {
			alpha: .6,
			radiusDark: .01,
			radiusLight: .01,
			kLight: .8,
			kDark: .8
		};
		ACCENT_SURFACE_TAPER_CHROMA = {
			alpha: .75,
			radiusDark: .01,
			radiusLight: .01
		};
		fgSurface4Config = {
			contrast: {
				reference: "surface3",
				followDirection: "main",
				target: 7,
				preferLighter: true
			},
			lightness: lightnessConstraintForegroundHighContrast,
			taperChromaOptions: FG_TAPER_CHROMA
		};
		BG_RAMP_CONFIG = {
			surface1: {
				contrast: {
					reference: "surface2",
					followDirection: "opposite",
					target: 1.06,
					ignoreWhenAdjustingSeed: true
				},
				taperChromaOptions: BG_SURFACE_TAPER_CHROMA
			},
			surface2: { contrast: {
				reference: "seed",
				followDirection: "main",
				target: 1
			} },
			surface3: {
				contrast: {
					reference: "surface2",
					followDirection: "main",
					target: 1.06
				},
				taperChromaOptions: BG_SURFACE_TAPER_CHROMA
			},
			surface4: {
				contrast: {
					reference: "surface2",
					followDirection: "main",
					target: 1.12
				},
				taperChromaOptions: BG_SURFACE_TAPER_CHROMA
			},
			surface5: {
				contrast: {
					reference: "surface2",
					followDirection: "main",
					target: 1.2
				},
				taperChromaOptions: BG_SURFACE_TAPER_CHROMA
			},
			surface6: {
				contrast: {
					reference: "surface2",
					followDirection: "main",
					target: 1.4
				},
				taperChromaOptions: BG_SURFACE_TAPER_CHROMA
			},
			bgFill1: {
				contrast: {
					reference: "surface2",
					followDirection: "main",
					target: 4
				},
				lightness: lightnessConstraintBgFill
			},
			bgFill2: { contrast: {
				reference: "bgFill1",
				followDirection: "main",
				target: 1.2
			} },
			bgFillInverted1: { contrast: {
				reference: "bgFillInverted2",
				followDirection: "opposite",
				target: 1.2
			} },
			bgFillInverted2: fgSurface4Config,
			bgFillDark: {
				contrast: {
					reference: "surface3",
					followDirection: "darker",
					target: 7,
					ignoreWhenAdjustingSeed: true
				},
				lightness: lightnessConstraintForegroundHighContrast,
				taperChromaOptions: FG_TAPER_CHROMA
			},
			stroke1: {
				contrast: {
					reference: "stroke3",
					followDirection: "opposite",
					target: 2.9
				},
				taperChromaOptions: STROKE_TAPER_CHROMA
			},
			stroke2: {
				contrast: {
					reference: "stroke3",
					followDirection: "opposite",
					target: 2.4
				},
				taperChromaOptions: STROKE_TAPER_CHROMA
			},
			stroke3: {
				contrast: {
					reference: "surface3",
					followDirection: "main",
					target: 3
				},
				taperChromaOptions: STROKE_TAPER_CHROMA
			},
			stroke4: {
				contrast: {
					reference: "stroke3",
					followDirection: "main",
					target: 1.5
				},
				taperChromaOptions: STROKE_TAPER_CHROMA
			},
			fgSurface1: {
				contrast: {
					reference: "surface3",
					followDirection: "main",
					target: 2,
					preferLighter: true
				},
				taperChromaOptions: FG_TAPER_CHROMA
			},
			fgSurface2: {
				contrast: {
					reference: "surface3",
					followDirection: "main",
					target: 3,
					preferLighter: true
				},
				taperChromaOptions: FG_TAPER_CHROMA
			},
			fgSurface3: {
				contrast: {
					reference: "surface3",
					followDirection: "main",
					target: 4.5,
					preferLighter: true
				},
				lightness: lightnessConstraintForegroundMediumContrast,
				taperChromaOptions: FG_TAPER_CHROMA
			},
			fgSurface4: fgSurface4Config,
			fgFill: {
				contrast: {
					reference: "bgFill1",
					additionalReferences: ["bgFill2"],
					followDirection: "best",
					target: 4.55
				},
				lightness: lightnessConstraintForegroundHighContrast,
				taperChromaOptions: FG_TAPER_CHROMA
			},
			fgFillInverted: {
				contrast: {
					reference: "bgFillInverted1",
					followDirection: "best",
					target: 4.5,
					preferLighter: true
				},
				lightness: lightnessConstraintForegroundHighContrast,
				taperChromaOptions: FG_TAPER_CHROMA
			},
			fgFillDark: {
				contrast: {
					reference: "bgFillDark",
					followDirection: "best",
					target: 4.5,
					preferLighter: true
				},
				lightness: lightnessConstraintForegroundHighContrast,
				taperChromaOptions: FG_TAPER_CHROMA
			}
		};
		ACCENT_RAMP_CONFIG = {
			...BG_RAMP_CONFIG,
			surface1: {
				...BG_RAMP_CONFIG.surface1,
				taperChromaOptions: ACCENT_SURFACE_TAPER_CHROMA
			},
			surface2: {
				contrast: {
					reference: "bgFill1",
					followDirection: "opposite",
					target: BG_RAMP_CONFIG.bgFill1.contrast.target,
					ignoreWhenAdjustingSeed: true
				},
				taperChromaOptions: ACCENT_SURFACE_TAPER_CHROMA
			},
			surface3: {
				...BG_RAMP_CONFIG.surface3,
				taperChromaOptions: ACCENT_SURFACE_TAPER_CHROMA
			},
			surface4: {
				...BG_RAMP_CONFIG.surface4,
				taperChromaOptions: ACCENT_SURFACE_TAPER_CHROMA
			},
			surface5: {
				...BG_RAMP_CONFIG.surface5,
				taperChromaOptions: ACCENT_SURFACE_TAPER_CHROMA
			},
			surface6: {
				...BG_RAMP_CONFIG.surface6,
				taperChromaOptions: ACCENT_SURFACE_TAPER_CHROMA
			},
			bgFill1: { contrast: {
				reference: "seed",
				followDirection: "main",
				target: 1
			} },
			stroke1: { ...BG_RAMP_CONFIG.stroke1 },
			stroke2: { ...BG_RAMP_CONFIG.stroke2 },
			stroke3: {
				...BG_RAMP_CONFIG.stroke3,
				sameAsIfPossible: "fgSurface3",
				taperChromaOptions: void 0
			},
			stroke4: {
				...BG_RAMP_CONFIG.stroke4,
				taperChromaOptions: void 0
			},
			fgSurface1: {
				...BG_RAMP_CONFIG.fgSurface1,
				taperChromaOptions: void 0
			},
			fgSurface2: {
				...BG_RAMP_CONFIG.fgSurface2,
				taperChromaOptions: void 0
			},
			fgSurface3: {
				...BG_RAMP_CONFIG.fgSurface3,
				taperChromaOptions: void 0,
				sameAsIfPossible: "bgFill1"
			},
			fgSurface4: {
				...BG_RAMP_CONFIG.fgSurface4,
				taperChromaOptions: void 0
			}
		};
	})))();
}
//#endregion
//#region ../packages/theme/src/color-ramps/index.ts
/**
* Creates a background ramp.
* @param seed The seed color for the background ramp.
*/
function buildBgRamp(seed) {
	if (typeof seed !== "string" || seed.trim() === "") throw new Error("Seed color must be a non-empty string");
	return buildRamp(seed, BG_RAMP_CONFIG);
}
function getBgRampInfo(ramp) {
	ColorSpace.register(srgb_default);
	return {
		mainDirection: ramp.direction,
		pinLightness: {
			stepName: STEP_TO_PIN,
			value: clampAccentScaleReferenceLightness(get(ramp.ramp[STEP_TO_PIN], [oklch_default, "l"]), ramp.direction)
		}
	};
}
/**
* Creates an accent ramp (ie used by primary, success, info, warning and error
* ramps).
* @param seed   The seed color for the accent ramp.
* @param bgRamp The ramp of the background on which the accent is shown.
*/
function buildAccentRamp(seed, bgRamp) {
	if (typeof seed !== "string" || seed.trim() === "") throw new Error("Seed color must be a non-empty string");
	const bgRampInfo = bgRamp ? getBgRampInfo(bgRamp) : void 0;
	return buildRamp(seed, ACCENT_RAMP_CONFIG, bgRampInfo);
}
var STEP_TO_PIN;
function init_color_ramps() {
	return (init_color_ramps = __esmMin((() => {
		init_ColorSpace(), init_get(), init_oklch(), init_srgb();
		init_lib();
		init_utils();
		init_ramp_configs();
		init_constants();
		STEP_TO_PIN = "surface2";
	})))();
}
//#endregion
//#region ../packages/theme/src/color-ramps/lib/default-ramps.ts
var DEFAULT_RAMPS;
function init_default_ramps() {
	return (init_default_ramps = __esmMin((() => {
		DEFAULT_RAMPS = {
			background: {
				ramp: {
					surface2: "#fcfcfc",
					bgFill1: "#555",
					bgFill2: "#484848",
					fgFill: "#f0f0f0",
					surface6: "#d6d6d6",
					surface5: "#e6e6e6",
					surface4: "#ededed",
					surface3: "#fff",
					fgSurface4: "#1e1e1e",
					fgSurface3: "#707070",
					fgSurface2: "#8d8d8d",
					fgSurface1: "#aeaeae",
					stroke3: "#8d8d8d",
					stroke4: "#6e6e6e",
					stroke2: "#dbdbdb",
					stroke1: "#f0f0f0",
					bgFillDark: "#1e1e1e",
					fgFillDark: "#f0f0f0",
					bgFillInverted2: "#1e1e1e",
					bgFillInverted1: "#2d2d2d",
					fgFillInverted: "#f0f0f0",
					surface1: "#f4f4f4"
				},
				direction: "darker"
			},
			primary: {
				ramp: {
					bgFill1: "#3858e9",
					bgFill2: "#2e49d9",
					fgFill: "#eff0f2",
					surface2: "#f6f8fe",
					surface6: "#c7d2ee",
					surface5: "#dce3f4",
					surface4: "#e5eaf7",
					surface3: "#fff",
					fgSurface4: "#0b0070",
					fgSurface3: "#3858e9",
					fgSurface2: "#5a82ff",
					fgSurface1: "#86a9ff",
					stroke3: "#3858e9",
					stroke4: "#2337c8",
					stroke2: "#9aaad1",
					stroke1: "#aebbda",
					bgFillDark: "#1a1e27",
					fgFillDark: "#eff0f2",
					bgFillInverted2: "#1a1e27",
					bgFillInverted1: "#13009f",
					fgFillInverted: "#eff0f2",
					surface1: "#ecf0fa"
				},
				direction: "darker"
			},
			info: {
				ramp: {
					bgFill1: "#0090ff",
					bgFill2: "#007fed",
					fgFill: "#12161a",
					surface2: "#f3f9ff",
					surface6: "#bcd5f2",
					surface5: "#d3e4f7",
					surface4: "#deebfa",
					surface3: "#fff",
					fgSurface4: "#001b4f",
					fgSurface3: "#006bd7",
					fgSurface2: "#008bfa",
					fgSurface1: "#59b0ff",
					stroke3: "#006bd7",
					stroke4: "#004fa9",
					stroke2: "#95b5d9",
					stroke1: "#adc6e2",
					bgFillDark: "#1a1f24",
					fgFillDark: "#eef0f2",
					bgFillInverted2: "#1a1f24",
					bgFillInverted1: "#002a69",
					fgFillInverted: "#eef0f2",
					surface1: "#e7f1fd"
				},
				direction: "darker"
			},
			success: {
				ramp: {
					bgFill1: "#4ab866",
					bgFill2: "#37a756",
					fgFill: "#1b1f1c",
					surface2: "#ebffed",
					surface6: "#89e89c",
					surface5: "#a7f5b5",
					surface4: "#c2f8ca",
					surface3: "#fff",
					fgSurface4: "#002900",
					fgSurface3: "#008030",
					fgSurface2: "#2b9f4e",
					fgSurface1: "#54c16e",
					stroke3: "#008030",
					stroke4: "#006113",
					stroke2: "#84c08f",
					stroke1: "#92d39d",
					bgFillDark: "#1b1f1c",
					fgFillDark: "#ecf2ec",
					bgFillInverted2: "#1b1f1c",
					bgFillInverted1: "#003701",
					fgFillInverted: "#ecf2ec",
					surface1: "#d4fbd9"
				},
				direction: "darker"
			},
			caution: {
				ramp: {
					bgFill1: "#f0d149",
					bgFill2: "#dcbe2f",
					fgFill: "#1f1e1b",
					surface2: "#fff9ca",
					surface6: "#e8d170",
					surface5: "#f7e28a",
					surface4: "#fee995",
					surface3: "#fff",
					fgSurface4: "#281d00",
					fgSurface3: "#836a00",
					fgSurface2: "#a48700",
					fgSurface1: "#c7a800",
					stroke3: "#836a00",
					stroke4: "#634f00",
					stroke2: "#bdb17e",
					stroke1: "#d0c28b",
					bgFillDark: "#1f1e1b",
					fgFillDark: "#faf1c9",
					bgFillInverted2: "#1f1e1b",
					bgFillInverted1: "#392c00",
					fgFillInverted: "#faf1c9",
					surface1: "#ffefa9"
				},
				direction: "darker"
			},
			warning: {
				ramp: {
					bgFill1: "#f0b849",
					bgFill2: "#dda633",
					fgFill: "#1f1e1b",
					surface2: "#fff7e1",
					surface6: "#f3cc86",
					surface5: "#fadead",
					surface4: "#fde6be",
					surface3: "#fff",
					fgSurface4: "#2e1900",
					fgSurface3: "#936300",
					fgSurface2: "#b57f00",
					fgSurface1: "#d7a02b",
					stroke3: "#936300",
					stroke4: "#704900",
					stroke2: "#c8ad7f",
					stroke1: "#e1bd7c",
					bgFillDark: "#1f1e1b",
					fgFillDark: "#f5efe5",
					bgFillInverted2: "#1f1e1b",
					bgFillInverted1: "#422800",
					fgFillInverted: "#f5efe5",
					surface1: "#ffeccb"
				},
				direction: "darker"
			},
			error: {
				ramp: {
					bgFill1: "#cc1818",
					bgFill2: "#b90000",
					fgFill: "#f2efef",
					surface2: "#fff6f5",
					surface6: "#f2c9c3",
					surface5: "#f7dbd7",
					surface4: "#fae5e1",
					surface3: "#fff",
					fgSurface4: "#470000",
					fgSurface3: "#cc1818",
					fgSurface2: "#f74c40",
					fgSurface1: "#ff8879",
					stroke3: "#cc1818",
					stroke4: "#9d0000",
					stroke2: "#d99a91",
					stroke1: "#e0afa7",
					bgFillDark: "#231c1b",
					fgFillDark: "#f2efef",
					bgFillInverted2: "#231c1b",
					bgFillInverted1: "#640000",
					fgFillInverted: "#f2efef",
					surface1: "#fcece9"
				},
				direction: "darker"
			}
		};
	})))();
}
//#endregion
//#region ../packages/theme/src/semantic-color-contrast-pairs.ts
function getSemanticColorCustomProperty(token) {
	return `--wpds-color-${token.replaceAll(".", "-")}`;
}
var MINIMUM_TEXT_CONTRAST, SEMANTIC_COLOR_CONTRAST_PAIRS;
function init_semantic_color_contrast_pairs() {
	return (init_semantic_color_contrast_pairs = __esmMin((() => {
		MINIMUM_TEXT_CONTRAST = 4.5;
		SEMANTIC_COLOR_CONTRAST_PAIRS = [
			{
				background: "background.interactive.neutral",
				foreground: "foreground.interactive.neutral"
			},
			{
				background: "background.interactive.neutral",
				foreground: "foreground.interactive.neutral-weak"
			},
			{
				background: "background.interactive.neutral-active",
				foreground: "foreground.interactive.neutral"
			},
			{
				background: "background.interactive.neutral-active",
				foreground: "foreground.interactive.neutral-weak"
			},
			{
				background: "background.interactive.neutral-weak-active",
				foreground: "foreground.interactive.neutral-active"
			},
			{
				background: "background.surface.neutral",
				foreground: "foreground.content.neutral"
			},
			{
				background: "background.surface.neutral-strong",
				foreground: "foreground.content.neutral"
			},
			{
				background: "background.surface.neutral-weak",
				foreground: "foreground.content.neutral"
			},
			{
				background: "background.surface.neutral",
				foreground: "foreground.content.neutral-weak"
			},
			{
				background: "background.surface.info",
				foreground: "foreground.content.info"
			},
			{
				background: "background.surface.info-weak",
				foreground: "foreground.content.info-weak"
			},
			{
				background: "background.surface.success",
				foreground: "foreground.content.success"
			},
			{
				background: "background.surface.success-weak",
				foreground: "foreground.content.success-weak"
			},
			{
				background: "background.surface.warning",
				foreground: "foreground.content.warning"
			},
			{
				background: "background.surface.warning-weak",
				foreground: "foreground.content.warning-weak"
			},
			{
				background: "background.surface.caution",
				foreground: "foreground.content.caution"
			},
			{
				background: "background.surface.caution-weak",
				foreground: "foreground.content.caution-weak"
			},
			{
				background: "background.surface.error",
				foreground: "foreground.content.error"
			},
			{
				background: "background.surface.error-weak",
				foreground: "foreground.content.error-weak"
			},
			{
				background: "background.interactive.brand-strong",
				foreground: "foreground.interactive.brand-strong"
			},
			{
				background: "background.interactive.brand-strong-active",
				foreground: "foreground.interactive.brand-strong-active"
			},
			{
				background: "background.interactive.error-strong",
				foreground: "foreground.interactive.error-strong"
			},
			{
				background: "background.interactive.error-strong-active",
				foreground: "foreground.interactive.error-strong-active"
			},
			{
				background: "background.interactive.neutral-strong",
				foreground: "foreground.interactive.neutral-strong"
			},
			{
				background: "background.interactive.neutral-strong-active",
				foreground: "foreground.interactive.neutral-strong-active"
			}
		];
	})))();
}
//#endregion
//#region ../packages/theme/src/theme-provider-color-warnings.ts
function collectThemeProviderColorWarnings(ramps, colorValues) {
	const warnings = [];
	for (const [rampName, result] of ramps) for (const step of result.warnings ?? []) warnings.push({
		type: "ramp",
		ramp: rampName,
		step
	});
	for (const { background: backgroundToken, foreground: foregroundToken } of SEMANTIC_COLOR_CONTRAST_PAIRS) {
		const backgroundColor = colorValues.get(getSemanticColorCustomProperty(backgroundToken));
		const foregroundColor = colorValues.get(getSemanticColorCustomProperty(foregroundToken));
		if (backgroundColor === void 0 || foregroundColor === void 0) continue;
		const achievedContrast = getContrast(backgroundColor, foregroundColor);
		if (achievedContrast < 4.5) warnings.push({
			type: "contrast",
			backgroundToken,
			backgroundColor,
			foregroundToken,
			foregroundColor,
			requiredContrast: MINIMUM_TEXT_CONTRAST,
			achievedContrast
		});
	}
	return warnings;
}
function init_theme_provider_color_warnings() {
	return (init_theme_provider_color_warnings = __esmMin((() => {
		init_color_utils();
		init_semantic_color_contrast_pairs();
	})))();
}
//#endregion
//#region ../packages/theme/src/use-theme-provider-styles.ts
function getBgRamp(seed) {
	return seed === DEFAULT_SEED_COLORS.background ? DEFAULT_RAMPS.background : getCachedBgRamp(seed);
}
function getAccentRamp(rampName, seed, bgRamp) {
	return bgRamp === DEFAULT_RAMPS.background && seed === DEFAULT_SEED_COLORS[rampName] ? DEFAULT_RAMPS[rampName] : getCachedAccentRamp(seed, bgRamp);
}
function customRgbFormat(color) {
	return to(color, srgb_default).coords.map((n) => Math.round((n ?? 0) * 255)).join(", ");
}
function legacyWpAdminThemeOverridesCSS(accent) {
	ColorSpace.register(srgb_default);
	const parsedAccent = to(accent, hsl_default);
	const parsedL = parsedAccent.coords[2] ?? 0;
	const darker10 = set(clone(parsedAccent), [hsl_default, "l"], Math.max(0, parsedL - 5));
	const darker20 = set(clone(parsedAccent), [hsl_default, "l"], Math.max(0, parsedL - 10));
	return [
		["--wp-admin-theme-color", getColorString(parsedAccent)],
		["--wp-admin-theme-color--rgb", customRgbFormat(parsedAccent)],
		["--wp-admin-theme-color-darker-10", getColorString(darker10)],
		["--wp-admin-theme-color-darker-10--rgb", customRgbFormat(darker10)],
		["--wp-admin-theme-color-darker-20", getColorString(darker20)],
		["--wp-admin-theme-color-darker-20--rgb", customRgbFormat(darker20)]
	];
}
function colorTokensCSS(computedColorRamps) {
	const entries = [];
	for (const [rampName, { ramp }] of computedColorRamps) for (const [tokenName, tokenValue] of Object.entries(ramp)) {
		const key = `${rampName === "background" ? "bg" : rampName}-${tokenName}`;
		const aliasedBy = color_tokens_default[key] ?? [];
		for (const aliasedId of aliasedBy) entries.push([`--wpds-color-${aliasedId}`, tokenValue]);
	}
	return entries;
}
function generateStyles({ primary, colorEntries }) {
	return Object.fromEntries([
		colorEntries,
		legacyWpAdminThemeOverridesCSS(primary),
		legacyWpComponentsOverridesCSS
	].flat());
}
function generateThemeProviderColors(primary, background) {
	const seeds = {
		...DEFAULT_SEED_COLORS,
		background,
		primary
	};
	const computedColorRamps = /* @__PURE__ */ new Map();
	const bgRamp = getBgRamp(seeds.background);
	for (const [rawRampName, seed] of Object.entries(seeds)) {
		const rampName = rawRampName;
		computedColorRamps.set(rampName, rampName === "background" ? bgRamp : getAccentRamp(rampName, seed, bgRamp));
	}
	const colorEntries = colorTokensCSS(computedColorRamps);
	return {
		styles: generateStyles({
			primary: seeds.primary,
			colorEntries
		}),
		warnings: collectThemeProviderColorWarnings(computedColorRamps, new Map(colorEntries))
	};
}
function useThemeProviderStyles({ color = {}, cursor, cornerRadius } = {}) {
	const { resolvedSettings: inheritedSettings } = (0, import_react.useContext)(ThemeContext);
	const hasColor = color.primary !== void 0 || color.background !== void 0 || inheritedSettings.color?.primary !== void 0 || inheritedSettings.color?.background !== void 0;
	const primary = hasColor ? color.primary ?? inheritedSettings.color?.primary ?? DEFAULT_SEED_COLORS.primary : void 0;
	const background = hasColor ? color.background ?? inheritedSettings.color?.background ?? DEFAULT_SEED_COLORS.background : void 0;
	const cursorControl = cursor?.control ?? inheritedSettings.cursor?.control;
	const cornerRadiusPreset = cornerRadius ?? inheritedSettings.cornerRadius ?? "subtle";
	const resolvedSettings = (0, import_react.useMemo)(() => ({
		color: {
			primary,
			background
		},
		cursor: cursorControl ? { control: cursorControl } : void 0,
		cornerRadius: cornerRadiusPreset
	}), [
		primary,
		background,
		cursorControl,
		cornerRadiusPreset
	]);
	const generatedColors = (0, import_react.useMemo)(() => {
		if (primary === void 0 || background === void 0) return {
			styles: {},
			warnings: void 0
		};
		return generateThemeProviderColors(primary, background);
	}, [primary, background]);
	return {
		resolvedSettings,
		themeProviderStyles: (0, import_react.useMemo)(() => ({
			...generatedColors.styles,
			...cursorControl && { "--wpds-cursor-control": cursorControl }
		}), [generatedColors.styles, cursorControl]),
		colorWarnings: generatedColors.warnings
	};
}
var getCachedBgRamp, getCachedAccentRamp, legacyWpComponentsOverridesCSS;
function init_use_theme_provider_styles() {
	return (init_use_theme_provider_styles = __esmMin((() => {
		init_ColorSpace(), init_set(), init_to(), init_srgb(), init_hsl();
		init_react();
		init_context();
		init_color_tokens();
		init_color_ramps();
		init_color_utils();
		init_default_ramps();
		init_theme_provider_color_warnings();
		getCachedBgRamp = memize(buildBgRamp, { maxSize: 10 });
		getCachedAccentRamp = memize(buildAccentRamp, { maxSize: 10 });
		legacyWpComponentsOverridesCSS = [
			["--wp-components-color-accent", "var(--wp-admin-theme-color)"],
			["--wp-components-color-accent-darker-10", "var(--wp-admin-theme-color-darker-10)"],
			["--wp-components-color-accent-darker-20", "var(--wp-admin-theme-color-darker-20)"],
			["--wp-components-color-accent-inverted", "var(--wpds-color-foreground-interactive-brand-strong, #fff)"],
			["--wp-components-color-background", "var(--wpds-color-background-surface-neutral-strong, #fff)"],
			["--wp-components-color-foreground", "var(--wpds-color-foreground-content-neutral, #1e1e1e)"],
			["--wp-components-color-foreground-inverted", "var(--wpds-color-background-surface-neutral, #fcfcfc)"],
			["--wp-components-color-gray-100", "var(--wpds-color-background-surface-neutral, #fcfcfc)"],
			["--wp-components-color-gray-200", "var(--wpds-color-stroke-surface-neutral, #dbdbdb)"],
			["--wp-components-color-gray-300", "var(--wpds-color-stroke-surface-neutral, #dbdbdb)"],
			["--wp-components-color-gray-400", "var(--wpds-color-stroke-interactive-neutral, #8d8d8d)"],
			["--wp-components-color-gray-600", "var(--wpds-color-stroke-interactive-neutral, #8d8d8d)"],
			["--wp-components-color-gray-700", "var(--wpds-color-foreground-content-neutral-weak, #707070)"],
			["--wp-components-color-gray-800", "var(--wpds-color-foreground-content-neutral, #1e1e1e)"]
		];
	})))();
}
//#endregion
//#region ../packages/theme/src/style.module.css
var wrapper, style_module_default;
function init_style_module() {
	return (init_style_module = __esmMin((() => {
		wrapper = "_wrapper_16ki0_1";
		style_module_default = { wrapper };
	})))();
}
//#endregion
//#region ../packages/theme/src/theme-provider.tsx
var import_jsx_dev_runtime, _jsxFileName, rootProviderCountByDocument, ThemeProvider;
function init_theme_provider() {
	return (init_theme_provider = __esmMin((() => {
		init_react();
		init_use_event(), init_use_isomorphic_layout_effect();
		init_context();
		init_use_theme_provider_styles();
		init_style_module();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/theme/src/theme-provider.tsx";
		rootProviderCountByDocument = /* @__PURE__ */ new WeakMap();
		ThemeProvider = ({ children, color = {}, cursor, cornerRadius, isRoot = false, onColorWarnings }) => {
			const { themeProviderStyles, resolvedSettings, colorWarnings } = useThemeProviderStyles({
				color,
				cursor,
				cornerRadius
			});
			const cornerRadiusPreset = resolvedSettings.cornerRadius ?? "subtle";
			const onColorWarningsEvent = useEvent(onColorWarnings);
			const contextValue = (0, import_react.useMemo)(() => ({ resolvedSettings }), [resolvedSettings]);
			const wrapperRef = (0, import_react.useRef)(null);
			(0, import_react.useEffect)(() => {
				if (colorWarnings !== void 0) onColorWarningsEvent(colorWarnings);
			}, [colorWarnings, onColorWarningsEvent]);
			use_isomorphic_layout_effect_default(() => {
				if (!isRoot) return;
				const doc = wrapperRef.current?.ownerDocument;
				if (!doc) return;
				const root = doc.documentElement;
				{
					const active = rootProviderCountByDocument.get(doc) ?? 0;
					if (active > 0) console.warn("ThemeProvider: More than one root provider (`isRoot`) is mounted on the same document. Their forwarded document-level styles conflict, and unmounting one can reset the others. Render a single root provider per document.");
					rootProviderCountByDocument.set(doc, active + 1);
				}
				const previous = new Map(Array.from(root.style, (key) => [key, {
					value: root.style.getPropertyValue(key),
					priority: root.style.getPropertyPriority(key)
				}]));
				const applied = [];
				const previousRootProvider = root.getAttribute("data-wpds-root-provider");
				const previousCornerRadius = root.getAttribute("data-wpds-corner-radius");
				root.setAttribute("data-wpds-root-provider", "true");
				root.setAttribute("data-wpds-corner-radius", cornerRadiusPreset);
				for (const [rawKey, rawValue] of Object.entries(themeProviderStyles)) {
					if (!rawKey.startsWith("--") || rawValue === null || rawValue === void 0) continue;
					root.style.setProperty(rawKey, String(rawValue));
					applied.push(rawKey);
				}
				return () => {
					{
						const active = rootProviderCountByDocument.get(doc) ?? 1;
						if (active <= 1) rootProviderCountByDocument.delete(doc);
						else rootProviderCountByDocument.set(doc, active - 1);
					}
					for (const key of applied) {
						const previousProperty = previous.get(key);
						if (previousProperty) root.style.setProperty(key, previousProperty.value || " ", previousProperty.priority);
						else root.style.removeProperty(key);
					}
					if (previousRootProvider === null) root.removeAttribute("data-wpds-root-provider");
					else root.setAttribute("data-wpds-root-provider", previousRootProvider);
					if (previousCornerRadius === null) root.removeAttribute("data-wpds-corner-radius");
					else root.setAttribute("data-wpds-corner-radius", previousCornerRadius);
				};
			}, [
				cornerRadiusPreset,
				isRoot,
				themeProviderStyles
			]);
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				ref: wrapperRef,
				"data-wpds-root-provider": isRoot || void 0,
				"data-wpds-corner-radius": cornerRadiusPreset,
				className: style_module_default.wrapper,
				style: themeProviderStyles,
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ThemeContext.Provider, {
					value: contextValue,
					children
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 164,
					columnNumber: 4
				}, void 0)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 157,
				columnNumber: 3
			}, void 0);
		};
		try {
			ThemeProvider.__docgenInfo = {
				"description": "Context provider that generates a theme from a set of seed color values and\nconfiguration, producing a set of design token overrides as CSS custom\nproperties.",
				"displayName": "ThemeProvider",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/theme/src/theme-provider.tsx",
				"methods": [],
				"props": {
					"children": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/theme/src/types.ts",
							"name": "ThemeProviderProps"
						}],
						"description": "The children to render.",
						"name": "children",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/theme/src/types.ts",
							"name": "ThemeProviderProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "ReactNode" }
					},
					"onColorWarnings": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/theme/src/types.ts",
							"name": "ThemeProviderProps"
						}],
						"description": "Called after the provider calculates its colors. Reports failures from the\ngenerated ramp checks and defined semantic foreground/background pairs. It\ndoes not validate every possible token pairing. Receives an empty array\nwhen all checked targets are met.\nThe callback may run more than once in development under React Strict Mode.",
						"name": "onColorWarnings",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/theme/src/types.ts",
							"name": "ThemeProviderProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "((warnings: readonly ThemeProviderColorWarning[]) => void)" }
					},
					"isRoot": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/theme/src/types.ts",
							"name": "ThemeProviderProps"
						}],
						"description": "When a ThemeProvider is the root provider, it will apply its theming\nsettings also to the root document element (e.g. the html element).\nThis is useful, for example, to make sure that the `html` element can\nconsume the right background color, or that overlays rendered inside a\nportal can inherit the correct color scheme.\n\nRender at most one root provider per document. Multiple root providers\nthat share the same document are unsupported.",
						"name": "isRoot",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/theme/src/types.ts",
							"name": "ThemeProviderProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"color": {
						"defaultValue": { "value": "{}" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/theme/src/types.ts",
							"name": "ThemeProviderSettings"
						}],
						"description": "Seeds for the generated theme colors. The ramp builder may adjust their\nlightness to meet its contrast targets, so generated tokens are not\nguaranteed to contain the seeds unchanged.",
						"name": "color",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/theme/src/types.ts",
							"name": "ThemeProviderSettings"
						},
						"required": false,
						"tags": {},
						"type": { "name": "{ primary?: string; background?: string; } | undefined" }
					},
					"cursor": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/theme/src/types.ts",
							"name": "ThemeProviderSettings"
						}],
						"description": "The set of cursor options to apply to the theme.",
						"name": "cursor",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/theme/src/types.ts",
							"name": "ThemeProviderSettings"
						},
						"required": false,
						"tags": {},
						"type": { "name": "{ control?: \"pointer\" | \"default\"; }" }
					},
					"cornerRadius": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/theme/src/types.ts",
							"name": "ThemeProviderSettings"
						}],
						"description": "Overall roundness preset for the theme subtree: `none` (square corners),\n`subtle`, `moderate`, or `pronounced` (most rounded).\n\nThis scales the individual `--wpds-border-radius-*` token sizes for the\nsubtree; it sets the overall amount of roundness, not a single token\nsize.\n\nWhen omitted, inherits from the parent `ThemeProvider`. If there is no\nparent value, the prebuilt default applies (`subtle`).",
						"name": "cornerRadius",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/theme/src/types.ts",
							"name": "ThemeProviderSettings"
						},
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "CornerRadiusPreset",
							"value": [
								{ "value": "\"none\"" },
								{ "value": "\"subtle\"" },
								{ "value": "\"moderate\"" },
								{ "value": "\"pronounced\"" }
							]
						}
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
export { init_color_ramps as a, getColorString as c, color_tokens_default as d, init_color_tokens as f, buildBgRamp as i, getContrast as l, init_theme_provider as n, DEFAULT_SEED_COLORS as o, buildAccentRamp as r, init_constants as s, ThemeProvider as t, init_color_utils as u };
