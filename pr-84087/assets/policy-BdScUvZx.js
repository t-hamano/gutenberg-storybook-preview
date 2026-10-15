import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { h as init_blocks, l as Markdown, u as Meta } from "./blocks-BdcQOi1H.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C1RZKCc6.js";
import { i as useMDXComponents, r as init_lib } from "./react-FgZpKSX8.js";
//#region ../packages/widget-dashboard/src/stories/policy.md?raw
var policy_default;
function init_policy() {
	return (init_policy = __esmMin((() => {
		policy_default = "# Policy\n\n<div class=\"callout callout-alert\">\nThis package is still experimental. “Experimental” means this is an early implementation subject to drastic and breaking changes.\n</div>\n\nThe engine knows which operations a user can perform on a dashboard: enter customize mode, reset the layout to default, insert a widget type, remove, move, resize, or edit an instance. It does not know who the user is or what the application allows. `WidgetDashboard.Policy` is the seam through which the application answers.\n\n![The engine asks one question per operation via a request that names the operation and its subject. The application, which owns the permission model, answers via the policy seam with a single callback. The engine resolves that answer once, and every surface follows it: the Customize button and the command palette, the inserter, the tile controls, the drag and resize gestures. Widgets are never asked; without edit they render read-only. Without a policy, every operation is allowed.](./assets/policy-seam.svg)\n\n## One question, one place\n\n`canPerform( request )` indicates whether an operation is allowed. The request names the operation and carries its subject, so a branch on `request.operation` narrows the rest of the object.\n\n```ts\ntype DashboardOperationRequest =\n	| { operation: 'customize' }\n	| { operation: 'reset' }\n	| { operation: 'insert'; widgetType: WidgetType }\n	| {\n			operation: 'remove' | 'move' | 'resize' | 'edit';\n			widget: DashboardWidget;\n			widgetType?: WidgetType;\n	  };\n```\n\nThe engine resolves the policy once, in its provider, and every surface asks for that resolved answer.\n\nThe Customize button, the command palette entries, the tile controls, and the inserter never read the provider itself, so additional policy sources join at the same point without touching the surfaces.\n\n## The operations\n\n| Operation   | Subject                 | What it gates                                                                                                                                                                                     |\n| ----------- | ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |\n| `customize` | none                    | The Customize button, the `core/dashboard/customize` command, the `core/dashboard/add-widgets` command outside edit mode, and the automatic entry into customize mode on an empty layout.         |\n| `reset`     | none                    | The Reset to default entry in the overflow menu, the `core/dashboard/reset-to-default` command, and the confirmation prompt they open. A denied reset is hidden, not disabled.                    |\n| `insert`    | `widgetType`            | Whether the inserter offers the type; a rejected type keeps rendering where already placed. The Add widget button and command show only while some registered type is insertable.                 |\n| `remove`    | `widget`, `widgetType?` | The Remove control in customize mode.                                                                                                                                                             |\n| `move`      | `widget`, `widgetType?` | Dragging the tile in customize mode. A denied tile is pinned: it holds its index while the other tiles reorder around it; a change ahead of it can still reflow the cell it lands in.             |\n| `resize`    | `widget`, `widgetType?` | The resize handle and the width menu.                                                                                                                                                             |\n| `edit`      | `widget`, `widgetType?` | Attribute editing: the inline fields and the settings trigger in the header, the settings surface, and the widget's `setAttributes`, which is absent when denied so the widget renders read-only. |\n\nThe vocabulary grows with what the engine enforces. Return `true` for operations you do not govern: policies compose restrictively, so a default `false` would deny every operation added later.\n\nThe staging layer enforces the same answers. Every mutation is diffed per instance on arrival, whichever trigger staged it, and each change the policy denies is re-asserted before it lands: a removed locked instance returns at its index, a denied move holds its index, a denied resize keeps its spans, a denied edit keeps its attributes, and a new instance of a rejected type is dropped. What the interface hides, the staging layer rejects.\n\nInstance operations carry `widgetType` only while that type is still in `widgetTypes`. A plugin that is gone, or a render module that failed to load, leaves the field absent: the engine still asks, because the instance is still on the board, but a policy that keys its locks on the type has nothing to match. Locks that must survive that case belong on the instance itself. The same absence is why a new instance of an unregistered type is not dropped: there is no type to ask about.\n\n## Composition\n\nThe provider mounts around `<WidgetDashboard>`, not inside it.\nThe engine mounts the inserter outside the `children` subtree, so a policy placed inside `children` has no effect. One provider can cover several dashboards; one dashboard can have its own.\n\nNested policies only narrow. An operation is allowed only if every enclosing policy allows it; an inner policy cannot re-grant what an outer one denied. Without a policy, every operation is allowed.\n\nThis is the opposite of the host's capabilities, deliberately: `WidgetHostProvider` merges what it inherits because abilities accumulate; the policy ANDs because permissions only narrow.\n\n## What it is not\n\n-   **Not `editMode`.** That is a mode the consumer controls, on or off. The policy determines whether the user may enter it.\n-   **Not the widget's permissions.** A widget asks the server about its own entities via core-data and reflects the response. The policy never asks the widget anything; the widget only sees one consequence, the same it would see in any read-only host: without `edit`, it receives no `setAttributes`.\n-   **Not security.** The policy determines what the dashboard offers, not what the server accepts. A host that must enforce permissions does so where the layout persists.\n\n## Providing it\n\nThe callback operates over application state and is called during render, so keep it synchronous and memoize it when it depends on state.\n\nA new function re-evaluates the dashboard, even with the inserter open.\n\n```tsx\nconst canPerform = useMemo< CanPerformDashboardOperation >(\n	() => ( request ) => {\n		switch ( request.operation ) {\n			case 'customize':\n				return canEditLayout;\n			case 'insert':\n				return request.widgetType.category === activeSection;\n			case 'remove':\n				return ! request.widget.attributes?.pinned;\n			default:\n				return true;\n		}\n	},\n	[ canEditLayout, activeSection ]\n);\n\n<WidgetDashboard.Policy canPerform={ canPerform }>\n	<WidgetDashboard { ...props } />\n</WidgetDashboard.Policy>;\n```\n\nSee the _Policy_ story in the Playground: three user profiles (Viewer, Arranger, Owner) and a section-scoped inserter, composed inside an admin `Page`. The command palette is mounted there as well; press ⌘K to check which commands each profile keeps.\n";
	})))();
}
//#endregion
//#region ../packages/widget-dashboard/src/stories/assets/policy-seam.svg
var policy_seam_default;
function init_policy_seam() {
	return (init_policy_seam = __esmMin((() => {
		policy_seam_default = new URL("policy-seam-Adv25yL1.svg", import.meta.url).href;
	})))();
}
//#endregion
//#region ../packages/widget-dashboard/src/stories/policy.mdx
function _createMdxContent(props) {
	return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		(0, import_jsx_runtime.jsx)(Meta, {
			id: "widget-dashboard-policy",
			title: "Widgets/Dashboard/Policy"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(Markdown, { children: policy_default.replace("./assets/policy-seam.svg", policy_seam_default) })
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
function init_policy$1() {
	return (init_policy$1 = __esmMin((() => {
		import_jsx_runtime = require_jsx_runtime();
		init_lib();
		init_blocks();
		init_policy();
		init_policy_seam();
	})))();
}
//#endregion
init_policy$1();
export { MDXContent as default };
