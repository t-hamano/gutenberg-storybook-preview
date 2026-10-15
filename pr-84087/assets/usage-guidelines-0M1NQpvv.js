import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { h as init_blocks, l as Markdown, r as Canvas, u as Meta } from "./blocks-BdcQOi1H.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C1RZKCc6.js";
import { i as useMDXComponents, r as init_lib } from "./react-FgZpKSX8.js";
import { a as MixedPrefixIcons, c as usage_guidelines_story_exports, i as MenuForCommands, n as CheckedOptionsWithinACommandMenu, o as SelectForValues, r as ConsistentPrefixIconsWithinGroups, s as init_usage_guidelines_story, t as AutocompleteForSearchableCommands } from "./usage-guidelines.story-D87v8lW8.js";
//#region ../packages/ui/src/menu/stories/usage-guidelines.mdx
function _createMdxContent(props) {
	const _components = {
		a: "a",
		blockquote: "blockquote",
		code: "code",
		h1: "h1",
		h2: "h2",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...useMDXComponents(),
		...props.components
	};
	return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		(0, import_jsx_runtime.jsx)(Meta, { of: usage_guidelines_story_exports }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h1, {
			id: "menu-usage-guidelines",
			children: "Menu usage guidelines"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Choose between Menu, Select, and Autocomplete based on what the options represent and whether users need to search them." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.blockquote, { children: [
			"\n",
			(0, import_jsx_runtime.jsx)(_components.p, { children: "If the trigger represents a current value and opens choices for replacing that value, use Select. If the trigger opens commands, actions, or navigation destinations, use Menu. If users need to type to filter a menu-like list of commands or suggestions, use Autocomplete." }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "quick-reference",
			children: "Quick reference"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(Markdown, { children: `
| Goal | Component | Expected behavior |
| --- | --- | --- |
| Choose one predefined value | [SelectControl](?path=/docs/design-system-components-form-selectcontrol--docs) | The trigger represents the current value. Choosing an option replaces it. |
| Build a custom value-selection control | [Select](?path=/docs/design-system-components-form-primitives-select--docs) | The primitives provide a custom composition while preserving Select semantics. |
| Offer commands, actions, or destinations | [Menu](?path=/docs/design-system-components-menu--docs) | Activating an item runs a command, opens a submenu, or navigates to a destination. |
| Search commands or suggestions with free-form input | [Autocomplete](?path=/docs/design-system-components-form-primitives-autocomplete--docs) | Typing filters the suggestions while focus remains in the input. |
| Change settings within a broader command menu | [Menu](?path=/docs/design-system-components-menu--docs) | Checkbox items toggle independent states. Radio items choose one state within a group. |
` }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.h2, {
			id: "use-selectcontrol-to-choose-a-value",
			children: [
				"Use ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "SelectControl" }),
				" to choose a value"
			]
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Use ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "?path=/docs/design-system-components-form-selectcontrol--docs",
				children: "SelectControl"
			}),
			" when choosing one predefined value is the control's primary purpose. The selected value is often submitted as part of a form, but form submission does not define Select semantics."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "The trigger should represent the current value. The popup options should represent the available replacement values, not commands or navigation destinations." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Use the lower-level ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "?path=/docs/design-system-components-form-primitives-select--docs",
				children: "Select"
			}),
			" primitives only when a custom composition cannot be expressed with ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "SelectControl" }),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(Canvas, { of: SelectForValues }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.h2, {
			id: "use-menu-for-commands-and-destinations",
			children: [
				"Use ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "Menu" }),
				" for commands and destinations"
			]
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Use ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "Menu.Item" }),
			" for commands or actions. Use ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "Menu.LinkItem" }),
			" for navigation destinations. Activating a regular item usually performs its command and closes the menu."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(Canvas, { of: MenuForCommands }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.h2, {
			id: "use-autocomplete-when-users-need-to-search",
			children: [
				"Use ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "Autocomplete" }),
				" when users need to search"
			]
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Use ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "?path=/docs/design-system-components-form-primitives-autocomplete--docs",
				children: "Autocomplete"
			}),
			" for a menu-like list of commands or suggestions that users filter by typing. Unlike ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "Menu" }),
			", focus remains in a text input while users navigate the suggestions."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Autocomplete accepts free-form text. If the control must contain one predefined value, use ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "SelectControl" }),
			" or the lower-level ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "Select" }),
			" primitives instead."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(Canvas, { of: AutocompleteForSearchableCommands }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "use-checked-items-for-settings-within-a-menu",
			children: "Use checked items for settings within a menu"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Use ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "Menu.CheckboxItem" }),
			" for independent states, such as showing or hiding individual table columns."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Use ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "Menu.RadioItem" }),
			" within ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "Menu.RadioGroup" }),
			" for mutually exclusive states, such as choosing one density or view mode within a broader command menu."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			(0, import_jsx_runtime.jsx)(_components.code, { children: "Menu.RadioGroup" }),
			" already provides grouping. Put ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "Menu.GroupLabel" }),
			" inside it to label the radio group. Do not wrap it in ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "Menu.Group" }),
			" or put ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "Menu.Group" }),
			" inside it. This also applies to combining the two components with the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "render" }),
			" prop. A label in an outer group does not label the inner group. Development builds throw an error for either nesting direction, including through wrapper components."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.pre, { children: (0, import_jsx_runtime.jsx)(_components.code, {
			className: "language-tsx",
			children: "<Menu.RadioGroup defaultValue=\"compact\">\n	<Menu.GroupLabel>Density</Menu.GroupLabel>\n	<Menu.RadioItem value=\"compact\">\n		<Menu.ItemLabel>Compact</Menu.ItemLabel>\n	</Menu.RadioItem>\n	<Menu.RadioItem value=\"comfortable\">\n		<Menu.ItemLabel>Comfortable</Menu.ItemLabel>\n	</Menu.RadioItem>\n</Menu.RadioGroup>\n"
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Use ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "Menu.Group" }),
			" for related commands, links, or checkbox items. ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "Menu.Group" }),
			" and ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "Menu.RadioGroup" }),
			" can be siblings in the same popup. Each submenu has its own groups."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Prefer consistent prefix icon usage within each group. See ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "#add-prefix-icons",
				children: "Add prefix icons"
			}),
			" for recommendations and examples."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(Canvas, { of: CheckedOptionsWithinACommandMenu }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Do not use checked menu items only to recreate a Select. If choosing a value is the whole purpose of the control, use ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "SelectControl" }),
			", even when the options could look like radio menu items."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "disable-the-trigger-or-individual-items",
			children: "Disable the trigger or individual items"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Set ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "disabled" }),
			" on ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "Menu.Trigger" }),
			" when the menu cannot be opened, such as when no actions are available. Set ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "disabled" }),
			" on individual items when their actions are unavailable. Disabling the trigger does not disable items in an already open menu."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Disabling only the trigger lets users dismiss a menu that was open when the trigger became disabled. For submenus, set ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "disabled" }),
			" on ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "Menu.SubmenuTrigger" }),
			". Neither ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "Menu.Root" }),
			" nor ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "Menu.SubmenuRoot" }),
			" supports ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "disabled" }),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"When rendering an ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "@wordpress/components" }),
			" ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "Button" }),
			", keep ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "accessibleWhenDisabled" }),
			" on the button if it should remain focusable. Put ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "disabled" }),
			" on ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "Menu.Trigger" }),
			", which passes it to the rendered button and prevents the menu from opening with the keyboard or pointer."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.pre, { children: (0, import_jsx_runtime.jsx)(_components.code, {
			className: "language-tsx",
			children: "import { Button } from '@wordpress/components';\nimport { Menu } from '@wordpress/ui';\n\n<Menu.Root>\n	<Menu.Trigger\n		disabled={ isUnavailable }\n		render={ <Button accessibleWhenDisabled /> }\n	>\n		Actions\n	</Menu.Trigger>\n	<Menu.Popup>\n		<Menu.Item disabled={ isUnavailable } onClick={ duplicate }>\n			<Menu.ItemLabel>Duplicate</Menu.ItemLabel>\n		</Menu.Item>\n	</Menu.Popup>\n</Menu.Root>;\n"
		}) }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "add-prefix-icons",
			children: "Add prefix icons"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Use familiar icons to help users recognize actions or give a key action useful prominence. Choose icons with a clear meaning and omit purely decorative ones." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.blockquote, { children: [
			"\n",
			(0, import_jsx_runtime.jsx)(_components.p, { children: "Prefer icons on every item in a group, or none. If only one item needs an icon, consider whether it belongs in that group or needs its own. Prefer omitting the icon over adding unnecessary icons to the other items." }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Mixed icon usage is supported. Labels without icons start at the same position as neighboring icons, without an empty icon space." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Apply the recommendation within each group and submenu. Groups can use ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "Menu.Group" }),
			", ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "Menu.RadioGroup" }),
			", or separators, and do not need headings. Different groups can make different choices. Checkbox and radio selection indicators do not count as prefix icons."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Use ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "Menu.PrefixIcon" }),
			" for SVG icons. Keep its default 16px size for consistency."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "In this example, the Actions group has icons and the Navigation group has none." }),
		"\n",
		(0, import_jsx_runtime.jsx)(Canvas, { of: ConsistentPrefixIconsWithinGroups }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "This example mixes items with and without icons. Rename starts at the same position as the Duplicate and Archive icons." }),
		"\n",
		(0, import_jsx_runtime.jsx)(Canvas, { of: MixedPrefixIcons }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Prefix icons are hidden from assistive technology. Make each action clear in its label." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "keep-labels-clear-and-descriptions-rare",
			children: "Keep labels clear and descriptions rare"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Write short labels that users can understand on their own. Improve an unclear label before adding a description. Most items should not need one." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Use a brief description only for essential context the label cannot convey. For example, ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "Delete…" }),
			" might need \"Also deletes all versions of this item.\" Do not repeat the label or explain an obvious action."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Avoid combining a prefix icon and a description in the same item. Both add detail and can make the menu harder to scan." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Check that longer or translated labels and descriptions wrap cleanly." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "use-an-ellipsis-for-actions-that-need-more-input",
			children: "Use an ellipsis for actions that need more input"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Append an ellipsis (",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "…" }),
			") when activating an item opens another interface that requires more user input before the command can finish, such as a dialog."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"Use ",
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "Rename…" }),
				" when activation opens a dialog where the user enters a new name."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"Use ",
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "Delete…" }),
				" when activation opens a confirmation dialog that requires a decision."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"Use ",
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "Preferences" }),
				" without an ellipsis when activation completes the command by opening the preferences interface."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"Use ",
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "Duplicate" }),
				" when activation completes the command immediately."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"Use ",
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "Move to" }),
				" without an ellipsis when the item opens a submenu."
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"The consumer must add the ellipsis because ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "Menu.Item" }),
			" cannot infer what happens after activation. See the ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://www.w3.org/WAI/ARIA/apg/patterns/menubar/",
				rel: "nofollow",
				children: "WAI-ARIA APG Menu and Menubar Pattern"
			}),
			" and the ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://github.com/WordPress/gutenberg/issues/64555#issuecomment-5244971187",
				rel: "nofollow",
				children: "WordPress ellipsis guidance"
			}),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "common-mistakes",
			children: "Common mistakes"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "Using Menu to choose the control's only value." }),
				" Use ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "SelectControl" }),
				" so the trigger and options communicate value selection."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "Putting commands or links in Select." }),
				" Use ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "Menu.Item" }),
				" for commands and ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "Menu.LinkItem" }),
				" for destinations."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "Using Menu for a large set of searchable commands." }),
				" Use ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "Autocomplete" }),
				" when users need to filter commands or suggestions by typing."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "Using radio items to recreate a Select." }),
				" Use ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "Menu.RadioItem" }),
				" only when the state belongs inside a broader command menu."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "Adding icons only for consistency." }), " Omit unnecessary icons instead."] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "Combining an icon and a description." }), " Use only the supporting detail the item needs."] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "Adding descriptions to most items." }), " Keep labels clear and reserve descriptions for essential context."] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "Adding an ellipsis to every item that opens another interface." }),
				" Reserve it for commands that require more input before completion. Do not add it when opening the interface completes the command, as with ",
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "Preferences" }),
				"."
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "references",
			children: "References"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://www.w3.org/WAI/ARIA/apg/patterns/menubar/",
				rel: "nofollow",
				children: "WAI-ARIA APG: Menu and Menubar Pattern"
			}) }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://www.w3.org/WAI/ARIA/apg/patterns/listbox/",
				rel: "nofollow",
				children: "WAI-ARIA APG: Listbox Pattern"
			}) }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsxs)(_components.a, {
				href: "https://www.w3.org/TR/wai-aria-1.2/#menuitemcheckbox",
				rel: "nofollow",
				children: [
					"WAI-ARIA: ",
					(0, import_jsx_runtime.jsx)(_components.code, { children: "menuitemcheckbox" }),
					" role"
				]
			}) }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsxs)(_components.a, {
				href: "https://www.w3.org/TR/wai-aria-1.2/#menuitemradio",
				rel: "nofollow",
				children: [
					"WAI-ARIA: ",
					(0, import_jsx_runtime.jsx)(_components.code, { children: "menuitemradio" }),
					" role"
				]
			}) }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsxs)(_components.a, {
				href: "https://html.spec.whatwg.org/dev/form-elements.html#the-select-element",
				rel: "nofollow",
				children: [
					"HTML Standard: The ",
					(0, import_jsx_runtime.jsx)(_components.code, { children: "select" }),
					" element"
				]
			}) }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://base-ui.com/react/components/menu",
				rel: "nofollow",
				children: "Base UI: Menu"
			}) }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://base-ui.com/react/components/select",
				rel: "nofollow",
				children: "Base UI: Select"
			}) }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://base-ui.com/react/components/autocomplete",
				rel: "nofollow",
				children: "Base UI: Autocomplete"
			}) }),
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
function init_usage_guidelines() {
	return (init_usage_guidelines = __esmMin((() => {
		import_jsx_runtime = require_jsx_runtime();
		init_lib();
		init_blocks();
		init_usage_guidelines_story();
	})))();
}
//#endregion
init_usage_guidelines();
export { MDXContent as default };
