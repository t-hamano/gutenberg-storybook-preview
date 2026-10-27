import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as __, o as isRTL, t as init_build_module } from "./build-module-v04us4E2.js";
import { a as align_center_default, r as align_left_default, t as align_right_default } from "./align-right-DHumc3vj.js";
import { n as toolbar_group_default, t as init_toolbar_group } from "./toolbar-group-Cym4B6Cw.js";
import { n as toolbar_dropdown_menu_default, t as init_toolbar_dropdown_menu } from "./toolbar-dropdown-menu-DuGKajXG.js";
import { r as init_build_module$1 } from "./library.story-CbQx3MQ6.js";
//#region ../packages/block-editor/src/components/alignment-control/ui.tsx
function AlignmentUI({ value, onChange, alignmentControls = DEFAULT_ALIGNMENT_CONTROLS, label = __("Align text"), description, isCollapsed = true, isToolbar }) {
	function applyOrUnset(align) {
		return () => onChange(value === align ? void 0 : align);
	}
	const activeAlignment = alignmentControls.find((control) => control.align === value);
	function setIcon() {
		if (activeAlignment) return activeAlignment.icon;
		return isRTL() ? align_right_default : align_left_default;
	}
	const UIComponent = isToolbar ? toolbar_group_default : toolbar_dropdown_menu_default;
	const extraProps = isToolbar ? { isCollapsed } : {
		toggleProps: description ? { description } : {},
		popoverProps: POPOVER_PROPS
	};
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(UIComponent, {
		icon: setIcon(),
		label,
		controls: alignmentControls.map((control) => {
			const { align } = control;
			const isActive = value === align;
			return {
				...control,
				isActive,
				role: isCollapsed ? "menuitemradio" : void 0,
				onClick: applyOrUnset(align)
			};
		}),
		...extraProps
	}, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 65,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime$1, _jsxFileName$1, DEFAULT_ALIGNMENT_CONTROLS, POPOVER_PROPS;
function init_ui() {
	return (init_ui = __esmMin((() => {
		init_build_module();
		init_toolbar_dropdown_menu(), init_toolbar_group();
		init_build_module$1();
		import_jsx_dev_runtime$1 = require_jsx_dev_runtime();
		_jsxFileName$1 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/block-editor/src/components/alignment-control/ui.tsx";
		DEFAULT_ALIGNMENT_CONTROLS = [
			{
				icon: align_left_default,
				title: __("Align text left"),
				align: "left"
			},
			{
				icon: align_center_default,
				title: __("Align text center"),
				align: "center"
			},
			{
				icon: align_right_default,
				title: __("Align text right"),
				align: "right"
			}
		];
		POPOVER_PROPS = { placement: "bottom-start" };
		try {
			AlignmentUI.__docgenInfo = {
				"description": "",
				"displayName": "AlignmentUI",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/block-editor/src/components/alignment-control/ui.tsx",
				"methods": [],
				"props": {
					"isToolbar": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/alignment-control/types.ts",
							"name": "AlignmentUIProps"
						}],
						"description": "",
						"name": "isToolbar",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/alignment-control/types.ts",
							"name": "AlignmentUIProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"value": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/alignment-control/types.ts",
							"name": "AlignmentControlProps"
						}],
						"description": "",
						"name": "value",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/alignment-control/types.ts",
							"name": "AlignmentControlProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"onChange": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/alignment-control/types.ts",
							"name": "AlignmentControlProps"
						}],
						"description": "",
						"name": "onChange",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/alignment-control/types.ts",
							"name": "AlignmentControlProps"
						},
						"required": true,
						"tags": {},
						"type": { "name": "(align?: string | undefined) => void" }
					},
					"alignmentControls": {
						"defaultValue": { "value": "[\n	{\n		icon: alignLeft,\n		title: __( 'Align text left' ),\n		align: 'left',\n	},\n	{\n		icon: alignCenter,\n		title: __( 'Align text center' ),\n		align: 'center',\n	},\n	{\n		icon: alignRight,\n		title: __( 'Align text right' ),\n		align: 'right',\n	},\n]" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/alignment-control/types.ts",
							"name": "AlignmentControlProps"
						}],
						"description": "",
						"name": "alignmentControls",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/alignment-control/types.ts",
							"name": "AlignmentControlProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "AlignmentControlOption[]" }
					},
					"label": {
						"defaultValue": { "value": "__( 'Align text' )" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/alignment-control/types.ts",
							"name": "AlignmentControlProps"
						}],
						"description": "",
						"name": "label",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/alignment-control/types.ts",
							"name": "AlignmentControlProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"description": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/alignment-control/types.ts",
							"name": "AlignmentControlProps"
						}],
						"description": "",
						"name": "description",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/alignment-control/types.ts",
							"name": "AlignmentControlProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"isCollapsed": {
						"defaultValue": { "value": "true" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/alignment-control/types.ts",
							"name": "AlignmentControlProps"
						}],
						"description": "",
						"name": "isCollapsed",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/alignment-control/types.ts",
							"name": "AlignmentControlProps"
						},
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
//#region ../packages/block-editor/src/components/alignment-control/index.tsx
var import_jsx_dev_runtime, _jsxFileName, AlignmentControl, AlignmentToolbar;
function init_alignment_control() {
	return (init_alignment_control = __esmMin((() => {
		init_ui();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/block-editor/src/components/alignment-control/index.tsx";
		AlignmentControl = (props) => {
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AlignmentUI, {
				...props,
				isToolbar: false
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 5,
				columnNumber: 9
			}, void 0);
		};
		AlignmentToolbar = (props) => {
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AlignmentUI, {
				...props,
				isToolbar: true
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 9,
				columnNumber: 9
			}, void 0);
		};
		try {
			AlignmentControl.__docgenInfo = {
				"description": "",
				"displayName": "AlignmentControl",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/block-editor/src/components/alignment-control/index.tsx",
				"methods": [],
				"props": {
					"value": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/alignment-control/types.ts",
							"name": "AlignmentControlProps"
						}],
						"description": "",
						"name": "value",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/alignment-control/types.ts",
							"name": "AlignmentControlProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"onChange": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/alignment-control/types.ts",
							"name": "AlignmentControlProps"
						}],
						"description": "",
						"name": "onChange",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/alignment-control/types.ts",
							"name": "AlignmentControlProps"
						},
						"required": true,
						"tags": {},
						"type": { "name": "(align?: string | undefined) => void" }
					},
					"alignmentControls": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/alignment-control/types.ts",
							"name": "AlignmentControlProps"
						}],
						"description": "",
						"name": "alignmentControls",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/alignment-control/types.ts",
							"name": "AlignmentControlProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "AlignmentControlOption[]" }
					},
					"label": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/alignment-control/types.ts",
							"name": "AlignmentControlProps"
						}],
						"description": "",
						"name": "label",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/alignment-control/types.ts",
							"name": "AlignmentControlProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"description": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/alignment-control/types.ts",
							"name": "AlignmentControlProps"
						}],
						"description": "",
						"name": "description",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/alignment-control/types.ts",
							"name": "AlignmentControlProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"isCollapsed": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/alignment-control/types.ts",
							"name": "AlignmentControlProps"
						}],
						"description": "",
						"name": "isCollapsed",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/alignment-control/types.ts",
							"name": "AlignmentControlProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			AlignmentToolbar.__docgenInfo = {
				"description": "",
				"displayName": "AlignmentToolbar",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/block-editor/src/components/alignment-control/index.tsx",
				"methods": [],
				"props": {
					"value": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/alignment-control/types.ts",
							"name": "AlignmentControlProps"
						}],
						"description": "",
						"name": "value",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/alignment-control/types.ts",
							"name": "AlignmentControlProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"onChange": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/alignment-control/types.ts",
							"name": "AlignmentControlProps"
						}],
						"description": "",
						"name": "onChange",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/alignment-control/types.ts",
							"name": "AlignmentControlProps"
						},
						"required": true,
						"tags": {},
						"type": { "name": "(align?: string | undefined) => void" }
					},
					"alignmentControls": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/alignment-control/types.ts",
							"name": "AlignmentControlProps"
						}],
						"description": "",
						"name": "alignmentControls",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/alignment-control/types.ts",
							"name": "AlignmentControlProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "AlignmentControlOption[]" }
					},
					"label": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/alignment-control/types.ts",
							"name": "AlignmentControlProps"
						}],
						"description": "",
						"name": "label",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/alignment-control/types.ts",
							"name": "AlignmentControlProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"description": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/alignment-control/types.ts",
							"name": "AlignmentControlProps"
						}],
						"description": "",
						"name": "description",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/alignment-control/types.ts",
							"name": "AlignmentControlProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"isCollapsed": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/alignment-control/types.ts",
							"name": "AlignmentControlProps"
						}],
						"description": "",
						"name": "isCollapsed",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/alignment-control/types.ts",
							"name": "AlignmentControlProps"
						},
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
export { AlignmentToolbar as n, init_alignment_control as r, AlignmentControl as t };
