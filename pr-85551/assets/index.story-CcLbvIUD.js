import { n as __esmMin, o as __toESM, t as __commonJSMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as isAppleOS } from "./platform-BaBec-sY.js";
import { r as init_build_module } from "./build-module-LJKyBiy6.js";
//#region ../node_modules/.store/mousetrap@1.6.5-wXrhfo95WfPhGlz0ygmxKA/node_modules/mousetrap/mousetrap.js
var require_mousetrap = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/**
	* Copyright 2012-2017 Craig Campbell
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	* http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*
	* Mousetrap is a simple keyboard shortcut library for Javascript with
	* no external dependencies
	*
	* @version 1.6.5
	* @url craig.is/killing/mice
	*/
	(function(window, document, undefined) {
		if (!window) return;
		/**
		* mapping of special keycodes to their corresponding keys
		*
		* everything in this dictionary cannot use keypress events
		* so it has to be here to map to the correct keycodes for
		* keyup/keydown events
		*
		* @type {Object}
		*/
		var _MAP = {
			8: "backspace",
			9: "tab",
			13: "enter",
			16: "shift",
			17: "ctrl",
			18: "alt",
			20: "capslock",
			27: "esc",
			32: "space",
			33: "pageup",
			34: "pagedown",
			35: "end",
			36: "home",
			37: "left",
			38: "up",
			39: "right",
			40: "down",
			45: "ins",
			46: "del",
			91: "meta",
			93: "meta",
			224: "meta"
		};
		/**
		* mapping for special characters so they can support
		*
		* this dictionary is only used incase you want to bind a
		* keyup or keydown event to one of these keys
		*
		* @type {Object}
		*/
		var _KEYCODE_MAP = {
			106: "*",
			107: "+",
			109: "-",
			110: ".",
			111: "/",
			186: ";",
			187: "=",
			188: ",",
			189: "-",
			190: ".",
			191: "/",
			192: "`",
			219: "[",
			220: "\\",
			221: "]",
			222: "'"
		};
		/**
		* this is a mapping of keys that require shift on a US keypad
		* back to the non shift equivelents
		*
		* this is so you can use keyup events with these keys
		*
		* note that this will only work reliably on US keyboards
		*
		* @type {Object}
		*/
		var _SHIFT_MAP = {
			"~": "`",
			"!": "1",
			"@": "2",
			"#": "3",
			"$": "4",
			"%": "5",
			"^": "6",
			"&": "7",
			"*": "8",
			"(": "9",
			")": "0",
			"_": "-",
			"+": "=",
			":": ";",
			"\"": "'",
			"<": ",",
			">": ".",
			"?": "/",
			"|": "\\"
		};
		/**
		* this is a list of special strings you can use to map
		* to modifier keys when you specify your keyboard shortcuts
		*
		* @type {Object}
		*/
		var _SPECIAL_ALIASES = {
			"option": "alt",
			"command": "meta",
			"return": "enter",
			"escape": "esc",
			"plus": "+",
			"mod": /Mac|iPod|iPhone|iPad/.test(navigator.platform) ? "meta" : "ctrl"
		};
		/**
		* variable to store the flipped version of _MAP from above
		* needed to check if we should use keypress or not when no action
		* is specified
		*
		* @type {Object|undefined}
		*/
		var _REVERSE_MAP;
		/**
		* loop through the f keys, f1 to f19 and add them to the map
		* programatically
		*/
		for (var i = 1; i < 20; ++i) _MAP[111 + i] = "f" + i;
		/**
		* loop through to map numbers on the numeric keypad
		*/
		for (i = 0; i <= 9; ++i) _MAP[i + 96] = i.toString();
		/**
		* cross browser add event method
		*
		* @param {Element|HTMLDocument} object
		* @param {string} type
		* @param {Function} callback
		* @returns void
		*/
		function _addEvent(object, type, callback) {
			if (object.addEventListener) {
				object.addEventListener(type, callback, false);
				return;
			}
			object.attachEvent("on" + type, callback);
		}
		/**
		* takes the event and returns the key character
		*
		* @param {Event} e
		* @return {string}
		*/
		function _characterFromEvent(e) {
			if (e.type == "keypress") {
				var character = String.fromCharCode(e.which);
				if (!e.shiftKey) character = character.toLowerCase();
				return character;
			}
			if (_MAP[e.which]) return _MAP[e.which];
			if (_KEYCODE_MAP[e.which]) return _KEYCODE_MAP[e.which];
			return String.fromCharCode(e.which).toLowerCase();
		}
		/**
		* checks if two arrays are equal
		*
		* @param {Array} modifiers1
		* @param {Array} modifiers2
		* @returns {boolean}
		*/
		function _modifiersMatch(modifiers1, modifiers2) {
			return modifiers1.sort().join(",") === modifiers2.sort().join(",");
		}
		/**
		* takes a key event and figures out what the modifiers are
		*
		* @param {Event} e
		* @returns {Array}
		*/
		function _eventModifiers(e) {
			var modifiers = [];
			if (e.shiftKey) modifiers.push("shift");
			if (e.altKey) modifiers.push("alt");
			if (e.ctrlKey) modifiers.push("ctrl");
			if (e.metaKey) modifiers.push("meta");
			return modifiers;
		}
		/**
		* prevents default for this event
		*
		* @param {Event} e
		* @returns void
		*/
		function _preventDefault(e) {
			if (e.preventDefault) {
				e.preventDefault();
				return;
			}
			e.returnValue = false;
		}
		/**
		* stops propogation for this event
		*
		* @param {Event} e
		* @returns void
		*/
		function _stopPropagation(e) {
			if (e.stopPropagation) {
				e.stopPropagation();
				return;
			}
			e.cancelBubble = true;
		}
		/**
		* determines if the keycode specified is a modifier key or not
		*
		* @param {string} key
		* @returns {boolean}
		*/
		function _isModifier(key) {
			return key == "shift" || key == "ctrl" || key == "alt" || key == "meta";
		}
		/**
		* reverses the map lookup so that we can look for specific keys
		* to see what can and can't use keypress
		*
		* @return {Object}
		*/
		function _getReverseMap() {
			if (!_REVERSE_MAP) {
				_REVERSE_MAP = {};
				for (var key in _MAP) {
					if (key > 95 && key < 112) continue;
					if (_MAP.hasOwnProperty(key)) _REVERSE_MAP[_MAP[key]] = key;
				}
			}
			return _REVERSE_MAP;
		}
		/**
		* picks the best action based on the key combination
		*
		* @param {string} key - character for key
		* @param {Array} modifiers
		* @param {string=} action passed in
		*/
		function _pickBestAction(key, modifiers, action) {
			if (!action) action = _getReverseMap()[key] ? "keydown" : "keypress";
			if (action == "keypress" && modifiers.length) action = "keydown";
			return action;
		}
		/**
		* Converts from a string key combination to an array
		*
		* @param  {string} combination like "command+shift+l"
		* @return {Array}
		*/
		function _keysFromString(combination) {
			if (combination === "+") return ["+"];
			combination = combination.replace(/\+{2}/g, "+plus");
			return combination.split("+");
		}
		/**
		* Gets info for a specific key combination
		*
		* @param  {string} combination key combination ("command+s" or "a" or "*")
		* @param  {string=} action
		* @returns {Object}
		*/
		function _getKeyInfo(combination, action) {
			var keys;
			var key;
			var i;
			var modifiers = [];
			keys = _keysFromString(combination);
			for (i = 0; i < keys.length; ++i) {
				key = keys[i];
				if (_SPECIAL_ALIASES[key]) key = _SPECIAL_ALIASES[key];
				if (action && action != "keypress" && _SHIFT_MAP[key]) {
					key = _SHIFT_MAP[key];
					modifiers.push("shift");
				}
				if (_isModifier(key)) modifiers.push(key);
			}
			action = _pickBestAction(key, modifiers, action);
			return {
				key,
				modifiers,
				action
			};
		}
		function _belongsTo(element, ancestor) {
			if (element === null || element === document) return false;
			if (element === ancestor) return true;
			return _belongsTo(element.parentNode, ancestor);
		}
		function Mousetrap(targetElement) {
			var self = this;
			targetElement = targetElement || document;
			if (!(self instanceof Mousetrap)) return new Mousetrap(targetElement);
			/**
			* element to attach key events to
			*
			* @type {Element}
			*/
			self.target = targetElement;
			/**
			* a list of all the callbacks setup via Mousetrap.bind()
			*
			* @type {Object}
			*/
			self._callbacks = {};
			/**
			* direct map of string combinations to callbacks used for trigger()
			*
			* @type {Object}
			*/
			self._directMap = {};
			/**
			* keeps track of what level each sequence is at since multiple
			* sequences can start out with the same sequence
			*
			* @type {Object}
			*/
			var _sequenceLevels = {};
			/**
			* variable to store the setTimeout call
			*
			* @type {null|number}
			*/
			var _resetTimer;
			/**
			* temporary state where we will ignore the next keyup
			*
			* @type {boolean|string}
			*/
			var _ignoreNextKeyup = false;
			/**
			* temporary state where we will ignore the next keypress
			*
			* @type {boolean}
			*/
			var _ignoreNextKeypress = false;
			/**
			* are we currently inside of a sequence?
			* type of action ("keyup" or "keydown" or "keypress") or false
			*
			* @type {boolean|string}
			*/
			var _nextExpectedAction = false;
			/**
			* resets all sequence counters except for the ones passed in
			*
			* @param {Object} doNotReset
			* @returns void
			*/
			function _resetSequences(doNotReset) {
				doNotReset = doNotReset || {};
				var activeSequences = false, key;
				for (key in _sequenceLevels) {
					if (doNotReset[key]) {
						activeSequences = true;
						continue;
					}
					_sequenceLevels[key] = 0;
				}
				if (!activeSequences) _nextExpectedAction = false;
			}
			/**
			* finds all callbacks that match based on the keycode, modifiers,
			* and action
			*
			* @param {string} character
			* @param {Array} modifiers
			* @param {Event|Object} e
			* @param {string=} sequenceName - name of the sequence we are looking for
			* @param {string=} combination
			* @param {number=} level
			* @returns {Array}
			*/
			function _getMatches(character, modifiers, e, sequenceName, combination, level) {
				var i;
				var callback;
				var matches = [];
				var action = e.type;
				if (!self._callbacks[character]) return [];
				if (action == "keyup" && _isModifier(character)) modifiers = [character];
				for (i = 0; i < self._callbacks[character].length; ++i) {
					callback = self._callbacks[character][i];
					if (!sequenceName && callback.seq && _sequenceLevels[callback.seq] != callback.level) continue;
					if (action != callback.action) continue;
					if (action == "keypress" && !e.metaKey && !e.ctrlKey || _modifiersMatch(modifiers, callback.modifiers)) {
						var deleteCombo = !sequenceName && callback.combo == combination;
						var deleteSequence = sequenceName && callback.seq == sequenceName && callback.level == level;
						if (deleteCombo || deleteSequence) self._callbacks[character].splice(i, 1);
						matches.push(callback);
					}
				}
				return matches;
			}
			/**
			* actually calls the callback function
			*
			* if your callback function returns false this will use the jquery
			* convention - prevent default and stop propogation on the event
			*
			* @param {Function} callback
			* @param {Event} e
			* @returns void
			*/
			function _fireCallback(callback, e, combo, sequence) {
				if (self.stopCallback(e, e.target || e.srcElement, combo, sequence)) return;
				if (callback(e, combo) === false) {
					_preventDefault(e);
					_stopPropagation(e);
				}
			}
			/**
			* handles a character key event
			*
			* @param {string} character
			* @param {Array} modifiers
			* @param {Event} e
			* @returns void
			*/
			self._handleKey = function(character, modifiers, e) {
				var callbacks = _getMatches(character, modifiers, e);
				var i;
				var doNotReset = {};
				var maxLevel = 0;
				var processedSequenceCallback = false;
				for (i = 0; i < callbacks.length; ++i) if (callbacks[i].seq) maxLevel = Math.max(maxLevel, callbacks[i].level);
				for (i = 0; i < callbacks.length; ++i) {
					if (callbacks[i].seq) {
						if (callbacks[i].level != maxLevel) continue;
						processedSequenceCallback = true;
						doNotReset[callbacks[i].seq] = 1;
						_fireCallback(callbacks[i].callback, e, callbacks[i].combo, callbacks[i].seq);
						continue;
					}
					if (!processedSequenceCallback) _fireCallback(callbacks[i].callback, e, callbacks[i].combo);
				}
				var ignoreThisKeypress = e.type == "keypress" && _ignoreNextKeypress;
				if (e.type == _nextExpectedAction && !_isModifier(character) && !ignoreThisKeypress) _resetSequences(doNotReset);
				_ignoreNextKeypress = processedSequenceCallback && e.type == "keydown";
			};
			/**
			* handles a keydown event
			*
			* @param {Event} e
			* @returns void
			*/
			function _handleKeyEvent(e) {
				if (typeof e.which !== "number") e.which = e.keyCode;
				var character = _characterFromEvent(e);
				if (!character) return;
				if (e.type == "keyup" && _ignoreNextKeyup === character) {
					_ignoreNextKeyup = false;
					return;
				}
				self.handleKey(character, _eventModifiers(e), e);
			}
			/**
			* called to set a 1 second timeout on the specified sequence
			*
			* this is so after each key press in the sequence you have 1 second
			* to press the next key before you have to start over
			*
			* @returns void
			*/
			function _resetSequenceTimer() {
				clearTimeout(_resetTimer);
				_resetTimer = setTimeout(_resetSequences, 1e3);
			}
			/**
			* binds a key sequence to an event
			*
			* @param {string} combo - combo specified in bind call
			* @param {Array} keys
			* @param {Function} callback
			* @param {string=} action
			* @returns void
			*/
			function _bindSequence(combo, keys, callback, action) {
				_sequenceLevels[combo] = 0;
				/**
				* callback to increase the sequence level for this sequence and reset
				* all other sequences that were active
				*
				* @param {string} nextAction
				* @returns {Function}
				*/
				function _increaseSequence(nextAction) {
					return function() {
						_nextExpectedAction = nextAction;
						++_sequenceLevels[combo];
						_resetSequenceTimer();
					};
				}
				/**
				* wraps the specified callback inside of another function in order
				* to reset all sequence counters as soon as this sequence is done
				*
				* @param {Event} e
				* @returns void
				*/
				function _callbackAndReset(e) {
					_fireCallback(callback, e, combo);
					if (action !== "keyup") _ignoreNextKeyup = _characterFromEvent(e);
					setTimeout(_resetSequences, 10);
				}
				for (var i = 0; i < keys.length; ++i) {
					var wrappedCallback = i + 1 === keys.length ? _callbackAndReset : _increaseSequence(action || _getKeyInfo(keys[i + 1]).action);
					_bindSingle(keys[i], wrappedCallback, action, combo, i);
				}
			}
			/**
			* binds a single keyboard combination
			*
			* @param {string} combination
			* @param {Function} callback
			* @param {string=} action
			* @param {string=} sequenceName - name of sequence if part of sequence
			* @param {number=} level - what part of the sequence the command is
			* @returns void
			*/
			function _bindSingle(combination, callback, action, sequenceName, level) {
				self._directMap[combination + ":" + action] = callback;
				combination = combination.replace(/\s+/g, " ");
				var sequence = combination.split(" ");
				var info;
				if (sequence.length > 1) {
					_bindSequence(combination, sequence, callback, action);
					return;
				}
				info = _getKeyInfo(combination, action);
				self._callbacks[info.key] = self._callbacks[info.key] || [];
				_getMatches(info.key, info.modifiers, { type: info.action }, sequenceName, combination, level);
				self._callbacks[info.key][sequenceName ? "unshift" : "push"]({
					callback,
					modifiers: info.modifiers,
					action: info.action,
					seq: sequenceName,
					level,
					combo: combination
				});
			}
			/**
			* binds multiple combinations to the same callback
			*
			* @param {Array} combinations
			* @param {Function} callback
			* @param {string|undefined} action
			* @returns void
			*/
			self._bindMultiple = function(combinations, callback, action) {
				for (var i = 0; i < combinations.length; ++i) _bindSingle(combinations[i], callback, action);
			};
			_addEvent(targetElement, "keypress", _handleKeyEvent);
			_addEvent(targetElement, "keydown", _handleKeyEvent);
			_addEvent(targetElement, "keyup", _handleKeyEvent);
		}
		/**
		* binds an event to mousetrap
		*
		* can be a single key, a combination of keys separated with +,
		* an array of keys, or a sequence of keys separated by spaces
		*
		* be sure to list the modifier keys first to make sure that the
		* correct key ends up getting bound (the last key in the pattern)
		*
		* @param {string|Array} keys
		* @param {Function} callback
		* @param {string=} action - 'keypress', 'keydown', or 'keyup'
		* @returns void
		*/
		Mousetrap.prototype.bind = function(keys, callback, action) {
			var self = this;
			keys = keys instanceof Array ? keys : [keys];
			self._bindMultiple.call(self, keys, callback, action);
			return self;
		};
		/**
		* unbinds an event to mousetrap
		*
		* the unbinding sets the callback function of the specified key combo
		* to an empty function and deletes the corresponding key in the
		* _directMap dict.
		*
		* TODO: actually remove this from the _callbacks dictionary instead
		* of binding an empty function
		*
		* the keycombo+action has to be exactly the same as
		* it was defined in the bind method
		*
		* @param {string|Array} keys
		* @param {string} action
		* @returns void
		*/
		Mousetrap.prototype.unbind = function(keys, action) {
			var self = this;
			return self.bind.call(self, keys, function() {}, action);
		};
		/**
		* triggers an event that has already been bound
		*
		* @param {string} keys
		* @param {string=} action
		* @returns void
		*/
		Mousetrap.prototype.trigger = function(keys, action) {
			var self = this;
			if (self._directMap[keys + ":" + action]) self._directMap[keys + ":" + action]({}, keys);
			return self;
		};
		/**
		* resets the library back to its initial state.  this is useful
		* if you want to clear out the current keyboard shortcuts and bind
		* new ones - for example if you switch to another page
		*
		* @returns void
		*/
		Mousetrap.prototype.reset = function() {
			var self = this;
			self._callbacks = {};
			self._directMap = {};
			return self;
		};
		/**
		* should we stop this event before firing off callbacks
		*
		* @param {Event} e
		* @param {Element} element
		* @return {boolean}
		*/
		Mousetrap.prototype.stopCallback = function(e, element) {
			var self = this;
			if ((" " + element.className + " ").indexOf(" mousetrap ") > -1) return false;
			if (_belongsTo(element, self.target)) return false;
			if ("composedPath" in e && typeof e.composedPath === "function") {
				var initialEventTarget = e.composedPath()[0];
				if (initialEventTarget !== e.target) element = initialEventTarget;
			}
			return element.tagName == "INPUT" || element.tagName == "SELECT" || element.tagName == "TEXTAREA" || element.isContentEditable;
		};
		/**
		* exposes _handleKey publicly so it can be overwritten by extensions
		*/
		Mousetrap.prototype.handleKey = function() {
			var self = this;
			return self._handleKey.apply(self, arguments);
		};
		/**
		* allow custom key mappings
		*/
		Mousetrap.addKeycodes = function(object) {
			for (var key in object) if (object.hasOwnProperty(key)) _MAP[key] = object[key];
			_REVERSE_MAP = null;
		};
		/**
		* Init the global mousetrap functions
		*
		* This method is needed to allow the global mousetrap functions to work
		* now that mousetrap is a constructor function.
		*/
		Mousetrap.init = function() {
			var documentMousetrap = Mousetrap(document);
			for (var method in documentMousetrap) if (method.charAt(0) !== "_") Mousetrap[method] = function(method) {
				return function() {
					return documentMousetrap[method].apply(documentMousetrap, arguments);
				};
			}(method);
		};
		Mousetrap.init();
		window.Mousetrap = Mousetrap;
		if (typeof module !== "undefined" && module.exports) module.exports = Mousetrap;
		if (typeof define === "function" && define.amd) define(function() {
			return Mousetrap;
		});
	})(typeof window !== "undefined" ? window : null, typeof window !== "undefined" ? document : null);
}));
//#endregion
//#region ../node_modules/.store/mousetrap@1.6.5-wXrhfo95WfPhGlz0ygmxKA/node_modules/mousetrap/plugins/global-bind/mousetrap-global-bind.js
function init_mousetrap_global_bind() {
	return (init_mousetrap_global_bind = __esmMin((() => {
		/**
		* adds a bindGlobal method to Mousetrap that allows you to
		* bind specific keyboard shortcuts that will still work
		* inside a text input field
		*
		* usage:
		* Mousetrap.bindGlobal('ctrl+s', _saveChanges);
		*/
		(function(Mousetrap) {
			if (!Mousetrap) return;
			var _globalCallbacks = {};
			var _originalStopCallback = Mousetrap.prototype.stopCallback;
			Mousetrap.prototype.stopCallback = function(e, element, combo, sequence) {
				var self = this;
				if (self.paused) return true;
				if (_globalCallbacks[combo] || _globalCallbacks[sequence]) return false;
				return _originalStopCallback.call(self, e, element, combo);
			};
			Mousetrap.prototype.bindGlobal = function(keys, callback, action) {
				this.bind(keys, callback, action);
				if (keys instanceof Array) {
					for (var i = 0; i < keys.length; i++) _globalCallbacks[keys[i]] = true;
					return;
				}
				_globalCallbacks[keys] = true;
			};
			Mousetrap.init();
		})(typeof Mousetrap !== "undefined" ? Mousetrap : void 0);
	})))();
}
//#endregion
//#region ../packages/compose/build-module/hooks/use-keyboard-shortcut/index.mjs
function useKeyboardShortcut(shortcuts, callback, { bindGlobal = false, eventName = "keydown", isDisabled = false, target } = {}) {
	const currentCallbackRef = (0, import_react.useRef)(callback);
	(0, import_react.useEffect)(() => {
		currentCallbackRef.current = callback;
	}, [callback]);
	(0, import_react.useEffect)(() => {
		if (isDisabled) return;
		const mousetrap = new import_mousetrap.default(target && target.current ? target.current : document);
		(Array.isArray(shortcuts) ? shortcuts : [shortcuts]).forEach((shortcut) => {
			const keys = shortcut.split("+");
			const modifiers = new Set(keys.filter((value) => value.length > 1));
			const hasAlt = modifiers.has("alt");
			const hasShift = modifiers.has("shift");
			if (isAppleOS() && (modifiers.size === 1 && hasAlt || modifiers.size === 2 && hasAlt && hasShift)) throw new Error(`Cannot bind ${shortcut}. Alt and Shift+Alt modifiers are reserved for character input.`);
			mousetrap[bindGlobal ? "bindGlobal" : "bind"](shortcut, (...args) => currentCallbackRef.current(...args), eventName);
		});
		return () => {
			mousetrap.reset();
		};
	}, [
		shortcuts,
		bindGlobal,
		eventName,
		target,
		isDisabled
	]);
}
var import_mousetrap, use_keyboard_shortcut_default;
function init_use_keyboard_shortcut() {
	return (init_use_keyboard_shortcut = __esmMin((() => {
		import_mousetrap = /* @__PURE__ */ __toESM(require_mousetrap(), 1);
		init_mousetrap_global_bind();
		init_react();
		init_build_module();
		use_keyboard_shortcut_default = useKeyboardShortcut;
	})))();
}
//#endregion
//#region ../packages/components/src/keyboard-shortcuts/index.tsx
function KeyboardShortcut({ target, callback, shortcut, bindGlobal, eventName }) {
	use_keyboard_shortcut_default(shortcut, callback, {
		bindGlobal,
		target,
		eventName
	});
	return null;
}
/**
* `KeyboardShortcuts` is a component which handles keyboard sequences during the lifetime of the rendering element.
*
* When passed children, it will capture key events which occur on or within the children. If no children are passed, events are captured on the document.
*
* It uses the [Mousetrap](https://craig.is/killing/mice) library to implement keyboard sequence bindings.
*
* ```jsx
* import { KeyboardShortcuts } from '@wordpress/components';
* import { useState } from '@wordpress/element';
*
* const MyKeyboardShortcuts = () => {
* 	const [ isAllSelected, setIsAllSelected ] = useState( false );
* 	const selectAll = () => {
* 		setIsAllSelected( true );
* 	};
*
* 	return (
* 		<div>
* 			<KeyboardShortcuts
* 				shortcuts={ {
* 					'mod+a': selectAll,
* 				} }
* 			/>
* 			[cmd/ctrl + A] Combination pressed? { isAllSelected ? 'Yes' : 'No' }
* 		</div>
* 	);
* };
* ```
*/
function KeyboardShortcuts({ children, shortcuts, bindGlobal, eventName }) {
	const target = (0, import_react.useRef)(null);
	const element = Object.entries(shortcuts ?? {}).map(([shortcut, callback]) => /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(KeyboardShortcut, {
		shortcut,
		callback,
		bindGlobal,
		eventName,
		target
	}, shortcut, false, {
		fileName: _jsxFileName$1,
		lineNumber: 61,
		columnNumber: 4
	}, this));
	if (!import_react.Children.count(children)) return /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(import_jsx_dev_runtime$1.Fragment, { children: element }, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 75,
		columnNumber: 10
	}, this);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)("div", {
		ref: target,
		children: [element, children]
	}, void 0, true, {
		fileName: _jsxFileName$1,
		lineNumber: 79,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime$1, _jsxFileName$1;
function init_keyboard_shortcuts() {
	return (init_keyboard_shortcuts = __esmMin((() => {
		init_react();
		init_use_keyboard_shortcut();
		import_jsx_dev_runtime$1 = require_jsx_dev_runtime();
		_jsxFileName$1 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/keyboard-shortcuts/index.tsx";
		try {
			KeyboardShortcuts.__docgenInfo = {
				"description": "`KeyboardShortcuts` is a component which handles keyboard sequences during the lifetime of the rendering element.\n\nWhen passed children, it will capture key events which occur on or within the children. If no children are passed, events are captured on the document.\n\nIt uses the [Mousetrap](https://craig.is/killing/mice) library to implement keyboard sequence bindings.\n\n```jsx\nimport { KeyboardShortcuts } from '@wordpress/components';\nimport { useState } from '@wordpress/element';\n\nconst MyKeyboardShortcuts = () => {\n	const [ isAllSelected, setIsAllSelected ] = useState( false );\n	const selectAll = () => {\n		setIsAllSelected( true );\n	};\n\n	return (\n		<div>\n			<KeyboardShortcuts\n				shortcuts={ {\n					'mod+a': selectAll,\n				} }\n			/>\n			[cmd/ctrl + A] Combination pressed? { isAllSelected ? 'Yes' : 'No' }\n		</div>\n	);\n};\n```",
				"displayName": "KeyboardShortcuts",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/keyboard-shortcuts/index.tsx",
				"methods": [],
				"props": {
					"children": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/keyboard-shortcuts/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Elements to render, upon whom key events are to be monitored.",
						"name": "children",
						"required": false,
						"tags": {},
						"type": { "name": "ReactNode" }
					},
					"shortcuts": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/keyboard-shortcuts/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "An object of shortcut bindings, where each key is a keyboard combination,\nthe value of which is the callback to be invoked when the key combination is pressed.\n\nThe value of each shortcut should be a consistent function reference, not an anonymous function.\nOtherwise, the callback will not be correctly unbound when the component unmounts.\n\nThe `KeyboardShortcuts` component will not update to reflect a changed `shortcuts` prop.\nIf you need to change shortcuts, mount a separate `KeyboardShortcuts` element,\nwhich can be achieved by assigning a unique `key` prop.\n@see {@link https://craig.is/killing/mice Mousetrap documentation}",
						"name": "shortcuts",
						"required": true,
						"tags": {},
						"type": { "name": "Record<string, (event: ExtendedKeyboardEvent, combo: string) => void>" }
					},
					"bindGlobal": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/keyboard-shortcuts/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "By default, a callback will not be invoked if the key combination occurs in an editable field.\nPass `bindGlobal` as `true` if the key events should be observed globally, including within editable fields.\n\nTip: If you need some but not all keyboard events to be observed globally,\nsimply render two distinct `KeyboardShortcuts` elements, one with and one without the `bindGlobal` prop.",
						"name": "bindGlobal",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"eventName": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/keyboard-shortcuts/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "By default, a callback is invoked in response to the `keydown` event.\nTo override this, pass `eventName` with the name of a specific keyboard event.",
						"name": "eventName",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/components/src/keyboard-shortcuts/stories/index.story.tsx
var import_jsx_dev_runtime, _jsxFileName, meta, Template, Default;
function init_index_story() {
	return (init_index_story = __esmMin((() => {
		init_keyboard_shortcuts();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/keyboard-shortcuts/stories/index.story.tsx";
		meta = {
			tags: ["manifest"],
			component: KeyboardShortcuts,
			title: "Components/@wordpress-components/Utilities/KeyboardShortcuts",
			id: "components-keyboardshortcuts",
			parameters: {
				controls: { expanded: true },
				docs: { canvas: { sourceState: "shown" } },
				componentStatus: {
					status: "recommended",
					whereUsed: "global"
				}
			}
		};
		Template = (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(KeyboardShortcuts, { ...props }, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 21,
			columnNumber: 2
		}, void 0);
		Default = Template.bind({});
		Default.args = {
			shortcuts: {
				a: () => window.alert("You hit \"a\"!"),
				b: () => window.alert("You hit \"b\"!")
			},
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Hit the \"a\" or \"b\" key in this textarea:" }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 35,
				columnNumber: 4
			}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("textarea", { "aria-label": "Keyboard shortcuts demo" }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 37,
				columnNumber: 4
			}, void 0)] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 33,
				columnNumber: 3
			}, void 0)
		};
		Default.parameters = { docs: { source: { code: `
<KeyboardShortcuts
  shortcuts={{
    a: () => window.alert('You hit "a"!'),
    b: () => window.alert('You hit "b"!'),
  }}
>
  <div>
    <p>
      Hit the "a" or "b" key in this textarea:
    </p>
    <textarea aria-label="Keyboard shortcuts demo" />
  </div>
</KeyboardShortcuts>
            ` } } };
		Default.parameters = {
			...Default.parameters,
			docs: {
				...Default.parameters?.docs,
				source: {
					originalSource: "props => <KeyboardShortcuts {...props} />",
					...Default.parameters?.docs?.source
				}
			}
		};
	})))();
}
//#endregion
init_index_story();
export { Default, meta as default };
