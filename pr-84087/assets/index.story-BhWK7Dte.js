import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_component, t as ColorPicker } from "./component-B0pn5kUS.js";
//#region ../packages/components/src/color-picker/stories/index.story.tsx
var fn, meta, Default;
function init_index_story() {
	return (init_index_story = __esmMin((() => {
		init_component();
		({fn} = __STORYBOOK_MODULE_TEST__);
		meta = {
			tags: ["manifest"],
			component: ColorPicker,
			title: "Components/@wordpress-components/Selection & Input/Color/ColorPicker",
			id: "components-colorpicker",
			argTypes: { color: { control: false } },
			args: { onChange: fn() },
			parameters: {
				controls: { expanded: true },
				docs: { canvas: { sourceState: "shown" } },
				componentStatus: {
					status: "recommended",
					whereUsed: "global"
				}
			}
		};
		Default = {};
		Default.parameters = {
			...Default.parameters,
			docs: {
				...Default.parameters?.docs,
				source: {
					originalSource: "{}",
					...Default.parameters?.docs?.source
				}
			}
		};
	})))();
}
//#endregion
init_index_story();
export { Default, meta as default };
