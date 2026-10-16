import { n as __esmMin, r as __exportAll } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { r as speak, t as init_build_module } from "./build-module-DsAeWnrG.js";
import { n as init_button, t as Button } from "./button-yiOgKsLV.js";
import { n as init_stack, t as Stack } from "./stack-s_FjhA7z.js";
import { a as Actions, c as init_description, d as Root, f as init_root, i as init_action_button, l as Title, n as init_action_link, o as init_actions, r as ActionButton, s as Description, t as ActionLink, u as init_title } from "./action-link-B4BckV88.js";
//#region ../packages/ui/src/notice/stories/announcements.story.tsx
var announcements_story_exports = /* @__PURE__ */ __exportAll({
	PoliteStatus: () => PoliteStatus,
	StaticNotice: () => StaticNotice,
	UrgentError: () => UrgentError,
	default: () => meta
});
var import_jsx_dev_runtime, _jsxFileName, meta, StaticNotice, UrgentError, PoliteStatus;
function init_announcements_story() {
	return (init_announcements_story = __esmMin((() => {
		init_react();
		init_build_module();
		init_button();
		init_stack();
		init_root(), init_description(), init_actions(), init_action_link(), init_title(), init_action_button();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/notice/stories/announcements.story.tsx";
		meta = {
			title: "Components/@wordpress-ui/Notice/Announcements",
			id: "design-system-components-notice-announcements",
			component: Root,
			tags: ["!autodocs"],
			parameters: { controls: { disable: true } }
		};
		StaticNotice = { render: () => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Root, {
			intent: "info",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Description, { children: "Your site is private. Only invited people can view it." }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 22,
				columnNumber: 4
			}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Actions, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ActionLink, {
				href: "https://wordpress.org/documentation/",
				children: "Learn more"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 26,
				columnNumber: 5
			}, void 0) }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 25,
				columnNumber: 4
			}, void 0)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 21,
			columnNumber: 3
		}, void 0) };
		UrgentError = { render: function UrgentErrorExample() {
			const [hasError, setHasError] = (0, import_react.useState)(false);
			const title = "Changes not saved";
			const description = "Your changes could not be saved because the connection was lost. Check your connection and try again.";
			function saveChanges() {
				setHasError(true);
				speak(`${title}. ${description}`, "assertive");
			}
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack, {
				direction: "column",
				gap: "md",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
					onClick: saveChanges,
					children: "Save changes"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 47,
					columnNumber: 5
				}, this), hasError && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Root, {
					intent: "error",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Title, { children: title }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 50,
							columnNumber: 7
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Description, { children: description }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 51,
							columnNumber: 7
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Actions, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ActionButton, {
							onClick: () => setHasError(false),
							children: "Try again"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 53,
							columnNumber: 8
						}, this) }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 52,
							columnNumber: 7
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 49,
					columnNumber: 6
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 46,
				columnNumber: 4
			}, this);
		} };
		PoliteStatus = { render: function PoliteStatusExample() {
			const [isSaved, setIsSaved] = (0, import_react.useState)(false);
			const title = "Draft saved";
			const description = "Your draft has been saved.";
			function saveDraft() {
				setIsSaved(true);
				speak(`${title}. ${description}`, "polite");
			}
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack, {
				direction: "column",
				gap: "md",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
					onClick: saveDraft,
					children: "Save draft"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 79,
					columnNumber: 5
				}, this), isSaved && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Root, {
					intent: "success",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Title, { children: title }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 82,
							columnNumber: 7
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Description, { children: description }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 83,
							columnNumber: 7
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Actions, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ActionButton, {
							onClick: () => setIsSaved(false),
							children: "Dismiss"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 85,
							columnNumber: 8
						}, this) }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 84,
							columnNumber: 7
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 81,
					columnNumber: 6
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 78,
				columnNumber: 4
			}, this);
		} };
		StaticNotice.parameters = {
			...StaticNotice.parameters,
			docs: {
				...StaticNotice.parameters?.docs,
				source: {
					originalSource: "{\n  render: () => <Notice.Root intent=\"info\">\n            <Notice.Description>\n                Your site is private. Only invited people can view it.\n            </Notice.Description>\n            <Notice.Actions>\n                <Notice.ActionLink href=\"https://wordpress.org/documentation/\">\n                    Learn more\n                </Notice.ActionLink>\n            </Notice.Actions>\n        </Notice.Root>\n}",
					...StaticNotice.parameters?.docs?.source
				}
			}
		};
		UrgentError.parameters = {
			...UrgentError.parameters,
			docs: {
				...UrgentError.parameters?.docs,
				source: {
					originalSource: "{\n  render: function UrgentErrorExample() {\n    const [hasError, setHasError] = useState(false);\n    const title = 'Changes not saved';\n    const description = 'Your changes could not be saved because the connection was lost. Check your connection and try again.';\n    function saveChanges() {\n      setHasError(true);\n      speak(`${title}. ${description}`, 'assertive');\n    }\n    return <Stack direction=\"column\" gap=\"md\">\n                <Button onClick={saveChanges}>Save changes</Button>\n                {hasError && <Notice.Root intent=\"error\">\n                        <Notice.Title>{title}</Notice.Title>\n                        <Notice.Description>{description}</Notice.Description>\n                        <Notice.Actions>\n                            <Notice.ActionButton onClick={() => setHasError(false)}>\n                                Try again\n                            </Notice.ActionButton>\n                        </Notice.Actions>\n                    </Notice.Root>}\n            </Stack>;\n  }\n}",
					...UrgentError.parameters?.docs?.source
				}
			}
		};
		PoliteStatus.parameters = {
			...PoliteStatus.parameters,
			docs: {
				...PoliteStatus.parameters?.docs,
				source: {
					originalSource: "{\n  render: function PoliteStatusExample() {\n    const [isSaved, setIsSaved] = useState(false);\n    const title = 'Draft saved';\n    const description = 'Your draft has been saved.';\n    function saveDraft() {\n      setIsSaved(true);\n      speak(`${title}. ${description}`, 'polite');\n    }\n    return <Stack direction=\"column\" gap=\"md\">\n                <Button onClick={saveDraft}>Save draft</Button>\n                {isSaved && <Notice.Root intent=\"success\">\n                        <Notice.Title>{title}</Notice.Title>\n                        <Notice.Description>{description}</Notice.Description>\n                        <Notice.Actions>\n                            <Notice.ActionButton onClick={() => setIsSaved(false)}>\n                                Dismiss\n                            </Notice.ActionButton>\n                        </Notice.Actions>\n                    </Notice.Root>}\n            </Stack>;\n  }\n}",
					...PoliteStatus.parameters?.docs?.source
				}
			}
		};
	})))();
}
//#endregion
export { init_announcements_story as a, announcements_story_exports as i, StaticNotice as n, UrgentError as r, PoliteStatus as t };
