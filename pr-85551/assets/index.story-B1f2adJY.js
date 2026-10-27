import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { r as init_react_platform, t as createPortal } from "./react-platform-BqLbFOjq.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as init_component, t as Spacer } from "./component-Bc4OQbO4.js";
import { a as Fill, i as init_slot_fill, n as Slot, t as Provider } from "./slot-fill-BCh4-8zG.js";
//#region ../packages/components/src/slot-fill/stories/index.story.tsx
function IframePortal({ children }) {
	const [bodyNode, setBodyNode] = (0, import_react.useState)(null);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("iframe", {
		title: "Cross-document SlotFill styles",
		srcDoc: "<!doctype html><html><body></body></html>",
		onLoad: (event) => {
			setBodyNode(event.currentTarget.contentDocument?.body ?? null);
		},
		style: {
			border: 0,
			height: 160,
			width: "100%"
		},
		children: bodyNode && createPortal(children, bodyNode)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 16,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime, _jsxFileName, meta, Default, WithFillProps, WithSlotChildren, WithContext, CrossDocumentStyles;
function init_index_story() {
	return (init_index_story = __esmMin((() => {
		init_react(), init_react_platform();
		init_slot_fill();
		init_component();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/slot-fill/stories/index.story.tsx";
		meta = {
			tags: ["manifest"],
			component: Slot,
			title: "Components/@wordpress-components/Utilities/SlotFill",
			id: "components-slotfill",
			subcomponents: {
				Fill,
				SlotFillProvider: Provider
			},
			argTypes: {
				name: { control: false },
				as: { control: { type: "text" } },
				fillProps: { control: false }
			},
			parameters: {
				controls: { expanded: true },
				docs: { source: { state: "open" } },
				componentStatus: {
					status: "recommended",
					whereUsed: "global"
				}
			}
		};
		Default = (props) => {
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Provider, { children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { children: "Profile" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 57,
					columnNumber: 4
				}, void 0),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: ["Name: ", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Slot, {
					...props,
					name: "name"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 59,
					columnNumber: 11
				}, void 0)] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 58,
					columnNumber: 4
				}, void 0),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: ["Age: ", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Slot, {
					...props,
					name: "age"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 62,
					columnNumber: 10
				}, void 0)] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 61,
					columnNumber: 4
				}, void 0),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Fill, {
					name: "name",
					children: "Grace"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 64,
					columnNumber: 4
				}, void 0),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Fill, {
					name: "age",
					children: "33"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 65,
					columnNumber: 4
				}, void 0)
			] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 56,
				columnNumber: 3
			}, void 0);
		};
		Default.args = {
			bubblesVirtually: true,
			as: "span"
		};
		WithFillProps = (props) => {
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Provider, { children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { children: "Profile" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 77,
					columnNumber: 4
				}, void 0),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
					"Name:",
					" ",
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Slot, {
						...props,
						name: "name",
						fillProps: { name: "Grace" }
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 80,
						columnNumber: 5
					}, void 0)
				] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 78,
					columnNumber: 4
				}, void 0),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: ["Age: ", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Slot, {
					...props,
					name: "age",
					fillProps: { age: 33 }
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 87,
					columnNumber: 10
				}, void 0)] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 86,
					columnNumber: 4
				}, void 0),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Fill, {
					name: "name",
					children: (fillProps) => fillProps.name
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 90,
					columnNumber: 4
				}, void 0),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Fill, {
					name: "age",
					children: (fillProps) => fillProps.age
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 91,
					columnNumber: 4
				}, void 0)
			] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 76,
				columnNumber: 3
			}, void 0);
		};
		WithFillProps.args = { ...Default.args };
		WithSlotChildren = (props) => {
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Provider, { children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { children: "Profile" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 102,
					columnNumber: 4
				}, void 0),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: ["Name:", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Slot, {
					...props,
					name: "name",
					children: (fills) => {
						return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							style: { color: "red" },
							children: fills
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 109,
							columnNumber: 8
						}, void 0);
					}
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 106,
					columnNumber: 5
				}, void 0)] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 103,
					columnNumber: 4
				}, void 0),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: ["Age:", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Slot, {
					...props,
					name: "age",
					children: (fills) => {
						return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							style: { color: "red" },
							children: fills
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 120,
							columnNumber: 8
						}, void 0);
					}
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 117,
					columnNumber: 5
				}, void 0)] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 114,
					columnNumber: 4
				}, void 0),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Fill, {
					name: "name",
					children: "Alice"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 125,
					columnNumber: 4
				}, void 0),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Fill, {
					name: "age",
					children: "18"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 126,
					columnNumber: 4
				}, void 0)
			] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 101,
				columnNumber: 3
			}, void 0);
		};
		WithSlotChildren.args = { ...Default.args };
		WithContext = (props) => {
			const Context = (0, import_react.createContext)("");
			const ContextFill = ({ name }) => {
				const value = (0, import_react.useContext)(Context);
				return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Fill, {
					name,
					children: value
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 138,
					columnNumber: 10
				}, void 0);
			};
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Provider, { children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { children: "Profile" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 142,
					columnNumber: 4
				}, void 0),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: ["Name: ", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Slot, {
					...props,
					name: "name"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 144,
					columnNumber: 11
				}, void 0)] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 143,
					columnNumber: 4
				}, void 0),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: ["Age: ", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Slot, {
					...props,
					name: "age"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 147,
					columnNumber: 10
				}, void 0)] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 146,
					columnNumber: 4
				}, void 0),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Context.Provider, {
					value: "Grace",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ContextFill, { name: "name" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 150,
						columnNumber: 5
					}, void 0)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 149,
					columnNumber: 4
				}, void 0),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Context.Provider, {
					value: 33,
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ContextFill, { name: "age" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 153,
						columnNumber: 5
					}, void 0)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 152,
					columnNumber: 4
				}, void 0)
			] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 141,
				columnNumber: 3
			}, void 0);
		};
		WithContext.args = { ...Default.args };
		CrossDocumentStyles = () => {
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Provider, { children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "The content below should have 32px of padding inside its outline." }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 165,
					columnNumber: 4
				}, void 0),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IframePortal, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Slot, {
					name: "cross-document-styles",
					bubblesVirtually: true
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 170,
					columnNumber: 5
				}, void 0) }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 169,
					columnNumber: 4
				}, void 0),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Fill, {
					name: "cross-document-styles",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Spacer, {
						padding: 8,
						style: {
							display: "inline-block",
							outline: "2px solid currentColor"
						},
						children: "SCSS module styles rendered in another document"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 173,
						columnNumber: 5
					}, void 0)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 172,
					columnNumber: 4
				}, void 0)
			] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 164,
				columnNumber: 3
			}, void 0);
		};
		Default.parameters = {
			...Default.parameters,
			docs: {
				...Default.parameters?.docs,
				source: {
					originalSource: "props => {\n  return <SlotFillProvider>\n            <h2>Profile</h2>\n            <p>\n                Name: <Slot {...props} name=\"name\" />\n            </p>\n            <p>\n                Age: <Slot {...props} name=\"age\" />\n            </p>\n            <Fill name=\"name\">Grace</Fill>\n            <Fill name=\"age\">33</Fill>\n        </SlotFillProvider>;\n}",
					...Default.parameters?.docs?.source
				}
			}
		};
		WithFillProps.parameters = {
			...WithFillProps.parameters,
			docs: {
				...WithFillProps.parameters?.docs,
				source: {
					originalSource: "props => {\n  return <SlotFillProvider>\n            <h2>Profile</h2>\n            <p>\n                Name:{' '}\n                <Slot {...props} name=\"name\" fillProps={{\n        name: 'Grace'\n      }} />\n            </p>\n            <p>\n                Age: <Slot {...props} name=\"age\" fillProps={{\n        age: 33\n      }} />\n            </p>\n\n            <Fill name=\"name\">{fillProps => fillProps.name}</Fill>\n            <Fill name=\"age\">{fillProps => fillProps.age}</Fill>\n        </SlotFillProvider>;\n}",
					...WithFillProps.parameters?.docs?.source
				}
			}
		};
		WithSlotChildren.parameters = {
			...WithSlotChildren.parameters,
			docs: {
				...WithSlotChildren.parameters?.docs,
				source: {
					originalSource: "props => {\n  return <SlotFillProvider>\n            <h2>Profile</h2>\n            <p>\n                Name:\n                {/* @ts-expect-error Not supported children for `<Slot />` when `bubblesVirtually` is true. */}\n                <Slot {...props} name=\"name\">\n                    {fills => {\n          return <span style={{\n            color: 'red'\n          }}>{fills}</span>;\n        }}\n                </Slot>\n            </p>\n            <p>\n                Age:\n                {/* @ts-expect-error Not support children for `<Slot />` when `bubblesVirtually` is true. */}\n                <Slot {...props} name=\"age\">\n                    {fills => {\n          return <span style={{\n            color: 'red'\n          }}>{fills}</span>;\n        }}\n                </Slot>\n            </p>\n            <Fill name=\"name\">Alice</Fill>\n            <Fill name=\"age\">18</Fill>\n        </SlotFillProvider>;\n}",
					...WithSlotChildren.parameters?.docs?.source
				}
			}
		};
		WithContext.parameters = {
			...WithContext.parameters,
			docs: {
				...WithContext.parameters?.docs,
				source: {
					originalSource: "props => {\n  const Context = createContext<string | number>('');\n  const ContextFill = ({\n    name\n  }: {\n    name: string;\n  }) => {\n    const value = useContext(Context);\n    return <Fill name={name}>{value}</Fill>;\n  };\n  return <SlotFillProvider>\n            <h2>Profile</h2>\n            <p>\n                Name: <Slot {...props} name=\"name\" />\n            </p>\n            <p>\n                Age: <Slot {...props} name=\"age\" />\n            </p>\n            <Context.Provider value=\"Grace\">\n                <ContextFill name=\"name\" />\n            </Context.Provider>\n            <Context.Provider value={33}>\n                <ContextFill name=\"age\" />\n            </Context.Provider>\n        </SlotFillProvider>;\n}",
					...WithContext.parameters?.docs?.source
				}
			}
		};
		CrossDocumentStyles.parameters = {
			...CrossDocumentStyles.parameters,
			docs: {
				...CrossDocumentStyles.parameters?.docs,
				source: {
					originalSource: "() => {\n  return <SlotFillProvider>\n            <p>\n                The content below should have 32px of padding inside its\n                outline.\n            </p>\n            <IframePortal>\n                <Slot name=\"cross-document-styles\" bubblesVirtually />\n            </IframePortal>\n            <Fill name=\"cross-document-styles\">\n                <Spacer padding={8} style={{\n        display: 'inline-block',\n        outline: '2px solid currentColor'\n      }}>\n                    SCSS module styles rendered in another document\n                </Spacer>\n            </Fill>\n        </SlotFillProvider>;\n}",
					...CrossDocumentStyles.parameters?.docs?.source
				}
			}
		};
	})))();
}
//#endregion
init_index_story();
export { CrossDocumentStyles, Default, WithContext, WithFillProps, WithSlotChildren, meta as default };
