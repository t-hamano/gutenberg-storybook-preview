import { n as __esmMin, r as __exportAll } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { a as CurrentItem, c as init_button_item, i as init_link_item, n as init_root, o as init_current_item, r as LinkItem, s as ButtonItem, t as Root } from "./root-XHsy1wnc.js";
//#region ../packages/ui/src/breadcrumb/stories/index.story.tsx
var index_story_exports = /* @__PURE__ */ __exportAll({
	CurrentOnly: () => CurrentOnly,
	Default: () => Default,
	HierarchySelection: () => HierarchySelection,
	LongLabelsAndRtl: () => LongLabelsAndRtl,
	ResponsiveStates: () => ResponsiveStates,
	RouterLinkComposition: () => RouterLinkComposition,
	default: () => meta
});
function ExampleTrail({ ariaLabel = "Breadcrumbs" }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Root, {
		"aria-label": ariaLabel,
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LinkItem, {
				href: "/",
				children: "Dashboard"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 35,
				columnNumber: 4
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LinkItem, {
				href: "/products",
				children: "Products"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 36,
				columnNumber: 4
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LinkItem, {
				href: "/products/themes",
				children: "Themes"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 37,
				columnNumber: 4
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LinkItem, {
				href: "/products/themes/twentytwentyfive",
				children: "Twenty Twenty-Five"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 40,
				columnNumber: 4
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CurrentItem, { children: "Style variations" }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 43,
				columnNumber: 4
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 34,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime, expect, waitFor, _jsxFileName, meta, Default, ResponsiveStates, LongLabelsAndRtl, RouterLink, RouterLinkComposition, HierarchySelection, CurrentOnly;
function init_index_story() {
	return (init_index_story = __esmMin((() => {
		init_react();
		init_root(), init_link_item(), init_button_item(), init_current_item();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		({expect, waitFor} = __STORYBOOK_MODULE_TEST__);
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/breadcrumb/stories/index.story.tsx";
		meta = {
			title: "Components/@wordpress-ui/Breadcrumb",
			id: "design-system-components-breadcrumb",
			component: Root,
			subcomponents: {
				"Breadcrumb.LinkItem": LinkItem,
				"Breadcrumb.ButtonItem": ButtonItem,
				"Breadcrumb.CurrentItem": CurrentItem
			},
			argTypes: { children: { control: false } },
			parameters: { componentStatus: {
				status: "use-with-caution",
				whereUsed: "global",
				notes: "Responsive overflow uses the new Menu component, which is also currently marked use-with-caution."
			} }
		};
		Default = { render: () => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ExampleTrail, {}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 49,
			columnNumber: 16
		}, void 0) };
		ResponsiveStates = {
			render: () => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				style: {
					display: "grid",
					gap: "var(--wpds-dimension-gap-lg, 16px)"
				},
				children: [
					760,
					420,
					260,
					120
				].map((width) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					style: {
						inlineSize: width,
						maxInlineSize: "100%"
					},
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ExampleTrail, { ariaLabel: `Breadcrumbs at ${width} pixels` }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 70,
						columnNumber: 6
					}, void 0)
				}, width, false, {
					fileName: _jsxFileName,
					lineNumber: 66,
					columnNumber: 5
				}, void 0))
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 59,
				columnNumber: 3
			}, void 0),
			play: async ({ canvasElement }) => {
				await waitFor(() => {
					const focusableItems = canvasElement.querySelectorAll("ol a, ol button, ol [aria-current=\"page\"][tabindex=\"0\"]");
					expect(focusableItems.length).toBeGreaterThan(0);
					for (const item of focusableItems) {
						item.focus();
						expect(item).toHaveFocus();
						const itemRect = item.getBoundingClientRect();
						const list = item.closest("ol");
						const styles = getComputedStyle(item);
						const ringSize = Number.parseFloat(styles.outlineWidth) + Number.parseFloat(styles.outlineOffset);
						expect(list).not.toBeNull();
						if (!list) continue;
						const listRect = list.getBoundingClientRect();
						if (item.tagName === "BUTTON") {
							expect(itemRect.height).toBe(24);
							expect(itemRect.width).toBeGreaterThanOrEqual(24);
						}
						expect(listRect.height).toBe(32);
						expect(ringSize).toBeGreaterThan(0);
						expect(itemRect.top - ringSize).toBeGreaterThanOrEqual(listRect.top);
						expect(itemRect.bottom + ringSize).toBeLessThanOrEqual(listRect.bottom);
						expect(itemRect.left - ringSize).toBeGreaterThanOrEqual(listRect.left);
						expect(itemRect.right + ringSize).toBeLessThanOrEqual(listRect.right);
					}
				});
			}
		};
		LongLabelsAndRtl = { render: () => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			dir: "rtl",
			style: {
				inlineSize: 420,
				maxInlineSize: "100%"
			},
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Root, {
				"aria-label": "مسار التنقل",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LinkItem, {
						href: "/",
						children: "لوحة التحكم"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 129,
						columnNumber: 5
					}, void 0),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LinkItem, {
						href: "/appearance",
						children: "المظهر وإعدادات التخصيص"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 130,
						columnNumber: 5
					}, void 0),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LinkItem, {
						href: "/appearance/themes",
						children: "القوالب المثبتة على هذا الموقع"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 133,
						columnNumber: 5
					}, void 0),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CurrentItem, { children: "إعدادات القالب الحالي وتخصيص أنماط العرض" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 136,
						columnNumber: 5
					}, void 0)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 128,
				columnNumber: 4
			}, void 0)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 127,
			columnNumber: 3
		}, void 0) };
		RouterLink = (0, import_react.forwardRef)(function UnforwardedRouterLink({ children, ...props }, ref) {
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
				...props,
				ref,
				"data-router-link": true,
				children
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 147,
				columnNumber: 4
			}, this);
		});
		RouterLinkComposition = { render: () => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Root, { children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LinkItem, {
				href: "/",
				render: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RouterLink, {}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 157,
					columnNumber: 43
				}, void 0),
				children: "Dashboard"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 157,
				columnNumber: 4
			}, void 0),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LinkItem, {
				href: "/settings?section=writing#defaults",
				render: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RouterLink, {}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 162,
					columnNumber: 14
				}, void 0),
				children: "Writing settings"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 160,
				columnNumber: 4
			}, void 0),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CurrentItem, { children: "Defaults" }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 166,
				columnNumber: 4
			}, void 0)
		] }, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 156,
			columnNumber: 3
		}, void 0) };
		HierarchySelection = { render: function SelectionExample() {
			const [selectedIndex, setSelectedIndex] = (0, import_react.useState)(2);
			const labels = [
				"Document",
				"Group",
				"Paragraph"
			];
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Root, {
				"aria-label": "Block hierarchy",
				children: [labels.slice(0, selectedIndex).map((label, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ButtonItem, {
					onClick: () => setSelectedIndex(index),
					children: label
				}, label, false, {
					fileName: _jsxFileName,
					lineNumber: 181,
					columnNumber: 6
				}, this)), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CurrentItem, {
					"aria-current": "true",
					children: labels[selectedIndex]
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 188,
					columnNumber: 5
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 179,
				columnNumber: 4
			}, this);
		} };
		CurrentOnly = { render: () => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Root, {
			"aria-label": "Page hierarchy",
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CurrentItem, { children: "Dashboard" }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 200,
				columnNumber: 5
			}, void 0)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 199,
			columnNumber: 4
		}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Root, {
			"aria-label": "Block hierarchy",
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CurrentItem, {
				"aria-current": "true",
				children: "Document"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 203,
				columnNumber: 5
			}, void 0)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 202,
			columnNumber: 4
		}, void 0)] }, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 198,
			columnNumber: 3
		}, void 0) };
		try {
			ResponsiveStates.__docgenInfo = {
				"description": "Each example contains the same complete trail. The component measures its\navailable inline size and progressively moves ancestors into the overflow\nmenu. Resize the canvas to see it respond continuously.",
				"displayName": "ResponsiveStates",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/breadcrumb/stories/index.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			HierarchySelection.__docgenInfo = {
				"description": "Use button ancestors to select a position in a hierarchy.",
				"displayName": "HierarchySelection",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/breadcrumb/stories/index.story.tsx",
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
					originalSource: "{\n  render: () => <ExampleTrail />\n}",
					...Default.parameters?.docs?.source
				}
			}
		};
		ResponsiveStates.parameters = {
			...ResponsiveStates.parameters,
			docs: {
				...ResponsiveStates.parameters?.docs,
				source: {
					originalSource: "{\n  render: () => <div style={{\n    display: 'grid',\n    gap: 'var(--wpds-dimension-gap-lg)'\n  }}>\n            {[760, 420, 260, 120].map(width => <div key={width} style={{\n      inlineSize: width,\n      maxInlineSize: '100%'\n    }}>\n                    <ExampleTrail ariaLabel={`Breadcrumbs at ${width} pixels`} />\n                </div>)}\n        </div>,\n  play: async ({\n    canvasElement\n  }) => {\n    await waitFor(() => {\n      const focusableItems = canvasElement.querySelectorAll<HTMLElement>('ol a, ol button, ol [aria-current=\"page\"][tabindex=\"0\"]');\n      expect(focusableItems.length).toBeGreaterThan(0);\n      for (const item of focusableItems) {\n        item.focus();\n        expect(item).toHaveFocus();\n        const itemRect = item.getBoundingClientRect();\n        const list = item.closest('ol');\n        const styles = getComputedStyle(item);\n        const ringSize = Number.parseFloat(styles.outlineWidth) + Number.parseFloat(styles.outlineOffset);\n        expect(list).not.toBeNull();\n        if (!list) {\n          continue;\n        }\n        const listRect = list.getBoundingClientRect();\n        if (item.tagName === 'BUTTON') {\n          expect(itemRect.height).toBe(24);\n          expect(itemRect.width).toBeGreaterThanOrEqual(24);\n        }\n        expect(listRect.height).toBe(32);\n        expect(ringSize).toBeGreaterThan(0);\n        expect(itemRect.top - ringSize).toBeGreaterThanOrEqual(listRect.top);\n        expect(itemRect.bottom + ringSize).toBeLessThanOrEqual(listRect.bottom);\n        expect(itemRect.left - ringSize).toBeGreaterThanOrEqual(listRect.left);\n        expect(itemRect.right + ringSize).toBeLessThanOrEqual(listRect.right);\n      }\n    });\n  }\n}",
					...ResponsiveStates.parameters?.docs?.source
				},
				description: {
					story: "Each example contains the same complete trail. The component measures its\navailable inline size and progressively moves ancestors into the overflow\nmenu. Resize the canvas to see it respond continuously.",
					...ResponsiveStates.parameters?.docs?.description
				}
			}
		};
		LongLabelsAndRtl.parameters = {
			...LongLabelsAndRtl.parameters,
			docs: {
				...LongLabelsAndRtl.parameters?.docs,
				source: {
					originalSource: "{\n  render: () => <div dir=\"rtl\" style={{\n    inlineSize: 420,\n    maxInlineSize: '100%'\n  }}>\n            <Breadcrumb.Root aria-label=\"مسار التنقل\">\n                <Breadcrumb.LinkItem href=\"/\">لوحة التحكم</Breadcrumb.LinkItem>\n                <Breadcrumb.LinkItem href=\"/appearance\">\n                    المظهر وإعدادات التخصيص\n                </Breadcrumb.LinkItem>\n                <Breadcrumb.LinkItem href=\"/appearance/themes\">\n                    القوالب المثبتة على هذا الموقع\n                </Breadcrumb.LinkItem>\n                <Breadcrumb.CurrentItem>\n                    إعدادات القالب الحالي وتخصيص أنماط العرض\n                </Breadcrumb.CurrentItem>\n            </Breadcrumb.Root>\n        </div>\n}",
					...LongLabelsAndRtl.parameters?.docs?.source
				}
			}
		};
		RouterLinkComposition.parameters = {
			...RouterLinkComposition.parameters,
			docs: {
				...RouterLinkComposition.parameters?.docs,
				source: {
					originalSource: "{\n  render: () => <Breadcrumb.Root>\n            <Breadcrumb.LinkItem href=\"/\" render={<RouterLink />}>\n                Dashboard\n            </Breadcrumb.LinkItem>\n            <Breadcrumb.LinkItem href=\"/settings?section=writing#defaults\" render={<RouterLink />}>\n                Writing settings\n            </Breadcrumb.LinkItem>\n            <Breadcrumb.CurrentItem>Defaults</Breadcrumb.CurrentItem>\n        </Breadcrumb.Root>\n}",
					...RouterLinkComposition.parameters?.docs?.source
				}
			}
		};
		HierarchySelection.parameters = {
			...HierarchySelection.parameters,
			docs: {
				...HierarchySelection.parameters?.docs,
				source: {
					originalSource: "{\n  render: function SelectionExample() {\n    const [selectedIndex, setSelectedIndex] = useState(2);\n    const labels = ['Document', 'Group', 'Paragraph'];\n    return <Breadcrumb.Root aria-label=\"Block hierarchy\">\n                {labels.slice(0, selectedIndex).map((label, index) => <Breadcrumb.ButtonItem key={label} onClick={() => setSelectedIndex(index)}>\n                        {label}\n                    </Breadcrumb.ButtonItem>)}\n                <Breadcrumb.CurrentItem aria-current=\"true\">\n                    {labels[selectedIndex]}\n                </Breadcrumb.CurrentItem>\n            </Breadcrumb.Root>;\n  }\n}",
					...HierarchySelection.parameters?.docs?.source
				},
				description: {
					story: "Use button ancestors to select a position in a hierarchy.",
					...HierarchySelection.parameters?.docs?.description
				}
			}
		};
		CurrentOnly.parameters = {
			...CurrentOnly.parameters,
			docs: {
				...CurrentOnly.parameters?.docs,
				source: {
					originalSource: "{\n  render: () => <>\n            <Breadcrumb.Root aria-label=\"Page hierarchy\">\n                <Breadcrumb.CurrentItem>Dashboard</Breadcrumb.CurrentItem>\n            </Breadcrumb.Root>\n            <Breadcrumb.Root aria-label=\"Block hierarchy\">\n                <Breadcrumb.CurrentItem aria-current=\"true\">\n                    Document\n                </Breadcrumb.CurrentItem>\n            </Breadcrumb.Root>\n        </>\n}",
					...CurrentOnly.parameters?.docs?.source
				}
			}
		};
	})))();
}
//#endregion
export { init_index_story as i, Default as n, index_story_exports as r, CurrentOnly as t };
