import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { d as init_toGamut, f as toGamut } from "./hsl-Do7y76mZ.js";
import { a as init_color_ramps, c as getColorString, d as color_tokens_default, f as init_color_tokens, i as buildBgRamp, l as getContrast, n as init_theme_provider, o as DEFAULT_SEED_COLORS, r as buildAccentRamp, s as init_constants, t as ThemeProvider, u as init_color_utils } from "./theme-provider-CZOzaK0L.js";
//#region ../packages/theme/src/color-ramps/stories/color-warning-details.tsx
function ColorWarningDetails({ label, warnings }) {
	if (warnings === void 0) return /* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)("section", {
		"aria-label": `${label} color warning results`,
		style: {
			background: "#f6f7f7",
			borderInlineStart: "4px solid #787c82",
			padding: "0.75rem 1rem"
		},
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)("p", { children: "Calculating warnings…" }, void 0, false, {
			fileName: _jsxFileName$2,
			lineNumber: 20,
			columnNumber: 5
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$2,
		lineNumber: 12,
		columnNumber: 4
	}, this);
	if (warnings.length === 0) return /* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)("section", {
		"aria-label": `${label} color warning results`,
		style: {
			background: "#edfaef",
			borderInlineStart: "4px solid #00a32a",
			padding: "0.75rem 1rem"
		},
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)("strong", { children: "No warnings" }, void 0, false, {
			fileName: _jsxFileName$2,
			lineNumber: 36,
			columnNumber: 6
		}, this) }, void 0, false, {
			fileName: _jsxFileName$2,
			lineNumber: 35,
			columnNumber: 5
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$2,
		lineNumber: 27,
		columnNumber: 4
	}, this);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)("section", {
		"aria-label": `${label} color warning results`,
		style: {
			background: "#fcf0f1",
			borderInlineStart: "4px solid #d63638",
			padding: "0.5rem 1rem"
		},
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)("h3", {
			style: { marginBlock: "0.5rem" },
			children: warnings.length === 1 ? "1 color warning" : `${warnings.length} color warnings`
		}, void 0, false, {
			fileName: _jsxFileName$2,
			lineNumber: 51,
			columnNumber: 4
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)("ol", {
			style: {
				marginBlock: "0.5rem",
				paddingInlineStart: "1.5rem"
			},
			children: warnings.map((warning) => /* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)("li", { children: warning.type === "ramp" ? /* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)("p", {
				style: { marginBlock: "0.25rem" },
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)("strong", { children: "Ramp:" }, void 0, false, {
						fileName: _jsxFileName$2,
						lineNumber: 72,
						columnNumber: 9
					}, this),
					" ",
					/* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)("code", { children: warning.ramp }, void 0, false, {
						fileName: _jsxFileName$2,
						lineNumber: 73,
						columnNumber: 9
					}, this),
					".",
					" ",
					/* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)("strong", { children: "Step:" }, void 0, false, {
						fileName: _jsxFileName$2,
						lineNumber: 74,
						columnNumber: 9
					}, this),
					" ",
					/* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)("code", { children: warning.step }, void 0, false, {
						fileName: _jsxFileName$2,
						lineNumber: 75,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName$2,
				lineNumber: 71,
				columnNumber: 8
			}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)("p", {
				style: { marginBlock: "0.25rem" },
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)("strong", { children: "Contrast:" }, void 0, false, {
						fileName: _jsxFileName$2,
						lineNumber: 79,
						columnNumber: 9
					}, this),
					" ",
					/* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)("code", { children: warning.foregroundToken }, void 0, false, {
						fileName: _jsxFileName$2,
						lineNumber: 80,
						columnNumber: 9
					}, this),
					" ",
					/* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)("code", { children: warning.foregroundColor }, void 0, false, {
						fileName: _jsxFileName$2,
						lineNumber: 81,
						columnNumber: 9
					}, this),
					" on",
					" ",
					/* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)("code", { children: warning.backgroundToken }, void 0, false, {
						fileName: _jsxFileName$2,
						lineNumber: 82,
						columnNumber: 9
					}, this),
					" ",
					/* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)("code", { children: warning.backgroundColor }, void 0, false, {
						fileName: _jsxFileName$2,
						lineNumber: 83,
						columnNumber: 9
					}, this),
					".",
					" ",
					warning.achievedContrast.toFixed(2),
					":1 achieved; ",
					warning.requiredContrast,
					":1 required."
				]
			}, void 0, true, {
				fileName: _jsxFileName$2,
				lineNumber: 78,
				columnNumber: 8
			}, this) }, warning.type === "ramp" ? `ramp-${warning.ramp}-${warning.step}` : `contrast-${warning.foregroundToken}-${warning.backgroundToken}`, false, {
				fileName: _jsxFileName$2,
				lineNumber: 63,
				columnNumber: 6
			}, this))
		}, void 0, false, {
			fileName: _jsxFileName$2,
			lineNumber: 56,
			columnNumber: 4
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName$2,
		lineNumber: 43,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime$2, _jsxFileName$2;
function init_color_warning_details() {
	return (init_color_warning_details = __esmMin((() => {
		import_jsx_dev_runtime$2 = require_jsx_dev_runtime();
		_jsxFileName$2 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/theme/src/color-ramps/stories/color-warning-details.tsx";
		try {
			ColorWarningDetails.__docgenInfo = {
				"description": "",
				"displayName": "ColorWarningDetails",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/theme/src/color-ramps/stories/color-warning-details.tsx",
				"methods": [],
				"props": {
					"label": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/theme/src/color-ramps/stories/color-warning-details.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "label",
						"required": true,
						"tags": {},
						"type": { "name": "string" }
					},
					"warnings": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/theme/src/color-ramps/stories/color-warning-details.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "warnings",
						"required": true,
						"tags": {},
						"type": { "name": "readonly ThemeProviderColorWarning[] | undefined" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/theme/src/color-ramps/stories/ramp-table.tsx
function hasRampWarning(warnings, ramp, step) {
	return warnings.some((warning) => warning.type === "ramp" && warning.ramp === ramp && warning.step === step);
}
function getSemanticTokenAliases(ramp, step) {
	const primitiveToken = `${ramp === "background" ? "bg" : ramp}-${step}`;
	return color_tokens_default[primitiveToken] ?? [];
}
function hasContrastWarning(warnings, ramp, step) {
	const semanticTokenAliases = getSemanticTokenAliases(ramp, step);
	return warnings.some((warning) => warning.type === "contrast" && (semanticTokenAliases.includes(warning.foregroundToken.replaceAll(".", "-")) || semanticTokenAliases.includes(warning.backgroundToken.replaceAll(".", "-"))));
}
function hasColorWarningForStep(warnings, ramp, step) {
	return hasRampWarning(warnings, ramp, step) || hasContrastWarning(warnings, ramp, step);
}
function hasColorWarningForRamp(warnings, ramp) {
	return RAMP_TOKENS_ORDER.some(({ tokenName }) => hasColorWarningForStep(warnings, ramp, tokenName));
}
function isSeedAdjusted(seed, generatedAnchor) {
	return getColorString(seed) !== getColorString(generatedAnchor);
}
function getSeedLabelColor(seed) {
	const renderedSeed = toGamut(seed, {
		space: "srgb",
		method: "clip"
	});
	return getContrast(renderedSeed, "#000") >= 4.5 ? "#000" : "#fff";
}
function ColorSample({ foreground, background, ramp }) {
	const label = `${foreground}: ${ramp[foreground]} on ${background}: ${ramp[background]}`;
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)("span", {
		role: "img",
		"aria-label": label,
		"data-color-contrast-sample": true,
		title: label,
		style: { color: ramp[foreground] },
		children: "Aa"
	}, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 136,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime$1, _jsxFileName$1, RAMP_TOKENS_ORDER, RampTable;
function init_ramp_table() {
	return (init_ramp_table = __esmMin((() => {
		init_react();
		init_toGamut();
		init_color_tokens();
		init_color_utils();
		import_jsx_dev_runtime$1 = require_jsx_dev_runtime();
		_jsxFileName$1 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/theme/src/color-ramps/stories/ramp-table.tsx";
		RAMP_TOKENS_ORDER = [
			{
				tokenName: "surface1",
				abbr: "SF1"
			},
			{
				tokenName: "surface2",
				abbr: "SF2"
			},
			{
				tokenName: "surface3",
				abbr: "SF3"
			},
			{
				tokenName: "surface4",
				abbr: "SF4"
			},
			{
				tokenName: "surface5",
				abbr: "SF5"
			},
			{
				tokenName: "surface6",
				abbr: "SF6"
			},
			{
				tokenName: "bgFill1",
				abbr: "BGF1"
			},
			{
				tokenName: "bgFill2",
				abbr: "BGF2"
			},
			{
				tokenName: "bgFillInverted1",
				abbr: "BGFI1"
			},
			{
				tokenName: "bgFillInverted2",
				abbr: "BGFI2"
			},
			{
				tokenName: "bgFillDark",
				abbr: "BGFD"
			},
			{
				tokenName: "stroke1",
				abbr: "ST1"
			},
			{
				tokenName: "stroke2",
				abbr: "ST2"
			},
			{
				tokenName: "stroke3",
				abbr: "ST3"
			},
			{
				tokenName: "stroke4",
				abbr: "ST4"
			},
			{
				tokenName: "fgSurface1",
				abbr: "FGS1"
			},
			{
				tokenName: "fgSurface2",
				abbr: "FGS2"
			},
			{
				tokenName: "fgSurface3",
				abbr: "FGS3"
			},
			{
				tokenName: "fgSurface4",
				abbr: "FGS4"
			},
			{
				tokenName: "fgFill",
				abbr: "FGF"
			},
			{
				tokenName: "fgFillInverted",
				abbr: "FGFI"
			},
			{
				tokenName: "fgFillDark",
				abbr: "FGFD"
			}
		];
		RampTable = (0, import_react.forwardRef)(function UnforwardedRampTable({ label, ramps, warnings = [] }, forwardedRef) {
			const hasAdjustedSeed = ramps.some(({ seed, ramp }) => isSeedAdjusted(seed.value, ramp[seed.name]));
			const hasAnyColorWarning = warnings.length > 0;
			return /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)("div", {
				style: { minWidth: 0 },
				children: [
					hasAdjustedSeed || hasAnyColorWarning ? /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)("p", {
						style: { marginBlock: "0 0.5rem" },
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)("strong", { children: "Markers:" }, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 164,
								columnNumber: 7
							}, this),
							" ",
							hasAnyColorWarning ? "! color warning" : null,
							hasAnyColorWarning && hasAdjustedSeed ? " · " : null,
							hasAdjustedSeed ? "SEED ≠ generated anchor" : null
						]
					}, void 0, true, {
						fileName: _jsxFileName$1,
						lineNumber: 163,
						columnNumber: 6
					}, this) : null,
					/* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)("div", {
						role: "region",
						"aria-label": `${label} color ramps`,
						tabIndex: 0,
						ref: forwardedRef,
						style: {
							width: "100%",
							overflowX: "auto",
							display: "grid",
							gridTemplateColumns: `repeat(${RAMP_TOKENS_ORDER.length}, minmax(max-content, 1fr))`,
							fontFamily: "var(--wpds-typography-font-family-body, -apple-system, system-ui, \"Segoe UI\", \"Roboto\", \"Oxygen-Sans\", \"Ubuntu\", \"Cantarell\", \"Helvetica Neue\", sans-serif)",
							alignItems: "end"
						},
						children: [RAMP_TOKENS_ORDER.map(({ tokenName, abbr }) => /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)("div", {
							style: {
								textAlign: "center",
								padding: "8px 4px",
								fontSize: 11,
								fontWeight: "var(--wpds-typography-font-weight-emphasis, 600)",
								color: "inherit"
							},
							children: abbr
						}, tokenName, false, {
							fileName: _jsxFileName$1,
							lineNumber: 185,
							columnNumber: 7
						}, this)), ramps.map(({ name, seed, ramp }, i) => RAMP_TOKENS_ORDER.map(({ tokenName }) => /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)("div", {
							title: hasColorWarningForStep(warnings, name, tokenName) ? `${name} ramp, ${tokenName} step: color warning` : void 0,
							style: {
								marginBlockStart: i !== 0 ? 4 : 0,
								backgroundColor: ramp[tokenName],
								display: "grid",
								gridTemplateRows: "20px 1fr",
								placeItems: "center",
								height: tokenName === seed.name ? 60 : 40,
								minWidth: 32,
								fontSize: 14,
								outline: hasColorWarningForStep(warnings, name, tokenName) ? "3px solid #d63638" : "",
								outlineOffset: "-3px",
								boxShadow: hasColorWarningForStep(warnings, name, tokenName) ? "inset 0 0 0 6px #fff" : "",
								position: "relative"
							},
							children: [
								hasColorWarningForStep(warnings, name, tokenName) ? /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)("strong", {
									"aria-hidden": "true",
									style: {
										background: "#d63638",
										color: "#fff",
										fontSize: 10,
										insetBlockStart: 0,
										insetInlineEnd: 0,
										lineHeight: 1,
										padding: 2,
										position: "absolute"
									},
									children: "!"
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 244,
									columnNumber: 10
								}, this) : null,
								tokenName === seed.name ? /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)("div", {
									title: isSeedAdjusted(seed.value, ramp[tokenName]) ? `${name} input seed ${seed.value}; generated ${tokenName} anchor ${ramp[tokenName]}` : void 0,
									style: {
										backgroundColor: seed.value,
										height: 20,
										gridRowStart: 1,
										gridRowEnd: 2,
										display: "grid",
										placeItems: "center",
										width: "100%",
										fontSize: 8,
										fontWeight: "var(--wpds-typography-font-weight-emphasis, 600)",
										outline: isSeedAdjusted(seed.value, ramp[tokenName]) ? "3px dashed currentColor" : "",
										outlineOffset: "-3px",
										color: getSeedLabelColor(seed.value)
									},
									children: isSeedAdjusted(seed.value, ramp[tokenName]) ? "SEED ≠" : "SEED"
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 261,
									columnNumber: 10
								}, this) : null,
								[
									"surface3",
									"bgFill1",
									"bgFillInverted1",
									"bgFillDark"
								].includes(tokenName) ? /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)("span", {
									style: {
										padding: "2px 6px",
										display: "flex",
										alignItems: "center",
										gap: 2,
										gridRowStart: tokenName === seed.name ? 2 : 1,
										gridRowEnd: 3
									},
									children: [
										tokenName === "surface3" ? /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(import_jsx_dev_runtime$1.Fragment, { children: [
											/* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(ColorSample, {
												foreground: "fgSurface1",
												background: tokenName,
												ramp
											}, void 0, false, {
												fileName: _jsxFileName$1,
												lineNumber: 320,
												columnNumber: 13
											}, this),
											/* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(ColorSample, {
												foreground: "fgSurface2",
												background: tokenName,
												ramp
											}, void 0, false, {
												fileName: _jsxFileName$1,
												lineNumber: 325,
												columnNumber: 13
											}, this),
											/* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(ColorSample, {
												foreground: "fgSurface3",
												background: tokenName,
												ramp
											}, void 0, false, {
												fileName: _jsxFileName$1,
												lineNumber: 330,
												columnNumber: 13
											}, this),
											/* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(ColorSample, {
												foreground: "fgSurface4",
												background: tokenName,
												ramp
											}, void 0, false, {
												fileName: _jsxFileName$1,
												lineNumber: 335,
												columnNumber: 13
											}, this)
										] }, void 0, true, {
											fileName: _jsxFileName$1,
											lineNumber: 319,
											columnNumber: 12
										}, this) : null,
										tokenName === "bgFill1" ? /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(ColorSample, {
											foreground: "fgFill",
											background: tokenName,
											ramp
										}, void 0, false, {
											fileName: _jsxFileName$1,
											lineNumber: 343,
											columnNumber: 12
										}, this) : null,
										tokenName === "bgFillInverted1" ? /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(ColorSample, {
											foreground: "fgFillInverted",
											background: tokenName,
											ramp
										}, void 0, false, {
											fileName: _jsxFileName$1,
											lineNumber: 350,
											columnNumber: 12
										}, this) : null,
										tokenName === "bgFillDark" ? /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(ColorSample, {
											foreground: "fgFillDark",
											background: tokenName,
											ramp
										}, void 0, false, {
											fileName: _jsxFileName$1,
											lineNumber: 357,
											columnNumber: 12
										}, this) : null
									]
								}, void 0, true, {
									fileName: _jsxFileName$1,
									lineNumber: 307,
									columnNumber: 10
								}, this) : null
							]
						}, `${name}-${tokenName}`, true, {
							fileName: _jsxFileName$1,
							lineNumber: 201,
							columnNumber: 8
						}, this)))]
					}, void 0, true, {
						fileName: _jsxFileName$1,
						lineNumber: 170,
						columnNumber: 5
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)("details", { children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)("summary", { children: "Color values" }, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 370,
							columnNumber: 6
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)("p", { children: "The surface3 text samples show fgSurface1 through fgSurface4 in order. The bgFill1, bgFillInverted1, and bgFillDark text samples show fgFill, fgFillInverted, and fgFillDark, respectively." }, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 371,
							columnNumber: 6
						}, this),
						ramps.map(({ name, ramp }) => /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)("table", { children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)("caption", { children: [name, " ramp"] }, void 0, true, {
								fileName: _jsxFileName$1,
								lineNumber: 379,
								columnNumber: 8
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)("thead", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)("tr", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)("th", {
								scope: "col",
								children: "Step"
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 382,
								columnNumber: 10
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)("th", {
								scope: "col",
								children: "Color"
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 383,
								columnNumber: 10
							}, this)] }, void 0, true, {
								fileName: _jsxFileName$1,
								lineNumber: 381,
								columnNumber: 9
							}, this) }, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 380,
								columnNumber: 8
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)("tbody", { children: RAMP_TOKENS_ORDER.map(({ tokenName }) => /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)("tr", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)("th", {
								scope: "row",
								children: tokenName
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 389,
								columnNumber: 11
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)("td", { children: ramp[tokenName] }, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 390,
								columnNumber: 11
							}, this)] }, tokenName, true, {
								fileName: _jsxFileName$1,
								lineNumber: 388,
								columnNumber: 10
							}, this)) }, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 386,
								columnNumber: 8
							}, this)
						] }, name, true, {
							fileName: _jsxFileName$1,
							lineNumber: 378,
							columnNumber: 7
						}, this))
					] }, void 0, true, {
						fileName: _jsxFileName$1,
						lineNumber: 369,
						columnNumber: 5
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName$1,
				lineNumber: 161,
				columnNumber: 4
			}, this);
		});
		try {
			RampTable.__docgenInfo = {
				"description": "",
				"displayName": "RampTable",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/theme/src/color-ramps/stories/ramp-table.tsx",
				"methods": [],
				"props": {
					"label": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/theme/src/color-ramps/stories/ramp-table.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "label",
						"required": true,
						"tags": {},
						"type": { "name": "string" }
					},
					"ramps": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/theme/src/color-ramps/stories/ramp-table.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "ramps",
						"required": true,
						"tags": {},
						"type": { "name": "{ name: \"info\" | \"warning\" | \"success\" | \"error\" | \"background\" | \"primary\" | \"caution\"; seed: { name: keyof Ramp; value: string; }; ramp: Record<keyof Ramp, string>; }[]" }
					},
					"warnings": {
						"defaultValue": { "value": "[]" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/theme/src/color-ramps/stories/ramp-table.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "warnings",
						"required": false,
						"tags": {},
						"type": { "name": "readonly ThemeProviderColorWarning[]" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/theme/src/color-ramps/stories/index.story.tsx
function buildDisplayedRamps({ background, primary }) {
	const bgRamp = buildBgRamp(background);
	const ramps = [{
		name: "background",
		seed: {
			name: "surface2",
			value: background
		},
		ramp: bgRamp.ramp
	}];
	const accentSeeds = [
		["primary", primary],
		["info", DEFAULT_SEED_COLORS.info],
		["success", DEFAULT_SEED_COLORS.success],
		["warning", DEFAULT_SEED_COLORS.warning],
		["caution", DEFAULT_SEED_COLORS.caution],
		["error", DEFAULT_SEED_COLORS.error]
	];
	for (const [name, value] of accentSeeds) ramps.push({
		name,
		seed: {
			name: "bgFill1",
			value
		},
		ramp: buildAccentRamp(value, bgRamp).ramp
	});
	return ramps;
}
function ColorScaleCombination({ label, source, background, primary, includeAllRamps = false }) {
	const headingId = (0, import_react.useId)();
	const [warnings, setWarnings] = (0, import_react.useState)();
	const allRamps = buildDisplayedRamps({
		background,
		primary
	});
	const ramps = includeAllRamps ? allRamps : allRamps.filter((ramp) => ramp.name === "background" || ramp.name === "primary" || hasColorWarningForRamp(warnings ?? [], ramp.name));
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("article", {
		"aria-labelledby": headingId,
		style: {
			display: "grid",
			gap: "1rem",
			padding: "1rem",
			border: "1px solid #dcdcde",
			backgroundColor: "#fff",
			color: "#1e1e1e"
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ThemeProvider, {
				color: {
					background,
					primary
				},
				onColorWarnings: setWarnings
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 142,
				columnNumber: 4
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
				id: headingId,
				children: label
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 147,
				columnNumber: 5
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
				"Source: ",
				source,
				". Primary seed: ",
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("code", { children: primary }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 149,
					columnNumber: 40
				}, this),
				". Background seed: ",
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("code", { children: background }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 150,
					columnNumber: 23
				}, this),
				"."
			] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 148,
				columnNumber: 5
			}, this)] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 146,
				columnNumber: 4
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Text samples show foreground colors on their corresponding backgrounds. Hover over a sample for its step and color value, or expand Color values below the ramps. Color pairs may not meet text contrast requirements." }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 153,
				columnNumber: 4
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RampTable, {
				label,
				ramps,
				warnings
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 159,
				columnNumber: 4
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ColorWarningDetails, {
				label,
				warnings
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 160,
				columnNumber: 4
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 131,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime, _jsxFileName, ColorGen, meta, Default, SAMPLE_COMBINATIONS, SampleCombinations;
function init_index_story() {
	return (init_index_story = __esmMin((() => {
		init_react();
		init_theme_provider();
		init_color_warning_details();
		init_ramp_table();
		init_color_ramps();
		init_constants();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/theme/src/color-ramps/stories/index.story.tsx";
		ColorGen = (props) => {
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: props.children }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 18,
				columnNumber: 9
			}, void 0);
		};
		meta = {
			title: "Design System/Theme/Theme Provider/Color Scales",
			component: ColorGen,
			argTypes: {
				background: { control: {
					type: "color",
					presetColors: ["#1e1e1e", "#f8f8f8"]
				} },
				primary: { control: {
					type: "color",
					presetColors: [
						"#3858e9",
						"#069e08",
						"#873eff"
					]
				} }
			},
			parameters: {
				a11y: { config: { rules: [{
					id: "color-contrast",
					selector: ":not([data-color-contrast-sample])"
				}] } },
				controls: { expanded: true },
				docs: { canvas: { sourceState: "shown" } }
			}
		};
		Default = {
			render: (args) => {
				const background = args.background ?? DEFAULT_SEED_COLORS.background;
				const primary = args.primary ?? DEFAULT_SEED_COLORS.primary;
				return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ColorScaleCombination, {
					label: "Custom color scales",
					source: "Storybook controls",
					background,
					primary,
					includeAllRamps: true
				}, `${primary}-${background}`, false, {
					fileName: _jsxFileName,
					lineNumber: 171,
					columnNumber: 4
				}, void 0);
			},
			args: {
				background: DEFAULT_SEED_COLORS.background,
				primary: DEFAULT_SEED_COLORS.primary
			}
		};
		SAMPLE_COMBINATIONS = [
			{
				label: "Default light",
				source: "ThemeProvider defaults",
				background: "#fcfcfc",
				primary: "#3858e9"
			},
			{
				label: "Tooltip dark",
				source: "Tooltip and WordPress dark admin scheme",
				background: "#1e1e1e",
				primary: "#3858e9"
			},
			{
				label: "Modern admin dark",
				source: "WordPress admin",
				background: "#222524",
				primary: "#3858e9"
			},
			{
				label: "#81162 reproduction",
				source: "GitHub issue #81162",
				background: "#4f386e",
				primary: "#608010"
			},
			{
				label: "WordPress light",
				source: "WordPress light admin scheme",
				background: "#f8f8f8",
				primary: "#3858e9"
			},
			{
				label: "Fresh",
				source: "WordPress admin scheme",
				background: "#25292b",
				primary: "#3858e9"
			},
			{
				label: "Light",
				source: "WordPress admin scheme",
				background: "#eaeeed",
				primary: "#007cba"
			},
			{
				label: "Blue",
				source: "WordPress admin scheme",
				background: "#3876a8",
				primary: "#437aa8"
			},
			{
				label: "Coffee",
				source: "WordPress admin scheme",
				background: "#5b534d",
				primary: "#916745"
			},
			{
				label: "Ectoplasm",
				source: "WordPress admin scheme",
				background: "#4f386e",
				primary: "#646c3e"
			},
			{
				label: "Ocean",
				source: "WordPress admin scheme",
				background: "#5f787f",
				primary: "#567958"
			},
			{
				label: "Midnight",
				source: "WordPress admin scheme",
				background: "#3d4042",
				primary: "#cf4339"
			},
			{
				label: "Sunrise",
				source: "WordPress admin scheme",
				background: "#cc4541",
				primary: "#ad631e"
			}
		];
		SampleCombinations = {
			render: () => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				style: {
					display: "grid",
					gap: "1rem"
				},
				children: SAMPLE_COMBINATIONS.map((combination) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ColorScaleCombination, { ...combination }, combination.label, false, {
					fileName: _jsxFileName,
					lineNumber: 277,
					columnNumber: 5
				}, void 0))
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 270,
				columnNumber: 3
			}, void 0),
			argTypes: {
				background: { control: false },
				primary: { control: false }
			}
		};
		Default.parameters = {
			...Default.parameters,
			docs: {
				...Default.parameters?.docs,
				source: {
					originalSource: "{\n  render: args => {\n    const background = args.background ?? DEFAULT_SEED_COLORS.background;\n    const primary = args.primary ?? DEFAULT_SEED_COLORS.primary;\n    return <ColorScaleCombination key={`${primary}-${background}`} label=\"Custom color scales\" source=\"Storybook controls\" background={background} primary={primary} includeAllRamps />;\n  },\n  args: {\n    background: DEFAULT_SEED_COLORS.background,\n    primary: DEFAULT_SEED_COLORS.primary\n  }\n}",
					...Default.parameters?.docs?.source
				}
			}
		};
		SampleCombinations.parameters = {
			...SampleCombinations.parameters,
			docs: {
				...SampleCombinations.parameters?.docs,
				source: {
					originalSource: "{\n  render: () => <div style={{\n    display: 'grid',\n    gap: '1rem'\n  }}>\n            {SAMPLE_COMBINATIONS.map(combination => <ColorScaleCombination key={combination.label} {...combination} />)}\n        </div>,\n  argTypes: {\n    background: {\n      control: false\n    },\n    primary: {\n      control: false\n    }\n  }\n}",
					...SampleCombinations.parameters?.docs?.source
				}
			}
		};
	})))();
}
//#endregion
init_index_story();
export { Default, SampleCombinations, meta as default };
