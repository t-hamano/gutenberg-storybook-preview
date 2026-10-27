import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as init_control$1, t as ColorGradientControl } from "./control-D5B5R99m.js";
//#region ../packages/block-editor/src/components/color-palette/control.tsx
function ColorPaletteControl({ onChange, value, ...otherProps }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(ColorGradientControl, {
		...otherProps,
		onColorChange: onChange,
		colorValue: value,
		gradients: [],
		disableCustomGradients: true
	}, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 10,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime$1, _jsxFileName$1;
function init_control() {
	return (init_control = __esmMin((() => {
		init_control$1();
		import_jsx_dev_runtime$1 = require_jsx_dev_runtime();
		_jsxFileName$1 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/block-editor/src/components/color-palette/control.tsx";
		try {
			ColorPaletteControl.__docgenInfo = {
				"description": "",
				"displayName": "control",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/block-editor/src/components/color-palette/control.tsx",
				"methods": [],
				"props": {
					"onChange": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/color-palette/types.ts",
							"name": "ColorPaletteControlProps"
						}],
						"description": "Called with the selected color.",
						"name": "onChange",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/color-palette/types.ts",
							"name": "ColorPaletteControlProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "((color?: string, slug?: string) => void) | undefined" }
					},
					"value": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/color-palette/types.ts",
							"name": "ColorPaletteControlProps"
						}],
						"description": "The selected color.",
						"name": "value",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/color-palette/types.ts",
							"name": "ColorPaletteControlProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"className": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/colors-gradients/types.ts",
							"name": "ColorGradientControlProps"
						}],
						"description": "",
						"name": "className",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/colors-gradients/types.ts",
							"name": "ColorGradientControlProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"label": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/colors-gradients/types.ts",
							"name": "ColorGradientControlProps"
						}],
						"description": "",
						"name": "label",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/colors-gradients/types.ts",
							"name": "ColorGradientControlProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "ReactNode" }
					},
					"headingLevel": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/colors-gradients/types.ts",
							"name": "ColorGradientControlProps"
						}],
						"description": "",
						"name": "headingLevel",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/colors-gradients/types.ts",
							"name": "ColorGradientControlProps"
						},
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "HeadingSize",
							"value": [
								{ "value": "1" },
								{ "value": "\"1\"" },
								{ "value": "\"2\"" },
								{ "value": "\"3\"" },
								{ "value": "\"4\"" },
								{ "value": "2" },
								{ "value": "3" },
								{ "value": "4" },
								{ "value": "5" },
								{ "value": "6" },
								{ "value": "\"5\"" },
								{ "value": "\"6\"" }
							]
						}
					},
					"onGradientChange": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/colors-gradients/types.ts",
							"name": "ColorGradientControlProps"
						}],
						"description": "",
						"name": "onGradientChange",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/colors-gradients/types.ts",
							"name": "ColorGradientControlProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "((gradient?: string, slug?: string) => void) | undefined" }
					},
					"colorSlug": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/colors-gradients/types.ts",
							"name": "ColorGradientControlProps"
						}],
						"description": "",
						"name": "colorSlug",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/colors-gradients/types.ts",
							"name": "ColorGradientControlProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"gradientValue": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/colors-gradients/types.ts",
							"name": "ColorGradientControlProps"
						}],
						"description": "",
						"name": "gradientValue",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/colors-gradients/types.ts",
							"name": "ColorGradientControlProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "string | null" }
					},
					"gradientSlug": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/colors-gradients/types.ts",
							"name": "ColorGradientControlProps"
						}],
						"description": "",
						"name": "gradientSlug",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/colors-gradients/types.ts",
							"name": "ColorGradientControlProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"clearable": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/colors-gradients/types.ts",
							"name": "ColorGradientControlProps"
						}],
						"description": "",
						"name": "clearable",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/colors-gradients/types.ts",
							"name": "ColorGradientControlProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"showTitle": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/colors-gradients/types.ts",
							"name": "ColorGradientControlProps"
						}],
						"description": "",
						"name": "showTitle",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/colors-gradients/types.ts",
							"name": "ColorGradientControlProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"noticeProps": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/colors-gradients/types.ts",
							"name": "ColorGradientControlProps"
						}],
						"description": "",
						"name": "noticeProps",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/colors-gradients/types.ts",
							"name": "ColorGradientControlProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "NoticeProps" }
					},
					"colors": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/colors-gradients/types.ts",
							"name": "ColorGradientOptions"
						}],
						"description": "",
						"name": "colors",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/colors-gradients/types.ts",
							"name": "ColorGradientOptions"
						},
						"required": false,
						"tags": {},
						"type": { "name": "PaletteObject[] | ColorObject[]" }
					},
					"disableCustomColors": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/colors-gradients/types.ts",
							"name": "ColorGradientOptions"
						}],
						"description": "",
						"name": "disableCustomColors",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/colors-gradients/types.ts",
							"name": "ColorGradientOptions"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"__experimentalIsRenderedInSidebar": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/colors-gradients/types.ts",
							"name": "ColorGradientOptions"
						}],
						"description": "",
						"name": "__experimentalIsRenderedInSidebar",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/colors-gradients/types.ts",
							"name": "ColorGradientOptions"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"enableAlpha": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/colors-gradients/types.ts",
							"name": "ColorGradientOptions"
						}],
						"description": "",
						"name": "enableAlpha",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/colors-gradients/types.ts",
							"name": "ColorGradientOptions"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/block-editor/src/components/color-palette/stories/control.story.tsx
var import_jsx_dev_runtime, _jsxFileName, control_story_default, Default;
function init_control_story() {
	return (init_control_story = __esmMin((() => {
		init_react();
		init_control();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/block-editor/src/components/color-palette/stories/control.story.tsx";
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
						lineNumber: 66,
						columnNumber: 5
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 65,
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
					originalSource: "{\n  render: function Template({\n    onChange,\n    ...args\n  }) {\n    const [color, setColor] = useState(args.value);\n    return <div style={{\n      maxWidth: '280px'\n    }}>\n                <ColorPaletteControl {...args} value={color} onChange={newColor => {\n        setColor(newColor);\n        // Storybook passes the `onChange` action.\n        onChange!(newColor);\n      }} />\n            </div>;\n  },\n  args: {\n    label: 'Text Color',\n    value: '#000000',\n    disableCustomColors: false,\n    colors: [{\n      name: 'Black',\n      color: '#000000',\n      slug: 'black'\n    }, {\n      name: 'Gray',\n      color: '#555555',\n      slug: 'gray'\n    }, {\n      name: 'White',\n      color: '#ffffff',\n      slug: 'white'\n    }, {\n      name: 'Red',\n      color: '#cf2e2e',\n      slug: 'red'\n    }, {\n      name: 'Blue',\n      color: '#0693e3',\n      slug: 'blue'\n    }]\n  }\n}",
					...Default.parameters?.docs?.source
				}
			}
		};
	})))();
}
//#endregion
init_control_story();
export { Default, control_story_default as default };
