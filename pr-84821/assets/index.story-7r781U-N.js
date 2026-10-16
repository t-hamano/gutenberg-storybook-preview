import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as init_draggable_chip, t as BlockDraggableChip } from "./draggable-chip-yiN_r-qT.js";
//#region ../packages/block-editor/src/components/block-draggable/stories/index.story.jsx
var import_jsx_dev_runtime, _jsxFileName, index_story_default, _default;
function init_index_story() {
	return (init_index_story = __esmMin((() => {
		init_draggable_chip();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/block-editor/src/components/block-draggable/stories/index.story.jsx";
		index_story_default = {
			id: "blockeditor-blockdraggable",
			title: "Editor/Block Editor/BlockDraggable"
		};
		_default = () => {
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				style: {
					margin: "24px 0",
					position: "relative"
				},
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BlockDraggableChip, { count: 2 }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 13,
					columnNumber: 4
				}, void 0)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 12,
				columnNumber: 3
			}, void 0);
		};
		_default.__docgenInfo = {
			"description": "",
			"methods": [],
			"displayName": "_default"
		};
		_default.parameters = {
			..._default.parameters,
			docs: {
				..._default.parameters?.docs,
				source: {
					originalSource: "() => {\n  // Create a wrapper box for the absolutely-positioned child component.\n  const wrapperStyle = {\n    margin: '24px 0',\n    position: 'relative'\n  };\n  return <div style={wrapperStyle}>\n            <BlockDraggableChip count={2} />\n        </div>;\n}",
					..._default.parameters?.docs?.source
				}
			}
		};
	})))();
}
//#endregion
init_index_story();
export { _default, index_story_default as default };
