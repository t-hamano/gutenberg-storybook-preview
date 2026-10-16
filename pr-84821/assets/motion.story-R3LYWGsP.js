import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as init_button, t as Button } from "./button-6iH1so4R.js";
import { n as init_stack, t as Stack } from "./stack-BHmRFw1F.js";
import { n as init_select_control, t as SelectControl } from "./select-control-BaQ9cGOe.js";
import { n as init_input_control, t as InputControl } from "./input-control-BbYRiDE3.js";
//#region stories/design-system/tokens/motion.story.tsx
function AnimationRow({ label, description, duration, easing, animKey }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack, {
		align: "center",
		gap: "lg",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack, {
			direction: "column",
			gap: "xs",
			style: {
				width: "320px",
				flexShrink: 0
			},
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
				style: labelStyle,
				children: label
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 122,
				columnNumber: 5
			}, this), description && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
				style: descriptionStyle,
				children: description
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 124,
				columnNumber: 6
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 117,
			columnNumber: 4
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			style: trackStyle,
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
				...dotBaseStyle,
				animationDuration: duration,
				animationTimingFunction: easing
			} }, animKey, false, {
				fileName: _jsxFileName,
				lineNumber: 128,
				columnNumber: 5
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 127,
			columnNumber: 4
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 116,
		columnNumber: 3
	}, this);
}
function MotionDemo() {
	const [animKey, setAnimKey] = (0, import_react.useState)(0);
	const replay = (0, import_react.useCallback)(() => setAnimKey((k) => k + 1), []);
	const [selectedDuration, setSelectedDuration] = (0, import_react.useState)(DEFAULT_DURATION_OPTION.value);
	const [customDuration, setCustomDuration] = (0, import_react.useState)("600");
	const easingDuration = selectedDuration === "custom" ? `${customDuration}ms` : selectedDuration;
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack, {
		direction: "column",
		gap: "xl",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("style", { children: dotKeyframes }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 156,
				columnNumber: 4
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
				tone: "brand",
				onClick: replay,
				children: "Replay animations"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 158,
				columnNumber: 5
			}, this) }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 157,
				columnNumber: 4
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack, {
				direction: "column",
				gap: "lg",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { children: "Easing curves" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 164,
						columnNumber: 5
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack, {
						align: "end",
						gap: "md",
						wrap: "wrap",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							style: { minWidth: "180px" },
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectControl, {
								label: "Duration",
								items: DURATION_OPTIONS,
								defaultValue: DEFAULT_DURATION_OPTION,
								triggerContent: (item) => item.value,
								onValueChange: (item) => {
									if (!item || typeof item.value !== "string") return;
									setSelectedDuration(item.value);
									setAnimKey((k) => k + 1);
								}
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 167,
								columnNumber: 7
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 166,
							columnNumber: 6
						}, this), selectedDuration === "custom" && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InputControl, {
							label: "Value (ms)",
							type: "number",
							min: 0,
							max: 5e3,
							step: 50,
							value: customDuration,
							onValueChange: (value) => {
								setCustomDuration(value);
								setAnimKey((k) => k + 1);
							},
							style: { width: "120px" }
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 185,
							columnNumber: 7
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 165,
						columnNumber: 5
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack, {
						direction: "column",
						gap: "md",
						children: EASING_TOKENS.map((token) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AnimationRow, {
							label: token.name,
							description: token.description,
							duration: easingDuration,
							easing: token.variable,
							animKey
						}, token.name, false, {
							fileName: _jsxFileName,
							lineNumber: 202,
							columnNumber: 7
						}, this))
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 200,
						columnNumber: 5
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 163,
				columnNumber: 4
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack, {
				direction: "column",
				gap: "lg",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { children: "Durations" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 215,
						columnNumber: 5
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "All using easing-balanced" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 216,
						columnNumber: 5
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack, {
						direction: "column",
						gap: "md",
						children: DURATION_TOKENS.map((token) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AnimationRow, {
							label: token.name,
							description: token.description,
							duration: token.variable,
							easing: "var(--wpds-motion-easing-balanced, cubic-bezier(0.4, 0, 0.2, 1))",
							animKey
						}, token.name, false, {
							fileName: _jsxFileName,
							lineNumber: 219,
							columnNumber: 7
						}, this))
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 217,
						columnNumber: 5
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 214,
				columnNumber: 4
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 155,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime, _jsxFileName, EASING_TOKENS, DURATION_TOKENS, DURATION_OPTIONS, DEFAULT_DURATION_OPTION, labelStyle, descriptionStyle, trackStyle, dotKeyframes, dotBaseStyle, meta, Default;
function init_motion_story() {
	return (init_motion_story = __esmMin((() => {
		init_react();
		init_button(), init_input_control(), init_select_control(), init_stack();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/storybook/stories/design-system/tokens/motion.story.tsx";
		EASING_TOKENS = [
			{
				name: "subtle",
				variable: "var(--wpds-motion-easing-subtle, cubic-bezier(0.15, 0, 0.15, 1))",
				description: "Hover, color, and background transitions."
			},
			{
				name: "balanced",
				variable: "var(--wpds-motion-easing-balanced, cubic-bezier(0.4, 0, 0.2, 1))",
				description: "On-screen movement like resizing, morphing, and layout shifts."
			},
			{
				name: "expressive",
				variable: "var(--wpds-motion-easing-expressive, cubic-bezier(0.25, 0, 0, 1))",
				description: "Enter/exit and spatial transitions like menus, popovers, dialogs, and drawers."
			}
		];
		DURATION_TOKENS = [
			{
				name: "xs",
				variable: "var(--wpds-motion-duration-xs, 50ms)",
				description: "Micro-delays and transition offsets."
			},
			{
				name: "sm",
				variable: "var(--wpds-motion-duration-sm, 100ms)",
				description: "Micro-interactions like focus rings and state changes."
			},
			{
				name: "md",
				variable: "var(--wpds-motion-duration-md, 200ms)",
				description: "Standard transitions like menus and popovers."
			},
			{
				name: "lg",
				variable: "var(--wpds-motion-duration-lg, 300ms)",
				description: "Deliberate animations like slides and reveals."
			},
			{
				name: "xl",
				variable: "var(--wpds-motion-duration-xl, 400ms)",
				description: "Extended animations like complex or multi-step transitions."
			}
		];
		DURATION_OPTIONS = [...DURATION_TOKENS.map((token) => ({
			label: token.name,
			value: token.variable
		})), {
			label: "custom",
			value: "custom"
		}];
		DEFAULT_DURATION_OPTION = DURATION_OPTIONS[4];
		labelStyle = {
			fontFamily: "var(--wpds-typography-font-family-mono, \"Menlo\", \"Consolas\", monaco, monospace)",
			fontSize: "var(--wpds-typography-font-size-sm, 12px)",
			color: "var(--wpds-color-foreground-content-neutral, #1e1e1e)"
		};
		descriptionStyle = {
			fontFamily: "var(--wpds-typography-font-family-body, -apple-system, system-ui, \"Segoe UI\", \"Roboto\", \"Oxygen-Sans\", \"Ubuntu\", \"Cantarell\", \"Helvetica Neue\", sans-serif)",
			fontSize: "var(--wpds-typography-font-size-xs, 11px)",
			color: "var(--wpds-color-foreground-content-neutral-weak, #707070)"
		};
		trackStyle = {
			position: "relative",
			height: "40px",
			borderRadius: "var(--wpds-border-radius-sm, 2px)",
			backgroundColor: "var(--wpds-color-background-surface-neutral-weak, #f4f4f4)",
			overflow: "hidden",
			flex: 1
		};
		dotKeyframes = `@keyframes slideRight {
    from { inset-inline-start: 4px; }
    to { inset-inline-start: calc(100% - 36px); }
}`;
		dotBaseStyle = {
			position: "absolute",
			top: "4px",
			insetInlineStart: "4px",
			width: "32px",
			height: "32px",
			borderRadius: "var(--wpds-border-radius-sm, 2px)",
			backgroundColor: "var(--wpds-color-background-interactive-brand-strong, var(--wp-admin-theme-color, #3858e9))",
			animationName: "slideRight",
			animationFillMode: "forwards"
		};
		meta = {
			title: "Design System/Tokens/Motion",
			component: MotionDemo,
			parameters: {
				controls: { hideNoControlsWarning: true },
				docs: { canvas: { sourceState: "shown" } }
			}
		};
		Default = {};
		Default.parameters = {
			...Default.parameters,
			docs: {
				...Default.parameters?.docs,
				source: {
					originalSource: "{}",
					...Default.parameters?.docs?.source
				}
			}
		};
	})))();
}
//#endregion
init_motion_story();
export { Default, meta as default };
