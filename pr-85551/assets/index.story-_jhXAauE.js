import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as init_text, t as Text } from "./text-wjaOyqYP.js";
import { n as init_stack, t as Stack } from "./stack-B_tyTWv7.js";
import { a as Content, c as init_header, i as init_full_bleed, l as Root, n as init_title, o as init_content, r as FullBleed, s as Header, t as Title, u as init_root } from "./title-B4jsOegk.js";
//#region ../packages/ui/src/card/stories/index.story.tsx
var import_jsx_dev_runtime, _jsxFileName, meta, Default, FullBleedCoverOnly, FullBleedCoverWithHeader, WithFullBleed, HeaderOnly, FullBleedHeroWithTitle, FullBleedHeroOnly, CustomSemantics;
function init_index_story() {
	return (init_index_story = __esmMin((() => {
		init_stack();
		init_text();
		init_root(), init_header(), init_content(), init_full_bleed(), init_title();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/card/stories/index.story.tsx";
		meta = {
			tags: ["manifest"],
			title: "Components/@wordpress-ui/Card",
			id: "design-system-components-card",
			component: Root,
			subcomponents: {
				"Card.Header": Header,
				"Card.Content": Content,
				"Card.FullBleed": FullBleed,
				"Card.Title": Title
			},
			parameters: { componentStatus: {
				status: "recommended",
				whereUsed: "global"
			} }
		};
		Default = { args: { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Header, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Title, { children: "Card title" }, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 32,
			columnNumber: 5
		}, void 0) }, "header", false, {
			fileName: _jsxFileName,
			lineNumber: 31,
			columnNumber: 4
		}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Content, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, {
			render: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 35,
				columnNumber: 20
			}, void 0),
			children: "This is the main content area. It can contain any elements. This is the main content area. It can contain any elements. This is the main content area. It can contain any elements. This is the main content area. It can contain any elements. This is the main content area. It can contain any elements. This is the main content area. It can contain any elements."
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 35,
			columnNumber: 5
		}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, {
			render: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 43,
				columnNumber: 20
			}, void 0),
			children: "This is the main content area. It can contain any elements."
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 43,
			columnNumber: 5
		}, void 0)] }, "content", true, {
			fileName: _jsxFileName,
			lineNumber: 34,
			columnNumber: 4
		}, void 0)] } };
		FullBleedCoverOnly = { args: { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Content, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FullBleed, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
			height: 180,
			background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
		} }, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 60,
			columnNumber: 6
		}, void 0) }, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 59,
			columnNumber: 5
		}, void 0) }, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 58,
			columnNumber: 4
		}, void 0) } };
		FullBleedCoverWithHeader = { args: { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Header, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Title, { children: "Card title" }, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 82,
			columnNumber: 5
		}, void 0) }, "header", false, {
			fileName: _jsxFileName,
			lineNumber: 81,
			columnNumber: 4
		}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Content, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FullBleed, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
			height: 180,
			background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
		} }, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 86,
			columnNumber: 6
		}, void 0) }, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 85,
			columnNumber: 5
		}, void 0) }, "content", false, {
			fileName: _jsxFileName,
			lineNumber: 84,
			columnNumber: 4
		}, void 0)] } };
		WithFullBleed = { args: { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Header, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Title, { children: "Featured image" }, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 107,
			columnNumber: 5
		}, void 0) }, "header", false, {
			fileName: _jsxFileName,
			lineNumber: 106,
			columnNumber: 4
		}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Content, {
			render: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack, {
				direction: "column",
				gap: "lg"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 111,
				columnNumber: 14
			}, void 0),
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FullBleed, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
				height: 160,
				background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
			} }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 114,
				columnNumber: 6
			}, void 0) }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 113,
				columnNumber: 5
			}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, {
				render: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 122,
					columnNumber: 20
				}, void 0),
				children: "Content below the full-bleed area."
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 122,
				columnNumber: 5
			}, void 0)]
		}, "content", true, {
			fileName: _jsxFileName,
			lineNumber: 109,
			columnNumber: 4
		}, void 0)] } };
		HeaderOnly = { args: { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Header, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Title, { children: "Simple card" }, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 135,
			columnNumber: 5
		}, void 0) }, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 134,
			columnNumber: 4
		}, void 0) } };
		FullBleedHeroWithTitle = { args: { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Header, {
			render: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack, {
				direction: "column",
				gap: "lg"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 151,
				columnNumber: 14
			}, void 0),
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FullBleed, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
				height: 180,
				background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
			} }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 154,
				columnNumber: 6
			}, void 0) }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 153,
				columnNumber: 5
			}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Title, { children: "Hero image card" }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 162,
				columnNumber: 5
			}, void 0)]
		}, "header", true, {
			fileName: _jsxFileName,
			lineNumber: 149,
			columnNumber: 4
		}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Content, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, {
			render: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 165,
				columnNumber: 20
			}, void 0),
			children: "The image above bleeds to the card's top and side edges."
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 165,
			columnNumber: 5
		}, void 0) }, "content", false, {
			fileName: _jsxFileName,
			lineNumber: 164,
			columnNumber: 4
		}, void 0)] } };
		FullBleedHeroOnly = { args: { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Header, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FullBleed, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
			height: 180,
			background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
		} }, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 184,
			columnNumber: 6
		}, void 0) }, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 183,
			columnNumber: 5
		}, void 0) }, "header", false, {
			fileName: _jsxFileName,
			lineNumber: 182,
			columnNumber: 4
		}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Content, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, {
			render: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 194,
				columnNumber: 20
			}, void 0),
			children: "The image above bleeds to the card's top and side edges."
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 194,
			columnNumber: 5
		}, void 0) }, "content", false, {
			fileName: _jsxFileName,
			lineNumber: 193,
			columnNumber: 4
		}, void 0)] } };
		CustomSemantics = { args: {
			render: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 210,
				columnNumber: 11
			}, void 0),
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Header, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Title, {
				render: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 213,
					columnNumber: 26
				}, void 0),
				children: "Section heading"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 213,
				columnNumber: 5
			}, void 0) }, "header", false, {
				fileName: _jsxFileName,
				lineNumber: 212,
				columnNumber: 4
			}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Content, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, {
				render: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 216,
					columnNumber: 20
				}, void 0),
				children: "Semantically meaningful card content."
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 216,
				columnNumber: 5
			}, void 0) }, "content", false, {
				fileName: _jsxFileName,
				lineNumber: 215,
				columnNumber: 4
			}, void 0)]
		} };
		try {
			FullBleedCoverOnly.__docgenInfo = {
				"description": "`Card.FullBleed` as the sole child of `Card.Content` spans edge-to-edge\nwith no padding around it.",
				"displayName": "FullBleedCoverOnly",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/card/stories/index.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			FullBleedCoverWithHeader.__docgenInfo = {
				"description": "When `Card.FullBleed` is the sole child of `Card.Content` and a\n`Card.Header` sits above it, the image bumps against the card's side and\nbottom edges while the header retains its normal padding.",
				"displayName": "FullBleedCoverWithHeader",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/card/stories/index.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			WithFullBleed.__docgenInfo = {
				"description": "`Card.FullBleed` breaks out of the card's padding to span\nedge-to-edge. Useful for images, dividers, or embedded content.",
				"displayName": "WithFullBleed",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/card/stories/index.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			HeaderOnly.__docgenInfo = {
				"description": "A minimal card with only a header.",
				"displayName": "HeaderOnly",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/card/stories/index.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			FullBleedHeroWithTitle.__docgenInfo = {
				"description": "When `Card.FullBleed` is the **first child** of `Card.Header`, it extends\nflush to the card's top and side edges — ideal for hero images. Content\nthat follows inside the header is padded normally.",
				"displayName": "FullBleedHeroWithTitle",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/card/stories/index.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			FullBleedHeroOnly.__docgenInfo = {
				"description": "When `Card.FullBleed` is the **only child** of `Card.Header`, it fills the\nheader entirely — top and sides flush to the card edges, no extra padding\nbelow.",
				"displayName": "FullBleedHeroOnly",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/card/stories/index.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			CustomSemantics.__docgenInfo = {
				"description": "Use the `render` prop to change the underlying HTML elements for\nbetter semantics. Here, `Card.Root` renders as a `<section>` and\n`Card.Title` renders as an `<h2>`.",
				"displayName": "CustomSemantics",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/card/stories/index.story.tsx",
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
					originalSource: "{\n  args: {\n    children: [<Card.Header key=\"header\">\n                <Card.Title>Card title</Card.Title>\n            </Card.Header>, <Card.Content key=\"content\">\n                <Text render={<p />}>\n                    This is the main content area. It can contain any elements.\n                    This is the main content area. It can contain any elements.\n                    This is the main content area. It can contain any elements.\n                    This is the main content area. It can contain any elements.\n                    This is the main content area. It can contain any elements.\n                    This is the main content area. It can contain any elements.\n                </Text>\n                <Text render={<p />}>\n                    This is the main content area. It can contain any elements.\n                </Text>\n            </Card.Content>]\n  }\n}",
					...Default.parameters?.docs?.source
				}
			}
		};
		FullBleedCoverOnly.parameters = {
			...FullBleedCoverOnly.parameters,
			docs: {
				...FullBleedCoverOnly.parameters?.docs,
				source: {
					originalSource: "{\n  args: {\n    children: <Card.Content>\n                <Card.FullBleed>\n                    <div style={{\n          height: 180,\n          background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'\n        }} />\n                </Card.FullBleed>\n            </Card.Content>\n  }\n}",
					...FullBleedCoverOnly.parameters?.docs?.source
				},
				description: {
					story: "`Card.FullBleed` as the sole child of `Card.Content` spans edge-to-edge\nwith no padding around it.",
					...FullBleedCoverOnly.parameters?.docs?.description
				}
			}
		};
		FullBleedCoverWithHeader.parameters = {
			...FullBleedCoverWithHeader.parameters,
			docs: {
				...FullBleedCoverWithHeader.parameters?.docs,
				source: {
					originalSource: "{\n  args: {\n    children: [<Card.Header key=\"header\">\n                <Card.Title>Card title</Card.Title>\n            </Card.Header>, <Card.Content key=\"content\">\n                <Card.FullBleed>\n                    <div style={{\n          height: 180,\n          background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'\n        }} />\n                </Card.FullBleed>\n            </Card.Content>]\n  }\n}",
					...FullBleedCoverWithHeader.parameters?.docs?.source
				},
				description: {
					story: "When `Card.FullBleed` is the sole child of `Card.Content` and a\n`Card.Header` sits above it, the image bumps against the card's side and\nbottom edges while the header retains its normal padding.",
					...FullBleedCoverWithHeader.parameters?.docs?.description
				}
			}
		};
		WithFullBleed.parameters = {
			...WithFullBleed.parameters,
			docs: {
				...WithFullBleed.parameters?.docs,
				source: {
					originalSource: "{\n  args: {\n    children: [<Card.Header key=\"header\">\n                <Card.Title>Featured image</Card.Title>\n            </Card.Header>, <Card.Content key=\"content\" render={<Stack direction=\"column\" gap=\"lg\" />}>\n                <Card.FullBleed>\n                    <div style={{\n          height: 160,\n          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'\n        }} />\n                </Card.FullBleed>\n                <Text render={<p />}>Content below the full-bleed area.</Text>\n            </Card.Content>]\n  }\n}",
					...WithFullBleed.parameters?.docs?.source
				},
				description: {
					story: "`Card.FullBleed` breaks out of the card's padding to span\nedge-to-edge. Useful for images, dividers, or embedded content.",
					...WithFullBleed.parameters?.docs?.description
				}
			}
		};
		HeaderOnly.parameters = {
			...HeaderOnly.parameters,
			docs: {
				...HeaderOnly.parameters?.docs,
				source: {
					originalSource: "{\n  args: {\n    children: <Card.Header>\n                <Card.Title>Simple card</Card.Title>\n            </Card.Header>\n  }\n}",
					...HeaderOnly.parameters?.docs?.source
				},
				description: {
					story: "A minimal card with only a header.",
					...HeaderOnly.parameters?.docs?.description
				}
			}
		};
		FullBleedHeroWithTitle.parameters = {
			...FullBleedHeroWithTitle.parameters,
			docs: {
				...FullBleedHeroWithTitle.parameters?.docs,
				source: {
					originalSource: "{\n  args: {\n    children: [<Card.Header key=\"header\" render={<Stack direction=\"column\" gap=\"lg\" />}>\n                <Card.FullBleed>\n                    <div style={{\n          height: 180,\n          background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'\n        }} />\n                </Card.FullBleed>\n                <Card.Title>Hero image card</Card.Title>\n            </Card.Header>, <Card.Content key=\"content\">\n                <Text render={<p />}>\n                    The image above bleeds to the card&apos;s top and side\n                    edges.\n                </Text>\n            </Card.Content>]\n  }\n}",
					...FullBleedHeroWithTitle.parameters?.docs?.source
				},
				description: {
					story: "When `Card.FullBleed` is the **first child** of `Card.Header`, it extends\nflush to the card's top and side edges — ideal for hero images. Content\nthat follows inside the header is padded normally.",
					...FullBleedHeroWithTitle.parameters?.docs?.description
				}
			}
		};
		FullBleedHeroOnly.parameters = {
			...FullBleedHeroOnly.parameters,
			docs: {
				...FullBleedHeroOnly.parameters?.docs,
				source: {
					originalSource: "{\n  args: {\n    children: [<Card.Header key=\"header\">\n                <Card.FullBleed>\n                    <div style={{\n          height: 180,\n          background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'\n        }} />\n                </Card.FullBleed>\n            </Card.Header>, <Card.Content key=\"content\">\n                <Text render={<p />}>\n                    The image above bleeds to the card&apos;s top and side\n                    edges.\n                </Text>\n            </Card.Content>]\n  }\n}",
					...FullBleedHeroOnly.parameters?.docs?.source
				},
				description: {
					story: "When `Card.FullBleed` is the **only child** of `Card.Header`, it fills the\nheader entirely — top and sides flush to the card edges, no extra padding\nbelow.",
					...FullBleedHeroOnly.parameters?.docs?.description
				}
			}
		};
		CustomSemantics.parameters = {
			...CustomSemantics.parameters,
			docs: {
				...CustomSemantics.parameters?.docs,
				source: {
					originalSource: "{\n  args: {\n    render: <section />,\n    children: [<Card.Header key=\"header\">\n                <Card.Title render={<h2 />}>Section heading</Card.Title>\n            </Card.Header>, <Card.Content key=\"content\">\n                <Text render={<p />}>\n                    Semantically meaningful card content.\n                </Text>\n            </Card.Content>]\n  }\n}",
					...CustomSemantics.parameters?.docs?.source
				},
				description: {
					story: "Use the `render` prop to change the underlying HTML elements for\nbetter semantics. Here, `Card.Root` renders as a `<section>` and\n`Card.Title` renders as an `<h2>`.",
					...CustomSemantics.parameters?.docs?.description
				}
			}
		};
	})))();
}
//#endregion
init_index_story();
export { CustomSemantics, Default, FullBleedCoverOnly, FullBleedCoverWithHeader, FullBleedHeroOnly, FullBleedHeroWithTitle, HeaderOnly, WithFullBleed, meta as default };
