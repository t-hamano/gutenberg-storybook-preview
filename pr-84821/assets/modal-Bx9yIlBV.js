import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C1RZKCc6.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { r as init_react_platform, t as createPortal } from "./react-platform-BqLbFOjq.js";
import { n as use_instance_id_default, t as init_use_instance_id } from "./use-instance-id-BznKyZc1.js";
import { n as init_build_module, t as focus } from "./build-module-Bh_sM-WV.js";
import { t as getScrollContainer } from "./get-scroll-container-Di4676g3.js";
import { n as useRefEffect, t as init_use_ref_effect } from "./use-ref-effect-DguFui9C.js";
import { a as init_use_constrained_tabbing, i as useFocusOnMount, n as use_focus_return_default, o as use_constrained_tabbing_default, r as init_use_focus_on_mount, t as init_use_focus_return } from "./use-focus-return-DHixTMlK.js";
import { n as useMergeRefs, t as init_use_merge_refs } from "./use-merge-refs-BAtuPB1L.js";
import { n as __, t as init_build_module$1 } from "./build-module-v04us4E2.js";
import { n as withIgnoreIMEEvents } from "./with-ignore-ime-events-BFiL1WqY.js";
import { r as init_build_module$2 } from "./build-module-LJKyBiy6.js";
import { n as use_reduced_motion_default, t as init_use_reduced_motion } from "./use-reduced-motion-D9Mdybdt.js";
import { a as init_clsx, i as clsx } from "./iframe-Dbjzp1_m.js";
import { t as close_default } from "./close-rKxd1Abw.js";
import { n as warning, t as init_build_module$3 } from "./build-module-B5spW8IS.js";
import { n as init_config_values, t as config_values_default } from "./config-values-0x5e6kXt.js";
import { n as init_component, t as component_default } from "./component-CLa3e4Ol.js";
import { n as button_default, r as init_button } from "./button-BxEkUQAF.js";
import { n as init_style_provider, r as style_provider_default } from "./style-provider-BJbJjDJX.js";
import { r as init_build_module$4 } from "./library.story-CFsmdbdz.js";
//#region ../packages/components/build-module/modal/aria-helper.mjs
function modalize(modalElement) {
	const elements = Array.from(document.body.children);
	const hiddenElements = [];
	hiddenElementsByDepth.push(hiddenElements);
	for (const element of elements) {
		if (element === modalElement) continue;
		if (elementShouldBeHidden(element)) {
			element.setAttribute("aria-hidden", "true");
			hiddenElements.push(element);
		}
	}
}
function elementShouldBeHidden(element) {
	const role = element.getAttribute("role");
	return !(element.tagName === "SCRIPT" || element.hasAttribute("hidden") || element.hasAttribute("aria-hidden") || element.hasAttribute("aria-live") || role && LIVE_REGION_ARIA_ROLES.has(role));
}
function unmodalize() {
	const hiddenElements = hiddenElementsByDepth.pop();
	if (!hiddenElements) return;
	for (const element of hiddenElements) element.removeAttribute("aria-hidden");
}
var LIVE_REGION_ARIA_ROLES, hiddenElementsByDepth;
function init_aria_helper() {
	return (init_aria_helper = __esmMin((() => {
		LIVE_REGION_ARIA_ROLES = /* @__PURE__ */ new Set([
			"alert",
			"status",
			"log",
			"marquee",
			"timer"
		]);
		hiddenElementsByDepth = [];
	})))();
}
//#endregion
//#region ../packages/components/build-module/modal/use-modal-exit-animation.mjs
function useModalExitAnimation() {
	const frameRef = (0, import_react.useRef)(null);
	const [isAnimatingOut, setIsAnimatingOut] = (0, import_react.useState)(false);
	const isReducedMotion = use_reduced_motion_default();
	const closeModal = (0, import_react.useCallback)(() => new Promise((closeModalResolve) => {
		const frameEl = frameRef.current;
		if (isReducedMotion) {
			closeModalResolve();
			return;
		}
		if (!frameEl) {
			warning("wp.components.Modal: the Modal component can't be closed with an exit animation because of a missing reference to the modal frame element.");
			closeModalResolve();
			return;
		}
		let handleAnimationEnd;
		const startAnimation = () => new Promise((animationResolve) => {
			handleAnimationEnd = (e) => {
				if (e.animationName === EXIT_ANIMATION_NAME) animationResolve();
			};
			frameEl.addEventListener("animationend", handleAnimationEnd);
			setIsAnimatingOut(true);
		});
		const animationTimeout = () => new Promise((timeoutResolve) => {
			setTimeout(() => timeoutResolve(), FRAME_ANIMATION_DURATION_MS * 1.2);
		});
		Promise.race([startAnimation(), animationTimeout()]).then(() => {
			if (handleAnimationEnd) frameEl.removeEventListener("animationend", handleAnimationEnd);
			setIsAnimatingOut(false);
			closeModalResolve();
		});
	}), [isReducedMotion]);
	return {
		overlayClassname: isAnimatingOut ? "is-animating-out" : void 0,
		frameRef,
		closeModal
	};
}
var FRAME_ANIMATION_DURATION_MS, EXIT_ANIMATION_NAME;
function init_use_modal_exit_animation() {
	return (init_use_modal_exit_animation = __esmMin((() => {
		init_use_reduced_motion();
		init_react();
		init_build_module$3();
		init_config_values();
		FRAME_ANIMATION_DURATION_MS = Number.parseInt(config_values_default.transitionDuration);
		EXIT_ANIMATION_NAME = "components-modal__disappear-animation";
	})))();
}
//#endregion
//#region ../packages/components/build-module/modal/context.mjs
var ModalContext;
function init_context() {
	return (init_context = __esmMin((() => {
		init_react();
		ModalContext = (0, import_react.createContext)(/* @__PURE__ */ new Set());
		ModalContext.displayName = "ModalContext";
	})))();
}
//#endregion
//#region ../packages/components/build-module/modal/index.mjs
function UnforwardedModal(props, forwardedRef) {
	const { bodyOpenClassName = "modal-open", role = "dialog", title = null, focusOnMount = true, shouldCloseOnEsc = true, shouldCloseOnClickOutside = true, isDismissible = true, aria = {
		labelledby: void 0,
		describedby: void 0
	}, onRequestClose, icon, closeButtonLabel, children, style, overlayClassName: overlayClassnameProp, className, contentLabel, onKeyDown, isFullScreen = false, size, headerActions = null, __experimentalHideHeader = false } = props;
	const ref = (0, import_react.useRef)(null);
	const instanceId = use_instance_id_default(Modal);
	const headingId = title ? `components-modal-header-${instanceId}` : aria.labelledby;
	const dialogLabel = contentLabel ?? (__experimentalHideHeader && title ? title : void 0);
	const shouldFocusContent = focusOnMount === "firstContentElement";
	const focusOnMountRef = useFocusOnMount(shouldFocusContent ? false : focusOnMount);
	const constrainedTabbingRef = use_constrained_tabbing_default();
	const focusReturnRef = use_focus_return_default();
	const contentRef = (0, import_react.useRef)(null);
	const childrenContainerRef = (0, import_react.useRef)(null);
	const focusContentRef = useRefEffect((node) => {
		if (!shouldFocusContent || node.contains(node.ownerDocument.activeElement)) return;
		const timerId = setTimeout(() => {
			const childrenContainer = childrenContainerRef.current;
			(childrenContainer && focus.tabbable.find(childrenContainer)[0] || focus.tabbable.find(node)[0] || node).focus({ preventScroll: true });
		}, 0);
		return () => clearTimeout(timerId);
	}, [shouldFocusContent]);
	const [hasScrolledContent, setHasScrolledContent] = (0, import_react.useState)(false);
	const [hasScrollableContent, setHasScrollableContent] = (0, import_react.useState)(false);
	let sizeClass;
	if (isFullScreen || size === "fill") sizeClass = "is-full-screen";
	else if (size) sizeClass = `has-size-${size}`;
	const isContentScrollable = (0, import_react.useCallback)(() => {
		if (!contentRef.current) return;
		const closestScrollContainer = getScrollContainer(contentRef.current);
		if (contentRef.current === closestScrollContainer) setHasScrollableContent(true);
		else setHasScrollableContent(false);
	}, [contentRef]);
	(0, import_react.useEffect)(() => {
		modalize(ref.current);
		return () => unmodalize();
	}, []);
	const onRequestCloseRef = (0, import_react.useRef)(void 0);
	(0, import_react.useEffect)(() => {
		onRequestCloseRef.current = onRequestClose;
	}, [onRequestClose]);
	const dismissers = (0, import_react.useContext)(ModalContext);
	const [nestedDismissers] = (0, import_react.useState)(() => /* @__PURE__ */ new Set());
	(0, import_react.useEffect)(() => {
		dismissers.add(onRequestCloseRef);
		for (const dismisser of dismissers) if (dismisser !== onRequestCloseRef) dismisser.current?.();
		return () => {
			for (const dismisser of nestedDismissers) dismisser.current?.();
			dismissers.delete(onRequestCloseRef);
		};
	}, [dismissers, nestedDismissers]);
	(0, import_react.useEffect)(() => {
		const theClass = bodyOpenClassName;
		const oneMore = 1 + (bodyOpenClasses.get(theClass) ?? 0);
		bodyOpenClasses.set(theClass, oneMore);
		document.body.classList.add(bodyOpenClassName);
		return () => {
			const oneLess = bodyOpenClasses.get(theClass) - 1;
			if (oneLess === 0) {
				document.body.classList.remove(theClass);
				bodyOpenClasses.delete(theClass);
			} else bodyOpenClasses.set(theClass, oneLess);
		};
	}, [bodyOpenClassName]);
	const { closeModal, frameRef, overlayClassname } = useModalExitAnimation();
	(0, import_react.useLayoutEffect)(() => {
		if (!window.ResizeObserver || !childrenContainerRef.current) return;
		const resizeObserver = new ResizeObserver(isContentScrollable);
		resizeObserver.observe(childrenContainerRef.current);
		isContentScrollable();
		return () => {
			resizeObserver.disconnect();
		};
	}, [isContentScrollable, childrenContainerRef]);
	function handleEscapeKeyDown(event) {
		if (shouldCloseOnEsc && (event.code === "Escape" || event.key === "Escape") && !event.defaultPrevented) {
			event.preventDefault();
			event.stopPropagation();
			closeModal().then(() => onRequestClose(event));
		}
	}
	const onContentContainerScroll = (0, import_react.useCallback)((e) => {
		const scrollY = e?.currentTarget?.scrollTop ?? -1;
		if (!hasScrolledContent && scrollY > 0) setHasScrolledContent(true);
		else if (hasScrolledContent && scrollY <= 0) setHasScrolledContent(false);
	}, [hasScrolledContent]);
	let pressTarget = null;
	const modal = /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref: useMergeRefs([ref, forwardedRef]),
		className: clsx("components-modal__screen-overlay", overlayClassname, overlayClassnameProp),
		onKeyDown: withIgnoreIMEEvents(handleEscapeKeyDown),
		...shouldCloseOnClickOutside ? {
			onPointerDown: (event) => {
				if (event.target === event.currentTarget) {
					pressTarget = event.target;
					event.preventDefault();
				}
			},
			onPointerUp: ({ target, button }) => {
				const isSameTarget = target === pressTarget;
				pressTarget = null;
				if (button === 0 && isSameTarget) closeModal().then(() => onRequestClose());
			}
		} : {},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(style_provider_default, {
			document,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: clsx("components-modal__frame", sizeClass, className),
				style,
				ref: useMergeRefs([
					frameRef,
					constrainedTabbingRef,
					focusReturnRef,
					shouldFocusContent ? focusContentRef : focusOnMountRef
				]),
				role,
				"aria-label": dialogLabel,
				"aria-labelledby": dialogLabel ? void 0 : headingId,
				"aria-describedby": aria.describedby,
				tabIndex: -1,
				onKeyDown,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: clsx("components-modal__content", {
						"hide-header": __experimentalHideHeader,
						"is-scrollable": hasScrollableContent,
						"has-scrolled-content": hasScrolledContent
					}),
					role: "document",
					onScroll: onContentContainerScroll,
					ref: contentRef,
					"aria-label": hasScrollableContent ? __("Scrollable section") : void 0,
					tabIndex: hasScrollableContent ? 0 : void 0,
					children: [!__experimentalHideHeader && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "components-modal__header",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "components-modal__header-heading-container",
								children: [icon && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "components-modal__icon-container",
									"aria-hidden": true,
									children: icon
								}), title && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
									id: headingId,
									className: "components-modal__header-heading",
									children: title
								})]
							}),
							headerActions,
							isDismissible && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(component_default, {
								marginBottom: 0,
								marginLeft: 2
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(button_default, {
								size: "compact",
								onClick: (event) => closeModal().then(() => onRequestClose(event)),
								icon: close_default,
								label: closeButtonLabel || __("Close")
							})] })
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						ref: childrenContainerRef,
						className: "components-modal__children-container",
						children
					})]
				})
			})
		})
	});
	return createPortal(/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ModalContext.Provider, {
		value: nestedDismissers,
		children: modal
	}), document.body);
}
var import_jsx_runtime, bodyOpenClasses, Modal, modal_default;
function init_modal() {
	return (init_modal = __esmMin((() => {
		init_clsx();
		init_react_platform(), init_react();
		init_use_instance_id(), init_use_focus_return(), init_use_focus_on_mount(), init_use_constrained_tabbing(), init_use_merge_refs(), init_use_ref_effect();
		init_build_module$1();
		init_build_module$4();
		init_build_module();
		init_build_module$2();
		init_aria_helper();
		init_button();
		init_style_provider();
		init_component();
		init_use_modal_exit_animation();
		init_context();
		import_jsx_runtime = require_jsx_runtime();
		bodyOpenClasses = /* @__PURE__ */ new Map();
		Modal = (0, import_react.forwardRef)(UnforwardedModal);
		Modal.displayName = "Modal";
		modal_default = Modal;
	})))();
}
//#endregion
export { modal_default as n, init_modal as t };
