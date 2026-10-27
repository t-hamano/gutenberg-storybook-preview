import { n as __esmMin, r as __exportAll } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { a as CurrentItem, c as init_button_item, n as init_root, o as init_current_item, s as ButtonItem, t as Root } from "./root-CjExOAWe.js";
//#region ../packages/ui/src/breadcrumb/stories/usage-guidelines.story.tsx
var usage_guidelines_story_exports = /* @__PURE__ */ __exportAll({
	HierarchySelection: () => HierarchySelection,
	default: () => meta
});
var import_jsx_dev_runtime, _jsxFileName, meta, HierarchySelection;
function init_usage_guidelines_story() {
	return (init_usage_guidelines_story = __esmMin((() => {
		init_react();
		init_root(), init_button_item(), init_current_item();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/breadcrumb/stories/usage-guidelines.story.tsx";
		meta = {
			title: "Components/@wordpress-ui/Breadcrumb/Usage Guidelines",
			id: "design-system-components-breadcrumb-usage-guidelines",
			parameters: { controls: { disable: true } },
			tags: ["!dev"]
		};
		HierarchySelection = { render: function SelectionExample() {
			const [selectedIndex, setSelectedIndex] = (0, import_react.useState)(3);
			const [width, setWidth] = (0, import_react.useState)(420);
			const [focusEditor, setFocusEditor] = (0, import_react.useState)(false);
			const editorRef = (0, import_react.useRef)(null);
			const labels = [
				"Document",
				"Outer group",
				"Inner group",
				"Paragraph"
			];
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				style: {
					display: "grid",
					gap: "var(--wpds-dimension-gap-md, 12px)"
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
						htmlFor: "breadcrumb-width",
						children: ["Trail width", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
							id: "breadcrumb-width",
							type: "range",
							min: 80,
							max: 600,
							value: width,
							onChange: (event) => setWidth(Number(event.target.value))
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 43,
							columnNumber: 6
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 41,
						columnNumber: 5
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
						htmlFor: "breadcrumb-focus-editor",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
							id: "breadcrumb-focus-editor",
							type: "checkbox",
							checked: focusEditor,
							onChange: (event) => setFocusEditor(event.target.checked)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 55,
							columnNumber: 6
						}, this), "Focus the editor on selection"]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 54,
						columnNumber: 5
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Root, {
						"aria-label": "Block hierarchy",
						style: {
							width,
							maxWidth: "100%"
						},
						children: [labels.slice(0, selectedIndex).map((label, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ButtonItem, {
							onClick: () => {
								setSelectedIndex(index);
								if (focusEditor) editorRef.current?.focus();
							},
							children: label
						}, label, false, {
							fileName: _jsxFileName,
							lineNumber: 72,
							columnNumber: 8
						}, this)), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CurrentItem, {
							"aria-current": "true",
							children: labels[selectedIndex]
						}, labels[selectedIndex], false, {
							fileName: _jsxFileName,
							lineNumber: 84,
							columnNumber: 6
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 65,
						columnNumber: 5
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
						htmlFor: "breadcrumb-editor",
						children: ["Editor", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("textarea", {
							id: "breadcrumb-editor",
							ref: editorRef,
							defaultValue: "Select an ancestor, or clear selection by choosing Document."
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 93,
							columnNumber: 6
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 91,
						columnNumber: 5
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
						onClick: () => setSelectedIndex(3),
						children: "Select Paragraph"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 99,
						columnNumber: 5
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 35,
				columnNumber: 4
			}, this);
		} };
		try {
			HierarchySelection.__docgenInfo = {
				"description": "Button ancestors select a position within one hierarchy. The consumer owns\nselection and intentional focus moves. Set aria-current=\"true\" on CurrentItem\nto preserve selection-list semantics after the final ancestor is removed.",
				"displayName": "HierarchySelection",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/breadcrumb/stories/usage-guidelines.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		HierarchySelection.parameters = {
			...HierarchySelection.parameters,
			docs: {
				...HierarchySelection.parameters?.docs,
				source: {
					originalSource: "{\n  render: function SelectionExample() {\n    const [selectedIndex, setSelectedIndex] = useState(3);\n    const [width, setWidth] = useState(420);\n    const [focusEditor, setFocusEditor] = useState(false);\n    const editorRef = useRef<HTMLTextAreaElement>(null);\n    const labels = ['Document', 'Outer group', 'Inner group', 'Paragraph'];\n    return <div style={{\n      display: 'grid',\n      gap: 'var(--wpds-dimension-gap-md)'\n    }}>\n                <label htmlFor=\"breadcrumb-width\">\n                    Trail width\n                    <input id=\"breadcrumb-width\" type=\"range\" min={80} max={600} value={width} onChange={event => setWidth(Number(event.target.value))} />\n                </label>\n                <label htmlFor=\"breadcrumb-focus-editor\">\n                    <input id=\"breadcrumb-focus-editor\" type=\"checkbox\" checked={focusEditor} onChange={event => setFocusEditor(event.target.checked)} />\n                    Focus the editor on selection\n                </label>\n                <Breadcrumb.Root aria-label=\"Block hierarchy\" style={{\n        width,\n        maxWidth: '100%'\n      }}>\n                    {labels.slice(0, selectedIndex).map((label, index) => <Breadcrumb.ButtonItem key={label} onClick={() => {\n          setSelectedIndex(index);\n          if (focusEditor) {\n            editorRef.current?.focus();\n          }\n        }}>\n                                {label}\n                            </Breadcrumb.ButtonItem>)}\n                    <Breadcrumb.CurrentItem aria-current=\"true\" key={labels[selectedIndex]}>\n                        {labels[selectedIndex]}\n                    </Breadcrumb.CurrentItem>\n                </Breadcrumb.Root>\n                <label htmlFor=\"breadcrumb-editor\">\n                    Editor\n                    <textarea id=\"breadcrumb-editor\" ref={editorRef} defaultValue=\"Select an ancestor, or clear selection by choosing Document.\" />\n                </label>\n                <button onClick={() => setSelectedIndex(3)}>\n                    Select Paragraph\n                </button>\n            </div>;\n  }\n}",
					...HierarchySelection.parameters?.docs?.source
				},
				description: {
					story: "Button ancestors select a position within one hierarchy. The consumer owns\nselection and intentional focus moves. Set aria-current=\"true\" on CurrentItem\nto preserve selection-list semantics after the final ancestor is removed.",
					...HierarchySelection.parameters?.docs?.description
				}
			}
		};
	})))();
}
//#endregion
export { init_usage_guidelines_story as n, usage_guidelines_story_exports as r, HierarchySelection as t };
