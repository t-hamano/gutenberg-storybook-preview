import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as init_component, t as BorderControl } from "./component-Nnfh3qhE.js";
//#region ../packages/components/src/border-control/stories/index.story.tsx
var import_jsx_dev_runtime, _jsxFileName, meta, colors, multipleOriginColors, Template, Default, WithSlider, WithSliderCustomWidth, IsCompact, WithMultipleOrigins;
function init_index_story() {
	return (init_index_story = __esmMin((() => {
		init_react();
		init_component();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/border-control/stories/index.story.tsx";
		meta = {
			id: "components-bordercontrol",
			title: "Components/@wordpress-components/BorderControl",
			component: BorderControl,
			argTypes: {
				onChange: { action: "onChange" },
				width: { control: { type: "text" } },
				value: { control: false }
			},
			parameters: {
				controls: { expanded: true },
				docs: { canvas: { sourceState: "shown" } },
				componentStatus: {
					status: "recommended",
					whereUsed: "editor"
				}
			}
		};
		colors = [
			{
				name: "Blue 20",
				color: "#72aee6"
			},
			{
				name: "Blue 40",
				color: "#3582c4"
			},
			{
				name: "Red 40",
				color: "#e65054"
			},
			{
				name: "Red 70",
				color: "#8a2424"
			},
			{
				name: "Yellow 10",
				color: "#f2d675"
			},
			{
				name: "Yellow 40",
				color: "#bd8600"
			}
		];
		multipleOriginColors = [
			{
				name: "Default",
				colors: [{
					name: "Gray 20",
					color: "#a7aaad"
				}, {
					name: "Gray 70",
					color: "#3c434a"
				}]
			},
			{
				name: "Theme",
				colors: [
					{
						name: "Blue 20",
						color: "#72aee6"
					},
					{
						name: "Blue 40",
						color: "#3582c4"
					},
					{
						name: "Blue 70",
						color: "#0a4b78"
					}
				]
			},
			{
				name: "User",
				colors: [{
					name: "Green",
					color: "#00a32a"
				}, {
					name: "Yellow",
					color: "#f2d675"
				}]
			}
		];
		Template = ({ onChange, ...props }) => {
			const [border, setBorder] = (0, import_react.useState)();
			const onChangeMerged = (newBorder) => {
				setBorder(newBorder);
				onChange(newBorder);
			};
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BorderControl, {
				onChange: onChangeMerged,
				value: border,
				...props
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 78,
				columnNumber: 3
			}, void 0);
		};
		Default = Template.bind({});
		Default.args = {
			colors,
			label: "Border",
			enableAlpha: true,
			enableStyle: true,
			shouldSanitizeBorder: true
		};
		WithSlider = Template.bind({});
		WithSlider.args = {
			...Default.args,
			withSlider: true
		};
		WithSliderCustomWidth = Template.bind({});
		WithSliderCustomWidth.args = {
			...Default.args,
			withSlider: true,
			width: "150px"
		};
		WithSliderCustomWidth.storyName = "With Slider (Custom Width)";
		IsCompact = Template.bind({});
		IsCompact.args = {
			...Default.args,
			isCompact: true
		};
		WithMultipleOrigins = Template.bind({});
		WithMultipleOrigins.args = {
			...Default.args,
			colors: multipleOriginColors
		};
		try {
			WithSlider.__docgenInfo = {
				"description": "Render a slider beside the control.",
				"displayName": "WithSlider",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/border-control/stories/index.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			WithSliderCustomWidth.__docgenInfo = {
				"description": "When rendering with a slider, the `width` prop is useful to customize the width of the number input.",
				"displayName": "WithSliderCustomWidth",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/border-control/stories/index.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			IsCompact.__docgenInfo = {
				"description": "Restrict the width of the control and prevent it from expanding to take up additional space.\nWhen `true`, the `width` prop will be ignored.",
				"displayName": "IsCompact",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/border-control/stories/index.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			WithMultipleOrigins.__docgenInfo = {
				"description": "The `colors` object can contain multiple origins.",
				"displayName": "WithMultipleOrigins",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/border-control/stories/index.story.tsx",
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
					originalSource: "({\n  onChange,\n  ...props\n}) => {\n  const [border, setBorder] = useState<Border>();\n  const onChangeMerged: ComponentProps<typeof BorderControl>['onChange'] = newBorder => {\n    setBorder(newBorder);\n    onChange(newBorder);\n  };\n  return <BorderControl onChange={onChangeMerged} value={border} {...props} />;\n}",
					...Default.parameters?.docs?.source
				}
			}
		};
		WithSlider.parameters = {
			...WithSlider.parameters,
			docs: {
				...WithSlider.parameters?.docs,
				source: {
					originalSource: "({\n  onChange,\n  ...props\n}) => {\n  const [border, setBorder] = useState<Border>();\n  const onChangeMerged: ComponentProps<typeof BorderControl>['onChange'] = newBorder => {\n    setBorder(newBorder);\n    onChange(newBorder);\n  };\n  return <BorderControl onChange={onChangeMerged} value={border} {...props} />;\n}",
					...WithSlider.parameters?.docs?.source
				},
				description: {
					story: "Render a slider beside the control.",
					...WithSlider.parameters?.docs?.description
				}
			}
		};
		WithSliderCustomWidth.parameters = {
			...WithSliderCustomWidth.parameters,
			docs: {
				...WithSliderCustomWidth.parameters?.docs,
				source: {
					originalSource: "({\n  onChange,\n  ...props\n}) => {\n  const [border, setBorder] = useState<Border>();\n  const onChangeMerged: ComponentProps<typeof BorderControl>['onChange'] = newBorder => {\n    setBorder(newBorder);\n    onChange(newBorder);\n  };\n  return <BorderControl onChange={onChangeMerged} value={border} {...props} />;\n}",
					...WithSliderCustomWidth.parameters?.docs?.source
				},
				description: {
					story: "When rendering with a slider, the `width` prop is useful to customize the width of the number input.",
					...WithSliderCustomWidth.parameters?.docs?.description
				}
			}
		};
		IsCompact.parameters = {
			...IsCompact.parameters,
			docs: {
				...IsCompact.parameters?.docs,
				source: {
					originalSource: "({\n  onChange,\n  ...props\n}) => {\n  const [border, setBorder] = useState<Border>();\n  const onChangeMerged: ComponentProps<typeof BorderControl>['onChange'] = newBorder => {\n    setBorder(newBorder);\n    onChange(newBorder);\n  };\n  return <BorderControl onChange={onChangeMerged} value={border} {...props} />;\n}",
					...IsCompact.parameters?.docs?.source
				},
				description: {
					story: "Restrict the width of the control and prevent it from expanding to take up additional space.\nWhen `true`, the `width` prop will be ignored.",
					...IsCompact.parameters?.docs?.description
				}
			}
		};
		WithMultipleOrigins.parameters = {
			...WithMultipleOrigins.parameters,
			docs: {
				...WithMultipleOrigins.parameters?.docs,
				source: {
					originalSource: "({\n  onChange,\n  ...props\n}) => {\n  const [border, setBorder] = useState<Border>();\n  const onChangeMerged: ComponentProps<typeof BorderControl>['onChange'] = newBorder => {\n    setBorder(newBorder);\n    onChange(newBorder);\n  };\n  return <BorderControl onChange={onChangeMerged} value={border} {...props} />;\n}",
					...WithMultipleOrigins.parameters?.docs?.source
				},
				description: {
					story: "The `colors` object can contain multiple origins.",
					...WithMultipleOrigins.parameters?.docs?.description
				}
			}
		};
	})))();
}
//#endregion
init_index_story();
export { Default, IsCompact, WithMultipleOrigins, WithSlider, WithSliderCustomWidth, meta as default };
