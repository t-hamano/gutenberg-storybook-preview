import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as init_theme_provider, t as ThemeProvider } from "./theme-provider-CZOzaK0L.js";
import { n as tokens, t as init_design_tokens } from "./design-tokens-BCTZaAJK.js";
//#region ../packages/theme/src/stories/index.story.tsx
var import_jsx_dev_runtime, _jsxFileName, wpdsColorTokens, meta, ColorTokenTable, DSTokensList, Default, WithPicker, NestingDebug, NestingAndInheriting;
function init_index_story() {
	return (init_index_story = __esmMin((() => {
		init_react();
		init_theme_provider();
		init_design_tokens();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/theme/src/stories/index.story.tsx";
		wpdsColorTokens = Object.keys(tokens).filter((name) => name.startsWith("--wpds-color"));
		meta = {
			title: "Design System/Theme/Theme Provider",
			component: ThemeProvider,
			args: { isRoot: true },
			argTypes: { children: { control: false } },
			parameters: {
				controls: { expanded: true },
				docs: { canvas: { sourceState: "shown" } }
			},
			tags: ["status-private"]
		};
		ColorTokenTable = ({ tokens }) => {
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
				style: {
					listStyle: "none",
					display: "flex",
					flexDirection: "column",
					gap: "0.5rem"
				},
				children: tokens.map((name) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
					style: {
						display: "grid",
						gridTemplateColumns: "80px	1fr",
						alignItems: "center",
						gap: "0.5rem"
					},
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
						"aria-hidden": "true",
						style: {
							backgroundColor: `var(${name})`,
							border: "1px solid var(--wpds-color-stroke-surface-neutral, #dbdbdb)",
							width: "100%",
							aspectRatio: "2/1",
							display: "block"
						}
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 49,
						columnNumber: 6
					}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("code", { children: name }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 59,
						columnNumber: 6
					}, void 0)]
				}, name, true, {
					fileName: _jsxFileName,
					lineNumber: 40,
					columnNumber: 5
				}, void 0))
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 31,
				columnNumber: 3
			}, void 0);
		};
		DSTokensList = () => {
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				style: { color: "var(--wpds-color-foreground-content-neutral, #1e1e1e)" },
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: "Design System Color tokens" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 73,
					columnNumber: 4
				}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ColorTokenTable, { tokens: wpdsColorTokens }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 74,
					columnNumber: 4
				}, void 0)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 68,
				columnNumber: 3
			}, void 0);
		};
		Default = { args: { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DSTokensList, {}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 81,
			columnNumber: 13
		}, void 0) } };
		WithPicker = {
			render: (args) => {
				const id = (0, import_react.useId)();
				const [primary, setPrimary] = (0, import_react.useState)();
				return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ThemeProvider, {
					...args,
					color: { primary },
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						style: { position: "relative" },
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							style: {
								position: "sticky",
								top: 0,
								right: 0,
								backgroundColor: "var(--wpds-color-background-surface-neutral, #fcfcfc)",
								color: "var(--wpds-color-foreground-content-neutral, #1e1e1e)",
								padding: "0.5rem",
								borderRadius: "0.5rem",
								boxShadow: "0 0 0.5rem 0 rgba(0, 0, 0, 0.1)"
							},
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
								type: "color",
								id,
								name: "primary",
								value: primary,
								onChange: (e) => setPrimary(e.target.value)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 112,
								columnNumber: 8
							}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
								htmlFor: id,
								children: "Pick the primary color"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 121,
								columnNumber: 8
							}, void 0)] }, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 111,
								columnNumber: 7
							}, void 0)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 98,
							columnNumber: 6
						}, void 0), args.children]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 97,
						columnNumber: 5
					}, void 0)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 91,
					columnNumber: 4
				}, void 0);
			},
			args: { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DSTokensList, {}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 130,
				columnNumber: 13
			}, void 0) }
		};
		NestingDebug = ({ background = "", primary = "" }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			style: {
				padding: "var(--wpds-dimension-padding-lg, 16px)",
				color: "var(--wpds-color-foreground-content-neutral, #1e1e1e)",
				backgroundColor: "var(--wpds-color-background-surface-neutral, #fcfcfc)",
				display: "flex",
				alignItems: "center",
				flexWrap: "wrap",
				gap: "1rem"
			},
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("pre", {
					style: { margin: 0 },
					children: [
						"background: ",
						background,
						" | primary: ",
						primary
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 146,
					columnNumber: 3
				}, void 0),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
					style: {
						display: "inline-block",
						padding: "var(--wpds-dimension-padding-sm, 8px)",
						borderRadius: "0.25rem",
						backgroundColor: "var(--wpds-color-background-interactive-brand-strong, var(--wp-admin-theme-color, #3858e9))",
						color: "var(--wpds-color-foreground-interactive-brand-strong, #fff)"
					},
					children: "primary"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 149,
					columnNumber: 3
				}, void 0),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
					style: {
						display: "inline-block",
						marginInlineStart: "0.25rem",
						padding: "var(--wpds-dimension-padding-sm, 8px)",
						borderRadius: "0.25rem",
						backgroundColor: "var(--wpds-color-background-interactive-neutral-weak-disabled, #0000)",
						color: "var(--wpds-color-foreground-content-neutral, #1e1e1e)"
					},
					children: "Neutral"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 161,
					columnNumber: 3
				}, void 0)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 135,
			columnNumber: 2
		}, void 0);
		NestingAndInheriting = { render: () => {
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ThemeProvider, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NestingDebug, {
				background: "inherit (root)",
				primary: "inherit (root)"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 181,
				columnNumber: 5
			}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				style: { paddingInlineStart: "1rem" },
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ThemeProvider, {
					color: { background: "#1e1e1e" },
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NestingDebug, {
						background: "#1e1e1e",
						primary: "inherit (root)"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 191,
						columnNumber: 7
					}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						style: { paddingInlineStart: "1rem" },
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ThemeProvider, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NestingDebug, {
							background: "inherit (#1e1e1e)",
							primary: "inherit (root)"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 197,
							columnNumber: 9
						}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							style: { paddingInlineStart: "1rem" },
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ThemeProvider, {
								color: { primary: "hotpink" },
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NestingDebug, {
									background: "inherit (#1e1e1e)",
									primary: "hotpink"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 205,
									columnNumber: 11
								}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									style: { paddingInlineStart: "1rem" },
									children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ThemeProvider, {
										color: { background: "#f8f8f8" },
										children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NestingDebug, {
											background: "#f8f8f8",
											primary: "inherit (hotpink)"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 219,
											columnNumber: 13
										}, void 0)
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 214,
										columnNumber: 12
									}, void 0)
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 209,
									columnNumber: 11
								}, void 0)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 202,
								columnNumber: 10
							}, void 0)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 201,
							columnNumber: 9
						}, void 0)] }, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 196,
							columnNumber: 8
						}, void 0)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 195,
						columnNumber: 7
					}, void 0)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 186,
					columnNumber: 6
				}, void 0)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 185,
				columnNumber: 5
			}, void 0)] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 180,
				columnNumber: 4
			}, void 0);
		} };
		Default.parameters = {
			...Default.parameters,
			docs: {
				...Default.parameters?.docs,
				source: {
					originalSource: "{\n  args: {\n    children: <DSTokensList />\n  }\n}",
					...Default.parameters?.docs?.source
				}
			}
		};
		WithPicker.parameters = {
			...WithPicker.parameters,
			docs: {
				...WithPicker.parameters?.docs,
				source: {
					originalSource: "{\n  render: args => {\n    const id = useId();\n    const [primary, setPrimary] = useState<undefined | string>();\n    return <ThemeProvider {...args} color={{\n      primary\n    }}>\n                <div style={{\n        position: 'relative'\n      }}>\n                    <div style={{\n          position: 'sticky',\n          top: 0,\n          right: 0,\n          backgroundColor: 'var(--wpds-color-background-surface-neutral)',\n          color: 'var( --wpds-color-foreground-content-neutral )',\n          padding: '0.5rem',\n          borderRadius: '0.5rem',\n          boxShadow: '0 0 0.5rem 0 rgba(0, 0, 0, 0.1)'\n        }}>\n                        <div>\n                            <input type=\"color\" id={id} name=\"primary\" value={primary} onChange={e => setPrimary(e.target.value)} />\n                            <label htmlFor={id}>Pick the primary color</label>\n                        </div>\n                    </div>\n                    {args.children}\n                </div>\n            </ThemeProvider>;\n  },\n  args: {\n    children: <DSTokensList />\n  }\n}",
					...WithPicker.parameters?.docs?.source
				}
			}
		};
		NestingAndInheriting.parameters = {
			...NestingAndInheriting.parameters,
			docs: {
				...NestingAndInheriting.parameters?.docs,
				source: {
					originalSource: "{\n  render: () => {\n    return <ThemeProvider>\n                <NestingDebug background=\"inherit (root)\" primary=\"inherit (root)\" />\n                <div style={{\n        paddingInlineStart: '1rem'\n      }}>\n                    <ThemeProvider color={{\n          background: '#1e1e1e'\n        }}>\n                        <NestingDebug background=\"#1e1e1e\" primary=\"inherit (root)\" />\n                        <div style={{\n            paddingInlineStart: '1rem'\n          }}>\n                            <ThemeProvider>\n                                <NestingDebug background=\"inherit (#1e1e1e)\" primary=\"inherit (root)\" />\n                                <div style={{\n                paddingInlineStart: '1rem'\n              }}>\n                                    <ThemeProvider color={{\n                  primary: 'hotpink'\n                }}>\n                                        <NestingDebug background=\"inherit (#1e1e1e)\" primary=\"hotpink\" />\n                                        <div style={{\n                    paddingInlineStart: '1rem'\n                  }}>\n                                            <ThemeProvider color={{\n                      background: '#f8f8f8'\n                    }}>\n                                                <NestingDebug background=\"#f8f8f8\" primary=\"inherit (hotpink)\" />\n                                            </ThemeProvider>\n                                        </div>\n                                    </ThemeProvider>\n                                </div>\n                            </ThemeProvider>\n                        </div>\n                    </ThemeProvider>\n                </div>\n            </ThemeProvider>;\n  }\n}",
					...NestingAndInheriting.parameters?.docs?.source
				}
			}
		};
	})))();
}
//#endregion
init_index_story();
export { Default, NestingAndInheriting, WithPicker, meta as default };
