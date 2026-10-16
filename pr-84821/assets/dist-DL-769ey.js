import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
//#region ../node_modules/.store/memize@2.1.1-roXbtpG2bis3Lggp7SQpAA/node_modules/memize/dist/index.js
/**
* Memize options object.
*
* @typedef MemizeOptions
*
* @property {number} [maxSize] Maximum size of the cache.
*/
/**
* Internal cache entry.
*
* @typedef MemizeCacheNode
*
* @property {?MemizeCacheNode|undefined} [prev] Previous node.
* @property {?MemizeCacheNode|undefined} [next] Next node.
* @property {Array<*>}                   args   Function arguments for cache
*                                               entry.
* @property {*}                          val    Function result.
*/
/**
* Properties of the enhanced function for controlling cache.
*
* @typedef MemizeMemoizedFunction
*
* @property {()=>void} clear Clear the cache.
*/
/**
* Accepts a function to be memoized, and returns a new memoized function, with
* optional options.
*
* @template {(...args: any[]) => any} F
*
* @param {F}             fn        Function to memoize.
* @param {MemizeOptions} [options] Options object.
*
* @return {((...args: Parameters<F>) => ReturnType<F>) & MemizeMemoizedFunction} Memoized function.
*/
function memize(fn, options) {
	var size = 0;
	/** @type {?MemizeCacheNode|undefined} */
	var head;
	/** @type {?MemizeCacheNode|undefined} */
	var tail;
	options = options || {};
	function memoized() {
		var node = head, len = arguments.length, args, i;
		searchCache: while (node) {
			if (node.args.length !== arguments.length) {
				node = node.next;
				continue;
			}
			for (i = 0; i < len; i++) if (node.args[i] !== arguments[i]) {
				node = node.next;
				continue searchCache;
			}
			if (node !== head) {
				if (node === tail) tail = node.prev;
				/** @type {MemizeCacheNode} */ node.prev.next = node.next;
				if (node.next) node.next.prev = node.prev;
				node.next = head;
				node.prev = null;
				/** @type {MemizeCacheNode} */ head.prev = node;
				head = node;
			}
			return node.val;
		}
		args = new Array(len);
		for (i = 0; i < len; i++) args[i] = arguments[i];
		node = {
			args,
			val: fn.apply(null, args)
		};
		if (head) {
			head.prev = node;
			node.next = head;
		} else tail = node;
		if (size === options.maxSize) {
			tail = tail.prev;
			/** @type {MemizeCacheNode} */ tail.next = null;
		} else size++;
		head = node;
		return node.val;
	}
	memoized.clear = function() {
		head = null;
		tail = null;
		size = 0;
	};
	return memoized;
}
function init_dist() {
	return (init_dist = __esmMin((() => {})))();
}
//#endregion
export { memize as n, init_dist as t };
