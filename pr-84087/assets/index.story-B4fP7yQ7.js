import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as init_badge, t as Badge } from "./badge-rMGbZWWs.js";
//#region ../packages/ui/src/badge/stories/index.story.tsx
var import_jsx_dev_runtime, _jsxFileName, meta, Default, High, Medium, Low, Stable, Informational, Draft, None, AllIntents;
function init_index_story() {
	return (init_index_story = __esmMin((() => {
		init_react();
		init_badge();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/badge/stories/index.story.tsx";
		meta = {
			tags: ["manifest"],
			title: "Components/@wordpress-ui/Badge",
			id: "design-system-components-badge",
			component: Badge,
			parameters: { componentStatus: {
				status: "recommended",
				whereUsed: "global"
			} }
		};
		Default = { args: { children: "Badge" } };
		High = {
			...Default,
			args: {
				...Default.args,
				intent: "high"
			}
		};
		Medium = {
			...Default,
			args: {
				...Default.args,
				intent: "medium"
			}
		};
		Low = {
			...Default,
			args: {
				...Default.args,
				intent: "low"
			}
		};
		Stable = {
			...Default,
			args: {
				...Default.args,
				intent: "stable"
			}
		};
		Informational = {
			...Default,
			args: {
				...Default.args,
				intent: "informational"
			}
		};
		Draft = {
			...Default,
			args: {
				...Default.args,
				intent: "draft"
			}
		};
		None = {
			...Default,
			args: {
				...Default.args,
				intent: "none"
			}
		};
		AllIntents = {
			...Default,
			render: (args) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				style: {
					display: "grid",
					gridTemplateColumns: "max-content min-content",
					gap: "1rem",
					color: "var(--wpds-color-foreground-content-neutral, #1e1e1e)"
				},
				children: [
					"high",
					"medium",
					"low",
					"stable",
					"informational",
					"draft",
					"none"
				].map((intent) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					style: {
						paddingInlineEnd: "1rem",
						display: "flex",
						alignItems: "center"
					},
					children: intent
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 106,
					columnNumber: 6
				}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					style: {
						padding: "0.5rem 1rem",
						display: "flex",
						alignItems: "center"
					},
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Badge, {
						...args,
						intent
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 122,
						columnNumber: 7
					}, void 0)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 115,
					columnNumber: 6
				}, void 0)] }, intent, true, {
					fileName: _jsxFileName,
					lineNumber: 105,
					columnNumber: 5
				}, void 0))
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 86,
				columnNumber: 3
			}, void 0)
		};
		Default.parameters = {
			...Default.parameters,
			docs: {
				...Default.parameters?.docs,
				source: {
					originalSource: "{\n  args: {\n    children: 'Badge'\n  }\n}",
					...Default.parameters?.docs?.source
				}
			}
		};
		High.parameters = {
			...High.parameters,
			docs: {
				...High.parameters?.docs,
				source: {
					originalSource: "{\n  ...Default,\n  args: {\n    ...Default.args,\n    intent: 'high'\n  }\n}",
					...High.parameters?.docs?.source
				}
			}
		};
		Medium.parameters = {
			...Medium.parameters,
			docs: {
				...Medium.parameters?.docs,
				source: {
					originalSource: "{\n  ...Default,\n  args: {\n    ...Default.args,\n    intent: 'medium'\n  }\n}",
					...Medium.parameters?.docs?.source
				}
			}
		};
		Low.parameters = {
			...Low.parameters,
			docs: {
				...Low.parameters?.docs,
				source: {
					originalSource: "{\n  ...Default,\n  args: {\n    ...Default.args,\n    intent: 'low'\n  }\n}",
					...Low.parameters?.docs?.source
				}
			}
		};
		Stable.parameters = {
			...Stable.parameters,
			docs: {
				...Stable.parameters?.docs,
				source: {
					originalSource: "{\n  ...Default,\n  args: {\n    ...Default.args,\n    intent: 'stable'\n  }\n}",
					...Stable.parameters?.docs?.source
				}
			}
		};
		Informational.parameters = {
			...Informational.parameters,
			docs: {
				...Informational.parameters?.docs,
				source: {
					originalSource: "{\n  ...Default,\n  args: {\n    ...Default.args,\n    intent: 'informational'\n  }\n}",
					...Informational.parameters?.docs?.source
				}
			}
		};
		Draft.parameters = {
			...Draft.parameters,
			docs: {
				...Draft.parameters?.docs,
				source: {
					originalSource: "{\n  ...Default,\n  args: {\n    ...Default.args,\n    intent: 'draft'\n  }\n}",
					...Draft.parameters?.docs?.source
				}
			}
		};
		None.parameters = {
			...None.parameters,
			docs: {
				...None.parameters?.docs,
				source: {
					originalSource: "{\n  ...Default,\n  args: {\n    ...Default.args,\n    intent: 'none'\n  }\n}",
					...None.parameters?.docs?.source
				}
			}
		};
		AllIntents.parameters = {
			...AllIntents.parameters,
			docs: {
				...AllIntents.parameters?.docs,
				source: {
					originalSource: "{\n  ...Default,\n  render: args => <div style={{\n    display: 'grid',\n    gridTemplateColumns: 'max-content min-content',\n    gap: '1rem',\n    color: 'var(--wpds-color-foreground-content-neutral)'\n  }}>\n            {(['high', 'medium', 'low', 'stable', 'informational', 'draft', 'none'] as const).map(intent => <Fragment key={intent}>\n                    <div style={{\n        paddingInlineEnd: '1rem',\n        display: 'flex',\n        alignItems: 'center'\n      }}>\n                        {intent}\n                    </div>\n                    <div style={{\n        padding: '0.5rem 1rem',\n        display: 'flex',\n        alignItems: 'center'\n      }}>\n                        <Badge {...args} intent={intent} />\n                    </div>\n                </Fragment>)}\n        </div>\n}",
					...AllIntents.parameters?.docs?.source
				}
			}
		};
	})))();
}
//#endregion
init_index_story();
export { AllIntents, Default, Draft, High, Informational, Low, Medium, None, Stable, meta as default };
