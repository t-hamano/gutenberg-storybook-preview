import { n as __esmMin, r as __exportAll } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { t as copy_default } from "./copy-BUXyFGCP.js";
import { n as init_icon_button, t as IconButton } from "./icon-button-CljljWsV.js";
import { n as init_input_layout, t as InputLayout } from "./input-layout-D9fKXny2.js";
import { r as init_build_module } from "./library.story-DawnfKTW.js";
//#region ../packages/ui/src/form/primitives/input-layout/stories/index.story.tsx
var index_story_exports = /* @__PURE__ */ __exportAll({
	Compact: () => Compact,
	Default: () => Default,
	Small: () => Small,
	WithPaddedPrefix: () => WithPaddedPrefix,
	WithPrefix: () => WithPrefix,
	WithSuffixControl: () => WithSuffixControl,
	default: () => meta
});
var import_jsx_dev_runtime, _jsxFileName, meta, Default, WithPrefix, WithPaddedPrefix, WithSuffixControl, Compact, Small;
function init_index_story() {
	return (init_index_story = __esmMin((() => {
		init_build_module();
		init_input_layout();
		init_icon_button();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/primitives/input-layout/stories/index.story.tsx";
		meta = {
			tags: ["manifest"],
			title: "Components/@wordpress-ui/Form/Primitives/InputLayout",
			id: "design-system-components-form-primitives-inputlayout",
			component: InputLayout,
			subcomponents: { "InputLayout.Slot": InputLayout.Slot },
			parameters: { componentStatus: {
				status: "recommended",
				whereUsed: "global"
			} }
		};
		Default = { args: {} };
		WithPrefix = { args: { prefix: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			style: {
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				height: "100%",
				aspectRatio: "1 / 1",
				background: "#eee"
			},
			children: "$"
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 35,
			columnNumber: 4
		}, void 0) } };
		WithPaddedPrefix = { args: { prefix: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InputLayout.Slot, { children: "https://" }, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 59,
			columnNumber: 11
		}, void 0) } };
		WithSuffixControl = { args: {
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: { flex: 1 } }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 69,
				columnNumber: 13
			}, void 0),
			suffix: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InputLayout.Slot, {
				padding: "minimal",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IconButton, {
					size: "small",
					variant: "minimal",
					icon: copy_default,
					label: "Copy"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 72,
					columnNumber: 5
				}, void 0)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 71,
				columnNumber: 4
			}, void 0)
		} };
		Compact = { args: { size: "compact" } };
		Small = { args: { size: "small" } };
		try {
			WithPrefix.__docgenInfo = {
				"description": "By default, the `prefix` and `suffix` slots are rendered with no padding.",
				"displayName": "WithPrefix",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/primitives/input-layout/stories/index.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			WithPaddedPrefix.__docgenInfo = {
				"description": "The `InputLayout.Slot` component can be used to add standard padding in\nthe `prefix` or `suffix` slot.\n\nThe `padding=\"minimal\"` setting will work best when the slot content is a button or icon.",
				"displayName": "WithPaddedPrefix",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/primitives/input-layout/stories/index.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			WithSuffixControl.__docgenInfo = {
				"description": "The `padding=\"minimal\"` setting on `InputLayout.Slot` will work best when\nthe slot content is a button or icon.",
				"displayName": "WithSuffixControl",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/primitives/input-layout/stories/index.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			Small.__docgenInfo = {
				"description": "The `small` size is intended only for rare cases like the trigger\nbutton of a low-profile `select` element.",
				"displayName": "Small",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/primitives/input-layout/stories/index.story.tsx",
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
					originalSource: "{\n  args: {}\n}",
					...Default.parameters?.docs?.source
				}
			}
		};
		WithPrefix.parameters = {
			...WithPrefix.parameters,
			docs: {
				...WithPrefix.parameters?.docs,
				source: {
					originalSource: "{\n  args: {\n    prefix: <div style={{\n      display: 'flex',\n      alignItems: 'center',\n      justifyContent: 'center',\n      height: '100%',\n      aspectRatio: '1 / 1',\n      background: '#eee'\n    }}>\n                $\n            </div>\n  }\n}",
					...WithPrefix.parameters?.docs?.source
				},
				description: {
					story: "By default, the `prefix` and `suffix` slots are rendered with no padding.",
					...WithPrefix.parameters?.docs?.description
				}
			}
		};
		WithPaddedPrefix.parameters = {
			...WithPaddedPrefix.parameters,
			docs: {
				...WithPaddedPrefix.parameters?.docs,
				source: {
					originalSource: "{\n  args: {\n    prefix: <InputLayout.Slot>https://</InputLayout.Slot>\n  }\n}",
					...WithPaddedPrefix.parameters?.docs?.source
				},
				description: {
					story: "The `InputLayout.Slot` component can be used to add standard padding in\nthe `prefix` or `suffix` slot.\n\nThe `padding=\"minimal\"` setting will work best when the slot content is a button or icon.",
					...WithPaddedPrefix.parameters?.docs?.description
				}
			}
		};
		WithSuffixControl.parameters = {
			...WithSuffixControl.parameters,
			docs: {
				...WithSuffixControl.parameters?.docs,
				source: {
					originalSource: "{\n  args: {\n    children: <div style={{\n      flex: 1\n    }} />,\n    suffix: <InputLayout.Slot padding=\"minimal\">\n                <IconButton size=\"small\" variant=\"minimal\" icon={copy} label=\"Copy\" />\n            </InputLayout.Slot>\n  }\n}",
					...WithSuffixControl.parameters?.docs?.source
				},
				description: {
					story: "The `padding=\"minimal\"` setting on `InputLayout.Slot` will work best when\nthe slot content is a button or icon.",
					...WithSuffixControl.parameters?.docs?.description
				}
			}
		};
		Compact.parameters = {
			...Compact.parameters,
			docs: {
				...Compact.parameters?.docs,
				source: {
					originalSource: "{\n  args: {\n    size: 'compact'\n  }\n}",
					...Compact.parameters?.docs?.source
				}
			}
		};
		Small.parameters = {
			...Small.parameters,
			docs: {
				...Small.parameters?.docs,
				source: {
					originalSource: "{\n  args: {\n    size: 'small'\n  }\n}",
					...Small.parameters?.docs?.source
				},
				description: {
					story: "The `small` size is intended only for rare cases like the trigger\nbutton of a low-profile `select` element.",
					...Small.parameters?.docs?.description
				}
			}
		};
	})))();
}
//#endregion
export { index_story_exports as n, init_index_story as r, WithSuffixControl as t };
