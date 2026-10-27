import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as __, t as init_build_module$1 } from "./build-module-v04us4E2.js";
import { n as isAppleOS } from "./platform-BaBec-sY.js";
//#region ../packages/keycodes/build-module/index.mjs
function capitaliseFirstCharacter(string) {
	return string.length < 2 ? string.toUpperCase() : string.charAt(0).toUpperCase() + string.slice(1);
}
function mapValues(object, mapFn) {
	return Object.fromEntries(Object.entries(object).map(([key, value]) => [key, mapFn(value)]));
}
function getEventModifiers(event) {
	return [
		"alt",
		CTRL,
		COMMAND,
		SHIFT
	].filter((key) => event[`${key}Key`]);
}
var CTRL, COMMAND, SHIFT, modifiers, rawShortcut, ariaKeyShortcut, displayShortcutList, displayShortcut, shortcutAriaLabel, keyboardShortcut, isKeyboardEvent;
function init_build_module() {
	return (init_build_module = __esmMin((() => {
		init_build_module$1();
		CTRL = "ctrl";
		COMMAND = "meta";
		SHIFT = "shift";
		modifiers = {
			primary: (_isApple) => _isApple() ? [COMMAND] : [CTRL],
			primaryShift: (_isApple) => _isApple() ? [SHIFT, COMMAND] : [CTRL, SHIFT],
			primaryAlt: (_isApple) => _isApple() ? ["alt", COMMAND] : [CTRL, "alt"],
			secondary: (_isApple) => _isApple() ? [
				SHIFT,
				"alt",
				COMMAND
			] : [
				CTRL,
				SHIFT,
				"alt"
			],
			access: (_isApple) => _isApple() ? [CTRL, "alt"] : [SHIFT, "alt"],
			ctrl: () => [CTRL],
			alt: () => ["alt"],
			ctrlShift: () => [CTRL, SHIFT],
			shift: () => [SHIFT],
			shiftAlt: () => [SHIFT, "alt"],
			undefined: () => []
		};
		rawShortcut = /* @__PURE__ */ mapValues(modifiers, (modifier) => {
			return (character, _isApple = isAppleOS) => {
				return [...modifier(_isApple), character.toLowerCase()].join("+");
			};
		});
		ariaKeyShortcut = /* @__PURE__ */ mapValues(modifiers, (modifier) => {
			return (character, _isApple = isAppleOS) => {
				return [...modifier(_isApple).map((key) => key === "ctrl" ? "Control" : key).map((key) => capitaliseFirstCharacter(key)), capitaliseFirstCharacter(character)].join("+");
			};
		});
		displayShortcutList = /* @__PURE__ */ mapValues(modifiers, (modifier) => {
			return (character, _isApple = isAppleOS) => {
				const isApple = _isApple();
				const replacementKeyMap = {
					["alt"]: isApple ? "⌥" : "Alt",
					[CTRL]: isApple ? "⌃" : "Ctrl",
					[COMMAND]: "⌘",
					[SHIFT]: isApple ? "⇧" : "Shift"
				};
				return [...modifier(_isApple).reduce((accumulator, key) => {
					const replacementKey = replacementKeyMap[key] ?? key;
					if (isApple) return [...accumulator, replacementKey];
					return [
						...accumulator,
						replacementKey,
						"+"
					];
				}, []), capitaliseFirstCharacter(character)];
			};
		});
		displayShortcut = /* @__PURE__ */ mapValues(displayShortcutList, (shortcutList) => {
			return (character, _isApple = isAppleOS) => shortcutList(character, _isApple).join("");
		});
		shortcutAriaLabel = /* @__PURE__ */ mapValues(modifiers, (modifier) => {
			return (character, _isApple = isAppleOS) => {
				const isApple = _isApple();
				const replacementKeyMap = {
					[SHIFT]: "Shift",
					[COMMAND]: isApple ? "Command" : "Control",
					[CTRL]: "Control",
					["alt"]: isApple ? "Option" : "Alt",
					",": __("Comma"),
					".": __("Period"),
					"`": __("Backtick"),
					"~": __("Tilde")
				};
				return [...modifier(_isApple), character].map((key) => capitaliseFirstCharacter(replacementKeyMap[key] ?? key)).join(isApple ? " " : " + ");
			};
		});
		keyboardShortcut = /* @__PURE__ */ Object.fromEntries(Object.keys(modifiers).map((modifier) => [modifier, (character, _isApple = isAppleOS) => ({
			displayShortcut: displayShortcut[modifier](character, _isApple),
			ariaKeyShortcut: ariaKeyShortcut[modifier](character, _isApple),
			label: shortcutAriaLabel[modifier](character, _isApple)
		})]));
		isKeyboardEvent = /* @__PURE__ */ mapValues(modifiers, (getModifiers) => {
			return (event, character, _isApple = isAppleOS) => {
				const mods = getModifiers(_isApple);
				const eventMods = getEventModifiers(event);
				const replacementWithShiftKeyMap = {
					Comma: ",",
					Backslash: "\\",
					IntlRo: "\\",
					IntlYen: "\\"
				};
				const modsDiff = mods.filter((mod) => !eventMods.includes(mod));
				const eventModsDiff = eventMods.filter((mod) => !mods.includes(mod));
				if (modsDiff.length > 0 || eventModsDiff.length > 0) return false;
				let key = event.key.toLowerCase();
				if (!character) return mods.includes(key);
				if (event.altKey && character.length === 1) key = String.fromCharCode(event.keyCode).toLowerCase();
				if (event.shiftKey && character.length === 1 && replacementWithShiftKeyMap[event.code]) key = replacementWithShiftKeyMap[event.code];
				if (character === "del") character = "delete";
				return key === character.toLowerCase();
			};
		});
	})))();
}
//#endregion
export { keyboardShortcut as a, isKeyboardEvent as i, displayShortcut as n, rawShortcut as o, init_build_module as r, shortcutAriaLabel as s, ariaKeyShortcut as t };
