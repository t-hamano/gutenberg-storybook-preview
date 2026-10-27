import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as useMergeRefs, t as init_use_merge_refs } from "./use-merge-refs-BAtuPB1L.js";
import { n as sprintf } from "./sprintf-_uhhbfMc.js";
import { n as __, o as isRTL, t as init_build_module } from "./build-module-v04us4E2.js";
import { a as init_clsx, i as clsx } from "./iframe-UtSZlYID.js";
import { n as useRender, t as init_useRender } from "./useRender-JXgJ-9ZS.js";
import { r as chevron_left_default, t as chevron_right_default } from "./chevron-right-CU5mFdfQ.js";
import { C as buildMatchPatternFn, D as buildLocalizeFn, S as init_en_US, T as buildMatchFn, a as init_useDayPicker, k as buildFormatLongFn, o as useDayPicker, x as enUS } from "./DayPicker-DXwfQZAN.js";
import { A as normalizeDates, M as startOfWeek, j as init_startOfWeek, k as init_normalizeDates } from "./setYear-BreLG7HH.js";
import { n as resets_module_default, t as init_resets_module } from "./resets.module-CJil9Bz6.js";
import { n as init_focus_module, t as focus_module_default } from "./focus.module-CJgaYHb1.js";
import { n as init_global_css_defense_module, t as global_css_defense_module_default } from "./global-css-defense.module-BTDDc07p.js";
import { n as init_icon_button, t as IconButton } from "./icon-button-XKyBAR-S.js";
import { r as init_build_module$1 } from "./library.story-CbQx3MQ6.js";
//#region ../node_modules/.store/date-fns@4.4.0-N3CoundlhH8enmbadGmv6Q/node_modules/date-fns/isSameWeek.js
/**
* The {@link isSameWeek} function options.
*/
/**
* @name isSameWeek
* @category Week Helpers
* @summary Are the given dates in the same week (and month and year)?
*
* @description
* Are the given dates in the same week (and month and year)?
*
* @param laterDate - The first date to check
* @param earlierDate - The second date to check
* @param options - An object with options
*
* @returns The dates are in the same week (and month and year)
*
* @example
* // Are 31 August 2014 and 4 September 2014 in the same week?
* const result = isSameWeek(new Date(2014, 7, 31), new Date(2014, 8, 4))
* //=> true
*
* @example
* // If week starts with Monday,
* // are 31 August 2014 and 4 September 2014 in the same week?
* const result = isSameWeek(new Date(2014, 7, 31), new Date(2014, 8, 4), {
*   weekStartsOn: 1
* })
* //=> false
*
* @example
* // Are 1 January 2014 and 1 January 2015 in the same week?
* const result = isSameWeek(new Date(2014, 0, 1), new Date(2015, 0, 1))
* //=> false
*/
function isSameWeek(laterDate, earlierDate, options) {
	const [laterDate_, earlierDate_] = normalizeDates(options?.in, laterDate, earlierDate);
	return +startOfWeek(laterDate_, options) === +startOfWeek(earlierDate_, options);
}
function init_isSameWeek() {
	return (init_isSameWeek = __esmMin((() => {
		init_normalizeDates();
		init_startOfWeek();
	})))();
}
//#endregion
//#region ../node_modules/.store/date-fns@4.4.0-N3CoundlhH8enmbadGmv6Q/node_modules/date-fns/locale/ar/_lib/formatDistance.js
var formatDistanceLocale$15, formatDistance$15;
function init_formatDistance() {
	return (init_formatDistance = __esmMin((() => {
		formatDistanceLocale$15 = {
			lessThanXSeconds: {
				one: "أقل من ثانية",
				two: "أقل من ثانيتين",
				threeToTen: "أقل من {{count}} ثواني",
				other: "أقل من {{count}} ثانية"
			},
			xSeconds: {
				one: "ثانية واحدة",
				two: "ثانيتان",
				threeToTen: "{{count}} ثواني",
				other: "{{count}} ثانية"
			},
			halfAMinute: "نصف دقيقة",
			lessThanXMinutes: {
				one: "أقل من دقيقة",
				two: "أقل من دقيقتين",
				threeToTen: "أقل من {{count}} دقائق",
				other: "أقل من {{count}} دقيقة"
			},
			xMinutes: {
				one: "دقيقة واحدة",
				two: "دقيقتان",
				threeToTen: "{{count}} دقائق",
				other: "{{count}} دقيقة"
			},
			aboutXHours: {
				one: "ساعة واحدة تقريباً",
				two: "ساعتين تقريبا",
				threeToTen: "{{count}} ساعات تقريباً",
				other: "{{count}} ساعة تقريباً"
			},
			xHours: {
				one: "ساعة واحدة",
				two: "ساعتان",
				threeToTen: "{{count}} ساعات",
				other: "{{count}} ساعة"
			},
			xDays: {
				one: "يوم واحد",
				two: "يومان",
				threeToTen: "{{count}} أيام",
				other: "{{count}} يوم"
			},
			aboutXWeeks: {
				one: "أسبوع واحد تقريبا",
				two: "أسبوعين تقريبا",
				threeToTen: "{{count}} أسابيع تقريبا",
				other: "{{count}} أسبوعا تقريبا"
			},
			xWeeks: {
				one: "أسبوع واحد",
				two: "أسبوعان",
				threeToTen: "{{count}} أسابيع",
				other: "{{count}} أسبوعا"
			},
			aboutXMonths: {
				one: "شهر واحد تقريباً",
				two: "شهرين تقريبا",
				threeToTen: "{{count}} أشهر تقريبا",
				other: "{{count}} شهرا تقريباً"
			},
			xMonths: {
				one: "شهر واحد",
				two: "شهران",
				threeToTen: "{{count}} أشهر",
				other: "{{count}} شهرا"
			},
			aboutXYears: {
				one: "سنة واحدة تقريباً",
				two: "سنتين تقريبا",
				threeToTen: "{{count}} سنوات تقريباً",
				other: "{{count}} سنة تقريباً"
			},
			xYears: {
				one: "سنة واحد",
				two: "سنتان",
				threeToTen: "{{count}} سنوات",
				other: "{{count}} سنة"
			},
			overXYears: {
				one: "أكثر من سنة",
				two: "أكثر من سنتين",
				threeToTen: "أكثر من {{count}} سنوات",
				other: "أكثر من {{count}} سنة"
			},
			almostXYears: {
				one: "ما يقارب سنة واحدة",
				two: "ما يقارب سنتين",
				threeToTen: "ما يقارب {{count}} سنوات",
				other: "ما يقارب {{count}} سنة"
			}
		};
		formatDistance$15 = (token, count, options) => {
			const usageGroup = formatDistanceLocale$15[token];
			let result;
			if (typeof usageGroup === "string") result = usageGroup;
			else if (count === 1) result = usageGroup.one;
			else if (count === 2) result = usageGroup.two;
			else if (count <= 10) result = usageGroup.threeToTen.replace("{{count}}", String(count));
			else result = usageGroup.other.replace("{{count}}", String(count));
			if (options?.addSuffix) {
				if (options.comparison && options.comparison > 0) return "خلال " + result;
				else return "منذ " + result;
			}
			return result;
		};
	})))();
}
//#endregion
//#region ../node_modules/.store/date-fns@4.4.0-N3CoundlhH8enmbadGmv6Q/node_modules/date-fns/locale/ar/_lib/formatLong.js
var dateFormats$15, timeFormats$15, dateTimeFormats$15, formatLong$15;
function init_formatLong() {
	return (init_formatLong = __esmMin((() => {
		dateFormats$15 = {
			full: "EEEE، do MMMM y",
			long: "do MMMM y",
			medium: "d MMM y",
			short: "dd/MM/yyyy"
		};
		timeFormats$15 = {
			full: "HH:mm:ss",
			long: "HH:mm:ss",
			medium: "HH:mm:ss",
			short: "HH:mm"
		};
		dateTimeFormats$15 = {
			full: "{{date}} 'عند الساعة' {{time}}",
			long: "{{date}} 'عند الساعة' {{time}}",
			medium: "{{date}}, {{time}}",
			short: "{{date}}, {{time}}"
		};
		formatLong$15 = {
			date: buildFormatLongFn({
				formats: dateFormats$15,
				defaultWidth: "full"
			}),
			time: buildFormatLongFn({
				formats: timeFormats$15,
				defaultWidth: "full"
			}),
			dateTime: buildFormatLongFn({
				formats: dateTimeFormats$15,
				defaultWidth: "full"
			})
		};
	})))();
}
//#endregion
//#region ../node_modules/.store/date-fns@4.4.0-N3CoundlhH8enmbadGmv6Q/node_modules/date-fns/locale/ar/_lib/formatRelative.js
var formatRelativeLocale$15, formatRelative$15;
function init_formatRelative() {
	return (init_formatRelative = __esmMin((() => {
		formatRelativeLocale$15 = {
			lastWeek: "eeee 'الماضي عند الساعة' p",
			yesterday: "'الأمس عند الساعة' p",
			today: "'اليوم عند الساعة' p",
			tomorrow: "'غدا عند الساعة' p",
			nextWeek: "eeee 'القادم عند الساعة' p",
			other: "P"
		};
		formatRelative$15 = (token) => formatRelativeLocale$15[token];
	})))();
}
//#endregion
//#region ../node_modules/.store/date-fns@4.4.0-N3CoundlhH8enmbadGmv6Q/node_modules/date-fns/locale/ar/_lib/localize.js
var eraValues$15, quarterValues$15, monthValues$15, dayValues$15, dayPeriodValues$15, formattingDayPeriodValues$13, ordinalNumber$15, localize$15;
function init_localize() {
	return (init_localize = __esmMin((() => {
		eraValues$15 = {
			narrow: ["ق", "ب"],
			abbreviated: ["ق.م.", "ب.م."],
			wide: ["قبل الميلاد", "بعد الميلاد"]
		};
		quarterValues$15 = {
			narrow: [
				"1",
				"2",
				"3",
				"4"
			],
			abbreviated: [
				"ر1",
				"ر2",
				"ر3",
				"ر4"
			],
			wide: [
				"الربع الأول",
				"الربع الثاني",
				"الربع الثالث",
				"الربع الرابع"
			]
		};
		monthValues$15 = {
			narrow: [
				"ي",
				"ف",
				"م",
				"أ",
				"م",
				"ي",
				"ي",
				"أ",
				"س",
				"أ",
				"ن",
				"د"
			],
			abbreviated: [
				"يناير",
				"فبراير",
				"مارس",
				"أبريل",
				"مايو",
				"يونيو",
				"يوليو",
				"أغسطس",
				"سبتمبر",
				"أكتوبر",
				"نوفمبر",
				"ديسمبر"
			],
			wide: [
				"يناير",
				"فبراير",
				"مارس",
				"أبريل",
				"مايو",
				"يونيو",
				"يوليو",
				"أغسطس",
				"سبتمبر",
				"أكتوبر",
				"نوفمبر",
				"ديسمبر"
			]
		};
		dayValues$15 = {
			narrow: [
				"ح",
				"ن",
				"ث",
				"ر",
				"خ",
				"ج",
				"س"
			],
			short: [
				"أحد",
				"اثنين",
				"ثلاثاء",
				"أربعاء",
				"خميس",
				"جمعة",
				"سبت"
			],
			abbreviated: [
				"أحد",
				"اثنين",
				"ثلاثاء",
				"أربعاء",
				"خميس",
				"جمعة",
				"سبت"
			],
			wide: [
				"الأحد",
				"الاثنين",
				"الثلاثاء",
				"الأربعاء",
				"الخميس",
				"الجمعة",
				"السبت"
			]
		};
		dayPeriodValues$15 = {
			narrow: {
				am: "ص",
				pm: "م",
				morning: "الصباح",
				noon: "الظهر",
				afternoon: "بعد الظهر",
				evening: "المساء",
				night: "الليل",
				midnight: "منتصف الليل"
			},
			abbreviated: {
				am: "ص",
				pm: "م",
				morning: "الصباح",
				noon: "الظهر",
				afternoon: "بعد الظهر",
				evening: "المساء",
				night: "الليل",
				midnight: "منتصف الليل"
			},
			wide: {
				am: "ص",
				pm: "م",
				morning: "الصباح",
				noon: "الظهر",
				afternoon: "بعد الظهر",
				evening: "المساء",
				night: "الليل",
				midnight: "منتصف الليل"
			}
		};
		formattingDayPeriodValues$13 = {
			narrow: {
				am: "ص",
				pm: "م",
				morning: "في الصباح",
				noon: "الظهر",
				afternoon: "بعد الظهر",
				evening: "في المساء",
				night: "في الليل",
				midnight: "منتصف الليل"
			},
			abbreviated: {
				am: "ص",
				pm: "م",
				morning: "في الصباح",
				noon: "الظهر",
				afternoon: "بعد الظهر",
				evening: "في المساء",
				night: "في الليل",
				midnight: "منتصف الليل"
			},
			wide: {
				am: "ص",
				pm: "م",
				morning: "في الصباح",
				noon: "الظهر",
				afternoon: "بعد الظهر",
				evening: "في المساء",
				night: "في الليل",
				midnight: "منتصف الليل"
			}
		};
		ordinalNumber$15 = (num) => String(num);
		localize$15 = {
			ordinalNumber: ordinalNumber$15,
			era: buildLocalizeFn({
				values: eraValues$15,
				defaultWidth: "wide"
			}),
			quarter: buildLocalizeFn({
				values: quarterValues$15,
				defaultWidth: "wide",
				argumentCallback: (quarter) => quarter - 1
			}),
			month: buildLocalizeFn({
				values: monthValues$15,
				defaultWidth: "wide"
			}),
			day: buildLocalizeFn({
				values: dayValues$15,
				defaultWidth: "wide"
			}),
			dayPeriod: buildLocalizeFn({
				values: dayPeriodValues$15,
				defaultWidth: "wide",
				formattingValues: formattingDayPeriodValues$13,
				defaultFormattingWidth: "wide"
			})
		};
	})))();
}
//#endregion
//#region ../node_modules/.store/date-fns@4.4.0-N3CoundlhH8enmbadGmv6Q/node_modules/date-fns/locale/ar/_lib/match.js
var matchOrdinalNumberPattern$15, parseOrdinalNumberPattern$15, matchEraPatterns$15, parseEraPatterns$15, matchQuarterPatterns$15, parseQuarterPatterns$15, matchMonthPatterns$15, parseMonthPatterns$15, matchDayPatterns$15, parseDayPatterns$15, matchDayPeriodPatterns$15, parseDayPeriodPatterns$15, match$15;
function init_match() {
	return (init_match = __esmMin((() => {
		matchOrdinalNumberPattern$15 = /^(\d+)(th|st|nd|rd)?/i;
		parseOrdinalNumberPattern$15 = /\d+/i;
		matchEraPatterns$15 = {
			narrow: /[قب]/,
			abbreviated: /[قب]\.م\./,
			wide: /(قبل|بعد) الميلاد/
		};
		parseEraPatterns$15 = { any: [/قبل/, /بعد/] };
		matchQuarterPatterns$15 = {
			narrow: /^[1234]/i,
			abbreviated: /ر[1234]/,
			wide: /الربع (الأول|الثاني|الثالث|الرابع)/
		};
		parseQuarterPatterns$15 = { any: [
			/1/i,
			/2/i,
			/3/i,
			/4/i
		] };
		matchMonthPatterns$15 = {
			narrow: /^[أيفمسند]/,
			abbreviated: /^(يناير|فبراير|مارس|أبريل|مايو|يونيو|يوليو|أغسطس|سبتمبر|أكتوبر|نوفمبر|ديسمبر)/,
			wide: /^(يناير|فبراير|مارس|أبريل|مايو|يونيو|يوليو|أغسطس|سبتمبر|أكتوبر|نوفمبر|ديسمبر)/
		};
		parseMonthPatterns$15 = {
			narrow: [
				/^ي/i,
				/^ف/i,
				/^م/i,
				/^أ/i,
				/^م/i,
				/^ي/i,
				/^ي/i,
				/^أ/i,
				/^س/i,
				/^أ/i,
				/^ن/i,
				/^د/i
			],
			any: [
				/^يناير/i,
				/^فبراير/i,
				/^مارس/i,
				/^أبريل/i,
				/^مايو/i,
				/^يونيو/i,
				/^يوليو/i,
				/^أغسطس/i,
				/^سبتمبر/i,
				/^أكتوبر/i,
				/^نوفمبر/i,
				/^ديسمبر/i
			]
		};
		matchDayPatterns$15 = {
			narrow: /^[حنثرخجس]/i,
			short: /^(أحد|اثنين|ثلاثاء|أربعاء|خميس|جمعة|سبت)/i,
			abbreviated: /^(أحد|اثنين|ثلاثاء|أربعاء|خميس|جمعة|سبت)/i,
			wide: /^(الأحد|الاثنين|الثلاثاء|الأربعاء|الخميس|الجمعة|السبت)/i
		};
		parseDayPatterns$15 = {
			narrow: [
				/^ح/i,
				/^ن/i,
				/^ث/i,
				/^ر/i,
				/^خ/i,
				/^ج/i,
				/^س/i
			],
			wide: [
				/^الأحد/i,
				/^الاثنين/i,
				/^الثلاثاء/i,
				/^الأربعاء/i,
				/^الخميس/i,
				/^الجمعة/i,
				/^السبت/i
			],
			any: [
				/^أح/i,
				/^اث/i,
				/^ث/i,
				/^أر/i,
				/^خ/i,
				/^ج/i,
				/^س/i
			]
		};
		matchDayPeriodPatterns$15 = {
			narrow: /^(ص|م|منتصف الليل|الظهر|بعد الظهر|في الصباح|في المساء|في الليل)/,
			any: /^(ص|م|منتصف الليل|الظهر|بعد الظهر|في الصباح|في المساء|في الليل)/
		};
		parseDayPeriodPatterns$15 = { any: {
			am: /^ص/,
			pm: /^م/,
			midnight: /منتصف الليل/,
			noon: /الظهر/,
			afternoon: /بعد الظهر/,
			morning: /في الصباح/,
			evening: /في المساء/,
			night: /في الليل/
		} };
		match$15 = {
			ordinalNumber: buildMatchPatternFn({
				matchPattern: matchOrdinalNumberPattern$15,
				parsePattern: parseOrdinalNumberPattern$15,
				valueCallback: (value) => parseInt(value, 10)
			}),
			era: buildMatchFn({
				matchPatterns: matchEraPatterns$15,
				defaultMatchWidth: "wide",
				parsePatterns: parseEraPatterns$15,
				defaultParseWidth: "any"
			}),
			quarter: buildMatchFn({
				matchPatterns: matchQuarterPatterns$15,
				defaultMatchWidth: "wide",
				parsePatterns: parseQuarterPatterns$15,
				defaultParseWidth: "any",
				valueCallback: (index) => index + 1
			}),
			month: buildMatchFn({
				matchPatterns: matchMonthPatterns$15,
				defaultMatchWidth: "wide",
				parsePatterns: parseMonthPatterns$15,
				defaultParseWidth: "any"
			}),
			day: buildMatchFn({
				matchPatterns: matchDayPatterns$15,
				defaultMatchWidth: "wide",
				parsePatterns: parseDayPatterns$15,
				defaultParseWidth: "any"
			}),
			dayPeriod: buildMatchFn({
				matchPatterns: matchDayPeriodPatterns$15,
				defaultMatchWidth: "any",
				parsePatterns: parseDayPeriodPatterns$15,
				defaultParseWidth: "any"
			})
		};
	})))();
}
//#endregion
//#region ../node_modules/.store/date-fns@4.4.0-N3CoundlhH8enmbadGmv6Q/node_modules/date-fns/locale/ar.js
var ar;
function init_ar() {
	return (init_ar = __esmMin((() => {
		init_formatDistance();
		init_formatLong();
		init_formatRelative();
		init_localize();
		init_match();
		ar = {
			code: "ar",
			formatDistance: formatDistance$15,
			formatLong: formatLong$15,
			formatRelative: formatRelative$15,
			localize: localize$15,
			match: match$15,
			options: {
				weekStartsOn: 6,
				firstWeekContainsDate: 1
			}
		};
	})))();
}
//#endregion
//#region ../node_modules/.store/date-fns@4.4.0-N3CoundlhH8enmbadGmv6Q/node_modules/date-fns/locale/de/_lib/formatDistance.js
var formatDistanceLocale$14, formatDistance$14;
function init_formatDistance$1() {
	return (init_formatDistance$1 = __esmMin((() => {
		formatDistanceLocale$14 = {
			lessThanXSeconds: {
				standalone: {
					one: "weniger als 1 Sekunde",
					other: "weniger als {{count}} Sekunden"
				},
				withPreposition: {
					one: "weniger als 1 Sekunde",
					other: "weniger als {{count}} Sekunden"
				}
			},
			xSeconds: {
				standalone: {
					one: "1 Sekunde",
					other: "{{count}} Sekunden"
				},
				withPreposition: {
					one: "1 Sekunde",
					other: "{{count}} Sekunden"
				}
			},
			halfAMinute: {
				standalone: "eine halbe Minute",
				withPreposition: "einer halben Minute"
			},
			lessThanXMinutes: {
				standalone: {
					one: "weniger als 1 Minute",
					other: "weniger als {{count}} Minuten"
				},
				withPreposition: {
					one: "weniger als 1 Minute",
					other: "weniger als {{count}} Minuten"
				}
			},
			xMinutes: {
				standalone: {
					one: "1 Minute",
					other: "{{count}} Minuten"
				},
				withPreposition: {
					one: "1 Minute",
					other: "{{count}} Minuten"
				}
			},
			aboutXHours: {
				standalone: {
					one: "etwa 1 Stunde",
					other: "etwa {{count}} Stunden"
				},
				withPreposition: {
					one: "etwa 1 Stunde",
					other: "etwa {{count}} Stunden"
				}
			},
			xHours: {
				standalone: {
					one: "1 Stunde",
					other: "{{count}} Stunden"
				},
				withPreposition: {
					one: "1 Stunde",
					other: "{{count}} Stunden"
				}
			},
			xDays: {
				standalone: {
					one: "1 Tag",
					other: "{{count}} Tage"
				},
				withPreposition: {
					one: "1 Tag",
					other: "{{count}} Tagen"
				}
			},
			aboutXWeeks: {
				standalone: {
					one: "etwa 1 Woche",
					other: "etwa {{count}} Wochen"
				},
				withPreposition: {
					one: "etwa 1 Woche",
					other: "etwa {{count}} Wochen"
				}
			},
			xWeeks: {
				standalone: {
					one: "1 Woche",
					other: "{{count}} Wochen"
				},
				withPreposition: {
					one: "1 Woche",
					other: "{{count}} Wochen"
				}
			},
			aboutXMonths: {
				standalone: {
					one: "etwa 1 Monat",
					other: "etwa {{count}} Monate"
				},
				withPreposition: {
					one: "etwa 1 Monat",
					other: "etwa {{count}} Monaten"
				}
			},
			xMonths: {
				standalone: {
					one: "1 Monat",
					other: "{{count}} Monate"
				},
				withPreposition: {
					one: "1 Monat",
					other: "{{count}} Monaten"
				}
			},
			aboutXYears: {
				standalone: {
					one: "etwa 1 Jahr",
					other: "etwa {{count}} Jahre"
				},
				withPreposition: {
					one: "etwa 1 Jahr",
					other: "etwa {{count}} Jahren"
				}
			},
			xYears: {
				standalone: {
					one: "1 Jahr",
					other: "{{count}} Jahre"
				},
				withPreposition: {
					one: "1 Jahr",
					other: "{{count}} Jahren"
				}
			},
			overXYears: {
				standalone: {
					one: "mehr als 1 Jahr",
					other: "mehr als {{count}} Jahre"
				},
				withPreposition: {
					one: "mehr als 1 Jahr",
					other: "mehr als {{count}} Jahren"
				}
			},
			almostXYears: {
				standalone: {
					one: "fast 1 Jahr",
					other: "fast {{count}} Jahre"
				},
				withPreposition: {
					one: "fast 1 Jahr",
					other: "fast {{count}} Jahren"
				}
			}
		};
		formatDistance$14 = (token, count, options) => {
			let result;
			const tokenValue = options?.addSuffix ? formatDistanceLocale$14[token].withPreposition : formatDistanceLocale$14[token].standalone;
			if (typeof tokenValue === "string") result = tokenValue;
			else if (count === 1) result = tokenValue.one;
			else result = tokenValue.other.replace("{{count}}", String(count));
			if (options?.addSuffix) {
				if (options.comparison && options.comparison > 0) return "in " + result;
				else return "vor " + result;
			}
			return result;
		};
	})))();
}
//#endregion
//#region ../node_modules/.store/date-fns@4.4.0-N3CoundlhH8enmbadGmv6Q/node_modules/date-fns/locale/de/_lib/formatLong.js
var dateFormats$14, timeFormats$14, dateTimeFormats$14, formatLong$14;
function init_formatLong$1() {
	return (init_formatLong$1 = __esmMin((() => {
		dateFormats$14 = {
			full: "EEEE, do MMMM y",
			long: "do MMMM y",
			medium: "do MMM y",
			short: "dd.MM.y"
		};
		timeFormats$14 = {
			full: "HH:mm:ss zzzz",
			long: "HH:mm:ss z",
			medium: "HH:mm:ss",
			short: "HH:mm"
		};
		dateTimeFormats$14 = {
			full: "{{date}} 'um' {{time}}",
			long: "{{date}} 'um' {{time}}",
			medium: "{{date}} {{time}}",
			short: "{{date}} {{time}}"
		};
		formatLong$14 = {
			date: buildFormatLongFn({
				formats: dateFormats$14,
				defaultWidth: "full"
			}),
			time: buildFormatLongFn({
				formats: timeFormats$14,
				defaultWidth: "full"
			}),
			dateTime: buildFormatLongFn({
				formats: dateTimeFormats$14,
				defaultWidth: "full"
			})
		};
	})))();
}
//#endregion
//#region ../node_modules/.store/date-fns@4.4.0-N3CoundlhH8enmbadGmv6Q/node_modules/date-fns/locale/de/_lib/formatRelative.js
var formatRelativeLocale$14, formatRelative$14;
function init_formatRelative$1() {
	return (init_formatRelative$1 = __esmMin((() => {
		formatRelativeLocale$14 = {
			lastWeek: "'letzten' eeee 'um' p",
			yesterday: "'gestern um' p",
			today: "'heute um' p",
			tomorrow: "'morgen um' p",
			nextWeek: "eeee 'um' p",
			other: "P"
		};
		formatRelative$14 = (token, _date, _baseDate, _options) => formatRelativeLocale$14[token];
	})))();
}
//#endregion
//#region ../node_modules/.store/date-fns@4.4.0-N3CoundlhH8enmbadGmv6Q/node_modules/date-fns/locale/de/_lib/localize.js
var eraValues$14, quarterValues$14, monthValues$14, formattingMonthValues$1, dayValues$14, dayPeriodValues$14, formattingDayPeriodValues$12, ordinalNumber$14, localize$14;
function init_localize$1() {
	return (init_localize$1 = __esmMin((() => {
		eraValues$14 = {
			narrow: ["v.Chr.", "n.Chr."],
			abbreviated: ["v.Chr.", "n.Chr."],
			wide: ["vor Christus", "nach Christus"]
		};
		quarterValues$14 = {
			narrow: [
				"1",
				"2",
				"3",
				"4"
			],
			abbreviated: [
				"Q1",
				"Q2",
				"Q3",
				"Q4"
			],
			wide: [
				"1. Quartal",
				"2. Quartal",
				"3. Quartal",
				"4. Quartal"
			]
		};
		monthValues$14 = {
			narrow: [
				"J",
				"F",
				"M",
				"A",
				"M",
				"J",
				"J",
				"A",
				"S",
				"O",
				"N",
				"D"
			],
			abbreviated: [
				"Jan",
				"Feb",
				"Mär",
				"Apr",
				"Mai",
				"Jun",
				"Jul",
				"Aug",
				"Sep",
				"Okt",
				"Nov",
				"Dez"
			],
			wide: [
				"Januar",
				"Februar",
				"März",
				"April",
				"Mai",
				"Juni",
				"Juli",
				"August",
				"September",
				"Oktober",
				"November",
				"Dezember"
			]
		};
		formattingMonthValues$1 = {
			narrow: monthValues$14.narrow,
			abbreviated: [
				"Jan.",
				"Feb.",
				"März",
				"Apr.",
				"Mai",
				"Juni",
				"Juli",
				"Aug.",
				"Sep.",
				"Okt.",
				"Nov.",
				"Dez."
			],
			wide: monthValues$14.wide
		};
		dayValues$14 = {
			narrow: [
				"S",
				"M",
				"D",
				"M",
				"D",
				"F",
				"S"
			],
			short: [
				"So",
				"Mo",
				"Di",
				"Mi",
				"Do",
				"Fr",
				"Sa"
			],
			abbreviated: [
				"So.",
				"Mo.",
				"Di.",
				"Mi.",
				"Do.",
				"Fr.",
				"Sa."
			],
			wide: [
				"Sonntag",
				"Montag",
				"Dienstag",
				"Mittwoch",
				"Donnerstag",
				"Freitag",
				"Samstag"
			]
		};
		dayPeriodValues$14 = {
			narrow: {
				am: "vm.",
				pm: "nm.",
				midnight: "Mitternacht",
				noon: "Mittag",
				morning: "Morgen",
				afternoon: "Nachm.",
				evening: "Abend",
				night: "Nacht"
			},
			abbreviated: {
				am: "vorm.",
				pm: "nachm.",
				midnight: "Mitternacht",
				noon: "Mittag",
				morning: "Morgen",
				afternoon: "Nachmittag",
				evening: "Abend",
				night: "Nacht"
			},
			wide: {
				am: "vormittags",
				pm: "nachmittags",
				midnight: "Mitternacht",
				noon: "Mittag",
				morning: "Morgen",
				afternoon: "Nachmittag",
				evening: "Abend",
				night: "Nacht"
			}
		};
		formattingDayPeriodValues$12 = {
			narrow: {
				am: "vm.",
				pm: "nm.",
				midnight: "Mitternacht",
				noon: "Mittag",
				morning: "morgens",
				afternoon: "nachm.",
				evening: "abends",
				night: "nachts"
			},
			abbreviated: {
				am: "vorm.",
				pm: "nachm.",
				midnight: "Mitternacht",
				noon: "Mittag",
				morning: "morgens",
				afternoon: "nachmittags",
				evening: "abends",
				night: "nachts"
			},
			wide: {
				am: "vormittags",
				pm: "nachmittags",
				midnight: "Mitternacht",
				noon: "Mittag",
				morning: "morgens",
				afternoon: "nachmittags",
				evening: "abends",
				night: "nachts"
			}
		};
		ordinalNumber$14 = (dirtyNumber) => {
			return Number(dirtyNumber) + ".";
		};
		localize$14 = {
			ordinalNumber: ordinalNumber$14,
			era: buildLocalizeFn({
				values: eraValues$14,
				defaultWidth: "wide"
			}),
			quarter: buildLocalizeFn({
				values: quarterValues$14,
				defaultWidth: "wide",
				argumentCallback: (quarter) => quarter - 1
			}),
			month: buildLocalizeFn({
				values: monthValues$14,
				formattingValues: formattingMonthValues$1,
				defaultWidth: "wide"
			}),
			day: buildLocalizeFn({
				values: dayValues$14,
				defaultWidth: "wide"
			}),
			dayPeriod: buildLocalizeFn({
				values: dayPeriodValues$14,
				defaultWidth: "wide",
				formattingValues: formattingDayPeriodValues$12,
				defaultFormattingWidth: "wide"
			})
		};
	})))();
}
//#endregion
//#region ../node_modules/.store/date-fns@4.4.0-N3CoundlhH8enmbadGmv6Q/node_modules/date-fns/locale/de/_lib/match.js
var matchOrdinalNumberPattern$14, parseOrdinalNumberPattern$14, matchEraPatterns$14, parseEraPatterns$14, matchQuarterPatterns$14, parseQuarterPatterns$14, matchMonthPatterns$14, parseMonthPatterns$14, matchDayPatterns$14, parseDayPatterns$14, matchDayPeriodPatterns$14, parseDayPeriodPatterns$14, match$14;
function init_match$1() {
	return (init_match$1 = __esmMin((() => {
		matchOrdinalNumberPattern$14 = /^(\d+)(\.)?/i;
		parseOrdinalNumberPattern$14 = /\d+/i;
		matchEraPatterns$14 = {
			narrow: /^(v\.? ?Chr\.?|n\.? ?Chr\.?)/i,
			abbreviated: /^(v\.? ?Chr\.?|n\.? ?Chr\.?)/i,
			wide: /^(vor Christus|vor unserer Zeitrechnung|nach Christus|unserer Zeitrechnung)/i
		};
		parseEraPatterns$14 = { any: [/^v/i, /^n/i] };
		matchQuarterPatterns$14 = {
			narrow: /^[1234]/i,
			abbreviated: /^q[1234]/i,
			wide: /^[1234](\.)? Quartal/i
		};
		parseQuarterPatterns$14 = { any: [
			/1/i,
			/2/i,
			/3/i,
			/4/i
		] };
		matchMonthPatterns$14 = {
			narrow: /^[jfmasond]/i,
			abbreviated: /^(j[aä]n|feb|mär[z]?|apr|mai|jun[i]?|jul[i]?|aug|sep|okt|nov|dez)\.?/i,
			wide: /^(jänner|januar|februar|märz|april|mai|juni|juli|august|september|oktober|november|dezember)/i
		};
		parseMonthPatterns$14 = {
			narrow: [
				/^j/i,
				/^f/i,
				/^m/i,
				/^a/i,
				/^m/i,
				/^j/i,
				/^j/i,
				/^a/i,
				/^s/i,
				/^o/i,
				/^n/i,
				/^d/i
			],
			any: [
				/^j[aä]/i,
				/^f/i,
				/^mär/i,
				/^ap/i,
				/^mai/i,
				/^jun/i,
				/^jul/i,
				/^au/i,
				/^s/i,
				/^o/i,
				/^n/i,
				/^d/i
			]
		};
		matchDayPatterns$14 = {
			narrow: /^[smdmf]/i,
			short: /^(so|mo|di|mi|do|fr|sa)/i,
			abbreviated: /^(son?|mon?|die?|mit?|don?|fre?|sam?)\.?/i,
			wide: /^(sonntag|montag|dienstag|mittwoch|donnerstag|freitag|samstag)/i
		};
		parseDayPatterns$14 = { any: [
			/^so/i,
			/^mo/i,
			/^di/i,
			/^mi/i,
			/^do/i,
			/^f/i,
			/^sa/i
		] };
		matchDayPeriodPatterns$14 = {
			narrow: /^(vm\.?|nm\.?|Mitternacht|Mittag|morgens|nachm\.?|abends|nachts)/i,
			abbreviated: /^(vorm\.?|nachm\.?|Mitternacht|Mittag|morgens|nachm\.?|abends|nachts)/i,
			wide: /^(vormittags|nachmittags|Mitternacht|Mittag|morgens|nachmittags|abends|nachts)/i
		};
		parseDayPeriodPatterns$14 = { any: {
			am: /^v/i,
			pm: /^n/i,
			midnight: /^Mitte/i,
			noon: /^Mitta/i,
			morning: /morgens/i,
			afternoon: /nachmittags/i,
			evening: /abends/i,
			night: /nachts/i
		} };
		match$14 = {
			ordinalNumber: buildMatchPatternFn({
				matchPattern: matchOrdinalNumberPattern$14,
				parsePattern: parseOrdinalNumberPattern$14,
				valueCallback: (value) => parseInt(value)
			}),
			era: buildMatchFn({
				matchPatterns: matchEraPatterns$14,
				defaultMatchWidth: "wide",
				parsePatterns: parseEraPatterns$14,
				defaultParseWidth: "any"
			}),
			quarter: buildMatchFn({
				matchPatterns: matchQuarterPatterns$14,
				defaultMatchWidth: "wide",
				parsePatterns: parseQuarterPatterns$14,
				defaultParseWidth: "any",
				valueCallback: (index) => index + 1
			}),
			month: buildMatchFn({
				matchPatterns: matchMonthPatterns$14,
				defaultMatchWidth: "wide",
				parsePatterns: parseMonthPatterns$14,
				defaultParseWidth: "any"
			}),
			day: buildMatchFn({
				matchPatterns: matchDayPatterns$14,
				defaultMatchWidth: "wide",
				parsePatterns: parseDayPatterns$14,
				defaultParseWidth: "any"
			}),
			dayPeriod: buildMatchFn({
				matchPatterns: matchDayPeriodPatterns$14,
				defaultMatchWidth: "wide",
				parsePatterns: parseDayPeriodPatterns$14,
				defaultParseWidth: "any"
			})
		};
	})))();
}
//#endregion
//#region ../node_modules/.store/date-fns@4.4.0-N3CoundlhH8enmbadGmv6Q/node_modules/date-fns/locale/de.js
var de;
function init_de() {
	return (init_de = __esmMin((() => {
		init_formatDistance$1();
		init_formatLong$1();
		init_formatRelative$1();
		init_localize$1();
		init_match$1();
		de = {
			code: "de",
			formatDistance: formatDistance$14,
			formatLong: formatLong$14,
			formatRelative: formatRelative$14,
			localize: localize$14,
			match: match$14,
			options: {
				weekStartsOn: 1,
				firstWeekContainsDate: 4
			}
		};
	})))();
}
//#endregion
//#region ../node_modules/.store/date-fns@4.4.0-N3CoundlhH8enmbadGmv6Q/node_modules/date-fns/locale/es/_lib/formatDistance.js
var formatDistanceLocale$13, formatDistance$13;
function init_formatDistance$2() {
	return (init_formatDistance$2 = __esmMin((() => {
		formatDistanceLocale$13 = {
			lessThanXSeconds: {
				one: "menos de un segundo",
				other: "menos de {{count}} segundos"
			},
			xSeconds: {
				one: "1 segundo",
				other: "{{count}} segundos"
			},
			halfAMinute: "medio minuto",
			lessThanXMinutes: {
				one: "menos de un minuto",
				other: "menos de {{count}} minutos"
			},
			xMinutes: {
				one: "1 minuto",
				other: "{{count}} minutos"
			},
			aboutXHours: {
				one: "alrededor de 1 hora",
				other: "alrededor de {{count}} horas"
			},
			xHours: {
				one: "1 hora",
				other: "{{count}} horas"
			},
			xDays: {
				one: "1 día",
				other: "{{count}} días"
			},
			aboutXWeeks: {
				one: "alrededor de 1 semana",
				other: "alrededor de {{count}} semanas"
			},
			xWeeks: {
				one: "1 semana",
				other: "{{count}} semanas"
			},
			aboutXMonths: {
				one: "alrededor de 1 mes",
				other: "alrededor de {{count}} meses"
			},
			xMonths: {
				one: "1 mes",
				other: "{{count}} meses"
			},
			aboutXYears: {
				one: "alrededor de 1 año",
				other: "alrededor de {{count}} años"
			},
			xYears: {
				one: "1 año",
				other: "{{count}} años"
			},
			overXYears: {
				one: "más de 1 año",
				other: "más de {{count}} años"
			},
			almostXYears: {
				one: "casi 1 año",
				other: "casi {{count}} años"
			}
		};
		formatDistance$13 = (token, count, options) => {
			let result;
			const tokenValue = formatDistanceLocale$13[token];
			if (typeof tokenValue === "string") result = tokenValue;
			else if (count === 1) result = tokenValue.one;
			else result = tokenValue.other.replace("{{count}}", count.toString());
			if (options?.addSuffix) {
				if (options.comparison && options.comparison > 0) return "en " + result;
				else return "hace " + result;
			}
			return result;
		};
	})))();
}
//#endregion
//#region ../node_modules/.store/date-fns@4.4.0-N3CoundlhH8enmbadGmv6Q/node_modules/date-fns/locale/es/_lib/formatLong.js
var dateFormats$13, timeFormats$13, dateTimeFormats$13, formatLong$13;
function init_formatLong$2() {
	return (init_formatLong$2 = __esmMin((() => {
		dateFormats$13 = {
			full: "EEEE, d 'de' MMMM 'de' y",
			long: "d 'de' MMMM 'de' y",
			medium: "d MMM y",
			short: "dd/MM/y"
		};
		timeFormats$13 = {
			full: "HH:mm:ss zzzz",
			long: "HH:mm:ss z",
			medium: "HH:mm:ss",
			short: "HH:mm"
		};
		dateTimeFormats$13 = {
			full: "{{date}} 'a las' {{time}}",
			long: "{{date}} 'a las' {{time}}",
			medium: "{{date}}, {{time}}",
			short: "{{date}}, {{time}}"
		};
		formatLong$13 = {
			date: buildFormatLongFn({
				formats: dateFormats$13,
				defaultWidth: "full"
			}),
			time: buildFormatLongFn({
				formats: timeFormats$13,
				defaultWidth: "full"
			}),
			dateTime: buildFormatLongFn({
				formats: dateTimeFormats$13,
				defaultWidth: "full"
			})
		};
	})))();
}
//#endregion
//#region ../node_modules/.store/date-fns@4.4.0-N3CoundlhH8enmbadGmv6Q/node_modules/date-fns/locale/es/_lib/formatRelative.js
var formatRelativeLocale$13, formatRelativeLocalePlural, formatRelative$13;
function init_formatRelative$2() {
	return (init_formatRelative$2 = __esmMin((() => {
		formatRelativeLocale$13 = {
			lastWeek: "'el' eeee 'pasado a la' p",
			yesterday: "'ayer a la' p",
			today: "'hoy a la' p",
			tomorrow: "'mañana a la' p",
			nextWeek: "eeee 'a la' p",
			other: "P"
		};
		formatRelativeLocalePlural = {
			lastWeek: "'el' eeee 'pasado a las' p",
			yesterday: "'ayer a las' p",
			today: "'hoy a las' p",
			tomorrow: "'mañana a las' p",
			nextWeek: "eeee 'a las' p",
			other: "P"
		};
		formatRelative$13 = (token, date, _baseDate, _options) => {
			if (date.getHours() !== 1) return formatRelativeLocalePlural[token];
			else return formatRelativeLocale$13[token];
		};
	})))();
}
//#endregion
//#region ../node_modules/.store/date-fns@4.4.0-N3CoundlhH8enmbadGmv6Q/node_modules/date-fns/locale/es/_lib/localize.js
var eraValues$13, quarterValues$13, monthValues$13, dayValues$13, dayPeriodValues$13, formattingDayPeriodValues$11, ordinalNumber$13, localize$13;
function init_localize$2() {
	return (init_localize$2 = __esmMin((() => {
		eraValues$13 = {
			narrow: ["AC", "DC"],
			abbreviated: ["AC", "DC"],
			wide: ["antes de cristo", "después de cristo"]
		};
		quarterValues$13 = {
			narrow: [
				"1",
				"2",
				"3",
				"4"
			],
			abbreviated: [
				"T1",
				"T2",
				"T3",
				"T4"
			],
			wide: [
				"1º trimestre",
				"2º trimestre",
				"3º trimestre",
				"4º trimestre"
			]
		};
		monthValues$13 = {
			narrow: [
				"e",
				"f",
				"m",
				"a",
				"m",
				"j",
				"j",
				"a",
				"s",
				"o",
				"n",
				"d"
			],
			abbreviated: [
				"ene",
				"feb",
				"mar",
				"abr",
				"may",
				"jun",
				"jul",
				"ago",
				"sep",
				"oct",
				"nov",
				"dic"
			],
			wide: [
				"enero",
				"febrero",
				"marzo",
				"abril",
				"mayo",
				"junio",
				"julio",
				"agosto",
				"septiembre",
				"octubre",
				"noviembre",
				"diciembre"
			]
		};
		dayValues$13 = {
			narrow: [
				"d",
				"l",
				"m",
				"m",
				"j",
				"v",
				"s"
			],
			short: [
				"do",
				"lu",
				"ma",
				"mi",
				"ju",
				"vi",
				"sá"
			],
			abbreviated: [
				"dom",
				"lun",
				"mar",
				"mié",
				"jue",
				"vie",
				"sáb"
			],
			wide: [
				"domingo",
				"lunes",
				"martes",
				"miércoles",
				"jueves",
				"viernes",
				"sábado"
			]
		};
		dayPeriodValues$13 = {
			narrow: {
				am: "a",
				pm: "p",
				midnight: "mn",
				noon: "md",
				morning: "mañana",
				afternoon: "tarde",
				evening: "tarde",
				night: "noche"
			},
			abbreviated: {
				am: "AM",
				pm: "PM",
				midnight: "medianoche",
				noon: "mediodia",
				morning: "mañana",
				afternoon: "tarde",
				evening: "tarde",
				night: "noche"
			},
			wide: {
				am: "a.m.",
				pm: "p.m.",
				midnight: "medianoche",
				noon: "mediodia",
				morning: "mañana",
				afternoon: "tarde",
				evening: "tarde",
				night: "noche"
			}
		};
		formattingDayPeriodValues$11 = {
			narrow: {
				am: "a",
				pm: "p",
				midnight: "mn",
				noon: "md",
				morning: "de la mañana",
				afternoon: "de la tarde",
				evening: "de la tarde",
				night: "de la noche"
			},
			abbreviated: {
				am: "AM",
				pm: "PM",
				midnight: "medianoche",
				noon: "mediodia",
				morning: "de la mañana",
				afternoon: "de la tarde",
				evening: "de la tarde",
				night: "de la noche"
			},
			wide: {
				am: "a.m.",
				pm: "p.m.",
				midnight: "medianoche",
				noon: "mediodia",
				morning: "de la mañana",
				afternoon: "de la tarde",
				evening: "de la tarde",
				night: "de la noche"
			}
		};
		ordinalNumber$13 = (dirtyNumber, _options) => {
			return Number(dirtyNumber) + "º";
		};
		localize$13 = {
			ordinalNumber: ordinalNumber$13,
			era: buildLocalizeFn({
				values: eraValues$13,
				defaultWidth: "wide"
			}),
			quarter: buildLocalizeFn({
				values: quarterValues$13,
				defaultWidth: "wide",
				argumentCallback: (quarter) => Number(quarter) - 1
			}),
			month: buildLocalizeFn({
				values: monthValues$13,
				defaultWidth: "wide"
			}),
			day: buildLocalizeFn({
				values: dayValues$13,
				defaultWidth: "wide"
			}),
			dayPeriod: buildLocalizeFn({
				values: dayPeriodValues$13,
				defaultWidth: "wide",
				formattingValues: formattingDayPeriodValues$11,
				defaultFormattingWidth: "wide"
			})
		};
	})))();
}
//#endregion
//#region ../node_modules/.store/date-fns@4.4.0-N3CoundlhH8enmbadGmv6Q/node_modules/date-fns/locale/es/_lib/match.js
var matchOrdinalNumberPattern$13, parseOrdinalNumberPattern$13, matchEraPatterns$13, parseEraPatterns$13, matchQuarterPatterns$13, parseQuarterPatterns$13, matchMonthPatterns$13, parseMonthPatterns$13, matchDayPatterns$13, parseDayPatterns$13, matchDayPeriodPatterns$13, parseDayPeriodPatterns$13, match$13;
function init_match$2() {
	return (init_match$2 = __esmMin((() => {
		matchOrdinalNumberPattern$13 = /^(\d+)(º)?/i;
		parseOrdinalNumberPattern$13 = /\d+/i;
		matchEraPatterns$13 = {
			narrow: /^(ac|dc|a|d)/i,
			abbreviated: /^(a\.?\s?c\.?|a\.?\s?e\.?\s?c\.?|d\.?\s?c\.?|e\.?\s?c\.?)/i,
			wide: /^(antes de cristo|antes de la era com[uú]n|despu[eé]s de cristo|era com[uú]n)/i
		};
		parseEraPatterns$13 = {
			any: [/^ac/i, /^dc/i],
			wide: [/^(antes de cristo|antes de la era com[uú]n)/i, /^(despu[eé]s de cristo|era com[uú]n)/i]
		};
		matchQuarterPatterns$13 = {
			narrow: /^[1234]/i,
			abbreviated: /^T[1234]/i,
			wide: /^[1234](º)? trimestre/i
		};
		parseQuarterPatterns$13 = { any: [
			/1/i,
			/2/i,
			/3/i,
			/4/i
		] };
		matchMonthPatterns$13 = {
			narrow: /^[efmajsond]/i,
			abbreviated: /^(ene|feb|mar|abr|may|jun|jul|ago|sep|oct|nov|dic)/i,
			wide: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i
		};
		parseMonthPatterns$13 = {
			narrow: [
				/^e/i,
				/^f/i,
				/^m/i,
				/^a/i,
				/^m/i,
				/^j/i,
				/^j/i,
				/^a/i,
				/^s/i,
				/^o/i,
				/^n/i,
				/^d/i
			],
			any: [
				/^en/i,
				/^feb/i,
				/^mar/i,
				/^abr/i,
				/^may/i,
				/^jun/i,
				/^jul/i,
				/^ago/i,
				/^sep/i,
				/^oct/i,
				/^nov/i,
				/^dic/i
			]
		};
		matchDayPatterns$13 = {
			narrow: /^[dlmjvs]/i,
			short: /^(do|lu|ma|mi|ju|vi|s[áa])/i,
			abbreviated: /^(dom|lun|mar|mi[ée]|jue|vie|s[áa]b)/i,
			wide: /^(domingo|lunes|martes|mi[ée]rcoles|jueves|viernes|s[áa]bado)/i
		};
		parseDayPatterns$13 = {
			narrow: [
				/^d/i,
				/^l/i,
				/^m/i,
				/^m/i,
				/^j/i,
				/^v/i,
				/^s/i
			],
			any: [
				/^do/i,
				/^lu/i,
				/^ma/i,
				/^mi/i,
				/^ju/i,
				/^vi/i,
				/^sa/i
			]
		};
		matchDayPeriodPatterns$13 = {
			narrow: /^(a|p|mn|md|(de la|a las) (mañana|tarde|noche))/i,
			any: /^([ap]\.?\s?m\.?|medianoche|mediodia|(de la|a las) (mañana|tarde|noche))/i
		};
		parseDayPeriodPatterns$13 = { any: {
			am: /^a/i,
			pm: /^p/i,
			midnight: /^mn/i,
			noon: /^md/i,
			morning: /mañana/i,
			afternoon: /tarde/i,
			evening: /tarde/i,
			night: /noche/i
		} };
		match$13 = {
			ordinalNumber: buildMatchPatternFn({
				matchPattern: matchOrdinalNumberPattern$13,
				parsePattern: parseOrdinalNumberPattern$13,
				valueCallback: function(value) {
					return parseInt(value, 10);
				}
			}),
			era: buildMatchFn({
				matchPatterns: matchEraPatterns$13,
				defaultMatchWidth: "wide",
				parsePatterns: parseEraPatterns$13,
				defaultParseWidth: "any"
			}),
			quarter: buildMatchFn({
				matchPatterns: matchQuarterPatterns$13,
				defaultMatchWidth: "wide",
				parsePatterns: parseQuarterPatterns$13,
				defaultParseWidth: "any",
				valueCallback: (index) => index + 1
			}),
			month: buildMatchFn({
				matchPatterns: matchMonthPatterns$13,
				defaultMatchWidth: "wide",
				parsePatterns: parseMonthPatterns$13,
				defaultParseWidth: "any"
			}),
			day: buildMatchFn({
				matchPatterns: matchDayPatterns$13,
				defaultMatchWidth: "wide",
				parsePatterns: parseDayPatterns$13,
				defaultParseWidth: "any"
			}),
			dayPeriod: buildMatchFn({
				matchPatterns: matchDayPeriodPatterns$13,
				defaultMatchWidth: "any",
				parsePatterns: parseDayPeriodPatterns$13,
				defaultParseWidth: "any"
			})
		};
	})))();
}
//#endregion
//#region ../node_modules/.store/date-fns@4.4.0-N3CoundlhH8enmbadGmv6Q/node_modules/date-fns/locale/es.js
var es;
function init_es() {
	return (init_es = __esmMin((() => {
		init_formatDistance$2();
		init_formatLong$2();
		init_formatRelative$2();
		init_localize$2();
		init_match$2();
		es = {
			code: "es",
			formatDistance: formatDistance$13,
			formatLong: formatLong$13,
			formatRelative: formatRelative$13,
			localize: localize$13,
			match: match$13,
			options: {
				weekStartsOn: 1,
				firstWeekContainsDate: 1
			}
		};
	})))();
}
//#endregion
//#region ../node_modules/.store/date-fns@4.4.0-N3CoundlhH8enmbadGmv6Q/node_modules/date-fns/locale/fr/_lib/formatDistance.js
var formatDistanceLocale$12, formatDistance$12;
function init_formatDistance$3() {
	return (init_formatDistance$3 = __esmMin((() => {
		formatDistanceLocale$12 = {
			lessThanXSeconds: {
				one: "moins d’une seconde",
				other: "moins de {{count}} secondes"
			},
			xSeconds: {
				one: "1 seconde",
				other: "{{count}} secondes"
			},
			halfAMinute: "30 secondes",
			lessThanXMinutes: {
				one: "moins d’une minute",
				other: "moins de {{count}} minutes"
			},
			xMinutes: {
				one: "1 minute",
				other: "{{count}} minutes"
			},
			aboutXHours: {
				one: "environ 1 heure",
				other: "environ {{count}} heures"
			},
			xHours: {
				one: "1 heure",
				other: "{{count}} heures"
			},
			xDays: {
				one: "1 jour",
				other: "{{count}} jours"
			},
			aboutXWeeks: {
				one: "environ 1 semaine",
				other: "environ {{count}} semaines"
			},
			xWeeks: {
				one: "1 semaine",
				other: "{{count}} semaines"
			},
			aboutXMonths: {
				one: "environ 1 mois",
				other: "environ {{count}} mois"
			},
			xMonths: {
				one: "1 mois",
				other: "{{count}} mois"
			},
			aboutXYears: {
				one: "environ 1 an",
				other: "environ {{count}} ans"
			},
			xYears: {
				one: "1 an",
				other: "{{count}} ans"
			},
			overXYears: {
				one: "plus d’un an",
				other: "plus de {{count}} ans"
			},
			almostXYears: {
				one: "presqu’un an",
				other: "presque {{count}} ans"
			}
		};
		formatDistance$12 = (token, count, options) => {
			let result;
			const form = formatDistanceLocale$12[token];
			if (typeof form === "string") result = form;
			else if (count === 1) result = form.one;
			else result = form.other.replace("{{count}}", String(count));
			if (options?.addSuffix) {
				if (options.comparison && options.comparison > 0) return "dans " + result;
				else return "il y a " + result;
			}
			return result;
		};
	})))();
}
//#endregion
//#region ../node_modules/.store/date-fns@4.4.0-N3CoundlhH8enmbadGmv6Q/node_modules/date-fns/locale/fr/_lib/formatLong.js
var dateFormats$12, timeFormats$12, dateTimeFormats$12, formatLong$12;
function init_formatLong$3() {
	return (init_formatLong$3 = __esmMin((() => {
		dateFormats$12 = {
			full: "EEEE d MMMM y",
			long: "d MMMM y",
			medium: "d MMM y",
			short: "dd/MM/y"
		};
		timeFormats$12 = {
			full: "HH:mm:ss zzzz",
			long: "HH:mm:ss z",
			medium: "HH:mm:ss",
			short: "HH:mm"
		};
		dateTimeFormats$12 = {
			full: "{{date}} 'à' {{time}}",
			long: "{{date}} 'à' {{time}}",
			medium: "{{date}}, {{time}}",
			short: "{{date}}, {{time}}"
		};
		formatLong$12 = {
			date: buildFormatLongFn({
				formats: dateFormats$12,
				defaultWidth: "full"
			}),
			time: buildFormatLongFn({
				formats: timeFormats$12,
				defaultWidth: "full"
			}),
			dateTime: buildFormatLongFn({
				formats: dateTimeFormats$12,
				defaultWidth: "full"
			})
		};
	})))();
}
//#endregion
//#region ../node_modules/.store/date-fns@4.4.0-N3CoundlhH8enmbadGmv6Q/node_modules/date-fns/locale/fr/_lib/formatRelative.js
var formatRelativeLocale$12, formatRelative$12;
function init_formatRelative$3() {
	return (init_formatRelative$3 = __esmMin((() => {
		formatRelativeLocale$12 = {
			lastWeek: "eeee 'dernier à' p",
			yesterday: "'hier à' p",
			today: "'aujourd’hui à' p",
			tomorrow: "'demain à' p'",
			nextWeek: "eeee 'prochain à' p",
			other: "P"
		};
		formatRelative$12 = (token, _date, _baseDate, _options) => formatRelativeLocale$12[token];
	})))();
}
//#endregion
//#region ../node_modules/.store/date-fns@4.4.0-N3CoundlhH8enmbadGmv6Q/node_modules/date-fns/locale/fr/_lib/localize.js
var eraValues$12, quarterValues$12, monthValues$12, dayValues$12, dayPeriodValues$12, ordinalNumber$12, LONG_MONTHS_TOKENS, localize$12;
function init_localize$3() {
	return (init_localize$3 = __esmMin((() => {
		eraValues$12 = {
			narrow: ["av. J.-C", "ap. J.-C"],
			abbreviated: ["av. J.-C", "ap. J.-C"],
			wide: ["avant Jésus-Christ", "après Jésus-Christ"]
		};
		quarterValues$12 = {
			narrow: [
				"T1",
				"T2",
				"T3",
				"T4"
			],
			abbreviated: [
				"1er trim.",
				"2ème trim.",
				"3ème trim.",
				"4ème trim."
			],
			wide: [
				"1er trimestre",
				"2ème trimestre",
				"3ème trimestre",
				"4ème trimestre"
			]
		};
		monthValues$12 = {
			narrow: [
				"J",
				"F",
				"M",
				"A",
				"M",
				"J",
				"J",
				"A",
				"S",
				"O",
				"N",
				"D"
			],
			abbreviated: [
				"janv.",
				"févr.",
				"mars",
				"avr.",
				"mai",
				"juin",
				"juil.",
				"août",
				"sept.",
				"oct.",
				"nov.",
				"déc."
			],
			wide: [
				"janvier",
				"février",
				"mars",
				"avril",
				"mai",
				"juin",
				"juillet",
				"août",
				"septembre",
				"octobre",
				"novembre",
				"décembre"
			]
		};
		dayValues$12 = {
			narrow: [
				"D",
				"L",
				"M",
				"M",
				"J",
				"V",
				"S"
			],
			short: [
				"di",
				"lu",
				"ma",
				"me",
				"je",
				"ve",
				"sa"
			],
			abbreviated: [
				"dim.",
				"lun.",
				"mar.",
				"mer.",
				"jeu.",
				"ven.",
				"sam."
			],
			wide: [
				"dimanche",
				"lundi",
				"mardi",
				"mercredi",
				"jeudi",
				"vendredi",
				"samedi"
			]
		};
		dayPeriodValues$12 = {
			narrow: {
				am: "AM",
				pm: "PM",
				midnight: "minuit",
				noon: "midi",
				morning: "mat.",
				afternoon: "ap.m.",
				evening: "soir",
				night: "mat."
			},
			abbreviated: {
				am: "AM",
				pm: "PM",
				midnight: "minuit",
				noon: "midi",
				morning: "matin",
				afternoon: "après-midi",
				evening: "soir",
				night: "matin"
			},
			wide: {
				am: "AM",
				pm: "PM",
				midnight: "minuit",
				noon: "midi",
				morning: "du matin",
				afternoon: "de l’après-midi",
				evening: "du soir",
				night: "du matin"
			}
		};
		ordinalNumber$12 = (dirtyNumber, options) => {
			const number = Number(dirtyNumber);
			const unit = options?.unit;
			if (number === 0) return "0";
			const feminineUnits = [
				"year",
				"week",
				"hour",
				"minute",
				"second"
			];
			let suffix;
			if (number === 1) suffix = unit && feminineUnits.includes(unit) ? "ère" : "er";
			else suffix = "ème";
			return number + suffix;
		};
		LONG_MONTHS_TOKENS = ["MMM", "MMMM"];
		localize$12 = {
			preprocessor: (date, parts) => {
				if (date.getDate() === 1) return parts;
				if (!parts.some((part) => part.isToken && LONG_MONTHS_TOKENS.includes(part.value))) return parts;
				return parts.map((part) => part.isToken && part.value === "do" ? {
					isToken: true,
					value: "d"
				} : part);
			},
			ordinalNumber: ordinalNumber$12,
			era: buildLocalizeFn({
				values: eraValues$12,
				defaultWidth: "wide"
			}),
			quarter: buildLocalizeFn({
				values: quarterValues$12,
				defaultWidth: "wide",
				argumentCallback: (quarter) => quarter - 1
			}),
			month: buildLocalizeFn({
				values: monthValues$12,
				defaultWidth: "wide"
			}),
			day: buildLocalizeFn({
				values: dayValues$12,
				defaultWidth: "wide"
			}),
			dayPeriod: buildLocalizeFn({
				values: dayPeriodValues$12,
				defaultWidth: "wide"
			})
		};
	})))();
}
//#endregion
//#region ../node_modules/.store/date-fns@4.4.0-N3CoundlhH8enmbadGmv6Q/node_modules/date-fns/locale/fr/_lib/match.js
var matchOrdinalNumberPattern$12, parseOrdinalNumberPattern$12, matchEraPatterns$12, parseEraPatterns$12, matchQuarterPatterns$12, parseQuarterPatterns$12, matchMonthPatterns$12, parseMonthPatterns$12, matchDayPatterns$12, parseDayPatterns$12, matchDayPeriodPatterns$12, parseDayPeriodPatterns$12, match$12;
function init_match$3() {
	return (init_match$3 = __esmMin((() => {
		matchOrdinalNumberPattern$12 = /^(\d+)(ième|ère|ème|er|e)?/i;
		parseOrdinalNumberPattern$12 = /\d+/i;
		matchEraPatterns$12 = {
			narrow: /^(av\.J\.C|ap\.J\.C|ap\.J\.-C)/i,
			abbreviated: /^(av\.J\.-C|av\.J-C|apr\.J\.-C|apr\.J-C|ap\.J-C)/i,
			wide: /^(avant Jésus-Christ|après Jésus-Christ)/i
		};
		parseEraPatterns$12 = { any: [/^av/i, /^ap/i] };
		matchQuarterPatterns$12 = {
			narrow: /^T?[1234]/i,
			abbreviated: /^[1234](er|ème|e)? trim\.?/i,
			wide: /^[1234](er|ème|e)? trimestre/i
		};
		parseQuarterPatterns$12 = { any: [
			/1/i,
			/2/i,
			/3/i,
			/4/i
		] };
		matchMonthPatterns$12 = {
			narrow: /^[jfmasond]/i,
			abbreviated: /^(janv|févr|mars|avr|mai|juin|juill|juil|août|sept|oct|nov|déc)\.?/i,
			wide: /^(janvier|février|mars|avril|mai|juin|juillet|août|septembre|octobre|novembre|décembre)/i
		};
		parseMonthPatterns$12 = {
			narrow: [
				/^j/i,
				/^f/i,
				/^m/i,
				/^a/i,
				/^m/i,
				/^j/i,
				/^j/i,
				/^a/i,
				/^s/i,
				/^o/i,
				/^n/i,
				/^d/i
			],
			any: [
				/^ja/i,
				/^f/i,
				/^mar/i,
				/^av/i,
				/^ma/i,
				/^juin/i,
				/^juil/i,
				/^ao/i,
				/^s/i,
				/^o/i,
				/^n/i,
				/^d/i
			]
		};
		matchDayPatterns$12 = {
			narrow: /^[lmjvsd]/i,
			short: /^(di|lu|ma|me|je|ve|sa)/i,
			abbreviated: /^(dim|lun|mar|mer|jeu|ven|sam)\.?/i,
			wide: /^(dimanche|lundi|mardi|mercredi|jeudi|vendredi|samedi)/i
		};
		parseDayPatterns$12 = {
			narrow: [
				/^d/i,
				/^l/i,
				/^m/i,
				/^m/i,
				/^j/i,
				/^v/i,
				/^s/i
			],
			any: [
				/^di/i,
				/^lu/i,
				/^ma/i,
				/^me/i,
				/^je/i,
				/^ve/i,
				/^sa/i
			]
		};
		matchDayPeriodPatterns$12 = {
			narrow: /^(a|p|minuit|midi|mat\.?|ap\.?m\.?|soir|nuit)/i,
			any: /^([ap]\.?\s?m\.?|du matin|de l'après[-\s]midi|du soir|de la nuit)/i
		};
		parseDayPeriodPatterns$12 = { any: {
			am: /^a/i,
			pm: /^p/i,
			midnight: /^min/i,
			noon: /^mid/i,
			morning: /mat/i,
			afternoon: /ap/i,
			evening: /soir/i,
			night: /nuit/i
		} };
		match$12 = {
			ordinalNumber: buildMatchPatternFn({
				matchPattern: matchOrdinalNumberPattern$12,
				parsePattern: parseOrdinalNumberPattern$12,
				valueCallback: (value) => parseInt(value)
			}),
			era: buildMatchFn({
				matchPatterns: matchEraPatterns$12,
				defaultMatchWidth: "wide",
				parsePatterns: parseEraPatterns$12,
				defaultParseWidth: "any"
			}),
			quarter: buildMatchFn({
				matchPatterns: matchQuarterPatterns$12,
				defaultMatchWidth: "wide",
				parsePatterns: parseQuarterPatterns$12,
				defaultParseWidth: "any",
				valueCallback: (index) => index + 1
			}),
			month: buildMatchFn({
				matchPatterns: matchMonthPatterns$12,
				defaultMatchWidth: "wide",
				parsePatterns: parseMonthPatterns$12,
				defaultParseWidth: "any"
			}),
			day: buildMatchFn({
				matchPatterns: matchDayPatterns$12,
				defaultMatchWidth: "wide",
				parsePatterns: parseDayPatterns$12,
				defaultParseWidth: "any"
			}),
			dayPeriod: buildMatchFn({
				matchPatterns: matchDayPeriodPatterns$12,
				defaultMatchWidth: "any",
				parsePatterns: parseDayPeriodPatterns$12,
				defaultParseWidth: "any"
			})
		};
	})))();
}
//#endregion
//#region ../node_modules/.store/date-fns@4.4.0-N3CoundlhH8enmbadGmv6Q/node_modules/date-fns/locale/fr.js
var fr;
function init_fr() {
	return (init_fr = __esmMin((() => {
		init_formatDistance$3();
		init_formatLong$3();
		init_formatRelative$3();
		init_localize$3();
		init_match$3();
		fr = {
			code: "fr",
			formatDistance: formatDistance$12,
			formatLong: formatLong$12,
			formatRelative: formatRelative$12,
			localize: localize$12,
			match: match$12,
			options: {
				weekStartsOn: 1,
				firstWeekContainsDate: 4
			}
		};
	})))();
}
//#endregion
//#region ../node_modules/.store/date-fns@4.4.0-N3CoundlhH8enmbadGmv6Q/node_modules/date-fns/locale/he/_lib/formatDistance.js
var formatDistanceLocale$11, formatDistance$11;
function init_formatDistance$4() {
	return (init_formatDistance$4 = __esmMin((() => {
		formatDistanceLocale$11 = {
			lessThanXSeconds: {
				one: "פחות משנייה",
				two: "פחות משתי שניות",
				other: "פחות מ־{{count}} שניות"
			},
			xSeconds: {
				one: "שנייה",
				two: "שתי שניות",
				other: "{{count}} שניות"
			},
			halfAMinute: "חצי דקה",
			lessThanXMinutes: {
				one: "פחות מדקה",
				two: "פחות משתי דקות",
				other: "פחות מ־{{count}} דקות"
			},
			xMinutes: {
				one: "דקה",
				two: "שתי דקות",
				other: "{{count}} דקות"
			},
			aboutXHours: {
				one: "כשעה",
				two: "כשעתיים",
				other: "כ־{{count}} שעות"
			},
			xHours: {
				one: "שעה",
				two: "שעתיים",
				other: "{{count}} שעות"
			},
			xDays: {
				one: "יום",
				two: "יומיים",
				other: "{{count}} ימים"
			},
			aboutXWeeks: {
				one: "כשבוע",
				two: "כשבועיים",
				other: "כ־{{count}} שבועות"
			},
			xWeeks: {
				one: "שבוע",
				two: "שבועיים",
				other: "{{count}} שבועות"
			},
			aboutXMonths: {
				one: "כחודש",
				two: "כחודשיים",
				other: "כ־{{count}} חודשים"
			},
			xMonths: {
				one: "חודש",
				two: "חודשיים",
				other: "{{count}} חודשים"
			},
			aboutXYears: {
				one: "כשנה",
				two: "כשנתיים",
				other: "כ־{{count}} שנים"
			},
			xYears: {
				one: "שנה",
				two: "שנתיים",
				other: "{{count}} שנים"
			},
			overXYears: {
				one: "יותר משנה",
				two: "יותר משנתיים",
				other: "יותר מ־{{count}} שנים"
			},
			almostXYears: {
				one: "כמעט שנה",
				two: "כמעט שנתיים",
				other: "כמעט {{count}} שנים"
			}
		};
		formatDistance$11 = (token, count, options) => {
			if (token === "xDays" && options?.addSuffix && count <= 2) {
				if (options.comparison && options.comparison > 0) return count === 1 ? "מחר" : "מחרתיים";
				return count === 1 ? "אתמול" : "שלשום";
			}
			let result;
			const tokenValue = formatDistanceLocale$11[token];
			if (typeof tokenValue === "string") result = tokenValue;
			else if (count === 1) result = tokenValue.one;
			else if (count === 2) result = tokenValue.two;
			else result = tokenValue.other.replace("{{count}}", String(count));
			if (options?.addSuffix) {
				if (options.comparison && options.comparison > 0) return "בעוד " + result;
				else return "לפני " + result;
			}
			return result;
		};
	})))();
}
//#endregion
//#region ../node_modules/.store/date-fns@4.4.0-N3CoundlhH8enmbadGmv6Q/node_modules/date-fns/locale/he/_lib/formatLong.js
var dateFormats$11, timeFormats$11, dateTimeFormats$11, formatLong$11;
function init_formatLong$4() {
	return (init_formatLong$4 = __esmMin((() => {
		dateFormats$11 = {
			full: "EEEE, d בMMMM y",
			long: "d בMMMM y",
			medium: "d בMMM y",
			short: "d.M.y"
		};
		timeFormats$11 = {
			full: "H:mm:ss zzzz",
			long: "H:mm:ss z",
			medium: "H:mm:ss",
			short: "H:mm"
		};
		dateTimeFormats$11 = {
			full: "{{date}} 'בשעה' {{time}}",
			long: "{{date}} 'בשעה' {{time}}",
			medium: "{{date}}, {{time}}",
			short: "{{date}}, {{time}}"
		};
		formatLong$11 = {
			date: buildFormatLongFn({
				formats: dateFormats$11,
				defaultWidth: "full"
			}),
			time: buildFormatLongFn({
				formats: timeFormats$11,
				defaultWidth: "full"
			}),
			dateTime: buildFormatLongFn({
				formats: dateTimeFormats$11,
				defaultWidth: "full"
			})
		};
	})))();
}
//#endregion
//#region ../node_modules/.store/date-fns@4.4.0-N3CoundlhH8enmbadGmv6Q/node_modules/date-fns/locale/he/_lib/formatRelative.js
var formatRelativeLocale$11, formatRelative$11;
function init_formatRelative$4() {
	return (init_formatRelative$4 = __esmMin((() => {
		formatRelativeLocale$11 = {
			lastWeek: "eeee 'שעבר בשעה' p",
			yesterday: "'אתמול בשעה' p",
			today: "'היום בשעה' p",
			tomorrow: "'מחר בשעה' p",
			nextWeek: "eeee 'בשעה' p",
			other: "P"
		};
		formatRelative$11 = (token, _date, _baseDate, _options) => formatRelativeLocale$11[token];
	})))();
}
//#endregion
//#region ../node_modules/.store/date-fns@4.4.0-N3CoundlhH8enmbadGmv6Q/node_modules/date-fns/locale/he/_lib/localize.js
var eraValues$11, quarterValues$11, monthValues$11, dayValues$11, dayPeriodValues$11, formattingDayPeriodValues$10, ordinalNumber$11, localize$11;
function init_localize$4() {
	return (init_localize$4 = __esmMin((() => {
		eraValues$11 = {
			narrow: ["לפנה״ס", "לספירה"],
			abbreviated: ["לפנה״ס", "לספירה"],
			wide: ["לפני הספירה", "לספירה"]
		};
		quarterValues$11 = {
			narrow: [
				"1",
				"2",
				"3",
				"4"
			],
			abbreviated: [
				"Q1",
				"Q2",
				"Q3",
				"Q4"
			],
			wide: [
				"רבעון 1",
				"רבעון 2",
				"רבעון 3",
				"רבעון 4"
			]
		};
		monthValues$11 = {
			narrow: [
				"1",
				"2",
				"3",
				"4",
				"5",
				"6",
				"7",
				"8",
				"9",
				"10",
				"11",
				"12"
			],
			abbreviated: [
				"ינו׳",
				"פבר׳",
				"מרץ",
				"אפר׳",
				"מאי",
				"יוני",
				"יולי",
				"אוג׳",
				"ספט׳",
				"אוק׳",
				"נוב׳",
				"דצמ׳"
			],
			wide: [
				"ינואר",
				"פברואר",
				"מרץ",
				"אפריל",
				"מאי",
				"יוני",
				"יולי",
				"אוגוסט",
				"ספטמבר",
				"אוקטובר",
				"נובמבר",
				"דצמבר"
			]
		};
		dayValues$11 = {
			narrow: [
				"א׳",
				"ב׳",
				"ג׳",
				"ד׳",
				"ה׳",
				"ו׳",
				"ש׳"
			],
			short: [
				"א׳",
				"ב׳",
				"ג׳",
				"ד׳",
				"ה׳",
				"ו׳",
				"ש׳"
			],
			abbreviated: [
				"יום א׳",
				"יום ב׳",
				"יום ג׳",
				"יום ד׳",
				"יום ה׳",
				"יום ו׳",
				"שבת"
			],
			wide: [
				"יום ראשון",
				"יום שני",
				"יום שלישי",
				"יום רביעי",
				"יום חמישי",
				"יום שישי",
				"יום שבת"
			]
		};
		dayPeriodValues$11 = {
			narrow: {
				am: "לפנה״צ",
				pm: "אחה״צ",
				midnight: "חצות",
				noon: "צהריים",
				morning: "בוקר",
				afternoon: "אחר הצהריים",
				evening: "ערב",
				night: "לילה"
			},
			abbreviated: {
				am: "לפנה״צ",
				pm: "אחה״צ",
				midnight: "חצות",
				noon: "צהריים",
				morning: "בוקר",
				afternoon: "אחר הצהריים",
				evening: "ערב",
				night: "לילה"
			},
			wide: {
				am: "לפנה״צ",
				pm: "אחה״צ",
				midnight: "חצות",
				noon: "צהריים",
				morning: "בוקר",
				afternoon: "אחר הצהריים",
				evening: "ערב",
				night: "לילה"
			}
		};
		formattingDayPeriodValues$10 = {
			narrow: {
				am: "לפנה״צ",
				pm: "אחה״צ",
				midnight: "חצות",
				noon: "צהריים",
				morning: "בבוקר",
				afternoon: "בצהריים",
				evening: "בערב",
				night: "בלילה"
			},
			abbreviated: {
				am: "לפנה״צ",
				pm: "אחה״צ",
				midnight: "חצות",
				noon: "צהריים",
				morning: "בבוקר",
				afternoon: "אחר הצהריים",
				evening: "בערב",
				night: "בלילה"
			},
			wide: {
				am: "לפנה״צ",
				pm: "אחה״צ",
				midnight: "חצות",
				noon: "צהריים",
				morning: "בבוקר",
				afternoon: "אחר הצהריים",
				evening: "בערב",
				night: "בלילה"
			}
		};
		ordinalNumber$11 = (dirtyNumber, options) => {
			const number = Number(dirtyNumber);
			if (number <= 0 || number > 10) return String(number);
			const unit = String(options?.unit);
			const isFemale = [
				"year",
				"hour",
				"minute",
				"second"
			].indexOf(unit) >= 0;
			const male = [
				"ראשון",
				"שני",
				"שלישי",
				"רביעי",
				"חמישי",
				"שישי",
				"שביעי",
				"שמיני",
				"תשיעי",
				"עשירי"
			];
			const female = [
				"ראשונה",
				"שנייה",
				"שלישית",
				"רביעית",
				"חמישית",
				"שישית",
				"שביעית",
				"שמינית",
				"תשיעית",
				"עשירית"
			];
			const index = number - 1;
			return isFemale ? female[index] : male[index];
		};
		localize$11 = {
			ordinalNumber: ordinalNumber$11,
			era: buildLocalizeFn({
				values: eraValues$11,
				defaultWidth: "wide"
			}),
			quarter: buildLocalizeFn({
				values: quarterValues$11,
				defaultWidth: "wide",
				argumentCallback: (quarter) => quarter - 1
			}),
			month: buildLocalizeFn({
				values: monthValues$11,
				defaultWidth: "wide"
			}),
			day: buildLocalizeFn({
				values: dayValues$11,
				defaultWidth: "wide"
			}),
			dayPeriod: buildLocalizeFn({
				values: dayPeriodValues$11,
				defaultWidth: "wide",
				formattingValues: formattingDayPeriodValues$10,
				defaultFormattingWidth: "wide"
			})
		};
	})))();
}
//#endregion
//#region ../node_modules/.store/date-fns@4.4.0-N3CoundlhH8enmbadGmv6Q/node_modules/date-fns/locale/he/_lib/match.js
var matchOrdinalNumberPattern$11, parseOrdinalNumberPattern$11, matchEraPatterns$11, parseEraPatterns$11, matchQuarterPatterns$11, parseQuarterPatterns$11, matchMonthPatterns$11, parseMonthPatterns$11, matchDayPatterns$11, parseDayPatterns$11, matchDayPeriodPatterns$11, parseDayPeriodPatterns$11, ordinalName, match$11;
function init_match$4() {
	return (init_match$4 = __esmMin((() => {
		matchOrdinalNumberPattern$11 = /^(\d+|(ראשון|שני|שלישי|רביעי|חמישי|שישי|שביעי|שמיני|תשיעי|עשירי|ראשונה|שנייה|שלישית|רביעית|חמישית|שישית|שביעית|שמינית|תשיעית|עשירית))/i;
		parseOrdinalNumberPattern$11 = /^(\d+|רא|שנ|של|רב|ח|שי|שב|שמ|ת|ע)/i;
		matchEraPatterns$11 = {
			narrow: /^ל(ספירה|פנה״ס)/i,
			abbreviated: /^ל(ספירה|פנה״ס)/i,
			wide: /^ל(פני ה)?ספירה/i
		};
		parseEraPatterns$11 = { any: [/^לפ/i, /^לס/i] };
		matchQuarterPatterns$11 = {
			narrow: /^[1234]/i,
			abbreviated: /^q[1234]/i,
			wide: /^רבעון [1234]/i
		};
		parseQuarterPatterns$11 = { any: [
			/1/i,
			/2/i,
			/3/i,
			/4/i
		] };
		matchMonthPatterns$11 = {
			narrow: /^\d+/i,
			abbreviated: /^(ינו|פבר|מרץ|אפר|מאי|יוני|יולי|אוג|ספט|אוק|נוב|דצמ)׳?/i,
			wide: /^(ינואר|פברואר|מרץ|אפריל|מאי|יוני|יולי|אוגוסט|ספטמבר|אוקטובר|נובמבר|דצמבר)/i
		};
		parseMonthPatterns$11 = {
			narrow: [
				/^1$/i,
				/^2/i,
				/^3/i,
				/^4/i,
				/^5/i,
				/^6/i,
				/^7/i,
				/^8/i,
				/^9/i,
				/^10/i,
				/^11/i,
				/^12/i
			],
			any: [
				/^ינ/i,
				/^פ/i,
				/^מר/i,
				/^אפ/i,
				/^מא/i,
				/^יונ/i,
				/^יול/i,
				/^אוג/i,
				/^ס/i,
				/^אוק/i,
				/^נ/i,
				/^ד/i
			]
		};
		matchDayPatterns$11 = {
			narrow: /^[אבגדהוש]׳/i,
			short: /^[אבגדהוש]׳/i,
			abbreviated: /^(שבת|יום (א|ב|ג|ד|ה|ו)׳)/i,
			wide: /^יום (ראשון|שני|שלישי|רביעי|חמישי|שישי|שבת)/i
		};
		parseDayPatterns$11 = {
			abbreviated: [
				/א׳$/i,
				/ב׳$/i,
				/ג׳$/i,
				/ד׳$/i,
				/ה׳$/i,
				/ו׳$/i,
				/^ש/i
			],
			wide: [
				/ן$/i,
				/ני$/i,
				/לישי$/i,
				/עי$/i,
				/מישי$/i,
				/שישי$/i,
				/ת$/i
			],
			any: [
				/^א/i,
				/^ב/i,
				/^ג/i,
				/^ד/i,
				/^ה/i,
				/^ו/i,
				/^ש/i
			]
		};
		matchDayPeriodPatterns$11 = { any: /^(אחר ה|ב)?(חצות|צהריים|בוקר|ערב|לילה|אחה״צ|לפנה״צ)/i };
		parseDayPeriodPatterns$11 = { any: {
			am: /^לפ/i,
			pm: /^אחה/i,
			midnight: /^ח/i,
			noon: /^צ/i,
			morning: /בוקר/i,
			afternoon: /בצ|אחר/i,
			evening: /ערב/i,
			night: /לילה/i
		} };
		ordinalName = [
			"רא",
			"שנ",
			"של",
			"רב",
			"ח",
			"שי",
			"שב",
			"שמ",
			"ת",
			"ע"
		];
		match$11 = {
			ordinalNumber: buildMatchPatternFn({
				matchPattern: matchOrdinalNumberPattern$11,
				parsePattern: parseOrdinalNumberPattern$11,
				valueCallback: (value) => {
					const number = parseInt(value, 10);
					return isNaN(number) ? ordinalName.indexOf(value) + 1 : number;
				}
			}),
			era: buildMatchFn({
				matchPatterns: matchEraPatterns$11,
				defaultMatchWidth: "wide",
				parsePatterns: parseEraPatterns$11,
				defaultParseWidth: "any"
			}),
			quarter: buildMatchFn({
				matchPatterns: matchQuarterPatterns$11,
				defaultMatchWidth: "wide",
				parsePatterns: parseQuarterPatterns$11,
				defaultParseWidth: "any",
				valueCallback: (index) => index + 1
			}),
			month: buildMatchFn({
				matchPatterns: matchMonthPatterns$11,
				defaultMatchWidth: "wide",
				parsePatterns: parseMonthPatterns$11,
				defaultParseWidth: "any"
			}),
			day: buildMatchFn({
				matchPatterns: matchDayPatterns$11,
				defaultMatchWidth: "wide",
				parsePatterns: parseDayPatterns$11,
				defaultParseWidth: "any"
			}),
			dayPeriod: buildMatchFn({
				matchPatterns: matchDayPeriodPatterns$11,
				defaultMatchWidth: "any",
				parsePatterns: parseDayPeriodPatterns$11,
				defaultParseWidth: "any"
			})
		};
	})))();
}
//#endregion
//#region ../node_modules/.store/date-fns@4.4.0-N3CoundlhH8enmbadGmv6Q/node_modules/date-fns/locale/he.js
var he;
function init_he() {
	return (init_he = __esmMin((() => {
		init_formatDistance$4();
		init_formatLong$4();
		init_formatRelative$4();
		init_localize$4();
		init_match$4();
		he = {
			code: "he",
			formatDistance: formatDistance$11,
			formatLong: formatLong$11,
			formatRelative: formatRelative$11,
			localize: localize$11,
			match: match$11,
			options: {
				weekStartsOn: 0,
				firstWeekContainsDate: 1
			}
		};
	})))();
}
//#endregion
//#region ../node_modules/.store/date-fns@4.4.0-N3CoundlhH8enmbadGmv6Q/node_modules/date-fns/locale/id/_lib/formatDistance.js
var formatDistanceLocale$10, formatDistance$10;
function init_formatDistance$5() {
	return (init_formatDistance$5 = __esmMin((() => {
		formatDistanceLocale$10 = {
			lessThanXSeconds: {
				one: "kurang dari 1 detik",
				other: "kurang dari {{count}} detik"
			},
			xSeconds: {
				one: "1 detik",
				other: "{{count}} detik"
			},
			halfAMinute: "setengah menit",
			lessThanXMinutes: {
				one: "kurang dari 1 menit",
				other: "kurang dari {{count}} menit"
			},
			xMinutes: {
				one: "1 menit",
				other: "{{count}} menit"
			},
			aboutXHours: {
				one: "sekitar 1 jam",
				other: "sekitar {{count}} jam"
			},
			xHours: {
				one: "1 jam",
				other: "{{count}} jam"
			},
			xDays: {
				one: "1 hari",
				other: "{{count}} hari"
			},
			aboutXWeeks: {
				one: "sekitar 1 minggu",
				other: "sekitar {{count}} minggu"
			},
			xWeeks: {
				one: "1 minggu",
				other: "{{count}} minggu"
			},
			aboutXMonths: {
				one: "sekitar 1 bulan",
				other: "sekitar {{count}} bulan"
			},
			xMonths: {
				one: "1 bulan",
				other: "{{count}} bulan"
			},
			aboutXYears: {
				one: "sekitar 1 tahun",
				other: "sekitar {{count}} tahun"
			},
			xYears: {
				one: "1 tahun",
				other: "{{count}} tahun"
			},
			overXYears: {
				one: "lebih dari 1 tahun",
				other: "lebih dari {{count}} tahun"
			},
			almostXYears: {
				one: "hampir 1 tahun",
				other: "hampir {{count}} tahun"
			}
		};
		formatDistance$10 = (token, count, options) => {
			let result;
			const tokenValue = formatDistanceLocale$10[token];
			if (typeof tokenValue === "string") result = tokenValue;
			else if (count === 1) result = tokenValue.one;
			else result = tokenValue.other.replace("{{count}}", count.toString());
			if (options?.addSuffix) {
				if (options.comparison && options.comparison > 0) return "dalam waktu " + result;
				else return result + " yang lalu";
			}
			return result;
		};
	})))();
}
//#endregion
//#region ../node_modules/.store/date-fns@4.4.0-N3CoundlhH8enmbadGmv6Q/node_modules/date-fns/locale/id/_lib/formatLong.js
var dateFormats$10, timeFormats$10, dateTimeFormats$10, formatLong$10;
function init_formatLong$5() {
	return (init_formatLong$5 = __esmMin((() => {
		dateFormats$10 = {
			full: "EEEE, d MMMM yyyy",
			long: "d MMMM yyyy",
			medium: "d MMM yyyy",
			short: "d/M/yyyy"
		};
		timeFormats$10 = {
			full: "HH.mm.ss",
			long: "HH.mm.ss",
			medium: "HH.mm",
			short: "HH.mm"
		};
		dateTimeFormats$10 = {
			full: "{{date}} 'pukul' {{time}}",
			long: "{{date}} 'pukul' {{time}}",
			medium: "{{date}}, {{time}}",
			short: "{{date}}, {{time}}"
		};
		formatLong$10 = {
			date: buildFormatLongFn({
				formats: dateFormats$10,
				defaultWidth: "full"
			}),
			time: buildFormatLongFn({
				formats: timeFormats$10,
				defaultWidth: "full"
			}),
			dateTime: buildFormatLongFn({
				formats: dateTimeFormats$10,
				defaultWidth: "full"
			})
		};
	})))();
}
//#endregion
//#region ../node_modules/.store/date-fns@4.4.0-N3CoundlhH8enmbadGmv6Q/node_modules/date-fns/locale/id/_lib/formatRelative.js
var formatRelativeLocale$10, formatRelative$10;
function init_formatRelative$5() {
	return (init_formatRelative$5 = __esmMin((() => {
		formatRelativeLocale$10 = {
			lastWeek: "eeee 'lalu pukul' p",
			yesterday: "'Kemarin pukul' p",
			today: "'Hari ini pukul' p",
			tomorrow: "'Besok pukul' p",
			nextWeek: "eeee 'pukul' p",
			other: "P"
		};
		formatRelative$10 = (token, _date, _baseDate, _options) => formatRelativeLocale$10[token];
	})))();
}
//#endregion
//#region ../node_modules/.store/date-fns@4.4.0-N3CoundlhH8enmbadGmv6Q/node_modules/date-fns/locale/id/_lib/localize.js
var eraValues$10, quarterValues$10, monthValues$10, dayValues$10, dayPeriodValues$10, formattingDayPeriodValues$9, ordinalNumber$10, localize$10;
function init_localize$5() {
	return (init_localize$5 = __esmMin((() => {
		eraValues$10 = {
			narrow: ["SM", "M"],
			abbreviated: ["SM", "M"],
			wide: ["Sebelum Masehi", "Masehi"]
		};
		quarterValues$10 = {
			narrow: [
				"1",
				"2",
				"3",
				"4"
			],
			abbreviated: [
				"K1",
				"K2",
				"K3",
				"K4"
			],
			wide: [
				"Kuartal ke-1",
				"Kuartal ke-2",
				"Kuartal ke-3",
				"Kuartal ke-4"
			]
		};
		monthValues$10 = {
			narrow: [
				"J",
				"F",
				"M",
				"A",
				"M",
				"J",
				"J",
				"A",
				"S",
				"O",
				"N",
				"D"
			],
			abbreviated: [
				"Jan",
				"Feb",
				"Mar",
				"Apr",
				"Mei",
				"Jun",
				"Jul",
				"Agt",
				"Sep",
				"Okt",
				"Nov",
				"Des"
			],
			wide: [
				"Januari",
				"Februari",
				"Maret",
				"April",
				"Mei",
				"Juni",
				"Juli",
				"Agustus",
				"September",
				"Oktober",
				"November",
				"Desember"
			]
		};
		dayValues$10 = {
			narrow: [
				"M",
				"S",
				"S",
				"R",
				"K",
				"J",
				"S"
			],
			short: [
				"Min",
				"Sen",
				"Sel",
				"Rab",
				"Kam",
				"Jum",
				"Sab"
			],
			abbreviated: [
				"Min",
				"Sen",
				"Sel",
				"Rab",
				"Kam",
				"Jum",
				"Sab"
			],
			wide: [
				"Minggu",
				"Senin",
				"Selasa",
				"Rabu",
				"Kamis",
				"Jumat",
				"Sabtu"
			]
		};
		dayPeriodValues$10 = {
			narrow: {
				am: "AM",
				pm: "PM",
				midnight: "tengah malam",
				noon: "tengah hari",
				morning: "pagi",
				afternoon: "siang",
				evening: "sore",
				night: "malam"
			},
			abbreviated: {
				am: "AM",
				pm: "PM",
				midnight: "tengah malam",
				noon: "tengah hari",
				morning: "pagi",
				afternoon: "siang",
				evening: "sore",
				night: "malam"
			},
			wide: {
				am: "AM",
				pm: "PM",
				midnight: "tengah malam",
				noon: "tengah hari",
				morning: "pagi",
				afternoon: "siang",
				evening: "sore",
				night: "malam"
			}
		};
		formattingDayPeriodValues$9 = {
			narrow: {
				am: "AM",
				pm: "PM",
				midnight: "tengah malam",
				noon: "tengah hari",
				morning: "pagi",
				afternoon: "siang",
				evening: "sore",
				night: "malam"
			},
			abbreviated: {
				am: "AM",
				pm: "PM",
				midnight: "tengah malam",
				noon: "tengah hari",
				morning: "pagi",
				afternoon: "siang",
				evening: "sore",
				night: "malam"
			},
			wide: {
				am: "AM",
				pm: "PM",
				midnight: "tengah malam",
				noon: "tengah hari",
				morning: "pagi",
				afternoon: "siang",
				evening: "sore",
				night: "malam"
			}
		};
		ordinalNumber$10 = (dirtyNumber, _options) => {
			return "ke-" + Number(dirtyNumber);
		};
		localize$10 = {
			ordinalNumber: ordinalNumber$10,
			era: buildLocalizeFn({
				values: eraValues$10,
				defaultWidth: "wide"
			}),
			quarter: buildLocalizeFn({
				values: quarterValues$10,
				defaultWidth: "wide",
				argumentCallback: (quarter) => quarter - 1
			}),
			month: buildLocalizeFn({
				values: monthValues$10,
				defaultWidth: "wide"
			}),
			day: buildLocalizeFn({
				values: dayValues$10,
				defaultWidth: "wide"
			}),
			dayPeriod: buildLocalizeFn({
				values: dayPeriodValues$10,
				defaultWidth: "wide",
				formattingValues: formattingDayPeriodValues$9,
				defaultFormattingWidth: "wide"
			})
		};
	})))();
}
//#endregion
//#region ../node_modules/.store/date-fns@4.4.0-N3CoundlhH8enmbadGmv6Q/node_modules/date-fns/locale/id/_lib/match.js
var matchOrdinalNumberPattern$10, parseOrdinalNumberPattern$10, matchEraPatterns$10, parseEraPatterns$10, matchQuarterPatterns$10, parseQuarterPatterns$10, matchMonthPatterns$10, parseMonthPatterns$10, matchDayPatterns$10, parseDayPatterns$10, matchDayPeriodPatterns$10, parseDayPeriodPatterns$10, match$10;
function init_match$5() {
	return (init_match$5 = __esmMin((() => {
		matchOrdinalNumberPattern$10 = /^ke-(\d+)?/i;
		parseOrdinalNumberPattern$10 = /\d+/i;
		matchEraPatterns$10 = {
			narrow: /^(sm|m)/i,
			abbreviated: /^(s\.?\s?m\.?|s\.?\s?e\.?\s?u\.?|m\.?|e\.?\s?u\.?)/i,
			wide: /^(sebelum masehi|sebelum era umum|masehi|era umum)/i
		};
		parseEraPatterns$10 = { any: [/^s/i, /^(m|e)/i] };
		matchQuarterPatterns$10 = {
			narrow: /^[1234]/i,
			abbreviated: /^K-?\s[1234]/i,
			wide: /^Kuartal ke-?\s?[1234]/i
		};
		parseQuarterPatterns$10 = { any: [
			/1/i,
			/2/i,
			/3/i,
			/4/i
		] };
		matchMonthPatterns$10 = {
			narrow: /^[jfmasond]/i,
			abbreviated: /^(jan|feb|mar|apr|mei|jun|jul|agt|sep|okt|nov|des)/i,
			wide: /^(januari|februari|maret|april|mei|juni|juli|agustus|september|oktober|november|desember)/i
		};
		parseMonthPatterns$10 = {
			narrow: [
				/^j/i,
				/^f/i,
				/^m/i,
				/^a/i,
				/^m/i,
				/^j/i,
				/^j/i,
				/^a/i,
				/^s/i,
				/^o/i,
				/^n/i,
				/^d/i
			],
			any: [
				/^ja/i,
				/^f/i,
				/^ma/i,
				/^ap/i,
				/^me/i,
				/^jun/i,
				/^jul/i,
				/^ag/i,
				/^s/i,
				/^o/i,
				/^n/i,
				/^d/i
			]
		};
		matchDayPatterns$10 = {
			narrow: /^[srkjm]/i,
			short: /^(min|sen|sel|rab|kam|jum|sab)/i,
			abbreviated: /^(min|sen|sel|rab|kam|jum|sab)/i,
			wide: /^(minggu|senin|selasa|rabu|kamis|jumat|sabtu)/i
		};
		parseDayPatterns$10 = {
			narrow: [
				/^m/i,
				/^s/i,
				/^s/i,
				/^r/i,
				/^k/i,
				/^j/i,
				/^s/i
			],
			any: [
				/^m/i,
				/^sen/i,
				/^sel/i,
				/^r/i,
				/^k/i,
				/^j/i,
				/^sa/i
			]
		};
		matchDayPeriodPatterns$10 = {
			narrow: /^(a|p|tengah m|tengah h|(di(\swaktu)?) (pagi|siang|sore|malam))/i,
			any: /^([ap]\.?\s?m\.?|tengah malam|tengah hari|(di(\swaktu)?) (pagi|siang|sore|malam))/i
		};
		parseDayPeriodPatterns$10 = { any: {
			am: /^a/i,
			pm: /^pm/i,
			midnight: /^tengah m/i,
			noon: /^tengah h/i,
			morning: /pagi/i,
			afternoon: /siang/i,
			evening: /sore/i,
			night: /malam/i
		} };
		match$10 = {
			ordinalNumber: buildMatchPatternFn({
				matchPattern: matchOrdinalNumberPattern$10,
				parsePattern: parseOrdinalNumberPattern$10,
				valueCallback: (value) => parseInt(value, 10)
			}),
			era: buildMatchFn({
				matchPatterns: matchEraPatterns$10,
				defaultMatchWidth: "wide",
				parsePatterns: parseEraPatterns$10,
				defaultParseWidth: "any"
			}),
			quarter: buildMatchFn({
				matchPatterns: matchQuarterPatterns$10,
				defaultMatchWidth: "wide",
				parsePatterns: parseQuarterPatterns$10,
				defaultParseWidth: "any",
				valueCallback: (index) => index + 1
			}),
			month: buildMatchFn({
				matchPatterns: matchMonthPatterns$10,
				defaultMatchWidth: "wide",
				parsePatterns: parseMonthPatterns$10,
				defaultParseWidth: "any"
			}),
			day: buildMatchFn({
				matchPatterns: matchDayPatterns$10,
				defaultMatchWidth: "wide",
				parsePatterns: parseDayPatterns$10,
				defaultParseWidth: "any"
			}),
			dayPeriod: buildMatchFn({
				matchPatterns: matchDayPeriodPatterns$10,
				defaultMatchWidth: "any",
				parsePatterns: parseDayPeriodPatterns$10,
				defaultParseWidth: "any"
			})
		};
	})))();
}
//#endregion
//#region ../node_modules/.store/date-fns@4.4.0-N3CoundlhH8enmbadGmv6Q/node_modules/date-fns/locale/id.js
var id;
function init_id() {
	return (init_id = __esmMin((() => {
		init_formatDistance$5();
		init_formatLong$5();
		init_formatRelative$5();
		init_localize$5();
		init_match$5();
		id = {
			code: "id",
			formatDistance: formatDistance$10,
			formatLong: formatLong$10,
			formatRelative: formatRelative$10,
			localize: localize$10,
			match: match$10,
			options: {
				weekStartsOn: 1,
				firstWeekContainsDate: 1
			}
		};
	})))();
}
//#endregion
//#region ../node_modules/.store/date-fns@4.4.0-N3CoundlhH8enmbadGmv6Q/node_modules/date-fns/locale/it/_lib/formatDistance.js
var formatDistanceLocale$9, formatDistance$9;
function init_formatDistance$6() {
	return (init_formatDistance$6 = __esmMin((() => {
		formatDistanceLocale$9 = {
			lessThanXSeconds: {
				one: "meno di un secondo",
				other: "meno di {{count}} secondi"
			},
			xSeconds: {
				one: "un secondo",
				other: "{{count}} secondi"
			},
			halfAMinute: "alcuni secondi",
			lessThanXMinutes: {
				one: "meno di un minuto",
				other: "meno di {{count}} minuti"
			},
			xMinutes: {
				one: "un minuto",
				other: "{{count}} minuti"
			},
			aboutXHours: {
				one: "circa un'ora",
				other: "circa {{count}} ore"
			},
			xHours: {
				one: "un'ora",
				other: "{{count}} ore"
			},
			xDays: {
				one: "un giorno",
				other: "{{count}} giorni"
			},
			aboutXWeeks: {
				one: "circa una settimana",
				other: "circa {{count}} settimane"
			},
			xWeeks: {
				one: "una settimana",
				other: "{{count}} settimane"
			},
			aboutXMonths: {
				one: "circa un mese",
				other: "circa {{count}} mesi"
			},
			xMonths: {
				one: "un mese",
				other: "{{count}} mesi"
			},
			aboutXYears: {
				one: "circa un anno",
				other: "circa {{count}} anni"
			},
			xYears: {
				one: "un anno",
				other: "{{count}} anni"
			},
			overXYears: {
				one: "più di un anno",
				other: "più di {{count}} anni"
			},
			almostXYears: {
				one: "quasi un anno",
				other: "quasi {{count}} anni"
			}
		};
		formatDistance$9 = (token, count, options) => {
			let result;
			const tokenValue = formatDistanceLocale$9[token];
			if (typeof tokenValue === "string") result = tokenValue;
			else if (count === 1) result = tokenValue.one;
			else result = tokenValue.other.replace("{{count}}", count.toString());
			if (options?.addSuffix) {
				if (options.comparison && options.comparison > 0) return "tra " + result;
				else return result + " fa";
			}
			return result;
		};
	})))();
}
//#endregion
//#region ../node_modules/.store/date-fns@4.4.0-N3CoundlhH8enmbadGmv6Q/node_modules/date-fns/locale/it/_lib/formatLong.js
var dateFormats$9, timeFormats$9, dateTimeFormats$9, formatLong$9;
function init_formatLong$6() {
	return (init_formatLong$6 = __esmMin((() => {
		dateFormats$9 = {
			full: "EEEE d MMMM y",
			long: "d MMMM y",
			medium: "d MMM y",
			short: "dd/MM/y"
		};
		timeFormats$9 = {
			full: "HH:mm:ss zzzz",
			long: "HH:mm:ss z",
			medium: "HH:mm:ss",
			short: "HH:mm"
		};
		dateTimeFormats$9 = {
			full: "{{date}} {{time}}",
			long: "{{date}} {{time}}",
			medium: "{{date}} {{time}}",
			short: "{{date}} {{time}}"
		};
		formatLong$9 = {
			date: buildFormatLongFn({
				formats: dateFormats$9,
				defaultWidth: "full"
			}),
			time: buildFormatLongFn({
				formats: timeFormats$9,
				defaultWidth: "full"
			}),
			dateTime: buildFormatLongFn({
				formats: dateTimeFormats$9,
				defaultWidth: "full"
			})
		};
	})))();
}
//#endregion
//#region ../node_modules/.store/date-fns@4.4.0-N3CoundlhH8enmbadGmv6Q/node_modules/date-fns/locale/it/_lib/formatRelative.js
function lastWeek$1(day) {
	switch (day) {
		case 0: return "'domenica scorsa alle' p";
		default: return "'" + weekdays[day] + " scorso alle' p";
	}
}
function thisWeek$1(day) {
	return "'" + weekdays[day] + " alle' p";
}
function nextWeek$1(day) {
	switch (day) {
		case 0: return "'domenica prossima alle' p";
		default: return "'" + weekdays[day] + " prossimo alle' p";
	}
}
var weekdays, formatRelativeLocale$9, formatRelative$9;
function init_formatRelative$6() {
	return (init_formatRelative$6 = __esmMin((() => {
		init_isSameWeek();
		weekdays = [
			"domenica",
			"lunedì",
			"martedì",
			"mercoledì",
			"giovedì",
			"venerdì",
			"sabato"
		];
		formatRelativeLocale$9 = {
			lastWeek: (date, baseDate, options) => {
				const day = date.getDay();
				if (isSameWeek(date, baseDate, options)) return thisWeek$1(day);
				else return lastWeek$1(day);
			},
			yesterday: "'ieri alle' p",
			today: "'oggi alle' p",
			tomorrow: "'domani alle' p",
			nextWeek: (date, baseDate, options) => {
				const day = date.getDay();
				if (isSameWeek(date, baseDate, options)) return thisWeek$1(day);
				else return nextWeek$1(day);
			},
			other: "P"
		};
		formatRelative$9 = (token, date, baseDate, options) => {
			const format = formatRelativeLocale$9[token];
			if (typeof format === "function") return format(date, baseDate, options);
			return format;
		};
	})))();
}
//#endregion
//#region ../node_modules/.store/date-fns@4.4.0-N3CoundlhH8enmbadGmv6Q/node_modules/date-fns/locale/it/_lib/localize.js
var eraValues$9, quarterValues$9, monthValues$9, dayValues$9, dayPeriodValues$9, formattingDayPeriodValues$8, ordinalNumber$9, localize$9;
function init_localize$6() {
	return (init_localize$6 = __esmMin((() => {
		eraValues$9 = {
			narrow: ["aC", "dC"],
			abbreviated: ["a.C.", "d.C."],
			wide: ["avanti Cristo", "dopo Cristo"]
		};
		quarterValues$9 = {
			narrow: [
				"1",
				"2",
				"3",
				"4"
			],
			abbreviated: [
				"T1",
				"T2",
				"T3",
				"T4"
			],
			wide: [
				"1º trimestre",
				"2º trimestre",
				"3º trimestre",
				"4º trimestre"
			]
		};
		monthValues$9 = {
			narrow: [
				"G",
				"F",
				"M",
				"A",
				"M",
				"G",
				"L",
				"A",
				"S",
				"O",
				"N",
				"D"
			],
			abbreviated: [
				"gen",
				"feb",
				"mar",
				"apr",
				"mag",
				"giu",
				"lug",
				"ago",
				"set",
				"ott",
				"nov",
				"dic"
			],
			wide: [
				"gennaio",
				"febbraio",
				"marzo",
				"aprile",
				"maggio",
				"giugno",
				"luglio",
				"agosto",
				"settembre",
				"ottobre",
				"novembre",
				"dicembre"
			]
		};
		dayValues$9 = {
			narrow: [
				"D",
				"L",
				"M",
				"M",
				"G",
				"V",
				"S"
			],
			short: [
				"dom",
				"lun",
				"mar",
				"mer",
				"gio",
				"ven",
				"sab"
			],
			abbreviated: [
				"dom",
				"lun",
				"mar",
				"mer",
				"gio",
				"ven",
				"sab"
			],
			wide: [
				"domenica",
				"lunedì",
				"martedì",
				"mercoledì",
				"giovedì",
				"venerdì",
				"sabato"
			]
		};
		dayPeriodValues$9 = {
			narrow: {
				am: "m.",
				pm: "p.",
				midnight: "mezzanotte",
				noon: "mezzogiorno",
				morning: "mattina",
				afternoon: "pomeriggio",
				evening: "sera",
				night: "notte"
			},
			abbreviated: {
				am: "AM",
				pm: "PM",
				midnight: "mezzanotte",
				noon: "mezzogiorno",
				morning: "mattina",
				afternoon: "pomeriggio",
				evening: "sera",
				night: "notte"
			},
			wide: {
				am: "AM",
				pm: "PM",
				midnight: "mezzanotte",
				noon: "mezzogiorno",
				morning: "mattina",
				afternoon: "pomeriggio",
				evening: "sera",
				night: "notte"
			}
		};
		formattingDayPeriodValues$8 = {
			narrow: {
				am: "m.",
				pm: "p.",
				midnight: "mezzanotte",
				noon: "mezzogiorno",
				morning: "di mattina",
				afternoon: "del pomeriggio",
				evening: "di sera",
				night: "di notte"
			},
			abbreviated: {
				am: "AM",
				pm: "PM",
				midnight: "mezzanotte",
				noon: "mezzogiorno",
				morning: "di mattina",
				afternoon: "del pomeriggio",
				evening: "di sera",
				night: "di notte"
			},
			wide: {
				am: "AM",
				pm: "PM",
				midnight: "mezzanotte",
				noon: "mezzogiorno",
				morning: "di mattina",
				afternoon: "del pomeriggio",
				evening: "di sera",
				night: "di notte"
			}
		};
		ordinalNumber$9 = (dirtyNumber, _options) => {
			const number = Number(dirtyNumber);
			return String(number);
		};
		localize$9 = {
			ordinalNumber: ordinalNumber$9,
			era: buildLocalizeFn({
				values: eraValues$9,
				defaultWidth: "wide"
			}),
			quarter: buildLocalizeFn({
				values: quarterValues$9,
				defaultWidth: "wide",
				argumentCallback: (quarter) => quarter - 1
			}),
			month: buildLocalizeFn({
				values: monthValues$9,
				defaultWidth: "wide"
			}),
			day: buildLocalizeFn({
				values: dayValues$9,
				defaultWidth: "wide"
			}),
			dayPeriod: buildLocalizeFn({
				values: dayPeriodValues$9,
				defaultWidth: "wide",
				formattingValues: formattingDayPeriodValues$8,
				defaultFormattingWidth: "wide"
			})
		};
	})))();
}
//#endregion
//#region ../node_modules/.store/date-fns@4.4.0-N3CoundlhH8enmbadGmv6Q/node_modules/date-fns/locale/it/_lib/match.js
var matchOrdinalNumberPattern$9, parseOrdinalNumberPattern$9, matchEraPatterns$9, parseEraPatterns$9, matchQuarterPatterns$9, parseQuarterPatterns$9, matchMonthPatterns$9, parseMonthPatterns$9, matchDayPatterns$9, parseDayPatterns$9, matchDayPeriodPatterns$9, parseDayPeriodPatterns$9, match$9;
function init_match$6() {
	return (init_match$6 = __esmMin((() => {
		matchOrdinalNumberPattern$9 = /^(\d+)(º)?/i;
		parseOrdinalNumberPattern$9 = /\d+/i;
		matchEraPatterns$9 = {
			narrow: /^(aC|dC)/i,
			abbreviated: /^(a\.?\s?C\.?|a\.?\s?e\.?\s?v\.?|d\.?\s?C\.?|e\.?\s?v\.?)/i,
			wide: /^(avanti Cristo|avanti Era Volgare|dopo Cristo|Era Volgare)/i
		};
		parseEraPatterns$9 = { any: [/^a/i, /^(d|e)/i] };
		matchQuarterPatterns$9 = {
			narrow: /^[1234]/i,
			abbreviated: /^t[1234]/i,
			wide: /^[1234](º)? trimestre/i
		};
		parseQuarterPatterns$9 = { any: [
			/1/i,
			/2/i,
			/3/i,
			/4/i
		] };
		matchMonthPatterns$9 = {
			narrow: /^[gfmalsond]/i,
			abbreviated: /^(gen|feb|mar|apr|mag|giu|lug|ago|set|ott|nov|dic)/i,
			wide: /^(gennaio|febbraio|marzo|aprile|maggio|giugno|luglio|agosto|settembre|ottobre|novembre|dicembre)/i
		};
		parseMonthPatterns$9 = {
			narrow: [
				/^g/i,
				/^f/i,
				/^m/i,
				/^a/i,
				/^m/i,
				/^g/i,
				/^l/i,
				/^a/i,
				/^s/i,
				/^o/i,
				/^n/i,
				/^d/i
			],
			any: [
				/^ge/i,
				/^f/i,
				/^mar/i,
				/^ap/i,
				/^mag/i,
				/^gi/i,
				/^l/i,
				/^ag/i,
				/^s/i,
				/^o/i,
				/^n/i,
				/^d/i
			]
		};
		matchDayPatterns$9 = {
			narrow: /^[dlmgvs]/i,
			short: /^(do|lu|ma|me|gi|ve|sa)/i,
			abbreviated: /^(dom|lun|mar|mer|gio|ven|sab)/i,
			wide: /^(domenica|luned[i|ì]|marted[i|ì]|mercoled[i|ì]|gioved[i|ì]|venerd[i|ì]|sabato)/i
		};
		parseDayPatterns$9 = {
			narrow: [
				/^d/i,
				/^l/i,
				/^m/i,
				/^m/i,
				/^g/i,
				/^v/i,
				/^s/i
			],
			any: [
				/^d/i,
				/^l/i,
				/^ma/i,
				/^me/i,
				/^g/i,
				/^v/i,
				/^s/i
			]
		};
		matchDayPeriodPatterns$9 = {
			narrow: /^(a|m\.|p|mezzanotte|mezzogiorno|(di|del) (mattina|pomeriggio|sera|notte))/i,
			any: /^([ap]\.?\s?m\.?|mezzanotte|mezzogiorno|(di|del) (mattina|pomeriggio|sera|notte))/i
		};
		parseDayPeriodPatterns$9 = { any: {
			am: /^a/i,
			pm: /^p/i,
			midnight: /^mezza/i,
			noon: /^mezzo/i,
			morning: /mattina/i,
			afternoon: /pomeriggio/i,
			evening: /sera/i,
			night: /notte/i
		} };
		match$9 = {
			ordinalNumber: buildMatchPatternFn({
				matchPattern: matchOrdinalNumberPattern$9,
				parsePattern: parseOrdinalNumberPattern$9,
				valueCallback: (value) => parseInt(value, 10)
			}),
			era: buildMatchFn({
				matchPatterns: matchEraPatterns$9,
				defaultMatchWidth: "wide",
				parsePatterns: parseEraPatterns$9,
				defaultParseWidth: "any"
			}),
			quarter: buildMatchFn({
				matchPatterns: matchQuarterPatterns$9,
				defaultMatchWidth: "wide",
				parsePatterns: parseQuarterPatterns$9,
				defaultParseWidth: "any",
				valueCallback: (index) => index + 1
			}),
			month: buildMatchFn({
				matchPatterns: matchMonthPatterns$9,
				defaultMatchWidth: "wide",
				parsePatterns: parseMonthPatterns$9,
				defaultParseWidth: "any"
			}),
			day: buildMatchFn({
				matchPatterns: matchDayPatterns$9,
				defaultMatchWidth: "wide",
				parsePatterns: parseDayPatterns$9,
				defaultParseWidth: "any"
			}),
			dayPeriod: buildMatchFn({
				matchPatterns: matchDayPeriodPatterns$9,
				defaultMatchWidth: "any",
				parsePatterns: parseDayPeriodPatterns$9,
				defaultParseWidth: "any"
			})
		};
	})))();
}
//#endregion
//#region ../node_modules/.store/date-fns@4.4.0-N3CoundlhH8enmbadGmv6Q/node_modules/date-fns/locale/it.js
var it;
function init_it() {
	return (init_it = __esmMin((() => {
		init_formatDistance$6();
		init_formatLong$6();
		init_formatRelative$6();
		init_localize$6();
		init_match$6();
		it = {
			code: "it",
			formatDistance: formatDistance$9,
			formatLong: formatLong$9,
			formatRelative: formatRelative$9,
			localize: localize$9,
			match: match$9,
			options: {
				weekStartsOn: 1,
				firstWeekContainsDate: 4
			}
		};
	})))();
}
//#endregion
//#region ../node_modules/.store/date-fns@4.4.0-N3CoundlhH8enmbadGmv6Q/node_modules/date-fns/locale/ja/_lib/formatDistance.js
var formatDistanceLocale$8, formatDistance$8;
function init_formatDistance$7() {
	return (init_formatDistance$7 = __esmMin((() => {
		formatDistanceLocale$8 = {
			lessThanXSeconds: {
				one: "1秒未満",
				other: "{{count}}秒未満",
				oneWithSuffix: "約1秒",
				otherWithSuffix: "約{{count}}秒"
			},
			xSeconds: {
				one: "1秒",
				other: "{{count}}秒"
			},
			halfAMinute: "30秒",
			lessThanXMinutes: {
				one: "1分未満",
				other: "{{count}}分未満",
				oneWithSuffix: "約1分",
				otherWithSuffix: "約{{count}}分"
			},
			xMinutes: {
				one: "1分",
				other: "{{count}}分"
			},
			aboutXHours: {
				one: "約1時間",
				other: "約{{count}}時間"
			},
			xHours: {
				one: "1時間",
				other: "{{count}}時間"
			},
			xDays: {
				one: "1日",
				other: "{{count}}日"
			},
			aboutXWeeks: {
				one: "約1週間",
				other: "約{{count}}週間"
			},
			xWeeks: {
				one: "1週間",
				other: "{{count}}週間"
			},
			aboutXMonths: {
				one: "約1か月",
				other: "約{{count}}か月"
			},
			xMonths: {
				one: "1か月",
				other: "{{count}}か月"
			},
			aboutXYears: {
				one: "約1年",
				other: "約{{count}}年"
			},
			xYears: {
				one: "1年",
				other: "{{count}}年"
			},
			overXYears: {
				one: "1年以上",
				other: "{{count}}年以上"
			},
			almostXYears: {
				one: "1年近く",
				other: "{{count}}年近く"
			}
		};
		formatDistance$8 = (token, count, options) => {
			options = options || {};
			let result;
			const tokenValue = formatDistanceLocale$8[token];
			if (typeof tokenValue === "string") result = tokenValue;
			else if (count === 1) {
				if (options.addSuffix && tokenValue.oneWithSuffix) result = tokenValue.oneWithSuffix;
				else result = tokenValue.one;
			} else if (options.addSuffix && tokenValue.otherWithSuffix) result = tokenValue.otherWithSuffix.replace("{{count}}", String(count));
			else result = tokenValue.other.replace("{{count}}", String(count));
			if (options.addSuffix) {
				if (options.comparison && options.comparison > 0) return result + "後";
				else return result + "前";
			}
			return result;
		};
	})))();
}
//#endregion
//#region ../node_modules/.store/date-fns@4.4.0-N3CoundlhH8enmbadGmv6Q/node_modules/date-fns/locale/ja/_lib/formatLong.js
var dateFormats$8, timeFormats$8, dateTimeFormats$8, formatLong$8;
function init_formatLong$7() {
	return (init_formatLong$7 = __esmMin((() => {
		dateFormats$8 = {
			full: "y年M月d日EEEE",
			long: "y年M月d日",
			medium: "y/MM/dd",
			short: "y/MM/dd"
		};
		timeFormats$8 = {
			full: "H時mm分ss秒 zzzz",
			long: "H:mm:ss z",
			medium: "H:mm:ss",
			short: "H:mm"
		};
		dateTimeFormats$8 = {
			full: "{{date}} {{time}}",
			long: "{{date}} {{time}}",
			medium: "{{date}} {{time}}",
			short: "{{date}} {{time}}"
		};
		formatLong$8 = {
			date: buildFormatLongFn({
				formats: dateFormats$8,
				defaultWidth: "full"
			}),
			time: buildFormatLongFn({
				formats: timeFormats$8,
				defaultWidth: "full"
			}),
			dateTime: buildFormatLongFn({
				formats: dateTimeFormats$8,
				defaultWidth: "full"
			})
		};
	})))();
}
//#endregion
//#region ../node_modules/.store/date-fns@4.4.0-N3CoundlhH8enmbadGmv6Q/node_modules/date-fns/locale/ja/_lib/formatRelative.js
var formatRelativeLocale$8, formatRelative$8;
function init_formatRelative$7() {
	return (init_formatRelative$7 = __esmMin((() => {
		formatRelativeLocale$8 = {
			lastWeek: "先週のeeeeのp",
			yesterday: "昨日のp",
			today: "今日のp",
			tomorrow: "明日のp",
			nextWeek: "翌週のeeeeのp",
			other: "P"
		};
		formatRelative$8 = (token, _date, _baseDate, _options) => {
			return formatRelativeLocale$8[token];
		};
	})))();
}
//#endregion
//#region ../node_modules/.store/date-fns@4.4.0-N3CoundlhH8enmbadGmv6Q/node_modules/date-fns/locale/ja/_lib/localize.js
var eraValues$8, quarterValues$8, monthValues$8, dayValues$8, dayPeriodValues$8, formattingDayPeriodValues$7, ordinalNumber$8, localize$8;
function init_localize$7() {
	return (init_localize$7 = __esmMin((() => {
		eraValues$8 = {
			narrow: ["BC", "AC"],
			abbreviated: ["紀元前", "西暦"],
			wide: ["紀元前", "西暦"]
		};
		quarterValues$8 = {
			narrow: [
				"1",
				"2",
				"3",
				"4"
			],
			abbreviated: [
				"Q1",
				"Q2",
				"Q3",
				"Q4"
			],
			wide: [
				"第1四半期",
				"第2四半期",
				"第3四半期",
				"第4四半期"
			]
		};
		monthValues$8 = {
			narrow: [
				"1",
				"2",
				"3",
				"4",
				"5",
				"6",
				"7",
				"8",
				"9",
				"10",
				"11",
				"12"
			],
			abbreviated: [
				"1月",
				"2月",
				"3月",
				"4月",
				"5月",
				"6月",
				"7月",
				"8月",
				"9月",
				"10月",
				"11月",
				"12月"
			],
			wide: [
				"1月",
				"2月",
				"3月",
				"4月",
				"5月",
				"6月",
				"7月",
				"8月",
				"9月",
				"10月",
				"11月",
				"12月"
			]
		};
		dayValues$8 = {
			narrow: [
				"日",
				"月",
				"火",
				"水",
				"木",
				"金",
				"土"
			],
			short: [
				"日",
				"月",
				"火",
				"水",
				"木",
				"金",
				"土"
			],
			abbreviated: [
				"日",
				"月",
				"火",
				"水",
				"木",
				"金",
				"土"
			],
			wide: [
				"日曜日",
				"月曜日",
				"火曜日",
				"水曜日",
				"木曜日",
				"金曜日",
				"土曜日"
			]
		};
		dayPeriodValues$8 = {
			narrow: {
				am: "午前",
				pm: "午後",
				midnight: "深夜",
				noon: "正午",
				morning: "朝",
				afternoon: "午後",
				evening: "夜",
				night: "深夜"
			},
			abbreviated: {
				am: "午前",
				pm: "午後",
				midnight: "深夜",
				noon: "正午",
				morning: "朝",
				afternoon: "午後",
				evening: "夜",
				night: "深夜"
			},
			wide: {
				am: "午前",
				pm: "午後",
				midnight: "深夜",
				noon: "正午",
				morning: "朝",
				afternoon: "午後",
				evening: "夜",
				night: "深夜"
			}
		};
		formattingDayPeriodValues$7 = {
			narrow: {
				am: "午前",
				pm: "午後",
				midnight: "深夜",
				noon: "正午",
				morning: "朝",
				afternoon: "午後",
				evening: "夜",
				night: "深夜"
			},
			abbreviated: {
				am: "午前",
				pm: "午後",
				midnight: "深夜",
				noon: "正午",
				morning: "朝",
				afternoon: "午後",
				evening: "夜",
				night: "深夜"
			},
			wide: {
				am: "午前",
				pm: "午後",
				midnight: "深夜",
				noon: "正午",
				morning: "朝",
				afternoon: "午後",
				evening: "夜",
				night: "深夜"
			}
		};
		ordinalNumber$8 = (dirtyNumber, options) => {
			const number = Number(dirtyNumber);
			switch (String(options?.unit)) {
				case "year": return `${number}年`;
				case "quarter": return `第${number}四半期`;
				case "month": return `${number}月`;
				case "week": return `第${number}週`;
				case "date": return `${number}日`;
				case "hour": return `${number}時`;
				case "minute": return `${number}分`;
				case "second": return `${number}秒`;
				default: return `${number}`;
			}
		};
		localize$8 = {
			ordinalNumber: ordinalNumber$8,
			era: buildLocalizeFn({
				values: eraValues$8,
				defaultWidth: "wide"
			}),
			quarter: buildLocalizeFn({
				values: quarterValues$8,
				defaultWidth: "wide",
				argumentCallback: (quarter) => Number(quarter) - 1
			}),
			month: buildLocalizeFn({
				values: monthValues$8,
				defaultWidth: "wide"
			}),
			day: buildLocalizeFn({
				values: dayValues$8,
				defaultWidth: "wide"
			}),
			dayPeriod: buildLocalizeFn({
				values: dayPeriodValues$8,
				defaultWidth: "wide",
				formattingValues: formattingDayPeriodValues$7,
				defaultFormattingWidth: "wide"
			})
		};
	})))();
}
//#endregion
//#region ../node_modules/.store/date-fns@4.4.0-N3CoundlhH8enmbadGmv6Q/node_modules/date-fns/locale/ja/_lib/match.js
var matchOrdinalNumberPattern$8, parseOrdinalNumberPattern$8, matchEraPatterns$8, parseEraPatterns$8, matchQuarterPatterns$8, parseQuarterPatterns$8, matchMonthPatterns$8, parseMonthPatterns$8, matchDayPatterns$8, parseDayPatterns$8, matchDayPeriodPatterns$8, parseDayPeriodPatterns$8, match$8;
function init_match$7() {
	return (init_match$7 = __esmMin((() => {
		matchOrdinalNumberPattern$8 = /^第?\d+(年|四半期|月|週|日|時|分|秒)?/i;
		parseOrdinalNumberPattern$8 = /\d+/i;
		matchEraPatterns$8 = {
			narrow: /^(B\.?C\.?|A\.?D\.?)/i,
			abbreviated: /^(紀元[前後]|西暦)/i,
			wide: /^(紀元[前後]|西暦)/i
		};
		parseEraPatterns$8 = {
			narrow: [/^B/i, /^A/i],
			any: [/^(紀元前)/i, /^(西暦|紀元後)/i]
		};
		matchQuarterPatterns$8 = {
			narrow: /^[1234]/i,
			abbreviated: /^Q[1234]/i,
			wide: /^第[1234一二三四１２３４]四半期/i
		};
		parseQuarterPatterns$8 = { any: [
			/(1|一|１)/i,
			/(2|二|２)/i,
			/(3|三|３)/i,
			/(4|四|４)/i
		] };
		matchMonthPatterns$8 = {
			narrow: /^([123456789]|1[012])/,
			abbreviated: /^([123456789]|1[012])月/i,
			wide: /^([123456789]|1[012])月/i
		};
		parseMonthPatterns$8 = { any: [
			/^1\D/,
			/^2/,
			/^3/,
			/^4/,
			/^5/,
			/^6/,
			/^7/,
			/^8/,
			/^9/,
			/^10/,
			/^11/,
			/^12/
		] };
		matchDayPatterns$8 = {
			narrow: /^[日月火水木金土]/,
			short: /^[日月火水木金土]/,
			abbreviated: /^[日月火水木金土]/,
			wide: /^[日月火水木金土]曜日/
		};
		parseDayPatterns$8 = { any: [
			/^日/,
			/^月/,
			/^火/,
			/^水/,
			/^木/,
			/^金/,
			/^土/
		] };
		matchDayPeriodPatterns$8 = { any: /^(AM|PM|午前|午後|正午|深夜|真夜中|夜|朝)/i };
		parseDayPeriodPatterns$8 = { any: {
			am: /^(A|午前)/i,
			pm: /^(P|午後)/i,
			midnight: /^深夜|真夜中/i,
			noon: /^正午/i,
			morning: /^朝/i,
			afternoon: /^午後/i,
			evening: /^夜/i,
			night: /^深夜/i
		} };
		match$8 = {
			ordinalNumber: buildMatchPatternFn({
				matchPattern: matchOrdinalNumberPattern$8,
				parsePattern: parseOrdinalNumberPattern$8,
				valueCallback: function(value) {
					return parseInt(value, 10);
				}
			}),
			era: buildMatchFn({
				matchPatterns: matchEraPatterns$8,
				defaultMatchWidth: "wide",
				parsePatterns: parseEraPatterns$8,
				defaultParseWidth: "any"
			}),
			quarter: buildMatchFn({
				matchPatterns: matchQuarterPatterns$8,
				defaultMatchWidth: "wide",
				parsePatterns: parseQuarterPatterns$8,
				defaultParseWidth: "any",
				valueCallback: (index) => index + 1
			}),
			month: buildMatchFn({
				matchPatterns: matchMonthPatterns$8,
				defaultMatchWidth: "wide",
				parsePatterns: parseMonthPatterns$8,
				defaultParseWidth: "any"
			}),
			day: buildMatchFn({
				matchPatterns: matchDayPatterns$8,
				defaultMatchWidth: "wide",
				parsePatterns: parseDayPatterns$8,
				defaultParseWidth: "any"
			}),
			dayPeriod: buildMatchFn({
				matchPatterns: matchDayPeriodPatterns$8,
				defaultMatchWidth: "any",
				parsePatterns: parseDayPeriodPatterns$8,
				defaultParseWidth: "any"
			})
		};
	})))();
}
//#endregion
//#region ../node_modules/.store/date-fns@4.4.0-N3CoundlhH8enmbadGmv6Q/node_modules/date-fns/locale/ja.js
var ja;
function init_ja() {
	return (init_ja = __esmMin((() => {
		init_formatDistance$7();
		init_formatLong$7();
		init_formatRelative$7();
		init_localize$7();
		init_match$7();
		ja = {
			code: "ja",
			formatDistance: formatDistance$8,
			formatLong: formatLong$8,
			formatRelative: formatRelative$8,
			localize: localize$8,
			match: match$8,
			options: {
				weekStartsOn: 0,
				firstWeekContainsDate: 1
			}
		};
	})))();
}
//#endregion
//#region ../node_modules/.store/date-fns@4.4.0-N3CoundlhH8enmbadGmv6Q/node_modules/date-fns/locale/ko/_lib/formatDistance.js
var formatDistanceLocale$7, formatDistance$7;
function init_formatDistance$8() {
	return (init_formatDistance$8 = __esmMin((() => {
		formatDistanceLocale$7 = {
			lessThanXSeconds: {
				one: "1초 미만",
				other: "{{count}}초 미만"
			},
			xSeconds: {
				one: "1초",
				other: "{{count}}초"
			},
			halfAMinute: "30초",
			lessThanXMinutes: {
				one: "1분 미만",
				other: "{{count}}분 미만"
			},
			xMinutes: {
				one: "1분",
				other: "{{count}}분"
			},
			aboutXHours: {
				one: "약 1시간",
				other: "약 {{count}}시간"
			},
			xHours: {
				one: "1시간",
				other: "{{count}}시간"
			},
			xDays: {
				one: "1일",
				other: "{{count}}일"
			},
			aboutXWeeks: {
				one: "약 1주",
				other: "약 {{count}}주"
			},
			xWeeks: {
				one: "1주",
				other: "{{count}}주"
			},
			aboutXMonths: {
				one: "약 1개월",
				other: "약 {{count}}개월"
			},
			xMonths: {
				one: "1개월",
				other: "{{count}}개월"
			},
			aboutXYears: {
				one: "약 1년",
				other: "약 {{count}}년"
			},
			xYears: {
				one: "1년",
				other: "{{count}}년"
			},
			overXYears: {
				one: "1년 이상",
				other: "{{count}}년 이상"
			},
			almostXYears: {
				one: "거의 1년",
				other: "거의 {{count}}년"
			}
		};
		formatDistance$7 = (token, count, options) => {
			let result;
			const tokenValue = formatDistanceLocale$7[token];
			if (typeof tokenValue === "string") result = tokenValue;
			else if (count === 1) result = tokenValue.one;
			else result = tokenValue.other.replace("{{count}}", count.toString());
			if (options?.addSuffix) {
				if (options.comparison && options.comparison > 0) return result + " 후";
				else return result + " 전";
			}
			return result;
		};
	})))();
}
//#endregion
//#region ../node_modules/.store/date-fns@4.4.0-N3CoundlhH8enmbadGmv6Q/node_modules/date-fns/locale/ko/_lib/formatLong.js
var dateFormats$7, timeFormats$7, dateTimeFormats$7, formatLong$7;
function init_formatLong$8() {
	return (init_formatLong$8 = __esmMin((() => {
		dateFormats$7 = {
			full: "y년 M월 d일 EEEE",
			long: "y년 M월 d일",
			medium: "y.MM.dd",
			short: "y.MM.dd"
		};
		timeFormats$7 = {
			full: "a H시 mm분 ss초 zzzz",
			long: "a H:mm:ss z",
			medium: "HH:mm:ss",
			short: "HH:mm"
		};
		dateTimeFormats$7 = {
			full: "{{date}} {{time}}",
			long: "{{date}} {{time}}",
			medium: "{{date}} {{time}}",
			short: "{{date}} {{time}}"
		};
		formatLong$7 = {
			date: buildFormatLongFn({
				formats: dateFormats$7,
				defaultWidth: "full"
			}),
			time: buildFormatLongFn({
				formats: timeFormats$7,
				defaultWidth: "full"
			}),
			dateTime: buildFormatLongFn({
				formats: dateTimeFormats$7,
				defaultWidth: "full"
			})
		};
	})))();
}
//#endregion
//#region ../node_modules/.store/date-fns@4.4.0-N3CoundlhH8enmbadGmv6Q/node_modules/date-fns/locale/ko/_lib/formatRelative.js
var formatRelativeLocale$7, formatRelative$7;
function init_formatRelative$8() {
	return (init_formatRelative$8 = __esmMin((() => {
		formatRelativeLocale$7 = {
			lastWeek: "'지난' eeee p",
			yesterday: "'어제' p",
			today: "'오늘' p",
			tomorrow: "'내일' p",
			nextWeek: "'다음' eeee p",
			other: "P"
		};
		formatRelative$7 = (token, _date, _baseDate, _options) => formatRelativeLocale$7[token];
	})))();
}
//#endregion
//#region ../node_modules/.store/date-fns@4.4.0-N3CoundlhH8enmbadGmv6Q/node_modules/date-fns/locale/ko/_lib/localize.js
var eraValues$7, quarterValues$7, monthValues$7, dayValues$7, dayPeriodValues$7, formattingDayPeriodValues$6, ordinalNumber$7, localize$7;
function init_localize$8() {
	return (init_localize$8 = __esmMin((() => {
		eraValues$7 = {
			narrow: ["BC", "AD"],
			abbreviated: ["BC", "AD"],
			wide: ["기원전", "서기"]
		};
		quarterValues$7 = {
			narrow: [
				"1",
				"2",
				"3",
				"4"
			],
			abbreviated: [
				"Q1",
				"Q2",
				"Q3",
				"Q4"
			],
			wide: [
				"1분기",
				"2분기",
				"3분기",
				"4분기"
			]
		};
		monthValues$7 = {
			narrow: [
				"1",
				"2",
				"3",
				"4",
				"5",
				"6",
				"7",
				"8",
				"9",
				"10",
				"11",
				"12"
			],
			abbreviated: [
				"1월",
				"2월",
				"3월",
				"4월",
				"5월",
				"6월",
				"7월",
				"8월",
				"9월",
				"10월",
				"11월",
				"12월"
			],
			wide: [
				"1월",
				"2월",
				"3월",
				"4월",
				"5월",
				"6월",
				"7월",
				"8월",
				"9월",
				"10월",
				"11월",
				"12월"
			]
		};
		dayValues$7 = {
			narrow: [
				"일",
				"월",
				"화",
				"수",
				"목",
				"금",
				"토"
			],
			short: [
				"일",
				"월",
				"화",
				"수",
				"목",
				"금",
				"토"
			],
			abbreviated: [
				"일",
				"월",
				"화",
				"수",
				"목",
				"금",
				"토"
			],
			wide: [
				"일요일",
				"월요일",
				"화요일",
				"수요일",
				"목요일",
				"금요일",
				"토요일"
			]
		};
		dayPeriodValues$7 = {
			narrow: {
				am: "오전",
				pm: "오후",
				midnight: "자정",
				noon: "정오",
				morning: "아침",
				afternoon: "오후",
				evening: "저녁",
				night: "밤"
			},
			abbreviated: {
				am: "오전",
				pm: "오후",
				midnight: "자정",
				noon: "정오",
				morning: "아침",
				afternoon: "오후",
				evening: "저녁",
				night: "밤"
			},
			wide: {
				am: "오전",
				pm: "오후",
				midnight: "자정",
				noon: "정오",
				morning: "아침",
				afternoon: "오후",
				evening: "저녁",
				night: "밤"
			}
		};
		formattingDayPeriodValues$6 = {
			narrow: {
				am: "오전",
				pm: "오후",
				midnight: "자정",
				noon: "정오",
				morning: "아침",
				afternoon: "오후",
				evening: "저녁",
				night: "밤"
			},
			abbreviated: {
				am: "오전",
				pm: "오후",
				midnight: "자정",
				noon: "정오",
				morning: "아침",
				afternoon: "오후",
				evening: "저녁",
				night: "밤"
			},
			wide: {
				am: "오전",
				pm: "오후",
				midnight: "자정",
				noon: "정오",
				morning: "아침",
				afternoon: "오후",
				evening: "저녁",
				night: "밤"
			}
		};
		ordinalNumber$7 = (dirtyNumber, options) => {
			const number = Number(dirtyNumber);
			switch (String(options?.unit)) {
				case "minute":
				case "second": return String(number);
				case "date": return number + "일";
				default: return number + "번째";
			}
		};
		localize$7 = {
			ordinalNumber: ordinalNumber$7,
			era: buildLocalizeFn({
				values: eraValues$7,
				defaultWidth: "wide"
			}),
			quarter: buildLocalizeFn({
				values: quarterValues$7,
				defaultWidth: "wide",
				argumentCallback: (quarter) => quarter - 1
			}),
			month: buildLocalizeFn({
				values: monthValues$7,
				defaultWidth: "wide"
			}),
			day: buildLocalizeFn({
				values: dayValues$7,
				defaultWidth: "wide"
			}),
			dayPeriod: buildLocalizeFn({
				values: dayPeriodValues$7,
				defaultWidth: "wide",
				formattingValues: formattingDayPeriodValues$6,
				defaultFormattingWidth: "wide"
			})
		};
	})))();
}
//#endregion
//#region ../node_modules/.store/date-fns@4.4.0-N3CoundlhH8enmbadGmv6Q/node_modules/date-fns/locale/ko/_lib/match.js
var matchOrdinalNumberPattern$7, parseOrdinalNumberPattern$7, matchEraPatterns$7, parseEraPatterns$7, matchQuarterPatterns$7, parseQuarterPatterns$7, matchMonthPatterns$7, parseMonthPatterns$7, matchDayPatterns$7, parseDayPatterns$7, matchDayPeriodPatterns$7, parseDayPeriodPatterns$7, match$7;
function init_match$8() {
	return (init_match$8 = __esmMin((() => {
		matchOrdinalNumberPattern$7 = /^(\d+)(일|번째)?/i;
		parseOrdinalNumberPattern$7 = /\d+/i;
		matchEraPatterns$7 = {
			narrow: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
			abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
			wide: /^(기원전|서기)/i
		};
		parseEraPatterns$7 = { any: [/^(bc|기원전)/i, /^(ad|서기)/i] };
		matchQuarterPatterns$7 = {
			narrow: /^[1234]/i,
			abbreviated: /^q[1234]/i,
			wide: /^[1234]사?분기/i
		};
		parseQuarterPatterns$7 = { any: [
			/1/i,
			/2/i,
			/3/i,
			/4/i
		] };
		matchMonthPatterns$7 = {
			narrow: /^(1[012]|[123456789])/,
			abbreviated: /^(1[012]|[123456789])월/i,
			wide: /^(1[012]|[123456789])월/i
		};
		parseMonthPatterns$7 = { any: [
			/^1월?$/,
			/^2/,
			/^3/,
			/^4/,
			/^5/,
			/^6/,
			/^7/,
			/^8/,
			/^9/,
			/^10/,
			/^11/,
			/^12/
		] };
		matchDayPatterns$7 = {
			narrow: /^[일월화수목금토]/,
			short: /^[일월화수목금토]/,
			abbreviated: /^[일월화수목금토]/,
			wide: /^[일월화수목금토]요일/
		};
		parseDayPatterns$7 = { any: [
			/^일/,
			/^월/,
			/^화/,
			/^수/,
			/^목/,
			/^금/,
			/^토/
		] };
		matchDayPeriodPatterns$7 = { any: /^(am|pm|오전|오후|자정|정오|아침|저녁|밤)/i };
		parseDayPeriodPatterns$7 = { any: {
			am: /^(am|오전)/i,
			pm: /^(pm|오후)/i,
			midnight: /^자정/i,
			noon: /^정오/i,
			morning: /^아침/i,
			afternoon: /^오후/i,
			evening: /^저녁/i,
			night: /^밤/i
		} };
		match$7 = {
			ordinalNumber: buildMatchPatternFn({
				matchPattern: matchOrdinalNumberPattern$7,
				parsePattern: parseOrdinalNumberPattern$7,
				valueCallback: (value) => parseInt(value, 10)
			}),
			era: buildMatchFn({
				matchPatterns: matchEraPatterns$7,
				defaultMatchWidth: "wide",
				parsePatterns: parseEraPatterns$7,
				defaultParseWidth: "any"
			}),
			quarter: buildMatchFn({
				matchPatterns: matchQuarterPatterns$7,
				defaultMatchWidth: "wide",
				parsePatterns: parseQuarterPatterns$7,
				defaultParseWidth: "any",
				valueCallback: (index) => index + 1
			}),
			month: buildMatchFn({
				matchPatterns: matchMonthPatterns$7,
				defaultMatchWidth: "wide",
				parsePatterns: parseMonthPatterns$7,
				defaultParseWidth: "any"
			}),
			day: buildMatchFn({
				matchPatterns: matchDayPatterns$7,
				defaultMatchWidth: "wide",
				parsePatterns: parseDayPatterns$7,
				defaultParseWidth: "any"
			}),
			dayPeriod: buildMatchFn({
				matchPatterns: matchDayPeriodPatterns$7,
				defaultMatchWidth: "any",
				parsePatterns: parseDayPeriodPatterns$7,
				defaultParseWidth: "any"
			})
		};
	})))();
}
//#endregion
//#region ../node_modules/.store/date-fns@4.4.0-N3CoundlhH8enmbadGmv6Q/node_modules/date-fns/locale/ko.js
var ko;
function init_ko() {
	return (init_ko = __esmMin((() => {
		init_formatDistance$8();
		init_formatLong$8();
		init_formatRelative$8();
		init_localize$8();
		init_match$8();
		ko = {
			code: "ko",
			formatDistance: formatDistance$7,
			formatLong: formatLong$7,
			formatRelative: formatRelative$7,
			localize: localize$7,
			match: match$7,
			options: {
				weekStartsOn: 0,
				firstWeekContainsDate: 1
			}
		};
	})))();
}
//#endregion
//#region ../node_modules/.store/date-fns@4.4.0-N3CoundlhH8enmbadGmv6Q/node_modules/date-fns/locale/nl/_lib/formatDistance.js
var formatDistanceLocale$6, formatDistance$6;
function init_formatDistance$9() {
	return (init_formatDistance$9 = __esmMin((() => {
		formatDistanceLocale$6 = {
			lessThanXSeconds: {
				one: "minder dan een seconde",
				other: "minder dan {{count}} seconden"
			},
			xSeconds: {
				one: "1 seconde",
				other: "{{count}} seconden"
			},
			halfAMinute: "een halve minuut",
			lessThanXMinutes: {
				one: "minder dan een minuut",
				other: "minder dan {{count}} minuten"
			},
			xMinutes: {
				one: "een minuut",
				other: "{{count}} minuten"
			},
			aboutXHours: {
				one: "ongeveer 1 uur",
				other: "ongeveer {{count}} uur"
			},
			xHours: {
				one: "1 uur",
				other: "{{count}} uur"
			},
			xDays: {
				one: "1 dag",
				other: "{{count}} dagen"
			},
			aboutXWeeks: {
				one: "ongeveer 1 week",
				other: "ongeveer {{count}} weken"
			},
			xWeeks: {
				one: "1 week",
				other: "{{count}} weken"
			},
			aboutXMonths: {
				one: "ongeveer 1 maand",
				other: "ongeveer {{count}} maanden"
			},
			xMonths: {
				one: "1 maand",
				other: "{{count}} maanden"
			},
			aboutXYears: {
				one: "ongeveer 1 jaar",
				other: "ongeveer {{count}} jaar"
			},
			xYears: {
				one: "1 jaar",
				other: "{{count}} jaar"
			},
			overXYears: {
				one: "meer dan 1 jaar",
				other: "meer dan {{count}} jaar"
			},
			almostXYears: {
				one: "bijna 1 jaar",
				other: "bijna {{count}} jaar"
			}
		};
		formatDistance$6 = (token, count, options) => {
			let result;
			const tokenValue = formatDistanceLocale$6[token];
			if (typeof tokenValue === "string") result = tokenValue;
			else if (count === 1) result = tokenValue.one;
			else result = tokenValue.other.replace("{{count}}", String(count));
			if (options?.addSuffix) {
				if (options.comparison && options.comparison > 0) return "over " + result;
				else return result + " geleden";
			}
			return result;
		};
	})))();
}
//#endregion
//#region ../node_modules/.store/date-fns@4.4.0-N3CoundlhH8enmbadGmv6Q/node_modules/date-fns/locale/nl/_lib/formatLong.js
var dateFormats$6, timeFormats$6, dateTimeFormats$6, formatLong$6;
function init_formatLong$9() {
	return (init_formatLong$9 = __esmMin((() => {
		dateFormats$6 = {
			full: "EEEE d MMMM y",
			long: "d MMMM y",
			medium: "d MMM y",
			short: "dd-MM-y"
		};
		timeFormats$6 = {
			full: "HH:mm:ss zzzz",
			long: "HH:mm:ss z",
			medium: "HH:mm:ss",
			short: "HH:mm"
		};
		dateTimeFormats$6 = {
			full: "{{date}} 'om' {{time}}",
			long: "{{date}} 'om' {{time}}",
			medium: "{{date}}, {{time}}",
			short: "{{date}}, {{time}}"
		};
		formatLong$6 = {
			date: buildFormatLongFn({
				formats: dateFormats$6,
				defaultWidth: "full"
			}),
			time: buildFormatLongFn({
				formats: timeFormats$6,
				defaultWidth: "full"
			}),
			dateTime: buildFormatLongFn({
				formats: dateTimeFormats$6,
				defaultWidth: "full"
			})
		};
	})))();
}
//#endregion
//#region ../node_modules/.store/date-fns@4.4.0-N3CoundlhH8enmbadGmv6Q/node_modules/date-fns/locale/nl/_lib/formatRelative.js
var formatRelativeLocale$6, formatRelative$6;
function init_formatRelative$9() {
	return (init_formatRelative$9 = __esmMin((() => {
		formatRelativeLocale$6 = {
			lastWeek: "'afgelopen' eeee 'om' p",
			yesterday: "'gisteren om' p",
			today: "'vandaag om' p",
			tomorrow: "'morgen om' p",
			nextWeek: "eeee 'om' p",
			other: "P"
		};
		formatRelative$6 = (token, _date, _baseDate, _options) => formatRelativeLocale$6[token];
	})))();
}
//#endregion
//#region ../node_modules/.store/date-fns@4.4.0-N3CoundlhH8enmbadGmv6Q/node_modules/date-fns/locale/nl/_lib/localize.js
var eraValues$6, quarterValues$6, monthValues$6, dayValues$6, dayPeriodValues$6, ordinalNumber$6, localize$6;
function init_localize$9() {
	return (init_localize$9 = __esmMin((() => {
		eraValues$6 = {
			narrow: ["v.C.", "n.C."],
			abbreviated: ["v.Chr.", "n.Chr."],
			wide: ["voor Christus", "na Christus"]
		};
		quarterValues$6 = {
			narrow: [
				"1",
				"2",
				"3",
				"4"
			],
			abbreviated: [
				"K1",
				"K2",
				"K3",
				"K4"
			],
			wide: [
				"1e kwartaal",
				"2e kwartaal",
				"3e kwartaal",
				"4e kwartaal"
			]
		};
		monthValues$6 = {
			narrow: [
				"J",
				"F",
				"M",
				"A",
				"M",
				"J",
				"J",
				"A",
				"S",
				"O",
				"N",
				"D"
			],
			abbreviated: [
				"jan.",
				"feb.",
				"mrt.",
				"apr.",
				"mei",
				"jun.",
				"jul.",
				"aug.",
				"sep.",
				"okt.",
				"nov.",
				"dec."
			],
			wide: [
				"januari",
				"februari",
				"maart",
				"april",
				"mei",
				"juni",
				"juli",
				"augustus",
				"september",
				"oktober",
				"november",
				"december"
			]
		};
		dayValues$6 = {
			narrow: [
				"Z",
				"M",
				"D",
				"W",
				"D",
				"V",
				"Z"
			],
			short: [
				"zo",
				"ma",
				"di",
				"wo",
				"do",
				"vr",
				"za"
			],
			abbreviated: [
				"zon",
				"maa",
				"din",
				"woe",
				"don",
				"vri",
				"zat"
			],
			wide: [
				"zondag",
				"maandag",
				"dinsdag",
				"woensdag",
				"donderdag",
				"vrijdag",
				"zaterdag"
			]
		};
		dayPeriodValues$6 = {
			narrow: {
				am: "AM",
				pm: "PM",
				midnight: "middernacht",
				noon: "het middaguur",
				morning: "'s ochtends",
				afternoon: "'s middags",
				evening: "'s avonds",
				night: "'s nachts"
			},
			abbreviated: {
				am: "AM",
				pm: "PM",
				midnight: "middernacht",
				noon: "het middaguur",
				morning: "'s ochtends",
				afternoon: "'s middags",
				evening: "'s avonds",
				night: "'s nachts"
			},
			wide: {
				am: "AM",
				pm: "PM",
				midnight: "middernacht",
				noon: "het middaguur",
				morning: "'s ochtends",
				afternoon: "'s middags",
				evening: "'s avonds",
				night: "'s nachts"
			}
		};
		ordinalNumber$6 = (dirtyNumber, _options) => {
			return Number(dirtyNumber) + "e";
		};
		localize$6 = {
			ordinalNumber: ordinalNumber$6,
			era: buildLocalizeFn({
				values: eraValues$6,
				defaultWidth: "wide"
			}),
			quarter: buildLocalizeFn({
				values: quarterValues$6,
				defaultWidth: "wide",
				argumentCallback: (quarter) => quarter - 1
			}),
			month: buildLocalizeFn({
				values: monthValues$6,
				defaultWidth: "wide"
			}),
			day: buildLocalizeFn({
				values: dayValues$6,
				defaultWidth: "wide"
			}),
			dayPeriod: buildLocalizeFn({
				values: dayPeriodValues$6,
				defaultWidth: "wide"
			})
		};
	})))();
}
//#endregion
//#region ../node_modules/.store/date-fns@4.4.0-N3CoundlhH8enmbadGmv6Q/node_modules/date-fns/locale/nl/_lib/match.js
var matchOrdinalNumberPattern$6, parseOrdinalNumberPattern$6, matchEraPatterns$6, parseEraPatterns$6, matchQuarterPatterns$6, parseQuarterPatterns$6, matchMonthPatterns$6, parseMonthPatterns$6, matchDayPatterns$6, parseDayPatterns$6, matchDayPeriodPatterns$6, parseDayPeriodPatterns$6, match$6;
function init_match$9() {
	return (init_match$9 = __esmMin((() => {
		matchOrdinalNumberPattern$6 = /^(\d+)e?/i;
		parseOrdinalNumberPattern$6 = /\d+/i;
		matchEraPatterns$6 = {
			narrow: /^([vn]\.? ?C\.?)/,
			abbreviated: /^([vn]\. ?Chr\.?)/,
			wide: /^((voor|na) Christus)/
		};
		parseEraPatterns$6 = { any: [/^v/, /^n/] };
		matchQuarterPatterns$6 = {
			narrow: /^[1234]/i,
			abbreviated: /^K[1234]/i,
			wide: /^[1234]e kwartaal/i
		};
		parseQuarterPatterns$6 = { any: [
			/1/i,
			/2/i,
			/3/i,
			/4/i
		] };
		matchMonthPatterns$6 = {
			narrow: /^[jfmasond]/i,
			abbreviated: /^(jan.|feb.|mrt.|apr.|mei|jun.|jul.|aug.|sep.|okt.|nov.|dec.)/i,
			wide: /^(januari|februari|maart|april|mei|juni|juli|augustus|september|oktober|november|december)/i
		};
		parseMonthPatterns$6 = {
			narrow: [
				/^j/i,
				/^f/i,
				/^m/i,
				/^a/i,
				/^m/i,
				/^j/i,
				/^j/i,
				/^a/i,
				/^s/i,
				/^o/i,
				/^n/i,
				/^d/i
			],
			any: [
				/^jan/i,
				/^feb/i,
				/^m(r|a)/i,
				/^apr/i,
				/^mei/i,
				/^jun/i,
				/^jul/i,
				/^aug/i,
				/^sep/i,
				/^okt/i,
				/^nov/i,
				/^dec/i
			]
		};
		matchDayPatterns$6 = {
			narrow: /^[zmdwv]/i,
			short: /^(zo|ma|di|wo|do|vr|za)/i,
			abbreviated: /^(zon|maa|din|woe|don|vri|zat)/i,
			wide: /^(zondag|maandag|dinsdag|woensdag|donderdag|vrijdag|zaterdag)/i
		};
		parseDayPatterns$6 = {
			narrow: [
				/^z/i,
				/^m/i,
				/^d/i,
				/^w/i,
				/^d/i,
				/^v/i,
				/^z/i
			],
			any: [
				/^zo/i,
				/^ma/i,
				/^di/i,
				/^wo/i,
				/^do/i,
				/^vr/i,
				/^za/i
			]
		};
		matchDayPeriodPatterns$6 = { any: /^(am|pm|middernacht|het middaguur|'s (ochtends|middags|avonds|nachts))/i };
		parseDayPeriodPatterns$6 = { any: {
			am: /^am/i,
			pm: /^pm/i,
			midnight: /^middernacht/i,
			noon: /^het middaguur/i,
			morning: /ochtend/i,
			afternoon: /middag/i,
			evening: /avond/i,
			night: /nacht/i
		} };
		match$6 = {
			ordinalNumber: buildMatchPatternFn({
				matchPattern: matchOrdinalNumberPattern$6,
				parsePattern: parseOrdinalNumberPattern$6,
				valueCallback: (value) => parseInt(value, 10)
			}),
			era: buildMatchFn({
				matchPatterns: matchEraPatterns$6,
				defaultMatchWidth: "wide",
				parsePatterns: parseEraPatterns$6,
				defaultParseWidth: "any"
			}),
			quarter: buildMatchFn({
				matchPatterns: matchQuarterPatterns$6,
				defaultMatchWidth: "wide",
				parsePatterns: parseQuarterPatterns$6,
				defaultParseWidth: "any",
				valueCallback: (index) => index + 1
			}),
			month: buildMatchFn({
				matchPatterns: matchMonthPatterns$6,
				defaultMatchWidth: "wide",
				parsePatterns: parseMonthPatterns$6,
				defaultParseWidth: "any"
			}),
			day: buildMatchFn({
				matchPatterns: matchDayPatterns$6,
				defaultMatchWidth: "wide",
				parsePatterns: parseDayPatterns$6,
				defaultParseWidth: "any"
			}),
			dayPeriod: buildMatchFn({
				matchPatterns: matchDayPeriodPatterns$6,
				defaultMatchWidth: "any",
				parsePatterns: parseDayPeriodPatterns$6,
				defaultParseWidth: "any"
			})
		};
	})))();
}
//#endregion
//#region ../node_modules/.store/date-fns@4.4.0-N3CoundlhH8enmbadGmv6Q/node_modules/date-fns/locale/nl.js
var nl;
function init_nl() {
	return (init_nl = __esmMin((() => {
		init_formatDistance$9();
		init_formatLong$9();
		init_formatRelative$9();
		init_localize$9();
		init_match$9();
		nl = {
			code: "nl",
			formatDistance: formatDistance$6,
			formatLong: formatLong$6,
			formatRelative: formatRelative$6,
			localize: localize$6,
			match: match$6,
			options: {
				weekStartsOn: 1,
				firstWeekContainsDate: 4
			}
		};
	})))();
}
//#endregion
//#region ../node_modules/.store/date-fns@4.4.0-N3CoundlhH8enmbadGmv6Q/node_modules/date-fns/locale/pt-BR/_lib/formatDistance.js
var formatDistanceLocale$5, formatDistance$5;
function init_formatDistance$10() {
	return (init_formatDistance$10 = __esmMin((() => {
		formatDistanceLocale$5 = {
			lessThanXSeconds: {
				one: "menos de um segundo",
				other: "menos de {{count}} segundos"
			},
			xSeconds: {
				one: "1 segundo",
				other: "{{count}} segundos"
			},
			halfAMinute: "meio minuto",
			lessThanXMinutes: {
				one: "menos de um minuto",
				other: "menos de {{count}} minutos"
			},
			xMinutes: {
				one: "1 minuto",
				other: "{{count}} minutos"
			},
			aboutXHours: {
				one: "cerca de 1 hora",
				other: "cerca de {{count}} horas"
			},
			xHours: {
				one: "1 hora",
				other: "{{count}} horas"
			},
			xDays: {
				one: "1 dia",
				other: "{{count}} dias"
			},
			aboutXWeeks: {
				one: "cerca de 1 semana",
				other: "cerca de {{count}} semanas"
			},
			xWeeks: {
				one: "1 semana",
				other: "{{count}} semanas"
			},
			aboutXMonths: {
				one: "cerca de 1 mês",
				other: "cerca de {{count}} meses"
			},
			xMonths: {
				one: "1 mês",
				other: "{{count}} meses"
			},
			aboutXYears: {
				one: "cerca de 1 ano",
				other: "cerca de {{count}} anos"
			},
			xYears: {
				one: "1 ano",
				other: "{{count}} anos"
			},
			overXYears: {
				one: "mais de 1 ano",
				other: "mais de {{count}} anos"
			},
			almostXYears: {
				one: "quase 1 ano",
				other: "quase {{count}} anos"
			}
		};
		formatDistance$5 = (token, count, options) => {
			let result;
			const tokenValue = formatDistanceLocale$5[token];
			if (typeof tokenValue === "string") result = tokenValue;
			else if (count === 1) result = tokenValue.one;
			else result = tokenValue.other.replace("{{count}}", String(count));
			if (options?.addSuffix) {
				if (options.comparison && options.comparison > 0) return "em " + result;
				else return "há " + result;
			}
			return result;
		};
	})))();
}
//#endregion
//#region ../node_modules/.store/date-fns@4.4.0-N3CoundlhH8enmbadGmv6Q/node_modules/date-fns/locale/pt-BR/_lib/formatLong.js
var dateFormats$5, timeFormats$5, dateTimeFormats$5, formatLong$5;
function init_formatLong$10() {
	return (init_formatLong$10 = __esmMin((() => {
		dateFormats$5 = {
			full: "EEEE, d 'de' MMMM 'de' y",
			long: "d 'de' MMMM 'de' y",
			medium: "d MMM y",
			short: "dd/MM/yyyy"
		};
		timeFormats$5 = {
			full: "HH:mm:ss zzzz",
			long: "HH:mm:ss z",
			medium: "HH:mm:ss",
			short: "HH:mm"
		};
		dateTimeFormats$5 = {
			full: "{{date}} 'às' {{time}}",
			long: "{{date}} 'às' {{time}}",
			medium: "{{date}}, {{time}}",
			short: "{{date}}, {{time}}"
		};
		formatLong$5 = {
			date: buildFormatLongFn({
				formats: dateFormats$5,
				defaultWidth: "full"
			}),
			time: buildFormatLongFn({
				formats: timeFormats$5,
				defaultWidth: "full"
			}),
			dateTime: buildFormatLongFn({
				formats: dateTimeFormats$5,
				defaultWidth: "full"
			})
		};
	})))();
}
//#endregion
//#region ../node_modules/.store/date-fns@4.4.0-N3CoundlhH8enmbadGmv6Q/node_modules/date-fns/locale/pt-BR/_lib/formatRelative.js
var formatRelativeLocale$5, formatRelative$5;
function init_formatRelative$10() {
	return (init_formatRelative$10 = __esmMin((() => {
		formatRelativeLocale$5 = {
			lastWeek: (date) => {
				const weekday = date.getDay();
				return "'" + (weekday === 0 || weekday === 6 ? "último" : "última") + "' eeee 'às' p";
			},
			yesterday: "'ontem às' p",
			today: "'hoje às' p",
			tomorrow: "'amanhã às' p",
			nextWeek: "eeee 'às' p",
			other: "P"
		};
		formatRelative$5 = (token, date, _baseDate, _options) => {
			const format = formatRelativeLocale$5[token];
			if (typeof format === "function") return format(date);
			return format;
		};
	})))();
}
//#endregion
//#region ../node_modules/.store/date-fns@4.4.0-N3CoundlhH8enmbadGmv6Q/node_modules/date-fns/locale/pt-BR/_lib/localize.js
var eraValues$5, quarterValues$5, monthValues$5, dayValues$5, dayPeriodValues$5, formattingDayPeriodValues$5, ordinalNumber$5, localize$5;
function init_localize$10() {
	return (init_localize$10 = __esmMin((() => {
		eraValues$5 = {
			narrow: ["AC", "DC"],
			abbreviated: ["AC", "DC"],
			wide: ["antes de cristo", "depois de cristo"]
		};
		quarterValues$5 = {
			narrow: [
				"1",
				"2",
				"3",
				"4"
			],
			abbreviated: [
				"T1",
				"T2",
				"T3",
				"T4"
			],
			wide: [
				"1º trimestre",
				"2º trimestre",
				"3º trimestre",
				"4º trimestre"
			]
		};
		monthValues$5 = {
			narrow: [
				"j",
				"f",
				"m",
				"a",
				"m",
				"j",
				"j",
				"a",
				"s",
				"o",
				"n",
				"d"
			],
			abbreviated: [
				"jan",
				"fev",
				"mar",
				"abr",
				"mai",
				"jun",
				"jul",
				"ago",
				"set",
				"out",
				"nov",
				"dez"
			],
			wide: [
				"janeiro",
				"fevereiro",
				"março",
				"abril",
				"maio",
				"junho",
				"julho",
				"agosto",
				"setembro",
				"outubro",
				"novembro",
				"dezembro"
			]
		};
		dayValues$5 = {
			narrow: [
				"D",
				"S",
				"T",
				"Q",
				"Q",
				"S",
				"S"
			],
			short: [
				"dom",
				"seg",
				"ter",
				"qua",
				"qui",
				"sex",
				"sab"
			],
			abbreviated: [
				"domingo",
				"segunda",
				"terça",
				"quarta",
				"quinta",
				"sexta",
				"sábado"
			],
			wide: [
				"domingo",
				"segunda-feira",
				"terça-feira",
				"quarta-feira",
				"quinta-feira",
				"sexta-feira",
				"sábado"
			]
		};
		dayPeriodValues$5 = {
			narrow: {
				am: "a",
				pm: "p",
				midnight: "mn",
				noon: "md",
				morning: "manhã",
				afternoon: "tarde",
				evening: "tarde",
				night: "noite"
			},
			abbreviated: {
				am: "AM",
				pm: "PM",
				midnight: "meia-noite",
				noon: "meio-dia",
				morning: "manhã",
				afternoon: "tarde",
				evening: "tarde",
				night: "noite"
			},
			wide: {
				am: "a.m.",
				pm: "p.m.",
				midnight: "meia-noite",
				noon: "meio-dia",
				morning: "manhã",
				afternoon: "tarde",
				evening: "tarde",
				night: "noite"
			}
		};
		formattingDayPeriodValues$5 = {
			narrow: {
				am: "a",
				pm: "p",
				midnight: "mn",
				noon: "md",
				morning: "da manhã",
				afternoon: "da tarde",
				evening: "da tarde",
				night: "da noite"
			},
			abbreviated: {
				am: "AM",
				pm: "PM",
				midnight: "meia-noite",
				noon: "meio-dia",
				morning: "da manhã",
				afternoon: "da tarde",
				evening: "da tarde",
				night: "da noite"
			},
			wide: {
				am: "a.m.",
				pm: "p.m.",
				midnight: "meia-noite",
				noon: "meio-dia",
				morning: "da manhã",
				afternoon: "da tarde",
				evening: "da tarde",
				night: "da noite"
			}
		};
		ordinalNumber$5 = (dirtyNumber, options) => {
			const number = Number(dirtyNumber);
			if (options?.unit === "week") return number + "ª";
			return number + "º";
		};
		localize$5 = {
			ordinalNumber: ordinalNumber$5,
			era: buildLocalizeFn({
				values: eraValues$5,
				defaultWidth: "wide"
			}),
			quarter: buildLocalizeFn({
				values: quarterValues$5,
				defaultWidth: "wide",
				argumentCallback: (quarter) => quarter - 1
			}),
			month: buildLocalizeFn({
				values: monthValues$5,
				defaultWidth: "wide"
			}),
			day: buildLocalizeFn({
				values: dayValues$5,
				defaultWidth: "wide"
			}),
			dayPeriod: buildLocalizeFn({
				values: dayPeriodValues$5,
				defaultWidth: "wide",
				formattingValues: formattingDayPeriodValues$5,
				defaultFormattingWidth: "wide"
			})
		};
	})))();
}
//#endregion
//#region ../node_modules/.store/date-fns@4.4.0-N3CoundlhH8enmbadGmv6Q/node_modules/date-fns/locale/pt-BR/_lib/match.js
var matchOrdinalNumberPattern$5, parseOrdinalNumberPattern$5, matchEraPatterns$5, parseEraPatterns$5, matchQuarterPatterns$5, parseQuarterPatterns$5, matchMonthPatterns$5, parseMonthPatterns$5, matchDayPatterns$5, parseDayPatterns$5, matchDayPeriodPatterns$5, parseDayPeriodPatterns$5, match$5;
function init_match$10() {
	return (init_match$10 = __esmMin((() => {
		matchOrdinalNumberPattern$5 = /^(\d+)[ºªo]?/i;
		parseOrdinalNumberPattern$5 = /\d+/i;
		matchEraPatterns$5 = {
			narrow: /^(ac|dc|a|d)/i,
			abbreviated: /^(a\.?\s?c\.?|d\.?\s?c\.?)/i,
			wide: /^(antes de cristo|depois de cristo)/i
		};
		parseEraPatterns$5 = {
			any: [/^ac/i, /^dc/i],
			wide: [/^antes de cristo/i, /^depois de cristo/i]
		};
		matchQuarterPatterns$5 = {
			narrow: /^[1234]/i,
			abbreviated: /^T[1234]/i,
			wide: /^[1234](º)? trimestre/i
		};
		parseQuarterPatterns$5 = { any: [
			/1/i,
			/2/i,
			/3/i,
			/4/i
		] };
		matchMonthPatterns$5 = {
			narrow: /^[jfmajsond]/i,
			abbreviated: /^(jan|fev|mar|abr|mai|jun|jul|ago|set|out|nov|dez)/i,
			wide: /^(janeiro|fevereiro|março|abril|maio|junho|julho|agosto|setembro|outubro|novembro|dezembro)/i
		};
		parseMonthPatterns$5 = {
			narrow: [
				/^j/i,
				/^f/i,
				/^m/i,
				/^a/i,
				/^m/i,
				/^j/i,
				/^j/i,
				/^a/i,
				/^s/i,
				/^o/i,
				/^n/i,
				/^d/i
			],
			any: [
				/^ja/i,
				/^fev/i,
				/^mar/i,
				/^abr/i,
				/^mai/i,
				/^jun/i,
				/^jul/i,
				/^ago/i,
				/^set/i,
				/^out/i,
				/^nov/i,
				/^dez/i
			]
		};
		matchDayPatterns$5 = {
			narrow: /^(dom|[23456]ª?|s[aá]b)/i,
			short: /^(dom|[23456]ª?|s[aá]b)/i,
			abbreviated: /^(dom|seg|ter|qua|qui|sex|s[aá]b)/i,
			wide: /^(domingo|(segunda|ter[cç]a|quarta|quinta|sexta)([- ]feira)?|s[aá]bado)/i
		};
		parseDayPatterns$5 = {
			short: [
				/^d/i,
				/^2/i,
				/^3/i,
				/^4/i,
				/^5/i,
				/^6/i,
				/^s[aá]/i
			],
			narrow: [
				/^d/i,
				/^2/i,
				/^3/i,
				/^4/i,
				/^5/i,
				/^6/i,
				/^s[aá]/i
			],
			any: [
				/^d/i,
				/^seg/i,
				/^t/i,
				/^qua/i,
				/^qui/i,
				/^sex/i,
				/^s[aá]b/i
			]
		};
		matchDayPeriodPatterns$5 = {
			narrow: /^(a|p|mn|md|(da) (manhã|tarde|noite))/i,
			any: /^([ap]\.?\s?m\.?|meia[-\s]noite|meio[-\s]dia|(da) (manhã|tarde|noite))/i
		};
		parseDayPeriodPatterns$5 = { any: {
			am: /^a/i,
			pm: /^p/i,
			midnight: /^mn|^meia[-\s]noite/i,
			noon: /^md|^meio[-\s]dia/i,
			morning: /manhã/i,
			afternoon: /tarde/i,
			evening: /tarde/i,
			night: /noite/i
		} };
		match$5 = {
			ordinalNumber: buildMatchPatternFn({
				matchPattern: matchOrdinalNumberPattern$5,
				parsePattern: parseOrdinalNumberPattern$5,
				valueCallback: (value) => parseInt(value, 10)
			}),
			era: buildMatchFn({
				matchPatterns: matchEraPatterns$5,
				defaultMatchWidth: "wide",
				parsePatterns: parseEraPatterns$5,
				defaultParseWidth: "any"
			}),
			quarter: buildMatchFn({
				matchPatterns: matchQuarterPatterns$5,
				defaultMatchWidth: "wide",
				parsePatterns: parseQuarterPatterns$5,
				defaultParseWidth: "any",
				valueCallback: (index) => index + 1
			}),
			month: buildMatchFn({
				matchPatterns: matchMonthPatterns$5,
				defaultMatchWidth: "wide",
				parsePatterns: parseMonthPatterns$5,
				defaultParseWidth: "any"
			}),
			day: buildMatchFn({
				matchPatterns: matchDayPatterns$5,
				defaultMatchWidth: "wide",
				parsePatterns: parseDayPatterns$5,
				defaultParseWidth: "any"
			}),
			dayPeriod: buildMatchFn({
				matchPatterns: matchDayPeriodPatterns$5,
				defaultMatchWidth: "any",
				parsePatterns: parseDayPeriodPatterns$5,
				defaultParseWidth: "any"
			})
		};
	})))();
}
//#endregion
//#region ../node_modules/.store/date-fns@4.4.0-N3CoundlhH8enmbadGmv6Q/node_modules/date-fns/locale/pt-BR.js
var ptBR;
function init_pt_BR() {
	return (init_pt_BR = __esmMin((() => {
		init_formatDistance$10();
		init_formatLong$10();
		init_formatRelative$10();
		init_localize$10();
		init_match$10();
		ptBR = {
			code: "pt-BR",
			formatDistance: formatDistance$5,
			formatLong: formatLong$5,
			formatRelative: formatRelative$5,
			localize: localize$5,
			match: match$5,
			options: {
				weekStartsOn: 0,
				firstWeekContainsDate: 1
			}
		};
	})))();
}
//#endregion
//#region ../node_modules/.store/date-fns@4.4.0-N3CoundlhH8enmbadGmv6Q/node_modules/date-fns/locale/ru/_lib/formatDistance.js
function declension(scheme, count) {
	if (scheme.one !== void 0 && count === 1) return scheme.one;
	const rem10 = count % 10;
	const rem100 = count % 100;
	if (rem10 === 1 && rem100 !== 11) return scheme.singularNominative.replace("{{count}}", String(count));
	else if (rem10 >= 2 && rem10 <= 4 && (rem100 < 10 || rem100 > 20)) return scheme.singularGenitive.replace("{{count}}", String(count));
	else return scheme.pluralGenitive.replace("{{count}}", String(count));
}
function buildLocalizeTokenFn(scheme) {
	return (count, options) => {
		if (options?.addSuffix) {
			if (options.comparison && options.comparison > 0) {
				if (scheme.future) return declension(scheme.future, count);
				else return "через " + declension(scheme.regular, count);
			} else if (scheme.past) return declension(scheme.past, count);
			else return declension(scheme.regular, count) + " назад";
		} else return declension(scheme.regular, count);
	};
}
var formatDistanceLocale$4, formatDistance$4;
function init_formatDistance$11() {
	return (init_formatDistance$11 = __esmMin((() => {
		formatDistanceLocale$4 = {
			lessThanXSeconds: buildLocalizeTokenFn({
				regular: {
					one: "меньше секунды",
					singularNominative: "меньше {{count}} секунды",
					singularGenitive: "меньше {{count}} секунд",
					pluralGenitive: "меньше {{count}} секунд"
				},
				future: {
					one: "меньше, чем через секунду",
					singularNominative: "меньше, чем через {{count}} секунду",
					singularGenitive: "меньше, чем через {{count}} секунды",
					pluralGenitive: "меньше, чем через {{count}} секунд"
				}
			}),
			xSeconds: buildLocalizeTokenFn({
				regular: {
					singularNominative: "{{count}} секунда",
					singularGenitive: "{{count}} секунды",
					pluralGenitive: "{{count}} секунд"
				},
				past: {
					singularNominative: "{{count}} секунду назад",
					singularGenitive: "{{count}} секунды назад",
					pluralGenitive: "{{count}} секунд назад"
				},
				future: {
					singularNominative: "через {{count}} секунду",
					singularGenitive: "через {{count}} секунды",
					pluralGenitive: "через {{count}} секунд"
				}
			}),
			halfAMinute: (_count, options) => {
				if (options?.addSuffix) {
					if (options.comparison && options.comparison > 0) return "через полминуты";
					else return "полминуты назад";
				}
				return "полминуты";
			},
			lessThanXMinutes: buildLocalizeTokenFn({
				regular: {
					one: "меньше минуты",
					singularNominative: "меньше {{count}} минуты",
					singularGenitive: "меньше {{count}} минут",
					pluralGenitive: "меньше {{count}} минут"
				},
				future: {
					one: "меньше, чем через минуту",
					singularNominative: "меньше, чем через {{count}} минуту",
					singularGenitive: "меньше, чем через {{count}} минуты",
					pluralGenitive: "меньше, чем через {{count}} минут"
				}
			}),
			xMinutes: buildLocalizeTokenFn({
				regular: {
					singularNominative: "{{count}} минута",
					singularGenitive: "{{count}} минуты",
					pluralGenitive: "{{count}} минут"
				},
				past: {
					singularNominative: "{{count}} минуту назад",
					singularGenitive: "{{count}} минуты назад",
					pluralGenitive: "{{count}} минут назад"
				},
				future: {
					singularNominative: "через {{count}} минуту",
					singularGenitive: "через {{count}} минуты",
					pluralGenitive: "через {{count}} минут"
				}
			}),
			aboutXHours: buildLocalizeTokenFn({
				regular: {
					singularNominative: "около {{count}} часа",
					singularGenitive: "около {{count}} часов",
					pluralGenitive: "около {{count}} часов"
				},
				future: {
					singularNominative: "приблизительно через {{count}} час",
					singularGenitive: "приблизительно через {{count}} часа",
					pluralGenitive: "приблизительно через {{count}} часов"
				}
			}),
			xHours: buildLocalizeTokenFn({ regular: {
				singularNominative: "{{count}} час",
				singularGenitive: "{{count}} часа",
				pluralGenitive: "{{count}} часов"
			} }),
			xDays: buildLocalizeTokenFn({ regular: {
				singularNominative: "{{count}} день",
				singularGenitive: "{{count}} дня",
				pluralGenitive: "{{count}} дней"
			} }),
			aboutXWeeks: buildLocalizeTokenFn({
				regular: {
					singularNominative: "около {{count}} недели",
					singularGenitive: "около {{count}} недель",
					pluralGenitive: "около {{count}} недель"
				},
				future: {
					singularNominative: "приблизительно через {{count}} неделю",
					singularGenitive: "приблизительно через {{count}} недели",
					pluralGenitive: "приблизительно через {{count}} недель"
				}
			}),
			xWeeks: buildLocalizeTokenFn({ regular: {
				singularNominative: "{{count}} неделя",
				singularGenitive: "{{count}} недели",
				pluralGenitive: "{{count}} недель"
			} }),
			aboutXMonths: buildLocalizeTokenFn({
				regular: {
					singularNominative: "около {{count}} месяца",
					singularGenitive: "около {{count}} месяцев",
					pluralGenitive: "около {{count}} месяцев"
				},
				future: {
					singularNominative: "приблизительно через {{count}} месяц",
					singularGenitive: "приблизительно через {{count}} месяца",
					pluralGenitive: "приблизительно через {{count}} месяцев"
				}
			}),
			xMonths: buildLocalizeTokenFn({ regular: {
				singularNominative: "{{count}} месяц",
				singularGenitive: "{{count}} месяца",
				pluralGenitive: "{{count}} месяцев"
			} }),
			aboutXYears: buildLocalizeTokenFn({
				regular: {
					singularNominative: "около {{count}} года",
					singularGenitive: "около {{count}} лет",
					pluralGenitive: "около {{count}} лет"
				},
				future: {
					singularNominative: "приблизительно через {{count}} год",
					singularGenitive: "приблизительно через {{count}} года",
					pluralGenitive: "приблизительно через {{count}} лет"
				}
			}),
			xYears: buildLocalizeTokenFn({ regular: {
				singularNominative: "{{count}} год",
				singularGenitive: "{{count}} года",
				pluralGenitive: "{{count}} лет"
			} }),
			overXYears: buildLocalizeTokenFn({
				regular: {
					singularNominative: "больше {{count}} года",
					singularGenitive: "больше {{count}} лет",
					pluralGenitive: "больше {{count}} лет"
				},
				future: {
					singularNominative: "больше, чем через {{count}} год",
					singularGenitive: "больше, чем через {{count}} года",
					pluralGenitive: "больше, чем через {{count}} лет"
				}
			}),
			almostXYears: buildLocalizeTokenFn({
				regular: {
					singularNominative: "почти {{count}} год",
					singularGenitive: "почти {{count}} года",
					pluralGenitive: "почти {{count}} лет"
				},
				future: {
					singularNominative: "почти через {{count}} год",
					singularGenitive: "почти через {{count}} года",
					pluralGenitive: "почти через {{count}} лет"
				}
			})
		};
		formatDistance$4 = (token, count, options) => {
			return formatDistanceLocale$4[token](count, options);
		};
	})))();
}
//#endregion
//#region ../node_modules/.store/date-fns@4.4.0-N3CoundlhH8enmbadGmv6Q/node_modules/date-fns/locale/ru/_lib/formatLong.js
var dateFormats$4, timeFormats$4, dateTimeFormats$4, formatLong$4;
function init_formatLong$11() {
	return (init_formatLong$11 = __esmMin((() => {
		dateFormats$4 = {
			full: "EEEE, d MMMM y 'г.'",
			long: "d MMMM y 'г.'",
			medium: "d MMM y 'г.'",
			short: "dd.MM.y"
		};
		timeFormats$4 = {
			full: "H:mm:ss zzzz",
			long: "H:mm:ss z",
			medium: "H:mm:ss",
			short: "H:mm"
		};
		dateTimeFormats$4 = { any: "{{date}}, {{time}}" };
		formatLong$4 = {
			date: buildFormatLongFn({
				formats: dateFormats$4,
				defaultWidth: "full"
			}),
			time: buildFormatLongFn({
				formats: timeFormats$4,
				defaultWidth: "full"
			}),
			dateTime: buildFormatLongFn({
				formats: dateTimeFormats$4,
				defaultWidth: "any"
			})
		};
	})))();
}
//#endregion
//#region ../node_modules/.store/date-fns@4.4.0-N3CoundlhH8enmbadGmv6Q/node_modules/date-fns/locale/ru/_lib/formatRelative.js
function lastWeek(day) {
	const weekday = accusativeWeekdays[day];
	switch (day) {
		case 0: return "'в прошлое " + weekday + " в' p";
		case 1:
		case 2:
		case 4: return "'в прошлый " + weekday + " в' p";
		case 3:
		case 5:
		case 6: return "'в прошлую " + weekday + " в' p";
	}
}
function thisWeek(day) {
	const weekday = accusativeWeekdays[day];
	if (day === 2) return "'во " + weekday + " в' p";
	else return "'в " + weekday + " в' p";
}
function nextWeek(day) {
	const weekday = accusativeWeekdays[day];
	switch (day) {
		case 0: return "'в следующее " + weekday + " в' p";
		case 1:
		case 2:
		case 4: return "'в следующий " + weekday + " в' p";
		case 3:
		case 5:
		case 6: return "'в следующую " + weekday + " в' p";
	}
}
var accusativeWeekdays, formatRelativeLocale$4, formatRelative$4;
function init_formatRelative$11() {
	return (init_formatRelative$11 = __esmMin((() => {
		init_isSameWeek();
		accusativeWeekdays = [
			"воскресенье",
			"понедельник",
			"вторник",
			"среду",
			"четверг",
			"пятницу",
			"субботу"
		];
		formatRelativeLocale$4 = {
			lastWeek: (date, baseDate, options) => {
				const day = date.getDay();
				if (isSameWeek(date, baseDate, options)) return thisWeek(day);
				else return lastWeek(day);
			},
			yesterday: "'вчера в' p",
			today: "'сегодня в' p",
			tomorrow: "'завтра в' p",
			nextWeek: (date, baseDate, options) => {
				const day = date.getDay();
				if (isSameWeek(date, baseDate, options)) return thisWeek(day);
				else return nextWeek(day);
			},
			other: "P"
		};
		formatRelative$4 = (token, date, baseDate, options) => {
			const format = formatRelativeLocale$4[token];
			if (typeof format === "function") return format(date, baseDate, options);
			return format;
		};
	})))();
}
//#endregion
//#region ../node_modules/.store/date-fns@4.4.0-N3CoundlhH8enmbadGmv6Q/node_modules/date-fns/locale/ru/_lib/localize.js
var eraValues$4, quarterValues$4, monthValues$4, formattingMonthValues, dayValues$4, dayPeriodValues$4, formattingDayPeriodValues$4, ordinalNumber$4, localize$4;
function init_localize$11() {
	return (init_localize$11 = __esmMin((() => {
		eraValues$4 = {
			narrow: ["до н.э.", "н.э."],
			abbreviated: ["до н. э.", "н. э."],
			wide: ["до нашей эры", "нашей эры"]
		};
		quarterValues$4 = {
			narrow: [
				"1",
				"2",
				"3",
				"4"
			],
			abbreviated: [
				"1-й кв.",
				"2-й кв.",
				"3-й кв.",
				"4-й кв."
			],
			wide: [
				"1-й квартал",
				"2-й квартал",
				"3-й квартал",
				"4-й квартал"
			]
		};
		monthValues$4 = {
			narrow: [
				"Я",
				"Ф",
				"М",
				"А",
				"М",
				"И",
				"И",
				"А",
				"С",
				"О",
				"Н",
				"Д"
			],
			abbreviated: [
				"янв.",
				"фев.",
				"март",
				"апр.",
				"май",
				"июнь",
				"июль",
				"авг.",
				"сент.",
				"окт.",
				"нояб.",
				"дек."
			],
			wide: [
				"январь",
				"февраль",
				"март",
				"апрель",
				"май",
				"июнь",
				"июль",
				"август",
				"сентябрь",
				"октябрь",
				"ноябрь",
				"декабрь"
			]
		};
		formattingMonthValues = {
			narrow: [
				"Я",
				"Ф",
				"М",
				"А",
				"М",
				"И",
				"И",
				"А",
				"С",
				"О",
				"Н",
				"Д"
			],
			abbreviated: [
				"янв.",
				"фев.",
				"мар.",
				"апр.",
				"мая",
				"июн.",
				"июл.",
				"авг.",
				"сент.",
				"окт.",
				"нояб.",
				"дек."
			],
			wide: [
				"января",
				"февраля",
				"марта",
				"апреля",
				"мая",
				"июня",
				"июля",
				"августа",
				"сентября",
				"октября",
				"ноября",
				"декабря"
			]
		};
		dayValues$4 = {
			narrow: [
				"В",
				"П",
				"В",
				"С",
				"Ч",
				"П",
				"С"
			],
			short: [
				"вс",
				"пн",
				"вт",
				"ср",
				"чт",
				"пт",
				"сб"
			],
			abbreviated: [
				"вск",
				"пнд",
				"втр",
				"срд",
				"чтв",
				"птн",
				"суб"
			],
			wide: [
				"воскресенье",
				"понедельник",
				"вторник",
				"среда",
				"четверг",
				"пятница",
				"суббота"
			]
		};
		dayPeriodValues$4 = {
			narrow: {
				am: "ДП",
				pm: "ПП",
				midnight: "полн.",
				noon: "полд.",
				morning: "утро",
				afternoon: "день",
				evening: "веч.",
				night: "ночь"
			},
			abbreviated: {
				am: "ДП",
				pm: "ПП",
				midnight: "полн.",
				noon: "полд.",
				morning: "утро",
				afternoon: "день",
				evening: "веч.",
				night: "ночь"
			},
			wide: {
				am: "ДП",
				pm: "ПП",
				midnight: "полночь",
				noon: "полдень",
				morning: "утро",
				afternoon: "день",
				evening: "вечер",
				night: "ночь"
			}
		};
		formattingDayPeriodValues$4 = {
			narrow: {
				am: "ДП",
				pm: "ПП",
				midnight: "полн.",
				noon: "полд.",
				morning: "утра",
				afternoon: "дня",
				evening: "веч.",
				night: "ночи"
			},
			abbreviated: {
				am: "ДП",
				pm: "ПП",
				midnight: "полн.",
				noon: "полд.",
				morning: "утра",
				afternoon: "дня",
				evening: "веч.",
				night: "ночи"
			},
			wide: {
				am: "ДП",
				pm: "ПП",
				midnight: "полночь",
				noon: "полдень",
				morning: "утра",
				afternoon: "дня",
				evening: "вечера",
				night: "ночи"
			}
		};
		ordinalNumber$4 = (dirtyNumber, options) => {
			const number = Number(dirtyNumber);
			const unit = options?.unit;
			let suffix;
			if (unit === "date") suffix = "-е";
			else if (unit === "week" || unit === "minute" || unit === "second") suffix = "-я";
			else suffix = "-й";
			return number + suffix;
		};
		localize$4 = {
			ordinalNumber: ordinalNumber$4,
			era: buildLocalizeFn({
				values: eraValues$4,
				defaultWidth: "wide"
			}),
			quarter: buildLocalizeFn({
				values: quarterValues$4,
				defaultWidth: "wide",
				argumentCallback: (quarter) => quarter - 1
			}),
			month: buildLocalizeFn({
				values: monthValues$4,
				defaultWidth: "wide",
				formattingValues: formattingMonthValues,
				defaultFormattingWidth: "wide"
			}),
			day: buildLocalizeFn({
				values: dayValues$4,
				defaultWidth: "wide"
			}),
			dayPeriod: buildLocalizeFn({
				values: dayPeriodValues$4,
				defaultWidth: "any",
				formattingValues: formattingDayPeriodValues$4,
				defaultFormattingWidth: "wide"
			})
		};
	})))();
}
//#endregion
//#region ../node_modules/.store/date-fns@4.4.0-N3CoundlhH8enmbadGmv6Q/node_modules/date-fns/locale/ru/_lib/match.js
var matchOrdinalNumberPattern$4, parseOrdinalNumberPattern$4, matchEraPatterns$4, parseEraPatterns$4, matchQuarterPatterns$4, parseQuarterPatterns$4, matchMonthPatterns$4, parseMonthPatterns$4, matchDayPatterns$4, parseDayPatterns$4, matchDayPeriodPatterns$4, parseDayPeriodPatterns$4, match$4;
function init_match$11() {
	return (init_match$11 = __esmMin((() => {
		matchOrdinalNumberPattern$4 = /^(\d+)(-?(е|я|й|ое|ье|ая|ья|ый|ой|ий|ый))?/i;
		parseOrdinalNumberPattern$4 = /\d+/i;
		matchEraPatterns$4 = {
			narrow: /^((до )?н\.?\s?э\.?)/i,
			abbreviated: /^((до )?н\.?\s?э\.?)/i,
			wide: /^(до нашей эры|нашей эры|наша эра)/i
		};
		parseEraPatterns$4 = { any: [/^д/i, /^н/i] };
		matchQuarterPatterns$4 = {
			narrow: /^[1234]/i,
			abbreviated: /^[1234](-?[ыои]?й?)? кв.?/i,
			wide: /^[1234](-?[ыои]?й?)? квартал/i
		};
		parseQuarterPatterns$4 = { any: [
			/1/i,
			/2/i,
			/3/i,
			/4/i
		] };
		matchMonthPatterns$4 = {
			narrow: /^[яфмаисонд]/i,
			abbreviated: /^(янв|фев|март?|апр|ма[йя]|июн[ья]?|июл[ья]?|авг|сент?|окт|нояб?|дек)\.?/i,
			wide: /^(январ[ья]|феврал[ья]|марта?|апрел[ья]|ма[йя]|июн[ья]|июл[ья]|августа?|сентябр[ья]|октябр[ья]|октябр[ья]|ноябр[ья]|декабр[ья])/i
		};
		parseMonthPatterns$4 = {
			narrow: [
				/^я/i,
				/^ф/i,
				/^м/i,
				/^а/i,
				/^м/i,
				/^и/i,
				/^и/i,
				/^а/i,
				/^с/i,
				/^о/i,
				/^н/i,
				/^я/i
			],
			any: [
				/^я/i,
				/^ф/i,
				/^мар/i,
				/^ап/i,
				/^ма[йя]/i,
				/^июн/i,
				/^июл/i,
				/^ав/i,
				/^с/i,
				/^о/i,
				/^н/i,
				/^д/i
			]
		};
		matchDayPatterns$4 = {
			narrow: /^[впсч]/i,
			short: /^(вс|во|пн|по|вт|ср|чт|че|пт|пя|сб|су)\.?/i,
			abbreviated: /^(вск|вос|пнд|пон|втр|вто|срд|сре|чтв|чет|птн|пят|суб).?/i,
			wide: /^(воскресень[ея]|понедельника?|вторника?|сред[аы]|четверга?|пятниц[аы]|суббот[аы])/i
		};
		parseDayPatterns$4 = {
			narrow: [
				/^в/i,
				/^п/i,
				/^в/i,
				/^с/i,
				/^ч/i,
				/^п/i,
				/^с/i
			],
			any: [
				/^в[ос]/i,
				/^п[он]/i,
				/^в/i,
				/^ср/i,
				/^ч/i,
				/^п[ят]/i,
				/^с[уб]/i
			]
		};
		matchDayPeriodPatterns$4 = {
			narrow: /^([дп]п|полн\.?|полд\.?|утр[оа]|день|дня|веч\.?|ноч[ьи])/i,
			abbreviated: /^([дп]п|полн\.?|полд\.?|утр[оа]|день|дня|веч\.?|ноч[ьи])/i,
			wide: /^([дп]п|полночь|полдень|утр[оа]|день|дня|вечера?|ноч[ьи])/i
		};
		parseDayPeriodPatterns$4 = { any: {
			am: /^дп/i,
			pm: /^пп/i,
			midnight: /^полн/i,
			noon: /^полд/i,
			morning: /^у/i,
			afternoon: /^д[ен]/i,
			evening: /^в/i,
			night: /^н/i
		} };
		match$4 = {
			ordinalNumber: buildMatchPatternFn({
				matchPattern: matchOrdinalNumberPattern$4,
				parsePattern: parseOrdinalNumberPattern$4,
				valueCallback: (value) => parseInt(value, 10)
			}),
			era: buildMatchFn({
				matchPatterns: matchEraPatterns$4,
				defaultMatchWidth: "wide",
				parsePatterns: parseEraPatterns$4,
				defaultParseWidth: "any"
			}),
			quarter: buildMatchFn({
				matchPatterns: matchQuarterPatterns$4,
				defaultMatchWidth: "wide",
				parsePatterns: parseQuarterPatterns$4,
				defaultParseWidth: "any",
				valueCallback: (index) => index + 1
			}),
			month: buildMatchFn({
				matchPatterns: matchMonthPatterns$4,
				defaultMatchWidth: "wide",
				parsePatterns: parseMonthPatterns$4,
				defaultParseWidth: "any"
			}),
			day: buildMatchFn({
				matchPatterns: matchDayPatterns$4,
				defaultMatchWidth: "wide",
				parsePatterns: parseDayPatterns$4,
				defaultParseWidth: "any"
			}),
			dayPeriod: buildMatchFn({
				matchPatterns: matchDayPeriodPatterns$4,
				defaultMatchWidth: "wide",
				parsePatterns: parseDayPeriodPatterns$4,
				defaultParseWidth: "any"
			})
		};
	})))();
}
//#endregion
//#region ../node_modules/.store/date-fns@4.4.0-N3CoundlhH8enmbadGmv6Q/node_modules/date-fns/locale/ru.js
var ru;
function init_ru() {
	return (init_ru = __esmMin((() => {
		init_formatDistance$11();
		init_formatLong$11();
		init_formatRelative$11();
		init_localize$11();
		init_match$11();
		ru = {
			code: "ru",
			formatDistance: formatDistance$4,
			formatLong: formatLong$4,
			formatRelative: formatRelative$4,
			localize: localize$4,
			match: match$4,
			options: {
				weekStartsOn: 1,
				firstWeekContainsDate: 1
			}
		};
	})))();
}
//#endregion
//#region ../node_modules/.store/date-fns@4.4.0-N3CoundlhH8enmbadGmv6Q/node_modules/date-fns/locale/sv/_lib/formatDistance.js
var formatDistanceLocale$3, wordMapping, formatDistance$3;
function init_formatDistance$12() {
	return (init_formatDistance$12 = __esmMin((() => {
		formatDistanceLocale$3 = {
			lessThanXSeconds: {
				one: "mindre än en sekund",
				other: "mindre än {{count}} sekunder"
			},
			xSeconds: {
				one: "en sekund",
				other: "{{count}} sekunder"
			},
			halfAMinute: "en halv minut",
			lessThanXMinutes: {
				one: "mindre än en minut",
				other: "mindre än {{count}} minuter"
			},
			xMinutes: {
				one: "en minut",
				other: "{{count}} minuter"
			},
			aboutXHours: {
				one: "ungefär en timme",
				other: "ungefär {{count}} timmar"
			},
			xHours: {
				one: "en timme",
				other: "{{count}} timmar"
			},
			xDays: {
				one: "en dag",
				other: "{{count}} dagar"
			},
			aboutXWeeks: {
				one: "ungefär en vecka",
				other: "ungefär {{count}} veckor"
			},
			xWeeks: {
				one: "en vecka",
				other: "{{count}} veckor"
			},
			aboutXMonths: {
				one: "ungefär en månad",
				other: "ungefär {{count}} månader"
			},
			xMonths: {
				one: "en månad",
				other: "{{count}} månader"
			},
			aboutXYears: {
				one: "ungefär ett år",
				other: "ungefär {{count}} år"
			},
			xYears: {
				one: "ett år",
				other: "{{count}} år"
			},
			overXYears: {
				one: "över ett år",
				other: "över {{count}} år"
			},
			almostXYears: {
				one: "nästan ett år",
				other: "nästan {{count}} år"
			}
		};
		wordMapping = [
			"noll",
			"en",
			"två",
			"tre",
			"fyra",
			"fem",
			"sex",
			"sju",
			"åtta",
			"nio",
			"tio",
			"elva",
			"tolv"
		];
		formatDistance$3 = (token, count, options) => {
			let result;
			const tokenValue = formatDistanceLocale$3[token];
			if (typeof tokenValue === "string") result = tokenValue;
			else if (count === 1) result = tokenValue.one;
			else result = tokenValue.other.replace("{{count}}", count < 13 ? wordMapping[count] : String(count));
			if (options?.addSuffix) {
				if (options.comparison && options.comparison > 0) return "om " + result;
				else return result + " sedan";
			}
			return result;
		};
	})))();
}
//#endregion
//#region ../node_modules/.store/date-fns@4.4.0-N3CoundlhH8enmbadGmv6Q/node_modules/date-fns/locale/sv/_lib/formatLong.js
var dateFormats$3, timeFormats$3, dateTimeFormats$3, formatLong$3;
function init_formatLong$12() {
	return (init_formatLong$12 = __esmMin((() => {
		dateFormats$3 = {
			full: "EEEE d MMMM y",
			long: "d MMMM y",
			medium: "d MMM y",
			short: "y-MM-dd"
		};
		timeFormats$3 = {
			full: "'kl'. HH:mm:ss zzzz",
			long: "HH:mm:ss z",
			medium: "HH:mm:ss",
			short: "HH:mm"
		};
		dateTimeFormats$3 = {
			full: "{{date}} 'kl.' {{time}}",
			long: "{{date}} 'kl.' {{time}}",
			medium: "{{date}} {{time}}",
			short: "{{date}} {{time}}"
		};
		formatLong$3 = {
			date: buildFormatLongFn({
				formats: dateFormats$3,
				defaultWidth: "full"
			}),
			time: buildFormatLongFn({
				formats: timeFormats$3,
				defaultWidth: "full"
			}),
			dateTime: buildFormatLongFn({
				formats: dateTimeFormats$3,
				defaultWidth: "full"
			})
		};
	})))();
}
//#endregion
//#region ../node_modules/.store/date-fns@4.4.0-N3CoundlhH8enmbadGmv6Q/node_modules/date-fns/locale/sv/_lib/formatRelative.js
var formatRelativeLocale$3, formatRelative$3;
function init_formatRelative$12() {
	return (init_formatRelative$12 = __esmMin((() => {
		formatRelativeLocale$3 = {
			lastWeek: "'i' EEEE's kl.' p",
			yesterday: "'igår kl.' p",
			today: "'idag kl.' p",
			tomorrow: "'imorgon kl.' p",
			nextWeek: "EEEE 'kl.' p",
			other: "P"
		};
		formatRelative$3 = (token, _date, _baseDate, _options) => formatRelativeLocale$3[token];
	})))();
}
//#endregion
//#region ../node_modules/.store/date-fns@4.4.0-N3CoundlhH8enmbadGmv6Q/node_modules/date-fns/locale/sv/_lib/localize.js
var eraValues$3, quarterValues$3, monthValues$3, dayValues$3, dayPeriodValues$3, formattingDayPeriodValues$3, ordinalNumber$3, localize$3;
function init_localize$12() {
	return (init_localize$12 = __esmMin((() => {
		eraValues$3 = {
			narrow: ["f.Kr.", "e.Kr."],
			abbreviated: ["f.Kr.", "e.Kr."],
			wide: ["före Kristus", "efter Kristus"]
		};
		quarterValues$3 = {
			narrow: [
				"1",
				"2",
				"3",
				"4"
			],
			abbreviated: [
				"Q1",
				"Q2",
				"Q3",
				"Q4"
			],
			wide: [
				"1:a kvartalet",
				"2:a kvartalet",
				"3:e kvartalet",
				"4:e kvartalet"
			]
		};
		monthValues$3 = {
			narrow: [
				"J",
				"F",
				"M",
				"A",
				"M",
				"J",
				"J",
				"A",
				"S",
				"O",
				"N",
				"D"
			],
			abbreviated: [
				"jan.",
				"feb.",
				"mars",
				"apr.",
				"maj",
				"juni",
				"juli",
				"aug.",
				"sep.",
				"okt.",
				"nov.",
				"dec."
			],
			wide: [
				"januari",
				"februari",
				"mars",
				"april",
				"maj",
				"juni",
				"juli",
				"augusti",
				"september",
				"oktober",
				"november",
				"december"
			]
		};
		dayValues$3 = {
			narrow: [
				"S",
				"M",
				"T",
				"O",
				"T",
				"F",
				"L"
			],
			short: [
				"sö",
				"må",
				"ti",
				"on",
				"to",
				"fr",
				"lö"
			],
			abbreviated: [
				"sön",
				"mån",
				"tis",
				"ons",
				"tors",
				"fre",
				"lör"
			],
			wide: [
				"söndag",
				"måndag",
				"tisdag",
				"onsdag",
				"torsdag",
				"fredag",
				"lördag"
			]
		};
		dayPeriodValues$3 = {
			narrow: {
				am: "fm",
				pm: "em",
				midnight: "midnatt",
				noon: "middag",
				morning: "morg.",
				afternoon: "efterm.",
				evening: "kväll",
				night: "natt"
			},
			abbreviated: {
				am: "f.m.",
				pm: "e.m.",
				midnight: "midnatt",
				noon: "middag",
				morning: "morgon",
				afternoon: "efterm.",
				evening: "kväll",
				night: "natt"
			},
			wide: {
				am: "förmiddag",
				pm: "eftermiddag",
				midnight: "midnatt",
				noon: "middag",
				morning: "morgon",
				afternoon: "eftermiddag",
				evening: "kväll",
				night: "natt"
			}
		};
		formattingDayPeriodValues$3 = {
			narrow: {
				am: "fm",
				pm: "em",
				midnight: "midnatt",
				noon: "middag",
				morning: "på morg.",
				afternoon: "på efterm.",
				evening: "på kvällen",
				night: "på natten"
			},
			abbreviated: {
				am: "fm",
				pm: "em",
				midnight: "midnatt",
				noon: "middag",
				morning: "på morg.",
				afternoon: "på efterm.",
				evening: "på kvällen",
				night: "på natten"
			},
			wide: {
				am: "fm",
				pm: "em",
				midnight: "midnatt",
				noon: "middag",
				morning: "på morgonen",
				afternoon: "på eftermiddagen",
				evening: "på kvällen",
				night: "på natten"
			}
		};
		ordinalNumber$3 = (dirtyNumber, _options) => {
			const number = Number(dirtyNumber);
			const rem100 = number % 100;
			if (rem100 > 20 || rem100 < 10) switch (rem100 % 10) {
				case 1:
				case 2: return number + ":a";
			}
			return number + ":e";
		};
		localize$3 = {
			ordinalNumber: ordinalNumber$3,
			era: buildLocalizeFn({
				values: eraValues$3,
				defaultWidth: "wide"
			}),
			quarter: buildLocalizeFn({
				values: quarterValues$3,
				defaultWidth: "wide",
				argumentCallback: (quarter) => quarter - 1
			}),
			month: buildLocalizeFn({
				values: monthValues$3,
				defaultWidth: "wide"
			}),
			day: buildLocalizeFn({
				values: dayValues$3,
				defaultWidth: "wide"
			}),
			dayPeriod: buildLocalizeFn({
				values: dayPeriodValues$3,
				defaultWidth: "wide",
				formattingValues: formattingDayPeriodValues$3,
				defaultFormattingWidth: "wide"
			})
		};
	})))();
}
//#endregion
//#region ../node_modules/.store/date-fns@4.4.0-N3CoundlhH8enmbadGmv6Q/node_modules/date-fns/locale/sv/_lib/match.js
var matchOrdinalNumberPattern$3, parseOrdinalNumberPattern$3, matchEraPatterns$3, parseEraPatterns$3, matchQuarterPatterns$3, parseQuarterPatterns$3, matchMonthPatterns$3, parseMonthPatterns$3, matchDayPatterns$3, parseDayPatterns$3, matchDayPeriodPatterns$3, parseDayPeriodPatterns$3, match$3;
function init_match$12() {
	return (init_match$12 = __esmMin((() => {
		matchOrdinalNumberPattern$3 = /^(\d+)(:a|:e)?/i;
		parseOrdinalNumberPattern$3 = /\d+/i;
		matchEraPatterns$3 = {
			narrow: /^(f\.? ?Kr\.?|f\.? ?v\.? ?t\.?|e\.? ?Kr\.?|v\.? ?t\.?)/i,
			abbreviated: /^(f\.? ?Kr\.?|f\.? ?v\.? ?t\.?|e\.? ?Kr\.?|v\.? ?t\.?)/i,
			wide: /^(före Kristus|före vår tid|efter Kristus|vår tid)/i
		};
		parseEraPatterns$3 = { any: [/^f/i, /^[ev]/i] };
		matchQuarterPatterns$3 = {
			narrow: /^[1234]/i,
			abbreviated: /^q[1234]/i,
			wide: /^[1234](:a|:e)? kvartalet/i
		};
		parseQuarterPatterns$3 = { any: [
			/1/i,
			/2/i,
			/3/i,
			/4/i
		] };
		matchMonthPatterns$3 = {
			narrow: /^[jfmasond]/i,
			abbreviated: /^(jan|feb|mar[s]?|apr|maj|jun[i]?|jul[i]?|aug|sep|okt|nov|dec)\.?/i,
			wide: /^(januari|februari|mars|april|maj|juni|juli|augusti|september|oktober|november|december)/i
		};
		parseMonthPatterns$3 = {
			narrow: [
				/^j/i,
				/^f/i,
				/^m/i,
				/^a/i,
				/^m/i,
				/^j/i,
				/^j/i,
				/^a/i,
				/^s/i,
				/^o/i,
				/^n/i,
				/^d/i
			],
			any: [
				/^ja/i,
				/^f/i,
				/^mar/i,
				/^ap/i,
				/^maj/i,
				/^jun/i,
				/^jul/i,
				/^au/i,
				/^s/i,
				/^o/i,
				/^n/i,
				/^d/i
			]
		};
		matchDayPatterns$3 = {
			narrow: /^[smtofl]/i,
			short: /^(sö|må|ti|on|to|fr|lö)/i,
			abbreviated: /^(sön|mån|tis|ons|tors|fre|lör)/i,
			wide: /^(söndag|måndag|tisdag|onsdag|torsdag|fredag|lördag)/i
		};
		parseDayPatterns$3 = { any: [
			/^s/i,
			/^m/i,
			/^ti/i,
			/^o/i,
			/^to/i,
			/^f/i,
			/^l/i
		] };
		matchDayPeriodPatterns$3 = { any: /^([fe]\.?\s?m\.?|midn(att)?|midd(ag)?|(på) (morgonen|eftermiddagen|kvällen|natten))/i };
		parseDayPeriodPatterns$3 = { any: {
			am: /^f/i,
			pm: /^e/i,
			midnight: /^midn/i,
			noon: /^midd/i,
			morning: /morgon/i,
			afternoon: /eftermiddag/i,
			evening: /kväll/i,
			night: /natt/i
		} };
		match$3 = {
			ordinalNumber: buildMatchPatternFn({
				matchPattern: matchOrdinalNumberPattern$3,
				parsePattern: parseOrdinalNumberPattern$3,
				valueCallback: (value) => parseInt(value, 10)
			}),
			era: buildMatchFn({
				matchPatterns: matchEraPatterns$3,
				defaultMatchWidth: "wide",
				parsePatterns: parseEraPatterns$3,
				defaultParseWidth: "any"
			}),
			quarter: buildMatchFn({
				matchPatterns: matchQuarterPatterns$3,
				defaultMatchWidth: "wide",
				parsePatterns: parseQuarterPatterns$3,
				defaultParseWidth: "any",
				valueCallback: (index) => index + 1
			}),
			month: buildMatchFn({
				matchPatterns: matchMonthPatterns$3,
				defaultMatchWidth: "wide",
				parsePatterns: parseMonthPatterns$3,
				defaultParseWidth: "any"
			}),
			day: buildMatchFn({
				matchPatterns: matchDayPatterns$3,
				defaultMatchWidth: "wide",
				parsePatterns: parseDayPatterns$3,
				defaultParseWidth: "any"
			}),
			dayPeriod: buildMatchFn({
				matchPatterns: matchDayPeriodPatterns$3,
				defaultMatchWidth: "any",
				parsePatterns: parseDayPeriodPatterns$3,
				defaultParseWidth: "any"
			})
		};
	})))();
}
//#endregion
//#region ../node_modules/.store/date-fns@4.4.0-N3CoundlhH8enmbadGmv6Q/node_modules/date-fns/locale/sv.js
var sv;
function init_sv() {
	return (init_sv = __esmMin((() => {
		init_formatDistance$12();
		init_formatLong$12();
		init_formatRelative$12();
		init_localize$12();
		init_match$12();
		sv = {
			code: "sv",
			formatDistance: formatDistance$3,
			formatLong: formatLong$3,
			formatRelative: formatRelative$3,
			localize: localize$3,
			match: match$3,
			options: {
				weekStartsOn: 1,
				firstWeekContainsDate: 4
			}
		};
	})))();
}
//#endregion
//#region ../node_modules/.store/date-fns@4.4.0-N3CoundlhH8enmbadGmv6Q/node_modules/date-fns/locale/tr/_lib/formatDistance.js
var formatDistanceLocale$2, formatDistance$2;
function init_formatDistance$13() {
	return (init_formatDistance$13 = __esmMin((() => {
		formatDistanceLocale$2 = {
			lessThanXSeconds: {
				one: "bir saniyeden az",
				other: "{{count}} saniyeden az"
			},
			xSeconds: {
				one: "1 saniye",
				other: "{{count}} saniye"
			},
			halfAMinute: "yarım dakika",
			lessThanXMinutes: {
				one: "bir dakikadan az",
				other: "{{count}} dakikadan az"
			},
			xMinutes: {
				one: "1 dakika",
				other: "{{count}} dakika"
			},
			aboutXHours: {
				one: "yaklaşık 1 saat",
				other: "yaklaşık {{count}} saat"
			},
			xHours: {
				one: "1 saat",
				other: "{{count}} saat"
			},
			xDays: {
				one: "1 gün",
				other: "{{count}} gün"
			},
			aboutXWeeks: {
				one: "yaklaşık 1 hafta",
				other: "yaklaşık {{count}} hafta"
			},
			xWeeks: {
				one: "1 hafta",
				other: "{{count}} hafta"
			},
			aboutXMonths: {
				one: "yaklaşık 1 ay",
				other: "yaklaşık {{count}} ay"
			},
			xMonths: {
				one: "1 ay",
				other: "{{count}} ay"
			},
			aboutXYears: {
				one: "yaklaşık 1 yıl",
				other: "yaklaşık {{count}} yıl"
			},
			xYears: {
				one: "1 yıl",
				other: "{{count}} yıl"
			},
			overXYears: {
				one: "1 yıldan fazla",
				other: "{{count}} yıldan fazla"
			},
			almostXYears: {
				one: "neredeyse 1 yıl",
				other: "neredeyse {{count}} yıl"
			}
		};
		formatDistance$2 = (token, count, options) => {
			let result;
			const tokenValue = formatDistanceLocale$2[token];
			if (typeof tokenValue === "string") result = tokenValue;
			else if (count === 1) result = tokenValue.one;
			else result = tokenValue.other.replace("{{count}}", count.toString());
			if (options?.addSuffix) {
				if (options.comparison && options.comparison > 0) return result + " sonra";
				else return result + " önce";
			}
			return result;
		};
	})))();
}
//#endregion
//#region ../node_modules/.store/date-fns@4.4.0-N3CoundlhH8enmbadGmv6Q/node_modules/date-fns/locale/tr/_lib/formatLong.js
var dateFormats$2, timeFormats$2, dateTimeFormats$2, formatLong$2;
function init_formatLong$13() {
	return (init_formatLong$13 = __esmMin((() => {
		dateFormats$2 = {
			full: "d MMMM y EEEE",
			long: "d MMMM y",
			medium: "d MMM y",
			short: "dd.MM.yyyy"
		};
		timeFormats$2 = {
			full: "HH:mm:ss zzzz",
			long: "HH:mm:ss z",
			medium: "HH:mm:ss",
			short: "HH:mm"
		};
		dateTimeFormats$2 = {
			full: "{{date}} 'saat' {{time}}",
			long: "{{date}} 'saat' {{time}}",
			medium: "{{date}}, {{time}}",
			short: "{{date}}, {{time}}"
		};
		formatLong$2 = {
			date: buildFormatLongFn({
				formats: dateFormats$2,
				defaultWidth: "full"
			}),
			time: buildFormatLongFn({
				formats: timeFormats$2,
				defaultWidth: "full"
			}),
			dateTime: buildFormatLongFn({
				formats: dateTimeFormats$2,
				defaultWidth: "full"
			})
		};
	})))();
}
//#endregion
//#region ../node_modules/.store/date-fns@4.4.0-N3CoundlhH8enmbadGmv6Q/node_modules/date-fns/locale/tr/_lib/formatRelative.js
var formatRelativeLocale$2, formatRelative$2;
function init_formatRelative$13() {
	return (init_formatRelative$13 = __esmMin((() => {
		formatRelativeLocale$2 = {
			lastWeek: "'geçen hafta' eeee 'saat' p",
			yesterday: "'dün saat' p",
			today: "'bugün saat' p",
			tomorrow: "'yarın saat' p",
			nextWeek: "eeee 'saat' p",
			other: "P"
		};
		formatRelative$2 = (token, _date, _baseDate, _options) => formatRelativeLocale$2[token];
	})))();
}
//#endregion
//#region ../node_modules/.store/date-fns@4.4.0-N3CoundlhH8enmbadGmv6Q/node_modules/date-fns/locale/tr/_lib/localize.js
var eraValues$2, quarterValues$2, monthValues$2, dayValues$2, dayPeriodValues$2, formattingDayPeriodValues$2, ordinalNumber$2, localize$2;
function init_localize$13() {
	return (init_localize$13 = __esmMin((() => {
		eraValues$2 = {
			narrow: ["MÖ", "MS"],
			abbreviated: ["MÖ", "MS"],
			wide: ["Milattan Önce", "Milattan Sonra"]
		};
		quarterValues$2 = {
			narrow: [
				"1",
				"2",
				"3",
				"4"
			],
			abbreviated: [
				"1Ç",
				"2Ç",
				"3Ç",
				"4Ç"
			],
			wide: [
				"İlk çeyrek",
				"İkinci Çeyrek",
				"Üçüncü çeyrek",
				"Son çeyrek"
			]
		};
		monthValues$2 = {
			narrow: [
				"O",
				"Ş",
				"M",
				"N",
				"M",
				"H",
				"T",
				"A",
				"E",
				"E",
				"K",
				"A"
			],
			abbreviated: [
				"Oca",
				"Şub",
				"Mar",
				"Nis",
				"May",
				"Haz",
				"Tem",
				"Ağu",
				"Eyl",
				"Eki",
				"Kas",
				"Ara"
			],
			wide: [
				"Ocak",
				"Şubat",
				"Mart",
				"Nisan",
				"Mayıs",
				"Haziran",
				"Temmuz",
				"Ağustos",
				"Eylül",
				"Ekim",
				"Kasım",
				"Aralık"
			]
		};
		dayValues$2 = {
			narrow: [
				"P",
				"P",
				"S",
				"Ç",
				"P",
				"C",
				"C"
			],
			short: [
				"Pz",
				"Pt",
				"Sa",
				"Ça",
				"Pe",
				"Cu",
				"Ct"
			],
			abbreviated: [
				"Paz",
				"Pzt",
				"Sal",
				"Çar",
				"Per",
				"Cum",
				"Cts"
			],
			wide: [
				"Pazar",
				"Pazartesi",
				"Salı",
				"Çarşamba",
				"Perşembe",
				"Cuma",
				"Cumartesi"
			]
		};
		dayPeriodValues$2 = {
			narrow: {
				am: "öö",
				pm: "ös",
				midnight: "gy",
				noon: "ö",
				morning: "sa",
				afternoon: "ös",
				evening: "ak",
				night: "ge"
			},
			abbreviated: {
				am: "ÖÖ",
				pm: "ÖS",
				midnight: "gece yarısı",
				noon: "öğle",
				morning: "sabah",
				afternoon: "öğleden sonra",
				evening: "akşam",
				night: "gece"
			},
			wide: {
				am: "Ö.Ö.",
				pm: "Ö.S.",
				midnight: "gece yarısı",
				noon: "öğle",
				morning: "sabah",
				afternoon: "öğleden sonra",
				evening: "akşam",
				night: "gece"
			}
		};
		formattingDayPeriodValues$2 = {
			narrow: {
				am: "öö",
				pm: "ös",
				midnight: "gy",
				noon: "ö",
				morning: "sa",
				afternoon: "ös",
				evening: "ak",
				night: "ge"
			},
			abbreviated: {
				am: "ÖÖ",
				pm: "ÖS",
				midnight: "gece yarısı",
				noon: "öğlen",
				morning: "sabahleyin",
				afternoon: "öğleden sonra",
				evening: "akşamleyin",
				night: "geceleyin"
			},
			wide: {
				am: "ö.ö.",
				pm: "ö.s.",
				midnight: "gece yarısı",
				noon: "öğlen",
				morning: "sabahleyin",
				afternoon: "öğleden sonra",
				evening: "akşamleyin",
				night: "geceleyin"
			}
		};
		ordinalNumber$2 = (dirtyNumber, _options) => {
			return Number(dirtyNumber) + ".";
		};
		localize$2 = {
			ordinalNumber: ordinalNumber$2,
			era: buildLocalizeFn({
				values: eraValues$2,
				defaultWidth: "wide"
			}),
			quarter: buildLocalizeFn({
				values: quarterValues$2,
				defaultWidth: "wide",
				argumentCallback: (quarter) => Number(quarter) - 1
			}),
			month: buildLocalizeFn({
				values: monthValues$2,
				defaultWidth: "wide"
			}),
			day: buildLocalizeFn({
				values: dayValues$2,
				defaultWidth: "wide"
			}),
			dayPeriod: buildLocalizeFn({
				values: dayPeriodValues$2,
				defaultWidth: "wide",
				formattingValues: formattingDayPeriodValues$2,
				defaultFormattingWidth: "wide"
			})
		};
	})))();
}
//#endregion
//#region ../node_modules/.store/date-fns@4.4.0-N3CoundlhH8enmbadGmv6Q/node_modules/date-fns/locale/tr/_lib/match.js
var matchOrdinalNumberPattern$2, parseOrdinalNumberPattern$2, matchEraPatterns$2, parseEraPatterns$2, matchQuarterPatterns$2, parseQuarterPatterns$2, matchMonthPatterns$2, parseMonthPatterns$2, matchDayPatterns$2, parseDayPatterns$2, matchDayPeriodPatterns$2, parseDayPeriodPatterns$2, match$2;
function init_match$13() {
	return (init_match$13 = __esmMin((() => {
		matchOrdinalNumberPattern$2 = /^(\d+)(\.)?/i;
		parseOrdinalNumberPattern$2 = /\d+/i;
		matchEraPatterns$2 = {
			narrow: /^(mö|ms)/i,
			abbreviated: /^(mö|ms)/i,
			wide: /^(milattan önce|milattan sonra)/i
		};
		parseEraPatterns$2 = { any: [/(^mö|^milattan önce)/i, /(^ms|^milattan sonra)/i] };
		matchQuarterPatterns$2 = {
			narrow: /^[1234]/i,
			abbreviated: /^[1234]ç/i,
			wide: /^((i|İ)lk|(i|İ)kinci|üçüncü|son) çeyrek/i
		};
		parseQuarterPatterns$2 = {
			any: [
				/1/i,
				/2/i,
				/3/i,
				/4/i
			],
			abbreviated: [
				/1ç/i,
				/2ç/i,
				/3ç/i,
				/4ç/i
			],
			wide: [
				/^(i|İ)lk çeyrek/i,
				/(i|İ)kinci çeyrek/i,
				/üçüncü çeyrek/i,
				/son çeyrek/i
			]
		};
		matchMonthPatterns$2 = {
			narrow: /^[oşmnhtaek]/i,
			abbreviated: /^(oca|şub|mar|nis|may|haz|tem|ağu|eyl|eki|kas|ara)/i,
			wide: /^(ocak|şubat|mart|nisan|mayıs|haziran|temmuz|ağustos|eylül|ekim|kasım|aralık)/i
		};
		parseMonthPatterns$2 = {
			narrow: [
				/^o/i,
				/^ş/i,
				/^m/i,
				/^n/i,
				/^m/i,
				/^h/i,
				/^t/i,
				/^a/i,
				/^e/i,
				/^e/i,
				/^k/i,
				/^a/i
			],
			any: [
				/^o/i,
				/^ş/i,
				/^mar/i,
				/^n/i,
				/^may/i,
				/^h/i,
				/^t/i,
				/^ağ/i,
				/^ey/i,
				/^ek/i,
				/^k/i,
				/^ar/i
			]
		};
		matchDayPatterns$2 = {
			narrow: /^[psçc]/i,
			short: /^(pz|pt|sa|ça|pe|cu|ct)/i,
			abbreviated: /^(paz|pzt|sal|çar|per|cum|cts)/i,
			wide: /^(pazar(?!tesi)|pazartesi|salı|çarşamba|perşembe|cuma(?!rtesi)|cumartesi)/i
		};
		parseDayPatterns$2 = {
			narrow: [
				/^p/i,
				/^p/i,
				/^s/i,
				/^ç/i,
				/^p/i,
				/^c/i,
				/^c/i
			],
			any: [
				/^pz/i,
				/^pt/i,
				/^sa/i,
				/^ça/i,
				/^pe/i,
				/^cu/i,
				/^ct/i
			],
			wide: [
				/^pazar(?!tesi)/i,
				/^pazartesi/i,
				/^salı/i,
				/^çarşamba/i,
				/^perşembe/i,
				/^cuma(?!rtesi)/i,
				/^cumartesi/i
			]
		};
		matchDayPeriodPatterns$2 = {
			narrow: /^(öö|ös|gy|ö|sa|ös|ak|ge)/i,
			any: /^(ö\.?\s?[ös]\.?|öğleden sonra|gece yarısı|öğle|(sabah|öğ|akşam|gece)(leyin))/i
		};
		parseDayPeriodPatterns$2 = { any: {
			am: /^ö\.?ö\.?/i,
			pm: /^ö\.?s\.?/i,
			midnight: /^(gy|gece yarısı)/i,
			noon: /^öğ/i,
			morning: /^sa/i,
			afternoon: /^öğleden sonra/i,
			evening: /^ak/i,
			night: /^ge/i
		} };
		match$2 = {
			ordinalNumber: buildMatchPatternFn({
				matchPattern: matchOrdinalNumberPattern$2,
				parsePattern: parseOrdinalNumberPattern$2,
				valueCallback: function(value) {
					return parseInt(value, 10);
				}
			}),
			era: buildMatchFn({
				matchPatterns: matchEraPatterns$2,
				defaultMatchWidth: "wide",
				parsePatterns: parseEraPatterns$2,
				defaultParseWidth: "any"
			}),
			quarter: buildMatchFn({
				matchPatterns: matchQuarterPatterns$2,
				defaultMatchWidth: "wide",
				parsePatterns: parseQuarterPatterns$2,
				defaultParseWidth: "any",
				valueCallback: (index) => index + 1
			}),
			month: buildMatchFn({
				matchPatterns: matchMonthPatterns$2,
				defaultMatchWidth: "wide",
				parsePatterns: parseMonthPatterns$2,
				defaultParseWidth: "any"
			}),
			day: buildMatchFn({
				matchPatterns: matchDayPatterns$2,
				defaultMatchWidth: "wide",
				parsePatterns: parseDayPatterns$2,
				defaultParseWidth: "any"
			}),
			dayPeriod: buildMatchFn({
				matchPatterns: matchDayPeriodPatterns$2,
				defaultMatchWidth: "any",
				parsePatterns: parseDayPeriodPatterns$2,
				defaultParseWidth: "any"
			})
		};
	})))();
}
//#endregion
//#region ../node_modules/.store/date-fns@4.4.0-N3CoundlhH8enmbadGmv6Q/node_modules/date-fns/locale/tr.js
var tr;
function init_tr() {
	return (init_tr = __esmMin((() => {
		init_formatDistance$13();
		init_formatLong$13();
		init_formatRelative$13();
		init_localize$13();
		init_match$13();
		tr = {
			code: "tr",
			formatDistance: formatDistance$2,
			formatLong: formatLong$2,
			formatRelative: formatRelative$2,
			localize: localize$2,
			match: match$2,
			options: {
				weekStartsOn: 1,
				firstWeekContainsDate: 1
			}
		};
	})))();
}
//#endregion
//#region ../node_modules/.store/date-fns@4.4.0-N3CoundlhH8enmbadGmv6Q/node_modules/date-fns/locale/zh-CN/_lib/formatDistance.js
var formatDistanceLocale$1, formatDistance$1;
function init_formatDistance$14() {
	return (init_formatDistance$14 = __esmMin((() => {
		formatDistanceLocale$1 = {
			lessThanXSeconds: {
				one: "不到 1 秒",
				other: "不到 {{count}} 秒"
			},
			xSeconds: {
				one: "1 秒",
				other: "{{count}} 秒"
			},
			halfAMinute: "半分钟",
			lessThanXMinutes: {
				one: "不到 1 分钟",
				other: "不到 {{count}} 分钟"
			},
			xMinutes: {
				one: "1 分钟",
				other: "{{count}} 分钟"
			},
			xHours: {
				one: "1 小时",
				other: "{{count}} 小时"
			},
			aboutXHours: {
				one: "大约 1 小时",
				other: "大约 {{count}} 小时"
			},
			xDays: {
				one: "1 天",
				other: "{{count}} 天"
			},
			aboutXWeeks: {
				one: "大约 1 个星期",
				other: "大约 {{count}} 个星期"
			},
			xWeeks: {
				one: "1 个星期",
				other: "{{count}} 个星期"
			},
			aboutXMonths: {
				one: "大约 1 个月",
				other: "大约 {{count}} 个月"
			},
			xMonths: {
				one: "1 个月",
				other: "{{count}} 个月"
			},
			aboutXYears: {
				one: "大约 1 年",
				other: "大约 {{count}} 年"
			},
			xYears: {
				one: "1 年",
				other: "{{count}} 年"
			},
			overXYears: {
				one: "超过 1 年",
				other: "超过 {{count}} 年"
			},
			almostXYears: {
				one: "将近 1 年",
				other: "将近 {{count}} 年"
			}
		};
		formatDistance$1 = (token, count, options) => {
			let result;
			const tokenValue = formatDistanceLocale$1[token];
			if (typeof tokenValue === "string") result = tokenValue;
			else if (count === 1) result = tokenValue.one;
			else result = tokenValue.other.replace("{{count}}", String(count));
			if (options?.addSuffix) {
				if (options.comparison && options.comparison > 0) return result + "内";
				else return result + "前";
			}
			return result;
		};
	})))();
}
//#endregion
//#region ../node_modules/.store/date-fns@4.4.0-N3CoundlhH8enmbadGmv6Q/node_modules/date-fns/locale/zh-CN/_lib/formatLong.js
var dateFormats$1, timeFormats$1, dateTimeFormats$1, formatLong$1;
function init_formatLong$14() {
	return (init_formatLong$14 = __esmMin((() => {
		dateFormats$1 = {
			full: "y'年'M'月'd'日' EEEE",
			long: "y'年'M'月'd'日'",
			medium: "yyyy-MM-dd",
			short: "yy-MM-dd"
		};
		timeFormats$1 = {
			full: "zzzz a h:mm:ss",
			long: "z a h:mm:ss",
			medium: "a h:mm:ss",
			short: "a h:mm"
		};
		dateTimeFormats$1 = {
			full: "{{date}} {{time}}",
			long: "{{date}} {{time}}",
			medium: "{{date}} {{time}}",
			short: "{{date}} {{time}}"
		};
		formatLong$1 = {
			date: buildFormatLongFn({
				formats: dateFormats$1,
				defaultWidth: "full"
			}),
			time: buildFormatLongFn({
				formats: timeFormats$1,
				defaultWidth: "full"
			}),
			dateTime: buildFormatLongFn({
				formats: dateTimeFormats$1,
				defaultWidth: "full"
			})
		};
	})))();
}
//#endregion
//#region ../node_modules/.store/date-fns@4.4.0-N3CoundlhH8enmbadGmv6Q/node_modules/date-fns/locale/zh-CN/_lib/formatRelative.js
function checkWeek(date, baseDate, options) {
	const baseFormat = "eeee p";
	if (isSameWeek(date, baseDate, options)) return baseFormat;
	else if (date.getTime() > baseDate.getTime()) return "'下个'eeee p";
	return "'上个'eeee p";
}
var formatRelativeLocale$1, formatRelative$1;
function init_formatRelative$14() {
	return (init_formatRelative$14 = __esmMin((() => {
		init_isSameWeek();
		formatRelativeLocale$1 = {
			lastWeek: checkWeek,
			yesterday: "'昨天' p",
			today: "'今天' p",
			tomorrow: "'明天' p",
			nextWeek: checkWeek,
			other: "PP p"
		};
		formatRelative$1 = (token, date, baseDate, options) => {
			const format = formatRelativeLocale$1[token];
			if (typeof format === "function") return format(date, baseDate, options);
			return format;
		};
	})))();
}
//#endregion
//#region ../node_modules/.store/date-fns@4.4.0-N3CoundlhH8enmbadGmv6Q/node_modules/date-fns/locale/zh-CN/_lib/localize.js
var eraValues$1, quarterValues$1, monthValues$1, dayValues$1, dayPeriodValues$1, formattingDayPeriodValues$1, ordinalNumber$1, localize$1;
function init_localize$14() {
	return (init_localize$14 = __esmMin((() => {
		eraValues$1 = {
			narrow: ["前", "公元"],
			abbreviated: ["前", "公元"],
			wide: ["公元前", "公元"]
		};
		quarterValues$1 = {
			narrow: [
				"1",
				"2",
				"3",
				"4"
			],
			abbreviated: [
				"第一季",
				"第二季",
				"第三季",
				"第四季"
			],
			wide: [
				"第一季度",
				"第二季度",
				"第三季度",
				"第四季度"
			]
		};
		monthValues$1 = {
			narrow: [
				"一",
				"二",
				"三",
				"四",
				"五",
				"六",
				"七",
				"八",
				"九",
				"十",
				"十一",
				"十二"
			],
			abbreviated: [
				"1月",
				"2月",
				"3月",
				"4月",
				"5月",
				"6月",
				"7月",
				"8月",
				"9月",
				"10月",
				"11月",
				"12月"
			],
			wide: [
				"一月",
				"二月",
				"三月",
				"四月",
				"五月",
				"六月",
				"七月",
				"八月",
				"九月",
				"十月",
				"十一月",
				"十二月"
			]
		};
		dayValues$1 = {
			narrow: [
				"日",
				"一",
				"二",
				"三",
				"四",
				"五",
				"六"
			],
			short: [
				"日",
				"一",
				"二",
				"三",
				"四",
				"五",
				"六"
			],
			abbreviated: [
				"周日",
				"周一",
				"周二",
				"周三",
				"周四",
				"周五",
				"周六"
			],
			wide: [
				"星期日",
				"星期一",
				"星期二",
				"星期三",
				"星期四",
				"星期五",
				"星期六"
			]
		};
		dayPeriodValues$1 = {
			narrow: {
				am: "上",
				pm: "下",
				midnight: "凌晨",
				noon: "午",
				morning: "早",
				afternoon: "下午",
				evening: "晚",
				night: "夜"
			},
			abbreviated: {
				am: "上午",
				pm: "下午",
				midnight: "凌晨",
				noon: "中午",
				morning: "早晨",
				afternoon: "中午",
				evening: "晚上",
				night: "夜间"
			},
			wide: {
				am: "上午",
				pm: "下午",
				midnight: "凌晨",
				noon: "中午",
				morning: "早晨",
				afternoon: "中午",
				evening: "晚上",
				night: "夜间"
			}
		};
		formattingDayPeriodValues$1 = {
			narrow: {
				am: "上",
				pm: "下",
				midnight: "凌晨",
				noon: "午",
				morning: "早",
				afternoon: "下午",
				evening: "晚",
				night: "夜"
			},
			abbreviated: {
				am: "上午",
				pm: "下午",
				midnight: "凌晨",
				noon: "中午",
				morning: "早晨",
				afternoon: "中午",
				evening: "晚上",
				night: "夜间"
			},
			wide: {
				am: "上午",
				pm: "下午",
				midnight: "凌晨",
				noon: "中午",
				morning: "早晨",
				afternoon: "中午",
				evening: "晚上",
				night: "夜间"
			}
		};
		ordinalNumber$1 = (dirtyNumber, options) => {
			const number = Number(dirtyNumber);
			switch (options?.unit) {
				case "date": return number.toString() + "日";
				case "hour": return number.toString() + "时";
				case "minute": return number.toString() + "分";
				case "second": return number.toString() + "秒";
				default: return "第 " + number.toString();
			}
		};
		localize$1 = {
			ordinalNumber: ordinalNumber$1,
			era: buildLocalizeFn({
				values: eraValues$1,
				defaultWidth: "wide"
			}),
			quarter: buildLocalizeFn({
				values: quarterValues$1,
				defaultWidth: "wide",
				argumentCallback: (quarter) => quarter - 1
			}),
			month: buildLocalizeFn({
				values: monthValues$1,
				defaultWidth: "wide"
			}),
			day: buildLocalizeFn({
				values: dayValues$1,
				defaultWidth: "wide"
			}),
			dayPeriod: buildLocalizeFn({
				values: dayPeriodValues$1,
				defaultWidth: "wide",
				formattingValues: formattingDayPeriodValues$1,
				defaultFormattingWidth: "wide"
			})
		};
	})))();
}
//#endregion
//#region ../node_modules/.store/date-fns@4.4.0-N3CoundlhH8enmbadGmv6Q/node_modules/date-fns/locale/zh-CN/_lib/match.js
var matchOrdinalNumberPattern$1, parseOrdinalNumberPattern$1, matchEraPatterns$1, parseEraPatterns$1, matchQuarterPatterns$1, parseQuarterPatterns$1, matchMonthPatterns$1, parseMonthPatterns$1, matchDayPatterns$1, parseDayPatterns$1, matchDayPeriodPatterns$1, parseDayPeriodPatterns$1, match$1;
function init_match$14() {
	return (init_match$14 = __esmMin((() => {
		matchOrdinalNumberPattern$1 = /^(第\s*)?\d+(日|时|分|秒)?/i;
		parseOrdinalNumberPattern$1 = /\d+/i;
		matchEraPatterns$1 = {
			narrow: /^(前)/i,
			abbreviated: /^(前)/i,
			wide: /^(公元前|公元)/i
		};
		parseEraPatterns$1 = { any: [/^(前)/i, /^(公元)/i] };
		matchQuarterPatterns$1 = {
			narrow: /^[1234]/i,
			abbreviated: /^第[一二三四]刻/i,
			wide: /^第[一二三四]刻钟/i
		};
		parseQuarterPatterns$1 = { any: [
			/(1|一)/i,
			/(2|二)/i,
			/(3|三)/i,
			/(4|四)/i
		] };
		matchMonthPatterns$1 = {
			narrow: /^(一|二|三|四|五|六|七|八|九|十[二一]?)/i,
			abbreviated: /^(一|二|三|四|五|六|七|八|九|十[二一]?|\d|1[0-2])月/i,
			wide: /^(一|二|三|四|五|六|七|八|九|十[二一]?)月/i
		};
		parseMonthPatterns$1 = {
			narrow: [
				/^一/i,
				/^二/i,
				/^三/i,
				/^四/i,
				/^五/i,
				/^六/i,
				/^七/i,
				/^八/i,
				/^九/i,
				/^十(?!(一|二))/i,
				/^十一/i,
				/^十二/i
			],
			any: [
				/^(一|1(?!\d))/i,
				/^(二|2)/i,
				/^(三|3)/i,
				/^(四|4)/i,
				/^(五|5)/i,
				/^(六|6)/i,
				/^(七|7)/i,
				/^(八|8)/i,
				/^(九|9)/i,
				/^(十(?!(一|二))|10)/i,
				/^(十一|11)/i,
				/^(十二|12)/i
			]
		};
		matchDayPatterns$1 = {
			narrow: /^[一二三四五六日]/i,
			short: /^[一二三四五六日]/i,
			abbreviated: /^周[一二三四五六日]/i,
			wide: /^星期[一二三四五六日]/i
		};
		parseDayPatterns$1 = { any: [
			/日/i,
			/一/i,
			/二/i,
			/三/i,
			/四/i,
			/五/i,
			/六/i
		] };
		matchDayPeriodPatterns$1 = { any: /^(上午?|下午?|午夜|[中正]午|早上?|下午|晚上?|凌晨|)/i };
		parseDayPeriodPatterns$1 = { any: {
			am: /^上午?/i,
			pm: /^下午?/i,
			midnight: /^午夜/i,
			noon: /^[中正]午/i,
			morning: /^早上/i,
			afternoon: /^下午/i,
			evening: /^晚上?/i,
			night: /^凌晨/i
		} };
		match$1 = {
			ordinalNumber: buildMatchPatternFn({
				matchPattern: matchOrdinalNumberPattern$1,
				parsePattern: parseOrdinalNumberPattern$1,
				valueCallback: (value) => parseInt(value, 10)
			}),
			era: buildMatchFn({
				matchPatterns: matchEraPatterns$1,
				defaultMatchWidth: "wide",
				parsePatterns: parseEraPatterns$1,
				defaultParseWidth: "any"
			}),
			quarter: buildMatchFn({
				matchPatterns: matchQuarterPatterns$1,
				defaultMatchWidth: "wide",
				parsePatterns: parseQuarterPatterns$1,
				defaultParseWidth: "any",
				valueCallback: (index) => index + 1
			}),
			month: buildMatchFn({
				matchPatterns: matchMonthPatterns$1,
				defaultMatchWidth: "wide",
				parsePatterns: parseMonthPatterns$1,
				defaultParseWidth: "any"
			}),
			day: buildMatchFn({
				matchPatterns: matchDayPatterns$1,
				defaultMatchWidth: "wide",
				parsePatterns: parseDayPatterns$1,
				defaultParseWidth: "any"
			}),
			dayPeriod: buildMatchFn({
				matchPatterns: matchDayPeriodPatterns$1,
				defaultMatchWidth: "any",
				parsePatterns: parseDayPeriodPatterns$1,
				defaultParseWidth: "any"
			})
		};
	})))();
}
//#endregion
//#region ../node_modules/.store/date-fns@4.4.0-N3CoundlhH8enmbadGmv6Q/node_modules/date-fns/locale/zh-CN.js
var zhCN;
function init_zh_CN() {
	return (init_zh_CN = __esmMin((() => {
		init_formatDistance$14();
		init_formatLong$14();
		init_formatRelative$14();
		init_localize$14();
		init_match$14();
		zhCN = {
			code: "zh-CN",
			formatDistance: formatDistance$1,
			formatLong: formatLong$1,
			formatRelative: formatRelative$1,
			localize: localize$1,
			match: match$1,
			options: {
				weekStartsOn: 1,
				firstWeekContainsDate: 4
			}
		};
	})))();
}
//#endregion
//#region ../node_modules/.store/date-fns@4.4.0-N3CoundlhH8enmbadGmv6Q/node_modules/date-fns/locale/zh-TW/_lib/formatDistance.js
var formatDistanceLocale, formatDistance;
function init_formatDistance$15() {
	return (init_formatDistance$15 = __esmMin((() => {
		formatDistanceLocale = {
			lessThanXSeconds: {
				one: "少於 1 秒",
				other: "少於 {{count}} 秒"
			},
			xSeconds: {
				one: "1 秒",
				other: "{{count}} 秒"
			},
			halfAMinute: "半分鐘",
			lessThanXMinutes: {
				one: "少於 1 分鐘",
				other: "少於 {{count}} 分鐘"
			},
			xMinutes: {
				one: "1 分鐘",
				other: "{{count}} 分鐘"
			},
			xHours: {
				one: "1 小時",
				other: "{{count}} 小時"
			},
			aboutXHours: {
				one: "大約 1 小時",
				other: "大約 {{count}} 小時"
			},
			xDays: {
				one: "1 天",
				other: "{{count}} 天"
			},
			aboutXWeeks: {
				one: "大約 1 個星期",
				other: "大約 {{count}} 個星期"
			},
			xWeeks: {
				one: "1 個星期",
				other: "{{count}} 個星期"
			},
			aboutXMonths: {
				one: "大約 1 個月",
				other: "大約 {{count}} 個月"
			},
			xMonths: {
				one: "1 個月",
				other: "{{count}} 個月"
			},
			aboutXYears: {
				one: "大約 1 年",
				other: "大約 {{count}} 年"
			},
			xYears: {
				one: "1 年",
				other: "{{count}} 年"
			},
			overXYears: {
				one: "超過 1 年",
				other: "超過 {{count}} 年"
			},
			almostXYears: {
				one: "將近 1 年",
				other: "將近 {{count}} 年"
			}
		};
		formatDistance = (token, count, options) => {
			let result;
			const tokenValue = formatDistanceLocale[token];
			if (typeof tokenValue === "string") result = tokenValue;
			else if (count === 1) result = tokenValue.one;
			else result = tokenValue.other.replace("{{count}}", String(count));
			if (options?.addSuffix) {
				if (options.comparison && options.comparison > 0) return result + "內";
				else return result + "前";
			}
			return result;
		};
	})))();
}
//#endregion
//#region ../node_modules/.store/date-fns@4.4.0-N3CoundlhH8enmbadGmv6Q/node_modules/date-fns/locale/zh-TW/_lib/formatLong.js
var dateFormats, timeFormats, dateTimeFormats, formatLong;
function init_formatLong$15() {
	return (init_formatLong$15 = __esmMin((() => {
		dateFormats = {
			full: "y'年'M'月'd'日' EEEE",
			long: "y'年'M'月'd'日'",
			medium: "yyyy-MM-dd",
			short: "yy-MM-dd"
		};
		timeFormats = {
			full: "zzzz a h:mm:ss",
			long: "z a h:mm:ss",
			medium: "a h:mm:ss",
			short: "a h:mm"
		};
		dateTimeFormats = {
			full: "{{date}} {{time}}",
			long: "{{date}} {{time}}",
			medium: "{{date}} {{time}}",
			short: "{{date}} {{time}}"
		};
		formatLong = {
			date: buildFormatLongFn({
				formats: dateFormats,
				defaultWidth: "full"
			}),
			time: buildFormatLongFn({
				formats: timeFormats,
				defaultWidth: "full"
			}),
			dateTime: buildFormatLongFn({
				formats: dateTimeFormats,
				defaultWidth: "full"
			})
		};
	})))();
}
//#endregion
//#region ../node_modules/.store/date-fns@4.4.0-N3CoundlhH8enmbadGmv6Q/node_modules/date-fns/locale/zh-TW/_lib/formatRelative.js
var formatRelativeLocale, formatRelative;
function init_formatRelative$15() {
	return (init_formatRelative$15 = __esmMin((() => {
		formatRelativeLocale = {
			lastWeek: "'上個'eeee p",
			yesterday: "'昨天' p",
			today: "'今天' p",
			tomorrow: "'明天' p",
			nextWeek: "'下個'eeee p",
			other: "P"
		};
		formatRelative = (token, _date, _baseDate, _options) => formatRelativeLocale[token];
	})))();
}
//#endregion
//#region ../node_modules/.store/date-fns@4.4.0-N3CoundlhH8enmbadGmv6Q/node_modules/date-fns/locale/zh-TW/_lib/localize.js
var eraValues, quarterValues, monthValues, dayValues, dayPeriodValues, formattingDayPeriodValues, ordinalNumber, localize;
function init_localize$15() {
	return (init_localize$15 = __esmMin((() => {
		eraValues = {
			narrow: ["前", "公元"],
			abbreviated: ["前", "公元"],
			wide: ["公元前", "公元"]
		};
		quarterValues = {
			narrow: [
				"1",
				"2",
				"3",
				"4"
			],
			abbreviated: [
				"第一刻",
				"第二刻",
				"第三刻",
				"第四刻"
			],
			wide: [
				"第一刻鐘",
				"第二刻鐘",
				"第三刻鐘",
				"第四刻鐘"
			]
		};
		monthValues = {
			narrow: [
				"一",
				"二",
				"三",
				"四",
				"五",
				"六",
				"七",
				"八",
				"九",
				"十",
				"十一",
				"十二"
			],
			abbreviated: [
				"1月",
				"2月",
				"3月",
				"4月",
				"5月",
				"6月",
				"7月",
				"8月",
				"9月",
				"10月",
				"11月",
				"12月"
			],
			wide: [
				"一月",
				"二月",
				"三月",
				"四月",
				"五月",
				"六月",
				"七月",
				"八月",
				"九月",
				"十月",
				"十一月",
				"十二月"
			]
		};
		dayValues = {
			narrow: [
				"日",
				"一",
				"二",
				"三",
				"四",
				"五",
				"六"
			],
			short: [
				"日",
				"一",
				"二",
				"三",
				"四",
				"五",
				"六"
			],
			abbreviated: [
				"週日",
				"週一",
				"週二",
				"週三",
				"週四",
				"週五",
				"週六"
			],
			wide: [
				"星期日",
				"星期一",
				"星期二",
				"星期三",
				"星期四",
				"星期五",
				"星期六"
			]
		};
		dayPeriodValues = {
			narrow: {
				am: "上",
				pm: "下",
				midnight: "凌晨",
				noon: "午",
				morning: "早",
				afternoon: "下午",
				evening: "晚",
				night: "夜"
			},
			abbreviated: {
				am: "上午",
				pm: "下午",
				midnight: "凌晨",
				noon: "中午",
				morning: "早晨",
				afternoon: "中午",
				evening: "晚上",
				night: "夜間"
			},
			wide: {
				am: "上午",
				pm: "下午",
				midnight: "凌晨",
				noon: "中午",
				morning: "早晨",
				afternoon: "中午",
				evening: "晚上",
				night: "夜間"
			}
		};
		formattingDayPeriodValues = {
			narrow: {
				am: "上",
				pm: "下",
				midnight: "凌晨",
				noon: "午",
				morning: "早",
				afternoon: "下午",
				evening: "晚",
				night: "夜"
			},
			abbreviated: {
				am: "上午",
				pm: "下午",
				midnight: "凌晨",
				noon: "中午",
				morning: "早晨",
				afternoon: "中午",
				evening: "晚上",
				night: "夜間"
			},
			wide: {
				am: "上午",
				pm: "下午",
				midnight: "凌晨",
				noon: "中午",
				morning: "早晨",
				afternoon: "中午",
				evening: "晚上",
				night: "夜間"
			}
		};
		ordinalNumber = (dirtyNumber, options) => {
			const number = Number(dirtyNumber);
			switch (options?.unit) {
				case "date": return number + "日";
				case "hour": return number + "時";
				case "minute": return number + "分";
				case "second": return number + "秒";
				default: return "第 " + number;
			}
		};
		localize = {
			ordinalNumber,
			era: buildLocalizeFn({
				values: eraValues,
				defaultWidth: "wide"
			}),
			quarter: buildLocalizeFn({
				values: quarterValues,
				defaultWidth: "wide",
				argumentCallback: (quarter) => quarter - 1
			}),
			month: buildLocalizeFn({
				values: monthValues,
				defaultWidth: "wide"
			}),
			day: buildLocalizeFn({
				values: dayValues,
				defaultWidth: "wide"
			}),
			dayPeriod: buildLocalizeFn({
				values: dayPeriodValues,
				defaultWidth: "wide",
				formattingValues: formattingDayPeriodValues,
				defaultFormattingWidth: "wide"
			})
		};
	})))();
}
//#endregion
//#region ../node_modules/.store/date-fns@4.4.0-N3CoundlhH8enmbadGmv6Q/node_modules/date-fns/locale/zh-TW/_lib/match.js
var matchOrdinalNumberPattern, parseOrdinalNumberPattern, matchEraPatterns, parseEraPatterns, matchQuarterPatterns, parseQuarterPatterns, matchMonthPatterns, parseMonthPatterns, matchDayPatterns, parseDayPatterns, matchDayPeriodPatterns, parseDayPeriodPatterns, match;
function init_match$15() {
	return (init_match$15 = __esmMin((() => {
		matchOrdinalNumberPattern = /^(第\s*)?\d+(日|時|分|秒)?/i;
		parseOrdinalNumberPattern = /\d+/i;
		matchEraPatterns = {
			narrow: /^(前)/i,
			abbreviated: /^(前)/i,
			wide: /^(公元前|公元)/i
		};
		parseEraPatterns = { any: [/^(前)/i, /^(公元)/i] };
		matchQuarterPatterns = {
			narrow: /^[1234]/i,
			abbreviated: /^第[一二三四]刻/i,
			wide: /^第[一二三四]刻鐘/i
		};
		parseQuarterPatterns = { any: [
			/(1|一)/i,
			/(2|二)/i,
			/(3|三)/i,
			/(4|四)/i
		] };
		matchMonthPatterns = {
			narrow: /^(一|二|三|四|五|六|七|八|九|十[二一]?)/i,
			abbreviated: /^(一|二|三|四|五|六|七|八|九|十[二一]?|\d|1[0-2])月/i,
			wide: /^(一|二|三|四|五|六|七|八|九|十[二一]?)月/i
		};
		parseMonthPatterns = {
			narrow: [
				/^一/i,
				/^二/i,
				/^三/i,
				/^四/i,
				/^五/i,
				/^六/i,
				/^七/i,
				/^八/i,
				/^九/i,
				/^十(?!(一|二))/i,
				/^十一/i,
				/^十二/i
			],
			any: [
				/^(一|1(?!\d))/i,
				/^(二|2)/i,
				/^(三|3)/i,
				/^(四|4)/i,
				/^(五|5)/i,
				/^(六|6)/i,
				/^(七|7)/i,
				/^(八|8)/i,
				/^(九|9)/i,
				/^(十(?!(一|二))|10)/i,
				/^(十一|11)/i,
				/^(十二|12)/i
			]
		};
		matchDayPatterns = {
			narrow: /^[一二三四五六日]/i,
			short: /^[一二三四五六日]/i,
			abbreviated: /^週[一二三四五六日]/i,
			wide: /^星期[一二三四五六日]/i
		};
		parseDayPatterns = { any: [
			/日/i,
			/一/i,
			/二/i,
			/三/i,
			/四/i,
			/五/i,
			/六/i
		] };
		matchDayPeriodPatterns = { any: /^(上午?|下午?|午夜|[中正]午|早上?|下午|晚上?|凌晨)/i };
		parseDayPeriodPatterns = { any: {
			am: /^上午?/i,
			pm: /^下午?/i,
			midnight: /^午夜/i,
			noon: /^[中正]午/i,
			morning: /^早上/i,
			afternoon: /^下午/i,
			evening: /^晚上?/i,
			night: /^凌晨/i
		} };
		match = {
			ordinalNumber: buildMatchPatternFn({
				matchPattern: matchOrdinalNumberPattern,
				parsePattern: parseOrdinalNumberPattern,
				valueCallback: (value) => parseInt(value, 10)
			}),
			era: buildMatchFn({
				matchPatterns: matchEraPatterns,
				defaultMatchWidth: "wide",
				parsePatterns: parseEraPatterns,
				defaultParseWidth: "any"
			}),
			quarter: buildMatchFn({
				matchPatterns: matchQuarterPatterns,
				defaultMatchWidth: "wide",
				parsePatterns: parseQuarterPatterns,
				defaultParseWidth: "any",
				valueCallback: (index) => index + 1
			}),
			month: buildMatchFn({
				matchPatterns: matchMonthPatterns,
				defaultMatchWidth: "wide",
				parsePatterns: parseMonthPatterns,
				defaultParseWidth: "any"
			}),
			day: buildMatchFn({
				matchPatterns: matchDayPatterns,
				defaultMatchWidth: "wide",
				parsePatterns: parseDayPatterns,
				defaultParseWidth: "any"
			}),
			dayPeriod: buildMatchFn({
				matchPatterns: matchDayPeriodPatterns,
				defaultMatchWidth: "any",
				parsePatterns: parseDayPeriodPatterns,
				defaultParseWidth: "any"
			})
		};
	})))();
}
//#endregion
//#region ../node_modules/.store/date-fns@4.4.0-N3CoundlhH8enmbadGmv6Q/node_modules/date-fns/locale/zh-TW.js
var zhTW;
function init_zh_TW() {
	return (init_zh_TW = __esmMin((() => {
		init_formatDistance$15();
		init_formatLong$15();
		init_formatRelative$15();
		init_localize$15();
		init_match$15();
		zhTW = {
			code: "zh-TW",
			formatDistance,
			formatLong,
			formatRelative,
			localize,
			match,
			options: {
				weekStartsOn: 1,
				firstWeekContainsDate: 4
			}
		};
	})))();
}
//#endregion
//#region ../packages/ui/src/calendar/utils/root-context.ts
var RootContext;
function init_root_context() {
	return (init_root_context = __esmMin((() => {
		init_react();
		RootContext = (0, import_react.createContext)({});
	})))();
}
//#endregion
//#region ../packages/ui/src/calendar/utils/components.tsx
/**
* Render a grid cell for a specific day in the calendar.
*
* Handles interaction and focus for the day.
* @see https://daypicker.dev/guides/custom-components
*/
function Day(props) {
	const { day, modifiers, children, ...tdProps } = props;
	let PreviewDash;
	if (modifiers.preview_start && modifiers.preview_end) PreviewDash = PreviewDashStartAndEnd;
	else if (modifiers.preview_start) PreviewDash = PreviewDashStart;
	else if (modifiers.preview_end) PreviewDash = PreviewDashEnd;
	else if (modifiers.preview) PreviewDash = PreviewDashMiddle;
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
		...tdProps,
		children: [PreviewDash && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PreviewDash, {}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 134,
			columnNumber: 21
		}, this), children]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 133,
		columnNumber: 3
	}, this);
}
/**
* Render the root element of the calendar.
*
* Wired to `useRender` so that consumers can swap the underlying element
* through the `render` prop, like every other `@wordpress/ui` component.
* @see https://daypicker.dev/guides/custom-components
*/
function Root({ rootRef, ...props }) {
	const { render, ref, role, defaultAriaLabel } = (0, import_react.useContext)(RootContext);
	const { months, labels } = useDayPicker();
	const hasExplicitLabel = props["aria-label"] !== void 0 || props["aria-labelledby"] !== void 0;
	let ariaLabel = props["aria-label"];
	if (!hasExplicitLabel && defaultAriaLabel && role === "application") {
		const currentMonth = months[0];
		ariaLabel = currentMonth ? sprintf(__("%1$s, %2$s"), defaultAriaLabel, labels.labelGrid(currentMonth.date)) : defaultAriaLabel;
	}
	const mergedRef = useMergeRefs([rootRef ?? null, ref ?? null]);
	return useRender({
		render,
		defaultTagName: "div",
		ref: mergedRef,
		props: {
			...props,
			role,
			"aria-label": ariaLabel
		}
	});
}
/**
* Render a month navigation button.
*
* `@daypicker/react` marks the button as `aria-disabled` (rather than
* `disabled`) when there is no month to navigate to, so that it stays
* discoverable. `IconButton`'s `focusableWhenDisabled` produces the same DOM.
* It also always provides the string returned by its navigation label formatter
* as `aria-label`; the native button prop type cannot express that requirement.
* @see https://daypicker.dev/guides/custom-components
*/
function NavButton({ icon, className, children: _children, "aria-label": label, "aria-disabled": ariaDisabled, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IconButton, {
		...props,
		className,
		label,
		icon,
		variant: "minimal",
		tone: "neutral",
		size: "compact",
		disabled: ariaDisabled === true || ariaDisabled === "true",
		focusableWhenDisabled: true
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 199,
		columnNumber: 3
	}, this);
}
function PreviousMonthButton(props) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavButton, {
		...props,
		icon: chevron_left_default
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 216,
		columnNumber: 9
	}, this);
}
function NextMonthButton(props) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavButton, {
		...props,
		icon: chevron_right_default
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 222,
		columnNumber: 9
	}, this);
}
var import_jsx_dev_runtime, _jsxFileName, PreviewDashStartAndEnd, PreviewDashStart, PreviewDashMiddle, PreviewDashEnd;
function init_components() {
	return (init_components = __esmMin((() => {
		init_useRender();
		init_useDayPicker();
		init_react();
		init_use_merge_refs();
		init_build_module$1();
		init_build_module();
		init_icon_button();
		init_root_context();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/calendar/utils/components.tsx";
		PreviewDashStartAndEnd = () => {
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", {
				viewBox: "0 0 32 32",
				xmlns: "http://www.w3.org/2000/svg",
				fill: "none",
				stroke: "currentColor",
				strokeDasharray: "3.7677",
				strokeDashoffset: "3.2",
				strokeWidth: "1",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { d: "M29.5,0.5 h-27 a2,2 0 0 0 -2,2 v27 a2,2 0 0 0 2,2 h27 a2,2 0 0 0 2,-2 v-27 a2,2 0 0 0 -2,-2" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 39,
					columnNumber: 4
				}, void 0)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 30,
				columnNumber: 3
			}, void 0);
		};
		PreviewDashStart = () => {
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", {
				viewBox: "0 0 32 32",
				xmlns: "http://www.w3.org/2000/svg",
				fill: "none",
				stroke: "currentColor",
				strokeDasharray: "3.84516",
				strokeDashoffset: "1.9226",
				strokeWidth: "1",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { d: "M32,0.5 h-29.5 a2,2 0 0 0 -2,2 v27 a2,2 0 0 0 2,2 h30" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 60,
					columnNumber: 4
				}, void 0)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 51,
				columnNumber: 3
			}, void 0);
		};
		PreviewDashMiddle = () => {
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", {
				viewBox: "0 0 32 32",
				xmlns: "http://www.w3.org/2000/svg",
				fill: "none",
				stroke: "currentColor",
				strokeDasharray: "3.9 4",
				strokeDashoffset: "2",
				strokeWidth: "1",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("line", {
					x1: "0",
					y1: "0.5",
					x2: "100",
					y2: "0.5"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 79,
					columnNumber: 4
				}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("line", {
					x1: "0",
					y1: "31.5",
					x2: "100",
					y2: "31.5"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 80,
					columnNumber: 4
				}, void 0)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 70,
				columnNumber: 3
			}, void 0);
		};
		PreviewDashEnd = () => {
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", {
				viewBox: "0 0 32 32",
				xmlns: "http://www.w3.org/2000/svg",
				fill: "none",
				stroke: "currentColor",
				strokeDasharray: "3.84516",
				strokeDashoffset: "1.9226",
				strokeWidth: "1",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { d: "M0,0.5 h29.5 a2,2 0 0 1 2,2 v27 a2,2 0 0 1 -2,2 h-29.5" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 100,
					columnNumber: 4
				}, void 0)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 91,
				columnNumber: 3
			}, void 0);
		};
		try {
			Day.__docgenInfo = {
				"description": "Render a grid cell for a specific day in the calendar.\n\nHandles interaction and focus for the day.",
				"displayName": "Day",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/calendar/utils/components.tsx",
				"methods": [],
				"props": {
					"day": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/calendar/utils/components.tsx",
							"name": "TypeLiteral"
						}],
						"description": "The day to render.",
						"name": "day",
						"required": true,
						"tags": {},
						"type": { "name": "CalendarDay" }
					},
					"modifiers": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/calendar/utils/components.tsx",
							"name": "TypeLiteral"
						}],
						"description": "The modifiers to apply to the day.",
						"name": "modifiers",
						"required": true,
						"tags": {},
						"type": { "name": "Modifiers" }
					}
				},
				"tags": { "see": "https://daypicker.dev/guides/custom-components" }
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			Root.__docgenInfo = {
				"description": "Render the root element of the calendar.\n\nWired to `useRender` so that consumers can swap the underlying element\nthrough the `render` prop, like every other `@wordpress/ui` component.",
				"displayName": "Root",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/calendar/utils/components.tsx",
				"methods": [],
				"props": { "rootRef": {
					"defaultValue": null,
					"declarations": [{
						"fileName": "gutenberg-storybook-preview/node_modules/.store/react-day-picker@10.0.1-y2Oedn4nrpHutk6t6Rk87g/node_modules/react-day-picker/dist/esm/components/Root.d.ts",
						"name": "TypeLiteral"
					}],
					"description": "Ref for the root element, used when `animate` is `true`.",
					"name": "rootRef",
					"required": false,
					"tags": {},
					"type": { "name": "Ref<HTMLDivElement>" }
				} },
				"tags": { "see": "https://daypicker.dev/guides/custom-components" }
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			PreviousMonthButton.__docgenInfo = {
				"description": "",
				"displayName": "PreviousMonthButton",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/calendar/utils/components.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			NextMonthButton.__docgenInfo = {
				"description": "",
				"displayName": "NextMonthButton",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/calendar/utils/components.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/ui/src/calendar/style.module.css
var root, day, months, nav, weekday, today, selected, outside, hidden, preview, style_module_default;
function init_style_module() {
	return (init_style_module = __esmMin((() => {
		root = "_root_b0hi7_5";
		day = "_day_b0hi7_19";
		months = "_months_b0hi7_134";
		nav = "_nav_b0hi7_120";
		weekday = "_weekday_b0hi7_161";
		today = "_today_b0hi7_175";
		selected = "_selected_b0hi7_188";
		outside = "_outside_b0hi7_219";
		hidden = "_hidden_b0hi7_224";
		preview = "_preview_b0hi7_283";
		style_module_default = {
			root,
			day,
			"day-button": "_day-button_b0hi7_30",
			"caption-label": "_caption-label_b0hi7_107",
			"nav-button": "_nav-button_b0hi7_120",
			"month-caption": "_month-caption_b0hi7_125",
			months,
			"month-grid": "_month-grid_b0hi7_143",
			nav,
			weekday,
			today,
			selected,
			"range-middle": "_range-middle_b0hi7_188",
			outside,
			hidden,
			"range-start": "_range-start_b0hi7_229",
			"range-end": "_range-end_b0hi7_229",
			preview,
			"weeks-before-enter": "_weeks-before-enter_b0hi7_373",
			"weeks-before-exit": "_weeks-before-exit_b0hi7_374",
			"weeks-after-enter": "_weeks-after-enter_b0hi7_375",
			"weeks-after-exit": "_weeks-after-exit_b0hi7_376",
			"caption-after-enter": "_caption-after-enter_b0hi7_377",
			"caption-after-exit": "_caption-after-exit_b0hi7_378",
			"caption-before-enter": "_caption-before-enter_b0hi7_379",
			"caption-before-exit": "_caption-before-exit_b0hi7_380",
			"slide-in-left": "_slide-in-left_b0hi7_1",
			"slide-out-left": "_slide-out-left_b0hi7_1",
			"slide-in-right": "_slide-in-right_b0hi7_1",
			"slide-out-right": "_slide-out-right_b0hi7_1",
			"fade-in": "_fade-in_b0hi7_1",
			"fade-out": "_fade-out_b0hi7_1"
		};
	})))();
}
//#endregion
//#region ../packages/ui/src/calendar/utils/constants.ts
var CLASSNAMES, MODIFIER_CLASSNAMES, COMMON_PROPS;
function init_constants() {
	return (init_constants = __esmMin((() => {
		init_clsx();
		init_components();
		init_style_module();
		init_resets_module();
		init_focus_module();
		init_global_css_defense_module();
		CLASSNAMES = {
			root: clsx(style_module_default.root, resets_module_default["box-sizing"]),
			day: style_module_default.day,
			day_button: clsx(style_module_default["day-button"], global_css_defense_module_default.button, focus_module_default["outset-ring--focus-visible"]),
			outside: style_module_default.outside,
			caption_label: style_module_default["caption-label"],
			button_next: style_module_default["nav-button"],
			button_previous: style_module_default["nav-button"],
			nav: style_module_default.nav,
			month_caption: style_module_default["month-caption"],
			months: style_module_default.months,
			month_grid: style_module_default["month-grid"],
			weekday: style_module_default.weekday,
			today: style_module_default.today,
			selected: style_module_default.selected,
			disabled: void 0,
			hidden: style_module_default.hidden,
			range_start: style_module_default["range-start"],
			range_end: style_module_default["range-end"],
			range_middle: style_module_default["range-middle"],
			weeks_before_enter: style_module_default["weeks-before-enter"],
			weeks_before_exit: style_module_default["weeks-before-exit"],
			weeks_after_enter: style_module_default["weeks-after-enter"],
			weeks_after_exit: style_module_default["weeks-after-exit"],
			caption_after_enter: style_module_default["caption-after-enter"],
			caption_after_exit: style_module_default["caption-after-exit"],
			caption_before_enter: style_module_default["caption-before-enter"],
			caption_before_exit: style_module_default["caption-before-exit"]
		};
		MODIFIER_CLASSNAMES = { preview: style_module_default.preview };
		COMMON_PROPS = {
			animate: true,
			showOutsideDays: false,
			showWeekNumber: false,
			hideWeekdays: false,
			captionLayout: "label",
			fixedWeeks: false,
			hideNavigation: false,
			classNames: CLASSNAMES,
			components: {
				Day,
				Root,
				PreviousMonthButton,
				NextMonthButton
			}
		};
	})))();
}
//#endregion
//#region ../packages/ui/src/calendar/utils/misc.ts
function clampNumberOfMonths(numberOfMonths) {
	return Math.min(3, Math.max(1, numberOfMonths));
}
function init_misc() {
	return (init_misc = __esmMin((() => {})))();
}
//#endregion
//#region ../packages/ui/src/calendar/utils/use-controlled-value.ts
/**
* Keeps track of a value that can be either controlled (via the `value` prop)
* or uncontrolled (via the `defaultValue` prop).
*
* @param props
* @param props.defaultValue
* @param props.value
* @param props.onChange
* @return The controlled value and the value setter.
*/
function useControlledValue({ defaultValue, onChange, value: valueProp }) {
	const hasValue = typeof valueProp !== "undefined";
	const [state, setState] = (0, import_react.useState)(hasValue ? valueProp : defaultValue);
	const value = hasValue ? valueProp : state;
	const uncontrolledSetValue = (0, import_react.useCallback)((nextValue, ...args) => {
		setState(nextValue);
		onChange?.(nextValue, ...args);
	}, [onChange]);
	let setValue;
	if (hasValue && typeof onChange === "function") setValue = onChange;
	else if (!hasValue && typeof onChange === "function") setValue = uncontrolledSetValue;
	else setValue = setState;
	return [value, setValue];
}
function init_use_controlled_value() {
	return (init_use_controlled_value = __esmMin((() => {
		init_react();
	})))();
}
//#endregion
//#region ../packages/ui/src/calendar/utils/use-localization-props.ts
function isLocaleRTL(locale) {
	const direction = (locale.getTextInfo?.() ?? locale.textInfo)?.direction;
	if (direction) return direction === "rtl";
	return [
		"ar",
		"he",
		"fa",
		"ur",
		"ps",
		"syr",
		"dv",
		"ku",
		"ckb",
		"ug",
		"yi"
	].includes(locale.language);
}
function getSupportedLocaleCode(localeCode) {
	if (!localeCode) return;
	let supportedLocaleCode;
	try {
		supportedLocaleCode = Intl.DateTimeFormat.supportedLocalesOf([localeCode])[0];
	} catch {}
	return supportedLocaleCode;
}
function getWeekStartsOn(locale) {
	const firstDay = (locale.getWeekInfo?.() ?? locale.weekInfo)?.firstDay;
	if (firstDay === void 0 || firstDay < 1 || firstDay > 7) return;
	return firstDay % 7;
}
var useLocalizationProps;
function init_use_localization_props() {
	return (init_use_localization_props = __esmMin((() => {
		init_build_module();
		init_react();
		init_en_US();
		useLocalizationProps = ({ locale, timeZone, mode }) => {
			return (0, import_react.useMemo)(() => {
				const isLocaleString = typeof locale === "string";
				const dateFnsLocale = isLocaleString || locale === void 0 ? enUS : locale;
				const supportedLocaleCode = getSupportedLocaleCode(isLocaleString ? locale : locale?.code);
				const localeCode = supportedLocaleCode ?? "en-US";
				const intlLocale = new Intl.Locale(localeCode);
				const isRightToLeft = supportedLocaleCode !== void 0 ? isLocaleRTL(intlLocale) : isRTL();
				const weekStartsOn = isLocaleString || supportedLocaleCode !== void 0 ? getWeekStartsOn(intlLocale) : void 0;
				const monthNameFormatter = new Intl.DateTimeFormat(localeCode, {
					calendar: "gregory",
					year: "numeric",
					month: "long",
					timeZone
				});
				const weekdayNarrowFormatter = new Intl.DateTimeFormat(localeCode, {
					calendar: "gregory",
					weekday: "narrow",
					timeZone
				});
				const weekdayLongFormatter = new Intl.DateTimeFormat(localeCode, {
					calendar: "gregory",
					weekday: "long",
					timeZone
				});
				const fullDateFormatter = new Intl.DateTimeFormat(localeCode, {
					calendar: "gregory",
					weekday: "long",
					year: "numeric",
					month: "long",
					day: "numeric",
					timeZone
				});
				const dayNumberFormatter = new Intl.DateTimeFormat(localeCode, {
					calendar: "gregory",
					day: "numeric",
					timeZone
				});
				return {
					"aria-label": mode === "single" ? __("Date calendar") : __("Date range calendar"),
					labels: {
						/** The label for the navigation toolbar. */
						labelNav: () => __("Navigation bar"),
						/**
						* The label for the month grid.
						* @param date
						*/
						labelGrid: monthNameFormatter.format,
						/**
						* The label for the gridcell, when the calendar is not interactive.
						* @param date
						* @param modifiers
						*/
						labelGridcell: (date, modifiers) => {
							const formattedDate = fullDateFormatter.format(date);
							let label = formattedDate;
							if (modifiers?.today) label = sprintf(__("Today, %s"), formattedDate);
							return label;
						},
						/** The label for the "next month" button. */
						labelNext: () => __("Next month"),
						/** The label for the "previous month" button. */
						labelPrevious: () => __("Previous month"),
						/**
						* The label for the day button.
						* @param date
						* @param modifiers
						*/
						labelDayButton: (date, modifiers) => {
							const formattedDate = fullDateFormatter.format(date);
							let label = formattedDate;
							if (modifiers?.today && modifiers?.selected) return sprintf(__("Today, %s, selected"), formattedDate);
							if (modifiers?.today) label = sprintf(__("Today, %s"), formattedDate);
							if (modifiers?.selected) label = sprintf(__("%s, selected"), formattedDate);
							return label;
						},
						/**
						* The label for the weekday.
						* @param date
						*/
						labelWeekday: weekdayLongFormatter.format
					},
					locale: dateFnsLocale,
					lang: localeCode,
					dir: isRightToLeft ? "rtl" : "ltr",
					...weekStartsOn === void 0 ? {} : { weekStartsOn },
					formatters: {
						formatDay: dayNumberFormatter.format,
						formatWeekdayName: weekdayNarrowFormatter.format,
						formatCaption: monthNameFormatter.format
					},
					timeZone
				};
			}, [
				locale,
				timeZone,
				mode
			]);
		};
	})))();
}
//#endregion
//#region ../packages/ui/src/calendar/utils/use-preserve-day-focus.ts
/**
* Keeps keyboard focus inside the calendar when a controlled month change
* removes the focused day from the DOM.
*
* @param forwardedRef Ref forwarded to the calendar root.
* @param month        The controlled first displayed month.
*
* @see https://github.com/gpbl/react-day-picker/issues/3009
*/
function usePreserveDayFocus(forwardedRef, month) {
	const rootRef = (0, import_react.useRef)(null);
	const hadDayFocusRef = (0, import_react.useRef)(false);
	const mergedRef = useMergeRefs([rootRef, forwardedRef]);
	const monthIndex = month ? month.getFullYear() * 12 + month.getMonth() : void 0;
	const onDayFocus = (0, import_react.useCallback)(() => {
		hadDayFocusRef.current = true;
	}, []);
	const onDayBlur = (0, import_react.useCallback)(() => {
		hadDayFocusRef.current = false;
	}, []);
	(0, import_react.useEffect)(() => {
		if (!hadDayFocusRef.current) return;
		const root = rootRef.current;
		if (!root) return;
		const { activeElement, body } = root.ownerDocument;
		if (activeElement !== body) {
			const grid = activeElement?.closest("[role=\"grid\"]");
			hadDayFocusRef.current = !!grid && root.contains(grid);
			return;
		}
		hadDayFocusRef.current = false;
		const focusTarget = root.querySelector("[role=\"grid\"] button[tabindex=\"0\"]:not(:disabled)");
		const enabledControl = root.querySelector("button:not(:disabled):not([aria-disabled=\"true\"])");
		const focusableControl = root.querySelector("button:not(:disabled)");
		(focusTarget ?? enabledControl ?? focusableControl)?.focus();
	}, [monthIndex]);
	return {
		ref: mergedRef,
		onDayFocus,
		onDayBlur
	};
}
function init_use_preserve_day_focus() {
	return (init_use_preserve_day_focus = __esmMin((() => {
		init_use_merge_refs();
		init_react();
	})))();
}
//#endregion
//#region ../packages/ui/src/calendar/stories/shared.ts
function toDate(value) {
	return value === void 0 ? void 0 : new Date(value);
}
var SHARED_ARG_TYPES, DISABLED_DATES_SAMPLE, nextMonth, nextMonthYear, firstDayOfNextMonth, fourthDayOfNextMonth;
function init_shared() {
	return (init_shared = __esmMin((() => {
		init_en_US(), init_fr(), init_es(), init_de(), init_it(), init_he(), init_ru(), init_ja(), init_pt_BR(), init_nl(), init_ko(), init_tr(), init_id(), init_zh_CN(), init_zh_TW(), init_ar(), init_sv();
		SHARED_ARG_TYPES = {
			locale: {
				options: [
					"English (US)",
					"Persian (locale code)",
					"French",
					"Spanish",
					"German",
					"Italian",
					"Hebrew",
					"Russian",
					"Japanese",
					"Portuguese (Brazil)",
					"Dutch",
					"Korean",
					"Turkish",
					"Indonesian",
					"Chinese (Simplified)",
					"Chinese (Traditional)",
					"Arabic",
					"Swedish"
				],
				mapping: {
					"English (US)": enUS,
					"Persian (locale code)": "fa-IR",
					French: fr,
					Spanish: es,
					German: de,
					Italian: it,
					Hebrew: he,
					Russian: ru,
					Japanese: ja,
					"Portuguese (Brazil)": ptBR,
					Dutch: nl,
					Korean: ko,
					Turkish: tr,
					Indonesian: id,
					"Chinese (Simplified)": zhCN,
					"Chinese (Traditional)": zhTW,
					Arabic: ar,
					Swedish: sv
				},
				control: "select"
			},
			timeZone: {
				options: [
					"Pacific/Honolulu",
					"America/New_York",
					"Europe/London",
					"Asia/Tokyo",
					"Pacific/Auckland"
				],
				control: "select"
			},
			labels: { control: false },
			value: { control: "date" },
			defaultValue: { control: "date" },
			onValueChange: { control: false },
			defaultMonth: { control: "date" },
			month: { control: "date" },
			onMonthChange: { control: false },
			role: { control: "text" },
			endMonth: { control: "date" },
			startMonth: { control: "date" },
			render: { control: false }
		};
		DISABLED_DATES_SAMPLE = [
			new Date((/* @__PURE__ */ new Date()).setDate((/* @__PURE__ */ new Date()).getDate() + 1)),
			{ after: new Date((/* @__PURE__ */ new Date()).getFullYear() + 1, 1, 1) },
			{ before: new Date((/* @__PURE__ */ new Date()).getFullYear() - 1, 11, 1) },
			{
				after: new Date((/* @__PURE__ */ new Date()).getFullYear(), 7, 11),
				before: new Date((/* @__PURE__ */ new Date()).getFullYear(), 7, 15)
			},
			{
				from: new Date((/* @__PURE__ */ new Date()).getFullYear(), 9, 21),
				to: new Date((/* @__PURE__ */ new Date()).getFullYear(), 9, 26)
			},
			{ dayOfWeek: 3 },
			function isPrimeDate(date) {
				return [
					2,
					3,
					5,
					7,
					11,
					13,
					17,
					19,
					23,
					29,
					31
				].includes(date.getDate());
			}
		];
		nextMonth = (/* @__PURE__ */ new Date()).getMonth() === 11 ? 0 : (/* @__PURE__ */ new Date()).getMonth() + 1;
		nextMonthYear = (/* @__PURE__ */ new Date()).getMonth() === 11 ? (/* @__PURE__ */ new Date()).getFullYear() + 1 : (/* @__PURE__ */ new Date()).getFullYear();
		firstDayOfNextMonth = new Date(nextMonthYear, nextMonth, 1);
		fourthDayOfNextMonth = new Date(nextMonthYear, nextMonth, 4);
	})))();
}
//#endregion
export { init_constants as _, init_shared as a, usePreserveDayFocus as c, init_use_controlled_value as d, useControlledValue as f, MODIFIER_CLASSNAMES as g, COMMON_PROPS as h, fourthDayOfNextMonth as i, init_use_localization_props as l, init_misc as m, SHARED_ARG_TYPES as n, toDate as o, clampNumberOfMonths as p, firstDayOfNextMonth as r, init_use_preserve_day_focus as s, DISABLED_DATES_SAMPLE as t, useLocalizationProps as u, RootContext as v, init_root_context as y };
