import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { a as init_clsx, i as clsx } from "./iframe-UtSZlYID.js";
import { i as init_mergeProps, o as mergeProps } from "./useRenderElement-Dkv6YH0v.js";
import { n as useRender, t as init_useRender } from "./useRender-JXgJ-9ZS.js";
import { n as resets_module_default, t as init_resets_module } from "./resets.module-CJil9Bz6.js";
//#region ../packages/ui/src/skeleton/style.module.css
var skeleton, pulse, style_module_default;
function init_style_module() {
	return (init_style_module = __esmMin((() => {
		skeleton = "_skeleton_1orj1_5";
		pulse = "_pulse_1orj1_20";
		style_module_default = {
			skeleton,
			pulse,
			"skeleton-pulse": "_skeleton-pulse_1orj1_1"
		};
	})))();
}
//#endregion
//#region ../packages/ui/src/skeleton/skeleton.tsx
var Skeleton;
function init_skeleton() {
	return (init_skeleton = __esmMin((() => {
		init_useRender(), init_mergeProps();
		init_clsx();
		init_react();
		init_resets_module();
		init_style_module();
		Skeleton = (0, import_react.forwardRef)(function UnforwardedSkeleton({ render, ...props }, ref) {
			return useRender({
				render,
				ref,
				props: mergeProps({
					className: clsx(style_module_default.skeleton, style_module_default.pulse, resets_module_default["box-sizing"]),
					"aria-hidden": true
				}, props)
			});
		});
		try {
			Skeleton.__docgenInfo = {
				"description": "A placeholder shown while content is loading.\n\nSize and corner radius are controlled via standard `div` props such as\n`style` and `className`.",
				"displayName": "Skeleton",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/skeleton/skeleton.tsx",
				"methods": [],
				"props": {
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
//#region ../packages/ui/src/skeleton/stories/index.story.tsx
var import_jsx_dev_runtime, _jsxFileName, meta, textLineHeight, Default, Circle, TextLines, CardPlaceholder;
function init_index_story() {
	return (init_index_story = __esmMin((() => {
		init_skeleton();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/skeleton/stories/index.story.tsx";
		meta = {
			tags: ["manifest"],
			title: "Components/@wordpress-ui/Skeleton",
			id: "design-system-components-skeleton",
			component: Skeleton,
			parameters: { componentStatus: {
				status: "recommended",
				whereUsed: "global"
			} }
		};
		textLineHeight = "var(--wpds-typography-line-height-xs, 16px)";
		Default = { args: { style: {
			width: "var(--wpds-dimension-surface-width-xs, 240px)",
			height: textLineHeight,
			borderRadius: "var(--wpds-border-radius-md, 4px)"
		} } };
		Circle = { args: { style: {
			width: "var(--wpds-dimension-size-lg, 40px)",
			height: "var(--wpds-dimension-size-lg, 40px)",
			borderRadius: "50%"
		} } };
		TextLines = { render: (args) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			style: {
				display: "flex",
				flexDirection: "column",
				gap: "0.5rem"
			},
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Skeleton, {
					...args,
					style: {
						width: "100%",
						height: textLineHeight,
						borderRadius: "var(--wpds-border-radius-md, 4px)"
					}
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 52,
					columnNumber: 4
				}, void 0),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Skeleton, {
					...args,
					style: {
						width: "100%",
						height: textLineHeight,
						borderRadius: "var(--wpds-border-radius-md, 4px)"
					}
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 60,
					columnNumber: 4
				}, void 0),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Skeleton, {
					...args,
					style: {
						width: "60%",
						height: textLineHeight,
						borderRadius: "var(--wpds-border-radius-md, 4px)"
					}
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 68,
					columnNumber: 4
				}, void 0)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 45,
			columnNumber: 3
		}, void 0) };
		CardPlaceholder = { render: (args) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			style: {
				display: "flex",
				gap: "1rem",
				alignItems: "center",
				maxWidth: 320
			},
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Skeleton, {
				...args,
				style: {
					width: "var(--wpds-dimension-size-lg, 40px)",
					height: "var(--wpds-dimension-size-lg, 40px)",
					borderRadius: "50%"
				}
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 90,
				columnNumber: 4
			}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				style: {
					display: "flex",
					flexDirection: "column",
					gap: "0.5rem",
					flex: 1
				},
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Skeleton, {
					...args,
					style: {
						width: "80%",
						height: textLineHeight,
						borderRadius: "var(--wpds-border-radius-md, 4px)"
					}
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 106,
					columnNumber: 5
				}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Skeleton, {
					...args,
					style: {
						width: "50%",
						height: textLineHeight,
						borderRadius: "var(--wpds-border-radius-md, 4px)"
					}
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 114,
					columnNumber: 5
				}, void 0)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 98,
				columnNumber: 4
			}, void 0)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 82,
			columnNumber: 3
		}, void 0) };
		Default.parameters = {
			...Default.parameters,
			docs: {
				...Default.parameters?.docs,
				source: {
					originalSource: "{\n  args: {\n    style: {\n      width: 'var(--wpds-dimension-surface-width-xs)',\n      height: textLineHeight,\n      borderRadius: 'var(--wpds-border-radius-md)'\n    }\n  }\n}",
					...Default.parameters?.docs?.source
				}
			}
		};
		Circle.parameters = {
			...Circle.parameters,
			docs: {
				...Circle.parameters?.docs,
				source: {
					originalSource: "{\n  args: {\n    style: {\n      width: 'var(--wpds-dimension-size-lg)',\n      height: 'var(--wpds-dimension-size-lg)',\n      borderRadius: '50%'\n    }\n  }\n}",
					...Circle.parameters?.docs?.source
				}
			}
		};
		TextLines.parameters = {
			...TextLines.parameters,
			docs: {
				...TextLines.parameters?.docs,
				source: {
					originalSource: "{\n  render: args => <div style={{\n    display: 'flex',\n    flexDirection: 'column',\n    gap: '0.5rem'\n  }}>\n            <Skeleton {...args} style={{\n      width: '100%',\n      height: textLineHeight,\n      borderRadius: 'var(--wpds-border-radius-md)'\n    }} />\n            <Skeleton {...args} style={{\n      width: '100%',\n      height: textLineHeight,\n      borderRadius: 'var(--wpds-border-radius-md)'\n    }} />\n            <Skeleton {...args} style={{\n      width: '60%',\n      height: textLineHeight,\n      borderRadius: 'var(--wpds-border-radius-md)'\n    }} />\n        </div>\n}",
					...TextLines.parameters?.docs?.source
				}
			}
		};
		CardPlaceholder.parameters = {
			...CardPlaceholder.parameters,
			docs: {
				...CardPlaceholder.parameters?.docs,
				source: {
					originalSource: "{\n  render: args => <div style={{\n    display: 'flex',\n    gap: '1rem',\n    alignItems: 'center',\n    maxWidth: 320\n  }}>\n            <Skeleton {...args} style={{\n      width: 'var(--wpds-dimension-size-lg)',\n      height: 'var(--wpds-dimension-size-lg)',\n      borderRadius: '50%'\n    }} />\n            <div style={{\n      display: 'flex',\n      flexDirection: 'column',\n      gap: '0.5rem',\n      flex: 1\n    }}>\n                <Skeleton {...args} style={{\n        width: '80%',\n        height: textLineHeight,\n        borderRadius: 'var(--wpds-border-radius-md)'\n      }} />\n                <Skeleton {...args} style={{\n        width: '50%',\n        height: textLineHeight,\n        borderRadius: 'var(--wpds-border-radius-md)'\n      }} />\n            </div>\n        </div>\n}",
					...CardPlaceholder.parameters?.docs?.source
				}
			}
		};
	})))();
}
//#endregion
init_index_story();
export { CardPlaceholder, Circle, Default, TextLines, meta as default };
