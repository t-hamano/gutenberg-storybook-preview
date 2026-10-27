import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as __, t as init_build_module } from "./build-module-v04us4E2.js";
import { a as init_clsx, i as clsx } from "./iframe-UtSZlYID.js";
import { n as more_vertical_default } from "./more-vertical-CuarrvSu.js";
import { n as init_dropdown_menu, t as dropdown_menu_default } from "./dropdown-menu-ztx4eNXW.js";
import { i as menu_group_default, n as menu_item_default, r as init_menu_group, t as init_menu_item } from "./menu-item-Csg8JdPi.js";
import { r as init_build_module$1 } from "./library.story-CbQx3MQ6.js";
//#region ../packages/block-editor/src/components/warning/index.tsx
function Warning({ className, actions, children, secondaryActions }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		style: {
			display: "contents",
			all: "initial"
		},
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: clsx(className, "block-editor-warning"),
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "block-editor-warning__contents",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: "block-editor-warning__message",
					children
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 17,
					columnNumber: 6
				}, this), (actions?.length > 0 || secondaryActions) && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "block-editor-warning__actions",
					children: [actions?.length > 0 && actions.map((action, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
						className: "block-editor-warning__action",
						children: action
					}, i, false, {
						fileName: _jsxFileName,
						lineNumber: 27,
						columnNumber: 10
					}, this)), secondaryActions && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(dropdown_menu_default, {
						className: "block-editor-warning__secondary",
						icon: more_vertical_default,
						label: __("More options"),
						popoverProps: {
							placement: "bottom-end",
							className: "block-editor-warning__dropdown"
						},
						noIcons: true,
						children: () => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(menu_group_default, { children: secondaryActions.map((item, pos) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(menu_item_default, {
							onClick: item.onClick,
							children: item.title
						}, pos, false, {
							fileName: _jsxFileName,
							lineNumber: 50,
							columnNumber: 14
						}, this)) }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 47,
							columnNumber: 11
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 35,
						columnNumber: 9
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 24,
					columnNumber: 7
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 16,
				columnNumber: 5
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 15,
			columnNumber: 4
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 14,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime, _jsxFileName;
function init_warning() {
	return (init_warning = __esmMin((() => {
		init_clsx();
		init_dropdown_menu(), init_menu_group(), init_menu_item();
		init_build_module();
		init_build_module$1();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/block-editor/src/components/warning/index.tsx";
		try {
			Warning.__docgenInfo = {
				"description": "",
				"displayName": "Warning",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/block-editor/src/components/warning/index.tsx",
				"methods": [],
				"props": {
					"className": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/warning/types.ts",
							"name": "WarningProps"
						}],
						"description": "Classes to pass to element.",
						"name": "className",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/warning/types.ts",
							"name": "WarningProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"actions": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/warning/types.ts",
							"name": "WarningProps"
						}],
						"description": "An array of elements to be rendered as action buttons in the warning\nelement.",
						"name": "actions",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/warning/types.ts",
							"name": "WarningProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "ReactNode[]" }
					},
					"children": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/warning/types.ts",
							"name": "WarningProps"
						}],
						"description": "Intended to represent the block to which the warning pertains.",
						"name": "children",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/warning/types.ts",
							"name": "WarningProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "ReactNode" }
					},
					"secondaryActions": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/warning/types.ts",
							"name": "WarningProps"
						}],
						"description": "Options to be rendered in a dropdown of secondary actions.",
						"name": "secondaryActions",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/warning/types.ts",
							"name": "WarningProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "WarningSecondaryAction[]" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
export { init_warning as n, Warning as t };
