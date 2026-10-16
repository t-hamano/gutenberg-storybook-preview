import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { r as init_react_platform, t as createPortal } from "./react-platform-BqLbFOjq.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
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
import { n as init_config_values, t as config_values_default } from "./config-values-hzX34N5c.js";
import { n as init_component, t as Spacer } from "./component-DhnvQQBl.js";
import { n as init_button, t as Button } from "./button-BqvmAVeL.js";
import { n as init_style_provider, t as StyleProvider } from "./style-provider-JXq0s2m1.js";
import { r as init_build_module$4 } from "./library.story-CFsmdbdz.js";
//#region ../packages/components/src/modal/aria-helper.ts
/**
* Hides all elements in the body element from screen-readers except
* the provided element and elements that should not be hidden from
* screen-readers.
*
* The reason we do this is because `aria-modal="true"` currently is bugged
* in Safari, and support is spotty in other browsers overall. In the future
* we should consider removing these helper functions in favor of
* `aria-modal="true"`.
*
* @param modalElement The element that should not be hidden.
*/
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
/**
* Determines if the passed element should not be hidden from screen readers.
*
* @param element The element that should be checked.
*
* @return Whether the element should not be hidden from screen-readers.
*/
function elementShouldBeHidden(element) {
	const role = element.getAttribute("role");
	return !(element.tagName === "SCRIPT" || element.hasAttribute("hidden") || element.hasAttribute("aria-hidden") || element.hasAttribute("aria-live") || role && LIVE_REGION_ARIA_ROLES.has(role));
}
/**
* Accessibly reveals the elements hidden by the latest modal.
*/
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
//#region ../packages/components/src/modal/use-modal-exit-animation.ts
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
//#region ../packages/components/src/modal/context.ts
var ModalContext;
function init_context() {
	return (init_context = __esmMin((() => {
		init_react();
		ModalContext = (0, import_react.createContext)(/* @__PURE__ */ new Set());
		ModalContext.displayName = "ModalContext";
	})))();
}
//#endregion
//#region ../packages/components/src/modal/index.tsx
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
	const modal = /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
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
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StyleProvider, {
			document,
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
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
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
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
					children: [!__experimentalHideHeader && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "components-modal__header",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "components-modal__header-heading-container",
								children: [icon && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "components-modal__icon-container",
									"aria-hidden": true,
									children: icon
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 319,
									columnNumber: 11
								}, this), title && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
									id: headingId,
									className: "components-modal__header-heading",
									children: title
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 327,
									columnNumber: 11
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 317,
								columnNumber: 9
							}, this),
							headerActions,
							isDismissible && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Spacer, {
								marginBottom: 0,
								marginLeft: 2
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 338,
								columnNumber: 11
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
								size: "compact",
								onClick: (event) => closeModal().then(() => onRequestClose(event)),
								icon: close_default,
								label: closeButtonLabel || __("Close")
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 342,
								columnNumber: 11
							}, this)] }, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 337,
								columnNumber: 10
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 316,
						columnNumber: 8
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						ref: childrenContainerRef,
						className: "components-modal__children-container",
						children
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 362,
						columnNumber: 7
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 299,
					columnNumber: 6
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 279,
				columnNumber: 5
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 278,
			columnNumber: 4
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 268,
		columnNumber: 3
	}, this);
	return createPortal(/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ModalContext.Provider, {
		value: nestedDismissers,
		children: modal
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 375,
		columnNumber: 3
	}, this), document.body);
}
var import_jsx_dev_runtime, _jsxFileName, bodyOpenClasses, Modal;
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
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/modal/index.tsx";
		bodyOpenClasses = /* @__PURE__ */ new Map();
		Modal = (0, import_react.forwardRef)(UnforwardedModal);
		Modal.displayName = "Modal";
		try {
			Modal.__docgenInfo = {
				"description": "Modals give users information and choices related to a task they’re trying to\naccomplish. They can contain critical information, require decisions, or\ninvolve multiple tasks.\n\n```jsx\nimport { Button, Modal } from '@wordpress/components';\nimport { useState } from '@wordpress/element';\n\nconst MyModal = () => {\n  const [ isOpen, setOpen ] = useState( false );\n  const openModal = () => setOpen( true );\n  const closeModal = () => setOpen( false );\n\n  return (\n    <>\n      <Button variant=\"secondary\" onClick={ openModal }>\n        Open Modal\n      </Button>\n      { isOpen && (\n        <Modal title=\"This is my modal\" onRequestClose={ closeModal }>\n          <Button variant=\"secondary\" onClick={ closeModal }>\n            My custom close button\n          </Button>\n        </Modal>\n      ) }\n    </>\n  );\n};\n```",
				"displayName": "Modal",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/modal/index.tsx",
				"methods": [],
				"props": {
					"aria": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/modal/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "aria",
						"required": false,
						"tags": {},
						"type": { "name": "{ describedby?: string; labelledby?: string; } | undefined" }
					},
					"bodyOpenClassName": {
						"defaultValue": { "value": "'modal-open'" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/modal/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Class name added to the body element when the modal is open.\nIf you use a custom class name, its styles must set `overflow: hidden`\nto preserve the Modal's scroll lock.",
						"name": "bodyOpenClassName",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"children": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/modal/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The children elements.",
						"name": "children",
						"required": true,
						"tags": {},
						"type": { "name": "ReactNode" }
					},
					"className": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/modal/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "If this property is added, it will an additional class name to the modal\ncontent `div`.",
						"name": "className",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"closeButtonLabel": {
						"defaultValue": { "value": "`__( 'Close' )`" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/modal/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Label on the close button.",
						"name": "closeButtonLabel",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"contentLabel": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/modal/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "If this property is added, it will be added to the modal content `div` as\n`aria-label`.\n\nTitles are required for accessibility reasons, see `aria.labelledby` and\n`title` for other ways to provide a title.",
						"name": "contentLabel",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"focusOnMount": {
						"defaultValue": { "value": "true" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/modal/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Determines focus behavior when the modal opens.\n\n- `\"firstElement\"` focuses the first tabbable element within.\n- `\"firstInputElement\"` focuses the first value control within.\n- `\"firstContentElement\"` focuses the first tabbable element within the modal’s content element.\n- `true` focuses the element itself.\n- `false` does nothing and _should not be used unless an accessible\n   substitute behavior is implemented_.",
						"name": "focusOnMount",
						"required": false,
						"tags": {},
						"type": { "name": "Mode | \"firstContentElement\"" }
					},
					"headerActions": {
						"defaultValue": { "value": "null" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/modal/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Elements that are injected into the modal header to the left of the close button (if rendered).\nHidden if `__experimentalHideHeader` is `true`.",
						"name": "headerActions",
						"required": false,
						"tags": {},
						"type": { "name": "ReactNode" }
					},
					"icon": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/modal/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "If this property is added, an icon will be added before the title.",
						"name": "icon",
						"required": false,
						"tags": {},
						"type": { "name": "Element" }
					},
					"isDismissible": {
						"defaultValue": { "value": "true" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/modal/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "If this property is set to false, the modal will not display a close icon\nand cannot be dismissed.",
						"name": "isDismissible",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"isFullScreen": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/modal/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "This property when set to `true` will render a full screen modal.",
						"name": "isFullScreen",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"size": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/modal/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "If this property is added it will cause the modal to render at a preset\nwidth, or expand to fill the screen. This prop will be ignored if\n`isFullScreen` is set to `true`.\n\nNote: `Modal`'s width can also be controlled by adjusting the width of the\nmodal's contents, or via CSS using the `style` prop.",
						"name": "size",
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "\"small\" | \"fill\" | \"medium\" | \"large\"",
							"value": [
								{ "value": "\"small\"" },
								{ "value": "\"fill\"" },
								{ "value": "\"medium\"" },
								{ "value": "\"large\"" }
							]
						}
					},
					"onKeyDown": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/modal/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Handle the key down on the modal frame `div`.",
						"name": "onKeyDown",
						"required": false,
						"tags": {},
						"type": { "name": "KeyboardEventHandler<HTMLDivElement>" }
					},
					"onRequestClose": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/modal/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "This function is called to indicate that the modal should be closed.",
						"name": "onRequestClose",
						"required": true,
						"tags": {},
						"type": { "name": "(event?: KeyboardEvent<HTMLDivElement> | SyntheticEvent<Element, Event> | undefined) => void" }
					},
					"overlayClassName": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/modal/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "If this property is added, it will an additional class name to the modal\noverlay `div`.",
						"name": "overlayClassName",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"role": {
						"defaultValue": { "value": "'dialog'" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/modal/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "If this property is added, it will override the default role of the\nmodal.",
						"name": "role",
						"required": false,
						"tags": {},
						"type": { "name": "AriaRole" }
					},
					"shouldCloseOnClickOutside": {
						"defaultValue": { "value": "true" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/modal/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "If this property is added, it will determine whether the modal requests\nto close when a mouse click occurs outside of the modal content.",
						"name": "shouldCloseOnClickOutside",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"shouldCloseOnEsc": {
						"defaultValue": { "value": "true" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/modal/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "If this property is added, it will determine whether the modal requests\nto close when the escape key is pressed.",
						"name": "shouldCloseOnEsc",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"style": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/modal/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "If this property is added, it will be added to the modal frame `div`.",
						"name": "style",
						"required": false,
						"tags": {},
						"type": { "name": "CSSProperties" }
					},
					"title": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/modal/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "This property is used as the modal header's title.\n\nTitles are required for accessibility reasons, see `aria.labelledby` and\n`contentLabel` for other ways to provide a title.",
						"name": "title",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"__experimentalHideHeader": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/modal/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "When set to `true`, the Modal's header (including the icon, title and\nclose button) will not be rendered. A `title` is then applied to the\ndialog as its `aria-label`, so the dialog keeps an accessible name.\n\n_Warning_: This property is still experimental. “Experimental” means this\nis an early implementation subject to drastic and breaking changes.",
						"name": "__experimentalHideHeader",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
export { init_modal as n, Modal as t };
