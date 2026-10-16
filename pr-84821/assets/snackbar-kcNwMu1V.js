import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { n as serialize_default, t as init_serialize } from "./serialize-FHFXmm0_.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as useMergeRefs, t as init_use_merge_refs } from "./use-merge-refs-BAtuPB1L.js";
import { n as __, t as init_build_module } from "./build-module-v04us4E2.js";
import { a as init_clsx, i as clsx } from "./iframe-Dbjzp1_m.js";
import { r as speak, t as init_build_module$1 } from "./build-module-DsAeWnrG.js";
import { n as warning, t as init_build_module$2 } from "./build-module-B5spW8IS.js";
import { n as useIsPresent, t as init_use_presence } from "./use-presence-B_wv2hoY.js";
import { n as init_button, t as Button } from "./button-BqvmAVeL.js";
import { n as init_external_link, t as ExternalLink } from "./external-link-3VHbGn_5.js";
//#region ../packages/components/src/snackbar/index.tsx
/**
* Custom hook which announces the message with the given politeness, if a
* valid message is provided.
*
* @param message    Message to announce.
* @param politeness Politeness to announce.
*/
function useSpokenMessage(message, politeness) {
	const spokenMessage = typeof message === "string" ? message : serialize_default(message);
	(0, import_react.useEffect)(() => {
		if (spokenMessage) speak(spokenMessage, politeness);
	}, [spokenMessage, politeness]);
}
function UnforwardedSnackbar({ className, children, spokenMessage = children, politeness = "polite", actions = [], onRemove, icon = null, explicitDismiss = false, onDismiss, listRef }, ref) {
	const isPresent = useIsPresent();
	const snackbarRef = (0, import_react.useRef)(null);
	const mergedRef = useMergeRefs([snackbarRef, ref]);
	const focusReturnRef = (0, import_react.useRef)(null);
	function onFocus(event) {
		if (!event.currentTarget.contains(event.relatedTarget)) focusReturnRef.current = event.relatedTarget;
	}
	function dismissMe(event) {
		if (event && event.preventDefault) event.preventDefault();
		if (listRef?.current) listRef.current.focus();
		else if (snackbarRef.current?.contains(snackbarRef.current.ownerDocument.activeElement)) {
			if (focusReturnRef.current?.isConnected) focusReturnRef.current.focus({ preventScroll: true });
		}
		onDismiss?.();
		onRemove?.();
	}
	function onActionClick(event, onClick) {
		event.stopPropagation();
		onRemove?.();
		if (onClick) onClick(event);
	}
	useSpokenMessage(spokenMessage, politeness);
	const callbacksRef = (0, import_react.useRef)({
		onDismiss,
		onRemove
	});
	(0, import_react.useLayoutEffect)(() => {
		callbacksRef.current = {
			onDismiss,
			onRemove
		};
	});
	(0, import_react.useEffect)(() => {
		if (explicitDismiss || !isPresent) return;
		const timeoutHandle = setTimeout(() => {
			callbacksRef.current.onDismiss?.();
			callbacksRef.current.onRemove?.();
		}, NOTICE_TIMEOUT);
		return () => clearTimeout(timeoutHandle);
	}, [explicitDismiss, isPresent]);
	const classes = clsx(className, "components-snackbar", { "components-snackbar-explicit-dismiss": !!explicitDismiss });
	if (actions && actions.length > 1) {
		warning("Snackbar can only have one action. Use Notice if your message requires many actions.");
		actions = [actions[0]];
	}
	const snackbarContentClassnames = clsx("components-snackbar__content", { "components-snackbar__content-with-icon": !!icon });
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		ref: mergedRef,
		onFocus,
		className: classes,
		onClick: !explicitDismiss ? dismissMe : void 0,
		tabIndex: 0,
		role: !explicitDismiss ? "button" : void 0,
		onKeyPress: !explicitDismiss ? dismissMe : void 0,
		"aria-label": !explicitDismiss ? __("Dismiss this notice") : void 0,
		"data-testid": "snackbar",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: snackbarContentClassnames,
			children: [
				icon && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "components-snackbar__icon",
					children: icon
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 170,
					columnNumber: 6
				}, this),
				children,
				actions.map(({ label, onClick, url, openInNewTab = false }, index) => url !== void 0 && openInNewTab ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ExternalLink, {
					href: url,
					onClick: (event) => onActionClick(event, onClick),
					className: "components-snackbar__action",
					children: label
				}, index, false, {
					fileName: _jsxFileName,
					lineNumber: 176,
					columnNumber: 8
				}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
					__next40pxDefaultSize: true,
					href: url,
					variant: "link",
					onClick: (event) => onActionClick(event, onClick),
					className: "components-snackbar__action",
					children: label
				}, index, false, {
					fileName: _jsxFileName,
					lineNumber: 187,
					columnNumber: 8
				}, this)),
				explicitDismiss && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
					role: "button",
					"aria-label": __("Dismiss this notice"),
					tabIndex: 0,
					className: "components-snackbar__dismiss-button",
					onClick: dismissMe,
					onKeyPress: dismissMe,
					children: "✕"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 202,
					columnNumber: 6
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 168,
			columnNumber: 4
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 155,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime, _jsxFileName, NOTICE_TIMEOUT, Snackbar;
function init_snackbar() {
	return (init_snackbar = __esmMin((() => {
		init_clsx();
		init_use_presence();
		init_build_module$1();
		init_use_merge_refs();
		init_react(), init_serialize();
		init_build_module();
		init_build_module$2();
		init_button();
		init_external_link();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/snackbar/index.tsx";
		NOTICE_TIMEOUT = 6e3;
		Snackbar = (0, import_react.forwardRef)(UnforwardedSnackbar);
		Snackbar.displayName = "Snackbar";
		try {
			Snackbar.__docgenInfo = {
				"description": "A Snackbar displays a succinct message that is cleared out after a small delay.\n\nIt can also offer the user options, like viewing a published post.\nBut these options should also be available elsewhere in the UI.\n\n```jsx\nconst MySnackbarNotice = () => (\n  <Snackbar>Post published successfully.</Snackbar>\n);\n```",
				"displayName": "Snackbar",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/snackbar/index.tsx",
				"methods": [],
				"props": {
					"className": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/notice/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "A CSS `class` to give to the wrapper element.",
						"name": "className",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"children": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/notice/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The displayed message of a notice. Also used as the spoken message for\nassistive technology, unless `spokenMessage` is provided as an alternative message.",
						"name": "children",
						"required": true,
						"tags": {},
						"type": { "name": "ReactNode" }
					},
					"onRemove": {
						"defaultValue": { "value": "noop" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/notice/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Function called when dismissing the notice",
						"name": "onRemove",
						"required": false,
						"tags": {},
						"type": { "name": "(() => void)" }
					},
					"spokenMessage": {
						"defaultValue": { "value": "`children`" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/notice/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Used to provide a custom spoken message in place of the `children` default.",
						"name": "spokenMessage",
						"required": false,
						"tags": {},
						"type": { "name": "ReactNode" }
					},
					"politeness": {
						"defaultValue": { "value": "'assertive' for 'error' status, 'polite' for all other statuses" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/notice/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "A politeness level for the notice's spoken message. Should be provided as\none of the valid options for an `aria-live` attribute value.\n\nA value of `'assertive'` is to be used for important, and usually\ntime-sensitive, information. It will interrupt anything else the screen\nreader is announcing in that moment.\nA value of `'polite'` is to be used for advisory information. It should\nnot interrupt what the screen reader is announcing in that moment\n(the \"speech queue\") or interrupt the current task.\n\nNote that this value should be considered a suggestion; assistive\ntechnologies may override it based on internal heuristics.\n@see https://www.w3.org/TR/wai-aria-1.1/#aria-live",
						"name": "politeness",
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "\"assertive\" | \"polite\"",
							"value": [{ "value": "\"assertive\"" }, { "value": "\"polite\"" }]
						}
					},
					"onDismiss": {
						"defaultValue": { "value": "noop" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/notice/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "A deprecated alternative to `onRemove`. This prop is kept for\ncompatibility reasons but should be avoided.",
						"name": "onDismiss",
						"required": false,
						"tags": {},
						"type": { "name": "(() => void)" }
					},
					"icon": {
						"defaultValue": { "value": "null" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/snackbar/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The icon to render in the snackbar.",
						"name": "icon",
						"required": false,
						"tags": {},
						"type": { "name": "ReactNode" }
					},
					"explicitDismiss": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/snackbar/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Whether to require user action to dismiss the snackbar.\nBy default, this is dismissed on a timeout, without user interaction.",
						"name": "explicitDismiss",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"listRef": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/snackbar/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "A ref to the list that contains the snackbar.",
						"name": "listRef",
						"required": false,
						"tags": {},
						"type": { "name": "RefObject<HTMLDivElement | null>" }
					},
					"actions": {
						"defaultValue": { "value": "[]" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/snackbar/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "An array of action objects. Each member object should contain:\n\n- `label`: `string` containing the text of the button/link\n- `url`: `string` OR `onClick`: `( event: SyntheticEvent ) => void` to specify\n   what the action does.\n\nThe default appearance of an action button is inferred based on whether\n`url` or `onClick` are provided, rendering the button as a link if\nappropriate. If both props are provided, `url` takes precedence, and the\naction button will render as an anchor tag.",
						"name": "actions",
						"required": false,
						"tags": {},
						"type": { "name": "(Pick<NoticeAction, \"label\" | \"onClick\" | \"url\"> & { openInNewTab?: boolean; })[]" }
					},
					"as": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/context/wordpress-component.ts",
							"name": "TypeLiteral"
						}],
						"description": "The HTML element or React component to render the component as.",
						"name": "as",
						"required": false,
						"tags": {},
						"type": { "name": "JSXElementConstructor<any> | keyof IntrinsicElements" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
export { init_snackbar as n, Snackbar as t };
