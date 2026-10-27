import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as init_spinner, t as Spinner } from "./spinner-DrO-0UQB.js";
import { n as init_stack, t as Stack } from "./stack-B_tyTWv7.js";
//#region ../packages/ui/src/spinner/stories/index.story.tsx
var import_jsx_dev_runtime, _jsxFileName, meta, Default, CustomSize, CustomColor, CurrentColor;
function init_index_story() {
	return (init_index_story = __esmMin((() => {
		init_stack();
		init_spinner();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/spinner/stories/index.story.tsx";
		meta = {
			tags: ["manifest"],
			title: "Components/@wordpress-ui/Spinner",
			id: "design-system-components-spinner",
			component: Spinner,
			argTypes: { color: { control: "text" } },
			parameters: { componentStatus: { status: "recommended" } }
		};
		Default = {};
		CustomSize = { args: { style: {
			width: "var(--wpds-dimension-size-lg, 40px)",
			height: "var(--wpds-dimension-size-lg, 40px)"
		} } };
		CustomColor = { args: { color: "#d92d20" } };
		CurrentColor = {
			args: { color: "currentColor" },
			render: (args) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack, {
				direction: "row",
				gap: "sm",
				align: "center",
				style: { color: "#7f32c9" },
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Spinner, { ...args }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 47,
					columnNumber: 4
				}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Loading…" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 48,
					columnNumber: 4
				}, void 0)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 41,
				columnNumber: 3
			}, void 0)
		};
		Default.parameters = {
			...Default.parameters,
			docs: {
				...Default.parameters?.docs,
				source: {
					originalSource: "{}",
					...Default.parameters?.docs?.source
				}
			}
		};
		CustomSize.parameters = {
			...CustomSize.parameters,
			docs: {
				...CustomSize.parameters?.docs,
				source: {
					originalSource: "{\n  args: {\n    style: {\n      width: 'var(--wpds-dimension-size-lg)',\n      height: 'var(--wpds-dimension-size-lg)'\n    }\n  }\n}",
					...CustomSize.parameters?.docs?.source
				}
			}
		};
		CustomColor.parameters = {
			...CustomColor.parameters,
			docs: {
				...CustomColor.parameters?.docs,
				source: {
					originalSource: "{\n  args: {\n    color: '#d92d20'\n  }\n}",
					...CustomColor.parameters?.docs?.source
				}
			}
		};
		CurrentColor.parameters = {
			...CurrentColor.parameters,
			docs: {
				...CurrentColor.parameters?.docs,
				source: {
					originalSource: "{\n  args: {\n    color: 'currentColor'\n  },\n  render: args => <Stack direction=\"row\" gap=\"sm\" align=\"center\" style={{\n    color: '#7f32c9'\n  }}>\n            <Spinner {...args} />\n            <span>Loading…</span>\n        </Stack>\n}",
					...CurrentColor.parameters?.docs?.source
				}
			}
		};
	})))();
}
//#endregion
init_index_story();
export { CurrentColor, CustomColor, CustomSize, Default, meta as default };
