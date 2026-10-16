import { n as __esmMin, r as __exportAll } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_create_interpolate_element, t as create_interpolate_element_default } from "./create-interpolate-element-CUfbmqGd.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { t as cog_default } from "./cog-CjNOotlb.js";
import { n as init_button, t as Button } from "./button-yiOgKsLV.js";
import { n as init_stack, t as Stack } from "./stack-s_FjhA7z.js";
import { n as init_text, t as Text } from "./text-B-YUcwFZ.js";
import { n as init_provider, t as Provider } from "./provider-DouIj-Pm.js";
import { n as init_link, t as Link } from "./link-kFSiQgOt.js";
import { n as init_button_link, t as ButtonLink } from "./button-link-B6dOm07x.js";
import { n as init_icon_button, t as IconButton } from "./icon-button-1MUTgcAK.js";
import { r as init_build_module } from "./library.story-CFsmdbdz.js";
//#region ../packages/ui/src/button/stories/usage-guidelines.story.tsx
var usage_guidelines_story_exports = /* @__PURE__ */ __exportAll({
	UseButtonForActions: () => UseButtonForActions,
	UseButtonLinkForNavigation: () => UseButtonLinkForNavigation,
	UseLinkForInlineNavigation: () => UseLinkForInlineNavigation,
	default: () => meta
});
var import_jsx_dev_runtime, _jsxFileName, meta, UseButtonForActions, UseLinkForInlineNavigation, UseButtonLinkForNavigation;
function init_usage_guidelines_story() {
	return (init_usage_guidelines_story = __esmMin((() => {
		init_create_interpolate_element();
		init_build_module();
		init_button();
		init_icon_button();
		init_link();
		init_button_link();
		init_stack();
		init_text();
		init_provider();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/button/stories/usage-guidelines.story.tsx";
		meta = {
			title: "Components/@wordpress-ui/Button/Usage Guidelines",
			id: "design-system-components-button-usage-guidelines",
			parameters: { controls: { disable: true } },
			tags: ["!dev"]
		};
		UseButtonForActions = { render: () => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Provider, {
			delay: 0,
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack, {
				direction: "row",
				gap: "sm",
				wrap: "wrap",
				align: "center",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
						type: "submit",
						children: "Save changes"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 33,
						columnNumber: 5
					}, void 0),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
						variant: "outline",
						onClick: () => {},
						children: "Settings"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 34,
						columnNumber: 5
					}, void 0),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IconButton, {
						icon: cog_default,
						label: "Settings",
						variant: "outline",
						onClick: () => {}
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 37,
						columnNumber: 5
					}, void 0)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 32,
				columnNumber: 4
			}, void 0)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 31,
			columnNumber: 3
		}, void 0) };
		UseLinkForInlineNavigation = { render: () => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, {
			variant: "body-md",
			render: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 54,
				columnNumber: 36
			}, void 0),
			children: create_interpolate_element_default("Read the <DocumentationLink /> for more details, or <ExternalLink />.", {
				DocumentationLink: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
					href: "https://wordpress.org/documentation/",
					children: "documentation"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 59,
					columnNumber: 7
				}, void 0),
				ExternalLink: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
					href: "https://make.wordpress.org/",
					openInNewTab: true,
					children: "open an external reference"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 64,
					columnNumber: 7
				}, void 0)
			})
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 54,
			columnNumber: 3
		}, void 0) };
		UseButtonLinkForNavigation = { render: () => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack, {
			direction: "column",
			gap: "md",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, {
					variant: "body-md",
					render: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 84,
						columnNumber: 37
					}, void 0),
					children: "Standalone navigation calls to action can use `ButtonLink` when button styling matches the surrounding UI."
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 84,
					columnNumber: 4
				}, void 0),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ButtonLink, {
					href: "https://make.wordpress.org/",
					openInNewTab: true,
					children: "Get started"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 89,
					columnNumber: 5
				}, void 0) }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 88,
					columnNumber: 4
				}, void 0),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, {
					variant: "body-md",
					render: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 93,
						columnNumber: 37
					}, void 0),
					children: create_interpolate_element_default("Note: Prefer <LinkComponent /> for navigation when possible — its underline and link styling communicate where the user is going more clearly than a button-shaped control.", { LinkComponent: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
						href: "https://wordpress.org/documentation/",
						children: "Link"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 98,
						columnNumber: 8
					}, void 0) })
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 93,
					columnNumber: 4
				}, void 0)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 83,
			columnNumber: 3
		}, void 0) };
		try {
			UseButtonForActions.__docgenInfo = {
				"description": "Use `Button` or `IconButton` for actions on the current view: submitting a\nform, opening a dialog, toggling UI, or running JavaScript. Both render a\n`<button>` and support loading and pressed states.",
				"displayName": "UseButtonForActions",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/button/stories/usage-guidelines.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			UseLinkForInlineNavigation.__docgenInfo = {
				"description": "Use `Link` for navigation. Its underline and link styling communicate where\nthe user is going more clearly than a button-shaped control.",
				"displayName": "UseLinkForInlineNavigation",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/button/stories/usage-guidelines.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			UseButtonLinkForNavigation.__docgenInfo = {
				"description": "Use `ButtonLink` when navigation should look like a `Button`, such as\nstandalone calls to action that require an `href`.\n\nNote: Prefer `Link` for navigation when possible. Its underline and link\nstyling set clearer expectations than a button-shaped control.",
				"displayName": "UseButtonLinkForNavigation",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/button/stories/usage-guidelines.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		UseButtonForActions.parameters = {
			...UseButtonForActions.parameters,
			docs: {
				...UseButtonForActions.parameters?.docs,
				source: {
					originalSource: "{\n  render: () => <Tooltip.Provider delay={0}>\n            <Stack direction=\"row\" gap=\"sm\" wrap=\"wrap\" align=\"center\">\n                <Button type=\"submit\">Save changes</Button>\n                <Button variant=\"outline\" onClick={() => {}}>\n                    Settings\n                </Button>\n                <IconButton icon={cog} label=\"Settings\" variant=\"outline\" onClick={() => {}} />\n            </Stack>\n        </Tooltip.Provider>\n}",
					...UseButtonForActions.parameters?.docs?.source
				},
				description: {
					story: "Use `Button` or `IconButton` for actions on the current view: submitting a\nform, opening a dialog, toggling UI, or running JavaScript. Both render a\n`<button>` and support loading and pressed states.",
					...UseButtonForActions.parameters?.docs?.description
				}
			}
		};
		UseLinkForInlineNavigation.parameters = {
			...UseLinkForInlineNavigation.parameters,
			docs: {
				...UseLinkForInlineNavigation.parameters?.docs,
				source: {
					originalSource: "{\n  render: () => <Text variant=\"body-md\" render={<p />}>\n            {createInterpolateElement('Read the <DocumentationLink /> for more details, or <ExternalLink />.', {\n      DocumentationLink: <Link href=\"https://wordpress.org/documentation/\">\n                            documentation\n                        </Link>,\n      ExternalLink: <Link href=\"https://make.wordpress.org/\" openInNewTab>\n                            open an external reference\n                        </Link>\n    })}\n        </Text>\n}",
					...UseLinkForInlineNavigation.parameters?.docs?.source
				},
				description: {
					story: "Use `Link` for navigation. Its underline and link styling communicate where\nthe user is going more clearly than a button-shaped control.",
					...UseLinkForInlineNavigation.parameters?.docs?.description
				}
			}
		};
		UseButtonLinkForNavigation.parameters = {
			...UseButtonLinkForNavigation.parameters,
			docs: {
				...UseButtonLinkForNavigation.parameters?.docs,
				source: {
					originalSource: "{\n  render: () => <Stack direction=\"column\" gap=\"md\">\n            <Text variant=\"body-md\" render={<p />}>\n                Standalone navigation calls to action can use `ButtonLink` when\n                button styling matches the surrounding UI.\n            </Text>\n            <div>\n                <ButtonLink href=\"https://make.wordpress.org/\" openInNewTab>\n                    Get started\n                </ButtonLink>\n            </div>\n            <Text variant=\"body-md\" render={<p />}>\n                {createInterpolateElement('Note: Prefer <LinkComponent /> for navigation when possible — its underline and link styling communicate where the user is going more clearly than a button-shaped control.', {\n        LinkComponent: <Link href=\"https://wordpress.org/documentation/\">\n                                Link\n                            </Link>\n      })}\n            </Text>\n        </Stack>\n}",
					...UseButtonLinkForNavigation.parameters?.docs?.source
				},
				description: {
					story: "Use `ButtonLink` when navigation should look like a `Button`, such as\nstandalone calls to action that require an `href`.\n\nNote: Prefer `Link` for navigation when possible. Its underline and link\nstyling set clearer expectations than a button-shaped control.",
					...UseButtonLinkForNavigation.parameters?.docs?.description
				}
			}
		};
	})))();
}
//#endregion
export { usage_guidelines_story_exports as a, init_usage_guidelines_story as i, UseButtonLinkForNavigation as n, UseLinkForInlineNavigation as r, UseButtonForActions as t };
