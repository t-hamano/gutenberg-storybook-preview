import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { h as init_blocks, l as Markdown, u as Meta } from "./blocks-BdcQOi1H.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C1RZKCc6.js";
import { i as useMDXComponents, r as init_lib } from "./react-FgZpKSX8.js";
//#region ../packages/widget-primitives/src/stories/actions.md?raw
var actions_default;
function init_actions() {
	return (init_actions = __esmMin((() => {
		actions_default = "# Actions\n\n<div class=\"callout callout-alert\">\nThis package is still experimental. “Experimental” means this is an early implementation subject to drastic and breaking changes.\n</div>\n\nA widget declares its data through `attributes`; it declares the verbs a user can trigger through `actions`.\n\nAn action is something to _do_: open a report, download a file, etc. Like other widgets' props, it's declarative and serializable, so it can ride in `widget.json`.\n\nThe widget names the intent and, through the key it writes, how the action is fulfilled. Two decisions are left, and both are the host's: which primitive to mount, and where to put it.\n\n![One action declaration. The key the widget writes fixes the fulfillment, what triggering the action means. The host is left with two decisions: the materialization, which primitive it mounts, and the placement, where the affordance goes.](./assets/action-axes.svg)\n\n## Envelope and fulfillment\n\nEvery action carries an **envelope** and exactly one **fulfillment**, which says what triggering it means. The envelope is the action's identity: an `id`, a `label`, and optionally an `icon` (a registered icon name) and a `relevance` hint.\n\nThe fulfillment is named by the key that carries it, not by a separate discriminator. A declaration has one key today, `href`, so its only fulfillment is a link: triggering the action goes to a target.\n\n```ts\n{\n	id: 'view-report',\n	label: __( 'View report' ),\n	href: 'admin.php?page=reports',\n}\n```\n\n`href`: an absolute URL, an admin `.php` entry point, a root-relative path, or a file next to the widget, resolved to a plugin URL on the server. `data:` and `javascript:` hrefs are rejected at registration.\n\nTwo more keys belong to the link, not to the envelope, so they only mean something alongside an `href`:\n\n-   `download`: downloads instead of navigating unless `false`; a string sets the filename, `true` or `''` keeps the original.\n-   `openInNewTab`: open in a new tab.\n\n```ts\n{\n	id: 'export',\n	label: __( 'Export CSV' ),\n	href: 'https://example.com/reports/monthly.csv',\n	download: 'monthly-report.csv',\n}\n```\n\n## Materialization is the host's\n\nThe fulfillment says what triggering means. It does not say which control the user clicks. The host picks that per surface, and the same declaration can end up as a menu item, a footer link, or a palette command.\n\n![The same action declaring a link target, materialized by three surfaces: a More menu and a footer mount a real anchor and keep link semantics, while a command palette has no anchor to mount and degrades to a command.](./assets/action-surfaces.svg)\n\nA link fulfillment carries one obligation: **where the surface allows a link primitive, the host must mount one**. A real link keeps middle-click and copy address, which routing the same target through a click handler destroys. That is why a link is a first-class fulfillment rather than a shorthand for one.\n\nIts accessible role follows the surface rather than the element: mounted inside the dashboard's \"More\" menu, the anchor is exposed as a menu item, not as a link.\n\nWhich link primitive is also the host's call. The widget declares _where_ to go; the host decides _how to get there_. A target inside the host's own routes can use its router's link, which is still an anchor and keeps the same behaviors; anything else is a plain anchor and a full page load. The widget cannot make that call: whether a target is reachable in-page depends on the routes the host registered, which changes per host and over time. The host supplies that recognition and its link primitive through the widget host seam, as the `links` capability.\n\nWhere no link primitive fits, as in a command palette, the host mounts what the surface offers and those semantics degrade. That is a real cost of reaching beyond the widget, not an oversight.\n\n## Placement is the host's\n\nThe widget lists its actions; it never specifies where they go. The host maps them to its surfaces: a dashboard might gather them in a \"More\" menu, a footer, or a command palette.\n\n`relevance` carries the widget's side of that decision: `'high'` marks an action worth the most prominent surface, `'medium'` one worth persistent but compact visibility, and `'low'` (the default) the rest. Attributes use the same vocabulary: the widget declares intent, and the host owns the surface.\n\nThe dashboard maps it as: `'high'` as text links in a persistent footer, `'medium'` beside them as compact icon affordances, the rest in the \"More\" menu. Full-bleed widgets keep every action in the menu.\n\n## Runtime actions\n\nA declaration is static: it exists before the widget mounts. A label with a count, a target that follows the instance's attributes, or a download of the rows on screen only exist afterwards. A mounted widget declares those through `useWidgetActions`.\n\n```ts\nconst hosted = useWidgetActions(\n	rows.length > 0\n		? [\n				{\n					id: 'export',\n					label: __( 'Download CSV' ),\n					relevance: 'medium',\n					callback: () => downloadBlob( 'report.csv', toCsv( rows ) ),\n				},\n			]\n		: []\n);\n```\n\nA runtime action takes the same envelope and one fulfillment: `href`, or `callback`, a function the host runs. A promise it returns keeps the action pending until it settles; reporting the outcome stays the callback's.\n\n-   **Each call declares its own set.** The list replaces that call's previous one, so an action that does not apply is left out; it is compared by value and needs no memoization. Calls from several components of one widget compose, and the last declaration of an `id` wins.\n-   **A shared `id` upgrades the declared action.** The runtime action takes its place and keeps the declared `icon` and `relevance` it leaves out: a declared \"Details\" becomes \"Review 3 items\" once the counts arrive. A declared action is never withdrawn, so one that only applies sometimes is declared at runtime alone.\n-   **Placement stays the host's.** Runtime actions ride the same `relevance` scale.\n\nThe hook returns `false` under a host without the `actions` capability, and the widget keeps rendering its own affordance.\n";
	})))();
}
//#endregion
//#region ../packages/widget-primitives/src/stories/assets/action-axes.svg
var action_axes_default;
function init_action_axes() {
	return (init_action_axes = __esmMin((() => {
		action_axes_default = new URL("action-axes-C4rdohtN.svg", import.meta.url).href;
	})))();
}
//#endregion
//#region ../packages/widget-primitives/src/stories/assets/action-surfaces.svg
var action_surfaces_default;
function init_action_surfaces() {
	return (init_action_surfaces = __esmMin((() => {
		action_surfaces_default = new URL("action-surfaces-dDlvaQNr.svg", import.meta.url).href;
	})))();
}
//#endregion
//#region ../packages/widget-primitives/src/stories/actions.mdx
function _createMdxContent(props) {
	return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		(0, import_jsx_runtime.jsx)(Meta, {
			id: "widget-primitives-actions",
			title: "Widgets/Primitives/Actions"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(Markdown, { children: actions_default.replace("./assets/action-axes.svg", action_axes_default).replace("./assets/action-surfaces.svg", action_surfaces_default) })
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
function init_actions$1() {
	return (init_actions$1 = __esmMin((() => {
		import_jsx_runtime = require_jsx_runtime();
		init_lib();
		init_blocks();
		init_actions();
		init_action_axes();
		init_action_surfaces();
	})))();
}
//#endregion
init_actions$1();
export { MDXContent as default };
