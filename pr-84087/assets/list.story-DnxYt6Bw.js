import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as use_reduced_motion_default, t as init_use_reduced_motion } from "./use-reduced-motion-D9Mdybdt.js";
import { o as clsx, s as init_clsx } from "./iframe-D4D-SsYo.js";
import { n as motion, t as init_proxy } from "./proxy-BwuyW_W-.js";
import { n as init_AnimatePresence, t as AnimatePresence } from "./AnimatePresence-CwQLeDTm.js";
import { n as init_snackbar, t as Snackbar } from "./snackbar-DDkAvnkd.js";
//#region ../packages/components/src/snackbar/list.tsx
/**
* Renders a list of notices.
*
* ```jsx
* const MySnackbarListNotice = () => (
*   <SnackbarList
*     notices={ notices }
*     onRemove={ removeNotice }
*   />
* );
* ```
*/
function SnackbarList({ notices, className, children, onRemove }) {
	const listRef = (0, import_react.useRef)(null);
	const isReducedMotion = use_reduced_motion_default();
	className = clsx("components-snackbar-list", className);
	const removeNotice = (notice) => () => onRemove?.(notice.id);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)("div", {
		className,
		tabIndex: -1,
		ref: listRef,
		"data-testid": "snackbar-list",
		children: [children, /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(AnimatePresence, { children: notices.map((notice) => {
			const { content, ...restNotice } = notice;
			return /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(motion.div, {
				layout: isReducedMotion ? false : "position",
				style: { width: "100%" },
				initial: "init",
				animate: "open",
				exit: "exit",
				variants: isReducedMotion ? void 0 : SNACKBAR_VARIANTS,
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)("div", {
					className: "components-snackbar-list__notice-container",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(Snackbar, {
						...restNotice,
						onRemove: removeNotice(notice),
						listRef,
						children: notice.content
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 93,
						columnNumber: 9
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 92,
					columnNumber: 8
				}, this)
			}, notice.id, false, {
				fileName: _jsxFileName$1,
				lineNumber: 77,
				columnNumber: 7
			}, this);
		}) }, void 0, false, {
			fileName: _jsxFileName$1,
			lineNumber: 72,
			columnNumber: 4
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName$1,
		lineNumber: 65,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime$1, _jsxFileName$1, SNACKBAR_VARIANTS;
function init_list() {
	return (init_list = __esmMin((() => {
		init_clsx();
		init_use_reduced_motion();
		init_react();
		init_snackbar();
		init_proxy(), init_AnimatePresence();
		import_jsx_dev_runtime$1 = require_jsx_dev_runtime();
		_jsxFileName$1 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/snackbar/list.tsx";
		SNACKBAR_VARIANTS = {
			init: {
				height: 0,
				opacity: 0
			},
			open: {
				height: "auto",
				opacity: 1,
				transition: {
					height: {
						type: "tween",
						duration: .3,
						ease: [
							0,
							0,
							.2,
							1
						]
					},
					opacity: {
						type: "tween",
						duration: .25,
						delay: .05,
						ease: [
							0,
							0,
							.2,
							1
						]
					}
				}
			},
			exit: {
				opacity: 0,
				transition: {
					type: "tween",
					duration: .1,
					ease: [
						0,
						0,
						.2,
						1
					]
				}
			}
		};
		try {
			SnackbarList.__docgenInfo = {
				"description": "Renders a list of notices.\n\n```jsx\nconst MySnackbarListNotice = () => (\n  <SnackbarList\n    notices={ notices }\n    onRemove={ removeNotice }\n  />\n);\n```",
				"displayName": "SnackbarList",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/snackbar/list.tsx",
				"methods": [],
				"props": {
					"notices": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/snackbar/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "notices",
						"required": true,
						"tags": {},
						"type": { "name": "(Omit<SnackbarProps, \"children\"> & { id: string; content: string; })[]" }
					},
					"onRemove": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/snackbar/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "onRemove",
						"required": true,
						"tags": {},
						"type": { "name": "(id: string) => void" }
					},
					"as": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/context/wordpress-component.ts",
							"name": "TypeLiteral"
						}],
						"description": "The HTML element or React component to render the component as.",
						"name": "as",
						"required": false,
						"tags": {},
						"type": { "name": "keyof IntrinsicElements | JSXElementConstructor<any>" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/components/src/snackbar/stories/list.story.tsx
var import_jsx_dev_runtime, _jsxFileName, meta, Default;
function init_list_story() {
	return (init_list_story = __esmMin((() => {
		init_react();
		init_list();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/snackbar/stories/list.story.tsx";
		meta = {
			title: "Components/@wordpress-components/Feedback/SnackbarList",
			id: "components-snackbarlist",
			component: SnackbarList,
			argTypes: {
				as: { control: false },
				onRemove: {
					action: "onRemove",
					control: false
				}
			},
			parameters: {
				a11y: { test: "todo" },
				controls: { expanded: true },
				docs: { canvas: { sourceState: "shown" } }
			}
		};
		Default = ({ children, notices: noticesProp, ...props }) => {
			const [notices, setNotices] = (0, import_react.useState)(noticesProp);
			const onRemove = (id) => {
				const matchIndex = notices.findIndex((n) => n.id === id);
				if (matchIndex > -1) setNotices([...notices.slice(0, matchIndex), ...notices.slice(matchIndex + 1)]);
			};
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SnackbarList, {
				...props,
				notices,
				onRemove,
				children
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 46,
				columnNumber: 3
			}, void 0);
		};
		Default.args = {
			children: "Use SnackbarList to communicate multiple low priority, non-interruptive messages to the user.",
			notices: [
				{
					id: "SAVE_POST_NOTICE_ID_1",
					spokenMessage: "Post published.",
					actions: [{
						label: "View Post",
						url: "https://example.com/?p=522"
					}],
					content: "Post published.",
					explicitDismiss: false
				},
				{
					id: "SAVE_POST_NOTICE_ID_2",
					spokenMessage: "Post updated",
					actions: [{
						label: "View Post",
						url: "https://example.com/?p=522"
					}],
					content: "Post updated.",
					explicitDismiss: false
				},
				{
					id: "global1",
					spokenMessage: "All content copied.",
					actions: [],
					content: "All content copied.",
					explicitDismiss: false
				}
			]
		};
		Default.parameters = {
			...Default.parameters,
			docs: {
				...Default.parameters?.docs,
				source: {
					originalSource: "({\n  children,\n  notices: noticesProp,\n  ...props\n}) => {\n  const [notices, setNotices] = useState(noticesProp);\n  const onRemove = (id: string) => {\n    const matchIndex = notices.findIndex(n => n.id === id);\n    if (matchIndex > -1) {\n      setNotices([...notices.slice(0, matchIndex), ...notices.slice(matchIndex + 1)]);\n    }\n  };\n  return <SnackbarList {...props} notices={notices} onRemove={onRemove}>\n            {children}\n        </SnackbarList>;\n}",
					...Default.parameters?.docs?.source
				}
			}
		};
	})))();
}
//#endregion
init_list_story();
export { Default, meta as default };
