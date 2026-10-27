import { n as __esmMin, r as __exportAll } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as useCopyToClipboard, t as init_use_copy_to_clipboard } from "./use-copy-to-clipboard-CTEg2C_M.js";
import { n as init_text, t as Text } from "./text-wjaOyqYP.js";
import { n as init_stack, t as Stack } from "./stack-B_tyTWv7.js";
import { a as Description, c as init_root, i as init_actions, n as init_action_button, o as init_description, r as Actions, s as Root, t as ActionButton } from "./action-button-CQHSK6Cp.js";
//#region ../packages/ui/src/notice/stories/disclosure.story.tsx
var disclosure_story_exports = /* @__PURE__ */ __exportAll({
	WithDetails: () => WithDetails,
	default: () => meta
});
function CopyButton({ text }) {
	const [hasCopied, setHasCopied] = (0, import_react.useState)(false);
	const copyRef = useCopyToClipboard(text, () => {
		setHasCopied(true);
	});
	(0, import_react.useEffect)(() => {
		setHasCopied(false);
	}, [text]);
	(0, import_react.useEffect)(() => {
		if (!hasCopied) return;
		const timeoutId = setTimeout(() => {
			setHasCopied(false);
		}, CONFIRMATION_TIMEOUT);
		return () => clearTimeout(timeoutId);
	}, [hasCopied]);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ActionButton, {
		ref: copyRef,
		variant: "outline",
		children: "Copy error"
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 58,
		columnNumber: 4
	}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Description, {
		role: "status",
		children: hasCopied ? "Copied" : ""
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 61,
		columnNumber: 4
	}, this)] }, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 57,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime, _jsxFileName, meta, CONFIRMATION_TIMEOUT, WithDetails;
function init_disclosure_story() {
	return (init_disclosure_story = __esmMin((() => {
		init_react();
		init_use_copy_to_clipboard();
		init_action_button(), init_description(), init_root(), init_actions();
		init_stack();
		init_text();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/notice/stories/disclosure.story.tsx";
		meta = {
			title: "Components/@wordpress-ui/Notice/Disclosure",
			id: "design-system-components-notice-disclosure",
			tags: ["!autodocs", "docs-only"],
			argTypes: {
				message: {
					control: "text",
					description: "Example content rendered inside Notice.Description."
				},
				details: {
					control: "text",
					description: "Example content revealed by the disclosure."
				}
			}
		};
		CONFIRMATION_TIMEOUT = 4e3;
		WithDetails = {
			args: {
				message: "Updating failed. Please try updating again.",
				details: "The title was rejected by a server-side rule.\nRemove \"Break save\" from the title, then try again."
			},
			render: function NoticeWithDetails({ message, details }) {
				const hasDetails = details.trim().length > 0;
				return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Root, {
					intent: "error",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Description, {
						render: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack, {
							direction: "column",
							gap: "sm"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 80,
							columnNumber: 15
						}, this),
						style: { overflowWrap: "anywhere" },
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: message }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 83,
							columnNumber: 6
						}, this), hasDetails && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("details", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("summary", { children: "Details" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 86,
							columnNumber: 8
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, {
							render: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("pre", {}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 88,
								columnNumber: 18
							}, this),
							style: {
								marginBlockStart: "var(--wpds-dimension-gap-sm, 8px)",
								whiteSpace: "pre-wrap"
							},
							children: details
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 87,
							columnNumber: 8
						}, this)] }, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 85,
							columnNumber: 7
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 79,
						columnNumber: 5
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Actions, {
						render: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack, { align: "center" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 100,
							columnNumber: 30
						}, this),
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CopyButton, { text: hasDetails ? `${message}\n\n${details}` : message }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 101,
							columnNumber: 6
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 100,
						columnNumber: 5
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 78,
					columnNumber: 4
				}, this);
			}
		};
		WithDetails.parameters = {
			...WithDetails.parameters,
			docs: {
				...WithDetails.parameters?.docs,
				source: {
					originalSource: "{\n  args: {\n    message: 'Updating failed. Please try updating again.',\n    details: 'The title was rejected by a server-side rule.\\nRemove \"Break save\" from the title, then try again.'\n  },\n  render: function NoticeWithDetails({\n    message,\n    details\n  }) {\n    const hasDetails = details.trim().length > 0;\n    return <Notice.Root intent=\"error\">\n                <Notice.Description render={<Stack direction=\"column\" gap=\"sm\" />} style={{\n        overflowWrap: 'anywhere'\n      }}>\n                    <div>{message}</div>\n                    {hasDetails && <details>\n                            <summary>Details</summary>\n                            <Text render={<pre />} style={{\n            marginBlockStart: 'var(--wpds-dimension-gap-sm)',\n            whiteSpace: 'pre-wrap'\n          }}>\n                                {details}\n                            </Text>\n                        </details>}\n                </Notice.Description>\n                <Notice.Actions render={<Stack align=\"center\" />}>\n                    <CopyButton text={hasDetails ? `${message}\\n\\n${details}` : message} />\n                </Notice.Actions>\n            </Notice.Root>;\n  }\n}",
					...WithDetails.parameters?.docs?.source
				}
			}
		};
	})))();
}
//#endregion
export { disclosure_story_exports as n, init_disclosure_story as r, WithDetails as t };
