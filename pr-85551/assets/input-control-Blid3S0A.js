import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as use_instance_id_default, t as init_use_instance_id } from "./use-instance-id-BznKyZc1.js";
import { n as withIgnoreIMEEvents } from "./with-ignore-ime-events-BFiL1WqY.js";
import { r as init_build_module } from "./build-module-LJKyBiy6.js";
import { a as init_clsx, i as clsx } from "./iframe-UtSZlYID.js";
import { n as useDrag, t as init_use_gesture_react_esm } from "./use-gesture-react.esm-BnGrlGd-.js";
import { i as init_polymorphic_element, r as PolymorphicElement } from "./component-CkY7eURU.js";
import { i as style_module_default, n as input_base_default, r as init_style_module, t as init_input_base } from "./input-base-DUxtZQ01.js";
import { a as DRAG_END, c as PRESS_DOWN, d as RESET, f as init_actions, i as DRAG, l as PRESS_ENTER, n as COMMIT, o as DRAG_START, r as CONTROL, s as INVALIDATE, t as CHANGE, u as PRESS_UP } from "./actions-BKLQwEs8.js";
import { n as init_base_control, t as BaseControl } from "./base-control-pNrjopap.js";
//#region ../packages/components/src/input-control/utils.ts
/**
* Gets a CSS cursor value based on a drag direction.
*
* @param dragDirection The drag direction.
* @return  The CSS cursor value.
*/
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
/**
* Custom hook that renders a drag cursor when dragging.
*
* @param {boolean} isDragging    The dragging state.
* @param {string}  dragDirection The drag direction.
*
* @return {string} The CSS cursor value.
*/
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
//#region ../packages/components/src/input-control/reducer/state.ts
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
//#region ../packages/components/src/input-control/reducer/reducer.ts
/**
* Prepares initialState for the reducer.
*
* @param initialState The initial state.
* @return Prepared initialState for the reducer
*/
function mergeInitialState(initialState = initialInputControlState) {
	const { value } = initialState;
	return {
		...initialInputControlState,
		...initialState,
		initialValue: value
	};
}
/**
* Creates the base reducer which may be coupled to a specializing reducer.
* As its final step, for all actions other than CONTROL, the base reducer
* passes the state and action on through the specializing reducer. The
* exception for CONTROL actions is because they represent controlled updates
* from props and no case has yet presented for their specialization.
*
* @param composedStateReducers A reducer to specialize state changes.
* @return The reducer.
*/
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
		/**
		* Send the nextState + action to the composedReducers via
		* this "bridge" mechanism. This allows external stateReducers
		* to hook into actions, and modify state if needed.
		*/
		return composedStateReducers(nextState, action);
	};
}
/**
* A custom hook that connects and external stateReducer with an internal
* reducer. This hook manages the internal state of InputControl.
* However, by connecting an external stateReducer function, other
* components can react to actions as well as modify state before it is
* applied.
*
* This technique uses the "stateReducer" design pattern:
* https://kentcdodds.com/blog/the-state-reducer-pattern/
*
* @param stateReducer    An external state reducer.
* @param initialState    The initial state for the reducer.
* @param onChangeHandler A handler for the onChange event.
* @return State, dispatch, and a collection of actions.
*/
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
	/**
	* Actions for the reducer
	*/
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
//#region ../packages/components/src/input-control/input-field.tsx
function InputField({ disabled = false, dragDirection = "n", dragThreshold = 10, id, isDragEnabled = false, isPressEnterToChange = false, onBlur = noop$1, onChange = noop$1, onDrag = noop$1, onDragEnd = noop$1, onDragStart = noop$1, onKeyDown = noop$1, onValidate = noop$1, size = "default", stateReducer = (state) => state, value: valueProp, type, paddingInlineStart, paddingInlineEnd, style, ...props }, ref) {
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
		/**
		* If isPressEnterToChange is set, this commits the value to
		* the onChange callback.
		*/
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
	const dragGestureProps = useDrag((dragProps) => {
		const { distance, dragging, event, target } = dragProps;
		if (event.pointerType === "touch" || event.type.startsWith("touch")) return;
		dragProps.event = {
			...dragProps.event,
			target
		};
		if (!distance) return;
		event.stopPropagation();
		/**
		* Quick return if no longer dragging.
		* This prevents unnecessary value calculations.
		*/
		if (!dragging) {
			onDragEnd(dragProps);
			dragEnd(dragProps);
			return;
		}
		onDrag(dragProps);
		drag(dragProps);
		if (!isDragging) {
			onDragStart(dragProps);
			dragStart(dragProps);
		}
	}, {
		axis: dragDirection === "e" || dragDirection === "w" ? "x" : "y",
		threshold: dragThreshold,
		enabled: isDragEnabled,
		pointer: { capture: false }
	});
	const dragProps = isDragEnabled ? dragGestureProps() : {};
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(PolymorphicElement, {
		as: "input",
		...props,
		...dragProps,
		className: clsx("components-input-control__input", style_module_default.input, {
			[style_module_default["is-small"]]: size === "small",
			[style_module_default["is-compact"]]: size === "compact",
			[style_module_default["is-dragging"]]: isDragging,
			[style_module_default["has-drag-cursor"]]: isDragging && !!dragCursor
		}),
		style: {
			"--_wp-components-input-control-padding-start": typeof paddingInlineStart === "number" ? `${paddingInlineStart}px` : paddingInlineStart,
			"--_wp-components-input-control-padding-end": typeof paddingInlineEnd === "number" ? `${paddingInlineEnd}px` : paddingInlineEnd,
			"--_wp-components-input-control-drag-cursor": isDragging ? dragCursor : void 0,
			...style
		},
		"data-empty-value": value ? void 0 : "",
		disabled,
		id,
		onBlur: handleOnBlur,
		onChange: handleOnChange,
		onKeyDown: withIgnoreIMEEvents(handleOnKeyDown),
		ref,
		value: value ?? "",
		type
	}, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 197,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime$1, _jsxFileName$1, noop$1, ForwardedComponent;
function init_input_field() {
	return (init_input_field = __esmMin((() => {
		init_clsx();
		init_use_gesture_react_esm();
		init_react();
		init_build_module();
		init_utils();
		init_polymorphic_element();
		init_style_module();
		init_reducer();
		import_jsx_dev_runtime$1 = require_jsx_dev_runtime();
		_jsxFileName$1 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/input-control/input-field.tsx";
		noop$1 = () => {};
		ForwardedComponent = (0, import_react.forwardRef)(InputField);
		try {
			ForwardedComponent.__docgenInfo = {
				"description": "",
				"displayName": "inputfield",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/input-control/input-field.tsx",
				"methods": [],
				"props": {
					"dragDirection": {
						"defaultValue": { "value": "'n'" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "InputFieldProps"
						}],
						"description": "Determines the drag axis.",
						"name": "dragDirection",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "InputFieldProps"
						},
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "DragDirection",
							"value": [
								{ "value": "\"s\"" },
								{ "value": "\"n\"" },
								{ "value": "\"e\"" },
								{ "value": "\"w\"" }
							]
						}
					},
					"dragThreshold": {
						"defaultValue": { "value": "10" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "InputFieldProps"
						}],
						"description": "If `isDragEnabled` is true, this controls the amount of `px` to have been dragged before\nthe drag gesture is actually triggered.",
						"name": "dragThreshold",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "InputFieldProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "number" }
					},
					"isDragEnabled": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "InputFieldProps"
						}],
						"description": "If true, enables mouse drag gestures.",
						"name": "isDragEnabled",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "InputFieldProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"isPressEnterToChange": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "InputFieldProps"
						}],
						"description": "If true, the `ENTER` key press is required in order to trigger an `onChange`.\nIf enabled, a change is also triggered when tabbing away (`onBlur`).",
						"name": "isPressEnterToChange",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "InputFieldProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"onChange": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "InputFieldProps"
						}],
						"description": "A function that receives the value of the input.",
						"name": "onChange",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "InputFieldProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "InputChangeCallback<{}>" }
					},
					"onValidate": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "InputFieldProps"
						}],
						"description": "",
						"name": "onValidate",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "InputFieldProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "((nextValue: string, event?: SyntheticEvent<HTMLInputElement, Event>) => void)" }
					},
					"paddingInlineStart": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "InputFieldProps"
						}],
						"description": "",
						"name": "paddingInlineStart",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "InputFieldProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "PaddingInlineStart<string | number>" }
					},
					"paddingInlineEnd": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "InputFieldProps"
						}],
						"description": "",
						"name": "paddingInlineEnd",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "InputFieldProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "PaddingInlineEnd<string | number>" }
					},
					"stateReducer": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "InputFieldProps"
						}],
						"description": "",
						"name": "stateReducer",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "InputFieldProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "StateReducer" }
					},
					"value": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "InputFieldProps"
						}],
						"description": "The current value of the input.",
						"name": "value",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "InputFieldProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"onDragEnd": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "InputFieldProps"
						}],
						"description": "",
						"name": "onDragEnd",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "InputFieldProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "((dragProps: Omit<FullGestureState<\"drag\">, \"event\"> & { event: unknown; }) => void)" }
					},
					"onDragStart": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "InputFieldProps"
						}],
						"description": "",
						"name": "onDragStart",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "InputFieldProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "((dragProps: Omit<FullGestureState<\"drag\">, \"event\"> & { event: unknown; }) => void)" }
					},
					"onDrag": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "InputFieldProps"
						}],
						"description": "",
						"name": "onDrag",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "InputFieldProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "((dragProps: Omit<FullGestureState<\"drag\">, \"event\"> & { event: unknown; }) => void)" }
					},
					"type": {
						"defaultValue": { "value": "'text'" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "InputFieldProps"
						}],
						"description": "Type of the input element to render.",
						"name": "type",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "InputFieldProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "HTMLInputTypeAttribute" }
					},
					"__unstableInputWidth": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "BaseProps"
						}],
						"description": "",
						"name": "__unstableInputWidth",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "BaseProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "Width<string | number>" }
					},
					"hideLabelFromVision": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "BaseProps"
						}],
						"description": "If true, the label will only be visible to screen readers.",
						"name": "hideLabelFromVision",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "BaseProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"labelPosition": {
						"defaultValue": { "value": "'top'" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "BaseProps"
						}],
						"description": "The position of the label.",
						"name": "labelPosition",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "BaseProps"
						},
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "LabelPosition",
							"value": [
								{ "value": "\"top\"" },
								{ "value": "\"side\"" },
								{ "value": "\"bottom\"" },
								{ "value": "\"edge\"" }
							]
						}
					},
					"size": {
						"defaultValue": { "value": "'default'" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "BaseProps"
						}],
						"description": "Adjusts the size of the input.",
						"name": "size",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "BaseProps"
						},
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "Size",
							"value": [
								{ "value": "\"small\"" },
								{ "value": "\"default\"" },
								{ "value": "\"compact\"" }
							]
						}
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/components/src/input-control/index.tsx
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
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BaseControl, {
		className: classes,
		help,
		id,
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(input_base_default, {
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
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ForwardedComponent, {
				...restProps,
				...helpProp,
				className: "components-input-control__input",
				disabled,
				id,
				isPressEnterToChange,
				onKeyDown,
				onValidate,
				paddingInlineStart: prefix ? "var(--wpds-dimension-padding-xs, 4px)" : void 0,
				paddingInlineEnd: suffix ? "var(--wpds-dimension-padding-xs, 4px)" : void 0,
				ref,
				size,
				stateReducer,
				...draftHookProps
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 76,
				columnNumber: 5
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 62,
			columnNumber: 4
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 61,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime, _jsxFileName, noop, InputControl;
function init_input_control() {
	return (init_input_control = __esmMin((() => {
		init_clsx();
		init_use_instance_id();
		init_react();
		init_input_base();
		init_input_field();
		init_utils();
		init_base_control();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/input-control/index.tsx";
		noop = () => {};
		InputControl = (0, import_react.forwardRef)(UnforwardedInputControl);
		try {
			UnforwardedInputControl.__docgenInfo = {
				"description": "",
				"displayName": "UnforwardedInputControl",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/input-control/index.tsx",
				"methods": [],
				"props": {
					"__next36pxDefaultSize": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "InputControlProps"
						}],
						"description": "Deprecated. Use `__next40pxDefaultSize` instead.\n@deprecated\n@ignore",
						"name": "__next36pxDefaultSize",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "InputControlProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"__next40pxDefaultSize": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "InputControlProps"
						}],
						"description": "@deprecated Default behavior since WordPress 7.1. Prop can be safely removed.\n@ignore",
						"name": "__next40pxDefaultSize",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "InputControlProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"__unstableStateReducer": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "InputControlProps"
						}],
						"description": "",
						"name": "__unstableStateReducer",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "InputControlProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "StateReducer" }
					},
					"label": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "InputBaseProps"
						}],
						"description": "If this property is added, a label will be generated using label property as the content.",
						"name": "label",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "InputBaseProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "ReactNode" }
					},
					"prefix": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "InputBaseProps"
						}],
						"description": "Renders an element on the left side of the input.\n\nBy default, the prefix is aligned with the edge of the input border, with no padding.\nIf you want to apply standard padding in accordance with the size variant, wrap the element in\nthe provided `<InputControlPrefixWrapper>` component.\n\n```jsx\nimport {\n  __experimentalInputControl as InputControl,\n  __experimentalInputControlPrefixWrapper as InputControlPrefixWrapper,\n} from '@wordpress/components';\n\n<InputControl\n  prefix={<InputControlPrefixWrapper>@</InputControlPrefixWrapper>}\n/>\n```",
						"name": "prefix",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "InputBaseProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "ReactNode" }
					},
					"disabled": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "InputBaseProps"
						}],
						"description": "If true, the `input` will be disabled.",
						"name": "disabled",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "InputBaseProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"size": {
						"defaultValue": { "value": "'default'" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "BaseProps"
						}],
						"description": "Adjusts the size of the input.",
						"name": "size",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "BaseProps"
						},
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "Size",
							"value": [
								{ "value": "\"small\"" },
								{ "value": "\"default\"" },
								{ "value": "\"compact\"" }
							]
						}
					},
					"suffix": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "InputBaseProps"
						}],
						"description": "Renders an element on the right side of the input.\n\nBy default, the suffix is aligned with the edge of the input border, with no padding.\nIf you want to apply standard padding in accordance with the size variant, wrap the element in\nthe provided `<InputControlSuffixWrapper>` component.\n\n```jsx\nimport {\n  __experimentalInputControl as InputControl,\n  __experimentalInputControlSuffixWrapper as InputControlSuffixWrapper,\n} from '@wordpress/components';\n\n<InputControl\n  suffix={<InputControlSuffixWrapper>%</InputControlSuffixWrapper>}\n/>\n```",
						"name": "suffix",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "InputBaseProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "ReactNode" }
					},
					"hideLabelFromVision": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "BaseProps"
						}],
						"description": "If true, the label will only be visible to screen readers.",
						"name": "hideLabelFromVision",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "BaseProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"labelPosition": {
						"defaultValue": { "value": "'top'" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "BaseProps"
						}],
						"description": "The position of the label.",
						"name": "labelPosition",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "BaseProps"
						},
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "LabelPosition",
							"value": [
								{ "value": "\"top\"" },
								{ "value": "\"side\"" },
								{ "value": "\"bottom\"" },
								{ "value": "\"edge\"" }
							]
						}
					},
					"__unstableInputWidth": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "BaseProps"
						}],
						"description": "",
						"name": "__unstableInputWidth",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "BaseProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "Width<string | number>" }
					},
					"help": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/base-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Additional description for the control.\n\nOnly use for meaningful description or instructions for the control. An element containing the description will be programmatically associated to the BaseControl by the means of an `aria-describedby` attribute.",
						"name": "help",
						"required": false,
						"tags": {},
						"type": { "name": "ReactNode" }
					},
					"onChange": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "InputFieldProps"
						}],
						"description": "A function that receives the value of the input.",
						"name": "onChange",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "InputFieldProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "InputChangeCallback<{}>" }
					},
					"onDrag": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "InputFieldProps"
						}],
						"description": "",
						"name": "onDrag",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "InputFieldProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "((dragProps: Omit<FullGestureState<\"drag\">, \"event\"> & { event: unknown; }) => void)" }
					},
					"onDragEnd": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "InputFieldProps"
						}],
						"description": "",
						"name": "onDragEnd",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "InputFieldProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "((dragProps: Omit<FullGestureState<\"drag\">, \"event\"> & { event: unknown; }) => void)" }
					},
					"onDragStart": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "InputFieldProps"
						}],
						"description": "",
						"name": "onDragStart",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "InputFieldProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "((dragProps: Omit<FullGestureState<\"drag\">, \"event\"> & { event: unknown; }) => void)" }
					},
					"type": {
						"defaultValue": { "value": "'text'" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "InputFieldProps"
						}],
						"description": "Type of the input element to render.",
						"name": "type",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "InputFieldProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "HTMLInputTypeAttribute" }
					},
					"value": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "InputFieldProps"
						}],
						"description": "The current value of the input.",
						"name": "value",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "InputFieldProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"isDragEnabled": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "InputFieldProps"
						}],
						"description": "If true, enables mouse drag gestures.",
						"name": "isDragEnabled",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "InputFieldProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"dragDirection": {
						"defaultValue": { "value": "'n'" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "InputFieldProps"
						}],
						"description": "Determines the drag axis.",
						"name": "dragDirection",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "InputFieldProps"
						},
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "DragDirection",
							"value": [
								{ "value": "\"s\"" },
								{ "value": "\"n\"" },
								{ "value": "\"e\"" },
								{ "value": "\"w\"" }
							]
						}
					},
					"dragThreshold": {
						"defaultValue": { "value": "10" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "InputFieldProps"
						}],
						"description": "If `isDragEnabled` is true, this controls the amount of `px` to have been dragged before\nthe drag gesture is actually triggered.",
						"name": "dragThreshold",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "InputFieldProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "number" }
					},
					"isPressEnterToChange": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "InputFieldProps"
						}],
						"description": "If true, the `ENTER` key press is required in order to trigger an `onChange`.\nIf enabled, a change is also triggered when tabbing away (`onBlur`).",
						"name": "isPressEnterToChange",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "InputFieldProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"onValidate": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "InputFieldProps"
						}],
						"description": "",
						"name": "onValidate",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "InputFieldProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "((nextValue: string, event?: SyntheticEvent<HTMLInputElement, Event>) => void)" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			InputControl.__docgenInfo = {
				"description": "InputControl components let users enter and edit text. This is an experimental component\nintended to (in time) merge with or replace `TextControl`.\n\n```jsx\nimport { __experimentalInputControl as InputControl } from '@wordpress/components';\nimport { useState } from 'react';\n\nconst Example = () => {\n  const [ value, setValue ] = useState( '' );\n\n  return (\n 	<InputControl\n 		value={ value }\n 		onChange={ ( nextValue ) => setValue( nextValue ?? '' ) }\n 	/>\n  );\n};\n```",
				"displayName": "InputControl",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/input-control/index.tsx",
				"methods": [],
				"props": {
					"__next36pxDefaultSize": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "InputControlProps"
						}],
						"description": "Deprecated. Use `__next40pxDefaultSize` instead.\n@deprecated\n@ignore",
						"name": "__next36pxDefaultSize",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "InputControlProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"__next40pxDefaultSize": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "InputControlProps"
						}],
						"description": "@deprecated Default behavior since WordPress 7.1. Prop can be safely removed.\n@ignore",
						"name": "__next40pxDefaultSize",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "InputControlProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"__unstableStateReducer": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "InputControlProps"
						}],
						"description": "",
						"name": "__unstableStateReducer",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "InputControlProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "StateReducer" }
					},
					"label": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "InputBaseProps"
						}],
						"description": "If this property is added, a label will be generated using label property as the content.",
						"name": "label",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "InputBaseProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "ReactNode" }
					},
					"prefix": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "InputBaseProps"
						}],
						"description": "Renders an element on the left side of the input.\n\nBy default, the prefix is aligned with the edge of the input border, with no padding.\nIf you want to apply standard padding in accordance with the size variant, wrap the element in\nthe provided `<InputControlPrefixWrapper>` component.\n\n```jsx\nimport {\n  __experimentalInputControl as InputControl,\n  __experimentalInputControlPrefixWrapper as InputControlPrefixWrapper,\n} from '@wordpress/components';\n\n<InputControl\n  prefix={<InputControlPrefixWrapper>@</InputControlPrefixWrapper>}\n/>\n```",
						"name": "prefix",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "InputBaseProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "ReactNode" }
					},
					"disabled": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "InputBaseProps"
						}],
						"description": "If true, the `input` will be disabled.",
						"name": "disabled",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "InputBaseProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"size": {
						"defaultValue": { "value": "'default'" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "BaseProps"
						}],
						"description": "Adjusts the size of the input.",
						"name": "size",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "BaseProps"
						},
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "Size",
							"value": [
								{ "value": "\"small\"" },
								{ "value": "\"default\"" },
								{ "value": "\"compact\"" }
							]
						}
					},
					"suffix": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "InputBaseProps"
						}],
						"description": "Renders an element on the right side of the input.\n\nBy default, the suffix is aligned with the edge of the input border, with no padding.\nIf you want to apply standard padding in accordance with the size variant, wrap the element in\nthe provided `<InputControlSuffixWrapper>` component.\n\n```jsx\nimport {\n  __experimentalInputControl as InputControl,\n  __experimentalInputControlSuffixWrapper as InputControlSuffixWrapper,\n} from '@wordpress/components';\n\n<InputControl\n  suffix={<InputControlSuffixWrapper>%</InputControlSuffixWrapper>}\n/>\n```",
						"name": "suffix",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "InputBaseProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "ReactNode" }
					},
					"hideLabelFromVision": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "BaseProps"
						}],
						"description": "If true, the label will only be visible to screen readers.",
						"name": "hideLabelFromVision",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "BaseProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"labelPosition": {
						"defaultValue": { "value": "'top'" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "BaseProps"
						}],
						"description": "The position of the label.",
						"name": "labelPosition",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "BaseProps"
						},
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "LabelPosition",
							"value": [
								{ "value": "\"top\"" },
								{ "value": "\"side\"" },
								{ "value": "\"bottom\"" },
								{ "value": "\"edge\"" }
							]
						}
					},
					"__unstableInputWidth": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "BaseProps"
						}],
						"description": "",
						"name": "__unstableInputWidth",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "BaseProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "Width<string | number>" }
					},
					"help": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/base-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Additional description for the control.\n\nOnly use for meaningful description or instructions for the control. An element containing the description will be programmatically associated to the BaseControl by the means of an `aria-describedby` attribute.",
						"name": "help",
						"required": false,
						"tags": {},
						"type": { "name": "ReactNode" }
					},
					"onChange": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "InputFieldProps"
						}],
						"description": "A function that receives the value of the input.",
						"name": "onChange",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "InputFieldProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "InputChangeCallback<{}>" }
					},
					"onDrag": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "InputFieldProps"
						}],
						"description": "",
						"name": "onDrag",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "InputFieldProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "((dragProps: Omit<FullGestureState<\"drag\">, \"event\"> & { event: unknown; }) => void)" }
					},
					"onDragEnd": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "InputFieldProps"
						}],
						"description": "",
						"name": "onDragEnd",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "InputFieldProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "((dragProps: Omit<FullGestureState<\"drag\">, \"event\"> & { event: unknown; }) => void)" }
					},
					"onDragStart": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "InputFieldProps"
						}],
						"description": "",
						"name": "onDragStart",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "InputFieldProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "((dragProps: Omit<FullGestureState<\"drag\">, \"event\"> & { event: unknown; }) => void)" }
					},
					"type": {
						"defaultValue": { "value": "'text'" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "InputFieldProps"
						}],
						"description": "Type of the input element to render.",
						"name": "type",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "InputFieldProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "HTMLInputTypeAttribute" }
					},
					"value": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "InputFieldProps"
						}],
						"description": "The current value of the input.",
						"name": "value",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "InputFieldProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"isDragEnabled": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "InputFieldProps"
						}],
						"description": "If true, enables mouse drag gestures.",
						"name": "isDragEnabled",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "InputFieldProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"dragDirection": {
						"defaultValue": { "value": "'n'" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "InputFieldProps"
						}],
						"description": "Determines the drag axis.",
						"name": "dragDirection",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "InputFieldProps"
						},
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "DragDirection",
							"value": [
								{ "value": "\"s\"" },
								{ "value": "\"n\"" },
								{ "value": "\"e\"" },
								{ "value": "\"w\"" }
							]
						}
					},
					"dragThreshold": {
						"defaultValue": { "value": "10" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "InputFieldProps"
						}],
						"description": "If `isDragEnabled` is true, this controls the amount of `px` to have been dragged before\nthe drag gesture is actually triggered.",
						"name": "dragThreshold",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "InputFieldProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "number" }
					},
					"isPressEnterToChange": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "InputFieldProps"
						}],
						"description": "If true, the `ENTER` key press is required in order to trigger an `onChange`.\nIf enabled, a change is also triggered when tabbing away (`onBlur`).",
						"name": "isPressEnterToChange",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "InputFieldProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"onValidate": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "InputFieldProps"
						}],
						"description": "",
						"name": "onValidate",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "InputFieldProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "((nextValue: string, event?: SyntheticEvent<HTMLInputElement, Event>) => void)" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
export { init_input_control as n, InputControl as t };
