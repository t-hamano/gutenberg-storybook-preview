import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as init_icon, t as Icon } from "./icon-DxWIlbNr.js";
import { a as init_context, n as init_component$1, o as useToggleGroupControlContext, t as ConnectedToggleGroupControlOptionBase } from "./component-CBkIK7Xd.js";
//#region ../packages/components/src/toggle-group-control/toggle-group-control-option-icon/component.tsx
function UnforwardedToggleGroupControlOptionIcon(props, ref) {
	useToggleGroupControlContext("ToggleGroupControlOptionIcon");
	const { icon, label, ...restProps } = props;
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ConnectedToggleGroupControlOptionBase, {
		...restProps,
		isIcon: true,
		"aria-label": label,
		showTooltip: true,
		ref,
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { icon }, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 27,
			columnNumber: 4
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 20,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime, _jsxFileName, ToggleGroupControlOptionIcon;
function init_component() {
	return (init_component = __esmMin((() => {
		init_react();
		init_component$1();
		init_context();
		init_icon();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/toggle-group-control/toggle-group-control-option-icon/component.tsx";
		ToggleGroupControlOptionIcon = (0, import_react.forwardRef)(UnforwardedToggleGroupControlOptionIcon);
		ToggleGroupControlOptionIcon.displayName = "ToggleGroupControlOptionIcon";
		try {
			ToggleGroupControlOptionIcon.__docgenInfo = {
				"description": "`ToggleGroupControlOptionIcon` is a form component which is meant to be used as a\nchild of `ToggleGroupControl` and displays an icon.\n\n```jsx\n\nimport {\n__experimentalToggleGroupControl as ToggleGroupControl,\n__experimentalToggleGroupControlOptionIcon as ToggleGroupControlOptionIcon,\nfrom '@wordpress/components';\nimport { formatLowercase, formatUppercase } from '@wordpress/icons';\n\nfunction Example() {\n return (\n   <ToggleGroupControl>\n     <ToggleGroupControlOptionIcon\n       value=\"uppercase\"\n       label=\"Uppercase\"\n       icon={ formatUppercase }\n     />\n     <ToggleGroupControlOptionIcon\n       value=\"lowercase\"\n       label=\"Lowercase\"\n       icon={ formatLowercase }\n     />\n   </ToggleGroupControl>\n );\n}\n```",
				"displayName": "ToggleGroupControlOptionIcon",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/toggle-group-control/toggle-group-control-option-icon/component.tsx",
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
					"icon": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/toggle-group-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Icon displayed as the content of the option. Usually one of the icons from\nthe `@wordpress/icons` package, or a custom React `<svg>` icon.",
						"name": "icon",
						"required": true,
						"tags": {},
						"type": { "name": "Element" }
					},
					"label": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/toggle-group-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The text to accessibly label the icon option. Will also be shown in a tooltip.",
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
export { init_component as n, ToggleGroupControlOptionIcon as t };
