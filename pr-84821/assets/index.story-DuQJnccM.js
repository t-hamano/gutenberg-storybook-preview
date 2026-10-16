import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as init_button, t as Button } from "./button-6iH1so4R.js";
import { a as chart_bar_default, i as shield_default, n as trending_up_default } from "./trending-up-D9iWh6Ez.js";
import { t as download_default } from "./download-OAdBEzAR.js";
import { a as WidgetHostProvider, f as ROW_HEIGHT_PRESETS, i as useWidgetActionsCollector, n as init_widget_dashboard, o as init_widget_host, p as init_row_height_presets, r as init_widget_actions_collector, s as useWidgetHost, t as WidgetDashboard } from "./widget-dashboard-DxeucfDY.js";
import { c as CommandMenu, t as init_build_module } from "./build-module-Bvs0-yaM.js";
import { n as page_default, t as init_page } from "./page-DiMQE-I8.js";
import { r as init_build_module$1 } from "./library.story-CFsmdbdz.js";
//#region ../packages/widget-primitives/build-module/hooks/use-widget-actions.mjs
function isSameAction(a, b) {
	const left = a;
	const right = b;
	const keys = Object.keys(left);
	return keys.length === Object.keys(right).length && keys.every((key) => Object.is(left[key], right[key]) || typeof left[key] === "function" && typeof right[key] === "function");
}
function isSameList(a, b) {
	return a.length === b.length && a.every((action, index) => isSameAction(action, b[index]));
}
function useWidgetActions(actions) {
	const hostDeclare = useWidgetHost().actions?.declare;
	const collector = useWidgetActionsCollector();
	const callId = (0, import_react.useId)();
	const declare = (0, import_react.useMemo)(() => collector ? (next) => collector.declare(callId, next) : hostDeclare, [
		collector,
		hostDeclare,
		callId
	]);
	const latestRef = (0, import_react.useRef)(actions);
	const declaredRef = (0, import_react.useRef)(null);
	(0, import_react.useLayoutEffect)(() => {
		latestRef.current = actions;
		if (!declare || declaredRef.current && isSameList(declaredRef.current, actions)) return;
		declaredRef.current = actions;
		declare(actions.map((action) => {
			if (!("callback" in action)) return action;
			return {
				...action,
				callback: () => {
					const current = latestRef.current.find(({ id }) => id === action.id);
					return current && "callback" in current ? current.callback() : void 0;
				}
			};
		}));
	});
	(0, import_react.useLayoutEffect)(() => () => {
		declaredRef.current = null;
		declare?.(NO_ACTIONS);
	}, [declare]);
	return collector ? collector.hosted : !!hostDeclare;
}
var NO_ACTIONS;
function init_use_widget_actions() {
	return (init_use_widget_actions = __esmMin((() => {
		init_react();
		init_widget_host();
		init_widget_actions_collector();
		NO_ACTIONS = [];
	})))();
}
//#endregion
//#region ../packages/widget-dashboard/src/stories/index.story.tsx
function TrafficSnapshotWidget({ attributes }) {
	const { metric = "views", period = "week", label = "Traffic" } = attributes ?? {};
	const metricLabel = METRICS.find((entry) => entry.value === metric)?.label ?? metric;
	const periodLabel = PERIODS.find((entry) => entry.value === period)?.label ?? period;
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		style: {
			display: "grid",
			gap: "var(--wpds-dimension-gap-xs, 4px)",
			alignContent: "center",
			height: "100%",
			color: "var(--wpds-color-foreground-content-neutral, #1e1e1e)"
		},
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", {
			style: { fontSize: "var(--wpds-typography-font-size-2xl, 32px)" },
			children: SAMPLE_COUNTS[metric][period].toLocaleString("en-US")
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 105,
			columnNumber: 4
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
			style: {
				color: "var(--wpds-color-foreground-content-neutral-weak, #707070)",
				fontSize: "var(--wpds-typography-font-size-sm, 12px)"
			},
			children: `${label}: ${metricLabel}, ${periodLabel}`
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 112,
			columnNumber: 4
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 96,
		columnNumber: 3
	}, this);
}
function GoalProgressWidget({ attributes }) {
	const { metric = "revenue", target = "5000" } = attributes ?? {};
	const metricLabel = GOAL_METRICS.find((entry) => entry.value === metric)?.label ?? metric;
	const targetLabel = GOAL_TARGETS.find((entry) => entry.value === target)?.label ?? target;
	const percent = Math.min(100, Math.round(GOAL_CURRENT[metric] / Number(target) * 100));
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
				children: `${percent}%`
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 219,
				columnNumber: 4
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				style: {
					background: "var(--wpds-color-background-surface-neutral-weak, #f4f4f4)",
					borderRadius: "var(--wpds-border-radius-md, 4px)",
					height: 8,
					overflow: "hidden"
				},
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
					background: "var(--wpds-color-background-surface-brand, color-mix(in oklch, var(--wp-admin-theme-color, #3858e9) 9%, white))",
					height: "100%",
					width: `${percent}%`
				} }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 235,
					columnNumber: 5
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 226,
				columnNumber: 4
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
				style: {
					color: "var(--wpds-color-foreground-content-neutral-weak, #707070)",
					fontSize: "var(--wpds-typography-font-size-sm, 12px)"
				},
				children: `${metricLabel} vs ${targetLabel}`
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 244,
				columnNumber: 4
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 210,
		columnNumber: 3
	}, this);
}
function downloadChecks(checks) {
	const rows = ["Check,Status", ...checks.map((check) => `${check.label},${check.status}`)];
	const url = URL.createObjectURL(new Blob([rows.join("\n")], { type: "text/csv" }));
	const anchor = document.createElement("a");
	anchor.href = url;
	anchor.download = "site-checks.csv";
	anchor.click();
	URL.revokeObjectURL(url);
}
function ChecksExportSection({ checks }) {
	const [exported, setExported] = (0, import_react.useState)(0);
	useWidgetActions([{
		id: "export",
		label: "Download CSV",
		icon: download_default,
		relevance: "medium",
		callback: async () => {
			await wait(1500);
			downloadChecks(checks);
			setExported(checks.length);
		}
	}]);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
		style: {
			color: "var(--wpds-color-foreground-content-neutral-weak, #707070)",
			fontSize: "var(--wpds-typography-font-size-sm, 12px)"
		},
		children: exported > 0 ? `Exported ${exported} checks.` : `Export ready for ${checks.length} checks.`
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 367,
		columnNumber: 3
	}, this);
}
function SiteStatusWidget() {
	const [checks, setChecks] = (0, import_react.useState)(null);
	const [hasExport, setHasExport] = (0, import_react.useState)(true);
	(0, import_react.useEffect)(() => {
		const timer = setTimeout(() => setChecks(SITE_CHECKS), 1500);
		return () => clearTimeout(timer);
	}, []);
	useWidgetActions(checks?.length ? [{
		id: "details",
		label: `Review ${checks.length} items`,
		relevance: "high",
		href: "admin.php?page=demo-dashboard&p=/status?filter=issues"
	}] : []);
	let status = "Checking the site…";
	if (checks) status = checks.length > 0 ? `${checks.length} checks need attention.` : "Every check passes.";
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		style: {
			display: "grid",
			gap: "var(--wpds-dimension-gap-sm, 8px)",
			alignContent: "start",
			color: "var(--wpds-color-foreground-content-neutral, #1e1e1e)"
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: status }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 419,
				columnNumber: 4
			}, this),
			checks && checks.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
				style: {
					margin: 0,
					paddingInlineStart: "1.25em"
				},
				children: checks.map((check) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: `${check.label} (${check.status})` }, check.id, false, {
					fileName: _jsxFileName,
					lineNumber: 423,
					columnNumber: 7
				}, this))
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 421,
				columnNumber: 5
			}, this),
			checks && checks.length > 0 && hasExport && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChecksExportSection, { checks }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 430,
				columnNumber: 5
			}, this),
			checks && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				style: {
					display: "flex",
					gap: "var(--wpds-dimension-gap-xs, 4px)"
				},
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
					variant: "outline",
					tone: "neutral",
					size: "compact",
					onClick: () => setChecks(checks.length > 0 ? checks.slice(1) : SITE_CHECKS),
					children: checks.length > 0 ? "Resolve one" : "Reset"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 439,
					columnNumber: 6
				}, this), checks.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
					variant: "outline",
					tone: "neutral",
					size: "compact",
					onClick: () => setHasExport(!hasExport),
					children: hasExport ? "Hide export" : "Show export"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 454,
					columnNumber: 7
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 433,
				columnNumber: 5
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 411,
		columnNumber: 3
	}, this);
}
function DefaultStory() {
	const [layout, setLayout] = (0, import_react.useState)(INITIAL_LAYOUT);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WidgetDashboard, {
		widgetTypes: [trafficSnapshotWidgetType, goalProgressWidgetType],
		layout,
		onLayoutChange: setLayout,
		resolveWidgetModule: resolveDemoModule,
		gridSettings: {
			model: "grid",
			rowHeight: 200
		},
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WidgetDashboard.Widgets, {}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 578,
			columnNumber: 4
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 568,
		columnNumber: 3
	}, this);
}
function LongTitleStory() {
	const [layout, setLayout] = (0, import_react.useState)(LONG_TITLE_LAYOUT);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WidgetDashboard, {
		widgetTypes: [longTitleWidgetType],
		layout,
		onLayoutChange: setLayout,
		resolveWidgetModule: resolveDemoModule,
		gridSettings: {
			model: "grid",
			rowHeight: 200
		},
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WidgetDashboard.Widgets, {}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 618,
			columnNumber: 4
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 611,
		columnNumber: 3
	}, this);
}
function HostLinksStory() {
	const [layout, setLayout] = (0, import_react.useState)(HOST_LINKS_LAYOUT);
	const [lastNavigation, setLastNavigation] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		const onNavigate = (event) => setLastNavigation({ path: event.detail });
		window.addEventListener(DEMO_NAVIGATE_EVENT, onNavigate);
		return () => window.removeEventListener(DEMO_NAVIGATE_EVENT, onNavigate);
	}, []);
	(0, import_react.useEffect)(() => {
		if (!lastNavigation) return;
		const timer = setTimeout(() => setLastNavigation(null), 3e3);
		return () => clearTimeout(timer);
	}, [lastNavigation]);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WidgetHostProvider, {
		value: demoHost,
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
			role: "status",
			style: {
				color: "var(--wpds-color-foreground-content-neutral-weak, #707070)",
				fontSize: "var(--wpds-typography-font-size-sm, 12px)"
			},
			children: lastNavigation ? `Client-side navigation to ${lastNavigation.path}; the document never reloaded.` : "Pick \"See report\" in the widget footer: its target is a route this demo host owns."
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 787,
			columnNumber: 4
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WidgetDashboard, {
			widgetTypes: [hostLinksWidgetType],
			layout,
			onLayoutChange: setLayout,
			resolveWidgetModule: resolveDemoModule,
			gridSettings: {
				model: "grid",
				rowHeight: 200
			},
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WidgetDashboard.Widgets, {}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 806,
				columnNumber: 5
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 799,
			columnNumber: 4
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 786,
		columnNumber: 3
	}, this);
}
function RuntimeActionsStory() {
	const [layout, setLayout] = (0, import_react.useState)(RUNTIME_ACTIONS_LAYOUT);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WidgetHostProvider, {
		value: demoHost,
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WidgetDashboard, {
			widgetTypes: [siteStatusWidgetType],
			layout,
			onLayoutChange: setLayout,
			resolveWidgetModule: resolveDemoModule,
			gridSettings: {
				model: "grid",
				rowHeight: 260
			},
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WidgetDashboard.Widgets, {}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 856,
				columnNumber: 5
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 849,
			columnNumber: 4
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 848,
		columnNumber: 3
	}, this);
}
function PolicyStory({ profile }) {
	const [layout, setLayout] = (0, import_react.useState)(INITIAL_LAYOUT);
	const [editMode, setEditMode] = (0, import_react.useState)(false);
	const [currentHref, setCurrentHref] = (0, import_react.useState)("/analytics");
	const canPerform = (0, import_react.useMemo)(() => {
		const { operations } = PROFILES[profile];
		const sectionType = POLICY_SECTIONS.find((section) => section.href === currentHref)?.type;
		return (request) => {
			if (operations !== "all" && !operations.includes(request.operation)) return false;
			if (request.operation === "insert") return !sectionType || request.widgetType.name === sectionType;
			return true;
		};
	}, [profile, currentHref]);
	const link = (0, import_react.useCallback)(({ href, onClick, children, ...props }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
		...props,
		href,
		onClick: (event) => {
			event.preventDefault();
			setCurrentHref(href);
			onClick?.(event);
		},
		children
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 954,
		columnNumber: 4
	}, this), []);
	(0, import_react.useEffect)(() => {
		const containPaletteShortcut = (event) => {
			if ((event.metaKey || event.ctrlKey) && !event.shiftKey && !event.altKey && event.key.toLowerCase() === "k") event.stopPropagation();
		};
		document.addEventListener("keydown", containPaletteShortcut);
		return () => document.removeEventListener("keydown", containPaletteShortcut);
	}, []);
	const { label, summary } = PROFILES[profile];
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WidgetDashboard.Policy, {
		canPerform,
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WidgetDashboard, {
			widgetTypes: [trafficSnapshotWidgetType, goalProgressWidgetType],
			layout,
			onLayoutChange: setLayout,
			onLayoutReset: () => setLayout(INITIAL_LAYOUT),
			editMode,
			onEditChange: setEditMode,
			resolveWidgetModule: resolveDemoModule,
			gridSettings: {
				model: "grid",
				rowHeight: 200
			},
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(page_default, {
				title: "Analytics",
				subTitle: `Signed in as ${label}: ${summary}. The section scopes what "Add widget" offers.`,
				actions: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WidgetDashboard.Actions, {}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 1010,
					columnNumber: 16
				}, this),
				navigation: {
					items: POLICY_SECTIONS.map(({ label: text, href }) => ({
						label: text,
						href
					})),
					currentHref,
					ariaLabel: "Sections"
				},
				components: { link },
				showSidebarToggle: false,
				hasPadding: true,
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WidgetDashboard.Widgets, {}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 1025,
						columnNumber: 6
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WidgetDashboard.Commands, {}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 1026,
						columnNumber: 6
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CommandMenu, {}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 1027,
						columnNumber: 6
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 1007,
				columnNumber: 5
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 994,
			columnNumber: 4
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 993,
		columnNumber: 3
	}, this);
}
function describeColumnSteps(columns) {
	if (columns === 1) return "one column at every width";
	const middle = Math.min(2, columns);
	if (middle === columns) return `${columns} columns until the container narrows to one`;
	return `${columns} columns on a wide container, ${middle} as it narrows, then one`;
}
function GridSettingsStory({ columns, model, rowHeight, flowTolerance }) {
	const [layout, setLayout] = (0, import_react.useState)(GRID_SETTINGS_LAYOUT);
	const [editMode, setEditMode] = (0, import_react.useState)(false);
	const gridSettings = (0, import_react.useMemo)(() => model === "masonry" ? {
		model,
		columns,
		flowTolerance
	} : {
		model,
		columns,
		rowHeight: ROW_HEIGHT_PRESETS[rowHeight]
	}, [
		model,
		columns,
		flowTolerance,
		rowHeight
	]);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WidgetDashboard, {
		widgetTypes: [trafficSnapshotWidgetType, goalProgressWidgetType],
		layout,
		onLayoutChange: setLayout,
		editMode,
		onEditChange: setEditMode,
		resolveWidgetModule: resolveDemoModule,
		gridSettings,
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(page_default, {
			title: "Dashboard",
			subTitle: `${model === "masonry" ? "Masonry" : "Standard grid"}: ${describeColumnSteps(columns)}.`,
			actions: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WidgetDashboard.Actions, {}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 1172,
				columnNumber: 15
			}, this),
			showSidebarToggle: false,
			hasPadding: true,
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WidgetDashboard.Widgets, {}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 1176,
				columnNumber: 5
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 1167,
			columnNumber: 4
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 1155,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime, _jsxFileName, METRICS, PERIODS, SAMPLE_COUNTS, trafficSnapshotWidgetType, GOAL_METRICS, GOAL_TARGETS, GOAL_CURRENT, GOAL_FIELDS, GOAL_ACTIONS, goalProgressWidgetType, SITE_CHECKS, wait, siteStatusWidgetType, resolveDemoModule, INITIAL_LAYOUT, meta, longTitleWidgetType, LONG_TITLE_LAYOUT, LongTitle, Default, DEMO_NAVIGATE_EVENT, DemoRouteLink, DEMO_PAGE, demoHost, hostLinksWidgetType, HOST_LINKS_LAYOUT, HostLinks, RUNTIME_ACTIONS_LAYOUT, RuntimeActions, POLICY_SECTIONS, PROFILES, Policy, GRID_SETTINGS_LAYOUT, GridSettings;
function init_index_story() {
	return (init_index_story = __esmMin((() => {
		init_page();
		init_build_module();
		init_react();
		init_build_module$1();
		init_button();
		init_widget_host(), init_use_widget_actions();
		init_row_height_presets();
		init_widget_dashboard();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/widget-dashboard/src/stories/index.story.tsx";
		METRICS = [
			{
				value: "views",
				label: "Views"
			},
			{
				value: "visitors",
				label: "Visitors"
			},
			{
				value: "orders",
				label: "Orders"
			}
		];
		PERIODS = [
			{
				value: "day",
				label: "Last 24 hours"
			},
			{
				value: "week",
				label: "Last 7 days"
			},
			{
				value: "month",
				label: "Last 30 days"
			}
		];
		SAMPLE_COUNTS = {
			views: {
				day: 1284,
				week: 9051,
				month: 38402
			},
			visitors: {
				day: 342,
				week: 2410,
				month: 10236
			},
			orders: {
				day: 12,
				week: 87,
				month: 356
			}
		};
		trafficSnapshotWidgetType = {
			apiVersion: 1,
			name: "demo/traffic-snapshot",
			title: "Traffic Snapshot",
			description: "Sample metric widget used to exercise the inline attribute controls.",
			help: { content: "Three attributes. <strong>Metric</strong> and <strong>Period</strong> are <strong>high</strong> relevance — two fields in the header. <strong>Label</strong> is <strong>low</strong>, behind the settings button." },
			icon: chart_bar_default,
			renderModule: "demo/widgets/traffic-snapshot/render",
			attributes: [
				{
					id: "metric",
					label: "Metric",
					type: "text",
					elements: METRICS,
					relevance: "high"
				},
				{
					id: "period",
					label: "Period",
					type: "text",
					elements: PERIODS,
					relevance: "high"
				},
				{
					id: "label",
					label: "Label",
					type: "text"
				}
			],
			example: { attributes: {
				metric: "views",
				period: "week",
				label: "Traffic"
			} }
		};
		GOAL_METRICS = [{
			value: "revenue",
			label: "Revenue"
		}, {
			value: "orders",
			label: "Orders"
		}];
		GOAL_TARGETS = [
			{
				value: "1000",
				label: "1K target"
			},
			{
				value: "5000",
				label: "5K target"
			},
			{
				value: "10000",
				label: "10K target"
			}
		];
		GOAL_CURRENT = {
			revenue: 3600,
			orders: 118
		};
		GOAL_FIELDS = [{
			id: "metric",
			label: "Goal metric",
			type: "text",
			elements: GOAL_METRICS,
			relevance: "high"
		}];
		GOAL_ACTIONS = [
			{
				id: "view-goal",
				label: "View goal details",
				relevance: "high",
				icon: chart_bar_default,
				href: "https://wordpress.org/",
				openInNewTab: true
			},
			{
				id: "export-progress",
				label: "Export progress",
				relevance: "medium",
				icon: download_default,
				href: new URL("data:text/csv;base64,bWV0cmljLHRhcmdldCxjdXJyZW50LHBlcmNlbnQKcmV2ZW51ZSw1MDAwLDM2MDAsNzIK", "" + import.meta.url).href,
				download: "goal-progress.csv"
			},
			{
				id: "about-goals",
				label: "About goals",
				href: "https://wordpress.org/documentation/",
				openInNewTab: true
			}
		];
		goalProgressWidgetType = {
			apiVersion: 1,
			name: "demo/goal-progress",
			title: "Goal Progress",
			description: "Sample goal widget whose attributes are all promoted.",
			help: { content: "One attribute, <strong>Goal metric</strong>, at <strong>high</strong> relevance: a single field in the header and no settings button. Two promoted actions in the footer (a link and a download), plus one in the <strong>More</strong> menu." },
			icon: trending_up_default,
			renderModule: "demo/widgets/goal-progress/render",
			attributes: GOAL_FIELDS,
			actions: GOAL_ACTIONS,
			example: { attributes: {
				metric: "revenue",
				target: "5000"
			} }
		};
		SITE_CHECKS = [
			{
				id: 1,
				label: "Background updates",
				status: "critical"
			},
			{
				id: 2,
				label: "HTTPS status",
				status: "recommended"
			},
			{
				id: 3,
				label: "Page cache",
				status: "recommended"
			}
		];
		wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
		siteStatusWidgetType = {
			apiVersion: 1,
			name: "demo/site-status",
			title: "Site Status",
			description: "Checks the site and declares what to do next.",
			help: { content: "The declared <strong>Details</strong> action shows while the check runs. Then the widget declares <strong>Review N items</strong> in its place, and its export section declares <strong>Download CSV</strong>." },
			icon: shield_default,
			renderModule: "demo/widgets/site-status/render",
			actions: [{
				id: "details",
				label: "Details",
				relevance: "high",
				href: "admin.php?page=demo-dashboard&p=/status"
			}, {
				id: "about",
				label: "About site health",
				href: "https://wordpress.org/documentation/article/site-health-screen/",
				openInNewTab: true
			}]
		};
		resolveDemoModule = async (moduleId) => {
			let component;
			if (moduleId === goalProgressWidgetType.renderModule) component = GoalProgressWidget;
			else if (moduleId === siteStatusWidgetType.renderModule) component = SiteStatusWidget;
			else component = TrafficSnapshotWidget;
			return { default: component };
		};
		INITIAL_LAYOUT = [
			{
				uuid: "traffic-snapshot-wide",
				type: "demo/traffic-snapshot",
				attributes: {
					metric: "views",
					period: "week",
					label: "Traffic"
				},
				placement: {
					width: 2,
					height: 1,
					order: 1
				}
			},
			{
				uuid: "traffic-snapshot-narrow",
				type: "demo/traffic-snapshot",
				attributes: {
					metric: "visitors",
					period: "month",
					label: "Audience"
				},
				placement: {
					width: 1,
					height: 1,
					order: 2
				}
			},
			{
				uuid: "goal-progress-narrow",
				type: "demo/goal-progress",
				attributes: {
					metric: "revenue",
					target: "5000"
				},
				placement: {
					width: 1,
					height: 1,
					order: 3
				}
			}
		];
		meta = {
			id: "widget-dashboard-playground",
			title: "Widgets/Dashboard/Playground",
			component: WidgetDashboard,
			tags: ["status-experimental"],
			parameters: {
				a11y: { test: "todo" },
				componentStatus: {
					status: "use-with-caution",
					whereUsed: "global",
					notes: "The `@wordpress/widget-dashboard` package is under active development: APIs may change without notice. Recommended for development workflows only; not production-ready."
				},
				docs: { description: { component: `
\`WidgetDashboard\` is the stateless rendering engine for widget dashboards: the consumer owns the \`layout\` state, every mutation flows back through \`onLayoutChange\`, and widget types arrive through the \`widgetTypes\` prop. What users may do on it is the application's answer, given through \`WidgetDashboard.Policy\`.
` } }
			}
		};
		longTitleWidgetType = {
			...trafficSnapshotWidgetType,
			name: "demo/long-title",
			title: "Traffic Snapshot Against the Quarterly Revenue Target"
		};
		LONG_TITLE_LAYOUT = [{
			uuid: "long-title-wide",
			type: "demo/long-title",
			attributes: {
				metric: "views",
				period: "week",
				label: "Traffic"
			},
			placement: {
				width: 2,
				height: 1,
				order: 1
			}
		}, {
			uuid: "long-title-narrow",
			type: "demo/long-title",
			attributes: {
				metric: "visitors",
				period: "month",
				label: "Audience"
			},
			placement: {
				width: 1,
				height: 1,
				order: 2
			}
		}];
		LongTitle = {
			render: () => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LongTitleStory, {}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 624,
				columnNumber: 16
			}, void 0),
			parameters: { docs: { description: { story: `
The identity holds the widget type's title. When the row cannot fit it, the title truncates with an ellipsis rather than wrapping: the header is one line tall.

The same type appears at two widths. Resize the canvas to watch where the cut lands.
` } } }
		};
		Default = {
			render: () => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DefaultStory, {}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 639,
				columnNumber: 16
			}, void 0),
			parameters: { docs: { description: { story: `
In normal mode the dashboard promotes every \`relevance: 'high'\` attribute into the tile header as a bare inline control beside the identity, plus the settings entry point when a non-promoted attribute exists.

Two demo types exercise that policy:

- \`demo/traffic-snapshot\` declares three attributes: \`metric\` and \`period\` are \`relevance: 'high'\`, and \`label\` stays on the settings surface.
- \`demo/goal-progress\` declares a single attribute at \`relevance: 'high'\`: with nothing left for the settings surface, the inline presentation shows no settings entry point.

Their tiles compare the header presentations:

- The two-column tile fits the identity and both inline controls, so they stay in the header.
- The one-column traffic tile does not: the promoted fields collapse into a dropdown holding them as a form, while the settings trigger stays in the toolbar beside it.
- The one-column goal tile carries a single promoted field and no settings surface, so its toolbar holds that field and the actions menu.

The widget only declares relevance; the fit is measured by the chrome, so the same declaration adapts to any tile width. Resize the canvas to watch the headers switch presentations.

Beyond attributes, \`demo/goal-progress\` declares three \`actions\` spanning the relevance scale, and that scale routes them: "View goal details" at \`'high'\` mounts as a leading text link (declared icon as prefix) in a persistent chrome footer, "Export progress" at \`'medium'\` beside it as a trailing icon-only link, and "About goals" at the default \`'low'\` lands in the "More" menu. The widget declares each action as data plus its importance; the host owns the surfaces.

Each type also carries a \`help\` note, opened from the info icon in the header, that describes its attributes and what they do.
` } } }
		};
		DEMO_NAVIGATE_EVENT = "widget-dashboard-demo-navigate";
		DemoRouteLink = (0, import_react.forwardRef)(function UnforwardedDemoRouteLink({ path, onClick, children, ...props }, ref) {
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
				ref,
				...props,
				href: `?p=${path}`,
				onClick: (event) => {
					event.preventDefault();
					window.dispatchEvent(new CustomEvent(DEMO_NAVIGATE_EVENT, { detail: path }));
					onClick?.(event);
				},
				children
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 683,
				columnNumber: 3
			}, this);
		});
		DEMO_PAGE = "https://demo.example/wp-admin/admin.php?page=demo-dashboard";
		demoHost = { links: {
			match: (href) => {
				let url;
				try {
					url = new URL(href, DEMO_PAGE);
				} catch {
					return null;
				}
				if (url.pathname !== "/wp-admin/admin.php" || url.searchParams.get("page") !== "demo-dashboard") return null;
				return url.searchParams.get("p") ?? "/";
			},
			Link: DemoRouteLink
		} };
		hostLinksWidgetType = {
			...goalProgressWidgetType,
			name: "demo/goal-progress-links",
			help: { content: "The footer holds an in-app route link, an external link, and a download; the <strong>More</strong> menu keeps the rest." },
			actions: [{
				id: "see-report",
				label: "See report",
				relevance: "high",
				href: "admin.php?page=demo-dashboard&p=/reports"
			}, ...GOAL_ACTIONS]
		};
		HOST_LINKS_LAYOUT = [{
			uuid: "goal-progress-links",
			type: "demo/goal-progress-links",
			attributes: {
				metric: "revenue",
				target: "5000"
			},
			placement: {
				width: 2,
				height: 1,
				order: 1
			}
		}];
		HostLinks = {
			render: () => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HostLinksStory, {}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 813,
				columnNumber: 16
			}, void 0),
			parameters: { docs: { description: { story: `
The widget declares where to go; the host decides how to get there. This story mounts a \`WidgetHostProvider\` whose \`links\` capability recognizes hrefs targeting the demo application's own routes.

The footer shows the three materializations side by side:

- "See report" declares \`admin.php?page=demo-dashboard&p=/reports\`, a route this host owns: it mounts the host's route link and navigates client-side; the status line above confirms the document never reloaded.
- "View goal details" opens another origin in a new tab: a plain anchor.
- "Export progress" is a download: downloads always keep the plain anchor.

Without the provider the same declarations still work; every action falls back to a plain anchor. Real hosts implement the capability at their route layer with their actual router.
` } } }
		};
		RUNTIME_ACTIONS_LAYOUT = [{
			uuid: "site-status",
			type: "demo/site-status",
			attributes: {},
			placement: {
				width: 2,
				height: 1,
				order: 1
			}
		}];
		RuntimeActions = {
			render: () => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RuntimeActionsStory, {}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 863,
				columnNumber: 16
			}, void 0),
			parameters: { docs: { description: { story: `
A widget declares actions from what its render knows, through \`useWidgetActions\`, and from more than one component.

The footer starts with the declared "Details" link. Once the check settles, the widget declares "Review 3 items" with the same \`id\`, and it takes that place. Its export section, a child component, declares "Download CSV": a \`callback\` action, disabled while the export runs. \`WidgetRender\` joins both declarations, so the host receives one list.

"Hide export" unmounts the section and withdraws only its action. "Resolve one" shrinks the list; once nothing is left, "Details" returns.
` } } }
		};
		POLICY_SECTIONS = [
			{
				label: "All",
				href: "/analytics",
				type: null
			},
			{
				label: "Traffic",
				href: "/analytics/traffic",
				type: "demo/traffic-snapshot"
			},
			{
				label: "Goals",
				href: "/analytics/goals",
				type: "demo/goal-progress"
			}
		];
		PROFILES = {
			viewer: {
				label: "Viewer",
				summary: "reads the dashboard and edits nothing",
				operations: []
			},
			arranger: {
				label: "Arranger",
				summary: "may customize, move, and resize; never adds, removes, edits, or resets",
				operations: [
					"customize",
					"move",
					"resize"
				]
			},
			owner: {
				label: "Owner",
				summary: "may do everything",
				operations: "all"
			}
		};
		Policy = {
			render: (args) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PolicyStory, { ...args }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 1035,
				columnNumber: 22
			}, void 0),
			args: { profile: "owner" },
			argTypes: { profile: {
				control: "select",
				options: Object.keys(PROFILES),
				description: "The user profile the application maps to a policy. Viewer: nothing. Arranger: customize, move, resize. Owner: everything, including reset."
			} },
			parameters: { docs: { description: { story: `
The application governs the dashboard; the widget types stay untouched. This story mounts \`WidgetDashboard.Policy\` around the dashboard with a \`canPerform\` closing over the signed-in profile and the active section, and composes the dashboard inside an admin \`Page\`: the section links in its navigation, the dashboard actions in its actions slot.

Switch the \`profile\` control. A Viewer gets no Customize button, no Reset to default entry, no attribute controls, and read-only widgets (no \`setAttributes\`). An Arranger enters customize mode and drags or resizes tiles, but has no Add widget trigger, no Reset to default entry, no Remove control, and no attribute editing. An Owner does everything.

The command palette is mounted too: press ⌘K (Ctrl+K outside macOS) and the commands follow the same policy. An Owner sees Customize dashboard, Add dashboard widgets, and Reset dashboard widgets to default; an Arranger keeps Customize dashboard only; a Viewer gets no dashboard commands.

Switch the section, then open "Add widget": the listing follows the section, even while open; the excluded types keep rendering where already placed because the \`widgetTypes\` registry never changes.

Nested policies compose restrictively; without a policy, every operation is allowed. See the **Policy** page for the contract.
` } } }
		};
		GRID_SETTINGS_LAYOUT = [
			{
				uuid: "grid-settings-traffic-week",
				type: "demo/traffic-snapshot",
				attributes: {
					metric: "views",
					period: "week",
					label: "Traffic"
				},
				placement: {
					width: 2,
					height: 1,
					order: 1
				}
			},
			{
				uuid: "grid-settings-goal-revenue",
				type: "demo/goal-progress",
				attributes: {
					metric: "revenue",
					target: "5000"
				},
				placement: {
					width: 1,
					height: 1,
					order: 2
				}
			},
			{
				uuid: "grid-settings-audience-tall",
				type: "demo/traffic-snapshot",
				attributes: {
					metric: "visitors",
					period: "month",
					label: "Audience"
				},
				placement: {
					width: 1,
					height: 2,
					order: 3
				}
			},
			{
				uuid: "grid-settings-goal-orders",
				type: "demo/goal-progress",
				attributes: {
					metric: "orders",
					target: "1000"
				},
				placement: {
					width: 2,
					height: 1,
					order: 4
				}
			},
			{
				uuid: "grid-settings-traffic-day",
				type: "demo/traffic-snapshot",
				attributes: {
					metric: "views",
					period: "day",
					label: "Today"
				},
				placement: {
					width: 1,
					height: 1,
					order: 5
				}
			},
			{
				uuid: "grid-settings-goal-stretch",
				type: "demo/goal-progress",
				attributes: {
					metric: "revenue",
					target: "10000"
				},
				placement: {
					width: 1,
					height: 1,
					order: 6
				}
			}
		];
		GridSettings = {
			render: (args) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(GridSettingsStory, { ...args }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 1183,
				columnNumber: 22
			}, void 0),
			args: {
				columns: 4,
				model: "grid",
				rowHeight: "medium",
				flowTolerance: 16
			},
			argTypes: {
				columns: {
					control: {
						type: "range",
						min: 1,
						max: 12,
						step: 1
					},
					description: "Wide-container column count. The host decides; the package only floors it at one."
				},
				model: {
					control: "radio",
					options: ["grid", "masonry"],
					description: "The grid model. `grid` gives uniform rows and two-axis spans; `masonry` drives heights from content."
				},
				rowHeight: {
					control: "radio",
					options: Object.keys(ROW_HEIGHT_PRESETS),
					description: "Height of each grid row. Grid model only.",
					if: {
						arg: "model",
						eq: "grid"
					}
				},
				flowTolerance: {
					control: {
						type: "range",
						min: 0,
						max: 200,
						step: 4
					},
					description: "Pixel tolerance for source-order tiebreaking between lanes. Masonry model only.",
					if: {
						arg: "model",
						eq: "masonry"
					}
				}
			},
			parameters: {
				controls: { include: [
					"columns",
					"model",
					"rowHeight",
					"flowTolerance"
				] },
				docs: { description: { story: `
The \`gridSettings\` prop carries the host's layout decisions. \`columns\` sets the wide-container count (\`WIDGET_DASHBOARD_COLUMN_COUNT\` is only the default when the host sets nothing), and container width steps the effective count down to \`min( 2, count )\` and then one as it narrows. Drag the columns control; resize the canvas to watch the steps.

\`model\` picks the surface, and the per-model field follows it: \`rowHeight\` belongs to \`grid\`, \`flowTolerance\` to \`masonry\`. Only the active one is passed in \`gridSettings\`, and only its control is shown.

Tile spans are stored per widget and do not scale with the count. Raise \`columns\` and every track narrows, so the same spans cover less of the surface. Enter Customize and resize a tile to see it take the new count.
` } }
			}
		};
		LongTitle.parameters = {
			...LongTitle.parameters,
			docs: {
				...LongTitle.parameters?.docs,
				source: {
					originalSource: "{\n  render: () => <LongTitleStory />,\n  parameters: {\n    docs: {\n      description: {\n        story: `\nThe identity holds the widget type's title. When the row cannot fit it, the title truncates with an ellipsis rather than wrapping: the header is one line tall.\n\nThe same type appears at two widths. Resize the canvas to watch where the cut lands.\n`\n      }\n    }\n  }\n}",
					...LongTitle.parameters?.docs?.source
				}
			}
		};
		Default.parameters = {
			...Default.parameters,
			docs: {
				...Default.parameters?.docs,
				source: {
					originalSource: "{\n  render: () => <DefaultStory />,\n  parameters: {\n    docs: {\n      description: {\n        story: `\nIn normal mode the dashboard promotes every \\`relevance: 'high'\\` attribute into the tile header as a bare inline control beside the identity, plus the settings entry point when a non-promoted attribute exists.\n\nTwo demo types exercise that policy:\n\n- \\`demo/traffic-snapshot\\` declares three attributes: \\`metric\\` and \\`period\\` are \\`relevance: 'high'\\`, and \\`label\\` stays on the settings surface.\n- \\`demo/goal-progress\\` declares a single attribute at \\`relevance: 'high'\\`: with nothing left for the settings surface, the inline presentation shows no settings entry point.\n\nTheir tiles compare the header presentations:\n\n- The two-column tile fits the identity and both inline controls, so they stay in the header.\n- The one-column traffic tile does not: the promoted fields collapse into a dropdown holding them as a form, while the settings trigger stays in the toolbar beside it.\n- The one-column goal tile carries a single promoted field and no settings surface, so its toolbar holds that field and the actions menu.\n\nThe widget only declares relevance; the fit is measured by the chrome, so the same declaration adapts to any tile width. Resize the canvas to watch the headers switch presentations.\n\nBeyond attributes, \\`demo/goal-progress\\` declares three \\`actions\\` spanning the relevance scale, and that scale routes them: \"View goal details\" at \\`'high'\\` mounts as a leading text link (declared icon as prefix) in a persistent chrome footer, \"Export progress\" at \\`'medium'\\` beside it as a trailing icon-only link, and \"About goals\" at the default \\`'low'\\` lands in the \"More\" menu. The widget declares each action as data plus its importance; the host owns the surfaces.\n\nEach type also carries a \\`help\\` note, opened from the info icon in the header, that describes its attributes and what they do.\n`\n      }\n    }\n  }\n}",
					...Default.parameters?.docs?.source
				}
			}
		};
		HostLinks.parameters = {
			...HostLinks.parameters,
			docs: {
				...HostLinks.parameters?.docs,
				source: {
					originalSource: "{\n  render: () => <HostLinksStory />,\n  parameters: {\n    docs: {\n      description: {\n        story: `\nThe widget declares where to go; the host decides how to get there. This story mounts a \\`WidgetHostProvider\\` whose \\`links\\` capability recognizes hrefs targeting the demo application's own routes.\n\nThe footer shows the three materializations side by side:\n\n- \"See report\" declares \\`admin.php?page=demo-dashboard&p=/reports\\`, a route this host owns: it mounts the host's route link and navigates client-side; the status line above confirms the document never reloaded.\n- \"View goal details\" opens another origin in a new tab: a plain anchor.\n- \"Export progress\" is a download: downloads always keep the plain anchor.\n\nWithout the provider the same declarations still work; every action falls back to a plain anchor. Real hosts implement the capability at their route layer with their actual router.\n`\n      }\n    }\n  }\n}",
					...HostLinks.parameters?.docs?.source
				}
			}
		};
		RuntimeActions.parameters = {
			...RuntimeActions.parameters,
			docs: {
				...RuntimeActions.parameters?.docs,
				source: {
					originalSource: "{\n  render: () => <RuntimeActionsStory />,\n  parameters: {\n    docs: {\n      description: {\n        story: `\nA widget declares actions from what its render knows, through \\`useWidgetActions\\`, and from more than one component.\n\nThe footer starts with the declared \"Details\" link. Once the check settles, the widget declares \"Review 3 items\" with the same \\`id\\`, and it takes that place. Its export section, a child component, declares \"Download CSV\": a \\`callback\\` action, disabled while the export runs. \\`WidgetRender\\` joins both declarations, so the host receives one list.\n\n\"Hide export\" unmounts the section and withdraws only its action. \"Resolve one\" shrinks the list; once nothing is left, \"Details\" returns.\n`\n      }\n    }\n  }\n}",
					...RuntimeActions.parameters?.docs?.source
				}
			}
		};
		Policy.parameters = {
			...Policy.parameters,
			docs: {
				...Policy.parameters?.docs,
				source: {
					originalSource: "{\n  render: args => <PolicyStory {...args} />,\n  args: {\n    profile: 'owner'\n  },\n  argTypes: {\n    profile: {\n      control: 'select',\n      options: Object.keys(PROFILES),\n      description: 'The user profile the application maps to a policy. Viewer: nothing. Arranger: customize, move, resize. Owner: everything, including reset.'\n    }\n  },\n  parameters: {\n    docs: {\n      description: {\n        story: `\nThe application governs the dashboard; the widget types stay untouched. This story mounts \\`WidgetDashboard.Policy\\` around the dashboard with a \\`canPerform\\` closing over the signed-in profile and the active section, and composes the dashboard inside an admin \\`Page\\`: the section links in its navigation, the dashboard actions in its actions slot.\n\nSwitch the \\`profile\\` control. A Viewer gets no Customize button, no Reset to default entry, no attribute controls, and read-only widgets (no \\`setAttributes\\`). An Arranger enters customize mode and drags or resizes tiles, but has no Add widget trigger, no Reset to default entry, no Remove control, and no attribute editing. An Owner does everything.\n\nThe command palette is mounted too: press ⌘K (Ctrl+K outside macOS) and the commands follow the same policy. An Owner sees Customize dashboard, Add dashboard widgets, and Reset dashboard widgets to default; an Arranger keeps Customize dashboard only; a Viewer gets no dashboard commands.\n\nSwitch the section, then open \"Add widget\": the listing follows the section, even while open; the excluded types keep rendering where already placed because the \\`widgetTypes\\` registry never changes.\n\nNested policies compose restrictively; without a policy, every operation is allowed. See the **Policy** page for the contract.\n`\n      }\n    }\n  }\n}",
					...Policy.parameters?.docs?.source
				}
			}
		};
		GridSettings.parameters = {
			...GridSettings.parameters,
			docs: {
				...GridSettings.parameters?.docs,
				source: {
					originalSource: "{\n  render: args => <GridSettingsStory {...args} />,\n  args: {\n    columns: 4,\n    model: 'grid',\n    rowHeight: 'medium',\n    flowTolerance: 16\n  },\n  argTypes: {\n    columns: {\n      control: {\n        type: 'range',\n        min: 1,\n        max: 12,\n        step: 1\n      },\n      description: 'Wide-container column count. The host decides; the package only floors it at one.'\n    },\n    model: {\n      control: 'radio',\n      options: ['grid', 'masonry'],\n      description: 'The grid model. `grid` gives uniform rows and two-axis spans; `masonry` drives heights from content.'\n    },\n    rowHeight: {\n      control: 'radio',\n      options: Object.keys(ROW_HEIGHT_PRESETS),\n      description: 'Height of each grid row. Grid model only.',\n      if: {\n        arg: 'model',\n        eq: 'grid'\n      }\n    },\n    flowTolerance: {\n      control: {\n        type: 'range',\n        min: 0,\n        max: 200,\n        step: 4\n      },\n      description: 'Pixel tolerance for source-order tiebreaking between lanes. Masonry model only.',\n      if: {\n        arg: 'model',\n        eq: 'masonry'\n      }\n    }\n  },\n  parameters: {\n    controls: {\n      include: ['columns', 'model', 'rowHeight', 'flowTolerance']\n    },\n    docs: {\n      description: {\n        story: `\nThe \\`gridSettings\\` prop carries the host's layout decisions. \\`columns\\` sets the wide-container count (\\`WIDGET_DASHBOARD_COLUMN_COUNT\\` is only the default when the host sets nothing), and container width steps the effective count down to \\`min( 2, count )\\` and then one as it narrows. Drag the columns control; resize the canvas to watch the steps.\n\n\\`model\\` picks the surface, and the per-model field follows it: \\`rowHeight\\` belongs to \\`grid\\`, \\`flowTolerance\\` to \\`masonry\\`. Only the active one is passed in \\`gridSettings\\`, and only its control is shown.\n\nTile spans are stored per widget and do not scale with the count. Raise \\`columns\\` and every track narrows, so the same spans cover less of the surface. Enter Customize and resize a tile to see it take the new count.\n`\n      }\n    }\n  }\n}",
					...GridSettings.parameters?.docs?.source
				}
			}
		};
	})))();
}
//#endregion
init_index_story();
export { Default, GridSettings, HostLinks, LongTitle, Policy, RuntimeActions, meta as default };
