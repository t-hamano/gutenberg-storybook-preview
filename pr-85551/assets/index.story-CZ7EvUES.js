import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as wordpress_default } from "./wordpress-BwlgBeE7.js";
import { n as init_icon, t as Icon } from "./icon-DxWIlbNr.js";
import { n as init_snackbar, t as Snackbar } from "./snackbar-C-qo0XfE.js";
import { r as init_build_module } from "./library.story-CbQx3MQ6.js";
//#region ../packages/components/src/snackbar/stories/index.story.tsx
var import_jsx_dev_runtime, _jsxFileName, meta, DefaultTemplate, Default, WithActions, WithIcon, WithExplicitDismiss, WithActionAndExplicitDismiss;
function init_index_story() {
	return (init_index_story = __esmMin((() => {
		init_build_module();
		init_icon();
		init_snackbar();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/snackbar/stories/index.story.tsx";
		meta = {
			tags: ["manifest"],
			title: "Components/@wordpress-components/Feedback/Snackbar",
			id: "components-snackbar",
			component: Snackbar,
			argTypes: {
				as: { control: false },
				onRemove: {
					action: "onRemove",
					control: false
				},
				onDismiss: {
					action: "onDismiss",
					control: false
				},
				listRef: { control: false }
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
		DefaultTemplate = ({ children, ...props }) => {
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Snackbar, {
				...props,
				children
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 42,
				columnNumber: 9
			}, void 0);
		};
		Default = DefaultTemplate.bind({});
		Default.args = { children: "Use Snackbars to communicate low priority, non-interruptive messages to the user." };
		WithActions = DefaultTemplate.bind({});
		WithActions.args = {
			actions: [{
				label: "Open WP.org",
				url: "https://wordpress.org"
			}],
			children: "Use Snackbars with an action link to an external page."
		};
		WithActions.parameters = { a11y: { test: "todo" } };
		WithIcon = DefaultTemplate.bind({});
		WithIcon.args = {
			children: "Add an icon to make your snackbar stand out",
			icon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, {
				style: { fill: "currentcolor" },
				icon: wordpress_default
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 72,
				columnNumber: 8
			}, void 0)
		};
		WithExplicitDismiss = DefaultTemplate.bind({});
		WithExplicitDismiss.args = {
			children: "Add a cross to explicitly close the snackbar, and do not hide it automatically",
			explicitDismiss: true
		};
		WithActionAndExplicitDismiss = DefaultTemplate.bind({});
		WithActionAndExplicitDismiss.args = {
			actions: [{
				label: "Open WP.org",
				url: "https://wordpress.org"
			}],
			children: "Add an action and a cross to explicitly close the snackbar, and do not hide it automatically",
			explicitDismiss: true
		};
		Default.parameters = {
			...Default.parameters,
			docs: {
				...Default.parameters?.docs,
				source: {
					originalSource: "({\n  children,\n  ...props\n}) => {\n  return <Snackbar {...props}>{children}</Snackbar>;\n}",
					...Default.parameters?.docs?.source
				}
			}
		};
		WithActions.parameters = {
			...WithActions.parameters,
			docs: {
				...WithActions.parameters?.docs,
				source: {
					originalSource: "({\n  children,\n  ...props\n}) => {\n  return <Snackbar {...props}>{children}</Snackbar>;\n}",
					...WithActions.parameters?.docs?.source
				}
			}
		};
		WithIcon.parameters = {
			...WithIcon.parameters,
			docs: {
				...WithIcon.parameters?.docs,
				source: {
					originalSource: "({\n  children,\n  ...props\n}) => {\n  return <Snackbar {...props}>{children}</Snackbar>;\n}",
					...WithIcon.parameters?.docs?.source
				}
			}
		};
		WithExplicitDismiss.parameters = {
			...WithExplicitDismiss.parameters,
			docs: {
				...WithExplicitDismiss.parameters?.docs,
				source: {
					originalSource: "({\n  children,\n  ...props\n}) => {\n  return <Snackbar {...props}>{children}</Snackbar>;\n}",
					...WithExplicitDismiss.parameters?.docs?.source
				}
			}
		};
		WithActionAndExplicitDismiss.parameters = {
			...WithActionAndExplicitDismiss.parameters,
			docs: {
				...WithActionAndExplicitDismiss.parameters?.docs,
				source: {
					originalSource: "({\n  children,\n  ...props\n}) => {\n  return <Snackbar {...props}>{children}</Snackbar>;\n}",
					...WithActionAndExplicitDismiss.parameters?.docs?.source
				}
			}
		};
	})))();
}
//#endregion
init_index_story();
export { Default, WithActionAndExplicitDismiss, WithActions, WithExplicitDismiss, WithIcon, meta as default };
