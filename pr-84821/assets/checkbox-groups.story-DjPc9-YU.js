import { n as __esmMin, r as __exportAll } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as init_checkbox_group, t as CheckboxGroup } from "./checkbox-group-fCft7vf3.js";
import { a as FieldsetRoot, i as init_legend, n as init_description, o as init_root, r as FieldsetLegend, t as FieldsetDescription } from "./description-DL1WZ0qh.js";
import { n as init_checkbox_control, t as CheckboxControl } from "./checkbox-control-o5-aQtiR.js";
//#region ../packages/ui/src/form/stories/checkbox-groups.story.tsx
var checkbox_groups_story_exports = /* @__PURE__ */ __exportAll({
	GroupingCheckboxes: () => GroupingCheckboxes,
	Nesting: () => Nesting,
	default: () => meta
});
var import_jsx_dev_runtime, _jsxFileName, meta, GroupingCheckboxes, Nesting;
function init_checkbox_groups_story() {
	return (init_checkbox_groups_story = __esmMin((() => {
		init_react();
		init_checkbox_control(), init_checkbox_group(), init_root(), init_legend(), init_description();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/stories/checkbox-groups.story.tsx";
		meta = {
			title: "Components/@wordpress-ui/Form/Checkbox Groups",
			id: "design-system-components-form-checkbox-groups",
			tags: ["!autodocs", "!dev"],
			parameters: { controls: { disable: true } }
		};
		GroupingCheckboxes = { render: function Template() {
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FieldsetRoot, {
				render: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CheckboxGroup, { defaultValue: ["1"] }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 27,
					columnNumber: 14
				}, this),
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FieldsetLegend, { children: "Notifications" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 29,
						columnNumber: 5
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FieldsetDescription, { children: "Choose which updates you want to receive." }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 30,
						columnNumber: 5
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CheckboxControl, {
						value: "1",
						label: "Comments",
						description: "Notify me when someone comments."
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 33,
						columnNumber: 5
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CheckboxControl, {
						value: "2",
						label: "Mentions",
						description: "Notify me when someone mentions me."
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 38,
						columnNumber: 5
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CheckboxControl, {
						value: "3",
						label: "Follows",
						description: "Notify me when someone follows me."
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 43,
						columnNumber: 5
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 26,
				columnNumber: 4
			}, this);
		} };
		Nesting = { render: function Template() {
			const [fruitValue, setFruitValue] = (0, import_react.useState)(["apple"]);
			const [vegetableValue, setVegetableValue] = (0, import_react.useState)([]);
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FieldsetRoot, { children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FieldsetLegend, { children: "Produce" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 74,
					columnNumber: 5
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FieldsetDescription, { children: "Select the fruit and vegetables you want." }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 75,
					columnNumber: 5
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CheckboxGroup, {
					value: fruitValue,
					onValueChange: setFruitValue,
					allValues: [
						"apple",
						"orange",
						"banana"
					],
					"aria-label": "Fruit",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CheckboxControl, {
						parent: true,
						value: "fruit",
						label: "Fruit"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 84,
						columnNumber: 6
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CheckboxGroup.NestedItems, { children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CheckboxControl, {
							value: "apple",
							label: "Apple"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 86,
							columnNumber: 7
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CheckboxControl, {
							value: "orange",
							label: "Orange"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 87,
							columnNumber: 7
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CheckboxControl, {
							value: "banana",
							label: "Banana"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 88,
							columnNumber: 7
						}, this)
					] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 85,
						columnNumber: 6
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 78,
					columnNumber: 5
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CheckboxGroup, {
					value: vegetableValue,
					onValueChange: setVegetableValue,
					allValues: [
						"carrot",
						"lettuce",
						"pepper"
					],
					"aria-label": "Vegetable",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CheckboxControl, {
						parent: true,
						value: "vegetable",
						label: "Vegetable"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 97,
						columnNumber: 6
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CheckboxGroup.NestedItems, { children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CheckboxControl, {
							value: "carrot",
							label: "Carrot"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 103,
							columnNumber: 7
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CheckboxControl, {
							value: "lettuce",
							label: "Lettuce"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 104,
							columnNumber: 7
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CheckboxControl, {
							value: "pepper",
							label: "Pepper"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 105,
							columnNumber: 7
						}, this)
					] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 102,
						columnNumber: 6
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 91,
					columnNumber: 5
				}, this)
			] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 73,
				columnNumber: 4
			}, this);
		} };
		try {
			GroupingCheckboxes.__docgenInfo = {
				"description": "Compose checkbox groups from `CheckboxGroup` and `CheckboxControl`.\n\nThis example composes `Fieldset.Root` and `CheckboxGroup` on one element.\nThe fieldset legend gives the group its accessible name.\n\nControl checked state through `value` or `defaultValue` and `onValueChange`.",
				"displayName": "GroupingCheckboxes",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/stories/checkbox-groups.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			Nesting.__docgenInfo = {
				"description": "To control a group from a parent checkbox:\n\n1. Use `CheckboxGroup` in controlled mode.\n2. Pass the child checkbox values to `allValues`.\n3. Mark the parent checkbox with the `parent` prop.\n\n`CheckboxGroup.NestedItems` adds standard indentation to nested items.\n\nThis example uses two `CheckboxGroup`s in one `Fieldset`. Do not nest more\nthan one level for screen readers.",
				"displayName": "Nesting",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/stories/checkbox-groups.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		GroupingCheckboxes.parameters = {
			...GroupingCheckboxes.parameters,
			docs: {
				...GroupingCheckboxes.parameters?.docs,
				source: {
					originalSource: "{\n  render: function Template() {\n    return <Fieldset.Root render={<CheckboxGroup defaultValue={['1']} />}>\n                <Fieldset.Legend>Notifications</Fieldset.Legend>\n                <Fieldset.Description>\n                    Choose which updates you want to receive.\n                </Fieldset.Description>\n                <CheckboxControl value=\"1\" label=\"Comments\" description=\"Notify me when someone comments.\" />\n                <CheckboxControl value=\"2\" label=\"Mentions\" description=\"Notify me when someone mentions me.\" />\n                <CheckboxControl value=\"3\" label=\"Follows\" description=\"Notify me when someone follows me.\" />\n            </Fieldset.Root>;\n  }\n}",
					...GroupingCheckboxes.parameters?.docs?.source
				},
				description: {
					story: "Compose checkbox groups from `CheckboxGroup` and `CheckboxControl`.\n\nThis example composes `Fieldset.Root` and `CheckboxGroup` on one element.\nThe fieldset legend gives the group its accessible name.\n\nControl checked state through `value` or `defaultValue` and `onValueChange`.",
					...GroupingCheckboxes.parameters?.docs?.description
				}
			}
		};
		Nesting.parameters = {
			...Nesting.parameters,
			docs: {
				...Nesting.parameters?.docs,
				source: {
					originalSource: "{\n  render: function Template() {\n    const [fruitValue, setFruitValue] = useState(['apple']);\n    const [vegetableValue, setVegetableValue] = useState<string[]>([]);\n    return <Fieldset.Root>\n                <Fieldset.Legend>Produce</Fieldset.Legend>\n                <Fieldset.Description>\n                    Select the fruit and vegetables you want.\n                </Fieldset.Description>\n                <CheckboxGroup value={fruitValue} onValueChange={setFruitValue} allValues={['apple', 'orange', 'banana']} aria-label=\"Fruit\">\n                    <CheckboxControl parent value=\"fruit\" label=\"Fruit\" />\n                    <CheckboxGroup.NestedItems>\n                        <CheckboxControl value=\"apple\" label=\"Apple\" />\n                        <CheckboxControl value=\"orange\" label=\"Orange\" />\n                        <CheckboxControl value=\"banana\" label=\"Banana\" />\n                    </CheckboxGroup.NestedItems>\n                </CheckboxGroup>\n                <CheckboxGroup value={vegetableValue} onValueChange={setVegetableValue} allValues={['carrot', 'lettuce', 'pepper']} aria-label=\"Vegetable\">\n                    <CheckboxControl parent value=\"vegetable\" label=\"Vegetable\" />\n                    <CheckboxGroup.NestedItems>\n                        <CheckboxControl value=\"carrot\" label=\"Carrot\" />\n                        <CheckboxControl value=\"lettuce\" label=\"Lettuce\" />\n                        <CheckboxControl value=\"pepper\" label=\"Pepper\" />\n                    </CheckboxGroup.NestedItems>\n                </CheckboxGroup>\n            </Fieldset.Root>;\n  }\n}",
					...Nesting.parameters?.docs?.source
				},
				description: {
					story: "To control a group from a parent checkbox:\n\n1. Use `CheckboxGroup` in controlled mode.\n2. Pass the child checkbox values to `allValues`.\n3. Mark the parent checkbox with the `parent` prop.\n\n`CheckboxGroup.NestedItems` adds standard indentation to nested items.\n\nThis example uses two `CheckboxGroup`s in one `Fieldset`. Do not nest more\nthan one level for screen readers.",
					...Nesting.parameters?.docs?.description
				}
			}
		};
	})))();
}
//#endregion
export { init_checkbox_groups_story as n, checkbox_groups_story_exports as t };
