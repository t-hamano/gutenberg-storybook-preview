import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as useBaseControlProps } from "./hooks-0j5v704f.js";
import { n as init_base_control, t as BaseControl } from "./base-control-DsOU5iCO.js";
import { n as init_button, t as Button } from "./button-wsTfHPkm.js";
//#region ../packages/components/src/base-control/stories/index.story.tsx
var import_jsx_dev_runtime, _jsxFileName, meta, BaseControlWithTextarea, Default, WithHelpText, WithVisualLabel;
function init_index_story() {
	return (init_index_story = __esmMin((() => {
		init_base_control();
		init_button();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/base-control/stories/index.story.tsx";
		meta = {
			tags: ["manifest"],
			title: "Components/@wordpress-components/Selection & Input/Common/BaseControl",
			id: "components-basecontrol",
			component: BaseControl,
			subcomponents: { "BaseControl.VisualLabel": BaseControl.VisualLabel },
			argTypes: {
				children: { control: false },
				help: { control: { type: "text" } },
				label: { control: { type: "text" } }
			},
			parameters: {
				controls: { expanded: true },
				docs: { canvas: { sourceState: "shown" } },
				componentStatus: {
					status: "not-recommended",
					whereUsed: "global",
					notes: "Use [`Field`](?path=/docs/design-system-components-form-primitives-field--docs) from `@wordpress/ui` instead. For a purely visual label outside `Field.Root`, use `Field.VisualLabel`. For a group legend, use [`Fieldset`](?path=/docs/design-system-components-form-primitives-fieldset--docs) and `Fieldset.Legend`."
				}
			}
		};
		BaseControlWithTextarea = (props) => {
			const { baseControlProps, controlProps } = useBaseControlProps(props);
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BaseControl, {
				...baseControlProps,
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("textarea", {
					style: { display: "block" },
					...controlProps
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 35,
					columnNumber: 4
				}, void 0)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 34,
				columnNumber: 3
			}, void 0);
		};
		Default = BaseControlWithTextarea.bind({});
		Default.args = { label: "Label text" };
		WithHelpText = BaseControlWithTextarea.bind({});
		WithHelpText.args = {
			...Default.args,
			help: "Help text adds more explanation."
		};
		WithVisualLabel = (props) => {
			BaseControl.VisualLabel.displayName = "BaseControl.VisualLabel";
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BaseControl, {
				...props,
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BaseControl.VisualLabel, { children: "Visual label" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 64,
					columnNumber: 4
				}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
					__next40pxDefaultSize: true,
					variant: "secondary",
					children: "Select an author"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 66,
					columnNumber: 5
				}, void 0) }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 65,
					columnNumber: 4
				}, void 0)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 63,
				columnNumber: 3
			}, void 0);
		};
		WithVisualLabel.args = {
			...Default.args,
			help: "This button is already accessibly labeled.",
			label: void 0
		};
		try {
			WithVisualLabel.__docgenInfo = {
				"description": "`BaseControl.VisualLabel` is used to render a purely visual label inside a `BaseControl` component.\n\nIt should only be used in cases where the children being rendered inside `BaseControl` are already accessibly labeled,\ne.g., a button, but we want an additional visual label for that section equivalent to the labels `BaseControl` would\notherwise use if the `label` prop was passed.",
				"displayName": "WithVisualLabel",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/base-control/stories/index.story.tsx",
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
					originalSource: "props => {\n  const {\n    baseControlProps,\n    controlProps\n  } = useBaseControlProps(props);\n  return <BaseControl {...baseControlProps}>\n            <textarea style={{\n      display: 'block'\n    }} {...controlProps} />\n        </BaseControl>;\n}",
					...Default.parameters?.docs?.source
				}
			}
		};
		WithHelpText.parameters = {
			...WithHelpText.parameters,
			docs: {
				...WithHelpText.parameters?.docs,
				source: {
					originalSource: "props => {\n  const {\n    baseControlProps,\n    controlProps\n  } = useBaseControlProps(props);\n  return <BaseControl {...baseControlProps}>\n            <textarea style={{\n      display: 'block'\n    }} {...controlProps} />\n        </BaseControl>;\n}",
					...WithHelpText.parameters?.docs?.source
				}
			}
		};
		WithVisualLabel.parameters = {
			...WithVisualLabel.parameters,
			docs: {
				...WithVisualLabel.parameters?.docs,
				source: {
					originalSource: "props => {\n  BaseControl.VisualLabel.displayName = 'BaseControl.VisualLabel';\n  return <BaseControl {...props}>\n            <BaseControl.VisualLabel>Visual label</BaseControl.VisualLabel>\n            <div>\n                <Button __next40pxDefaultSize variant=\"secondary\">\n                    Select an author\n                </Button>\n            </div>\n        </BaseControl>;\n}",
					...WithVisualLabel.parameters?.docs?.source
				},
				description: {
					story: "`BaseControl.VisualLabel` is used to render a purely visual label inside a `BaseControl` component.\n\nIt should only be used in cases where the children being rendered inside `BaseControl` are already accessibly labeled,\ne.g., a button, but we want an additional visual label for that section equivalent to the labels `BaseControl` would\notherwise use if the `label` prop was passed.",
					...WithVisualLabel.parameters?.docs?.description
				}
			}
		};
	})))();
}
//#endregion
init_index_story();
export { Default, WithHelpText, WithVisualLabel, meta as default };
