import { n as __esmMin, o as __toESM } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_react } from "./react-Bujh4FgW.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C1RZKCc6.js";
import { n as init_react, t as import_react$5 } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { a as init_clsx, i as clsx } from "./iframe-UtSZlYID.js";
import { d as NOOP, f as init_empty, r as useRenderElement, t as init_useRenderElement } from "./useRenderElement-Dkv6YH0v.js";
import { n as useIsoLayoutEffect, t as init_useIsoLayoutEffect } from "./useIsoLayoutEffect-DDc8Lhn-.js";
import { n as useStableCallback, t as init_useStableCallback } from "./useStableCallback-Cql5w11m.js";
import { a as init_useOpenChangeComplete, i as transitionStatusMapping, n as useTransitionStatus, o as useOpenChangeComplete, r as init_stateAttributesMapping$1, t as init_useTransitionStatus } from "./useTransitionStatus-DtGN_KnE.js";
import { n as init_useTimeout, r as useTimeout } from "./useTimeout-Cl_2zLqB.js";
import { n as warning, t as init_build_module } from "./build-module-B5spW8IS.js";
import { a as SVG, o as init_svg, r as Path, t as Circle } from "./svg-BLFZKYXr.js";
import { n as useRender, t as init_useRender } from "./useRender-JXgJ-9ZS.js";
import { n as resets_module_default, t as init_resets_module } from "./resets.module-CJil9Bz6.js";
import { n as init_global_css_defense_module, t as global_css_defense_module_default } from "./global-css-defense.module-BTDDc07p.js";
import { n as init_button, t as Button } from "./button--ei7vTao.js";
import { n as init_icon, t as Icon } from "./icon-LzGYYnN1.js";
import { n as init_text, t as Text } from "./text-wjaOyqYP.js";
import { n as init_stack, t as Stack } from "./stack-B_tyTWv7.js";
//#region ../node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/avatar/root/AvatarRootContext.mjs
function useAvatarRootContext() {
	const context = import_react$4.useContext(AvatarRootContext);
	if (context === void 0) throw new Error("Base UI: AvatarRootContext is missing. Avatar parts must be placed within <Avatar.Root>.");
	return context;
}
var import_react$4, AvatarRootContext;
function init_AvatarRootContext() {
	return (init_AvatarRootContext = __esmMin((() => {
		import_react$4 = /* @__PURE__ */ __toESM(require_react(), 1);
		AvatarRootContext = /*#__PURE__*/ import_react$4.createContext(void 0);
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
var import_react$3, import_jsx_runtime, AvatarRoot;
function init_AvatarRoot() {
	return (init_AvatarRoot = __esmMin((() => {
		import_react$3 = /* @__PURE__ */ __toESM(require_react(), 1);
		init_useRenderElement();
		init_AvatarRootContext();
		init_stateAttributesMapping();
		import_jsx_runtime = require_jsx_runtime();
		AvatarRoot = /*#__PURE__*/ import_react$3.forwardRef(function AvatarRoot(componentProps, forwardedRef) {
			const { className, render, style, ...elementProps } = componentProps;
			const [imageLoadingStatus, setImageLoadingStatus] = import_react$3.useState("idle");
			const state = { imageLoadingStatus };
			const contextValue = import_react$3.useMemo(() => ({
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
	const state = import_react$2.useState("idle");
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
var import_react$2;
function init_useImageLoadingStatus() {
	return (init_useImageLoadingStatus = __esmMin((() => {
		import_react$2 = /* @__PURE__ */ __toESM(require_react(), 1);
		init_useIsoLayoutEffect();
		init_empty();
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/avatar/image/AvatarImage.mjs
var import_react$1, stateAttributesMapping, AvatarImage;
function init_AvatarImage() {
	return (init_AvatarImage = __esmMin((() => {
		import_react$1 = /* @__PURE__ */ __toESM(require_react(), 1);
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
		AvatarImage = /*#__PURE__*/ import_react$1.forwardRef(function AvatarImage(componentProps, forwardedRef) {
			const { className, render, onLoadingStatusChange: onLoadingStatusChangeProp, keepMounted = false, style, sizes, srcSet, src, ...elementProps } = componentProps;
			const { setImageLoadingStatus: setRootImageLoadingStatus } = useAvatarRootContext();
			const [imageLoadingStatus, setImageLoadingStatus] = useImageLoadingStatus(src, componentProps, !keepMounted);
			const isVisible = imageLoadingStatus === "loaded";
			const { mounted, transitionStatus, setMounted } = useTransitionStatus(isVisible);
			const imageRef = import_react$1.useRef(null);
			const initialCommitRef = import_react$1.useRef(true);
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
var import_react, AvatarFallback;
function init_AvatarFallback() {
	return (init_AvatarFallback = __esmMin((() => {
		import_react = /* @__PURE__ */ __toESM(require_react(), 1);
		init_useTimeout();
		init_useRenderElement();
		init_AvatarRootContext();
		init_stateAttributesMapping();
		AvatarFallback = /*#__PURE__*/ import_react.forwardRef(function AvatarFallback(componentProps, forwardedRef) {
			const { className, render, delay = 0, style, ...elementProps } = componentProps;
			const { imageLoadingStatus } = useAvatarRootContext();
			const [delayPassed, setDelayPassed] = import_react.useState(delay === 0);
			const timeout = useTimeout();
			import_react.useEffect(() => {
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
//#region ../packages/ui/src/avatar/dev-warnings.ts
function warnAvatarColor(color) {
	if (color === void 0) return;
	if (color.match(/\/\*[\s\S]*?(?:\*\/|$)|"(?:\\[\s\S]|[^"\\])*"|'(?:\\[\s\S]|[^'\\])*'|(?:[-\w\u0080-\uFFFF]|\\(?:[\da-fA-F]{1,6}[ \t\r\n\f]?|[^\r\n\f]))+/g)?.some((token) => token.toLowerCase() === "currentcolor")) {
		warning("Avatar.Root: `color` contains `currentColor`, which can produce insufficient contrast in colored fallbacks. Use a color that does not depend on the foreground.");
		return;
	}
	if (typeof CSS === "undefined" || !CSS.supports) return;
	if (!CSS.supports("color", color)) warning("Avatar.Root: The browser does not support the `color` value. Use a valid CSS color supported by this browser.");
	else if (CSS.supports("color", "rgb(from red r g b / 1)") && !CSS.supports("color", `rgb(from ${color} r g b / 1)`)) warning("Avatar.Root: `color` cannot be used as a colored fallback fill. Use an explicit CSS color instead of a CSS-wide keyword such as `inherit`.");
}
function init_dev_warnings() {
	return (init_dev_warnings = __esmMin((() => {
		init_build_module();
	})))();
}
//#endregion
//#region ../packages/ui/src/avatar/style.module.css
var root, image, fallback, style_module_default;
function init_style_module() {
	return (init_style_module = __esmMin((() => {
		root = "_root_769o1_5";
		image = "_image_769o1_68";
		fallback = "_fallback_769o1_69";
		style_module_default = {
			root,
			"has-color": "_has-color_769o1_32",
			"is-square": "_is-square_769o1_44",
			"is-xs": "_is-xs_769o1_48",
			"is-sm": "_is-sm_769o1_53",
			"is-lg": "_is-lg_769o1_58",
			"is-xl": "_is-xl_769o1_63",
			image,
			fallback,
			"person-icon": "_person-icon_769o1_114"
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
		init_dev_warnings();
		init_resets_module();
		init_global_css_defense_module();
		init_style_module();
		import_jsx_dev_runtime$5 = require_jsx_dev_runtime();
		_jsxFileName$5 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/avatar/root.tsx";
		Root = (0, import_react$5.forwardRef)(function AvatarRoot$1({ size = "md", shape = "circle", color, className, style, ...props }, ref) {
			warnAvatarColor(color);
			const customProperties = color === void 0 ? style : {
				...style,
				"--_wp-ui-avatar-color": color
			};
			return /* @__PURE__ */ (0, import_jsx_dev_runtime$5.jsxDEV)(AvatarRoot, {
				ref,
				style: customProperties,
				className: clsx(resets_module_default["box-sizing"], global_css_defense_module_default.span, style_module_default.root, style_module_default[`is-${size}`], shape === "square" && style_module_default["is-square"], color !== void 0 && style_module_default["has-color"], className),
				...props
			}, void 0, false, {
				fileName: _jsxFileName$5,
				lineNumber: 41,
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
					"color": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/avatar/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Colors the image's inner ring or opaque fallback background, automatically\nchoosing a contrasting foreground tint for fallbacks.\n\nAccepts CSS colors and variables that resolve to a color. Do not use\n`currentColor`, including through variables, or CSS-wide keywords such as\n`inherit`. Browsers without support for colored fallbacks use neutral colors.",
						"name": "color",
						"required": false,
						"tags": {},
						"type": { "name": "Color" }
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
							"raw": "\"sm\" | \"md\" | \"lg\" | \"xs\" | \"xl\"",
							"value": [
								{ "value": "\"sm\"" },
								{ "value": "\"md\"" },
								{ "value": "\"lg\"" },
								{ "value": "\"xs\"" },
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
							"raw": "\"circle\" | \"square\"",
							"value": [{ "value": "\"circle\"" }, { "value": "\"square\"" }]
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
		Image = (0, import_react$5.forwardRef)(function AvatarImage$1({ className, ...props }, ref) {
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
		FallbackWithLoadingDelay = (0, import_react$5.forwardRef)(function AvatarFallbackWithLoadingDelay({ delay = 0, render, ...props }, ref) {
			const [delayPassed, setDelayPassed] = (0, import_react$5.useState)(delay === 0);
			(0, import_react$5.useEffect)(() => {
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
		Fallback = (0, import_react$5.forwardRef)(function AvatarFallback({ className, children = /* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)(Icon, {
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
		Initials$1 = (0, import_react$5.forwardRef)(function AvatarInitials({ name, locale, ...props }, ref) {
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
var import_jsx_dev_runtime, _jsxFileName, IMAGE_SRC, meta, Default, WithColor, Interactive, IconFallback, Initials, WithVisibleName;
function init_index_story() {
	return (init_index_story = __esmMin((() => {
		init_root(), init_image(), init_fallback(), init_initials();
		init_button();
		init_stack();
		init_text();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
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
			} }
		};
		Default = {
			args: {
				"aria-label": "Alex Morgan",
				role: "img"
			},
			render: (args) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Root, {
				...args,
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Fallback, {
					delay: 300,
					children: "AM"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 40,
					columnNumber: 4
				}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Image, {
					src: IMAGE_SRC,
					alt: ""
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 41,
					columnNumber: 4
				}, void 0)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 39,
				columnNumber: 3
			}, void 0)
		};
		WithColor = {
			...Default,
			args: {
				...Default.args,
				color: "#008a20"
			},
			render: (args) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack, {
				gap: "md",
				align: "center",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Root, {
						...args,
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Fallback, {}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 53,
							columnNumber: 5
						}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Image, {
							src: IMAGE_SRC,
							alt: ""
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 54,
							columnNumber: 5
						}, void 0)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 52,
						columnNumber: 4
					}, void 0),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Root, {
						...args,
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Initials$1, { name: "Alex Morgan" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 57,
							columnNumber: 5
						}, void 0)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 56,
						columnNumber: 4
					}, void 0),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Root, {
						...args,
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Fallback, {}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 60,
							columnNumber: 5
						}, void 0)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 59,
						columnNumber: 4
					}, void 0)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 51,
				columnNumber: 3
			}, void 0)
		};
		Interactive = { render: (args) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
			variant: "unstyled",
			"aria-label": "Open Alex Morgan's profile",
			style: {
				display: "inline-flex",
				borderRadius: args.shape === "square" ? "var(--wpds-border-radius-sm, 2px)" : "50%"
			},
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Root, {
				...args,
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Initials$1, { name: "Alex Morgan" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 81,
					columnNumber: 5
				}, void 0)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 80,
				columnNumber: 4
			}, void 0)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 69,
			columnNumber: 3
		}, void 0) };
		IconFallback = {
			...Default,
			render: (args) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Root, {
				...args,
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Fallback, {}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 92,
					columnNumber: 4
				}, void 0)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 91,
				columnNumber: 3
			}, void 0)
		};
		Initials = {
			...Default,
			render: (args) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Root, {
				...args,
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Initials$1, { name: "Alex Morgan" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 102,
					columnNumber: 4
				}, void 0)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 101,
				columnNumber: 3
			}, void 0)
		};
		WithVisibleName = { render: (args) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack, {
			gap: "sm",
			align: "center",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Root, {
				...args,
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Initials$1, { name: "Alex Morgan" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 112,
					columnNumber: 5
				}, void 0)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 111,
				columnNumber: 4
			}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { children: "Alex Morgan" }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 114,
				columnNumber: 4
			}, void 0)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 110,
			columnNumber: 3
		}, void 0) };
		try {
			WithColor.__docgenInfo = {
				"description": "Apply the same color to image rings, initials, and person fallbacks.",
				"displayName": "WithColor",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/avatar/stories/index.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			Interactive.__docgenInfo = {
				"description": "Wrap a decorative avatar in a button to make it interactive.",
				"displayName": "Interactive",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/avatar/stories/index.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			IconFallback.__docgenInfo = {
				"description": "Omit fallback content to display the person icon.",
				"displayName": "IconFallback",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/avatar/stories/index.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			Initials.__docgenInfo = {
				"description": "Derive initials from a display name.",
				"displayName": "Initials",
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
		Default.parameters = {
			...Default.parameters,
			docs: {
				...Default.parameters?.docs,
				source: {
					originalSource: "{\n  args: {\n    'aria-label': 'Alex Morgan',\n    role: 'img'\n  },\n  render: args => <Avatar.Root {...args}>\n            <Avatar.Fallback delay={300}>AM</Avatar.Fallback>\n            <Avatar.Image src={IMAGE_SRC} alt=\"\" />\n        </Avatar.Root>\n}",
					...Default.parameters?.docs?.source
				}
			}
		};
		WithColor.parameters = {
			...WithColor.parameters,
			docs: {
				...WithColor.parameters?.docs,
				source: {
					originalSource: "{\n  ...Default,\n  args: {\n    ...Default.args,\n    color: '#008a20'\n  },\n  render: args => <Stack gap=\"md\" align=\"center\">\n            <Avatar.Root {...args}>\n                <Avatar.Fallback />\n                <Avatar.Image src={IMAGE_SRC} alt=\"\" />\n            </Avatar.Root>\n            <Avatar.Root {...args}>\n                <Avatar.Initials name=\"Alex Morgan\" />\n            </Avatar.Root>\n            <Avatar.Root {...args}>\n                <Avatar.Fallback />\n            </Avatar.Root>\n        </Stack>\n}",
					...WithColor.parameters?.docs?.source
				},
				description: {
					story: "Apply the same color to image rings, initials, and person fallbacks.",
					...WithColor.parameters?.docs?.description
				}
			}
		};
		Interactive.parameters = {
			...Interactive.parameters,
			docs: {
				...Interactive.parameters?.docs,
				source: {
					originalSource: "{\n  render: args => <Button variant=\"unstyled\" aria-label=\"Open Alex Morgan's profile\" style={{\n    display: 'inline-flex',\n    borderRadius: args.shape === 'square' ? 'var(--wpds-border-radius-sm)' : '50%'\n  }}>\n            <Avatar.Root {...args} aria-hidden=\"true\">\n                <Avatar.Initials name=\"Alex Morgan\" />\n            </Avatar.Root>\n        </Button>\n}",
					...Interactive.parameters?.docs?.source
				},
				description: {
					story: "Wrap a decorative avatar in a button to make it interactive.",
					...Interactive.parameters?.docs?.description
				}
			}
		};
		IconFallback.parameters = {
			...IconFallback.parameters,
			docs: {
				...IconFallback.parameters?.docs,
				source: {
					originalSource: "{\n  ...Default,\n  render: args => <Avatar.Root {...args}>\n            <Avatar.Fallback />\n        </Avatar.Root>\n}",
					...IconFallback.parameters?.docs?.source
				},
				description: {
					story: "Omit fallback content to display the person icon.",
					...IconFallback.parameters?.docs?.description
				}
			}
		};
		Initials.parameters = {
			...Initials.parameters,
			docs: {
				...Initials.parameters?.docs,
				source: {
					originalSource: "{\n  ...Default,\n  render: args => <Avatar.Root {...args}>\n            <Avatar.Initials name=\"Alex Morgan\" />\n        </Avatar.Root>\n}",
					...Initials.parameters?.docs?.source
				},
				description: {
					story: "Derive initials from a display name.",
					...Initials.parameters?.docs?.description
				}
			}
		};
		WithVisibleName.parameters = {
			...WithVisibleName.parameters,
			docs: {
				...WithVisibleName.parameters?.docs,
				source: {
					originalSource: "{\n  render: args => <Stack gap=\"sm\" align=\"center\">\n            <Avatar.Root {...args} aria-hidden=\"true\">\n                <Avatar.Initials name=\"Alex Morgan\" />\n            </Avatar.Root>\n            <Text>Alex Morgan</Text>\n        </Stack>\n}",
					...WithVisibleName.parameters?.docs?.source
				},
				description: {
					story: "Hide the avatar from assistive technology when the name is shown beside it.",
					...WithVisibleName.parameters?.docs?.description
				}
			}
		};
	})))();
}
//#endregion
init_index_story();
export { Default, IconFallback, Initials, Interactive, WithColor, WithVisibleName, meta as default };
