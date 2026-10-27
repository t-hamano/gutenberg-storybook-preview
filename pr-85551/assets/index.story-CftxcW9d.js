import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as useResizeObserver, t as init_use_resize_observer } from "./use-resize-observer-C4Y8OHRi.js";
import { a as init_clsx, i as clsx } from "./iframe-UtSZlYID.js";
import { a as SVG, o as init_svg, r as Path } from "./svg-BLFZKYXr.js";
import { r as speak, t as init_build_module } from "./build-module-DsAeWnrG.js";
import { n as star_empty_default } from "./star-empty-BfPmwZrH.js";
import { n as star_filled_default } from "./star-filled-knC7Rv3K.js";
import { n as styles_default } from "./styles-DntDuvIv.js";
import { n as wordpress_default } from "./wordpress-BwlgBeE7.js";
import { n as init_icon, t as Icon } from "./icon-DxWIlbNr.js";
import { n as init_text_control, t as TextControl } from "./text-control-CI8OL6KY.js";
import { r as init_build_module$1 } from "./library.story-CbQx3MQ6.js";
//#region ../packages/components/src/placeholder/index.tsx
/**
* Renders a placeholder. Normally used by blocks to render their empty state.
*
* ```jsx
* import { Placeholder } from '@wordpress/components';
* import { more } from '@wordpress/icons';
*
* const MyPlaceholder = () => <Placeholder icon={ more } label="Placeholder" />;
* ```
*/
function Placeholder(props) {
	const { icon, children, label, instructions, className, notices, preview, isColumnLayout, withIllustration, ...additionalProps } = props;
	const [resizeListener, { width }] = useResizeObserver();
	let modifierClassNames;
	if (typeof width === "number") modifierClassNames = {
		"is-large": width >= 480,
		"is-medium": width >= 160 && width < 480,
		"is-small": width < 160
	};
	const classes = clsx("components-placeholder", className, modifierClassNames, withIllustration ? "has-illustration" : null);
	const fieldsetClasses = clsx("components-placeholder__fieldset", { "is-column-layout": isColumnLayout });
	(0, import_react.useEffect)(() => {
		if (instructions) speak(instructions);
	}, [instructions]);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)("div", {
		...additionalProps,
		className: classes,
		children: [
			withIllustration ? PlaceholderIllustration : null,
			resizeListener,
			notices,
			preview && /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)("div", {
				className: "components-placeholder__preview",
				children: preview
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 83,
				columnNumber: 5
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)("div", {
				className: "components-placeholder__label",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(Icon, { icon }, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 88,
					columnNumber: 5
				}, this), label]
			}, void 0, true, {
				fileName: _jsxFileName$1,
				lineNumber: 87,
				columnNumber: 4
			}, this),
			!!instructions && /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)("div", {
				className: "components-placeholder__instructions",
				children: instructions
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 92,
				columnNumber: 5
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)("div", {
				className: fieldsetClasses,
				children
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 96,
				columnNumber: 4
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName$1,
		lineNumber: 78,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime$1, _jsxFileName$1, PlaceholderIllustration;
function init_placeholder() {
	return (init_placeholder = __esmMin((() => {
		init_clsx();
		init_use_resize_observer();
		init_svg();
		init_react();
		init_build_module();
		init_icon();
		import_jsx_dev_runtime$1 = require_jsx_dev_runtime();
		_jsxFileName$1 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/placeholder/index.tsx";
		PlaceholderIllustration = /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(SVG, {
			className: "components-placeholder__illustration",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			viewBox: "0 0 60 60",
			preserveAspectRatio: "none",
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(Path, {
				vectorEffect: "non-scaling-stroke",
				d: "M60 60 0 0"
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 18,
				columnNumber: 3
			}, void 0)
		}, void 0, false, {
			fileName: _jsxFileName$1,
			lineNumber: 11,
			columnNumber: 2
		}, void 0);
		try {
			Placeholder.__docgenInfo = {
				"description": "Renders a placeholder. Normally used by blocks to render their empty state.\n\n```jsx\nimport { Placeholder } from '@wordpress/components';\nimport { more } from '@wordpress/icons';\n\nconst MyPlaceholder = () => <Placeholder icon={ more } label=\"Placeholder\" />;\n```",
				"displayName": "Placeholder",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/placeholder/index.tsx",
				"methods": [],
				"props": {
					"children": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/placeholder/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The children elements.",
						"name": "children",
						"required": false,
						"tags": {},
						"type": { "name": "ReactNode" }
					},
					"className": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/placeholder/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Class to set on the container div.",
						"name": "className",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"icon": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/placeholder/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "If provided, renders an icon next to the label.",
						"name": "icon",
						"required": false,
						"tags": {},
						"type": { "name": "IconType" }
					},
					"instructions": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/placeholder/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Instructions of the placeholder.",
						"name": "instructions",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"isColumnLayout": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/placeholder/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Changes placeholder children layout from flex-row to flex-column.",
						"name": "isColumnLayout",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"label": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/placeholder/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Title of the placeholder.",
						"name": "label",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"notices": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/placeholder/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "A rendered notices list",
						"name": "notices",
						"required": false,
						"tags": {},
						"type": { "name": "ReactNode" }
					},
					"preview": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/placeholder/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Preview to be rendered in the placeholder.",
						"name": "preview",
						"required": false,
						"tags": {},
						"type": { "name": "ReactNode" }
					},
					"withIllustration": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/placeholder/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Outputs a placeholder illustration.",
						"name": "withIllustration",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/components/src/placeholder/stories/index.story.tsx
var import_jsx_dev_runtime, _jsxFileName, ICONS, meta, Template, Default;
function init_index_story() {
	return (init_index_story = __esmMin((() => {
		init_build_module$1();
		init_react();
		init_placeholder();
		init_text_control();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/placeholder/stories/index.story.tsx";
		ICONS = {
			starEmpty: star_empty_default,
			starFilled: star_filled_default,
			styles: styles_default,
			wordpress: wordpress_default
		};
		meta = {
			component: Placeholder,
			id: "components-placeholder",
			title: "Components/@wordpress-components/Placeholder",
			argTypes: {
				children: { control: false },
				notices: { control: false },
				preview: { control: false },
				icon: {
					control: { type: "select" },
					options: Object.keys(ICONS),
					mapping: ICONS
				}
			},
			parameters: {
				controls: { expanded: true },
				docs: { canvas: { sourceState: "shown" } },
				componentStatus: {
					status: "recommended",
					whereUsed: "editor"
				}
			}
		};
		Template = (args) => {
			const [value, setValue] = (0, import_react.useState)("");
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Placeholder, {
				...args,
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextControl, {
					label: "Sample Field",
					placeholder: "Enter something here",
					value,
					onChange: setValue
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 40,
					columnNumber: 5
				}, void 0) }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 39,
					columnNumber: 4
				}, void 0)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 38,
				columnNumber: 3
			}, void 0);
		};
		Default = Template.bind({});
		Default.args = {
			icon: "wordpress",
			label: "My Placeholder Label",
			instructions: "Here are instructions you should follow"
		};
		Default.parameters = {
			...Default.parameters,
			docs: {
				...Default.parameters?.docs,
				source: {
					originalSource: "args => {\n  const [value, setValue] = useState('');\n  return <Placeholder {...args}>\n            <div>\n                <TextControl label=\"Sample Field\" placeholder=\"Enter something here\" value={value} onChange={setValue} />\n            </div>\n        </Placeholder>;\n}",
					...Default.parameters?.docs?.source
				}
			}
		};
	})))();
}
//#endregion
init_index_story();
export { Default, meta as default };
