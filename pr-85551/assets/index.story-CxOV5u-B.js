import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as init_icon, t as Icon } from "./icon-n5i0-U3z.js";
import { n as init_button, t as Button } from "./button-DruDjqNA.js";
import { t as globe_default } from "./globe-CA7taIZM.js";
import { n as star_filled_default } from "./star-filled-knC7Rv3K.js";
import { n as init_link, t as Link } from "./link-BEAww1Vq.js";
import { n as init_icon_button, t as IconButton } from "./icon-button-rijeJuIv.js";
import { a as Header, c as init_root, i as init_content, n as init_title, o as init_header, r as Content, s as Root, t as Title } from "./title-ClJOk8js.js";
import { n as init_stack, t as Stack } from "./stack-BHmRFw1F.js";
import { i as use_form_validity_default, n as init_dataform, r as init_use_form_validity, t as DataForm } from "./dataform-hTcX7VD1.js";
import { r as init_build_module } from "./library.story-CbQx3MQ6.js";
//#region ../packages/widget-primitives/src/tools/get-lazy-widget-component/get-lazy-widget-component.ts
function isValidWidgetModule(module) {
	return typeof module === "object" && module !== null && "default" in module && typeof module.default === "function";
}
function getLazyWidgetComponent(renderModule, resolveWidgetModule) {
	const cached = componentCache.get(renderModule);
	if (cached) return cached;
	const lazyComponent = (0, import_react.lazy)(async () => {
		const module = await resolveWidgetModule(renderModule);
		if (!isValidWidgetModule(module)) throw new Error(`Invalid widget module: ${renderModule}`);
		return module;
	});
	componentCache.set(renderModule, lazyComponent);
	return lazyComponent;
}
var componentCache;
function init_get_lazy_widget_component() {
	return (init_get_lazy_widget_component = __esmMin((() => {
		init_react();
		componentCache = /* @__PURE__ */ new Map();
	})))();
}
//#endregion
//#region ../packages/widget-primitives/src/widget-host/widget-host.tsx
/**
* Provides host capabilities to the widgets below it. Merges over the
* inherited value, so capabilities can layer per subtree.
*
* @param {WidgetHostProviderProps} props Component props.
*/
function WidgetHostProvider({ value, children }) {
	const inherited = (0, import_react.useContext)(WidgetHostContext);
	const merged = (0, import_react.useMemo)(() => ({
		...inherited,
		...value
	}), [inherited, value]);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$4.jsxDEV)(WidgetHostContext.Provider, {
		value: merged,
		children
	}, void 0, false, {
		fileName: _jsxFileName$4,
		lineNumber: 97,
		columnNumber: 3
	}, this);
}
/**
* Reads the host capabilities. Defaults to `{}`: consumers guard each
* capability and fall back to host-agnostic behavior when it is absent.
*/
function useWidgetHost() {
	return (0, import_react.useContext)(WidgetHostContext);
}
var import_jsx_dev_runtime$4, _jsxFileName$4, WidgetHostContext;
function init_widget_host() {
	return (init_widget_host = __esmMin((() => {
		init_react();
		import_jsx_dev_runtime$4 = require_jsx_dev_runtime();
		_jsxFileName$4 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/widget-primitives/src/widget-host/widget-host.tsx";
		WidgetHostContext = (0, import_react.createContext)({});
		try {
			WidgetHostProvider.__docgenInfo = {
				"description": "Provides host capabilities to the widgets below it. Merges over the\ninherited value, so capabilities can layer per subtree.",
				"displayName": "WidgetHostProvider",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/widget-primitives/src/widget-host/widget-host.tsx",
				"methods": [],
				"props": {
					"value": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/widget-primitives/src/widget-host/widget-host.tsx",
							"name": "TypeLiteral"
						}],
						"description": "Capabilities to provide; merged over any inherited host value.",
						"name": "value",
						"required": true,
						"tags": {},
						"type": { "name": "WidgetHost" }
					},
					"children": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/widget-primitives/src/widget-host/widget-host.tsx",
							"name": "TypeLiteral"
						}],
						"description": "Subtree the capabilities apply to.",
						"name": "children",
						"required": true,
						"tags": {},
						"type": { "name": "ReactNode" }
					}
				},
				"tags": { "param": "props Component props." }
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			useWidgetHost.__docgenInfo = {
				"description": "Reads the host capabilities. Defaults to `{}`: consumers guard each\ncapability and fall back to host-agnostic behavior when it is absent.",
				"displayName": "useWidgetHost",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/widget-primitives/src/widget-host/widget-host.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/widget-primitives/src/widget-host/widget-actions-collector.tsx
function joinDeclarations(declarations) {
	const byId = /* @__PURE__ */ new Map();
	for (const actions of declarations.values()) for (const action of actions) byId.set(action.id, action);
	return [...byId.values()];
}
/**
* Joins what every `useWidgetActions` call under one render declares, so
* the host always receives the instance's whole list.
*
* @param {Object}    props          Component props.
* @param {ReactNode} props.children The widget's render.
*/
function WidgetActionsCollector({ children }) {
	const hostDeclare = useWidgetHost().actions?.declare;
	const [declarations] = (0, import_react.useState)(() => /* @__PURE__ */ new Map());
	const value = (0, import_react.useMemo)(() => ({
		hosted: !!hostDeclare,
		declare: (callId, actions) => {
			if (actions.length > 0) declarations.set(callId, actions);
			else declarations.delete(callId);
			hostDeclare?.(joinDeclarations(declarations));
		}
	}), [hostDeclare, declarations]);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$3.jsxDEV)(WidgetActionsCollectorContext.Provider, {
		value,
		children
	}, void 0, false, {
		fileName: _jsxFileName$3,
		lineNumber: 73,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime$3, _jsxFileName$3, WidgetActionsCollectorContext;
function init_widget_actions_collector() {
	return (init_widget_actions_collector = __esmMin((() => {
		init_react();
		init_widget_host();
		import_jsx_dev_runtime$3 = require_jsx_dev_runtime();
		_jsxFileName$3 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/widget-primitives/src/widget-host/widget-actions-collector.tsx";
		WidgetActionsCollectorContext = (0, import_react.createContext)(null);
		try {
			WidgetActionsCollector.__docgenInfo = {
				"description": "Joins what every `useWidgetActions` call under one render declares, so\nthe host always receives the instance's whole list.",
				"displayName": "WidgetActionsCollector",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/widget-primitives/src/widget-host/widget-actions-collector.tsx",
				"methods": [],
				"props": {},
				"tags": { "param": "props Component props.\nprops.children The widget's render." }
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/widget-primitives/src/components/widget-render/widget-render.tsx
function WidgetRender({ widgetType, attributes, setAttributes, resolveWidgetModule }) {
	const WidgetComponent = getLazyWidgetComponent(widgetType.renderModule, resolveWidgetModule);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)(WidgetActionsCollector, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)(WidgetComponent, {
		attributes,
		setAttributes
	}, void 0, false, {
		fileName: _jsxFileName$2,
		lineNumber: 32,
		columnNumber: 4
	}, this) }, void 0, false, {
		fileName: _jsxFileName$2,
		lineNumber: 29,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime$2, _jsxFileName$2;
function init_widget_render() {
	return (init_widget_render = __esmMin((() => {
		init_get_lazy_widget_component();
		init_widget_actions_collector();
		import_jsx_dev_runtime$2 = require_jsx_dev_runtime();
		_jsxFileName$2 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/widget-primitives/src/components/widget-render/widget-render.tsx";
		try {
			WidgetRender.__docgenInfo = {
				"description": "",
				"displayName": "WidgetRender",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/widget-primitives/src/components/widget-render/widget-render.tsx",
				"methods": [],
				"props": {
					"widgetType": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/widget-primitives/src/components/widget-render/widget-render.tsx",
							"name": "WidgetRenderProps"
						}],
						"description": "",
						"name": "widgetType",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/widget-primitives/src/components/widget-render/widget-render.tsx",
							"name": "WidgetRenderProps"
						},
						"required": true,
						"tags": {},
						"type": { "name": "WidgetType<Item>" }
					},
					"attributes": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/widget-primitives/src/components/widget-render/widget-render.tsx",
							"name": "WidgetRenderProps"
						}],
						"description": "",
						"name": "attributes",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/widget-primitives/src/components/widget-render/widget-render.tsx",
							"name": "WidgetRenderProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "Item" }
					},
					"setAttributes": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/widget-primitives/src/components/widget-render/widget-render.tsx",
							"name": "WidgetRenderProps"
						}],
						"description": "",
						"name": "setAttributes",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/widget-primitives/src/components/widget-render/widget-render.tsx",
							"name": "WidgetRenderProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "((next: Partial<Item>) => void)" }
					},
					"resolveWidgetModule": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/widget-primitives/src/components/widget-render/widget-render.tsx",
							"name": "WidgetRenderProps"
						}],
						"description": "",
						"name": "resolveWidgetModule",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/widget-primitives/src/components/widget-render/widget-render.tsx",
							"name": "WidgetRenderProps"
						},
						"required": true,
						"tags": {},
						"type": { "name": "ResolveWidgetModule" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/widget-primitives/src/field-types/field-types.ts
/**
* Registers a field type.
*
* First registration wins: a name that is
* already registered, or is not a valid name, is ignored.
*
* @param fieldType Field type definition to register.
* @return The registered definition, or `undefined` when ignored.
*/
function registerFieldType(fieldType) {
	if (!FIELD_TYPE_NAME_PATTERN.test(fieldType.name) || fieldTypes.has(fieldType.name)) return;
	fieldTypes.set(fieldType.name, fieldType);
	return fieldType;
}
/**
* Converts fields referencing registered field types into
* plain DataViews fields: default settings are merged into the field's
* own properties (giving the field precedence), `type` is updated to
* the `baseType` from the definition, and `isValid` is combined rule by rule.
*
* Fields with an unregistered `type` remain unchanged, maintaining DataViews' original types and handling of unknown types.
*
* @param fields - The fields to be resolved.
* @return Fields with registered types converted into specific properties per field.
*/
function resolveFields(fields) {
	return fields.map((field) => {
		const fieldType = field.type ? fieldTypes.get(field.type) : void 0;
		if (!fieldType) return field;
		const { name, baseType, isValid, ...fieldDefaults } = fieldType;
		const { type, isValid: fieldIsValid, ...rest } = field;
		return {
			...fieldDefaults,
			...rest,
			type: baseType,
			...isValid || fieldIsValid ? { isValid: {
				...isValid,
				...fieldIsValid
			} } : {}
		};
	});
}
var FIELD_TYPE_NAME_PATTERN, fieldTypes;
function init_field_types() {
	return (init_field_types = __esmMin((() => {
		FIELD_TYPE_NAME_PATTERN = /^[a-z][a-z0-9-]*(\/[a-z][a-z0-9-]*)?$/;
		fieldTypes = /* @__PURE__ */ new Map();
	})))();
}
//#endregion
//#region ../packages/widget-primitives/src/icon-resolver/icon-resolver.ts
/**
* Registers the icon resolver. First registration wins.
*
* @param resolver Resolver turning a reference into a renderable icon.
* @return The registered resolver, or `undefined` when ignored.
*/
function registerIconResolver(resolver) {
	if (iconResolver) return;
	iconResolver = resolver;
	return resolver;
}
/**
* Resolves an icon reference through the registered resolver. An
* unresolvable reference degrades to `null` rather than breaking.
*
* @param reference Icon reference to resolve.
* @return The renderable icon, or `null`.
*/
async function resolveIcon(reference) {
	if (!iconResolver) return null;
	try {
		return await iconResolver(reference);
	} catch {
		return null;
	}
}
var iconResolver;
function init_icon_resolver() {
	return (init_icon_resolver = __esmMin((() => {})))();
}
//#endregion
//#region ../packages/widget-primitives/src/widget-host/host-link.tsx
var import_jsx_dev_runtime$1, _jsxFileName$1, HostLink;
function init_host_link() {
	return (init_host_link = __esmMin((() => {
		init_react();
		init_widget_host();
		import_jsx_dev_runtime$1 = require_jsx_dev_runtime();
		_jsxFileName$1 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/widget-primitives/src/widget-host/host-link.tsx";
		HostLink = (0, import_react.forwardRef)(function UnforwardedHostLink({ href, children, ...props }, ref) {
			const { links } = useWidgetHost();
			const { download, target } = props;
			const opensNewDocument = download !== void 0 && download !== false || /^_blank$/i.test(target ?? "");
			const path = links && !opensNewDocument ? links.match(href) : null;
			if (links && path !== null) return /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(links.Link, {
				ref,
				path,
				...props,
				children
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 37,
				columnNumber: 5
			}, this);
			return /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)("a", {
				ref,
				href,
				...props,
				children
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 44,
				columnNumber: 4
			}, this);
		});
		try {
			HostLink.__docgenInfo = {
				"description": "Anchor that mounts the host router's link when the target is one of the\nhost's own routes, and a plain anchor otherwise. A `download`, or a\n`_blank` target, keeps the plain anchor: a new document leaves the app.\n\nComposes through the `render` prop of a UI link, which merges its own\nanchor props in.",
				"displayName": "HostLink",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/widget-primitives/src/widget-host/host-link.tsx",
				"methods": [],
				"props": { "href": {
					"defaultValue": null,
					"declarations": [{
						"fileName": "gutenberg-storybook-preview/packages/widget-primitives/src/widget-host/host-link.tsx",
						"name": "HostLinkProps"
					}],
					"description": "The link target. The host's `match` decides whether it names one of\nits own routes.",
					"name": "href",
					"parent": {
						"fileName": "gutenberg-storybook-preview/packages/widget-primitives/src/widget-host/host-link.tsx",
						"name": "HostLinkProps"
					},
					"required": true,
					"tags": {},
					"type": { "name": "string" }
				} },
				"tags": { "param": "props Component props." }
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/widget-primitives/src/components/widget-render/stories/index.story.tsx
function DemoWidget({ attributes, setAttributes }) {
	const { greeting = "Hello", world = "earth" } = attributes ?? {};
	const index = Math.max(0, WORLDS.findIndex((entry) => entry.value === world));
	const current = WORLDS[index];
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		style: {
			background: current.background,
			border: "1px solid var(--wpds-color-stroke-surface-neutral, #dbdbdb)",
			borderRadius: "var(--wpds-border-radius-md, 4px)",
			color: "var(--wpds-color-foreground-content-neutral, #1e1e1e)",
			display: "grid",
			gap: "var(--wpds-dimension-gap-md, 12px)",
			justifyItems: "center",
			padding: "var(--wpds-dimension-padding-xl, 20px)"
		},
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", {
			style: { fontSize: "1.5em" },
			children: `${greeting}, ${current.label}! ${current.emoji}`
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 105,
			columnNumber: 4
		}, this), setAttributes && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
			onClick: () => setAttributes({ world: WORLDS[(index + 1) % WORLDS.length].value }),
			children: "Next world"
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 110,
			columnNumber: 5
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 93,
		columnNumber: 3
	}, this);
}
function DefaultStory() {
	const [attributes, setAttributes] = (0, import_react.useState)({ ...demoWidgetType.example?.attributes });
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.Suspense, {
		fallback: null,
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WidgetRender, {
			widgetType: demoWidgetType,
			attributes,
			setAttributes: (next) => setAttributes((prev) => ({
				...prev,
				...next
			})),
			resolveWidgetModule: resolveDemoModule
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 195,
			columnNumber: 4
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 194,
		columnNumber: 3
	}, this);
}
function WidgetWithSettings() {
	const [attributes, setAttributes] = (0, import_react.useState)({ ...demoWidgetType.example?.attributes });
	const fields = demoWidgetType.attributes;
	const form = (0, import_react.useMemo)(() => ({
		layout: {
			type: "regular",
			labelPosition: "top"
		},
		fields: fields.map((field) => field.id)
	}), [fields]);
	const applyEdits = (edits) => setAttributes((prev) => ({
		...prev,
		...edits
	}));
	const { validity } = use_form_validity_default(attributes, fields, form);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		style: {
			alignItems: "start",
			display: "grid",
			gap: "var(--wpds-dimension-gap-xl, 24px)",
			gridTemplateColumns: "2fr 1fr"
		},
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.Suspense, {
			fallback: null,
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WidgetRender, {
				widgetType: demoWidgetType,
				attributes,
				resolveWidgetModule: resolveDemoModule
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 255,
				columnNumber: 5
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 254,
			columnNumber: 4
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("aside", {
			style: {
				border: "1px solid var(--wpds-color-stroke-surface-neutral, #dbdbdb)",
				borderRadius: "var(--wpds-border-radius-md, 4px)",
				padding: "var(--wpds-dimension-padding-lg, 16px)"
			},
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DataForm, {
				data: attributes,
				fields,
				form,
				validity,
				onChange: applyEdits
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 268,
				columnNumber: 5
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 261,
			columnNumber: 4
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 246,
		columnNumber: 3
	}, this);
}
function WidgetInHostChrome() {
	const [attributes, setAttributes] = (0, import_react.useState)({ ...demoWidgetType.example?.attributes });
	const titleId = (0, import_react.useId)();
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Root, {
		render: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 308,
			columnNumber: 13
		}, this),
		"aria-labelledby": titleId,
		style: {
			background: `repeating-linear-gradient(\n\t\t\t\t\t45deg,\n\t\t\t\t\tvar(--wpds-color-background-surface-neutral, #fcfcfc),\n\t\t\t\t\tvar(--wpds-color-background-surface-neutral, #fcfcfc) 8px,\n\t\t\t\t\tvar(--wpds-color-background-surface-neutral-weak, #f4f4f4) 8px,\n\t\t\t\t\tvar(--wpds-color-background-surface-neutral-weak, #f4f4f4) 16px\n\t\t\t\t)`,
			maxWidth: 480
		},
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Header, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack, {
			direction: "row",
			align: "center",
			gap: "sm",
			children: [demoWidgetType.icon && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { icon: demoWidgetType.icon }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 320,
					columnNumber: 8
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 319,
				columnNumber: 7
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Title, {
				id: titleId,
				render: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 323,
					columnNumber: 42
				}, this),
				children: demoWidgetType.title
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 323,
				columnNumber: 6
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 317,
			columnNumber: 5
		}, this) }, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 316,
			columnNumber: 4
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Content, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.Suspense, {
			fallback: null,
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WidgetRender, {
				widgetType: demoWidgetType,
				attributes,
				setAttributes: (next) => setAttributes((prev) => ({
					...prev,
					...next
				})),
				resolveWidgetModule: resolveDemoModule
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 330,
				columnNumber: 6
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 329,
			columnNumber: 5
		}, this) }, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 328,
			columnNumber: 4
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 307,
		columnNumber: 3
	}, this);
}
function WidgetWithRelevance() {
	const [attributes, setAttributes] = (0, import_react.useState)({ ...demoWidgetTypeWithRelevance.example?.attributes });
	const titleId = (0, import_react.useId)();
	const allFields = (0, import_react.useMemo)(() => resolveFields(demoWidgetTypeWithRelevance.attributes ?? []), []);
	const prominentFields = (0, import_react.useMemo)(() => allFields.filter((field) => field.relevance === "high"), [allFields]);
	const hasSettingsSurface = allFields.some((field) => field.relevance !== "high");
	const prominentForm = (0, import_react.useMemo)(() => ({
		layout: {
			type: "row",
			alignment: "center"
		},
		fields: prominentFields.map((field) => ({
			id: field.id,
			layout: {
				type: "regular",
				labelPosition: "none"
			}
		}))
	}), [prominentFields]);
	const settingsForm = (0, import_react.useMemo)(() => ({
		layout: {
			type: "regular",
			labelPosition: "top"
		},
		fields: allFields.map((field) => field.id)
	}), [allFields]);
	const applyEdits = (edits) => setAttributes((prev) => ({
		...prev,
		...edits
	}));
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		style: {
			alignItems: "start",
			display: "grid",
			gap: "var(--wpds-dimension-gap-xl, 24px)",
			gridTemplateColumns: hasSettingsSurface ? "2fr 1fr" : "1fr",
			maxWidth: 960
		},
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Root, {
			render: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 444,
				columnNumber: 14
			}, this),
			"aria-labelledby": titleId,
			style: { background: `repeating-linear-gradient(\n\t\t\t\t\t\t45deg,\n\t\t\t\t\t\tvar(--wpds-color-background-surface-neutral, #fcfcfc),\n\t\t\t\t\t\tvar(--wpds-color-background-surface-neutral, #fcfcfc) 8px,\n\t\t\t\t\t\tvar(--wpds-color-background-surface-neutral-weak, #f4f4f4) 8px,\n\t\t\t\t\t\tvar(--wpds-color-background-surface-neutral-weak, #f4f4f4) 16px\n\t\t\t\t\t)` },
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Header, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack, {
				direction: "row",
				align: "center",
				gap: "sm",
				children: [
					demoWidgetTypeWithRelevance.icon && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
						"aria-hidden": "true",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { icon: demoWidgetTypeWithRelevance.icon }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 454,
							columnNumber: 9
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 453,
						columnNumber: 8
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Title, {
						id: titleId,
						render: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 461,
							columnNumber: 17
						}, this),
						style: { flexGrow: 1 },
						children: demoWidgetTypeWithRelevance.title
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 459,
						columnNumber: 7
					}, this),
					prominentFields.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DataForm, {
						data: attributes,
						fields: prominentFields,
						form: prominentForm,
						onChange: applyEdits
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 468,
						columnNumber: 8
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 451,
				columnNumber: 6
			}, this) }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 450,
				columnNumber: 5
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Content, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.Suspense, {
				fallback: null,
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WidgetRender, {
					widgetType: demoWidgetTypeWithRelevance,
					attributes,
					setAttributes: applyEdits,
					resolveWidgetModule: resolveDemoModule
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 479,
					columnNumber: 7
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 478,
				columnNumber: 6
			}, this) }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 477,
				columnNumber: 5
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 443,
			columnNumber: 4
		}, this), hasSettingsSurface && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("aside", {
			"aria-label": "Settings surface",
			style: {
				border: "1px solid var(--wpds-color-stroke-surface-neutral, #dbdbdb)",
				borderRadius: "var(--wpds-border-radius-md, 4px)",
				padding: "var(--wpds-dimension-padding-lg, 16px)"
			},
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", {
				style: {
					display: "block",
					marginBottom: "var(--wpds-dimension-gap-sm, 8px)"
				},
				children: "Settings surface"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 498,
				columnNumber: 6
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DataForm, {
				data: attributes,
				fields: allFields,
				form: settingsForm,
				onChange: applyEdits
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 506,
				columnNumber: 6
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 490,
			columnNumber: 5
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 434,
		columnNumber: 3
	}, this);
}
function RatingEdit({ data, field, onChange }) {
	const value = Number(field.getValue({ item: data }) ?? 0);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack, {
		direction: "row",
		align: "center",
		children: [
			1,
			2,
			3,
			4,
			5
		].map((star) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IconButton, {
			label: `Rate ${star} of 5`,
			icon: star_filled_default,
			variant: "unstyled",
			onClick: () => onChange(field.setValue({
				item: data,
				value: star
			})),
			style: {
				cursor: "pointer",
				fontSize: "1.5em",
				opacity: star <= value ? 1 : .25,
				padding: 0
			}
		}, star, false, {
			fileName: _jsxFileName,
			lineNumber: 554,
			columnNumber: 5
		}, this))
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 552,
		columnNumber: 3
	}, this);
}
function RatedWidget({ attributes }) {
	const rating = attributes?.rating ?? 0;
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		style: {
			background: "var(--wpds-color-background-surface-neutral, #fcfcfc)",
			border: "1px solid var(--wpds-color-stroke-surface-neutral, #dbdbdb)",
			borderRadius: "var(--wpds-border-radius-md, 4px)",
			color: "var(--wpds-color-foreground-content-neutral, #1e1e1e)",
			display: "grid",
			gap: "var(--wpds-dimension-gap-md, 12px)",
			justifyItems: "center",
			padding: "var(--wpds-dimension-padding-xl, 20px)"
		},
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", {
			style: { fontSize: "1.5em" },
			children: rating > 0 ? "⭐".repeat(rating) : "Not rated yet"
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 604,
			columnNumber: 4
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: `Rated ${rating} / 5 from the prominent surface.` }, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 607,
			columnNumber: 4
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 592,
		columnNumber: 3
	}, this);
}
function WidgetWithFieldType() {
	const [attributes, setAttributes] = (0, import_react.useState)({ ...ratedWidgetType.example?.attributes });
	const titleId = (0, import_react.useId)();
	const prominentFields = (0, import_react.useMemo)(() => resolveFields(ratedWidgetType.attributes ?? []).filter((field) => field.relevance === "high"), []);
	const prominentForm = (0, import_react.useMemo)(() => ({
		layout: {
			type: "row",
			alignment: "center"
		},
		fields: prominentFields.map((field) => ({
			id: field.id,
			layout: {
				type: "regular",
				labelPosition: "none"
			}
		}))
	}), [prominentFields]);
	const applyEdits = (edits) => setAttributes((prev) => ({
		...prev,
		...edits
	}));
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		style: { maxWidth: 560 },
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Root, {
			render: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 674,
				columnNumber: 14
			}, this),
			"aria-labelledby": titleId,
			style: { background: `repeating-linear-gradient(\n\t\t\t\t\t\t45deg,\n\t\t\t\t\t\tvar(--wpds-color-background-surface-neutral, #fcfcfc),\n\t\t\t\t\t\tvar(--wpds-color-background-surface-neutral, #fcfcfc) 8px,\n\t\t\t\t\t\tvar(--wpds-color-background-surface-neutral-weak, #f4f4f4) 8px,\n\t\t\t\t\t\tvar(--wpds-color-background-surface-neutral-weak, #f4f4f4) 16px\n\t\t\t\t\t)` },
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Header, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack, {
				direction: "row",
				align: "center",
				gap: "sm",
				children: [
					ratedWidgetType.icon && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
						"aria-hidden": "true",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { icon: ratedWidgetType.icon }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 684,
							columnNumber: 9
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 683,
						columnNumber: 8
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Title, {
						id: titleId,
						render: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 689,
							columnNumber: 17
						}, this),
						style: { flexGrow: 1 },
						children: ratedWidgetType.title
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 687,
						columnNumber: 7
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DataForm, {
						data: attributes,
						fields: prominentFields,
						form: prominentForm,
						onChange: applyEdits
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 695,
						columnNumber: 7
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 681,
				columnNumber: 6
			}, this) }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 680,
				columnNumber: 5
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Content, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.Suspense, {
				fallback: null,
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WidgetRender, {
					widgetType: ratedWidgetType,
					attributes,
					setAttributes: applyEdits,
					resolveWidgetModule: resolveRatedModule
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 705,
					columnNumber: 7
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 704,
				columnNumber: 6
			}, this) }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 703,
				columnNumber: 5
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 673,
			columnNumber: 4
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 672,
		columnNumber: 3
	}, this);
}
function WidgetWithActions() {
	const titleId = (0, import_react.useId)();
	const actions = actionsWidgetType.actions ?? [];
	const [attributes] = (0, import_react.useState)({ ...actionsWidgetType.example?.attributes });
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		style: { maxWidth: 560 },
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Root, {
			render: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 764,
				columnNumber: 24
			}, this),
			"aria-labelledby": titleId,
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Header, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack, {
				direction: "row",
				align: "center",
				gap: "sm",
				children: [
					actionsWidgetType.icon && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
						"aria-hidden": "true",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { icon: actionsWidgetType.icon }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 769,
							columnNumber: 9
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 768,
						columnNumber: 8
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Title, {
						id: titleId,
						render: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 774,
							columnNumber: 17
						}, this),
						style: { flexGrow: 1 },
						children: actionsWidgetType.title
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 772,
						columnNumber: 7
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack, {
						direction: "row",
						align: "center",
						gap: "md",
						children: actions.map((action) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
							href: action.href,
							download: action.download,
							openInNewTab: action.openInNewTab,
							children: action.label
						}, action.id, false, {
							fileName: _jsxFileName,
							lineNumber: 783,
							columnNumber: 9
						}, this))
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 781,
						columnNumber: 7
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 766,
				columnNumber: 6
			}, this) }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 765,
				columnNumber: 5
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Content, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.Suspense, {
				fallback: null,
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WidgetRender, {
					widgetType: actionsWidgetType,
					attributes,
					resolveWidgetModule: resolveDemoModule
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 797,
					columnNumber: 7
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 796,
				columnNumber: 6
			}, this) }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 795,
				columnNumber: 5
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 764,
			columnNumber: 4
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 763,
		columnNumber: 3
	}, this);
}
function WidgetWithHostLink() {
	const titleId = (0, import_react.useId)();
	const actions = hostLinkWidgetType.actions ?? [];
	const [hasCapability, setHasCapability] = (0, import_react.useState)(true);
	const [lastPath, setLastPath] = (0, import_react.useState)(null);
	const [attributes] = (0, import_react.useState)({ ...hostLinkWidgetType.example?.attributes });
	(0, import_react.useEffect)(() => {
		const onNavigate = (event) => setLastPath(event.detail);
		window.addEventListener(DEMO_NAVIGATE_EVENT, onNavigate);
		return () => window.removeEventListener(DEMO_NAVIGATE_EVENT, onNavigate);
	}, []);
	let status = "Pick \"See report\": its target is a route this host owns.";
	if (!hasCapability) status = "No links capability: every action is a plain anchor.";
	else if (lastPath) status = `Client-side navigation to ${lastPath}; the document never reloaded.`;
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WidgetHostProvider, {
		value: hasCapability ? DEMO_HOST : NO_CAPABILITIES,
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack, {
			direction: "column",
			gap: "md",
			style: { maxWidth: 560 },
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack, {
				direction: "row",
				align: "center",
				gap: "md",
				wrap: "wrap",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
					variant: "outline",
					size: "compact",
					onClick: () => {
						setHasCapability(!hasCapability);
						setLastPath(null);
					},
					children: hasCapability ? "Remove the capability" : "Provide the capability"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 917,
					columnNumber: 6
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					role: "status",
					style: {
						margin: 0,
						color: "var(--wpds-color-foreground-content-neutral-weak, #707070)",
						fontSize: "var(--wpds-typography-font-size-sm, 12px)"
					},
					children: status
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 929,
					columnNumber: 6
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 916,
				columnNumber: 5
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Root, {
				render: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 941,
					columnNumber: 25
				}, this),
				"aria-labelledby": titleId,
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Header, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack, {
					direction: "column",
					gap: "sm",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack, {
						direction: "row",
						align: "center",
						gap: "sm",
						children: [hostLinkWidgetType.icon && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							"aria-hidden": "true",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { icon: hostLinkWidgetType.icon }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 947,
								columnNumber: 11
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 946,
							columnNumber: 10
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Title, {
							id: titleId,
							render: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 952,
								columnNumber: 45
							}, this),
							children: hostLinkWidgetType.title
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 952,
							columnNumber: 9
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 944,
						columnNumber: 8
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack, {
						direction: "row",
						align: "center",
						gap: "md",
						wrap: "wrap",
						children: actions.map((action) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
							download: action.download,
							openInNewTab: action.openInNewTab,
							render: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HostLink, { href: action.href }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 970,
								columnNumber: 12
							}, this),
							children: action.label
						}, action.id, false, {
							fileName: _jsxFileName,
							lineNumber: 965,
							columnNumber: 10
						}, this))
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 958,
						columnNumber: 8
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 943,
					columnNumber: 7
				}, this) }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 942,
					columnNumber: 6
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Content, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.Suspense, {
					fallback: null,
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WidgetRender, {
						widgetType: hostLinkWidgetType,
						attributes,
						resolveWidgetModule: resolveDemoModule
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 981,
						columnNumber: 8
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 980,
					columnNumber: 7
				}, this) }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 979,
					columnNumber: 6
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 941,
				columnNumber: 5
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 915,
			columnNumber: 4
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 912,
		columnNumber: 3
	}, this);
}
function WidgetWithIconReference() {
	const titleId = (0, import_react.useId)();
	const [attributes] = (0, import_react.useState)({ ...referencedIconWidgetType.example?.attributes });
	const [icon, setIcon] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		let cancelled = false;
		resolveIcon("demo/planet").then((resolved) => {
			if (!cancelled) setIcon(resolved);
		});
		return () => {
			cancelled = true;
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		style: { maxWidth: 560 },
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Root, {
			render: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 1055,
				columnNumber: 24
			}, this),
			"aria-labelledby": titleId,
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Header, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack, {
				direction: "row",
				align: "center",
				gap: "sm",
				children: [icon && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
					"aria-hidden": "true",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { icon }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 1060,
						columnNumber: 9
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 1059,
					columnNumber: 8
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Title, {
					id: titleId,
					render: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 1065,
						columnNumber: 17
					}, this),
					style: { flexGrow: 1 },
					children: referencedIconWidgetType.title
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 1063,
					columnNumber: 7
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 1057,
				columnNumber: 6
			}, this) }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 1056,
				columnNumber: 5
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Content, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.Suspense, {
				fallback: null,
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WidgetRender, {
					widgetType: referencedIconWidgetType,
					attributes,
					resolveWidgetModule: resolveDemoModule
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 1074,
					columnNumber: 7
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 1073,
				columnNumber: 6
			}, this) }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 1072,
				columnNumber: 5
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 1055,
			columnNumber: 4
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 1054,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime, _jsxFileName, WORLDS, demoWidgetType, resolveDemoModule, meta, Default, WithSettings, WithHostChrome, demoWidgetTypeWithRelevance, WithRelevance, ratedWidgetType, resolveRatedModule, WithFieldType, actionsWidgetType, WithActions, DEMO_ROUTE_PREFIX, DEMO_NAVIGATE_EVENT, DEMO_HOST, NO_CAPABILITIES, hostLinkWidgetType, WithHostLink, STORY_ICONS, referencedIconWidgetType, WithIconReference;
function init_index_story() {
	return (init_index_story = __esmMin((() => {
		init_dataform(), init_use_form_validity();
		init_react();
		init_build_module();
		init_button(), init_root(), init_header(), init_title(), init_content(), init_icon(), init_icon_button(), init_link(), init_stack();
		init_widget_render();
		init_field_types();
		init_icon_resolver();
		init_host_link(), init_widget_host();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/widget-primitives/src/components/widget-render/stories/index.story.tsx";
		WORLDS = [
			{
				value: "earth",
				label: "World",
				emoji: "🌍",
				background: "var(--wpds-color-background-surface-info-weak, #f3f9ff)"
			},
			{
				value: "moon",
				label: "Moon",
				emoji: "🌕",
				background: "var(--wpds-color-background-surface-neutral, #fcfcfc)"
			},
			{
				value: "mars",
				label: "Mars",
				emoji: "🔴",
				background: "var(--wpds-color-background-surface-caution-weak, #fff9ca)"
			},
			{
				value: "saturn",
				label: "Saturn",
				emoji: "🪐",
				background: "var(--wpds-color-background-surface-warning-weak, #fff7e1)"
			}
		];
		demoWidgetType = {
			apiVersion: 1,
			name: "demo/hello-world",
			title: "Hello World",
			description: "Minimal widget that greets worlds near and far.",
			icon: globe_default,
			renderModule: "demo/widgets/hello-world/render",
			attributes: [{
				id: "greeting",
				label: "Greeting",
				type: "text",
				isValid: { required: true }
			}, {
				id: "world",
				label: "World",
				type: "text",
				elements: WORLDS.map(({ value, label }) => ({
					value,
					label
				}))
			}],
			example: { attributes: {
				greeting: "Hello",
				world: "mars"
			} }
		};
		resolveDemoModule = async () => ({ default: DemoWidget });
		meta = {
			id: "widget-primitives-widgetrender",
			title: "Widgets/Primitives/WidgetRender",
			component: WidgetRender,
			tags: ["status-experimental"],
			parameters: {
				componentStatus: {
					status: "use-with-caution",
					whereUsed: "global",
					notes: "The `@wordpress/widget-primitives` package is under active development: APIs may change without notice. Recommended for development workflows only; not production-ready."
				},
				docs: { description: { component: `
\`WidgetRender\` is the host-agnostic entry point that renders a widget type: it resolves the widget's render component and mounts it with the current attributes.

A host provides three things:

- \`widgetType\`: the widget's metadata, as declared by its author. In a host it arrives through \`useWidgetTypes()\`.
- \`resolveWidgetModule\`: how the render component is loaded. Dynamic \`import()\` against an import map, eagerly enqueued script modules, or a custom resolver are all valid strategies.
- \`setAttributes\` (optional): grants the widget write access to its own attributes. Omit it and the widget renders read-only.
` } }
			}
		};
		Default = {
			render: () => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DefaultStory, {}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 208,
				columnNumber: 16
			}, void 0),
			parameters: { docs: { description: { story: `
The minimal contract between a host and a widget:

- \`attributes\` flow into the widget as plain data.
- The widget writes back through \`setAttributes\`, which the host provides. The "Next world" button calls it from inside the widget, and the host applies the change.

The primitive resolves the render component with \`lazy()\`, so the surrounding \`Suspense\` boundary, and with it the loading UI, is a host decision.
` } } }
		};
		WithSettings = {
			render: () => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WidgetWithSettings, {}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 281,
				columnNumber: 16
			}, void 0),
			parameters: { docs: { description: { story: `
Where Default lets the widget ask for changes, here the host edits the values itself. A widget type declares its settings as a DataViews \`Field[]\` under \`attributes\`, and that single declaration is enough for a host to build a settings UI:

- The \`DataForm\` on the right is mounted straight from the schema, with no per-widget form wiring.
- Validation comes from the same source: the \`greeting\` field is marked as required, and \`useFormValidity\` surfaces the result in the form.
- Edits flow into the rendered widget on the left through the shared attributes state.

Any host can derive its settings UI this way, whatever shape it takes.
` } } }
		};
		WithHostChrome = {
			render: () => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WidgetInHostChrome, {}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 348,
				columnNumber: 16
			}, void 0),
			parameters: { docs: { description: { story: `
Chrome belongs to the host: the widget describes itself through metadata, and each host decides how (and whether) to frame it.

In this story the chrome is a \`Card\`: its header reads the type's metadata (\`icon\`, \`title\`) and the card body frames the widget render.

The diagonal stripes mark the chrome's area; the solid panel inside is the widget render. The widget renders no header of its own; another host could place the same metadata elsewhere, or skip it.
` } } }
		};
		demoWidgetTypeWithRelevance = {
			...demoWidgetType,
			attributes: [{
				id: "greeting",
				label: "Greeting",
				type: "text",
				isValid: { required: true }
			}, {
				id: "world",
				label: "World",
				type: "text",
				elements: WORLDS.map(({ value, label }) => ({
					value,
					label
				})),
				relevance: "high"
			}]
		};
		WithRelevance = {
			render: () => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WidgetWithRelevance, {}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 519,
				columnNumber: 16
			}, void 0),
			parameters: { docs: { description: { story: `
Each attribute may carry a \`relevance\` hint (\`'high' | 'medium' | 'low'\`). The widget declares importance; the host chooses the surface. When absent, treat the hint as \`'low'\`.

**In this demo**

- \`world\` is \`relevance: 'high'\`. The host promotes it to a **prominent surface** beside the title.
- \`greeting\` has no hint (default \`'low'\`). It lives in the **settings surface** on the right.

**Takeaway**

When every attribute is \`'high'\`, a host need not expose a second settings surface. Another host could fold everything into one panel and still honor the contract.
` } } }
		};
		registerFieldType({
			name: "rating",
			baseType: "integer",
			Edit: RatingEdit
		});
		ratedWidgetType = {
			apiVersion: 1,
			name: "demo/rated",
			title: "Rated",
			description: "Declares its rating attribute by field type name.",
			icon: star_filled_default,
			renderModule: "demo/widgets/rated/render",
			attributes: [{
				id: "rating",
				type: "rating",
				label: "Rating",
				relevance: "high"
			}],
			example: { attributes: { rating: 3 } }
		};
		resolveRatedModule = async () => ({ default: RatedWidget });
		WithFieldType = {
			render: () => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WidgetWithFieldType, {}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 719,
				columnNumber: 16
			}, void 0),
			parameters: { docs: { description: { story: `
The attribute references a **field type** by name instead of carrying a control:

1. The application registers \`rating\` once (\`registerFieldType\`), binding the name to \`baseType: 'integer'\` plus a star-rating \`Edit\` control.
2. The widget declares \`{ id: 'rating', type: 'rating', relevance: 'high' }\`. Pure data: no imports, no components.
3. The host resolves the schema (hosts get this through \`useWidgetTypes\`; the story calls the resolver itself) and promotes the field to the prominent surface, where the registered control renders.

An unregistered name would degrade silently, exactly like an unknown type in DataViews. See the **Field Types** doc for the full pipeline.
` } } }
		};
		actionsWidgetType = {
			...demoWidgetType,
			actions: [{
				id: "open-docs",
				label: "Open docs",
				href: "https://developer.wordpress.org/",
				openInNewTab: true
			}, {
				id: "export-greeting",
				label: "Export greeting",
				href: new URL("data:text/plain;base64,SGVsbG8gV29ybGQK", "" + import.meta.url).href,
				download: "greeting.txt"
			}]
		};
		WithActions = {
			render: () => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WidgetWithActions, {}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 810,
				columnNumber: 16
			}, void 0),
			parameters: { docs: { description: { story: `
Beyond its data, a widget can declare \`actions\`: verbs a user can trigger, like opening docs or downloading a file. The widget names each action (\`id\`, \`label\`) and how it is fulfilled, through the key it writes (today a link \`href\`); the host mounts the primitive and decides where to put it.

**In this demo**

- The widget declares two actions: an external link (\`Open docs\`) and a download (\`Export greeting\`).
- The host renders them as links beside the title. Another host could surface them in a menu, a footer, or a command palette.

**Takeaway**

The widget names the intent and how it is fulfilled; the host mounts the primitive and places it, so the widget never knows its surface.
` } } }
		};
		DEMO_ROUTE_PREFIX = "admin.php?page=demo-dashboard&p=";
		DEMO_NAVIGATE_EVENT = "wp-widget-primitives-demo-navigate";
		DEMO_HOST = { links: {
			match: (href) => href.startsWith(DEMO_ROUTE_PREFIX) ? decodeURIComponent(href.slice(32)) : null,
			Link: (0, import_react.forwardRef)(function UnforwardedRouteLink({ path, onClick, children, ...props }, ref) {
				return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
					ref,
					href: path,
					...props,
					onClick: (event) => {
						onClick?.(event);
						event.preventDefault();
						window.dispatchEvent(new CustomEvent(DEMO_NAVIGATE_EVENT, { detail: path }));
					},
					children
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 844,
					columnNumber: 3
				}, this);
			})
		} };
		NO_CAPABILITIES = {};
		hostLinkWidgetType = {
			...demoWidgetType,
			actions: [{
				id: "see-report",
				label: "See report",
				href: `${DEMO_ROUTE_PREFIX}${encodeURIComponent("/reports?by=world")}`
			}, ...actionsWidgetType.actions ?? []]
		};
		WithHostLink = {
			render: () => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WidgetWithHostLink, {}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 995,
				columnNumber: 16
			}, void 0),
			parameters: { docs: { description: { story: `
The widget declares where to go; the application decides how to get there. \`HostLink\` is the anchor that carries the decision: it reads the \`links\` capability, mounts the application's own link for a target \`match\` recognizes, and a plain anchor for everything else.

**In this demo**

- The host provides a router that owns \`admin.php?page=demo-dashboard&p=…\`. "See report" targets one of its routes, so it navigates client-side and the status line records the path; the document never reloads.
- "Open docs" opens another origin in a new tab and "Export greeting" downloads a file. Neither routes: a new document leaves the application, so \`HostLink\` keeps the plain anchor without asking the host.
- **Remove the capability** drops \`links\` from the host bag. The declarations do not change, and every action falls back to a plain anchor.

**Takeaway**

Consumers write one composition, \`render={ <HostLink href={ action.href } /> }\` on their UI link, and never branch on the capability themselves. \`Link\`, \`ButtonLink\` and \`Menu.LinkItem\` take the same anchor props, so the same line serves all three.
` } } }
		};
		STORY_ICONS = { "demo/planet": globe_default };
		registerIconResolver(async (reference) => STORY_ICONS[reference] ?? null);
		referencedIconWidgetType = {
			...demoWidgetType,
			icon: void 0
		};
		WithIconReference = {
			render: () => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WidgetWithIconReference, {}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 1087,
				columnNumber: 16
			}, void 0),
			parameters: { docs: { description: { story: `
The widget declares its icon as a **registered icon name** instead of a rendered element:

1. The application registers one **icon resolver** (\`registerIconResolver\`), closing over its icon source. On WordPress that source is the \`icon\` REST entity; here, a local catalog.
2. The widget declares \`"icon": "demo/planet"\` in \`widget.json\`. Pure data: no imports, no elements.
3. \`useWidgetTypes\` resolves the reference while assembling each \`WidgetType\` (the story calls the resolver itself), so the host receives a renderable element and never sees the name.

An unresolvable reference degrades to no icon. See the **Icons** doc for the full pipeline.
` } } }
		};
		Default.parameters = {
			...Default.parameters,
			docs: {
				...Default.parameters?.docs,
				source: {
					originalSource: "{\n  render: () => <DefaultStory />,\n  parameters: {\n    docs: {\n      description: {\n        story: `\nThe minimal contract between a host and a widget:\n\n- \\`attributes\\` flow into the widget as plain data.\n- The widget writes back through \\`setAttributes\\`, which the host provides. The \"Next world\" button calls it from inside the widget, and the host applies the change.\n\nThe primitive resolves the render component with \\`lazy()\\`, so the surrounding \\`Suspense\\` boundary, and with it the loading UI, is a host decision.\n`\n      }\n    }\n  }\n}",
					...Default.parameters?.docs?.source
				}
			}
		};
		WithSettings.parameters = {
			...WithSettings.parameters,
			docs: {
				...WithSettings.parameters?.docs,
				source: {
					originalSource: "{\n  render: () => <WidgetWithSettings />,\n  parameters: {\n    docs: {\n      description: {\n        story: `\nWhere Default lets the widget ask for changes, here the host edits the values itself. A widget type declares its settings as a DataViews \\`Field[]\\` under \\`attributes\\`, and that single declaration is enough for a host to build a settings UI:\n\n- The \\`DataForm\\` on the right is mounted straight from the schema, with no per-widget form wiring.\n- Validation comes from the same source: the \\`greeting\\` field is marked as required, and \\`useFormValidity\\` surfaces the result in the form.\n- Edits flow into the rendered widget on the left through the shared attributes state.\n\nAny host can derive its settings UI this way, whatever shape it takes.\n`\n      }\n    }\n  }\n}",
					...WithSettings.parameters?.docs?.source
				}
			}
		};
		WithHostChrome.parameters = {
			...WithHostChrome.parameters,
			docs: {
				...WithHostChrome.parameters?.docs,
				source: {
					originalSource: "{\n  render: () => <WidgetInHostChrome />,\n  parameters: {\n    docs: {\n      description: {\n        story: `\nChrome belongs to the host: the widget describes itself through metadata, and each host decides how (and whether) to frame it.\n\nIn this story the chrome is a \\`Card\\`: its header reads the type's metadata (\\`icon\\`, \\`title\\`) and the card body frames the widget render.\n\nThe diagonal stripes mark the chrome's area; the solid panel inside is the widget render. The widget renders no header of its own; another host could place the same metadata elsewhere, or skip it.\n`\n      }\n    }\n  }\n}",
					...WithHostChrome.parameters?.docs?.source
				}
			}
		};
		WithRelevance.parameters = {
			...WithRelevance.parameters,
			docs: {
				...WithRelevance.parameters?.docs,
				source: {
					originalSource: "{\n  render: () => <WidgetWithRelevance />,\n  parameters: {\n    docs: {\n      description: {\n        story: `\nEach attribute may carry a \\`relevance\\` hint (\\`'high' | 'medium' | 'low'\\`). The widget declares importance; the host chooses the surface. When absent, treat the hint as \\`'low'\\`.\n\n**In this demo**\n\n- \\`world\\` is \\`relevance: 'high'\\`. The host promotes it to a **prominent surface** beside the title.\n- \\`greeting\\` has no hint (default \\`'low'\\`). It lives in the **settings surface** on the right.\n\n**Takeaway**\n\nWhen every attribute is \\`'high'\\`, a host need not expose a second settings surface. Another host could fold everything into one panel and still honor the contract.\n`\n      }\n    }\n  }\n}",
					...WithRelevance.parameters?.docs?.source
				}
			}
		};
		WithFieldType.parameters = {
			...WithFieldType.parameters,
			docs: {
				...WithFieldType.parameters?.docs,
				source: {
					originalSource: "{\n  render: () => <WidgetWithFieldType />,\n  parameters: {\n    docs: {\n      description: {\n        story: `\nThe attribute references a **field type** by name instead of carrying a control:\n\n1. The application registers \\`rating\\` once (\\`registerFieldType\\`), binding the name to \\`baseType: 'integer'\\` plus a star-rating \\`Edit\\` control.\n2. The widget declares \\`{ id: 'rating', type: 'rating', relevance: 'high' }\\`. Pure data: no imports, no components.\n3. The host resolves the schema (hosts get this through \\`useWidgetTypes\\`; the story calls the resolver itself) and promotes the field to the prominent surface, where the registered control renders.\n\nAn unregistered name would degrade silently, exactly like an unknown type in DataViews. See the **Field Types** doc for the full pipeline.\n`\n      }\n    }\n  }\n}",
					...WithFieldType.parameters?.docs?.source
				}
			}
		};
		WithActions.parameters = {
			...WithActions.parameters,
			docs: {
				...WithActions.parameters?.docs,
				source: {
					originalSource: "{\n  render: () => <WidgetWithActions />,\n  parameters: {\n    docs: {\n      description: {\n        story: `\nBeyond its data, a widget can declare \\`actions\\`: verbs a user can trigger, like opening docs or downloading a file. The widget names each action (\\`id\\`, \\`label\\`) and how it is fulfilled, through the key it writes (today a link \\`href\\`); the host mounts the primitive and decides where to put it.\n\n**In this demo**\n\n- The widget declares two actions: an external link (\\`Open docs\\`) and a download (\\`Export greeting\\`).\n- The host renders them as links beside the title. Another host could surface them in a menu, a footer, or a command palette.\n\n**Takeaway**\n\nThe widget names the intent and how it is fulfilled; the host mounts the primitive and places it, so the widget never knows its surface.\n`\n      }\n    }\n  }\n}",
					...WithActions.parameters?.docs?.source
				}
			}
		};
		WithHostLink.parameters = {
			...WithHostLink.parameters,
			docs: {
				...WithHostLink.parameters?.docs,
				source: {
					originalSource: "{\n  render: () => <WidgetWithHostLink />,\n  parameters: {\n    docs: {\n      description: {\n        story: `\nThe widget declares where to go; the application decides how to get there. \\`HostLink\\` is the anchor that carries the decision: it reads the \\`links\\` capability, mounts the application's own link for a target \\`match\\` recognizes, and a plain anchor for everything else.\n\n**In this demo**\n\n- The host provides a router that owns \\`admin.php?page=demo-dashboard&p=…\\`. \"See report\" targets one of its routes, so it navigates client-side and the status line records the path; the document never reloads.\n- \"Open docs\" opens another origin in a new tab and \"Export greeting\" downloads a file. Neither routes: a new document leaves the application, so \\`HostLink\\` keeps the plain anchor without asking the host.\n- **Remove the capability** drops \\`links\\` from the host bag. The declarations do not change, and every action falls back to a plain anchor.\n\n**Takeaway**\n\nConsumers write one composition, \\`render={ <HostLink href={ action.href } /> }\\` on their UI link, and never branch on the capability themselves. \\`Link\\`, \\`ButtonLink\\` and \\`Menu.LinkItem\\` take the same anchor props, so the same line serves all three.\n`\n      }\n    }\n  }\n}",
					...WithHostLink.parameters?.docs?.source
				}
			}
		};
		WithIconReference.parameters = {
			...WithIconReference.parameters,
			docs: {
				...WithIconReference.parameters?.docs,
				source: {
					originalSource: "{\n  render: () => <WidgetWithIconReference />,\n  parameters: {\n    docs: {\n      description: {\n        story: `\nThe widget declares its icon as a **registered icon name** instead of a rendered element:\n\n1. The application registers one **icon resolver** (\\`registerIconResolver\\`), closing over its icon source. On WordPress that source is the \\`icon\\` REST entity; here, a local catalog.\n2. The widget declares \\`\"icon\": \"demo/planet\"\\` in \\`widget.json\\`. Pure data: no imports, no elements.\n3. \\`useWidgetTypes\\` resolves the reference while assembling each \\`WidgetType\\` (the story calls the resolver itself), so the host receives a renderable element and never sees the name.\n\nAn unresolvable reference degrades to no icon. See the **Icons** doc for the full pipeline.\n`\n      }\n    }\n  }\n}",
					...WithIconReference.parameters?.docs?.source
				}
			}
		};
	})))();
}
//#endregion
init_index_story();
export { Default, WithActions, WithFieldType, WithHostChrome, WithHostLink, WithIconReference, WithRelevance, WithSettings, meta as default };
