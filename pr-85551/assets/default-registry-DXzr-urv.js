import { n as __esmMin, o as __toESM, r as __exportAll, t as __commonJSMin } from "./rolldown-runtime-CEgmsyvS.js";
import { d as isPlainObject$1 } from "./dist.es2015-BYklxwDS.js";
import { n as init_build_module$1, t as deprecated } from "./build-module-BWCORUbm.js";
import { n as init_implementation, t as __dangerousOptInToUnstableAPIsOnlyForCoreModules } from "./implementation-CMzZuaZ2.js";
//#region ../packages/compose/build-module/higher-order/pipe.mjs
var basePipe, pipe_default;
function init_pipe() {
	return (init_pipe = __esmMin((() => {
		basePipe = (reverse = false) => (...funcs) => (...args) => {
			const functions = funcs.flat();
			if (reverse) functions.reverse();
			return functions.reduce((prev, func) => [func(...prev)], args)[0];
		};
		pipe_default = basePipe();
	})))();
}
//#endregion
//#region ../packages/compose/build-module/higher-order/compose.mjs
var compose_default;
function init_compose() {
	return (init_compose = __esmMin((() => {
		init_pipe();
		compose_default = basePipe(true);
	})))();
}
//#endregion
//#region ../node_modules/.store/redux@5.0.1-9v7mxaXuTbeaBW_YNRLQKQ/node_modules/redux/dist/redux.mjs
function isPlainObject(obj) {
	if (typeof obj !== "object" || obj === null) return false;
	let proto = obj;
	while (Object.getPrototypeOf(proto) !== null) proto = Object.getPrototypeOf(proto);
	return Object.getPrototypeOf(obj) === proto || Object.getPrototypeOf(obj) === null;
}
function miniKindOf(val) {
	if (val === void 0) return "undefined";
	if (val === null) return "null";
	const type = typeof val;
	switch (type) {
		case "boolean":
		case "string":
		case "number":
		case "symbol":
		case "function": return type;
	}
	if (Array.isArray(val)) return "array";
	if (isDate(val)) return "date";
	if (isError(val)) return "error";
	const constructorName = ctorName(val);
	switch (constructorName) {
		case "Symbol":
		case "Promise":
		case "WeakMap":
		case "WeakSet":
		case "Map":
		case "Set": return constructorName;
	}
	return Object.prototype.toString.call(val).slice(8, -1).toLowerCase().replace(/\s/g, "");
}
function ctorName(val) {
	return typeof val.constructor === "function" ? val.constructor.name : null;
}
function isError(val) {
	return val instanceof Error || typeof val.message === "string" && val.constructor && typeof val.constructor.stackTraceLimit === "number";
}
function isDate(val) {
	if (val instanceof Date) return true;
	return typeof val.toDateString === "function" && typeof val.getDate === "function" && typeof val.setDate === "function";
}
function kindOf(val) {
	let typeOfVal = typeof val;
	typeOfVal = miniKindOf(val);
	return typeOfVal;
}
function createStore(reducer, preloadedState, enhancer) {
	if (typeof reducer !== "function") throw new Error(`Expected the root reducer to be a function. Instead, received: '${kindOf(reducer)}'`);
	if (typeof preloadedState === "function" && typeof enhancer === "function" || typeof enhancer === "function" && typeof arguments[3] === "function") throw new Error("It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function. See https://redux.js.org/tutorials/fundamentals/part-4-store#creating-a-store-with-enhancers for an example.");
	if (typeof preloadedState === "function" && typeof enhancer === "undefined") {
		enhancer = preloadedState;
		preloadedState = void 0;
	}
	if (typeof enhancer !== "undefined") {
		if (typeof enhancer !== "function") throw new Error(`Expected the enhancer to be a function. Instead, received: '${kindOf(enhancer)}'`);
		return enhancer(createStore)(reducer, preloadedState);
	}
	let currentReducer = reducer;
	let currentState = preloadedState;
	let currentListeners = /* @__PURE__ */ new Map();
	let nextListeners = currentListeners;
	let listenerIdCounter = 0;
	let isDispatching = false;
	function ensureCanMutateNextListeners() {
		if (nextListeners === currentListeners) {
			nextListeners = /* @__PURE__ */ new Map();
			currentListeners.forEach((listener, key) => {
				nextListeners.set(key, listener);
			});
		}
	}
	function getState() {
		if (isDispatching) throw new Error("You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");
		return currentState;
	}
	function subscribe(listener) {
		if (typeof listener !== "function") throw new Error(`Expected the listener to be a function. Instead, received: '${kindOf(listener)}'`);
		if (isDispatching) throw new Error("You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api/store#subscribelistener for more details.");
		let isSubscribed = true;
		ensureCanMutateNextListeners();
		const listenerId = listenerIdCounter++;
		nextListeners.set(listenerId, listener);
		return function unsubscribe() {
			if (!isSubscribed) return;
			if (isDispatching) throw new Error("You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api/store#subscribelistener for more details.");
			isSubscribed = false;
			ensureCanMutateNextListeners();
			nextListeners.delete(listenerId);
			currentListeners = null;
		};
	}
	function dispatch(action) {
		if (!isPlainObject(action)) throw new Error(`Actions must be plain objects. Instead, the actual type was: '${kindOf(action)}'. You may need to add middleware to your store setup to handle dispatching other values, such as 'redux-thunk' to handle dispatching functions. See https://redux.js.org/tutorials/fundamentals/part-4-store#middleware and https://redux.js.org/tutorials/fundamentals/part-6-async-logic#using-the-redux-thunk-middleware for examples.`);
		if (typeof action.type === "undefined") throw new Error("Actions may not have an undefined \"type\" property. You may have misspelled an action type string constant.");
		if (typeof action.type !== "string") throw new Error(`Action "type" property must be a string. Instead, the actual type was: '${kindOf(action.type)}'. Value was: '${action.type}' (stringified)`);
		if (isDispatching) throw new Error("Reducers may not dispatch actions.");
		try {
			isDispatching = true;
			currentState = currentReducer(currentState, action);
		} finally {
			isDispatching = false;
		}
		(currentListeners = nextListeners).forEach((listener) => {
			listener();
		});
		return action;
	}
	function replaceReducer(nextReducer) {
		if (typeof nextReducer !== "function") throw new Error(`Expected the nextReducer to be a function. Instead, received: '${kindOf(nextReducer)}`);
		currentReducer = nextReducer;
		dispatch({ type: actionTypes_default.REPLACE });
	}
	function observable() {
		const outerSubscribe = subscribe;
		return {
			/**
			* The minimal observable subscription method.
			* @param observer Any object that can be used as an observer.
			* The observer object should have a `next` method.
			* @returns An object with an `unsubscribe` method that can
			* be used to unsubscribe the observable from the store, and prevent further
			* emission of values from the observable.
			*/
			subscribe(observer) {
				if (typeof observer !== "object" || observer === null) throw new Error(`Expected the observer to be an object. Instead, received: '${kindOf(observer)}'`);
				function observeState() {
					const observerAsObserver = observer;
					if (observerAsObserver.next) observerAsObserver.next(getState());
				}
				observeState();
				return { unsubscribe: outerSubscribe(observeState) };
			},
			[symbol_observable_default]() {
				return this;
			}
		};
	}
	dispatch({ type: actionTypes_default.INIT });
	return {
		dispatch,
		subscribe,
		getState,
		replaceReducer,
		[symbol_observable_default]: observable
	};
}
function compose(...funcs) {
	if (funcs.length === 0) return (arg) => arg;
	if (funcs.length === 1) return funcs[0];
	return funcs.reduce((a, b) => (...args) => a(b(...args)));
}
function applyMiddleware(...middlewares) {
	return (createStore2) => (reducer, preloadedState) => {
		const store = createStore2(reducer, preloadedState);
		let dispatch = () => {
			throw new Error("Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.");
		};
		const middlewareAPI = {
			getState: store.getState,
			dispatch: (action, ...args) => dispatch(action, ...args)
		};
		dispatch = compose(...middlewares.map((middleware) => middleware(middlewareAPI)))(store.dispatch);
		return {
			...store,
			dispatch
		};
	};
}
var symbol_observable_default, randomString, actionTypes_default;
function init_redux() {
	return (init_redux = __esmMin((() => {
		symbol_observable_default = /* @__PURE__ */ (() => typeof Symbol === "function" && Symbol.observable || "@@observable")();
		randomString = () => Math.random().toString(36).substring(7).split("").join(".");
		actionTypes_default = {
			INIT: `@@redux/INIT${/* @__PURE__ */ randomString()}`,
			REPLACE: `@@redux/REPLACE${/* @__PURE__ */ randomString()}`,
			PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${randomString()}`
		};
	})))();
}
//#endregion
//#region ../node_modules/.store/equivalent-key-map@0.2.2-x2CcnsHOWgXkLrIdkTeNmg/node_modules/equivalent-key-map/equivalent-key-map.js
var require_equivalent_key_map = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	function _typeof(obj) {
		if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof = function(obj) {
			return typeof obj;
		};
		else _typeof = function(obj) {
			return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
		};
		return _typeof(obj);
	}
	function _classCallCheck(instance, Constructor) {
		if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
	}
	function _defineProperties(target, props) {
		for (var i = 0; i < props.length; i++) {
			var descriptor = props[i];
			descriptor.enumerable = descriptor.enumerable || false;
			descriptor.configurable = true;
			if ("value" in descriptor) descriptor.writable = true;
			Object.defineProperty(target, descriptor.key, descriptor);
		}
	}
	function _createClass(Constructor, protoProps, staticProps) {
		if (protoProps) _defineProperties(Constructor.prototype, protoProps);
		if (staticProps) _defineProperties(Constructor, staticProps);
		return Constructor;
	}
	/**
	* Given an instance of EquivalentKeyMap, returns its internal value pair tuple
	* for a key, if one exists. The tuple members consist of the last reference
	* value for the key (used in efficient subsequent lookups) and the value
	* assigned for the key at the leaf node.
	*
	* @param {EquivalentKeyMap} instance EquivalentKeyMap instance.
	* @param {*} key                     The key for which to return value pair.
	*
	* @return {?Array} Value pair, if exists.
	*/
	function getValuePair(instance, key) {
		var _map = instance._map, _arrayTreeMap = instance._arrayTreeMap, _objectTreeMap = instance._objectTreeMap;
		if (_map.has(key)) return _map.get(key);
		var properties = Object.keys(key).sort();
		var map = Array.isArray(key) ? _arrayTreeMap : _objectTreeMap;
		for (var i = 0; i < properties.length; i++) {
			var property = properties[i];
			map = map.get(property);
			if (map === void 0) return;
			var propertyValue = key[property];
			map = map.get(propertyValue);
			if (map === void 0) return;
		}
		var valuePair = map.get("_ekm_value");
		if (!valuePair) return;
		_map.delete(valuePair[0]);
		valuePair[0] = key;
		map.set("_ekm_value", valuePair);
		_map.set(key, valuePair);
		return valuePair;
	}
	module.exports = /* @__PURE__ */ function() {
		/**
		* Constructs a new instance of EquivalentKeyMap.
		*
		* @param {Iterable.<*>} iterable Initial pair of key, value for map.
		*/
		function EquivalentKeyMap(iterable) {
			_classCallCheck(this, EquivalentKeyMap);
			this.clear();
			if (iterable instanceof EquivalentKeyMap) {
				var iterablePairs = [];
				iterable.forEach(function(value, key) {
					iterablePairs.push([key, value]);
				});
				iterable = iterablePairs;
			}
			if (iterable != null) for (var i = 0; i < iterable.length; i++) this.set(iterable[i][0], iterable[i][1]);
		}
		/**
		* Accessor property returning the number of elements.
		*
		* @return {number} Number of elements.
		*/
		_createClass(EquivalentKeyMap, [
			{
				key: "set",
				/**
				* Add or update an element with a specified key and value.
				*
				* @param {*} key   The key of the element to add.
				* @param {*} value The value of the element to add.
				*
				* @return {EquivalentKeyMap} Map instance.
				*/
				value: function set(key, value) {
					if (key === null || _typeof(key) !== "object") {
						this._map.set(key, value);
						return this;
					}
					var properties = Object.keys(key).sort();
					var valuePair = [key, value];
					var map = Array.isArray(key) ? this._arrayTreeMap : this._objectTreeMap;
					for (var i = 0; i < properties.length; i++) {
						var property = properties[i];
						if (!map.has(property)) map.set(property, new EquivalentKeyMap());
						map = map.get(property);
						var propertyValue = key[property];
						if (!map.has(propertyValue)) map.set(propertyValue, new EquivalentKeyMap());
						map = map.get(propertyValue);
					}
					var previousValuePair = map.get("_ekm_value");
					if (previousValuePair) this._map.delete(previousValuePair[0]);
					map.set("_ekm_value", valuePair);
					this._map.set(key, valuePair);
					return this;
				}
			},
			{
				key: "get",
				value: function get(key) {
					if (key === null || _typeof(key) !== "object") return this._map.get(key);
					var valuePair = getValuePair(this, key);
					if (valuePair) return valuePair[1];
				}
			},
			{
				key: "has",
				value: function has(key) {
					if (key === null || _typeof(key) !== "object") return this._map.has(key);
					return getValuePair(this, key) !== void 0;
				}
			},
			{
				key: "delete",
				value: function _delete(key) {
					if (!this.has(key)) return false;
					this.set(key, void 0);
					return true;
				}
			},
			{
				key: "forEach",
				value: function forEach(callback) {
					var _this = this;
					var thisArg = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this;
					this._map.forEach(function(value, key) {
						if (key !== null && _typeof(key) === "object") value = value[1];
						callback.call(thisArg, value, key, _this);
					});
				}
			},
			{
				key: "clear",
				value: function clear() {
					this._map = /* @__PURE__ */ new Map();
					this._arrayTreeMap = /* @__PURE__ */ new Map();
					this._objectTreeMap = /* @__PURE__ */ new Map();
				}
			},
			{
				key: "size",
				get: function get() {
					return this._map.size;
				}
			}
		]);
		return EquivalentKeyMap;
	}();
}));
//#endregion
//#region ../packages/redux-routine/build-module/is-generator.mjs
function isGenerator(object) {
	return !!object && typeof object[Symbol.iterator] === "function" && typeof object.next === "function";
}
//#endregion
//#region ../node_modules/.store/rungen@0.3.2-irGTJMureUdsoeYLMH3Yuw/node_modules/rungen/dist/utils/keys.js
var require_keys = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = {
		all: Symbol("all"),
		error: Symbol("error"),
		fork: Symbol("fork"),
		join: Symbol("join"),
		race: Symbol("race"),
		call: Symbol("call"),
		cps: Symbol("cps"),
		subscribe: Symbol("subscribe")
	};
}));
//#endregion
//#region ../node_modules/.store/rungen@0.3.2-irGTJMureUdsoeYLMH3Yuw/node_modules/rungen/dist/utils/helpers.js
var require_helpers = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.createChannel = exports.subscribe = exports.cps = exports.apply = exports.call = exports.invoke = exports.delay = exports.race = exports.join = exports.fork = exports.error = exports.all = void 0;
	var _keys2 = _interopRequireDefault(require_keys());
	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : { default: obj };
	}
	exports.all = function all(value) {
		return {
			type: _keys2.default.all,
			value
		};
	};
	exports.error = function error(err) {
		return {
			type: _keys2.default.error,
			error: err
		};
	};
	exports.fork = function fork(iterator) {
		for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) args[_key - 1] = arguments[_key];
		return {
			type: _keys2.default.fork,
			iterator,
			args
		};
	};
	exports.join = function join(task) {
		return {
			type: _keys2.default.join,
			task
		};
	};
	exports.race = function race(competitors) {
		return {
			type: _keys2.default.race,
			competitors
		};
	};
	exports.delay = function delay(timeout) {
		return new Promise(function(resolve) {
			setTimeout(function() {
				return resolve(true);
			}, timeout);
		});
	};
	exports.invoke = function invoke(func) {
		for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) args[_key2 - 1] = arguments[_key2];
		return {
			type: _keys2.default.call,
			func,
			context: null,
			args
		};
	};
	exports.call = function call(func, context) {
		for (var _len3 = arguments.length, args = Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) args[_key3 - 2] = arguments[_key3];
		return {
			type: _keys2.default.call,
			func,
			context,
			args
		};
	};
	exports.apply = function apply(func, context, args) {
		return {
			type: _keys2.default.call,
			func,
			context,
			args
		};
	};
	exports.cps = function cps(func) {
		for (var _len4 = arguments.length, args = Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) args[_key4 - 1] = arguments[_key4];
		return {
			type: _keys2.default.cps,
			func,
			args
		};
	};
	exports.subscribe = function subscribe(channel) {
		return {
			type: _keys2.default.subscribe,
			channel
		};
	};
	exports.createChannel = function createChannel(callback) {
		var listeners = [];
		var subscribe = function subscribe(l) {
			listeners.push(l);
			return function() {
				return listeners.splice(listeners.indexOf(l), 1);
			};
		};
		callback(function next(val) {
			return listeners.forEach(function(l) {
				return l(val);
			});
		});
		return { subscribe };
	};
}));
//#endregion
//#region ../node_modules/.store/rungen@0.3.2-irGTJMureUdsoeYLMH3Yuw/node_modules/rungen/dist/utils/is.js
var require_is = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
		return typeof obj;
	} : function(obj) {
		return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
	};
	var _keys2 = _interopRequireDefault(require_keys());
	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : { default: obj };
	}
	var is = {
		obj: function obj(value) {
			return (typeof value === "undefined" ? "undefined" : _typeof(value)) === "object" && !!value;
		},
		all: function all(value) {
			return is.obj(value) && value.type === _keys2.default.all;
		},
		error: function error(value) {
			return is.obj(value) && value.type === _keys2.default.error;
		},
		array: Array.isArray,
		func: function func(value) {
			return typeof value === "function";
		},
		promise: function promise(value) {
			return value && is.func(value.then);
		},
		iterator: function iterator(value) {
			return value && is.func(value.next) && is.func(value.throw);
		},
		fork: function fork(value) {
			return is.obj(value) && value.type === _keys2.default.fork;
		},
		join: function join(value) {
			return is.obj(value) && value.type === _keys2.default.join;
		},
		race: function race(value) {
			return is.obj(value) && value.type === _keys2.default.race;
		},
		call: function call(value) {
			return is.obj(value) && value.type === _keys2.default.call;
		},
		cps: function cps(value) {
			return is.obj(value) && value.type === _keys2.default.cps;
		},
		subscribe: function subscribe(value) {
			return is.obj(value) && value.type === _keys2.default.subscribe;
		},
		channel: function channel(value) {
			return is.obj(value) && is.func(value.subscribe);
		}
	};
	exports.default = is;
}));
//#endregion
//#region ../node_modules/.store/rungen@0.3.2-irGTJMureUdsoeYLMH3Yuw/node_modules/rungen/dist/controls/builtin.js
var require_builtin = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.iterator = exports.array = exports.object = exports.error = exports.any = void 0;
	var _is2 = _interopRequireDefault(require_is());
	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : { default: obj };
	}
	var any = exports.any = function any(value, next, rungen, yieldNext) {
		yieldNext(value);
		return true;
	};
	var error = exports.error = function error(value, next, rungen, yieldNext, raiseNext) {
		if (!_is2.default.error(value)) return false;
		raiseNext(value.error);
		return true;
	};
	var object = exports.object = function object(value, next, rungen, yieldNext, raiseNext) {
		if (!_is2.default.all(value) || !_is2.default.obj(value.value)) return false;
		var result = {};
		var keys = Object.keys(value.value);
		var count = 0;
		var hasError = false;
		var gotResultSuccess = function gotResultSuccess(key, ret) {
			if (hasError) return;
			result[key] = ret;
			count++;
			if (count === keys.length) yieldNext(result);
		};
		var gotResultError = function gotResultError(key, error) {
			if (hasError) return;
			hasError = true;
			raiseNext(error);
		};
		keys.map(function(key) {
			rungen(value.value[key], function(ret) {
				return gotResultSuccess(key, ret);
			}, function(err) {
				return gotResultError(key, err);
			});
		});
		return true;
	};
	var array = exports.array = function array(value, next, rungen, yieldNext, raiseNext) {
		if (!_is2.default.all(value) || !_is2.default.array(value.value)) return false;
		var result = [];
		var count = 0;
		var hasError = false;
		var gotResultSuccess = function gotResultSuccess(key, ret) {
			if (hasError) return;
			result[key] = ret;
			count++;
			if (count === value.value.length) yieldNext(result);
		};
		var gotResultError = function gotResultError(key, error) {
			if (hasError) return;
			hasError = true;
			raiseNext(error);
		};
		value.value.map(function(v, key) {
			rungen(v, function(ret) {
				return gotResultSuccess(key, ret);
			}, function(err) {
				return gotResultError(key, err);
			});
		});
		return true;
	};
	exports.default = [
		error,
		exports.iterator = function iterator(value, next, rungen, yieldNext, raiseNext) {
			if (!_is2.default.iterator(value)) return false;
			rungen(value, next, raiseNext);
			return true;
		},
		array,
		object,
		any
	];
}));
//#endregion
//#region ../node_modules/.store/rungen@0.3.2-irGTJMureUdsoeYLMH3Yuw/node_modules/rungen/dist/create.js
var require_create = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	var _builtin2 = _interopRequireDefault(require_builtin());
	var _is2 = _interopRequireDefault(require_is());
	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : { default: obj };
	}
	function _toConsumableArray(arr) {
		if (Array.isArray(arr)) {
			for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];
			return arr2;
		} else return Array.from(arr);
	}
	exports.default = function create() {
		var userControls = arguments.length <= 0 || arguments[0] === void 0 ? [] : arguments[0];
		var controls = [].concat(_toConsumableArray(userControls), _toConsumableArray(_builtin2.default));
		return function runtime(input) {
			var success = arguments.length <= 1 || arguments[1] === void 0 ? function() {} : arguments[1];
			var error = arguments.length <= 2 || arguments[2] === void 0 ? function() {} : arguments[2];
			(function iterate(gen) {
				var yieldValue = function yieldValue(isError) {
					return function(ret) {
						try {
							var _ref = isError ? gen.throw(ret) : gen.next(ret);
							var value = _ref.value;
							if (_ref.done) return success(value);
							next(value);
						} catch (e) {
							return error(e);
						}
					};
				};
				var next = function next(ret) {
					controls.some(function(control) {
						return control(ret, next, runtime, yieldValue(false), yieldValue(true));
					});
				};
				yieldValue(false)();
			})(_is2.default.iterator(input) ? input : regeneratorRuntime.mark(function _callee() {
				return regeneratorRuntime.wrap(function _callee$(_context) {
					while (1) switch (_context.prev = _context.next) {
						case 0:
							_context.next = 2;
							return input;
						case 2: return _context.abrupt("return", _context.sent);
						case 3:
						case "end": return _context.stop();
					}
				}, _callee, this);
			})(), success, error);
		};
	};
}));
//#endregion
//#region ../node_modules/.store/rungen@0.3.2-irGTJMureUdsoeYLMH3Yuw/node_modules/rungen/dist/utils/dispatcher.js
var require_dispatcher = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = function createDispatcher() {
		var listeners = [];
		return {
			subscribe: function subscribe(listener) {
				listeners.push(listener);
				return function() {
					listeners = listeners.filter(function(l) {
						return l !== listener;
					});
				};
			},
			dispatch: function dispatch(action) {
				listeners.slice().forEach(function(listener) {
					return listener(action);
				});
			}
		};
	};
}));
//#endregion
//#region ../node_modules/.store/rungen@0.3.2-irGTJMureUdsoeYLMH3Yuw/node_modules/rungen/dist/controls/async.js
var require_async = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.race = exports.join = exports.fork = exports.promise = void 0;
	var _is2 = _interopRequireDefault(require_is());
	var _helpers = require_helpers();
	var _dispatcher2 = _interopRequireDefault(require_dispatcher());
	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : { default: obj };
	}
	var promise = exports.promise = function promise(value, next, rungen, yieldNext, raiseNext) {
		if (!_is2.default.promise(value)) return false;
		value.then(next, raiseNext);
		return true;
	};
	var forkedTasks = /* @__PURE__ */ new Map();
	exports.default = [
		promise,
		exports.fork = function fork(value, next, rungen) {
			if (!_is2.default.fork(value)) return false;
			var task = Symbol("fork");
			var dispatcher = (0, _dispatcher2.default)();
			forkedTasks.set(task, dispatcher);
			rungen(value.iterator.apply(null, value.args), function(result) {
				return dispatcher.dispatch(result);
			}, function(err) {
				return dispatcher.dispatch((0, _helpers.error)(err));
			});
			var unsubscribe = dispatcher.subscribe(function() {
				unsubscribe();
				forkedTasks.delete(task);
			});
			next(task);
			return true;
		},
		exports.join = function join(value, next, rungen, yieldNext, raiseNext) {
			if (!_is2.default.join(value)) return false;
			var dispatcher = forkedTasks.get(value.task);
			if (!dispatcher) raiseNext("join error : task not found");
			else (function() {
				var unsubscribe = dispatcher.subscribe(function(result) {
					unsubscribe();
					next(result);
				});
			})();
			return true;
		},
		exports.race = function race(value, next, rungen, yieldNext, raiseNext) {
			if (!_is2.default.race(value)) return false;
			var finished = false;
			var success = function success(result, k, v) {
				if (finished) return;
				finished = true;
				result[k] = v;
				next(result);
			};
			var fail = function fail(err) {
				if (finished) return;
				raiseNext(err);
			};
			if (_is2.default.array(value.competitors)) (function() {
				var result = value.competitors.map(function() {
					return false;
				});
				value.competitors.forEach(function(competitor, index) {
					rungen(competitor, function(output) {
						return success(result, index, output);
					}, fail);
				});
			})();
			else (function() {
				var result = Object.keys(value.competitors).reduce(function(p, c) {
					p[c] = false;
					return p;
				}, {});
				Object.keys(value.competitors).forEach(function(index) {
					rungen(value.competitors[index], function(output) {
						return success(result, index, output);
					}, fail);
				});
			})();
			return true;
		},
		function subscribe(value, next) {
			if (!_is2.default.subscribe(value)) return false;
			if (!_is2.default.channel(value.channel)) throw new Error("the first argument of \"subscribe\" must be a valid channel");
			var unsubscribe = value.channel.subscribe(function(ret) {
				unsubscribe && unsubscribe();
				next(ret);
			});
			return true;
		}
	];
}));
//#endregion
//#region ../node_modules/.store/rungen@0.3.2-irGTJMureUdsoeYLMH3Yuw/node_modules/rungen/dist/controls/wrap.js
var require_wrap = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.cps = exports.call = void 0;
	var _is2 = _interopRequireDefault(require_is());
	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : { default: obj };
	}
	function _toConsumableArray(arr) {
		if (Array.isArray(arr)) {
			for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];
			return arr2;
		} else return Array.from(arr);
	}
	exports.default = [exports.call = function call(value, next, rungen, yieldNext, raiseNext) {
		if (!_is2.default.call(value)) return false;
		try {
			next(value.func.apply(value.context, value.args));
		} catch (err) {
			raiseNext(err);
		}
		return true;
	}, exports.cps = function cps(value, next, rungen, yieldNext, raiseNext) {
		var _value$func;
		if (!_is2.default.cps(value)) return false;
		(_value$func = value.func).call.apply(_value$func, [null].concat(_toConsumableArray(value.args), [function(err, result) {
			if (err) raiseNext(err);
			else next(result);
		}]));
		return true;
	}];
}));
//#endregion
//#region ../node_modules/.store/rungen@0.3.2-irGTJMureUdsoeYLMH3Yuw/node_modules/rungen/dist/index.js
var require_dist = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.wrapControls = exports.asyncControls = exports.create = void 0;
	var _helpers = require_helpers();
	Object.keys(_helpers).forEach(function(key) {
		if (key === "default") return;
		Object.defineProperty(exports, key, {
			enumerable: true,
			get: function get() {
				return _helpers[key];
			}
		});
	});
	var _create2 = _interopRequireDefault(require_create());
	var _async2 = _interopRequireDefault(require_async());
	var _wrap2 = _interopRequireDefault(require_wrap());
	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : { default: obj };
	}
	exports.create = _create2.default;
	exports.asyncControls = _async2.default;
	exports.wrapControls = _wrap2.default;
}));
//#endregion
//#region ../node_modules/.store/is-promise@4.0.0-DcZ_LsgUAVaKHNNDXMEENg/node_modules/is-promise/index.mjs
function isPromise(obj) {
	return !!obj && (typeof obj === "object" || typeof obj === "function") && typeof obj.then === "function";
}
//#endregion
//#region ../packages/redux-routine/build-module/is-action.mjs
function isAction(object) {
	return isPlainObject$1(object) && typeof object.type === "string";
}
function isActionOfType(object, expectedType) {
	return isAction(object) && object.type === expectedType;
}
function init_is_action() {
	return (init_is_action = __esmMin((() => {})))();
}
//#endregion
//#region ../packages/redux-routine/build-module/runtime.mjs
function createRuntime(controls = {}, dispatch) {
	const rungenControls = Object.entries(controls).map(([actionType, control]) => (value, next, iterate, yieldNext, yieldError) => {
		if (!isActionOfType(value, actionType)) return false;
		const routine = control(value);
		if (isPromise(routine)) routine.then(yieldNext, yieldError);
		else yieldNext(routine);
		return true;
	});
	const unhandledActionControl = (value, next) => {
		if (!isAction(value)) return false;
		dispatch(value);
		next();
		return true;
	};
	rungenControls.push(unhandledActionControl);
	const rungenRuntime = (0, import_dist.create)(rungenControls);
	return (action) => new Promise((resolve, reject) => rungenRuntime(action, (result) => {
		if (isAction(result)) dispatch(result);
		resolve(result);
	}, reject));
}
var import_dist;
function init_runtime() {
	return (init_runtime = __esmMin((() => {
		import_dist = require_dist();
		init_is_action();
	})))();
}
//#endregion
//#region ../packages/redux-routine/build-module/index.mjs
function createMiddleware(controls = {}) {
	return (store) => {
		const runtime = createRuntime(controls, store.dispatch);
		return (next) => (action) => {
			if (!isGenerator(action)) return next(action);
			return runtime(action);
		};
	};
}
function init_build_module() {
	return (init_build_module = __esmMin((() => {
		init_runtime();
	})))();
}
//#endregion
//#region ../packages/data/build-module/redux-store/combine-reducers.mjs
function combineReducers(reducers) {
	const keys = Object.keys(reducers);
	return function combinedReducer(state = {}, action) {
		const nextState = {};
		let hasChanged = false;
		for (const key of keys) {
			const reducer = reducers[key];
			const prevStateForKey = state[key];
			const nextStateForKey = reducer(prevStateForKey, action);
			nextState[key] = nextStateForKey;
			hasChanged = hasChanged || nextStateForKey !== prevStateForKey;
		}
		return hasChanged ? nextState : state;
	};
}
function init_combine_reducers() {
	return (init_combine_reducers = __esmMin((() => {})))();
}
//#endregion
//#region ../packages/data/build-module/factory.mjs
function createRegistrySelector(registrySelector) {
	const selectorsByRegistry = /* @__PURE__ */ new WeakMap();
	const wrappedSelector = (...args) => {
		let selector = selectorsByRegistry.get(wrappedSelector.registry);
		if (!selector) {
			selector = registrySelector(wrappedSelector.registry.select);
			selectorsByRegistry.set(wrappedSelector.registry, selector);
		}
		return selector(...args);
	};
	wrappedSelector.isRegistrySelector = true;
	return wrappedSelector;
}
function createRegistryControl(registryControl) {
	registryControl.isRegistryControl = true;
	return registryControl;
}
function init_factory() {
	return (init_factory = __esmMin((() => {})))();
}
//#endregion
//#region ../packages/data/build-module/controls.mjs
var SELECT, RESOLVE_SELECT, DISPATCH, builtinControls;
function init_controls() {
	return (init_controls = __esmMin((() => {
		SELECT = "@@data/SELECT";
		RESOLVE_SELECT = "@@data/RESOLVE_SELECT";
		DISPATCH = "@@data/DISPATCH";
		builtinControls = {
			[SELECT]: createRegistryControl((registry) => ({ storeKey, selectorName, args }) => registry.select(storeKey)[selectorName](...args)),
			[RESOLVE_SELECT]: createRegistryControl((registry) => ({ storeKey, selectorName, args }) => {
				return registry[registry.select(storeKey)[selectorName].hasResolver ? "resolveSelect" : "select"](storeKey)[selectorName](...args);
			}),
			[DISPATCH]: createRegistryControl((registry) => ({ storeKey, actionName, args }) => registry.dispatch(storeKey)[actionName](...args))
		};
	})))();
}
//#endregion
//#region ../packages/data/build-module/lock-unlock.mjs
var lock, unlock;
function init_lock_unlock() {
	return (init_lock_unlock = __esmMin((() => {
		init_implementation();
		({lock, unlock} = __dangerousOptInToUnstableAPIsOnlyForCoreModules("I acknowledge private features are not for use in themes or plugins and doing so will break in the next version of WordPress.", "@wordpress/data"));
	})))();
}
//#endregion
//#region ../packages/data/build-module/promise-middleware.mjs
var promiseMiddleware, promise_middleware_default;
function init_promise_middleware() {
	return (init_promise_middleware = __esmMin((() => {
		promiseMiddleware = () => (next) => (action) => {
			if (isPromise(action)) return action.then((resolvedAction) => {
				if (resolvedAction) return next(resolvedAction);
			});
			return next(action);
		};
		promise_middleware_default = promiseMiddleware;
	})))();
}
//#endregion
//#region ../packages/data/build-module/resolvers-cache-middleware.mjs
var createResolversCacheMiddleware, resolvers_cache_middleware_default;
function init_resolvers_cache_middleware() {
	return (init_resolvers_cache_middleware = __esmMin((() => {
		createResolversCacheMiddleware = (registry, storeName) => () => (next) => (action) => {
			const resolvers = registry.select(storeName).getCachedResolvers();
			Object.entries(resolvers).forEach(([selectorName, resolversByArgs]) => {
				const resolver = registry.stores[storeName]?.resolvers?.[selectorName];
				if (!resolver || !resolver.shouldInvalidate) return;
				const { shouldInvalidate } = resolver;
				resolversByArgs.forEach((value, args) => {
					if (value === void 0) return;
					if (value.status !== "finished" && value.status !== "error") return;
					if (!shouldInvalidate(action, ...args)) return;
					registry.dispatch(storeName).invalidateResolution(selectorName, args);
				});
			});
			return next(action);
		};
		resolvers_cache_middleware_default = createResolversCacheMiddleware;
	})))();
}
//#endregion
//#region ../packages/data/build-module/redux-store/thunk-middleware.mjs
function createThunkMiddleware(args) {
	return () => (next) => (action) => {
		if (typeof action === "function") return action(args);
		return next(action);
	};
}
//#endregion
//#region ../packages/data/build-module/redux-store/keyed-reducer.mjs
var keyedReducer;
function init_keyed_reducer() {
	return (init_keyed_reducer = __esmMin((() => {
		keyedReducer = (actionProperty) => (reducer) => (state = {}, action) => {
			const key = action[actionProperty];
			if (key === void 0) return state;
			const nextKeyState = reducer(state[key], action);
			if (nextKeyState === state[key]) return state;
			return {
				...state,
				[key]: nextKeyState
			};
		};
	})))();
}
//#endregion
//#region ../packages/data/build-module/redux-store/metadata/utils.mjs
function selectorArgsToStateKey(args) {
	if (args === void 0 || args === null) return [];
	const len = args.length;
	let idx = len;
	while (idx > 0 && args[idx - 1] === void 0) idx--;
	return idx === len ? args : args.slice(0, idx);
}
//#endregion
//#region ../packages/data/build-module/redux-store/metadata/reducer.mjs
var import_equivalent_key_map$1, subKeysIsResolved, isResolved, reducer_default;
function init_reducer() {
	return (init_reducer = __esmMin((() => {
		import_equivalent_key_map$1 = /* @__PURE__ */ __toESM(require_equivalent_key_map(), 1);
		init_keyed_reducer();
		subKeysIsResolved = keyedReducer("selectorName")((state = new import_equivalent_key_map$1.default(), action) => {
			switch (action.type) {
				case "START_RESOLUTION": {
					const nextState = new import_equivalent_key_map$1.default(state);
					nextState.set(selectorArgsToStateKey(action.args), { status: "resolving" });
					return nextState;
				}
				case "FINISH_RESOLUTION": {
					const nextState = new import_equivalent_key_map$1.default(state);
					nextState.set(selectorArgsToStateKey(action.args), { status: "finished" });
					return nextState;
				}
				case "FAIL_RESOLUTION": {
					const nextState = new import_equivalent_key_map$1.default(state);
					nextState.set(selectorArgsToStateKey(action.args), {
						status: "error",
						error: action.error
					});
					return nextState;
				}
				case "START_RESOLUTIONS": {
					const nextState = new import_equivalent_key_map$1.default(state);
					for (const resolutionArgs of action.args) nextState.set(selectorArgsToStateKey(resolutionArgs), { status: "resolving" });
					return nextState;
				}
				case "FINISH_RESOLUTIONS": {
					const nextState = new import_equivalent_key_map$1.default(state);
					for (const resolutionArgs of action.args) nextState.set(selectorArgsToStateKey(resolutionArgs), { status: "finished" });
					return nextState;
				}
				case "FAIL_RESOLUTIONS": {
					const nextState = new import_equivalent_key_map$1.default(state);
					action.args.forEach((resolutionArgs, idx) => {
						const resolutionState = {
							status: "error",
							error: void 0
						};
						const error = action.errors[idx];
						if (error) resolutionState.error = error;
						nextState.set(selectorArgsToStateKey(resolutionArgs), resolutionState);
					});
					return nextState;
				}
				case "INVALIDATE_RESOLUTION": {
					const nextState = new import_equivalent_key_map$1.default(state);
					nextState.delete(selectorArgsToStateKey(action.args));
					return nextState;
				}
			}
			return state;
		});
		isResolved = (state = {}, action) => {
			switch (action.type) {
				case "INVALIDATE_RESOLUTION_FOR_STORE": return {};
				case "INVALIDATE_RESOLUTION_FOR_STORE_SELECTOR":
					if (action.selectorName in state) {
						const { [action.selectorName]: removedSelector, ...restState } = state;
						return restState;
					}
					return state;
				case "START_RESOLUTION":
				case "FINISH_RESOLUTION":
				case "FAIL_RESOLUTION":
				case "START_RESOLUTIONS":
				case "FINISH_RESOLUTIONS":
				case "FAIL_RESOLUTIONS":
				case "INVALIDATE_RESOLUTION": return subKeysIsResolved(state, action);
				default: return state;
			}
		};
		reducer_default = isResolved;
	})))();
}
//#endregion
//#region ../node_modules/.store/rememo@4.0.2-QNErfujZCHSdPMooBQvQCw/node_modules/rememo/rememo.js
/**
* Returns the first argument as the sole entry in an array.
*
* @template T
*
* @param {T} value Value to return.
*
* @return {[T]} Value returned as entry in array.
*/
function arrayOf(value) {
	return [value];
}
/**
* Returns true if the value passed is object-like, or false otherwise. A value
* is object-like if it can support property assignment, e.g. object or array.
*
* @param {*} value Value to test.
*
* @return {boolean} Whether value is object-like.
*/
function isObjectLike(value) {
	return !!value && "object" === typeof value;
}
/**
* Creates and returns a new cache object.
*
* @return {Cache} Cache object.
*/
function createCache() {
	/** @type {Cache} */
	var cache = { clear: function() {
		cache.head = null;
	} };
	return cache;
}
/**
* Returns true if entries within the two arrays are strictly equal by
* reference from a starting index.
*
* @param {*[]} a First array.
* @param {*[]} b Second array.
* @param {number} fromIndex Index from which to start comparison.
*
* @return {boolean} Whether arrays are shallowly equal.
*/
function isShallowEqual(a, b, fromIndex) {
	var i;
	if (a.length !== b.length) return false;
	for (i = fromIndex; i < a.length; i++) if (a[i] !== b[i]) return false;
	return true;
}
/**
* Returns a memoized selector function. The getDependants function argument is
* called before the memoized selector and is expected to return an immutable
* reference or array of references on which the selector depends for computing
* its own return value. The memoize cache is preserved only as long as those
* dependant references remain the same. If getDependants returns a different
* reference(s), the cache is cleared and the selector value regenerated.
*
* @template {(...args: *[]) => *} S
*
* @param {S} selector Selector function.
* @param {GetDependants=} getDependants Dependant getter returning an array of
* references used in cache bust consideration.
*/
function rememo_default(selector, getDependants) {
	/** @type {WeakMap<*,*>} */
	var rootCache;
	/** @type {GetDependants} */
	var normalizedGetDependants = getDependants ? getDependants : arrayOf;
	/**
	* Returns the cache for a given dependants array. When possible, a WeakMap
	* will be used to create a unique cache for each set of dependants. This
	* is feasible due to the nature of WeakMap in allowing garbage collection
	* to occur on entries where the key object is no longer referenced. Since
	* WeakMap requires the key to be an object, this is only possible when the
	* dependant is object-like. The root cache is created as a hierarchy where
	* each top-level key is the first entry in a dependants set, the value a
	* WeakMap where each key is the next dependant, and so on. This continues
	* so long as the dependants are object-like. If no dependants are object-
	* like, then the cache is shared across all invocations.
	*
	* @see isObjectLike
	*
	* @param {*[]} dependants Selector dependants.
	*
	* @return {Cache} Cache object.
	*/
	function getCache(dependants) {
		var caches = rootCache, isUniqueByDependants = true, i = 0, dependant, map, cache;
		for (; i < dependants.length; i++) {
			dependant = dependants[i];
			if (!isObjectLike(dependant)) {
				isUniqueByDependants = false;
				break;
			}
			if (caches.has(dependant)) caches = caches.get(dependant);
			else {
				map = /* @__PURE__ */ new WeakMap();
				caches.set(dependant, map);
				caches = map;
			}
		}
		if (!caches.has(LEAF_KEY)) {
			cache = createCache();
			cache.isUniqueByDependants = isUniqueByDependants;
			caches.set(LEAF_KEY, cache);
		}
		return caches.get(LEAF_KEY);
	}
	/**
	* Resets root memoization cache.
	*/
	function clear() {
		rootCache = /* @__PURE__ */ new WeakMap();
	}
	/**
	* The augmented selector call, considering first whether dependants have
	* changed before passing it to underlying memoize function.
	*
	* @param {*}    source    Source object for derivation.
	* @param {...*} extraArgs Additional arguments to pass to selector.
	*
	* @return {*} Selector result.
	*/
	function callSelector() {
		var len = arguments.length, cache, node, i, args = new Array(len), dependants;
		for (i = 0; i < len; i++) args[i] = arguments[i];
		dependants = normalizedGetDependants.apply(null, args);
		cache = getCache(dependants);
		if (!cache.isUniqueByDependants) {
			if (cache.lastDependants && !isShallowEqual(dependants, cache.lastDependants, 0)) cache.clear();
			cache.lastDependants = dependants;
		}
		node = cache.head;
		while (node) {
			if (!isShallowEqual(node.args, args, 1)) {
				node = node.next;
				continue;
			}
			if (node !== cache.head) {
				/** @type {CacheNode} */ node.prev.next = node.next;
				if (node.next) node.next.prev = node.prev;
				node.next = cache.head;
				node.prev = null;
				/** @type {CacheNode} */ cache.head.prev = node;
				cache.head = node;
			}
			return node.val;
		}
		node = { val: selector.apply(null, args) };
		args[0] = null;
		node.args = args;
		if (cache.head) {
			cache.head.prev = node;
			node.next = cache.head;
		}
		cache.head = node;
		return node.val;
	}
	callSelector.getDependants = normalizedGetDependants;
	callSelector.clear = clear;
	clear();
	return callSelector;
}
var LEAF_KEY;
function init_rememo() {
	return (init_rememo = __esmMin((() => {
		LEAF_KEY = {};
	})))();
}
//#endregion
//#region ../packages/data/build-module/create-selector.mjs
var createSelector;
function init_create_selector() {
	return (init_create_selector = __esmMin((() => {
		init_rememo();
		createSelector = rememo_default;
	})))();
}
//#endregion
//#region ../packages/data/build-module/redux-store/metadata/selectors.mjs
var selectors_exports = /* @__PURE__ */ __exportAll({
	countSelectorsByStatus: () => countSelectorsByStatus,
	getCachedResolvers: () => getCachedResolvers,
	getIsResolving: () => getIsResolving,
	getResolutionError: () => getResolutionError,
	getResolutionState: () => getResolutionState,
	hasFinishedResolution: () => hasFinishedResolution,
	hasResolutionFailed: () => hasResolutionFailed,
	hasResolvingSelectors: () => hasResolvingSelectors,
	hasStartedResolution: () => hasStartedResolution,
	isResolving: () => isResolving
});
function getResolutionState(state, selectorName, args) {
	const map = state[selectorName];
	if (!map) return;
	return map.get(selectorArgsToStateKey(args));
}
function getIsResolving(state, selectorName, args) {
	deprecated("wp.data.select( store ).getIsResolving", {
		since: "6.6",
		version: "6.8",
		alternative: "wp.data.select( store ).getResolutionState"
	});
	const resolutionState = getResolutionState(state, selectorName, args);
	return resolutionState && resolutionState.status === "resolving";
}
function hasStartedResolution(state, selectorName, args) {
	return getResolutionState(state, selectorName, args) !== void 0;
}
function hasFinishedResolution(state, selectorName, args) {
	const status = getResolutionState(state, selectorName, args)?.status;
	return status === "finished" || status === "error";
}
function hasResolutionFailed(state, selectorName, args) {
	return getResolutionState(state, selectorName, args)?.status === "error";
}
function getResolutionError(state, selectorName, args) {
	const resolutionState = getResolutionState(state, selectorName, args);
	return resolutionState?.status === "error" ? resolutionState.error : null;
}
function isResolving(state, selectorName, args) {
	return getResolutionState(state, selectorName, args)?.status === "resolving";
}
function getCachedResolvers(state) {
	return state;
}
function hasResolvingSelectors(state) {
	return Object.values(state).some((selectorState) => Array.from(selectorState._map.values()).some((resolution) => resolution[1]?.status === "resolving"));
}
var countSelectorsByStatus;
function init_selectors() {
	return (init_selectors = __esmMin((() => {
		init_build_module$1();
		init_create_selector();
		countSelectorsByStatus = createSelector((state) => {
			const selectorsByStatus = {};
			Object.values(state).forEach((selectorState) => Array.from(selectorState._map.values()).forEach((resolution) => {
				const currentStatus = resolution[1]?.status ?? "error";
				if (!selectorsByStatus[currentStatus]) selectorsByStatus[currentStatus] = 0;
				selectorsByStatus[currentStatus]++;
			}));
			return selectorsByStatus;
		}, (state) => [state]);
	})))();
}
//#endregion
//#region ../packages/data/build-module/redux-store/metadata/actions.mjs
var actions_exports = /* @__PURE__ */ __exportAll({
	failResolution: () => failResolution,
	failResolutions: () => failResolutions,
	finishResolution: () => finishResolution,
	finishResolutions: () => finishResolutions,
	invalidateResolution: () => invalidateResolution,
	invalidateResolutionForStore: () => invalidateResolutionForStore,
	invalidateResolutionForStoreSelector: () => invalidateResolutionForStoreSelector,
	startResolution: () => startResolution,
	startResolutions: () => startResolutions
});
function startResolution(selectorName, args) {
	return {
		type: "START_RESOLUTION",
		selectorName,
		args
	};
}
function finishResolution(selectorName, args) {
	return {
		type: "FINISH_RESOLUTION",
		selectorName,
		args
	};
}
function failResolution(selectorName, args, error) {
	return {
		type: "FAIL_RESOLUTION",
		selectorName,
		args,
		error
	};
}
function startResolutions(selectorName, args) {
	return {
		type: "START_RESOLUTIONS",
		selectorName,
		args
	};
}
function finishResolutions(selectorName, args) {
	return {
		type: "FINISH_RESOLUTIONS",
		selectorName,
		args
	};
}
function failResolutions(selectorName, args, errors) {
	return {
		type: "FAIL_RESOLUTIONS",
		selectorName,
		args,
		errors
	};
}
function invalidateResolution(selectorName, args) {
	return {
		type: "INVALIDATE_RESOLUTION",
		selectorName,
		args
	};
}
function invalidateResolutionForStore() {
	return { type: "INVALIDATE_RESOLUTION_FOR_STORE" };
}
function invalidateResolutionForStoreSelector(selectorName) {
	return {
		type: "INVALIDATE_RESOLUTION_FOR_STORE_SELECTOR",
		selectorName
	};
}
//#endregion
//#region ../packages/data/build-module/redux-store/index.mjs
function createResolversCache() {
	const cache = {};
	return {
		isRunning(selectorName, args) {
			return !!(cache[selectorName] && cache[selectorName].get(trimUndefinedValues(args)));
		},
		clear(selectorName, args) {
			if (cache[selectorName]) cache[selectorName].delete(trimUndefinedValues(args));
		},
		markAsRunning(selectorName, args) {
			if (!cache[selectorName]) cache[selectorName] = new import_equivalent_key_map.default();
			cache[selectorName].set(trimUndefinedValues(args), true);
		}
	};
}
function createBindingCache(getItem, bindItem) {
	const cache = /* @__PURE__ */ new WeakMap();
	return { get(itemName) {
		const item = getItem(itemName);
		if (!item) return null;
		let boundItem = cache.get(item);
		if (!boundItem) {
			boundItem = bindItem(item, itemName);
			cache.set(item, boundItem);
		}
		return boundItem;
	} };
}
function createPrivateProxy(publicItems, privateItems) {
	return new Proxy(publicItems, { get: (target, itemName) => privateItems.get(itemName) || Reflect.get(target, itemName) });
}
function createReduxStore(key, options) {
	const privateActions = {};
	const privateSelectors = {};
	const privateRegistrationFunctions = {
		privateActions,
		registerPrivateActions: (actions) => {
			Object.assign(privateActions, actions);
		},
		privateSelectors,
		registerPrivateSelectors: (selectors) => {
			Object.assign(privateSelectors, selectors);
		}
	};
	const storeDescriptor = {
		name: key,
		instantiate: (registry) => {
			const listeners = /* @__PURE__ */ new Set();
			const reducer = options.reducer;
			const store = instantiateReduxStore(key, options, registry, {
				registry,
				get dispatch() {
					return thunkDispatch;
				},
				get select() {
					return thunkSelect;
				},
				get resolveSelect() {
					return resolveSelectors;
				}
			});
			lock(store, privateRegistrationFunctions);
			const resolversCache = createResolversCache();
			function bindAction(action) {
				return (...args) => Promise.resolve(store.dispatch(action(...args)));
			}
			const actions = {
				...mapValues(actions_exports, bindAction),
				...mapValues(options.actions, bindAction)
			};
			const allActions = createPrivateProxy(actions, createBindingCache((name) => privateActions[name], bindAction));
			const thunkDispatch = new Proxy((action) => store.dispatch(action), { get: (_target, name) => allActions[name] });
			lock(actions, allActions);
			const resolvers = options.resolvers ? mapValues(options.resolvers, mapResolver) : {};
			function bindSelector(selector, selectorName) {
				if (selector.isRegistrySelector) selector.registry = registry;
				const boundSelector = (...args) => {
					args = normalize(selector, args);
					const state = store.__unstableOriginalGetState();
					if (selector.isRegistrySelector) selector.registry = registry;
					return selector(state.root, ...args);
				};
				boundSelector.normalizeArgs = getNormalizeArgs(selector);
				const resolver = resolvers[selectorName];
				if (!resolver) {
					boundSelector.hasResolver = false;
					return boundSelector;
				}
				return mapSelectorWithResolver(boundSelector, selectorName, resolver, store, resolversCache, boundMetadataSelectors);
			}
			function bindMetadataSelector(metaDataSelector) {
				const boundSelector = (selectorName, selectorArgs, ...args) => {
					if (selectorName) {
						const targetSelector = options.selectors?.[selectorName];
						if (targetSelector) selectorArgs = normalize(targetSelector, selectorArgs);
						const resolver = resolvers[selectorName];
						if (resolver && selectorArgs) selectorArgs = normalizeResolutionArgs(resolver, selectorArgs);
					}
					return metaDataSelector(store.__unstableOriginalGetState().metadata, selectorName, selectorArgs, ...args);
				};
				boundSelector.hasResolver = false;
				return boundSelector;
			}
			const boundMetadataSelectors = mapValues(selectors_exports, bindMetadataSelector);
			const boundSelectors = mapValues(options.selectors, bindSelector);
			const selectors = {
				...boundMetadataSelectors,
				...boundSelectors
			};
			const boundPrivateSelectors = createBindingCache((name) => privateSelectors[name], bindSelector);
			const allSelectors = createPrivateProxy(selectors, boundPrivateSelectors);
			for (const selectorName of Object.keys(privateSelectors)) boundPrivateSelectors.get(selectorName);
			const thunkSelect = new Proxy((selector) => selector(store.__unstableOriginalGetState()), { get: (_target, name) => allSelectors[name] });
			lock(selectors, allSelectors);
			const bindResolveSelector = mapResolveSelector(store, resolvers, boundMetadataSelectors);
			const resolveSelectors = mapValues(boundSelectors, bindResolveSelector);
			const allResolveSelectors = createPrivateProxy(resolveSelectors, createBindingCache((name) => boundPrivateSelectors.get(name), bindResolveSelector));
			lock(resolveSelectors, allResolveSelectors);
			const bindSuspendSelector = mapSuspendSelector(store, boundMetadataSelectors);
			const suspendSelectors = {
				...boundMetadataSelectors,
				...mapValues(boundSelectors, bindSuspendSelector)
			};
			const allSuspendSelectors = createPrivateProxy(suspendSelectors, createBindingCache((name) => boundPrivateSelectors.get(name), bindSuspendSelector));
			lock(suspendSelectors, allSuspendSelectors);
			const getSelectors = () => selectors;
			const getActions = () => actions;
			const getResolveSelectors = () => resolveSelectors;
			const getSuspendSelectors = () => suspendSelectors;
			store.__unstableOriginalGetState = store.getState;
			store.getState = () => store.__unstableOriginalGetState().root;
			const subscribe = (listener) => {
				listeners.add(listener);
				return () => listeners.delete(listener);
			};
			let lastState = store.__unstableOriginalGetState();
			store.subscribe(() => {
				const state = store.__unstableOriginalGetState();
				const hasChanged = state !== lastState;
				lastState = state;
				if (hasChanged) for (const listener of listeners) listener();
			});
			return {
				reducer,
				store,
				actions,
				selectors,
				resolvers,
				getSelectors,
				getResolveSelectors,
				getSuspendSelectors,
				getActions,
				subscribe
			};
		}
	};
	lock(storeDescriptor, privateRegistrationFunctions);
	return storeDescriptor;
}
function instantiateReduxStore(key, options, registry, thunkArgs) {
	const normalizedControls = mapValues({
		...options.controls,
		...builtinControls
	}, (control) => control.isRegistryControl ? control(registry) : control);
	const enhancers = [applyMiddleware(...[
		resolvers_cache_middleware_default(registry, key),
		promise_middleware_default,
		createMiddleware(normalizedControls),
		createThunkMiddleware(thunkArgs)
	])];
	if (typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION__) enhancers.push(window.__REDUX_DEVTOOLS_EXTENSION__({
		name: key,
		instanceId: key,
		serialize: { replacer: devToolsReplacer }
	}));
	const { reducer, initialState } = options;
	return createStore(combineReducers({
		metadata: reducer_default,
		root: reducer
	}), { root: initialState }, compose_default(...enhancers));
}
function mapResolveSelector(store, resolvers, boundMetadataSelectors) {
	return (selector, selectorName) => {
		if (!selector.hasResolver) return async (...args) => selector(...args);
		return (...args) => new Promise((resolve, reject) => {
			const resolver = resolvers[selectorName];
			const resolutionArgs = normalizeResolutionArgs(resolver, normalize(selector, args));
			const hasFinished = () => {
				return boundMetadataSelectors.hasFinishedResolution(selectorName, args) || typeof resolver.isFulfilled === "function" && resolver.isFulfilled(store.getState(), ...resolutionArgs);
			};
			const finalize = (result2) => {
				if (boundMetadataSelectors.hasResolutionFailed(selectorName, args)) reject(boundMetadataSelectors.getResolutionError(selectorName, args));
				else resolve(result2);
			};
			const getResult = () => selector(...args);
			const result = getResult();
			if (hasFinished()) return finalize(result);
			const unsubscribe = store.subscribe(() => {
				if (hasFinished()) {
					unsubscribe();
					finalize(getResult());
				}
			});
		});
	};
}
function mapSuspendSelector(store, boundMetadataSelectors) {
	return (selector, selectorName) => {
		if (!selector.hasResolver) return selector;
		return (...args) => {
			const result = selector(...args);
			if (boundMetadataSelectors.hasFinishedResolution(selectorName, args)) {
				if (boundMetadataSelectors.hasResolutionFailed(selectorName, args)) throw boundMetadataSelectors.getResolutionError(selectorName, args);
				return result;
			}
			throw new Promise((resolve) => {
				const unsubscribe = store.subscribe(() => {
					if (boundMetadataSelectors.hasFinishedResolution(selectorName, args)) {
						resolve();
						unsubscribe();
					}
				});
			});
		};
	};
}
function mapResolver(resolver) {
	if (resolver.fulfill) return resolver;
	return {
		...resolver,
		fulfill: resolver
	};
}
function mapSelectorWithResolver(selector, selectorName, resolver, store, resolversCache, boundMetadataSelectors) {
	function fulfillSelector(selectorArgs) {
		const args = normalizeResolutionArgs(resolver, selectorArgs);
		if (resolversCache.isRunning(selectorName, args) || boundMetadataSelectors.hasStartedResolution(selectorName, selectorArgs) || typeof resolver.isFulfilled === "function" && resolver.isFulfilled(store.getState(), ...args)) return;
		resolversCache.markAsRunning(selectorName, args);
		setTimeout(async () => {
			resolversCache.clear(selectorName, args);
			store.dispatch(startResolution(selectorName, args));
			try {
				const action = resolver.fulfill(...args);
				if (action) await store.dispatch(action);
				store.dispatch(finishResolution(selectorName, args));
			} catch (error) {
				store.dispatch(failResolution(selectorName, args, error));
			}
		}, 0);
	}
	const selectorResolver = (...args) => {
		args = normalize(selector, args);
		fulfillSelector(args);
		return selector(...args);
	};
	selectorResolver.hasResolver = true;
	selectorResolver.normalizeArgs = selector.normalizeArgs;
	return selectorResolver;
}
function getNormalizeArgs(selector) {
	return selector.normalizeArgs ?? selector.__unstableNormalizeArgs;
}
function normalize(selector, args) {
	const normalizeArgs = getNormalizeArgs(selector);
	if (typeof normalizeArgs === "function" && args?.length) return normalizeArgs(args);
	return args;
}
function normalizeResolutionArgs(resolver, args) {
	if (typeof resolver.getResolutionArgs === "function") return resolver.getResolutionArgs(...args);
	return args;
}
var import_equivalent_key_map, trimUndefinedValues, mapValues, devToolsReplacer;
function init_redux_store() {
	return (init_redux_store = __esmMin((() => {
		init_redux();
		import_equivalent_key_map = /* @__PURE__ */ __toESM(require_equivalent_key_map(), 1);
		init_build_module();
		init_compose();
		init_controls();
		init_lock_unlock();
		init_promise_middleware();
		init_resolvers_cache_middleware();
		init_reducer();
		init_selectors();
		trimUndefinedValues = (array) => {
			const result = [...array];
			for (let i = result.length - 1; i >= 0; i--) if (result[i] === void 0) result.splice(i, 1);
			return result;
		};
		mapValues = (obj, callback) => Object.fromEntries(Object.entries(obj ?? {}).map(([key, value]) => [key, callback(value, key)]));
		devToolsReplacer = (_key, state) => {
			if (state instanceof Map) return Object.fromEntries(state);
			if (typeof window !== "undefined" && state instanceof window.HTMLElement) return null;
			return state;
		};
	})))();
}
//#endregion
//#region ../packages/data/build-module/store/index.mjs
var store_default;
function init_store() {
	return (init_store = __esmMin((() => {
		store_default = {
			name: "core/data",
			instantiate(registry) {
				const getCoreDataSelector = (selectorName) => (key, ...args) => {
					return registry.select(key)[selectorName](...args);
				};
				const getCoreDataAction = (actionName) => (key, ...args) => {
					return registry.dispatch(key)[actionName](...args);
				};
				return {
					getSelectors() {
						return Object.fromEntries([
							"getIsResolving",
							"hasStartedResolution",
							"hasFinishedResolution",
							"isResolving",
							"getCachedResolvers"
						].map((selectorName) => [selectorName, getCoreDataSelector(selectorName)]));
					},
					getActions() {
						return Object.fromEntries([
							"startResolution",
							"finishResolution",
							"invalidateResolution",
							"invalidateResolutionForStore",
							"invalidateResolutionForStoreSelector"
						].map((actionName) => [actionName, getCoreDataAction(actionName)]));
					},
					subscribe() {
						return () => () => {};
					}
				};
			}
		};
	})))();
}
//#endregion
//#region ../packages/data/build-module/utils/emitter.mjs
function createEmitter() {
	let isPaused = false;
	let isPending = false;
	const listeners = /* @__PURE__ */ new Set();
	let clonedListeners = null;
	const notifyListeners = () => {
		clonedListeners ??= Array.from(listeners);
		const currentListeners = clonedListeners;
		for (let i = 0; i < currentListeners.length; i++) currentListeners[i]();
	};
	return {
		get isPaused() {
			return isPaused;
		},
		subscribe(listener) {
			listeners.add(listener);
			clonedListeners = null;
			return () => {
				listeners.delete(listener);
				clonedListeners = null;
			};
		},
		pause() {
			isPaused = true;
		},
		resume() {
			isPaused = false;
			if (isPending) {
				isPending = false;
				notifyListeners();
			}
		},
		emit() {
			if (isPaused) {
				isPending = true;
				return;
			}
			notifyListeners();
		}
	};
}
//#endregion
//#region ../packages/data/build-module/registry.mjs
function getStoreName(storeNameOrDescriptor) {
	return typeof storeNameOrDescriptor === "string" ? storeNameOrDescriptor : storeNameOrDescriptor.name;
}
function createRegistry(storeConfigs = {}, parent = null) {
	const stores = {};
	const emitter = createEmitter();
	let listeningStores = null;
	const pendingListeners = /* @__PURE__ */ new Map();
	function globalListener() {
		emitter.emit();
	}
	function subscribePending(storeName, listener) {
		const pending = { listener };
		let listeners = pendingListeners.get(storeName);
		if (!listeners) {
			listeners = /* @__PURE__ */ new Set();
			pendingListeners.set(storeName, listeners);
		}
		listeners.add(pending);
		return () => {
			pending.unsubscribe?.();
			const stillPending = pendingListeners.get(storeName);
			if (stillPending) {
				stillPending.delete(pending);
				if (stillPending.size === 0) pendingListeners.delete(storeName);
			}
		};
	}
	function connectPendingListeners(name, store) {
		const listeners = pendingListeners.get(name);
		if (!listeners) return;
		pendingListeners.delete(name);
		for (const pending of listeners) pending.unsubscribe = store.subscribe(pending.listener);
	}
	const subscribe = (listener, storeNameOrDescriptor) => {
		if (!storeNameOrDescriptor) return emitter.subscribe(listener);
		const storeName = getStoreName(storeNameOrDescriptor);
		const store = stores[storeName];
		if (store) return store.subscribe(listener);
		if (!parent) return subscribePending(storeName, listener);
		return parent.subscribe(listener, storeNameOrDescriptor);
	};
	function select(storeNameOrDescriptor) {
		const storeName = getStoreName(storeNameOrDescriptor);
		listeningStores?.add(storeName);
		const store = stores[storeName];
		if (store) return store.getSelectors();
		return parent?.select(storeName);
	}
	function __unstableMarkListeningStores(callback, ref) {
		listeningStores = /* @__PURE__ */ new Set();
		try {
			return callback.call(this);
		} finally {
			ref.current = Array.from(listeningStores);
			listeningStores = null;
		}
	}
	function resolveSelect(storeNameOrDescriptor) {
		const storeName = getStoreName(storeNameOrDescriptor);
		listeningStores?.add(storeName);
		const store = stores[storeName];
		if (store) return store.getResolveSelectors();
		return parent && parent.resolveSelect(storeName);
	}
	function suspendSelect(storeNameOrDescriptor) {
		const storeName = getStoreName(storeNameOrDescriptor);
		listeningStores?.add(storeName);
		const store = stores[storeName];
		if (store) return store.getSuspendSelectors();
		return parent && parent.suspendSelect(storeName);
	}
	function dispatch(storeNameOrDescriptor) {
		const storeName = getStoreName(storeNameOrDescriptor);
		const store = stores[storeName];
		if (store) return store.getActions();
		return parent && parent.dispatch(storeName);
	}
	function withPlugins(attributes) {
		return Object.fromEntries(Object.entries(attributes).map(([key, attribute]) => {
			if (typeof attribute !== "function") return [key, attribute];
			return [key, (...args) => {
				return registry[key](...args);
			}];
		}));
	}
	function registerStoreInstance(name, createStoreFunc) {
		if (stores[name]) {
			console.error("Store \"" + name + "\" is already registered.");
			return stores[name];
		}
		const store = createStoreFunc();
		if (typeof store.getSelectors !== "function") throw new TypeError("store.getSelectors must be a function");
		if (typeof store.getActions !== "function") throw new TypeError("store.getActions must be a function");
		if (typeof store.subscribe !== "function") throw new TypeError("store.subscribe must be a function");
		store.emitter = createEmitter();
		store.subscribe(() => store.emitter.emit());
		store.subscribe = (listener) => store.emitter.subscribe(listener);
		stores[name] = store;
		store.subscribe(globalListener);
		connectPendingListeners(name, store);
		if (parent) try {
			unlock(store.store).registerPrivateActions(unlock(parent).privateActionsOf(name));
			unlock(store.store).registerPrivateSelectors(unlock(parent).privateSelectorsOf(name));
		} catch {}
		return store;
	}
	function register(store) {
		registerStoreInstance(store.name, () => store.instantiate(registry));
	}
	function registerGenericStore(name, store) {
		deprecated("wp.data.registerGenericStore", {
			since: "5.9",
			alternative: "wp.data.register( storeDescriptor )"
		});
		registerStoreInstance(name, () => store);
	}
	function registerStore(storeName, options) {
		if (!options.reducer) throw new TypeError("Must specify store reducer");
		return registerStoreInstance(storeName, () => createReduxStore(storeName, options).instantiate(registry)).store;
	}
	function batch(callback) {
		if (emitter.isPaused) {
			callback();
			return;
		}
		emitter.pause();
		Object.values(stores).forEach((store) => store.emitter.pause());
		try {
			callback();
		} finally {
			emitter.resume();
			Object.values(stores).forEach((store) => store.emitter.resume());
		}
	}
	let registry = {
		batch,
		stores,
		namespaces: stores,
		subscribe,
		select,
		resolveSelect,
		suspendSelect,
		dispatch,
		use,
		register,
		registerGenericStore,
		registerStore,
		__unstableMarkListeningStores
	};
	function use(plugin, options) {
		if (!plugin) return;
		registry = {
			...registry,
			...plugin(registry, options)
		};
		return registry;
	}
	registry.register(store_default);
	for (const [name, config] of Object.entries(storeConfigs)) registry.register(createReduxStore(name, config));
	if (parent) parent.subscribe(globalListener);
	const registryWithPlugins = withPlugins(registry);
	lock(registryWithPlugins, {
		privateActionsOf: (name) => {
			try {
				return unlock(stores[name].store).privateActions;
			} catch {
				return {};
			}
		},
		privateSelectorsOf: (name) => {
			try {
				return unlock(stores[name].store).privateSelectors;
			} catch {
				return {};
			}
		}
	});
	return registryWithPlugins;
}
function init_registry() {
	return (init_registry = __esmMin((() => {
		init_build_module$1();
		init_redux_store();
		init_store();
		init_lock_unlock();
	})))();
}
//#endregion
//#region ../packages/data/build-module/default-registry.mjs
var default_registry_default;
function init_default_registry() {
	return (init_default_registry = __esmMin((() => {
		init_registry();
		default_registry_default = createRegistry();
	})))();
}
//#endregion
export { compose_default as _, createReduxStore as a, pipe_default as b, init_create_selector as c, init_controls as d, createRegistrySelector as f, require_equivalent_key_map as g, init_combine_reducers as h, init_registry as i, init_keyed_reducer as l, combineReducers as m, init_default_registry as n, init_redux_store as o, init_factory as p, createRegistry as r, createSelector as s, default_registry_default as t, keyedReducer as u, init_compose as v, init_pipe as y };
