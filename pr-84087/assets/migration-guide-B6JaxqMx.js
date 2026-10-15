import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { h as init_blocks, l as Markdown, u as Meta } from "./blocks-BdcQOi1H.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C1RZKCc6.js";
import { i as useMDXComponents, r as init_lib } from "./react-FgZpKSX8.js";
import { n as init_index_story, t as index_story_exports } from "./index.story-BuG6vaUR.js";
//#region ../packages/components/src/input-control/stories/migration-guide.mdx
function _createMdxContent(props) {
	const _components = {
		a: "a",
		code: "code",
		h1: "h1",
		h2: "h2",
		h3: "h3",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
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
			id: "inputcontrol-migration-guide",
			children: "InputControl migration guide"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Migrate from ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "?path=/docs/components-inputcontrol--docs",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "InputControl" })
			}),
			" in ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "@wordpress/components" }),
			" to ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "?path=/docs/design-system-components-form-inputcontrol--docs",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "InputControl" })
			}),
			" in ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "@wordpress/ui" }),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"The same guidance applies when replacing legacy ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "?path=/docs/components-textcontrol--docs",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "TextControl" })
			}),
			" and ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "?path=/docs/components-numbercontrol--docs",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "NumberControl" })
			}),
			" usages."
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
			children: "// Before\nimport { __experimentalInputControl as InputControl } from '@wordpress/components';\n\n<InputControl\n	label=\"Width\"\n	value={ value }\n	onChange={ ( nextValue ) => setValue( nextValue ?? '' ) }\n	help=\"Enter a value in pixels.\"\n/>;\n\n// After\nimport { InputControl } from '@wordpress/ui';\n\n<InputControl\n	label=\"Width\"\n	value={ value }\n	onValueChange={ ( nextValue ) => setValue( nextValue ) }\n	description=\"Enter a value in pixels.\"\n/>;\n"
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
| \`onChange\` | \`onValueChange\` | Receives the next string value on every change. Legacy \`NumberControl\` also rewrites values to match \`min\`, \`max\`, and \`step\` on Enter and blur; see [Number inputs](#number-inputs). |
| \`help\` | \`description\` | Use plain text only. |
| \`help\` with links or other markup | \`details\` | Use when the help text needs semantic content. |
| \`hideLabelFromVision\` | \`hideLabelFromVision\` | Same behavior. |
| \`prefix\` / \`suffix\` | \`prefix\` / \`suffix\` | Wrap slot content in [\`InputLayout.Slot\`](?path=/docs/design-system-components-form-primitives-input--docs#with-prefix) instead of \`InputControlPrefixWrapper\` / \`InputControlSuffixWrapper\`. |
| \`size\` | \`size\` | Supports \`default\` and \`compact\`. |
| \`type\` | \`type\` | Same HTML input types, including \`number\`. |
` }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "labels",
			children: "Labels"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			(0, import_jsx_runtime.jsx)(_components.code, { children: "InputControl" }),
			" requires a ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "label" }),
			" prop with a plain ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "string" }),
			" value. Legacy ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "InputControl" }),
			", ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "TextControl" }),
			", and ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "NumberControl" }),
			" accept an optional ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "label" }),
			", and the legacy ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "InputControl" }),
			" ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "label" }),
			" can be a ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "ReactNode" }),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "When the visible label text already exists elsewhere, pass a descriptive string and hide it visually:" }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.pre, { children: (0, import_jsx_runtime.jsx)(_components.code, {
			className: "language-jsx",
			children: "<InputControl\n	label=\"Search\"\n	hideLabelFromVision\n	value={ value }\n	onValueChange={ setValue }\n/>;\n"
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"When the label is not a plain string, or you need a custom layout, compose the ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "?path=/docs/design-system-components-form-primitives-input--docs",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "Input" })
			}),
			" and ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "?path=/docs/design-system-components-form-primitives-field--docs",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "Field" })
			}),
			" primitives instead of ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "InputControl" }),
			":"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.pre, { children: (0, import_jsx_runtime.jsx)(_components.code, {
			className: "language-jsx",
			children: "import { Field, Input } from '@wordpress/ui';\n\n<Field.Root>\n	<Field.Label>\n		Custom <strong>label</strong> content\n	</Field.Label>\n	<Input\n		value={ value }\n		onValueChange={ setValue }\n	/>\n</Field.Root>\n"
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
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "prefix-and-suffix-slots",
			children: "Prefix and suffix slots"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Replace the wrapper components with ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "InputLayout.Slot" }),
			":"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.pre, { children: (0, import_jsx_runtime.jsx)(_components.code, {
			className: "language-jsx",
			children: "// Before\nimport { Icon } from '@wordpress/components';\nimport {\n	__experimentalInputControl as InputControl,\n	__experimentalInputControlPrefixWrapper as InputControlPrefixWrapper,\n} from '@wordpress/components';\nimport { link } from '@wordpress/icons';\n\n<InputControl\n	prefix={\n		<InputControlPrefixWrapper variant=\"icon\">\n			<Icon icon={ link } />\n		</InputControlPrefixWrapper>\n	}\n/>;\n\n// After\nimport { Icon, InputControl, InputLayout } from '@wordpress/ui';\nimport { link } from '@wordpress/icons';\n\n<InputControl\n	prefix={\n		<InputLayout.Slot padding=\"minimal\">\n			<Icon icon={ link } />\n		</InputLayout.Slot>\n	}\n/>;\n"
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Use ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "padding=\"minimal\"" }),
			" for icons and controls. Omit it for text prefixes and suffixes such as ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "@" }),
			" or ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "%" }),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "number-inputs",
			children: "Number inputs"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Replace ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "NumberControl" }),
			" usages with ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "InputControl" }),
			" and ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "type=\"number\"" }),
			":"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.pre, { children: (0, import_jsx_runtime.jsx)(_components.code, {
			className: "language-jsx",
			children: "import { InputControl } from '@wordpress/ui';\n\n<InputControl\n	label=\"Quantity\"\n	type=\"number\"\n	min={ 1 }\n	max={ 10 }\n	step={ 1 }\n	value={ value }\n	onValueChange={ setValue }\n/>;\n"
		}) }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "value-clamping-and-step-alignment",
			children: "Value clamping and step alignment"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Legacy ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "NumberControl" }),
			" rewrites the value on Enter and blur: it clamps to ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "min" }),
			"/",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "max" }),
			" and aligns to ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "step" }),
			". ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "@wordpress/ui" }),
			" ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "InputControl" }),
			" passes these constraints to the native ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "<input type=\"number\">" }),
			" for validation, but does not rewrite invalid values when the field loses focus."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"If you relied on the legacy rewrite behavior, normalize the value yourself. A common pattern is to keep accepting edits in ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "onValueChange" }),
			", then clamp on blur:"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.pre, { children: (0, import_jsx_runtime.jsx)(_components.code, {
			className: "language-jsx",
			children: "import { InputControl } from '@wordpress/ui';\n\nfunction constrainValue( value, min, max, step ) {\n	const num = parseFloat( value );\n	if ( Number.isNaN( num ) ) {\n		return value;\n	}\n\n	const clamped = Math.min( max, Math.max( min, num ) );\n	if ( step === 'any' ) {\n		return String( clamped );\n	}\n\n	const stepNum = parseFloat( step );\n	const aligned =\n		min + Math.round( ( clamped - min ) / stepNum ) * stepNum;\n	return String( aligned );\n}\n\n<InputControl\n	label=\"Quantity\"\n	type=\"number\"\n	min={ min }\n	max={ max }\n	step={ step }\n	value={ value }\n	onValueChange={ setValue }\n	onBlur={ ( event ) => {\n		setValue( constrainValue( event.target.value, min, max, step ) );\n	} }\n/>;\n"
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Adapt the helper to match your product requirements. The legacy component also fires ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "onChange" }),
			" while typing with unclamped values, then again with the clamped value on blur."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "removed-numbercontrol-features",
			children: "Removed NumberControl features"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"The ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "@wordpress/ui" }),
			" ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "InputControl" }),
			" does not support these ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "@wordpress/components" }),
			" ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "NumberControl" }),
			" features:"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "spinControls" }) }),
				" — When desired, use explicit controls in a ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "suffix" }),
				" slot. See the ",
				(0, import_jsx_runtime.jsxs)(_components.a, {
					href: "?path=/story/design-system-components-form-inputcontrol--number-with-steppers",
					children: [(0, import_jsx_runtime.jsx)(_components.code, { children: "NumberWithSteppers" }), " story"]
				}),
				"."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsxs)(_components.strong, { children: [
					(0, import_jsx_runtime.jsx)(_components.code, { children: "isShiftStepEnabled" }),
					" / ",
					(0, import_jsx_runtime.jsx)(_components.code, { children: "shiftStep" })
				] }),
				" — Apply larger increments in your stepper handlers or ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "onValueChange" }),
				" logic."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "Mouse-drag value changes" }), " — Not recommended, as they can be confusing and are not supported on touch devices."] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "removed-features",
			children: "Removed features"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"The ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "@wordpress/ui" }),
			" ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "InputControl" }),
			" does not support these ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "@wordpress/components" }),
			" features:"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "labelPosition" }) }),
				" — Only top labels are recommended. If other layouts are necessary, compose using the ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "?path=/docs/design-system-components-form-primitives-input--docs",
					children: (0, import_jsx_runtime.jsx)(_components.code, { children: "Input" })
				}),
				" and ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "?path=/docs/design-system-components-form-primitives-field--docs",
					children: (0, import_jsx_runtime.jsx)(_components.code, { children: "Field" })
				}),
				" primitives."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "isPressEnterToChange" }) }),
				" — Keep a local draft value and commit to your state on ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "Enter" }),
				" or ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "blur" }),
				" if you need deferred updates."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "onValidate" }) }),
				" — Run validation in your ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "onValueChange" }),
				" handler instead."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsxs)(_components.strong, { children: [
				(0, import_jsx_runtime.jsx)(_components.code, { children: "isDragEnabled" }),
				", ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "dragDirection" }),
				", and related drag callbacks"
			] }), " — Not recommended, as they can be confusing and are not supported on touch devices."] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "__unstableInputWidth" }) }),
				" — If the label needs to be a different width from the input field, compose using the ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "?path=/docs/design-system-components-form-primitives-input--docs",
					children: (0, import_jsx_runtime.jsx)(_components.code, { children: "Input" })
				}),
				" and ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "?path=/docs/design-system-components-form-primitives-field--docs",
					children: (0, import_jsx_runtime.jsx)(_components.code, { children: "Field" })
				}),
				" primitives."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "__unstableStateReducer" }) }),
				" — This hook intercepted the internal state machine. Some workarounds for known patterns:",
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
					"\n",
					(0, import_jsx_runtime.jsxs)(_components.li, { children: [
						(0, import_jsx_runtime.jsx)(_components.strong, { children: "Display formatting" }),
						" (for example, zero-padded time segments): always pass a formatted ",
						(0, import_jsx_runtime.jsx)(_components.code, { children: "value" }),
						", or format in an ",
						(0, import_jsx_runtime.jsx)(_components.code, { children: "onBlur" }),
						" handler if updates should be deferred until the field loses focus."
					] }),
					"\n",
					(0, import_jsx_runtime.jsxs)(_components.li, { children: [
						(0, import_jsx_runtime.jsx)(_components.strong, { children: "Paste normalization" }),
						": normalize in ",
						(0, import_jsx_runtime.jsx)(_components.code, { children: "onValueChange" }),
						", or handle ",
						(0, import_jsx_runtime.jsx)(_components.code, { children: "onPaste" }),
						" on ",
						(0, import_jsx_runtime.jsx)(_components.code, { children: "InputControl" }),
						"."
					] }),
					"\n",
					(0, import_jsx_runtime.jsxs)(_components.li, { children: [
						(0, import_jsx_runtime.jsx)(_components.strong, { children: "Custom step or spin behavior" }),
						": apply adjustments in ",
						(0, import_jsx_runtime.jsx)(_components.code, { children: "onValueChange" }),
						", in an ",
						(0, import_jsx_runtime.jsx)(_components.code, { children: "onBlur" }),
						" handler, or with explicit controls in a ",
						(0, import_jsx_runtime.jsx)(_components.code, { children: "suffix" }),
						" slot."
					] }),
					"\n"
				] }),
				"\n"
			] }),
			"\n"
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
