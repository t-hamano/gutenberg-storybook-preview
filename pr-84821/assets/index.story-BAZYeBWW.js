import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as init_build_module, t as deprecated } from "./build-module-BWCORUbm.js";
import { a as init_clsx, i as clsx } from "./iframe-Dbjzp1_m.js";
import { n as init_notice, t as Notice } from "./notice-DdLnvKLo.js";
//#region ../packages/components/src/animate/index.tsx
/**
* @param type The animation type
* @return Default origin
*/
function getDefaultOrigin(type) {
	return type === "appear" ? "top" : "left";
}
/**
* @param options
*
* @return ClassName that applies the animations
*/
function getAnimateClassName(options) {
	if (options.type === "loading") return "components-animate__loading";
	const { type, origin = getDefaultOrigin(type) } = options;
	if (type === "appear") {
		const [yAxis, xAxis = "center"] = origin.split(" ");
		return clsx("components-animate__appear", {
			["is-from-" + xAxis]: xAxis !== "center",
			["is-from-" + yAxis]: yAxis !== "middle"
		});
	}
	if (type === "slide-in") return clsx("components-animate__slide-in", "is-from-" + origin);
}
/**
* Simple interface to introduce animations to components.
*
* This component is deprecated. Write your own CSS animations instead,
* preferably using the [motion tokens](https://wordpress.github.io/gutenberg/?path=/docs/design-system-tokens-introduction--docs)
* available in `@wordpress/theme`.
*
* @deprecated
*
* ```jsx
* import { Animate, Notice } from '@wordpress/components';
*
* const MyAnimatedNotice = () => (
* 	<Animate type="slide-in" options={ { origin: 'top' } }>
* 		{ ( { className } ) => (
* 			<Notice className={ className } status="success">
* 				<p>Animation finished.</p>
* 			</Notice>
* 		) }
* 	</Animate>
* );
* ```
*/
function Animate({ type, options = {}, children }) {
	deprecated("wp.components.Animate", {
		since: "7.2",
		version: "7.4"
	});
	return children({ className: getAnimateClassName({
		type,
		...options
	}) });
}
function init_animate() {
	return (init_animate = __esmMin((() => {
		init_clsx();
		init_build_module();
		try {
			getAnimateClassName.__docgenInfo = {
				"description": "",
				"displayName": "getAnimateClassName",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/animate/index.tsx",
				"methods": [],
				"props": {
					"type": {
						"defaultValue": null,
						"declarations": [
							{
								"fileName": "gutenberg-storybook-preview/packages/components/src/animate/types.ts",
								"name": "TypeLiteral"
							},
							{
								"fileName": "gutenberg-storybook-preview/packages/components/src/animate/types.ts",
								"name": "TypeLiteral"
							},
							{
								"fileName": "gutenberg-storybook-preview/packages/components/src/animate/types.ts",
								"name": "TypeLiteral"
							},
							{
								"fileName": "gutenberg-storybook-preview/packages/components/src/animate/types.ts",
								"name": "TypeLiteral"
							}
						],
						"description": "",
						"name": "type",
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "\"loading\" | \"appear\" | \"slide-in\"",
							"value": [
								{ "value": "\"loading\"" },
								{ "value": "\"appear\"" },
								{ "value": "\"slide-in\"" }
							]
						}
					},
					"origin": {
						"defaultValue": null,
						"declarations": [
							{
								"fileName": "gutenberg-storybook-preview/packages/components/src/animate/types.ts",
								"name": "TypeLiteral"
							},
							{
								"fileName": "gutenberg-storybook-preview/packages/components/src/animate/types.ts",
								"name": "TypeLiteral"
							},
							{
								"fileName": "gutenberg-storybook-preview/packages/components/src/animate/types.ts",
								"name": "TypeLiteral"
							},
							{
								"fileName": "gutenberg-storybook-preview/packages/components/src/animate/types.ts",
								"name": "TypeLiteral"
							}
						],
						"description": "",
						"name": "origin",
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "\"middle\" | \"left\" | \"right\" | \"bottom\" | \"top\" | \"top left\" | \"top right\" | \"middle left\" | \"middle right\" | \"bottom left\" | \"bottom right\"",
							"value": [
								{ "value": "\"middle\"" },
								{ "value": "\"left\"" },
								{ "value": "\"right\"" },
								{ "value": "\"bottom\"" },
								{ "value": "\"top\"" },
								{ "value": "\"top left\"" },
								{ "value": "\"top right\"" },
								{ "value": "\"middle left\"" },
								{ "value": "\"middle right\"" },
								{ "value": "\"bottom left\"" },
								{ "value": "\"bottom right\"" }
							]
						}
					}
				},
				"tags": {
					"param": "options",
					"return": "ClassName that applies the animations"
				}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			Animate.__docgenInfo = {
				"description": "Simple interface to introduce animations to components.\n\nThis component is deprecated. Write your own CSS animations instead,\npreferably using the [motion tokens](https://wordpress.github.io/gutenberg/?path=/docs/design-system-tokens-introduction--docs)\navailable in `@wordpress/theme`.",
				"displayName": "Animate",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/animate/index.tsx",
				"methods": [],
				"props": {
					"type": {
						"defaultValue": null,
						"declarations": [
							{
								"fileName": "gutenberg-storybook-preview/packages/components/src/animate/types.ts",
								"name": "TypeLiteral"
							},
							{
								"fileName": "gutenberg-storybook-preview/packages/components/src/animate/types.ts",
								"name": "TypeLiteral"
							},
							{
								"fileName": "gutenberg-storybook-preview/packages/components/src/animate/types.ts",
								"name": "TypeLiteral"
							},
							{
								"fileName": "gutenberg-storybook-preview/packages/components/src/animate/types.ts",
								"name": "TypeLiteral"
							}
						],
						"description": "",
						"name": "type",
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "\"loading\" | \"appear\" | \"slide-in\"",
							"value": [
								{ "value": "\"loading\"" },
								{ "value": "\"appear\"" },
								{ "value": "\"slide-in\"" }
							]
						}
					},
					"options": {
						"defaultValue": { "value": "{}" },
						"declarations": [
							{
								"fileName": "gutenberg-storybook-preview/packages/components/src/animate/types.ts",
								"name": "TypeLiteral"
							},
							{
								"fileName": "gutenberg-storybook-preview/packages/components/src/animate/types.ts",
								"name": "TypeLiteral"
							},
							{
								"fileName": "gutenberg-storybook-preview/packages/components/src/animate/types.ts",
								"name": "TypeLiteral"
							},
							{
								"fileName": "gutenberg-storybook-preview/packages/components/src/animate/types.ts",
								"name": "TypeLiteral"
							}
						],
						"description": "",
						"name": "options",
						"required": false,
						"tags": {},
						"type": { "name": "Omit<AppearOptions, \"type\"> | Omit<SlideInOptions, \"type\"> | Omit<LoadingOptions, \"type\"> | Omit<NoAnimationOptions, \"type\">" }
					}
				},
				"tags": { "deprecated": "```jsx\nimport { Animate, Notice } from '@wordpress/components';\n\nconst MyAnimatedNotice = () => (\n	<Animate type=\"slide-in\" options={ { origin: 'top' } }>\n		{ ( { className } ) => (\n			<Notice className={ className } status=\"success\">\n				<p>Animation finished.</p>\n			</Notice>\n		) }\n	</Animate>\n);\n```" }
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/components/src/animate/stories/index.story.tsx
var import_jsx_dev_runtime, _jsxFileName, meta, Template, Default, AppearTopLeft, AppearTopRight, AppearBottomLeft, AppearBottomRight, SlideIn;
function init_index_story() {
	return (init_index_story = __esmMin((() => {
		init_animate();
		init_notice();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/animate/stories/index.story.tsx";
		meta = {
			title: "Components/@wordpress-components/Deprecated/Animate",
			id: "components-animate",
			component: Animate,
			parameters: {
				controls: { expanded: true },
				docs: { canvas: { sourceState: "shown" } },
				componentStatus: {
					status: "not-recommended",
					whereUsed: "global",
					notes: "Deprecated. Write your own CSS animations instead, preferably using the [`motion tokens`](?path=/docs/design-system-tokens-introduction--docs) available in `@wordpress/theme`."
				}
			}
		};
		Template = (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Animate, { ...props }, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 22,
			columnNumber: 2
		}, void 0);
		Default = Template.bind({});
		Default.args = { children: ({ className }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Notice, {
			className,
			status: "success",
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "No default animation. Use one of type = \"appear\", \"slide-in\", or \"loading\"." }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 29,
				columnNumber: 4
			}, void 0)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 28,
			columnNumber: 3
		}, void 0) };
		AppearTopLeft = Template.bind({});
		AppearTopLeft.args = {
			type: "appear",
			options: { origin: "top left" },
			children: ({ className }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Notice, {
				className,
				status: "success",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Appear animation. Origin: top left." }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 45,
					columnNumber: 4
				}, void 0)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 44,
				columnNumber: 3
			}, void 0)
		};
		AppearTopRight = Template.bind({});
		AppearTopRight.args = {
			type: "appear",
			options: { origin: "top right" },
			children: ({ className }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Notice, {
				className,
				status: "success",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Appear animation. Origin: top right." }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 55,
					columnNumber: 4
				}, void 0)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 54,
				columnNumber: 3
			}, void 0)
		};
		AppearBottomLeft = Template.bind({});
		AppearBottomLeft.args = {
			type: "appear",
			options: { origin: "bottom left" },
			children: ({ className }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Notice, {
				className,
				status: "success",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Appear animation. Origin: bottom left." }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 65,
					columnNumber: 4
				}, void 0)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 64,
				columnNumber: 3
			}, void 0)
		};
		AppearBottomRight = Template.bind({});
		AppearBottomRight.args = {
			type: "appear",
			options: { origin: "bottom right" },
			children: ({ className }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Notice, {
				className,
				status: "success",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Appear animation. Origin: bottom right." }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 75,
					columnNumber: 4
				}, void 0)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 74,
				columnNumber: 3
			}, void 0)
		};
		SlideIn = Template.bind({});
		SlideIn.args = {
			type: "slide-in",
			options: { origin: "left" },
			children: ({ className }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Notice, {
				className,
				status: "success",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Slide-in animation." }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 86,
					columnNumber: 4
				}, void 0)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 85,
				columnNumber: 3
			}, void 0)
		};
		Default.parameters = {
			...Default.parameters,
			docs: {
				...Default.parameters?.docs,
				source: {
					originalSource: "props => <Animate {...props} />",
					...Default.parameters?.docs?.source
				}
			}
		};
		AppearTopLeft.parameters = {
			...AppearTopLeft.parameters,
			docs: {
				...AppearTopLeft.parameters?.docs,
				source: {
					originalSource: "props => <Animate {...props} />",
					...AppearTopLeft.parameters?.docs?.source
				}
			}
		};
		AppearTopRight.parameters = {
			...AppearTopRight.parameters,
			docs: {
				...AppearTopRight.parameters?.docs,
				source: {
					originalSource: "props => <Animate {...props} />",
					...AppearTopRight.parameters?.docs?.source
				}
			}
		};
		AppearBottomLeft.parameters = {
			...AppearBottomLeft.parameters,
			docs: {
				...AppearBottomLeft.parameters?.docs,
				source: {
					originalSource: "props => <Animate {...props} />",
					...AppearBottomLeft.parameters?.docs?.source
				}
			}
		};
		AppearBottomRight.parameters = {
			...AppearBottomRight.parameters,
			docs: {
				...AppearBottomRight.parameters?.docs,
				source: {
					originalSource: "props => <Animate {...props} />",
					...AppearBottomRight.parameters?.docs?.source
				}
			}
		};
		SlideIn.parameters = {
			...SlideIn.parameters,
			docs: {
				...SlideIn.parameters?.docs,
				source: {
					originalSource: "props => <Animate {...props} />",
					...SlideIn.parameters?.docs?.source
				}
			}
		};
	})))();
}
//#endregion
init_index_story();
export { AppearBottomLeft, AppearBottomRight, AppearTopLeft, AppearTopRight, Default, SlideIn, meta as default };
