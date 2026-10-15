import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { h as init_blocks, l as Markdown, u as Meta } from "./blocks-BdcQOi1H.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C1RZKCc6.js";
import { i as useMDXComponents, r as init_lib } from "./react-FgZpKSX8.js";
import { n as init_index_story, t as index_story_exports } from "./index.story-Dcy5p7nH.js";
//#region ../packages/components/src/radio-control/stories/migration-guide.mdx
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
			id: "radiocontrol-migration-guide",
			children: "RadioControl migration guide"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Migrate from ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "?path=/docs/components-radiocontrol--docs",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "RadioControl" })
			}),
			" in ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "@wordpress/components" }),
			" to ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "?path=/docs/design-system-components-form-radiogroupcontrol--docs",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "RadioGroupControl" })
			}),
			" in ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "@wordpress/ui" }),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "basic-migration",
			children: "Basic migration"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Rename the options and controlled value props, and use the new callback name:" }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Before:" }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.pre, { children: (0, import_jsx_runtime.jsx)(_components.code, {
			className: "language-jsx",
			children: "import { RadioControl } from '@wordpress/components';\n\n<RadioControl\n	label=\"Post visibility\"\n	options={ visibilityOptions }\n	selected={ visibility }\n	onChange={ setVisibility }\n	help=\"Choose who can see this post.\"\n/>;\n"
		}) }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "After:" }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.pre, { children: (0, import_jsx_runtime.jsx)(_components.code, {
			className: "language-jsx",
			children: "import { RadioGroupControl } from '@wordpress/ui';\n\n<RadioGroupControl\n	label=\"Post visibility\"\n	items={ visibilityOptions }\n	value={ visibility }\n	onValueChange={ setVisibility }\n	description=\"Choose who can see this post.\"\n/>;\n"
		}) }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "prop-mapping",
			children: "Prop mapping"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(Markdown, { children: `
| \`@wordpress/components\` | \`@wordpress/ui\` | Notes |
| --- | --- | --- |
| \`options\` | \`items\` | Pass an array of items with \`label\` and \`value\`. The item \`description\` and \`disabled\` props also carry over. |
| \`selected\` | \`value\` | Continue passing the selected string for a controlled group. |
| \`onChange\` | \`onValueChange\` | Receives the next selected value. |
| \`help\` | \`description\` | Use plain text only. |
| \`help\` with links or other markup | \`details\` | Use when the help text needs semantic content. |
| \`label\` | \`label\` | The new control requires a plain string. See [Labels](#labels). |
` }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"The new control requires ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "items" }),
			". The legacy control accepts an omitted or empty ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "options" }),
			" array and renders nothing. Pass an empty ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "items" }),
			" array only when an empty labeled group is intentional."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "labels",
			children: "Labels"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			(0, import_jsx_runtime.jsx)(_components.code, { children: "RadioGroupControl" }),
			" requires a ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "label" }),
			" prop with a plain ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "string" }),
			" value. The legacy ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "RadioControl" }),
			" accepts an optional ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "label" }),
			" that can be a ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "ReactNode" }),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "When the visible label text already exists elsewhere, pass a descriptive string and hide it visually:" }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.pre, { children: (0, import_jsx_runtime.jsx)(_components.code, {
			className: "language-jsx",
			children: "<RadioGroupControl\n	label=\"Post visibility\"\n	hideLabelFromVision\n	items={ visibilityOptions }\n	value={ visibility }\n	onValueChange={ setVisibility }\n/>\n"
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"When the label contains markup, or you need a custom layout, compose the ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "?path=/docs/design-system-components-form-primitives-radiogroup--docs",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "RadioGroup" })
			}),
			", ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "?path=/docs/design-system-components-form-primitives-radio--docs",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "Radio" })
			}),
			", ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "?path=/docs/design-system-components-form-primitives-field--docs",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "Field" })
			}),
			", and ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "?path=/docs/design-system-components-form-primitives-fieldset--docs",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "Fieldset" })
			}),
			" primitives instead of ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "RadioGroupControl" }),
			". Pass ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "RadioGroup" }),
			" to ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "Fieldset.Root" }),
			"'s ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "render" }),
			" prop so ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "Fieldset.Legend" }),
			" gives the group its accessible name:"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.pre, { children: (0, import_jsx_runtime.jsx)(_components.code, {
			className: "language-jsx",
			children: "import { Field, Fieldset, Radio, RadioGroup, Stack } from '@wordpress/ui';\n\n<Field.Root>\n	<Fieldset.Root\n		render={\n			<RadioGroup value={ visibility } onValueChange={ setVisibility } />\n		}\n	>\n		<Fieldset.Legend>\n			Post <strong>visibility</strong>\n		</Fieldset.Legend>\n		{ visibilityOptions.map( ( option ) => (\n			<Field.Item\n				key={ option.value }\n				render={ <Stack gap=\"sm\" align=\"start\" /> }\n			>\n				<Radio value={ option.value } disabled={ option.disabled } />\n				<Field.Label variant=\"plain\">{ option.label }</Field.Label>\n			</Field.Item>\n		) ) }\n	</Fieldset.Root>\n</Field.Root>;\n"
		}) }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "form-submission",
			children: "Form submission"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"The legacy control generates a name for its radio inputs. When the selected value must be submitted with a form, pass an explicit ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "name" }),
			" to the new control so the form data has a stable key:"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.pre, { children: (0, import_jsx_runtime.jsx)(_components.code, {
			className: "language-jsx",
			children: "<RadioGroupControl\n	name=\"visibility\"\n	label=\"Post visibility\"\n	items={ visibilityOptions }\n	value={ visibility }\n	onValueChange={ setVisibility }\n/>\n"
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
