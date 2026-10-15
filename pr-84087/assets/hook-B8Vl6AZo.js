import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { i as isValueDefined, r as init_values } from "./values-Dw4yFgqQ.js";
import { a as hasConnectNamespace, n as useContextSystem, o as init_context_connect, t as init_use_context_system } from "./use-context-system-D7pcITcN.js";
import { a as useFlex, i as init_hook$1 } from "./context-BU9VHKao.js";
import { n as init_component, t as FlexItem } from "./component-DXyvv1Jj.js";
import { n as init_get_valid_children, t as getValidChildren } from "./get-valid-children-o8fxOEFN.js";
//#region ../packages/components/src/h-stack/utils.ts
function getAlignmentProps(alignment, direction = "row") {
	if (!isValueDefined(alignment)) return {};
	const props = direction === "column" ? V_ALIGNMENTS : H_ALIGNMENTS;
	return alignment in props ? props[alignment] : { align: alignment };
}
var H_ALIGNMENTS, V_ALIGNMENTS;
function init_utils() {
	return (init_utils = __esmMin((() => {
		init_values();
		H_ALIGNMENTS = {
			bottom: {
				align: "flex-end",
				justify: "center"
			},
			bottomLeft: {
				align: "flex-end",
				justify: "flex-start"
			},
			bottomRight: {
				align: "flex-end",
				justify: "flex-end"
			},
			center: {
				align: "center",
				justify: "center"
			},
			edge: {
				align: "center",
				justify: "space-between"
			},
			left: {
				align: "center",
				justify: "flex-start"
			},
			right: {
				align: "center",
				justify: "flex-end"
			},
			stretch: { align: "stretch" },
			top: {
				align: "flex-start",
				justify: "center"
			},
			topLeft: {
				align: "flex-start",
				justify: "flex-start"
			},
			topRight: {
				align: "flex-start",
				justify: "flex-end"
			}
		};
		V_ALIGNMENTS = {
			bottom: {
				justify: "flex-end",
				align: "center"
			},
			bottomLeft: {
				justify: "flex-end",
				align: "flex-start"
			},
			bottomRight: {
				justify: "flex-end",
				align: "flex-end"
			},
			center: {
				justify: "center",
				align: "center"
			},
			edge: {
				justify: "space-between",
				align: "center"
			},
			left: {
				justify: "center",
				align: "flex-start"
			},
			right: {
				justify: "center",
				align: "flex-end"
			},
			stretch: { align: "stretch" },
			top: {
				justify: "flex-start",
				align: "center"
			},
			topLeft: {
				justify: "flex-start",
				align: "flex-start"
			},
			topRight: {
				justify: "flex-start",
				align: "flex-end"
			}
		};
	})))();
}
//#endregion
//#region ../packages/components/src/h-stack/hook.tsx
function useHStack(props) {
	const { alignment = "edge", children, direction, spacing = 2, ...otherProps } = useContextSystem(props, "HStack");
	const align = getAlignmentProps(alignment, direction);
	const propsForFlex = {
		children: getValidChildren(children).map((child, index) => {
			if (hasConnectNamespace(child, ["Spacer"])) {
				const childElement = child;
				const _key = childElement.key || `hstack-${index}`;
				return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FlexItem, {
					isBlock: true,
					...childElement.props
				}, _key, false, {
					fileName: _jsxFileName,
					lineNumber: 28,
					columnNumber: 11
				}, this);
			}
			return child;
		}),
		direction,
		justify: "center",
		...align,
		...otherProps,
		gap: spacing
	};
	const { isColumn, ...flexProps } = useFlex(propsForFlex);
	return flexProps;
}
var import_jsx_dev_runtime, _jsxFileName;
function init_hook() {
	return (init_hook = __esmMin((() => {
		init_context_connect(), init_use_context_system();
		init_component(), init_hook$1();
		init_utils();
		init_get_valid_children();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/h-stack/hook.tsx";
		try {
			useHStack.__docgenInfo = {
				"description": "",
				"displayName": "useHStack",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/h-stack/hook.tsx",
				"methods": [],
				"props": {
					"children": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/flex/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The children elements.",
						"name": "children",
						"required": true,
						"tags": {},
						"type": { "name": "ReactNode" }
					},
					"direction": {
						"defaultValue": { "value": "'row'" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/flex/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The direction flow of the children content can be adjusted with\n`direction`. `column` will align children vertically and `row` will align\nchildren horizontally.",
						"name": "direction",
						"required": false,
						"tags": {},
						"type": { "name": "FlexDirection" }
					},
					"wrap": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/flex/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Determines if children should wrap.",
						"name": "wrap",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"justify": {
						"defaultValue": { "value": "'space-between'" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/flex/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Horizontally aligns content if the `direction` is `row`, or vertically\naligns content if the `direction` is `column`.",
						"name": "justify",
						"required": false,
						"tags": {},
						"type": { "name": "JustifyContent" }
					},
					"expanded": {
						"defaultValue": { "value": "true" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/flex/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Expands to the maximum available width (if horizontal) or height (if\nvertical).",
						"name": "expanded",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"isReversed": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/flex/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "@deprecated",
						"name": "isReversed",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"alignment": {
						"defaultValue": { "value": "'edge'" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/h-stack/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Determines how the child elements are aligned.\n\n* `top`: Aligns content to the top.\n* `topLeft`: Aligns content to the top/left.\n* `topRight`: Aligns content to the top/right.\n* `left`: Aligns content to the left.\n* `center`: Aligns content to the center.\n* `right`: Aligns content to the right.\n* `bottom`: Aligns content to the bottom.\n* `bottomLeft`: Aligns content to the bottom/left.\n* `bottomRight`: Aligns content to the bottom/right.\n* `edge`: Justifies content to be evenly spread out up to the main axis edges of the container.\n* `stretch`: Stretches content to the cross axis edges of the container.",
						"name": "alignment",
						"required": false,
						"tags": {},
						"type": { "name": "\"center\" | (string & {}) | \"inherit\" | \"end\" | \"start\" | \"-moz-initial\" | \"initial\" | \"revert\" | \"revert-layer\" | \"unset\" | \"flex-end\" | \"flex-start\" | \"self-end\" | \"self-start\" | ... 13 more ..." }
					},
					"spacing": {
						"defaultValue": { "value": "2" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/h-stack/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The amount of space between each child element. Spacing in between each child can be adjusted by using `spacing`.\nThe value of `spacing` works as a multiplier to the library's grid system (base of `4px`).",
						"name": "spacing",
						"required": false,
						"tags": {},
						"type": { "name": "Width<string | number>" }
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
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
export { useHStack as n, init_hook as t };
