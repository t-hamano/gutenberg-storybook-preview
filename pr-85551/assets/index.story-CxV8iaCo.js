import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_content_editable_control, t as ContentEditableControl } from "./content-editable-control-Bb46JS3J.js";
//#region ../packages/components/src/content-editable-control/stories/index.story.tsx
var meta, Default;
function init_index_story() {
	return (init_index_story = __esmMin((() => {
		init_content_editable_control();
		meta = {
			id: "components-contenteditablecontrol",
			title: "Components/@wordpress-components/Selection & Input/Common/ContentEditableControl",
			component: ContentEditableControl,
			tags: ["status-private"],
			parameters: {
				controls: { expanded: true },
				docs: { canvas: { sourceState: "shown" } }
			}
		};
		Default = { args: {
			label: "Title",
			placeholder: "Add a title…"
		} };
		Default.parameters = {
			...Default.parameters,
			docs: {
				...Default.parameters?.docs,
				source: {
					originalSource: "{\n  args: {\n    label: 'Title',\n    placeholder: 'Add a title…'\n  }\n}",
					...Default.parameters?.docs?.source
				}
			}
		};
	})))();
}
//#endregion
init_index_story();
export { Default, meta as default };
