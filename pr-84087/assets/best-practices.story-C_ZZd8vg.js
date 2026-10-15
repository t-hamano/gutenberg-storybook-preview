import { n as __esmMin, r as __exportAll } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { a as FieldsetRoot, i as init_legend, n as init_description, o as init_root, r as FieldsetLegend, t as FieldsetDescription } from "./description-DA5EuBUN.js";
import { n as init_stack, t as Stack } from "./stack-DYoOf63N.js";
import { n as init_input_layout, t as InputLayout } from "./input-layout-D9fKXny2.js";
import { n as init_input_control, t as InputControl } from "./input-control-ChmeIMFG.js";
//#region ../packages/ui/src/form/stories/best-practices.story.tsx
var best_practices_story_exports = /* @__PURE__ */ __exportAll({
	LabelingComposedComponents: () => LabelingComposedComponents,
	default: () => meta
});
var import_jsx_dev_runtime, _jsxFileName, meta, LabelingComposedComponents;
function init_best_practices_story() {
	return (init_best_practices_story = __esmMin((() => {
		init_root(), init_legend(), init_description(), init_input_control(), init_input_layout();
		init_stack();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/stories/best-practices.story.tsx";
		meta = {
			title: "Components/@wordpress-ui/Form/Best Practices",
			id: "design-system-components-form-best-practices",
			tags: ["!dev"],
			parameters: { controls: { disable: true } }
		};
		LabelingComposedComponents = { render: function Template() {
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FieldsetRoot, { children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FieldsetLegend, { children: "Shipping weight" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 29,
					columnNumber: 5
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FieldsetDescription, { children: "Enter the total weight of your shipment." }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 30,
					columnNumber: 5
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack, {
					direction: "row",
					gap: "sm",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InputControl, {
						label: "lb, pounds",
						hideLabelFromVision: true,
						type: "number",
						suffix: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InputLayout.Slot, {
							"aria-hidden": true,
							children: "lb"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 39,
							columnNumber: 8
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 34,
						columnNumber: 6
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InputControl, {
						label: "oz, ounces",
						hideLabelFromVision: true,
						type: "number",
						suffix: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InputLayout.Slot, {
							"aria-hidden": true,
							children: "oz"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 47,
							columnNumber: 8
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 42,
						columnNumber: 6
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 33,
					columnNumber: 5
				}, this)
			] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 28,
				columnNumber: 4
			}, this);
		} };
		try {
			LabelingComposedComponents.__docgenInfo = {
				"description": "When several controls share one visible group label, use a fieldset\nlegend for the group. Give each `InputControl` its own `label` and set\n`hideLabelFromVision` so only the group label stays visible.\n\nHide a control's label only when other visible text still identifies that\ncontrol, and include that text in the `label`. The unit suffixes start\neach accessible name (`lb, pounds`) so voice-control users can speak the\ntext they see.",
				"displayName": "LabelingComposedComponents",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/stories/best-practices.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		LabelingComposedComponents.parameters = {
			...LabelingComposedComponents.parameters,
			docs: {
				...LabelingComposedComponents.parameters?.docs,
				source: {
					originalSource: "{\n  render: function Template() {\n    return <Fieldset.Root>\n                <Fieldset.Legend>Shipping weight</Fieldset.Legend>\n                <Fieldset.Description>\n                    Enter the total weight of your shipment.\n                </Fieldset.Description>\n                <Stack direction=\"row\" gap=\"sm\">\n                    <InputControl label=\"lb, pounds\" hideLabelFromVision type=\"number\" suffix={<InputLayout.Slot aria-hidden>lb</InputLayout.Slot>} />\n                    <InputControl label=\"oz, ounces\" hideLabelFromVision type=\"number\" suffix={<InputLayout.Slot aria-hidden>oz</InputLayout.Slot>} />\n                </Stack>\n            </Fieldset.Root>;\n  }\n}",
					...LabelingComposedComponents.parameters?.docs?.source
				},
				description: {
					story: "When several controls share one visible group label, use a fieldset\nlegend for the group. Give each `InputControl` its own `label` and set\n`hideLabelFromVision` so only the group label stays visible.\n\nHide a control's label only when other visible text still identifies that\ncontrol, and include that text in the `label`. The unit suffixes start\neach accessible name (`lb, pounds`) so voice-control users can speak the\ntext they see.",
					...LabelingComposedComponents.parameters?.docs?.description
				}
			}
		};
	})))();
}
//#endregion
export { init_best_practices_story as n, best_practices_story_exports as t };
