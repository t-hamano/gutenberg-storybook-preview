import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as __, t as init_build_module } from "./build-module-v04us4E2.js";
import { n as useContextSystem, o as init_context_connect, r as contextConnect, t as init_use_context_system } from "./use-context-system-BCQpAcZ4.js";
import { n as init_component$1, t as Flex } from "./component-C5W2knei.js";
import { n as init_component$2, t as Text } from "./component-ezdH976D.js";
import { n as init_button, t as Button } from "./button-BqvmAVeL.js";
import { n as init_component$3, t as VStack } from "./component-C9_4TU-Q.js";
import { n as init_modal, t as Modal } from "./modal-DcDifT4L.js";
//#region ../packages/components/src/confirm-dialog/style.module.scss
var wrapper, style_module_default;
function init_style_module() {
	return (init_style_module = __esmMin((() => {
		wrapper = "_wrapper_1h5dp_1";
		style_module_default = { wrapper };
	})))();
}
//#endregion
//#region ../packages/components/src/confirm-dialog/component.tsx
var import_jsx_dev_runtime$1, _jsxFileName$1, UnconnectedConfirmDialog, ConfirmDialog;
function init_component() {
	return (init_component = __esmMin((() => {
		init_build_module();
		init_react();
		init_modal();
		init_use_context_system(), init_context_connect();
		init_component$1();
		init_button();
		init_component$2();
		init_component$3();
		init_style_module();
		import_jsx_dev_runtime$1 = require_jsx_dev_runtime();
		_jsxFileName$1 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/confirm-dialog/component.tsx";
		UnconnectedConfirmDialog = (props, forwardedRef) => {
			const { isOpen: isOpenProp, onConfirm, onCancel, children, confirmButtonText, cancelButtonText, isBusy, title, __experimentalHideHeader = true, ...otherProps } = useContextSystem(props, "ConfirmDialog");
			const wrapperClassName = style_module_default.wrapper;
			const cancelButtonRef = (0, import_react.useRef)(null);
			const confirmButtonRef = (0, import_react.useRef)(null);
			const [isOpen, setIsOpen] = (0, import_react.useState)();
			const [shouldSelfClose, setShouldSelfClose] = (0, import_react.useState)();
			(0, import_react.useEffect)(() => {
				const isIsOpenSet = typeof isOpenProp !== "undefined";
				setIsOpen(isIsOpenSet ? isOpenProp : true);
				setShouldSelfClose(!isIsOpenSet);
			}, [isOpenProp]);
			const handleEvent = (0, import_react.useCallback)((callback) => (event) => {
				callback?.(event);
				if (shouldSelfClose) setIsOpen(false);
			}, [shouldSelfClose, setIsOpen]);
			const handleEnter = (0, import_react.useCallback)((event) => {
				if (!(event.target === cancelButtonRef.current || event.target === confirmButtonRef.current) && event.key === "Enter") handleEvent(onConfirm)(event);
			}, [handleEvent, onConfirm]);
			const cancelLabel = cancelButtonText ?? __("Cancel");
			const confirmLabel = confirmButtonText ?? __("OK");
			return /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(import_jsx_dev_runtime$1.Fragment, { children: isOpen && /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(Modal, {
				onRequestClose: handleEvent(onCancel),
				onKeyDown: handleEnter,
				closeButtonLabel: cancelLabel,
				isDismissible: true,
				ref: forwardedRef,
				overlayClassName: wrapperClassName,
				title,
				__experimentalHideHeader,
				...otherProps,
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(VStack, {
					spacing: 8,
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(Text, { children }, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 91,
						columnNumber: 7
					}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(Flex, {
						direction: "row",
						justify: "flex-end",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(Button, {
							__next40pxDefaultSize: true,
							ref: cancelButtonRef,
							variant: "tertiary",
							onClick: handleEvent(onCancel),
							accessibleWhenDisabled: true,
							disabled: isBusy,
							children: cancelLabel
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 93,
							columnNumber: 8
						}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(Button, {
							__next40pxDefaultSize: true,
							ref: confirmButtonRef,
							variant: "primary",
							onClick: handleEvent(onConfirm),
							accessibleWhenDisabled: true,
							disabled: isBusy,
							isBusy,
							children: confirmLabel
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 103,
							columnNumber: 8
						}, void 0)]
					}, void 0, true, {
						fileName: _jsxFileName$1,
						lineNumber: 92,
						columnNumber: 7
					}, void 0)]
				}, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 90,
					columnNumber: 6
				}, void 0)
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 79,
				columnNumber: 5
			}, void 0) }, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 77,
				columnNumber: 3
			}, void 0);
		};
		ConfirmDialog = contextConnect(UnconnectedConfirmDialog, "ConfirmDialog");
		try {
			ConfirmDialog.__docgenInfo = {
				"description": "`ConfirmDialog` is built on top of [`Modal`](/packages/components/src/modal/README.md)\nand displays a confirmation dialog, with _confirm_ and _cancel_ buttons.\n\nThe dialog is confirmed by clicking the _confirm_ button or by pressing the `Enter` key.\nIt is cancelled (closed) by clicking the _cancel_ button, by pressing the `ESC` key, or by\nclicking outside the dialog focus (i.e. the overlay).\n\n`ConfirmDialog` has two main modes: controlled and uncontrolled.\n\n### Uncontrolled mode\n\nAllows the component to be used standalone, just by declaring it as part of another React\ncomponent's render method:\n\n- It will be automatically open (displayed) upon mounting.\n- It will be automatically closed when clicking the _cancel_ button, by pressing the `ESC`\n  key, or by clicking outside the dialog focus (i.e. the overlay).\n- `onCancel` is not mandatory but can be passed. Even if passed, the dialog will still be\n  able to close itself.\n\nActivating this mode is as simple as omitting the `isOpen` prop. The only mandatory prop\nin this case is the `onConfirm` callback. The message is passed as the `children`.\n\n```jsx\nimport { __experimentalConfirmDialog as ConfirmDialog } from '@wordpress/components';\n\nfunction Example() {\n	return (\n		<ConfirmDialog onConfirm={ () => console.debug( 'Confirmed!' ) }>\n			Are you sure? <strong>This action cannot be undone!</strong>\n		</ConfirmDialog>\n	);\n}\n```\n\n### Controlled mode\n\nLet the parent component control when the dialog is open/closed. It's activated when a\nboolean value is passed to `isOpen`:\n\n- It will not be automatically closed. You need to let it know when to open/close by\n  updating the value of the `isOpen` prop.\n- Both `onConfirm` and the `onCancel` callbacks are mandatory props in this mode.\n- You'll want to update the state that controls `isOpen` from the `onCancel` and\n  `onConfirm` callbacks.\n\n```jsx\nimport { useState } from '@wordpress/element';\nimport { __experimentalConfirmDialog as ConfirmDialog } from '@wordpress/components';\n\nfunction Example() {\n	const [ isOpen, setIsOpen ] = useState( true );\n\n	const handleConfirm = () => {\n		console.debug( 'Confirmed!' );\n		setIsOpen( false );\n	};\n\n	const handleCancel = () => {\n		console.debug( 'Cancelled!' );\n		setIsOpen( false );\n	};\n\n	return (\n		<ConfirmDialog\n			isOpen={ isOpen }\n			onConfirm={ handleConfirm }\n			onCancel={ handleCancel }\n		>\n			Are you sure? <strong>This action cannot be undone!</strong>\n		</ConfirmDialog>\n	);\n}\n```",
				"displayName": "ConfirmDialog",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/confirm-dialog/component.tsx",
				"methods": [],
				"props": {
					"children": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/confirm-dialog/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The actual message for the dialog. It's passed as children and any valid `ReactNode` is accepted.",
						"name": "children",
						"required": true,
						"tags": {},
						"type": { "name": "ReactNode" }
					},
					"size": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/confirm-dialog/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Size of the underlying Modal. See `Modal`'s `size` prop.",
						"name": "size",
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "\"small\" | \"fill\" | \"medium\" | \"large\"",
							"value": [
								{ "value": "\"small\"" },
								{ "value": "\"fill\"" },
								{ "value": "\"medium\"" },
								{ "value": "\"large\"" }
							]
						}
					},
					"onConfirm": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/confirm-dialog/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The callback that's called when the user confirms.\nA confirmation can happen when the `OK` button is clicked or when `Enter` is pressed.",
						"name": "onConfirm",
						"required": true,
						"tags": {},
						"type": { "name": "(event: DialogInputEvent) => void" }
					},
					"confirmButtonText": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/confirm-dialog/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The optional custom text to display as the confirmation button's label.",
						"name": "confirmButtonText",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"cancelButtonText": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/confirm-dialog/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The optional custom text to display as the cancellation button's label.",
						"name": "cancelButtonText",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"onCancel": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/confirm-dialog/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The callback that's called when the user cancels. A cancellation can happen\nwhen the `Cancel` button is clicked, when the `ESC` key is pressed, or when\na click outside of the dialog focus is detected (i.e. in the overlay).\n\nIt's not required if `isOpen` is not set (uncontrolled mode), as the component\nwill take care of closing itself, but you can still pass a callback if something\nmust be done upon cancelling (the component will still close itself in this case).\n\nIf `isOpen` is set (controlled mode), then it's required, and you need to set\nthe state that defines `isOpen` to `false` as part of this callback if you want the\ndialog to close when the user cancels.",
						"name": "onCancel",
						"required": false,
						"tags": {},
						"type": { "name": "((event: DialogInputEvent) => void)" }
					},
					"isOpen": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/confirm-dialog/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Defines if the dialog is open (displayed) or closed (not rendered/displayed).\nIt also implicitly toggles the controlled mode if set or the uncontrolled mode if it's not set.",
						"name": "isOpen",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"isBusy": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/confirm-dialog/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Indicates activity while an action is being performed.\nWhen `true`, the confirm button will show a busy state.\nBoth buttons will be disabled.",
						"name": "isBusy",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"title": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/confirm-dialog/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The title of the underlying `Modal`: its accessible name, and the\nvisible heading unless `__experimentalHideHeader` is `true`.",
						"name": "title",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"__experimentalHideHeader": {
						"defaultValue": { "value": "true" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/confirm-dialog/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Whether the underlying `Modal` should hide its header, `title` included.",
						"name": "__experimentalHideHeader",
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
//#region ../packages/components/src/confirm-dialog/stories/index.story.tsx
var import_jsx_dev_runtime, fn, _jsxFileName, meta, Template, Default, _defaultSnippet, WithCustomButtonLabels;
function init_index_story() {
	return (init_index_story = __esmMin((() => {
		init_react();
		init_button();
		init_component();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		({fn} = __STORYBOOK_MODULE_TEST__);
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/confirm-dialog/stories/index.story.tsx";
		meta = {
			component: ConfirmDialog,
			title: "Components/@wordpress-components/Overlays/ConfirmDialog",
			id: "components-confirmdialog",
			argTypes: { isOpen: { control: false } },
			tags: ["status-experimental", "manifest"],
			args: {
				onCancel: fn(),
				onConfirm: fn()
			},
			parameters: {
				controls: { expanded: true },
				componentStatus: {
					status: "recommended",
					whereUsed: "global",
					notes: "Will be superseded by [`AlertDialog`](?path=/docs/design-system-components-alertdialog--docs) in `@wordpress/ui`, but continue using for now."
				},
				docs: { canvas: { sourceState: "shown" } }
			}
		};
		Template = ({ onConfirm, onCancel, ...args }) => {
			const [isOpen, setIsOpen] = (0, import_react.useState)(false);
			const handleConfirm = (confirmArgs) => {
				onConfirm(confirmArgs);
				setIsOpen(false);
			};
			const handleCancel = (cancelArgs) => {
				onCancel?.(cancelArgs);
				setIsOpen(false);
			};
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
				__next40pxDefaultSize: true,
				variant: "primary",
				onClick: () => setIsOpen(true),
				children: "Open ConfirmDialog"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 55,
				columnNumber: 4
			}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ConfirmDialog, {
				...args,
				isOpen,
				onConfirm: handleConfirm,
				onCancel: handleCancel,
				children: args.children
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 63,
				columnNumber: 4
			}, void 0)] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 54,
				columnNumber: 3
			}, void 0);
		};
		Default = Template.bind({});
		_defaultSnippet = `() => {
  const [ isOpen, setIsOpen ] = useState( false );
  const [ confirmVal, setConfirmVal ] = useState('');

  const handleConfirm = () => {
    setConfirmVal( 'Confirmed!' );
    setIsOpen( false );
  };

  const handleCancel = () => {
    setConfirmVal( 'Cancelled' );
    setIsOpen( false );
  };

  return (
    <>
      <ConfirmDialog
        isOpen={ isOpen }
        onConfirm={ handleConfirm }
        onCancel={ handleCancel }
      >
        Would you like to privately publish the post now?
      </ConfirmDialog>

      <Heading level={ 1 }>{ confirmVal }</Heading>

      <Button variant="primary" onClick={ () => setIsOpen( true ) }>
        Open ConfirmDialog
      </Button>
    </>
  );
};`;
		Default.args = { children: "Would you like to privately publish the post now?" };
		Default.parameters = { docs: { source: {
			code: _defaultSnippet,
			language: "jsx",
			type: "auto"
		} } };
		WithCustomButtonLabels = Template.bind({});
		WithCustomButtonLabels.args = {
			...Default.args,
			cancelButtonText: "No thanks",
			confirmButtonText: "Yes please!"
		};
		Default.parameters = {
			...Default.parameters,
			docs: {
				...Default.parameters?.docs,
				source: {
					originalSource: "({\n  onConfirm,\n  onCancel,\n  ...args\n}) => {\n  const [isOpen, setIsOpen] = useState(false);\n  const handleConfirm: typeof onConfirm = confirmArgs => {\n    onConfirm(confirmArgs);\n    setIsOpen(false);\n  };\n  const handleCancel: typeof onCancel = cancelArgs => {\n    onCancel?.(cancelArgs);\n    setIsOpen(false);\n  };\n  return <>\n            <Button __next40pxDefaultSize variant=\"primary\" onClick={() => setIsOpen(true)}>\n                Open ConfirmDialog\n            </Button>\n\n            <ConfirmDialog {...args} isOpen={isOpen} onConfirm={handleConfirm} onCancel={handleCancel}>\n                {args.children}\n            </ConfirmDialog>\n        </>;\n}",
					...Default.parameters?.docs?.source
				}
			}
		};
		WithCustomButtonLabels.parameters = {
			...WithCustomButtonLabels.parameters,
			docs: {
				...WithCustomButtonLabels.parameters?.docs,
				source: {
					originalSource: "({\n  onConfirm,\n  onCancel,\n  ...args\n}) => {\n  const [isOpen, setIsOpen] = useState(false);\n  const handleConfirm: typeof onConfirm = confirmArgs => {\n    onConfirm(confirmArgs);\n    setIsOpen(false);\n  };\n  const handleCancel: typeof onCancel = cancelArgs => {\n    onCancel?.(cancelArgs);\n    setIsOpen(false);\n  };\n  return <>\n            <Button __next40pxDefaultSize variant=\"primary\" onClick={() => setIsOpen(true)}>\n                Open ConfirmDialog\n            </Button>\n\n            <ConfirmDialog {...args} isOpen={isOpen} onConfirm={handleConfirm} onCancel={handleCancel}>\n                {args.children}\n            </ConfirmDialog>\n        </>;\n}",
					...WithCustomButtonLabels.parameters?.docs?.source
				}
			}
		};
	})))();
}
//#endregion
init_index_story();
export { Default, WithCustomButtonLabels, meta as default };
