import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { r as init_color_palette, t as ColorPalette } from "./color-palette-ukeD_bsp.js";
//#region ../packages/components/src/color-palette/stories/index.story.tsx
var import_jsx_dev_runtime, _jsxFileName, meta, Template, Default, InitialValue, MultipleOrigins, DuplicateColors, CSSVariables;
function init_index_story() {
	return (init_index_story = __esmMin((() => {
		init_react();
		init_color_palette();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/color-palette/stories/index.story.tsx";
		meta = {
			tags: ["manifest"],
			title: "Components/@wordpress-components/Selection & Input/Color/ColorPalette",
			id: "components-colorpalette",
			component: ColorPalette,
			argTypes: {
				as: { control: false },
				onChange: {
					action: "onChange",
					control: false
				},
				selectedSlug: { control: false },
				value: { control: false }
			},
			parameters: {
				controls: { expanded: true },
				docs: { canvas: { sourceState: "shown" } },
				componentStatus: {
					status: "recommended",
					whereUsed: "global"
				}
			}
		};
		Template = ({ onChange, value, selectedSlug, ...args }) => {
			const [color, setColor] = (0, import_react.useState)(value);
			const [slug, setSlug] = (0, import_react.useState)(selectedSlug);
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ColorPalette, {
				...args,
				value: color,
				selectedSlug: slug,
				onChange: (newColor, index, newSlug) => {
					setColor(newColor);
					setSlug(newSlug);
					onChange?.(newColor, index, newSlug);
				}
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 39,
				columnNumber: 3
			}, void 0);
		};
		Default = {
			render: Template,
			args: { colors: [
				{
					name: "Red",
					color: "#f00"
				},
				{
					name: "White",
					color: "#fff"
				},
				{
					name: "Blue",
					color: "#00f"
				}
			] }
		};
		InitialValue = {
			render: Template,
			args: {
				colors: [
					{
						name: "Red",
						color: "#f00"
					},
					{
						name: "White",
						color: "#fff"
					},
					{
						name: "Blue",
						color: "#00f"
					}
				],
				value: "#00f"
			}
		};
		MultipleOrigins = {
			parameters: { a11y: { test: "todo" } },
			render: Template,
			args: { colors: [{
				name: "Primary colors",
				colors: [
					{
						name: "Red",
						color: "#f00"
					},
					{
						name: "Yellow",
						color: "#ff0"
					},
					{
						name: "Blue",
						color: "#00f"
					}
				]
			}, {
				name: "Secondary colors",
				colors: [
					{
						name: "Orange",
						color: "#f60"
					},
					{
						name: "Green",
						color: "#0f0"
					},
					{
						name: "Purple",
						color: "#60f"
					}
				]
			}] }
		};
		DuplicateColors = {
			render: Template,
			args: {
				colors: [
					{
						name: "Dark Background",
						slug: "dark-background",
						color: "#000"
					},
					{
						name: "Dark Text",
						slug: "dark-text",
						color: "#000"
					},
					{
						name: "Brand",
						slug: "brand",
						color: "#0073aa"
					}
				],
				value: "#000",
				selectedSlug: "dark-text"
			}
		};
		CSSVariables = {
			render: (args) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				style: {
					"--red": "#f00",
					"--yellow": "#ff0",
					"--blue": "#00f"
				},
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Template, { ...args }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 126,
					columnNumber: 4
				}, void 0)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 119,
				columnNumber: 3
			}, void 0),
			args: { colors: [
				{
					name: "Red",
					color: "var(--red)"
				},
				{
					name: "Yellow",
					color: "var(--yellow)"
				},
				{
					name: "Blue",
					color: "var(--blue)"
				}
			] }
		};
		Default.parameters = {
			...Default.parameters,
			docs: {
				...Default.parameters?.docs,
				source: {
					originalSource: "{\n  render: Template,\n  args: {\n    colors: [{\n      name: 'Red',\n      color: '#f00'\n    }, {\n      name: 'White',\n      color: '#fff'\n    }, {\n      name: 'Blue',\n      color: '#00f'\n    }]\n  }\n}",
					...Default.parameters?.docs?.source
				}
			}
		};
		InitialValue.parameters = {
			...InitialValue.parameters,
			docs: {
				...InitialValue.parameters?.docs,
				source: {
					originalSource: "{\n  render: Template,\n  args: {\n    colors: [{\n      name: 'Red',\n      color: '#f00'\n    }, {\n      name: 'White',\n      color: '#fff'\n    }, {\n      name: 'Blue',\n      color: '#00f'\n    }],\n    value: '#00f'\n  }\n}",
					...InitialValue.parameters?.docs?.source
				}
			}
		};
		MultipleOrigins.parameters = {
			...MultipleOrigins.parameters,
			docs: {
				...MultipleOrigins.parameters?.docs,
				source: {
					originalSource: "{\n  parameters: {\n    // FIXME: Multiple Origins: origin groups are missing required ARIA children (aria-required-children).\n    // See: https://github.com/WordPress/gutenberg/issues/81596\n    a11y: {\n      test: 'todo'\n    }\n  },\n  render: Template,\n  args: {\n    colors: [{\n      name: 'Primary colors',\n      colors: [{\n        name: 'Red',\n        color: '#f00'\n      }, {\n        name: 'Yellow',\n        color: '#ff0'\n      }, {\n        name: 'Blue',\n        color: '#00f'\n      }]\n    }, {\n      name: 'Secondary colors',\n      colors: [{\n        name: 'Orange',\n        color: '#f60'\n      }, {\n        name: 'Green',\n        color: '#0f0'\n      }, {\n        name: 'Purple',\n        color: '#60f'\n      }]\n    }]\n  }\n}",
					...MultipleOrigins.parameters?.docs?.source
				}
			}
		};
		DuplicateColors.parameters = {
			...DuplicateColors.parameters,
			docs: {
				...DuplicateColors.parameters?.docs,
				source: {
					originalSource: "{\n  render: Template,\n  args: {\n    colors: [{\n      name: 'Dark Background',\n      slug: 'dark-background',\n      color: '#000'\n    }, {\n      name: 'Dark Text',\n      slug: 'dark-text',\n      color: '#000'\n    }, {\n      name: 'Brand',\n      slug: 'brand',\n      color: '#0073aa'\n    }],\n    value: '#000',\n    selectedSlug: 'dark-text'\n  }\n}",
					...DuplicateColors.parameters?.docs?.source
				}
			}
		};
		CSSVariables.parameters = {
			...CSSVariables.parameters,
			docs: {
				...CSSVariables.parameters?.docs,
				source: {
					originalSource: "{\n  render: args => <div style={{\n    '--red': '#f00',\n    '--yellow': '#ff0',\n    '--blue': '#00f'\n  }}>\n            <Template {...args} />\n        </div>,\n  args: {\n    colors: [{\n      name: 'Red',\n      color: 'var(--red)'\n    }, {\n      name: 'Yellow',\n      color: 'var(--yellow)'\n    }, {\n      name: 'Blue',\n      color: 'var(--blue)'\n    }]\n  }\n}",
					...CSSVariables.parameters?.docs?.source
				}
			}
		};
	})))();
}
//#endregion
init_index_story();
export { CSSVariables, Default, DuplicateColors, InitialValue, MultipleOrigins, meta as default };
