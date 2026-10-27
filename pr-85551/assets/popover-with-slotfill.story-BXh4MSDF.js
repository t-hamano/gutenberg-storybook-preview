import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { r as init_react_platform, t as createPortal } from "./react-platform-BqLbFOjq.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { i as init_arrow, n as init_description, r as Arrow, t as Description } from "./description-BmefbFS3.js";
import { a as Root, c as init_popup, d as Portal, f as init_portal, i as init_title, l as Positioner, n as init_trigger, o as init_root, r as Title, s as Popup, t as Trigger, u as init_positioner } from "./trigger-CwIySeU9.js";
import { i as init_slot_fill, n as Slot, t as Provider } from "./slot-fill-Dk0iYPzf.js";
//#region stories/playground/popover-with-slotfill.story.jsx
function IframePortal({ children, iframeRef, ...iframeProps }) {
	const [bodyNode, setBodyNode] = (0, import_react.useState)(null);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("iframe", {
		title: "Iframe",
		...iframeProps,
		ref: iframeRef,
		srcDoc: "<!doctype html><html><body></body></html>",
		onLoad: (event) => {
			setBodyNode(event.currentTarget.contentDocument?.body ?? null);
		},
		children: bodyNode && createPortal(children, bodyNode)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 16,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime, _jsxFileName, popover_with_slotfill_story_default, CrossIframeWithSlotFill;
function init_popover_with_slotfill_story() {
	return (init_popover_with_slotfill_story = __esmMin((() => {
		init_react_platform(), init_react();
		init_slot_fill();
		init_root(), init_trigger(), init_popup(), init_portal(), init_positioner(), init_arrow(), init_title(), init_description();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/storybook/stories/playground/popover-with-slotfill.story.jsx";
		popover_with_slotfill_story_default = {
			title: "Playground/Debug fixtures/Popover with SlotFill",
			component: Root
		};
		CrossIframeWithSlotFill = {
			args: { defaultOpen: true },
			argTypes: { defaultOpen: { control: false } },
			render: function Render({ children: _children, ...args }) {
				const [slotNode, setSlotNode] = (0, import_react.useState)(null);
				const [iframeBoundary, setIframeBoundary] = (0, import_react.useState)(null);
				return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Provider, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Slot, {
					name: "popover-container",
					bubblesVirtually: true,
					ref: setSlotNode
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 41,
					columnNumber: 5
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IframePortal, {
					iframeRef: setIframeBoundary,
					style: {
						width: "100%",
						height: 400,
						border: 0,
						outline: "1px solid purple"
					},
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						style: {
							height: "200vh",
							paddingTop: "10vh"
						},
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							style: {
								maxWidth: 200,
								marginTop: 100,
								marginInline: "auto"
							},
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Root, {
								...args,
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trigger, {
									style: {
										padding: 8,
										background: "salmon"
									},
									children: "Popover's anchor (inside iframe)"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 64,
									columnNumber: 9
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Popup, {
									portal: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Portal, { container: slotNode ?? void 0 }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 74,
										columnNumber: 11
									}, this),
									positioner: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Positioner, { collisionBoundary: iframeBoundary ?? void 0 }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 79,
										columnNumber: 11
									}, this),
									children: [
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Arrow, {}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 86,
											columnNumber: 10
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Title, {
											style: { marginBottom: "var(--wpds-dimension-gap-xs, 4px)" },
											children: "Cross-Iframe (SlotFill)"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 87,
											columnNumber: 10
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Description, { children: "This popup renders in the parent document via a `Slot` from `@wordpress/components`." }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 95,
											columnNumber: 10
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 72,
									columnNumber: 9
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 63,
								columnNumber: 8
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 56,
							columnNumber: 7
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 55,
						columnNumber: 6
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 46,
					columnNumber: 5
				}, this)] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 40,
					columnNumber: 4
				}, this);
			}
		};
		CrossIframeWithSlotFill.parameters = {
			...CrossIframeWithSlotFill.parameters,
			docs: {
				...CrossIframeWithSlotFill.parameters?.docs,
				source: {
					originalSource: "{\n  args: {\n    defaultOpen: true\n  },\n  argTypes: {\n    defaultOpen: {\n      control: false\n    }\n  },\n  render: function Render({\n    children: _children,\n    ...args\n  }) {\n    const [slotNode, setSlotNode] = useState(null);\n    const [iframeBoundary, setIframeBoundary] = useState(null);\n    return <SlotFillProvider>\n                <Slot name=\"popover-container\" bubblesVirtually ref={setSlotNode} />\n                <IframePortal iframeRef={setIframeBoundary} style={{\n        width: '100%',\n        height: 400,\n        border: 0,\n        outline: '1px solid purple'\n      }}>\n                    <div style={{\n          height: '200vh',\n          paddingTop: '10vh'\n        }}>\n                        <div style={{\n            maxWidth: 200,\n            marginTop: 100,\n            marginInline: 'auto'\n          }}>\n                            <Popover.Root {...args}>\n                                <Popover.Trigger style={{\n                padding: 8,\n                background: 'salmon'\n              }}>\n                                    Popover&apos;s anchor (inside iframe)\n                                </Popover.Trigger>\n                                <Popover.Popup portal={<Popover.Portal container={slotNode ?? undefined} />} positioner={<Popover.Positioner collisionBoundary={iframeBoundary ?? undefined} />}>\n                                    <Popover.Arrow />\n                                    <Popover.Title style={{\n                  marginBottom: 'var(--wpds-dimension-gap-xs)'\n                }}>\n                                        Cross-Iframe (SlotFill)\n                                    </Popover.Title>\n                                    <Popover.Description>\n                                        This popup renders in the parent\n                                        document via a `Slot` from\n                                        `@wordpress/components`.\n                                    </Popover.Description>\n                                </Popover.Popup>\n                            </Popover.Root>\n                        </div>\n                    </div>\n                </IframePortal>\n            </SlotFillProvider>;\n  }\n}",
					...CrossIframeWithSlotFill.parameters?.docs?.source
				}
			}
		};
	})))();
}
//#endregion
init_popover_with_slotfill_story();
export { CrossIframeWithSlotFill, popover_with_slotfill_story_default as default };
