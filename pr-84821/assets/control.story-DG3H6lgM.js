import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as init_control$1, t as ColorGradientControl } from "./control-Cy5aIjZj.js";
//#region ../packages/block-editor/src/components/color-palette/control.jsx
function ColorPaletteControl({ onChange, value, ...otherProps }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(ColorGradientControl, {
		...otherProps,
		onColorChange: onChange,
		colorValue: value,
		gradients: [],
		disableCustomGradients: true
	}, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 9,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime$1, _jsxFileName$1;
function init_control() {
	return (init_control = __esmMin((() => {
		init_control$1();
		import_jsx_dev_runtime$1 = require_jsx_dev_runtime();
		_jsxFileName$1 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/block-editor/src/components/color-palette/control.jsx";
		ColorPaletteControl.__docgenInfo = {
			"description": "",
			"methods": [],
			"displayName": "ColorPaletteControl"
		};
	})))();
}
//#endregion
//#region ../packages/block-editor/src/components/color-palette/stories/control.story.jsx
var import_jsx_dev_runtime, _jsxFileName, control_story_default, Default;
function init_control_story() {
	return (init_control_story = __esmMin((() => {
		init_react();
		init_control();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/block-editor/src/components/color-palette/stories/control.story.jsx";
		control_story_default = {
			id: "blockeditor-colorpalettecontrol",
			title: "Editor/Block Editor/ColorPaletteControl",
			component: ColorPaletteControl,
			parameters: {
				controls: { expanded: true },
				docs: {
					canvas: { sourceState: "shown" },
					description: { component: "ColorPaletteControl is a wrapper designed for the Block Inspector sidebar. It provides a label, a color swatch grid, and a color value input." }
				}
			},
			argTypes: {
				onChange: {
					action: "onChange",
					control: { type: null },
					table: { type: { summary: "function" } },
					description: "Callback fired when color changes."
				},
				value: {
					control: false,
					table: { disable: true }
				},
				label: {
					control: "text",
					description: "Label for the control.",
					table: { type: { summary: "string" } }
				},
				disableCustomColors: {
					control: "boolean",
					description: "Whether to allow the user to pick a custom hex color.",
					table: { type: { summary: "boolean" } }
				},
				colors: {
					control: "object",
					description: "Array of color definitions ({ name, color, slug }).",
					table: { type: { summary: "object[]" } }
				}
			}
		};
		Default = {
			render: function Template({ onChange, ...args }) {
				const [color, setColor] = (0, import_react.useState)(args.value);
				return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					style: { maxWidth: "280px" },
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ColorPaletteControl, {
						...args,
						value: color,
						onChange: (newColor) => {
							setColor(newColor);
							onChange(newColor);
						}
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 62,
						columnNumber: 5
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 61,
					columnNumber: 4
				}, this);
			},
			args: {
				label: "Text Color",
				value: "#000000",
				disableCustomColors: false,
				colors: [
					{
						name: "Black",
						color: "#000000",
						slug: "black"
					},
					{
						name: "Gray",
						color: "#555555",
						slug: "gray"
					},
					{
						name: "White",
						color: "#ffffff",
						slug: "white"
					},
					{
						name: "Red",
						color: "#cf2e2e",
						slug: "red"
					},
					{
						name: "Blue",
						color: "#0693e3",
						slug: "blue"
					}
				]
			}
		};
		Default.parameters = {
			...Default.parameters,
			docs: {
				...Default.parameters?.docs,
				source: {
					originalSource: "{\n  render: function Template({\n    onChange,\n    ...args\n  }) {\n    const [color, setColor] = useState(args.value);\n    return <div style={{\n      maxWidth: '280px'\n    }}>\n                <ColorPaletteControl {...args} value={color} onChange={newColor => {\n        setColor(newColor);\n        onChange(newColor);\n      }} />\n            </div>;\n  },\n  args: {\n    label: 'Text Color',\n    value: '#000000',\n    disableCustomColors: false,\n    colors: [{\n      name: 'Black',\n      color: '#000000',\n      slug: 'black'\n    }, {\n      name: 'Gray',\n      color: '#555555',\n      slug: 'gray'\n    }, {\n      name: 'White',\n      color: '#ffffff',\n      slug: 'white'\n    }, {\n      name: 'Red',\n      color: '#cf2e2e',\n      slug: 'red'\n    }, {\n      name: 'Blue',\n      color: '#0693e3',\n      slug: 'blue'\n    }]\n  }\n}",
					...Default.parameters?.docs?.source
				}
			}
		};
	})))();
}
//#endregion
init_control_story();
export { Default, control_story_default as default };
