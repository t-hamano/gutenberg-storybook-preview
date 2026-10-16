import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { h as init_blocks, l as Markdown, u as Meta } from "./blocks-CCpJx-rT.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C1RZKCc6.js";
import { i as useMDXComponents, r as init_lib } from "./react-FgZpKSX8.js";
import { n as init_index_story, t as index_story_exports } from "./index.story-CKXHtcDM.js";
//#region ../packages/components/src/checkbox-control/stories/migration-guide.mdx
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
			id: "checkboxcontrol-migration-guide",
			children: "CheckboxControl migration guide"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Migrate from ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "?path=/docs/components-checkboxcontrol--docs",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "CheckboxControl" })
			}),
			" in ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "@wordpress/components" }),
			" to ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "?path=/docs/design-system-components-form-checkboxcontrol--docs",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "CheckboxControl" })
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
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Update the import and replace the callback and help props:" }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.pre, { children: (0, import_jsx_runtime.jsx)(_components.code, {
			className: "language-jsx",
			children: "// Before\nimport { CheckboxControl } from '@wordpress/components';\n\n<CheckboxControl\n	label=\"Is author\"\n	checked={ isChecked }\n	onChange={ setChecked }\n	help=\"Give this user author permissions.\"\n/>;\n\n// After\nimport { CheckboxControl } from '@wordpress/ui';\n\n<CheckboxControl\n	label=\"Is author\"\n	checked={ isChecked }\n	onCheckedChange={ setChecked }\n	description=\"Give this user author permissions.\"\n/>;\n"
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
| \`onChange\` | \`onCheckedChange\` | Receives the next checked state as a boolean. |
| \`help\` | \`description\` | Use plain text only. |
| \`help\` with links or other markup | \`details\` | Use when the help text needs semantic content. |
| \`checked\` | \`checked\` | Continue passing the state for a controlled checkbox. |
` }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "form-values",
			children: "Form values"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"When a checked checkbox has a ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "name" }),
			" but no ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "value" }),
			", the legacy component submits ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "\"1\"" }),
			" with the form, while the new component submits ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "\"on\"" }),
			", the native default for checkboxes. If your form handler expects the legacy value, pass ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "value=\"1\"" }),
			" to the new component:"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.pre, { children: (0, import_jsx_runtime.jsx)(_components.code, {
			className: "language-jsx",
			children: "<CheckboxControl\n	name=\"isAuthor\"\n	value=\"1\"\n	label=\"Is author\"\n	checked={ isChecked }\n	onCheckedChange={ setChecked }\n/>\n"
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"If the legacy component already has a custom ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "value" }),
			", keep that value instead."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "labels",
			children: "Labels"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"The new ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "CheckboxControl" }),
			" requires a ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "label" }),
			" prop with a plain ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "string" }),
			" value. The legacy component treats ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "label" }),
			" as optional. Give every checkbox a descriptive label, even when the text is already visible elsewhere:"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.pre, { children: (0, import_jsx_runtime.jsx)(_components.code, {
			className: "language-jsx",
			children: "<CheckboxControl\n	label=\"Receive notifications\"\n	hideLabelFromVision\n	checked={ isChecked }\n	onCheckedChange={ setChecked }\n/>\n"
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"For a custom label layout, compose the ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "?path=/docs/design-system-components-form-primitives-checkbox--docs",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "Checkbox" })
			}),
			" and ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "?path=/docs/design-system-components-form-primitives-field--docs",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "Field" })
			}),
			" primitives."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "checkbox-groups",
			children: "Checkbox groups"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"If a legacy checkbox uses ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "indeterminate" }),
			" to show that only some items are selected, move the selected items into a ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "CheckboxGroup" }),
			" instead of calculating the parent checkbox state yourself. Pass the child values to ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "allValues" }),
			" and mark the select-all checkbox with ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "parent" }),
			". The group updates the parent checkbox when children change and selects or clears all children when the parent is clicked."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.pre, { children: (0, import_jsx_runtime.jsx)(_components.code, {
			className: "language-jsx",
			children: "import { useState } from '@wordpress/element';\nimport { CheckboxControl, CheckboxGroup } from '@wordpress/ui';\n\nfunction FruitCheckboxes() {\n	const [ selectedFruits, setSelectedFruits ] = useState( [ 'apple' ] );\n\n	return (\n		<CheckboxGroup\n			value={ selectedFruits }\n			onValueChange={ setSelectedFruits }\n			allValues={ [ 'apple', 'orange' ] }\n			aria-label=\"Fruit\"\n		>\n			<CheckboxControl parent value=\"fruit\" label=\"Select all fruit\" />\n			<CheckboxGroup.NestedItems>\n				<CheckboxControl value=\"apple\" label=\"Apple\" />\n				<CheckboxControl value=\"orange\" label=\"Orange\" />\n			</CheckboxGroup.NestedItems>\n		</CheckboxGroup>\n	);\n}\n"
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"See the ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "?path=/docs/design-system-components-form-checkbox-groups--docs",
				children: "Checkbox Groups stories"
			}),
			" for other grouping patterns."
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
