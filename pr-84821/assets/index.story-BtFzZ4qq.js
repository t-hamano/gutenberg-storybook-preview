import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as use_isomorphic_layout_effect_default, t as init_use_isomorphic_layout_effect } from "./use-isomorphic-layout-effect-XEh9CxbX.js";
import { a as init_clsx, i as clsx } from "./iframe-Dbjzp1_m.js";
import { i as init_mergeProps, o as mergeProps } from "./useRenderElement-Dkv6YH0v.js";
import { n as useRender, t as init_useRender } from "./useRender-JXgJ-9ZS.js";
import { t as chevron_down_default } from "./chevron-down-tfDAaIiw.js";
import { n as init_global_css_defense_module, t as global_css_defense_module_default } from "./global-css-defense.module-BTDDc07p.js";
import { n as init_icon, t as Icon } from "./icon-C8ogYiCq.js";
import { n as init_stack, t as Stack } from "./stack-s_FjhA7z.js";
import { n as init_text, t as Text } from "./text-B-YUcwFZ.js";
import { a as Content$1, c as init_header$1, i as init_full_bleed, l as Root$1, n as init_title, o as init_content$1, r as FullBleed, s as Header$1, t as Title, u as init_root$1 } from "./title-FBYcYkAV.js";
import { a as Panel, i as init_root$2, n as init_trigger, o as init_panel, r as Root$2, t as Trigger } from "./trigger-D05VttZN.js";
import { r as init_build_module } from "./library.story-CFsmdbdz.js";
//#region ../packages/ui/src/collapsible-card/root.tsx
var import_jsx_dev_runtime$4, _jsxFileName$4, Root;
function init_root() {
	return (init_root = __esmMin((() => {
		init_react();
		init_root$1();
		init_root$2();
		import_jsx_dev_runtime$4 = require_jsx_dev_runtime();
		_jsxFileName$4 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/collapsible-card/root.tsx";
		Root = (0, import_react.forwardRef)(function CollapsibleCardRoot({ render, ...restProps }, ref) {
			return /* @__PURE__ */ (0, import_jsx_dev_runtime$4.jsxDEV)(Root$2, {
				ref,
				render: /* @__PURE__ */ (0, import_jsx_dev_runtime$4.jsxDEV)(Root$1, { render }, void 0, false, {
					fileName: _jsxFileName$4,
					lineNumber: 32,
					columnNumber: 14
				}, this),
				...restProps
			}, void 0, false, {
				fileName: _jsxFileName$4,
				lineNumber: 30,
				columnNumber: 4
			}, this);
		});
		try {
			Root.__docgenInfo = {
				"description": "A card that can be expanded and collapsed. When collapsed, only the\nheader is visible.\n\n```jsx\nimport { CollapsibleCard, Card } from '@wordpress/ui';\n\nfunction MyComponent() {\n	return (\n		<CollapsibleCard.Root defaultOpen>\n			<CollapsibleCard.Header>\n				<Card.Title>Heading</Card.Title>\n			</CollapsibleCard.Header>\n			<CollapsibleCard.Content>\n				<p>Collapsible content here.</p>\n			</CollapsibleCard.Content>\n		</CollapsibleCard.Root>\n	);\n}\n```",
				"displayName": "Root",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/collapsible-card/root.tsx",
				"methods": [],
				"props": {
					"children": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/collapsible-card/types.ts",
							"name": "RootProps"
						}],
						"description": "The content to be rendered inside the collapsible card.\nShould include `CollapsibleCard.Header` and `CollapsibleCard.Content`.",
						"name": "children",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/ui/src/collapsible-card/types.ts",
							"name": "RootProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "ReactNode" }
					},
					"open": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/collapsible-card/types.ts",
							"name": "RootProps"
						}],
						"description": "Whether the collapsible panel is currently open (controlled).\n\nTo render an uncontrolled collapsible card, use `defaultOpen` instead.",
						"name": "open",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/ui/src/collapsible-card/types.ts",
							"name": "RootProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"defaultOpen": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/collapsible-card/types.ts",
							"name": "RootProps"
						}],
						"description": "Whether the collapsible panel is initially open (uncontrolled).",
						"name": "defaultOpen",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/ui/src/collapsible-card/types.ts",
							"name": "RootProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"onOpenChange": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/collapsible-card/types.ts",
							"name": "RootProps"
						}],
						"description": "Event handler called when the panel is opened or closed.",
						"name": "onOpenChange",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/ui/src/collapsible-card/types.ts",
							"name": "RootProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "((open: boolean) => void)" }
					},
					"disabled": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/collapsible-card/types.ts",
							"name": "RootProps"
						}],
						"description": "Whether the component should ignore user interaction.",
						"name": "disabled",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/ui/src/collapsible-card/types.ts",
							"name": "RootProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
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
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/ui/src/collapsible-card/style.module.scss
var header, content, style_module_default;
function init_style_module() {
	return (init_style_module = __esmMin((() => {
		header = "_header_14h67_118";
		content = "_content_14h67_162";
		style_module_default = {
			"heading-wrapper": "_heading-wrapper_14h67_109",
			"header-content": "_header-content_14h67_118",
			"header-description": "_header-description_14h67_122",
			"header-trigger-positioner": "_header-trigger-positioner_14h67_125",
			"header-trigger-wrapper": "_header-trigger-wrapper_14h67_134",
			header,
			"header-trigger": "_header-trigger_14h67_125",
			content,
			"overflow-visible": "_overflow-visible_14h67_171",
			"content-inner": "_content-inner_14h67_187"
		};
	})))();
}
//#endregion
//#region ../packages/ui/src/collapsible-card/context.ts
var HeaderDescriptionIdContext;
function init_context() {
	return (init_context = __esmMin((() => {
		init_react();
		HeaderDescriptionIdContext = (0, import_react.createContext)(null);
	})))();
}
//#endregion
//#region ../packages/ui/src/collapsible-card/header.tsx
var import_jsx_dev_runtime$3, _jsxFileName$3, Header;
function init_header() {
	return (init_header = __esmMin((() => {
		init_mergeProps(), init_useRender();
		init_clsx();
		init_use_isomorphic_layout_effect();
		init_react();
		init_build_module();
		init_header$1();
		init_trigger();
		init_icon();
		init_style_module();
		init_global_css_defense_module();
		init_context();
		import_jsx_dev_runtime$3 = require_jsx_dev_runtime();
		_jsxFileName$3 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/collapsible-card/header.tsx";
		Header = (0, import_react.forwardRef)(function CollapsibleCardHeader({ children, className, render, "aria-describedby": ariaDescribedByProp, ...restProps }, ref) {
			const [descriptionIds, setDescriptionIds] = (0, import_react.useState)([]);
			const [orderedDescriptionIds, setOrderedDescriptionIds] = (0, import_react.useState)([]);
			const headerContentRef = (0, import_react.useRef)(null);
			const registerDescriptionId = (0, import_react.useCallback)((id) => {
				setDescriptionIds((currentDescriptionIds) => {
					if (currentDescriptionIds.includes(id)) return currentDescriptionIds;
					return [...currentDescriptionIds, id];
				});
				return () => {
					setDescriptionIds((currentDescriptionIds) => currentDescriptionIds.filter((descriptionId) => descriptionId !== id));
				};
			}, []);
			const contextValue = (0, import_react.useMemo)(() => ({ registerDescriptionId }), [registerDescriptionId]);
			use_isomorphic_layout_effect_default(() => {
				const registeredDescriptionIds = new Set(descriptionIds);
				const nextDescriptionIds = Array.from(headerContentRef.current?.querySelectorAll("[id]") ?? []).map((element) => element.id).filter((id) => registeredDescriptionIds.has(id));
				setOrderedDescriptionIds((currentDescriptionIds) => {
					if (currentDescriptionIds.length === nextDescriptionIds.length && currentDescriptionIds.every((id, index) => id === nextDescriptionIds[index])) return currentDescriptionIds;
					return nextDescriptionIds;
				});
			});
			const ariaDescribedBy = Array.from(/* @__PURE__ */ new Set([...ariaDescribedByProp?.split(/\s+/).filter(Boolean) ?? [], ...orderedDescriptionIds])).join(" ") || void 0;
			return useRender({
				defaultTagName: "div",
				render,
				ref,
				props: mergeProps(restProps, {
					className: clsx(global_css_defense_module_default.heading, style_module_default["heading-wrapper"], className),
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime$3.jsxDEV)(HeaderDescriptionIdContext.Provider, {
						value: contextValue,
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime$3.jsxDEV)(Trigger, {
							className: style_module_default.header,
							render: /* @__PURE__ */ (0, import_jsx_dev_runtime$3.jsxDEV)(Header$1, {}, void 0, false, {
								fileName: _jsxFileName$3,
								lineNumber: 126,
								columnNumber: 17
							}, this),
							nativeButton: false,
							"aria-describedby": ariaDescribedBy,
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime$3.jsxDEV)("div", {
								ref: headerContentRef,
								className: style_module_default["header-content"],
								children
							}, void 0, false, {
								fileName: _jsxFileName$3,
								lineNumber: 130,
								columnNumber: 8
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime$3.jsxDEV)("div", {
								className: clsx(style_module_default["header-trigger-positioner"]),
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime$3.jsxDEV)("div", {
									className: clsx(style_module_default["header-trigger-wrapper"], global_css_defense_module_default.div),
									children: /* @__PURE__ */ (0, import_jsx_dev_runtime$3.jsxDEV)(Icon, {
										icon: chevron_down_default,
										className: style_module_default["header-trigger"]
									}, void 0, false, {
										fileName: _jsxFileName$3,
										lineNumber: 147,
										columnNumber: 10
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName$3,
									lineNumber: 141,
									columnNumber: 9
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName$3,
								lineNumber: 136,
								columnNumber: 8
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$3,
							lineNumber: 124,
							columnNumber: 7
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName$3,
						lineNumber: 123,
						columnNumber: 6
					}, this)
				})
			});
		});
		try {
			Header.__docgenInfo = {
				"description": "The header of a collapsible card. Always visible, and acts as the\ntoggle trigger — clicking anywhere on it expands or collapses the\ncard's content.\n\nDefaults to a `<div>` wrapper around the trigger. Since the right heading\nlevel depends on the surrounding document outline, the consumer is\nexpected to opt in to heading semantics. Pass `render` to wrap the\ntrigger in a heading (e.g. `render={ <h2 /> }`), following the W3C APG\naccordion pattern (heading wraps button).\n\nAvoid placing interactive elements (buttons, links, inputs) inside the\nheader, since the entire area is clickable and their events will bubble\nto trigger the collapse toggle.\n\nPlace full-bleed media in `CollapsibleCard.Content`, not the header.",
				"displayName": "Header",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/collapsible-card/header.tsx",
				"methods": [],
				"props": {
					"children": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/collapsible-card/types.ts",
							"name": "HeaderProps"
						}],
						"description": "The content to be rendered inside the header.",
						"name": "children",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/ui/src/collapsible-card/types.ts",
							"name": "HeaderProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "ReactNode" }
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
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/ui/src/collapsible-card/header-description.tsx
var import_jsx_dev_runtime$2, _jsxFileName$2, DEFAULT_TAG, HeaderDescription;
function init_header_description() {
	return (init_header_description = __esmMin((() => {
		init_clsx();
		init_react();
		init_context();
		init_text();
		init_style_module();
		import_jsx_dev_runtime$2 = require_jsx_dev_runtime();
		_jsxFileName$2 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/collapsible-card/header-description.tsx";
		DEFAULT_TAG = /* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)("div", {}, void 0, false, {
			fileName: _jsxFileName$2,
			lineNumber: 8,
			columnNumber: 21
		}, void 0);
		HeaderDescription = (0, import_react.forwardRef)(function CollapsibleCardHeaderDescription({ children, className, id: idProp, render = DEFAULT_TAG, ...restProps }, ref) {
			const generatedId = (0, import_react.useId)();
			const descriptionId = idProp ?? generatedId;
			const context = (0, import_react.useContext)(HeaderDescriptionIdContext);
			if (!context) throw new Error("CollapsibleCard.HeaderDescription: Missing parent <CollapsibleCard.Header>. Render <CollapsibleCard.HeaderDescription> inside <CollapsibleCard.Header>.");
			(0, import_react.useEffect)(() => {
				return context?.registerDescriptionId(descriptionId);
			}, [context, descriptionId]);
			return /* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)(Text, {
				ref,
				variant: "body-md",
				render,
				id: descriptionId,
				"aria-hidden": "true",
				className: clsx(style_module_default["header-description"], className),
				...restProps,
				children
			}, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 47,
				columnNumber: 3
			}, this);
		});
		try {
			HeaderDescription.__docgenInfo = {
				"description": "Secondary content placed in the collapsible card header that describes\nthe trigger button via `aria-describedby`. Use it for supplementary\ninformation such as status badges or summary values.\n\nMust be rendered inside `CollapsibleCard.Header`.\n\nThe content is visually rendered but marked `aria-hidden` so that\nassistive technologies consume it only through the `aria-describedby`\nrelationship on the trigger, avoiding double announcements.\n\nAvoid interactive elements (buttons, links, inputs) inside this\ncomponent — the entire header is the toggle trigger.",
				"displayName": "HeaderDescription",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/collapsible-card/header-description.tsx",
				"methods": [],
				"props": {
					"children": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/collapsible-card/types.ts",
							"name": "HeaderDescriptionProps"
						}],
						"description": "Secondary content that describes the header trigger via\n`aria-describedby`. Rendered visually but marked `aria-hidden`\nso assistive technologies consume it only through the description\nrelationship, avoiding double announcements.\n\nAvoid interactive elements — the entire header is the toggle trigger.",
						"name": "children",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/ui/src/collapsible-card/types.ts",
							"name": "HeaderDescriptionProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "ReactNode" }
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
						"defaultValue": { "value": "<div />" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/utils/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Replaces the component's default HTML element using a given React\nelement, or a function that returns a React element.",
						"name": "render",
						"required": false,
						"tags": {},
						"type": { "name": "ComponentRenderFn<HTMLAttributesWithRef<any>> | ReactElement<Record<string, unknown>, string | JSXElementConstructor<any>>" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/ui/src/collapsible-card/content.tsx
var import_jsx_dev_runtime$1, _jsxFileName$1, Content;
function init_content() {
	return (init_content = __esmMin((() => {
		init_react();
		init_clsx();
		init_content$1();
		init_panel();
		init_style_module();
		import_jsx_dev_runtime$1 = require_jsx_dev_runtime();
		_jsxFileName$1 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/collapsible-card/content.tsx";
		Content = (0, import_react.forwardRef)(function CollapsibleCardContent({ className, render, children, hiddenUntilFound = true, ...restProps }, ref) {
			return /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(Panel, {
				ref,
				className: (state) => clsx(style_module_default.content, state.open && state.transitionStatus === "idle" && style_module_default["overflow-visible"], className),
				hiddenUntilFound,
				...restProps,
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(Content$1, {
					className: style_module_default["content-inner"],
					render,
					children
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 35,
					columnNumber: 5
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 18,
				columnNumber: 4
			}, this);
		});
		try {
			Content.__docgenInfo = {
				"description": "The collapsible content area of the card. Hidden when collapsed,\nvisible when expanded.",
				"displayName": "Content",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/collapsible-card/content.tsx",
				"methods": [],
				"props": {
					"children": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/collapsible-card/types.ts",
							"name": "ContentProps"
						}],
						"description": "The content to be rendered inside the collapsible content area.",
						"name": "children",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/ui/src/collapsible-card/types.ts",
							"name": "ContentProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "ReactNode" }
					},
					"hiddenUntilFound": {
						"defaultValue": { "value": "true" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/collapsible-card/types.ts",
							"name": "ContentProps"
						}],
						"description": "Allows the browser’s built-in page search to find and expand the panel contents.\n\nOverrides the `keepMounted` prop and uses `hidden=\"until-found\"`\nto hide the element without removing it from the DOM.",
						"name": "hiddenUntilFound",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/ui/src/collapsible-card/types.ts",
							"name": "ContentProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
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
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/ui/src/collapsible-card/stories/index.story.tsx
var import_jsx_dev_runtime, _jsxFileName, meta, Default, InitiallyOpened, Disabled, Stacked, WithHeadingElement, WithHeaderDescription, ComparedToCard, FullBleedCoverWithHeader, WithFullBleed;
function init_index_story() {
	return (init_index_story = __esmMin((() => {
		init_full_bleed(), init_title(), init_root$1(), init_header$1(), init_content$1();
		init_stack();
		init_text();
		init_root(), init_header(), init_header_description(), init_content();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/collapsible-card/stories/index.story.tsx";
		meta = {
			tags: ["manifest"],
			title: "Components/@wordpress-ui/CollapsibleCard",
			id: "design-system-components-collapsiblecard",
			component: Root,
			subcomponents: {
				"CollapsibleCard.Header": Header,
				"CollapsibleCard.HeaderDescription": HeaderDescription,
				"CollapsibleCard.Content": Content,
				"Card.FullBleed": FullBleed
			},
			parameters: { componentStatus: {
				status: "recommended",
				whereUsed: "global"
			} }
		};
		Default = { args: { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Header, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Title, { children: "Collapsible card (closed by default)" }, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 36,
			columnNumber: 5
		}, void 0) }, "header", false, {
			fileName: _jsxFileName,
			lineNumber: 35,
			columnNumber: 4
		}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Content, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, {
			render: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 39,
				columnNumber: 20
			}, void 0),
			children: "This is the collapsible content area. It can contain any elements, just like a regular Card.Content."
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 39,
			columnNumber: 5
		}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, {
			render: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 43,
				columnNumber: 20
			}, void 0),
			children: "When collapsed, only the header and chevron are visible."
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 43,
			columnNumber: 5
		}, void 0)] }, "content", true, {
			fileName: _jsxFileName,
			lineNumber: 38,
			columnNumber: 4
		}, void 0)] } };
		InitiallyOpened = {
			argTypes: { open: { control: false } },
			args: {
				...Default.args,
				defaultOpen: true,
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Header, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Title, { children: "Collapsed by default" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 63,
					columnNumber: 5
				}, void 0) }, "header", false, {
					fileName: _jsxFileName,
					lineNumber: 62,
					columnNumber: 4
				}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Content, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, {
					render: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 66,
						columnNumber: 20
					}, void 0),
					children: "This content was hidden until you expanded it."
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 66,
					columnNumber: 5
				}, void 0) }, "content", false, {
					fileName: _jsxFileName,
					lineNumber: 65,
					columnNumber: 4
				}, void 0)]
			}
		};
		Disabled = { args: {
			...Default.args,
			disabled: true,
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Header, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Title, { children: "Disabled card" }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 83,
				columnNumber: 5
			}, void 0) }, "header", false, {
				fileName: _jsxFileName,
				lineNumber: 82,
				columnNumber: 4
			}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Content, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, {
				render: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 86,
					columnNumber: 20
				}, void 0),
				children: "The header is not interactive when disabled."
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 86,
				columnNumber: 5
			}, void 0) }, "content", false, {
				fileName: _jsxFileName,
				lineNumber: 85,
				columnNumber: 4
			}, void 0)]
		} };
		Stacked = {
			parameters: { controls: { disable: true } },
			render: () => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack, {
				direction: "column",
				gap: "lg",
				children: [
					"General",
					"Advanced",
					"Accessibility",
					"Performance",
					"Privacy",
					"Notifications"
				].map((title) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Root, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Header, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Title, { children: title }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 112,
					columnNumber: 7
				}, void 0) }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 111,
					columnNumber: 6
				}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Content, { children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, {
						render: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 115,
							columnNumber: 22
						}, void 0),
						children: [
							"Configure all ",
							title.toLowerCase(),
							" settings for your site. Changes here affect how your site behaves across all pages and posts."
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 115,
						columnNumber: 7
					}, void 0),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, {
						render: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 120,
							columnNumber: 22
						}, void 0),
						children: "Review each option carefully before saving. Some changes may require a page reload to take effect. Hover over individual options for more details about what they control."
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 120,
						columnNumber: 7
					}, void 0),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, {
						render: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 126,
							columnNumber: 22
						}, void 0),
						children: "If you're unsure about a setting, you can always reset to defaults using the button at the bottom of this section. Your previous configuration will be saved as a backup."
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 126,
						columnNumber: 7
					}, void 0)
				] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 114,
					columnNumber: 6
				}, void 0)] }, title, true, {
					fileName: _jsxFileName,
					lineNumber: 110,
					columnNumber: 5
				}, void 0))
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 101,
				columnNumber: 3
			}, void 0)
		};
		WithHeadingElement = {
			parameters: { controls: { disable: true } },
			render: () => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack, {
				direction: "column",
				gap: "lg",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Root, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Header, {
						render: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 151,
							columnNumber: 38
						}, void 0),
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Title, { children: "Heading level 2" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 152,
							columnNumber: 6
						}, void 0)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 151,
						columnNumber: 5
					}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Content, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, {
						render: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 155,
							columnNumber: 21
						}, void 0),
						children: "The wrapper renders as an h2 element when the consumer passes an h2 React element to the render prop."
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 155,
						columnNumber: 6
					}, void 0) }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 154,
						columnNumber: 5
					}, void 0)] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 150,
						columnNumber: 4
					}, void 0),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Root, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Header, {
						render: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 162,
							columnNumber: 38
						}, void 0),
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Title, { children: "Heading level 3" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 163,
							columnNumber: 6
						}, void 0)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 162,
						columnNumber: 5
					}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Content, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, {
						render: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 166,
							columnNumber: 21
						}, void 0),
						children: "Pass any of h1–h6 to choose the level that fits the surrounding document outline."
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 166,
						columnNumber: 6
					}, void 0) }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 165,
						columnNumber: 5
					}, void 0)] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 161,
						columnNumber: 4
					}, void 0),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Root, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Header, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Title, { children: "No heading (default)" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 174,
						columnNumber: 6
					}, void 0) }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 173,
						columnNumber: 5
					}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Content, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, {
						render: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 177,
							columnNumber: 21
						}, void 0),
						children: "Without a render prop, the header wraps the trigger in a plain div and does not contribute to the document outline."
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 177,
						columnNumber: 6
					}, void 0) }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 176,
						columnNumber: 5
					}, void 0)] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 172,
						columnNumber: 4
					}, void 0)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 149,
				columnNumber: 3
			}, void 0)
		};
		WithHeaderDescription = {
			argTypes: {
				open: { control: false },
				defaultOpen: { control: false },
				onOpenChange: { control: false }
			},
			render: ({ open: _open, defaultOpen: _defaultOpen, onOpenChange: _onOpenChange, ...restArgs }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Root, {
				...restArgs,
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Header, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack, {
					justify: "space-between",
					align: "center",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Title, { children: "Settings" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 208,
						columnNumber: 6
					}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HeaderDescription, { children: "3 items configured" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 209,
						columnNumber: 6
					}, void 0)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 207,
					columnNumber: 5
				}, void 0) }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 206,
					columnNumber: 4
				}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Content, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, {
					render: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 215,
						columnNumber: 20
					}, void 0),
					children: "The description appears next to the title."
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 215,
					columnNumber: 5
				}, void 0) }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 214,
					columnNumber: 4
				}, void 0)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 205,
				columnNumber: 3
			}, void 0)
		};
		ComparedToCard = {
			argTypes: { open: { control: false } },
			args: {
				...Default.args,
				defaultOpen: true
			},
			render: ({ open, defaultOpen, onOpenChange, disabled, ...restArgs }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack, {
				direction: "column",
				gap: "lg",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Root, {
					open,
					defaultOpen,
					onOpenChange,
					disabled,
					...restArgs,
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Header, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Title, { children: "CollapsibleCard (open)" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 245,
						columnNumber: 6
					}, void 0) }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 244,
						columnNumber: 5
					}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Content, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, {
						render: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 248,
							columnNumber: 21
						}, void 0),
						children: "Content should align with the regular card below."
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 248,
						columnNumber: 6
					}, void 0) }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 247,
						columnNumber: 5
					}, void 0)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 237,
					columnNumber: 4
				}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Root$1, {
					...restArgs,
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Header$1, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Title, { children: "Regular Card" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 255,
						columnNumber: 6
					}, void 0) }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 254,
						columnNumber: 5
					}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Content$1, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, {
						render: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 258,
							columnNumber: 21
						}, void 0),
						children: "Content should align with the collapsible card above."
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 258,
						columnNumber: 6
					}, void 0) }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 257,
						columnNumber: 5
					}, void 0)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 253,
					columnNumber: 4
				}, void 0)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 236,
				columnNumber: 3
			}, void 0)
		};
		FullBleedCoverWithHeader = {
			argTypes: { open: { control: false } },
			args: {
				defaultOpen: true,
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Header, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Title, { children: "Card title" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 280,
					columnNumber: 5
				}, void 0) }, "header", false, {
					fileName: _jsxFileName,
					lineNumber: 279,
					columnNumber: 4
				}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Content, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FullBleed, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
					height: 180,
					background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
				} }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 284,
					columnNumber: 6
				}, void 0) }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 283,
					columnNumber: 5
				}, void 0) }, "content", false, {
					fileName: _jsxFileName,
					lineNumber: 282,
					columnNumber: 4
				}, void 0)]
			}
		};
		WithFullBleed = {
			argTypes: { open: { control: false } },
			args: {
				defaultOpen: true,
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Header, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Title, { children: "Featured image" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 308,
					columnNumber: 5
				}, void 0) }, "header", false, {
					fileName: _jsxFileName,
					lineNumber: 307,
					columnNumber: 4
				}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Content, {
					render: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack, {
						direction: "column",
						gap: "lg"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 311,
						columnNumber: 14
					}, void 0),
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FullBleed, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
						height: 160,
						background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
					} }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 315,
						columnNumber: 6
					}, void 0) }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 314,
						columnNumber: 5
					}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, {
						render: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 323,
							columnNumber: 20
						}, void 0),
						children: "Content below the full-bleed area."
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 323,
						columnNumber: 5
					}, void 0)]
				}, "content", true, {
					fileName: _jsxFileName,
					lineNumber: 310,
					columnNumber: 4
				}, void 0)]
			}
		};
		try {
			Default.__docgenInfo = {
				"description": "A collapsible card that is open by default.",
				"displayName": "Default",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/collapsible-card/stories/index.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			InitiallyOpened.__docgenInfo = {
				"description": "A collapsible card that starts collapsed.",
				"displayName": "InitiallyOpened",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/collapsible-card/stories/index.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			Disabled.__docgenInfo = {
				"description": "A disabled collapsible card cannot be toggled by the user.",
				"displayName": "Disabled",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/collapsible-card/stories/index.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			Stacked.__docgenInfo = {
				"description": "Multiple collapsible cards stacked vertically, simulating a typical\nsettings-panel or FAQ-style layout.",
				"displayName": "Stacked",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/collapsible-card/stories/index.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			WithHeadingElement.__docgenInfo = {
				"description": "`CollapsibleCard.Header` renders a `<div>` wrapper by default. Pass an\n`<h1>`–`<h6>` React element to the `render` prop to wrap the trigger in\na heading and contribute to the document outline. The right level\ndepends on the surrounding outline, so the consumer is expected to opt\nin.",
				"displayName": "WithHeadingElement",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/collapsible-card/stories/index.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			WithHeaderDescription.__docgenInfo = {
				"description": "A collapsible card with a `HeaderDescription` that provides\nsupplementary information (e.g. status, summary) as an `aria-describedby`\nrelationship.",
				"displayName": "WithHeaderDescription",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/collapsible-card/stories/index.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			ComparedToCard.__docgenInfo = {
				"description": "Visual comparison: a `CollapsibleCard` (open) next to a regular `Card`\nto verify identical spacing and layout.",
				"displayName": "ComparedToCard",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/collapsible-card/stories/index.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			FullBleedCoverWithHeader.__docgenInfo = {
				"description": "When `Card.FullBleed` is the sole child of `CollapsibleCard.Content` and a\nheader sits above it, the media bumps against the card&apos;s side and\nbottom edges while the header retains its normal padding. (Unlike a plain\n`Card`, a header is always required here for the collapse trigger — see\n`Card` stories for a body-only `FullBleedCoverOnly` example.)",
				"displayName": "FullBleedCoverWithHeader",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/collapsible-card/stories/index.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			WithFullBleed.__docgenInfo = {
				"description": "`Card.FullBleed` breaks out of the content padding to span edge-to-edge.\nUseful for images, dividers, or embedded content inside the collapsible\nregion.",
				"displayName": "WithFullBleed",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/collapsible-card/stories/index.story.tsx",
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
					originalSource: "{\n  args: {\n    children: [<CollapsibleCard.Header key=\"header\">\n                <Card.Title>Collapsible card (closed by default)</Card.Title>\n            </CollapsibleCard.Header>, <CollapsibleCard.Content key=\"content\">\n                <Text render={<p />}>\n                    This is the collapsible content area. It can contain any\n                    elements, just like a regular Card.Content.\n                </Text>\n                <Text render={<p />}>\n                    When collapsed, only the header and chevron are visible.\n                </Text>\n            </CollapsibleCard.Content>]\n  }\n}",
					...Default.parameters?.docs?.source
				},
				description: {
					story: "A collapsible card that is open by default.",
					...Default.parameters?.docs?.description
				}
			}
		};
		InitiallyOpened.parameters = {
			...InitiallyOpened.parameters,
			docs: {
				...InitiallyOpened.parameters?.docs,
				source: {
					originalSource: "{\n  // `defaultOpen` (uncontrolled) and `open` (controlled) should not be\n  // used together — disable the `open` control to avoid confusion.\n  argTypes: {\n    open: {\n      control: false\n    }\n  },\n  args: {\n    ...Default.args,\n    defaultOpen: true,\n    children: [<CollapsibleCard.Header key=\"header\">\n                <Card.Title>Collapsed by default</Card.Title>\n            </CollapsibleCard.Header>, <CollapsibleCard.Content key=\"content\">\n                <Text render={<p />}>\n                    This content was hidden until you expanded it.\n                </Text>\n            </CollapsibleCard.Content>]\n  }\n}",
					...InitiallyOpened.parameters?.docs?.source
				},
				description: {
					story: "A collapsible card that starts collapsed.",
					...InitiallyOpened.parameters?.docs?.description
				}
			}
		};
		Disabled.parameters = {
			...Disabled.parameters,
			docs: {
				...Disabled.parameters?.docs,
				source: {
					originalSource: "{\n  args: {\n    ...Default.args,\n    disabled: true,\n    children: [<CollapsibleCard.Header key=\"header\">\n                <Card.Title>Disabled card</Card.Title>\n            </CollapsibleCard.Header>, <CollapsibleCard.Content key=\"content\">\n                <Text render={<p />}>\n                    The header is not interactive when disabled.\n                </Text>\n            </CollapsibleCard.Content>]\n  }\n}",
					...Disabled.parameters?.docs?.source
				},
				description: {
					story: "A disabled collapsible card cannot be toggled by the user.",
					...Disabled.parameters?.docs?.description
				}
			}
		};
		Stacked.parameters = {
			...Stacked.parameters,
			docs: {
				...Stacked.parameters?.docs,
				source: {
					originalSource: "{\n  parameters: {\n    controls: {\n      disable: true\n    }\n  },\n  render: () => <Stack direction=\"column\" gap=\"lg\">\n            {['General', 'Advanced', 'Accessibility', 'Performance', 'Privacy', 'Notifications'].map(title => <CollapsibleCard.Root key={title}>\n                    <CollapsibleCard.Header>\n                        <Card.Title>{title}</Card.Title>\n                    </CollapsibleCard.Header>\n                    <CollapsibleCard.Content>\n                        <Text render={<p />}>\n                            Configure all {title.toLowerCase()} settings for\n                            your site. Changes here affect how your site behaves\n                            across all pages and posts.\n                        </Text>\n                        <Text render={<p />}>\n                            Review each option carefully before saving. Some\n                            changes may require a page reload to take effect.\n                            Hover over individual options for more details about\n                            what they control.\n                        </Text>\n                        <Text render={<p />}>\n                            If you&apos;re unsure about a setting, you can\n                            always reset to defaults using the button at the\n                            bottom of this section. Your previous configuration\n                            will be saved as a backup.\n                        </Text>\n                    </CollapsibleCard.Content>\n                </CollapsibleCard.Root>)}\n        </Stack>\n}",
					...Stacked.parameters?.docs?.source
				},
				description: {
					story: "Multiple collapsible cards stacked vertically, simulating a typical\nsettings-panel or FAQ-style layout.",
					...Stacked.parameters?.docs?.description
				}
			}
		};
		WithHeadingElement.parameters = {
			...WithHeadingElement.parameters,
			docs: {
				...WithHeadingElement.parameters?.docs,
				source: {
					originalSource: "{\n  parameters: {\n    controls: {\n      disable: true\n    }\n  },\n  render: () => <Stack direction=\"column\" gap=\"lg\">\n            <CollapsibleCard.Root>\n                <CollapsibleCard.Header render={<h2 />}>\n                    <Card.Title>Heading level 2</Card.Title>\n                </CollapsibleCard.Header>\n                <CollapsibleCard.Content>\n                    <Text render={<p />}>\n                        The wrapper renders as an h2 element when the consumer\n                        passes an h2 React element to the render prop.\n                    </Text>\n                </CollapsibleCard.Content>\n            </CollapsibleCard.Root>\n            <CollapsibleCard.Root>\n                <CollapsibleCard.Header render={<h3 />}>\n                    <Card.Title>Heading level 3</Card.Title>\n                </CollapsibleCard.Header>\n                <CollapsibleCard.Content>\n                    <Text render={<p />}>\n                        Pass any of h1–h6 to choose the level that fits the\n                        surrounding document outline.\n                    </Text>\n                </CollapsibleCard.Content>\n            </CollapsibleCard.Root>\n            <CollapsibleCard.Root>\n                <CollapsibleCard.Header>\n                    <Card.Title>No heading (default)</Card.Title>\n                </CollapsibleCard.Header>\n                <CollapsibleCard.Content>\n                    <Text render={<p />}>\n                        Without a render prop, the header wraps the trigger in a\n                        plain div and does not contribute to the document\n                        outline.\n                    </Text>\n                </CollapsibleCard.Content>\n            </CollapsibleCard.Root>\n        </Stack>\n}",
					...WithHeadingElement.parameters?.docs?.source
				},
				description: {
					story: "`CollapsibleCard.Header` renders a `<div>` wrapper by default. Pass an\n`<h1>`–`<h6>` React element to the `render` prop to wrap the trigger in\na heading and contribute to the document outline. The right level\ndepends on the surrounding outline, so the consumer is expected to opt\nin.",
					...WithHeadingElement.parameters?.docs?.description
				}
			}
		};
		WithHeaderDescription.parameters = {
			...WithHeaderDescription.parameters,
			docs: {
				...WithHeaderDescription.parameters?.docs,
				source: {
					originalSource: "{\n  argTypes: {\n    open: {\n      control: false\n    },\n    defaultOpen: {\n      control: false\n    },\n    onOpenChange: {\n      control: false\n    }\n  },\n  render: ({\n    open: _open,\n    defaultOpen: _defaultOpen,\n    onOpenChange: _onOpenChange,\n    ...restArgs\n  }) => <CollapsibleCard.Root {...restArgs}>\n            <CollapsibleCard.Header>\n                <Stack justify=\"space-between\" align=\"center\">\n                    <Card.Title>Settings</Card.Title>\n                    <CollapsibleCard.HeaderDescription>\n                        3 items configured\n                    </CollapsibleCard.HeaderDescription>\n                </Stack>\n            </CollapsibleCard.Header>\n            <CollapsibleCard.Content>\n                <Text render={<p />}>\n                    The description appears next to the title.\n                </Text>\n            </CollapsibleCard.Content>\n        </CollapsibleCard.Root>\n}",
					...WithHeaderDescription.parameters?.docs?.source
				},
				description: {
					story: "A collapsible card with a `HeaderDescription` that provides\nsupplementary information (e.g. status, summary) as an `aria-describedby`\nrelationship.",
					...WithHeaderDescription.parameters?.docs?.description
				}
			}
		};
		ComparedToCard.parameters = {
			...ComparedToCard.parameters,
			docs: {
				...ComparedToCard.parameters?.docs,
				source: {
					originalSource: "{\n  // `defaultOpen` (uncontrolled) and `open` (controlled) should not be\n  // used together — disable the `open` control to avoid confusion.\n  argTypes: {\n    open: {\n      control: false\n    }\n  },\n  args: {\n    ...Default.args,\n    defaultOpen: true\n  },\n  render: ({\n    open,\n    defaultOpen,\n    onOpenChange,\n    disabled,\n    ...restArgs\n  }) => <Stack direction=\"column\" gap=\"lg\">\n            <CollapsibleCard.Root open={open} defaultOpen={defaultOpen} onOpenChange={onOpenChange} disabled={disabled} {...restArgs}>\n                <CollapsibleCard.Header>\n                    <Card.Title>CollapsibleCard (open)</Card.Title>\n                </CollapsibleCard.Header>\n                <CollapsibleCard.Content>\n                    <Text render={<p />}>\n                        Content should align with the regular card below.\n                    </Text>\n                </CollapsibleCard.Content>\n            </CollapsibleCard.Root>\n            <Card.Root {...restArgs}>\n                <Card.Header>\n                    <Card.Title>Regular Card</Card.Title>\n                </Card.Header>\n                <Card.Content>\n                    <Text render={<p />}>\n                        Content should align with the collapsible card above.\n                    </Text>\n                </Card.Content>\n            </Card.Root>\n        </Stack>\n}",
					...ComparedToCard.parameters?.docs?.source
				},
				description: {
					story: "Visual comparison: a `CollapsibleCard` (open) next to a regular `Card`\nto verify identical spacing and layout.",
					...ComparedToCard.parameters?.docs?.description
				}
			}
		};
		FullBleedCoverWithHeader.parameters = {
			...FullBleedCoverWithHeader.parameters,
			docs: {
				...FullBleedCoverWithHeader.parameters?.docs,
				source: {
					originalSource: "{\n  argTypes: {\n    open: {\n      control: false\n    }\n  },\n  args: {\n    defaultOpen: true,\n    children: [<CollapsibleCard.Header key=\"header\">\n                <Card.Title>Card title</Card.Title>\n            </CollapsibleCard.Header>, <CollapsibleCard.Content key=\"content\">\n                <Card.FullBleed>\n                    <div style={{\n          height: 180,\n          background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'\n        }} />\n                </Card.FullBleed>\n            </CollapsibleCard.Content>]\n  }\n}",
					...FullBleedCoverWithHeader.parameters?.docs?.source
				},
				description: {
					story: "When `Card.FullBleed` is the sole child of `CollapsibleCard.Content` and a\nheader sits above it, the media bumps against the card&apos;s side and\nbottom edges while the header retains its normal padding. (Unlike a plain\n`Card`, a header is always required here for the collapse trigger — see\n`Card` stories for a body-only `FullBleedCoverOnly` example.)",
					...FullBleedCoverWithHeader.parameters?.docs?.description
				}
			}
		};
		WithFullBleed.parameters = {
			...WithFullBleed.parameters,
			docs: {
				...WithFullBleed.parameters?.docs,
				source: {
					originalSource: "{\n  argTypes: {\n    open: {\n      control: false\n    }\n  },\n  args: {\n    defaultOpen: true,\n    children: [<CollapsibleCard.Header key=\"header\">\n                <Card.Title>Featured image</Card.Title>\n            </CollapsibleCard.Header>, <CollapsibleCard.Content render={<Stack direction=\"column\" gap=\"lg\" />} key=\"content\">\n                <Card.FullBleed>\n                    <div style={{\n          height: 160,\n          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'\n        }} />\n                </Card.FullBleed>\n                <Text render={<p />}>Content below the full-bleed area.</Text>\n            </CollapsibleCard.Content>]\n  }\n}",
					...WithFullBleed.parameters?.docs?.source
				},
				description: {
					story: "`Card.FullBleed` breaks out of the content padding to span edge-to-edge.\nUseful for images, dividers, or embedded content inside the collapsible\nregion.",
					...WithFullBleed.parameters?.docs?.description
				}
			}
		};
	})))();
}
//#endregion
init_index_story();
export { ComparedToCard, Default, Disabled, FullBleedCoverWithHeader, InitiallyOpened, Stacked, WithFullBleed, WithHeaderDescription, WithHeadingElement, meta as default };
