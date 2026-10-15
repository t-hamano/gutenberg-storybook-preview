import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C1RZKCc6.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { n as __, t as init_build_module } from "./build-module-v04us4E2.js";
import { o as clsx, s as init_clsx } from "./iframe-D4D-SsYo.js";
import { n as init_text, t as Text } from "./text-DdbcQl-E.js";
import { n as init_link, t as Link } from "./link-DMYAq1wz.js";
import { n as init_stack, t as Stack } from "./stack-DCjz3kq7.js";
import { i as init_slot_fill, r as createSlotFill } from "./slot-fill-DMMdJmZM.js";
//#region ../packages/admin-ui/build-module/navigable-region/index.mjs
var import_jsx_runtime$3, NavigableRegion, navigable_region_default;
function init_navigable_region() {
	return (init_navigable_region = __esmMin((() => {
		init_clsx();
		init_react();
		import_jsx_runtime$3 = require_jsx_runtime();
		NavigableRegion = (0, import_react.forwardRef)(({ children, className, ariaLabel, as: Tag = "div", ...props }, ref) => {
			return /* @__PURE__ */ (0, import_jsx_runtime$3.jsx)(Tag, {
				ref,
				className: clsx("admin-ui-navigable-region", className),
				"aria-label": ariaLabel,
				role: "region",
				tabIndex: "-1",
				...props,
				children
			});
		});
		NavigableRegion.displayName = "NavigableRegion";
		navigable_region_default = NavigableRegion;
	})))();
}
//#endregion
//#region ../packages/admin-ui/build-module/navigation/index.mjs
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
var import_jsx_runtime$2, STYLE_HASH_ATTRIBUTE$2, style_default$2, Navigation, navigation_default;
function init_navigation() {
	return (init_navigation = __esmMin((() => {
		init_build_module();
		init_link(), init_stack(), init_text();
		import_jsx_runtime$2 = require_jsx_runtime();
		STYLE_HASH_ATTRIBUTE$2 = "data-wp-hash";
		if (typeof process === "undefined" || false) registerStyle$2("72ef022400", ".bfb5a2dd8cceebd3__list{--focus-ring-size:calc(var(--wpds-border-width-focus, var(--wp-admin-border-width-focus, 2px))*2);list-style:none;margin:calc(var(--focus-ring-size)*-1);overflow-x:auto;padding:var(--focus-ring-size);scroll-padding:var(--focus-ring-size)}.a4759b4cb2c8bd92__li{flex-shrink:0}._07da506d3f2d9afe__item{align-items:center;color:var(--wpds-color-foreground-interactive-neutral-weak,#707070);display:flex;font-weight:var(--wpds-typography-font-weight-default,400);min-block-size:44px;min-inline-size:44px;text-decoration:none}._07da506d3f2d9afe__item:hover,._07da506d3f2d9afe__item[aria-current=page]{color:var(--wpds-color-foreground-interactive-neutral-weak-active,#1e1e1e)}._07da506d3f2d9afe__item[aria-current=page]{font-weight:var(--wpds-typography-font-weight-emphasis,600)}");
		style_default$2 = {
			"list": "bfb5a2dd8cceebd3__list",
			"li": "a4759b4cb2c8bd92__li",
			"item": "_07da506d3f2d9afe__item"
		};
		Navigation = ({ items, currentHref, ariaLabel = __("Sections"), linkComponent, className }) => {
			if (!items.length) return null;
			const LinkComponent = linkComponent ?? "a";
			{
				const invalidItem = items.find((item) => typeof item.href !== "string");
				if (invalidItem) throw new Error(`Navigation: item "${invalidItem.label}" is missing an \`href\` prop.`);
				const duplicate = items.find((item, index) => items.findIndex((other) => other.href === item.href) !== index);
				if (duplicate) throw new Error(`Navigation: duplicate \`href\` "${duplicate.href}". Each item must have a unique \`href\` so a single item receives \`aria-current="page"\`.`);
			}
			return /* @__PURE__ */ (0, import_jsx_runtime$2.jsx)("nav", {
				"aria-label": ariaLabel,
				className,
				children: /* @__PURE__ */ (0, import_jsx_runtime$2.jsx)(Stack, {
					render: /* @__PURE__ */ (0, import_jsx_runtime$2.jsx)("ul", { role: "list" }),
					direction: "row",
					align: "center",
					gap: "md",
					className: style_default$2.list,
					children: items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime$2.jsx)("li", {
						className: style_default$2.li,
						children: /* @__PURE__ */ (0, import_jsx_runtime$2.jsx)(Text, {
							variant: "body-md",
							className: style_default$2.item,
							render: /* @__PURE__ */ (0, import_jsx_runtime$2.jsx)(Link, {
								variant: "unstyled",
								"aria-current": item.href === currentHref ? "page" : void 0,
								render: /* @__PURE__ */ (0, import_jsx_runtime$2.jsx)(LinkComponent, { href: item.href })
							}),
							children: item.label
						})
					}, item.href))
				})
			});
		};
		navigation_default = Navigation;
	})))();
}
//#endregion
//#region ../packages/admin-ui/build-module/page/sidebar-toggle-slot.mjs
var SidebarToggleFill, SidebarToggleSlot;
function init_sidebar_toggle_slot() {
	return (init_sidebar_toggle_slot = __esmMin((() => {
		init_slot_fill();
		({Fill: SidebarToggleFill, Slot: SidebarToggleSlot} = createSlotFill("SidebarToggle"));
	})))();
}
//#endregion
//#region ../packages/admin-ui/build-module/page/header.mjs
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
function Header({ headingLevel = 1, breadcrumbs, badges, visual, title, subTitle, actions, navigation, components, showSidebarToggle = true }) {
	const HeadingTag = `h${headingLevel}`;
	const hasNavigation = !!navigation?.items?.length;
	return /* @__PURE__ */ (0, import_jsx_runtime$1.jsxs)(Stack, {
		direction: "column",
		className: clsx(style_default$1.header, hasNavigation && style_default$1["has-navigation"]),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime$1.jsxs)(Stack, {
				className: style_default$1["header-content"],
				direction: "row",
				gap: "sm",
				justify: "space-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime$1.jsxs)(Stack, {
					direction: "row",
					gap: "sm",
					align: "center",
					justify: "start",
					className: style_default$1["header-lockup"],
					children: [
						showSidebarToggle && /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)(SidebarToggleSlot, {
							bubblesVirtually: true,
							className: style_default$1["sidebar-toggle-slot"]
						}),
						visual && /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)("div", {
							className: style_default$1["header-visual"],
							"aria-hidden": "true",
							children: visual
						}),
						title && /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)(Text, {
							className: style_default$1["header-title"],
							render: /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)(HeadingTag, {}),
							variant: "heading-lg",
							children: title
						}),
						breadcrumbs,
						badges
					]
				}), actions && /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)(Stack, {
					align: "center",
					className: style_default$1["header-actions"],
					direction: "row",
					gap: "sm",
					children: actions
				})]
			}),
			subTitle && /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)(Text, {
				render: /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)("p", {}),
				variant: "body-md",
				className: style_default$1["header-subtitle"],
				children: subTitle
			}),
			hasNavigation && /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)(navigation_default, {
				...navigation,
				linkComponent: components?.link,
				className: style_default$1["header-navigation"]
			})
		]
	});
}
var import_jsx_runtime$1, STYLE_HASH_ATTRIBUTE$1, style_default$1;
function init_header() {
	return (init_header = __esmMin((() => {
		init_clsx();
		init_stack(), init_text();
		init_navigation();
		init_sidebar_toggle_slot();
		import_jsx_runtime$1 = require_jsx_runtime();
		STYLE_HASH_ATTRIBUTE$1 = "data-wp-hash";
		if (typeof process === "undefined" || false) registerStyle$1("1f3750277d", "._956b6df0898efed0__page{text-wrap:pretty;background-color:var(--wpds-color-background-surface-neutral,#fcfcfc);color:var(--wpds-color-foreground-content-neutral,#1e1e1e);display:flex;flex-flow:column;height:100%;position:relative;z-index:1}._0625b55e82a0d93d__header{background:var(--wpds-color-background-surface-neutral-strong,#fff);border-block-end:var(--wpds-border-width-xs,1px) solid var(--wpds-color-stroke-surface-neutral-weak,#f0f0f0);inset-block-start:0;padding:var(--wpds-dimension-padding-lg,16px) var(--wpds-dimension-padding-2xl,24px);position:sticky;z-index:1}.a43c44d5ae28b2e8__header-content{min-height:var(--wpds-dimension-size-md,32px)}.b7cb5b9daf3a3b25__header-actions{flex-shrink:0}._8bcd33103b451f30__header-lockup{min-width:0}._8113be94e7caf73c__header-title{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}._9a776c7f70996f61__header-visual{display:grid;flex-shrink:0;grid-template-columns:1fr;grid-template-rows:1fr;height:var(--wpds-dimension-size-sm,24px);width:var(--wpds-dimension-size-sm,24px);>*{grid-column:1/-1;grid-row:1/-1;max-height:100%;max-width:100%}}.d5e0920cd15d35bc__sidebar-toggle-slot:empty{display:none}._60fea2f6bf5319cd__header-subtitle{color:var(--wpds-color-foreground-content-neutral-weak,#707070);padding-block-end:var(--wpds-dimension-padding-xs,4px)}._0625b55e82a0d93d__header._4b0f17e503d11619__has-navigation,._0625b55e82a0d93d__header._4b0f17e503d11619__has-navigation ._60fea2f6bf5319cd__header-subtitle{padding-block-end:0}._673c99dcbfb58211__header-navigation{margin-block-start:var(--wpds-dimension-gap-md,12px)}.be5e57d029ec4036__content{display:flex;flex-direction:column;flex-grow:1;overflow:auto;&._128806d0b26e3a50__has-padding{padding:var(--wpds-dimension-padding-lg,16px) var(--wpds-dimension-padding-2xl,24px)}}");
		style_default$1 = {
			"page": "_956b6df0898efed0__page",
			"header": "_0625b55e82a0d93d__header",
			"header-content": "a43c44d5ae28b2e8__header-content",
			"header-actions": "b7cb5b9daf3a3b25__header-actions",
			"header-lockup": "_8bcd33103b451f30__header-lockup",
			"header-title": "_8113be94e7caf73c__header-title",
			"header-visual": "_9a776c7f70996f61__header-visual",
			"sidebar-toggle-slot": "d5e0920cd15d35bc__sidebar-toggle-slot",
			"header-subtitle": "_60fea2f6bf5319cd__header-subtitle",
			"has-navigation": "_4b0f17e503d11619__has-navigation",
			"header-navigation": "_673c99dcbfb58211__header-navigation",
			"content": "be5e57d029ec4036__content",
			"has-padding": "_128806d0b26e3a50__has-padding"
		};
	})))();
}
//#endregion
//#region ../packages/admin-ui/build-module/page/index.mjs
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
function Page({ headingLevel, breadcrumbs, badges, visual, title, subTitle, children, className, actions, navigation, components, ariaLabel, hasPadding = false, showSidebarToggle = true }) {
	const classes = clsx(style_default.page, className);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(navigable_region_default, {
		className: classes,
		ariaLabel: ariaLabel ?? (typeof title === "string" ? title : ""),
		children: [(title || breadcrumbs || badges || actions || visual || !!navigation?.items?.length) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {
			headingLevel,
			breadcrumbs,
			badges,
			visual,
			title,
			subTitle,
			actions,
			navigation,
			components,
			showSidebarToggle
		}), hasPadding ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: clsx(style_default.content, style_default["has-padding"]),
			children
		}) : children]
	});
}
var import_jsx_runtime, STYLE_HASH_ATTRIBUTE, style_default, page_default;
function init_page() {
	return (init_page = __esmMin((() => {
		init_clsx();
		init_header();
		init_navigable_region();
		init_sidebar_toggle_slot();
		import_jsx_runtime = require_jsx_runtime();
		STYLE_HASH_ATTRIBUTE = "data-wp-hash";
		if (typeof process === "undefined" || false) registerStyle("1f3750277d", "._956b6df0898efed0__page{text-wrap:pretty;background-color:var(--wpds-color-background-surface-neutral,#fcfcfc);color:var(--wpds-color-foreground-content-neutral,#1e1e1e);display:flex;flex-flow:column;height:100%;position:relative;z-index:1}._0625b55e82a0d93d__header{background:var(--wpds-color-background-surface-neutral-strong,#fff);border-block-end:var(--wpds-border-width-xs,1px) solid var(--wpds-color-stroke-surface-neutral-weak,#f0f0f0);inset-block-start:0;padding:var(--wpds-dimension-padding-lg,16px) var(--wpds-dimension-padding-2xl,24px);position:sticky;z-index:1}.a43c44d5ae28b2e8__header-content{min-height:var(--wpds-dimension-size-md,32px)}.b7cb5b9daf3a3b25__header-actions{flex-shrink:0}._8bcd33103b451f30__header-lockup{min-width:0}._8113be94e7caf73c__header-title{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}._9a776c7f70996f61__header-visual{display:grid;flex-shrink:0;grid-template-columns:1fr;grid-template-rows:1fr;height:var(--wpds-dimension-size-sm,24px);width:var(--wpds-dimension-size-sm,24px);>*{grid-column:1/-1;grid-row:1/-1;max-height:100%;max-width:100%}}.d5e0920cd15d35bc__sidebar-toggle-slot:empty{display:none}._60fea2f6bf5319cd__header-subtitle{color:var(--wpds-color-foreground-content-neutral-weak,#707070);padding-block-end:var(--wpds-dimension-padding-xs,4px)}._0625b55e82a0d93d__header._4b0f17e503d11619__has-navigation,._0625b55e82a0d93d__header._4b0f17e503d11619__has-navigation ._60fea2f6bf5319cd__header-subtitle{padding-block-end:0}._673c99dcbfb58211__header-navigation{margin-block-start:var(--wpds-dimension-gap-md,12px)}.be5e57d029ec4036__content{display:flex;flex-direction:column;flex-grow:1;overflow:auto;&._128806d0b26e3a50__has-padding{padding:var(--wpds-dimension-padding-lg,16px) var(--wpds-dimension-padding-2xl,24px)}}");
		style_default = {
			"page": "_956b6df0898efed0__page",
			"header": "_0625b55e82a0d93d__header",
			"header-content": "a43c44d5ae28b2e8__header-content",
			"header-actions": "b7cb5b9daf3a3b25__header-actions",
			"header-lockup": "_8bcd33103b451f30__header-lockup",
			"header-title": "_8113be94e7caf73c__header-title",
			"header-visual": "_9a776c7f70996f61__header-visual",
			"sidebar-toggle-slot": "d5e0920cd15d35bc__sidebar-toggle-slot",
			"header-subtitle": "_60fea2f6bf5319cd__header-subtitle",
			"has-navigation": "_4b0f17e503d11619__has-navigation",
			"header-navigation": "_673c99dcbfb58211__header-navigation",
			"content": "be5e57d029ec4036__content",
			"has-padding": "_128806d0b26e3a50__has-padding"
		};
		Page.SidebarToggleFill = SidebarToggleFill;
		page_default = Page;
	})))();
}
//#endregion
export { page_default as n, init_page as t };
