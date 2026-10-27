import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { h as init_blocks, r as Canvas, u as Meta } from "./blocks-CuFIAI47.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C1RZKCc6.js";
import { i as useMDXComponents, r as init_lib } from "./react-FgZpKSX8.js";
import { i as Indeterminate, n as CustomValueFormat, o as init_index_story, r as Default, t as CustomColor } from "./index.story-jiZmO2s3.js";
//#region ../packages/ui/src/progress/stories/usage-guidelines.mdx
function _createMdxContent(props) {
	const _components = {
		a: "a",
		code: "code",
		h1: "h1",
		h2: "h2",
		p: "p",
		pre: "pre",
		...useMDXComponents(),
		...props.components
	};
	return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		(0, import_jsx_runtime.jsx)(Meta, {
			id: "design-system-components-progress-usage-guidelines",
			title: "Components/@wordpress-ui/Progress/Usage Guidelines"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h1, {
			id: "progress-usage-guidelines",
			children: "Progress usage guidelines"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "when-to-use-progress",
			children: "When to use Progress"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Use ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "Progress" }),
			" to show how much of a task has completed, such as uploading files, exporting data, or installing an update. Keep the indicator close to the task it describes."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Use ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "?path=/docs/design-system-components-meter-usage-guidelines--docs",
				children: "Meter"
			}),
			" for a measurement within a known range, such as storage usage or battery charge. A meter describes a quantity rather than task completion. See the ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://www.w3.org/WAI/ARIA/apg/patterns/meter/",
				rel: "nofollow",
				children: "WAI-ARIA meter pattern"
			}),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "label-the-task",
			children: "Label the task"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Use ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "Progress.Label" }),
			" to describe the task. If you omit the visible label, give ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "Progress.Root" }),
			" an accessible name through ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "aria-label" }),
			" or ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "aria-labelledby" }),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Place ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "Progress.Indicator" }),
			" inside ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "Progress.Track" }),
			". Keep ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "Progress.Label" }),
			" and ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "Progress.Value" }),
			" outside Track so its clipping does not hide the text. Use ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "Stack" }),
			" to arrange the label and value together."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(Canvas, { of: Default }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "choose-a-progress-value",
			children: "Choose a progress value"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Pass a numeric ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "value" }),
			" when the amount of completed work is known. The default range is 0 to 100. Use ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "min" }),
			" and ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "max" }),
			" for tasks with different units."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Pass ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "value={ null }" }),
			" when the amount of completed work is unknown. Indeterminate progress shows activity without suggesting a completion percentage."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(Canvas, { of: Indeterminate }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "set-the-width-for-the-layout",
			children: "Set the width for the layout"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			(0, import_jsx_runtime.jsx)(_components.code, { children: "Progress.Root" }),
			" has a default width of 160px, and ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "Progress.Track" }),
			" fills that width. Override the width on Root with ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "className" }),
			" or ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "style" }),
			" when the layout needs a different size. For example, use ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "style={ { width: '100%' } }" }),
			" to fill the container."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Prefer the default width. A wider bar can suit some layouts, but avoid making it so narrow that progress is hard to read. Use a spinner when you need a more compact loading indicator." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "migrate-from-progressbar",
			children: "Migrate from ProgressBar"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Replace ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "ProgressBar" }),
			" from ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "@wordpress/components" }),
			" with ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "Progress.Root" }),
			", ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "Progress.Track" }),
			", and ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "Progress.Indicator" }),
			" from ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "@wordpress/ui" }),
			". Root requires a ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "value" }),
			". For indeterminate progress, pass ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "value={ null }" }),
			" explicitly; ProgressBar allowed its value to be omitted."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Give each task an accessible name with ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "Progress.Label" }),
			", ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "aria-label" }),
			", or ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "aria-labelledby" }),
			". Progress does not supply the generic loading label that ProgressBar used. Both components have a default width of 160px:"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.pre, { children: (0, import_jsx_runtime.jsx)(_components.code, {
			className: "language-jsx",
			children: "import { Progress } from '@wordpress/ui';\nimport { __ } from '@wordpress/i18n';\n\n<Progress.Root value={ null } aria-label={ __( 'Uploading files' ) }>\n	<Progress.Track>\n		<Progress.Indicator />\n	</Progress.Track>\n</Progress.Root>;\n"
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Pass numeric values to Root for determinate progress. If an existing value can be ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "undefined" }),
			", convert it to ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "null" }),
			" with ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "value={ value ?? null }" }),
			". Move any track styling to ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "Progress.Track" }),
			"; ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "className" }),
			" on Root styles the container. A ref on Root points to that container, a ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "div" }),
			" by default, rather than ProgressBar's native ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "progress" }),
			" element."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "format-values-for-the-task",
			children: "Format values for the task"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			(0, import_jsx_runtime.jsx)(_components.code, { children: "Progress.Value" }),
			" displays a percentage by default. Use ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "format" }),
			" and ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "locale" }),
			" to change number formatting. For task-specific text, provide a child function to Value and use ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "getAriaValueText" }),
			" on Root to give assistive technology the same information. Check whether the numeric value is ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "null" }),
			" before displaying a completion amount."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(Canvas, { of: CustomValueFormat }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "customize-the-indicator-color",
			children: "Customize the indicator color"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"The indicator uses a neutral color by default. Its optional ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "color" }),
			" prop accepts CSS colors, including CSS variables. Use ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "currentColor" }),
			" to inherit the surrounding text color. Only the indicator changes color."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(Canvas, { of: CustomColor })
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
