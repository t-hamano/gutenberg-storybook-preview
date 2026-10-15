import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as init_duotone_picker, t as DuotonePicker } from "./duotone-picker-CJM02nan.js";
//#region ../packages/components/src/duotone-picker/stories/duotone-picker.story.tsx
var import_jsx_dev_runtime, fn, _jsxFileName, meta, DUOTONE_PALETTE, DUPLICATE_DUOTONE_PALETTE, COLOR_PALETTE, Template, Default, DuplicateDuotones;
function init_duotone_picker_story() {
	return (init_duotone_picker_story = __esmMin((() => {
		init_react();
		init_duotone_picker();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		({fn} = __STORYBOOK_MODULE_TEST__);
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/duotone-picker/stories/duotone-picker.story.tsx";
		meta = {
			id: "components-duotonepicker",
			title: "Components/@wordpress-components/DuotonePicker",
			component: DuotonePicker,
			args: { onChange: fn() },
			argTypes: {
				selectedSlug: { control: false },
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
		DUOTONE_PALETTE = [{
			colors: ["#8c00b7", "#fcff41"],
			name: "Purple and yellow",
			slug: "purple-yellow"
		}, {
			colors: ["#000097", "#ff4747"],
			name: "Blue and red",
			slug: "blue-red"
		}];
		DUPLICATE_DUOTONE_PALETTE = [{
			colors: ["#000000", "#ffffff"],
			name: "Dark background",
			slug: "dark-background"
		}, {
			colors: ["#000000", "#ffffff"],
			name: "Dark text",
			slug: "dark-text"
		}];
		COLOR_PALETTE = [
			{
				color: "#ff4747",
				name: "Red",
				slug: "red"
			},
			{
				color: "#fcff41",
				name: "Yellow",
				slug: "yellow"
			},
			{
				color: "#000097",
				name: "Blue",
				slug: "blue"
			},
			{
				color: "#8c00b7",
				name: "Purple",
				slug: "purple"
			}
		];
		Template = ({ onChange, value, selectedSlug, ...props }) => {
			const [duotone, setDuotone] = (0, import_react.useState)(value);
			const [slug, setSlug] = (0, import_react.useState)(selectedSlug);
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DuotonePicker, {
				...props,
				value: duotone,
				selectedSlug: slug,
				onChange: (newValue, index, newSlug) => {
					setDuotone(newValue);
					setSlug(newSlug);
					onChange?.(newValue, index, newSlug);
				}
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 78,
				columnNumber: 3
			}, void 0);
		};
		Default = {
			render: Template,
			args: {
				colorPalette: COLOR_PALETTE,
				duotonePalette: DUOTONE_PALETTE
			}
		};
		DuplicateDuotones = {
			render: Template,
			args: {
				colorPalette: COLOR_PALETTE,
				duotonePalette: DUPLICATE_DUOTONE_PALETTE
			},
			parameters: { docs: { description: { story: "Two presets can hold the same pair of colors. Selection is tracked by slug, so picking one marks only that preset rather than both." } } }
		};
		Default.parameters = {
			...Default.parameters,
			docs: {
				...Default.parameters?.docs,
				source: {
					originalSource: "{\n  render: Template,\n  args: {\n    colorPalette: COLOR_PALETTE,\n    duotonePalette: DUOTONE_PALETTE\n  }\n}",
					...Default.parameters?.docs?.source
				}
			}
		};
		DuplicateDuotones.parameters = {
			...DuplicateDuotones.parameters,
			docs: {
				...DuplicateDuotones.parameters?.docs,
				source: {
					originalSource: "{\n  render: Template,\n  args: {\n    colorPalette: COLOR_PALETTE,\n    duotonePalette: DUPLICATE_DUOTONE_PALETTE\n  },\n  parameters: {\n    docs: {\n      description: {\n        story: 'Two presets can hold the same pair of colors. Selection is tracked by slug, so picking one marks only that preset rather than both.'\n      }\n    }\n  }\n}",
					...DuplicateDuotones.parameters?.docs?.source
				}
			}
		};
	})))();
}
//#endregion
init_duotone_picker_story();
export { Default, DuplicateDuotones, meta as default };
