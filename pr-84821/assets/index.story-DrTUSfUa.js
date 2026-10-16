import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as __, t as init_build_module } from "./build-module-v04us4E2.js";
import { a as init_clsx, i as clsx } from "./iframe-Dbjzp1_m.js";
import { n as init_text, t as Text } from "./text-BWRv8yVx.js";
import { n as init_badge, t as Badge } from "./badge-BD5td2Rp.js";
import { n as init_button, t as Button } from "./button-6iH1so4R.js";
import { t as icon_default } from "./icon-DEDMwo2v.js";
import { n as wordpress_default } from "./wordpress-Dmkk4E44.js";
import { n as init_link, t as Link } from "./link-DsTY80oL.js";
import { n as init_stack, t as Stack } from "./stack-BHmRFw1F.js";
import { i as init_breadcrumbs, n as withRouter, r as Breadcrumbs, t as init_with_router } from "./with-router-C4h2Ddw3.js";
import { i as init_slot_fill, r as createSlotFill } from "./slot-fill-B3eLKm-e.js";
import { r as init_build_module$1 } from "./library.story-CFsmdbdz.js";
//#region ../packages/admin-ui/src/navigation/style.module.css
var list, li, item, style_module_default$1;
function init_style_module() {
	return (init_style_module = __esmMin((() => {
		list = "_list_1vd4n_1";
		li = "_li_1vd4n_1";
		item = "_item_1vd4n_23";
		style_module_default$1 = {
			list,
			li,
			item
		};
	})))();
}
//#endregion
//#region ../packages/admin-ui/src/navigation/index.tsx
var import_jsx_dev_runtime$4, _jsxFileName$4, Navigation;
function init_navigation() {
	return (init_navigation = __esmMin((() => {
		init_build_module();
		init_link(), init_stack(), init_text();
		init_style_module();
		import_jsx_dev_runtime$4 = require_jsx_dev_runtime();
		_jsxFileName$4 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/admin-ui/src/navigation/index.tsx";
		Navigation = ({ items, currentHref, ariaLabel = __("Sections"), linkComponent, className }) => {
			if (!items.length) return null;
			const LinkComponent = linkComponent ?? "a";
			{
				const invalidItem = items.find((item) => typeof item.href !== "string");
				if (invalidItem) throw new Error(`Navigation: item "${invalidItem.label}" is missing an \`href\` prop.`);
				const duplicate = items.find((item, index) => items.findIndex((other) => other.href === item.href) !== index);
				if (duplicate) throw new Error(`Navigation: duplicate \`href\` "${duplicate.href}". Each item must have a unique \`href\` so a single item receives \`aria-current="page"\`.`);
			}
			return /* @__PURE__ */ (0, import_jsx_dev_runtime$4.jsxDEV)("nav", {
				"aria-label": ariaLabel,
				className,
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime$4.jsxDEV)(Stack, {
					render: /* @__PURE__ */ (0, import_jsx_dev_runtime$4.jsxDEV)("ul", { role: "list" }, void 0, false, {
						fileName: _jsxFileName$4,
						lineNumber: 56,
						columnNumber: 14
					}, void 0),
					direction: "row",
					align: "center",
					gap: "md",
					className: style_module_default$1.list,
					children: items.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime$4.jsxDEV)("li", {
						className: style_module_default$1.li,
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime$4.jsxDEV)(Text, {
							variant: "body-md",
							className: style_module_default$1.item,
							render: /* @__PURE__ */ (0, import_jsx_dev_runtime$4.jsxDEV)(Link, {
								variant: "unstyled",
								"aria-current": item.href === currentHref ? "page" : void 0,
								render: /* @__PURE__ */ (0, import_jsx_dev_runtime$4.jsxDEV)(LinkComponent, { href: item.href }, void 0, false, {
									fileName: _jsxFileName$4,
									lineNumber: 76,
									columnNumber: 11
								}, void 0)
							}, void 0, false, {
								fileName: _jsxFileName$4,
								lineNumber: 68,
								columnNumber: 9
							}, void 0),
							children: item.label
						}, void 0, false, {
							fileName: _jsxFileName$4,
							lineNumber: 64,
							columnNumber: 7
						}, void 0)
					}, item.href, false, {
						fileName: _jsxFileName$4,
						lineNumber: 63,
						columnNumber: 6
					}, void 0))
				}, void 0, false, {
					fileName: _jsxFileName$4,
					lineNumber: 55,
					columnNumber: 4
				}, void 0)
			}, void 0, false, {
				fileName: _jsxFileName$4,
				lineNumber: 49,
				columnNumber: 3
			}, void 0);
		};
		try {
			Navigation.__docgenInfo = {
				"description": "Renders a horizontal list of links for navigating between the sections of a\nscreen. The item whose `href` matches `currentHref` is marked with\n`aria-current=\"page\"`.\n\nInternal to the package: configured through the `Page` `navigation` prop.",
				"displayName": "Navigation",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/admin-ui/src/navigation/index.tsx",
				"methods": [],
				"props": {
					"linkComponent": {
						"defaultValue": { "value": "'a'" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/admin-ui/src/navigation/types.ts",
							"name": "NavigationProps"
						}],
						"description": "Component rendered in place of the default `<a>` for each item.",
						"name": "linkComponent",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/admin-ui/src/navigation/types.ts",
							"name": "NavigationProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "ComponentType<NavigationLinkProps>" }
					},
					"className": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/admin-ui/src/navigation/types.ts",
							"name": "NavigationProps"
						}],
						"description": "Optional class name for the root element.",
						"name": "className",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/admin-ui/src/navigation/types.ts",
							"name": "NavigationProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"items": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/admin-ui/src/navigation/types.ts",
							"name": "NavigationConfig"
						}],
						"description": "The navigation items to display.",
						"name": "items",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/admin-ui/src/navigation/types.ts",
							"name": "NavigationConfig"
						},
						"required": true,
						"tags": {},
						"type": { "name": "readonly NavigationItem[]" }
					},
					"currentHref": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/admin-ui/src/navigation/types.ts",
							"name": "NavigationConfig"
						}],
						"description": "The `href` of the current item. The matching item is rendered with\n`aria-current=\"page\"` and a distinct visual treatment.",
						"name": "currentHref",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/admin-ui/src/navigation/types.ts",
							"name": "NavigationConfig"
						},
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"ariaLabel": {
						"defaultValue": { "value": "__( 'Sections' )" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/admin-ui/src/navigation/types.ts",
							"name": "NavigationConfig"
						}],
						"description": "Accessible label for the navigation landmark. Give each navigation on a\nscreen a unique label, and omit the word \"navigation\" since the landmark\nrole already conveys it.",
						"name": "ariaLabel",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/admin-ui/src/navigation/types.ts",
							"name": "NavigationConfig"
						},
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
//#region ../packages/admin-ui/src/page/sidebar-toggle-slot.tsx
var SidebarToggleFill, SidebarToggleSlot;
function init_sidebar_toggle_slot() {
	return (init_sidebar_toggle_slot = __esmMin((() => {
		init_slot_fill();
		({Fill: SidebarToggleFill, Slot: SidebarToggleSlot} = createSlotFill("SidebarToggle"));
		try {
			SidebarToggleSlot.__docgenInfo = {
				"description": "",
				"displayName": "SidebarToggleSlot",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/admin-ui/src/page/sidebar-toggle-slot.tsx",
				"methods": [],
				"props": {
					"style": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/slot-fill/types.d.ts",
							"name": "TypeLiteral"
						}, {
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/slot-fill/types.d.ts",
							"name": "TypeLiteral"
						}],
						"description": "Additional styles for the `Slot` component.\nSupported only when `bubblesVirtually` is `true`.",
						"name": "style",
						"required": false,
						"tags": {},
						"type": { "name": "CSSProperties" }
					},
					"className": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/slot-fill/types.d.ts",
							"name": "TypeLiteral"
						}, {
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/slot-fill/types.d.ts",
							"name": "TypeLiteral"
						}],
						"description": "Additional className for the `Slot` component.\nSupported only when `bubblesVirtually` is `true`.",
						"name": "className",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"children": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/slot-fill/types.d.ts",
							"name": "TypeLiteral"
						}, {
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/slot-fill/types.d.ts",
							"name": "TypeLiteral"
						}],
						"description": "A function that returns nodes to be rendered.\nSupported only when `bubblesVirtually` is `false`.",
						"name": "children",
						"required": false,
						"tags": {},
						"type": { "name": "((fills: ReactNode) => ReactNode)" }
					},
					"fillProps": {
						"defaultValue": { "value": "{}" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/slot-fill/types.d.ts",
							"name": "TypeLiteral"
						}, {
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/slot-fill/types.d.ts",
							"name": "TypeLiteral"
						}],
						"description": "props to pass from `Slot` to `Fill`.",
						"name": "fillProps",
						"required": false,
						"tags": {},
						"type": { "name": "FillProps" }
					},
					"bubblesVirtually": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/slot-fill/types.d.ts",
							"name": "TypeLiteral"
						}, {
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/slot-fill/types.d.ts",
							"name": "TypeLiteral"
						}],
						"description": "By default, events will bubble to their parents on the DOM hierarchy (native event bubbling).\nIf set to true, events will bubble to their virtual parent in the React elements hierarchy instead,\nalso accept an optional `className`, `id`, etc.  to add to the slot container.",
						"name": "bubblesVirtually",
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
//#region ../packages/admin-ui/src/page/style.module.css
var page, header, content, style_module_default;
function init_style_module$1() {
	return (init_style_module$1 = __esmMin((() => {
		page = "_page_4eyru_1";
		header = "_header_4eyru_12";
		content = "_content_4eyru_77";
		style_module_default = {
			page,
			header,
			"header-content": "_header-content_4eyru_21",
			"header-actions": "_header-actions_4eyru_25",
			"header-lockup": "_header-lockup_4eyru_31",
			"header-title": "_header-title_4eyru_36",
			"header-visual": "_header-visual_4eyru_43",
			"sidebar-toggle-slot": "_sidebar-toggle-slot_4eyru_59",
			"header-subtitle": "_header-subtitle_4eyru_63",
			"has-navigation": "_has-navigation_4eyru_68",
			"header-navigation": "_header-navigation_4eyru_73",
			content,
			"has-padding": "_has-padding_4eyru_83"
		};
	})))();
}
//#endregion
//#region ../packages/admin-ui/src/page/header.tsx
function Header({ headingLevel = 1, breadcrumbs, badges, visual, title, subTitle, actions, navigation, components, showSidebarToggle = true }) {
	const HeadingTag = `h${headingLevel}`;
	const hasNavigation = !!navigation?.items?.length;
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$3.jsxDEV)(Stack, {
		direction: "column",
		className: clsx(style_module_default.header, hasNavigation && style_module_default["has-navigation"]),
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime$3.jsxDEV)(Stack, {
				className: style_module_default["header-content"],
				direction: "row",
				gap: "sm",
				justify: "space-between",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime$3.jsxDEV)(Stack, {
					direction: "row",
					gap: "sm",
					align: "center",
					justify: "start",
					className: style_module_default["header-lockup"],
					children: [
						showSidebarToggle && /* @__PURE__ */ (0, import_jsx_dev_runtime$3.jsxDEV)(SidebarToggleSlot, {
							bubblesVirtually: true,
							className: style_module_default["sidebar-toggle-slot"]
						}, void 0, false, {
							fileName: _jsxFileName$3,
							lineNumber: 57,
							columnNumber: 7
						}, this),
						visual && /* @__PURE__ */ (0, import_jsx_dev_runtime$3.jsxDEV)("div", {
							className: style_module_default["header-visual"],
							"aria-hidden": "true",
							children: visual
						}, void 0, false, {
							fileName: _jsxFileName$3,
							lineNumber: 63,
							columnNumber: 7
						}, this),
						title && /* @__PURE__ */ (0, import_jsx_dev_runtime$3.jsxDEV)(Text, {
							className: style_module_default["header-title"],
							render: /* @__PURE__ */ (0, import_jsx_dev_runtime$3.jsxDEV)(HeadingTag, {}, void 0, false, {
								fileName: _jsxFileName$3,
								lineNumber: 73,
								columnNumber: 17
							}, this),
							variant: "heading-lg",
							children: title
						}, void 0, false, {
							fileName: _jsxFileName$3,
							lineNumber: 71,
							columnNumber: 7
						}, this),
						breadcrumbs,
						badges
					]
				}, void 0, true, {
					fileName: _jsxFileName$3,
					lineNumber: 49,
					columnNumber: 5
				}, this), actions && /* @__PURE__ */ (0, import_jsx_dev_runtime$3.jsxDEV)(Stack, {
					align: "center",
					className: style_module_default["header-actions"],
					direction: "row",
					gap: "sm",
					children: actions
				}, void 0, false, {
					fileName: _jsxFileName$3,
					lineNumber: 83,
					columnNumber: 6
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$3,
				lineNumber: 43,
				columnNumber: 4
			}, this),
			subTitle && /* @__PURE__ */ (0, import_jsx_dev_runtime$3.jsxDEV)(Text, {
				render: /* @__PURE__ */ (0, import_jsx_dev_runtime$3.jsxDEV)("p", {}, void 0, false, {
					fileName: _jsxFileName$3,
					lineNumber: 95,
					columnNumber: 15
				}, this),
				variant: "body-md",
				className: style_module_default["header-subtitle"],
				children: subTitle
			}, void 0, false, {
				fileName: _jsxFileName$3,
				lineNumber: 94,
				columnNumber: 5
			}, this),
			hasNavigation && /* @__PURE__ */ (0, import_jsx_dev_runtime$3.jsxDEV)(Navigation, {
				...navigation,
				linkComponent: components?.link,
				className: style_module_default["header-navigation"]
			}, void 0, false, {
				fileName: _jsxFileName$3,
				lineNumber: 104,
				columnNumber: 5
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName$3,
		lineNumber: 36,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime$3, _jsxFileName$3;
function init_header() {
	return (init_header = __esmMin((() => {
		init_clsx();
		init_stack(), init_text();
		init_navigation();
		init_sidebar_toggle_slot();
		init_style_module$1();
		import_jsx_dev_runtime$3 = require_jsx_dev_runtime();
		_jsxFileName$3 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/admin-ui/src/page/header.tsx";
		try {
			Header.__docgenInfo = {
				"description": "",
				"displayName": "header",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/admin-ui/src/page/header.tsx",
				"methods": [],
				"props": {
					"headingLevel": {
						"defaultValue": { "value": "1" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/admin-ui/src/page/header.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "headingLevel",
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "1 | 2 | 3 | 4 | 5 | 6",
							"value": [
								{ "value": "1" },
								{ "value": "2" },
								{ "value": "3" },
								{ "value": "4" },
								{ "value": "5" },
								{ "value": "6" }
							]
						}
					},
					"breadcrumbs": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/admin-ui/src/page/header.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "breadcrumbs",
						"required": false,
						"tags": {},
						"type": { "name": "ReactNode" }
					},
					"badges": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/admin-ui/src/page/header.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "badges",
						"required": false,
						"tags": {},
						"type": { "name": "ReactNode" }
					},
					"visual": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/admin-ui/src/page/header.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "visual",
						"required": false,
						"tags": {},
						"type": { "name": "ReactNode" }
					},
					"title": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/admin-ui/src/page/header.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "title",
						"required": false,
						"tags": {},
						"type": { "name": "ReactNode" }
					},
					"subTitle": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/admin-ui/src/page/header.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "subTitle",
						"required": true,
						"tags": {},
						"type": { "name": "ReactNode" }
					},
					"actions": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/admin-ui/src/page/header.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "actions",
						"required": false,
						"tags": {},
						"type": { "name": "ReactNode" }
					},
					"navigation": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/admin-ui/src/page/header.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "navigation",
						"required": false,
						"tags": {},
						"type": { "name": "NavigationConfig" }
					},
					"components": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/admin-ui/src/page/header.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "components",
						"required": false,
						"tags": {},
						"type": { "name": "PageComponents" }
					},
					"showSidebarToggle": {
						"defaultValue": { "value": "true" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/admin-ui/src/page/header.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "showSidebarToggle",
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
//#region ../packages/admin-ui/src/navigable-region/index.tsx
var import_jsx_dev_runtime$2, _jsxFileName$2, NavigableRegion;
function init_navigable_region() {
	return (init_navigable_region = __esmMin((() => {
		init_clsx();
		init_react();
		import_jsx_dev_runtime$2 = require_jsx_dev_runtime();
		_jsxFileName$2 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/admin-ui/src/navigable-region/index.tsx";
		NavigableRegion = (0, import_react.forwardRef)(({ children, className, ariaLabel, as: Tag = "div", ...props }, ref) => {
			return /* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)(Tag, {
				ref,
				className: clsx("admin-ui-navigable-region", className),
				"aria-label": ariaLabel,
				role: "region",
				tabIndex: "-1",
				...props,
				children
			}, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 19,
				columnNumber: 4
			}, void 0);
		});
		NavigableRegion.displayName = "NavigableRegion";
		try {
			NavigableRegion.__docgenInfo = {
				"description": "",
				"displayName": "NavigableRegion",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/admin-ui/src/navigable-region/index.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/admin-ui/src/page/index.tsx
function Page({ headingLevel, breadcrumbs, badges, visual, title, subTitle, children, className, actions, navigation, components, ariaLabel, hasPadding = false, showSidebarToggle = true }) {
	const classes = clsx(style_module_default.page, className);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(NavigableRegion, {
		className: classes,
		ariaLabel: ariaLabel ?? (typeof title === "string" ? title : ""),
		children: [(title || breadcrumbs || badges || actions || visual || !!navigation?.items?.length) && /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(Header, {
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
		}, void 0, false, {
			fileName: _jsxFileName$1,
			lineNumber: 70,
			columnNumber: 5
		}, this), hasPadding ? /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)("div", {
			className: clsx(style_module_default.content, style_module_default["has-padding"]),
			children
		}, void 0, false, {
			fileName: _jsxFileName$1,
			lineNumber: 84,
			columnNumber: 5
		}, this) : children]
	}, void 0, true, {
		fileName: _jsxFileName$1,
		lineNumber: 63,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime$1, _jsxFileName$1;
function init_page() {
	return (init_page = __esmMin((() => {
		init_clsx();
		init_header();
		init_navigable_region();
		init_sidebar_toggle_slot();
		init_style_module$1();
		import_jsx_dev_runtime$1 = require_jsx_dev_runtime();
		_jsxFileName$1 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/admin-ui/src/page/index.tsx";
		Page.SidebarToggleFill = SidebarToggleFill;
		try {
			Page.__docgenInfo = {
				"description": "",
				"displayName": "Page",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/admin-ui/src/page/index.tsx",
				"methods": [],
				"props": {
					"headingLevel": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/admin-ui/src/page/index.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "headingLevel",
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "1 | 2 | 3 | 4 | 5 | 6",
							"value": [
								{ "value": "1" },
								{ "value": "2" },
								{ "value": "3" },
								{ "value": "4" },
								{ "value": "5" },
								{ "value": "6" }
							]
						}
					},
					"breadcrumbs": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/admin-ui/src/page/index.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "breadcrumbs",
						"required": false,
						"tags": {},
						"type": { "name": "ReactNode" }
					},
					"badges": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/admin-ui/src/page/index.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "badges",
						"required": false,
						"tags": {},
						"type": { "name": "ReactNode" }
					},
					"visual": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/admin-ui/src/page/index.tsx",
							"name": "TypeLiteral"
						}],
						"description": "Optional visual mark (icon, image, etc.) shown before the page title or breadcrumbs.\n\nThe visual is rendered outside the page heading element and is treated as purely\ndecorative in the accessibility tree (the wrapper uses `aria-hidden`). Do not pass\ninteractive content (links, buttons, tooltips) or non-redundant text here.\n\nWhen passing an `<img>`, use `alt=\"\"` if the image does not add meaning beyond what is\nalready available in the visible title, breadcrumbs, or surrounding copy. Meaningful\nimages should not rely on this slot for their accessible name.",
						"name": "visual",
						"required": false,
						"tags": {},
						"type": { "name": "ReactNode" }
					},
					"title": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/admin-ui/src/page/index.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "title",
						"required": false,
						"tags": {},
						"type": { "name": "ReactNode" }
					},
					"subTitle": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/admin-ui/src/page/index.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "subTitle",
						"required": false,
						"tags": {},
						"type": { "name": "ReactNode" }
					},
					"className": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/admin-ui/src/page/index.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "className",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"actions": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/admin-ui/src/page/index.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "actions",
						"required": false,
						"tags": {},
						"type": { "name": "ReactNode" }
					},
					"navigation": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/admin-ui/src/page/index.tsx",
							"name": "TypeLiteral"
						}],
						"description": "Section navigation shown in the page header: the list of links and the\n`href` of the current one.",
						"name": "navigation",
						"required": false,
						"tags": {},
						"type": { "name": "NavigationConfig" }
					},
					"components": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/admin-ui/src/page/index.tsx",
							"name": "TypeLiteral"
						}],
						"description": "Overrides for default elements rendered by the page's sub-components.",
						"name": "components",
						"required": false,
						"tags": {},
						"type": { "name": "PageComponents" }
					},
					"ariaLabel": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/admin-ui/src/page/index.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "ariaLabel",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"hasPadding": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/admin-ui/src/page/index.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "hasPadding",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"showSidebarToggle": {
						"defaultValue": { "value": "true" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/admin-ui/src/page/index.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "showSidebarToggle",
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
//#region ../packages/admin-ui/src/page/stories/index.story.tsx
var import_jsx_dev_runtime, _jsxFileName, meta, Default, WithSubtitle, WithBreadcrumbs, WithVisual, WithVisualAndBreadcrumbs, WithImageVisual, WithBreadcrumbsAndSubtitle, WithoutHeader, WithTitleAndBadges, WithBreadcrumbsAndBadges, WithActions, WithInteractiveNavigation, WithNavigation, WithNavigationAndActions, FullHeader;
function init_index_story() {
	return (init_index_story = __esmMin((() => {
		init_react();
		init_badge(), init_button(), init_text();
		init_build_module$1();
		init_page();
		init_breadcrumbs();
		init_with_router();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/admin-ui/src/page/stories/index.story.tsx";
		meta = {
			component: Page,
			id: "admin-ui-page",
			title: "Design System/Admin UI/Page",
			parameters: { layout: "fullscreen" },
			decorators: [(Story) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				style: { minHeight: "400px" },
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Story, {}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 21,
					columnNumber: 5
				}, void 0)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 20,
				columnNumber: 4
			}, void 0)]
		};
		Default = { args: {
			title: "Page title",
			showSidebarToggle: false,
			hasPadding: true,
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { children: "Page content here" }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 36,
				columnNumber: 13
			}, void 0)
		} };
		WithSubtitle = { args: {
			title: "Page title",
			subTitle: "All of the subtitle text you need goes here.",
			showSidebarToggle: false,
			hasPadding: true,
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { children: "Page content here" }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 46,
				columnNumber: 13
			}, void 0)
		} };
		WithBreadcrumbs = {
			decorators: [withRouter],
			args: {
				showSidebarToggle: false,
				breadcrumbs: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Breadcrumbs, { items: [{
					label: "Root breadcrumb",
					to: "/connectors"
				}, { label: "Level 1 breadcrumb" }] }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 55,
					columnNumber: 4
				}, void 0),
				hasPadding: true,
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { children: "Page content here" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 63,
					columnNumber: 13
				}, void 0)
			}
		};
		WithVisual = { args: {
			title: "Page title",
			visual: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(icon_default, {
				icon: wordpress_default,
				size: 24
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 70,
				columnNumber: 11
			}, void 0),
			showSidebarToggle: false,
			hasPadding: true,
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { children: "Page content here" }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 73,
				columnNumber: 13
			}, void 0)
		} };
		WithVisualAndBreadcrumbs = {
			decorators: [withRouter],
			args: {
				visual: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(icon_default, {
					icon: wordpress_default,
					size: 24
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 80,
					columnNumber: 11
				}, void 0),
				showSidebarToggle: false,
				breadcrumbs: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Breadcrumbs, { items: [{
					label: "Root breadcrumb",
					to: "/connectors"
				}, { label: "Level 1 breadcrumb" }] }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 83,
					columnNumber: 4
				}, void 0),
				hasPadding: true,
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { children: "Page content here" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 91,
					columnNumber: 13
				}, void 0)
			}
		};
		WithImageVisual = { args: {
			title: "Page title",
			visual: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
				src: "https://secure.gravatar.com/avatar/c0ccdd53794779bcc07fcae7b79c4d80?s=48&r=g&d=mm",
				alt: ""
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 105,
				columnNumber: 4
			}, void 0),
			showSidebarToggle: false,
			hasPadding: true,
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { children: "Page content here" }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 112,
				columnNumber: 13
			}, void 0)
		} };
		WithBreadcrumbsAndSubtitle = {
			decorators: [withRouter],
			args: {
				showSidebarToggle: false,
				subTitle: "All of the subtitle text you need goes here.",
				breadcrumbs: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Breadcrumbs, { items: [{
					label: "Root breadcrumb",
					to: "/connectors"
				}, { label: "Level 1 breadcrumb" }] }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 122,
					columnNumber: 4
				}, void 0),
				hasPadding: true,
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { children: "Page content here" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 130,
					columnNumber: 13
				}, void 0)
			}
		};
		WithoutHeader = { args: {
			showSidebarToggle: false,
			hasPadding: true,
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { children: "Page content here" }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 138,
				columnNumber: 13
			}, void 0)
		} };
		WithTitleAndBadges = { args: {
			title: "Page title",
			badges: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Badge, {
				intent: "informational",
				children: "Status"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 145,
				columnNumber: 11
			}, void 0),
			showSidebarToggle: false,
			hasPadding: true,
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { children: "Page content here" }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 148,
				columnNumber: 13
			}, void 0)
		} };
		WithBreadcrumbsAndBadges = {
			decorators: [withRouter],
			args: {
				showSidebarToggle: false,
				breadcrumbs: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Breadcrumbs, { items: [{
					label: "Root breadcrumb",
					to: "/connectors"
				}, { label: "Level 1 breadcrumb" }] }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 157,
					columnNumber: 4
				}, void 0),
				badges: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Badge, {
					intent: "none",
					children: "Published"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 164,
					columnNumber: 11
				}, void 0),
				hasPadding: true,
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { children: "Page content here" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 166,
					columnNumber: 13
				}, void 0)
			}
		};
		WithActions = { args: {
			title: "Page title",
			actions: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
				size: "compact",
				variant: "outline",
				children: "Cancel"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 175,
				columnNumber: 5
			}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
				size: "compact",
				variant: "solid",
				children: "Save"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 178,
				columnNumber: 5
			}, void 0)] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 174,
				columnNumber: 4
			}, void 0),
			showSidebarToggle: false,
			hasPadding: true,
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { children: "Page content here" }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 185,
				columnNumber: 13
			}, void 0)
		} };
		WithInteractiveNavigation = {
			render: function Render(args) {
				const [currentHref, setCurrentHref] = (0, import_react.useState)("/overview");
				const link = (0, import_react.useCallback)(({ href, children, ...props }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
					...props,
					href,
					onClick: (event) => {
						event.preventDefault();
						setCurrentHref(href);
					},
					children
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 199,
					columnNumber: 5
				}, this), []);
				return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Page, {
					...args,
					components: { link },
					navigation: {
						items: [
							{
								label: "Overview",
								href: "/overview"
							},
							{
								label: "Products",
								href: "/products"
							},
							{
								label: "Orders",
								href: "/orders"
							},
							{
								label: "Customers",
								href: "/customers"
							}
						],
						currentHref
					}
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 214,
					columnNumber: 4
				}, this);
			},
			args: {
				title: "Analytics",
				showSidebarToggle: false,
				hasPadding: true,
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { children: "Page content here" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 233,
					columnNumber: 13
				}, void 0)
			}
		};
		WithNavigation = { ...WithInteractiveNavigation };
		WithNavigationAndActions = {
			...WithInteractiveNavigation,
			args: {
				title: "Analytics",
				subTitle: "Review key metrics to understand performance.",
				actions: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
					size: "compact",
					variant: "outline",
					children: "Export"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 248,
					columnNumber: 5
				}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
					size: "compact",
					variant: "solid",
					children: "Add widget"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 251,
					columnNumber: 5
				}, void 0)] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 247,
					columnNumber: 4
				}, void 0),
				showSidebarToggle: false,
				hasPadding: true,
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { children: "Page content here" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 258,
					columnNumber: 13
				}, void 0)
			}
		};
		FullHeader = {
			decorators: [withRouter],
			args: {
				visual: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(icon_default, {
					icon: wordpress_default,
					size: 24
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 265,
					columnNumber: 11
				}, void 0),
				subTitle: "All of the subtitle text you need goes here.",
				breadcrumbs: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Breadcrumbs, { items: [{
					label: "Root breadcrumb",
					to: "/connectors"
				}, { label: "Level 1 breadcrumb" }] }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 268,
					columnNumber: 4
				}, void 0),
				badges: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Badge, {
					intent: "informational",
					children: "Status"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 275,
					columnNumber: 11
				}, void 0),
				navigation: {
					items: [
						{
							label: "Overview",
							href: "/overview"
						},
						{
							label: "Products",
							href: "/products"
						},
						{
							label: "Orders",
							href: "/orders"
						},
						{
							label: "Customers",
							href: "/customers"
						}
					],
					currentHref: "/overview"
				},
				actions: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
					size: "compact",
					variant: "outline",
					children: "Cancel"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 287,
					columnNumber: 5
				}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
					size: "compact",
					variant: "solid",
					children: "Save"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 290,
					columnNumber: 5
				}, void 0)] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 286,
					columnNumber: 4
				}, void 0),
				showSidebarToggle: false,
				hasPadding: true,
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { children: "Page content here" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 297,
					columnNumber: 13
				}, void 0)
			}
		};
		try {
			WithImageVisual.__docgenInfo = {
				"description": "Demonstrates that large images are constrained by the header visual styles.\n\nThe `img` uses an empty `alt` because the visual region is hidden from assistive\ntechnologies and the page title carries the accessible name.",
				"displayName": "WithImageVisual",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/admin-ui/src/page/stories/index.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			WithInteractiveNavigation.__docgenInfo = {
				"description": "Demonstrates `components.link`: a custom link that intercepts navigation and\ndrives `currentHref` from local state, keeping the links usable without a\nreal router.",
				"displayName": "WithInteractiveNavigation",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/admin-ui/src/page/stories/index.story.tsx",
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
					originalSource: "{\n  args: {\n    title: 'Page title',\n    showSidebarToggle: false,\n    hasPadding: true,\n    children: <Text>Page content here</Text>\n  }\n}",
					...Default.parameters?.docs?.source
				}
			}
		};
		WithSubtitle.parameters = {
			...WithSubtitle.parameters,
			docs: {
				...WithSubtitle.parameters?.docs,
				source: {
					originalSource: "{\n  args: {\n    title: 'Page title',\n    subTitle: 'All of the subtitle text you need goes here.',\n    showSidebarToggle: false,\n    hasPadding: true,\n    children: <Text>Page content here</Text>\n  }\n}",
					...WithSubtitle.parameters?.docs?.source
				}
			}
		};
		WithBreadcrumbs.parameters = {
			...WithBreadcrumbs.parameters,
			docs: {
				...WithBreadcrumbs.parameters?.docs,
				source: {
					originalSource: "{\n  decorators: [withRouter],\n  args: {\n    showSidebarToggle: false,\n    breadcrumbs: <Breadcrumbs items={[{\n      label: 'Root breadcrumb',\n      to: '/connectors'\n    }, {\n      label: 'Level 1 breadcrumb'\n    }]} />,\n    hasPadding: true,\n    children: <Text>Page content here</Text>\n  }\n}",
					...WithBreadcrumbs.parameters?.docs?.source
				}
			}
		};
		WithVisual.parameters = {
			...WithVisual.parameters,
			docs: {
				...WithVisual.parameters?.docs,
				source: {
					originalSource: "{\n  args: {\n    title: 'Page title',\n    visual: <Icon icon={wordpress} size={24} />,\n    showSidebarToggle: false,\n    hasPadding: true,\n    children: <Text>Page content here</Text>\n  }\n}",
					...WithVisual.parameters?.docs?.source
				}
			}
		};
		WithVisualAndBreadcrumbs.parameters = {
			...WithVisualAndBreadcrumbs.parameters,
			docs: {
				...WithVisualAndBreadcrumbs.parameters?.docs,
				source: {
					originalSource: "{\n  decorators: [withRouter],\n  args: {\n    visual: <Icon icon={wordpress} size={24} />,\n    showSidebarToggle: false,\n    breadcrumbs: <Breadcrumbs items={[{\n      label: 'Root breadcrumb',\n      to: '/connectors'\n    }, {\n      label: 'Level 1 breadcrumb'\n    }]} />,\n    hasPadding: true,\n    children: <Text>Page content here</Text>\n  }\n}",
					...WithVisualAndBreadcrumbs.parameters?.docs?.source
				}
			}
		};
		WithImageVisual.parameters = {
			...WithImageVisual.parameters,
			docs: {
				...WithImageVisual.parameters?.docs,
				source: {
					originalSource: "{\n  args: {\n    title: 'Page title',\n    visual: <img src=\"https://secure.gravatar.com/avatar/c0ccdd53794779bcc07fcae7b79c4d80?s=48&r=g&d=mm\" alt=\"\" />,\n    showSidebarToggle: false,\n    hasPadding: true,\n    children: <Text>Page content here</Text>\n  }\n}",
					...WithImageVisual.parameters?.docs?.source
				},
				description: {
					story: "Demonstrates that large images are constrained by the header visual styles.\n\nThe `img` uses an empty `alt` because the visual region is hidden from assistive\ntechnologies and the page title carries the accessible name.",
					...WithImageVisual.parameters?.docs?.description
				}
			}
		};
		WithBreadcrumbsAndSubtitle.parameters = {
			...WithBreadcrumbsAndSubtitle.parameters,
			docs: {
				...WithBreadcrumbsAndSubtitle.parameters?.docs,
				source: {
					originalSource: "{\n  decorators: [withRouter],\n  args: {\n    showSidebarToggle: false,\n    subTitle: 'All of the subtitle text you need goes here.',\n    breadcrumbs: <Breadcrumbs items={[{\n      label: 'Root breadcrumb',\n      to: '/connectors'\n    }, {\n      label: 'Level 1 breadcrumb'\n    }]} />,\n    hasPadding: true,\n    children: <Text>Page content here</Text>\n  }\n}",
					...WithBreadcrumbsAndSubtitle.parameters?.docs?.source
				}
			}
		};
		WithoutHeader.parameters = {
			...WithoutHeader.parameters,
			docs: {
				...WithoutHeader.parameters?.docs,
				source: {
					originalSource: "{\n  args: {\n    showSidebarToggle: false,\n    hasPadding: true,\n    children: <Text>Page content here</Text>\n  }\n}",
					...WithoutHeader.parameters?.docs?.source
				}
			}
		};
		WithTitleAndBadges.parameters = {
			...WithTitleAndBadges.parameters,
			docs: {
				...WithTitleAndBadges.parameters?.docs,
				source: {
					originalSource: "{\n  args: {\n    title: 'Page title',\n    badges: <Badge intent=\"informational\">Status</Badge>,\n    showSidebarToggle: false,\n    hasPadding: true,\n    children: <Text>Page content here</Text>\n  }\n}",
					...WithTitleAndBadges.parameters?.docs?.source
				}
			}
		};
		WithBreadcrumbsAndBadges.parameters = {
			...WithBreadcrumbsAndBadges.parameters,
			docs: {
				...WithBreadcrumbsAndBadges.parameters?.docs,
				source: {
					originalSource: "{\n  decorators: [withRouter],\n  args: {\n    showSidebarToggle: false,\n    breadcrumbs: <Breadcrumbs items={[{\n      label: 'Root breadcrumb',\n      to: '/connectors'\n    }, {\n      label: 'Level 1 breadcrumb'\n    }]} />,\n    badges: <Badge intent=\"none\">Published</Badge>,\n    hasPadding: true,\n    children: <Text>Page content here</Text>\n  }\n}",
					...WithBreadcrumbsAndBadges.parameters?.docs?.source
				}
			}
		};
		WithActions.parameters = {
			...WithActions.parameters,
			docs: {
				...WithActions.parameters?.docs,
				source: {
					originalSource: "{\n  args: {\n    title: 'Page title',\n    actions: <>\n                <Button size=\"compact\" variant=\"outline\">\n                    Cancel\n                </Button>\n                <Button size=\"compact\" variant=\"solid\">\n                    Save\n                </Button>\n            </>,\n    showSidebarToggle: false,\n    hasPadding: true,\n    children: <Text>Page content here</Text>\n  }\n}",
					...WithActions.parameters?.docs?.source
				}
			}
		};
		WithInteractiveNavigation.parameters = {
			...WithInteractiveNavigation.parameters,
			docs: {
				...WithInteractiveNavigation.parameters?.docs,
				source: {
					originalSource: "{\n  render: function Render(args) {\n    const [currentHref, setCurrentHref] = useState('/overview');\n    const link = useCallback(({\n      href,\n      children,\n      ...props\n    }: NavigationLinkProps) => <a {...props} href={href} onClick={event => {\n      event.preventDefault();\n      setCurrentHref(href);\n    }}>\n                    {children}\n                </a>, []);\n    return <Page {...args} components={{\n      link\n    }} navigation={{\n      items: [{\n        label: 'Overview',\n        href: '/overview'\n      }, {\n        label: 'Products',\n        href: '/products'\n      }, {\n        label: 'Orders',\n        href: '/orders'\n      }, {\n        label: 'Customers',\n        href: '/customers'\n      }],\n      currentHref\n    }} />;\n  },\n  args: {\n    title: 'Analytics',\n    showSidebarToggle: false,\n    hasPadding: true,\n    children: <Text>Page content here</Text>\n  }\n}",
					...WithInteractiveNavigation.parameters?.docs?.source
				},
				description: {
					story: "Demonstrates `components.link`: a custom link that intercepts navigation and\ndrives `currentHref` from local state, keeping the links usable without a\nreal router.",
					...WithInteractiveNavigation.parameters?.docs?.description
				}
			}
		};
		WithNavigation.parameters = {
			...WithNavigation.parameters,
			docs: {
				...WithNavigation.parameters?.docs,
				source: {
					originalSource: "{\n  ...WithInteractiveNavigation\n}",
					...WithNavigation.parameters?.docs?.source
				}
			}
		};
		WithNavigationAndActions.parameters = {
			...WithNavigationAndActions.parameters,
			docs: {
				...WithNavigationAndActions.parameters?.docs,
				source: {
					originalSource: "{\n  ...WithInteractiveNavigation,\n  args: {\n    title: 'Analytics',\n    subTitle: 'Review key metrics to understand performance.',\n    actions: <>\n                <Button size=\"compact\" variant=\"outline\">\n                    Export\n                </Button>\n                <Button size=\"compact\" variant=\"solid\">\n                    Add widget\n                </Button>\n            </>,\n    showSidebarToggle: false,\n    hasPadding: true,\n    children: <Text>Page content here</Text>\n  }\n}",
					...WithNavigationAndActions.parameters?.docs?.source
				}
			}
		};
		FullHeader.parameters = {
			...FullHeader.parameters,
			docs: {
				...FullHeader.parameters?.docs,
				source: {
					originalSource: "{\n  decorators: [withRouter],\n  args: {\n    visual: <Icon icon={wordpress} size={24} />,\n    subTitle: 'All of the subtitle text you need goes here.',\n    breadcrumbs: <Breadcrumbs items={[{\n      label: 'Root breadcrumb',\n      to: '/connectors'\n    }, {\n      label: 'Level 1 breadcrumb'\n    }]} />,\n    badges: <Badge intent=\"informational\">Status</Badge>,\n    navigation: {\n      items: [{\n        label: 'Overview',\n        href: '/overview'\n      }, {\n        label: 'Products',\n        href: '/products'\n      }, {\n        label: 'Orders',\n        href: '/orders'\n      }, {\n        label: 'Customers',\n        href: '/customers'\n      }],\n      currentHref: '/overview'\n    },\n    actions: <>\n                <Button size=\"compact\" variant=\"outline\">\n                    Cancel\n                </Button>\n                <Button size=\"compact\" variant=\"solid\">\n                    Save\n                </Button>\n            </>,\n    showSidebarToggle: false,\n    hasPadding: true,\n    children: <Text>Page content here</Text>\n  }\n}",
					...FullHeader.parameters?.docs?.source
				}
			}
		};
	})))();
}
//#endregion
init_index_story();
export { Default, FullHeader, WithActions, WithBreadcrumbs, WithBreadcrumbsAndBadges, WithBreadcrumbsAndSubtitle, WithImageVisual, WithInteractiveNavigation, WithNavigation, WithNavigationAndActions, WithSubtitle, WithTitleAndBadges, WithVisual, WithVisualAndBreadcrumbs, WithoutHeader, meta as default };
