import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { b as init_useRefWithInit, x as useRefWithInit } from "./useRenderElement-QwAlaybP.js";
import { n as useOnMount, t as init_useOnMount } from "./useOnMount-Cvu2fqce.js";
//#region ../node_modules/.store/@base-ui/utils@0.4.0-Z81C5N42agUorsFwt3T4Yw/node_modules/@base-ui/utils/useTimeout.mjs
/**
* A `setTimeout` with automatic cleanup and guard.
*/
function useTimeout() {
	const timeout = useRefWithInit(Timeout.create).current;
	useOnMount(timeout.disposeEffect);
	return timeout;
}
var EMPTY, Timeout;
function init_useTimeout() {
	return (init_useTimeout = __esmMin((() => {
		init_useRefWithInit();
		init_useOnMount();
		EMPTY = 0;
		Timeout = class Timeout {
			static create() {
				return new Timeout();
			}
			currentId = EMPTY;
			/**
			* Executes `fn` after `delay`, clearing any previously scheduled call.
			*/
			start(delay, fn) {
				this.clear();
				this.currentId = setTimeout(() => {
					this.currentId = EMPTY;
					fn();
				}, delay);
			}
			isStarted() {
				return this.currentId !== EMPTY;
			}
			clear = () => {
				if (this.currentId !== EMPTY) {
					clearTimeout(this.currentId);
					this.currentId = EMPTY;
				}
			};
			disposeEffect = () => {
				return this.clear;
			};
		};
	})))();
}
//#endregion
export { init_useTimeout as n, useTimeout as r, Timeout as t };
