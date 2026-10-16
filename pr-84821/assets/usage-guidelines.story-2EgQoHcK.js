import { n as __esmMin, r as __exportAll } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { r as format_bold_default, t as format_italic_default } from "./format-italic-D_jr8hit.js";
import { t as format_underline_default } from "./format-underline-BIWN2Szx.js";
import { t as info_default } from "./info-DeLhg5Zz.js";
import { n as init_icon, t as Icon } from "./icon-C8ogYiCq.js";
import { n as init_visually_hidden, t as VisuallyHidden } from "./visually-hidden-FYENO0pz.js";
import { a as Popup, i as init_trigger, n as init_root, o as init_popup, r as Trigger, t as Root } from "./root-DwiwsHOD.js";
import { n as init_provider, t as Provider } from "./provider-DouIj-Pm.js";
import { n as init_icon_button, t as IconButton } from "./icon-button-1MUTgcAK.js";
import { a as Popup$1, i as init_root$1, m as init_arrow, n as init_trigger$1, o as init_popup$1, p as Arrow, r as Root$1, t as Trigger$1 } from "./trigger-DiBr5L6G.js";
import { i as init_description, n as init_title, r as Description, t as Title } from "./title-B5TGPM6f.js";
import { r as init_build_module } from "./library.story-CFsmdbdz.js";
//#region ../packages/ui/src/tooltip/stories/usage-guidelines.story.tsx
var usage_guidelines_story_exports = /* @__PURE__ */ __exportAll({
	IconButtonWithTooltip: () => IconButtonWithTooltip,
	InfotipWithPopover: () => InfotipWithPopover,
	RecommendedUsage: () => RecommendedUsage,
	default: () => meta
});
var import_jsx_dev_runtime, _jsxFileName, meta, RecommendedUsage, InfotipWithPopover, IconButtonWithTooltip;
function init_usage_guidelines_story() {
	return (init_usage_guidelines_story = __esmMin((() => {
		init_build_module();
		init_provider(), init_root(), init_trigger(), init_popup();
		init_icon();
		init_icon_button();
		init_root$1(), init_trigger$1(), init_popup$1(), init_arrow(), init_title(), init_description();
		init_visually_hidden();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/tooltip/stories/usage-guidelines.story.tsx";
		meta = {
			title: "Components/@wordpress-ui/Tooltip/Usage Guidelines",
			id: "design-system-components-tooltip-usage-guidelines",
			parameters: { controls: { disable: true } },
			tags: ["!dev"]
		};
		RecommendedUsage = { render: () => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Provider, {
			delay: 0,
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				style: {
					display: "flex",
					gap: "0.25rem"
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Root, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trigger, {
						"aria-label": "Bold",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { icon: format_bold_default }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 36,
							columnNumber: 7
						}, void 0)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 35,
						columnNumber: 6
					}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Popup, { children: "Bold" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 38,
						columnNumber: 6
					}, void 0)] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 34,
						columnNumber: 5
					}, void 0),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Root, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trigger, {
						"aria-label": "Italic",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { icon: format_italic_default }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 43,
							columnNumber: 7
						}, void 0)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 42,
						columnNumber: 6
					}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Popup, { children: "Italic" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 45,
						columnNumber: 6
					}, void 0)] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 41,
						columnNumber: 5
					}, void 0),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Root, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trigger, {
						"aria-label": "Underline",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { icon: format_underline_default }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 50,
							columnNumber: 7
						}, void 0)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 49,
						columnNumber: 6
					}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Popup, { children: "Underline" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 52,
						columnNumber: 6
					}, void 0)] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 48,
						columnNumber: 5
					}, void 0)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 33,
				columnNumber: 4
			}, void 0)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 32,
			columnNumber: 3
		}, void 0) };
		InfotipWithPopover = { render: () => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			style: {
				display: "flex",
				alignItems: "center",
				gap: "var(--wpds-dimension-gap-xs, 4px)"
			},
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Label" }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 73,
				columnNumber: 4
			}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Root$1, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trigger$1, {
				openOnHover: true,
				delay: 200,
				closeDelay: 200,
				"aria-label": "More information",
				style: {
					background: "none",
					border: "none",
					padding: 0,
					cursor: "var(--wpds-cursor-control, pointer)",
					display: "inline-flex",
					alignItems: "center",
					borderRadius: "var(--wpds-border-radius-sm, 2px)"
				},
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, {
					icon: info_default,
					size: 20
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 90,
					columnNumber: 6
				}, void 0)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 75,
				columnNumber: 5
			}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Popup$1, { children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Arrow, {}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 93,
					columnNumber: 6
				}, void 0),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(VisuallyHidden, {
					render: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Title, {}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 94,
						columnNumber: 31
					}, void 0),
					children: "More information"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 94,
					columnNumber: 6
				}, void 0),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Description, { children: "This is additional context about the label. Unlike tooltips, this content is accessible to touch and screen reader users." }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 97,
					columnNumber: 6
				}, void 0)
			] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 92,
				columnNumber: 5
			}, void 0)] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 74,
				columnNumber: 4
			}, void 0)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 66,
			columnNumber: 3
		}, void 0) };
		IconButtonWithTooltip = { render: () => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			style: {
				display: "flex",
				gap: "0.25rem"
			},
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IconButton, {
					icon: format_bold_default,
					label: "Bold",
					size: "compact"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 115,
					columnNumber: 4
				}, void 0),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IconButton, {
					icon: format_italic_default,
					label: "Italic",
					size: "compact"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 116,
					columnNumber: 4
				}, void 0),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IconButton, {
					icon: format_underline_default,
					label: "Underline",
					size: "compact"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 117,
					columnNumber: 4
				}, void 0)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 114,
			columnNumber: 3
		}, void 0) };
		try {
			RecommendedUsage.__docgenInfo = {
				"description": "Tooltips work best as visual labels for icon-only controls. Each trigger\nmust have its own accessible name via `aria-label`.",
				"displayName": "RecommendedUsage",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/tooltip/stories/usage-guidelines.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			InfotipWithPopover.__docgenInfo = {
				"description": "Popups that open when hovering an info icon should use `Popover` with\n`openOnHover` instead of a Tooltip. This ensures the content is accessible\nto touch and screen reader users.",
				"displayName": "InfotipWithPopover",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/tooltip/stories/usage-guidelines.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			IconButtonWithTooltip.__docgenInfo = {
				"description": "`IconButton` has built-in tooltip support via the `label` prop,\nmaking it the easiest way to provide a tooltip for icon-only actions.",
				"displayName": "IconButtonWithTooltip",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/tooltip/stories/usage-guidelines.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		RecommendedUsage.parameters = {
			...RecommendedUsage.parameters,
			docs: {
				...RecommendedUsage.parameters?.docs,
				source: {
					originalSource: "{\n  render: () => <Tooltip.Provider delay={0}>\n            <div style={{\n      display: 'flex',\n      gap: '0.25rem'\n    }}>\n                <Tooltip.Root>\n                    <Tooltip.Trigger aria-label=\"Bold\">\n                        <Icon icon={formatBold} />\n                    </Tooltip.Trigger>\n                    <Tooltip.Popup>Bold</Tooltip.Popup>\n                </Tooltip.Root>\n\n                <Tooltip.Root>\n                    <Tooltip.Trigger aria-label=\"Italic\">\n                        <Icon icon={formatItalic} />\n                    </Tooltip.Trigger>\n                    <Tooltip.Popup>Italic</Tooltip.Popup>\n                </Tooltip.Root>\n\n                <Tooltip.Root>\n                    <Tooltip.Trigger aria-label=\"Underline\">\n                        <Icon icon={formatUnderline} />\n                    </Tooltip.Trigger>\n                    <Tooltip.Popup>Underline</Tooltip.Popup>\n                </Tooltip.Root>\n            </div>\n        </Tooltip.Provider>\n}",
					...RecommendedUsage.parameters?.docs?.source
				},
				description: {
					story: "Tooltips work best as visual labels for icon-only controls. Each trigger\nmust have its own accessible name via `aria-label`.",
					...RecommendedUsage.parameters?.docs?.description
				}
			}
		};
		InfotipWithPopover.parameters = {
			...InfotipWithPopover.parameters,
			docs: {
				...InfotipWithPopover.parameters?.docs,
				source: {
					originalSource: "{\n  render: () => <div style={{\n    display: 'flex',\n    alignItems: 'center',\n    gap: 'var(--wpds-dimension-gap-xs)'\n  }}>\n            <span>Label</span>\n            <Popover.Root>\n                <Popover.Trigger openOnHover delay={200} closeDelay={200} aria-label=\"More information\" style={{\n        background: 'none',\n        border: 'none',\n        padding: 0,\n        cursor: 'var(--wpds-cursor-control)',\n        display: 'inline-flex',\n        alignItems: 'center',\n        borderRadius: 'var(--wpds-border-radius-sm)'\n      }}>\n                    <Icon icon={info} size={20} />\n                </Popover.Trigger>\n                <Popover.Popup>\n                    <Popover.Arrow />\n                    <VisuallyHidden render={<Popover.Title />}>\n                        More information\n                    </VisuallyHidden>\n                    <Popover.Description>\n                        This is additional context about the label. Unlike\n                        tooltips, this content is accessible to touch and screen\n                        reader users.\n                    </Popover.Description>\n                </Popover.Popup>\n            </Popover.Root>\n        </div>\n}",
					...InfotipWithPopover.parameters?.docs?.source
				},
				description: {
					story: "Popups that open when hovering an info icon should use `Popover` with\n`openOnHover` instead of a Tooltip. This ensures the content is accessible\nto touch and screen reader users.",
					...InfotipWithPopover.parameters?.docs?.description
				}
			}
		};
		IconButtonWithTooltip.parameters = {
			...IconButtonWithTooltip.parameters,
			docs: {
				...IconButtonWithTooltip.parameters?.docs,
				source: {
					originalSource: "{\n  render: () => <div style={{\n    display: 'flex',\n    gap: '0.25rem'\n  }}>\n            <IconButton icon={formatBold} label=\"Bold\" size=\"compact\" />\n            <IconButton icon={formatItalic} label=\"Italic\" size=\"compact\" />\n            <IconButton icon={formatUnderline} label=\"Underline\" size=\"compact\" />\n        </div>\n}",
					...IconButtonWithTooltip.parameters?.docs?.source
				},
				description: {
					story: "`IconButton` has built-in tooltip support via the `label` prop,\nmaking it the easiest way to provide a tooltip for icon-only actions.",
					...IconButtonWithTooltip.parameters?.docs?.description
				}
			}
		};
	})))();
}
//#endregion
export { usage_guidelines_story_exports as a, init_usage_guidelines_story as i, InfotipWithPopover as n, RecommendedUsage as r, IconButtonWithTooltip as t };
