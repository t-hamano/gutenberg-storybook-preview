import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { a as init_clsx, i as clsx } from "./iframe-UtSZlYID.js";
import { n as init_build_module, t as inertValue } from "./build-module-DRvOo7DC.js";
import { n as init_component, t as VStack } from "./component-9S7Padmp.js";
import { n as init_select_control, t as SelectControl } from "./select-control-B1sl2vXY.js";
import { n as init_text_control, t as TextControl } from "./text-control-CI8OL6KY.js";
import { n as init_textarea_control, t as TextareaControl } from "./textarea-control-CJxVLIAj.js";
//#region ../packages/components/src/disabled/context.ts
var Context;
function init_context() {
	return (init_context = __esmMin((() => {
		init_react();
		Context = (0, import_react.createContext)(false);
		Context.displayName = "DisabledContext";
	})))();
}
//#endregion
//#region ../packages/components/src/disabled/style.module.scss
var disabled, style_module_default;
function init_style_module() {
	return (init_style_module = __esmMin((() => {
		disabled = "_disabled_1kaze_1";
		style_module_default = { disabled };
	})))();
}
//#endregion
//#region ../packages/components/src/disabled/index.tsx
/**
* `Disabled` is a component which disables descendant tabbable elements and
* prevents pointer interaction.
*
* _Note: this component may not behave as expected in browsers that don't
* support the `inert` HTML attribute. We recommend adding the official WICG
* polyfill when using this component in your project._
*
* @see https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/inert
*
* ```jsx
* import { Button, Disabled, TextControl } from '@wordpress/components';
* import { useState } from '@wordpress/element';
*
* const MyDisabled = () => {
* 	const [ isDisabled, setIsDisabled ] = useState( true );
*
*	let input = (
*		<TextControl
*			label="Input"
*			onChange={ () => {} }
*		/>
*	);
* 	if ( isDisabled ) {
* 		input = <Disabled>{ input }</Disabled>;
* 	}
*
* 	const toggleDisabled = () => {
* 		setIsDisabled( ( state ) => ! state );
* 	};
*
* 	return (
* 		<div>
* 			{ input }
* 			<Button variant="primary" onClick={ toggleDisabled }>
* 				Toggle Disabled
* 			</Button>
* 		</div>
* 	);
* };
* ```
*/
function Disabled({ className, children, isDisabled = true, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(Provider, {
		value: isDisabled,
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)("div", {
			inert: inertValue(isDisabled),
			className: clsx(className, isDisabled && [style_module_default.disabled, "components-disabled"]) || void 0,
			...props,
			children
		}, void 0, false, {
			fileName: _jsxFileName$1,
			lineNumber: 60,
			columnNumber: 4
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 59,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime$1, _jsxFileName$1, Consumer, Provider;
function init_disabled() {
	return (init_disabled = __esmMin((() => {
		init_clsx();
		init_build_module();
		init_context();
		init_style_module();
		import_jsx_dev_runtime$1 = require_jsx_dev_runtime();
		_jsxFileName$1 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/disabled/index.tsx";
		({Consumer, Provider} = Context);
		Disabled.Context = Context;
		Disabled.Consumer = Consumer;
		try {
			Disabled.__docgenInfo = {
				"description": "`Disabled` is a component which disables descendant tabbable elements and\nprevents pointer interaction.\n\n_Note: this component may not behave as expected in browsers that don't\nsupport the `inert` HTML attribute. We recommend adding the official WICG\npolyfill when using this component in your project._",
				"displayName": "Disabled",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/disabled/index.tsx",
				"methods": [],
				"props": {
					"isDisabled": {
						"defaultValue": { "value": "true" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/disabled/types.ts",
							"name": "DisabledProps"
						}],
						"description": "Whether to disable all the descendant fields.",
						"name": "isDisabled",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/disabled/types.ts",
							"name": "DisabledProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"children": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/disabled/types.ts",
							"name": "DisabledProps"
						}],
						"description": "The children elements.",
						"name": "children",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/disabled/types.ts",
							"name": "DisabledProps"
						},
						"required": true,
						"tags": {},
						"type": { "name": "ReactNode" }
					},
					"as": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/context/wordpress-component.ts",
							"name": "TypeLiteral"
						}],
						"description": "The HTML element or React component to render the component as.",
						"name": "as",
						"required": false,
						"tags": {},
						"type": { "name": "keyof IntrinsicElements | JSXElementConstructor<any>" }
					}
				},
				"tags": { "see": "https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/inert\n\n```jsx\nimport { Button, Disabled, TextControl } from '@wordpress/components';\nimport { useState } from '@wordpress/element';\n\nconst MyDisabled = () => {\nconst [ isDisabled, setIsDisabled ] = useState( true );\n\nlet input = (\n<TextControl\nlabel=\"Input\"\nonChange={ () => {} }\n/>\n);\nif ( isDisabled ) {\ninput = <Disabled>{ input }</Disabled>;\n}\n\nconst toggleDisabled = () => {\nsetIsDisabled( ( state ) => ! state );\n};\n\nreturn (\n<div>\n{ input }\n<Button variant=\"primary\" onClick={ toggleDisabled }>\nToggle Disabled\n</Button>\n</div>\n);\n};\n```" }
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/components/src/disabled/stories/index.story.tsx
var import_jsx_dev_runtime, _jsxFileName, meta, Form, Default, ContentEditable;
function init_index_story() {
	return (init_index_story = __esmMin((() => {
		init_react();
		init_disabled();
		init_select_control();
		init_text_control();
		init_textarea_control();
		init_component();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/disabled/stories/index.story.tsx";
		meta = {
			tags: ["manifest"],
			title: "Components/@wordpress-components/Utilities/Disabled",
			id: "components-disabled",
			component: Disabled,
			argTypes: {
				as: { control: false },
				children: { control: false }
			},
			parameters: {
				controls: { expanded: true },
				docs: { canvas: { sourceState: "shown" } },
				componentStatus: {
					status: "recommended",
					whereUsed: "global"
				}
			}
		};
		Form = () => {
			const [textControlValue, setTextControlValue] = (0, import_react.useState)("");
			const [textAreaValue, setTextAreaValue] = (0, import_react.useState)("");
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(VStack, { children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextControl, {
					label: "Text Control",
					value: textControlValue,
					onChange: setTextControlValue
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 37,
					columnNumber: 4
				}, void 0),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextareaControl, {
					label: "TextArea Control",
					value: textAreaValue,
					onChange: setTextAreaValue
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 42,
					columnNumber: 4
				}, void 0),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectControl, {
					label: "Select Control",
					onChange: () => {},
					options: [
						{
							value: "",
							label: "Select an option",
							disabled: true
						},
						{
							value: "a",
							label: "Option A"
						},
						{
							value: "b",
							label: "Option B"
						},
						{
							value: "c",
							label: "Option C"
						}
					]
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 47,
					columnNumber: 4
				}, void 0)
			] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 36,
				columnNumber: 3
			}, void 0);
		};
		Default = (args) => {
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Disabled, {
				...args,
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, {}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 64,
					columnNumber: 4
				}, void 0)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 63,
				columnNumber: 3
			}, void 0);
		};
		Default.args = { isDisabled: true };
		ContentEditable = (args) => {
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Disabled, {
				...args,
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					contentEditable: true,
					tabIndex: 0,
					suppressContentEditableWarning: true,
					children: "contentEditable"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 75,
					columnNumber: 4
				}, void 0)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 74,
				columnNumber: 3
			}, void 0);
		};
		ContentEditable.args = { isDisabled: true };
		Default.parameters = {
			...Default.parameters,
			docs: {
				...Default.parameters?.docs,
				source: {
					originalSource: "args => {\n  return <Disabled {...args}>\n            <Form />\n        </Disabled>;\n}",
					...Default.parameters?.docs?.source
				}
			}
		};
		ContentEditable.parameters = {
			...ContentEditable.parameters,
			docs: {
				...ContentEditable.parameters?.docs,
				source: {
					originalSource: "args => {\n  return <Disabled {...args}>\n            <div contentEditable tabIndex={0} suppressContentEditableWarning>\n                contentEditable\n            </div>\n        </Disabled>;\n}",
					...ContentEditable.parameters?.docs?.source
				}
			}
		};
	})))();
}
//#endregion
init_index_story();
export { ContentEditable, Default, meta as default };
