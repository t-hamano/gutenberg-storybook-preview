import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { o as clsx, s as init_clsx } from "./iframe-D4D-SsYo.js";
//#region ../packages/components/src/form-toggle/index.tsx
function UnforwardedFormToggle(props, ref) {
	const { className, checked, id, disabled, onChange = noop, onClick, ...additionalProps } = props;
	const wrapperClasses = clsx("components-form-toggle", className, {
		"is-checked": checked,
		"is-disabled": disabled
	});
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
		className: wrapperClasses,
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
				className: "components-form-toggle__input",
				id,
				type: "checkbox",
				checked,
				onChange,
				disabled,
				onClick: (event) => {
					event.currentTarget.focus();
					onClick?.(event);
				},
				...additionalProps,
				ref
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 29,
				columnNumber: 4
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "components-form-toggle__track" }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 45,
				columnNumber: 4
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "components-form-toggle__thumb" }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 46,
				columnNumber: 4
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 28,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime, _jsxFileName, noop, FormToggle;
function init_form_toggle() {
	return (init_form_toggle = __esmMin((() => {
		init_clsx();
		init_react();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/form-toggle/index.tsx";
		noop = () => {};
		FormToggle = (0, import_react.forwardRef)(UnforwardedFormToggle);
		FormToggle.displayName = "FormToggle";
		try {
			FormToggle.__docgenInfo = {
				"description": "FormToggle switches a single setting on or off.\n\n```jsx\nimport { FormToggle } from '@wordpress/components';\nimport { useState } from '@wordpress/element';\n\nconst MyFormToggle = () => {\n  const [ isChecked, setChecked ] = useState( true );\n\n  return (\n    <FormToggle\n      checked={ isChecked }\n      onChange={ () => setChecked( ( state ) => ! state ) }\n    />\n  );\n};\n```",
				"displayName": "FormToggle",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/form-toggle/index.tsx",
				"methods": [],
				"props": {
					"checked": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/form-toggle/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "If checked is true the toggle will be checked. If checked is false the\ntoggle will be unchecked. If no value is passed the toggle will be\nunchecked.",
						"name": "checked",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"disabled": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/form-toggle/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "If disabled is true the toggle will be disabled and apply the appropriate\nstyles.",
						"name": "disabled",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"onChange": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/form-toggle/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "A callback function invoked when the toggle is clicked.",
						"name": "onChange",
						"required": true,
						"tags": {},
						"type": { "name": "(event: ChangeEvent<HTMLInputElement, Element>) => void" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
export { init_form_toggle as n, FormToggle as t };
