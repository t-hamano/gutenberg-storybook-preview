import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
//#region ../packages/components/build-module/utils/colors-values.mjs
var white, GRAY, ALERT, THEME, UI, COLORS;
function init_colors_values() {
	return (init_colors_values = __esmMin((() => {
		white = "#fff";
		GRAY = {
			900: "#1e1e1e",
			800: "#2f2f2f",
			/** Meets 4.6:1 text contrast against white. */
			700: "#757575",
			/** Meets 3:1 UI or large text contrast against white. */
			600: "#949494",
			400: "#ccc",
			/** Used for most borders. */
			300: "#ddd",
			/** Used sparingly for light borders. */
			200: "#e0e0e0",
			/** Used for light gray backgrounds. */
			100: "#f0f0f0"
		};
		ALERT = {
			yellow: "#f0b849",
			red: "#d94f4f",
			green: "#4ab866"
		};
		THEME = {
			accent: `var(--wp-components-color-accent, var(--wp-admin-theme-color, #3858e9))`,
			accentDarker10: `var(--wp-components-color-accent-darker-10, var(--wp-admin-theme-color-darker-10, #2145e6))`,
			accentDarker20: `var(--wp-components-color-accent-darker-20, var(--wp-admin-theme-color-darker-20, #183ad6))`,
			/** Used when placing text on the accent color. */
			accentInverted: `var(--wp-components-color-accent-inverted, var(--wpds-color-foreground-interactive-brand-strong, #fff))`,
			background: `var(--wp-components-color-background, var(--wpds-color-background-surface-neutral-strong, #fff))`,
			foreground: `var(--wp-components-color-foreground, var(--wpds-color-foreground-content-neutral, #1e1e1e))`,
			/** Used when placing text on the foreground color. */
			foregroundInverted: `var(--wp-components-color-foreground-inverted, var(--wpds-color-background-surface-neutral, #fcfcfc))`,
			gray: {
				/** @deprecated Use `COLORS.theme.foreground` instead. */
				900: `var(--wp-components-color-foreground, var(--wpds-color-foreground-content-neutral, #1e1e1e))`,
				800: `var(--wp-components-color-gray-800, var(--wpds-color-foreground-content-neutral, #1e1e1e))`,
				700: `var(--wp-components-color-gray-700, var(--wpds-color-foreground-content-neutral-weak, #707070))`,
				600: `var(--wp-components-color-gray-600, var(--wpds-color-stroke-interactive-neutral, #8d8d8d))`,
				400: `var(--wp-components-color-gray-400, var(--wpds-color-stroke-interactive-neutral, #8d8d8d))`,
				300: `var(--wp-components-color-gray-300, var(--wpds-color-stroke-surface-neutral, #dbdbdb))`,
				200: `var(--wp-components-color-gray-200, var(--wpds-color-stroke-surface-neutral, #dbdbdb))`,
				100: `var(--wp-components-color-gray-100, var(--wpds-color-background-surface-neutral, #fcfcfc))`
			}
		};
		UI = {
			background: THEME.background,
			backgroundDisabled: THEME.gray[100],
			border: THEME.gray[600],
			borderHover: THEME.gray[700],
			borderFocus: THEME.accent,
			borderDisabled: `var(--wpds-color-stroke-interactive-neutral-disabled, #dbdbdb)`,
			textDisabled: `var(--wpds-color-foreground-interactive-neutral-disabled, #8d8d8d)`,
			darkGrayPlaceholder: `color-mix(in srgb, ${THEME.foreground}, transparent 38%)`,
			lightGrayPlaceholder: `color-mix(in srgb, ${THEME.background}, transparent 35%)`
		};
		COLORS = Object.freeze({
			/**
			* The main gray color object.
			*
			* @deprecated Use semantic aliases in `COLORS.ui` or theme-ready variables in `COLORS.theme.gray`.
			*/
			gray: GRAY,
			/**
			* @deprecated Prefer theme-ready variables in `COLORS.theme`.
			*/
			white,
			alert: ALERT,
			/**
			* Theme-ready variables with fallbacks.
			*
			* Prefer semantic aliases in `COLORS.ui` when applicable.
			*/
			theme: THEME,
			/**
			* Semantic aliases (prefer these over raw variables when applicable).
			*/
			ui: UI
		});
	})))();
}
//#endregion
//#region ../packages/components/build-module/utils/config-values.mjs
var CONTROL_HEIGHT, CONTROL_PROPS, config_values_default;
function init_config_values() {
	return (init_config_values = __esmMin((() => {
		init_colors_values();
		CONTROL_HEIGHT = "36px";
		CONTROL_PROPS = {
			controlPaddingX: 12,
			controlPaddingXSmall: 8,
			controlPaddingXLarge: 12 * 1.3334,
			controlBoxShadowFocus: `0 0 0 0.5px ${COLORS.theme.accent}`,
			controlHeight: CONTROL_HEIGHT,
			controlHeightXSmall: `calc( ${CONTROL_HEIGHT} * 0.6 )`,
			controlHeightSmall: `calc( ${CONTROL_HEIGHT} * 0.8 )`,
			controlHeightLarge: `calc( ${CONTROL_HEIGHT} * 1.2 )`,
			controlHeightXLarge: `calc( ${CONTROL_HEIGHT} * 1.4 )`
		};
		config_values_default = Object.assign({}, CONTROL_PROPS, {
			colorDivider: "rgba(0, 0, 0, 0.1)",
			radiusXSmall: "1px",
			radiusSmall: "2px",
			radiusMedium: "4px",
			radiusLarge: "8px",
			radiusFull: "9999px",
			radiusRound: "50%",
			borderWidth: "1px",
			borderWidthFocus: "1.5px",
			borderWidthTab: "4px",
			fontSize: "13px",
			fontSizeH1: "calc(2.44 * 13px)",
			fontSizeH2: "calc(1.95 * 13px)",
			fontSizeH3: "calc(1.56 * 13px)",
			fontSizeH4: "calc(1.25 * 13px)",
			fontSizeH5: "13px",
			fontSizeH6: "calc(0.8 * 13px)",
			fontSizeInputMobile: "16px",
			fontSizeMobile: "15px",
			fontSizeSmall: "calc(0.92 * 13px)",
			fontSizeXSmall: "calc(0.75 * 13px)",
			fontLineHeightBase: "1.4",
			fontWeight: "normal",
			fontWeightEmphasis: "600",
			gridBase: "4px",
			elevationXSmall: `0 1px 1px rgba(0, 0, 0, 0.03), 0 1px 2px rgba(0, 0, 0, 0.02), 0 3px 3px rgba(0, 0, 0, 0.02), 0 4px 4px rgba(0, 0, 0, 0.01)`,
			elevationSmall: `0 1px 2px rgba(0, 0, 0, 0.05), 0 2px 3px rgba(0, 0, 0, 0.04), 0 6px 6px rgba(0, 0, 0, 0.03), 0 8px 8px rgba(0, 0, 0, 0.02)`,
			elevationMedium: `0 2px 3px rgba(0, 0, 0, 0.05), 0 4px 5px rgba(0, 0, 0, 0.04), 0 12px 12px rgba(0, 0, 0, 0.03), 0 16px 16px rgba(0, 0, 0, 0.02)`,
			elevationLarge: `0 5px 15px rgba(0, 0, 0, 0.08), 0 15px 27px rgba(0, 0, 0, 0.07), 0 30px 36px rgba(0, 0, 0, 0.04), 0 50px 43px rgba(0, 0, 0, 0.02)`,
			surfaceBorderColor: "rgba(0, 0, 0, 0.1)",
			surfaceColor: COLORS.white,
			transitionDuration: "200ms",
			transitionDurationFast: "160ms",
			transitionDurationFaster: "120ms",
			transitionDurationFastest: "100ms",
			transitionTimingFunctionControl: "cubic-bezier(0.12, 0.8, 0.32, 1)"
		});
	})))();
}
//#endregion
export { init_colors_values as i, init_config_values as n, COLORS as r, config_values_default as t };
