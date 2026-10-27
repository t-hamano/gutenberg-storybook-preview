import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as init_component, t as Heading } from "./component-B-Ol-wDZ.js";
//#region ../packages/components/src/heading/stories/index.story.tsx
var import_jsx_dev_runtime, _jsxFileName, meta, Default;
function init_index_story() {
	return (init_index_story = __esmMin((() => {
		init_component();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/heading/stories/index.story.tsx";
		meta = {
			component: Heading,
			title: "Components/@wordpress-components/Typography/Heading",
			id: "components-heading",
			argTypes: {
				as: { control: { type: "text" } },
				color: { control: { type: "color" } },
				display: { control: { type: "text" } },
				letterSpacing: { control: { type: "text" } },
				lineHeight: { control: { type: "text" } },
				optimizeReadabilityFor: { control: { type: "color" } },
				variant: {
					control: { type: "select" },
					options: [void 0, "muted"]
				},
				weight: { control: { type: "text" } }
			},
			tags: ["status-experimental"],
			parameters: {
				controls: { expanded: true },
				docs: { canvas: { sourceState: "shown" } },
				componentStatus: {
					status: "not-recommended",
					whereUsed: "global",
					notes: "Use [`Text`](?path=/docs/design-system-components-text--docs) from `@wordpress/ui` instead, with the `render` prop set to the heading level element and the variant set to the visual heading size (e.g. `<Text render={ <h1 /> } variant=\"heading-2xl\">`)."
				}
			}
		};
		Default = (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Heading, { ...props }, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 35,
			columnNumber: 2
		}, void 0);
		Default.args = { children: "Heading" };
		Default.parameters = {
			...Default.parameters,
			docs: {
				...Default.parameters?.docs,
				source: {
					originalSource: "props => <Heading {...props} />",
					...Default.parameters?.docs?.source
				}
			}
		};
	})))();
}
//#endregion
init_index_story();
export { Default, meta as default };
