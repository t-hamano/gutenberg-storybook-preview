import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as swatch_default } from "./swatch-CK9zOIpi.js";
import { n as init_icon, t as Icon } from "./icon-BPBhgF1b.js";
import { n as init_color_indicator, t as ColorIndicator } from "./color-indicator-C4O5Zagj.js";
import { a as init_utils, i as getGradientFromCSSColors } from "./utils-D3WdnSXd.js";
import { r as init_build_module } from "./library.story-DawnfKTW.js";
//#region ../packages/components/src/duotone-picker/duotone-swatch.tsx
function DuotoneSwatch({ values }) {
	return values ? /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(ColorIndicator, { colorValue: getGradientFromCSSColors(values, "135deg") }, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 9,
		columnNumber: 3
	}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(Icon, { icon: swatch_default }, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 13,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime$1, _jsxFileName$1;
function init_duotone_swatch() {
	return (init_duotone_swatch = __esmMin((() => {
		init_build_module();
		init_color_indicator();
		init_icon();
		init_utils();
		import_jsx_dev_runtime$1 = require_jsx_dev_runtime();
		_jsxFileName$1 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/duotone-picker/duotone-swatch.tsx";
		try {
			DuotoneSwatch.__docgenInfo = {
				"description": "",
				"displayName": "DuotoneSwatch",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/duotone-picker/duotone-swatch.tsx",
				"methods": [],
				"props": { "values": {
					"defaultValue": null,
					"declarations": [{
						"fileName": "gutenberg-storybook-preview/packages/components/src/duotone-picker/types.ts",
						"name": "TypeLiteral"
					}],
					"description": "An array of colors to show or `null` to show the placeholder swatch icon.",
					"name": "values",
					"required": false,
					"tags": {},
					"type": { "name": "string[] | null" }
				} },
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/components/src/duotone-picker/stories/duotone-swatch.story.tsx
var import_jsx_dev_runtime, _jsxFileName, meta, Template, Default, SingleColor, Null;
function init_duotone_swatch_story() {
	return (init_duotone_swatch_story = __esmMin((() => {
		init_duotone_swatch();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/duotone-picker/stories/duotone-swatch.story.tsx";
		meta = {
			id: "components-duotoneswatch",
			title: "Components/@wordpress-components/DuotoneSwatch",
			component: DuotoneSwatch,
			parameters: {
				controls: { expanded: true },
				docs: { canvas: { sourceState: "shown" } },
				componentStatus: {
					status: "recommended",
					whereUsed: "editor"
				}
			}
		};
		Template = (args) => {
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DuotoneSwatch, { ...args }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 20,
				columnNumber: 9
			}, void 0);
		};
		Default = Template.bind({});
		Default.args = { values: ["#000", "#fff"] };
		SingleColor = Template.bind({});
		SingleColor.args = { values: ["pink"] };
		Null = Template.bind({});
		Null.args = { values: null };
		Default.parameters = {
			...Default.parameters,
			docs: {
				...Default.parameters?.docs,
				source: {
					originalSource: "args => {\n  return <DuotoneSwatch {...args} />;\n}",
					...Default.parameters?.docs?.source
				}
			}
		};
		SingleColor.parameters = {
			...SingleColor.parameters,
			docs: {
				...SingleColor.parameters?.docs,
				source: {
					originalSource: "args => {\n  return <DuotoneSwatch {...args} />;\n}",
					...SingleColor.parameters?.docs?.source
				}
			}
		};
		Null.parameters = {
			...Null.parameters,
			docs: {
				...Null.parameters?.docs,
				source: {
					originalSource: "args => {\n  return <DuotoneSwatch {...args} />;\n}",
					...Null.parameters?.docs?.source
				}
			}
		};
	})))();
}
//#endregion
init_duotone_swatch_story();
export { Default, Null, SingleColor, meta as default };
