import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as init_build_module, t as deprecated } from "./build-module-BWCORUbm.js";
import { n as __, t as init_build_module$1 } from "./build-module-v04us4E2.js";
import { o as clsx, s as init_clsx } from "./iframe-D4D-SsYo.js";
import { t as chevron_down_default } from "./chevron-down-BHqt2Nym.js";
import { n as keyboard_return_default } from "./keyboard-return-C45C3WW6.js";
import { n as pencil_default } from "./pencil-n-8dZCZu.js";
import { n as privateApis, t as init_private_apis } from "./private-apis-DYvlicGd.js";
import { n as button_default, r as init_button } from "./button-Bj8SgySP.js";
import { n as popover_default, t as init_popover } from "./popover-U8QQZ1i9.js";
import { n as init_external_link, t as external_link_default } from "./external-link-u93s4qVG.js";
import { n as init_url_input, o as safeDecodeURI, r as filterURLForDisplay, t as URLInput } from "./url-input-Bsc7Vyk1.js";
import { r as unlock, t as init_lock_unlock } from "./lock-unlock-DigY61P5.js";
import { r as init_build_module$2 } from "./library.story-DawnfKTW.js";
//#region ../packages/block-editor/src/components/url-popover/link-viewer-url.jsx
function LinkViewerURL({ url, urlLabel, className }) {
	const linkClassName = clsx(className, "block-editor-url-popover__link-viewer-url");
	if (!url) return /* @__PURE__ */ (0, import_jsx_dev_runtime$3.jsxDEV)("span", { className: linkClassName }, void 0, false, {
		fileName: _jsxFileName$3,
		lineNumber: 12,
		columnNumber: 10
	}, this);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$3.jsxDEV)(external_link_default, {
		className: linkClassName,
		href: url,
		children: urlLabel || filterURLForDisplay(safeDecodeURI(url))
	}, void 0, false, {
		fileName: _jsxFileName$3,
		lineNumber: 16,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime$3, _jsxFileName$3;
function init_link_viewer_url() {
	return (init_link_viewer_url = __esmMin((() => {
		init_clsx();
		init_external_link();
		import_jsx_dev_runtime$3 = require_jsx_dev_runtime();
		_jsxFileName$3 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/block-editor/src/components/url-popover/link-viewer-url.jsx";
		LinkViewerURL.__docgenInfo = {
			"description": "",
			"methods": [],
			"displayName": "LinkViewerURL"
		};
	})))();
}
//#endregion
//#region ../packages/block-editor/src/components/url-popover/link-viewer.jsx
function LinkViewer({ className, linkClassName, onEditLinkClick, url, urlLabel, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)("div", {
		className: clsx("block-editor-url-popover__link-viewer", className),
		...props,
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)(LinkViewerURL, {
			url,
			urlLabel,
			className: linkClassName
		}, void 0, false, {
			fileName: _jsxFileName$2,
			lineNumber: 23,
			columnNumber: 4
		}, this), onEditLinkClick && /* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)(button_default, {
			icon: pencil_default,
			label: __("Edit"),
			onClick: onEditLinkClick,
			size: "compact"
		}, void 0, false, {
			fileName: _jsxFileName$2,
			lineNumber: 29,
			columnNumber: 5
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName$2,
		lineNumber: 16,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime$2, _jsxFileName$2;
function init_link_viewer() {
	return (init_link_viewer = __esmMin((() => {
		init_clsx();
		init_build_module$1();
		init_button();
		init_build_module$2();
		init_link_viewer_url();
		import_jsx_dev_runtime$2 = require_jsx_dev_runtime();
		_jsxFileName$2 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/block-editor/src/components/url-popover/link-viewer.jsx";
		LinkViewer.__docgenInfo = {
			"description": "",
			"methods": [],
			"displayName": "LinkViewer"
		};
	})))();
}
//#endregion
//#region ../packages/block-editor/src/components/url-popover/link-editor.jsx
function LinkEditor({ autocompleteRef, className, onChangeInputValue, value, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)("form", {
		className: clsx("block-editor-url-popover__link-editor", className),
		...props,
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(URLInput, {
			value,
			onChange: onChangeInputValue,
			autocompleteRef
		}, void 0, false, {
			fileName: _jsxFileName$1,
			lineNumber: 22,
			columnNumber: 4
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(button_default, {
			icon: keyboard_return_default,
			label: __("Apply"),
			type: "submit",
			size: "compact"
		}, void 0, false, {
			fileName: _jsxFileName$1,
			lineNumber: 27,
			columnNumber: 4
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName$1,
		lineNumber: 15,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime$1, _jsxFileName$1;
function init_link_editor() {
	return (init_link_editor = __esmMin((() => {
		init_clsx();
		init_build_module$1();
		init_button();
		init_build_module$2();
		init_url_input();
		import_jsx_dev_runtime$1 = require_jsx_dev_runtime();
		_jsxFileName$1 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/block-editor/src/components/url-popover/link-editor.jsx";
		LinkEditor.__docgenInfo = {
			"description": "",
			"methods": [],
			"displayName": "LinkEditor"
		};
	})))();
}
//#endregion
//#region ../packages/block-editor/src/components/url-popover/index.jsx
var import_jsx_dev_runtime, _jsxFileName, __experimentalPopoverLegacyPositionToPlacement, DEFAULT_PLACEMENT, URLPopover;
function init_url_popover() {
	return (init_url_popover = __esmMin((() => {
		init_build_module$1();
		init_react();
		init_button(), init_popover(), init_private_apis();
		init_build_module$2();
		init_build_module();
		init_link_viewer();
		init_link_editor();
		init_lock_unlock();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/block-editor/src/components/url-popover/index.jsx";
		({__experimentalPopoverLegacyPositionToPlacement} = unlock(privateApis));
		DEFAULT_PLACEMENT = "bottom";
		URLPopover = (0, import_react.forwardRef)(({ additionalControls, children, renderSettings, placement, focusOnMount = "firstElement", position, ...popoverProps }, ref) => {
			if (position !== void 0) deprecated("`position` prop in wp.blockEditor.URLPopover", {
				since: "6.2",
				alternative: "`placement` prop"
			});
			let computedPlacement;
			if (placement !== void 0) computedPlacement = placement;
			else if (position !== void 0) computedPlacement = __experimentalPopoverLegacyPositionToPlacement(position);
			computedPlacement = computedPlacement || DEFAULT_PLACEMENT;
			const [isSettingsExpanded, setIsSettingsExpanded] = (0, import_react.useState)(false);
			const showSettings = !!renderSettings && isSettingsExpanded;
			const toggleSettingsVisibility = () => {
				setIsSettingsExpanded(!isSettingsExpanded);
			};
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(popover_default, {
				ref,
				role: "dialog",
				"aria-modal": "true",
				"aria-label": __("Edit URL"),
				className: "block-editor-url-popover",
				focusOnMount,
				placement: computedPlacement,
				shift: true,
				variant: "toolbar",
				...popoverProps,
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "block-editor-url-popover__input-container",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "block-editor-url-popover__row",
							children: [children, !!renderSettings && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(button_default, {
								className: "block-editor-url-popover__settings-toggle",
								icon: chevron_down_default,
								label: __("Link settings"),
								onClick: toggleSettingsVisibility,
								"aria-expanded": isSettingsExpanded,
								size: "compact"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 81,
								columnNumber: 8
							}, void 0)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 78,
							columnNumber: 6
						}, void 0)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 77,
						columnNumber: 5
					}, void 0),
					showSettings && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "block-editor-url-popover__settings",
						children: renderSettings()
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 93,
						columnNumber: 6
					}, void 0),
					additionalControls && !showSettings && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "block-editor-url-popover__additional-controls",
						children: additionalControls
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 98,
						columnNumber: 6
					}, void 0)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 65,
				columnNumber: 4
			}, void 0);
		});
		URLPopover.LinkEditor = LinkEditor;
		URLPopover.LinkViewer = LinkViewer;
		URLPopover.__docgenInfo = {
			"description": "",
			"methods": [],
			"displayName": "URLPopover",
			"props": { "focusOnMount": {
				"defaultValue": {
					"value": "'firstElement'",
					"computed": false
				},
				"required": false
			} }
		};
	})))();
}
//#endregion
export { init_url_popover as n, URLPopover as t };
