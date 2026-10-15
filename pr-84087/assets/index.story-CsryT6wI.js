import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { J as Inserter, Ot as ExperimentalBlockEditorProvider, Y as init_inserter, kt as init_provider } from "./utils-DWipWnH0.js";
import { n as registerCoreBlocks, t as init_build_module } from "./build-module-zKn0yH5b.js";
import { h as library_default, m as init_library } from "./use-entity-records-C9hLYX8K.js";
//#region ../packages/block-editor/src/components/inserter/stories/utils/fixtures.js
var patterns, patternCategories, reusableBlocks;
function init_fixtures() {
	return (init_fixtures = __esmMin((() => {
		patterns = [{
			categories: ["featured", "text"],
			content: "<!-- wp:heading {\"align\":\"wide\",\"style\":{\"typography\":{\"fontSize\":\"48px\",\"lineHeight\":\"1.1\"}}} -->\n<h2 class=\"alignwide\" id=\"we-re-a-studio-in-berlin-with-an-international-practice-in-architecture-urban-planning-and-interior-design-we-believe-in-sharing-knowledge-and-promoting-dialogue-to-increase-the-creative-potential-of-collaboration\" style=\"font-size:48px;line-height:1.1\">We're a studio in Berlin with an international practice in architecture, urban planning and interior design. We believe in sharing knowledge and promoting dialogue to increase the creative potential of collaboration.</h2>\n<!-- /wp:heading -->",
			description: "Heading text",
			keywords: ["large text", "title"],
			name: "heading",
			title: "Heading"
		}];
		patternCategories = [{
			name: "featured",
			label: "Featured"
		}, {
			name: "text",
			label: "Text"
		}];
		reusableBlocks = [{
			content: {
				raw: "<!-- wp:paragraph -->\n<p>This is reusable</p>\n<!-- /wp:paragraph -->",
				protected: false,
				block_version: 1
			},
			date: "2022-09-12T13:28:06",
			date_gmt: "2022-09-12T13:28:06",
			id: 70,
			link: "http://localhost:8888/?p=70",
			modified: "2022-09-12T13:28:06",
			modified_gmt: "2022-09-12T13:28:06",
			password: "",
			slug: "simple-paragraph",
			status: "publish",
			template: "",
			title: { raw: "Simple paragraph" },
			type: "wp_block"
		}];
	})))();
}
//#endregion
//#region ../packages/block-editor/src/components/inserter/stories/index.story.jsx
var import_jsx_dev_runtime, _jsxFileName, index_story_default, wrapperStyle, LibraryWithoutPatterns, LibraryWithPatterns, LibraryWithPatternsAndReusableBlocks, FullInserter, QuickInserter;
function init_index_story() {
	return (init_index_story = __esmMin((() => {
		init_build_module();
		init_library();
		init_provider();
		init_fixtures();
		init_inserter();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/block-editor/src/components/inserter/stories/index.story.jsx";
		index_story_default = {
			id: "blockeditor-inserter",
			title: "Editor/Block Editor/Inserter"
		};
		registerCoreBlocks();
		wrapperStyle = {
			margin: "24px",
			height: 400,
			border: "1px solid #f3f3f3",
			display: "inline-block"
		};
		LibraryWithoutPatterns = () => {
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ExperimentalBlockEditorProvider, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				style: wrapperStyle,
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(library_default, { showInserterHelpPanel: true }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 26,
					columnNumber: 5
				}, void 0)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 25,
				columnNumber: 4
			}, void 0) }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 24,
				columnNumber: 3
			}, void 0);
		};
		LibraryWithPatterns = () => {
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ExperimentalBlockEditorProvider, {
				settings: {
					__experimentalBlockPatternCategories: patternCategories,
					__experimentalBlockPatterns: patterns
				},
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					style: wrapperStyle,
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(library_default, { showInserterHelpPanel: true }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 41,
						columnNumber: 5
					}, void 0)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 40,
					columnNumber: 4
				}, void 0)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 34,
				columnNumber: 3
			}, void 0);
		};
		LibraryWithPatternsAndReusableBlocks = () => {
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ExperimentalBlockEditorProvider, {
				settings: {
					__experimentalBlockPatternCategories: patternCategories,
					__experimentalBlockPatterns: patterns,
					__experimentalReusableBlocks: reusableBlocks
				},
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					style: wrapperStyle,
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(library_default, { showInserterHelpPanel: true }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 57,
						columnNumber: 5
					}, void 0)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 56,
					columnNumber: 4
				}, void 0)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 49,
				columnNumber: 3
			}, void 0);
		};
		FullInserter = () => {
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ExperimentalBlockEditorProvider, {
				settings: {
					__experimentalBlockPatternCategories: patternCategories,
					__experimentalBlockPatterns: patterns,
					__experimentalReusableBlocks: reusableBlocks
				},
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					style: wrapperStyle,
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Inserter, {}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 73,
						columnNumber: 5
					}, void 0)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 72,
					columnNumber: 4
				}, void 0)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 65,
				columnNumber: 3
			}, void 0);
		};
		QuickInserter = () => {
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ExperimentalBlockEditorProvider, {
				settings: {
					__experimentalBlockPatternCategories: patternCategories,
					__experimentalBlockPatterns: patterns,
					__experimentalReusableBlocks: reusableBlocks
				},
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					style: wrapperStyle,
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Inserter, { __experimentalIsQuick: true }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 89,
						columnNumber: 5
					}, void 0)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 88,
					columnNumber: 4
				}, void 0)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 81,
				columnNumber: 3
			}, void 0);
		};
		LibraryWithoutPatterns.__docgenInfo = {
			"description": "",
			"methods": [],
			"displayName": "LibraryWithoutPatterns"
		};
		LibraryWithPatterns.__docgenInfo = {
			"description": "",
			"methods": [],
			"displayName": "LibraryWithPatterns"
		};
		LibraryWithPatternsAndReusableBlocks.__docgenInfo = {
			"description": "",
			"methods": [],
			"displayName": "LibraryWithPatternsAndReusableBlocks"
		};
		FullInserter.__docgenInfo = {
			"description": "",
			"methods": [],
			"displayName": "FullInserter"
		};
		QuickInserter.__docgenInfo = {
			"description": "",
			"methods": [],
			"displayName": "QuickInserter"
		};
		LibraryWithoutPatterns.parameters = {
			...LibraryWithoutPatterns.parameters,
			docs: {
				...LibraryWithoutPatterns.parameters?.docs,
				source: {
					originalSource: "() => {\n  return <ExperimentalBlockEditorProvider>\n            <div style={wrapperStyle}>\n                <BlockLibrary showInserterHelpPanel />\n            </div>\n        </ExperimentalBlockEditorProvider>;\n}",
					...LibraryWithoutPatterns.parameters?.docs?.source
				}
			}
		};
		LibraryWithPatterns.parameters = {
			...LibraryWithPatterns.parameters,
			docs: {
				...LibraryWithPatterns.parameters?.docs,
				source: {
					originalSource: "() => {\n  return <ExperimentalBlockEditorProvider settings={{\n    __experimentalBlockPatternCategories: patternCategories,\n    __experimentalBlockPatterns: patterns\n  }}>\n            <div style={wrapperStyle}>\n                <BlockLibrary showInserterHelpPanel />\n            </div>\n        </ExperimentalBlockEditorProvider>;\n}",
					...LibraryWithPatterns.parameters?.docs?.source
				}
			}
		};
		LibraryWithPatternsAndReusableBlocks.parameters = {
			...LibraryWithPatternsAndReusableBlocks.parameters,
			docs: {
				...LibraryWithPatternsAndReusableBlocks.parameters?.docs,
				source: {
					originalSource: "() => {\n  return <ExperimentalBlockEditorProvider settings={{\n    __experimentalBlockPatternCategories: patternCategories,\n    __experimentalBlockPatterns: patterns,\n    __experimentalReusableBlocks: reusableBlocks\n  }}>\n            <div style={wrapperStyle}>\n                <BlockLibrary showInserterHelpPanel />\n            </div>\n        </ExperimentalBlockEditorProvider>;\n}",
					...LibraryWithPatternsAndReusableBlocks.parameters?.docs?.source
				}
			}
		};
		FullInserter.parameters = {
			...FullInserter.parameters,
			docs: {
				...FullInserter.parameters?.docs,
				source: {
					originalSource: "() => {\n  return <ExperimentalBlockEditorProvider settings={{\n    __experimentalBlockPatternCategories: patternCategories,\n    __experimentalBlockPatterns: patterns,\n    __experimentalReusableBlocks: reusableBlocks\n  }}>\n            <div style={wrapperStyle}>\n                <Inserter />\n            </div>\n        </ExperimentalBlockEditorProvider>;\n}",
					...FullInserter.parameters?.docs?.source
				}
			}
		};
		QuickInserter.parameters = {
			...QuickInserter.parameters,
			docs: {
				...QuickInserter.parameters?.docs,
				source: {
					originalSource: "() => {\n  return <ExperimentalBlockEditorProvider settings={{\n    __experimentalBlockPatternCategories: patternCategories,\n    __experimentalBlockPatterns: patterns,\n    __experimentalReusableBlocks: reusableBlocks\n  }}>\n            <div style={wrapperStyle}>\n                <Inserter __experimentalIsQuick />\n            </div>\n        </ExperimentalBlockEditorProvider>;\n}",
					...QuickInserter.parameters?.docs?.source
				}
			}
		};
	})))();
}
//#endregion
init_index_story();
export { FullInserter, LibraryWithPatterns, LibraryWithPatternsAndReusableBlocks, LibraryWithoutPatterns, QuickInserter, index_story_default as default };
