import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_react } from "./react-Bujh4FgW.js";
//#region ../node_modules/.store/framer-motion@11.18.2-c6uTn1GdwNuTiEI_ZcwZaQ/node_modules/framer-motion/dist/es/context/PresenceContext.mjs
var import_react$1, PresenceContext;
function init_PresenceContext() {
	return (init_PresenceContext = __esmMin((() => {
		import_react$1 = require_react();
		PresenceContext = (0, import_react$1.createContext)(null);
	})))();
}
//#endregion
//#region ../node_modules/.store/framer-motion@11.18.2-c6uTn1GdwNuTiEI_ZcwZaQ/node_modules/framer-motion/dist/es/components/AnimatePresence/use-presence.mjs
/**
* When a component is the child of `AnimatePresence`, it can use `usePresence`
* to access information about whether it's still present in the React tree.
*
* ```jsx
* import { usePresence } from "framer-motion"
*
* export const Component = () => {
*   const [isPresent, safeToRemove] = usePresence()
*
*   useEffect(() => {
*     !isPresent && setTimeout(safeToRemove, 1000)
*   }, [isPresent])
*
*   return <div />
* }
* ```
*
* If `isPresent` is `false`, it means that a component has been removed the tree, but
* `AnimatePresence` won't really remove it until `safeToRemove` has been called.
*
* @public
*/
function usePresence(subscribe = true) {
	const context = (0, import_react.useContext)(PresenceContext);
	if (context === null) return [true, null];
	const { isPresent, onExitComplete, register } = context;
	const id = (0, import_react.useId)();
	(0, import_react.useEffect)(() => {
		if (subscribe) register(id);
	}, [subscribe]);
	const safeToRemove = (0, import_react.useCallback)(() => subscribe && onExitComplete && onExitComplete(id), [
		id,
		onExitComplete,
		subscribe
	]);
	return !isPresent && onExitComplete ? [false, safeToRemove] : [true];
}
/**
* Similar to `usePresence`, except `useIsPresent` simply returns whether or not the component is present.
* There is no `safeToRemove` function.
*
* ```jsx
* import { useIsPresent } from "framer-motion"
*
* export const Component = () => {
*   const isPresent = useIsPresent()
*
*   useEffect(() => {
*     !isPresent && console.log("I've been removed!")
*   }, [isPresent])
*
*   return <div />
* }
* ```
*
* @public
*/
function useIsPresent() {
	return isPresent((0, import_react.useContext)(PresenceContext));
}
function isPresent(context) {
	return context === null ? true : context.isPresent;
}
var import_react;
function init_use_presence() {
	return (init_use_presence = __esmMin((() => {
		import_react = require_react();
		init_PresenceContext();
	})))();
}
//#endregion
export { init_PresenceContext as a, PresenceContext as i, useIsPresent as n, usePresence as r, init_use_presence as t };
