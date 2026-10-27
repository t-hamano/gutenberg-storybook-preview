import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C1RZKCc6.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as init_implementation, t as __dangerousOptInToUnstableAPIsOnlyForCoreModules } from "./implementation-CMzZuaZ2.js";
import { g as init_build_module } from "./TooltipPopup-BoeaPoDc.js";
import { i as _x, t as init_build_module$1 } from "./build-module-v04us4E2.js";
import { t as ThemeProvider } from "./theme-provider-BAuLVv6U.js";
import { a as init_clsx, i as clsx, n as getDesignSystemThemeSettings, r as init_with_design_system_theme } from "./iframe-UtSZlYID.js";
import { i as init_link, n as privateApis, r as Link, t as init_private_apis } from "./private-apis-B6cwrKGw.js";
import { i as init_mergeProps, o as mergeProps } from "./useRenderElement-Dkv6YH0v.js";
import { n as init_icon, t as Icon } from "./icon-n5i0-U3z.js";
import { i as init_DialogClose, n as init_DialogDescription, r as DialogClose, t as DialogDescription } from "./DialogDescription-DehIBOF0.js";
import { n as useRender, t as init_useRender } from "./useRender-JXgJ-9ZS.js";
import { n as init_text, t as Text } from "./text-C4929NGP.js";
import { n as init_badge, t as Badge } from "./badge-DBydiuQl.js";
import { n as init_button, t as Button } from "./button-DruDjqNA.js";
import { n as wordpress_default } from "./wordpress-BwlgBeE7.js";
import { a as Popup, d as init_item, i as init_root, l as Item, m as init_item_label, n as init_trigger, o as init_popup, p as ItemLabel, r as Root, t as Trigger } from "./trigger-BKOAvQpN.js";
import { a as Popup$1, b as LinkItem, d as Header, f as init_header, g as init_close_icon_button, h as CloseIconButton, i as init_root$1, m as init_content, n as init_title$1, o as init_popup$1, p as Content, r as Root$1, t as Title$1, x as init_link_item } from "./title-Dr9xYkSk.js";
import { n as init_separator, t as Separator } from "./separator-BaWPYU43.js";
import { n as init_link$1, t as Link$1 } from "./link-BEAww1Vq.js";
import { a as Header$1, c as init_root$2, i as init_content$1, n as init_title$2, o as init_header$1, r as Content$1, s as Root$2, t as Title$2 } from "./title-ClJOk8js.js";
import { n as init_stack, t as Stack } from "./stack-BHmRFw1F.js";
import { n as init_select_control, t as SelectControl } from "./select-control-DiAnEzU-.js";
import { n as init_input_control, t as InputControl } from "./input-control-Br-08JhP.js";
import { i as init_root$3, n as init_description$1, r as Root$3, t as Description$1 } from "./description-cJh9hkSX.js";
import { a as Panel, c as init_list, i as init_root$4, n as init_tab, o as init_panel, r as Root$4, s as List, t as Tab } from "./tab-CuCj_w-K.js";
import { n as page_default, t as init_page } from "./page-yTwit4rd.js";
import { r as init_build_module$2 } from "./library.story-CbQx3MQ6.js";
//#region ../packages/ui/build-module/dialog/action.mjs
var import_jsx_runtime$3, Action;
function init_action() {
	return (init_action = __esmMin((() => {
		init_DialogClose();
		init_react();
		init_button();
		import_jsx_runtime$3 = require_jsx_runtime();
		Action = (0, import_react.forwardRef)(function DialogAction({ render, disabled, loading, ...props }, ref) {
			const resolvedDisabled = disabled ?? loading;
			return /* @__PURE__ */ (0, import_jsx_runtime$3.jsx)(DialogClose, {
				ref,
				render: /* @__PURE__ */ (0, import_jsx_runtime$3.jsx)(Button, {
					render,
					loading
				}),
				disabled: resolvedDisabled,
				...props
			});
		});
	})))();
}
//#endregion
//#region ../packages/ui/build-module/dialog/description.mjs
function getRuntime$3() {
	const globalScope = globalThis;
	if (globalScope.__wpStyleRuntime) return globalScope.__wpStyleRuntime;
	globalScope.__wpStyleRuntime = {
		documents: /* @__PURE__ */ new Map(),
		styles: /* @__PURE__ */ new Map(),
		injectedStyles: /* @__PURE__ */ new WeakMap()
	};
	if (typeof document !== "undefined") registerDocument$3(document);
	return globalScope.__wpStyleRuntime;
}
function documentContainsStyleHash$3(targetDocument, hash) {
	if (!targetDocument.head) return false;
	for (const style of targetDocument.head.querySelectorAll(`style[${STYLE_HASH_ATTRIBUTE$3}]`)) if (style.getAttribute(STYLE_HASH_ATTRIBUTE$3) === hash) return true;
	return false;
}
function injectStyle$3(targetDocument, hash, css) {
	if (!targetDocument.head) return;
	const runtime = getRuntime$3();
	let injectedStyles = runtime.injectedStyles.get(targetDocument);
	if (!injectedStyles) {
		injectedStyles = /* @__PURE__ */ new Set();
		runtime.injectedStyles.set(targetDocument, injectedStyles);
	}
	if (injectedStyles.has(hash)) return;
	if (documentContainsStyleHash$3(targetDocument, hash)) {
		injectedStyles.add(hash);
		return;
	}
	const style = targetDocument.createElement("style");
	style.setAttribute(STYLE_HASH_ATTRIBUTE$3, hash);
	style.appendChild(targetDocument.createTextNode(css));
	targetDocument.head.appendChild(style);
	injectedStyles.add(hash);
}
function registerDocument$3(targetDocument) {
	const runtime = getRuntime$3();
	runtime.documents.set(targetDocument, (runtime.documents.get(targetDocument) ?? 0) + 1);
	for (const [hash, css] of runtime.styles) injectStyle$3(targetDocument, hash, css);
	return () => {
		const count = runtime.documents.get(targetDocument);
		if (count === void 0) return;
		if (count <= 1) {
			runtime.documents.delete(targetDocument);
			return;
		}
		runtime.documents.set(targetDocument, count - 1);
	};
}
function registerStyle$3(hash, css) {
	const runtime = getRuntime$3();
	runtime.styles.set(hash, css);
	for (const targetDocument of runtime.documents.keys()) injectStyle$3(targetDocument, hash, css);
}
var import_jsx_runtime$2, STYLE_HASH_ATTRIBUTE$3, style_default$3, Description;
function init_description() {
	return (init_description = __esmMin((() => {
		init_DialogDescription();
		init_react();
		init_text();
		import_jsx_runtime$2 = require_jsx_runtime();
		STYLE_HASH_ATTRIBUTE$3 = "data-wp-hash";
		if (typeof process === "undefined" || false) registerStyle$3("c19cd1686b", "@layer wp-ui{@layer utilities, components, compositions, overrides;@layer components{.f1c50237c4787636__header{min-height:var(--wpds-dimension-size-md,32px);padding-block:var(--wpds-dimension-padding-2xl,24px) var(--wpds-dimension-gap-lg,16px)}._579f95efdec92a66__footer,.f1c50237c4787636__header{align-items:center;display:flex;gap:var(--wpds-dimension-gap-sm,8px);padding-inline:var(--wpds-dimension-padding-2xl,24px)}._579f95efdec92a66__footer{justify-content:flex-end;padding-block:var(--wpds-dimension-gap-lg,16px) var(--wpds-dimension-padding-2xl,24px)}._5371cc08aad82574__title{--_gcd-heading-color:var(--wpds-color-foreground-content-neutral,#1e1e1e);--_gcd-heading-margin:0 auto 0 0;color:var(--wpds-color-foreground-content-neutral,#1e1e1e);margin-inline-end:auto;&:dir(rtl){--_gcd-heading-margin:0 0 0 auto}}._766d9011d37ce2d9__content{flex:1 1 auto;min-block-size:0;overflow-block:auto;overflow-inline:hidden;padding:var(--wpds-dimension-padding-2xl,24px);&:focus-visible{outline-offset:calc(var(--wpds-border-width-focus, var(--wp-admin-border-width-focus, 2px))*-1)}}.f1c50237c4787636__header:has(~._766d9011d37ce2d9__content){border-block-end:1px solid transparent;padding-block-end:calc(var(--wpds-dimension-gap-lg, 16px) - 1px - var(--wpds-border-width-focus, var(--wp-admin-border-width-focus, 2px))*2)}.f1c50237c4787636__header~._766d9011d37ce2d9__content{padding-block-start:calc(var(--wpds-border-width-focus, var(--wp-admin-border-width-focus, 2px))*2)}._766d9011d37ce2d9__content~._579f95efdec92a66__footer{border-block-start:1px solid transparent;padding-block-start:calc(var(--wpds-dimension-gap-lg, 16px) - 1px - var(--wpds-border-width-focus, var(--wp-admin-border-width-focus, 2px))*2)}._766d9011d37ce2d9__content:has(~._579f95efdec92a66__footer){padding-block-end:calc(var(--wpds-border-width-focus, var(--wp-admin-border-width-focus, 2px))*2)}._766d9011d37ce2d9__content>.f1c50237c4787636__header,._766d9011d37ce2d9__content>[data-drawer-content]>.f1c50237c4787636__header{padding-inline:0}._766d9011d37ce2d9__content>.f1c50237c4787636__header:first-child,._766d9011d37ce2d9__content>[data-drawer-content]>.f1c50237c4787636__header:first-child{padding-block-start:0}._766d9011d37ce2d9__content>._579f95efdec92a66__footer,._766d9011d37ce2d9__content>[data-drawer-content]>._579f95efdec92a66__footer{padding-inline:0}._766d9011d37ce2d9__content>._579f95efdec92a66__footer:last-child,._766d9011d37ce2d9__content>[data-drawer-content]>._579f95efdec92a66__footer:last-child{padding-block-end:0}.f1c50237c4787636__header:has(~[data-wp-ui-overlay-scroll-container][data-wp-ui-overlay-scrolled-from-top]){border-block-end-color:var(--wpds-color-stroke-surface-neutral,#dbdbdb)}[data-wp-ui-overlay-scroll-container][data-wp-ui-overlay-scrolled-from-bottom]~._579f95efdec92a66__footer{border-block-start-color:var(--wpds-color-stroke-surface-neutral,#dbdbdb)}[data-wp-ui-overlay-modal] [data-wp-ui-overlay-scroll-container]{overscroll-behavior:contain}}}@layer wp-ui{@layer utilities, components, compositions, overrides;@layer components{._074affe4c56b4f2f__backdrop{background-color:rgba(0,0,0,.35);inset:0;position:fixed;z-index:var(--wp-ui-dialog-z-index,initial);&[data-ending-style],&[data-starting-style]{opacity:0}&[data-open]{opacity:1}@media not (prefers-reduced-motion){transition:opacity var(--wpds-motion-duration-md,.2s) var(--wpds-motion-easing-subtle,cubic-bezier(.15,0,.15,1))}}._8acaa98861620d4d__popup{--viewport-inset:var(--wpds-dimension-padding-2xl,24px);--_wp-ui-elevation-lg:0 5px 15px rgba(0,0,0,.08),0 15px 27px rgba(0,0,0,.07),0 30px 36px rgba(0,0,0,.04),0 50px 43px rgba(0,0,0,.02);background-color:var(--wpds-color-background-surface-neutral-strong,#fff);border:var(--wpds-border-width-xs,1px) solid var(--wpds-color-stroke-surface-neutral,#dbdbdb);border-radius:var(--wpds-border-radius-lg,8px);box-shadow:var(--_wp-ui-elevation-lg);box-sizing:border-box;color:var(--wpds-color-foreground-content-neutral,#1e1e1e);display:flex;flex-direction:column;font-family:var(--wpds-typography-font-family-body,-apple-system,system-ui,\"Segoe UI\",\"Roboto\",\"Oxygen-Sans\",\"Ubuntu\",\"Cantarell\",\"Helvetica Neue\",sans-serif);font-size:var(--wpds-typography-font-size-md,13px);left:50%;line-height:var(--wpds-typography-line-height-md,24px);max-height:calc(100dvh - var(--viewport-inset)*2);min-width:var(--wpds-dimension-surface-width-sm,320px);overflow:hidden;position:fixed;top:50%;transform:translate(-50%,-50%);width:calc(100vw - var(--viewport-inset)*2);z-index:var(--wp-ui-dialog-z-index,initial);&[data-ending-style],&[data-starting-style]{opacity:0;transform:translate(-50%,-50%) scale(.9)}@media not (prefers-reduced-motion){transition:opacity var(--wpds-motion-duration-md,.2s) var(--wpds-motion-easing-expressive,cubic-bezier(.25,0,0,1)),transform var(--wpds-motion-duration-md,.2s) var(--wpds-motion-easing-expressive,cubic-bezier(.25,0,0,1))}@media (min-width:480px){min-width:var(--wpds-dimension-surface-width-md,400px)}&.fee2d441dbb756d0__is-auto{max-width:calc(100vw - var(--viewport-inset)*2);min-width:min(var(--wpds-dimension-surface-width-sm,320px),calc(100vw - var(--viewport-inset)*2));width:max-content;@media (min-width:480px){min-width:min(var(--wpds-dimension-surface-width-md,400px),calc(100vw - var(--viewport-inset)*2))}}&._7acfa67ebf092988__is-small{max-width:var(--wpds-dimension-surface-width-md,400px)}&._1eeeed880cb5769d__is-medium{max-width:var(--wpds-dimension-surface-width-lg,560px)}&._99f900b2267e22d0__is-large{max-width:var(--wpds-dimension-surface-width-2xl,960px)}&.b49f7ff9c06fe387__is-stretch{max-width:none}&.dcd4c2f5036cbf1a__is-full{height:100dvh}}._074affe4c56b4f2f__backdrop~._8acaa98861620d4d__popup{border-color:transparent}@media (forced-colors:active){._074affe4c56b4f2f__backdrop~* ._8acaa98861620d4d__popup,._8acaa98861620d4d__popup{border-color:CanvasText}}._76fb3b28fcbd45fc__header [data-wp-ui-dialog-close-icon]{margin-inline-start:auto}.d9d6da914ef0a77c__description{margin-bottom:var(--wpds-dimension-gap-lg,16px)}}}");
		style_default$3 = {
			"backdrop": "_074affe4c56b4f2f__backdrop",
			"popup": "_8acaa98861620d4d__popup",
			"is-auto": "fee2d441dbb756d0__is-auto",
			"is-small": "_7acfa67ebf092988__is-small",
			"is-medium": "_1eeeed880cb5769d__is-medium",
			"is-large": "_99f900b2267e22d0__is-large",
			"is-stretch": "b49f7ff9c06fe387__is-stretch",
			"is-full": "dcd4c2f5036cbf1a__is-full",
			"header": "_76fb3b28fcbd45fc__header f1c50237c4787636__header",
			"footer": "_00eeb4f220cddae3__footer _579f95efdec92a66__footer",
			"title": "f636832002af749e__title _5371cc08aad82574__title",
			"content": "_101038da9af7162f__content _766d9011d37ce2d9__content",
			"description": "d9d6da914ef0a77c__description"
		};
		Description = (0, import_react.forwardRef)(function DialogDescription$1({ children, ...props }, ref) {
			return /* @__PURE__ */ (0, import_jsx_runtime$2.jsx)(Text, {
				ref,
				variant: "body-md",
				render: /* @__PURE__ */ (0, import_jsx_runtime$2.jsx)(DialogDescription, { ...props }),
				className: style_default$3.description,
				children
			});
		});
	})))();
}
//#endregion
//#region ../packages/ui/build-module/dialog/footer.mjs
function getRuntime$2() {
	const globalScope = globalThis;
	if (globalScope.__wpStyleRuntime) return globalScope.__wpStyleRuntime;
	globalScope.__wpStyleRuntime = {
		documents: /* @__PURE__ */ new Map(),
		styles: /* @__PURE__ */ new Map(),
		injectedStyles: /* @__PURE__ */ new WeakMap()
	};
	if (typeof document !== "undefined") registerDocument$2(document);
	return globalScope.__wpStyleRuntime;
}
function documentContainsStyleHash$2(targetDocument, hash) {
	if (!targetDocument.head) return false;
	for (const style of targetDocument.head.querySelectorAll(`style[${STYLE_HASH_ATTRIBUTE$2}]`)) if (style.getAttribute(STYLE_HASH_ATTRIBUTE$2) === hash) return true;
	return false;
}
function injectStyle$2(targetDocument, hash, css) {
	if (!targetDocument.head) return;
	const runtime = getRuntime$2();
	let injectedStyles = runtime.injectedStyles.get(targetDocument);
	if (!injectedStyles) {
		injectedStyles = /* @__PURE__ */ new Set();
		runtime.injectedStyles.set(targetDocument, injectedStyles);
	}
	if (injectedStyles.has(hash)) return;
	if (documentContainsStyleHash$2(targetDocument, hash)) {
		injectedStyles.add(hash);
		return;
	}
	const style = targetDocument.createElement("style");
	style.setAttribute(STYLE_HASH_ATTRIBUTE$2, hash);
	style.appendChild(targetDocument.createTextNode(css));
	targetDocument.head.appendChild(style);
	injectedStyles.add(hash);
}
function registerDocument$2(targetDocument) {
	const runtime = getRuntime$2();
	runtime.documents.set(targetDocument, (runtime.documents.get(targetDocument) ?? 0) + 1);
	for (const [hash, css] of runtime.styles) injectStyle$2(targetDocument, hash, css);
	return () => {
		const count = runtime.documents.get(targetDocument);
		if (count === void 0) return;
		if (count <= 1) {
			runtime.documents.delete(targetDocument);
			return;
		}
		runtime.documents.set(targetDocument, count - 1);
	};
}
function registerStyle$2(hash, css) {
	const runtime = getRuntime$2();
	runtime.styles.set(hash, css);
	for (const targetDocument of runtime.documents.keys()) injectStyle$2(targetDocument, hash, css);
}
var STYLE_HASH_ATTRIBUTE$2, style_default$2, Footer;
function init_footer() {
	return (init_footer = __esmMin((() => {
		init_mergeProps(), init_useRender();
		init_clsx();
		init_react();
		STYLE_HASH_ATTRIBUTE$2 = "data-wp-hash";
		if (typeof process === "undefined" || false) registerStyle$2("c19cd1686b", "@layer wp-ui{@layer utilities, components, compositions, overrides;@layer components{.f1c50237c4787636__header{min-height:var(--wpds-dimension-size-md,32px);padding-block:var(--wpds-dimension-padding-2xl,24px) var(--wpds-dimension-gap-lg,16px)}._579f95efdec92a66__footer,.f1c50237c4787636__header{align-items:center;display:flex;gap:var(--wpds-dimension-gap-sm,8px);padding-inline:var(--wpds-dimension-padding-2xl,24px)}._579f95efdec92a66__footer{justify-content:flex-end;padding-block:var(--wpds-dimension-gap-lg,16px) var(--wpds-dimension-padding-2xl,24px)}._5371cc08aad82574__title{--_gcd-heading-color:var(--wpds-color-foreground-content-neutral,#1e1e1e);--_gcd-heading-margin:0 auto 0 0;color:var(--wpds-color-foreground-content-neutral,#1e1e1e);margin-inline-end:auto;&:dir(rtl){--_gcd-heading-margin:0 0 0 auto}}._766d9011d37ce2d9__content{flex:1 1 auto;min-block-size:0;overflow-block:auto;overflow-inline:hidden;padding:var(--wpds-dimension-padding-2xl,24px);&:focus-visible{outline-offset:calc(var(--wpds-border-width-focus, var(--wp-admin-border-width-focus, 2px))*-1)}}.f1c50237c4787636__header:has(~._766d9011d37ce2d9__content){border-block-end:1px solid transparent;padding-block-end:calc(var(--wpds-dimension-gap-lg, 16px) - 1px - var(--wpds-border-width-focus, var(--wp-admin-border-width-focus, 2px))*2)}.f1c50237c4787636__header~._766d9011d37ce2d9__content{padding-block-start:calc(var(--wpds-border-width-focus, var(--wp-admin-border-width-focus, 2px))*2)}._766d9011d37ce2d9__content~._579f95efdec92a66__footer{border-block-start:1px solid transparent;padding-block-start:calc(var(--wpds-dimension-gap-lg, 16px) - 1px - var(--wpds-border-width-focus, var(--wp-admin-border-width-focus, 2px))*2)}._766d9011d37ce2d9__content:has(~._579f95efdec92a66__footer){padding-block-end:calc(var(--wpds-border-width-focus, var(--wp-admin-border-width-focus, 2px))*2)}._766d9011d37ce2d9__content>.f1c50237c4787636__header,._766d9011d37ce2d9__content>[data-drawer-content]>.f1c50237c4787636__header{padding-inline:0}._766d9011d37ce2d9__content>.f1c50237c4787636__header:first-child,._766d9011d37ce2d9__content>[data-drawer-content]>.f1c50237c4787636__header:first-child{padding-block-start:0}._766d9011d37ce2d9__content>._579f95efdec92a66__footer,._766d9011d37ce2d9__content>[data-drawer-content]>._579f95efdec92a66__footer{padding-inline:0}._766d9011d37ce2d9__content>._579f95efdec92a66__footer:last-child,._766d9011d37ce2d9__content>[data-drawer-content]>._579f95efdec92a66__footer:last-child{padding-block-end:0}.f1c50237c4787636__header:has(~[data-wp-ui-overlay-scroll-container][data-wp-ui-overlay-scrolled-from-top]){border-block-end-color:var(--wpds-color-stroke-surface-neutral,#dbdbdb)}[data-wp-ui-overlay-scroll-container][data-wp-ui-overlay-scrolled-from-bottom]~._579f95efdec92a66__footer{border-block-start-color:var(--wpds-color-stroke-surface-neutral,#dbdbdb)}[data-wp-ui-overlay-modal] [data-wp-ui-overlay-scroll-container]{overscroll-behavior:contain}}}@layer wp-ui{@layer utilities, components, compositions, overrides;@layer components{._074affe4c56b4f2f__backdrop{background-color:rgba(0,0,0,.35);inset:0;position:fixed;z-index:var(--wp-ui-dialog-z-index,initial);&[data-ending-style],&[data-starting-style]{opacity:0}&[data-open]{opacity:1}@media not (prefers-reduced-motion){transition:opacity var(--wpds-motion-duration-md,.2s) var(--wpds-motion-easing-subtle,cubic-bezier(.15,0,.15,1))}}._8acaa98861620d4d__popup{--viewport-inset:var(--wpds-dimension-padding-2xl,24px);--_wp-ui-elevation-lg:0 5px 15px rgba(0,0,0,.08),0 15px 27px rgba(0,0,0,.07),0 30px 36px rgba(0,0,0,.04),0 50px 43px rgba(0,0,0,.02);background-color:var(--wpds-color-background-surface-neutral-strong,#fff);border:var(--wpds-border-width-xs,1px) solid var(--wpds-color-stroke-surface-neutral,#dbdbdb);border-radius:var(--wpds-border-radius-lg,8px);box-shadow:var(--_wp-ui-elevation-lg);box-sizing:border-box;color:var(--wpds-color-foreground-content-neutral,#1e1e1e);display:flex;flex-direction:column;font-family:var(--wpds-typography-font-family-body,-apple-system,system-ui,\"Segoe UI\",\"Roboto\",\"Oxygen-Sans\",\"Ubuntu\",\"Cantarell\",\"Helvetica Neue\",sans-serif);font-size:var(--wpds-typography-font-size-md,13px);left:50%;line-height:var(--wpds-typography-line-height-md,24px);max-height:calc(100dvh - var(--viewport-inset)*2);min-width:var(--wpds-dimension-surface-width-sm,320px);overflow:hidden;position:fixed;top:50%;transform:translate(-50%,-50%);width:calc(100vw - var(--viewport-inset)*2);z-index:var(--wp-ui-dialog-z-index,initial);&[data-ending-style],&[data-starting-style]{opacity:0;transform:translate(-50%,-50%) scale(.9)}@media not (prefers-reduced-motion){transition:opacity var(--wpds-motion-duration-md,.2s) var(--wpds-motion-easing-expressive,cubic-bezier(.25,0,0,1)),transform var(--wpds-motion-duration-md,.2s) var(--wpds-motion-easing-expressive,cubic-bezier(.25,0,0,1))}@media (min-width:480px){min-width:var(--wpds-dimension-surface-width-md,400px)}&.fee2d441dbb756d0__is-auto{max-width:calc(100vw - var(--viewport-inset)*2);min-width:min(var(--wpds-dimension-surface-width-sm,320px),calc(100vw - var(--viewport-inset)*2));width:max-content;@media (min-width:480px){min-width:min(var(--wpds-dimension-surface-width-md,400px),calc(100vw - var(--viewport-inset)*2))}}&._7acfa67ebf092988__is-small{max-width:var(--wpds-dimension-surface-width-md,400px)}&._1eeeed880cb5769d__is-medium{max-width:var(--wpds-dimension-surface-width-lg,560px)}&._99f900b2267e22d0__is-large{max-width:var(--wpds-dimension-surface-width-2xl,960px)}&.b49f7ff9c06fe387__is-stretch{max-width:none}&.dcd4c2f5036cbf1a__is-full{height:100dvh}}._074affe4c56b4f2f__backdrop~._8acaa98861620d4d__popup{border-color:transparent}@media (forced-colors:active){._074affe4c56b4f2f__backdrop~* ._8acaa98861620d4d__popup,._8acaa98861620d4d__popup{border-color:CanvasText}}._76fb3b28fcbd45fc__header [data-wp-ui-dialog-close-icon]{margin-inline-start:auto}.d9d6da914ef0a77c__description{margin-bottom:var(--wpds-dimension-gap-lg,16px)}}}");
		style_default$2 = {
			"backdrop": "_074affe4c56b4f2f__backdrop",
			"popup": "_8acaa98861620d4d__popup",
			"is-auto": "fee2d441dbb756d0__is-auto",
			"is-small": "_7acfa67ebf092988__is-small",
			"is-medium": "_1eeeed880cb5769d__is-medium",
			"is-large": "_99f900b2267e22d0__is-large",
			"is-stretch": "b49f7ff9c06fe387__is-stretch",
			"is-full": "dcd4c2f5036cbf1a__is-full",
			"header": "_76fb3b28fcbd45fc__header f1c50237c4787636__header",
			"footer": "_00eeb4f220cddae3__footer _579f95efdec92a66__footer",
			"title": "f636832002af749e__title _5371cc08aad82574__title",
			"content": "_101038da9af7162f__content _766d9011d37ce2d9__content",
			"description": "d9d6da914ef0a77c__description"
		};
		Footer = (0, import_react.forwardRef)(function DialogFooter({ className, render, ...props }, ref) {
			return useRender({
				defaultTagName: "footer",
				render,
				ref,
				props: mergeProps(props, { className: clsx(style_default$2.footer, className) })
			});
		});
	})))();
}
//#endregion
//#region ../packages/ui/build-module/notice/title.mjs
function getRuntime$1() {
	const globalScope = globalThis;
	if (globalScope.__wpStyleRuntime) return globalScope.__wpStyleRuntime;
	globalScope.__wpStyleRuntime = {
		documents: /* @__PURE__ */ new Map(),
		styles: /* @__PURE__ */ new Map(),
		injectedStyles: /* @__PURE__ */ new WeakMap()
	};
	if (typeof document !== "undefined") registerDocument$1(document);
	return globalScope.__wpStyleRuntime;
}
function documentContainsStyleHash$1(targetDocument, hash) {
	if (!targetDocument.head) return false;
	for (const style of targetDocument.head.querySelectorAll(`style[${STYLE_HASH_ATTRIBUTE$1}]`)) if (style.getAttribute(STYLE_HASH_ATTRIBUTE$1) === hash) return true;
	return false;
}
function injectStyle$1(targetDocument, hash, css) {
	if (!targetDocument.head) return;
	const runtime = getRuntime$1();
	let injectedStyles = runtime.injectedStyles.get(targetDocument);
	if (!injectedStyles) {
		injectedStyles = /* @__PURE__ */ new Set();
		runtime.injectedStyles.set(targetDocument, injectedStyles);
	}
	if (injectedStyles.has(hash)) return;
	if (documentContainsStyleHash$1(targetDocument, hash)) {
		injectedStyles.add(hash);
		return;
	}
	const style = targetDocument.createElement("style");
	style.setAttribute(STYLE_HASH_ATTRIBUTE$1, hash);
	style.appendChild(targetDocument.createTextNode(css));
	targetDocument.head.appendChild(style);
	injectedStyles.add(hash);
}
function registerDocument$1(targetDocument) {
	const runtime = getRuntime$1();
	runtime.documents.set(targetDocument, (runtime.documents.get(targetDocument) ?? 0) + 1);
	for (const [hash, css] of runtime.styles) injectStyle$1(targetDocument, hash, css);
	return () => {
		const count = runtime.documents.get(targetDocument);
		if (count === void 0) return;
		if (count <= 1) {
			runtime.documents.delete(targetDocument);
			return;
		}
		runtime.documents.set(targetDocument, count - 1);
	};
}
function registerStyle$1(hash, css) {
	const runtime = getRuntime$1();
	runtime.styles.set(hash, css);
	for (const targetDocument of runtime.documents.keys()) injectStyle$1(targetDocument, hash, css);
}
var import_jsx_runtime$1, STYLE_HASH_ATTRIBUTE$1, style_default$1, Title;
function init_title() {
	return (init_title = __esmMin((() => {
		init_react();
		init_clsx();
		init_text();
		import_jsx_runtime$1 = require_jsx_runtime();
		STYLE_HASH_ATTRIBUTE$1 = "data-wp-hash";
		if (typeof process === "undefined" || false) registerStyle$1("30e8b36272", "@layer wp-ui{@layer utilities, components, compositions, overrides;@layer components{._4145abab73d17514__notice{--icon-height:var(--wpds-dimension-size-sm,24px);--text-vertical-padding:calc((var(--icon-height) - var(--wpds-typography-line-height-sm, 20px))/2);--wp-ui-notice-background-color:var(--wpds-color-background-surface-neutral-weak,#f4f4f4);--wp-ui-notice-border-color:var(--wpds-color-stroke-surface-neutral,#dbdbdb);--wp-ui-notice-text-color:var(--wpds-color-foreground-content-neutral,#1e1e1e);--wp-ui-notice-decorative-icon-color:var(--wpds-color-foreground-content-neutral,#1e1e1e);align-items:start;background-color:var(--wp-ui-notice-background-color);border:1px solid var(--wp-ui-notice-border-color);border-radius:var(--wpds-border-radius-lg,8px);container-type:inline-size;display:grid;grid-template-columns:auto 1fr auto;isolation:isolate;padding:var(--wpds-dimension-padding-md,12px)}.d0a25570cb528528__icon{color:var(--wp-ui-notice-decorative-icon-color);grid-column:1;grid-row:1;margin-inline-end:var(--wpds-dimension-gap-xs,4px)}._1904b570a89bb815__description{color:var(--wp-ui-notice-text-color);grid-column:2;padding-block:var(--text-vertical-padding)}._0a1270dcdd79c031__actions{display:flex;flex-wrap:wrap;gap:var(--wpds-dimension-gap-md,12px);grid-column:2}._4145abab73d17514__notice:has(._1904b570a89bb815__description) ._0a1270dcdd79c031__actions,._4145abab73d17514__notice:has(.b5397fb9d05389e3__title) ._0a1270dcdd79c031__actions{margin-block-start:var(--wpds-dimension-gap-sm,8px)}._983740ab855c4e09__action-button{flex-shrink:0}.d329e7416d368d31__action-link{flex-shrink:0;&:not(:first-child){margin-inline-start:var(--wpds-dimension-gap-xs,4px)}&:not(:last-child){margin-inline-end:var(--wpds-dimension-gap-xs,4px)}}._487e6a5c1375f7dc__close-icon{grid-column:3;grid-row:1;margin-inline-start:var(--wpds-dimension-gap-xs,4px)}._531c140826094795__is-info{--wp-ui-notice-background-color:var(--wpds-color-background-surface-info-weak,#f3f9ff);--wp-ui-notice-border-color:var(--wpds-color-stroke-surface-info,#adc6e2);--wp-ui-notice-text-color:var(--wpds-color-foreground-content-info,#001b4f);--wp-ui-notice-decorative-icon-color:var(--wpds-color-foreground-content-info-weak,#006bd7)}.ae2e1004697cce95__is-warning{--wp-ui-notice-background-color:var(--wpds-color-background-surface-warning-weak,#fff7e1);--wp-ui-notice-border-color:var(--wpds-color-stroke-surface-warning,#e1bd7c);--wp-ui-notice-text-color:var(--wpds-color-foreground-content-warning,#2e1900);--wp-ui-notice-decorative-icon-color:var(--wpds-color-foreground-content-warning-weak,#936300)}._2e614a76af494837__is-success{--wp-ui-notice-background-color:var(--wpds-color-background-surface-success-weak,#ebffed);--wp-ui-notice-border-color:var(--wpds-color-stroke-surface-success,#92d39d);--wp-ui-notice-text-color:var(--wpds-color-foreground-content-success,#002900);--wp-ui-notice-decorative-icon-color:var(--wpds-color-foreground-content-success-weak,#008030)}.af00331ae17a0065__is-error{--wp-ui-notice-background-color:var(--wpds-color-background-surface-error-weak,#fff6f5);--wp-ui-notice-border-color:var(--wpds-color-stroke-surface-error,#e0afa7);--wp-ui-notice-text-color:var(--wpds-color-foreground-content-error,#470000);--wp-ui-notice-decorative-icon-color:var(--wpds-color-foreground-content-error-weak,#cc1818)}@container (max-width: 320px){._4145abab73d17514__notice:has(.b5397fb9d05389e3__title) ._0a1270dcdd79c031__actions,._4145abab73d17514__notice:has(.b5397fb9d05389e3__title) ._1904b570a89bb815__description{grid-column:1/3}}}@layer compositions{.b5397fb9d05389e3__title{--_gcd-heading-color:var(--wp-ui-notice-text-color);color:var(--wp-ui-notice-text-color);grid-column:2;padding-block:var(--text-vertical-padding)}.d329e7416d368d31__action-link{margin-block:auto}._487e6a5c1375f7dc__close-icon,._983740ab855c4e09__action-button,.d329e7416d368d31__action-link{mix-blend-mode:luminosity;@media (forced-colors:active){mix-blend-mode:normal}}}}");
		style_default$1 = {
			"notice": "_4145abab73d17514__notice",
			"icon": "d0a25570cb528528__icon",
			"description": "_1904b570a89bb815__description",
			"actions": "_0a1270dcdd79c031__actions",
			"title": "b5397fb9d05389e3__title",
			"action-button": "_983740ab855c4e09__action-button",
			"action-link": "d329e7416d368d31__action-link",
			"close-icon": "_487e6a5c1375f7dc__close-icon",
			"is-info": "_531c140826094795__is-info",
			"is-warning": "ae2e1004697cce95__is-warning",
			"is-success": "_2e614a76af494837__is-success",
			"is-error": "af00331ae17a0065__is-error"
		};
		Title = (0, import_react.forwardRef)(function NoticeTitle({ className, ...props }, ref) {
			return /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)(Text, {
				ref,
				variant: "heading-md",
				className: clsx(style_default$1.title, className),
				...props
			});
		});
	})))();
}
//#endregion
//#region ../packages/admin-ui/build-module/breadcrumbs/index.mjs
function getRuntime() {
	const globalScope = globalThis;
	if (globalScope.__wpStyleRuntime) return globalScope.__wpStyleRuntime;
	globalScope.__wpStyleRuntime = {
		documents: /* @__PURE__ */ new Map(),
		styles: /* @__PURE__ */ new Map(),
		injectedStyles: /* @__PURE__ */ new WeakMap()
	};
	if (typeof document !== "undefined") registerDocument(document);
	return globalScope.__wpStyleRuntime;
}
function documentContainsStyleHash(targetDocument, hash) {
	if (!targetDocument.head) return false;
	for (const style of targetDocument.head.querySelectorAll(`style[${STYLE_HASH_ATTRIBUTE}]`)) if (style.getAttribute(STYLE_HASH_ATTRIBUTE) === hash) return true;
	return false;
}
function injectStyle(targetDocument, hash, css) {
	if (!targetDocument.head) return;
	const runtime = getRuntime();
	let injectedStyles = runtime.injectedStyles.get(targetDocument);
	if (!injectedStyles) {
		injectedStyles = /* @__PURE__ */ new Set();
		runtime.injectedStyles.set(targetDocument, injectedStyles);
	}
	if (injectedStyles.has(hash)) return;
	if (documentContainsStyleHash(targetDocument, hash)) {
		injectedStyles.add(hash);
		return;
	}
	const style = targetDocument.createElement("style");
	style.setAttribute(STYLE_HASH_ATTRIBUTE, hash);
	style.appendChild(targetDocument.createTextNode(css));
	targetDocument.head.appendChild(style);
	injectedStyles.add(hash);
}
function registerDocument(targetDocument) {
	const runtime = getRuntime();
	runtime.documents.set(targetDocument, (runtime.documents.get(targetDocument) ?? 0) + 1);
	for (const [hash, css] of runtime.styles) injectStyle(targetDocument, hash, css);
	return () => {
		const count = runtime.documents.get(targetDocument);
		if (count === void 0) return;
		if (count <= 1) {
			runtime.documents.delete(targetDocument);
			return;
		}
		runtime.documents.set(targetDocument, count - 1);
	};
}
function registerStyle(hash, css) {
	const runtime = getRuntime();
	runtime.styles.set(hash, css);
	for (const targetDocument of runtime.documents.keys()) injectStyle(targetDocument, hash, css);
}
var import_jsx_runtime, STYLE_HASH_ATTRIBUTE, style_default, Breadcrumbs, breadcrumbs_default;
function init_breadcrumbs() {
	return (init_breadcrumbs = __esmMin((() => {
		init_link();
		init_build_module$1();
		init_link$1(), init_stack(), init_text();
		import_jsx_runtime = require_jsx_runtime();
		STYLE_HASH_ATTRIBUTE = "data-wp-hash";
		if (typeof process === "undefined" || false) registerStyle("a90be4572a", "._5f4053eba32ce092__list{list-style:none;margin:0;padding:0}._5f4053eba32ce092__list>li{flex-shrink:0;margin:0}._5f4053eba32ce092__list>li:last-child{flex-shrink:1;min-width:0}.d1978551971a3360__current{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}._6d9152063d443376__separator{color:var(--wpds-color-stroke-surface-neutral,#dbdbdb);margin:0 var(--wpds-dimension-gap-sm,8px);user-select:none}");
		style_default = {
			"list": "_5f4053eba32ce092__list",
			"current": "d1978551971a3360__current",
			"separator": "_6d9152063d443376__separator"
		};
		Breadcrumbs = ({ items }) => {
			if (!items.length) return null;
			const precedingItems = items.slice(0, -1);
			const lastItem = items[items.length - 1];
			{
				const invalidItem = precedingItems.find((item) => !item.to);
				if (invalidItem) throw new Error(`Breadcrumbs: item "${invalidItem.label}" is missing a \`to\` prop. All items except the last one must have a \`to\` prop.`);
			}
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				"aria-label": _x("Breadcrumbs", "aria label"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Stack, {
					render: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {}),
					direction: "row",
					align: "center",
					className: style_default.list,
					children: [precedingItems.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
						variant: "body-lg",
						render: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link$1, {
							tone: "neutral",
							render: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, { to: item.to })
						}),
						children: item.label
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
						variant: "body-lg",
						"aria-hidden": "true",
						className: style_default.separator,
						children: "/"
					})] }, index)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: lastItem.to ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
						variant: "body-lg",
						render: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link$1, {
							tone: "neutral",
							render: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, { to: lastItem.to })
						}),
						children: lastItem.label
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
						variant: "heading-lg",
						render: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {}),
						className: style_default.current,
						children: lastItem.label
					}) })]
				})
			});
		};
		breadcrumbs_default = Breadcrumbs;
	})))();
}
//#endregion
//#region decorators/with-router.tsx
/**
* Storybook decorator that provides a router context.
*
* Wraps stories in a minimal tanstack router (via `@wordpress/route` private
* APIs) so that components consuming `Link` from `@wordpress/route` can
* render without errors.
*/
function withRouter(Story) {
	const rootRoute = createRootRoute({ component: Story });
	const router = createRouter({
		routeTree: rootRoute,
		history: createMemoryHistory({ initialEntries: ["/"] }),
		defaultNotFoundComponent: () => null
	});
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(RouterProvider, { router }, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 26,
		columnNumber: 9
	}, this);
}
var import_jsx_dev_runtime$1, _jsxFileName$1, unlock, createMemoryHistory, createRootRoute, createRouter, RouterProvider;
function init_with_router() {
	return (init_with_router = __esmMin((() => {
		init_private_apis();
		init_implementation();
		import_jsx_dev_runtime$1 = require_jsx_dev_runtime();
		_jsxFileName$1 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/storybook/decorators/with-router.tsx";
		({unlock} = __dangerousOptInToUnstableAPIsOnlyForCoreModules("I acknowledge private features are not for use in themes or plugins and doing so will break in the next version of WordPress.", "@wordpress/storybook"));
		({createMemoryHistory, createRootRoute, createRouter, RouterProvider} = unlock(privateApis));
		try {
			withRouter.__docgenInfo = {
				"description": "Storybook decorator that provides a router context.\n\nWraps stories in a minimal tanstack router (via `@wordpress/route` private\nAPIs) so that components consuming `Link` from `@wordpress/route` can\nrender without errors.",
				"displayName": "withRouter",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/storybook/decorators/with-router.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region stories/design-system/theme-example-application.story.tsx
function getSidebarThemePreset(value) {
	return SIDEBAR_THEME_PRESETS.find((preset) => preset.id === value) ?? SIDEBAR_THEME_PRESETS[0];
}
function SidebarThemeControls({ selectedTheme, onSelectTheme }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack, {
		direction: "row",
		gap: "sm",
		align: "center",
		justify: "space-between",
		style: {
			flexWrap: "wrap",
			marginBlockEnd: "var(--wpds-dimension-gap-md, 12px)"
		},
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, {
			variant: "heading-sm",
			children: "Sidebar theme"
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 72,
			columnNumber: 4
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack, {
			direction: "row",
			gap: "xs",
			render: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				role: "group",
				"aria-label": "Sidebar theme"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 76,
				columnNumber: 14
			}, this),
			children: SIDEBAR_THEME_PRESETS.map((preset) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
				size: "compact",
				variant: selectedTheme === preset.id ? "solid" : "outline",
				"aria-pressed": selectedTheme === preset.id,
				onClick: () => onSelectTheme(preset.id),
				style: { gap: "var(--wpds-dimension-gap-xs, 4px)" },
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
					"aria-hidden": "true",
					style: {
						display: "flex",
						isolation: "isolate"
					},
					children: Object.values(preset.colors).map((color, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: {
						backgroundColor: color,
						border: "var(--wpds-border-width-xs, 1px) solid var(--wpds-color-stroke-surface-neutral, #dbdbdb)",
						borderRadius: "50%",
						boxSizing: "border-box",
						display: "block",
						height: "var(--wpds-dimension-size-xs, 20px)",
						marginInlineStart: index === 0 ? 0 : "-4px",
						width: "var(--wpds-dimension-size-xs, 20px)",
						zIndex: -index
					} }, color, false, {
						fileName: _jsxFileName,
						lineNumber: 98,
						columnNumber: 10
					}, this))
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 89,
					columnNumber: 7
				}, this), preset.title]
			}, preset.id, true, {
				fileName: _jsxFileName,
				lineNumber: 79,
				columnNumber: 6
			}, this))
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 73,
			columnNumber: 4
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 62,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime, useArgs, useState, _jsxFileName, SIDEBAR_THEME_PRESETS, sidebarNavItems, siteLanguageOptions, meta, ExampleApplication;
function init_theme_example_application_story() {
	return (init_theme_example_application_story = __esmMin((() => {
		init_breadcrumbs(), init_page();
		init_build_module$2();
		init_build_module();
		init_badge(), init_button(), init_root$2(), init_header$1(), init_title$2(), init_content$1(), init_root$1(), init_popup$1(), init_header(), init_title$1(), init_close_icon_button(), init_content(), init_description(), init_footer(), init_action(), init_icon(), init_input_control(), init_link$1(), init_root(), init_trigger(), init_popup(), init_link_item(), init_item_label(), init_separator(), init_item(), init_root$3(), init_title(), init_description$1(), init_select_control(), init_stack(), init_root$4(), init_list(), init_tab(), init_panel(), init_text();
		init_with_router();
		init_with_design_system_theme();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		({useArgs, useState} = __STORYBOOK_MODULE_PREVIEW_API__);
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/storybook/stories/design-system/theme-example-application.story.tsx";
		SIDEBAR_THEME_PRESETS = [
			{
				id: "fresh",
				title: "Fresh",
				colors: {
					primary: "#3858e9",
					background: "#25292b"
				}
			},
			{
				id: "blue",
				title: "Blue",
				colors: {
					primary: "#437aa8",
					background: "#3876a8"
				}
			},
			{
				id: "ectoplasm",
				title: "Ectoplasm",
				colors: {
					primary: "#646c3e",
					background: "#4f386e"
				}
			}
		];
		sidebarNavItems = [
			"Dashboard",
			"Posts",
			"Pages",
			"Comments",
			"Appearance",
			"Settings"
		];
		siteLanguageOptions = [
			{
				value: "en-US",
				label: "English (United States)"
			},
			{
				value: "en-GB",
				label: "English (United Kingdom)"
			},
			{
				value: "fr-FR",
				label: "Français"
			},
			{
				value: "de-DE",
				label: "Deutsch"
			},
			{
				value: "ja",
				label: "日本語"
			}
		];
		meta = {
			title: "Design System/Theme/Theme Provider/Example Application",
			component: ThemeProvider,
			parameters: {
				controls: { expanded: true },
				docs: { canvas: { sourceState: "hidden" } }
			}
		};
		ExampleApplication = {
			args: { sidebarTheme: SIDEBAR_THEME_PRESETS[0].id },
			render: function Render(_, context) {
				const [{ sidebarTheme }, updateArgs] = useArgs();
				const [isSiteDetailsOpen, setIsSiteDetailsOpen] = useState(false);
				const rootThemeSettings = getDesignSystemThemeSettings(context.globals);
				const sidebarThemePreset = getSidebarThemePreset(sidebarTheme);
				const generalSettingsId = `${context.id}-general-settings`;
				const displaySettingsId = `${context.id}-display-settings`;
				return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SidebarThemeControls, {
					selectedTheme: sidebarThemePreset.id,
					onSelectTheme: (selectedSidebarTheme) => updateArgs({ sidebarTheme: selectedSidebarTheme })
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 173,
					columnNumber: 5
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ThemeProvider, {
					color: sidebarThemePreset.colors,
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						style: {
							display: "grid",
							gridTemplateColumns: "200px 1fr",
							minHeight: "500px",
							color: "var(--wpds-color-foreground-content-neutral, #1e1e1e)",
							borderRadius: "var(--wpds-border-radius-xl, 12px)",
							border: "var(--wpds-border-width-xs, 1px) solid var(--wpds-color-stroke-surface-neutral-weak, #f0f0f0)",
							overflow: "hidden"
						},
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack, {
							direction: "column",
							gap: "xl",
							style: {
								backgroundColor: "var(--wpds-color-background-surface-neutral-weak, #f4f4f4)",
								padding: "var(--wpds-dimension-padding-xl, 20px) var(--wpds-dimension-padding-lg, 16px)",
								borderInlineEnd: "var(--wpds-border-width-xs, 1px) solid var(--wpds-color-stroke-surface-neutral-weak, #f0f0f0)"
							},
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, {
									variant: "heading-sm",
									render: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 204,
										columnNumber: 44
									}, this),
									children: "My App"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 204,
									columnNumber: 8
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack, {
									direction: "column",
									gap: "xs",
									render: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 211,
										columnNumber: 19
									}, this),
									style: {
										listStyle: "none",
										margin: 0,
										padding: 0
									},
									children: sidebarNavItems.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, {
										variant: "body-md",
										children: item
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 220,
										columnNumber: 12
									}, this) }, item, false, {
										fileName: _jsxFileName,
										lineNumber: 219,
										columnNumber: 11
									}, this))
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 208,
									columnNumber: 9
								}, this) }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 207,
									columnNumber: 8
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Root$1, {
									open: isSiteDetailsOpen,
									onOpenChange: setIsSiteDetailsOpen,
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Root, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trigger, {
										render: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
											size: "compact",
											variant: "outline",
											tone: "neutral",
											style: {
												justifyContent: "flex-start",
												width: "100%"
											}
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 235,
											columnNumber: 13
										}, this),
										children: "Site actions"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 233,
										columnNumber: 11
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Popup, { children: [
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LinkItem, {
											href: `#${generalSettingsId}`,
											children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ItemLabel, { children: "General settings" }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 253,
												columnNumber: 13
											}, this)
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 250,
											columnNumber: 12
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LinkItem, {
											href: `#${displaySettingsId}`,
											children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ItemLabel, { children: "Display settings" }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 260,
												columnNumber: 13
											}, this)
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 257,
											columnNumber: 12
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Separator, {}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 264,
											columnNumber: 12
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Item, {
											onClick: () => setIsSiteDetailsOpen(true),
											children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ItemLabel, { children: "View site details…" }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 270,
												columnNumber: 13
											}, this)
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 265,
											columnNumber: 12
										}, this)
									] }, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 249,
										columnNumber: 11
									}, this)] }, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 232,
										columnNumber: 10
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Popup$1, {
										size: "small",
										children: [
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Header, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Title$1, { children: "Site details" }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 278,
												columnNumber: 12
											}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CloseIconButton, {}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 281,
												columnNumber: 12
											}, this)] }, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 277,
												columnNumber: 11
											}, this),
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Content, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack, {
												direction: "column",
												gap: "sm",
												children: [
													/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Description, { children: "This sample dialog shows information about the current site." }, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 285,
														columnNumber: 13
													}, this),
													/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { children: [
														/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: "Site title:" }, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 291,
															columnNumber: 14
														}, this),
														" ",
														"My WordPress site"
													] }, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 290,
														columnNumber: 13
													}, this),
													/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { children: [
														/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: "Language:" }, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 295,
															columnNumber: 14
														}, this),
														" ",
														"English (United States)"
													] }, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 294,
														columnNumber: 13
													}, this)
												]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 284,
												columnNumber: 12
											}, this) }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 283,
												columnNumber: 11
											}, this),
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Footer, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Action, { children: "Done" }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 301,
												columnNumber: 12
											}, this) }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 300,
												columnNumber: 11
											}, this)
										]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 276,
										columnNumber: 10
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 228,
									columnNumber: 9
								}, this) }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 227,
									columnNumber: 8
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 192,
							columnNumber: 7
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(page_default, {
							ariaLabel: "Level 1 breadcrumb",
							visual: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, {
								icon: wordpress_default,
								size: 24
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 310,
								columnNumber: 17
							}, this),
							subTitle: "All of the subtitle text you need goes here.",
							breadcrumbs: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(breadcrumbs_default, { items: [{
								label: "Root breadcrumb",
								to: "/connectors"
							}, { label: "Level 1 breadcrumb" }] }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 313,
								columnNumber: 9
							}, this),
							badges: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Badge, {
								intent: "informational",
								children: "Status"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 324,
								columnNumber: 9
							}, this),
							actions: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
								size: "compact",
								variant: "solid",
								children: "Save"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 328,
								columnNumber: 10
							}, this) }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 327,
								columnNumber: 9
							}, this),
							showSidebarToggle: false,
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								style: {
									display: "grid",
									flex: 1
								},
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ThemeProvider, {
									...rootThemeSettings,
									children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										style: {
											boxSizing: "border-box",
											backgroundColor: "var(--wpds-color-background-surface-neutral, #fcfcfc)",
											color: "var(--wpds-color-foreground-content-neutral, #1e1e1e)",
											height: "100%",
											padding: "var(--wpds-dimension-padding-lg, 16px) var(--wpds-dimension-padding-2xl, 24px)"
										},
										children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack, {
											direction: "column",
											gap: "lg",
											style: {
												width: "100%",
												maxWidth: "640px",
												marginInline: "auto"
											},
											children: [
												/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Root$3, {
													intent: "info",
													children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Title, { children: "Welcome to your new site" }, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 363,
														columnNumber: 13
													}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Description$1, { children: "Complete the steps below to finish setting up." }, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 366,
														columnNumber: 13
													}, this)]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 362,
													columnNumber: 12
												}, this),
												/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Root$2, {
													id: generalSettingsId,
													children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Header$1, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Title$2, { children: "General" }, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 375,
														columnNumber: 14
													}, this) }, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 374,
														columnNumber: 13
													}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Content$1, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack, {
														direction: "column",
														gap: "md",
														children: [
															/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { children: "Configure the basic settings for your site. The fields below adopt the corner radius preset alongside cards, buttons, and other surfaces." }, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 384,
																columnNumber: 15
															}, this),
															/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InputControl, {
																label: "Site title",
																placeholder: "My WordPress site",
																defaultValue: "My WordPress site"
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 394,
																columnNumber: 15
															}, this),
															/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InputControl, {
																label: "Tagline",
																description: "A short phrase shown below the site title.",
																placeholder: "Just another WordPress site"
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 399,
																columnNumber: 15
															}, this),
															/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InputControl, {
																label: "Admin email address",
																type: "email",
																placeholder: "you@example.com",
																defaultValue: "admin@example.com"
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 404,
																columnNumber: 15
															}, this),
															/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectControl, {
																label: "Site language",
																description: "The default language for the site interface.",
																items: siteLanguageOptions,
																defaultValue: siteLanguageOptions[0]
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 410,
																columnNumber: 15
															}, this),
															/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack, {
																direction: "row",
																style: { justifyContent: "flex-end" },
																children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { children: "Save" }, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 427,
																	columnNumber: 16
																}, this)
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 420,
																columnNumber: 15
															}, this)
														]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 380,
														columnNumber: 14
													}, this) }, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 379,
														columnNumber: 13
													}, this)]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 373,
													columnNumber: 12
												}, this),
												/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Root$2, {
													id: displaySettingsId,
													children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Header$1, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Title$2, { children: "Display" }, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 438,
														columnNumber: 14
													}, this) }, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 437,
														columnNumber: 13
													}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Content$1, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Root$4, {
														defaultValue: "appearance",
														children: [
															/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(List, {
																variant: "minimal",
																children: [
																	/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tab, {
																		value: "appearance",
																		children: "Appearance"
																	}, void 0, false, {
																		fileName: _jsxFileName,
																		lineNumber: 445,
																		columnNumber: 16
																	}, this),
																	/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tab, {
																		value: "layout",
																		children: "Layout"
																	}, void 0, false, {
																		fileName: _jsxFileName,
																		lineNumber: 448,
																		columnNumber: 16
																	}, this),
																	/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tab, {
																		value: "accessibility",
																		children: "Accessibility"
																	}, void 0, false, {
																		fileName: _jsxFileName,
																		lineNumber: 451,
																		columnNumber: 16
																	}, this)
																]
															}, void 0, true, {
																fileName: _jsxFileName,
																lineNumber: 444,
																columnNumber: 15
															}, this),
															/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Panel, {
																value: "appearance",
																children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack, {
																	direction: "column",
																	gap: "md",
																	style: { paddingBlockStart: "var(--wpds-dimension-padding-md, 12px)" },
																	children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { children: [
																		"Control how your site looks to visitors. Adjust",
																		" ",
																		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link$1, {
																			href: "#",
																			children: "typography"
																		}, void 0, false, {
																			fileName: _jsxFileName,
																			lineNumber: 470,
																			columnNumber: 18
																		}, this),
																		",",
																		" ",
																		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link$1, {
																			href: "#",
																			children: "colors"
																		}, void 0, false, {
																			fileName: _jsxFileName,
																			lineNumber: 474,
																			columnNumber: 18
																		}, this),
																		", and spacing to match your brand."
																	] }, void 0, true, {
																		fileName: _jsxFileName,
																		lineNumber: 464,
																		columnNumber: 17
																	}, this)
																}, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 456,
																	columnNumber: 16
																}, this)
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 455,
																columnNumber: 15
															}, this),
															/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Panel, {
																value: "layout",
																children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack, {
																	direction: "column",
																	gap: "md",
																	style: { paddingBlockStart: "var(--wpds-dimension-padding-md, 12px)" },
																	children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { children: [
																		"Choose a layout structure for your pages. Options include full-width, boxed, and",
																		" ",
																		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link$1, {
																			href: "#",
																			children: "custom layouts"
																		}, void 0, false, {
																			fileName: _jsxFileName,
																			lineNumber: 503,
																			columnNumber: 18
																		}, this),
																		"."
																	] }, void 0, true, {
																		fileName: _jsxFileName,
																		lineNumber: 493,
																		columnNumber: 17
																	}, this)
																}, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 485,
																	columnNumber: 16
																}, this)
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 484,
																columnNumber: 15
															}, this),
															/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Panel, {
																value: "accessibility",
																children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack, {
																	direction: "column",
																	gap: "md",
																	style: { paddingBlockStart: "var(--wpds-dimension-padding-md, 12px)" },
																	children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { children: [
																		"Review your site's",
																		" ",
																		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link$1, {
																			href: "#",
																			children: "accessibility settings"
																		}, void 0, false, {
																			fileName: _jsxFileName,
																			lineNumber: 523,
																			columnNumber: 18
																		}, this),
																		" ",
																		"to ensure it meets WCAG guidelines."
																	] }, void 0, true, {
																		fileName: _jsxFileName,
																		lineNumber: 520,
																		columnNumber: 17
																	}, this)
																}, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 512,
																	columnNumber: 16
																}, this)
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 511,
																columnNumber: 15
															}, this)
														]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 443,
														columnNumber: 14
													}, this) }, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 442,
														columnNumber: 13
													}, this)]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 436,
													columnNumber: 12
												}, this)
											]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 353,
											columnNumber: 11
										}, this)
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 342,
										columnNumber: 10
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 341,
									columnNumber: 9
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 335,
								columnNumber: 8
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 308,
							columnNumber: 7
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 180,
						columnNumber: 6
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 179,
					columnNumber: 5
				}, this)] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 172,
					columnNumber: 4
				}, this);
			},
			decorators: [withRouter],
			parameters: { controls: { disable: true } }
		};
		try {
			ExampleApplication.__docgenInfo = {
				"description": "A mock application demonstrating nested `ThemeProvider` components. The\napplication shell uses its own color preset, while the main content\nexplicitly reapplies the root settings from the Storybook Theme toolbar.",
				"displayName": "ExampleApplication",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/storybook/stories/design-system/theme-example-application.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		ExampleApplication.parameters = {
			...ExampleApplication.parameters,
			docs: {
				...ExampleApplication.parameters?.docs,
				source: {
					originalSource: "{\n  args: {\n    sidebarTheme: SIDEBAR_THEME_PRESETS[0].id\n  },\n  render: function Render(_, context) {\n    const [{\n      sidebarTheme\n    }, updateArgs] = useArgs<ExampleApplicationArgs>();\n    const [isSiteDetailsOpen, setIsSiteDetailsOpen] = useState(false);\n    const rootThemeSettings = getDesignSystemThemeSettings(context.globals);\n    const sidebarThemePreset = getSidebarThemePreset(sidebarTheme);\n    const generalSettingsId = `${context.id}-general-settings`;\n    const displaySettingsId = `${context.id}-display-settings`;\n    return <div>\n                <SidebarThemeControls selectedTheme={sidebarThemePreset.id} onSelectTheme={selectedSidebarTheme => updateArgs({\n        sidebarTheme: selectedSidebarTheme\n      })} />\n                <ThemeProvider color={sidebarThemePreset.colors}>\n                    <div style={{\n          display: 'grid',\n          gridTemplateColumns: '200px 1fr',\n          minHeight: '500px',\n          color: 'var(--wpds-color-foreground-content-neutral)',\n          borderRadius: 'var(--wpds-border-radius-xl)',\n          border: 'var(--wpds-border-width-xs) solid var(--wpds-color-stroke-surface-neutral-weak)',\n          overflow: 'hidden'\n        }}>\n                        {/* Sidebar */}\n                        <Stack direction=\"column\" gap=\"xl\" style={{\n            backgroundColor: 'var(--wpds-color-background-surface-neutral-weak)',\n            padding: 'var(--wpds-dimension-padding-xl) var(--wpds-dimension-padding-lg)',\n            borderInlineEnd: 'var(--wpds-border-width-xs) solid var(--wpds-color-stroke-surface-neutral-weak)'\n          }}>\n                            <Text variant=\"heading-sm\" render={<h2 />}>\n                                My App\n                            </Text>\n                            <nav>\n                                <Stack direction=\"column\" gap=\"xs\" render={<ul />} style={{\n                listStyle: 'none',\n                margin: 0,\n                padding: 0\n              }}>\n                                    {sidebarNavItems.map(item => <li key={item}>\n                                            <Text variant=\"body-md\">\n                                                {item}\n                                            </Text>\n                                        </li>)}\n                                </Stack>\n                            </nav>\n                            <div>\n                                <Dialog.Root open={isSiteDetailsOpen} onOpenChange={setIsSiteDetailsOpen}>\n                                    <Menu.Root>\n                                        <Menu.Trigger render={<Button size=\"compact\" variant=\"outline\" tone=\"neutral\" style={{\n                    justifyContent: 'flex-start',\n                    width: '100%'\n                  }} />}>\n                                            Site actions\n                                        </Menu.Trigger>\n                                        <Menu.Popup>\n                                            <Menu.LinkItem href={`#${generalSettingsId}`}>\n                                                <Menu.ItemLabel>\n                                                    General settings\n                                                </Menu.ItemLabel>\n                                            </Menu.LinkItem>\n                                            <Menu.LinkItem href={`#${displaySettingsId}`}>\n                                                <Menu.ItemLabel>\n                                                    Display settings\n                                                </Menu.ItemLabel>\n                                            </Menu.LinkItem>\n                                            <Menu.Separator />\n                                            <Menu.Item onClick={() => setIsSiteDetailsOpen(true)}>\n                                                <Menu.ItemLabel>\n                                                    View site details…\n                                                </Menu.ItemLabel>\n                                            </Menu.Item>\n                                        </Menu.Popup>\n                                    </Menu.Root>\n                                    <Dialog.Popup size=\"small\">\n                                        <Dialog.Header>\n                                            <Dialog.Title>\n                                                Site details\n                                            </Dialog.Title>\n                                            <Dialog.CloseIconButton />\n                                        </Dialog.Header>\n                                        <Dialog.Content>\n                                            <Stack direction=\"column\" gap=\"sm\">\n                                                <Dialog.Description>\n                                                    This sample dialog shows\n                                                    information about the\n                                                    current site.\n                                                </Dialog.Description>\n                                                <Text>\n                                                    <strong>Site title:</strong>{' '}\n                                                    My WordPress site\n                                                </Text>\n                                                <Text>\n                                                    <strong>Language:</strong>{' '}\n                                                    English (United States)\n                                                </Text>\n                                            </Stack>\n                                        </Dialog.Content>\n                                        <Dialog.Footer>\n                                            <Dialog.Action>Done</Dialog.Action>\n                                        </Dialog.Footer>\n                                    </Dialog.Popup>\n                                </Dialog.Root>\n                            </div>\n                        </Stack>\n\n                        <Page ariaLabel=\"Level 1 breadcrumb\" visual={<Icon icon={wordpress} size={24} />} subTitle=\"All of the subtitle text you need goes here.\" breadcrumbs={<Breadcrumbs items={[{\n            label: 'Root breadcrumb',\n            to: '/connectors'\n          }, {\n            label: 'Level 1 breadcrumb'\n          }]} />} badges={<Badge intent=\"informational\">Status</Badge>} actions={<>\n                                    <Button size=\"compact\" variant=\"solid\">\n                                        Save\n                                    </Button>\n                                </>} showSidebarToggle={false}>\n                            <div style={{\n              display: 'grid',\n              flex: 1\n            }}>\n                                <ThemeProvider {...rootThemeSettings}>\n                                    <div style={{\n                  boxSizing: 'border-box',\n                  backgroundColor: 'var(--wpds-color-background-surface-neutral)',\n                  color: 'var(--wpds-color-foreground-content-neutral)',\n                  height: '100%',\n                  padding: 'var(--wpds-dimension-padding-lg) var(--wpds-dimension-padding-2xl)'\n                }}>\n                                        <Stack direction=\"column\" gap=\"lg\" style={{\n                    width: '100%',\n                    maxWidth: '640px',\n                    marginInline: 'auto'\n                  }}>\n                                            <Notice.Root intent=\"info\">\n                                                <Notice.Title>\n                                                    Welcome to your new site\n                                                </Notice.Title>\n                                                <Notice.Description>\n                                                    Complete the steps below to\n                                                    finish setting up.\n                                                </Notice.Description>\n                                            </Notice.Root>\n\n                                            {/* Card 1: General */}\n                                            <Card.Root id={generalSettingsId}>\n                                                <Card.Header>\n                                                    <Card.Title>\n                                                        General\n                                                    </Card.Title>\n                                                </Card.Header>\n                                                <Card.Content>\n                                                    <Stack direction=\"column\" gap=\"md\">\n                                                        <Text>\n                                                            Configure the basic\n                                                            settings for your\n                                                            site. The fields\n                                                            below adopt the\n                                                            corner radius preset\n                                                            alongside cards,\n                                                            buttons, and other\n                                                            surfaces.\n                                                        </Text>\n                                                        <InputControl label=\"Site title\" placeholder=\"My WordPress site\" defaultValue=\"My WordPress site\" />\n                                                        <InputControl label=\"Tagline\" description=\"A short phrase shown below the site title.\" placeholder=\"Just another WordPress site\" />\n                                                        <InputControl label=\"Admin email address\" type=\"email\" placeholder=\"you@example.com\" defaultValue=\"admin@example.com\" />\n                                                        <SelectControl label=\"Site language\" description=\"The default language for the site interface.\" items={siteLanguageOptions} defaultValue={siteLanguageOptions[0]} />\n                                                        <Stack direction=\"row\" style={{\n                            justifyContent: 'flex-end'\n                          }}>\n                                                            <Button>\n                                                                Save\n                                                            </Button>\n                                                        </Stack>\n                                                    </Stack>\n                                                </Card.Content>\n                                            </Card.Root>\n\n                                            {/* Card 2: Display */}\n                                            <Card.Root id={displaySettingsId}>\n                                                <Card.Header>\n                                                    <Card.Title>\n                                                        Display\n                                                    </Card.Title>\n                                                </Card.Header>\n                                                <Card.Content>\n                                                    <Tabs.Root defaultValue=\"appearance\">\n                                                        <Tabs.List variant=\"minimal\">\n                                                            <Tabs.Tab value=\"appearance\">\n                                                                Appearance\n                                                            </Tabs.Tab>\n                                                            <Tabs.Tab value=\"layout\">\n                                                                Layout\n                                                            </Tabs.Tab>\n                                                            <Tabs.Tab value=\"accessibility\">\n                                                                Accessibility\n                                                            </Tabs.Tab>\n                                                        </Tabs.List>\n                                                        <Tabs.Panel value=\"appearance\">\n                                                            <Stack direction=\"column\" gap=\"md\" style={{\n                              paddingBlockStart: 'var(--wpds-dimension-padding-md)'\n                            }}>\n                                                                <Text>\n                                                                    Control how\n                                                                    your site\n                                                                    looks to\n                                                                    visitors.\n                                                                    Adjust{' '}\n                                                                    <Link href=\"#\">\n                                                                        typography\n                                                                    </Link>\n                                                                    ,{' '}\n                                                                    <Link href=\"#\">\n                                                                        colors\n                                                                    </Link>\n                                                                    , and\n                                                                    spacing to\n                                                                    match your\n                                                                    brand.\n                                                                </Text>\n                                                            </Stack>\n                                                        </Tabs.Panel>\n                                                        <Tabs.Panel value=\"layout\">\n                                                            <Stack direction=\"column\" gap=\"md\" style={{\n                              paddingBlockStart: 'var(--wpds-dimension-padding-md)'\n                            }}>\n                                                                <Text>\n                                                                    Choose a\n                                                                    layout\n                                                                    structure\n                                                                    for your\n                                                                    pages.\n                                                                    Options\n                                                                    include\n                                                                    full-width,\n                                                                    boxed, and{' '}\n                                                                    <Link href=\"#\">\n                                                                        custom\n                                                                        layouts\n                                                                    </Link>\n                                                                    .\n                                                                </Text>\n                                                            </Stack>\n                                                        </Tabs.Panel>\n                                                        <Tabs.Panel value=\"accessibility\">\n                                                            <Stack direction=\"column\" gap=\"md\" style={{\n                              paddingBlockStart: 'var(--wpds-dimension-padding-md)'\n                            }}>\n                                                                <Text>\n                                                                    Review your\n                                                                    site&apos;s{' '}\n                                                                    <Link href=\"#\">\n                                                                        accessibility\n                                                                        settings\n                                                                    </Link>{' '}\n                                                                    to ensure it\n                                                                    meets WCAG\n                                                                    guidelines.\n                                                                </Text>\n                                                            </Stack>\n                                                        </Tabs.Panel>\n                                                    </Tabs.Root>\n                                                </Card.Content>\n                                            </Card.Root>\n                                        </Stack>\n                                    </div>\n                                </ThemeProvider>\n                            </div>\n                        </Page>\n                    </div>\n                </ThemeProvider>\n            </div>;\n  },\n  decorators: [withRouter],\n  parameters: {\n    controls: {\n      disable: true\n    }\n  }\n}",
					...ExampleApplication.parameters?.docs?.source
				},
				description: {
					story: "A mock application demonstrating nested `ThemeProvider` components. The\napplication shell uses its own color preset, while the main content\nexplicitly reapplies the root settings from the Storybook Theme toolbar.",
					...ExampleApplication.parameters?.docs?.description
				}
			}
		};
	})))();
}
//#endregion
init_theme_example_application_story();
export { ExampleApplication, meta as default };
