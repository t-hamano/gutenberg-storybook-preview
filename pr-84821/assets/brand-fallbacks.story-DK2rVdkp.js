import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { d as color_tokens_default, f as init_color_tokens, n as init_theme_provider, t as ThemeProvider } from "./theme-provider-CZOzaK0L.js";
//#region ../packages/theme/prebuilt/js/design-token-fallbacks.mjs
var design_token_fallbacks_default;
function init_design_token_fallbacks() {
	return (init_design_token_fallbacks = __esmMin((() => {
		design_token_fallbacks_default = {
			"--wpds-border-radius-lg": "8px",
			"--wpds-border-radius-md": "4px",
			"--wpds-border-radius-sm": "2px",
			"--wpds-border-radius-xl": "12px",
			"--wpds-border-radius-xs": "1px",
			"--wpds-border-width-focus": "var(--wp-admin-border-width-focus, 2px)",
			"--wpds-border-width-lg": "8px",
			"--wpds-border-width-md": "4px",
			"--wpds-border-width-sm": "2px",
			"--wpds-border-width-xs": "1px",
			"--wpds-color-background-interactive-brand-strong": "var(--wp-admin-theme-color, #3858e9)",
			"--wpds-color-background-interactive-brand-strong-active": "color-mix(in oklch, var(--wp-admin-theme-color, #3858e9) 93%, black)",
			"--wpds-color-background-interactive-brand-strong-disabled": "#e6e6e6",
			"--wpds-color-background-interactive-brand-weak": "#0000",
			"--wpds-color-background-interactive-brand-weak-active": "color-mix(in oklch, var(--wp-admin-theme-color, #3858e9) 12%, white)",
			"--wpds-color-background-interactive-brand-weak-disabled": "#0000",
			"--wpds-color-background-interactive-error": "#0000",
			"--wpds-color-background-interactive-error-active": "#fff6f5",
			"--wpds-color-background-interactive-error-disabled": "#0000",
			"--wpds-color-background-interactive-error-strong": "#cc1818",
			"--wpds-color-background-interactive-error-strong-active": "#b90000",
			"--wpds-color-background-interactive-error-strong-disabled": "#e6e6e6",
			"--wpds-color-background-interactive-error-weak": "#0000",
			"--wpds-color-background-interactive-error-weak-active": "#fae5e1",
			"--wpds-color-background-interactive-error-weak-disabled": "#0000",
			"--wpds-color-background-interactive-neutral": "#fff",
			"--wpds-color-background-interactive-neutral-active": "#fff",
			"--wpds-color-background-interactive-neutral-disabled": "#fff",
			"--wpds-color-background-interactive-neutral-strong": "#2d2d2d",
			"--wpds-color-background-interactive-neutral-strong-active": "#1e1e1e",
			"--wpds-color-background-interactive-neutral-strong-disabled": "#e6e6e6",
			"--wpds-color-background-interactive-neutral-weak": "#0000",
			"--wpds-color-background-interactive-neutral-weak-active": "#ededed",
			"--wpds-color-background-interactive-neutral-weak-disabled": "#0000",
			"--wpds-color-background-surface-brand": "color-mix(in oklch, var(--wp-admin-theme-color, #3858e9) 9%, white)",
			"--wpds-color-background-surface-caution": "#fee995",
			"--wpds-color-background-surface-caution-weak": "#fff9ca",
			"--wpds-color-background-surface-error": "#fae5e1",
			"--wpds-color-background-surface-error-weak": "#fff6f5",
			"--wpds-color-background-surface-info": "#deebfa",
			"--wpds-color-background-surface-info-weak": "#f3f9ff",
			"--wpds-color-background-surface-neutral": "#fcfcfc",
			"--wpds-color-background-surface-neutral-strong": "#fff",
			"--wpds-color-background-surface-neutral-weak": "#f4f4f4",
			"--wpds-color-background-surface-success": "#c2f8ca",
			"--wpds-color-background-surface-success-weak": "#ebffed",
			"--wpds-color-background-surface-warning": "#fde6be",
			"--wpds-color-background-surface-warning-weak": "#fff7e1",
			"--wpds-color-background-thumb-brand": "var(--wp-admin-theme-color, #3858e9)",
			"--wpds-color-background-thumb-brand-active": "var(--wp-admin-theme-color, #3858e9)",
			"--wpds-color-background-thumb-brand-disabled": "#dbdbdb",
			"--wpds-color-background-thumb-neutral": "#1e1e1e",
			"--wpds-color-background-thumb-neutral-weak": "#8d8d8d",
			"--wpds-color-background-thumb-neutral-weak-active": "#6e6e6e",
			"--wpds-color-background-thumb-neutral-weak-disabled": "#dbdbdb",
			"--wpds-color-background-track-neutral": "#dbdbdb",
			"--wpds-color-background-track-neutral-weak": "#f0f0f0",
			"--wpds-color-foreground-content-caution": "#281d00",
			"--wpds-color-foreground-content-caution-weak": "#836a00",
			"--wpds-color-foreground-content-error": "#470000",
			"--wpds-color-foreground-content-error-weak": "#cc1818",
			"--wpds-color-foreground-content-info": "#001b4f",
			"--wpds-color-foreground-content-info-weak": "#006bd7",
			"--wpds-color-foreground-content-neutral": "#1e1e1e",
			"--wpds-color-foreground-content-neutral-weak": "#707070",
			"--wpds-color-foreground-content-success": "#002900",
			"--wpds-color-foreground-content-success-weak": "#008030",
			"--wpds-color-foreground-content-warning": "#2e1900",
			"--wpds-color-foreground-content-warning-weak": "#936300",
			"--wpds-color-foreground-interactive-brand": "var(--wp-admin-theme-color, #3858e9)",
			"--wpds-color-foreground-interactive-brand-active": "color-mix(in oklch, var(--wp-admin-theme-color, #3858e9) 52%, black)",
			"--wpds-color-foreground-interactive-brand-disabled": "#8d8d8d",
			"--wpds-color-foreground-interactive-brand-strong": "#fff",
			"--wpds-color-foreground-interactive-brand-strong-active": "#fff",
			"--wpds-color-foreground-interactive-brand-strong-disabled": "#8d8d8d",
			"--wpds-color-foreground-interactive-error": "#cc1818",
			"--wpds-color-foreground-interactive-error-active": "#470000",
			"--wpds-color-foreground-interactive-error-disabled": "#8d8d8d",
			"--wpds-color-foreground-interactive-error-strong": "#f2efef",
			"--wpds-color-foreground-interactive-error-strong-active": "#f2efef",
			"--wpds-color-foreground-interactive-error-strong-disabled": "#8d8d8d",
			"--wpds-color-foreground-interactive-neutral": "#1e1e1e",
			"--wpds-color-foreground-interactive-neutral-active": "#1e1e1e",
			"--wpds-color-foreground-interactive-neutral-disabled": "#8d8d8d",
			"--wpds-color-foreground-interactive-neutral-strong": "#f0f0f0",
			"--wpds-color-foreground-interactive-neutral-strong-active": "#f0f0f0",
			"--wpds-color-foreground-interactive-neutral-strong-disabled": "#8d8d8d",
			"--wpds-color-foreground-interactive-neutral-weak": "#707070",
			"--wpds-color-foreground-interactive-neutral-weak-active": "#1e1e1e",
			"--wpds-color-foreground-interactive-neutral-weak-disabled": "#8d8d8d",
			"--wpds-color-stroke-focus": "var(--wp-admin-theme-color, #3858e9)",
			"--wpds-color-stroke-interactive-brand": "var(--wp-admin-theme-color, #3858e9)",
			"--wpds-color-stroke-interactive-brand-active": "color-mix(in oklch, var(--wp-admin-theme-color, #3858e9) 85%, black)",
			"--wpds-color-stroke-interactive-brand-disabled": "#dbdbdb",
			"--wpds-color-stroke-interactive-error": "#cc1818",
			"--wpds-color-stroke-interactive-error-active": "#9d0000",
			"--wpds-color-stroke-interactive-error-disabled": "#dbdbdb",
			"--wpds-color-stroke-interactive-error-strong": "#cc1818",
			"--wpds-color-stroke-interactive-neutral": "#8d8d8d",
			"--wpds-color-stroke-interactive-neutral-active": "#6e6e6e",
			"--wpds-color-stroke-interactive-neutral-disabled": "#dbdbdb",
			"--wpds-color-stroke-interactive-neutral-strong": "#6e6e6e",
			"--wpds-color-stroke-surface-brand": "color-mix(in oklch, var(--wp-admin-theme-color, #3858e9) 40%, white)",
			"--wpds-color-stroke-surface-brand-strong": "var(--wp-admin-theme-color, #3858e9)",
			"--wpds-color-stroke-surface-caution": "#d0c28b",
			"--wpds-color-stroke-surface-caution-strong": "#836a00",
			"--wpds-color-stroke-surface-error": "#e0afa7",
			"--wpds-color-stroke-surface-error-strong": "#cc1818",
			"--wpds-color-stroke-surface-info": "#adc6e2",
			"--wpds-color-stroke-surface-info-strong": "#006bd7",
			"--wpds-color-stroke-surface-neutral": "#dbdbdb",
			"--wpds-color-stroke-surface-neutral-strong": "#8d8d8d",
			"--wpds-color-stroke-surface-neutral-weak": "#f0f0f0",
			"--wpds-color-stroke-surface-success": "#92d39d",
			"--wpds-color-stroke-surface-success-strong": "#008030",
			"--wpds-color-stroke-surface-warning": "#e1bd7c",
			"--wpds-color-stroke-surface-warning-strong": "#936300",
			"--wpds-cursor-control": "pointer",
			"--wpds-dimension-gap-2xl": "32px",
			"--wpds-dimension-gap-3xl": "40px",
			"--wpds-dimension-gap-lg": "16px",
			"--wpds-dimension-gap-md": "12px",
			"--wpds-dimension-gap-sm": "8px",
			"--wpds-dimension-gap-xl": "24px",
			"--wpds-dimension-gap-xs": "4px",
			"--wpds-dimension-padding-2xl": "24px",
			"--wpds-dimension-padding-3xl": "32px",
			"--wpds-dimension-padding-lg": "16px",
			"--wpds-dimension-padding-md": "12px",
			"--wpds-dimension-padding-sm": "8px",
			"--wpds-dimension-padding-xl": "20px",
			"--wpds-dimension-padding-xs": "4px",
			"--wpds-dimension-size-2xs": "16px",
			"--wpds-dimension-size-3xs": "12px",
			"--wpds-dimension-size-4xs": "8px",
			"--wpds-dimension-size-5xs": "4px",
			"--wpds-dimension-size-lg": "40px",
			"--wpds-dimension-size-md": "32px",
			"--wpds-dimension-size-sm": "24px",
			"--wpds-dimension-size-xs": "20px",
			"--wpds-dimension-surface-width-2xl": "960px",
			"--wpds-dimension-surface-width-lg": "560px",
			"--wpds-dimension-surface-width-md": "400px",
			"--wpds-dimension-surface-width-sm": "320px",
			"--wpds-dimension-surface-width-xl": "720px",
			"--wpds-dimension-surface-width-xs": "240px",
			"--wpds-motion-duration-lg": "300ms",
			"--wpds-motion-duration-md": "200ms",
			"--wpds-motion-duration-sm": "100ms",
			"--wpds-motion-duration-xl": "400ms",
			"--wpds-motion-duration-xs": "50ms",
			"--wpds-motion-easing-balanced": "cubic-bezier(0.4, 0, 0.2, 1)",
			"--wpds-motion-easing-expressive": "cubic-bezier(0.25, 0, 0, 1)",
			"--wpds-motion-easing-subtle": "cubic-bezier(0.15, 0, 0.15, 1)",
			"--wpds-typography-font-family-body": "-apple-system, system-ui, \"Segoe UI\", \"Roboto\", \"Oxygen-Sans\", \"Ubuntu\", \"Cantarell\", \"Helvetica Neue\", sans-serif",
			"--wpds-typography-font-family-heading": "-apple-system, system-ui, \"Segoe UI\", \"Roboto\", \"Oxygen-Sans\", \"Ubuntu\", \"Cantarell\", \"Helvetica Neue\", sans-serif",
			"--wpds-typography-font-family-mono": "\"Menlo\", \"Consolas\", monaco, monospace",
			"--wpds-typography-font-size-2xl": "32px",
			"--wpds-typography-font-size-lg": "15px",
			"--wpds-typography-font-size-md": "13px",
			"--wpds-typography-font-size-sm": "12px",
			"--wpds-typography-font-size-xl": "20px",
			"--wpds-typography-font-size-xs": "11px",
			"--wpds-typography-font-weight-default": "400",
			"--wpds-typography-font-weight-emphasis": "600",
			"--wpds-typography-line-height-2xl": "40px",
			"--wpds-typography-line-height-lg": "28px",
			"--wpds-typography-line-height-md": "24px",
			"--wpds-typography-line-height-sm": "20px",
			"--wpds-typography-line-height-xl": "32px",
			"--wpds-typography-line-height-xs": "16px"
		};
	})))();
}
//#endregion
//#region ../packages/theme/src/color-ramps/stories/brand-fallbacks.story.tsx
function getBrandTokens() {
	const tokens = [];
	for (const [rampKey, tokenNames] of Object.entries(color_tokens_default)) {
		if (!rampKey.startsWith("primary-")) continue;
		for (const tokenName of tokenNames) {
			const cssVarName = `--wpds-color-${tokenName}`;
			tokens.push({
				cssVarName,
				fallbackExpr: tokenFallbacks[cssVarName] ?? ""
			});
		}
	}
	return tokens.sort((a, b) => a.cssVarName.localeCompare(b.cssVarName));
}
function Row({ cssVarName, fallbackExpr }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Swatch, {
			color: `var(${cssVarName})`,
			title: `${cssVarName} (actual)`
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 132,
			columnNumber: 4
		}, this),
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Swatch, {
			color: fallbackExpr,
			title: "Fallback (rendered)"
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 136,
			columnNumber: 4
		}, this),
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("code", {
			style: { fontSize: 12 },
			children: cssVarName
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 137,
			columnNumber: 4
		}, this),
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("code", {
			style: {
				fontSize: 11,
				color: "#555",
				wordBreak: "break-all"
			},
			children: fallbackExpr
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 138,
			columnNumber: 4
		}, this)
	] }, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 131,
		columnNumber: 3
	}, this);
}
function Swatch({ color, title }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		title,
		style: {
			backgroundColor: color,
			width: 40,
			height: 28,
			border: "1px solid rgba(0, 0, 0, 0.1)"
		}
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 153,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime, _jsxFileName, tokenFallbacks, brandTokens, Verifier, meta, Default, headerStyle;
function init_brand_fallbacks_story() {
	return (init_brand_fallbacks_story = __esmMin((() => {
		init_color_tokens();
		init_design_token_fallbacks();
		init_theme_provider();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/theme/src/color-ramps/stories/brand-fallbacks.story.tsx";
		tokenFallbacks = design_token_fallbacks_default;
		brandTokens = getBrandTokens();
		Verifier = () => null;
		meta = {
			title: "Design System/Theme/Theme Provider/Brand Color Fallbacks",
			component: Verifier,
			argTypes: { adminThemeColor: { control: {
				type: "color",
				presetColors: [
					"#3858e9",
					"#007cba",
					"#437aa8",
					"#916745",
					"#646c3e",
					"#cf4339",
					"#567958",
					"#ad631e"
				]
			} } },
			parameters: {
				controls: { expanded: true },
				docs: { description: { component: "Compares actual brand token values (computed by ThemeProvider using the full\nramp algorithm) against their `color-mix()` fallback approximations driven\nby `--wp-admin-theme-color`. Use the color picker to switch admin color\nschemes and observe how closely the fallbacks track the real values." } }
			}
		};
		Default = {
			render: ({ adminThemeColor }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				style: {
					"--wp-admin-theme-color": adminThemeColor,
					fontSize: 13
				},
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					style: {
						margin: "0 0 16px",
						color: "#757575",
						fontSize: 12
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: "Actual:" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 87,
							columnNumber: 5
						}, void 0),
						" real token value from ThemeProvider (ramp algorithm). ",
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: "Fallback:" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 88,
							columnNumber: 23
						}, void 0),
						" approximation via",
						" ",
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("code", { children: "color-mix()" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 89,
							columnNumber: 5
						}, void 0),
						" and ",
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("code", { children: "--wp-admin-theme-color" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 89,
							columnNumber: 34
						}, void 0),
						"."
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 80,
					columnNumber: 4
				}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ThemeProvider, {
					color: { primary: adminThemeColor },
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						style: {
							display: "grid",
							gridTemplateColumns: "40px 40px 1fr 1fr",
							gap: "4px 12px",
							alignItems: "center"
						},
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								style: headerStyle,
								children: "Actual"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 101,
								columnNumber: 6
							}, void 0),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								style: headerStyle,
								children: "Fallback"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 102,
								columnNumber: 6
							}, void 0),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								style: headerStyle,
								children: "Token"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 103,
								columnNumber: 6
							}, void 0),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								style: headerStyle,
								children: "Fallback expression"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 104,
								columnNumber: 6
							}, void 0),
							brandTokens.map(({ cssVarName, fallbackExpr }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Row, {
								cssVarName,
								fallbackExpr
							}, cssVarName, false, {
								fileName: _jsxFileName,
								lineNumber: 106,
								columnNumber: 7
							}, void 0))
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 93,
						columnNumber: 5
					}, void 0)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 92,
					columnNumber: 4
				}, void 0)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 74,
				columnNumber: 3
			}, void 0),
			args: { adminThemeColor: "#3858e9" }
		};
		headerStyle = {
			fontSize: 11,
			fontWeight: "var(--wpds-typography-font-weight-emphasis, 600)",
			color: "#757575",
			paddingBottom: 4,
			borderBottom: "1px solid #e0e0e0"
		};
		Default.parameters = {
			...Default.parameters,
			docs: {
				...Default.parameters?.docs,
				source: {
					originalSource: "{\n  render: ({\n    adminThemeColor\n  }) => <div style={{\n    '--wp-admin-theme-color': adminThemeColor,\n    fontSize: 13\n  }}>\n            <p style={{\n      margin: '0 0 16px',\n      color: '#757575',\n      fontSize: 12\n    }}>\n                <strong>Actual:</strong> real token value from ThemeProvider\n                (ramp algorithm). <strong>Fallback:</strong> approximation via{' '}\n                <code>color-mix()</code> and <code>--wp-admin-theme-color</code>\n                .\n            </p>\n            <ThemeProvider color={{\n      primary: adminThemeColor\n    }}>\n                <div style={{\n        display: 'grid',\n        gridTemplateColumns: '40px 40px 1fr 1fr',\n        gap: '4px 12px',\n        alignItems: 'center'\n      }}>\n                    <div style={headerStyle}>Actual</div>\n                    <div style={headerStyle}>Fallback</div>\n                    <div style={headerStyle}>Token</div>\n                    <div style={headerStyle}>Fallback expression</div>\n                    {brandTokens.map(({\n          cssVarName,\n          fallbackExpr\n        }) => <Row key={cssVarName} cssVarName={cssVarName} fallbackExpr={fallbackExpr} />)}\n                </div>\n            </ThemeProvider>\n        </div>,\n  args: {\n    adminThemeColor: '#3858e9'\n  }\n}",
					...Default.parameters?.docs?.source
				}
			}
		};
	})))();
}
//#endregion
init_brand_fallbacks_story();
export { Default, meta as default };
