import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as init_external_link, t as ExternalLink } from "./external-link-3VHbGn_5.js";
//#region ../packages/components/src/external-link/stories/index.story.tsx
var import_jsx_dev_runtime, _jsxFileName, meta, Template, Default;
function init_index_story() {
	return (init_index_story = __esmMin((() => {
		init_external_link();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/external-link/stories/index.story.tsx";
		meta = {
			component: ExternalLink,
			title: "Components/@wordpress-components/Navigation/ExternalLink",
			id: "components-externallink",
			argTypes: { children: { control: { type: "text" } } },
			parameters: {
				controls: { expanded: true },
				docs: { canvas: { sourceState: "shown" } },
				componentStatus: {
					status: "not-recommended",
					whereUsed: "global",
					notes: "Use [`Link`](?path=/docs/design-system-components-link--docs) from `@wordpress/ui` instead, with the `openInNewTab` prop set."
				}
			}
		};
		Template = ({ ...args }) => {
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ExternalLink, { ...args }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 26,
				columnNumber: 9
			}, void 0);
		};
		Default = Template.bind({});
		Default.args = {
			children: "WordPress",
			href: "https://wordpress.org"
		};
		Default.parameters = {
			...Default.parameters,
			docs: {
				...Default.parameters?.docs,
				source: {
					originalSource: "({\n  ...args\n}) => {\n  return <ExternalLink {...args} />;\n}",
					...Default.parameters?.docs?.source
				}
			}
		};
	})))();
}
//#endregion
init_index_story();
export { Default, meta as default };
