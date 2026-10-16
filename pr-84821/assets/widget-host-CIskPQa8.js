import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { h as init_blocks, l as Markdown, u as Meta } from "./blocks-CCpJx-rT.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C1RZKCc6.js";
import { i as useMDXComponents, r as init_lib } from "./react-FgZpKSX8.js";
//#region ../packages/widget-primitives/src/stories/widget-host.md?raw
var widget_host_default;
function init_widget_host() {
	return (init_widget_host = __esmMin((() => {
		widget_host_default = "# Widget host\n\n<div class=\"callout callout-alert\">\nThis package is still experimental. “Experimental” means this is an early implementation subject to drastic and breaking changes.\n</div>\n\nA widget renders inside a host, and the host inside an application. Some of what an affordance needs, only the application knows: which router owns a URL, for one. `WidgetHostProvider` and `useWidgetHost` are that seam.\n\n![A widget declares a link action as a portable URL. The host renders the widget and materializes the affordance. The application owns the router and provides the links capability through the seam: match recognizes its own routes, Link is its router's primitive. On a match the host mounts the route link; without the capability the same declaration mounts a plain anchor.](./assets/widget-host-seam.svg)\n\n## Contract\n\n`WidgetHost` is a bag of optional capabilities. An absent capability degrades to the host-agnostic behavior, so consumers guard each one and never assume it exists.\n\nThe provider merges its value over the inherited one, so an application can mount a base host once and layer capabilities per subtree. Reading without any provider yields `{}`.\n\nThe application mounts the provider, wrapping the dashboard or whatever surface renders widgets, and the rendering engine keeps no dependency on the application's router. A host nests one only to bind a capability to the instance it renders, as `actions` below.\n\n## The `links` capability\n\n```ts\nlinks: {\n	match: ( href: string ) => string | null;\n	// The router's link primitive. Must render a real anchor and\n	// forward `ref` to it. `path` replaces `href`.\n	Link: ComponentType<\n		{ path: string } & Omit< ComponentPropsWithoutRef< 'a' >, 'href' > &\n			RefAttributes< HTMLAnchorElement >\n	>;\n}\n```\n\n`match` answers one question: does this href target one of the application's own routes? On a hit it returns the in-app route, `'/sales?by=day'`, path and query as the router takes them, and the consumer mounts `Link` with it, so the navigation is client-side. On `null` the consumer falls back to a plain anchor.\n\nThe action declaration does not change either way. A widget declares the portable URL of its target, `admin.php?page=analytics&p=%2Fsales%3Fby%3Dday`, the route encoded inside `p` with its query; in the owning application that materializes as a router link, everywhere else as a plain anchor that full-loads to the same place. Recognition is the application's: reachability depends on the routes it registered, which change per application and over time.\n\n## The `actions` capability\n\n```ts\nactions: {\n	declare: ( actions: WidgetRuntimeAction[] ) => void;\n}\n```\n\n`declare` replaces the runtime actions of one instance; an empty list withdraws them. The host binds it to the instance it renders, so the widget never names which instance it is. `WidgetRender` joins what every `useWidgetActions` call under it declares, so `declare` always receives the whole list.\n\nThe list carries data, not UI: placement and materialization stay the host's. The widget's side is `useWidgetActions`, and the Actions page covers how the list joins the declared actions.\n\n## Providing it\n\nA route that renders the dashboard supplies its matcher and its router's link. The value's identity drives the provider's memoized merge, so keep it stable: a module constant when it is static, `useMemo` when it derives from component state:\n\n```tsx\nconst host: WidgetHost = {\n	links: { match: matchDashboardHref, Link: RouteLink },\n};\n\n<WidgetHostProvider value={ host }>\n	<WidgetDashboard { ...props } />\n</WidgetHostProvider>;\n```\n\n### `Link` and its ref\n\nConsumers compose `Link` into menu items and tooltip triggers through render props, and both reach the anchor through the ref. A link that drops it satisfies the type and fails in use: keyboard navigation skips the menu item, and the tooltip loses its anchor. Under React 18 that means `forwardRef`; under React 19, where `ref` arrives as a prop, spreading the props onto the anchor is enough.\n\nOne test pins it for a host's own link:\n\n```tsx\nconst ref = createRef< HTMLAnchorElement >();\nrender(\n	<RouteLink ref={ ref } path=\"/reports\">\n		Reports\n	</RouteLink>\n);\n\nexpect( ref.current ).toBe( screen.getByRole( 'link', { name: 'Reports' } ) );\n```\n\n### `actions`, bound per instance\n\nA host that places actions nests a provider where it mounts each render. The merge keeps `links` in reach.\n\n```tsx\nconst host = useMemo< WidgetHost >(\n	() => ( { actions: { declare: ( actions ) => place( uuid, actions ) } } ),\n	[ place, uuid ]\n);\n\n<WidgetHostProvider value={ host }>\n	<WidgetRender { ...props } />\n</WidgetHostProvider>;\n```\n\nA host that mounts an instance twice, as a drag preview does, keeps each render's list apart, so one unmounting does not withdraw the other's.\n\n## Consuming it\n\nMost consumers touch the seam here and nowhere else. `HostLink` reads the capability and decides: the host's `Link` on a match, a plain anchor otherwise. A new document never routes, because a router link buys nothing for it, and `HostLink` reads that off the anchor props: a `download` other than `false`, or the `_blank` target a UI link resolves `openInNewTab` into.\n\nIt composes through the `render` prop of a UI link, which merges its own anchor props in:\n\n```tsx\n<Link\n	download={ action.download }\n	openInNewTab={ action.openInNewTab }\n	render={ <HostLink href={ action.href } /> }\n>\n	{ action.label }\n</Link>\n```\n\n`Link`, `ButtonLink` and `Menu.LinkItem` take the same anchor props, so one composition serves all three. A consumer that needs the answer before it renders reads `match` itself.\n\n`useWidgetHost` stays available for a capability no component covers yet, or an answer a consumer needs before it renders.\n\nThe **WithHostLink** story runs it against a demo router, with a toggle that removes the capability from the host bag.\n\nSee the Actions page for the materialization rules this serves: the widget declares where to go, the host decides how to get there.\n";
	})))();
}
//#endregion
//#region ../packages/widget-primitives/src/stories/assets/widget-host-seam.svg
var widget_host_seam_default;
function init_widget_host_seam() {
	return (init_widget_host_seam = __esmMin((() => {
		widget_host_seam_default = new URL("widget-host-seam-DpmzLlTj.svg", import.meta.url).href;
	})))();
}
//#endregion
//#region ../packages/widget-primitives/src/stories/widget-host.mdx
function _createMdxContent(props) {
	return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		(0, import_jsx_runtime.jsx)(Meta, {
			id: "widget-primitives-widget-host",
			title: "Widgets/Primitives/Widget Host"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(Markdown, { children: widget_host_default.replace("./assets/widget-host-seam.svg", widget_host_seam_default) })
	] });
}
function MDXContent(props = {}) {
	const { wrapper: MDXLayout } = {
		...useMDXComponents(),
		...props.components
	};
	return MDXLayout ? (0, import_jsx_runtime.jsx)(MDXLayout, {
		...props,
		children: (0, import_jsx_runtime.jsx)(_createMdxContent, { ...props })
	}) : _createMdxContent(props);
}
var import_jsx_runtime;
function init_widget_host$1() {
	return (init_widget_host$1 = __esmMin((() => {
		import_jsx_runtime = require_jsx_runtime();
		init_lib();
		init_blocks();
		init_widget_host();
		init_widget_host_seam();
	})))();
}
//#endregion
init_widget_host$1();
export { MDXContent as default };
