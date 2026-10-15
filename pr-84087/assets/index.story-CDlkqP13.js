import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as init_component, t as Text } from "./component-D1HS87lF.js";
//#region ../packages/components/src/text/stories/index.story.tsx
var import_jsx_dev_runtime, _jsxFileName, meta, Template, Default, Truncate, Highlight;
function init_index_story() {
	return (init_index_story = __esmMin((() => {
		init_component();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/text/stories/index.story.tsx";
		meta = {
			component: Text,
			title: "Components/@wordpress-components/Typography/Text",
			id: "components-text",
			argTypes: {
				as: { control: { type: "text" } },
				color: { control: { type: "color" } },
				display: { control: { type: "text" } },
				lineHeight: { control: { type: "text" } },
				letterSpacing: { control: { type: "text" } },
				optimizeReadabilityFor: { control: { type: "color" } },
				size: { control: { type: "text" } },
				variant: {
					options: [void 0, "muted"],
					control: { type: "select" }
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
					notes: "Use [`Text`](?path=/docs/design-system-components-text--docs) from `@wordpress/ui` instead."
				}
			}
		};
		Template = (props) => {
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { ...props }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 36,
				columnNumber: 9
			}, void 0);
		};
		Default = Template.bind({});
		Default.args = { children: "Code is poetry" };
		Truncate = Template.bind({});
		Truncate.args = {
			children: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
facilisis dictum tortor, eu tincidunt justo scelerisque tincidunt.
Duis semper dui id augue malesuada, ut feugiat nisi aliquam.
Vestibulum venenatis diam sem, finibus dictum massa semper in. Nulla
facilities. Nunc vulputate faucibus diam, in lobortis arcu ornare vel.
In dignissim nunc sed facilisis finibus. Etiam imperdiet mattis
arcu, sed rutrum sapien blandit gravida. Aenean sollicitudin neque
eget enim blandit, sit amet rutrum leo vehicula. Nunc malesuada
ultricies eros ut faucibus. Aliquam erat volutpat. Nulla nec feugiat
risus. Vivamus iaculis dui aliquet ante ultricies feugiat.
Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
posuere cubilia curae; Vivamus nec pretium velit, sit amet
consectetur ante. Praesent porttitor ex eget fermentum mattis.`,
			numberOfLines: 2,
			truncate: true
		};
		Highlight = Template.bind({});
		Highlight.args = {
			children: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
facilisis dictum tortor, eu tincidunt justo scelerisque tincidunt.
Duis semper dui id augue malesuada, ut feugiat nisi aliquam.
Vestibulum venenatis diam sem, finibus dictum massa semper in. Nulla
facilities. Nunc vulputate faucibus diam, in lobortis arcu ornare vel.
In dignissim nunc sed facilisis finibus. Etiam imperdiet mattis
arcu, sed rutrum sapien blandit gravida. Aenean sollicitudin neque
eget enim blandit, sit amet rutrum leo vehicula. Nunc malesuada
ultricies eros ut faucibus. Aliquam erat volutpat. Nulla nec feugiat
risus. Vivamus iaculis dui aliquet ante ultricies feugiat.
Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
posuere cubilia curae; Vivamus nec pretium velit, sit amet
consectetur ante. Praesent porttitor ex eget fermentum mattis.`,
			highlightWords: ["con"]
		};
		Default.parameters = {
			...Default.parameters,
			docs: {
				...Default.parameters?.docs,
				source: {
					originalSource: "props => {\n  return <Text {...props} />;\n}",
					...Default.parameters?.docs?.source
				}
			}
		};
		Truncate.parameters = {
			...Truncate.parameters,
			docs: {
				...Truncate.parameters?.docs,
				source: {
					originalSource: "props => {\n  return <Text {...props} />;\n}",
					...Truncate.parameters?.docs?.source
				}
			}
		};
		Highlight.parameters = {
			...Highlight.parameters,
			docs: {
				...Highlight.parameters?.docs,
				source: {
					originalSource: "props => {\n  return <Text {...props} />;\n}",
					...Highlight.parameters?.docs?.source
				}
			}
		};
	})))();
}
//#endregion
init_index_story();
export { Default, Highlight, Truncate, meta as default };
