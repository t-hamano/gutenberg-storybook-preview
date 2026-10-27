import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as init_build_module, t as deprecated } from "./build-module-BWCORUbm.js";
import { a as init_clsx, i as clsx } from "./iframe-UtSZlYID.js";
//#region ../packages/components/src/responsive-wrapper/index.tsx
/**
* A wrapper component that maintains its aspect ratio when resized.
*
* This component is deprecated. Use the CSS `aspect-ratio` property instead.
*
* @deprecated
*
* ```jsx
* import { ResponsiveWrapper } from '@wordpress/components';
*
* const MyResponsiveWrapper = () => (
* 	<ResponsiveWrapper naturalWidth={ 2000 } naturalHeight={ 680 }>
* 		<img
* 			src="https://s.w.org/style/images/about/WordPress-logotype-standard.png"
* 			alt="WordPress"
* 		/>
* 	</ResponsiveWrapper>
* );
* ```
*/
function ResponsiveWrapper({ naturalWidth, naturalHeight, children, isInline = false }) {
	deprecated("wp.components.ResponsiveWrapper", {
		since: "7.2",
		version: "7.4",
		alternative: "the CSS aspect-ratio property"
	});
	if (import_react.Children.count(children) !== 1) return null;
	const TagName = isInline ? "span" : "div";
	let aspectRatio;
	if (naturalWidth && naturalHeight) aspectRatio = `${naturalWidth} / ${naturalHeight}`;
	const ch = children;
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(TagName, {
		className: "components-responsive-wrapper",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)("div", { children: (0, import_react.cloneElement)(ch, {
			className: clsx("components-responsive-wrapper__content", ch.props.className),
			style: {
				...ch.props.style,
				aspectRatio
			}
		}) }, void 0, false, {
			fileName: _jsxFileName$1,
			lineNumber: 54,
			columnNumber: 4
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 53,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime$1, _jsxFileName$1;
function init_responsive_wrapper() {
	return (init_responsive_wrapper = __esmMin((() => {
		init_clsx();
		init_build_module();
		init_react();
		import_jsx_dev_runtime$1 = require_jsx_dev_runtime();
		_jsxFileName$1 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/responsive-wrapper/index.tsx";
		try {
			ResponsiveWrapper.__docgenInfo = {
				"description": "A wrapper component that maintains its aspect ratio when resized.\n\nThis component is deprecated. Use the CSS `aspect-ratio` property instead.",
				"displayName": "ResponsiveWrapper",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/responsive-wrapper/index.tsx",
				"methods": [],
				"props": {
					"naturalWidth": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/responsive-wrapper/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The intrinsic width of the element to wrap. Will be used to determine the aspect ratio.",
						"name": "naturalWidth",
						"required": false,
						"tags": {},
						"type": { "name": "number" }
					},
					"naturalHeight": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/responsive-wrapper/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The intrinsic height of the element to wrap. Will be used to determine the aspect ratio.",
						"name": "naturalHeight",
						"required": false,
						"tags": {},
						"type": { "name": "number" }
					},
					"children": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/responsive-wrapper/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The element to wrap.",
						"name": "children",
						"required": true,
						"tags": {},
						"type": { "name": "ReactElement<unknown, string | JSXElementConstructor<any>>" }
					},
					"isInline": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/responsive-wrapper/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "If true, the wrapper will be `span` instead of `div`.",
						"name": "isInline",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					}
				},
				"tags": { "deprecated": "```jsx\nimport { ResponsiveWrapper } from '@wordpress/components';\n\nconst MyResponsiveWrapper = () => (\n	<ResponsiveWrapper naturalWidth={ 2000 } naturalHeight={ 680 }>\n		<img\n			src=\"https://s.w.org/style/images/about/WordPress-logotype-standard.png\"\n			alt=\"WordPress\"\n		/>\n	</ResponsiveWrapper>\n);\n```" }
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/components/src/responsive-wrapper/stories/index.story.tsx
var import_jsx_dev_runtime, _jsxFileName, meta, Template, Default, WithSVG;
function init_index_story() {
	return (init_index_story = __esmMin((() => {
		init_responsive_wrapper();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/responsive-wrapper/stories/index.story.tsx";
		meta = {
			component: ResponsiveWrapper,
			title: "Components/@wordpress-components/Deprecated/ResponsiveWrapper",
			id: "components-responsivewrapper",
			argTypes: { children: { control: false } },
			parameters: {
				controls: { expanded: true },
				docs: { canvas: { sourceState: "shown" } },
				componentStatus: {
					status: "not-recommended",
					whereUsed: "global",
					notes: "Deprecated. Use the CSS `aspect-ratio` property instead."
				}
			}
		};
		Template = (args) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ResponsiveWrapper, { ...args }, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 24,
			columnNumber: 2
		}, void 0);
		Default = Template.bind({});
		Default.args = {
			naturalWidth: 2e3,
			naturalHeight: 680,
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
				src: "https://s.w.org/style/images/about/WordPress-logotype-standard.png",
				alt: "WordPress"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 32,
				columnNumber: 3
			}, void 0)
		};
		WithSVG = Template.bind({});
		WithSVG.args = { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", {
			xmlns: "http://www.w3.org/2000/svg",
			viewBox: "0 0 280 640",
			preserveAspectRatio: "xMinYMin meet",
			width: "280px",
			height: "640px",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
				x: "0",
				y: "0",
				width: "280",
				height: "640",
				style: { fill: "blue" }
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 58,
				columnNumber: 4
			}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("g", { children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("circle", {
					style: { fill: "red" },
					cx: "140",
					cy: "160",
					r: "60"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 66,
					columnNumber: 5
				}, void 0),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("circle", {
					style: { fill: "yellow" },
					cx: "140",
					cy: "320",
					r: "60"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 67,
					columnNumber: 5
				}, void 0),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("circle", {
					style: { fill: "#40CC40" },
					cx: "140",
					cy: "480",
					r: "60"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 68,
					columnNumber: 5
				}, void 0)
			] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 65,
				columnNumber: 4
			}, void 0)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 51,
			columnNumber: 3
		}, void 0) };
		try {
			WithSVG.__docgenInfo = {
				"description": "When passing an `SVG` element as the `<ResponsiveWrapper />`'s child, make\nsure that it has the `viewbox` and the `preserveAspectRatio` set.\n\nWhen dealing with SVGs, it may not be possible to derive its `naturalWidth`\nand `naturalHeight` and therefore passing them as propertied to\n`<ResponsiveWrapper />`. In this case, the SVG simply keeps scaling up to fill\nits container, unless the `height` and `width` attributes are specified.",
				"displayName": "WithSVG",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/responsive-wrapper/stories/index.story.tsx",
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
					originalSource: "args => <ResponsiveWrapper {...args} />",
					...Default.parameters?.docs?.source
				}
			}
		};
		WithSVG.parameters = {
			...WithSVG.parameters,
			docs: {
				...WithSVG.parameters?.docs,
				source: {
					originalSource: "args => <ResponsiveWrapper {...args} />",
					...WithSVG.parameters?.docs?.source
				},
				description: {
					story: "When passing an `SVG` element as the `<ResponsiveWrapper />`'s child, make\nsure that it has the `viewbox` and the `preserveAspectRatio` set.\n\nWhen dealing with SVGs, it may not be possible to derive its `naturalWidth`\nand `naturalHeight` and therefore passing them as propertied to\n`<ResponsiveWrapper />`. In this case, the SVG simply keeps scaling up to fill\nits container, unless the `height` and `width` attributes are specified.",
					...WithSVG.parameters?.docs?.description
				}
			}
		};
	})))();
}
//#endregion
init_index_story();
export { Default, WithSVG, meta as default };
