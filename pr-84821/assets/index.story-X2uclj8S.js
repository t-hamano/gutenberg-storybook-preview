import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as init_build_module, t as focus } from "./build-module-Bh_sM-WV.js";
import { n as useMergeRefs, t as init_use_merge_refs } from "./use-merge-refs-BAtuPB1L.js";
import { r as init_build_module$1 } from "./build-module-LJKyBiy6.js";
import { n as init_input_control, t as InputControl } from "./input-control-C54OF_Dl.js";
import { n as init_button, t as Button } from "./button-BqvmAVeL.js";
//#region ../packages/components/src/tree-grid/roving-tab-index-context.ts
var RovingTabIndexContext, useRovingTabIndexContext, RovingTabIndexProvider;
function init_roving_tab_index_context() {
	return (init_roving_tab_index_context = __esmMin((() => {
		init_react();
		RovingTabIndexContext = (0, import_react.createContext)(void 0);
		RovingTabIndexContext.displayName = "RovingTabIndexContext";
		useRovingTabIndexContext = () => (0, import_react.useContext)(RovingTabIndexContext);
		RovingTabIndexProvider = RovingTabIndexContext.Provider;
	})))();
}
//#endregion
//#region ../packages/components/src/tree-grid/roving-tab-index.tsx
/**
* Provider for adding roving tab index behaviors to tree grid structures.
*
* @see https://github.com/WordPress/gutenberg/blob/HEAD/packages/components/src/tree-grid/README.md
*/
function RovingTabIndex({ children }) {
	const [lastFocusedElement, setLastFocusedElement] = (0, import_react.useState)();
	const providerValue = (0, import_react.useMemo)(() => ({
		lastFocusedElement,
		setLastFocusedElement
	}), [lastFocusedElement]);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$6.jsxDEV)(RovingTabIndexProvider, {
		value: providerValue,
		children
	}, void 0, false, {
		fileName: _jsxFileName$6,
		lineNumber: 26,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime$6, _jsxFileName$6;
function init_roving_tab_index() {
	return (init_roving_tab_index = __esmMin((() => {
		init_react();
		init_roving_tab_index_context();
		import_jsx_dev_runtime$6 = require_jsx_dev_runtime();
		_jsxFileName$6 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/tree-grid/roving-tab-index.tsx";
		try {
			RovingTabIndex.__docgenInfo = {
				"description": "Provider for adding roving tab index behaviors to tree grid structures.",
				"displayName": "rovingtabindex",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/tree-grid/roving-tab-index.tsx",
				"methods": [],
				"props": {},
				"tags": { "see": "https://github.com/WordPress/gutenberg/blob/HEAD/packages/components/src/tree-grid/README.md" }
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/components/src/tree-grid/use-validate-tree-grid-structure.ts
function getAriaOwners(element) {
	if (!element.id) return [];
	const escapedId = element.id.replaceAll("\\", "\\\\").replaceAll("\"", "\\\"");
	return Array.from(element.ownerDocument.querySelectorAll(`[aria-owns~="${escapedId}"]`));
}
function isContainedInOrOwnedBy(element, selector, visited = /* @__PURE__ */ new Set()) {
	if (visited.has(element)) return false;
	visited.add(element);
	if (element.parentElement?.closest(selector)) return true;
	if (getAriaOwners(element).some((owner) => owner.matches(selector) || isContainedInOrOwnedBy(owner, selector, visited))) return true;
	return element.parentElement ? isContainedInOrOwnedBy(element.parentElement, selector, visited) : false;
}
function isOwnedByRowInTreeGrid(element, visited = /* @__PURE__ */ new Set()) {
	if (visited.has(element)) return false;
	visited.add(element);
	if (getAriaOwners(element).some((owner) => {
		const row = owner.matches(ROW_SELECTOR) ? owner : owner.closest(ROW_SELECTOR);
		return row ? isContainedInOrOwnedBy(row, TREE_GRID_SELECTOR) : isOwnedByRowInTreeGrid(owner, visited);
	})) return true;
	return element.parentElement ? isOwnedByRowInTreeGrid(element.parentElement, visited) : false;
}
function useValidateTreeGridStructure(componentName, elementRef) {
	(0, import_react.useEffect)(() => {
		const element = elementRef.current;
		if (!element) return;
		const row = element.parentElement?.closest(ROW_SELECTOR);
		if (!(componentName === "TreeGridRow" ? isContainedInOrOwnedBy(element, TREE_GRID_SELECTOR) : row && isContainedInOrOwnedBy(row, TREE_GRID_SELECTOR) || isOwnedByRowInTreeGrid(element))) throw new Error(componentName === "TreeGridRow" ? "TreeGridRow must be rendered inside an element with role=\"treegrid\"." : "TreeGridCell must be rendered as a cell in a row that belongs to an element with role=\"treegrid\".");
	}, [componentName, elementRef]);
}
var ROW_SELECTOR, TREE_GRID_SELECTOR;
function init_use_validate_tree_grid_structure() {
	return (init_use_validate_tree_grid_structure = __esmMin((() => {
		init_react();
		ROW_SELECTOR = "tr:not([role]), [role=\"row\"]";
		TREE_GRID_SELECTOR = "[role=\"treegrid\"]";
	})))();
}
//#endregion
//#region ../packages/components/src/tree-grid/row.tsx
function UnforwardedTreeGridRow({ children, level, positionInSet, setSize, isExpanded, ...props }, ref) {
	const rowRef = (0, import_react.useRef)(null);
	const refs = useMergeRefs([rowRef, ref]);
	useValidateTreeGridStructure("TreeGridRow", rowRef);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$5.jsxDEV)("tr", {
		...props,
		ref: refs,
		role: "row",
		"aria-level": level,
		"aria-posinset": positionInSet,
		"aria-setsize": setSize,
		"aria-expanded": isExpanded,
		children
	}, void 0, false, {
		fileName: _jsxFileName$5,
		lineNumber: 23,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime$5, _jsxFileName$5, TreeGridRow;
function init_row() {
	return (init_row = __esmMin((() => {
		init_use_merge_refs();
		init_react();
		init_use_validate_tree_grid_structure();
		import_jsx_dev_runtime$5 = require_jsx_dev_runtime();
		_jsxFileName$5 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/tree-grid/row.tsx";
		TreeGridRow = (0, import_react.forwardRef)(UnforwardedTreeGridRow);
		TreeGridRow.displayName = "TreeGridRow";
		try {
			TreeGridRow.__docgenInfo = {
				"description": "`TreeGridRow` is used to create a tree hierarchy.\nIt is not a visually styled component, but instead helps with adding\nkeyboard navigation and roving tab index behaviors to tree grid structures.",
				"displayName": "TreeGridRow",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/tree-grid/row.tsx",
				"methods": [],
				"props": {
					"children": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/tree-grid/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The children to be rendered in the row.",
						"name": "children",
						"required": true,
						"tags": {},
						"type": { "name": "ReactNode" }
					},
					"level": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/tree-grid/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "An integer value designating the level in the hierarchical tree structure.\nCounting starts at 1. A value of `1` indicates the root level of the structure.",
						"name": "level",
						"required": true,
						"tags": {},
						"type": { "name": "number" }
					},
					"positionInSet": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/tree-grid/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "An integer value that represents the position in the set.\nA set is the count of elements at a specific level. Counting starts at 1.",
						"name": "positionInSet",
						"required": true,
						"tags": {},
						"type": { "name": "number" }
					},
					"setSize": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/tree-grid/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "An integer value that represents the total number of items in the set,\nat this specific level of the hierarchy.",
						"name": "setSize",
						"required": true,
						"tags": {},
						"type": { "name": "number" }
					},
					"isExpanded": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/tree-grid/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "An optional value that designates whether a row is expanded or collapsed.\nCurrently this value only sets the correct aria-expanded property on a row,\nit has no other built-in behavior.\n\nIf there is a need to implement `aria-expanded` elsewhere in the row, cell,\nor element within a cell, you may pass `isExpanded={ undefined }`.\nIn order for keyboard navigation to continue working, add the\n`data-expanded` attribute with either `true`/`false`. This allows the\n`TreeGrid` component to still manage keyboard interactions while allowing\nthe `aria-expanded` attribute to be placed elsewhere.",
						"name": "isExpanded",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					}
				},
				"tags": { "see": "{@link https://www.w3.org/TR/wai-aria-practices/examples/treegrid/treegrid-1.html}" }
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/components/src/tree-grid/roving-tab-index-item.tsx
var import_jsx_dev_runtime$4, _jsxFileName$4, RovingTabIndexItem;
function init_roving_tab_index_item() {
	return (init_roving_tab_index_item = __esmMin((() => {
		init_react();
		init_roving_tab_index_context();
		import_jsx_dev_runtime$4 = require_jsx_dev_runtime();
		_jsxFileName$4 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/tree-grid/roving-tab-index-item.tsx";
		RovingTabIndexItem = (0, import_react.forwardRef)(function UnforwardedRovingTabIndexItem({ children, as: Component, ...props }, forwardedRef) {
			const localRef = (0, import_react.useRef)(null);
			const ref = forwardedRef || localRef;
			const context = useRovingTabIndexContext();
			if (!context) throw new Error("TreeGridItem can only be rendered inside a TreeGrid component.");
			const { lastFocusedElement, setLastFocusedElement } = context;
			let tabIndex;
			if (lastFocusedElement) tabIndex = lastFocusedElement === ("current" in ref ? ref.current : void 0) ? 0 : -1;
			const onFocus = (event) => setLastFocusedElement?.(event.target);
			const allProps = {
				ref,
				tabIndex,
				onFocus,
				...props
			};
			if (typeof children === "function") return children(allProps);
			if (!Component) return null;
			return /* @__PURE__ */ (0, import_jsx_dev_runtime$4.jsxDEV)(Component, {
				...allProps,
				children
			}, void 0, false, {
				fileName: _jsxFileName$4,
				lineNumber: 45,
				columnNumber: 10
			}, this);
		});
		RovingTabIndexItem.displayName = "RovingTabIndexItem";
		try {
			RovingTabIndexItem.__docgenInfo = {
				"description": "",
				"displayName": "RovingTabIndexItem",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/tree-grid/roving-tab-index-item.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/components/src/tree-grid/item.tsx
function UnforwardedTreeGridItem({ children, ...props }, ref) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$3.jsxDEV)(RovingTabIndexItem, {
		ref,
		...props,
		children
	}, void 0, false, {
		fileName: _jsxFileName$3,
		lineNumber: 10,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime$3, _jsxFileName$3, TreeGridItem;
function init_item() {
	return (init_item = __esmMin((() => {
		init_react();
		init_roving_tab_index_item();
		import_jsx_dev_runtime$3 = require_jsx_dev_runtime();
		_jsxFileName$3 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/tree-grid/item.tsx";
		TreeGridItem = (0, import_react.forwardRef)(UnforwardedTreeGridItem);
		TreeGridItem.displayName = "TreeGridItem";
		try {
			TreeGridItem.__docgenInfo = {
				"description": "`TreeGridItem` is used to create a tree hierarchy.\nIt is not a visually styled component, but instead helps with adding\nkeyboard navigation and roving tab index behaviors to tree grid structures.",
				"displayName": "TreeGridItem",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/tree-grid/item.tsx",
				"methods": [],
				"props": {},
				"tags": { "see": "{@link https://www.w3.org/TR/wai-aria-practices/examples/treegrid/treegrid-1.html}" }
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/components/src/tree-grid/cell.tsx
function UnforwardedTreeGridCell({ children, withoutGridItem = false, ...props }, ref) {
	const cellRef = (0, import_react.useRef)(null);
	useValidateTreeGridStructure("TreeGridCell", cellRef);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)("td", {
		ref: cellRef,
		...props,
		role: "gridcell",
		children: withoutGridItem ? /* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)(import_jsx_dev_runtime$2.Fragment, { children: typeof children === "function" ? children({
			...props,
			ref
		}) : children }, void 0, false, {
			fileName: _jsxFileName$2,
			lineNumber: 21,
			columnNumber: 5
		}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)(TreeGridItem, {
			ref,
			children
		}, void 0, false, {
			fileName: _jsxFileName$2,
			lineNumber: 27,
			columnNumber: 5
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$2,
		lineNumber: 19,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime$2, _jsxFileName$2, TreeGridCell;
function init_cell() {
	return (init_cell = __esmMin((() => {
		init_react();
		init_item();
		init_use_validate_tree_grid_structure();
		import_jsx_dev_runtime$2 = require_jsx_dev_runtime();
		_jsxFileName$2 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/tree-grid/cell.tsx";
		TreeGridCell = (0, import_react.forwardRef)(UnforwardedTreeGridCell);
		TreeGridCell.displayName = "TreeGridCell";
		try {
			TreeGridCell.__docgenInfo = {
				"description": "`TreeGridCell` is used to create a tree hierarchy.\nIt is not a visually styled component, but instead helps with adding\nkeyboard navigation and roving tab index behaviors to tree grid structures.",
				"displayName": "TreeGridCell",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/tree-grid/cell.tsx",
				"methods": [],
				"props": {
					"withoutGridItem": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/tree-grid/types.ts",
							"name": "TypeLiteral"
						}, {
							"fileName": "gutenberg-storybook-preview/packages/components/src/tree-grid/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Render `children` without wrapping it in a `TreeGridItem` component.\nThis means that `children` will not participate in the roving tabindex.",
						"name": "withoutGridItem",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"children": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/tree-grid/types.ts",
							"name": "TypeLiteral"
						}, {
							"fileName": "gutenberg-storybook-preview/packages/components/src/tree-grid/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "A render function that receives the props necessary to make it participate in the\nroving tabindex. Any extra props will also be passed through to this function.\n\nProps passed as an argument to the render prop must be passed to the child\nfocusable component/element within the cell. If a component is used, it must\ncorrectly handle the `onFocus`, `tabIndex`, and `ref` props, passing these to the\nelement it renders. These props are used to handle the roving tabindex functionality\nof the tree grid.\n\n```jsx\n<TreeGridCell>\n	{ ( props ) => (\n		<Button onClick={ doSomething } { ...props }>\n			Do something\n		</Button>\n	) }\n</TreeGridCell>\n```",
						"name": "children",
						"required": false,
						"tags": {},
						"type": { "name": "ReactNode | ((props: RovingTabIndexItemPassThruProps) => Element)" }
					}
				},
				"tags": { "see": "{@link https://www.w3.org/TR/wai-aria-practices/examples/treegrid/treegrid-1.html}" }
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/components/src/tree-grid/index.tsx
/**
* Return focusables in a row element, excluding those from other branches
* nested within the row.
*
* @param rowElement The DOM element representing the row.
*
* @return The array of focusables in the row.
*/
function getRowFocusables(rowElement) {
	return focus.focusable.find(rowElement, { sequential: true }).filter((focusable) => {
		return focusable.closest("[role=\"row\"]") === rowElement;
	});
}
/**
* Renders both a table and tbody element, used to create a tree hierarchy.
*
*/
function UnforwardedTreeGrid({ children, onExpandRow = () => {}, onCollapseRow = () => {}, onFocusRow = () => {}, applicationAriaLabel, ...props }, ref) {
	const onKeyDown = (0, import_react.useCallback)((event) => {
		const { keyCode, metaKey, ctrlKey, altKey } = event;
		if (metaKey || ctrlKey || altKey || ![
			38,
			40,
			37,
			39,
			36,
			35
		].includes(keyCode)) return;
		event.stopPropagation();
		const { activeElement } = document;
		const { currentTarget: treeGridElement } = event;
		if (!activeElement || !treeGridElement.contains(activeElement)) return;
		const activeRow = activeElement.closest("[role=\"row\"]");
		if (!activeRow) return;
		const focusablesInRow = getRowFocusables(activeRow);
		const currentColumnIndex = focusablesInRow.indexOf(activeElement);
		const canExpandCollapse = 0 === currentColumnIndex;
		const cannotFocusNextColumn = canExpandCollapse && (activeRow.getAttribute("data-expanded") === "false" || activeRow.getAttribute("aria-expanded") === "false") && keyCode === 39;
		if ([37, 39].includes(keyCode)) {
			let nextIndex;
			if (keyCode === 37) nextIndex = Math.max(0, currentColumnIndex - 1);
			else nextIndex = Math.min(currentColumnIndex + 1, focusablesInRow.length - 1);
			if (canExpandCollapse) {
				if (keyCode === 37) {
					if (activeRow.getAttribute("data-expanded") === "true" || activeRow.getAttribute("aria-expanded") === "true") {
						onCollapseRow(activeRow);
						event.preventDefault();
						return;
					}
					const level = Math.max(parseInt(activeRow?.getAttribute("aria-level") ?? "1", 10) - 1, 1);
					const rows = Array.from(treeGridElement.querySelectorAll("[role=\"row\"]"));
					let parentRow = activeRow;
					const currentRowIndex = rows.indexOf(activeRow);
					for (let i = currentRowIndex; i >= 0; i--) {
						const ariaLevel = rows[i].getAttribute("aria-level");
						if (ariaLevel !== null && parseInt(ariaLevel, 10) === level) {
							parentRow = rows[i];
							break;
						}
					}
					getRowFocusables(parentRow)?.[0]?.focus();
				}
				if (keyCode === 39) {
					if (activeRow.getAttribute("data-expanded") === "false" || activeRow.getAttribute("aria-expanded") === "false") {
						onExpandRow(activeRow);
						event.preventDefault();
						return;
					}
					const focusableItems = getRowFocusables(activeRow);
					if (focusableItems.length > 0) focusableItems[nextIndex]?.focus();
				}
				event.preventDefault();
				return;
			}
			if (cannotFocusNextColumn) return;
			focusablesInRow[nextIndex].focus();
			event.preventDefault();
		} else if ([38, 40].includes(keyCode)) {
			const rows = Array.from(treeGridElement.querySelectorAll("[role=\"row\"]"));
			const currentRowIndex = rows.indexOf(activeRow);
			let nextRowIndex;
			if (keyCode === 38) nextRowIndex = Math.max(0, currentRowIndex - 1);
			else nextRowIndex = Math.min(currentRowIndex + 1, rows.length - 1);
			if (nextRowIndex === currentRowIndex) {
				event.preventDefault();
				return;
			}
			const focusablesInNextRow = getRowFocusables(rows[nextRowIndex]);
			if (!focusablesInNextRow || !focusablesInNextRow.length) {
				event.preventDefault();
				return;
			}
			focusablesInNextRow[Math.min(currentColumnIndex, focusablesInNextRow.length - 1)].focus();
			onFocusRow(event, activeRow, rows[nextRowIndex]);
			event.preventDefault();
		} else if ([36, 35].includes(keyCode)) {
			const rows = Array.from(treeGridElement.querySelectorAll("[role=\"row\"]"));
			const currentRowIndex = rows.indexOf(activeRow);
			let nextRowIndex;
			if (keyCode === 36) nextRowIndex = 0;
			else nextRowIndex = rows.length - 1;
			if (nextRowIndex === currentRowIndex) {
				event.preventDefault();
				return;
			}
			const focusablesInNextRow = getRowFocusables(rows[nextRowIndex]);
			if (!focusablesInNextRow || !focusablesInNextRow.length) {
				event.preventDefault();
				return;
			}
			focusablesInNextRow[Math.min(currentColumnIndex, focusablesInNextRow.length - 1)].focus();
			onFocusRow(event, activeRow, rows[nextRowIndex]);
			event.preventDefault();
		}
	}, [
		onExpandRow,
		onCollapseRow,
		onFocusRow
	]);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(RovingTabIndex, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)("div", {
		role: "application",
		"aria-label": applicationAriaLabel,
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)("table", {
			...props,
			role: "treegrid",
			onKeyDown,
			ref,
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)("tbody", { children }, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 311,
				columnNumber: 6
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName$1,
			lineNumber: 305,
			columnNumber: 5
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 304,
		columnNumber: 4
	}, this) }, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 298,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime$1, _jsxFileName$1, TreeGrid;
function init_tree_grid() {
	return (init_tree_grid = __esmMin((() => {
		init_build_module();
		init_react();
		init_build_module$1();
		init_roving_tab_index();
		import_jsx_dev_runtime$1 = require_jsx_dev_runtime();
		init_row();
		init_cell();
		_jsxFileName$1 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/tree-grid/index.tsx";
		TreeGrid = (0, import_react.forwardRef)(UnforwardedTreeGrid);
		TreeGrid.displayName = "TreeGrid";
		try {
			TreeGrid.__docgenInfo = {
				"description": "`TreeGrid` is used to create a tree hierarchy.\nIt is not a visually styled component, but instead helps with adding\nkeyboard navigation and roving tab index behaviors to tree grid structures.\n\nA tree grid is a hierarchical 2 dimensional UI component, for example it could be\nused to implement a file system browser.\n\nA tree grid allows the user to navigate using arrow keys.\nUp/down to navigate vertically across rows, and left/right to navigate horizontally\nbetween focusables in a row.\n\nThe `TreeGrid` renders both a `table` and `tbody` element, and is intended to be used\nwith `TreeGridRow` (`tr`) and `TreeGridCell` (`td`) to build out a grid.\n\n```jsx\nfunction TreeMenu() {\n	return (\n		<TreeGrid>\n			<TreeGridRow level={ 1 } positionInSet={ 1 } setSize={ 2 }>\n				<TreeGridCell>\n					{ ( props ) => (\n						<Button onClick={ onSelect } { ...props }>Select</Button>\n					) }\n				</TreeGridCell>\n				<TreeGridCell>\n					{ ( props ) => (\n						<Button onClick={ onMove } { ...props }>Move</Button>\n					) }\n				</TreeGridCell>\n			</TreeGridRow>\n			<TreeGridRow level={ 1 } positionInSet={ 2 } setSize={ 2 }>\n				<TreeGridCell>\n					{ ( props ) => (\n						<Button onClick={ onSelect } { ...props }>Select</Button>\n					) }\n				</TreeGridCell>\n				<TreeGridCell>\n					{ ( props ) => (\n						<Button onClick={ onMove } { ...props }>Move</Button>\n					) }\n				</TreeGridCell>\n			</TreeGridRow>\n			<TreeGridRow level={ 2 } positionInSet={ 1 } setSize={ 1 }>\n				<TreeGridCell>\n					{ ( props ) => (\n						<Button onClick={ onSelect } { ...props }>Select</Button>\n					) }\n				</TreeGridCell>\n				<TreeGridCell>\n					{ ( props ) => (\n						<Button onClick={ onMove } { ...props }>Move</Button>\n					) }\n				</TreeGridCell>\n			</TreeGridRow>\n		</TreeGrid>\n	);\n}\n```",
				"displayName": "TreeGrid",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/tree-grid/index.tsx",
				"methods": [],
				"props": {
					"applicationAriaLabel": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/tree-grid/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Label to use for the element with the `application` role.",
						"name": "applicationAriaLabel",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"children": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/tree-grid/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The children to be rendered in the tree grid.",
						"name": "children",
						"required": true,
						"tags": {},
						"type": { "name": "ReactNode" }
					},
					"onExpandRow": {
						"defaultValue": { "value": "noop" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/tree-grid/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Callback to fire when row is expanded.",
						"name": "onExpandRow",
						"required": false,
						"tags": {},
						"type": { "name": "((row: HTMLElement) => void)" }
					},
					"onCollapseRow": {
						"defaultValue": { "value": "noop" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/tree-grid/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Callback to fire when row is collapsed.",
						"name": "onCollapseRow",
						"required": false,
						"tags": {},
						"type": { "name": "((row: HTMLElement) => void)" }
					},
					"onFocusRow": {
						"defaultValue": { "value": "noop" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/tree-grid/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Callback that fires when focus is shifted from one row to another via\nthe Up and Down keys. Callback is also fired on Home and End keys which\nmove focus from the beginning row to the end row.\n\nThe callback is passed the event, the start row element that the focus was on\noriginally, and the destination row element after the focus has moved.",
						"name": "onFocusRow",
						"required": false,
						"tags": {},
						"type": { "name": "((event: KeyboardEvent<HTMLTableElement>, startRow: HTMLElement, destinationRow: HTMLElement) => void)" }
					}
				},
				"tags": { "see": "{@link https://www.w3.org/TR/wai-aria-practices/examples/treegrid/treegrid-1.html}" }
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/components/src/tree-grid/stories/index.story.tsx
var import_jsx_dev_runtime, fn, _jsxFileName, meta, groceries, Descender, Rows, Template, Default;
function init_index_story() {
	return (init_index_story = __esmMin((() => {
		init_react();
		init_tree_grid();
		init_button();
		init_input_control();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		({fn} = __STORYBOOK_MODULE_TEST__);
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/tree-grid/stories/index.story.tsx";
		meta = {
			title: "Components/@wordpress-components/Navigation/TreeGrid",
			id: "components-treegrid",
			component: TreeGrid,
			subcomponents: {
				TreeGridRow,
				TreeGridCell
			},
			argTypes: { children: { control: false } },
			tags: ["status-experimental", "manifest"],
			args: {
				onExpandRow: fn(),
				onCollapseRow: fn(),
				onFocusRow: fn()
			},
			parameters: {
				controls: { expanded: true },
				componentStatus: {
					status: "recommended",
					whereUsed: "global"
				}
			}
		};
		groceries = [{
			name: "Fruit",
			types: [
				{ name: "Apple" },
				{ name: "Orange" },
				{ name: "Pear" }
			]
		}, {
			name: "Vegetable",
			types: [
				{ name: "Cucumber" },
				{ name: "Parsnip" },
				{ name: "Pumpkin" }
			]
		}];
		Descender = ({ level }) => {
			if (level === 1) return null;
			const indentation = "\xA0".repeat((level - 1) * 4);
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
				"aria-hidden": "true",
				children: indentation + "├ "
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 69,
				columnNumber: 9
			}, void 0);
		};
		Rows = ({ items = [], level = 1 }) => {
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: items.map((item, index) => {
				const hasChildren = !!item.types && !!item.types.length;
				return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TreeGridRow, {
					positionInSet: index + 1,
					setSize: items.length,
					level,
					isExpanded: true,
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TreeGridCell, { children: (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Descender, { level }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 99,
							columnNumber: 11
						}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
							__next40pxDefaultSize: true,
							variant: "primary",
							...props,
							children: item.name
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 100,
							columnNumber: 11
						}, void 0)] }, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 98,
							columnNumber: 10
						}, void 0) }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 96,
							columnNumber: 8
						}, void 0),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TreeGridCell, { children: (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InputControl, {
							label: "Description",
							hideLabelFromVision: true,
							placeholder: "Description",
							...props
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 112,
							columnNumber: 10
						}, void 0) }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 110,
							columnNumber: 8
						}, void 0),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TreeGridCell, { children: (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InputControl, {
							label: "Notes",
							hideLabelFromVision: true,
							placeholder: "Notes",
							...props
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 122,
							columnNumber: 10
						}, void 0) }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 120,
							columnNumber: 8
						}, void 0)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 90,
					columnNumber: 7
				}, void 0), hasChildren && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Rows, {
					items: item.types,
					level: level + 1
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 132,
					columnNumber: 8
				}, void 0)] }, item.name, true, {
					fileName: _jsxFileName,
					lineNumber: 89,
					columnNumber: 6
				}, void 0);
			}) }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 85,
				columnNumber: 3
			}, void 0);
		};
		Template = (args) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TreeGrid, { ...args }, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 142,
			columnNumber: 2
		}, void 0);
		Default = Template.bind({});
		Default.args = { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Rows, { items: groceries }, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 147,
			columnNumber: 12
		}, void 0) };
		Default.parameters = {
			...Default.parameters,
			docs: {
				...Default.parameters?.docs,
				source: {
					originalSource: "args => <TreeGrid {...args} />",
					...Default.parameters?.docs?.source
				}
			}
		};
	})))();
}
//#endregion
init_index_story();
export { Default, meta as default };
