import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_react } from "./react-Bujh4FgW.js";
import { n as init_react, t as import_react$1 } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { a as init_clsx, i as clsx } from "./iframe-UtSZlYID.js";
import { n as init_button, t as Button } from "./button-BO8bp-IJ.js";
import { n as init_notice, t as Notice } from "./notice-BtAxuJHn.js";
//#region ../packages/components/src/notice/list.tsx
/**
* `NoticeList` is a component used to render a collection of notices.
*
*```jsx
* import { Notice, NoticeList } from `@wordpress/components`;
*
* const MyNoticeList = () => {
*	const [ notices, setNotices ] = useState( [
*		{
*			id: 'second-notice',
*			content: 'second notice content',
*		},
*		{
*			id: 'fist-notice',
*			content: 'first notice content',
*		},
*	] );
*
*	const removeNotice = ( id ) => {
*		setNotices( notices.filter( ( notice ) => notice.id !== id ) );
*	};
*
*	return <NoticeList notices={ notices } onRemove={ removeNotice } />;
*};
*```
*/
function NoticeList({ notices, onRemove = noop, className, children }) {
	const removeNotice = (id) => () => onRemove(id);
	className = clsx("components-notice-list", className);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)("div", {
		className,
		children: [children, [...notices].reverse().map((notice) => {
			const { content, ...restNotice } = notice;
			return /* @__PURE__ */ (0, import_react.createElement)(Notice, {
				...restNotice,
				key: notice.id,
				onRemove: removeNotice(notice.id),
				__self: this,
				__source: {
					fileName: _jsxFileName$1,
					lineNumber: 52,
					columnNumber: 6
				}
			}, notice.content);
		})]
	}, void 0, true, {
		fileName: _jsxFileName$1,
		lineNumber: 47,
		columnNumber: 3
	}, this);
}
var import_react, import_jsx_dev_runtime$1, _jsxFileName$1, noop;
function init_list() {
	return (init_list = __esmMin((() => {
		init_clsx();
		init_notice();
		import_react = require_react();
		import_jsx_dev_runtime$1 = require_jsx_dev_runtime();
		_jsxFileName$1 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/notice/list.tsx";
		noop = () => {};
		try {
			NoticeList.__docgenInfo = {
				"description": "`NoticeList` is a component used to render a collection of notices.\n\n```jsx\nimport { Notice, NoticeList } from `@wordpress/components`;\n\nconst MyNoticeList = () => {\nconst [ notices, setNotices ] = useState( [\n	{\n		id: 'second-notice',\n		content: 'second notice content',\n	},\n	{\n		id: 'fist-notice',\n		content: 'first notice content',\n	},\n] );\n\nconst removeNotice = ( id ) => {\n	setNotices( notices.filter( ( notice ) => notice.id !== id ) );\n};\n\nreturn <NoticeList notices={ notices } onRemove={ removeNotice } />;\n};\n```",
				"displayName": "NoticeList",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/notice/list.tsx",
				"methods": [],
				"props": {
					"notices": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/notice/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Array of notices to render.",
						"name": "notices",
						"required": true,
						"tags": {},
						"type": { "name": "(Omit<NoticeProps, \"children\"> & { id: string; content: string; })[]" }
					},
					"onRemove": {
						"defaultValue": { "value": "() => {}" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/notice/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Function called when a notice should be removed / dismissed.",
						"name": "onRemove",
						"required": false,
						"tags": {},
						"type": { "name": "((id: string) => void)" }
					},
					"children": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/notice/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Children to be rendered inside the notice list.",
						"name": "children",
						"required": false,
						"tags": {},
						"type": { "name": "ReactNode" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/components/src/notice/stories/index.story.tsx
var import_jsx_dev_runtime, fn, _jsxFileName, meta, Template, Default, WithCustomSpokenMessage, WithJSXChildren, WithActions, NoticeListSubcomponent, WithDisabledAction;
function init_index_story() {
	return (init_index_story = __esmMin((() => {
		init_react();
		init_notice();
		init_button();
		init_list();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		({fn} = __STORYBOOK_MODULE_TEST__);
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/notice/stories/index.story.tsx";
		meta = {
			title: "Components/@wordpress-components/Feedback/Notice",
			id: "components-notice",
			component: Notice,
			subcomponents: { NoticeList },
			args: {
				onDismiss: fn(),
				onRemove: fn()
			},
			parameters: {
				controls: { expanded: true },
				docs: { canvas: { sourceState: "shown" } },
				componentStatus: {
					status: "not-recommended",
					whereUsed: "global",
					notes: "Use [`Notice`](?path=/docs/design-system-components-notice--docs) from `@wordpress/ui` instead."
				}
			}
		};
		Template = (props) => {
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Notice, { ...props }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 31,
				columnNumber: 9
			}, void 0);
		};
		Default = Template.bind({});
		Default.args = { children: "This is a notice." };
		WithCustomSpokenMessage = Template.bind({});
		WithCustomSpokenMessage.args = {
			...Default.args,
			politeness: "assertive",
			spokenMessage: "This is a notice with a custom spoken message"
		};
		WithJSXChildren = Template.bind({});
		WithJSXChildren.args = {
			...Default.args,
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
				"JSX elements can be helpful",
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: " if you need to format" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 53,
					columnNumber: 5
				}, void 0),
				" the notice output."
			] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 51,
				columnNumber: 4
			}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("code", { children: "note: in the interest of consistency, this should not be overused!" }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 55,
				columnNumber: 4
			}, void 0)] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 50,
				columnNumber: 3
			}, void 0)
		};
		WithActions = Template.bind({});
		WithActions.args = {
			...Default.args,
			actions: [
				{
					label: "Click me!",
					onClick: () => {},
					variant: "primary"
				},
				{
					label: "Or click me instead!",
					onClick: () => {}
				},
				{
					label: "Or visit a link for more info",
					url: "https://wordpress.org",
					variant: "link"
				}
			]
		};
		NoticeListSubcomponent = () => {
			const exampleNotices = [{
				id: "second-notice",
				content: "second notice content"
			}, {
				id: "first-notice",
				content: "first notice content",
				actions: [
					{
						label: "Click me!",
						onClick: () => {},
						variant: "primary"
					},
					{
						label: "Or click me instead!",
						onClick: () => {}
					},
					{
						label: "Or visit a link for more info",
						url: "https://wordpress.org",
						variant: "link"
					}
				]
			}];
			const [notices, setNotices] = (0, import_react$1.useState)(exampleNotices);
			const removeNotice = (id) => {
				setNotices(notices.filter((notice) => notice.id !== id));
			};
			const resetNotices = () => {
				setNotices(exampleNotices);
			};
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NoticeList, {
				notices,
				onRemove: removeNotice
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 125,
				columnNumber: 4
			}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
				__next40pxDefaultSize: true,
				variant: "primary",
				onClick: resetNotices,
				children: "Reset Notices"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 126,
				columnNumber: 4
			}, void 0)] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 124,
				columnNumber: 3
			}, void 0);
		};
		NoticeListSubcomponent.storyName = "NoticeList Subcomponent";
		WithDisabledAction = Template.bind({});
		WithDisabledAction.args = {
			...Default.args,
			children: "This notice has a disabled action.",
			actions: [{
				label: "Disabled action",
				onClick: () => {},
				disabled: true
			}, {
				label: "Enabled action",
				onClick: () => {}
			}]
		};
		try {
			WithDisabledAction.__docgenInfo = {
				"description": "Action buttons can be disabled.",
				"displayName": "WithDisabledAction",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/notice/stories/index.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		Default.parameters = {
			...Default.parameters,
			docs: {
				...Default.parameters?.docs,
				source: {
					originalSource: "props => {\n  return <Notice {...props} />;\n}",
					...Default.parameters?.docs?.source
				}
			}
		};
		WithCustomSpokenMessage.parameters = {
			...WithCustomSpokenMessage.parameters,
			docs: {
				...WithCustomSpokenMessage.parameters?.docs,
				source: {
					originalSource: "props => {\n  return <Notice {...props} />;\n}",
					...WithCustomSpokenMessage.parameters?.docs?.source
				}
			}
		};
		WithJSXChildren.parameters = {
			...WithJSXChildren.parameters,
			docs: {
				...WithJSXChildren.parameters?.docs,
				source: {
					originalSource: "props => {\n  return <Notice {...props} />;\n}",
					...WithJSXChildren.parameters?.docs?.source
				}
			}
		};
		WithActions.parameters = {
			...WithActions.parameters,
			docs: {
				...WithActions.parameters?.docs,
				source: {
					originalSource: "props => {\n  return <Notice {...props} />;\n}",
					...WithActions.parameters?.docs?.source
				}
			}
		};
		NoticeListSubcomponent.parameters = {
			...NoticeListSubcomponent.parameters,
			docs: {
				...NoticeListSubcomponent.parameters?.docs,
				source: {
					originalSource: "() => {\n  const exampleNotices: NoticeListProps['notices'] = [{\n    id: 'second-notice',\n    content: 'second notice content'\n  }, {\n    id: 'first-notice',\n    content: 'first notice content',\n    actions: [{\n      label: 'Click me!',\n      onClick: () => {},\n      variant: 'primary'\n    }, {\n      label: 'Or click me instead!',\n      onClick: () => {}\n    }, {\n      label: 'Or visit a link for more info',\n      url: 'https://wordpress.org',\n      variant: 'link'\n    }]\n  }];\n  const [notices, setNotices] = useState(exampleNotices);\n  const removeNotice = (id: NoticeListProps['notices'][number]['id']) => {\n    setNotices(notices.filter(notice => notice.id !== id));\n  };\n  const resetNotices = () => {\n    setNotices(exampleNotices);\n  };\n  return <>\n            <NoticeList notices={notices} onRemove={removeNotice} />\n            <Button __next40pxDefaultSize variant=\"primary\" onClick={resetNotices}>\n                Reset Notices\n            </Button>\n        </>;\n}",
					...NoticeListSubcomponent.parameters?.docs?.source
				}
			}
		};
		WithDisabledAction.parameters = {
			...WithDisabledAction.parameters,
			docs: {
				...WithDisabledAction.parameters?.docs,
				source: {
					originalSource: "props => {\n  return <Notice {...props} />;\n}",
					...WithDisabledAction.parameters?.docs?.source
				},
				description: {
					story: "Action buttons can be disabled.",
					...WithDisabledAction.parameters?.docs?.description
				}
			}
		};
	})))();
}
//#endregion
init_index_story();
export { Default, NoticeListSubcomponent, WithActions, WithCustomSpokenMessage, WithDisabledAction, WithJSXChildren, meta as default };
