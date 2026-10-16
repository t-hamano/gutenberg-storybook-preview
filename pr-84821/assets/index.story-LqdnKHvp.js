import { n as __esmMin, o as __toESM } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_react } from "./react-Bujh4FgW.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C1RZKCc6.js";
import { n as init_react, t as import_react$6 } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { a as init_clsx, i as clsx } from "./iframe-Dbjzp1_m.js";
import { d as NOOP, f as init_empty, r as useRenderElement, t as init_useRenderElement } from "./useRenderElement-Dkv6YH0v.js";
import { n as useIsoLayoutEffect, t as init_useIsoLayoutEffect } from "./useIsoLayoutEffect-DDc8Lhn-.js";
import { n as useStableCallback, t as init_useStableCallback } from "./useStableCallback-Cql5w11m.js";
import { a as init_useOpenChangeComplete, i as transitionStatusMapping, n as useTransitionStatus, o as useOpenChangeComplete, r as init_stateAttributesMapping$1, t as init_useTransitionStatus } from "./useTransitionStatus-DtGN_KnE.js";
import { n as init_useTimeout, r as useTimeout } from "./useTimeout-Cl_2zLqB.js";
import { a as SVG, o as init_svg, r as Path, t as Circle } from "./svg-CAUvOTR7.js";
import { n as useRender, t as init_useRender } from "./useRender-JXgJ-9ZS.js";
import { n as resets_module_default, t as init_resets_module } from "./resets.module-CJil9Bz6.js";
import { n as init_global_css_defense_module, t as global_css_defense_module_default } from "./global-css-defense.module-BTDDc07p.js";
import { n as init_icon, t as Icon } from "./icon-C8ogYiCq.js";
import { n as init_stack, t as Stack } from "./stack-s_FjhA7z.js";
import { n as init_text, t as Text } from "./text-B-YUcwFZ.js";
//#region ../node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/avatar/root/AvatarRootContext.mjs
function useAvatarRootContext() {
	const context = import_react$5.useContext(AvatarRootContext);
	if (context === void 0) throw new Error("Base UI: AvatarRootContext is missing. Avatar parts must be placed within <Avatar.Root>.");
	return context;
}
var import_react$5, AvatarRootContext;
function init_AvatarRootContext() {
	return (init_AvatarRootContext = __esmMin((() => {
		import_react$5 = /* @__PURE__ */ __toESM(require_react(), 1);
		AvatarRootContext = /*#__PURE__*/ import_react$5.createContext(void 0);
		AvatarRootContext.displayName = "AvatarRootContext";
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/avatar/root/stateAttributesMapping.mjs
var avatarStateAttributesMapping;
function init_stateAttributesMapping() {
	return (init_stateAttributesMapping = __esmMin((() => {
		avatarStateAttributesMapping = { imageLoadingStatus: () => null };
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/avatar/root/AvatarRoot.mjs
var import_react$4, import_jsx_runtime, AvatarRoot;
function init_AvatarRoot() {
	return (init_AvatarRoot = __esmMin((() => {
		import_react$4 = /* @__PURE__ */ __toESM(require_react(), 1);
		init_useRenderElement();
		init_AvatarRootContext();
		init_stateAttributesMapping();
		import_jsx_runtime = require_jsx_runtime();
		AvatarRoot = /*#__PURE__*/ import_react$4.forwardRef(function AvatarRoot(componentProps, forwardedRef) {
			const { className, render, style, ...elementProps } = componentProps;
			const [imageLoadingStatus, setImageLoadingStatus] = import_react$4.useState("idle");
			const state = { imageLoadingStatus };
			const contextValue = import_react$4.useMemo(() => ({
				imageLoadingStatus,
				setImageLoadingStatus
			}), [imageLoadingStatus, setImageLoadingStatus]);
			const element = useRenderElement("span", componentProps, {
				state,
				ref: forwardedRef,
				props: elementProps,
				stateAttributesMapping: avatarStateAttributesMapping
			});
			return /*#__PURE__*/ (0, import_jsx_runtime.jsx)(AvatarRootContext.Provider, {
				value: contextValue,
				children: element
			});
		});
		AvatarRoot.displayName = "AvatarRoot";
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/avatar/image/useImageLoadingStatus.mjs
function useImageLoadingStatus(src, { referrerPolicy, crossOrigin, sizes, srcSet }, enabled) {
	const state = import_react$3.useState("idle");
	const setLoadingStatus = state[1];
	useIsoLayoutEffect(() => {
		if (!enabled) return NOOP;
		if (!src && !srcSet) {
			setLoadingStatus("error");
			return NOOP;
		}
		let isMounted = true;
		const image = new window.Image();
		const updateStatus = (status) => () => {
			if (!isMounted) return;
			setLoadingStatus(status);
		};
		setLoadingStatus("loading");
		image.onload = updateStatus("loaded");
		image.onerror = updateStatus("error");
		if (referrerPolicy) image.referrerPolicy = referrerPolicy;
		image.crossOrigin = crossOrigin ?? null;
		if (sizes) image.sizes = sizes;
		if (srcSet) image.srcset = srcSet;
		if (src) image.src = src;
		if (image.complete) setLoadingStatus(image.naturalWidth > 0 ? "loaded" : "error");
		return () => {
			isMounted = false;
		};
	}, [
		enabled,
		src,
		srcSet,
		sizes,
		crossOrigin,
		referrerPolicy,
		setLoadingStatus
	]);
	return state;
}
var import_react$3;
function init_useImageLoadingStatus() {
	return (init_useImageLoadingStatus = __esmMin((() => {
		import_react$3 = /* @__PURE__ */ __toESM(require_react(), 1);
		init_useIsoLayoutEffect();
		init_empty();
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/avatar/image/AvatarImage.mjs
var import_react$2, stateAttributesMapping, AvatarImage;
function init_AvatarImage() {
	return (init_AvatarImage = __esmMin((() => {
		import_react$2 = /* @__PURE__ */ __toESM(require_react(), 1);
		init_useStableCallback();
		init_useIsoLayoutEffect();
		init_useRenderElement();
		init_AvatarRootContext();
		init_stateAttributesMapping();
		init_useOpenChangeComplete();
		init_stateAttributesMapping$1();
		init_useTransitionStatus();
		init_useImageLoadingStatus();
		stateAttributesMapping = {
			...avatarStateAttributesMapping,
			...transitionStatusMapping
		};
		AvatarImage = /*#__PURE__*/ import_react$2.forwardRef(function AvatarImage(componentProps, forwardedRef) {
			const { className, render, onLoadingStatusChange: onLoadingStatusChangeProp, keepMounted = false, style, sizes, srcSet, src, ...elementProps } = componentProps;
			const { setImageLoadingStatus: setRootImageLoadingStatus } = useAvatarRootContext();
			const [imageLoadingStatus, setImageLoadingStatus] = useImageLoadingStatus(src, componentProps, !keepMounted);
			const isVisible = imageLoadingStatus === "loaded";
			const { mounted, transitionStatus, setMounted } = useTransitionStatus(isVisible);
			const imageRef = import_react$2.useRef(null);
			const initialCommitRef = import_react$2.useRef(true);
			useIsoLayoutEffect(() => {
				if (!keepMounted) return;
				const isInitialCommit = initialCommitRef.current;
				initialCommitRef.current = false;
				const image = imageRef.current;
				if (!image) return;
				if (!image.complete) {
					setImageLoadingStatus("loading");
					return;
				}
				const status = image.naturalWidth > 0 ? "loaded" : "error";
				setImageLoadingStatus(status);
				if (status === "loaded" && isInitialCommit) setMounted(true);
			}, [
				keepMounted,
				src,
				srcSet,
				sizes,
				elementProps.crossOrigin,
				elementProps.referrerPolicy,
				render,
				setImageLoadingStatus,
				setMounted
			]);
			const renderedStatusProps = keepMounted ? {
				"data-loading": imageLoadingStatus === "loading" ? "" : void 0,
				"data-error": imageLoadingStatus === "error" ? "" : void 0,
				"aria-hidden": imageLoadingStatus !== "loaded" || void 0,
				onLoad() {
					setImageLoadingStatus("loaded");
				},
				onError() {
					setImageLoadingStatus("error");
				}
			} : void 0;
			const handleLoadingStatusChange = useStableCallback((status) => {
				onLoadingStatusChangeProp?.(status);
				setRootImageLoadingStatus(status);
			});
			useIsoLayoutEffect(() => {
				if (imageLoadingStatus !== "idle") handleLoadingStatusChange(imageLoadingStatus);
			}, [imageLoadingStatus, handleLoadingStatusChange]);
			useIsoLayoutEffect(() => {
				return () => setRootImageLoadingStatus("idle");
			}, [setRootImageLoadingStatus]);
			useOpenChangeComplete({
				enabled: !isVisible,
				open: isVisible,
				ref: imageRef,
				onComplete() {
					if (!isVisible) setMounted(false);
				}
			});
			const state = {
				imageLoadingStatus,
				transitionStatus: keepMounted && transitionStatus === "ending" ? void 0 : transitionStatus
			};
			const shouldRender = keepMounted || mounted;
			const sourceProps = {};
			if (sizes !== void 0) sourceProps.sizes = sizes;
			if (srcSet !== void 0) sourceProps.srcSet = srcSet;
			if (src !== void 0) sourceProps.src = src;
			const element = useRenderElement("img", componentProps, {
				state,
				ref: [forwardedRef, imageRef],
				props: [
					renderedStatusProps,
					elementProps,
					sourceProps
				],
				stateAttributesMapping,
				enabled: shouldRender
			});
			if (!shouldRender) return null;
			return element;
		});
		AvatarImage.displayName = "AvatarImage";
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/avatar/fallback/AvatarFallback.mjs
var import_react$1, AvatarFallback;
function init_AvatarFallback() {
	return (init_AvatarFallback = __esmMin((() => {
		import_react$1 = /* @__PURE__ */ __toESM(require_react(), 1);
		init_useTimeout();
		init_useRenderElement();
		init_AvatarRootContext();
		init_stateAttributesMapping();
		AvatarFallback = /*#__PURE__*/ import_react$1.forwardRef(function AvatarFallback(componentProps, forwardedRef) {
			const { className, render, delay = 0, style, ...elementProps } = componentProps;
			const { imageLoadingStatus } = useAvatarRootContext();
			const [delayPassed, setDelayPassed] = import_react$1.useState(delay === 0);
			const timeout = useTimeout();
			import_react$1.useEffect(() => {
				if (delay > 0) timeout.start(delay, () => setDelayPassed(true));
				else setDelayPassed(true);
				return timeout.clear;
			}, [timeout, delay]);
			return useRenderElement("span", componentProps, {
				state: { imageLoadingStatus },
				ref: forwardedRef,
				props: elementProps,
				stateAttributesMapping: avatarStateAttributesMapping,
				enabled: imageLoadingStatus !== "loaded" && (delay === 0 || delayPassed)
			});
		});
		AvatarFallback.displayName = "AvatarFallback";
	})))();
}
//#endregion
//#region ../packages/ui/src/avatar/style.module.css
var root, image, fallback, style_module_default;
function init_style_module() {
	return (init_style_module = __esmMin((() => {
		root = "_root_58x39_5";
		image = "_image_58x39_56";
		fallback = "_fallback_58x39_57";
		style_module_default = {
			root,
			"is-square": "_is-square_58x39_32",
			"is-xs": "_is-xs_58x39_36",
			"is-sm": "_is-sm_58x39_41",
			"is-lg": "_is-lg_58x39_46",
			"is-xl": "_is-xl_58x39_51",
			image,
			fallback,
			"person-icon": "_person-icon_58x39_102"
		};
	})))();
}
//#endregion
//#region ../packages/ui/src/avatar/root.tsx
var import_jsx_dev_runtime$5, _jsxFileName$5, Root;
function init_root() {
	return (init_root = __esmMin((() => {
		init_AvatarRoot();
		init_clsx();
		init_react();
		init_resets_module();
		init_global_css_defense_module();
		init_style_module();
		import_jsx_dev_runtime$5 = require_jsx_dev_runtime();
		_jsxFileName$5 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/avatar/root.tsx";
		Root = (0, import_react$6.forwardRef)(function AvatarRoot$1({ size = "md", shape = "circle", className, ...props }, ref) {
			return /* @__PURE__ */ (0, import_jsx_dev_runtime$5.jsxDEV)(AvatarRoot, {
				ref,
				className: clsx(resets_module_default["box-sizing"], global_css_defense_module_default.span, style_module_default.root, style_module_default[`is-${size}`], shape === "square" && style_module_default["is-square"], className),
				...props
			}, void 0, false, {
				fileName: _jsxFileName$5,
				lineNumber: 31,
				columnNumber: 4
			}, this);
		});
		try {
			Root.__docgenInfo = {
				"description": "Displays a profile image with a customizable fallback.\nCompose with `Avatar.Image` and `Avatar.Fallback`.\n\nFor an avatar that identifies a person, use `role=\"img\"` and `aria-label`\non the root, with an empty image `alt`. This keeps the name available while\nthe image loads or the fallback is shown. Use `aria-hidden` on the root\nwhen nearby text already identifies the person.\n\n```jsx\n<Avatar.Root role=\"img\" aria-label=\"Alex Morgan\">\n	<Avatar.Fallback delay={300}>AM</Avatar.Fallback>\n	<Avatar.Image src=\"/alex.jpg\" alt=\"\" />\n</Avatar.Root>\n```",
				"displayName": "Root",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/avatar/root.tsx",
				"methods": [],
				"props": {
					"className": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/utils/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "CSS class name to apply to the element.",
						"name": "className",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"style": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/utils/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "CSS style to apply to the element.",
						"name": "style",
						"required": false,
						"tags": {},
						"type": { "name": "CSSProperties" }
					},
					"render": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/utils/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Replaces the component's default HTML element using a given React\nelement, or a function that returns a React element.",
						"name": "render",
						"required": false,
						"tags": {},
						"type": { "name": "ComponentRenderFn<HTMLAttributesWithRef<any>> | ReactElement<Record<string, unknown>, string | JSXElementConstructor<any>>" }
					},
					"size": {
						"defaultValue": { "value": "md" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/avatar/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The size of the avatar: `xs` (16px), `sm` (24px), `md` (32px),\n`lg` (40px), or `xl` (64px) with the default design tokens.",
						"name": "size",
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "\"xs\" | \"sm\" | \"md\" | \"lg\" | \"xl\"",
							"value": [
								{ "value": "\"xs\"" },
								{ "value": "\"sm\"" },
								{ "value": "\"md\"" },
								{ "value": "\"lg\"" },
								{ "value": "\"xl\"" }
							]
						}
					},
					"shape": {
						"defaultValue": { "value": "circle" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/avatar/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The shape of the avatar. Square avatars use the theme's corner radius\nfor buttons and controls. Circles keep their shape in every theme.",
						"name": "shape",
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "\"square\" | \"circle\"",
							"value": [{ "value": "\"square\"" }, { "value": "\"circle\"" }]
						}
					},
					"children": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/avatar/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The avatar image, fallback, and any custom decorations.",
						"name": "children",
						"required": false,
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
//#region ../packages/ui/src/avatar/image.tsx
var import_jsx_dev_runtime$4, _jsxFileName$4, Image;
function init_image() {
	return (init_image = __esmMin((() => {
		init_AvatarImage();
		init_clsx();
		init_react();
		init_style_module();
		import_jsx_dev_runtime$4 = require_jsx_dev_runtime();
		_jsxFileName$4 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/avatar/image.tsx";
		Image = (0, import_react$6.forwardRef)(function AvatarImage$1({ className, ...props }, ref) {
			return /* @__PURE__ */ (0, import_jsx_dev_runtime$4.jsxDEV)(AvatarImage, {
				ref,
				className: clsx(style_module_default.image, className),
				...props
			}, void 0, false, {
				fileName: _jsxFileName$4,
				lineNumber: 18,
				columnNumber: 4
			}, this);
		});
		try {
			Image.__docgenInfo = {
				"description": "The profile image, displayed once it has loaded.\nSet `keepMounted` to render the image element immediately and let the image\nload in place. Use it with `loading=\"lazy\"` or an optimized image component\npassed through `render`.\nWhen passing a custom image component through `render`, forward its ref and\nimage props, including `onLoad` and `onError`, to the underlying image element.",
				"displayName": "Image",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/avatar/image.tsx",
				"methods": [],
				"props": {
					"style": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/utils/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "CSS style to apply to the element.",
						"name": "style",
						"required": false,
						"tags": {},
						"type": { "name": "CSSProperties" }
					},
					"className": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/utils/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "CSS class name to apply to the element.",
						"name": "className",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"render": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/utils/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Replaces the component's default HTML element using a given React\nelement, or a function that returns a React element.",
						"name": "render",
						"required": false,
						"tags": {},
						"type": { "name": "ComponentRenderFn<HTMLAttributesWithRef<any>> | ReactElement<Record<string, unknown>, string | JSXElementConstructor<any>>" }
					},
					"keepMounted": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/avatar/image/AvatarImage.d.mts",
							"name": "AvatarImageProps"
						}],
						"description": "Whether the image element stays mounted and loads in place instead of being preloaded.\nSupports `loading=\"lazy\"` and optimized image components such as `next/image`.",
						"name": "keepMounted",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/avatar/image/AvatarImage.d.mts",
							"name": "AvatarImageProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"onLoadingStatusChange": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/avatar/image/AvatarImage.d.mts",
							"name": "AvatarImageProps"
						}],
						"description": "Callback fired when the loading status changes.",
						"name": "onLoadingStatusChange",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/avatar/image/AvatarImage.d.mts",
							"name": "AvatarImageProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "((status: ImageLoadingStatus) => void)" }
					},
					"src": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/avatar/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The URL of the image to display.",
						"name": "src",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"alt": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/avatar/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Alternative text for the image.",
						"name": "alt",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/ui/src/avatar/fallback-with-loading-delay.tsx
function FallbackElement({ elementProps, render, state, enabled }) {
	return useRender({
		defaultTagName: "span",
		render: typeof render === "function" ? (props) => render(props, state) : render,
		props: { ...elementProps },
		enabled
	});
}
var import_jsx_dev_runtime$3, _jsxFileName$3, FallbackWithLoadingDelay;
function init_fallback_with_loading_delay() {
	return (init_fallback_with_loading_delay = __esmMin((() => {
		init_useRender();
		init_AvatarFallback();
		init_react();
		import_jsx_dev_runtime$3 = require_jsx_dev_runtime();
		_jsxFileName$3 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/avatar/fallback-with-loading-delay.tsx";
		FallbackWithLoadingDelay = (0, import_react$6.forwardRef)(function AvatarFallbackWithLoadingDelay({ delay = 0, render, ...props }, ref) {
			const [delayPassed, setDelayPassed] = (0, import_react$6.useState)(delay === 0);
			(0, import_react$6.useEffect)(() => {
				if (delay === 0) {
					setDelayPassed(true);
					return;
				}
				const timeout = setTimeout(() => setDelayPassed(true), delay);
				return () => clearTimeout(timeout);
			}, [delay]);
			return /* @__PURE__ */ (0, import_jsx_dev_runtime$3.jsxDEV)(AvatarFallback, {
				...props,
				ref,
				delay: 0,
				render: (elementProps, state) => /* @__PURE__ */ (0, import_jsx_dev_runtime$3.jsxDEV)(FallbackElement, {
					elementProps,
					render,
					state,
					enabled: state.imageLoadingStatus !== "loading" || delayPassed
				}, void 0, false, {
					fileName: _jsxFileName$3,
					lineNumber: 58,
					columnNumber: 5
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName$3,
				lineNumber: 53,
				columnNumber: 3
			}, this);
		});
		try {
			FallbackWithLoadingDelay.__docgenInfo = {
				"description": "Work around Base UI delaying fallbacks for missing and failed images.\nRemove this adapter and use _Avatar.Fallback directly once the installed\nversion bypasses delay for idle and error states.\nhttps://github.com/mui/base-ui/issues/5988",
				"displayName": "FallbackWithLoadingDelay",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/avatar/fallback-with-loading-delay.tsx",
				"methods": [],
				"props": {
					"style": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/internals/types.d.mts",
							"name": "TypeLiteral"
						}],
						"description": "Style applied to the element, or a function that\nreturns a style object based on the component's state.",
						"name": "style",
						"required": false,
						"tags": {},
						"type": { "name": "CSSProperties | ((state: AvatarFallbackState) => CSSProperties)" }
					},
					"className": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/internals/types.d.mts",
							"name": "TypeLiteral"
						}],
						"description": "CSS class applied to the element, or a function that\nreturns a class based on the component's state.",
						"name": "className",
						"required": false,
						"tags": {},
						"type": { "name": "string | ((state: AvatarFallbackState) => string)" }
					},
					"render": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/internals/types.d.mts",
							"name": "TypeLiteral"
						}],
						"description": "Allows you to replace the component's HTML element\nwith a different tag, or compose it with another component.\n\nAccepts a `ReactElement` or a function that returns the element to render.",
						"name": "render",
						"required": false,
						"tags": {},
						"type": { "name": "ReactElement<unknown, string | JSXElementConstructor<any>> | ComponentRenderFn<HTMLProps, AvatarFallbackState>" }
					},
					"delay": {
						"defaultValue": { "value": "0" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/avatar/fallback/AvatarFallback.d.mts",
							"name": "AvatarFallbackProps"
						}],
						"description": "How long to wait before showing the fallback. Specified in milliseconds.",
						"name": "delay",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/avatar/fallback/AvatarFallback.d.mts",
							"name": "AvatarFallbackProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "number" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/ui/src/avatar/fallback.tsx
var import_jsx_dev_runtime$2, _jsxFileName$2, person, Fallback;
function init_fallback() {
	return (init_fallback = __esmMin((() => {
		init_clsx();
		init_react();
		init_svg();
		init_icon();
		init_fallback_with_loading_delay();
		init_global_css_defense_module();
		init_style_module();
		import_jsx_dev_runtime$2 = require_jsx_dev_runtime();
		_jsxFileName$2 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/avatar/fallback.tsx";
		person = /* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)(SVG, {
			xmlns: "http://www.w3.org/2000/svg",
			viewBox: "0 0 24 24",
			style: { fill: "none" },
			stroke: "currentColor",
			strokeWidth: 1.5,
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)(Circle, {
				cx: 12,
				cy: 8,
				r: 5
			}, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 18,
				columnNumber: 3
			}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)(Path, { d: "M20 21a8 8 0 0 0-16 0" }, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 19,
				columnNumber: 3
			}, void 0)]
		}, void 0, true, {
			fileName: _jsxFileName$2,
			lineNumber: 11,
			columnNumber: 2
		}, void 0);
		Fallback = (0, import_react$6.forwardRef)(function AvatarFallback({ className, children = /* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)(Icon, {
			icon: person,
			role: "presentation",
			className: style_module_default["person-icon"]
		}, void 0, false, {
			fileName: _jsxFileName$2,
			lineNumber: 37,
			columnNumber: 5
		}, this), ...props }, ref) {
			return /* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)(FallbackWithLoadingDelay, {
				ref,
				className: clsx(style_module_default.fallback, global_css_defense_module_default.span, className),
				...props,
				children
			}, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 48,
				columnNumber: 4
			}, this);
		});
		try {
			Fallback.__docgenInfo = {
				"description": "The content shown while the image loads, when it fails, or when no image\nis provided. Without children, displays a borderless person icon.\nSupply initials, an icon, or other content to customize the fallback.\nDirect SVG children scale with the avatar; inline styles can override their size.\nUse `delay` to postpone showing the fallback while an image is loading.\nMissing and failed images show the fallback immediately.\nThe delay starts when this part mounts, not when each image request starts.",
				"displayName": "Fallback",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/avatar/fallback.tsx",
				"methods": [],
				"props": {
					"delay": {
						"defaultValue": { "value": "0" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/avatar/fallback/AvatarFallback.d.mts",
							"name": "AvatarFallbackProps"
						}],
						"description": "How long to wait before showing the fallback. Specified in milliseconds.",
						"name": "delay",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/avatar/fallback/AvatarFallback.d.mts",
							"name": "AvatarFallbackProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "number" }
					},
					"className": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/utils/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "CSS class name to apply to the element.",
						"name": "className",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"style": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/utils/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "CSS style to apply to the element.",
						"name": "style",
						"required": false,
						"tags": {},
						"type": { "name": "CSSProperties" }
					},
					"render": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/utils/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Replaces the component's default HTML element using a given React\nelement, or a function that returns a React element.",
						"name": "render",
						"required": false,
						"tags": {},
						"type": { "name": "ComponentRenderFn<HTMLAttributesWithRef<any>> | ReactElement<Record<string, unknown>, string | JSXElementConstructor<any>>" }
					},
					"children": {
						"defaultValue": { "value": "(\n				<Icon\n					icon={ person }\n					role=\"presentation\"\n					className={ styles[ 'person-icon' ] }\n				/>\n			)" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/avatar/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Custom fallback content. Omit to display the standard person icon.",
						"name": "children",
						"required": false,
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
//#region ../packages/ui/src/avatar/initials.tsx
var import_jsx_dev_runtime$1, _jsxFileName$1, Initials$1;
function init_initials() {
	return (init_initials = __esmMin((() => {
		init_react();
		init_fallback();
		import_jsx_dev_runtime$1 = require_jsx_dev_runtime();
		_jsxFileName$1 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/avatar/initials.tsx";
		Initials$1 = (0, import_react$6.forwardRef)(function AvatarInitials({ name, locale, ...props }, ref) {
			const segmenter = new Intl.Segmenter(locale, { granularity: "grapheme" });
			const words = name?.trim().split(/\s+/) ?? [];
			const initials = words.filter((_, index) => index === 0 || index === words.length - 1).map((word) => segmenter.segment(word).containing(0)?.segment ?? "").join("").toLocaleUpperCase(locale);
			return /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(Fallback, {
				...props,
				ref,
				children: initials || void 0
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 30,
				columnNumber: 4
			}, this);
		});
		try {
			Initials$1.__docgenInfo = {
				"description": "Shows up to two initials while the image is unavailable.\nUses the first complete character of the first and last whitespace-separated words.\nBlank names display the standard person fallback. For another name convention,\nsupply your own initials through `Avatar.Fallback`.\nCompose as an alternative to `Avatar.Fallback`, not inside it.",
				"displayName": "Initials",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/avatar/initials.tsx",
				"methods": [],
				"props": {
					"style": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/utils/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "CSS style to apply to the element.",
						"name": "style",
						"required": false,
						"tags": {},
						"type": { "name": "CSSProperties" }
					},
					"className": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/utils/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "CSS class name to apply to the element.",
						"name": "className",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"render": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/utils/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Replaces the component's default HTML element using a given React\nelement, or a function that returns a React element.",
						"name": "render",
						"required": false,
						"tags": {},
						"type": { "name": "ComponentRenderFn<HTMLAttributesWithRef<any>> | ReactElement<Record<string, unknown>, string | JSXElementConstructor<any>>" }
					},
					"delay": {
						"defaultValue": { "value": "0" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/avatar/fallback/AvatarFallback.d.mts",
							"name": "AvatarFallbackProps"
						}],
						"description": "How long to wait before showing the fallback. Specified in milliseconds.",
						"name": "delay",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/avatar/fallback/AvatarFallback.d.mts",
							"name": "AvatarFallbackProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "number" }
					},
					"name": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/avatar/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The person's display name. Blank names use the standard person fallback.",
						"name": "name",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"locale": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/avatar/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Locale used for character segmentation and uppercase conversion.\nDefaults to the runtime's locale.",
						"name": "locale",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/ui/src/avatar/stories/index.story.tsx
var import_jsx_dev_runtime, import_react, _jsxFileName, IMAGE_SRC, meta, Default, Square, FallbackOnly, IconFallback, Initials, MissingImage, InTree, FailedImage, Sizes, WithVisibleName, LazyImage, ProfileImage, CustomImage, Gravatar;
function init_index_story() {
	return (init_index_story = __esmMin((() => {
		init_react();
		init_root(), init_image(), init_fallback(), init_initials();
		init_stack();
		init_text();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		import_react = require_react();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/avatar/stories/index.story.tsx";
		IMAGE_SRC = "https://images.unsplash.com/vector-1753200161282-0c2bef060ac4?w=128&h=128&fit=crop&fm=jpg";
		meta = {
			title: "Components/@wordpress-ui/Avatar",
			id: "design-system-components-avatar",
			component: Root,
			subcomponents: {
				"Avatar.Image": Image,
				"Avatar.Fallback": Fallback,
				"Avatar.Initials": Initials$1
			},
			parameters: { componentStatus: {
				status: "use-with-caution",
				whereUsed: "global",
				notes: "API and design may change."
			} },
			args: {
				size: "md",
				role: "img",
				"aria-label": "Alex Morgan"
			},
			render: (args) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Root, {
				...args,
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Fallback, {
					delay: 300,
					children: "AM"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 35,
					columnNumber: 4
				}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Image, {
					src: IMAGE_SRC,
					alt: ""
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 36,
					columnNumber: 4
				}, void 0)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 34,
				columnNumber: 3
			}, void 0)
		};
		Default = {};
		Square = { args: { shape: "square" } };
		FallbackOnly = { render: (args) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Root, {
			...args,
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Fallback, { children: "AM" }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 55,
				columnNumber: 4
			}, void 0)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 54,
			columnNumber: 3
		}, void 0) };
		IconFallback = { render: (args) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Root, {
			...args,
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Fallback, {}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 64,
				columnNumber: 4
			}, void 0)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 63,
			columnNumber: 3
		}, void 0) };
		Initials = {
			args: { name: "Alex Morgan" },
			argTypes: {
				name: { control: "text" },
				locale: { control: "text" }
			},
			render: ({ name, locale, delay }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Root, {
				role: "img",
				"aria-label": name || "Unknown person",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Initials$1, {
					name,
					locale,
					delay
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 78,
					columnNumber: 4
				}, void 0)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 77,
				columnNumber: 3
			}, void 0)
		};
		MissingImage = { render: (args) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Root, {
			...args,
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Initials$1, {
				name: "Alex Morgan",
				delay: 300
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 87,
				columnNumber: 4
			}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Image, { alt: "" }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 88,
				columnNumber: 4
			}, void 0)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 86,
			columnNumber: 3
		}, void 0) };
		InTree = { render: (args) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			role: "tree",
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				role: "treeitem",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack, {
					align: "center",
					gap: "sm",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Root, {
						...args,
						"aria-hidden": "true",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Initials$1, { name: "Alex Morgan" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 100,
							columnNumber: 7
						}, void 0)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 99,
						columnNumber: 6
					}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { children: "Alex Morgan" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 102,
						columnNumber: 6
					}, void 0)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 98,
					columnNumber: 5
				}, void 0)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 97,
				columnNumber: 4
			}, void 0)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 96,
			columnNumber: 3
		}, void 0) };
		FailedImage = { render: (args) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Root, {
			...args,
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Fallback, {
				delay: 300,
				children: "AM"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 113,
				columnNumber: 4
			}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Image, {
				src: "data:image/png;base64,invalid",
				alt: "",
				keepMounted: true
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 114,
				columnNumber: 4
			}, void 0)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 112,
			columnNumber: 3
		}, void 0) };
		Sizes = {
			name: "Sizes and shapes",
			render: (args) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack, {
				direction: "column",
				gap: "lg",
				children: ["circle", "square"].map((shape) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack, {
					direction: "column",
					gap: "md",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack, {
							gap: "md",
							align: "center",
							children: [
								"xs",
								"sm",
								"md",
								"lg",
								"xl"
							].map((size) => /* @__PURE__ */ (0, import_react.createElement)(Root, {
								...args,
								key: size,
								size,
								shape,
								__self: void 0,
								__source: {
									fileName: _jsxFileName,
									lineNumber: 132,
									columnNumber: 9
								}
							}, /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Fallback, {
								delay: 300,
								children: "AM"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 138,
								columnNumber: 10
							}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Image, {
								src: IMAGE_SRC,
								alt: ""
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 141,
								columnNumber: 10
							}, void 0)))
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 129,
							columnNumber: 6
						}, void 0),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack, {
							gap: "md",
							align: "center",
							children: [
								"xs",
								"sm",
								"md",
								"lg",
								"xl"
							].map((size) => /* @__PURE__ */ (0, import_react.createElement)(Root, {
								...args,
								key: size,
								size,
								shape,
								__self: void 0,
								__source: {
									fileName: _jsxFileName,
									lineNumber: 149,
									columnNumber: 9
								}
							}, /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Fallback, { children: "AM" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 155,
								columnNumber: 10
							}, void 0)))
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 146,
							columnNumber: 6
						}, void 0),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack, {
							gap: "md",
							align: "center",
							children: [
								"xs",
								"sm",
								"md",
								"lg",
								"xl"
							].map((size) => /* @__PURE__ */ (0, import_react.createElement)(Root, {
								...args,
								key: size,
								size,
								shape,
								__self: void 0,
								__source: {
									fileName: _jsxFileName,
									lineNumber: 163,
									columnNumber: 9
								}
							}, /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Fallback, {}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 169,
								columnNumber: 10
							}, void 0)))
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 160,
							columnNumber: 6
						}, void 0)
					]
				}, shape, true, {
					fileName: _jsxFileName,
					lineNumber: 128,
					columnNumber: 5
				}, void 0))
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 126,
				columnNumber: 3
			}, void 0)
		};
		WithVisibleName = {
			args: { size: "sm" },
			render: (args) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack, {
				direction: "column",
				gap: "md",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack, {
						gap: "sm",
						align: "center",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Root, {
							...args,
							"aria-hidden": "true",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Fallback, {
								delay: 300,
								children: "AM"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 187,
								columnNumber: 6
							}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Image, {
								src: IMAGE_SRC,
								alt: ""
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 188,
								columnNumber: 6
							}, void 0)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 186,
							columnNumber: 5
						}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { children: "Alex Morgan" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 190,
							columnNumber: 5
						}, void 0)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 185,
						columnNumber: 4
					}, void 0),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack, {
						gap: "sm",
						align: "center",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Root, {
							...args,
							"aria-hidden": "true",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Fallback, { children: "AM" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 194,
								columnNumber: 6
							}, void 0)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 193,
							columnNumber: 5
						}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { children: "Alex Morgan" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 196,
							columnNumber: 5
						}, void 0)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 192,
						columnNumber: 4
					}, void 0),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack, {
						gap: "sm",
						align: "center",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Root, {
							...args,
							"aria-hidden": "true",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Fallback, {}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 200,
								columnNumber: 6
							}, void 0)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 199,
							columnNumber: 5
						}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { children: "Alex Morgan" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 202,
							columnNumber: 5
						}, void 0)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 198,
						columnNumber: 4
					}, void 0)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 184,
				columnNumber: 3
			}, void 0)
		};
		LazyImage = { render: (args) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Root, {
			...args,
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Fallback, {
				delay: 300,
				children: "AM"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 212,
				columnNumber: 4
			}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Image, {
				src: IMAGE_SRC,
				alt: "",
				keepMounted: true,
				loading: "lazy"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 213,
				columnNumber: 4
			}, void 0)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 211,
			columnNumber: 3
		}, void 0) };
		ProfileImage = (0, import_react$6.forwardRef)(function UnforwardedProfileImage(props, ref) {
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
				alt: "",
				...props,
				ref
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 222,
				columnNumber: 9
			}, this);
		});
		CustomImage = { render: (args) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Root, {
			...args,
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Fallback, {
				delay: 300,
				children: "AM"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 232,
				columnNumber: 4
			}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Image, {
				keepMounted: true,
				render: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ProfileImage, {
					src: IMAGE_SRC,
					alt: ""
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 235,
					columnNumber: 14
				}, void 0)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 233,
				columnNumber: 4
			}, void 0)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 231,
			columnNumber: 3
		}, void 0) };
		Gravatar = { render: (args) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Root, {
			...args,
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Fallback, {
				delay: 300,
				children: "AM"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 245,
				columnNumber: 4
			}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Image, {
				src: "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=identicon&f=y&s=96",
				alt: "",
				keepMounted: true
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 246,
				columnNumber: 4
			}, void 0)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 244,
			columnNumber: 3
		}, void 0) };
		try {
			Square.__docgenInfo = {
				"description": "Square avatars use the theme's corner radius for buttons and controls.",
				"displayName": "Square",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/avatar/stories/index.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			FallbackOnly.__docgenInfo = {
				"description": "Supply initials as fallback content.",
				"displayName": "FallbackOnly",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/avatar/stories/index.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			IconFallback.__docgenInfo = {
				"description": "Omit fallback content to display the borderless person silhouette.",
				"displayName": "IconFallback",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/avatar/stories/index.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			Initials.__docgenInfo = {
				"description": "Derive complete initials from a display name, or use the person silhouette.",
				"displayName": "Initials",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/avatar/stories/index.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			MissingImage.__docgenInfo = {
				"description": "Missing images display the fallback immediately despite a delay.",
				"displayName": "MissingImage",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/avatar/stories/index.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			InTree.__docgenInfo = {
				"description": "Decorative avatars retain their layout inside an admin tree item.",
				"displayName": "InTree",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/avatar/stories/index.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			FailedImage.__docgenInfo = {
				"description": "An image that fails to load leaves the fallback visible.",
				"displayName": "FailedImage",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/avatar/stories/index.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			WithVisibleName.__docgenInfo = {
				"description": "Hide the avatar from assistive technology when the name is shown beside it.",
				"displayName": "WithVisibleName",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/avatar/stories/index.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			LazyImage.__docgenInfo = {
				"description": "Use `keepMounted` to let the browser load the image lazily.",
				"displayName": "LazyImage",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/avatar/stories/index.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			CustomImage.__docgenInfo = {
				"description": "When passing a custom image component through `render`, forward the ref and\nimage props, including `onLoad` and `onError`, to the underlying image element.",
				"displayName": "CustomImage",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/avatar/stories/index.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			Gravatar.__docgenInfo = {
				"description": "Pass a Gravatar URL to `Avatar.Image` through its `src` prop.",
				"displayName": "Gravatar",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/avatar/stories/index.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
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
		Square.parameters = {
			...Square.parameters,
			docs: {
				...Square.parameters?.docs,
				source: {
					originalSource: "{\n  args: {\n    shape: 'square'\n  }\n}",
					...Square.parameters?.docs?.source
				},
				description: {
					story: "Square avatars use the theme's corner radius for buttons and controls.",
					...Square.parameters?.docs?.description
				}
			}
		};
		FallbackOnly.parameters = {
			...FallbackOnly.parameters,
			docs: {
				...FallbackOnly.parameters?.docs,
				source: {
					originalSource: "{\n  render: args => <Avatar.Root {...args}>\n            <Avatar.Fallback>AM</Avatar.Fallback>\n        </Avatar.Root>\n}",
					...FallbackOnly.parameters?.docs?.source
				},
				description: {
					story: "Supply initials as fallback content.",
					...FallbackOnly.parameters?.docs?.description
				}
			}
		};
		IconFallback.parameters = {
			...IconFallback.parameters,
			docs: {
				...IconFallback.parameters?.docs,
				source: {
					originalSource: "{\n  render: args => <Avatar.Root {...args}>\n            <Avatar.Fallback />\n        </Avatar.Root>\n}",
					...IconFallback.parameters?.docs?.source
				},
				description: {
					story: "Omit fallback content to display the borderless person silhouette.",
					...IconFallback.parameters?.docs?.description
				}
			}
		};
		Initials.parameters = {
			...Initials.parameters,
			docs: {
				...Initials.parameters?.docs,
				source: {
					originalSource: "{\n  args: {\n    name: 'Alex Morgan'\n  },\n  argTypes: {\n    name: {\n      control: 'text'\n    },\n    locale: {\n      control: 'text'\n    }\n  },\n  render: ({\n    name,\n    locale,\n    delay\n  }) => <Avatar.Root role=\"img\" aria-label={name || 'Unknown person'}>\n            <Avatar.Initials name={name} locale={locale} delay={delay} />\n        </Avatar.Root>\n}",
					...Initials.parameters?.docs?.source
				},
				description: {
					story: "Derive complete initials from a display name, or use the person silhouette.",
					...Initials.parameters?.docs?.description
				}
			}
		};
		MissingImage.parameters = {
			...MissingImage.parameters,
			docs: {
				...MissingImage.parameters?.docs,
				source: {
					originalSource: "{\n  render: args => <Avatar.Root {...args}>\n            <Avatar.Initials name=\"Alex Morgan\" delay={300} />\n            <Avatar.Image alt=\"\" />\n        </Avatar.Root>\n}",
					...MissingImage.parameters?.docs?.source
				},
				description: {
					story: "Missing images display the fallback immediately despite a delay.",
					...MissingImage.parameters?.docs?.description
				}
			}
		};
		InTree.parameters = {
			...InTree.parameters,
			docs: {
				...InTree.parameters?.docs,
				source: {
					originalSource: "{\n  render: args => <div role=\"tree\">\n            <div role=\"treeitem\">\n                <Stack align=\"center\" gap=\"sm\">\n                    <Avatar.Root {...args} aria-hidden=\"true\">\n                        <Avatar.Initials name=\"Alex Morgan\" />\n                    </Avatar.Root>\n                    <Text>Alex Morgan</Text>\n                </Stack>\n            </div>\n        </div>\n}",
					...InTree.parameters?.docs?.source
				},
				description: {
					story: "Decorative avatars retain their layout inside an admin tree item.",
					...InTree.parameters?.docs?.description
				}
			}
		};
		FailedImage.parameters = {
			...FailedImage.parameters,
			docs: {
				...FailedImage.parameters?.docs,
				source: {
					originalSource: "{\n  render: args => <Avatar.Root {...args}>\n            <Avatar.Fallback delay={300}>AM</Avatar.Fallback>\n            <Avatar.Image src=\"data:image/png;base64,invalid\" alt=\"\" keepMounted />\n        </Avatar.Root>\n}",
					...FailedImage.parameters?.docs?.source
				},
				description: {
					story: "An image that fails to load leaves the fallback visible.",
					...FailedImage.parameters?.docs?.description
				}
			}
		};
		Sizes.parameters = {
			...Sizes.parameters,
			docs: {
				...Sizes.parameters?.docs,
				source: {
					originalSource: "{\n  name: 'Sizes and shapes',\n  render: args => <Stack direction=\"column\" gap=\"lg\">\n            {(['circle', 'square'] as const).map(shape => <Stack key={shape} direction=\"column\" gap=\"md\">\n                    <Stack gap=\"md\" align=\"center\">\n                        {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map(size => <Avatar.Root {...args} key={size} size={size} shape={shape}>\n                                    <Avatar.Fallback delay={300}>\n                                        AM\n                                    </Avatar.Fallback>\n                                    <Avatar.Image src={IMAGE_SRC} alt=\"\" />\n                                </Avatar.Root>)}\n                    </Stack>\n                    <Stack gap=\"md\" align=\"center\">\n                        {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map(size => <Avatar.Root {...args} key={size} size={size} shape={shape}>\n                                    <Avatar.Fallback>AM</Avatar.Fallback>\n                                </Avatar.Root>)}\n                    </Stack>\n                    <Stack gap=\"md\" align=\"center\">\n                        {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map(size => <Avatar.Root {...args} key={size} size={size} shape={shape}>\n                                    <Avatar.Fallback />\n                                </Avatar.Root>)}\n                    </Stack>\n                </Stack>)}\n        </Stack>\n}",
					...Sizes.parameters?.docs?.source
				}
			}
		};
		WithVisibleName.parameters = {
			...WithVisibleName.parameters,
			docs: {
				...WithVisibleName.parameters?.docs,
				source: {
					originalSource: "{\n  args: {\n    size: 'sm'\n  },\n  render: args => <Stack direction=\"column\" gap=\"md\">\n            <Stack gap=\"sm\" align=\"center\">\n                <Avatar.Root {...args} aria-hidden=\"true\">\n                    <Avatar.Fallback delay={300}>AM</Avatar.Fallback>\n                    <Avatar.Image src={IMAGE_SRC} alt=\"\" />\n                </Avatar.Root>\n                <Text>Alex Morgan</Text>\n            </Stack>\n            <Stack gap=\"sm\" align=\"center\">\n                <Avatar.Root {...args} aria-hidden=\"true\">\n                    <Avatar.Fallback>AM</Avatar.Fallback>\n                </Avatar.Root>\n                <Text>Alex Morgan</Text>\n            </Stack>\n            <Stack gap=\"sm\" align=\"center\">\n                <Avatar.Root {...args} aria-hidden=\"true\">\n                    <Avatar.Fallback />\n                </Avatar.Root>\n                <Text>Alex Morgan</Text>\n            </Stack>\n        </Stack>\n}",
					...WithVisibleName.parameters?.docs?.source
				},
				description: {
					story: "Hide the avatar from assistive technology when the name is shown beside it.",
					...WithVisibleName.parameters?.docs?.description
				}
			}
		};
		LazyImage.parameters = {
			...LazyImage.parameters,
			docs: {
				...LazyImage.parameters?.docs,
				source: {
					originalSource: "{\n  render: args => <Avatar.Root {...args}>\n            <Avatar.Fallback delay={300}>AM</Avatar.Fallback>\n            <Avatar.Image src={IMAGE_SRC} alt=\"\" keepMounted loading=\"lazy\" />\n        </Avatar.Root>\n}",
					...LazyImage.parameters?.docs?.source
				},
				description: {
					story: "Use `keepMounted` to let the browser load the image lazily.",
					...LazyImage.parameters?.docs?.description
				}
			}
		};
		CustomImage.parameters = {
			...CustomImage.parameters,
			docs: {
				...CustomImage.parameters?.docs,
				source: {
					originalSource: "{\n  render: args => <Avatar.Root {...args}>\n            <Avatar.Fallback delay={300}>AM</Avatar.Fallback>\n            <Avatar.Image keepMounted render={<ProfileImage src={IMAGE_SRC} alt=\"\" />} />\n        </Avatar.Root>\n}",
					...CustomImage.parameters?.docs?.source
				},
				description: {
					story: "When passing a custom image component through `render`, forward the ref and\nimage props, including `onLoad` and `onError`, to the underlying image element.",
					...CustomImage.parameters?.docs?.description
				}
			}
		};
		Gravatar.parameters = {
			...Gravatar.parameters,
			docs: {
				...Gravatar.parameters?.docs,
				source: {
					originalSource: "{\n  render: args => <Avatar.Root {...args}>\n            <Avatar.Fallback delay={300}>AM</Avatar.Fallback>\n            <Avatar.Image src=\"https://www.gravatar.com/avatar/00000000000000000000000000000000?d=identicon&f=y&s=96\" alt=\"\" keepMounted />\n        </Avatar.Root>\n}",
					...Gravatar.parameters?.docs?.source
				},
				description: {
					story: "Pass a Gravatar URL to `Avatar.Image` through its `src` prop.",
					...Gravatar.parameters?.docs?.description
				}
			}
		};
	})))();
}
//#endregion
init_index_story();
export { CustomImage, Default, FailedImage, FallbackOnly, Gravatar, IconFallback, InTree, Initials, LazyImage, MissingImage, Sizes, Square, WithVisibleName, meta as default };
