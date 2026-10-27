import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { a as init_clsx, i as clsx } from "./iframe-UtSZlYID.js";
import { i as init_SwitchRoot, n as init_SwitchThumb, r as SwitchRoot, t as SwitchThumb } from "./SwitchThumb-C9KUg0aE.js";
import { n as resets_module_default, t as init_resets_module } from "./resets.module-CJil9Bz6.js";
//#region ../packages/ui/src/form/primitives/switch/style.module.scss
var root, thumb, style_module_default;
function init_style_module() {
	return (init_style_module = __esmMin((() => {
		root = "_root_zk32s_99";
		thumb = "_thumb_zk32s_155";
		style_module_default = {
			root,
			thumb
		};
	})))();
}
//#endregion
//#region ../packages/ui/src/form/primitives/switch/switch.tsx
var import_jsx_dev_runtime, _jsxFileName, Switch;
function init_switch() {
	return (init_switch = __esmMin((() => {
		init_SwitchRoot(), init_SwitchThumb();
		init_clsx();
		init_react();
		init_resets_module();
		init_style_module();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/primitives/switch/switch.tsx";
		Switch = (0, import_react.forwardRef)(function UnforwardedSwitch({ className, ...props }, ref) {
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SwitchRoot, {
				ref,
				className: clsx(resets_module_default["box-sizing"], style_module_default.root, className),
				...props,
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SwitchThumb, { className: style_module_default.thumb }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 27,
					columnNumber: 5
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 18,
				columnNumber: 4
			}, this);
		});
		try {
			Switch.__docgenInfo = {
				"description": "A low-level switch primitive.\n\nUse `Field` to associate an accessible label.\n\nPrefer `SwitchControl` for labeled items.",
				"displayName": "Switch",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/primitives/switch/switch.tsx",
				"methods": [],
				"props": {
					"form": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/switch/root/SwitchRoot.d.mts",
							"name": "SwitchRootProps"
						}],
						"description": "Identifies the form that owns the hidden input.\nUseful when the switch is rendered outside the form.",
						"name": "form",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/switch/root/SwitchRoot.d.mts",
							"name": "SwitchRootProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"defaultChecked": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/switch/root/SwitchRoot.d.mts",
							"name": "SwitchRootProps"
						}],
						"description": "Whether the switch is initially active.\n\nTo render a controlled switch, use the `checked` prop instead.",
						"name": "defaultChecked",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/switch/root/SwitchRoot.d.mts",
							"name": "SwitchRootProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"id": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/switch/root/SwitchRoot.d.mts",
							"name": "SwitchRootProps"
						}],
						"description": "The id of the hidden input element.\n\nWhen `nativeButton` is `true`, the id is applied to the root element.",
						"name": "id",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/switch/root/SwitchRoot.d.mts",
							"name": "SwitchRootProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"name": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/switch/root/SwitchRoot.d.mts",
							"name": "SwitchRootProps"
						}],
						"description": "Identifies the field when a form is submitted.",
						"name": "name",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/switch/root/SwitchRoot.d.mts",
							"name": "SwitchRootProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"readOnly": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/switch/root/SwitchRoot.d.mts",
							"name": "SwitchRootProps"
						}],
						"description": "Whether the user should be unable to activate or deactivate the switch.",
						"name": "readOnly",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/switch/root/SwitchRoot.d.mts",
							"name": "SwitchRootProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"inputRef": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/switch/root/SwitchRoot.d.mts",
							"name": "SwitchRootProps"
						}],
						"description": "A ref to access the hidden `<input>` element.",
						"name": "inputRef",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/switch/root/SwitchRoot.d.mts",
							"name": "SwitchRootProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "Ref<HTMLInputElement>" }
					},
					"required": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/switch/root/SwitchRoot.d.mts",
							"name": "SwitchRootProps"
						}],
						"description": "Whether the user must activate the switch before submitting a form.",
						"name": "required",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/switch/root/SwitchRoot.d.mts",
							"name": "SwitchRootProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"disabled": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/switch/root/SwitchRoot.d.mts",
							"name": "SwitchRootProps"
						}],
						"description": "Whether the component should ignore user interaction.",
						"name": "disabled",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/switch/root/SwitchRoot.d.mts",
							"name": "SwitchRootProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"value": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/switch/root/SwitchRoot.d.mts",
							"name": "SwitchRootProps"
						}],
						"description": "The value submitted with the form when the switch is on.\nBy default, switch submits the \"on\" value, matching native checkbox behavior.",
						"name": "value",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/switch/root/SwitchRoot.d.mts",
							"name": "SwitchRootProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"nativeButton": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/internals/types.d.mts",
							"name": "NonNativeButtonProps"
						}],
						"description": "Whether the component renders a native `<button>` element when replacing it\nvia the `render` prop.\nSet to `true` if the rendered element is a native button.",
						"name": "nativeButton",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/internals/types.d.mts",
							"name": "NonNativeButtonProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"checked": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/switch/root/SwitchRoot.d.mts",
							"name": "SwitchRootProps"
						}],
						"description": "Whether the switch is currently active.\n\nTo render an uncontrolled switch, use the `defaultChecked` prop instead.",
						"name": "checked",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/switch/root/SwitchRoot.d.mts",
							"name": "SwitchRootProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"onCheckedChange": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/switch/root/SwitchRoot.d.mts",
							"name": "SwitchRootProps"
						}],
						"description": "Event handler called when the switch is activated or deactivated.",
						"name": "onCheckedChange",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/switch/root/SwitchRoot.d.mts",
							"name": "SwitchRootProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "((checked: boolean, eventDetails: { reason: \"none\"; event: Event; cancel: () => void; allowPropagation: () => void; isCanceled: boolean; isPropagationAllowed: boolean; trigger: Element; }) => void)" }
					},
					"uncheckedValue": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/switch/root/SwitchRoot.d.mts",
							"name": "SwitchRootProps"
						}],
						"description": "The value submitted with the form when the switch is off.\nBy default, unchecked switches do not submit any value, matching native checkbox behavior.",
						"name": "uncheckedValue",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/switch/root/SwitchRoot.d.mts",
							"name": "SwitchRootProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
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
export { init_switch as n, Switch as t };
