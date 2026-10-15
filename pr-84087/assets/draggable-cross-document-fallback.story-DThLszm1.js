import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { r as init_react_platform, t as createPortal } from "./react-platform-BqLbFOjq.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as init_wp_compat_overlay_slot, t as getWpCompatOverlaySlot } from "./wp-compat-overlay-slot-BUcIVYRr.js";
import { n as init_style_provider, r as style_provider_default } from "./style-provider-BlGZcMa2.js";
import { n as init_draggable, t as draggable_default } from "./draggable-BTLbyQS4.js";
import { n as init_with_wp_compat_overlay_slot, t as WithWpCompatOverlaySlot } from "./with-wp-compat-overlay-slot-Dr8mwubV.js";
//#region stories/playground/draggable-cross-document-fallback.story.jsx
var import_jsx_dev_runtime, _jsxFileName, draggable_cross_document_fallback_story_default, InsideIframeWithCompatSlot;
function init_draggable_cross_document_fallback_story() {
	return (init_draggable_cross_document_fallback_story = __esmMin((() => {
		init_draggable(), init_style_provider();
		init_react_platform(), init_react();
		init_wp_compat_overlay_slot();
		init_with_wp_compat_overlay_slot();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/storybook/stories/playground/draggable-cross-document-fallback.story.jsx";
		draggable_cross_document_fallback_story_default = {
			title: "Playground/Debug fixtures/Draggable cross-document fallback",
			component: draggable_default,
			decorators: [WithWpCompatOverlaySlot]
		};
		InsideIframeWithCompatSlot = () => {
			const iframeRef = (0, import_react.useRef)(null);
			const [iframeDoc, setIframeDoc] = (0, import_react.useState)(null);
			const updateIframeDoc = () => {
				setIframeDoc(iframeRef.current?.contentDocument ?? null);
			};
			(0, import_react.useEffect)(updateIframeDoc, []);
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Drag the blue handle inside the iframe. The orange clone should appear under the cursor. If it appears offset toward the top-left of the Storybook canvas, the compat-slot cross-document fallback has regressed." }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 27,
					columnNumber: 4
				}, void 0),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("small", { children: [
					"Compat slot present in this document:",
					" ",
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("code", { children: String(typeof window !== "undefined" && getWpCompatOverlaySlot() !== void 0) }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 36,
						columnNumber: 6
					}, void 0)
				] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 34,
					columnNumber: 5
				}, void 0) }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 33,
					columnNumber: 4
				}, void 0),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("iframe", {
					ref: iframeRef,
					title: "Draggable iframe coordinate test",
					onLoad: updateIframeDoc,
					srcDoc: "<!doctype html><html><head></head><body style=\"margin:0;\"></body></html>",
					style: {
						border: "2px dashed #757575",
						height: 240,
						marginBlockStart: 80,
						marginInlineStart: 120,
						width: 360
					}
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 44,
					columnNumber: 4
				}, void 0),
				iframeDoc?.body && createPortal(/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(style_provider_default, {
					document: iframeDoc,
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						style: {
							background: "#f6f7f7",
							boxSizing: "border-box",
							fontFamily: "sans-serif",
							height: "240px",
							padding: 32
						},
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(draggable_default, {
							elementId: "iframe-draggable-source",
							transferData: {},
							__experimentalDragComponent: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								style: {
									background: "#f0b849",
									borderRadius: 4,
									color: "#1e1e1e",
									fontWeight: "var(--wpds-typography-font-weight-emphasis, 600)",
									padding: "8px 12px"
								},
								children: "Drag clone"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 73,
								columnNumber: 10
							}, void 0),
							children: ({ onDraggableStart, onDraggableEnd }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								draggable: true,
								onDragStart: onDraggableStart,
								onDragEnd: onDraggableEnd,
								style: {
									alignItems: "center",
									background: "#3858e9",
									borderRadius: 4,
									color: "white",
									cursor: "grab",
									display: "inline-flex",
									fontWeight: "var(--wpds-typography-font-weight-emphasis, 600)",
									height: 56,
									justifyContent: "center",
									padding: "0 16px"
								},
								children: "Drag from iframe"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 88,
								columnNumber: 10
							}, void 0)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 69,
							columnNumber: 8
						}, void 0)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 60,
						columnNumber: 7
					}, void 0)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 59,
					columnNumber: 6
				}, void 0), iframeDoc.body)
			] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 26,
				columnNumber: 3
			}, void 0);
		};
		InsideIframeWithCompatSlot.__docgenInfo = {
			"description": "",
			"methods": [],
			"displayName": "InsideIframeWithCompatSlot"
		};
		InsideIframeWithCompatSlot.parameters = {
			...InsideIframeWithCompatSlot.parameters,
			docs: {
				...InsideIframeWithCompatSlot.parameters?.docs,
				source: {
					originalSource: "() => {\n  const iframeRef = useRef(null);\n  const [iframeDoc, setIframeDoc] = useState(null);\n  const updateIframeDoc = () => {\n    setIframeDoc(iframeRef.current?.contentDocument ?? null);\n  };\n  useEffect(updateIframeDoc, []);\n  return <div>\n            <p>\n                Drag the blue handle inside the iframe. The orange clone should\n                appear under the cursor. If it appears offset toward the\n                top-left of the Storybook canvas, the compat-slot cross-document\n                fallback has regressed.\n            </p>\n            <p>\n                <small>\n                    Compat slot present in this document:{' '}\n                    <code>\n                        {String(typeof window !== 'undefined' && getWpCompatOverlaySlot() !== undefined)}\n                    </code>\n                </small>\n            </p>\n            <iframe ref={iframeRef} title=\"Draggable iframe coordinate test\" onLoad={updateIframeDoc} srcDoc='<!doctype html><html><head></head><body style=\"margin:0;\"></body></html>' style={{\n      border: '2px dashed #757575',\n      height: 240,\n      marginBlockStart: 80,\n      marginInlineStart: 120,\n      width: 360\n    }} />\n            {iframeDoc?.body && createPortal(<StyleProvider document={iframeDoc}>\n                        <div style={{\n        background: '#f6f7f7',\n        boxSizing: 'border-box',\n        fontFamily: 'sans-serif',\n        height: '240px',\n        padding: 32\n      }}>\n                            <Draggable elementId=\"iframe-draggable-source\" transferData={{}} __experimentalDragComponent={<div style={{\n          background: '#f0b849',\n          borderRadius: 4,\n          color: '#1e1e1e',\n          fontWeight: 'var(--wpds-typography-font-weight-emphasis)',\n          padding: '8px 12px'\n        }}>\n                                        Drag clone\n                                    </div>}>\n                                {({\n            onDraggableStart,\n            onDraggableEnd\n          }) => <div draggable onDragStart={onDraggableStart} onDragEnd={onDraggableEnd} style={{\n            alignItems: 'center',\n            background: '#3858e9',\n            borderRadius: 4,\n            color: 'white',\n            cursor: 'grab',\n            display: 'inline-flex',\n            fontWeight: 'var(--wpds-typography-font-weight-emphasis)',\n            height: 56,\n            justifyContent: 'center',\n            padding: '0 16px'\n          }}>\n                                        Drag from iframe\n                                    </div>}\n                            </Draggable>\n                        </div>\n                    </StyleProvider>, iframeDoc.body)}\n        </div>;\n}",
					...InsideIframeWithCompatSlot.parameters?.docs?.source
				}
			}
		};
	})))();
}
//#endregion
init_draggable_cross_document_fallback_story();
export { InsideIframeWithCompatSlot, draggable_cross_document_fallback_story_default as default };
