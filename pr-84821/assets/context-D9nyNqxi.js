import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
//#region ../packages/block-editor/src/components/block-edit/context.ts
/**
* A hook that returns the block edit context.
*
* @return Block edit context
*/
function useBlockEditContext() {
	return (0, import_react.useContext)(Context);
}
var mayDisplayControlsKey, mayDisplayParentControlsKey, mayDisplayPatternEditingControlsKey, blockEditingModeKey, blockBindingsKey, isPreviewModeKey, isMultiSelectedKey, isInListViewBlockSupportTreeKey, DEFAULT_BLOCK_EDIT_CONTEXT, Context, Provider;
function init_context() {
	return (init_context = __esmMin((() => {
		init_react();
		mayDisplayControlsKey = Symbol("mayDisplayControls");
		mayDisplayParentControlsKey = Symbol("mayDisplayParentControls");
		mayDisplayPatternEditingControlsKey = Symbol("mayDisplayPatternEditingControls");
		blockEditingModeKey = Symbol("blockEditingMode");
		blockBindingsKey = Symbol("blockBindings");
		isPreviewModeKey = Symbol("isPreviewMode");
		isMultiSelectedKey = Symbol("isMultiSelected");
		isInListViewBlockSupportTreeKey = Symbol("isInListViewBlockSupportTree");
		DEFAULT_BLOCK_EDIT_CONTEXT = {
			name: "",
			isSelected: false
		};
		Context = (0, import_react.createContext)(DEFAULT_BLOCK_EDIT_CONTEXT);
		Context.displayName = "BlockEditContext";
		({Provider} = Context);
	})))();
}
//#endregion
export { init_context as a, isPreviewModeKey as c, mayDisplayPatternEditingControlsKey as d, useBlockEditContext as f, blockEditingModeKey as i, mayDisplayControlsKey as l, Provider as n, isInListViewBlockSupportTreeKey as o, blockBindingsKey as r, isMultiSelectedKey as s, DEFAULT_BLOCK_EDIT_CONTEXT as t, mayDisplayParentControlsKey as u };
