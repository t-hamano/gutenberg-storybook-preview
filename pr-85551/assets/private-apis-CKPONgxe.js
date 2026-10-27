import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C1RZKCc6.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { n as init_build_module, t as deprecated } from "./build-module-BWCORUbm.js";
import { n as init_implementation, t as __dangerousOptInToUnstableAPIsOnlyForCoreModules } from "./implementation-CMzZuaZ2.js";
import { n as use_instance_id_default, t as init_use_instance_id } from "./use-instance-id-BznKyZc1.js";
import { n as useMergeRefs, t as init_use_merge_refs } from "./use-merge-refs-BAtuPB1L.js";
import { n as useEvent, t as init_use_event } from "./use-event-BTRhHipl.js";
import { o as isRTL, t as init_build_module$1 } from "./build-module-v04us4E2.js";
import { a as init_clsx, i as clsx } from "./iframe-UtSZlYID.js";
import { n as warning, t as init_build_module$2 } from "./build-module-B5spW8IS.js";
import { a as SVG, o as init_svg, t as Circle } from "./svg-BLFZKYXr.js";
import { t as icon_default } from "./icon-DEDMwo2v.js";
import { t as caution_default } from "./caution-CZRZ4D1O.js";
import { t as check_default } from "./check-BK5allCs.js";
import { t as chevron_right_small_default } from "./chevron-right-small-D6UdVKR0.js";
import { n as published_default, r as error_default } from "./published-DCPAJvHl.js";
import { t as info_default } from "./info-nGPANNt-.js";
import { n as init_control_with_error, t as ControlWithError } from "./control-with-error-Dexaq_6B.js";
import { i as init_dist, s as useStoreState } from "./CDh2UhnG-BRjcGYWx.js";
import { a as TabList$1, c as init_tab$1, i as init_tab_panel, n as useTabStore, o as init_tab_list, r as TabPanel$1, s as Tab$1, t as init_tab_store } from "./tab-store-D3Id1TNT.js";
import { _ as MenuButton, a as MenuItemRadio, b as init_menu$1, c as init_menu_item_checkbox, d as MenuItem, f as init_menu_item, g as init_menu_group, h as MenuGroup, i as useMenuStore, l as MenuItemCheck, m as init_menu_group_label, n as init_menu_separator, o as init_menu_item_radio, p as MenuGroupLabel, r as init_menu_store, s as MenuItemCheckbox, t as MenuSeparator, u as init_menu_item_check, v as init_menu_button, y as Menu$1 } from "./menu-separator-CjbOv1-z.js";
import { l as positionToPlacement, n as init_component$1, s as init_utils, t as component_default$1 } from "./component-Cvxw1Y5Q.js";
import { a as init_hook, o as useTruncate } from "./hook-8Ggu2zt9.js";
import { i as contextConnectWithoutRef, l as init_context_system_provider, n as useContextSystem, o as init_context_connect, r as contextConnect, s as ComponentsContext, t as init_use_context_system } from "./use-context-system-4MMWHyS1.js";
import { n as init_component$2, t as component_default$2 } from "./component-CFOx0tK5.js";
import { f as component_default$3, n as init_input_control$1, p as init_component$3, r as input_control_default } from "./input-control-nLdfCkqP.js";
import { n as useDrag, t as init_use_gesture_react_esm } from "./use-gesture-react.esm-BnGrlGd-.js";
import { n as base_control_default, r as init_base_control } from "./base-control-COIsJz79.js";
import { a as init_hooks, i as useTrackElementOffsetRect, n as useAnimatedOffsetRect, o as useBaseControlProps, r as init_element_rect, t as init_use_animated_offset_rect } from "./use-animated-offset-rect-BrlFeMg1.js";
import { n as init_icon$1, t as icon_default$1 } from "./icon-B-T-5iD5.js";
import { r as init_build_module$3 } from "./library.story-CbQx3MQ6.js";
//#region ../packages/components/build-module/truncate/component.mjs
function UnconnectedTruncate(props, forwardedRef) {
	const truncateProps = useTruncate(props);
	return /* @__PURE__ */ (0, import_jsx_runtime$22.jsx)(component_default$2, {
		as: "span",
		...truncateProps,
		ref: forwardedRef
	});
}
var import_jsx_runtime$22, Truncate, component_default;
function init_component() {
	return (init_component = __esmMin((() => {
		init_context_connect();
		init_component$2();
		init_hook();
		import_jsx_runtime$22 = require_jsx_runtime();
		Truncate = contextConnect(UnconnectedTruncate, "Truncate");
		component_default = Truncate;
	})))();
}
//#endregion
//#region ../packages/components/build-module/lock-unlock.mjs
var lock, unlock;
function init_lock_unlock() {
	return (init_lock_unlock = __esmMin((() => {
		init_implementation();
		({lock, unlock} = __dangerousOptInToUnstableAPIsOnlyForCoreModules("I acknowledge private features are not for use in themes or plugins and doing so will break in the next version of WordPress.", "@wordpress/components"));
	})))();
}
//#endregion
//#region ../packages/components/build-module/textarea-control/index.mjs
function getRuntime$14() {
	const globalScope = globalThis;
	if (globalScope.__wpStyleRuntime) return globalScope.__wpStyleRuntime;
	globalScope.__wpStyleRuntime = {
		documents: /* @__PURE__ */ new Map(),
		styles: /* @__PURE__ */ new Map(),
		injectedStyles: /* @__PURE__ */ new WeakMap()
	};
	if (typeof document !== "undefined") registerDocument$14(document);
	return globalScope.__wpStyleRuntime;
}
function documentContainsStyleHash$14(targetDocument, hash) {
	if (!targetDocument.head) return false;
	for (const style of targetDocument.head.querySelectorAll(`style[${STYLE_HASH_ATTRIBUTE$14}]`)) if (style.getAttribute(STYLE_HASH_ATTRIBUTE$14) === hash) return true;
	return false;
}
function injectStyle$14(targetDocument, hash, css) {
	if (!targetDocument.head) return;
	const runtime = getRuntime$14();
	let injectedStyles = runtime.injectedStyles.get(targetDocument);
	if (!injectedStyles) {
		injectedStyles = /* @__PURE__ */ new Set();
		runtime.injectedStyles.set(targetDocument, injectedStyles);
	}
	if (injectedStyles.has(hash)) return;
	if (documentContainsStyleHash$14(targetDocument, hash)) {
		injectedStyles.add(hash);
		return;
	}
	const style = targetDocument.createElement("style");
	style.setAttribute(STYLE_HASH_ATTRIBUTE$14, hash);
	style.appendChild(targetDocument.createTextNode(css));
	targetDocument.head.appendChild(style);
	injectedStyles.add(hash);
}
function registerDocument$14(targetDocument) {
	const runtime = getRuntime$14();
	runtime.documents.set(targetDocument, (runtime.documents.get(targetDocument) ?? 0) + 1);
	for (const [hash, css] of runtime.styles) injectStyle$14(targetDocument, hash, css);
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
function registerStyle$14(hash, css) {
	const runtime = getRuntime$14();
	runtime.styles.set(hash, css);
	for (const targetDocument of runtime.documents.keys()) injectStyle$14(targetDocument, hash, css);
}
function UnforwardedTextareaControl(props, ref) {
	const { __nextHasNoMarginBottom: _, label, hideLabelFromVision, value, help, onChange, rows = 4, className, ...additionalProps } = props;
	const id = `inspector-textarea-control-${use_instance_id_default(TextareaControl)}`;
	const onChangeValue = (event) => onChange(event.target.value);
	const classes = clsx("components-textarea-control", className);
	return /* @__PURE__ */ (0, import_jsx_runtime$21.jsx)(base_control_default, {
		label,
		hideLabelFromVision,
		id,
		help,
		className: classes,
		children: /* @__PURE__ */ (0, import_jsx_runtime$21.jsx)("textarea", {
			className: clsx("components-textarea-control__input", style_module_default$14.textarea),
			id,
			rows,
			onChange: onChangeValue,
			"aria-describedby": !!help ? id + "__help" : void 0,
			value,
			ref,
			...additionalProps
		})
	});
}
var import_jsx_runtime$21, STYLE_HASH_ATTRIBUTE$14, style_module_default$14, TextareaControl, textarea_control_default;
function init_textarea_control() {
	return (init_textarea_control = __esmMin((() => {
		init_clsx();
		init_use_instance_id();
		init_react();
		init_base_control();
		import_jsx_runtime$21 = require_jsx_runtime();
		STYLE_HASH_ATTRIBUTE$14 = "data-wp-hash";
		if (typeof process === "undefined" || false) registerStyle$14("6bf0085cf4", ".aa08a6e706634925__textarea{background:var(--wp-components-color-background,var(--wpds-color-background-surface-neutral-strong,#fff));border:var(--wpds-border-width-xs,1px) solid var(--wpds-color-stroke-interactive-neutral,#8d8d8d);border-radius:var(--wpds-border-radius-sm,2px);color:var(--wp-components-color-foreground,var(--wpds-color-foreground-content-neutral,#1e1e1e));display:block;font-family:-apple-system,system-ui,Segoe UI,Roboto,Oxygen-Sans,Ubuntu,Cantarell,Helvetica Neue,sans-serif;font-size:16px;line-height:normal;padding:6px 8px;resize:vertical;width:100%}@media (min-width:600px){.aa08a6e706634925__textarea{font-size:13px;line-height:normal}}.aa08a6e706634925__textarea:hover:not(:disabled,[aria-disabled=true]){border-color:var(--wpds-color-stroke-interactive-neutral-active,#6e6e6e)}.aa08a6e706634925__textarea:focus{border-color:var(--wpds-color-stroke-interactive-neutral,#8d8d8d);box-shadow:none;outline:var(--wpds-border-width-focus,var(--wp-admin-border-width-focus,2px)) solid var(--focus-color,var(--wpds-color-stroke-focus,var(--wp-admin-theme-color,#3858e9)));outline-offset:var(--wpds-border-width-focus,var(--wp-admin-border-width-focus,2px))}.aa08a6e706634925__textarea::placeholder{color:rgba(30,30,30,.62)}.aa08a6e706634925__textarea{line-height:20px;min-height:38px;padding:9px 11px}.aa08a6e706634925__textarea:disabled{background:var(--wp-components-color-background,var(--wpds-color-background-surface-neutral-strong,#fff));border-color:var(--wpds-color-stroke-interactive-neutral-disabled,#dbdbdb);color:var(--wpds-color-foreground-interactive-neutral-disabled,#8d8d8d)}.aa08a6e706634925__textarea::-webkit-input-placeholder{color:color-mix(in srgb,var(--wp-components-color-foreground,var(--wpds-color-foreground-content-neutral,#1e1e1e)),transparent 38%)}.aa08a6e706634925__textarea::-moz-placeholder{color:color-mix(in srgb,var(--wp-components-color-foreground,var(--wpds-color-foreground-content-neutral,#1e1e1e)),transparent 38%)}.aa08a6e706634925__textarea:-ms-input-placeholder{color:color-mix(in srgb,var(--wp-components-color-foreground,var(--wpds-color-foreground-content-neutral,#1e1e1e)),transparent 38%)}.is-dark-theme .aa08a6e706634925__textarea::-webkit-input-placeholder{color:color-mix(in srgb,var(--wp-components-color-background,var(--wpds-color-background-surface-neutral-strong,#fff)),transparent 35%)}.is-dark-theme .aa08a6e706634925__textarea::-moz-placeholder{color:color-mix(in srgb,var(--wp-components-color-background,var(--wpds-color-background-surface-neutral-strong,#fff)),transparent 35%)}.is-dark-theme .aa08a6e706634925__textarea:-ms-input-placeholder{color:color-mix(in srgb,var(--wp-components-color-background,var(--wpds-color-background-surface-neutral-strong,#fff)),transparent 35%)}.aa08a6e706634925__textarea:disabled::placeholder{color:var(--wpds-color-foreground-interactive-neutral-disabled,#8d8d8d)}");
		style_module_default$14 = { "textarea": "aa08a6e706634925__textarea" };
		TextareaControl = (0, import_react.forwardRef)(UnforwardedTextareaControl);
		TextareaControl.displayName = "TextareaControl";
		textarea_control_default = TextareaControl;
	})))();
}
//#endregion
//#region ../packages/components/build-module/menu/context.mjs
var Context;
function init_context() {
	return (init_context = __esmMin((() => {
		init_react();
		Context = (0, import_react.createContext)(void 0);
		Context.displayName = "MenuContext";
	})))();
}
//#endregion
//#region ../packages/components/build-module/menu/use-menu-item-hide-on-click.mjs
function focusDisclosureElement(disclosureElement) {
	disclosureElement.focus();
	if (disclosureElement.ownerDocument.activeElement === disclosureElement) return;
	const inertAncestor = disclosureElement.closest("[inert]");
	if (inertAncestor) inertAncestor.inert = false;
	disclosureElement.ownerDocument.defaultView?.HTMLElement.prototype.focus.call(disclosureElement);
}
function useMenuItemHideOnClick(store, hideOnClick) {
	return (0, import_react.useCallback)((event) => {
		if (!(typeof hideOnClick === "function" ? hideOnClick(event) : hideOnClick)) return false;
		if (!store || !("hideAll" in store)) return true;
		const menuElement = store.getState().contentElement;
		const activeElement = menuElement?.ownerDocument.activeElement;
		if (menuElement?.contains(activeElement ?? null)) {
			let rootStore = store;
			while (rootStore.parent) rootStore = rootStore.parent;
			const disclosureElement = rootStore.getState().disclosureElement;
			if (disclosureElement) focusDisclosureElement(disclosureElement);
		}
		return true;
	}, [hideOnClick, store]);
}
function init_use_menu_item_hide_on_click() {
	return (init_use_menu_item_hide_on_click = __esmMin((() => {
		init_react();
	})))();
}
//#endregion
//#region ../packages/components/build-module/menu/item.mjs
function getRuntime$13() {
	const globalScope = globalThis;
	if (globalScope.__wpStyleRuntime) return globalScope.__wpStyleRuntime;
	globalScope.__wpStyleRuntime = {
		documents: /* @__PURE__ */ new Map(),
		styles: /* @__PURE__ */ new Map(),
		injectedStyles: /* @__PURE__ */ new WeakMap()
	};
	if (typeof document !== "undefined") registerDocument$13(document);
	return globalScope.__wpStyleRuntime;
}
function documentContainsStyleHash$13(targetDocument, hash) {
	if (!targetDocument.head) return false;
	for (const style of targetDocument.head.querySelectorAll(`style[${STYLE_HASH_ATTRIBUTE$13}]`)) if (style.getAttribute(STYLE_HASH_ATTRIBUTE$13) === hash) return true;
	return false;
}
function injectStyle$13(targetDocument, hash, css) {
	if (!targetDocument.head) return;
	const runtime = getRuntime$13();
	let injectedStyles = runtime.injectedStyles.get(targetDocument);
	if (!injectedStyles) {
		injectedStyles = /* @__PURE__ */ new Set();
		runtime.injectedStyles.set(targetDocument, injectedStyles);
	}
	if (injectedStyles.has(hash)) return;
	if (documentContainsStyleHash$13(targetDocument, hash)) {
		injectedStyles.add(hash);
		return;
	}
	const style = targetDocument.createElement("style");
	style.setAttribute(STYLE_HASH_ATTRIBUTE$13, hash);
	style.appendChild(targetDocument.createTextNode(css));
	targetDocument.head.appendChild(style);
	injectedStyles.add(hash);
}
function registerDocument$13(targetDocument) {
	const runtime = getRuntime$13();
	runtime.documents.set(targetDocument, (runtime.documents.get(targetDocument) ?? 0) + 1);
	for (const [hash, css] of runtime.styles) injectStyle$13(targetDocument, hash, css);
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
function registerStyle$13(hash, css) {
	const runtime = getRuntime$13();
	runtime.styles.set(hash, css);
	for (const targetDocument of runtime.documents.keys()) injectStyle$13(targetDocument, hash, css);
}
var import_jsx_runtime$20, STYLE_HASH_ATTRIBUTE$13, style_module_default$13, Item;
function init_item() {
	return (init_item = __esmMin((() => {
		init_clsx();
		init_menu_item();
		init_react();
		init_context();
		init_use_menu_item_hide_on_click();
		import_jsx_runtime$20 = require_jsx_runtime();
		STYLE_HASH_ATTRIBUTE$13 = "data-wp-hash";
		if (typeof process === "undefined" || false) registerStyle$13("fbef06cd62", "._131511141326b11b__menu{outline:2px solid transparent!important;position:relative;z-index:1000000}.b6b687129dd092d1__menu-surface{background-color:var(--wp-components-color-background,var(--wpds-color-background-surface-neutral-strong,#fff));border-radius:4px;box-shadow:0 0 0 1px var(--wp-components-color-gray-300,var(--wpds-color-stroke-surface-neutral,#dbdbdb)),0 2px 3px rgba(0,0,0,.05),0 4px 5px rgba(0,0,0,.04),0 12px 12px rgba(0,0,0,.03),0 16px 16px rgba(0,0,0,.02);box-sizing:border-box;display:grid;grid-template-columns:minmax(0,max-content) 1fr;grid-template-rows:auto;max-height:var(--popover-available-height);max-width:320px;min-width:160px;overflow:auto;overscroll-behavior:contain;padding:4px}.b6b687129dd092d1__menu-surface:where(._59078aa9632a9595__is-toolbar){box-shadow:0 0 0 1px var(--wp-components-color-foreground,var(--wpds-color-foreground-content-neutral,#1e1e1e))}@media not (prefers-reduced-motion){._0965e4c0ecda2cad__menu-motion-root{transition-duration:var(--wpds-motion-duration-md,.2s),var(--wpds-motion-duration-sm,.1s);transition-property:transform,opacity;transition-timing-function:var(--wpds-motion-easing-expressive,cubic-bezier(.25,0,0,1)),linear;will-change:transform,opacity}._0965e4c0ecda2cad__menu-motion-root:not(:has(>.b6b687129dd092d1__menu-surface[data-submenu])){opacity:0}._0965e4c0ecda2cad__menu-motion-root:not(:has(>.b6b687129dd092d1__menu-surface[data-submenu])):has(>.b6b687129dd092d1__menu-surface[data-enter]){opacity:1}._0965e4c0ecda2cad__menu-motion-root:not(:has(>.b6b687129dd092d1__menu-surface[data-submenu])):has(>.b6b687129dd092d1__menu-surface[data-side=bottom]){transform:translateY(-4px)}._0965e4c0ecda2cad__menu-motion-root:not(:has(>.b6b687129dd092d1__menu-surface[data-submenu])):has(>.b6b687129dd092d1__menu-surface[data-side=top]){transform:translateY(4px)}._0965e4c0ecda2cad__menu-motion-root:not(:has(>.b6b687129dd092d1__menu-surface[data-submenu])):has(>.b6b687129dd092d1__menu-surface[data-side=left]){transform:translateX(4px)}._0965e4c0ecda2cad__menu-motion-root:not(:has(>.b6b687129dd092d1__menu-surface[data-submenu])):has(>.b6b687129dd092d1__menu-surface[data-side=right]){transform:translateX(-4px)}._0965e4c0ecda2cad__menu-motion-root:not(:has(>.b6b687129dd092d1__menu-surface[data-submenu])):has(>.b6b687129dd092d1__menu-surface[data-enter][data-side=bottom]),._0965e4c0ecda2cad__menu-motion-root:not(:has(>.b6b687129dd092d1__menu-surface[data-submenu])):has(>.b6b687129dd092d1__menu-surface[data-enter][data-side=top]){transform:translateY(0)}._0965e4c0ecda2cad__menu-motion-root:not(:has(>.b6b687129dd092d1__menu-surface[data-submenu])):has(>.b6b687129dd092d1__menu-surface[data-enter][data-side=left]),._0965e4c0ecda2cad__menu-motion-root:not(:has(>.b6b687129dd092d1__menu-surface[data-submenu])):has(>.b6b687129dd092d1__menu-surface[data-enter][data-side=right]){transform:translateX(0)}}.a8d8dc9b4f86d131__item{all:unset;align-items:center;box-sizing:border-box;cursor:var(--wpds-cursor-control,pointer);display:grid;grid-column:1/-1;grid-template-columns:minmax(0,max-content) 1fr;min-height:32px;position:relative}@supports (grid-template-columns:subgrid){.a8d8dc9b4f86d131__item{grid-template-columns:subgrid}}.a8d8dc9b4f86d131__item{border-radius:2px;color:var(--wp-components-color-foreground,var(--wpds-color-foreground-content-neutral,#1e1e1e));font-family:inherit;font-size:13px;font-weight:400;line-height:20px;outline:none;padding-block:4px;padding-inline:12px;scroll-margin:4px;user-select:none}.a8d8dc9b4f86d131__item[aria-disabled=true]{color:var(--wpds-color-foreground-interactive-neutral-disabled,#8d8d8d)}.a8d8dc9b4f86d131__item[data-active-item]:not([data-focus-visible]):not([aria-disabled=true]){background-color:var(--wp-components-color-accent,var(--wp-admin-theme-color,#3858e9));color:var(--wp-components-color-accent-inverted,var(--wpds-color-foreground-interactive-brand-strong,#fff))}.a8d8dc9b4f86d131__item[data-focus-visible]{box-shadow:0 0 0 1.5px var(--wp-components-color-accent,var(--wp-admin-theme-color,#3858e9));outline:2px solid transparent}._131511141326b11b__menu:not(:focus) .a8d8dc9b4f86d131__item:not(:focus)[aria-expanded=true]{background-color:var(--wp-components-color-gray-100,var(--wpds-color-background-surface-neutral,#fcfcfc));color:var(--wp-components-color-foreground,var(--wpds-color-foreground-content-neutral,#1e1e1e))}.a8d8dc9b4f86d131__item svg{fill:currentColor}._8b22cbfeb79a4270__item-prefix-wrapper{grid-column:1}.a63fce487b470227__checkbox-item>._8b22cbfeb79a4270__item-prefix-wrapper,.cc6238e7feede9fd__radio-item>._8b22cbfeb79a4270__item-prefix-wrapper{min-width:24px}._8b22cbfeb79a4270__item-prefix-wrapper:not(:empty),.a63fce487b470227__checkbox-item>._8b22cbfeb79a4270__item-prefix-wrapper,.cc6238e7feede9fd__radio-item>._8b22cbfeb79a4270__item-prefix-wrapper{margin-inline-end:8px}._8b22cbfeb79a4270__item-prefix-wrapper{align-items:center;color:var(--wp-components-color-gray-700,var(--wpds-color-foreground-content-neutral-weak,#707070));display:flex;justify-content:center}[aria-disabled=true]>._8b22cbfeb79a4270__item-prefix-wrapper,[data-active-item]:not([data-focus-visible])>._8b22cbfeb79a4270__item-prefix-wrapper{color:inherit}.b39622f9287a1a2f__item-content-wrapper{align-items:center;display:flex;gap:12px;grid-column:2;justify-content:space-between;pointer-events:none}._56ca6ca0990c2a9b__item-children-wrapper{display:inline-flex;flex:1;flex-direction:column;gap:4px}._97a83b395215bdd3__item-suffix-wrapper{align-items:center;color:var(--wp-components-color-gray-700,var(--wpds-color-foreground-content-neutral-weak,#707070));display:flex;flex:0 1 fit-content;gap:12px;justify-content:center;min-width:0;width:fit-content}[aria-disabled=true] :not(._131511141326b11b__menu) ._97a83b395215bdd3__item-suffix-wrapper,[data-active-item]:not([data-focus-visible]) :not(._131511141326b11b__menu) ._97a83b395215bdd3__item-suffix-wrapper{color:inherit}._68234318b0701028__group{display:contents}._3ca33d86e18b686c__group-label{grid-column:1/-1;padding-block-end:8px;padding-block-start:12px;padding-inline:12px}.c6a6663859a16bc1__separator{background-color:var(--wp-components-color-gray-200,var(--wpds-color-stroke-surface-neutral,#dbdbdb));border:none;grid-column:1/-1;height:1px;margin-block:8px;margin-inline:12px;outline:2px solid transparent}.c6a6663859a16bc1__separator:where(._59078aa9632a9595__is-toolbar){background-color:var(--wp-components-color-foreground,var(--wpds-color-foreground-content-neutral,#1e1e1e))}._477317536d60b275__submenu-chevron-icon{transform:scaleX(1);width:6px}._477317536d60b275__submenu-chevron-icon:where(._402d50ebfd3f1b45__is-rtl){transform:scaleX(-1)}.b7d17e75a44b0b82__item-label{color:inherit;font-size:13px;line-height:20px}._1c05bcee36309dc5__item-help-text{color:var(--wp-components-color-gray-700,var(--wpds-color-foreground-content-neutral-weak,#707070));font-size:12px;line-height:16px;overflow-wrap:anywhere}[aria-disabled=true] :not(._131511141326b11b__menu) ._1c05bcee36309dc5__item-help-text,[data-active-item]:not([data-focus-visible]) :not(._131511141326b11b__menu) ._1c05bcee36309dc5__item-help-text{color:inherit}");
		style_module_default$13 = {
			"menu": "_131511141326b11b__menu",
			"menu-surface": "b6b687129dd092d1__menu-surface",
			"is-toolbar": "_59078aa9632a9595__is-toolbar",
			"menu-motion-root": "_0965e4c0ecda2cad__menu-motion-root",
			"item": "a8d8dc9b4f86d131__item",
			"item-prefix-wrapper": "_8b22cbfeb79a4270__item-prefix-wrapper",
			"checkbox-item": "a63fce487b470227__checkbox-item",
			"radio-item": "cc6238e7feede9fd__radio-item",
			"item-content-wrapper": "b39622f9287a1a2f__item-content-wrapper",
			"item-children-wrapper": "_56ca6ca0990c2a9b__item-children-wrapper",
			"item-suffix-wrapper": "_97a83b395215bdd3__item-suffix-wrapper",
			"group": "_68234318b0701028__group",
			"group-label": "_3ca33d86e18b686c__group-label",
			"separator": "c6a6663859a16bc1__separator",
			"submenu-chevron-icon": "_477317536d60b275__submenu-chevron-icon",
			"is-rtl": "_402d50ebfd3f1b45__is-rtl",
			"item-label": "b7d17e75a44b0b82__item-label",
			"item-help-text": "_1c05bcee36309dc5__item-help-text"
		};
		Item = (0, import_react.forwardRef)(function UnforwardedItem({ className, prefix, suffix, children, disabled = false, hideOnClick = true, store, ...props }, ref) {
			const menuContext = (0, import_react.useContext)(Context);
			const computedStore = store ?? menuContext?.store;
			const computedHideOnClick = useMenuItemHideOnClick(computedStore, hideOnClick);
			if (!menuContext?.store || !computedStore) throw new Error("Menu.Item can only be rendered inside a Menu component");
			return /* @__PURE__ */ (0, import_jsx_runtime$20.jsxs)(MenuItem, {
				ref,
				...props,
				className: clsx(style_module_default$13.item, className),
				accessibleWhenDisabled: true,
				disabled,
				store: computedStore,
				hideOnClick: computedHideOnClick,
				children: [/* @__PURE__ */ (0, import_jsx_runtime$20.jsx)("span", {
					className: style_module_default$13["item-prefix-wrapper"],
					children: prefix
				}), /* @__PURE__ */ (0, import_jsx_runtime$20.jsxs)("div", {
					className: style_module_default$13["item-content-wrapper"],
					children: [/* @__PURE__ */ (0, import_jsx_runtime$20.jsx)("div", {
						className: style_module_default$13["item-children-wrapper"],
						children
					}), suffix && /* @__PURE__ */ (0, import_jsx_runtime$20.jsx)("span", {
						className: style_module_default$13["item-suffix-wrapper"],
						children: suffix
					})]
				})]
			});
		});
	})))();
}
//#endregion
//#region ../packages/components/build-module/menu/checkbox-item.mjs
function getRuntime$12() {
	const globalScope = globalThis;
	if (globalScope.__wpStyleRuntime) return globalScope.__wpStyleRuntime;
	globalScope.__wpStyleRuntime = {
		documents: /* @__PURE__ */ new Map(),
		styles: /* @__PURE__ */ new Map(),
		injectedStyles: /* @__PURE__ */ new WeakMap()
	};
	if (typeof document !== "undefined") registerDocument$12(document);
	return globalScope.__wpStyleRuntime;
}
function documentContainsStyleHash$12(targetDocument, hash) {
	if (!targetDocument.head) return false;
	for (const style of targetDocument.head.querySelectorAll(`style[${STYLE_HASH_ATTRIBUTE$12}]`)) if (style.getAttribute(STYLE_HASH_ATTRIBUTE$12) === hash) return true;
	return false;
}
function injectStyle$12(targetDocument, hash, css) {
	if (!targetDocument.head) return;
	const runtime = getRuntime$12();
	let injectedStyles = runtime.injectedStyles.get(targetDocument);
	if (!injectedStyles) {
		injectedStyles = /* @__PURE__ */ new Set();
		runtime.injectedStyles.set(targetDocument, injectedStyles);
	}
	if (injectedStyles.has(hash)) return;
	if (documentContainsStyleHash$12(targetDocument, hash)) {
		injectedStyles.add(hash);
		return;
	}
	const style = targetDocument.createElement("style");
	style.setAttribute(STYLE_HASH_ATTRIBUTE$12, hash);
	style.appendChild(targetDocument.createTextNode(css));
	targetDocument.head.appendChild(style);
	injectedStyles.add(hash);
}
function registerDocument$12(targetDocument) {
	const runtime = getRuntime$12();
	runtime.documents.set(targetDocument, (runtime.documents.get(targetDocument) ?? 0) + 1);
	for (const [hash, css] of runtime.styles) injectStyle$12(targetDocument, hash, css);
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
function registerStyle$12(hash, css) {
	const runtime = getRuntime$12();
	runtime.styles.set(hash, css);
	for (const targetDocument of runtime.documents.keys()) injectStyle$12(targetDocument, hash, css);
}
var import_jsx_runtime$19, STYLE_HASH_ATTRIBUTE$12, style_module_default$12, CheckboxItem;
function init_checkbox_item() {
	return (init_checkbox_item = __esmMin((() => {
		init_clsx();
		init_menu_item_checkbox(), init_menu_item_check();
		init_react();
		init_build_module$3();
		init_context();
		init_use_menu_item_hide_on_click();
		import_jsx_runtime$19 = require_jsx_runtime();
		STYLE_HASH_ATTRIBUTE$12 = "data-wp-hash";
		if (typeof process === "undefined" || false) registerStyle$12("fbef06cd62", "._131511141326b11b__menu{outline:2px solid transparent!important;position:relative;z-index:1000000}.b6b687129dd092d1__menu-surface{background-color:var(--wp-components-color-background,var(--wpds-color-background-surface-neutral-strong,#fff));border-radius:4px;box-shadow:0 0 0 1px var(--wp-components-color-gray-300,var(--wpds-color-stroke-surface-neutral,#dbdbdb)),0 2px 3px rgba(0,0,0,.05),0 4px 5px rgba(0,0,0,.04),0 12px 12px rgba(0,0,0,.03),0 16px 16px rgba(0,0,0,.02);box-sizing:border-box;display:grid;grid-template-columns:minmax(0,max-content) 1fr;grid-template-rows:auto;max-height:var(--popover-available-height);max-width:320px;min-width:160px;overflow:auto;overscroll-behavior:contain;padding:4px}.b6b687129dd092d1__menu-surface:where(._59078aa9632a9595__is-toolbar){box-shadow:0 0 0 1px var(--wp-components-color-foreground,var(--wpds-color-foreground-content-neutral,#1e1e1e))}@media not (prefers-reduced-motion){._0965e4c0ecda2cad__menu-motion-root{transition-duration:var(--wpds-motion-duration-md,.2s),var(--wpds-motion-duration-sm,.1s);transition-property:transform,opacity;transition-timing-function:var(--wpds-motion-easing-expressive,cubic-bezier(.25,0,0,1)),linear;will-change:transform,opacity}._0965e4c0ecda2cad__menu-motion-root:not(:has(>.b6b687129dd092d1__menu-surface[data-submenu])){opacity:0}._0965e4c0ecda2cad__menu-motion-root:not(:has(>.b6b687129dd092d1__menu-surface[data-submenu])):has(>.b6b687129dd092d1__menu-surface[data-enter]){opacity:1}._0965e4c0ecda2cad__menu-motion-root:not(:has(>.b6b687129dd092d1__menu-surface[data-submenu])):has(>.b6b687129dd092d1__menu-surface[data-side=bottom]){transform:translateY(-4px)}._0965e4c0ecda2cad__menu-motion-root:not(:has(>.b6b687129dd092d1__menu-surface[data-submenu])):has(>.b6b687129dd092d1__menu-surface[data-side=top]){transform:translateY(4px)}._0965e4c0ecda2cad__menu-motion-root:not(:has(>.b6b687129dd092d1__menu-surface[data-submenu])):has(>.b6b687129dd092d1__menu-surface[data-side=left]){transform:translateX(4px)}._0965e4c0ecda2cad__menu-motion-root:not(:has(>.b6b687129dd092d1__menu-surface[data-submenu])):has(>.b6b687129dd092d1__menu-surface[data-side=right]){transform:translateX(-4px)}._0965e4c0ecda2cad__menu-motion-root:not(:has(>.b6b687129dd092d1__menu-surface[data-submenu])):has(>.b6b687129dd092d1__menu-surface[data-enter][data-side=bottom]),._0965e4c0ecda2cad__menu-motion-root:not(:has(>.b6b687129dd092d1__menu-surface[data-submenu])):has(>.b6b687129dd092d1__menu-surface[data-enter][data-side=top]){transform:translateY(0)}._0965e4c0ecda2cad__menu-motion-root:not(:has(>.b6b687129dd092d1__menu-surface[data-submenu])):has(>.b6b687129dd092d1__menu-surface[data-enter][data-side=left]),._0965e4c0ecda2cad__menu-motion-root:not(:has(>.b6b687129dd092d1__menu-surface[data-submenu])):has(>.b6b687129dd092d1__menu-surface[data-enter][data-side=right]){transform:translateX(0)}}.a8d8dc9b4f86d131__item{all:unset;align-items:center;box-sizing:border-box;cursor:var(--wpds-cursor-control,pointer);display:grid;grid-column:1/-1;grid-template-columns:minmax(0,max-content) 1fr;min-height:32px;position:relative}@supports (grid-template-columns:subgrid){.a8d8dc9b4f86d131__item{grid-template-columns:subgrid}}.a8d8dc9b4f86d131__item{border-radius:2px;color:var(--wp-components-color-foreground,var(--wpds-color-foreground-content-neutral,#1e1e1e));font-family:inherit;font-size:13px;font-weight:400;line-height:20px;outline:none;padding-block:4px;padding-inline:12px;scroll-margin:4px;user-select:none}.a8d8dc9b4f86d131__item[aria-disabled=true]{color:var(--wpds-color-foreground-interactive-neutral-disabled,#8d8d8d)}.a8d8dc9b4f86d131__item[data-active-item]:not([data-focus-visible]):not([aria-disabled=true]){background-color:var(--wp-components-color-accent,var(--wp-admin-theme-color,#3858e9));color:var(--wp-components-color-accent-inverted,var(--wpds-color-foreground-interactive-brand-strong,#fff))}.a8d8dc9b4f86d131__item[data-focus-visible]{box-shadow:0 0 0 1.5px var(--wp-components-color-accent,var(--wp-admin-theme-color,#3858e9));outline:2px solid transparent}._131511141326b11b__menu:not(:focus) .a8d8dc9b4f86d131__item:not(:focus)[aria-expanded=true]{background-color:var(--wp-components-color-gray-100,var(--wpds-color-background-surface-neutral,#fcfcfc));color:var(--wp-components-color-foreground,var(--wpds-color-foreground-content-neutral,#1e1e1e))}.a8d8dc9b4f86d131__item svg{fill:currentColor}._8b22cbfeb79a4270__item-prefix-wrapper{grid-column:1}.a63fce487b470227__checkbox-item>._8b22cbfeb79a4270__item-prefix-wrapper,.cc6238e7feede9fd__radio-item>._8b22cbfeb79a4270__item-prefix-wrapper{min-width:24px}._8b22cbfeb79a4270__item-prefix-wrapper:not(:empty),.a63fce487b470227__checkbox-item>._8b22cbfeb79a4270__item-prefix-wrapper,.cc6238e7feede9fd__radio-item>._8b22cbfeb79a4270__item-prefix-wrapper{margin-inline-end:8px}._8b22cbfeb79a4270__item-prefix-wrapper{align-items:center;color:var(--wp-components-color-gray-700,var(--wpds-color-foreground-content-neutral-weak,#707070));display:flex;justify-content:center}[aria-disabled=true]>._8b22cbfeb79a4270__item-prefix-wrapper,[data-active-item]:not([data-focus-visible])>._8b22cbfeb79a4270__item-prefix-wrapper{color:inherit}.b39622f9287a1a2f__item-content-wrapper{align-items:center;display:flex;gap:12px;grid-column:2;justify-content:space-between;pointer-events:none}._56ca6ca0990c2a9b__item-children-wrapper{display:inline-flex;flex:1;flex-direction:column;gap:4px}._97a83b395215bdd3__item-suffix-wrapper{align-items:center;color:var(--wp-components-color-gray-700,var(--wpds-color-foreground-content-neutral-weak,#707070));display:flex;flex:0 1 fit-content;gap:12px;justify-content:center;min-width:0;width:fit-content}[aria-disabled=true] :not(._131511141326b11b__menu) ._97a83b395215bdd3__item-suffix-wrapper,[data-active-item]:not([data-focus-visible]) :not(._131511141326b11b__menu) ._97a83b395215bdd3__item-suffix-wrapper{color:inherit}._68234318b0701028__group{display:contents}._3ca33d86e18b686c__group-label{grid-column:1/-1;padding-block-end:8px;padding-block-start:12px;padding-inline:12px}.c6a6663859a16bc1__separator{background-color:var(--wp-components-color-gray-200,var(--wpds-color-stroke-surface-neutral,#dbdbdb));border:none;grid-column:1/-1;height:1px;margin-block:8px;margin-inline:12px;outline:2px solid transparent}.c6a6663859a16bc1__separator:where(._59078aa9632a9595__is-toolbar){background-color:var(--wp-components-color-foreground,var(--wpds-color-foreground-content-neutral,#1e1e1e))}._477317536d60b275__submenu-chevron-icon{transform:scaleX(1);width:6px}._477317536d60b275__submenu-chevron-icon:where(._402d50ebfd3f1b45__is-rtl){transform:scaleX(-1)}.b7d17e75a44b0b82__item-label{color:inherit;font-size:13px;line-height:20px}._1c05bcee36309dc5__item-help-text{color:var(--wp-components-color-gray-700,var(--wpds-color-foreground-content-neutral-weak,#707070));font-size:12px;line-height:16px;overflow-wrap:anywhere}[aria-disabled=true] :not(._131511141326b11b__menu) ._1c05bcee36309dc5__item-help-text,[data-active-item]:not([data-focus-visible]) :not(._131511141326b11b__menu) ._1c05bcee36309dc5__item-help-text{color:inherit}");
		style_module_default$12 = {
			"menu": "_131511141326b11b__menu",
			"menu-surface": "b6b687129dd092d1__menu-surface",
			"is-toolbar": "_59078aa9632a9595__is-toolbar",
			"menu-motion-root": "_0965e4c0ecda2cad__menu-motion-root",
			"item": "a8d8dc9b4f86d131__item",
			"item-prefix-wrapper": "_8b22cbfeb79a4270__item-prefix-wrapper",
			"checkbox-item": "a63fce487b470227__checkbox-item",
			"radio-item": "cc6238e7feede9fd__radio-item",
			"item-content-wrapper": "b39622f9287a1a2f__item-content-wrapper",
			"item-children-wrapper": "_56ca6ca0990c2a9b__item-children-wrapper",
			"item-suffix-wrapper": "_97a83b395215bdd3__item-suffix-wrapper",
			"group": "_68234318b0701028__group",
			"group-label": "_3ca33d86e18b686c__group-label",
			"separator": "c6a6663859a16bc1__separator",
			"submenu-chevron-icon": "_477317536d60b275__submenu-chevron-icon",
			"is-rtl": "_402d50ebfd3f1b45__is-rtl",
			"item-label": "b7d17e75a44b0b82__item-label",
			"item-help-text": "_1c05bcee36309dc5__item-help-text"
		};
		CheckboxItem = (0, import_react.forwardRef)(function UnforwardedCheckboxItem({ className, suffix, children, disabled = false, hideOnClick = false, ...props }, ref) {
			const store = (0, import_react.useContext)(Context)?.store;
			const computedHideOnClick = useMenuItemHideOnClick(store, hideOnClick);
			if (!store) throw new Error("Menu.CheckboxItem can only be rendered inside a Menu component");
			return /* @__PURE__ */ (0, import_jsx_runtime$19.jsxs)(MenuItemCheckbox, {
				ref,
				...props,
				className: clsx(style_module_default$12.item, style_module_default$12["checkbox-item"], className),
				accessibleWhenDisabled: true,
				disabled,
				store,
				hideOnClick: computedHideOnClick,
				children: [/* @__PURE__ */ (0, import_jsx_runtime$19.jsx)(MenuItemCheck, {
					store,
					render: /* @__PURE__ */ (0, import_jsx_runtime$19.jsx)("span", { className: style_module_default$12["item-prefix-wrapper"] }),
					style: {
						width: "auto",
						height: "auto"
					},
					children: /* @__PURE__ */ (0, import_jsx_runtime$19.jsx)(icon_default, {
						icon: check_default,
						size: 24
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime$19.jsxs)("div", {
					className: style_module_default$12["item-content-wrapper"],
					children: [/* @__PURE__ */ (0, import_jsx_runtime$19.jsx)("div", {
						className: style_module_default$12["item-children-wrapper"],
						children
					}), suffix && /* @__PURE__ */ (0, import_jsx_runtime$19.jsx)("span", {
						className: style_module_default$12["item-suffix-wrapper"],
						children: suffix
					})]
				})]
			});
		});
	})))();
}
//#endregion
//#region ../packages/components/build-module/menu/radio-item.mjs
function getRuntime$11() {
	const globalScope = globalThis;
	if (globalScope.__wpStyleRuntime) return globalScope.__wpStyleRuntime;
	globalScope.__wpStyleRuntime = {
		documents: /* @__PURE__ */ new Map(),
		styles: /* @__PURE__ */ new Map(),
		injectedStyles: /* @__PURE__ */ new WeakMap()
	};
	if (typeof document !== "undefined") registerDocument$11(document);
	return globalScope.__wpStyleRuntime;
}
function documentContainsStyleHash$11(targetDocument, hash) {
	if (!targetDocument.head) return false;
	for (const style of targetDocument.head.querySelectorAll(`style[${STYLE_HASH_ATTRIBUTE$11}]`)) if (style.getAttribute(STYLE_HASH_ATTRIBUTE$11) === hash) return true;
	return false;
}
function injectStyle$11(targetDocument, hash, css) {
	if (!targetDocument.head) return;
	const runtime = getRuntime$11();
	let injectedStyles = runtime.injectedStyles.get(targetDocument);
	if (!injectedStyles) {
		injectedStyles = /* @__PURE__ */ new Set();
		runtime.injectedStyles.set(targetDocument, injectedStyles);
	}
	if (injectedStyles.has(hash)) return;
	if (documentContainsStyleHash$11(targetDocument, hash)) {
		injectedStyles.add(hash);
		return;
	}
	const style = targetDocument.createElement("style");
	style.setAttribute(STYLE_HASH_ATTRIBUTE$11, hash);
	style.appendChild(targetDocument.createTextNode(css));
	targetDocument.head.appendChild(style);
	injectedStyles.add(hash);
}
function registerDocument$11(targetDocument) {
	const runtime = getRuntime$11();
	runtime.documents.set(targetDocument, (runtime.documents.get(targetDocument) ?? 0) + 1);
	for (const [hash, css] of runtime.styles) injectStyle$11(targetDocument, hash, css);
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
function registerStyle$11(hash, css) {
	const runtime = getRuntime$11();
	runtime.styles.set(hash, css);
	for (const targetDocument of runtime.documents.keys()) injectStyle$11(targetDocument, hash, css);
}
var import_jsx_runtime$18, STYLE_HASH_ATTRIBUTE$11, style_module_default$11, radioCheck, RadioItem;
function init_radio_item() {
	return (init_radio_item = __esmMin((() => {
		init_clsx();
		init_menu_item_radio(), init_menu_item_check();
		init_react();
		init_build_module$3();
		init_svg();
		init_context();
		init_use_menu_item_hide_on_click();
		import_jsx_runtime$18 = require_jsx_runtime();
		STYLE_HASH_ATTRIBUTE$11 = "data-wp-hash";
		if (typeof process === "undefined" || false) registerStyle$11("fbef06cd62", "._131511141326b11b__menu{outline:2px solid transparent!important;position:relative;z-index:1000000}.b6b687129dd092d1__menu-surface{background-color:var(--wp-components-color-background,var(--wpds-color-background-surface-neutral-strong,#fff));border-radius:4px;box-shadow:0 0 0 1px var(--wp-components-color-gray-300,var(--wpds-color-stroke-surface-neutral,#dbdbdb)),0 2px 3px rgba(0,0,0,.05),0 4px 5px rgba(0,0,0,.04),0 12px 12px rgba(0,0,0,.03),0 16px 16px rgba(0,0,0,.02);box-sizing:border-box;display:grid;grid-template-columns:minmax(0,max-content) 1fr;grid-template-rows:auto;max-height:var(--popover-available-height);max-width:320px;min-width:160px;overflow:auto;overscroll-behavior:contain;padding:4px}.b6b687129dd092d1__menu-surface:where(._59078aa9632a9595__is-toolbar){box-shadow:0 0 0 1px var(--wp-components-color-foreground,var(--wpds-color-foreground-content-neutral,#1e1e1e))}@media not (prefers-reduced-motion){._0965e4c0ecda2cad__menu-motion-root{transition-duration:var(--wpds-motion-duration-md,.2s),var(--wpds-motion-duration-sm,.1s);transition-property:transform,opacity;transition-timing-function:var(--wpds-motion-easing-expressive,cubic-bezier(.25,0,0,1)),linear;will-change:transform,opacity}._0965e4c0ecda2cad__menu-motion-root:not(:has(>.b6b687129dd092d1__menu-surface[data-submenu])){opacity:0}._0965e4c0ecda2cad__menu-motion-root:not(:has(>.b6b687129dd092d1__menu-surface[data-submenu])):has(>.b6b687129dd092d1__menu-surface[data-enter]){opacity:1}._0965e4c0ecda2cad__menu-motion-root:not(:has(>.b6b687129dd092d1__menu-surface[data-submenu])):has(>.b6b687129dd092d1__menu-surface[data-side=bottom]){transform:translateY(-4px)}._0965e4c0ecda2cad__menu-motion-root:not(:has(>.b6b687129dd092d1__menu-surface[data-submenu])):has(>.b6b687129dd092d1__menu-surface[data-side=top]){transform:translateY(4px)}._0965e4c0ecda2cad__menu-motion-root:not(:has(>.b6b687129dd092d1__menu-surface[data-submenu])):has(>.b6b687129dd092d1__menu-surface[data-side=left]){transform:translateX(4px)}._0965e4c0ecda2cad__menu-motion-root:not(:has(>.b6b687129dd092d1__menu-surface[data-submenu])):has(>.b6b687129dd092d1__menu-surface[data-side=right]){transform:translateX(-4px)}._0965e4c0ecda2cad__menu-motion-root:not(:has(>.b6b687129dd092d1__menu-surface[data-submenu])):has(>.b6b687129dd092d1__menu-surface[data-enter][data-side=bottom]),._0965e4c0ecda2cad__menu-motion-root:not(:has(>.b6b687129dd092d1__menu-surface[data-submenu])):has(>.b6b687129dd092d1__menu-surface[data-enter][data-side=top]){transform:translateY(0)}._0965e4c0ecda2cad__menu-motion-root:not(:has(>.b6b687129dd092d1__menu-surface[data-submenu])):has(>.b6b687129dd092d1__menu-surface[data-enter][data-side=left]),._0965e4c0ecda2cad__menu-motion-root:not(:has(>.b6b687129dd092d1__menu-surface[data-submenu])):has(>.b6b687129dd092d1__menu-surface[data-enter][data-side=right]){transform:translateX(0)}}.a8d8dc9b4f86d131__item{all:unset;align-items:center;box-sizing:border-box;cursor:var(--wpds-cursor-control,pointer);display:grid;grid-column:1/-1;grid-template-columns:minmax(0,max-content) 1fr;min-height:32px;position:relative}@supports (grid-template-columns:subgrid){.a8d8dc9b4f86d131__item{grid-template-columns:subgrid}}.a8d8dc9b4f86d131__item{border-radius:2px;color:var(--wp-components-color-foreground,var(--wpds-color-foreground-content-neutral,#1e1e1e));font-family:inherit;font-size:13px;font-weight:400;line-height:20px;outline:none;padding-block:4px;padding-inline:12px;scroll-margin:4px;user-select:none}.a8d8dc9b4f86d131__item[aria-disabled=true]{color:var(--wpds-color-foreground-interactive-neutral-disabled,#8d8d8d)}.a8d8dc9b4f86d131__item[data-active-item]:not([data-focus-visible]):not([aria-disabled=true]){background-color:var(--wp-components-color-accent,var(--wp-admin-theme-color,#3858e9));color:var(--wp-components-color-accent-inverted,var(--wpds-color-foreground-interactive-brand-strong,#fff))}.a8d8dc9b4f86d131__item[data-focus-visible]{box-shadow:0 0 0 1.5px var(--wp-components-color-accent,var(--wp-admin-theme-color,#3858e9));outline:2px solid transparent}._131511141326b11b__menu:not(:focus) .a8d8dc9b4f86d131__item:not(:focus)[aria-expanded=true]{background-color:var(--wp-components-color-gray-100,var(--wpds-color-background-surface-neutral,#fcfcfc));color:var(--wp-components-color-foreground,var(--wpds-color-foreground-content-neutral,#1e1e1e))}.a8d8dc9b4f86d131__item svg{fill:currentColor}._8b22cbfeb79a4270__item-prefix-wrapper{grid-column:1}.a63fce487b470227__checkbox-item>._8b22cbfeb79a4270__item-prefix-wrapper,.cc6238e7feede9fd__radio-item>._8b22cbfeb79a4270__item-prefix-wrapper{min-width:24px}._8b22cbfeb79a4270__item-prefix-wrapper:not(:empty),.a63fce487b470227__checkbox-item>._8b22cbfeb79a4270__item-prefix-wrapper,.cc6238e7feede9fd__radio-item>._8b22cbfeb79a4270__item-prefix-wrapper{margin-inline-end:8px}._8b22cbfeb79a4270__item-prefix-wrapper{align-items:center;color:var(--wp-components-color-gray-700,var(--wpds-color-foreground-content-neutral-weak,#707070));display:flex;justify-content:center}[aria-disabled=true]>._8b22cbfeb79a4270__item-prefix-wrapper,[data-active-item]:not([data-focus-visible])>._8b22cbfeb79a4270__item-prefix-wrapper{color:inherit}.b39622f9287a1a2f__item-content-wrapper{align-items:center;display:flex;gap:12px;grid-column:2;justify-content:space-between;pointer-events:none}._56ca6ca0990c2a9b__item-children-wrapper{display:inline-flex;flex:1;flex-direction:column;gap:4px}._97a83b395215bdd3__item-suffix-wrapper{align-items:center;color:var(--wp-components-color-gray-700,var(--wpds-color-foreground-content-neutral-weak,#707070));display:flex;flex:0 1 fit-content;gap:12px;justify-content:center;min-width:0;width:fit-content}[aria-disabled=true] :not(._131511141326b11b__menu) ._97a83b395215bdd3__item-suffix-wrapper,[data-active-item]:not([data-focus-visible]) :not(._131511141326b11b__menu) ._97a83b395215bdd3__item-suffix-wrapper{color:inherit}._68234318b0701028__group{display:contents}._3ca33d86e18b686c__group-label{grid-column:1/-1;padding-block-end:8px;padding-block-start:12px;padding-inline:12px}.c6a6663859a16bc1__separator{background-color:var(--wp-components-color-gray-200,var(--wpds-color-stroke-surface-neutral,#dbdbdb));border:none;grid-column:1/-1;height:1px;margin-block:8px;margin-inline:12px;outline:2px solid transparent}.c6a6663859a16bc1__separator:where(._59078aa9632a9595__is-toolbar){background-color:var(--wp-components-color-foreground,var(--wpds-color-foreground-content-neutral,#1e1e1e))}._477317536d60b275__submenu-chevron-icon{transform:scaleX(1);width:6px}._477317536d60b275__submenu-chevron-icon:where(._402d50ebfd3f1b45__is-rtl){transform:scaleX(-1)}.b7d17e75a44b0b82__item-label{color:inherit;font-size:13px;line-height:20px}._1c05bcee36309dc5__item-help-text{color:var(--wp-components-color-gray-700,var(--wpds-color-foreground-content-neutral-weak,#707070));font-size:12px;line-height:16px;overflow-wrap:anywhere}[aria-disabled=true] :not(._131511141326b11b__menu) ._1c05bcee36309dc5__item-help-text,[data-active-item]:not([data-focus-visible]) :not(._131511141326b11b__menu) ._1c05bcee36309dc5__item-help-text{color:inherit}");
		style_module_default$11 = {
			"menu": "_131511141326b11b__menu",
			"menu-surface": "b6b687129dd092d1__menu-surface",
			"is-toolbar": "_59078aa9632a9595__is-toolbar",
			"menu-motion-root": "_0965e4c0ecda2cad__menu-motion-root",
			"item": "a8d8dc9b4f86d131__item",
			"item-prefix-wrapper": "_8b22cbfeb79a4270__item-prefix-wrapper",
			"checkbox-item": "a63fce487b470227__checkbox-item",
			"radio-item": "cc6238e7feede9fd__radio-item",
			"item-content-wrapper": "b39622f9287a1a2f__item-content-wrapper",
			"item-children-wrapper": "_56ca6ca0990c2a9b__item-children-wrapper",
			"item-suffix-wrapper": "_97a83b395215bdd3__item-suffix-wrapper",
			"group": "_68234318b0701028__group",
			"group-label": "_3ca33d86e18b686c__group-label",
			"separator": "c6a6663859a16bc1__separator",
			"submenu-chevron-icon": "_477317536d60b275__submenu-chevron-icon",
			"is-rtl": "_402d50ebfd3f1b45__is-rtl",
			"item-label": "b7d17e75a44b0b82__item-label",
			"item-help-text": "_1c05bcee36309dc5__item-help-text"
		};
		radioCheck = /* @__PURE__ */ (0, import_jsx_runtime$18.jsx)(SVG, {
			xmlns: "http://www.w3.org/2000/svg",
			viewBox: "0 0 24 24",
			children: /* @__PURE__ */ (0, import_jsx_runtime$18.jsx)(Circle, {
				cx: 12,
				cy: 12,
				r: 3
			})
		});
		RadioItem = (0, import_react.forwardRef)(function UnforwardedRadioItem({ className, suffix, children, disabled = false, hideOnClick = false, ...props }, ref) {
			const store = (0, import_react.useContext)(Context)?.store;
			const computedHideOnClick = useMenuItemHideOnClick(store, hideOnClick);
			if (!store) throw new Error("Menu.RadioItem can only be rendered inside a Menu component");
			return /* @__PURE__ */ (0, import_jsx_runtime$18.jsxs)(MenuItemRadio, {
				ref,
				...props,
				className: clsx(style_module_default$11.item, style_module_default$11["radio-item"], className),
				accessibleWhenDisabled: true,
				disabled,
				store,
				hideOnClick: computedHideOnClick,
				children: [/* @__PURE__ */ (0, import_jsx_runtime$18.jsx)(MenuItemCheck, {
					store,
					render: /* @__PURE__ */ (0, import_jsx_runtime$18.jsx)("span", { className: style_module_default$11["item-prefix-wrapper"] }),
					style: {
						width: "auto",
						height: "auto"
					},
					children: /* @__PURE__ */ (0, import_jsx_runtime$18.jsx)(icon_default, {
						icon: radioCheck,
						size: 24
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime$18.jsxs)("div", {
					className: style_module_default$11["item-content-wrapper"],
					children: [/* @__PURE__ */ (0, import_jsx_runtime$18.jsx)("div", {
						className: style_module_default$11["item-children-wrapper"],
						children
					}), suffix && /* @__PURE__ */ (0, import_jsx_runtime$18.jsx)("span", {
						className: style_module_default$11["item-suffix-wrapper"],
						children: suffix
					})]
				})]
			});
		});
	})))();
}
//#endregion
//#region ../packages/components/build-module/menu/group.mjs
function getRuntime$10() {
	const globalScope = globalThis;
	if (globalScope.__wpStyleRuntime) return globalScope.__wpStyleRuntime;
	globalScope.__wpStyleRuntime = {
		documents: /* @__PURE__ */ new Map(),
		styles: /* @__PURE__ */ new Map(),
		injectedStyles: /* @__PURE__ */ new WeakMap()
	};
	if (typeof document !== "undefined") registerDocument$10(document);
	return globalScope.__wpStyleRuntime;
}
function documentContainsStyleHash$10(targetDocument, hash) {
	if (!targetDocument.head) return false;
	for (const style of targetDocument.head.querySelectorAll(`style[${STYLE_HASH_ATTRIBUTE$10}]`)) if (style.getAttribute(STYLE_HASH_ATTRIBUTE$10) === hash) return true;
	return false;
}
function injectStyle$10(targetDocument, hash, css) {
	if (!targetDocument.head) return;
	const runtime = getRuntime$10();
	let injectedStyles = runtime.injectedStyles.get(targetDocument);
	if (!injectedStyles) {
		injectedStyles = /* @__PURE__ */ new Set();
		runtime.injectedStyles.set(targetDocument, injectedStyles);
	}
	if (injectedStyles.has(hash)) return;
	if (documentContainsStyleHash$10(targetDocument, hash)) {
		injectedStyles.add(hash);
		return;
	}
	const style = targetDocument.createElement("style");
	style.setAttribute(STYLE_HASH_ATTRIBUTE$10, hash);
	style.appendChild(targetDocument.createTextNode(css));
	targetDocument.head.appendChild(style);
	injectedStyles.add(hash);
}
function registerDocument$10(targetDocument) {
	const runtime = getRuntime$10();
	runtime.documents.set(targetDocument, (runtime.documents.get(targetDocument) ?? 0) + 1);
	for (const [hash, css] of runtime.styles) injectStyle$10(targetDocument, hash, css);
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
function registerStyle$10(hash, css) {
	const runtime = getRuntime$10();
	runtime.styles.set(hash, css);
	for (const targetDocument of runtime.documents.keys()) injectStyle$10(targetDocument, hash, css);
}
var import_jsx_runtime$17, STYLE_HASH_ATTRIBUTE$10, style_module_default$10, Group;
function init_group() {
	return (init_group = __esmMin((() => {
		init_clsx();
		init_menu_group();
		init_react();
		init_context();
		import_jsx_runtime$17 = require_jsx_runtime();
		STYLE_HASH_ATTRIBUTE$10 = "data-wp-hash";
		if (typeof process === "undefined" || false) registerStyle$10("fbef06cd62", "._131511141326b11b__menu{outline:2px solid transparent!important;position:relative;z-index:1000000}.b6b687129dd092d1__menu-surface{background-color:var(--wp-components-color-background,var(--wpds-color-background-surface-neutral-strong,#fff));border-radius:4px;box-shadow:0 0 0 1px var(--wp-components-color-gray-300,var(--wpds-color-stroke-surface-neutral,#dbdbdb)),0 2px 3px rgba(0,0,0,.05),0 4px 5px rgba(0,0,0,.04),0 12px 12px rgba(0,0,0,.03),0 16px 16px rgba(0,0,0,.02);box-sizing:border-box;display:grid;grid-template-columns:minmax(0,max-content) 1fr;grid-template-rows:auto;max-height:var(--popover-available-height);max-width:320px;min-width:160px;overflow:auto;overscroll-behavior:contain;padding:4px}.b6b687129dd092d1__menu-surface:where(._59078aa9632a9595__is-toolbar){box-shadow:0 0 0 1px var(--wp-components-color-foreground,var(--wpds-color-foreground-content-neutral,#1e1e1e))}@media not (prefers-reduced-motion){._0965e4c0ecda2cad__menu-motion-root{transition-duration:var(--wpds-motion-duration-md,.2s),var(--wpds-motion-duration-sm,.1s);transition-property:transform,opacity;transition-timing-function:var(--wpds-motion-easing-expressive,cubic-bezier(.25,0,0,1)),linear;will-change:transform,opacity}._0965e4c0ecda2cad__menu-motion-root:not(:has(>.b6b687129dd092d1__menu-surface[data-submenu])){opacity:0}._0965e4c0ecda2cad__menu-motion-root:not(:has(>.b6b687129dd092d1__menu-surface[data-submenu])):has(>.b6b687129dd092d1__menu-surface[data-enter]){opacity:1}._0965e4c0ecda2cad__menu-motion-root:not(:has(>.b6b687129dd092d1__menu-surface[data-submenu])):has(>.b6b687129dd092d1__menu-surface[data-side=bottom]){transform:translateY(-4px)}._0965e4c0ecda2cad__menu-motion-root:not(:has(>.b6b687129dd092d1__menu-surface[data-submenu])):has(>.b6b687129dd092d1__menu-surface[data-side=top]){transform:translateY(4px)}._0965e4c0ecda2cad__menu-motion-root:not(:has(>.b6b687129dd092d1__menu-surface[data-submenu])):has(>.b6b687129dd092d1__menu-surface[data-side=left]){transform:translateX(4px)}._0965e4c0ecda2cad__menu-motion-root:not(:has(>.b6b687129dd092d1__menu-surface[data-submenu])):has(>.b6b687129dd092d1__menu-surface[data-side=right]){transform:translateX(-4px)}._0965e4c0ecda2cad__menu-motion-root:not(:has(>.b6b687129dd092d1__menu-surface[data-submenu])):has(>.b6b687129dd092d1__menu-surface[data-enter][data-side=bottom]),._0965e4c0ecda2cad__menu-motion-root:not(:has(>.b6b687129dd092d1__menu-surface[data-submenu])):has(>.b6b687129dd092d1__menu-surface[data-enter][data-side=top]){transform:translateY(0)}._0965e4c0ecda2cad__menu-motion-root:not(:has(>.b6b687129dd092d1__menu-surface[data-submenu])):has(>.b6b687129dd092d1__menu-surface[data-enter][data-side=left]),._0965e4c0ecda2cad__menu-motion-root:not(:has(>.b6b687129dd092d1__menu-surface[data-submenu])):has(>.b6b687129dd092d1__menu-surface[data-enter][data-side=right]){transform:translateX(0)}}.a8d8dc9b4f86d131__item{all:unset;align-items:center;box-sizing:border-box;cursor:var(--wpds-cursor-control,pointer);display:grid;grid-column:1/-1;grid-template-columns:minmax(0,max-content) 1fr;min-height:32px;position:relative}@supports (grid-template-columns:subgrid){.a8d8dc9b4f86d131__item{grid-template-columns:subgrid}}.a8d8dc9b4f86d131__item{border-radius:2px;color:var(--wp-components-color-foreground,var(--wpds-color-foreground-content-neutral,#1e1e1e));font-family:inherit;font-size:13px;font-weight:400;line-height:20px;outline:none;padding-block:4px;padding-inline:12px;scroll-margin:4px;user-select:none}.a8d8dc9b4f86d131__item[aria-disabled=true]{color:var(--wpds-color-foreground-interactive-neutral-disabled,#8d8d8d)}.a8d8dc9b4f86d131__item[data-active-item]:not([data-focus-visible]):not([aria-disabled=true]){background-color:var(--wp-components-color-accent,var(--wp-admin-theme-color,#3858e9));color:var(--wp-components-color-accent-inverted,var(--wpds-color-foreground-interactive-brand-strong,#fff))}.a8d8dc9b4f86d131__item[data-focus-visible]{box-shadow:0 0 0 1.5px var(--wp-components-color-accent,var(--wp-admin-theme-color,#3858e9));outline:2px solid transparent}._131511141326b11b__menu:not(:focus) .a8d8dc9b4f86d131__item:not(:focus)[aria-expanded=true]{background-color:var(--wp-components-color-gray-100,var(--wpds-color-background-surface-neutral,#fcfcfc));color:var(--wp-components-color-foreground,var(--wpds-color-foreground-content-neutral,#1e1e1e))}.a8d8dc9b4f86d131__item svg{fill:currentColor}._8b22cbfeb79a4270__item-prefix-wrapper{grid-column:1}.a63fce487b470227__checkbox-item>._8b22cbfeb79a4270__item-prefix-wrapper,.cc6238e7feede9fd__radio-item>._8b22cbfeb79a4270__item-prefix-wrapper{min-width:24px}._8b22cbfeb79a4270__item-prefix-wrapper:not(:empty),.a63fce487b470227__checkbox-item>._8b22cbfeb79a4270__item-prefix-wrapper,.cc6238e7feede9fd__radio-item>._8b22cbfeb79a4270__item-prefix-wrapper{margin-inline-end:8px}._8b22cbfeb79a4270__item-prefix-wrapper{align-items:center;color:var(--wp-components-color-gray-700,var(--wpds-color-foreground-content-neutral-weak,#707070));display:flex;justify-content:center}[aria-disabled=true]>._8b22cbfeb79a4270__item-prefix-wrapper,[data-active-item]:not([data-focus-visible])>._8b22cbfeb79a4270__item-prefix-wrapper{color:inherit}.b39622f9287a1a2f__item-content-wrapper{align-items:center;display:flex;gap:12px;grid-column:2;justify-content:space-between;pointer-events:none}._56ca6ca0990c2a9b__item-children-wrapper{display:inline-flex;flex:1;flex-direction:column;gap:4px}._97a83b395215bdd3__item-suffix-wrapper{align-items:center;color:var(--wp-components-color-gray-700,var(--wpds-color-foreground-content-neutral-weak,#707070));display:flex;flex:0 1 fit-content;gap:12px;justify-content:center;min-width:0;width:fit-content}[aria-disabled=true] :not(._131511141326b11b__menu) ._97a83b395215bdd3__item-suffix-wrapper,[data-active-item]:not([data-focus-visible]) :not(._131511141326b11b__menu) ._97a83b395215bdd3__item-suffix-wrapper{color:inherit}._68234318b0701028__group{display:contents}._3ca33d86e18b686c__group-label{grid-column:1/-1;padding-block-end:8px;padding-block-start:12px;padding-inline:12px}.c6a6663859a16bc1__separator{background-color:var(--wp-components-color-gray-200,var(--wpds-color-stroke-surface-neutral,#dbdbdb));border:none;grid-column:1/-1;height:1px;margin-block:8px;margin-inline:12px;outline:2px solid transparent}.c6a6663859a16bc1__separator:where(._59078aa9632a9595__is-toolbar){background-color:var(--wp-components-color-foreground,var(--wpds-color-foreground-content-neutral,#1e1e1e))}._477317536d60b275__submenu-chevron-icon{transform:scaleX(1);width:6px}._477317536d60b275__submenu-chevron-icon:where(._402d50ebfd3f1b45__is-rtl){transform:scaleX(-1)}.b7d17e75a44b0b82__item-label{color:inherit;font-size:13px;line-height:20px}._1c05bcee36309dc5__item-help-text{color:var(--wp-components-color-gray-700,var(--wpds-color-foreground-content-neutral-weak,#707070));font-size:12px;line-height:16px;overflow-wrap:anywhere}[aria-disabled=true] :not(._131511141326b11b__menu) ._1c05bcee36309dc5__item-help-text,[data-active-item]:not([data-focus-visible]) :not(._131511141326b11b__menu) ._1c05bcee36309dc5__item-help-text{color:inherit}");
		style_module_default$10 = {
			"menu": "_131511141326b11b__menu",
			"menu-surface": "b6b687129dd092d1__menu-surface",
			"is-toolbar": "_59078aa9632a9595__is-toolbar",
			"menu-motion-root": "_0965e4c0ecda2cad__menu-motion-root",
			"item": "a8d8dc9b4f86d131__item",
			"item-prefix-wrapper": "_8b22cbfeb79a4270__item-prefix-wrapper",
			"checkbox-item": "a63fce487b470227__checkbox-item",
			"radio-item": "cc6238e7feede9fd__radio-item",
			"item-content-wrapper": "b39622f9287a1a2f__item-content-wrapper",
			"item-children-wrapper": "_56ca6ca0990c2a9b__item-children-wrapper",
			"item-suffix-wrapper": "_97a83b395215bdd3__item-suffix-wrapper",
			"group": "_68234318b0701028__group",
			"group-label": "_3ca33d86e18b686c__group-label",
			"separator": "c6a6663859a16bc1__separator",
			"submenu-chevron-icon": "_477317536d60b275__submenu-chevron-icon",
			"is-rtl": "_402d50ebfd3f1b45__is-rtl",
			"item-label": "b7d17e75a44b0b82__item-label",
			"item-help-text": "_1c05bcee36309dc5__item-help-text"
		};
		Group = (0, import_react.forwardRef)(function UnforwardedGroup({ className, ...props }, ref) {
			const menuContext = (0, import_react.useContext)(Context);
			if (!menuContext?.store) throw new Error("Menu.Group can only be rendered inside a Menu component");
			return /* @__PURE__ */ (0, import_jsx_runtime$17.jsx)(MenuGroup, {
				ref,
				...props,
				className: clsx(style_module_default$10.group, className),
				store: menuContext.store
			});
		});
	})))();
}
//#endregion
//#region ../packages/components/build-module/menu/group-label.mjs
function getRuntime$9() {
	const globalScope = globalThis;
	if (globalScope.__wpStyleRuntime) return globalScope.__wpStyleRuntime;
	globalScope.__wpStyleRuntime = {
		documents: /* @__PURE__ */ new Map(),
		styles: /* @__PURE__ */ new Map(),
		injectedStyles: /* @__PURE__ */ new WeakMap()
	};
	if (typeof document !== "undefined") registerDocument$9(document);
	return globalScope.__wpStyleRuntime;
}
function documentContainsStyleHash$9(targetDocument, hash) {
	if (!targetDocument.head) return false;
	for (const style of targetDocument.head.querySelectorAll(`style[${STYLE_HASH_ATTRIBUTE$9}]`)) if (style.getAttribute(STYLE_HASH_ATTRIBUTE$9) === hash) return true;
	return false;
}
function injectStyle$9(targetDocument, hash, css) {
	if (!targetDocument.head) return;
	const runtime = getRuntime$9();
	let injectedStyles = runtime.injectedStyles.get(targetDocument);
	if (!injectedStyles) {
		injectedStyles = /* @__PURE__ */ new Set();
		runtime.injectedStyles.set(targetDocument, injectedStyles);
	}
	if (injectedStyles.has(hash)) return;
	if (documentContainsStyleHash$9(targetDocument, hash)) {
		injectedStyles.add(hash);
		return;
	}
	const style = targetDocument.createElement("style");
	style.setAttribute(STYLE_HASH_ATTRIBUTE$9, hash);
	style.appendChild(targetDocument.createTextNode(css));
	targetDocument.head.appendChild(style);
	injectedStyles.add(hash);
}
function registerDocument$9(targetDocument) {
	const runtime = getRuntime$9();
	runtime.documents.set(targetDocument, (runtime.documents.get(targetDocument) ?? 0) + 1);
	for (const [hash, css] of runtime.styles) injectStyle$9(targetDocument, hash, css);
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
function registerStyle$9(hash, css) {
	const runtime = getRuntime$9();
	runtime.styles.set(hash, css);
	for (const targetDocument of runtime.documents.keys()) injectStyle$9(targetDocument, hash, css);
}
var import_jsx_runtime$16, STYLE_HASH_ATTRIBUTE$9, style_module_default$9, GroupLabel;
function init_group_label() {
	return (init_group_label = __esmMin((() => {
		init_clsx();
		init_menu_group_label();
		init_react();
		init_context();
		init_component$3();
		import_jsx_runtime$16 = require_jsx_runtime();
		STYLE_HASH_ATTRIBUTE$9 = "data-wp-hash";
		if (typeof process === "undefined" || false) registerStyle$9("fbef06cd62", "._131511141326b11b__menu{outline:2px solid transparent!important;position:relative;z-index:1000000}.b6b687129dd092d1__menu-surface{background-color:var(--wp-components-color-background,var(--wpds-color-background-surface-neutral-strong,#fff));border-radius:4px;box-shadow:0 0 0 1px var(--wp-components-color-gray-300,var(--wpds-color-stroke-surface-neutral,#dbdbdb)),0 2px 3px rgba(0,0,0,.05),0 4px 5px rgba(0,0,0,.04),0 12px 12px rgba(0,0,0,.03),0 16px 16px rgba(0,0,0,.02);box-sizing:border-box;display:grid;grid-template-columns:minmax(0,max-content) 1fr;grid-template-rows:auto;max-height:var(--popover-available-height);max-width:320px;min-width:160px;overflow:auto;overscroll-behavior:contain;padding:4px}.b6b687129dd092d1__menu-surface:where(._59078aa9632a9595__is-toolbar){box-shadow:0 0 0 1px var(--wp-components-color-foreground,var(--wpds-color-foreground-content-neutral,#1e1e1e))}@media not (prefers-reduced-motion){._0965e4c0ecda2cad__menu-motion-root{transition-duration:var(--wpds-motion-duration-md,.2s),var(--wpds-motion-duration-sm,.1s);transition-property:transform,opacity;transition-timing-function:var(--wpds-motion-easing-expressive,cubic-bezier(.25,0,0,1)),linear;will-change:transform,opacity}._0965e4c0ecda2cad__menu-motion-root:not(:has(>.b6b687129dd092d1__menu-surface[data-submenu])){opacity:0}._0965e4c0ecda2cad__menu-motion-root:not(:has(>.b6b687129dd092d1__menu-surface[data-submenu])):has(>.b6b687129dd092d1__menu-surface[data-enter]){opacity:1}._0965e4c0ecda2cad__menu-motion-root:not(:has(>.b6b687129dd092d1__menu-surface[data-submenu])):has(>.b6b687129dd092d1__menu-surface[data-side=bottom]){transform:translateY(-4px)}._0965e4c0ecda2cad__menu-motion-root:not(:has(>.b6b687129dd092d1__menu-surface[data-submenu])):has(>.b6b687129dd092d1__menu-surface[data-side=top]){transform:translateY(4px)}._0965e4c0ecda2cad__menu-motion-root:not(:has(>.b6b687129dd092d1__menu-surface[data-submenu])):has(>.b6b687129dd092d1__menu-surface[data-side=left]){transform:translateX(4px)}._0965e4c0ecda2cad__menu-motion-root:not(:has(>.b6b687129dd092d1__menu-surface[data-submenu])):has(>.b6b687129dd092d1__menu-surface[data-side=right]){transform:translateX(-4px)}._0965e4c0ecda2cad__menu-motion-root:not(:has(>.b6b687129dd092d1__menu-surface[data-submenu])):has(>.b6b687129dd092d1__menu-surface[data-enter][data-side=bottom]),._0965e4c0ecda2cad__menu-motion-root:not(:has(>.b6b687129dd092d1__menu-surface[data-submenu])):has(>.b6b687129dd092d1__menu-surface[data-enter][data-side=top]){transform:translateY(0)}._0965e4c0ecda2cad__menu-motion-root:not(:has(>.b6b687129dd092d1__menu-surface[data-submenu])):has(>.b6b687129dd092d1__menu-surface[data-enter][data-side=left]),._0965e4c0ecda2cad__menu-motion-root:not(:has(>.b6b687129dd092d1__menu-surface[data-submenu])):has(>.b6b687129dd092d1__menu-surface[data-enter][data-side=right]){transform:translateX(0)}}.a8d8dc9b4f86d131__item{all:unset;align-items:center;box-sizing:border-box;cursor:var(--wpds-cursor-control,pointer);display:grid;grid-column:1/-1;grid-template-columns:minmax(0,max-content) 1fr;min-height:32px;position:relative}@supports (grid-template-columns:subgrid){.a8d8dc9b4f86d131__item{grid-template-columns:subgrid}}.a8d8dc9b4f86d131__item{border-radius:2px;color:var(--wp-components-color-foreground,var(--wpds-color-foreground-content-neutral,#1e1e1e));font-family:inherit;font-size:13px;font-weight:400;line-height:20px;outline:none;padding-block:4px;padding-inline:12px;scroll-margin:4px;user-select:none}.a8d8dc9b4f86d131__item[aria-disabled=true]{color:var(--wpds-color-foreground-interactive-neutral-disabled,#8d8d8d)}.a8d8dc9b4f86d131__item[data-active-item]:not([data-focus-visible]):not([aria-disabled=true]){background-color:var(--wp-components-color-accent,var(--wp-admin-theme-color,#3858e9));color:var(--wp-components-color-accent-inverted,var(--wpds-color-foreground-interactive-brand-strong,#fff))}.a8d8dc9b4f86d131__item[data-focus-visible]{box-shadow:0 0 0 1.5px var(--wp-components-color-accent,var(--wp-admin-theme-color,#3858e9));outline:2px solid transparent}._131511141326b11b__menu:not(:focus) .a8d8dc9b4f86d131__item:not(:focus)[aria-expanded=true]{background-color:var(--wp-components-color-gray-100,var(--wpds-color-background-surface-neutral,#fcfcfc));color:var(--wp-components-color-foreground,var(--wpds-color-foreground-content-neutral,#1e1e1e))}.a8d8dc9b4f86d131__item svg{fill:currentColor}._8b22cbfeb79a4270__item-prefix-wrapper{grid-column:1}.a63fce487b470227__checkbox-item>._8b22cbfeb79a4270__item-prefix-wrapper,.cc6238e7feede9fd__radio-item>._8b22cbfeb79a4270__item-prefix-wrapper{min-width:24px}._8b22cbfeb79a4270__item-prefix-wrapper:not(:empty),.a63fce487b470227__checkbox-item>._8b22cbfeb79a4270__item-prefix-wrapper,.cc6238e7feede9fd__radio-item>._8b22cbfeb79a4270__item-prefix-wrapper{margin-inline-end:8px}._8b22cbfeb79a4270__item-prefix-wrapper{align-items:center;color:var(--wp-components-color-gray-700,var(--wpds-color-foreground-content-neutral-weak,#707070));display:flex;justify-content:center}[aria-disabled=true]>._8b22cbfeb79a4270__item-prefix-wrapper,[data-active-item]:not([data-focus-visible])>._8b22cbfeb79a4270__item-prefix-wrapper{color:inherit}.b39622f9287a1a2f__item-content-wrapper{align-items:center;display:flex;gap:12px;grid-column:2;justify-content:space-between;pointer-events:none}._56ca6ca0990c2a9b__item-children-wrapper{display:inline-flex;flex:1;flex-direction:column;gap:4px}._97a83b395215bdd3__item-suffix-wrapper{align-items:center;color:var(--wp-components-color-gray-700,var(--wpds-color-foreground-content-neutral-weak,#707070));display:flex;flex:0 1 fit-content;gap:12px;justify-content:center;min-width:0;width:fit-content}[aria-disabled=true] :not(._131511141326b11b__menu) ._97a83b395215bdd3__item-suffix-wrapper,[data-active-item]:not([data-focus-visible]) :not(._131511141326b11b__menu) ._97a83b395215bdd3__item-suffix-wrapper{color:inherit}._68234318b0701028__group{display:contents}._3ca33d86e18b686c__group-label{grid-column:1/-1;padding-block-end:8px;padding-block-start:12px;padding-inline:12px}.c6a6663859a16bc1__separator{background-color:var(--wp-components-color-gray-200,var(--wpds-color-stroke-surface-neutral,#dbdbdb));border:none;grid-column:1/-1;height:1px;margin-block:8px;margin-inline:12px;outline:2px solid transparent}.c6a6663859a16bc1__separator:where(._59078aa9632a9595__is-toolbar){background-color:var(--wp-components-color-foreground,var(--wpds-color-foreground-content-neutral,#1e1e1e))}._477317536d60b275__submenu-chevron-icon{transform:scaleX(1);width:6px}._477317536d60b275__submenu-chevron-icon:where(._402d50ebfd3f1b45__is-rtl){transform:scaleX(-1)}.b7d17e75a44b0b82__item-label{color:inherit;font-size:13px;line-height:20px}._1c05bcee36309dc5__item-help-text{color:var(--wp-components-color-gray-700,var(--wpds-color-foreground-content-neutral-weak,#707070));font-size:12px;line-height:16px;overflow-wrap:anywhere}[aria-disabled=true] :not(._131511141326b11b__menu) ._1c05bcee36309dc5__item-help-text,[data-active-item]:not([data-focus-visible]) :not(._131511141326b11b__menu) ._1c05bcee36309dc5__item-help-text{color:inherit}");
		style_module_default$9 = {
			"menu": "_131511141326b11b__menu",
			"menu-surface": "b6b687129dd092d1__menu-surface",
			"is-toolbar": "_59078aa9632a9595__is-toolbar",
			"menu-motion-root": "_0965e4c0ecda2cad__menu-motion-root",
			"item": "a8d8dc9b4f86d131__item",
			"item-prefix-wrapper": "_8b22cbfeb79a4270__item-prefix-wrapper",
			"checkbox-item": "a63fce487b470227__checkbox-item",
			"radio-item": "cc6238e7feede9fd__radio-item",
			"item-content-wrapper": "b39622f9287a1a2f__item-content-wrapper",
			"item-children-wrapper": "_56ca6ca0990c2a9b__item-children-wrapper",
			"item-suffix-wrapper": "_97a83b395215bdd3__item-suffix-wrapper",
			"group": "_68234318b0701028__group",
			"group-label": "_3ca33d86e18b686c__group-label",
			"separator": "c6a6663859a16bc1__separator",
			"submenu-chevron-icon": "_477317536d60b275__submenu-chevron-icon",
			"is-rtl": "_402d50ebfd3f1b45__is-rtl",
			"item-label": "b7d17e75a44b0b82__item-label",
			"item-help-text": "_1c05bcee36309dc5__item-help-text"
		};
		GroupLabel = (0, import_react.forwardRef)(function Group({ className, ...props }, ref) {
			const menuContext = (0, import_react.useContext)(Context);
			if (!menuContext?.store) throw new Error("Menu.GroupLabel can only be rendered inside a Menu component");
			return /* @__PURE__ */ (0, import_jsx_runtime$16.jsx)(MenuGroupLabel, {
				ref,
				render: /* @__PURE__ */ (0, import_jsx_runtime$16.jsx)(component_default$3, {
					upperCase: true,
					variant: "muted",
					size: "11px",
					weight: "var(--wpds-typography-font-weight-emphasis, 600)",
					lineHeight: "16px"
				}),
				...props,
				className: clsx(style_module_default$9["group-label"], className),
				store: menuContext.store
			});
		});
	})))();
}
//#endregion
//#region ../packages/components/build-module/menu/separator.mjs
function getRuntime$8() {
	const globalScope = globalThis;
	if (globalScope.__wpStyleRuntime) return globalScope.__wpStyleRuntime;
	globalScope.__wpStyleRuntime = {
		documents: /* @__PURE__ */ new Map(),
		styles: /* @__PURE__ */ new Map(),
		injectedStyles: /* @__PURE__ */ new WeakMap()
	};
	if (typeof document !== "undefined") registerDocument$8(document);
	return globalScope.__wpStyleRuntime;
}
function documentContainsStyleHash$8(targetDocument, hash) {
	if (!targetDocument.head) return false;
	for (const style of targetDocument.head.querySelectorAll(`style[${STYLE_HASH_ATTRIBUTE$8}]`)) if (style.getAttribute(STYLE_HASH_ATTRIBUTE$8) === hash) return true;
	return false;
}
function injectStyle$8(targetDocument, hash, css) {
	if (!targetDocument.head) return;
	const runtime = getRuntime$8();
	let injectedStyles = runtime.injectedStyles.get(targetDocument);
	if (!injectedStyles) {
		injectedStyles = /* @__PURE__ */ new Set();
		runtime.injectedStyles.set(targetDocument, injectedStyles);
	}
	if (injectedStyles.has(hash)) return;
	if (documentContainsStyleHash$8(targetDocument, hash)) {
		injectedStyles.add(hash);
		return;
	}
	const style = targetDocument.createElement("style");
	style.setAttribute(STYLE_HASH_ATTRIBUTE$8, hash);
	style.appendChild(targetDocument.createTextNode(css));
	targetDocument.head.appendChild(style);
	injectedStyles.add(hash);
}
function registerDocument$8(targetDocument) {
	const runtime = getRuntime$8();
	runtime.documents.set(targetDocument, (runtime.documents.get(targetDocument) ?? 0) + 1);
	for (const [hash, css] of runtime.styles) injectStyle$8(targetDocument, hash, css);
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
function registerStyle$8(hash, css) {
	const runtime = getRuntime$8();
	runtime.styles.set(hash, css);
	for (const targetDocument of runtime.documents.keys()) injectStyle$8(targetDocument, hash, css);
}
var import_jsx_runtime$15, STYLE_HASH_ATTRIBUTE$8, style_module_default$8, Separator;
function init_separator() {
	return (init_separator = __esmMin((() => {
		init_clsx();
		init_menu_separator();
		init_react();
		init_context();
		import_jsx_runtime$15 = require_jsx_runtime();
		STYLE_HASH_ATTRIBUTE$8 = "data-wp-hash";
		if (typeof process === "undefined" || false) registerStyle$8("fbef06cd62", "._131511141326b11b__menu{outline:2px solid transparent!important;position:relative;z-index:1000000}.b6b687129dd092d1__menu-surface{background-color:var(--wp-components-color-background,var(--wpds-color-background-surface-neutral-strong,#fff));border-radius:4px;box-shadow:0 0 0 1px var(--wp-components-color-gray-300,var(--wpds-color-stroke-surface-neutral,#dbdbdb)),0 2px 3px rgba(0,0,0,.05),0 4px 5px rgba(0,0,0,.04),0 12px 12px rgba(0,0,0,.03),0 16px 16px rgba(0,0,0,.02);box-sizing:border-box;display:grid;grid-template-columns:minmax(0,max-content) 1fr;grid-template-rows:auto;max-height:var(--popover-available-height);max-width:320px;min-width:160px;overflow:auto;overscroll-behavior:contain;padding:4px}.b6b687129dd092d1__menu-surface:where(._59078aa9632a9595__is-toolbar){box-shadow:0 0 0 1px var(--wp-components-color-foreground,var(--wpds-color-foreground-content-neutral,#1e1e1e))}@media not (prefers-reduced-motion){._0965e4c0ecda2cad__menu-motion-root{transition-duration:var(--wpds-motion-duration-md,.2s),var(--wpds-motion-duration-sm,.1s);transition-property:transform,opacity;transition-timing-function:var(--wpds-motion-easing-expressive,cubic-bezier(.25,0,0,1)),linear;will-change:transform,opacity}._0965e4c0ecda2cad__menu-motion-root:not(:has(>.b6b687129dd092d1__menu-surface[data-submenu])){opacity:0}._0965e4c0ecda2cad__menu-motion-root:not(:has(>.b6b687129dd092d1__menu-surface[data-submenu])):has(>.b6b687129dd092d1__menu-surface[data-enter]){opacity:1}._0965e4c0ecda2cad__menu-motion-root:not(:has(>.b6b687129dd092d1__menu-surface[data-submenu])):has(>.b6b687129dd092d1__menu-surface[data-side=bottom]){transform:translateY(-4px)}._0965e4c0ecda2cad__menu-motion-root:not(:has(>.b6b687129dd092d1__menu-surface[data-submenu])):has(>.b6b687129dd092d1__menu-surface[data-side=top]){transform:translateY(4px)}._0965e4c0ecda2cad__menu-motion-root:not(:has(>.b6b687129dd092d1__menu-surface[data-submenu])):has(>.b6b687129dd092d1__menu-surface[data-side=left]){transform:translateX(4px)}._0965e4c0ecda2cad__menu-motion-root:not(:has(>.b6b687129dd092d1__menu-surface[data-submenu])):has(>.b6b687129dd092d1__menu-surface[data-side=right]){transform:translateX(-4px)}._0965e4c0ecda2cad__menu-motion-root:not(:has(>.b6b687129dd092d1__menu-surface[data-submenu])):has(>.b6b687129dd092d1__menu-surface[data-enter][data-side=bottom]),._0965e4c0ecda2cad__menu-motion-root:not(:has(>.b6b687129dd092d1__menu-surface[data-submenu])):has(>.b6b687129dd092d1__menu-surface[data-enter][data-side=top]){transform:translateY(0)}._0965e4c0ecda2cad__menu-motion-root:not(:has(>.b6b687129dd092d1__menu-surface[data-submenu])):has(>.b6b687129dd092d1__menu-surface[data-enter][data-side=left]),._0965e4c0ecda2cad__menu-motion-root:not(:has(>.b6b687129dd092d1__menu-surface[data-submenu])):has(>.b6b687129dd092d1__menu-surface[data-enter][data-side=right]){transform:translateX(0)}}.a8d8dc9b4f86d131__item{all:unset;align-items:center;box-sizing:border-box;cursor:var(--wpds-cursor-control,pointer);display:grid;grid-column:1/-1;grid-template-columns:minmax(0,max-content) 1fr;min-height:32px;position:relative}@supports (grid-template-columns:subgrid){.a8d8dc9b4f86d131__item{grid-template-columns:subgrid}}.a8d8dc9b4f86d131__item{border-radius:2px;color:var(--wp-components-color-foreground,var(--wpds-color-foreground-content-neutral,#1e1e1e));font-family:inherit;font-size:13px;font-weight:400;line-height:20px;outline:none;padding-block:4px;padding-inline:12px;scroll-margin:4px;user-select:none}.a8d8dc9b4f86d131__item[aria-disabled=true]{color:var(--wpds-color-foreground-interactive-neutral-disabled,#8d8d8d)}.a8d8dc9b4f86d131__item[data-active-item]:not([data-focus-visible]):not([aria-disabled=true]){background-color:var(--wp-components-color-accent,var(--wp-admin-theme-color,#3858e9));color:var(--wp-components-color-accent-inverted,var(--wpds-color-foreground-interactive-brand-strong,#fff))}.a8d8dc9b4f86d131__item[data-focus-visible]{box-shadow:0 0 0 1.5px var(--wp-components-color-accent,var(--wp-admin-theme-color,#3858e9));outline:2px solid transparent}._131511141326b11b__menu:not(:focus) .a8d8dc9b4f86d131__item:not(:focus)[aria-expanded=true]{background-color:var(--wp-components-color-gray-100,var(--wpds-color-background-surface-neutral,#fcfcfc));color:var(--wp-components-color-foreground,var(--wpds-color-foreground-content-neutral,#1e1e1e))}.a8d8dc9b4f86d131__item svg{fill:currentColor}._8b22cbfeb79a4270__item-prefix-wrapper{grid-column:1}.a63fce487b470227__checkbox-item>._8b22cbfeb79a4270__item-prefix-wrapper,.cc6238e7feede9fd__radio-item>._8b22cbfeb79a4270__item-prefix-wrapper{min-width:24px}._8b22cbfeb79a4270__item-prefix-wrapper:not(:empty),.a63fce487b470227__checkbox-item>._8b22cbfeb79a4270__item-prefix-wrapper,.cc6238e7feede9fd__radio-item>._8b22cbfeb79a4270__item-prefix-wrapper{margin-inline-end:8px}._8b22cbfeb79a4270__item-prefix-wrapper{align-items:center;color:var(--wp-components-color-gray-700,var(--wpds-color-foreground-content-neutral-weak,#707070));display:flex;justify-content:center}[aria-disabled=true]>._8b22cbfeb79a4270__item-prefix-wrapper,[data-active-item]:not([data-focus-visible])>._8b22cbfeb79a4270__item-prefix-wrapper{color:inherit}.b39622f9287a1a2f__item-content-wrapper{align-items:center;display:flex;gap:12px;grid-column:2;justify-content:space-between;pointer-events:none}._56ca6ca0990c2a9b__item-children-wrapper{display:inline-flex;flex:1;flex-direction:column;gap:4px}._97a83b395215bdd3__item-suffix-wrapper{align-items:center;color:var(--wp-components-color-gray-700,var(--wpds-color-foreground-content-neutral-weak,#707070));display:flex;flex:0 1 fit-content;gap:12px;justify-content:center;min-width:0;width:fit-content}[aria-disabled=true] :not(._131511141326b11b__menu) ._97a83b395215bdd3__item-suffix-wrapper,[data-active-item]:not([data-focus-visible]) :not(._131511141326b11b__menu) ._97a83b395215bdd3__item-suffix-wrapper{color:inherit}._68234318b0701028__group{display:contents}._3ca33d86e18b686c__group-label{grid-column:1/-1;padding-block-end:8px;padding-block-start:12px;padding-inline:12px}.c6a6663859a16bc1__separator{background-color:var(--wp-components-color-gray-200,var(--wpds-color-stroke-surface-neutral,#dbdbdb));border:none;grid-column:1/-1;height:1px;margin-block:8px;margin-inline:12px;outline:2px solid transparent}.c6a6663859a16bc1__separator:where(._59078aa9632a9595__is-toolbar){background-color:var(--wp-components-color-foreground,var(--wpds-color-foreground-content-neutral,#1e1e1e))}._477317536d60b275__submenu-chevron-icon{transform:scaleX(1);width:6px}._477317536d60b275__submenu-chevron-icon:where(._402d50ebfd3f1b45__is-rtl){transform:scaleX(-1)}.b7d17e75a44b0b82__item-label{color:inherit;font-size:13px;line-height:20px}._1c05bcee36309dc5__item-help-text{color:var(--wp-components-color-gray-700,var(--wpds-color-foreground-content-neutral-weak,#707070));font-size:12px;line-height:16px;overflow-wrap:anywhere}[aria-disabled=true] :not(._131511141326b11b__menu) ._1c05bcee36309dc5__item-help-text,[data-active-item]:not([data-focus-visible]) :not(._131511141326b11b__menu) ._1c05bcee36309dc5__item-help-text{color:inherit}");
		style_module_default$8 = {
			"menu": "_131511141326b11b__menu",
			"menu-surface": "b6b687129dd092d1__menu-surface",
			"is-toolbar": "_59078aa9632a9595__is-toolbar",
			"menu-motion-root": "_0965e4c0ecda2cad__menu-motion-root",
			"item": "a8d8dc9b4f86d131__item",
			"item-prefix-wrapper": "_8b22cbfeb79a4270__item-prefix-wrapper",
			"checkbox-item": "a63fce487b470227__checkbox-item",
			"radio-item": "cc6238e7feede9fd__radio-item",
			"item-content-wrapper": "b39622f9287a1a2f__item-content-wrapper",
			"item-children-wrapper": "_56ca6ca0990c2a9b__item-children-wrapper",
			"item-suffix-wrapper": "_97a83b395215bdd3__item-suffix-wrapper",
			"group": "_68234318b0701028__group",
			"group-label": "_3ca33d86e18b686c__group-label",
			"separator": "c6a6663859a16bc1__separator",
			"submenu-chevron-icon": "_477317536d60b275__submenu-chevron-icon",
			"is-rtl": "_402d50ebfd3f1b45__is-rtl",
			"item-label": "b7d17e75a44b0b82__item-label",
			"item-help-text": "_1c05bcee36309dc5__item-help-text"
		};
		Separator = (0, import_react.forwardRef)(function UnforwardedSeparator({ className, ...props }, ref) {
			const menuContext = (0, import_react.useContext)(Context);
			if (!menuContext?.store) throw new Error("Menu.Separator can only be rendered inside a Menu component");
			return /* @__PURE__ */ (0, import_jsx_runtime$15.jsx)(MenuSeparator, {
				ref,
				...props,
				className: clsx(style_module_default$8.separator, className, { [style_module_default$8["is-toolbar"]]: menuContext.variant === "toolbar" }),
				store: menuContext.store
			});
		});
	})))();
}
//#endregion
//#region ../packages/components/build-module/menu/item-label.mjs
function getRuntime$7() {
	const globalScope = globalThis;
	if (globalScope.__wpStyleRuntime) return globalScope.__wpStyleRuntime;
	globalScope.__wpStyleRuntime = {
		documents: /* @__PURE__ */ new Map(),
		styles: /* @__PURE__ */ new Map(),
		injectedStyles: /* @__PURE__ */ new WeakMap()
	};
	if (typeof document !== "undefined") registerDocument$7(document);
	return globalScope.__wpStyleRuntime;
}
function documentContainsStyleHash$7(targetDocument, hash) {
	if (!targetDocument.head) return false;
	for (const style of targetDocument.head.querySelectorAll(`style[${STYLE_HASH_ATTRIBUTE$7}]`)) if (style.getAttribute(STYLE_HASH_ATTRIBUTE$7) === hash) return true;
	return false;
}
function injectStyle$7(targetDocument, hash, css) {
	if (!targetDocument.head) return;
	const runtime = getRuntime$7();
	let injectedStyles = runtime.injectedStyles.get(targetDocument);
	if (!injectedStyles) {
		injectedStyles = /* @__PURE__ */ new Set();
		runtime.injectedStyles.set(targetDocument, injectedStyles);
	}
	if (injectedStyles.has(hash)) return;
	if (documentContainsStyleHash$7(targetDocument, hash)) {
		injectedStyles.add(hash);
		return;
	}
	const style = targetDocument.createElement("style");
	style.setAttribute(STYLE_HASH_ATTRIBUTE$7, hash);
	style.appendChild(targetDocument.createTextNode(css));
	targetDocument.head.appendChild(style);
	injectedStyles.add(hash);
}
function registerDocument$7(targetDocument) {
	const runtime = getRuntime$7();
	runtime.documents.set(targetDocument, (runtime.documents.get(targetDocument) ?? 0) + 1);
	for (const [hash, css] of runtime.styles) injectStyle$7(targetDocument, hash, css);
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
function registerStyle$7(hash, css) {
	const runtime = getRuntime$7();
	runtime.styles.set(hash, css);
	for (const targetDocument of runtime.documents.keys()) injectStyle$7(targetDocument, hash, css);
}
var import_jsx_runtime$14, STYLE_HASH_ATTRIBUTE$7, style_module_default$7, ItemLabel;
function init_item_label() {
	return (init_item_label = __esmMin((() => {
		init_clsx();
		init_react();
		init_context();
		init_component();
		import_jsx_runtime$14 = require_jsx_runtime();
		STYLE_HASH_ATTRIBUTE$7 = "data-wp-hash";
		if (typeof process === "undefined" || false) registerStyle$7("fbef06cd62", "._131511141326b11b__menu{outline:2px solid transparent!important;position:relative;z-index:1000000}.b6b687129dd092d1__menu-surface{background-color:var(--wp-components-color-background,var(--wpds-color-background-surface-neutral-strong,#fff));border-radius:4px;box-shadow:0 0 0 1px var(--wp-components-color-gray-300,var(--wpds-color-stroke-surface-neutral,#dbdbdb)),0 2px 3px rgba(0,0,0,.05),0 4px 5px rgba(0,0,0,.04),0 12px 12px rgba(0,0,0,.03),0 16px 16px rgba(0,0,0,.02);box-sizing:border-box;display:grid;grid-template-columns:minmax(0,max-content) 1fr;grid-template-rows:auto;max-height:var(--popover-available-height);max-width:320px;min-width:160px;overflow:auto;overscroll-behavior:contain;padding:4px}.b6b687129dd092d1__menu-surface:where(._59078aa9632a9595__is-toolbar){box-shadow:0 0 0 1px var(--wp-components-color-foreground,var(--wpds-color-foreground-content-neutral,#1e1e1e))}@media not (prefers-reduced-motion){._0965e4c0ecda2cad__menu-motion-root{transition-duration:var(--wpds-motion-duration-md,.2s),var(--wpds-motion-duration-sm,.1s);transition-property:transform,opacity;transition-timing-function:var(--wpds-motion-easing-expressive,cubic-bezier(.25,0,0,1)),linear;will-change:transform,opacity}._0965e4c0ecda2cad__menu-motion-root:not(:has(>.b6b687129dd092d1__menu-surface[data-submenu])){opacity:0}._0965e4c0ecda2cad__menu-motion-root:not(:has(>.b6b687129dd092d1__menu-surface[data-submenu])):has(>.b6b687129dd092d1__menu-surface[data-enter]){opacity:1}._0965e4c0ecda2cad__menu-motion-root:not(:has(>.b6b687129dd092d1__menu-surface[data-submenu])):has(>.b6b687129dd092d1__menu-surface[data-side=bottom]){transform:translateY(-4px)}._0965e4c0ecda2cad__menu-motion-root:not(:has(>.b6b687129dd092d1__menu-surface[data-submenu])):has(>.b6b687129dd092d1__menu-surface[data-side=top]){transform:translateY(4px)}._0965e4c0ecda2cad__menu-motion-root:not(:has(>.b6b687129dd092d1__menu-surface[data-submenu])):has(>.b6b687129dd092d1__menu-surface[data-side=left]){transform:translateX(4px)}._0965e4c0ecda2cad__menu-motion-root:not(:has(>.b6b687129dd092d1__menu-surface[data-submenu])):has(>.b6b687129dd092d1__menu-surface[data-side=right]){transform:translateX(-4px)}._0965e4c0ecda2cad__menu-motion-root:not(:has(>.b6b687129dd092d1__menu-surface[data-submenu])):has(>.b6b687129dd092d1__menu-surface[data-enter][data-side=bottom]),._0965e4c0ecda2cad__menu-motion-root:not(:has(>.b6b687129dd092d1__menu-surface[data-submenu])):has(>.b6b687129dd092d1__menu-surface[data-enter][data-side=top]){transform:translateY(0)}._0965e4c0ecda2cad__menu-motion-root:not(:has(>.b6b687129dd092d1__menu-surface[data-submenu])):has(>.b6b687129dd092d1__menu-surface[data-enter][data-side=left]),._0965e4c0ecda2cad__menu-motion-root:not(:has(>.b6b687129dd092d1__menu-surface[data-submenu])):has(>.b6b687129dd092d1__menu-surface[data-enter][data-side=right]){transform:translateX(0)}}.a8d8dc9b4f86d131__item{all:unset;align-items:center;box-sizing:border-box;cursor:var(--wpds-cursor-control,pointer);display:grid;grid-column:1/-1;grid-template-columns:minmax(0,max-content) 1fr;min-height:32px;position:relative}@supports (grid-template-columns:subgrid){.a8d8dc9b4f86d131__item{grid-template-columns:subgrid}}.a8d8dc9b4f86d131__item{border-radius:2px;color:var(--wp-components-color-foreground,var(--wpds-color-foreground-content-neutral,#1e1e1e));font-family:inherit;font-size:13px;font-weight:400;line-height:20px;outline:none;padding-block:4px;padding-inline:12px;scroll-margin:4px;user-select:none}.a8d8dc9b4f86d131__item[aria-disabled=true]{color:var(--wpds-color-foreground-interactive-neutral-disabled,#8d8d8d)}.a8d8dc9b4f86d131__item[data-active-item]:not([data-focus-visible]):not([aria-disabled=true]){background-color:var(--wp-components-color-accent,var(--wp-admin-theme-color,#3858e9));color:var(--wp-components-color-accent-inverted,var(--wpds-color-foreground-interactive-brand-strong,#fff))}.a8d8dc9b4f86d131__item[data-focus-visible]{box-shadow:0 0 0 1.5px var(--wp-components-color-accent,var(--wp-admin-theme-color,#3858e9));outline:2px solid transparent}._131511141326b11b__menu:not(:focus) .a8d8dc9b4f86d131__item:not(:focus)[aria-expanded=true]{background-color:var(--wp-components-color-gray-100,var(--wpds-color-background-surface-neutral,#fcfcfc));color:var(--wp-components-color-foreground,var(--wpds-color-foreground-content-neutral,#1e1e1e))}.a8d8dc9b4f86d131__item svg{fill:currentColor}._8b22cbfeb79a4270__item-prefix-wrapper{grid-column:1}.a63fce487b470227__checkbox-item>._8b22cbfeb79a4270__item-prefix-wrapper,.cc6238e7feede9fd__radio-item>._8b22cbfeb79a4270__item-prefix-wrapper{min-width:24px}._8b22cbfeb79a4270__item-prefix-wrapper:not(:empty),.a63fce487b470227__checkbox-item>._8b22cbfeb79a4270__item-prefix-wrapper,.cc6238e7feede9fd__radio-item>._8b22cbfeb79a4270__item-prefix-wrapper{margin-inline-end:8px}._8b22cbfeb79a4270__item-prefix-wrapper{align-items:center;color:var(--wp-components-color-gray-700,var(--wpds-color-foreground-content-neutral-weak,#707070));display:flex;justify-content:center}[aria-disabled=true]>._8b22cbfeb79a4270__item-prefix-wrapper,[data-active-item]:not([data-focus-visible])>._8b22cbfeb79a4270__item-prefix-wrapper{color:inherit}.b39622f9287a1a2f__item-content-wrapper{align-items:center;display:flex;gap:12px;grid-column:2;justify-content:space-between;pointer-events:none}._56ca6ca0990c2a9b__item-children-wrapper{display:inline-flex;flex:1;flex-direction:column;gap:4px}._97a83b395215bdd3__item-suffix-wrapper{align-items:center;color:var(--wp-components-color-gray-700,var(--wpds-color-foreground-content-neutral-weak,#707070));display:flex;flex:0 1 fit-content;gap:12px;justify-content:center;min-width:0;width:fit-content}[aria-disabled=true] :not(._131511141326b11b__menu) ._97a83b395215bdd3__item-suffix-wrapper,[data-active-item]:not([data-focus-visible]) :not(._131511141326b11b__menu) ._97a83b395215bdd3__item-suffix-wrapper{color:inherit}._68234318b0701028__group{display:contents}._3ca33d86e18b686c__group-label{grid-column:1/-1;padding-block-end:8px;padding-block-start:12px;padding-inline:12px}.c6a6663859a16bc1__separator{background-color:var(--wp-components-color-gray-200,var(--wpds-color-stroke-surface-neutral,#dbdbdb));border:none;grid-column:1/-1;height:1px;margin-block:8px;margin-inline:12px;outline:2px solid transparent}.c6a6663859a16bc1__separator:where(._59078aa9632a9595__is-toolbar){background-color:var(--wp-components-color-foreground,var(--wpds-color-foreground-content-neutral,#1e1e1e))}._477317536d60b275__submenu-chevron-icon{transform:scaleX(1);width:6px}._477317536d60b275__submenu-chevron-icon:where(._402d50ebfd3f1b45__is-rtl){transform:scaleX(-1)}.b7d17e75a44b0b82__item-label{color:inherit;font-size:13px;line-height:20px}._1c05bcee36309dc5__item-help-text{color:var(--wp-components-color-gray-700,var(--wpds-color-foreground-content-neutral-weak,#707070));font-size:12px;line-height:16px;overflow-wrap:anywhere}[aria-disabled=true] :not(._131511141326b11b__menu) ._1c05bcee36309dc5__item-help-text,[data-active-item]:not([data-focus-visible]) :not(._131511141326b11b__menu) ._1c05bcee36309dc5__item-help-text{color:inherit}");
		style_module_default$7 = {
			"menu": "_131511141326b11b__menu",
			"menu-surface": "b6b687129dd092d1__menu-surface",
			"is-toolbar": "_59078aa9632a9595__is-toolbar",
			"menu-motion-root": "_0965e4c0ecda2cad__menu-motion-root",
			"item": "a8d8dc9b4f86d131__item",
			"item-prefix-wrapper": "_8b22cbfeb79a4270__item-prefix-wrapper",
			"checkbox-item": "a63fce487b470227__checkbox-item",
			"radio-item": "cc6238e7feede9fd__radio-item",
			"item-content-wrapper": "b39622f9287a1a2f__item-content-wrapper",
			"item-children-wrapper": "_56ca6ca0990c2a9b__item-children-wrapper",
			"item-suffix-wrapper": "_97a83b395215bdd3__item-suffix-wrapper",
			"group": "_68234318b0701028__group",
			"group-label": "_3ca33d86e18b686c__group-label",
			"separator": "c6a6663859a16bc1__separator",
			"submenu-chevron-icon": "_477317536d60b275__submenu-chevron-icon",
			"is-rtl": "_402d50ebfd3f1b45__is-rtl",
			"item-label": "b7d17e75a44b0b82__item-label",
			"item-help-text": "_1c05bcee36309dc5__item-help-text"
		};
		ItemLabel = (0, import_react.forwardRef)(function UnforwardedItemLabel({ className, ...props }, ref) {
			if (!(0, import_react.useContext)(Context)?.store) throw new Error("Menu.ItemLabel can only be rendered inside a Menu component");
			return /* @__PURE__ */ (0, import_jsx_runtime$14.jsx)(component_default, {
				numberOfLines: 1,
				ref,
				...props,
				className: clsx(style_module_default$7["item-label"], className)
			});
		});
	})))();
}
//#endregion
//#region ../packages/components/build-module/menu/item-help-text.mjs
function getRuntime$6() {
	const globalScope = globalThis;
	if (globalScope.__wpStyleRuntime) return globalScope.__wpStyleRuntime;
	globalScope.__wpStyleRuntime = {
		documents: /* @__PURE__ */ new Map(),
		styles: /* @__PURE__ */ new Map(),
		injectedStyles: /* @__PURE__ */ new WeakMap()
	};
	if (typeof document !== "undefined") registerDocument$6(document);
	return globalScope.__wpStyleRuntime;
}
function documentContainsStyleHash$6(targetDocument, hash) {
	if (!targetDocument.head) return false;
	for (const style of targetDocument.head.querySelectorAll(`style[${STYLE_HASH_ATTRIBUTE$6}]`)) if (style.getAttribute(STYLE_HASH_ATTRIBUTE$6) === hash) return true;
	return false;
}
function injectStyle$6(targetDocument, hash, css) {
	if (!targetDocument.head) return;
	const runtime = getRuntime$6();
	let injectedStyles = runtime.injectedStyles.get(targetDocument);
	if (!injectedStyles) {
		injectedStyles = /* @__PURE__ */ new Set();
		runtime.injectedStyles.set(targetDocument, injectedStyles);
	}
	if (injectedStyles.has(hash)) return;
	if (documentContainsStyleHash$6(targetDocument, hash)) {
		injectedStyles.add(hash);
		return;
	}
	const style = targetDocument.createElement("style");
	style.setAttribute(STYLE_HASH_ATTRIBUTE$6, hash);
	style.appendChild(targetDocument.createTextNode(css));
	targetDocument.head.appendChild(style);
	injectedStyles.add(hash);
}
function registerDocument$6(targetDocument) {
	const runtime = getRuntime$6();
	runtime.documents.set(targetDocument, (runtime.documents.get(targetDocument) ?? 0) + 1);
	for (const [hash, css] of runtime.styles) injectStyle$6(targetDocument, hash, css);
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
function registerStyle$6(hash, css) {
	const runtime = getRuntime$6();
	runtime.styles.set(hash, css);
	for (const targetDocument of runtime.documents.keys()) injectStyle$6(targetDocument, hash, css);
}
var import_jsx_runtime$13, STYLE_HASH_ATTRIBUTE$6, style_module_default$6, ItemHelpText;
function init_item_help_text() {
	return (init_item_help_text = __esmMin((() => {
		init_clsx();
		init_react();
		init_context();
		init_component();
		import_jsx_runtime$13 = require_jsx_runtime();
		STYLE_HASH_ATTRIBUTE$6 = "data-wp-hash";
		if (typeof process === "undefined" || false) registerStyle$6("fbef06cd62", "._131511141326b11b__menu{outline:2px solid transparent!important;position:relative;z-index:1000000}.b6b687129dd092d1__menu-surface{background-color:var(--wp-components-color-background,var(--wpds-color-background-surface-neutral-strong,#fff));border-radius:4px;box-shadow:0 0 0 1px var(--wp-components-color-gray-300,var(--wpds-color-stroke-surface-neutral,#dbdbdb)),0 2px 3px rgba(0,0,0,.05),0 4px 5px rgba(0,0,0,.04),0 12px 12px rgba(0,0,0,.03),0 16px 16px rgba(0,0,0,.02);box-sizing:border-box;display:grid;grid-template-columns:minmax(0,max-content) 1fr;grid-template-rows:auto;max-height:var(--popover-available-height);max-width:320px;min-width:160px;overflow:auto;overscroll-behavior:contain;padding:4px}.b6b687129dd092d1__menu-surface:where(._59078aa9632a9595__is-toolbar){box-shadow:0 0 0 1px var(--wp-components-color-foreground,var(--wpds-color-foreground-content-neutral,#1e1e1e))}@media not (prefers-reduced-motion){._0965e4c0ecda2cad__menu-motion-root{transition-duration:var(--wpds-motion-duration-md,.2s),var(--wpds-motion-duration-sm,.1s);transition-property:transform,opacity;transition-timing-function:var(--wpds-motion-easing-expressive,cubic-bezier(.25,0,0,1)),linear;will-change:transform,opacity}._0965e4c0ecda2cad__menu-motion-root:not(:has(>.b6b687129dd092d1__menu-surface[data-submenu])){opacity:0}._0965e4c0ecda2cad__menu-motion-root:not(:has(>.b6b687129dd092d1__menu-surface[data-submenu])):has(>.b6b687129dd092d1__menu-surface[data-enter]){opacity:1}._0965e4c0ecda2cad__menu-motion-root:not(:has(>.b6b687129dd092d1__menu-surface[data-submenu])):has(>.b6b687129dd092d1__menu-surface[data-side=bottom]){transform:translateY(-4px)}._0965e4c0ecda2cad__menu-motion-root:not(:has(>.b6b687129dd092d1__menu-surface[data-submenu])):has(>.b6b687129dd092d1__menu-surface[data-side=top]){transform:translateY(4px)}._0965e4c0ecda2cad__menu-motion-root:not(:has(>.b6b687129dd092d1__menu-surface[data-submenu])):has(>.b6b687129dd092d1__menu-surface[data-side=left]){transform:translateX(4px)}._0965e4c0ecda2cad__menu-motion-root:not(:has(>.b6b687129dd092d1__menu-surface[data-submenu])):has(>.b6b687129dd092d1__menu-surface[data-side=right]){transform:translateX(-4px)}._0965e4c0ecda2cad__menu-motion-root:not(:has(>.b6b687129dd092d1__menu-surface[data-submenu])):has(>.b6b687129dd092d1__menu-surface[data-enter][data-side=bottom]),._0965e4c0ecda2cad__menu-motion-root:not(:has(>.b6b687129dd092d1__menu-surface[data-submenu])):has(>.b6b687129dd092d1__menu-surface[data-enter][data-side=top]){transform:translateY(0)}._0965e4c0ecda2cad__menu-motion-root:not(:has(>.b6b687129dd092d1__menu-surface[data-submenu])):has(>.b6b687129dd092d1__menu-surface[data-enter][data-side=left]),._0965e4c0ecda2cad__menu-motion-root:not(:has(>.b6b687129dd092d1__menu-surface[data-submenu])):has(>.b6b687129dd092d1__menu-surface[data-enter][data-side=right]){transform:translateX(0)}}.a8d8dc9b4f86d131__item{all:unset;align-items:center;box-sizing:border-box;cursor:var(--wpds-cursor-control,pointer);display:grid;grid-column:1/-1;grid-template-columns:minmax(0,max-content) 1fr;min-height:32px;position:relative}@supports (grid-template-columns:subgrid){.a8d8dc9b4f86d131__item{grid-template-columns:subgrid}}.a8d8dc9b4f86d131__item{border-radius:2px;color:var(--wp-components-color-foreground,var(--wpds-color-foreground-content-neutral,#1e1e1e));font-family:inherit;font-size:13px;font-weight:400;line-height:20px;outline:none;padding-block:4px;padding-inline:12px;scroll-margin:4px;user-select:none}.a8d8dc9b4f86d131__item[aria-disabled=true]{color:var(--wpds-color-foreground-interactive-neutral-disabled,#8d8d8d)}.a8d8dc9b4f86d131__item[data-active-item]:not([data-focus-visible]):not([aria-disabled=true]){background-color:var(--wp-components-color-accent,var(--wp-admin-theme-color,#3858e9));color:var(--wp-components-color-accent-inverted,var(--wpds-color-foreground-interactive-brand-strong,#fff))}.a8d8dc9b4f86d131__item[data-focus-visible]{box-shadow:0 0 0 1.5px var(--wp-components-color-accent,var(--wp-admin-theme-color,#3858e9));outline:2px solid transparent}._131511141326b11b__menu:not(:focus) .a8d8dc9b4f86d131__item:not(:focus)[aria-expanded=true]{background-color:var(--wp-components-color-gray-100,var(--wpds-color-background-surface-neutral,#fcfcfc));color:var(--wp-components-color-foreground,var(--wpds-color-foreground-content-neutral,#1e1e1e))}.a8d8dc9b4f86d131__item svg{fill:currentColor}._8b22cbfeb79a4270__item-prefix-wrapper{grid-column:1}.a63fce487b470227__checkbox-item>._8b22cbfeb79a4270__item-prefix-wrapper,.cc6238e7feede9fd__radio-item>._8b22cbfeb79a4270__item-prefix-wrapper{min-width:24px}._8b22cbfeb79a4270__item-prefix-wrapper:not(:empty),.a63fce487b470227__checkbox-item>._8b22cbfeb79a4270__item-prefix-wrapper,.cc6238e7feede9fd__radio-item>._8b22cbfeb79a4270__item-prefix-wrapper{margin-inline-end:8px}._8b22cbfeb79a4270__item-prefix-wrapper{align-items:center;color:var(--wp-components-color-gray-700,var(--wpds-color-foreground-content-neutral-weak,#707070));display:flex;justify-content:center}[aria-disabled=true]>._8b22cbfeb79a4270__item-prefix-wrapper,[data-active-item]:not([data-focus-visible])>._8b22cbfeb79a4270__item-prefix-wrapper{color:inherit}.b39622f9287a1a2f__item-content-wrapper{align-items:center;display:flex;gap:12px;grid-column:2;justify-content:space-between;pointer-events:none}._56ca6ca0990c2a9b__item-children-wrapper{display:inline-flex;flex:1;flex-direction:column;gap:4px}._97a83b395215bdd3__item-suffix-wrapper{align-items:center;color:var(--wp-components-color-gray-700,var(--wpds-color-foreground-content-neutral-weak,#707070));display:flex;flex:0 1 fit-content;gap:12px;justify-content:center;min-width:0;width:fit-content}[aria-disabled=true] :not(._131511141326b11b__menu) ._97a83b395215bdd3__item-suffix-wrapper,[data-active-item]:not([data-focus-visible]) :not(._131511141326b11b__menu) ._97a83b395215bdd3__item-suffix-wrapper{color:inherit}._68234318b0701028__group{display:contents}._3ca33d86e18b686c__group-label{grid-column:1/-1;padding-block-end:8px;padding-block-start:12px;padding-inline:12px}.c6a6663859a16bc1__separator{background-color:var(--wp-components-color-gray-200,var(--wpds-color-stroke-surface-neutral,#dbdbdb));border:none;grid-column:1/-1;height:1px;margin-block:8px;margin-inline:12px;outline:2px solid transparent}.c6a6663859a16bc1__separator:where(._59078aa9632a9595__is-toolbar){background-color:var(--wp-components-color-foreground,var(--wpds-color-foreground-content-neutral,#1e1e1e))}._477317536d60b275__submenu-chevron-icon{transform:scaleX(1);width:6px}._477317536d60b275__submenu-chevron-icon:where(._402d50ebfd3f1b45__is-rtl){transform:scaleX(-1)}.b7d17e75a44b0b82__item-label{color:inherit;font-size:13px;line-height:20px}._1c05bcee36309dc5__item-help-text{color:var(--wp-components-color-gray-700,var(--wpds-color-foreground-content-neutral-weak,#707070));font-size:12px;line-height:16px;overflow-wrap:anywhere}[aria-disabled=true] :not(._131511141326b11b__menu) ._1c05bcee36309dc5__item-help-text,[data-active-item]:not([data-focus-visible]) :not(._131511141326b11b__menu) ._1c05bcee36309dc5__item-help-text{color:inherit}");
		style_module_default$6 = {
			"menu": "_131511141326b11b__menu",
			"menu-surface": "b6b687129dd092d1__menu-surface",
			"is-toolbar": "_59078aa9632a9595__is-toolbar",
			"menu-motion-root": "_0965e4c0ecda2cad__menu-motion-root",
			"item": "a8d8dc9b4f86d131__item",
			"item-prefix-wrapper": "_8b22cbfeb79a4270__item-prefix-wrapper",
			"checkbox-item": "a63fce487b470227__checkbox-item",
			"radio-item": "cc6238e7feede9fd__radio-item",
			"item-content-wrapper": "b39622f9287a1a2f__item-content-wrapper",
			"item-children-wrapper": "_56ca6ca0990c2a9b__item-children-wrapper",
			"item-suffix-wrapper": "_97a83b395215bdd3__item-suffix-wrapper",
			"group": "_68234318b0701028__group",
			"group-label": "_3ca33d86e18b686c__group-label",
			"separator": "c6a6663859a16bc1__separator",
			"submenu-chevron-icon": "_477317536d60b275__submenu-chevron-icon",
			"is-rtl": "_402d50ebfd3f1b45__is-rtl",
			"item-label": "b7d17e75a44b0b82__item-label",
			"item-help-text": "_1c05bcee36309dc5__item-help-text"
		};
		ItemHelpText = (0, import_react.forwardRef)(function UnforwardedItemHelpText({ className, ...props }, ref) {
			if (!(0, import_react.useContext)(Context)?.store) throw new Error("Menu.ItemHelpText can only be rendered inside a Menu component");
			return /* @__PURE__ */ (0, import_jsx_runtime$13.jsx)(component_default, {
				numberOfLines: 2,
				ref,
				...props,
				className: clsx(style_module_default$6["item-help-text"], className)
			});
		});
	})))();
}
//#endregion
//#region ../packages/components/build-module/menu/trigger-button.mjs
var import_jsx_runtime$12, TriggerButton;
function init_trigger_button() {
	return (init_trigger_button = __esmMin((() => {
		init_menu_button();
		init_react();
		init_context();
		import_jsx_runtime$12 = require_jsx_runtime();
		TriggerButton = (0, import_react.forwardRef)(function UnforwardedTriggerButton({ children, disabled = false, ...props }, ref) {
			const menuContext = (0, import_react.useContext)(Context);
			if (!menuContext?.store) throw new Error("Menu.TriggerButton can only be rendered inside a Menu component");
			if (menuContext.store.parent) throw new Error("Menu.TriggerButton should not be rendered inside a nested Menu component. Use Menu.SubmenuTriggerItem instead.");
			return /* @__PURE__ */ (0, import_jsx_runtime$12.jsx)(MenuButton, {
				ref,
				...props,
				disabled,
				store: menuContext.store,
				children
			});
		});
	})))();
}
//#endregion
//#region ../packages/components/build-module/menu/submenu-trigger-item.mjs
function getRuntime$5() {
	const globalScope = globalThis;
	if (globalScope.__wpStyleRuntime) return globalScope.__wpStyleRuntime;
	globalScope.__wpStyleRuntime = {
		documents: /* @__PURE__ */ new Map(),
		styles: /* @__PURE__ */ new Map(),
		injectedStyles: /* @__PURE__ */ new WeakMap()
	};
	if (typeof document !== "undefined") registerDocument$5(document);
	return globalScope.__wpStyleRuntime;
}
function documentContainsStyleHash$5(targetDocument, hash) {
	if (!targetDocument.head) return false;
	for (const style of targetDocument.head.querySelectorAll(`style[${STYLE_HASH_ATTRIBUTE$5}]`)) if (style.getAttribute(STYLE_HASH_ATTRIBUTE$5) === hash) return true;
	return false;
}
function injectStyle$5(targetDocument, hash, css) {
	if (!targetDocument.head) return;
	const runtime = getRuntime$5();
	let injectedStyles = runtime.injectedStyles.get(targetDocument);
	if (!injectedStyles) {
		injectedStyles = /* @__PURE__ */ new Set();
		runtime.injectedStyles.set(targetDocument, injectedStyles);
	}
	if (injectedStyles.has(hash)) return;
	if (documentContainsStyleHash$5(targetDocument, hash)) {
		injectedStyles.add(hash);
		return;
	}
	const style = targetDocument.createElement("style");
	style.setAttribute(STYLE_HASH_ATTRIBUTE$5, hash);
	style.appendChild(targetDocument.createTextNode(css));
	targetDocument.head.appendChild(style);
	injectedStyles.add(hash);
}
function registerDocument$5(targetDocument) {
	const runtime = getRuntime$5();
	runtime.documents.set(targetDocument, (runtime.documents.get(targetDocument) ?? 0) + 1);
	for (const [hash, css] of runtime.styles) injectStyle$5(targetDocument, hash, css);
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
function registerStyle$5(hash, css) {
	const runtime = getRuntime$5();
	runtime.styles.set(hash, css);
	for (const targetDocument of runtime.documents.keys()) injectStyle$5(targetDocument, hash, css);
}
var import_jsx_runtime$11, STYLE_HASH_ATTRIBUTE$5, style_module_default$5, SubmenuTriggerItem;
function init_submenu_trigger_item() {
	return (init_submenu_trigger_item = __esmMin((() => {
		init_clsx();
		init_menu_button();
		init_react();
		init_build_module$3();
		init_build_module$1();
		init_context();
		init_item();
		init_icon$1();
		import_jsx_runtime$11 = require_jsx_runtime();
		STYLE_HASH_ATTRIBUTE$5 = "data-wp-hash";
		if (typeof process === "undefined" || false) registerStyle$5("fbef06cd62", "._131511141326b11b__menu{outline:2px solid transparent!important;position:relative;z-index:1000000}.b6b687129dd092d1__menu-surface{background-color:var(--wp-components-color-background,var(--wpds-color-background-surface-neutral-strong,#fff));border-radius:4px;box-shadow:0 0 0 1px var(--wp-components-color-gray-300,var(--wpds-color-stroke-surface-neutral,#dbdbdb)),0 2px 3px rgba(0,0,0,.05),0 4px 5px rgba(0,0,0,.04),0 12px 12px rgba(0,0,0,.03),0 16px 16px rgba(0,0,0,.02);box-sizing:border-box;display:grid;grid-template-columns:minmax(0,max-content) 1fr;grid-template-rows:auto;max-height:var(--popover-available-height);max-width:320px;min-width:160px;overflow:auto;overscroll-behavior:contain;padding:4px}.b6b687129dd092d1__menu-surface:where(._59078aa9632a9595__is-toolbar){box-shadow:0 0 0 1px var(--wp-components-color-foreground,var(--wpds-color-foreground-content-neutral,#1e1e1e))}@media not (prefers-reduced-motion){._0965e4c0ecda2cad__menu-motion-root{transition-duration:var(--wpds-motion-duration-md,.2s),var(--wpds-motion-duration-sm,.1s);transition-property:transform,opacity;transition-timing-function:var(--wpds-motion-easing-expressive,cubic-bezier(.25,0,0,1)),linear;will-change:transform,opacity}._0965e4c0ecda2cad__menu-motion-root:not(:has(>.b6b687129dd092d1__menu-surface[data-submenu])){opacity:0}._0965e4c0ecda2cad__menu-motion-root:not(:has(>.b6b687129dd092d1__menu-surface[data-submenu])):has(>.b6b687129dd092d1__menu-surface[data-enter]){opacity:1}._0965e4c0ecda2cad__menu-motion-root:not(:has(>.b6b687129dd092d1__menu-surface[data-submenu])):has(>.b6b687129dd092d1__menu-surface[data-side=bottom]){transform:translateY(-4px)}._0965e4c0ecda2cad__menu-motion-root:not(:has(>.b6b687129dd092d1__menu-surface[data-submenu])):has(>.b6b687129dd092d1__menu-surface[data-side=top]){transform:translateY(4px)}._0965e4c0ecda2cad__menu-motion-root:not(:has(>.b6b687129dd092d1__menu-surface[data-submenu])):has(>.b6b687129dd092d1__menu-surface[data-side=left]){transform:translateX(4px)}._0965e4c0ecda2cad__menu-motion-root:not(:has(>.b6b687129dd092d1__menu-surface[data-submenu])):has(>.b6b687129dd092d1__menu-surface[data-side=right]){transform:translateX(-4px)}._0965e4c0ecda2cad__menu-motion-root:not(:has(>.b6b687129dd092d1__menu-surface[data-submenu])):has(>.b6b687129dd092d1__menu-surface[data-enter][data-side=bottom]),._0965e4c0ecda2cad__menu-motion-root:not(:has(>.b6b687129dd092d1__menu-surface[data-submenu])):has(>.b6b687129dd092d1__menu-surface[data-enter][data-side=top]){transform:translateY(0)}._0965e4c0ecda2cad__menu-motion-root:not(:has(>.b6b687129dd092d1__menu-surface[data-submenu])):has(>.b6b687129dd092d1__menu-surface[data-enter][data-side=left]),._0965e4c0ecda2cad__menu-motion-root:not(:has(>.b6b687129dd092d1__menu-surface[data-submenu])):has(>.b6b687129dd092d1__menu-surface[data-enter][data-side=right]){transform:translateX(0)}}.a8d8dc9b4f86d131__item{all:unset;align-items:center;box-sizing:border-box;cursor:var(--wpds-cursor-control,pointer);display:grid;grid-column:1/-1;grid-template-columns:minmax(0,max-content) 1fr;min-height:32px;position:relative}@supports (grid-template-columns:subgrid){.a8d8dc9b4f86d131__item{grid-template-columns:subgrid}}.a8d8dc9b4f86d131__item{border-radius:2px;color:var(--wp-components-color-foreground,var(--wpds-color-foreground-content-neutral,#1e1e1e));font-family:inherit;font-size:13px;font-weight:400;line-height:20px;outline:none;padding-block:4px;padding-inline:12px;scroll-margin:4px;user-select:none}.a8d8dc9b4f86d131__item[aria-disabled=true]{color:var(--wpds-color-foreground-interactive-neutral-disabled,#8d8d8d)}.a8d8dc9b4f86d131__item[data-active-item]:not([data-focus-visible]):not([aria-disabled=true]){background-color:var(--wp-components-color-accent,var(--wp-admin-theme-color,#3858e9));color:var(--wp-components-color-accent-inverted,var(--wpds-color-foreground-interactive-brand-strong,#fff))}.a8d8dc9b4f86d131__item[data-focus-visible]{box-shadow:0 0 0 1.5px var(--wp-components-color-accent,var(--wp-admin-theme-color,#3858e9));outline:2px solid transparent}._131511141326b11b__menu:not(:focus) .a8d8dc9b4f86d131__item:not(:focus)[aria-expanded=true]{background-color:var(--wp-components-color-gray-100,var(--wpds-color-background-surface-neutral,#fcfcfc));color:var(--wp-components-color-foreground,var(--wpds-color-foreground-content-neutral,#1e1e1e))}.a8d8dc9b4f86d131__item svg{fill:currentColor}._8b22cbfeb79a4270__item-prefix-wrapper{grid-column:1}.a63fce487b470227__checkbox-item>._8b22cbfeb79a4270__item-prefix-wrapper,.cc6238e7feede9fd__radio-item>._8b22cbfeb79a4270__item-prefix-wrapper{min-width:24px}._8b22cbfeb79a4270__item-prefix-wrapper:not(:empty),.a63fce487b470227__checkbox-item>._8b22cbfeb79a4270__item-prefix-wrapper,.cc6238e7feede9fd__radio-item>._8b22cbfeb79a4270__item-prefix-wrapper{margin-inline-end:8px}._8b22cbfeb79a4270__item-prefix-wrapper{align-items:center;color:var(--wp-components-color-gray-700,var(--wpds-color-foreground-content-neutral-weak,#707070));display:flex;justify-content:center}[aria-disabled=true]>._8b22cbfeb79a4270__item-prefix-wrapper,[data-active-item]:not([data-focus-visible])>._8b22cbfeb79a4270__item-prefix-wrapper{color:inherit}.b39622f9287a1a2f__item-content-wrapper{align-items:center;display:flex;gap:12px;grid-column:2;justify-content:space-between;pointer-events:none}._56ca6ca0990c2a9b__item-children-wrapper{display:inline-flex;flex:1;flex-direction:column;gap:4px}._97a83b395215bdd3__item-suffix-wrapper{align-items:center;color:var(--wp-components-color-gray-700,var(--wpds-color-foreground-content-neutral-weak,#707070));display:flex;flex:0 1 fit-content;gap:12px;justify-content:center;min-width:0;width:fit-content}[aria-disabled=true] :not(._131511141326b11b__menu) ._97a83b395215bdd3__item-suffix-wrapper,[data-active-item]:not([data-focus-visible]) :not(._131511141326b11b__menu) ._97a83b395215bdd3__item-suffix-wrapper{color:inherit}._68234318b0701028__group{display:contents}._3ca33d86e18b686c__group-label{grid-column:1/-1;padding-block-end:8px;padding-block-start:12px;padding-inline:12px}.c6a6663859a16bc1__separator{background-color:var(--wp-components-color-gray-200,var(--wpds-color-stroke-surface-neutral,#dbdbdb));border:none;grid-column:1/-1;height:1px;margin-block:8px;margin-inline:12px;outline:2px solid transparent}.c6a6663859a16bc1__separator:where(._59078aa9632a9595__is-toolbar){background-color:var(--wp-components-color-foreground,var(--wpds-color-foreground-content-neutral,#1e1e1e))}._477317536d60b275__submenu-chevron-icon{transform:scaleX(1);width:6px}._477317536d60b275__submenu-chevron-icon:where(._402d50ebfd3f1b45__is-rtl){transform:scaleX(-1)}.b7d17e75a44b0b82__item-label{color:inherit;font-size:13px;line-height:20px}._1c05bcee36309dc5__item-help-text{color:var(--wp-components-color-gray-700,var(--wpds-color-foreground-content-neutral-weak,#707070));font-size:12px;line-height:16px;overflow-wrap:anywhere}[aria-disabled=true] :not(._131511141326b11b__menu) ._1c05bcee36309dc5__item-help-text,[data-active-item]:not([data-focus-visible]) :not(._131511141326b11b__menu) ._1c05bcee36309dc5__item-help-text{color:inherit}");
		style_module_default$5 = {
			"menu": "_131511141326b11b__menu",
			"menu-surface": "b6b687129dd092d1__menu-surface",
			"is-toolbar": "_59078aa9632a9595__is-toolbar",
			"menu-motion-root": "_0965e4c0ecda2cad__menu-motion-root",
			"item": "a8d8dc9b4f86d131__item",
			"item-prefix-wrapper": "_8b22cbfeb79a4270__item-prefix-wrapper",
			"checkbox-item": "a63fce487b470227__checkbox-item",
			"radio-item": "cc6238e7feede9fd__radio-item",
			"item-content-wrapper": "b39622f9287a1a2f__item-content-wrapper",
			"item-children-wrapper": "_56ca6ca0990c2a9b__item-children-wrapper",
			"item-suffix-wrapper": "_97a83b395215bdd3__item-suffix-wrapper",
			"group": "_68234318b0701028__group",
			"group-label": "_3ca33d86e18b686c__group-label",
			"separator": "c6a6663859a16bc1__separator",
			"submenu-chevron-icon": "_477317536d60b275__submenu-chevron-icon",
			"is-rtl": "_402d50ebfd3f1b45__is-rtl",
			"item-label": "b7d17e75a44b0b82__item-label",
			"item-help-text": "_1c05bcee36309dc5__item-help-text"
		};
		SubmenuTriggerItem = (0, import_react.forwardRef)(function UnforwardedSubmenuTriggerItem({ suffix, ...otherProps }, ref) {
			const menuContext = (0, import_react.useContext)(Context);
			if (!menuContext?.store.parent) throw new Error("Menu.SubmenuTriggerItem can only be rendered inside a nested Menu component");
			return /* @__PURE__ */ (0, import_jsx_runtime$11.jsx)(MenuButton, {
				ref,
				accessibleWhenDisabled: true,
				store: menuContext.store,
				render: /* @__PURE__ */ (0, import_jsx_runtime$11.jsx)(Item, {
					...otherProps,
					store: menuContext.store.parent,
					suffix: /* @__PURE__ */ (0, import_jsx_runtime$11.jsxs)(import_jsx_runtime$11.Fragment, { children: [suffix, /* @__PURE__ */ (0, import_jsx_runtime$11.jsx)(icon_default$1, {
						className: clsx(style_module_default$5["submenu-chevron-icon"], { [style_module_default$5["is-rtl"]]: isRTL() }),
						"aria-hidden": "true",
						icon: chevron_right_small_default,
						size: 24,
						preserveAspectRatio: "xMidYMid slice"
					})] })
				})
			});
		});
	})))();
}
//#endregion
//#region ../packages/components/build-module/menu/popover.mjs
function getRuntime$4() {
	const globalScope = globalThis;
	if (globalScope.__wpStyleRuntime) return globalScope.__wpStyleRuntime;
	globalScope.__wpStyleRuntime = {
		documents: /* @__PURE__ */ new Map(),
		styles: /* @__PURE__ */ new Map(),
		injectedStyles: /* @__PURE__ */ new WeakMap()
	};
	if (typeof document !== "undefined") registerDocument$4(document);
	return globalScope.__wpStyleRuntime;
}
function documentContainsStyleHash$4(targetDocument, hash) {
	if (!targetDocument.head) return false;
	for (const style of targetDocument.head.querySelectorAll(`style[${STYLE_HASH_ATTRIBUTE$4}]`)) if (style.getAttribute(STYLE_HASH_ATTRIBUTE$4) === hash) return true;
	return false;
}
function injectStyle$4(targetDocument, hash, css) {
	if (!targetDocument.head) return;
	const runtime = getRuntime$4();
	let injectedStyles = runtime.injectedStyles.get(targetDocument);
	if (!injectedStyles) {
		injectedStyles = /* @__PURE__ */ new Set();
		runtime.injectedStyles.set(targetDocument, injectedStyles);
	}
	if (injectedStyles.has(hash)) return;
	if (documentContainsStyleHash$4(targetDocument, hash)) {
		injectedStyles.add(hash);
		return;
	}
	const style = targetDocument.createElement("style");
	style.setAttribute(STYLE_HASH_ATTRIBUTE$4, hash);
	style.appendChild(targetDocument.createTextNode(css));
	targetDocument.head.appendChild(style);
	injectedStyles.add(hash);
}
function registerDocument$4(targetDocument) {
	const runtime = getRuntime$4();
	runtime.documents.set(targetDocument, (runtime.documents.get(targetDocument) ?? 0) + 1);
	for (const [hash, css] of runtime.styles) injectStyle$4(targetDocument, hash, css);
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
function registerStyle$4(hash, css) {
	const runtime = getRuntime$4();
	runtime.styles.set(hash, css);
	for (const targetDocument of runtime.documents.keys()) injectStyle$4(targetDocument, hash, css);
}
var import_jsx_runtime$10, STYLE_HASH_ATTRIBUTE$4, style_module_default$4, Popover;
function init_popover() {
	return (init_popover = __esmMin((() => {
		init_clsx();
		init_dist(), init_menu$1();
		init_react();
		init_context();
		import_jsx_runtime$10 = require_jsx_runtime();
		STYLE_HASH_ATTRIBUTE$4 = "data-wp-hash";
		if (typeof process === "undefined" || false) registerStyle$4("fbef06cd62", "._131511141326b11b__menu{outline:2px solid transparent!important;position:relative;z-index:1000000}.b6b687129dd092d1__menu-surface{background-color:var(--wp-components-color-background,var(--wpds-color-background-surface-neutral-strong,#fff));border-radius:4px;box-shadow:0 0 0 1px var(--wp-components-color-gray-300,var(--wpds-color-stroke-surface-neutral,#dbdbdb)),0 2px 3px rgba(0,0,0,.05),0 4px 5px rgba(0,0,0,.04),0 12px 12px rgba(0,0,0,.03),0 16px 16px rgba(0,0,0,.02);box-sizing:border-box;display:grid;grid-template-columns:minmax(0,max-content) 1fr;grid-template-rows:auto;max-height:var(--popover-available-height);max-width:320px;min-width:160px;overflow:auto;overscroll-behavior:contain;padding:4px}.b6b687129dd092d1__menu-surface:where(._59078aa9632a9595__is-toolbar){box-shadow:0 0 0 1px var(--wp-components-color-foreground,var(--wpds-color-foreground-content-neutral,#1e1e1e))}@media not (prefers-reduced-motion){._0965e4c0ecda2cad__menu-motion-root{transition-duration:var(--wpds-motion-duration-md,.2s),var(--wpds-motion-duration-sm,.1s);transition-property:transform,opacity;transition-timing-function:var(--wpds-motion-easing-expressive,cubic-bezier(.25,0,0,1)),linear;will-change:transform,opacity}._0965e4c0ecda2cad__menu-motion-root:not(:has(>.b6b687129dd092d1__menu-surface[data-submenu])){opacity:0}._0965e4c0ecda2cad__menu-motion-root:not(:has(>.b6b687129dd092d1__menu-surface[data-submenu])):has(>.b6b687129dd092d1__menu-surface[data-enter]){opacity:1}._0965e4c0ecda2cad__menu-motion-root:not(:has(>.b6b687129dd092d1__menu-surface[data-submenu])):has(>.b6b687129dd092d1__menu-surface[data-side=bottom]){transform:translateY(-4px)}._0965e4c0ecda2cad__menu-motion-root:not(:has(>.b6b687129dd092d1__menu-surface[data-submenu])):has(>.b6b687129dd092d1__menu-surface[data-side=top]){transform:translateY(4px)}._0965e4c0ecda2cad__menu-motion-root:not(:has(>.b6b687129dd092d1__menu-surface[data-submenu])):has(>.b6b687129dd092d1__menu-surface[data-side=left]){transform:translateX(4px)}._0965e4c0ecda2cad__menu-motion-root:not(:has(>.b6b687129dd092d1__menu-surface[data-submenu])):has(>.b6b687129dd092d1__menu-surface[data-side=right]){transform:translateX(-4px)}._0965e4c0ecda2cad__menu-motion-root:not(:has(>.b6b687129dd092d1__menu-surface[data-submenu])):has(>.b6b687129dd092d1__menu-surface[data-enter][data-side=bottom]),._0965e4c0ecda2cad__menu-motion-root:not(:has(>.b6b687129dd092d1__menu-surface[data-submenu])):has(>.b6b687129dd092d1__menu-surface[data-enter][data-side=top]){transform:translateY(0)}._0965e4c0ecda2cad__menu-motion-root:not(:has(>.b6b687129dd092d1__menu-surface[data-submenu])):has(>.b6b687129dd092d1__menu-surface[data-enter][data-side=left]),._0965e4c0ecda2cad__menu-motion-root:not(:has(>.b6b687129dd092d1__menu-surface[data-submenu])):has(>.b6b687129dd092d1__menu-surface[data-enter][data-side=right]){transform:translateX(0)}}.a8d8dc9b4f86d131__item{all:unset;align-items:center;box-sizing:border-box;cursor:var(--wpds-cursor-control,pointer);display:grid;grid-column:1/-1;grid-template-columns:minmax(0,max-content) 1fr;min-height:32px;position:relative}@supports (grid-template-columns:subgrid){.a8d8dc9b4f86d131__item{grid-template-columns:subgrid}}.a8d8dc9b4f86d131__item{border-radius:2px;color:var(--wp-components-color-foreground,var(--wpds-color-foreground-content-neutral,#1e1e1e));font-family:inherit;font-size:13px;font-weight:400;line-height:20px;outline:none;padding-block:4px;padding-inline:12px;scroll-margin:4px;user-select:none}.a8d8dc9b4f86d131__item[aria-disabled=true]{color:var(--wpds-color-foreground-interactive-neutral-disabled,#8d8d8d)}.a8d8dc9b4f86d131__item[data-active-item]:not([data-focus-visible]):not([aria-disabled=true]){background-color:var(--wp-components-color-accent,var(--wp-admin-theme-color,#3858e9));color:var(--wp-components-color-accent-inverted,var(--wpds-color-foreground-interactive-brand-strong,#fff))}.a8d8dc9b4f86d131__item[data-focus-visible]{box-shadow:0 0 0 1.5px var(--wp-components-color-accent,var(--wp-admin-theme-color,#3858e9));outline:2px solid transparent}._131511141326b11b__menu:not(:focus) .a8d8dc9b4f86d131__item:not(:focus)[aria-expanded=true]{background-color:var(--wp-components-color-gray-100,var(--wpds-color-background-surface-neutral,#fcfcfc));color:var(--wp-components-color-foreground,var(--wpds-color-foreground-content-neutral,#1e1e1e))}.a8d8dc9b4f86d131__item svg{fill:currentColor}._8b22cbfeb79a4270__item-prefix-wrapper{grid-column:1}.a63fce487b470227__checkbox-item>._8b22cbfeb79a4270__item-prefix-wrapper,.cc6238e7feede9fd__radio-item>._8b22cbfeb79a4270__item-prefix-wrapper{min-width:24px}._8b22cbfeb79a4270__item-prefix-wrapper:not(:empty),.a63fce487b470227__checkbox-item>._8b22cbfeb79a4270__item-prefix-wrapper,.cc6238e7feede9fd__radio-item>._8b22cbfeb79a4270__item-prefix-wrapper{margin-inline-end:8px}._8b22cbfeb79a4270__item-prefix-wrapper{align-items:center;color:var(--wp-components-color-gray-700,var(--wpds-color-foreground-content-neutral-weak,#707070));display:flex;justify-content:center}[aria-disabled=true]>._8b22cbfeb79a4270__item-prefix-wrapper,[data-active-item]:not([data-focus-visible])>._8b22cbfeb79a4270__item-prefix-wrapper{color:inherit}.b39622f9287a1a2f__item-content-wrapper{align-items:center;display:flex;gap:12px;grid-column:2;justify-content:space-between;pointer-events:none}._56ca6ca0990c2a9b__item-children-wrapper{display:inline-flex;flex:1;flex-direction:column;gap:4px}._97a83b395215bdd3__item-suffix-wrapper{align-items:center;color:var(--wp-components-color-gray-700,var(--wpds-color-foreground-content-neutral-weak,#707070));display:flex;flex:0 1 fit-content;gap:12px;justify-content:center;min-width:0;width:fit-content}[aria-disabled=true] :not(._131511141326b11b__menu) ._97a83b395215bdd3__item-suffix-wrapper,[data-active-item]:not([data-focus-visible]) :not(._131511141326b11b__menu) ._97a83b395215bdd3__item-suffix-wrapper{color:inherit}._68234318b0701028__group{display:contents}._3ca33d86e18b686c__group-label{grid-column:1/-1;padding-block-end:8px;padding-block-start:12px;padding-inline:12px}.c6a6663859a16bc1__separator{background-color:var(--wp-components-color-gray-200,var(--wpds-color-stroke-surface-neutral,#dbdbdb));border:none;grid-column:1/-1;height:1px;margin-block:8px;margin-inline:12px;outline:2px solid transparent}.c6a6663859a16bc1__separator:where(._59078aa9632a9595__is-toolbar){background-color:var(--wp-components-color-foreground,var(--wpds-color-foreground-content-neutral,#1e1e1e))}._477317536d60b275__submenu-chevron-icon{transform:scaleX(1);width:6px}._477317536d60b275__submenu-chevron-icon:where(._402d50ebfd3f1b45__is-rtl){transform:scaleX(-1)}.b7d17e75a44b0b82__item-label{color:inherit;font-size:13px;line-height:20px}._1c05bcee36309dc5__item-help-text{color:var(--wp-components-color-gray-700,var(--wpds-color-foreground-content-neutral-weak,#707070));font-size:12px;line-height:16px;overflow-wrap:anywhere}[aria-disabled=true] :not(._131511141326b11b__menu) ._1c05bcee36309dc5__item-help-text,[data-active-item]:not([data-focus-visible]) :not(._131511141326b11b__menu) ._1c05bcee36309dc5__item-help-text{color:inherit}");
		style_module_default$4 = {
			"menu": "_131511141326b11b__menu",
			"menu-surface": "b6b687129dd092d1__menu-surface",
			"is-toolbar": "_59078aa9632a9595__is-toolbar",
			"menu-motion-root": "_0965e4c0ecda2cad__menu-motion-root",
			"item": "a8d8dc9b4f86d131__item",
			"item-prefix-wrapper": "_8b22cbfeb79a4270__item-prefix-wrapper",
			"checkbox-item": "a63fce487b470227__checkbox-item",
			"radio-item": "cc6238e7feede9fd__radio-item",
			"item-content-wrapper": "b39622f9287a1a2f__item-content-wrapper",
			"item-children-wrapper": "_56ca6ca0990c2a9b__item-children-wrapper",
			"item-suffix-wrapper": "_97a83b395215bdd3__item-suffix-wrapper",
			"group": "_68234318b0701028__group",
			"group-label": "_3ca33d86e18b686c__group-label",
			"separator": "c6a6663859a16bc1__separator",
			"submenu-chevron-icon": "_477317536d60b275__submenu-chevron-icon",
			"is-rtl": "_402d50ebfd3f1b45__is-rtl",
			"item-label": "b7d17e75a44b0b82__item-label",
			"item-help-text": "_1c05bcee36309dc5__item-help-text"
		};
		Popover = (0, import_react.forwardRef)(function UnforwardedPopover({ gutter, shift, modal = true, ...otherProps }, ref) {
			const menuContext = (0, import_react.useContext)(Context);
			const appliedPlacementSide = useStoreState(menuContext?.store, "currentPlacement")?.split("-")[0];
			const hideOnEscape = (0, import_react.useCallback)((event) => {
				event.preventDefault();
				return true;
			}, []);
			const computedDirection = useStoreState(menuContext?.store, "rtl") ? "rtl" : "ltr";
			const wrapperProps = (0, import_react.useMemo)(() => ({
				dir: computedDirection,
				style: { direction: computedDirection }
			}), [computedDirection]);
			if (!menuContext?.store) throw new Error("Menu.Popover can only be rendered inside a Menu component");
			const renderMenu = (0, import_react.useCallback)((htmlProps) => /* @__PURE__ */ (0, import_jsx_runtime$10.jsx)("div", {
				className: style_module_default$4["menu-motion-root"],
				children: /* @__PURE__ */ (0, import_jsx_runtime$10.jsx)("div", {
					...htmlProps,
					className: clsx(style_module_default$4["menu-surface"], htmlProps.className, { [style_module_default$4["is-toolbar"]]: menuContext.variant === "toolbar" })
				})
			}), [menuContext.variant]);
			return /* @__PURE__ */ (0, import_jsx_runtime$10.jsx)(Menu$1, {
				...otherProps,
				className: clsx(style_module_default$4.menu, otherProps.className),
				ref,
				modal,
				store: menuContext.store,
				gutter: gutter ?? (menuContext.store.parent ? 0 : 8),
				shift: shift ?? (menuContext.store.parent ? -4 : 0),
				hideOnHoverOutside: false,
				"data-side": appliedPlacementSide,
				"data-submenu": !!menuContext.store.parent || void 0,
				wrapperProps,
				hideOnEscape,
				unmountOnHide: true,
				render: renderMenu
			});
		});
	})))();
}
//#endregion
//#region ../packages/components/build-module/menu/index.mjs
var import_jsx_runtime$9, UnconnectedMenu, Menu;
function init_menu() {
	return (init_menu = __esmMin((() => {
		init_menu_store();
		init_react();
		init_build_module$1();
		init_use_context_system(), init_context_connect();
		init_context();
		init_item();
		init_checkbox_item();
		init_radio_item();
		init_group();
		init_group_label();
		init_separator();
		init_item_label();
		init_item_help_text();
		init_trigger_button();
		init_submenu_trigger_item();
		init_popover();
		import_jsx_runtime$9 = require_jsx_runtime();
		UnconnectedMenu = (props) => {
			const { children, defaultOpen = false, open, onOpenChange, placement, variant } = useContextSystem(props, "Menu");
			const parentContext = (0, import_react.useContext)(Context);
			const rtl = isRTL();
			let computedPlacement = placement ?? (parentContext?.store ? "right-start" : "bottom-start");
			if (rtl) {
				if (/right/.test(computedPlacement)) computedPlacement = computedPlacement.replace("right", "left");
				else if (/left/.test(computedPlacement)) computedPlacement = computedPlacement.replace("left", "right");
			}
			const menuStore = useMenuStore({
				parent: parentContext?.store,
				open,
				defaultOpen,
				placement: computedPlacement,
				focusLoop: true,
				setOpen(willBeOpen) {
					onOpenChange?.(willBeOpen);
				},
				rtl
			});
			const contextValue = (0, import_react.useMemo)(() => ({
				store: menuStore,
				variant
			}), [menuStore, variant]);
			return /* @__PURE__ */ (0, import_jsx_runtime$9.jsx)(Context.Provider, {
				value: contextValue,
				children
			});
		};
		Menu = Object.assign(contextConnectWithoutRef(UnconnectedMenu, "Menu"), {
			Context: Object.assign(Context, { displayName: "Menu.Context" }),
			/**
			* Renders a menu item inside the `Menu.Popover` or `Menu.Group` components.
			*
			* It can optionally contain one instance of the `Menu.ItemLabel` component
			* and one instance of the `Menu.ItemHelpText` component.
			*/
			Item: Object.assign(Item, { displayName: "Menu.Item" }),
			/**
			* Renders a radio menu item inside the `Menu.Popover` or `Menu.Group`
			* components.
			*
			* It can optionally contain one instance of the `Menu.ItemLabel` component
			* and one instance of the `Menu.ItemHelpText` component.
			*/
			RadioItem: Object.assign(RadioItem, { displayName: "Menu.RadioItem" }),
			/**
			* Renders a checkbox menu item inside the `Menu.Popover` or `Menu.Group`
			* components.
			*
			* It can optionally contain one instance of the `Menu.ItemLabel` component
			* and one instance of the `Menu.ItemHelpText` component.
			*/
			CheckboxItem: Object.assign(CheckboxItem, { displayName: "Menu.CheckboxItem" }),
			/**
			* Renders a group for menu items.
			*
			* It should contain one instance of `Menu.GroupLabel` and one or more
			* instances of `Menu.Item`, `Menu.RadioItem`, or `Menu.CheckboxItem`.
			*/
			Group: Object.assign(Group, { displayName: "Menu.Group" }),
			/**
			* Renders a label in a menu group.
			*
			* This component should be wrapped with `Menu.Group` so the
			* `aria-labelledby` is correctly set on the group element.
			*/
			GroupLabel: Object.assign(GroupLabel, { displayName: "Menu.GroupLabel" }),
			/**
			* Renders a divider between menu items or menu groups.
			*/
			Separator: Object.assign(Separator, { displayName: "Menu.Separator" }),
			/**
			* Renders a menu item's label text. It should be wrapped with `Menu.Item`,
			* `Menu.RadioItem`, or `Menu.CheckboxItem`.
			*/
			ItemLabel: Object.assign(ItemLabel, { displayName: "Menu.ItemLabel" }),
			/**
			* Renders a menu item's help text. It should be wrapped with `Menu.Item`,
			* `Menu.RadioItem`, or `Menu.CheckboxItem`.
			*/
			ItemHelpText: Object.assign(ItemHelpText, { displayName: "Menu.ItemHelpText" }),
			/**
			* Renders a dropdown menu element that's controlled by a sibling
			* `Menu.TriggerButton` component. It renders a popover and automatically
			* focuses on items when the menu is shown.
			*
			* The only valid children of `Menu.Popover` are `Menu.Item`,
			* `Menu.RadioItem`, `Menu.CheckboxItem`, `Menu.Group`, `Menu.Separator`,
			* and `Menu` (for nested dropdown menus).
			*/
			Popover: Object.assign(Popover, { displayName: "Menu.Popover" }),
			/**
			* Renders a menu button that toggles the visibility of a sibling
			* `Menu.Popover` component when clicked or when using arrow keys.
			*/
			TriggerButton: Object.assign(TriggerButton, { displayName: "Menu.TriggerButton" }),
			/**
			* Renders a menu item that toggles the visibility of a sibling
			* `Menu.Popover` component when clicked or when using arrow keys.
			*
			* This component is used to create a nested dropdown menu.
			*/
			SubmenuTriggerItem: Object.assign(SubmenuTriggerItem, { displayName: "Menu.SubmenuTriggerItem" })
		});
	})))();
}
//#endregion
//#region ../packages/components/build-module/tabs/context.mjs
var TabsContext, useTabsContext;
function init_context$1() {
	return (init_context$1 = __esmMin((() => {
		init_react();
		TabsContext = (0, import_react.createContext)(void 0);
		TabsContext.displayName = "TabsContext";
		useTabsContext = () => (0, import_react.useContext)(TabsContext);
	})))();
}
//#endregion
//#region ../packages/components/build-module/tabs/tab.mjs
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
var import_jsx_runtime$8, STYLE_HASH_ATTRIBUTE$3, style_module_default$3, Tab;
function init_tab() {
	return (init_tab = __esmMin((() => {
		init_clsx();
		init_tab$1();
		init_react();
		init_build_module$2();
		init_context$1();
		import_jsx_runtime$8 = require_jsx_runtime();
		STYLE_HASH_ATTRIBUTE$3 = "data-wp-hash";
		if (typeof process === "undefined" || false) registerStyle$3("e0ab14044f", ".b3602b32106ed133__tab-list{align-items:stretch;display:flex;overflow-x:auto}.b3602b32106ed133__tab-list[aria-orientation=vertical]{flex-direction:column}.b3602b32106ed133__tab-list:where([aria-orientation=horizontal]){width:fit-content}.b3602b32106ed133__tab-list{--direction-factor:1;--direction-start:left;--direction-end:right;--selected-start:var(--selected-left,0)}.b3602b32106ed133__tab-list:dir(rtl){--direction-factor:-1;--direction-start:right;--direction-end:left;--selected-start:var(--selected-right,0)}@media not (prefers-reduced-motion){.b3602b32106ed133__tab-list[data-indicator-animated]:before{transition-duration:.2s;transition-property:transform;transition-timing-function:ease-out}}.b3602b32106ed133__tab-list{position:relative}.b3602b32106ed133__tab-list:before{color:var(--wpds-color-foreground-interactive-neutral,#1e1e1e);content:\"\";outline:2px solid transparent;outline-offset:-1px;pointer-events:none;position:absolute;transform-origin:var(--direction-start) top}.b3602b32106ed133__tab-list{--antialiasing-factor:100}.b3602b32106ed133__tab-list[aria-orientation=horizontal]{--fade-width:64px;--fade-gradient-base:transparent 0%,#000 var(--fade-width);--fade-gradient-composed:var(--fade-gradient-base),#000 60%,transparent 50%}.b3602b32106ed133__tab-list[aria-orientation=horizontal].is-overflowing-first{mask-image:linear-gradient(to var(--direction-end),var(--fade-gradient-base))}.b3602b32106ed133__tab-list[aria-orientation=horizontal].is-overflowing-last{mask-image:linear-gradient(to var(--direction-start),var(--fade-gradient-base))}.b3602b32106ed133__tab-list[aria-orientation=horizontal].is-overflowing-first.is-overflowing-last{mask-image:linear-gradient(to right,var(--fade-gradient-composed)),linear-gradient(to left,var(--fade-gradient-composed))}.b3602b32106ed133__tab-list[aria-orientation=horizontal]:before{border-bottom:var(--wp-admin-border-width-focus) solid;bottom:0;height:0;transform:translateX(calc(var(--selected-start)*var(--direction-factor)*1px)) scaleX(calc(var(--selected-width, 0)/var(--antialiasing-factor)));width:calc(var(--antialiasing-factor)*1px)}.b3602b32106ed133__tab-list:has([aria-selected=true]:not([aria-disabled=true])[data-focus-visible]):before{color:var(--wpds-color-foreground-interactive-neutral-active,#1e1e1e)}@media not (prefers-reduced-motion){.b3602b32106ed133__tab-list[aria-orientation=vertical][data-indicator-animated]:before{transition-property:transform,height}}.b3602b32106ed133__tab-list[aria-orientation=vertical]:before{background-color:currentColor;height:max(0px,var(--selected-height,0) * 1px - 2 * var(--wpds-dimension-padding-md,12px));inset-inline-start:0;top:var(--wpds-dimension-padding-md,12px);transform:translateY(calc(var(--selected-top, 0)*1px));width:var(--wp-admin-border-width-focus);z-index:1}._95e73d4984592955__tab{align-items:center;background:transparent;border:none;border-radius:0;box-shadow:none;color:var(--wpds-color-foreground-interactive-neutral,#1e1e1e);cursor:pointer;display:flex;flex:1 0 auto;font-family:-apple-system,system-ui,Segoe UI,Roboto,Oxygen-Sans,Ubuntu,Cantarell,Helvetica Neue,sans-serif;font-size:13px;font-weight:400;line-height:1.2;white-space:nowrap}._95e73d4984592955__tab:is([aria-selected=true],[aria-disabled=true]){cursor:default}._95e73d4984592955__tab[aria-disabled=true]{color:var(--wpds-color-foreground-interactive-neutral-disabled,#8d8d8d)}._95e73d4984592955__tab:not([aria-disabled=true]):is(:not([aria-selected=true]):hover,:not([aria-selected=true]):active,[data-focus-visible]){color:var(--wpds-color-foreground-interactive-neutral-active,#1e1e1e)}._95e73d4984592955__tab:not([aria-disabled=true]):is(:not([aria-selected=true]):hover,:not([aria-selected=true]):active,[data-focus-visible]):after{background-color:var(--wpds-color-background-interactive-neutral-weak-active,#ededed);opacity:1}._95e73d4984592955__tab:focus:not(:disabled){box-shadow:none;outline:none}._95e73d4984592955__tab{isolation:isolate;position:relative}._95e73d4984592955__tab:after{border-radius:2px;opacity:0;outline:var(--wp-admin-border-width-focus) solid transparent;pointer-events:none;position:absolute;z-index:-1}@media not (prefers-reduced-motion){._95e73d4984592955__tab:after{transition:opacity .1s linear}}._95e73d4984592955__tab[data-focus-visible]:after{opacity:1;outline-color:var(--wp-components-color-accent,var(--wp-admin-theme-color,#3858e9))}[aria-orientation=horizontal] ._95e73d4984592955__tab{height:48px;padding-inline:16px;scroll-margin:24px}[aria-orientation=horizontal] ._95e73d4984592955__tab:after{content:\"\";inset:var(--wpds-dimension-padding-md,12px)}[aria-orientation=vertical] ._95e73d4984592955__tab{min-height:var(--wpds-dimension-size-lg,40px);padding:var(--wpds-dimension-padding-md,12px)}[aria-orientation=vertical] ._95e73d4984592955__tab:after{content:\"\";inset:0;outline-offset:calc(var(--wp-admin-border-width-focus)*-1)}._8273dc452cca5a1c__tab-children{align-items:center;display:flex;flex-grow:1}[aria-orientation=horizontal] ._8273dc452cca5a1c__tab-children{justify-content:center}[aria-orientation=vertical] ._8273dc452cca5a1c__tab-children{justify-content:start}._7fe2d5911cf2dc60__tab-panel:focus{outline:none}._7fe2d5911cf2dc60__tab-panel[data-focus-visible]{outline:var(--wpds-border-width-focus,var(--wp-admin-border-width-focus,2px)) solid var(--focus-color,var(--wpds-color-stroke-focus,var(--wp-admin-theme-color,#3858e9)));outline-offset:var(--wpds-border-width-focus,var(--wp-admin-border-width-focus,2px));outline-offset:0}");
		style_module_default$3 = {
			"tab-list": "b3602b32106ed133__tab-list",
			"tab": "_95e73d4984592955__tab",
			"tab-children": "_8273dc452cca5a1c__tab-children",
			"tab-panel": "_7fe2d5911cf2dc60__tab-panel"
		};
		Tab = (0, import_react.forwardRef)(function UnforwardedTab({ children, tabId, disabled, render, className, ...otherProps }, ref) {
			const { store, instanceId } = useTabsContext() ?? {};
			if (!store) {
				warning("`Tabs.Tab` must be wrapped in a `Tabs` component.");
				return null;
			}
			const instancedTabId = `${instanceId}-${tabId}`;
			return /* @__PURE__ */ (0, import_jsx_runtime$8.jsx)(Tab$1, {
				ref,
				store,
				id: instancedTabId,
				disabled,
				render,
				...otherProps,
				className: clsx(style_module_default$3.tab, className),
				children: /* @__PURE__ */ (0, import_jsx_runtime$8.jsx)("span", {
					className: style_module_default$3["tab-children"],
					children
				})
			});
		});
	})))();
}
//#endregion
//#region ../packages/components/build-module/tabs/use-track-overflow.mjs
function useTrackOverflow(parent, children) {
	const [first, setFirst] = (0, import_react.useState)(false);
	const [last, setLast] = (0, import_react.useState)(false);
	const [observer, setObserver] = (0, import_react.useState)();
	const callback = useEvent((entries) => {
		for (const entry of entries) {
			if (entry.target === children.first) setFirst(!entry.isIntersecting);
			if (entry.target === children.last) setLast(!entry.isIntersecting);
		}
	});
	(0, import_react.useEffect)(() => {
		if (!parent || !window.IntersectionObserver) return;
		const newObserver = new IntersectionObserver(callback, {
			root: parent,
			threshold: .9
		});
		setObserver(newObserver);
		return () => newObserver.disconnect();
	}, [callback, parent]);
	(0, import_react.useEffect)(() => {
		if (!observer) return;
		if (children.first) observer.observe(children.first);
		if (children.last) observer.observe(children.last);
		return () => {
			if (children.first) observer.unobserve(children.first);
			if (children.last) observer.unobserve(children.last);
		};
	}, [
		children.first,
		children.last,
		observer
	]);
	return {
		first,
		last
	};
}
function init_use_track_overflow() {
	return (init_use_track_overflow = __esmMin((() => {
		init_react();
		init_use_event();
	})))();
}
//#endregion
//#region ../packages/components/build-module/tabs/tablist.mjs
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
function useScrollRectIntoView(parent, rect, { margin = DEFAULT_SCROLL_MARGIN } = {}) {
	(0, import_react.useLayoutEffect)(() => {
		if (!parent || !rect) return;
		const { scrollLeft: parentScroll } = parent;
		const parentWidth = parent.getBoundingClientRect().width;
		const { left: childLeft, width: childWidth } = rect;
		const parentRightEdge = parentScroll + parentWidth;
		const rightOverflow = childLeft + childWidth + margin - parentRightEdge;
		const leftOverflow = parentScroll - (childLeft - margin);
		let scrollLeft = null;
		if (leftOverflow > 0) scrollLeft = parentScroll - leftOverflow;
		else if (rightOverflow > 0) scrollLeft = parentScroll + rightOverflow;
		if (scrollLeft !== null) parent.scroll?.({ left: scrollLeft });
	}, [
		margin,
		parent,
		rect
	]);
}
var import_jsx_runtime$7, STYLE_HASH_ATTRIBUTE$2, style_module_default$2, DEFAULT_SCROLL_MARGIN, TabList;
function init_tablist() {
	return (init_tablist = __esmMin((() => {
		init_dist(), init_tab_list();
		init_clsx();
		init_build_module$2();
		init_react();
		init_use_merge_refs();
		init_context$1();
		init_element_rect();
		init_use_track_overflow();
		init_use_animated_offset_rect();
		import_jsx_runtime$7 = require_jsx_runtime();
		STYLE_HASH_ATTRIBUTE$2 = "data-wp-hash";
		if (typeof process === "undefined" || false) registerStyle$2("e0ab14044f", ".b3602b32106ed133__tab-list{align-items:stretch;display:flex;overflow-x:auto}.b3602b32106ed133__tab-list[aria-orientation=vertical]{flex-direction:column}.b3602b32106ed133__tab-list:where([aria-orientation=horizontal]){width:fit-content}.b3602b32106ed133__tab-list{--direction-factor:1;--direction-start:left;--direction-end:right;--selected-start:var(--selected-left,0)}.b3602b32106ed133__tab-list:dir(rtl){--direction-factor:-1;--direction-start:right;--direction-end:left;--selected-start:var(--selected-right,0)}@media not (prefers-reduced-motion){.b3602b32106ed133__tab-list[data-indicator-animated]:before{transition-duration:.2s;transition-property:transform;transition-timing-function:ease-out}}.b3602b32106ed133__tab-list{position:relative}.b3602b32106ed133__tab-list:before{color:var(--wpds-color-foreground-interactive-neutral,#1e1e1e);content:\"\";outline:2px solid transparent;outline-offset:-1px;pointer-events:none;position:absolute;transform-origin:var(--direction-start) top}.b3602b32106ed133__tab-list{--antialiasing-factor:100}.b3602b32106ed133__tab-list[aria-orientation=horizontal]{--fade-width:64px;--fade-gradient-base:transparent 0%,#000 var(--fade-width);--fade-gradient-composed:var(--fade-gradient-base),#000 60%,transparent 50%}.b3602b32106ed133__tab-list[aria-orientation=horizontal].is-overflowing-first{mask-image:linear-gradient(to var(--direction-end),var(--fade-gradient-base))}.b3602b32106ed133__tab-list[aria-orientation=horizontal].is-overflowing-last{mask-image:linear-gradient(to var(--direction-start),var(--fade-gradient-base))}.b3602b32106ed133__tab-list[aria-orientation=horizontal].is-overflowing-first.is-overflowing-last{mask-image:linear-gradient(to right,var(--fade-gradient-composed)),linear-gradient(to left,var(--fade-gradient-composed))}.b3602b32106ed133__tab-list[aria-orientation=horizontal]:before{border-bottom:var(--wp-admin-border-width-focus) solid;bottom:0;height:0;transform:translateX(calc(var(--selected-start)*var(--direction-factor)*1px)) scaleX(calc(var(--selected-width, 0)/var(--antialiasing-factor)));width:calc(var(--antialiasing-factor)*1px)}.b3602b32106ed133__tab-list:has([aria-selected=true]:not([aria-disabled=true])[data-focus-visible]):before{color:var(--wpds-color-foreground-interactive-neutral-active,#1e1e1e)}@media not (prefers-reduced-motion){.b3602b32106ed133__tab-list[aria-orientation=vertical][data-indicator-animated]:before{transition-property:transform,height}}.b3602b32106ed133__tab-list[aria-orientation=vertical]:before{background-color:currentColor;height:max(0px,var(--selected-height,0) * 1px - 2 * var(--wpds-dimension-padding-md,12px));inset-inline-start:0;top:var(--wpds-dimension-padding-md,12px);transform:translateY(calc(var(--selected-top, 0)*1px));width:var(--wp-admin-border-width-focus);z-index:1}._95e73d4984592955__tab{align-items:center;background:transparent;border:none;border-radius:0;box-shadow:none;color:var(--wpds-color-foreground-interactive-neutral,#1e1e1e);cursor:pointer;display:flex;flex:1 0 auto;font-family:-apple-system,system-ui,Segoe UI,Roboto,Oxygen-Sans,Ubuntu,Cantarell,Helvetica Neue,sans-serif;font-size:13px;font-weight:400;line-height:1.2;white-space:nowrap}._95e73d4984592955__tab:is([aria-selected=true],[aria-disabled=true]){cursor:default}._95e73d4984592955__tab[aria-disabled=true]{color:var(--wpds-color-foreground-interactive-neutral-disabled,#8d8d8d)}._95e73d4984592955__tab:not([aria-disabled=true]):is(:not([aria-selected=true]):hover,:not([aria-selected=true]):active,[data-focus-visible]){color:var(--wpds-color-foreground-interactive-neutral-active,#1e1e1e)}._95e73d4984592955__tab:not([aria-disabled=true]):is(:not([aria-selected=true]):hover,:not([aria-selected=true]):active,[data-focus-visible]):after{background-color:var(--wpds-color-background-interactive-neutral-weak-active,#ededed);opacity:1}._95e73d4984592955__tab:focus:not(:disabled){box-shadow:none;outline:none}._95e73d4984592955__tab{isolation:isolate;position:relative}._95e73d4984592955__tab:after{border-radius:2px;opacity:0;outline:var(--wp-admin-border-width-focus) solid transparent;pointer-events:none;position:absolute;z-index:-1}@media not (prefers-reduced-motion){._95e73d4984592955__tab:after{transition:opacity .1s linear}}._95e73d4984592955__tab[data-focus-visible]:after{opacity:1;outline-color:var(--wp-components-color-accent,var(--wp-admin-theme-color,#3858e9))}[aria-orientation=horizontal] ._95e73d4984592955__tab{height:48px;padding-inline:16px;scroll-margin:24px}[aria-orientation=horizontal] ._95e73d4984592955__tab:after{content:\"\";inset:var(--wpds-dimension-padding-md,12px)}[aria-orientation=vertical] ._95e73d4984592955__tab{min-height:var(--wpds-dimension-size-lg,40px);padding:var(--wpds-dimension-padding-md,12px)}[aria-orientation=vertical] ._95e73d4984592955__tab:after{content:\"\";inset:0;outline-offset:calc(var(--wp-admin-border-width-focus)*-1)}._8273dc452cca5a1c__tab-children{align-items:center;display:flex;flex-grow:1}[aria-orientation=horizontal] ._8273dc452cca5a1c__tab-children{justify-content:center}[aria-orientation=vertical] ._8273dc452cca5a1c__tab-children{justify-content:start}._7fe2d5911cf2dc60__tab-panel:focus{outline:none}._7fe2d5911cf2dc60__tab-panel[data-focus-visible]{outline:var(--wpds-border-width-focus,var(--wp-admin-border-width-focus,2px)) solid var(--focus-color,var(--wpds-color-stroke-focus,var(--wp-admin-theme-color,#3858e9)));outline-offset:var(--wpds-border-width-focus,var(--wp-admin-border-width-focus,2px));outline-offset:0}");
		style_module_default$2 = {
			"tab-list": "b3602b32106ed133__tab-list",
			"tab": "_95e73d4984592955__tab",
			"tab-children": "_8273dc452cca5a1c__tab-children",
			"tab-panel": "_7fe2d5911cf2dc60__tab-panel"
		};
		DEFAULT_SCROLL_MARGIN = 24;
		TabList = (0, import_react.forwardRef)(function UnforwardedTabList({ children, ...otherProps }, ref) {
			const { store } = useTabsContext() ?? {};
			const selectedId = useStoreState(store, "selectedId");
			const selectOnMove = useStoreState(store, "selectOnMove");
			const items = useStoreState(store, "items");
			const [parent, setParent] = (0, import_react.useState)();
			const refs = useMergeRefs([ref, setParent]);
			const selectedItem = store?.item(selectedId);
			const renderedItems = useStoreState(store, "renderedItems");
			const selectedItemIndex = renderedItems && selectedItem ? renderedItems.indexOf(selectedItem) : -1;
			const selectedRect = useTrackElementOffsetRect(selectedItem?.element, [selectedItemIndex]);
			const overflow = useTrackOverflow(parent, {
				first: items?.at(0)?.element,
				last: items?.at(-1)?.element
			});
			useAnimatedOffsetRect(parent, selectedRect, {
				prefix: "selected",
				dataAttribute: "indicator-animated",
				transitionEndFilter: (event) => event.pseudoElement === "::before",
				roundRect: true
			});
			useScrollRectIntoView(parent, selectedRect);
			if (!store) {
				warning("`Tabs.TabList` must be wrapped in a `Tabs` component.");
				return null;
			}
			return /* @__PURE__ */ (0, import_jsx_runtime$7.jsx)(TabList$1, {
				ref: refs,
				store,
				render: (props) => /* @__PURE__ */ (0, import_jsx_runtime$7.jsx)("div", {
					...props,
					tabIndex: props.tabIndex ?? -1
				}),
				"data-select-on-move": selectOnMove ? "true" : "false",
				...otherProps,
				className: clsx(style_module_default$2["tab-list"], overflow.first && "is-overflowing-first", overflow.last && "is-overflowing-last", otherProps.className),
				children
			});
		});
	})))();
}
//#endregion
//#region ../packages/components/build-module/tabs/tabpanel.mjs
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
var import_jsx_runtime$6, STYLE_HASH_ATTRIBUTE$1, style_module_default$1, TabPanel;
function init_tabpanel() {
	return (init_tabpanel = __esmMin((() => {
		init_dist(), init_tab_panel();
		init_clsx();
		init_react();
		init_build_module$2();
		init_context$1();
		import_jsx_runtime$6 = require_jsx_runtime();
		STYLE_HASH_ATTRIBUTE$1 = "data-wp-hash";
		if (typeof process === "undefined" || false) registerStyle$1("e0ab14044f", ".b3602b32106ed133__tab-list{align-items:stretch;display:flex;overflow-x:auto}.b3602b32106ed133__tab-list[aria-orientation=vertical]{flex-direction:column}.b3602b32106ed133__tab-list:where([aria-orientation=horizontal]){width:fit-content}.b3602b32106ed133__tab-list{--direction-factor:1;--direction-start:left;--direction-end:right;--selected-start:var(--selected-left,0)}.b3602b32106ed133__tab-list:dir(rtl){--direction-factor:-1;--direction-start:right;--direction-end:left;--selected-start:var(--selected-right,0)}@media not (prefers-reduced-motion){.b3602b32106ed133__tab-list[data-indicator-animated]:before{transition-duration:.2s;transition-property:transform;transition-timing-function:ease-out}}.b3602b32106ed133__tab-list{position:relative}.b3602b32106ed133__tab-list:before{color:var(--wpds-color-foreground-interactive-neutral,#1e1e1e);content:\"\";outline:2px solid transparent;outline-offset:-1px;pointer-events:none;position:absolute;transform-origin:var(--direction-start) top}.b3602b32106ed133__tab-list{--antialiasing-factor:100}.b3602b32106ed133__tab-list[aria-orientation=horizontal]{--fade-width:64px;--fade-gradient-base:transparent 0%,#000 var(--fade-width);--fade-gradient-composed:var(--fade-gradient-base),#000 60%,transparent 50%}.b3602b32106ed133__tab-list[aria-orientation=horizontal].is-overflowing-first{mask-image:linear-gradient(to var(--direction-end),var(--fade-gradient-base))}.b3602b32106ed133__tab-list[aria-orientation=horizontal].is-overflowing-last{mask-image:linear-gradient(to var(--direction-start),var(--fade-gradient-base))}.b3602b32106ed133__tab-list[aria-orientation=horizontal].is-overflowing-first.is-overflowing-last{mask-image:linear-gradient(to right,var(--fade-gradient-composed)),linear-gradient(to left,var(--fade-gradient-composed))}.b3602b32106ed133__tab-list[aria-orientation=horizontal]:before{border-bottom:var(--wp-admin-border-width-focus) solid;bottom:0;height:0;transform:translateX(calc(var(--selected-start)*var(--direction-factor)*1px)) scaleX(calc(var(--selected-width, 0)/var(--antialiasing-factor)));width:calc(var(--antialiasing-factor)*1px)}.b3602b32106ed133__tab-list:has([aria-selected=true]:not([aria-disabled=true])[data-focus-visible]):before{color:var(--wpds-color-foreground-interactive-neutral-active,#1e1e1e)}@media not (prefers-reduced-motion){.b3602b32106ed133__tab-list[aria-orientation=vertical][data-indicator-animated]:before{transition-property:transform,height}}.b3602b32106ed133__tab-list[aria-orientation=vertical]:before{background-color:currentColor;height:max(0px,var(--selected-height,0) * 1px - 2 * var(--wpds-dimension-padding-md,12px));inset-inline-start:0;top:var(--wpds-dimension-padding-md,12px);transform:translateY(calc(var(--selected-top, 0)*1px));width:var(--wp-admin-border-width-focus);z-index:1}._95e73d4984592955__tab{align-items:center;background:transparent;border:none;border-radius:0;box-shadow:none;color:var(--wpds-color-foreground-interactive-neutral,#1e1e1e);cursor:pointer;display:flex;flex:1 0 auto;font-family:-apple-system,system-ui,Segoe UI,Roboto,Oxygen-Sans,Ubuntu,Cantarell,Helvetica Neue,sans-serif;font-size:13px;font-weight:400;line-height:1.2;white-space:nowrap}._95e73d4984592955__tab:is([aria-selected=true],[aria-disabled=true]){cursor:default}._95e73d4984592955__tab[aria-disabled=true]{color:var(--wpds-color-foreground-interactive-neutral-disabled,#8d8d8d)}._95e73d4984592955__tab:not([aria-disabled=true]):is(:not([aria-selected=true]):hover,:not([aria-selected=true]):active,[data-focus-visible]){color:var(--wpds-color-foreground-interactive-neutral-active,#1e1e1e)}._95e73d4984592955__tab:not([aria-disabled=true]):is(:not([aria-selected=true]):hover,:not([aria-selected=true]):active,[data-focus-visible]):after{background-color:var(--wpds-color-background-interactive-neutral-weak-active,#ededed);opacity:1}._95e73d4984592955__tab:focus:not(:disabled){box-shadow:none;outline:none}._95e73d4984592955__tab{isolation:isolate;position:relative}._95e73d4984592955__tab:after{border-radius:2px;opacity:0;outline:var(--wp-admin-border-width-focus) solid transparent;pointer-events:none;position:absolute;z-index:-1}@media not (prefers-reduced-motion){._95e73d4984592955__tab:after{transition:opacity .1s linear}}._95e73d4984592955__tab[data-focus-visible]:after{opacity:1;outline-color:var(--wp-components-color-accent,var(--wp-admin-theme-color,#3858e9))}[aria-orientation=horizontal] ._95e73d4984592955__tab{height:48px;padding-inline:16px;scroll-margin:24px}[aria-orientation=horizontal] ._95e73d4984592955__tab:after{content:\"\";inset:var(--wpds-dimension-padding-md,12px)}[aria-orientation=vertical] ._95e73d4984592955__tab{min-height:var(--wpds-dimension-size-lg,40px);padding:var(--wpds-dimension-padding-md,12px)}[aria-orientation=vertical] ._95e73d4984592955__tab:after{content:\"\";inset:0;outline-offset:calc(var(--wp-admin-border-width-focus)*-1)}._8273dc452cca5a1c__tab-children{align-items:center;display:flex;flex-grow:1}[aria-orientation=horizontal] ._8273dc452cca5a1c__tab-children{justify-content:center}[aria-orientation=vertical] ._8273dc452cca5a1c__tab-children{justify-content:start}._7fe2d5911cf2dc60__tab-panel:focus{outline:none}._7fe2d5911cf2dc60__tab-panel[data-focus-visible]{outline:var(--wpds-border-width-focus,var(--wp-admin-border-width-focus,2px)) solid var(--focus-color,var(--wpds-color-stroke-focus,var(--wp-admin-theme-color,#3858e9)));outline-offset:var(--wpds-border-width-focus,var(--wp-admin-border-width-focus,2px));outline-offset:0}");
		style_module_default$1 = {
			"tab-list": "b3602b32106ed133__tab-list",
			"tab": "_95e73d4984592955__tab",
			"tab-children": "_8273dc452cca5a1c__tab-children",
			"tab-panel": "_7fe2d5911cf2dc60__tab-panel"
		};
		TabPanel = (0, import_react.forwardRef)(function UnforwardedTabPanel({ children, tabId, focusable = true, className, ...otherProps }, ref) {
			const context = useTabsContext();
			const selectedId = useStoreState(context?.store, "selectedId");
			if (!context) {
				warning("`Tabs.TabPanel` must be wrapped in a `Tabs` component.");
				return null;
			}
			const { store, instanceId } = context;
			const instancedTabId = `${instanceId}-${tabId}`;
			return /* @__PURE__ */ (0, import_jsx_runtime$6.jsx)(TabPanel$1, {
				ref,
				store,
				id: `${instancedTabId}-view`,
				tabId: instancedTabId,
				focusable,
				...otherProps,
				className: clsx(style_module_default$1["tab-panel"], className),
				children: selectedId === instancedTabId && children
			});
		});
	})))();
}
//#endregion
//#region ../packages/components/build-module/tabs/index.mjs
function externalToInternalTabId(externalId, instanceId) {
	return externalId && `${instanceId}-${externalId}`;
}
function internalToExternalTabId(internalId, instanceId) {
	return typeof internalId === "string" ? internalId.replace(`${instanceId}-`, "") : internalId;
}
var import_jsx_runtime$5, Tabs;
function init_tabs() {
	return (init_tabs = __esmMin((() => {
		init_tab_store();
		init_use_instance_id();
		init_react();
		init_build_module$1();
		init_context$1();
		init_tab();
		init_tablist();
		init_tabpanel();
		import_jsx_runtime$5 = require_jsx_runtime();
		Tabs = Object.assign(function TabsRoot({ selectOnMove = true, defaultTabId, orientation = "horizontal", onSelect, children, selectedTabId, activeTabId, defaultActiveTabId, onActiveTabIdChange }) {
			const instanceId = use_instance_id_default(TabsRoot, "tabs");
			const store = useTabStore({
				selectOnMove,
				orientation,
				defaultSelectedId: externalToInternalTabId(defaultTabId, instanceId),
				setSelectedId: (newSelectedId) => {
					onSelect?.(internalToExternalTabId(newSelectedId, instanceId));
				},
				selectedId: externalToInternalTabId(selectedTabId, instanceId),
				defaultActiveId: externalToInternalTabId(defaultActiveTabId, instanceId),
				setActiveId: (newActiveId) => {
					onActiveTabIdChange?.(internalToExternalTabId(newActiveId, instanceId));
				},
				activeId: externalToInternalTabId(activeTabId, instanceId),
				rtl: isRTL()
			});
			const contextValue = (0, import_react.useMemo)(() => ({
				store,
				instanceId
			}), [store, instanceId]);
			return /* @__PURE__ */ (0, import_jsx_runtime$5.jsx)(TabsContext.Provider, {
				value: contextValue,
				children
			});
		}, {
			/**
			* Renders a single tab.
			*
			* The currently active tab receives default styling that can be
			* overridden with CSS targeting `[aria-selected="true"]`.
			*/
			Tab: Object.assign(Tab, { displayName: "Tabs.Tab" }),
			/**
			* A wrapper component for the `Tab` components.
			*
			* It is responsible for rendering the list of tabs.
			*/
			TabList: Object.assign(TabList, { displayName: "Tabs.TabList" }),
			/**
			* Renders the content to display for a single tab once that tab is selected.
			*/
			TabPanel: Object.assign(TabPanel, { displayName: "Tabs.TabPanel" }),
			Context: Object.assign(TabsContext, { displayName: "Tabs.Context" })
		});
	})))();
}
//#endregion
//#region ../packages/components/build-module/badge/index.mjs
function contextBasedIcon(intent = "default") {
	switch (intent) {
		case "info": return info_default;
		case "success": return published_default;
		case "warning": return caution_default;
		case "error": return error_default;
		default: return null;
	}
}
function Badge({ className, intent = "default", children, ...props }) {
	deprecated("wp.components.privateApis.Badge", {
		since: "7.2",
		alternative: "Badge from @wordpress/ui",
		hint: "This private API will be completely removed within a few Gutenberg plugin releases."
	});
	const icon = contextBasedIcon(intent);
	const hasIcon = !!icon;
	return /* @__PURE__ */ (0, import_jsx_runtime$4.jsx)("span", {
		className: clsx("components-badge", className, {
			[`is-${intent}`]: intent,
			"has-icon": hasIcon
		}),
		...props,
		children: /* @__PURE__ */ (0, import_jsx_runtime$4.jsxs)("span", {
			className: "components-badge__flex-wrapper",
			children: [hasIcon && /* @__PURE__ */ (0, import_jsx_runtime$4.jsx)(icon_default$1, {
				icon,
				size: 16,
				fill: "currentColor",
				className: "components-badge__icon"
			}), /* @__PURE__ */ (0, import_jsx_runtime$4.jsx)("span", {
				className: "components-badge__content",
				children
			})]
		})
	});
}
var import_jsx_runtime$4, badge_default;
function init_badge() {
	return (init_badge = __esmMin((() => {
		init_clsx();
		init_build_module$3();
		init_build_module();
		init_icon$1();
		import_jsx_runtime$4 = require_jsx_runtime();
		badge_default = Badge;
	})))();
}
//#endregion
//#region ../packages/components/build-module/validated-form-controls/components/input-control.mjs
var import_jsx_runtime$3, UnforwardedValidatedInputControl, ValidatedInputControl;
function init_input_control() {
	return (init_input_control = __esmMin((() => {
		init_react();
		init_use_merge_refs();
		init_build_module();
		init_control_with_error();
		init_input_control$1();
		import_jsx_runtime$3 = require_jsx_runtime();
		UnforwardedValidatedInputControl = ({ required, customValidity, markWhenOptional, ...restProps }, forwardedRef) => {
			deprecated("wp.components.privateApis.ValidatedInputControl", {
				since: "7.2",
				alternative: "ValidatedInputControl from @wordpress/ui",
				hint: "This private API will be completely removed within a few Gutenberg plugin releases."
			});
			const validityTargetRef = (0, import_react.useRef)(null);
			const mergedRefs = useMergeRefs([forwardedRef, validityTargetRef]);
			return /* @__PURE__ */ (0, import_jsx_runtime$3.jsx)(ControlWithError, {
				className: "components-validated-control",
				required,
				markWhenOptional,
				customValidity,
				getValidityTarget: () => validityTargetRef.current,
				children: /* @__PURE__ */ (0, import_jsx_runtime$3.jsx)(input_control_default, {
					ref: mergedRefs,
					...restProps
				})
			});
		};
		ValidatedInputControl = (0, import_react.forwardRef)(UnforwardedValidatedInputControl);
		ValidatedInputControl.displayName = "ValidatedInputControl";
	})))();
}
//#endregion
//#region ../packages/components/build-module/content-editable-control/index.mjs
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
function UnforwardedContentEditableControl({ label, id, className, help, hideLabelFromVision, disabled, required, placeholder, ...additionalProps }, forwardedRef) {
	const { baseControlProps, controlProps } = useBaseControlProps({
		id,
		className,
		help
	});
	const labelId = `${controlProps.id}__label`;
	const editableRef = (0, import_react.useRef)(null);
	const mergedRefs = useMergeRefs([editableRef, forwardedRef]);
	return /* @__PURE__ */ (0, import_jsx_runtime$2.jsxs)(base_control_default, {
		...baseControlProps,
		children: [hideLabelFromVision ? /* @__PURE__ */ (0, import_jsx_runtime$2.jsx)(component_default$1, {
			id: labelId,
			children: label
		}) : /* @__PURE__ */ (0, import_jsx_runtime$2.jsx)(base_control_default.VisualLabel, {
			id: labelId,
			onClick: () => editableRef.current?.focus(),
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime$2.jsx)("div", {
			className: style_module_default.editable,
			role: "textbox",
			"aria-multiline": true,
			"aria-labelledby": labelId,
			"aria-placeholder": placeholder || void 0,
			"aria-disabled": disabled || void 0,
			"aria-required": required || void 0,
			ref: mergedRefs,
			contentEditable: !disabled,
			tabIndex: disabled ? -1 : void 0,
			suppressContentEditableWarning: true,
			...additionalProps,
			...controlProps
		})]
	});
}
var import_jsx_runtime$2, STYLE_HASH_ATTRIBUTE, style_module_default, ContentEditableControl, content_editable_control_default;
function init_content_editable_control() {
	return (init_content_editable_control = __esmMin((() => {
		init_use_merge_refs();
		init_react();
		init_base_control();
		init_hooks();
		init_component$1();
		import_jsx_runtime$2 = require_jsx_runtime();
		STYLE_HASH_ATTRIBUTE = "data-wp-hash";
		if (typeof process === "undefined" || false) registerStyle("284f47c8a8", "._0f130cee1a924516__editable{background:var(--wp-components-color-background,var(--wpds-color-background-surface-neutral-strong,#fff));border:var(--wpds-border-width-xs,1px) solid var(--wpds-color-stroke-interactive-neutral,#8d8d8d);border-radius:var(--wpds-border-radius-sm,2px);color:var(--wp-components-color-foreground,var(--wpds-color-foreground-content-neutral,#1e1e1e));font-family:-apple-system,system-ui,Segoe UI,Roboto,Oxygen-Sans,Ubuntu,Cantarell,Helvetica Neue,sans-serif;font-size:16px;line-height:normal;padding:6px 8px;width:100%}@media (min-width:600px){._0f130cee1a924516__editable{font-size:13px;line-height:normal}}._0f130cee1a924516__editable:hover:not(:disabled,[aria-disabled=true]){border-color:var(--wpds-color-stroke-interactive-neutral-active,#6e6e6e)}._0f130cee1a924516__editable:focus{border-color:var(--wpds-color-stroke-interactive-neutral,#8d8d8d);box-shadow:none;outline:var(--wpds-border-width-focus,var(--wp-admin-border-width-focus,2px)) solid var(--focus-color,var(--wpds-color-stroke-focus,var(--wp-admin-theme-color,#3858e9)));outline-offset:var(--wpds-border-width-focus,var(--wp-admin-border-width-focus,2px))}._0f130cee1a924516__editable::placeholder{color:rgba(30,30,30,.62)}._0f130cee1a924516__editable[aria-placeholder]:empty:before{color:color-mix(in srgb,var(--wp-components-color-foreground,var(--wpds-color-foreground-content-neutral,#1e1e1e)),transparent 38%);content:attr(aria-placeholder)}._0f130cee1a924516__editable{min-height:40px;padding:12px}._0f130cee1a924516__editable[aria-disabled=true]{background:var(--wp-components-color-gray-100,var(--wpds-color-background-surface-neutral,#fcfcfc));border-color:var(--wp-components-color-gray-300,var(--wpds-color-stroke-surface-neutral,#dbdbdb));color:var(--wp-components-color-gray-700,var(--wpds-color-foreground-content-neutral-weak,#707070));cursor:default}");
		style_module_default = { "editable": "_0f130cee1a924516__editable" };
		ContentEditableControl = (0, import_react.forwardRef)(UnforwardedContentEditableControl);
		content_editable_control_default = ContentEditableControl;
	})))();
}
//#endregion
//#region ../packages/components/build-module/validated-form-controls/components/content-editable-control.mjs
var import_jsx_runtime$1, UnforwardedValidatedContentEditableControl, ValidatedContentEditableControl;
function init_content_editable_control$1() {
	return (init_content_editable_control$1 = __esmMin((() => {
		init_clsx();
		init_react();
		init_control_with_error();
		init_content_editable_control();
		import_jsx_runtime$1 = require_jsx_runtime();
		UnforwardedValidatedContentEditableControl = ({ required, customValidity, markWhenOptional, value, className, ...restProps }, forwardedRef) => {
			const validityTargetRef = (0, import_react.useRef)(null);
			return /* @__PURE__ */ (0, import_jsx_runtime$1.jsxs)("div", {
				className: "components-validated-control__wrapper-with-error-delegate",
				children: [/* @__PURE__ */ (0, import_jsx_runtime$1.jsx)(ControlWithError, {
					className: "components-validated-control",
					required,
					markWhenOptional,
					customValidity,
					getValidityTarget: () => validityTargetRef.current,
					children: /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)(content_editable_control_default, {
						ref: forwardedRef,
						className: clsx("components-validated-control__content-editable", className),
						"aria-invalid": customValidity?.type === "invalid" || void 0,
						...restProps
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)("input", {
					className: "components-validated-control__error-delegate",
					type: "text",
					ref: validityTargetRef,
					required,
					value: value?.trim() ?? "",
					tabIndex: -1,
					onChange: () => {},
					onFocus: (e) => {
						e.target.previousElementSibling?.querySelector("[role=\"textbox\"]")?.focus();
					}
				})]
			});
		};
		ValidatedContentEditableControl = (0, import_react.forwardRef)(UnforwardedValidatedContentEditableControl);
		ValidatedContentEditableControl.displayName = "ValidatedContentEditableControl";
	})))();
}
//#endregion
//#region ../packages/components/build-module/validated-form-controls/components/textarea-control.mjs
var import_jsx_runtime, UnforwardedValidatedTextareaControl, ValidatedTextareaControl;
function init_textarea_control$1() {
	return (init_textarea_control$1 = __esmMin((() => {
		init_react();
		init_use_merge_refs();
		init_build_module();
		init_control_with_error();
		init_textarea_control();
		import_jsx_runtime = require_jsx_runtime();
		UnforwardedValidatedTextareaControl = ({ required, customValidity, markWhenOptional, ...restProps }, forwardedRef) => {
			deprecated("wp.components.privateApis.ValidatedTextareaControl", {
				since: "7.2",
				alternative: "ValidatedTextareaControl from @wordpress/ui",
				hint: "This private API will be completely removed within a few Gutenberg plugin releases."
			});
			const validityTargetRef = (0, import_react.useRef)(null);
			const mergedRefs = useMergeRefs([forwardedRef, validityTargetRef]);
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ControlWithError, {
				className: "components-validated-control",
				required,
				markWhenOptional,
				customValidity,
				getValidityTarget: () => validityTargetRef.current,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(textarea_control_default, {
					ref: mergedRefs,
					...restProps
				})
			});
		};
		ValidatedTextareaControl = (0, import_react.forwardRef)(UnforwardedValidatedTextareaControl);
		ValidatedTextareaControl.displayName = "ValidatedTextareaControl";
	})))();
}
//#endregion
//#region ../packages/components/build-module/private-apis.mjs
var privateApis;
function init_private_apis() {
	return (init_private_apis = __esmMin((() => {
		init_use_gesture_react_esm();
		init_build_module();
		init_utils();
		init_menu();
		init_context_system_provider();
		init_tabs();
		init_lock_unlock();
		init_badge();
		init_input_control(), init_content_editable_control$1(), init_textarea_control$1();
		init_content_editable_control();
		privateApis = {};
		lock(privateApis, {
			ContentEditableControl: content_editable_control_default,
			__experimentalPopoverLegacyPositionToPlacement: positionToPlacement,
			ComponentsContext,
			Tabs,
			get Menu() {
				deprecated("`privateApis.Menu` from `@wordpress/components`", {
					since: "7.2",
					version: "7.3",
					alternative: "`DropdownMenu` from `@wordpress/components`",
					hint: "When building for the Gutenberg repo, use `Menu` from `@wordpress/ui` instead."
				});
				return Menu;
			},
			Badge: badge_default,
			useDrag,
			ValidatedInputControl,
			ValidatedContentEditableControl,
			ValidatedTextareaControl
		});
	})))();
}
//#endregion
export { init_lock_unlock as a, init_component as c, textarea_control_default as i, privateApis as n, unlock as o, init_textarea_control as r, component_default as s, init_private_apis as t };
