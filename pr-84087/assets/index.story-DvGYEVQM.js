import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as __, t as init_build_module } from "./build-module-v04us4E2.js";
import { o as clsx, s as init_clsx } from "./iframe-D4D-SsYo.js";
//#region ../packages/media-editor/src/components/rotation-ruler/use-ruler-drag.ts
/**
* Convert a horizontal pointer delta (px) into a value delta.
*
* Negative because dragging the ruler to the right should expose
* smaller values to the left of the fixed center pointer (and vice
* versa) — the ruler scrubs *under* the pointer.
*
* @param deltaPx       Pointer movement in CSS pixels.
* @param pixelsPerStep CSS pixels of pointer travel per `step`.
* @param step          Value units per step.
*/
function pxToValueDelta(deltaPx, pixelsPerStep, step) {
	return -deltaPx / pixelsPerStep * step;
}
/**
* Clamp `value` to the inclusive `[min, max]` interval.
*
* @param value Value to clamp.
* @param min   Lower bound (inclusive).
* @param max   Upper bound (inclusive).
*/
function clampValue(value, min, max) {
	if (value < min) return min;
	if (value > max) return max;
	return value;
}
/**
* Round `value` to the nearest multiple of `step`.
*
* @param value Value to quantize.
* @param step  Step granularity (must be > 0).
*/
function quantize(value, step) {
	return Math.round(value / step) * step;
}
/**
* Drag-the-ruler gesture for a horizontal slider. Translates pointer
* movement into value changes quantized to `step`; the caller renders
* the visuals and holds the value.
*
* The hook owns no state of its own — every value change is reported
* through the supplied `onChange`. The "current value" is read from a
* ref so closure staleness during a drag is impossible. Drag continues
* past the wrapper's bounds (standard slider behaviour); a window-level
* `pointerup` listener guarantees the drag ends and pointer capture
* releases even if the underlying captured event never fires on the
* wrapper.
*
* @param options Ruler-drag configuration. See `UseRulerDragOptions`.
*/
function useRulerDrag(options) {
	const { value, onChange, min, max, step, pixelsPerStep, disabled, onPointerDownStart } = options;
	const latestRef = (0, import_react.useRef)({
		value,
		startX: 0,
		startValue: 0,
		activeStep: step,
		dragging: false,
		captureElement: null,
		capturePointerId: 0,
		windowPointerUp: null
	});
	(0, import_react.useEffect)(() => {
		latestRef.current.value = value;
	}, [value]);
	const endDrag = (0, import_react.useCallback)(() => {
		const state = latestRef.current;
		if (!state.dragging) return;
		state.dragging = false;
		if (state.captureElement && state.captureElement.hasPointerCapture(state.capturePointerId)) state.captureElement.releasePointerCapture(state.capturePointerId);
		state.captureElement = null;
		if (state.windowPointerUp) {
			window.removeEventListener("pointerup", state.windowPointerUp);
			window.removeEventListener("pointercancel", state.windowPointerUp);
			state.windowPointerUp = null;
		}
	}, []);
	(0, import_react.useEffect)(() => endDrag, [endDrag]);
	(0, import_react.useEffect)(() => {
		if (disabled) endDrag();
	}, [disabled, endDrag]);
	return {
		onPointerDown: (0, import_react.useCallback)((event) => {
			if (disabled || event.button !== 0) return;
			const state = latestRef.current;
			event.currentTarget.setPointerCapture(event.pointerId);
			state.captureElement = event.currentTarget;
			state.capturePointerId = event.pointerId;
			state.startX = event.clientX;
			state.startValue = state.value;
			state.activeStep = event.shiftKey ? step / 2 : step;
			state.dragging = true;
			onPointerDownStart?.();
			const onWindowUp = () => endDrag();
			state.windowPointerUp = onWindowUp;
			window.addEventListener("pointerup", onWindowUp);
			window.addEventListener("pointercancel", onWindowUp);
		}, [
			disabled,
			onPointerDownStart,
			endDrag,
			step
		]),
		onPointerMove: (0, import_react.useCallback)((event) => {
			const state = latestRef.current;
			if (disabled || !state.dragging) return;
			const requestedStep = event.shiftKey ? step / 2 : step;
			if (requestedStep !== state.activeStep) {
				state.startX = event.clientX;
				state.startValue = state.value;
				state.activeStep = requestedStep;
			}
			const deltaValue = pxToValueDelta(event.clientX - state.startX, pixelsPerStep, state.activeStep);
			const next = clampValue(quantize(state.startValue + deltaValue, state.activeStep), min, max);
			if (next !== state.value) {
				state.value = next;
				onChange(next);
			}
		}, [
			disabled,
			onChange,
			min,
			max,
			step,
			pixelsPerStep
		]),
		onPointerUp: endDrag,
		onPointerCancel: endDrag
	};
}
function init_use_ruler_drag() {
	return (init_use_ruler_drag = __esmMin((() => {
		init_react();
	})))();
}
//#endregion
//#region ../packages/media-editor/src/components/rotation-ruler/index.tsx
/**
* Build the tick list for the ruler strip.
*
* @param min Lower bound of the ruler in value units.
* @param max Upper bound of the ruler in value units.
*/
function useTicks(min, max) {
	return (0, import_react.useMemo)(() => {
		const out = [];
		for (let v = Math.ceil(min); v <= Math.floor(max); v += 1) {
			let kind = "minor";
			let height = TICK_HEIGHT_MINOR;
			if (v % 15 === 0) {
				kind = "major";
				height = TICK_HEIGHT_MAJOR;
			} else if (v % 5 === 0) {
				kind = "mid";
				height = TICK_HEIGHT_MID;
			}
			out.push({
				value: v,
				kind,
				height
			});
		}
		return out;
	}, [min, max]);
}
/**
* Format a numeric ruler value for display, trimming a trailing `.0`.
*
* @param value Value to format.
*/
function formatValue(value) {
	const rounded = Math.round(value * 10) / 10;
	return Number.isInteger(rounded) ? rounded.toFixed(0) : rounded.toFixed(1);
}
/**
* Horizontal "scrub-the-ruler" slider for fine-grained numeric input
* such as rotation in degrees.
*
* Renders a visually hidden `<input type="range">` for assistive
* technologies and keyboard input alongside a decorative tick strip
* that the user can drag with a pointer.
*
* @param props Component props. See `RotationRulerProps`.
*/
function RotationRuler(props) {
	const { value, onChange, min = -45, max = 45, step = 1, label, unit = "°", pixelsPerStep = 6, className, id, disabled = false } = props;
	const inputRef = (0, import_react.useRef)(null);
	const generatedId = (0, import_react.useId)();
	const inputId = id ?? generatedId;
	const dragHandlers = useRulerDrag({
		value,
		onChange,
		min,
		max,
		step,
		pixelsPerStep,
		disabled,
		onPointerDownStart: () => inputRef.current?.focus()
	});
	const handleKeyDown = (event) => {
		const isIncrement = event.key === "ArrowRight" || event.key === "ArrowUp";
		const isDecrement = event.key === "ArrowLeft" || event.key === "ArrowDown";
		if (!isIncrement && !isDecrement) return;
		event.preventDefault();
		if (disabled) return;
		const direction = isIncrement ? 1 : -1;
		const magnitude = event.shiftKey ? step / 2 : step;
		const next = clampValue(value + direction * magnitude, min, max);
		if (next !== value) onChange(next);
	};
	const display = `${formatValue(value)}${unit}`;
	const ticks = useTicks(min, max);
	const pxPerUnit = pixelsPerStep / step;
	const stripStyle = (0, import_react.useMemo)(() => {
		return { transform: `translateX(calc(-50% + ${-value * pxPerUnit}px))` };
	}, [value, pxPerUnit]);
	const closestMajor = Math.round(value / MAJOR_INTERVAL) * MAJOR_INTERVAL;
	const numberText = Math.abs(value - closestMajor) < .01 ? `${closestMajor}` : formatValue(value);
	const isNegative = numberText.startsWith("-");
	const digits = isNegative ? numberText.slice(1) : numberText;
	const majorTicks = ticks.filter((tick) => tick.kind === "major");
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)("div", {
		className: clsx("rotation-ruler", className),
		role: "presentation",
		"data-testid": "rotation-ruler",
		"data-disabled": disabled || void 0,
		...dragHandlers,
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)("input", {
				ref: inputRef,
				id: inputId,
				type: "range",
				className: "rotation-ruler__input",
				min,
				max,
				step: "any",
				value,
				disabled,
				"aria-label": label,
				"aria-valuetext": display,
				onChange: (event) => onChange(clampValue(event.target.valueAsNumber, min, max)),
				onKeyDown: handleKeyDown
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 201,
				columnNumber: 4
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)("div", {
				className: "rotation-ruler__strip",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)("svg", {
					className: "rotation-ruler__ticks",
					style: stripStyle,
					width: (max - min) * pxPerUnit,
					height: STRIP_HEIGHT,
					viewBox: `${min * pxPerUnit} 0 ${(max - min) * pxPerUnit} ${STRIP_HEIGHT}`,
					preserveAspectRatio: "xMidYMid meet",
					children: [ticks.map((tick) => /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)("line", {
						x1: tick.value * pxPerUnit,
						x2: tick.value * pxPerUnit,
						y1: STRIP_HEIGHT - tick.height,
						y2: STRIP_HEIGHT,
						className: `rotation-ruler__tick rotation-ruler__tick--${tick.kind}`
					}, tick.value, false, {
						fileName: _jsxFileName$1,
						lineNumber: 232,
						columnNumber: 7
					}, this)), majorTicks.map((tick) => /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)("text", {
						x: tick.value * pxPerUnit,
						y: LABEL_BASELINE_Y,
						textAnchor: "middle",
						className: "rotation-ruler__label",
						children: [tick.value, unit]
					}, tick.value, true, {
						fileName: _jsxFileName$1,
						lineNumber: 242,
						columnNumber: 7
					}, this))]
				}, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 221,
					columnNumber: 5
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 220,
				columnNumber: 4
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)("div", {
				className: "rotation-ruler__active-label",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)("span", {
					className: "rotation-ruler__active-label-number",
					children: [
						isNegative && /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)("span", {
							className: "rotation-ruler__active-label-sign",
							children: "-"
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 258,
							columnNumber: 7
						}, this),
						digits,
						/* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)("span", {
							className: "rotation-ruler__active-label-unit",
							children: unit
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 263,
							columnNumber: 6
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 256,
					columnNumber: 5
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 255,
				columnNumber: 4
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)("div", {
				className: "rotation-ruler__pointer",
				"aria-hidden": "true"
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 268,
				columnNumber: 4
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName$1,
		lineNumber: 194,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime$1, _jsxFileName$1, STRIP_HEIGHT, LABEL_BASELINE_Y, MAJOR_INTERVAL, TICK_HEIGHT_MINOR, TICK_HEIGHT_MID, TICK_HEIGHT_MAJOR;
function init_rotation_ruler() {
	return (init_rotation_ruler = __esmMin((() => {
		init_clsx();
		init_react();
		init_use_ruler_drag();
		import_jsx_dev_runtime$1 = require_jsx_dev_runtime();
		_jsxFileName$1 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/media-editor/src/components/rotation-ruler/index.tsx";
		STRIP_HEIGHT = 32;
		LABEL_BASELINE_Y = 11;
		MAJOR_INTERVAL = 15;
		TICK_HEIGHT_MINOR = 4;
		TICK_HEIGHT_MID = 8;
		TICK_HEIGHT_MAJOR = 14;
		try {
			RotationRuler.__docgenInfo = {
				"description": "Horizontal \"scrub-the-ruler\" slider for fine-grained numeric input\nsuch as rotation in degrees.\n\nRenders a visually hidden `<input type=\"range\">` for assistive\ntechnologies and keyboard input alongside a decorative tick strip\nthat the user can drag with a pointer.",
				"displayName": "rotationruler",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/media-editor/src/components/rotation-ruler/index.tsx",
				"methods": [],
				"props": {
					"value": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/media-editor/src/components/rotation-ruler/index.tsx",
							"name": "RotationRulerProps"
						}],
						"description": "Current value.",
						"name": "value",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/media-editor/src/components/rotation-ruler/index.tsx",
							"name": "RotationRulerProps"
						},
						"required": true,
						"tags": {},
						"type": { "name": "number" }
					},
					"onChange": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/media-editor/src/components/rotation-ruler/index.tsx",
							"name": "RotationRulerProps"
						}],
						"description": "Called with the next value on each change.",
						"name": "onChange",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/media-editor/src/components/rotation-ruler/index.tsx",
							"name": "RotationRulerProps"
						},
						"required": true,
						"tags": {},
						"type": { "name": "(value: number) => void" }
					},
					"min": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/media-editor/src/components/rotation-ruler/index.tsx",
							"name": "RotationRulerProps"
						}],
						"description": "Lower bound of the range. Default: -45.",
						"name": "min",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/media-editor/src/components/rotation-ruler/index.tsx",
							"name": "RotationRulerProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "number" }
					},
					"max": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/media-editor/src/components/rotation-ruler/index.tsx",
							"name": "RotationRulerProps"
						}],
						"description": "Upper bound of the range. Default: 45.",
						"name": "max",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/media-editor/src/components/rotation-ruler/index.tsx",
							"name": "RotationRulerProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "number" }
					},
					"step": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/media-editor/src/components/rotation-ruler/index.tsx",
							"name": "RotationRulerProps"
						}],
						"description": "Value step for drag and keyboard arrows. Default: 1. Drag values\nare quantized to multiples of `step`. Holding Shift during drag\nor with arrow keys halves the step for precision adjustment.",
						"name": "step",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/media-editor/src/components/rotation-ruler/index.tsx",
							"name": "RotationRulerProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "number" }
					},
					"label": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/media-editor/src/components/rotation-ruler/index.tsx",
							"name": "RotationRulerProps"
						}],
						"description": "Accessible label for the slider input.",
						"name": "label",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/media-editor/src/components/rotation-ruler/index.tsx",
							"name": "RotationRulerProps"
						},
						"required": true,
						"tags": {},
						"type": { "name": "string" }
					},
					"unit": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/media-editor/src/components/rotation-ruler/index.tsx",
							"name": "RotationRulerProps"
						}],
						"description": "Unit suffix shown in the active label and `aria-valuetext`.\nDefault: `°`.",
						"name": "unit",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/media-editor/src/components/rotation-ruler/index.tsx",
							"name": "RotationRulerProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"pixelsPerStep": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/media-editor/src/components/rotation-ruler/index.tsx",
							"name": "RotationRulerProps"
						}],
						"description": "CSS pixels of pointer travel per `step`. Default: 6.",
						"name": "pixelsPerStep",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/media-editor/src/components/rotation-ruler/index.tsx",
							"name": "RotationRulerProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "number" }
					},
					"className": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/media-editor/src/components/rotation-ruler/index.tsx",
							"name": "RotationRulerProps"
						}],
						"description": "Optional extra class for the wrapper.",
						"name": "className",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/media-editor/src/components/rotation-ruler/index.tsx",
							"name": "RotationRulerProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"id": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/media-editor/src/components/rotation-ruler/index.tsx",
							"name": "RotationRulerProps"
						}],
						"description": "Optional id for the underlying input; auto-generated when\nomitted.",
						"name": "id",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/media-editor/src/components/rotation-ruler/index.tsx",
							"name": "RotationRulerProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"disabled": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/media-editor/src/components/rotation-ruler/index.tsx",
							"name": "RotationRulerProps"
						}],
						"description": "When true, ignores all input.",
						"name": "disabled",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/media-editor/src/components/rotation-ruler/index.tsx",
							"name": "RotationRulerProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					}
				},
				"tags": { "param": "props Component props. See `RotationRulerProps`." }
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/media-editor/src/components/rotation-ruler/stories/index.story.tsx
var import_jsx_dev_runtime, _jsxFileName, meta, Default;
function init_index_story() {
	return (init_index_story = __esmMin((() => {
		init_react();
		init_build_module();
		init_rotation_ruler();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/media-editor/src/components/rotation-ruler/stories/index.story.tsx";
		meta = {
			id: "mediaeditor-rotationruler",
			title: "Editor/Media Editor/RotationRuler",
			component: RotationRuler,
			args: {
				label: __("Fine rotation"),
				min: -45,
				max: 45,
				step: 1,
				pixelsPerStep: 6,
				disabled: false
			},
			argTypes: {
				value: { control: false },
				onChange: { control: false }
			}
		};
		Default = { render: (args) => {
			const [value, setValue] = (0, import_react.useState)(0);
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				style: {
					width: 360,
					color: "#1e1e1e"
				},
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RotationRuler, {
					...args,
					value,
					onChange: setValue
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 32,
					columnNumber: 5
				}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					style: { marginTop: 16 },
					children: [
						__("Current value:"),
						" ",
						value,
						"°"
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 37,
					columnNumber: 5
				}, void 0)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 31,
				columnNumber: 4
			}, void 0);
		} };
		Default.parameters = {
			...Default.parameters,
			docs: {
				...Default.parameters?.docs,
				source: {
					originalSource: "{\n  render: args => {\n    const [value, setValue] = useState(0);\n    return <div style={{\n      width: 360,\n      color: '#1e1e1e'\n    }}>\n                <RotationRuler {...args} value={value} onChange={setValue} />\n                <p style={{\n        marginTop: 16\n      }}>\n                    {__('Current value:')} {value}°\n                </p>\n            </div>;\n  }\n}",
					...Default.parameters?.docs?.source
				}
			}
		};
	})))();
}
//#endregion
init_index_story();
export { Default, meta as default };
