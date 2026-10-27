import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { h as init_blocks, l as Markdown, r as Canvas, u as Meta } from "./blocks-CuFIAI47.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C1RZKCc6.js";
import { i as useMDXComponents, r as init_lib } from "./react-FgZpKSX8.js";
import { n as init_index_story, t as index_story_exports } from "./index.story-BLHARhJ9.js";
import { a as init_index_story$1, n as WithEmptyStringValue, r as WithNullValueOption, t as WithCustomPlaceholder } from "./index.story-C0tIiGtf.js";
import { r as init_index_story$2, t as Minimal } from "./index.story-CDhD1YoP.js";
//#region ../packages/components/src/select-control/stories/migration-guide.mdx
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
			id: "selectcontrol-migration-guide",
			children: "SelectControl migration guide"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Migrate from ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "?path=/docs/components-selectcontrol--docs",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "SelectControl" })
			}),
			" in ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "@wordpress/components" }),
			" to ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "?path=/docs/design-system-components-form-selectcontrol--docs",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "SelectControl" })
			}),
			" in ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "@wordpress/ui" }),
			" for a standard labeled, single-selection field. For the legacy ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "minimal" }),
			" variant, use the ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "?path=/docs/design-system-components-form-primitives-select--docs",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "Select" })
			}),
			" primitive."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"The legacy control wraps a native ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "<select>" }),
			". The new control uses a button with combobox semantics and a portaled listbox. The new control does not support ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "multiple" }),
			". Choose a suitable multi-selection component, such as ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "?path=/docs/design-system-components-form-searchablechipselectcontrol--docs",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "SearchableChipSelectControl" })
			}),
			", or retain the legacy control for that use case."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "basic-migration",
			children: "Basic migration"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Before:" }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.pre, { children: (0, import_jsx_runtime.jsx)(_components.code, {
			className: "language-jsx",
			children: "import { SelectControl } from '@wordpress/components';\n\nconst sizeOptions = [\n	{ value: 'small', label: 'Small' },\n	{ value: 'large', label: 'Large' },\n];\n\n<SelectControl\n	label=\"Size\"\n	options={ sizeOptions }\n	value={ size }\n	onChange={ setSize }\n	help=\"Choose the display size.\"\n/>;\n"
		}) }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "After:" }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.pre, { children: (0, import_jsx_runtime.jsx)(_components.code, {
			className: "language-jsx",
			children: "import { SelectControl } from '@wordpress/ui';\n\nconst sizeItems = [\n	{ value: 'small', label: 'Small' },\n	{ value: 'large', label: 'Large' },\n];\n\n<SelectControl\n	label=\"Size\"\n	items={ sizeItems }\n	value={ sizeItems.find( ( item ) => item.value === size ) ?? null }\n	onValueChange={ ( item ) => {\n		if ( item && item.value !== null ) {\n			setSize( item.value );\n		}\n	} }\n	description=\"Choose the display size.\"\n/>;\n"
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"The selected ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "value" }),
			" and ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "defaultValue" }),
			" are item objects, and ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "onValueChange" }),
			" receives an item or ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "null" }),
			". Keep the application's stored string by reading ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "item.value" }),
			". Use explicit null checks so valid values such as ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "''" }),
			" and ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "'0'" }),
			" are not discarded. Convert numeric identifiers to strings when building ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "SelectControl" }),
			" items and convert them back at the application boundary if needed."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Object values are compared by identity by default. Resolve the selected object from the same array used for ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "items" }),
			" and custom item children. If that is not possible, supply ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "isItemEqualToValue" }),
			" to compare stable identifiers. ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "itemToStringValue" }),
			" controls serialization, not object equality."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "prop-mapping",
			children: "Prop mapping"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(Markdown, { children: `
| Legacy control | New control | Notes |
| --- | --- | --- |
| \`options\` | \`items\` | Items have \`label\`, \`value\`, optional \`disabled\`, and optional \`description\`. Arbitrary native option attributes are not forwarded by the array API. |
| String \`value\` / \`defaultValue\` | Item \`value\` / \`defaultValue\` | Resolve an object from \`items\`, or pass \`null\` for no selection. |
| \`onChange\` | \`onValueChange\` | Receives the item or \`null\`, followed by event details. See [Adapt change callbacks](#adapt-change-callbacks). |
| \`help\` | \`description\` or \`details\` | Use \`description\` for plain text and \`details\` for links or other semantic content. |
| \`label\` | \`label\` | Required plain string. \`hideLabelFromVision\` keeps it accessible while visually hidden. |
| \`disabled\`, \`name\`, \`required\` | Same prop names | Review form behavior, especially when changing serialization. |
| \`onFocus\`, \`onBlur\`, \`id\`, trigger ARIA attributes | \`trigger\` element props | Put button-specific props on \`SelectControl.Trigger\`. |
| \`className\` | \`className\` or trigger \`className\` | The control class styles the field wrapper. Trigger classes style the trigger layout wrapper. Revisit native-element selectors. |
| \`size="default"\` / \`size="compact"\` | Same values | The control does not support \`size="small"\`. The primitive supports a small trigger and items. |
| \`variant="minimal"\` | \`Select.Trigger variant="minimal"\` | Compose the primitive. See [Migrate minimal controls with Select](#migrate-minimal-controls-with-select). |
| \`prefix\`, \`suffix\`, \`labelPosition\` | Custom composition | There is no direct prop mapping. Check trigger customization before using primitives. |
| \`__next*\` opt-ins | Remove | Legacy size and margin opt-ins do not apply to the new control. |
| Native \`option\` / \`optgroup\` children | Compound components | Use \`SelectControl.Item\`, \`Group\`, and \`GroupLabel\`. |
` }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "migrate-empty-string-options",
			children: "Migrate empty-string options"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Decide what each existing empty-string option means before migrating it. An empty string may be a real application value, such as the saved value for a default template, or it may mean that nothing is selected." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"With default serialization, an item with ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "value: ''" }),
			" is treated as an empty selection. Its label may be replaced by the placeholder, and supplying custom trigger text does not remove placeholder semantics or styling. Do not replace every empty string with ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "null" }),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "preserve-an-empty-string-as-a-real-choice",
			children: "Preserve an empty string as a real choice"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"For application state saved through ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "onValueChange" }),
			", keep the domain values and supply a serializer that returns a unique, non-empty string for each ordinary choice:"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(Canvas, {
			of: WithEmptyStringValue,
			sourceState: "none"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.pre, { children: (0, import_jsx_runtime.jsx)(_components.code, {
			className: "language-jsx",
			children: "const positionItems = [\n	{ value: '', label: 'Default' },\n	{ value: 'sticky', label: 'Sticky' },\n];\n\n<SelectControl\n	label=\"Position\"\n	items={ positionItems }\n	value={ positionItems.find( ( item ) => item.value === position ) ?? null }\n	itemToStringValue={ ( item ) =>\n		item.value === null ? '' : `option:${ item.value }`\n	}\n	onValueChange={ ( item ) => {\n		if ( item && item.value !== null ) {\n			setPosition( item.value );\n		}\n	} }\n/>;\n"
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Prefixing every non-null value avoids collisions with a special value such as ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "__default" }),
			" that might also occur in application data. Keep serialization stable and unique across the item collection."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"When submitting a form, ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "itemToStringValue" }),
			" also determines the submitted field value. In this example, Default submits ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "option:" }),
			", while ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "onValueChange" }),
			" still receives the original item with ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "value: ''" }),
			". Convert the serialized value back to the application's stored value in your form handler. Check required-field validation separately, because the non-empty serialization makes Default count as a selection."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "provide-an-option-that-clears-the-selection",
			children: "Provide an option that clears the selection"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Use an item with ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "value: null" }),
			" when the choice means no selection. Its label overrides the placeholder, but it retains empty-selection semantics:"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(Canvas, {
			of: WithNullValueOption,
			sourceState: "shown"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"If the application's existing empty state is ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "''" }),
			", translate it to ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "null" }),
			" when resolving the selection and back to ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "''" }),
			" in the callback. Do this only for an actual empty state, not a named default choice."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "show-a-placeholder-before-selection",
			children: "Show a placeholder before selection"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"If there is no clearable item, pass ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "placeholder" }),
			" for the unselected prompt instead of retaining a disabled empty-string option. A placeholder is not a selectable item."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(Canvas, {
			of: WithCustomPlaceholder,
			sourceState: "shown"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"The development warning catches empty-string values in ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "items" }),
			" when default serialization is used. It skips custom serializers and cannot inspect arbitrary custom children."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "set-an-initial-selection",
			children: "Set an initial selection"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Without ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "value" }),
			" or ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "defaultValue" }),
			", a native single select normally displays its first enabled option. This does not call ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "onChange" }),
			" or initialize application state. The new control starts with no selection and shows its placeholder, or the label of a null-valued item."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "For uncontrolled usage, make the initial selection explicit:" }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.pre, { children: (0, import_jsx_runtime.jsx)(_components.code, {
			className: "language-jsx",
			children: "<SelectControl\n	label=\"Size\"\n	items={ sizeItems }\n	defaultValue={ sizeItems.find( ( item ) => ! item.disabled ) ?? null }\n/>\n"
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"For controlled usage, initialize application state deliberately and resolve it to an item. Do not replace a missing initial value with a fixed ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "value={ items[ 0 ] }" }),
			", which prevents subsequent changes. ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "defaultValue" }),
			" only initializes the selection. When items arrive asynchronously, manage the selection after loading or mount the control once the initial items are ready."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "handle-unavailable-values",
			children: "Handle unavailable values"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Preserve the consumer's policy for unavailable saved values. A missing template may need to display the default template rather than a blank trigger. A custom aspect ratio may need a display-only item instead of the first item." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"The legacy control renders nothing when both its options and children are empty. The new control still renders a field with an empty popup. Keep an explicit rendering guard when the old omission was intentional. Guard failed lookups before reading properties such as ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "selectedItem.label" }),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "preserve-labels-and-descriptions",
			children: "Preserve labels and descriptions"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Pass a descriptive string to ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "label" }),
			", even if ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "hideLabelFromVision" }),
			" is set. Use ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "description" }),
			" for plain-text help and ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "details" }),
			" for links or other semantic content."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"For a hidden description or a label containing markup, compose ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "?path=/docs/design-system-components-form-primitives-field--docs",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "Field" })
			}),
			" with ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "Select" }),
			" and, where needed, ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "?path=/docs/design-system-components-visuallyhidden--docs",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "VisuallyHidden" })
			}),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "move-button-props-to-the-trigger",
			children: "Move button props to the trigger"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Use the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "trigger" }),
			" slot for focus handlers, hover previews, button IDs, or ARIA attributes. Props passed to the control generally reach ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "Select.Root" }),
			", not its button:"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.pre, { children: (0, import_jsx_runtime.jsx)(_components.code, {
			className: "language-jsx",
			children: "<SelectControl\n	label=\"Size\"\n	items={ sizeItems }\n	value={ selectedItem }\n	onValueChange={ handleValueChange }\n	trigger={\n		<SelectControl.Trigger\n			onFocus={ showPreview }\n			onBlur={ hidePreview }\n			onMouseOver={ showPreview }\n			onMouseOut={ hidePreview }\n		/>\n	}\n/>\n"
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Props on the supplied trigger override the control's ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "size" }),
			" and ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "placeholder" }),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "migrate-grouped-options",
			children: "Migrate grouped options"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Replace native ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "<optgroup>" }),
			" children with ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "SelectControl.Group" }),
			" and ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "SelectControl.GroupLabel" }),
			", and native ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "<option>" }),
			" children with ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "SelectControl.Item" }),
			" containing ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "SelectControl.ItemLabel" }),
			". Pass a flat ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "items" }),
			" array for trigger label resolution and use those same objects as item values. See the ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "?path=/story/design-system-components-form-selectcontrol--grouped",
				children: "grouped options story"
			}),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "migrate-minimal-controls-with-select",
			children: "Migrate minimal controls with Select"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Use minimal select triggers sparingly, because users may not recognize them as interactive controls. A small minimal trigger can suit compact pagination controls. When migrating a legacy ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "variant=\"minimal\"" }),
			" control, compose the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "Select" }),
			" primitive and give its trigger an accessible name."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(Canvas, {
			of: Minimal,
			sourceState: "shown"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"The primitive accepts string values directly. With string item values as in this story, ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "onValueChange" }),
			" receives a string or ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "null" }),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "adapt-change-callbacks",
			children: "Adapt change callbacks"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"The legacy ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "onChange" }),
			" receives the selected string and an optional ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "{ event }" }),
			" envelope containing a select change event. The new ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "onValueChange" }),
			" receives the selected item and event details. That event comes from the popup interaction and is not a native select change event. Read the value from the callback's first argument, not ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "event.target.value" }),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "When migrating a component that exposes its own callback to plugins, preserve its documented value and argument shape where possible. If forwarding an event is required, adapt the envelope explicitly and document the change in event semantics." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "update-refs-and-dom-access",
			children: "Update refs and DOM access"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Refs now target ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "HTMLButtonElement" }),
			" instead of ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "HTMLSelectElement" }),
			". Update ref types and replace reads of ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: ".value" }),
			", ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: ".options" }),
			", or ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: ".selectedOptions" }),
			" with application state. Audit code that finds the native select through CSS selectors or DOM traversal."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "check-popup-sizing",
			children: "Check popup sizing"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			(0, import_jsx_runtime.jsx)(_components.code, { children: "SelectControl" }),
			" defaults to ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "popupWidth=\"content\"" }),
			": the popup is at least as wide as the trigger and may grow for long or translated labels. Use ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "popupWidth=\"anchor\"" }),
			" only when matching the trigger width is intentional. The primitive uses ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "Select.Popup width=\"content\"" }),
			" for the corresponding behavior."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Revisit legacy CSS hooks and native select resets. Check sizing and shrinking within the actual container, especially beside long labels. Avoid carrying over one-off popup height, positioning, or z-index workarounds without checking the shared component's current behavior." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "check-popups-inside-existing-overlays",
			children: "Check popups inside existing overlays"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "The popup is portaled outside the field's DOM subtree. Check surrounding outside-click handlers, block selection, focus containment, and form submission in the real consumer. A click on a popup option must not dismiss its parent popover, deselect its block, or submit the surrounding form unexpectedly." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"For directly bundled applications mixing ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "@wordpress/components" }),
			" overlays with ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "@wordpress/ui" }),
			", enable ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "useEnableWpCompatOverlaySlot()" }),
			" once at a long-lived application root as described in the ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://github.com/WordPress/gutenberg/blob/trunk/packages/ui/README.md#mixing-with-wordpresscomponents",
				rel: "nofollow",
				children: "setup guide"
			}),
			". Standard WordPress editor screens enable it automatically. Test the full overlay chain, including a select inside a popover inside a modal."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "verify-a-migration",
			children: "Verify a migration"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "Select each meaningful default, empty, zero, inherited, mixed, and custom value. Confirm the label, stored value, and selection survive saving and reopening. Include missing saved values, empty item arrays, disabled choices, and asynchronously loaded items where supported." }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "Open and select with both pointer and keyboard. Check Escape dismissal, focus return, Tab navigation, typeahead, accessible names and descriptions, and any focus or hover preview callbacks." }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "Exercise the actual parent popover, modal, editor, or form. Check stacking, outside-click behavior, scrolling to the last option near viewport edges, and native submission or validation when used." }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "Check long labels and constrained layouts. In Storybook, include WordPress Global CSS and forced colors for migrated styling. Use browser checks for layout, scrolling, and focus behavior." }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Update tests to interact with the combobox and popup options instead of native select APIs:" }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.pre, { children: (0, import_jsx_runtime.jsx)(_components.code, {
			className: "language-js",
			children: "const sizeControl = page.getByRole( 'combobox', { name: 'Size', exact: true } );\nawait sizeControl.click();\nawait page.getByRole( 'option', { name: 'Large', exact: true } ).click();\nawait expect( sizeControl ).toHaveText( 'Large' );\n"
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Replace Playwright ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "selectOption()" }),
			" and Testing Library ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "selectOptions()" }),
			" with popup interactions, and replace native ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: ".toHaveValue()" }),
			" assertions with trigger text and application-state assertions. Popup options are portaled, so query them from the page or screen rather than only within the field container. Keep native-select helpers for controls that still render a native select."
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
		init_index_story$1();
		init_index_story$2();
	})))();
}
//#endregion
init_migration_guide();
export { MDXContent as default };
