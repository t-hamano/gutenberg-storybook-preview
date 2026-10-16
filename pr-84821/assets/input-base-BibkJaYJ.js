import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C1RZKCc6.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { n as styled, t as init_emotion_styled_browser_development_esm } from "./emotion-styled.browser.development.esm-D5lbVSL2.js";
import { n as init_emotion_react_browser_development_esm, t as css } from "./emotion-react.browser.development.esm-C_pXP8PL.js";
import { n as use_instance_id_default, t as init_use_instance_id } from "./use-instance-id-BznKyZc1.js";
import { o as isRTL, t as init_build_module } from "./build-module-v04us4E2.js";
import { a as init_clsx, i as clsx } from "./iframe-Dbjzp1_m.js";
import { n as useText, t as init_hook } from "./hook-Qs2bSUH_.js";
import { c as ContextSystemProvider, l as init_context_system_provider, n as useContextSystem, o as init_context_connect, r as contextConnect, t as init_use_context_system } from "./use-context-system-DpkzZnKH.js";
import { i as init_colors_values, n as init_config_values, r as COLORS, t as config_values_default } from "./config-values-0x5e6kXt.js";
import { n as init_component$1, t as component_default$1 } from "./component-6Aui1e4Q.js";
import { n as init_component$2, t as component_default$2 } from "./component-CFOx0tK5.js";
import { n as init_component$3, t as component_default$3 } from "./component-2hv2PPn7.js";
import { n as init_component$4, t as component_default$4 } from "./component-DKizmr6G.js";
//#region ../packages/components/build-module/utils/rtl.mjs
function getConvertedKey(key) {
	if (key === "left") return "right";
	if (key === "right") return "left";
	if (LOWER_LEFT_REGEXP.test(key)) return key.replace(LOWER_LEFT_REGEXP, "-right");
	if (LOWER_RIGHT_REGEXP.test(key)) return key.replace(LOWER_RIGHT_REGEXP, "-left");
	if (UPPER_LEFT_REGEXP.test(key)) return key.replace(UPPER_LEFT_REGEXP, "Right");
	if (UPPER_RIGHT_REGEXP.test(key)) return key.replace(UPPER_RIGHT_REGEXP, "Left");
	return key;
}
function rtl(ltrStyles = {}, rtlStyles) {
	return () => {
		if (rtlStyles) return isRTL() ? css(rtlStyles) : css(ltrStyles);
		return isRTL() ? css(convertLTRToRTL(ltrStyles)) : css(ltrStyles);
	};
}
var LOWER_LEFT_REGEXP, LOWER_RIGHT_REGEXP, UPPER_LEFT_REGEXP, UPPER_RIGHT_REGEXP, convertLTRToRTL;
function init_rtl() {
	return (init_rtl = __esmMin((() => {
		init_emotion_react_browser_development_esm();
		init_build_module();
		LOWER_LEFT_REGEXP = /* @__PURE__ */ new RegExp(/-left/g);
		LOWER_RIGHT_REGEXP = /* @__PURE__ */ new RegExp(/-right/g);
		UPPER_LEFT_REGEXP = /* @__PURE__ */ new RegExp(/Left/g);
		UPPER_RIGHT_REGEXP = /* @__PURE__ */ new RegExp(/Right/g);
		convertLTRToRTL = (ltrStyles = {}) => {
			return Object.fromEntries(Object.entries(ltrStyles).map(([key, value]) => [getConvertedKey(key), value]));
		};
		rtl.watch = () => isRTL();
	})))();
}
//#endregion
//#region ../packages/components/build-module/utils/base-label.mjs
var baseLabelTypography;
function init_base_label() {
	return (init_base_label = __esmMin((() => {
		init_emotion_react_browser_development_esm();
		init_config_values();
		baseLabelTypography = css`
	font-size: 11px;
	font-weight: ${config_values_default.fontWeightEmphasis};
	line-height: 1.4;
	text-transform: uppercase;
`;
	})))();
}
//#endregion
//#region ../packages/components/build-module/text/component.mjs
function UnconnectedText(props, forwardedRef) {
	const textProps = useText(props);
	return /* @__PURE__ */ (0, import_jsx_runtime$4.jsx)(component_default$2, {
		as: "span",
		...textProps,
		ref: forwardedRef
	});
}
var import_jsx_runtime$4, Text, component_default;
function init_component() {
	return (init_component = __esmMin((() => {
		init_context_connect();
		init_component$2();
		init_hook();
		import_jsx_runtime$4 = require_jsx_runtime();
		Text = contextConnect(UnconnectedText, "Text");
		component_default = Text;
	})))();
}
//#endregion
//#region ../packages/components/build-module/input-control/styles/input-control-styles.mjs
var import_jsx_runtime$3, Prefix, Suffix, BackdropUI, Root, containerDisabledStyles, containerWidthStyles, Container, disabledStyles, fontSizeStyles, getSizeConfig, sizeStyles, customPaddings, dragStyles, Input, BaseLabel, Label$1, LabelWrapper, prefixSuffixWrapperStyles, PrefixSuffixWrapper;
function init_input_control_styles() {
	return (init_input_control_styles = __esmMin((() => {
		init_emotion_react_browser_development_esm();
		init_emotion_styled_browser_development_esm();
		init_component$4(), init_component$3();
		init_component();
		init_base_label(), init_colors_values(), init_config_values(), init_rtl();
		import_jsx_runtime$3 = require_jsx_runtime();
		Prefix = styled.span`
	box-sizing: border-box;
	display: block;
`;
		Suffix = styled.span`
	align-items: center;
	align-self: stretch;
	box-sizing: border-box;
	display: flex;
`;
		BackdropUI = styled.div`
	&&& {
		box-sizing: border-box;
		border-radius: inherit;
		border-style: solid;
		border-width: 1px;
		bottom: 0;
		left: 0;
		margin: 0;
		padding: 0;
		pointer-events: none;
		position: absolute;
		right: 0;
		top: 0;

		${rtl({ paddingLeft: 2 })}
	}
`;
		Root = styled(component_default$4)`
	box-sizing: border-box;
	position: relative;
	border-radius: ${config_values_default.radiusSmall};
	padding-top: 0;
`;
		containerDisabledStyles = ({ disabled }) => {
			if (!disabled) return;
			return css`
		color: ${COLORS.ui.textDisabled};

		@media ( forced-colors: active ) {
			color: GrayText;
		}
	`;
		};
		containerWidthStyles = ({ __unstableInputWidth, labelPosition }) => {
			if (!__unstableInputWidth) return css({ width: "100%" });
			if (labelPosition === "side") return "";
			if (labelPosition === "edge") return css({ flex: `0 0 ${__unstableInputWidth}` });
			return css({ width: __unstableInputWidth });
		};
		Container = styled.div`
	align-items: center;
	box-sizing: border-box;
	border-radius: inherit;
	display: flex;
	flex: 1;
	position: relative;
	background-color: ${COLORS.ui.background};

	${containerDisabledStyles}
	${containerWidthStyles}
`;
		disabledStyles = ({ disabled }) => {
			if (!disabled) return "";
			return css`
		color: ${COLORS.ui.textDisabled};

		@media ( forced-colors: active ) {
			color: GrayText;
		}

		&:disabled::placeholder {
			color: ${COLORS.ui.textDisabled};
		}
	`;
		};
		fontSizeStyles = ({ inputSize: size }) => {
			const sizes = {
				default: "13px",
				small: "11px",
				compact: "13px"
			};
			const fontSize = sizes[size] || sizes.default;
			const fontSizeMobile = "16px";
			if (!fontSize) return "";
			return css`
		font-size: ${fontSizeMobile};

		@media ( min-width: 600px ) {
			font-size: ${fontSize};
		}
	`;
		};
		getSizeConfig = ({ inputSize: size }) => {
			const sizes = {
				default: {
					height: 40,
					lineHeight: 1,
					minHeight: 40,
					paddingLeft: config_values_default.controlPaddingX,
					paddingRight: config_values_default.controlPaddingX
				},
				small: {
					height: 24,
					lineHeight: 1,
					minHeight: 24,
					paddingLeft: config_values_default.controlPaddingXSmall,
					paddingRight: config_values_default.controlPaddingXSmall
				},
				compact: {
					height: 32,
					lineHeight: 1,
					minHeight: 32,
					paddingLeft: config_values_default.controlPaddingXSmall,
					paddingRight: config_values_default.controlPaddingXSmall
				}
			};
			return sizes[size] || sizes.default;
		};
		sizeStyles = (props) => {
			return css(getSizeConfig(props));
		};
		customPaddings = ({ paddingInlineStart, paddingInlineEnd }) => {
			return css({
				paddingInlineStart,
				paddingInlineEnd
			});
		};
		dragStyles = ({ isDragging, dragCursor }) => {
			let defaultArrowStyles;
			let activeDragCursorStyles;
			if (isDragging) defaultArrowStyles = css`
			cursor: ${dragCursor};
			user-select: none;

			&::-webkit-outer-spin-button,
			&::-webkit-inner-spin-button {
				-webkit-appearance: none !important;
				margin: 0 !important;
			}
		`;
			if (isDragging && dragCursor) activeDragCursorStyles = css`
			&:active {
				cursor: ${dragCursor};
			}
		`;
			return css`
		${defaultArrowStyles}
		${activeDragCursorStyles}
	`;
		};
		Input = styled.input`
	&&& {
		background-color: transparent;
		box-sizing: border-box;
		border: none;
		box-shadow: none !important;
		color: ${COLORS.theme.foreground};
		display: block;
		font-family: inherit;
		margin: 0;
		outline: none;
		width: 100%;

		${dragStyles}
		${disabledStyles}
		${fontSizeStyles}
		${sizeStyles}
		${customPaddings}

		&::-webkit-input-placeholder {
			color: ${COLORS.ui.darkGrayPlaceholder};
		}

		&::-moz-placeholder {
			color: ${COLORS.ui.darkGrayPlaceholder};
		}

		&:-ms-input-placeholder {
			color: ${COLORS.ui.darkGrayPlaceholder};
		}

		&[type='date'],
		&[type='datetime-local'],
		&[type='month'],
		&[type='time'],
		&[type='week'] {
			&::-webkit-datetime-edit {
				display: flex;
				align-items: center;
				height: 100%;
			}
		}

		/* Hide Safari's value-like placeholder (e.g. \`12:30\`) in empty
		   date/time inputs. While the input is focused, the browser's
		   segment editor must stay visible for typing. */
		@supports ( -webkit-hyphens: none ) and
			( not ( -moz-appearance: none ) ) {
			/* Safari only */
			&[type='date'][data-empty-value]:not( :focus ),
			&[type='time'][data-empty-value]:not( :focus ),
			&[type='datetime-local'][data-empty-value]:not( :focus ) {
				color: transparent;

				/* Hide slashes in date when input is disabled. */
				&:disabled::-webkit-datetime-edit-text {
					color: transparent;
				}
			}
		}

		&[type='email'],
		&[type='url'] {
			/* rtl:ignore */
			direction: ltr;
		}
	}
`;
		BaseLabel = styled(component_default)`
	&&& {
		${baseLabelTypography};

		box-sizing: border-box;
		display: block;
		padding-top: 0;
		padding-bottom: 0;
		max-width: 100%;
		z-index: 1;
	}
`;
		Label$1 = (props) => /* @__PURE__ */ (0, import_jsx_runtime$3.jsx)(BaseLabel, {
			...props,
			as: "label"
		});
		LabelWrapper = styled(component_default$3)`
	max-width: calc( 100% - 10px );
`;
		prefixSuffixWrapperStyles = ({ variant = "default", size, isPrefix }) => {
			const { paddingLeft: padding } = getSizeConfig({ inputSize: size });
			const paddingProperty = isPrefix ? "paddingInlineStart" : "paddingInlineEnd";
			if (variant === "default") return css({ [paddingProperty]: padding });
			return css({
				display: "flex",
				[paddingProperty]: padding - 4
			});
		};
		PrefixSuffixWrapper = styled.div`
	${prefixSuffixWrapperStyles}
`;
	})))();
}
//#endregion
//#region ../packages/components/build-module/input-control/backdrop.mjs
function getRuntime$1() {
	const globalScope = globalThis;
	if (globalScope.__wpStyleRuntime) return globalScope.__wpStyleRuntime;
	globalScope.__wpStyleRuntime = {
		documents: /* @__PURE__ */ new Map(),
		styles: /* @__PURE__ */ new Map(),
		injectedStyles: /* @__PURE__ */ new WeakMap()
	};
	if (typeof document !== "undefined") registerDocument$1(document);
	return globalScope.__wpStyleRuntime;
}
function documentContainsStyleHash$1(targetDocument, hash) {
	if (!targetDocument.head) return false;
	for (const style of targetDocument.head.querySelectorAll(`style[${STYLE_HASH_ATTRIBUTE$1}]`)) if (style.getAttribute(STYLE_HASH_ATTRIBUTE$1) === hash) return true;
	return false;
}
function injectStyle$1(targetDocument, hash, css) {
	if (!targetDocument.head) return;
	const runtime = getRuntime$1();
	let injectedStyles = runtime.injectedStyles.get(targetDocument);
	if (!injectedStyles) {
		injectedStyles = /* @__PURE__ */ new Set();
		runtime.injectedStyles.set(targetDocument, injectedStyles);
	}
	if (injectedStyles.has(hash)) return;
	if (documentContainsStyleHash$1(targetDocument, hash)) {
		injectedStyles.add(hash);
		return;
	}
	const style = targetDocument.createElement("style");
	style.setAttribute(STYLE_HASH_ATTRIBUTE$1, hash);
	style.appendChild(targetDocument.createTextNode(css));
	targetDocument.head.appendChild(style);
	injectedStyles.add(hash);
}
function registerDocument$1(targetDocument) {
	const runtime = getRuntime$1();
	runtime.documents.set(targetDocument, (runtime.documents.get(targetDocument) ?? 0) + 1);
	for (const [hash, css] of runtime.styles) injectStyle$1(targetDocument, hash, css);
	return () => {
		const count = runtime.documents.get(targetDocument);
		if (count === void 0) return;
		if (count <= 1) {
			runtime.documents.delete(targetDocument);
			return;
		}
		runtime.documents.set(targetDocument, count - 1);
	};
}
function registerStyle$1(hash, css) {
	const runtime = getRuntime$1();
	runtime.styles.set(hash, css);
	for (const targetDocument of runtime.documents.keys()) injectStyle$1(targetDocument, hash, css);
}
function Backdrop({ disabled = false, isBorderless = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime$2.jsx)(BackdropUI, {
		"aria-hidden": "true",
		className: clsx("components-input-control__backdrop", style_module_default$1.border, disabled && style_module_default$1["is-disabled"], isBorderless && style_module_default$1["is-borderless"])
	});
}
var import_jsx_runtime$2, STYLE_HASH_ATTRIBUTE$1, style_module_default$1, backdrop_default;
function init_backdrop() {
	return (init_backdrop = __esmMin((() => {
		init_clsx();
		init_react();
		init_input_control_styles();
		import_jsx_runtime$2 = require_jsx_runtime();
		STYLE_HASH_ATTRIBUTE$1 = "data-wp-hash";
		if (typeof process === "undefined" || false) registerStyle$1("c0b901fd89", "._9250f430bfd2e37f__border{border-color:var(--wpds-color-stroke-interactive-neutral,#8d8d8d)}._441152b766cc7dd5__container:hover ._9250f430bfd2e37f__border:not(._085e2fd9d9c04328__is-disabled,._1207ba6da0cb0862__is-borderless){border-color:var(--wpds-color-stroke-interactive-neutral-active,#6e6e6e)}._9250f430bfd2e37f__border._085e2fd9d9c04328__is-disabled:not(._1207ba6da0cb0862__is-borderless){border-color:var(--wpds-color-stroke-interactive-neutral-disabled,#dbdbdb)}@media (forced-colors:active){._9250f430bfd2e37f__border._085e2fd9d9c04328__is-disabled:not(._1207ba6da0cb0862__is-borderless){border-color:GrayText}}._9250f430bfd2e37f__border._1207ba6da0cb0862__is-borderless{border-color:transparent}");
		style_module_default$1 = {
			"border": "_9250f430bfd2e37f__border",
			"container": "_441152b766cc7dd5__container",
			"is-disabled": "_085e2fd9d9c04328__is-disabled",
			"is-borderless": "_1207ba6da0cb0862__is-borderless"
		};
		backdrop_default = (0, import_react.memo)(Backdrop);
	})))();
}
//#endregion
//#region ../packages/components/build-module/input-control/label.mjs
function Label({ children, hideLabelFromVision, htmlFor, ...props }) {
	if (!children) return null;
	if (hideLabelFromVision) return /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)(component_default$1, {
		as: "label",
		htmlFor,
		children
	});
	return /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)(LabelWrapper, { children: /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)(Label$1, {
		htmlFor,
		...props,
		children
	}) });
}
var import_jsx_runtime$1;
function init_label() {
	return (init_label = __esmMin((() => {
		init_component$1();
		init_input_control_styles();
		import_jsx_runtime$1 = require_jsx_runtime();
	})))();
}
//#endregion
//#region ../packages/components/build-module/input-control/input-base.mjs
function getRuntime() {
	const globalScope = globalThis;
	if (globalScope.__wpStyleRuntime) return globalScope.__wpStyleRuntime;
	globalScope.__wpStyleRuntime = {
		documents: /* @__PURE__ */ new Map(),
		styles: /* @__PURE__ */ new Map(),
		injectedStyles: /* @__PURE__ */ new WeakMap()
	};
	if (typeof document !== "undefined") registerDocument(document);
	return globalScope.__wpStyleRuntime;
}
function documentContainsStyleHash(targetDocument, hash) {
	if (!targetDocument.head) return false;
	for (const style of targetDocument.head.querySelectorAll(`style[${STYLE_HASH_ATTRIBUTE}]`)) if (style.getAttribute(STYLE_HASH_ATTRIBUTE) === hash) return true;
	return false;
}
function injectStyle(targetDocument, hash, css) {
	if (!targetDocument.head) return;
	const runtime = getRuntime();
	let injectedStyles = runtime.injectedStyles.get(targetDocument);
	if (!injectedStyles) {
		injectedStyles = /* @__PURE__ */ new Set();
		runtime.injectedStyles.set(targetDocument, injectedStyles);
	}
	if (injectedStyles.has(hash)) return;
	if (documentContainsStyleHash(targetDocument, hash)) {
		injectedStyles.add(hash);
		return;
	}
	const style = targetDocument.createElement("style");
	style.setAttribute(STYLE_HASH_ATTRIBUTE, hash);
	style.appendChild(targetDocument.createTextNode(css));
	targetDocument.head.appendChild(style);
	injectedStyles.add(hash);
}
function registerDocument(targetDocument) {
	const runtime = getRuntime();
	runtime.documents.set(targetDocument, (runtime.documents.get(targetDocument) ?? 0) + 1);
	for (const [hash, css] of runtime.styles) injectStyle(targetDocument, hash, css);
	return () => {
		const count = runtime.documents.get(targetDocument);
		if (count === void 0) return;
		if (count <= 1) {
			runtime.documents.delete(targetDocument);
			return;
		}
		runtime.documents.set(targetDocument, count - 1);
	};
}
function registerStyle(hash, css) {
	const runtime = getRuntime();
	runtime.styles.set(hash, css);
	for (const targetDocument of runtime.documents.keys()) injectStyle(targetDocument, hash, css);
}
function useUniqueId(idProp) {
	const id = `input-base-control-${use_instance_id_default(InputBase)}`;
	return idProp || id;
}
function getUIFlexProps(labelPosition) {
	const props = {};
	switch (labelPosition) {
		case "top":
			props.direction = "column";
			props.expanded = false;
			props.gap = 0;
			break;
		case "bottom":
			props.direction = "column-reverse";
			props.expanded = false;
			props.gap = 0;
			break;
		case "edge": props.justify = "space-between";
	}
	return props;
}
function InputBase(props, ref) {
	const { __unstableInputWidth, children, className, disabled = false, hideLabelFromVision = false, labelPosition, id: idProp, isBorderless = false, label, prefix, size = "default", suffix, ...restProps } = useContextSystem(props, "InputBase");
	const id = useUniqueId(idProp);
	const hideLabel = hideLabelFromVision || !label;
	const prefixSuffixContextValue = (0, import_react.useMemo)(() => {
		return {
			InputControlPrefixWrapper: { size },
			InputControlSuffixWrapper: { size }
		};
	}, [size]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Root, {
		...restProps,
		...getUIFlexProps(labelPosition),
		className,
		gap: 2,
		ref,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
			className: "components-input-control__label",
			hideLabelFromVision,
			labelPosition,
			htmlFor: id,
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, {
			__unstableInputWidth,
			className: clsx("components-input-control__container", style_module_default.container),
			disabled,
			hideLabel,
			labelPosition,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ContextSystemProvider, {
				value: prefixSuffixContextValue,
				children: [
					prefix && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Prefix, {
						className: "components-input-control__prefix",
						children: prefix
					}),
					children,
					suffix && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Suffix, {
						className: "components-input-control__suffix",
						children: suffix
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(backdrop_default, {
				disabled,
				isBorderless
			})]
		})]
	});
}
var import_jsx_runtime, STYLE_HASH_ATTRIBUTE, style_module_default, input_base_default;
function init_input_base() {
	return (init_input_base = __esmMin((() => {
		init_clsx();
		init_use_instance_id();
		init_react();
		init_backdrop();
		init_label();
		init_input_control_styles();
		init_context_system_provider(), init_context_connect(), init_use_context_system();
		import_jsx_runtime = require_jsx_runtime();
		STYLE_HASH_ATTRIBUTE = "data-wp-hash";
		if (typeof process === "undefined" || false) registerStyle("c0b901fd89", "._9250f430bfd2e37f__border{border-color:var(--wpds-color-stroke-interactive-neutral,#8d8d8d)}._441152b766cc7dd5__container:hover ._9250f430bfd2e37f__border:not(._085e2fd9d9c04328__is-disabled,._1207ba6da0cb0862__is-borderless){border-color:var(--wpds-color-stroke-interactive-neutral-active,#6e6e6e)}._9250f430bfd2e37f__border._085e2fd9d9c04328__is-disabled:not(._1207ba6da0cb0862__is-borderless){border-color:var(--wpds-color-stroke-interactive-neutral-disabled,#dbdbdb)}@media (forced-colors:active){._9250f430bfd2e37f__border._085e2fd9d9c04328__is-disabled:not(._1207ba6da0cb0862__is-borderless){border-color:GrayText}}._9250f430bfd2e37f__border._1207ba6da0cb0862__is-borderless{border-color:transparent}");
		style_module_default = {
			"border": "_9250f430bfd2e37f__border",
			"container": "_441152b766cc7dd5__container",
			"is-disabled": "_085e2fd9d9c04328__is-disabled",
			"is-borderless": "_1207ba6da0cb0862__is-borderless"
		};
		input_base_default = contextConnect(InputBase, "InputBase");
	})))();
}
//#endregion
export { fontSizeStyles as a, init_component as c, PrefixSuffixWrapper as i, init_rtl as l, input_base_default as n, init_input_control_styles as o, Input as r, component_default as s, init_input_base as t, rtl as u };
