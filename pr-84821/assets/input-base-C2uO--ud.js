import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as styled, t as init_emotion_styled_browser_development_esm } from "./emotion-styled.browser.development.esm-D5lbVSL2.js";
import { n as init_emotion_react_browser_development_esm, t as css } from "./emotion-react.browser.development.esm-C_pXP8PL.js";
import { n as use_instance_id_default, t as init_use_instance_id } from "./use-instance-id-BznKyZc1.js";
import { o as isRTL, t as init_build_module } from "./build-module-v04us4E2.js";
import { a as init_clsx, i as clsx } from "./iframe-Dbjzp1_m.js";
import { c as init_context_system_provider, n as useContextSystem, o as init_context_connect, r as contextConnect, s as ContextSystemProvider, t as init_use_context_system } from "./use-context-system-BCQpAcZ4.js";
import { i as init_colors_values, n as init_config_values, r as COLORS, t as config_values_default } from "./config-values-hzX34N5c.js";
import { n as init_component, t as VisuallyHidden } from "./component-DtWxfX7z.js";
import { n as init_component$1, t as Flex } from "./component-C5W2knei.js";
import { n as init_component$2, t as FlexItem } from "./component-D3o0_xed.js";
import { n as init_component$3, t as Text } from "./component-ezdH976D.js";
//#region ../packages/components/src/utils/rtl.ts
/**
* Flips a CSS property from left <-> right.
*
* @param key The CSS property name.
*
* @return The flipped CSS property name, if applicable.
*/
function getConvertedKey(key) {
	if (key === "left") return "right";
	if (key === "right") return "left";
	if (LOWER_LEFT_REGEXP.test(key)) return key.replace(LOWER_LEFT_REGEXP, "-right");
	if (LOWER_RIGHT_REGEXP.test(key)) return key.replace(LOWER_RIGHT_REGEXP, "-left");
	if (UPPER_LEFT_REGEXP.test(key)) return key.replace(UPPER_LEFT_REGEXP, "Right");
	if (UPPER_RIGHT_REGEXP.test(key)) return key.replace(UPPER_RIGHT_REGEXP, "Left");
	return key;
}
/**
* A higher-order function that create an incredibly basic ltr -> rtl style converter for CSS objects.
*
* @param ltrStyles   Ltr styles. Converts and renders from ltr -> rtl styles, if applicable.
* @param [rtlStyles] Rtl styles. Renders if provided.
*
* @return A function to output CSS styles for Emotion's renderer
*/
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
		/**
		* Call this in the `useMemo` dependency array to ensure that subsequent renders will
		* cause rtl styles to update based on the `isRTL` return value even if all other dependencies
		* remain the same.
		*
		* @example
		* const styles = useMemo( () => {
		*   return css`
		*     ${ rtl( { marginRight: '10px' } ) }
		*   `;
		* }, [ rtl.watch() ] );
		*/
		rtl.watch = () => isRTL();
	})))();
}
//#endregion
//#region ../packages/components/src/utils/base-label.ts
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
//#region ../packages/components/src/input-control/styles/input-control-styles.tsx
var import_jsx_dev_runtime$3, _jsxFileName$3, Prefix, Suffix, BackdropUI, Root, containerDisabledStyles, containerWidthStyles, Container, disabledStyles, fontSizeStyles, getSizeConfig, sizeStyles, customPaddings, dragStyles, Input, BaseLabel, Label$1, LabelWrapper, prefixSuffixWrapperStyles, PrefixSuffixWrapper;
function init_input_control_styles() {
	return (init_input_control_styles = __esmMin((() => {
		init_emotion_react_browser_development_esm();
		init_emotion_styled_browser_development_esm();
		init_component$1(), init_component$2();
		init_component$3();
		init_base_label(), init_colors_values(), init_config_values(), init_rtl();
		import_jsx_dev_runtime$3 = require_jsx_dev_runtime();
		_jsxFileName$3 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/input-control/styles/input-control-styles.tsx";
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
		Root = styled(Flex)`
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
		BaseLabel = styled(Text)`
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
		Label$1 = (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime$3.jsxDEV)(BaseLabel, {
			...props,
			as: "label"
		}, void 0, false, {
			fileName: _jsxFileName$3,
			lineNumber: 317,
			columnNumber: 6
		}, void 0);
		LabelWrapper = styled(FlexItem)`
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
		try {
			Prefix.__docgenInfo = {
				"description": "",
				"displayName": "Prefix",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/input-control/styles/input-control-styles.tsx",
				"methods": [],
				"props": {
					"theme": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@emotion/styled@11.14.1-0br7U5HgLvJ7sHZ76nenwA/node_modules/@emotion/styled/dist/declarations/src/index.d.ts",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "theme",
						"required": false,
						"tags": {},
						"type": { "name": "Theme" }
					},
					"as": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@emotion/styled@11.14.1-0br7U5HgLvJ7sHZ76nenwA/node_modules/@emotion/styled/dist/declarations/src/index.d.ts",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "as",
						"required": false,
						"tags": {},
						"type": { "name": "ElementType<any, keyof IntrinsicElements>" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			Suffix.__docgenInfo = {
				"description": "",
				"displayName": "Suffix",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/input-control/styles/input-control-styles.tsx",
				"methods": [],
				"props": {
					"theme": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@emotion/styled@11.14.1-0br7U5HgLvJ7sHZ76nenwA/node_modules/@emotion/styled/dist/declarations/src/index.d.ts",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "theme",
						"required": false,
						"tags": {},
						"type": { "name": "Theme" }
					},
					"as": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@emotion/styled@11.14.1-0br7U5HgLvJ7sHZ76nenwA/node_modules/@emotion/styled/dist/declarations/src/index.d.ts",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "as",
						"required": false,
						"tags": {},
						"type": { "name": "ElementType<any, keyof IntrinsicElements>" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			BackdropUI.__docgenInfo = {
				"description": "",
				"displayName": "BackdropUI",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/input-control/styles/input-control-styles.tsx",
				"methods": [],
				"props": {
					"theme": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@emotion/styled@11.14.1-0br7U5HgLvJ7sHZ76nenwA/node_modules/@emotion/styled/dist/declarations/src/index.d.ts",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "theme",
						"required": false,
						"tags": {},
						"type": { "name": "Theme" }
					},
					"as": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@emotion/styled@11.14.1-0br7U5HgLvJ7sHZ76nenwA/node_modules/@emotion/styled/dist/declarations/src/index.d.ts",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "as",
						"required": false,
						"tags": {},
						"type": { "name": "ElementType<any, keyof IntrinsicElements>" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			Root.__docgenInfo = {
				"description": "",
				"displayName": "Root",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/input-control/styles/input-control-styles.tsx",
				"methods": [],
				"props": {
					"align": {
						"defaultValue": { "value": "'center'" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/flex/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Aligns children using CSS Flexbox `align-items`. Vertically aligns\ncontent if the `direction` is `row`, or horizontally aligns content if\nthe `direction` is `column`.",
						"name": "align",
						"required": false,
						"tags": {},
						"type": { "name": "AlignItems" }
					},
					"direction": {
						"defaultValue": { "value": "'row'" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/flex/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The direction flow of the children content can be adjusted with\n`direction`. `column` will align children vertically and `row` will align\nchildren horizontally.",
						"name": "direction",
						"required": false,
						"tags": {},
						"type": { "name": "FlexDirection" }
					},
					"expanded": {
						"defaultValue": { "value": "true" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/flex/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Expands to the maximum available width (if horizontal) or height (if\nvertical).",
						"name": "expanded",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"gap": {
						"defaultValue": { "value": "2" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/flex/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Spacing in between each child can be adjusted by using `gap`.\n\nCan either be a number (which will act as a multiplier to the library's\ngrid system base of 4px), or a literal CSS value string.",
						"name": "gap",
						"required": false,
						"tags": {},
						"type": { "name": "SpaceInput" }
					},
					"justify": {
						"defaultValue": { "value": "'space-between'" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/flex/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Horizontally aligns content if the `direction` is `row`, or vertically\naligns content if the `direction` is `column`.",
						"name": "justify",
						"required": false,
						"tags": {},
						"type": { "name": "JustifyContent" }
					},
					"wrap": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/flex/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Determines if children should wrap.",
						"name": "wrap",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"children": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/flex/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The children elements.",
						"name": "children",
						"required": true,
						"tags": {},
						"type": { "name": "ReactNode" }
					},
					"isReversed": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/flex/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "@deprecated",
						"name": "isReversed",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"as": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/context/wordpress-component.ts",
							"name": "TypeLiteral"
						}],
						"description": "The HTML element or React component to render the component as.",
						"name": "as",
						"required": false,
						"tags": {},
						"type": { "name": "JSXElementConstructor<any> | keyof IntrinsicElements" }
					},
					"theme": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@emotion/styled@11.14.1-0br7U5HgLvJ7sHZ76nenwA/node_modules/@emotion/styled/dist/declarations/src/types.d.ts",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "theme",
						"required": false,
						"tags": {},
						"type": { "name": "Theme" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			Container.__docgenInfo = {
				"description": "",
				"displayName": "Container",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/input-control/styles/input-control-styles.tsx",
				"methods": [],
				"props": {
					"theme": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@emotion/styled@11.14.1-0br7U5HgLvJ7sHZ76nenwA/node_modules/@emotion/styled/dist/declarations/src/index.d.ts",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "theme",
						"required": false,
						"tags": {},
						"type": { "name": "Theme" }
					},
					"as": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@emotion/styled@11.14.1-0br7U5HgLvJ7sHZ76nenwA/node_modules/@emotion/styled/dist/declarations/src/index.d.ts",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "as",
						"required": false,
						"tags": {},
						"type": { "name": "ElementType<any, keyof IntrinsicElements>" }
					},
					"disabled": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/styles/input-control-styles.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "disabled",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"hideLabel": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/styles/input-control-styles.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "hideLabel",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"__unstableInputWidth": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/styles/input-control-styles.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "__unstableInputWidth",
						"required": false,
						"tags": {},
						"type": { "name": "Width<string | number>" }
					},
					"labelPosition": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/styles/input-control-styles.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "labelPosition",
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "LabelPosition",
							"value": [
								{ "value": "\"bottom\"" },
								{ "value": "\"top\"" },
								{ "value": "\"side\"" },
								{ "value": "\"edge\"" }
							]
						}
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			fontSizeStyles.__docgenInfo = {
				"description": "",
				"displayName": "fontSizeStyles",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/input-control/styles/input-control-styles.tsx",
				"methods": [],
				"props": {
					"disabled": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/styles/input-control-styles.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "disabled",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"inputSize": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/styles/input-control-styles.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "inputSize",
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "Size",
							"value": [
								{ "value": "\"small\"" },
								{ "value": "\"default\"" },
								{ "value": "\"compact\"" }
							]
						}
					},
					"isDragging": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/styles/input-control-styles.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "isDragging",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"dragCursor": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/styles/input-control-styles.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "dragCursor",
						"required": false,
						"tags": {},
						"type": { "name": "Cursor" }
					},
					"paddingInlineStart": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/styles/input-control-styles.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "paddingInlineStart",
						"required": false,
						"tags": {},
						"type": { "name": "PaddingInlineStart<string | number>" }
					},
					"paddingInlineEnd": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/styles/input-control-styles.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "paddingInlineEnd",
						"required": false,
						"tags": {},
						"type": { "name": "PaddingInlineEnd<string | number>" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			getSizeConfig.__docgenInfo = {
				"description": "",
				"displayName": "getSizeConfig",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/input-control/styles/input-control-styles.tsx",
				"methods": [],
				"props": {
					"disabled": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/styles/input-control-styles.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "disabled",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"inputSize": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/styles/input-control-styles.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "inputSize",
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "Size",
							"value": [
								{ "value": "\"small\"" },
								{ "value": "\"default\"" },
								{ "value": "\"compact\"" }
							]
						}
					},
					"isDragging": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/styles/input-control-styles.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "isDragging",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"dragCursor": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/styles/input-control-styles.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "dragCursor",
						"required": false,
						"tags": {},
						"type": { "name": "Cursor" }
					},
					"paddingInlineStart": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/styles/input-control-styles.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "paddingInlineStart",
						"required": false,
						"tags": {},
						"type": { "name": "PaddingInlineStart<string | number>" }
					},
					"paddingInlineEnd": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/styles/input-control-styles.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "paddingInlineEnd",
						"required": false,
						"tags": {},
						"type": { "name": "PaddingInlineEnd<string | number>" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			Input.__docgenInfo = {
				"description": "",
				"displayName": "Input",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/input-control/styles/input-control-styles.tsx",
				"methods": [],
				"props": {
					"theme": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@emotion/styled@11.14.1-0br7U5HgLvJ7sHZ76nenwA/node_modules/@emotion/styled/dist/declarations/src/index.d.ts",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "theme",
						"required": false,
						"tags": {},
						"type": { "name": "Theme" }
					},
					"as": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@emotion/styled@11.14.1-0br7U5HgLvJ7sHZ76nenwA/node_modules/@emotion/styled/dist/declarations/src/index.d.ts",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "as",
						"required": false,
						"tags": {},
						"type": { "name": "ElementType<any, keyof IntrinsicElements>" }
					},
					"disabled": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/styles/input-control-styles.tsx",
							"name": "TypeLiteral"
						}, {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@types/react@19.3.0-8Cb6klKRzlU2xvNuV7s80Q/node_modules/@types/react/index.d.ts",
							"name": "InputHTMLAttributes"
						}],
						"description": "",
						"name": "disabled",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"inputSize": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/styles/input-control-styles.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "inputSize",
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "Size",
							"value": [
								{ "value": "\"small\"" },
								{ "value": "\"default\"" },
								{ "value": "\"compact\"" }
							]
						}
					},
					"isDragging": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/styles/input-control-styles.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "isDragging",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"dragCursor": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/styles/input-control-styles.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "dragCursor",
						"required": false,
						"tags": {},
						"type": { "name": "Cursor" }
					},
					"paddingInlineStart": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/styles/input-control-styles.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "paddingInlineStart",
						"required": false,
						"tags": {},
						"type": { "name": "PaddingInlineStart<string | number>" }
					},
					"paddingInlineEnd": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/styles/input-control-styles.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "paddingInlineEnd",
						"required": false,
						"tags": {},
						"type": { "name": "PaddingInlineEnd<string | number>" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			Label$1.__docgenInfo = {
				"description": "",
				"displayName": "Label",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/input-control/styles/input-control-styles.tsx",
				"methods": [],
				"props": { "labelPosition": {
					"defaultValue": null,
					"declarations": [{
						"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/styles/input-control-styles.tsx",
						"name": "TypeLiteral"
					}],
					"description": "",
					"name": "labelPosition",
					"required": false,
					"tags": {},
					"type": {
						"name": "enum",
						"raw": "LabelPosition",
						"value": [
							{ "value": "\"bottom\"" },
							{ "value": "\"top\"" },
							{ "value": "\"side\"" },
							{ "value": "\"edge\"" }
						]
					}
				} },
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			LabelWrapper.__docgenInfo = {
				"description": "",
				"displayName": "LabelWrapper",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/input-control/styles/input-control-styles.tsx",
				"methods": [],
				"props": {
					"display": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/flex/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The (CSS) display of the `FlexItem`.",
						"name": "display",
						"required": false,
						"tags": {},
						"type": { "name": "Display" }
					},
					"isBlock": {
						"defaultValue": { "value": "true" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/flex/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Determines if `FlexItem` should render as an adaptive full-width block.",
						"name": "isBlock",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"children": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/flex/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The children elements.",
						"name": "children",
						"required": false,
						"tags": {},
						"type": { "name": "ReactNode" }
					},
					"as": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/context/wordpress-component.ts",
							"name": "TypeLiteral"
						}],
						"description": "The HTML element or React component to render the component as.",
						"name": "as",
						"required": false,
						"tags": {},
						"type": { "name": "JSXElementConstructor<any> | keyof IntrinsicElements" }
					},
					"theme": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@emotion/styled@11.14.1-0br7U5HgLvJ7sHZ76nenwA/node_modules/@emotion/styled/dist/declarations/src/types.d.ts",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "theme",
						"required": false,
						"tags": {},
						"type": { "name": "Theme" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			PrefixSuffixWrapper.__docgenInfo = {
				"description": "",
				"displayName": "PrefixSuffixWrapper",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/input-control/styles/input-control-styles.tsx",
				"methods": [],
				"props": {
					"theme": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@emotion/styled@11.14.1-0br7U5HgLvJ7sHZ76nenwA/node_modules/@emotion/styled/dist/declarations/src/index.d.ts",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "theme",
						"required": false,
						"tags": {},
						"type": { "name": "Theme" }
					},
					"as": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@emotion/styled@11.14.1-0br7U5HgLvJ7sHZ76nenwA/node_modules/@emotion/styled/dist/declarations/src/index.d.ts",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "as",
						"required": false,
						"tags": {},
						"type": { "name": "ElementType<any, keyof IntrinsicElements>" }
					},
					"children": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "TypeLiteral"
						}, {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@types/react@19.3.0-8Cb6klKRzlU2xvNuV7s80Q/node_modules/@types/react/index.d.ts",
							"name": "DOMAttributes"
						}],
						"description": "The content to be inserted.",
						"name": "children",
						"required": false,
						"tags": {},
						"type": { "name": "ReactNode" }
					},
					"size": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Internal prop used to control the padding size of the wrapper.\n@ignore",
						"name": "size",
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "Size",
							"value": [
								{ "value": "\"small\"" },
								{ "value": "\"default\"" },
								{ "value": "\"compact\"" }
							]
						}
					},
					"variant": {
						"defaultValue": { "value": "default" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Adjust the wrapper based on the prefix or suffix content.\n\n- `'default'`: Standard padding for text content.\n- `'icon'`: For icons.\n- `'control'`: For controls, like buttons or selects.",
						"name": "variant",
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "\"icon\" | \"default\" | \"control\"",
							"value": [
								{ "value": "\"icon\"" },
								{ "value": "\"default\"" },
								{ "value": "\"control\"" }
							]
						}
					},
					"isPrefix": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/styles/input-control-styles.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "isPrefix",
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
//#region ../packages/components/src/input-control/style.module.scss
var border, container, style_module_default;
function init_style_module() {
	return (init_style_module = __esmMin((() => {
		border = "_border_1odh8_1";
		container = "_container_1odh8_4";
		style_module_default = {
			border,
			container,
			"is-disabled": "_is-disabled_1odh8_4",
			"is-borderless": "_is-borderless_1odh8_4"
		};
	})))();
}
//#endregion
//#region ../packages/components/src/input-control/backdrop.tsx
function Backdrop({ disabled = false, isBorderless = false }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)(BackdropUI, {
		"aria-hidden": "true",
		className: clsx("components-input-control__backdrop", style_module_default.border, disabled && style_module_default["is-disabled"], isBorderless && style_module_default["is-borderless"])
	}, void 0, false, {
		fileName: _jsxFileName$2,
		lineNumber: 8,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime$2, _jsxFileName$2, MemoizedBackdrop;
function init_backdrop() {
	return (init_backdrop = __esmMin((() => {
		init_clsx();
		init_react();
		init_input_control_styles();
		init_style_module();
		import_jsx_dev_runtime$2 = require_jsx_dev_runtime();
		_jsxFileName$2 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/input-control/backdrop.tsx";
		MemoizedBackdrop = (0, import_react.memo)(Backdrop);
		try {
			MemoizedBackdrop.__docgenInfo = {
				"description": "",
				"displayName": "backdrop",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/input-control/backdrop.tsx",
				"methods": [],
				"props": {
					"disabled": {
						"defaultValue": null,
						"description": "",
						"name": "disabled",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"isBorderless": {
						"defaultValue": null,
						"description": "",
						"name": "isBorderless",
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
//#region ../packages/components/src/input-control/label.tsx
function Label({ children, hideLabelFromVision, htmlFor, ...props }) {
	if (!children) return null;
	if (hideLabelFromVision) return /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(VisuallyHidden, {
		as: "label",
		htmlFor,
		children
	}, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 21,
		columnNumber: 4
	}, this);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(LabelWrapper, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(Label$1, {
		htmlFor,
		...props,
		children
	}, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 29,
		columnNumber: 4
	}, this) }, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 28,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime$1, _jsxFileName$1;
function init_label() {
	return (init_label = __esmMin((() => {
		init_component();
		init_input_control_styles();
		import_jsx_dev_runtime$1 = require_jsx_dev_runtime();
		_jsxFileName$1 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/input-control/label.tsx";
		try {
			Label.__docgenInfo = {
				"description": "",
				"displayName": "label",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/input-control/label.tsx",
				"methods": [],
				"props": {
					"hideLabelFromVision": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "InputControlLabelProps"
						}],
						"description": "",
						"name": "hideLabelFromVision",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "InputControlLabelProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"labelPosition": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "InputControlLabelProps"
						}],
						"description": "",
						"name": "labelPosition",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "InputControlLabelProps"
						},
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "LabelPosition",
							"value": [
								{ "value": "\"bottom\"" },
								{ "value": "\"top\"" },
								{ "value": "\"side\"" },
								{ "value": "\"edge\"" }
							]
						}
					},
					"size": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "InputControlLabelProps"
						}],
						"description": "",
						"name": "size",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "InputControlLabelProps"
						},
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "Size",
							"value": [
								{ "value": "\"small\"" },
								{ "value": "\"default\"" },
								{ "value": "\"compact\"" }
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
//#region ../packages/components/src/input-control/input-base.tsx
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
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Root, {
		...restProps,
		...getUIFlexProps(labelPosition),
		className,
		gap: 2,
		ref,
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, {
			className: "components-input-control__label",
			hideLabelFromVision,
			labelPosition,
			htmlFor: id,
			children: label
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 90,
			columnNumber: 4
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Container, {
			__unstableInputWidth,
			className: clsx("components-input-control__container", style_module_default.container),
			disabled,
			hideLabel,
			labelPosition,
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ContextSystemProvider, {
				value: prefixSuffixContextValue,
				children: [
					prefix && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Prefix, {
						className: "components-input-control__prefix",
						children: prefix
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 110,
						columnNumber: 7
					}, this),
					children,
					suffix && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Suffix, {
						className: "components-input-control__suffix",
						children: suffix
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 116,
						columnNumber: 7
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 108,
				columnNumber: 5
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MemoizedBackdrop, {
				disabled,
				isBorderless
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 121,
				columnNumber: 5
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 98,
			columnNumber: 4
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 83,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime, _jsxFileName, input_base_default;
function init_input_base() {
	return (init_input_base = __esmMin((() => {
		init_clsx();
		init_use_instance_id();
		init_react();
		init_backdrop();
		init_label();
		init_style_module();
		init_input_control_styles();
		init_context_system_provider(), init_context_connect(), init_use_context_system();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/input-control/input-base.tsx";
		input_base_default = contextConnect(InputBase, "InputBase");
	})))();
}
//#endregion
export { fontSizeStyles as a, rtl as c, PrefixSuffixWrapper as i, input_base_default as n, init_input_control_styles as o, Input as r, init_rtl as s, init_input_base as t };
