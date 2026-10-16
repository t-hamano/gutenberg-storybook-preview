import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { h as init_blocks, u as Meta } from "./blocks-CCpJx-rT.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C1RZKCc6.js";
import { i as useMDXComponents, r as init_lib } from "./react-FgZpKSX8.js";
//#region ../packages/ui/src/calendar/stories/usage-guidelines.mdx
function _createMdxContent(props) {
	const _components = {
		a: "a",
		code: "code",
		h1: "h1",
		h2: "h2",
		h3: "h3",
		p: "p",
		pre: "pre",
		strong: "strong",
		...useMDXComponents(),
		...props.components
	};
	return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		(0, import_jsx_runtime.jsx)(Meta, {
			id: "design-system-components-calendar-usage-guidelines",
			title: "Components/@wordpress-ui/Calendar/Usage Guidelines"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h1, {
			id: "calendar",
			children: "Calendar"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			(0, import_jsx_runtime.jsx)(_components.code, { children: "Calendar" }),
			" selects a ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "single date" }),
			". ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "RangeCalendar" }),
			" selects a ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "date range" }),
			". Both share the same prop surface apart from the shape of ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "value" }),
			" / ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "defaultValue" }),
			" / ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "onValueChange" }),
			", and the range-only ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "min" }),
			", ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "max" }),
			", ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "excludeDisabled" }),
			", and ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "resetOnSelect" }),
			" props."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Both are built for accessibility and follow ARIA best practices for calendar widgets: keyboard navigation, screen reader support, and customizable labels for internationalization." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "root-role",
			children: "Root role"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			(0, import_jsx_runtime.jsx)(_components.code, { children: "Calendar" }),
			" and ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "RangeCalendar" }),
			" use ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://www.w3.org/TR/wai-aria-1.2/#application",
				rel: "nofollow",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "role=\"application\"" })
			}),
			" by default to help screen readers pass navigation keys to the calendar. The accessible name includes the current month."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Changing the role can affect screen-reader keyboard navigation. Only override it for a tested composition. Apply roles that require additional behavior, such as ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "dialog" }),
			", to a wrapper."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"When using ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "application" }),
			", include the current month in any custom ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "aria-label" }),
			" or ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "aria-labelledby" }),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "usage",
			children: "Usage"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "uncontrolled-mode",
			children: "Uncontrolled Mode"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"The component manages its own selection. Use ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "defaultValue" }),
			" to set the initial value, and ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "onValueChange" }),
			" to react to changes."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.pre, { children: (0, import_jsx_runtime.jsx)(_components.code, {
			className: "language-jsx",
			children: "import { Calendar } from '@wordpress/ui';\n\nconst MyUncontrolledCalendar = () => (\n	<Calendar\n		defaultValue={ new Date() }\n		onValueChange={ ( date ) => console.log( 'Selected: ', date ) }\n	/>\n);\n"
		}) }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "controlled-mode",
			children: "Controlled Mode"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Pass ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "value" }),
			" and update it from ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "onValueChange" }),
			". Pass ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "null" }),
			" to represent no selection while staying controlled."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.pre, { children: (0, import_jsx_runtime.jsx)(_components.code, {
			className: "language-jsx",
			children: "import { useState } from 'react';\nimport { Calendar } from '@wordpress/ui';\n\nconst MyControlledCalendar = () => {\n	const [ value, setValue ] = useState( new Date() );\n\n	return <Calendar value={ value } onValueChange={ setValue } />;\n};\n"
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"The displayed month is a separate piece of state, controlled the same way through ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "month" }),
			" / ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "defaultMonth" }),
			" and ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "onMonthChange" }),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "range-selection",
			children: "Range Selection"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.pre, { children: (0, import_jsx_runtime.jsx)(_components.code, {
			className: "language-jsx",
			children: "import { useState } from 'react';\nimport { RangeCalendar } from '@wordpress/ui';\n\nconst MyRangeCalendar = () => {\n	const [ range, setRange ] = useState( null );\n\n	return <RangeCalendar value={ range } onValueChange={ setRange } />;\n};\n"
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Use ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "min" }),
			" and ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "max" }),
			" to constrain how many nights a range may span, and ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "excludeDisabled" }),
			" to reset the range when a disabled day falls inside it."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"After a range is complete, selecting another date starts a new range, and the hover preview shows only that new start date. Set ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "resetOnSelect" }),
			" to ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "false" }),
			" to preview and adjust the closest end of the completed range instead."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "disabling-days",
			children: "Disabling Days"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"The ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "disabled" }),
			" prop takes a matcher, or an array of matchers. Every shape below is supported:"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.pre, { children: (0, import_jsx_runtime.jsx)(_components.code, {
			className: "language-jsx",
			children: "// Always matches — disables every day.\nconst booleanMatcher = true;\n\n// Matches a specific day.\nconst dateMatcher = new Date();\n\n// Matches any of the days in the array.\nconst arrayMatcher = [ new Date( 2019, 1, 2 ), new Date( 2019, 1, 4 ) ];\n\n// Matches days after the 2nd of February 2019 (exclusive).\nconst afterMatcher = { after: new Date( 2019, 1, 2 ) };\n\n// Matches days before the 2nd of February 2019 (exclusive).\nconst beforeMatcher = { before: new Date( 2019, 1, 2 ) };\n\n// Matches the days between the 2nd and the 5th of February 2019 (exclusive).\nconst intervalMatcher = {\n	after: new Date( 2019, 1, 2 ),\n	before: new Date( 2019, 1, 5 ),\n};\n\n// Matches the days between the 2nd and the 5th of February 2019 (inclusive).\nconst rangeMatcher = {\n	from: new Date( 2019, 1, 2 ),\n	to: new Date( 2019, 1, 5 ),\n};\n\n// Matches Sundays; an array matches weekends.\nconst dayOfWeekMatcher = { dayOfWeek: 0 };\nconst weekendMatcher = { dayOfWeek: [ 0, 6 ] };\n\n// Matches when the function returns true.\nconst functionMatcher = ( day ) => day.getMonth() === 2;\n"
		}) }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "localization",
			children: "Localization"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			(0, import_jsx_runtime.jsx)(_components.code, { children: "Calendar" }),
			" and ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "RangeCalendar" }),
			" always render a Gregorian date grid. A locale changes the language, localized names, numerals, and default text direction. It does not replace the underlying calendar system."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Pass a BCP 47 locale code to ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "locale" }),
			" to localize date text. This does not require importing a matching date-fns locale:"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.pre, { children: (0, import_jsx_runtime.jsx)(_components.code, {
			className: "language-jsx",
			children: "import { Calendar } from '@wordpress/ui';\n\nconst MyFrenchCalendar = () => <Calendar locale=\"fr-FR\" />;\n"
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"The ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "locale" }),
			" prop also accepts a locale object from ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://github.com/date-fns/date-fns/tree/main/src/locale",
				rel: "nofollow",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "date-fns" })
			}),
			":"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.pre, { children: (0, import_jsx_runtime.jsx)(_components.code, {
			className: "language-jsx",
			children: "import { fr } from 'date-fns/locale';\nimport { Calendar } from '@wordpress/ui';\n\nconst MyFrenchCalendar = () => <Calendar locale={ fr } />;\n"
		}) }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "For both input forms, an explicitly supplied, supported locale code derives the default text direction and first day of the week from the browser. This keeps the result consistent whether the code is passed directly or through a date-fns locale object." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"When ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "locale" }),
			" is omitted, invalid, or unsupported for date formatting, the default text direction follows the WordPress translation context. Date text independently falls back to ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "en-US" }),
			". A date-fns locale object with an unsupported code retains its own first-day setting."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"The visible strings (button labels, the \"today\" announcement) come from ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "@wordpress/i18n" }),
			", which uses the site locale rather than these props. For a coherent experience, make sure they agree — or override the strings through the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "labels" }),
			" prop."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Use ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "weekStartsOn" }),
			" to override the first day of the week, including to preserve a custom value from a date-fns locale object. An explicit ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "dir" }),
			" prop overrides both the locale-derived and WordPress text direction. An explicit ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "lang" }),
			" prop overrides the default language attribute."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "time-zones",
			children: "Time Zones"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Set the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "timeZone" }),
			" prop to an ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://en.wikipedia.org/wiki/List_of_tz_database_time_zones",
				rel: "nofollow",
				children: "IANA time zone name"
			}),
			" to render the calendar in a zone other than the browser's."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"When you do, pass ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "TZDate" }),
			" objects rather than native ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "Date" }),
			" objects, otherwise the value you hand in is interpreted in the browser's zone and the selection can land on the wrong day. ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "TZDate" }),
			" comes from ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://www.npmjs.com/package/@date-fns/tz",
				rel: "nofollow",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "@date-fns/tz" })
			}),
			":"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.pre, { children: (0, import_jsx_runtime.jsx)(_components.code, {
			className: "language-jsx",
			children: "import { TZDate } from '@date-fns/tz';\nimport { Calendar } from '@wordpress/ui';\n\nconst timeZone = 'America/New_York';\n\nconst MyCalendarWithTimeZone = () => (\n	<Calendar\n		timeZone={ timeZone }\n		defaultValue={ new TZDate( 2024, 11, 10, timeZone ) }\n	/>\n);\n"
		}) })
	] });
}
function MDXContent(props = {}) {
	const { wrapper: MDXLayout } = {
		...useMDXComponents(),
		...props.components
	};
	return MDXLayout ? (0, import_jsx_runtime.jsx)(MDXLayout, {
		...props,
		children: (0, import_jsx_runtime.jsx)(_createMdxContent, { ...props })
	}) : _createMdxContent(props);
}
var import_jsx_runtime;
function init_usage_guidelines() {
	return (init_usage_guidelines = __esmMin((() => {
		import_jsx_runtime = require_jsx_runtime();
		init_lib();
		init_blocks();
	})))();
}
//#endregion
init_usage_guidelines();
export { MDXContent as default };
