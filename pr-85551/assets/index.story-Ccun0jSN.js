import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as init_checkbox_group, t as CheckboxGroup } from "./checkbox-group-DDZEhl9P.js";
import { n as init_checkbox, t as Checkbox } from "./checkbox-Al_Z74hM.js";
//#region ../packages/ui/src/form/primitives/checkbox-group/stories/index.story.tsx
var import_jsx_dev_runtime, _jsxFileName, meta, Default, WithParentCheckbox;
function init_index_story() {
	return (init_index_story = __esmMin((() => {
		init_react();
		init_checkbox();
		init_checkbox_group();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/primitives/checkbox-group/stories/index.story.tsx";
		meta = {
			tags: ["manifest"],
			title: "Components/@wordpress-ui/Form/Primitives/CheckboxGroup",
			id: "design-system-components-form-primitives-checkboxgroup",
			component: CheckboxGroup,
			subcomponents: { "CheckboxGroup.NestedItems": CheckboxGroup.NestedItems },
			argTypes: { onValueChange: { action: "onValueChange" } },
			parameters: { componentStatus: {
				status: "recommended",
				whereUsed: "global"
			} }
		};
		Default = {
			args: {
				defaultValue: [],
				"aria-label": "Fruit"
			},
			render: (args) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CheckboxGroup, {
				...args,
				children: [
					"Apple",
					"Banana",
					"Orange"
				].map((label) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Checkbox, {
					value: label,
					"aria-label": label
				}, label, false, {
					fileName: _jsxFileName,
					lineNumber: 37,
					columnNumber: 5
				}, void 0))
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 35,
				columnNumber: 3
			}, void 0)
		};
		WithParentCheckbox = { render: function Template(args) {
			const [fruitValue, setFruitValue] = (0, import_react.useState)(["apple"]);
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CheckboxGroup, {
				value: fruitValue,
				onValueChange: (nextValue, ...changeArgs) => {
					setFruitValue(nextValue);
					args.onValueChange?.(nextValue, ...changeArgs);
				},
				allValues: [
					"apple",
					"orange",
					"banana"
				],
				"aria-label": "Fruit",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Checkbox, {
					parent: true,
					value: "fruit",
					"aria-label": "Fruit"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 66,
					columnNumber: 5
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CheckboxGroup.NestedItems, { children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Checkbox, {
						value: "apple",
						"aria-label": "Apple"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 68,
						columnNumber: 6
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Checkbox, {
						value: "orange",
						"aria-label": "Orange"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 69,
						columnNumber: 6
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Checkbox, {
						value: "banana",
						"aria-label": "Banana"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 70,
						columnNumber: 6
					}, this)
				] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 67,
					columnNumber: 5
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 57,
				columnNumber: 4
			}, this);
		} };
		try {
			WithParentCheckbox.__docgenInfo = {
				"description": "`CheckboxGroup` can be used to control a group of checkboxes from a single\nparent checkbox.\n\nFor screen reader accessibility, do not nest more than one level.\n\nSee the [Checkbox Groups](?path=/docs/design-system-components-form-checkbox-groups--docs#nesting)\ndocumentation for a full example.",
				"displayName": "WithParentCheckbox",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/primitives/checkbox-group/stories/index.story.tsx",
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
					originalSource: "{\n  args: {\n    defaultValue: [],\n    'aria-label': 'Fruit'\n  },\n  render: args => <CheckboxGroup {...args}>\n            {['Apple', 'Banana', 'Orange'].map(label => <Checkbox key={label} value={label} aria-label={label} />)}\n        </CheckboxGroup>\n}",
					...Default.parameters?.docs?.source
				}
			}
		};
		WithParentCheckbox.parameters = {
			...WithParentCheckbox.parameters,
			docs: {
				...WithParentCheckbox.parameters?.docs,
				source: {
					originalSource: "{\n  render: function Template(args) {\n    const [fruitValue, setFruitValue] = useState(['apple']);\n    return <CheckboxGroup value={fruitValue} onValueChange={(nextValue, ...changeArgs) => {\n      setFruitValue(nextValue);\n      args.onValueChange?.(nextValue, ...changeArgs);\n    }} allValues={['apple', 'orange', 'banana']} aria-label=\"Fruit\">\n                <Checkbox parent value=\"fruit\" aria-label=\"Fruit\" />\n                <CheckboxGroup.NestedItems>\n                    <Checkbox value=\"apple\" aria-label=\"Apple\" />\n                    <Checkbox value=\"orange\" aria-label=\"Orange\" />\n                    <Checkbox value=\"banana\" aria-label=\"Banana\" />\n                </CheckboxGroup.NestedItems>\n            </CheckboxGroup>;\n  }\n}",
					...WithParentCheckbox.parameters?.docs?.source
				},
				description: {
					story: "`CheckboxGroup` can be used to control a group of checkboxes from a single\nparent checkbox.\n\nFor screen reader accessibility, do not nest more than one level.\n\nSee the [Checkbox Groups](?path=/docs/design-system-components-form-checkbox-groups--docs#nesting)\ndocumentation for a full example.",
					...WithParentCheckbox.parameters?.docs?.description
				}
			}
		};
	})))();
}
//#endregion
init_index_story();
export { Default, WithParentCheckbox, meta as default };
