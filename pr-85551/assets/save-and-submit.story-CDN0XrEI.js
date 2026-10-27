import { n as __esmMin, r as __exportAll } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as button_default, r as init_button } from "./button-BxmZjN4X.js";
import { i as init_component, n as init_component$1, r as component_default, t as component_default$1 } from "./component-BFWTGWMB.js";
import { n as init_dataform, t as DataForm } from "./dataform-hTcX7VD1.js";
//#region stories/design-system/patterns/save-and-submit.story.tsx
var save_and_submit_story_exports = /* @__PURE__ */ __exportAll({
	SaveFormLayoutCard: () => SaveFormLayoutCard,
	default: () => meta
});
var import_jsx_dev_runtime, _jsxFileName, LayoutCardSaveExample, meta, SaveFormLayoutCard;
function init_save_and_submit_story() {
	return (init_save_and_submit_story = __esmMin((() => {
		init_button(), init_component(), init_component$1();
		init_dataform();
		init_react();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/storybook/stories/design-system/patterns/save-and-submit.story.tsx";
		LayoutCardSaveExample = () => {
			const [data, setData] = (0, import_react.useState)({ title: "" });
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				style: { maxWidth: "480px" },
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(component_default, {
					size: {
						blockStart: "medium",
						blockEnd: "medium",
						inlineStart: "medium",
						inlineEnd: "medium"
					},
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(component_default$1, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DataForm, {
						data,
						fields: [{
							id: "title",
							label: "Title",
							type: "text"
						}],
						form: {
							layout: { type: "regular" },
							fields: ["title"]
						},
						onChange: (edits) => setData((previous) => ({
							...previous,
							...edits
						}))
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 20,
						columnNumber: 6
					}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(button_default, {
						variant: "primary",
						isBusy: true,
						style: { marginTop: "16px" },
						__next40pxDefaultSize: true,
						children: "Save"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 40,
						columnNumber: 6
					}, void 0)] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 19,
						columnNumber: 5
					}, void 0)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 11,
					columnNumber: 4
				}, void 0)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 10,
				columnNumber: 3
			}, void 0);
		};
		meta = {
			title: "Design System/Patterns/Save & Submit",
			component: LayoutCardSaveExample,
			parameters: { controls: { disable: true } },
			tags: ["docs-only"]
		};
		SaveFormLayoutCard = {
			name: "Save form layout card",
			render: () => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LayoutCardSaveExample, {}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 69,
				columnNumber: 16
			}, void 0)
		};
		SaveFormLayoutCard.parameters = {
			...SaveFormLayoutCard.parameters,
			docs: {
				...SaveFormLayoutCard.parameters?.docs,
				source: {
					originalSource: "{\n  name: 'Save form layout card',\n  render: () => <LayoutCardSaveExample />\n}",
					...SaveFormLayoutCard.parameters?.docs?.source
				}
			}
		};
	})))();
}
//#endregion
export { init_save_and_submit_story as n, save_and_submit_story_exports as r, SaveFormLayoutCard as t };
