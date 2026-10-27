import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C1RZKCc6.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { n as serialize_default, t as init_serialize } from "./serialize-FHFXmm0_.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as useMergeRefs, t as init_use_merge_refs } from "./use-merge-refs-BAtuPB1L.js";
import { n as __, t as init_build_module } from "./build-module-v04us4E2.js";
import { a as init_clsx, i as clsx } from "./iframe-UtSZlYID.js";
import { n as warning, t as init_build_module$1 } from "./build-module-B5spW8IS.js";
import { r as speak, t as init_build_module$2 } from "./build-module-DsAeWnrG.js";
import { t as check_default } from "./check-BK5allCs.js";
import { n as useIsPresent, t as init_use_presence } from "./use-presence-DKw0atD8.js";
import { n as init_icon, t as icon_default } from "./icon-B-T-5iD5.js";
import { n as button_default, r as init_button } from "./button-BxmZjN4X.js";
import { n as spinner_default, t as init_spinner } from "./spinner-Cx2G76V0.js";
import { n as init_external_link, t as external_link_default } from "./external-link-C3Nc9n8O.js";
import { t as init_build_module$3 } from "./build-module-D7ie3MqX.js";
import { r as init_build_module$4 } from "./library.story-CbQx3MQ6.js";
//#region ../packages/components/build-module/snackbar/index.mjs
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
	const timeout = actions.length > 0 ? NOTICE_TIMEOUT_WITH_ACTIONS : NOTICE_TIMEOUT;
	(0, import_react.useEffect)(() => {
		if (explicitDismiss || !isPresent) return;
		const timeoutHandle = setTimeout(() => {
			callbacksRef.current.onDismiss?.();
			callbacksRef.current.onRemove?.();
		}, timeout);
		return () => clearTimeout(timeoutHandle);
	}, [
		explicitDismiss,
		isPresent,
		timeout
	]);
	const classes = clsx(className, "components-snackbar", { "components-snackbar-explicit-dismiss": !!explicitDismiss });
	if (actions && actions.length > 1) {
		warning("Snackbar can only have one action. Use Notice if your message requires many actions.");
		actions = [actions[0]];
	}
	const snackbarContentClassnames = clsx("components-snackbar__content", { "components-snackbar__content-with-icon": !!icon });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref: mergedRef,
		onFocus,
		className: classes,
		onClick: !explicitDismiss ? dismissMe : void 0,
		tabIndex: 0,
		role: !explicitDismiss ? "button" : void 0,
		onKeyPress: !explicitDismiss ? dismissMe : void 0,
		"aria-label": !explicitDismiss ? __("Dismiss this notice") : void 0,
		"data-testid": "snackbar",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: snackbarContentClassnames,
			children: [
				icon && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "components-snackbar__icon",
					children: icon
				}),
				children,
				actions.map(({ label, onClick, url, openInNewTab = false }, index) => url !== void 0 && openInNewTab ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(external_link_default, {
					href: url,
					onClick: (event) => onActionClick(event, onClick),
					className: "components-snackbar__action",
					children: label
				}, index) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(button_default, {
					__next40pxDefaultSize: true,
					href: url,
					variant: "link",
					onClick: (event) => onActionClick(event, onClick),
					className: "components-snackbar__action",
					children: label
				}, index)),
				explicitDismiss && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					role: "button",
					"aria-label": __("Dismiss this notice"),
					tabIndex: 0,
					className: "components-snackbar__dismiss-button",
					onClick: dismissMe,
					onKeyPress: dismissMe,
					children: "✕"
				})
			]
		})
	});
}
var import_jsx_runtime, NOTICE_TIMEOUT, NOTICE_TIMEOUT_WITH_ACTIONS, Snackbar, snackbar_default;
function init_snackbar() {
	return (init_snackbar = __esmMin((() => {
		init_clsx();
		init_use_presence();
		init_build_module$2();
		init_use_merge_refs();
		init_react(), init_serialize();
		init_build_module();
		init_build_module$1();
		init_button();
		init_external_link();
		import_jsx_runtime = require_jsx_runtime();
		NOTICE_TIMEOUT = 6e3;
		NOTICE_TIMEOUT_WITH_ACTIONS = 1e4;
		Snackbar = (0, import_react.forwardRef)(UnforwardedSnackbar);
		Snackbar.displayName = "Snackbar";
		snackbar_default = Snackbar;
	})))();
}
//#endregion
//#region ../packages/editor/src/components/upload-progress-snackbar/index.jsx
var import_jsx_dev_runtime$1, _jsxFileName$1, UPLOAD_SPINNER, UPLOAD_DONE;
function init_upload_progress_snackbar() {
	return (init_upload_progress_snackbar = __esmMin((() => {
		init_build_module();
		init_build_module$2();
		init_build_module$3();
		init_icon(), init_spinner();
		init_build_module$4();
		import_jsx_dev_runtime$1 = require_jsx_dev_runtime();
		_jsxFileName$1 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/editor/src/components/upload-progress-snackbar/index.jsx";
		UPLOAD_SPINNER = /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)("span", {
			className: "editor-upload-progress-snackbar__spinner",
			"aria-hidden": "true",
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(spinner_default, {}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 53,
				columnNumber: 3
			}, void 0)
		}, void 0, false, {
			fileName: _jsxFileName$1,
			lineNumber: 49,
			columnNumber: 2
		}, void 0);
		UPLOAD_DONE = /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)("span", {
			className: "editor-upload-progress-snackbar__check",
			"aria-hidden": "true",
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(icon_default, { icon: check_default }, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 59,
				columnNumber: 3
			}, void 0)
		}, void 0, false, {
			fileName: _jsxFileName$1,
			lineNumber: 58,
			columnNumber: 2
		}, void 0);
	})))();
}
//#endregion
//#region ../packages/editor/src/components/upload-progress-snackbar/stories/index.story.tsx
var import_jsx_dev_runtime, _jsxFileName, meta, Uploading, UploadingMultiple, Complete, AllStates;
function init_index_story() {
	return (init_index_story = __esmMin((() => {
		init_snackbar();
		init_upload_progress_snackbar();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/editor/src/components/upload-progress-snackbar/stories/index.story.tsx";
		meta = {
			id: "editor-uploadprogresssnackbar",
			title: "Editor/Upload Progress Snackbar",
			component: snackbar_default,
			parameters: { docs: {
				canvas: { sourceState: "shown" },
				description: { component: "The `UploadProgressSnackbar` component itself renders no UI: it manages a\nsnackbar notice via the notices store while media uploads are in progress.\n\nThese stories render the `Snackbar` with the same icon markup and text the\nnotice produces, so the in-progress and completed states can be reviewed\nvisually without running an actual upload." }
			} },
			argTypes: {
				icon: { control: false },
				children: { control: false }
			}
		};
		Uploading = { args: {
			icon: UPLOAD_SPINNER,
			children: "Uploading — sunset-over-the-bay.jpg",
			explicitDismiss: true
		} };
		UploadingMultiple = { args: {
			icon: UPLOAD_SPINNER,
			children: "Uploading 1 of 3 — sunset-over-the-bay.jpg",
			explicitDismiss: true
		} };
		Complete = { args: {
			icon: UPLOAD_DONE,
			children: "Upload complete"
		} };
		AllStates = { render: () => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			style: {
				display: "flex",
				flexDirection: "column",
				alignItems: "flex-start",
				gap: "12px"
			},
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(snackbar_default, {
					icon: UPLOAD_SPINNER,
					explicitDismiss: true,
					children: "Uploading — sunset-over-the-bay.jpg"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 66,
					columnNumber: 4
				}, void 0),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(snackbar_default, {
					icon: UPLOAD_SPINNER,
					explicitDismiss: true,
					children: "Uploading 1 of 3 — sunset-over-the-bay.jpg"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 69,
					columnNumber: 4
				}, void 0),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(snackbar_default, {
					icon: UPLOAD_DONE,
					children: "Upload complete"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 72,
					columnNumber: 4
				}, void 0)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 58,
			columnNumber: 3
		}, void 0) };
		try {
			AllStates.__docgenInfo = {
				"description": "All states shown together for quick comparison of the icon alignment and\nsizing between the spinner and the completion checkmark.",
				"displayName": "AllStates",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/editor/src/components/upload-progress-snackbar/stories/index.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		Uploading.parameters = {
			...Uploading.parameters,
			docs: {
				...Uploading.parameters?.docs,
				source: {
					originalSource: "{\n  args: {\n    icon: UPLOAD_SPINNER,\n    children: 'Uploading — sunset-over-the-bay.jpg',\n    explicitDismiss: true\n  }\n}",
					...Uploading.parameters?.docs?.source
				}
			}
		};
		UploadingMultiple.parameters = {
			...UploadingMultiple.parameters,
			docs: {
				...UploadingMultiple.parameters?.docs,
				source: {
					originalSource: "{\n  args: {\n    icon: UPLOAD_SPINNER,\n    children: 'Uploading 1 of 3 — sunset-over-the-bay.jpg',\n    explicitDismiss: true\n  }\n}",
					...UploadingMultiple.parameters?.docs?.source
				}
			}
		};
		Complete.parameters = {
			...Complete.parameters,
			docs: {
				...Complete.parameters?.docs,
				source: {
					originalSource: "{\n  args: {\n    icon: UPLOAD_DONE,\n    children: 'Upload complete'\n  }\n}",
					...Complete.parameters?.docs?.source
				}
			}
		};
		AllStates.parameters = {
			...AllStates.parameters,
			docs: {
				...AllStates.parameters?.docs,
				source: {
					originalSource: "{\n  render: () => <div style={{\n    display: 'flex',\n    flexDirection: 'column',\n    alignItems: 'flex-start',\n    gap: '12px'\n  }}>\n            <Snackbar icon={UPLOAD_SPINNER} explicitDismiss>\n                Uploading — sunset-over-the-bay.jpg\n            </Snackbar>\n            <Snackbar icon={UPLOAD_SPINNER} explicitDismiss>\n                Uploading 1 of 3 — sunset-over-the-bay.jpg\n            </Snackbar>\n            <Snackbar icon={UPLOAD_DONE}>Upload complete</Snackbar>\n        </div>\n}",
					...AllStates.parameters?.docs?.source
				},
				description: {
					story: "All states shown together for quick comparison of the icon alignment and\nsizing between the spinner and the completion checkmark.",
					...AllStates.parameters?.docs?.description
				}
			}
		};
	})))();
}
//#endregion
init_index_story();
export { AllStates, Complete, Uploading, UploadingMultiple, meta as default };
