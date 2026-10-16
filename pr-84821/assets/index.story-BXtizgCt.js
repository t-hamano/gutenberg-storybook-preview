import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { i as init_breadcrumbs, n as withRouter, r as Breadcrumbs, t as init_with_router } from "./with-router-C4h2Ddw3.js";
//#region ../packages/admin-ui/src/breadcrumbs/stories/index.story.tsx
var meta, SingleItem, TwoLevels, ThreeLevels;
function init_index_story() {
	return (init_index_story = __esmMin((() => {
		init_breadcrumbs();
		init_with_router();
		meta = {
			component: Breadcrumbs,
			id: "admin-ui-breadcrumbs",
			title: "Design System/Admin UI/Breadcrumbs",
			decorators: [withRouter]
		};
		SingleItem = { args: { items: [{ label: "Root breadcrumb" }] } };
		TwoLevels = { args: { items: [{
			label: "Root breadcrumb",
			to: "/settings"
		}, { label: "Level 1 breadcrumb" }] } };
		ThreeLevels = { args: { items: [
			{
				label: "Root breadcrumb",
				to: "/settings"
			},
			{
				label: "Level 1 breadcrumb",
				to: "/settings/connectors"
			},
			{ label: "Level 2 breadcrumb" }
		] } };
		SingleItem.parameters = {
			...SingleItem.parameters,
			docs: {
				...SingleItem.parameters?.docs,
				source: {
					originalSource: "{\n  args: {\n    items: [{\n      label: 'Root breadcrumb'\n    }]\n  }\n}",
					...SingleItem.parameters?.docs?.source
				}
			}
		};
		TwoLevels.parameters = {
			...TwoLevels.parameters,
			docs: {
				...TwoLevels.parameters?.docs,
				source: {
					originalSource: "{\n  args: {\n    items: [{\n      label: 'Root breadcrumb',\n      to: '/settings'\n    }, {\n      label: 'Level 1 breadcrumb'\n    }]\n  }\n}",
					...TwoLevels.parameters?.docs?.source
				}
			}
		};
		ThreeLevels.parameters = {
			...ThreeLevels.parameters,
			docs: {
				...ThreeLevels.parameters?.docs,
				source: {
					originalSource: "{\n  args: {\n    items: [{\n      label: 'Root breadcrumb',\n      to: '/settings'\n    }, {\n      label: 'Level 1 breadcrumb',\n      to: '/settings/connectors'\n    }, {\n      label: 'Level 2 breadcrumb'\n    }]\n  }\n}",
					...ThreeLevels.parameters?.docs?.source
				}
			}
		};
	})))();
}
//#endregion
init_index_story();
export { SingleItem, ThreeLevels, TwoLevels, meta as default };
