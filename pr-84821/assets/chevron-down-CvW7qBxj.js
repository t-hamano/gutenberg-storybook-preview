import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C1RZKCc6.js";
import { n as styled, t as init_emotion_styled_browser_development_esm } from "./emotion-styled.browser.development.esm-D5lbVSL2.js";
import { n as init_emotion_react_browser_development_esm, t as css } from "./emotion-react.browser.development.esm-C_pXP8PL.js";
import { t as icon_default } from "./icon-DEDMwo2v.js";
import { t as chevron_down_default$1 } from "./chevron-down-tfDAaIiw.js";
import { a as fontSizeStyles, l as init_rtl, n as input_base_default, o as init_input_control_styles, t as init_input_base, u as rtl } from "./input-base-BibkJaYJ.js";
import { i as init_colors_values, n as init_config_values, r as COLORS, t as config_values_default } from "./config-values-0x5e6kXt.js";
import { n as space, t as init_space } from "./space-CmH0DdCr.js";
import { n as init_input_suffix_wrapper, r as input_suffix_wrapper_default } from "./input-suffix-wrapper-CvoP3AUi.js";
import { r as init_build_module } from "./library.story-CFsmdbdz.js";
//#region ../packages/components/build-module/select-control/styles/select-control-styles.mjs
var disabledStyles, inputBaseVariantStyles, StyledInputBase, sizeStyles, sizePaddings, overflowStyles, variantStyles, Select, DownArrowWrapper, InputControlSuffixWrapperWithClickThrough;
function init_select_control_styles() {
	return (init_select_control_styles = __esmMin((() => {
		init_emotion_react_browser_development_esm();
		init_emotion_styled_browser_development_esm();
		init_colors_values(), init_rtl(), init_config_values();
		init_space();
		init_input_suffix_wrapper();
		init_input_control_styles();
		init_input_base();
		disabledStyles = ({ disabled }) => {
			if (!disabled) return "";
			return css`
		color: ${COLORS.ui.textDisabled};
		cursor: default;
	`;
		};
		inputBaseVariantStyles = ({ variant }) => {
			if (variant === "minimal") return css`
			display: inline-flex;
		`;
			return "";
		};
		StyledInputBase = styled(input_base_default)`
	color: ${COLORS.theme.foreground};
	cursor: pointer;

	${disabledStyles}
	${inputBaseVariantStyles}
`;
		sizeStyles = ({ multiple, selectSize = "default" }) => {
			if (multiple) return;
			const sizes = {
				default: {
					height: 40,
					minHeight: 40,
					paddingTop: 0,
					paddingBottom: 0
				},
				small: {
					height: 24,
					minHeight: 24,
					paddingTop: 0,
					paddingBottom: 0
				},
				compact: {
					height: 32,
					minHeight: 32,
					paddingTop: 0,
					paddingBottom: 0
				}
			};
			const style = sizes[selectSize] || sizes.default;
			return css(style);
		};
		sizePaddings = ({ multiple, selectSize = "default" }) => {
			const padding = {
				default: config_values_default.controlPaddingX,
				small: config_values_default.controlPaddingXSmall,
				compact: config_values_default.controlPaddingXSmall
			};
			const selectedPadding = padding[selectSize] || padding.default;
			return rtl({
				paddingLeft: selectedPadding,
				paddingRight: selectedPadding + 18,
				...multiple ? {
					paddingTop: selectedPadding,
					paddingBottom: selectedPadding
				} : {}
			});
		};
		overflowStyles = ({ multiple }) => {
			return { overflow: multiple ? "auto" : "hidden" };
		};
		variantStyles = ({ variant }) => {
			if (variant === "minimal") return css({ fieldSizing: "content" });
			return "";
		};
		Select = styled.select`
	&&& {
		appearance: none;
		background: transparent;
		box-sizing: border-box;
		border: none;
		box-shadow: none !important;
		color: currentColor; // Overrides hover/focus styles in forms.css
		cursor: inherit;
		display: block;
		font-family: inherit;
		line-height: 1.3; // Override forms.css styles, large enough value to prevent descender clipping without affecting height
		margin: 0;
		width: 100%;
		max-width: none;
		white-space: nowrap;
		text-overflow: ellipsis;

		${fontSizeStyles};
		${sizeStyles};
		${sizePaddings};
		${overflowStyles}
		${variantStyles}
	}
`;
		DownArrowWrapper = styled.div`
	margin-inline-end: ${space(-1)}; // optically adjust the icon
	line-height: 0;
`;
		InputControlSuffixWrapperWithClickThrough = styled(input_suffix_wrapper_default)`
	position: absolute;
	pointer-events: none;

	${rtl({ right: 0 })}
`;
	})))();
}
//#endregion
//#region ../packages/components/build-module/select-control/chevron-down.mjs
var import_jsx_runtime, SelectControlChevronDown, chevron_down_default;
function init_chevron_down() {
	return (init_chevron_down = __esmMin((() => {
		init_build_module();
		init_select_control_styles();
		import_jsx_runtime = require_jsx_runtime();
		SelectControlChevronDown = () => {
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InputControlSuffixWrapperWithClickThrough, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DownArrowWrapper, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(icon_default, {
				icon: chevron_down_default$1,
				size: 18
			}) }) });
		};
		chevron_down_default = SelectControlChevronDown;
	})))();
}
//#endregion
export { init_select_control_styles as a, StyledInputBase as i, init_chevron_down as n, Select as r, chevron_down_default as t };
