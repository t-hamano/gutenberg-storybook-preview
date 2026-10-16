import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as init_button, t as Button } from "./button-BqvmAVeL.js";
import { n as init_scroll_lock, t as ScrollLock } from "./scroll-lock-DROUbWT9.js";
//#region ../packages/components/src/scroll-lock/stories/index.story.tsx
function StripedBackground(props) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		style: {
			backgroundColor: "#fff",
			backgroundImage: "linear-gradient(transparent 50%, rgba(0, 0, 0, 0.05) 50%)",
			backgroundSize: "50px 50px",
			height: 3e3,
			position: "relative"
		},
		...props
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 25,
		columnNumber: 3
	}, this);
}
function ToggleContainer(props) {
	const { children } = props;
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		style: {
			position: "sticky",
			top: 0,
			padding: 40,
			display: "flex",
			justifyContent: "center",
			textAlign: "center"
		},
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children }, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 52,
			columnNumber: 4
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 42,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime, _jsxFileName, meta, Default;
function init_index_story() {
	return (init_index_story = __esmMin((() => {
		init_react();
		init_button();
		init_scroll_lock();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/scroll-lock/stories/index.story.tsx";
		meta = {
			tags: ["manifest"],
			component: ScrollLock,
			title: "Components/@wordpress-components/Utilities/ScrollLock",
			id: "components-scrolllock",
			parameters: {
				controls: { hideNoControlsWarning: true },
				docs: { canvas: { sourceState: "shown" } },
				componentStatus: {
					status: "recommended",
					whereUsed: "global"
				}
			}
		};
		Default = () => {
			const [isScrollLocked, setScrollLocked] = (0, import_react.useState)(false);
			const toggleLock = () => setScrollLocked(!isScrollLocked);
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				style: { height: 1e3 },
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					style: {
						overflow: "auto",
						height: 240,
						border: "1px solid lightgray"
					},
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StripedBackground, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
						"Start scrolling down. Once you scroll to the end of this container with the stripes, the rest of the page will continue scrolling. ",
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("code", { children: "ScrollLock" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 74,
							columnNumber: 27
						}, void 0),
						" prevents this \"scroll bleed\" from happening."
					] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 71,
						columnNumber: 6
					}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ToggleContainer, { children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
							__next40pxDefaultSize: true,
							variant: "primary",
							onClick: toggleLock,
							children: "Toggle Scroll Lock"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 78,
							columnNumber: 7
						}, void 0),
						isScrollLocked && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ScrollLock, {}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 85,
							columnNumber: 27
						}, void 0),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
							"Scroll locked:",
							" ",
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: isScrollLocked ? "Yes" : "No" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 88,
								columnNumber: 8
							}, void 0)
						] }, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 86,
							columnNumber: 7
						}, void 0)
					] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 77,
						columnNumber: 6
					}, void 0)] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 70,
						columnNumber: 5
					}, void 0)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 63,
					columnNumber: 4
				}, void 0)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 62,
				columnNumber: 3
			}, void 0);
		};
		Default.parameters = {
			...Default.parameters,
			docs: {
				...Default.parameters?.docs,
				source: {
					originalSource: "() => {\n  const [isScrollLocked, setScrollLocked] = useState(false);\n  const toggleLock = () => setScrollLocked(!isScrollLocked);\n  return <div style={{\n    height: 1000\n  }}>\n            <div style={{\n      overflow: 'auto',\n      height: 240,\n      border: '1px solid lightgray'\n    }}>\n                <StripedBackground>\n                    <div>\n                        Start scrolling down. Once you scroll to the end of this\n                        container with the stripes, the rest of the page will\n                        continue scrolling. <code>ScrollLock</code> prevents\n                        this &quot;scroll bleed&quot; from happening.\n                    </div>\n                    <ToggleContainer>\n                        <Button __next40pxDefaultSize variant=\"primary\" onClick={toggleLock}>\n                            Toggle Scroll Lock\n                        </Button>\n                        {isScrollLocked && <ScrollLock />}\n                        <p>\n                            Scroll locked:{' '}\n                            <strong>{isScrollLocked ? 'Yes' : 'No'}</strong>\n                        </p>\n                    </ToggleContainer>\n                </StripedBackground>\n            </div>\n        </div>;\n}",
					...Default.parameters?.docs?.source
				}
			}
		};
	})))();
}
//#endregion
init_index_story();
export { Default, meta as default };
