import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C1RZKCc6.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { n as sprintf } from "./sprintf-_uhhbfMc.js";
import { n as __, t as init_build_module } from "./build-module-v04us4E2.js";
import { n as init_visually_hidden, t as VisuallyHidden } from "./visually-hidden-BkfR1Mwg.js";
//#region ../packages/ui/build-module/utils/keyboard-shortcut.mjs
function useKeyboardShortcutProps({ "aria-describedby": ariaDescribedBy, "aria-keyshortcuts": ariaKeyShortcuts, shortcut }) {
	const generatedDescriptionId = (0, import_react.useId)();
	const descriptionId = shortcut ? generatedDescriptionId : void 0;
	return {
		descriptionId,
		targetProps: {
			"aria-describedby": [ariaDescribedBy, descriptionId].filter(Boolean).join(" ") || void 0,
			"aria-keyshortcuts": shortcut?.ariaKeyShortcut ?? ariaKeyShortcuts
		}
	};
}
var import_jsx_runtime, KeyboardShortcutDescription, KeyboardShortcutDisplay;
function init_keyboard_shortcut() {
	return (init_keyboard_shortcut = __esmMin((() => {
		init_react();
		init_build_module();
		init_visually_hidden();
		import_jsx_runtime = require_jsx_runtime();
		KeyboardShortcutDescription = (0, import_react.forwardRef)(function UnforwardedKeyboardShortcutDescription({ descriptionId, shortcut }, ref) {
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VisuallyHidden, {
				id: descriptionId,
				"aria-hidden": "true",
				render: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { ref }),
				children: sprintf(__("Keyboard shortcut: %s"), shortcut.label ?? shortcut.ariaKeyShortcut)
			});
		});
		KeyboardShortcutDisplay = (0, import_react.forwardRef)(function UnforwardedKeyboardShortcutDisplay({ className, shortcut }, ref) {
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				ref,
				"aria-hidden": "true",
				className,
				dir: "ltr",
				children: shortcut.displayShortcut
			});
		});
	})))();
}
//#endregion
export { useKeyboardShortcutProps as i, KeyboardShortcutDisplay as n, init_keyboard_shortcut as r, KeyboardShortcutDescription as t };
