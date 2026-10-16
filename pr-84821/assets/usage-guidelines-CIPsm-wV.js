import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { h as init_blocks, r as Canvas, u as Meta } from "./blocks-CCpJx-rT.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C1RZKCc6.js";
import { i as useMDXComponents, r as init_lib } from "./react-FgZpKSX8.js";
import { i as Default, n as Brand, o as init_index_story, r as CustomValueFormat, t as BarOnly } from "./index.story-B3iH77Y_.js";
//#region ../packages/ui/src/meter/stories/usage-guidelines.mdx
function _createMdxContent(props) {
	const _components = {
		a: "a",
		code: "code",
		h1: "h1",
		h2: "h2",
		p: "p",
		...useMDXComponents(),
		...props.components
	};
	return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		(0, import_jsx_runtime.jsx)(Meta, {
			id: "design-system-components-meter-usage-guidelines",
			title: "Components/@wordpress-ui/Meter/Usage Guidelines"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h1, {
			id: "meter-usage-guidelines",
			children: "Meter usage guidelines"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "when-to-use-meter",
			children: "When to use Meter"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Use ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "Meter" }),
			" for a measured quantity within a known range, such as storage usage, battery charge, or a score. The range needs a meaningful minimum and maximum. See the ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://www.w3.org/WAI/ARIA/apg/patterns/meter/",
				rel: "nofollow",
				children: "WAI-ARIA meter pattern"
			}),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Use ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "?path=/docs/design-system-components-progress-usage-guidelines--docs",
				children: "Progress"
			}),
			" for task completion, such as uploading files or exporting data. Choose the component by what the value represents. Meter's track is 8px by default; Progress has a 1.5px track."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(Canvas, { of: Default }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "label-the-quantity",
			children: "Label the quantity"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Use ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "Meter.Label" }),
			" to describe the measured quantity. If you omit the visible label, give ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "Meter.Root" }),
			" an accessible name through ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "aria-label" }),
			" or ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "aria-labelledby" }),
			". Meter is informational and does not add a Tab stop."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Place ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "Meter.Indicator" }),
			" inside ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "Meter.Track" }),
			". Keep ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "Meter.Label" }),
			" and ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "Meter.Value" }),
			" outside Track so its clipping does not hide the text. Use ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "Stack" }),
			" to arrange the label and value together."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(Canvas, { of: BarOnly }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "choose-a-measurement-value",
			children: "Choose a measurement value"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Pass a numeric ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "value" }),
			". The default range is 0 to 100. Use ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "min" }),
			" and ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "max" }),
			" for measurements with different units, with a minimum less than the maximum. Values outside the range are clamped."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Meter has no indeterminate state. If the measurement is unknown, show that in text instead of passing ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "null" }),
			" or a made-up value."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "format-values-for-the-quantity",
			children: "Format values for the quantity"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			(0, import_jsx_runtime.jsx)(_components.code, { children: "Meter.Value" }),
			" displays a percentage by default. Use ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "format" }),
			" and ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "locale" }),
			" to change number formatting. For measurement-specific text, provide a child function to Value and use ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "getAriaValueText" }),
			" on Root to give assistive technology the same information. The formatted value is clamped to the range; the callback's second argument is the raw numeric value."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(Canvas, { of: CustomValueFormat }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "choose-an-indicator-tone",
			children: "Choose an indicator tone"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"The indicator uses a neutral tone by default. Use ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "tone=\"brand\"" }),
			" for a brand-colored indicator. Only the indicator changes color; the track, label, and value keep their own colors."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Tones do not indicate success, warning, or error, and Meter does not change color at thresholds. Provide visible status text when a quantity needs interpretation. Native meter attributes such as ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "low" }),
			", ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "high" }),
			", and ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "optimum" }),
			" are not supported."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(Canvas, { of: Brand })
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
		init_index_story();
	})))();
}
//#endregion
init_usage_guidelines();
export { MDXContent as default };
