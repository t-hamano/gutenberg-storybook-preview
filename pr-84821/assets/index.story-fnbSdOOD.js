import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { a as Panel, i as init_root, n as init_trigger, o as init_panel, r as Root, t as Trigger } from "./trigger-D05VttZN.js";
//#region ../packages/ui/src/collapsible/stories/index.story.tsx
var import_jsx_dev_runtime, _jsxFileName, meta, Default, DefaultOpen, Disabled, HiddenUntilFound, Controlled;
function init_index_story() {
	return (init_index_story = __esmMin((() => {
		init_react();
		init_root(), init_trigger(), init_panel();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/collapsible/stories/index.story.tsx";
		meta = {
			tags: ["manifest"],
			title: "Components/@wordpress-ui/Collapsible",
			id: "design-system-components-collapsible",
			component: Root,
			subcomponents: {
				"Collapsible.Trigger": Trigger,
				"Collapsible.Panel": Panel
			},
			parameters: { componentStatus: {
				status: "recommended",
				whereUsed: "global"
			} }
		};
		Default = { args: { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trigger, { children: "Toggle" }, "trigger", false, {
			fileName: _jsxFileName,
			lineNumber: 28,
			columnNumber: 4
		}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Panel, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Collapsible content here." }, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 30,
			columnNumber: 5
		}, void 0) }, "panel", false, {
			fileName: _jsxFileName,
			lineNumber: 29,
			columnNumber: 4
		}, void 0)] } };
		DefaultOpen = {
			argTypes: { open: { control: false } },
			args: {
				defaultOpen: true,
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trigger, { children: "Toggle" }, "trigger", false, {
					fileName: _jsxFileName,
					lineNumber: 41,
					columnNumber: 4
				}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Panel, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "This panel is open by default." }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 43,
					columnNumber: 5
				}, void 0) }, "panel", false, {
					fileName: _jsxFileName,
					lineNumber: 42,
					columnNumber: 4
				}, void 0)]
			}
		};
		Disabled = { args: {
			disabled: true,
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trigger, { children: "Toggle (disabled)" }, "trigger", false, {
				fileName: _jsxFileName,
				lineNumber: 53,
				columnNumber: 4
			}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Panel, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "This content cannot be toggled." }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 57,
				columnNumber: 5
			}, void 0) }, "panel", false, {
				fileName: _jsxFileName,
				lineNumber: 56,
				columnNumber: 4
			}, void 0)]
		} };
		HiddenUntilFound = { render: function HiddenUntilFoundRender() {
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Use the browser's find-in-page (Ctrl/Cmd+F) to search for \"hidden treasure\". The collapsed panel will automatically expand to reveal the match." }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 74,
				columnNumber: 5
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Root, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trigger, { children: "Expand to reveal" }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 80,
				columnNumber: 6
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Panel, {
				hiddenUntilFound: true,
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "This is the hidden treasure that can be found via the browser's built-in page search even while the panel is collapsed." }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 82,
					columnNumber: 7
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 81,
				columnNumber: 6
			}, this)] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 79,
				columnNumber: 5
			}, this)] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 73,
				columnNumber: 4
			}, this);
		} };
		Controlled = {
			argTypes: {
				open: { control: false },
				defaultOpen: { control: false }
			},
			render: function ControlledRender() {
				const [open, setOpen] = (0, import_react.useState)(false);
				return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Root, {
					open,
					onOpenChange: setOpen,
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trigger, { children: open ? "Close" : "Open" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 103,
						columnNumber: 5
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Panel, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Controlled collapsible panel." }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 107,
						columnNumber: 6
					}, this) }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 106,
						columnNumber: 5
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 102,
					columnNumber: 4
				}, this);
			}
		};
		try {
			HiddenUntilFound.__docgenInfo = {
				"description": "When `hiddenUntilFound` is set on `Collapsible.Panel`, the collapsed content\nremains in the DOM using the `hidden=\"until-found\"` HTML attribute instead of\nbeing removed entirely. This lets the browser's native page search (Ctrl/Cmd+F)\nfind text inside collapsed panels and automatically expand them to reveal the\nmatch — improving discoverability without sacrificing the collapsed layout.",
				"displayName": "HiddenUntilFound",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/collapsible/stories/index.story.tsx",
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
					originalSource: "{\n  args: {\n    children: [<Collapsible.Trigger key=\"trigger\">Toggle</Collapsible.Trigger>, <Collapsible.Panel key=\"panel\">\n                <p>Collapsible content here.</p>\n            </Collapsible.Panel>]\n  }\n}",
					...Default.parameters?.docs?.source
				}
			}
		};
		DefaultOpen.parameters = {
			...DefaultOpen.parameters,
			docs: {
				...DefaultOpen.parameters?.docs,
				source: {
					originalSource: "{\n  argTypes: {\n    open: {\n      control: false\n    }\n  },\n  args: {\n    defaultOpen: true,\n    children: [<Collapsible.Trigger key=\"trigger\">Toggle</Collapsible.Trigger>, <Collapsible.Panel key=\"panel\">\n                <p>This panel is open by default.</p>\n            </Collapsible.Panel>]\n  }\n}",
					...DefaultOpen.parameters?.docs?.source
				}
			}
		};
		Disabled.parameters = {
			...Disabled.parameters,
			docs: {
				...Disabled.parameters?.docs,
				source: {
					originalSource: "{\n  args: {\n    disabled: true,\n    children: [<Collapsible.Trigger key=\"trigger\">\n                Toggle (disabled)\n            </Collapsible.Trigger>, <Collapsible.Panel key=\"panel\">\n                <p>This content cannot be toggled.</p>\n            </Collapsible.Panel>]\n  }\n}",
					...Disabled.parameters?.docs?.source
				}
			}
		};
		HiddenUntilFound.parameters = {
			...HiddenUntilFound.parameters,
			docs: {
				...HiddenUntilFound.parameters?.docs,
				source: {
					originalSource: "{\n  render: function HiddenUntilFoundRender() {\n    return <div>\n                <p>\n                    Use the browser&apos;s find-in-page (Ctrl/Cmd+F) to search\n                    for &quot;hidden treasure&quot;. The collapsed panel will\n                    automatically expand to reveal the match.\n                </p>\n                <Collapsible.Root>\n                    <Collapsible.Trigger>Expand to reveal</Collapsible.Trigger>\n                    <Collapsible.Panel hiddenUntilFound>\n                        <p>\n                            This is the hidden treasure that can be found via\n                            the browser&apos;s built-in page search even while\n                            the panel is collapsed.\n                        </p>\n                    </Collapsible.Panel>\n                </Collapsible.Root>\n            </div>;\n  }\n}",
					...HiddenUntilFound.parameters?.docs?.source
				},
				description: {
					story: "When `hiddenUntilFound` is set on `Collapsible.Panel`, the collapsed content\nremains in the DOM using the `hidden=\"until-found\"` HTML attribute instead of\nbeing removed entirely. This lets the browser's native page search (Ctrl/Cmd+F)\nfind text inside collapsed panels and automatically expand them to reveal the\nmatch — improving discoverability without sacrificing the collapsed layout.",
					...HiddenUntilFound.parameters?.docs?.description
				}
			}
		};
		Controlled.parameters = {
			...Controlled.parameters,
			docs: {
				...Controlled.parameters?.docs,
				source: {
					originalSource: "{\n  argTypes: {\n    open: {\n      control: false\n    },\n    defaultOpen: {\n      control: false\n    }\n  },\n  render: function ControlledRender() {\n    const [open, setOpen] = useState(false);\n    return <Collapsible.Root open={open} onOpenChange={setOpen}>\n                <Collapsible.Trigger>\n                    {open ? 'Close' : 'Open'}\n                </Collapsible.Trigger>\n                <Collapsible.Panel>\n                    <p>Controlled collapsible panel.</p>\n                </Collapsible.Panel>\n            </Collapsible.Root>;\n  }\n}",
					...Controlled.parameters?.docs?.source
				}
			}
		};
	})))();
}
//#endregion
init_index_story();
export { Controlled, Default, DefaultOpen, Disabled, HiddenUntilFound, meta as default };
