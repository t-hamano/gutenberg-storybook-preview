import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { r as format_bold_default, t as format_italic_default } from "./format-italic-DEEFLeGt.js";
import { n as init_icon, t as Icon } from "./icon-LzGYYnN1.js";
import { a as Popup, c as init_positioner, i as init_trigger, l as Portal, n as init_root, o as init_popup, r as Trigger, s as Positioner, t as Root, u as init_portal } from "./root-CKrUEL-b.js";
import { n as init_provider, t as Provider } from "./provider-DwBMiu6C.js";
import { r as init_build_module } from "./library.story-CbQx3MQ6.js";
//#region ../packages/ui/src/tooltip/stories/index.story.tsx
var import_jsx_dev_runtime, _jsxFileName, meta, Default, Disabled, Positioning, WithCustomPositioner, WithCustomZIndex, WithProvider;
function init_index_story() {
	return (init_index_story = __esmMin((() => {
		init_build_module();
		init_icon();
		init_root(), init_provider(), init_trigger(), init_popup(), init_positioner(), init_portal();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/tooltip/stories/index.story.tsx";
		meta = {
			title: "Components/@wordpress-ui/Tooltip",
			id: "design-system-components-tooltip",
			component: Root,
			tags: ["manifest"],
			subcomponents: {
				"Tooltip.Provider": Provider,
				"Tooltip.Trigger": Trigger,
				"Tooltip.Popup": Popup,
				"Tooltip.Positioner": Positioner,
				"Tooltip.Portal": Portal
			},
			parameters: { componentStatus: {
				status: "recommended",
				whereUsed: "global"
			} }
		};
		Default = { args: { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trigger, {
			"aria-label": "Save",
			children: "💾"
		}, "trigger", false, {
			fileName: _jsxFileName,
			lineNumber: 30,
			columnNumber: 4
		}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Popup, { children: "Save" }, "popup", false, {
			fileName: _jsxFileName,
			lineNumber: 33,
			columnNumber: 4
		}, void 0)] } };
		Disabled = {
			...Default,
			args: {
				...Default.args,
				disabled: true
			}
		};
		Positioning = { render: () => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			style: {
				display: "flex",
				gap: "2rem",
				padding: "4rem",
				justifyContent: "center"
			},
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Root, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trigger, {
					"aria-label": "Up",
					children: "⬆️"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 69,
					columnNumber: 5
				}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Popup, {
					positioner: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Positioner, { side: "top" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 70,
						columnNumber: 33
					}, void 0),
					children: "Up"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 70,
					columnNumber: 5
				}, void 0)] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 68,
					columnNumber: 4
				}, void 0),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Root, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trigger, {
					"aria-label": "Forward",
					children: "➡️"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 76,
					columnNumber: 5
				}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Popup, {
					positioner: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Positioner, { side: "right" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 78,
						columnNumber: 19
					}, void 0),
					children: "Forward"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 77,
					columnNumber: 5
				}, void 0)] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 75,
					columnNumber: 4
				}, void 0),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Root, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trigger, {
					"aria-label": "Down",
					children: "⬇️"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 85,
					columnNumber: 5
				}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Popup, {
					positioner: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Positioner, { side: "bottom" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 87,
						columnNumber: 19
					}, void 0),
					children: "Down"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 86,
					columnNumber: 5
				}, void 0)] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 84,
					columnNumber: 4
				}, void 0),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Root, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trigger, {
					"aria-label": "Back",
					children: "⬅️"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 94,
					columnNumber: 5
				}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Popup, {
					positioner: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Positioner, { side: "left" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 96,
						columnNumber: 19
					}, void 0),
					children: "Back"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 95,
					columnNumber: 5
				}, void 0)] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 93,
					columnNumber: 4
				}, void 0)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 60,
			columnNumber: 3
		}, void 0) };
		WithCustomPositioner = { args: { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trigger, {
			"aria-label": "Save",
			children: "💾"
		}, "trigger", false, {
			fileName: _jsxFileName,
			lineNumber: 113,
			columnNumber: 4
		}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Popup, {
			positioner: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Positioner, {
				side: "right",
				align: "start",
				sideOffset: 16
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 118,
				columnNumber: 6
			}, void 0),
			children: "Save"
		}, "popup", false, {
			fileName: _jsxFileName,
			lineNumber: 116,
			columnNumber: 4
		}, void 0)] } };
		WithCustomZIndex = {
			name: "With Custom z-index",
			args: { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trigger, {
				"aria-label": "Save",
				children: "💾"
			}, "trigger", false, {
				fileName: _jsxFileName,
				lineNumber: 152,
				columnNumber: 4
			}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Popup, {
				portal: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Portal, { style: { "--wp-ui-tooltip-z-index": "9999" } }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 157,
					columnNumber: 6
				}, void 0),
				children: "Save"
			}, "popup", false, {
				fileName: _jsxFileName,
				lineNumber: 155,
				columnNumber: 4
			}, void 0)] }
		};
		WithProvider = { render: () => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Provider, {
			delay: 0,
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				style: {
					display: "flex",
					gap: "1rem"
				},
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Root, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trigger, {
					"aria-label": "Bold",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { icon: format_bold_default }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 180,
						columnNumber: 7
					}, void 0)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 179,
					columnNumber: 6
				}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Popup, { children: "Bold" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 182,
					columnNumber: 6
				}, void 0)] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 178,
					columnNumber: 5
				}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Root, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trigger, {
					"aria-label": "Italic",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { icon: format_italic_default }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 187,
						columnNumber: 7
					}, void 0)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 186,
					columnNumber: 6
				}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Popup, { children: "Italic" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 189,
					columnNumber: 6
				}, void 0)] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 185,
					columnNumber: 5
				}, void 0)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 177,
				columnNumber: 4
			}, void 0)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 176,
			columnNumber: 3
		}, void 0) };
		try {
			Disabled.__docgenInfo = {
				"description": "The `disabled` prop prevents the tooltip from showing, and can be used to\nshow the tooltip conditionally without rendering the underlying react\ncomponent conditionally (which could cause reconciliation issues).",
				"displayName": "Disabled",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/tooltip/stories/index.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			Positioning.__docgenInfo = {
				"description": "Customize where the tooltip appears relative to the trigger by passing a\n`<Tooltip.Positioner />` element to `Tooltip.Popup`'s `positioner` prop.\n`Tooltip.Positioner` accepts `side`, `align`, `sideOffset`, and collision\nsettings; when `positioner` is omitted, the tooltip uses the defaults\n(`side=\"top\"`, `align=\"center\"`, `sideOffset={ 4 }`).",
				"displayName": "Positioning",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/tooltip/stories/index.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			WithCustomPositioner.__docgenInfo = {
				"description": "Beyond `side`, `Tooltip.Positioner` accepts the rest of the positioner\nsurface — `align`, `alignOffset`, `sideOffset`, collision settings, and\nmore — for fine-grained placement.",
				"displayName": "WithCustomPositioner",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/tooltip/stories/index.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			WithCustomZIndex.__docgenInfo = {
				"description": "Popovers in Gutenberg are managed with explicit z-index values, which can\ncreate situations where a tooltip renders below another popover when you\nwant it above.\n\nThe `--wp-ui-tooltip-z-index` CSS variable controls the z-index of the\ntooltip's positioner. Override it either:\n\n- **Globally**, by setting the variable on `:root` or `body` (raises every\n  tooltip in the page), or\n- **Per instance**, by passing a `Tooltip.Portal` with a `style` (or\n  `className`) to `Tooltip.Popup`'s `portal` prop. The variable cascades\n  from the portal wrapper to everything rendered inside it.\n\nThis story demonstrates the per-instance approach.",
				"displayName": "WithCustomZIndex",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/tooltip/stories/index.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			WithProvider.__docgenInfo = {
				"description": "Use `Tooltip.Provider` to control the delay before tooltips appear.\nThis is useful when you have multiple tooltips and want them to share\nthe same delay configuration.",
				"displayName": "WithProvider",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/tooltip/stories/index.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		Default.parameters = {
			...Default.parameters,
			docs: {
				...Default.parameters?.docs,
				source: {
					originalSource: "{\n  args: {\n    children: [<Tooltip.Trigger aria-label=\"Save\" key=\"trigger\">\n                💾\n            </Tooltip.Trigger>, <Tooltip.Popup key=\"popup\">Save</Tooltip.Popup>]\n  }\n}",
					...Default.parameters?.docs?.source
				}
			}
		};
		Disabled.parameters = {
			...Disabled.parameters,
			docs: {
				...Disabled.parameters?.docs,
				source: {
					originalSource: "{\n  ...Default,\n  args: {\n    ...Default.args,\n    disabled: true\n  }\n}",
					...Disabled.parameters?.docs?.source
				},
				description: {
					story: "The `disabled` prop prevents the tooltip from showing, and can be used to\nshow the tooltip conditionally without rendering the underlying react\ncomponent conditionally (which could cause reconciliation issues).",
					...Disabled.parameters?.docs?.description
				}
			}
		};
		Positioning.parameters = {
			...Positioning.parameters,
			docs: {
				...Positioning.parameters?.docs,
				source: {
					originalSource: "{\n  render: () => <div style={{\n    display: 'flex',\n    gap: '2rem',\n    padding: '4rem',\n    justifyContent: 'center'\n  }}>\n            <Tooltip.Root>\n                <Tooltip.Trigger aria-label=\"Up\">⬆️</Tooltip.Trigger>\n                <Tooltip.Popup positioner={<Tooltip.Positioner side=\"top\" />}>\n                    Up\n                </Tooltip.Popup>\n            </Tooltip.Root>\n\n            <Tooltip.Root>\n                <Tooltip.Trigger aria-label=\"Forward\">➡️</Tooltip.Trigger>\n                <Tooltip.Popup positioner={<Tooltip.Positioner side=\"right\" />}>\n                    Forward\n                </Tooltip.Popup>\n            </Tooltip.Root>\n\n            <Tooltip.Root>\n                <Tooltip.Trigger aria-label=\"Down\">⬇️</Tooltip.Trigger>\n                <Tooltip.Popup positioner={<Tooltip.Positioner side=\"bottom\" />}>\n                    Down\n                </Tooltip.Popup>\n            </Tooltip.Root>\n\n            <Tooltip.Root>\n                <Tooltip.Trigger aria-label=\"Back\">⬅️</Tooltip.Trigger>\n                <Tooltip.Popup positioner={<Tooltip.Positioner side=\"left\" />}>\n                    Back\n                </Tooltip.Popup>\n            </Tooltip.Root>\n        </div>\n}",
					...Positioning.parameters?.docs?.source
				},
				description: {
					story: "Customize where the tooltip appears relative to the trigger by passing a\n`<Tooltip.Positioner />` element to `Tooltip.Popup`'s `positioner` prop.\n`Tooltip.Positioner` accepts `side`, `align`, `sideOffset`, and collision\nsettings; when `positioner` is omitted, the tooltip uses the defaults\n(`side=\"top\"`, `align=\"center\"`, `sideOffset={ 4 }`).",
					...Positioning.parameters?.docs?.description
				}
			}
		};
		WithCustomPositioner.parameters = {
			...WithCustomPositioner.parameters,
			docs: {
				...WithCustomPositioner.parameters?.docs,
				source: {
					originalSource: "{\n  args: {\n    children: [<Tooltip.Trigger aria-label=\"Save\" key=\"trigger\">\n                💾\n            </Tooltip.Trigger>, <Tooltip.Popup positioner={<Tooltip.Positioner side=\"right\" align=\"start\" sideOffset={16} />} key=\"popup\">\n                Save\n            </Tooltip.Popup>]\n  }\n}",
					...WithCustomPositioner.parameters?.docs?.source
				},
				description: {
					story: "Beyond `side`, `Tooltip.Positioner` accepts the rest of the positioner\nsurface — `align`, `alignOffset`, `sideOffset`, collision settings, and\nmore — for fine-grained placement.",
					...WithCustomPositioner.parameters?.docs?.description
				}
			}
		};
		WithCustomZIndex.parameters = {
			...WithCustomZIndex.parameters,
			docs: {
				...WithCustomZIndex.parameters?.docs,
				source: {
					originalSource: "{\n  name: 'With Custom z-index',\n  args: {\n    children: [<Tooltip.Trigger aria-label=\"Save\" key=\"trigger\">\n                💾\n            </Tooltip.Trigger>, <Tooltip.Popup portal={<Tooltip.Portal style={{\n      '--wp-ui-tooltip-z-index': '9999'\n    }} />} key=\"popup\">\n                Save\n            </Tooltip.Popup>]\n  }\n}",
					...WithCustomZIndex.parameters?.docs?.source
				},
				description: {
					story: "Popovers in Gutenberg are managed with explicit z-index values, which can\ncreate situations where a tooltip renders below another popover when you\nwant it above.\n\nThe `--wp-ui-tooltip-z-index` CSS variable controls the z-index of the\ntooltip's positioner. Override it either:\n\n- **Globally**, by setting the variable on `:root` or `body` (raises every\n  tooltip in the page), or\n- **Per instance**, by passing a `Tooltip.Portal` with a `style` (or\n  `className`) to `Tooltip.Popup`'s `portal` prop. The variable cascades\n  from the portal wrapper to everything rendered inside it.\n\nThis story demonstrates the per-instance approach.",
					...WithCustomZIndex.parameters?.docs?.description
				}
			}
		};
		WithProvider.parameters = {
			...WithProvider.parameters,
			docs: {
				...WithProvider.parameters?.docs,
				source: {
					originalSource: "{\n  render: () => <Tooltip.Provider delay={0}>\n            <div style={{\n      display: 'flex',\n      gap: '1rem'\n    }}>\n                <Tooltip.Root>\n                    <Tooltip.Trigger aria-label=\"Bold\">\n                        <Icon icon={formatBold} />\n                    </Tooltip.Trigger>\n                    <Tooltip.Popup>Bold</Tooltip.Popup>\n                </Tooltip.Root>\n\n                <Tooltip.Root>\n                    <Tooltip.Trigger aria-label=\"Italic\">\n                        <Icon icon={formatItalic} />\n                    </Tooltip.Trigger>\n                    <Tooltip.Popup>Italic</Tooltip.Popup>\n                </Tooltip.Root>\n            </div>\n        </Tooltip.Provider>\n}",
					...WithProvider.parameters?.docs?.source
				},
				description: {
					story: "Use `Tooltip.Provider` to control the delay before tooltips appear.\nThis is useful when you have multiple tooltips and want them to share\nthe same delay configuration.",
					...WithProvider.parameters?.docs?.description
				}
			}
		};
	})))();
}
//#endregion
init_index_story();
export { Default, Disabled, Positioning, WithCustomPositioner, WithCustomZIndex, WithProvider, meta as default };
