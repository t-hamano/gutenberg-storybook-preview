import { n as __esmMin, o as __toESM } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_react } from "./react-Bujh4FgW.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C1RZKCc6.js";
import { a as init_use_isomorphic_effect, c as init_MotionConfigContext, d as LayoutGroupContext, f as init_LayoutGroupContext, l as init_use_constant, o as useIsomorphicLayoutEffect, s as MotionConfigContext, u as useConstant } from "./proxy-BwuyW_W-.js";
import { a as init_PresenceContext, i as PresenceContext, r as usePresence, t as init_use_presence } from "./use-presence-B_wv2hoY.js";
//#region ../node_modules/.store/framer-motion@11.18.2-psrXHdCe5S9l_wz-xpDEKw/node_modules/framer-motion/dist/es/components/AnimatePresence/PopChild.mjs
function PopChild({ children, isPresent }) {
	const id = (0, import_react$5.useId)();
	const ref = (0, import_react$5.useRef)(null);
	const size = (0, import_react$5.useRef)({
		width: 0,
		height: 0,
		top: 0,
		left: 0
	});
	const { nonce } = (0, import_react$5.useContext)(MotionConfigContext);
	/**
	* We create and inject a style block so we can apply this explicit
	* sizing in a non-destructive manner by just deleting the style block.
	*
	* We can't apply size via render as the measurement happens
	* in getSnapshotBeforeUpdate (post-render), likewise if we apply the
	* styles directly on the DOM node, we might be overwriting
	* styles set via the style prop.
	*/
	(0, import_react$5.useInsertionEffect)(() => {
		const { width, height, top, left } = size.current;
		if (isPresent || !ref.current || !width || !height) return;
		ref.current.dataset.motionPopId = id;
		const style = document.createElement("style");
		if (nonce) style.nonce = nonce;
		document.head.appendChild(style);
		if (style.sheet) style.sheet.insertRule(`
          [data-motion-pop-id="${id}"] {
            position: absolute !important;
            width: ${width}px !important;
            height: ${height}px !important;
            top: ${top}px !important;
            left: ${left}px !important;
          }
        `);
		return () => {
			document.head.removeChild(style);
		};
	}, [isPresent]);
	return (0, import_jsx_runtime$2.jsx)(PopChildMeasure, {
		isPresent,
		childRef: ref,
		sizeRef: size,
		children: import_react$4.cloneElement(children, { ref })
	});
}
var import_jsx_runtime$2, import_react$4, import_react$5, PopChildMeasure;
function init_PopChild() {
	return (init_PopChild = __esmMin((() => {
		import_jsx_runtime$2 = require_jsx_runtime();
		import_react$4 = /* @__PURE__ */ __toESM(require_react(), 1);
		import_react$5 = require_react();
		init_MotionConfigContext();
		PopChildMeasure = class extends import_react$4.Component {
			getSnapshotBeforeUpdate(prevProps) {
				const element = this.props.childRef.current;
				if (element && prevProps.isPresent && !this.props.isPresent) {
					const size = this.props.sizeRef.current;
					size.height = element.offsetHeight || 0;
					size.width = element.offsetWidth || 0;
					size.top = element.offsetTop;
					size.left = element.offsetLeft;
				}
				return null;
			}
			/**
			* Required with getSnapshotBeforeUpdate to stop React complaining.
			*/
			componentDidUpdate() {}
			render() {
				return this.props.children;
			}
		};
	})))();
}
//#endregion
//#region ../node_modules/.store/framer-motion@11.18.2-psrXHdCe5S9l_wz-xpDEKw/node_modules/framer-motion/dist/es/components/AnimatePresence/PresenceChild.mjs
function newChildrenMap() {
	return /* @__PURE__ */ new Map();
}
var import_jsx_runtime$1, import_react$2, import_react$3, PresenceChild;
function init_PresenceChild() {
	return (init_PresenceChild = __esmMin((() => {
		import_jsx_runtime$1 = require_jsx_runtime();
		import_react$2 = /* @__PURE__ */ __toESM(require_react(), 1);
		import_react$3 = require_react();
		init_PresenceContext();
		init_use_constant();
		init_PopChild();
		PresenceChild = ({ children, initial, isPresent, onExitComplete, custom, presenceAffectsLayout, mode }) => {
			const presenceChildren = useConstant(newChildrenMap);
			const id = (0, import_react$3.useId)();
			const memoizedOnExitComplete = (0, import_react$3.useCallback)((childId) => {
				presenceChildren.set(childId, true);
				for (const isComplete of presenceChildren.values()) if (!isComplete) return;
				onExitComplete && onExitComplete();
			}, [presenceChildren, onExitComplete]);
			const context = (0, import_react$3.useMemo)(
				() => ({
					id,
					initial,
					isPresent,
					custom,
					onExitComplete: memoizedOnExitComplete,
					register: (childId) => {
						presenceChildren.set(childId, false);
						return () => presenceChildren.delete(childId);
					}
				}),
				/**
				* If the presence of a child affects the layout of the components around it,
				* we want to make a new context value to ensure they get re-rendered
				* so they can detect that layout change.
				*/
				presenceAffectsLayout ? [Math.random(), memoizedOnExitComplete] : [isPresent, memoizedOnExitComplete]
			);
			(0, import_react$3.useMemo)(() => {
				presenceChildren.forEach((_, key) => presenceChildren.set(key, false));
			}, [isPresent]);
			/**
			* If there's no `motion` components to fire exit animations, we want to remove this
			* component immediately.
			*/
			import_react$2.useEffect(() => {
				!isPresent && !presenceChildren.size && onExitComplete && onExitComplete();
			}, [isPresent]);
			if (mode === "popLayout") children = (0, import_jsx_runtime$1.jsx)(PopChild, {
				isPresent,
				children
			});
			return (0, import_jsx_runtime$1.jsx)(PresenceContext.Provider, {
				value: context,
				children
			});
		};
	})))();
}
//#endregion
//#region ../node_modules/.store/framer-motion@11.18.2-psrXHdCe5S9l_wz-xpDEKw/node_modules/framer-motion/dist/es/components/AnimatePresence/utils.mjs
function onlyElements(children) {
	const filtered = [];
	import_react$1.Children.forEach(children, (child) => {
		if ((0, import_react$1.isValidElement)(child)) filtered.push(child);
	});
	return filtered;
}
var import_react$1, getChildKey;
function init_utils() {
	return (init_utils = __esmMin((() => {
		import_react$1 = require_react();
		getChildKey = (child) => child.key || "";
	})))();
}
//#endregion
//#region ../node_modules/.store/framer-motion@11.18.2-psrXHdCe5S9l_wz-xpDEKw/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs
var import_jsx_runtime, import_react, AnimatePresence;
function init_AnimatePresence() {
	return (init_AnimatePresence = __esmMin((() => {
		import_jsx_runtime = require_jsx_runtime();
		import_react = require_react();
		init_LayoutGroupContext();
		init_use_constant();
		init_PresenceChild();
		init_use_presence();
		init_utils();
		init_use_isomorphic_effect();
		AnimatePresence = ({ children, custom, initial = true, onExitComplete, presenceAffectsLayout = true, mode = "sync", propagate = false }) => {
			const [isParentPresent, safeToRemove] = usePresence(propagate);
			/**
			* Filter any children that aren't ReactElements. We can only track components
			* between renders with a props.key.
			*/
			const presentChildren = (0, import_react.useMemo)(() => onlyElements(children), [children]);
			/**
			* Track the keys of the currently rendered children. This is used to
			* determine which children are exiting.
			*/
			const presentKeys = propagate && !isParentPresent ? [] : presentChildren.map(getChildKey);
			/**
			* If `initial={false}` we only want to pass this to components in the first render.
			*/
			const isInitialRender = (0, import_react.useRef)(true);
			/**
			* A ref containing the currently present children. When all exit animations
			* are complete, we use this to re-render the component with the latest children
			* *committed* rather than the latest children *rendered*.
			*/
			const pendingPresentChildren = (0, import_react.useRef)(presentChildren);
			/**
			* Track which exiting children have finished animating out.
			*/
			const exitComplete = useConstant(() => /* @__PURE__ */ new Map());
			/**
			* Save children to render as React state. To ensure this component is concurrent-safe,
			* we check for exiting children via an effect.
			*/
			const [diffedChildren, setDiffedChildren] = (0, import_react.useState)(presentChildren);
			const [renderedChildren, setRenderedChildren] = (0, import_react.useState)(presentChildren);
			useIsomorphicLayoutEffect(() => {
				isInitialRender.current = false;
				pendingPresentChildren.current = presentChildren;
				/**
				* Update complete status of exiting children.
				*/
				for (let i = 0; i < renderedChildren.length; i++) {
					const key = getChildKey(renderedChildren[i]);
					if (!presentKeys.includes(key)) {
						if (exitComplete.get(key) !== true) exitComplete.set(key, false);
					} else exitComplete.delete(key);
				}
			}, [
				renderedChildren,
				presentKeys.length,
				presentKeys.join("-")
			]);
			const exitingChildren = [];
			if (presentChildren !== diffedChildren) {
				let nextChildren = [...presentChildren];
				/**
				* Loop through all the currently rendered components and decide which
				* are exiting.
				*/
				for (let i = 0; i < renderedChildren.length; i++) {
					const child = renderedChildren[i];
					const key = getChildKey(child);
					if (!presentKeys.includes(key)) {
						nextChildren.splice(i, 0, child);
						exitingChildren.push(child);
					}
				}
				/**
				* If we're in "wait" mode, and we have exiting children, we want to
				* only render these until they've all exited.
				*/
				if (mode === "wait" && exitingChildren.length) nextChildren = exitingChildren;
				setRenderedChildren(onlyElements(nextChildren));
				setDiffedChildren(presentChildren);
				/**
				* Early return to ensure once we've set state with the latest diffed
				* children, we can immediately re-render.
				*/
				return;
			}
			if (mode === "wait" && renderedChildren.length > 1) console.warn(`You're attempting to animate multiple children within AnimatePresence, but its mode is set to "wait". This will lead to odd visual behaviour.`);
			/**
			* If we've been provided a forceRender function by the LayoutGroupContext,
			* we can use it to force a re-render amongst all surrounding components once
			* all components have finished animating out.
			*/
			const { forceRender } = (0, import_react.useContext)(LayoutGroupContext);
			return (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: renderedChildren.map((child) => {
				const key = getChildKey(child);
				const isPresent = propagate && !isParentPresent ? false : presentChildren === renderedChildren || presentKeys.includes(key);
				const onExit = () => {
					if (exitComplete.has(key)) exitComplete.set(key, true);
					else return;
					let isEveryExitComplete = true;
					exitComplete.forEach((isExitComplete) => {
						if (!isExitComplete) isEveryExitComplete = false;
					});
					if (isEveryExitComplete) {
						forceRender === null || forceRender === void 0 || forceRender();
						setRenderedChildren(pendingPresentChildren.current);
						propagate && (safeToRemove === null || safeToRemove === void 0 || safeToRemove());
						onExitComplete && onExitComplete();
					}
				};
				return (0, import_jsx_runtime.jsx)(PresenceChild, {
					isPresent,
					initial: !isInitialRender.current || initial ? void 0 : false,
					custom: isPresent ? void 0 : custom,
					presenceAffectsLayout,
					mode,
					onExitComplete: isPresent ? void 0 : onExit,
					children: child
				}, key);
			}) });
		};
	})))();
}
//#endregion
export { init_AnimatePresence as n, AnimatePresence as t };
