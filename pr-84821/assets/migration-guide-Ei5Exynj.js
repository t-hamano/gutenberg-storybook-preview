import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { h as init_blocks, l as Markdown, u as Meta } from "./blocks-CCpJx-rT.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C1RZKCc6.js";
import { i as useMDXComponents, r as init_lib } from "./react-FgZpKSX8.js";
import { n as init_index_story, t as index_story_exports } from "./index.story-BHOqbTag.js";
//#region ../packages/components/src/toggle-control/stories/migration-guide.mdx
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
			of: index_story_exports,
			name: "Migration Guide"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h1, {
			id: "toggle-family-migration-guide",
			children: "Toggle family migration guide"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Migrate from ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "?path=/docs/components-togglecontrol--docs",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "ToggleControl" })
			}),
			" in ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "@wordpress/components" }),
			" to ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "?path=/docs/design-system-components-form-switchcontrol--docs",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "SwitchControl" })
			}),
			" in ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "@wordpress/ui" }),
			". For custom compositions, replace ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "?path=/docs/components-formtoggle--docs",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "FormToggle" })
			}),
			" with ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "?path=/docs/design-system-components-form-primitives-switch--docs",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "Switch" })
			}),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "basic-migration",
			children: "Basic migration"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Rename the component, callback, and help props:" }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Before:" }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.pre, { children: (0, import_jsx_runtime.jsx)(_components.code, {
			className: "language-jsx",
			children: "import { ToggleControl } from '@wordpress/components';\n\n<ToggleControl\n	label=\"Fixed background\"\n	checked={ hasFixedBackground }\n	onChange={ setHasFixedBackground }\n	help=\"Keep the background fixed while scrolling.\"\n/>;\n"
		}) }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "After:" }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.pre, { children: (0, import_jsx_runtime.jsx)(_components.code, {
			className: "language-jsx",
			children: "import { SwitchControl } from '@wordpress/ui';\n\n<SwitchControl\n	label=\"Fixed background\"\n	checked={ hasFixedBackground }\n	onCheckedChange={ setHasFixedBackground }\n	description=\"Keep the background fixed while scrolling.\"\n/>;\n"
		}) }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "prop-mapping",
			children: "Prop mapping"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(Markdown, { children: `
| \`ToggleControl\` | \`SwitchControl\` | Notes |
| --- | --- | --- |
| \`checked\` | \`checked\` | Continue passing the state for a controlled switch. |
| \`onChange\` | \`onCheckedChange\` | Receives the next checked state as a boolean. |
| \`help\` | \`description\` | Use plain text only. |
| \`help\` with links or other markup | \`details\` | Use when the help text needs semantic content. |
| \`label\` | \`label\` | The new control requires a plain string. See [Labels](#labels). |
` }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"If ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "help" }),
			" is a function, evaluate it with the current checked state and pass the result to ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "description" }),
			" or ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "details" }),
			":"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.pre, { children: (0, import_jsx_runtime.jsx)(_components.code, {
			className: "language-jsx",
			children: "<SwitchControl\n	label=\"Fixed background\"\n	checked={ hasFixedBackground }\n	onCheckedChange={ setHasFixedBackground }\n	description={ getHelpText( hasFixedBackground ) }\n/>\n"
		}) }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "labels",
			children: "Labels"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			(0, import_jsx_runtime.jsx)(_components.code, { children: "SwitchControl" }),
			" requires a ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "label" }),
			" prop with a plain ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "string" }),
			" value. The legacy ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "ToggleControl" }),
			" accepts a ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "ReactNode" }),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "When the label text is already visible elsewhere, pass a descriptive string and hide it visually:" }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.pre, { children: (0, import_jsx_runtime.jsx)(_components.code, {
			className: "language-jsx",
			children: "<SwitchControl\n	label=\"Fixed background\"\n	hideLabelFromVision\n	checked={ hasFixedBackground }\n	onCheckedChange={ setHasFixedBackground }\n/>\n"
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"To customize the label typography, compose ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "Switch" }),
			" with ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "?path=/docs/design-system-components-form-primitives-field--docs",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "Field" })
			}),
			":"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.pre, { children: (0, import_jsx_runtime.jsx)(_components.code, {
			className: "language-jsx",
			children: "import { Field, Stack, Switch } from '@wordpress/ui';\n\n<Field.Root render={ <Stack gap=\"sm\" align=\"start\" /> }>\n	<Switch\n		checked={ hasFixedBackground }\n		onCheckedChange={ setHasFixedBackground }\n	/>\n	<Field.Label\n		variant=\"plain\"\n		style={ { fontFamily: 'var(--wpds-typography-font-family-mono)' } }\n	>\n		Fixed background\n	</Field.Label>\n</Field.Root>;\n"
		}) }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "formtoggle",
			children: "FormToggle"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			(0, import_jsx_runtime.jsx)(_components.code, { children: "FormToggle.onChange" }),
			" receives an input change event. ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "Switch.onCheckedChange" }),
			" receives the next checked state as a boolean, so remove any ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "event.target.checked" }),
			" access:"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Before:" }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.pre, { children: (0, import_jsx_runtime.jsx)(_components.code, {
			className: "language-jsx",
			children: "import { FormToggle } from '@wordpress/components';\n\n<FormToggle\n	aria-label=\"Fixed background\"\n	checked={ hasFixedBackground }\n	onChange={ ( event ) => setHasFixedBackground( event.target.checked ) }\n/>;\n"
		}) }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "After:" }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.pre, { children: (0, import_jsx_runtime.jsx)(_components.code, {
			className: "language-jsx",
			children: "import { Switch } from '@wordpress/ui';\n\n<Switch\n	aria-label=\"Fixed background\"\n	checked={ hasFixedBackground }\n	onCheckedChange={ setHasFixedBackground }\n/>;\n"
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Prefer ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "SwitchControl" }),
			" for a standard labeled switch. Use ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "Field.Label" }),
			" for a visible label in custom compositions."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "refs-and-semantics",
			children: "Refs and semantics"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"The legacy components forward refs to an ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "HTMLInputElement" }),
			". The new components forward refs to an ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "HTMLSpanElement" }),
			" with switch semantics. Update ref types and any code that reads input properties such as ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "ref.current.checked" }),
			" to use the controlled state instead."
		] })
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
function init_migration_guide() {
	return (init_migration_guide = __esmMin((() => {
		import_jsx_runtime = require_jsx_runtime();
		init_lib();
		init_blocks();
		init_index_story();
	})))();
}
//#endregion
init_migration_guide();
export { MDXContent as default };
