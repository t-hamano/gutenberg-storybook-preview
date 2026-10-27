import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as init_button, t as Button } from "./button-BO8bp-IJ.js";
import { n as init_button_group, t as ButtonGroup } from "./button-group-CqWsaUcq.js";
//#region ../packages/components/src/button-group/stories/index.story.tsx
var import_jsx_dev_runtime, _jsxFileName, meta, Default;
function init_index_story() {
	return (init_index_story = __esmMin((() => {
		init_button_group();
		init_button();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/button-group/stories/index.story.tsx";
		meta = {
			title: "Components/@wordpress-components/Deprecated/ButtonGroup",
			id: "components-buttongroup",
			component: ButtonGroup,
			argTypes: { children: { control: false } },
			parameters: {
				controls: { expanded: true },
				docs: {
					canvas: { sourceState: "shown" },
					description: { component: "ButtonGroup can be used to group any related buttons together.\nTo emphasize related buttons, a group should share a common container.\n\nThis component is deprecated. Use `ToggleGroupControl` instead." }
				}
			}
		};
		Default = { args: { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
			__next40pxDefaultSize: true,
			variant: "primary",
			children: "Button 1"
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 29,
			columnNumber: 5
		}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
			__next40pxDefaultSize: true,
			children: "Button 2"
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 32,
			columnNumber: 5
		}, void 0)] }, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 28,
			columnNumber: 4
		}, void 0) } };
		Default.parameters = {
			...Default.parameters,
			docs: {
				...Default.parameters?.docs,
				source: {
					originalSource: "{\n  args: {\n    children: <>\n                <Button __next40pxDefaultSize variant=\"primary\">\n                    Button 1\n                </Button>\n                <Button __next40pxDefaultSize>Button 2</Button>\n            </>\n  }\n}",
					...Default.parameters?.docs?.source
				}
			}
		};
	})))();
}
//#endregion
init_index_story();
export { Default, meta as default };
