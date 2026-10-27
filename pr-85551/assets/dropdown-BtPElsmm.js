import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as init_build_module, t as deprecated } from "./build-module-BWCORUbm.js";
import { n as useMergeRefs, t as init_use_merge_refs } from "./use-merge-refs-BAtuPB1L.js";
import { a as init_clsx, i as clsx } from "./iframe-UtSZlYID.js";
import { n as useContextSystem, o as init_context_connect, r as contextConnect, t as init_use_context_system } from "./use-context-system-6z_jGcZR.js";
import { n as useControlledValue, t as init_use_controlled_value } from "./use-controlled-value-B56JrsG0.js";
import { n as init_popover, t as Popover } from "./popover-DZPLpaht.js";
//#region ../packages/components/src/dropdown/index.tsx
var import_jsx_dev_runtime, _jsxFileName, UnconnectedDropdown, Dropdown;
function init_dropdown() {
	return (init_dropdown = __esmMin((() => {
		init_clsx();
		init_react();
		init_use_merge_refs();
		init_build_module();
		init_context_connect(), init_use_context_system();
		init_use_controlled_value();
		init_popover();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/dropdown/index.tsx";
		UnconnectedDropdown = (props, forwardedRef) => {
			const { renderContent, renderToggle, className, contentClassName, expandOnMobile, headerTitle, focusOnMount, popoverProps, onClose, onToggle, style, open, defaultOpen, position, variant } = useContextSystem(props, "Dropdown");
			if (position !== void 0) deprecated("`position` prop in wp.components.Dropdown", {
				since: "6.2",
				alternative: "`popoverProps.placement` prop",
				hint: "Note that the `position` prop will override any values passed through the `popoverProps.placement` prop."
			});
			const [fallbackPopoverAnchor, setFallbackPopoverAnchor] = (0, import_react.useState)(null);
			const containerRef = (0, import_react.useRef)(null);
			const [isOpen, setIsOpen] = useControlledValue({
				defaultValue: defaultOpen,
				value: open,
				onChange: onToggle
			});
			/**
			* Closes the popover when focus leaves it unless the toggle was pressed or
			* focus has moved to a separate dialog. The former is to let the toggle
			* handle closing the popover and the latter is to preserve presence in
			* case a dialog has opened, allowing focus to return when it's dismissed.
			*/
			function closeIfFocusOutside() {
				if (!containerRef.current) return;
				const { ownerDocument } = containerRef.current;
				const dialog = ownerDocument?.activeElement?.closest("[role=\"dialog\"]");
				if (!containerRef.current.contains(ownerDocument.activeElement) && (!dialog || dialog.contains(containerRef.current))) close();
			}
			function close() {
				onClose?.();
				setIsOpen(false);
			}
			const args = {
				isOpen: !!isOpen,
				onToggle: () => setIsOpen(!isOpen),
				onClose: close
			};
			const popoverPropsHaveAnchor = !!popoverProps?.anchor || !!popoverProps?.anchorRef || !!popoverProps?.getAnchorRect || !!popoverProps?.anchorRect;
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className,
				ref: useMergeRefs([
					containerRef,
					forwardedRef,
					setFallbackPopoverAnchor
				]),
				tabIndex: -1,
				style,
				children: [renderToggle(args), isOpen && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Popover, {
					position,
					onClose: close,
					onFocusOutside: closeIfFocusOutside,
					expandOnMobile,
					headerTitle,
					focusOnMount,
					offset: 13,
					anchor: !popoverPropsHaveAnchor ? fallbackPopoverAnchor : void 0,
					variant,
					...popoverProps,
					className: clsx("components-dropdown__content", popoverProps?.className, contentClassName),
					children: renderContent(args)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 117,
					columnNumber: 5
				}, void 0)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 102,
				columnNumber: 3
			}, void 0);
		};
		Dropdown = contextConnect(UnconnectedDropdown, "Dropdown");
		try {
			Dropdown.__docgenInfo = {
				"description": "Renders a button that opens a floating content modal when clicked.\n\n```jsx\nimport { Button, Dropdown } from '@wordpress/components';\n\nconst MyDropdown = () => (\n  <Dropdown\n    className=\"my-container-class-name\"\n    contentClassName=\"my-dropdown-content-classname\"\n    popoverProps={ { placement: 'bottom-start' } }\n    renderToggle={ ( { isOpen, onToggle } ) => (\n      <Button\n        variant=\"primary\"\n        onClick={ onToggle }\n        aria-expanded={ isOpen }\n      >\n        Toggle Dropdown!\n      </Button>\n    ) }\n    renderContent={ () => <div>This is the content of the dropdown.</div> }\n  />\n);\n```",
				"displayName": "Dropdown",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/dropdown/index.tsx",
				"methods": [],
				"props": {
					"className": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/dropdown/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The className of the global container.",
						"name": "className",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"contentClassName": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/dropdown/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "If you want to target the dropdown menu for styling purposes,\nyou need to provide a contentClassName because it's not being rendered\nas a child of the container node.",
						"name": "contentClassName",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"expandOnMobile": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/dropdown/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Opt-in prop to show popovers fullscreen on mobile.",
						"name": "expandOnMobile",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"focusOnMount": {
						"defaultValue": { "value": "'firstElement'" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/dropdown/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Determines focus behavior when the dialog mounts.\n\n- `\"firstElement\"` focuses the first tabbable element within.\n- `\"firstInputElement\"` focuses the first value control within.\n- `true` focuses the element itself.\n- `false` does nothing and _should not be used unless an accessible\n   substitute behavior is implemented_.",
						"name": "focusOnMount",
						"required": false,
						"tags": {},
						"type": { "name": "Mode" }
					},
					"headerTitle": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/dropdown/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Set this to customize the text that is shown in the dropdown's header\nwhen it is fullscreen on mobile.",
						"name": "headerTitle",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"onClose": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/dropdown/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "A callback invoked when the popover should be closed.",
						"name": "onClose",
						"required": false,
						"tags": {},
						"type": { "name": "(() => void)" }
					},
					"onToggle": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/dropdown/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "A callback invoked when the state of the dropdown changes\nfrom open to closed and vice versa.",
						"name": "onToggle",
						"required": false,
						"tags": {},
						"type": { "name": "((willOpen: boolean) => void)" }
					},
					"popoverProps": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/dropdown/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Properties of popoverProps object will be passed as props\nto the Popover component.\nUse this object to access properties/features\nof the Popover component that are not already exposed\nin the Dropdown component,\ne.g.: the ability to have the popover without an arrow.",
						"name": "popoverProps",
						"required": false,
						"tags": {},
						"type": { "name": "Omit<Omit<Omit<WordPressComponentProps<PopoverProps, \"div\", false>, \"onDrag\" | \"onDragEnd\" | \"onDragStart\" | \"onAnimationStart\" | \"inherit\" | ... 52 more ... | \"whileTap\"> & Pick<...>, \"ref\">, \"children\">" }
					},
					"renderContent": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/dropdown/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "A callback invoked to render the content of the dropdown menu.\nIts first argument is the same as the renderToggle prop.",
						"name": "renderContent",
						"required": true,
						"tags": {},
						"type": { "name": "(props: CallbackProps) => ReactNode" }
					},
					"renderToggle": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/dropdown/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "A callback invoked to render the Dropdown Toggle Button.\n\nThe first argument of the callback is an object\ncontaining the following properties:\n\n- isOpen: whether the dropdown menu is opened or not\n- onToggle: A function switching the dropdown menu's state\nfrom open to closed and vice versa\n- onClose: A function that closes the menu if invoked",
						"name": "renderToggle",
						"required": true,
						"tags": {},
						"type": { "name": "(props: CallbackProps) => ReactNode" }
					},
					"style": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/dropdown/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The style of the global container.",
						"name": "style",
						"required": false,
						"tags": {},
						"type": { "name": "CSSProperties" }
					},
					"position": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/dropdown/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Legacy way to specify the popover's position with respect to its anchor.\nFor details about the possible values, see the `Popover` component's docs.\n_Note: this prop is deprecated. Use the `popoverProps.placement` prop\ninstead._\n@deprecated",
						"name": "position",
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "\"middle center\" | \"middle left\" | \"middle right\" | \"top center\" | \"top left\" | \"top right\" | \"bottom center\" | \"bottom left\" | \"bottom right\" | \"middle center left\" | \"middle center right\" | ... 35 more ...",
							"value": [
								{ "value": "\"middle\"" },
								{ "value": "\"top\"" },
								{ "value": "\"bottom\"" },
								{ "value": "\"middle center\"" },
								{ "value": "\"middle left\"" },
								{ "value": "\"middle right\"" },
								{ "value": "\"top center\"" },
								{ "value": "\"top left\"" },
								{ "value": "\"top right\"" },
								{ "value": "\"bottom center\"" },
								{ "value": "\"bottom left\"" },
								{ "value": "\"bottom right\"" },
								{ "value": "\"middle center left\"" },
								{ "value": "\"middle center right\"" },
								{ "value": "\"middle center top\"" },
								{ "value": "\"middle center bottom\"" },
								{ "value": "\"middle left left\"" },
								{ "value": "\"middle left right\"" },
								{ "value": "\"middle left top\"" },
								{ "value": "\"middle left bottom\"" },
								{ "value": "\"middle right left\"" },
								{ "value": "\"middle right right\"" },
								{ "value": "\"middle right top\"" },
								{ "value": "\"middle right bottom\"" },
								{ "value": "\"top center left\"" },
								{ "value": "\"top center right\"" },
								{ "value": "\"top center top\"" },
								{ "value": "\"top center bottom\"" },
								{ "value": "\"top left left\"" },
								{ "value": "\"top left right\"" },
								{ "value": "\"top left top\"" },
								{ "value": "\"top left bottom\"" },
								{ "value": "\"top right left\"" },
								{ "value": "\"top right right\"" },
								{ "value": "\"top right top\"" },
								{ "value": "\"top right bottom\"" },
								{ "value": "\"bottom center left\"" },
								{ "value": "\"bottom center right\"" },
								{ "value": "\"bottom center top\"" },
								{ "value": "\"bottom center bottom\"" },
								{ "value": "\"bottom left left\"" },
								{ "value": "\"bottom left right\"" },
								{ "value": "\"bottom left top\"" },
								{ "value": "\"bottom left bottom\"" },
								{ "value": "\"bottom right left\"" },
								{ "value": "\"bottom right right\"" },
								{ "value": "\"bottom right top\"" },
								{ "value": "\"bottom right bottom\"" }
							]
						}
					},
					"open": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/dropdown/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The controlled open state of the dropdown.\nMust be used in conjunction with `onToggle`.",
						"name": "open",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"defaultOpen": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/dropdown/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The open state of the dropdown when initially rendered.\nUse when you do not need to control its open state. It will be overridden\nby the `open` prop if it is specified on the component's first render.",
						"name": "defaultOpen",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
export { init_dropdown as n, Dropdown as t };
