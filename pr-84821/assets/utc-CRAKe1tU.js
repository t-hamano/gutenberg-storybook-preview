import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
//#region ../node_modules/.store/@date-fns/utc@2.1.1-ZPxNp3FQK4Dq03rd4Msm-w/node_modules/@date-fns/utc/date/mini.js
var UTCDateMini, re;
function init_mini() {
	return (init_mini = __esmMin((() => {
		UTCDateMini = class extends Date {
			constructor() {
				super();
				this.setTime(arguments.length === 0 ? Date.now() : arguments.length === 1 ? typeof arguments[0] === "string" ? +new Date(arguments[0]) : arguments[0] : Date.UTC(...arguments));
			}
			getTimezoneOffset() {
				return 0;
			}
		};
		re = /^(get|set)(?!UTC)/;
		Object.getOwnPropertyNames(Date.prototype).forEach((method) => {
			if (re.test(method)) {
				const utcMethod = Date.prototype[method.replace(re, "$1UTC")];
				if (utcMethod) UTCDateMini.prototype[method] = utcMethod;
			}
		});
	})))();
}
function init_date() {
	return (init_date = __esmMin((() => {
		init_mini();
		new Intl.DateTimeFormat("en-US", {
			weekday: "short",
			timeZone: "UTC"
		});
		new Intl.DateTimeFormat("en-US", {
			month: "short",
			day: "numeric",
			timeZone: "UTC"
		});
		new Intl.DateTimeFormat("en-GB", {
			hour12: false,
			hour: "numeric",
			minute: "numeric",
			second: "numeric",
			timeZone: "UTC"
		});
	})))();
}
//#endregion
//#region ../node_modules/.store/@date-fns/utc@2.1.1-ZPxNp3FQK4Dq03rd4Msm-w/node_modules/@date-fns/utc/utc/index.js
function init_utc() {
	return (init_utc = __esmMin((() => {
		init_date();
	})))();
}
//#endregion
//#region ../node_modules/.store/@date-fns/utc@2.1.1-ZPxNp3FQK4Dq03rd4Msm-w/node_modules/@date-fns/utc/index.js
function init_utc$1() {
	return (init_utc$1 = __esmMin((() => {
		init_date();
		init_mini();
		init_utc();
	})))();
}
//#endregion
export { UTCDateMini as n, init_mini as r, init_utc$1 as t };
