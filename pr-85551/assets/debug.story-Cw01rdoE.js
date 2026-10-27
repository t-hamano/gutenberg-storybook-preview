import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as init_button, t as Button } from "./button-DruDjqNA.js";
import { n as lock_outline_default } from "./lock-outline-Clc7iN3S.js";
import { c as init_widget_context, d as useDashboardInternalContext, l as useWidgetContext, n as init_widget_dashboard, t as WidgetDashboard, u as init_dashboard_context } from "./widget-dashboard-Dl6c0jFY.js";
import { r as init_build_module } from "./library.story-CbQx3MQ6.js";
//#region ../packages/widget-dashboard/src/stories/debug.story.tsx
function LockCardWidget({ attributes }) {
	const { label = "Card" } = attributes ?? {};
	const widget = useWidgetContext();
	const locks = (0, import_react.useContext)(TileLocksContext)[widget?.uuid ?? ""] ?? [];
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		style: {
			display: "grid",
			gap: "var(--wpds-dimension-gap-xs, 4px)",
			alignContent: "center",
			height: "100%",
			color: "var(--wpds-color-foreground-content-neutral, #1e1e1e)"
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", {
				style: { fontSize: "var(--wpds-typography-font-size-2xl, 32px)" },
				children: `#${(widget?.index ?? 0) + 1} · ${cardName(widget?.uuid ?? "")}`
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 76,
				columnNumber: 4
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
				style: {
					color: "var(--wpds-color-foreground-content-neutral-weak, #707070)",
					fontSize: "var(--wpds-typography-font-size-sm, 12px)"
				},
				children: `Label: ${label}`
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 85,
				columnNumber: 4
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				style: {
					display: "flex",
					flexWrap: "wrap",
					gap: "var(--wpds-dimension-gap-xs, 4px)",
					fontSize: "var(--wpds-typography-font-size-xs, 11px)",
					fontWeight: "var(--wpds-typography-font-weight-emphasis, 600)",
					textTransform: "uppercase"
				},
				children: INSTANCE_OPERATIONS.map((operation) => {
					const denied = locks.includes(operation);
					return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
						style: {
							backgroundColor: denied ? "var(--wpds-color-background-surface-error-weak, #fff6f5)" : "var(--wpds-color-background-surface-success-weak, #ebffed)",
							borderRadius: "var(--wpds-border-radius-sm, 2px)",
							color: denied ? "var(--wpds-color-foreground-content-error, #470000)" : "var(--wpds-color-foreground-content-success, #002900)",
							paddingInline: "var(--wpds-dimension-padding-xs, 4px)"
						},
						children: `${denied ? "✕" : "✓"} ${operation}`
					}, operation, false, {
						fileName: _jsxFileName,
						lineNumber: 106,
						columnNumber: 7
					}, this);
				})
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 93,
				columnNumber: 4
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 67,
		columnNumber: 3
	}, this);
}
function RogueTriggers() {
	const { layout, onLayoutChange } = useDashboardInternalContext();
	const insert = (widget) => {
		stagedInstances += 1;
		onLayoutChange([...layout, {
			...widget,
			uuid: `staged-${stagedInstances}`
		}]);
	};
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		style: {
			display: "flex",
			flexWrap: "wrap",
			gap: "var(--wpds-dimension-gap-xs, 4px)"
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
				variant: "outline",
				size: "compact",
				onClick: () => onLayoutChange([...layout].reverse()),
				children: "Reverse the order"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 208,
				columnNumber: 4
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
				variant: "outline",
				size: "compact",
				onClick: () => onLayoutChange(layout.filter((widget) => widget.uuid !== "card-delta")),
				children: "Remove the Delta card"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 215,
				columnNumber: 4
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
				variant: "outline",
				size: "compact",
				onClick: () => onLayoutChange(layout.map((widget) => ({
					...widget,
					placement: {
						...widget.placement,
						width: 4
					}
				}))),
				children: "Set every width to 4"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 228,
				columnNumber: 4
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
				variant: "outline",
				size: "compact",
				onClick: () => onLayoutChange(layout.map((widget) => ({
					...widget,
					attributes: {
						...widget.attributes,
						label: "Hijacked"
					}
				}))),
				children: "Rename every label"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 242,
				columnNumber: 4
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
				variant: "outline",
				size: "compact",
				onClick: () => insert({
					type: rejectedWidgetType.name,
					attributes: {
						metric: "orders",
						target: "1000"
					},
					placement: {
						width: 1,
						height: 1
					}
				}),
				children: "Insert a goal (rejected)"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 262,
				columnNumber: 4
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
				variant: "outline",
				size: "compact",
				onClick: () => insert({
					type: "demo/lock-card",
					attributes: { label: "Staged" },
					placement: {
						width: 1,
						height: 1
					}
				}),
				children: "Insert a card (allowed)"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 275,
				columnNumber: 4
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
				variant: "outline",
				size: "compact",
				onClick: () => onLayoutChange(ENFORCEMENT_LAYOUT),
				children: "Stage the initial layout"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 288,
				columnNumber: 4
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 201,
		columnNumber: 3
	}, this);
}
function StagingEnforcementStory({ alpha = [], bravo = [], charlie = [], delta = [] }) {
	const [layout, setLayout] = (0, import_react.useState)(ENFORCEMENT_LAYOUT);
	const [editMode, setEditMode] = (0, import_react.useState)(false);
	const tileLocks = (0, import_react.useMemo)(() => ({
		"card-alpha": alpha,
		"card-bravo": bravo,
		"card-charlie": charlie,
		"card-delta": delta
	}), [
		alpha,
		bravo,
		charlie,
		delta
	]);
	const canPerform = (0, import_react.useMemo)(() => (request) => {
		if (request.operation === "insert") return request.widgetType.name !== rejectedWidgetType.name;
		if (!("widget" in request)) return true;
		return !tileLocks[request.widget.uuid]?.includes(request.operation);
	}, [tileLocks]);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TileLocksContext.Provider, {
		value: tileLocks,
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WidgetDashboard.Policy, {
			canPerform,
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WidgetDashboard, {
				widgetTypes: [lockCardWidgetType, rejectedWidgetType],
				layout,
				onLayoutChange: setLayout,
				editMode,
				onEditChange: setEditMode,
				resolveWidgetModule: resolveDebugModule,
				gridSettings: {
					model: "grid",
					rowHeight: 200
				},
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					style: {
						display: "flex",
						flexWrap: "wrap",
						alignItems: "flex-start",
						justifyContent: "space-between",
						gap: "var(--wpds-dimension-gap-md, 12px)",
						marginBlockEnd: "var(--wpds-dimension-gap-md, 12px)"
					},
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RogueTriggers, {}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 365,
						columnNumber: 7
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WidgetDashboard.Actions, {}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 366,
						columnNumber: 7
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 355,
					columnNumber: 6
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WidgetDashboard.Widgets, {}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 368,
					columnNumber: 6
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 346,
				columnNumber: 5
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 345,
			columnNumber: 4
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 344,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime, _jsxFileName, INSTANCE_OPERATIONS, TileLocksContext, cardName, lockCardWidgetType, rejectedWidgetType, resolveDebugModule, ENFORCEMENT_LAYOUT, stagedInstances, meta, lockControl, StagingEnforcement;
function init_debug_story() {
	return (init_debug_story = __esmMin((() => {
		init_react();
		init_build_module();
		init_button();
		init_dashboard_context();
		init_widget_context();
		init_widget_dashboard();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/widget-dashboard/src/stories/debug.story.tsx";
		INSTANCE_OPERATIONS = [
			"move",
			"resize",
			"remove",
			"edit"
		];
		TileLocksContext = (0, import_react.createContext)({});
		cardName = (uuid) => {
			const raw = uuid.replace(/^card-/, "").replace(/-/g, " ");
			return raw.charAt(0).toUpperCase() + raw.slice(1);
		};
		lockCardWidgetType = {
			apiVersion: 1,
			name: "demo/lock-card",
			title: "Lock Card",
			description: "Shows its canonical position and which operations the policy allows on it.",
			icon: lock_outline_default,
			renderModule: "demo/widgets/lock-card/render",
			attributes: [{
				id: "label",
				label: "Label",
				type: "text",
				relevance: "high"
			}],
			example: { attributes: { label: "Example" } }
		};
		rejectedWidgetType = {
			apiVersion: 1,
			name: "demo/goal-progress",
			title: "Goal Progress",
			renderModule: "demo/widgets/goal-progress/render"
		};
		resolveDebugModule = async () => ({ default: LockCardWidget });
		ENFORCEMENT_LAYOUT = [
			{
				uuid: "card-alpha",
				type: "demo/lock-card",
				attributes: { label: "Alpha" },
				placement: {
					width: 1,
					height: 1
				}
			},
			{
				uuid: "card-bravo",
				type: "demo/lock-card",
				attributes: { label: "Bravo" },
				placement: {
					width: 2,
					height: 1
				}
			},
			{
				uuid: "card-charlie",
				type: "demo/lock-card",
				attributes: { label: "Charlie" },
				placement: {
					width: 1,
					height: 1
				}
			},
			{
				uuid: "card-delta",
				type: "demo/lock-card",
				attributes: { label: "Delta" },
				placement: {
					width: 1,
					height: 1
				}
			}
		];
		stagedInstances = 0;
		meta = {
			id: "widget-dashboard-playground-debug",
			title: "Widgets/Dashboard/Playground/Debug",
			component: WidgetDashboard,
			tags: ["status-experimental"],
			parameters: { a11y: { test: "todo" } }
		};
		lockControl = {
			control: "check",
			options: INSTANCE_OPERATIONS
		};
		StagingEnforcement = {
			render: (args) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StagingEnforcementStory, { ...args }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 395,
				columnNumber: 22
			}, void 0),
			args: {
				alpha: [],
				bravo: ["move"],
				charlie: ["resize"],
				delta: ["remove", "edit"]
			},
			argTypes: {
				alpha: {
					...lockControl,
					description: "Operations denied on the Alpha card."
				},
				bravo: {
					...lockControl,
					description: "Operations denied on the Bravo card."
				},
				charlie: {
					...lockControl,
					description: "Operations denied on the Charlie card."
				},
				delta: {
					...lockControl,
					description: "Operations denied on the Delta card."
				}
			},
			parameters: { docs: { description: { story: `
Debug fixture. Every tile is a **Lock Card**: it shows its live position in the canonical order and one chip per instance operation, ✓ when the policy allows it and ✕ when it denies it. The controls edit each card's denied operations; by default Bravo cannot move, Charlie cannot resize, Delta cannot be removed or edited, and Alpha is free. Enter Customize to see the same locks on the chrome: a move-denied card refuses to drag and holds its position while the others reorder around it, a resize-denied card offers no resize handle or width menu, a remove-denied card has no Remove control, and the inserter rejects Goal Progress.

The buttons bypass the chrome and write to the engine's staging directly, which is what the staging enforcement exists for: with the default locks, reversing holds Bravo in place, the width sweep skips Charlie, the rename skips Delta, and removing Delta re-asserts it, while the rejected insertion never lands and the allowed one does. Relax a lock from the controls and the same trigger goes through.
` } } }
		};
		StagingEnforcement.parameters = {
			...StagingEnforcement.parameters,
			docs: {
				...StagingEnforcement.parameters?.docs,
				source: {
					originalSource: "{\n  render: args => <StagingEnforcementStory {...args} />,\n  args: {\n    alpha: [],\n    bravo: ['move'],\n    charlie: ['resize'],\n    delta: ['remove', 'edit']\n  },\n  argTypes: {\n    alpha: {\n      ...lockControl,\n      description: 'Operations denied on the Alpha card.'\n    },\n    bravo: {\n      ...lockControl,\n      description: 'Operations denied on the Bravo card.'\n    },\n    charlie: {\n      ...lockControl,\n      description: 'Operations denied on the Charlie card.'\n    },\n    delta: {\n      ...lockControl,\n      description: 'Operations denied on the Delta card.'\n    }\n  },\n  parameters: {\n    docs: {\n      description: {\n        story: `\nDebug fixture. Every tile is a **Lock Card**: it shows its live position in the canonical order and one chip per instance operation, ✓ when the policy allows it and ✕ when it denies it. The controls edit each card's denied operations; by default Bravo cannot move, Charlie cannot resize, Delta cannot be removed or edited, and Alpha is free. Enter Customize to see the same locks on the chrome: a move-denied card refuses to drag and holds its position while the others reorder around it, a resize-denied card offers no resize handle or width menu, a remove-denied card has no Remove control, and the inserter rejects Goal Progress.\n\nThe buttons bypass the chrome and write to the engine's staging directly, which is what the staging enforcement exists for: with the default locks, reversing holds Bravo in place, the width sweep skips Charlie, the rename skips Delta, and removing Delta re-asserts it, while the rejected insertion never lands and the allowed one does. Relax a lock from the controls and the same trigger goes through.\n`\n      }\n    }\n  }\n}",
					...StagingEnforcement.parameters?.docs?.source
				}
			}
		};
	})))();
}
//#endregion
init_debug_story();
export { StagingEnforcement, meta as default };
