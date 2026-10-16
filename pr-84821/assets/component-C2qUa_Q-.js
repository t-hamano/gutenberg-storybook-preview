import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { a as init_context, n as init_component$1, o as useToggleGroupControlContext, t as ConnectedToggleGroupControlOptionBase } from "./component-BfjPg82x.js";
//#region ../packages/components/src/toggle-group-control/toggle-group-control-option/component.tsx
function UnforwardedToggleGroupControlOption(props, ref) {
	useToggleGroupControlContext("ToggleGroupControlOption");
	const { label, ...restProps } = props;
	const optionLabel = restProps["aria-label"] || label;
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ConnectedToggleGroupControlOptionBase, {
		...restProps,
		"aria-label": optionLabel,
		ref,
		children: label
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 20,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime, _jsxFileName, ToggleGroupControlOption;
function init_component() {
	return (init_component = __esmMin((() => {
		init_react();
		init_component$1();
		init_context();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/toggle-group-control/toggle-group-control-option/component.tsx";
		ToggleGroupControlOption = (0, import_react.forwardRef)(UnforwardedToggleGroupControlOption);
		ToggleGroupControlOption.displayName = "ToggleGroupControlOption";
		try {
			ToggleGroupControlOption.__docgenInfo = {
				"description": "`ToggleGroupControlOption` is a form component and is meant to be used as a\nchild of `ToggleGroupControl`.\n\n```jsx\nimport {\n  __experimentalToggleGroupControl as ToggleGroupControl,\n  __experimentalToggleGroupControlOption as ToggleGroupControlOption,\n} from '@wordpress/components';\n\nfunction Example() {\n  return (\n    <ToggleGroupControl\n      label=\"my label\"\n      value=\"vertical\"\n      isBlock\n    >\n      <ToggleGroupControlOption value=\"horizontal\" label=\"Horizontal\" />\n      <ToggleGroupControlOption value=\"vertical\" label=\"Vertical\" />\n    </ToggleGroupControl>\n  );\n}\n```",
				"displayName": "ToggleGroupControlOption",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/toggle-group-control/toggle-group-control-option/component.tsx",
				"methods": [],
				"props": {
					"disabled": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/toggle-group-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Whether this option is unselectable.",
						"name": "disabled",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"value": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/toggle-group-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "value",
						"required": true,
						"tags": {},
						"type": { "name": "string | number" }
					},
					"showTooltip": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/toggle-group-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Whether to display a Tooltip for the control option. If set to `true`, the tooltip will\nshow the aria-label or the label prop text.",
						"name": "showTooltip",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"label": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/toggle-group-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Label for the option. If needed, the `aria-label` prop can be used in addition\nto specify a different label for assistive technologies.",
						"name": "label",
						"required": true,
						"tags": {},
						"type": { "name": "string" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
export { init_component as n, ToggleGroupControlOption as t };
