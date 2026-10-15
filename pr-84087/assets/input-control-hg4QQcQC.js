import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C1RZKCc6.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { n as use_instance_id_default, t as init_use_instance_id } from "./use-instance-id-BznKyZc1.js";
import { n as withIgnoreIMEEvents } from "./with-ignore-ime-events-BFiL1WqY.js";
import { r as init_build_module } from "./build-module-LJKyBiy6.js";
import { o as clsx, s as init_clsx } from "./iframe-D4D-SsYo.js";
import { i as Input, n as input_base_default, s as init_input_control_styles, t as init_input_base } from "./input-base-BjEBS6-t.js";
import { n as space, t as init_space } from "./space-CmH0DdCr.js";
import { n as useDrag, t as init_use_gesture_react_esm } from "./use-gesture-react.esm-BnGrlGd-.js";
import { n as base_control_default, r as init_base_control } from "./base-control-BlNgg-sa.js";
//#region ../packages/components/build-module/input-control/utils.mjs
function getDragCursor(dragDirection) {
	let dragCursor = "ns-resize";
	switch (dragDirection) {
		case "n":
		case "s":
			dragCursor = "ns-resize";
			break;
		case "e":
		case "w": dragCursor = "ew-resize";
	}
	return dragCursor;
}
function useDragCursor(isDragging, dragDirection) {
	const dragCursor = getDragCursor(dragDirection);
	(0, import_react.useEffect)(() => {
		if (isDragging) document.documentElement.style.cursor = dragCursor;
		else document.documentElement.style.removeProperty("cursor");
	}, [isDragging, dragCursor]);
	return dragCursor;
}
function useDraft(props) {
	const previousValueRef = (0, import_react.useRef)(props.value);
	const [draft, setDraft] = (0, import_react.useState)({});
	const value = draft.value !== void 0 ? draft.value : props.value;
	(0, import_react.useLayoutEffect)(() => {
		const { current: previousValue } = previousValueRef;
		previousValueRef.current = props.value;
		if (draft.value !== void 0 && !draft.isStale) setDraft({
			...draft,
			isStale: true
		});
		else if (draft.isStale && props.value !== previousValue) setDraft({});
	}, [props.value, draft]);
	const onChange = (nextValue, extra) => {
		setDraft((current) => Object.assign(current, {
			value: nextValue,
			isStale: false
		}));
		props.onChange(nextValue, extra);
	};
	const onBlur = (event) => {
		setDraft({});
		props.onBlur?.(event);
	};
	return {
		value,
		onBlur,
		onChange
	};
}
function init_utils() {
	return (init_utils = __esmMin((() => {
		init_react();
	})))();
}
//#endregion
//#region ../packages/components/build-module/input-control/reducer/state.mjs
var initialStateReducer, initialInputControlState;
function init_state() {
	return (init_state = __esmMin((() => {
		initialStateReducer = (state) => state;
		initialInputControlState = {
			error: null,
			initialValue: "",
			isDirty: false,
			isDragEnabled: false,
			isDragging: false,
			isPressEnterToChange: false,
			value: ""
		};
	})))();
}
//#endregion
//#region ../packages/components/build-module/input-control/reducer/actions.mjs
var CHANGE, COMMIT, CONTROL, DRAG_END, DRAG_START, DRAG, INVALIDATE, PRESS_DOWN, PRESS_ENTER, PRESS_UP, RESET;
function init_actions() {
	return (init_actions = __esmMin((() => {
		CHANGE = "CHANGE";
		COMMIT = "COMMIT";
		CONTROL = "CONTROL";
		DRAG_END = "DRAG_END";
		DRAG_START = "DRAG_START";
		DRAG = "DRAG";
		INVALIDATE = "INVALIDATE";
		PRESS_DOWN = "PRESS_DOWN";
		PRESS_ENTER = "PRESS_ENTER";
		PRESS_UP = "PRESS_UP";
		RESET = "RESET";
	})))();
}
//#endregion
//#region ../packages/components/build-module/input-control/reducer/reducer.mjs
function mergeInitialState(initialState = initialInputControlState) {
	const { value } = initialState;
	return {
		...initialInputControlState,
		...initialState,
		initialValue: value
	};
}
function inputControlStateReducer(composedStateReducers) {
	return (state, action) => {
		const nextState = { ...state };
		switch (action.type) {
			case CONTROL:
				nextState.value = action.payload.value;
				nextState.isDirty = false;
				nextState._event = void 0;
				return nextState;
			/**
			* Keyboard events
			*/
			case PRESS_UP:
				nextState.isDirty = false;
				break;
			case PRESS_DOWN:
				nextState.isDirty = false;
				break;
			/**
			* Drag events
			*/
			case DRAG_START:
				nextState.isDragging = true;
				break;
			case DRAG_END:
				nextState.isDragging = false;
				break;
			/**
			* Input events
			*/
			case CHANGE:
				nextState.error = null;
				nextState.value = action.payload.value;
				if (state.isPressEnterToChange) nextState.isDirty = true;
				break;
			case COMMIT:
				nextState.value = action.payload.value;
				nextState.isDirty = false;
				break;
			case RESET:
				nextState.error = null;
				nextState.isDirty = false;
				nextState.value = action.payload.value || state.initialValue;
				break;
			/**
			* Validation
			*/
			case INVALIDATE: nextState.error = action.payload.error;
		}
		nextState._event = action.payload.event;
		return composedStateReducers(nextState, action);
	};
}
function useInputControlStateReducer(stateReducer = initialStateReducer, initialState = initialInputControlState, onChangeHandler) {
	const [state, dispatch] = (0, import_react.useReducer)(inputControlStateReducer(stateReducer), mergeInitialState(initialState));
	const createChangeEvent = (type) => (nextValue, event) => {
		dispatch({
			type,
			payload: {
				value: nextValue,
				event
			}
		});
	};
	const createKeyEvent = (type) => (event) => {
		dispatch({
			type,
			payload: { event }
		});
	};
	const createDragEvent = (type) => (payload) => {
		dispatch({
			type,
			payload
		});
	};
	const change = createChangeEvent(CHANGE);
	const invalidate = (error, event) => dispatch({
		type: INVALIDATE,
		payload: {
			error,
			event
		}
	});
	const reset = createChangeEvent(RESET);
	const commit = createChangeEvent(COMMIT);
	const dragStart = createDragEvent(DRAG_START);
	const drag = createDragEvent(DRAG);
	const dragEnd = createDragEvent(DRAG_END);
	const pressUp = createKeyEvent(PRESS_UP);
	const pressDown = createKeyEvent(PRESS_DOWN);
	const pressEnter = createKeyEvent(PRESS_ENTER);
	const currentStateRef = (0, import_react.useRef)(state);
	const refPropsRef = (0, import_react.useRef)({
		value: initialState.value,
		onChangeHandler
	});
	(0, import_react.useLayoutEffect)(() => {
		currentStateRef.current = state;
		refPropsRef.current = {
			value: initialState.value,
			onChangeHandler
		};
	});
	(0, import_react.useLayoutEffect)(() => {
		if (currentStateRef.current._event !== void 0 && state.value !== refPropsRef.current.value && !state.isDirty) refPropsRef.current.onChangeHandler(state.value ?? "", { event: currentStateRef.current._event });
	}, [state.value, state.isDirty]);
	(0, import_react.useLayoutEffect)(() => {
		if (initialState.value !== currentStateRef.current.value && !currentStateRef.current.isDirty) dispatch({
			type: CONTROL,
			payload: { value: initialState.value ?? "" }
		});
	}, [initialState.value]);
	return {
		change,
		commit,
		dispatch,
		drag,
		dragEnd,
		dragStart,
		invalidate,
		pressDown,
		pressEnter,
		pressUp,
		reset,
		state
	};
}
function init_reducer() {
	return (init_reducer = __esmMin((() => {
		init_react();
		init_state();
		init_actions();
	})))();
}
//#endregion
//#region ../packages/components/build-module/input-control/input-field.mjs
function InputField({ disabled = false, dragDirection = "n", dragThreshold = 10, id, isDragEnabled = false, isPressEnterToChange = false, onBlur = noop$1, onChange = noop$1, onDrag = noop$1, onDragEnd = noop$1, onDragStart = noop$1, onKeyDown = noop$1, onValidate = noop$1, size = "default", stateReducer = (state) => state, value: valueProp, type, ...props }, ref) {
	const { state, change, commit, drag, dragEnd, dragStart, invalidate, pressDown, pressEnter, pressUp, reset } = useInputControlStateReducer(stateReducer, {
		isDragEnabled,
		value: valueProp,
		isPressEnterToChange
	}, onChange);
	const { value, isDragging, isDirty } = state;
	const wasDirtyOnBlur = (0, import_react.useRef)(false);
	const dragCursor = useDragCursor(isDragging, dragDirection);
	const handleOnBlur = (event) => {
		onBlur(event);
		if (isDirty || !event.target.validity.valid) {
			wasDirtyOnBlur.current = true;
			handleOnCommit(event);
		}
	};
	const handleOnChange = (event) => {
		const nextValue = event.target.value;
		change(nextValue, event);
	};
	const handleOnCommit = (event) => {
		const nextValue = event.currentTarget.value;
		try {
			onValidate(nextValue);
			commit(nextValue, event);
		} catch (err) {
			invalidate(err, event);
		}
	};
	const handleOnKeyDown = (event) => {
		const { key } = event;
		onKeyDown(event);
		switch (key) {
			case "ArrowUp":
				pressUp(event);
				break;
			case "ArrowDown":
				pressDown(event);
				break;
			case "Enter":
				pressEnter(event);
				if (isPressEnterToChange) {
					event.preventDefault();
					handleOnCommit(event);
				}
				break;
			case "Escape": if (isPressEnterToChange && isDirty) {
				event.preventDefault();
				reset(valueProp, event);
			}
		}
	};
	const dragGestureProps = useDrag((dragProps2) => {
		const { distance, dragging, event, target } = dragProps2;
		if (event.pointerType === "touch" || event.type.startsWith("touch")) return;
		dragProps2.event = {
			...dragProps2.event,
			target
		};
		if (!distance) return;
		event.stopPropagation();
		if (!dragging) {
			onDragEnd(dragProps2);
			dragEnd(dragProps2);
			return;
		}
		onDrag(dragProps2);
		drag(dragProps2);
		if (!isDragging) {
			onDragStart(dragProps2);
			dragStart(dragProps2);
		}
	}, {
		axis: dragDirection === "e" || dragDirection === "w" ? "x" : "y",
		threshold: dragThreshold,
		enabled: isDragEnabled,
		pointer: { capture: false }
	});
	const dragProps = isDragEnabled ? dragGestureProps() : {};
	return /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)(Input, {
		...props,
		...dragProps,
		className: "components-input-control__input",
		"data-empty-value": value ? void 0 : "",
		disabled,
		dragCursor,
		isDragging,
		id,
		onBlur: handleOnBlur,
		onChange: handleOnChange,
		onKeyDown: withIgnoreIMEEvents(handleOnKeyDown),
		ref,
		inputSize: size,
		value: value ?? "",
		type
	});
}
var import_jsx_runtime$1, noop$1, input_field_default;
function init_input_field() {
	return (init_input_field = __esmMin((() => {
		init_use_gesture_react_esm();
		init_react();
		init_build_module();
		init_utils();
		init_input_control_styles();
		init_reducer();
		import_jsx_runtime$1 = require_jsx_runtime();
		noop$1 = () => {};
		input_field_default = (0, import_react.forwardRef)(InputField);
	})))();
}
//#endregion
//#region ../packages/components/build-module/input-control/index.mjs
function useUniqueId(idProp) {
	const id = `inspector-input-control-${use_instance_id_default(InputControl)}`;
	return idProp || id;
}
function UnforwardedInputControl(props, ref) {
	const { __next40pxDefaultSize: _next40pxDefaultSize, __next36pxDefaultSize: _next36pxDefaultSize, __unstableStateReducer: stateReducer = (state) => state, __unstableInputWidth, className, disabled = false, help, hideLabelFromVision = false, id: idProp, isPressEnterToChange = false, label, labelPosition = "top", onChange = noop, onValidate = noop, onKeyDown = noop, prefix, size = "default", style, suffix, value, ...restProps } = props;
	const id = useUniqueId(idProp);
	const classes = clsx("components-input-control", className);
	const draftHookProps = useDraft({
		value,
		onBlur: restProps.onBlur,
		onChange
	});
	const helpProp = !!help ? { "aria-describedby": `${id}__help` } : {};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(base_control_default, {
		className: classes,
		help,
		id,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(input_base_default, {
			__unstableInputWidth,
			disabled,
			gap: 3,
			hideLabelFromVision,
			id,
			justify: "left",
			label,
			labelPosition,
			prefix,
			size,
			style,
			suffix,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(input_field_default, {
				...restProps,
				...helpProp,
				className: "components-input-control__input",
				disabled,
				id,
				isPressEnterToChange,
				onKeyDown,
				onValidate,
				paddingInlineStart: prefix ? space(1) : void 0,
				paddingInlineEnd: suffix ? space(1) : void 0,
				ref,
				size,
				stateReducer,
				...draftHookProps
			})
		})
	});
}
var import_jsx_runtime, noop, InputControl, input_control_default;
function init_input_control() {
	return (init_input_control = __esmMin((() => {
		init_clsx();
		init_use_instance_id();
		init_react();
		init_input_base();
		init_input_field();
		init_space();
		init_utils();
		init_base_control();
		import_jsx_runtime = require_jsx_runtime();
		noop = () => {};
		InputControl = (0, import_react.forwardRef)(UnforwardedInputControl);
		input_control_default = InputControl;
	})))();
}
//#endregion
export { DRAG as a, PRESS_UP as c, COMMIT as i, init_actions as l, init_input_control as n, PRESS_DOWN as o, input_control_default as r, PRESS_ENTER as s, InputControl as t };
