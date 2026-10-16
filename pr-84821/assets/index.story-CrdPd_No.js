import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as init_composite, t as Composite } from "./composite-B-GCqpDZ.js";
import { n as init_tooltip, t as Tooltip } from "./tooltip-C9B-2Nhf.js";
import { i as init_slot_fill, r as createSlotFill, t as Provider } from "./slot-fill-wFTbcTQ2.js";
//#region ../packages/components/src/composite/stories/index.story.tsx
var import_jsx_dev_runtime, _jsxFileName, meta, Default, Groups, Grid, Hover, Typeahead, ExampleSlotFill, Slot, Fill, WithSlotFill, WithTooltips;
function init_index_story() {
	return (init_index_story = __esmMin((() => {
		init_react();
		init_slot_fill();
		init_composite();
		init_tooltip();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/composite/stories/index.story.tsx";
		meta = {
			tags: ["manifest"],
			title: "Components/@wordpress-components/Utilities/Composite",
			id: "components-composite",
			component: Composite,
			subcomponents: {
				"Composite.Group": Composite.Group,
				"Composite.GroupLabel": Composite.GroupLabel,
				"Composite.Row": Composite.Row,
				"Composite.Item": Composite.Item,
				"Composite.Hover": Composite.Hover,
				"Composite.Typeahead": Composite.Typeahead,
				"Composite.Context": Composite.Context
			},
			argTypes: {
				children: { control: false },
				render: { control: false },
				setActiveId: { control: false },
				focusLoop: {
					control: "select",
					options: [
						true,
						false,
						"horizontal",
						"vertical",
						"both"
					]
				},
				focusWrap: {
					control: "select",
					options: [
						true,
						false,
						"horizontal",
						"vertical",
						"both"
					]
				}
			},
			parameters: {
				controls: { expanded: true },
				docs: { canvas: { sourceState: "shown" } },
				componentStatus: {
					status: "recommended",
					whereUsed: "global"
				}
			},
			decorators: [(Story) => {
				return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("style", { children: `
                        [data-active-item] {
                            background-color: #ffc0b5;
                        }
                    ` }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 49,
						columnNumber: 6
					}, void 0),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Story, {}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 54,
						columnNumber: 6
					}, void 0),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						style: {
							marginTop: "2em",
							fontSize: "12px",
							fontStyle: "italic"
						},
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							id: "list-title",
							children: "Notes"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 62,
							columnNumber: 7
						}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
							"aria-labelledby": "list-title",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: "The active composite item is highlighted with a different background color;" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 64,
								columnNumber: 8
							}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: "A composite item can be the active item even when it doesn't have keyboard focus." }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 68,
								columnNumber: 8
							}, void 0)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 63,
							columnNumber: 7
						}, void 0)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 55,
						columnNumber: 6
					}, void 0)
				] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 47,
					columnNumber: 5
				}, void 0);
			}]
		};
		Default = { args: { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Composite.Item, { children: "Item one" }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 85,
				columnNumber: 5
			}, void 0),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Composite.Item, { children: "Item two" }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 86,
				columnNumber: 5
			}, void 0),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Composite.Item, { children: "Item three" }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 87,
				columnNumber: 5
			}, void 0)
		] }, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 84,
			columnNumber: 4
		}, void 0) } };
		Groups = {
			...Default,
			args: {
				...Default.args,
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Composite.Group, { children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Composite.GroupLabel, { children: "Group one" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 100,
						columnNumber: 6
					}, void 0),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Composite.Item, { children: "Item 1.1" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 101,
						columnNumber: 6
					}, void 0),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Composite.Item, { children: "Item 1.2" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 102,
						columnNumber: 6
					}, void 0)
				] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 99,
					columnNumber: 5
				}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Composite.Group, { children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Composite.GroupLabel, { children: "Group two" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 105,
						columnNumber: 6
					}, void 0),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Composite.Item, { children: "Item 2.1" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 106,
						columnNumber: 6
					}, void 0),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Composite.Item, { children: "Item 2.1" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 107,
						columnNumber: 6
					}, void 0)
				] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 104,
					columnNumber: 5
				}, void 0)] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 98,
					columnNumber: 4
				}, void 0)
			}
		};
		Grid = {
			...Default,
			args: {
				...Default.args,
				role: "grid",
				"aria-label": "Composite",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Composite.Row, {
						role: "row",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Composite.Item, {
								role: "gridcell",
								children: "Item A1"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 123,
								columnNumber: 6
							}, void 0),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Composite.Item, {
								role: "gridcell",
								children: "Item A2"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 124,
								columnNumber: 6
							}, void 0),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Composite.Item, {
								role: "gridcell",
								children: "Item A3"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 125,
								columnNumber: 6
							}, void 0)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 122,
						columnNumber: 5
					}, void 0),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Composite.Row, {
						role: "row",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Composite.Item, {
								role: "gridcell",
								children: "Item B1"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 128,
								columnNumber: 6
							}, void 0),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Composite.Item, {
								role: "gridcell",
								children: "Item B2"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 129,
								columnNumber: 6
							}, void 0),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Composite.Item, {
								role: "gridcell",
								children: "Item B3"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 130,
								columnNumber: 6
							}, void 0)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 127,
						columnNumber: 5
					}, void 0),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Composite.Row, {
						role: "row",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Composite.Item, {
								role: "gridcell",
								children: "Item C1"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 133,
								columnNumber: 6
							}, void 0),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Composite.Item, {
								role: "gridcell",
								children: "Item C2"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 134,
								columnNumber: 6
							}, void 0),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Composite.Item, {
								role: "gridcell",
								children: "Item C3"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 135,
								columnNumber: 6
							}, void 0)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 132,
						columnNumber: 5
					}, void 0)
				] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 121,
					columnNumber: 4
				}, void 0)
			}
		};
		Hover = {
			...Default,
			args: {
				...Default.args,
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Composite.Hover, {
						render: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Composite.Item, {}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 148,
							columnNumber: 31
						}, void 0),
						children: "Hover item one"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 148,
						columnNumber: 5
					}, void 0),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Composite.Hover, {
						render: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Composite.Item, {}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 151,
							columnNumber: 31
						}, void 0),
						children: "Hover item two"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 151,
						columnNumber: 5
					}, void 0),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Composite.Hover, {
						render: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Composite.Item, {}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 154,
							columnNumber: 31
						}, void 0),
						children: "Hover item three"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 154,
						columnNumber: 5
					}, void 0)
				] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 147,
					columnNumber: 4
				}, void 0)
			},
			parameters: { docs: { description: { story: "Elements in the composite widget will receive focus on mouse move and lose focus to the composite base element on mouse leave." } } }
		};
		Typeahead = {
			args: {
				...Default.args,
				render: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Composite.Typeahead, {}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 172,
					columnNumber: 11
				}, void 0),
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Composite.Item, { children: "Apple" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 175,
						columnNumber: 5
					}, void 0),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Composite.Item, { children: "Banana" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 176,
						columnNumber: 5
					}, void 0),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Composite.Item, { children: "Peach" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 177,
						columnNumber: 5
					}, void 0)
				] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 174,
					columnNumber: 4
				}, void 0)
			},
			parameters: { docs: { description: { story: "When focus in on the composite widget, hitting printable character keys will move focus to the next composite item that begins with the input characters." } } }
		};
		ExampleSlotFill = createSlotFill("Example");
		Slot = () => {
			const compositeContext = (0, import_react.useContext)(Composite.Context);
			const fillProps = (0, import_react.useMemo)(() => ({ forwardedContext: [[Composite.Context.Provider, { value: compositeContext }]] }), [compositeContext]);
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ExampleSlotFill.Slot, {
				fillProps,
				bubblesVirtually: true,
				style: { display: "contents" }
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 207,
				columnNumber: 3
			}, void 0);
		};
		Fill = ({ children }) => {
			const innerMarkup = /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 221,
				columnNumber: 22
			}, void 0);
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ExampleSlotFill.Fill, { children: (fillProps) => {
				const { forwardedContext = [] } = fillProps;
				return forwardedContext.reduce((inner, [Provider, props]) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Provider, {
					...props,
					children: inner
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 231,
					columnNumber: 7
				}, void 0), innerMarkup);
			} }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 224,
				columnNumber: 3
			}, void 0);
		};
		WithSlotFill = {
			...Default,
			args: {
				...Default.args,
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Composite.Item, { children: "Item one (direct child)" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 246,
						columnNumber: 5
					}, void 0),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Slot, {}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 247,
						columnNumber: 5
					}, void 0),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Composite.Item, { children: "Item four (direct child)" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 248,
						columnNumber: 5
					}, void 0)
				] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 245,
					columnNumber: 4
				}, void 0)
			},
			decorators: [(Story) => {
				return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Provider, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Story, {}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 256,
					columnNumber: 6
				}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Fill, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Composite.Item, { children: "Item two (from slot fill)" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 259,
					columnNumber: 7
				}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Composite.Item, { children: "Item three (from slot fill)" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 262,
					columnNumber: 7
				}, void 0)] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 258,
					columnNumber: 6
				}, void 0)] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 255,
					columnNumber: 5
				}, void 0);
			}],
			parameters: { docs: {
				description: { story: "When rendering Composite components across a SlotFill, the Composite.Context should be manually forwarded from the Slot to the Fill component." },
				source: { transform: (code) => {
					return `const ExampleSlotFill = createSlotFill( 'Example' );

const Slot = () => {
  const compositeContext = useContext( Composite.Context );

  // Forward the Slot's composite context to the Fill via fillProps, so that
  // Composite components rendered inside the Fill can work as expected.
  const fillProps = useMemo(
    () => ( {
      forwardedContext: [
        [ Composite.Context.Provider, { value: compositeContext } ],
      ],
    } ),
    [ compositeContext ]
  );

  return (
    <ExampleSlotFill.Slot
      fillProps={ fillProps }
      bubblesVirtually
      style={ { display: 'contents' } }
    />
  );
};

const Fill = ( { children } ) => {
  const innerMarkup = <>{ children }</>;

  return (
    <ExampleSlotFill.Fill>
      { ( fillProps ) => {
        const { forwardedContext = [] } = fillProps;

        // Render all context providers forwarded by the Slot via fillProps.
        return forwardedContext.reduce(
          ( inner, [ Provider, props ] ) => (
            <Provider { ...props }>{ inner }</Provider>
          ),
          innerMarkup
        );
      } }
    </ExampleSlotFill.Fill>
  );
};

// In a separate component:

<SlotFillProvider>
  ${code.replaceAll("\n", "\n  ")}

  <Fill>
    <Composite.Item>
      Item two (from slot fill)
    </Composite.Item>
    <Composite.Item>
      Item three (from slot fill)
    </Composite.Item>
  </Fill>
</SlotFillProvider>`;
				} }
			} }
		};
		WithTooltips = {
			...Default,
			args: {
				...Default.args,
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tooltip, {
						text: "Tooltip one",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Composite.Item, { children: "Item one" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 373,
							columnNumber: 6
						}, void 0)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 372,
						columnNumber: 5
					}, void 0),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tooltip, {
						text: "Tooltip two",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Composite.Item, { children: "Item two" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 376,
							columnNumber: 6
						}, void 0)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 375,
						columnNumber: 5
					}, void 0),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tooltip, {
						text: "Tooltip three",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Composite.Item, { children: "Item three" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 379,
							columnNumber: 6
						}, void 0)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 378,
						columnNumber: 5
					}, void 0)
				] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 371,
					columnNumber: 4
				}, void 0)
			}
		};
		try {
			WithTooltips.__docgenInfo = {
				"description": "Combining the `Tooltip` and `Composite` component has a few caveats. And while there are a few ways to compose these two components, our recommendation is to render `Composite.Item` as a child of `Tooltip`.\n\n```jsx\n// 🔴 Does not work\n<Composite.Item\n  render={\n    <Tooltip text=\"Tooltip\">\n      <button>Item</button>\n    </Tooltip>\n  }\n/>\n\n// 🟢 Good\n<Tooltip text=\"Tooltip one\">\n  <Composite.Item>\n    Item one\n  </Composite.Item>\n</Tooltip>\n```",
				"displayName": "WithTooltips",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/composite/stories/index.story.tsx",
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
					originalSource: "{\n  args: {\n    children: <>\n                <Composite.Item>Item one</Composite.Item>\n                <Composite.Item>Item two</Composite.Item>\n                <Composite.Item>Item three</Composite.Item>\n            </>\n  }\n}",
					...Default.parameters?.docs?.source
				}
			}
		};
		Groups.parameters = {
			...Groups.parameters,
			docs: {
				...Groups.parameters?.docs,
				source: {
					originalSource: "{\n  ...Default,\n  args: {\n    ...Default.args,\n    children: <>\n                <Composite.Group>\n                    <Composite.GroupLabel>Group one</Composite.GroupLabel>\n                    <Composite.Item>Item 1.1</Composite.Item>\n                    <Composite.Item>Item 1.2</Composite.Item>\n                </Composite.Group>\n                <Composite.Group>\n                    <Composite.GroupLabel>Group two</Composite.GroupLabel>\n                    <Composite.Item>Item 2.1</Composite.Item>\n                    <Composite.Item>Item 2.1</Composite.Item>\n                </Composite.Group>\n            </>\n  }\n}",
					...Groups.parameters?.docs?.source
				}
			}
		};
		Grid.parameters = {
			...Grid.parameters,
			docs: {
				...Grid.parameters?.docs,
				source: {
					originalSource: "{\n  ...Default,\n  args: {\n    ...Default.args,\n    role: 'grid',\n    'aria-label': 'Composite',\n    children: <>\n                <Composite.Row role=\"row\">\n                    <Composite.Item role=\"gridcell\">Item A1</Composite.Item>\n                    <Composite.Item role=\"gridcell\">Item A2</Composite.Item>\n                    <Composite.Item role=\"gridcell\">Item A3</Composite.Item>\n                </Composite.Row>\n                <Composite.Row role=\"row\">\n                    <Composite.Item role=\"gridcell\">Item B1</Composite.Item>\n                    <Composite.Item role=\"gridcell\">Item B2</Composite.Item>\n                    <Composite.Item role=\"gridcell\">Item B3</Composite.Item>\n                </Composite.Row>\n                <Composite.Row role=\"row\">\n                    <Composite.Item role=\"gridcell\">Item C1</Composite.Item>\n                    <Composite.Item role=\"gridcell\">Item C2</Composite.Item>\n                    <Composite.Item role=\"gridcell\">Item C3</Composite.Item>\n                </Composite.Row>\n            </>\n  }\n}",
					...Grid.parameters?.docs?.source
				}
			}
		};
		Hover.parameters = {
			...Hover.parameters,
			docs: {
				...Hover.parameters?.docs,
				source: {
					originalSource: "{\n  ...Default,\n  args: {\n    ...Default.args,\n    children: <>\n                <Composite.Hover render={<Composite.Item />}>\n                    Hover item one\n                </Composite.Hover>\n                <Composite.Hover render={<Composite.Item />}>\n                    Hover item two\n                </Composite.Hover>\n                <Composite.Hover render={<Composite.Item />}>\n                    Hover item three\n                </Composite.Hover>\n            </>\n  },\n  parameters: {\n    docs: {\n      description: {\n        story: 'Elements in the composite widget will receive focus on mouse move and lose focus to the composite base element on mouse leave.'\n      }\n    }\n  }\n}",
					...Hover.parameters?.docs?.source
				}
			}
		};
		Typeahead.parameters = {
			...Typeahead.parameters,
			docs: {
				...Typeahead.parameters?.docs,
				source: {
					originalSource: "{\n  args: {\n    ...Default.args,\n    render: <Composite.Typeahead />,\n    children: <>\n                <Composite.Item>Apple</Composite.Item>\n                <Composite.Item>Banana</Composite.Item>\n                <Composite.Item>Peach</Composite.Item>\n            </>\n  },\n  parameters: {\n    docs: {\n      description: {\n        story: 'When focus in on the composite widget, hitting printable character keys will move focus to the next composite item that begins with the input characters.'\n      }\n    }\n  }\n}",
					...Typeahead.parameters?.docs?.source
				}
			}
		};
		WithSlotFill.parameters = {
			...WithSlotFill.parameters,
			docs: {
				...WithSlotFill.parameters?.docs,
				source: {
					originalSource: "{\n  ...Default,\n  args: {\n    ...Default.args,\n    children: <>\n                <Composite.Item>Item one (direct child)</Composite.Item>\n                <Slot />\n                <Composite.Item>Item four (direct child)</Composite.Item>\n            </>\n  },\n  decorators: [Story => {\n    return <SlotFillProvider>\n                    <Story />\n\n                    <Fill>\n                        <Composite.Item>\n                            Item two (from slot fill)\n                        </Composite.Item>\n                        <Composite.Item>\n                            Item three (from slot fill)\n                        </Composite.Item>\n                    </Fill>\n                </SlotFillProvider>;\n  }],\n  parameters: {\n    docs: {\n      description: {\n        story: 'When rendering Composite components across a SlotFill, the Composite.Context should be manually forwarded from the Slot to the Fill component.'\n      },\n      source: {\n        transform: (code: string) => {\n          return `const ExampleSlotFill = createSlotFill( 'Example' );\n\nconst Slot = () => {\n  const compositeContext = useContext( Composite.Context );\n\n  // Forward the Slot's composite context to the Fill via fillProps, so that\n  // Composite components rendered inside the Fill can work as expected.\n  const fillProps = useMemo(\n    () => ( {\n      forwardedContext: [\n        [ Composite.Context.Provider, { value: compositeContext } ],\n      ],\n    } ),\n    [ compositeContext ]\n  );\n\n  return (\n    <ExampleSlotFill.Slot\n      fillProps={ fillProps }\n      bubblesVirtually\n      style={ { display: 'contents' } }\n    />\n  );\n};\n\nconst Fill = ( { children } ) => {\n  const innerMarkup = <>{ children }</>;\n\n  return (\n    <ExampleSlotFill.Fill>\n      { ( fillProps ) => {\n        const { forwardedContext = [] } = fillProps;\n\n        // Render all context providers forwarded by the Slot via fillProps.\n        return forwardedContext.reduce(\n          ( inner, [ Provider, props ] ) => (\n            <Provider { ...props }>{ inner }</Provider>\n          ),\n          innerMarkup\n        );\n      } }\n    </ExampleSlotFill.Fill>\n  );\n};\n\n// In a separate component:\n\n<SlotFillProvider>\n  ${\n          // Add one level of indentation to match the surrounding code.\n          code.replaceAll('\\n', '\\n  ')}\n\n  <Fill>\n    <Composite.Item>\n      Item two (from slot fill)\n    </Composite.Item>\n    <Composite.Item>\n      Item three (from slot fill)\n    </Composite.Item>\n  </Fill>\n</SlotFillProvider>`;\n        }\n      }\n    }\n  }\n}",
					...WithSlotFill.parameters?.docs?.source
				}
			}
		};
		WithTooltips.parameters = {
			...WithTooltips.parameters,
			docs: {
				...WithTooltips.parameters?.docs,
				source: {
					originalSource: "{\n  ...Default,\n  args: {\n    ...Default.args,\n    children: <>\n                <Tooltip text=\"Tooltip one\">\n                    <Composite.Item>Item one</Composite.Item>\n                </Tooltip>\n                <Tooltip text=\"Tooltip two\">\n                    <Composite.Item>Item two</Composite.Item>\n                </Tooltip>\n                <Tooltip text=\"Tooltip three\">\n                    <Composite.Item>Item three</Composite.Item>\n                </Tooltip>\n            </>\n  }\n}",
					...WithTooltips.parameters?.docs?.source
				},
				description: {
					story: "Combining the `Tooltip` and `Composite` component has a few caveats. And while there are a few ways to compose these two components, our recommendation is to render `Composite.Item` as a child of `Tooltip`.\n\n```jsx\n// 🔴 Does not work\n<Composite.Item\n  render={\n    <Tooltip text=\"Tooltip\">\n      <button>Item</button>\n    </Tooltip>\n  }\n/>\n\n// 🟢 Good\n<Tooltip text=\"Tooltip one\">\n  <Composite.Item>\n    Item one\n  </Composite.Item>\n</Tooltip>\n```",
					...WithTooltips.parameters?.docs?.description
				}
			}
		};
	})))();
}
//#endregion
init_index_story();
export { Default, Grid, Groups, Hover, Typeahead, WithSlotFill, WithTooltips, meta as default };
