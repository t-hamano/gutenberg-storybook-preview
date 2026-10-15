import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as init_implementation, t as __dangerousOptInToUnstableAPIsOnlyForCoreModules } from "./implementation-Cv8RPUVn.js";
import { i as _x, t as init_build_module } from "./build-module-v04us4E2.js";
import { i as init_link, n as privateApis, r as Link, t as init_private_apis } from "./private-apis-Cp7p_iYO.js";
import { n as init_text, t as Text } from "./text-DdbcQl-E.js";
import { n as init_link$1, t as Link$1 } from "./link-DMYAq1wz.js";
import { n as init_stack, t as Stack } from "./stack-DCjz3kq7.js";
//#region ../packages/admin-ui/src/breadcrumbs/style.module.css
var list, current, separator, style_module_default;
function init_style_module() {
	return (init_style_module = __esmMin((() => {
		list = "_list_12wum_1";
		current = "_current_12wum_9";
		separator = "_separator_12wum_29";
		style_module_default = {
			list,
			current,
			separator
		};
	})))();
}
//#endregion
//#region ../packages/admin-ui/src/breadcrumbs/index.tsx
var import_jsx_dev_runtime$1, _jsxFileName$1, Breadcrumbs;
function init_breadcrumbs() {
	return (init_breadcrumbs = __esmMin((() => {
		init_link();
		init_build_module();
		init_link$1(), init_stack(), init_text();
		init_style_module();
		import_jsx_dev_runtime$1 = require_jsx_dev_runtime();
		_jsxFileName$1 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/admin-ui/src/breadcrumbs/index.tsx";
		Breadcrumbs = ({ items }) => {
			if (!items.length) return null;
			const precedingItems = items.slice(0, -1);
			const lastItem = items[items.length - 1];
			{
				const invalidItem = precedingItems.find((item) => !item.to);
				if (invalidItem) throw new Error(`Breadcrumbs: item "${invalidItem.label}" is missing a \`to\` prop. All items except the last one must have a \`to\` prop.`);
			}
			return /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)("nav", {
				"aria-label": _x("Breadcrumbs", "aria label"),
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(Stack, {
					render: /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)("ul", {}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 49,
						columnNumber: 14
					}, void 0),
					direction: "row",
					align: "center",
					className: style_module_default.list,
					children: [precedingItems.map((item, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)("li", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(Text, {
						variant: "body-lg",
						render: /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(Link$1, {
							tone: "neutral",
							render: /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(Link, { to: item.to }, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 61,
								columnNumber: 19
							}, void 0)
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 59,
							columnNumber: 9
						}, void 0),
						children: item.label
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 56,
						columnNumber: 7
					}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(Text, {
						variant: "body-lg",
						"aria-hidden": "true",
						className: style_module_default.separator,
						children: "/"
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 67,
						columnNumber: 7
					}, void 0)] }, index, true, {
						fileName: _jsxFileName$1,
						lineNumber: 55,
						columnNumber: 6
					}, void 0)), /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)("li", { children: lastItem.to ? /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(Text, {
						variant: "body-lg",
						render: /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(Link$1, {
							tone: "neutral",
							render: /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(Link, { to: lastItem.to }, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 83,
								columnNumber: 19
							}, void 0)
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 81,
							columnNumber: 9
						}, void 0),
						children: lastItem.label
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 78,
						columnNumber: 7
					}, void 0) : /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(Text, {
						variant: "heading-lg",
						render: /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)("h1", {}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 92,
							columnNumber: 17
						}, void 0),
						className: style_module_default.current,
						children: lastItem.label
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 90,
						columnNumber: 7
					}, void 0) }, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 76,
						columnNumber: 5
					}, void 0)]
				}, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 48,
					columnNumber: 4
				}, void 0)
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 47,
				columnNumber: 3
			}, void 0);
		};
		try {
			Breadcrumbs.__docgenInfo = {
				"description": "Renders a breadcrumb navigation trail.\n\nAll items except the last one must provide a `to` prop for navigation.\nIn development mode, an error is thrown when a non-last item is missing `to`.\nThe last item represents the current page and its `to` prop is optional.\nOnly the last item (when it has no `to` prop) is rendered as an `h1`.",
				"displayName": "Breadcrumbs",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/admin-ui/src/breadcrumbs/index.tsx",
				"methods": [],
				"props": {
					"items": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/admin-ui/src/breadcrumbs/types.ts",
							"name": "BreadcrumbsProps"
						}],
						"description": "An array of items to display in the breadcrumb trail.\nThe last item is considered the current item and has an optional `to` prop.\nAll preceding items must have a `to` prop — in development mode,\nan error is thrown when this requirement is not met.",
						"name": "items",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/admin-ui/src/breadcrumbs/types.ts",
							"name": "BreadcrumbsProps"
						},
						"required": true,
						"tags": {},
						"type": { "name": "BreadcrumbItem[]" }
					},
					"showCurrentItem": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/admin-ui/src/breadcrumbs/types.ts",
							"name": "BreadcrumbsProps"
						}],
						"description": "A boolean to show/hide the current item in the trail.\nNote that when `false` the current item is only visually hidden.",
						"name": "showCurrentItem",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/admin-ui/src/breadcrumbs/types.ts",
							"name": "BreadcrumbsProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					}
				},
				"tags": {
					"param": "props\nprops.items The breadcrumb items to display.",
					"example": "```jsx\n<Breadcrumbs\n  items={ [\n    { label: 'Home', to: '/' },\n    { label: 'Settings', to: '/settings' },\n    { label: 'General' },\n  ] }\n/>\n```"
				}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/admin-ui/src/lock-unlock.ts
var lock, unlock;
function init_lock_unlock() {
	return (init_lock_unlock = __esmMin((() => {
		init_implementation();
		({lock, unlock} = __dangerousOptInToUnstableAPIsOnlyForCoreModules("I acknowledge private features are not for use in themes or plugins and doing so will break in the next version of WordPress.", "@wordpress/admin-ui"));
	})))();
}
//#endregion
//#region ../packages/admin-ui/src/stories/with-router.tsx
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
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RouterProvider, { router }, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 21,
		columnNumber: 9
	}, this);
}
var import_jsx_dev_runtime, _jsxFileName, createMemoryHistory, createRootRoute, createRouter, RouterProvider;
function init_with_router() {
	return (init_with_router = __esmMin((() => {
		init_private_apis();
		init_lock_unlock();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/admin-ui/src/stories/with-router.tsx";
		({createMemoryHistory, createRootRoute, createRouter, RouterProvider} = unlock(privateApis));
		try {
			withRouter.__docgenInfo = {
				"description": "Storybook decorator that provides a router context.\n\nWraps stories in a minimal tanstack router (via `@wordpress/route` private\nAPIs) so that components consuming `Link` from `@wordpress/route` can\nrender without errors.",
				"displayName": "withRouter",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/admin-ui/src/stories/with-router.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
export { init_breadcrumbs as i, withRouter as n, Breadcrumbs as r, init_with_router as t };
