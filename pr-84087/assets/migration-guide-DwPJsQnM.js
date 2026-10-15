import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { h as init_blocks, l as Markdown, u as Meta } from "./blocks-BdcQOi1H.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C1RZKCc6.js";
import { i as useMDXComponents, r as init_lib } from "./react-FgZpKSX8.js";
import { n as init_index_story, t as index_story_exports } from "./index.story-WSA1e8jw.js";
//#region ../packages/components/src/textarea-control/stories/migration-guide.mdx
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
			id: "textareacontrol-migration-guide",
			children: "TextareaControl migration guide"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Migrate from ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "?path=/docs/components-textareacontrol--docs",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "TextareaControl" })
			}),
			" in ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "@wordpress/components" }),
			" to ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "?path=/docs/design-system-components-form-textareacontrol--docs",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "TextareaControl" })
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
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Update the import and swap the callback prop:" }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.pre, { children: (0, import_jsx_runtime.jsx)(_components.code, {
			className: "language-jsx",
			children: "// Before\nimport { TextareaControl } from '@wordpress/components';\n\n<TextareaControl\n	label=\"Description\"\n	value={ value }\n	onChange={ setValue }\n	help=\"Enter a short description.\"\n/>;\n\n// After\nimport { TextareaControl } from '@wordpress/ui';\n\n<TextareaControl\n	label=\"Description\"\n	value={ value }\n	onValueChange={ setValue }\n	description=\"Enter a short description.\"\n/>;\n"
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
| \`onChange\` | \`onValueChange\` | Receives the next string value on every change. |
| \`help\` | \`description\` | Use plain text only. |
| \`help\` with links or other markup | \`details\` | Use when the help text needs semantic content. |
| \`hideLabelFromVision\` | \`hideLabelFromVision\` | Same behavior. |
| \`rows\` | \`rows\` | Same default (\`4\`). |
` }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "labels",
			children: "Labels"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			(0, import_jsx_runtime.jsx)(_components.code, { children: "TextareaControl" }),
			" requires a ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "label" }),
			" prop with a plain ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "string" }),
			" value. The legacy component treats ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "label" }),
			" as optional."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "When the visible label text already exists elsewhere, pass a descriptive string and hide it visually:" }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.pre, { children: (0, import_jsx_runtime.jsx)(_components.code, {
			className: "language-jsx",
			children: "<TextareaControl\n	label=\"Notes\"\n	hideLabelFromVision\n	value={ value }\n	onValueChange={ setValue }\n/>;\n"
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"When the label is not a plain string, or you need a custom layout, compose the ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "?path=/docs/design-system-components-form-primitives-textarea--docs",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "Textarea" })
			}),
			" and ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "?path=/docs/design-system-components-form-primitives-field--docs",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "Field" })
			}),
			" primitives instead of ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "TextareaControl" }),
			":"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.pre, { children: (0, import_jsx_runtime.jsx)(_components.code, {
			className: "language-jsx",
			children: "import { Field, Textarea } from '@wordpress/ui';\n\n<Field.Root>\n	<Field.Label>\n		Custom <strong>label</strong> content\n	</Field.Label>\n	<Textarea\n		value={ value }\n		onValueChange={ setValue }\n	/>\n</Field.Root>\n"
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"See the ",
			(0, import_jsx_runtime.jsxs)(_components.a, {
				href: "?path=/docs/design-system-components-form-primitives-field--docs",
				children: [(0, import_jsx_runtime.jsx)(_components.code, { children: "Field" }), " stories"]
			}),
			" for other association patterns, such as external labels with ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "aria-labelledby" }),
			"."
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
