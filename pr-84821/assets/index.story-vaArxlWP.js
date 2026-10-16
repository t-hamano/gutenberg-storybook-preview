import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as init_gradient_picker, t as GradientPicker } from "./gradient-picker-DDsEGIqP.js";
//#region ../packages/components/src/gradient-picker/stories/index.story.tsx
var import_jsx_dev_runtime, fn, _jsxFileName, meta, GRADIENTS, Template, Default, WithNoExistingGradients, DuplicateGradients, MultipleOrigins, CSSVariables;
function init_index_story() {
	return (init_index_story = __esmMin((() => {
		init_react();
		init_gradient_picker();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		({fn} = __STORYBOOK_MODULE_TEST__);
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/gradient-picker/stories/index.story.tsx";
		meta = {
			tags: ["manifest"],
			title: "Components/@wordpress-components/Selection & Input/Color/GradientPicker",
			id: "components-gradientpicker",
			component: GradientPicker,
			parameters: {
				controls: { expanded: true },
				docs: { canvas: { sourceState: "shown" } },
				componentStatus: {
					status: "recommended",
					whereUsed: "global"
				}
			},
			args: { onChange: fn() },
			argTypes: {
				selectedSlug: { control: false },
				value: { control: false }
			}
		};
		GRADIENTS = [
			{
				name: "Vivid cyan blue to vivid purple",
				gradient: "linear-gradient(135deg,rgba(6,147,227,1) 0%,rgb(155,81,224) 100%)",
				slug: "vivid-cyan-blue-to-vivid-purple"
			},
			{
				name: "Light green cyan to vivid green cyan",
				gradient: "linear-gradient(135deg,rgb(122,220,180) 0%,rgb(0,208,130) 100%)",
				slug: "light-green-cyan-to-vivid-green-cyan"
			},
			{
				name: "Luminous vivid amber to luminous vivid orange",
				gradient: "linear-gradient(135deg,rgba(252,185,0,1) 0%,rgba(255,105,0,1) 100%)",
				slug: "luminous-vivid-amber-to-luminous-vivid-orange"
			},
			{
				name: "Luminous vivid orange to vivid red",
				gradient: "linear-gradient(135deg,rgba(255,105,0,1) 0%,rgb(207,46,46) 100%)",
				slug: "luminous-vivid-orange-to-vivid-red"
			},
			{
				name: "Very light gray to cyan bluish gray",
				gradient: "linear-gradient(135deg,rgb(238,238,238) 0%,rgb(169,184,195) 100%)",
				slug: "very-light-gray-to-cyan-bluish-gray"
			},
			{
				name: "Cool to warm spectrum",
				gradient: "linear-gradient(135deg,rgb(74,234,220) 0%,rgb(151,120,209) 20%,rgb(207,42,186) 40%,rgb(238,44,130) 60%,rgb(251,105,98) 80%,rgb(254,248,76) 100%)",
				slug: "cool-to-warm-spectrum"
			},
			{
				name: "HSL blue to purple",
				gradient: "linear-gradient(135deg,hsl(200, 100%, 50%) 0%,hsl(280, 100%, 60%) 100%)",
				slug: "hsl-blue-to-purple"
			},
			{
				name: "HSLA green to red",
				gradient: "linear-gradient(135deg,hsla(120, 100%, 40%, 0.85) 0%,hsla(0, 100%, 50%, 0.85) 100%)",
				slug: "hsla-green-to-red"
			}
		];
		Template = ({ onChange, value, selectedSlug, ...props }) => {
			const [gradient, setGradient] = (0, import_react.useState)(value ?? null);
			const [slug, setSlug] = (0, import_react.useState)(selectedSlug);
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(GradientPicker, {
				...props,
				value: gradient,
				selectedSlug: slug,
				onChange: (currentGradient, index, newSlug) => {
					setGradient(currentGradient);
					setSlug(newSlug);
					onChange?.(currentGradient, index, newSlug);
				}
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 93,
				columnNumber: 3
			}, void 0);
		};
		Default = {
			render: Template,
			args: { gradients: GRADIENTS }
		};
		WithNoExistingGradients = {
			render: Template,
			args: { gradients: [] }
		};
		DuplicateGradients = {
			render: Template,
			args: {
				gradients: [
					{
						name: "Dark Background",
						slug: "dark-background",
						gradient: "linear-gradient(135deg,rgba(6,147,227,1) 0%,rgb(155,81,224) 100%)"
					},
					{
						name: "Dark Text",
						slug: "dark-text",
						gradient: "linear-gradient(135deg,rgba(6,147,227,1) 0%,rgb(155,81,224) 100%)"
					},
					{
						name: "Brand",
						slug: "brand",
						gradient: "linear-gradient(135deg,rgb(122,220,180) 0%,rgb(0,208,130) 100%)"
					}
				],
				value: "linear-gradient(135deg,rgba(6,147,227,1) 0%,rgb(155,81,224) 100%)",
				selectedSlug: "dark-text",
				disableCustomGradients: true
			}
		};
		MultipleOrigins = {
			parameters: { a11y: { test: "todo" } },
			render: Template,
			args: { gradients: [{
				name: "Origin 1",
				gradients: GRADIENTS
			}, {
				name: "Origin 2",
				gradients: GRADIENTS
			}] }
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
					lineNumber: 173,
					columnNumber: 4
				}, void 0)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 166,
				columnNumber: 3
			}, void 0),
			args: { gradients: [
				{
					name: "Red to Yellow",
					gradient: "linear-gradient(135deg,var(--red) 0%,var(--yellow) 100%)",
					slug: "red-to-yellow"
				},
				{
					name: "Yellow to Blue",
					gradient: "linear-gradient(135deg,var(--yellow) 0%,var(--blue) 100%)",
					slug: "yellow-to-blue"
				},
				{
					name: "Blue to Red",
					gradient: "linear-gradient(135deg,var(--blue) 0%,var(--red) 100%)",
					slug: "blue-to-red"
				}
			] }
		};
		Default.parameters = {
			...Default.parameters,
			docs: {
				...Default.parameters?.docs,
				source: {
					originalSource: "{\n  render: Template,\n  args: {\n    gradients: GRADIENTS\n  }\n}",
					...Default.parameters?.docs?.source
				}
			}
		};
		WithNoExistingGradients.parameters = {
			...WithNoExistingGradients.parameters,
			docs: {
				...WithNoExistingGradients.parameters?.docs,
				source: {
					originalSource: "{\n  render: Template,\n  args: {\n    gradients: []\n  }\n}",
					...WithNoExistingGradients.parameters?.docs?.source
				}
			}
		};
		DuplicateGradients.parameters = {
			...DuplicateGradients.parameters,
			docs: {
				...DuplicateGradients.parameters?.docs,
				source: {
					originalSource: "{\n  render: Template,\n  args: {\n    gradients: [{\n      name: 'Dark Background',\n      slug: 'dark-background',\n      gradient: 'linear-gradient(135deg,rgba(6,147,227,1) 0%,rgb(155,81,224) 100%)'\n    }, {\n      name: 'Dark Text',\n      slug: 'dark-text',\n      gradient: 'linear-gradient(135deg,rgba(6,147,227,1) 0%,rgb(155,81,224) 100%)'\n    }, {\n      name: 'Brand',\n      slug: 'brand',\n      gradient: 'linear-gradient(135deg,rgb(122,220,180) 0%,rgb(0,208,130) 100%)'\n    }],\n    value: 'linear-gradient(135deg,rgba(6,147,227,1) 0%,rgb(155,81,224) 100%)',\n    selectedSlug: 'dark-text',\n    disableCustomGradients: true\n  }\n}",
					...DuplicateGradients.parameters?.docs?.source
				}
			}
		};
		MultipleOrigins.parameters = {
			...MultipleOrigins.parameters,
			docs: {
				...MultipleOrigins.parameters?.docs,
				source: {
					originalSource: "{\n  parameters: {\n    // FIXME: Multiple Origins: origin groups are missing required ARIA children (aria-required-children).\n    // See: https://github.com/WordPress/gutenberg/issues/81596\n    a11y: {\n      test: 'todo'\n    }\n  },\n  render: Template,\n  args: {\n    gradients: [{\n      name: 'Origin 1',\n      gradients: GRADIENTS\n    }, {\n      name: 'Origin 2',\n      gradients: GRADIENTS\n    }]\n  }\n}",
					...MultipleOrigins.parameters?.docs?.source
				}
			}
		};
		CSSVariables.parameters = {
			...CSSVariables.parameters,
			docs: {
				...CSSVariables.parameters?.docs,
				source: {
					originalSource: "{\n  render: args => <div style={{\n    '--red': '#f00',\n    '--yellow': '#ff0',\n    '--blue': '#00f'\n  }}>\n            <Template {...args} />\n        </div>,\n  args: {\n    gradients: [{\n      name: 'Red to Yellow',\n      gradient: 'linear-gradient(135deg,var(--red) 0%,var(--yellow) 100%)',\n      slug: 'red-to-yellow'\n    }, {\n      name: 'Yellow to Blue',\n      gradient: 'linear-gradient(135deg,var(--yellow) 0%,var(--blue) 100%)',\n      slug: 'yellow-to-blue'\n    }, {\n      name: 'Blue to Red',\n      gradient: 'linear-gradient(135deg,var(--blue) 0%,var(--red) 100%)',\n      slug: 'blue-to-red'\n    }]\n  }\n}",
					...CSSVariables.parameters?.docs?.source
				}
			}
		};
	})))();
}
//#endregion
init_index_story();
export { CSSVariables, Default, DuplicateGradients, MultipleOrigins, WithNoExistingGradients, meta as default };
