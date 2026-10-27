import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { i as init_build_module, t as escapeAttribute } from "./build-module-Ci82NGER.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as init_build_module$1, t as deprecated } from "./build-module-BWCORUbm.js";
import { n as isShallowEqual, t as init_build_module$2 } from "./build-module-COHfMY9T.js";
import { n as init_build_module$3, t as focus } from "./build-module-B6BKc0uG.js";
import { n as useMergeRefs, t as init_use_merge_refs } from "./use-merge-refs-BAtuPB1L.js";
import { o as isRTL, t as init_build_module$4 } from "./build-module-v04us4E2.js";
import { n as use_reduced_motion_default, t as init_use_reduced_motion } from "./use-reduced-motion-D9Mdybdt.js";
import { a as init_clsx, i as clsx } from "./iframe-UtSZlYID.js";
import { n as warning, t as init_build_module$5 } from "./build-module-B5spW8IS.js";
import { n as match } from "./dist.es2015-CSwm41u9.js";
import { n as useContextSystem, o as init_context_connect, r as contextConnect, t as init_use_context_system } from "./use-context-system-6z_jGcZR.js";
import { n as init_component$4, t as View } from "./component-CkY7eURU.js";
import { n as init_component$5, t as HStack } from "./component--i8sR2uB.js";
import { n as init_button, t as Button } from "./button-BO8bp-IJ.js";
import { n as init_component$6, t as VStack } from "./component-9S7Padmp.js";
//#region ../packages/components/src/navigator/utils/router.ts
function matchPath(path, pattern) {
	return match(pattern, { decode: decodeURIComponent })(path);
}
function patternMatch(path, screens) {
	for (const screen of screens) {
		const matched = matchPath(path, screen.path);
		if (matched) return {
			params: matched.params,
			id: screen.id
		};
	}
}
function findParent(path, screens) {
	if (!path.startsWith("/")) return;
	const pathParts = path.split("/");
	let parentPath;
	while (pathParts.length > 1 && parentPath === void 0) {
		pathParts.pop();
		const potentialParentPath = pathParts.join("/") === "" ? "/" : pathParts.join("/");
		if (screens.find((screen) => {
			return matchPath(potentialParentPath, screen.path) !== false;
		})) parentPath = potentialParentPath;
	}
	return parentPath;
}
function init_router() {
	return (init_router = __esmMin((() => {})))();
}
//#endregion
//#region ../packages/components/src/navigator/context.ts
var initialContextValue, NavigatorContext;
function init_context() {
	return (init_context = __esmMin((() => {
		init_react();
		initialContextValue = {
			location: {},
			goTo: () => {},
			goBack: () => {},
			goToParent: () => {},
			addScreen: () => {},
			removeScreen: () => {},
			params: {}
		};
		NavigatorContext = (0, import_react.createContext)(initialContextValue);
		NavigatorContext.displayName = "NavigatorContext";
	})))();
}
//#endregion
//#region ../packages/components/src/navigator/style.module.scss
var wrapper, screen, style_module_default;
function init_style_module() {
	return (init_style_module = __esmMin((() => {
		wrapper = "_wrapper_1u9vy_1";
		screen = "_screen_1u9vy_11";
		style_module_default = {
			wrapper,
			screen,
			"screen-animation": "_screen-animation_1u9vy_50",
			"fade-in": "_fade-in_1u9vy_1",
			"slide-from-right": "_slide-from-right_1u9vy_1",
			"fade-out": "_fade-out_1u9vy_1",
			"slide-to-left": "_slide-to-left_1u9vy_1",
			"slide-from-left": "_slide-from-left_1u9vy_1",
			"slide-to-right": "_slide-to-right_1u9vy_1"
		};
	})))();
}
//#endregion
//#region ../packages/components/src/navigator/navigator/component.tsx
function addScreen({ screens }, screen) {
	if (screens.some((s) => s.path === screen.path)) {
		warning(`Navigator: a screen with path ${screen.path} already exists.
The screen with id ${screen.id} will not be added.`);
		return screens;
	}
	return [...screens, screen];
}
function removeScreen({ screens }, screen) {
	return screens.filter((s) => s.id !== screen.id);
}
function goTo(state, path, options = {}) {
	const { focusSelectors } = state;
	const currentLocation = { ...state.currentLocation };
	const { isBack = false, skipFocus = false, replace, focusTargetSelector, ...restOptions } = options;
	if (currentLocation.path === path) return {
		currentLocation,
		focusSelectors
	};
	let focusSelectorsCopy;
	function getFocusSelectorsCopy() {
		focusSelectorsCopy = focusSelectorsCopy ?? new Map(state.focusSelectors);
		return focusSelectorsCopy;
	}
	if (focusTargetSelector && currentLocation.path) getFocusSelectorsCopy().set(currentLocation.path, focusTargetSelector);
	let currentFocusSelector;
	if (focusSelectors.get(path)) {
		if (isBack) currentFocusSelector = focusSelectors.get(path);
		getFocusSelectorsCopy().delete(path);
	}
	return {
		currentLocation: {
			...restOptions,
			isInitial: false,
			path,
			isBack,
			hasRestoredFocus: false,
			focusTargetSelector: currentFocusSelector,
			skipFocus
		},
		focusSelectors: focusSelectorsCopy ?? focusSelectors
	};
}
function goToParent(state, options = {}) {
	const { screens, focusSelectors } = state;
	const currentLocation = { ...state.currentLocation };
	const currentPath = currentLocation.path;
	if (currentPath === void 0) return {
		currentLocation,
		focusSelectors
	};
	const parentPath = findParent(currentPath, screens);
	if (parentPath === void 0) return {
		currentLocation,
		focusSelectors
	};
	return goTo(state, parentPath, {
		...options,
		isBack: true
	});
}
function routerReducer(state, action) {
	let { screens, currentLocation, matchedPath, focusSelectors, ...restState } = state;
	switch (action.type) {
		case "add":
			screens = addScreen(state, action.screen);
			break;
		case "remove":
			screens = removeScreen(state, action.screen);
			break;
		case "goto":
			({currentLocation, focusSelectors} = goTo(state, action.path, action.options));
			break;
		case "gotoparent": ({currentLocation, focusSelectors} = goToParent(state, action.options));
	}
	if (screens === state.screens && currentLocation === state.currentLocation) return state;
	const currentPath = currentLocation.path;
	matchedPath = currentPath !== void 0 ? patternMatch(currentPath, screens) : void 0;
	if (matchedPath && state.matchedPath && matchedPath.id === state.matchedPath.id && isShallowEqual(matchedPath.params, state.matchedPath.params)) matchedPath = state.matchedPath;
	return {
		...restState,
		screens,
		currentLocation,
		matchedPath,
		focusSelectors
	};
}
function UnconnectedNavigator(props, forwardedRef) {
	const { initialPath: initialPathProp, children, className, ...otherProps } = useContextSystem(props, "Navigator");
	const [routerState, dispatch] = (0, import_react.useReducer)(routerReducer, initialPathProp, (path) => ({
		screens: [],
		currentLocation: {
			path,
			isInitial: true
		},
		matchedPath: void 0,
		focusSelectors: /* @__PURE__ */ new Map(),
		initialPath: initialPathProp
	}));
	const methods = (0, import_react.useMemo)(() => ({
		goBack: (options) => dispatch({
			type: "gotoparent",
			options
		}),
		goTo: (path, options) => dispatch({
			type: "goto",
			path,
			options
		}),
		goToParent: (options) => {
			deprecated(`wp.components.useNavigator().goToParent`, {
				since: "6.7",
				alternative: "wp.components.useNavigator().goBack"
			});
			dispatch({
				type: "gotoparent",
				options
			});
		},
		addScreen: (screen) => dispatch({
			type: "add",
			screen
		}),
		removeScreen: (screen) => dispatch({
			type: "remove",
			screen
		})
	}), []);
	const { currentLocation, matchedPath } = routerState;
	const navigatorContextValue = (0, import_react.useMemo)(() => ({
		location: currentLocation,
		params: matchedPath?.params ?? {},
		match: matchedPath?.id,
		...methods
	}), [
		currentLocation,
		matchedPath,
		methods
	]);
	const classes = clsx(style_module_default.wrapper, className);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$4.jsxDEV)(View, {
		ref: forwardedRef,
		className: classes,
		...otherProps,
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime$4.jsxDEV)(NavigatorContext.Provider, {
			value: navigatorContextValue,
			children
		}, void 0, false, {
			fileName: _jsxFileName$4,
			lineNumber: 269,
			columnNumber: 4
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$4,
		lineNumber: 268,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime$4, _jsxFileName$4, Navigator$1;
function init_component() {
	return (init_component = __esmMin((() => {
		init_clsx();
		init_build_module$1();
		init_react();
		init_build_module$2();
		init_build_module$5();
		init_context_connect(), init_use_context_system();
		init_router();
		init_component$4();
		init_context();
		init_style_module();
		import_jsx_dev_runtime$4 = require_jsx_dev_runtime();
		_jsxFileName$4 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/navigator/navigator/component.tsx";
		Navigator$1 = contextConnect(UnconnectedNavigator, "Navigator");
		try {
			Navigator$1.__docgenInfo = {
				"description": "",
				"displayName": "Navigator",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/navigator/navigator/component.tsx",
				"methods": [],
				"props": {
					"initialPath": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/navigator/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The initial active path.",
						"name": "initialPath",
						"required": true,
						"tags": {},
						"type": { "name": "string" }
					},
					"children": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/navigator/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The children elements.",
						"name": "children",
						"required": true,
						"tags": {},
						"type": { "name": "ReactNode" }
					},
					"as": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/context/wordpress-component.ts",
							"name": "TypeLiteral"
						}],
						"description": "The HTML element to render the component as.",
						"name": "as",
						"required": true,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "keyof IntrinsicElements",
							"value": [
								{ "value": "\"symbol\"" },
								{ "value": "\"object\"" },
								{ "value": "\"style\"" },
								{ "value": "\"span\"" },
								{ "value": "\"a\"" },
								{ "value": "\"abbr\"" },
								{ "value": "\"address\"" },
								{ "value": "\"area\"" },
								{ "value": "\"article\"" },
								{ "value": "\"aside\"" },
								{ "value": "\"audio\"" },
								{ "value": "\"b\"" },
								{ "value": "\"base\"" },
								{ "value": "\"bdi\"" },
								{ "value": "\"bdo\"" },
								{ "value": "\"big\"" },
								{ "value": "\"blockquote\"" },
								{ "value": "\"body\"" },
								{ "value": "\"br\"" },
								{ "value": "\"button\"" },
								{ "value": "\"canvas\"" },
								{ "value": "\"caption\"" },
								{ "value": "\"center\"" },
								{ "value": "\"cite\"" },
								{ "value": "\"code\"" },
								{ "value": "\"col\"" },
								{ "value": "\"colgroup\"" },
								{ "value": "\"data\"" },
								{ "value": "\"datalist\"" },
								{ "value": "\"dd\"" },
								{ "value": "\"del\"" },
								{ "value": "\"details\"" },
								{ "value": "\"dfn\"" },
								{ "value": "\"dialog\"" },
								{ "value": "\"div\"" },
								{ "value": "\"dl\"" },
								{ "value": "\"dt\"" },
								{ "value": "\"em\"" },
								{ "value": "\"embed\"" },
								{ "value": "\"fieldset\"" },
								{ "value": "\"figcaption\"" },
								{ "value": "\"figure\"" },
								{ "value": "\"footer\"" },
								{ "value": "\"form\"" },
								{ "value": "\"h1\"" },
								{ "value": "\"h2\"" },
								{ "value": "\"h3\"" },
								{ "value": "\"h4\"" },
								{ "value": "\"h5\"" },
								{ "value": "\"h6\"" },
								{ "value": "\"head\"" },
								{ "value": "\"header\"" },
								{ "value": "\"hgroup\"" },
								{ "value": "\"hr\"" },
								{ "value": "\"html\"" },
								{ "value": "\"i\"" },
								{ "value": "\"iframe\"" },
								{ "value": "\"img\"" },
								{ "value": "\"input\"" },
								{ "value": "\"ins\"" },
								{ "value": "\"kbd\"" },
								{ "value": "\"keygen\"" },
								{ "value": "\"label\"" },
								{ "value": "\"legend\"" },
								{ "value": "\"li\"" },
								{ "value": "\"link\"" },
								{ "value": "\"main\"" },
								{ "value": "\"map\"" },
								{ "value": "\"mark\"" },
								{ "value": "\"menu\"" },
								{ "value": "\"menuitem\"" },
								{ "value": "\"meta\"" },
								{ "value": "\"meter\"" },
								{ "value": "\"nav\"" },
								{ "value": "\"noindex\"" },
								{ "value": "\"noscript\"" },
								{ "value": "\"ol\"" },
								{ "value": "\"optgroup\"" },
								{ "value": "\"option\"" },
								{ "value": "\"output\"" },
								{ "value": "\"p\"" },
								{ "value": "\"param\"" },
								{ "value": "\"picture\"" },
								{ "value": "\"pre\"" },
								{ "value": "\"progress\"" },
								{ "value": "\"q\"" },
								{ "value": "\"rp\"" },
								{ "value": "\"rt\"" },
								{ "value": "\"ruby\"" },
								{ "value": "\"s\"" },
								{ "value": "\"samp\"" },
								{ "value": "\"search\"" },
								{ "value": "\"slot\"" },
								{ "value": "\"script\"" },
								{ "value": "\"section\"" },
								{ "value": "\"select\"" },
								{ "value": "\"small\"" },
								{ "value": "\"source\"" },
								{ "value": "\"strong\"" },
								{ "value": "\"sub\"" },
								{ "value": "\"summary\"" },
								{ "value": "\"sup\"" },
								{ "value": "\"table\"" },
								{ "value": "\"template\"" },
								{ "value": "\"tbody\"" },
								{ "value": "\"td\"" },
								{ "value": "\"textarea\"" },
								{ "value": "\"tfoot\"" },
								{ "value": "\"th\"" },
								{ "value": "\"thead\"" },
								{ "value": "\"time\"" },
								{ "value": "\"title\"" },
								{ "value": "\"tr\"" },
								{ "value": "\"track\"" },
								{ "value": "\"u\"" },
								{ "value": "\"ul\"" },
								{ "value": "\"var\"" },
								{ "value": "\"video\"" },
								{ "value": "\"wbr\"" },
								{ "value": "\"webview\"" },
								{ "value": "\"svg\"" },
								{ "value": "\"animate\"" },
								{ "value": "\"animateMotion\"" },
								{ "value": "\"animateTransform\"" },
								{ "value": "\"circle\"" },
								{ "value": "\"clipPath\"" },
								{ "value": "\"defs\"" },
								{ "value": "\"desc\"" },
								{ "value": "\"ellipse\"" },
								{ "value": "\"feBlend\"" },
								{ "value": "\"feColorMatrix\"" },
								{ "value": "\"feComponentTransfer\"" },
								{ "value": "\"feComposite\"" },
								{ "value": "\"feConvolveMatrix\"" },
								{ "value": "\"feDiffuseLighting\"" },
								{ "value": "\"feDisplacementMap\"" },
								{ "value": "\"feDistantLight\"" },
								{ "value": "\"feDropShadow\"" },
								{ "value": "\"feFlood\"" },
								{ "value": "\"feFuncA\"" },
								{ "value": "\"feFuncB\"" },
								{ "value": "\"feFuncG\"" },
								{ "value": "\"feFuncR\"" },
								{ "value": "\"feGaussianBlur\"" },
								{ "value": "\"feImage\"" },
								{ "value": "\"feMerge\"" },
								{ "value": "\"feMergeNode\"" },
								{ "value": "\"feMorphology\"" },
								{ "value": "\"feOffset\"" },
								{ "value": "\"fePointLight\"" },
								{ "value": "\"feSpecularLighting\"" },
								{ "value": "\"feSpotLight\"" },
								{ "value": "\"feTile\"" },
								{ "value": "\"feTurbulence\"" },
								{ "value": "\"filter\"" },
								{ "value": "\"foreignObject\"" },
								{ "value": "\"g\"" },
								{ "value": "\"image\"" },
								{ "value": "\"line\"" },
								{ "value": "\"linearGradient\"" },
								{ "value": "\"marker\"" },
								{ "value": "\"mask\"" },
								{ "value": "\"metadata\"" },
								{ "value": "\"mpath\"" },
								{ "value": "\"path\"" },
								{ "value": "\"pattern\"" },
								{ "value": "\"polygon\"" },
								{ "value": "\"polyline\"" },
								{ "value": "\"radialGradient\"" },
								{ "value": "\"rect\"" },
								{ "value": "\"set\"" },
								{ "value": "\"stop\"" },
								{ "value": "\"switch\"" },
								{ "value": "\"text\"" },
								{ "value": "\"textPath\"" },
								{ "value": "\"tspan\"" },
								{ "value": "\"use\"" },
								{ "value": "\"view\"" }
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
//#region ../packages/components/src/navigator/animation.ts
var TOTAL_ANIMATION_DURATION, ANIMATION_END_NAMES;
function init_animation() {
	return (init_animation = __esmMin((() => {
		init_style_module();
		TOTAL_ANIMATION_DURATION = {
			IN: 300,
			OUT: 300
		};
		ANIMATION_END_NAMES = {
			end: {
				in: style_module_default["slide-from-right"],
				out: style_module_default["slide-to-left"]
			},
			start: {
				in: style_module_default["slide-from-left"],
				out: style_module_default["slide-to-right"]
			}
		};
	})))();
}
//#endregion
//#region ../packages/components/src/navigator/navigator-screen/use-screen-animate-presence.ts
function useScreenAnimatePresence({ isMatch, skipAnimation, isBack, onAnimationEnd }) {
	const isRTL$1 = isRTL();
	const prefersReducedMotion = use_reduced_motion_default();
	const [animationStatus, setAnimationStatus] = (0, import_react.useState)("INITIAL");
	const becameSelected = animationStatus !== "ANIMATING_IN" && animationStatus !== "IN" && isMatch;
	const becameUnselected = animationStatus !== "ANIMATING_OUT" && animationStatus !== "OUT" && !isMatch;
	(0, import_react.useLayoutEffect)(() => {
		if (becameSelected) setAnimationStatus(skipAnimation || prefersReducedMotion ? "IN" : "ANIMATING_IN");
		else if (becameUnselected) setAnimationStatus(skipAnimation || prefersReducedMotion ? "OUT" : "ANIMATING_OUT");
	}, [
		becameSelected,
		becameUnselected,
		skipAnimation,
		prefersReducedMotion
	]);
	const animationDirection = isRTL$1 && isBack || !isRTL$1 && !isBack ? "end" : "start";
	const isAnimatingIn = animationStatus === "ANIMATING_IN";
	const isAnimatingOut = animationStatus === "ANIMATING_OUT";
	let animationType;
	if (isAnimatingIn) animationType = "in";
	else if (isAnimatingOut) animationType = "out";
	const onScreenAnimationEnd = (0, import_react.useCallback)((e) => {
		onAnimationEnd?.(e);
		if (isExitAnimation(animationDirection, animationStatus, e.animationName)) setAnimationStatus("OUT");
		else if (isEnterAnimation(animationDirection, animationStatus, e.animationName)) setAnimationStatus("IN");
	}, [
		onAnimationEnd,
		animationStatus,
		animationDirection
	]);
	(0, import_react.useEffect)(() => {
		let animationTimeout;
		if (isAnimatingOut) animationTimeout = window.setTimeout(() => {
			setAnimationStatus("OUT");
			animationTimeout = void 0;
		}, TOTAL_ANIMATION_DURATION.OUT * ANIMATION_TIMEOUT_MARGIN);
		else if (isAnimatingIn) animationTimeout = window.setTimeout(() => {
			setAnimationStatus("IN");
			animationTimeout = void 0;
		}, TOTAL_ANIMATION_DURATION.IN * ANIMATION_TIMEOUT_MARGIN);
		return () => {
			if (animationTimeout) {
				window.clearTimeout(animationTimeout);
				animationTimeout = void 0;
			}
		};
	}, [isAnimatingOut, isAnimatingIn]);
	return {
		shouldRenderScreen: isMatch || animationStatus === "IN" || animationStatus === "ANIMATING_OUT",
		screenProps: {
			onAnimationEnd: onScreenAnimationEnd,
			"data-animation-direction": animationDirection,
			"data-animation-type": animationType,
			"data-skip-animation": skipAnimation || void 0
		}
	};
}
var ANIMATION_TIMEOUT_MARGIN, isEnterAnimation, isExitAnimation;
function init_use_screen_animate_presence() {
	return (init_use_screen_animate_presence = __esmMin((() => {
		init_react();
		init_use_reduced_motion();
		init_build_module$4();
		init_animation();
		ANIMATION_TIMEOUT_MARGIN = 1.2;
		isEnterAnimation = (animationDirection, animationStatus, animationName) => animationStatus === "ANIMATING_IN" && animationName === ANIMATION_END_NAMES[animationDirection].in;
		isExitAnimation = (animationDirection, animationStatus, animationName) => animationStatus === "ANIMATING_OUT" && animationName === ANIMATION_END_NAMES[animationDirection].out;
	})))();
}
//#endregion
//#region ../packages/components/src/navigator/navigator-screen/component.tsx
function UnconnectedNavigatorScreen(props, forwardedRef) {
	if (!/^\//.test(props.path)) warning("wp.components.Navigator.Screen: the `path` should follow a URL-like scheme; it should start with and be separated by the `/` character.");
	const screenId = (0, import_react.useId)();
	const { children, className, path, onAnimationEnd: onAnimationEndProp, ...otherProps } = useContextSystem(props, "Navigator.Screen");
	const { location, match, addScreen, removeScreen } = (0, import_react.useContext)(NavigatorContext);
	const { isInitial, isBack, focusTargetSelector, skipFocus } = location;
	const isMatch = match === screenId;
	const wrapperRef = (0, import_react.useRef)(null);
	const skipAnimationAndFocusRestoration = !!isInitial && !isBack;
	(0, import_react.useEffect)(() => {
		const screen = {
			id: screenId,
			path: escapeAttribute(path)
		};
		addScreen(screen);
		return () => removeScreen(screen);
	}, [
		screenId,
		path,
		addScreen,
		removeScreen
	]);
	const { shouldRenderScreen, screenProps } = useScreenAnimatePresence({
		isMatch,
		isBack,
		onAnimationEnd: onAnimationEndProp,
		skipAnimation: skipAnimationAndFocusRestoration
	});
	const classes = clsx(style_module_default.screen, style_module_default["screen-animation"], className);
	const locationRef = (0, import_react.useRef)(location);
	(0, import_react.useEffect)(() => {
		locationRef.current = location;
	}, [location]);
	(0, import_react.useEffect)(() => {
		const wrapperEl = wrapperRef.current;
		if (skipAnimationAndFocusRestoration || !isMatch || !wrapperEl || locationRef.current.hasRestoredFocus || skipFocus) return;
		const activeElement = wrapperEl.ownerDocument.activeElement;
		if (wrapperEl.contains(activeElement)) return;
		let elementToFocus = null;
		if (isBack && focusTargetSelector) elementToFocus = wrapperEl.querySelector(focusTargetSelector);
		if (!elementToFocus) {
			const [firstTabbable] = focus.tabbable.find(wrapperEl);
			elementToFocus = firstTabbable ?? wrapperEl;
		}
		locationRef.current.hasRestoredFocus = true;
		elementToFocus.focus();
	}, [
		skipAnimationAndFocusRestoration,
		isMatch,
		isBack,
		focusTargetSelector,
		skipFocus
	]);
	const mergedWrapperRef = useMergeRefs([forwardedRef, wrapperRef]);
	return shouldRenderScreen ? /* @__PURE__ */ (0, import_jsx_dev_runtime$3.jsxDEV)(View, {
		ref: mergedWrapperRef,
		className: classes,
		...screenProps,
		...otherProps,
		children
	}, void 0, false, {
		fileName: _jsxFileName$3,
		lineNumber: 127,
		columnNumber: 3
	}, this) : null;
}
var import_jsx_dev_runtime$3, _jsxFileName$3, NavigatorScreen;
function init_component$1() {
	return (init_component$1 = __esmMin((() => {
		init_clsx();
		init_build_module$3();
		init_react();
		init_use_merge_refs();
		init_build_module();
		init_build_module$5();
		init_context_connect(), init_use_context_system();
		init_component$4();
		init_context();
		init_style_module();
		init_use_screen_animate_presence();
		import_jsx_dev_runtime$3 = require_jsx_dev_runtime();
		_jsxFileName$3 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/navigator/navigator-screen/component.tsx";
		NavigatorScreen = contextConnect(UnconnectedNavigatorScreen, "Navigator.Screen");
		try {
			NavigatorScreen.__docgenInfo = {
				"description": "",
				"displayName": "NavigatorScreen",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/navigator/navigator-screen/component.tsx",
				"methods": [],
				"props": {
					"path": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/navigator/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The screen's path, matched against the current path stored in the navigator.\n\n`Navigator` assumes that screens are organized hierarchically according\nto their `path`, which should follow a URL-like scheme where each path\nsegment starts with and is separated by the `/` character.\n\n`Navigator` will treat \"back\" navigations as going to the parent screen —\nit is, therefore, the responsibility of the consumer of the component to\ncreate the correct screen hierarchy.\n\nFor example:\n - `/` is the root of all paths. There should always be a screen with\n   `path=\"/\"`;\n - `/parent/child` is a child of `/parent`;\n - `/parent/child/grand-child` is a child of `/parent/child`;\n - `/parent/:param` is a child of `/parent` as well;\n - if the current screen has a `path=\"/parent/child/grand-child\"`, when\n   going \"back\" `Navigator` will try to recursively navigate the path\n   hierarchy until a matching screen (or the root `/`) is found.",
						"name": "path",
						"required": true,
						"tags": {},
						"type": { "name": "string" }
					},
					"children": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/navigator/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The children elements.",
						"name": "children",
						"required": true,
						"tags": {},
						"type": { "name": "ReactNode" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/components/src/navigator/use-navigator.ts
/**
* Retrieves a `navigator` instance. This hook provides advanced functionality,
* such as imperatively navigating to a new location (with options like
* navigating back or skipping focus restoration) and accessing the current
* location and path parameters.
*/
function useNavigator() {
	const { location, params, goTo, goBack, goToParent } = (0, import_react.useContext)(NavigatorContext);
	return {
		location,
		goTo,
		goBack,
		goToParent,
		params
	};
}
function init_use_navigator() {
	return (init_use_navigator = __esmMin((() => {
		init_react();
		init_context();
	})))();
}
//#endregion
//#region ../packages/components/src/navigator/navigator-button/hook.ts
function useNavigatorButton(props) {
	const { path, onClick, as = Button, attributeName = "id", ...otherProps } = useContextSystem(props, "Navigator.Button");
	const escapedPath = escapeAttribute(path);
	const { goTo } = useNavigator();
	return {
		as,
		onClick: (0, import_react.useCallback)((e) => {
			e.preventDefault();
			goTo(escapedPath, { focusTargetSelector: cssSelectorForAttribute(attributeName, escapedPath) });
			onClick?.(e);
		}, [
			goTo,
			onClick,
			attributeName,
			escapedPath
		]),
		...otherProps,
		[attributeName]: escapedPath
	};
}
var cssSelectorForAttribute;
function init_hook() {
	return (init_hook = __esmMin((() => {
		init_react();
		init_build_module();
		init_use_context_system();
		init_button();
		init_use_navigator();
		cssSelectorForAttribute = (attrName, attrValue) => `[${attrName}="${attrValue}"]`;
	})))();
}
//#endregion
//#region ../packages/components/src/navigator/navigator-button/component.tsx
function UnconnectedNavigatorButton(props, forwardedRef) {
	const navigatorButtonProps = useNavigatorButton(props);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)(View, {
		ref: forwardedRef,
		...navigatorButtonProps
	}, void 0, false, {
		fileName: _jsxFileName$2,
		lineNumber: 14,
		columnNumber: 9
	}, this);
}
var import_jsx_dev_runtime$2, _jsxFileName$2, NavigatorButton;
function init_component$2() {
	return (init_component$2 = __esmMin((() => {
		init_context_connect();
		init_component$4();
		init_hook();
		import_jsx_dev_runtime$2 = require_jsx_dev_runtime();
		_jsxFileName$2 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/navigator/navigator-button/component.tsx";
		NavigatorButton = contextConnect(UnconnectedNavigatorButton, "Navigator.Button");
		try {
			NavigatorButton.__docgenInfo = {
				"description": "",
				"displayName": "NavigatorButton",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/navigator/navigator-button/component.tsx",
				"methods": [],
				"props": {
					"__next40pxDefaultSize": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/button/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Start opting into the larger default height that will become the\ndefault size in a future version.",
						"name": "__next40pxDefaultSize",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"accessibleWhenDisabled": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/button/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Whether to keep the button focusable when disabled.\n\nIn most cases, it is recommended to set this to `true`. Disabling a control without maintaining focusability\ncan cause accessibility issues, by hiding their presence from screen reader users,\nor by preventing focus from returning to a trigger element.\n\nLearn more about the [focusability of disabled controls](https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/#focusabilityofdisabledcontrols)\nin the WAI-ARIA Authoring Practices Guide.",
						"name": "accessibleWhenDisabled",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"children": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/button/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The button's children.",
						"name": "children",
						"required": false,
						"tags": {},
						"type": { "name": "ReactNode" }
					},
					"description": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/button/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "A visually hidden accessible description for the button.",
						"name": "description",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"icon": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/button/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "If provided, renders an Icon component inside the button.",
						"name": "icon",
						"required": false,
						"tags": {},
						"type": { "name": "IconType | null" }
					},
					"iconPosition": {
						"defaultValue": { "value": "'left'" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/button/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "If provided with `icon`, sets the position of icon relative to the `text`.",
						"name": "iconPosition",
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "\"left\" | \"right\"",
							"value": [{ "value": "\"left\"" }, { "value": "\"right\"" }]
						}
					},
					"iconSize": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/button/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "If provided with `icon`, sets the icon size.\nPlease refer to the Icon component for more details regarding\nthe default value of its `size` prop.",
						"name": "iconSize",
						"required": false,
						"tags": {},
						"type": { "name": "number" }
					},
					"isBusy": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/button/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Indicates activity while a action is being performed.",
						"name": "isBusy",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"isDestructive": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/button/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Renders a red text-based button style to indicate destructive behavior.",
						"name": "isDestructive",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"isPressed": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/button/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Renders a pressed button style.",
						"name": "isPressed",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"label": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/button/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Sets the `aria-label` of the component, if none is provided.\nSets the Tooltip content if `showTooltip` is provided.",
						"name": "label",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"shortcut": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/button/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "If provided with `showTooltip`, appends the Shortcut label to the tooltip content.\nIf an object is provided, it should contain `display` and `ariaLabel` keys.",
						"name": "shortcut",
						"required": false,
						"tags": {},
						"type": { "name": "string | { display: string; ariaLabel: string; }" }
					},
					"showTooltip": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/button/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "If provided, renders a Tooltip component for the button.",
						"name": "showTooltip",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"size": {
						"defaultValue": { "value": "'default'" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/button/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The size of the button.\n\n- `'default'`: For normal text-label buttons, unless it is a toggle button.\n- `'compact'`: For toggle buttons, icon buttons, and buttons when used in context of either.\n- `'small'`: For icon buttons associated with more advanced or auxiliary features.\n\nIf the deprecated `isSmall` prop is also defined, this prop will take precedence.",
						"name": "size",
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "\"small\" | \"default\" | \"compact\"",
							"value": [
								{ "value": "\"small\"" },
								{ "value": "\"default\"" },
								{ "value": "\"compact\"" }
							]
						}
					},
					"text": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/button/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "If provided, displays the given text inside the button. If the button contains children elements, the text is displayed before them.",
						"name": "text",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"tooltipPosition": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/button/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "If provided with `showTooltip`, sets the position of the tooltip.\nPlease refer to the Tooltip component for more details regarding the defaults.",
						"name": "tooltipPosition",
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "\"middle center\" | \"middle left\" | \"middle right\" | \"top center\" | \"top left\" | \"top right\" | \"bottom center\" | \"bottom left\" | \"bottom right\" | \"middle center left\" | \"middle center right\" | ... 35 more ...",
							"value": [
								{ "value": "\"middle\"" },
								{ "value": "\"top\"" },
								{ "value": "\"bottom\"" },
								{ "value": "\"middle center\"" },
								{ "value": "\"middle left\"" },
								{ "value": "\"middle right\"" },
								{ "value": "\"top center\"" },
								{ "value": "\"top left\"" },
								{ "value": "\"top right\"" },
								{ "value": "\"bottom center\"" },
								{ "value": "\"bottom left\"" },
								{ "value": "\"bottom right\"" },
								{ "value": "\"middle center left\"" },
								{ "value": "\"middle center right\"" },
								{ "value": "\"middle center top\"" },
								{ "value": "\"middle center bottom\"" },
								{ "value": "\"middle left left\"" },
								{ "value": "\"middle left right\"" },
								{ "value": "\"middle left top\"" },
								{ "value": "\"middle left bottom\"" },
								{ "value": "\"middle right left\"" },
								{ "value": "\"middle right right\"" },
								{ "value": "\"middle right top\"" },
								{ "value": "\"middle right bottom\"" },
								{ "value": "\"top center left\"" },
								{ "value": "\"top center right\"" },
								{ "value": "\"top center top\"" },
								{ "value": "\"top center bottom\"" },
								{ "value": "\"top left left\"" },
								{ "value": "\"top left right\"" },
								{ "value": "\"top left top\"" },
								{ "value": "\"top left bottom\"" },
								{ "value": "\"top right left\"" },
								{ "value": "\"top right right\"" },
								{ "value": "\"top right top\"" },
								{ "value": "\"top right bottom\"" },
								{ "value": "\"bottom center left\"" },
								{ "value": "\"bottom center right\"" },
								{ "value": "\"bottom center top\"" },
								{ "value": "\"bottom center bottom\"" },
								{ "value": "\"bottom left left\"" },
								{ "value": "\"bottom left right\"" },
								{ "value": "\"bottom left top\"" },
								{ "value": "\"bottom left bottom\"" },
								{ "value": "\"bottom right left\"" },
								{ "value": "\"bottom right right\"" },
								{ "value": "\"bottom right top\"" },
								{ "value": "\"bottom right bottom\"" }
							]
						}
					},
					"variant": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/button/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Specifies the button's style.\n\nThe accepted values are:\n\n1. `'primary'` (the primary button styles)\n2. `'secondary'` (the default button styles)\n3. `'tertiary'` (the text-based button styles)\n4. `'link'` (the link button styles)",
						"name": "variant",
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "\"link\" | \"primary\" | \"secondary\" | \"tertiary\"",
							"value": [
								{ "value": "\"link\"" },
								{ "value": "\"primary\"" },
								{ "value": "\"secondary\"" },
								{ "value": "\"tertiary\"" }
							]
						}
					},
					"disabled": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/button/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Whether the button is disabled. If `true`, this will force a `button` element\nto be rendered, even when an `href` is given.\n\nIn most cases, it is recommended to also set the `accessibleWhenDisabled` prop to `true`.",
						"name": "disabled",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"path": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/navigator/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The path of the screen to navigate to. The value of this prop needs to be\na valid value for an HTML attribute.",
						"name": "path",
						"required": true,
						"tags": {},
						"type": { "name": "string" }
					},
					"attributeName": {
						"defaultValue": { "value": "'id'" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/navigator/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The HTML attribute used to identify the `NavigatorButton`, which is used\nby `Navigator` to restore focus.",
						"name": "attributeName",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"as": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/context/wordpress-component.ts",
							"name": "TypeLiteral"
						}],
						"description": "The HTML element to render the component as.",
						"name": "as",
						"required": true,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "keyof IntrinsicElements",
							"value": [
								{ "value": "\"symbol\"" },
								{ "value": "\"object\"" },
								{ "value": "\"style\"" },
								{ "value": "\"span\"" },
								{ "value": "\"a\"" },
								{ "value": "\"abbr\"" },
								{ "value": "\"address\"" },
								{ "value": "\"area\"" },
								{ "value": "\"article\"" },
								{ "value": "\"aside\"" },
								{ "value": "\"audio\"" },
								{ "value": "\"b\"" },
								{ "value": "\"base\"" },
								{ "value": "\"bdi\"" },
								{ "value": "\"bdo\"" },
								{ "value": "\"big\"" },
								{ "value": "\"blockquote\"" },
								{ "value": "\"body\"" },
								{ "value": "\"br\"" },
								{ "value": "\"button\"" },
								{ "value": "\"canvas\"" },
								{ "value": "\"caption\"" },
								{ "value": "\"center\"" },
								{ "value": "\"cite\"" },
								{ "value": "\"code\"" },
								{ "value": "\"col\"" },
								{ "value": "\"colgroup\"" },
								{ "value": "\"data\"" },
								{ "value": "\"datalist\"" },
								{ "value": "\"dd\"" },
								{ "value": "\"del\"" },
								{ "value": "\"details\"" },
								{ "value": "\"dfn\"" },
								{ "value": "\"dialog\"" },
								{ "value": "\"div\"" },
								{ "value": "\"dl\"" },
								{ "value": "\"dt\"" },
								{ "value": "\"em\"" },
								{ "value": "\"embed\"" },
								{ "value": "\"fieldset\"" },
								{ "value": "\"figcaption\"" },
								{ "value": "\"figure\"" },
								{ "value": "\"footer\"" },
								{ "value": "\"form\"" },
								{ "value": "\"h1\"" },
								{ "value": "\"h2\"" },
								{ "value": "\"h3\"" },
								{ "value": "\"h4\"" },
								{ "value": "\"h5\"" },
								{ "value": "\"h6\"" },
								{ "value": "\"head\"" },
								{ "value": "\"header\"" },
								{ "value": "\"hgroup\"" },
								{ "value": "\"hr\"" },
								{ "value": "\"html\"" },
								{ "value": "\"i\"" },
								{ "value": "\"iframe\"" },
								{ "value": "\"img\"" },
								{ "value": "\"input\"" },
								{ "value": "\"ins\"" },
								{ "value": "\"kbd\"" },
								{ "value": "\"keygen\"" },
								{ "value": "\"label\"" },
								{ "value": "\"legend\"" },
								{ "value": "\"li\"" },
								{ "value": "\"link\"" },
								{ "value": "\"main\"" },
								{ "value": "\"map\"" },
								{ "value": "\"mark\"" },
								{ "value": "\"menu\"" },
								{ "value": "\"menuitem\"" },
								{ "value": "\"meta\"" },
								{ "value": "\"meter\"" },
								{ "value": "\"nav\"" },
								{ "value": "\"noindex\"" },
								{ "value": "\"noscript\"" },
								{ "value": "\"ol\"" },
								{ "value": "\"optgroup\"" },
								{ "value": "\"option\"" },
								{ "value": "\"output\"" },
								{ "value": "\"p\"" },
								{ "value": "\"param\"" },
								{ "value": "\"picture\"" },
								{ "value": "\"pre\"" },
								{ "value": "\"progress\"" },
								{ "value": "\"q\"" },
								{ "value": "\"rp\"" },
								{ "value": "\"rt\"" },
								{ "value": "\"ruby\"" },
								{ "value": "\"s\"" },
								{ "value": "\"samp\"" },
								{ "value": "\"search\"" },
								{ "value": "\"slot\"" },
								{ "value": "\"script\"" },
								{ "value": "\"section\"" },
								{ "value": "\"select\"" },
								{ "value": "\"small\"" },
								{ "value": "\"source\"" },
								{ "value": "\"strong\"" },
								{ "value": "\"sub\"" },
								{ "value": "\"summary\"" },
								{ "value": "\"sup\"" },
								{ "value": "\"table\"" },
								{ "value": "\"template\"" },
								{ "value": "\"tbody\"" },
								{ "value": "\"td\"" },
								{ "value": "\"textarea\"" },
								{ "value": "\"tfoot\"" },
								{ "value": "\"th\"" },
								{ "value": "\"thead\"" },
								{ "value": "\"time\"" },
								{ "value": "\"title\"" },
								{ "value": "\"tr\"" },
								{ "value": "\"track\"" },
								{ "value": "\"u\"" },
								{ "value": "\"ul\"" },
								{ "value": "\"var\"" },
								{ "value": "\"video\"" },
								{ "value": "\"wbr\"" },
								{ "value": "\"webview\"" },
								{ "value": "\"svg\"" },
								{ "value": "\"animate\"" },
								{ "value": "\"animateMotion\"" },
								{ "value": "\"animateTransform\"" },
								{ "value": "\"circle\"" },
								{ "value": "\"clipPath\"" },
								{ "value": "\"defs\"" },
								{ "value": "\"desc\"" },
								{ "value": "\"ellipse\"" },
								{ "value": "\"feBlend\"" },
								{ "value": "\"feColorMatrix\"" },
								{ "value": "\"feComponentTransfer\"" },
								{ "value": "\"feComposite\"" },
								{ "value": "\"feConvolveMatrix\"" },
								{ "value": "\"feDiffuseLighting\"" },
								{ "value": "\"feDisplacementMap\"" },
								{ "value": "\"feDistantLight\"" },
								{ "value": "\"feDropShadow\"" },
								{ "value": "\"feFlood\"" },
								{ "value": "\"feFuncA\"" },
								{ "value": "\"feFuncB\"" },
								{ "value": "\"feFuncG\"" },
								{ "value": "\"feFuncR\"" },
								{ "value": "\"feGaussianBlur\"" },
								{ "value": "\"feImage\"" },
								{ "value": "\"feMerge\"" },
								{ "value": "\"feMergeNode\"" },
								{ "value": "\"feMorphology\"" },
								{ "value": "\"feOffset\"" },
								{ "value": "\"fePointLight\"" },
								{ "value": "\"feSpecularLighting\"" },
								{ "value": "\"feSpotLight\"" },
								{ "value": "\"feTile\"" },
								{ "value": "\"feTurbulence\"" },
								{ "value": "\"filter\"" },
								{ "value": "\"foreignObject\"" },
								{ "value": "\"g\"" },
								{ "value": "\"image\"" },
								{ "value": "\"line\"" },
								{ "value": "\"linearGradient\"" },
								{ "value": "\"marker\"" },
								{ "value": "\"mask\"" },
								{ "value": "\"metadata\"" },
								{ "value": "\"mpath\"" },
								{ "value": "\"path\"" },
								{ "value": "\"pattern\"" },
								{ "value": "\"polygon\"" },
								{ "value": "\"polyline\"" },
								{ "value": "\"radialGradient\"" },
								{ "value": "\"rect\"" },
								{ "value": "\"set\"" },
								{ "value": "\"stop\"" },
								{ "value": "\"switch\"" },
								{ "value": "\"text\"" },
								{ "value": "\"textPath\"" },
								{ "value": "\"tspan\"" },
								{ "value": "\"use\"" },
								{ "value": "\"view\"" }
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
//#region ../packages/components/src/navigator/navigator-back-button/hook.ts
function useNavigatorBackButton(props) {
	const { onClick, as = Button, ...otherProps } = useContextSystem(props, "Navigator.BackButton");
	const { goBack } = useNavigator();
	return {
		as,
		onClick: (0, import_react.useCallback)((e) => {
			e.preventDefault();
			goBack();
			onClick?.(e);
		}, [goBack, onClick]),
		...otherProps
	};
}
function init_hook$1() {
	return (init_hook$1 = __esmMin((() => {
		init_react();
		init_use_context_system();
		init_button();
		init_use_navigator();
	})))();
}
//#endregion
//#region ../packages/components/src/navigator/navigator-back-button/component.tsx
function UnconnectedNavigatorBackButton(props, forwardedRef) {
	const navigatorBackButtonProps = useNavigatorBackButton(props);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(View, {
		ref: forwardedRef,
		...navigatorBackButtonProps
	}, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 14,
		columnNumber: 9
	}, this);
}
var import_jsx_dev_runtime$1, _jsxFileName$1, NavigatorBackButton;
function init_component$3() {
	return (init_component$3 = __esmMin((() => {
		init_context_connect();
		init_component$4();
		init_hook$1();
		import_jsx_dev_runtime$1 = require_jsx_dev_runtime();
		_jsxFileName$1 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/navigator/navigator-back-button/component.tsx";
		NavigatorBackButton = contextConnect(UnconnectedNavigatorBackButton, "Navigator.BackButton");
		try {
			NavigatorBackButton.__docgenInfo = {
				"description": "",
				"displayName": "NavigatorBackButton",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/navigator/navigator-back-button/component.tsx",
				"methods": [],
				"props": {
					"__next40pxDefaultSize": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/button/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Start opting into the larger default height that will become the\ndefault size in a future version.",
						"name": "__next40pxDefaultSize",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"accessibleWhenDisabled": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/button/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Whether to keep the button focusable when disabled.\n\nIn most cases, it is recommended to set this to `true`. Disabling a control without maintaining focusability\ncan cause accessibility issues, by hiding their presence from screen reader users,\nor by preventing focus from returning to a trigger element.\n\nLearn more about the [focusability of disabled controls](https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/#focusabilityofdisabledcontrols)\nin the WAI-ARIA Authoring Practices Guide.",
						"name": "accessibleWhenDisabled",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"children": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/button/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The button's children.",
						"name": "children",
						"required": false,
						"tags": {},
						"type": { "name": "ReactNode" }
					},
					"description": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/button/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "A visually hidden accessible description for the button.",
						"name": "description",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"icon": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/button/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "If provided, renders an Icon component inside the button.",
						"name": "icon",
						"required": false,
						"tags": {},
						"type": { "name": "IconType | null" }
					},
					"iconPosition": {
						"defaultValue": { "value": "'left'" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/button/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "If provided with `icon`, sets the position of icon relative to the `text`.",
						"name": "iconPosition",
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "\"left\" | \"right\"",
							"value": [{ "value": "\"left\"" }, { "value": "\"right\"" }]
						}
					},
					"iconSize": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/button/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "If provided with `icon`, sets the icon size.\nPlease refer to the Icon component for more details regarding\nthe default value of its `size` prop.",
						"name": "iconSize",
						"required": false,
						"tags": {},
						"type": { "name": "number" }
					},
					"isBusy": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/button/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Indicates activity while a action is being performed.",
						"name": "isBusy",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"isDestructive": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/button/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Renders a red text-based button style to indicate destructive behavior.",
						"name": "isDestructive",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"isPressed": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/button/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Renders a pressed button style.",
						"name": "isPressed",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"label": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/button/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Sets the `aria-label` of the component, if none is provided.\nSets the Tooltip content if `showTooltip` is provided.",
						"name": "label",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"shortcut": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/button/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "If provided with `showTooltip`, appends the Shortcut label to the tooltip content.\nIf an object is provided, it should contain `display` and `ariaLabel` keys.",
						"name": "shortcut",
						"required": false,
						"tags": {},
						"type": { "name": "string | { display: string; ariaLabel: string; }" }
					},
					"showTooltip": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/button/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "If provided, renders a Tooltip component for the button.",
						"name": "showTooltip",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"size": {
						"defaultValue": { "value": "'default'" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/button/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The size of the button.\n\n- `'default'`: For normal text-label buttons, unless it is a toggle button.\n- `'compact'`: For toggle buttons, icon buttons, and buttons when used in context of either.\n- `'small'`: For icon buttons associated with more advanced or auxiliary features.\n\nIf the deprecated `isSmall` prop is also defined, this prop will take precedence.",
						"name": "size",
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "\"small\" | \"default\" | \"compact\"",
							"value": [
								{ "value": "\"small\"" },
								{ "value": "\"default\"" },
								{ "value": "\"compact\"" }
							]
						}
					},
					"text": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/button/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "If provided, displays the given text inside the button. If the button contains children elements, the text is displayed before them.",
						"name": "text",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"tooltipPosition": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/button/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "If provided with `showTooltip`, sets the position of the tooltip.\nPlease refer to the Tooltip component for more details regarding the defaults.",
						"name": "tooltipPosition",
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "\"middle center\" | \"middle left\" | \"middle right\" | \"top center\" | \"top left\" | \"top right\" | \"bottom center\" | \"bottom left\" | \"bottom right\" | \"middle center left\" | \"middle center right\" | ... 35 more ...",
							"value": [
								{ "value": "\"middle\"" },
								{ "value": "\"top\"" },
								{ "value": "\"bottom\"" },
								{ "value": "\"middle center\"" },
								{ "value": "\"middle left\"" },
								{ "value": "\"middle right\"" },
								{ "value": "\"top center\"" },
								{ "value": "\"top left\"" },
								{ "value": "\"top right\"" },
								{ "value": "\"bottom center\"" },
								{ "value": "\"bottom left\"" },
								{ "value": "\"bottom right\"" },
								{ "value": "\"middle center left\"" },
								{ "value": "\"middle center right\"" },
								{ "value": "\"middle center top\"" },
								{ "value": "\"middle center bottom\"" },
								{ "value": "\"middle left left\"" },
								{ "value": "\"middle left right\"" },
								{ "value": "\"middle left top\"" },
								{ "value": "\"middle left bottom\"" },
								{ "value": "\"middle right left\"" },
								{ "value": "\"middle right right\"" },
								{ "value": "\"middle right top\"" },
								{ "value": "\"middle right bottom\"" },
								{ "value": "\"top center left\"" },
								{ "value": "\"top center right\"" },
								{ "value": "\"top center top\"" },
								{ "value": "\"top center bottom\"" },
								{ "value": "\"top left left\"" },
								{ "value": "\"top left right\"" },
								{ "value": "\"top left top\"" },
								{ "value": "\"top left bottom\"" },
								{ "value": "\"top right left\"" },
								{ "value": "\"top right right\"" },
								{ "value": "\"top right top\"" },
								{ "value": "\"top right bottom\"" },
								{ "value": "\"bottom center left\"" },
								{ "value": "\"bottom center right\"" },
								{ "value": "\"bottom center top\"" },
								{ "value": "\"bottom center bottom\"" },
								{ "value": "\"bottom left left\"" },
								{ "value": "\"bottom left right\"" },
								{ "value": "\"bottom left top\"" },
								{ "value": "\"bottom left bottom\"" },
								{ "value": "\"bottom right left\"" },
								{ "value": "\"bottom right right\"" },
								{ "value": "\"bottom right top\"" },
								{ "value": "\"bottom right bottom\"" }
							]
						}
					},
					"variant": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/button/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Specifies the button's style.\n\nThe accepted values are:\n\n1. `'primary'` (the primary button styles)\n2. `'secondary'` (the default button styles)\n3. `'tertiary'` (the text-based button styles)\n4. `'link'` (the link button styles)",
						"name": "variant",
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "\"link\" | \"primary\" | \"secondary\" | \"tertiary\"",
							"value": [
								{ "value": "\"link\"" },
								{ "value": "\"primary\"" },
								{ "value": "\"secondary\"" },
								{ "value": "\"tertiary\"" }
							]
						}
					},
					"disabled": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/button/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Whether the button is disabled. If `true`, this will force a `button` element\nto be rendered, even when an `href` is given.\n\nIn most cases, it is recommended to also set the `accessibleWhenDisabled` prop to `true`.",
						"name": "disabled",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"as": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/context/wordpress-component.ts",
							"name": "TypeLiteral"
						}],
						"description": "The HTML element to render the component as.",
						"name": "as",
						"required": true,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "keyof IntrinsicElements",
							"value": [
								{ "value": "\"symbol\"" },
								{ "value": "\"object\"" },
								{ "value": "\"style\"" },
								{ "value": "\"span\"" },
								{ "value": "\"a\"" },
								{ "value": "\"abbr\"" },
								{ "value": "\"address\"" },
								{ "value": "\"area\"" },
								{ "value": "\"article\"" },
								{ "value": "\"aside\"" },
								{ "value": "\"audio\"" },
								{ "value": "\"b\"" },
								{ "value": "\"base\"" },
								{ "value": "\"bdi\"" },
								{ "value": "\"bdo\"" },
								{ "value": "\"big\"" },
								{ "value": "\"blockquote\"" },
								{ "value": "\"body\"" },
								{ "value": "\"br\"" },
								{ "value": "\"button\"" },
								{ "value": "\"canvas\"" },
								{ "value": "\"caption\"" },
								{ "value": "\"center\"" },
								{ "value": "\"cite\"" },
								{ "value": "\"code\"" },
								{ "value": "\"col\"" },
								{ "value": "\"colgroup\"" },
								{ "value": "\"data\"" },
								{ "value": "\"datalist\"" },
								{ "value": "\"dd\"" },
								{ "value": "\"del\"" },
								{ "value": "\"details\"" },
								{ "value": "\"dfn\"" },
								{ "value": "\"dialog\"" },
								{ "value": "\"div\"" },
								{ "value": "\"dl\"" },
								{ "value": "\"dt\"" },
								{ "value": "\"em\"" },
								{ "value": "\"embed\"" },
								{ "value": "\"fieldset\"" },
								{ "value": "\"figcaption\"" },
								{ "value": "\"figure\"" },
								{ "value": "\"footer\"" },
								{ "value": "\"form\"" },
								{ "value": "\"h1\"" },
								{ "value": "\"h2\"" },
								{ "value": "\"h3\"" },
								{ "value": "\"h4\"" },
								{ "value": "\"h5\"" },
								{ "value": "\"h6\"" },
								{ "value": "\"head\"" },
								{ "value": "\"header\"" },
								{ "value": "\"hgroup\"" },
								{ "value": "\"hr\"" },
								{ "value": "\"html\"" },
								{ "value": "\"i\"" },
								{ "value": "\"iframe\"" },
								{ "value": "\"img\"" },
								{ "value": "\"input\"" },
								{ "value": "\"ins\"" },
								{ "value": "\"kbd\"" },
								{ "value": "\"keygen\"" },
								{ "value": "\"label\"" },
								{ "value": "\"legend\"" },
								{ "value": "\"li\"" },
								{ "value": "\"link\"" },
								{ "value": "\"main\"" },
								{ "value": "\"map\"" },
								{ "value": "\"mark\"" },
								{ "value": "\"menu\"" },
								{ "value": "\"menuitem\"" },
								{ "value": "\"meta\"" },
								{ "value": "\"meter\"" },
								{ "value": "\"nav\"" },
								{ "value": "\"noindex\"" },
								{ "value": "\"noscript\"" },
								{ "value": "\"ol\"" },
								{ "value": "\"optgroup\"" },
								{ "value": "\"option\"" },
								{ "value": "\"output\"" },
								{ "value": "\"p\"" },
								{ "value": "\"param\"" },
								{ "value": "\"picture\"" },
								{ "value": "\"pre\"" },
								{ "value": "\"progress\"" },
								{ "value": "\"q\"" },
								{ "value": "\"rp\"" },
								{ "value": "\"rt\"" },
								{ "value": "\"ruby\"" },
								{ "value": "\"s\"" },
								{ "value": "\"samp\"" },
								{ "value": "\"search\"" },
								{ "value": "\"slot\"" },
								{ "value": "\"script\"" },
								{ "value": "\"section\"" },
								{ "value": "\"select\"" },
								{ "value": "\"small\"" },
								{ "value": "\"source\"" },
								{ "value": "\"strong\"" },
								{ "value": "\"sub\"" },
								{ "value": "\"summary\"" },
								{ "value": "\"sup\"" },
								{ "value": "\"table\"" },
								{ "value": "\"template\"" },
								{ "value": "\"tbody\"" },
								{ "value": "\"td\"" },
								{ "value": "\"textarea\"" },
								{ "value": "\"tfoot\"" },
								{ "value": "\"th\"" },
								{ "value": "\"thead\"" },
								{ "value": "\"time\"" },
								{ "value": "\"title\"" },
								{ "value": "\"tr\"" },
								{ "value": "\"track\"" },
								{ "value": "\"u\"" },
								{ "value": "\"ul\"" },
								{ "value": "\"var\"" },
								{ "value": "\"video\"" },
								{ "value": "\"wbr\"" },
								{ "value": "\"webview\"" },
								{ "value": "\"svg\"" },
								{ "value": "\"animate\"" },
								{ "value": "\"animateMotion\"" },
								{ "value": "\"animateTransform\"" },
								{ "value": "\"circle\"" },
								{ "value": "\"clipPath\"" },
								{ "value": "\"defs\"" },
								{ "value": "\"desc\"" },
								{ "value": "\"ellipse\"" },
								{ "value": "\"feBlend\"" },
								{ "value": "\"feColorMatrix\"" },
								{ "value": "\"feComponentTransfer\"" },
								{ "value": "\"feComposite\"" },
								{ "value": "\"feConvolveMatrix\"" },
								{ "value": "\"feDiffuseLighting\"" },
								{ "value": "\"feDisplacementMap\"" },
								{ "value": "\"feDistantLight\"" },
								{ "value": "\"feDropShadow\"" },
								{ "value": "\"feFlood\"" },
								{ "value": "\"feFuncA\"" },
								{ "value": "\"feFuncB\"" },
								{ "value": "\"feFuncG\"" },
								{ "value": "\"feFuncR\"" },
								{ "value": "\"feGaussianBlur\"" },
								{ "value": "\"feImage\"" },
								{ "value": "\"feMerge\"" },
								{ "value": "\"feMergeNode\"" },
								{ "value": "\"feMorphology\"" },
								{ "value": "\"feOffset\"" },
								{ "value": "\"fePointLight\"" },
								{ "value": "\"feSpecularLighting\"" },
								{ "value": "\"feSpotLight\"" },
								{ "value": "\"feTile\"" },
								{ "value": "\"feTurbulence\"" },
								{ "value": "\"filter\"" },
								{ "value": "\"foreignObject\"" },
								{ "value": "\"g\"" },
								{ "value": "\"image\"" },
								{ "value": "\"line\"" },
								{ "value": "\"linearGradient\"" },
								{ "value": "\"marker\"" },
								{ "value": "\"mask\"" },
								{ "value": "\"metadata\"" },
								{ "value": "\"mpath\"" },
								{ "value": "\"path\"" },
								{ "value": "\"pattern\"" },
								{ "value": "\"polygon\"" },
								{ "value": "\"polyline\"" },
								{ "value": "\"radialGradient\"" },
								{ "value": "\"rect\"" },
								{ "value": "\"set\"" },
								{ "value": "\"stop\"" },
								{ "value": "\"switch\"" },
								{ "value": "\"text\"" },
								{ "value": "\"textPath\"" },
								{ "value": "\"tspan\"" },
								{ "value": "\"use\"" },
								{ "value": "\"view\"" }
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
//#region ../packages/components/src/navigator/index.tsx
var Navigator;
function init_navigator() {
	return (init_navigator = __esmMin((() => {
		init_component();
		init_component$1();
		init_component$2();
		init_component$3();
		init_use_navigator();
		Navigator = Object.assign(Navigator$1, {
			/**
			* The `Navigator.Screen` component represents a single view/screen/panel and
			* should be used in combination with the `Navigator`, the `Navigator.Button`
			* and the `Navigator.BackButton` components.
			*
			* @example
			* ```jsx
			* import { Navigator } from '@wordpress/components';
			*
			* const MyNavigation = () => (
			*   <Navigator initialPath="/">
			*     <Navigator.Screen path="/">
			*       <p>This is the home screen.</p>
			*        <Navigator.Button path="/child">
			*          Navigate to child screen.
			*       </Navigator.Button>
			*     </Navigator.Screen>
			*
			*     <Navigator.Screen path="/child">
			*       <p>This is the child screen.</p>
			*       <Navigator.BackButton>
			*         Go back
			*       </Navigator.BackButton>
			*     </Navigator.Screen>
			*   </Navigator>
			* );
			* ```
			*/
			Screen: Object.assign(NavigatorScreen, { displayName: "Navigator.Screen" }),
			/**
			* The `Navigator.Button` component can be used to navigate to a screen and
			* should be used in combination with the `Navigator`, the `Navigator.Screen`
			* and the `Navigator.BackButton` components.
			*
			* @example
			* ```jsx
			* import { Navigator } from '@wordpress/components';
			*
			* const MyNavigation = () => (
			*   <Navigator initialPath="/">
			*     <Navigator.Screen path="/">
			*       <p>This is the home screen.</p>
			*        <Navigator.Button path="/child">
			*          Navigate to child screen.
			*       </Navigator.Button>
			*     </Navigator.Screen>
			*
			*     <Navigator.Screen path="/child">
			*       <p>This is the child screen.</p>
			*       <Navigator.BackButton>
			*         Go back
			*       </Navigator.BackButton>
			*     </Navigator.Screen>
			*   </Navigator>
			* );
			* ```
			*/
			Button: Object.assign(NavigatorButton, { displayName: "Navigator.Button" }),
			/**
			* The `Navigator.BackButton` component can be used to navigate to a screen and
			* should be used in combination with the `Navigator`, the `Navigator.Screen`
			* and the `Navigator.Button` components.
			*
			* @example
			* ```jsx
			* import { Navigator } from '@wordpress/components';
			*
			* const MyNavigation = () => (
			*   <Navigator initialPath="/">
			*     <Navigator.Screen path="/">
			*       <p>This is the home screen.</p>
			*        <Navigator.Button path="/child">
			*          Navigate to child screen.
			*       </Navigator.Button>
			*     </Navigator.Screen>
			*
			*     <Navigator.Screen path="/child">
			*       <p>This is the child screen.</p>
			*       <Navigator.BackButton>
			*         Go back
			*       </Navigator.BackButton>
			*     </Navigator.Screen>
			*   </Navigator>
			* );
			* ```
			*/
			BackButton: Object.assign(NavigatorBackButton, { displayName: "Navigator.BackButton" })
		});
		try {
			Navigator.__docgenInfo = {
				"description": "The `Navigator` component allows rendering nested views/panels/menus\n(via the `Navigator.Screen` component) and navigate between them\n(via the `Navigator.Button` and `Navigator.BackButton` components).\n\n```jsx\nimport { Navigator } from '@wordpress/components';\n\nconst MyNavigation = () => (\n  <Navigator initialPath=\"/\">\n    <Navigator.Screen path=\"/\">\n      <p>This is the home screen.</p>\n       <Navigator.Button path=\"/child\">\n         Navigate to child screen.\n      </Navigator.Button>\n    </Navigator.Screen>\n\n    <Navigator.Screen path=\"/child\">\n      <p>This is the child screen.</p>\n      <Navigator.BackButton>\n        Go back\n      </Navigator.BackButton>\n    </Navigator.Screen>\n  </Navigator>\n);\n```",
				"displayName": "Navigator",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/navigator/index.tsx",
				"methods": [],
				"props": {
					"initialPath": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/navigator/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The initial active path.",
						"name": "initialPath",
						"required": true,
						"tags": {},
						"type": { "name": "string" }
					},
					"children": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/navigator/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The children elements.",
						"name": "children",
						"required": true,
						"tags": {},
						"type": { "name": "ReactNode" }
					},
					"as": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/context/wordpress-component.ts",
							"name": "TypeLiteral"
						}],
						"description": "The HTML element to render the component as.",
						"name": "as",
						"required": true,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "keyof IntrinsicElements",
							"value": [
								{ "value": "\"symbol\"" },
								{ "value": "\"object\"" },
								{ "value": "\"style\"" },
								{ "value": "\"span\"" },
								{ "value": "\"a\"" },
								{ "value": "\"abbr\"" },
								{ "value": "\"address\"" },
								{ "value": "\"area\"" },
								{ "value": "\"article\"" },
								{ "value": "\"aside\"" },
								{ "value": "\"audio\"" },
								{ "value": "\"b\"" },
								{ "value": "\"base\"" },
								{ "value": "\"bdi\"" },
								{ "value": "\"bdo\"" },
								{ "value": "\"big\"" },
								{ "value": "\"blockquote\"" },
								{ "value": "\"body\"" },
								{ "value": "\"br\"" },
								{ "value": "\"button\"" },
								{ "value": "\"canvas\"" },
								{ "value": "\"caption\"" },
								{ "value": "\"center\"" },
								{ "value": "\"cite\"" },
								{ "value": "\"code\"" },
								{ "value": "\"col\"" },
								{ "value": "\"colgroup\"" },
								{ "value": "\"data\"" },
								{ "value": "\"datalist\"" },
								{ "value": "\"dd\"" },
								{ "value": "\"del\"" },
								{ "value": "\"details\"" },
								{ "value": "\"dfn\"" },
								{ "value": "\"dialog\"" },
								{ "value": "\"div\"" },
								{ "value": "\"dl\"" },
								{ "value": "\"dt\"" },
								{ "value": "\"em\"" },
								{ "value": "\"embed\"" },
								{ "value": "\"fieldset\"" },
								{ "value": "\"figcaption\"" },
								{ "value": "\"figure\"" },
								{ "value": "\"footer\"" },
								{ "value": "\"form\"" },
								{ "value": "\"h1\"" },
								{ "value": "\"h2\"" },
								{ "value": "\"h3\"" },
								{ "value": "\"h4\"" },
								{ "value": "\"h5\"" },
								{ "value": "\"h6\"" },
								{ "value": "\"head\"" },
								{ "value": "\"header\"" },
								{ "value": "\"hgroup\"" },
								{ "value": "\"hr\"" },
								{ "value": "\"html\"" },
								{ "value": "\"i\"" },
								{ "value": "\"iframe\"" },
								{ "value": "\"img\"" },
								{ "value": "\"input\"" },
								{ "value": "\"ins\"" },
								{ "value": "\"kbd\"" },
								{ "value": "\"keygen\"" },
								{ "value": "\"label\"" },
								{ "value": "\"legend\"" },
								{ "value": "\"li\"" },
								{ "value": "\"link\"" },
								{ "value": "\"main\"" },
								{ "value": "\"map\"" },
								{ "value": "\"mark\"" },
								{ "value": "\"menu\"" },
								{ "value": "\"menuitem\"" },
								{ "value": "\"meta\"" },
								{ "value": "\"meter\"" },
								{ "value": "\"nav\"" },
								{ "value": "\"noindex\"" },
								{ "value": "\"noscript\"" },
								{ "value": "\"ol\"" },
								{ "value": "\"optgroup\"" },
								{ "value": "\"option\"" },
								{ "value": "\"output\"" },
								{ "value": "\"p\"" },
								{ "value": "\"param\"" },
								{ "value": "\"picture\"" },
								{ "value": "\"pre\"" },
								{ "value": "\"progress\"" },
								{ "value": "\"q\"" },
								{ "value": "\"rp\"" },
								{ "value": "\"rt\"" },
								{ "value": "\"ruby\"" },
								{ "value": "\"s\"" },
								{ "value": "\"samp\"" },
								{ "value": "\"search\"" },
								{ "value": "\"slot\"" },
								{ "value": "\"script\"" },
								{ "value": "\"section\"" },
								{ "value": "\"select\"" },
								{ "value": "\"small\"" },
								{ "value": "\"source\"" },
								{ "value": "\"strong\"" },
								{ "value": "\"sub\"" },
								{ "value": "\"summary\"" },
								{ "value": "\"sup\"" },
								{ "value": "\"table\"" },
								{ "value": "\"template\"" },
								{ "value": "\"tbody\"" },
								{ "value": "\"td\"" },
								{ "value": "\"textarea\"" },
								{ "value": "\"tfoot\"" },
								{ "value": "\"th\"" },
								{ "value": "\"thead\"" },
								{ "value": "\"time\"" },
								{ "value": "\"title\"" },
								{ "value": "\"tr\"" },
								{ "value": "\"track\"" },
								{ "value": "\"u\"" },
								{ "value": "\"ul\"" },
								{ "value": "\"var\"" },
								{ "value": "\"video\"" },
								{ "value": "\"wbr\"" },
								{ "value": "\"webview\"" },
								{ "value": "\"svg\"" },
								{ "value": "\"animate\"" },
								{ "value": "\"animateMotion\"" },
								{ "value": "\"animateTransform\"" },
								{ "value": "\"circle\"" },
								{ "value": "\"clipPath\"" },
								{ "value": "\"defs\"" },
								{ "value": "\"desc\"" },
								{ "value": "\"ellipse\"" },
								{ "value": "\"feBlend\"" },
								{ "value": "\"feColorMatrix\"" },
								{ "value": "\"feComponentTransfer\"" },
								{ "value": "\"feComposite\"" },
								{ "value": "\"feConvolveMatrix\"" },
								{ "value": "\"feDiffuseLighting\"" },
								{ "value": "\"feDisplacementMap\"" },
								{ "value": "\"feDistantLight\"" },
								{ "value": "\"feDropShadow\"" },
								{ "value": "\"feFlood\"" },
								{ "value": "\"feFuncA\"" },
								{ "value": "\"feFuncB\"" },
								{ "value": "\"feFuncG\"" },
								{ "value": "\"feFuncR\"" },
								{ "value": "\"feGaussianBlur\"" },
								{ "value": "\"feImage\"" },
								{ "value": "\"feMerge\"" },
								{ "value": "\"feMergeNode\"" },
								{ "value": "\"feMorphology\"" },
								{ "value": "\"feOffset\"" },
								{ "value": "\"fePointLight\"" },
								{ "value": "\"feSpecularLighting\"" },
								{ "value": "\"feSpotLight\"" },
								{ "value": "\"feTile\"" },
								{ "value": "\"feTurbulence\"" },
								{ "value": "\"filter\"" },
								{ "value": "\"foreignObject\"" },
								{ "value": "\"g\"" },
								{ "value": "\"image\"" },
								{ "value": "\"line\"" },
								{ "value": "\"linearGradient\"" },
								{ "value": "\"marker\"" },
								{ "value": "\"mask\"" },
								{ "value": "\"metadata\"" },
								{ "value": "\"mpath\"" },
								{ "value": "\"path\"" },
								{ "value": "\"pattern\"" },
								{ "value": "\"polygon\"" },
								{ "value": "\"polyline\"" },
								{ "value": "\"radialGradient\"" },
								{ "value": "\"rect\"" },
								{ "value": "\"set\"" },
								{ "value": "\"stop\"" },
								{ "value": "\"switch\"" },
								{ "value": "\"text\"" },
								{ "value": "\"textPath\"" },
								{ "value": "\"tspan\"" },
								{ "value": "\"use\"" },
								{ "value": "\"view\"" }
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
//#region ../packages/components/src/navigator/stories/index.story.tsx
function DynamicScreen() {
	const { params } = useNavigator();
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { children: "This is the dynamic screen" }, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 113,
			columnNumber: 4
		}, this),
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
			"This screen can parse params dynamically. The current id is:",
			" ",
			params.id
		] }, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 114,
			columnNumber: 4
		}, this),
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Navigator.BackButton, {
			variant: "secondary",
			children: "Go back"
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 118,
			columnNumber: 4
		}, this)
	] }, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 112,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime, _jsxFileName, meta, Default, WithNestedInitialPath, NavigatorButtonWithSkipFocus, SkipFocus;
function init_index_story() {
	return (init_index_story = __esmMin((() => {
		init_button();
		init_component$6();
		init_component$5();
		init_navigator();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/navigator/stories/index.story.tsx";
		meta = {
			tags: ["manifest"],
			component: Navigator,
			subcomponents: {
				Screen: Navigator.Screen,
				Button: Navigator.Button,
				BackButton: Navigator.BackButton
			},
			title: "Components/@wordpress-components/Navigation/Navigator",
			id: "components-navigator",
			argTypes: {
				as: { control: false },
				children: { control: false },
				initialPath: { control: false }
			},
			parameters: {
				controls: { expanded: true },
				docs: { canvas: { sourceState: "shown" } },
				componentStatus: {
					status: "recommended",
					whereUsed: "global"
				}
			},
			decorators: [(Story) => {
				return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("style", { children: `
                      /* The data-wp-component attribute is a private implementation
                         * detail of the Navigator component. Do not use outside of
                         * its source code.
                         */
                        [data-wp-component="Navigator"] {
                            height: 250px;
                        }
                        [data-wp-component="Navigator.Screen"] {
                            padding: 8px;
                        }
                    ` }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 34,
					columnNumber: 6
				}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Story, {}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 46,
					columnNumber: 6
				}, void 0)] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 33,
					columnNumber: 5
				}, void 0);
			}]
		};
		Default = { args: {
			initialPath: "/",
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Navigator.Screen, {
					path: "/",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { children: "This is the home screen." }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 60,
						columnNumber: 6
					}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(VStack, {
						alignment: "left",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Navigator.Button, {
								variant: "primary",
								path: "/child",
								children: "Go to child screen."
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 63,
								columnNumber: 7
							}, void 0),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Navigator.Button, {
								variant: "primary",
								path: "/product/1",
								children: "Go to dynamic path screen with id 1."
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 67,
								columnNumber: 7
							}, void 0),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Navigator.Button, {
								variant: "primary",
								path: "/product/2",
								children: "Go to dynamic path screen with id 2."
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 71,
								columnNumber: 7
							}, void 0)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 62,
						columnNumber: 6
					}, void 0)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 59,
					columnNumber: 5
				}, void 0),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Navigator.Screen, {
					path: "/child",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { children: "This is the child screen." }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 78,
						columnNumber: 6
					}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HStack, {
						spacing: 2,
						alignment: "left",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Navigator.BackButton, {
							variant: "secondary",
							children: "Go back"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 80,
							columnNumber: 7
						}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Navigator.Button, {
							variant: "primary",
							path: "/child/grandchild",
							children: "Go to grand child screen."
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 84,
							columnNumber: 7
						}, void 0)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 79,
						columnNumber: 6
					}, void 0)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 77,
					columnNumber: 5
				}, void 0),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Navigator.Screen, {
					path: "/child/grandchild",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { children: "This is the grand child screen." }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 94,
						columnNumber: 6
					}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Navigator.BackButton, {
						variant: "secondary",
						children: "Go back"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 95,
						columnNumber: 6
					}, void 0)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 93,
					columnNumber: 5
				}, void 0),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Navigator.Screen, {
					path: "/product/:id",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DynamicScreen, {}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 101,
						columnNumber: 6
					}, void 0)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 100,
					columnNumber: 5
				}, void 0)
			] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 58,
				columnNumber: 4
			}, void 0)
		} };
		WithNestedInitialPath = {
			...Default,
			args: {
				...Default.args,
				initialPath: "/child/grandchild"
			}
		};
		NavigatorButtonWithSkipFocus = ({ path, onClick, ...props }) => {
			const { goTo } = useNavigator();
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
				__next40pxDefaultSize: true,
				...props,
				style: {
					marginInline: "8px",
					...props.style
				},
				onClick: (e) => {
					goTo(path, { skipFocus: true });
					onClick?.(e);
				}
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 141,
				columnNumber: 3
			}, void 0);
		};
		SkipFocus = { args: {
			initialPath: "/",
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				style: {
					height: 150,
					outline: "1px solid black",
					outlineOffset: "-1px",
					marginBlockEnd: "1rem",
					display: "contents"
				},
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Navigator.Screen, {
					path: "/",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { children: "Home screen" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 171,
						columnNumber: 7
					}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Navigator.Button, {
						variant: "primary",
						path: "/child",
						children: "Go to child screen."
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 172,
						columnNumber: 7
					}, void 0)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 170,
					columnNumber: 6
				}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Navigator.Screen, {
					path: "/child",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { children: "Child screen" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 178,
						columnNumber: 7
					}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Navigator.BackButton, {
						variant: "secondary",
						children: "Go back to home screen"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 179,
						columnNumber: 7
					}, void 0)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 177,
					columnNumber: 6
				}, void 0)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 161,
				columnNumber: 5
			}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavigatorButtonWithSkipFocus, {
				path: "/child",
				children: "Go to child screen, but keep focus on this button"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 185,
				columnNumber: 5
			}, void 0)] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 160,
				columnNumber: 4
			}, void 0)
		} };
		Default.parameters = {
			...Default.parameters,
			docs: {
				...Default.parameters?.docs,
				source: {
					originalSource: "{\n  args: {\n    initialPath: '/',\n    children: <>\n                <Navigator.Screen path=\"/\">\n                    <h2>This is the home screen.</h2>\n\n                    <VStack alignment=\"left\">\n                        <Navigator.Button variant=\"primary\" path=\"/child\">\n                            Go to child screen.\n                        </Navigator.Button>\n\n                        <Navigator.Button variant=\"primary\" path=\"/product/1\">\n                            Go to dynamic path screen with id 1.\n                        </Navigator.Button>\n\n                        <Navigator.Button variant=\"primary\" path=\"/product/2\">\n                            Go to dynamic path screen with id 2.\n                        </Navigator.Button>\n                    </VStack>\n                </Navigator.Screen>\n\n                <Navigator.Screen path=\"/child\">\n                    <h2>This is the child screen.</h2>\n                    <HStack spacing={2} alignment=\"left\">\n                        <Navigator.BackButton variant=\"secondary\">\n                            Go back\n                        </Navigator.BackButton>\n\n                        <Navigator.Button variant=\"primary\" path=\"/child/grandchild\">\n                            Go to grand child screen.\n                        </Navigator.Button>\n                    </HStack>\n                </Navigator.Screen>\n\n                <Navigator.Screen path=\"/child/grandchild\">\n                    <h2>This is the grand child screen.</h2>\n                    <Navigator.BackButton variant=\"secondary\">\n                        Go back\n                    </Navigator.BackButton>\n                </Navigator.Screen>\n\n                <Navigator.Screen path=\"/product/:id\">\n                    <DynamicScreen />\n                </Navigator.Screen>\n            </>\n  }\n}",
					...Default.parameters?.docs?.source
				}
			}
		};
		WithNestedInitialPath.parameters = {
			...WithNestedInitialPath.parameters,
			docs: {
				...WithNestedInitialPath.parameters?.docs,
				source: {
					originalSource: "{\n  ...Default,\n  args: {\n    ...Default.args,\n    initialPath: '/child/grandchild'\n  }\n}",
					...WithNestedInitialPath.parameters?.docs?.source
				}
			}
		};
		SkipFocus.parameters = {
			...SkipFocus.parameters,
			docs: {
				...SkipFocus.parameters?.docs,
				source: {
					originalSource: "{\n  args: {\n    initialPath: '/',\n    children: <>\n                <div style={{\n        height: 150,\n        outline: '1px solid black',\n        outlineOffset: '-1px',\n        marginBlockEnd: '1rem',\n        display: 'contents'\n      }}>\n                    <Navigator.Screen path=\"/\">\n                        <h2>Home screen</h2>\n                        <Navigator.Button variant=\"primary\" path=\"/child\">\n                            Go to child screen.\n                        </Navigator.Button>\n                    </Navigator.Screen>\n\n                    <Navigator.Screen path=\"/child\">\n                        <h2>Child screen</h2>\n                        <Navigator.BackButton variant=\"secondary\">\n                            Go back to home screen\n                        </Navigator.BackButton>\n                    </Navigator.Screen>\n                </div>\n\n                <NavigatorButtonWithSkipFocus path=\"/child\">\n                    Go to child screen, but keep focus on this button\n                </NavigatorButtonWithSkipFocus>\n            </>\n  }\n}",
					...SkipFocus.parameters?.docs?.source
				}
			}
		};
	})))();
}
//#endregion
init_index_story();
export { Default, SkipFocus, WithNestedInitialPath, meta as default };
