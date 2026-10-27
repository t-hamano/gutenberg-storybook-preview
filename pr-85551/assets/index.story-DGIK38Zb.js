import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { r as format_lowercase_default, t as format_uppercase_default } from "./format-uppercase-BaeJ1P62.js";
import { i as init_component, r as ToggleGroupControl } from "./component-CBkIK7Xd.js";
import { n as init_component$1, t as ToggleGroupControlOption } from "./component-DovGk6Y8.js";
import { n as init_component$2, t as ToggleGroupControlOptionIcon } from "./component-Dw3SMkJP.js";
import { r as init_build_module } from "./library.story-CbQx3MQ6.js";
//#region ../packages/components/src/toggle-group-control/stories/index.story.tsx
var import_jsx_dev_runtime, _jsxFileName, meta, Template, mapPropsToOptionComponent, mapPropsToOptionIconComponent, Default, WithTooltip, WithIcons, Deselectable, Disabled;
function init_index_story() {
	return (init_index_story = __esmMin((() => {
		init_react();
		init_build_module();
		init_component(), init_component$1(), init_component$2();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/toggle-group-control/stories/index.story.tsx";
		meta = {
			component: ToggleGroupControl,
			subcomponents: {
				ToggleGroupControlOption,
				ToggleGroupControlOptionIcon
			},
			title: "Components/@wordpress-components/Selection & Input/Common/ToggleGroupControl",
			id: "components-togglegroupcontrol",
			argTypes: {
				help: { control: { type: "text" } },
				onChange: { action: "onChange" },
				value: { control: false }
			},
			tags: ["status-experimental", "manifest"],
			parameters: {
				controls: { expanded: true },
				docs: { canvas: { sourceState: "shown" } },
				componentStatus: {
					status: "recommended",
					whereUsed: "global",
					notes: "Will be superseded by `ToggleGroupControl` in `@wordpress/ui`, but continue using for now."
				}
			}
		};
		Template = ({ onChange, ...props }) => {
			const [value, setValue] = (0, import_react.useState)(props.value);
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ToggleGroupControl, {
				...props,
				onChange: (...changeArgs) => {
					setValue(...changeArgs);
					onChange?.(...changeArgs);
				},
				value
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 47,
				columnNumber: 3
			}, void 0);
		};
		mapPropsToOptionComponent = ({ value, ...props }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ToggleGroupControlOption, {
			value,
			...props
		}, value, false, {
			fileName: _jsxFileName,
			lineNumber: 62,
			columnNumber: 2
		}, void 0);
		mapPropsToOptionIconComponent = ({ value, ...props }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ToggleGroupControlOptionIcon, {
			value,
			...props
		}, value, false, {
			fileName: _jsxFileName,
			lineNumber: 69,
			columnNumber: 2
		}, void 0);
		Default = Template.bind({});
		Default.args = {
			children: [
				{
					value: "left",
					label: "Left"
				},
				{
					value: "center",
					label: "Center"
				},
				{
					value: "right",
					label: "Right"
				},
				{
					value: "justify",
					label: "Justify"
				}
			].map(mapPropsToOptionComponent),
			help: "Help text to describe the control.",
			isBlock: true,
			label: "Label"
		};
		WithTooltip = Template.bind({});
		WithTooltip.args = {
			...Default.args,
			children: [{
				value: "asc",
				label: "A→Z",
				"aria-label": "Ascending",
				showTooltip: true
			}, {
				value: "desc",
				label: "Z→A",
				"aria-label": "Descending",
				showTooltip: true
			}].map(mapPropsToOptionComponent)
		};
		WithIcons = Template.bind({});
		WithIcons.args = {
			...Default.args,
			children: [{
				value: "uppercase",
				label: "Uppercase",
				icon: format_uppercase_default
			}, {
				value: "lowercase",
				label: "Lowercase",
				icon: format_lowercase_default
			}].map(mapPropsToOptionIconComponent),
			isBlock: false
		};
		Deselectable = Template.bind({});
		Deselectable.args = {
			...WithIcons.args,
			isDeselectable: true
		};
		Disabled = Template.bind({});
		Disabled.args = {
			...Default.args,
			disabled: true,
			value: "left"
		};
		try {
			WithTooltip.__docgenInfo = {
				"description": "A tooltip can be shown for each option by enabling the `showTooltip` prop.\nThe `aria-label` will be used in the tooltip if provided. Otherwise, the\n`label` will be used.",
				"displayName": "WithTooltip",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/toggle-group-control/stories/index.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			WithIcons.__docgenInfo = {
				"description": "The `ToggleGroupControlOptionIcon` component can be used for icon options. A `label` is required\non each option for accessibility, which will be shown in a tooltip.",
				"displayName": "WithIcons",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/toggle-group-control/stories/index.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			Deselectable.__docgenInfo = {
				"description": "When the `isDeselectable` prop is true, the option can be deselected by clicking on it again.",
				"displayName": "Deselectable",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/toggle-group-control/stories/index.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			Disabled.__docgenInfo = {
				"description": "When the `disabled` prop is true, the control is unselectable.",
				"displayName": "Disabled",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/toggle-group-control/stories/index.story.tsx",
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
					originalSource: "({\n  onChange,\n  ...props\n}) => {\n  const [value, setValue] = useState<ToggleGroupControlProps['value']>(props.value);\n  return <ToggleGroupControl {...props} onChange={(...changeArgs) => {\n    setValue(...changeArgs);\n    onChange?.(...changeArgs);\n  }} value={value} />;\n}",
					...Default.parameters?.docs?.source
				}
			}
		};
		WithTooltip.parameters = {
			...WithTooltip.parameters,
			docs: {
				...WithTooltip.parameters?.docs,
				source: {
					originalSource: "({\n  onChange,\n  ...props\n}) => {\n  const [value, setValue] = useState<ToggleGroupControlProps['value']>(props.value);\n  return <ToggleGroupControl {...props} onChange={(...changeArgs) => {\n    setValue(...changeArgs);\n    onChange?.(...changeArgs);\n  }} value={value} />;\n}",
					...WithTooltip.parameters?.docs?.source
				},
				description: {
					story: "A tooltip can be shown for each option by enabling the `showTooltip` prop.\nThe `aria-label` will be used in the tooltip if provided. Otherwise, the\n`label` will be used.",
					...WithTooltip.parameters?.docs?.description
				}
			}
		};
		WithIcons.parameters = {
			...WithIcons.parameters,
			docs: {
				...WithIcons.parameters?.docs,
				source: {
					originalSource: "({\n  onChange,\n  ...props\n}) => {\n  const [value, setValue] = useState<ToggleGroupControlProps['value']>(props.value);\n  return <ToggleGroupControl {...props} onChange={(...changeArgs) => {\n    setValue(...changeArgs);\n    onChange?.(...changeArgs);\n  }} value={value} />;\n}",
					...WithIcons.parameters?.docs?.source
				},
				description: {
					story: "The `ToggleGroupControlOptionIcon` component can be used for icon options. A `label` is required\non each option for accessibility, which will be shown in a tooltip.",
					...WithIcons.parameters?.docs?.description
				}
			}
		};
		Deselectable.parameters = {
			...Deselectable.parameters,
			docs: {
				...Deselectable.parameters?.docs,
				source: {
					originalSource: "({\n  onChange,\n  ...props\n}) => {\n  const [value, setValue] = useState<ToggleGroupControlProps['value']>(props.value);\n  return <ToggleGroupControl {...props} onChange={(...changeArgs) => {\n    setValue(...changeArgs);\n    onChange?.(...changeArgs);\n  }} value={value} />;\n}",
					...Deselectable.parameters?.docs?.source
				},
				description: {
					story: "When the `isDeselectable` prop is true, the option can be deselected by clicking on it again.",
					...Deselectable.parameters?.docs?.description
				}
			}
		};
		Disabled.parameters = {
			...Disabled.parameters,
			docs: {
				...Disabled.parameters?.docs,
				source: {
					originalSource: "({\n  onChange,\n  ...props\n}) => {\n  const [value, setValue] = useState<ToggleGroupControlProps['value']>(props.value);\n  return <ToggleGroupControl {...props} onChange={(...changeArgs) => {\n    setValue(...changeArgs);\n    onChange?.(...changeArgs);\n  }} value={value} />;\n}",
					...Disabled.parameters?.docs?.source
				},
				description: {
					story: "When the `disabled` prop is true, the control is unselectable.",
					...Disabled.parameters?.docs?.description
				}
			}
		};
	})))();
}
//#endregion
init_index_story();
export { Default, Deselectable, Disabled, WithIcons, WithTooltip, meta as default };
