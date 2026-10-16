import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { i as defaultHooks, s as init_build_module$1 } from "./build-module-CSjwTo7p.js";
import { t as init_sprintf } from "./sprintf-_uhhbfMc.js";
//#region ../node_modules/.store/@tannin/postfix@1.1.0-W6ibRltZusNW1WsbQOcTdQ/node_modules/@tannin/postfix/index.js
/**
* Given a C expression, returns the equivalent postfix (Reverse Polish)
* notation terms as an array.
*
* If a postfix string is desired, simply `.join( ' ' )` the result.
*
* @example
*
* ```js
* import postfix from '@tannin/postfix';
*
* postfix( 'n > 1' );
* // ⇒ [ 'n', '1', '>' ]
* ```
*
* @param {string} expression C expression.
*
* @return {string[]} Postfix terms.
*/
function postfix(expression) {
	var terms = [], stack = [], match, operator, term, element;
	while (match = expression.match(PATTERN)) {
		operator = match[0];
		term = expression.substr(0, match.index).trim();
		if (term) terms.push(term);
		while (element = stack.pop()) {
			if (TERMINATORS[operator]) {
				if (TERMINATORS[operator][0] === element) {
					operator = TERMINATORS[operator][1] || operator;
					break;
				}
			} else if (OPENERS.indexOf(element) >= 0 || PRECEDENCE[element] < PRECEDENCE[operator]) {
				stack.push(element);
				break;
			}
			terms.push(element);
		}
		if (!TERMINATORS[operator]) stack.push(operator);
		expression = expression.substr(match.index + operator.length);
	}
	expression = expression.trim();
	if (expression) terms.push(expression);
	return terms.concat(stack.reverse());
}
var PRECEDENCE, OPENERS, TERMINATORS, PATTERN;
function init_postfix() {
	return (init_postfix = __esmMin((() => {
		PRECEDENCE = {
			"(": 9,
			"!": 8,
			"*": 7,
			"/": 7,
			"%": 7,
			"+": 6,
			"-": 6,
			"<": 5,
			"<=": 5,
			">": 5,
			">=": 5,
			"==": 4,
			"!=": 4,
			"&&": 3,
			"||": 2,
			"?": 1,
			"?:": 1
		};
		OPENERS = ["(", "?"];
		TERMINATORS = {
			")": ["("],
			":": ["?", "?:"]
		};
		PATTERN = /<=|>=|==|!=|&&|\|\||\?:|\(|!|\*|\/|%|\+|-|<|>|\?|\)|:/;
	})))();
}
//#endregion
//#region ../node_modules/.store/@tannin/evaluate@1.2.0-7ebKezVk6XCQujBP4J6xHg/node_modules/@tannin/evaluate/index.js
/**
* Given an array of postfix terms and operand variables, returns the result of
* the postfix evaluation.
*
* @example
*
* ```js
* import evaluate from '@tannin/evaluate';
*
* // 3 + 4 * 5 / 6 ⇒ '3 4 5 * 6 / +'
* const terms = [ '3', '4', '5', '*', '6', '/', '+' ];
*
* evaluate( terms, {} );
* // ⇒ 6.333333333333334
* ```
*
* @param {string[]} postfix   Postfix terms.
* @param {Object}   variables Operand variables.
*
* @return {*} Result of evaluation.
*/
function evaluate(postfix, variables) {
	var stack = [], i = 0, j, args, getOperatorResult, term, value;
	for (; i < postfix.length; i++) {
		term = postfix[i];
		getOperatorResult = OPERATORS[term];
		if (getOperatorResult) {
			j = getOperatorResult.length;
			args = Array(j);
			while (j--) args[j] = stack.pop();
			try {
				value = getOperatorResult.apply(null, args);
			} catch (earlyReturn) {
				return earlyReturn;
			}
		} else if (variables.hasOwnProperty(term)) value = variables[term];
		else value = +term;
		stack.push(value);
	}
	return stack[0];
}
var OPERATORS;
function init_evaluate() {
	return (init_evaluate = __esmMin((() => {
		OPERATORS = {
			"!": function(a) {
				return !a;
			},
			"*": function(a, b) {
				return a * b;
			},
			"/": function(a, b) {
				return a / b;
			},
			"%": function(a, b) {
				return a % b;
			},
			"+": function(a, b) {
				return a + b;
			},
			"-": function(a, b) {
				return a - b;
			},
			"<": function(a, b) {
				return a < b;
			},
			"<=": function(a, b) {
				return a <= b;
			},
			">": function(a, b) {
				return a > b;
			},
			">=": function(a, b) {
				return a >= b;
			},
			"==": function(a, b) {
				return a === b;
			},
			"!=": function(a, b) {
				return a !== b;
			},
			"&&": function(a, b) {
				return a && b;
			},
			"||": function(a, b) {
				return a || b;
			},
			"?:": function(a, b, c) {
				if (a) throw b;
				return c;
			}
		};
	})))();
}
//#endregion
//#region ../node_modules/.store/@tannin/compile@1.1.0--iQBjBAIbl3DnmEGxRSFZQ/node_modules/@tannin/compile/index.js
/**
* Given a C expression, returns a function which can be called to evaluate its
* result.
*
* @example
*
* ```js
* import compile from '@tannin/compile';
*
* const evaluate = compile( 'n > 1' );
*
* evaluate( { n: 2 } );
* // ⇒ true
* ```
*
* @param {string} expression C expression.
*
* @return {(variables?:{[variable:string]:*})=>*} Compiled evaluator.
*/
function compile(expression) {
	var terms = postfix(expression);
	return function(variables) {
		return evaluate(terms, variables);
	};
}
function init_compile() {
	return (init_compile = __esmMin((() => {
		init_postfix();
		init_evaluate();
	})))();
}
//#endregion
//#region ../node_modules/.store/@tannin/plural-forms@1.1.0-AmFaEDvEGZ72sApHx17gAw/node_modules/@tannin/plural-forms/index.js
/**
* Given a C expression, returns a function which, when called with a value,
* evaluates the result with the value assumed to be the "n" variable of the
* expression. The result will be coerced to its numeric equivalent.
*
* @param {string} expression C expression.
*
* @return {Function} Evaluator function.
*/
function pluralForms(expression) {
	var evaluate = compile(expression);
	return function(n) {
		return +evaluate({ n });
	};
}
function init_plural_forms() {
	return (init_plural_forms = __esmMin((() => {
		init_compile();
	})))();
}
//#endregion
//#region ../node_modules/.store/tannin@1.2.0-n1rGtdNtyRx-1nud3wLKmA/node_modules/tannin/index.js
/**
* Given a specific locale data's config `plural_forms` value, returns the
* expression.
*
* @example
*
* ```
* getPluralExpression( 'nplurals=2; plural=(n != 1);' ) === '(n != 1)'
* ```
*
* @param {string} pf Locale data plural forms.
*
* @return {string} Plural forms expression.
*/
function getPluralExpression(pf) {
	var parts = pf.split(";"), i = 0, part;
	for (; i < parts.length; i++) {
		part = parts[i].trim();
		if (part.indexOf("plural=") === 0) return part.substr(7);
	}
}
/**
* Tannin constructor.
*
* @class
*
* @param {TanninLocaleData} data      Jed-formatted locale data.
* @param {TanninOptions}    [options] Tannin options.
*/
function Tannin(data, options) {
	var key;
	/**
	* Jed-formatted locale data.
	*
	* @name Tannin#data
	* @type {TanninLocaleData}
	*/
	this.data = data;
	/**
	* Plural forms function cache, keyed by plural forms string.
	*
	* @name Tannin#pluralForms
	* @type {Object<string,Function>}
	*/
	this.pluralForms = {};
	/**
	* Effective options for instance, including defaults.
	*
	* @name Tannin#options
	* @type {TanninOptions}
	*/
	this.options = {};
	for (key in DEFAULT_OPTIONS) this.options[key] = options !== void 0 && key in options ? options[key] : DEFAULT_OPTIONS[key];
}
var DEFAULT_OPTIONS;
function init_tannin() {
	return (init_tannin = __esmMin((() => {
		init_plural_forms();
		DEFAULT_OPTIONS = {
			contextDelimiter: "",
			onMissingKey: null
		};
		/**
		* Returns the plural form index for the given domain and value.
		*
		* @param {string} domain Domain on which to calculate plural form.
		* @param {number} n      Value for which plural form is to be calculated.
		*
		* @return {number} Plural form index.
		*/
		Tannin.prototype.getPluralForm = function(domain, n) {
			var getPluralForm = this.pluralForms[domain], config, plural, pf;
			if (!getPluralForm) {
				config = this.data[domain][""];
				pf = config["Plural-Forms"] || config["plural-forms"] || config.plural_forms;
				if (typeof pf !== "function") {
					plural = getPluralExpression(config["Plural-Forms"] || config["plural-forms"] || config.plural_forms);
					pf = pluralForms(plural);
				}
				getPluralForm = this.pluralForms[domain] = pf;
			}
			return getPluralForm(n);
		};
		/**
		* Translate a string.
		*
		* @param {string}      domain   Translation domain.
		* @param {string|void} context  Context distinguishing terms of the same name.
		* @param {string}      singular Primary key for translation lookup.
		* @param {string=}     plural   Fallback value used for non-zero plural
		*                               form index.
		* @param {number=}     n        Value to use in calculating plural form.
		*
		* @return {string} Translated string.
		*/
		Tannin.prototype.dcnpgettext = function(domain, context, singular, plural, n) {
			var index, key, entry;
			if (n === void 0) index = 0;
			else index = this.getPluralForm(domain, n);
			key = singular;
			if (context) key = context + this.options.contextDelimiter + singular;
			entry = this.data[domain][key];
			if (entry && entry[index]) return entry[index];
			if (this.options.onMissingKey) this.options.onMissingKey(singular, domain);
			return index === 0 ? singular : plural;
		};
	})))();
}
//#endregion
//#region ../packages/i18n/build-module/create-i18n.mjs
var DEFAULT_LOCALE_DATA, I18N_HOOK_REGEXP, createI18n;
function init_create_i18n() {
	return (init_create_i18n = __esmMin((() => {
		init_tannin();
		DEFAULT_LOCALE_DATA = { "": { plural_forms(n) {
			return n === 1 ? 0 : 1;
		} } };
		I18N_HOOK_REGEXP = /^i18n\.(n?gettext|has_translation)(_|$)/;
		createI18n = (initialData, initialDomain, hooks) => {
			const tannin = new Tannin({});
			const listeners = /* @__PURE__ */ new Set();
			const notifyListeners = () => {
				listeners.forEach((listener) => listener());
			};
			const subscribe = (callback) => {
				listeners.add(callback);
				return () => listeners.delete(callback);
			};
			const getLocaleData = (domain = "default") => tannin.data[domain];
			const doSetLocaleData = (data, domain = "default") => {
				tannin.data[domain] = {
					...tannin.data[domain],
					...data
				};
				tannin.data[domain][""] = {
					...DEFAULT_LOCALE_DATA[""],
					...tannin.data[domain]?.[""]
				};
				delete tannin.pluralForms[domain];
			};
			const setLocaleData = (data, domain) => {
				doSetLocaleData(data, domain);
				notifyListeners();
			};
			const addLocaleData = (data, domain = "default") => {
				tannin.data[domain] = {
					...tannin.data[domain],
					...data,
					"": {
						...DEFAULT_LOCALE_DATA[""],
						...tannin.data[domain]?.[""],
						...data?.[""]
					}
				};
				delete tannin.pluralForms[domain];
				notifyListeners();
			};
			const resetLocaleData = (data, domain) => {
				tannin.data = {};
				tannin.pluralForms = {};
				setLocaleData(data, domain);
			};
			const dcnpgettext = (domain = "default", context, single, plural, number) => {
				if (!tannin.data[domain]) doSetLocaleData(void 0, domain);
				return tannin.dcnpgettext(domain, context, single, plural, number);
			};
			const getFilterDomain = (domain) => domain || "default";
			const __ = (text, domain) => {
				let translation = dcnpgettext(domain, void 0, text);
				if (!hooks) return translation;
				translation = hooks.applyFilters("i18n.gettext", translation, text, domain);
				return hooks.applyFilters("i18n.gettext_" + getFilterDomain(domain), translation, text, domain);
			};
			const _x = (text, context, domain) => {
				let translation = dcnpgettext(domain, context, text);
				if (!hooks) return translation;
				translation = hooks.applyFilters("i18n.gettext_with_context", translation, text, context, domain);
				return hooks.applyFilters("i18n.gettext_with_context_" + getFilterDomain(domain), translation, text, context, domain);
			};
			const _n = (single, plural, number, domain) => {
				let translation = dcnpgettext(domain, void 0, single, plural, number);
				if (!hooks) return translation;
				translation = hooks.applyFilters("i18n.ngettext", translation, single, plural, number, domain);
				return hooks.applyFilters("i18n.ngettext_" + getFilterDomain(domain), translation, single, plural, number, domain);
			};
			const _nx = (single, plural, number, context, domain) => {
				let translation = dcnpgettext(domain, context, single, plural, number);
				if (!hooks) return translation;
				translation = hooks.applyFilters("i18n.ngettext_with_context", translation, single, plural, number, context, domain);
				return hooks.applyFilters("i18n.ngettext_with_context_" + getFilterDomain(domain), translation, single, plural, number, context, domain);
			};
			const isRTL = () => {
				return "rtl" === _x("ltr", "text direction");
			};
			const hasTranslation = (single, context, domain) => {
				const key = context ? context + "" + single : single;
				let result = !!tannin.data?.[domain ?? "default"]?.[key];
				if (hooks) {
					result = hooks.applyFilters("i18n.has_translation", result, single, context, domain);
					result = hooks.applyFilters("i18n.has_translation_" + getFilterDomain(domain), result, single, context, domain);
				}
				return result;
			};
			if (initialData) setLocaleData(initialData, initialDomain);
			if (hooks) {
				const onHookAddedOrRemoved = (hookName) => {
					if (I18N_HOOK_REGEXP.test(hookName)) notifyListeners();
				};
				hooks.addAction("hookAdded", "core/i18n", onHookAddedOrRemoved);
				hooks.addAction("hookRemoved", "core/i18n", onHookAddedOrRemoved);
			}
			return {
				getLocaleData,
				setLocaleData,
				addLocaleData,
				resetLocaleData,
				subscribe,
				__,
				_x,
				_n,
				_nx,
				isRTL,
				hasTranslation
			};
		};
	})))();
}
//#endregion
//#region ../packages/i18n/build-module/default-i18n.mjs
var i18n, __, _x, _n, isRTL;
function init_default_i18n() {
	return (init_default_i18n = __esmMin((() => {
		init_build_module$1();
		init_create_i18n();
		i18n = createI18n(void 0, void 0, defaultHooks);
		i18n.getLocaleData.bind(i18n);
		i18n.setLocaleData.bind(i18n);
		i18n.resetLocaleData.bind(i18n);
		i18n.subscribe.bind(i18n);
		__ = i18n.__.bind(i18n);
		_x = i18n._x.bind(i18n);
		_n = i18n._n.bind(i18n);
		i18n._nx.bind(i18n);
		isRTL = i18n.isRTL.bind(i18n);
		i18n.hasTranslation.bind(i18n);
	})))();
}
//#endregion
//#region ../packages/i18n/build-module/index.mjs
function init_build_module() {
	return (init_build_module = __esmMin((() => {
		init_sprintf();
		init_create_i18n();
		init_default_i18n();
	})))();
}
//#endregion
export { init_default_i18n as a, _x as i, __ as n, isRTL as o, _n as r, init_build_module as t };
