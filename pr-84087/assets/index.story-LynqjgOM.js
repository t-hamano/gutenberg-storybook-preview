import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as init_build_module, t as deprecated } from "./build-module-BWCORUbm.js";
import { n as use_instance_id_default, t as init_use_instance_id } from "./use-instance-id-BznKyZc1.js";
import { n as useCompositeStore, t as init_composite_store } from "./composite-store-DmnJIW0O.js";
import { n as init_composite, t as Composite$1 } from "./composite-CLFO7Vk_.js";
//#region ../packages/components/src/composite/legacy/index.tsx
function mapLegacyStatePropsToComponentProps(legacyProps) {
	if (legacyProps.state) {
		const { state, ...rest } = legacyProps;
		const { store, ...props } = mapLegacyStatePropsToComponentProps(state);
		return {
			...rest,
			...props,
			store
		};
	}
	return legacyProps;
}
function proxyComposite(ProxiedComponent, propMap = {}) {
	const displayName = ProxiedComponent.displayName ?? "";
	const Component = (legacyProps) => {
		deprecated(`wp.components.${displayName}`, {
			since: "6.7",
			alternative: LEGACY_TO_NEW_DISPLAY_NAME.hasOwnProperty(displayName) ? LEGACY_TO_NEW_DISPLAY_NAME[displayName] : void 0
		});
		const { store, ...rest } = mapLegacyStatePropsToComponentProps(legacyProps);
		let props = rest;
		props = {
			...props,
			id: use_instance_id_default(store, props.baseId, props.id)
		};
		Object.entries(propMap).forEach(([from, to]) => {
			if (props.hasOwnProperty(from)) {
				Object.assign(props, { [to]: props[from] });
				delete props[from];
			}
		});
		delete props.baseId;
		return /* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)(ProxiedComponent, {
			...props,
			store
		}, void 0, false, {
			fileName: _jsxFileName$2,
			lineNumber: 156,
			columnNumber: 10
		}, this);
	};
	Component.displayName = displayName;
	return Component;
}
/**
* _Note: please use the `Composite` component instead._
*
* @deprecated
*/
function useCompositeState(legacyStateOptions = {}) {
	deprecated(`wp.components.__unstableUseCompositeState`, {
		since: "6.7",
		alternative: LEGACY_TO_NEW_DISPLAY_NAME.__unstableUseCompositeState
	});
	const { baseId, currentId: defaultActiveId, orientation, rtl = false, loop: focusLoop = false, wrap: focusWrap = false, shift: focusShift = false, unstable_virtual: virtualFocus } = legacyStateOptions;
	return {
		baseId: use_instance_id_default(Composite, "composite", baseId),
		store: useCompositeStore({
			defaultActiveId,
			rtl,
			orientation,
			focusLoop,
			focusShift,
			focusWrap,
			virtualFocus
		})
	};
}
var import_jsx_dev_runtime$2, _jsxFileName$2, LEGACY_TO_NEW_DISPLAY_NAME, UnproxiedCompositeGroup, Composite, CompositeGroup, CompositeItem;
function init_legacy() {
	return (init_legacy = __esmMin((() => {
		init_composite_store();
		init_react();
		init_use_instance_id();
		init_build_module();
		init_composite();
		import_jsx_dev_runtime$2 = require_jsx_dev_runtime();
		_jsxFileName$2 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/composite/legacy/index.tsx";
		LEGACY_TO_NEW_DISPLAY_NAME = {
			__unstableComposite: "Composite",
			__unstableCompositeGroup: "Composite.Group or Composite.Row",
			__unstableCompositeItem: "Composite.Item",
			__unstableUseCompositeState: "Composite"
		};
		UnproxiedCompositeGroup = (0, import_react.forwardRef)(({ role, ...props }, ref) => {
			const Component = role === "row" ? Composite$1.Row : Composite$1.Group;
			return /* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)(Component, {
				ref,
				role,
				...props
			}, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 171,
				columnNumber: 9
			}, void 0);
		});
		Composite = proxyComposite(Object.assign(Composite$1, { displayName: "__unstableComposite" }), { baseId: "id" });
		CompositeGroup = proxyComposite(Object.assign(UnproxiedCompositeGroup, { displayName: "__unstableCompositeGroup" }));
		CompositeItem = proxyComposite(Object.assign(Composite$1.Item, { displayName: "__unstableCompositeItem" }), { focusable: "accessibleWhenDisabled" });
		try {
			useCompositeState.__docgenInfo = {
				"description": "_Note: please use the `Composite` component instead._",
				"displayName": "useCompositeState",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/composite/legacy/index.tsx",
				"methods": [],
				"props": {
					"baseId": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/composite/legacy/index.tsx",
							"name": "LegacyStateOptions"
						}],
						"description": "ID that will serve as a base for all the items IDs.",
						"name": "baseId",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/composite/legacy/index.tsx",
							"name": "LegacyStateOptions"
						},
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"rtl": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/composite/legacy/index.tsx",
							"name": "LegacyStateOptions"
						}],
						"description": "Determines how next and previous functions will behave. If `rtl` is set\nto `true`, they will be inverted. This only affects the composite widget\nbehavior. You still need to set `dir=\"rtl\"` on HTML/CSS.",
						"name": "rtl",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/composite/legacy/index.tsx",
							"name": "LegacyStateOptions"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"orientation": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/composite/legacy/index.tsx",
							"name": "LegacyStateOptions"
						}],
						"description": "Defines the orientation of the composite widget. If the composite has a\nsingle row or column (one-dimensional), the orientation value determines\nwhich arrow keys can be used to move focus.",
						"name": "orientation",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/composite/legacy/index.tsx",
							"name": "LegacyStateOptions"
						},
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "Orientation",
							"value": [{ "value": "\"horizontal\"" }, { "value": "\"vertical\"" }]
						}
					},
					"currentId": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/composite/legacy/index.tsx",
							"name": "LegacyStateOptions"
						}],
						"description": "The current focused item `id`.",
						"name": "currentId",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/composite/legacy/index.tsx",
							"name": "LegacyStateOptions"
						},
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"loop": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/composite/legacy/index.tsx",
							"name": "LegacyStateOptions"
						}],
						"description": "Determines how focus moves from the start and end of rows and columns.",
						"name": "loop",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/composite/legacy/index.tsx",
							"name": "LegacyStateOptions"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean | Orientation" }
					},
					"wrap": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/composite/legacy/index.tsx",
							"name": "LegacyStateOptions"
						}],
						"description": "If enabled, moving to the next item from the last one in a row or column\nwill focus the first item in the next row or column and vice-versa.\n\n** Has effect only on two-dimensional composites. **",
						"name": "wrap",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/composite/legacy/index.tsx",
							"name": "LegacyStateOptions"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean | Orientation" }
					},
					"shift": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/composite/legacy/index.tsx",
							"name": "LegacyStateOptions"
						}],
						"description": "If enabled, moving up or down when there's no next item or the next item\nis disabled will shift to the item right before it.\n\n** Has effect only on two-dimensional composites. **",
						"name": "shift",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/composite/legacy/index.tsx",
							"name": "LegacyStateOptions"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"unstable_virtual": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/composite/legacy/index.tsx",
							"name": "LegacyStateOptions"
						}],
						"description": "",
						"name": "unstable_virtual",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/composite/legacy/index.tsx",
							"name": "LegacyStateOptions"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					}
				},
				"tags": { "deprecated": "" }
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			Composite.__docgenInfo = {
				"description": "_Note: please use the `Composite` component instead._",
				"displayName": "Composite",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/composite/legacy/index.tsx",
				"methods": [],
				"props": {},
				"tags": { "deprecated": "" }
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			CompositeGroup.__docgenInfo = {
				"description": "_Note: please use the `Composite.Row` or `Composite.Group` components instead._",
				"displayName": "CompositeGroup",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/composite/legacy/index.tsx",
				"methods": [],
				"props": {},
				"tags": { "deprecated": "" }
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			CompositeItem.__docgenInfo = {
				"description": "_Note: please use the `Composite.Item` component instead._",
				"displayName": "CompositeItem",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/composite/legacy/index.tsx",
				"methods": [],
				"props": {},
				"tags": { "deprecated": "" }
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/components/src/composite/legacy/stories/utils.tsx
/**
* Renders a composite widget.
*
* This unstable component is deprecated. Use `Composite` instead.
*
* ```jsx
* import {
* 	__unstableUseCompositeState as useCompositeState,
* 	__unstableComposite as Composite,
* 	__unstableCompositeItem as CompositeItem,
* } from '@wordpress/components';
*
* const state = useCompositeState();
* <Composite state={ state }>
* 	<CompositeItem>Item 1</CompositeItem>
* 	<CompositeItem>Item 2</CompositeItem>
* </Composite>;
* ```
*/
function UseCompositeStatePlaceholder(props) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)("dl", { children: Object.entries(props).map(([name, value]) => /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(import_jsx_dev_runtime$1.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)("dt", { children: name }, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 28,
		columnNumber: 6
	}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)("dd", { children: JSON.stringify(value) }, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 29,
		columnNumber: 6
	}, this)] }, void 0, true, {
		fileName: _jsxFileName$1,
		lineNumber: 27,
		columnNumber: 5
	}, this)) }, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 25,
		columnNumber: 3
	}, this);
}
function transform(code, context) {
	return [
		`const state = useCompositeState(${` ${JSON.stringify(context.args, null, 2)} `.replace(" {} ", "")});`,
		"",
		"return (",
		"  " + code.replaceAll(/state=\{\{[\s\S]*?\}\}/g, "state={ state }").replaceAll("=>", "").replaceAll(/baseId=[^>]+?(\s*>)/g, (_, close) => {
			return `{ ...state }${close}`;
		}).replaceAll(/<Composite\w+[\s\S]*?>/g, (match) => match.replaceAll(/\s+\s/g, " ")).replaceAll(/ >\s+([\w\s]*?)\s+<\//g, (_, value) => `>${value}</`).replaceAll("} >", "}>").replaceAll(/\n/g, "\n  "),
		");"
	].join("\n");
}
var import_jsx_dev_runtime$1, _jsxFileName$1;
function init_utils() {
	return (init_utils = __esmMin((() => {
		import_jsx_dev_runtime$1 = require_jsx_dev_runtime();
		_jsxFileName$1 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/composite/legacy/stories/utils.tsx";
		UseCompositeStatePlaceholder.displayName = "useCompositeState";
		try {
			UseCompositeStatePlaceholder.__docgenInfo = {
				"description": "Renders a composite widget.\n\nThis unstable component is deprecated. Use `Composite` instead.\n\n```jsx\nimport {\n	__unstableUseCompositeState as useCompositeState,\n	__unstableComposite as Composite,\n	__unstableCompositeItem as CompositeItem,\n} from '@wordpress/components';\n\nconst state = useCompositeState();\n<Composite state={ state }>\n	<CompositeItem>Item 1</CompositeItem>\n	<CompositeItem>Item 2</CompositeItem>\n</Composite>;\n```",
				"displayName": "UseCompositeStatePlaceholder",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/composite/legacy/stories/utils.tsx",
				"methods": [],
				"props": {
					"baseId": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/composite/legacy/index.tsx",
							"name": "LegacyStateOptions"
						}],
						"description": "ID that will serve as a base for all the items IDs.",
						"name": "baseId",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/composite/legacy/index.tsx",
							"name": "LegacyStateOptions"
						},
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"rtl": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/composite/legacy/index.tsx",
							"name": "LegacyStateOptions"
						}],
						"description": "Determines how next and previous functions will behave. If `rtl` is set\nto `true`, they will be inverted. This only affects the composite widget\nbehavior. You still need to set `dir=\"rtl\"` on HTML/CSS.",
						"name": "rtl",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/composite/legacy/index.tsx",
							"name": "LegacyStateOptions"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"orientation": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/composite/legacy/index.tsx",
							"name": "LegacyStateOptions"
						}],
						"description": "Defines the orientation of the composite widget. If the composite has a\nsingle row or column (one-dimensional), the orientation value determines\nwhich arrow keys can be used to move focus.",
						"name": "orientation",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/composite/legacy/index.tsx",
							"name": "LegacyStateOptions"
						},
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "Orientation",
							"value": [{ "value": "\"horizontal\"" }, { "value": "\"vertical\"" }]
						}
					},
					"currentId": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/composite/legacy/index.tsx",
							"name": "LegacyStateOptions"
						}],
						"description": "The current focused item `id`.",
						"name": "currentId",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/composite/legacy/index.tsx",
							"name": "LegacyStateOptions"
						},
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"loop": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/composite/legacy/index.tsx",
							"name": "LegacyStateOptions"
						}],
						"description": "Determines how focus moves from the start and end of rows and columns.",
						"name": "loop",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/composite/legacy/index.tsx",
							"name": "LegacyStateOptions"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean | Orientation" }
					},
					"wrap": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/composite/legacy/index.tsx",
							"name": "LegacyStateOptions"
						}],
						"description": "If enabled, moving to the next item from the last one in a row or column\nwill focus the first item in the next row or column and vice-versa.\n\n** Has effect only on two-dimensional composites. **",
						"name": "wrap",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/composite/legacy/index.tsx",
							"name": "LegacyStateOptions"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean | Orientation" }
					},
					"shift": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/composite/legacy/index.tsx",
							"name": "LegacyStateOptions"
						}],
						"description": "If enabled, moving up or down when there's no next item or the next item\nis disabled will shift to the item right before it.\n\n** Has effect only on two-dimensional composites. **",
						"name": "shift",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/composite/legacy/index.tsx",
							"name": "LegacyStateOptions"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"unstable_virtual": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/composite/legacy/index.tsx",
							"name": "LegacyStateOptions"
						}],
						"description": "",
						"name": "unstable_virtual",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/composite/legacy/index.tsx",
							"name": "LegacyStateOptions"
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
//#region ../packages/components/src/composite/legacy/stories/index.story.tsx
var import_jsx_dev_runtime, _jsxFileName, meta, TwoDimensionsWithStateProp, TwoDimensionsWithSpreadProps, OneDimensionWithStateProp, OneDimensionWithSpreadProps;
function init_index_story() {
	return (init_index_story = __esmMin((() => {
		init_legacy();
		init_utils();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/composite/legacy/stories/index.story.tsx";
		meta = {
			title: "Components/@wordpress-components/Deprecated/Composite (Unstable)",
			id: "components-composite-unstable",
			component: UseCompositeStatePlaceholder,
			subcomponents: {
				Composite,
				CompositeGroup,
				CompositeItem
			},
			args: {},
			parameters: {
				controls: { exclude: /^unstable_/ },
				docs: {
					canvas: { sourceState: "shown" },
					source: { transform }
				}
			},
			argTypes: {
				orientation: { control: "select" },
				loop: {
					control: "select",
					options: [
						true,
						false,
						"horizontal",
						"vertical"
					]
				},
				wrap: {
					control: "select",
					options: [
						true,
						false,
						"horizontal",
						"vertical"
					]
				}
			}
		};
		TwoDimensionsWithStateProp = (initialState) => {
			const state = useCompositeState(initialState);
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Composite, {
				role: "grid",
				state,
				"aria-label": "Legacy Composite with state prop (two dimensions)",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CompositeGroup, {
						state,
						role: "row",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CompositeItem, {
								state,
								role: "gridcell",
								children: "Item A1"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 53,
								columnNumber: 5
							}, void 0),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CompositeItem, {
								state,
								role: "gridcell",
								children: "Item A2"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 56,
								columnNumber: 5
							}, void 0),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CompositeItem, {
								state,
								role: "gridcell",
								children: "Item A3"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 59,
								columnNumber: 5
							}, void 0)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 52,
						columnNumber: 4
					}, void 0),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CompositeGroup, {
						state,
						role: "row",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CompositeItem, {
								state,
								role: "gridcell",
								children: "Item B1"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 64,
								columnNumber: 5
							}, void 0),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CompositeItem, {
								state,
								role: "gridcell",
								children: "Item B2"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 67,
								columnNumber: 5
							}, void 0),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CompositeItem, {
								state,
								role: "gridcell",
								children: "Item B3"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 70,
								columnNumber: 5
							}, void 0)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 63,
						columnNumber: 4
					}, void 0),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CompositeGroup, {
						state,
						role: "row",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CompositeItem, {
								state,
								role: "gridcell",
								children: "Item C1"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 75,
								columnNumber: 5
							}, void 0),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CompositeItem, {
								state,
								role: "gridcell",
								children: "Item C2"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 78,
								columnNumber: 5
							}, void 0),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CompositeItem, {
								state,
								role: "gridcell",
								children: "Item C3"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 81,
								columnNumber: 5
							}, void 0)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 74,
						columnNumber: 4
					}, void 0)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 47,
				columnNumber: 3
			}, void 0);
		};
		TwoDimensionsWithStateProp.args = {};
		TwoDimensionsWithSpreadProps = (initialState) => {
			const state = useCompositeState(initialState);
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Composite, {
				role: "grid",
				...state,
				"aria-label": "Legacy Composite with spread props (two dimensions)",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CompositeGroup, {
						...state,
						role: "row",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CompositeItem, {
								...state,
								role: "gridcell",
								children: "Item A1"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 102,
								columnNumber: 5
							}, void 0),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CompositeItem, {
								...state,
								role: "gridcell",
								children: "Item A2"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 105,
								columnNumber: 5
							}, void 0),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CompositeItem, {
								...state,
								role: "gridcell",
								children: "Item A3"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 108,
								columnNumber: 5
							}, void 0)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 101,
						columnNumber: 4
					}, void 0),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CompositeGroup, {
						...state,
						role: "row",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CompositeItem, {
								...state,
								role: "gridcell",
								children: "Item B1"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 113,
								columnNumber: 5
							}, void 0),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CompositeItem, {
								...state,
								role: "gridcell",
								children: "Item B2"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 116,
								columnNumber: 5
							}, void 0),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CompositeItem, {
								...state,
								role: "gridcell",
								children: "Item B3"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 119,
								columnNumber: 5
							}, void 0)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 112,
						columnNumber: 4
					}, void 0),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CompositeGroup, {
						...state,
						role: "row",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CompositeItem, {
								...state,
								role: "gridcell",
								children: "Item C1"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 124,
								columnNumber: 5
							}, void 0),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CompositeItem, {
								...state,
								role: "gridcell",
								children: "Item C2"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 127,
								columnNumber: 5
							}, void 0),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CompositeItem, {
								...state,
								role: "gridcell",
								children: "Item C3"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 130,
								columnNumber: 5
							}, void 0)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 123,
						columnNumber: 4
					}, void 0)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 96,
				columnNumber: 3
			}, void 0);
		};
		TwoDimensionsWithSpreadProps.args = {};
		OneDimensionWithStateProp = (initialState) => {
			const state = useCompositeState(initialState);
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Composite, {
				role: "list",
				state,
				"aria-label": "Legacy Composite with state prop (one dimension)",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CompositeItem, {
						state,
						role: "listitem",
						render: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 150,
							columnNumber: 60
						}, void 0),
						children: "Item 1"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 150,
						columnNumber: 4
					}, void 0),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CompositeItem, {
						state,
						role: "listitem",
						render: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 153,
							columnNumber: 60
						}, void 0),
						children: "Item 2"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 153,
						columnNumber: 4
					}, void 0),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CompositeItem, {
						state,
						role: "listitem",
						render: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 156,
							columnNumber: 60
						}, void 0),
						children: "Item 3"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 156,
						columnNumber: 4
					}, void 0),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CompositeItem, {
						state,
						role: "listitem",
						render: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 159,
							columnNumber: 60
						}, void 0),
						children: "Item 4"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 159,
						columnNumber: 4
					}, void 0),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CompositeItem, {
						state,
						role: "listitem",
						render: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 162,
							columnNumber: 60
						}, void 0),
						children: "Item 5"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 162,
						columnNumber: 4
					}, void 0)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 145,
				columnNumber: 3
			}, void 0);
		};
		OneDimensionWithStateProp.args = {};
		OneDimensionWithSpreadProps = (initialState) => {
			const state = useCompositeState(initialState);
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Composite, {
				role: "list",
				...state,
				"aria-label": "Legacy Composite with spread props (one dimension)",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CompositeItem, {
						...state,
						role: "listitem",
						render: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 181,
							columnNumber: 57
						}, void 0),
						children: "Item 1"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 181,
						columnNumber: 4
					}, void 0),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CompositeItem, {
						...state,
						role: "listitem",
						render: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 184,
							columnNumber: 57
						}, void 0),
						children: "Item 2"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 184,
						columnNumber: 4
					}, void 0),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CompositeItem, {
						...state,
						role: "listitem",
						render: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 187,
							columnNumber: 57
						}, void 0),
						children: "Item 3"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 187,
						columnNumber: 4
					}, void 0),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CompositeItem, {
						...state,
						role: "listitem",
						render: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 190,
							columnNumber: 57
						}, void 0),
						children: "Item 4"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 190,
						columnNumber: 4
					}, void 0),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CompositeItem, {
						...state,
						role: "listitem",
						render: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 193,
							columnNumber: 57
						}, void 0),
						children: "Item 5"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 193,
						columnNumber: 4
					}, void 0)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 176,
				columnNumber: 3
			}, void 0);
		};
		OneDimensionWithSpreadProps.args = {};
		TwoDimensionsWithStateProp.parameters = {
			...TwoDimensionsWithStateProp.parameters,
			docs: {
				...TwoDimensionsWithStateProp.parameters?.docs,
				source: {
					originalSource: "initialState => {\n  const state = useCompositeState(initialState);\n  return <Composite role=\"grid\" state={state} aria-label=\"Legacy Composite with state prop (two dimensions)\">\n            <CompositeGroup state={state} role=\"row\">\n                <CompositeItem state={state} role=\"gridcell\">\n                    Item A1\n                </CompositeItem>\n                <CompositeItem state={state} role=\"gridcell\">\n                    Item A2\n                </CompositeItem>\n                <CompositeItem state={state} role=\"gridcell\">\n                    Item A3\n                </CompositeItem>\n            </CompositeGroup>\n            <CompositeGroup state={state} role=\"row\">\n                <CompositeItem state={state} role=\"gridcell\">\n                    Item B1\n                </CompositeItem>\n                <CompositeItem state={state} role=\"gridcell\">\n                    Item B2\n                </CompositeItem>\n                <CompositeItem state={state} role=\"gridcell\">\n                    Item B3\n                </CompositeItem>\n            </CompositeGroup>\n            <CompositeGroup state={state} role=\"row\">\n                <CompositeItem state={state} role=\"gridcell\">\n                    Item C1\n                </CompositeItem>\n                <CompositeItem state={state} role=\"gridcell\">\n                    Item C2\n                </CompositeItem>\n                <CompositeItem state={state} role=\"gridcell\">\n                    Item C3\n                </CompositeItem>\n            </CompositeGroup>\n        </Composite>;\n}",
					...TwoDimensionsWithStateProp.parameters?.docs?.source
				}
			}
		};
		TwoDimensionsWithSpreadProps.parameters = {
			...TwoDimensionsWithSpreadProps.parameters,
			docs: {
				...TwoDimensionsWithSpreadProps.parameters?.docs,
				source: {
					originalSource: "initialState => {\n  const state = useCompositeState(initialState);\n  return <Composite role=\"grid\" {...state} aria-label=\"Legacy Composite with spread props (two dimensions)\">\n            <CompositeGroup {...state} role=\"row\">\n                <CompositeItem {...state} role=\"gridcell\">\n                    Item A1\n                </CompositeItem>\n                <CompositeItem {...state} role=\"gridcell\">\n                    Item A2\n                </CompositeItem>\n                <CompositeItem {...state} role=\"gridcell\">\n                    Item A3\n                </CompositeItem>\n            </CompositeGroup>\n            <CompositeGroup {...state} role=\"row\">\n                <CompositeItem {...state} role=\"gridcell\">\n                    Item B1\n                </CompositeItem>\n                <CompositeItem {...state} role=\"gridcell\">\n                    Item B2\n                </CompositeItem>\n                <CompositeItem {...state} role=\"gridcell\">\n                    Item B3\n                </CompositeItem>\n            </CompositeGroup>\n            <CompositeGroup {...state} role=\"row\">\n                <CompositeItem {...state} role=\"gridcell\">\n                    Item C1\n                </CompositeItem>\n                <CompositeItem {...state} role=\"gridcell\">\n                    Item C2\n                </CompositeItem>\n                <CompositeItem {...state} role=\"gridcell\">\n                    Item C3\n                </CompositeItem>\n            </CompositeGroup>\n        </Composite>;\n}",
					...TwoDimensionsWithSpreadProps.parameters?.docs?.source
				}
			}
		};
		OneDimensionWithStateProp.parameters = {
			...OneDimensionWithStateProp.parameters,
			docs: {
				...OneDimensionWithStateProp.parameters?.docs,
				source: {
					originalSource: "initialState => {\n  const state = useCompositeState(initialState);\n  return <Composite role=\"list\" state={state} aria-label=\"Legacy Composite with state prop (one dimension)\">\n            <CompositeItem state={state} role=\"listitem\" render={<div />}>\n                Item 1\n            </CompositeItem>\n            <CompositeItem state={state} role=\"listitem\" render={<div />}>\n                Item 2\n            </CompositeItem>\n            <CompositeItem state={state} role=\"listitem\" render={<div />}>\n                Item 3\n            </CompositeItem>\n            <CompositeItem state={state} role=\"listitem\" render={<div />}>\n                Item 4\n            </CompositeItem>\n            <CompositeItem state={state} role=\"listitem\" render={<div />}>\n                Item 5\n            </CompositeItem>\n        </Composite>;\n}",
					...OneDimensionWithStateProp.parameters?.docs?.source
				}
			}
		};
		OneDimensionWithSpreadProps.parameters = {
			...OneDimensionWithSpreadProps.parameters,
			docs: {
				...OneDimensionWithSpreadProps.parameters?.docs,
				source: {
					originalSource: "initialState => {\n  const state = useCompositeState(initialState);\n  return <Composite role=\"list\" {...state} aria-label=\"Legacy Composite with spread props (one dimension)\">\n            <CompositeItem {...state} role=\"listitem\" render={<div />}>\n                Item 1\n            </CompositeItem>\n            <CompositeItem {...state} role=\"listitem\" render={<div />}>\n                Item 2\n            </CompositeItem>\n            <CompositeItem {...state} role=\"listitem\" render={<div />}>\n                Item 3\n            </CompositeItem>\n            <CompositeItem {...state} role=\"listitem\" render={<div />}>\n                Item 4\n            </CompositeItem>\n            <CompositeItem {...state} role=\"listitem\" render={<div />}>\n                Item 5\n            </CompositeItem>\n        </Composite>;\n}",
					...OneDimensionWithSpreadProps.parameters?.docs?.source
				}
			}
		};
	})))();
}
//#endregion
init_index_story();
export { OneDimensionWithSpreadProps, OneDimensionWithStateProp, TwoDimensionsWithSpreadProps, TwoDimensionsWithStateProp, meta as default };
