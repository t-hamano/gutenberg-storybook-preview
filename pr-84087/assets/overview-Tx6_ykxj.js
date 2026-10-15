import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { f as Stories, h as init_blocks, n as ArgTypes, u as Meta } from "./blocks-BdcQOi1H.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C1RZKCc6.js";
import { i as useMDXComponents, r as init_lib } from "./react-FgZpKSX8.js";
import { n as init_validated_input_control, t as ValidatedInputControl } from "./validated-input-control-C08jHw_I.js";
import { n as overview_story_exports, t as init_overview_story } from "./overview.story-Biwo6yke.js";
//#region ../packages/ui/src/form/with-validation/stories/overview.mdx
function _createMdxContent(props) {
	const _components = {
		a: "a",
		code: "code",
		em: "em",
		h1: "h1",
		h2: "h2",
		h3: "h3",
		li: "li",
		p: "p",
		ul: "ul",
		...useMDXComponents(),
		...props.components
	};
	return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		(0, import_jsx_runtime.jsx)(Meta, {
			id: "design-system-form-with-validation-overview",
			of: overview_story_exports,
			title: "Components/@wordpress-ui/Form/With Validation/Overview"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h1, {
			id: "validated-form-controls",
			children: "Validated Form Controls"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"This section documents form controls in ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "@wordpress/ui" }),
			" that wrap higher-level ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "*Control" }),
			" components with inline validation feedback via ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "?path=/docs/design-system-components-form-primitives-controlwitherror--docs",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "ControlWithError" })
			}),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "status",
			children: "Status"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"We are still gathering feedback and iterating on these components. APIs and behavior may change before they stabilize. Please get in touch with ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "@WordPress/gutenberg-components" }),
			" if you are interested in trying them out in the Gutenberg app."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "usage",
			children: "Usage"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Component APIs are the same as the underlying control, with the addition of some optional props:" }),
		"\n",
		(0, import_jsx_runtime.jsx)(ArgTypes, {
			of: ValidatedInputControl,
			include: [
				"required",
				"markWhenOptional",
				"customValidity"
			]
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "implementation",
			children: "Implementation"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"These components are designed to work with the native HTML5 ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://developer.mozilla.org/en-US/docs/Web/API/Constraint_validation",
				rel: "nofollow",
				children: "Constraint Validation API"
			}),
			". Using this browser API as the \"source of truth\" for form element errors has these benefits:"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"Ability to use CSS selectors like ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: ":invalid" }),
				", ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: ":user-invalid" }),
				", ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: ":required" }),
				", and ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: ":optional" }),
				"."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"Ability to use simple HTML attribute-based constraints (e.g. ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "min" }),
				", ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "max" }),
				", ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "required" }),
				", ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "pattern" }),
				", ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "type" }),
				") together with fully custom validation logic (with the ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "setCustomValidity()" }),
				" method)."
			] }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "Attribute-based constraints will already have localized, user-facing error messages built in." }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "When a user clicks the form submit button, the browser will automatically check the validity states of all enclosed form elements and block the submit when there are errors. It will also automatically scroll and focus to the first erroring element and show a prominent error popover." }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"While not ",
				(0, import_jsx_runtime.jsx)(_components.em, { children: "all" }),
				" aspects of the Constraint Validation API are well-supported in all screen readers yet, many aspects are, and will continue to improve. We can supplement any accessibility shortcomings with things like ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "aria-live" }),
				" announcements of error messages."
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "current-limitations",
			children: "Current limitations"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "no-easy-access-to-underlying-validation-apis",
			children: "No easy access to underlying validation APIs"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"The consumer does not have a simple way to show validation messages at an arbitrary point in time, unless the fields are wrapped in a ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "form" }),
				" element. Currently, when to show validation messages to the user are handled by the component — any messages are first made visible on ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "blur" }),
				" after the field is considered \"touched\", or if the user tries to submit the enclosing ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "form" }),
				". Messages can also be triggered to show at any time by calling the ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "reportValidity()" }),
				" method on the wrapping ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "<form>" }),
				" element."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"The consumer does not have direct access to the ",
				(0, import_jsx_runtime.jsxs)(_components.a, {
					href: "https://developer.mozilla.org/en-US/docs/Web/API/ValidityState",
					rel: "nofollow",
					children: [(0, import_jsx_runtime.jsx)(_components.code, { children: "validity" }), " object"]
				}),
				" of the underlying element."
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"We don't foresee these being needed much, but it is technically possible by the consumer accessing the target element's validation APIs via ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "ref" }),
			". Better docs or ergonomics can be added when we have actual use cases."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "delegate-elements",
			children: "Delegate elements"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Some validated controls may not be able to use their visible interactive element for constraint validation directly — for example, when the underlying component renders a custom widget rather than a native form control." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "In those cases, the implementation may use a delegate element: a visually hidden native form element that handles Constraint Validation API concerns on behalf of the visible control. This keeps behavior consistent across validated controls, such as scrolling to the first invalid field on submit and blocking form submission when there are errors." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "controlled-mode-only",
			children: "Controlled mode only"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Some of the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "@wordpress/components" }),
			" controls currently do not fully support uncontrolled mode, and the validation components are not tested to work when uncontrolled. For now, we recommend sticking to controlled mode to avoid any issues."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "examples",
			children: "Examples"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(Stories, {})
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
function init_overview() {
	return (init_overview = __esmMin((() => {
		import_jsx_runtime = require_jsx_runtime();
		init_lib();
		init_blocks();
		init_overview_story();
		init_validated_input_control();
	})))();
}
//#endregion
init_overview();
export { MDXContent as default };
